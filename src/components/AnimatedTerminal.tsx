"use client";

import { motion } from "motion/react";

interface TerminalLine {
  type: "command" | "output" | "success" | "error";
  text: string;
}

const lines: TerminalLine[] = [
  { type: "command", text: "$ claude code init my-saas" },
  { type: "output", text: "Analyzing requirements..." },
  { type: "output", text: "Creating project structure..." },
  { type: "output", text: "Setting up Next.js + Tailwind..." },
  { type: "output", text: "Adding authentication..." },
  { type: "output", text: "Configuring database..." },
  { type: "success", text: "✔ Project ready in 12 minutes" },
  { type: "command", text: "$ npm run dev" },
  { type: "success", text: "✔ Server running on localhost:3000" },
];

export function AnimatedTerminal() {
  return (
    <div className="bg-[#1E1E1E] rounded-lg border border-[#FAFAFA]/10 overflow-hidden shadow-2xl">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#2D2A2E] border-b border-[#FAFAFA]/10">
        <motion.div
          className="w-3 h-3 rounded-full bg-[#E06C75]"
          whileHover={{ scale: 1.2 }}
        />
        <motion.div
          className="w-3 h-3 rounded-full bg-[#E5C07B]"
          whileHover={{ scale: 1.2 }}
        />
        <motion.div
          className="w-3 h-3 rounded-full bg-[#98C379]"
          whileHover={{ scale: 1.2 }}
        />
        <span className="ml-2 text-[#A9A9A9] text-xs font-mono">claude-code — zsh</span>
      </div>

      {/* Terminal content */}
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
              ${line.type === "success" ? "text-[#98C379]" : ""}
              ${line.type === "error" ? "text-[#E06C75]" : ""}
            `}
          >
            {line.type === "command" && (
              <span className="text-[#E07A5F]">➜ </span>
            )}
            {line.text}
          </motion.div>
        ))}

        {/* Blinking cursor */}
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
