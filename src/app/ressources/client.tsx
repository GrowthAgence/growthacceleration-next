"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Download, Loader2, CheckCircle, X, Sparkles, Bot, Search, Zap, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

interface Resource {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
  downloadUrl: string;
}

const resources: Resource[] = [
  {
    id: "50-prompts-chatgpt",
    title: "50 Prompts ChatGPT pour entrepreneurs",
    description:
      "Les meilleurs prompts pour generer des idees, rediger du contenu, analyser des donnees et automatiser vos taches quotidiennes.",
    icon: Sparkles,
    category: "Prompts",
    downloadUrl: "/ressources/50-prompts-chatgpt.pdf",
  },
  {
    id: "guide-geo-2024",
    title: "Guide GEO : Etre cite par les IA",
    description:
      "Comment optimiser votre site pour apparaitre dans les reponses de ChatGPT, Perplexity et Claude. Schema.org, llms.txt et plus.",
    icon: Search,
    category: "Guide",
    downloadUrl: "/ressources/guide-geo-2024.pdf",
  },
  {
    id: "templates-n8n",
    title: "10 Templates N8N prets a l emploi",
    description:
      "Workflows d automatisation pour CRM, email marketing, lead enrichment, notifications Slack et plus. Importez et adaptez.",
    icon: Zap,
    category: "Templates",
    downloadUrl: "/ressources/templates-n8n.json",
  },
  {
    id: "checklist-agents-ia",
    title: "Checklist : Deployer un agent IA",
    description:
      "Les 20 questions a se poser avant de deployer un agent IA en entreprise. Securite, couts, maintenance, ROI.",
    icon: Bot,
    category: "Checklist",
    downloadUrl: "/ressources/checklist-agents-ia.pdf",
  },
];

export function ResourcesGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {resources.map((resource) => (
        <ResourceCard key={resource.id} resource={resource} />
      ))}
    </div>
  );
}

function ResourceCard({ resource }: { resource: Resource }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const Icon = resource.icon;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("email"),
      phone: formData.get("phone"),
      firstName: formData.get("firstName"),
      resourceRequested: resource.id,
      source: "ressources",
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Erreur");
      }

      setIsSuccess(true);

      window.gtag?.("event", "generate_lead", {
        form_type: "resource_download",
        resource_id: resource.id,
        resource_title: resource.title,
        page_path: window.location.pathname,
      });

      // Téléchargement automatique après 1.5s
      setTimeout(() => {
        window.open(resource.downloadUrl, "_blank");
        setIsModalOpen(false);
        setIsSuccess(false);
      }, 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#2D2A2E]/50 border border-[#FAFAFA]/10 rounded-lg p-6 hover:border-[#E07A5F]/30 transition-colors"
      >
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-lg bg-[#E07A5F]/20 flex items-center justify-center flex-shrink-0">
            <Icon className="w-6 h-6 text-[#E07A5F]" />
          </div>
          <div className="flex-1">
            <span className="text-[#E07A5F] text-xs font-mono uppercase">{resource.category}</span>
            <h3 className="text-lg font-mono font-bold text-[#FAFAFA] mt-1">{resource.title}</h3>
          </div>
        </div>

        <p className="text-[#A9A9A9] text-sm leading-relaxed mb-6">{resource.description}</p>

        <Button
          onClick={() => {
            setIsModalOpen(true);
            window.gtag?.("event", "form_start", {
              form_type: "resource_download",
              resource_id: resource.id,
              resource_title: resource.title,
              page_path: window.location.pathname,
            });
          }}
          className="w-full bg-[#E07A5F] text-[#1E1E1E] hover:bg-[#E07A5F]/90"
        >
          <Download className="w-4 h-4 mr-2" />
          Telecharger gratuitement
        </Button>
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
            onClick={() => !isSubmitting && setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#1E1E1E] border border-[#FAFAFA]/10 rounded-lg p-6 max-w-md w-full"
            >
              {isSuccess ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-[#98C379] mx-auto mb-4" />
                  <h3 className="text-xl font-mono font-bold text-[#FAFAFA] mb-2">
                    C est parti !
                  </h3>
                  <p className="text-[#A9A9A9]">
                    Le telechargement va demarrer automatiquement...
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-mono font-bold text-[#FAFAFA]">
                      {resource.title}
                    </h3>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="text-[#A9A9A9] hover:text-[#FAFAFA]"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[#A9A9A9] text-sm mb-1">Prenom</label>
                      <input
                        type="text"
                        name="firstName"
                        className="w-full bg-[#2D2A2E] border border-[#FAFAFA]/10 rounded px-4 py-2 text-[#F4F1DE] focus:border-[#E07A5F] focus:outline-none"
                        placeholder="Jean"
                      />
                    </div>

                    <div>
                      <label className="block text-[#A9A9A9] text-sm mb-1">
                        Email <span className="text-[#E07A5F]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full bg-[#2D2A2E] border border-[#FAFAFA]/10 rounded px-4 py-2 text-[#F4F1DE] focus:border-[#E07A5F] focus:outline-none"
                        placeholder="jean@entreprise.com"
                      />
                    </div>

                    <div>
                      <label className="block text-[#A9A9A9] text-sm mb-1">
                        Telephone <span className="text-[#E07A5F]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        className="w-full bg-[#2D2A2E] border border-[#FAFAFA]/10 rounded px-4 py-2 text-[#F4F1DE] focus:border-[#E07A5F] focus:outline-none"
                        placeholder="06 12 34 56 78"
                      />
                    </div>

                    {error && (
                      <p className="text-[#E06C75] text-sm">{error}</p>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#E07A5F] text-[#1E1E1E] hover:bg-[#E07A5F]/90"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Envoi...
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4 mr-2" />
                          Recevoir la ressource
                        </>
                      )}
                    </Button>

                    <p className="text-[#A9A9A9] text-xs text-center">
                      En soumettant ce formulaire, vous acceptez de recevoir
                      des informations sur nos formations.
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
