#!/usr/bin/env node
// Post-deploy SEO smoke test (2026-09-30).
//   node scripts/validate-seo-deploy.mjs https://atlantisndt.com
// Samples ~40 URLs (home, hubs, 10 training city pages, 10 blogs, sitemaps,
// robots, redirects) and checks: HTTP status, self-canonical, no noindex,
// exactly one <h1>, every JSON-LD block parses, and the deep-content section on
// /ndt-training-houston and /ndt-erp-houston. Exit code 1 on any failure.
const base = (process.argv[2] || 'https://atlantisndt.com').replace(/\/$/, '');
const UA = 'Mozilla/5.0 (compatible; AtlantisSEOValidator/1.0)';

const HOME_H1 = 'NDT Training, Inspection Services, Level III Consulting and Inspection Software';
const HUBS = ['/training', '/inspection-services', '/consulting/ndt-consulting-level-iii', '/erp', '/digital-twin-reporting', '/practical-ndt', '/digital-twins', '/contact', '/blog'];
const TRAINING_CITIES = ['houston', 'dallas', 'austin', 'san-antonio', 'los-angeles', 'chicago', 'new-york', 'calgary', 'edmonton', 'denver'].map((c) => `/ndt-training-${c}`);
const BLOGS = [
  '/blog/ndt-salary-guide-2026-global',
  '/blog/ut-level-2-practice-questions',
  '/blog/asme-section-v-article-6-liquid-penetrant-pt-requirements-explained',
  '/blog/asme-section-viii-division-1-pressure-vessel-ndt',
  '/blog/asme-section-v-article-4-ut-requirements-explained',
];
const DEEP = ['/ndt-training-houston', '/ndt-erp-houston'];
const XML = ['/sitemap-index.xml', '/robots.txt'];
// [source, expected final path]
const REDIRECTS = [
  ['/sitemap.xml', '/sitemap-index.xml'],
  ['/sitemap_index.xml', '/sitemap-index.xml'],
  ['/news-sitemap.xml', '/sitemap-index.xml'],
  ['/category/ndt', '/blog'],
  ['/feed/', '/blog'],
];

const results = [];
const fail = (url, msg) => results.push({ url, ok: false, msg });
const pass = (url, msg) => results.push({ url, ok: true, msg });

async function get(path, redirect = 'follow') {
  return fetch(base + path, { redirect, headers: { 'User-Agent': UA } });
}

async function blogSample() {
  // Top-up to 10 blog URLs from the live blog sitemap.
  try {
    const xml = await (await get('/sitemap-blog.xml')).text();
    const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
    for (const p of locs) { if (BLOGS.length >= 10) break; if (!BLOGS.includes(p)) BLOGS.push(p); }
  } catch { /* keep the fixed list */ }
}

function checkHtml(path, html) {
  const problems = [];
  const canon = (html.match(/<link[^>]+rel="canonical"[^>]*href="([^"]+)"/i) || html.match(/<link[^>]+href="([^"]+)"[^>]*rel="canonical"/i) || [])[1];
  const want = base.replace(/^https?:\/\/[^/]+/, 'https://atlantisndt.com') + (path === '/' ? '/' : path);
  if (!canon) problems.push('no canonical');
  else if (canon.replace(/\/$/, '') !== want.replace(/\/$/, '')) problems.push(`canonical -> ${canon}`);
  const robots = (html.match(/<meta[^>]+name="robots"[^>]*content="([^"]+)"/i) || [])[1] || '';
  if (/noindex/i.test(robots)) problems.push(`robots=${robots}`);
  const h1s = [...html.matchAll(/<h1[\s>][\s\S]*?<\/h1>/gi)];
  if (h1s.length !== 1) problems.push(`${h1s.length} <h1>`);
  if (path === '/') {
    const h1 = (h1s[0]?.[0] || '').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').trim();
    if (h1 !== HOME_H1) problems.push(`home H1 "${h1}"`);
    if (!/<form[^>]+id="home-enquiry"/.test(html)) problems.push('home enquiry form missing');
  }
  let ld = 0;
  for (const m of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    ld++;
    try { JSON.parse(m[1]); } catch (e) { problems.push(`JSON-LD #${ld} invalid: ${e.message.slice(0, 60)}`); }
  }
  if (DEEP.includes(path) && !/data-deep-content|id="deep-content"|class="deep-content/i.test(html)) problems.push('deep-content section missing');
  return { problems, ld, title: (html.match(/<title>([^<]*)/) || [])[1] || '' };
}

async function checkPage(path) {
  try {
    const r = await get(path, 'manual');
    if (r.status !== 200) return fail(path, `HTTP ${r.status}${r.headers.get('location') ? ' -> ' + r.headers.get('location') : ''}`);
    const { problems, ld, title } = checkHtml(path, await r.text());
    problems.length ? fail(path, problems.join('; ')) : pass(path, `200, ${ld} JSON-LD, "${title.slice(0, 60)}"`);
  } catch (e) { fail(path, e.message); }
}

async function checkFile(path) {
  try {
    const r = await get(path, 'manual');
    const body = await r.text();
    if (r.status !== 200) return fail(path, `HTTP ${r.status}`);
    if (path.endsWith('.xml') && !/<(sitemapindex|urlset)/.test(body)) return fail(path, 'not a sitemap');
    if (path === '/robots.txt' && !/Sitemap:\s*https:\/\/atlantisndt\.com\/sitemap-index\.xml/.test(body)) return fail(path, 'robots.txt does not declare /sitemap-index.xml');
    pass(path, `200 (${body.length} bytes)`);
  } catch (e) { fail(path, e.message); }
}

async function checkRedirect([src, dest]) {
  try {
    const r = await get(src, 'manual');
    const loc = r.headers.get('location') || '';
    const target = loc ? new URL(loc, base).pathname : '';
    if (![301, 308].includes(r.status)) return fail(src, `expected 301/308, got ${r.status}`);
    if (target.replace(/\/$/, '') !== dest.replace(/\/$/, '')) return fail(src, `-> ${loc} (expected ${dest})`);
    const hop = await get(target, 'manual');
    if (hop.status !== 200) return fail(src, `target ${target} answers ${hop.status} (chain or dead end)`);
    pass(src, `${r.status} -> ${target} (200, one hop)`);
  } catch (e) { fail(src, e.message); }
}

await blogSample();
const pages = ['/', ...HUBS, ...TRAINING_CITIES, ...BLOGS, ...DEEP.filter((p) => !TRAINING_CITIES.includes(p))];
for (let i = 0; i < pages.length; i += 6) await Promise.all(pages.slice(i, i + 6).map(checkPage));
await Promise.all(XML.map(checkFile));
await Promise.all(REDIRECTS.map(checkRedirect));

const bad = results.filter((r) => !r.ok);
console.log(`\nSEO deploy validation — ${base} — ${new Date().toISOString()}`);
for (const r of results) console.log(`${r.ok ? 'PASS' : 'FAIL'}  ${r.url.padEnd(62)} ${r.msg}`);
console.log(`\n${results.length} checks, ${results.length - bad.length} passed, ${bad.length} failed`);
process.exit(bad.length ? 1 : 0);
