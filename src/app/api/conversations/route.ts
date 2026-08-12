import { neon } from "@neondatabase/serverless";
import { NextRequest, NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/admin-auth";

const sql = neon(process.env.DATABASE_URL!);

export async function GET(request: NextRequest) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const conversations = await sql`
      SELECT id, messages, created_at, updated_at
      FROM chat_conversations
      ORDER BY updated_at DESC
      LIMIT 100
    `;
    return NextResponse.json({ conversations });
  } catch (error) {
    console.error("Error fetching conversations:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
