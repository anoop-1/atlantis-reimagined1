import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import {sites,products} from './catalog.mjs';
import {primaryIntentOwners,sharedUtilityRoutes,commercialOverlapRoutes} from './search-policy.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
const dir=path.join(root,'scripts/satellite-upgrade/articles');
const partial=process.argv.includes('--partial');
const words=text=>text.match(/\b[\w]+(?:['’-][\w]+)*\b/g)||[];
const normalize=text=>words(text.toLowerCase()).join(' ');
const grams=text=>{const w=words(text.toLowerCase());return new Set(w.slice(0,-4).map((_,i)=>w.slice(i,i+5).join(' ')));};
const articles=[],paragraphs=new Map(),titles=new Set();
for(const site of sites){
  const file=path.join(dir,site.slug+'.json');
  if(!fs.existsSync(file)){assert.ok(partial,'Missing article: '+site.slug);continue;}
  const a=JSON.parse(fs.readFileSync(file,'utf8'));
  assert.equal(a.site,site.slug);
  assert.match(a.slug,/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  assert.ok(a.title&&a.description&&a.intent);
  assert.ok(!titles.has(a.title.toLowerCase()),'Duplicate title');titles.add(a.title.toLowerCase());
  assert.ok(products[a.primaryOffer]);
  assert.ok(a.relatedOffers.every(key=>products[key]));
  assert.ok(a.sections.length>=8,'Insufficient editorial structure: '+site.slug);
  const body=a.sections.flatMap(s=>[s.heading,...s.paragraphs,...(s.bullets||[])]).join(' ');
  const count=words(body).length;
  assert.ok(count>=2000,`${site.slug}: main body has only ${count} words`);
  assert.ok(count<=3000,`${site.slug}: check excessive length`);
  assert.doesNotMatch(a.title+' '+body,/\bAtlantis\b/i,site.slug+': promotional branding');
  assert.match(body,/hypothetical/i,site.slug+': example must be labeled');
  assert.ok(a.checklist.length>=4);
  assert.ok(a.references.length>=1);
  for(const source of a.references){const u=new URL(source.url);assert.equal(u.protocol,'https:');assert.ok(source.label);}
  for(const section of a.sections){
    assert.ok(section.heading&&section.paragraphs.length);
    for(const p of section.paragraphs){
      assert.equal(typeof p,'string');
      if(words(p).length<30)continue;
      const key=normalize(p);
      assert.ok(!paragraphs.has(key),`${site.slug}: repeated paragraph also used in ${paragraphs.get(key)}`);
      paragraphs.set(key,site.slug);
    }
  }
  articles.push({site:site.slug,title:a.title,path:'/guides/'+a.slug,intent:a.intent,primaryOffer:a.primaryOffer,mainIntentOwner:primaryIntentOwners[a.primaryOffer],wordCount:count,sectionCount:a.sections.length,references:a.references,body});
}
const similarity=[];
const fingerprints=articles.map(a=>grams(a.body));
for(let i=0;i<articles.length;i++)for(let j=i+1;j<articles.length;j++){
  const a=fingerprints[i],b=fingerprints[j];let common=0;
  for(const item of a)if(b.has(item))common++;
  const overlap=common/Math.max(1,Math.min(a.size,b.size));
  if(overlap>0.05)similarity.push({a:articles[i].site,b:articles[j].site,sharedFiveWordPhrasesPercent:Number((100*overlap).toFixed(2))});
  assert.ok(overlap<0.2,`Excessive text reuse: ${articles[i].site} / ${articles[j].site}`);
}
const report={checkedAt:new Date().toISOString(),complete:articles.length===35,wordCountDefinition:'Section headings, paragraphs and section bullets only; excludes metadata, navigation, CTA, reference list and end checklist.',articles:articles.map(({body,...rest})=>rest),similarity,searchPolicy:{primaryIntentOwners,sharedUtilityRoutes,commercialOverlapRoutes},limits:'Automated checks do not establish technical-expert review, semantic uniqueness, Google indexing or absence of query overlap.'};
fs.mkdirSync(path.join(root,'backlink-sites/validation-results'),{recursive:true});
fs.writeFileSync(path.join(root,'backlink-sites/validation-results/editorial-quality.json'),JSON.stringify(report,null,2));
console.log(JSON.stringify({status:'PASS',articles:articles.length,minWords:Math.min(...articles.map(a=>a.wordCount)),maxWords:Math.max(...articles.map(a=>a.wordCount)),totalWords:articles.reduce((n,a)=>n+a.wordCount,0),similarityPairs:similarity.length,complete:report.complete}));
