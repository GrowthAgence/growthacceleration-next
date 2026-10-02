import { NextRequest, NextResponse } from "next/server";
import { validateNewsletterSignup } from "@/lib/newsletter";
import { sendConfirmation } from "@/lib/newsletter-mailing";
import { startSubscription } from "@/lib/newsletter-subscriptions";

// Creation du contact + envoi Mautic : quelques appels de 5 s au pire.
export const maxDuration = 30;

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

// status renvoye au formulaire :
// - "pending"   : mail de confirmation envoye, la personne doit cliquer le lien
// - "confirmed" : deja inscrite, ou confirmee sans lien (repli)
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
    return NextResponse.json({ success: true, status: "pending" });
  }

  const validation = validateNewsletterSignup(body);
  if (!validation.ok) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }
  const { email, firstName } = validation.value;

  try {
    const start = await startSubscription(email, firstName, SOURCE);
    if (start.action === "already-confirmed") {
      return NextResponse.json({ success: true, status: "confirmed" });
    }
    if (start.action === "recently-sent") {
      return NextResponse.json({ success: true, status: "pending" });
    }

    const outcome = await sendConfirmation(start.subscription);
    if (outcome === "failed") {
      return NextResponse.json(
        { error: "Inscription impossible pour le moment, reessayez plus tard." },
        { status: 502 },
      );
    }
    return NextResponse.json({
      success: true,
      status: outcome === "confirmation-sent" ? "pending" : "confirmed",
    });
  } catch (error) {
    console.error("Newsletter signup failed", { error });
    return NextResponse.json(
      { error: "Inscription impossible pour le moment, reessayez plus tard." },
      { status: 500 },
    );
  }
}
