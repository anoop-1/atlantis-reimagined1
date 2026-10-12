import {readFileSync,writeFileSync,readdirSync,mkdirSync} from 'node:fs';
import {join,relative,dirname} from 'node:path';
import {createRequire} from 'node:module';
import {createHash} from 'node:crypto';
const require=createRequire(import.meta.url);const {load}=require('cheerio');
const root=process.cwd(),dist=join(root,'dist'),out=process.argv[2]||join(root,'../seo-evidence-2026-10-11/content-quality-baseline.json');
const walk=d=>readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(join(d,e.name)):e.name==='index.html'?[join(d,e.name)]:[]);
const rows=[],paragraphs=new Map(),fingerprints=new Map();
for(const file of walk(dist)){
 const path='/'+relative(dist,dirname(file)).replaceAll('\\','/');const $=load(readFileSync(file,'utf8'));const hasMain=$('main').length>0;const main=($('#root').length?$('#root'):$('body')).clone();main.find('script,style,nav,footer,header,form').remove();
 const text=main.text().replace(/\s+/g,' ').trim();const words=(text.match(/\S+/g)||[]).length;
 const canon=$('link[rel=canonical]').attr('href')||'';const canonical=canon?new URL(canon,'https://atlantisndt.com').pathname.replace(/\/$/,'')||'/':'';
 const paras=main.find('p').map((_,p)=>$(p).text().replace(/\s+/g,' ').trim()).get().filter(t=>t.split(' ').length>=25);
 for(const p of new Set(paras)){if(!paragraphs.has(p))paragraphs.set(p,[]);paragraphs.get(p).push(path)}
 const fp=createHash('sha256').update(text.toLowerCase().replace(/\d+/g,'#')).digest('hex');if(!fingerprints.has(fp))fingerprints.set(fp,[]);fingerprints.get(fp).push(path);
 rows.push({path,editorial:$('meta[name=atlantis-editorial-scope]').attr('content')||'',title:$('title').first().text(),description:$('meta[name=description]').attr('content')||'',h1:$('h1').first().text(),hasMain,words,paragraphs:paras.length,canonical,noindex:/noindex/i.test($('meta[name=robots]').attr('content')||''),headings:main.find('h2,h3').length,links:main.find('a[href]').length,fp,paras,flags:[...new Set((text.match(/\b(?:delve|game[- ]changer|cutting[- ]edge|unlock the power|ever[- ]evolving|seamlessly|unparalleled|revolutioniz\w*|world[- ]class|lorem ipsum|insert (?:text|name)|TODO:|TODO\s*\[)\b/gi)||[]).map(x=>x.toLowerCase()))]});
}
for(const r of rows){r.indexable=!r.noindex&&r.canonical===r.path;r.duplicatePages=fingerprints.get(r.fp).filter(p=>p!==r.path);const repeated=r.paras.filter(p=>paragraphs.get(p).length>=10);r.repeatedParagraphs=repeated.length;r.repeatedWords=repeated.reduce((n,p)=>n+p.split(' ').length,0);r.repeatedRatio=Math.round(100*r.repeatedWords/Math.max(1,r.words));r.shortContent=r.words<300;r.needsReview=r.indexable&&(r.words<300||r.repeatedRatio>=50||r.duplicatePages.length>0||r.flags.length>0);delete r.paras;delete r.fp;}
const duplicates=[...fingerprints.values()].filter(a=>a.length>1),common=[...paragraphs].filter(([p,a])=>a.length>=10).sort((a,b)=>b[1].length-a[1].length).map(([text,paths])=>({text,count:paths.length,paths}));
const summary={scanned:rows.length,indexable:rows.filter(x=>x.indexable).length,shortIndexable:rows.filter(x=>x.indexable&&x.shortContent).length,repeatIndexable:rows.filter(x=>x.indexable&&x.repeatedRatio>=50).length,languageFlags:rows.filter(x=>x.indexable&&x.flags.length).length,reviewCandidates:rows.filter(x=>x.needsReview).length,exactDuplicateGroups:duplicates.length};
mkdirSync(dirname(out),{recursive:true});writeFileSync(out,JSON.stringify({generatedAt:new Date().toISOString(),method:'Screening signals, not an editorial quality score. Short definitions and tools may be complete. Traffic must be joined separately; missing rows are unknown.',summary,rows,duplicates,common},null,2));console.log(JSON.stringify(summary,null,2));console.log('Top repeated paragraphs:',common.slice(0,12).map(x=>({count:x.count,text:x.text.slice(0,250)})));console.log('Short indexable:',rows.filter(x=>x.indexable&&x.shortContent).map(x=>({path:x.path,words:x.words})).slice(0,60));
