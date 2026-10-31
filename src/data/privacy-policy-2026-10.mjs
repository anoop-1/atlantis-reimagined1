// /privacy-policy — 2026-10-31 (owner): "add a page atlantisndt.com/privacy-policy … do not
// show it in navigation or footer, just the URL should exist".
//
// One model for both layers. Content: src/data/privacy-policy-2026-10.json.
//   * Crawler: scripts/privacy-policy-page.mjs wraps privacyArticleHtml() in the static
//     header + <main>.
//   * React: src/pages/PrivacyPolicy.tsx renders the same privacyArticleHtml() string, so
//     the visible page and the indexed copy cannot drift.
// Functions take the data as an argument so this file runs in Vite and in Node without
// JSON-import syntax. Inline markup in the JSON: **bold** and [label](href) only.
//
// Never link /privacy-policy from the navigation or the footer (owner). The keyword-link
// block (src/data/keyword-links-2026-10.mjs) and GlobalEnquireCTA already exclude it.

export const PRIVACY_PATH = '/privacy-policy';
const SITE = 'https://atlantisndt.com';

// Same class strings in both layers. This file is in tailwind.config.ts `content`.
export const PP_CLASS = {
  article: 'container mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-16',
  h1: 'text-3xl md:text-5xl font-bold mb-3',
  dates: 'text-sm text-muted-foreground mb-6',
  intro: 'text-lg text-muted-foreground leading-relaxed mb-6',
  summary: 'rounded-xl border border-primary/30 bg-primary/5 p-5 md:p-6 mb-10',
  summaryH2: 'text-xl font-semibold mb-3',
  toc: 'mb-12',
  tocH2: 'text-lg font-semibold mb-3',
  tocList: 'grid sm:grid-cols-2 gap-x-6 gap-y-1 text-sm',
  section: 'mb-10 scroll-mt-24',
  h2: 'text-2xl md:text-3xl font-bold mb-4',
  h3: 'text-lg md:text-xl font-semibold mt-6 mb-3',
  p: 'text-muted-foreground leading-relaxed mb-4',
  ul: 'list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed mb-4',
  link: 'text-primary underline underline-offset-2 break-words',
  strong: 'font-semibold text-foreground',
  // Below md each row stacks as a labelled card (the cell's column name comes from
  // data-label), so no column hides behind a horizontal scroll on a phone.
  tableWrap: 'mb-4 rounded-lg border border-border overflow-hidden',
  table: 'block md:table w-full text-sm text-left',
  thead: 'hidden md:table-header-group',
  tbody: 'block md:table-row-group',
  tr: 'block md:table-row border-t border-border first:border-t-0 md:first:border-t',
  th: 'bg-secondary/50 px-3 py-2 font-semibold text-foreground align-top',
  td: 'block md:table-cell px-3 py-1 first:pt-3 last:pb-3 md:py-2 md:first:pt-2 md:last:pb-2 align-top text-muted-foreground before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-foreground md:before:content-none',
};

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Escape, then render **bold** and [label](href). */
export function inlineHtml(text) {
  const out = [];
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let m;
  const s = String(text);
  while ((m = re.exec(s))) {
    out.push(esc(s.slice(last, m.index)));
    if (m[1] !== undefined) {
      out.push(`<strong class="${PP_CLASS.strong}">${esc(m[1])}</strong>`);
    } else {
      const href = m[3];
      const external = /^https?:\/\//.test(href);
      const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : '';
      out.push(`<a href="${esc(href)}" class="${PP_CLASS.link}"${attrs}>${esc(m[2])}</a>`);
    }
    last = re.lastIndex;
  }
  out.push(esc(s.slice(last)));
  return out.join('');
}

function blockHtml(b) {
  if (b.p !== undefined) return `<p class="${PP_CLASS.p}">${inlineHtml(b.p)}</p>`;
  if (b.h3 !== undefined) return `<h3 class="${PP_CLASS.h3}">${inlineHtml(b.h3)}</h3>`;
  if (b.ul) return `<ul class="${PP_CLASS.ul}">${b.ul.map((li) => `<li>${inlineHtml(li)}</li>`).join('')}</ul>`;
  if (b.table) {
    const { head, rows } = b.table;
    return `<div class="${PP_CLASS.tableWrap}"><table class="${PP_CLASS.table}"><thead class="${PP_CLASS.thead}"><tr>${head
      .map((h) => `<th scope="col" class="${PP_CLASS.th}">${inlineHtml(h)}</th>`)
      .join('')}</tr></thead><tbody class="${PP_CLASS.tbody}">${rows
      .map((r) => `<tr class="${PP_CLASS.tr}">${r.map((c, i) => `<td data-label="${esc(head[i])}" class="${PP_CLASS.td}">${inlineHtml(c)}</td>`).join('')}</tr>`)
      .join('')}</tbody></table></div>`;
  }
  throw new Error(`privacy-policy: unknown block ${JSON.stringify(b)}`);
}

/** The policy itself: H1, dates, intro, summary, contents and every section. */
export function privacyArticleHtml(d) {
  return `<article class="${PP_CLASS.article}">
<h1 class="${PP_CLASS.h1}">${esc(d.h1)}</h1>
<p class="${PP_CLASS.dates}">Effective date: <time datetime="${esc(d.effectiveDate)}">${esc(d.effectiveLabel)}</time> · Last updated: ${esc(d.updatedLabel)}</p>
${d.intro.map((p) => `<p class="${PP_CLASS.intro}">${inlineHtml(p)}</p>`).join('\n')}
<aside class="${PP_CLASS.summary}"><h2 class="${PP_CLASS.summaryH2}">${esc(d.summaryHeading)}</h2><ul class="${PP_CLASS.ul}">${d.summary
    .map((li) => `<li>${inlineHtml(li)}</li>`)
    .join('')}</ul></aside>
<nav class="${PP_CLASS.toc}" aria-label="Contents"><h2 class="${PP_CLASS.tocH2}">Contents</h2><ol class="${PP_CLASS.tocList}">${d.sections
    .map((s) => `<li><a href="#${esc(s.id)}" class="${PP_CLASS.link}">${esc(s.heading)}</a></li>`)
    .join('')}</ol></nav>
${d.sections
  .map((s) => `<section id="${esc(s.id)}" class="${PP_CLASS.section}"><h2 class="${PP_CLASS.h2}">${esc(s.heading)}</h2>${s.blocks.map(blockHtml).join('')}</section>`)
  .join('\n')}
</article>`;
}

export function privacyPageSchema(d) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE}${PRIVACY_PATH}#webpage`,
    url: `${SITE}${PRIVACY_PATH}`,
    name: d.h1,
    description: d.description,
    inLanguage: 'en',
    datePublished: d.effectiveDate,
    dateModified: d.effectiveDate,
    isPartOf: { '@type': 'WebSite', name: 'Atlantis NDT', url: SITE },
    publisher: {
      '@type': 'Organization',
      name: 'Atlantis NDT',
      legalName: 'Atlantis Engineering Consultants LLC',
      url: SITE,
      email: 'info@atlantisndt.com',
    },
  };
}

/** Build checks: no NAS 410, every in-page anchor resolves, no unknown markup left over. */
export function assertPrivacyPolicyClean(d, html) {
  const problems = [];
  if (/nas[ -]?410/i.test(html)) problems.push('mentions NAS 410');
  if (/\*\*|\]\(/.test(html)) problems.push('unrendered inline markup');
  const ids = new Set(d.sections.map((s) => s.id));
  for (const [, id] of html.matchAll(/href="#([^"]+)"/g)) if (!ids.has(id)) problems.push(`broken anchor #${id}`);
  if (d.title.length > 62) problems.push(`title ${d.title.length} chars`);
  if (d.description.length < 120 || d.description.length > 158) problems.push(`description ${d.description.length} chars`);
  if (problems.length) throw new Error(`privacy-policy: ${problems.join('; ')}`);
}
