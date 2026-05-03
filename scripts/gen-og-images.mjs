/**
 * Atlantis NDT — Per-page Open Graph image generator
 *
 * Generates one branded 1200×630 PNG per route in `public/og/<safe-slug>.png`.
 * Uses pure Node (sharp + SVG composite). No headless browser required.
 *
 * Run:
 *   node scripts/gen-og-images.mjs              # incremental, top-50 priority + on-disk completion
 *   node scripts/gen-og-images.mjs --all        # generate every known route
 *   node scripts/gen-og-images.mjs --force      # regenerate even if PNG exists & up-to-date
 *   node scripts/gen-og-images.mjs --top=N      # only generate top N pages (default 50)
 *
 * Output:
 *   public/og/<safe-slug>.png         e.g. blog-ndt-salary-guide-2026-global.png
 *   public/og/home.png                for "/"
 *
 * Skips regeneration when PNG mtime is newer than the script + source data.
 *
 * Pairs with prerender.mjs which is responsible for injecting the per-page
 * <meta property="og:image"> lookup. See SEO-ACTION-PLAN-2026-05-03.md §T2.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync, readdirSync } from 'fs';
import { join, dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const OUT_DIR = join(ROOT, 'public', 'og');
const BLOGS_JSON = join(ROOT, 'src', 'data', 'blogs.json');
const COMPARISON_JSON = join(ROOT, 'src', 'data', 'comparison-pages.json');
const PRERENDER_JS = join(ROOT, 'scripts', 'prerender.mjs');
const GSC_AUDIT = join(ROOT, 'scripts', 'gsc-audit-2026-04.json');
const SITEMAP_XML = join(ROOT, 'dist', 'sitemap.xml');

const args = process.argv.slice(2);
const FLAG_FORCE = args.includes('--force');
const FLAG_ALL = args.includes('--all');
const TOP_ARG = args.find(a => a.startsWith('--top='));
const TOP_N = TOP_ARG ? parseInt(TOP_ARG.split('=')[1], 10) || 50 : 50;

// ── Brand template config ─────────────────────────────────────────────────────
const W = 1200;
const H = 630;
const BG_COLOR = '#0A2540';      // Atlantis deep navy
const ACCENT = '#3DD9D6';        // teal accent (matches site secondary)
const PADDING = 60;

// CTR override pages — generate these first regardless of impressions ranking.
// Pulled from SEO-ACTION-PLAN-2026-05-03.md §2 page-level CTR bleeders.
const CTR_OVERRIDE_ROUTES = [
  '/blog/cwi-certification-requirements-cost-career-impact',
  '/blog/aerospace-composite-inspection-ndt-methods-guide',
  '/ndt-technician-salary',
  '/blog/risk-based-inspection-rbi-implementation-guide',
  '/blog/ndt-equipment-calibration-and-maintenance-best-practices',
  '/blog/ndt-salary-guide-2026-global',
  '/asnt-certification',
  '/blog/rt-vs-ut-complete-comparison',
  '/api-570-certification',
  '/blog/ndt-salary-guide-2025-global-level-1-2-3',
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function humanizeSlug(slug) {
  if (!slug || slug === '/' || slug === '') return 'Atlantis NDT';
  const cleaned = slug.replace(/^\/+/, '').replace(/\/+/g, ' / ').replace(/-/g, ' ');
  return cleaned.replace(/\b\w/g, c => c.toUpperCase());
}

function safeSlug(route) {
  if (!route || route === '/') return 'home';
  return route.replace(/^\/+/, '').replace(/\/+$/, '').replace(/\//g, '-') || 'home';
}

function escapeXml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Wrap a string into N lines, max ~CHARS_PER_LINE per line, max MAX_LINES lines.
 * Greedy word-wrap; truncates with ellipsis if overflow.
 */
function wrapTitle(title, charsPerLine = 30, maxLines = 3) {
  if (!title) return ['Atlantis NDT'];
  // Strip trailing brand suffix to free up space
  let t = title
    .replace(/\s*\|\s*Atlantis NDT$/i, '')
    .replace(/\s*\|\s*Atlantis$/i, '')
    .trim();
  const words = t.split(/\s+/);
  const lines = [];
  let cur = '';
  for (const w of words) {
    if (!cur) { cur = w; continue; }
    if ((cur + ' ' + w).length <= charsPerLine) cur += ' ' + w;
    else { lines.push(cur); cur = w; if (lines.length === maxLines - 1) break; }
  }
  if (lines.length < maxLines) lines.push(cur);
  // If we still have leftover words, append ellipsis to last line
  const used = lines.join(' ').split(/\s+/).length;
  if (used < words.length) {
    const last = lines[lines.length - 1].replace(/[.,;:!?]+$/, '');
    lines[lines.length - 1] = (last.length > charsPerLine - 1 ? last.slice(0, charsPerLine - 1) : last) + '…';
  }
  return lines.filter(Boolean);
}

/**
 * Pick a font size that fits the longest line into the available width.
 * Approximation: ~0.55 × fontSize px per character for a humanist sans.
 */
function pickFontSize(lines, maxWidthPx) {
  const longest = lines.reduce((m, l) => Math.max(m, l.length), 0);
  const guess = Math.floor(maxWidthPx / (longest * 0.55));
  return Math.max(40, Math.min(72, guess));
}

function buildSvg({ title }) {
  const lines = wrapTitle(title, 30, 3);
  const innerWidth = W - PADDING * 2;
  const fontSize = pickFontSize(lines, innerWidth);
  const lineHeight = Math.round(fontSize * 1.18);
  const blockHeight = lineHeight * lines.length;
  // Vertically center the title block in the middle of the canvas
  const startY = Math.round((H - blockHeight) / 2 + fontSize * 0.85);

  const titleTspans = lines.map((line, i) => {
    const y = startY + i * lineHeight;
    return `<text x="${PADDING}" y="${y}" font-family="Helvetica, Arial, sans-serif" font-size="${fontSize}" font-weight="700" fill="#FFFFFF">${escapeXml(line)}</text>`;
  }).join('\n  ');

  // Subtle vertical accent bar on left edge of title block
  const accentX = PADDING - 20;
  const accentY = startY - fontSize;
  const accentH = blockHeight + 8;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0A2540"/>
      <stop offset="100%" stop-color="#0F1F33"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect x="0" y="0" width="6" height="${H}" fill="${ACCENT}"/>
  <rect x="${accentX}" y="${accentY}" width="6" height="${accentH}" fill="${ACCENT}" opacity="0.85"/>
  <text x="${PADDING}" y="${PADDING + 30}" font-family="Helvetica, Arial, sans-serif" font-size="32" font-weight="800" fill="#FFFFFF" letter-spacing="3">ATLANTIS NDT</text>
  <text x="${PADDING}" y="${PADDING + 60}" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="500" fill="${ACCENT}" letter-spacing="2">PRECISION THROUGH INNOVATION</text>
  ${titleTspans}
  <text x="${W - PADDING}" y="${H - PADDING}" font-family="Helvetica, Arial, sans-serif" font-size="22" font-weight="600" fill="#FFFFFF" fill-opacity="0.7" text-anchor="end">atlantisndt.com</text>
  <text x="${W - PADDING}" y="${H - PADDING + 26}" font-family="Helvetica, Arial, sans-serif" font-size="16" font-weight="400" fill="${ACCENT}" fill-opacity="0.85" text-anchor="end">ASNT Level III • API 510/570/653 • Digital Twins</text>
</svg>`;
}

async function renderPng(svg, outPath) {
  const buffer = Buffer.from(svg, 'utf8');
  // SVG is authored at 1200×630; render at default 72 DPI then resize to be
  // robust against differing librsvg DPI defaults across platforms.
  await sharp(buffer, { density: 72 })
    .resize(W, H, { fit: 'fill' })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(outPath);
}

// ── Source: route → title map ─────────────────────────────────────────────────

function loadBlogTitles() {
  const map = new Map(); // route -> title
  const blogs = JSON.parse(readFileSync(BLOGS_JSON, 'utf8'));
  for (const b of blogs) {
    if (b.slug && b.title) map.set('/blog/' + b.slug, b.title);
  }
  if (existsSync(COMPARISON_JSON)) {
    const cmp = JSON.parse(readFileSync(COMPARISON_JSON, 'utf8'));
    for (const c of cmp) {
      if (c.slug && c.title) map.set('/blog/' + c.slug, c.title);
    }
  }
  return map;
}

function loadCorePagesFromPrerender() {
  const map = new Map();
  if (!existsSync(PRERENDER_JS)) return map;
  const src = readFileSync(PRERENDER_JS, 'utf8');
  // Match objects like: { path: '/foo', title: '...', description: '...' }
  // Accept single OR double quotes for both keys & values.
  const re = /\{\s*path:\s*['"]([^'"]+)['"]\s*,\s*title:\s*['"]([^'"]+)['"]/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    map.set(m[1], m[2]);
  }
  return map;
}

function loadSitemapRoutes() {
  const routes = new Set();
  if (!existsSync(SITEMAP_XML)) return routes;
  const xml = readFileSync(SITEMAP_XML, 'utf8');
  const re = /<loc>https?:\/\/[^/]+(\/[^<]*)<\/loc>/g;
  let m;
  while ((m = re.exec(xml)) !== null) {
    const path = m[1] === '' ? '/' : m[1].replace(/\/$/, '') || '/';
    routes.add(path);
  }
  routes.add('/');
  return routes;
}

function loadGscRanking() {
  // returns ordered array of {page, impressions} sorted desc
  if (!existsSync(GSC_AUDIT)) return [];
  try {
    const j = JSON.parse(readFileSync(GSC_AUDIT, 'utf8'));
    const pages = j?.sites?.['https://atlantisndt.com']?.['28d']?.pages || [];
    return [...pages].sort((a, b) => b.impressions - a.impressions);
  } catch {
    return [];
  }
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

  const blogTitles = loadBlogTitles();
  const coreTitles = loadCorePagesFromPrerender();
  const sitemapRoutes = loadSitemapRoutes();
  const ranking = loadGscRanking();

  // Merge title sources (core wins for static pages; blog wins for /blog/*)
  const titleMap = new Map();
  for (const [k, v] of coreTitles) titleMap.set(k, v);
  for (const [k, v] of blogTitles) titleMap.set(k, v);
  // Always have home
  if (!titleMap.has('/')) titleMap.set('/', 'Atlantis NDT — NDT Consulting, Training & Digital Twins');

  // Build full route set: sitemap ∪ titleMap keys ∪ CTR overrides
  const allRoutes = new Set([...sitemapRoutes, ...titleMap.keys(), ...CTR_OVERRIDE_ROUTES, '/']);

  // Decide priority order
  const priorityOrder = [];
  const pushed = new Set();
  const push = (r) => { if (r && !pushed.has(r)) { pushed.add(r); priorityOrder.push(r); } };

  push('/');
  for (const r of CTR_OVERRIDE_ROUTES) push(r);
  for (const { page } of ranking) push(page);
  for (const r of allRoutes) push(r);

  // Choose target list
  const targets = FLAG_ALL ? priorityOrder : priorityOrder.slice(0, TOP_N);

  // mtime barrier for incremental skip
  const dataMtime = Math.max(
    statSync(BLOGS_JSON).mtimeMs,
    existsSync(PRERENDER_JS) ? statSync(PRERENDER_JS).mtimeMs : 0,
    statSync(fileURLToPath(import.meta.url)).mtimeMs,
  );

  let generated = 0, skipped = 0, errors = 0;
  const errs = [];
  const t0 = Date.now();

  for (let i = 0; i < targets.length; i++) {
    const route = targets[i];
    const slug = safeSlug(route);
    const outPath = join(OUT_DIR, `${slug}.png`);
    const title = titleMap.get(route) || humanizeSlug(route);

    if (!FLAG_FORCE && existsSync(outPath)) {
      try {
        const m = statSync(outPath).mtimeMs;
        if (m >= dataMtime) { skipped++; continue; }
      } catch { /* fall through to regen */ }
    }

    try {
      const svg = buildSvg({ title });
      await renderPng(svg, outPath);
      generated++;
    } catch (e) {
      errors++;
      errs.push({ route, error: e.message });
    }

    if ((i + 1) % 50 === 0) {
      const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
      console.log(`[${i + 1}/${targets.length}] generated=${generated} skipped=${skipped} errors=${errors} (${elapsed}s)`);
    }
  }

  const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
  console.log('\n──── OG image generation summary ────');
  console.log(`Targets considered : ${targets.length}`);
  console.log(`Generated          : ${generated}`);
  console.log(`Skipped (up-to-date): ${skipped}`);
  console.log(`Errors             : ${errors}`);
  console.log(`Output dir         : ${OUT_DIR}`);
  console.log(`Elapsed            : ${elapsed}s`);
  if (errors > 0) {
    console.log('\nFirst 10 errors:');
    for (const e of errs.slice(0, 10)) console.log(`  ${e.route}: ${e.error}`);
  }
  if (!FLAG_ALL) {
    const remaining = priorityOrder.length - targets.length;
    if (remaining > 0) {
      console.log(`\n${remaining} more routes available — run with --all to generate all of them.`);
    }
  }
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
