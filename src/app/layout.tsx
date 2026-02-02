import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Formation Intelligence Artificielle Paris | Growth Acceleration",
    template: "%s | Growth Acceleration",
  },
  description:
    "Formation IA pour entrepreneurs et managers a Paris. Maitrisez l IA generative, les agents IA et l automatisation en 1 journee. 900 EUR TTC. Organisme de formation professionnelle.",
  keywords: [
    "formation intelligence artificielle",
    "formation IA",
    "formation IA Paris",
    "formation IA managers",
    "formation IA entrepreneurs",
    "Claude Code",
    "GEO",
    "agents IA",
    "N8N",
    "automatisation IA",
  ],
  authors: [{ name: "Growth Acceleration" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Growth Acceleration",
    title: "Formation Intelligence Artificielle Paris | Growth Acceleration",
    description: "Formation IA pour entrepreneurs et managers. Maitrisez l IA generative en 1 journee a Paris. 900 EUR TTC.",
  },
};

// Schema.org Organization - rendu cote serveur pour les LLM
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Growth Acceleration",
  url: "https://growthacceleration.fr",
  logo: "https://growthacceleration.fr/logo.png",
  description:
    "Organisme de formation specialise en intelligence artificielle pour entrepreneurs et managers. Formations Claude Code, GEO, Agents IA et N8N a Paris.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "231 rue Saint-Honore",
    addressLocality: "Paris",
    postalCode: "75001",
    addressCountry: "FR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "French",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen bg-[#1E1E1E] text-[#F4F1DE] antialiased font-sans">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />

        {/* Background Grid Effect - meme design que Figma */}
        <div
          className="fixed inset-0 pointer-events-none z-[-1] opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#FAFAFA 1px, transparent 1px), linear-gradient(90deg, #FAFAFA 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </body>
    </html>
  );
}
