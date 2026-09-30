// Shared HTML helpers for the software-assets content generators (2026-09-29).
// Content is authored in these .mjs modules (template literals, no JSON
// escaping) and emitted as JSON under src/data/software-assets/ by build.mjs,
// so the React layer and the prerender layer render the exact same HTML.

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const h2 = (t) => `<h2>${t}</h2>`;
export const h3 = (t) => `<h3>${t}</h3>`;
export const p = (t) => `<p>${t}</p>`;
export const ul = (items) => `<ul>${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;
export const ol = (items) => `<ol>${items.map((i) => `<li>${i}</li>`).join('')}</ol>`;

/** A simple captioned table; cells are trusted HTML. */
export function table(caption, head, rows, cls = '') {
  return `<table${cls ? ` class="${cls}"` : ''}><caption>${caption}</caption><thead><tr>${head
    .map((h) => `<th scope="col">${h}</th>`)
    .join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
}

/** Field/value table used for report header blocks. */
export function fieldTable(caption, rows) {
  return `<table class="report-fields"><caption>${caption}</caption><tbody>${rows
    .map(([f, v]) => `<tr><th scope="row">${f}</th><td>${v}</td></tr>`)
    .join('')}</tbody></table>`;
}

export const contact = (service, subject, anchor) =>
  `<a href="/contact?service=${service}&amp;subject=${encodeURIComponent(subject)}">${anchor}</a>`;

export function faqHtml(faqs) {
  return h2('Frequently asked questions') + faqs.map((f) => h3(f.q) + p(f.a)).join('');
}

/** Visible-text word count of an HTML fragment. */
export function words(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').split(/\s+/).filter(Boolean).length;
}

/** Strip tags for schema text. */
export const plain = (html) => html.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
