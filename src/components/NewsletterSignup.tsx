"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "pending" | "success" | "error";

export function NewsletterSignup({ placement }: { placement: string }) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [started, setStarted] = useState(false);

  const trackStart = () => {
    if (started) return;
    setStarted(true);
    window.gtag?.("event", "form_start", { form_name: "newsletter", placement });
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName, website }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(data.error ?? "Inscription impossible, reessayez.");
        setStatus("error");
        return;
      }
      // pending = mail de confirmation envoye (double opt-in) ; sinon deja inscrit.
      setStatus(data.status === "pending" ? "pending" : "success");
      window.gtag?.("event", "generate_lead", { lead_type: "newsletter", placement });
    } catch {
      setError("Connexion impossible, verifiez votre reseau et reessayez.");
      setStatus("error");
    }
  };

  return (
    <section
      aria-labelledby={`newsletter-${placement}`}
      className="max-w-4xl mx-auto px-4 pb-16"
    >
      <div className="relative overflow-hidden bg-[#2D2A2E] border border-dashed border-[#E07A5F]/40 rounded-lg p-6 md:p-10">
        <div
          aria-hidden
          className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-[#E07A5F]/10 blur-3xl"
        />
        <p className="text-[#A9A9A9] text-sm font-mono mb-3">&gt; subscribe --newsletter</p>
        <h2
          id={`newsletter-${placement}`}
          className="text-2xl md:text-3xl font-mono font-bold text-[#FAFAFA] mb-3"
        >
          Le prochain guide, <span className="text-[#E07A5F]">avant tout le monde</span>
        </h2>
        <p className="text-[#F4F1DE]/80 leading-relaxed mb-6 max-w-2xl">
          Un email quand un nouveau guide sort : le prompt, la methode et le piege a eviter. Pas de
          spam. Desinscription en un clic.
        </p>

        {status === "pending" ? (
          <div role="status" className="space-y-1">
            <p className="flex items-center gap-2 font-mono text-[#98C379] text-sm md:text-base">
              <Check className="w-5 h-5" />
              Presque fini{firstName ? `, ${firstName.trim()}` : ""} : verifiez votre boite mail.
            </p>
            <p className="text-[#A9A9A9] text-sm">
              Cliquez sur le lien de confirmation, la derniere newsletter part aussitot. Rien recu
              dans 2 minutes ? Regardez les spams ou promotions.
            </p>
          </div>
        ) : status === "success" ? (
          <p
            role="status"
            className="flex items-center gap-2 font-mono text-[#98C379] text-sm md:text-base"
          >
            <Check className="w-5 h-5" />
            C est note{firstName ? `, ${firstName.trim()}` : ""}. Le prochain guide arrive dans votre boite.
          </p>
        ) : (
          <form onSubmit={submit} className="flex flex-col md:flex-row gap-3" noValidate>
            <label className="sr-only" htmlFor={`nl-firstname-${placement}`}>
              Prenom
            </label>
            <input
              id={`nl-firstname-${placement}`}
              type="text"
              autoComplete="given-name"
              placeholder="Prenom"
              value={firstName}
              onFocus={trackStart}
              onChange={(e) => setFirstName(e.target.value)}
              maxLength={60}
              className="md:w-40 bg-[#1E1E1E] border border-[#FAFAFA]/15 rounded px-4 py-3 text-[#F4F1DE] placeholder:text-[#A9A9A9]/60 focus:outline-none focus:border-[#E07A5F] transition-colors"
            />
            <label className="sr-only" htmlFor={`nl-email-${placement}`}>
              Adresse email
            </label>
            <input
              id={`nl-email-${placement}`}
              type="email"
              required
              autoComplete="email"
              placeholder="vous@entreprise.fr"
              value={email}
              onFocus={trackStart}
              onChange={(e) => setEmail(e.target.value)}
              maxLength={254}
              className="flex-1 bg-[#1E1E1E] border border-[#FAFAFA]/15 rounded px-4 py-3 text-[#F4F1DE] placeholder:text-[#A9A9A9]/60 focus:outline-none focus:border-[#E07A5F] transition-colors"
            />
            {/* Champ piege anti-robots, invisible pour les humains */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="absolute -left-[9999px] w-px h-px opacity-0"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="group flex items-center justify-center gap-2 bg-[#E07A5F] text-[#1E1E1E] font-mono font-bold rounded px-6 py-3 hover:scale-105 active:scale-100 disabled:opacity-60 disabled:hover:scale-100 transition-transform cursor-pointer"
            >
              {status === "loading" ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  Je m inscris
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        )}

        {status === "error" && (
          <p role="alert" className="mt-3 text-sm font-mono text-[#E06C75]">
            {error}
          </p>
        )}
        <p className="mt-4 text-xs text-[#A9A9A9]">
          En vous inscrivant, vous acceptez de recevoir les emails de Growth Acceleration. Vos
          donnees ne sont ni vendues ni partagees.
        </p>
      </div>
    </section>
  );
}
