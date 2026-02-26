import type { Metadata } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ClickTracker } from "@/components/ClickTracker";
import { MobileCTA } from "@/components/MobileCTA";
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
  metadataBase: new URL("https://www.growth-acceleration.fr"),
  title: {
    default: "Formations IA Paris | Growth Acceleration",
    template: "%s | Growth Acceleration",
  },
  description:
    "Formations IA pratiques a Paris. Claude Code, GEO, Agents IA, N8N. 8h, 900 EUR TTC. Pour entrepreneurs et managers.",
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.growth-acceleration.fr",
    siteName: "Growth Acceleration",
    title: "Formations IA Paris | Growth Acceleration",
    description: "Formation IA pour entrepreneurs et managers. Maitrisez l IA generative en 1 journee a Paris. 900 EUR TTC.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Growth Acceleration - Formations IA Paris",
      },
    ],
  },
};

// Schema.org Organization - rendu cote serveur pour les LLM
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://www.growth-acceleration.fr/#organization",
  name: "Growth Acceleration",
  url: "https://www.growth-acceleration.fr",
  logo: "https://www.growth-acceleration.fr/logo.png",
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
    url: "https://calendly.com/fredericorlicki/15min",
    availableLanguage: "French",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.growth-acceleration.fr/#website",
  name: "Growth Acceleration",
  url: "https://www.growth-acceleration.fr",
  publisher: {
    "@id": "https://www.growth-acceleration.fr/#organization",
  },
  inLanguage: "fr",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen bg-[#1E1E1E] text-[#F4F1DE] antialiased font-sans">
        <SmoothScroll />
        <ClickTracker />
        <Navbar />
        <main className="pt-16 pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileCTA />

        {/* Tawk.to Chat */}
        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/69a049aecccb6c1c36ab322f/1jid1vktu';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KN9FKJ6S0R"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KN9FKJ6S0R');
          `}
        </Script>

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
