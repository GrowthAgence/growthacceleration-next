import type { Metadata } from "next";
import { EuropAssistanceProposalEN } from "./client";

export const metadata: Metadata = {
  title: "AI Training Proposal | Europ Assistance x Growth Acceleration",
  description:
    "Tailor-made AI training program for Europ Assistance senior executives. 2 intensive days, 100% hands-on.",
  robots: { index: false, follow: false },
};

export default function PropositionEuropAssistanceENPage() {
  return <EuropAssistanceProposalEN />;
}
