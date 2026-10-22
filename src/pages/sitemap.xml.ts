import { getCollection } from 'astro:content'

export const prerender = true

const site = 'https://portafolio.rsanjur.com'
const fixedRoutes = ['/', '/cv/', '/cv-ats/', '/es/', '/es/cv/', '/es/cv-ats/', '/fr/', '/fr/cv/']
const projectPrefixes = ['', '/es', '/fr']

export async function GET() {
  const projects = await getCollection('projects')
  const projectRoutes = projects.flatMap(({ id }) =>
    projectPrefixes.map((prefix) => `${prefix}/projects/${id}/`),
  )
  const routes = [...new Set([...fixedRoutes, ...projectRoutes])]
  const entries = routes
    .map((route) => `  <url><loc>${new URL(route, site).href}</loc></url>`)
    .join('\n')
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  })
}
