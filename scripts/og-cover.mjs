import { execFileSync } from 'node:child_process'
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const photo = readFileSync(path.join(root, 'src/assets/Profile.jpg')).toString('base64')
const tempDir = mkdtempSync(path.join(tmpdir(), 'portafolio-og-'))
const svgPath = path.join(tempDir, 'og-image.svg')
const outputPath = path.join(root, 'public/og-image.png')

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="paper" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#ffffff" />
      <stop offset="1" stop-color="#f0f9ff" />
    </linearGradient>
    <clipPath id="portrait">
      <rect x="786" y="52" width="356" height="526" rx="30" />
    </clipPath>
  </defs>
  <rect width="1200" height="630" fill="url(#paper)" />
  <path d="M742 0h458v630H742c66-88 95-189 95-315S808 88 742 0Z" fill="#e0f2fe" />
  <circle cx="1115" cy="38" r="190" fill="#bae6fd" opacity=".5" />
  <rect x="770" y="36" width="388" height="558" rx="38" fill="#ffffff" />
  <image x="786" y="52" width="356" height="526" preserveAspectRatio="xMidYMid slice" clip-path="url(#portrait)" xlink:href="data:image/jpeg;base64,${photo}" />
  <rect x="786" y="52" width="356" height="526" rx="30" fill="none" stroke="#ffffff" stroke-width="8" />

  <rect x="80" y="104" width="68" height="5" rx="2.5" fill="#0284c7" />
  <text x="80" y="88" font-family="DejaVu Sans, sans-serif" font-size="17" font-weight="700" letter-spacing="3" fill="#0369a1">PORTAFOLIO RS</text>
  <text x="80" y="224" font-family="DejaVu Sans, sans-serif" font-size="57" font-weight="700" letter-spacing="-2" fill="#0f172a">RICARDO SANJUR</text>
  <text x="80" y="294" font-family="DejaVu Sans, sans-serif" font-size="29" font-weight="700" fill="#0369a1">Full-Stack Software Engineer</text>
  <text x="80" y="344" font-family="DejaVu Sans, sans-serif" font-size="22" fill="#334155">Backend · APIs · Cloud Infrastructure</text>
  <text x="80" y="411" font-family="DejaVu Sans, sans-serif" font-size="18" font-weight="700" fill="#475569">Panama (UTC-5) · Open to remote work</text>
  <rect x="80" y="452" width="530" height="2" fill="#bae6fd" />
  <text x="80" y="507" font-family="DejaVu Sans, sans-serif" font-size="20" font-weight="700" fill="#0369a1">portafolio.rsanjur.com</text>
  <text x="80" y="546" font-family="DejaVu Sans, sans-serif" font-size="16" fill="#64748b">Selected software projects and experience</text>
</svg>`

try {
  writeFileSync(svgPath, svg)
  execFileSync('chromium', [
    '--headless=new',
    '--no-sandbox',
    '--disable-dev-shm-usage',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    `--user-data-dir=${path.join(tempDir, 'chrome-profile')}`,
    '--window-size=1200,630',
    `--screenshot=${outputPath}`,
    pathToFileURL(svgPath).href,
  ], { stdio: 'ignore', env: { ...process.env, HOME: tempDir } })
  console.log(`Generated ${outputPath}`)
} finally {
  rmSync(tempDir, { recursive: true, force: true })
}
