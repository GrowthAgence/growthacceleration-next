import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog IA - Articles et guides pratiques",
  description:
    "Articles pratiques sur l IA, Claude Code, GEO, agents IA et automatisation. Guides, comparatifs et tutoriels pour entrepreneurs et managers.",
  keywords: [
    "blog IA",
    "formation IA",
    "Claude Code",
    "GEO",
    "agents IA",
    "N8N",
    "automatisation IA",
    "intelligence artificielle",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog IA - Articles et guides pratiques | Growth Acceleration",
    description:
      "Guides, comparatifs et tutoriels sur l IA pour entrepreneurs et managers.",
    type: "website",
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Blog IA - Growth Acceleration",
  description:
    "Articles pratiques sur l intelligence artificielle, Claude Code, GEO, agents IA et automatisation pour entrepreneurs et managers.",
  url: "https://www.growth-acceleration.fr/blog",
  publisher: {
    "@id": "https://www.growth-acceleration.fr/#organization",
  },
  inLanguage: "fr",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: "https://www.growth-acceleration.fr",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://www.growth-acceleration.fr/blog",
    },
  ],
};

const articles = [
  {
    slug: "claude-code-vs-cursor",
    title: "Claude Code vs Cursor vs Copilot : comparatif 2026",
    excerpt:
      "Quel outil de coding IA choisir ? Comparaison detaillee des fonctionnalites, prix, et cas d usage de Claude Code, Cursor et GitHub Copilot.",
    date: "2026-02-24",
    readTime: "10 min",
    tag: "Comparatif",
    formation: "/claude-code",
  },
  {
    slug: "guide-geo-2026",
    title: "GEO : le guide complet du Generative Engine Optimization",
    excerpt:
      "Comment optimiser votre site pour etre cite par ChatGPT, Perplexity et Claude. Strategies, techniques et outils du GEO en 2026.",
    date: "2026-02-24",
    readTime: "12 min",
    tag: "Guide",
    formation: "/geo",
  },
  {
    slug: "agents-ia-entreprise",
    title: "Agents IA en entreprise : cas d usage et deploiement",
    excerpt:
      "Comment deployer des agents IA dans votre organisation. Cas concrets, architectures et retours d experience de PME et grands groupes.",
    date: "2026-02-24",
    readTime: "11 min",
    tag: "Guide",
    formation: "/agents-ai",
  },
  {
    slug: "formation-ia-debutant",
    title: "Formation IA : par ou commencer quand on est debutant",
    excerpt:
      "Le guide etape par etape pour se former a l intelligence artificielle sans background technique. Parcours, outils et ressources recommandes.",
    date: "2026-02-24",
    readTime: "9 min",
    tag: "Guide",
    formation: "/formation-intelligence-artificielle",
  },
  {
    slug: "n8n-vs-make-vs-zapier",
    title: "N8N vs Make vs Zapier : quel outil d automatisation en 2026",
    excerpt:
      "Comparatif detaille des 3 plateformes d automatisation. Prix, fonctionnalites, integrations IA et cas d usage pour choisir le bon outil.",
    date: "2026-02-24",
    readTime: "10 min",
    tag: "Comparatif",
    formation: "/automations",
  },
];

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* RESUME LLM-FRIENDLY */}
      <section className="bg-[#2D2A2E] border-b border-[#E07A5F]/20">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <p className="text-[#A9A9A9] text-sm font-mono mb-2">&gt; cat blog.txt</p>
          <p className="text-[#F4F1DE] leading-relaxed">
            <strong>Blog Growth Acceleration</strong> publie des articles pratiques sur l intelligence
            artificielle pour entrepreneurs et managers. Sujets couverts : Claude Code, Cursor, GitHub
            Copilot (comparatifs outils de coding IA), Generative Engine Optimization (GEO), agents IA
            en entreprise, formations IA pour debutants, et automatisation avec N8N, Make et Zapier.
            Tous les articles incluent des cas concrets, des tableaux comparatifs et des recommandations
            actionnables.
          </p>
        </div>
      </section>

      {/* HERO */}
      <section className="pt-20 pb-12 px-4 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-[#2D2A2E] px-3 py-1 rounded-full border border-[#FAFAFA]/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#E07A5F] animate-pulse" />
            <span className="text-[#A9A9A9] text-xs font-mono uppercase tracking-wider">
              Blog IA
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-mono font-bold leading-tight text-[#FAFAFA] mb-6">
            Articles et guides<br />
            <span className="text-[#E07A5F]">intelligence artificielle</span>
          </h1>

          <p className="text-xl text-[#F4F1DE]/80 leading-relaxed max-w-2xl">
            Comparatifs, guides pratiques et tutoriels pour maitriser l IA en entreprise.
            Par l equipe Growth Acceleration.
          </p>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="pb-16 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="block group"
            >
              <article className="bg-[#2D2A2E]/50 border border-[#FAFAFA]/10 rounded-lg p-6 md:p-8 hover:border-[#E07A5F]/50 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2 py-0.5 bg-[#E07A5F]/20 text-[#E07A5F] text-xs font-mono rounded">
                    {article.tag}
                  </span>
                  <div className="flex items-center gap-1 text-[#A9A9A9] text-xs">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(article.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#A9A9A9] text-xs">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl md:text-2xl font-mono font-bold text-[#FAFAFA] mb-3 group-hover:text-[#E07A5F] transition-colors">
                  {article.title}
                </h2>

                <p className="text-[#A9A9A9] leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                <div className="flex items-center gap-2 text-[#E07A5F] text-sm font-mono">
                  <span>Lire l article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA FORMATIONS */}
      <section className="py-16 px-4 bg-[#2D2A2E]/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-mono font-bold text-[#FAFAFA] mb-4">
            Envie de passer a la pratique ?
          </h2>
          <p className="text-[#A9A9A9] mb-8 max-w-xl mx-auto">
            Nos formations IA de 8 heures en presentiel a Paris couvrent tous les sujets abordes dans ces articles.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/claude-code"
              className="bg-[#2D2A2E] border border-[#FAFAFA]/10 rounded-lg p-4 hover:border-[#E07A5F]/50 transition-all"
            >
              <p className="text-[#FAFAFA] font-mono font-bold text-sm">Claude Code</p>
              <p className="text-[#A9A9A9] text-xs mt-1">Coding avec IA</p>
            </Link>
            <Link
              href="/geo"
              className="bg-[#2D2A2E] border border-[#FAFAFA]/10 rounded-lg p-4 hover:border-[#E07A5F]/50 transition-all"
            >
              <p className="text-[#FAFAFA] font-mono font-bold text-sm">GEO</p>
              <p className="text-[#A9A9A9] text-xs mt-1">Visibilite IA</p>
            </Link>
            <Link
              href="/agents-ai"
              className="bg-[#2D2A2E] border border-[#FAFAFA]/10 rounded-lg p-4 hover:border-[#E07A5F]/50 transition-all"
            >
              <p className="text-[#FAFAFA] font-mono font-bold text-sm">Agents.AI</p>
              <p className="text-[#A9A9A9] text-xs mt-1">Agents autonomes</p>
            </Link>
            <Link
              href="/automations"
              className="bg-[#2D2A2E] border border-[#FAFAFA]/10 rounded-lg p-4 hover:border-[#E07A5F]/50 transition-all"
            >
              <p className="text-[#FAFAFA] font-mono font-bold text-sm">Automations</p>
              <p className="text-[#A9A9A9] text-xs mt-1">N8N et workflows</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
