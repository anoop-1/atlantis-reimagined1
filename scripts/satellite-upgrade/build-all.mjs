import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { sites } from './catalog.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
const logDir=path.join(root,'backlink-sites/validation-results');
fs.mkdirSync(logDir,{recursive:true});
const selected=process.argv.slice(2);
const queue=sites.filter(s=>!selected.length||selected.includes(s.slug));
const results=[];
async function worker(){
  while(queue.length){
    const site=queue.shift();
    const cwd=path.join(root,'backlink-sites',site.slug);
    console.log(`Building ${site.slug}`);
    const log=fs.createWriteStream(path.join(logDir,`${site.slug}.log`));
    const start=Date.now();
    const code=await new Promise(resolve=>{
      const child=spawn(process.execPath,[path.join(root,'backlink-sites/node_modules/next/dist/bin/next'),'build'],{cwd,env:{...process.env,NEXT_TELEMETRY_DISABLED:'1',CI:'1',SATELLITE_QA:'1'},windowsHide:true});
      child.stdout.pipe(log);child.stderr.pipe(log);
      child.on('error',err=>{log.write(String(err));resolve(-1)});
      child.on('close',resolve);
    });
    log.end();
    const html=path.join(cwd,'out/index.html');
    const catalogue=path.join(cwd,'out/atlantis-products-services.html');
    const catalogueIndex=path.join(cwd,'out/atlantis-products-services/index.html');
    const catalogueFile=fs.existsSync(catalogue)?catalogue:catalogueIndex;
    const articleSource=path.join(root,'scripts/satellite-upgrade/articles',site.slug+'.json');
    let editorialReady=true, renderedWords=null;
    if(fs.existsSync(articleSource)){
      const article=JSON.parse(fs.readFileSync(articleSource,'utf8'));
      const articlePath=path.join(cwd,'out/guides',article.slug+'.html');
      const articleFile=fs.existsSync(articlePath)?articlePath:path.join(cwd,'out/guides',article.slug,'index.html');
      const compiled=fs.existsSync(articleFile)?fs.readFileSync(articleFile,'utf8'):'';
      const body=compiled.match(/data-article-body="true">([\s\S]*?)<\/div>/)?.[1]||'';
      const text=body.replace(/<[^>]*>/g,' ').replace(/&#x27;|&#39;|&apos;/g,"'").replace(/&amp;/g,'&').replace(/&[^;]+;/g,' ');
      renderedWords=(text.match(/\b[\w]+(?:['’-][\w]+)*\b/g)||[]).length;
      const sitemap=fs.existsSync(path.join(cwd,'out/sitemap.xml'))?fs.readFileSync(path.join(cwd,'out/sitemap.xml'),'utf8'):'';
      const hub=fs.existsSync(catalogueFile)?fs.readFileSync(catalogueFile,'utf8'):'';
      editorialReady=compiled.includes('data-editorial-release="editorial-v1"')&&renderedWords>=2000&&sitemap.includes('/guides/'+article.slug)&&!sitemap.includes('/atlantis-products-services')&&/<meta name="robots" content="noindex, follow"/.test(hub)&&!/<meta name="robots" content="noindex/.test(compiled);
    }
    const expansionReady=['regions-and-project-planning','industries-and-applications'].every(route=>{
      const flat=path.join(cwd,'out',route+'.html');
      const file=fs.existsSync(flat)?flat:path.join(cwd,'out',route,'index.html');
      return fs.existsSync(file)&&fs.readFileSync(file,'utf8').includes('planning-v1');
    });
    const pass=code===0&&editorialReady&&expansionReady&&fs.existsSync(html)&&fs.readFileSync(html,'utf8').includes('All seven core products and services')&&fs.existsSync(catalogueFile)&&fs.readFileSync(catalogueFile,'utf8').includes('all-offers-v1');
    const result={site:site.slug,code,status:pass?'PASS':'FAIL',editorialReady,renderedWords,seconds:Math.round((Date.now()-start)/1000)};
    results.push(result);console.log(JSON.stringify(result));
    fs.writeFileSync(path.join(logDir,selected.length?'selected-build-results.json':'build-results.json'),JSON.stringify(results,null,2));
  }
}
await Promise.all([worker(),worker()]);
if(results.some(r=>r.status!=='PASS'))process.exitCode=1;
