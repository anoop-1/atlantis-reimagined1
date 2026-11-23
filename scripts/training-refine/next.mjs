// Today's work for the daily US training refinement run (RUNBOOK.md).
//   node scripts/training-refine/next.mjs [--sections 3] [--cities 1]
// Prints the next pending sections (pages with no geo-depth record yet, highest US impressions first) and the next
// candidate cities (not yet in src/data/na-training-2026-11/_manifest.json), plus how much of the queue is left.
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT } from './lib.mjs';
const { geoDepthKey } = await import(join(ROOT, 'scripts/geo-depth-2026-10.mjs'));
const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? Number(process.argv[i + 1]) : d; };
const q = JSON.parse(readFileSync(join(ROOT, 'scripts/training-refine/queue.json'), 'utf8'));
const manifest = JSON.parse(readFileSync(join(ROOT, 'src/data/na-training-2026-11/_manifest.json'), 'utf8')).cities;
const sections = q.sections.filter((s) => !existsSync(join(ROOT, 'src/data/geo-depth-2026-10', geoDepthKey(s.path) + '.json')));
const cities = q.cities.filter((c) => !manifest[c.slug] && !existsSync(join(ROOT, 'dist', `ndt-training-${c.slug}`)));
const out = { sections: sections.slice(0, arg('--sections', 3)), cities: cities.slice(0, arg('--cities', 1)), remaining: { sections: sections.length, cities: cities.length } };
console.log(JSON.stringify(out, null, 1));
