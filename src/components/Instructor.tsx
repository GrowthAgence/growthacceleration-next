"use client";

import { motion } from "motion/react";
import Image from "next/image";

const STATS = [
  { value: "5", label: "SaaS en prod" },
  { value: "400+", label: "Alumni" },
  { value: "10 ans", label: "Growth et tech" },
];

interface InstructorProps {
  accentColor?: string;
}

export function Instructor({ accentColor = "#E07A5F" }: InstructorProps) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div
              className="relative rounded-lg overflow-hidden border-2 border-dashed"
              style={{ borderColor: `${accentColor}40` }}
            >
              <Image
                src="/fred.jpg"
                alt="Frederic Orlicki - Formateur Growth Acceleration, developpeur full stack"
                width={400}
                height={500}
                className="w-full h-auto object-cover"
              />
              {/* Tag USER: FRED */}
              <div
                className="absolute bottom-4 right-4 px-3 py-1 text-sm font-mono font-bold"
                style={{ backgroundColor: accentColor, color: "#1E1E1E" }}
              >
                USER: FRED
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <p className="font-mono mb-2" style={{ color: accentColor }}>
                &gt; whoami
              </p>
              <h2 className="text-3xl font-mono font-bold text-[#FAFAFA]">Frederic Orlicki</h2>
              <p className="font-mono text-sm text-[#A9A9A9]">Paris · Berlin · San Francisco</p>
            </div>

            <div className="space-y-4 text-[#F4F1DE]">
              <p>
                Developpeur full stack, ex{" "}
                <span className="font-mono" style={{ color: accentColor }}>Le Wagon #0001</span>.
                10 ans d experience en growth marketing et tech.
              </p>
              <p>
                Stack quotidien :{" "}
                <span className="font-mono" style={{ color: accentColor }}>Next.js</span>,{" "}
                <span className="font-mono" style={{ color: accentColor }}>TypeScript</span>,{" "}
                <span className="font-mono" style={{ color: accentColor }}>Supabase</span>,{" "}
                <span className="font-mono" style={{ color: accentColor }}>GCP</span>,{" "}
                <span className="font-mono" style={{ color: accentColor }}>Claude Code</span>,{" "}
                <span className="font-mono" style={{ color: accentColor }}>Cursor</span>,{" "}
                <span className="font-mono" style={{ color: accentColor }}>NeonBase</span>,{" "}
                <span className="font-mono" style={{ color: accentColor }}>OpenClaw</span>.
              </p>
              <p>
                Utilisateur de Claude Code depuis le jour 1 de la beta.
                J ai forme plus de 400 professionnels a l IA — du prompting
                avance au deploiement d agents autonomes.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 pt-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.4 + i * 0.1 }}
                  className="bg-[#2D2A2E] px-2 py-4 sm:p-4 rounded-lg border border-[#FAFAFA]/10 text-center"
                >
                  <p className="text-2xl sm:text-3xl font-mono font-bold whitespace-nowrap" style={{ color: accentColor }}>
                    {stat.value}
                  </p>
                  <p className="text-[#A9A9A9] text-xs font-mono uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
