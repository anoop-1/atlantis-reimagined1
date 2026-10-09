import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { sites,products } from './catalog.mjs';
import { sharedUtilityRoutes } from './search-policy.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
const queue=[...sites],results=[];
const requireTheme=process.argv.includes('--theme');
const requireExpansion=process.argv.includes('--expansion');
const requireEditorial=process.argv.includes('--editorial');
async function worker(){
  while(queue.length){
    const site=queue.shift();
    let result;
    try{
      const response=await fetch(site.domain+'/',{signal:AbortSignal.timeout(30000)});
      const html=await response.text();
      const contact=html.includes('contact?service='+products[site.primary].service);
      const ownership=html.includes('Published by Atlantis NDT')||html.includes('Owned and published by Atlantis NDT');
      // Next normalizes a root canonical by dropping its trailing slash.
      const canonical=html.includes(`rel="canonical" href="${site.domain}/"`)||html.includes(`rel="canonical" href="${site.domain}"`);
      const missingOffers=Object.values(products).filter(p=>!html.includes('contact?service='+p.service)||!html.includes('https://atlantisndt.com'+p.path+'?')).map(p=>p.name);
      const catalogueResponse=await fetch(site.domain+'/atlantis-products-services',{signal:AbortSignal.timeout(30000)});
      const catalogue=await catalogueResponse.text();
      const catalogueReady=catalogueResponse.ok&&catalogue.includes('all-offers-v1')&&Object.values(products).every(p=>catalogue.includes('contact?service='+p.service))&&catalogue.includes('/3d-scanning-services')&&catalogue.includes('/ndt-connect');
      const sitemapResponse=await fetch(site.domain+'/sitemap.xml',{signal:AbortSignal.timeout(30000)});
      const sitemap=await sitemapResponse.text();
      const editorialPolicy=html.includes('data-search-policy="editorial-v1"');
      const sitemapReady=sitemapResponse.ok&&(editorialPolicy?sharedUtilityRoutes.every(route=>!sitemap.includes(site.domain+route)):sitemap.includes(site.domain+'/atlantis-products-services'));
      const themeReady=html.includes('data-theme="blue-cream-v1"');
      let expansionReady=true;
      if(requireExpansion) for(const route of ['regions-and-project-planning','industries-and-applications']) {
        const page=await fetch(site.domain+'/'+route,{signal:AbortSignal.timeout(30000)});
        const content=await page.text();
        expansionReady=expansionReady&&page.ok&&content.includes('planning-v1')&&content.includes('data-theme="blue-cream-v1"')&&(editorialPolicy?!sitemap.includes(site.domain+'/'+route):sitemap.includes(site.domain+'/'+route))&&Object.values(products).every(p=>content.includes('contact?service='+p.service));
      }
      let editorialReady=true;
      if(requireEditorial){
        const article=JSON.parse(fs.readFileSync(path.join(root,'scripts/satellite-upgrade/articles',site.slug+'.json'),'utf8'));
        const articleUrl=site.domain+'/guides/'+article.slug;
        const page=await fetch(articleUrl,{signal:AbortSignal.timeout(30000)});
        const content=await page.text();
        editorialReady=editorialPolicy&&page.ok&&content.includes('data-editorial-release="editorial-v1"')&&content.includes('data-article-body="true"')&&sitemap.includes(articleUrl)&&content.includes(`rel="canonical" href="${articleUrl}"`)&&!/name="robots" content="[^"]*noindex/.test(content)&&/name="robots" content="[^"]*noindex/.test(catalogue);
      }
      result={site:site.slug,status:response.status,upgraded:response.ok&&contact&&ownership&&canonical&&!missingOffers.length&&catalogueReady&&sitemapReady&&(!requireTheme||themeReady)&&expansionReady&&editorialReady,contact,ownership,canonical,missingOffers,catalogueReady,sitemapReady,themeReady,...(requireExpansion?{expansionReady}:{}),...(requireEditorial?{editorialPolicy,editorialReady}:{})};
    }catch(error){result={site:site.slug,upgraded:false,error:String(error.message)};}
    results.push(result); console.log(JSON.stringify(result));
  }
}
await Promise.all([worker(),worker(),worker()]);
const dir=path.join(root,'backlink-sites/validation-results');fs.mkdirSync(dir,{recursive:true});
fs.writeFileSync(path.join(dir,'live-results.json'),JSON.stringify({checkedAt:new Date().toISOString(),results},null,2));
console.log(JSON.stringify({verified:results.filter(x=>x.upgraded).length,total:results.length}));
if(results.some(x=>!x.upgraded))process.exitCode=1;
