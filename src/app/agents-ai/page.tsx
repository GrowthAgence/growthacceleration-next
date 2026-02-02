import type { Metadata } from "next";
import { Clock, Users, MapPin, ArrowRight, Cpu, Bot, Workflow } from "lucide-react";
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
import { AgentsTerminal } from "./client";

export const metadata: Metadata = {
  title: "Formation Agents.AI - Future of Work",
  description:
    "Formation Agents IA par Growth Acceleration : concevez et deployez des agents IA autonomes pour automatiser vos processus metier. 8h a Paris, 900 EUR TTC.",
  keywords: [
    "formation agents IA",
    "agents autonomes",
    "automatisation IA",
    "MCP",
    "Model Context Protocol",
    "future of work",
    "Paris",
  ],
  openGraph: {
    title: "Formation Agents.AI - Future of Work",
    description: "Concevez et deployez des agents IA autonomes.",
    type: "website",
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Formation Agents.AI - Future of Work",
  description:
    "Formation pratique de 8 heures pour concevoir, piloter et deployer des agents IA autonomes dans un contexte professionnel. Apprenez a creer des systemes qui executent des taches complexes de maniere autonome.",
  provider: {
    "@type": "EducationalOrganization",
    name: "Growth Acceleration",
    url: "https://growthacceleration.fr",
  },
  courseCode: "AGENTS-01",
  educationalLevel: "Intermediaire a Avance",
  teaches: [
    "Comprendre le fonctionnement des agents IA",
    "Identifier les cas d usage en entreprise",
    "Concevoir des workflows multi-agents",
    "Utiliser MCP (Model Context Protocol)",
    "Deployer et monitorer des agents en production",
  ],
  audience: {
    "@type": "Audience",
    audienceType: "Product Managers, Responsables Innovation, CTOs, Entrepreneurs tech",
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
    title: "Anatomie d un agent IA",
    content: "Qu est-ce qu un agent ? Boucle perception-action, memoire, outils. Difference avec un chatbot.",
  },
  {
    time: "10h30 - 12h30",
    title: "Cas d usage entreprise",
    content: "Support client, analyse de documents, veille concurrentielle, automatisation RH. Etudes de cas.",
  },
  {
    time: "12h30 - 13h30",
    title: "Dejeuner",
    content: "Networking avec les autres participants.",
  },
  {
    time: "13h30 - 15h30",
    title: "Construire son premier agent",
    content: "Atelier pratique : creer un agent avec outils MCP. Integration avec vos systemes.",
  },
  {
    time: "15h30 - 17h00",
    title: "Production et gouvernance",
    content: "Deploiement, monitoring, securite, limites. Construire une roadmap agents pour votre entreprise.",
  },
];

const forYou = [
  "Vous pilotez l innovation dans votre entreprise",
  "Vous etes CTO ou responsable technique",
  "Vous voulez comprendre les agents au-dela du buzz",
  "Vous avez des processus a automatiser intelligemment",
  "Vous utilisez deja des outils IA generatifs",
];

const notForYou = [
  "Vous debutez completement avec l IA",
  "Vous cherchez un cours theorique academique",
  "Vous n avez pas de cas d usage concret",
  "Vous voulez juste faire du chatbot basique",
];

export default function AgentsAIPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      {/* RESUME LLM-FRIENDLY */}
      <section className="bg-[#2D2A2E] border-b border-[#E07A5F]/20">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <p className="text-[#A9A9A9] text-sm font-mono mb-2">&gt; cat agents_formation.txt</p>
          <p className="text-[#F4F1DE] leading-relaxed">
            <strong>Formation Agents.AI</strong> est une formation de 8 heures par Growth Acceleration
            pour apprendre a concevoir et deployer des agents IA autonomes en entreprise.
            Un agent IA est un systeme capable d executer des taches complexes en plusieurs etapes, en utilisant des outils et en prenant des decisions.
            Prix : 900 EUR TTC. Lieu : Paris 1er. Public : responsables innovation, CTOs, product managers tech.
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
                Formation avancee
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-mono font-bold leading-tight text-[#FAFAFA]">
              Agents.AI :<br />
              <span className="text-[#E07A5F]">Future of Work</span>
            </h1>

            <p className="text-lg text-[#F4F1DE]/80 max-w-xl leading-relaxed">
              Les agents IA vont transformer le travail. Apprenez a les concevoir, les deployer
              et les piloter dans votre organisation.
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
              <Button size="lg" className="bg-[#E07A5F] hover:bg-[#E07A5F]/90" asChild>
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
            <AgentsTerminal />
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
