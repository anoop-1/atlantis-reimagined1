// Intent-routing block in the crawler HTML (owner, 2026-10-24): reading pages point at the
// product their readers buy next. Rules, copy and markup: src/data/intent-routes-2026-10.mjs
// (React: src/components/IntentRouteBlock.tsx). Inserted before </main>, ahead of the free
// downloads block (slot "route:" precedes "downloads:").
import { intentRouteFor, intentRouteHtml, allRouteTargets } from '../src/data/intent-routes-2026-10.mjs';

export const intentRouteStats = { pages: 0, kinds: {} };
const BLOCK_RE = /<section data-intent-route="2026-10"[\s\S]*?<\/section>/g;

export function applyIntentRoute(route) {
  if (!route || typeof route.bodyContent !== 'string' || route.noindex) return route;
  const b = intentRouteFor(route.path);
  if (!b) return route;
  let body = route.bodyContent.replace(BLOCK_RE, '');
  const html = intentRouteHtml(b);
  const i = body.lastIndexOf('</main>');
  body = i >= 0 ? body.slice(0, i) + html + body.slice(i) : body + html;
  intentRouteStats.pages++;
  intentRouteStats.kinds[b.kind] = (intentRouteStats.kinds[b.kind] || 0) + 1;
  return { ...route, bodyContent: body };
}

/** Build guard: every destination the rules can emit is a built page; no price wording. */
export function assertIntentRoutesClean(knownPaths) {
  const problems = [];
  if (knownPaths) for (const h of allRouteTargets()) if (!knownPaths.has(h)) problems.push(`route target ${h} not built`);
  const sample = ['/blog/ndt-salary-guide-2026-global', '/tools/ndt-roi-calculator', '/ndt-training-houston', '/blog/ndt-inspection-cost-2026-by-method-pricing-matrix'];
  for (const p of sample) {
    const b = intentRouteFor(p);
    if (!b) problems.push(`no route for ${p}`);
    else if (/[$£€₹]\s?\d|\bprice\b|\bdiscount/i.test(JSON.stringify(b))) problems.push(`price wording in route for ${p}`);
  }
  if (problems.length) throw new Error(`intent-routes: ${problems.length} problem(s):\n  ${problems.join('\n  ')}`);
  console.log(`🧭 Intent routes 2026-10-24: ${allRouteTargets().length} destinations built, guard PASS`);
}
