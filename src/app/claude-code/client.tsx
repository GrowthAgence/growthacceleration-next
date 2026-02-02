"use client";

import { motion, useInView } from "motion/react";
import { ReactNode, useRef } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Hero content avec staggered animation
export function HeroContent({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="space-y-6"
    >
      {children}
    </motion.div>
  );
}

// Carte Pour qui / Pas pour qui avec glow effect
export function AudienceCard({
  children,
  type,
}: {
  children: ReactNode;
  type: "yes" | "no";
}) {
  const glowColor = type === "yes" ? "#98C379" : "#E06C75";
  const borderColor = type === "yes" ? "border-[#98C379]/30" : "border-[#E06C75]/30";

  return (
    <motion.div
      initial={{ opacity: 0, x: type === "yes" ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className={`relative p-6 rounded-lg bg-[#1E1E1E]/50 border ${borderColor} overflow-hidden`}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 opacity-0 blur-2xl pointer-events-none"
        style={{ backgroundColor: glowColor }}
        whileHover={{ opacity: 0.1 }}
        transition={{ duration: 0.3 }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

// Item de liste avec animation et couleur semantique
export function AudienceItem({
  children,
  type,
  delay = 0,
}: {
  children: ReactNode;
  type: "yes" | "no";
  delay?: number;
}) {
  const iconColor = type === "yes" ? "text-[#98C379]" : "text-[#E06C75]";
  const bgColor = type === "yes" ? "bg-[#98C379]/10" : "bg-[#E06C75]/10";
  const Icon = type === "yes" ? Check : X;

  return (
    <motion.li
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="flex items-start gap-3 text-[#F4F1DE]"
    >
      <motion.span
        className={`mt-0.5 p-1 rounded-full ${bgColor} ${iconColor}`}
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <Icon className="w-4 h-4" />
      </motion.span>
      <span>{children}</span>
    </motion.li>
  );
}

// Icone check animee
export function AnimatedCheckIcon() {
  return (
    <motion.span
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
      className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#98C379]/20"
    >
      <Check className="w-5 h-5 text-[#98C379]" />
    </motion.span>
  );
}

// Icone X animee
export function AnimatedXIcon() {
  return (
    <motion.span
      initial={{ scale: 0, rotate: 180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
      className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#E06C75]/20"
    >
      <X className="w-5 h-5 text-[#E06C75]" />
    </motion.span>
  );
}

// Liste du programme avec animations
export function ProgramList({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      {children}
    </motion.div>
  );
}

// Item du programme avec hover effect
export function ProgramItem({
  children,
  index,
}: {
  children: ReactNode;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        scale: 1.01,
        backgroundColor: "rgba(224, 122, 95, 0.05)",
      }}
      className="flex gap-4 p-4 bg-[#2D2A2E]/50 rounded-lg border border-[#FAFAFA]/5 cursor-default transition-colors"
    >
      {/* Numero de l'etape */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, delay: index * 0.1 + 0.2 }}
        className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E07A5F]/20 flex items-center justify-center text-[#E07A5F] font-mono font-bold text-sm"
      >
        {index + 1}
      </motion.div>
      {children}
    </motion.div>
  );
}

// Carte de reservation avec animation
export function ReservationCard({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

// Bouton CTA anime
export function CTAButton({ children }: { children: ReactNode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="inline-block"
    >
      <Button size="lg" className="w-full sm:w-auto text-base px-8">
        {children}
      </Button>
    </motion.div>
  );
}
