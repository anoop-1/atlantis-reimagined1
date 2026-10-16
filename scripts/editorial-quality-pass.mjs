// Build-time editorial cleanup, shared with readers through PublicationBoundary.
// Avoid word-count padding: remove unrelated marketing sections and retain subject matter.
import {readFileSync,existsSync} from 'node:fs';
import {erpEditorialContent} from './erp-editorial-content.mjs';
import {correctLegacyEditorialClaims} from './editorial-legacy-claims.mjs';
import {EDITORIAL_PAGE_UPGRADES as upgrades} from './editorial-upgrades.mjs'; // editorial-page-upgrades.json + generated practice tests
const interactivePaths=new Set(["/", "/about", "/contact", "/training", "/training-usa", "/training-me", "/training-india", "/consulting", "/consulting-usa", "/consulting-me", "/consulting-india", "/erp", "/erp/pricing", "/erp/apps", "/free-trial", "/ndt-erp-integration-matrix", "/ndt-inspection-software", "/inspection-management-software", "/practical-ndt", "/digital-twins", "/digital-twin-reporting", "/inspection-services", "/3d-scanning-services", "/ndt-training-online", "/consulting/ndt-consulting-level-iii", "/tools/ultrasonic-a-scan-simulator", "/tools", "/blog", "/case-studies"]);
const staleHeadings=/^(?:Atlantis NDT Integrated Stack|Atlantis NDT Stack Integration(?: in .*)?|Code Stack \+ Compliance|Delivery Model \+ Free Consultation|Built for any business that runs on operations|Questions buyers ask before they commit)$/;
const cleanText=s=>s.replaceAll('Free Quote 24h','Request a quote').replaceAll('office sits in Houston, Hyderabad, or a third location entirely','office is located').replaceAll('big Houston training labs','available practical-training facilities').replace(/\bseamlessly\s+/gi,'').replace(/\bworld-class\s+/gi,'').replace(/\bunparalleled\s+/gi,'').replace(/\bcutting[- ]edge\s+/gi,'').replace(/\bgame changer\b/gi,'useful tool').replace(/\brevolutionizing\b/gi,'changing');
export function applyEditorialQuality($,path){
 if(interactivePaths.has(path)||path.startsWith('/tools/')||path.startsWith('/calculators/'))return false;
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
 root.find('p').each((_,e)=>{const p=$(e),t=p.text().trim();if(/^Every examination carries its own evidence chain:/.test(t)){p.text('Agree personnel qualification, equipment checks, procedure revision and review responsibilities for the examination. Retain those records with the results and coverage limitations.');changed=true;}else if(t.startsWith('A: 4-20 weeks depending on team size')){p.text('Implementation time depends on the agreed configuration, data preparation, interfaces and acceptance tests. Confirm milestones and responsibilities in the proposal.');changed=true;}else if(t.includes('tailored quote within 24 hours')){p.text('Pricing depends on region, scope, delivery arrangements and team size. Request a proposal that identifies what is included, what needs configuration and the support provided.');changed=true;}else if(t.startsWith('Tell us the methods and levels you need and how many technicians.')){p.text('Tell us the methods, levels and number of technicians. Confirm the delivery format, practical arrangements and requirements of the employer’s written practice before booking.');changed=true;}if(/^Code stack: ASME B&PV/.test(t)||/^Atlantis NDT pairs field expertise with software:/.test(t)){p.remove();changed=true;}if(/^Atlantis NDT provides ASNT Level III consulting, NDT training to ASNT SNT-TC-1A,/.test(t)){p.html('<a href="/contact">Discuss your inspection requirements with Atlantis NDT</a>. Include the asset, method, location and documents you need reviewed.');changed=true;}});
 if(!/^\/(ar|es)\//.test(path)){
  const visit=node=>{for(const c of node.children||[]){if(c.type==='text'&&c.data){const next=cleanText(c.data);if(next!==c.data){c.data=next;changed=true;}}else if(!['script','style','code','pre'].includes(c.name))visit(c);}};visit(root[0]);
 }
 const erp=erpEditorialContent(path);
 const u=erp?{...erp,replace:true}:upgrades[path];
 if(u){
  if(u.canonical&&existsSync('dist'+u.canonical+'/index.html'))$('link[rel="canonical"]').attr('href','https://atlantisndt.com'+u.canonical);
  if(u.title)$('title').text(u.title);
  if(u.description)$('meta[name="description"]').attr('content',u.description);
  if(u.replace){root.children().not('script,style,header,footer,nav').remove();root.prepend('<main>'+u.html+'</main>');}
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
  $('script[type="application/ld+json"]').each((_,e)=>{const prune=n=>Array.isArray(n)?n.map(prune).filter(Boolean):n&&typeof n==='object'?(n['@type']==='FAQPage'?null:{...n,...(n['@graph']?{'@graph':prune(n['@graph'])}:{})}):n;try{const n=prune(JSON.parse($(e).html()));if(n)$(e).text(JSON.stringify(n));else $(e).remove();}catch{}});
  const title=$('title').text(),desc=$('meta[name="description"]').attr('content');$('meta[property="og:title"],meta[name="twitter:title"]').attr('content',title);if(desc)$('meta[property="og:description"],meta[name="twitter:description"]').attr('content',desc);
 }
 return changed;
}
