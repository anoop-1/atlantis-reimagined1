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
    const pass=code===0&&fs.existsSync(html)&&fs.readFileSync(html,'utf8').includes('Published by Atlantis NDT');
    const result={site:site.slug,code,status:pass?'PASS':'FAIL',seconds:Math.round((Date.now()-start)/1000)};
    results.push(result);console.log(JSON.stringify(result));
    fs.writeFileSync(path.join(logDir,'build-results.json'),JSON.stringify(results,null,2));
  }
}
await Promise.all([worker(),worker()]);
if(results.some(r=>r.status!=='PASS'))process.exitCode=1;
