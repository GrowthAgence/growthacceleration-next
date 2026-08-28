import Link from "next/link";
import type { Metadata } from "next";
import { neon } from "@neondatabase/serverless";
import { ArrowRight, FileText } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Fiches pratiques IA - Recettes et checklists",
  description:
    "Fiches pratiques IA pour dirigeants de TPE/PME : recettes pas a pas, checklists et syntheses actionnables sur les agents IA, l automatisation et les outils IA.",
  keywords: [
    "fiche pratique IA",
    "recette IA",
    "checklist IA",
    "agents IA",
    "automatisation",
    "TPE PME",
  ],
  alternates: {
    canonical: "/fiches",
  },
  openGraph: {
    title: "Fiches pratiques IA | Growth Acceleration",
    description: "Recettes pas a pas, checklists et syntheses actionnables sur l IA pour dirigeants.",
    type: "website",
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Fiches pratiques IA - Growth Acceleration",
  description:
    "Fiches pratiques sur l intelligence artificielle pour dirigeants de TPE/PME : recettes, checklists et syntheses actionnables.",
  url: "https://www.growth-acceleration.fr/fiches",
  publisher: {
    "@id": "https://www.growth-acceleration.fr/#organization",
  },
  inLanguage: "fr",
};

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
  published_at: string;
}

export default async function FichesPage() {
  const sql = neon(process.env.DATABASE_URL!);
  const fiches = (await sql`
    SELECT slug, title, format, summary, published_at
    FROM fiches WHERE status = 'published'
    ORDER BY published_at DESC
    LIMIT 100
  `) as unknown as FicheRow[];

  return (
    <main className="min-h-screen bg-[#1E1E1E] pt-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      {/* Resume citation-ready */}
      <section className="bg-[#2D2A2E] border-b border-[#E07A5F]/20">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <p className="text-[#A9A9A9] text-sm font-mono mb-2">&gt; cat fiches.txt</p>
          <p className="text-[#F4F1DE] leading-relaxed">
            <strong>Les fiches pratiques Growth Acceleration</strong> sont des recettes pas a pas,
            checklists et syntheses actionnables sur l intelligence artificielle, redigees pour des
            dirigeants de TPE/PME. Chaque fiche est auto-suffisante : objectif, prerequis, etapes,
            pieges a eviter et gain concret.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 pt-12">
        <h1 className="text-3xl md:text-4xl font-mono font-bold text-[#FAFAFA] mb-3">
          <span className="text-[#E07A5F]">$</span> Fiches pratiques IA
        </h1>
        <p className="text-[#A9A9A9] mb-12">
          Des recettes concretes, sans jargon, a appliquer dans votre entreprise.
        </p>

        {fiches.length === 0 ? (
          <p className="text-[#A9A9A9] font-mono">Les premieres fiches arrivent tres bientot.</p>
        ) : (
          <div className="space-y-6">
            {fiches.map((fiche) => (
              <Link
                key={fiche.slug}
                href={`/fiches/${fiche.slug}`}
                className="block bg-[#2D2A2E]/50 border border-[#FAFAFA]/10 rounded-lg p-6 hover:border-[#E07A5F]/30 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <FileText className="w-4 h-4 text-[#E07A5F]" />
                  <span className="text-[#E07A5F] text-xs font-mono uppercase">
                    {FORMAT_LABELS[fiche.format] ?? "Fiche"}
                  </span>
                </div>
                <h2 className="text-lg font-mono font-bold text-[#FAFAFA] mb-2 group-hover:text-[#E07A5F] transition-colors">
                  {fiche.title}
                </h2>
                <p className="text-[#A9A9A9] text-sm leading-relaxed mb-3">{fiche.summary}</p>
                <span className="inline-flex items-center gap-1 text-[#E07A5F] text-sm font-mono">
                  Lire la fiche <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
