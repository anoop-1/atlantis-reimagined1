// Validate "NDT training near {City}: local options compared" sections (geo-depth records) for US training pages.
//   node scripts/training-refine/validate-section.mjs /ndt-training-dallas [/ndt-training-...]
// Each path's record is src/data/geo-depth-2026-10/<path without slash, / -> __>.json  {path, h2, html, queries}.
// Minimum length: enough for the page to reach 2,300 page-specific words (measure.mjs, geo section excluded),
// never under 650; maximum 1,080. Also runs the geo-depth guard, the training copy rules and a shared-sentence
// check against every training deep-content and geo-depth file and against the page's own text.
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT, words, sentences, text, builtMainHtml, isBuilt, sentencePool, copyProblems } from './lib.mjs';
import { measure } from './measure.mjs';
const { geoDepthProblems, geoDepthKey } = await import(join(ROOT, 'scripts/geo-depth-2026-10.mjs'));

const paths = process.argv.slice(2).map((p) => '/' + p.replace(/^\//, '').replace(/\.json$/, '').replace(/__/g, '/'));
if (!paths.length) { console.error('usage: validate-section.mjs /ndt-training-{slug} ...'); process.exit(2); }
const { rows } = await measure({ excludeGeo: true });
const uniq = new Map(rows.map((r) => [r.path, r.unique]));
let failed = 0;
for (const path of paths) {
  const f = join(ROOT, 'src/data/geo-depth-2026-10', geoDepthKey(path) + '.json');
  const probs = [];
  if (!existsSync(f)) { console.log(`✗ ${path}: ${f} missing`); failed++; continue; }
  let d; try { d = JSON.parse(readFileSync(f, 'utf8')); } catch (e) { console.log(`✗ ${path}: bad JSON ${e.message}`); failed++; continue; }
  if (d.path !== path) probs.push(`record path ${d.path} != ${path}`);
  for (const k of ['path', 'h2', 'html', 'queries']) if (d[k] === undefined) probs.push(`missing field ${k}`);
  const w = words(d.html);
  const u = uniq.get(path);
  const min = Math.max(650, u === undefined ? 0 : 2300 - u);
  if (w < min) probs.push(`${w} words; this page needs at least ${min}`);
  if (w > 1080) probs.push(`${w} words; maximum 1,080`);
  if (!d.html.startsWith('<h2')) probs.push('html must start with its single <h2>');
  if ((d.html.match(/<h3[\s>]/g) || []).length < 3) probs.push('needs 3+ <h3> subsections');
  for (const x of geoDepthProblems(d, { has: (p) => isBuilt(p) })) probs.push(`geo-depth rule: ${x}`);
  const page = builtMainHtml(path);
  const own = new Set(page ? sentences(text(page.replace(/<section data-geo-depth="2026-10"[\s\S]*?<\/section>/g, ' '))) : []);
  probs.push(...copyProblems(d.html, path, sentencePool(new Set([path])), own));
  console.log(`${probs.length ? '✗' : '✓'} ${path}: ${w} words (min ${min}${u === undefined ? ', page not built yet' : `, page has ${u}`})`);
  for (const p of probs.slice(0, 25)) console.log('    - ' + p);
  if (probs.length) failed++;
}
console.log(failed ? `\n${failed} section(s) need fixing.` : '\nAll checked sections pass.');
process.exit(failed ? 1 : 0);
