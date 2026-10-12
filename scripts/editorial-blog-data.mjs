import {readFileSync} from 'node:fs';
import cheerio from 'cheerio';
import {correctLegacyEditorialClaims} from './editorial-legacy-claims.mjs';
const upgrades=JSON.parse(readFileSync(new URL('../src/data/editorial-page-upgrades.json',import.meta.url),'utf8'));
const cleanTitle=s=>String(s||'').replace(/\s*\[?202[78]\]?\s*(?:—\s*Decoded)?/g,' ').replace(/\s{2,}/g,' ').trim();
export function editorialBlogRecord(original){
 const b={...original}, path='/blog/'+b.slug, u=upgrades[path];
 b.title=cleanTitle(u?.title?.replace(/\s*\| Atlantis NDT$/,'')||b.title);
 b.metaDescription=cleanTitle(u?.description||b.metaDescription||b.snippet);
 b.snippet=b.metaDescription;
 if(u?.replace){
  // BlogDetail renders its own H1; published HTML retains the complete replacement.
  const $=cheerio.load(u.html);$('h1').remove();b.content=$('body').html();
  b.updatedAt='2026-10-12T00:00:00Z';
 }else if(b.content){
  const $=cheerio.load('<main>'+b.content+'</main>');
  correctLegacyEditorialClaims($,$('main'),path);b.content=$('main').html();
 }
 for(const key of ['date','createdAt'])if(Date.parse(b[key])>Date.parse('2026-10-12T23:59:59Z'))delete b[key];
 return b;
}
