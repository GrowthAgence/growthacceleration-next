import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.growth-acceleration.fr";

  return [
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
