import Link from "next/link";
import type { Metadata } from "next";
import { findByToken, isLinkExpired } from "@/lib/newsletter-subscriptions";
import { ConfirmForm } from "./confirm-form";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

export const metadata: Metadata = {
  title: "Confirmer votre inscription a la newsletter",
  robots: "noindex, nofollow",
};

function Shell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="min-h-[70vh] flex items-center px-4 pt-24 pb-16">
      <div className="max-w-xl mx-auto w-full bg-[#2D2A2E] border border-dashed border-[#E07A5F]/40 rounded-lg p-6 md:p-10">
        <p className="text-[#A9A9A9] text-sm font-mono mb-3">&gt; newsletter --confirm</p>
        <h1 className="text-2xl md:text-3xl font-mono font-bold text-[#FAFAFA] mb-4">{title}</h1>
        {children}
      </div>
    </section>
  );
}

export default async function ConfirmPage({ searchParams }: { searchParams: Promise<{ t?: string }> }) {
  const { t: token = "" } = await searchParams;
  const subscription = await findByToken(token);

  if (!subscription) {
    return (
      <Shell title="Ce lien ne marche pas">
        <p className="text-[#F4F1DE]/80 leading-relaxed mb-6">
          Il est incomplet ou a deja ete remplace par un lien plus recent. Reinscrivez-vous, vous
          recevrez un nouveau mail de confirmation.
        </p>
        <Link href="/newsletter" className="text-[#E07A5F] font-mono">
          Revenir a la newsletter →
        </Link>
      </Shell>
    );
  }

  if (subscription.status === "confirmed") {
    return (
      <Shell title="C est deja confirme">
        <p className="text-[#F4F1DE]/80 leading-relaxed">
          Votre inscription est active. Le prochain guide arrivera dans votre boite.
        </p>
      </Shell>
    );
  }

  if (isLinkExpired(subscription)) {
    return (
      <Shell title="Ce lien a expire">
        <p className="text-[#F4F1DE]/80 leading-relaxed mb-6">
          Il etait valable 7 jours. Reinscrivez-vous en 10 secondes pour en recevoir un nouveau.
        </p>
        <Link href="/newsletter" className="text-[#E07A5F] font-mono">
          Revenir a la newsletter →
        </Link>
      </Shell>
    );
  }

  return (
    <Shell title={`Derniere etape${subscription.first_name ? `, ${subscription.first_name}` : ""}`}>
      <ConfirmForm token={token} />
    </Shell>
  );
}
