// /ndt-training-houston — 2026-10-18 (training workstream; spec /home/claude/wt/shared/rea/training.md §5.1).
//
// The page had grown to ~7,300 words from ten generators (the prerender training-city template,
// page-upgrades.json, the deep-content file, citation facets, faq-content, geo-interlink, …),
// with two FAQ blocks, cohort and turnaround wording, "live, instructor-led online sessions",
// "Pricing is quote on request" beside published US fees, and unsourced refinery figures.
// It is now built from ONE data file, src/data/houston-training-2026-10.json, by this module:
//
//   applyTrainingReleaseRoute (scripts/training-release-2026-10.mjs) calls houstonBodyHtml()
//   and houstonStructuredData() for HOUSTON_PATH, like the Hyderabad rebuild, so the training
//   geo-honesty gate records this body and the release's one valid Course node is added to it.
//   /ndt-training-houston is a published path (src/lib/published-pages.ts): readers see this
//   same <main>, so there is no second layer to drift.
//
// Facts are never typed here: hours from src/data/snt-tc-1a-hours.json, ASNT exam fees from
// src/data/asnt-certification-2026-10.json, and Atlantis US fees only through the
// <!--training-fees-slot--> that scripts/approved-pricing.mjs fills (path allowlisted in
// src/data/approved-training-fees.json). Title/description: src/data/ctr-wave16/training.json.
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { packageHours } from '../src/data/course-markup-2026-10.mjs';
import { pathsBlockHtml } from './training-na.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const readJson = (p) => JSON.parse(readFileSync(join(ROOT, p), 'utf-8'));
export const HOUSTON = readJson('src/data/houston-training-2026-10.json');
const HOURS = readJson('src/data/snt-tc-1a-hours.json');
const ASNT = readJson('src/data/asnt-certification-2026-10.json');
export const HOUSTON_PATH = HOUSTON.path;
export const TRAINING_FEES_SLOT = '<!--training-fees-slot-->'; // same token as scripts/approved-pricing.mjs (not imported: pricing-gate PLACEMENT rule)
const SITE = 'https://atlantisndt.com';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const attr = (s) => String(s).replace(/&(?!amp;)/g, '&amp;').replace(/"/g, '&quot;');
const plain = (s) => String(s).replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();

const METHOD_ORDER = ['UT', 'RT', 'MT', 'PT', 'VT', 'ET'];

/** {c.UT.0} classroom · {o.UT.1} experience · {pkg.0} five-method sum · {hoursList} */
export function fillHours(s) {
  return String(s).replace(/\{([a-zA-Z.0-9]+)\}/g, (all, key) => {
    if (key === 'hoursList') {
      return METHOD_ORDER.filter((k) => HOURS.classroom[k])
        .map((k) => `${k} ${HOURS.classroom[k][0]} and ${HOURS.classroom[k][1]}`).join(', ');
    }
    const [kind, a, b] = key.split('.');
    if (kind === 'pkg') {
      const v = packageHours(HOURS, Number(a));
      if (v == null) throw new Error(`houston-training: no package hours for level ${a}`);
      return String(v);
    }
    if ((kind === 'c' || kind === 'o') && HOURS[kind === 'c' ? 'classroom' : 'ojt'][a]) {
      const v = HOURS[kind === 'c' ? 'classroom' : 'ojt'][a][Number(b)];
      if (!/^\d+$/.test(String(v))) throw new Error(`houston-training: ${key} is not a number in snt-tc-1a-hours.json`);
      return String(v);
    }
    throw new Error(`houston-training: unknown placeholder ${all}`);
  });
}

const paras = (list) => list.map((p) => `<p>${fillHours(p)}</p>`).join('\n      ');
const table = (caption, head, rows) => `<table><caption>${esc(caption)}</caption><thead><tr>${head.map((h) => `<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c, i) => (i === 0 ? `<th scope="row">${esc(c)}</th>` : `<td>${esc(c)}</td>`)).join('')}</tr>`).join('')}</tbody></table>`;

function hoursTable() {
  const d = HOUSTON.duration;
  const rows = METHOD_ORDER.filter((k) => HOURS.classroom[k]).map((k) => [
    HOURS.methodNames[k] || k, HOURS.classroom[k][0], HOURS.classroom[k][1], HOURS.ojt[k][0], HOURS.ojt[k][1],
  ]);
  return table(d.caption, d.head, rows);
}

function asntFeesHtml() {
  const f = ASNT.fees;
  return f.tables.map((t) => `${table(t.caption, f.head, t.rows)}<p>Source: <a href="${attr(t.url)}" rel="noopener">${esc(t.urlLabel)}</a>.</p>`).join('\n      ');
}

/** The visible FAQ, with hour placeholders resolved: [[question, answer], …]. */
export function houstonFaq() {
  return HOUSTON.faq.map(([q, a]) => [q, fillHours(a)]);
}

/** Full route body for /ndt-training-houston. `keep` = late system blocks to carry over. */
export function houstonBodyHtml(keep = '') {
  const h = HOUSTON;
  const crumbs = h.breadcrumb.map(([href, label]) => (href ? `<li><a href="${href}">${esc(label)}</a></li>` : `<li aria-current="page">${esc(label)}</li>`)).join('');
  const steps = h.certPath.steps.map(([t, d]) => `<li><strong>${esc(t)}</strong> ${d}</li>`).join('');
  const work = h.work.items.map(([t, d]) => `<li><strong>${esc(t)}</strong> ${esc(d)}</li>`).join('');
  const faq = houstonFaq().map(([q, a]) => `<h3>${esc(q)}</h3>\n      <p>${esc(a)}</p>`).join('\n      ');
  const related = h.related.map(([href, t]) => `<li><a href="${href}">${esc(t)}</a></li>`).join('');
  return `  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/training">Training</a><a href="/training-usa">US Training</a><a href="/asnt-certification">ASNT</a><a href="/contact">Contact</a></nav></header>
  <main>
    <nav aria-label="Breadcrumb" class="geo-breadcrumb"><ol>${crumbs}</ol></nav>
    <h1>${esc(h.h1)}</h1>
    <p>${esc(h.lead)}</p>
    <section data-houston="how" aria-labelledby="houston-how">
      <h2 id="houston-how">${esc(h.howItWorks.h2)}</h2>
      ${paras(h.howItWorks.paras)}
    </section>
    <section data-houston="routes" aria-labelledby="houston-routes">
      <h2 id="houston-routes">${esc(h.routes.h2)}</h2>
      <p>${esc(h.routes.intro)}</p>
      ${table(h.routes.caption, h.routes.head, h.routes.rows)}
    </section>
    <section data-houston="duration" aria-labelledby="houston-duration">
      <h2 id="houston-duration">${esc(h.duration.h2)}</h2>
      ${paras(h.duration.paras)}
      ${hoursTable()}
    </section>
    <section id="ndt-certification-cost-houston" data-houston="cost" aria-labelledby="houston-cost">
      <h2 id="houston-cost">${esc(h.cost.h2)}</h2>
      ${paras(h.cost.paras)}
    </section>
    ${TRAINING_FEES_SLOT}
    <section data-houston="asnt-fees" aria-labelledby="houston-asnt-fees">
      <h2 id="houston-asnt-fees">${esc(h.cost.asntH3)}</h2>
      <p>${esc(h.cost.asntIntro)}</p>
      ${asntFeesHtml()}
    </section>
    <section data-houston="exams" aria-labelledby="houston-exams">
      <h2 id="houston-exams">${esc(h.exams.h2)}</h2>
      ${paras(h.exams.paras)}
    </section>
    <section data-houston="careers" aria-labelledby="houston-careers">
      <h2 id="houston-careers">${esc(h.careers.h2)}</h2>
      ${paras(h.careers.paras)}
    </section>
    <section data-houston="instructor" aria-labelledby="houston-instructor">
      <h2 id="houston-instructor">${esc(h.instructor.h2)}</h2>
      ${paras(h.instructor.paras)}
    </section>
${pathsBlockHtml('Houston, TX')}
    <section class="deep-content" data-houston="detail">
      <h2>${esc(h.courses.h2)}</h2>
      <p>${esc(h.courses.intro)}</p>
      ${table(h.courses.caption, h.courses.head, h.courses.rows)}
      ${paras(h.courses.after)}
      <h2>${esc(h.certPath.h2)}</h2>
      <ol>${steps}</ol>
      <p>${h.certPath.after}</p>
      <h2>${esc(h.work.h2)}</h2>
      <p>${esc(h.work.intro)}</p>
      <ul>${work}</ul>
      <p>${h.work.licensing}</p>
      <p>${h.work.extras}</p>
      <h2>${esc(h.level3.h2)}</h2>
      ${paras(h.level3.paras)}
      <h2>${esc(h.simulator.h2)}</h2>
      ${paras(h.simulator.paras)}
    </section>
    <section data-houston="faq" aria-labelledby="houston-faq">
      <h2 id="houston-faq">${esc(h.faqH2)}</h2>
      ${faq}
    </section>
    <section data-houston="cta" aria-labelledby="houston-cta">
      <h2 id="houston-cta">${esc(h.cta.h2)}</h2>
      <p>${h.cta.html}</p>
    </section>
    <nav data-houston="related" aria-labelledby="houston-related">
      <h2 id="houston-related">${esc(h.relatedH2)}</h2>
      <ul>${related}</ul>
    </nav>${keep}
  </main>`;
}

/** FAQPage (from the visible block only) + BreadcrumbList. The Course node is added by the release hook. */
export function houstonStructuredData() {
  const url = `${SITE}${HOUSTON_PATH}`;
  const items = HOUSTON.breadcrumb.map(([href, label], i) => ({ '@type': 'ListItem', position: i + 1, name: label, item: href ? `${SITE}${href === '/' ? '/' : href}` : url }));
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: houstonFaq().map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
      { '@type': 'BreadcrumbList', itemListElement: items },
    ],
  };
}

// Wording the owner rules forbid on this page (p17-rules owner decisions 2026-10-18). The
// training geo-honesty gate carries the same phrases for the build; this is the data check.
const FORBIDDEN = [
  /\bcohorts?\b/i, /\blive online\b|\blive-virtual\b|\blive classes\b|\breplays?\b|\binstructor-led online\b/i,
  /\bquotes? within\b|\bwithin 24 hours\b|\b24-hour\b|\bsame[- ]week\b/i, /\baffordable, accessible\b/i,
  /\bquote on request\b/i, /\bmobili[sz](?:ed|ation)\b/i, /\bpass rates?\b|\bplacement\b/i,
];

/** Build-time check: data shape, links built, no Atlantis amount typed, no forbidden wording, FAQ 40–80 words. */
export function assertHoustonClean(BUILT_PATHS) {
  const errs = [];
  const body = houstonBodyHtml('');
  const text = plain(body);
  for (const rx of FORBIDDEN) {
    // a sentence that negates the claim is fine ("Atlantis does not run an exam centre")
    const g = new RegExp(rx.source, rx.flags + 'g');
    for (const m of text.matchAll(g)) {
      const s = text.slice(Math.max(0, text.lastIndexOf('.', m.index) + 1), text.indexOf('.', m.index) + 1);
      if (!/\b(?:no|not|never|nor|without|cannot)\b|n['’]t\b/i.test(s)) errs.push(`forbidden wording "${m[0]}": ${s.trim().slice(0, 140)}`);
    }
  }
  const money = text.match(/(?:\$|USD\s?)\d[\d,]*/g) || [];
  const allowed = new Set(['$78,350', ...ASNT.fees.tables.flatMap((t) => t.rows.flatMap((r) => r.slice(1)))]);
  for (const m of money) if (!allowed.has(m)) errs.push(`amount ${m} is not an ASNT fee or the O*NET wage (Atlantis fees render only from approved-training-fees.json)`);
  if (!body.includes(TRAINING_FEES_SLOT)) errs.push('fee slot missing');
  const faq = houstonFaq();
  if (faq.length !== 10) errs.push(`FAQ has ${faq.length} questions (spec: 10)`);
  for (const [q, a] of faq) {
    const n = a.split(/\s+/).length;
    if (n < 40 || n > 80) errs.push(`FAQ answer ${n} words (40–80): ${q}`);
  }
  if (BUILT_PATHS) {
    const hrefs = [...body.matchAll(/href="(\/[^"#?]*)/g)].map((m) => m[1]);
    for (const p of new Set(hrefs)) if (p !== '/contact' && p !== '/' && !BUILT_PATHS.has(p)) errs.push(`links to a page that is not built: ${p}`);
  }
  if (errs.length) throw new Error('Houston training page (2026-10-18) gate failed:\n  ' + errs.join('\n  '));
  return true;
}
