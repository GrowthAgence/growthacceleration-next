"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Quel niveau technique faut-il ?",
    answer:
      "Vous devez etre a l'aise avec un terminal et avoir deja modifie du code. Si vous utilisez Webflow en custom code, Notion avec des formules complexes, ou des outils no-code avances, vous avez le niveau.",
  },
  {
    question: "Claude Code est-il gratuit ?",
    answer:
      "Claude Code necessite un abonnement Claude Pro (20$/mois) ou une cle API Anthropic. Le cout moyen d'utilisation est de 5-15$/mois pour un usage regulier.",
  },
  {
    question: "Je peux utiliser les competences pour mon travail salarie ?",
    answer:
      "Absolument. Les competences acquises sont immediatement applicables en entreprise. Beaucoup de nos alumni utilisent Claude Code pour accelerer leur productivite au travail.",
  },
  {
    question: "Et si je suis bloque apres la formation ?",
    answer:
      "Vous avez acces a un groupe Slack prive avec tous les alumni et le formateur. Les questions sont generalement repondues en moins de 24h.",
  },
  {
    question: "Puis-je venir avec mon propre projet ?",
    answer:
      "Oui et c'est meme recommande ! Les exercices pratiques peuvent etre adaptes a votre projet. Vous repartirez avec du code utilisable.",
  },
  {
    question: "Mac, Windows ou Linux ?",
    answer:
      "Claude Code fonctionne sur les trois systemes. La formation est donnee sur Mac mais les concepts sont identiques. Apportez votre propre laptop.",
  },
];

interface FAQProps {
  accentColor?: string;
}

export function FAQ({ accentColor = "#E07A5F" }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-mono font-bold text-center mb-12"
        >
          <span style={{ color: accentColor }}>&gt;</span>{" "}
          <span className="text-[#FAFAFA]">help</span>{" "}
          <span className="text-[#A9A9A9]">--verbose</span>
        </motion.h2>

        <div className="space-y-3">
          {faqItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#2D2A2E] rounded-lg overflow-hidden"
            >
              <button
                onClick={() => {
                  const isOpening = openIndex !== i;
                  setOpenIndex(openIndex === i ? null : i);
                  if (isOpening) {
                    window.gtag?.("event", "faq_click", {
                      faq_question: item.question,
                      faq_index: i,
                      page_path: window.location.pathname,
                    });
                  }
                }}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-[#FAFAFA]/5 transition-colors"
              >
                <span className="font-mono text-[#FAFAFA] flex items-center gap-2">
                  <span style={{ color: accentColor }}>{openIndex === i ? "-" : "+"}</span>
                  {item.question}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-4 pb-4 text-[#A9A9A9] text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
