import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url); const {load} = require('cheerio');
const read = p => load(readFileSync('dist'+(p==='/'?'':p)+'/index.html','utf8'),{decodeEntities:false});
const sitemap = readFileSync('dist/sitemap-index.xml','utf8');
const maps = [...sitemap.matchAll(/<loc>https:\/\/atlantisndt.com\/(.*?)<\/loc>/g)].map(m=>m[1]);
const seen = new Set(), failures=[];
for (const name of maps) {
  for (const [,url] of readFileSync('dist/'+name,'utf8').matchAll(/<loc>(.*?)<\/loc>/g)) {
    if (seen.has(url)) failures.push('Duplicate: '+url); seen.add(url);
    const path = new URL(url).pathname;
    const $=read(path);
    if ($('link[rel="canonical"]').length !== 1 || $('link[rel="canonical"]').attr('href') !== url) failures.push('Canonical: '+path);
    if (/noindex/i.test($('meta[name="robots"]').attr('content') || '')) failures.push('Noindex: '+path);
    if ($('h1').length !== 1) failures.push('H1: '+path);
    if (!$('meta[name="atlantis-publication"]').length) failures.push('Publication: '+path);
    if (!$('title').text() || !$('meta[name="description"]').attr('content')) failures.push('Metadata: '+path);
    const lang = path.startsWith('/ar/')?'ar':path.startsWith('/es/')?'es':'en';
    if ($('html').attr('lang') !== lang) failures.push('Language: '+path);
    const alternates = $('link[hreflang]').toArray();
    for (const el of alternates) {
      const href=$(el).attr('href'), target=new URL(href).pathname;
      if (!existsSync('dist'+target+'/index.html')) { failures.push('Alternate missing: '+path); continue; }
      const targetPage=read(target);
      if (targetPage('link[rel="canonical"]').attr('href') !== href) failures.push('Alternate canonical: '+path);
      if (!targetPage(`link[hreflang][href="${url}"]`).length) failures.push('Alternate return: '+path);
    }
  }
}
const cfg=JSON.parse(readFileSync('vercel.json','utf8'));
assert.equal(cfg.rewrites.length,0,'No homepage fallback rewrite');
assert.ok(existsSync('dist/404.html'));
for (const p of ['/training-usa','/training-india','/training-me']) {
 const $=read(p); if (/95%|96%|ASNT.{0,15}Approved|ISNT.{0,15}Approved/i.test($('main').text()+$('title').text())) failures.push('Unsupported training claim: '+p);
}
writeFileSync('reports/seo-verification-2026-09-12.json',JSON.stringify({sitemapUrls:seen.size,subSitemaps:maps.length,failures},null,2));
console.log(`${seen.size} sitemap URLs checked; ${failures.length} failures`);
if (failures.length) { console.error(failures.slice(0,30)); process.exitCode=1; }
