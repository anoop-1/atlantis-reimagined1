// Prints today's work for the daily API + CWI run (RUNBOOK.md): the first API city in queue.json whose four
// course records do not all exist yet (first the first-wave cities still unwritten, then the queue), and the first
// CWI city in the queue without a record. Output: the plan rows to append.
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const q = JSON.parse(readFileSync(join(ROOT, 'scripts/api-training-refine/queue.json'), 'utf8'));
const API = join(ROOT, 'src/data/api-training-2026-11');
const CWI = join(ROOT, 'src/data/audit-cwi-2026-11');
const plan = JSON.parse(readFileSync(join(API, '_pages.json'), 'utf8')).pages;
const codes = ['510', '570', '580', '653'];
const done = (slug) => codes.every((c) => existsSync(join(API, `api-${c}-training-${slug}.json`)));
const firstWave = (q.api_first_wave || []).filter((s) => !done(s));
let api = null;
if (firstWave.length) {
  const rows = plan.filter((p) => p.kind === 'city' && p.citySlug === firstWave[0]);
  api = { citySlug: firstWave[0], rows, note: 'first-wave city: rows already in _pages.json' };
} else {
  const c = (q.api || []).find((x) => !done(x.citySlug));
  if (c) api = { citySlug: c.citySlug, rows: codes.map((code) => ({ family: 'api', course: code, kind: 'city', path: `/training/api-${code}-training-${c.citySlug}`, slug: `api-${code}-training-${c.citySlug}`, city: c.city, st: c.st, citySlug: c.citySlug, region: c.region })).filter((r) => !plan.some((p) => p.path === r.path)) };
}
const cwi = (q.cwi || []).find((r) => !existsSync(join(CWI, `${r.slug}.json`))) || null;
console.log(JSON.stringify({ today: { api, cwi }, remaining: { apiFirstWave: firstWave.length, apiQueue: (q.api || []).filter((x) => !done(x.citySlug)).length, cwi: (q.cwi || []).filter((r) => !existsSync(join(CWI, `${r.slug}.json`))).length } }, null, 1));
