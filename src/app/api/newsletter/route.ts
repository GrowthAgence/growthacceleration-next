import { neon } from "@neondatabase/serverless";
import { NextRequest, NextResponse } from "next/server";
import { pushLeadToMautic } from "@/lib/mautic";
import { validateNewsletterSignup } from "@/lib/newsletter";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const SOURCE = "newsletter-blog";

// Rate limiting en memoire : par instance serverless, suffisant pour dissuader
// l'abus simple sans dependance externe (meme approche que /api/chat).
const rateLimitBuckets = new Map<string, { count: number; windowStart: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const bucket = rateLimitBuckets.get(ip);
  if (!bucket || now - bucket.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitBuckets.set(ip, { count: 1, windowStart: now });
    return false;
  }
  bucket.count += 1;
  return bucket.count > RATE_LIMIT_MAX_REQUESTS;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Trop de tentatives, reessayez dans quelques minutes." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requete invalide" }, { status: 400 });
  }

  // Champ piege invisible : un humain le laisse vide, un robot le remplit.
  // On repond "succes" pour ne pas lui apprendre a contourner le piege.
  if (typeof body === "object" && body !== null && (body as Record<string, unknown>).website) {
    return NextResponse.json({ success: true });
  }

  const validation = validateNewsletterSignup(body);
  if (!validation.ok) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }
  const { email, firstName } = validation.value;

  try {
    const sql = neon(process.env.DATABASE_URL!);
    await sql`
      INSERT INTO leads (email, first_name, resource_requested, source)
      VALUES (${email}, ${firstName}, ${"newsletter"}, ${SOURCE})
    `;
  } catch (error) {
    console.error("Newsletter signup: Neon insert failed", { error });
    return NextResponse.json(
      { error: "Inscription impossible pour le moment, reessayez plus tard." },
      { status: 500 },
    );
  }

  // Copie marketing vers Mautic (tag site-ga => segment de la newsletter). Ne bloque jamais.
  await pushLeadToMautic({ email, firstName, resourceRequested: "newsletter", source: SOURCE });

  return NextResponse.json({ success: true });
}
