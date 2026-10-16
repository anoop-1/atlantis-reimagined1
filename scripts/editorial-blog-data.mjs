import cheerio from 'cheerio';
import {correctLegacyEditorialClaims} from './editorial-legacy-claims.mjs';
import {EDITORIAL_PAGE_UPGRADES as upgrades} from './editorial-upgrades.mjs'; // editorial-page-upgrades.json + generated practice tests
const cleanTitle=s=>String(s||'').replace(/\s*\[?202[78]\]?\s*(?:—\s*Decoded)?/g,' ').replace(/\s{2,}/g,' ').trim();
export function editorialBlogRecord(original){
 const b={...original}, path='/blog/'+b.slug, u=upgrades[path];
 b.title=cleanTitle(u?.title?.replace(/\s*\| Atlantis NDT$/,'')||b.title);
 b.metaDescription=cleanTitle(u?.description||b.metaDescription||b.snippet);
 b.snippet=b.metaDescription;
 if(u?.replace){
  // BlogDetail renders its own H1; published HTML retains the complete replacement.
  const $=cheerio.load(u.html);$('h1').remove();b.content=$('body').html();
  b.updatedAt=u.updatedAt||'2026-10-12T00:00:00Z';
  if(u.h1)b.h1=u.h1; // BlogDetail renders blog.h1 || blog.title, matching the published <h1>
  for(const k of u.dropFields||[])delete b[k]; // stale fields the rewrite replaces (e.g. an old quickAnswer box)
 }else if(b.content){
  const $=cheerio.load('<main>'+b.content+'</main>');
  correctLegacyEditorialClaims($,$('main'),path);b.content=$('main').html();
 }
 for(const key of ['date','createdAt'])if(Date.parse(b[key])>Date.parse('2026-10-12T23:59:59Z'))delete b[key];
 return b;
}
