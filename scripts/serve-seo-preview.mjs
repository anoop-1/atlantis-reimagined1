import { createServer } from 'node:http';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { resolve, extname, sep } from 'node:path';
import { gzipSync } from 'node:zlib';
const root = resolve('dist');
const config = JSON.parse(readFileSync('vercel.json','utf8'));
const redirects = new Map(config.redirects.filter(r => !r.has && !/[:*()]/.test(r.source)).map(r => [r.source,r.destination]));
const types = { '.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.json':'application/json','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.xml':'application/xml','.woff2':'font/woff2' };
createServer((req,res) => {
  const url = new URL(req.url,'http://localhost');
  const path = decodeURIComponent(url.pathname);
  if (redirects.has(path)) { res.writeHead(301,{Location:redirects.get(path)}).end(); return; }
  let file = resolve(root,'.'+path);
  if (file !== root && !file.startsWith(root+sep)) { res.writeHead(400).end(); return; }
  if (existsSync(file) && statSync(file).isDirectory()) file = resolve(file,'index.html');
  if (!existsSync(file)) { res.writeHead(404,{'Content-Type':'text/html'}).end(readFileSync(resolve(root,'404.html'))); return; }
  const mime=types[extname(file)] || 'application/octet-stream';
  const compress=/gzip/.test(req.headers['accept-encoding'] || '') && /text|json|javascript|xml/.test(mime);
  const body=readFileSync(file);
  res.writeHead(200,{'Content-Type':mime,'Cache-Control':'no-store',...(compress?{'Content-Encoding':'gzip'}:{})}).end(compress?gzipSync(body):body);
}).listen(4175,'127.0.0.1',()=>console.log('SEO build preview: http://127.0.0.1:4175'));
