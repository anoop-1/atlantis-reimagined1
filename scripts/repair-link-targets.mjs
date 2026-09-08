/**
 * Repair internal links pointing at pages that do not exist. 2026-09-08.
 * ─────────────────────────────────────────────────────────────────────────────
 * MEASURED (read-only scan, 2026-09-07): 700 distinct in-body link targets have
 * no built page behind them, carrying 1,305 links in total. Because
 * vercel.json's catch-all rewrites every unknown path to the homepage with a
 * 200 status, every one of those 1,305 links currently sends a visitor — and a
 * crawler — to "/" while claiming to be a specific page. Worst single targets:
 * /ndt-training-phoenix (23 inbound links), /ndt-training-san-francisco (23),
 * /ndt-training-charlotte (19), /ndt-erp-baltimore (17), /ndt-erp-boston (17).
 *
 * TWO CLASSES OF MISSING TARGET, TWO DIFFERENT FIXES
 *
 * 1. US training/ERP city pages that SHOULD exist and don't yet (the plan's
 *    Workstream A2 builds these). Until they are built, their links are left
 *    alone here — this pass is not the mechanism that creates new pages, and
 *    rewriting a link meant for Phoenix onto a generic hub would throw away
 *    the exact signal that told us Phoenix training demand exists (23 editors
 *    already linked to it before the page existed).
 *
 * 2. Everything else: stale slugs, renamed pages, generator drift. These get
 *    rewritten to the nearest existing ancestor path, or to a small set of
 *    section hubs, so the crawler reaches a real page instead of a silent
 *    homepage redirect.
 *
 * SAFETY
 * Every rewrite target is checked against the actual build (`exists`) before
 * being applied — never guessed. A target with no defensible rewrite is left
 * as-is and reported, never silently dropped. This mirrors the
 * `assert*TargetsExist(routes)` convention already used by
 * scripts/new-blog-inbound-links-2026-08-12.mjs: the build should fail loudly
 * on a target that cannot be resolved, not paper over it.
 */

const HUBS = ['/training', '/consulting', '/erp', '/glossary', '/standards', '/blog'];

/**
 * Paths deliberately left untouched — the plan builds these as real pages
 * rather than having this pass paper over the gap with a redirect-by-canonical.
 */
function isPendingNewPage(path, pendingPrefixes) {
  return pendingPrefixes.some((p) => path.startsWith(p));
}

function nearestExistingAncestor(path, exists) {
  const seg = path.split('/').filter(Boolean);
  for (let i = seg.length - 1; i >= 1; i--) {
    const cand = '/' + seg.slice(0, i).join('/');
    if (exists.has(cand)) return cand;
  }
  for (const hub of HUBS) {
    if (path.startsWith(hub) && exists.has(hub)) return hub;
  }
  return null;
}

/**
 * @param routes    prerender route list
 * @param exists    Set of every built path
 * @param pendingPrefixes  path prefixes intentionally left alone (new pages
 *                         coming in a later pass) — e.g. ['/ndt-training-',
 *                         '/ndt-erp-'] while Workstream A2 is in flight
 */
export function repairLinkTargets(routes, { exists, pendingPrefixes = [] }) {
  const out = { scanned: 0, rewired: 0, pending: 0, unresolved: 0, examples: [], unresolvedList: [] };
  const rewriteCache = new Map();

  for (const r of routes) {
    if (!r || !r.bodyContent) continue;
    out.scanned++;
    let changed = false;

    r.bodyContent = r.bodyContent.replace(/href="(\/[^"#?]*)"/g, (whole, target) => {
      const clean = target.replace(/\/$/, '') || '/';
      if (exists.has(clean)) return whole;
      if (/\.(xml|pdf|png|jpe?g|svg|webp|ico|txt|json|xlsx|docx|css|js)$/i.test(clean)) return whole;
      if (/^\/(assets|og|templates|images)\//.test(clean)) return whole;

      if (isPendingNewPage(clean, pendingPrefixes)) { out.pending++; return whole; }

      if (!rewriteCache.has(clean)) rewriteCache.set(clean, nearestExistingAncestor(clean, exists));
      const rewrite = rewriteCache.get(clean);
      if (!rewrite || rewrite === clean) {
        out.unresolved++;
        if (out.unresolvedList.length < 30) out.unresolvedList.push(clean);
        return whole;
      }
      out.rewired++;
      changed = true;
      if (out.examples.length < 8) out.examples.push(`${clean} -> ${rewrite}`);
      return `href="${rewrite}"`;
    });
  }
  return out;
}
