const MAUTIC_TIMEOUT_MS = 8000;

interface MauticLead {
  email: string;
  phone?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  company?: string | null;
  resourceRequested?: string | null;
  source?: string | null;
}

function getMauticConfig() {
  const url = process.env.MAUTIC_URL;
  const user = process.env.MAUTIC_API_USER;
  const password = process.env.MAUTIC_API_PASSWORD;

  if (!url || !user || !password) {
    return null;
  }

  return { url: url.replace(/\/$/, ""), user, password };
}

function basicAuth(config: { user: string; password: string }): string {
  return `Basic ${Buffer.from(`${config.user}:${config.password}`).toString("base64")}`;
}

export class MauticRequestError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
  }
}

/**
 * Lecture de l'API Mautic (admin du site). Contrairement a pushLeadToMautic,
 * lance une MauticRequestError : l'appelant decide quoi afficher.
 */
export async function mauticGet<T>(path: string, timeoutMs = MAUTIC_TIMEOUT_MS): Promise<T> {
  const config = getMauticConfig();
  if (!config) {
    throw new MauticRequestError("Mautic non configure (MAUTIC_URL/MAUTIC_API_USER/MAUTIC_API_PASSWORD)", 500);
  }

  const response = await fetch(`${config.url}/api${path}`, {
    headers: { Authorization: basicAuth(config) },
    signal: AbortSignal.timeout(timeoutMs),
    cache: "no-store",
  });
  if (!response.ok) {
    const body = await response.text();
    throw new MauticRequestError(`Mautic GET ${path} (${response.status}): ${body.slice(0, 200)}`, response.status);
  }
  return (await response.json()) as T;
}

/**
 * Pousse un lead vers Mautic (contact taggé site-ga, alimenté dans le
 * segment "Leads site GA"). Ne lance jamais d'exception : Mautic est une
 * copie marketing, Neon reste la source de vérité — un échec ici ne doit
 * pas faire échouer la capture du lead.
 */
export async function pushLeadToMautic(lead: MauticLead): Promise<boolean> {
  const config = getMauticConfig();
  if (!config) {
    console.error("Mautic push skipped: MAUTIC_URL/MAUTIC_API_USER/MAUTIC_API_PASSWORD not configured");
    return false;
  }

  try {
    const response = await fetch(`${config.url}/api/contacts/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: basicAuth(config),
      },
      body: JSON.stringify({
        email: lead.email,
        phone: lead.phone || undefined,
        firstname: lead.firstName || undefined,
        lastname: lead.lastName || undefined,
        company: lead.company || undefined,
        resource_requested: lead.resourceRequested || undefined,
        lead_source: lead.source || "website",
        tags: ["site-ga"],
      }),
      signal: AbortSignal.timeout(MAUTIC_TIMEOUT_MS),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error(`Mautic push failed (${response.status}): ${body.slice(0, 300)}`);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Mautic push failed:", error instanceof Error ? error.message : error);
    return false;
  }
}
