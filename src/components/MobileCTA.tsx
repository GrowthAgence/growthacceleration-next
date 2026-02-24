"use client";

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#1E1E1E]/95 backdrop-blur-md border-t border-[#FAFAFA]/10 px-4 py-3">
      <a
        href="https://calendly.com/fredericorlicki/15min"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-[#E07A5F] text-[#1E1E1E] font-mono font-bold text-center py-3 rounded-lg hover:bg-[#E07A5F]/90 transition-colors"
      >
        Reserver une formation
      </a>
    </div>
  );
}
