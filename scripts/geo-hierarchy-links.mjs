/**
 * Geo + product hierarchy links for North American location pages. 2026-10-08.
 * ─────────────────────────────────────────────────────────────────────────────
 * THE PROBLEM (GSC, 28 days to 2026-10-05)
 * Our own city pages competed with the hubs for commercial head terms:
 *   "ndt training"            /ndt-training-honolulu p74, -dallas p64, -atlanta p78;
 *                              the US hub /training-usa p75
 *   "ndt consulting"          /consulting/ndt-consulting-detroit p43, -chicago p64;
 *                              /consulting p80
 *   "ndt reporting software"  /best-ndt-reporting-software-2026 slid p9.9 -> p17.1
 *                              while /ndt-reporting-oslo picked up impressions
 * City pages had flat breadcrumbs (Home › page), never linked up to their state
 * or country hub, and the US hubs were starved (/ndt-training-usa 14 inbound
 * links, /consulting-usa 2).
 *
 * WHAT THIS PASS DOES (crawler layer; the React layer reads the same chain via
 * src/lib/geo-hierarchy.ts)
 *   1. Every page in the hierarchy gets the full BreadcrumbList
 *      (Home › family hub › country hub › state hub › page). An existing
 *      BreadcrumbList is rewritten in place — never duplicated.
 *   2. A visible <nav aria-label="Breadcrumb"> directly after the H1.
 *   3. One up-links paragraph before </main> with the same exact-match
 *      head-term anchors on every page of a family.
 *   4. State / province hubs list their city pages; country hubs list their
 *      state hubs (markup from scripts/geo-hub-directory.mjs).
 * Nothing is removed, no canonical is touched, and a link is only ever drawn
 * to a built page that is indexable and self-canonical.
 *
 * Chain logic: src/data/geo-hierarchy.mjs. Data: src/data/geo-hierarchy.json.
 *
 * CLI: node scripts/geo-hierarchy-links.mjs --refresh-hubs
 *   Re-reads dist/ and rewrites hubPaths in src/data/geo-hierarchy.json (the
 *   hub list the React layer uses; prerender itself checks the live routes).
 */
import { readFileSync, writeFileSync, existsSync, statSync } from 'fs';
import { join } from 'path';
import { GEO_FAMILIES, COUNTRY_LABEL, SITE, classifyGeoPath, geoChain, breadcrumbListItems, downLinkAnchor } from '../src/data/geo-hierarchy.mjs';
import { geoHubCitiesHtml, geoHubStatesHtml } from './geo-hub-directory.mjs';

const DATA_FILE = 'src/data/geo-hierarchy.json';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function loadGeoHierarchyData(root = process.cwd()) {
  return JSON.parse(readFileSync(join(root, DATA_FILE), 'utf-8'));
}

// ── route helpers ─────────────────────────────────────────────────────────
const isNoindex = (r) => !!(r && (r.noindex || r.noindexFollow));
function loadRedirectSources(root) {
  try {
    const cfg = JSON.parse(readFileSync(join(root, 'vercel.json'), 'utf-8'));
    return new Set((cfg.redirects || []).filter((r) => r && !r.has && !/[:*()]/.test(r.source)).map((r) => String(r.source).replace(/\/+$/, '') || '/'));
  } catch { return new Set(); }
}
function selfCanonical(r) {
  if (!r || r.consolidatedTo) return false;
  if (!r.canonical) return true;
  const c = String(r.canonical).replace(SITE, '').replace(/\/+$/, '') || '/';
  return c === r.path;
}

// ── JSON-LD ───────────────────────────────────────────────────────────────
const isCrumb = (n) => !!n && typeof n === 'object' && !Array.isArray(n) &&
  (n['@type'] === 'BreadcrumbList' || (Array.isArray(n['@type']) && n['@type'].includes('BreadcrumbList')));

/** Copy-on-write swap of every BreadcrumbList's items (shared objects stay untouched). */
function swapCrumbs(sd, items, counter) {
  if (Array.isArray(sd)) return sd.map((n) => swapCrumbs(n, items, counter));
  if (!sd || typeof sd !== 'object') return sd;
  let out = sd;
  if (isCrumb(sd)) { counter.n++; out = { ...sd, itemListElement: items }; }
  if (Array.isArray(sd['@graph'])) out = { ...out, '@graph': sd['@graph'].map((n) => swapCrumbs(n, items, counter)) };
  return out;
}

function setBreadcrumb(route, items) {
  const counter = { n: 0 };
  if (route.structuredData) route.structuredData = swapCrumbs(route.structuredData, items, counter);
  // Inline JSON-LD inside the body (a few generators emit their graph there).
  if (typeof route.bodyContent === 'string' && route.bodyContent.includes('BreadcrumbList')) {
    route.bodyContent = route.bodyContent.replace(/<script type="application\/ld\+json"([^>]*)>([\s\S]*?)<\/script>/g, (m0, attrs, json) => {
      if (!json.includes('BreadcrumbList')) return m0;
      try {
        const before = counter.n;
        const j = swapCrumbs(JSON.parse(json), items, counter);
        if (counter.n === before) return m0;
        return `<script type="application/ld+json"${attrs}>${JSON.stringify(j).replace(/</g, '\\u003c')}</script>`;
      } catch { return m0; }
    });
  }
  if (counter.n > 0) return 'replaced';
  // None anywhere: add one to the page's graph, the way prerender's
  // appendSchemaNode does.
  const node = { '@type': 'BreadcrumbList', '@id': `${SITE}${route.path}#breadcrumb`, itemListElement: items };
  const sd = route.structuredData;
  if (!sd) route.structuredData = { '@context': 'https://schema.org', ...node };
  else if (Array.isArray(sd)) route.structuredData = [...sd, node];
  else if (Array.isArray(sd['@graph'])) route.structuredData = { ...sd, '@graph': [...sd['@graph'], node] };
  else route.structuredData = { '@context': 'https://schema.org', '@graph': [sd, node] };
  return 'added';
}

// ── HTML ──────────────────────────────────────────────────────────────────
export function breadcrumbNavHtml(chain) {
  const lis = chain.crumbs.map((c, i) => (i === chain.crumbs.length - 1
    ? `<li aria-current="page">${esc(c.name)}</li>`
    : `<li><a href="${c.path}">${esc(c.name)}</a></li>`)).join('');
  return `\n    <nav aria-label="Breadcrumb" class="geo-breadcrumb"><ol>${lis}</ol></nav>`;
}

const a = (l) => `<a href="${l.href}">${esc(l.anchor)}</a>`;
const joinAnd = (xs) => (xs.length <= 1 ? xs.join('') : `${xs.slice(0, -1).join(', ')} and ${xs[xs.length - 1]}`);

export function upLinksHtml(chain) {
  const F = GEO_FAMILIES[chain.family];
  let text;
  if (F.geo === false) {
    // Reporting: comparison hub first, then the product page.
    const parts = [];
    if (chain.hubLink) parts.push(`Part of our guide to ${a(chain.hubLink)}`);
    if (chain.extraLinks.length) parts.push(`${parts.length ? 'for the platform itself, see' : 'See'} ${chain.extraLinks.map(a).join(' and ')}`);
    if (!parts.length) return '';
    text = `${parts.join('; ')}.`;
  } else {
    const items = chain.geoLinks.map(a);
    if (chain.hubLink) items.push(F.hubPhrase(a(chain.hubLink)));
    if (!items.length) return '';
    text = `Part of ${joinAnd(items)}.`;
  }
  return `\n    <p class="geo-uplinks">${text}</p>`;
}

function insertAfterH1(body, html) {
  const mainAt = body.search(/<main[\s>]/i);
  const from = mainAt >= 0 ? mainAt : 0;
  const rel = body.slice(from).search(/<\/h1>/i);
  if (rel >= 0) { const i = from + rel + 5; return body.slice(0, i) + html + body.slice(i); }
  if (mainAt >= 0) { const i = body.indexOf('>', mainAt) + 1; return body.slice(0, i) + html + body.slice(i); }
  return html + body;
}
function insertBeforeMainEnd(body, html) {
  let i = body.lastIndexOf('</main>');
  if (i < 0) return body + html;
  while (i > 0 && /\s/.test(body[i - 1])) i--; // keep the indentation before </main>
  return body.slice(0, i) + html + body.slice(i);
}

// ── main pass ─────────────────────────────────────────────────────────────
/**
 * @param routes  prerender route list, mutated in place
 * @returns stats object (see bottom)
 */
export function applyGeoHierarchy(routes, root = process.cwd()) {
  const data = loadGeoHierarchyData(root);
  const byPath = new Map();
  for (const r of routes) if (r && r.path && !byPath.has(r.path)) byPath.set(r.path, r);
  // A built page that vercel.json redirects is never served: neither a source
  // nor a link target (seo-release would rewrite the link to the destination).
  const redirected = loadRedirectSources(root);
  // Link target: built, indexable, self-canonical and not redirected.
  const ok = (p) => { const r = byPath.get(p); return !!r && !isNoindex(r) && selfCanonical(r) && !redirected.has(p); };

  const stats = {
    pages: 0, byFamily: {}, byKind: {}, crumbsReplaced: 0, crumbsAdded: 0, navs: 0, navSkippedExisting: 0, upLinks: 0,
    stateLists: 0, countryLists: 0, downLinks: 0, unmapped: [], hubDrift: { missing: [], extra: [] },
  };
  const unmapped = new Set();
  const skip = new Set(data.skip || []);

  // down-link buckets
  const stateItems = new Map(); // state hub -> Map(citySlug -> { city, primary, variants[] })
  const countryStates = new Map(); // country hub -> [{ href, anchor, name }]
  const countryOthers = new Map(); // country hub -> [{ href, anchor, name }] (no state hub)
  const hubMeta = new Map(); // hub -> { family, name, cc }
  const chains = new Map(); // route -> chain, for the up-links step
  const push = (m, k, v) => { if (!m.has(k)) m.set(k, []); m.get(k).push(v); };

  for (const r of routes) {
    if (!r || !r.path || typeof r.bodyContent !== 'string' || r.path.includes(':')) continue;
    const c0 = classifyGeoPath(data, r.path);
    if (!c0) continue;
    if (redirected.has(r.path)) continue;
    if (c0.kind === 'unmapped') { if (!skip.has(c0.slug)) unmapped.add(`${c0.family}:${c0.slug}`); continue; }
    if (isNoindex(r)) continue;
    const chain = geoChain(data, r.path, ok);
    if (!chain) continue;

    // 1. JSON-LD
    const res = setBreadcrumb(r, breadcrumbListItems(chain));
    if (res === 'replaced') stats.crumbsReplaced++; else stats.crumbsAdded++;
    // 2. visible breadcrumb
    if (!r.bodyContent.includes('class="geo-breadcrumb"')) {
      if (/aria-label=["']breadcrumb["']/i.test(r.bodyContent)) stats.navSkippedExisting++;
      else { r.bodyContent = insertAfterH1(r.bodyContent, breadcrumbNavHtml(chain)); stats.navs++; }
    }
    stats.pages++;
    stats.byFamily[chain.family] = (stats.byFamily[chain.family] || 0) + 1;
    stats.byKind[chain.kind] = (stats.byKind[chain.kind] || 0) + 1;
    chains.set(r, chain);

    // collect down-links (targets must be indexable and self-canonical)
    if (!ok(r.path)) continue;
    const link = { href: r.path, anchor: downLinkAnchor(data, chain), name: chain.name };
    if (chain.kind === 'city' && chain.stateHub) {
      if (!stateItems.has(chain.stateHub)) stateItems.set(chain.stateHub, new Map());
      hubMeta.set(chain.stateHub, { family: chain.family, name: data.regions[chain.state][0], cc: chain.cc });
      const bucket = stateItems.get(chain.stateHub);
      if (!bucket.has(chain.slug)) bucket.set(chain.slug, { city: chain.city, primary: null, variants: [] });
      const e = bucket.get(chain.slug);
      if (chain.variant) e.variants.push(link); else e.primary = link;
    } else if ((chain.kind === 'city' || chain.kind === 'area') && chain.countryHub && !chain.variant) {
      push(countryOthers, chain.countryHub, link);
      hubMeta.set(chain.countryHub, { family: chain.family, cc: chain.cc });
    } else if (chain.kind === 'state' && chain.countryHub) {
      push(countryStates, chain.countryHub, link);
      hubMeta.set(chain.countryHub, { family: chain.family, cc: chain.cc });
    }
  }

  // 4. hub down-lists (before the up-links so the up-links stay last in <main>)
  const byName = (x, y) => x.name.localeCompare(y.name);
  const dedupe = (xs) => [...new Map(xs.map((x) => [x.href, x])).values()];
  for (const [hub, bucket] of stateItems) {
    const r = byPath.get(hub);
    const meta = hubMeta.get(hub);
    if (!r || typeof r.bodyContent !== 'string' || isNoindex(r) || r.bodyContent.includes(`data-geo-cities="${meta.family}"`)) continue;
    const items = [...bucket.values()]
      .map((e) => ({ city: e.city, links: e.primary ? [e.primary] : e.variants.sort((x, y) => x.anchor.localeCompare(y.anchor)) }))
      .filter((e) => e.links.length)
      .sort((x, y) => x.city.localeCompare(y.city));
    const html = geoHubCitiesHtml(meta.family, meta.name, items);
    if (!html) continue;
    r.bodyContent = insertBeforeMainEnd(r.bodyContent, html);
    stats.stateLists++;
    stats.downLinks += items.reduce((n, e) => n + e.links.length, 0);
  }
  for (const hub of new Set([...countryStates.keys(), ...countryOthers.keys()])) {
    const r = byPath.get(hub);
    const meta = hubMeta.get(hub);
    if (!r || typeof r.bodyContent !== 'string' || isNoindex(r) || r.bodyContent.includes(`data-geo-states="${meta.family}"`)) continue;
    const F = GEO_FAMILIES[meta.family];
    const states = dedupe(countryStates.get(hub) || []).sort(byName);
    const others = dedupe(countryOthers.get(hub) || []).sort(byName);
    const html = geoHubStatesHtml(meta.family, {
      heading: `${F.hubAnchor} by ${meta.cc === 'CA' ? 'province' : 'state'}`.replace(/^./, (ch) => ch.toUpperCase()),
      states,
      othersHeading: `More ${F.hubAnchor} locations in ${meta.cc === 'US' ? 'the USA' : COUNTRY_LABEL[meta.cc]}`,
      others,
    });
    if (!html) continue;
    r.bodyContent = insertBeforeMainEnd(r.bodyContent, html);
    stats.countryLists++;
    stats.downLinks += states.length + others.length;
  }

  // 3. up-links, last thing before </main>
  for (const [r, chain] of chains) {
    if (r.bodyContent.includes('class="geo-uplinks"')) continue;
    const html = upLinksHtml(chain);
    if (!html) continue;
    r.bodyContent = insertBeforeMainEnd(r.bodyContent, html);
    stats.upLinks++;
  }

  // React-layer hub list drift (src/lib/geo-hierarchy.ts reads hubPaths).
  const want = new Set(computeHubPaths(data, ok));
  const have = new Set(data.hubPaths || []);
  stats.hubDrift.missing = [...want].filter((p) => !have.has(p));
  stats.hubDrift.extra = [...have].filter((p) => !want.has(p));
  stats.unmapped = [...unmapped].sort();
  return stats;
}

/** Every hub path the chains can reference (family, section, product, country, state). */
export function computeHubPaths(data, ok) {
  const out = new Set();
  for (const F of Object.values(GEO_FAMILIES)) {
    for (const p of [F.hub, F.section && F.section.path, F.product && F.product.path, ...Object.values(F.countryHubs || {})]) if (p && ok(p)) out.add(p);
    if (!F.statePrefix) continue;
    for (const st of Object.keys(data.regions || {})) {
      for (const p of [`${F.statePrefix}${st}`, `${F.statePrefix}${st}-state`]) {
        const c = classifyGeoPath(data, p);
        if (c && c.kind === 'state' && ok(p)) out.add(p);
      }
    }
  }
  return [...out].sort();
}

export function geoHierarchySummary(s) {
  const fam = Object.entries(s.byFamily).map(([k, v]) => `${k} ${v}`).join(', ');
  return `🧭 Geo hierarchy: ${s.pages} pages (${fam}) · BreadcrumbList ${s.crumbsReplaced} rewritten + ${s.crumbsAdded} added · ` +
    `${s.navs} visible breadcrumbs · ${s.upLinks} up-link blocks · ${s.stateLists} state + ${s.countryLists} country hub lists (${s.downLinks} down-links)` +
    (s.navSkippedExisting ? ` · ${s.navSkippedExisting} pages kept their own breadcrumb nav` : '') +
    (s.unmapped.length ? ` · UNMAPPED (add to src/data/geo-hierarchy.json cities or skip): ${s.unmapped.join(', ')}` : '') +
    (s.hubDrift.missing.length || s.hubDrift.extra.length ? ` · React hub list stale (+${s.hubDrift.missing.length} -${s.hubDrift.extra.length}): run node scripts/geo-hierarchy-links.mjs --refresh-hubs` : '');
}

// ── CLI: refresh hubPaths from dist/ ──────────────────────────────────────
if (process.argv[1] && process.argv[1].replace(/\\/g, '/').endsWith('scripts/geo-hierarchy-links.mjs') && process.argv.includes('--refresh-hubs')) {
  const root = process.cwd();
  const dist = join(root, 'dist');
  if (!existsSync(dist)) { console.error('dist/ not found — build first.'); process.exit(1); }
  const data = loadGeoHierarchyData(root);
  const redirected = loadRedirectSources(root);
  const cache = new Map();
  const ok = (p) => {
    if (cache.has(p)) return cache.get(p);
    if (redirected.has(p)) { cache.set(p, false); return false; }
    const f = join(dist, ...p.split('/').filter(Boolean), 'index.html');
    let v = false;
    if (existsSync(f) && statSync(f).isFile()) {
      const h = readFileSync(f, 'utf-8');
      const canon = (h.match(/<link rel="canonical" href="([^"]*)"/) || [])[1] || '';
      v = !/name="robots" content="[^"]*noindex/i.test(h) && (!canon || (canon.replace(SITE, '').replace(/\/+$/, '') || '/') === p);
    }
    cache.set(p, v);
    return v;
  };
  data.hubPaths = computeHubPaths(data, ok);
  const raw = readFileSync(join(root, DATA_FILE), 'utf-8');
  const next = raw.replace(/"hubPaths":\s*\[[^\]]*\]/, `"hubPaths": ${JSON.stringify(data.hubPaths)}`);
  JSON.parse(next);
  writeFileSync(join(root, DATA_FILE), next);
  console.log(`hubPaths refreshed: ${data.hubPaths.length} hubs written to ${DATA_FILE}`);
}
