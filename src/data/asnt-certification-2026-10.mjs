/**
 * /asnt-certification, 2026-10-16 — the one resolver both layers call.
 * ─────────────────────────────────────────────────────────────────────────────
 * React: src/pages/asnt-certification.tsx renders resolveAsntCertification() as JSX.
 * Crawler: asntCertificationUpgrade() → scripts/editorial-upgrades.mjs (replace + faqSchema)
 * → applyEditorialQuality(), which replaces the page's <main> after every other layer has
 * run, so no older crawler copy (Round-6 body, cluster blocks, citation layer) survives.
 * In production PublicationBoundary then shows that published <main>, so the crawler HTML
 * is also what readers see.
 *
 * Pure functions: callers pass src/data/asnt-certification-2026-10.json and
 * src/data/snt-tc-1a-hours.json, so Vite and Node read the same files without import
 * attributes (same convention as src/data/training-upgrade-2026-10.mjs). Hours are never
 * typed here or in the JSON: {l1Class} {l1Exp} {l2Class} {l2Exp} are computed from the hours
 * file, and {l3Months} / {exam.*} from the JSON's own level3 rows.
 */

export const ASNT_CERT_PATH = '/asnt-certification';
/** Same token as scripts/approved-pricing.mjs (TRAINING_FEES_SLOT); kept literal so no pricing module is imported here. */
export const TRAINING_FEES_SLOT = '<!--training-fees-slot-->';

const nums = (list) => list.map((v) => {
  const n = Number(v);
  if (!Number.isFinite(n)) throw new Error(`asnt-certification: non-numeric hours value "${v}"`);
  return n;
});
const range = (list) => { const n = nums(list); return `${Math.min(...n)}–${Math.max(...n)}`; };

/** Resolved, render-ready model for /asnt-certification. Throws on any missing data. */
export function resolveAsntCertification(data, hours) {
  if (!data || !hours) throw new Error('asnt-certification: data and hours are required');
  const methods = data.hours.methods;
  for (const [k] of methods) {
    if (!hours.classroom[k] || !hours.ojt[k]) throw new Error(`asnt-certification: snt-tc-1a-hours.json has no ${k} row`);
  }
  const keys = methods.map(([k]) => k);
  const months = data.level3.eligibility.map((e) => e.months);
  const vars = {
    l1Class: range(keys.map((k) => hours.classroom[k][0])),
    l1Exp: range(keys.map((k) => hours.ojt[k][0])),
    l2Class: range(keys.map((k) => hours.classroom[k][1])),
    l2Exp: range(keys.map((k) => hours.ojt[k][1])),
    l3Months: `${Math.min(...months)} to ${Math.max(...months)}`,
    // 2026-10-18: "at least 252 days with …, 504 days with … or 1,008 days without college"
    l3DaysList: data.level3.eligibility.map((e, i, all) => `${i === 0 ? 'at least ' : i === all.length - 1 ? 'or ' : ''}${e.days.toLocaleString('en-US')} days ${e.short}`).join(', '),
  };
  for (const e of data.level3.exams) vars[`exam.${e.key}`] = `${e.items} questions in ${e.hours} hours`;
  const fill = (s) => String(s).replace(/\{([a-zA-Z0-9.]+)\}/g, (_, k) => {
    if (!(k in vars)) throw new Error(`asnt-certification: unknown placeholder {${k}}`);
    return vars[k];
  });
  const deep = (v) => Array.isArray(v) ? v.map(deep) : v && typeof v === 'object'
    ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x)])) : typeof v === 'string' ? fill(v) : v;
  const m = deep(data);
  m.hoursRows = methods.map(([k, href]) => ({
    key: k,
    name: hours.methodNames[k] || k,
    href,
    classroom: `${hours.classroom[k][0]} / ${hours.classroom[k][1]}`,
    experience: `${hours.ojt[k][0]} / ${hours.ojt[k][1]}`,
  }));
  m.eligibilityRows = data.level3.eligibility.map((e) => [e.education, `At least ${e.months} months (${e.days.toLocaleString('en-US')} days)`]);
  m.examRows = data.level3.exams.map((e) => [e.label, String(e.items), `${e.hours} hours`]);
  return m;
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const attr = (s) => esc(s).replace(/"/g, '&quot;');
const a = ([href, label]) => /^https?:\/\//.test(href)
  ? `<a href="${attr(href)}" rel="noopener">${esc(label)}</a>`
  : `<a href="${attr(href)}">${esc(label)}</a>`;
const table = (caption, head, rows, rowHeader = true) => `<table><caption>${esc(caption)}</caption><thead><tr>${head.map((h) => `<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c, i) => i === 0 && rowHeader ? `<th scope="row">${c}</th>` : `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
const ul = (items) => `<ul>${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;

/** Crawler (and published) HTML for /asnt-certification, from the resolved model. */
export function asntCertificationHtml(m) {
  const s = [];
  s.push(`<h1>${esc(m.h1)}</h1><p>${esc(m.lead)}</p><p>${m.cta.map(a).join(' · ')}</p>`);
  s.push(`<section data-citation-block="answer"><h2>${esc(m.answer.q)}</h2><p>${esc(m.answer.a)}</p>${ul(m.answer.bullets.map(esc))}</section>`);
  s.push(`<section><h2>${esc(m.schemes.h2)}</h2><p>${esc(m.schemes.intro)}</p>${table(m.schemes.caption, m.schemes.head, m.schemes.rows.map((r) => r.map(esc)))}${m.schemes.notes.map((n) => `<p>${esc(n)}</p>`).join('')}</section>`);
  s.push(`<section><h2>${esc(m.levels.h2)}</h2><p>${esc(m.levels.intro)}</p>${table(m.levels.caption, m.levels.head, m.levels.items.map((r) => r.map(esc)))}</section>`);
  s.push(`<section><h2>${esc(m.hours.h2)}</h2><p>${esc(m.hours.intro)}</p>${table(m.hours.caption, m.hours.head, m.hoursRows.map((r) => [`<a href="${attr(r.href)}">${esc(r.name)}</a>`, r.classroom, r.experience]))}<p>${esc(m.hours.after)} ${a(m.hours.link)}.</p></section>`);
  s.push(`<section><h2>${esc(m.level2.h2)}</h2><p>${esc(m.level2.p)}</p><p>Prepare with ${a(m.level2.link)}.</p></section>`);
  if (m.level3.reqH2) s.push(`<section id="asnt-level-3-requirements"><h2>${esc(m.level3.reqH2)}</h2><p>${esc(m.level3.req)}</p></section>`);
  s.push(`<section><h2>${esc(m.level3.h2)}</h2><p>${esc(m.level3.intro)}</p>${table(m.level3.eligibilityCaption, m.level3.eligibilityHead, m.eligibilityRows.map((r) => r.map(esc)))}${table(m.level3.examsCaption, m.level3.examsHead, m.examRows.map((r) => r.map(esc)))}<p>${esc(m.level3.renewal)}</p><p>Prepare with ${m.level3.links.map(a).join(' and ')}.</p></section>`);
  // 2026-10-18: the whole-cost answer, then the approved US fee table (filled into the slot by
  // scripts/approved-pricing.mjs on allowlisted paths only), then ASNT's own exam fees.
  if (m.cost) s.push(`<section id="ndt-certification-cost"><h2>${esc(m.cost.h2)}</h2>${m.cost.paras.map((p) => `<p>${esc(p)}</p>`).join('')}<p>Published US training fees are also on ${a(m.cost.link)}.</p></section>${TRAINING_FEES_SLOT}`);
  s.push(`<section><h2>${esc(m.fees.h2)}</h2><p>${esc(m.fees.intro)}</p>${m.fees.tables.map((t) => `${table(t.caption, m.fees.head, t.rows.map((r) => r.map(esc)))}<p>Source: ${a([t.url, t.urlLabel])}.</p>`).join('')}<p>${esc(m.fees.renewalNote)} See the ${a(m.fees.renewalLink)}.</p></section>`);
  s.push(`<section><h2>${esc(m.training.h2)}</h2>${m.training.paras.map((p) => `<p>${esc(p)}</p>`).join('')}${ul(m.training.links.map(a))}</section>`);
  s.push(`<section><h2>Frequently asked questions about ASNT certification</h2>${m.faqs.map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join('')}</section>`);
  s.push(`<section><h2>Related certification guides</h2>${ul(m.related.map(a))}</section>`);
  s.push(`<section><h2>Sources</h2>${ul(m.sources.map(a))}<p>${esc(m.sourcesNote)}</p></section>`);
  return s.join('');
}

/** Editorial-upgrade entry for the crawler page: { [path]: { title, description, h1, html, replace, faqSchema } }. */
export function asntCertificationUpgrade(data, hours) {
  const m = resolveAsntCertification(data, hours);
  if (m.path !== ASNT_CERT_PATH) throw new Error(`asnt-certification: unexpected path ${m.path}`);
  if (m.description.length < 140 || m.description.length > 155) throw new Error(`asnt-certification: description is ${m.description.length} chars (140-155)`);
  if (m.faqs.length > 10) throw new Error('asnt-certification: the visible-Q&A extractor reads at most 10 FAQs');
  return { [ASNT_CERT_PATH]: { title: m.title, description: m.description, h1: m.h1, replace: true, faqSchema: true, html: asntCertificationHtml(m) } };
}
