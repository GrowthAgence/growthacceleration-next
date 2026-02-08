"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
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

      if (href.includes("calendly.com")) {
        window.gtag("event", "cta_click", {
          cta_type: "reservation",
          cta_text: text,
          page_path: page,
        });
      } else if (href.startsWith("#")) {
        window.gtag("event", "cta_click", {
          cta_type: "navigation",
          cta_text: text,
          link_url: href,
          page_path: page,
        });
      } else if (href.startsWith("http")) {
        window.gtag("event", "cta_click", {
          cta_type: "outbound",
          cta_text: text,
          link_url: href,
          page_path: page,
        });
      } else if (href.startsWith("/")) {
        window.gtag("event", "cta_click", {
          cta_type: "internal",
          cta_text: text,
          link_url: href,
          page_path: page,
        });
      } else if (button) {
        window.gtag("event", "cta_click", {
          cta_type: "button",
          cta_text: text,
          page_path: page,
        });
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
