/** Datos localizados del portafolio (es/en/fr). El perfil duro vive en src/data/profile.ts */

export const aboutData = {
  es: `Ingeniero de software full-stack. Construyo el software que los negocios usan todos los días —la página que consigue clientes, el panel que lleva las reservas, la API que sostiene todo— y me hago cargo del ciclo completo: datos, APIs, interfaces y despliegue web en Cloudflare, con CI/CD, respaldos y monitoreo.

Mis proyectos incluyen una tienda de impresión 3D con catálogo y cola de producción, además de sistemas de reservas, pagos y operaciones para negocios de Panamá.

Basado en Panamá (UTC-5), con solapamiento horario cómodo para equipos de EE. UU. y Europa. Trabajo de punta a punta: base de datos, API, interfaz y despliegue.`,
  en: `Full-stack software engineer. I build the software businesses use every day — the site that wins customers, the panel that runs bookings, the API holding it all up — and own the full delivery cycle: data, APIs, interfaces, and web deployments on Cloudflare, with CI/CD, backups, and monitoring.

My projects include a 3D-printing store with a production queue, plus booking, payment, and operations systems for Panamanian businesses.

Based in Panama (UTC-5) with comfortable timezone overlap for US/EU teams. I work end to end: database, API, UI and deployment.`,
  fr: `Ingénieur logiciel full-stack. Je construis les logiciels que les entreprises utilisent chaque jour — le site qui attire les clients, le panneau qui gère les réservations, l’API qui tient le tout — et prends en charge le cycle complet : données, API, interfaces et déploiement web sur Cloudflare, avec CI/CD, sauvegardes et supervision.

Mes projets incluent une boutique d’impression 3D avec une file de production, ainsi que des systèmes de réservation, de paiement et d’opérations pour des entreprises panaméennes.

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
        'Cloudflare Workers/Pages para publicar sitios y aplicaciones web',
        'Despliegues automáticos (CI/CD), respaldos y monitoreo',
        'Docker para servicios que requieren contenedores',
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
        'Cloudflare Workers/Pages for websites and web apps',
        'Automated deploys (CI/CD), backups and monitoring',
        'Docker for services that need containers',
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
        'Cloudflare Workers/Pages pour les sites et applications web',
        'Déploiements automatiques (CI/CD), sauvegardes et supervision',
        'Docker pour les services nécessitant des conteneurs',
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
        'Diseño, construyo y opero sistemas web de punta a punta: APIs (Hono/FastAPI), interfaces (TypeScript/React/Astro) y PostgreSQL. Despliego sitios web en Cloudflare y me encargo de CI/CD, respaldos y monitoreo.',
    },
  ],
  en: [
    {
      company: 'Independent / Own products',
      role: 'Full-Stack & Platform Engineer',
      period: '2022 - Present',
      description:
        'I design, build and operate web systems end to end: APIs (Hono/FastAPI), UIs (TypeScript/React/Astro), and PostgreSQL. I deploy websites on Cloudflare and handle CI/CD, backups and monitoring.',
    },
  ],
  fr: [
    {
      company: 'Indépendant / Produits personnels',
      role: 'Développeur Full-Stack & Infrastructure',
      period: '2022 - Présent',
      description:
        'Je conçois, construis et exploite des systèmes web de bout en bout : API (Hono/FastAPI), interfaces (TypeScript/React/Astro) et PostgreSQL. Je déploie les sites web sur Cloudflare et prends en charge CI/CD, sauvegardes et supervision.',
    },
  ],
}
