/**
 * Inspection release 2026-10-18 — one renderer for both layers.
 * ─────────────────────────────────────────────────────────────────────────────
 * Copy lives in src/data/inspection-release-2026-10-18.json and is passed in (Node and
 * Vite import JSON differently; rank-wave14-2026-10.mjs uses the same pattern).
 *   - Crawler: scripts/inspection-release-2026-10-18.mjs — sections and visible FAQ on
 *     the pages in `pages`, full bodies for the `rewrites` owners (power, maritime), and
 *     FAQPage + Service JSON-LD built from the same Q&A.
 *   - React: every page that gets sections is listed in publishedPaths (src/lib/published-pages.ts),
 *     so PublicationBoundary shows the crawler <main> to visitors; nothing is React-only. Entries
 *     with no sections (the PV and PAUT owners) only add a Service node to the built <head>.
 *
 * Markup: [text](/url) links (https links get rel="noopener"), plain text otherwise.
 */

export const INSP18_MARKER = 'data-insp18';

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function inlineLinks(s) {
  return esc(s).replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_m, t, h) => (h.startsWith('https://') ? `<a href="${h}" rel="noopener">${t}</a>` : `<a href="${h}">${t}</a>`));
}
export const plainText = (s) => String(s ?? '').replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '$1');
export const linksIn = (s) => [...String(s ?? '').matchAll(/\[([^\]]+)\]\(([^)\s]+)\)/g)].map((m) => ({ text: m[1], href: m[2].replace(/&amp;/g, '&') }));

function sectionHtml(s) {
  const out = [`<section ${INSP18_MARKER}="section" id="${esc(s.id)}">`, `<h2>${esc(s.h2)}</h2>`];
  for (const p of s.paragraphs) out.push(`<p>${inlineLinks(p)}</p>`);
  if (s.sources && s.sources.length) out.push(`<p class="sources"><small>Sources: ${s.sources.map(esc).join('; ')}.</small></p>`);
  out.push('</section>');
  return out.join('');
}

export function faqHtml(faq) {
  if (!faq || !faq.items || !faq.items.length) return '';
  return `<section ${INSP18_MARKER}="faq" aria-label="${esc(faq.h2)}"><h2>${esc(faq.h2)}</h2>`
    + faq.items.map((f) => `<h3>${esc(f.q)}</h3><p>${inlineLinks(f.a)}</p>`).join('')
    + '</section>';
}

/** Sections for a page in `pages` (inserted by the crawler hook). */
export function sectionsHtml(data, path) {
  const e = data && data.pages && data.pages[path];
  return e ? e.sections.map(sectionHtml).join('\n') : '';
}

/** Full body for a rewrite owner (header nav + <main>), or ''. */
export function rewriteBodyHtml(data, path) {
  const r = data && data.rewrites && data.rewrites[path];
  if (!r) return '';
  const lead = r.intro.startsWith('Atlantis NDT ') ? `<strong>Atlantis NDT</strong> ${inlineLinks(r.intro.slice(13))}` : inlineLinks(r.intro);
  const out = [`  ${r.nav}`, '  <main>', `    <h1>${esc(r.h1)}</h1>`, `    <p ${INSP18_MARKER}="intro">${lead}</p>`];
  for (const s of r.sections) out.push(`    ${sectionHtml(s)}`);
  if (r.receive) out.push(`    <section ${INSP18_MARKER}="receive"><h2>What you receive</h2><ul>${r.receive.map((x) => `<li>${inlineLinks(x)}</li>`).join('')}</ul><p>${inlineLinks(data.area)}</p></section>`);
  if (r.faq) out.push(`    ${faqHtml(r.faq)}`);
  if (r.links) out.push(`    <p ${INSP18_MARKER}="links">${inlineLinks(r.links)}</p>`);
  out.push('  </main>');
  return out.join('\n');
}

/** Q&A shown on the page (both kinds), for FAQPage JSON-LD. */
export function faqItems(data, path) {
  const e = (data.pages && data.pages[path]) || (data.rewrites && data.rewrites[path]);
  return e && e.faq ? e.faq.items : [];
}

export function serviceNode(data, path, site = 'https://atlantisndt.com') {
  const e = (data.pages && data.pages[path]) || (data.rewrites && data.rewrites[path]);
  if (!e || !e.service) return null;
  return {
    '@type': 'Service',
    '@id': `${site}${path}#service`,
    name: e.service.name,
    serviceType: e.service.serviceType,
    url: `${site}${path}`,
    provider: { '@id': `${site}/#organization` },
    areaServed: { '@type': 'Country', name: 'United States' },
  };
}

/** Every string a page shows, for the guard (plain text, links kept separately). */
export function allCopy(data) {
  const out = [data.area];
  const add = (e) => {
    for (const s of e.sections || []) out.push(s.h2, ...s.paragraphs, ...(s.sources || []));
    if (e.faq) { out.push(e.faq.h2); for (const f of e.faq.items) out.push(f.q, f.a); }
    if (e.intro) out.push(e.h1, e.intro);
    for (const x of e.receive || []) out.push(x);
    if (e.links) out.push(e.links);
    if (e.service) out.push(e.service.name, e.service.serviceType);
  };
  for (const e of Object.values(data.pages || {})) add(e);
  for (const e of Object.values(data.rewrites || {})) add(e);
  return out;
}
