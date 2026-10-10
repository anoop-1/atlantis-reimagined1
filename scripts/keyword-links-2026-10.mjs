/**
 * Keyword-anchored related links — crawler-HTML side (CLAUDE.md §50).
 * Rules and anchors: src/data/keyword-links-2026-10.mjs (also read by
 * src/components/KeywordLinksBlock.tsx). Inserted before the last </main>, after the
 * §49 coverage block and before the §48 next-step block (hook order in prerender.mjs).
 */
import { keywordLinksFor, KEYWORD_LINK_TARGETS } from '../src/data/keyword-links-2026-10.mjs';

export const KEYWORD_LINKS_MARKER = 'data-keyword-links="2026-10"';
export const keywordLinkStats = { pages: 0, links: 0, byFamily: {}, byTarget: {} };
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function keywordLinksHtml(path) {
  const b = keywordLinksFor(path);
  if (!b) return '';
  const lis = b.links.map(([h, a]) => `<li><a href="${esc(h)}">${esc(a)}</a></li>`).join('');
  return `
    <nav ${KEYWORD_LINKS_MARKER} aria-label="Related services">
      <p><strong>${esc(b.intro)}</strong></p>
      <ul>${lis}</ul>
    </nav>
`;
}

export function applyKeywordLinksRoute(route) {
  const p = route?.path;
  if (!p || typeof route.bodyContent !== 'string' || route.bodyContent.includes(KEYWORD_LINKS_MARKER)) return route;
  const b = keywordLinksFor(p);
  if (!b) return route;
  const html = keywordLinksHtml(p);
  const i = route.bodyContent.lastIndexOf('</main>');
  const body = i >= 0 ? route.bodyContent.slice(0, i) + html + route.bodyContent.slice(i) : route.bodyContent + html;
  keywordLinkStats.pages++;
  keywordLinkStats.links += b.links.length;
  keywordLinkStats.byFamily[b.family] = (keywordLinkStats.byFamily[b.family] || 0) + 1;
  for (const [h] of b.links) keywordLinkStats.byTarget[h] = (keywordLinkStats.byTarget[h] || 0) + 1;
  return { ...route, bodyContent: body };
}

/** Every target is a built page; anchors carry no prices or claims. */
export function assertKeywordLinksClean(knownPaths) {
  const price = /[$£€₹]\s?\d|\bper (day|hour)\b|\bday[- ]rate\b|\bpric(e|ing)\b/i;
  const claims = /\b(?:certified|accredited|approved|guaranteed|#1|best|leading|top-rated)\b/i;
  for (const [k, t] of Object.entries(KEYWORD_LINK_TARGETS)) {
    if (knownPaths && !knownPaths.has(t.href)) throw new Error(`keyword-links: target ${k} ${t.href} is not a built page`);
    for (const a of t.anchors) {
      if (price.test(a)) throw new Error(`keyword-links: pricing pattern in anchor "${a}"`);
      if (claims.test(a)) throw new Error(`keyword-links: claim word in anchor "${a}"`);
      const stripped = a.replace(/\b(?:API|ISO|NAS|SNT-TC)[- ]?\d+[A-Z0-9.-]*/g, '');
      if (/\d/.test(stripped.replace(/\b3D\b|\bLevel [123]\b/g, ''))) throw new Error(`keyword-links: numeral in anchor "${a}"`);
    }
  }
  return true;
}
