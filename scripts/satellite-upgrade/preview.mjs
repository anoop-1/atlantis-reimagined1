import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../../backlink-sites');
const examples=['ndt-software-solutions','ndt-training-academy','oil-gas-inspection-guide'];
const types={'.html':'text/html','.css':'text/css','.js':'text/javascript','.json':'application/json','.svg':'image/svg+xml','.woff2':'font/woff2'};
examples.forEach((slug,index)=>{
  const base=path.join(root,slug,'out');
  http.createServer((req,res)=>{
    const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    let target=path.resolve(base,'.'+pathname);
    if(!target.startsWith(base+path.sep)&&target!==base){res.writeHead(403).end();return;}
    if(fs.existsSync(target)&&fs.statSync(target).isDirectory())target=path.join(target,'index.html');
    if(!fs.existsSync(target)&&fs.existsSync(target+'.html'))target+='.html';
    if(!fs.existsSync(target)){res.writeHead(404).end('Not found');return;}
    res.setHeader('Content-Type',types[path.extname(target)]||'application/octet-stream');
    fs.createReadStream(target).pipe(res);
  }).listen(43831+index,'127.0.0.1',()=>console.log(`${slug}: http://127.0.0.1:${43831+index}`));
});
