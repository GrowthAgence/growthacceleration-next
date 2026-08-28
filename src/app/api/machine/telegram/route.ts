import { neon } from "@neondatabase/serverless";
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import {
  answerCallbackQuery,
  editTelegramMessage,
  escapeHtml,
  sendTelegramMessage,
} from "@/lib/machine/telegram";
import { generateFiche, uniqueSlug, type FicheDraft } from "@/lib/machine/fiche";

export const runtime = "nodejs";
export const maxDuration = 60;

const SITE_URL = "https://www.growth-acceleration.fr";
const URL_FETCH_TIMEOUT_MS = 6000;
const MIN_TEXT_WITHOUT_URL = 80;

const sql = neon(process.env.DATABASE_URL!);

interface TelegramUpdate {
  update_id: number;
  message?: {
    message_id: number;
    chat: { id: number };
    text?: string;
  };
  callback_query?: {
    id: string;
    data?: string;
    message?: { message_id: number; chat: { id: number } };
  };
}

// Le premier chat qui ecrit au bot devient proprietaire ; tous les autres sont ignores.
async function resolveOwner(chatId: number): Promise<"owner" | "claimed" | "stranger"> {
  const rows = await sql`SELECT value FROM machine_config WHERE key = 'owner_chat_id'`;
  if (rows.length === 0) {
    await sql`INSERT INTO machine_config (key, value) VALUES ('owner_chat_id', ${String(chatId)}) ON CONFLICT (key) DO NOTHING`;
    const check = await sql`SELECT value FROM machine_config WHERE key = 'owner_chat_id'`;
    return check[0]?.value === String(chatId) ? "claimed" : "stranger";
  }
  return rows[0].value === String(chatId) ? "owner" : "stranger";
}

async function fetchUrlText(url: string): Promise<string | null> {
  try {
    const response = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; GA-Machine/1.0)" },
      signal: AbortSignal.timeout(URL_FETCH_TIMEOUT_MS),
      redirect: "follow",
    });
    if (!response.ok) return null;
    const html = await response.text();
    const text = html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    return text.length > 200 ? text.slice(0, 8000) : null;
  } catch {
    return null;
  }
}

function ficheSteps(draft: FicheDraft): string {
  return draft.content.etapes.map((etape, i) => `${i + 1}. ${escapeHtml(etape.titre)}`).join("\n");
}

function draftPreview(draft: FicheDraft, ficheId: number): string {
  return [
    `📄 <b>Brouillon #${ficheId} — ${escapeHtml(draft.title)}</b>`,
    `<i>Format : ${draft.format}</i>`,
    ``,
    escapeHtml(draft.summary),
    ``,
    `<b>Objectif :</b> ${escapeHtml(draft.content.objectif)}`,
    ``,
    `<b>Etapes :</b>`,
    ficheSteps(draft),
    ``,
    `<b>Gain :</b> ${escapeHtml(draft.content.gain)}`,
  ].join("\n");
}

const draftButtons = (ficheId: number) => [
  [
    { text: "✅ Publier", callback_data: `pub:${ficheId}` },
    { text: "🔄 Autre angle", callback_data: `regen:${ficheId}` },
    { text: "❌ Rejeter", callback_data: `rej:${ficheId}` },
  ],
];

async function handleIncomingText(chatId: number, text: string): Promise<void> {
  if (text.startsWith("/start")) {
    await sendTelegramMessage(
      chatId,
      [
        "🏭 <b>Machine a fiches Growth Acceleration</b>",
        "",
        "Envoie-moi un post LinkedIn/X (copier-coller du texte, c'est le plus fiable) ou un lien d'article.",
        "Je le transforme en fiche pratique, tu valides, elle part sur growth-acceleration.fr/fiches.",
      ].join("\n"),
    );
    return;
  }

  const urlMatch = text.match(/https?:\/\/[^\s]+/);
  const url = urlMatch?.[0] ?? null;
  let sourceText = text;

  // Lien quasi nu : on tente de recuperer le contenu de la page
  if (url && text.replace(url, "").trim().length < MIN_TEXT_WITHOUT_URL) {
    const fetched = await fetchUrlText(url);
    if (fetched) {
      sourceText = `${text}\n\nCONTENU DE LA PAGE :\n${fetched}`;
    } else {
      await sendTelegramMessage(
        chatId,
        "⚠️ Je n'arrive pas a lire cette page (LinkedIn et X bloquent la lecture). Colle-moi directement le texte du post.",
      );
      return;
    }
  }

  const inserted = await sql`
    INSERT INTO machine_sources (raw_text, url, origin) VALUES (${text}, ${url}, 'telegram') RETURNING id
  `;
  const sourceId = inserted[0].id as number;

  await sendTelegramMessage(chatId, "⏳ Je transforme en fiche...");

  const draft = await generateFiche(sourceText);
  if (!draft) {
    await sendTelegramMessage(chatId, "❌ La generation a echoue. Reessaie, ou envoie une source plus fournie.");
    return;
  }

  const slug = await uniqueSlug(draft.title);
  const ficheRows = await sql`
    INSERT INTO fiches (source_id, slug, title, format, summary, content, source_url, source_attribution)
    VALUES (${sourceId}, ${slug}, ${draft.title}, ${draft.format}, ${draft.summary},
            ${JSON.stringify(draft.content)}, ${url}, ${draft.sourceAttribution})
    RETURNING id
  `;
  const ficheId = ficheRows[0].id as number;
  await sql`UPDATE machine_sources SET status = 'processed' WHERE id = ${sourceId}`;

  await sendTelegramMessage(chatId, draftPreview(draft, ficheId), draftButtons(ficheId));
}

async function handleCallback(update: NonNullable<TelegramUpdate["callback_query"]>): Promise<void> {
  const chatId = update.message?.chat.id;
  const messageId = update.message?.message_id;
  const [action, idRaw] = (update.data ?? "").split(":");
  const ficheId = Number(idRaw);

  if (!chatId || !messageId || !Number.isInteger(ficheId)) {
    await answerCallbackQuery(update.id);
    return;
  }

  const rows = await sql`SELECT id, slug, title, status, source_id FROM fiches WHERE id = ${ficheId}`;
  const fiche = rows[0];
  if (!fiche) {
    await answerCallbackQuery(update.id, "Fiche introuvable");
    return;
  }

  if (action === "pub") {
    await sql`UPDATE fiches SET status = 'published', published_at = now() WHERE id = ${ficheId}`;
    revalidatePath("/fiches");
    revalidatePath(`/fiches/${fiche.slug}`);
    await answerCallbackQuery(update.id, "Publiee !");
    await editTelegramMessage(
      chatId,
      messageId,
      `✅ <b>Publiee :</b> ${escapeHtml(fiche.title as string)}\n${SITE_URL}/fiches/${fiche.slug}`,
    );
    return;
  }

  if (action === "rej") {
    await sql`UPDATE fiches SET status = 'rejected' WHERE id = ${ficheId}`;
    await answerCallbackQuery(update.id, "Rejetee");
    await editTelegramMessage(chatId, messageId, `❌ <b>Rejetee :</b> ${escapeHtml(fiche.title as string)}`);
    return;
  }

  if (action === "regen") {
    await answerCallbackQuery(update.id, "Je retente avec un autre angle...");
    const sources = await sql`SELECT raw_text FROM machine_sources WHERE id = ${fiche.source_id}`;
    if (!sources[0]) return;

    const draft = await generateFiche(
      sources[0].raw_text as string,
      `La version precedente ("${fiche.title}") n'a pas convaincu : propose un angle et un titre sensiblement differents.`,
    );
    if (!draft) {
      await sendTelegramMessage(chatId, "❌ La regeneration a echoue. Reessaie.");
      return;
    }

    await sql`UPDATE fiches SET status = 'rejected' WHERE id = ${ficheId}`;
    const slug = await uniqueSlug(draft.title);
    const newRows = await sql`
      INSERT INTO fiches (source_id, slug, title, format, summary, content, source_attribution)
      VALUES (${fiche.source_id}, ${slug}, ${draft.title}, ${draft.format}, ${draft.summary},
              ${JSON.stringify(draft.content)}, ${draft.sourceAttribution})
      RETURNING id
    `;
    const newId = newRows[0].id as number;
    await sendTelegramMessage(chatId, draftPreview(draft, newId), draftButtons(newId));
    return;
  }

  await answerCallbackQuery(update.id);
}

export async function POST(request: NextRequest) {
  const secret = process.env.TELEGRAM_WEBHOOK_SECRET;
  if (!secret || request.headers.get("x-telegram-bot-api-secret-token") !== secret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let update: TelegramUpdate;
  try {
    update = await request.json();
  } catch {
    return NextResponse.json({ error: "Bad payload" }, { status: 400 });
  }

  try {
    // Dedup : Telegram renvoie le meme update si on repond trop lentement
    const dedup = await sql`
      INSERT INTO machine_updates (update_id) VALUES (${update.update_id}) ON CONFLICT (update_id) DO NOTHING RETURNING update_id
    `;
    if (dedup.length === 0) {
      return NextResponse.json({ ok: true, duplicate: true });
    }

    if (update.callback_query) {
      const chatId = update.callback_query.message?.chat.id;
      if (chatId && (await resolveOwner(chatId)) !== "stranger") {
        await handleCallback(update.callback_query);
      }
      return NextResponse.json({ ok: true });
    }

    const message = update.message;
    if (!message?.text) {
      return NextResponse.json({ ok: true });
    }

    const ownership = await resolveOwner(message.chat.id);
    if (ownership === "stranger") {
      return NextResponse.json({ ok: true });
    }
    if (ownership === "claimed") {
      await sendTelegramMessage(message.chat.id, "🔐 Bot lie a ce compte Telegram. C'est toi le patron.");
    }

    await handleIncomingText(message.chat.id, message.text.trim());
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("machine/telegram webhook error:", error instanceof Error ? error.message : error);
    // 200 quand meme : sinon Telegram rejoue l'update en boucle
    return NextResponse.json({ ok: false });
  }
}
