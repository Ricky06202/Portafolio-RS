/**
 * Perfil centralizado: UN solo lugar para cambiar direcciones, links y estados.
 * Todo el sitio (y el CV imprimible) lee de aquí.
 */
export const PROFILE = {
  name: 'Ricardo Sanjur',
  /** Email de negocio (contacto general). Requiere Cloudflare Email Routing activo. */
  email: 'ricardo@rsanjur.com',
  /** Email para recruiters: destino del botón Hire Me. */
  jobsEmail: 'jobs@rsanjur.com',
  /** Teléfono de contacto (aparece en el CV imprimible). */
  phone: '+507 6510-4147',
  github: 'https://github.com/Ricky06202',
  githubRepos: 'https://github.com/Ricky06202?tab=repositories',
  linkedin: 'https://www.linkedin.com/in/ricardo-amado-sanjur-gomez-61067822b/',
  website: 'rsanjur.com',
  location: 'Panamá (UTC-5)',

  /** Semáforo de disponibilidad (se muestra como punto verde/rojo). */
  available: true,
} as const
