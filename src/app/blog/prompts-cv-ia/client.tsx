"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function PromptBlock({ title, prompt }: { title: string; prompt: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      window.gtag?.("event", "prompt_copy", { prompt_title: title });
    } catch {
      // Presse-papiers indisponible (contexte non securise) : le texte reste selectionnable.
    }
  };

  return (
    <div className="bg-[#2D2A2E]/50 border border-dashed border-[#FAFAFA]/20 rounded-lg mb-4 overflow-hidden">
      <div className="flex items-center justify-between gap-4 px-4 py-2 border-b border-dashed border-[#FAFAFA]/20">
        <p className="text-[#A9A9A9] text-xs font-mono">$ {title}</p>
        <button
          type="button"
          onClick={copy}
          aria-label={`Copier le prompt ${title}`}
          className="flex items-center gap-1 text-xs font-mono text-[#E07A5F] hover:scale-105 transition-transform cursor-pointer"
        >
          {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
          {copied ? "Copie" : "Copier"}
        </button>
      </div>
      <pre className="p-4 md:p-6 font-mono text-sm text-[#F4F1DE]/90 leading-relaxed whitespace-pre-wrap break-words">
        {prompt}
      </pre>
    </div>
  );
}
