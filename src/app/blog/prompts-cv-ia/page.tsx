import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, Clock } from "lucide-react";
import { FinalCTA } from "@/components/FinalCTA";
import { PromptBlock } from "./client";

export const metadata: Metadata = {
  title: "Les 5 prompts pour faire passer votre CV (Claude, ATS, entretien)",
  description:
    "5 prompts Claude pour optimiser son CV : diagnostic recruteur, reecriture formule XYZ, test ATS, candidatures preparees et simulation d entretien. Avec les chiffres ATS en France.",
  keywords: [
    "prompt CV",
    "optimiser son CV avec l IA",
    "CV Claude",
    "CV ChatGPT",
    "ATS France",
    "formule XYZ",
    "lettre de motivation IA",
    "preparation entretien IA",
  ],
  alternates: {
    canonical: "/blog/prompts-cv-ia",
  },
  openGraph: {
    title: "Les 5 prompts pour faire passer votre CV | Growth Acceleration",
    description:
      "Diagnostic recruteur, formule XYZ, test ATS, 10 candidatures preparees et simulation d entretien : les 5 prompts, prets a copier.",
    type: "article",
  },
};

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Les 5 prompts pour faire passer votre CV",
  datePublished: "2026-09-28",
  dateModified: "2026-09-28",
  author: {
    "@id": "https://www.growth-acceleration.fr/#person",
  },
  publisher: {
    "@id": "https://www.growth-acceleration.fr/#organization",
  },
  url: "https://www.growth-acceleration.fr/blog/prompts-cv-ia",
  inLanguage: "fr",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.growth-acceleration.fr/blog/prompts-cv-ia",
  },
  description:
    "5 prompts pour optimiser son CV avec Claude : diagnostic recruteur, reecriture avec la formule XYZ de Google, test ATS, candidatures preparees dans Claude Cowork, simulation d entretien. Chiffres ATS France (APEC 2025, Hellowork 2024).",
  keywords:
    "prompt CV, optimiser son CV avec l IA, CV Claude, ATS France, formule XYZ, lettre de motivation IA, preparation entretien IA",
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
      name: "Prompts CV",
      item: "https://www.growth-acceleration.fr/blog/prompts-cv-ia",
    },
  ],
};

const PROMPT_DIAGNOSTIC = `Agis comme un recruteur senior de cette entreprise précise.

Analyse mon CV face à cette offre et donne-moi :
1. Un score de compatibilité sur 100, avec le détail de ce qui fait
   perdre des points.
2. Les 5 mots-clés de l'offre qui manquent dans mon CV.
3. Les 3 red flags qu'un recruteur repérerait en moins de 10 secondes.

Sois direct. Ne me ménage pas : je préfère l'entendre de toi que
de recevoir un refus sans explication.`;

const PROMPT_XYZ = `Réécris ma section expérience en intégrant naturellement les mots-clés
manquants et en supprimant les red flags que tu viens d'identifier.

Utilise la formule XYZ de Google : "j'ai accompli X, mesuré par Y,
en faisant Z."

Contraintes :
- Chaque ligne commence par un verbe d'action et contient un chiffre.
- Si je n'ai pas fourni de chiffre pour une expérience, ne l'invente
  pas : mets [CHIFFRE À COMPLÉTER] et dis-moi quelle donnée chercher.
- Garde le même nombre de lignes qu'avant, je ne veux pas rallonger
  mon CV.`;

const PROMPT_ATS = `Agis maintenant comme un logiciel ATS, puis comme un recruteur qui
lit 200 CV d'affilée.

1. Côté ATS : quelles informations de mon CV seraient mal extraites
   ou perdues ? (tableaux, colonnes, en-têtes, icônes, texte dans
   une image)
2. Côté humain : quelles sections seraient sautées dans les
   10 premières secondes de lecture ?
3. Réécris ces sections pour qu'elles accrochent l'œil, sans
   rallonger le CV.`;

const PROMPT_CANDIDATURES = `Voici 10 offres qui m'intéressent [collez les descriptions ou les liens].

Pour chacune :
1. Adapte mon CV optimisé aux mots-clés de cette annonce précise.
2. Rédige une lettre de motivation personnalisée qui cite un élément
   concret de l'entreprise (un produit, une actualité, un chiffre).
3. Donne-moi un score de compatibilité sur 100 pour que je sache par
   laquelle commencer.

Range tout dans un dossier "Candidatures", un sous-dossier par
entreprise, avec un fichier recap.md qui liste les 10 offres classées
par score.`;

const PROMPT_ENTRETIEN = `Tu vas me faire passer l'entretien pour cette offre.

D'abord, à partir de mon CV réécrit, liste les 5 questions qu'un
recruteur me posera à coup sûr, et surtout les 3 questions
désagréables sur mes points faibles (trous dans le parcours,
expérience courte, changement de voie).

Ensuite, pose-les-moi une par une. Attends ma réponse avant de
passer à la suivante. Après chaque réponse, dis-moi en deux lignes
ce qui était bon et ce qu'un recruteur aurait retenu contre moi.

Ne sois pas complaisant.`;

const h2 = "text-2xl font-mono font-bold text-[#FAFAFA] mt-12 mb-6";
const h3 = "text-xl font-mono font-bold text-[#E07A5F] mt-8 mb-4";
const p = "text-[#F4F1DE]/90 leading-relaxed mb-4";

export default function PromptsCvPage() {
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
            <strong>Les 5 prompts pour faire passer votre CV</strong> est un
            guide pratique pour optimiser un CV avec Claude (ou n importe quel
            assistant conversationnel), dans une seule conversation : 1.
            diagnostic recruteur (score sur 100, 5 mots-cles manquants, 3 red
            flags), 2. reecriture de l experience avec la formule XYZ de
            Laszlo Bock (Google) sans chiffre invente, 3. test ATS et lecture
            humaine en 10 secondes, 4. dix candidatures preparees dans Claude
            Cowork (CV adapte, lettre, score, recap.md), 5. simulation d
            entretien. En France, environ 27 % des entreprises utilisent un
            ATS, mais 68 a 75 % de celles de plus de 200 salaries (APEC 2025,
            Hellowork 2024). <strong>Growth Acceleration</strong> forme a l
            usage pratique de l IA a Paris, notamment avec la{" "}
            <Link href="/claude-code" className="text-[#E07A5F] hover:underline">
              formation Claude Code
            </Link>
            .
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
          <li className="text-[#F4F1DE]">Prompts CV</li>
        </ol>
      </nav>

      {/* ARTICLE HEADER */}
      <header className="max-w-4xl mx-auto px-4 pb-8">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-2 py-0.5 bg-[#E07A5F]/20 text-[#E07A5F] text-xs font-mono rounded">
            Prompts
          </span>
          <div className="flex items-center gap-1 text-[#A9A9A9] text-xs">
            <Calendar className="w-3 h-3" />
            <span>28 septembre 2026</span>
          </div>
          <div className="flex items-center gap-1 text-[#A9A9A9] text-xs">
            <Clock className="w-3 h-3" />
            <span>8 min de lecture</span>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-mono font-bold text-[#FAFAFA] mb-6">
          Les 5 prompts pour faire passer votre CV
        </h1>

        <p className="text-lg text-[#F4F1DE]/80 leading-relaxed max-w-3xl">
          Cinq prompts prêts à copier pour passer de l&apos;offre à
          l&apos;entretien, avec ce qu&apos;il faut faire de chaque réponse, les
          erreurs qui ruinent le résultat, et les chiffres réels du marché
          français.
        </p>
      </header>

      {/* ARTICLE CONTENT */}
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-[#2D2A2E] border-l-2 border-[#E07A5F] rounded-r-lg p-6 mb-4">
          <p className="text-[#A9A9A9] text-xs font-mono uppercase tracking-wider mb-2">
            &gt; Avant de commencer
          </p>
          <p className="text-[#F4F1DE]/90 leading-relaxed">
            Ouvrez <strong>une seule conversation</strong> avec Claude et
            faites-y les quatre premiers prompts à la suite. Chaque prompt
            s&apos;appuie sur la réponse du précédent. Si vous ouvrez une
            nouvelle conversation à chaque fois, vous perdez tout le contexte et
            les résultats
            s&apos;effondrent.
          </p>
        </div>

        {/* --- PROMPT 1 --- */}
        <section>
          <h2 className={h2}>Prompt 1 — Le diagnostic</h2>
          <p className={p}>Envoyez votre CV et l&apos;offre à Claude, puis collez ceci.</p>
          <PromptBlock title="Diagnostic recruteur" prompt={PROMPT_DIAGNOSTIC} />
          <p className={p}>
            <strong>Pourquoi ça marche :</strong> vous forcez Claude à adopter
            un point de vue adverse. Sans ce cadrage, il vous dira que votre CV
            est très bien — ce qui ne vous aide en rien.
          </p>
          <p className={p}>
            <strong>Ce que vous faites de la réponse :</strong> ne corrigez
            rien tout de suite. Notez le score de départ, vous le comparerez à
            la fin. Et lisez les red flags deux fois : ce sont souvent des
            choses que vous saviez et que vous espériez faire passer.
          </p>
        </section>

        {/* --- PROMPT 2 --- */}
        <section>
          <h2 className={h2}>Prompt 2 — La réécriture</h2>
          <p className={p}>Restez dans la même conversation.</p>
          <PromptBlock title="Réécriture avec la formule XYZ" prompt={PROMPT_XYZ} />
          <p className={p}>
            <strong>La formule XYZ, expliquée :</strong> elle vient de Laszlo
            Bock, ancien responsable des ressources humaines de Google. Au lieu
            d&apos;écrire « responsable de la communication de
            l&apos;association », vous écrivez « augmenté l&apos;audience de
            l&apos;association de 40 % en six mois en lançant une newsletter
            hebdomadaire ». Même expérience, mais la seconde version prouve
            quelque chose.
          </p>
          <p className={p}>
            <strong>Le garde-fou le plus important du guide :</strong> la
            consigne « ne l&apos;invente pas ». Sans elle, Claude comblera les
            trous avec des chiffres plausibles — et vous vous retrouverez
            en entretien à défendre des résultats que vous n&apos;avez jamais
            obtenus.
            C&apos;est la faute qui coûte le plus cher.
          </p>
        </section>

        {/* --- PROMPT 3 --- */}
        <section>
          <h2 className={h2}>Prompt 3 — Le passage du filtre automatique</h2>
          <PromptBlock title="Test ATS" prompt={PROMPT_ATS} />

          <h3 className={h3}>Ce que valent vraiment les ATS en France</h3>
          <p className={p}>
            On lit partout que « 75 % des CV sont rejetés par un robot ». En
            France, la réalité est plus nuancée — et ça change votre stratégie.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-[#FAFAFA]/10">
              <thead>
                <tr className="bg-[#2D2A2E] text-left">
                  <th className="p-3 font-mono text-[#FAFAFA]">Type d&apos;entreprise</th>
                  <th className="p-3 font-mono text-[#FAFAFA]">Utilise un ATS</th>
                  <th className="p-3 font-mono text-[#FAFAFA]">Ce que ça implique</th>
                </tr>
              </thead>
              <tbody className="text-[#F4F1DE]/90">
                <tr className="border-t border-[#FAFAFA]/10">
                  <td className="p-3">Toutes entreprises confondues</td>
                  <td className="p-3 font-mono text-[#E07A5F]">~27 %</td>
                  <td className="p-3">Un humain lit souvent votre CV directement</td>
                </tr>
                <tr className="border-t border-[#FAFAFA]/10">
                  <td className="p-3">Plus de 200 salariés</td>
                  <td className="p-3 font-mono text-[#E07A5F]">68 à 75 %</td>
                  <td className="p-3">
                    Banques, conseil, grands groupes tech : le filtre est réel
                  </td>
                </tr>
                <tr className="border-t border-[#FAFAFA]/10">
                  <td className="p-3">Recruteurs (usage ou projet)</td>
                  <td className="p-3 font-mono text-[#E07A5F]">~80 %</td>
                  <td className="p-3">La tendance monte vite, c&apos;était 64 % en 2018</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={p}>
            <strong>Traduction concrète :</strong> si vous visez Goldman Sachs,
            McKinsey ou un grand groupe, le prompt 3 est indispensable. Si vous
            visez une startup de quinze personnes, votre CV sera lu par un
            humain
            — et une mise en page soignée compte plus que les mots-clés.
          </p>
          <p className="text-[#A9A9A9] text-sm mb-4">
            Sources : APEC 2025 pour le taux global, Hellowork 2024 pour
            l&apos;évolution des pratiques de recrutement.
          </p>

          <h3 className={h3}>Trois pièges de format qui cassent l&apos;extraction</h3>
          <ul className="list-disc list-inside text-[#F4F1DE]/90 leading-relaxed mb-4 space-y-2">
            <li>
              <strong>Les CV créés sur Canva</strong> exportent souvent le texte
              dans des blocs que l&apos;ATS lit mal ou dans le désordre.
              Vérifiez en ouvrant votre PDF et en tentant de sélectionner
              votre texte : s&apos;il ne se sélectionne pas ligne par ligne,
              l&apos;ATS aura le même problème.
            </li>
            <li>
              <strong>Les colonnes et les tableaux</strong> sont lus de gauche à
              droite d&apos;un bord à l&apos;autre. Votre colonne
              « compétences » à gauche peut se retrouver mélangée à votre
              expérience de droite.
            </li>
            <li>
              <strong>Les informations en en-tête ou en pied de page</strong>{" "}
              sont fréquemment ignorées. Ne mettez jamais votre téléphone ou votre
              email à ces endroits.
            </li>
          </ul>
        </section>

        {/* --- PROMPT 4 --- */}
        <section>
          <h2 className={h2}>Prompt 4 — Les candidatures préparées</h2>
          <p className={p}>
            Celui-ci se fait dans Claude Cowork, qui travaille avec vos
            fichiers.
          </p>
          <PromptBlock title="Dix candidatures pendant la nuit" prompt={PROMPT_CANDIDATURES} />
          <p className={p}>
            Vous vous réveillez avec dix dossiers prêts, classés par
            probabilité. Il vous reste à relire et à envoyer.
          </p>
          <p className={p}>
            <strong>Pourquoi ne pas laisser l&apos;IA postuler à votre
            place :</strong> les conditions d&apos;utilisation de LinkedIn
            interdisent explicitement l&apos;automatisation de la navigation.
            Un compte qui enchaîne dix candidatures au rythme d&apos;une
            machine se fait repérer, et les sanctions vont de la restriction
            temporaire au bannissement définitif. Perdre son compte LinkedIn
            pendant une recherche d&apos;emploi ou de stage, c&apos;est perdre son réseau et son
            historique. Le gain de temps réel est dans la personnalisation, pas
            dans le clic final — gardez-le pour vous.
          </p>
        </section>

        {/* --- PROMPT 5 --- */}
        <section>
          <h2 className={h2}>Prompt 5 — La préparation à l&apos;entretien</h2>
          <p className={p}>
            Le plus souvent oublié. C&apos;est pourtant celui qui transforme
            un entretien décroché en entretien réussi.
          </p>
          <PromptBlock title="Simulation d'entretien" prompt={PROMPT_ENTRETIEN} />
          <p className={p}>
            Faites-le à voix haute, en tapant vos réponses comme vous les diriez.
            L&apos;objectif n&apos;est pas d&apos;avoir les bonnes réponses
            écrites, c&apos;est d&apos;avoir déjà entendu les questions qui
            piquent.
          </p>
        </section>

        {/* --- ERREURS --- */}
        <section>
          <h2 className={h2}>Les quatre erreurs qui ruinent le résultat</h2>
          <ol className="list-decimal list-inside text-[#F4F1DE]/90 leading-relaxed mb-4 space-y-3">
            <li>
              <strong>Changer de conversation entre les prompts.</strong> Tout
              le système repose sur le fait que Claude garde en mémoire votre CV,
              l&apos;offre et son propre diagnostic.
            </li>
            <li>
              <strong>Accepter la première réécriture.</strong> Relancez avec «
              c&apos;est trop générique, sois plus précis sur [X] ». La
              deuxième version est presque toujours meilleure.
            </li>
            <li>
              <strong>Laisser passer un chiffre inventé.</strong> Relisez chaque
              donnée de votre CV final. Si vous ne pouvez pas la défendre en
              entretien, supprimez-la.
            </li>
            <li>
              <strong>Envoyer le même CV partout.</strong> Le prompt 1 se refait
              pour chaque offre — c&apos;est cinq minutes par candidature, et
              c&apos;est exactement ce qui fait la différence.
            </li>
          </ol>
          <p className="text-[#A9A9A9] text-sm mt-8">
            Les chiffres sur les ATS sont issus des études APEC 2025 et
            Hellowork 2024. La formule XYZ est attribuée à
            Laszlo Bock, ancien SVP People Operations de Google. Les prompts
            ont été écrits pour Claude mais fonctionnent avec n&apos;importe
            quel assistant conversationnel.
          </p>
        </section>

        {/* --- ARTICLES LIES --- */}
        <section>
          <h2 className={h2}>Pour aller plus loin</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/blog/formation-ia-debutant"
              className="block bg-[#2D2A2E]/50 border border-[#FAFAFA]/10 rounded-lg p-4 hover:border-[#E07A5F]/50 transition-all"
            >
              <p className="text-[#FAFAFA] font-mono font-bold text-sm mb-1">
                Formation IA debutant
              </p>
              <p className="text-[#A9A9A9] text-xs">
                Par ou commencer avec l IA en 2026
              </p>
            </Link>
            <Link
              href="/fiches"
              className="block bg-[#2D2A2E]/50 border border-[#FAFAFA]/10 rounded-lg p-4 hover:border-[#E07A5F]/50 transition-all"
            >
              <p className="text-[#FAFAFA] font-mono font-bold text-sm mb-1">
                Fiches pratiques
              </p>
              <p className="text-[#A9A9A9] text-xs">
                Recettes et checklists IA pretes a l emploi
              </p>
            </Link>
            <Link
              href="/claude-code"
              className="block bg-[#2D2A2E]/50 border border-[#E07A5F]/30 rounded-lg p-4 hover:border-[#E07A5F]/50 transition-all md:col-span-2"
            >
              <p className="text-[#E07A5F] font-mono font-bold text-sm mb-1">
                Formation Claude Code
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
        title="Envie d aller plus loin avec Claude ?"
        price="900"
        accentColor="#E07A5F"
      />
    </>
  );
}
