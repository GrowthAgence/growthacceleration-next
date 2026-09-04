import Anthropic from "@anthropic-ai/sdk";
import { neon } from "@neondatabase/serverless";

const REPLY_MODEL = "claude-sonnet-5";
const LINKEDIN_TIMEOUT_MS = 10000;

const sql = neon(process.env.DATABASE_URL!);

// Charte : reponse de Frederic Orlicki a un commentaire sous son post LinkedIn.
const REPLY_SYSTEM_PROMPT = `Tu rediges la reponse de Frederic Orlicki (Growth Acceleration, formateur IA, il construit une boite pilotee par des agents IA en public) a un commentaire recu sous un de ses posts LinkedIn.

REGLES :
- 1 a 3 phrases, jamais plus. Direct, chaleureux, oral.
- Remercie sans flagornerie, rebondis sur UNE idee du commentaire, ajoute un petit plus (precision vecue, nuance, question ouverte pour poursuivre la conversation).
- Tutoie uniquement si le commentaire tutoie, sinon vouvoie.
- Zero vente, zero lien, maximum 1 emoji, pas de hashtag.
- N'invente aucun fait ni chiffre.
- Si le commentaire est negatif ou piegeux : reste factuel et de bonne foi, jamais defensif.
- Francais correct avec accents.

Reponds UNIQUEMENT avec le texte de la reponse, rien d'autre.`;

export async function draftCommentReply(commentText: string, postContext?: string): Promise<string | null> {
  try {
    const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
    const response = await anthropic.messages.create({
      model: REPLY_MODEL,
      max_tokens: 300,
      system: REPLY_SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: `${postContext ? `POST CONCERNE :\n${postContext}\n\n` : ""}COMMENTAIRE RECU :\n${commentText}\n\nRedige la reponse.`,
        },
      ],
    });
    const text = response.content
      .filter((block): block is Anthropic.TextBlock => block.type === "text")
      .map((block) => block.text)
      .join("")
      .trim();
    return text || null;
  } catch (error) {
    console.error("draftCommentReply failed:", error instanceof Error ? error.message : error);
    return null;
  }
}

export async function getLinkedinCredentials(): Promise<{ token: string; person: string } | null> {
  const rows = await sql`SELECT key, value FROM machine_config WHERE key IN ('li_token', 'li_person')`;
  const config = Object.fromEntries(rows.map((row) => [row.key, row.value]));
  if (!config.li_token || !config.li_person) return null;
  return { token: config.li_token, person: config.li_person };
}

export async function postLinkedinReply(
  activityUrn: string,
  parentCommentUrn: string,
  text: string,
): Promise<boolean> {
  const creds = await getLinkedinCredentials();
  if (!creds) {
    console.error("postLinkedinReply: LinkedIn credentials missing in machine_config");
    return false;
  }

  try {
    const response = await fetch(
      `https://api.linkedin.com/v2/socialActions/${encodeURIComponent(activityUrn)}/comments`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${creds.token}`,
          "X-Restli-Protocol-Version": "2.0.0",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          actor: `urn:li:person:${creds.person}`,
          message: { text },
          parentComment: parentCommentUrn,
        }),
        signal: AbortSignal.timeout(LINKEDIN_TIMEOUT_MS),
      },
    );

    if (!response.ok) {
      console.error(`postLinkedinReply failed (${response.status}): ${(await response.text()).slice(0, 300)}`);
      return false;
    }
    return true;
  } catch (error) {
    console.error("postLinkedinReply failed:", error instanceof Error ? error.message : error);
    return false;
  }
}
