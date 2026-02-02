"use client";

import { motion } from "motion/react";
import { Button } from "./ui/button";
import Image from "next/image";

interface FinalCTAProps {
  title?: string;
  price?: string;
  accentColor?: string;
}

export function FinalCTA({
  title = "Pret a automatiser votre dev ?",
  price = "900",
  accentColor = "#E07A5F",
}: FinalCTAProps) {
  return (
    <section className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <div
          className="relative bg-[#2D2A2E]/80 rounded-lg border-2 border-dashed p-8 md:p-12 text-center overflow-hidden"
          style={{ borderColor: `${accentColor}40` }}
        >
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage: `linear-gradient(${accentColor}20 1px, transparent 1px), linear-gradient(90deg, ${accentColor}20 1px, transparent 1px)`,
                backgroundSize: "20px 20px",
              }}
            />
          </div>

          <div className="relative z-10">
            {/* Space Invader */}
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="inline-block mb-6"
            >
              <Image
                src="/space-invader.webp"
                alt="Growth Acceleration"
                width={80}
                height={80}
                className="rounded"
              />
            </motion.div>

            <h2 className="text-2xl md:text-3xl font-mono font-bold text-[#FAFAFA] mb-4">
              {title}
            </h2>

            <p className="text-[#F4F1DE] mb-2">
              12 places par session. Prochaine session a Paris.
            </p>
            <p className="mb-6">
              <span className="text-2xl font-mono font-bold" style={{ color: accentColor }}>
                {price}€ TTC
              </span>{" "}
              <span className="text-[#A9A9A9]">(Financement OPCO possible)</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  className="text-base px-8"
                  style={{ backgroundColor: accentColor }}
                >
                  &gt; Confirmer ma presence_
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8"
                  style={{ borderColor: accentColor, color: accentColor }}
                >
                  Poser une question
                </Button>
              </motion.div>
            </div>

            <p className="text-[#A9A9A9] text-sm">
              Satisfait ou rembourse jour 1 • Paiement 3x disponible
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
