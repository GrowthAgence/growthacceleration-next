"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const accent = "#E07A5F";
const gray = "#A9A9A9";
const green = "#98C379";

type Answer = string | string[];

interface Choice { key: string; label: string; }
interface Question {
  id: string;
  label: string;
  text: string;
  sub?: string;
  type: "radio" | "checkbox" | "text";
  choices?: Choice[];
  placeholder?: string;
}

const QUESTIONS: Question[] = [
  {
    id: "knowledge_bases",
    label: "KNOWLEDGE BASES",
    text: "Can trainers pre-load documents into a training-specific knowledge base?",
    sub: "PDFs, Word, Excel — we need to pre-load synthetic training data so participants start building from minute one.",
    type: "radio",
    choices: [
      { key: "A", label: "Yes, any trainer can do it" },
      { key: "B", label: "Yes, but only admins" },
      { key: "C", label: "Not sure / need to check" },
      { key: "D", label: "No, not supported" },
    ],
  },
  {
    id: "kb_limits",
    label: "KNOWLEDGE BASES — LIMITS",
    text: "Are there size or document count limits to be aware of?",
    sub: "We plan ~10–20 documents per session (reports, policies, transcripts), typically 1–5 MB each.",
    type: "radio",
    choices: [
      { key: "A", label: "No limits at our plan level" },
      { key: "B", label: "Yes — I'll specify in notes" },
      { key: "C", label: "Not sure" },
    ],
  },
  {
    id: "workspace_isolation",
    label: "WORKSPACE ISOLATION",
    text: "Can we create a dedicated training workspace isolated from production?",
    sub: "We want 20 managers to build agents freely without risk of touching live EA data or configurations.",
    type: "radio",
    choices: [
      { key: "A", label: "Yes, easily done" },
      { key: "B", label: "Yes, but requires admin setup" },
      { key: "C", label: "Not supported — one shared workspace" },
      { key: "D", label: "Not sure" },
    ],
  },
  {
    id: "user_provisioning",
    label: "USER PROVISIONING",
    text: "How are 20 managers onboarded to Dust?",
    sub: "We need to know the lead time to provision all participants before the June pilot.",
    type: "radio",
    choices: [
      { key: "A", label: "SSO (single sign-on) — fast" },
      { key: "B", label: "Email invite — each person accepts" },
      { key: "C", label: "Both options available" },
      { key: "D", label: "Manual admin process — takes time" },
    ],
  },
  {
    id: "agent_rights",
    label: "AGENT CREATION RIGHTS",
    text: "Can all participants create and configure agents, or is it admin-only?",
    sub: "Participants need to build their own agents during the session — not just use existing ones.",
    type: "radio",
    choices: [
      { key: "A", label: "All users can create agents" },
      { key: "B", label: "Admins only — but we can change that" },
      { key: "C", label: "Configurable per workspace" },
      { key: "D", label: "Not sure" },
    ],
  },
  {
    id: "llm_models",
    label: "LLM ACCESS",
    text: "Which AI models are available in EA's Dust plan?",
    sub: "Select all that apply — this shapes what participants can build with.",
    type: "checkbox",
    choices: [
      { key: "A", label: "Claude 3.5 Sonnet (Anthropic)" },
      { key: "B", label: "Claude 3 Haiku (Anthropic)" },
      { key: "C", label: "GPT-4o (OpenAI)" },
      { key: "D", label: "Gemini (Google)" },
      { key: "E", label: "Mistral" },
      { key: "F", label: "Other / not sure" },
    ],
  },
  {
    id: "doc_upload",
    label: "DOCUMENT UPLOAD",
    text: "Can participants upload their own documents during the session?",
    sub: "Ideally, each participant could bring a real report and feed it directly to their agent.",
    type: "radio",
    choices: [
      { key: "A", label: "Yes, anyone can upload" },
      { key: "B", label: "Yes, but through admin only" },
      { key: "C", label: "Not supported" },
      { key: "D", label: "Not sure" },
    ],
  },
  {
    id: "sandbox",
    label: "SANDBOX ACCESS",
    text: "Can we get a test workspace to prepare training materials before the pilot?",
    sub: "We need a few weeks to configure agents, upload data, and validate everything before Day 1.",
    type: "radio",
    choices: [
      { key: "A", label: "Yes, we can set one up now" },
      { key: "B", label: "Yes, but needs approval" },
      { key: "C", label: "Use the existing EA workspace" },
      { key: "D", label: "Not possible" },
    ],
  },
  {
    id: "notes",
    label: "NOTES",
    text: "Anything else we should know about your Dust setup?",
    sub: "Active connectors, existing agents, specific constraints — anything useful.",
    type: "text",
    placeholder: "e.g. We have Confluence and Google Drive connected…",
  },
];

export default function DustSetupClient() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [exiting, setExiting] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const inputRef = useRef<HTMLInputElement>(null);
  const total = QUESTIONS.length;
  const isSummary = current >= total;
  const progress = isSummary ? 100 : (current / total) * 100;

  const canProceed = useCallback(() => {
    if (current >= total) return false;
    const q = QUESTIONS[current];
    if (q.type === "text") return true;
    if (q.type === "checkbox") {
      const arr = answers[q.id] as string[] | undefined;
      return Array.isArray(arr) && arr.length > 0;
    }
    return !!answers[q.id];
  }, [current, answers, total]);

  const goNext = useCallback(() => {
    if (current >= total || !canProceed()) return;
    setExiting(true);
    setTimeout(() => { setExiting(false); setCurrent((c) => c + 1); }, 280);
  }, [current, total, canProceed]);

  const selectRadio = useCallback((qId: string, key: string) => {
    setAnswers((prev) => ({ ...prev, [qId]: key }));
    setTimeout(() => goNext(), 320);
  }, [goNext]);

  const toggleCheck = (qId: string, key: string) => {
    setAnswers((prev) => {
      const arr = (prev[qId] as string[]) || [];
      const next = arr.includes(key) ? arr.filter((k) => k !== key) : [...arr, key];
      return { ...prev, [qId]: next };
    });
  };

  const handleSubmit = async () => {
    setStatus("sending");
    try {
      const res = await fetch("/api/dust-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(answers),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  useEffect(() => {
    if (!exiting && current < total && QUESTIONS[current].type === "text") {
      setTimeout(() => inputRef.current?.focus(), 120);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, exiting]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (current >= total || exiting) return;
      const q = QUESTIONS[current];
      if (e.key === "Enter" && q.type !== "text" && canProceed()) goNext();
      if (q.type === "radio" && q.choices) {
        const k = e.key.toUpperCase();
        if (q.choices.find((c) => c.key === k)) selectRadio(q.id, k);
      }
      if (q.type === "checkbox" && q.choices) {
        const k = e.key.toUpperCase();
        if (q.choices.find((c) => c.key === k)) toggleCheck(q.id, k);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current, exiting, total, canProceed, goNext, selectRadio]);

  const q = current < total ? QUESTIONS[current] : null;

  const choiceStyle = (selected: boolean) => ({
    display: "flex" as const, alignItems: "center" as const, gap: 14,
    padding: "14px 18px", borderRadius: 10,
    border: `1.5px solid ${selected ? accent : "rgba(224,122,95,.18)"}`,
    background: selected ? "rgba(224,122,95,.1)" : "#2D2A2E",
    cursor: "pointer" as const, transition: "border-color .15s, background .15s",
  });

  return (
    <div style={{ background: "#1E1E1E", minHeight: "100dvh", display: "flex", flexDirection: "column", overflow: "hidden", fontFamily: "Inter, -apple-system, sans-serif" }}>
      {/* Progress */}
      <div style={{ position: "fixed", top: 0, left: 0, height: 3, background: accent, width: `${progress}%`, transition: "width .4s cubic-bezier(.4,0,.2,1)", zIndex: 100 }} />

      {/* Header */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 32px", zIndex: 50 }}>
        <span style={{ fontFamily: "monospace", fontSize: 13, color: accent }}>&gt; dust-setup.questionnaire</span>
        <span style={{ fontFamily: "monospace", fontSize: 12, color: gray }}>
          {isSummary ? `${total} / ${total} ✓` : `${current + 1} / ${total}`}
        </span>
      </div>

      {/* Slide */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 32px 120px" }}>
        <div style={{
          maxWidth: 680, width: "100%",
          opacity: exiting ? 0 : 1,
          transform: exiting ? "translateY(-30px)" : "translateY(0)",
          transition: "opacity .28s ease, transform .28s ease",
        }}>

          {q && (
            <>
              <p style={{ fontFamily: "monospace", fontSize: 13, color: accent, marginBottom: 12 }}>
                {String(current + 1).padStart(2, "0")} →
              </p>
              <h2 style={{ fontSize: "clamp(22px,3vw,30px)", fontWeight: 700, color: "#FAFAFA", lineHeight: 1.35, marginBottom: 8 }}>
                {q.text}
              </h2>
              {q.sub && <p style={{ fontSize: 14, color: gray, marginBottom: 32, lineHeight: 1.6 }}>{q.sub}</p>}

              {q.type === "radio" && q.choices && (
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {q.choices.map((c) => {
                    const sel = answers[q.id] === c.key;
                    return (
                      <div key={c.key} onClick={() => selectRadio(q.id, c.key)} style={choiceStyle(sel)}>
                        <div style={{ fontFamily: "monospace", fontSize: 11, fontWeight: 700, width: 24, height: 24, borderRadius: 5, border: `1.5px solid ${sel ? accent : "rgba(224,122,95,.3)"}`, background: sel ? "rgba(224,122,95,.15)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", color: accent, flexShrink: 0 }}>{c.key}</div>
                        <span style={{ fontSize: 15, color: "#F4F1DE" }}>{c.label}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              {q.type === "checkbox" && q.choices && (
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {q.choices.map((c) => {
                    const arr = (answers[q.id] as string[]) || [];
                    const chk = arr.includes(c.key);
                    return (
                      <div key={c.key} onClick={() => toggleCheck(q.id, c.key)} style={choiceStyle(chk)}>
                        <div style={{ width: 20, height: 20, borderRadius: 5, flexShrink: 0, border: `1.5px solid ${chk ? accent : "rgba(224,122,95,.3)"}`, background: chk ? accent : "transparent", display: "flex", alignItems: "center", justifyContent: "center", transition: "all .15s" }}>
                          {chk && <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><polyline points="1.5,6 4.5,9.5 10.5,2.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                        </div>
                        <span style={{ fontSize: 15, color: "#F4F1DE" }}>{c.label}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              {q.type === "text" && (
                <input
                  ref={inputRef}
                  style={{ width: "100%", background: "transparent", border: "none", borderBottom: `2px solid rgba(224,122,95,.4)`, color: "#FAFAFA", fontSize: 18, fontFamily: "inherit", padding: "12px 0", outline: "none" }}
                  placeholder={q.placeholder}
                  value={(answers[q.id] as string) || ""}
                  onChange={(e) => setAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))}
                  onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); goNext(); } }}
                />
              )}
            </>
          )}

          {isSummary && (
            <>
              <p style={{ fontFamily: "monospace", fontSize: 13, color: green, marginBottom: 12 }}>✓ ALL DONE</p>
              <h2 style={{ fontSize: "clamp(22px,3vw,30px)", fontWeight: 700, color: "#FAFAFA", marginBottom: 8 }}>Setup answers — ready to send.</h2>
              <p style={{ fontSize: 14, color: gray, marginBottom: 28 }}>
                Here&apos;s a summary of your responses. Hit <strong style={{ color: "#FAFAFA" }}>Submit</strong> to send them to the Growth Acceleration team.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28, maxHeight: "42vh", overflowY: "auto", paddingRight: 8 }}>
                {QUESTIONS.map((qs) => {
                  const val = answers[qs.id];
                  let display = "—";
                  if (val !== undefined && val !== "") {
                    if (Array.isArray(val)) {
                      display = val.map((k) => qs.choices?.find((c) => c.key === k)?.label || k).join(", ") || "—";
                    } else if (qs.type === "radio") {
                      display = qs.choices?.find((c) => c.key === val)?.label || (val as string);
                    } else {
                      display = val as string;
                    }
                  }
                  return (
                    <div key={qs.id} style={{ background: "#2D2A2E", border: "1.5px solid rgba(224,122,95,.18)", borderRadius: 10, padding: "12px 16px" }}>
                      <p style={{ fontFamily: "monospace", fontSize: 11, color: accent, marginBottom: 4, textTransform: "uppercase", letterSpacing: ".05em" }}>{qs.label}</p>
                      <p style={{ fontSize: 14, color: "#F4F1DE" }}>{display}</p>
                    </div>
                  );
                })}
              </div>

              {status === "sent" ? (
                <div style={{ display: "flex", alignItems: "center", gap: 10, color: green, fontFamily: "monospace", fontSize: 14 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                  Sent — thank you! The team will follow up shortly.
                </div>
              ) : status === "error" ? (
                <p style={{ color: "#E06C75", fontFamily: "monospace", fontSize: 14 }}>Something went wrong. Please try again or reply by email.</p>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={status === "sending"}
                  style={{ display: "flex", alignItems: "center", gap: 10, background: accent, color: "#fff", border: "none", padding: "14px 30px", borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: status === "sending" ? "wait" : "pointer", opacity: status === "sending" ? 0.6 : 1, fontFamily: "inherit" }}>
                  {status === "sending" ? "Sending…" : "Submit answers"}
                  {status === "idle" && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>}
                </button>
              )}
            </>
          )}
        </div>
      </div>

      {!isSummary && (
        <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, padding: "20px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "linear-gradient(to top, #1E1E1E 60%, transparent)" }}>
          <span style={{ fontFamily: "monospace", fontSize: 12, color: gray }}>
            {q?.type === "checkbox" ? "Select all that apply, then press OK" : ""}
          </span>
          <button onClick={goNext} disabled={!canProceed()}
            style={{ display: "flex", alignItems: "center", gap: 10, background: accent, color: "#fff", border: "none", padding: "13px 28px", borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: canProceed() ? "pointer" : "default", opacity: canProceed() ? 1 : 0.35, fontFamily: "inherit" }}>
            OK
            <span style={{ background: "rgba(255,255,255,.18)", padding: "2px 7px", borderRadius: 4, fontSize: 12, fontFamily: "monospace" }}>↵</span>
          </button>
        </div>
      )}
    </div>
  );
}
