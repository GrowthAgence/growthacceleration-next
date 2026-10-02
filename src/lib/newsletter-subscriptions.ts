import { randomBytes } from "node:crypto";
import { neon } from "@neondatabase/serverless";

// Inscriptions newsletter (double opt-in). Table Neon `newsletter_subscriptions` :
// une ligne par email, pending tant que le lien de confirmation n'a pas ete valide.

const CONFIRM_LINK_TTL_DAYS = 7;
// Pas de nouveau mail de confirmation si le precedent date de moins de 5 minutes
// (double clic, impatience, ou quelqu'un qui bombarde une adresse).
const RESEND_COOLDOWN_MINUTES = 5;

export interface NewsletterSubscription {
  id: number;
  email: string;
  first_name: string | null;
  status: "pending" | "confirmed";
  confirm_token: string | null;
  mautic_contact_id: number | null;
  source: string;
  created_at: string;
  confirmation_sent_at: string | null;
  confirmed_at: string | null;
  welcome_email_id: number | null;
  welcome_email_name: string | null;
  welcome_sent_at: string | null;
}

export type StartResult =
  | { action: "already-confirmed"; subscription: NewsletterSubscription }
  | { action: "recently-sent"; subscription: NewsletterSubscription }
  | { action: "send-confirmation"; subscription: NewsletterSubscription };

export type ConfirmResult =
  | { ok: true; subscription: NewsletterSubscription }
  | { ok: false; reason: "invalid" | "expired" | "already-confirmed" };

function db() {
  return neon(process.env.DATABASE_URL!);
}

function newToken(): string {
  return randomBytes(24).toString("base64url");
}

/** Cree ou rafraichit une inscription en attente et dit s'il faut envoyer le mail de confirmation. */
export async function startSubscription(
  email: string,
  firstName: string | null,
  source: string,
): Promise<StartResult> {
  const sql = db();
  const [existing] = (await sql`
    SELECT * FROM newsletter_subscriptions WHERE email = ${email}
  `) as NewsletterSubscription[];

  if (existing?.status === "confirmed") {
    return { action: "already-confirmed", subscription: existing };
  }

  const sentAt = existing?.confirmation_sent_at ? new Date(existing.confirmation_sent_at).getTime() : 0;
  if (existing && Date.now() - sentAt < RESEND_COOLDOWN_MINUTES * 60_000) {
    return { action: "recently-sent", subscription: existing };
  }

  const [subscription] = (await sql`
    INSERT INTO newsletter_subscriptions (email, first_name, source, confirm_token)
    VALUES (${email}, ${firstName}, ${source}, ${newToken()})
    ON CONFLICT (email) DO UPDATE SET
      first_name = COALESCE(EXCLUDED.first_name, newsletter_subscriptions.first_name),
      confirm_token = EXCLUDED.confirm_token
    RETURNING *
  `) as NewsletterSubscription[];
  return { action: "send-confirmation", subscription };
}

export async function markConfirmationSent(id: number, mauticContactId: number): Promise<void> {
  await db()`
    UPDATE newsletter_subscriptions
    SET confirmation_sent_at = now(), mautic_contact_id = ${mauticContactId}
    WHERE id = ${id}
  `;
}

/** Lit l'inscription liee a un lien de confirmation, sans la modifier (affichage de la page). */
export async function findByToken(token: string): Promise<NewsletterSubscription | null> {
  if (!token) return null;
  const [row] = (await db()`
    SELECT * FROM newsletter_subscriptions WHERE confirm_token = ${token}
  `) as NewsletterSubscription[];
  return row ?? null;
}

export function isLinkExpired(subscription: NewsletterSubscription): boolean {
  const sentAt = subscription.confirmation_sent_at ?? subscription.created_at;
  return Date.now() - new Date(sentAt).getTime() > CONFIRM_LINK_TTL_DAYS * 86_400_000;
}

/** Passe l'inscription en confirmee. Atomique : deux clics simultanes ne confirment qu'une fois. */
export async function confirmByToken(token: string): Promise<ConfirmResult> {
  const subscription = await findByToken(token);
  if (!subscription) return { ok: false, reason: "invalid" };
  if (subscription.status === "confirmed") return { ok: false, reason: "already-confirmed" };
  if (isLinkExpired(subscription)) return { ok: false, reason: "expired" };

  const [confirmed] = (await db()`
    UPDATE newsletter_subscriptions
    SET status = 'confirmed', confirmed_at = now()
    WHERE id = ${subscription.id} AND status = 'pending'
    RETURNING *
  `) as NewsletterSubscription[];
  return confirmed ? { ok: true, subscription: confirmed } : { ok: false, reason: "already-confirmed" };
}

/** Confirme sans lien (repli quand le mail de confirmation ne peut pas partir). */
export async function confirmDirectly(id: number): Promise<NewsletterSubscription> {
  const [row] = (await db()`
    UPDATE newsletter_subscriptions
    SET status = 'confirmed', confirmed_at = COALESCE(confirmed_at, now())
    WHERE id = ${id}
    RETURNING *
  `) as NewsletterSubscription[];
  return row;
}

export async function recordWelcomeSent(
  id: number,
  mauticContactId: number,
  email: { id: number; name: string },
): Promise<void> {
  await db()`
    UPDATE newsletter_subscriptions
    SET welcome_email_id = ${email.id}, welcome_email_name = ${email.name},
        welcome_sent_at = now(), mautic_contact_id = ${mauticContactId}
    WHERE id = ${id}
  `;
}

export async function listSubscriptions(): Promise<NewsletterSubscription[]> {
  return (await db()`
    SELECT * FROM newsletter_subscriptions ORDER BY created_at DESC LIMIT 200
  `) as NewsletterSubscription[];
}
