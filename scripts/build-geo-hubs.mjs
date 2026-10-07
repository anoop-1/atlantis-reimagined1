// Geo hub pages (2026-10-02): one hub per product family per state / province /
// country — /ndt-training-{state}, /ndt-consulting-{slug},
// /inspection-services-{state}, and later erp / practical international hubs.
//
// Mirrors the Practical NDT pipeline (scripts/build-practical-ndt-routes.mjs):
// content agents write JSON arrays to scratchpad/output-geohub-{family}-{batch}.json
// (schema: scratchpad/geohub-brief.md); this script merges them (later file wins
// per path), validates every page and generates:
//   - scripts/geo-hub-routes.mjs     prerender routes (GEO_HUB_ROUTES)
//   - src/data/geo-hubs.json         light index (React routes + hub directories)
//   - src/data/geo-hubs-pages.json   full records; scripts/emit-content-json.mjs
//                                    writes one file per page to
//                                    public/data/geohubs/<path-without-slash>.json
//
// Never overwrites a page that already exists: any path already built (dist/),
// declared in src/App.tsx, or listed in a sitemap is REJECTED — e.g.
// /ndt-consulting-texas is a live page with its own component.
//
// Usage: node scripts/build-geo-hubs.mjs [--scratch <dir>] [--dry-run]
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync, mkdirSync } from 'fs';
import { join } from 'path';
import { findOfferingHits } from './assert-no-rbi-ffs-offering.mjs';

const args = process.argv.slice(2);
const argVal = (k) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : null; };
const SCRATCH = argVal('--scratch') ||
  'C:/Users/anuan/AppData/Local/Temp/claude/e--software-Atlantis/121cc0cc-ff27-4dc3-94e5-8cff90e8bd9c/scratchpad';
const DRY = args.includes('--dry-run');
// --out <dir>: write the generated files under <dir> instead of the repo (tests).
const OUT = argVal('--out') || '.';
const ROOT = process.cwd();
const SITE = 'https://atlantisndt.com';
const TODAY = new Date().toISOString().slice(0, 10);
const INDEX_FILE = 'src/data/geo-hubs.json';
const PAGES_FILE = 'src/data/geo-hubs-pages.json';
const ROUTES_FILE = 'scripts/geo-hub-routes.mjs';

// family -> path shape, section hub (breadcrumb + directory host), label
export const FAMILIES = {
  training: { re: /^\/ndt-training-[a-z0-9]+(-[a-z0-9]+)*$/, hub: '/training', hubName: 'Training', schema: 'course' },
  consulting: { re: /^\/ndt-consulting-[a-z0-9]+(-[a-z0-9]+)*$/, hub: '/consulting', hubName: 'Consulting', schema: 'service', serviceType: 'NDT Level III consulting' },
  inspection: { re: /^\/inspection-services-[a-z0-9]+(-[a-z0-9]+)*$/, hub: '/inspection-services', hubName: 'Inspection Services', schema: 'service', serviceType: 'NDT inspection services' },
  erp: { re: /^\/[a-z0-9]+(-[a-z0-9]+)*$/, hub: '/erp', hubName: 'ERP', schema: 'service', serviceType: 'NDT ERP and inspection management software' },
  practical: { re: /^\/practical-ndt-[a-z0-9]+(-[a-z0-9]+)*$/, hub: '/practical-ndt', hubName: 'Practical NDT', schema: 'service', serviceType: 'Online practical NDT simulation' },
  // API inspection programme (2026-10-04): one hub per standard per US state /
  // Canadian province. Atlantis performs the NDE; the owner's API Authorized
  // Inspector stays inspector of record (scratchpad/geohub-family-api.md).
  // `places` restricts the slug to a state/province so a city page
  // (/api-653-tank-inspection-baton-rouge already exists) can never be built
  // through this family.
  api653: { re: /^\/api-653-tank-inspection-[a-z0-9]+(-[a-z0-9]+)*$/, prefix: '/api-653-tank-inspection-', places: true, hub: '/inspection-services', hubName: 'Inspection services', schema: 'service', serviceType: 'API 653 aboveground storage tank NDE inspection support' },
  api510: { re: /^\/api-510-pressure-vessel-inspection-[a-z0-9]+(-[a-z0-9]+)*$/, prefix: '/api-510-pressure-vessel-inspection-', places: true, hub: '/inspection-services', hubName: 'Inspection services', schema: 'service', serviceType: 'API 510 pressure vessel NDE inspection support' },
  api570: { re: /^\/api-570-piping-inspection-[a-z0-9]+(-[a-z0-9]+)*$/, prefix: '/api-570-piping-inspection-', places: true, hub: '/inspection-services', hubName: 'Inspection services', schema: 'service', serviceType: 'API 570 process piping NDE inspection support' },
  // Code-question guides: /api-inspection/{slug}. TechArticle, no Service offer.
  apiguide: { re: /^\/api-inspection\/[a-z0-9]+(-[a-z0-9]+)*$/, hub: '/inspection-services', hubName: 'Inspection services', schema: 'article' },
};

// Slugs allowed for families with `places: true`: US states + DC, Canadian provinces/territories.
export const PLACE_SLUGS = new Set([
  'alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut', 'delaware', 'district-of-columbia', 'florida', 'georgia',
  'hawaii', 'idaho', 'illinois', 'indiana', 'iowa', 'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan',
  'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'new-hampshire', 'new-jersey', 'new-mexico', 'new-york',
  'north-carolina', 'north-dakota', 'ohio', 'oklahoma', 'oregon', 'pennsylvania', 'rhode-island', 'south-carolina', 'south-dakota',
  'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington', 'west-virginia', 'wisconsin', 'wyoming',
  'alberta', 'british-columbia', 'manitoba', 'new-brunswick', 'newfoundland-and-labrador', 'nova-scotia', 'ontario', 'prince-edward-island',
  'quebec', 'saskatchewan', 'northwest-territories', 'nunavut', 'yukon',
]);

// ── 1. load + merge (later file wins per path) ────────────────────────────
const files = existsSync(SCRATCH)
  ? readdirSync(SCRATCH).filter((f) => /^output-(?:geohub|apiguide)-.*.json$/.test(f))
    .map((f) => ({ f, t: statSync(join(SCRATCH, f)).mtimeMs })).sort((a, b) => a.t - b.t || a.f.localeCompare(b.f)).map((x) => x.f)
  : [];
if (!files.length) { console.error(`No output-geohub-*.json files in ${SCRATCH}`); process.exit(1); }

const byPath = new Map();
const loadErrors = [];
for (const f of files) {
  let items;
  try { items = JSON.parse(readFileSync(join(SCRATCH, f), 'utf-8')); } catch (e) { loadErrors.push(`${f}: invalid JSON (${e.message})`); continue; }
  if (!Array.isArray(items)) { loadErrors.push(`${f}: not an array`); continue; }
  let n = 0;
  for (const it of items) {
    if (!it || typeof it !== 'object' || !it.path) continue;
    byPath.set(it.path, { ...it, _file: f });
    n++;
  }
  console.log(`${f}: ${n} items`);
}

// ── 2. existing-path set (never overwrite a live page) ────────────────────
const prevIndex = existsSync(join(OUT, INDEX_FILE)) ? JSON.parse(readFileSync(join(OUT, INDEX_FILE), 'utf-8')) : [];
const ownPaths = new Set(prevIndex.map((p) => p.path)); // our own earlier output is not "existing"
const prevPublished = new Map(prevIndex.map((p) => [p.path, p.publishedAt]));

const existing = new Map(); // path -> where seen
const addExisting = (p, src) => {
  const n = String(p).replace(/\/+$/, '') || '/';
  if (!ownPaths.has(n) && !existing.has(n)) existing.set(n, src);
};
(function walkDist(dir, rel) {
  if (!existsSync(dir)) return;
  for (const name of readdirSync(dir)) {
    if (name === 'assets' || name === 'data' || name.startsWith('.')) continue;
    const full = join(dir, name);
    let st; try { st = statSync(full); } catch { continue; }
    if (st.isDirectory()) walkDist(full, `${rel}/${name}`);
    else if (name === 'index.html' && rel) addExisting(rel, 'dist');
  }
})(join(ROOT, 'dist'), '');
if (existsSync('src/App.tsx')) {
  for (const m of readFileSync('src/App.tsx', 'utf8').matchAll(/<Route\s+path=\{?["']([^"']+)["']/g)) addExisting(m[1], 'App.tsx');
}
for (const dir of ['public', 'dist']) {
  if (!existsSync(dir)) continue;
  for (const f of readdirSync(dir).filter((x) => /^sitemap.*\.xml$/.test(x))) {
    for (const m of readFileSync(join(dir, f), 'utf8').matchAll(/<loc>https:\/\/atlantisndt\.com([^<]*)<\/loc>/g)) addExisting(m[1], `${dir}/${f}`);
  }
}
// route modules whose paths may not be built yet
for (const f of ['scripts/practical-ndt-routes.mjs', 'scripts/depth-pages-routes.mjs', 'scripts/erp-apps-routes.mjs']) {
  if (!existsSync(f)) continue;
  for (const m of readFileSync(f, 'utf8').matchAll(/"path":\s*"(\/[^"]+)"/g)) addExisting(m[1], f);
}
console.log(`\nExisting-path guard: ${existing.size} known paths`);

// Link targets that are fine even if the guard set misses them.
const LINK_OK = new Set(['/', '/contact', '/training', '/consulting', '/erp', '/practical-ndt', '/inspection-services', '/about']);

// ── 3. validation ─────────────────────────────────────────────────────────
const decode = (s) => s.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&#x27;/g, "'").replace(/&[a-z]+;|&#\d+;/g, ' ');
const textOf = (html) => decode(String(html).replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const mainOf = (html) => (String(html).match(/<main[^>]*>([\s\S]*)<\/main>/i) || [])[1] || '';
const words = (html) => textOf(html).split(' ').filter(Boolean).length;

const FORBIDDEN = [
  [/\$\s?\d/, 'dollar amount'],
  [/anu\.anoop485/i, 'personal email'],
  [/\bodoo\b/i, 'Odoo'],
  [/\bour (\w+ )?(campus|training cent(er|re)|facility in)\b/i, 'physical centre claim'],
  [/\b(visit|at) our (\w+ )?(office|centre|center|campus|lab|facility)\b/i, 'physical location claim'],
  [/\baggregateRating\b|\b\d(\.\d)? out of 5 stars\b/i, 'rating claim'],
  [/\b\d{2,3}% (pass|first-time pass|success) rate\b/i, 'pass-rate claim'],
  [/<(script|style|img|iframe|form|input)\b/i, 'disallowed tag'],
];
// Atlantis offering training for a scheme it does not teach (ISO 9712, PCN,
// CSWIP, CWI, API ICP certifications). Educational / employer-context mentions
// are fine; a sentence where Atlantis/we/our offers that training is not.
const SCHEME_SRC = String.raw`(?:EN )?ISO ?9712|PCN|CSWIP|(?:AWS )?CWI|API ?(?:510|570|653|571|577|580|1169|936)|API ICP`;
const SUBJ_SRC = String.raw`(?:Atlantis|we|our)`;
// Clause-level (split on . ! ? ; and spaced dashes): Atlantis/we/our offering
// training FOR a non-ASNT scheme, in either word order.
const SCHEME_OFFER = [
  new RegExp(String.raw`\b${SUBJ_SRC}\b[^;]{0,80}\b(?:offer|offers|deliver|delivers|provide|provides|run|runs|teach|teaches|prepare|prepares|train|trains)\b[^;]{0,60}\b(?:${SCHEME_SRC})\b[^;]{0,40}\b(?:training|course|courses|classes|class|exam prep|prep|preparation|bootcamp)\b`, 'i'),
  new RegExp(String.raw`\b${SUBJ_SRC}\b[^;]{0,60}\b(?:training|course|courses|classes|exam prep|prep|preparation)\b[^;]{0,25}\b(?:for|toward|towards|in|on)\b[^;]{0,20}\b(?:${SCHEME_SRC})\b`, 'i'),
  new RegExp(String.raw`\b${SUBJ_SRC}\b[^;]{0,40}\b(?:${SCHEME_SRC})\b (?:training|course|courses|classes|exam prep|prep course|bootcamp)\b`, 'i'),
];
const NEG = /\b(not|never|no|doesn't|don't|does not|do not|isn't|aren't|rather than|instead of|outside|separate|only ASNT|SNT-TC-1A only)\b/i;
function schemeTrainingHits(html) {
  const out = [];
  for (const c of textOf(html).split(/(?<=[.!?])\s+|;\s*|\s[—–]\s/)) {
    if (/\?\s*$/.test(c) || NEG.test(c)) continue;
    if (SCHEME_OFFER.some((re) => re.test(c))) out.push(c.slice(0, 220));
  }
  return out;
}

// API families: Atlantis performs the NDE and hands results to the owner's
// API Authorized Inspector. It is not an Authorized Inspection Agency, does
// not supply API-certified inspectors and never signs as inspector of record.
const AI_ROLE = String.raw`(?:API[ -]?(?:510|570|653)[ -])?(?:authori[sz]ed inspectors?|authori[sz]ed inspection agency|inspectors? of record)`;
const AI_CLAIM = [
  // "Atlantis is / acts as your Authorized Inspector", "we serve as inspector of record"
  new RegExp(String.raw`\b(?:Atlantis|we)\b(?:\s+(?:also|can|will|then|now))?\s+(?:is|are|act as|acts as|serve as|serves as|become|becomes)\s+(?:an?\s+|the\s+|your\s+)?${AI_ROLE}\b`, 'i'),
  // "we provide / supply / assign (certified) Authorized Inspectors"
  new RegExp(String.raw`\b(?:Atlantis|we)\b(?:\s+(?:also|can|will))?\s+(?:provide|provides|supply|supplies|assign|assigns|employ|employs|furnish|furnishes)\s+(?:an?\s+|the\s+|our\s+|your\s+)?(?:(?:certified|qualified|API[ -]certified)\s+)?${AI_ROLE}\b`, 'i'),
  // "our API 570 certified inspectors", "our API-certified inspector"
  new RegExp(String.raw`\bour\s+(?:own\s+)?(?:API[ -]?(?:510|570|653)[ -](?:certified|authori[sz]ed)|API[ -]certified|authori[sz]ed)\s+inspectors?\b`, 'i'),
  // "Atlantis signs / stamps / certifies the report"
  new RegExp(String.raw`\b(?:Atlantis|we)\b(?:\s+(?:also|can|will|then))?\s+(?:sign|signs|stamp|stamps|certify|certifies)\b[^;]{0,40}\b(?:reports?|inspections?|as inspector|(?:tanks?|vessels?|piping|circuits?|equipment) (?:as )?(?:fit|safe|compliant))\b`, 'i'),
];
function aiClaimHits(html) {
  const out = [];
  for (const c of textOf(html).split(/(?<=[.!?])\s+|;\s*|\s[—–]\s/)) {
    if (/\?\s*$/.test(c) || NEG.test(c)) continue;
    if (AI_CLAIM.some((re) => re.test(c))) out.push(c.slice(0, 220));
  }
  return out;
}

function faqPairs(main) {
  const m = main.match(/<h2[^>]*>[^<]*(frequently asked|faq)[\s\S]*?<\/h2>([\s\S]*?)(?=<h2[\s>]|$)/i);
  if (!m) return [];
  const pairs = [];
  const re = /<h3[^>]*>([\s\S]*?)<\/h3>([\s\S]*?)(?=<h3[\s>]|$)/gi;
  let x;
  while ((x = re.exec(m[2]))) {
    const q = textOf(x[1]);
    const a = textOf(x[2]);
    if (q && a) pairs.push({ q, a });
  }
  return pairs;
}

const valid = [];
const rejected = [];
const warnings = [];
for (const [path, it] of byPath) {
  const why = [];
  const fam = FAMILIES[it.family];
  if (!fam) why.push(`unknown family "${it.family}"`);
  else if (!fam.re.test(path)) why.push(`path does not match ${it.family} pattern`);
  else if (fam.places && !PLACE_SLUGS.has(path.slice(fam.prefix.length))) why.push(`${it.family} slug "${path.slice(fam.prefix.length)}" is not a US state or Canadian province (city pages are not built by this family)`);
  for (const k of ['family', 'name', 'title', 'metaDescription', 'bodyContent']) if (!it[k] || typeof it[k] !== 'string') why.push(`missing ${k}`);
  if (existing.has(path)) why.push(`path already exists (${existing.get(path)}) — never overwritten`);
  const body = String(it.bodyContent || '');
  const main = mainOf(body);
  if (!main) why.push('no <main>');
  const h1s = (body.match(/<h1[\s>]/gi) || []).length;
  if (h1s !== 1) why.push(`${h1s} <h1> elements (need exactly 1)`);
  const wc = words(main || body);
  if (wc < 2000) why.push(`only ${wc} visible words in <main>`);
  const all = `${it.title || ''}\n${it.metaDescription || ''}\n${body}`;
  for (const [re, label] of FORBIDDEN) if (re.test(all)) why.push(`forbidden: ${label} (${(all.match(re) || [''])[0]})`);
  const rbi = findOfferingHits(`<p>${it.title || ''}</p><p>${it.metaDescription || ''}</p>${body}`);
  for (const h of rbi) why.push(`RBI/FFS offering (${h.why}): ${h.s.slice(0, 160)}`);
  for (const s of schemeTrainingHits(body)) why.push(`non-ASNT scheme training offered: ${s}`);
  if (/^api/.test(it.family || '')) for (const s of aiClaimHits(body)) why.push(`Authorized Inspector / inspector-of-record claim (Atlantis supports the owner's AI, never is one): ${s}`);
  const faqs = main ? faqPairs(main) : [];
  if (faqs.length < 5) why.push(`FAQ section has ${faqs.length} h3/p pairs (need >= 5)`);

  if (why.length) { rejected.push({ path, file: it._file, why }); continue; }

  // non-fatal checks
  const w = [];
  if (it.title.length > 65) w.push(`title ${it.title.length} chars`);
  if (it.metaDescription.length < 120 || it.metaDescription.length > 165) w.push(`meta ${it.metaDescription.length} chars`);
  const ctas = (body.match(/href="\/contact\?service=/g) || []).length;
  if (ctas < 4) w.push(`${ctas} contact CTAs (<4)`);
  const dead = [];
  for (const m of body.matchAll(/href="(\/[^"#?]*)/g)) {
    const p = m[1].replace(/\/+$/, '') || '/';
    if (LINK_OK.has(p) || existing.has(p) || ownPaths.has(p) || byPath.has(p)) continue;
    dead.push(p);
  }
  if (dead.length) w.push(`links to unknown paths: ${[...new Set(dead)].join(', ')}`);
  if (w.length) warnings.push({ path, w });

  const h1 = textOf((body.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1] || '');
  valid.push({ ...it, path, wordCount: wc, faqs, h1, publishedAt: prevPublished.get(path) || TODAY });
}

// ── report ────────────────────────────────────────────────────────────────
console.log(`\n${valid.length}/${byPath.size} geo hubs passed validation.`);
const famCount = valid.reduce((m, v) => ((m[v.family] = (m[v.family] || 0) + 1), m), {});
console.log('By family:', JSON.stringify(famCount));
if (loadErrors.length) { console.log('\nLOAD ERRORS:'); loadErrors.forEach((e) => console.log('  ' + e)); }
if (rejected.length) {
  console.log('\nREJECTED:');
  for (const r of rejected) { console.log(`  ${r.path}  [${r.file}]`); r.why.forEach((x) => console.log(`      - ${x}`)); }
}
if (warnings.length) {
  console.log('\nWARNINGS (page kept):');
  for (const r of warnings) console.log(`  ${r.path}: ${r.w.join('; ')}`);
}
console.log('\nWord counts:', valid.map((v) => `${v.path}=${v.wordCount}`).join(', '));
if (DRY) { console.log('\n--dry-run: nothing written.'); process.exit(0); }
if (!valid.length) { console.error('No valid geo hubs — nothing written.'); process.exit(1); }

// ── 3b. sibling hubs ──────────────────────────────────────────────────────
// Writers could only link hubs that already existed, so a Utah training hub
// written before /ndt-consulting-utah pointed at /consulting. Every hub gets a
// generated "Atlantis services in {place}" block linking the other product hubs
// for the same place (new in this run or already live), so training ↔
// consulting ↔ inspection ↔ ERP ↔ Practical NDT are always cross-linked.
const SIBLING_FAMILIES = [
  ['training', '/ndt-training-', 'NDT training and certification'],
  ['consulting', '/ndt-consulting-', 'Level III consulting'],
  ['inspection', '/inspection-services-', 'NDT inspection services'],
  ['api653', '/api-653-tank-inspection-', 'API 653 storage tank inspection support'],
  ['api510', '/api-510-pressure-vessel-inspection-', 'API 510 pressure vessel inspection support'],
  ['api570', '/api-570-piping-inspection-', 'API 570 piping inspection support'],
  ['erp', '/ndt-erp-', 'NDT ERP software'],
  ['practical', '/practical-ndt-', 'Practical NDT simulator'],
];
const validPaths = new Set(valid.map((v) => v.path));
for (const v of valid) {
  const own = SIBLING_FAMILIES.find(([f]) => f === v.family);
  if (!own || !v.path.startsWith(own[1])) continue;
  const slug = v.path.slice(own[1].length);
  const links = SIBLING_FAMILIES
    .filter(([f]) => f !== v.family)
    .map(([, prefix, label]) => [prefix + slug, label])
    .filter(([p]) => validPaths.has(p) || (existing.has(p) && !ownPaths.has(p)) || ownPaths.has(p));
  if (!links.length || v.bodyContent.includes('data-geo-siblings')) continue;
  const block = `<h2 data-geo-siblings="1">More Atlantis NDT services in ${v.name}</h2><ul>${links
    .map(([p, label]) => `<li><a href="${p}">${label} in ${v.name}</a></li>`).join('')}</ul>`;
  v.bodyContent = v.bodyContent.replace(/<\/main>(?![\s\S]*<\/main>)/i, `${block}</main>`);
}

// ── 4. structured data ────────────────────────────────────────────────────
const ORG = { '@type': 'Organization', '@id': `${SITE}/#organization`, name: 'Atlantis NDT', url: SITE };
const EDU = { '@type': 'EducationalOrganization', name: 'Atlantis NDT', url: SITE };
function areaOf(v) {
  const isCountry = !v.region || /^country$/i.test(v.kind || '') || (v.country && v.name && v.country.toLowerCase() === v.name.toLowerCase());
  return isCountry ? { '@type': 'Country', name: v.name } : {
    '@type': 'AdministrativeArea', name: v.name,
    ...(v.country ? { containedInPlace: { '@type': 'Country', name: v.country === 'US' ? 'United States' : v.country === 'CA' ? 'Canada' : v.country } } : {}),
  };
}
function schemaFor(v) {
  const fam = FAMILIES[v.family];
  const url = `${SITE}${v.path}`;
  const graph = [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: fam.hubName, item: `${SITE}${fam.hub}` },
        { '@type': 'ListItem', position: 3, name: v.name, item: url },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: v.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];
  if (fam.schema === 'article') {
    // Code-question guide: TechArticle (+ FAQPage + BreadcrumbList above). No
    // Service / Offer node — a guide is not a product page.
    graph.push({
      '@type': 'TechArticle', '@id': `${url}#article`,
      headline: v.h1.slice(0, 110), name: v.title, description: v.metaDescription, url,
      mainEntityOfPage: url,
      author: ORG, publisher: ORG,
      datePublished: v.publishedAt, dateModified: TODAY,
      inLanguage: 'en',
      about: (Array.isArray(v.about) && v.about.length ? v.about : ['API inspection codes', 'Nondestructive examination']).map((a) => ({ '@type': 'Thing', name: String(a) })),
      ...(v.wordCount ? { wordCount: v.wordCount } : {}),
    });
  } else if (fam.schema === 'course') {
    graph.push({
      '@type': 'Course', '@id': `${url}#course`,
      name: v.h1, description: v.metaDescription, url,
      provider: EDU,
      educationalCredentialAwarded: 'Employer certification under an ASNT SNT-TC-1A written practice (Level I, II, III)',
      about: ['Nondestructive testing', 'ASNT SNT-TC-1A'],
      inLanguage: 'en',
      spatialCoverage: areaOf(v),
    });
  } else {
    graph.push({
      '@type': 'Service', '@id': `${url}#service`,
      name: v.h1, description: v.metaDescription, url,
      serviceType: fam.serviceType, provider: ORG, areaServed: areaOf(v),
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

// ── 5. outputs ────────────────────────────────────────────────────────────
valid.sort((a, b) => a.family.localeCompare(b.family) || a.path.localeCompare(b.path));
const routes = valid.map((v) => ({
  path: v.path,
  title: v.title,
  description: v.metaDescription,
  canonical: `${SITE}${v.path}`,
  bodyContent: v.bodyContent,
  publishedAt: v.publishedAt,
  geoHub: v.family,
  structuredData: schemaFor(v),
}));
mkdirSync(join(OUT, 'scripts'), { recursive: true });
mkdirSync(join(OUT, 'src/data'), { recursive: true });
writeFileSync(join(OUT, ROUTES_FILE), `// GENERATED by scripts/build-geo-hubs.mjs — do not hand-edit.
// ${routes.length} geo hub pages ${JSON.stringify(famCount)}, ${new Date().toISOString()}.
export const GEO_HUB_ROUTES = ${JSON.stringify(routes, null, 1)};
`);

const index = valid.map((v) => ({
  path: v.path, family: v.family, name: v.name, region: v.region || '', country: v.country || '', title: v.title, publishedAt: v.publishedAt,
}));
writeFileSync(join(OUT, INDEX_FILE), JSON.stringify(index, null, 1));
writeFileSync(join(OUT, PAGES_FILE), JSON.stringify(valid.map((v) => ({
  path: v.path, family: v.family, name: v.name, region: v.region || '', country: v.country || '',
  title: v.title, metaDescription: v.metaDescription, h1: v.h1, contentHtml: v.bodyContent,
}))));
console.log(`\nWrote ${join(OUT, ROUTES_FILE)} (${routes.length} routes), ${join(OUT, INDEX_FILE)}, ${join(OUT, PAGES_FILE)}.`);
console.log('Next: the build runs emit-content-json (public/data/geohubs/) and prerender picks up GEO_HUB_ROUTES.');
