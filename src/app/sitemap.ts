import type { MetadataRoute } from "next";
import { neon } from "@neondatabase/serverless";

async function getFicheEntries(baseUrl: string): Promise<MetadataRoute.Sitemap> {
  try {
    const sql = neon(process.env.DATABASE_URL!);
    const fiches = await sql`
      SELECT slug, published_at FROM fiches WHERE status = 'published' ORDER BY published_at DESC
    `;
    return fiches.map((fiche) => ({
      url: `${baseUrl}/fiches/${fiche.slug}`,
      lastModified: new Date(fiche.published_at as string),
    }));
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.growth-acceleration.fr";
  const ficheEntries = await getFicheEntries(baseUrl);

  return [
    {
      url: `${baseUrl}/fiches`,
      lastModified: new Date(),
    },
    ...ficheEntries,
    {
      url: baseUrl,
      lastModified: new Date("2026-02-24"),
    },
    {
      url: `${baseUrl}/formation-intelligence-artificielle`,
      lastModified: new Date("2026-02-24"),
    },
    {
      url: `${baseUrl}/claude-code`,
      lastModified: new Date("2026-02-24"),
    },
    {
      url: `${baseUrl}/geo`,
      lastModified: new Date("2026-02-24"),
    },
    {
      url: `${baseUrl}/agents-ai`,
      lastModified: new Date("2026-02-24"),
    },
    {
      url: `${baseUrl}/automations`,
      lastModified: new Date("2026-02-24"),
    },
    {
      url: `${baseUrl}/zero-employee-company`,
      lastModified: new Date("2026-08-12"),
    },
    {
      url: `${baseUrl}/ressources`,
      lastModified: new Date("2026-02-24"),
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: new Date("2026-02-08"),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date("2026-02-24"),
    },
    {
      url: `${baseUrl}/blog/claude-code-vs-cursor`,
      lastModified: new Date("2026-02-24"),
    },
    {
      url: `${baseUrl}/blog/guide-geo-2026`,
      lastModified: new Date("2026-02-24"),
    },
    {
      url: `${baseUrl}/blog/agents-ia-entreprise`,
      lastModified: new Date("2026-02-24"),
    },
    {
      url: `${baseUrl}/blog/formation-ia-debutant`,
      lastModified: new Date("2026-02-24"),
    },
    {
      url: `${baseUrl}/blog/n8n-vs-make-vs-zapier`,
      lastModified: new Date("2026-02-24"),
    },
  ];
}
