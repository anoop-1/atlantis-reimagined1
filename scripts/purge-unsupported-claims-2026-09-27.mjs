// One-off content correction, 2026-09-27, owner instruction:
//   1. The ERP is never described as Odoo — it is the "Atlantis ERP solution".
//   2. The ERP does not do RBI (API 580/581), FFS (API 579), API 510/570/653
//      inspection-interval / corrosion-rate / TML work, Gantt charts, barcode
//      labels, NCR/CAPA, or SAP/Maximo (or other enterprise) integrations.
//   3. Atlantis does not offer API 510/570/653 training.
// Verified against the live ERP addons (see scripts/erp-apps-content-brief.md).
// Digital Twin, consulting and inspection-service content is left alone except
// for enterprise-integration claims, which no Atlantis product has.
//
// Usage: node scripts/purge-unsupported-claims-2026-09-27.mjs [--apply]
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, relative, sep } from 'path';

const APPLY = process.argv.includes('--apply');
const ROOT = process.cwd();

// ── files in scope ───────────────────────────────────────────────────────────
const EXT = /\.(tsx?|mjs|js|json|txt|html)$/;
const SKIP = [
  /node_modules/, /(^|[\\/])dist[\\/]/, /[\\/]reports[\\/]/, /\.bak/, /[\\/]scripts[\\/]_/, /gsc-.*\.json$/,
  /-report.*\.json$/, /audit.*\.json$/, /progress.*\.json$/, /diag-.*\.json$/, /backlog.*\.json$/,
  /purge-unsupported-claims/, /erp-apps-content-brief/, /[\\/]generated[\\/]/, /sitemap.*\.xml$/,
  /indexing-queue/, /[\\/]public[\\/]sitemap/,
];
function walk(d, out = []) {
  for (const n of readdirSync(d)) {
    const f = join(d, n);
    if (SKIP.some((re) => re.test(f))) continue;
    const s = statSync(f);
    if (s.isDirectory()) walk(f, out);
    else if (EXT.test(n)) out.push(f);
  }
  return out;
}
const files = [...walk(join(ROOT, 'src')), ...walk(join(ROOT, 'scripts')), ...walk(join(ROOT, 'public'))];

const isErpFile = (rel) =>
  /^src[\\/]pages[\\/](erp|erp-modules|erp-industries)[\\/]/.test(rel) ||
  /^src[\\/]pages[\\/](Erp|ErpModulesHub|ErpIndustriesHub|ErpCompareHub|ndt-erp[^\\/]*)\.tsx$/.test(rel) ||
  /^src[\\/]components[\\/](Erp[^\\/]*|NdtErp[^\\/]*)\.tsx$/.test(rel) ||
  /^src[\\/]data[\\/](erp[^\\/]*|ndt-erp[^\\/]*)\.(ts|json|mjs)$/.test(rel);
const isComparison = (rel) => /-vs-|compare|erp-(module|app|industry)-knowledge|erp-modules[\\/](corrosion-tracking|inspection-scheduling|quality-management)/i.test(rel);

// ── slug renames (old public path -> new) and retirements ────────────────────
const SLUG_RENAMES = {
  'odoo-vs-sap-vs-netsuite-erp-comparison-2026': 'atlantis-erp-vs-sap-vs-netsuite-comparison-2026',
  'odoo-for-ndt-inspection-companies-guide-2026': 'atlantis-erp-for-ndt-inspection-companies-guide-2026',
  'odoo-vs-generic-erp-for-ndt-companies-what-actually-matters': 'ndt-erp-vs-generic-erp-what-actually-matters',
  'odoo-vs-netsuite-for-ndt-companies-total-cost-of-ownership-compared': 'atlantis-erp-vs-netsuite-for-ndt-companies',
  'odoo-vs-sap-for-ndt-companies-why-enterprise-erp-overkills-a-50-person-inspection-firm': 'atlantis-erp-vs-sap-for-ndt-companies',
  'no-code-customization-for-ndt-erp-what-odoo-studio-actually-lets-you-build': 'no-code-customization-for-ndt-erp',
  'no-code-customization-odoo-studio-for-ndt': 'no-code-customization-for-ndt',
  'odoo-vs-netsuite-ndt-companies': 'atlantis-erp-vs-netsuite-ndt-companies',
  'odoo-vs-oracle-ndt-companies': 'atlantis-erp-vs-oracle-ndt-companies',
  'odoo-vs-sap-ndt-companies': 'atlantis-erp-vs-sap-ndt-companies',
};
// Pages whose whole premise is Odoo itself — redirected, not renamed.
const ODOO_RETIRE = {
  '/blog/odoo-erp-pricing-explained-2026': '/erp',
  '/blog/odoo-vs-purpose-built-ndt-software-when-generic-erp-customization-breaks-down': '/erp',
};

// ── text rules (order matters) ───────────────────────────────────────────────
const NEUTRAL_INTEG = 'Connections to your existing accounting, maintenance and document systems are scoped with you during implementation.';
const RULES = [
  // enterprise-integration claims (site-wide)
  ['integ-para', /Atlantis NDT integrates with your existing enterprise stack via REST API \+ webhook \+ native connectors\. SAP \(PM, MM, EAM\) integration:[^<]*?Custom connectors built in 1-3 weeks per system via Atlantis NDT integration team\./g, NEUTRAL_INTEG],
  ['integ-faq', /REST API \+ webhook \+ native connectors for SAP, Oracle, Maximo, NetSuite, IBM Maximo, Microsoft Dynamics, Odoo, ServiceNow\./g, NEUTRAL_INTEG],
  ['integ-surface', /Atlantis NDT integrates via REST API \+ webhook \+ native connectors\. Free 30-minute consultation scopes your integration surface \([^)]*\) within hours\./g, 'Connections to your existing systems are scoped in a free 30-minute consultation.'],
  ['integ-surface2', /scopes your integration surface \([^)]*\)/g, 'scopes your integration needs'],
  ['integ-short', /Integration: REST \+ webhook \+ SAP \+ Maximo\./g, 'Integration: scoped with you during implementation.'],
  ['integ-native', /Native connectors for SAP PM \+ EAM[^<]*?OSIsoft PI Asset Framework\. REST API \+ webhook \+ Kafka\/MQTT\/AMQP for real-time inspection-data feeds\./g, NEUTRAL_INTEG],
  ['integ-operator', /Operator-stack integrations: [^.<]*\./g, 'Connections to operator systems are scoped per project.'],
  ['integ-dt-list', /SAP PM, Oracle eAM, IBM Maximo, ServiceNow, AVEVA PI, OSIsoft historians, Bentley iTwin, Cognite and Atlantis NDT ERP\. Full REST API and bulk data export/g, 'Connections to your existing systems are scoped with you during implementation. Full data export'],
  ['integ-region', /Integrates with SAP PM, Oracle eAM, IBM Maximo, ServiceNow, AVEVA PI and OSIsoft historians, with documented REST API and full bulk export\./g, 'Full data export, with connections to your existing systems scoped during implementation.'],
  ['integ-alongside', /Runs alongside SAP, Oracle, Maximo, NetSuite, Dynamics 365, QuickBooks and Xero, and connects to the <a href="\/digital-twins">Atlantis Digital Twin platform<\/a> so inspection results feed the 3D asset model without re-keying\./g, 'Connections to your existing accounting and maintenance systems are scoped with you during implementation.'],

  // ERP feature parentheticals in the shared "stack" paragraphs
  ['erp-stack-1', /\(asset register \+ circuit hierarchy \+ ASNT \+ ISO 9712 \+ API ICP \+ AWS CWI \+ NACE CIP cert tracking \+ calibration cert \+ audit-ready records per ISO 9001 \+ 17020 \+ 17025\)/g, '(NDT reports, technician certificates, procedures, crew dispatch and equipment calibration)'],
  ['erp-stack-2', /\(asset register \+ circuit hierarchy \+ inspection schedule \+ cert tracking \+ calibration\)/g, '(NDT reports, technician certificates, crew dispatch and equipment calibration)'],
  ['erp-li-sched', /<li><a href="\/erp-modules\/inspection-scheduling">Inspection scheduling<\/a> — API 510\/570\/653 due dates driven by measured corrosion rate, not a fixed calendar\.<\/li>\s*/g, ''],
  ['erp-li-asset', /client asset registers with full inspection history per CML/g, 'NDT equipment by serial number with issue, return, calibration and maintenance history'],

  // API training offered by Atlantis (link rows that list API certs as training)
  ['api-train-row1', /(Atlantis covers training \([^)]*?), <a href="\/api-510-certification">API 510<\/a>, <a href="\/api-570-certification">API 570<\/a>, <a href="\/api-653-certification">API 653<\/a>\)/g, '$1)'],

  // Odoo -> Atlantis ERP (case-sensitive: lowercase slugs and odoo.atlantisndt.com untouched)
  ['odoo-apps-n', /\b\d+\+? Odoo [Aa]pps/g, '28 business apps'],
  ['odoo-apps-cap', /Odoo Apps Included/g, 'Business Apps Included'],
  ['odoo-apps', /Odoo apps/g, 'business apps'],
  ['odoo-an-based', /\ban Odoo(?: 1[6-9])?-based\b/g, 'a fully customized'],
  ['odoo-based', /\bOdoo(?: 1[6-9])?-based\b/g, 'fully customized'],
  ['odoo-built-on', /,? (?:built|based|running|that runs|which runs) on (?:the )?Odoo(?: 1[6-9](?:\.0)?)?(?: (?:platform|framework|foundation|Community|Enterprise|base))?/g, ''],
  ['odoo-modules', /Odoo(?: 1[6-9])? modules?/g, 'ERP modules'],
  ['odoo-studio', /Odoo Studio/g, 'the no-code customization tools'],
  ['odoo-version', /Odoo (?:Enterprise|Community)(?: 1[6-9])?|Odoo 1[6-9](?:\.0)?(?: Enterprise| Community)?/g, 'Atlantis ERP'],
  ['odoo-word', /\bOdoo\b/g, 'Atlantis ERP'],
  ['odoo-cleanup1', /Atlantis ERP ERP/g, 'Atlantis ERP'],
  ['odoo-cleanup2', /Atlantis NDT ERP \(Atlantis ERP\)/g, 'Atlantis NDT ERP'],
  ['odoo-cleanup3', /the Atlantis ERP solution solution/g, 'the Atlantis ERP solution'],
];

// ERP-page claim filter: array items / sentences mentioning unsupported features.
const BANNED_ERP = /\b(RBI|risk[- ]based inspection|API ?58[01]|API ?579|FFS|fitness[- ]for[- ]service|remaining[- ]life|TMLs?|CMLs?|IOWs?|integrity operating window|damage[- ]mechanism|API ?571|corrosion[- ]rates?|circuit hierarch\w*|piping circuits?|Gantt|bar-?codes?|QR[- ]?codes?|QR labels?|RFID|NCRs?|CAPA|non-?conformance|corrective and preventive|SAP|Maximo|Meridium|Oracle eAM|ServiceNow|AVEVA|OSIsoft|inspection intervals?|next[- ]inspection dates?|due dates? (?:driven|calculated|computed)|interval auto-calculation|wall[- ]loss|thickness (?:measurement )?database)\b/i;

function stripErp(text) {
  let n = 0;
  // 1) drop whole array-item lines ("....",) but never a property value whose
  //    key sits on the previous line ("description:" then the string).
  {
    const lines = text.split(/(?<=\n)/);
    const out = [];
    for (const line of lines) {
      const m = line.match(/^[ \t]*(["'`])((?:\\.|(?!\1).)*)\1,?[ \t]*\r?\n$/);
      const prev = out.length ? out[out.length - 1].trimEnd() : '';
      const isValue = /[:=(?]$/.test(prev);
      if (m && !isValue && BANNED_ERP.test(m[2]) && m[2].length < 600) { n++; continue; }
      out.push(line);
    }
    text = out.join('');
  }
  // 2) inside remaining string literals, drop banned sentences
  text = text.replace(/"((?:\\.|[^"\\\n]){40,})"/g, (m, body) => {
    const parts = body.split(/(?<=[.!?])\s+(?=[A-Z<])/);
    if (parts.length < 2) return m;
    const keep = parts.filter((p) => !BANNED_ERP.test(p.replace(/<[^>]+>/g, ' ')));
    if (keep.length === parts.length || keep.length === 0) return m;
    n += parts.length - keep.length;
    return `"${keep.join(' ')}"`;
  });
  return [text, n];
}

// ── run ──────────────────────────────────────────────────────────────────────
const counts = {};
const touched = [];
for (const f of files) {
  const rel = relative(ROOT, f);
  const buf = readFileSync(f);
  let s = buf.toString('utf8');
  const enc = Buffer.from(s, 'utf8').equals(buf) ? 'utf8' : 'latin1';
  if (enc === 'latin1') s = buf.toString('latin1');
  const orig = s;

  for (const [name, re, rep] of RULES) {
    if (name.startsWith('odoo') && /odoo-client|odoo\.atlantisndt|gsc/.test(rel)) continue;
    const before = s;
    s = s.replace(re, rep);
    if (s !== before) counts[name] = (counts[name] || 0) + (before.match(re) || []).length;
  }
  for (const [oldSlug, newSlug] of Object.entries(SLUG_RENAMES)) {
    if (s.includes(oldSlug)) { counts['slug:' + oldSlug] = (counts['slug:' + oldSlug] || 0) + s.split(oldSlug).length - 1; s = s.split(oldSlug).join(newSlug); }
  }
  if (isErpFile(rel) && !isComparison(rel)) {
    const [t, n] = stripErp(s);
    if (n) { counts['erp-strip'] = (counts['erp-strip'] || 0) + n; s = t; }
  }
  if (s !== orig) {
    touched.push(rel);
    if (APPLY) writeFileSync(f, Buffer.from(s, enc));
  }
}

// vercel.json redirects: Odoo renames/retirements + retired unsupported-feature families
if (APPLY) {
  const vj = JSON.parse(readFileSync('vercel.json', 'utf-8'));
  const have = new Set(vj.redirects.map((r) => r.source));
  const add = (source, destination) => { if (!have.has(source) && source !== destination) { vj.redirects.push({ source, destination, statusCode: 301 }); have.add(source); counts.redirects = (counts.redirects || 0) + 1; } };
  const blogOrErp = { 'no-code-customization-odoo-studio-for-ndt': 'erp', 'odoo-vs-netsuite-ndt-companies': 'erp', 'odoo-vs-oracle-ndt-companies': 'erp', 'odoo-vs-sap-ndt-companies': 'erp' };
  for (const [o, n] of Object.entries(SLUG_RENAMES)) { const dir = blogOrErp[o] || 'blog'; add(`/${dir}/${o}`, `/${dir}/${n}`); }
  for (const [o, n] of Object.entries(ODOO_RETIRE)) add(o, n);
  const retire = JSON.parse(readFileSync(process.env.RETIRE_LIST, 'utf-8'));
  for (const p of retire) add(p, /inspection-scheduling/.test(p) ? '/erp/apps/team-assignments' : /quality-management/.test(p) ? '/erp/apps/procedures' : '/erp');
  writeFileSync('vercel.json', JSON.stringify(vj, null, 2) + '\n');
}

console.log(APPLY ? 'APPLIED' : 'DRY RUN');
console.log(`files changed: ${touched.length}`);
for (const [k, v] of Object.entries(counts).sort((a, b) => b[1] - a[1])) console.log(`  ${k}: ${v}`);
