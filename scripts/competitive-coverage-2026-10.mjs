/**
 * 2026-10-10 competitor + keyword cycle — crawler-HTML side (CLAUDE.md §49).
 * ─────────────────────────────────────────────────────────────────────────────
 * Why: US competitor pages in each segment (training, Level III, inspection
 * services, NDT software, digital twin, simulator, 3D scanning) are built around
 * keywords and buyer questions the Atlantis owning pages did not use. Measured on
 * the built HTML before this change: 145 of 365 segment keywords missing from the
 * owning pages, several with real demand in scripts/_audit-all-queries.json
 * (e.g. "tofd inspection" 156 impr p15, "ultrasonic thickness measurement" 142 impr
 * p8.5, "laser scanning services" 719 impr p48, "ndt level 3 consultant" 97 impr p31).
 *
 * One block per owning page from src/data/competitive-coverage-2026-10.json, the
 * same file React renders (src/components/CompetitiveCoverageBlock.tsx). Inserted
 * before the last </main>, ahead of the §48 next-step block. Visible Q&A only.
 */
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA = JSON.parse(readFileSync(join(__dirname, '..', 'src/data/competitive-coverage-2026-10.json'), 'utf-8')).blocks;
export const COVERAGE_MARKER = 'data-coverage="2026-10"';
export const coverageStats = { blocks: 0 };
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function coverageHtml(path) {
  const b = DATA[path];
  if (!b) return '';
  const intro = b.intro.map((p) => `<p>${esc(p)}</p>`).join('\n      ');
  const points = b.points.map(([t, x]) => `<li><strong>${esc(t)}.</strong> ${esc(x)}</li>`).join('');
  const faq = b.faq.map((f) => `<h3>${esc(f.q)}</h3>\n      <p>${esc(f.a)}</p>`).join('\n      ');
  return `
    <section ${COVERAGE_MARKER} aria-label="${esc(b.h2)}">
      <h2>${esc(b.h2)}</h2>
      ${intro}
      <ul>${points}</ul>
      ${faq}
    </section>
`;
}

export function applyCoverageRoute(route) {
  const p = route?.path;
  if (!p || !DATA[p] || typeof route.bodyContent !== 'string' || route.bodyContent.includes(COVERAGE_MARKER)) return route;
  const html = coverageHtml(p);
  const i = route.bodyContent.lastIndexOf('</main>');
  const body = i >= 0 ? route.bodyContent.slice(0, i) + html + route.bodyContent.slice(i) : route.bodyContent + html;
  coverageStats.blocks++;
  return { ...route, bodyContent: body };
}

/** Guards: no prices; software pages carry no numerals outside standards names; every block's path is a built page. */
export function assertCoverageClean(knownPaths) {
  const price = /[$£€₹]\s?\d|\bper (day|hour)\b|\bday[- ]rate\b|\bpric(e|ing) (from|starts)/i;
  const claims = /\b(?:ISO 27001[- ]certified|accredited by|approved by (?:ASNT|API|Boeing)|recogni[sz]ed training organi[sz]ation status|\d{2,}\+ (?:clients|customers|projects))\b/i;
  for (const [path, b] of Object.entries(DATA)) {
    const text = [b.h2, ...b.intro, ...b.points.flat(), ...b.faq.flatMap((f) => [f.q, f.a])].join(' ');
    if (price.test(text)) throw new Error(`competitive-coverage: pricing pattern on ${path}`);
    if (claims.test(text)) throw new Error(`competitive-coverage: unevidenced claim pattern on ${path}`);
    if (/software|\/erp/.test(path)) {
      const stripped = text.replace(/\b(?:API|ISO|NAS|EN|ASME|AWS|CP|SNT-TC)[- ]?\d+[A-Z0-9.-]*/g, '').replace(/SNT-TC-1A/g, '');
      if (/\d/.test(stripped)) throw new Error(`competitive-coverage: numeral in software copy on ${path}`);
    }
    if (knownPaths && !knownPaths.has(path)) throw new Error(`competitive-coverage: ${path} is not a built page`);
  }
  return true;
}
