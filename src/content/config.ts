import { defineCollection, z } from 'astro:content';

const localizedString = z.object({
  es: z.string(),
  en: z.string(),
  fr: z.string(),
});

const projectsCollection = defineCollection({
  type: 'data',
  schema: ({ image }) => z.object({
    title: z.string(), // El título suele ser el mismo, pero si quieres traducirlo: localizedString
    image: image(),
    imageAlt: localizedString,
    role: localizedString,
    description: localizedString,
    achievements: localizedString,
    technologies: z.array(z.string()),
    githubUrl: z.string().url().optional(), // omitir hasta que el repo sea público
    liveUrl: z.string().url().optional(),
    year: z.string().optional(), // ej. "2026" o "2024 - 2025"
    order: z.number().optional(),
  }),
});

export const collections = {
  'projects': projectsCollection,
};
