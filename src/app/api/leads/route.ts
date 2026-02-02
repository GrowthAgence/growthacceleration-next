import { neon } from "@neondatabase/serverless";
import { NextRequest, NextResponse } from "next/server";

const sql = neon(process.env.DATABASE_URL!);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, phone, firstName, lastName, company, resourceRequested, source } = body;

    // Validation
    if (!email) {
      return NextResponse.json({ error: "Email requis" }, { status: 400 });
    }

    if (!phone) {
      return NextResponse.json({ error: "Telephone requis" }, { status: 400 });
    }

    // Insert lead
    const result = await sql`
      INSERT INTO leads (email, phone, first_name, last_name, company, resource_requested, source)
      VALUES (${email}, ${phone}, ${firstName || null}, ${lastName || null}, ${company || null}, ${resourceRequested || null}, ${source || 'website'})
      RETURNING id, email, resource_requested
    `;

    return NextResponse.json({
      success: true,
      message: "Merci ! Vous allez recevoir votre ressource.",
      lead: result[0],
    });
  } catch (error) {
    console.error("Error creating lead:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const leads = await sql`
      SELECT id, email, phone, first_name, last_name, company, resource_requested, source, created_at
      FROM leads
      ORDER BY created_at DESC
      LIMIT 100
    `;

    return NextResponse.json({ leads });
  } catch (error) {
    console.error("Error fetching leads:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
