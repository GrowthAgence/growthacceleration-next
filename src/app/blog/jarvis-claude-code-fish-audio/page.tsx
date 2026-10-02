import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, Clock } from "lucide-react";
import { FinalCTA } from "@/components/FinalCTA";
import { NewsletterSignup } from "@/components/NewsletterSignup";

const SLUG = "jarvis-claude-code-fish-audio";
const URL = `https://www.growth-acceleration.fr/blog/${SLUG}`;

const PROMPT =
  "Installe le projet https://github.com/adewaskar/jarvis sur ma machine. Remplace la voix par Fish Audio : utilise l API https://api.fish.audio/v1/tts avec le modele s2.1-pro-free et ma cle API [COLLE TA CLE ICI]. Puis lance Jarvis.";

export const metadata: Metadata = {
  title: "Jarvis avec Claude Code : votre assistant vocal avec une voix realiste",
  description:
    "Installez Jarvis, un assistant vocal qui agit avec vos outils, et donnez-lui une vraie voix avec Fish Audio. Trois etapes, un seul prompt dans Claude Code, sans ecrire de code.",
  keywords: [
    "Jarvis Claude Code",
    "assistant vocal IA",
    "Fish Audio",
    "synthese vocale",
    "Claude Code tutoriel",
    "assistant IA personnel",
    "agents IA",
  ],
  alternates: {
    canonical: `/blog/${SLUG}`,
  },
  openGraph: {
    title: "Votre Jarvis personnel avec Claude Code | Growth Acceleration",
    description:
      "Un assistant vocal qui agit avec vos outils, une voix realiste avec Fish Audio. Le manuel en trois etapes.",
    type: "article",
    images: [{ url: "/blog/jarvis/jarvis-flux-poster.jpg", width: 1920, height: 1080 }],
  },
};

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Votre Jarvis personnel : un assistant vocal avec Claude Code et une voix realiste",
  datePublished: "2026-10-02",
  dateModified: "2026-10-02",
  author: {
    "@id": "https://www.growth-acceleration.fr/#person",
  },
  publisher: {
    "@id": "https://www.growth-acceleration.fr/#organization",
  },
  url: URL,
  image: "https://www.growth-acceleration.fr/blog/jarvis/jarvis-flux-poster.jpg",
  inLanguage: "fr",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": URL,
  },
  description:
    "Manuel pas a pas pour installer Jarvis, un assistant vocal open source dont le cerveau est Claude Code, et remplacer sa voix par Fish Audio avec un seul prompt.",
  keywords: "Jarvis, Claude Code, Fish Audio, assistant vocal, synthese vocale, agents IA",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.growth-acceleration.fr" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.growth-acceleration.fr/blog" },
    { "@type": "ListItem", position: 3, name: "Jarvis avec Claude Code", item: URL },
  ],
};

const P = "text-[#F4F1DE]/90 leading-relaxed mb-4";
const H2 = "text-2xl font-mono font-bold text-[#FAFAFA] mt-12 mb-6";
const H3 = "text-xl font-mono font-bold text-[#E07A5F] mt-8 mb-4";
const LIST = "text-[#F4F1DE]/90 leading-relaxed mb-4 space-y-2";

function Clip({ name, label }: { name: string; label: string }) {
  return (
    <figure className="my-8">
      <video
        className="w-full h-auto rounded-lg border border-[#FAFAFA]/10"
        width={1920}
        height={1080}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={`/blog/jarvis/${name}-poster.jpg`}
        aria-label={label}
      >
        <source src={`/blog/jarvis/${name}.webm`} type="video/webm" />
        <source src={`/blog/jarvis/${name}.mp4`} type="video/mp4" />
      </video>
      <figcaption className="text-[#A9A9A9] text-xs font-mono mt-2">&gt; {label}</figcaption>
    </figure>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <div className="bg-[#2D2A2E]/50 border border-dashed border-[#FAFAFA]/20 rounded-lg p-6 mb-4 font-mono text-sm text-[#F4F1DE]/90 leading-relaxed break-words">
      <span className="text-[#E07A5F]">&gt; </span>
      {children}
    </div>
  );
}

function Arrows({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className={LIST}>
      {items.map((item, i) => (
        <li key={i}>
          <span className="text-[#E07A5F] font-mono">→ </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto mb-6">
      <table className="w-full text-sm text-left border border-[#FAFAFA]/10">
        <thead className="bg-[#2D2A2E] font-mono text-[#E07A5F]">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-4 py-3 border-b border-[#FAFAFA]/10">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-[#F4F1DE]/90">
          {rows.map((row) => (
            <tr key={row[0]} className="border-b border-[#FAFAFA]/10">
              {row.map((cell, i) => (
                <td key={i} className={`px-4 py-3 ${i === 0 ? "font-mono text-[#FAFAFA]" : ""}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function JarvisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* RESUME LLM-FRIENDLY */}
      <section className="bg-[#2D2A2E] border-b border-[#E07A5F]/20">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <p className="text-[#A9A9A9] text-sm font-mono mb-2">&gt; cat article.txt</p>
          <p className="text-[#F4F1DE] leading-relaxed">
            <strong>Jarvis</strong> est un assistant vocal open source qui tourne dans le navigateur : on dit
            &quot;Hey Jarvis&quot;, il ecoute, agit avec vos outils (recherche web, mails, images) et repond a voix
            haute. Son cerveau est Claude Code, utilise sans ecran avec votre abonnement existant. Ce manuel montre
            comment l installer et remplacer sa voix de navigateur par <strong>Fish Audio</strong> (modele gratuit
            s2.1-pro-free) en trois etapes : creer un compte, recuperer une cle API, coller un seul prompt dans
            Claude Code. Jarvis demarre en lecture seule : aucune action (envoi, suppression, paiement) sans
            autorisation explicite. <strong>Growth Acceleration</strong> forme a{" "}
            <Link href="/claude-code" className="text-[#E07A5F] hover:underline">
              Claude Code
            </Link>{" "}
            et aux{" "}
            <Link href="/agents-ai" className="text-[#E07A5F] hover:underline">
              agents IA
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
          <li className="text-[#F4F1DE]">Jarvis avec Claude Code</li>
        </ol>
      </nav>

      {/* ARTICLE HEADER */}
      <header className="max-w-4xl mx-auto px-4 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-2 py-0.5 bg-[#E07A5F]/20 text-[#E07A5F] text-xs font-mono rounded">Manuel</span>
          <div className="flex items-center gap-1 text-[#A9A9A9] text-xs">
            <Calendar className="w-3 h-3" />
            <span>2 octobre 2026</span>
          </div>
          <div className="flex items-center gap-1 text-[#A9A9A9] text-xs">
            <Clock className="w-3 h-3" />
            <span>9 min de lecture</span>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-mono font-bold text-[#FAFAFA] mb-6">
          Votre Jarvis personnel : un assistant vocal avec Claude Code et une voix realiste
        </h1>

        <p className="text-lg text-[#F4F1DE]/80 leading-relaxed max-w-3xl">
          Vous avez vu Iron Man parler a Jarvis. Vous pouvez avoir le votre ce soir, sur votre ordinateur. Pas un
          gadget qui donne la meteo : un assistant qui vous ecoute, cherche sur le web, lit vos mails ou genere une
          image, puis vous repond a voix haute.
        </p>
      </header>

      {/* ARTICLE CONTENT */}
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <section>
          <p className={P}>
            Le projet existe deja, il est open source. Il lui manque une chose : une voix credible. Par defaut, il
            parle avec la voix de votre navigateur, plate et mecanique. Ce manuel corrige ca en trois etapes et un
            seul prompt.
          </p>
          <Arrows
            items={[
              <>
                <strong>Temps necessaire</strong> : une dizaine de minutes
              </>,
              <>
                <strong>Niveau</strong> : debutant, aucune ligne de code a ecrire
              </>,
              <>
                <strong>Cout</strong> : votre abonnement Claude Code, plus le modele gratuit de Fish Audio
              </>,
            ]}
          />
        </section>

        {/* --- 1. FONCTIONNEMENT --- */}
        <section>
          <h2 className={H2}>1. Jarvis, comment ca marche</h2>
          <p className={P}>Jarvis tient en trois pieces. Comprendre leur role vous evitera la plupart des pannes.</p>
          <Clip name="jarvis-flux" label="le trajet d une question, du micro a la reponse vocale" />
          <p className={P}>
            <strong>Le visage : votre navigateur.</strong> Il ecoute le mot d eveil &quot;Hey Jarvis&quot;, detecte
            quand vous parlez, transcrit votre voix en texte et affiche l interface holographique. C est aussi lui qui
            joue le son de la reponse.
          </p>
          <p className={P}>
            <strong>Le cerveau : Claude Code, en coulisses.</strong> Un petit programme tourne sur votre machine. Il
            fait fonctionner Claude Code sans fenetre, comme un moteur. C est lui qui reflechit et qui utilise vos
            outils : recherche web, mails, images, telephone. Il utilise votre abonnement Claude Code existant, sans
            cle API supplementaire.
          </p>
          <p className={P}>
            <strong>La voix : Fish Audio.</strong> C est la piece que vous allez ajouter. Le cerveau produit une
            reponse en texte. Fish Audio la transforme en voix naturelle.
          </p>
          <p className={P}>
            Le visage et le cerveau se parlent en local, sur votre ordinateur (adresse <code>localhost:8787</code>).
            En revanche, plusieurs services en ligne interviennent : Claude pour reflechir, la reconnaissance vocale
            de Chrome pour transcrire, vos outils pour agir, et desormais Fish Audio pour prononcer. Gardez-le en tete
            avant de lui dicter quelque chose de confidentiel.
          </p>
        </section>

        {/* --- 2. POURQUOI CHANGER DE VOIX --- */}
        <section>
          <h2 className={H2}>2. Pourquoi changer de voix</h2>
          <p className={P}>La voix du navigateur fonctionne. Mais elle trahit la machine des la premiere phrase.</p>
          <Clip name="jarvis-avant-apres" label="voix du navigateur contre Fish Audio" />
          <Table
            head={["", "Voix du navigateur", "Fish Audio"]}
            rows={[
              ["Rendu", "ton plat, debit mecanique", "intonation, pauses, respiration"],
              ["Regularite", "change selon l ordinateur et le navigateur", "la meme voix partout"],
              ["Mise en place", "rien a faire", "un compte, une cle API"],
              ["Cout", "gratuit", "modele gratuit disponible pour tester"],
            ]}
          />
          <p className={P}>
            La difference n est pas cosmetique. Un assistant vocal, on l ecoute. Une voix penible a ecouter, c est
            un assistant qu on arrete d utiliser au bout de deux jours.
          </p>
          <p className={P}>
            Bon a savoir : Fish Audio n est pas prevu d origine dans Jarvis. Le projet prevoit une autre voix en
            option (ElevenLabs). Vous allez demander a Claude Code de brancher Fish Audio a la place. C est
            precisement l interet de l exercice : vous ne suivez pas un tutoriel fige, vous faites adapter un projet
            existant a votre besoin.
          </p>
        </section>

        {/* --- 3. LES TROIS ETAPES --- */}
        <section>
          <h2 className={H2}>3. Les trois etapes</h2>
          <Clip name="jarvis-etapes" label="compte, cle, prompt : Jarvis repond" />

          <h3 className={H3}>Avant de commencer</h3>
          <p className={P}>Verifiez ces trois points. Ils sont gratuits, sauf le premier que vous avez sans doute deja.</p>
          <ul className={`list-disc list-inside ${LIST}`}>
            <li>
              <strong>Claude Code installe et connecte.</strong> Lancez <code>claude</code> une fois dans un terminal
              pour verifier que vous etes bien connecte.
            </li>
            <li>
              <strong>Node.js version 20 ou plus.</strong> Telechargeable sur nodejs.org. Tapez <code>node -v</code>{" "}
              pour connaitre votre version.
            </li>
            <li>
              <strong>Google Chrome ou Microsoft Edge.</strong> Jarvis a besoin du micro et de l affichage 3D de ces
              navigateurs.
            </li>
          </ul>

          <h3 className={H3}>Etape 1 : creez votre compte Fish Audio</h3>
          <p className={P}>
            Rendez-vous sur{" "}
            <a href="https://fish.audio" target="_blank" rel="noopener noreferrer" className="text-[#E07A5F] hover:underline">
              fish.audio
            </a>{" "}
            et creez un compte. Une adresse mail suffit.
          </p>

          <h3 className={H3}>Etape 2 : recuperez votre cle API</h3>
          <p className={P}>
            Ouvrez la page{" "}
            <a
              href="https://fish.audio/app/api-keys"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E07A5F] hover:underline"
            >
              fish.audio/app/api-keys
            </a>{" "}
            et creez une cle. Copiez-la. Cette cle, c est votre carte bancaire chez Fish Audio. Trois regles :
          </p>
          <Arrows
            items={[
              "Ne la collez jamais dans un mail, un document partage ou une capture d ecran.",
              "Ne la publiez jamais dans un depot de code public (GitHub, GitLab). Des robots scannent ces depots en permanence pour recuperer les cles.",
              "Si vous pensez l avoir exposee, supprimez-la sur la meme page et creez-en une nouvelle. Ca prend dix secondes.",
            ]}
          />

          <h3 className={H3}>Etape 3 : donnez le travail a Claude Code</h3>
          <p className={P}>
            Ouvrez un terminal, placez-vous dans le dossier ou vous voulez installer Jarvis, lancez{" "}
            <code>claude</code> et collez ce prompt, en remplacant le crochet par votre cle :
          </p>
          <CodeBlock>{PROMPT}</CodeBlock>
          <p className={P}>
            Claude Code va vous demander des autorisations au fil de l eau (telecharger le projet, installer les
            dependances, modifier des fichiers). Lisez-les et acceptez. C est normal, et c est sain : vous gardez la
            main.
          </p>
        </section>

        {/* --- 4. LE PROMPT --- */}
        <section>
          <h2 className={H2}>4. Le prompt, ligne par ligne</h2>
          <p className={P}>
            Un bon prompt n a rien de magique. Chaque morceau repond a une question que Claude Code se poserait
            sinon.
          </p>
          <Clip name="jarvis-prompt" label="le prompt, explique morceau par morceau" />
          <ol className={`list-decimal list-inside ${LIST}`}>
            <li>
              <strong>&quot;Installe le projet github.com/adewaskar/jarvis sur ma machine.&quot;</strong> Le point de
              depart. Claude Code telecharge le projet et installe tout ce dont il a besoin.
            </li>
            <li>
              <strong>&quot;Remplace la voix par Fish Audio.&quot;</strong> L objectif. Claude Code lit le code,
              trouve l endroit ou Jarvis fabrique sa voix et le reecrit. C est la partie qui vous aurait pris une
              apres-midi seul.
            </li>
            <li>
              <strong>&quot;Utilise l API api.fish.audio/v1/tts.&quot;</strong> L adresse precise. Sans elle, Claude
              Code devrait la chercher et pourrait se tromper de version.
            </li>
            <li>
              <strong>&quot;Avec le modele s2.1-pro-free.&quot;</strong> Le modele gratuit de Fish Audio. C est le
              meme moteur que la version payante, sans garantie de delai de reponse. Parfait pour tester et pour un
              usage personnel.
            </li>
            <li>
              <strong>&quot;Et ma cle API.&quot;</strong> Votre acces. Elle reste sur votre machine.
            </li>
            <li>
              <strong>&quot;Puis lance Jarvis.&quot;</strong> Claude Code demarre le cerveau et le visage, puis vous
              donne l adresse a ouvrir.
            </li>
          </ol>

          <h3 className={H3}>Deux phrases a ajouter, selon vous</h3>
          <p className={P}>
            <strong>Pour un Jarvis qui parle francais.</strong> D origine, Jarvis ecoute et repond en anglais
            (britannique, comme le personnage). Ajoutez a la fin du prompt :
          </p>
          <CodeBlock>Passe la reconnaissance vocale et les reponses de Jarvis en francais.</CodeBlock>
          <p className={P}>
            <strong>Pour proteger votre cle.</strong> Si vous comptez un jour publier votre version du projet,
            ajoutez :
          </p>
          <CodeBlock>Range ma cle Fish Audio dans un fichier .env et verifie que ce fichier est exclu de Git.</CodeBlock>
          <p className={P}>C est une bonne habitude, meme si vous ne publiez rien.</p>
        </section>

        {/* --- 5. PREMIER TEST --- */}
        <section>
          <h2 className={H2}>5. Premier test</h2>
          <ol className={`list-decimal list-inside ${LIST}`}>
            <li>
              Ouvrez <strong>http://localhost:5173</strong> dans une vraie fenetre Chrome ou Edge.
            </li>
            <li>
              Cliquez sur <strong>INITIALISE</strong>.
            </li>
            <li>Autorisez le micro quand le navigateur le demande.</li>
            <li>
              Dites <strong>&quot;Hey Jarvis&quot;</strong>, puis votre question.
            </li>
          </ol>

          <h3 className={H3}>Les raccourcis a connaitre</h3>
          <Table
            head={["Touche", "Effet"]}
            rows={[
              ["Espace", "parler sans dire \"Hey Jarvis\""],
              ["Echap", "arreter Jarvis"],
              ["D", "panneau de diagnostic"],
              ["T", "test audio en une ligne"],
            ]}
          />
          <p className={P}>
            Vous pouvez aussi lui couper la parole : parlez pendant qu il repond, il s arrete et vous ecoute.
          </p>

          <h3 className={H3}>Il ne vous entend pas ?</h3>
          <Arrows
            items={[
              <>
                <strong>Vous etes dans un panneau d apercu.</strong> C est la cause numero un. Les apercus integres
                aux editeurs de code (y compris celui de Claude Code) bloquent le micro. L interface s affiche,
                s anime, et n entend jamais rien. Ouvrez l adresse dans une vraie fenetre de navigateur.
              </>,
              <>
                <strong>Le micro n est pas autorise.</strong> Cliquez sur l icone a gauche de l adresse dans Chrome et
                autorisez le micro.
              </>,
              <>
                <strong>Vous ne savez pas ce qui coince.</strong> Appuyez sur D : le panneau dit clairement s il vous
                entend et s il produit du son. Appuyez sur T pour un test audio.
              </>,
              <>
                <strong>Il entend, mais ne parle pas avec la nouvelle voix.</strong> Demandez a Claude Code :
                &quot;Jarvis utilise encore la voix du navigateur, verifie l appel a Fish Audio.&quot; Jarvis est
                concu pour repasser sur la voix du navigateur quand la voix en ligne echoue : la cause est souvent une
                cle mal recopiee.
              </>,
            ]}
          />
        </section>

        {/* --- 6. SECURITE --- */}
        <section>
          <h2 className={H2}>6. La securite : ce que Jarvis ne fera pas sans vous</h2>
          <p className={P}>
            Un assistant qui agit avec vos outils pose une vraie question. Que se passe-t-il s il comprend mal ? Le
            projet a fait un choix prudent : <strong>Jarvis demarre en lecture seule.</strong>
          </p>
          <Arrows
            items={[
              <>
                <strong>Autorise d office</strong> : chercher, lire, consulter, generer une image. Rien ne change dans
                le monde reel.
              </>,
              <>
                <strong>Bloque d office</strong> : envoyer un mail, supprimer un fichier, installer un logiciel, payer,
                toucher l ecran de votre telephone.
              </>,
            ]}
          />
          <p className={P}>
            Pourquoi bloquer a l avance plutot que demander confirmation ? Parce que la voix est une mauvaise
            interface pour valider une action. Un &quot;oui&quot; mal compris, et le mail part. La decision est donc
            prise une fois, dans le code, avant la conversation.
          </p>
          <p className={P}>
            Pour autoriser les actions, il faut relancer Jarvis avec une commande dediee (
            <code>npm run bridge:writes</code>). Faites-le en connaissance de cause : &quot;Hey Jarvis, fais du
            menage dans mes telechargements&quot; n a pas le meme sens en lecture seule et avec les actions activees.
          </p>
          <p className={P}>
            Notre conseil : restez en lecture seule pendant au moins une semaine. Vous verrez vite ce qu il comprend
            bien et ce qu il comprend mal.
          </p>
        </section>

        {/* --- 7. USAGES PME --- */}
        <section>
          <h2 className={H2}>7. Ce que Jarvis peut faire pour une PME</h2>
          <p className={P}>
            Jarvis reste un projet personnel, pas un logiciel d entreprise. Mais il montre tres concretement ou va le
            travail avec l IA. Quelques usages realistes, en lecture seule :
          </p>
          <Arrows
            items={[
              <>
                <strong>Le point du matin.</strong> &quot;Hey Jarvis, resume mes mails non lus et dis-moi lesquels
                demandent une reponse aujourd hui.&quot;
              </>,
              <>
                <strong>La veille avant un rendez-vous.</strong> &quot;Que sait-on de cette entreprise ? Actualites,
                taille, dirigeants.&quot; Pendant que vous enfilez votre veste.
              </>,
              <>
                <strong>Les visuels rapides.</strong> &quot;Genere trois idees de visuel pour notre post de demain sur
                le salon.&quot;
              </>,
              <>
                <strong>Les mains prises.</strong> En atelier, en cuisine, en reunion debout : poser une question sans
                toucher un clavier.
              </>,
            ]}
          />
          <p className={P}>
            Le plus interessant n est pas Jarvis lui-meme. C est la methode : prendre un projet open source, le faire
            adapter par Claude Code a votre besoin en une phrase, et comprendre ce qu il a change. C est exactement
            ce qu on apprend a faire en formation.
          </p>
        </section>

        {/* --- RESUME --- */}
        <section>
          <h2 className={H2}>Ce qu il faut retenir</h2>
          <ul className={`list-disc list-inside ${LIST}`}>
            <li>Jarvis = un visage (le navigateur), un cerveau (Claude Code) et une voix (Fish Audio).</li>
            <li>Trois etapes : un compte Fish Audio, une cle API, un prompt dans Claude Code.</li>
            <li>Votre cle ne se partage pas et ne se publie pas.</li>
            <li>Ouvrez Jarvis dans une vraie fenetre Chrome, sinon il n entend rien.</li>
            <li>Il demarre en lecture seule : gardez-le ainsi le temps de le connaitre.</li>
          </ul>
        </section>

        {/* --- ARTICLES LIES --- */}
        <section>
          <h2 className={H2}>Pour aller plus loin</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/blog/agents-ia-entreprise"
              className="block bg-[#2D2A2E]/50 border border-[#FAFAFA]/10 rounded-lg p-4 hover:border-[#E07A5F]/50 transition-all"
            >
              <p className="text-[#FAFAFA] font-mono font-bold text-sm mb-1">Agents IA en entreprise</p>
              <p className="text-[#A9A9A9] text-xs">Cas d usage et deploiement d agents autonomes</p>
            </Link>
            <Link
              href="/blog/claude-code-vs-cursor"
              className="block bg-[#2D2A2E]/50 border border-[#FAFAFA]/10 rounded-lg p-4 hover:border-[#E07A5F]/50 transition-all"
            >
              <p className="text-[#FAFAFA] font-mono font-bold text-sm mb-1">Claude Code vs Cursor vs Copilot</p>
              <p className="text-[#A9A9A9] text-xs">Comparatif des outils de coding IA en 2026</p>
            </Link>
            <Link
              href="/claude-code"
              className="block bg-[#2D2A2E]/50 border border-[#E07A5F]/30 rounded-lg p-4 hover:border-[#E07A5F]/50 transition-all"
            >
              <p className="text-[#E07A5F] font-mono font-bold text-sm mb-1">Formation Claude Code</p>
              <p className="text-[#A9A9A9] text-xs">8 heures en presentiel a Paris, 900 euros TTC</p>
            </Link>
            <Link
              href="/agents-ai"
              className="block bg-[#2D2A2E]/50 border border-[#E07A5F]/30 rounded-lg p-4 hover:border-[#E07A5F]/50 transition-all"
            >
              <p className="text-[#E07A5F] font-mono font-bold text-sm mb-1">Formation Agents.AI</p>
              <p className="text-[#A9A9A9] text-xs">Des assistants qui agissent avec vos outils</p>
            </Link>
          </div>
        </section>
      </article>

      <NewsletterSignup placement="article-jarvis-claude-code-fish-audio" />

      <FinalCTA title="Envie de construire vos propres assistants ?" price="900" accentColor="#E07A5F" />
    </>
  );
}
