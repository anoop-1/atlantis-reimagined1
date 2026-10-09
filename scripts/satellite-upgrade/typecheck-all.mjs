import fs from 'node:fs';
import path from 'node:path';
import {spawn} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {sites} from './catalog.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
const selected=process.argv.slice(2);
const queue=sites.filter(s=>!selected.length||selected.includes(s.slug));
const results=[];
async function worker(){
  while(queue.length){
    const site=queue.shift();let output='';
    const code=await new Promise(resolve=>{
      const child=spawn(process.execPath,[path.join(root,'backlink-sites/node_modules/typescript/bin/tsc'),'--noEmit','--incremental','false'],{cwd:path.join(root,'backlink-sites',site.slug),windowsHide:true});
      child.stdout.on('data',data=>output+=data);child.stderr.on('data',data=>output+=data);
      child.on('error',error=>{output+=error.message;resolve(-1);});child.on('close',resolve);
    });
    const result={site:site.slug,status:code===0?'PASS':'FAIL',code,...(output?{output}:{})};
    results.push(result);console.log(JSON.stringify(result));
  }
}
await Promise.all([worker(),worker()]);
fs.mkdirSync(path.join(root,'backlink-sites/validation-results'),{recursive:true});
fs.writeFileSync(path.join(root,'backlink-sites/validation-results',selected.length?'selected-typecheck-results.json':'typecheck-results.json'),JSON.stringify(results,null,2));
if(results.some(r=>r.status!=='PASS'))process.exitCode=1;
