# Portafolio RS — Ricardo Sanjur

Portafolio **Full-Stack Web3 Engineer** (Astro 5 + Tailwind 4, i18n es/en/fr).
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
| Emails, GitHub, LinkedIn, **wallet Solana**, repos Web3, disponibilidad | `src/data/profile.ts` — TODO |
| Textos de datos (sobre mí, skills, proyectos Web3, servicios, experiencia) | `src/i18n/data.ts` |
| Etiquetas/cadenas de UI (nav, títulos de sección, CTAs) | `src/i18n/ui.ts` (3 bloques: es/en/fr — añade la clave en los tres) |
| Proyectos normales (Foundation) | `src/content/projects/*.json` (`order` alto = primero; `projects-metadata.json` lleva el contador) |
| Orden de secciones del home | `src/components/Portfolio.astro` |
| Colores/efectos Web3 (glow, gradiente, toggle) | `src/styles/global.css` |
| CV imprimible (1 página, print → PDF) | `src/components/CVContent.astro` — botón «Imprimir / Guardar PDF» |

### Activar la sección de wallet

`profile.ts → solanaWallet` está en `''` (la sección se oculta en producción).
Pega tu **dirección de recepción** (nunca una clave privada; idealmente un
wallet dedicado solo a recibir). El QR se genera en cliente con `qrcode`, sin
servicios externos.

### Enlazar los repos Web3 cuando sean públicos

`profile.ts → web3Repos.binancePayWebhook / analyticsDashboard`: mientras estén
en `''`, las tarjetas muestran el estado honesto (`building` / `soon`) y no
generan botones muertos. Al publicar cada repo, pon la URL y cambia `status` en
`src/i18n/data.ts` a `live` si ya funciona en producción.

### Toggle Web3/Web2

`Header.astro` + regla CSS `:root[data-view='web2'] .web3-only`. Las secciones
marcadas `web3-only` (proyectos Web3, servicios, wallet, links de nav) se
ocultan sin recargar; la preferencia vive en `localStorage`.

## Notas de honestidad

Los estados de los proyectos Web3 (`building`/`soon`/`live`) son la fuente de
verdad visible: no se publican botones de demo/repo que no funcionen.
