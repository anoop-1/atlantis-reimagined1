/**
 * Crawler-HTML renderer for one depth page record (src/data/depth-pages.json shape).
 * ─────────────────────────────────────────────────────────────────────────────
 * Extracted from scripts/build-depth-pages.mjs on 2026-10-18 so the builder and any
 * targeted re-render of a record (scripts/depth-faq-2026-10-18.mjs callers, one-off
 * record edits) share one implementation. The React twin is src/components/DepthPage.tsx;
 * the two must render the same content in the same order.
 *
 * Order: H1 → answer block → byline → lead sections (optional `lead`, 2026-10-18: the
 * service sections a buyer reads first) → captioned table → sections → facets → contact.
 * The visible FAQ (`faq`) is added at prerender time by scripts/depth-faq-2026-10-18.mjs,
 * not here, so a record re-rendered by this function never carries it twice.
 */

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * Escape a field, THEN turn its markdown links into real anchors.
 *
 * Order matters: escaping first means any stray angle bracket in the prose is
 * neutralised, and only the anchors this function emits carry live markup. The
 * href is restricted to site-relative paths and https URLs — a link written as
 * javascript: or data: is dropped back to plain text rather than rendered.
 */
const MD_LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;
export function renderInline(s) {
  return esc(s).replace(MD_LINK_RE, (whole, text, href) => {
    const h = String(href).trim();
    if (!/^(\/[^\s]*|https:\/\/[^\s]+)$/.test(h)) return text;
    return `<a href="${h}">${text}</a>`;
  });
}

function sectionHtml(sections, parts) {
  for (const s of sections || []) {
    parts.push(`    <h2>${esc(s.heading)}</h2>`);
    for (const para of s.paragraphs) parts.push(`    <p>${renderInline(para)}</p>`);
  }
}

export function renderBody(p) {
  const parts = [];
  parts.push('  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/training">Training</a><a href="/erp">ERP</a><a href="/digital-twins">Digital Twins</a><a href="/contact">Contact</a></nav></header>');
  parts.push('  <main>');
  parts.push(`    <h1>${esc(p.h1)}</h1>`);
  parts.push(
    '    <section data-citation-block="answer" aria-label="Direct answer">' +
    `<p>${renderInline(p.answer)}</p><p>${renderInline(p.expansion)}</p><p><strong>Source:</strong> ${esc(p.source)}</p></section>`
  );
  parts.push(
    '    <div data-citation-block="byline">Technically reviewed by <a href="/authors/anoop-rayavarapu">Anoop Rayavarapu</a> — ASNT NDT Level III (UT, RT, MT, PT, VT)</div>'
  );
  sectionHtml(p.lead, parts);
  const t = p.table;
  parts.push(
    '    <figure data-citation-block="table"><table><caption>' + esc(t.caption) + '</caption>' +
    '<thead><tr>' + t.columns.map((c) => `<th scope="col">${esc(c)}</th>`).join('') + '</tr></thead><tbody>' +
    t.rows.map((r) => '<tr>' + r.map((c, i) => (i === 0 ? `<th scope="row">${esc(c)}</th>` : `<td>${esc(c)}</td>`)).join('') + '</tr>').join('') +
    '</tbody></table>' + (t.note ? `<figcaption>${esc(t.note)}</figcaption>` : '') + '</figure>'
  );
  sectionHtml(p.sections, parts);
  for (const f of p.facets || []) {
    parts.push(`    <section data-citation-block="facet"><h2>${esc(f.q)}</h2><p>${renderInline(f.a)}</p></section>`);
  }
  parts.push('    <p><a href="/contact">Request a consultation</a></p>');
  parts.push('  </main>');
  return parts.join('\n');
}
