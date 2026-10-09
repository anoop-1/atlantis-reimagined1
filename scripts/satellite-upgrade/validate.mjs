import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { sites, products } from './catalog.mjs';
import { regions, industries, offerPlanning } from './planning.mjs';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const require = createRequire(path.join(root, 'backlink-sites/package.json'));
const ts = require('typescript');
const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(dir,e.name)) : [path.join(dir,e.name)]);
const runModule = (source, globals = {}) => {
  const output = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
  const context = { exports: {}, URL, URLSearchParams, ...globals };
  vm.runInNewContext(output, context);
  return context.exports;
};
let pageCount=0, internalLinks=0, contactChecks=0;
assert.equal(regions[0].priority,'Priority 1');
assert.equal(regions[0].countries[0],'United States');
assert.equal(industries.length,12);
assert.deepEqual(Object.keys(offerPlanning).sort(),Object.keys(products).sort());
for(const industry of industries){assert.ok(products[industry.decision]);assert.ok(products[industry.workflow]);}
const themeCss=fs.readFileSync(path.join(root,'scripts/satellite-upgrade/site.css'),'utf8');
const luminance=hex=>{const rgb=hex.match(/[a-f\d]{2}/gi).map(v=>parseInt(v,16)/255).map(v=>v<=0.04045?v/12.92:((v+0.055)/1.055)**2.4);return rgb[0]*0.2126+rgb[1]*0.7152+rgb[2]*0.0722;};
const contrast=(a,b)=>{const x=luminance(a),y=luminance(b);return (Math.max(x,y)+0.05)/(Math.min(x,y)+0.05);};
const palette=Object.fromEntries([...themeCss.matchAll(/--sat-([a-z]+):#([a-f\d]{6})/g)].map(m=>[m[1],m[2]]));
for(const ink of ['ink','muted','accent']) for(const paper of ['ffffff',palette.paper]) assert.ok(contrast(palette[ink],paper)>=4.5,`${ink}: insufficient text contrast`);
assert.ok(contrast('ffffff',palette.accent)>=4.5,'button text contrast');
assert.doesNotMatch(themeCss,/#006e66|#004f49|#9de2c8/,'remove previous teal palette');
assert.equal(sites.length,35);
assert.equal(new Set(sites.map(s=>s.slug)).size,35);
for (const site of sites) {
  const app = path.join(root,'backlink-sites',site.slug,'src/app');
  const data = runModule(fs.readFileSync(path.join(app,'_satellite-data.ts'),'utf8'));
  const layout = fs.readFileSync(path.join(app,'layout.tsx'),'utf8');
  const home = fs.readFileSync(path.join(app,'page.tsx'),'utf8');
  const catalogue = fs.readFileSync(path.join(app,'atlantis-products-services/page.tsx'),'utf8');
  assert.deepEqual(Array.from(data.offers, offer=>offer.key).sort(),Object.keys(products).sort(),`${site.slug}: every core offer is required`);
  assert.equal(data.offers[0].key,site.primary,`${site.slug}: retain relevant primary offer`);
  assert.match(home,/offers\.map/);
  assert.match(layout,/href="\/atlantis-products-services"/);
  assert.match(layout,/offers\.map/);
  assert.match(catalogue,/all-offers-v1/);
  assert.match(catalogue,/\/3d-scanning-services/);
  assert.match(catalogue,/\/ndt-connect/);
  assert.match(catalogue,/NDT training is not API training/);
  for(const route of ['regions-and-project-planning','industries-and-applications']) {
    const content=fs.readFileSync(path.join(app,route,'page.tsx'),'utf8');
    assert.match(content,/planning-v1/);
    assert.match(content,/offers\.map/);
    assert.match(content,/site\.questions\.map/);
    assert.match(content,/productUrl\(offer\)/);
    assert.match(content,/contactUrl\(offer/);
    assert.ok(layout.includes('href="/'+route+'"'));
    assert.ok(home.includes('href="/'+route+'"'));
    assert.ok(catalogue.includes('href="/'+route+'"'));
  }
  const planning=runModule(fs.readFileSync(path.join(app,'_planning-data.ts'),'utf8'));
  assert.equal(JSON.stringify(planning.regions),JSON.stringify(regions));
  assert.equal(JSON.stringify(planning.industries),JSON.stringify(industries));
  const planner=fs.readFileSync(path.join(app,'_project-planner.tsx'),'utf8');
  assert.match(planner,/use client/);assert.match(planner,/maxLength=\{60\}/);
  assert.doesNotMatch(planner,/fetch\(|localStorage|gtag\(/);
  assert.match(planner,/contactUrl\(offer, 'project-planner'\)/);
  assert.match(layout,/Published by Atlantis NDT/);
  assert.match(layout,/data-theme="blue-cream-v1"/);
  assert.equal(fs.readFileSync(path.join(app,'satellite.css'),'utf8'),fs.readFileSync(path.join(root,'scripts/satellite-upgrade/site.css'),'utf8').replace(/\r\n/g,'\n'),`${site.slug}: shared theme drift`);
  assert.doesNotMatch(layout,/independent educational|50\+ ASNT|Industry Partners/);
  assert.doesNotMatch(layout,/generate_lead|qualified_lead/);
  assert.equal(data.site.googleVerification !== '', ['ndt-knowledge-hub','petrochemical-ndt-hub','tank-inspection-resource'].includes(site.slug));
  for(const offer of data.offers){
    assert.ok(products[offer.key]);
    const product=new URL(data.productUrl(offer));
    assert.equal(product.pathname,products[offer.key].path);
    assert.equal(product.searchParams.get('satellite'),site.slug);
    for(const placement of ['hero','navigation','offer-card','page-end','footer','catalogue-'+offer.key,'project-planner','regional-'+offer.key,'industry-'+offer.key]){
      const url=new URL(data.contactUrl(offer,placement));
      assert.equal(url.origin,'https://atlantisndt.com');
      assert.equal(url.pathname,'/contact');
      assert.equal(url.searchParams.get('service'),offer.service);
      assert.equal(url.searchParams.get('satellite'),site.slug);
      assert.equal(url.searchParams.get('utm_medium'),'referral');
      assert.equal(url.searchParams.get('cta'),placement);
      contactChecks++;
    }
  }
  for(const guide of data.site.guides){assert.ok(fs.existsSync(path.join(app,guide.href,'page.tsx')),`${site.slug}${guide.href}`);internalLinks++;}
  const pages=walk(app).filter(f=>/[\\/]page\.tsx$/.test(f));
  const sitemap=runModule(fs.readFileSync(path.join(app,'sitemap.ts'),'utf8')).default();
  assert.equal(sitemap.length,pages.length);
  assert.equal(new Set(sitemap.map(s=>s.url)).size,pages.length);
  for(const file of pages){
    const text=fs.readFileSync(file,'utf8');
    assert.match(text,/alternates\s*:\s*\{\s*canonical:/,file);
    assert.doesNotMatch(text,/With 50\+ ASNT Level III certified professionals/,file);
    const ast=ts.createSourceFile(file,text,ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);
    assert.equal(ast.parseDiagnostics.length,0,`${file}: ${ast.parseDiagnostics.map(d=>d.messageText).join('; ')}`);
    pageCount++;
  }
}
const api=sites.find(s=>s.slug==='api-certification-guide');
assert.equal(api.primary,'inspection');assert.ok(!api.related.includes('training'));

// Attribution survives navigation, contains only bounded non-personal fields,
// and fails safely when browser storage is unavailable.
const source=fs.readFileSync(path.join(root,'src/lib/satellite-referral.ts'),'utf8');
const values=new Map();
const window={location:{search:'?satellite=ndt-software-solutions&satellite_path=%2Fbuyer-guide&cta=hero&email=private%40example.com'}};
const storage={getItem:k=>values.get(k),setItem:(k,v)=>values.set(k,v)};
const attribution=runModule(source,{window,sessionStorage:storage});
attribution.captureSatelliteReferral();
window.location.search='';
assert.equal(attribution.satelliteReferral().satellite_id,'ndt-software-solutions');
assert.equal(attribution.satelliteReferral().satellite_path,'/buyer-guide');
assert.ok(!JSON.stringify([...values]).includes('private'));
window.location.search='?satellite=ndt-training-academy&satellite_path=%2F%3Femail%3Dprivate%40example.com&cta=hero';
attribution.captureSatelliteReferral();assert.equal(attribution.satelliteReferral().satellite_path,'/');
const blocked=runModule(source,{window,sessionStorage:{getItem(){throw Error('blocked')},setItem(){throw Error('blocked')}}});
assert.doesNotThrow(()=>blocked.captureSatelliteReferral());assert.equal(Object.keys(blocked.satelliteReferral()).length,0);
console.log(JSON.stringify({status:'PASS',sites:sites.length,pages:pageCount,verifiedResourceLinks:internalLinks,contactRoutingChecks:contactChecks,attribution:'PASS'}));
