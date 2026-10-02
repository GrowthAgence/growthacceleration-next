import { NextRequest, NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/admin-auth";
import { MauticRequestError, mauticGet } from "@/lib/mautic";
import {
  buildCampaigns,
  type MauticEmailStat,
  type MauticPageHit,
  type NewsletterContact,
} from "@/lib/newsletter-stats";
import { listSubscriptions } from "@/lib/newsletter-subscriptions";

// Deux vagues d'appels en parallele, 4 s chacune : tient sous les 10 s de la fonction.
const MAUTIC_CALL_TIMEOUT_MS = 4000;
const STATS_LIMIT = 1000;
const TEST_TAG = "test";

interface StatsResponse<T> {
  stats?: T[];
}

interface ContactsResponse {
  contacts?: Record<
    string,
    { id: number; fields: { all: { firstname?: string | null; email?: string | null } }; tags?: { tag: string }[] }
  >;
}

// Filtre "email_id > 0" de l'API stats de Mautic (exclut les lignes d'emails supprimes).
const EMAIL_ROWS_FILTER = "where[0][col]=email_id&where[0][expr]=gt&where[0][val]=0";

async function fetchContacts(leadIds: string[]): Promise<Map<string, NewsletterContact>> {
  if (leadIds.length === 0) return new Map();
  const data = await mauticGet<ContactsResponse>(
    `/contacts?search=${encodeURIComponent(`ids:${leadIds.join(",")}`)}&limit=${leadIds.length}`,
    MAUTIC_CALL_TIMEOUT_MS,
  );
  return new Map(
    Object.values(data.contacts ?? {}).map((c) => [
      String(c.id),
      {
        id: String(c.id),
        firstName: c.fields.all.firstname || null,
        email: c.fields.all.email ?? "",
        isTest: (c.tags ?? []).some((t) => t.tag === TEST_TAG),
      },
    ]),
  );
}

// Le nom de l'email exige la permission "Emails" sur le role API de Mautic.
// Sans elle, on affiche "Newsletter n°X" plutot que de faire echouer la page.
async function fetchEmailNames(emailIds: string[]): Promise<Map<string, string>> {
  const entries = await Promise.all(
    emailIds.map(async (id) => {
      try {
        const data = await mauticGet<{ email?: { subject?: string; name?: string } }>(
          `/emails/${id}`,
          MAUTIC_CALL_TIMEOUT_MS,
        );
        const name = data.email?.subject || data.email?.name;
        return name ? ([id, name] as const) : null;
      } catch (error) {
        if (!(error instanceof MauticRequestError && error.status === 403)) {
          console.error("Newsletter admin: email name lookup failed", { id, error });
        }
        return null;
      }
    }),
  );
  return new Map(entries.filter((e): e is readonly [string, string] => e !== null));
}

export async function GET(request: NextRequest) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const [statsData, hitsData] = await Promise.all([
      mauticGet<StatsResponse<MauticEmailStat>>(
        `/stats/email_stats?${EMAIL_ROWS_FILTER}&limit=${STATS_LIMIT}`,
        MAUTIC_CALL_TIMEOUT_MS,
      ),
      mauticGet<StatsResponse<MauticPageHit>>(
        `/stats/page_hits?${EMAIL_ROWS_FILTER}&limit=${STATS_LIMIT}`,
        MAUTIC_CALL_TIMEOUT_MS,
      ),
    ]);
    const stats = statsData.stats ?? [];
    const hits = hitsData.stats ?? [];

    const leadIds = [...new Set(stats.map((s) => s.lead_id).filter((id): id is string => Boolean(id)))];
    const emailIds = [...new Set(stats.map((s) => s.email_id).filter((id): id is string => Boolean(id)))];
    const [contacts, emailNames] = await Promise.all([fetchContacts(leadIds), fetchEmailNames(emailIds)]);

    // Le jeton de confirmation ne sort jamais du serveur, meme vers l'admin.
    const subscriptions = (await listSubscriptions()).map((s) => ({ ...s, confirm_token: undefined }));

    return NextResponse.json({ campaigns: buildCampaigns(stats, hits, contacts, emailNames), subscriptions });
  } catch (error) {
    console.error("Newsletter admin: Mautic fetch failed", { error });
    return NextResponse.json(
      { error: "Impossible de lire les stats Mautic pour le moment." },
      { status: 502 },
    );
  }
}
