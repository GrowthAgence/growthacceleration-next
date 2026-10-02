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
  return mauticRequest<T>("GET", path, undefined, timeoutMs);
}

export async function mauticPost<T>(path: string, body: unknown, timeoutMs = MAUTIC_TIMEOUT_MS): Promise<T> {
  return mauticRequest<T>("POST", path, body, timeoutMs);
}

async function mauticRequest<T>(
  method: "GET" | "POST",
  path: string,
  body: unknown,
  timeoutMs: number,
): Promise<T> {
  const config = getMauticConfig();
  if (!config) {
    throw new MauticRequestError("Mautic non configure (MAUTIC_URL/MAUTIC_API_USER/MAUTIC_API_PASSWORD)", 500);
  }

  const response = await fetch(`${config.url}/api${path}`, {
    method,
    headers: {
      Authorization: basicAuth(config),
      ...(body === undefined ? {} : { "Content-Type": "application/json" }),
    },
    body: body === undefined ? undefined : JSON.stringify(body),
    signal: AbortSignal.timeout(timeoutMs),
    cache: "no-store",
  });
  if (!response.ok) {
    const text = await response.text();
    throw new MauticRequestError(`Mautic ${method} ${path} (${response.status}): ${text.slice(0, 200)}`, response.status);
  }
  return (await response.json()) as T;
}

// Tag qui fait entrer le contact dans le segment "Leads site GA" (celui de la newsletter).
export const NEWSLETTER_TAG = "site-ga";

/**
 * Pousse un lead vers Mautic (par defaut tagge site-ga, donc dans le segment
 * "Leads site GA"). Un tag prefixe par "-" est retire. Ne lance jamais
 * d'exception : Mautic est une copie marketing, Neon reste la source de
 * verite — un echec ici ne doit pas faire echouer la capture du lead.
 * Renvoie l'id du contact Mautic, ou null en cas d'echec.
 */
export async function pushLeadToMautic(
  lead: MauticLead,
  tags: string[] = [NEWSLETTER_TAG],
): Promise<number | null> {
  const config = getMauticConfig();
  if (!config) {
    console.error("Mautic push skipped: MAUTIC_URL/MAUTIC_API_USER/MAUTIC_API_PASSWORD not configured");
    return null;
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
        tags,
      }),
      signal: AbortSignal.timeout(MAUTIC_TIMEOUT_MS),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error(`Mautic push failed (${response.status}): ${body.slice(0, 300)}`);
      return null;
    }

    const data = (await response.json()) as { contact?: { id?: number } };
    return data.contact?.id ?? null;
  } catch (error) {
    console.error("Mautic push failed:", error instanceof Error ? error.message : error);
    return null;
  }
}
