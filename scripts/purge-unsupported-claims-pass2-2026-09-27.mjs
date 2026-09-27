// Second pass of the 2026-09-27 ERP claims correction (see
// purge-unsupported-claims-2026-09-27.mjs). Works on HTML text nodes inside the
// content data/template files (blogs, depth pages, prerender templates):
//   - sentence names the ERP + an unsupported feature (and is not about the
//     Digital Twin)            -> sentence dropped
//   - sentence claims an enterprise integration (SAP/Maximo/...) -> replaced
//     with the neutral "scoped during implementation" line
// Usage: node scripts/purge-unsupported-claims-pass2-2026-09-27.mjs [--apply]
import fs, { readFileSync, writeFileSync } from 'fs';

const APPLY = process.argv.includes('--apply');
const TSX = process.argv.includes('--tsx');
const listTsx = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => e.isDirectory() ? listTsx(d + '/' + e.name) : /.(tsx|ts)$/.test(e.name) ? [d + '/' + e.name] : []);
const BASE_FILES = [
  'src/data/blogs.json', 'src/data/depth-pages.json', 'scripts/depth-pages-routes.mjs',
  'scripts/prerender.mjs', 'scripts/route-reconcile.mjs', 'scripts/region-hubs.mjs',
  'scripts/erp-family-layers.mjs', 'scripts/citation-layers-generated.mjs', 'scripts/erp-apps-routes.mjs',
  'src/data/blogs-index.json',
];
const FILES = TSX ? listTsx('src').filter((f) => !/ErpApp|erp-apps|Navigation|App.tsx|erp-(module|app|industry)-knowledge/.test(f)) : BASE_FILES;
const ERP = /\b(Atlantis (NDT )?ERP|the ERP|our ERP|ERP (module|CMMS|platform|system)|NDT ERP|CMMS|QMS module|the platform|the module)\b/i;
const FEATURE = /\b(RBI|risk[- ]based inspection|API ?58[01]|API ?579|FFS|fitness[- ]for[- ]service|remaining[- ]life|TMLs?|CMLs?|IOWs?|damage[- ]mechanism (library|profiles?|models?)|corrosion[- ]rates?|interval auto-calculation|inspection[- ]interval|inspection scheduling|Gantt|bar-?codes?|QR[- ]?codes?|RFID|NCRs?|CAPA|CARs?|non-?conformance|nonconformance)\b/i;
const INTEG = /\b(SAP|Maximo|Meridium|Oracle eAM|NetSuite|ServiceNow|AVEVA|OSIsoft|Aspen ?Mtell|Synergi)\b[^.]{0,80}\b(integrat\w*|connectors?|sync\w*|bi-?directional|two-way|webhook)\b|\b(integrat\w*|connectors?|sync\w*|bi-?directional|webhook)\b[^.]{0,80}\b(SAP|Maximo|Meridium|Oracle eAM|NetSuite|ServiceNow|AVEVA|OSIsoft)\b/i;
const DT = /Digital Twin|digital-twin|\bDT\b/;
const NEUTRAL = 'Connections to your existing systems are scoped with you during implementation.';

const counts = { dropped: 0, neutral: 0 };
for (const f of FILES) {
  const buf = readFileSync(f);
  let s = buf.toString('utf8');
  const enc = Buffer.from(s, 'utf8').equals(buf) ? 'utf8' : 'latin1';
  if (enc === 'latin1') s = buf.toString('latin1');
  const before = s;
  const fix = (text) => {
    const parts = text.split(/(?<=[.!?])\s+(?=[A-Z"(])/);
    let changed = false;
    const out = [];
    for (const p of parts) {
      const plain = p.replace(/\\"/g, '"');
      if (INTEG.test(plain)) {
        if (!out.includes(NEUTRAL)) out.push(NEUTRAL);
        counts.neutral++; changed = true; continue;
      }
      if (ERP.test(plain) && FEATURE.test(plain) && !DT.test(plain)) { counts.dropped++; changed = true; continue; }
      out.push(p);
    }
    return changed ? out.join(' ') : null;
  };
  // text nodes between tags; skip anything that looks like code
  s = s.replace(/(<(\w+)[^<>]*)>([^<>]{30,})</g, (m, open, tag, text) => {
    if (/^(h[1-6]|title|a|button|th|label)$/i.test(tag)) return m;
    // Never let a "text node" span code or a string boundary: a node that
    // contains backticks, braces or an unescaped double quote is not text.
    if (/\$\{|=>|;\s*$|[`{}]|(^|[^\\])"/.test(text)) return m;
    const r = fix(text);
    return r === null ? m : open + '>' + r + '<';
  });
  // plain JSON string values (depth-pages answers etc.)
  if (f.endsWith('.json') || TSX) {
    // Only prose values: never slugs, paths, titles or questions.
    s = s.replace(/(["']?)(\w+)\1(\s*):(\s*)"((?:\\.|[^"\\<>\n]){30,})"/g, (m, qt, key, sp1, sp, text) => {
      if (/^(slug|path|url|href|link|title|h1|metaTitle|seoTitle|name|id|canonical|category|tags?|label|heading|question|q|anchor|className|to|src|alt|keywords)$/i.test(key) || !/\s/.test(text)) return m;
      const r = fix(text);
      return r === null ? m : `${qt}${key}${qt}${sp1}:${sp}"${r}"`;
    });
  }
  if (s !== before) {
    console.log('changed', f);
    if (APPLY) writeFileSync(f, Buffer.from(s, enc));
  }
}
console.log(APPLY ? 'APPLIED' : 'DRY RUN', counts);
