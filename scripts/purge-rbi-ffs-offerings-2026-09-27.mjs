// Owner instruction 2026-09-27: RBI (API 580/581) and FFS (API 579) are not
// Atlantis products or services. Primary consulting is NDT Level III
// consulting, then business consulting. Educational RBI/FFS content (glossary,
// standards, how-it-works articles) stays; only Atlantis OFFERING them goes.
//   1. targeted rewrites of the repeated template blocks
//   2. links to the retired RBI/FFS offering pages removed (anchor + separator)
//   3. any remaining sentence where Atlantis / the twin offers RBI or FFS is
//      dropped (HTML text nodes + prose string values only; guarded so it can
//      never cross a string or code boundary)
// Usage: node scripts/purge-rbi-ffs-offerings-2026-09-27.mjs [--apply]
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';

const APPLY = process.argv.includes('--apply');
const ROOT = process.cwd();
const SKIP = [/node_modules/, /[\\/]dist[\\/]/, /[\\/]reports[\\/]/, /\.bak/, /[\\/]scripts[\\/]_/, /gsc-.*\.json$/, /[\\/]scripts[\\/][^\\/]*-report[^\\/]*\.json$/, /audit.*\.json$/, /progress.*\.json$/, /diag-.*\.json$/, /backlog.*\.json$/, /purge-|restore-api/, /content-brief/, /[\\/]generated[\\/]/];
function walk(d, out = []) {
  for (const n of readdirSync(d)) {
    const f = join(d, n);
    if (SKIP.some((re) => re.test(f))) continue;
    const s = statSync(f);
    if (s.isDirectory()) walk(f, out); else if (/\.(tsx?|mjs|json)$/.test(n)) out.push(f);
  }
  return out;
}
const files = [...walk(join(ROOT, 'src')), ...walk(join(ROOT, 'scripts'))];

const RETIRED = '(?:consulting\\/(?:fitness-for-service-api-579|rbi-program-design)|digital-twins\\/rbi-visualisation-damage-mechanism-mapping|case-studies\\/pipeline-fitness-for-service)';
const Q = '\\\\?"';
const RULES = [
  ['consult-for', /(Level III consulting(?:<\/a>)?) for RBI, FFS, and written practices/g, '$1 for written practices, procedures and audits'],
  ['dt-rbi-ffs', / \+ RBI tier (?:visuali[sz]ation|overlay)(?: \+ FFS workflow(?: visual)?)?/g, ''],
  ['dt-rbi-ffs2', /, RBI tier visuali[sz]ation, FFS workflow visual/g, ''],
  ['dt-rbi-ffs3', / \+ audit-ready RBI cycle automation|, and audit-ready RBI cycle automation/g, ''],
  ['dt-corr', /\(3D corrosion mapping, API 581 RBI, API 579 FFS\)/g, '(3D corrosion mapping and inspection-data overlay)'],
  ['dt-ffs-pm', /, API 579 FFS, predictive maintenance/g, ', predictive maintenance'],
  ['support-list1', /\(RBI, FFS, inspection-data review\)/g, '(inspection-data review)'],
  ['support-list2', /\(floor MFL and shell UT data review, RBI, FFS\)/g, '(floor MFL and shell UT data review)'],
  ['erp-paren', /\(asset register \+ circuit hierarchy \+ cert tracking \+ calibration cert \+ audit-ready records\)/g, '(NDT reports, technician certificates, crew dispatch and equipment calibration)'],
  // links to retired offering pages: list items, "·" separated, comma separated, JSX Links
  ['li-link', new RegExp(`\\s*<li>\\s*<a href=${Q}\\/${RETIRED}${Q}[^>]*>[^<]*<\\/a>[^<]*<\\/li>`, 'g'), ''],
  ['dot-link', new RegExp(`\\s*·\\s*<a href=${Q}\\/${RETIRED}${Q}[^>]*>[^<]*<\\/a>`, 'g'), ''],
  ['comma-link', new RegExp(`\\s*,\\s*<a href=${Q}\\/${RETIRED}${Q}[^>]*>[^<]*<\\/a>`, 'g'), ''],
  ['jsx-link', new RegExp(`<Link[^>]*to=${Q}\\/${RETIRED}${Q}[^>]*>[\\s\\S]{0,200}?<\\/Link>`, 'g'), ''],
];
const TERM = /\b(RBI|risk[- ]based inspection|API ?58[01]|API ?579|FFS|fitness[- ]for[- ]service)\b/i;
const OFFER = /\b(Atlantis|our (RBI|FFS|consult\w*|team|platform|twin|engineers|Level III|services?)|we (deliver|provide|offer|run|build|design|perform|help|support)|Level III consulting (for|on|covers)|Digital Twin platform|the twin|twin platform)\b/i;

const counts = {};
function fix(text) {
  const parts = text.split(/(?<=[.!?])\s+(?=[A-Z"(])/);
  const keep = parts.filter((p) => !(TERM.test(p) && OFFER.test(p)));
  // Never blank a whole field (it emptied descriptions/snippets once); those
  // single-claim fields are listed for manual rewrite instead.
  if (keep.length === parts.length || keep.length === 0) {
    if (keep.length === 0) (counts.manual ||= []).push(text.slice(0, 120));
    return null;
  }
  counts.sentences = (counts.sentences || 0) + parts.length - keep.length;
  return keep.join(' ');
}
const touched = [];
for (const f of files) {
  const rel = relative(ROOT, f);
  const buf = readFileSync(f);
  const utf = buf.toString('utf8');
  const enc = Buffer.from(utf, 'utf8').equals(buf) ? 'utf8' : 'latin1';
  let s = buf.toString(enc);
  const before = s;
  for (const [name, re, rep] of RULES) {
    const n = (s.match(re) || []).length;
    if (n) { counts[name] = (counts[name] || 0) + n; s = s.replace(re, rep); }
  }
  // HTML text nodes (never headings/links/buttons; never across code/strings)
  // text after an opening OR closing tag (FAQ answers follow </strong>)
  s = s.replace(/(<\/?(\w+)[^<>]*)>([^<>]{30,})</g, (m, open, tag, text) => {
    if (!open.startsWith('</') && /^(h[1-6]|title|a|button|th|label|Link)$/i.test(tag)) return m;
    if (/\$\{|=>|;\s*$|[`{}]|(^|[^\\])"/.test(text)) return m;
    const r = fix(text);
    return r === null ? m : `${open}>${r}<`;
  });
  // prose string values in JSON / TS / TSX
  s = s.replace(/(["']?)(\w+)\1(\s*):(\s*)"((?:\\.|[^"\\<>\n]){30,})"/g, (m, qt, key, sp1, sp, text) => {
    if (/^(slug|path|url|href|link|title|h1|metaTitle|seoTitle|name|id|canonical|category|tags?|label|heading|question|q|anchor|className|to|src|alt|keywords)$/i.test(key) || !/\s/.test(text)) return m;
    const r = fix(text);
    return r === null ? m : `${qt}${key}${qt}${sp1}:${sp}"${r}"`;
  });
  if (s !== before) { touched.push(rel); if (APPLY) writeFileSync(f, Buffer.from(s, enc)); }
}
console.log(APPLY ? 'APPLIED' : 'DRY RUN', 'files', touched.length, counts);
