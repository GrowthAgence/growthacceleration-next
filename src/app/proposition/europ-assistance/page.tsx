import type { Metadata } from "next";
import { EuropAssistanceProposal } from "./client";

export const metadata: Metadata = {
  title: "Proposition Formation IA | Europ Assistance x Growth Acceleration",
  description:
    "Programme de formation IA sur mesure pour les cadres superieurs d'Europ Assistance. 2 jours intensifs, 100% pratique.",
  robots: { index: false, follow: false },
};

export default function PropositionEuropAssistancePage() {
  return <EuropAssistanceProposal />;
}
