// Validator for the US MT/PT/UT industry and job pages — 2026-11-17.
//
// Plan: src/data/us-industry-ndt-2026-11/_pages.json (scripts/build-us-industry-plan-2026-11.mjs).
// One record per page: src/data/us-industry-ndt-2026-11/{slug}.json
//   { slug, sources: [2+ URLs], title, description, h1, html, faq: [{q, a}] }
// Same content rules as the US city pages (scripts/us-conventional-validate.mjs): no prices, no local presence,
// no time promises, no advanced methods, no US radiography offer, no unheld accreditations, no client claims.
//
// Usage: node scripts/us-industry-validate.mjs [slug ...]   (no slugs = every record present)
// Cross-page checks compare against every record in this folder AND every US city record, so a sentence copied
// from a city page fails too.
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { textOf, wordCount, linkTargets as cityLinkTargets, loadRecords as loadCityRecords } from './us-conventional-validate.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..');
export const IND_DIR = join(ROOT, 'src', 'data', 'us-industry-ndt-2026-11');
export const PLAN = JSON.parse(readFileSync(join(IND_DIR, '_pages.json'), 'utf8')).pages;
export const METHOD_SLUG = { ut: 'ultrasonic-testing', mt: 'magnetic-particle-testing', pt: 'penetrant-testing' };
const CITY_SLUGS = JSON.parse(readFileSync(join(ROOT, 'src/data/us-conventional-ndt-2026-11/_cities.json'), 'utf8')).cities.map((c) => c.slug);

const norm = (s) => s.toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
const sentences = (html) => textOf(html).split(/(?<=[.!?])\s+(?=[A-Z0-9“"(])/).map(norm).filter((s) => s.split(' ').length >= 10);
const shingles = (html, n = 8) => { const w = norm(textOf(html)).split(' '); const s = new Set(); for (let i = 0; i + n <= w.length; i++) s.add(w.slice(i, i + n).join(' ')); return s; };
const jaccard = (a, b) => { let i = 0; for (const x of a) if (b.has(x)) i++; return i / (a.size + b.size - i || 1); };
const faqHtmlOf = (faq) => (Array.isArray(faq) ? faq : []).map((f) => `<h3>${f.q}</h3><p>${f.a}</p>`).join('');

const ALLOWED_TAGS = new Set(['p', 'h2', 'h3', 'ul', 'ol', 'li', 'strong', 'em', 'a', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'caption', 'br']);
const EXTERNAL_OK = /^https:\/\/([a-z0-9-]+\.)*(gov|asme\.org|aws\.org|asnt\.org|api\.org|astm\.org|nationalboard\.org|awwa\.org|tappi\.org|msshq\.org|aar\.org)(\/|$)/i;

const FORBIDDEN = [
  ['price', /\$\s?\d|\bUSD\b|\bpric(e|es|ing)\b|\bday rate|\bhourly rate|\bcheap(est)?\b|\blowest cost\b/i],
  ['local presence', /\b(our|atlantis(?:['’]s)?)\s+(local\s+)?(office|lab|laboratory|facility|branch|warehouse|base|yard|depot|shop)\s+(in|at|near|outside)\b|\blocal (office|branch|crew|technicians|team)\b|\bbased (in|out of)\b|\bheadquarter/i],
  ['time promise', /\b(same[- ]day|next[- ]day|24\/7|round[- ]the[- ]clock|overnight|rush)\b|(report|results|turnaround|respond|response|reply|mobili[sz]\w*|arriv\w*|on site|deliver\w*)[^.]{0,50}\bwithin\s+\d+/i],
  ['advanced method', /\b(PAUT|phased[- ]array|TOFD|time[- ]of[- ]flight|guided[- ]wave|LRUT|long[- ]range ultrasonic|AUT|automated ultrasonic|MFL|magnetic flux leakage|eddy[- ]current|ECA|ACFM|acoustic emission|pulsed eddy|PEC|IRIS|digital radiography|computed radiography|computed tomography|CT scan|drone|robotic crawler|thermograph\w*|infrared|TFM|full matrix)\b/i],
  ['unheld accreditation', /\bISO\s*\/?\s*(IEC\s*)?170(20|25|24)\b|\baccredit\w*|\bNadcap\b|\bNAS\s*410\b|\bAS\s?9100\b/i],
  ['CWI / API inspector offer', /\bCWI\b|certified welding inspector|\b(we|atlantis|our)\b[^.]{0,40}\bAPI[- ]?(510|570|653)[- ]?(certified|authori[sz]ed)\b|\bour (API|authori[sz]ed) (inspectors?|510|570|653)\b/i],
  ['client claim', /\b(our clients|clients (include|such as)|trusted by|we have (worked|served)|we['’]ve (worked|served)|customers include|for clients such as|client list)\b/i],
  ['superlative', /\b(the best|#1|number one|top[- ]rated|premier|world[- ]class|industry[- ]leading|market[- ]leading|unmatched|unrivall?ed|leading provider)\b/i],
  ['guarantee', /\bguarantee/i],
  ['training scheme Atlantis does not offer', /\b(PCN|CSWIP|ISO 9712|CGSB|NAS 410)\b[^.]{0,20}\b(training|course|exam prep|certification program)\b/i] /* 2026-11-28: API 510/570/580/653 exam prep is an Atlantis course */,
  ['certifying people', /\b(we|atlantis)\b[^.]{0,30}\bcertif(y|ies)\b/i],
  ['ET in founder list', /Level III in [^.]{0,60}\b(ET|eddy)\b/i],
];
const NEGATION = /\b(not|n['’]t|never|no longer|without|instead of|rather than|nor|no)\b/i;
// Claims that are only allowed negated ("Atlantis does not …").
const NEGATED_ONLY = [
  ['offers radiography', /\b(we|atlantis|our (team|technicians|crews?))\b[^.]{0,60}\b(perform|offer|provide|carry out|conduct|shoot|expose|run)\w*\b[^.]{0,50}\b(radiograph\w*|RT|X-ray|gamma)\b/i],
  ['airworthiness sign-off', /\b(we|atlantis|our)\b[^.]{0,50}\b(sign\w* off|approv\w*|return\w* to service|release\w*)\b[^.]{0,40}\b(airworth\w*|aircraft)\b/i],
  ['Appendix B / NQA-1 qualification', /\b(we|atlantis|our)\b[^.]{0,50}\b(Appendix B|NQA-1)\b/i],
  ['in-line inspection', /\b(we|atlantis|our)\b[^.]{0,50}\b(run|operate|perform|provide|offer)\w*\b[^.]{0,40}\b(in-line inspection|ILI|smart pig\w*)\b/i],
  ['special inspection agency', /\b(we|atlantis|our)\b[^.]{0,50}\b(special inspect\w*)\b/i],
  ['remaining life calculation', /\b(we|atlantis|our)\b[^.]{0,40}\b(calculat\w*|determin\w*|set\w*)\b[^.]{0,30}\b(remaining life|inspection interval|fitness[- ]for[- ]service)\b/i],
];

// Code references: a page must cite at least two distinct ones.
const CODE_RE = /ASME Section (I|III|V|VIII|IX)\b|Article \d+|ASTM [AE]\s?\d{2,4}|AWS D\d\.\d|API (RP |Spec )?\d{1,4}[A-Z]?|B31\.\d|B30\.\d+|BTH-1|NBIC|49 CFR (Part )?\d+|29 CFR (Part )?1910|29 CFR 1926|30 CFR (Part )?\d+|14 CFR (Part )?\d+|46 CFR|23 CFR|40 CFR|AWWA [A-Z]\d+|MSS SP-\d+|ASME BPE|3-A|SNT-TC-1A|CP-189|NFPA 59A|IEC 61400|AISC 3\d\d|FRA\b|PHMSA|MSHA|BSEE|OSHA/g;
const METHOD_MUST = {
  ut: [/thickness/i],
  mt: [/ferromagnetic/i],
  pt: [/(surface[- ]breaking|open to the surface)/i],
};

export const planBySlug = (slug) => PLAN.find((p) => p.slug === slug);
export function plannedPaths() { return PLAN.map((p) => p.path); }

export function loadRecords(slugs) {
  const out = {};
  for (const p of PLAN) {
    if (slugs && !slugs.includes(p.slug)) continue;
    const f = join(IND_DIR, `${p.slug}.json`);
    if (existsSync(f)) out[p.slug] = JSON.parse(readFileSync(f, 'utf8'));
  }
  return out;
}

function pageProblems(plan, rec, targets) {
  const errs = [];
  const where = plan.slug;
  if (rec.slug !== plan.slug) errs.push(`${where}: record slug "${rec.slug}" does not match`);
  if (!Array.isArray(rec.sources) || rec.sources.filter((s) => /^https?:\/\//.test(s)).length < 2) errs.push(`${where}: list 2+ source URLs in "sources"`);
  if (!rec.title || rec.title.length < 30 || rec.title.length > 60) errs.push(`${where}: title length ${rec.title?.length} (30-60)`);
  if (!rec.description || rec.description.length < 140 || rec.description.length > 158) errs.push(`${where}: description length ${rec.description?.length} (140-158)`);
  if (!rec.h1 || rec.h1.length < 20 || rec.h1.length > 110) errs.push(`${where}: h1 length ${rec.h1?.length} (20-110)`);
  const html = String(rec.html || '');
  for (const m of html.matchAll(/<\/?([a-z0-9]+)\b[^>]*>/gi)) if (!ALLOWED_TAGS.has(m[1].toLowerCase())) errs.push(`${where}: tag <${m[1]}> not allowed`);
  if (/\sstyle=|\sclass=|\sid=|<script|<h1/i.test(html)) errs.push(`${where}: no style/class/id/script/h1 in html`);
  const faq = Array.isArray(rec.faq) ? rec.faq : [];
  const faqHtml = faqHtmlOf(faq);
  const words = wordCount(html) + wordCount(faqHtml);
  if (words < 2050 || words > 2800) errs.push(`${where}: ${words} words (2,050-2,800 for html + faq)`);
  const h2 = (html.match(/<h2[ >]/gi) || []).length;
  if (h2 < 7) errs.push(`${where}: ${h2} h2 (7+)`);
  if (faq.length < 8) errs.push(`${where}: ${faq.length} FAQ (8+)`);
  for (const f of faq) {
    if (!f.q || !/\?$/.test(f.q.trim())) errs.push(`${where}: FAQ question must end with "?": ${String(f.q).slice(0, 60)}`);
    if (wordCount(f.a) < 25) errs.push(`${where}: FAQ answer under 25 words: ${String(f.q).slice(0, 60)}`);
    if (/<(?!\/?(a|strong|em)\b)/i.test(String(f.a))) errs.push(`${where}: FAQ answer may only use <a>, <strong>, <em>`);
  }
  const t = textOf(html + faqHtml);
  if (!/\b(United States|U\.S\.|US)\b/.test(t)) errs.push(`${where}: must name the United States`);
  if (!/mobili[sz]|travel(s|ling)? to (your|the) (site|plant|facility|yard|shop|mill|mine|terminal)/i.test(t)) errs.push(`${where}: state the delivery model (technicians mobilized / travel to your site)`);
  const codes = new Set((t.match(CODE_RE) || []).map((x) => x.replace(/\s+/g, ' ')));
  if (codes.size < 3) errs.push(`${where}: cite at least three distinct codes, standards or regulators (found ${[...codes].join(', ') || 'none'})`);
  for (const re of METHOD_MUST[plan.method]) if (!re.test(t)) errs.push(`${where}: must cover ${re}`);
  const all = textOf(`${rec.title} ${rec.description} ${rec.h1} ${html} ${faqHtml}`);
  for (const [label, re] of FORBIDDEN) { const m = all.match(re); if (m) errs.push(`${where}: ${label}: "${m[0]}"`); }
  for (const s of all.split(/(?<=[.!?])\s+/)) for (const [label, re] of NEGATED_ONLY) if (re.test(s) && !NEGATION.test(s)) errs.push(`${where}: ${label} (only allowed negated): "${s.slice(0, 120)}"`);
  if (/\bHouston\b[^.]{0,30}\boffice\b/i.test(all)) errs.push(`${where}: do not mention the Houston office on these pages`);
  // Links
  const hrefs = [...(html + faqHtml).matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
  const internal = new Set();
  for (const href of hrefs) {
    if (/^https?:/i.test(href)) { if (!EXTERNAL_OK.test(href)) errs.push(`${where}: external link not on the allow list: ${href}`); continue; }
    if (href.startsWith('/contact?')) { internal.add('/contact'); continue; }
    const path = href.split(/[?#]/)[0].replace(/\/$/, '') || '/';
    internal.add(path);
    if (!targets.has(path)) errs.push(`${where}: link target not built or planned: ${href}`);
  }
  const ms = METHOD_SLUG[plan.method];
  const cityLinks = [...internal].filter((p) => CITY_SLUGS.some((c) => p === `/${ms}-${c}`));
  const needCities = plan.kind === 'industry' ? 6 : 4;
  if (cityLinks.length < needCities) errs.push(`${where}: link ${needCities}+ US city pages of the same method (/${ms}-{city}); found ${cityLinks.length}`);
  if (plan.kind === 'industry') {
    for (const s of plan.siblings) if (!internal.has(s)) errs.push(`${where}: link the sibling method page ${s}`);
    for (const j of plan.jobs || []) if (!internal.has(j)) errs.push(`${where}: link the job page ${j}`);
  } else {
    const ind = plan.industries.filter((p) => internal.has(p));
    if (ind.length < 2) errs.push(`${where}: link 2+ of its industry pages (${plan.industries.join(', ')})`);
    if (plan.owner && !internal.has(plan.owner)) errs.push(`${where}: link the owner page ${plan.owner}`);
  }
  if (!internal.has('/contact')) errs.push(`${where}: include one in-text quote link to /contact?service=inspection&subject=…`);
  return errs;
}

export function validateUsIndustry(slugs = null, { requireAll = false, targets: given = null } = {}) {
  const errors = [];
  const targets = given ? new Set([...given, ...plannedPaths()]) : new Set([...cityLinkTargets(), ...plannedPaths()]);
  const all = loadRecords(null);
  const check = slugs ? slugs : Object.keys(all);
  if (requireAll) for (const p of PLAN) if (!all[p.slug]) errors.push(`${p.slug}: record missing`);
  for (const slug of check) {
    const plan = planBySlug(slug);
    if (!plan) { errors.push(`${slug}: not in _pages.json`); continue; }
    if (!all[slug]) { errors.push(`${slug}: record missing`); continue; }
    errors.push(...pageProblems(plan, all[slug], targets));
  }
  // Cross-page: this set + US city pages.
  const pages = [];
  for (const [slug, rec] of Object.entries(all)) {
    const html = String(rec.html || '') + faqHtmlOf(rec.faq);
    pages.push({ id: slug, own: true, sents: sentences(html), sh: shingles(html) });
  }
  for (const [slug, rec] of Object.entries(loadCityRecords(null))) for (const [k, pg] of Object.entries(rec.pages || {})) {
    const html = String(pg.html || '') + faqHtmlOf(pg.faq);
    pages.push({ id: `city:${slug}/${k}`, own: false, sents: sentences(html), sh: null });
  }
  const seen = new Map();
  for (const p of pages) for (const s of new Set(p.sents)) { if (!seen.has(s)) seen.set(s, []); seen.get(s).push(p.id); }
  const focus = new Set(check);
  for (const [s, ids] of seen) if (ids.length > 1 && ids.some((id) => focus.has(id))) errors.push(`shared sentence on ${ids.slice(0, 4).join(', ')}: "${s.slice(0, 110)}"`);
  let maxSim = 0;
  const own = pages.filter((p) => p.own);
  for (let i = 0; i < own.length; i++) for (let j = i + 1; j < own.length; j++) {
    const a = own[i], b = own[j];
    if (!focus.has(a.id) && !focus.has(b.id)) continue;
    const sim = jaccard(a.sh, b.sh);
    if (sim > maxSim) maxSim = sim;
    if (sim > 0.2) errors.push(`similar pages ${a.id} ~ ${b.id}: 8-word Jaccard ${sim.toFixed(3)} (max 0.20)`);
  }
  return { errors, checked: check.length, maxSim };
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const args = process.argv.slice(2);
  const { errors, checked, maxSim } = validateUsIndustry(args.length ? args : null);
  if (errors.length) { console.error(errors.join('\n')); console.error(`\n✗ ${errors.length} problem(s) in ${checked} record(s)`); process.exit(1); }
  console.log(`✓ ${checked} record(s) pass · max 8-word similarity ${maxSim.toFixed(3)}`);
}
