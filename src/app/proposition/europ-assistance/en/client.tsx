"use client";

import { motion, useInView, useMotionValue, useTransform, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Car, Plane, Headphones, Network, Trophy, MapPin, Coffee,
  UtensilsCrossed, CakeSlice, Users, Rocket, CheckCircle,
  Shield, GraduationCap, CalendarDays, Bot,
  Globe, Sparkles, Server, Layers, BookOpen, Gauge, Code,
  Building2,
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
  { text: "$ ./init-env --client europ-assistance --domain auto", type: "cmd" },
  { text: "[OK] Virtual CRM: 847 fake dossiers loaded", type: "ok" },
  { text: "[OK] Prestataire network: 12,400 partners / 200 countries", type: "ok" },
  { text: "[OK] Claims DB: 50 auto cases ready", type: "ok" },
  { text: "$ GET /api/tickets?domain=auto&status=urgent", type: "cmd" },
  { text: '{"tickets":[{"id":"AUT-2847","priority":"HIGH","client":"Dupont M.","loc":"Lyon"},...]}', type: "data" },
  { text: "$ POST /api/agent/classify --ticket AUT-2847", type: "cmd" },
  { text: '{"status":"URGENT","response":"drafted","ETA":"4h","confidence":0.94}', type: "data" },
  { text: "[DONE] Agent: 47 tickets in 3.2s | 12 auto-resolved | 0 errors", type: "done" },
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
        <span className="ml-2 text-xs" style={{ color: gray }}>ea-virtual-env — bash</span>
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

// ── 3D Tilt Card ──────────────────────────────────────────────────────────────

function TiltCard({ children, className = "", style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(useTransform(rawY, [-80, 80], [8, -8]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(rawX, [-80, 80], [-8, 8]), { stiffness: 200, damping: 25 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    rawX.set(e.clientX - r.left - r.width / 2);
    rawY.set(e.clientY - r.top - r.height / 2);
  }

  function onLeave() { rawX.set(0); rawY.set(0); }

  return (
    <div style={{ perspective: "1000px" }}>
      <motion.div ref={cardRef} style={{ rotateX, rotateY, ...style }}
        onMouseMove={onMove} onMouseLeave={onLeave}
        className={`rounded-lg border-2 border-dashed p-6 cursor-default ${className}`}>
        {children}
      </motion.div>
    </div>
  );
}

// ── Animated Leaderboard ──────────────────────────────────────────────────────

function AnimatedLeaderboard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const teams = [
    { name: "Team Phoenix", domain: "Auto", score: 94, badge: "🏆 Best Innovation" },
    { name: "Team Atlas", domain: "Voyage", score: 89, badge: "🥈 Best ROI" },
    { name: "Team Nexus", domain: "Health", score: 85, badge: "🥉 Best UX" },
    { name: "Team Orbit", domain: "Auto", score: 81, badge: "" },
    { name: "Team Pulse", domain: "Voyage", score: 77, badge: "" },
  ];

  return (
    <div ref={ref} className="space-y-4">
      {teams.map((team, i) => (
        <motion.div key={team.name} initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.45, delay: i * 0.12 }}>
          <div className="flex items-center justify-between mb-1">
            <span className="font-mono text-sm">
              <span style={{ color: gray }} className="mr-2">{i + 1}.</span>
              <span style={{ color: offWhite }} className="font-bold">{team.name}</span>
              <span style={{ color: gray }} className="ml-1 text-xs">[{team.domain}]</span>
            </span>
            <span className="font-mono text-sm font-bold" style={{ color: i === 0 ? accent : cream }}>
              {inView ? team.score : 0} pts
            </span>
          </div>
          <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: `${accent}15` }}>
            <motion.div className="h-full rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: `${team.score}%` } : {}}
              transition={{ duration: 1, delay: 0.3 + i * 0.12, ease: "easeOut" }}
              style={{ backgroundColor: i === 0 ? accent : `${accent}55` }} />
          </div>
          {team.badge && <p className="text-xs mt-0.5" style={{ color: accent }}>{team.badge}</p>}
        </motion.div>
      ))}
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
              $ ./run-proposal --client europ-assistance --format hackathon --lang en
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
              2 days. 12 teams. 4 Europ Assistance challenges.
              <br />
              <span className="font-mono" style={{ color: accent }}>100 managers who leave as AI builders.</span>
            </p>
          </FadeIn>

          <FadeIn delay={0.5} className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { label: "100 managers", icon: Users },
              { label: "12 teams", icon: Trophy },
              { label: "September 2026", icon: CalendarDays },
              { label: "Paris 1er", icon: MapPin },
              { label: "100% browser-based", icon: Globe },
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
              { value: 100, suffix: "", label: "Senior managers" },
              { value: 12, suffix: "", label: "Competing teams" },
              { value: 4, suffix: "", label: "Business domains" },
              { value: 2, suffix: " days", label: "Intensive hackathon" },
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
            <SectionTitle>Not training. A <span style={{ color: accent }}>competition.</span></SectionTitle>
            <p className="text-lg mb-10 max-w-3xl" style={{ color: cream }}>
              Every team attacks a real Europ Assistance challenge. At the end of Day 2, EA doesn&apos;t just have trained managers — it has 12 tested AI solutions to evaluate, combine, and deploy.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Rocket, title: "Build real agents", desc: "Each team builds a working AI agent on a virtual EA environment. No toy examples. No slides.", tag: "DAY 1–2" },
              { icon: Trophy, title: "Compete live", desc: "A live leaderboard tracks all 12 teams. Points for speed, solution quality, and business impact.", tag: "GAMIFIED" },
              { icon: Sparkles, title: "Ship it to EA", desc: "At the Awards ceremony, the jury selects the best solutions. EA leaves with a deployment-ready AI Playbook.", tag: "DELIVERABLE" },
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
            <SectionTitle>4 domains. 12 <span style={{ color: accent }}>briefs.</span></SectionTitle>
            <p className="text-lg mb-10" style={{ color: cream }}>
              3 teams per domain, each attacking from a different angle. 3 competing solutions per challenge.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Car, color: blue, domain: "AUTO ASSISTANCE", challenge: "Claims Accelerator", desc: "Build an agent that triages, summarizes, and auto-responds to car assistance claims.", input: "50 fake dossiers", output: "Classification + priority + draft response", teams: "Teams 1–3" },
              { icon: Plane, color: purple, domain: "TRAVEL & REPATRIATION", challenge: "Emergency Intelligence", desc: "International emergency management across 200 simulated countries. Coordinate medical providers in real time.", input: "200-country virtual network", output: "Recommended actions + provider contact", teams: "Teams 4–6" },
              { icon: Headphones, color: green, domain: "HEALTH & TELEMEDICINE", challenge: "Care Coordinator", desc: "Build an agent that triages medical requests, matches patients with the right remote doctor, and tracks consultation outcomes.", input: "500 fake patient requests + doctor network", output: "Triage score + doctor match + follow-up plan", teams: "Teams 7–9" },
              { icon: Network, color: amber, domain: "PROVIDER COORDINATION", challenge: "Network Builder", desc: "AI agent that finds and contacts the right providers (doctors, mechanics, hotels) by geolocation and urgency.", input: "12,400 fake partners DB", output: "Optimized match + automated outreach", teams: "Teams 10–12" },
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
                      <span className="px-2 py-1 rounded-full text-xs font-mono font-bold" style={{ backgroundColor: `${item.color}15`, color: item.color }}>{item.teams}</span>
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

      {/* VIRTUAL ENVIRONMENT */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionLabel>cat virtual-env.md</SectionLabel>
            <SectionTitle>Zero real data. <span style={{ color: accent }}>100% real agents.</span></SectionTitle>
            <p className="text-lg mb-3" style={{ color: cream }}>
              No access to EA&apos;s internal systems. Growth Acceleration builds a complete virtual replica — fake CRM, fake claims, fake provider network — accessible from any browser.
            </p>
            <div className="flex items-center gap-2 mb-10">
              <CheckCircle className="w-4 h-4" style={{ color: green }} />
              <p className="font-mono text-sm" style={{ color: green }}>No install on EA laptops. No VPN. No IT ticket.</p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <FadeIn><AnimatedTerminal /></FadeIn>
            <FadeIn delay={0.2}>
              <div className="space-y-4">
                {[
                  { icon: Server, title: "Fake EA API", desc: "REST API with realistic endpoints: /tickets, /dossiers, /prestataires. Teams' agents call it exactly like a real enterprise system." },
                  { icon: Bot, title: "Pre-wired agent tools", desc: "Tools are already connected to the fake API. Teams configure logic and behavior — not the plumbing." },
                  { icon: Globe, title: "Browser only", desc: "Teams open a URL. No Claude Code install, no terminal, no admin rights. Works on any EA corporate laptop." },
                ].map((item, i) => (
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
                <Card className="!p-4" style={{ borderColor: `${green}40` }}>
                  <p className="font-mono text-xs font-bold mb-3" style={{ color: green }}>AGENT INTERFACE — 3 zones</p>
                  <div className="grid grid-cols-3 gap-2 text-xs font-mono text-center">
                    {["Config Agent", "Live Results", "Auto Report"].map((z) => (
                      <div key={z} className="p-2 rounded" style={{ backgroundColor: `${accent}0D`, color: accent }}>{z}</div>
                    ))}
                  </div>
                </Card>
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
            <SectionTitle>Ready on <span style={{ color: accent }}>Day 1.</span></SectionTitle>
            <p className="text-lg mb-10" style={{ color: cream }}>
              15 days before the hackathon, every participant receives an interactive web app — 5 modules, ~4h, self-paced. Heterogeneous levels leveled before the starting gun.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <FadeIn>
              <div className="space-y-5">
                {[
                  { label: "Module 1 — AI Fundamentals (no jargon)", pct: 100, color: blue },
                  { label: "Module 2 — Prompt Engineering", pct: 100, color: accent },
                  { label: "Module 3 — Anatomy of an AI Agent", pct: 100, color: purple },
                  { label: "Module 4 — Virtual EA Environment", pct: 100, color: green },
                  { label: "Module 5 — Mini-challenge: your first agent", pct: 100, color: amber },
                ].map((m, i) => (
                  <ProgressBar key={m.label} label={m.label} pct={m.pct} delay={i * 0.2} color={m.color} />
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="space-y-4">
                {[
                  { icon: BookOpen, title: "~4h total", desc: "Self-paced, 24/7, on any device" },
                  { icon: Gauge, title: "Progress tracked", desc: "Completion dashboard visible to the coordinator" },
                  { icon: Code, title: "Includes a sandbox", desc: "Module 4 lets participants explore fake EA data before Day 1" },
                  { icon: CheckCircle, title: "EA retains the app", desc: "Post-training, the upskilling app stays with Europ Assistance for future cohorts" },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${accent}15` }}>
                      <item.icon className="w-4 h-4" style={{ color: accent }} />
                    </div>
                    <div>
                      <p className="font-mono font-bold text-sm" style={{ color: offWhite }}>{item.title}</p>
                      <p className="text-sm" style={{ color: gray }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* PROGRAM J1 + J2 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionLabel>cat schedule.md</SectionLabel>
            <SectionTitle>2 days, <span style={{ color: accent }}>zero downtime.</span></SectionTitle>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <FadeIn>
                <div className="flex items-center gap-3 mb-6">
                  <div className="px-3 py-1 rounded-lg font-mono font-bold" style={{ backgroundColor: `${blue}18`, color: blue }}>DAY 1</div>
                  <p className="font-mono font-bold text-lg" style={{ color: offWhite }}>Learn &amp; Build</p>
                </div>
              </FadeIn>
              {[
                { time: "9:00", title: "Welcome + breakfast networking", tag: "WELCOME", tagColor: gray },
                { time: "9:30", title: 'Keynote — "AI & Intrapreneurship: Why Now?"', tag: "KEYNOTE", tagColor: accent },
                { time: "10:00", title: "Live demo — Virtual EA environment", tag: "DEMO", tagColor: blue },
                { time: "10:30", title: "Team draw + domain + problem brief", tag: "SETUP", tagColor: purple },
                { time: "11:00", title: "Virtual data exploration by team", tag: "EXPLORE", tagColor: green },
                { time: "12:30", title: "Lunch", tag: "BREAK", tagColor: gray },
                { time: "13:30", title: "Ideation — solution architecture + KPIs", tag: "IDEATE", tagColor: accent },
                { time: "15:15", title: "First build — prompting + testing", tag: "BUILD", tagColor: blue },
                { time: "17:30", title: "Express check-in — 2 min per team", tag: "SYNC", tagColor: gray },
              ].map((s, i) => <TimelineSlot key={s.time} {...s} delay={i * 0.05} />)}
            </div>
            <div>
              <FadeIn>
                <div className="flex items-center gap-3 mb-6">
                  <div className="px-3 py-1 rounded-lg font-mono font-bold" style={{ backgroundColor: `${accent}18`, color: accent }}>DAY 2</div>
                  <p className="font-mono font-bold text-lg" style={{ color: offWhite }}>Ship It</p>
                </div>
              </FadeIn>
              {[
                { time: "9:00", title: "Breakfast + interim leaderboard reveal", tag: "WELCOME", tagColor: gray },
                { time: "9:30", title: "Morning build sprint (coached per team)", tag: "BUILD", tagColor: blue },
                { time: "12:00", title: "Lunch", tag: "BREAK", tagColor: gray },
                { time: "13:00", title: "Final polish + pitch prep (template provided)", tag: "POLISH", tagColor: purple },
                { time: "15:00", title: "Pitches — 5 min/team + 3 min jury Q&A", tag: "PITCH", tagColor: accent },
                { time: "17:00", title: "Jury deliberation", tag: "JURY", tagColor: gray },
                { time: "17:30", title: "🏆 Awards Ceremony + closing", tag: "AWARDS", tagColor: amber },
                { time: "18:00", title: "Closing cocktail", tag: "COCKTAIL", tagColor: green },
              ].map((s, i) => <TimelineSlot key={s.time} {...s} delay={i * 0.05} />)}
            </div>
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="py-16 px-4" style={{ backgroundColor: charcoalLight }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionLabel>cat awards.md</SectionLabel>
            <SectionTitle>The <span style={{ color: accent }}>Awards</span> ceremony</SectionTitle>
            <p className="text-lg mb-10" style={{ color: cream }}>End of Day 2. Real jury. Real stakes. The winning solutions become EA&apos;s first internal AI stack.</p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn>
              <Card>
                <p className="font-mono text-xs font-bold mb-5 uppercase tracking-wider" style={{ color: accent }}>&gt; leaderboard --final</p>
                <AnimatedLeaderboard />
              </Card>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="space-y-4">
                <Card>
                  <p className="font-mono text-xs font-bold mb-4 uppercase tracking-wider" style={{ color: accent }}>SCORING CRITERIA</p>
                  <div className="space-y-3">
                    {[
                      { label: "Business impact", pct: 30, color: accent },
                      { label: "Technical quality of the agent", pct: 25, color: blue },
                      { label: "Relevance to EA operations", pct: 25, color: purple },
                      { label: "Pitch & presentation", pct: 20, color: green },
                    ].map((c) => (
                      <div key={c.label}>
                        <div className="flex justify-between mb-1">
                          <span className="text-xs font-mono" style={{ color: cream }}>{c.label}</span>
                          <span className="text-xs font-mono" style={{ color: gray }}>{c.pct}%</span>
                        </div>
                        <div className="h-1.5 rounded-full" style={{ backgroundColor: `${c.color}15` }}>
                          <motion.div className="h-full rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${c.pct}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            style={{ backgroundColor: c.color }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
                <Card>
                  <p className="font-mono text-xs font-bold mb-3 uppercase tracking-wider" style={{ color: accent }}>AWARDS</p>
                  <div className="space-y-2">
                    {[
                      { a: "🏆 Best AI Solution", b: "1 winner per domain (4 awards)" },
                      { a: "🚀 Best Innovation", b: "Most creative approach" },
                      { a: "⚡ Best ROI", b: "Highest estimated business impact" },
                      { a: "🎖️ Best Individual", b: "MVP across all teams" },
                    ].map((row) => (
                      <div key={row.a} className="flex items-baseline gap-2">
                        <p className="font-mono text-sm" style={{ color: offWhite }}>{row.a}</p>
                        <p className="text-xs" style={{ color: gray }}>— {row.b}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* TRAINERS */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionLabel>ls trainers/</SectionLabel>
            <SectionTitle>6 <span style={{ color: accent }}>expert</span> trainers</SectionTitle>
            <p className="text-lg mb-10" style={{ color: cream }}>1 trainer per 2 teams during the hackathon. Each expert covers a specific dimension.</p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: "Frederic Orlicki", role: "Lead Trainer", co: "Growth Acceleration", tag: "Program Director", stats: "400+ professionals trained, Le Wagon #0001" },
              { name: "Samuel Berthe", role: "Head of Studies", co: "EPITECH", tag: "Hackathon Expert", stats: "Co-organizer, Shift AI Hackathon" },
              { name: "Simon Timssale-Bourrioux", role: "AI Pedagogy", co: "Explore The Vault", tag: "AI Educator", stats: "6,000+ followers — accessible AI expert" },
              { name: "Maxime Pitussi", role: "Growth + AI", co: "Founder, Let's Fail", tag: "Intrapreneurship", stats: "Organizer, Startup Weekends Nantes" },
              { name: "Guillaume Albisetti", role: "Growth B2B", co: "Founder, Leadger", tag: "AI Sales Tech", stats: "28,000+ followers — Claude Code practitioner" },
              { name: "Romain Quechon", role: "AI Agents Expert", co: "The World of AI", tag: "Agent Systems", stats: "565 qualified leads via AI agents in 2025 · 35,036 LinkedIn followers" },
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
            <SectionTitle>Two premium spaces. <span style={{ color: accent }}>One address.</span></SectionTitle>
            <p className="text-lg mb-12" style={{ color: cream }}>
              No beige meeting rooms. No fluorescent lighting. Two unique Paris venues — both at 231 rue Saint-Honoré — designed for creativity, focus, and impact.
            </p>
          </FadeIn>

          {/* Chez Les Plombiers */}
          <FadeIn>
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-xs px-3 py-1 rounded-full font-bold"
                  style={{ backgroundColor: `${accent}18`, color: accent }}>SPACE 01</span>
                <h3 className="font-mono font-bold text-2xl" style={{ color: offWhite }}>Chez Les Plombiers</h3>
                <span className="font-mono text-xs" style={{ color: gray }}>— 231 rue Saint-Honoré, Paris 1er</span>
              </div>

              {/* Photo CLP */}
              <motion.div className="rounded-lg overflow-hidden relative mb-6"
                style={{ height: "360px" }}
                whileHover={{ scale: 1.01 }} transition={{ duration: 0.3 }}>
                <Image src="/venues/clp-hero.png" alt="Chez Les Plombiers — main space"
                  fill className="object-cover" />
                <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${charcoal}80 0%, transparent 50%)` }} />
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
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
            </div>
          </FadeIn>

          {/* Divider */}
          <div className="border-t border-dashed mb-14" style={{ borderColor: `${accent}25` }} />

          {/* Appartement Rose */}
          <FadeIn delay={0.1}>
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-xs px-3 py-1 rounded-full font-bold"
                  style={{ backgroundColor: `${purple}18`, color: purple }}>SPACE 02</span>
                <h3 className="font-mono font-bold text-2xl" style={{ color: offWhite }}>L&apos;Appartement Rose</h3>
                <span className="font-mono text-xs" style={{ color: gray }}>— même adresse, étage supérieur</span>
              </div>

              {/* Photo grid Appartement */}
              <div className="grid grid-cols-3 gap-2 mb-6" style={{ height: "280px" }}>
                <motion.div className="col-span-2 rounded-lg overflow-hidden relative"
                  whileHover={{ scale: 1.01 }} transition={{ duration: 0.3 }}>
                  <Image src="/venues/appart-hero.png" alt="Appartement Rose — living space"
                    fill className="object-cover" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${charcoal}80 0%, transparent 60%)` }} />
                </motion.div>
                <motion.div className="rounded-lg overflow-hidden relative"
                  whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <Image src="/venues/appart-detail.png" alt="Appartement Rose — detail"
                    fill className="object-cover" />
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <p style={{ color: gray }}>
                  A fully furnished apartment upstairs — kitchen, lounge, bedrooms. Ideal for jury deliberations, VIP breakouts, or hosting the lead trainer team during the 2 days. A domestic, non-corporate atmosphere that encourages real conversation.
                </p>
                <div className="space-y-2">
                  {[
                    "Private jury deliberation room",
                    "Trainer & coordination base",
                    "Kitchen + lounge for informal breaks",
                    "Exclusive access for the 2-day program",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 shrink-0" style={{ color: purple }} />
                      <p className="text-sm" style={{ color: cream }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Novotel */}
          <FadeIn delay={0.2}>
            <div className="rounded-lg border border-dashed p-5 flex flex-col md:flex-row md:items-center gap-4"
              style={{ borderColor: `${blue}30`, backgroundColor: `${blue}06` }}>
              <Building2 className="w-6 h-6 shrink-0" style={{ color: blue }} />
              <div className="flex-1">
                <p className="font-mono font-bold text-sm" style={{ color: offWhite }}>
                  Novotel Paris Les Halles — 100m away
                </p>
                <p className="text-sm" style={{ color: gray }}>
                  8 Pl. Marguerite de Navarre, 75001 · 4 stars · 4.3/5 (7,400+ reviews) — recommended for teams coming from outside Paris
                </p>
              </div>
              <CheckCircle className="w-5 h-5 shrink-0" style={{ color: blue }} />
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
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Users, color: blue, title: "100 trained AI builders", desc: "Every manager built a working AI agent — not watched a demo. Built one." },
              { icon: Layers, color: purple, title: "12 tested AI solutions", desc: "3 solutions per business domain, stress-tested in competition conditions." },
              { icon: BookOpen, color: accent, title: "AI Solutions Playbook", desc: "Best prompts, best workflows, tool recommendations, and a deployment plan." },
              { icon: Sparkles, color: green, title: "Upskilling app (yours to keep)", desc: "The interactive pre-training app stays with EA for future cohorts and onboarding." },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <Card className="flex gap-4 items-start">
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

      {/* PILOT */}
      <section className="py-16 px-4" style={{ backgroundColor: charcoalLight }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionLabel>cat pilot.md</SectionLabel>
            <SectionTitle>June <span style={{ color: accent }}>Pilot</span> — zero risk for September</SectionTitle>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <FadeIn>
              <div className="space-y-4">
                <p className="text-lg" style={{ color: cream }}>A paid dress rehearsal with 20 EA managers (early adopters / internal AI champions) before the September cohort.</p>
                <div className="space-y-3">
                  {["All 4 challenges tested end-to-end", "Timing validated, scoring calibrated", "Virtual environment stress-tested", "Upskilling app validated with real participants", "Proof of concept before final September sign-off"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 shrink-0" style={{ color: green }} />
                      <p style={{ color: cream }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Card style={{ borderColor: `${green}40` }}>
                <div className="flex items-start justify-between mb-4">
                  <CalendarDays className="w-8 h-8" style={{ color: green }} />
                  <span className="px-3 py-1 rounded-full text-sm font-mono font-bold" style={{ backgroundColor: `${green}15`, color: green }}>JUNE 2026</span>
                </div>
                <h3 className="font-mono font-bold text-xl mb-3" style={{ color: offWhite }}>Dress Rehearsal</h3>
                <div className="space-y-2 mb-4">
                  {[
                    { label: "Participants", value: "20 EA managers" },
                    { label: "Duration", value: "1 full day" },
                    { label: "Format", value: "Condensed version" },
                    { label: "Deliverable", value: "Full validation report" },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between">
                      <span className="font-mono text-sm" style={{ color: gray }}>{row.label}</span>
                      <span className="font-mono text-sm" style={{ color: cream }}>{row.value}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-3 border-t border-dashed" style={{ borderColor: `${green}30` }}>
                  <p className="text-sm" style={{ color: gray }}>If anything needs adjusting before September, we fix it in June — not live in front of 100 executives.</p>
                </div>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CERTIFICATION */}
      <section className="py-16 px-4">
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
                <p className="mb-4" style={{ color: gray }}>Budget adapted to scope. Everything included: program design, virtual environment, upskilling app, venue, catering, June pilot, September sessions.</p>
                <div className="space-y-2">
                  {["Premium venue (2 days) included", "Full catering included", "Upskilling app + AI Playbook included", "June pilot + September delivery"].map((item) => (
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
            <p className="text-lg mb-10" style={{ color: cream }}>
              30 minutes to validate objectives, co-design the 4 challenges, and confirm the June pilot date.
            </p>
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
