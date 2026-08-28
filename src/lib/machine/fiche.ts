import Anthropic from "@anthropic-ai/sdk";
import { neon } from "@neondatabase/serverless";

const GENERATION_MODEL = "claude-sonnet-5";
const MAX_SOURCE_LENGTH = 8000;

export interface FicheContent {
  objectif: string;
  prerequis: string[];
  etapes: { titre: string; detail: string }[];
  pieges: string[];
  exemple: string;
  gain: string;
}

export interface FicheDraft {
  title: string;
  format: "recette" | "fiche" | "checklist";
  summary: string;
  content: FicheContent;
  sourceAttribution: string | null;
}

// Charte editoriale : distillee de ~/contenu/positionnement-tone-of-voice.md (valide 08/08/2026)
const SYSTEM_PROMPT = `Tu transformes du contenu source (posts LinkedIn/X, articles, newsletters) en fiches pratiques pour le site growth-acceleration.fr, signees Frederic Orlicki (Growth Acceleration, formateur IA, Paris).

CIBLE : dirigeants de TPE/PME curieux d'IA. Vulgarisation totale — zero jargon non explique en une phrase.

TON — « l'operateur qui montre ses mains » :
1. Praticien, jamais gourou. Chaque affirmation concrete et actionnable.
2. Chiffres reels ou rien — jamais de chiffre rond invente. Si la source donne un chiffre, cite-le ; sinon n'en invente aucun.
3. Direct, oral, cash — phrases courtes.
4. Didactique par l'exemple : un concept = un cas concret.
MOTS BANNIS : revolutionnaire, game changer, incroyable, disruptif, toute promesse sans preuve.

REGLES ABSOLUES :
- Tu t'INSPIRES de la source, tu ne la plagies JAMAIS : la fiche est une re-creation avec l'angle Growth Acceleration (pragmatique, oriente resultat business).
- N'invente aucun fait : si la source ne dit pas comment faire une etape, reste au niveau de detail qu'elle permet.
- La fiche doit etre auto-suffisante : le lecteur n'a pas besoin de la source pour agir.
- Francais correct avec accents.

FORMATS : "recette" (procedure pas-a-pas), "fiche" (synthese d'un concept + comment l'exploiter), "checklist" (liste de verification). Choisis le plus adapte a la source.

Reponds UNIQUEMENT avec un objet JSON valide (aucun texte autour) :
{
  "title": "titre accrocheur et concret, max 70 caracteres",
  "format": "recette | fiche | checklist",
  "summary": "2-3 phrases citation-ready qui resument la fiche (reprises telles quelles par les moteurs IA : autonomes, factuelles, avec le benefice)",
  "content": {
    "objectif": "ce que le lecteur obtient en appliquant la fiche, 1-2 phrases",
    "prerequis": ["prerequis concret", "..."],
    "etapes": [{"titre": "titre court", "detail": "explication actionnable, 2-4 phrases"}],
    "pieges": ["piege concret a eviter", "..."],
    "exemple": "un cas d'usage concret pour une TPE/PME, 2-4 phrases",
    "gain": "ce que ca fait gagner au dirigeant (temps, argent, clients), 1-2 phrases, sans chiffre invente"
  },
  "sourceAttribution": "auteur/media de la source si identifiable dans le texte, sinon null"
}`;

export async function generateFiche(sourceText: string, extraInstruction?: string): Promise<FicheDraft | null> {
  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  const userContent = [
    `CONTENU SOURCE :\n---\n${sourceText.slice(0, MAX_SOURCE_LENGTH)}\n---`,
    extraInstruction ? `INSTRUCTION SUPPLEMENTAIRE : ${extraInstruction}` : null,
    "Produis la fiche en JSON.",
  ]
    .filter(Boolean)
    .join("\n\n");

  try {
    const response = await anthropic.messages.create({
      model: GENERATION_MODEL,
      max_tokens: 3000,
      system: [{ type: "text", text: SYSTEM_PROMPT, cache_control: { type: "ephemeral" } }],
      messages: [{ role: "user", content: userContent }],
    });

    const text = response.content
      .filter((block): block is Anthropic.TextBlock => block.type === "text")
      .map((block) => block.text)
      .join("");

    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      console.error("generateFiche: no JSON in model output");
      return null;
    }

    const parsed = JSON.parse(jsonMatch[0]) as FicheDraft;
    if (!parsed.title || !parsed.summary || !parsed.content?.objectif || !parsed.content?.etapes?.length) {
      console.error("generateFiche: incomplete fiche structure");
      return null;
    }
    if (!["recette", "fiche", "checklist"].includes(parsed.format)) {
      parsed.format = "fiche";
    }

    return parsed;
  } catch (error) {
    console.error("generateFiche failed:", error instanceof Error ? error.message : error);
    return null;
  }
}

export function slugify(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export async function uniqueSlug(title: string): Promise<string> {
  const sql = neon(process.env.DATABASE_URL!);
  const base = slugify(title) || "fiche";
  const existing = await sql`SELECT slug FROM fiches WHERE slug LIKE ${base + "%"}`;
  const taken = new Set(existing.map((row) => row.slug as string));
  if (!taken.has(base)) return base;
  for (let i = 2; i < 100; i++) {
    if (!taken.has(`${base}-${i}`)) return `${base}-${i}`;
  }
  return `${base}-${Date.now()}`;
}
