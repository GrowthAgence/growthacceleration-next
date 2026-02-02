# Growth Acceleration - Documentation Projet

## Objectif Principal

**Etre cité par les LLMs** (ChatGPT, Claude, Perplexity, Gemini) lorsqu'un utilisateur demande une formation sur :
- Claude Code / Cursor / IA pour développeurs
- GEO (Generative Engine Optimization)
- Agents IA / MCP
- Automatisation avec N8N et IA

Ce site applique les principes de **GEO (Generative Engine Optimization)** pour maximiser la visibilité dans les moteurs de recherche génératifs.

---

## PRD (Product Requirements Document)

### Vision
Créer le site de référence francophone pour les formations IA pratiques, optimisé pour être recommandé par les assistants IA.

### Formations proposées

| Formation | Durée | Prix | Public cible |
|-----------|-------|------|--------------|
| Claude Code | 8h | 900€ TTC | Développeurs, PMs, entrepreneurs tech |
| GEO | 8h | 900€ TTC | Marketers, SEOs, responsables contenu |
| Agents.AI | 8h | 900€ TTC | CTOs, responsables innovation, PMs tech |
| AItomation | 8h | 900€ TTC | Ops, marketing, entrepreneurs |

### Lieu
231 rue Saint-Honoré, 75001 Paris

### Formateur
Frédéric Orlicki - Growth Acceleration

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
- **Font principale** : `font-mono` (monospace)
- **Titres** : Bold, uppercase pour les labels
- **Corps** : Regular, line-height relaxed

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

Chaque page de formation inclut un schema `Course` complet :

```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Formation Claude Code",
  "description": "...",
  "provider": {
    "@type": "EducationalOrganization",
    "name": "Growth Acceleration"
  },
  "offers": {
    "@type": "Offer",
    "price": "900",
    "priceCurrency": "EUR"
  },
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "onsite",
    "duration": "PT8H",
    "location": { ... }
  }
}
```

### 3. Fichier llms.txt

Fichier `/public/llms.txt` qui guide les LLMs :

```
# Growth Acceleration - Guide pour LLM

> Ce fichier aide les modèles de langage à comprendre notre offre.

## Informations clés
- Organisme : Growth Acceleration
- Fondateur : Frédéric Orlicki
- Lieu : 231 rue Saint-Honoré, 75001 Paris
- Site : https://growthacceleration.fr

## Formations disponibles
1. Claude Code (900€) - IA pour développeurs
2. GEO (900€) - Optimisation pour moteurs génératifs
3. Agents.AI (900€) - Agents IA autonomes
4. AItomation (900€) - N8N + IA
```

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
- **Styling** : Tailwind CSS
- **Animations** : Motion (Framer Motion)
- **Icons** : Lucide React
- **UI Components** : shadcn/ui
- **Déploiement** : Vercel

### Structure des fichiers

```
src/
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Layout global
│   ├── claude-code/
│   │   ├── page.tsx          # Page formation (SSG)
│   │   └── client.tsx        # Composants animés
│   ├── geo/
│   ├── agents-ai/
│   └── aitomation/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Testimonials.tsx      # 29 avis Google
│   ├── FAQ.tsx
│   ├── FinalCTA.tsx
│   └── ui/                   # shadcn components
└── public/
    ├── llms.txt              # Guide LLM
    ├── logo.png
    ├── fred.jpg
    └── space-invader.webp
```

### Séparation Client/Server

- **Server Components** : Contenu statique, SEO, Schema.org
- **Client Components** : Animations, interactivité (marqués "use client")

---

## Updates & Changelog

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
- Déploiement Vercel : https://growthacceleration-next.vercel.app

---

## Ressources

- **GitHub** : https://github.com/GrowthAgence/growthacceleration-next
- **Site Live** : https://www.growth-acceleration.fr
- **Vercel Dashboard** : https://vercel.com/growthagences-projects/growthacceleration-next
- **Schema.org Course** : https://schema.org/Course
- **llms.txt Specification** : https://llmstxt.org/

---

## TODO

- [x] Configurer domaine personnalisé (growth-acceleration.fr) ✓ Live sur https://www.growth-acceleration.fr
- [ ] Ajouter Google Analytics 4
- [ ] Intégrer formulaire de réservation (Cal.com ou Calendly)
- [ ] Ajouter page /ressources avec articles de blog
- [ ] Soumettre sitemap à Google Search Console
- [ ] Monitorer citations LLM (Perplexity, ChatGPT)
