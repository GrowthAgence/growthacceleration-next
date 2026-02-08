import Link from "next/link";
import { Terminal, Cpu, Search, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Instructor } from "@/components/Instructor";

// Schema.org FAQPage - rendu cote serveur pour SEO/LLM
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu est-ce qu une formation en intelligence artificielle ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Une formation IA vous apprend a utiliser les outils d intelligence artificielle generative (ChatGPT, Claude, agents IA) pour automatiser vos taches, creer des applications, et gagner en productivite. Nos formations sont pratiques : vous repartez avec des competences immediatement applicables.",
      },
    },
    {
      "@type": "Question",
      name: "Faut-il savoir coder pour suivre une formation IA ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non. Nos formations sont concues pour les non-developpeurs : entrepreneurs, managers, marketers. La formation Claude Code permet meme de creer des applications sans experience prealable en programmation.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle formation IA choisir pour un manager ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pour un manager, nous recommandons Agents.AI (comprendre et piloter les agents IA en entreprise) ou Automations (automatiser les workflows metier avec N8N et l IA). Ces formations donnent une vision strategique et des competences pratiques pour transformer vos equipes.",
      },
    },
    {
      "@type": "Question",
      name: "Combien coute une formation IA professionnelle ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nos formations coutent 900 EUR TTC pour une journee complete (8 heures) en presentiel a Paris. Groupes limites a 12 participants pour garantir un accompagnement personnalise. Possibilite de financement OPCO pour les entreprises.",
      },
    },
    {
      "@type": "Question",
      name: "Ou se deroulent les formations IA Growth Acceleration ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Toutes nos formations se deroulent en presentiel a Paris, au 231 rue Saint-Honore (75001), en plein coeur du 1er arrondissement. Format intensif d une journee pour maximiser l apprentissage.",
      },
    },
  ],
};

// Les 4 formations
const formations = [
  {
    slug: "claude-code",
    title: "Claude Code",
    tagline: "Ship ton produit en une journee",
    description:
      "Apprenez a developper des applications avec Claude comme pair-programmeur. De l idee au MVP en 8 heures.",
    icon: Terminal,
    color: "#E07A5F",
  },
  {
    slug: "geo",
    title: "GEO",
    tagline: "Le nouvel eldorado SEO",
    description:
      "Maitrisez le Generative Engine Optimization pour etre cite par ChatGPT, Perplexity et Claude.",
    icon: Search,
    color: "#98C379",
    badge: "NEW",
  },
  {
    slug: "agents-ai",
    title: "Agents.AI",
    tagline: "Future of Work",
    description:
      "Concevez et deployez des agents IA autonomes pour automatiser vos processus metier.",
    icon: Cpu,
    color: "#56B6C2",
  },
  {
    slug: "automations",
    title: "Automations",
    tagline: "Fini de galerer avec N8N",
    description:
      "Maitrisez N8N et l automatisation IA. Connectez vos outils metier avec des workflows intelligents.",
    icon: Zap,
    color: "#E5C07B",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Schema.org FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* RESUME LLM-FRIENDLY */}
      <section className="bg-[#2D2A2E] border-b border-[#E07A5F]/20">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <p className="text-[#A9A9A9] text-sm font-mono mb-2">&gt; cat growth_acceleration.txt</p>
          <p className="text-[#F4F1DE] leading-relaxed">
            <strong>Growth Acceleration</strong> est un organisme de formation base a Paris (231 rue Saint-Honore, 75001)
            proposant 4 formations pratiques en intelligence artificielle : Claude Code (developpement avec IA),
            GEO (optimisation pour les moteurs IA), Agents.AI (agents autonomes), et Automations (automatisation N8N).
            Chaque formation dure 8 heures et coute 900 EUR TTC. Public cible : entrepreneurs, product managers,
            marketing managers et responsables innovation.
          </p>
        </div>
      </section>

      {/* HERO */}
      <section className="pt-20 pb-16 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#2D2A2E] px-3 py-1 rounded-full border border-[#FAFAFA]/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#E07A5F] animate-pulse" />
            <span className="text-[#A9A9A9] text-xs font-mono uppercase tracking-wider">
              Formations IA - Paris
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-mono font-bold leading-tight text-[#FAFAFA] mb-6">
            Formation Intelligence Artificielle<br />
            <span className="text-[#E07A5F]">pour entrepreneurs et managers</span>
          </h1>

          <p className="text-lg md:text-xl text-[#F4F1DE]/80 max-w-2xl mx-auto leading-relaxed">
            Maitrisez l IA generative, les agents IA et l automatisation en 1 journee a Paris.<br />
            <span className="text-[#A9A9A9]">Formations professionnelles en presentiel — 8h — 12 participants max — 900 EUR TTC</span>
          </p>
        </div>

        {/* GRILLE DES FORMATIONS */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {formations.map((f) => {
            const Icon = f.icon;
            return (
              <Link
                key={f.slug}
                href={`/${f.slug}`}
                className="group relative bg-[#2D2A2E]/50 border border-[#FAFAFA]/10 rounded-lg p-6 hover:border-[#E07A5F]/50 transition-all"
              >
                {f.badge && (
                  <span className="absolute top-4 right-4 px-2 py-1 rounded bg-[#E07A5F] text-[10px] font-bold text-[#1E1E1E] animate-pulse">
                    {f.badge}
                  </span>
                )}

                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${f.color}20` }}
                >
                  <Icon className="w-6 h-6" style={{ color: f.color }} />
                </div>

                <h2 className="text-xl font-mono font-bold text-[#FAFAFA] mb-1">
                  {f.title}
                </h2>
                <p className="text-[#E07A5F] text-sm font-mono mb-3">{f.tagline}</p>
                <p className="text-[#A9A9A9] text-sm leading-relaxed mb-4">
                  {f.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-[#F4F1DE] font-mono font-bold">900 EUR</span>
                  <span className="text-[#E07A5F] group-hover:translate-x-1 transition-transform flex items-center gap-1 text-sm">
                    Decouvrir <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* FAQ SEO/GEO */}
      <section className="py-16 px-4 border-t border-[#FAFAFA]/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-mono font-bold text-[#FAFAFA] mb-8 text-center">
            Questions frequentes sur nos formations IA
          </h2>

          <div className="space-y-6">
            <div className="bg-[#2D2A2E]/50 p-6 rounded-lg border border-[#FAFAFA]/10">
              <h3 className="text-[#FAFAFA] font-mono font-bold mb-2">Qu est-ce qu une formation en intelligence artificielle ?</h3>
              <p className="text-[#A9A9A9] leading-relaxed">
                Une formation IA vous apprend a utiliser les outils d intelligence artificielle generative (ChatGPT, Claude, agents IA)
                pour automatiser vos taches, creer des applications, et gagner en productivite. Nos formations sont pratiques :
                vous repartez avec des competences immediatement applicables.
              </p>
            </div>

            <div className="bg-[#2D2A2E]/50 p-6 rounded-lg border border-[#FAFAFA]/10">
              <h3 className="text-[#FAFAFA] font-mono font-bold mb-2">Faut-il savoir coder pour suivre une formation IA ?</h3>
              <p className="text-[#A9A9A9] leading-relaxed">
                Non. Nos formations sont concues pour les non-developpeurs : entrepreneurs, managers, marketers.
                La formation Claude Code permet meme de creer des applications sans experience prealable en programmation.
              </p>
            </div>

            <div className="bg-[#2D2A2E]/50 p-6 rounded-lg border border-[#FAFAFA]/10">
              <h3 className="text-[#FAFAFA] font-mono font-bold mb-2">Quelle formation IA choisir pour un manager ?</h3>
              <p className="text-[#A9A9A9] leading-relaxed">
                Pour un manager, nous recommandons Agents.AI (comprendre et piloter les agents IA en entreprise) ou
                Automations (automatiser les workflows metier avec N8N et l IA). Ces formations donnent une vision strategique
                et des competences pratiques pour transformer vos equipes.
              </p>
            </div>

            <div className="bg-[#2D2A2E]/50 p-6 rounded-lg border border-[#FAFAFA]/10">
              <h3 className="text-[#FAFAFA] font-mono font-bold mb-2">Combien coute une formation IA professionnelle ?</h3>
              <p className="text-[#A9A9A9] leading-relaxed">
                Nos formations coutent 900 EUR TTC pour une journee complete (8 heures) en presentiel a Paris.
                Groupes limites a 12 participants pour garantir un accompagnement personnalise.
                Possibilite de financement OPCO pour les entreprises.
              </p>
            </div>

            <div className="bg-[#2D2A2E]/50 p-6 rounded-lg border border-[#FAFAFA]/10">
              <h3 className="text-[#FAFAFA] font-mono font-bold mb-2">Ou se deroulent les formations IA Growth Acceleration ?</h3>
              <p className="text-[#A9A9A9] leading-relaxed">
                Toutes nos formations se deroulent en presentiel a Paris, au 231 rue Saint-Honore (75001),
                en plein coeur du 1er arrondissement. Format intensif d une journee pour maximiser l apprentissage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INFOS PRATIQUES */}
      <section id="contact" className="py-16 px-4 bg-[#2D2A2E]/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-mono font-bold text-[#FAFAFA] mb-8">
            Toutes nos formations
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-[#2D2A2E] p-4 rounded-lg border border-[#FAFAFA]/10">
              <p className="text-2xl font-mono font-bold text-[#E07A5F]">8h</p>
              <p className="text-[#A9A9A9] text-sm">par formation</p>
            </div>
            <div className="bg-[#2D2A2E] p-4 rounded-lg border border-[#FAFAFA]/10">
              <p className="text-2xl font-mono font-bold text-[#E07A5F]">12</p>
              <p className="text-[#A9A9A9] text-sm">participants max</p>
            </div>
            <div className="bg-[#2D2A2E] p-4 rounded-lg border border-[#FAFAFA]/10">
              <p className="text-2xl font-mono font-bold text-[#E07A5F]">900 EUR</p>
              <p className="text-[#A9A9A9] text-sm">TTC</p>
            </div>
            <div className="bg-[#2D2A2E] p-4 rounded-lg border border-[#FAFAFA]/10">
              <p className="text-2xl font-mono font-bold text-[#E07A5F]">Paris</p>
              <p className="text-[#A9A9A9] text-sm">75001</p>
            </div>
          </div>

          <Button size="lg" asChild>
            <Link href="#contact">Nous contacter</Link>
          </Button>
        </div>
      </section>

      {/* FORMATEUR */}
      <Instructor />
    </>
  );
}
