"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const FORMATION_SLUGS: Record<string, string> = {
  "/claude-code": "Claude Code",
  "/geo": "GEO",
  "/agents-ai": "Agents.AI",
  "/automations": "Automations",
};

function getPageContext(pathname: string) {
  if (pathname === "/") return { page_type: "homepage", formation_name: undefined };
  if (FORMATION_SLUGS[pathname]) return { page_type: "formation", formation_name: FORMATION_SLUGS[pathname] };
  if (pathname === "/ressources") return { page_type: "ressources", formation_name: undefined };
  if (pathname === "/formation-intelligence-artificielle") return { page_type: "hub", formation_name: undefined };
  return { page_type: "other", formation_name: undefined };
}

export function ClickTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest("a");
      const button = (e.target as HTMLElement).closest("button");
      const target = anchor || button;
      if (!target) return;
      if (!window.gtag) return;

      const href = anchor?.getAttribute("href") || "";
      const text =
        target.textContent?.trim().replace(/\s+/g, " ").slice(0, 60) || "";
      const page = window.location.pathname;
      const ctx = getPageContext(page);

      const base = {
        cta_text: text,
        page_path: page,
        page_type: ctx.page_type,
        ...(ctx.formation_name && { formation_name: ctx.formation_name }),
      };

      if (href.includes("calendly.com")) {
        window.gtag("event", "cta_click", {
          ...base,
          cta_type: "reservation",
        });
      } else if (href.startsWith("#")) {
        window.gtag("event", "cta_click", {
          ...base,
          cta_type: "navigation",
          link_url: href,
        });
      } else if (href.startsWith("http")) {
        window.gtag("event", "cta_click", {
          ...base,
          cta_type: "outbound",
          link_url: href,
        });
      } else if (href.startsWith("/")) {
        window.gtag("event", "cta_click", {
          ...base,
          cta_type: "internal",
          link_url: href,
        });
      } else if (button) {
        window.gtag("event", "cta_click", {
          ...base,
          cta_type: "button",
        });
      }
    }

    document.addEventListener("click", handleClick);

    // Scroll depth tracking (25%, 50%, 75%, 100%)
    const firedMilestones = new Set<number>();
    function handleScroll() {
      if (!window.gtag) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const percent = Math.round((scrollTop / docHeight) * 100);
      const page = window.location.pathname;
      const ctx = getPageContext(page);

      for (const milestone of [25, 50, 75, 100]) {
        if (percent >= milestone && !firedMilestones.has(milestone)) {
          firedMilestones.add(milestone);
          window.gtag("event", "scroll_depth", {
            depth_threshold: milestone,
            page_path: page,
            page_type: ctx.page_type,
            ...(ctx.formation_name && { formation_name: ctx.formation_name }),
          });
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}
