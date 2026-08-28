// Visuels SVG inline de l article "Etre cite par ChatGPT".
// Palette du site : charcoal #1E1E1E / #2D2A2E, terracotta #E07A5F,
// cream #F4F1DE, gris #A9A9A9, vert #98C379, jaune #E5C07B, rouge #E06C75.

const MONO = "ui-monospace, 'JetBrains Mono', Menlo, monospace";

function Frame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <figure className="my-8">
      <div className="bg-[#2D2A2E]/50 border border-dashed border-[#FAFAFA]/15 rounded-lg p-4 overflow-x-auto">
        {children}
      </div>
      <figcaption className="text-[#A9A9A9] text-xs font-mono mt-2 text-center">
        {label}
      </figcaption>
    </figure>
  );
}

// --- Bandeau de chiffres cles ---
export function StatsStrip() {
  const stats: [string, string][] = [
    ["85%", "des mentions de marques dans les reponses IA viennent de sites tiers, pas du site de la marque"],
    ["3x", "plus de chances d etre cite si la page a ete mise a jour il y a moins de 3 mois"],
    ["22%", "des reponses IA citent Reddit comme source"],
    ["75%", "des recherches Google afficheront un resume IA d ici 2028 (McKinsey)"],
  ];
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
      {stats.map(([value, label]) => (
        <div
          key={value}
          className="bg-[#2D2A2E]/50 border border-[#FAFAFA]/10 rounded-lg p-5 text-center"
        >
          <p className="text-4xl font-mono font-bold text-[#E07A5F] mb-2">{value}</p>
          <p className="text-[#A9A9A9] text-sm leading-snug">{label}</p>
        </div>
      ))}
    </div>
  );
}

// --- 1. Hier etre classe / aujourd hui etre cite ---
export function DiagramAvantApres() {
  return (
    <Frame label="Le changement de regle : hier on visait la premiere position, aujourd hui on vise la citation dans la reponse">
      <svg
        viewBox="0 0 760 300"
        role="img"
        aria-label="Comparaison entre la recherche Google classique, une liste de liens ou il faut etre premier, et la recherche IA, une reponse redigee ou il faut etre la source citee"
        className="w-full h-auto min-w-[560px]"
      >
        {/* Panneau gauche : Google classique */}
        <text x={20} y={26} fill="#A9A9A9" fontSize={14} fontFamily={MONO}>
          HIER : ETRE CLASSE
        </text>
        <rect x={20} y={40} width={340} height={240} rx={10} fill="#2D2A2E" stroke="#A9A9A9" strokeOpacity={0.4} />
        <rect x={40} y={60} width={220} height={22} rx={11} fill="#1E1E1E" />
        <text x={52} y={76} fill="#A9A9A9" fontSize={12} fontFamily={MONO}>
          meilleur logiciel de paie
        </text>
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect
              x={40}
              y={100 + i * 42}
              width={300}
              height={32}
              rx={6}
              fill={i === 0 ? "#E07A5F" : "#1E1E1E"}
              fillOpacity={i === 0 ? 0.25 : 1}
              stroke={i === 0 ? "#E07A5F" : "#A9A9A9"}
              strokeOpacity={i === 0 ? 1 : 0.25}
            />
            <text x={56} y={121 + i * 42} fill={i === 0 ? "#E07A5F" : "#A9A9A9"} fontSize={13} fontFamily={MONO}>
              {i === 0 ? "1. votre-site.fr  ← l objectif" : `${i + 1}. lien bleu concurrent`}
            </text>
          </g>
        ))}

        {/* Panneau droit : reponse IA */}
        <text x={400} y={26} fill="#E07A5F" fontSize={14} fontFamily={MONO} fontWeight={700}>
          AUJOURD HUI : ETRE CITE
        </text>
        <rect x={400} y={40} width={340} height={240} rx={10} fill="#2D2A2E" stroke="#E07A5F" strokeOpacity={0.6} />
        <text x={420} y={70} fill="#F4F1DE" fontSize={13} fontFamily={MONO}>
          ChatGPT : &quot;Pour une PME francaise,
        </text>
        <text x={420} y={90} fill="#F4F1DE" fontSize={13} fontFamily={MONO}>
          les meilleures options sont... [1][2]
        </text>
        <rect x={420} y={104} width={300} height={8} rx={4} fill="#A9A9A9" fillOpacity={0.35} />
        <rect x={420} y={120} width={260} height={8} rx={4} fill="#A9A9A9" fillOpacity={0.35} />
        <rect x={420} y={136} width={280} height={8} rx={4} fill="#A9A9A9" fillOpacity={0.35} />
        <text x={420} y={176} fill="#A9A9A9" fontSize={12} fontFamily={MONO}>
          Sources :
        </text>
        <rect x={420} y={188} width={300} height={30} rx={6} fill="#E07A5F" fillOpacity={0.25} stroke="#E07A5F" />
        <text x={434} y={208} fill="#E07A5F" fontSize={13} fontFamily={MONO} fontWeight={700}>
          [1] votre-site.fr  ← le nouvel objectif
        </text>
        <rect x={420} y={226} width={300} height={30} rx={6} fill="#1E1E1E" stroke="#A9A9A9" strokeOpacity={0.25} />
        <text x={434} y={246} fill="#A9A9A9" fontSize={13} fontFamily={MONO}>
          [2] comparatif-tiers.com
        </text>
      </svg>
    </Frame>
  );
}

// --- 2. Anatomie d une page citable ---
export function DiagramPageCitable() {
  return (
    <Frame label="L anatomie d une page que les IA aiment citer, avec le gain mesure par element (etude AirOps, 12 000 pages)">
      <svg
        viewBox="0 0 760 360"
        role="img"
        aria-label="Schema d une page web structuree : titre principal, sous-titres hierarchises, tableau, donnees chiffrees et section FAQ, chaque element annote avec son gain de citations mesure"
        className="w-full h-auto min-w-[560px]"
      >
        {/* Page */}
        <rect x={20} y={10} width={400} height={340} rx={10} fill="#2D2A2E" stroke="#A9A9A9" strokeOpacity={0.4} />

        {/* H1 */}
        <rect x={44} y={34} width={280} height={24} rx={4} fill="#F4F1DE" fillOpacity={0.85} />
        <line x1={444} y1={46} x2={470} y2={46} stroke="#E07A5F" />
        <text x={478} y={42} fill="#F4F1DE" fontSize={14} fontFamily={MONO} fontWeight={700}>
          Hierarchie H1 → H2 → H3
        </text>
        <text x={478} y={60} fill="#E07A5F" fontSize={14} fontFamily={MONO} fontWeight={700}>
          2,8x plus de citations
        </text>

        {/* H2 + paragraphes */}
        <rect x={44} y={76} width={180} height={16} rx={4} fill="#F4F1DE" fillOpacity={0.55} />
        <rect x={44} y={100} width={352} height={8} rx={4} fill="#A9A9A9" fillOpacity={0.35} />
        <rect x={44} y={114} width={320} height={8} rx={4} fill="#A9A9A9" fillOpacity={0.35} />

        {/* Tableau */}
        <rect x={44} y={138} width={352} height={70} rx={6} fill="#1E1E1E" stroke="#98C379" strokeOpacity={0.7} />
        <line x1={44} y1={161} x2={396} y2={161} stroke="#98C379" strokeOpacity={0.4} />
        <line x1={44} y1={184} x2={396} y2={184} stroke="#98C379" strokeOpacity={0.4} />
        <line x1={161} y1={138} x2={161} y2={208} stroke="#98C379" strokeOpacity={0.4} />
        <line x1={278} y1={138} x2={278} y2={208} stroke="#98C379" strokeOpacity={0.4} />
        <line x1={444} y1={172} x2={470} y2={172} stroke="#98C379" />
        <text x={478} y={168} fill="#F4F1DE" fontSize={14} fontFamily={MONO} fontWeight={700}>
          Listes et tableaux
        </text>
        <text x={478} y={186} fill="#98C379" fontSize={14} fontFamily={MONO} fontWeight={700}>
          80% des citations ChatGPT
        </text>
        <text x={478} y={202} fill="#A9A9A9" fontSize={12} fontFamily={MONO}>
          (contre 29% sur Google)
        </text>

        {/* Donnee chiffree */}
        <rect x={44} y={222} width={352} height={30} rx={6} fill="#E5C07B" fillOpacity={0.15} stroke="#E5C07B" strokeOpacity={0.7} />
        <text x={58} y={242} fill="#E5C07B" fontSize={13} fontFamily={MONO}>
          &quot;+40% en 6 mois&quot; ← donnee inedite
        </text>
        <line x1={444} y1={237} x2={470} y2={237} stroke="#E5C07B" />
        <text x={478} y={233} fill="#F4F1DE" fontSize={14} fontFamily={MONO} fontWeight={700}>
          Vos propres chiffres
        </text>
        <text x={478} y={251} fill="#E5C07B" fontSize={13} fontFamily={MONO}>
          la matiere que personne
        </text>
        <text x={478} y={267} fill="#E5C07B" fontSize={13} fontFamily={MONO}>
          ne peut copier
        </text>

        {/* FAQ */}
        <rect x={44} y={266} width={352} height={64} rx={6} fill="#E07A5F" fillOpacity={0.12} stroke="#E07A5F" strokeOpacity={0.7} />
        <text x={58} y={288} fill="#E07A5F" fontSize={13} fontFamily={MONO} fontWeight={700}>
          FAQ
        </text>
        <rect x={58} y={298} width={280} height={7} rx={3} fill="#A9A9A9" fillOpacity={0.4} />
        <rect x={58} y={311} width={240} height={7} rx={3} fill="#A9A9A9" fillOpacity={0.4} />
        <line x1={444} y1={298} x2={470} y2={298} stroke="#E07A5F" />
        <text x={478} y={294} fill="#F4F1DE" fontSize={14} fontFamily={MONO} fontWeight={700}>
          Section FAQ
        </text>
        <text x={478} y={312} fill="#E07A5F" fontSize={14} fontFamily={MONO} fontWeight={700}>
          +40% de citations
        </text>
      </svg>
    </Frame>
  );
}

// --- 3. La fraicheur ---
export function DiagramFraicheur() {
  const bars: [string, number, string, string][] = [
    ["Mise a jour < 3 mois", 300, "3x plus de chances d etre citee", "#98C379"],
    ["Mise a jour < 1 an", 180, "70% des pages citees sont dans ce cas", "#E5C07B"],
    ["Jamais mise a jour", 60, "3x plus de chances de DISPARAITRE", "#E06C75"],
  ];
  return (
    <Frame label="La fraicheur est un signal de confiance : les IA citent ce qui est recent et entretenu (source : 2026 State of AI Search)">
      <svg
        viewBox="0 0 760 210"
        role="img"
        aria-label="Graphique en barres : une page mise a jour il y a moins de 3 mois a 3 fois plus de chances d etre citee, 70% des pages citees ont ete mises a jour dans l annee, une page jamais mise a jour a 3 fois plus de chances de disparaitre des reponses"
        className="w-full h-auto min-w-[560px]"
      >
        {bars.map(([label, width, note, color], i) => {
          const y = 16 + i * 64;
          return (
            <g key={label}>
              <text x={20} y={y + 12} fill="#F4F1DE" fontSize={14} fontFamily={MONO}>
                {label}
              </text>
              <rect x={20} y={y + 20} width={width} height={18} rx={9} fill={color} fillOpacity={0.85} />
              <text x={20 + width + 14} y={y + 34} fill={color} fontSize={13} fontFamily={MONO} fontWeight={700}>
                {note}
              </text>
            </g>
          );
        })}
      </svg>
    </Frame>
  );
}

// --- 4. D ou viennent les citations ---
export function DiagramSourcesCitations() {
  return (
    <Frame label="Ou les IA trouvent les marques : massivement ailleurs que sur leur propre site (etude AirOps, 21 000 marques)">
      <svg
        viewBox="0 0 760 250"
        role="img"
        aria-label="Repartition des mentions de marques dans les reponses IA : 85 pour cent viennent de sites tiers comme les comparatifs, Reddit ou YouTube, et seulement 15 pour cent du site de la marque"
        className="w-full h-auto min-w-[560px]"
      >
        {/* Barre principale */}
        <rect x={20} y={30} width={612} height={44} rx={8} fill="#E07A5F" fillOpacity={0.8} />
        <rect x={636} y={30} width={104} height={44} rx={8} fill="#2D2A2E" stroke="#A9A9A9" strokeOpacity={0.5} />
        <text x={326} y={57} textAnchor="middle" fill="#1E1E1E" fontSize={16} fontFamily={MONO} fontWeight={700}>
          85% — sites tiers
        </text>
        <text x={688} y={51} textAnchor="middle" fill="#A9A9A9" fontSize={12} fontFamily={MONO}>
          15%
        </text>
        <text x={688} y={66} textAnchor="middle" fill="#A9A9A9" fontSize={11} fontFamily={MONO}>
          votre site
        </text>

        {/* Detail des tiers */}
        <text x={20} y={112} fill="#A9A9A9" fontSize={13} fontFamily={MONO}>
          Dans ces sources tierces :
        </text>
        {(
          [
            ["Comparatifs, classements, sites d avis", "~90% des citations tierces", 420],
            ["Reddit", "~22% de toutes les reponses IA", 160],
            ["Reddit + LinkedIn + YouTube", "48% des citations", 300],
          ] as [string, string, number][]
        ).map(([label, note, width], i) => {
          const y = 128 + i * 38;
          return (
            <g key={label}>
              <rect x={20} y={y} width={width} height={16} rx={8} fill="#E07A5F" fillOpacity={0.35 + i * 0.1} />
              <text x={20} y={y - 4} fill="#F4F1DE" fontSize={13} fontFamily={MONO}>
                {label} <tspan fill="#E07A5F" fontWeight={700}>— {note}</tspan>
              </text>
            </g>
          );
        })}
      </svg>
    </Frame>
  );
}

// --- 5. La boucle qui se renforce ---
export function DiagramBoucle() {
  const nodes: [number, number, string, string][] = [
    [380, 40, "CREER", "du contenu avec vos donnees inedites"],
    [640, 125, "RAFRAICHIR", "tous les 60-90 jours"],
    [380, 210, "ETRE MENTIONNE", "comparatifs, avis, Reddit, YouTube"],
    [120, 125, "ECOUTER", "les conversations → nouvelles idees"],
  ];
  return (
    <Frame label="La boucle complete : chaque tour renforce le suivant — c est un systeme, pas une campagne">
      <svg
        viewBox="0 0 760 260"
        role="img"
        aria-label="Boucle en quatre temps : creer du contenu original, le rafraichir regulierement, recolter des mentions externes, ecouter les conversations pour trouver les prochaines idees, et recommencer"
        className="w-full h-auto min-w-[560px]"
      >
        <ellipse cx={380} cy={128} rx={255} ry={82} fill="none" stroke="#E07A5F" strokeOpacity={0.4} strokeDasharray="7 6" />
        {/* Fleches de sens */}
        <text x={520} y={62} fill="#E07A5F" fontSize={18} fontFamily={MONO}>↘</text>
        <text x={520} y={205} fill="#E07A5F" fontSize={18} fontFamily={MONO}>↙</text>
        <text x={225} y={205} fill="#E07A5F" fontSize={18} fontFamily={MONO}>↖</text>
        <text x={225} y={62} fill="#E07A5F" fontSize={18} fontFamily={MONO}>↗</text>

        {nodes.map(([cx, cy, title, desc]) => (
          <g key={title}>
            <rect
              x={cx - 105}
              y={cy - 26}
              width={210}
              height={52}
              rx={8}
              fill="#2D2A2E"
              stroke="#E07A5F"
              strokeOpacity={0.7}
            />
            <text x={cx} y={cy - 5} textAnchor="middle" fill="#E07A5F" fontSize={14} fontFamily={MONO} fontWeight={700}>
              {title}
            </text>
            <text x={cx} y={cy + 15} textAnchor="middle" fill="#A9A9A9" fontSize={10.5} fontFamily={MONO}>
              {desc}
            </text>
          </g>
        ))}
      </svg>
    </Frame>
  );
}
