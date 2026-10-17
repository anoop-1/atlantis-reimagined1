// Canadian training pages — shared helpers (2026-10-17), used by both layers:
//   React:   src/components/CanadaCertificationBlock.tsx, GeoHubRoute.tsx,
//            CorporateTrainingLocationPage.tsx, src/lib/na-training.ts
//   Crawler: scripts/canada-certification-2026-10.mjs, scripts/training-na.mjs,
//            scripts/training-industry-city.mjs, scripts/ctr-wave9-overrides.mjs
// The copy itself lives in src/data/canada-certification-2026-10.json (one source
// per fact, CLAUDE.md §19.1 / §46.3). Pure functions only: no fs, no DOM.

const norm = (p) => (String(p || '').replace(/\/+$/, '') || '/');

/** True when the path is one of the Canadian training pages in the JSON. */
export function isCanadaTrainingPath(data, path) {
  return Boolean(data && Array.isArray(data.paths) && data.paths.includes(norm(path)));
}

/** { title, description, h1 } for a Canadian training page, or null. */
export function canadaPageMeta(data, path) {
  const p = norm(path);
  if (!isCanadaTrainingPath(data, p)) return null;
  const m = data.pages && data.pages[p];
  return m && m.title && m.description && m.h1 ? m : null;
}

const WRAPPER = /<(\/?)(section|div|article|aside|figure|header|footer|details|nav|form)\b[^>]*>/gi;

/**
 * Where the SNT-TC-1A offer goes on a page without the Canada lead: in front of
 * the first <h2> that follows `from` (normally the end of the <h1>). When that
 * <h2> sits inside a wrapper opened after `from` (e.g. <section><h2>), the offer
 * goes in front of the outermost such wrapper, so it never ends up nested in
 * someone else's section. Returns -1 when there is no <h2> before `end`.
 */
export function firstH2InsertIndex(html, from = 0, end = -1) {
  const s = String(html || '');
  const h2 = /<h2[\s>]/gi;
  h2.lastIndex = Math.max(0, from);
  const m = h2.exec(s);
  if (!m || (end >= 0 && m.index > end)) return -1;
  const stack = [];
  const t = new RegExp(WRAPPER.source, 'gi');
  t.lastIndex = Math.max(0, from);
  let x;
  while ((x = t.exec(s)) !== null && x.index < m.index) {
    const tag = x[2].toLowerCase();
    if (x[1]) {
      for (let i = stack.length - 1; i >= 0; i--) if (stack[i].tag === tag) { stack.length = i; break; }
    } else if (!/\/>$/.test(x[0])) {
      stack.push({ tag, index: x.index });
    }
  }
  return stack.length ? stack[0].index : m.index;
}
