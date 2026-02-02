"use client";

import { motion } from "motion/react";
import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GoogleReview {
  name: string;
  quote: string;
}

const googleReviews: GoogleReview[] = [
  {
    name: "Alexandra Klouse-Farjas",
    quote: "Super bootcamp, semaine intense, très complète et surtout très pragmatique. Des formateurs top, un enseignement qualitatif, des supports clairs et précis.",
  },
  {
    name: "Patricia Perche",
    quote: "Un super bootcamp avec l'intervention d'experts du marketing digital de qualité. J'ai apprécié la durée du programme, sa qualité et l'organisation.",
  },
  {
    name: "Anna Abelli",
    quote: "Excellent bootcamp ! 5 jours intenses mais super enrichissants, une formation bien structurée avec autant de théoriques que de pratiques et des formateurs de qualité, experts du marketing digital. Je recommande !",
  },
  {
    name: "Ananda Danielfy",
    quote: "En tant que consultante en marketing digital, Growth Accélération m'a donné toutes les clés pour booster la croissance de mes clients.",
  },
  {
    name: "Yehouda Benchimol",
    quote: "Une expérience de formation révolutionnaire avec Frédéric Orlicki, Thibaud Douillard et Anne Lise Franjou !",
  },
  {
    name: "Warda Moulier",
    quote: "Une formation au top, très complète malgré le format court qui permet d'apprendre et d'approfondir ses connaissances en growth, marketing, etc. Très bonne énergie. Les formateurs sont tops et très pédagogues et l'équipe géniale !",
  },
  {
    name: "Anne Sophie Oster",
    quote: "Formation de très bon niveau ! C'est focus, smart, rapide, axée outils et pratique, directement actionnable. Des formateurs et intervenants excellents, très pédagogues et en plus hyper sympa ! Vraiment à recommander !",
  },
  {
    name: "Justine Cattacin",
    quote: "Très bonne formation qui allie approche stratégique et technique de Growth Hacking.",
  },
  {
    name: "Nadir Hassani",
    quote: "J'ai eu la chance de participer au batch de Growth-Accélération. Je recommande vivement à tous les entrepreneurs / marketeurs.",
  },
  {
    name: "Nasser Madaran",
    quote: "Superbe semaine pour s'initier et devenir compétent sur les sujets du growth marketing ! Programme très bien réalisé et pédagogue.",
  },
  {
    name: "Nancaidah C T",
    quote: "Une formation intense et riche en apprentissages. Growth Acceleration donne les outils techniques afin de mieux appréhender les derniers leviers de croissance en marketing digital, café et croissants en bonus ! Je recommande réellement.",
  },
  {
    name: "Adélaïde Aerts",
    quote: "Formation ultra complète !!",
  },
  {
    name: "Florian Rossini",
    quote: "Formation intensive sur 5 jours. Programme intéressant et varié. Beaucoup de tips/outils partagés par des experts.",
  },
  {
    name: "William",
    quote: "Excellente formation pour tout novice en growth hacking cherchant à acquérir une culture technique directement activable sur le sujet. Gros plus : des formateurs de terrain issus de l'environnement startup.",
  },
  {
    name: "Jean-Ludovic Poix",
    quote: "Un bon bootcamp pour toute personne recherchant des bases en growth marketing. Des intervenants de qualité et accessibles, et un Fred à la gouaille légendaire !",
  },
  {
    name: "Christophe Le Courtois",
    quote: "Des bootcamps organisés par de vrais pros à la pointe sur leurs sujets. La démarche est concrète et efficace. En un mot... Solide !",
  },
  {
    name: "Aymar de Colnet",
    quote: "Super formation avec des One Man Show de Frédéric !!! J'ai appris plein de choses, les formateurs sont super sympas et hyper pointus. Je recommande à 100% !!!",
  },
  {
    name: "Elsa Blanchard",
    quote: "Super formation, formateurs top, les grands principes mais aussi plein de petites techniques de hack hyper utiles et une très bonne ambiance !",
  },
  {
    name: "Marie Chapas",
    quote: "Formation très intense, très complète avec des intervenants de bonne qualité et qui mixe théorie et pratique. Top je recommande vivement !",
  },
  {
    name: "Albane Sanz",
    quote: "Une formation qui permet d'avoir toutes les bases du marketing (PMF, scraping, GA, GTM, Ads, Linkedin, Facebook, Instagram, Automation). Je recommande !",
  },
  {
    name: "Maureen Perry",
    quote: "Bootcamp très efficace et complet ! Equipe et formateurs super sympas pour ne rien gâcher !! Je recommande à 200%.",
  },
  {
    name: "Lyes Amiri",
    quote: "Super super super super formation. La formation correspond exactement à ce dont j'ai besoin et ce que je veux.",
  },
  {
    name: "Mehdi Berra",
    quote: "Génial pour plus qu'une introduction au Growth ! Hyper complet en 1 semaine. On valide !",
  },
  {
    name: "Ghislain de Robien",
    quote: "Très bonne formation. Une semaine intense pour faire un tour très complet du sujet.",
  },
  {
    name: "Antoine Rochon",
    quote: "Formation TOP ! Elle vous donne toutes les clés pour devenir un Growth Hacker accompli.",
  },
  {
    name: "Marine Porret",
    quote: "Super formateur ! Formation ultra complète, encore merci :D",
  },
  {
    name: "Aymeric Paray",
    quote: "Excellent bootcamp ! Très complet et les formateurs au top.",
  },
  {
    name: "Lea Geoffroy",
    quote: "Formation très intense, complète avec des intervenants de qualité.",
  },
  {
    name: "Daphné Charoy",
    quote: "Super formation et formateurs tout aussi top !",
  },
];

interface TestimonialsProps {
  accentColor?: string;
}

export function Testimonials({ accentColor = "#E07A5F" }: TestimonialsProps) {
  return (
    <section className="py-16 px-4 bg-[#2D2A2E]/30">
      <div className="max-w-7xl mx-auto">
        {/* LLM-Friendly Summary */}
        <div className="sr-only">
          Growth Acceleration a reçu {googleReviews.length} avis 5 étoiles sur Google.
          Les participants recommandent les formations pour leur approche pratique,
          les formateurs de qualité et les résultats concrets obtenus. Parmi les avis :
          {googleReviews.map(r => `${r.name} : "${r.quote}"`).join(" | ")}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-mono font-bold text-center mb-4"
        >
          <span style={{ color: accentColor }}>&gt;</span>{" "}
          <span className="text-[#FAFAFA]">cat</span>{" "}
          <span style={{ color: accentColor }}>reviews.log</span>
        </motion.h2>

        {/* Google Rating Summary */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mb-10"
        >
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-[#E07A5F] text-[#E07A5F]"
              />
            ))}
          </div>
          <span className="text-[#FAFAFA] font-mono">5.0</span>
          <span className="text-[#A9A9A9]">•</span>
          <span className="text-[#A9A9A9]">{googleReviews.length} avis Google</span>
        </motion.div>

        {/* All Reviews Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {googleReviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: Math.min(i * 0.05, 0.5), duration: 0.4 }}
              className="bg-[#2D2A2E] p-5 rounded-lg border border-dashed border-[#FAFAFA]/10"
            >
              {/* Stars */}
              <div className="flex mb-2">
                {[...Array(5)].map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="w-3.5 h-3.5 fill-[#E07A5F] text-[#E07A5F]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#F4F1DE] text-sm leading-relaxed mb-3">
                "{review.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-2">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center font-mono font-bold text-xs text-[#1E1E1E]"
                  style={{ backgroundColor: accentColor }}
                >
                  {review.name.charAt(0)}
                </div>
                <p className="text-[#FAFAFA] font-mono text-xs">{review.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-10"
        >
          <Button
            asChild
            variant="outline"
            className="border-[#E07A5F]/30 text-[#F4F1DE] hover:bg-[#E07A5F]/10 hover:border-[#E07A5F]/50"
          >
            <a
              href="https://www.google.com/search?q=growth+acceleration+paris+avis"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Voir tous les avis sur Google
              <ExternalLink className="w-3 h-3" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
