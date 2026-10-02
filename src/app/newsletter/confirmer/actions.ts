"use server";

import { completeConfirmation } from "@/lib/newsletter-mailing";
import { confirmByToken } from "@/lib/newsletter-subscriptions";

export type ConfirmState = { status: "idle" | "confirmed" | "already-confirmed" | "expired" | "invalid" | "error" };

// La confirmation se fait sur clic du bouton (POST), jamais a l'ouverture du lien :
// les antispams d'entreprise suivent les liens des mails et confirmeraient a la place
// de la personne.
export async function confirmSubscription(_prev: ConfirmState, formData: FormData): Promise<ConfirmState> {
  const token = String(formData.get("token") ?? "");
  try {
    const result = await confirmByToken(token);
    if (!result.ok) return { status: result.reason };
    await completeConfirmation(result.subscription);
    return { status: "confirmed" };
  } catch (error) {
    console.error("Newsletter confirmation failed", { error });
    return { status: "error" };
  }
}
