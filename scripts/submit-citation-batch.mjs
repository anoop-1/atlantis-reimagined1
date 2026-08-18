#!/usr/bin/env node
/**
 * Post-deploy submission for the citation batch — 2026-08-18.
 * ─────────────────────────────────────────────────────────────────────────────
 * RUN THIS AFTER THE DEPLOY IS LIVE, NEVER BEFORE.
 *
 * Submitting a URL that still 404s teaches the engine the page is missing, and
 * a negative first impression costs more than the days saved. The script checks
 * each URL is actually serving 200 with its citation layer present before it
 * submits anything, and refuses the ones that are not ready.
 *
 * WHAT IT SUBMITS TO, AND WHY BOTH
 *
 * IndexNow reaches Bing, Yandex and Seznam instantly and needs no API approval —
 * the key already exists at scripts/indexnow-key.json with its verification file
 * in public/. Bing matters more here than the usual dismissal implies: it is
 * roughly a quarter of this site's organic sessions (1,241 in July against 2,714
 * from Google) and nobody has ever worked it deliberately.
 *
 * Google's Indexing API is NOT used for these. It is documented for JobPosting
 * and BroadcastEvent only, and using it for general content is outside its
 * stated scope. Google discovery relies on the sitemaps prerender regenerates
 * plus internal links from the cluster mesh, which is the supported route.
 *
 *   node scripts/submit-citation-batch.mjs --check     verify readiness only
 *   node scripts/submit-citation-batch.mjs             verify, then submit
 */
import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE = 'https://atlantisndt.com';
const CHECK_ONLY = process.argv.includes('--check');

/** Everything given a citation layer or built new in this programme. */
function targets() {
  const out = new Set();
  const add = (p) => out.add(p.startsWith('/') ? p : `/${p}`);

  for (const mod of ['citation-layers.mjs', 'citation-layers-batch2.mjs', 'citation-layers-generated.mjs']) {
    const f = join(__dirname, mod);
    if (!existsSync(f)) continue;
    // Read as text rather than importing: this must work even if a generated
    // module is mid-rewrite, and the paths are all top-level object keys.
    const src = readFileSync(f, 'utf-8');
    for (const m of src.matchAll(/^\s{2}["'](\/[^"']+)["']:\s*\{/gm)) add(m[1]);
  }
  const depth = join(__dirname, 'depth-pages-routes.mjs');
  if (existsSync(depth)) {
    const src = readFileSync(depth, 'utf-8');
    for (const m of src.matchAll(/"path":\s*"(\/[^"]+)"/g)) add(m[1]);
  }
  add('/authors/anoop-rayavarapu');
  return [...out].sort();
}

async function ready(path) {
  const url = `${SITE}${path}`;
  try {
    const res = await fetch(url, { redirect: 'follow' });
    if (!res.ok) return { url, ok: false, why: `HTTP ${res.status}` };
    const html = await res.text();
    if (!html.includes('data-citation-block="answer"')) {
      return { url, ok: false, why: 'live page has no citation layer — deploy not propagated' };
    }
    return { url, ok: true };
  } catch (e) {
    return { url, ok: false, why: e.message.slice(0, 60) };
  }
}

async function main() {
  const paths = targets();
  console.log(`\nCitation batch: ${paths.length} URLs\n`);

  const results = [];
  for (const p of paths) {
    const r = await ready(p);
    results.push(r);
    console.log(`  ${r.ok ? 'ready ' : 'SKIP  '} ${p}${r.ok ? '' : '  — ' + r.why}`);
  }

  const live = results.filter((r) => r.ok).map((r) => r.url);
  const skipped = results.filter((r) => !r.ok);
  console.log(`\n  ${live.length} ready, ${skipped.length} not ready\n`);

  if (!live.length) {
    console.log('  Nothing to submit. Deploy first, then re-run.\n');
    return;
  }
  if (CHECK_ONLY) {
    console.log('  --check only; nothing submitted.\n');
    return;
  }

  const keyFile = join(__dirname, 'indexnow-key.json');
  if (!existsSync(keyFile)) {
    console.error('  indexnow-key.json missing — run scripts/indexnow-ping.mjs once to generate it.\n');
    process.exit(1);
  }
  const { key } = JSON.parse(readFileSync(keyFile, 'utf-8'));

  // IndexNow accepts up to 10,000 URLs per request; this batch is far below.
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: 'atlantisndt.com',
      key,
      keyLocation: `${SITE}/${key}.txt`,
      urlList: live,
    }),
  });

  // 200 and 202 both mean accepted. 422 usually means the key file is not
  // reachable at keyLocation, which is a deploy problem rather than a data one.
  console.log(`  IndexNow: HTTP ${res.status} for ${live.length} URLs`);
  if (res.status === 422) console.log(`  422 usually means ${SITE}/${key}.txt is not serving — check the deploy.`);
  if (!res.ok && res.status !== 202) console.log(`  body: ${(await res.text()).slice(0, 200)}`);
  console.log(`\n  Google discovery is via the regenerated sitemaps and the cluster mesh, not the Indexing API.\n`);
}

main().catch((e) => { console.error(e); process.exit(1); });
