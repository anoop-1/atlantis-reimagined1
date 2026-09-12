import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { editorialUpgrades } from './seo-editorial-2026-09-12.mjs';
import { localizedMain } from './seo-localization-2026-09-12.mjs';
const require = createRequire(import.meta.url);
const { load } = require('cheerio');
const root = fileURLToPath(new URL('../', import.meta.url));
const dist = join(root, 'dist');
const site = 'https://atlantisndt.com';
const demoEvidence = JSON.parse(readFileSync(join(root,'src/data/product-demo-evidence.json'),'utf8'));
const walk = d => readdirSync(d, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(join(d, e.name)) : e.name === 'index.html' ? [join(d, e.name)] : []);
const files = walk(dist);
const pages = new Map(files.map(file => ['/' + relative(dist, dirname(file)).replaceAll('\\', '/'), { file }]));
const read = p => load(readFileSync(pages.get(p).file, 'utf8'), { decodeEntities: false });
const heading = p => read(p)('h1').first().text();
const redirectConfig = JSON.parse(readFileSync(join(root, 'vercel.json'), 'utf8'));
const redirects = new Map(redirectConfig.redirects.filter(r => !r.has && !/[:*()]/.test(r.source)).map(r => [r.source, r.destination]));
function resolve(path) { const seen = new Set(); while (redirects.has(path) && !seen.has(path)) { seen.add(path); path = redirects.get(path); } return path; }
const replacements = {
  '/ndt-training-vizag': '/ndt-training-visakhapatnam',
  '/ndt-training-toronto': '/training-canada', '/ndt-training-phoenix': '/training-usa',
  '/ndt-training-san-francisco': '/training-usa', '/ndt-training-bahrain': '/training-me',
  '/ndt-training-ahmedabad': '/training-india',
};

// Restore a genuinely useful hub for the existing compliance links. This is
// an index of already published guides, not another regional permutation.
{
  const $ = load(readFileSync(join(dist, 'training-usa/index.html'), 'utf8'), { decodeEntities: false });
  $('title').text('NDT Compliance Guides by Country and Standard | Atlantis NDT');
  $('meta[name="description"]').attr('content', 'Find country and standards guides for NDT personnel, inspection records and quality systems. Scope your compliance questions with Atlantis NDT consulting.');
  $('link[rel="canonical"]').attr('href', site + '/compliance');
  $('script[type="application/ld+json"]').remove();
  const links = [...pages].filter(([p]) => p.startsWith('/compliance/')).sort(([a], [b]) => a.localeCompare(b)).map(([p]) => `<li><a href="${p}">${heading(p).replaceAll('&', '&amp;').replaceAll('<', '&lt;')}</a></li>`).join('\n');
  $('#root').html(`<header><nav><a href="/">Home</a> <a href="/consulting">Consulting</a></nav></header><main><h1>NDT compliance guides</h1><p>Use these country and standards guides to prepare questions about personnel qualification, procedures and inspection records. Applicable obligations depend on the asset, jurisdiction, contract and current adopted edition. A guide is a starting point; it does not establish certification or regulatory approval.</p><p><a href="/consulting">Discuss your inspection programme</a> or <a href="/contact?service=consulting">request a compliance scoping call</a>.</p><h2>Published country and standards guides</h2><ul>${links}</ul></main>`);
  const file = join(dist, 'compliance/index.html'); mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, $.html()); pages.set('/compliance', { file });
}

let fixedLinks = 0, unlinkedMissing = 0;
const missing = new Map();
for (const [path, { file }] of pages) {
  const $ = read(path);
  $('.seo-upgrade, .seo-region-links, nav[aria-label="Language versions"]').remove();
  if (/^\/(ar|es)\//.test(path)) {
    $('main').html(localizedMain(path, $('h1').first().text(), $('main p').first().html() || ''));
    // Rebuild schema against the translated visible article, without legacy
    // English FAQ answers or unverified customer ratings.
    $('script[type="application/ld+json"]').remove();
  }
  if (['/training-usa','/training-india','/training-me'].includes(path)) {
    const region = path.endsWith('usa') ? 'the USA' : path.endsWith('india') ? 'India' : 'the Gulf';
    $('main p').first().html(`NDT training for teams and technicians in ${region}, scoped to the method, level, experience and qualification scheme required by the employer or client. Discuss classroom, online and onsite delivery, eligibility evidence and examination responsibilities before booking. <a href="/contact?service=training">Request a training pathway consultation</a>.`);
    $('main h2').each((_,el) => {
      const h=$(el), title=h.text();
      if (title === 'Atlantis NDT Integrated Stack') { h.text('Related inspection services'); h.next('p').html('Connect training records with <a href="/consulting">Level III consulting</a>, <a href="/ndt-erp-solution">inspection management software</a> and <a href="/digital-twins">digital twin workflows</a> where these support your project. Scope each service against the actual requirements.'); }
      if (title === 'Code Stack + Compliance') { h.text('Confirm the governing qualification requirements'); h.next('p').html('Identify the employer written practice, contract specifications and relevant adopted standards. Training is one part of qualification; the responsible employer or independent certification body determines the applicable certification requirements.'); }
      if (title === 'Delivery Model + Free Consultation') { h.text('Confirm delivery and availability'); h.next('p').html('Discuss your location, methods, levels and preferred delivery format. Dates, facilities, equipment and travel arrangements are confirmed during scoping. <a href="/contact?service=training">Request a consultation</a> for a proposal tailored to the project.'); }
    });
  }
  const upgrade = editorialUpgrades[path];
  if (upgrade) {
    if (upgrade.title) $('title').text(upgrade.title);
    if (upgrade.description) $('meta[name="description"]').attr('content', upgrade.description);
    if (upgrade.replaceMain) { $('main').html(upgrade.replaceMain); $('script[type="application/ld+json"]').remove(); }
    if (upgrade.html) $('main').append(upgrade.html);
  }
  if (path === '/resources/calibration-certificate-template') {
    $('title').text('Calibration Certificate Template — Free Editable DOCX');
    $('meta[name="description"]').attr('content','Download a blank calibration certificate template in Word format. Guidance on instrument identity, traceability and certificate records for NDT teams.');
    $('main h1').after('<p class="seo-upgrade"><a href="/templates/calibration-certificate-template.docx" download>Download the calibration certificate template (DOCX)</a>. Blank editable template; complete it with verified laboratory records.</p>');
  }
  if (['/digital-twins','/best-ndt-reporting-software-2026'].includes(path)) $('main').append(`<section class="seo-upgrade">${demoEvidence.html}</section>`);
  if (['/training-usa','/training-india','/training-me'].includes(path)) $('main').append('<p class="seo-upgrade">Certification background: <a href="https://www.asnt.org/standards-publications/blog/employer-based-certification-programs">ASNT’s explanation of employer-based certification</a>.</p>');
  // These definition pages are not equivalent to a hydrogen tank article or
  // a comparison of radiographic and ultrasonic inspection.
  if (['/glossary/storage-tank', '/glossary/fillet-weld', '/glossary/butt-weld'].includes(path)) $('link[rel="canonical"]').attr('href', site + path);
  $('a[href]').each((_, el) => {
    const a = $(el); const href = a.attr('href');
    if (!href.startsWith('/') && !href.startsWith(site + '/')) return;
    const url = new URL(href, site); let target = url.pathname.replace(/\/$/, '') || '/';
    const resolved = resolve(target);
    if (resolved !== target) { a.attr('href', resolved + url.search + url.hash); target = new URL(resolved, site).pathname; fixedLinks++; }
    if (pages.has(target) || /\.[a-z0-9]+$/i.test(target) && existsSync(join(dist, target.slice(1))) || target.startsWith('/api/')) return;
    if (replacements[target] && pages.has(replacements[target])) { a.attr('href', replacements[target] + url.search + url.hash); fixedLinks++; return; }
    missing.set(target, (missing.get(target) || 0) + 1);
    // Preserve the text without inviting a visit to a nonexistent page.
    a.replaceWith(a.html()); unlinkedMissing++;
  });
  const language = path.startsWith('/ar/') ? 'ar' : path.startsWith('/es/') ? 'es' : 'en';
  $('html').attr('lang', language).attr('dir', language === 'ar' ? 'rtl' : 'ltr');
  $('link[hreflang]').remove();
  const base = path.replace(/^\/(ar|es)/, '');
  const cluster = [['en', base], ['ar', '/ar' + base], ['es', '/es' + base]].filter(([, p]) => pages.has(p));
  if (cluster.length > 1) {
    for (const [lang, p] of [...cluster, ['x-default', base]]) $('head').append(`<link rel="alternate" hreflang="${lang}" href="${site}${p}" />`);
    const labels = { en: 'English', ar: 'العربية', es: 'Español' };
    $('main').append(`<nav aria-label="Language versions">${cluster.filter(([,p]) => p !== path).map(([lang,p]) => `<a lang="${lang}" href="${p}">${labels[lang]}</a>`).join(' · ')}</nav>`);
  }
  if (['/training', '/training-usa', '/training-india', '/training-me'].includes(path)) {
    for (const [lang, p] of [['en','/training'],['en-US','/training-usa'],['en-IN','/training-india'],['en-AE','/training-me'],['x-default','/training']]) $('head').append(`<link rel="alternate" hreflang="${lang}" href="${site}${p}" />`);
  }
  $('meta[name="atlantis-publication"]').remove(); $('head').append('<meta name="atlantis-publication" content="2026-09-12" />');
  // One owner for graph entities. Avoid repeating a global Organization and
  // separate Course/Breadcrumb entities when client rendering starts.
  const graph = new Map();
  const add = node => {
    if (Array.isArray(node)) { node.forEach(add); return; }
    if (!node || typeof node !== 'object') return;
    if (node['@graph']) { node['@graph'].forEach(add); return; }
    const type = node['@type'];
    if (type === 'Organization') return;
    const key = ['WebSite','BreadcrumbList','Course','Article','BlogPosting','FAQPage'].includes(type) ? type : node['@id'] || JSON.stringify(node);
    graph.set(key, node);
  };
  $('script[type="application/ld+json"]').each((_, el) => { try { add(JSON.parse($(el).html())); } catch { throw new Error(`Invalid JSON-LD: ${path}`); } });
  graph.set('Organization', { '@type': 'Organization', '@id': site + '/#organization', name: 'Atlantis NDT', url: site, email: 'info@atlantisndt.com', logo: site + '/atlantis.jpg' });
  if (!graph.has('BreadcrumbList') && path !== '/') graph.set('BreadcrumbList', { '@type':'BreadcrumbList', itemListElement:[{'@type':'ListItem',position:1,name:'Atlantis NDT',item:site+'/'},{'@type':'ListItem',position:2,name:$('h1').first().text(),item:site+path}] });
  if (upgrade?.replaceMain) graph.set('Article', { '@type':'Article', headline:$('h1').first().text(), dateModified:'2026-09-12', mainEntityOfPage:site+path, publisher:{'@id':site+'/#organization'} });
  if (['/training-usa','/training-india','/training-me'].includes(path)) graph.set('Course', { '@type':'Course', name:$('h1').first().text(), description:$('main p').first().text(), provider:{'@id':site+'/#organization'} });
  $('script[type="application/ld+json"]').remove();
  $('head').append(`<script type="application/ld+json" data-sd="publication">${JSON.stringify({'@context':'https://schema.org','@graph':[...graph.values()]}).replaceAll('<','\\u003c')}</script>`);
  const title = $('title').text(), description = $('meta[name="description"]').attr('content') || '';
  for (const [key,value] of [['og:title',title],['og:description',description],['og:url',$('link[rel="canonical"]').attr('href')]]) $(`meta[property="${key}"]`).attr('content', value);
  $('meta[name="twitter:title"]').attr('content',title); $('meta[name="twitter:description"]').attr('content',description);
  writeFileSync(file, $.html());
}

// Connect the known orphan cohort through the relevant US service hub.
for (const [hub, prefix] of [['/consulting-usa','/consulting/ndt-consulting-'],['/training-usa','/ndt-training-']]) {
  const names = hub.includes('consulting') ? ['huntsville','colorado-springs','raleigh','port-arthur','woods-cross','torrance','chalmette'] : ['port-arthur','sugar-land','whiting','el-segundo','honolulu','little-rock','springfield'];
  const links = names.map(n => prefix + n).filter(p => pages.has(p));
  if (pages.has(hub)) {
    const $ = read(hub);
    $('main').append(`<section class="seo-region-links"><h2>Explore regional project support</h2><ul>${links.map(p => `<li><a href="${p}">${heading(p)}</a></li>`).join('')}</ul></section>`);
    writeFileSync(pages.get(hub).file, $.html());
  }
}

// Sitemap membership is decided from the final emitted document, not an older
// route array. Omit unverifiable lastmod values rather than refresh dates on
// every build. The legacy and index entry points both reference this same set.
const seen = new Set();
const categories = new Map(['core','blog','glossary','training','consulting-locations','digital-twins','methods','other'].map(c => [c, []]));
for (const [path] of pages) {
  const $ = read(path);
  const canonical = $('link[rel="canonical"]').attr('href');
  if (/noindex/i.test($('meta[name="robots"]').attr('content') || '') || canonical !== site + (path === '/' ? '/' : path) || redirects.has(path) || path === '/404') continue;
  if (seen.has(canonical)) throw new Error(`Duplicate sitemap URL ${canonical}`);
  seen.add(canonical);
  const cat = path.startsWith('/blog/') ? 'blog' : path.startsWith('/glossary/') ? 'glossary' : /training/.test(path) ? 'training' : /consulting/.test(path) ? 'consulting-locations' : /digital-twin/.test(path) ? 'digital-twins' : path.split('/').length > 2 ? 'other' : 'core';
  if (!categories.has(cat)) categories.set(cat, []); categories.get(cat).push(canonical);
}
// This release has 5,493 local / 5,465 production canonical URLs. Fail closed on an accidental
// collapse (for example, prerender run against an already serialized document).
// Deliberate future consolidation must review and update this release guard.
if (seen.size < 5000) throw new Error(`Unexpected sitemap collapse: ${seen.size} URLs. Run the complete fresh build and review canonical output.`);
const writeMap = (name, xml) => { writeFileSync(join(dist,name),xml); writeFileSync(join(root,'public',name),xml); };
for (const [cat, urls] of categories) writeMap(`sitemap-${cat}.xml`, `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.sort().map(url => `<url><loc>${url}</loc></url>`).join('')}</urlset>`);
const index = `<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${[...categories.keys()].sort().map(cat => `<sitemap><loc>${site}/sitemap-${cat}.xml</loc></sitemap>`).join('')}</sitemapindex>`;
writeMap('sitemap.xml', index); writeMap('sitemap-index.xml', index);
writeFileSync(join(dist, '404.html'), '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,follow"><title>Page not found | Atlantis NDT</title></head><body><main><h1>Page not found</h1><p>This address does not have a published page.</p><nav><a href="/">Home</a> · <a href="/training">Training</a> · <a href="/consulting">Consulting</a> · <a href="/contact">Contact</a></nav></main></body></html>');
mkdirSync(join(root,'reports'), {recursive:true});
writeFileSync(join(root,'reports/seo-build-2026-09-12.json'), JSON.stringify({ pages: pages.size, sitemapUrls: seen.size, fixedLinks, unlinkedMissing, missingTargets: Object.fromEntries([...missing].sort((a,b)=>b[1]-a[1])) }, null, 2));
console.log(`SEO release: ${pages.size} pages, ${seen.size} canonical sitemap URLs; ${fixedLinks} links corrected; ${unlinkedMissing} dead link anchors removed (text preserved).`);
