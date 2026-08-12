import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Users, MapPin, ArrowRight } from "lucide-react";
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
import { HermesTerminal } from "./client";
import { Instructor } from "@/components/Instructor";

export const metadata: Metadata = {
  title: "Formation The Zero Employee Company - Hermes",
  description:
    "Construisez votre entreprise zero employe avec des agents IA. 8h de formation pratique a Paris, 350 EUR TTC au lieu de 900. Pour entrepreneurs et independants.",
  keywords: [
    "zero employee company",
    "entreprise zero employe",
    "agents IA",
    "Hermes agent",
    "automatisation entreprise",
    "solopreneur IA",
    "Paris",
  ],
  alternates: {
    canonical: "/zero-employee-company",
  },
  openGraph: {
    title: "Formation The Zero Employee Company avec Hermes | Growth Acceleration",
    description: "Construisez votre entreprise zero employe avec des agents IA. Offre de lancement 350 EUR TTC.",
    type: "website",
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Formation The Zero Employee Company avec Hermes",
  description:
    "Formation pratique de 8 heures pour construire une entreprise zero employe : deleguer la veille, le contenu, la prospection et l administratif a des agents IA orchestres avec Hermes. Chaque participant repart avec une instance operationnelle et un workflow en production.",
  provider: {
    "@type": "EducationalOrganization",
    name: "Growth Acceleration",
    url: "https://www.growth-acceleration.fr",
  },
  courseCode: "ZEC-01",
  educationalLevel: "Intermediaire",
  teaches: [
    "Comprendre la vision zero employe et le panorama des agents IA",
    "Installer et configurer Hermes (cle API, gateway Telegram, memoire)",
    "Creer des skills, une memoire durable et des taches planifiees (cron)",
    "Deleguer a des sous-agents et orchestrer Hermes avec Claude Code",
    "Mettre un workflow reel de son business en production avec garde-fous",
  ],
  audience: {
    "@type": "Audience",
    audienceType: "Entrepreneurs, independants, solopreneurs",
  },
  inLanguage: "fr",
  offers: {
    "@type": "Offer",
    price: "350",
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    ratingCount: 29,
    bestRating: "5",
    worstRating: "1",
  },
};

const instructorSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.growth-acceleration.fr/#frederic",
  name: "Frederic Orlicki",
  jobTitle: "CEO & Formateur",
  worksFor: {
    "@id": "https://www.growth-acceleration.fr/#organization",
  },
  image: "https://www.growth-acceleration.fr/fred.jpg",
  description:
    "Developpeur full stack, ex Le Wagon #0001. 10 ans d experience en growth marketing et tech. Createur de 3 SaaS en production avec Claude API (VideoTools, Jobbot.io, Bigmails.AI). Utilisateur de Claude Code depuis le jour 1 de la beta. Formateur de plus de 400 professionnels a l IA.",
  knowsAbout: ["Agents IA", "Hermes", "Claude Code", "automatisation", "LLM", "zero employee company", "MCP"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Formations IA",
      item: "https://www.growth-acceleration.fr",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Formation The Zero Employee Company",
      item: "https://www.growth-acceleration.fr/zero-employee-company",
    },
  ],
};

const programItems = [
  {
    time: "09h00 - 10h30",
    title: "La vision zero employe",
    content: "Pourquoi c est possible maintenant. Panorama des agents IA (Hermes, Claude Code, MCP). Demo live.",
  },
  {
    time: "10h30 - 12h30",
    title: "Installer et configurer Hermes",
    content: "Cle API, choix du modele, gateway Telegram, memoire. Atelier : chacun repart avec une instance qui tourne.",
  },
  {
    time: "12h30 - 13h30",
    title: "Dejeuner",
    content: "Networking avec les autres participants.",
  },
  {
    time: "13h30 - 15h30",
    title: "Les briques de l autonomie",
    content: "Skills (procedures), memoire durable, cron (planification), delegation a des sous-agents.",
  },
  {
    time: "15h30 - 17h00",
    title: "Orchestrer et automatiser",
    content: "Hermes + Claude Code, validation humaine, garde-fous. Mini-projet : automatiser un workflow reel de votre business.",
  },
];

const forYou = [
  "Vous etes entrepreneur ou independant et voulez deleguer l operationnel",
  "Vous voulez une entreprise qui tourne sans embauche",
  "Vous utilisez deja l IA mais voulez passer de l outil a l agent",
  "Vous avez des taches recurrentes a automatiser (veille, contenu, admin)",
];

const notForYou = [
  "Vous debutez completement avec l IA generative",
  "Vous cherchez un cours theorique sur les LLM",
  "Vous voulez du 100 % automatique sans validation humaine",
  "Vous cherchez juste un chatbot basique",
];

export default function ZeroEmployeeCompanyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(instructorSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* RESUME LLM-FRIENDLY */}
      <section className="bg-[#2D2A2E] border-b border-[#E07A5F]/20">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <p className="text-[#A9A9A9] text-sm font-mono mb-2">&gt; cat zero_employee_formation.txt</p>
          <p className="text-[#F4F1DE] leading-relaxed">
            <strong>Formation The Zero Employee Company avec Hermes</strong> est une formation de 8 heures par Growth Acceleration
            pour construire une entreprise zero employe : deleguer la veille, le contenu, la prospection et l administratif
            a des agents IA, et orchestrer le tout avec Hermes (Nous Research).
            Chaque participant repart avec une instance Hermes operationnelle et un workflow en production dans son business.
            Prix : 350 EUR TTC en offre de lancement (au lieu de 900 EUR). Lieu : Paris 1er. Public : entrepreneurs et independants.
            Growth Acceleration est note 5/5 sur Google (29 avis).
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
                Offre de lancement -60%
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-mono font-bold leading-tight text-[#FAFAFA]">
              The Zero Employee Company :<br />
              <span className="text-[#E07A5F]">avec Hermes</span>
            </h1>

            <p className="text-lg text-[#F4F1DE]/80 max-w-xl leading-relaxed">
              Le travail ne disparait pas. C est vous qui arretez de tout faire a la main.
              Apprenez a deleguer l operationnel a des agents IA — veille, contenu, prospection, admin —
              et a orchestrer le tout avec <strong>Hermes</strong>. Vous repartez avec une instance
              operationnelle et <strong>un workflow en production</strong> dans votre business.
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
                <span className="text-[#A9A9A9] line-through text-sm">900 EUR</span>
                <span className="text-[#E07A5F]">350 EUR</span>
                <span className="text-sm text-[#A9A9A9]">TTC</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#E07A5F] hover:bg-[#E07A5F]/90" asChild>
                <a href="https://calendly.com/fredericorlicki/15min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Reserver ma place <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <a href="#programme">Voir le programme</a>
              </Button>
            </div>
          </HeroContent>

          <div className="hidden lg:block">
            <HermesTerminal />
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

      {/* AUTRES FORMATIONS */}
      <section className="py-12 px-4 border-t border-[#FAFAFA]/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-mono font-bold text-[#FAFAFA] mb-6 text-center">
            Nos autres formations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/claude-code" className="bg-[#2D2A2E]/50 border border-[#FAFAFA]/10 rounded-lg p-4 hover:border-[#E07A5F]/50 transition-all">
              <p className="text-[#FAFAFA] font-mono font-bold mb-1">Claude Code</p>
              <p className="text-[#A9A9A9] text-sm">De l idee au MVP en une journee</p>
            </Link>
            <Link href="/geo" className="bg-[#2D2A2E]/50 border border-[#FAFAFA]/10 rounded-lg p-4 hover:border-[#E07A5F]/50 transition-all">
              <p className="text-[#FAFAFA] font-mono font-bold mb-1">GEO</p>
              <p className="text-[#A9A9A9] text-sm">Optimisez votre visibilite dans les moteurs IA</p>
            </Link>
            <Link href="/agents-ai" className="bg-[#2D2A2E]/50 border border-[#FAFAFA]/10 rounded-lg p-4 hover:border-[#E07A5F]/50 transition-all">
              <p className="text-[#FAFAFA] font-mono font-bold mb-1">Agents.AI</p>
              <p className="text-[#A9A9A9] text-sm">Deployez des agents IA autonomes</p>
            </Link>
            <Link href="/automations" className="bg-[#2D2A2E]/50 border border-[#FAFAFA]/10 rounded-lg p-4 hover:border-[#E07A5F]/50 transition-all">
              <p className="text-[#FAFAFA] font-mono font-bold mb-1">Automations</p>
              <p className="text-[#A9A9A9] text-sm">Maitrisez N8N et l automatisation IA</p>
            </Link>
          </div>
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
                <span className="text-xl text-[#A9A9A9] line-through mr-3">900 EUR</span>
                350 EUR <span className="text-lg text-[#A9A9A9]">TTC</span>
              </p>
              <p className="text-[#A9A9A9] text-sm mt-2">231 rue Saint-Honore, 75001 Paris</p>
            </div>
            <a href="https://calendly.com/fredericorlicki/15min" target="_blank" rel="noopener noreferrer">
              <CTAButton>Reserver maintenant</CTAButton>
            </a>
          </ReservationCard>
        </div>
      </section>
    </>
  );
}
