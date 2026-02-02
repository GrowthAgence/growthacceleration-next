import type { Metadata } from "next";
import { FileText, Download } from "lucide-react";
import { ResourcesGrid } from "./client";
import { Instructor } from "@/components/Instructor";

export const metadata: Metadata = {
  title: "Ressources gratuites IA",
  description:
    "Telechargez gratuitement nos guides, templates et checklists sur l intelligence artificielle. Prompts ChatGPT, templates N8N, guides GEO et plus.",
  keywords: [
    "ressources IA gratuites",
    "prompts ChatGPT",
    "templates N8N",
    "guide GEO",
    "formation IA",
  ],
};

export default function RessourcesPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-20 pb-12 px-4 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-[#2D2A2E] px-3 py-1 rounded-full border border-[#FAFAFA]/10 mb-6">
            <Download className="w-4 h-4 text-[#E07A5F]" />
            <span className="text-[#A9A9A9] text-xs font-mono uppercase tracking-wider">
              Ressources gratuites
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-mono font-bold leading-tight text-[#FAFAFA] mb-6">
            Guides, templates et prompts<br />
            <span className="text-[#E07A5F]">100% gratuits</span>
          </h1>

          <p className="text-lg text-[#F4F1DE]/80 max-w-2xl mx-auto leading-relaxed">
            Telechargez nos ressources pour maitriser l IA generative, l automatisation
            et le GEO. Remplissez le formulaire et recevez le lien instantanement.
          </p>
        </div>
      </section>

      {/* RESSOURCES GRID */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <ResourcesGrid />
        </div>
      </section>

      {/* INFO */}
      <section className="py-12 px-4 bg-[#2D2A2E]/30">
        <div className="max-w-2xl mx-auto text-center">
          <FileText className="w-12 h-12 text-[#E07A5F] mx-auto mb-4" />
          <h2 className="text-xl font-mono font-bold text-[#FAFAFA] mb-4">
            Pourquoi demander vos coordonnees ?
          </h2>
          <p className="text-[#A9A9A9] leading-relaxed">
            Ces ressources nous demandent du temps a creer et a maintenir.
            En echange de votre email et telephone, vous recevez du contenu de qualite
            et on peut vous tenir informe des prochaines formations et ressources.
            Pas de spam, promis.
          </p>
        </div>
      </section>

      {/* FORMATEUR */}
      <Instructor />
    </>
  );
}
