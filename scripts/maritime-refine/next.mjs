// Print today's maritime work from queue.json (2026-11-23).
// Usage: node scripts/maritime-refine/next.mjs [--guides 1] [--ports 3] [--json]
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SERVICE_SLUGS } from '../../src/data/maritime-section/model.mjs';
const HERE = dirname(fileURLToPath(import.meta.url));
const DATA = join(HERE, '..', '..', 'src', 'data', 'maritime-section');
const q = JSON.parse(readFileSync(join(HERE, 'queue.json'), 'utf8'));
const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? Number(process.argv[i + 1]) : d; };
const nG = arg('--guides', 1), nP = arg('--ports', 3);
const guideDone = (g) => SERVICE_SLUGS.includes(g.slug) && existsSync(join(DATA, 'pages', `${g.slug}.json`));
const portDone = (p) => existsSync(join(DATA, 'combos', `${p.port}--${p.service}.json`));
const guides = q.guides.filter((g) => !guideDone(g));
const ports = q.portServices.filter((p) => !portDone(p));
const today = { guides: guides.slice(0, nG), ports: ports.slice(0, nP), remaining: { guides: guides.length, ports: ports.length } };
if (process.argv.includes('--json')) { console.log(JSON.stringify(today, null, 1)); process.exit(0); }
console.log(`Guides today (${today.guides.length}; ${guides.length} left):`); for (const g of today.guides) console.log(`  ${g.slug} — ${g.label}\n    notes: ${g.notes}`);
console.log(`Port pages today (${today.ports.length}; ${ports.length} left):`); for (const p of today.ports) console.log(`  ${p.port}--${p.service}`);
