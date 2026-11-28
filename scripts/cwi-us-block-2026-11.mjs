// AWS CWI section in the crawler HTML of every US NDT training page and the two training hubs
// (owner, 2026-11-20). Rules, copy and markup: src/data/cwi-us-block-2026-11.mjs (React:
// src/components/CwiTrainingBlock.tsx, slot "cwi:" right after "route:"). Inserted before </main>
// after the intent-route block; data-keep-on-rewrite keeps it through the editorial rewrite.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { cwiBlockFor, cwiBlockHtml, CWI_CITIES, CWI_PAGE, CWI_NATIONAL } from '../src/data/cwi-us-block-2026-11.mjs';
import { US_TRAINING_PATHS } from '../src/data/us-training-2026-11.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
export const cwiBlockStats = { pages: 0 };
const BLOCK_RE = /<section data-cwi-block="2026-11"[\s\S]*?<\/section>/g;

export function applyCwiTrainingBlock(route) {
  if (!route || typeof route.bodyContent !== 'string' || route.noindex) return route;
  const b = cwiBlockFor(route.path);
  if (!b) return route;
  let body = route.bodyContent.replace(BLOCK_RE, '');
  const html = cwiBlockHtml(b);
  const i = body.lastIndexOf('</main>');
  body = i >= 0 ? body.slice(0, i) + html + body.slice(i) : body + html;
  cwiBlockStats.pages++;
  return { ...route, bodyContent: body };
}

/** Build guard: the CWI city list matches _pages.json, every link target is built, every US training page has a block, no prices. */
export function assertCwiTrainingBlockClean(builtPaths) {
  const problems = [];
  const plan = JSON.parse(readFileSync(join(HERE, '..', 'src', 'data', 'audit-cwi-2026-11', '_pages.json'), 'utf8')).pages;
  const planCities = plan.filter((p) => p.family === 'cwi' && p.kind === 'city').map((p) => p.citySlug).sort();
  const listed = Object.keys(CWI_CITIES).sort();
  if (planCities.join() !== listed.join()) problems.push(`CWI_CITIES differs from _pages.json: only in list [${listed.filter((s) => !planCities.includes(s))}], only in plan [${planCities.filter((s) => !listed.includes(s))}]`);
  const targets = new Set([CWI_NATIONAL, ...listed.map(CWI_PAGE)]);
  for (const t of targets) if (builtPaths && !builtPaths.has(t)) problems.push(`target ${t} not built`);
  // 2026-11-28: every API link in the block (hub, national, region and live city pages) must be built.
  for (const p of [...US_TRAINING_PATHS, '/training', '/ndt-training-usa']) for (const [t] of (cwiBlockFor(p)?.api?.links || [])) if (builtPaths && !builtPaths.has(t)) problems.push(`${p}: API link ${t} not built`);
  for (const p of [...US_TRAINING_PATHS, '/training', '/ndt-training-usa']) {
    const b = cwiBlockFor(p);
    if (!b) { problems.push(`${p}: no CWI block`); continue; }
    if (/[$£€₹]\s?\d|\bprice\b|\bdiscount/i.test(JSON.stringify(b))) problems.push(`${p}: price wording`);
    if (!/six-day/.test(b.p) || !/one-to-one/.test(b.p) || !/AWS administers/.test(b.p)) problems.push(`${p}: block must state six days, one-to-one and that AWS administers the exam`);
  }
  if (problems.length) throw new Error(`cwi-us-block: ${problems.length} problem(s):\n  ${problems.slice(0, 30).join('\n  ')}`);
  console.log(`🔩 CWI section 2026-11-20: ${cwiBlockStats.pages} pages, ${targets.size} targets built, guard PASS`);
}
