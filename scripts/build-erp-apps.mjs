// Merges content-agent output for the ERP app pages into:
//   - src/data/erp-apps/{app}.json and {app}--{region}.json (React, lazy chunks)
//   - scripts/erp-apps-routes.mjs (prerender static routes, incl. /erp/apps hub)
// Validation is independent of the writers: real word count >= 2000, key must
// exist in the catalog, no body <h1>, >= 6 <h2>, a /contact link, and the
// pricing / personal-email / non-SNT-TC-1A training patterns are rejected.
// Usage: node scripts/build-erp-apps.mjs <dir-with-output-erp-apps-*.json>
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'fs';
import { join } from 'path';

const SRC = process.argv[2];
if (!SRC) { console.error('usage: node scripts/build-erp-apps.mjs <dir>'); process.exit(1); }
const catalog = JSON.parse(readFileSync('src/data/erp-apps-catalog.json', 'utf-8'));
const apps = new Map(catalog.apps.map((a) => [a.slug, a]));
const regions = new Map(catalog.regions.map((r) => [r.slug, r]));

const expected = new Set();
for (const a of catalog.apps) {
  expected.add(a.slug);
  if (a.regional) for (const r of catalog.regions) expected.add(`${a.slug}--${r.slug}`);
}

const FORBIDDEN = [
  [/[$€£₹]\s?\d/, 'currency amount'],
  [/\b(USD|INR|SAR|AED|GBP|EUR|CAD)\s?\d/, 'currency amount'],
  [/per (user|seat|month)\b[^.]{0,30}\d/i, 'per-seat price'],
  [/anu\.anoop485/i, 'personal email'],
  [/Atlantis[^.]{0,80}\b(ISO 9712|PCN|API 510|API 570|API 653)\b[^.]{0,40}\b(training|course|certif)/i, 'non-ASNT training offer'],
  [/\b\d{1,3}(\.\d)?%\s+(of (our )?(customers|clients)|pass rate|faster|reduction|less|more)\b/i, 'unsourced performance stat'],
  [/\b(testimonial|trusted by \d|\d+\+? (customers|clients|companies) (use|trust))/i, 'fabricated social proof'],
  [/<h1[\s>]/i, 'h1 inside body'],
];

const words = (html) => html.replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').split(/\s+/).filter(Boolean).length;

const files = readdirSync(SRC).filter((f) => /^output-erp-apps-.*\.json$/.test(f));
const items = files.flatMap((f) => JSON.parse(readFileSync(join(SRC, f), 'utf-8')).map((x) => ({ ...x, _file: f })));

const ok = new Map();
const bad = [];
for (const it of items) {
  const why = [];
  if (!expected.has(it.key)) why.push('unknown key');
  if (ok.has(it.key)) why.push('duplicate');
  for (const f of ['h1', 'title', 'metaDescription', 'bodyHtml']) if (!it[f]) why.push(`missing ${f}`);
  if (it.bodyHtml) {
    const wc = words(it.bodyHtml);
    if (wc < 2000) why.push(`${wc} words`);
    if ((it.bodyHtml.match(/<h2[\s>]/g) || []).length < 6) why.push('<6 h2');
    if (!/href="\/contact/.test(it.bodyHtml)) why.push('no /contact link');
    for (const [re, label] of FORBIDDEN) {
      const m = it.bodyHtml.match(re) || (it.metaDescription || '').match(re) || (it.title || '').match(re);
      // "Atlantis does not train for ISO 9712" is the disclaimer we want, not an offer.
      const around = m && m.input ? m.input.slice(Math.max(0, m.index - 8), m.index + m[0].length + 30) : '';
      const disclaimer = /\b(not|never|no|only)\b|n['’]t\b/i.test(m?.[0] || '') || /\bDoes\s+$|\?\s*(<\/h3>\s*<p>)?\s*No\b/i.test(around);
      if (m && !(label === 'non-ASNT training offer' && disclaimer)) why.push(`${label}: "${m[0]}"`);
    }
    for (const m of it.bodyHtml.matchAll(/href=["']\/erp\/apps\/([a-z-]+)(?:\/([a-z-]+))?/g)) {
      if (!apps.has(m[1]) || (m[2] && !regions.has(m[2]))) why.push(`bad app link /erp/apps/${m[1]}${m[2] ? '/' + m[2] : ''}`);
    }
    it.wordCount = wc;
  }
  if (it.title && it.title.length > 70) why.push(`title ${it.title.length} chars`);
  if (it.metaDescription && (it.metaDescription.length < 110 || it.metaDescription.length > 165)) why.push(`meta ${it.metaDescription.length} chars`);
  if (why.length) bad.push({ key: it.key, file: it._file, why }); else ok.set(it.key, it);
}

const missing = [...expected].filter((k) => !ok.has(k));
console.log(`${ok.size}/${expected.size} pages valid (${items.length} submitted).`);
for (const b of bad) console.log(`  REJECT ${b.key} [${b.file}]: ${b.why.join('; ')}`);
if (missing.length) console.log(`  MISSING: ${missing.join(', ')}`);

mkdirSync('src/data/erp-apps', { recursive: true });
for (const [key, it] of ok) {
  writeFileSync(`src/data/erp-apps/${key}.json`, JSON.stringify({ h1: it.h1, title: it.title, metaDescription: it.metaDescription, bodyHtml: it.bodyHtml }));
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const header = '<header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/erp">ERP</a><a href="/erp/apps">ERP Apps</a><a href="/digital-twin-reporting">Digital Twin Reporting</a><a href="/practical-ndt">Practical NDT</a><a href="/contact">Contact</a></nav></header>';

function pagePath(key) {
  const [app, region] = key.split('--');
  return region ? `/erp/apps/${app}/${region}` : `/erp/apps/${app}`;
}

const routes = [];
for (const [key, it] of ok) {
  const [appSlug, regionSlug] = key.split('--');
  const app = apps.get(appSlug);
  const svc = encodeURIComponent(app.service);
  const subj = encodeURIComponent(`${app.name} demo${regionSlug ? ` (${regions.get(regionSlug).name})` : ''}`);
  const featured = app.featured ? `<p><strong>Featured in ${esc(app.name)}:</strong> <a href="${app.featured.path}">${esc(app.featured.name)}</a></p>` : '';
  const regional = app.regional
    ? `<h2>${esc(app.name)} by region</h2><ul>${regionSlug ? `<li><a href="/erp/apps/${appSlug}">${esc(app.name)} global overview</a></li>` : ''}${catalog.regions.filter((r) => r.slug !== regionSlug).map((r) => `<li><a href="/erp/apps/${appSlug}/${r.slug}">${esc(app.name)} in ${esc(r.name)}</a></li>`).join('')}</ul>`
    : '';
  const related = catalog.apps.filter((a) => a.category === app.category && a.slug !== appSlug);
  const works = related.length ? `<h2>Works with</h2><ul>${related.map((a) => `<li><a href="/erp/apps/${a.slug}">${esc(a.name)}</a>: ${esc(a.blurb)}</li>`).join('')}</ul>` : '';
  routes.push({
    path: pagePath(key),
    publishedAt: '2026-09-27',
    title: it.title,
    description: it.metaDescription,
    bodyContent: `${header}\n<main>\n<h1>${esc(it.h1)}</h1>\n<p>${esc(app.blurb)} <a href="/contact?service=${svc}&amp;subject=${subj}">Request a demo</a>. Affordable. Accessible. Fully customizable. Quote on request.</p>\n${featured}\n${it.bodyHtml}\n${regional}\n${works}\n<p><a href="/contact?service=${svc}&amp;subject=${subj}">Send an enquiry about ${esc(app.name)}</a> · <a href="/erp/apps">All ERP apps</a> · <a href="/erp">Atlantis NDT ERP</a></p>\n</main>`,
  });
}

// Hub
const hubBody = [
  header, '<main>', '<h1>Every app in the Atlantis NDT ERP</h1>',
  `<p>One system for an NDT company: ${catalog.apps.length} apps covering inspection reports, technician certifications, crews, quotes, invoicing and training. Start with the apps you need and add the rest when you're ready. <a href="/contact?service=erp&amp;subject=ERP%20demo%20(all%20apps)">Request a demo</a>.</p>`,
  ...catalog.apps.filter((a) => a.featured).map((a) => `<p><strong>Featured in ${esc(a.name)}:</strong> <a href="${a.featured.path}">${esc(a.featured.name)}</a></p>`),
  ...catalog.categories.map((c) => `<h2>${esc(c.name)}</h2><ul>${catalog.apps.filter((a) => a.category === c.key).map((a) => `<li><a href="/erp/apps/${a.slug}">${esc(a.name)}</a>: ${esc(a.blurb)}</li>`).join('')}</ul>`),
  `<h2>Custom apps — built on request</h2><p>Not on the standard home screen. Built to your requirements when your business needs them, on the same system as the rest of Atlantis ERP.</p><ul>${(catalog.customApps || []).map((a) => `<li><a href="${a.path}">${esc(a.name)}</a>: ${esc(a.blurb)}</li>`).join('')}</ul><p><a href="/contact?service=erp&amp;subject=Custom%20ERP%20app%20request">Request a custom app</a>.</p>`,
  '<h2>Not sure which apps you need?</h2><p>Tell us how your NDT business runs today and we\'ll suggest where to start. <a href="/contact?service=erp&amp;subject=Which%20ERP%20apps%20do%20we%20need%3F">Talk to us</a>.</p>',
  '</main>',
].join('\n');
routes.unshift({
  path: '/erp/apps',
  publishedAt: '2026-09-27',
  title: 'NDT ERP Apps: Reports, Certificates, eLearning & More | Atlantis NDT',
  description: `All ${catalog.apps.length} apps in the Atlantis NDT ERP, from NDT Reports and technician Certificates to Team Assignments, Quotations and eLearning. Book a demo or request a quote.`,
  bodyContent: hubBody,
});

writeFileSync('scripts/erp-apps-routes.mjs', `// GENERATED by scripts/build-erp-apps.mjs, do not hand-edit. ${routes.length} routes.\nexport const ERP_APPS_ROUTES = ${JSON.stringify(routes)};\n`);
console.log(`Wrote ${ok.size} data files + scripts/erp-apps-routes.mjs (${routes.length} routes).`);
if (bad.length || missing.length) process.exitCode = 2;
