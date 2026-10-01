/** Datos localizados del portafolio (es/en/fr). El perfil duro vive en src/data/profile.ts */

export const aboutData = {
  es: `Ingeniero full-stack. Construyo el software que los negocios usan todos los días: la página que consigue clientes, el panel que lleva las reservas y la cola de trabajo, y la API que sostiene todo eso.

Trabajo de punta a punta —base de datos, API, interfaz y despliegue— con TypeScript, Astro/Next.js, Hono y PostgreSQL, y con la infraestructura también a mi cargo: Cloudflare, Docker y NixOS declarado en git para que nada dependa de una máquina.

Termino la carrera de Ingeniería en Sistemas mientras mantengo productos propios en producción (taller de impresión 3D, impresiones en línea y RS Cloud, hosting para estudiantes). Basado en Panamá (UTC-5), con solapamiento horario cómodo para equipos de EE. UU. y Europa.`,
  en: `Full-stack engineer. I build the software businesses use every day: the site that wins customers, the panel that runs bookings and the job queue, and the API holding it all up.

I work end to end —database, API, UI and deployment— with TypeScript, Astro/Next.js, Hono and PostgreSQL, and I own the infrastructure too: Cloudflare, Docker and NixOS declared in git so nothing depends on a single machine.

I'm finishing my Computer Systems Engineering degree while running my own products in production (a 3D printing shop, online printing and RS Cloud, hosting for students). Based in Panama (UTC-5) with comfortable timezone overlap for US/EU teams.`,
  fr: `Ingénieur full-stack. Je construis les logiciels que les entreprises utilisent chaque jour : le site qui attire les clients, le panneau qui gère les réservations et la file de travail, et l'API qui tient le tout.

Je travaille de bout en bout —base de données, API, interface et déploiement— avec TypeScript, Astro/Next.js, Hono et PostgreSQL, et je garde aussi l'infrastructure : Cloudflare, Docker et NixOS déclaré dans git pour que rien ne dépende d'une seule machine.

Je termine mon diplôme en génie informatique tout en maintenant mes propres produits en production (atelier d'impression 3D, impression en ligne et RS Cloud, hébergement pour étudiants). Basé au Panama (UTC-5), avec un chevauchement horaire confortable pour les équipes US/EU.`,
}

/* ── Tech stack (el orden de claves es el de render) ── */

const backendItems = [
  'Node.js',
  'Bun',
  'Hono',
  'Express',
  'FastAPI',
  'PostgreSQL',
  'SQLite / Cloudflare D1',
  'Prisma',
  'Drizzle ORM',
  'REST',
  'GraphQL',
  'Webhooks',
  'WebSocket / SSE',
  'Redis',
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
const infraItems = [
  'Docker',
  'Cloudflare Workers',
  'Cloudflare Pages',
  'R2 / D1',
  'NixOS',
  'Proxmox',
  'Hetzner',
  'GitHub Actions',
  'Linux',
  'Caddy',
]
const langsItems = ['TypeScript / JavaScript', 'Python', 'Go', 'Rust', 'C#', 'C++']
const humanLangs = {
  es: ['Inglés (Intermedio)', 'Francés (Aprendiendo)'],
  en: ['English (Intermediate)', 'French (Learning)'],
  fr: ['Anglais (Intermédiaire)', 'Français (En apprentissage)'],
}

export const skillsData = {
  es: {
    'Backend y APIs': { icon: 'lucide:server', items: backendItems },
    Frontend: { icon: 'lucide:monitor-smartphone', items: frontendItems },
    'Infraestructura y DevOps': { icon: 'lucide:cloud', items: infraItems },
    'Lenguajes': { icon: 'lucide:code-2', items: langsItems },
    'Idiomas': { icon: 'lucide:languages', items: humanLangs.es },
  },
  en: {
    'Backend & APIs': { icon: 'lucide:server', items: backendItems },
    Frontend: { icon: 'lucide:monitor-smartphone', items: frontendItems },
    'Infrastructure & DevOps': { icon: 'lucide:cloud', items: infraItems },
    'Languages': { icon: 'lucide:code-2', items: langsItems },
    'Spoken': { icon: 'lucide:languages', items: humanLangs.en },
  },
  fr: {
    'Backend et APIs': { icon: 'lucide:server', items: backendItems },
    Frontend: { icon: 'lucide:monitor-smartphone', items: frontendItems },
    'Infrastructure et DevOps': { icon: 'lucide:cloud', items: infraItems },
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
      company: 'Freelance / Proyectos Personales',
      role: 'Desarrollador Full-stack',
      period: '2022 - Actualidad',
      description:
        'Aplicaciones web y móviles a medida para distintos clientes, de la base de datos al despliegue: reservas, tiendas, paneles de control y sitios corporativos con React, Next.js, Astro y Node.js. Incluye productos propios en producción (impresión 3D, impresiones en línea y RS Cloud).',
    },
    {
      company: 'Universidad Tecnológica de Panamá',
      role: 'Asistente de Investigación / Estudiante',
      period: '2026 - Actualidad',
      description:
        'Participación en proyectos académicos complejos y desarrollo de herramientas internas para la facultad, incluyendo RS Cloud: entorno de despliegue para que los estudiantes de Ingeniería de Sistemas publiquen sus proyectos sin configurar servidores.',
    },
  ],
  en: [
    {
      company: 'Freelance / Personal Projects',
      role: 'Full-stack Developer',
      period: '2022 - Present',
      description:
        'Custom web and mobile applications for a range of clients, database to deployment: bookings, stores, dashboards and corporate sites with React, Next.js, Astro and Node.js. Plus my own products in production (3D printing, online printing and RS Cloud).',
    },
    {
      company: 'Technological University of Panama',
      role: 'Research Assistant / Student',
      period: '2026 - Present',
      description:
        'Participation in complex academic projects and internal tooling for the faculty, including RS Cloud: a deployment environment so Systems Engineering students can publish their projects without configuring servers.',
    },
  ],
  fr: [
    {
      company: 'Freelance / Projets Personnels',
      role: 'Développeur Full-stack',
      period: '2022 - Présent',
      description:
        "Applications web et mobiles sur mesure pour divers clients, de la base de données au déploiement : réservations, boutiques, tableaux de bord et sites corporatifs avec React, Next.js, Astro et Node.js. Plus mes propres produits en production (impression 3D, impression en ligne et RS Cloud).",
    },
    {
      company: 'Université Technologique du Panama',
      role: 'Assistant de Recherche / Étudiant',
      period: '2026 - Présent',
      description:
        "Participation à des projets académiques complexes et outils internes pour la faculté, dont RS Cloud : un environnement de déploiement pour que les étudiants en génie des systèmes publient leurs projets sans configurer de serveurs.",
    },
  ],
}
