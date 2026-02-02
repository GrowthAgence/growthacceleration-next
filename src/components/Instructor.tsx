"use client";

import { motion } from "motion/react";
import Image from "next/image";

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
                unoptimized
                alt="Frederic - Formateur"
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
              <h2 className="text-3xl font-mono font-bold text-[#FAFAFA]">Frederic</h2>
              <p className="font-mono text-sm" style={{ color: accentColor }}>
                CEO @ La Growth Agence
              </p>
            </div>

            <div className="space-y-4 text-[#F4F1DE]">
              <p>
                10 ans d'experience en growth marketing et tech. J'ai construit 3 SaaS en
                production avec Claude API (VideoTools, Jobbot.io, Bigmails.AI).
              </p>
              <p>
                Stack quotidien :{" "}
                <span className="font-mono" style={{ color: "#98C379" }}>Next.js</span>,{" "}
                <span className="font-mono" style={{ color: "#98C379" }}>TypeScript</span>,{" "}
                <span className="font-mono" style={{ color: "#98C379" }}>Supabase</span>,{" "}
                <span className="font-mono" style={{ color: "#98C379" }}>Claude API</span>.
              </p>
              <p>
                Utilisateur de Claude Code depuis le premier jour de la beta. J'ai forme plus
                de 400 professionnels a l'IA.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
                className="bg-[#2D2A2E] p-4 rounded-lg border border-[#FAFAFA]/10 text-center"
              >
                <p className="text-3xl font-mono font-bold" style={{ color: accentColor }}>3</p>
                <p className="text-[#A9A9A9] text-xs font-mono uppercase tracking-wider">SaaS shippes</p>
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                className="bg-[#2D2A2E] p-4 rounded-lg border border-[#FAFAFA]/10 text-center"
              >
                <p className="text-3xl font-mono font-bold" style={{ color: accentColor }}>400+</p>
                <p className="text-[#A9A9A9] text-xs font-mono uppercase tracking-wider">Alumni</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
