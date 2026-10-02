// Calcul des stats newsletter a partir des tables brutes de Mautic.
// Module pur (pas d'appel reseau) : la route /api/admin/newsletter lui passe les lignes.

// Robots qui chargent le pixel sans qu'un humain ouvre le mail. Brevo, notre relais
// SMTP, telecharge les images de chaque mail quelques secondes apres l'envoi : sans
// ce filtre, chaque destinataire compterait comme "ouvert".
const MACHINE_USER_AGENTS = [
  /brevo/i,
  /redirection-images/i,
  /barracuda|mimecast|proofpoint|symantec|trendmicro|forcepoint/i,
  /bot|crawler|spider|scanner|preview/i,
  /python|curl|wget|java\/|go-http|okhttp/i,
];

export interface MauticEmailStat {
  email_id: string | null;
  lead_id: string | null;
  email_address: string | null;
  date_sent: string | null;
  is_failed: string;
  open_details: string | null;
}

export interface MauticPageHit {
  email_id: string | null;
  lead_id: string | null;
  date_hit: string | null;
}

export interface NewsletterContact {
  id: string;
  firstName: string | null;
  email: string;
  isTest: boolean;
}

export type RecipientStatus = "clicked" | "opened" | "machine-only" | "not-opened" | "failed";

export interface NewsletterRecipient {
  leadId: string;
  firstName: string | null;
  email: string;
  sentAt: string | null;
  status: RecipientStatus;
  firstOpenAt: string | null;
  humanOpens: number;
  machineOpens: number;
}

export interface NewsletterCampaign {
  emailId: string;
  name: string;
  sentAt: string | null;
  sent: number;
  failed: number;
  opened: number;
  clicked: number;
  // Taux "brut" tel que Mautic l'affiche (robots compris), pour comparaison.
  rawOpened: number;
  recipients: NewsletterRecipient[];
}

interface OpenEvent {
  datetime: string;
  isMachine: boolean;
}

/** Extrait les ouvertures du champ open_details (tableau PHP serialise). */
export function parseOpenDetails(serialized: string | null): OpenEvent[] {
  if (!serialized) return [];
  const pattern = /"datetime";s:\d+:"([^"]*)";s:\d+:"useragent";s:\d+:"([^"]*)"/g;
  return Array.from(serialized.matchAll(pattern), ([, datetime, userAgent]) => ({
    datetime,
    isMachine: isMachineUserAgent(userAgent),
  }));
}

export function isMachineUserAgent(userAgent: string): boolean {
  if (!userAgent.trim()) return true;
  return MACHINE_USER_AGENTS.some((pattern) => pattern.test(userAgent));
}

function toRecipient(
  stat: MauticEmailStat,
  contact: NewsletterContact | undefined,
  hasClicked: boolean,
): NewsletterRecipient {
  const opens = parseOpenDetails(stat.open_details);
  const humanOpens = opens.filter((o) => !o.isMachine);
  const machineOpens = opens.length - humanOpens.length;

  let status: RecipientStatus = "not-opened";
  if (stat.is_failed === "1") status = "failed";
  else if (hasClicked) status = "clicked";
  else if (humanOpens.length > 0) status = "opened";
  else if (machineOpens > 0) status = "machine-only";

  return {
    leadId: stat.lead_id ?? "",
    firstName: contact?.firstName ?? null,
    email: contact?.email ?? stat.email_address ?? "",
    sentAt: stat.date_sent,
    status,
    firstOpenAt: humanOpens[0]?.datetime ?? null,
    humanOpens: humanOpens.length,
    machineOpens,
  };
}

/**
 * Regroupe les envois par newsletter. Les contacts de test sont exclus, ainsi que
 * les lignes orphelines (email supprime dans Mautic, email_id vide).
 */
export function buildCampaigns(
  stats: MauticEmailStat[],
  hits: MauticPageHit[],
  contacts: Map<string, NewsletterContact>,
  emailNames: Map<string, string>,
): NewsletterCampaign[] {
  const clickedKeys = new Set(hits.map((h) => `${h.email_id}:${h.lead_id}`));
  const byEmail = new Map<string, NewsletterRecipient[]>();

  for (const stat of stats) {
    if (!stat.email_id || !stat.lead_id) continue;
    const contact = contacts.get(stat.lead_id);
    if (contact?.isTest) continue;
    const recipient = toRecipient(stat, contact, clickedKeys.has(`${stat.email_id}:${stat.lead_id}`));
    byEmail.set(stat.email_id, [...(byEmail.get(stat.email_id) ?? []), recipient]);
  }

  return Array.from(byEmail, ([emailId, recipients]) => {
    const sentDates = recipients.map((r) => r.sentAt).filter((d): d is string => Boolean(d)).sort();
    return {
      emailId,
      name: emailNames.get(emailId) ?? `Newsletter n°${emailId}`,
      sentAt: sentDates[0] ?? null,
      sent: recipients.length,
      failed: recipients.filter((r) => r.status === "failed").length,
      opened: recipients.filter((r) => r.status === "opened" || r.status === "clicked").length,
      clicked: recipients.filter((r) => r.status === "clicked").length,
      rawOpened: recipients.filter((r) => r.humanOpens + r.machineOpens > 0).length,
      recipients: [...recipients].sort((a, b) => a.email.localeCompare(b.email)),
    };
  }).sort((a, b) => (b.sentAt ?? "").localeCompare(a.sentAt ?? ""));
}
