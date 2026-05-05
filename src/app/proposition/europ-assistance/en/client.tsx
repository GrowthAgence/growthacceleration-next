"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Car, Plane, Headphones, Network, MapPin, Coffee,
  UtensilsCrossed, CakeSlice, Users, Rocket, CheckCircle,
  Shield, GraduationCap, CalendarDays, Bot,
  Globe, Sparkles, Server, Layers, BookOpen, Gauge, Code,
  Repeat, Zap,
} from "lucide-react";

const accent = "#E07A5F";
const charcoal = "#1E1E1E";
const charcoalLight = "#2D2A2E";
const cream = "#F4F1DE";
const offWhite = "#FAFAFA";
const gray = "#A9A9A9";
const green = "#98C379";
const blue = "#3B82F6";
const purple = "#8B5CF6";
const amber = "#F59E0B";

// ── Primitives ────────────────────────────────────────────────────────────────

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-sm mb-2" style={{ color: accent }}>&gt; {children}</p>;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-3xl md:text-4xl font-mono font-bold text-[#FAFAFA] mb-8">{children}</h2>;
}

function Card({ children, className = "", style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`rounded-lg border-2 border-dashed p-6 ${className}`}
      style={{ backgroundColor: charcoalLight, borderColor: `${accent}40`, ...style }}>
      {children}
    </div>
  );
}

// ── Animated Counter ──────────────────────────────────────────────────────────

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const startTime = Date.now();
    const tick = () => {
      const progress = Math.min((Date.now() - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ── Typing Text ───────────────────────────────────────────────────────────────

function TypingText({ text, speed = 60, delay = 0 }: { text: string; speed?: number; delay?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const t = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) { setDisplayed(text.slice(0, ++i)); }
        else { clearInterval(interval); setDone(true); }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(t);
  }, [inView, text, speed, delay]);

  useEffect(() => {
    if (!done) return;
    const blink = setInterval(() => setShowCursor(v => !v), 530);
    return () => clearInterval(blink);
  }, [done]);

  return <span ref={ref}>{displayed}<span style={{ color: accent, opacity: showCursor ? 1 : 0 }}>█</span></span>;
}

// ── Animated Terminal ─────────────────────────────────────────────────────────

const TERM_LINES: Array<{ text: string; type: "cmd" | "ok" | "data" | "done" }> = [
  { text: "$ dust connect --workspace europ-assistance-training", type: "cmd" },
  { text: "[OK] Dust workspace connected", type: "ok" },
  { text: "[OK] Data sources loaded: 4 domains available", type: "ok" },
  { text: "[OK] Agent builder: ready", type: "ok" },
  { text: "$ dust agent create --domain auto --brief claims-accelerator", type: "cmd" },
  { text: '{"agent":"Claims Accelerator","status":"configured","tools":["search","classify","draft"]}', type: "data" },
  { text: "$ dust agent run --input fake-dossiers/AUT-2847.pdf", type: "cmd" },
  { text: '{"priority":"HIGH","type":"breakdown","draft":"Bonjour M. Dupont, nous avons bien reçu..."}', type: "data" },
  { text: "[DONE] Agent processed 47 dossiers — 12 auto-resolved — 0 errors", type: "done" },
];

function AnimatedTerminal() {
  const [lines, setLines] = useState<typeof TERM_LINES>([]);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i < TERM_LINES.length) {
        const line = TERM_LINES[i];
        i++;
        setLines(prev => [...prev, line]);
      } else {
        clearInterval(interval);
      }
    }, 380);
    return () => clearInterval(interval);
  }, [inView]);

  const colors = { cmd: accent, ok: green, data: gray, done: blue };

  return (
    <div ref={ref} className="rounded-lg p-5 font-mono text-xs overflow-hidden"
      style={{ backgroundColor: "#0D0D0D", border: `1px solid ${accent}25` }}>
      <div className="flex items-center gap-1.5 mb-4">
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FF5F57" }} />
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FFBD2E" }} />
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#28C840" }} />
        <span className="ml-2 text-xs" style={{ color: gray }}>dust-agent — bash</span>
      </div>
      <div className="space-y-1 leading-relaxed">
        {lines.map((line, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.15 }} style={{ color: colors[line.type] }}>
            {line.text}
          </motion.div>
        ))}
        {lines.length < TERM_LINES.length && (
          <span style={{ color: accent }} className="animate-pulse">▋</span>
        )}
      </div>
    </div>
  );
}

// ── Progress Bar ──────────────────────────────────────────────────────────────

function ProgressBar({ label, pct, delay = 0, color = accent }: { label: string; pct: number; delay?: number; color?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref}>
      <div className="flex justify-between mb-1">
        <span className="font-mono text-sm" style={{ color: cream }}>{label}</span>
        <span className="font-mono text-xs" style={{ color: gray }}>{pct}%</span>
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: `${color}18` }}>
        <motion.div className="h-full rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          style={{ backgroundColor: color }} />
      </div>
    </div>
  );
}

// ── Timeline Slot ─────────────────────────────────────────────────────────────

function TimelineSlot({ time, title, tag, tagColor, delay = 0 }: { time: string; title: string; tag: string; tagColor: string; delay?: number }) {
  return (
    <FadeIn delay={delay}>
      <div className="flex gap-3 items-start pb-4">
        <div className="flex flex-col items-center pt-1 shrink-0">
          <div className="w-2.5 h-2.5 rounded-full border-2 shrink-0" style={{ borderColor: accent, backgroundColor: charcoal }} />
          <div className="w-px flex-1 min-h-5 mt-1" style={{ backgroundColor: `${accent}25` }} />
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="font-mono text-xs mb-0.5" style={{ color: gray }}>{time}</p>
              <p className="font-mono font-bold text-sm" style={{ color: offWhite }}>{title}</p>
            </div>
            <span className="shrink-0 px-2 py-0.5 rounded-full text-xs font-mono font-bold"
              style={{ backgroundColor: `${tagColor}18`, color: tagColor }}>{tag}</span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}


// ── Main Component ────────────────────────────────────────────────────────────

export function EuropAssistanceProposalEN() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: charcoal, color: cream }}>

      {/* HERO */}
      <section className="relative pt-20 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 50% -10%, ${accent}22 0%, transparent 62%)` }} />
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(${accent} 1px, transparent 1px), linear-gradient(90deg, ${accent} 1px, transparent 1px)`, backgroundSize: "56px 56px" }} />

        <div className="max-w-5xl mx-auto relative z-10">
          <FadeIn className="flex items-center justify-center gap-8 md:gap-12 mb-12">
            <Image src="/logo.png" alt="Growth Acceleration" width={200} height={44} className="h-8 md:h-10 w-auto" />
            <span className="text-2xl font-mono font-light" style={{ color: `${accent}70` }}>×</span>
            <Image src="/logos/europ-assistance.png" alt="Europ Assistance" width={220} height={80} className="h-10 md:h-14 w-auto" />
          </FadeIn>

          <FadeIn delay={0.1} className="text-center mb-6">
            <p className="font-mono text-xs inline-block px-4 py-2 rounded-lg"
              style={{ color: gray, backgroundColor: `${accent}0D`, border: `1px solid ${accent}22` }}>
              $ ./run-proposal --client europ-assistance --format training-day --platform dust
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="text-center mb-6">
            <p className="font-mono text-sm mb-3" style={{ color: accent }}>&gt; program.name</p>
            <h1 className="text-5xl md:text-7xl font-mono font-bold leading-tight" style={{ color: offWhite }}>
              AI Solutions{" "}
              <span style={{ color: accent }}>
                <TypingText text="Lab" delay={900} speed={90} />
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.4} className="text-center mb-10">
            <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: cream }}>
              1 day. 20 managers. 4 real-world challenges.
              <br />
              <span className="font-mono" style={{ color: accent }}>Build AI agents directly on Dust — no installation, no theory.</span>
            </p>
          </FadeIn>

          <FadeIn delay={0.5} className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { label: "20 managers / session", icon: Users },
              { label: "1 day intensive", icon: CalendarDays },
              { label: "4 EA domains", icon: Layers },
              { label: "Dust.tt platform", icon: Bot },
              { label: "Paris 1er", icon: MapPin },
            ].map(({ label, icon: Icon }, i) => (
              <motion.div key={label}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.08, type: "spring", stiffness: 220 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full font-mono text-sm"
                style={{ backgroundColor: charcoalLight, border: `1px solid ${accent}28`, color: cream }}>
                <Icon className="w-4 h-4" style={{ color: accent }} />
                {label}
              </motion.div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 px-4 border-y" style={{ borderColor: `${accent}18`, backgroundColor: charcoalLight }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 20, suffix: "", label: "Managers per session" },
              { value: 1, suffix: " day", label: "Per cohort" },
              { value: 4, suffix: "", label: "Business domains" },
              { value: 5, suffix: " sessions", label: "To reach 100 managers" },
            ].map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.1} className="text-center">
                <p className="text-5xl font-mono font-bold mb-2" style={{ color: accent }}>
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </p>
                <p className="font-mono text-xs uppercase tracking-wider" style={{ color: gray }}>{s.label}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CONCEPT */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionLabel>cat concept.md</SectionLabel>
            <SectionTitle>Not slides. <span style={{ color: accent }}>Real agents.</span></SectionTitle>
            <p className="text-lg mb-10 max-w-3xl" style={{ color: cream }}>
              Each session is a hands-on day where managers build working AI agents on Dust — connected to realistic Europ Assistance data. No PowerPoint. No theory. Every participant leaves with something they built themselves.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Rocket, title: "Build on Dust", desc: "Managers configure real agents in your Dust workspace — on data that mirrors EA's actual environment.", tag: "PLATFORM" },
              { icon: Repeat, title: "Repeatable cohorts", desc: "Same program, 5 sessions of 20. Each cohort gets the same experience — consistent quality, scalable rollout.", tag: "FORMAT" },
              { icon: Zap, title: "Day-1 ready", desc: "Every participant leaves with a working agent and a concrete use case they can apply in their role the next morning.", tag: "OUTCOME" },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <Card>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${accent}15` }}>
                      <item.icon className="w-5 h-5" style={{ color: accent }} />
                    </div>
                    <span className="px-2 py-1 rounded-full text-xs font-mono font-bold" style={{ backgroundColor: `${accent}15`, color: accent }}>{item.tag}</span>
                  </div>
                  <h3 className="font-mono font-bold text-lg mb-2" style={{ color: offWhite }}>{item.title}</h3>
                  <p className="text-sm" style={{ color: gray }}>{item.desc}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4 DOMAINS */}
      <section className="py-16 px-4" style={{ backgroundColor: charcoalLight }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionLabel>ls challenges/</SectionLabel>
            <SectionTitle>4 domains. 4 <span style={{ color: accent }}>real challenges.</span></SectionTitle>
            <p className="text-lg mb-10" style={{ color: cream }}>
              Each session focuses on one domain. Teams attack a real EA problem — with realistic data, a clear brief, and a working agent to deliver by end of day.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Car, color: blue, domain: "AUTO ASSISTANCE", challenge: "Claims Accelerator", desc: "Build an agent that triages, summarizes, and auto-responds to car assistance claims.", input: "50 fake dossiers", output: "Classification + priority + draft response" },
              { icon: Plane, color: purple, domain: "TRAVEL & REPATRIATION", challenge: "Emergency Intelligence", desc: "International emergency management across 200 simulated countries. Coordinate medical providers in real time.", input: "200-country virtual network", output: "Recommended actions + provider contact" },
              { icon: Headphones, color: green, domain: "HEALTH & TELEMEDICINE", challenge: "Care Coordinator", desc: "Triage medical requests, match patients with the right remote doctor, and track consultation outcomes.", input: "500 fake patient requests + doctor network", output: "Triage score + doctor match + follow-up plan" },
              { icon: Network, color: amber, domain: "PROVIDER COORDINATION", challenge: "Network Builder", desc: "Find and contact the right providers (doctors, mechanics, hotels) by geolocation and urgency level.", input: "12,400 fake partners database", output: "Optimized match + automated outreach" },
            ].map((item, i) => (
              <FadeIn key={item.domain} delay={i * 0.1}>
                <div style={{ perspective: "1000px" }}>
                  <motion.div
                    className="rounded-lg border-2 border-dashed p-6 cursor-default h-full"
                    style={{ backgroundColor: charcoal, borderColor: `${item.color}40` }}
                    whileHover={{ rotateX: -3, rotateY: 4, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${item.color}15` }}>
                        <item.icon className="w-6 h-6" style={{ color: item.color }} />
                      </div>
                    </div>
                    <p className="font-mono text-xs mb-1 uppercase tracking-wider" style={{ color: item.color }}>{item.domain}</p>
                    <h3 className="font-mono font-bold text-xl mb-2" style={{ color: offWhite }}>{item.challenge}</h3>
                    <p className="text-sm mb-4" style={{ color: gray }}>{item.desc}</p>
                    <div className="space-y-1.5 pt-4 border-t border-dashed" style={{ borderColor: `${item.color}20` }}>
                      <div className="flex gap-2 text-xs font-mono">
                        <span style={{ color: item.color }}>INPUT</span>
                        <span style={{ color: gray }}>{item.input}</span>
                      </div>
                      <div className="flex gap-2 text-xs font-mono">
                        <span style={{ color: item.color }}>OUTPUT</span>
                        <span style={{ color: gray }}>{item.output}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* DUST PLATFORM */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionLabel>cat platform.md</SectionLabel>
            <SectionTitle>Everything runs <span style={{ color: accent }}>on Dust.</span></SectionTitle>
            <p className="text-lg mb-3" style={{ color: cream }}>
              No new tools. No installation. Managers work directly in your existing Dust environment — connected to realistic EA data, configured before Day 1.
            </p>
            <div className="flex items-center gap-2 mb-10">
              <CheckCircle className="w-4 h-4" style={{ color: green }} />
              <p className="font-mono text-sm" style={{ color: green }}>Works on any EA laptop — browser only, zero IT friction.</p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <FadeIn><AnimatedTerminal /></FadeIn>
            <FadeIn delay={0.2}>
              <div className="space-y-4">
                {[
                  { icon: Server, title: "Realistic EA data, pre-loaded in Dust", desc: "Fake but realistic data sources (claims, cases, provider network) loaded into Dust before the session. Teams start building from minute one." },
                  { icon: Bot, title: "Agent builder — no code required", desc: "Managers configure agent behavior, instructions, and data sources directly in the Dust interface. No API, no terminal." },
                  { icon: Globe, title: "Your Dust workspace, your rules", desc: "The training runs inside EA's Dust environment. Connectors, permissions, and data sources are confirmed in advance with your technical team." },
                ].map((item) => (
                  <Card key={item.title} className="!p-4 flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${accent}15` }}>
                      <item.icon className="w-4 h-4" style={{ color: accent }} />
                    </div>
                    <div>
                      <h3 className="font-mono font-bold text-sm mb-1" style={{ color: offWhite }}>{item.title}</h3>
                      <p className="text-sm" style={{ color: gray }}>{item.desc}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* UPSKILLING APP */}
      <section className="py-16 px-4" style={{ backgroundColor: charcoalLight }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionLabel>cat pre-training.md</SectionLabel>
            <SectionTitle>A dedicated platform — <span style={{ color: accent }}>built for EA.</span></SectionTitle>
            <p className="text-lg mb-4" style={{ color: cream }}>
              15 days before each session, every participant gets access to a custom-built web app. 5 modules, ~4h, self-paced. But the real value isn&apos;t just the training.
            </p>
            <p className="text-lg mb-10 font-mono" style={{ color: accent }}>
              The platform detects each participant&apos;s level — and groups them into batches accordingly.
            </p>
          </FadeIn>

          {/* Dashboard mockup */}
          <FadeIn>
            <div className="rounded-xl overflow-hidden border border-dashed mb-10"
              style={{ borderColor: `${accent}30`, backgroundColor: "#0D0D0D" }}>

              {/* App bar */}
              <div className="flex items-center justify-between px-5 py-3 border-b"
                style={{ borderColor: `${accent}18`, backgroundColor: "#111" }}>
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FF5F57" }} />
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FFBD2E" }} />
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#28C840" }} />
                  </div>
                  <p className="font-mono text-xs" style={{ color: gray }}>EA AI Readiness — Cohort 1 · J-12</p>
                </div>
                <span className="font-mono text-xs px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: `${green}15`, color: green }}>● LIVE</span>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-4 border-b" style={{ borderColor: `${accent}12` }}>
                {[
                  { label: "Completed", value: "14 / 20", color: green },
                  { label: "Avg. score", value: "72%", color: blue },
                  { label: "In progress", value: "4", color: amber },
                  { label: "Not started", value: "2", color: gray },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 border-r last:border-r-0" style={{ borderColor: `${accent}12` }}>
                    <p className="font-mono text-xs mb-1" style={{ color: gray }}>{stat.label}</p>
                    <p className="font-mono font-bold text-xl" style={{ color: stat.color }}>{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Participant table */}
              <div className="p-4">
                <p className="font-mono text-xs uppercase tracking-wider mb-3" style={{ color: gray }}>Participants · Level detection</p>
                <div className="space-y-2">
                  {[
                    { name: "M. Dupont", dept: "Auto Claims",    pct: 94, level: "Advanced",     lc: green  },
                    { name: "S. Laurent", dept: "Travel Ops",    pct: 88, level: "Advanced",     lc: green  },
                    { name: "A. Martin", dept: "HR",             pct: 76, level: "Advanced",     lc: green  },
                    { name: "C. Bernard", dept: "Customer Svc",  pct: 61, level: "Intermediate", lc: blue   },
                    { name: "P. Moreau", dept: "Finance",        pct: 55, level: "Intermediate", lc: blue   },
                    { name: "L. Thomas", dept: "IT",             pct: 48, level: "Intermediate", lc: blue   },
                    { name: "E. Petit", dept: "Legal",           pct: 32, level: "Beginner",     lc: amber  },
                    { name: "F. Simon", dept: "Operations",      pct: 18, level: "Beginner",     lc: amber  },
                  ].map((p, i) => (
                    <motion.div key={p.name}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.07, duration: 0.3 }}
                      className="flex items-center gap-3 rounded-lg px-3 py-2"
                      style={{ backgroundColor: `${accent}05` }}>
                      <div className="w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold shrink-0"
                        style={{ backgroundColor: `${p.lc}18`, color: p.lc }}>
                        {p.name[0]}
                      </div>
                      <div className="w-28 shrink-0">
                        <p className="font-mono text-xs font-bold" style={{ color: offWhite }}>{p.name}</p>
                        <p className="font-mono text-xs" style={{ color: gray }}>{p.dept}</p>
                      </div>
                      <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: `${p.lc}18` }}>
                        <motion.div className="h-full rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${p.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + i * 0.07, duration: 0.8, ease: "easeOut" }}
                          style={{ backgroundColor: p.lc }} />
                      </div>
                      <span className="font-mono text-xs w-8 text-right shrink-0" style={{ color: p.lc }}>{p.pct}%</span>
                      <span className="font-mono text-xs px-2 py-0.5 rounded-full shrink-0"
                        style={{ backgroundColor: `${p.lc}15`, color: p.lc }}>{p.level}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Batch formation */}
                <div className="mt-4 pt-4 border-t border-dashed" style={{ borderColor: `${accent}15` }}>
                  <p className="font-mono text-xs uppercase tracking-wider mb-3" style={{ color: accent }}>
                    ↳ Suggested batch assignment for September
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Batch A — Advanced",      count: "3 managers", color: green,  desc: "Challenge difficulty: MAX" },
                      { label: "Batch B — Intermediate",  count: "3 managers", color: blue,   desc: "Challenge difficulty: MED" },
                      { label: "Batch C — Beginner",      count: "2 managers", color: amber,  desc: "Challenge difficulty: BASE" },
                    ].map((batch) => (
                      <div key={batch.label} className="rounded-lg p-3"
                        style={{ backgroundColor: `${batch.color}0C`, border: `1px solid ${batch.color}25` }}>
                        <p className="font-mono text-xs font-bold mb-1" style={{ color: batch.color }}>{batch.label}</p>
                        <p className="font-mono text-xs" style={{ color: offWhite }}>{batch.count}</p>
                        <p className="font-mono text-xs" style={{ color: gray }}>{batch.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { icon: Gauge, color: blue, title: "Automatic level detection", desc: "Each module ends with a scored exercise. The platform computes a readiness score per participant and assigns a level: Beginner, Intermediate, or Advanced." },
              { icon: Users, color: green, title: "Smart batch formation", desc: "Based on detected levels, the coordinator gets a suggested batch assignment. Advanced managers tackle harder challenges — beginners get extra scaffolding." },
              { icon: Code, color: purple, title: "Dust sandbox included", desc: "Module 4 is a live Dust walkthrough. Participants configure a first assistant before Day 1 — no one is blocked on the morning." },
              { icon: BookOpen, color: accent, title: "EA retains the platform", desc: "After all sessions, the upskilling app stays with Europ Assistance. Use it for future cohorts, new hires, or ongoing AI skill development." },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="flex gap-4 items-start p-4 rounded-lg border border-dashed"
                  style={{ borderColor: `${item.color}25`, backgroundColor: `${item.color}06` }}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${item.color}15` }}>
                    <item.icon className="w-4 h-4" style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="font-mono font-bold text-sm mb-1" style={{ color: offWhite }}>{item.title}</p>
                    <p className="text-sm" style={{ color: gray }}>{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM — 1 DAY */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionLabel>cat schedule.md</SectionLabel>
            <SectionTitle>One day. <span style={{ color: accent }}>Full build.</span></SectionTitle>
            <p className="text-lg mb-10" style={{ color: cream }}>
              From zero to a production-ready AI agent in 8 hours. Every step is structured around building — not watching, not listening.
            </p>
          </FadeIn>

          <div className="space-y-4">
            {([
              {
                num: "00", time: "9:00 – 10:00", name: "Foundation",
                color: gray, simple: true,
                pills: [
                  { label: "Welcome + breakfast",          color: gray   },
                  { label: "Keynote — why agents, why Dust", color: accent },
                  { label: "Live demo by trainer",          color: blue   },
                  { label: "Teams + brief + Dust access",   color: purple },
                ],
              },
              {
                num: "01", time: "10:00 – 12:30", name: "First working agent",
                color: blue, simple: false,
                do: ["Connect Dust to EA data source", "Configure your first assistant", "Define instructions + test first queries"],
                produce: "A Dust agent that reads, searches, and retrieves EA dossiers — live, in your workspace.",
              },
              {
                num: "02", time: "13:30 – 15:15", name: "Make it smart",
                color: accent, simple: false,
                do: ["Refine prompts for precision and reliability", "Handle edge cases and unexpected inputs", "Structure outputs in a usable format"],
                produce: "An agent that classifies, prioritizes, and drafts responses automatically — without human intervention.",
              },
              {
                num: "03", time: "15:15 – 16:15", name: "Ship it",
                color: green, simple: false,
                do: ["Polish outputs against the challenge brief", "Benchmark: does it solve the problem?", "Prepare your 5-min pitch for the jury"],
                produce: "A production-ready agent + a business pitch showing the ROI for Europ Assistance.",
              },
              {
                num: "04", time: "16:15 – 17:00", name: "Pitches",
                color: purple, simple: false,
                do: ["5-min presentation per team", "Jury Q&A — real business questions", "Watch other teams' solutions"],
                produce: "Jury verdict. The best solutions are flagged for real deployment inside Europ Assistance.",
              },
              {
                num: "05", time: "17:00 – 17:30", name: "Debrief + closing drinks",
                color: green, simple: true,
                pills: [
                  { label: "What worked across all teams", color: green },
                  { label: "Next steps for deployment",    color: blue  },
                  { label: "Every participant leaves with a working agent", color: accent },
                ],
              },
            ] as Array<{
              num: string; time: string; name: string; color: string; simple: boolean;
              pills?: Array<{ label: string; color: string }>;
              do?: string[]; produce?: string;
            }>).map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.08}>
                <motion.div
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="rounded-xl border-2 border-dashed p-5 flex flex-col md:flex-row gap-5"
                  style={{ backgroundColor: charcoal, borderColor: `${step.color}${step.simple ? "25" : "38"}` }}>

                  {/* Number + time */}
                  <div className="shrink-0 flex md:flex-col items-center md:items-start gap-3 md:gap-1.5 md:w-28">
                    <div className="w-11 h-11 rounded-lg flex items-center justify-center font-mono font-bold text-lg shrink-0"
                      style={{ backgroundColor: `${step.color}${step.simple ? "0D" : "18"}`, color: step.color }}>
                      {step.num}
                    </div>
                    <div>
                      <p className="font-mono text-xs" style={{ color: step.color }}>{step.time}</p>
                      <p className="font-mono font-bold text-sm" style={{ color: offWhite }}>{step.name}</p>
                    </div>
                  </div>

                  <div className="hidden md:block w-px" style={{ backgroundColor: `${step.color}18` }} />

                  {/* Content */}
                  {step.simple ? (
                    <div className="flex-1 flex items-center">
                      <div className="flex flex-wrap gap-2">
                        {step.pills?.map((pill) => (
                          <span key={pill.label} className="font-mono text-xs px-3 py-1.5 rounded-full"
                            style={{ backgroundColor: `${pill.color}10`, color: pill.color, border: `1px solid ${pill.color}22` }}>
                            {pill.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex-1">
                        <p className="font-mono text-xs uppercase tracking-wider mb-2" style={{ color: gray }}>What you do</p>
                        <ul className="space-y-1.5">
                          {step.do?.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm" style={{ color: cream }}>
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: step.color }} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="hidden md:block w-px" style={{ backgroundColor: `${step.color}18` }} />
                      <div className="md:w-52 shrink-0">
                        <p className="font-mono text-xs uppercase tracking-wider mb-2" style={{ color: step.color }}>You produce</p>
                        <div className="rounded-lg p-3" style={{ backgroundColor: `${step.color}0A`, border: `1px solid ${step.color}25` }}>
                          <p className="text-sm leading-relaxed" style={{ color: offWhite }}>{step.produce}</p>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PILOT */}
      <section className="py-16 px-4" style={{ backgroundColor: charcoalLight }}>
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <FadeIn>
            <SectionLabel>cat pilot.md</SectionLabel>
            <SectionTitle>June pilot — <span style={{ color: accent }}>before we scale.</span></SectionTitle>
            <p className="text-lg mb-10" style={{ color: cream }}>
              Before the September rollout, we run a full dress rehearsal with 20 EA early adopters — internal AI champions who stress-test everything so the first real cohort is flawless.
            </p>
          </FadeIn>

          {/* Banner JUNE 2026 — full width with green glow */}
          <FadeIn>
            <motion.div
              className="rounded-xl border-2 border-dashed p-6 mb-10 relative overflow-hidden"
              style={{ borderColor: `${green}50`, backgroundColor: charcoal }}
              animate={{ boxShadow: [`0 0 0px ${green}00`, `0 0 32px ${green}22`, `0 0 0px ${green}00`] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Subtle green glow bg */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 10% 50%, ${green}0C 0%, transparent 60%)` }} />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
                {/* Left: title + badge */}
                <div className="flex items-center gap-4 md:w-64 shrink-0">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${green}15`, border: `1px solid ${green}30` }}>
                    <CalendarDays className="w-6 h-6" style={{ color: green }} />
                  </div>
                  <div>
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: `${green}18`, color: green }}>JUNE 2026</span>
                    <p className="font-mono font-bold text-lg mt-1" style={{ color: offWhite }}>Dress Rehearsal</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px self-stretch" style={{ backgroundColor: `${green}20` }} />

                {/* Right: 4 stats in a row */}
                <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "Participants", value: "20 managers" },
                    { label: "Format", value: "1 full day" },
                    { label: "Platform", value: "Dust (real)" },
                    { label: "Output", value: "Validation report" },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="font-mono text-xs uppercase tracking-wider mb-1" style={{ color: gray }}>{item.label}</p>
                      <p className="font-mono font-bold text-sm" style={{ color: offWhite }}>{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="relative z-10 font-mono text-xs mt-5 pt-4 border-t border-dashed" style={{ borderColor: `${green}20`, color: gray }}>
                ↳ If anything needs adjusting before September, we fix it in June — not in front of a live cohort.
              </p>
            </motion.div>
          </FadeIn>

          {/* Schedule — two columns */}
          <FadeIn delay={0.1}>
            <p className="font-mono text-sm font-bold uppercase tracking-wider mb-6" style={{ color: accent }}>
              &gt; pilot --schedule --full
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {/* MORNING */}
            <div>
              <FadeIn delay={0.15}>
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-dashed" style={{ borderColor: `${blue}30` }}>
                  <div className="w-2 h-8 rounded-full shrink-0" style={{ backgroundColor: blue }} />
                  <div>
                    <p className="font-mono font-bold text-sm" style={{ color: blue }}>MORNING</p>
                    <p className="font-mono text-xs" style={{ color: gray }}>Discover & Configure</p>
                  </div>
                  <span className="ml-auto font-mono text-xs shrink-0" style={{ color: gray }}>9:00 – 12:30</span>
                </div>
              </FadeIn>
              {[
                { time: "9:00",  title: "Welcome + breakfast",                                  tag: "WELCOME", tagColor: gray   },
                { time: "9:30",  title: "Keynote — AI & Dust: what agents can do for EA",       tag: "KEYNOTE", tagColor: accent },
                { time: "10:00", title: "Live demo — trainer builds a Dust agent in real time", tag: "DEMO",    tagColor: blue   },
                { time: "10:30", title: "Teams formed + brief + Dust workspace access",         tag: "SETUP",   tagColor: purple },
                { time: "11:00", title: "Sprint 1 — first Dust assistant on EA data",           tag: "BUILD",   tagColor: blue   },
                { time: "12:30", title: "Lunch + informal coaching per table",                  tag: "BREAK",   tagColor: gray   },
              ].map((s, i) => <TimelineSlot key={s.time} {...s} delay={0.2 + i * 0.04} />)}
            </div>

            {/* AFTERNOON */}
            <div className="border-t md:border-t-0 md:border-l border-dashed pt-8 md:pt-0 md:pl-8"
              style={{ borderColor: `${accent}20` }}>
              <FadeIn delay={0.3}>
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-dashed" style={{ borderColor: `${accent}30` }}>
                  <div className="w-2 h-8 rounded-full shrink-0" style={{ backgroundColor: accent }} />
                  <div>
                    <p className="font-mono font-bold text-sm" style={{ color: accent }}>AFTERNOON</p>
                    <p className="font-mono text-xs" style={{ color: gray }}>Refine & Validate</p>
                  </div>
                  <span className="ml-auto font-mono text-xs shrink-0" style={{ color: gray }}>13:30 – 17:30</span>
                </div>
              </FadeIn>
              {[
                { time: "13:30", title: "Sprint 2 — better prompts, edge cases, structured outputs", tag: "BUILD",    tagColor: accent  },
                { time: "15:00", title: "Snack + trainer visits each team (10 min)",                 tag: "COACHING", tagColor: gray    },
                { time: "15:15", title: "Sprint final — polish + 5-min pitch prep",                  tag: "POLISH",   tagColor: purple  },
                { time: "16:15", title: "Pitches — 5 min/team + trainer Q&A",                        tag: "PITCH",    tagColor: accent  },
                { time: "17:00", title: "Pilot debrief — what to adjust before September",           tag: "RETRO",    tagColor: blue    },
                { time: "17:30", title: "Closing drinks",                                            tag: "DONE",     tagColor: green   },
              ].map((s, i) => <TimelineSlot key={s.time} {...s} delay={0.35 + i * 0.04} />)}
            </div>
          </div>

          {/* PILOT DELIVERABLE — full width */}
          <FadeIn delay={0.5}>
            <div className="mt-10 rounded-xl p-6 flex flex-col md:flex-row md:items-center gap-5 relative overflow-hidden"
              style={{ backgroundColor: `${accent}0D`, border: `2px dashed ${accent}50` }}>
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 0% 50%, ${accent}10 0%, transparent 60%)` }} />
              <div className="relative z-10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${accent}18`, border: `1px solid ${accent}35` }}>
                <CheckCircle className="w-6 h-6" style={{ color: accent }} />
              </div>
              <div className="relative z-10 flex-1">
                <p className="font-mono font-bold text-sm uppercase tracking-wider mb-1" style={{ color: accent }}>
                  Pilot Deliverable
                </p>
                <p style={{ color: cream }}>
                  Full validation report covering Dust configuration, brief clarity, timing, and agent output quality.{" "}
                  <span className="font-mono" style={{ color: accent }}>Everything fixed before the first real cohort.</span>
                </p>
              </div>
              <div className="relative z-10 shrink-0">
                <span className="font-mono text-xs px-3 py-1.5 rounded-lg"
                  style={{ backgroundColor: `${accent}15`, color: accent, border: `1px solid ${accent}30` }}>
                  → September-ready
                </span>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* TRAINERS */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionLabel>ls trainers/</SectionLabel>
            <SectionTitle>6 <span style={{ color: accent }}>expert</span> trainers</SectionTitle>
            <p className="text-lg mb-10" style={{ color: cream }}>1–2 trainers per session. Each expert covers a specific dimension of the program.</p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: "Frederic Orlicki", role: "Lead Trainer", co: "Growth Acceleration", tag: "Program Director", stats: "400+ professionals trained, Le Wagon #0001" },
              { name: "Samuel Berthe", role: "Head of Studies", co: "EPITECH", tag: "Hackathon Expert", stats: "Co-organizer, Shift AI Hackathon" },
              { name: "Simon Timssale-Bourrioux", role: "AI Pedagogy", co: "Explore The Vault", tag: "AI Educator", stats: "6,000+ followers — accessible AI expert" },
              { name: "Maxime Pitussi", role: "Growth + AI", co: "Founder, Let's Fail", tag: "Intrapreneurship", stats: "Organizer, Startup Weekends Nantes" },
              { name: "Guillaume Albisetti", role: "Growth B2B", co: "Founder, Leadger", tag: "AI Sales Tech", stats: "28,000+ followers — Claude Code practitioner" },
              { name: "Romain Quechon", role: "AI Agents Expert", co: "The World of AI", tag: "Agent Systems", stats: "35,036 LinkedIn followers" },
            ].map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.07}>
                <motion.div whileHover={{ y: -4, borderColor: `${accent}80` }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="rounded-lg border-2 border-dashed p-4"
                  style={{ backgroundColor: charcoalLight, borderColor: `${accent}40` }}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center font-mono font-bold text-lg"
                      style={{ backgroundColor: `${accent}15`, color: accent }}>
                      {t.name[0]}
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-xs font-mono font-bold"
                      style={{ backgroundColor: `${accent}15`, color: accent }}>{t.tag}</span>
                  </div>
                  <h3 className="font-mono font-bold text-sm" style={{ color: offWhite }}>{t.name}</h3>
                  <p className="text-xs mb-1" style={{ color: accent }}>{t.role} @ {t.co}</p>
                  <p className="text-xs" style={{ color: gray }}>{t.stats}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* VENUE */}
      <section className="py-16 px-4" style={{ backgroundColor: charcoalLight }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionLabel>cat venue.md</SectionLabel>
            <SectionTitle>The <span style={{ color: accent }}>setting</span> changes everything</SectionTitle>
            <p className="text-lg mb-10" style={{ color: cream }}>
              No beige meeting rooms. No fluorescent lighting. A unique Paris venue designed for creativity, focus, and real work.
            </p>
          </FadeIn>

          <FadeIn>
            <motion.div className="rounded-lg overflow-hidden relative mb-8"
              style={{ height: "400px" }}
              whileHover={{ scale: 1.01 }} transition={{ duration: 0.3 }}>
              <Image src="/venues/clp-hero.png" alt="Chez Les Plombiers — main space"
                fill className="object-cover" />
              <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${charcoal}90 0%, transparent 55%)` }} />
              <div className="absolute bottom-6 left-6">
                <p className="font-mono font-bold text-2xl mb-1" style={{ color: offWhite }}>Chez Les Plombiers</p>
                <p className="font-mono text-sm" style={{ color: accent }}>231 rue Saint-Honoré, Paris 1er</p>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <p style={{ color: gray }}>
                An industrial-chic venue in the heart of the 1st arrondissement. Raw concrete, warm lighting, flexible layout. Brands like Prada, Porsche, CNN, and New Balance have used this space. Far from the corporate seminar aesthetic — by design.
              </p>
              <div className="space-y-3">
                {[
                  { icon: Coffee, label: "Welcome breakfast", time: "9:00 – 9:30" },
                  { icon: UtensilsCrossed, label: "Catered lunch", time: "12:30 – 1:30" },
                  { icon: CakeSlice, label: "Afternoon snack + coffee/tea", time: "3:00 – 3:15" },
                ].map((m) => (
                  <div key={m.label} className="flex items-center gap-3">
                    <m.icon className="w-4 h-4 shrink-0" style={{ color: accent }} />
                    <div className="flex-1 flex justify-between">
                      <p className="font-mono text-sm" style={{ color: offWhite }}>{m.label}</p>
                      <p className="text-xs" style={{ color: gray }}>{m.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionLabel>cat deliverables.md</SectionLabel>
            <SectionTitle>What EA walks away <span style={{ color: accent }}>with</span></SectionTitle>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {[
              { icon: Users, color: blue, title: "100 trained AI builders", desc: "Every manager builds a working agent — not a demo, not a slide. Something real they can use the next day." },
              { icon: Layers, color: purple, title: "4 domains covered", desc: "Auto, Travel, Health, Coordination — each session produces tested agents on a specific EA business challenge." },
              { icon: BookOpen, color: accent, title: "AI Solutions Playbook", desc: "After all sessions: best prompts, best agent designs, tool recommendations, and a deployment plan." },
              { icon: Sparkles, color: green, title: "Upskilling app (yours to keep)", desc: "The interactive pre-training app stays with Europ Assistance for future cohorts and new employee onboarding." },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1} className="h-full">
                <Card className="flex gap-4 items-start h-full">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${item.color}15` }}>
                    <item.icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <div>
                    <h3 className="font-mono font-bold text-lg mb-1" style={{ color: offWhite }}>{item.title}</h3>
                    <p style={{ color: gray }}>{item.desc}</p>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATION */}
      <section className="py-16 px-4" style={{ backgroundColor: charcoalLight }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionLabel>cat certification.md</SectionLabel>
            <SectionTitle>Certification & <span style={{ color: accent }}>funding</span></SectionTitle>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            <FadeIn>
              <Card>
                <Shield className="w-8 h-8 mb-4" style={{ color: accent }} />
                <h3 className="font-mono font-bold text-xl mb-2" style={{ color: offWhite }}>Qualiopi certification</h3>
                <p className="mb-4" style={{ color: gray }}>Qualiopi in progress — estimated timeline: 1 month. Process launched immediately to be ready before sessions start.</p>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" style={{ color: green }} />
                  <p className="font-mono text-sm" style={{ color: cream }}>OPCO eligible — up to 100% funded</p>
                </div>
              </Card>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Card>
                <GraduationCap className="w-8 h-8 mb-4" style={{ color: accent }} />
                <h3 className="font-mono font-bold text-xl mb-2" style={{ color: offWhite }}>Custom pricing</h3>
                <p className="mb-4" style={{ color: gray }}>Budget adapted to number of sessions and level of customization. Everything included: program design, Dust data setup, upskilling app, venue, catering.</p>
                <div className="space-y-2">
                  {["Premium venue included (all sessions)", "Full catering included", "Upskilling app + Playbook included", "June pilot + September–onwards delivery"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 shrink-0" style={{ color: green }} />
                      <p className="text-sm" style={{ color: cream }}>{item}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 50% 50%, ${accent}12 0%, transparent 65%)` }} />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <FadeIn>
            <p className="font-mono text-sm mb-4" style={{ color: accent }}>&gt; next-step</p>
            <h2 className="text-3xl md:text-5xl font-mono font-bold mb-6" style={{ color: offWhite }}>
              Let&apos;s build the{" "}
              <span style={{ color: accent }}>AI Solutions Lab</span>{" "}
              together
            </h2>
            <p className="text-lg mb-6" style={{ color: cream }}>
              Two next steps: a call with your technical team to understand your Dust setup, and a session with Giuseppe to align on the 4 strategic themes.
            </p>
            <p className="text-lg" style={{ color: cream }}>
              Then: proposal delivered within a week, upskilling app ready for early June, pilot by end of June.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mt-10 font-mono text-sm" style={{ color: gray }}>
              Frederic Orlicki | fredericorlicki@gmail.com | Growth Acceleration
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
