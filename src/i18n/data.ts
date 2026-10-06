/** Datos localizados del portafolio (es/en/fr). El perfil duro vive en src/data/profile.ts */

export const aboutData = {
  es: `Ingeniero full-stack y de plataforma. Construyo el software que los negocios usan todos los días —la página que consigue clientes, el panel que lleva las reservas, la API que sostiene todo— y me hago cargo también de donde corre: NixOS declarado en git, Docker, Cloudflare, CI/CD, respaldos y monitoreo. Nada depende de una máquina ni de una memoria.

Ocho productos propios viven en producción: RS Cloud (hosting para estudiantes de ingeniería), un taller de impresión 3D con tienda y cola de trabajos, y sistemas de reservas y pagos para negocios de Panamá.

Basado en Panamá (UTC-5), con solapamiento horario cómodo para equipos de EE. UU. y Europa. Trabajo de punta a punta: base de datos, API, interfaz y despliegue.`,
  en: `Full-stack & platform engineer. I build the software businesses use every day — the site that wins customers, the panel that runs bookings, the API holding it all up — and I own where it runs too: NixOS declared in git, Docker, Cloudflare, CI/CD, backups and monitoring. Nothing depends on one machine or one person's memory.

Eight of my own products live in production: RS Cloud (hosting for engineering students), a 3D-printing shop with store and job queue, and booking/payments systems for Panamanian businesses.

Based in Panama (UTC-5) with comfortable timezone overlap for US/EU teams. I work end to end: database, API, UI and deployment.`,
  fr: `Ingénieur full-stack et plateforme. Je construis les logiciels que les entreprises utilisent chaque jour — le site qui attire les clients, le panneau qui gère les réservations, l’API qui tient le tout — et je maîtrise aussi là où ça tourne : NixOS déclaré dans git, Docker, Cloudflare, CI/CD, sauvegardes et supervision. Rien ne dépend d’une seule machine ni de la mémoire d’une personne.

Huit produits personnels sont en production : RS Cloud (hébergement pour étudiants en ingénierie), un atelier d’impression 3D avec boutique et file de travaux, et des systèmes de réservation et paiement pour des entreprises panaméennes.

Basé au Panama (UTC-5), avec un chevauchement horaire confortable pour les équipes US/EU. Je travaille de bout en bout : base de données, API, interface et déploiement.`,
}

/* ── Tech stack (el orden de claves es el de render) ── */

const infraItems = [
  'NixOS',
  'Docker',
  'Proxmox',
  'Cloudflare Workers',
  'Cloudflare Pages',
  'R2 / D1',
  'Hetzner',
  'GitHub Actions',
  'Caddy',
  'Linux',
]
const backendItems = [
  'Node.js',
  'Bun',
  'Hono',
  'FastAPI',
  'PostgreSQL',
  'SQLite / Cloudflare D1',
  'Drizzle ORM',
  'Redis',
  'REST / GraphQL',
  'Webhooks',
  'WebSocket / SSE',
]
const frontendItems = [
  'TypeScript',
  'React',
  'Next.js',
  'Astro',
  'Tailwind CSS',
  'Svelte',
  'HTML / CSS',
]
const langsItems = ['TypeScript / JavaScript', 'Python', 'Rust', 'Go']
const humanLangs = {
  es: ['Inglés (Intermedio)', 'Francés (Aprendiendo)'],
  en: ['English (Intermediate)', 'French (Learning)'],
  fr: ['Anglais (Intermédiaire)', 'Français (En apprentissage)'],
}

export const skillsData = {
  es: {
    'Infraestructura y DevOps': { icon: 'lucide:cloud', items: infraItems },
    'Backend y APIs': { icon: 'lucide:server', items: backendItems },
    Frontend: { icon: 'lucide:monitor-smartphone', items: frontendItems },
    'Lenguajes': { icon: 'lucide:code-2', items: langsItems },
    'Idiomas': { icon: 'lucide:languages', items: humanLangs.es },
  },
  en: {
    'Infrastructure & DevOps': { icon: 'lucide:cloud', items: infraItems },
    'Backend & APIs': { icon: 'lucide:server', items: backendItems },
    Frontend: { icon: 'lucide:monitor-smartphone', items: frontendItems },
    'Languages': { icon: 'lucide:code-2', items: langsItems },
    'Spoken': { icon: 'lucide:languages', items: humanLangs.en },
  },
  fr: {
    'Infrastructure et DevOps': { icon: 'lucide:cloud', items: infraItems },
    'Backend et APIs': { icon: 'lucide:server', items: backendItems },
    Frontend: { icon: 'lucide:monitor-smartphone', items: frontendItems },
    'Langages': { icon: 'lucide:code-2', items: langsItems },
    'Langues parlées': { icon: 'lucide:languages', items: humanLangs.fr },
  },
}

/* ── Servicios ("Qué construyo") ─────────────────────────────────────────── */

export const servicesData = {
  es: [
    {
      title: 'Sitios web a medida',
      icon: 'lucide:layout-template',
      items: [
        'Landing pages, sitios de negocio y portafolios: rápidos, en el celular y en Google',
        'Contenido que el dueño edita solo desde su propio panel',
        'Dominio, DNS, SSL y publicación incluidos',
      ],
    },
    {
      title: 'APIs y backend',
      icon: 'lucide:server-cog',
      items: [
        'REST y GraphQL con Node (Hono, Express), Bun, Python (FastAPI) o Go',
        'PostgreSQL/SQLite, colas, webhooks y tiempo real (WebSocket/SSE)',
        'Integración de pagos (Yappy, PayPal) con validación de firma',
      ],
    },
    {
      title: 'Paneles y sistemas internos',
      icon: 'lucide:layout-dashboard',
      items: [
        'Reservas, inventario, agendas y reportes: se acaba el cuaderno',
        'Dashboards con métricas y estado en vivo',
        'Acceso por roles y registro de lo que pasa en el sistema',
      ],
    },
    {
      title: 'Hosting y despliegue',
      icon: 'lucide:cloud-cog',
      items: [
        'Cloudflare Workers/Pages, Docker y VPS (Hetzner) con NixOS declarativo',
        'Despliegues automáticos (CI/CD), respaldos y monitoreo',
        'Infraestructura propia: RS Cloud, hosting para estudiantes',
      ],
    },
  ],
  en: [
    {
      title: 'Custom websites',
      icon: 'lucide:layout-template',
      items: [
        'Landings, business sites and portfolios: fast, mobile-friendly, on Google',
        'Content the owner edits from their own panel',
        'Domain, DNS, SSL and launch included',
      ],
    },
    {
      title: 'APIs and backend',
      icon: 'lucide:server-cog',
      items: [
        'REST and GraphQL with Node (Hono, Express), Bun, Python (FastAPI) or Go',
        'PostgreSQL/SQLite, queues, webhooks and realtime (WebSocket/SSE)',
        'Payments integration (Yappy, PayPal) with signature validation',
      ],
    },
    {
      title: 'Internal tools and panels',
      icon: 'lucide:layout-dashboard',
      items: [
        'Bookings, inventory, scheduling and reports — goodbye paper notebooks',
        'Dashboards with metrics and live status',
        'Role-based access and an audit trail of what happens',
      ],
    },
    {
      title: 'Hosting and deployment',
      icon: 'lucide:cloud-cog',
      items: [
        'Cloudflare Workers/Pages, Docker and VPS (Hetzner) with declarative NixOS',
        'Automated deploys (CI/CD), backups and monitoring',
        'My own infrastructure: RS Cloud, hosting for students',
      ],
    },
  ],
  fr: [
    {
      title: 'Sites web sur mesure',
      icon: 'lucide:layout-template',
      items: [
        'Landings, sites d’entreprise et portfolios : rapides, mobiles et visibles sur Google',
        'Contenu que le propriétaire édite depuis son propre panneau',
        'Domaine, DNS, SSL et mise en ligne inclus',
      ],
    },
    {
      title: 'APIs et backend',
      icon: 'lucide:server-cog',
      items: [
        'REST et GraphQL avec Node (Hono, Express), Bun, Python (FastAPI) ou Go',
        'PostgreSQL/SQLite, files, webhooks et temps réel (WebSocket/SSE)',
        'Intégration de paiements (Yappy, PayPal) avec validation de signature',
      ],
    },
    {
      title: 'Outils et panneaux internes',
      icon: 'lucide:layout-dashboard',
      items: [
        'Réservations, inventaire, agendas et rapports — fini le carnet',
        'Tableaux de bord avec métriques et statut en direct',
        'Accès par rôle et trace de ce qui se passe',
      ],
    },
    {
      title: 'Hébergement et déploiement',
      icon: 'lucide:cloud-cog',
      items: [
        'Cloudflare Workers/Pages, Docker et VPS (Hetzner) avec NixOS déclaratif',
        'Déploiements automatiques (CI/CD), sauvegardes et supervision',
        'Ma propre infrastructure : RS Cloud, hébergement pour étudiants',
      ],
    },
  ],
}

export const experienceData = {
  es: [
    {
      company: 'Independiente / Productos propios',
      role: 'Desarrollador Full-Stack & de Infraestructura',
      period: '2022 - Actualidad',
      description:
        'Diseño, construyo y opero sistemas web de punta a punta: APIs (Hono/FastAPI), interfaces (TypeScript/React/Astro), PostgreSQL y despliegue sobre Cloudflare, Docker y NixOS declarado en git. Ocho productos en producción con usuarios reales —reservas con pagos, tiendas, colas de trabajo y RS Cloud—, con CI/CD, respaldos y monitoreo a mi cargo.',
    },
    {
      company: 'Universidad Tecnológica de Panamá',
      role: 'Asistente de Investigación',
      period: '2026 - Actualidad',
      description:
        'Herramientas internas para la facultad, destacando RS Cloud: entorno de despliegue que permite a los estudiantes de Ingeniería de Sistemas publicar sus proyectos sin configurar servidores.',
    },
  ],
  en: [
    {
      company: 'Independent / Own products',
      role: 'Full-Stack & Platform Engineer',
      period: '2022 - Present',
      description:
        'I design, build and operate web systems end to end: APIs (Hono/FastAPI), UIs (TypeScript/React/Astro), PostgreSQL, and deployment on Cloudflare, Docker and NixOS declared in git. Eight products in production with real users —bookings with payments, stores, job queues and RS Cloud— with CI/CD, backups and monitoring under my responsibility.',
    },
    {
      company: 'Technological University of Panama',
      role: 'Research Assistant',
      period: '2026 - Present',
      description:
        'Internal tooling for the faculty, most notably RS Cloud: a deployment environment that lets Systems Engineering students ship their projects without configuring servers.',
    },
  ],
  fr: [
    {
      company: 'Indépendant / Produits personnels',
      role: 'Développeur Full-Stack & Infrastructure',
      period: '2022 - Présent',
      description:
        "Je conçois, construis et exploite des systèmes web de bout en bout : APIs (Hono/FastAPI), interfaces (TypeScript/React/Astro), PostgreSQL et déploiement sur Cloudflare, Docker et NixOS déclaré dans git. Huit produits en production avec de vrais utilisateurs — réservations avec paiement, boutiques, files de travaux et RS Cloud — CI/CD, sauvegardes et supervision inclus.",
    },
    {
      company: 'Université Technologique du Panama',
      role: 'Assistant de Recherche',
      period: '2026 - Présent',
      description:
        "Outils internes pour la faculté, dont RS Cloud : un environnement de déploiement pour que les étudiants en génie des systèmes publient leurs projets sans configurer de serveurs.",
    },
  ],
}
