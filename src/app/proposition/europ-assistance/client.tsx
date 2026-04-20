"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {
  Brain,
  MessageSquare,
  Wrench,
  Zap,
  Clock,
  Bot,
  Sparkles,
  Award,
  MapPin,
  Coffee,
  UtensilsCrossed,
  CakeSlice,
  Users,
  Rocket,
  Target,
  Handshake,
  CheckCircle,
  ArrowRight,
  Shield,
  GraduationCap,
  Building2,
  CalendarDays,
} from "lucide-react";

const accent = "#E07A5F";
const charcoal = "#1E1E1E";
const charcoalLight = "#2D2A2E";
const cream = "#F4F1DE";
const offWhite = "#FAFAFA";
const gray = "#A9A9A9";

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-sm mb-2" style={{ color: accent }}>
      &gt; {children}
    </p>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl md:text-4xl font-mono font-bold text-[#FAFAFA] mb-8">
      {children}
    </h2>
  );
}

function Card({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`rounded-lg border-2 border-dashed p-6 ${className}`}
      style={{
        backgroundColor: charcoalLight,
        borderColor: `${accent}40`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function EuropAssistanceProposal() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: charcoal, color: cream }}>
      {/* ═══════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative pt-20 pb-16 px-4 overflow-hidden">
        {/* Gradient bg */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, ${accent}30 0%, transparent 60%)`,
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Logos */}
          <FadeIn>
            <div className="flex items-center justify-center gap-8 md:gap-12 mb-12">
              <Image
                src="/logo.png"
                alt="Growth Acceleration"
                width={200}
                height={44}
                className="h-8 md:h-10 w-auto"
              />
              <span
                className="text-2xl font-mono font-light"
                style={{ color: `${accent}80` }}
              >
                x
              </span>
              <Image
                src="/logos/europ-assistance.png"
                alt="Europ Assistance"
                width={220}
                height={80}
                className="h-10 md:h-14 w-auto"
              />
            </div>
          </FadeIn>

          {/* Terminal command */}
          <FadeIn delay={0.1}>
            <p className="font-mono text-sm text-center mb-6" style={{ color: accent }}>
              $ ./proposition --client &quot;europ-assistance&quot; --format &quot;sur-mesure&quot;
            </p>
          </FadeIn>

          {/* Title */}
          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-mono font-bold text-center mb-6" style={{ color: offWhite }}>
              Maitrisez{" "}
              <span style={{ color: accent }}>l&apos;IA Generative</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto mb-8" style={{ color: cream }}>
              Programme de formation sur mesure pour vos cadres superieurs.
              <br />
              <span className="font-mono" style={{ color: accent }}>
                1 ou 2 jours intensifs. 100% pratique. 0% PowerPoint.
              </span>
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex justify-center">
              <a
                href="https://calendly.com/fredericorlicki/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-mono font-bold text-lg transition-all hover:scale-105"
                style={{ backgroundColor: accent, color: charcoal }}
              >
                Planifier un echange <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TRACK RECORD
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 border-t" style={{ borderColor: `${accent}20` }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionLabel>cat track-record.json</SectionLabel>
            <SectionTitle>
              Pourquoi <span style={{ color: accent }}>Growth Acceleration</span>
            </SectionTitle>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { value: "400+", label: "Professionnels formes", icon: Users },
              { value: "9 ans", label: "D'experience (depuis 2017)", icon: CalendarDays },
              { value: "5.0/5", label: "29 avis Google", icon: Award },
            ].map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <Card className="text-center">
                  <stat.icon
                    className="w-8 h-8 mx-auto mb-4"
                    style={{ color: accent }}
                  />
                  <p
                    className="text-4xl font-mono font-bold mb-2"
                    style={{ color: accent }}
                  >
                    {stat.value}
                  </p>
                  <p className="font-mono text-sm uppercase tracking-wider" style={{ color: gray }}>
                    {stat.label}
                  </p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          NOTRE APPROCHE
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4" style={{ backgroundColor: charcoalLight }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionLabel>cat approche.md</SectionLabel>
            <SectionTitle>La formation, <span style={{ color: accent }}>autrement</span></SectionTitle>
            <p className="text-lg mb-10" style={{ color: cream }}>
              Pas de slides pendant 2 jours. Vos equipes ouvrent leur laptop
              <br />
              et construisent leurs outils IA des la premiere heure.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: "On fait, on ne regarde pas",
                desc: "Chaque participant travaille sur SES cas d'usage, avec SES documents, dans SON contexte metier. Le formateur accompagne en temps reel.",
              },
              {
                icon: MapPin,
                title: "Un cadre qui change tout",
                desc: "Pas de salle de reunion beige. Un lieu atypique au 231 rue Saint-Honore, Paris 1er — concu pour la concentration et l'echange.",
              },
              {
                icon: Users,
                title: "20 par session, pas 200",
                desc: "A 20, le formateur connait chaque participant. Les questions sont traitees, les blocages debloques, personne ne decroche.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="text-center">
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `${accent}15` }}
                  >
                    <item.icon className="w-7 h-7" style={{ color: accent }} />
                  </div>
                  <h3 className="font-mono font-bold text-lg mb-3" style={{ color: offWhite }}>
                    {item.title}
                  </h3>
                  <p style={{ color: gray }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          OBJECTIFS PEDAGOGIQUES
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionLabel>cat objectifs.md</SectionLabel>
            <SectionTitle>
              Ce que vos equipes vont{" "}
              <span style={{ color: accent }}>apprendre</span>
            </SectionTitle>
          </FadeIn>

          <div className="space-y-6">
            {[
              {
                icon: Brain,
                title: "Comprendre le fonctionnement, le potentiel et les limites des outils d'IA generative",
                desc: "Identifier precisement ce que l'IA peut apporter a chaque metier, et maitriser ses limites pour l'utiliser avec discernement.",
              },
              {
                icon: MessageSquare,
                title: "Savoir prompter efficacement pour ameliorer et fiabiliser les resultats",
                desc: "Structurer ses demandes pour obtenir des reponses fiables et exploitables des le premier essai, quel que soit l'outil utilise.",
              },
              {
                icon: Wrench,
                title: "Connaitre les meilleurs outils d'IA en fonction de chaque besoin",
                desc: "Chaque besoin a son outil optimal. Constituer sa propre selection, testee et validee sur des cas d'usage concrets.",
              },
              {
                icon: Zap,
                title: "Utiliser l'IA pour produire du contenu professionnel et automatiser les taches",
                desc: "Integrer l'IA dans les processus quotidiens pour produire des livrables de qualite et automatiser les taches recurrentes.",
              },
            ].map((obj, i) => (
              <FadeIn key={obj.title} delay={i * 0.1}>
                <div className="flex gap-4 items-start">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${accent}15` }}
                  >
                    <obj.icon className="w-6 h-6" style={{ color: accent }} />
                  </div>
                  <div>
                    <h3 className="font-mono font-bold text-lg mb-1" style={{ color: offWhite }}>
                      {obj.title}
                    </h3>
                    <p style={{ color: gray }}>{obj.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          OUTILS IA
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4" style={{ backgroundColor: charcoalLight }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionLabel>ls outils/</SectionLabel>
            <SectionTitle>
              Les outils IA que vos equipes{" "}
              <span style={{ color: accent }}>utiliseront</span>
            </SectionTitle>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
            {[
              { name: "ChatGPT", usage: "Complet (dont texte)" },
              { name: "Gemini", usage: "Complet (dont images)" },
              { name: "Claude", usage: "Donnees & analyse" },
              { name: "Copilot", usage: "RGPD / Microsoft" },
              { name: "Gamma", usage: "Presentations" },
              { name: "Make", usage: "Agents IA" },
              { name: "TLDV", usage: "Reunions" },
              { name: "Lovable", usage: "Sites et outils" },
              { name: "Napkin", usage: "Visuels" },
              { name: "NotebookLM", usage: "PDFs & recherche" },
            ].map((tool, i) => (
              <FadeIn key={tool.name} delay={i * 0.05}>
                <Card className="text-center !p-4">
                  <p className="font-mono font-bold mb-1" style={{ color: offWhite }}>
                    {tool.name}
                  </p>
                  <p className="text-xs" style={{ color: gray }}>
                    {tool.usage}
                  </p>
                </Card>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div
              className="rounded-lg p-4 text-center"
              style={{ backgroundColor: `${accent}10` }}
            >
              <p style={{ color: cream }}>
                <CheckCircle
                  className="w-5 h-5 inline mr-2"
                  style={{ color: accent }}
                />
                + Selection personnalisee d&apos;outils selon les cas d&apos;usage specifiques d&apos;
                <span className="font-mono font-bold" style={{ color: accent }}>
                  Europ Assistance
                </span>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          PROGRAMME 2 JOURS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionLabel>cat programmes.md</SectionLabel>
            <SectionTitle>
              Deux formats, un meme{" "}
              <span style={{ color: accent }}>objectif</span>
            </SectionTitle>
          </FadeIn>

          {/* ── FORMAT ACCESS ── */}
          <FadeIn>
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="px-4 py-2 rounded-lg font-mono font-bold text-lg"
                  style={{ backgroundColor: `#3B82F620`, color: "#3B82F6" }}
                >
                  ACCESS
                </div>
                <div>
                  <h3 className="font-mono font-bold text-xl" style={{ color: offWhite }}>
                    1 jour — 7 heures
                  </h3>
                  <p className="text-sm" style={{ color: gray }}>
                    L&apos;essentiel pour etre operationnel immediatement
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    time: "9h - 10h30",
                    title: "Ce que l'IA sait faire — et ce qu'elle ne sait pas faire",
                    desc: "Les bases sans jargon : comment fonctionnent les LLM, ou ils excellent, ou ils deraillent. Grille de lecture claire pour distinguer les cas d'usage rentables des fausses promesses.",
                    type: "DEMO",
                    typeColor: "#3B82F6",
                  },
                  {
                    time: "10h45 - 12h30",
                    title: "Parler a l'IA : l'art du prompt qui marche du premier coup",
                    desc: "Structurer ses demandes avec des frameworks concrets pour obtenir des resultats exploitables immediatement — quel que soit l'outil.",
                    type: "ATELIERS",
                    typeColor: accent,
                  },
                  {
                    time: "13h30 - 15h",
                    title: "La bonne IA pour le bon job",
                    desc: "ChatGPT, Claude, Gemini, Copilot, Gamma, NotebookLM... On teste, on compare, chaque participant identifie les 3-4 outils qui changent la donne pour SON metier.",
                    type: "DEMO",
                    typeColor: "#3B82F6",
                  },
                  {
                    time: "15h15 - 17h",
                    title: "Premiers workflows IA",
                    desc: "Chaque participant cree son premier assistant IA et automatise une tache recurrente concrete. On repart avec un outil fonctionnel.",
                    type: "ATELIERS",
                    typeColor: accent,
                  },
                ].map((mod, i) => (
                  <FadeIn key={mod.time} delay={i * 0.05}>
                    <Card className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="shrink-0">
                        <div
                          className="w-16 text-center py-2 rounded-lg font-mono font-bold text-xs"
                          style={{ backgroundColor: `${accent}15`, color: accent }}
                        >
                          {mod.time}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h3 className="font-mono font-bold" style={{ color: offWhite }}>
                            {mod.title}
                          </h3>
                          <span
                            className="shrink-0 px-3 py-1 rounded-full text-xs font-mono font-bold"
                            style={{
                              backgroundColor: `${mod.typeColor}20`,
                              color: mod.typeColor,
                            }}
                          >
                            {mod.type}
                          </span>
                        </div>
                        <p style={{ color: gray }}>{mod.desc}</p>
                      </div>
                    </Card>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* ── FORMAT FULL PACK ── */}
          <FadeIn>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="px-4 py-2 rounded-lg font-mono font-bold text-lg"
                  style={{ backgroundColor: `${accent}20`, color: accent }}
                >
                  FULL PACK
                </div>
                <div>
                  <h3 className="font-mono font-bold text-xl" style={{ color: offWhite }}>
                    2 jours — 15 heures
                  </h3>
                  <p className="text-sm" style={{ color: gray }}>
                    Maitrise complete + workflows avances + lieu &amp; restauration inclus
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Jour 1 */}
                <div>
                  <p className="font-mono font-bold text-sm mb-3" style={{ color: "#3B82F6" }}>
                    JOUR 1 — Comprendre &amp; prompter
                  </p>
                  <div className="space-y-3">
                    {[
                      { time: "9h - 12h30", title: "Fondamentaux IA + prompting avance", type: "DEMO + ATELIERS" },
                      { time: "13h30 - 17h", title: "Panorama outils + premiers cas d'usage", type: "DEMO + ATELIERS" },
                    ].map((slot) => (
                      <Card key={slot.time} className="!p-4">
                        <p className="font-mono text-xs mb-1" style={{ color: accent }}>{slot.time}</p>
                        <p className="font-mono font-bold text-sm mb-1" style={{ color: offWhite }}>{slot.title}</p>
                        <p className="text-xs" style={{ color: gray }}>{slot.type}</p>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Jour 2 */}
                <div>
                  <p className="font-mono font-bold text-sm mb-3" style={{ color: accent }}>
                    JOUR 2 — Construire &amp; deployer
                  </p>
                  <div className="space-y-3">
                    {[
                      { time: "9h - 12h30", title: "Workflows IA avances + agents personnalises", type: "ATELIERS" },
                      { time: "13h30 - 17h", title: "Automatisation complete + plan d'action individuel", type: "ATELIERS" },
                    ].map((slot) => (
                      <Card key={slot.time} className="!p-4">
                        <p className="font-mono text-xs mb-1" style={{ color: accent }}>{slot.time}</p>
                        <p className="font-mono font-bold text-sm mb-1" style={{ color: offWhite }}>{slot.title}</p>
                        <p className="text-xs" style={{ color: gray }}>{slot.type}</p>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              {/* Full Pack includes */}
              <Card className="!border-solid" style={{ borderColor: `${accent}60` }}>
                <p className="font-mono font-bold text-sm mb-3" style={{ color: accent }}>
                  INCLUS DANS LE FULL PACK
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: MapPin, label: "Lieu d'exception" },
                    { icon: Coffee, label: "Petit-dejeuner" },
                    { icon: UtensilsCrossed, label: "Dejeuner traiteur" },
                    { icon: Handshake, label: "Suivi 30 jours" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                      <item.icon className="w-4 h-4 shrink-0" style={{ color: accent }} />
                      <p className="text-sm" style={{ color: cream }}>{item.label}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          RESULTATS CONCRETS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4" style={{ backgroundColor: charcoalLight }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionLabel>cat resultats.json</SectionLabel>
            <SectionTitle>
              Resultats <span style={{ color: accent }}>concrets</span>
            </SectionTitle>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Clock,
                tag: "Temps",
                tagColor: "#3B82F6",
                title: "Vos matinees, liberees",
                subtitle: "Deleguer l'administratif a l'IA",
                desc: "Emails, comptes-rendus, syntheses, reporting : ce qui prenait 2 heures se fait en 15 minutes. Vos equipes se concentrent sur les decisions, pas la mise en forme.",
              },
              {
                icon: Bot,
                tag: "Autonomie",
                tagColor: accent,
                title: "Vos workflows, automatises",
                subtitle: "Sans attendre l'IT",
                desc: "Chaque participant repart avec ses propres assistants IA configures pour ses taches quotidiennes. Zero code, zero ticket support.",
              },
              {
                icon: Sparkles,
                tag: "Impact",
                tagColor: "#10B981",
                title: "Des livrables d'un autre niveau",
                subtitle: "Analyses, visuels, documents",
                desc: "Rapports enrichis, presentations percutantes, analyses de donnees en quelques clics. La qualite de sortie change de categorie.",
              },
              {
                icon: Award,
                tag: "Leadership",
                tagColor: "#8B5CF6",
                title: "Le reflexe IA dans vos equipes",
                subtitle: "De spectateur a moteur",
                desc: "Vos cadres deviennent les referents IA de leur pole. Ils forment, ils partagent, ils accelerent l'adoption autour d'eux.",
              },
            ].map((result, i) => (
              <FadeIn key={result.title} delay={i * 0.1}>
                <Card>
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${result.tagColor}15` }}
                    >
                      <result.icon className="w-5 h-5" style={{ color: result.tagColor }} />
                    </div>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-mono font-bold"
                      style={{
                        backgroundColor: `${result.tagColor}20`,
                        color: result.tagColor,
                      }}
                    >
                      {result.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-mono font-bold mb-1" style={{ color: offWhite }}>
                    {result.title}
                  </h3>
                  <p className="font-bold mb-2" style={{ color: cream }}>{result.subtitle}</p>
                  <p className="text-sm" style={{ color: gray }}>{result.desc}</p>
                </Card>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <p className="text-xs mt-6 text-center" style={{ color: gray }}>
              Source : etude Harvard/BCG 2024, &quot;Navigating the Jagged Technological Frontier&quot;
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          EXPERIENCE FULL PACK
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionLabel>cat experience.md</SectionLabel>
            <SectionTitle>
              L&apos;experience{" "}
              <span style={{ color: accent }}>Full Pack</span>
            </SectionTitle>
            <p className="text-lg mb-10" style={{ color: cream }}>
              Une formation dans un cadre d&apos;exception, avec tout le confort inclus.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn>
              <Card>
                <MapPin className="w-8 h-8 mb-4" style={{ color: accent }} />
                <h3 className="font-mono font-bold text-xl mb-2" style={{ color: offWhite }}>
                  Chez Les Plombiers
                </h3>
                <p className="font-mono text-sm mb-4" style={{ color: accent }}>
                  231 rue Saint-Honore, Paris 1er
                </p>
                <p style={{ color: gray }}>
                  Un lieu atypique et inspirant au coeur de Paris. Loin des salles de
                  reunion classiques, vos equipes se forment dans un espace concu pour
                  la creativite et l&apos;echange.
                </p>
              </Card>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Card>
                <UtensilsCrossed className="w-8 h-8 mb-4" style={{ color: accent }} />
                <h3 className="font-mono font-bold text-xl mb-2" style={{ color: offWhite }}>
                  Restauration incluse
                </h3>
                <div className="space-y-3 mt-4">
                  {[
                    { icon: Coffee, label: "Petit-dejeuner d'accueil", time: "8h30 - 9h00" },
                    { icon: UtensilsCrossed, label: "Dejeuner traiteur", time: "12h30 - 13h30" },
                    { icon: CakeSlice, label: "Gouter & cafe", time: "16h00 - 16h15" },
                  ].map((meal) => (
                    <div key={meal.label} className="flex items-center gap-3">
                      <meal.icon className="w-5 h-5 shrink-0" style={{ color: accent }} />
                      <div className="flex-1">
                        <p className="font-mono text-sm" style={{ color: offWhite }}>
                          {meal.label}
                        </p>
                        <p className="text-xs" style={{ color: gray }}>{meal.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CO-CONSTRUCTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4" style={{ backgroundColor: charcoalLight }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionLabel>cat co-construction.md</SectionLabel>
            <SectionTitle>
              Un programme pense{" "}
              <span style={{ color: accent }}>avec vous</span>
            </SectionTitle>
            <p className="text-lg mb-10" style={{ color: cream }}>
              Nous ne vendons pas un programme fige. Nous construisons VOTRE programme,
              adapte aux metiers et aux enjeux d&apos;Europ Assistance.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Target,
                title: "Cas d'usage reels",
                desc: "Nous identifions ensemble les cas d'usage les plus impactants pour vos equipes : assurance, relation client, gestion de sinistres, support...",
              },
              {
                icon: Wrench,
                title: "Outils sur mesure",
                desc: "La selection d'outils est adaptee a vos contraintes (RGPD, securite, outils internes) et a vos objectifs specifiques.",
              },
              {
                icon: Users,
                title: "Groupes par metier",
                desc: "Pour 100 cadres, nous organisons 5 sessions de 20 personnes par pole metier pour maximiser la pertinence des ateliers.",
              },
              {
                icon: Handshake,
                title: "Suivi & ancrage",
                desc: "Apres la formation : videos de rappel, support WhatsApp/email, et session de suivi a 30 jours pour ancrer les pratiques.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <Card className="flex gap-4 items-start">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${accent}15` }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: accent }} />
                  </div>
                  <div>
                    <h3 className="font-mono font-bold mb-1" style={{ color: offWhite }}>
                      {item.title}
                    </h3>
                    <p className="text-sm" style={{ color: gray }}>{item.desc}</p>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FORMATEUR
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionLabel>whoami</SectionLabel>
            <SectionTitle>Votre formateur</SectionTitle>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div
                className="relative rounded-lg overflow-hidden border-2 border-dashed"
                style={{ borderColor: `${accent}40` }}
              >
                <Image
                  src="/fred.jpg"
                  alt="Frederic Orlicki - Formateur Growth Acceleration"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div
                  className="absolute bottom-4 right-4 px-3 py-1 text-sm font-mono font-bold"
                  style={{ backgroundColor: accent, color: charcoal }}
                >
                  USER: FRED
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-6">
                <div>
                  <p className="font-mono mb-2" style={{ color: accent }}>
                    &gt; whoami
                  </p>
                  <h3 className="text-3xl font-mono font-bold" style={{ color: offWhite }}>
                    Frederic Orlicki
                  </h3>
                  <p className="font-mono text-sm" style={{ color: accent }}>
                    CEO @ Growth Acceleration
                  </p>
                </div>

                <div className="space-y-4" style={{ color: cream }}>
                  <p>
                    Fondateur de{" "}
                    <span className="font-mono" style={{ color: accent }}>
                      Growth Acceleration
                    </span>{" "}
                    en 2017. Developpeur full stack, ex{" "}
                    <span className="font-mono" style={{ color: accent }}>
                      Le Wagon #0001
                    </span>
                    . 10 ans d&apos;experience en growth, tech et formation.
                  </p>
                  <p>
                    3 SaaS en production avec Claude API :{" "}
                    <span className="font-mono" style={{ color: accent }}>VideoTools</span>,{" "}
                    <span className="font-mono" style={{ color: accent }}>Jobbot.io</span>,{" "}
                    <span className="font-mono" style={{ color: accent }}>Bigmails.AI</span>.
                  </p>
                  <p>
                    Plus de{" "}
                    <span className="font-mono font-bold" style={{ color: accent }}>
                      400 professionnels
                    </span>{" "}
                    formes a l&apos;IA — du prompting avance au deploiement d&apos;agents autonomes.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  {[
                    { value: "3", label: "SaaS shippes" },
                    { value: "400+", label: "Alumni" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.4 + i * 0.1 }}
                      className="p-4 rounded-lg border text-center"
                      style={{
                        backgroundColor: charcoalLight,
                        borderColor: `${offWhite}1A`,
                      }}
                    >
                      <p className="text-3xl font-mono font-bold" style={{ color: accent }}>
                        {stat.value}
                      </p>
                      <p className="text-xs font-mono uppercase tracking-wider" style={{ color: gray }}>
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CERTIFICATION / QALIOPI
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4" style={{ backgroundColor: charcoalLight }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionLabel>cat certification.md</SectionLabel>
            <SectionTitle>
              Certification & <span style={{ color: accent }}>financement</span>
            </SectionTitle>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            <FadeIn>
              <Card>
                <Shield className="w-8 h-8 mb-4" style={{ color: accent }} />
                <h3 className="font-mono font-bold text-xl mb-2" style={{ color: offWhite }}>
                  Certification Qualiopi
                </h3>
                <p className="mb-4" style={{ color: gray }}>
                  Certification Qualiopi en cours d&apos;obtention.
                  Delai estime : 1 mois. Nous pouvons demarrer le processus
                  immediatement pour etre prets avant le lancement des sessions.
                </p>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" style={{ color: "#98C379" }} />
                  <p className="font-mono text-sm" style={{ color: cream }}>
                    Eligible OPCO
                  </p>
                </div>
              </Card>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Card>
                <GraduationCap className="w-8 h-8 mb-4" style={{ color: accent }} />
                <h3 className="font-mono font-bold text-xl mb-2" style={{ color: offWhite }}>
                  Tarification sur mesure
                </h3>
                <p className="mb-4" style={{ color: gray }}>
                  Le budget est adapte au volume de sessions, au nombre de participants
                  et au niveau de personnalisation souhaite. Tout est inclus : formation,
                  lieu, restauration et suivi.
                </p>
                <div className="space-y-2">
                  {["Lieu d'exception inclus", "Restauration complete incluse", "Supports et suivi post-formation inclus"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#98C379" }} />
                      <p className="text-sm" style={{ color: cream }}>{item}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CTA FINAL
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="font-mono text-sm mb-4" style={{ color: accent }}>
              &gt; next-step
            </p>
            <h2 className="text-3xl md:text-5xl font-mono font-bold mb-6" style={{ color: offWhite }}>
              Construisons votre programme{" "}
              <span style={{ color: accent }}>ensemble</span>
            </h2>
            <p className="text-lg mb-10" style={{ color: cream }}>
              30 minutes pour valider vos objectifs, definir le format
              et lancer la co-construction du programme.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/fredericorlicki/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-mono font-bold text-lg transition-all hover:scale-105"
                style={{ backgroundColor: accent, color: charcoal }}
              >
                Planifier un echange <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="mailto:fredericorlicki@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-mono font-bold text-lg border-2 border-dashed transition-all hover:scale-105"
                style={{ borderColor: `${accent}60`, color: accent }}
              >
                Envoyer un email
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="mt-8 font-mono text-sm" style={{ color: gray }}>
              Frederic Orlicki | fredericorlicki@gmail.com | Growth Acceleration
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
