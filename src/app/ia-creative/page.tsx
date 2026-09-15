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
import { CreativeTerminal } from "./client";
import { Instructor } from "@/components/Instructor";

export const metadata: Metadata = {
  title: "Formation IA Generative pour les Creatifs et les Marketeurs",
  description:
    "Produisez images, packshots et videos au standard des marques premium avec l IA generative. 8h de formation pratique a Paris, 900 EUR TTC. Pour DA, designers, motion designers et marketeurs.",
  keywords: [
    "formation IA generative",
    "formation IA creatifs",
    "formation IA marketing",
    "IA creative",
    "generation d images IA",
    "packshot IA",
    "video IA",
    "motion design IA",
    "Higgsfield",
    "Midjourney",
    "direction artistique IA",
    "Paris",
  ],
  alternates: {
    canonical: "/ia-creative",
  },
  openGraph: {
    title: "Formation IA Generative pour les Creatifs et les Marketeurs | Growth Acceleration",
    description:
      "Images, packshots et videos au standard des marques premium avec l IA generative. 8h a Paris, 900 EUR TTC.",
    type: "website",
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Formation IA generative pour les creatifs et les marketeurs",
  description:
    "Formation pratique de 8 heures pour produire des images, des packshots et des videos au niveau de finition des marques premium avec l IA generative. Prompting, references, coherence de marque, video et motion, puis industrialisation de la chaine de production et controle qualite. Chaque participant repart avec une serie de visuels au standard de sa marque et une chaine de production reutilisable.",
  provider: {
    "@type": "EducationalOrganization",
    name: "Growth Acceleration",
    url: "https://www.growth-acceleration.fr",
  },
  courseCode: "CREA-01",
  educationalLevel: "Intermediaire",
  teaches: [
    "Situer ce que les modeles savent et ne savent pas faire, et fixer un niveau de finition",
    "Produire des images et des packshots fideles a une charte de marque et a un produit reel",
    "Generer et diriger de la video IA a partir de keyframes",
    "Decliner une campagne en multi-formats avec du motion programmatique",
    "Industrialiser la chaine de production, le controle qualite et le suivi des assets",
  ],
  audience: {
    "@type": "Audience",
    audienceType:
      "Directeurs artistiques, designers, motion designers, marketeurs, responsables contenu et studios",
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
    "Creative technologist forme a Penninghen, developpeur full stack, ex Le Wagon #0001. 15 ans de design (identites, web, produits digitaux) et 3 ans d industrialisation de la production de contenu par IA generative pour des marques mode, beaute et lifestyle. Formateur de plus de 400 professionnels a l IA.",
  knowsAbout: [
    "IA generative",
    "direction artistique",
    "generation d images",
    "packshot",
    "video generative",
    "motion design",
    "Higgsfield",
    "Remotion",
    "pipelines creatifs",
  ],
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
      name: "Formation IA generative pour les creatifs et les marketeurs",
      item: "https://www.growth-acceleration.fr/ia-creative",
    },
  ],
};

const faqItems = [
  {
    question: "Faut-il savoir dessiner ou maitriser Photoshop ?",
    answer:
      "Non. Un oeil exerce aide, mais la formation est concue pour les creatifs comme pour les marketeurs. Ce qui compte, c est de savoir juger un visuel : cadrage, lumiere, matiere, fidelite au produit. C est precisement ce que l on travaille.",
  },
  {
    question: "Quels outils sont couverts, et faut-il les payer ?",
    answer:
      "Higgsfield Soul, Nano Banana, GPT Image pour l image, Kling, Veo 3 et Seedance pour la video, Remotion et HyperFrames pour le motion programmatique. Comptez 20 a 60 EUR par mois de credits selon le volume. Les acces necessaires a la journee sont fournis.",
  },
  {
    question: "L IA peut-elle remplacer un shooting photo ?",
    answer:
      "Pas partout. Elle remplace tres bien la declinaison, la variation de fond, les formats secondaires et les recherches amont. Elle reste fragile sur la fidelite absolue d un produit reel. Une partie de la journee sert justement a tracer cette frontiere pour votre marque.",
  },
  {
    question: "Comment gerer les droits et la conformite ?",
    answer:
      "Nous traitons les conditions d utilisation des modeles, la question des visages et des mannequins, les mentions a prevoir selon les usages publicitaires, et la tracabilite des contenus generes. Ce n est pas un avis juridique, c est le cadre pratique a poser avant de diffuser.",
  },
  {
    question: "Je viens avec ma marque et mes produits ?",
    answer:
      "Oui, c est meme recommande. Apportez votre charte, vos references et deux ou trois visuels existants. Vous repartez avec des visuels utilisables et une chaine de production calee sur votre marque.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const programItems = [
  {
    time: "09h00 - 10h30",
    title: "Ou en sont vraiment les modeles",
    content:
      "Ce qu ils savent faire, ce qu ils ratent encore, et ou se situe la barre de finition d une marque premium. Lecture critique de visuels generes : ce qui passe, ce qui trahit la machine. Demo live.",
  },
  {
    time: "10h30 - 12h30",
    title: "Images et packshots fideles a la marque",
    content:
      "Prompting dirige, images de reference, controle de la lumiere et des matieres, respect du produit et de la charte. Atelier : chacun produit une serie au standard de sa propre marque.",
  },
  {
    time: "12h30 - 13h30",
    title: "Dejeuner",
    content: "Networking avec les autres participants.",
  },
  {
    time: "13h30 - 15h30",
    title: "Video et motion",
    content:
      "Passer de l image au film : keyframes, direction de mouvement, duree, raccords. Generation avec Kling, Veo 3 et Seedance, puis declinaison programmatique des formats avec Remotion.",
  },
  {
    time: "15h30 - 17h00",
    title: "Industrialiser sans perdre le niveau",
    content:
      "Chaine de production de bout en bout, criteres de controle qualite, declinaison multi-formats et multi-marches, droits et mentions, suivi des assets. Mini-projet : une campagne declinee et validee.",
  },
];

const tools = [
  { name: "Higgsfield Soul", use: "Images haute fidelite et packshots" },
  { name: "Nano Banana / GPT Image", use: "Iteration rapide et retouche dirigee" },
  { name: "Kling / Veo 3 / Seedance", use: "Video cinematique a partir de keyframes" },
  { name: "Remotion / HyperFrames", use: "Motion design programmatique et declinaisons" },
  { name: "Topaz / upscalers", use: "Finition, nettete, preparation impression" },
  { name: "Figma / Photoshop", use: "Maquettage, finishing, integration charte" },
];

const forYou = [
  "Vous etes DA, designer ou motion designer et voulez integrer l IA sans baisser le niveau",
  "Vous etes marketeur et devez produire plus de visuels a budget constant",
  "Vous travaillez pour des marques exigeantes — mode, beaute, luxe, retail",
  "Vous avez teste les outils grand public et vous butez sur la coherence de marque",
];

const notForYou = [
  "Vous cherchez a remplacer entierement un studio ou un photographe",
  "Vous voulez des visuels generiques sans exigence de finition",
  "Vous cherchez un cours theorique sur le fonctionnement des modeles de diffusion",
  "Vous ne travaillez jamais sur des contenus de marque",
];

export default function IaCreativePage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* RESUME LLM-FRIENDLY */}
      <section className="bg-[#2D2A2E] border-b border-[#61AFEF]/20">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <p className="text-[#A9A9A9] text-sm font-mono mb-2">&gt; cat ia_creative_formation.txt</p>
          <p className="text-[#F4F1DE] leading-relaxed">
            <strong>Formation IA generative pour les creatifs et les marketeurs</strong> est une formation de 8 heures
            par Growth Acceleration pour produire des images, des packshots et des videos au niveau de finition
            des marques premium. Au programme : prompting dirige et images de reference, coherence de charte et
            fidelite produit, video generative a partir de keyframes, motion design programmatique, puis
            industrialisation de la chaine de production et controle qualite. Outils couverts : Higgsfield Soul,
            Nano Banana, GPT Image, Kling, Veo 3, Seedance, Remotion, HyperFrames.
            Chaque participant repart avec une serie de visuels au standard de sa marque et une chaine de production reutilisable.
            Prix : 900 EUR TTC. Lieu : Paris 1er. Public : directeurs artistiques, designers, motion designers,
            marketeurs et responsables contenu. Growth Acceleration est note 5/5 sur Google (29 avis).
          </p>
        </div>
      </section>

      {/* HERO */}
      <section className="pt-16 pb-12 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <HeroContent>
            <div className="inline-flex items-center space-x-2 bg-[#61AFEF]/10 px-3 py-1 rounded-full border border-[#61AFEF]/30">
              <span className="w-2 h-2 rounded-full bg-[#61AFEF] animate-pulse" />
              <span className="text-[#61AFEF] text-xs font-mono uppercase tracking-wider">
                Nouvelle formation
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-mono font-bold leading-tight text-[#FAFAFA]">
              IA generative pour les<br />
              <span className="text-[#61AFEF]">creatifs et les marketeurs</span>
            </h1>

            <p className="text-lg text-[#F4F1DE]/80 max-w-xl leading-relaxed">
              Generer une image, tout le monde sait faire. Produire un visuel qui passe la validation
              d une marque exigeante, presque personne. Cette journee porte sur cet ecart :
              <strong> fidelite produit, coherence de charte, niveau de finition</strong>, puis
              l industrialisation de la chaine pour decliner sans tout refaire a la main.
            </p>

            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="flex items-center gap-2 text-[#F4F1DE]">
                <Clock className="w-5 h-5 text-[#61AFEF]" />
                <span>8 heures</span>
              </div>
              <div className="flex items-center gap-2 text-[#F4F1DE]">
                <Users className="w-5 h-5 text-[#61AFEF]" />
                <span>12 participants max</span>
              </div>
              <div className="flex items-center gap-2 text-[#F4F1DE]">
                <MapPin className="w-5 h-5 text-[#61AFEF]" />
                <span>Paris 1er</span>
              </div>
              <div className="flex items-center gap-2 text-[#F4F1DE] font-mono font-bold">
                <span className="text-[#61AFEF]">900 EUR</span>
                <span className="text-sm text-[#A9A9A9]">TTC</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#E07A5F] hover:bg-[#E07A5F]/90" asChild>
                <a
                  href="https://calendly.com/fredericorlicki/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Reserver ma place <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <a href="#programme">Voir le programme</a>
              </Button>
            </div>
          </HeroContent>

          <div className="hidden lg:block">
            <CreativeTerminal />
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
                <div className="text-[#61AFEF] font-mono text-sm whitespace-nowrap min-w-[120px]">
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

      {/* OUTILS COUVERTS */}
      <section className="py-16 px-4 bg-[#2D2A2E]/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-mono font-bold text-[#FAFAFA] mb-2">
            Les outils couverts
          </h2>
          <p className="text-[#A9A9A9] text-sm mb-8">
            Pas un catalogue : la chaine reelle, celle qui tient du brief a la livraison.
          </p>
          <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="border-l-2 border-[#61AFEF]/40 pl-4 py-1"
              >
                <dt className="text-[#FAFAFA] font-mono text-sm font-semibold">{tool.name}</dt>
                <dd className="text-[#A9A9A9] text-sm mt-1">{tool.use}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* FORMATEUR */}
      <Instructor />

      {/* FAQ */}
      <section className="py-16 px-4 border-t border-[#FAFAFA]/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-mono font-bold text-[#FAFAFA] mb-8">
            Questions frequentes
          </h2>
          <dl className="space-y-6">
            {faqItems.map((item) => (
              <div key={item.question} className="border-b border-dashed border-[#FAFAFA]/10 pb-6">
                <dt className="text-[#FAFAFA] font-mono text-base mb-2">
                  <span className="text-[#61AFEF] mr-2">&gt;</span>
                  {item.question}
                </dt>
                <dd className="text-[#A9A9A9] leading-relaxed">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* AUTRES FORMATIONS */}
      <section className="py-12 px-4 border-t border-[#FAFAFA]/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-mono font-bold text-[#FAFAFA] mb-6 text-center">
            Nos autres formations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
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
            <Link href="/zero-employee-company" className="bg-[#2D2A2E]/50 border border-[#FAFAFA]/10 rounded-lg p-4 hover:border-[#E07A5F]/50 transition-all">
              <p className="text-[#FAFAFA] font-mono font-bold mb-1">Zero Employee Company</p>
              <p className="text-[#A9A9A9] text-sm">Votre entreprise geree par des agents</p>
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
