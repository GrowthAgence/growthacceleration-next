import type { Metadata } from "next";
import { Clock, Users, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedTerminal } from "@/components/AnimatedTerminal";
import { Instructor } from "@/components/Instructor";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import {
  HeroContent,
  AudienceCard,
  AudienceItem,
  AnimatedCheckIcon,
  AnimatedXIcon,
  ProgramList,
  ProgramItem,
} from "./client";

// Metadata SSR pour SEO/LLM
export const metadata: Metadata = {
  title: "Formation Claude Code - Ship ton produit en une journee",
  description:
    "Formation Claude Code par Growth Acceleration : apprenez a developper des applications avec Claude comme pair-programmeur. 8h de formation pratique a Paris, 900 EUR TTC. Pour entrepreneurs et product managers.",
  keywords: [
    "formation Claude Code",
    "Claude AI",
    "Anthropic",
    "pair programming IA",
    "no-code",
    "low-code",
    "Paris",
  ],
  alternates: {
    canonical: "/claude-code",
  },
  openGraph: {
    title: "Formation Claude Code - Ship ton produit en une journee",
    description:
      "Passez de l idee au MVP en 8 heures avec Claude comme pair-programmeur.",
    type: "website",
  },
};

// Schema.org Course - rendu cote serveur
const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Formation Claude Code - Ship ton produit en une journee",
  description:
    "Formation pratique de 8 heures pour apprendre a developper des applications avec Claude Code comme pair-programmeur. Destinee aux entrepreneurs et product managers souhaitant creer des MVPs rapidement sans equipe technique.",
  provider: {
    "@type": "EducationalOrganization",
    name: "Growth Acceleration",
    url: "https://www.growth-acceleration.fr",
  },
  courseCode: "CLAUDE-CODE-01",
  educationalLevel: "Debutant a Intermediaire",
  teaches: [
    "Utilisation de Claude Code en ligne de commande",
    "Prompting efficace pour le developpement",
    "Creation de MVP en une journee",
    "Integration d APIs avec Claude",
    "Debugging assiste par IA",
  ],
  audience: {
    "@type": "Audience",
    audienceType: "Entrepreneurs, Product Managers, Marketing Managers, Responsables Innovation",
  },
  inLanguage: "fr",
  offers: {
    "@type": "Offer",
    price: "900",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    validFrom: "2026-01-01",
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "onsite",
    duration: "PT8H",
    location: {
      "@type": "Place",
      name: "Growth Acceleration Paris",
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

// Schema.org Person (formateur)
const instructorSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Frederic",
  jobTitle: "CEO",
  worksFor: {
    "@type": "Organization",
    name: "La Growth Agence",
  },
  description:
    "10 ans d experience en growth marketing et tech. Createur de 3 SaaS en production avec Claude API. Formateur de plus de 400 professionnels a l IA.",
  knowsAbout: ["Claude Code", "Next.js", "TypeScript", "Supabase", "Claude API"],
};

// Donnees du programme
const programItems = [
  {
    time: "09h00 - 10h30",
    title: "Introduction a Claude Code",
    content: "Installation, configuration, premiers prompts. Comprendre le mental model de Claude.",
  },
  {
    time: "10h30 - 12h30",
    title: "Creer une app from scratch",
    content: "Definir son projet, structurer les prompts, generer le code initial. Exercice pratique.",
  },
  {
    time: "12h30 - 13h30",
    title: "Dejeuner",
    content: "Networking avec les autres participants.",
  },
  {
    time: "13h30 - 15h30",
    title: "Features avancees",
    content: "Integrer des APIs, ajouter l authentification, connecter une base de donnees.",
  },
  {
    time: "15h30 - 17h00",
    title: "Debug et deploy",
    content: "Debugger avec Claude, deployer sur Vercel/Railway. Mettre en prod.",
  },
];

// Pour qui / Pas pour qui - contenu exact du Figma
const forYou = [
  "Entrepreneurs et indie hackers voulant shipper vite",
  "Product Managers techniques ou builders",
  "Utilisateurs de ChatGPT/Claude qui veulent passer au niveau superieur",
  "Ceux qui veulent automatiser le setup, debug et refactoring",
];

const notForYou = [
  "Debutants complets (jamais ecrit une ligne de code)",
  "Chercheurs de theorie pure sur l'IA",
  "Ceux qui veulent devenir dev senior sans comprendre les bases",
  "Personnes sans ordinateur (tablettes non supportees)",
];

export default function ClaudeCodePage() {
  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(instructorSchema) }}
      />

      {/* RESUME LLM-FRIENDLY */}
      <section className="bg-[#2D2A2E] border-b border-[#E07A5F]/20">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <p className="text-[#A9A9A9] text-sm font-mono mb-2">&gt; cat resume.txt</p>
          <p className="text-[#F4F1DE] leading-relaxed">
            <strong>Formation Claude Code</strong> est une formation pratique de 8 heures par Growth Acceleration
            pour apprendre a developper des applications avec Claude (Anthropic) comme pair-programmeur.
            Prix : 900 EUR TTC. Lieu : Paris 1er (231 rue Saint-Honore). Formateur : Frederic, CEO de La Growth Agence,
            createur de 3 SaaS avec Claude API. Public cible : entrepreneurs, product managers, indie hackers.
            Objectif : passer d une idee a un MVP fonctionnel en une journee.
          </p>
        </div>
      </section>

      {/* HERO */}
      <section className="pt-16 pb-12 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <HeroContent>
            <div className="inline-flex items-center space-x-2 bg-[#2D2A2E] px-3 py-1 rounded-full border border-[#FAFAFA]/10">
              <span className="w-2 h-2 rounded-full bg-[#E07A5F] animate-pulse" />
              <span className="text-[#A9A9A9] text-xs font-mono uppercase tracking-wider">
                Prochaine session : Paris
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-mono font-bold leading-tight text-[#FAFAFA]">
              Claude Code :<br />
              <span className="text-[#E07A5F]">Ship ton produit</span> en une journee
            </h1>

            <p className="text-lg text-[#F4F1DE]/80 max-w-xl leading-relaxed">
              Apprenez a utiliser Claude comme pair-programmeur. Automatisez 80% du dev.
              Passez de l idee a la prod en 8 heures.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="#reservation" className="flex items-center gap-2">
                  &gt; Reserver ma place_
                </a>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <a href="#programme">Voir le programme</a>
              </Button>
            </div>

            {/* Card En Bref */}
            <div className="mt-6 p-4 border-2 border-dashed border-[#E07A5F]/40 rounded-lg bg-[#1E1E1E]/50">
              <p className="text-[#E07A5F] font-mono text-sm mb-2">&gt; CAT EN_BREF.TXT</p>
              <p className="text-[#F4F1DE]">
                12 participants max. 900€ TTC.<br />
                Objectif : Shippez vos apps sans dev team.
              </p>
            </div>
          </HeroContent>

          <div className="hidden lg:block">
            <AnimatedTerminal />
          </div>
        </div>
      </section>

      {/* POUR QUI / PAS POUR QUI - Style Figma */}
      <section className="py-16 px-4 bg-[#2D2A2E]/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* POUR VOUS */}
            <AudienceCard type="yes">
              <h3 className="text-[#98C379] font-mono mb-6 text-lg">
                ./pour_vous <span className="text-[#A9A9A9]">--------------------</span>
              </h3>
              <ul className="space-y-4">
                {forYou.map((item, i) => (
                  <AudienceItem key={i} type="yes" delay={i * 0.1}>
                    {item}
                  </AudienceItem>
                ))}
              </ul>
            </AudienceCard>

            {/* PAS POUR VOUS */}
            <AudienceCard type="no">
              <h3 className="text-[#E06C75] font-mono mb-6 text-lg">
                ./pas_pour_vous <span className="text-[#A9A9A9]">---------------</span>
              </h3>
              <ul className="space-y-4">
                {notForYou.map((item, i) => (
                  <AudienceItem key={i} type="no" delay={i * 0.1}>
                    {item}
                  </AudienceItem>
                ))}
              </ul>
            </AudienceCard>
          </div>
        </div>
      </section>

      {/* PROGRAMME */}
      <section id="programme" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-mono font-bold text-center mb-12">
            <span className="text-[#E07A5F]">&gt;</span>{" "}
            <span className="text-[#FAFAFA]">tree</span>{" "}
            <span className="text-[#E07A5F]">./programme</span>
          </h2>
          <ProgramList>
            {programItems.map((item, i) => (
              <ProgramItem key={i} index={i}>
                <div className="text-[#E07A5F] font-mono text-sm whitespace-nowrap min-w-[120px]">
                  {item.time}
                </div>
                <div className="flex-1">
                  <h3 className="text-[#FAFAFA] font-mono font-semibold">{item.title}</h3>
                  <p className="text-[#A9A9A9] text-sm mt-1">{item.content}</p>
                </div>
              </ProgramItem>
            ))}
          </ProgramList>
        </div>
      </section>

      {/* FORMATEUR */}
      <Instructor accentColor="#E07A5F" />

      {/* TEMOIGNAGES */}
      <Testimonials accentColor="#E07A5F" />

      {/* FAQ */}
      <FAQ accentColor="#E07A5F" />

      {/* CTA FINAL */}
      <FinalCTA
        title="Pret a automatiser votre dev ?"
        price="900"
        accentColor="#E07A5F"
      />
    </>
  );
}
