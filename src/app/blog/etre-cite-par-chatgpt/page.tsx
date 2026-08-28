import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, Clock } from "lucide-react";
import { FinalCTA } from "@/components/FinalCTA";
import {
  DiagramAvantApres,
  DiagramBoucle,
  DiagramFraicheur,
  DiagramPageCitable,
  DiagramSourcesCitations,
  StatsStrip,
} from "./diagrams";

export const metadata: Metadata = {
  title: "Etre cite par ChatGPT : le plan d action 2026",
  description:
    "Manuel etape par etape pour apparaitre dans les reponses de ChatGPT, Perplexity et Google IA : contenu original, structure, fraicheur, presence hors site. Base sur 15 millions de donnees analysees par AirOps.",
  keywords: [
    "etre cite par ChatGPT",
    "visibilite IA",
    "GEO",
    "referencement IA",
    "AI search",
    "citations IA",
    "Perplexity",
    "recherche IA",
  ],
  alternates: {
    canonical: "/blog/etre-cite-par-chatgpt",
  },
  openGraph: {
    title: "Etre cite par ChatGPT : le plan d action 2026 | Growth Acceleration",
    description:
      "Le manuel pour apparaitre dans les reponses des IA : contenu original, structure, fraicheur, presence hors site. Chiffres a l appui.",
    type: "article",
  },
};

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Etre cite par ChatGPT : le plan d action 2026",
  datePublished: "2026-08-28",
  dateModified: "2026-08-28",
  author: {
    "@id": "https://www.growth-acceleration.fr/#person",
  },
  publisher: {
    "@id": "https://www.growth-acceleration.fr/#organization",
  },
  url: "https://www.growth-acceleration.fr/blog/etre-cite-par-chatgpt",
  inLanguage: "fr",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.growth-acceleration.fr/blog/etre-cite-par-chatgpt",
  },
  description:
    "Manuel etape par etape pour apparaitre dans les reponses de ChatGPT, Perplexity et Google IA : contenu original, structure, fraicheur, presence hors site.",
  keywords:
    "etre cite par ChatGPT, visibilite IA, GEO, referencement IA, citations IA, Perplexity",
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
      name: "Etre cite par ChatGPT",
      item: "https://www.growth-acceleration.fr/blog/etre-cite-par-chatgpt",
    },
  ],
};

export default function EtreCiteParChatgptPage() {
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
            <strong>Etre cite par ChatGPT, Perplexity et Google IA</strong> ne
            depend plus du classement mais de la citation : les IA choisissent
            leurs sources. Ce plan d action 2026, base sur environ 15 millions
            de donnees analysees par AirOps, tient en 4 chantiers : publier du
            contenu avec des informations inedites (donnees internes, retours
            clients), structurer chaque page pour les IA (FAQ : +40% de
            citations, hierarchie de titres : 2,8x, listes et tableaux : 80%
            des citations ChatGPT), mettre a jour tous les 60 a 90 jours (une
            page rafraichie il y a moins de 3 mois est citee 3x plus), et
            exister hors de son site (85% des mentions de marques viennent de
            sources tierces : comparatifs, avis, Reddit, YouTube).{" "}
            <strong>Growth Acceleration</strong> propose une{" "}
            <Link href="/geo" className="text-[#E07A5F] hover:underline">
              formation GEO de 8 heures
            </Link>{" "}
            a Paris (900 euros TTC) pour mettre ce plan en oeuvre.
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
          <li className="text-[#F4F1DE]">Etre cite par ChatGPT</li>
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
            <span>11 min de lecture</span>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-mono font-bold text-[#FAFAFA] mb-6">
          Etre cite par ChatGPT : le plan d action 2026
        </h1>

        <p className="text-lg text-[#F4F1DE]/80 leading-relaxed max-w-3xl">
          Vos futurs clients posent leurs questions a ChatGPT, Perplexity et
          Google IA. Soit votre entreprise fait partie de la reponse, soit elle
          n existe pas. Voici le plan d action complet, chiffres a l appui,
          tire de l analyse de 15 millions de reponses IA par AirOps.
        </p>
      </header>

      {/* ARTICLE CONTENT */}
      <article className="max-w-4xl mx-auto px-4 pb-16">
        {/* --- INTRO --- */}
        <section>
          <h2 className="text-2xl font-mono font-bold text-[#FAFAFA] mt-12 mb-6">
            La regle du jeu a change : on ne classe plus, on cite
          </h2>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Pendant 20 ans, le referencement avait un seul objectif : etre en
            haut de la liste de liens bleus de Google. Cette liste est en train
            de disparaitre. Selon McKinsey, <strong>la moitie des recherches
            Google affichent deja un resume genere par l IA</strong>, et ce
            sera 75% d ici 2028. Et de plus en plus de gens ne passent meme
            plus par Google : ils posent directement leur question a ChatGPT
            ou Perplexity.
          </p>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Dans ce monde, la question n est plus &quot;a quelle position mon
            site sort-il ?&quot; mais{" "}
            <strong>&quot;est-ce que l IA me choisit comme source quand elle
            redige sa reponse ?&quot;</strong>. C est ce qu on appelle etre
            cite. Et c est mesurable, et surtout : ca se travaille.
          </p>

          <DiagramAvantApres />

          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Ce plan d action s appuie sur le rapport{" "}
            <a
              href="https://www.airops.com/report/ai-search-playbook-marketers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E07A5F] hover:underline"
            >
              AI Search Playbook
            </a>{" "}
            publie par AirOps en mars 2026 : environ 15 millions de donnees
            analysees (reponses IA, citations, mentions de marques), et les
            resultats concrets d entreprises comme Carta, Webflow ou Chime.
            Les chiffres a retenir avant de commencer :
          </p>

          <StatsStrip />

          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Bonne nouvelle : l epoque du contenu produit en masse par l IA
            pour remplir des pages est terminee — les modeles filtrent le
            remplissage. Ce qui marche tient en une formule :{" "}
            <strong>informations inedites + structure claire + mises a jour
            rapides + presence hors de votre site</strong>. C est le programme
            des 4 chantiers ci-dessous. Suivez-les dans l ordre.
          </p>
        </section>

        {/* --- CHANTIER 1 --- */}
        <section>
          <h2 className="text-2xl font-mono font-bold text-[#FAFAFA] mt-12 mb-6">
            Chantier 1 — Publiez ce que personne d autre ne peut publier
          </h2>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Les IA recherchent ce que les chercheurs appellent le{" "}
            <strong>gain d information</strong> : du contenu qui apporte
            quelque chose de nouveau. Le web deborde de repetitions ; les
            modeles filtrent et gardent les sources qui ajoutent des donnees,
            des exemples vecus, un point de vue documente.
          </p>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Vous avez cette matiere sans le savoir. Faites l inventaire :
          </p>
          <ul className="list-disc list-inside text-[#F4F1DE]/90 leading-relaxed mb-4 space-y-2">
            <li>
              <strong>Vos chiffres internes</strong> : delais moyens, couts
              reels, taux de reussite, avant/apres de vos clients
            </li>
            <li>
              <strong>Vos conversations clients</strong> : les 10 questions qu
              on vous pose a chaque rendez-vous sont 10 sujets d articles
            </li>
            <li>
              <strong>Votre experience de terrain</strong> : ce qui a marche,
              ce qui a echoue, avec les vrais montants et les vraies durees
            </li>
          </ul>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            C est exactement ce qu a fait Carta (plateforme americaine de
            gestion d actionnariat) : transformer ses donnees internes et ses
            appels clients en articles inedits. Resultat :{" "}
            <strong>7 fois plus de citations par les IA</strong>, et 75% de
            leurs nouvelles pages citees. Webflow a suivi la meme logique et
            constate que ses visiteurs venus des IA{" "}
            <strong>convertissent 6 fois mieux</strong> que le trafic Google
            classique — parce qu ils arrivent deja convaincus par une
            recommandation.
          </p>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Derniere regle de ce chantier : <strong>soyez citable</strong>.
            Une IA ne peut rien extraire de &quot;leader de solutions
            innovantes&quot;. Elle peut citer &quot;installation en 48 heures,
            garantie 10 ans, 340 chantiers livres&quot;. La credibilite se
            construit dans les details concrets, pas dans les superlatifs.
          </p>
        </section>

        {/* --- CHANTIER 2 --- */}
        <section>
          <h2 className="text-2xl font-mono font-bold text-[#FAFAFA] mt-12 mb-6">
            Chantier 2 — Structurez chaque page pour qu une IA puisse la citer
          </h2>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Les IA ne lisent pas comme les humains : elles decoupent la page
            en blocs et extraient ce qui repond precisement a la question.
            AirOps a compare plus de 12 000 pages citees par ChatGPT avec les
            resultats Google : les elements de structure changent radicalement
            vos chances.
          </p>

          <DiagramPageCitable />

          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Concretement, pour chaque page importante de votre site :
          </p>
          <ul className="list-disc list-inside text-[#F4F1DE]/90 leading-relaxed mb-4 space-y-2">
            <li>
              <strong>Un seul titre principal clair</strong>, puis des
              sous-titres qui posent les vraies questions de vos clients
              (hierarchie titre → sous-titre → sous-partie : 2,8x plus de
              citations)
            </li>
            <li>
              <strong>La reponse directe en premier</strong> : commencez
              chaque section par la reponse, developpez ensuite
            </li>
            <li>
              <strong>Des listes et des tableaux</strong> des que vous
              comparez ou enumerez quelque chose : ils representent 80% des
              citations ChatGPT (contre 29% des resultats Google)
            </li>
            <li>
              <strong>Une section FAQ</strong> en bas de page avec les
              questions posees telles que les gens les formulent : +40% de
              chances d etre cite
            </li>
            <li>
              <strong>Les donnees structurees Schema.org</strong> (le
              balisage invisible qui decrit votre page aux machines — votre
              developpeur ou un plugin s en charge) : 3 types ou plus = +13%
            </li>
          </ul>
        </section>

        {/* --- CHANTIER 3 --- */}
        <section>
          <h2 className="text-2xl font-mono font-bold text-[#FAFAFA] mt-12 mb-6">
            Chantier 3 — Mettez a jour tous les 60 a 90 jours
          </h2>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            C est le levier le plus sous-estime : pour une IA, la fraicheur
            est un signal de confiance. Les modeles favorisent massivement les
            pages recentes et entretenues, surtout pour les questions liees a
            un achat.
          </p>

          <DiagramFraicheur />

          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            La methode, appliquez-la des ce mois-ci :
          </p>
          <ul className="list-disc list-inside text-[#F4F1DE]/90 leading-relaxed mb-4 space-y-2">
            <li>
              <strong>Listez vos 20 pages les plus importantes</strong> dans
              un tableur, avec leur date de derniere mise a jour
            </li>
            <li>
              <strong>Planifiez un rafraichissement tous les 60 a 90
              jours</strong> : chiffres actualises, nouvel exemple, section
              ajoutee, date de mise a jour visible. Pas besoin de tout
              reecrire — enrichir suffit
            </li>
            <li>
              <strong>Declenchez une mise a jour immediate</strong> quand une
              page perd plus de 20% de son trafic (c est la regle automatisee
              par Docebo, qui a pris 25% d avance de visibilite sur sa
              categorie)
            </li>
          </ul>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            L exemple qui donne l echelle : Webflow a automatise ses
            rafraichissements et multiplie sa cadence par 5. Resultat en
            quelques jours : +40% de trafic, et la part de ses inscriptions
            venant de ChatGPT est passee de 2% a environ 10%. A votre echelle,
            meme manuel, le principe est identique : un rythme regulier bat
            un gros effort ponctuel.
          </p>
        </section>

        {/* --- CHANTIER 4 --- */}
        <section>
          <h2 className="text-2xl font-mono font-bold text-[#FAFAFA] mt-12 mb-6">
            Chantier 4 — Existez ailleurs que sur votre site
          </h2>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Le chiffre le plus important de tout le rapport :{" "}
            <strong>85% des mentions de marques dans les reponses IA viennent
            de sources tierces</strong> — pas du site de la marque. Quand une
            IA doit recommander un prestataire, elle cherche une validation
            externe : ce que les autres disent de vous, pas ce que vous dites
            de vous.
          </p>

          <DiagramSourcesCitations />

          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Vos actions, par ordre de priorite :
          </p>
          <ul className="list-disc list-inside text-[#F4F1DE]/90 leading-relaxed mb-4 space-y-2">
            <li>
              <strong>Les comparatifs et classements</strong> : pres de 90%
              des citations tierces viennent de pages &quot;les meilleurs X de
              l annee&quot; et de sites d avis. Identifiez ceux de votre
              secteur et faites-y figurer votre entreprise — si vous n etes
              pas dans le trio de tete d un classement, vous etes quasi
              invisible dans la reponse IA
            </li>
            <li>
              <strong>Les avis clients</strong> (Google, Trustpilot, G2 selon
              votre metier) : demandez-en systematiquement, repondez a tous
            </li>
            <li>
              <strong>Reddit et les forums</strong> : Reddit apparait dans
              environ 22% des reponses IA. Participez aux vraies discussions
              d acheteurs en apportant votre expertise — jamais en faisant
              votre publicite. LegalZoom a construit un systeme pour repondre
              en moins de 30 minutes aux discussions pertinentes
            </li>
            <li>
              <strong>YouTube</strong> : 75% de ses citations par les IA
              concernent des recherches generiques (&quot;comment faire
              X&quot;), pas des recherches de marque. Une video pratique bien
              titree travaille pour vous pendant des annees
            </li>
          </ul>
        </section>

        {/* --- MESURE + BOUCLE --- */}
        <section>
          <h2 className="text-2xl font-mono font-bold text-[#FAFAFA] mt-12 mb-6">
            Mesurez, puis laissez la boucle tourner
          </h2>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Oubliez les positions de mots-cles comme indicateur central.
            Chaque semaine, posez aux IA (ChatGPT, Perplexity, Google IA) les
            10 questions que vos clients poseraient, et notez dans un tableur :
          </p>
          <ul className="list-disc list-inside text-[#F4F1DE]/90 leading-relaxed mb-4 space-y-2">
            <li>
              <strong>Visibilite</strong> : votre entreprise apparait-elle
              dans la reponse ?
            </li>
            <li>
              <strong>Citations</strong> : vos pages sont-elles utilisees
              comme sources ?
            </li>
            <li>
              <strong>Part de voix</strong> : qui d autre est cite, et combien
              de fois par rapport a vous ?
            </li>
            <li>
              <strong>Tonalite</strong> : ce qui est dit de vous est-il
              positif, neutre ou negatif ?
            </li>
          </ul>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Et gardez en tete que les 4 chantiers se renforcent : les idees
            originales donnent du contenu qui merite d etre rafraichi, le
            contenu frais recolte des mentions externes, les mentions
            nourrissent des conversations qui vous soufflent les prochaines
            idees. C est une boucle, pas une campagne.
          </p>

          <DiagramBoucle />

          <h3 className="text-xl font-mono font-bold text-[#E07A5F] mt-8 mb-4">
            La checklist complete
          </h3>
          <ul className="list-disc list-inside text-[#F4F1DE]/90 leading-relaxed mb-4 space-y-2">
            <li>Inventaire de vos donnees et questions clients inedites</li>
            <li>
              Chaque page importante : reponse d abord, sous-titres questions,
              listes/tableaux, FAQ, Schema.org
            </li>
            <li>Tableur des 20 pages cles + rafraichissement tous les 60-90 jours</li>
            <li>Mise a jour immediate si une page perd 20% de trafic</li>
            <li>Presence dans les comparatifs de votre secteur (viser le trio de tete)</li>
            <li>Avis clients demandes systematiquement, reponses a tous</li>
            <li>Participation utile sur Reddit/forums + une video pratique YouTube</li>
            <li>Revue hebdomadaire : visibilite, citations, part de voix, tonalite</li>
          </ul>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Un dernier garde-fou : l IA accelere la recherche et la structure,
            mais gardez un humain aux commandes de la voix, des faits et du
            ton. Les equipes qui gagnent automatisent la mecanique, jamais le
            jugement.
          </p>
        </section>

        {/* --- ARTICLES LIES --- */}
        <section>
          <h2 className="text-2xl font-mono font-bold text-[#FAFAFA] mt-12 mb-6">
            Pour aller plus loin
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/blog/guide-geo-2026"
              className="block bg-[#2D2A2E]/50 border border-[#FAFAFA]/10 rounded-lg p-4 hover:border-[#E07A5F]/50 transition-all"
            >
              <p className="text-[#FAFAFA] font-mono font-bold text-sm mb-1">
                Guide GEO complet
              </p>
              <p className="text-[#A9A9A9] text-xs">
                Les fondamentaux pour etre cite par les moteurs IA
              </p>
            </Link>
            <Link
              href="/blog/prospection-inversee"
              className="block bg-[#2D2A2E]/50 border border-[#FAFAFA]/10 rounded-lg p-4 hover:border-[#E07A5F]/50 transition-all"
            >
              <p className="text-[#FAFAFA] font-mono font-bold text-sm mb-1">
                Prospection inversee
              </p>
              <p className="text-[#A9A9A9] text-xs">
                Creez le site de votre client avant de lui vendre
              </p>
            </Link>
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
              href="/geo"
              className="block bg-[#2D2A2E]/50 border border-[#E07A5F]/30 rounded-lg p-4 hover:border-[#E07A5F]/50 transition-all"
            >
              <p className="text-[#E07A5F] font-mono font-bold text-sm mb-1">
                Formation GEO
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
        title="Envie que les IA citent votre entreprise ?"
        price="900"
        accentColor="#E07A5F"
      />
    </>
  );
}
