// Narrow corrections to an identifiable, repeated legacy article template.
// Preserve routes and topic-specific material. This is not a standards review.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,'../..');
const records=JSON.parse(fs.readFileSync(path.join(here,'growth-content.json'),'utf8'));
const walk=dir=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);
const escape=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const changed=[];
for(const item of records){
  for(const file of walk(path.join(root,'backlink-sites',item.site,'src/app')).filter(f=>f.endsWith('/page.tsx'))){
    let text=fs.readFileSync(file,'utf8');const original=text;
    // These pages share one generated template and have no supplied author evidence.
    if(text.includes('our team uses on day one')||text.includes('data-legacy-reviewed="growth-v1"')){
      text=text.replace(/\s*authors:\s*\[[^\]]*\],?/g,'');
      text=text.replace(/\s*"author":\s*\{\s*"@type":\s*"Person",\s*"name":\s*"[^"]*"\s*\},?/g,'');
      text=text.replace(/("publisher":\s*\{\s*"@type":\s*"Organization",\s*"name":\s*)"[^"]*"/, '$1"Atlantis NDT"');
      text=text.replace(/<p className="text-sm text-gray-500 mb-8">By [\s\S]*?<\/p>/,'<p className="text-sm text-gray-500 mb-8" data-legacy-reviewed="growth-v1">Published by Atlantis NDT. Educational planning guidance; confirm technical requirements with the responsible authority.</p>');
      text=text.replace(/<p>Below is the working matrix our team uses on day one[\s\S]*?<\/p>/,'<p>Use the following questions to prepare a technical review. They do not select a method, authorize work or establish acceptance.</p>');
      text=text.replace(/<table className="prose-table">[\s\S]*?<\/table>/,`<table className="prose-table"><thead><tr><th>Decision area</th><th>Question for the responsible reviewer</th></tr></thead><tbody>${item.decisions.map(d=>'<tr><th>'+escape(d.label)+'</th><td>'+escape(d.question)+'</td></tr>').join('')}</tbody></table>`);
      text=text.replace(/<p>The framing in this guide assumes[\s\S]*?<\/p>/,'<p>Use the current governing documents, customer requirements and approved procedures. The suggestions in this article are discussion prompts, not clause interpretations or a record of field validation.</p>');
      text=text.replace(/<h3>Pattern A: prove the absence of a known mechanism<\/h3>\s*<p>[\s\S]*?<\/p>/,'<h3>Define the examination question</h3><p>State the condition of interest and the evidence required by the technical reviewer. An examination with no reported indication does not prove the absence of every possible condition. Record coverage and limitations alongside the result.</p>');
      text=text.replace(/<h3>Pattern B: find what you are not expecting<\/h3>\s*<p>[\s\S]*?<\/p>/,'<h3>Define follow-up for uncertain findings</h3><p>Agree how uncertain observations and coverage limitations will be reviewed. Screening results may require further examination or assessment; the appropriate response depends on the application and governing programme.</p>');
      text=text.replace(/<h3>Pattern C: requalify after a repair<\/h3>\s*<p>[\s\S]*?<\/p>/,'<h3>Connect repair and examination requirements</h3><p>Identify the approved repair documents, required examinations and acceptance responsibilities. The applicable programme and authorized reviewer determine what evidence is needed before the next decision.</p>');
      text=text.replace(/<p>The last bullet is where most programs fail an audit\.[\s\S]*?<\/p>/,'<p>Ask the quality owner which records and approvals the applicable programme requires. A short rationale can help explain a decision, but it is not a substitute for required evidence or review.</p>');
      text=text.replace(/<p>It depends on how much of the work was pre-planned\.[\s\S]*?<\/p>/,'<p>Schedule impact depends on preparation, access, examination scope, findings and review availability. Request a project-specific estimate and make the unresolved dependencies visible; this guide provides no universal duration.</p>');
      text=text.replace(/<p>Best practice is a Level III[\s\S]*?<\/p>/,'<p>The governing programme assigns technical review, acceptance and operating decisions. Record those roles explicitly; NDT interpretation and engineering assessment can require different authorities.</p>');
      text=text.replace(/<p>The data you keep, how long you keep it,[\s\S]*?<\/p>/,'<p>Regulatory and customer requirements can affect technical scope, qualifications, approvals and records. Confirm the actual requirements with the responsible programme owner before work begins.</p>');
      text=text.replace(/A worn or unverified calibration block is the single most common reason high-quality equipment generates poor data\./g,'Reference standards and equipment checks must satisfy the applicable procedure; their status should be documented rather than assumed.');
      text=text.replace(/<p>Three behaviours we see at high-performing operators[\s\S]*?<\/p>/,'<p>Consider a documented decision rationale, appropriate technical review and an open-item register. The programme owner should define when these controls apply and how their effectiveness will be checked. No comparative performance result is claimed here.</p>');
      text=text.replace(/<p>What we do not see at high-performing operators[\s\S]*?<\/p>/,'<p>Define the required review and escalation arrangements in the approved process. Informal cross-checking does not replace assigned technical authority.</p>');
      text=text.replace(/<p>The best [^<]*?documentation packages we have seen share three patterns:<\/p>/,'<p>Useful documentation questions to discuss with the receiving reviewer include:</p>');
      text=text.replace(/Auditors, regulators, and new hires all read the narrative first\./g,'The narrative helps a receiving reviewer understand the purpose of the examination.');
      text=text.replace(/This is the single most useful artifact for a turnaround manager\./g,'The register should make unresolved questions and their owners visible.');
      text=text.replace(/Common failure modes<\/strong> we see/g,'Common planning gaps</strong> to consider');
      text=text.replace(/We walk through three patterns we see repeatedly\./g,'The following prompts distinguish different review questions.');
    }
    // Do not send API exam-preparation intent to an Atlantis training offer.
    text=text.replace(/<a([^>]*?)href="https:\/\/atlantisndt\.com\/(?:api-(?:510|570|653)-training|api-training)(?:\?[^"]*)?"([^>]*)>[\s\S]*?<\/a>/g,'<a$1href="https://www.api.org/products-and-services/individual-certification-programs"$2>API certification programme information</a>');
    if(text!==original){fs.writeFileSync(file,text);changed.push(path.relative(root,file));}
  }
}
console.log(JSON.stringify({legacyPagesCorrected:changed.length}));
