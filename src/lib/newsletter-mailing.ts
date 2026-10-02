import { neon } from "@neondatabase/serverless";
import { MauticRequestError, NEWSLETTER_TAG, mauticGet, mauticPost, pushLeadToMautic } from "@/lib/mautic";
import {
  confirmDirectly,
  markConfirmationSent,
  recordWelcomeSent,
  type NewsletterSubscription,
} from "@/lib/newsletter-subscriptions";

// Envois Mautic du double opt-in : mail de confirmation, puis derniere newsletter.

const SITE_URL = "https://www.growth-acceleration.fr";
// Contact cree mais pas encore confirme : hors du segment de la newsletter.
const PENDING_TAG = "newsletter-attente";
const CALL_TIMEOUT_MS = 5000;

interface MauticEmailSummary {
  id: number;
  name: string;
  subject?: string;
  emailType: string;
  isPublished: boolean;
  sentCount: number;
}

export type SignupOutcome = "confirmation-sent" | "confirmed-without-link" | "failed";

function confirmUrl(token: string): string {
  return `${SITE_URL}/newsletter/confirmer?t=${encodeURIComponent(token)}`;
}

/** Id du mail de confirmation (email Mautic de type template). Absent = pas de double opt-in possible. */
function confirmationEmailId(): number | null {
  const id = Number(process.env.NEWSLETTER_CONFIRM_EMAIL_ID);
  return Number.isInteger(id) && id > 0 ? id : null;
}

async function sendMauticEmail(emailId: number, contactId: number, tokens?: Record<string, string>): Promise<void> {
  const result = await mauticPost<{ success?: boolean | number }>(
    `/emails/${emailId}/contact/${contactId}/send`,
    tokens ? { tokens } : {},
    CALL_TIMEOUT_MS,
  );
  if (!result.success) {
    throw new MauticRequestError(`Mautic n'a pas envoye l'email ${emailId} au contact ${contactId}`, 502);
  }
}

/**
 * Etape 1 : cree le contact (tag "en attente") et lui envoie le lien de confirmation.
 * Sans mail de confirmation configure, ou s'il ne peut pas partir, on confirme
 * directement plutot que de perdre l'inscription (et on le logue).
 */
export async function sendConfirmation(subscription: NewsletterSubscription): Promise<SignupOutcome> {
  const emailId = confirmationEmailId();
  const contactId = await pushLeadToMautic(
    { email: subscription.email, firstName: subscription.first_name, resourceRequested: "newsletter", source: subscription.source },
    emailId ? [PENDING_TAG] : [NEWSLETTER_TAG],
  );
  if (!contactId) return "failed";

  if (emailId && subscription.confirm_token) {
    try {
      await sendMauticEmail(emailId, contactId, { "{confirm_url}": confirmUrl(subscription.confirm_token) });
      await markConfirmationSent(subscription.id, contactId);
      return "confirmation-sent";
    } catch (error) {
      console.error("Newsletter: confirmation email failed, confirming without link", { error });
    }
  } else {
    console.error("Newsletter: NEWSLETTER_CONFIRM_EMAIL_ID absent, inscription confirmee sans lien");
  }

  const confirmed = await confirmDirectly(subscription.id);
  await completeConfirmation(confirmed);
  return "confirmed-without-link";
}

/** Derniere newsletter partie (email de type liste, publie, deja envoye). */
export async function findLatestNewsletter(): Promise<{ id: number; name: string } | null> {
  const data = await mauticGet<{ emails?: Record<string, MauticEmailSummary> | MauticEmailSummary[] }>(
    "/emails?limit=50&orderBy=id&orderByDir=DESC",
    CALL_TIMEOUT_MS,
  );
  const latest = Object.values(data.emails ?? {})
    .filter((e) => e.emailType === "list" && e.isPublished && e.sentCount > 0)
    .sort((a, b) => b.id - a.id)[0];
  return latest ? { id: latest.id, name: latest.subject || latest.name } : null;
}

async function hasReceived(emailId: number, contactId: number): Promise<boolean> {
  const filter = [
    `where[0][col]=email_id&where[0][expr]=eq&where[0][val]=${emailId}`,
    `where[1][col]=lead_id&where[1][expr]=eq&where[1][val]=${contactId}`,
  ].join("&");
  const data = await mauticGet<{ total?: string | number }>(`/stats/email_stats?${filter}&limit=1`, CALL_TIMEOUT_MS);
  return Number(data.total ?? 0) > 0;
}

/**
 * Etape 2 (lien valide) : lead dans Neon, contact dans le segment newsletter,
 * puis envoi immediat de la derniere newsletter s'il ne l'a pas deja recue.
 * Les newsletters suivantes partent avec les autres, via le segment.
 */
export async function completeConfirmation(subscription: NewsletterSubscription): Promise<void> {
  try {
    await neon(process.env.DATABASE_URL!)`
      INSERT INTO leads (email, first_name, resource_requested, source)
      VALUES (${subscription.email}, ${subscription.first_name}, ${"newsletter"}, ${subscription.source})
    `;
  } catch (error) {
    console.error("Newsletter: Neon lead insert failed", { error });
  }

  const contactId = await pushLeadToMautic(
    { email: subscription.email, firstName: subscription.first_name, resourceRequested: "newsletter", source: subscription.source },
    [NEWSLETTER_TAG, `-${PENDING_TAG}`],
  );
  if (!contactId) return;

  try {
    const latest = await findLatestNewsletter();
    if (!latest || (await hasReceived(latest.id, contactId))) return;
    await sendMauticEmail(latest.id, contactId);
    await recordWelcomeSent(subscription.id, contactId, latest);
  } catch (error) {
    console.error("Newsletter: welcome send failed", { email: subscription.id, error });
  }
}
