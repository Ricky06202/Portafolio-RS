/**
 * Perfil centralizado: UN solo lugar para cambiar direcciones, links y estados.
 * Todo el sitio (y el CV imprimible) lee de aquí.
 */
export const PROFILE = {
  name: 'Ricardo Sanjur',
  /** Email de negocio (contacto general). Requiere Cloudflare Email Routing activo. */
  email: 'ricardo@rsanjur.com',
  /** Email de la fachada Web3. */
  cryptoEmail: 'crypto@rsanjur.com',
  /** Email para recruiters: destino del botón Hire Me. */
  jobsEmail: 'jobs@rsanjur.com',
  github: 'https://github.com/Ricky06202',
  githubRepos: 'https://github.com/Ricky06202?tab=repositories',
  linkedin: 'https://www.linkedin.com/in/ricardo-amado-sanjur-gomez-61067822b/',
  website: 'rsanjur.com',
  location: 'Panamá (UTC-5)',

  /**
   * Dirección de RECEPCIÓN Solana (pública por diseño: solo sirve para que te
   * paguen; nunca derives ni pongas aquí una clave privada).
   * ⚠️ Recomendado: wallet dedicada a recibir, no la de tus ahorros.
   * Deja '' para ocultar el bloque de wallet del sitio hasta que la pegues.
   */
  solanaWallet: '',

  /**
   * Repos públicos de los proyectos Web3. Pon la URL cuando cada repo esté
   * publicado; mientras esté en '' el botón no se muestra (sin links falsos).
   */
  web3Repos: {
    binancePayWebhook: 'https://github.com/Ricky06202/binance-pay-webhook',
    analyticsDashboard: '',
    /** Nixdots es público desde siempre. */
    infra: 'https://github.com/Ricky06202/nixdots',
    homeServer: 'https://github.com/Ricky06202/home-server',
  },

  /** Semáforo de disponibilidad (se muestra como punto verde/rojo). */
  available: true,
} as const
