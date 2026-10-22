export type CVLocale = 'en' | 'es' | 'fr'

export type CVProject = {
  title: string
  role: string
  description: string
  technologies: string[]
}

export type CVExperience = {
  company: string
  role: string
  period: string
  description: string
  bullets: string[]
}

export type CVData = {
  role: string
  specialization: string
  location: string
  summary: string
  experience: CVExperience[]
  projects: CVProject[]
  skillGroups: { label: string; items: string }[]
  education: { institution: string; degree: string; status: string }[]
  languages: string[]
  labels: {
    summary: string
    experience: string
    projects: string
    skills: string
    education: string
    languages: string
    print: string
    visual: string
    remote: string
  }
}

export const CV_DATA: Record<CVLocale, CVData> = {
  en: {
    role: 'Full-Stack Software Engineer',
    specialization: 'Backend, APIs & Cloud Infrastructure',
    location: 'Panama (UTC-5) · Open to remote work',
    summary:
      'Full-Stack Software Engineer with 4+ years building and operating production web systems for businesses. Works across TypeScript/JavaScript, Node.js/Hono, React, Astro/Next.js, REST APIs, SQL, and Cloudflare Workers. Delivers complete workflows from authentication and payments to operations tools and deployment.',
    experience: [
      {
        company: 'Independent Developer · Client and Own Projects',
        role: 'Full-Stack Software Engineer',
        period: '2022–Present',
        description:
          'Build and operate customer-facing web applications and internal systems, from data models and APIs to authentication, payment integrations, responsive interfaces, and production releases. Use AI-assisted development while retaining ownership of requirements, technical direction, debugging, testing, and delivery.',
        bullets: [
          'Rolled out shared RS ID sign-in and RS Pay checkout across multiple storefronts, replacing duplicated implementations that had drifted out of sync.',
          'Diagnosed a production checkout failure across authentication, CORS, and provider responses; verified a successful Yappy payment for a client store.',
        ],
      },
    ],
    projects: [
      {
        title: '3DPrints · E-commerce and Order Management',
        role: 'Full-Stack Developer · Own Product',
        description:
          'Built an online store and order-management workflow with a product catalog, cart, customer sign-in, and admin tools. Reduced mobile first paint from 4.2 seconds to 0.6 seconds after measuring and deferring third-party scripts and 3D assets.',
        technologies: ['Astro', 'TypeScript', 'Hono', 'Cloudflare Workers', 'D1', 'R2', 'Drizzle'],
      },
      {
        title: 'Impresiones Online · Remote Print Workflow',
        role: 'Full-Stack Developer · Own Product',
        description:
          'Built a remote print-ordering workflow with PDF uploads up to 25 MB, customer options, an admin work queue, order history, and real-time status updates using WebSockets and Durable Objects.',
        technologies: ['TypeScript', 'Hono', 'Cloudflare Workers', 'D1', 'R2', 'Durable Objects', 'WebSockets'],
      },
      {
        title: 'Carreras Stryd · Race Registration and Athlete Portal',
        role: 'Full-Stack Developer',
        description:
          'Implemented RS ID-only athlete access, HMAC-signed registration tickets, private receipt uploads to R2, and public athlete endpoints that omit personal data. Payment webhook signature handling was tested in staging.',
        technologies: ['TypeScript', 'HMAC-SHA256', 'Cloudflare D1', 'Cloudflare R2', 'RS ID', 'Webhooks'],
      },
    ],
    skillGroups: [
      { label: 'Programming Languages', items: 'TypeScript, JavaScript, Python, Go, Rust' },
      { label: 'Backend and Frontend', items: 'Node.js, Bun, Hono, FastAPI, REST, React, Next.js, Astro, Svelte, Tailwind CSS' },
      { label: 'Data and Cloud', items: 'PostgreSQL, SQLite, D1, R2, Drizzle ORM, Redis, Cloudflare Workers' },
      { label: 'Operations and Environments', items: 'Docker, Linux, NixOS, GitHub Actions' },
      { label: 'Development Workflow', items: 'AI-assisted software development, requirements definition, debugging, testing, production validation' },
      { label: 'Languages', items: 'Spanish (native), English (intermediate), French (learning)' },
    ],
    education: [
      {
        institution: 'Universidad Tecnológica de Panamá',
        degree: 'B.S. in Systems Engineering and Computing',
        status: 'In progress · Fifth year',
      },
    ],
    languages: ['Spanish · Native', 'English · Intermediate', 'French · Learning'],
    labels: {
      summary: 'Professional Summary',
      experience: 'Professional Experience',
      projects: 'Selected Projects',
      skills: 'Technical Skills',
      education: 'Education',
      languages: 'Languages',
      print: 'Print / Save ATS PDF',
      visual: 'View visual CV',
      remote: 'Open to remote work',
    },
  },
  es: {
    role: 'Ingeniero de Software Full Stack',
    specialization: 'Backend, APIs e Infraestructura Cloud',
    location: 'Panamá (UTC-5) · Disponible para trabajo remoto',
    summary:
      'Ingeniero de Software Full Stack con más de 4 años construyendo y operando sistemas web en producción para negocios. Trabajo con TypeScript/JavaScript, Node.js/Hono, React, Astro/Next.js, APIs REST, SQL y Cloudflare Workers. Entrego flujos completos de autenticación y pagos a herramientas operativas y despliegues.',
    experience: [
      {
        company: 'Desarrollador independiente · Proyectos propios y de clientes',
        role: 'Ingeniero de Software Full Stack',
        period: '2022–Actualidad',
        description:
          'Construyo y opero aplicaciones web para clientes y sistemas internos, desde modelos de datos y APIs hasta autenticación, integraciones de pago, interfaces adaptables y publicaciones en producción. Uso desarrollo asistido por IA y mantengo la responsabilidad sobre los requisitos, las decisiones técnicas, la depuración, las pruebas y la entrega.',
        bullets: [
          'Desplegué inicio de sesión con RS ID y checkout con RS Pay compartidos en varias tiendas, reemplazando copias que se habían desincronizado.',
          'Diagnostiqué un fallo de checkout en autenticación, CORS y respuesta del proveedor; verifiqué un pago Yappy exitoso en producción para un cliente.',
        ],
      },
    ],
    projects: [
      {
        title: '3DPrints · Comercio electrónico y pedidos',
        role: 'Desarrollador Full Stack · Producto propio',
        description:
          'Construí la tienda y el flujo de pedidos con catálogo, carrito, inicio de sesión y panel administrativo. Reduje el primer pintado móvil de 4.2 a 0.6 segundos tras medir y aplazar scripts de terceros y recursos 3D.',
        technologies: ['Astro', 'TypeScript', 'Hono', 'Cloudflare Workers', 'D1', 'R2', 'Drizzle'],
      },
      {
        title: 'Impresiones Online · Flujo de pedidos de impresión',
        role: 'Desarrollador Full Stack · Producto propio',
        description:
          'Construí un flujo de impresión remota con subida de PDF de hasta 25 MB, selección de opciones, cola de trabajo administrativa, historial y actualización del estado en tiempo real con WebSockets y Durable Objects.',
        technologies: ['TypeScript', 'Hono', 'Cloudflare Workers', 'D1', 'R2', 'Durable Objects', 'WebSockets'],
      },
      {
        title: 'Carreras Stryd · Inscripciones y portal de atletas',
        role: 'Desarrollador Full Stack',
        description:
          'Implementé acceso de atletas solo con RS ID, tickets de inscripción firmados con HMAC, subida privada de comprobantes a R2 y endpoints públicos que omiten los datos personales. La validación de firma del webhook de pago se probó en staging.',
        technologies: ['TypeScript', 'HMAC-SHA256', 'Cloudflare D1', 'Cloudflare R2', 'RS ID', 'Webhooks'],
      },
    ],
    skillGroups: [
      { label: 'Lenguajes', items: 'TypeScript, JavaScript, Python, Go, Rust' },
      { label: 'Backend y frontend', items: 'Node.js, Bun, Hono, FastAPI, REST, React, Next.js, Astro, Svelte, Tailwind CSS' },
      { label: 'Datos y cloud', items: 'PostgreSQL, SQLite, D1, R2, Drizzle ORM, Redis, Cloudflare Workers' },
      { label: 'Operaciones y entornos', items: 'Docker, Linux, NixOS, GitHub Actions' },
      { label: 'Flujo de desarrollo', items: 'Desarrollo asistido por IA, definición de requisitos, depuración, pruebas y validación en producción' },
      { label: 'Idiomas', items: 'Español (nativo), inglés (intermedio), francés (en aprendizaje)' },
    ],
    education: [
      {
        institution: 'Universidad Tecnológica de Panamá',
        degree: 'Licenciatura en Ingeniería en Sistemas y Computación',
        status: 'En curso · Quinto año',
      },
    ],
    languages: ['Español · Nativo', 'Inglés · Intermedio', 'Francés · En aprendizaje'],
    labels: {
      summary: 'Resumen profesional',
      experience: 'Experiencia profesional',
      projects: 'Proyectos seleccionados',
      skills: 'Habilidades técnicas',
      education: 'Educación',
      languages: 'Idiomas',
      print: 'Imprimir / Guardar PDF ATS',
      visual: 'Ver CV visual',
      remote: 'Disponible para trabajo remoto',
    },
  },
  fr: {
    role: 'Ingénieur logiciel full-stack',
    specialization: 'Backend, API et infrastructure cloud',
    location: 'Panama (UTC-5) · Disponible à distance',
    summary:
      'Ingénieur logiciel full-stack avec plus de 4 ans d’expérience dans la création et l’exploitation de systèmes web en production pour des entreprises. Travaille avec TypeScript/JavaScript, Node.js/Hono, React, Astro/Next.js, API REST, SQL et Cloudflare Workers. Livre des flux complets, de l’authentification et des paiements aux outils opérationnels et déploiements.',
    experience: [
      {
        company: 'Développeur indépendant · Projets clients et personnels',
        role: 'Ingénieur logiciel full-stack',
        period: '2022–Présent',
        description:
          'Conçoit et exploite des applications web pour des clients et des outils internes, des modèles de données et API aux paiements, interfaces et mises en production. Utilise le développement assisté par IA tout en gardant la responsabilité des exigences, des choix techniques, du débogage, des tests et de la livraison.',
        bullets: [
          'A déployé des composants partagés RS ID et RS Pay dans plusieurs boutiques, remplaçant des implémentations dupliquées qui s’étaient désynchronisées.',
          'A diagnostiqué une panne de paiement en production liée à l’authentification, CORS et la réponse du fournisseur ; a vérifié une transaction Yappy réussie pour un client.',
        ],
      },
    ],
    projects: [
      {
        title: '3DPrints · Commerce électronique et commandes',
        role: 'Développeur full-stack · Produit personnel',
        description:
          'A créé une boutique en ligne avec catalogue, panier, connexion client et outils d’administration. A réduit le premier affichage mobile de 4,2 à 0,6 seconde après mesure et report des scripts tiers et ressources 3D.',
        technologies: ['Astro', 'TypeScript', 'Hono', 'Cloudflare Workers', 'D1', 'R2', 'Drizzle'],
      },
      {
        title: 'Impresiones Online · Flux de commande d’impression',
        role: 'Développeur full-stack · Produit personnel',
        description:
          'A créé un flux d’impression à distance avec dépôt de PDF jusqu’à 25 Mo, options de commande, file de travail administrative, historique et mises à jour en temps réel via WebSockets et Durable Objects.',
        technologies: ['TypeScript', 'Hono', 'Cloudflare Workers', 'D1', 'R2', 'Durable Objects', 'WebSockets'],
      },
      {
        title: 'Carreras Stryd · Inscriptions et portail des athlètes',
        role: 'Développeur full-stack',
        description:
          'A mis en place l’accès RS ID, des tickets d’inscription signés HMAC, le dépôt privé des reçus dans R2 et des API publiques excluant les données personnelles. La validation de signature du webhook de paiement a été testée en staging.',
        technologies: ['TypeScript', 'HMAC-SHA256', 'Cloudflare D1', 'Cloudflare R2', 'RS ID', 'Webhooks'],
      },
    ],
    skillGroups: [
      { label: 'Langages', items: 'TypeScript, JavaScript, Python, Go, Rust' },
      { label: 'Backend et frontend', items: 'Node.js, Bun, Hono, FastAPI, REST, React, Next.js, Astro, Svelte, Tailwind CSS' },
      { label: 'Données et cloud', items: 'PostgreSQL, SQLite, D1, R2, Drizzle ORM, Redis, Cloudflare Workers' },
      { label: 'Opérations et environnements', items: 'Docker, Linux, NixOS, GitHub Actions' },
      { label: 'Workflow de développement', items: 'Développement assisté par IA, définition des exigences, débogage, tests et validation en production' },
      { label: 'Langues', items: 'Espagnol (langue maternelle), anglais (intermédiaire), français (en apprentissage)' },
    ],
    education: [
      {
        institution: 'Universidad Tecnológica de Panamá',
        degree: 'Licence en ingénierie des systèmes et informatique',
        status: 'En cours · Cinquième année',
      },
    ],
    languages: ['Espagnol · Langue maternelle', 'Anglais · Intermédiaire', 'Français · En apprentissage'],
    labels: {
      summary: 'Résumé professionnel',
      experience: 'Expérience professionnelle',
      projects: 'Projets sélectionnés',
      skills: 'Compétences techniques',
      education: 'Formation',
      languages: 'Langues',
      print: 'Imprimer / Enregistrer le CV ATS',
      visual: 'Voir le CV visuel',
      remote: 'Disponible à distance',
    },
  },
}

export function getCVData(lang: string): CVData {
  return CV_DATA[lang as CVLocale] ?? CV_DATA.en
}
