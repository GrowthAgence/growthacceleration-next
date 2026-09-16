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
| IA Creative | 8h | 900€ TTC | DA, designers, motion designers, marketeurs |
| GEO | 8h | 900€ TTC | Marketers, SEOs, responsables contenu |
| Agents.AI | 8h | 900€ TTC | CTOs, responsables innovation, PMs tech |
| Automations | 8h | 900€ TTC | Ops, marketing, entrepreneurs |
| The Zero Employee Company (Hermes) | 8h | **350€ TTC promo** (au lieu de 900€) | Entrepreneurs, indépendants, solopreneurs |

### Lieu
231 rue Saint-Honoré, 75001 Paris

### Formateur
Frédéric Orlicki (Guy-Frederic Orlicki) - CEO Growth Acceleration (SAS, SIREN 841 590 193)
- Developpeur full stack, ex Le Wagon #0001
- 3 SaaS en production avec Claude API : VideoTools, Jobbot.io, Bigmails.AI
- Stack : Next.js, TypeScript, Supabase, GCP, Claude Code, Cursor, NeonBase, OpenClaw
- 400+ professionnels formés à l'IA

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
| `Person` (formateur) | claude-code, geo, agents-ai, automations |
| `AggregateRating` (29 avis, 5.0/5) | claude-code, geo, agents-ai, automations |
| `FAQPage` | homepage, claude-code, geo, agents-ai, automations |
| `BlogPosting` | 5 articles blog |
| `BreadcrumbList` | formation-intelligence-artificielle, 5 articles blog |
| `CollectionPage` | blog hub |

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
- **Base de données** : Neon Postgres (leads, chat_conversations, fiches, machine_sources, li_comment_queue, machine_config)
- **Analytics** : Google Analytics 4 (G-KN9FKJ6S0R) via next/script
- **Chat** : chatbot Claude maison (ChatWidget.tsx + /api/chat, streaming, claude-opus-5, ANTHROPIC_API_KEY sur Vercel)
- **CRM/emailing** : Mautic self-hosted (mautic.growth-acceleration.fr) — chaque lead y est poussé automatiquement
- **Design** : voir [DESIGN.md](./DESIGN.md) (design system complet) + skill ui-ux-pro-max (.claude/skills/ui-ux-pro-max/)
- **Déploiement** : Vercel (auto-deploy sur push main)

### Structure des fichiers

```
src/
├── app/
│   ├── page.tsx                    # Homepage (FAQPage schema)
│   ├── layout.tsx                  # Layout global (Organization schema, GA4, ChatWidget)
│   ├── sitemap.ts                  # Sitemap dynamique
│   ├── claude-code/
│   │   ├── page.tsx                # Formation (Course + Person + AggregateRating + FAQ schemas)
│   │   └── client.tsx              # Composants animés partagés
│   ├── ia-creative/
│   │   ├── page.tsx                # Formation IA générative (Course + Person + FAQ schemas)
│   │   └── client.tsx              # Composants animés
│   ├── geo/
│   │   ├── page.tsx                # Formation (Course + Person + AggregateRating + FAQ schemas)
│   │   └── client.tsx              # GeoTerminal
│   ├── agents-ai/
│   │   ├── page.tsx                # Formation (Course + Person + AggregateRating + FAQ schemas)
│   │   └── client.tsx              # AgentsTerminal
│   ├── automations/
│   │   ├── page.tsx                # Formation (Course + Person + AggregateRating + FAQ schemas)
│   │   └── client.tsx              # AutomationsTerminal
│   ├── blog/
│   │   ├── page.tsx                # Blog hub (CollectionPage schema)
│   │   ├── etre-cite-par-chatgpt/            # Article + diagrams.tsx (5 schémas SVG inline)
│   │   ├── prospection-inversee/page.tsx     # Article manuel (redirect 308 depuis machine-a-walkthrough)
│   │   ├── claude-code-vs-cursor/page.tsx   # Article (BlogPosting schema)
│   │   ├── guide-geo-2026/page.tsx          # Article (BlogPosting schema)
│   │   ├── agents-ia-entreprise/page.tsx    # Article (BlogPosting schema)
│   │   ├── formation-ia-debutant/page.tsx   # Article (BlogPosting schema)
│   │   └── n8n-vs-make-vs-zapier/page.tsx   # Article (BlogPosting schema)
│   ├── formation-intelligence-artificielle/
│   │   └── page.tsx                # Hub toutes formations
│   ├── fiches/
│   │   ├── page.tsx                # Hub fiches pratiques (DB-driven, force-dynamic)
│   │   └── [slug]/page.tsx         # Fiche (JSON-LD HowTo + Breadcrumb, CTA formations)
│   ├── ressources/
│   │   ├── page.tsx                # Ressources gratuites (lead capture)
│   │   └── client.tsx              # ResourcesGrid + formulaire
│   ├── mentions-legales/
│   │   └── page.tsx                # Mentions légales (SAS info)
│   ├── proposition/
│   │   └── europ-assistance/
│   │       ├── page.tsx            # Proposition B2B FR (noindex)
│   │       ├── client.tsx          # Composants animés proposition FR
│   │       └── en/
│   │           ├── page.tsx        # Proposition B2B EN (noindex)
│   │           └── client.tsx      # Composants animés proposition EN
│   └── admin/                      # Admin leads (protégé)
│   └── api/
│       ├── leads/                  # POST public (capture + push Mautic), GET/DELETE admin
│       ├── chat/                   # Chatbot streaming
│       ├── conversations/          # Transcripts chatbot (admin)
│       └── machine/
│           ├── telegram/route.ts   # Webhook bot (fiches + boutons commentaires)
│           └── li-comments/route.ts # Ingestion commentaires LinkedIn (cron VPS)
├── lib/
│   ├── mautic.ts                   # pushLeadToMautic (best-effort, jamais bloquant)
│   ├── machine/
│   │   ├── telegram.ts             # Envoi/édition messages + boutons inline
│   │   ├── fiche.ts                # Génération fiche (charte tone of voice) + slugs
│   │   └── licomments.ts           # Rédaction réponse {reponse, auto} + publication LinkedIn
│   ├── admin-auth.ts               # Garde x-admin-password
│   └── chatbot-prompt.ts           # System prompt du chatbot
├── components/
│   ├── Navbar.tsx                  # Navigation responsive + menu déroulant formations
│   ├── Footer.tsx                  # Footer avec liens
│   ├── Instructor.tsx              # Section formateur
│   ├── Testimonials.tsx            # 29 avis Google
│   ├── FAQ.tsx                     # FAQ accordion
│   ├── FinalCTA.tsx                # CTA final (Calendly)
│   ├── AnimatedTerminal.tsx        # Terminal animé hero
│   ├── SmoothScroll.tsx            # Scroll ease-in-out cubique
│   ├── ClickTracker.tsx            # GA4 tracking (clicks, scroll, page context)
│   └── ui/                        # shadcn components
└── public/
    ├── llms.txt                    # Guide LLM
    ├── .well-known/agent-facts      # NANDA protocol (agent discovery)
    ├── logo.png
    ├── fred.jpg
    ├── space-invader.webp
    └── logos/
        └── europ-assistance.png    # Logo client (blanc sur transparent)
```

### Séparation Client/Server

- **Server Components** : Contenu statique, SEO, Schema.org (page.tsx)
- **Client Components** : Animations, interactivité, tracking (client.tsx, SmoothScroll, ClickTracker)

### Analytics & Tracking

- **GA4** : G-KN9FKJ6S0R (propriété "Growth-acceleration IA", ID 522529512) chargé via `next/script afterInteractive`
- **ClickTracker.tsx** : centralise tout le tracking (clicks + scroll)
  - `cta_click` : 5 types (reservation | navigation | outbound | internal | button) + `page_type` + `formation_name`
  - `scroll_depth` : milestones 25%, 50%, 75%, 100% + `page_type` + `formation_name`
- **FAQ.tsx** : `faq_click` avec `faq_question` et `faq_index`
- **ressources/client.tsx** :
  - `form_start` : ouverture modale téléchargement
  - `generate_lead` : soumission formulaire réussie (marqué comme conversion/événement clé dans GA4)

---

## La Machine — contenu et publication automatisés

Système de production de contenu qui enjambe **ce repo (Vercel/Neon)** et le **VPS Hostinger** (`srv1694415`, voir la mémoire `hermes-workspace`). Trois boucles, toutes avec un humain dans le circuit sauf mention contraire.

### 1. Post LinkedIn du jour (7j/7)
- **Où** : VPS, `/docker/machine/post-du-jour.py` + `/etc/cron.d/post-du-jour` (`0 6 * * *` UTC = 8h Paris en été — ⚠️ décale à 9h à l'heure d'hiver, cron à ajuster)
- **Flux** : rotation éditoriale selon le jour (lun/jeu feuilleton · mar/ven « Hermes mode d'emploi » · mer/sam réaction veille via RSS Simon Willison + tldr.tech/api/rss/ai · dim récap de la semaine) → lit `llms.txt` + les posts Postiz de moins de 10 jours (anti-répétition) → génération claude-sonnet-5 → **brouillon** dans Postiz via l'API publique → notification Telegram à Fred
- **Règles gravées dans le prompt** : jamais d'invention (fait absent du contexte = post plus général), et **jamais de mention d'une validation humaine** (le récit public est « la machine écrit et publie seule »)
- **Config** : `/docker/machine/post-du-jour.env` (chmod 600)
- ⚠️ La routine cloud équivalente (`trig_017FqJr1fgqUXJyJGmPWrb3q`) est **désactivée** : l'environnement cloud bloque l'egress réseau (Postiz, Telegram, RSS inaccessibles)

### 2. Réponses aux commentaires LinkedIn (automatique + garde-fou)
- **Où** : VPS `/docker/machine/li-comments-fetch.py` + `/etc/cron.d/li-comments` (horaire à :15) → `POST /api/machine/li-comments` (header `x-admin-password`)
- **Flux** : token LinkedIn frais lu dans la base Postiz → commentaires des posts < 21 jours → dédup `li_comment_queue` → rédaction `{reponse, auto}` → **auto=true : publication immédiate** + notification Telegram informative ; **auto=false** (troll, juridique, presse, enjeu commercial, ambiguïté) : boutons ✅/🙈 sur Telegram
- **API LinkedIn** : lecture `GET /v2/socialActions/{share-urn}/comments`, réponse `POST /v2/socialActions/{activity-urn}/comments` (`actor` = `urn:li:person:{internalId}`, `parentComment` = URN du commentaire)

### 3. Fiches pratiques (bot Telegram → /fiches)
- **Où** : `@GA_Lead_Magnet_creator_bot` → `/api/machine/telegram` (secret header, dédup `update_id`, owner lock sur le premier chat)
- **Flux** : Fred colle un post LinkedIn/X ou un lien → `machine_sources` → génération au gabarit recette/fiche/checklist → brouillon Telegram avec boutons ✅ Publier / 🔄 Autre angle / ❌ Rejeter → publication sur `/fiches/[slug]`
- ⚠️ LinkedIn et X bloquent la lecture serveur : le bot demande le copier-coller du texte si le lien seul ne se fetch pas

### Publication LinkedIn (Postiz)
- Postiz auto-hébergé (`postiz.growth-acceleration.fr`), 2 canaux : profil « Fréderic Orlicki » (`cmtlbp25r0005mw8w2dj6g1q7`) + page « Growth Acceleration »
- API : `POST /api/public/v1/posts`, header `Authorization: <apiKey>` (colonne `apiKey` de la table `Organization`), payload `{type: now|schedule|draft, date ISO, posts[].value[]={content, image:[]}}`
- ⚠️ L'app LinkedIn est **CMA-only** (règle « produit unique » qui persiste après approbation) : `openid`/`profile` impossibles à obtenir → les providers LinkedIn de Postiz sont **patchés** sur le VPS (`/docker/postiz/patches/`, montés en `:ro` via `docker-compose.override.yml`). À re-patcher après toute mise à jour d'image Postiz.

---

## Updates & Changelog

### 2026-09-16 — Passe de documentation
- CLAUDE.md remis à jour (6 formations, architecture complète, section « La Machine »)
- **DESIGN.md créé** : design system complet du site (palette, typographie, composants, gabarits de page, conventions GEO et éditoriales)

### 2026-09-15 — 6e formation « IA Creative » (commits b943ca2 + 1df103b)
- `/ia-creative` : formation IA générative pour créatifs et marketeurs (900 € TTC) — images/packshots au standard des marques, vidéo générative (keyframes), motion programmatique. Outils couverts : Higgsfield Soul, Nano Banana, GPT Image, Kling, Veo 3, Seedance, Remotion, HyperFrames, Topaz
- **Navbar refondue** : menu déroulant `./formations` (6 entrées + taglines + badges NEW/PROMO, fermeture au clic extérieur et à Échap), liens secondaires ressources/blog/fiches, menu mobile scrollable
- Accent terracotta conservé sur la fiche (le bleu introduit initialement cassait la charte)

### 2026-09-04 → 09-10 — Publication LinkedIn automatisée
- **Postiz connecté à LinkedIn** après 28 jours : CMA approuvée, diagnostic scope-par-scope, patch des providers (voir section « La Machine »)
- `/api/machine/li-comments` + `src/lib/machine/licomments.ts` : boucle commentaires, d'abord semi-auto (boutons) puis **passée en automatique avec garde-fou** le 10/09 (commit 4d681ac)
- Routine cloud du post quotidien rapatriée sur le VPS (egress bloqué côté cloud), passée en 7j/7 avec récap du dimanche

### 2026-08-28 (bis) — Machine à fiches (phase 1)
- **Bot Telegram** @GA_Lead_Magnet_creator_bot → `/api/machine/telegram` (webhook, secret header, dédup `machine_updates`, owner lock : le 1er chat qui écrit devient propriétaire, les autres sont ignorés)
- Flow : Fred envoie un post LinkedIn/X (texte ou lien) → source en base (`machine_sources`) → génération claude-sonnet-5 au gabarit recette/fiche/checklist (charte `~/contenu/positionnement-tone-of-voice.md` distillée dans `src/lib/machine/fiche.ts`) → brouillon Telegram avec boutons ✅ Publier / 🔄 Autre angle / ❌ Rejeter → publication sur `/fiches/[slug]`
- **Section /fiches** : pages DB-driven (Neon, `force-dynamic`), résumé citation-ready, JSON-LD HowTo + BreadcrumbList, CTA formations, liens navbar/footer, sitemap dynamique
- Env : `TELEGRAM_BOT_TOKEN`, `TELEGRAM_WEBHOOK_SECRET` (Vercel prod + .env.local)
- À venir : phase 2 = veille FreshRSS comme source auto, phase 3 = compilation lead magnets + newsletter Mautic (bloquée par le choix SMTP)

### 2026-08-28
- **Leads → Mautic** : chaque lead capturé sur /ressources est poussé vers Mautic (https://mautic.growth-acceleration.fr) en plus de Neon
  - `src/lib/mautic.ts` : `pushLeadToMautic()` — basic auth, timeout 8s, ne bloque jamais la capture (Neon = source de vérité)
  - Contact Mautic : email/phone/firstname/lastname/company + champs custom `resource_requested` et `lead_source` + tag `site-ga` → segment « Leads site GA » (id 1, rempli par cron)
  - Déduplication par email côté Mautic (2 téléchargements = 1 contact mis à jour)
  - Env Vercel prod : `MAUTIC_URL`, `MAUTIC_API_USER` (api-site-ga, rôle limité contacts/segments), `MAUTIC_API_PASSWORD`
  - Backfill des 7 leads Neon historiques fait le 28/08 (3 contacts uniques)
  - Mention de consentement renforcée sur la modale /ressources (désinscription à tout moment)
  - Fix build local : init Resend paresseuse dans /api/dust-submit (la clé n'existe que sur Vercel)

### 2026-08-12 (bis)
- **Chatbot Claude maison** remplace Tawk.to (qui était un live chat humain sans personne pour répondre)
  - `src/components/ChatWidget.tsx` : widget flottant style terminal (barre zsh, ➜/$, palette du site), streaming, liens Calendly cliquables, événements GA4 `chat_open`/`chat_message_sent`
  - `src/app/api/chat/route.ts` : route streaming claude-opus-5 (SDK @anthropic-ai/sdk), system prompt caché (prompt caching), rate limit 25 req/5min/IP, validation stricte des messages, max_tokens 1024
  - `src/lib/chatbot-prompt.ts` : system prompt = les 5 formations + prix (promo ZEC 350€) + Calendly + garde-fous (hors-sujet décliné, financement → appel, aucune invention, anti prompt-injection). Français avec accents (humain-facing, contrairement au contenu GEO)
  - Bouton « Poser une question » du FinalCTA ouvre le widget via CustomEvent `open-ga-chat`
  - Tawk.to retiré (script layout + tawk.d.ts supprimés)
  - `ANTHROPIC_API_KEY` ajoutée sur Vercel (Production) — clé partagée avec Hermes VPS, prévoir une clé dédiée
- **Historique + notifications du chatbot** (même jour) :
  - Table Neon `chat_conversations` (id uuid, messages jsonb, created/updated_at) — créée sur les DB prod ET dev
  - `/api/chat` persiste chaque échange (upsert par conversationId généré côté client, sessionStorage `ga-chat-id`) ; **email Resend à fredericorlicki@gmail.com à la première question** de chaque conversation
  - `/api/conversations` (GET, admin) + onglet « Conversations » dans /admin avec transcripts dépliables
  - Le widget restaure la conversation après navigation (sessionStorage `ga-chat-messages`)
- **🔒 ADMIN_PASSWORD roté le 12/08** : l'ancienne valeur était celle du fallback hardcodé, visible dans l'historique git d'un repo PUBLIC. Nouvelle valeur dans `.env.local` et Vercel Production uniquement — ne JAMAIS l'écrire dans ce fichier ni dans le code.
- **🔒 Faille corrigée** : `GET /api/leads` et `DELETE /api/leads/[id]` étaient publics (fuite emails/téléphones + suppression par n'importe qui). Désormais protégés par header `x-admin-password` (helper `src/lib/admin-auth.ts`), vérifié contre `ADMIN_PASSWORD`. Fallback mot de passe hardcodé `growth2024` retiré de /api/admin/auth. L'admin garde le mot de passe en sessionStorage et l'envoie sur chaque requête.

### 2026-08-12
- 5e formation : **The Zero Employee Company avec Hermes** (`/zero-employee-company`)
  - Brief transmis par Hermes via `/opt/data/claude-handoff/BRIEF.md` (VPS)
  - Prix promo 350€ TTC affiché avec 900€ barré (fiche + CTA + cartes home/hub)
  - Gabarit identique aux 4 fiches : résumé LLM, hero + HermesTerminal, pour qui, programme, bio (inchangée), autres formations, CTA Calendly
  - Schemas : Course (price 350) + Person + BreadcrumbList
  - Mises à jour : Navbar (./zero-employee, badge PROMO), Footer, homepage (5 formations, carte + résumé LLM), hub formation-intelligence-artificielle (5 formations, carte promo), llms.txt (bloc #5 + exception prix), sitemap (15 URLs), cartes croisées sur les 4 fiches (grille 4 colonnes)

### 2026-05-11
- Europ Assistance — deal en attente (Matteo a envoyé un email "nous reverrons si fit")
  - Use cases pivotés : 4 domaines opérationnels → 4 challenges management (Decision Brief, Meeting Zero, Manager Copilot, Risk Radar)
  - `/dust-informations` : questionnaire Typeform-like (9 questions, noindex) pour l'équipe Dust EA
  - `/api/dust-submit` : envoie les réponses à fredericorlicki@gmail.com via Resend
  - `RESEND_API_KEY` ajoutée sur Vercel (même clé que planctolab.com)

### 2026-04-20
- Pages proposition Europ Assistance (FR + EN) — noindex, privées
  - `/proposition/europ-assistance` (FR) + `/proposition/europ-assistance/en` (EN)
  - Logo EA dans `public/logos/europ-assistance.png`
  - Concept : "AI Solutions Lab" — sessions de 20 managers, 1 journée, Dust.tt
  - Deal : 100 cadres sup, 5 groupes de 20, septembre 2026, anglais
  - Dossier complet : `documents/europ-assistance/AI-SOLUTIONS-LAB.md`

### 2026-02-26
- Refonte homepage (pattern Social Proof via skill ui-ux-pro-max) :
  - Ajout 2 CTA dans le hero (Reserver ma place + Voir les formations)
  - Ajout Testimonials (29 avis Google) après la grille formations
  - Ajout FinalCTA en bas de page
  - Réorganisation : Hero → Formations → Testimonials → Instructor → Infos → FAQ → FinalCTA
  - Transitions 200ms + cursor-pointer sur les cards
- Tawk.to chat widget intégré (layout.tsx, next/script afterInteractive)
  - Bouton "Poser une question" du FinalCTA ouvre Tawk.to (Tawk_API.maximize)
  - Type declaration : src/types/tawk.d.ts
- Skill ui-ux-pro-max installée (.claude/skills/ui-ux-pro-max/)
- Audit GA4 (30j) : 133 sessions, 83 users, 63% bounce, 0 vues blog, 83% trafic direct

### 2026-02-24
- Bio formateur mise à jour : developpeur full stack, ex Le Wagon #0001
- Stack en accent color : Next.js, TypeScript, Supabase, GCP, Claude Code, Cursor, NeonBase, OpenClaw
- Person schema mis à jour sur les 4 pages formation
- Blog section créée : hub /blog + 5 articles SEO longue traîne
  - claude-code-vs-cursor : comparatif outils coding IA (~1800 mots)
  - guide-geo-2026 : guide complet GEO (~1800 mots)
  - agents-ia-entreprise : cas d'usage agents IA (~1800 mots)
  - formation-ia-debutant : guide débutant IA (~1800 mots)
  - n8n-vs-make-vs-zapier : comparatif automatisation (~1800 mots)
- Schema.org : BlogPosting + BreadcrumbList sur chaque article, CollectionPage sur hub
- Résumé LLM-friendly (> cat article.txt) sur chaque page
- Cross-links entre articles et vers formations + FinalCTA
- Navbar : ajout lien ./blog (desktop + mobile)
- Footer : nouvelle colonne Articles (5 liens), grille passée à 5 colonnes
- Sitemap : 6 nouvelles URLs (14 total)

### 2026-02-09
- Person schema + AggregateRating sur toutes les pages formation (geo, agents-ai, automations)
- AgentFacts NANDA protocol (/.well-known/agent-facts)
- Citations industrie (Princeton, Gartner, McKinsey) dans résumés LLM
- Titres formations préfixés "La meilleure" + suffix "| Growth Acceleration"
- Audit GA4 complet + corrections :
  - generate_lead + form_start sur /ressources
  - faq_click sur FAQ accordion
  - scroll_depth (25/50/75/100%)
  - page_type + formation_name sur tous les cta_click
- generate_lead marqué comme événement clé dans GA4

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
- [x] Click tracking GA4 complet (6 événements, page context)
- [x] generate_lead conversion dans GA4
- [x] Blog avec 7 articles SEO longue traîne
- [x] Mettre à jour llms.txt avec les URLs du blog
- [x] Leads poussés automatiquement dans Mautic (+ backfill historique)
- [x] Section /fiches alimentée par le bot Telegram
- [x] Publication LinkedIn automatisée (Postiz) + réponses aux commentaires

### Bloquants / actions Fred
- [ ] **Clé Resend révoquée** → recréer sur resend.com et poser `RESEND_API_KEY` sur Vercel (sinon : plus de notification chatbot ni d'envoi du questionnaire Dust)
- [ ] **SMTP Mautic à choisir** (Brevo / Resend / Gmail) — rien ne peut partir de la base tant que ce n'est pas fait
- [ ] Trancher la mention « financement OPCO possible » (GA n'est pas Qualiopi)

### À faire
- [ ] Ajuster les crons du VPS au passage à l'heure d'hiver (fin octobre : `0 6` → `0 7`)
- [ ] Soumettre les nouvelles URLs dans Google Search Console (fiches + 2 nouveaux articles)
- [ ] Publier sur la page entreprise LinkedIn (canal connecté, jamais utilisé)
- [ ] Monitorer citations LLM (Perplexity, ChatGPT)
- [ ] Ajouter plus de témoignages quand disponibles
