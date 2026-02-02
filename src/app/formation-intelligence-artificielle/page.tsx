import Link from "next/link";
import type { Metadata } from "next";
import { Terminal, Cpu, Search, Zap, CheckCircle, Users, MapPin, Clock, Euro } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Instructor } from "@/components/Instructor";

export const metadata: Metadata = {
  title: "Formation Intelligence Artificielle a Paris",
  description:
    "Formation IA pour entrepreneurs, managers et professionnels. Apprenez a maitriser l intelligence artificielle generative en 1 journee a Paris. 900 EUR TTC. Organisme de formation professionnelle Growth Acceleration.",
  keywords: [
    "formation intelligence artificielle",
    "formation IA",
    "formation IA Paris",
    "formation IA entreprise",
    "formation IA managers",
    "formation IA professionnelle",
    "apprendre intelligence artificielle",
    "cours IA Paris",
  ],
  openGraph: {
    title: "Formation Intelligence Artificielle a Paris | Growth Acceleration",
    description: "Maitrisez l IA generative en 1 journee. Formation professionnelle pour entrepreneurs et managers.",
  },
};

// Schema.org Course pour SEO
const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Formation Intelligence Artificielle",
  description:
    "Formation professionnelle en intelligence artificielle pour entrepreneurs, managers et professionnels. Maitrisez l IA generative, les agents IA et l automatisation en presentiel a Paris.",
  provider: {
    "@type": "EducationalOrganization",
    name: "Growth Acceleration",
    url: "https://growth-acceleration.fr",
  },
  offers: {
    "@type": "Offer",
    price: "900",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "onsite",
    duration: "PT8H",
    location: {
      "@type": "Place",
      name: "Growth Acceleration",
      address: {
        "@type": "PostalAddress",
        streetAddress: "231 rue Saint-Honore",
        addressLocality: "Paris",
        postalCode: "75001",
        addressCountry: "FR",
      },
    },
  },
};

// Schema.org FAQ pour GEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu est-ce qu une formation en intelligence artificielle ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Une formation IA vous apprend a utiliser les outils d intelligence artificielle generative (ChatGPT, Claude, agents IA) pour automatiser vos taches, creer des applications, et gagner en productivite. Les formations Growth Acceleration sont pratiques et intensives : 8 heures en presentiel a Paris.",
      },
    },
    {
      "@type": "Question",
      name: "Faut-il savoir coder pour suivre une formation IA ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non. Les formations Growth Acceleration sont concues pour les non-developpeurs : entrepreneurs, managers, marketers. La formation Claude Code permet meme de creer des applications sans experience prealable en programmation.",
      },
    },
    {
      "@type": "Question",
      name: "Combien coute une formation IA professionnelle ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les formations IA Growth Acceleration coutent 900 EUR TTC pour une journee complete (8 heures) en presentiel a Paris. Groupes limites a 12 participants. Financement OPCO possible pour les entreprises.",
      },
    },
    {
      "@type": "Question",
      name: "Ou se deroulent les formations IA a Paris ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les formations se deroulent au 231 rue Saint-Honore, 75001 Paris, en plein coeur du 1er arrondissement. Format presentiel intensif d une journee.",
      },
    },
  ],
};

const formations = [
  {
    slug: "claude-code",
    title: "Claude Code",
    subtitle: "Developpement avec IA",
    description: "Creez des applications avec Claude comme pair-programmeur. Ideal pour lancer un MVP rapidement sans savoir coder.",
    icon: Terminal,
    benefits: ["Creer un MVP en une journee", "Coder sans experience", "Utiliser l IA comme assistant dev"],
  },
  {
    slug: "geo",
    title: "GEO",
    subtitle: "Visibilite dans les moteurs IA",
    description: "Optimisez votre presence dans ChatGPT, Perplexity et Claude. Le nouveau SEO pour l ere de l IA.",
    icon: Search,
    benefits: ["Etre cite par les LLM", "Structurer son contenu pour l IA", "Mesurer sa visibilite IA"],
  },
  {
    slug: "agents-ai",
    title: "Agents.AI",
    subtitle: "Agents IA autonomes",
    description: "Concevez et deployez des agents IA pour automatiser vos processus metier complexes.",
    icon: Cpu,
    benefits: ["Comprendre les agents IA", "Deployer des agents en entreprise", "Piloter l IA strategiquement"],
  },
  {
    slug: "automations",
    title: "Automations",
    subtitle: "Automatisation intelligente",
    description: "Maitrisez N8N et connectez vos outils metier avec des workflows IA intelligents.",
    icon: Zap,
    benefits: ["Automatiser sans coder", "Connecter vos outils", "Integrer l IA dans vos workflows"],
  },
];

export default function FormationIAPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <section className="pt-20 pb-16 px-4 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-[#2D2A2E] px-3 py-1 rounded-full border border-[#FAFAFA]/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#98C379]" />
            <span className="text-[#A9A9A9] text-xs font-mono uppercase tracking-wider">
              Organisme de formation professionnelle
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-mono font-bold leading-tight text-[#FAFAFA] mb-6">
            Formation Intelligence Artificielle a Paris
          </h1>

          <p className="text-xl text-[#F4F1DE]/80 leading-relaxed mb-8">
            Maitrisez l IA generative, les agents IA et l automatisation en <strong>1 journee</strong>.
            Formations pratiques pour <strong>entrepreneurs, managers et professionnels</strong> qui veulent
            utiliser l intelligence artificielle comme levier de croissance.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 text-[#A9A9A9]">
              <Clock className="w-5 h-5 text-[#E07A5F]" />
              <span>8 heures intensives</span>
            </div>
            <div className="flex items-center gap-2 text-[#A9A9A9]">
              <MapPin className="w-5 h-5 text-[#E07A5F]" />
              <span>Paris 1er</span>
            </div>
            <div className="flex items-center gap-2 text-[#A9A9A9]">
              <Users className="w-5 h-5 text-[#E07A5F]" />
              <span>12 participants max</span>
            </div>
            <div className="flex items-center gap-2 text-[#A9A9A9]">
              <Euro className="w-5 h-5 text-[#E07A5F]" />
              <span>900 EUR TTC</span>
            </div>
          </div>

          <Button size="lg" asChild>
            <Link href="#formations">Voir les formations</Link>
          </Button>
        </div>
      </section>

      {/* POUR QUI */}
      <section className="py-16 px-4 bg-[#2D2A2E]/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-mono font-bold text-[#FAFAFA] mb-8">
            Pour qui sont ces formations IA ?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#2D2A2E] p-6 rounded-lg border border-[#FAFAFA]/10">
              <h3 className="text-[#FAFAFA] font-mono font-bold mb-3">Entrepreneurs & Fondateurs</h3>
              <p className="text-[#A9A9A9] leading-relaxed">
                Vous voulez lancer un produit rapidement, automatiser vos operations, ou comprendre
                comment l IA peut transformer votre business.
              </p>
            </div>

            <div className="bg-[#2D2A2E] p-6 rounded-lg border border-[#FAFAFA]/10">
              <h3 className="text-[#FAFAFA] font-mono font-bold mb-3">Managers & Directeurs</h3>
              <p className="text-[#A9A9A9] leading-relaxed">
                Vous devez piloter la transformation IA de vos equipes et prendre des decisions
                strategiques sur l adoption de l intelligence artificielle.
              </p>
            </div>

            <div className="bg-[#2D2A2E] p-6 rounded-lg border border-[#FAFAFA]/10">
              <h3 className="text-[#FAFAFA] font-mono font-bold mb-3">Product Managers</h3>
              <p className="text-[#A9A9A9] leading-relaxed">
                Vous voulez integrer l IA dans vos produits, prototyper rapidement, ou comprendre
                les possibilites techniques pour mieux specifier.
              </p>
            </div>

            <div className="bg-[#2D2A2E] p-6 rounded-lg border border-[#FAFAFA]/10">
              <h3 className="text-[#FAFAFA] font-mono font-bold mb-3">Marketing & Growth</h3>
              <p className="text-[#A9A9A9] leading-relaxed">
                Vous voulez automatiser vos campagnes, optimiser votre visibilite dans les moteurs IA,
                ou creer du contenu a grande echelle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORMATIONS */}
      <section id="formations" className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-mono font-bold text-[#FAFAFA] mb-4 text-center">
            Nos 4 formations en intelligence artificielle
          </h2>
          <p className="text-[#A9A9A9] text-center mb-12 max-w-2xl mx-auto">
            Chaque formation est independante et peut etre suivie separement.
            Toutes sont en presentiel a Paris, durent 8 heures, et coutent 900 EUR TTC.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {formations.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.slug}
                  className="bg-[#2D2A2E]/50 border border-[#FAFAFA]/10 rounded-lg p-6"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#E07A5F]/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#E07A5F]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-mono font-bold text-[#FAFAFA]">{f.title}</h3>
                      <p className="text-[#E07A5F] text-sm">{f.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-[#A9A9A9] mb-4 leading-relaxed">{f.description}</p>

                  <ul className="space-y-2 mb-6">
                    {f.benefits.map((b, i) => (
                      <li key={i} className="flex items-center gap-2 text-[#F4F1DE] text-sm">
                        <CheckCircle className="w-4 h-4 text-[#98C379]" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <span className="text-[#FAFAFA] font-mono font-bold">900 EUR TTC</span>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/${f.slug}`}>En savoir plus</Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CE QUE VOUS SAUREZ FAIRE */}
      <section className="py-16 px-4 bg-[#2D2A2E]/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-mono font-bold text-[#FAFAFA] mb-8">
            Ce que vous saurez faire apres une formation IA
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Utiliser ChatGPT et Claude de maniere avancee",
              "Creer des applications sans savoir coder",
              "Automatiser vos taches repetitives",
              "Deployer des agents IA autonomes",
              "Optimiser votre visibilite dans les moteurs IA",
              "Connecter vos outils metier avec des workflows intelligents",
              "Prendre des decisions strategiques sur l IA",
              "Former vos equipes aux bonnes pratiques IA",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#98C379] flex-shrink-0" />
                <span className="text-[#F4F1DE]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-mono font-bold text-[#FAFAFA] mb-8 text-center">
            Questions frequentes sur nos formations IA
          </h2>

          <div className="space-y-6">
            <div className="bg-[#2D2A2E]/50 p-6 rounded-lg border border-[#FAFAFA]/10">
              <h3 className="text-[#FAFAFA] font-mono font-bold mb-2">
                Qu est-ce qu une formation en intelligence artificielle ?
              </h3>
              <p className="text-[#A9A9A9] leading-relaxed">
                Une formation IA vous apprend a utiliser les outils d intelligence artificielle generative
                (ChatGPT, Claude, agents IA) pour automatiser vos taches, creer des applications, et gagner
                en productivite. Nos formations sont pratiques et intensives : 8 heures en presentiel a Paris.
              </p>
            </div>

            <div className="bg-[#2D2A2E]/50 p-6 rounded-lg border border-[#FAFAFA]/10">
              <h3 className="text-[#FAFAFA] font-mono font-bold mb-2">
                Faut-il savoir coder pour suivre une formation IA ?
              </h3>
              <p className="text-[#A9A9A9] leading-relaxed">
                Non. Nos formations sont concues pour les non-developpeurs : entrepreneurs, managers, marketers.
                La formation Claude Code permet meme de creer des applications sans experience prealable en programmation.
              </p>
            </div>

            <div className="bg-[#2D2A2E]/50 p-6 rounded-lg border border-[#FAFAFA]/10">
              <h3 className="text-[#FAFAFA] font-mono font-bold mb-2">
                Combien coute une formation IA professionnelle ?
              </h3>
              <p className="text-[#A9A9A9] leading-relaxed">
                Nos formations coutent 900 EUR TTC pour une journee complete (8 heures) en presentiel a Paris.
                Groupes limites a 12 participants pour garantir un accompagnement personnalise.
                Financement OPCO possible pour les entreprises.
              </p>
            </div>

            <div className="bg-[#2D2A2E]/50 p-6 rounded-lg border border-[#FAFAFA]/10">
              <h3 className="text-[#FAFAFA] font-mono font-bold mb-2">
                Ou se deroulent les formations IA a Paris ?
              </h3>
              <p className="text-[#A9A9A9] leading-relaxed">
                Toutes nos formations se deroulent au 231 rue Saint-Honore, 75001 Paris,
                en plein coeur du 1er arrondissement. Format presentiel intensif d une journee.
              </p>
            </div>

            <div className="bg-[#2D2A2E]/50 p-6 rounded-lg border border-[#FAFAFA]/10">
              <h3 className="text-[#FAFAFA] font-mono font-bold mb-2">
                Les formations sont-elles finançables ?
              </h3>
              <p className="text-[#A9A9A9] leading-relaxed">
                Oui. Growth Acceleration est un organisme de formation professionnelle.
                Nos formations peuvent etre financees par votre OPCO ou dans le cadre du plan
                de developpement des competences de votre entreprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORMATEUR */}
      <Instructor />

      {/* CTA */}
      <section className="py-16 px-4 bg-[#2D2A2E]/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-mono font-bold text-[#FAFAFA] mb-4">
            Pret a maitriser l intelligence artificielle ?
          </h2>
          <p className="text-[#A9A9A9] mb-8">
            Rejoignez nos prochaines sessions de formation a Paris.
            12 participants maximum par session pour un accompagnement personnalise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#contact">Reserver une formation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/">Voir toutes les formations</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
