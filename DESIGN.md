# Design System — Growth Acceleration

> Source de vérité du design du site growth-acceleration.fr. À lire avant toute création de page ou de composant.
> Les décisions produit et l'architecture sont dans [CLAUDE.md](./CLAUDE.md).

## Direction artistique

**Terminal / CLI assumé.** Le site s'adresse à des dirigeants et des marketeurs qui apprennent l'IA : l'esthétique doit dire « praticien qui construit », pas « agence qui vend ». Fond charcoal, accent terracotta, typo monospace sur les titres, préfixes shell (`>`, `$`, `./`), bordures en tirets.

Ce que la charte refuse : le dégradé violet SaaS générique, les cartes blanches sur fond blanc, les illustrations stock, le mode clair.

---

## Tokens

### Couleurs

| Rôle | Valeur | Usage |
|------|--------|-------|
| Charcoal | `#1E1E1E` | Fond principal (`body`) |
| Charcoal clair | `#2D2A2E` | Cartes, surfaces surélevées, bandeaux |
| Terracotta | `#E07A5F` | **Accent unique** : CTA, liens, préfixes, badges, chiffres clés |
| Cream | `#F4F1DE` | Texte courant |
| Off-white | `#FAFAFA` | Titres |
| Gris | `#A9A9A9` | Texte secondaire, légendes |
| Vert succès | `#98C379` | Confirmations, gains, éléments validés |
| Jaune | `#E5C07B` | Attention, mise en valeur secondaire |
| Rouge erreur | `#E06C75` | Erreurs, pièges à éviter |

Déclarées dans `src/app/globals.css` (`:root`) **et** écrites en dur dans les classes Tailwind (`bg-[#2D2A2E]`, `text-[#E07A5F]`). Les deux coexistent : garder cette convention pour rester cohérent avec l'existant.

**Règle d'or : un seul accent.** Terracotta partout. Une tentative d'accent bleu sur la fiche IA Creative (15/09) a été annulée le jour même — les couleurs vert/jaune/rouge sont sémantiques, jamais décoratives.

### Opacités récurrentes

- Texte courant sur fond sombre : `text-[#F4F1DE]/90`
- Surfaces de carte : `bg-[#2D2A2E]/50`
- Bordures discrètes : `border-[#FAFAFA]/10`
- Bordures d'accent au survol : `border-[#E07A5F]/30` → `/50`

### Typographie

- **Titres (h1-h6)** : JetBrains Mono (`font-mono`), bold. Appliqué globalement via `globals.css`.
- **Corps** : Inter (`font-sans`), `leading-relaxed`.
- **Labels, badges, préfixes** : `font-mono` + `uppercase` + `text-xs`.
- Chargement via `next/font/google` (variables `--font-inter` / `--font-jetbrains`).

Échelle : `text-3xl md:text-4xl` (h1) · `text-2xl` (h2) · `text-xl` (h3) · `text-lg` (accroche) · `text-sm` (secondaire) · `text-xs` (labels).

### Espacement et formes

- Conteneurs : `max-w-4xl` (contenu éditorial), `max-w-7xl` (navbar), `max-w-3xl` (articles fiches)
- Padding horizontal : `px-4 sm:px-6 lg:px-8`
- Rayons : `rounded-lg` (cartes), `rounded` (boutons), `rounded-full` (pastilles)
- Bordures en tirets (`border-dashed`) pour les blocs « encadré », les séparateurs de section et les CTA secondaires — c'est une signature visuelle du site

---

## Composants et motifs

### Le préfixe terminal
Chaque bloc de contexte s'ouvre par une ligne de commande fictive en gris monospace :

```tsx
<p className="text-[#A9A9A9] text-sm font-mono mb-2">&gt; cat article.txt</p>
```

Variantes utilisées : `> cat fiche.txt`, `> ls formations/`, `$` devant les titres de page, `./nom-de-page` dans la navigation.

### Carte standard
```tsx
<div className="bg-[#2D2A2E]/50 border border-[#FAFAFA]/10 rounded-lg p-6 hover:border-[#E07A5F]/30 transition-colors">
```
Toujours un état de survol (bordure qui s'éclaire, titre qui passe en terracotta via `group-hover`). Transitions à 200 ms.

### Badge
```tsx
<span className="px-1.5 py-0.5 rounded bg-[#E07A5F] text-[9px] font-bold text-[#1E1E1E]">NEW</span>
```
Réservé à `NEW` (nouveauté) et `PROMO` (prix réduit).

### Bandeau « citation-ready » (obligatoire en haut de chaque page de contenu)
Fond `#2D2A2E`, bordure basse terracotta à 20 %, préfixe terminal, puis un paragraphe autonome qui résume la page en langage factuel. Il sert **à la fois** aux lecteurs pressés et aux moteurs IA — voir la section GEO de CLAUDE.md.

### Encadrés sémantiques (articles et fiches)
- Objectif / gain : bordure `#98C379`
- Pièges à éviter : bordure en tirets `#E06C75`
- Donnée ou citation mise en avant : fond `#E5C07B`/15 %

### Navigation
Barre fixe, fond `#1E1E1E`/90 % + `backdrop-blur-md`. Menu déroulant `./formations` (6 entrées avec tagline + badge) qui se ferme au clic extérieur et à Échap. Sur mobile : panneau plein écran scrollable (`max-h-[calc(100vh-4rem)] overflow-y-auto`), les formations puis les liens secondaires séparés par un filet en tirets.

### Animations
Motion (`motion/react`) : apparition au scroll `initial={{opacity: 0, y: 20}}` → `animate`. Smooth scroll en ease-in-out cubique (`SmoothScroll.tsx`). Rien de gratuit : l'animation sert la lecture, jamais la démonstration.

---

## Schémas SVG des articles

Les articles de fond embarquent leurs schémas en **SVG inline dans un `diagrams.tsx`** à côté de la page (modèle : `src/app/blog/etre-cite-par-chatgpt/diagrams.tsx`).

Pourquoi pas des images : poids nul, net sur tous les écrans, **et le texte reste lisible par les moteurs IA** — un schéma en PNG est invisible pour eux.

Conventions :
- Palette du site uniquement, police `ui-monospace` pour tout le lettrage
- Chaque figure dans un cadre `bg-[#2D2A2E]/50 border-dashed` + légende `figcaption` en gris
- `viewBox` + `className="w-full h-auto min-w-[...]"`, le cadre gère le `overflow-x-auto` → sur mobile le schéma défile horizontalement sans casser la page
- `role="img"` et `aria-label` décrivant le contenu du schéma (accessibilité + indexation)
- Vérifier le rendu en capture desktop **et** mobile avant de déployer

---

## Conventions éditoriales

Ces règles sont aussi contraignantes que les règles visuelles.

### Accents : deux régimes
- **Contenu GEO/marketing** (pages formations, articles, llms.txt) : **accents simplifiés volontairement** (`formation pratique a Paris`). C'est intentionnel pour la lecture par les LLM — ne jamais « corriger ».
- **Contenu humain** (chatbot, emails, messages Telegram, posts LinkedIn) : **français correct avec accents**.

### Titres et ton
- **Zéro jargon dans les titres** : le lectorat apprend l'IA. « Prospection inversée », pas « Walkthrough machine ». Tout terme technique s'explique en une phrase à sa première apparition.
- **Ton manuel, directif** : les méthodes s'écrivent en étapes numérotées à l'impératif (« Choisissez », « Filtrez », « Envoyez »), avec les outils nommés, des modèles à copier et une checklist finale.
- **Chiffres réels ou rien.** Aucun chiffre inventé, jamais — ni dans les pages, ni dans les fiches, ni dans les posts.

### Gabarit d'un article de blog
1. Résumé citation-ready (`> cat article.txt`) avec liens vers les formations concernées
2. Fil d'Ariane
3. En-tête : badge de catégorie, date, temps de lecture, h1, chapô
4. Corps : sections `h2` (+ `h3` pour les étapes), schémas SVG, listes, encadrés
5. « Pour aller plus loin » : 3 articles liés + 1 carte formation (bordure terracotta)
6. `<FinalCTA />`
7. Schémas JSON-LD : `BlogPosting` + `BreadcrumbList` (+ `HowTo` si c'est un manuel)

Puis : ajouter l'entrée en tête du hub `/blog`, dans `sitemap.ts` et dans `public/llms.txt`.

### Gabarit d'une fiche pratique
Généré par la machine (`src/lib/machine/fiche.ts`), structure fixe : objectif → prérequis → étapes → pièges → exemple concret → ce que vous y gagnez. JSON-LD `HowTo`.

---

## Checklist avant de livrer une page

- [ ] Bandeau citation-ready en haut, avec lien vers au moins une formation
- [ ] JSON-LD adapté au type de page
- [ ] Accent terracotta uniquement (vert/jaune/rouge = sémantique)
- [ ] États de survol sur tous les éléments cliquables, transitions 200 ms
- [ ] Zones tactiles ≥ 44 px sur mobile
- [ ] Testé à 375 px : aucun débordement horizontal
- [ ] Ajoutée au `sitemap.ts`, à `llms.txt` et à la navigation si pertinent
- [ ] `npm run build` passe
