/** Datos localizados del portafolio (es/en/fr). El perfil duro vive en src/data/profile.ts */

export const aboutData = {
  es: `Ingeniero Full-stack especializado en infraestructura de pagos cripto e integraciones blockchain. Construyo sistemas seguros que unen Web3 con las finanzas tradicionales, desde listeners de webhooks para APIs de exchange (Binance Pay, Coinbase) hasta arquitecturas de conciliación fiat/crypto.

Con una base sólida en plataformas SaaS, sistemas de alta disponibilidad e infraestructura distribuida, llevo ingeniería de producción a los proyectos Web3. Terminando mi carrera de Ingeniería en Sistemas mientras construyo activamente soluciones de pago cripto.

Basado en Panamá (UTC-5), con solapamiento horario óptimo para equipos de EE. UU. y Europa.`,
  en: `Full-Stack Engineer specializing in crypto payment infrastructure and blockchain integrations. I build secure systems that bridge Web3 and traditional finance, from webhook listeners for exchange APIs (Binance Pay, Coinbase) to fiat/crypto reconciliation architectures.

With a strong foundation in SaaS platforms, high-availability systems, and distributed infrastructure, I bring production-grade engineering to Web3 projects. Currently finishing my Computer Systems Engineering degree while actively building crypto payment solutions.

Based in Panama (UTC-5) with optimal timezone overlap for US/EU teams.`,
  fr: `Ingénieur Full-stack spécialisé dans l'infrastructure de paiement crypto et les intégrations blockchain. Je construis des systèmes sécurisés qui relient Web3 et la finance traditionnelle, des listeners de webhooks pour API d'exchanges (Binance Pay, Coinbase) jusqu'aux architectures de réconciliation fiat/crypto.

Avec une solide base en plateformes SaaS, systèmes haute disponibilité et infrastructure distribuée, j'apporte de l'ingénierie de production aux projets Web3. Je termine mon diplôme en génie informatique tout en construisant activement des solutions de paiement crypto.

Basé au Panama (UTC-5), avec un chevauchement horaire optimal pour les équipes US/EU.`,
}

/* ── Tech stack reorganizado: Web3 primero (el orden de claves es el de render) ── */

const web3Items = [
  'Ethers.js',
  'Viem',
  'Web3.js',
  'MetaMask',
  'WalletConnect',
  'RainbowKit',
  'Binance Pay API',
  'Coinbase Commerce',
  'Firma RSA-SHA256 / HMAC',
  'Idempotencia',
  'The Graph',
  'IPFS',
]
const backendItems = [
  'Node.js',
  'Bun',
  'Hono',
  'FastAPI',
  'Express',
  'PostgreSQL',
  'Prisma',
  'Drizzle ORM',
  'REST APIs',
  'Webhooks',
  'GraphQL',
  'Redis',
]
const frontendItems = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Svelte',
  'Astro',
  'wagmi',
  'RainbowKit',
  'WebSocket / SSE',
]
const infraItems = [
  'Docker',
  'Proxmox',
  'Hetzner',
  'NixOS',
  'Cloudflare Workers',
  'Cloudflare Pages',
  'R2 / D1',
  'GitHub Actions',
  'Linux (NixOS, Arch, Fedora)',
]
const langsItems = ['TypeScript / JavaScript', 'Rust', 'Go', 'Python', 'C#', 'C++']
const humanLangs = {
  es: ['Inglés (Intermedio)', 'Francés (Aprendiendo)'],
  en: ['English (Intermediate)', 'French (Learning)'],
  fr: ['Anglais (Intermédiaire)', 'Français (En apprentissage)'],
}

export const skillsData = {
  es: {
    'Blockchain y Web3': { icon: 'lucide:link-2', items: web3Items },
    'Backend y APIs': { icon: 'lucide:server', items: backendItems },
    Frontend: { icon: 'lucide:monitor-smartphone', items: frontendItems },
    'Infraestructura y DevOps': { icon: 'lucide:cloud', items: infraItems },
    'Lenguajes': { icon: 'lucide:code-2', items: langsItems },
    'Idiomas': { icon: 'lucide:languages', items: humanLangs.es },
  },
  en: {
    'Blockchain & Web3': { icon: 'lucide:link-2', items: web3Items },
    'Backend & APIs': { icon: 'lucide:server', items: backendItems },
    Frontend: { icon: 'lucide:monitor-smartphone', items: frontendItems },
    'Infrastructure & DevOps': { icon: 'lucide:cloud', items: infraItems },
    'Languages': { icon: 'lucide:code-2', items: langsItems },
    'Spoken': { icon: 'lucide:languages', items: humanLangs.en },
  },
  fr: {
    'Blockchain et Web3': { icon: 'lucide:link-2', items: web3Items },
    'Backend et APIs': { icon: 'lucide:server', items: backendItems },
    Frontend: { icon: 'lucide:monitor-smartphone', items: frontendItems },
    'Infrastructure et DevOps': { icon: 'lucide:cloud', items: infraItems },
    'Langages': { icon: 'lucide:code-2', items: langsItems },
    'Langues parlées': { icon: 'lucide:languages', items: humanLangs.fr },
  },
}

/* ── Proyectos Web3 (destacados, antes de Foundation Projects) ──────────────
   Honestidad ante todo: `status` controla qué se muestra.
   'live' = existe y funciona · 'building' = en desarrollo activo, repo privado
   que se publicará · 'soon' = planificado. Sin botones falsos: los enlaces a
   repo/demo solo aparecen si existen (ver profile.web3Repos). */

export type Web3Status = 'live' | 'building' | 'soon'

export const web3ProjectsData = {
  es: [
    {
      title: 'Binance Pay Webhook Listener',
      status: 'building' as Web3Status,
      featured: true,
      icon: 'lucide:radio-tower',
      description:
        'Sistema de procesamiento de pagos para transacciones cripto con validación de webhooks en tiempo real y conciliación fiat/crypto.',
      features: [
        'Endpoint con validación de firma RSA-SHA256 (Binance Pay) y HMAC-SHA256 (genérico)',
        'Ledger idempotente: reintentos del proveedor nunca reprocesan un pago',
        'Servidor ligero (Hono) desplegable en edge + ventana de reloj anti-replay',
        'Comparaciones en tiempo constante para evitar fugas por timing',
        'Conciliación fiat/crypto y actualización automática de estado',
      ],
      technologies: ['TypeScript', 'Hono', 'SQLite/PostgreSQL', 'RSA-SHA256', 'HMAC-SHA256'],
    },
    {
      title: 'Crypto Transaction Analytics Dashboard',
      status: 'soon' as Web3Status,
      featured: false,
      icon: 'lucide:line-chart',
      description:
        'Monitoreo y analítica en tiempo real de pagos cripto con soporte multi-cadena.',
      features: [
        'Conexión de wallet vía MetaMask / wagmi / RainbowKit',
        'Feed de transacciones en vivo (SSE/WebSocket)',
        'Analítica histórica y exportación a CSV',
        'Soporte multi-cadena (Ethereum, BSC, Polygon, Solana)',
        'Seguimiento de balances y cálculo de PnL en tiempo real',
      ],
      technologies: ['Next.js', 'wagmi', 'Viem', 'Tailwind CSS', 'PostgreSQL'],
    },
    {
      title: 'Self-Hosted Web3 Infrastructure Stack',
      status: 'live' as Web3Status,
      featured: false,
      icon: 'lucide:shield-check',
      description:
        'Infraestructura de producción para aplicaciones Web3 con foco en seguridad y soberanía: configuración declarativa de dos máquinas y servicios edge.',
      features: [
        'NixOS con flakes: flota de 2 hosts declarada 100% en git',
        'Cloudflare Workers/Pages/R2/D1 para cómputo y storage en el edge',
        'Vaultwarden autoalojado para gestión de contraseñas',
        'Despliegues automáticos con GitHub Actions (CI de Rust + Astro)',
        'Configuraciones Linux endurecidas y respaldo de secretos fuera de repo',
      ],
      technologies: ['NixOS', 'Docker', 'Cloudflare', 'GitHub Actions', 'Linux'],
    },
  ],
  en: [
    {
      title: 'Binance Pay Webhook Listener',
      status: 'building' as Web3Status,
      featured: true,
      icon: 'lucide:radio-tower',
      description:
        'Secure payment processing system for crypto transactions with real-time webhook validation and fiat/crypto reconciliation.',
      features: [
        'Signature validation with RSA-SHA256 (Binance Pay) and HMAC-SHA256 (generic)',
        'Idempotent ledger: provider retries never re-process a payment',
        'Lightweight Hono server for the edge + clock-skew window against replay',
        'Constant-time comparisons to avoid timing leaks',
        'Fiat/crypto reconciliation and automated payment status updates',
      ],
      technologies: ['TypeScript', 'Hono', 'SQLite/PostgreSQL', 'RSA-SHA256', 'HMAC-SHA256'],
    },
    {
      title: 'Crypto Transaction Analytics Dashboard',
      status: 'soon' as Web3Status,
      featured: false,
      icon: 'lucide:line-chart',
      description:
        'Real-time monitoring and analytics for crypto payments with multi-chain support.',
      features: [
        'Wallet connection via MetaMask / wagmi / RainbowKit',
        'Live transaction feed (SSE/WebSocket)',
        'Historical analytics and CSV export',
        'Multi-chain support (Ethereum, BSC, Polygon, Solana)',
        'Real-time balance tracking and PnL calculations',
      ],
      technologies: ['Next.js', 'wagmi', 'Viem', 'Tailwind CSS', 'PostgreSQL'],
    },
    {
      title: 'Self-Hosted Web3 Infrastructure Stack',
      status: 'live' as Web3Status,
      featured: false,
      icon: 'lucide:shield-check',
      description:
        'Production-ready infrastructure for Web3 applications with a focus on security and sovereignty: declarative config for two machines plus edge services.',
      features: [
        'NixOS with flakes: a 2-host fleet declared 100% in git',
        'Cloudflare Workers/Pages/R2/D1 for edge compute and storage',
        'Vaultwarden self-hosted password management',
        'Automated deployments with GitHub Actions (Rust + Astro CI)',
        'Hardened Linux configs and secrets kept outside every repo',
      ],
      technologies: ['NixOS', 'Docker', 'Cloudflare', 'GitHub Actions', 'Linux'],
    },
  ],
  fr: [
    {
      title: 'Binance Pay Webhook Listener',
      status: 'building' as Web3Status,
      featured: true,
      icon: 'lucide:radio-tower',
      description:
        "Système sécurisé de traitement des paiements pour transactions crypto avec validation de webhooks en temps réel et réconciliation fiat/crypto.",
      features: [
        'Validation de signature RSA-SHA256 (Binance Pay) et HMAC-SHA256 (générique)',
        'Ledger idempotent : les relances du fournisseur ne retraitent jamais un paiement',
        'Serveur léger Hono déployable en edge + fenêtre d’horloge anti-rejeu',
        'Comparaisons en temps constant pour éviter les fuites de timing',
        'Réconciliation fiat/crypto et mise à jour automatique du statut de paiement',
      ],
      technologies: ['TypeScript', 'Hono', 'SQLite/PostgreSQL', 'RSA-SHA256', 'HMAC-SHA256'],
    },
    {
      title: 'Crypto Transaction Analytics Dashboard',
      status: 'soon' as Web3Status,
      featured: false,
      icon: 'lucide:line-chart',
      description:
        'Supervision et analytique en temps réel des paiements crypto avec support multi-chaînes.',
      features: [
        'Connexion de wallet via MetaMask / wagmi / RainbowKit',
        'Flux de transactions en direct (SSE/WebSocket)',
        'Analytique historique et export CSV',
        'Support multi-chaînes (Ethereum, BSC, Polygon, Solana)',
        'Suivi des soldes et calcul de PnL en temps réel',
      ],
      technologies: ['Next.js', 'wagmi', 'Viem', 'Tailwind CSS', 'PostgreSQL'],
    },
    {
      title: 'Self-Hosted Web3 Infrastructure Stack',
      status: 'live' as Web3Status,
      featured: false,
      icon: 'lucide:shield-check',
      description:
        "Infrastructure de production pour applications Web3 axée sur la sécurité et la souveraineté : configuration déclarative de deux machines et services edge.",
      features: [
        'NixOS avec flakes : une flotte de 2 hôtes déclarée à 100% en git',
        'Cloudflare Workers/Pages/R2/D1 pour le calcul et le stockage en edge',
        'Gestion de mots de passe Vaultwarden auto-hébergée',
        'Déploiement automatisé avec GitHub Actions (CI Rust + Astro)',
        'Configurations Linux durcies et secrets hors de tout dépôt',
      ],
      technologies: ['NixOS', 'Docker', 'Cloudflare', 'GitHub Actions', 'Linux'],
    },
  ],
}

/* ── Servicios Web3 ("What I Build") ──────────────────────────────────────── */

export const servicesData = {
  es: [
    {
      title: 'Integración de Pagos Cripto',
      icon: 'lucide:bitcoin',
      items: [
        'Integración de Binance Pay, Coinbase Commerce y soluciones de wallet a medida',
        'Listeners de webhooks seguros con validación de firma',
        'Sistemas de conciliación fiat/crypto',
      ],
    },
    {
      title: 'Frontend de Smart Contracts',
      icon: 'lucide:blocks',
      items: [
        'dApps React/Next.js con conexión de wallets',
        'Monitoreo de eventos blockchain en tiempo real',
        'Historial de transacciones y analítica',
      ],
    },
    {
      title: 'Infraestructura Web3',
      icon: 'lucide:server-cog',
      items: [
        'Nodos y validadores autoalojados',
        'Cloudflare Workers para procesamiento en el edge',
        'Despliegues Docker sobre Hetzner/Proxmox',
      ],
    },
    {
      title: 'APIs Blockchain',
      icon: 'lucide:network',
      items: [
        'Endpoints RPC e indexadores a medida',
        'Desarrollo de subgraphs con The Graph',
        'Agregación de datos multi-cadena',
      ],
    },
  ],
  en: [
    {
      title: 'Crypto Payment Integration',
      icon: 'lucide:bitcoin',
      items: [
        'Integrate Binance Pay, Coinbase Commerce, and custom wallet solutions',
        'Secure webhook listeners with signature validation',
        'Fiat/crypto reconciliation systems',
      ],
    },
    {
      title: 'Smart Contract Frontends',
      icon: 'lucide:blocks',
      items: [
        'React/Next.js dApps with wallet connections',
        'Real-time blockchain event monitoring',
        'Transaction history and analytics',
      ],
    },
    {
      title: 'Web3 Infrastructure',
      icon: 'lucide:server-cog',
      items: [
        'Self-hosted nodes and validators',
        'Cloudflare Workers for edge processing',
        'Docker deployments on Hetzner/Proxmox',
      ],
    },
    {
      title: 'Blockchain APIs',
      icon: 'lucide:network',
      items: [
        'Custom RPC endpoints and indexers',
        'The Graph subgraph development',
        'Multi-chain data aggregation',
      ],
    },
  ],
  fr: [
    {
      title: 'Intégration de Paiements Crypto',
      icon: 'lucide:bitcoin',
      items: [
        'Intégration Binance Pay, Coinbase Commerce et solutions wallet sur mesure',
        'Listeners de webhooks sécurisés avec validation de signature',
        'Systèmes de réconciliation fiat/crypto',
      ],
    },
    {
      title: 'Frontends de Smart Contracts',
      icon: 'lucide:blocks',
      items: [
        'dApps React/Next.js avec connexion de wallets',
        'Supervision d’événements blockchain en temps réel',
        'Historique des transactions et analytique',
      ],
    },
    {
      title: 'Infrastructure Web3',
      icon: 'lucide:server-cog',
      items: [
        'Nœuds et validateurs auto-hébergés',
        'Cloudflare Workers pour le traitement en edge',
        'Déploiements Docker sur Hetzner/Proxmox',
      ],
    },
    {
      title: 'APIs Blockchain',
      icon: 'lucide:network',
      items: [
        'Endpoints RPC et indexeurs sur mesure',
        'Développement de subgraphs avec The Graph',
        'Agrégation de données multi-chaînes',
      ],
    },
  ],
}

export const experienceData = {
  es: [
    {
      company: 'Freelance / Proyectos Personales',
      role: 'Desarrollador Full-stack',
      period: '2022 - Actualidad',
      description:
        'Desarrollo de aplicaciones web y móviles personalizadas para diversos clientes, utilizando tecnologías modernas como React, Next.js y Node.js.',
    },
    {
      company: 'Universidad Tecnológica de Panamá',
      role: 'Asistente de Investigación / Estudiante',
      period: '2026 - Actualidad',
      description:
        'Participación en proyectos académicos complejos y colaboración en el desarrollo de herramientas internas para la facultad.',
    },
  ],
  en: [
    {
      company: 'Freelance / Personal Projects',
      role: 'Full-stack Developer',
      period: '2022 - Present',
      description:
        'Development of custom web and mobile applications for various clients, using modern technologies such as React, Next.js, and Node.js.',
    },
    {
      company: 'Technological University of Panama',
      role: 'Research Assistant / Student',
      period: '2026 - Present',
      description:
        'Participation in complex academic projects and collaboration in the development of internal tools for the faculty.',
    },
  ],
  fr: [
    {
      company: 'Freelance / Projets Personnels',
      role: 'Développeur Full-stack',
      period: '2022 - Présent',
      description:
        "Développement d'applications web et mobiles personnalisées pour divers clients, utilisant des technologies modernes telles que React, Next.js et Node.js.",
    },
    {
      company: 'Université Technologique du Panama',
      role: 'Assistant de Recherche / Étudiant',
      period: '2026 - Present',
      description:
        "Participation à des projets académiques complexes et collaboration au développement d'outils internes pour la faculté.",
    },
  ],
}
