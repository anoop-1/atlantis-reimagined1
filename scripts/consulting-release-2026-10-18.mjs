/**
 * Consulting teardown release — 2026-10-18 (CLAUDE.md §59). Crawler-HTML side.
 * ─────────────────────────────────────────────────────────────────────────────
 * Last body writer (after applyRankWave14Route, before writeRoute) for:
 *   /consulting/ndt-consulting-level-iii   the stacked legacy layers removed (two "In more
 *       detail" blocks, statement/question H2 echoes, a second FAQ set, the coverage block,
 *       everything after </main>), then the condensed audit-trail and method-scope sections,
 *       one visible FAQ (= FAQPage) and one related-links block added from
 *       src/data/money-pages-2026-10.json (level3.*). One ProfessionalService node.
 *   /consulting/ndt-technical-procedure-development   <main> rebuilt from
 *       src/data/consulting-release-2026-10-18.json (procedure): the route-reconcile digest,
 *       the appended inspection qualification module and the inspection RFQ are replaced.
 *   /resources/ndt-written-practice-template   the DOCX download link and the owner link,
 *       which existed only in React, now in the crawler HTML too.
 * The Level III and procedure pages are in src/lib/published-pages.ts, so React shows this
 * crawler <main> (one source for both layers). The template page's React component renders
 * the same paragraph from the same JSON.
 */
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const load = (p) => JSON.parse(readFileSync(join(ROOT, p), 'utf-8'));
const MP = load('src/data/money-pages-2026-10.json');
const CR = load('src/data/consulting-release-2026-10-18.json');
const SITE = 'https://atlantisndt.com';
export const RELEASE_MARKER = 'data-consulting-release="2026-10-18"';

export const consultingReleaseStats = { level3: 0, procedure: 0, template: 0, level3Removed: [] };

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
/** [text](/path) and **bold** -> HTML; only site-relative and https links become anchors. */
export function md(s) {
  return esc(s)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (m, t, h) => (/^(\/[^\s]*|https:\/\/[^\s]+)$/.test(h) ? `<a href="${h}">${t}</a>` : t));
}
const plain = (s) => String(s ?? '').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '$1');

/** Index just past the element that opens at `at` (matching nested tags of the same name). */
export function endOfElement(html, at) {
  const tag = (html.slice(at).match(/^<([a-z0-9]+)/i) || [])[1];
  if (!tag) return -1;
  const re = new RegExp(`<${tag}\\b|</${tag}>`, 'gi');
  re.lastIndex = at;
  let depth = 0;
  for (let m; (m = re.exec(html));) {
    depth += m[0][1] === '/' ? -1 : 1;
    if (depth === 0) return m.index + m[0].length;
  }
  return -1;
}
function cutElement(html, startNeedle) {
  const at = html.indexOf(startNeedle);
  if (at < 0) return { html, cut: false };
  const end = endOfElement(html, at);
  if (end < 0) return { html, cut: false };
  return { html: html.slice(0, at) + html.slice(end), cut: true };
}

export function faqSectionHtml(id, h2, items) {
  return `\n    <section id="${esc(id)}" ${RELEASE_MARKER} aria-label="${esc(h2)}"><h2>${esc(h2)}</h2>`
    + items.map((f) => `<h3>${esc(f.q)}</h3><p>${md(f.a)}</p>`).join('') + '</section>';
}
export function faqNode(path, items) {
  return {
    '@type': 'FAQPage', '@id': `${SITE}${path}#faq`,
    mainEntity: items.map((f) => ({ '@type': 'Question', name: plain(f.q), acceptedAnswer: { '@type': 'Answer', text: plain(f.a) } })),
  };
}
function relatedHtml(id, h2, links) {
  return `\n    <nav id="${esc(id)}" ${RELEASE_MARKER} aria-label="${esc(h2)}"><h2>${esc(h2)}</h2><ul>`
    + links.map((l) => `<li><a href="${l.href}">${esc(l.label)}</a></li>`).join('') + '</ul></nav>';
}
const sectionHtml = (b) => `\n    <section id="${esc(b.id)}" ${RELEASE_MARKER}><h2>${esc(b.h2)}</h2>${b.paragraphs.map((p) => `<p>${md(p)}</p>`).join('')}</section>`;

/* ── Level III owner ─────────────────────────────────────────────────────── */
function level3Route(route) {
  const l = MP.level3;
  let b = route.bodyContent;
  if (b.includes(RELEASE_MARKER)) return route;
  const mainAt = b.indexOf('<main');
  const mainEnd = b.lastIndexOf('</main>');
  if (mainAt < 0 || mainEnd < mainAt) return route;
  let main = b.slice(mainAt, mainEnd);
  const removed = [];
  // 1. Everything between "How to choose an outside Level III" and the five engagement
  //    sections: both "In more detail" layers, the statement H2s and their question echoes,
  //    the first "Frequently asked" H3 set and the four extra facets.
  const chooseAt = main.indexOf(`id="${l.choose.id}"`);
  const engAt = main.indexOf('<section class="level-iii-engagements"');
  if (chooseAt >= 0 && engAt > chooseAt) {
    const chooseStart = main.lastIndexOf('<section', chooseAt);
    const chooseEnd = endOfElement(main, chooseStart);
    if (chooseEnd > 0 && chooseEnd <= engAt) {
      const gap = main.slice(chooseEnd, engAt);
      if (gap.replace(/<[^>]+>/g, '').trim()) removed.push(`stacked layers (${(gap.match(/<h2/g) || []).length} H2)`);
      main = main.slice(0, chooseEnd) + '\n    ' + main.slice(engAt);
    }
  }
  // 2. The coverage block ("Contract, on-call and remote NDT Level III …"): two of its
  //    questions are folded into the one FAQ below.
  {
    const r = cutElement(main, '<section data-coverage="2026-10"');
    if (r.cut) removed.push('coverage block');
    main = r.html;
  }
  // 3. Condensed audit trail + method scope, right after the five engagement sections.
  const eng = main.indexOf('<section class="level-iii-engagements"');
  const extra = sectionHtml(l.audit) + sectionHtml(l.methodScope);
  if (eng >= 0) {
    const engEnd = endOfElement(main, eng);
    main = main.slice(0, engEnd) + extra + main.slice(engEnd);
  } else main += extra;
  // 4. One FAQ and one related-links block at the end of <main>.
  main += faqSectionHtml(l.faq.id, l.faq.h2, l.faq.items) + relatedHtml(l.related.id, l.related.h2, l.related.links) + '\n  ';
  const after = b.slice(mainEnd + '</main>'.length);
  if (after.replace(/<[^>]+>/g, '').trim()) removed.push(`after </main> (${(after.match(/<h2/g) || []).length} H2)`);
  b = b.slice(0, mainAt) + main + '</main>';
  consultingReleaseStats.level3Removed = removed;

  // Schema: one ProfessionalService (the Service node folds into it), FAQPage = the visible FAQ.
  const sd = route.structuredData ? JSON.parse(JSON.stringify(route.structuredData)) : { '@context': 'https://schema.org', '@graph': [] };
  const graph = Array.isArray(sd['@graph']) ? sd['@graph'] : [sd];
  const serviceId = `${SITE}${l.path}#service`;
  const proId = `${SITE}${l.path}#professional-service`;
  const kept = graph.filter((n) => n && n['@type'] !== 'FAQPage' && !(n['@type'] === 'Service' && (n['@id'] === serviceId || !n['@id'])));
  const swap = (v) => {
    if (Array.isArray(v)) return v.map(swap);
    if (v && typeof v === 'object') {
      if (v['@id'] === serviceId && Object.keys(v).length === 1) return { '@id': proId };
      return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, swap(x)]));
    }
    return v;
  };
  const next = { '@context': 'https://schema.org', '@graph': [...kept.map(swap), faqNode(l.path, l.faq.items)] };
  consultingReleaseStats.level3++;
  return { ...route, bodyContent: b, structuredData: next };
}

/* ── Procedure development and review ────────────────────────────────────── */
export function procedureMainHtml() {
  const p = CR.procedure;
  const out = [`\n    <h1>${esc(p.h1)}</h1>`];
  for (const t of p.intro) out.push(`\n    <p>${md(t)}</p>`);
  for (const s of p.sections) {
    let h = `\n    <section id="${esc(s.id)}" ${RELEASE_MARKER}><h2>${esc(s.h2)}</h2>`;
    for (const t of s.p || []) h += `<p>${md(t)}</p>`;
    if (s.ul) h += `<ul>${s.ul.map((t) => `<li>${md(t)}</li>`).join('')}</ul>`;
    if (s.ol) h += `<ol>${s.ol.map((t) => `<li>${md(t)}</li>`).join('')}</ol>`;
    if (s.table) {
      const t = s.table;
      h += `<table><caption>${esc(t.caption)}</caption><thead><tr>${t.columns.map((c) => `<th scope="col">${esc(c)}</th>`).join('')}</tr></thead><tbody>`
        + t.rows.map((r) => `<tr>${r.map((c, i) => (i === 0 ? `<th scope="row">${esc(c)}</th>` : `<td>${esc(c)}</td>`)).join('')}</tr>`).join('') + '</tbody></table>';
    }
    out.push(h + '</section>');
  }
  out.push(faqSectionHtml('procedure-faq', 'Frequently asked questions', p.faq));
  out.push(`\n    <section id="procedure-enquiry" ${RELEASE_MARKER}><h2>${esc(p.cta.h2)}</h2><p>${md(p.cta.p)}</p><p><a href="${p.cta.href}">${esc(p.cta.label)}</a></p></section>`);
  out.push(relatedHtml('procedure-related', p.related.h2, p.related.links));
  return out.join('');
}
function procedureRoute(route) {
  const p = CR.procedure;
  let b = route.bodyContent;
  if (b.includes(RELEASE_MARKER)) return route;
  const mainAt = b.indexOf('<main');
  const head = mainAt >= 0 ? b.slice(0, mainAt) : '';
  // Keep the site-wide keyword-links nav if a later pass placed one; drop the rest.
  const kw = (b.match(/<nav data-keyword-links="2026-10"[\s\S]*?<\/nav>/) || [''])[0];
  b = `${head}<main>${procedureMainHtml()}${kw ? `\n    ${kw}` : ''}\n  </main>`;
  const sd = route.structuredData ? JSON.parse(JSON.stringify(route.structuredData)) : null;
  const graph = sd && Array.isArray(sd['@graph']) ? sd['@graph'] : sd ? [sd] : [];
  const kept = graph.filter((n) => n && !['FAQPage', 'Service', 'TechArticle', 'Article'].includes(n['@type']));
  const service = {
    '@type': 'Service', '@id': `${SITE}${p.path}#service`,
    name: 'NDT procedure development and review',
    serviceType: 'NDT procedure writing, review and ASNT Level III approval',
    description: plain(p.intro[0]),
    url: `${SITE}${p.path}`,
    provider: { '@id': `${SITE}/#organization` },
    areaServed: [{ '@type': 'Country', name: 'United States' }, { '@type': 'Country', name: 'Canada' }],
  };
  consultingReleaseStats.procedure++;
  return { ...route, h1: p.h1, bodyContent: b, structuredData: { '@context': 'https://schema.org', '@graph': [...kept, service, faqNode(p.path, p.faq)] } };
}

/* ── Written practice template: crawler parity for the download link ─────── */
export const templateParagraphHtml = () => `<p ${RELEASE_MARKER}>${md(CR.templatePage.p)}</p>`;
function templateRoute(route) {
  let b = route.bodyContent;
  if (b.includes(RELEASE_MARKER)) return route;
  const html = templateParagraphHtml();
  const money = b.match(/<p data-money-page="2026-10">[\s\S]*?<\/p>/);
  if (money) b = b.replace(money[0], `${money[0]}\n    ${html}`);
  else b = b.replace(/(<h1[^>]*>[\s\S]*?<\/h1>\s*<p>[\s\S]*?<\/p>)/i, `$1\n    ${html}`);
  if (!b.includes(RELEASE_MARKER)) return route;
  consultingReleaseStats.template++;
  return { ...route, bodyContent: b };
}

export function applyConsultingReleaseRoute(route) {
  if (!route || typeof route.bodyContent !== 'string') return route;
  if (route.path === MP.level3.path) return level3Route(route);
  if (route.path === CR.procedure.path) return procedureRoute(route);
  if (route.path === CR.templatePage.path) return templateRoute(route);
  return route;
}

/** Build guard: copy rules and link targets for everything this module renders. */
export function assertConsultingReleaseClean(knownPaths) {
  const errs = [];
  const l = MP.level3;
  const copy = JSON.stringify([CR, l.audit, l.methodScope, l.faq, l.related, l.h1, l.intro, l.expert, MP.consultingByCode]);
  if (/[$£€₹]\s?\d|\b(?:USD|INR|AED|SAR|CAD)\s?\d|\bper (?:day|hour)\b|\bday[- ]rate\b/i.test(copy)) errs.push('price pattern');
  const noReply = copy.replace(/we reply within one business day/gi, ''); // the one time phrase the owner allows
  if (/\bwithin (?:\d+|one|two|three|a few)\s*(?:business\s+)?(?:hours?|days?|weeks?)\b|\b\d+\s*(?:-|–|to)\s*\d+\s*(?:business\s+)?(?:days?|weeks?)\b|\b(?:a )?few weeks\b|\bsame[- ](?:day|week)\b|\b24[- ]?hours?\b|\bweek delivery\b/i.test(noReply)) errs.push('time promise');
  if (/\blive (?:online|classes?)\b|\bHQ\b|headquarter|world-class|leading provider|guarantee/i.test(copy)) errs.push('claim wording');
  for (const sent of copy.split(/(?<=[.!?])\s+|","/)) {
    if (!/Anoop|founder/i.test(sent)) continue;
    if (/\bET\b|eddy current|six methods/i.test(sent) || (/NAS 410 Level 3/i.test(sent) && !/associate/i.test(sent) && /Anoop|founder/i.test(sent) && /holds|certified/i.test(sent))) errs.push(`founder credential wording: ${sent.slice(0, 90)}`);
  }
  if (/SAEP-1135|AGES-SP-09-007|BAC 5980/.test(copy)) errs.push('unverified client specification');
  if (l.faq.items.length < 8) errs.push(`Level III FAQ has ${l.faq.items.length} questions`);
  const qs = l.faq.items.map((f) => f.q.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim());
  if (new Set(qs).size !== qs.length) errs.push('duplicate Level III FAQ question');
  if (knownPaths) {
    const html = procedureMainHtml() + templateParagraphHtml() + faqSectionHtml('x', 'x', l.faq.items) + relatedHtml('x', 'x', l.related.links) + sectionHtml(l.audit) + sectionHtml(l.methodScope);
    for (const m of html.matchAll(/href="(\/[^"#?]*)/g)) {
      const t = m[1].replace(/\/$/, '') || '/';
      if (/\.[a-z0-9]{2,5}$/i.test(t)) continue; // file downloads checked below
      if (!knownPaths.has(t)) errs.push(`link target not built: ${t}`);
    }
    for (const rel of Object.values(CR.curatedRelated)) for (const t of rel) if (!knownPaths.has(t)) errs.push(`curated related target not built: ${t}`);
  }
  for (const f of [...JSON.stringify(CR).matchAll(/\]\((\/templates\/[^)]+)\)/g)].map((m) => m[1])) {
    try { readFileSync(join(ROOT, 'public', f)); } catch { errs.push(`download not found: ${f}`); }
  }
  if (errs.length) throw new Error(`consulting-release-2026-10-18:\n  ${[...new Set(errs)].join('\n  ')}`);
  return true;
}
