// Today's RBI pages: node scripts/rbi-refine/next.mjs [--count 3]
// Reads src/data/rbi-section/list.json (the plan) and pages/ (what is written), and returns the next rows in queue.json
// order. A hub is picked only when its country page exists or is picked the same day (the build guard needs the country).
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = join(HERE, '..', '..');
const plan = JSON.parse(readFileSync(join(REPO, 'src/data/rbi-section/list.json'), 'utf8')).pages;
const queue = JSON.parse(readFileSync(join(HERE, 'queue.json'), 'utf8')).order;
const i = process.argv.indexOf('--count');
const count = i > 0 ? Number(process.argv[i + 1]) : 3;
const written = (slug) => existsSync(join(REPO, 'src/data/rbi-section/pages', `${slug}.json`));
const bySlug = Object.fromEntries(plan.map((r) => [r.slug, r]));
const picked = [];
for (const slug of queue) {
  if (picked.length >= count) break;
  const row = bySlug[slug];
  if (!row) { console.error(`queue.json lists ${slug}, which is not in list.json`); continue; }
  if (written(slug)) continue;
  if (row.kind === 'hub' && !written(row.parent) && !picked.some((p) => p.slug === row.parent)) continue;
  picked.push(row);
}
const left = queue.filter((s) => bySlug[s] && !written(s) && !picked.some((p) => p.slug === s)).length;
console.log(JSON.stringify({ today: picked, remainingAfterToday: left }, null, 2));
