# Growth Acceleration - Documentation Projet

## Objectif Principal

**Etre cité par les LLMs** (ChatGPT, Claude, Perplexity, Gemini) lorsqu'un utilisateur demande une formation sur :
- Claude Code / Cursor / IA pour développeurs
- GEO (Generative Engine Optimization)
- Agents IA / MCP
- Automatisation avec N8N et IA

Ce site applique les principes de **GEO (Generative Engine Optimization)** pour maximiser la visibilité dans les moteurs de recherche génératifs.

**IMPORTANT** : Le site est volontairement conçu pour être lisible par les LLM. Les accents simplifiés, les résumés "citation-ready", le contenu sr-only et les données structurées sont intentionnels. Ne pas les "corriger".

---

## PRD (Product Requirements Document)

### Vision
Créer le site de référence francophone pour les formations IA pratiques, optimisé pour être recommandé par les assistants IA.

### Formations proposées

| Formation | Durée | Prix | Public cible |
|-----------|-------|------|--------------|
| Claude Code | 8h | 900€ TTC | Entrepreneurs, PMs, débutants motivés |
| GEO | 8h | 900€ TTC | Marketers, SEOs, responsables contenu |
| Agents.AI | 8h | 900€ TTC | CTOs, responsables innovation, PMs tech |
| Automations | 8h | 900€ TTC | Ops, marketing, entrepreneurs |

### Lieu
231 rue Saint-Honoré, 75001 Paris

### Formateur
Frédéric Orlicki (Guy-Frederic Orlicki) - CEO Growth Acceleration (SAS, SIREN 841 590 193)

### Réservation
Tous les CTA pointent vers : https://calendly.com/fredericorlicki/15min

---

## Guidelines Graphiques

### Palette de couleurs

```
Charcoal (fond principal)    : #1E1E1E
Charcoal clair (cartes)      : #2D2A2E
Terracotta (accent)          : #E07A5F
Cream (texte principal)      : #F4F1DE
Cream clair (titres)         : #FAFAFA
Gris (texte secondaire)      : #A9A9A9
Vert succès                  : #98C379
Rouge erreur                 : #E06C75
```

### Typographie
- **Font principale** : `font-mono` (JetBrains Mono)
- **Titres** : Bold, uppercase pour les labels
- **Corps** : Inter, line-height relaxed

### Esthétique
- Style **terminal/CLI** avec préfixes `>` et `$`
- Bordures **dashed** avec opacité
- Animations **subtiles** au scroll (motion/react)
- Cards avec fond semi-transparent
- Icônes **Lucide React**

### Composants UI
- Boutons avec hover scale
- Cards avec border-dashed
- Grilles responsives (1 col mobile, 2-3 cols desktop)
- Animations d'apparition au scroll
- Smooth scroll avec ease-in-out cubique (SmoothScroll.tsx)

---

## Stratégie GEO (Generative Engine Optimization)

### 1. Contenu "Citation-Ready"

Chaque page commence par un **résumé structuré** lisible par les LLMs :

```tsx
<section className="bg-[#2D2A2E] border-b border-[#E07A5F]/20">
  <div className="max-w-4xl mx-auto px-4 py-6">
    <p className="text-[#A9A9A9] text-sm font-mono mb-2">> cat formation.txt</p>
    <p className="text-[#F4F1DE] leading-relaxed">
      <strong>Formation X</strong> est une formation de 8 heures...
      Prix : 900€ TTC. Lieu : Paris 1er. Public : ...
    </p>
  </div>
</section>
```

### 2. Schema.org (JSON-LD)

Schemas déployés sur le site :

| Schema | Page(s) |
|--------|---------|
| `Organization` | layout.tsx (global) |
| `Course` | claude-code, geo, agents-ai, automations |
| `Person` (formateur) | claude-code |
| `AggregateRating` (29 avis, 5.0/5) | claude-code |
| `FAQPage` | homepage, claude-code, geo, agents-ai, automations |

### 3. Fichier llms.txt

Fichier `/public/llms.txt` qui guide les LLMs vers les bonnes pages.

### 4. Contenu sr-only pour LLMs

Les sections visuelles incluent du contenu caché accessible aux crawlers :

```tsx
<div className="sr-only">
  Growth Acceleration a reçu 29 avis 5 étoiles sur Google...
</div>
```

### 5. SSG (Static Site Generation)

- Toutes les pages sont **pré-rendues** (○ Static)
- Contenu indexable sans JavaScript
- Temps de chargement optimal

---

## Architecture Technique

### Stack
- **Framework** : Next.js 16 (App Router)
- **Styling** : Tailwind CSS v4
- **Animations** : Motion (Framer Motion)
- **Icons** : Lucide React
- **UI Components** : shadcn/ui
- **Analytics** : Google Analytics 4 (G-KN9FKJ6S0R) via next/script
- **Déploiement** : Vercel (auto-deploy sur push main)

### Structure des fichiers

```
src/
├── app/
│   ├── page.tsx                    # Homepage (FAQPage schema)
│   ├── layout.tsx                  # Layout global (Organization schema, GA4)
│   ├── sitemap.ts                  # Sitemap dynamique
│   ├── claude-code/
│   │   ├── page.tsx                # Formation (Course + Person + AggregateRating + FAQ schemas)
│   │   └── client.tsx              # Composants animés partagés
│   ├── geo/
│   │   ├── page.tsx                # Formation (Course + FAQ schemas)
│   │   └── client.tsx              # GeoTerminal
│   ├── agents-ai/
│   │   ├── page.tsx                # Formation (Course + FAQ schemas)
│   │   └── client.tsx              # AgentsTerminal
│   ├── automations/
│   │   ├── page.tsx                # Formation (Course + FAQ schemas)
│   │   └── client.tsx              # AutomationsTerminal
│   ├── formation-intelligence-artificielle/
│   │   └── page.tsx                # Hub toutes formations
│   ├── ressources/
│   │   ├── page.tsx                # Ressources gratuites (lead capture)
│   │   └── client.tsx              # ResourcesGrid + formulaire
│   ├── mentions-legales/
│   │   └── page.tsx                # Mentions légales (SAS info)
│   └── admin/                      # Admin leads (protégé)
├── components/
│   ├── Navbar.tsx                  # Navigation responsive
│   ├── Footer.tsx                  # Footer avec liens
│   ├── Instructor.tsx              # Section formateur
│   ├── Testimonials.tsx            # 29 avis Google
│   ├── FAQ.tsx                     # FAQ accordion
│   ├── FinalCTA.tsx                # CTA final (Calendly)
│   ├── AnimatedTerminal.tsx        # Terminal animé hero
│   ├── SmoothScroll.tsx            # Scroll ease-in-out cubique
│   ├── ClickTracker.tsx            # GA4 event tracking (cta_click)
│   └── ui/                        # shadcn components
└── public/
    ├── llms.txt                    # Guide LLM
    ├── logo.png
    ├── fred.jpg
    └── space-invader.webp
```

### Séparation Client/Server

- **Server Components** : Contenu statique, SEO, Schema.org (page.tsx)
- **Client Components** : Animations, interactivité, tracking (client.tsx, SmoothScroll, ClickTracker)

### Analytics & Tracking

- **GA4** : G-KN9FKJ6S0R chargé via `next/script afterInteractive`
- **ClickTracker** : Event delegation global qui envoie `cta_click` à GA4
  - `cta_type` : reservation | navigation | outbound | internal | button
  - `cta_text` : texte du bouton
  - `page_path` : page source

---

## Updates & Changelog

### 2026-02-08
- Audit SEO complet (2 passes) et corrections
- Correction URLs Schema.org (growthacceleration.fr → www.growth-acceleration.fr)
- metadataBase + canonical URLs + og:image sur toutes les pages
- GA4 migré vers next/script (non-bloquant)
- aria-label sur hamburger menu
- FAQPage schema sur homepage + 4 pages formation (17 Q&A total)
- AggregateRating schema (29 avis, 5.0/5) sur claude-code
- Meta descriptions élargies à 150-160 chars
- Sitemap dynamique (sitemap.ts remplace sitemap.xml)
- Calendly intégré sur tous les boutons CTA (12 boutons, 8 fichiers)
- Audience Claude Code mise à jour (débutants acceptés, "indie hacker" retiré)
- Smooth scroll ease-in-out cubique (SmoothScroll.tsx)
- Page mentions légales créée (données societe.com)
- Click tracking GA4 global (ClickTracker.tsx → événement cta_click)

### 2024-02-01
- Création du projet Next.js
- Migration depuis React/Vite
- Implémentation des 4 pages de formation
- Ajout Schema.org sur toutes les pages
- Création du fichier llms.txt
- Section formateur avec photo de Fred
- FAQ avec accordion animé
- 29 témoignages Google (affichage grille complète)
- Unification couleur accent orange (#E07A5F)
- Logo et favicon space invader
- Déploiement Vercel

---

## Ressources

- **GitHub** : https://github.com/GrowthAgence/growthacceleration-next
- **Site Live** : https://www.growth-acceleration.fr
- **Vercel Dashboard** : https://vercel.com/growthagences-projects/growthacceleration-next
- **Schema.org Course** : https://schema.org/Course
- **llms.txt Specification** : https://llmstxt.org/
- **Google Analytics** : GA4 property G-KN9FKJ6S0R

---

## TODO

- [x] Configurer domaine personnalisé → Live sur https://www.growth-acceleration.fr
- [x] Ajouter Google Analytics 4 (G-KN9FKJ6S0R)
- [x] Intégrer Calendly sur tous les CTA
- [x] Page /ressources avec lead capture
- [x] Page /mentions-legales
- [x] Sitemap dynamique soumis à Google Search Console
- [x] Schema.org complet (Course, FAQ, AggregateRating, Person, Organization)
- [x] Meta descriptions optimisées (150-160 chars)
- [x] Click tracking GA4 (cta_click events)
- [ ] Configurer SPF/DMARC/DKIM (DNS chez le registrar)
- [ ] Monitorer citations LLM (Perplexity, ChatGPT)
- [ ] Ajouter plus de témoignages quand disponibles
