import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { sites } from './catalog.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../../backlink-sites');
const previewRoot=process.env.SATELLITE_PREVIEW_ROOT;
const types={'.html':'text/html','.css':'text/css','.js':'text/javascript','.json':'application/json','.svg':'image/svg+xml','.woff2':'font/woff2','.txt':'text/plain','.xml':'application/xml'};
sites.forEach((site,index)=>{
  const base=previewRoot?path.join(previewRoot,site.slug):path.join(root,site.slug,'out');
  http.createServer((req,res)=>{
    let pathname;try{pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);}catch{res.writeHead(400).end();return;}
    let target=path.resolve(base,'.'+pathname);
    if(!target.startsWith(base+path.sep)&&target!==base){res.writeHead(403).end();return;}
    if(fs.existsSync(target)&&fs.statSync(target).isDirectory())target=path.join(target,'index.html');
    if(!fs.existsSync(target)&&fs.existsSync(target+'.html'))target+='.html';
    if(!fs.existsSync(target)){res.writeHead(404).end('Not found');return;}
    res.setHeader('Content-Type',types[path.extname(target)]||'application/octet-stream');fs.createReadStream(target).pipe(res);
  }).listen(43900+index,'127.0.0.1');
});
http.createServer((req,res)=>{res.setHeader('Content-Type','text/html');if(new URL(req.url,'http://localhost').pathname==='/review'){res.end(fs.readFileSync(path.join(root,'../scripts/satellite-upgrade/review.html'),'utf8'));return;}res.end('<!doctype html><html lang="en"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Atlantis satellite previews</title><style>body{font:18px/1.7 system-ui;max-width:800px;margin:40px auto;padding:20px;background:#faf7ef;color:#123568}a{color:#1756a9}li{margin:.6rem 0}</style><h1>Atlantis satellite previews</h1><p>Local review only. New guides and working briefs are linked from every homepage.</p><ol>'+sites.map((s,i)=>'<li><a href="http://127.0.0.1:'+(43900+i)+'">'+s.name+'</a></li>').join('')+'</ol></html>');}).listen(43840,'127.0.0.1',()=>console.log('All 35 previews: http://127.0.0.1:43840'));
