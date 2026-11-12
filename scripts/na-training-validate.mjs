// Validate the North American training city records added 2026-11-11 (owner: more /ndt-training-{city}
// pages across North America, 2,000+ words each). Usage:
//   node scripts/na-training-validate.mjs <slug> [<slug> ...]    or    --all
// Checks src/data/na-training-2026-11/{slug}.json (profile facts) and
// src/data/deep-content/ndt-training-{slug}.json (long-form copy): fields, 2,000+ words of copy,
// headings and FAQ, internal links that exist in dist/, and the site's honesty rules for training
// copy (no prices, dates, classrooms, live classes, time promises, unoffered certifications,
// founder methods), plus no sentence of 10+ words shared with any other training deep-content file.
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const MANIFEST = JSON.parse(readFileSync(join(ROOT, 'src/data/na-training-2026-11/_manifest.json'), 'utf8')).cities;
const DEEP = join(ROOT, 'src/data/deep-content');
const DIST = join(ROOT, 'dist');
const PROFILES_TS = readFileSync(join(ROOT, 'src/data/training-cities.ts'), 'utf8');
const EXISTING_PROFILE = new Set([...PROFILES_TS.matchAll(/slug:\s*"([a-z0-9-]+)",\s*\n\s*city:/g)].map((m) => m[1]).concat(['los-angeles', 'denver', 'philadelphia', 'pittsburgh', 'charlotte', 'new-orleans'])); // the last six fall back to a nearby band in the wiring script

const BANNED = [
  [/\$\s?\d|\bUSD\b|\bCAD\b|\d+\s?k\s?\/\s?(?:yr|year)|\bper year\b.*\d/i, 'money figure'],
  [/\b(?:cohort|intake|next class|seats? (?:left|available)|enrol(?:l)? by|start(?:s|ing)? on (?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec))/i, 'course dates / cohorts'],
  [/(?<![-\w])(?:20(?:2[6-9]|3\d))\b(?![^<]{0,40}(?:edition|revision|SNT-TC-1A|CP-189|ASME|AWS|API|ASTM|ISO|CSA|CAN\/CGSB))/i, 'a year that reads like a schedule (check context)'],
  [/\bour (?:[A-Z][a-z]+ )?(?:classroom|campus|training (?:center|centre)|facility|lab|office|instructors in)\b|\batlantis (?:ndt )?(?:classroom|campus|training (?:center|centre)) in\b/i, 'Atlantis classroom/office claim'],
  [/\blive(?:[- ]online)? (?:class|classes|session|sessions|classroom|cohort)|\binstructor-led\b|\blive-virtual\b/i, 'live class claim'],
  [/within 24 hours|24-hour|same[- ]day|\bguarantee|\b#1\b|best ndt school|pass rate|job placement|placement assistance|job guarantee/i, 'banned promise'],
  [/NAS\s?410/i, 'NAS 410'],
  [/(?:atlantis|we)\s+(?:offer|provide|deliver|run)s?\s+[^.<]{0,40}(?:API\s?(?:510|570|653)|AWS\s?CWI|\bCWI\b|ISO\s?9712|\bPCN\b|CSWIP|CGSB)\s+(?:training|courses?|certification)/i, 'unoffered certification offered'],
  [/Level III in (?:[A-Z]{2,4}, )*(?:ET|PAUT|TOFD)\b|Level III in UT, RT, MT, PT,? (?:and )?(?:VT,? (?:and )?)?ET/i, 'founder methods wrong'],
  [/\b(?:prices?|pricing|fees? (?:are|start|from)|costs? (?:from|start))\b(?![^.]{0,80}(?:published|on this page|table|portal|contact))/i, 'price wording (point to the published table or contact)'],
];
const text = (h) => h.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&[a-z#0-9]+;/g, ' ').replace(/\s+/g, ' ').trim();
const sentences = (t) => t.split(/(?<=[.?!])\s+/).map((s) => s.trim().toLowerCase()).filter((s) => s.split(' ').length >= 10);

// sentence pool from every training deep-content file
const pool = new Map();
for (const f of readdirSync(DEEP).filter((n) => /^ndt-training-.*\.json$/.test(n))) {
  try {
    const d = JSON.parse(readFileSync(join(DEEP, f), 'utf8'));
    for (const s of sentences(text(d.bodyHtml || ''))) { if (!pool.has(s)) pool.set(s, new Set()); pool.get(s).add(f.replace(/^ndt-training-|\.json$/g, '')); }
  } catch { /* reported per slug */ }
}

const args = process.argv.slice(2);
const slugs = args.includes('--all') ? Object.keys(MANIFEST).filter((s) => existsSync(join(DEEP, `ndt-training-${s}.json`))) : args;
if (!slugs.length) { console.error('usage: node scripts/na-training-validate.mjs <slug> ... | --all'); process.exit(2); }
let failed = 0;
for (const slug of slugs) {
  const problems = [];
  const m = MANIFEST[slug];
  if (!m) { console.log(`✗ ${slug}: not in _manifest.json`); failed++; continue; }
  const [name, abbr, country] = m;
  const pf = join(ROOT, 'src/data/na-training-2026-11', `${slug}.json`);
  const df = join(DEEP, `ndt-training-${slug}.json`);
  let p = null; let d = null;
  try { p = JSON.parse(readFileSync(pf, 'utf8')); } catch (e) { problems.push(`profile file: ${e.message}`); }
  try { d = JSON.parse(readFileSync(df, 'utf8')); } catch (e) { problems.push(`deep-content file: ${e.message}`); }
  if (p) {
    if (p.slug !== slug) problems.push('profile slug mismatch');
    for (const k of ['lat', 'lng', 'localContext', 'certPathwayNote', 'salaryFrom', 'siblings']) if (p[k] === undefined) problems.push(`profile missing ${k}`);
    const lc = String(p.localContext || '').split(/\s+/).length; if (lc < 50 || lc > 130) problems.push(`localContext ${lc} words (60-110)`);
    const cp = String(p.certPathwayNote || '').split(/\s+/).length; if (cp < 30 || cp > 100) problems.push(`certPathwayNote ${cp} words (40-80)`);
    if (!EXISTING_PROFILE.has(p.salaryFrom)) problems.push(`salaryFrom "${p.salaryFrom}" is not an existing profile slug in training-cities.ts`);
    if (!Array.isArray(p.siblings) || p.siblings.length < 3) problems.push('siblings needs 3-6 slugs');
    for (const s of p.siblings || []) if (!existsSync(join(DIST, `ndt-training-${s}`)) && !MANIFEST[s]) problems.push(`sibling "${s}" has no training page`);
    if (country === 'Canada') {
      const cm = p.canadaMeta || {};
      if (!cm.title || cm.title.length > 60 || !/SNT-TC-1A/.test(cm.title)) problems.push('canadaMeta.title must be <= 60 chars and say SNT-TC-1A');
      if (!cm.description || cm.description.length < 140 || cm.description.length > 155) problems.push(`canadaMeta.description ${cm.description?.length} chars (140-155, the Canada gate)`);
      if (!cm.h1 || !/SNT-TC-1A/.test(cm.h1)) problems.push('canadaMeta.h1 must say SNT-TC-1A');
    }
    for (const [re, label] of BANNED) { const all = `${p.localContext} ${p.certPathwayNote}`; const mm = all.match(re); if (mm) problems.push(`profile ${label}: "...${all.slice(Math.max(0, mm.index - 40), mm.index + 50)}..."`); }
  }
  if (d) {
    if (d.path !== `/ndt-training-${slug}`) problems.push(`deep-content path must be /ndt-training-${slug}`);
    const h = String(d.bodyHtml || '');
    const t = text(h);
    const words = t.split(' ').length;
    if (words < 2000) problems.push(`copy is ${words} words (2,000-2,600)`);
    const h2 = (h.match(/<h2[\s>]/g) || []).length; if (h2 < 9) problems.push(`${h2} <h2> headings (need 9+)`);
    const h3 = (h.match(/<h3[\s>]/g) || []).length; if (h3 < 8) problems.push(`${h3} FAQ <h3> questions (need 8+)`);
    if (!new RegExp(`no classroom in ${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'i').test(t)) problems.push(`must say plainly "Atlantis NDT has no classroom in ${name}"`);
    if (/<(?:script|style|img|iframe)/i.test(h) || /style="/i.test(h)) problems.push('only plain HTML (no script, style, img, inline styles)');
    for (const [, href] of h.matchAll(/href="([^"]+)"/g)) {
      if (/^https?:/.test(href)) continue;
      const pth = href.split('#')[0].split('?')[0].replace(/\/$/, '');
      if (!pth) continue;
      const slugOf = pth.match(/^\/ndt-training-([a-z0-9-]+)$/);
      if (slugOf && MANIFEST[slugOf[1]]) continue;
      if (!existsSync(join(DIST, pth.replace(/^\//, ''), 'index.html')) && !existsSync(join(DIST, `${pth.replace(/^\//, '')}.html`))) problems.push(`link ${href} is not a built page`);
    }
    for (const [re, label] of BANNED) { const mm = t.match(re); if (mm) problems.push(`${label}: "...${t.slice(Math.max(0, mm.index - 50), mm.index + 60)}..."`); }
    for (const s of sentences(t)) { const owners = [...(pool.get(s) || [])].filter((x) => x !== slug); if (owners.length) problems.push(`sentence also in ${owners.slice(0, 3).join(', ')}: "${s.slice(0, 80)}"`); }
    console.log(`${problems.length ? '✗' : '✓'} ${slug}: ${words} words, ${h2} h2, ${h3} h3`);
  }
  for (const pr of problems.slice(0, 25)) console.log(`    - ${pr}`);
  if (problems.length) failed++;
}
console.log(failed ? `\n${failed} record(s) need fixing.` : '\nAll checked records pass.');
process.exit(failed ? 1 : 0);
