// Owner clarification 2026-09-27 (after the claims purge): Atlantis ERP has an
// open REST API and integrates with SAP, Maximo and any other software that
// accepts API connections; NCR/CAPA may be described. This replaces the
// neutral "scoped during implementation" placeholders the purge inserted with
// accurate API-based integration statements.
// Usage: node scripts/restore-api-integrations-2026-09-27.mjs [--apply]
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const APPLY = process.argv.includes('--apply');
const API = 'Atlantis ERP has an open REST API, so it connects to SAP, Maximo, NetSuite or any other system that accepts API connections; each integration is scoped with you during implementation.';
const MAP = [
  ['Connections to your existing accounting, maintenance and document systems are scoped with you during implementation.', API],
  ['Connections to your existing accounting and maintenance systems are scoped with you during implementation.', API],
  ['Connections to your existing systems are scoped with you during implementation.', API],
  ['Connections to your existing systems are scoped in a free 30-minute consultation.', 'Atlantis ERP has an open REST API that connects to SAP, Maximo, NetSuite or any system that accepts API connections; your integration is scoped in a free 30-minute consultation.'],
  ['Integration: scoped with you during implementation.', 'Integration: open REST API for SAP, Maximo and any system that accepts API connections.'],
  ['Connections to operator systems are scoped per project.', 'Operator systems connect through the Atlantis ERP open REST API, scoped per project.'],
  ['Full data export, with connections to your existing systems scoped during implementation.', 'Full data export, plus an open REST API for SAP, Maximo and other systems.'],
];
const SKIP = /node_modules|[\\/]dist[\\/]|[\\/]reports[\\/]|\.bak|purge-unsupported|restore-api-integrations/;
function walk(d, out = []) {
  for (const n of readdirSync(d)) {
    const f = join(d, n);
    if (SKIP.test(f)) continue;
    const s = statSync(f);
    if (s.isDirectory()) walk(f, out); else if (/\.(tsx?|mjs|json)$/.test(n)) out.push(f);
  }
  return out;
}
let total = 0; const files = [];
for (const f of [...walk('src'), ...walk('scripts')]) {
  const buf = readFileSync(f);
  const utf = buf.toString('utf8');
  const enc = Buffer.from(utf, 'utf8').equals(buf) ? 'utf8' : 'latin1';
  let s = buf.toString(enc); const before = s;
  for (const [a, b] of MAP) { const n = s.split(a).length - 1; if (n) { total += n; s = s.split(a).join(b); } }
  if (s !== before) { files.push(f); if (APPLY) writeFileSync(f, Buffer.from(s, enc)); }
}
console.log(APPLY ? 'APPLIED' : 'DRY RUN', 'replacements', total, 'files', files.length);
