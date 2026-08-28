import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { neon } from "@neondatabase/serverless";
import { AlertTriangle, CheckCircle2, Target, TrendingUp } from "lucide-react";
import type { FicheContent } from "@/lib/machine/fiche";

export const dynamic = "force-dynamic";

const BASE_URL = "https://www.growth-acceleration.fr";

const FORMAT_LABELS: Record<string, string> = {
  recette: "Recette",
  fiche: "Fiche",
  checklist: "Checklist",
};

interface FicheRow {
  slug: string;
  title: string;
  format: string;
  summary: string;
  content: FicheContent;
  source_attribution: string | null;
  published_at: string;
}

async function getFiche(slug: string): Promise<FicheRow | null> {
  const sql = neon(process.env.DATABASE_URL!);
  const rows = await sql`
    SELECT slug, title, format, summary, content, source_attribution, published_at
    FROM fiches WHERE slug = ${slug} AND status = 'published'
  `;
  return (rows[0] as unknown as FicheRow) ?? null;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const fiche = await getFiche(slug);
  if (!fiche) return {};
  return {
    title: fiche.title,
    description: fiche.summary.slice(0, 160),
    alternates: { canonical: `/fiches/${fiche.slug}` },
    openGraph: {
      title: `${fiche.title} | Growth Acceleration`,
      description: fiche.summary.slice(0, 160),
      type: "article",
    },
  };
}

function buildSchemas(fiche: FicheRow) {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: fiche.title,
    description: fiche.summary,
    inLanguage: "fr",
    step: fiche.content.etapes.map((etape, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: etape.titre,
      text: etape.detail,
    })),
    publisher: { "@id": `${BASE_URL}/#organization` },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Fiches pratiques", item: `${BASE_URL}/fiches` },
      { "@type": "ListItem", position: 3, name: fiche.title, item: `${BASE_URL}/fiches/${fiche.slug}` },
    ],
  };

  return [howToSchema, breadcrumbSchema];
}

export default async function FichePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const fiche = await getFiche(slug);
  if (!fiche) notFound();

  const content = fiche.content;

  return (
    <main className="min-h-screen bg-[#1E1E1E] pt-24 pb-16">
      {buildSchemas(fiche).map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Resume citation-ready */}
      <section className="bg-[#2D2A2E] border-b border-[#E07A5F]/20">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <p className="text-[#A9A9A9] text-sm font-mono mb-2">&gt; cat fiche.txt</p>
          <p className="text-[#F4F1DE] leading-relaxed">{fiche.summary}</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 pt-12">
        <p className="text-[#E07A5F] text-xs font-mono uppercase mb-3">
          {FORMAT_LABELS[fiche.format] ?? "Fiche"} pratique
        </p>
        <h1 className="text-3xl md:text-4xl font-mono font-bold text-[#FAFAFA] mb-10 leading-tight">
          {fiche.title}
        </h1>

        <section className="bg-[#2D2A2E]/50 border border-[#FAFAFA]/10 rounded-lg p-6 mb-8">
          <h2 className="flex items-center gap-2 text-[#E07A5F] font-mono font-bold text-sm uppercase mb-3">
            <Target className="w-4 h-4" /> Objectif
          </h2>
          <p className="text-[#F4F1DE] leading-relaxed">{content.objectif}</p>
        </section>

        {content.prerequis.length > 0 && (
          <section className="mb-8">
            <h2 className="text-[#FAFAFA] font-mono font-bold text-lg mb-4">
              <span className="text-[#E07A5F]">&gt;</span> Prerequis
            </h2>
            <ul className="space-y-2">
              {content.prerequis.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#F4F1DE]">
                  <CheckCircle2 className="w-5 h-5 text-[#98C379] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mb-8">
          <h2 className="text-[#FAFAFA] font-mono font-bold text-lg mb-4">
            <span className="text-[#E07A5F]">&gt;</span> Etapes
          </h2>
          <ol className="space-y-6">
            {content.etapes.map((etape, i) => (
              <li key={i} className="flex gap-4">
                <span className="w-8 h-8 rounded-lg bg-[#E07A5F]/20 text-[#E07A5F] font-mono font-bold flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-[#FAFAFA] font-mono font-bold mb-1">{etape.titre}</h3>
                  <p className="text-[#A9A9A9] leading-relaxed">{etape.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {content.pieges.length > 0 && (
          <section className="bg-[#2D2A2E]/50 border border-dashed border-[#E06C75]/40 rounded-lg p-6 mb-8">
            <h2 className="flex items-center gap-2 text-[#E06C75] font-mono font-bold text-sm uppercase mb-3">
              <AlertTriangle className="w-4 h-4" /> Pieges a eviter
            </h2>
            <ul className="space-y-2">
              {content.pieges.map((piege, i) => (
                <li key={i} className="text-[#F4F1DE] leading-relaxed">
                  — {piege}
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mb-8">
          <h2 className="text-[#FAFAFA] font-mono font-bold text-lg mb-3">
            <span className="text-[#E07A5F]">&gt;</span> Exemple concret
          </h2>
          <p className="text-[#F4F1DE] leading-relaxed">{content.exemple}</p>
        </section>

        <section className="bg-[#2D2A2E]/50 border border-[#98C379]/30 rounded-lg p-6 mb-12">
          <h2 className="flex items-center gap-2 text-[#98C379] font-mono font-bold text-sm uppercase mb-3">
            <TrendingUp className="w-4 h-4" /> Ce que vous y gagnez
          </h2>
          <p className="text-[#F4F1DE] leading-relaxed">{content.gain}</p>
        </section>

        {fiche.source_attribution && (
          <p className="text-[#A9A9A9] text-sm font-mono mb-12">
            Inspire de : {fiche.source_attribution}
          </p>
        )}

        {/* CTA formations */}
        <section className="border border-dashed border-[#E07A5F]/40 rounded-lg p-8 text-center">
          <h2 className="text-xl font-mono font-bold text-[#FAFAFA] mb-3">
            Envie d aller plus loin que la fiche ?
          </h2>
          <p className="text-[#A9A9A9] mb-6">
            Nos formations pratiques (Claude Code, agents IA, automatisations) transforment ces
            recettes en reflexes pour votre equipe.
          </p>
          <Link
            href="/formation-intelligence-artificielle"
            className="inline-block bg-[#E07A5F] text-[#1E1E1E] font-mono font-bold px-6 py-3 rounded hover:bg-[#E07A5F]/90 transition-colors"
          >
            Voir les formations
          </Link>
        </section>
      </article>
    </main>
  );
}
