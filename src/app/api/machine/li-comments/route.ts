import { neon } from "@neondatabase/serverless";
import { NextRequest, NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/admin-auth";
import { draftCommentReply } from "@/lib/machine/licomments";
import { escapeHtml, sendTelegramMessage } from "@/lib/machine/telegram";

export const runtime = "nodejs";
export const maxDuration = 60;

const MAX_COMMENTS_PER_RUN = 5;

const sql = neon(process.env.DATABASE_URL!);

interface IncomingComment {
  urn: string;
  activity: string;
  author?: string;
  text: string;
  postText?: string;
}

// Ingestion appelee par le cron du VPS : recoit les commentaires LinkedIn recents
// + le token/person frais tires de la base Postiz. Dedup par comment_urn, redige
// une reponse par nouveau commentaire et l'envoie a Fred sur Telegram pour validation.
export async function POST(request: NextRequest) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: { token?: string; person?: string; comments?: IncomingComment[] };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Bad payload" }, { status: 400 });
  }

  // Rafraichit les credentials LinkedIn (le token Postiz tourne, le cron nous garde a jour)
  if (body.token && body.person) {
    await sql`INSERT INTO machine_config (key, value) VALUES ('li_token', ${body.token})
      ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value`;
    await sql`INSERT INTO machine_config (key, value) VALUES ('li_person', ${body.person})
      ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value`;
  }

  const ownerRows = await sql`SELECT value FROM machine_config WHERE key = 'owner_chat_id'`;
  const ownerChatId = ownerRows[0]?.value as string | undefined;

  const comments = (body.comments ?? []).slice(0, 50);
  let created = 0;

  for (const comment of comments) {
    if (!comment.urn || !comment.activity || !comment.text) continue;
    if (created >= MAX_COMMENTS_PER_RUN) break;

    const inserted = await sql`
      INSERT INTO li_comment_queue (comment_urn, activity_urn, author_urn, comment_text)
      VALUES (${comment.urn}, ${comment.activity}, ${comment.author ?? null}, ${comment.text})
      ON CONFLICT (comment_urn) DO NOTHING
      RETURNING id
    `;
    if (inserted.length === 0) continue;
    const queueId = inserted[0].id as number;
    created++;

    const draft = await draftCommentReply(comment.text, comment.postText);
    if (!draft) {
      await sql`UPDATE li_comment_queue SET status = 'draft_failed' WHERE id = ${queueId}`;
      continue;
    }
    await sql`UPDATE li_comment_queue SET draft_reply = ${draft} WHERE id = ${queueId}`;

    if (ownerChatId) {
      await sendTelegramMessage(
        ownerChatId,
        [
          `💬 <b>Nouveau commentaire LinkedIn</b>`,
          ``,
          `« ${escapeHtml(comment.text.slice(0, 800))} »`,
          ``,
          `✍️ <b>Reponse proposee :</b>`,
          escapeHtml(draft),
        ].join("\n"),
        [
          [
            { text: "✅ Publier la reponse", callback_data: `licpub:${queueId}` },
            { text: "🙈 Ignorer", callback_data: `licign:${queueId}` },
          ],
        ],
      );
    }
  }

  return NextResponse.json({ ok: true, received: comments.length, new: created });
}
