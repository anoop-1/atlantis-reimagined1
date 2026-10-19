// Build-time editorial cleanup, shared with readers through PublicationBoundary.
// Avoid word-count padding: remove unrelated marketing sections and retain subject matter.
import {readFileSync,existsSync} from 'node:fs';
import {erpEditorialContent} from './erp-editorial-content.mjs';
import {correctLegacyEditorialClaims} from './editorial-legacy-claims.mjs';
import {EDITORIAL_PAGE_UPGRADES as upgrades} from './editorial-upgrades.mjs'; // editorial-page-upgrades.json + generated practice tests
import {extractVisibleFaqs} from './seo-postpass.mjs';
import {INSPECTION_PATHS} from '../src/data/inspection-section/index.mjs'; // 2026-10-19: the inspection section renders its own React page (RFQ wizard, accordion), never the editorial copy
// 2026-10-16: an upgrade with faqSchema:true gets FAQPage JSON-LD rebuilt from the visible Q&A in its own html
// (<h3>Q1: …?</h3><p>…</p>, the format BlogDetail's buildFAQPageSchema also reads), after the prune below.
const editorialFaqSchema=(u,url)=>{const faqs=extractVisibleFaqs(u.html).map(f=>({q:f.q.replace(/^Q\d+:\s*/,''),a:f.a}));if(faqs.length<2)throw new Error('editorial-quality-pass: faqSchema set but fewer than two visible Q&A pairs for '+url);return JSON.stringify({'@context':'https://schema.org','@type':'FAQPage','@id':url+'#faq',mainEntity:faqs.map(f=>({'@type':'Question',name:f.q,acceptedAnswer:{'@type':'Answer',text:f.a}}))}).replaceAll('<','\\u003c');};
// Text comparison for the FAQ prune: pages are loaded with decodeEntities:false, JSON-LD holds decoded text
// and sometimes markup, so both sides drop tags and entities and keep only lower-case letters and digits.
const ENT={amp:'&',lt:'<',gt:'>',quot:'"',apos:"'",nbsp:' ',rsquo:"'",lsquo:"'",rdquo:'"',ldquo:'"',ndash:'-',mdash:'-',hellip:'...'};
const faqNorm=s=>String(s||'').replace(/<[^>]*>/g,' ').replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi,(m,c)=>c[0]==='#'?String.fromCodePoint(c[1]==='x'||c[1]==='X'?parseInt(c.slice(2),16):parseInt(c.slice(1),10)):(ENT[c.toLowerCase()]??' ')).toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g,' ').trim();
const INSPECTION_SECTION_PATHS=new Set(INSPECTION_PATHS);
const interactivePaths=new Set(["/", "/about", "/contact", "/training", "/training-usa", "/training-me", "/training-india", "/consulting", "/consulting-usa", "/consulting-me", "/consulting-india", "/erp", "/erp/pricing", "/erp/apps", "/free-trial", "/ndt-erp-integration-matrix", "/ndt-inspection-software", "/inspection-management-software", "/practical-ndt", "/digital-twins", "/digital-twin-reporting", "/inspection-services", "/3d-scanning-services", "/ndt-training-online", "/consulting/ndt-consulting-level-iii", "/tools/ultrasonic-a-scan-simulator", "/tools", "/snt-tc-1a-eligibility", "/ndt-training-faq", "/blog", "/case-studies"]);
const staleHeadings=/^(?:Atlantis NDT Integrated Stack|Atlantis NDT Stack Integration(?: in .*)?|Code Stack \+ Compliance|Delivery Model \+ Free Consultation|Built for any business that runs on operations|Questions buyers ask before they commit)$/;
const cleanText=s=>s.replaceAll('Free Quote 24h','Request a quote').replaceAll('office sits in Houston, Hyderabad, or a third location entirely','office is located').replaceAll('big Houston training labs','available practical-training facilities').replace(/\bseamlessly\s+/gi,'').replace(/\bworld-class\s+/gi,'').replace(/\bunparalleled\s+/gi,'').replace(/\bcutting[- ]edge\s+/gi,'').replace(/\bgame changer\b/gi,'useful tool').replace(/\brevolutionizing\b/gi,'changing');
export function applyEditorialQuality($,path){
 if(interactivePaths.has(path)||INSPECTION_SECTION_PATHS.has(path)||path.startsWith('/tools/')||path.startsWith('/calculators/'))return false;
 let changed=false;
 const oldTitle=$('title').text();
 const nextTitle=oldTitle.replace(/\s*[—|]\s*(?:Audit-Ready \+ ASNT Level III|(?:[A-Z]+ )?ASNT Level III \+ Code-Aligned|API Compliant \+ ASNT Level III|Atlantis NDT Level III Authored, Code-Aligned).*$/,' | Atlantis NDT').replace(/\s*[|+]\s*Free Quote 24h.*$/i,'').replace(/\[40% Faster\]\s*/,'').replace(/Digital Twins Slash Refinery Turnaround Time/,'Digital Twins for Refinery Turnaround Planning');
 if(nextTitle!==oldTitle){$('title').text(nextTitle);changed=true;}
 const root=$('#root').length?$('#root'):$('body');
 changed=correctLegacyEditorialClaims($,root,path)||changed;
 // The old build placed editorial sections outside main on some routes.
 // Consolidate only pages edited below; avoid touching interactive application routes.
 root.find('section[aria-label="Built for any business that runs on operations"],section[aria-label="Questions buyers ask before they commit"]').each((_,e)=>{if(path!=='/erp'){$(e).remove();changed=true;}});
 root.find('h2').each((_,e)=>{const h=$(e);if(!staleHeadings.test(h.text().trim())||path==='/erp')return;const parent=h.parent();if(parent.is('section')&&parent.find('h2').length===1)parent.remove();else{h.nextUntil('h1,h2,section,nav,footer').remove();h.remove();}changed=true;});
 // A copied standards catalogue is not evidence of scope or compliance.
 root.find('p').each((_,e)=>{const p=$(e),t=p.text().trim();if(/^Every examination carries its own evidence chain:/.test(t)){p.text('Agree personnel qualification, equipment checks, procedure revision and review responsibilities for the examination. Retain those records with the results and coverage limitations.');changed=true;}else if(t.startsWith('A: 4-20 weeks depending on team size')){p.text('Implementation time depends on the agreed configuration, data preparation, interfaces and acceptance tests. Confirm milestones and responsibilities in the proposal.');changed=true;}else if(t.includes('tailored quote within 24 hours')||/Free 30-min consultation (?:\+|→) (?:custom[- ]demo (?:with your actual workflow )?(?:\+|→) |custom cert-roadmap \+ )?tailored quote(?:\.| → phased implementation 4)|integration map, tailored quote\. No commitment|Free tailored quote on request/.test(t)){p.text('Pricing depends on region, scope, delivery arrangements and team size. Request a proposal that identifies what is included, what needs configuration and the support provided.');changed=true;}else if(t.startsWith('Tell us the methods and levels you need and how many technicians.')){p.text('Tell us the methods, levels and number of technicians. Confirm the delivery format, practical arrangements and requirements of the employer’s written practice before booking.');changed=true;}if(/^Code stack: ASME B&PV/.test(t)||/^Atlantis NDT pairs field expertise with software:/.test(t)){p.remove();changed=true;}if(/^Atlantis NDT provides ASNT Level III consulting, NDT training to ASNT SNT-TC-1A,/.test(t)){p.html('<a href="/contact">Discuss your inspection requirements with Atlantis NDT</a>. Include the asset, method, location and documents you need reviewed.');changed=true;}});
 if(!/^\/(ar|es)\//.test(path)){
  const visit=node=>{for(const c of node.children||[]){if(c.type==='text'&&c.data){const next=cleanText(c.data);if(next!==c.data){c.data=next;changed=true;}}else if(!['script','style','code','pre'].includes(c.name))visit(c);}};visit(root[0]);
 }
 const erp=erpEditorialContent(path);
 const u=erp?{...erp,replace:true}:upgrades[path];
 if(u){
  if(u.canonical&&existsSync('dist'+u.canonical+'/index.html'))$('link[rel="canonical"]').attr('href','https://atlantisndt.com'+u.canonical);
  if(u.title)$('title').text(u.title);
  if(u.description)$('meta[name="description"]').attr('content',u.description);
  if(u.replace){
   // 2026-10-18: keep an approved training-fee table (written by scripts/approved-pricing.mjs on allowlisted paths only) at the
   // upgrade's <!--training-fees-slot--> instead of discarding it with the old main; no slot or no table, no fees.
   const fees=root.find('section[data-approved-training-fees]').first();const feesHtml=fees.length?$.html(fees):'';
   root.children().not('script,style,header,footer,nav').remove();root.prepend('<main>'+String(u.html).split('<!--training-fees-slot-->').join(feesHtml)+'</main>');}
  else{root.find('[data-editorial-upgrade]').remove();const html='<section data-editorial-upgrade="2026-10-12">'+u.html+'</section>';root.find('main').length?root.find('main').first().append(html):root.append(html);}
  changed=true;
 }
 if(changed){
  // Keep all substantive content inside the reader's authoritative main. Chrome stays outside.
  const contents=root.children().not('script,style,header,footer,nav');let main=root.children('main').first();
  if(!main.length){root.prepend('<main></main>');main=root.children('main').first();}
  contents.each((_,e)=>{if(e!==main[0])main.append(e)});
  root.find('main main').each((_,e)=>$(e).replaceWith($(e).html()));
  $('meta[name="atlantis-editorial-quality"]').remove();$('head').append('<meta name="atlantis-editorial-quality" content="2026-10-12">');
  $('meta[name="atlantis-editorial-scope"]').remove();$('head').append('<meta name="atlantis-editorial-scope" content="'+(u?(u.replace?'rewrite':'addition'):'cleanup')+'">');
  // Removed questions must not survive invisibly in FAQ structured data.
  // 2026-10-17: prune per question, not per page. Until now any edit (even the one-sentence
  // boilerplate rewrite above, on ~2,100 pages) dropped every FAQPage on the page, so ~5,100
  // pages with visible Q&A shipped without FAQ schema. A Question survives when its question
  // text and the start of its answer are still in the page's visible text; a FAQPage with none
  // left is removed. An editorial faqSchema upgrade still replaces all existing FAQPage nodes.
  const vis=faqNorm((()=>{const c=root.clone();c.find('script,style,noscript,template').remove();return c.text();})());
  const shown=q=>{const name=faqNorm(q&&q.name);const ans=faqNorm(q&&q.acceptedAnswer&&q.acceptedAnswer.text).split(' ').slice(0,12).join(' ');return name.length>=8&&vis.includes(name)&&(!ans||vis.includes(ans));};
  const faqNode=n=>{if(u?.faqSchema)return null;const qs=[].concat(n.mainEntity||[]).filter(shown);return qs.length?{...n,mainEntity:qs}:null;};
  $('script[type="application/ld+json"]').each((_,e)=>{const prune=n=>Array.isArray(n)?n.map(prune).filter(Boolean):n&&typeof n==='object'?(n['@type']==='FAQPage'?faqNode(n):{...n,...(n['@graph']?{'@graph':prune(n['@graph'])}:{})}):n;try{const n=prune(JSON.parse($(e).html()));if(n)$(e).text(JSON.stringify(n).replaceAll('<','\\u003c'));else $(e).remove();}catch{}});
  if(u?.faqSchema)$('head').append('<script type="application/ld+json" data-sd="editorial-faq">'+editorialFaqSchema(u,'https://atlantisndt.com'+(u.canonical||path))+'</script>');
  const title=$('title').text(),desc=$('meta[name="description"]').attr('content');$('meta[property="og:title"],meta[name="twitter:title"]').attr('content',title);if(desc)$('meta[property="og:description"],meta[name="twitter:description"]').attr('content',desc);
 }
 return changed;
}
