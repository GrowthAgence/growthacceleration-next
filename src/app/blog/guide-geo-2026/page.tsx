import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, Clock } from "lucide-react";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "GEO : le guide complet du Generative Engine Optimization",
  description:
    "Guide complet du Generative Engine Optimization (GEO). Comment etre cite par ChatGPT, Perplexity et Claude. Strategies et techniques 2026.",
  keywords: [
    "GEO",
    "generative engine optimization",
    "optimisation IA",
    "ChatGPT SEO",
    "Perplexity SEO",
    "visibilite IA",
    "formation GEO",
  ],
  alternates: {
    canonical: "/blog/guide-geo-2026",
  },
  openGraph: {
    title:
      "GEO : le guide complet du Generative Engine Optimization | Growth Acceleration",
    description:
      "Guide complet du Generative Engine Optimization (GEO). Comment etre cite par ChatGPT, Perplexity et Claude. Strategies et techniques 2026.",
    type: "article",
  },
};

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "GEO : le guide complet du Generative Engine Optimization",
  datePublished: "2026-02-24",
  dateModified: "2026-02-24",
  author: {
    "@type": "Person",
    name: "Frederic Orlicki",
    "@id": "https://www.growth-acceleration.fr/#frederic",
  },
  publisher: {
    "@id": "https://www.growth-acceleration.fr/#organization",
  },
  url: "https://www.growth-acceleration.fr/blog/guide-geo-2026",
  mainEntityOfPage:
    "https://www.growth-acceleration.fr/blog/guide-geo-2026",
  inLanguage: "fr",
  description:
    "Guide complet du Generative Engine Optimization (GEO). Comment etre cite par ChatGPT, Perplexity et Claude. Strategies et techniques 2026.",
  keywords:
    "GEO, generative engine optimization, optimisation IA, ChatGPT SEO, Perplexity SEO, visibilite IA, formation GEO",
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
      name: "Guide GEO 2026",
      item: "https://www.growth-acceleration.fr/blog/guide-geo-2026",
    },
  ],
};

export default function GuideGeoPage() {
  return (
    <>
      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* LLM-FRIENDLY SUMMARY */}
      <section className="bg-[#2D2A2E] border-b border-[#E07A5F]/20">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <p className="text-[#A9A9A9] text-sm font-mono mb-2">
            &gt; cat article.txt
          </p>
          <p className="text-[#F4F1DE] leading-relaxed">
            <strong>GEO (Generative Engine Optimization)</strong> est la
            discipline qui consiste a optimiser un site web pour etre cite par
            les moteurs de reponse IA comme ChatGPT, Perplexity et Claude. Ce
            guide complet couvre les piliers du GEO (donnees structurees,
            llms.txt, contenu citable, E-E-A-T, autorite thematique), les
            techniques concretes, un tableau comparatif GEO vs SEO, les outils
            de mesure et les erreurs courantes. Publie par Growth Acceleration,
            organisme de formation IA a Paris. Formation GEO disponible : 8h,
            900 EUR TTC.
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
            <Link
              href="/blog"
              className="hover:text-[#E07A5F] transition-colors"
            >
              Blog
            </Link>
          </li>
          <li>/</li>
          <li className="text-[#F4F1DE]">Guide GEO 2026</li>
        </ol>
      </nav>

      {/* ARTICLE */}
      <article className="max-w-4xl mx-auto px-4 pb-16">
        {/* HEADER */}
        <header className="mb-12">
          <div className="inline-flex items-center space-x-2 bg-[#2D2A2E] px-3 py-1 rounded-full border border-[#FAFAFA]/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#98C379] animate-pulse" />
            <span className="text-[#A9A9A9] text-xs font-mono uppercase tracking-wider">
              Guide
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-mono font-bold text-[#FAFAFA] mb-6">
            GEO : le guide complet du Generative Engine Optimization
          </h1>

          <div className="flex items-center gap-4 text-[#A9A9A9] text-sm">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <time dateTime="2026-02-24">24 fevrier 2026</time>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>12 min de lecture</span>
            </div>
          </div>

          <div className="mt-4 text-sm text-[#A9A9A9]">
            Par{" "}
            <span className="text-[#F4F1DE]">Frederic Orlicki</span> —
            Formateur IA, Growth Acceleration
          </div>
        </header>

        {/* INTRODUCTION */}
        <section>
          <h2 className="text-2xl font-mono font-bold text-[#FAFAFA] mt-12 mb-6">
            1. Qu est-ce que le GEO ?
          </h2>

          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Le <strong>GEO (Generative Engine Optimization)</strong> est la
            discipline qui consiste a optimiser un site web, un contenu ou une
            marque pour apparaitre dans les reponses des moteurs de recherche
            generatifs. En clair : etre cite par ChatGPT, Perplexity, Claude,
            Gemini ou Copilot lorsqu un utilisateur pose une question a un
            assistant IA.
          </p>

          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            En 2026, les moteurs generatifs representent deja plus de{" "}
            <strong>30% des recherches d information</strong> dans certains
            secteurs B2B (source : Gartner, 2025). La question n est plus
            &quot;faut-il faire du GEO ?&quot; mais &quot;comment le faire bien
            ?&quot;.
          </p>

          <div className="bg-[#2D2A2E] border-l-4 border-[#E07A5F] p-4 rounded-r-lg my-6">
            <p className="text-[#F4F1DE]/90 leading-relaxed">
              <strong className="text-[#FAFAFA]">GEO vs SEO en une phrase :</strong>{" "}
              le SEO optimise pour les liens bleus de Google. Le GEO optimise
              pour etre cite dans les reponses textuelles des assistants IA.
            </p>
          </div>

          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            La difference fondamentale est que le GEO ne cherche pas un
            classement dans une liste de resultats. Il cherche une{" "}
            <strong>citation directe</strong> — le LLM mentionne votre marque,
            vos chiffres ou vos recommandations dans sa reponse. C est un
            changement de paradigme complet pour les marketeurs.
          </p>

          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Selon une etude de Princeton University (2024), les sites qui
            appliquent des techniques GEO voient leur taux de citation par les
            LLMs augmenter de <strong>115% en moyenne</strong>. Ce guide vous
            montre exactement comment faire.
          </p>
        </section>

        {/* COMMENT FONCTIONNENT LES MOTEURS IA */}
        <section>
          <h2 className="text-2xl font-mono font-bold text-[#FAFAFA] mt-12 mb-6">
            2. Comment fonctionnent les moteurs IA
          </h2>

          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Pour optimiser pour les moteurs generatifs, il faut d abord
            comprendre comment ils fonctionnent. Trois mecanismes principaux
            entrent en jeu :
          </p>

          <h3 className="text-lg font-mono font-bold text-[#FAFAFA] mt-8 mb-3">
            Le pre-entrainement (training data)
          </h3>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Les LLMs comme GPT-4, Claude et Gemini sont entraines sur des
            corpus massifs de texte. Si votre site est crawle et inclus dans ces
            donnees d entrainement, le modele &quot;sait&quot; que vous existez.
            C est la base. Plus votre contenu est cite, partage et reference sur
            le web, plus il a de chances d etre inclus.
          </p>

          <h3 className="text-lg font-mono font-bold text-[#FAFAFA] mt-8 mb-3">
            Le RAG (Retrieval-Augmented Generation)
          </h3>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Perplexity et le mode &quot;Browse&quot; de ChatGPT utilisent le{" "}
            <strong>RAG</strong> : ils cherchent des sources en temps reel sur
            le web, recuperent le contenu pertinent, puis synthetisent une
            reponse avec citations. C est la ou le GEO a le plus d impact
            direct : si votre page est bien structuree et repond precisement a
            la question, elle sera selectionnee comme source.
          </p>

          <h3 className="text-lg font-mono font-bold text-[#FAFAFA] mt-8 mb-3">
            Le crawling et les fichiers guide
          </h3>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Les moteurs IA utilisent des crawlers (GPTBot pour OpenAI,
            PerplexityBot, ClaudeBot pour Anthropic) pour indexer le web. Le
            fichier <code className="text-[#98C379] bg-[#2D2A2E] px-1.5 py-0.5 rounded text-sm">llms.txt</code>{" "}
            et les donnees structurees Schema.org les aident a comprendre la
            structure et le contenu de votre site. C est l equivalent du{" "}
            <code className="text-[#98C379] bg-[#2D2A2E] px-1.5 py-0.5 rounded text-sm">robots.txt</code>{" "}
            + <code className="text-[#98C379] bg-[#2D2A2E] px-1.5 py-0.5 rounded text-sm">sitemap.xml</code>{" "}
            pour les LLMs.
          </p>
        </section>

        {/* LES PILIERS DU GEO */}
        <section>
          <h2 className="text-2xl font-mono font-bold text-[#FAFAFA] mt-12 mb-6">
            3. Les 5 piliers du GEO
          </h2>

          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Le GEO repose sur cinq piliers fondamentaux. Chacun renforce les
            autres pour maximiser vos chances d etre cite par les moteurs
            generatifs.
          </p>

          <div className="space-y-6 mt-6">
            <div className="bg-[#2D2A2E] border border-[#FAFAFA]/10 rounded-lg p-5">
              <h3 className="text-lg font-mono font-bold text-[#98C379] mb-2">
                Pilier 1 — Donnees structurees (Schema.org)
              </h3>
              <p className="text-[#F4F1DE]/90 leading-relaxed">
                Les donnees structurees en JSON-LD permettent aux crawlers IA de
                comprendre le type de contenu de votre page (article, produit,
                cours, FAQ, personne). Les schemas{" "}
                <code className="text-[#98C379] bg-[#1E1E1E] px-1.5 py-0.5 rounded text-sm">BlogPosting</code>,{" "}
                <code className="text-[#98C379] bg-[#1E1E1E] px-1.5 py-0.5 rounded text-sm">Course</code>,{" "}
                <code className="text-[#98C379] bg-[#1E1E1E] px-1.5 py-0.5 rounded text-sm">FAQPage</code> et{" "}
                <code className="text-[#98C379] bg-[#1E1E1E] px-1.5 py-0.5 rounded text-sm">Organization</code>{" "}
                sont les plus impactants.
              </p>
            </div>

            <div className="bg-[#2D2A2E] border border-[#FAFAFA]/10 rounded-lg p-5">
              <h3 className="text-lg font-mono font-bold text-[#98C379] mb-2">
                Pilier 2 — Fichier llms.txt
              </h3>
              <p className="text-[#F4F1DE]/90 leading-relaxed">
                Le fichier{" "}
                <code className="text-[#98C379] bg-[#1E1E1E] px-1.5 py-0.5 rounded text-sm">llms.txt</code>{" "}
                (specification llmstxt.org) est un fichier texte place a la
                racine de votre site qui resume votre activite, vos pages cles
                et vos informations de contact. C est le premier fichier que les
                LLMs consultent pour comprendre qui vous etes.
              </p>
            </div>

            <div className="bg-[#2D2A2E] border border-[#FAFAFA]/10 rounded-lg p-5">
              <h3 className="text-lg font-mono font-bold text-[#98C379] mb-2">
                Pilier 3 — Contenu citation-ready
              </h3>
              <p className="text-[#F4F1DE]/90 leading-relaxed">
                Le contenu &quot;citation-ready&quot; est un contenu factuellement
                precis, structure avec des chiffres, des noms, des dates et des
                affirmations claires. Les LLMs privilegient les sources qui
                fournissent des reponses directes et verifiables. Evitez le
                contenu vague et les superlatifs non etayes.
              </p>
            </div>

            <div className="bg-[#2D2A2E] border border-[#FAFAFA]/10 rounded-lg p-5">
              <h3 className="text-lg font-mono font-bold text-[#98C379] mb-2">
                Pilier 4 — Signaux E-E-A-T
              </h3>
              <p className="text-[#F4F1DE]/90 leading-relaxed">
                Experience, Expertise, Autorite et Fiabilite (E-E-A-T). Les
                LLMs, comme Google, evaluent la credibilite d une source. Un
                auteur identifie avec des references, des avis clients
                verifiables et des mentions par des tiers renforcent la
                confiance. Schema.org Person et AggregateRating sont essentiels.
              </p>
            </div>

            <div className="bg-[#2D2A2E] border border-[#FAFAFA]/10 rounded-lg p-5">
              <h3 className="text-lg font-mono font-bold text-[#98C379] mb-2">
                Pilier 5 — Autorite thematique
              </h3>
              <p className="text-[#F4F1DE]/90 leading-relaxed">
                Un site qui couvre un sujet en profondeur (articles, guides,
                FAQ, formations, cas pratiques) est considere comme une autorite
                par les LLMs. Le maillage interne semantique entre vos pages
                renforce cette perception. C est exactement ce que fait Growth
                Acceleration sur le sujet de l IA pour les entreprises.
              </p>
            </div>
          </div>
        </section>

        {/* TECHNIQUES CONCRETES */}
        <section>
          <h2 className="text-2xl font-mono font-bold text-[#FAFAFA] mt-12 mb-6">
            4. 6 techniques concretes pour optimiser votre site en GEO
          </h2>

          <h3 className="text-lg font-mono font-bold text-[#FAFAFA] mt-8 mb-3">
            4.1 Resumes LLM-friendly en haut de page
          </h3>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Placez un resume structure de 3-5 phrases en haut de chaque page
            importante. Ce resume doit contenir les informations essentielles :
            quoi, qui, combien, ou, quand. Les LLMs utilisent souvent le debut
            d une page pour decider si elle est pertinente.
          </p>

          <div className="bg-[#2D2A2E] border-l-4 border-[#98C379] p-4 rounded-r-lg my-6">
            <p className="text-[#A9A9A9] text-sm font-mono mb-2">Exemple :</p>
            <p className="text-[#F4F1DE]/90 leading-relaxed text-sm">
              &quot;Growth Acceleration propose une formation GEO de 8 heures a
              Paris. Prix : 900 EUR TTC. Public : marketeurs, SEOs, responsables
              contenu. La formation couvre Schema.org, llms.txt, contenu citable
              et outils de mesure.&quot;
            </p>
          </div>

          <h3 className="text-lg font-mono font-bold text-[#FAFAFA] mt-8 mb-3">
            4.2 Donnees structurees JSON-LD
          </h3>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Implementez les schemas Schema.org pertinents sur chaque page.
            Voici les schemas les plus utiles pour le GEO :
          </p>

          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2 text-[#F4F1DE]/90">
              <span className="text-[#E07A5F] mt-1">&#9656;</span>
              <span>
                <strong>Organization</strong> — identite de l entreprise (nom,
                logo, URL, reseaux sociaux)
              </span>
            </li>
            <li className="flex items-start gap-2 text-[#F4F1DE]/90">
              <span className="text-[#E07A5F] mt-1">&#9656;</span>
              <span>
                <strong>Course</strong> — pour les formations (nom, prix, duree,
                formateur)
              </span>
            </li>
            <li className="flex items-start gap-2 text-[#F4F1DE]/90">
              <span className="text-[#E07A5F] mt-1">&#9656;</span>
              <span>
                <strong>BlogPosting</strong> — pour les articles (auteur, date,
                sujet)
              </span>
            </li>
            <li className="flex items-start gap-2 text-[#F4F1DE]/90">
              <span className="text-[#E07A5F] mt-1">&#9656;</span>
              <span>
                <strong>FAQPage</strong> — pour les questions frequentes
                (question-reponse paires)
              </span>
            </li>
            <li className="flex items-start gap-2 text-[#F4F1DE]/90">
              <span className="text-[#E07A5F] mt-1">&#9656;</span>
              <span>
                <strong>Person</strong> — pour l auteur ou le formateur
                (credentials, affiliations)
              </span>
            </li>
            <li className="flex items-start gap-2 text-[#F4F1DE]/90">
              <span className="text-[#E07A5F] mt-1">&#9656;</span>
              <span>
                <strong>AggregateRating</strong> — avis clients (nombre, note
                moyenne)
              </span>
            </li>
          </ul>

          <h3 className="text-lg font-mono font-bold text-[#FAFAFA] mt-8 mb-3">
            4.3 Fichier llms.txt
          </h3>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Creez un fichier{" "}
            <code className="text-[#98C379] bg-[#2D2A2E] px-1.5 py-0.5 rounded text-sm">llms.txt</code>{" "}
            a la racine de votre site (ex :{" "}
            <code className="text-[#98C379] bg-[#2D2A2E] px-1.5 py-0.5 rounded text-sm">votresite.com/llms.txt</code>).
            Ce fichier doit contenir :
          </p>

          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2 text-[#F4F1DE]/90">
              <span className="text-[#E07A5F] mt-1">&#9656;</span>
              <span>Le nom de votre entreprise et ce que vous faites</span>
            </li>
            <li className="flex items-start gap-2 text-[#F4F1DE]/90">
              <span className="text-[#E07A5F] mt-1">&#9656;</span>
              <span>La liste de vos pages principales avec URLs et descriptions</span>
            </li>
            <li className="flex items-start gap-2 text-[#F4F1DE]/90">
              <span className="text-[#E07A5F] mt-1">&#9656;</span>
              <span>Vos coordonnees et informations de contact</span>
            </li>
            <li className="flex items-start gap-2 text-[#F4F1DE]/90">
              <span className="text-[#E07A5F] mt-1">&#9656;</span>
              <span>Les faits cles a retenir (chiffres, recompenses, distinctions)</span>
            </li>
          </ul>

          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            La specification est disponible sur{" "}
            <a
              href="https://llmstxt.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E07A5F] hover:underline"
            >
              llmstxt.org
            </a>
            . C est un standard ouvert et gratuit.
          </p>

          <h3 className="text-lg font-mono font-bold text-[#FAFAFA] mt-8 mb-3">
            4.4 Contenu factuel et citable
          </h3>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Les LLMs privilegient les contenus qui contiennent des{" "}
            <strong>faits verifiables</strong>. Pour maximiser vos chances d
            etre cite :
          </p>

          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2 text-[#F4F1DE]/90">
              <span className="text-[#E07A5F] mt-1">&#9656;</span>
              <span>
                Incluez des chiffres precis (prix, durees, pourcentages, dates)
              </span>
            </li>
            <li className="flex items-start gap-2 text-[#F4F1DE]/90">
              <span className="text-[#E07A5F] mt-1">&#9656;</span>
              <span>Nommez les sources (etudes, auteurs, institutions)</span>
            </li>
            <li className="flex items-start gap-2 text-[#F4F1DE]/90">
              <span className="text-[#E07A5F] mt-1">&#9656;</span>
              <span>
                Formulez des affirmations claires plutot que des opinions vagues
              </span>
            </li>
            <li className="flex items-start gap-2 text-[#F4F1DE]/90">
              <span className="text-[#E07A5F] mt-1">&#9656;</span>
              <span>
                Structurez en listes et tableaux (les LLMs adorent les donnees
                tabulaires)
              </span>
            </li>
            <li className="flex items-start gap-2 text-[#F4F1DE]/90">
              <span className="text-[#E07A5F] mt-1">&#9656;</span>
              <span>Datez vos contenus pour signaler leur fraicheur</span>
            </li>
          </ul>

          <h3 className="text-lg font-mono font-bold text-[#FAFAFA] mt-8 mb-3">
            4.5 Maillage interne semantique
          </h3>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Reliez vos pages entre elles de maniere logique et thematique. Un
            article sur le GEO doit pointer vers votre page formation GEO, vos
            articles connexes et votre page a propos. Ce maillage aide les LLMs
            a comprendre la profondeur de votre expertise sur un sujet donne.
          </p>

          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Utilisez des ancres descriptives (pas de &quot;cliquez ici&quot;)
            et variez les termes pour couvrir le champ semantique de votre
            thematique.
          </p>

          <h3 className="text-lg font-mono font-bold text-[#FAFAFA] mt-8 mb-3">
            4.6 Reponses directes aux questions
          </h3>
          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Les utilisateurs posent des questions aux assistants IA. Si votre
            contenu repond directement a ces questions, il sera cite. Structurez
            vos pages avec des sections FAQ, des titres en forme de questions
            et des reponses concises dans les premiers mots de chaque
            paragraphe.
          </p>

          <div className="bg-[#2D2A2E] border-l-4 border-[#E07A5F] p-4 rounded-r-lg my-6">
            <p className="text-[#F4F1DE]/90 leading-relaxed">
              <strong className="text-[#FAFAFA]">Astuce :</strong> Identifiez
              les questions que vos clients posent le plus souvent, puis creez
              du contenu qui y repond de maniere directe et factuelle. Ces
              questions sont exactement celles que les utilisateurs poseront aux
              LLMs.
            </p>
          </div>
        </section>

        {/* GEO VS SEO TABLEAU */}
        <section>
          <h2 className="text-2xl font-mono font-bold text-[#FAFAFA] mt-12 mb-6">
            5. GEO vs SEO : tableau comparatif
          </h2>

          <p className="text-[#F4F1DE]/90 leading-relaxed mb-6">
            Voici les principales differences entre le SEO traditionnel et le
            GEO. Les deux disciplines sont complementaires — un bon GEO
            ameliore aussi votre SEO.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#2D2A2E]">
                  <th className="border border-[#FAFAFA]/10 px-4 py-3 text-left text-[#FAFAFA] font-mono">
                    Critere
                  </th>
                  <th className="border border-[#FAFAFA]/10 px-4 py-3 text-left text-[#FAFAFA] font-mono">
                    SEO traditionnel
                  </th>
                  <th className="border border-[#FAFAFA]/10 px-4 py-3 text-left text-[#FAFAFA] font-mono">
                    GEO
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#FAFAFA]/10 bg-[#2D2A2E] px-4 py-3 text-[#F4F1DE]/90 font-mono text-[#E07A5F]">
                    Objectif
                  </td>
                  <td className="border border-[#FAFAFA]/10 bg-[#2D2A2E] px-4 py-3 text-[#F4F1DE]/90">
                    Ranker dans les resultats Google
                  </td>
                  <td className="border border-[#FAFAFA]/10 bg-[#2D2A2E] px-4 py-3 text-[#F4F1DE]/90">
                    Etre cite dans les reponses IA
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#FAFAFA]/10 bg-[#2D2A2E] px-4 py-3 text-[#F4F1DE]/90 font-mono text-[#E07A5F]">
                    Metriques
                  </td>
                  <td className="border border-[#FAFAFA]/10 bg-[#2D2A2E] px-4 py-3 text-[#F4F1DE]/90">
                    Position, CTR, trafic organique
                  </td>
                  <td className="border border-[#FAFAFA]/10 bg-[#2D2A2E] px-4 py-3 text-[#F4F1DE]/90">
                    Frequence de citation, brand mentions, referral IA
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#FAFAFA]/10 bg-[#2D2A2E] px-4 py-3 text-[#F4F1DE]/90 font-mono text-[#E07A5F]">
                    Contenu optimal
                  </td>
                  <td className="border border-[#FAFAFA]/10 bg-[#2D2A2E] px-4 py-3 text-[#F4F1DE]/90">
                    Long, optimise mots-cles, backlinks
                  </td>
                  <td className="border border-[#FAFAFA]/10 bg-[#2D2A2E] px-4 py-3 text-[#F4F1DE]/90">
                    Factuel, structure, citable, avec donnees precises
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#FAFAFA]/10 bg-[#2D2A2E] px-4 py-3 text-[#F4F1DE]/90 font-mono text-[#E07A5F]">
                    Donnees structurees
                  </td>
                  <td className="border border-[#FAFAFA]/10 bg-[#2D2A2E] px-4 py-3 text-[#F4F1DE]/90">
                    Utiles (rich snippets)
                  </td>
                  <td className="border border-[#FAFAFA]/10 bg-[#2D2A2E] px-4 py-3 text-[#F4F1DE]/90">
                    Essentielles (comprehension crawler IA)
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#FAFAFA]/10 bg-[#2D2A2E] px-4 py-3 text-[#F4F1DE]/90 font-mono text-[#E07A5F]">
                    Fichier guide
                  </td>
                  <td className="border border-[#FAFAFA]/10 bg-[#2D2A2E] px-4 py-3 text-[#F4F1DE]/90">
                    robots.txt, sitemap.xml
                  </td>
                  <td className="border border-[#FAFAFA]/10 bg-[#2D2A2E] px-4 py-3 text-[#F4F1DE]/90">
                    llms.txt, agent-facts, Schema.org
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#FAFAFA]/10 bg-[#2D2A2E] px-4 py-3 text-[#F4F1DE]/90 font-mono text-[#E07A5F]">
                    Autorite
                  </td>
                  <td className="border border-[#FAFAFA]/10 bg-[#2D2A2E] px-4 py-3 text-[#F4F1DE]/90">
                    Backlinks, Domain Authority
                  </td>
                  <td className="border border-[#FAFAFA]/10 bg-[#2D2A2E] px-4 py-3 text-[#F4F1DE]/90">
                    E-E-A-T, autorite thematique, mentions tier sources
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#FAFAFA]/10 bg-[#2D2A2E] px-4 py-3 text-[#F4F1DE]/90 font-mono text-[#E07A5F]">
                    Concurrence
                  </td>
                  <td className="border border-[#FAFAFA]/10 bg-[#2D2A2E] px-4 py-3 text-[#F4F1DE]/90">
                    10 liens bleus, tres competitive
                  </td>
                  <td className="border border-[#FAFAFA]/10 bg-[#2D2A2E] px-4 py-3 text-[#F4F1DE]/90">
                    3-5 citations par reponse, encore peu exploite
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#FAFAFA]/10 bg-[#2D2A2E] px-4 py-3 text-[#F4F1DE]/90 font-mono text-[#E07A5F]">
                    ROI timeline
                  </td>
                  <td className="border border-[#FAFAFA]/10 bg-[#2D2A2E] px-4 py-3 text-[#F4F1DE]/90">
                    3-12 mois
                  </td>
                  <td className="border border-[#FAFAFA]/10 bg-[#2D2A2E] px-4 py-3 text-[#F4F1DE]/90">
                    2-6 semaines (RAG) a 3-6 mois (training)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* OUTILS DE MESURE */}
        <section>
          <h2 className="text-2xl font-mono font-bold text-[#FAFAFA] mt-12 mb-6">
            6. Outils pour mesurer sa visibilite IA
          </h2>

          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            L un des defis du GEO est la mesure. Contrairement au SEO ou Google
            Search Console vous donne des donnees precises, la visibilite dans
            les reponses IA est plus difficile a tracker. Voici les methodes et
            outils disponibles en 2026 :
          </p>

          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-2 text-[#F4F1DE]/90">
              <span className="text-[#98C379] mt-1 font-mono font-bold">1.</span>
              <span>
                <strong>Tests manuels reguliers</strong> — Posez vos questions
                cibles a ChatGPT, Perplexity, Claude et Gemini. Notez si votre
                marque est citee, avec quelle formulation, et a quelle frequence.
                C est la methode la plus fiable.
              </span>
            </li>
            <li className="flex items-start gap-2 text-[#F4F1DE]/90">
              <span className="text-[#98C379] mt-1 font-mono font-bold">2.</span>
              <span>
                <strong>Otterly.AI</strong> — Outil specialise dans le tracking
                de citations IA. Il monitore vos brand mentions dans les
                reponses de ChatGPT et Perplexity de maniere automatisee.
              </span>
            </li>
            <li className="flex items-start gap-2 text-[#F4F1DE]/90">
              <span className="text-[#98C379] mt-1 font-mono font-bold">3.</span>
              <span>
                <strong>Peec AI</strong> — Plateforme de GEO analytics qui
                mesure votre &quot;share of voice&quot; dans les reponses des
                LLMs par rapport a vos concurrents.
              </span>
            </li>
            <li className="flex items-start gap-2 text-[#F4F1DE]/90">
              <span className="text-[#98C379] mt-1 font-mono font-bold">4.</span>
              <span>
                <strong>Google Analytics 4 (referral)</strong> — Analysez le
                trafic venant des domaines IA : chat.openai.com, perplexity.ai,
                claude.ai. Creez un segment GA4 dedie au trafic referral IA.
              </span>
            </li>
            <li className="flex items-start gap-2 text-[#F4F1DE]/90">
              <span className="text-[#98C379] mt-1 font-mono font-bold">5.</span>
              <span>
                <strong>Schema Markup Validator</strong> — Utilisez l outil de
                validation de Google pour verifier que vos donnees structurees
                sont correctement implementees et lisibles par les crawlers.
              </span>
            </li>
          </ul>

          <div className="bg-[#2D2A2E] border-l-4 border-[#E07A5F] p-4 rounded-r-lg my-6">
            <p className="text-[#F4F1DE]/90 leading-relaxed">
              <strong className="text-[#FAFAFA]">Conseil :</strong> Creez un
              tableau de bord mensuel avec 10 questions cibles que vous testez
              sur chaque LLM. Suivez l evolution de vos citations dans le
              temps. C est la seule facon fiable de mesurer votre progression
              GEO en 2026.
            </p>
          </div>
        </section>

        {/* ERREURS COURANTES */}
        <section>
          <h2 className="text-2xl font-mono font-bold text-[#FAFAFA] mt-12 mb-6">
            7. Les 7 erreurs courantes en GEO
          </h2>

          <p className="text-[#F4F1DE]/90 leading-relaxed mb-6">
            Apres avoir accompagne des dizaines d entreprises dans leur
            strategie GEO, voici les erreurs que nous observons le plus
            frequemment :
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-[#E06C75] font-mono font-bold mt-0.5 shrink-0">
                01
              </span>
              <div>
                <p className="text-[#FAFAFA] font-bold mb-1">
                  Ignorer les donnees structurees
                </p>
                <p className="text-[#F4F1DE]/90 text-sm">
                  Pas de Schema.org = les crawlers IA ne comprennent pas le type
                  de votre contenu. C est l erreur la plus impactante.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#E06C75] font-mono font-bold mt-0.5 shrink-0">
                02
              </span>
              <div>
                <p className="text-[#FAFAFA] font-bold mb-1">
                  Ecrire du contenu vague et non citable
                </p>
                <p className="text-[#F4F1DE]/90 text-sm">
                  &quot;Nous sommes les meilleurs&quot; ne sera jamais cite.
                  &quot;29 avis Google 5 etoiles, 8h de formation, 900 EUR
                  TTC&quot; le sera.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#E06C75] font-mono font-bold mt-0.5 shrink-0">
                03
              </span>
              <div>
                <p className="text-[#FAFAFA] font-bold mb-1">
                  Ne pas avoir de fichier llms.txt
                </p>
                <p className="text-[#F4F1DE]/90 text-sm">
                  C est le premier fichier consulte par les LLMs. Sans lui, vous
                  perdez un signal important.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#E06C75] font-mono font-bold mt-0.5 shrink-0">
                04
              </span>
              <div>
                <p className="text-[#FAFAFA] font-bold mb-1">
                  Bloquer les crawlers IA dans robots.txt
                </p>
                <p className="text-[#F4F1DE]/90 text-sm">
                  Certains sites bloquent GPTBot ou ClaudeBot par defaut. Si
                  vous voulez etre cite, il faut autoriser ces bots.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#E06C75] font-mono font-bold mt-0.5 shrink-0">
                05
              </span>
              <div>
                <p className="text-[#FAFAFA] font-bold mb-1">
                  Confondre GEO et SEO
                </p>
                <p className="text-[#F4F1DE]/90 text-sm">
                  Le keyword stuffing et les backlinks artificiels ne
                  fonctionnent pas en GEO. Les LLMs evaluent la qualite du
                  contenu, pas la densite de mots-cles.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#E06C75] font-mono font-bold mt-0.5 shrink-0">
                06
              </span>
              <div>
                <p className="text-[#FAFAFA] font-bold mb-1">
                  Ne pas identifier l auteur
                </p>
                <p className="text-[#F4F1DE]/90 text-sm">
                  Un contenu sans auteur identifie perd en credibilite.
                  Utilisez Schema.org Person avec nom, titre et affiliations.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#E06C75] font-mono font-bold mt-0.5 shrink-0">
                07
              </span>
              <div>
                <p className="text-[#FAFAFA] font-bold mb-1">
                  Ne pas mesurer ses resultats
                </p>
                <p className="text-[#F4F1DE]/90 text-sm">
                  Sans suivi, impossible d ameliorer. Testez regulierement vos
                  questions cibles sur les LLMs et trackez le trafic referral
                  IA.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONCLUSION + CROSS-LINKS */}
        <section>
          <h2 className="text-2xl font-mono font-bold text-[#FAFAFA] mt-12 mb-6">
            8. Conclusion : le GEO est le SEO de demain
          </h2>

          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Le GEO n est pas une mode passagere. C est la prochaine evolution
            majeure du marketing digital. En 2026, les entreprises qui
            maitrisent le GEO ont un avantage competitif enorme : elles sont
            recommandees directement par les assistants IA que des millions de
            personnes utilisent chaque jour.
          </p>

          <p className="text-[#F4F1DE]/90 leading-relaxed mb-4">
            Les techniques presentees dans ce guide — donnees structurees,
            llms.txt, contenu citable, signaux E-E-A-T et autorite thematique
            — sont les fondations d une strategie GEO solide. Commencez par
            implementer les plus simples (llms.txt et Schema.org) et
            progressez vers les plus avancees.
          </p>

          <div className="bg-[#2D2A2E] border-l-4 border-[#98C379] p-4 rounded-r-lg my-6">
            <p className="text-[#F4F1DE]/90 leading-relaxed">
              <strong className="text-[#FAFAFA]">
                Envie d aller plus loin ?
              </strong>{" "}
              Growth Acceleration propose une{" "}
              <Link href="/geo" className="text-[#E07A5F] hover:underline">
                formation GEO de 8 heures a Paris
              </Link>
              . En une journee, vous maitrisez toutes les techniques de ce guide
              avec des exercices pratiques sur votre propre site. 900 EUR TTC,
              financement OPCO possible.
            </p>
          </div>
        </section>

        {/* CROSS-LINKS */}
        <section className="mt-12">
          <h2 className="text-2xl font-mono font-bold text-[#FAFAFA] mb-6">
            Articles et formations lies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/geo"
              className="block bg-[#2D2A2E] border border-[#FAFAFA]/10 rounded-lg p-5 hover:border-[#E07A5F]/50 transition-all group"
            >
              <p className="text-xs font-mono text-[#98C379] mb-2 uppercase tracking-wider">
                Formation
              </p>
              <p className="text-[#FAFAFA] font-mono font-bold group-hover:text-[#E07A5F] transition-colors">
                Formation GEO — 8h a Paris
              </p>
              <p className="text-[#A9A9A9] text-sm mt-1">
                Maitrisez le Generative Engine Optimization en une journee. 900
                EUR TTC.
              </p>
            </Link>

            <Link
              href="/blog/claude-code-vs-cursor"
              className="block bg-[#2D2A2E] border border-[#FAFAFA]/10 rounded-lg p-5 hover:border-[#E07A5F]/50 transition-all group"
            >
              <p className="text-xs font-mono text-[#E07A5F] mb-2 uppercase tracking-wider">
                Article
              </p>
              <p className="text-[#FAFAFA] font-mono font-bold group-hover:text-[#E07A5F] transition-colors">
                Claude Code vs Cursor vs Copilot
              </p>
              <p className="text-[#A9A9A9] text-sm mt-1">
                Comparatif complet des outils de coding IA en 2026.
              </p>
            </Link>

            <Link
              href="/blog/agents-ia-entreprise"
              className="block bg-[#2D2A2E] border border-[#FAFAFA]/10 rounded-lg p-5 hover:border-[#E07A5F]/50 transition-all group"
            >
              <p className="text-xs font-mono text-[#E07A5F] mb-2 uppercase tracking-wider">
                Article
              </p>
              <p className="text-[#FAFAFA] font-mono font-bold group-hover:text-[#E07A5F] transition-colors">
                Agents IA en entreprise
              </p>
              <p className="text-[#A9A9A9] text-sm mt-1">
                Cas d usage et deploiement d agents autonomes dans votre
                organisation.
              </p>
            </Link>

            <Link
              href="/formation-intelligence-artificielle"
              className="block bg-[#2D2A2E] border border-[#FAFAFA]/10 rounded-lg p-5 hover:border-[#E07A5F]/50 transition-all group"
            >
              <p className="text-xs font-mono text-[#98C379] mb-2 uppercase tracking-wider">
                Formations
              </p>
              <p className="text-[#FAFAFA] font-mono font-bold group-hover:text-[#E07A5F] transition-colors">
                Toutes nos formations IA
              </p>
              <p className="text-[#A9A9A9] text-sm mt-1">
                Claude Code, GEO, Agents IA, Automations. 8h a Paris, 900 EUR
                TTC.
              </p>
            </Link>
          </div>
        </section>
      </article>

      {/* FINAL CTA */}
      <FinalCTA
        title="Envie de maitriser le GEO ?"
        price="900"
        accentColor="#98C379"
      />
    </>
  );
}
