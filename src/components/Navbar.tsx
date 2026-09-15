"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const formations = [
  { href: "/claude-code", label: "Claude Code", tagline: "Ship ton produit en une journee", badge: null },
  { href: "/ia-creative", label: "IA Creative", tagline: "Visuels et videos au standard des marques", badge: "NEW" },
  { href: "/geo", label: "GEO", tagline: "Etre cite par les moteurs IA", badge: null },
  { href: "/agents-ai", label: "Agents.AI", tagline: "Deployez des agents autonomes", badge: null },
  { href: "/automations", label: "Automations", tagline: "N8N et automatisation IA", badge: null },
  { href: "/zero-employee-company", label: "Zero Employee", tagline: "Votre entreprise geree par des agents", badge: "PROMO" },
];

const secondaryLinks = [
  { href: "/ressources", label: "./ressources" },
  { href: "/blog", label: "./blog" },
  { href: "/fiches", label: "./fiches" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormationsOpen, setIsFormationsOpen] = useState(false);
  const formationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isFormationsOpen) return;

    function handlePointerDown(event: MouseEvent) {
      if (formationsRef.current && !formationsRef.current.contains(event.target as Node)) {
        setIsFormationsOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsFormationsOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFormationsOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1E1E1E]/90 backdrop-blur-md border-b border-[#FAFAFA]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Growth Acceleration"
              width={180}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <div className="relative" ref={formationsRef}>
              <button
                type="button"
                onClick={() => setIsFormationsOpen((open) => !open)}
                aria-expanded={isFormationsOpen}
                aria-haspopup="true"
                className="flex items-center gap-1 text-[#F4F1DE] hover:text-[#E07A5F] font-mono text-sm transition-colors cursor-pointer"
              >
                ./formations
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${isFormationsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isFormationsOpen && (
                <div className="absolute left-0 top-full mt-3 w-80 bg-[#1E1E1E] border border-[#FAFAFA]/10 rounded-lg shadow-2xl overflow-hidden">
                  <p className="px-4 pt-3 pb-2 text-[#A9A9A9] text-xs font-mono border-b border-dashed border-[#FAFAFA]/10">
                    &gt; ls formations/
                  </p>
                  {formations.map((f) => (
                    <Link
                      key={f.href}
                      href={f.href}
                      onClick={() => setIsFormationsOpen(false)}
                      className="block px-4 py-3 hover:bg-[#2D2A2E] transition-colors group"
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-[#F4F1DE] group-hover:text-[#E07A5F] font-mono text-sm transition-colors">
                          {f.label}
                        </span>
                        {f.badge && (
                          <span className="px-1.5 py-0.5 rounded bg-[#E07A5F] text-[9px] font-bold text-[#1E1E1E]">
                            {f.badge}
                          </span>
                        )}
                      </span>
                      <span className="block text-[#A9A9A9] text-xs mt-0.5">{f.tagline}</span>
                    </Link>
                  ))}
                  <Link
                    href="/formation-intelligence-artificielle"
                    onClick={() => setIsFormationsOpen(false)}
                    className="block px-4 py-3 text-[#A9A9A9] hover:text-[#E07A5F] font-mono text-xs border-t border-dashed border-[#FAFAFA]/10 transition-colors"
                  >
                    Comparer les 6 formations →
                  </Link>
                </div>
              )}
            </div>

            {secondaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#F4F1DE] hover:text-[#E07A5F] font-mono text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <Button size="sm" variant="outline" asChild>
              <a href="https://calendly.com/fredericorlicki/15min" target="_blank" rel="noopener noreferrer">Reserver_</a>
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 min-w-[48px] min-h-[48px] flex items-center justify-center text-[#F4F1DE] hover:text-[#E07A5F]"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#1E1E1E] border-b border-[#FAFAFA]/5 px-4 py-4 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <p className="text-[#A9A9A9] text-xs font-mono pt-1">&gt; ls formations/</p>
          {formations.map((f) => (
            <Link
              key={f.href}
              href={f.href}
              className="flex items-center gap-2 text-[#F4F1DE] hover:text-[#E07A5F] font-mono py-2"
              onClick={() => setIsOpen(false)}
            >
              ./{f.label.toLowerCase().replace(/[.\s]/g, "-")}
              {f.badge && (
                <span className="px-1.5 py-0.5 rounded bg-[#E07A5F] text-[9px] font-bold text-[#1E1E1E]">
                  {f.badge}
                </span>
              )}
            </Link>
          ))}
          <div className="pt-2 border-t border-dashed border-[#FAFAFA]/10">
            {secondaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-[#F4F1DE] hover:text-[#E07A5F] font-mono py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Button className="w-full mt-4" variant="outline" asChild>
            <a href="https://calendly.com/fredericorlicki/15min" target="_blank" rel="noopener noreferrer">Reserver_</a>
          </Button>
        </div>
      )}
    </nav>
  );
}
