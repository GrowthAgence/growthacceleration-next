import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, Clock } from "lucide-react";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "La machine a walkthrough : creer le site d un prospect avant de lui vendre",
  description:
    "Une methode de prospection ou l IA construit le site du prospect AVANT le premier contact. Analyse de la psychologie de vente qui la rend redoutable, et comment la transposer a votre business.",
  keywords: [
    "prospection IA",
    "machine a walkthrough",
    "psychologie de la vente",
    "effet de dotation",
    "reciprocite",
    "prospection locale",
    "site web prospect",
    "agents IA",
  ],
  alternates: {
    canonical: "/blog/machine-a-walkthrough",
  },
  openGraph: {
    title: "La machine a walkthrough : livrer avant de vendre | Growth Acceleration",
    description:
      "L IA construit le site du prospect avant le premier contact. La psychologie de vente derriere la methode, et comment la transposer.",
    type: "article",
  },
};

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "La machine a walkthrough : creer le site d un prospect avant de lui vendre",
  datePublished: "2026-08-28",
  dateModified: "2026-08-28",
  author: {
    "@id": "https://www.growth-acceleration.fr/#person",
  },
  publisher: {
    "@id": "https://www.growth-acceleration.fr/#organization",
  },
  url: "https://www.growth-acceleration.fr/blog/machine-a-walkthrough",
  inLanguage: "fr",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.growth-acceleration.fr/blog/machine-a-walkthrough",
  },
  description:
    "Une methode de prospection ou l IA construit le site du prospect avant le premier contact. Analyse de la psychologie de vente qui la rend redoutable.",
  keywords:
    "prospection IA, machine a walkthrough, psychologie de la vente, effet de dotation, reciprocite, prospection locale",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: "https://www.growth-acceleration.fr",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://www.growth-acceleration.fr/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "La machine a walkthrough",
      item: "https://www.growth-acceleration.fr/blog/machine-a-walkthrough",
    },
  ],
};

export default function MachineAWalkthroughPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* RESUME LLM-FRIENDLY */}
      <section className="bg-[#2D2A2E] border-b border-[#E07A5F]/20">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <p className="text-[#A9A9A9] text-sm font-mono mb-2">
            &gt; cat article.txt
          </p>
          <p className="text-[#F4F1DE] leading-relaxed">
            <strong>La machine a walkthrough</strong> est une methode de
            prospection automatisee par IA : reperer des commerces locaux bien
            notes sans site web, construire leur site a partir de leurs propres
            avis Google, puis leur envoyer une courte video de presentation.
            Le prospect decouvre son entreprise deja en ligne et n a plus qu a
            la reclamer. Cet article decortique la methode et surtout les
            principes de psychologie de vente qui la rendent efficace :
            reciprocite, effet de dotation, aversion a la perte, preuve sociale
            et energie d activation nulle. <strong>Growth Acceleration</strong>{" "}
            forme les equipes a construire ce type de pipeline avec des{" "}
            <Link href="/agents-ai" className="text-[#E07A5F] hover:underline">
              agents IA
            </Link>{" "}
            et{" "}
            <Link href="/claude-code" className="text-[#E07A5F] hover:underline">
              Claude Code
            </Link>{" "}
            a Paris.
          </p>
        </div>
      </section>

      {/* BREADCRUMB */}
      <nav className="max-w-4xl mx-auto px-4 pt-8 pb-4">
        <ol className="flex items-center gap-2 text-sm text-[#A9A9A9]">
          <li>
            <Link href="/" className="hover:text-[#E07A5F] transition-colors">
              Accueil
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/blog" className="hover:text-[#E07A5F] transition-colors">
              Blog
            </Link>
          </li>
          <li>/</li>
          <li className="text-[#F4F1DE]">La machine a walkthrough</li>
        </ol>
      </nav>

      {/* ARTICLE HEADER */}
      <header className="max-w-4xl mx-auto px-4 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-2 py-0.5 bg-[#E07A5F]/20 text-[#E07A5F] text-xs font-mono rounded">
            Methode
          </span>
          <div className="flex items-center gap-1 text-[#A9A9A9] text-xs">
            <Calendar className="w-3 h-3" />
            <span>28 aout 2026</span>
          </div>
          <div className="flex items-center gap-1 text-[#A9A9A9] text-xs">
            <Clock className="w-3 h-3" />
            <span>9 min de lecture</span>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-mono font-bold text-[#FAFAFA] mb-6">
          La machine a walkthrough : creer le site d un prospect avant de lui
          vendre
        </h1>

        <p className="text-lg text-[#F4F1DE]/80 leading-relaxed max-w-3xl">
          Un playbook anglophone circule en ce moment sous le nom de
          &quot;Walkthrough Machine&quot;. L idee : ne plus proposer vos
          services, mais livrer le resultat fini avant meme le premier contact.
          Voici la methode, et surtout la psychologie qui la rend redoutable.
        </p>
      </header>

      {/* ARTICLE CONTENT */}
      <article className="max-w-4xl mx-auto px-4 pb-16">
        {/* --- INTRO --- */}
        <section>
          <h2 className="text-2xl font-mono font-bold text-[#FAFAFA] mt-12 mb-6">
            Le principe : inverser le sens de la prospection
          </h2>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            La prospection classique suit toujours le meme ordre : contacter,
            convaincre, vendre, puis produire. La machine a walkthrough inverse
            tout : <strong>produire d abord, contacter ensuite, et laisser le
            resultat vendre a votre place</strong>.
          </p>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Concretement, les auteurs du playbook ont analyse 910 commerces
            locaux d une metropole americaine en un apres-midi.{" "}
            <strong>244 n avaient aucun site web</strong> — plus d un quart du
            marche. Pour chacun de ces commerces bien notes mais invisibles en
            ligne, la machine construit un vrai site a partir de leurs avis
            Google publics, puis envoie au patron une courte video ou un visage
            humain lui fait visiter SON site, deja en ligne. Le message tient
            en une phrase : &quot;je l ai construit a partir de vos propres
            avis. S il vous plait, il est a vous.&quot;
          </p>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Chaque etape est automatisable avec les outils actuels : scraping
            Google Maps, generation du site par un modele IA, video face-cam
            generee une seule fois pour toute la niche, envoi par email ou
            carte postale. Mais la vraie lecon n est pas technique. Elle est
            psychologique — et elle se transpose a presque tous les business.
          </p>
        </section>

        {/* --- LA METHODE --- */}
        <section>
          <h2 className="text-2xl font-mono font-bold text-[#FAFAFA] mt-12 mb-6">
            La methode en 5 etapes
          </h2>

          <h3 className="text-xl font-mono font-bold text-[#E07A5F] mt-8 mb-4">
            1. Une seule niche, une seule ville
          </h3>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Le playbook prend les paysagistes : taux record d absence de site,
            photos Google spectaculaires (des avant/apres de jardins), et des
            clients qui citent le patron par son prenom dans les avis. Une
            niche unique = un seul angle d approche, un seul modele de site, et
            une seule video reutilisable pour tous les prospects. Artisans,
            detailing auto, elagueurs ou cafes independants fonctionnent
            pareil.
          </p>

          <h3 className="text-xl font-mono font-bold text-[#E07A5F] mt-8 mb-4">
            2. Scraper, puis qualifier durement
          </h3>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Un scraper Google Maps (type Apify) extrait tout : nom, telephone,
            note, avis complets, photos, champ site web. Ensuite on filtre sans
            pitie : pas de site (ou juste une page Facebook), note de 4 etoiles
            minimum, 20 avis ou plus, un avis de moins de 90 jours (le commerce
            est vivant), 5 photos minimum. Deux prospects propres valent mieux
            que cinq douteux : chaque site construit doit avoir de la matiere.
          </p>

          <h3 className="text-xl font-mono font-bold text-[#E07A5F] mt-8 mb-4">
            3. Trouver le prenom du patron dans les avis
          </h3>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Les scrapers ne donnent presque jamais d email. Peu importe : les
            avis sont plus riches. Les clients nomment le gerant en
            permanence (&quot;Ricardo et son equipe ont ete a l ecoute&quot;),
            et les patrons repondent aux avis en signant a la premiere
            personne. Un prenom change tout : &quot;bonjour Ricardo&quot; est
            la difference entre un message lu et un message supprime.
          </p>

          <h3 className="text-xl font-mono font-bold text-[#E07A5F] mt-8 mb-4">
            4. Faire construire le site par l IA — avec des garde-fous d
            honnetete
          </h3>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Pas de template : on donne au modele les faits reels (fiche Google
            complete, tous les avis verbatim) et une liberte totale de design,
            avec des regles strictes. Interdiction d inventer quoi que ce
            soit : pas d anciennete fictive, pas de certification imaginaire,
            pas de faux temoignage. Les citations d avis doivent etre
            reproduites mot pour mot. Les images generees sont etiquetees
            comme illustratives.
          </p>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Ces garde-fous ne sont pas de la decoration morale : ils sont la
            condition commerciale du succes.{" "}
            <strong>Le patron connait ses propres avis par coeur.</strong> S il
            reconnait chaque citation comme authentique, le site est
            immediatement le sien. Une seule invention, et tout sent le spam.
          </p>

          <h3 className="text-xl font-mono font-bold text-[#E07A5F] mt-8 mb-4">
            5. Une video, un lien, un message
          </h3>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Une seule video face-cam d une quinzaine de secondes, generee par
            IA en deux temps (une image fixe realiste, puis son animation), qui
            ne cite jamais le nom d un commerce : elle sert donc pour toute la
            niche, indefiniment. On l incruste en bulle ronde sur un
            enregistrement du site qui defile, hebergee sur une page dediee
            avec deux elements sous le lecteur : le lien du site en ligne et un
            bouton pour le reclamer. L email de contact contient uniquement le
            prenom du patron, une citation verbatim d un de ses avis, et le
            lien de la video. Un seul message par commerce, pas de fausse
            urgence, et une porte de sortie explicite : &quot;si ca ne vous
            plait pas, repondez stop et je supprime tout&quot;.
          </p>
        </section>

        {/* --- PSYCHOLOGIE --- */}
        <section>
          <h2 className="text-2xl font-mono font-bold text-[#FAFAFA] mt-12 mb-6">
            Pourquoi ca marche : la psychologie de vente decortiquee
          </h2>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Cette methode empile cinq principes de psychologie comportementale
            documentes. C est cette pile qui la rend efficace — et c est elle
            que vous pouvez transposer, meme si vous ne vendez pas de sites
            web.
          </p>

          <h3 className="text-xl font-mono font-bold text-[#E07A5F] mt-8 mb-4">
            La reciprocite : donner d abord, vraiment
          </h3>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Le principe de reciprocite (Cialdini) dit que nous nous sentons
            obliges de rendre ce qu on nous a donne. Mais la plupart des
            &quot;cadeaux&quot; de prospection — audit PDF, checklist, appel
            decouverte — sont des cadeaux a fabriquer soi-meme : le prospect
            doit encore travailler pour en tirer de la valeur. Ici, le cadeau
            est un <strong>livrable fini</strong>. Le travail est fait. La
            dette psychologique est immediate et sans effort pour celui qui la
            recoit.
          </p>

          <h3 className="text-xl font-mono font-bold text-[#E07A5F] mt-8 mb-4">
            L effet de dotation : c est deja SON site
          </h3>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Nous valorisons davantage ce que nous possedons — c est l effet de
            dotation. Le genie de la formule &quot;si vous l aimez, il est a
            vous&quot; : le patron ne regarde pas une demo generique, il
            regarde <strong>son entreprise</strong>, son nom, ses avis, ses
            chantiers. Mentalement, il le possede deja. Et c est la que l
            aversion a la perte prend le relais : ne pas reclamer le site, ce n
            est plus &quot;rater une opportunite&quot;, c est{" "}
            <strong>perdre quelque chose qui existe deja</strong>. Une perte
            pese environ deux fois plus lourd qu un gain equivalent. Le
            playbook le resume d une phrase : voir son entreprise avoir l air
            professionnelle, c est difficile a de-voir.
          </p>

          <h3 className="text-xl font-mono font-bold text-[#E07A5F] mt-8 mb-4">
            La preuve sociale retournee sur elle-meme
          </h3>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            La preuve sociale classique consiste a montrer que d autres ont
            achete. Ici, la preuve sociale est celle du prospect lui-meme : ses
            propres clients, leurs propres mots, verbatim.{" "}
            <strong>On ne peut pas contester sa propre preuve.</strong> Chaque
            citation reconnue est un micro-signal de confiance : &quot;cette
            personne a vraiment lu qui je suis&quot;. C est aussi une flatterie
            factuelle, donc credible — bien plus puissante qu un compliment
            generique.
          </p>

          <h3 className="text-xl font-mono font-bold text-[#E07A5F] mt-8 mb-4">
            La similarite et le visage humain
          </h3>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Nous disons oui aux gens qui nous ressemblent et que nous trouvons
            sympathiques. La video face-cam — un type ordinaire en t-shirt,
            lumiere naturelle, ton hesitant et direct (&quot;c est un peu
            bizarre comme demarche, mais...&quot;) — humanise une demarche
            entierement automatisee. L aveu de bizarrerie est un pratfall
            assume : admettre la petite faiblesse de la demarche la rend plus
            credible, pas moins.
          </p>

          <h3 className="text-xl font-mono font-bold text-[#E07A5F] mt-8 mb-4">
            L energie d activation reduite a zero
          </h3>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Le modele de Fogg dit qu un comportement exige motivation, capacite
            et declencheur. La prospection classique demande au prospect de se
            projeter, comparer, decider, budgeter — une montagne d energie d
            activation. Ici, tout est deja fait : la seule action restante est
            un clic sur &quot;reclamer&quot;. Motivation maximale (c est son
            entreprise), capacite maximale (un clic), declencheur clair (la
            video). Les trois conditions sont remplies d office.
          </p>

          <h3 className="text-xl font-mono font-bold text-[#E07A5F] mt-8 mb-4">
            Et une lecon d anti-manipulation
          </h3>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Le detail le plus contre-intuitif du playbook : interdiction des
            fausses raretes (&quot;plus que 3 places&quot;) et des faux
            comptes a rebours. Un seul message, une porte de sortie explicite.
            Pourquoi ? Parce que la pression artificielle declenche la
            reactance : le reflexe de defense qui fait fuir. Quand le produit
            est reellement bon et deja livre,{" "}
            <strong>l honnetete est la tactique de vente la plus
            agressive</strong> : elle desarme toutes les defenses qu un
            prospect leve face a un vendeur.
          </p>
        </section>

        {/* --- CE QUE VOUS POUVEZ EN FAIRE --- */}
        <section>
          <h2 className="text-2xl font-mono font-bold text-[#FAFAFA] mt-12 mb-6">
            Ce que vous pouvez en faire, concretement
          </h2>

          <h3 className="text-xl font-mono font-bold text-[#E07A5F] mt-8 mb-4">
            Si vous vendez des sites ou du marketing
          </h3>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            La methode s applique telle quelle en France. Le cout marginal d un
            site genere par IA est proche de zero avec des outils comme{" "}
            <Link href="/claude-code" className="text-[#E07A5F] hover:underline">
              Claude Code
            </Link>{" "}
            : le vrai travail est le pipeline (scraping, qualification,
            generation, envoi), qui se construit une fois puis tourne seul.
            Choisissez une niche locale a fort taux d invisibilite en ligne,
            et gardez imperativement les garde-fous d honnetete — c est eux
            qui font la conversion.
          </p>

          <h3 className="text-xl font-mono font-bold text-[#E07A5F] mt-8 mb-4">
            Si vous vendez autre chose : transposez le principe
          </h3>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            La formule generale est : <strong>echantillon fini + preuve du
            prospect lui-meme + zero effort pour dire oui</strong>. Quelques
            transpositions :
          </p>
          <ul className="list-disc list-inside text-[#F4F1DE]/90 leading-relaxed mb-4 space-y-2">
            <li>
              Un expert-comptable envoie a un restaurateur une simulation d
              optimisation basee sur ses tarifs publics, pas une plaquette.
            </li>
            <li>
              Un photographe retouche 3 photos existantes de la vitrine du
              commercant et les envoie, pretes a poster.
            </li>
            <li>
              Une agence RH reecrit une vraie annonce d emploi publiee par le
              prospect, en version qui attire.
            </li>
            <li>
              Un consultant IA automatise une tache visible du prospect et
              envoie la video du resultat — c est exactement ce que nous
              enseignons en{" "}
              <Link href="/agents-ai" className="text-[#E07A5F] hover:underline">
                formation Agents IA
              </Link>
              .
            </li>
          </ul>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Dans chaque cas, la matiere premiere est publique (avis, annonces,
            tarifs, photos), le livrable est fini, et le message de contact
            tient en trois lignes avec le prenom du destinataire et sa propre
            preuve.
          </p>

          <h3 className="text-xl font-mono font-bold text-[#E07A5F] mt-8 mb-4">
            Les limites a respecter
          </h3>
          <ul className="list-disc list-inside text-[#F4F1DE]/90 leading-relaxed mb-4 space-y-2">
            <li>
              <strong>Jamais de faits inventes</strong> : tout ce qui figure
              sur le livrable doit venir de donnees publiques verifiables.
            </li>
            <li>
              <strong>Images generees etiquetees comme illustratives</strong> :
              ne jamais faire passer une image IA pour une realisation reelle
              du prospect.
            </li>
            <li>
              <strong>Prospection B2B en France</strong> : l email a un
              professionnel sur son adresse pro est possible au titre de l
              interet legitime, a condition d un rapport avec son activite et
              d un opt-out simple et honore. Le &quot;repondez stop et je
              supprime tout&quot; n est pas une politesse, c est une
              obligation.
            </li>
            <li>
              <strong>Un seul message</strong> : la relance en rafale detruit
              precisement le capital de sympathie que la methode construit.
            </li>
          </ul>
        </section>

        {/* --- CONCLUSION --- */}
        <section>
          <h2 className="text-2xl font-mono font-bold text-[#FAFAFA] mt-12 mb-6">
            Ce qu il faut retenir
          </h2>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            La machine a walkthrough n est pas une astuce de growth hacking de
            plus. C est la combinaison de deux forces : l IA qui fait tomber a
            presque zero le cout de production d un livrable personnalise, et
            une pile de principes psychologiques — reciprocite, dotation,
            aversion a la perte, preuve sociale, activation — qui transforment
            ce livrable en argument de vente autonome. La barriere n est plus
            le cout de production. C est de savoir construire le pipeline, et
            d avoir la discipline de rester honnete a chaque etape.
          </p>
        </section>

        {/* --- ARTICLES LIES --- */}
        <section>
          <h2 className="text-2xl font-mono font-bold text-[#FAFAFA] mt-12 mb-6">
            Pour aller plus loin
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/blog/agents-ia-entreprise"
              className="block bg-[#2D2A2E]/50 border border-[#FAFAFA]/10 rounded-lg p-4 hover:border-[#E07A5F]/50 transition-all"
            >
              <p className="text-[#FAFAFA] font-mono font-bold text-sm mb-1">
                Agents IA en entreprise
              </p>
              <p className="text-[#A9A9A9] text-xs">
                Cas d usage et deploiement d agents autonomes
              </p>
            </Link>
            <Link
              href="/blog/claude-code-vs-cursor"
              className="block bg-[#2D2A2E]/50 border border-[#FAFAFA]/10 rounded-lg p-4 hover:border-[#E07A5F]/50 transition-all"
            >
              <p className="text-[#FAFAFA] font-mono font-bold text-sm mb-1">
                Claude Code vs Cursor vs Copilot
              </p>
              <p className="text-[#A9A9A9] text-xs">
                Comparatif des outils de coding IA en 2026
              </p>
            </Link>
            <Link
              href="/blog/n8n-vs-make-vs-zapier"
              className="block bg-[#2D2A2E]/50 border border-[#FAFAFA]/10 rounded-lg p-4 hover:border-[#E07A5F]/50 transition-all"
            >
              <p className="text-[#FAFAFA] font-mono font-bold text-sm mb-1">
                N8N vs Make vs Zapier
              </p>
              <p className="text-[#A9A9A9] text-xs">
                Quel outil pour automatiser votre pipeline
              </p>
            </Link>
            <Link
              href="/agents-ai"
              className="block bg-[#2D2A2E]/50 border border-[#E07A5F]/30 rounded-lg p-4 hover:border-[#E07A5F]/50 transition-all"
            >
              <p className="text-[#E07A5F] font-mono font-bold text-sm mb-1">
                Formation Agents.AI
              </p>
              <p className="text-[#A9A9A9] text-xs">
                8 heures en presentiel a Paris — 900 euros TTC
              </p>
            </Link>
          </div>
        </section>
      </article>

      {/* FINAL CTA */}
      <FinalCTA
        title="Envie de construire votre propre machine ?"
        price="900"
        accentColor="#E07A5F"
      />
    </>
  );
}
