"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const formations = [
  { href: "/claude-code", label: "Claude Code", badge: null },
  { href: "/geo", label: "GEO", badge: "NEW" },
  { href: "/agents-ai", label: "Agents.AI", badge: null },
  { href: "/automations", label: "Automations", badge: null },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
            {formations.map((f) => (
              <Link
                key={f.href}
                href={f.href}
                className="relative text-[#F4F1DE] hover:text-[#E07A5F] font-mono text-sm transition-colors"
              >
                ./{f.label.toLowerCase().replace(/[.\s]/g, "-")}
                {f.badge && (
                  <span className="absolute -top-2 -right-6 px-1 py-0.5 rounded bg-[#E07A5F] text-[9px] font-bold text-[#1E1E1E] animate-pulse">
                    {f.badge}
                  </span>
                )}
              </Link>
            ))}
            <Link href="/ressources" className="text-[#F4F1DE] hover:text-[#E07A5F] font-mono text-sm transition-colors">
              ./ressources
            </Link>
            <Button size="sm" variant="outline" asChild>
              <Link href="#reservation">Reserver_</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#F4F1DE] hover:text-[#E07A5F]"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#1E1E1E] border-b border-[#FAFAFA]/5 px-4 py-4 space-y-2">
          {formations.map((f) => (
            <Link
              key={f.href}
              href={f.href}
              className="block text-[#F4F1DE] hover:text-[#E07A5F] font-mono py-2"
              onClick={() => setIsOpen(false)}
            >
              ./{f.label.toLowerCase().replace(/[.\s]/g, "-")}
            </Link>
          ))}
          <Button className="w-full mt-4" variant="outline" asChild>
            <Link href="#reservation">Reserver_</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
