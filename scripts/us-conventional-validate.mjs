// Validator for the US conventional NDT city pages (MT, PT, UT; reworded RT) — 2026-11-14.
//
// Owner, 2026-11-14: "focus on Conventional NDT inspection services (MT, PT & UT in USA, not RT - we
// cannot perform it due to regulatory requirements … upgrade those to higher level quality content
// with 2000+ … do not add advanced NDT methods including PAUT, LRUT or anything". RT city pages keep
// their URLs and say plainly that Atlantis does not perform radiography in the US.
//
// Usage: node scripts/us-conventional-validate.mjs [slug ...]   (no slugs = every record present)
// Cross-page checks (shared sentences, 8-word shingle similarity) always compare against every
// record in the folder, so a writer validating two cities is checked against all earlier ones.
// Also imported by scripts/us-conventional-ndt-2026-11.mjs, which runs it over everything at build.
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..');
export const DATA_DIR = join(ROOT, 'src', 'data', 'us-conventional-ndt-2026-11');
export const CITIES = JSON.parse(readFileSync(join(DATA_DIR, '_cities.json'), 'utf8')).cities;
export const METHOD_SLUGS = { ut: 'ultrasonic-testing', mt: 'magnetic-particle-testing', pt: 'penetrant-testing', rt: 'radiographic-testing' };

export const textOf = (html) => String(html || '').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ').trim();
export const wordCount = (html) => textOf(html).split(' ').filter(Boolean).length;
const norm = (s) => s.toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
const sentences = (html) => textOf(html).split(/(?<=[.!?])\s+(?=[A-Z0-9“"(])/).map(norm).filter((s) => s.split(' ').length >= 10);
const shingles = (html, n = 8) => { const w = norm(textOf(html)).split(' '); const s = new Set(); for (let i = 0; i + n <= w.length; i++) s.add(w.slice(i, i + n).join(' ')); return s; };
const jaccard = (a, b) => { let i = 0; for (const x of a) if (b.has(x)) i++; return i / (a.size + b.size - i || 1); };

const ALLOWED_TAGS = new Set(['p', 'h2', 'h3', 'ul', 'ol', 'li', 'strong', 'em', 'a', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'caption', 'br']);
const EXTERNAL_OK = /^https:\/\/([a-z0-9-]+\.)*(gov|asme\.org|aws\.org|asnt\.org|api\.org|astm\.org|nationalboard\.org)(\/|$)/i;

// Patterns every page must avoid. Each is [label, regex]. Applied to the visible text.
const FORBIDDEN = [
  ['price', /\$\s?\d|\bUSD\b|\bpric(e|es|ing)\b|\bday rate|\bhourly rate|\bcheap(est)?\b|\blowest cost\b/i],
  ['local presence', /\b(our|atlantis(?:['’]s)?)\s+(local\s+)?(office|lab|laboratory|facility|branch|warehouse|base|yard|depot|shop)\s+(in|at|near|outside)\b|\blocal (office|branch|crew|technicians|team)\b|\bbased (in|out of)\b|\bheadquarter/i],
  ['time promise', /\b(same[- ]day|next[- ]day|24\/7|round[- ]the[- ]clock|overnight|rush)\b|(report|results|turnaround|respond|response|reply|mobili[sz]\w*|arriv\w*|on site|deliver\w*)[^.]{0,50}\bwithin\s+\d+/i],
  ['advanced method', /\b(PAUT|phased[- ]array|TOFD|time[- ]of[- ]flight|guided[- ]wave|LRUT|long[- ]range ultrasonic|AUT|automated ultrasonic|MFL|magnetic flux leakage|eddy[- ]current|ECA|ACFM|acoustic emission|pulsed eddy|PEC|IRIS|digital radiography|computed radiography|computed tomography|CT scan|drone|robotic crawler|thermograph\w*|infrared)\b/i],
  ['unheld accreditation', /\bISO\s*\/?\s*(IEC\s*)?170(20|25|24)\b|\baccredit\w*|\bNadcap\b|\bNAS\s*410\b/i],
  ['CWI / API inspector offer', /\bCWI\b|certified welding inspector|\b(we|atlantis|our)\b[^.]{0,40}\bAPI[- ]?(510|570|653)[- ]?(certified|authori[sz]ed)\b|\bour (API|authori[sz]ed) (inspectors?|510|570|653)\b/i],
  ['client claim', /\b(our clients|clients (include|such as)|trusted by|we have (worked|served)|we['’]ve (worked|served)|customers include|for clients such as|client list)\b/i],
  ['superlative', /\b(the best|#1|number one|top[- ]rated|premier|world[- ]class|industry[- ]leading|market[- ]leading|unmatched|unrivall?ed)\b/i],
  ['guarantee', /\bguarantee/i],
  ['training scheme Atlantis does not offer', /\b(CWI|API(?: 510| 570| 653)?|PCN|CSWIP|ISO 9712|CGSB|NAS 410)\b[^.]{0,20}\b(training|course|exam prep|certification program)\b/i],
  ['certifying people', /\b(we|atlantis)\b[^.]{0,30}\bcertif(y|ies)\b/i],
  ['RT/ET in founder list', /Level III in [^.]{0,60}\b(ET|eddy)\b/i],
];
const NEGATION = /\b(not|n['’]t|never|no longer|without|instead of|rather than|nor)\b/i;
const RT_OFFER = /\b(we|atlantis|our (team|technicians|crews?))\b[^.]{0,60}\b(perform|offer|provide|carry out|conduct|shoot|expose|run)\w*\b[^.]{0,50}\b(radiograph\w*|RT|X-ray|gamma)\b/i;

const CODE_REF = /ASME Section V|Article (4|5|6|7|23)|ASTM E\s?(164|165|709|797|1444|1417|2375)|AWS D1\.[1-8]|API (510|570|653|1104)|B31\.[1-9]/i;
const METHOD_MUST = {
  ut: [/thickness/i, /weld/i],
  mt: [/ferromagnetic/i],
  pt: [/(surface[- ]breaking|open to the surface)/i],
};

function cityBySlug(slug) { return CITIES.find((c) => c.slug === slug); }

/** Every internal path a page may link to: the build output plus the planned city pages. */
export function linkTargets() {
  const t = new Set();
  const dist = join(ROOT, 'dist');
  if (existsSync(dist)) {
    const walk = (dir, base) => { for (const e of readdirSync(dir, { withFileTypes: true })) { if (!e.isDirectory()) continue; const p = `${base}/${e.name}`; if (existsSync(join(dir, e.name, 'index.html'))) t.add(p); if (base.split('/').length < 4) walk(join(dir, e.name), p); } };
    walk(dist, '');
  }
  for (const p of plannedPaths()) t.add(p);
  return t;
}
function plannedPaths() {
  const t = [];
  for (const c of CITIES) for (const k of ['ut', 'mt', 'pt', 'rt']) if (k !== 'rt' || c.rt) t.push(`/${METHOD_SLUGS[k]}-${c.slug}`);
  return t;
}

export function loadRecords(slugs) {
  const out = {};
  for (const c of CITIES) {
    if (slugs && !slugs.includes(c.slug)) continue;
    const f = join(DATA_DIR, `${c.slug}.json`);
    if (existsSync(f)) out[c.slug] = JSON.parse(readFileSync(f, 'utf8'));
  }
  return out;
}

function pageProblems(city, key, pg, targets) {
  const errs = [];
  const where = `${city.slug}/${key}`;
  if (!pg || typeof pg !== 'object') return [`${where}: page missing`];
  const isRt = key === 'rt';
  if (!pg.title || pg.title.length < 30 || pg.title.length > 60) errs.push(`${where}: title length ${pg.title?.length} (30-60)`);
  if (!pg.description || pg.description.length < 140 || pg.description.length > 158) errs.push(`${where}: description length ${pg.description?.length} (140-158)`);
  if (!pg.h1 || !pg.h1.includes(city.city.replace(', DC', ''))) errs.push(`${where}: h1 must name ${city.city}`);
  const html = String(pg.html || '');
  for (const m of html.matchAll(/<\/?([a-z0-9]+)\b[^>]*>/gi)) if (!ALLOWED_TAGS.has(m[1].toLowerCase())) errs.push(`${where}: tag <${m[1]}> not allowed`);
  if (/\sstyle=|\sclass=|\sid=|<script|<h1/i.test(html)) errs.push(`${where}: no style/class/id/script/h1 in html`);
  const faq = Array.isArray(pg.faq) ? pg.faq : [];
  const faqHtml = faq.map((f) => `<h3>${f.q}</h3><p>${f.a}</p>`).join('');
  const words = wordCount(html) + wordCount(faqHtml);
  const h2 = (html.match(/<h2[ >]/gi) || []).length;
  if (isRt) {
    if (words < 650 || words > 1300) errs.push(`${where}: ${words} words (RT page 650-1300)`);
    if (h2 < 4) errs.push(`${where}: ${h2} h2 (RT page needs 4+)`);
    if (faq.length < 4) errs.push(`${where}: ${faq.length} FAQ (RT page needs 4+)`);
    const t = textOf(html + faqHtml);
    if (!/does not (perform|offer|carry out|provide)[^.]{0,80}(radiograph|RT\b|radiography)/i.test(t)) errs.push(`${where}: must say Atlantis does not perform radiography in the US`);
    if (!/\b(United States|U\.S\.|US)\b/.test(t)) errs.push(`${where}: must name the United States`);
  } else {
    if (words < 2050) errs.push(`${where}: ${words} words (method page needs 2,050+ before the shared blocks)`);
    if (h2 < 7) errs.push(`${where}: ${h2} h2 (method page needs 7+)`);
    if (faq.length < 8) errs.push(`${where}: ${faq.length} FAQ (method page needs 8+)`);
    const t = textOf(html + faqHtml);
    const cityName = city.city.replace(', DC', '');
    if ((t.match(new RegExp(cityName.replace(/[.]/g, '\\.'), 'g')) || []).length < 5) errs.push(`${where}: name ${cityName} at least 5 times`);
    if (!CODE_REF.test(t)) errs.push(`${where}: cite at least one governing code or standard`);
    if (!/mobili[sz]|travel(s|ling)? to (your|the) (site|plant|facility|yard|shop)/i.test(t)) errs.push(`${where}: state the delivery model (technicians mobilised / travel to your site)`);
    for (const re of METHOD_MUST[key]) if (!re.test(t)) errs.push(`${where}: must cover ${re}`);
  }
  for (const f of faq) {
    if (!f.q || !/\?$/.test(f.q.trim())) errs.push(`${where}: FAQ question must end with "?": ${String(f.q).slice(0, 60)}`);
    if (wordCount(f.a) < 25) errs.push(`${where}: FAQ answer under 25 words: ${String(f.q).slice(0, 60)}`);
    if (/<(?!\/?(a|strong|em)\b)/i.test(String(f.a))) errs.push(`${where}: FAQ answer may only use <a>, <strong>, <em>`);
  }
  const all = textOf(`${pg.title} ${pg.description} ${pg.h1} ${html} ${faqHtml}`);
  for (const [label, re] of FORBIDDEN) { const m = all.match(re); if (m) errs.push(`${where}: ${label}: "${m[0]}"`); }
  for (const s of all.split(/(?<=[.!?])\s+/)) if (RT_OFFER.test(s) && !NEGATION.test(s)) errs.push(`${where}: offers radiography: "${s.slice(0, 120)}"`);
  if (city.slug !== 'houston' && /\bHouston\b[^.]{0,30}\boffice\b/i.test(all)) errs.push(`${where}: do not mention a Houston office on non-Houston pages`);
  for (const m of (html + faqHtml).matchAll(/href="([^"]+)"/g)) {
    const href = m[1];
    if (/^https?:/i.test(href)) { if (!EXTERNAL_OK.test(href)) errs.push(`${where}: external link not on the allow list: ${href}`); continue; }
    if (href.startsWith('/contact?')) continue;
    const path = href.split(/[?#]/)[0].replace(/\/$/, '') || '/';
    if (!targets.has(path)) errs.push(`${where}: link target not built or planned: ${href}`);
  }
  return errs;
}

/**
 * @param {string[]|null} slugs  records to check in full (null = all present)
 * @returns {{errors: string[], checked: number, maxSim: number}}
 */
export function validateUsConventional(slugs = null, { requireAll = false, targets: given = null } = {}) {
  const errors = [];
  // At build time dist/ is being rewritten, so the build passes the route list (BUILT_PATHS) instead.
  const targets = given ? new Set([...given, ...plannedPaths()]) : linkTargets();
  const all = loadRecords(null);
  const check = slugs ? slugs : Object.keys(all);
  if (requireAll) for (const c of CITIES) if (!all[c.slug]) errors.push(`${c.slug}: record missing`);
  for (const slug of check) {
    const city = cityBySlug(slug);
    if (!city) { errors.push(`${slug}: not in _cities.json`); continue; }
    const rec = all[slug];
    if (!rec) { errors.push(`${slug}: record missing`); continue; }
    if (rec.slug !== slug) errors.push(`${slug}: record slug "${rec.slug}" does not match file`);
    if (!Array.isArray(rec.sources) || rec.sources.filter((s) => /^https?:\/\//.test(s)).length < 4) errors.push(`${slug}: list 4+ source URLs in "sources"`);
    const keys = ['ut', 'mt', 'pt', ...(city.rt ? ['rt'] : [])];
    for (const k of keys) errors.push(...pageProblems(city, k, rec.pages?.[k], targets));
    for (const k of Object.keys(rec.pages || {})) if (!keys.includes(k)) errors.push(`${slug}: unexpected page "${k}"${k === 'rt' ? ' (new cities get no RT page)' : ''}`);
  }
  // Cross-page: no sentence of 10+ words appears on two pages; 8-word shingle similarity stays low.
  const pages = [];
  for (const [slug, rec] of Object.entries(all)) for (const [k, pg] of Object.entries(rec.pages || {})) {
    const html = String(pg.html || '') + (pg.faq || []).map((f) => `<h3>${f.q}</h3><p>${f.a}</p>`).join('');
    pages.push({ id: `${slug}/${k}`, slug, k, sents: sentences(html), sh: shingles(html) });
  }
  const seen = new Map();
  for (const p of pages) for (const s of new Set(p.sents)) { if (!seen.has(s)) seen.set(s, []); seen.get(s).push(p.id); }
  const focus = new Set(check);
  for (const [s, ids] of seen) if (ids.length > 1 && ids.some((id) => focus.has(id.split('/')[0]))) errors.push(`shared sentence on ${ids.join(', ')}: "${s.slice(0, 110)}"`);
  let maxSim = 0;
  for (let i = 0; i < pages.length; i++) for (let j = i + 1; j < pages.length; j++) {
    const a = pages[i], b = pages[j];
    if (!focus.has(a.slug) && !focus.has(b.slug)) continue;
    const sim = jaccard(a.sh, b.sh);
    if (sim > maxSim) maxSim = sim;
    if (sim > 0.2) errors.push(`similar pages ${a.id} ~ ${b.id}: 8-word Jaccard ${sim.toFixed(3)} (max 0.20)`);
  }
  return { errors, checked: check.length, maxSim };
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const args = process.argv.slice(2);
  const { errors, checked, maxSim } = validateUsConventional(args.length ? args : null);
  if (errors.length) { console.error(errors.join('\n')); console.error(`\n✗ ${errors.length} problem(s) in ${checked} record(s)`); process.exit(1); }
  console.log(`✓ ${checked} record(s) pass · max 8-word similarity ${maxSim.toFixed(3)}`);
}
