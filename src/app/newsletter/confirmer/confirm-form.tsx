"use client";

import { useActionState, useEffect } from "react";
import { Check, Loader2 } from "lucide-react";
import { confirmSubscription, type ConfirmState } from "./actions";

const MESSAGES: Record<Exclude<ConfirmState["status"], "idle" | "confirmed">, string> = {
  "already-confirmed": "C est deja confirme. Le prochain guide arrivera dans votre boite.",
  expired: "Ce lien a expire. Reinscrivez-vous depuis la page newsletter.",
  invalid: "Ce lien ne marche pas. Reinscrivez-vous depuis la page newsletter.",
  error: "Un souci technique de notre cote. Reessayez dans une minute.",
};

export function ConfirmForm({ token }: { token: string }) {
  const [state, action, isPending] = useActionState<ConfirmState, FormData>(confirmSubscription, { status: "idle" });

  useEffect(() => {
    if (state.status === "confirmed") {
      window.gtag?.("event", "newsletter_confirm");
    }
  }, [state.status]);

  if (state.status === "confirmed") {
    return (
      <div role="status" className="space-y-3">
        <p className="flex items-center gap-2 font-mono text-[#98C379]">
          <Check className="w-5 h-5" /> Inscription confirmee.
        </p>
        <p className="text-[#F4F1DE]/80 leading-relaxed">
          La derniere newsletter part dans votre boite en ce moment. Les suivantes arriveront a
          chaque nouveau guide.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-4">
      <p className="text-[#F4F1DE]/80 leading-relaxed">
        Un clic pour confirmer que c est bien vous. Vous recevez aussitot la derniere newsletter.
      </p>
      <input type="hidden" name="token" value={token} />
      <button
        type="submit"
        disabled={isPending}
        className="flex items-center justify-center gap-2 bg-[#E07A5F] text-[#1E1E1E] font-mono font-bold rounded px-6 py-3 hover:scale-105 active:scale-100 disabled:opacity-60 disabled:hover:scale-100 transition-transform cursor-pointer"
      >
        {isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : "Je confirme mon inscription"}
      </button>
      {state.status !== "idle" && (
        <p role="alert" className="text-sm font-mono text-[#E06C75]">
          {MESSAGES[state.status]}
        </p>
      )}
    </form>
  );
}
