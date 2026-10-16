import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import cheerio from 'cheerio';
const {load}=cheerio;
import {applyEditorialQuality} from './editorial-quality-pass.mjs';
import {erpEditorialContent} from './erp-editorial-content.mjs';
import {correctLegacyEditorialClaims} from './editorial-legacy-claims.mjs';
import {editorialBlogRecord} from './editorial-blog-data.mjs';
import {EDITORIAL_PAGE_UPGRADES as upgrades} from './editorial-upgrades.mjs'; // includes the generated practice-test pages
const legacy=load('<html><head><title>Old guide 2028</title></head><body><main><h1>Old guide 2028</h1><p>AI model validated per ASME PCC-3 gives automatic approval.</p><ul><li>Radiographic Testing (RT) – ASTM E1444: incorrect scope</li></ul></main></body></html>');
assert.ok(correctLegacyEditorialClaims(legacy,legacy('main'),'/blog/old-guide'));
assert.ok(!legacy('body').text().includes('E1444'));assert.ok(!legacy('body').text().includes('automatic approval'));assert.ok(!legacy('h1').text().includes('2028'));
const revised=editorialBlogRecord({slug:'asnt-recertification-pathway-2028',title:'ASNT Recertification 2028',date:'January 15, 2028',createdAt:'2028-01-15',content:'Obsolete text'});
assert.ok(!revised.title.includes('2028'));assert.ok(!revised.createdAt);assert.ok(!revised.date);assert.ok(!revised.content.includes('Obsolete'));assert.ok(revised.content.includes('employer-based'));
// Content replacement must remove obsolete material outside main as well as inside it.
const fixture=load('<html><head><title>Old</title><meta name="description" content="Old"><link rel="canonical" href="https://atlantisndt.com/erp-modules/asset-management-houston"></head><body><div id="root"><main><h1>Old</h1></main><section><h2>Obsolete pitch</h2><p>Old promise outside main.</p></section><nav><a href="/">Home</a></nav></div></body></html>');
applyEditorialQuality(fixture,'/erp-modules/asset-management-houston');
assert.equal(fixture('main').length,1);assert.equal(fixture('h1').length,1);assert.ok(!fixture('body').text().includes('Old promise'));assert.ok(fixture('main').text().includes('not a register of client plant assets'));assert.equal(fixture('link[rel=canonical]').attr('href'),'https://atlantisndt.com/erp-modules/asset-management');
const first=fixture('main').html();applyEditorialQuality(fixture,'/erp-modules/asset-management-houston');assert.equal(fixture('main').html(),first,'Idempotent replacement');
const form=load('<html><head></head><body><div id="root"><main><h1>Trial</h1><form><input name="email"></form></main></div></body></html>');assert.equal(applyEditorialQuality(form,'/free-trial'),false);assert.equal(form('form').length,1);
let checked=0;const missing=[];
for(const [path,u] of Object.entries(upgrades)){
 const file='dist'+path+'/index.html';assert.ok(existsSync(file),path);const $=load(readFileSync(file,'utf8'));assert.equal($('main').length,1,path+' main');assert.equal($('h1').length,1,path+' h1');
 const expected=load(u.html)('h2').first().text();assert.ok($('main').text().includes(expected),path+' missing editorial section');
 $('main a[href^="/"]').each((_,a)=>{const href=$(a).attr('href').split(/[?#]/)[0];if(href&&!existsSync('dist'+(href==='/'?'':href)+'/index.html')&&!existsSync('dist'+href))missing.push(path+' -> '+href);});checked++;
}
assert.deepEqual(missing,[],'Editorial internal links');
for(const path of ['/erp-modules/asset-management-houston','/erp-industries/aerospace-quality-control-houston','/erp/calibration-management-calibration-laboratories-dubai']){const u=erpEditorialContent(path),$=load(readFileSync('dist'+path+'/index.html','utf8'));assert.ok($('main').text().includes('Follow the work from start to finish'));assert.equal($('link[rel=canonical]').attr('href'),'https://atlantisndt.com'+u.canonical);const owner=load(readFileSync('dist'+u.canonical+'/index.html','utf8'));assert.equal(owner('link[rel=canonical]').attr('href'),'https://atlantisndt.com'+u.canonical,'Canonical chain');assert.ok(!/noindex/.test(owner('meta[name=robots]').attr('content')||''));}
const article=load(readFileSync('dist/blog/astm-e1444-radiographic-interpretation-guide/index.html','utf8'));assert.match(article('h1').text(),/Magnetic Particle/);assert.ok(!article('main').text().includes('E1444 establishes radiographic'));
console.log(`Editorial regression passed: ${checked} content upgrades, ERP topic/canonical mapping, one main/H1, valid internal links, form preservation, idempotency and corrected E1444 scope.`);
