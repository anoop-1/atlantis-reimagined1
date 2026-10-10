/**
 * Real product screenshots — crawler side (CLAUDE.md §53). Same data as
 * src/components/ProductScreenshotsBlock.tsx: src/data/product-screenshots.json.
 * Emits a <figure> gallery before the last </main>, after the §52 video facade and ahead of
 * the §49 coverage block (call order in prerender.mjs decides the position).
 */
import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DATA = JSON.parse(readFileSync(join(ROOT, 'src/data/product-screenshots.json'), 'utf-8'));
export const SCREENS_MARKER = 'data-product-screens="2026-10"';
export const screenshotStats = { pages: 0 };
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const galleryFor = (p) => DATA.galleries.find((g) => g.pages.includes(p));

export function applyScreenshotsRoute(route) {
  const p = route?.path;
  const g = p && galleryFor(p);
  if (!g || typeof route.bodyContent !== 'string' || route.bodyContent.includes(SCREENS_MARKER)) return route;
  const figs = g.shots.map((id) => {
    const s = DATA.shots[id];
    return `<figure><a href="${esc(s.src)}"><img src="${esc(s.src)}" alt="${esc(s.alt)}" width="${DATA.width}" height="${DATA.height}" loading="lazy" decoding="async"></a><figcaption>${esc(s.caption)}</figcaption></figure>`;
  }).join('\n      ');
  const html = `
    <section ${SCREENS_MARKER} aria-label="${esc(g.heading)}">
      <h2>${esc(g.heading)}</h2>
      <p>${esc(g.intro)}</p>
      ${figs}
    </section>
`;
  const i = route.bodyContent.lastIndexOf('</main>');
  const body = i >= 0 ? route.bodyContent.slice(0, i) + html + route.bodyContent.slice(i) : route.bodyContent + html;
  screenshotStats.pages++;
  return { ...route, bodyContent: body };
}

export function assertScreenshotsClean(knownPaths) {
  for (const [id, s] of Object.entries(DATA.shots)) {
    if (!existsSync(join(ROOT, 'public', s.src))) throw new Error(`product-screenshots: missing file for ${id} (${s.src})`);
    if (/\d/.test(s.alt + s.caption)) throw new Error(`product-screenshots: numeral in software copy (${id})`);
  }
  const seen = new Set();
  for (const g of DATA.galleries) {
    if (/\d/.test(g.heading + g.intro)) throw new Error(`product-screenshots: numeral in gallery copy (${g.id})`);
    for (const id of g.shots) if (!DATA.shots[id]) throw new Error(`product-screenshots: unknown shot ${id} in ${g.id}`);
    for (const p of g.pages) {
      if (seen.has(p)) throw new Error(`product-screenshots: ${p} is in two galleries`);
      seen.add(p);
      if (knownPaths && !knownPaths.has(p)) throw new Error(`product-screenshots: ${p} is not a built page`);
    }
  }
  return true;
}
