import type { Metadata } from "next";
import { Clock, Users, MapPin, ArrowRight, Zap, Workflow, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  HeroContent,
  AudienceCard,
  AudienceItem,
  AnimatedCheckIcon,
  AnimatedXIcon,
  ProgramList,
  ProgramItem,
  ReservationCard,
  CTAButton,
} from "../claude-code/client";
import { AutomationsTerminal } from "./client";
import { Instructor } from "@/components/Instructor";

export const metadata: Metadata = {
  title: "Formation Automations - Fini de galerer avec N8N",
  description:
    "Formation N8N et automatisation IA par Growth Acceleration : maitrisez N8N et connectez vos outils metier avec l intelligence artificielle. 8h a Paris, 900 EUR TTC.",
  keywords: [
    "formation N8N",
    "automatisation IA",
    "N8N vs Make",
    "N8N vs Zapier",
    "workflow automation",
    "integration IA",
    "Paris",
  ],
  openGraph: {
    title: "Formation Automations - Fini de galerer avec N8N",
    description: "Maitrisez N8N et l automatisation augmentee par l IA.",
    type: "website",
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Formation Automations - Fini de galerer avec N8N",
  description:
    "Formation pratique de 8 heures pour maitriser N8N et l automatisation augmentee par l IA. Apprenez a connecter vos outils metier (CRM, email, Notion) avec des modeles IA (GPT, Claude) pour creer des workflows intelligents.",
  provider: {
    "@type": "EducationalOrganization",
    name: "Growth Acceleration",
    url: "https://growthacceleration.fr",
  },
  courseCode: "AITOMATION-01",
  educationalLevel: "Debutant a Intermediaire",
  teaches: [
    "Maitriser N8N de A a Z",
    "Connecter des APIs sans coder",
    "Integrer GPT et Claude dans les workflows",
    "Automatiser CRM, email, Notion et autres outils",
    "Debugger et optimiser ses automatisations",
  ],
  audience: {
    "@type": "Audience",
    audienceType: "Operations Managers, Marketing Managers, Entrepreneurs, Freelances",
  },
  inLanguage: "fr",
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

const programItems = [
  {
    time: "09h00 - 10h30",
    title: "Introduction a N8N",
    content: "Installation, interface, concepts cles. Creer son premier workflow en 30 minutes.",
  },
  {
    time: "10h30 - 12h30",
    title: "Connecter ses outils",
    content: "Integrer CRM, email, Notion, Google Sheets. Gerer l authentification et les webhooks.",
  },
  {
    time: "12h30 - 13h30",
    title: "Dejeuner",
    content: "Networking avec les autres participants.",
  },
  {
    time: "13h30 - 15h30",
    title: "Ajouter l IA a ses workflows",
    content: "Integrer GPT et Claude. Cas pratiques : enrichissement, classification, generation.",
  },
  {
    time: "15h30 - 17h00",
    title: "Production et debug",
    content: "Gestion des erreurs, monitoring, optimisation. Deployer en production.",
  },
];

const forYou = [
  "Vous passez trop de temps sur des taches repetitives",
  "Vous utilisez deja Zapier ou Make mais voulez plus de controle",
  "Vous voulez automatiser sans dependre d un dev",
  "Vous voulez integrer l IA dans vos process existants",
  "Vous etes ops, marketing ou entrepreneur",
];

const notForYou = [
  "Vous etes developpeur et preferez coder vos integrations",
  "Vous n avez aucun outil SaaS a connecter",
  "Vous cherchez une formation purement theorique",
  "Vous n avez pas de tache repetitive a automatiser",
];

export default function AutomationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      {/* RESUME LLM-FRIENDLY */}
      <section className="bg-[#2D2A2E] border-b border-[#E07A5F]/20">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <p className="text-[#A9A9A9] text-sm font-mono mb-2">&gt; cat automations_formation.txt</p>
          <p className="text-[#F4F1DE] leading-relaxed">
            <strong>Formation Automations</strong> est une formation de 8 heures par Growth Acceleration
            pour maitriser N8N et l automatisation augmentee par l IA.
            N8N est un outil open-source d automatisation qui permet de connecter vos outils metier sans coder.
            Cette formation vous apprend a integrer GPT et Claude dans vos workflows pour creer des automatisations intelligentes.
            Prix : 900 EUR TTC. Lieu : Paris 1er. Public : ops, marketing, entrepreneurs.
          </p>
        </div>
      </section>

      {/* HERO */}
      <section className="pt-16 pb-12 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <HeroContent>
            <div className="inline-flex items-center space-x-2 bg-[#E07A5F]/10 px-3 py-1 rounded-full border border-[#E07A5F]/30">
              <span className="w-2 h-2 rounded-full bg-[#E07A5F] animate-pulse" />
              <span className="text-[#E07A5F] text-xs font-mono uppercase tracking-wider">
                Formation pratique
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-mono font-bold leading-tight text-[#FAFAFA]">
              Automations :<br />
              <span className="text-[#E07A5F]">Fini de galerer</span> avec N8N
            </h1>

            <p className="text-lg text-[#F4F1DE]/80 max-w-xl leading-relaxed">
              N8N + IA = automatisations surpuissantes. Connectez vos outils, integrez GPT/Claude,
              et liberez votre temps pour ce qui compte vraiment.
            </p>

            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="flex items-center gap-2 text-[#F4F1DE]">
                <Clock className="w-5 h-5 text-[#E07A5F]" />
                <span>8 heures</span>
              </div>
              <div className="flex items-center gap-2 text-[#F4F1DE]">
                <Users className="w-5 h-5 text-[#E07A5F]" />
                <span>12 participants max</span>
              </div>
              <div className="flex items-center gap-2 text-[#F4F1DE]">
                <MapPin className="w-5 h-5 text-[#E07A5F]" />
                <span>Paris 1er</span>
              </div>
              <div className="flex items-center gap-2 text-[#F4F1DE] font-mono font-bold">
                <span className="text-[#E07A5F]">900 EUR</span>
                <span className="text-sm text-[#A9A9A9]">TTC</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#E07A5F] text-[#1E1E1E] hover:bg-[#E07A5F]/90" asChild>
                <a href="#reservation" className="flex items-center gap-2">
                  Reserver ma place <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <a href="#programme">Voir le programme</a>
              </Button>
            </div>
          </HeroContent>

          <div className="hidden lg:block">
            <AutomationsTerminal />
          </div>
        </div>
      </section>

      {/* POUR QUI / PAS POUR QUI */}
      <section className="py-16 px-4 bg-[#2D2A2E]/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-mono font-bold text-[#FAFAFA] mb-8">
            Pour qui est cette formation ?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <AudienceCard type="yes">
              <h3 className="text-[#98C379] font-mono mb-4 flex items-center gap-2 text-lg">
                <AnimatedCheckIcon />
                Cette formation EST pour vous si :
              </h3>
              <ul className="space-y-3">
                {forYou.map((item, i) => (
                  <AudienceItem key={i} type="yes" delay={i * 0.1}>
                    {item}
                  </AudienceItem>
                ))}
              </ul>
            </AudienceCard>

            <AudienceCard type="no">
              <h3 className="text-[#E06C75] font-mono mb-4 flex items-center gap-2 text-lg">
                <AnimatedXIcon />
                Cette formation N EST PAS pour vous si :
              </h3>
              <ul className="space-y-3">
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
          <h2 className="text-2xl font-mono font-bold text-[#FAFAFA] mb-8">
            Programme de la journee
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
      <Instructor />

      {/* CTA */}
      <section id="reservation" className="py-16 px-4 bg-[#E07A5F]/10 border-y border-[#E07A5F]/20">
        <div className="max-w-2xl mx-auto text-center">
          <ReservationCard>
            <h2 className="text-2xl font-mono font-bold text-[#FAFAFA] mb-4">
              Reservez votre place
            </h2>
            <p className="text-[#F4F1DE] mb-6">
              12 places par session. Prochaine date : a confirmer.
            </p>
            <div className="bg-[#2D2A2E] p-6 rounded-lg border border-[#E07A5F]/30 mb-6">
              <p className="text-3xl font-mono font-bold text-[#E07A5F]">
                900 EUR <span className="text-lg text-[#A9A9A9]">TTC</span>
              </p>
              <p className="text-[#A9A9A9] text-sm mt-2">231 rue Saint-Honore, 75001 Paris</p>
            </div>
            <CTAButton>Reserver maintenant</CTAButton>
          </ReservationCard>
        </div>
      </section>
    </>
  );
}
