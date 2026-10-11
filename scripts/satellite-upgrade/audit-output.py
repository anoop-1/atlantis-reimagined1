"""Audit the actual exported HTML, not just source templates."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import json, collections

root=Path(__file__).resolve().parents[2]
content=json.loads((root/'scripts/satellite-upgrade/growth-content.json').read_text())
class Page(HTMLParser):
    def __init__(self,text):
        super().__init__();self.links=[];self.ids=set();self.h1=0;self.canonical=[];self.robots='';self.title='';self.in_title=False;self.schemas=[];self.schema=None;self.feed(text)
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if 'id' in a:self.ids.add(a['id'])
        if tag=='a' and 'href' in a:self.links.append(a['href'])
        if tag=='h1':self.h1+=1
        if tag=='title':self.in_title=True
        if tag=='link' and a.get('rel')=='canonical':self.canonical.append(a.get('href'))
        if tag=='meta' and a.get('name')=='robots':self.robots=a.get('content','')
        if tag=='script' and a.get('type')=='application/ld+json':self.schema=''
    def handle_data(self,data):
        if self.in_title:self.title+=data
        if self.schema is not None:self.schema+=data
    def handle_endtag(self,tag):
        if tag=='title':self.in_title=False
        if tag=='script' and self.schema is not None:
            try:self.schemas.append(json.loads(self.schema))
            except ValueError:self.schemas.append('INVALID')
            self.schema=None

errors=[];warnings=[];results=[];primary=set()
for item in content:
    slug=item['site'];site=root/'backlink-sites'/slug;out=site/'out';pages={}
    for source in (site/'src/app').rglob('page.tsx'):
        route='/'+source.parent.relative_to(site/'src/app').as_posix().replace('.','')
        file=out/('index.html' if route=='/' else route[1:]+'.html')
        if not file.exists():file=out/route[1:]/'index.html'
        if not file.exists():errors.append([slug,route,'missing export']);continue
        pages[route]=Page(file.read_text())
    titles=collections.defaultdict(list)
    for route,page in pages.items():
        if page.h1!=1:errors.append([slug,route,'H1 count',page.h1])
        if [c.rstrip('/') for c in page.canonical]!=[('https://'+slug+'.vercel.app'+route).rstrip('/')]:errors.append([slug,route,'canonical',page.canonical])
        if 'INVALID' in page.schemas:errors.append([slug,route,'invalid structured data'])
        titles[page.title].append(route)
        for href in page.links:
            u=urlsplit(href)
            if u.hostname=='atlantisndt.com':primary.add(u.path)
            if u.scheme and u.scheme not in ['http','https']:continue
            if u.netloc and u.netloc!=slug+'.vercel.app':continue
            target=unquote(u.path.rstrip('/')) or (route if not u.path else '/')
            if target not in pages:
                if not (out/target.lstrip('/')).exists():errors.append([slug,route,'broken local link',href])
            elif u.fragment and unquote(u.fragment) not in pages[target].ids: warnings.append([slug,route,'missing fragment',href])
    for title,routes in titles.items():
        if len(routes)>1:errors.append([slug,'duplicate title',title,routes])
    library=pages['/resource-library'];linked=set(urlsplit(h).path for h in library.links)
    for route in pages:
        if route not in ['/','/resource-library'] and route not in linked:errors.append([slug,route,'not linked from library'])
    guide=pages['/guides/'+item['slug']];tool=pages['/tools/'+item['slug']]
    if 'noindex' in guide.robots:errors.append([slug,'guide not indexable'])
    if 'noindex' not in tool.robots:errors.append([slug,'worksheet index policy'])
    if not guide.schemas:errors.append([slug,'guide schema missing'])
    sitemap=(out/'sitemap.xml').read_text()
    for route,page in pages.items():
        url='https://'+slug+'.vercel.app'+route
        included='<loc>'+url+'</loc>' in sitemap
        if included==('noindex' in page.robots):errors.append([slug,route,'sitemap/index mismatch'])
    results.append(dict(site=slug,pages=len(pages),libraryLinks=len(linked),guideSchemas=len(guide.schemas)))
report=dict(status='PASS' if not errors else 'FAIL',sites=len(results),pages=sum(s['pages'] for s in results),errors=errors,warnings=warnings,primaryPaths=sorted(primary),results=results)
dest=root/'backlink-sites/validation-results/growth-html-audit.json';dest.parent.mkdir(exist_ok=True);dest.write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps({k:report[k] for k in ['status','sites','pages','errors','warnings']},indent=2))
raise SystemExit(bool(errors))
