// Third pass of the 2026-09-27 ERP claims correction: list items and table
// rows in ERP / comparison content that still claim API 510/570/653 inspection
// scheduling or interval automation, RBI (API 581) or FFS (API 579) as ERP
// features. Limited to the files that carry those ERP feature lists.
import { readFileSync, writeFileSync, readdirSync } from 'fs';

const APPLY = process.argv.includes('--apply');
const FILES = [
  'scripts/prerender.mjs', 'scripts/route-reconcile.mjs', 'scripts/gen-comparison-pages.mjs',
  'scripts/inject-quick-answer-top30.mjs', 'src/data/blogs.json', 'src/data/blogs-index.json',
  'src/components/ErpLocationPage.tsx', 'src/components/ErpComparisonPage.tsx',
  'src/pages/compare/AtlantisErpVsFloodlight.tsx', 'src/pages/press/atlantis-ndt-erp-launch-2026.tsx',
  ...readdirSync('src/pages/compare').filter((f) => /^vs-.*\.tsx$/.test(f)).map((f) => `src/pages/compare/${f}`),
  ...readdirSync('src/pages/erp').filter((f) => /^atlantis-erp-vs-/.test(f)).map((f) => `src/pages/erp/${f}`),
];
const API = 'API 510 ?\\/ ?570 ?\\/ ?653';
const RULES = [
  // HTML table rows / list items whose label is the unsupported feature
  ['tr', new RegExp(`<tr><td>${API} inspection[- ](?:scheduling|interval[^<]*)</td>(?:<td>[^<]*</td>)*</tr>(?:\\\\n)?`, 'g'), ''],
  ['li', new RegExp(`\\s*<li><strong>${API} inspection scheduling</strong>[^<]*</li>`, 'g'), ''],
  // JS object rows:  { capability: "API 510 / 570 / 653 inspection scheduling", ... },
  ['obj-row', new RegExp(`^[ \\t]*\\{ ?(?:capability|dim|feature|label): "${API} inspection[- ](?:scheduling|interval[^"]*)"[^\\n]*\\},?[ \\t]*\\r?\\n`, 'gm'), ''],
  // items inside comma / semicolon lists
  ['list-api', new RegExp(`[,;] ?(?:native )?${API} inspection[- ](?:scheduling|interval[- ]automation|interval auto-calculation)(?: driven by RBI per API 581)?(?= ?[,;.])`, 'g'), ''],
  ['list-api-first', new RegExp(`(?:native )?${API} inspection[- ](?:scheduling|interval[- ]automation|interval auto-calculation)(?: driven by RBI per API 581)?[,;] `, 'g'), ''],
  ['list-rbi', /[,;] ?(?:and )?(?:RBI per API 581|API 581 RBI(?: risk-target tracking)?|FFS per API 579(?:-1)?|API 579 FFS|RBI)(?= ?[,;.)])/g, ''],
  ['list-corr', /[,;] ?corrosion-rate trend\w*(?= ?[,;.])/g, ''],
  ['rbi-sched', /\(work-orders \+ RBI scheduling \+ inspector certs\)/g, '(work orders + inspector certs)'],
  ['rbi-sched2', / so corrosion trending and RBI scheduling don't depend on whichever engineering firm ran the program under the previous owner/g, ' so inspection records don\'t depend on whichever engineering firm ran the program under the previous owner'],
  ['cleanup-and', /, and(?= ?[.;)])/g, ''],
];
const counts = {};
for (const f of FILES) {
  const buf = readFileSync(f);
  const utf = buf.toString('utf8');
  const enc = Buffer.from(utf, 'utf8').equals(buf) ? 'utf8' : 'latin1';
  let s = buf.toString(enc);
  const before = s;
  const broad = !/prerender|blogs|route-reconcile/.test(f);
  for (const [name, re, rep] of RULES) {
    if (!broad && (name === 'list-rbi' || name === 'list-corr' || name === 'cleanup-and')) continue;
    const n = (s.match(re) || []).length;
    if (n) { counts[name] = (counts[name] || 0) + n; s = s.replace(re, rep); }
  }
  if (s !== before) { console.log('changed', f); if (APPLY) writeFileSync(f, Buffer.from(s, enc)); }
}
console.log(APPLY ? 'APPLIED' : 'DRY RUN', counts);
