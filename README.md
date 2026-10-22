# Portafolio RS — Ricardo Sanjur

Portafolio **Full-Stack Engineer** (Astro 5 + Tailwind 4, i18n es/en/fr).
Publicado vía Cloudflare Workers (`portafolio-rs`).

## Desarrollo

```sh
bun install
bun dev        # http://localhost:4321
bun run build  # dist/ estático
bun run preview
```

Desplegar: `wrangler deploy` (usa `wrangler.jsonc`; assets desde `dist/`).

## Personalización (puntos únicos de cambio)

| Quiero cambiar… | Editar |
| --- | --- |
| Emails, GitHub, LinkedIn, disponibilidad | `src/data/profile.ts` — TODO |
| Textos de datos (sobre mí, skills, servicios, experiencia) | `src/i18n/data.ts` |
| Etiquetas/cadenas de UI (nav, títulos de sección, CTAs) | `src/i18n/ui.ts` (3 bloques: es/en/fr — añade la clave en los tres) |
| Proyectos | `src/content/projects/*.json` (`order` alto = primero; `projects-metadata.json` lleva el contador; `year` opcional para "Detalles Rápidos") |
| Orden de secciones del home | `src/components/Portfolio.astro` |
| Contenido de los CV | `src/data/cv.ts` — datos compartidos por el CV visual y el ATS |
| Rutas de CV | `/cv` y `/es/cv` (visual); `/cv-ats` y `/es/cv-ats` (ATS, imprimir → PDF) |
| Portada para compartir | `node scripts/og-cover.mjs` regenera `public/og-image.png` desde `src/assets/Profile.jpg` |
| Sitemap | `src/pages/sitemap.xml.ts` se genera desde las rutas y proyectos del sitio |

## Notas de honestidad

Solo se publican links de repo/demo que existen: `githubUrl`/`liveUrl` son
opcionales en el esquema de contenido y la card los omite cuando faltan.
`public/CV_Ricardo_Sanjur.pdf` se regenera imprimiendo `/cv` (Guardar como PDF).
