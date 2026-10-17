/**
 * Ranking release 2026-10-17 (CLAUDE.md §58) — one renderer for both layers.
 * ─────────────────────────────────────────────────────────────────────────────
 * Copy lives in src/data/rank-wave14-2026-10.json and is passed in (Node and Vite
 * import JSON differently; geo-hierarchy.mjs uses the same pattern).
 *   - Crawler: scripts/rank-wave14-2026-10.mjs (applyRankWave14Route, just before
 *     applyOwnerLinksRoute) and scripts/seo-editorial-2026-09-12.mjs (the API exam
 *     schedule page, whose <main> is replaced after prerender).
 *   - React: src/components/RankWave14Block.tsx renders the same HTML strings on the
 *     pages React draws itself (DepthPage, /ndt-school, the study guide,
 *     /weld-inspection, /inspection-services, SalaryLevelPage). Editorial pages show
 *     the crawler <main> through PublicationBoundary, so they need nothing extra.
 *
 * Markup: [text](/url) links, plain text otherwise (escaped).
 */

export const RANK14_MARKER = 'data-rank14';

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** [text](/url) -> <a>; everything else escaped. External links open normally (no target). */
export function inlineLinks(s) {
  return esc(s).replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_m, t, h) => `<a href="${h}">${t}</a>`);
}
export const plainText = (s) => String(s ?? '').replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '$1');
export const linksIn = (s) => [...String(s ?? '').matchAll(/\[([^\]]+)\]\(([^)\s]+)\)/g)].map((m) => ({ text: m[1], href: m[2] }));
export const wordCount = (s) => plainText(s).trim().split(/\s+/).filter(Boolean).length;

/** The direct-answer block (§25.4): query-verbatim H2 + 40-60 word answer, optional service detail. */
export function answerBlockHtml(data, path) {
  const e = data && data.answers && data.answers[path];
  if (!e) return '';
  const out = [`<section ${RANK14_MARKER}="answer" aria-label="Direct answer">`, `<h2>${esc(e.q)}</h2>`, `<p>${inlineLinks(e.a)}</p>`];
  if (e.more) out.push(`<p>${inlineLinks(e.more)}</p>`);
  const s = e.service;
  if (s) {
    out.push('<h3>What you receive</h3>');
    out.push(`<ul>${s.receive.map((r) => `<li>${inlineLinks(r)}</li>`).join('')}</ul>`);
    out.push(`<h3>What ${esc(s.method)} finds, and what it does not</h3>`);
    out.push(`<p><strong>Finds:</strong> ${inlineLinks(s.finds)}</p>`);
    out.push(`<p><strong>Limits:</strong> ${inlineLinks(s.misses)}</p>`);
  }
  if (s || e.area) out.push(`<p>${inlineLinks(data.area)}</p>`);
  if (s && s.links) out.push(`<p>${inlineLinks(s.links)}</p>`);
  out.push('</section>');
  return out.join('');
}

/** The exact-anchor routing sentence for a family page (city or method page -> national owner). */
export function routeFor(data, path) {
  for (const r of (data && data.routes) || []) {
    if (new RegExp(r.pattern).test(path) && path !== r.owner) return r;
  }
  return null;
}
export function routeLineHtml(data, path) {
  const r = routeFor(data, path);
  return r ? `<p ${RANK14_MARKER}="route">${inlineLinks(r.text)}</p>` : '';
}

/** Sourced salary note + author and date (salary owners only; ranges untouched). */
export function isSalaryOwner(data, path) {
  return Boolean(data && data.salary && data.salary.paths.includes(path));
}
export function salaryNoteHtml(data, path) {
  if (!isSalaryOwner(data, path)) return '';
  const s = data.salary;
  return `<aside ${RANK14_MARKER}="salary" aria-label="Data note">`
    + `<p>${esc(s.note)} Source: <a href="${esc(s.sourceUrl)}" rel="noopener">${esc(s.sourceLabel)}</a>.</p>`
    + `<p>By <a href="${esc(s.authorUrl)}">${esc(s.author)}</a>, ${esc(s.authorCredential)}. Updated <time datetime="${esc(data.updated)}">${esc(data.updatedLabel)}</time>.</p>`
    + '</aside>';
}

/** Article node for a salary owner that has none (headline = the page H1). */
export function salaryArticleNode(data, path, headline, site = 'https://atlantisndt.com') {
  const s = data.salary;
  return {
    '@type': 'Article',
    '@id': `${site}${path}#article`,
    headline,
    author: { '@type': 'Person', '@id': `${site}/#anoop-rayavarapu`, name: s.author, url: `${site}${s.authorUrl}` },
    dateModified: data.updated,
    mainEntityOfPage: `${site}${path}`,
    publisher: { '@id': `${site}/#organization` },
    citation: { '@type': 'CreativeWork', name: s.sourceLabel, url: s.sourceUrl },
  };
}

/* ── Consulting city pages: city-scoped title / H1 / description (US only) ───── */
/** "seattle" -> { name: "Seattle", st: "WA", place: "Seattle, WA" } from geo-hierarchy.json. */
export function usPlace(geo, slug) {
  const c = geo && geo.cities && geo.cities[slug];
  if (!c) return null;
  const reg = geo.regions && geo.regions[c[1]];
  if (!reg || reg[2] !== 'US') return null;
  return { name: c[0], st: reg[1], place: `${c[0]}, ${reg[1]}` };
}

/** A sector tail is kept only when it reads as sectors, not as the national service term. */
export function sectorTail(data, tail) {
  const t = String(tail || '').replace(/\s+/g, ' ').trim();
  if (!t) return '';
  if (new RegExp(data.consultingCity.genericTail, 'i').test(t)) return '';
  if (/\d/.test(t)) return '';
  return t;
}

export function consultingCityTitle(data, place, tail) {
  const base = `NDT Consulting in ${place.place}`;
  const max = data.consultingCity.titleMax;
  if (tail) {
    const parts = tail.split(',').map((x) => x.trim()).filter(Boolean);
    for (let n = parts.length; n >= 1; n--) {
      const t = `${base} — ${parts.slice(0, n).join(', ')}`;
      if (t.length <= max) return t;
    }
  }
  return base;
}

/** Sectors named in the page's own intro ("… consulting in Seattle across aerospace, refining & maritime."). */
export function introSectors(text) {
  const m = String(text || '').match(/consulting in [^.<]{0,40}? across ([^.<]{3,90})\./i);
  if (!m) return '';
  const t = m[1].replace(/&amp;/g, '&').replace(/\s+sectors?$/i, '').trim();
  if (/oil & gas, petrochem, marine, aerospace, and power-gen/i.test(t)) return '';
  const cap = (w) => w.replace(/(^|[\s-])([a-z])/g, (_x, a, b) => a + b.toUpperCase());
  const parts = t.replace(/\boil\s*(?:&|and)\s*gas\b/gi, 'oil+gas').split(/\s*,\s*|\s+&\s+|\s+and\s+/).map((x) => x.trim()).filter(Boolean);
  return parts.slice(0, 3).map((x) => cap(x.replace(/\+/g, ' & '))).join(', ');
}

export function consultingCityH1(place, tail) {
  return tail ? `NDT Consulting in ${place.place} — ${tail}` : `NDT Consulting in ${place.place}`;
}

export function consultingCityDescription(data, place, tail) {
  const c = data.consultingCity;
  const sectors = tail ? tail.toLowerCase().replace(/\s+and\s+/g, ' and ') : '';
  const first = sectors ? sectors.split(',')[0].trim() : '';
  const candidates = [];
  if (sectors) candidates.push(c.descriptionTemplate.replace('{place}', place.place).replace('{sectors}', sectors));
  if (first && first !== sectors) candidates.push(c.descriptionTemplate.replace('{place}', place.place).replace('{sectors}', first));
  candidates.push(c.descriptionFallback.replace('{place}', place.place));
  candidates.push(`NDT consulting for work in ${place.place}: written practices, procedure approval, examinations and audit support. Quote on request.`);
  return candidates.find((d) => d.length <= 155) || candidates[candidates.length - 1];
}

export function consultingCityScopeHtml(data, place) {
  return `<p ${RANK14_MARKER}="city-scope">${inlineLinks(data.consultingCity.scopeLine.replace('{place}', place.place))}</p>`;
}

/* ── insertion helpers (crawler bodies; React renders the same strings) ───────── */
/**
 * Insert html at the top of the main content: straight after the H1, past a blog
 * post's snippet paragraph and meta line (so it sits just before .blog-content), or
 * after the H1's closing </header>.
 */
export function insertAtTop(body, html) {
  const h = body.indexOf('</h1>');
  if (h < 0) {
    const m = body.search(/<main[^>]*>/i);
    if (m < 0) return html + body;
    const end = body.indexOf('>', m) + 1;
    return body.slice(0, end) + html + body.slice(end);
  }
  let i = h + 5;
  const skip = (re) => {
    const rest = body.slice(i);
    const m = rest.match(re);
    if (m && m.index === 0) { i += m[0].length; return true; }
    return false;
  };
  skip(/^\s*<\/header>/i);
  skip(/^\s*<p class="snippet">[\s\S]*?<\/p>/i);
  skip(/^\s*<div class="meta">[\s\S]*?<\/div>/i);
  return body.slice(0, i) + '\n' + html + '\n' + body.slice(i);
}

/** Index just past the element that opens at `at` (matching close tag, nesting counted). */
export function endOfElement(body, at) {
  const m = body.slice(at).match(/^<([a-z0-9]+)/i);
  if (!m) return -1;
  const tag = m[1].toLowerCase();
  const re = new RegExp(`<(/?)${tag}(?=[\\s>/])[^>]*>`, 'gi');
  re.lastIndex = at;
  let depth = 0;
  for (let t = re.exec(body); t; t = re.exec(body)) {
    if (t[1]) { depth--; if (depth === 0) return t.index + t[0].length; }
    else if (!t[0].endsWith('/>')) depth++;
  }
  return -1;
}

/** Insert html after the first block element (p, div, section, aside, table, list) that follows the H1. */
export function insertAfterIntro(body, html) {
  const h = body.indexOf('</h1>');
  if (h < 0) return insertAtTop(body, html);
  // Skip breadcrumb/nav elements that sit between the H1 and the intro.
  let from = h + 5;
  for (;;) {
    const lead = body.slice(from).match(/^\s*(?=<nav[\s>])/i);
    if (!lead) break;
    const navEnd = endOfElement(body, from + lead[0].length);
    if (navEnd < 0) break;
    from = navEnd;
  }
  const rest = body.slice(from);
  const m = rest.match(/<(p|div|section|aside|table|ul|ol|figure)[\s>]/i);
  if (!m) return insertAtTop(body, html);
  const at = from + m.index;
  const end = endOfElement(body, at);
  if (end < 0) return insertAtTop(body, html);
  return body.slice(0, end) + '\n' + html + body.slice(end);
}

/* ── Level III owner page (/consulting/ndt-consulting-level-iii) ──────────────
 * Named-expert block, deliverables, process and "how to choose" sections. Copy lives
 * in src/data/money-pages-2026-10.json (level3.*), rendered here for the crawler
 * (scripts/money-pages-2026-10.mjs → level3BlockHtml) and read by the React page. */
export function level3SectionsHtml(l3, marker = '') {
  const m = marker ? ` ${marker}` : '';
  const out = [];
  if (l3.expert) {
    out.push(`<section id="${esc(l3.expert.id)}"${m}><h2>${esc(l3.expert.h2)}</h2><p>${inlineLinks(l3.expert.p)}</p><p>${inlineLinks(l3.expert.verify)}</p></section>`);
  }
  if (l3.deliverables) {
    out.push(`<section id="${esc(l3.deliverables.id)}"${m}><h2>${esc(l3.deliverables.h2)}</h2><ul>${l3.deliverables.items.map((d) => `<li><strong>${esc(d.name)}:</strong> ${inlineLinks(d.text)}</li>`).join('')}</ul></section>`);
  }
  if (l3.process) {
    out.push(`<section id="${esc(l3.process.id)}"${m}><h2>${esc(l3.process.h2)}</h2><ol>${l3.process.steps.map((s) => `<li><strong>${esc(s.h)}.</strong> ${inlineLinks(s.p)}</li>`).join('')}</ol><p>${inlineLinks(l3.process.note)}</p></section>`);
  }
  if (l3.choose) {
    out.push(`<section id="${esc(l3.choose.id)}"${m}><h2>${esc(l3.choose.h2)}</h2><p>${inlineLinks(l3.choose.intro)}</p><ul>${l3.choose.items.map((t) => `<li>${inlineLinks(t)}</li>`).join('')}</ul></section>`);
  }
  return out.join('\n');
}

/** ProfessionalService node for the Level III owner (no prices, no ratings). */
export function level3ProfessionalServiceNode(l3, { site, orgId, authorId }) {
  return {
    '@type': 'ProfessionalService',
    '@id': `${site}${l3.path}#professional-service`,
    name: 'Atlantis NDT — outsourced ASNT Level III consulting',
    url: `${site}${l3.path}`,
    description: l3.qa.answer,
    parentOrganization: { '@id': orgId },
    founder: { '@id': authorId },
    areaServed: { '@type': 'Place', name: 'Worldwide' },
    knowsAbout: ['ASNT SNT-TC-1A', 'ANSI/ASNT CP-189', 'NDT written practice development', 'NDT procedure approval', 'NDT personnel examination'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Level III consulting deliverables',
      itemListElement: (l3.deliverables ? l3.deliverables.items : []).map((d) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: d.name, description: d.text },
      })),
    },
  };
}
