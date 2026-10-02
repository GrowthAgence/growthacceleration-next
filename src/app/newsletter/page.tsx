import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { NewBadge } from "@/components/NewBadge";

export const metadata: Metadata = {
  title: "Newsletter IA pratique - Un guide par email",
  description:
    "La newsletter de Growth Acceleration : un email quand un nouveau guide IA sort, avec le prompt, la methode et le piege a eviter. Gratuit, sans spam, desinscription en un clic.",
  alternates: {
    canonical: "/newsletter",
  },
  openGraph: {
    title: "Newsletter IA pratique | Growth Acceleration",
    description: "Un email quand un nouveau guide IA sort : le prompt, la methode et le piege a eviter.",
    type: "website",
  },
};

const PROMISES = [
  {
    title: "Le prompt",
    text: "Le texte exact a coller dans Claude, ChatGPT ou Claude Code. Vous le copiez, ca tourne.",
  },
  {
    title: "La methode",
    text: "Les etapes dans l ordre, testees avant d etre envoyees. Pas de theorie, un pas a pas.",
  },
  {
    title: "Le piege a eviter",
    text: "Ce qui casse la premiere fois et comment le regler, pour ne pas perdre une heure dessus.",
  },
];

const LAST_ISSUE = {
  href: "/blog/jarvis-claude-code-fish-audio",
  title: "Parlez a votre ordinateur. Il va vous repondre.",
  summary: "Installer Jarvis, un assistant vocal qui pilote Claude Code, et lui donner une vraie voix.",
};

export default function NewsletterPage() {
  return (
    <>
      {/* Resume LLM */}
      <section className="bg-[#2D2A2E] border-b border-[#E07A5F]/20">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <p className="text-[#A9A9A9] text-sm font-mono mb-2">&gt; cat newsletter.txt</p>
          <p className="text-[#F4F1DE] leading-relaxed">
            <strong>La newsletter Growth Acceleration</strong> est un email gratuit envoye a chaque
            nouveau guide IA pratique publie sur le blog : le prompt a copier, la methode pas a pas et
            le piege a eviter. Public : entrepreneurs, managers et independants qui utilisent l IA au
            quotidien. Desinscription en un clic.
          </p>
        </div>
      </section>

      {/* Hero */}
      <section className="pt-20 pb-12 px-4 max-w-4xl mx-auto">
        <p className="flex items-center gap-2 text-[#A9A9A9] text-sm font-mono mb-4">
          <NewBadge /> &gt; ./newsletter
        </p>
        <h1 className="text-4xl md:text-5xl font-mono font-bold leading-tight text-[#FAFAFA] mb-6">
          Un guide IA qui marche,
          <br />
          <span className="text-[#E07A5F]">directement dans votre boite</span>
        </h1>
        <p className="text-lg text-[#F4F1DE]/80 leading-relaxed max-w-2xl">
          Pas de veille a rallonge ni de liste de 50 outils. Un email quand un guide sort, avec ce qu
          il faut pour le refaire chez vous le jour meme.
        </p>
      </section>

      {/* Ce que contient chaque email */}
      <section className="px-4 pb-12 max-w-4xl mx-auto">
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PROMISES.map((p, i) => (
            <li key={p.title} className="bg-[#2D2A2E]/60 border border-dashed border-[#FAFAFA]/10 rounded-lg p-5">
              <p className="text-[#E07A5F] font-mono text-xs mb-2">0{i + 1}</p>
              <h2 className="text-[#FAFAFA] font-mono font-bold mb-2">{p.title}</h2>
              <p className="text-[#A9A9A9] text-sm leading-relaxed">{p.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <NewsletterSignup placement="newsletter-page" />

      {/* Dernier numero */}
      <section className="px-4 pb-20 max-w-4xl mx-auto">
        <p className="text-[#A9A9A9] text-sm font-mono mb-3">&gt; dernier numero</p>
        <Link
          href={LAST_ISSUE.href}
          className="group block border-l-2 border-[#E07A5F] pl-5 py-1 hover:bg-[#2D2A2E]/40 transition-colors"
        >
          <p className="text-[#FAFAFA] font-mono font-bold group-hover:text-[#E07A5F] transition-colors">
            {LAST_ISSUE.title}
          </p>
          <p className="text-[#A9A9A9] text-sm mt-1">{LAST_ISSUE.summary}</p>
          <span className="inline-flex items-center gap-1 text-[#E07A5F] text-sm font-mono mt-2">
            Lire le guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>
      </section>
    </>
  );
}
