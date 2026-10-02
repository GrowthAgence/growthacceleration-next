// Petit tag "NOUVEAU" pour signaler une nouveaute dans la navigation.
// Vert succes de la charte : se distingue des badges terracotta NEW/PROMO des formations.
export function NewBadge({ label = "NOUVEAU" }: { label?: string }) {
  return (
    <span className="px-1.5 py-0.5 rounded bg-[#98C379] text-[9px] font-mono font-bold leading-none tracking-wide text-[#1E1E1E]">
      {label}
    </span>
  );
}
