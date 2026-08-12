"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Lock, Loader2, Users, Download, RefreshCw, Trash2, Mail, Phone, MessageSquare, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Lead {
  id: number;
  email: string;
  phone: string;
  first_name: string | null;
  last_name: string | null;
  company: string | null;
  resource_requested: string | null;
  source: string;
  created_at: string;
}

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface Conversation {
  id: string;
  messages: ChatMessage[];
  created_at: string;
  updated_at: string;
}

export function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [expandedConversation, setExpandedConversation] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"leads" | "chats">("leads");
  const [isLoading, setIsLoading] = useState(false);
  const [stats, setStats] = useState({ total: 0, today: 0, thisWeek: 0 });

  // Le mot de passe est conserve en sessionStorage et envoye en header
  // sur chaque requete admin (les endpoints le verifient cote serveur).
  const getStoredPassword = () =>
    typeof window !== "undefined" ? sessionStorage.getItem("admin_pw") ?? "" : "";

  const authHeaders = (): Record<string, string> => ({
    "x-admin-password": getStoredPassword(),
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const response = await fetch("/api/admin/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (response.ok) {
      sessionStorage.setItem("admin_pw", password);
      setIsAuthenticated(true);
      fetchLeads();
      fetchConversations();
    } else {
      setError("Mot de passe incorrect");
    }
  };

  const fetchConversations = async () => {
    try {
      const response = await fetch("/api/conversations", { headers: authHeaders() });
      const data = await response.json();
      setConversations(data.conversations || []);
    } catch (err) {
      console.error("Error fetching conversations:", err);
    }
  };

  const fetchLeads = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/leads", { headers: authHeaders() });
      const data = await response.json();
      setLeads(data.leads || []);

      // Calculate stats
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

      const todayCount = data.leads.filter(
        (l: Lead) => new Date(l.created_at) >= today
      ).length;
      const weekCount = data.leads.filter(
        (l: Lead) => new Date(l.created_at) >= weekAgo
      ).length;

      setStats({
        total: data.leads.length,
        today: todayCount,
        thisWeek: weekCount,
      });
    } catch (err) {
      console.error("Error fetching leads:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteLead = async (id: number) => {
    if (!confirm("Supprimer ce lead ?")) return;

    await fetch(`/api/leads/${id}`, { method: "DELETE", headers: authHeaders() });
    fetchLeads();
  };

  const exportCSV = () => {
    const headers = ["Email", "Telephone", "Prenom", "Ressource", "Source", "Date"];
    const rows = leads.map((l) => [
      l.email,
      l.phone,
      l.first_name || "",
      l.resource_requested || "",
      l.source,
      new Date(l.created_at).toLocaleDateString("fr-FR"),
    ]);

    const csv = [headers, ...rows].map((row) => row.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
  };

  useEffect(() => {
    // Migration : on ne fait plus confiance au flag localStorage seul —
    // il faut le mot de passe en sessionStorage pour appeler les endpoints.
    localStorage.removeItem("admin_auth");
    if (sessionStorage.getItem("admin_pw")) {
      setIsAuthenticated(true);
      fetchLeads();
      fetchConversations();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#2D2A2E] border border-[#FAFAFA]/10 rounded-lg p-8 max-w-md w-full"
        >
          <div className="text-center mb-6">
            <Lock className="w-12 h-12 text-[#E07A5F] mx-auto mb-4" />
            <h1 className="text-2xl font-mono font-bold text-[#FAFAFA]">Admin</h1>
            <p className="text-[#A9A9A9] text-sm mt-2">Entrez le mot de passe admin</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#1E1E1E] border border-[#FAFAFA]/10 rounded px-4 py-3 text-[#F4F1DE] focus:border-[#E07A5F] focus:outline-none"
              placeholder="Mot de passe"
              autoFocus
            />

            {error && <p className="text-[#E06C75] text-sm">{error}</p>}

            <Button type="submit" className="w-full bg-[#E07A5F] text-[#1E1E1E]">
              Connexion
            </Button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-4 pb-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-mono font-bold text-[#FAFAFA]">
              {activeTab === "leads" ? "Leads" : "Conversations"}
            </h1>
            <p className="text-[#A9A9A9]">
              {activeTab === "leads" ? "Gestion des contacts" : "Historique du chatbot"}
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                fetchLeads();
                fetchConversations();
              }}
              disabled={isLoading}
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
              Actualiser
            </Button>
            {activeTab === "leads" && (
              <Button variant="outline" size="sm" onClick={exportCSV}>
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => setActiveTab("leads")}
            className={`flex items-center gap-2 px-4 py-2 rounded font-mono text-sm cursor-pointer transition-colors ${
              activeTab === "leads"
                ? "bg-[#E07A5F] text-[#1E1E1E]"
                : "bg-[#2D2A2E] text-[#A9A9A9] hover:text-[#F4F1DE]"
            }`}
          >
            <Users className="w-4 h-4" />
            Leads ({leads.length})
          </button>
          <button
            onClick={() => setActiveTab("chats")}
            className={`flex items-center gap-2 px-4 py-2 rounded font-mono text-sm cursor-pointer transition-colors ${
              activeTab === "chats"
                ? "bg-[#E07A5F] text-[#1E1E1E]"
                : "bg-[#2D2A2E] text-[#A9A9A9] hover:text-[#F4F1DE]"
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            Conversations ({conversations.length})
          </button>
        </div>

        {activeTab === "chats" ? (
          conversations.length === 0 ? (
            <div className="text-center py-12 bg-[#2D2A2E]/50 rounded-lg border border-[#FAFAFA]/10">
              <MessageSquare className="w-12 h-12 text-[#A9A9A9] mx-auto mb-4" />
              <p className="text-[#A9A9A9]">Aucune conversation pour le moment</p>
            </div>
          ) : (
            <div className="space-y-3">
              {conversations.map((conv) => {
                const isExpanded = expandedConversation === conv.id;
                const firstUserMessage =
                  conv.messages.find((m) => m.role === "user")?.content ?? "—";
                return (
                  <div
                    key={conv.id}
                    className="bg-[#2D2A2E] border border-[#FAFAFA]/10 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setExpandedConversation(isExpanded ? null : conv.id)
                      }
                      className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-[#FAFAFA]/5 cursor-pointer"
                    >
                      {isExpanded ? (
                        <ChevronDown className="w-4 h-4 text-[#E07A5F] flex-shrink-0" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-[#A9A9A9] flex-shrink-0" />
                      )}
                      <span className="text-[#F4F1DE] text-sm flex-1 truncate">
                        {firstUserMessage}
                      </span>
                      <span className="text-[#A9A9A9] text-xs font-mono flex-shrink-0">
                        {conv.messages.length} msg
                      </span>
                      <span className="text-[#A9A9A9] text-xs flex-shrink-0">
                        {new Date(conv.updated_at).toLocaleDateString("fr-FR", {
                          day: "numeric",
                          month: "short",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </button>
                    {isExpanded && (
                      <div className="border-t border-[#FAFAFA]/10 p-4 space-y-3 font-mono text-sm">
                        {conv.messages.map((m, i) => (
                          <div key={i} className="leading-relaxed whitespace-pre-wrap">
                            {m.role === "user" ? (
                              <p className="text-[#A9A9A9]">
                                <span className="text-[#98C379]">$ </span>
                                {m.content}
                              </p>
                            ) : (
                              <p className="text-[#F4F1DE]">
                                <span className="text-[#E07A5F]">➜ </span>
                                {m.content}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )
        ) : (
          <>
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-[#2D2A2E] border border-[#FAFAFA]/10 rounded-lg p-4">
            <p className="text-[#A9A9A9] text-sm">Total</p>
            <p className="text-3xl font-mono font-bold text-[#FAFAFA]">{stats.total}</p>
          </div>
          <div className="bg-[#2D2A2E] border border-[#FAFAFA]/10 rounded-lg p-4">
            <p className="text-[#A9A9A9] text-sm">Aujourd hui</p>
            <p className="text-3xl font-mono font-bold text-[#98C379]">{stats.today}</p>
          </div>
          <div className="bg-[#2D2A2E] border border-[#FAFAFA]/10 rounded-lg p-4">
            <p className="text-[#A9A9A9] text-sm">Cette semaine</p>
            <p className="text-3xl font-mono font-bold text-[#E07A5F]">{stats.thisWeek}</p>
          </div>
        </div>

        {/* Table */}
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-[#E07A5F]" />
          </div>
        ) : leads.length === 0 ? (
          <div className="text-center py-12 bg-[#2D2A2E]/50 rounded-lg border border-[#FAFAFA]/10">
            <Users className="w-12 h-12 text-[#A9A9A9] mx-auto mb-4" />
            <p className="text-[#A9A9A9]">Aucun lead pour le moment</p>
          </div>
        ) : (
          <div className="bg-[#2D2A2E] border border-[#FAFAFA]/10 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-[#1E1E1E] border-b border-[#FAFAFA]/10">
                <tr>
                  <th className="text-left text-[#A9A9A9] text-xs font-mono uppercase px-4 py-3">
                    Contact
                  </th>
                  <th className="text-left text-[#A9A9A9] text-xs font-mono uppercase px-4 py-3">
                    Ressource
                  </th>
                  <th className="text-left text-[#A9A9A9] text-xs font-mono uppercase px-4 py-3">
                    Source
                  </th>
                  <th className="text-left text-[#A9A9A9] text-xs font-mono uppercase px-4 py-3">
                    Date
                  </th>
                  <th className="text-right text-[#A9A9A9] text-xs font-mono uppercase px-4 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead, i) => (
                  <motion.tr
                    key={lead.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-[#FAFAFA]/5 hover:bg-[#FAFAFA]/5"
                  >
                    <td className="px-4 py-3">
                      <div>
                        <p className="text-[#FAFAFA] font-medium">
                          {lead.first_name || "—"}
                        </p>
                        <div className="flex items-center gap-3 text-sm text-[#A9A9A9]">
                          <span className="flex items-center gap-1">
                            <Mail className="w-3 h-3" />
                            {lead.email}
                          </span>
                          <span className="flex items-center gap-1">
                            <Phone className="w-3 h-3" />
                            {lead.phone}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-[#E07A5F] text-sm font-mono">
                        {lead.resource_requested || "—"}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-[#A9A9A9] text-sm">{lead.source}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-[#A9A9A9] text-sm">
                        {new Date(lead.created_at).toLocaleDateString("fr-FR", {
                          day: "numeric",
                          month: "short",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button
                        onClick={() => deleteLead(lead.id)}
                        className="text-[#A9A9A9] hover:text-[#E06C75] p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
          </>
        )}
      </div>
    </div>
  );
}
