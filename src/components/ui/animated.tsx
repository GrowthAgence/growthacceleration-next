"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

// Fade in avec stagger pour les listes
export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Slide in from left/right
export function SlideIn({
  children,
  direction = "left",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  direction?: "left" | "right";
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Scale on hover pour les cartes
export function HoverScale({
  children,
  scale = 1.02,
  className = "",
}: {
  children: ReactNode;
  scale?: number;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Typing effect pour le terminal
export function TypingText({
  text,
  delay = 0,
  speed = 50,
  className = "",
}: {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}) {
  return (
    <motion.span
      initial={{ opacity: 1 }}
      className={className}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + i * (speed / 1000) }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Pulse animation pour les badges
export function Pulse({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.span
      animate={{
        scale: [1, 1.05, 1],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.span>
  );
}

// Stagger container pour animer les enfants en sequence
export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  className = "",
}: {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Glow effect au hover
export function GlowCard({
  children,
  glowColor = "#E07A5F",
  className = "",
}: {
  children: ReactNode;
  glowColor?: string;
  className?: string;
}) {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover="hover"
      initial="initial"
    >
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 blur-xl"
        style={{ backgroundColor: glowColor }}
        variants={{
          initial: { opacity: 0 },
          hover: { opacity: 0.15 },
        }}
        transition={{ duration: 0.3 }}
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
}
