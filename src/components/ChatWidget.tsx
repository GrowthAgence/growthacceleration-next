"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MessageSquare, Send, X } from "lucide-react";

type ChatMessage = { role: "user" | "assistant"; content: string };

const WELCOME_MESSAGE =
  "Bonjour ! Je suis l'assistant IA de Growth Acceleration — construit avec Claude, comme ce qu'on enseigne ici. Vous cherchez quelle formation ?";

const CALENDLY_URL = "https://calendly.com/fredericorlicki/15min";
const STORAGE_ID_KEY = "ga-chat-id";
const STORAGE_MESSAGES_KEY = "ga-chat-messages";

// Identifiant de conversation stable pour la session de navigation :
// permet la persistance cote serveur et la reprise apres navigation.
function getConversationId(): string {
  try {
    let id = sessionStorage.getItem(STORAGE_ID_KEY);
    if (!id) {
      id = crypto.randomUUID();
      sessionStorage.setItem(STORAGE_ID_KEY, id);
    }
    return id;
  } catch {
    return crypto.randomUUID();
  }
}

function trackChatEvent(action: string) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, { event_category: "chat" });
  }
}

// Rend les URLs cliquables dans les reponses de l'assistant
function renderContent(text: string) {
  const parts = text.split(/(https?:\/\/[^\s)]+)/g);
  return parts.map((part, i) =>
    part.startsWith("http") ? (
      <a
        key={i}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#E07A5F] underline underline-offset-2 hover:text-[#E07A5F]/80 break-all"
      >
        {part.includes("calendly") ? "Réserver un appel de 15 min" : part}
      </a>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [hasError, setHasError] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const openChat = () => {
      setIsOpen(true);
      trackChatEvent("chat_open");
    };
    window.addEventListener("open-ga-chat", openChat);
    return () => window.removeEventListener("open-ga-chat", openChat);
  }, []);

  // Restaure la conversation de la session apres une navigation
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_MESSAGES_KEY);
      if (saved) setMessages(JSON.parse(saved));
    } catch {
      // sessionStorage indisponible : conversation ephemere
    }
  }, []);

  useEffect(() => {
    if (messages.length === 0) return;
    try {
      sessionStorage.setItem(STORAGE_MESSAGES_KEY, JSON.stringify(messages));
    } catch {
      // best-effort
    }
  }, [messages]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text || isStreaming) return;

    setHasError(false);
    setInput("");
    const history: ChatMessage[] = [...messages, { role: "user", content: text }];
    setMessages([...history, { role: "assistant", content: "" }]);
    setIsStreaming(true);
    trackChatEvent("chat_message_sent");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: history,
          conversationId: getConversationId(),
        }),
      });

      if (!response.ok || !response.body) {
        throw new Error(`HTTP ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        assistantText += decoder.decode(value, { stream: true });
        const snapshot = assistantText;
        setMessages([...history, { role: "assistant", content: snapshot }]);
      }
    } catch {
      setHasError(true);
      setMessages(history);
    } finally {
      setIsStreaming(false);
    }
  }, [input, isStreaming, messages]);

  const toggleOpen = () => {
    const next = !isOpen;
    setIsOpen(next);
    if (next) trackChatEvent("chat_open");
  };

  return (
    <>
      {/* Bouton flottant */}
      <button
        onClick={toggleOpen}
        aria-label={isOpen ? "Fermer le chat" : "Ouvrir le chat"}
        className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-50 w-14 h-14 rounded-full bg-[#E07A5F] text-[#1E1E1E] shadow-2xl flex items-center justify-center hover:scale-105 transition-transform duration-200 cursor-pointer"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>

      {/* Fenetre de chat, style terminal */}
      {isOpen && (
        <div
          className="fixed bottom-36 md:bottom-24 right-4 md:right-6 z-50 w-[calc(100vw-2rem)] max-w-sm bg-[#1E1E1E] rounded-lg border border-[#E07A5F]/30 shadow-2xl overflow-hidden flex flex-col"
          style={{ height: "min(560px, calc(100dvh - 12rem))" }}
          role="dialog"
          aria-label="Assistant Growth Acceleration"
        >
          {/* Barre de titre terminal */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#2D2A2E] border-b border-[#FAFAFA]/10 flex-shrink-0">
            <span className="w-3 h-3 rounded-full bg-[#E06C75]" />
            <span className="w-3 h-3 rounded-full bg-[#E5C07B]" />
            <span className="w-3 h-3 rounded-full bg-[#98C379]" />
            <span className="ml-2 text-[#A9A9A9] text-xs font-mono">
              assistant-ia — claude
            </span>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-sm">
            <div className="text-[#F4F1DE] leading-relaxed">
              <span className="text-[#E07A5F]">➜ </span>
              {WELCOME_MESSAGE}
            </div>

            {messages.map((m, i) => (
              <div key={i} className="leading-relaxed whitespace-pre-wrap">
                {m.role === "user" ? (
                  <div className="text-[#A9A9A9]">
                    <span className="text-[#98C379]">$ </span>
                    {m.content}
                  </div>
                ) : (
                  <div className="text-[#F4F1DE]">
                    <span className="text-[#E07A5F]">➜ </span>
                    {m.content ? (
                      renderContent(m.content)
                    ) : (
                      <span className="inline-block w-2 h-4 bg-[#E07A5F] animate-pulse align-middle" />
                    )}
                  </div>
                )}
              </div>
            ))}

            {hasError && (
              <div className="text-[#E06C75] leading-relaxed">
                <span>✗ </span>
                Le chat a rencontré un problème. Réessayez, ou{" "}
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                  réservez directement un appel
                </a>
                .
              </div>
            )}
          </div>

          {/* Saisie */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              void sendMessage();
            }}
            className="flex items-center gap-2 px-3 py-3 bg-[#2D2A2E] border-t border-[#FAFAFA]/10 flex-shrink-0"
          >
            <span className="text-[#98C379] font-mono text-sm">$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={1500}
              placeholder="Votre question..."
              aria-label="Votre message"
              className="flex-1 bg-transparent text-[#F4F1DE] font-mono text-sm placeholder:text-[#A9A9A9]/50 focus:outline-none"
            />
            <button
              type="submit"
              disabled={isStreaming || !input.trim()}
              aria-label="Envoyer"
              className="text-[#E07A5F] disabled:opacity-30 hover:scale-110 transition-transform cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
