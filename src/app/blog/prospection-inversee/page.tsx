import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, Clock } from "lucide-react";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Prospection inversee : creez le site de votre client avant de lui vendre",
  description:
    "Manuel etape par etape : trouver des commerces sans site web, construire leur site avec l IA a partir de leurs avis Google, et leur envoyer une video. Avec la psychologie de vente qui explique pourquoi ca marche.",
  keywords: [
    "prospection inversee",
    "prospection IA",
    "trouver des clients",
    "creer un site avec l IA",
    "psychologie de la vente",
    "prospection locale",
    "commerces sans site web",
    "agents IA",
  ],
  alternates: {
    canonical: "/blog/prospection-inversee",
  },
  openGraph: {
    title: "Prospection inversee : livrer avant de vendre | Growth Acceleration",
    description:
      "Manuel etape par etape : l IA construit le site du client avant le premier contact. Et la psychologie qui explique pourquoi ca marche.",
    type: "article",
  },
};

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Prospection inversee : creez le site de votre client avant de lui vendre",
  datePublished: "2026-08-28",
  dateModified: "2026-08-28",
  author: {
    "@id": "https://www.growth-acceleration.fr/#person",
  },
  publisher: {
    "@id": "https://www.growth-acceleration.fr/#organization",
  },
  url: "https://www.growth-acceleration.fr/blog/prospection-inversee",
  inLanguage: "fr",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.growth-acceleration.fr/blog/prospection-inversee",
  },
  description:
    "Manuel etape par etape de la prospection inversee : l IA construit le site du client avant le premier contact, une video le lui presente, il n a plus qu a l accepter.",
  keywords:
    "prospection inversee, prospection IA, trouver des clients, creer un site avec l IA, psychologie de la vente, prospection locale",
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
      name: "Prospection inversee",
      item: "https://www.growth-acceleration.fr/blog/prospection-inversee",
    },
  ],
};

export default function ProspectionInverseePage() {
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
            <strong>La prospection inversee</strong> consiste a livrer le
            resultat avant de vendre : reperer des commerces locaux bien notes
            qui n ont pas de site web, construire leur site avec l IA a partir
            de leurs propres avis Google, puis envoyer au patron une courte
            video qui lui presente son site deja en ligne. Il n a plus qu a l
            accepter. Cet article est un manuel etape par etape (trouver les
            commerces, qualifier, generer le site, creer la video, envoyer le
            message), suivi de la psychologie de vente qui explique pourquoi
            ca marche : reciprocite, effet de dotation, aversion a la perte,
            preuve sociale. <strong>Growth Acceleration</strong> forme les
            equipes a construire ce type de systeme avec des{" "}
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
          <li className="text-[#F4F1DE]">Prospection inversee</li>
        </ol>
      </nav>

      {/* ARTICLE HEADER */}
      <header className="max-w-4xl mx-auto px-4 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-2 py-0.5 bg-[#E07A5F]/20 text-[#E07A5F] text-xs font-mono rounded">
            Manuel
          </span>
          <div className="flex items-center gap-1 text-[#A9A9A9] text-xs">
            <Calendar className="w-3 h-3" />
            <span>28 aout 2026</span>
          </div>
          <div className="flex items-center gap-1 text-[#A9A9A9] text-xs">
            <Clock className="w-3 h-3" />
            <span>10 min de lecture</span>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-mono font-bold text-[#FAFAFA] mb-6">
          Prospection inversee : creez le site de votre client avant de lui
          vendre
        </h1>

        <p className="text-lg text-[#F4F1DE]/80 leading-relaxed max-w-3xl">
          Ne proposez plus vos services : livrez le resultat fini avant meme le
          premier contact, et laissez-le vendre a votre place. Voici le manuel
          complet, etape par etape, puis la psychologie qui explique pourquoi
          cette methode est si efficace.
        </p>
      </header>

      {/* ARTICLE CONTENT */}
      <article className="max-w-4xl mx-auto px-4 pb-16">
        {/* --- INTRO --- */}
        <section>
          <h2 className="text-2xl font-mono font-bold text-[#FAFAFA] mt-12 mb-6">
            Le principe en 30 secondes
          </h2>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            La prospection classique suit toujours le meme ordre : contacter,
            convaincre, vendre, puis produire. La prospection inversee fait le
            contraire : <strong>vous produisez d abord, vous contactez
            ensuite, et le resultat vend a votre place</strong>.
          </p>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Le terrain de jeu est enorme. Les createurs de cette methode (un
            guide americain recent) ont analyse 910 commerces locaux d une
            grande ville en un apres-midi : <strong>244 n avaient aucun site
            web</strong>. Plus d un quart. Des commerces bien notes, avec des
            clients contents, mais invisibles sur internet.
          </p>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Pour chacun d eux, vous construisez un vrai site avec l IA a
            partir de leurs avis Google publics, puis vous envoyez au patron
            une courte video ou quelqu un lui fait visiter SON site, deja en
            ligne. Le message tient en une phrase : &quot;je l ai construit a
            partir de vos propres avis. S il vous plait, il est a vous.&quot;
            Suivez les 7 etapes ci-dessous dans l ordre.
          </p>
        </section>

        {/* --- LE MANUEL --- */}
        <section>
          <h2 className="text-2xl font-mono font-bold text-[#FAFAFA] mt-12 mb-6">
            Le manuel, etape par etape
          </h2>

          <h3 className="text-xl font-mono font-bold text-[#E07A5F] mt-8 mb-4">
            Etape 1 — Choisissez UNE niche et UNE ville
          </h3>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Ne visez pas large. Choisissez un seul type de commerce dans une
            seule ville, et n en bougez plus. Une niche unique = un seul style
            de site, un seul argumentaire, et une seule video que vous
            enregistrez une fois pour tous vos prospects.
          </p>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Bonnes niches : paysagistes (le taux record d absence de site, et
            leurs photos avant/apres de jardins rendent n importe quel site
            magnifique), nettoyage auto, elagueurs, artisans du batiment,
            cafes independants. Le critere : des photos Google
            spectaculaires et des clients qui citent le patron par son prenom
            dans les avis.
          </p>

          <h3 className="text-xl font-mono font-bold text-[#E07A5F] mt-8 mb-4">
            Etape 2 — Recuperez la liste des commerces depuis Google Maps
          </h3>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Utilisez un outil d extraction de donnees Google Maps — le plus
            courant est <strong>crawler-google-places sur Apify</strong>{" "}
            (compte gratuit pour commencer). Lancez une recherche du type
            &quot;paysagiste + votre ville&quot; et exportez tout dans un
            tableur : nom, telephone, adresse, note, nombre d avis, le texte
            complet des avis, les photos, et le champ &quot;site web&quot;.
          </p>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Ensuite, filtrez durement. Gardez uniquement les commerces qui
            cochent <strong>les 5 cases</strong> :
          </p>
          <ul className="list-disc list-inside text-[#F4F1DE]/90 leading-relaxed mb-4 space-y-2">
            <li>Pas de site web (ou juste une page Facebook dans le champ site)</li>
            <li>Note de 4 etoiles ou plus : le site aura de quoi briller</li>
            <li>20 avis minimum : il faut de la matiere pour construire</li>
            <li>Au moins un avis dans les 90 derniers jours : le commerce est vivant</li>
            <li>5 photos minimum : sinon le site aura l air vide</li>
          </ul>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Supprimez les chaines et tout ce qui est hors niche.{" "}
            <strong>Deux prospects propres valent mieux que cinq
            douteux.</strong>
          </p>

          <h3 className="text-xl font-mono font-bold text-[#E07A5F] mt-8 mb-4">
            Etape 3 — Trouvez le prenom du patron dans les avis
          </h3>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Les donnees extraites ne contiennent presque jamais d email. Pas
            grave : les avis sont plus riches. Lisez les textes d avis et les
            reponses du commerce. Les clients citent le gerant en permanence
            (&quot;Ricardo et son equipe ont ete a l ecoute&quot;), et les
            patrons repondent aux avis en signant a la premiere personne.
          </p>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Notez le prenom dans votre tableur, avec une citation d avis
            courte et positive. Vous utiliserez les deux a l etape 7.
            &quot;Bonjour Ricardo&quot; est la difference entre un message lu
            et un message supprime.
          </p>

          <h3 className="text-xl font-mono font-bold text-[#E07A5F] mt-8 mb-4">
            Etape 4 — Faites construire le site par l IA
          </h3>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            N utilisez pas de template. Donnez a un bon modele IA (Claude par
            exemple, via{" "}
            <Link href="/claude-code" className="text-[#E07A5F] hover:underline">
              Claude Code
            </Link>
            ) deux choses : <strong>les faits reels</strong> (toute la fiche
            Google : nom, telephone, adresse, horaires, note, et tous les avis
            copies mot pour mot) et <strong>une liberte totale de
            design</strong>. Demandez une seule page HTML complete, avec le
            telephone reel comme seul moyen de contact.
          </p>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Et imposez ces regles d honnetete, non negociables :
          </p>
          <ul className="list-disc list-inside text-[#F4F1DE]/90 leading-relaxed mb-4 space-y-2">
            <li>
              Interdiction d inventer : pas d anciennete fictive, pas de
              certification imaginaire, pas de faux temoignage, pas de
              garantie sortie de nulle part
            </li>
            <li>Les citations d avis reproduites mot pour mot, coupes signalees</li>
            <li>
              Seuls les services confirmes par un avis ou la fiche Google
              apparaissent sur le site
            </li>
            <li>
              Les images generees par IA sont signalees comme illustrations,
              jamais presentees comme les vraies realisations du commerce
            </li>
          </ul>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Ces regles ne sont pas de la morale decorative : c est ce qui fait
            la vente. <strong>Le patron connait ses avis par coeur.</strong> S
            il reconnait chaque citation comme authentique, le site est
            immediatement le sien. Une seule invention, et tout sent l
            arnaque.
          </p>

          <h3 className="text-xl font-mono font-bold text-[#E07A5F] mt-8 mb-4">
            Etape 5 — Creez UNE video de presentation, reutilisable a l infini
          </h3>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Il vous faut un court clip (environ 15 secondes) d une personne
            qui parle a la camera, comme en visio. Regle d or :{" "}
            <strong>la video ne cite jamais le nom d un commerce</strong>. Elle
            dit simplement : &quot;c est un peu inhabituel comme demarche,
            mais j ai trouve votre entreprise sur Google, vos avis sont
            excellents, et j ai vu que vous n aviez pas de site. Alors je vous
            en ai construit un, a partir de vos propres avis. Regardez, et s
            il vous plait, il est a vous.&quot; Resultat : la meme video sert
            pour toute la niche, pour toujours.
          </p>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Deux options. La simple : filmez-vous vous-meme avec votre webcam,
            15 secondes, lumiere naturelle, t-shirt normal. La version IA :
            generez une image fixe realiste de presentateur avec un modele d
            image, puis animez-la avec un modele video (Seedance, Grok
            video...). Dans les deux cas : visage centre (la video sera
            recadree en petit rond), ton detendu, et un regard qui descend de
            temps en temps vers le bas de l ecran, comme si la personne
            regardait le site — c est ce qui rend la scene credible.
          </p>

          <h3 className="text-xl font-mono font-bold text-[#E07A5F] mt-8 mb-4">
            Etape 6 — Enregistrez la visite du site
          </h3>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Ouvrez le site que vous avez construit. Lancez un enregistreur d
            ecran qui permet d incruster une pastille camera ronde dans un
            coin (Loom, Tella, ou l enregistreur de votre Mac). Jouez votre
            clip de l etape 5 en guise de &quot;camera&quot;, et faites
            defiler la page lentement, de haut en bas. C est tout : 60
            secondes de video par prospect.
          </p>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Hebergez chaque video sur sa propre page, avec deux elements
            en dessous : <strong>le lien du site en ligne</strong> et{" "}
            <strong>un bouton pour l accepter</strong>. Cette petite page est
            tout votre tunnel de vente.
          </p>

          <h3 className="text-xl font-mono font-bold text-[#E07A5F] mt-8 mb-4">
            Etape 7 — Envoyez UN message, pas deux
          </h3>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Personnalisez avec deux elements seulement, deja dans votre
            tableur : le prenom du patron et une citation d avis mot pour
            mot. Voici la structure du message (adaptez les mots a votre
            style, gardez la structure) :
          </p>
          <div className="bg-[#2D2A2E]/50 border border-dashed border-[#FAFAFA]/20 rounded-lg p-6 mb-4 font-mono text-sm text-[#F4F1DE]/90 leading-relaxed">
            <p className="mb-3">Objet : je vous ai fait une petite video</p>
            <p className="mb-3">
              Bonjour [prenom], c est un peu inhabituel comme message. J ai
              trouve [nom du commerce] sur Google — [note] etoiles, et des
              avis comme &quot;[citation courte mot pour mot]&quot; m ont fait
              m arreter. Puis j ai vu que vous n aviez pas de site web. Alors
              je vous en ai construit un, a partir de vos propres avis.
            </p>
            <p className="mb-3">La visite en 60 secondes : [lien]</p>
            <p>
              S il vous plait, il est a vous. Sinon, aucun souci : repondez
              stop et je supprime tout.
            </p>
          </div>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Pas d email trouvable ? Envoyez une vraie carte postale a l
            adresse du commerce (des services d impression et envoi de
            courrier par API existent, comme Stannp ou Merci Facteur) : au
            recto, une capture de leur nouveau site avec leur nom visible ;
            au verso, le meme message en 3 lignes avec un QR code vers la
            video.
          </p>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Les regles d envoi qui protegent votre credibilite :{" "}
            <strong>un seul message par commerce</strong>, pas de fausse
            urgence, pas de &quot;plus que 3 places&quot;. Le site fait
            pression tout seul : voir son entreprise avoir l air
            professionnelle, c est difficile a oublier.
          </p>

          <h3 className="text-xl font-mono font-bold text-[#E07A5F] mt-8 mb-4">
            La checklist complete
          </h3>
          <ul className="list-disc list-inside text-[#F4F1DE]/90 leading-relaxed mb-4 space-y-2">
            <li>Une niche, une ville</li>
            <li>
              Extraction Google Maps, puis filtre : pas de site, 4+ etoiles,
              20+ avis, un avis recent, 5+ photos
            </li>
            <li>Prenom du patron + une citation d avis notes dans le tableur</li>
            <li>Site genere par l IA avec les regles d honnetete</li>
            <li>Une video de presentation, generique, enregistree une seule fois</li>
            <li>Une visite d ecran de 60 secondes par prospect, sur sa propre page</li>
            <li>Un seul message : prenom + citation + lien</li>
          </ul>
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
            Quand on recoit quelque chose, on se sent oblige de rendre — c est
            le principe de reciprocite. Mais la plupart des
            &quot;cadeaux&quot; de prospection (audit PDF, checklist, appel
            decouverte) demandent encore du travail a celui qui les recoit.
            Ici, le cadeau est un <strong>resultat fini</strong>. Le travail
            est fait. La dette psychologique est immediate, et sans effort
            pour le prospect.
          </p>

          <h3 className="text-xl font-mono font-bold text-[#E07A5F] mt-8 mb-4">
            L effet de dotation : c est deja SON site
          </h3>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Nous accordons plus de valeur a ce que nous possedons — les
            psychologues appellent ca l effet de dotation. Le genie de la
            formule &quot;s il vous plait, il est a vous&quot; : le patron ne
            regarde pas une demo generique, il regarde{" "}
            <strong>son entreprise</strong>, son nom, ses avis, ses chantiers.
            Mentalement, il le possede deja. Et la, l aversion a la perte
            prend le relais : refuser le site, ce n est plus &quot;rater une
            occasion&quot;, c est <strong>perdre quelque chose qui existe
            deja</strong>. Or une perte pese environ deux fois plus lourd dans
            notre tete qu un gain equivalent.
          </p>

          <h3 className="text-xl font-mono font-bold text-[#E07A5F] mt-8 mb-4">
            La preuve sociale retournee sur elle-meme
          </h3>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            La preuve sociale classique consiste a montrer que d autres ont
            achete chez vous. Ici, la preuve vient du prospect lui-meme : ses
            propres clients, leurs propres mots, recopies exactement.{" "}
            <strong>Personne ne peut contester sa propre preuve.</strong>{" "}
            Chaque citation reconnue envoie le meme signal : &quot;cette
            personne a vraiment regarde qui je suis&quot;. C est un compliment
            factuel — donc credible — bien plus puissant qu une flatterie
            generique.
          </p>

          <h3 className="text-xl font-mono font-bold text-[#E07A5F] mt-8 mb-4">
            Le visage humain et l aveu de faiblesse
          </h3>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Nous disons oui aux gens qui nous ressemblent et que nous trouvons
            sympathiques. La video — une personne ordinaire en t-shirt,
            lumiere naturelle, ton direct — met un visage humain sur une
            demarche entierement automatisee. Et le &quot;c est un peu
            inhabituel comme message&quot; est un aveu de faiblesse assume :
            admettre le cote etrange de la demarche la rend PLUS credible, pas
            moins. Les vendeurs parfaits font fuir ; les gens normaux
            inspirent confiance.
          </p>

          <h3 className="text-xl font-mono font-bold text-[#E07A5F] mt-8 mb-4">
            Zero effort pour dire oui
          </h3>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Pour qu une personne agisse, il faut trois choses reunies : l
            envie, la facilite, et un declencheur. La prospection classique
            echoue sur la facilite : le prospect doit se projeter, comparer,
            decider, budgeter. Ici, tout est deja fait. L envie est maximale
            (c est son entreprise), l action est minimale (un clic pour
            accepter), le declencheur est clair (la video). Les trois cases
            sont cochees d office.
          </p>

          <h3 className="text-xl font-mono font-bold text-[#E07A5F] mt-8 mb-4">
            Et une lecon d anti-manipulation
          </h3>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Le detail le plus contre-intuitif de la methode : interdiction des
            fausses raretes et des faux comptes a rebours. Un seul message,
            une porte de sortie explicite. Pourquoi ? Parce que la pression
            artificielle declenche un reflexe de defense qui fait fuir. Quand
            le produit est reellement bon et deja livre,{" "}
            <strong>l honnetete est la tactique de vente la plus
            efficace</strong> : elle desarme toutes les defenses qu un
            prospect leve face a un vendeur.
          </p>
        </section>

        {/* --- CE QUE VOUS POUVEZ EN FAIRE --- */}
        <section>
          <h2 className="text-2xl font-mono font-bold text-[#FAFAFA] mt-12 mb-6">
            Transposez la formule a votre metier
          </h2>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Si vous vendez des sites ou du marketing, appliquez le manuel tel
            quel : le cout de production d un site genere par IA est proche de
            zero, le vrai travail est de construire la chaine une fois (elle
            tourne ensuite toute seule). Si vous vendez autre chose, gardez la
            formule generale : <strong>un resultat fini + la preuve du
            prospect lui-meme + zero effort pour dire oui</strong>. Quelques
            exemples :
          </p>
          <ul className="list-disc list-inside text-[#F4F1DE]/90 leading-relaxed mb-4 space-y-2">
            <li>
              Un expert-comptable envoie a un restaurateur une simulation d
              economies basee sur ses tarifs publics — pas une plaquette.
            </li>
            <li>
              Un photographe retouche 3 photos existantes de la vitrine du
              commercant et les envoie, pretes a publier.
            </li>
            <li>
              Une agence de recrutement reecrit une vraie annonce d emploi
              publiee par le prospect, en version qui donne envie de postuler.
            </li>
            <li>
              Un consultant IA automatise une tache visible du prospect et
              envoie la video du resultat — exactement ce que nous apprenons a
              faire en{" "}
              <Link href="/agents-ai" className="text-[#E07A5F] hover:underline">
                formation Agents IA
              </Link>
              .
            </li>
          </ul>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Dans chaque cas : la matiere premiere est publique (avis,
            annonces, tarifs, photos), le resultat est fini, et le message
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
              <strong>Images IA signalees comme illustrations</strong> : ne
              faites jamais passer une image generee pour une vraie
              realisation du prospect.
            </li>
            <li>
              <strong>Regles francaises de la prospection B2B</strong> :
              ecrire a un professionnel sur son adresse pro est permis (c est
              l interet legitime), a deux conditions : un rapport direct avec
              son activite, et une desinscription simple et respectee. Le
              &quot;repondez stop et je supprime tout&quot; n est pas une
              politesse, c est une obligation.
            </li>
            <li>
              <strong>Un seul message</strong> : la relance en rafale detruit
              exactement le capital de sympathie que la methode construit.
            </li>
          </ul>
        </section>

        {/* --- CONCLUSION --- */}
        <section>
          <h2 className="text-2xl font-mono font-bold text-[#FAFAFA] mt-12 mb-6">
            Ce qu il faut retenir
          </h2>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            La prospection inversee n est pas une astuce de plus. C est la
            rencontre de deux forces : l IA, qui fait tomber a presque zero le
            cout de production d un resultat personnalise, et une pile de
            principes psychologiques — reciprocite, possession, peur de
            perdre, preuve sociale, zero effort — qui transforment ce resultat
            en argument de vente autonome. La barriere n est plus le cout de
            production. C est de construire la chaine une fois, et d avoir la
            discipline de rester honnete a chaque etape.
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
                Quel outil pour automatiser votre chaine de prospection
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
        title="Envie de construire votre propre systeme ?"
        price="900"
        accentColor="#E07A5F"
      />
    </>
  );
}
