import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { sites } from './catalog.mjs';
import { shouldIndex } from './search-policy.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '../..');
const require = createRequire(path.join(root, 'backlink-sites/package.json'));
const ts = require('typescript');
const source = JSON.parse(fs.readFileSync(path.join(here, 'growth-content.json'), 'utf8'));
const targets = JSON.parse(fs.readFileSync(path.join(here, 'keyword-targets.json'), 'utf8'));
const walk = dir => fs.readdirSync(dir, {withFileTypes:true}).flatMap(entry => entry.isDirectory() ? walk(path.join(dir,entry.name)) : [path.join(dir,entry.name)]);
const write = (file, text) => { fs.mkdirSync(path.dirname(file), {recursive:true}); fs.writeFileSync(file, text); };
const template = name => fs.readFileSync(path.join(here,name+'.tsx.template'),'utf8');
const titleCase = value => value.replace(/-/g,' ').replace(/\b(ndt|api|paut|tofd|ut|rt|mt|pt|erp|asnt|iso)\b/gi,s=>s.toUpperCase()).replace(/^./,s=>s.toUpperCase());
const referral = (site, target) => {
  const url = new URL(target, 'https://atlantisndt.com');
  url.search = new URLSearchParams({satellite:site.slug,cta:'contextual-text',utm_source:site.slug,utm_medium:'referral',utm_campaign:'satellite-product-funnels',utm_content:'contextual-text'}).toString();
  return url.toString();
};

// Link existing descriptive phrases. Never insert keywords, alter quoted text,
// touch headings, or turn an existing link into a nested link.
function enrich(file, site) {
  const text = fs.readFileSync(file,'utf8');
  if (text.includes('sat-context-link') || text.includes('data-growth-release') || text.includes('_growth-data') || text.includes('_priority-article')) return 0;
  const ast = ts.createSourceFile(file,text,ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);
  const edits=[]; const used=new Set();
  function visit(node) {
    if (edits.length >= 2) return;
    if (ts.isJsxText(node)) {
      let parent=node.parent; let eligible=false;
      while(parent) {
        if(ts.isJsxElement(parent)) {
          const tag=parent.openingElement.tagName.getText(ast);
          if(/^(a|script|style|blockquote|code|pre|h[1-6]|button|nav)$/.test(tag)) return;
          if(/^(p|li|td|dd)$/.test(tag)) eligible=true;
        }
        parent=parent.parent;
      }
      if(!eligible)return;
      const raw=text.slice(node.pos,node.end);
      for(const target of targets) {
        if(used.has(target.path))continue;
        if(site.slug==='api-certification-guide' && target.category==='training')continue;
        for(const phrase of target.phrases) {
          const escaped=phrase.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
          const match=new RegExp('\\b'+escaped+'\\b','i').exec(raw);
          if(!match)continue;
          const start=node.pos+match.index;
          edits.push({start,end:start+match[0].length,text:`<a className="sat-context-link" href=${JSON.stringify(referral(site,target.path))}>${match[0]}</a>`});
          used.add(target.path);return;
        }
      }
    }
    ts.forEachChild(node,visit);
  }
  visit(ast);
  let updated=text;
  for(const edit of edits.sort((a,b)=>b.start-a.start))updated=updated.slice(0,edit.start)+edit.text+updated.slice(edit.end);
  if(edits.length)write(file,updated);
  return edits.length;
}

export function upgradeResources() {
  if(source.length!==sites.length || new Set(source.map(x=>x.site)).size!==sites.length)throw Error('Incomplete growth content');
  const results=[];
  for(const site of sites) {
    const growth=source.find(item=>item.site===site.slug);
    if(!growth || growth.fields.length!==5 || growth.decisions.length!==3)throw Error('Invalid content: '+site.slug);
    const app=path.join(root,'backlink-sites',site.slug,'src/app');
    write(path.join(app,'_growth-data.ts'), '// Generated from scripts/satellite-upgrade/growth-content.json.\nimport { site } from "./_satellite-data";\nexport const growth = '+JSON.stringify(growth,null,2)+';\nexport function referralUrl(path: string, placement: string) { const url = new URL(path, "https://atlantisndt.com"); url.search = new URLSearchParams({ satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: "referral", utm_campaign: "satellite-product-funnels", utm_content: placement }).toString(); return url.toString(); }\n');
    write(path.join(app,'guides',growth.slug,'page.tsx'),template('growth-guide'));
    write(path.join(app,'tools',growth.slug,'page.tsx'),template('growth-tool-page'));
    write(path.join(app,'_working-brief.tsx'),template('working-brief'));
    write(path.join(app,'resource-library/page.tsx'),template('library-page'));
    write(path.join(app,'_resource-library.tsx'),template('library'));
    let linked=0;
    const resources=walk(app).filter(file=>file.endsWith('/page.tsx')).map(file=>{
      const route='/'+path.relative(app,path.dirname(file)).split(path.sep).join('/');
      if(!['/','/resource-library','/atlantis-products-services','/regions-and-project-planning','/industries-and-applications'].includes(route)){ enrich(file,site); linked+=(fs.readFileSync(file,'utf8').match(/className="sat-context-link"/g)||[]).length; }
      let title;
      if(route==='/guides/'+growth.slug)title=growth.title;
      else if(route==='/tools/'+growth.slug)title=growth.title+' — Working brief';
      else {
        const text=fs.readFileSync(file,'utf8');
        const ast=ts.createSourceFile(file,text,ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);
        function titleVisitor(node) { if(ts.isPropertyAssignment(node)&&node.name.getText(ast)==='title'&&ts.isStringLiteral(node.initializer)&&!title)title=node.initializer.text; ts.forEachChild(node,titleVisitor); }
        titleVisitor(ast);
        if(route.startsWith('/guides/')&&!title){const old=JSON.parse(fs.readFileSync(path.join(here,'articles',site.slug+'.json'),'utf8'));if(route==='/guides/'+old.slug)title=old.title;}
      }
      const group=route.startsWith('/tools/')?'Working tools':route.startsWith('/guides/')?'Practical guides':route.startsWith('/blog/')?'Articles':route.startsWith('/comparisons/')?'Comparisons':'Subject resources';
      return {href:route,title:title||titleCase(route.split('/').pop()||site.name),group};
    }).filter(item=>!['/','/resource-library'].includes(item.href)).sort((a,b)=>a.group.localeCompare(b.group)||a.title.localeCompare(b.title));
    write(path.join(app,'_resource-index.ts'),'// Generated from all existing page routes; no historic URL is removed.\nexport const resources = '+JSON.stringify(resources,null,2)+';\n');
    const routes=['/','/resource-library',...resources.map(x=>x.href)].filter(route=>shouldIndex(site.slug,route));
    write(path.join(app,'sitemap.ts'),"import type { MetadataRoute } from 'next';\nconst routes = "+JSON.stringify(routes.sort(),null,2)+";\nexport default function sitemap(): MetadataRoute.Sitemap { return routes.map(route => ({ url: "+JSON.stringify(site.domain)+" + route })); }\n");
    results.push({site:site.slug,newGuide:'/guides/'+growth.slug,worksheet:'/tools/'+growth.slug,resources:resources.length,contextualLinks:linked,primaryLinks:growth.links});
  }
  write(path.join(here,'growth-inventory.json'),JSON.stringify(results,null,2)+'\n');
  console.log(JSON.stringify({growthSites:results.length,newPages:results.length*3,contextualLinks:results.reduce((n,r)=>n+r.contextualLinks,0)}));
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url))upgradeResources();
