import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { sites,products } from './catalog.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
const queue=[...sites],results=[];
async function worker(){
  while(queue.length){
    const site=queue.shift();
    let result;
    try{
      const response=await fetch(site.domain+'/',{signal:AbortSignal.timeout(30000)});
      const html=await response.text();
      const contact=html.includes('contact?service='+products[site.primary].service);
      const ownership=html.includes('Published by Atlantis NDT');
      const canonical=html.includes(`rel="canonical" href="${site.domain}/"`);
      result={site:site.slug,status:response.status,upgraded:response.ok&&contact&&ownership&&canonical,contact,ownership,canonical};
    }catch(error){result={site:site.slug,upgraded:false,error:String(error.message)};}
    results.push(result); console.log(JSON.stringify(result));
  }
}
await Promise.all([worker(),worker(),worker()]);
const dir=path.join(root,'backlink-sites/validation-results');fs.mkdirSync(dir,{recursive:true});
fs.writeFileSync(path.join(dir,'live-results.json'),JSON.stringify({checkedAt:new Date().toISOString(),results},null,2));
console.log(JSON.stringify({verified:results.filter(x=>x.upgraded).length,total:results.length}));
if(results.some(x=>!x.upgraded))process.exitCode=1;
