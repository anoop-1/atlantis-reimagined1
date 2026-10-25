// North American competitor-keyword integration — 2026-10-26 (CLAUDE.md §64).
//
// Evidence: two research passes on 2026-10-25 read what US and Canadian competitors rank with
// (Mistras, Applus+, Team, Element, ATS, Acuren, Loenbro, Intertek and SGS for inspection; Floodlight,
// AgileNDT, DRIVE NDT, Zertify and Document Locator for software, via Capterra, SourceForge and
// Frost & Sullivan; Hellier, community-college NDT programmes and ASNT for training). 393 keywords were
// checked against the built site: 137 of the 200 software/inspection phrases and most of the
// training/consulting phrases appeared nowhere on our pages, although we sell the thing they describe
// ("heat exchanger inspection services", "ILI verification", "vendor inspection", "NDT management
// software", "personnel certification records", "electronic signature", "magnetic particle
// inspection", "NDT training program", "NDT auditing services" …). GSC (90d) confirms the demand
// reaches us at positions 30–75, e.g. "heat exchanger inspection" 223 impressions p45,
// "magnetic particle inspection" 205 p30, "ndt training program" 75 p74, "ndt audit oversight" 55 p38.
//
// What this module does, for the one page that owns each phrase:
//   1. a keyword-led section (exactly one <h2>, H3 sub-answers) placed before </main>, written to
//      answer the buyer's question in the competitors' words — not keyword lists;
//   2. a small set of H1s that add the US synonym the page was missing (MPI, dye penetrant,
//      industrial X-ray, heat exchanger, vendor and source inspection, NDT management software).
// Titles and descriptions for the same pages are CTR wave 17 (src/data/ctr-wave17/*.json).
//
// One file per page: src/data/na-keyword-depth-2026-10/<path with / -> __>.json
//   { path, h2, html, keywords: [phrases that must appear verbatim], product }
// Every target page carries the atlantis-publication marker, so React serves this crawler <main>
// and both layers read the same block (one source per fact).
//
// Rules (guard below): 350–900 words; no price, fee or day-rate wording; no physical-presence claim;
// no RBI/FFS offer; no API ICP/CWI/PCN/CSWIP/CGSB/ISO 9712/NAS 410 training offer; Atlantis is never
// the Authorized Inspector or inspector of record and never runs in-line inspection; software
// sections carry no numerals except standards designations; every link is a built page.
import { readFileSync, readdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIR = join(ROOT, 'src/data/na-keyword-depth-2026-10');
export const naKeywordKey = (p) => p.replace(/^\//, '').replace(/\//g, '__');
const MARK = 'data-na-keywords="2026-10"';
const BLOCK_RE = /<section data-na-keywords="2026-10"[\s\S]*?<\/section>/g;
export const naKeywordStats = { blocks: 0, h1: 0 };

/** H1s that add the US/Canadian synonym the owning page lacked. Applied by the last body writer. */
export const NA_KEYWORD_H1 = {
  '/eddy-current-tube-inspection': 'Heat Exchanger Tube Inspection Services: Eddy Current, RFT and IRIS',
  '/inspection/ndt-inspection-services': 'NDT Inspection Services: Nondestructive Testing Chosen by Damage Mechanism',
  '/magnetic-particle-testing': 'Magnetic Particle Testing and Magnetic Particle Inspection (MT / MPI)',
  '/penetrant-testing': 'Liquid Penetrant Testing and Dye Penetrant Inspection (PT and FPI)',
  '/radiographic-testing': 'Radiographic Testing (RT): Industrial X-Ray, Gamma and Digital Radiography',
  '/magnetic-flux-leakage-testing': 'MFL Inspection: Magnetic Flux Leakage Testing for Tank Floors and Pipelines',
  '/services/mfl-pipeline-inspection': 'MFL Corrosion Inspection for Pipelines: In-Line Tools and Dig Verification',
  '/pipeline-inspection-services': 'Pipeline Integrity Inspection and Piping NDT: ILI Verification, UT, PAUT and CUI',
  '/inspection/phased-array-inspection-services': 'Phased Array Ultrasonic Testing Services (PAUT Inspection Services)',
  '/inspection/third-party-inspection-houston': 'Vendor Inspection, Source Inspection and Third Party Inspection at Houston Supplier Works',
  '/inspection/turnarounds-shutdowns': 'Turnaround Inspection Services and Shutdown NDT',
  '/inspection/ndt-inspection-services/advanced-ndt/mfl-tank-floor-inspection': 'MFL Tank Floor Inspection and Scanning for API 653',
  '/ndt-erp-solution': 'NDT Management Software (NDT ERP): Certificates, Calibration, Dispatch, Reports and Invoices',
};

let cache = null;
function load() {
  if (cache) return cache;
  cache = new Map();
  if (!existsSync(DIR)) return cache;
  for (const f of readdirSync(DIR).filter((n) => n.endsWith('.json')).sort()) {
    const d = JSON.parse(readFileSync(join(DIR, f), 'utf8'));
    if (cache.has(d.path)) throw new Error(`na-keyword-depth: ${d.path} defined twice`);
    cache.set(d.path, d);
  }
  return cache;
}
export const naKeywordBlocks = () => load();

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
export const naKeywordHtml = (d) => `<section ${MARK} data-keep-on-rewrite="1" class="container mx-auto px-6 py-10 max-w-4xl"><div class="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-primary"><h2>${esc(d.h2)}</h2>${d.html}</div></section>`;

function replaceH1(body, text) {
  return body.replace(/<h1([^>]*)>[\s\S]*?<\/h1>/i, (_m, attrs) => `<h1${attrs}>${esc(text)}</h1>`);
}

/** Last body writer for its pages (idempotent): H1 synonym, then the keyword section before </main>. */
export function applyNaKeywordDepth(route) {
  if (!route || typeof route.bodyContent !== 'string') return route;
  const p = (route.path || '').replace(/\/+$/, '') || '/';
  const d = load().get(p);
  const h1 = NA_KEYWORD_H1[p];
  if (!d && !h1) return route;
  let body = route.bodyContent;
  if (h1) {
    const before = body;
    body = replaceH1(body, h1);
    if (body !== before) naKeywordStats.h1++;
  }
  if (d) {
    body = body.replace(BLOCK_RE, '');
    const i = body.lastIndexOf('</main>');
    const html = naKeywordHtml(d);
    body = i >= 0 ? body.slice(0, i) + html + body.slice(i) : body + html;
    naKeywordStats.blocks++;
  }
  return { ...route, bodyContent: body };
}

const text = (h) => String(h).replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&[a-z#0-9]+;/g, ' ').replace(/\s+/g, ' ').trim();
const STANDARD = /\b(?:API|ASNT|ASME|ASTM|AWS|ISO|EN|NAS|SNT-TC-|CP-|B31\.|NACE|AMPP|SP|MIL|BS|CSA|CAN\/CGSB-|ANSI|NBIC|TP|UR|IEC|CFR|AMS|Annex|Article|Part|Section|Subpart|Z)\s?[-A-Z0-9./]*\d[-A-Z0-9./:]*/g;
const softwarePath = (p) => /^\/(?:erp|ndt-erp|ndt-inspection-software|best-ndt-reporting-software|ndt-reporting|inspection-management-software|digital-twin|drive-ndt-alternatives)/.test(p);

/** Content rules for one block; returns a list of problems. */
export function naKeywordProblems(d, knownPaths) {
  const out = [];
  const t = text(`${d.h2} ${d.html}`);
  const w = text(d.html).split(' ').filter(Boolean).length;
  if (w < 350 || w > 900) out.push(`words ${w}`);
  if (/<h2[\s>]/i.test(d.html)) out.push('the h2 comes from the h2 field; none allowed in html');
  if (/<h1[\s>]/i.test(d.html)) out.push('h1 in block');
  if (/<(script|style|img|iframe|form|input|section)\b/i.test(d.html)) out.push('disallowed tag');
  if (/[$£€₹]\s?\d|\bprices?\b|\bpriced\b|\bfees?\b|day rate|per day\b|\bdiscount/i.test(t)) out.push('price wording');
  if (/\b(our|the Atlantis) (\w+ )?(office|lab|laboratory|facility|cent(er|re)|campus|yard|warehouse|school|classroom)\b|\bvisit our\b/i.test(t)) out.push('physical presence claim');
  if (/\b\d{2,3}% (first-time )?pass/i.test(t)) out.push('pass-rate claim');
  if (/\b(#1|best-in-class|world-class|guaranteed|leading provider|within 24 hours|24-hour|industry-leading)\b/i.test(t)) out.push('claim wording');
  if (/anu\.anoop|@[a-z0-9-]+\.(com|net|org)/i.test(t)) out.push('email address');
  if (/\bISO\/?IEC 170(20|25|24)\b|\b170(20|25|24) (accredit|certif)/i.test(t)) out.push('ISO 17020/17025/17024 mention');
  for (const s of t.split(/(?<=[.!?])\s+/)) {
    const neg = /\b(not|never|no|isn't|doesn't|does not|don't|do not|owner's|engineer|outside)\b/i;
    if (/\b(Atlantis|we|our)\b/i.test(s) && /\b(RBI|risk[- ]based inspection|API ?5(79|80|81)|fitness[- ]for[- ]service|FFS)\b/i.test(s) && !neg.test(s)) out.push(`RBI/FFS offering? ${s.slice(0, 120)}`);
    if (/\b(Atlantis|we|our)\b/i.test(s) && /\b(CWI|API ICP|API 510|API 570|API 653|PCN|CSWIP|CGSB|ISO 9712|NAS 410|SIFE|SIRE)\b[^.]{0,40}\b(training|course|courses|exam prep|class)\b/i.test(s) && !neg.test(s)) out.push(`non-ASNT training offer? ${s.slice(0, 120)}`);
    if (/\b(Atlantis|we)\b[^.]{0,30}\b(is|are|act as|serve as|become)\b[^.]{0,20}\b(authori[sz]ed inspector|inspector of record|authori[sz]ed inspection agency)\b/i.test(s) && !/\bnot\b/i.test(s)) out.push(`AI claim? ${s.slice(0, 120)}`);
    if (/\b(Atlantis|we)\b[^.]{0,40}\b(run|runs|operate|operates|perform|performs)\b[^.]{0,30}\b(in-line inspection|ILI|smart pig|pigging)\b/i.test(s) && !neg.test(s)) out.push(`ILI claim? ${s.slice(0, 120)}`);
    if (/\b(Atlantis|we)\b[^.]{0,40}\b(job placement|financing|campus|accredited school)\b/i.test(s) && !neg.test(s)) out.push(`school claim? ${s.slice(0, 120)}`);
  }
  if (softwarePath(d.path) && /\d/.test(t.replace(STANDARD, ''))) out.push(`numeral in software copy: ${(t.replace(STANDARD, '').match(/.{0,30}\d.{0,30}/) || [''])[0]}`);
  for (const k of d.keywords || []) if (!t.toLowerCase().includes(k.toLowerCase())) out.push(`keyword missing: "${k}"`);
  if (!(d.keywords || []).length) out.push('no keywords listed');
  if (!/<h3[\s>]/i.test(d.html)) out.push('needs H3 sub-answers');
  if (knownPaths) for (const m of d.html.matchAll(/href="([^"]+)"/g)) {
    const h = m[1].split(/[?#]/)[0].replace(/\/+$/, '') || '/';
    if (!h.startsWith('/')) { out.push(`external or relative link ${m[1]}`); continue; }
    if (h !== '/contact' && !knownPaths.has(h)) out.push(`dead link ${h}`);
    if (h === d.path) out.push(`self link ${h}`);
  }
  const product = (d.html.match(/href="\/(training|ndt-level|asnt-level|[a-z-]+-training|[a-z0-9-]+-course|practical-ndt|consulting|inspection|erp|ndt-erp|ndt-practice-tests|ultrasonic-testing|radiographic-testing|magnetic-particle-testing|penetrant-testing|visual-testing|eddy-current|phased-array|tofd|pipeline-inspection|magnetic-flux|services\/|ndt-written-practice|best-ndt|drive-ndt|ndt-inspection-software|inspection-management|corrosion-)/g) || []).length;
  if (product < 3) out.push(`only ${product} product links`);
  return out;
}

/** Build guard: blocks pass the content rules and point only at built pages; H1 targets are built. */
export function assertNaKeywordDepthClean(knownPaths) {
  const problems = [];
  for (const [p, d] of load()) {
    if (knownPaths && !knownPaths.has(p)) problems.push(`${p}: page not built`);
    for (const x of naKeywordProblems(d, knownPaths)) problems.push(`${p}: ${x}`);
  }
  for (const [p, h] of Object.entries(NA_KEYWORD_H1)) {
    if (knownPaths && !knownPaths.has(p)) problems.push(`${p}: H1 target not built`);
    if (h.length > 100) problems.push(`${p}: H1 too long`);
    if (softwarePath(p) && /\d/.test(h.replace(STANDARD, ''))) problems.push(`${p}: numeral in software H1`);
  }
  if (problems.length) throw new Error(`na-keyword-depth: ${problems.length} problem(s):\n  ${problems.join('\n  ')}`);
  const kw = [...load().values()].reduce((n, d) => n + d.keywords.length, 0);
  console.log(`🔑 NA keyword depth 2026-10-26: ${load().size} sections carrying ${kw} competitor phrases + ${Object.keys(NA_KEYWORD_H1).length} H1 synonyms, guard PASS`);
}

// CLI: node scripts/na-keyword-depth-2026-10.mjs --check  (rules only, no built-path check)
if (process.argv[1] && process.argv[1].endsWith('na-keyword-depth-2026-10.mjs') && process.argv.includes('--check')) {
  let bad = 0;
  for (const [p, d] of load()) {
    const probs = naKeywordProblems(d, null);
    const w = text(d.html).split(' ').filter(Boolean).length;
    console.log(`${probs.length ? 'FAIL' : 'ok  '} ${p} (${w}w, ${d.keywords.length} kw)${probs.length ? '\n     ' + probs.join('\n     ') : ''}`);
    bad += probs.length ? 1 : 0;
  }
  process.exit(bad ? 1 : 0);
}
