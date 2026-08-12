import Anthropic from "@anthropic-ai/sdk";
import { neon } from "@neondatabase/serverless";
import { Resend } from "resend";
import { CHATBOT_SYSTEM_PROMPT } from "@/lib/chatbot-prompt";

export const runtime = "nodejs";
export const maxDuration = 60;

const UUID_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const MAX_MESSAGES = 30;
const MAX_MESSAGE_LENGTH = 1500;
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 25;

// Rate limiting en memoire : par instance serverless, suffisant pour dissuader
// l'abus simple sans dependance externe.
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

type IncomingMessage = { role: "user" | "assistant"; content: string };

// Enregistre la conversation en base et notifie Frederic par email
// a la premiere question. Best-effort : une erreur ici ne casse pas le chat.
async function persistConversation(
  conversationId: string,
  fullTranscript: IncomingMessage[],
) {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) return;

  const sql = neon(databaseUrl);
  const existing =
    await sql`SELECT 1 FROM chat_conversations WHERE id = ${conversationId}`;
  const isNewConversation = existing.length === 0;

  await sql`
    INSERT INTO chat_conversations (id, messages)
    VALUES (${conversationId}, ${JSON.stringify(fullTranscript)}::jsonb)
    ON CONFLICT (id)
    DO UPDATE SET messages = EXCLUDED.messages, updated_at = now()
  `;

  if (isNewConversation && process.env.RESEND_API_KEY) {
    const firstQuestion = fullTranscript.find((m) => m.role === "user");
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Chatbot GA <noreply@planctolab.com>",
      to: "fredericorlicki@gmail.com",
      subject: "💬 Nouvelle conversation sur le chatbot Growth Acceleration",
      html: `<div style="font-family: sans-serif; max-width: 600px;">
        <h2>Nouvelle conversation sur le site</h2>
        <p><strong>Première question du visiteur :</strong></p>
        <blockquote style="border-left: 3px solid #E07A5F; padding-left: 12px; color: #444;">
          ${(firstQuestion?.content ?? "").replace(/</g, "&lt;")}
        </blockquote>
        <p><a href="https://www.growth-acceleration.fr/admin">Voir la conversation complète dans l'admin →</a></p>
      </div>`,
    });
  }
}

function validateMessages(payload: unknown): IncomingMessage[] | null {
  if (!payload || typeof payload !== "object") return null;
  const { messages } = payload as { messages?: unknown };
  if (!Array.isArray(messages) || messages.length === 0 || messages.length > MAX_MESSAGES) {
    return null;
  }
  const validated: IncomingMessage[] = [];
  for (const m of messages) {
    if (!m || typeof m !== "object") return null;
    const { role, content } = m as { role?: unknown; content?: unknown };
    if (role !== "user" && role !== "assistant") return null;
    if (typeof content !== "string" || content.trim().length === 0) return null;
    if (content.length > MAX_MESSAGE_LENGTH) return null;
    validated.push({ role, content: content.trim() });
  }
  if (validated[validated.length - 1].role !== "user") return null;
  return validated;
}

export async function POST(request: Request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "Chat indisponible pour le moment." },
      { status: 503 },
    );
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return Response.json(
      { error: "Trop de messages d'un coup — reessayez dans quelques minutes." },
      { status: 429 },
    );
  }

  let messages: IncomingMessage[] | null = null;
  let conversationId: string | null = null;
  try {
    const payload = await request.json();
    messages = validateMessages(payload);
    const { conversationId: rawId } = payload as { conversationId?: unknown };
    if (typeof rawId === "string" && UUID_REGEX.test(rawId)) {
      conversationId = rawId.toLowerCase();
    }
  } catch {
    messages = null;
  }
  if (!messages) {
    return Response.json({ error: "Requete invalide." }, { status: 400 });
  }

  const client = new Anthropic({ apiKey });

  try {
    const stream = client.messages.stream({
      model: "claude-opus-5",
      max_tokens: 1024,
      system: [
        {
          type: "text",
          text: CHATBOT_SYSTEM_PROMPT,
          cache_control: { type: "ephemeral" },
        },
      ],
      messages,
    });

    const encoder = new TextEncoder();
    const validatedMessages = messages;
    let assistantReply = "";
    const readable = new ReadableStream<Uint8Array>({
      start(controller) {
        stream.on("text", (delta) => {
          assistantReply += delta;
          controller.enqueue(encoder.encode(delta));
        });
        stream.on("end", async () => {
          if (conversationId && assistantReply) {
            try {
              await persistConversation(conversationId, [
                ...validatedMessages,
                { role: "assistant", content: assistantReply },
              ]);
            } catch (err) {
              console.error("[chat] persist error:", err);
            }
          }
          controller.close();
        });
        stream.on("error", (err) => {
          console.error("[chat] stream error:", err);
          controller.error(err);
        });
      },
      cancel() {
        stream.abort();
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  } catch (error: unknown) {
    console.error("[chat] request error:", error);
    return Response.json(
      { error: "Le chat rencontre un probleme — reessayez dans un instant." },
      { status: 502 },
    );
  }
}
