export const aboutData = {
  es: 'Ingeniero en Sistemas proactivo con sólidas habilidades de desarrollo Full-stack, especializado en la creación de soluciones robustas tanto en Backend como en Frontend. Apasionado por la tecnología y con dominio del inglés, busco aplicar mis conocimientos en desarrollo de aplicaciones para contribuir al éxito de proyectos innovadores.',
  en: 'Proactive Systems Engineer with solid Full-stack development skills, specializing in creating robust solutions in both Backend and Frontend. Passionate about technology and fluent in English, I seek to apply my knowledge in application development to contribute to the success of innovative projects.',
  fr: "Ingénieur Système proactif avec de solides compétences en développement Full-stack, spécialisé dans la création de solutions robustes tant en Backend qu'en Frontend. Passionné par la technologie et maîtrisant l'anglais, je cherche à appliquer mes connaissances en développement d'applications pour contribuer au succès de projets innovants.",
}

const lenguagesProgItems = [
  'TypeScript',
  'JavaScript',
  'Python',
  'Java',
  'GDScript',
  'C',
]
const frameworksItems = [
  'Next.js',
  'React',
  'Astro',
  'Hono',
  'Express.js',
  'React Native',
  'Expo',
]
const databasesItems = [
  'PostgreSQL',
  'MySQL',
  'SQLite (D1)',
  'Cloudflare R2 (Object Storage)',
]
const toolsItems = [
  'Cloudflare Workers',
  'Cloudflare Zero Trust',
  'Cloudflare Turnstile',
  'Vercel',
  'Git',
  'VS Code',
  'Notion',
  'Godot',
]
const osItems = ['Windows', 'Linux']

export const skillsData = {
  es: {
    'Frameworks y Bibliotecas': {
      icon: 'lucide:library',
      items: frameworksItems,
    },
    'Lenguajes de Programación': {
      icon: 'lucide:code-2',
      items: lenguagesProgItems,
    },
    'Bases de Datos y Almacenamiento': {
      icon: 'lucide:database',
      items: databasesItems,
    },
    Herramientas: { icon: 'lucide:wrench', items: toolsItems },
    Idiomas: {
      icon: 'lucide:languages',
      items: ['Inglés (Intermedio)', 'Frances (Aprendiendo)'],
    },
    'Sistemas Operativos': { icon: 'lucide:laptop', items: osItems },
  },
  en: {
    'Frameworks & Libraries': {
      icon: 'lucide:library',
      items: frameworksItems,
    },
    'Programming Languages': {
      icon: 'lucide:code-2',
      items: lenguagesProgItems,
    },
    'Databases & Storage': {
      icon: 'lucide:database',
      items: databasesItems,
    },
    Tools: { icon: 'lucide:wrench', items: toolsItems },
    Languages: {
      icon: 'lucide:languages',
      items: ['English (Intermediate)', 'French (Learning)'],
    },
    'Operating Systems': { icon: 'lucide:laptop', items: osItems },
  },
  fr: {
    'Frameworks et Bibliothèques': {
      icon: 'lucide:library',
      items: frameworksItems,
    },
    'Langages de Programmation': {
      icon: 'lucide:code-2',
      items: lenguagesProgItems,
    },
    'Bases de Données et Stockage': {
      icon: 'lucide:database',
      items: databasesItems,
    },
    Outils: { icon: 'lucide:wrench', items: toolsItems },
    Langues: {
      icon: 'lucide:languages',
      items: ['Anglais (Intermédiaire)', 'Français (Apprentissage)'],
    },
    "Systèmes d'Exploitation": { icon: 'lucide:laptop', items: osItems },
  },
};

export const experienceData = {
  es: [
    {
      company: 'Freelance / Proyectos Personales',
      role: 'Desarrollador Full-stack',
      period: '2022 - Actualidad',
      description: 'Desarrollo de aplicaciones web y móviles personalizadas para diversos clientes, utilizando tecnologías modernas como React, Next.js y Node.js.',
    },
    {
      company: 'Universidad Tecnológica de Panamá',
      role: 'Asistente de Investigación / Estudiante',
      period: '2021 - 2025',
      description: 'Participación en proyectos académicos complejos y colaboración en el desarrollo de herramientas internas para la facultad.',
    }
  ],
  en: [
    {
      company: 'Freelance / Personal Projects',
      role: 'Full-stack Developer',
      period: '2022 - Present',
      description: 'Development of custom web and mobile applications for various clients, using modern technologies such as React, Next.js, and Node.js.',
    },
    {
      company: 'Technological University of Panama',
      role: 'Research Assistant / Student',
      period: '2021 - 2025',
      description: 'Participation in complex academic projects and collaboration in the development of internal tools for the faculty.',
    }
  ],
  fr: [
    {
      company: 'Freelance / Projets Personnels',
      role: 'Développeur Full-stack',
      period: '2022 - Présent',
      description: 'Développement d\'applications web et mobiles personnalisées pour divers clients, utilisant des technologies modernes telles que React, Next.js et Node.js.',
    },
    {
      company: 'Université Technologique du Panama',
      role: 'Assistant de Recherche / Étudiant',
      period: '2021 - 2025',
      description: 'Participation à des projets académiques complexes et collaboration au développement d\'outils internes pour la faculté.',
    }
  ]
};
