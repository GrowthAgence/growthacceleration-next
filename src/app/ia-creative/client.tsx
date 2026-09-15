"use client";

import { motion } from "motion/react";

const lines = [
  { type: "command", text: '$ ga-creative brief --marque "maison-x" --format packshot' },
  { type: "success", text: "✔ Charte chargee — palette, lumiere, cadrage, interdits" },
  { type: "command", text: "$ ga-creative gen --ref flacon.jpg --n 12" },
  { type: "output", text: "[Pipeline] Higgsfield Soul — 12 variantes..." },
  { type: "output", text: "[Pipeline] Upscale, nettoyage du verre, ombre portee..." },
  { type: "success", text: "✔ 9/12 au standard marque — 3 rejetees (reflet produit)" },
  { type: "command", text: "$ ga-creative video --keyframes 3 --model kling" },
  { type: "success", text: "✔ Film produit 8s — 1 aller-retour de correction" },
  { type: "command", text: "$ ga-creative decline --formats 9:16,1:1,16:9" },
  { type: "success", text: "✔ 42 assets exportes — inventaire a jour" },
];

export function CreativeTerminal() {
  return (
    <div className="bg-[#1E1E1E] rounded-lg border border-[#E07A5F]/20 overflow-hidden shadow-2xl">
      <div className="flex items-center gap-2 px-4 py-3 bg-[#2D2A2E] border-b border-[#FAFAFA]/10">
        <motion.div className="w-3 h-3 rounded-full bg-[#E06C75]" whileHover={{ scale: 1.2 }} />
        <motion.div className="w-3 h-3 rounded-full bg-[#E5C07B]" whileHover={{ scale: 1.2 }} />
        <motion.div className="w-3 h-3 rounded-full bg-[#98C379]" whileHover={{ scale: 1.2 }} />
        <span className="ml-2 text-[#A9A9A9] text-xs font-mono">ga-creative — zsh</span>
      </div>

      <div className="p-4 font-mono text-sm space-y-1 min-h-[280px]">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.4, duration: 0.3 }}
            className={`
              ${line.type === "command" ? "text-[#F4F1DE]" : ""}
              ${line.type === "output" ? "text-[#A9A9A9]" : ""}
              ${line.type === "success" ? "text-[#E07A5F]" : ""}
            `}
          >
            {line.type === "command" && <span className="text-[#E07A5F]">➜ </span>}
            {line.text}
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: lines.length * 0.4 }}
          className="flex items-center gap-1 text-[#F4F1DE]"
        >
          <span className="text-[#E07A5F]">➜</span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="inline-block w-2 h-4 bg-[#E07A5F]"
          />
        </motion.div>
      </div>
    </div>
  );
}
