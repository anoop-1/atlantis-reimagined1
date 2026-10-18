/**
 * Salary sources, 2026-10-18 — one renderer for every layer that shows salary figures.
 * ─────────────────────────────────────────────────────────────────────────────
 * Data: src/data/salary-sources-2026-10.json (passed in; Node and Vite import JSON
 * differently). Used by:
 *   - React: src/components/SalaryLevelPage.tsx (the four level/role pages)
 *   - Crawler: scripts/salary-static-render.mjs (same four pages) and
 *     scripts/seo-editorial-2026-09-12.mjs (/blog/ndt-salary-guide-2026-global,
 *     a published path whose <main> React shows as-is).
 * So the table, the "why they disagree" paragraph and the plan paragraph are the
 * same text everywhere. Markup: [text](/url) links, plain text otherwise (escaped).
 */
import { inlineLinks } from './rank-wave14-2026-10.mjs';

export const SALARY_SOURCES_MARKER = 'data-salary-sources="2026-10"';
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** The "what each published source says" table for the given source ids, in order. */
export function sourceTableHtml(data, ids, heading = 'h2') {
  const rows = ids.map((id) => {
    const s = data.sources[id];
    if (!s) throw new Error(`salary-sources: unknown source id ${id}`);
    return `<tr><th scope="row"><a href="${esc(s.url)}" rel="noopener">${esc(s.label)}</a></th><td>${esc(s.measures)}</td><td>${esc(s.figure)}</td><td>${esc(s.sample)}</td></tr>`;
  }).join('');
  const head = data.columns.map((c) => `<th scope="col">${esc(c)}</th>`).join('');
  return `<section ${SALARY_SOURCES_MARKER} aria-label="${esc(data.tableHeading)}"><${heading}>${esc(data.tableHeading)}</${heading}>`
    + `<div class="table-scroll"><table><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div></section>`;
}

/** "Why NDT salary figures disagree" (+ optional no-level-data line). */
export function whyHtml(data, withNoLevel = false) {
  return `<h2>${esc(data.whyHeading)}</h2><p>${esc(data.why)}</p>${withNoLevel ? `<p>${esc(data.noLevelData)}</p>` : ''}`;
}

/** "From pay data to a plan": Atlantis training facts (p17-rules) with links. */
export function planHtml(data) {
  return `<h2>${esc(data.planHeading)}</h2><p>${inlineLinks(data.plan)}</p>`;
}

/** Every money figure the salary family shows must come from this file (guard for tests). */
export function sourcedFigures(data) {
  const out = new Set();
  const all = [...Object.values(data.sources).flatMap((s) => [s.figure, s.sample]), data.industry.text];
  for (const t of all) for (const m of String(t).matchAll(/\$\d[\d,]*/g)) out.add(m[0]);
  return out;
}

export { inlineLinks };
