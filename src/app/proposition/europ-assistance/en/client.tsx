"use client";

import { motion } from "motion/react";
import Image from "next/image";
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

export function EuropAssistanceProposalEN() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: charcoal, color: cream }}>
      {/* ═══════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative pt-20 pb-16 px-4 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, ${accent}30 0%, transparent 60%)`,
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
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

          <FadeIn delay={0.1}>
            <p className="font-mono text-sm text-center mb-6" style={{ color: accent }}>
              $ ./proposal --client &quot;europ-assistance&quot; --format &quot;tailor-made&quot;
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-mono font-bold text-center mb-6" style={{ color: offWhite }}>
              Master{" "}
              <span style={{ color: accent }}>Generative AI</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto mb-8" style={{ color: cream }}>
              Tailor-made training program for your senior executives.
              <br />
              <span className="font-mono" style={{ color: accent }}>
                1 or 2 intensive days. 100% hands-on. 0% PowerPoint.
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
                Schedule a call <ArrowRight className="w-5 h-5" />
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
              Why <span style={{ color: accent }}>Growth Acceleration</span>
            </SectionTitle>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { value: "400+", label: "Professionals trained", icon: Users },
              { value: "9 years", label: "Of experience (since 2017)", icon: CalendarDays },
              { value: "5.0/5", label: "29 Google reviews", icon: Award },
            ].map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <Card className="text-center">
                  <stat.icon className="w-8 h-8 mx-auto mb-4" style={{ color: accent }} />
                  <p className="text-4xl font-mono font-bold mb-2" style={{ color: accent }}>
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
          OUR APPROACH
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4" style={{ backgroundColor: charcoalLight }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionLabel>cat approach.md</SectionLabel>
            <SectionTitle>Training, <span style={{ color: accent }}>reimagined</span></SectionTitle>
            <p className="text-lg mb-10" style={{ color: cream }}>
              No slides for 2 days. Your teams open their laptops
              <br />
              and start building their AI tools from the first hour.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: "Learn by doing, not watching",
                desc: "Each participant works on THEIR use cases, with THEIR documents, in THEIR business context. The trainer coaches in real time.",
              },
              {
                icon: MapPin,
                title: "A setting that changes everything",
                desc: "No beige meeting room. A unique venue at 231 rue Saint-Honore, Paris 1st — designed for focus and collaboration.",
              },
              {
                icon: Users,
                title: "20 per session, not 200",
                desc: "At 20, the trainer knows each participant. Questions are addressed, blockers removed, nobody falls behind.",
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
          LEARNING OBJECTIVES
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionLabel>cat objectives.md</SectionLabel>
            <SectionTitle>
              What your teams will{" "}
              <span style={{ color: accent }}>learn</span>
            </SectionTitle>
          </FadeIn>

          <div className="space-y-6">
            {[
              {
                icon: Brain,
                title: "Understand how generative AI tools work — and where they fall short",
                desc: "Identify precisely what AI can bring to each role, and master its limitations to use it with discernment.",
              },
              {
                icon: MessageSquare,
                title: "Prompt effectively to get reliable, actionable results",
                desc: "Structure requests to get accurate and usable responses on the first try, regardless of the tool.",
              },
              {
                icon: Wrench,
                title: "Pick the right AI tool for each task",
                desc: "Every need has its optimal tool. Build a personal toolkit, tested and validated on real-world use cases.",
              },
              {
                icon: Zap,
                title: "Use AI to produce professional content and automate workflows",
                desc: "Integrate AI into daily processes to deliver higher-quality work and automate recurring tasks.",
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
          AI TOOLS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4" style={{ backgroundColor: charcoalLight }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionLabel>ls tools/</SectionLabel>
            <SectionTitle>
              The AI tools your teams will{" "}
              <span style={{ color: accent }}>use</span>
            </SectionTitle>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
            {[
              { name: "ChatGPT", usage: "All-purpose (text)" },
              { name: "Gemini", usage: "All-purpose (images)" },
              { name: "Claude", usage: "Data & analysis" },
              { name: "Copilot", usage: "GDPR / Microsoft" },
              { name: "Gamma", usage: "Presentations" },
              { name: "Make", usage: "AI Agents" },
              { name: "TLDV", usage: "Meetings" },
              { name: "Lovable", usage: "Apps & tools" },
              { name: "Napkin", usage: "Visuals" },
              { name: "NotebookLM", usage: "PDFs & research" },
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
                <CheckCircle className="w-5 h-5 inline mr-2" style={{ color: accent }} />
                + Custom tool selection based on{" "}
                <span className="font-mono font-bold" style={{ color: accent }}>
                  Europ Assistance
                </span>
                &apos;s specific use cases
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          PROGRAM
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionLabel>cat programs.md</SectionLabel>
            <SectionTitle>
              Two formats, one{" "}
              <span style={{ color: accent }}>goal</span>
            </SectionTitle>
          </FadeIn>

          {/* ── ACCESS ── */}
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
                    1 day — 7 hours
                  </h3>
                  <p className="text-sm" style={{ color: gray }}>
                    The essentials to be operational immediately
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    time: "9am - 10:30am",
                    title: "What AI can do — and what it can't",
                    desc: "The fundamentals without jargon: how LLMs work, where they excel, where they fail. A clear framework to tell valuable use cases from empty promises.",
                    type: "DEMO",
                    typeColor: "#3B82F6",
                  },
                  {
                    time: "10:45am - 12:30pm",
                    title: "Talking to AI: the art of the first-try prompt",
                    desc: "Structure your requests with proven frameworks to get actionable results immediately — regardless of the tool.",
                    type: "WORKSHOPS",
                    typeColor: accent,
                  },
                  {
                    time: "1:30pm - 3pm",
                    title: "The right AI for the right job",
                    desc: "ChatGPT, Claude, Gemini, Copilot, Gamma, NotebookLM... We test, we compare, each participant identifies the 3-4 tools that matter for THEIR role.",
                    type: "DEMO",
                    typeColor: "#3B82F6",
                  },
                  {
                    time: "3:15pm - 5pm",
                    title: "First AI workflows",
                    desc: "Each participant builds their first AI assistant and automates a real recurring task. You leave with a working tool.",
                    type: "WORKSHOPS",
                    typeColor: accent,
                  },
                ].map((mod, i) => (
                  <FadeIn key={mod.time} delay={i * 0.05}>
                    <Card className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="shrink-0">
                        <div
                          className="w-20 text-center py-2 rounded-lg font-mono font-bold text-xs"
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

          {/* ── FULL PACK ── */}
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
                    2 days — 15 hours
                  </h3>
                  <p className="text-sm" style={{ color: gray }}>
                    Full mastery + advanced workflows + venue &amp; catering included
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="font-mono font-bold text-sm mb-3" style={{ color: "#3B82F6" }}>
                    DAY 1 — Understand &amp; prompt
                  </p>
                  <div className="space-y-3">
                    {[
                      { time: "9am - 12:30pm", title: "AI fundamentals + advanced prompting", type: "DEMO + WORKSHOPS" },
                      { time: "1:30pm - 5pm", title: "Tool landscape + first use cases", type: "DEMO + WORKSHOPS" },
                    ].map((slot) => (
                      <Card key={slot.time} className="!p-4">
                        <p className="font-mono text-xs mb-1" style={{ color: accent }}>{slot.time}</p>
                        <p className="font-mono font-bold text-sm mb-1" style={{ color: offWhite }}>{slot.title}</p>
                        <p className="text-xs" style={{ color: gray }}>{slot.type}</p>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-mono font-bold text-sm mb-3" style={{ color: accent }}>
                    DAY 2 — Build &amp; deploy
                  </p>
                  <div className="space-y-3">
                    {[
                      { time: "9am - 12:30pm", title: "Advanced AI workflows + custom agents", type: "WORKSHOPS" },
                      { time: "1:30pm - 5pm", title: "Full automation + individual action plan", type: "WORKSHOPS" },
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

              <Card className="!border-solid" style={{ borderColor: `${accent}60` }}>
                <p className="font-mono font-bold text-sm mb-3" style={{ color: accent }}>
                  INCLUDED IN THE FULL PACK
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: MapPin, label: "Premium venue" },
                    { icon: Coffee, label: "Breakfast" },
                    { icon: UtensilsCrossed, label: "Catered lunch" },
                    { icon: Handshake, label: "30-day follow-up" },
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
          CONCRETE RESULTS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4" style={{ backgroundColor: charcoalLight }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionLabel>cat results.json</SectionLabel>
            <SectionTitle>
              Concrete <span style={{ color: accent }}>results</span>
            </SectionTitle>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Clock,
                tag: "Time",
                tagColor: "#3B82F6",
                title: "Your mornings, freed up",
                subtitle: "Delegate admin work to AI",
                desc: "Emails, meeting notes, summaries, reporting: what took 2 hours now takes 15 minutes. Your teams focus on decisions, not formatting.",
              },
              {
                icon: Bot,
                tag: "Autonomy",
                tagColor: accent,
                title: "Your workflows, automated",
                subtitle: "No IT ticket required",
                desc: "Each participant leaves with their own AI assistants configured for their daily tasks. Zero code, zero support ticket.",
              },
              {
                icon: Sparkles,
                tag: "Impact",
                tagColor: "#10B981",
                title: "Deliverables on another level",
                subtitle: "Reports, visuals, documents",
                desc: "Richer reports, sharper presentations, data analysis in a few clicks. The quality of output shifts to a new category.",
              },
              {
                icon: Award,
                tag: "Leadership",
                tagColor: "#8B5CF6",
                title: "The AI reflex across your teams",
                subtitle: "From bystander to driver",
                desc: "Your executives become the AI champions of their department. They train, they share, they accelerate adoption around them.",
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
              Source: Harvard/BCG 2024 study, &quot;Navigating the Jagged Technological Frontier&quot;
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FULL PACK EXPERIENCE
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionLabel>cat experience.md</SectionLabel>
            <SectionTitle>
              The{" "}
              <span style={{ color: accent }}>Full Pack</span> experience
            </SectionTitle>
            <p className="text-lg mb-10" style={{ color: cream }}>
              Training in an exceptional setting, with everything included.
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
                  231 rue Saint-Honore, Paris 1st
                </p>
                <p style={{ color: gray }}>
                  A unique and inspiring venue in the heart of Paris. Far from
                  typical meeting rooms, your teams train in a space designed for
                  creativity and collaboration.
                </p>
              </Card>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Card>
                <UtensilsCrossed className="w-8 h-8 mb-4" style={{ color: accent }} />
                <h3 className="font-mono font-bold text-xl mb-2" style={{ color: offWhite }}>
                  Catering included
                </h3>
                <div className="space-y-3 mt-4">
                  {[
                    { icon: Coffee, label: "Welcome breakfast", time: "8:30am - 9:00am" },
                    { icon: UtensilsCrossed, label: "Catered lunch", time: "12:30pm - 1:30pm" },
                    { icon: CakeSlice, label: "Afternoon snack & coffee", time: "4:00pm - 4:15pm" },
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
            <SectionLabel>cat co-build.md</SectionLabel>
            <SectionTitle>
              A program built{" "}
              <span style={{ color: accent }}>with you</span>
            </SectionTitle>
            <p className="text-lg mb-10" style={{ color: cream }}>
              We don&apos;t sell a fixed curriculum. We build YOUR program,
              tailored to the roles and challenges at Europ Assistance.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Target,
                title: "Real use cases",
                desc: "We identify together the highest-impact use cases for your teams: insurance, customer relations, claims management, support...",
              },
              {
                icon: Wrench,
                title: "Custom tool selection",
                desc: "Tool selection is adapted to your constraints (GDPR, security, internal tools) and your specific objectives.",
              },
              {
                icon: Users,
                title: "Groups by department",
                desc: "For 100 executives, we organize 5 sessions of 20 people by business unit to maximize workshop relevance.",
              },
              {
                icon: Handshake,
                title: "Follow-up & reinforcement",
                desc: "After training: recap videos, WhatsApp/email support, and a 30-day follow-up session to anchor new practices.",
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
          TRAINER
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionLabel>whoami</SectionLabel>
            <SectionTitle>Your trainer</SectionTitle>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div
                className="relative rounded-lg overflow-hidden border-2 border-dashed"
                style={{ borderColor: `${accent}40` }}
              >
                <Image
                  src="/fred.jpg"
                  alt="Frederic Orlicki - Growth Acceleration Trainer"
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
                    Founded{" "}
                    <span className="font-mono" style={{ color: accent }}>
                      Growth Acceleration
                    </span>{" "}
                    in 2017. Full stack developer, ex{" "}
                    <span className="font-mono" style={{ color: accent }}>
                      Le Wagon #0001
                    </span>
                    . 10 years of experience in growth, tech, and training.
                  </p>
                  <p>
                    3 SaaS in production with Claude API:{" "}
                    <span className="font-mono" style={{ color: accent }}>VideoTools</span>,{" "}
                    <span className="font-mono" style={{ color: accent }}>Jobbot.io</span>,{" "}
                    <span className="font-mono" style={{ color: accent }}>Bigmails.AI</span>.
                  </p>
                  <p>
                    Trained over{" "}
                    <span className="font-mono font-bold" style={{ color: accent }}>
                      400 professionals
                    </span>{" "}
                    in AI — from advanced prompting to deploying autonomous agents.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  {[
                    { value: "3", label: "SaaS shipped" },
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
          CERTIFICATION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4" style={{ backgroundColor: charcoalLight }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionLabel>cat certification.md</SectionLabel>
            <SectionTitle>
              Certification & <span style={{ color: accent }}>funding</span>
            </SectionTitle>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            <FadeIn>
              <Card>
                <Shield className="w-8 h-8 mb-4" style={{ color: accent }} />
                <h3 className="font-mono font-bold text-xl mb-2" style={{ color: offWhite }}>
                  Qualiopi certification
                </h3>
                <p className="mb-4" style={{ color: gray }}>
                  Qualiopi certification currently in progress.
                  Estimated timeline: 1 month. We can start the process
                  immediately to be ready before sessions launch.
                </p>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" style={{ color: "#98C379" }} />
                  <p className="font-mono text-sm" style={{ color: cream }}>
                    OPCO eligible
                  </p>
                </div>
              </Card>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Card>
                <GraduationCap className="w-8 h-8 mb-4" style={{ color: accent }} />
                <h3 className="font-mono font-bold text-xl mb-2" style={{ color: offWhite }}>
                  Custom pricing
                </h3>
                <p className="mb-4" style={{ color: gray }}>
                  Budget is adapted to the number of sessions, participants,
                  and level of customization required. Everything is included:
                  training, venue, catering, and follow-up.
                </p>
                <div className="space-y-2">
                  {["Premium venue included", "Full catering included", "Materials and post-training follow-up included"].map((item) => (
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
          FINAL CTA
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="font-mono text-sm mb-4" style={{ color: accent }}>
              &gt; next-step
            </p>
            <h2 className="text-3xl md:text-5xl font-mono font-bold mb-6" style={{ color: offWhite }}>
              Let&apos;s build your program{" "}
              <span style={{ color: accent }}>together</span>
            </h2>
            <p className="text-lg mb-10" style={{ color: cream }}>
              30 minutes to validate your objectives, choose the format,
              and kick off the co-construction of your program.
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
                Schedule a call <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="mailto:fredericorlicki@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-mono font-bold text-lg border-2 border-dashed transition-all hover:scale-105"
                style={{ borderColor: `${accent}60`, color: accent }}
              >
                Send an email
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
