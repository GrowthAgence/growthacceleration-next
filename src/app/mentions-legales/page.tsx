import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions legales",
  alternates: {
    canonical: "/mentions-legales",
  },
};

export default function MentionsLegalesPage() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-mono font-bold text-[#FAFAFA] mb-12">
          Mentions legales
        </h1>

        <div className="space-y-10 text-[#F4F1DE] leading-relaxed">
          {/* Editeur */}
          <div>
            <h2 className="text-xl font-mono font-bold text-[#E07A5F] mb-4">
              1. Editeur du site
            </h2>
            <div className="bg-[#2D2A2E]/50 p-6 rounded-lg border border-[#FAFAFA]/10 space-y-2 text-sm">
              <p><span className="text-[#A9A9A9]">Raison sociale :</span> <strong>GROWTH ACCELERATION</strong></p>
              <p><span className="text-[#A9A9A9]">Forme juridique :</span> Societe par actions simplifiee (SAS)</p>
              <p><span className="text-[#A9A9A9]">Capital social :</span> 1 000 EUR</p>
              <p><span className="text-[#A9A9A9]">SIREN :</span> 841 590 193</p>
              <p><span className="text-[#A9A9A9]">SIRET (siege) :</span> 841 590 193 00014</p>
              <p><span className="text-[#A9A9A9]">Code APE :</span> 8559A - Formation continue d adultes</p>
              <p><span className="text-[#A9A9A9]">N° TVA :</span> FR77841590193</p>
              <p><span className="text-[#A9A9A9]">Siege social :</span> 231 rue Saint-Honore, 75001 Paris</p>
              <p><span className="text-[#A9A9A9]">President :</span> Guy-Frederic Orlicki</p>
            </div>
          </div>

          {/* Hebergeur */}
          <div>
            <h2 className="text-xl font-mono font-bold text-[#E07A5F] mb-4">
              2. Hebergement
            </h2>
            <div className="bg-[#2D2A2E]/50 p-6 rounded-lg border border-[#FAFAFA]/10 space-y-2 text-sm">
              <p><span className="text-[#A9A9A9]">Hebergeur :</span> <strong>Vercel Inc.</strong></p>
              <p><span className="text-[#A9A9A9]">Adresse :</span> 440 N Barranca Ave #4133, Covina, CA 91723, USA</p>
              <p><span className="text-[#A9A9A9]">Site :</span> vercel.com</p>
            </div>
          </div>

          {/* Propriete intellectuelle */}
          <div>
            <h2 className="text-xl font-mono font-bold text-[#E07A5F] mb-4">
              3. Propriete intellectuelle
            </h2>
            <p className="text-[#A9A9A9]">
              L ensemble du contenu de ce site (textes, images, logos, videos, structure) est la propriete
              exclusive de Growth Acceleration ou de ses partenaires. Toute reproduction, meme partielle,
              est interdite sans autorisation prealable ecrite.
            </p>
          </div>

          {/* Donnees personnelles */}
          <div>
            <h2 className="text-xl font-mono font-bold text-[#E07A5F] mb-4">
              4. Donnees personnelles
            </h2>
            <p className="text-[#A9A9A9] mb-4">
              Les informations collectees via les formulaires de contact ou de reservation sont utilisees
              uniquement pour le traitement de votre demande et ne sont jamais transmises a des tiers
              sans votre consentement.
            </p>
            <p className="text-[#A9A9A9]">
              Conformement au RGPD, vous disposez d un droit d acces, de rectification et de suppression
              de vos donnees personnelles. Pour exercer ce droit, contactez-nous a l adresse du siege social.
            </p>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-xl font-mono font-bold text-[#E07A5F] mb-4">
              5. Cookies
            </h2>
            <p className="text-[#A9A9A9]">
              Ce site utilise Google Analytics (GA4) pour mesurer l audience. Ces cookies sont anonymes
              et ne permettent pas de vous identifier personnellement. Vous pouvez desactiver les cookies
              dans les parametres de votre navigateur.
            </p>
          </div>

          {/* Responsabilite */}
          <div>
            <h2 className="text-xl font-mono font-bold text-[#E07A5F] mb-4">
              6. Limitation de responsabilite
            </h2>
            <p className="text-[#A9A9A9]">
              Growth Acceleration s efforce d assurer l exactitude des informations publiees sur ce site.
              Toutefois, elle ne peut garantir l exhaustivite ni l absence d erreurs. L utilisation des
              informations se fait sous la responsabilite de l utilisateur.
            </p>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-12 pt-8 border-t border-[#FAFAFA]/5 text-[#A9A9A9] text-xs font-mono">
          Derniere mise a jour : fevrier 2026
        </div>
      </div>
    </section>
  );
}
