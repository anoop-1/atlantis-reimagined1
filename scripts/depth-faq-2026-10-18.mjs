/**
 * Visible depth-page FAQ — crawler-HTML side (2026-10-18, consulting workstream).
 * Rule, enablement and hold patterns: src/data/depth-faq-2026-10-18.mjs (read by React's
 * DepthPage.tsx too, so both layers show the same Q&A).
 *
 * Hook (prerender.mjs, where the depth routes join the route list):
 *   routes.push(...withVisibleDepthFaq(DEPTH_PAGE_ROUTES));
 * For each enabled page with visible items it inserts one FAQ section after the facets
 * (before the "Request a consultation" line, else before </main>) and replaces the
 * route's FAQPage node with exactly those items. Held questions (HOLD patterns) are shown
 * nowhere; an enabled page whose every question is held loses its FAQPage node. Pages not
 * enabled are returned unchanged. Idempotent (marker check).
 */
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { DEPTH_FAQ_MARKER, DEPTH_FAQ_HEADING, depthFaqEnabled, depthFaqFor, depthFaqSchema } from '../src/data/depth-faq-2026-10-18.mjs';
import { esc, renderInline } from './depth-page-render.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const RECORDS = new Map(JSON.parse(readFileSync(join(ROOT, 'src/data/depth-pages.json'), 'utf-8')).map((r) => [r.slug, r]));

export const depthFaqStats = { pages: 0, items: 0, heldQuestions: 0, partlyHeld: [], schemaDropped: [], facetOnly: 0, notEnabled: 0 };

export function depthFaqHtml(items) {
  return `    <section ${DEPTH_FAQ_MARKER} aria-label="${esc(DEPTH_FAQ_HEADING)}"><h2>${esc(DEPTH_FAQ_HEADING)}</h2>`
    + items.map((f) => `<h3>${esc(f.q)}</h3><p>${renderInline(f.a)}</p>`).join('')
    + '</section>';
}

function withoutFaqPage(sd) {
  if (!sd) return sd;
  if (Array.isArray(sd['@graph'])) return { ...sd, '@graph': sd['@graph'].filter((n) => !(n && n['@type'] === 'FAQPage')) };
  return sd['@type'] === 'FAQPage' ? undefined : sd;
}

const CONTACT_LINE = '    <p><a href="/contact">Request a consultation</a></p>';

function withFaq(route) {
  const rec = RECORDS.get(route.path);
  const { items, held, reason } = depthFaqFor(rec);
  depthFaqStats.heldQuestions += held.length;
  if (!items.length) {
    if (reason === 'not enabled') { depthFaqStats.notEnabled++; return route; }
    if (reason === 'all repeat facets' || reason === 'no faq') { depthFaqStats.facetOnly++; return route; }
    // Every question is held: nothing is shown, so FAQPage goes too (schema = visible Q&A).
    depthFaqStats.schemaDropped.push(`${route.path} — ${reason}`);
    return { ...route, structuredData: withoutFaqPage(route.structuredData) };
  }
  if (held.length) depthFaqStats.partlyHeld.push(`${route.path} — ${held.length} held: ${held.map((h) => h.reason).join('; ')}`);
  let body = String(route.bodyContent || '');
  if (body.includes(DEPTH_FAQ_MARKER)) return route;
  const block = depthFaqHtml(items);
  const at = body.lastIndexOf(CONTACT_LINE);
  if (at >= 0) body = `${body.slice(0, at)}${block}\n${body.slice(at)}`;
  else {
    const m = body.lastIndexOf('</main>');
    body = m >= 0 ? `${body.slice(0, m)}${block}\n  ${body.slice(m)}` : `${body}\n${block}`;
  }
  const sd = route.structuredData;
  const faqNode = depthFaqSchema(items);
  let structuredData;
  if (sd && Array.isArray(sd['@graph'])) {
    const graph = sd['@graph'].filter((n) => !(n && n['@type'] === 'FAQPage'));
    structuredData = { ...sd, '@graph': [...graph, faqNode] };
  } else if (sd && sd['@type'] && sd['@type'] !== 'FAQPage') {
    structuredData = { '@context': 'https://schema.org', '@graph': [sd, faqNode] };
  } else {
    structuredData = { '@context': 'https://schema.org', '@graph': [faqNode] };
  }
  depthFaqStats.pages++;
  depthFaqStats.items += items.length;
  return { ...route, bodyContent: body, structuredData };
}

const visibleText = (h) => String(h || '').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&#39;|&rsquo;|’/g, "'")
  .replace(/&quot;|“|”/g, '"').replace(/\s+/g, ' ').toLowerCase().trim();

/**
 * Build guard: on every enabled page, each FAQPage question is visible in the crawler body.
 * @param {object[]} routes output of withVisibleDepthFaq
 */
export function assertDepthFaqParity(routes) {
  const bad = [];
  for (const r of routes) {
    if (!depthFaqEnabled(r.path)) continue;
    const sd = r.structuredData;
    const faq = (sd ? (Array.isArray(sd['@graph']) ? sd['@graph'] : [sd]) : []).find((n) => n && n['@type'] === 'FAQPage');
    if (!faq) continue;
    const vis = visibleText(r.bodyContent);
    for (const q of faq.mainEntity || []) if (!vis.includes(visibleText(q.name))) bad.push(`${r.path}: "${q.name}"`);
  }
  if (bad.length) throw new Error(`depth-faq: ${bad.length} FAQPage question(s) not visible on the page:\n  ${bad.slice(0, 10).join('\n  ')}`);
  return true;
}

/** @param {object[]} routes DEPTH_PAGE_ROUTES */
export function withVisibleDepthFaq(routes) {
  const out = routes.map(withFaq);
  assertDepthFaqParity(out);
  return out;
}
