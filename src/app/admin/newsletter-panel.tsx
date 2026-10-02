"use client";

import { Fragment, useState } from "react";
import { ChevronDown, ChevronRight, Loader2, Mail } from "lucide-react";
import type { NewsletterCampaign, RecipientStatus } from "@/lib/newsletter-stats";
import type { NewsletterSubscription } from "@/lib/newsletter-subscriptions";

export type AdminSubscription = Omit<NewsletterSubscription, "confirm_token">;

const STATUS_LABELS: Record<RecipientStatus, { label: string; className: string }> = {
  clicked: { label: "A clique", className: "text-[#98C379]" },
  opened: { label: "Ouvert", className: "text-[#98C379]" },
  "machine-only": { label: "Non ouvert (robot)", className: "text-[#A9A9A9]" },
  "not-opened": { label: "Non ouvert", className: "text-[#A9A9A9]" },
  failed: { label: "Echec d envoi", className: "text-[#E06C75]" },
};

const DATE_FORMAT: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};

// Mautic renvoie "2026-10-02 16:42:01" a l heure de Paris, sans fuseau : on affiche
// l heure telle quelle (lecture en UTC des deux cotes = aucune conversion).
function formatMauticDate(value: string | null): string {
  if (!value) return "—";
  return new Date(`${value.replace(" ", "T")}Z`).toLocaleString("fr-FR", { ...DATE_FORMAT, timeZone: "UTC" });
}

function rate(count: number, total: number): string {
  if (total === 0) return "—";
  return `${Math.round((count / total) * 100)} %`;
}

const TH = "text-left text-[#A9A9A9] text-xs font-mono uppercase px-4 py-3";

// Dates Neon (timestamptz ISO) : conversion normale vers l heure locale.
function formatIsoDate(value: string | null): string {
  if (!value) return "—";
  return new Date(value).toLocaleString("fr-FR", DATE_FORMAT);
}

interface Props {
  subscriptions: AdminSubscription[];
  campaigns: NewsletterCampaign[];
  isLoading: boolean;
  error: string;
}

export function NewsletterPanel({ campaigns, subscriptions, isLoading, error }: Props) {
  // null = rien choisi : la newsletter la plus recente est depliee par defaut.
  const [expanded, setExpanded] = useState<string | null>(null);
  const openId = expanded ?? campaigns[0]?.emailId ?? null;

  if (isLoading && campaigns.length === 0) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-[#E07A5F]" />
      </div>
    );
  }

  if (error) {
    return <p className="text-[#E06C75] font-mono text-sm py-6">{error}</p>;
  }

  if (campaigns.length === 0) {
    return (
      <div className="text-center py-12 bg-[#2D2A2E]/50 rounded-lg border border-[#FAFAFA]/10">
        <Mail className="w-12 h-12 text-[#A9A9A9] mx-auto mb-4" />
        <p className="text-[#A9A9A9]">Aucune newsletter envoyee pour le moment</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="bg-[#2D2A2E] border border-[#FAFAFA]/10 rounded-lg overflow-x-auto">
        <table className="w-full min-w-[720px]">
          <thead className="bg-[#1E1E1E] border-b border-[#FAFAFA]/10">
            <tr>
              <th className={TH}>Date d envoi</th>
              <th className={TH}>Newsletter</th>
              <th className={`${TH} text-right`}>Envois</th>
              <th className={`${TH} text-right`}>Ouvertures</th>
              <th className={`${TH} text-right`}>Clics</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((c) => {
              const isOpen = openId === c.emailId;
              const delivered = c.sent - c.failed;
              return (
                <Fragment key={c.emailId}>
                  <tr
                    onClick={() => setExpanded(isOpen ? "" : c.emailId)}
                    className="border-b border-[#FAFAFA]/5 hover:bg-[#FAFAFA]/5 cursor-pointer"
                  >
                    <td className="px-4 py-3 text-sm text-[#A9A9A9] whitespace-nowrap">
                      <span className="inline-flex items-center gap-2">
                        {isOpen ? (
                          <ChevronDown className="w-4 h-4 text-[#E07A5F]" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                        {formatMauticDate(c.sentAt)}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-[#FAFAFA]">{c.name}</td>
                    <td className="px-4 py-3 text-right font-mono text-[#F4F1DE]">
                      {c.sent}
                      {c.failed > 0 && <span className="block text-xs text-[#E06C75]">{c.failed} en echec</span>}
                    </td>
                    <td className="px-4 py-3 text-right font-mono">
                      <span className="text-2xl font-bold text-[#FAFAFA]">{rate(c.opened, delivered)}</span>
                      <span className="block text-xs text-[#A9A9A9]">
                        {c.opened} sur {delivered} · Mautic brut {rate(c.rawOpened, delivered)}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right font-mono">
                      <span className="text-[#F4F1DE]">{rate(c.clicked, delivered)}</span>
                      <span className="block text-xs text-[#A9A9A9]">{c.clicked} clic(s)</span>
                    </td>
                  </tr>
                  {isOpen && (
                    <tr className="border-b border-[#FAFAFA]/10 bg-[#1E1E1E]/60">
                      <td colSpan={5} className="px-4 py-4">
                        <RecipientsTable campaign={c} />
                      </td>
                    </tr>
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      <SubscriptionsTable subscriptions={subscriptions} />

      <p className="text-xs text-[#A9A9A9] leading-relaxed max-w-3xl">
        Une ouverture compte quand une vraie messagerie charge l image de suivi. Les chargements
        automatiques sont ecartes : Brevo telecharge les images de chaque mail juste apres l envoi,
        et les antispams d entreprise font pareil. Le chiffre reste indicatif : Apple Mail precharge
        les images et une messagerie qui les bloque ne compte jamais. Le clic est le signal fiable.
        Les contacts tagues « test » dans Mautic sont exclus.
      </p>
    </div>
  );
}

function RecipientsTable({ campaign }: { campaign: NewsletterCampaign }) {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-[#FAFAFA]/10">
          <th className="text-left text-[#A9A9A9] text-xs font-mono uppercase py-2">Contact</th>
          <th className="text-left text-[#A9A9A9] text-xs font-mono uppercase py-2">Statut</th>
          <th className="text-left text-[#A9A9A9] text-xs font-mono uppercase py-2">Premiere ouverture</th>
        </tr>
      </thead>
      <tbody>
        {campaign.recipients.map((r) => {
          const status = STATUS_LABELS[r.status];
          return (
            <tr key={r.leadId} className="border-b border-[#FAFAFA]/5 last:border-0">
              <td className="py-2 pr-4">
                <p className="text-[#FAFAFA] text-sm">{r.firstName || "—"}</p>
                <p className="text-[#A9A9A9] text-xs">{r.email}</p>
              </td>
              <td className={`py-2 pr-4 text-sm font-mono ${status.className}`}>
                {status.label}
                {r.humanOpens > 1 && <span className="text-[#A9A9A9]"> · {r.humanOpens} fois</span>}
                {r.sentOnSignup && (
                  <span className="block text-xs text-[#A9A9A9]">envoyee a l inscription</span>
                )}
              </td>
              <td className="py-2 text-sm text-[#A9A9A9]">{formatMauticDate(r.firstOpenAt)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function SubscriptionsTable({ subscriptions }: { subscriptions: AdminSubscription[] }) {
  const pending = subscriptions.filter((s) => s.status === "pending").length;
  return (
    <div className="pt-6">
      <h2 className="text-lg font-mono font-bold text-[#FAFAFA]">Inscriptions</h2>
      <p className="text-[#A9A9A9] text-sm mb-3">
        {subscriptions.length - pending} confirmee(s), {pending} en attente du clic sur le lien
      </p>
      {subscriptions.length === 0 ? (
        <p className="text-[#A9A9A9] text-sm font-mono">Aucune inscription pour le moment.</p>
      ) : (
        <div className="bg-[#2D2A2E] border border-[#FAFAFA]/10 rounded-lg overflow-x-auto">
          <table className="w-full min-w-[720px]">
            <thead className="bg-[#1E1E1E] border-b border-[#FAFAFA]/10">
              <tr>
                <th className={TH}>Contact</th>
                <th className={TH}>Inscription</th>
                <th className={TH}>Confirmation</th>
                <th className={TH}>Derniere newsletter envoyee</th>
              </tr>
            </thead>
            <tbody>
              {subscriptions.map((s) => (
                <tr key={s.id} className="border-b border-[#FAFAFA]/5 last:border-0">
                  <td className="px-4 py-3">
                    <p className="text-[#FAFAFA] text-sm">{s.first_name || "—"}</p>
                    <p className="text-[#A9A9A9] text-xs">{s.email}</p>
                  </td>
                  <td className="px-4 py-3 text-sm text-[#A9A9A9]">{formatIsoDate(s.created_at)}</td>
                  <td className="px-4 py-3 text-sm font-mono">
                    {s.status === "confirmed" ? (
                      <span className="text-[#98C379]">{formatIsoDate(s.confirmed_at)}</span>
                    ) : (
                      <span className="text-[#A9A9A9]">
                        En attente
                        {s.confirmation_sent_at && (
                          <span className="block text-xs">lien envoye {formatIsoDate(s.confirmation_sent_at)}</span>
                        )}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {s.welcome_sent_at ? (
                      <>
                        <p className="text-[#F4F1DE]">{s.welcome_email_name}</p>
                        <p className="text-[#A9A9A9] text-xs">{formatIsoDate(s.welcome_sent_at)}</p>
                      </>
                    ) : (
                      <span className="text-[#A9A9A9]">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
