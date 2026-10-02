const EMAIL_MAX_LENGTH = 254;
const FIRST_NAME_MAX_LENGTH = 60;
// Volontairement simple : on ecarte les fautes de frappe, pas les adresses exotiques.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export type NewsletterSignup = {
  email: string;
  firstName: string | null;
};

export type NewsletterValidation =
  | { ok: true; value: NewsletterSignup }
  | { ok: false; error: string };

/**
 * Valide et normalise une inscription a la newsletter.
 * Le prenom est facultatif (le mail affiche "Bonjour a vous" sans prenom).
 */
export function validateNewsletterSignup(input: unknown): NewsletterValidation {
  if (typeof input !== "object" || input === null) {
    return { ok: false, error: "Requete invalide" };
  }

  const { email, firstName } = input as Record<string, unknown>;

  if (typeof email !== "string") {
    return { ok: false, error: "Adresse email requise" };
  }
  const normalizedEmail = email.trim().toLowerCase();
  if (normalizedEmail.length > EMAIL_MAX_LENGTH || !EMAIL_PATTERN.test(normalizedEmail)) {
    return { ok: false, error: "Adresse email invalide" };
  }

  if (firstName !== undefined && firstName !== null && typeof firstName !== "string") {
    return { ok: false, error: "Prenom invalide" };
  }
  const trimmedFirstName = typeof firstName === "string" ? firstName.trim() : "";
  if (trimmedFirstName.length > FIRST_NAME_MAX_LENGTH) {
    return { ok: false, error: "Prenom trop long" };
  }

  return {
    ok: true,
    value: {
      email: normalizedEmail,
      firstName: trimmedFirstName ? capitalize(trimmedFirstName) : null,
    },
  };
}

function capitalize(name: string): string {
  return name.charAt(0).toLocaleUpperCase("fr-FR") + name.slice(1);
}
