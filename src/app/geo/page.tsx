import type { Metadata } from "next";
import { Clock, Users, MapPin, ArrowRight, Search, TrendingUp, Eye } from "lucide-react";
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
import { GeoTerminal } from "./client";
import { Instructor } from "@/components/Instructor";

export const metadata: Metadata = {
  title: "Formation GEO - Le nouvel eldorado SEO",
  description:
    "Formation GEO (Generative Engine Optimization) par Growth Acceleration : apprenez a optimiser votre contenu pour etre cite par ChatGPT, Perplexity et Claude. 8h de formation pratique a Paris, 900 EUR TTC. Pour SEO managers et marketers.",
  keywords: [
    "formation GEO",
    "Generative Engine Optimization",
    "SEO IA",
    "ChatGPT SEO",
    "Perplexity",
    "llms.txt",
    "Paris",
  ],
  alternates: {
    canonical: "/geo",
  },
  openGraph: {
    title: "Formation GEO - Le nouvel eldorado SEO",
    description: "Optimisez votre presence dans les reponses des moteurs IA.",
    type: "website",
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Formation GEO - Le nouvel eldorado SEO",
  description:
    "Formation pratique de 8 heures pour maitriser le Generative Engine Optimization (GEO). Apprenez a optimiser votre contenu pour etre cite par les moteurs de reponse IA comme ChatGPT, Perplexity et Claude.",
  provider: {
    "@type": "EducationalOrganization",
    name: "Growth Acceleration",
    url: "https://www.growth-acceleration.fr",
  },
  courseCode: "GEO-01",
  educationalLevel: "Intermediaire",
  teaches: [
    "Comprendre le GEO vs SEO traditionnel",
    "Structurer le contenu pour les LLM",
    "Implementer Schema.org et llms.txt",
    "Mesurer sa visibilite dans les reponses IA",
    "Strategies de citation et d autorite",
  ],
  audience: {
    "@type": "Audience",
    audienceType: "Marketing Managers, SEO Managers, Content Managers, Entrepreneurs",
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

// Schema.org FAQPage - FAQ GEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu est-ce que le GEO (Generative Engine Optimization) ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le GEO est l optimisation de contenu pour les moteurs de reponse IA comme ChatGPT, Perplexity et Claude. Contrairement au SEO classique qui vise Google, le GEO vise a etre cite dans les reponses generees par les modeles de langage.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle est la difference entre GEO et SEO ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le SEO optimise pour les moteurs de recherche classiques (Google, Bing). Le GEO optimise pour les moteurs de reponse IA (ChatGPT, Perplexity, Claude). Les techniques sont differentes : le GEO se concentre sur la structuration du contenu, les donnees structurees et l extractabilite par les LLM.",
      },
    },
    {
      "@type": "Question",
      name: "Faut-il des competences techniques pour la formation GEO ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Des bases en SEO classique sont recommandees. Vous n avez pas besoin de savoir coder, mais vous devez gerer du contenu web (blog, site, e-commerce). La formation couvre les aspects techniques comme Schema.org et llms.txt.",
      },
    },
    {
      "@type": "Question",
      name: "Comment mesurer sa visibilite dans les reponses IA ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La formation enseigne comment tracker ses citations dans ChatGPT, Perplexity et Claude, analyser les logs de crawl des bots IA, et construire une strategie d autorite pour maximiser ses chances d etre cite.",
      },
    },
  ],
};

// Schema.org Person (formateur)
const instructorSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Frederic Orlicki",
  jobTitle: "CEO & Formateur GEO",
  worksFor: {
    "@type": "Organization",
    name: "Growth Acceleration",
  },
  description:
    "10 ans d experience en growth marketing et SEO. Pionnier du GEO en France. Formateur de plus de 400 professionnels a l IA.",
  knowsAbout: ["GEO", "Generative Engine Optimization", "SEO", "Schema.org", "llms.txt", "ChatGPT", "Perplexity"],
};

// Schema.org AggregateRating - 29 avis Google 5 etoiles
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Growth Acceleration",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    ratingCount: 29,
    bestRating: "5",
    worstRating: "1",
  },
};

const programItems = [
  {
    time: "09h00 - 10h30",
    title: "GEO vs SEO : le nouveau paradigme",
    content: "Comprendre comment les LLM selectionnent et citent les sources. Analyse de cas reels.",
  },
  {
    time: "10h30 - 12h30",
    title: "Structurer son contenu pour les LLM",
    content: "Front-loading, extractabilite, donnees structurees. Exercices pratiques sur vos contenus.",
  },
  {
    time: "12h30 - 13h30",
    title: "Dejeuner",
    content: "Networking avec les autres participants.",
  },
  {
    time: "13h30 - 15h30",
    title: "Implementation technique",
    content: "Schema.org, llms.txt, meta donnees. Configuration et audit de votre site.",
  },
  {
    time: "15h30 - 17h00",
    title: "Mesure et strategie",
    content: "Tracker sa visibilite IA, analyser les logs, construire son autorite.",
  },
];

const forYou = [
  "Vous etes responsable marketing ou SEO",
  "Vous gerez du contenu editorial ou produit",
  "Vous voulez anticiper l evolution du search",
  "Vous avez deja des bases en SEO classique",
  "Vous voulez etre cite par ChatGPT et Perplexity",
];

const notForYou = [
  "Vous n avez aucune notion de SEO",
  "Vous cherchez des hacks court terme",
  "Vous n avez pas de site web a optimiser",
  "Vous voulez uniquement du SEO Google classique",
];

export default function GeoPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(instructorSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      {/* RESUME LLM-FRIENDLY */}
      <section className="bg-[#2D2A2E] border-b border-[#E07A5F]/20">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <p className="text-[#A9A9A9] text-sm font-mono mb-2">&gt; cat geo_formation.txt</p>
          <p className="text-[#F4F1DE] leading-relaxed">
            <strong>Formation GEO (Generative Engine Optimization)</strong> est une formation de 8 heures par Growth Acceleration
            pour apprendre a optimiser son contenu afin d etre cite par les moteurs de reponse IA (ChatGPT, Perplexity, Claude).
            Prix : 900 EUR TTC. Lieu : Paris 1er. Public : marketing managers, SEO managers, content managers.
            Le GEO est le nouvel eldorado du referencement : ceux qui le maitrisent seront cites, les autres seront ignores.
            Selon une etude de Princeton University (2024), les techniques GEO augmentent la visibilite dans les reponses IA de 15 a 40%.
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
                Nouveau programme
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-mono font-bold leading-tight text-[#FAFAFA]">
              GEO :<br />
              <span className="text-[#E07A5F]">Le nouvel eldorado</span> SEO
            </h1>

            <p className="text-lg text-[#F4F1DE]/80 max-w-xl leading-relaxed">
              Le SEO classique ne suffit plus. Apprenez a etre cite par ChatGPT, Perplexity et Claude.
              Le GEO est l avenir du referencement.
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
            <GeoTerminal />
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
              <h3 className="text-[#E07A5F] font-mono mb-4 flex items-center gap-2 text-lg">
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
            <a href="https://calendly.com/fredericorlicki/15min" target="_blank" rel="noopener noreferrer">
              <CTAButton>Reserver maintenant</CTAButton>
            </a>
          </ReservationCard>
        </div>
      </section>
    </>
  );
}
