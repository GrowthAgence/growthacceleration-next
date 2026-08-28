import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

// Init paresseuse : la cle n'existe que sur Vercel, un import au build local ne doit pas planter
const getResend = () => new Resend(process.env.RESEND_API_KEY);

const QUESTION_LABELS: Record<string, string> = {
  knowledge_bases: "Knowledge Bases — Can trainers pre-load documents?",
  kb_limits: "Knowledge Bases — Size/count limits?",
  workspace_isolation: "Workspace isolation possible?",
  user_provisioning: "User provisioning method",
  agent_rights: "Agent creation rights",
  llm_models: "LLM models available",
  doc_upload: "Document upload during session?",
  sandbox: "Sandbox/test workspace available?",
  notes: "Additional notes",
};

export async function POST(request: NextRequest) {
  try {
    const answers: Record<string, string | string[]> = await request.json();

    const rows = Object.entries(QUESTION_LABELS)
      .map(([id, label]) => {
        const val = answers[id];
        const display = Array.isArray(val) ? val.join(", ") : (val || "—");
        return `
          <tr>
            <td style="padding:10px 14px;font-size:12px;font-family:monospace;color:#E07A5F;white-space:nowrap;vertical-align:top;border-bottom:1px solid #333">${label}</td>
            <td style="padding:10px 14px;font-size:14px;color:#F4F1DE;border-bottom:1px solid #333">${display}</td>
          </tr>`;
      })
      .join("");

    const html = `
      <div style="background:#1E1E1E;padding:32px;font-family:Inter,sans-serif;max-width:700px;margin:0 auto;border-radius:12px">
        <p style="font-family:monospace;font-size:13px;color:#E07A5F;margin:0 0 8px">&gt; dust-setup.questionnaire</p>
        <h1 style="font-size:22px;color:#FAFAFA;margin:0 0 6px;font-weight:700">Dust Setup — Responses received</h1>
        <p style="font-size:14px;color:#A9A9A9;margin:0 0 28px">Submitted ${new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" })}</p>
        <table style="width:100%;border-collapse:collapse;background:#2D2A2E;border-radius:8px;overflow:hidden">
          <thead>
            <tr style="background:#111">
              <th style="padding:10px 14px;text-align:left;font-size:11px;font-family:monospace;color:#A9A9A9;text-transform:uppercase;letter-spacing:.06em">Question</th>
              <th style="padding:10px 14px;text-align:left;font-size:11px;font-family:monospace;color:#A9A9A9;text-transform:uppercase;letter-spacing:.06em">Answer</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
        <p style="margin-top:24px;font-size:12px;color:#A9A9A9;font-family:monospace">
          Europ Assistance — AI Solutions Lab · growth-acceleration.fr
        </p>
      </div>`;

    await getResend().emails.send({
      from: "Dust Setup <noreply@planctolab.com>",
      to: "fredericorlicki@gmail.com",
      subject: "✅ Dust Setup — Réponses reçues (Europ Assistance)",
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("dust-submit error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
