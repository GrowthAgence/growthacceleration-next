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
    const auth = Buffer.from(`${config.user}:${config.password}`).toString("base64");
    const response = await fetch(`${config.url}/api/contacts/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${auth}`,
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
