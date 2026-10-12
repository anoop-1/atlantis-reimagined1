// Restore the product knowledge already used by the React pages to published HTML.
// Geography is a scoping detail, not evidence of a local office or customer approval.
import {loadKnowledgeTs} from './route-reconcile.mjs';
const [{moduleKnowledge:modules},{industryKnowledge:industries},{appKnowledge:apps}]=await Promise.all([
 loadKnowledgeTs('data/erp-module-knowledge.ts'),loadKnowledgeTs('data/erp-industry-knowledge.ts'),loadKnowledgeTs('data/erp-app-knowledge.ts')
]);
const keys=o=>Object.keys(o).sort((a,b)=>b.length-a.length);
const match=(s,o)=>keys(o).find(k=>s===k||s.startsWith(k+'-'));
const esc=s=>String(s||'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const label=s=>s.split('-').map(w=>w[0].toUpperCase()+w.slice(1)).join(' ');
const paragraphs=s=>String(s||'').split(/(?<=[.!?])\s+(?=[A-Z])/).reduce((a,s)=>{if(!a.length||a.at(-1).split(/\s+/).length>65)a.push(s);else a[a.length-1]+=' '+s;return a;},[]).map(p=>'<p>'+esc(p)+'</p>').join('');
export function erpEditorialContent(path){
 let rest,mod,ind,city='',app;
 if(/^\/erp\/(cmms|crm)-for-/.test(path)){rest=path.slice(5);app=rest.startsWith('cmms-')?'cmms':'crm';ind=match(rest.slice(app.length+5),industries);if(!ind)return null;}
 else
 if(path.startsWith('/erp-modules/')){rest=path.slice(13);mod=match(rest,modules);if(!mod)return null;rest=rest.slice(mod.length).replace(/^-/,'');if(rest.startsWith('for-')){ind=match(rest.slice(4),industries);if(!ind)return null;}else city=rest;}
 else if(path.startsWith('/erp-industries/')){rest=path.slice(16);ind=match(rest,industries);if(!ind)return null;city=rest.slice(ind.length).replace(/^-/,'');}
 else if(path.startsWith('/erp/')){rest=path.slice(5);mod=match(rest,modules);if(!mod)return null;rest=rest.slice(mod.length+1);ind=match(rest,industries);if(!ind)return null;city=rest.slice(ind.length).replace(/^-/,'');}
 else return null;
 const k=app?apps[app]:mod?modules[mod]:industries[ind],sector=ind?industries[ind]:null;
 const name=app?app.toUpperCase():mod?label(mod):label(ind),where=city?' in '+label(city):'',forSector=(mod||app)&&ind?' for '+label(ind):'';
 const heading=name+forSector+where;
 const caps=(k.capabilities||[]).slice(0,8);
 let html='<h1>'+esc(heading)+'</h1>'+paragraphs(k.overview);
 if(city)html+='<section><h2>Scope the implementation'+esc(where)+'</h2><p>Use your own report templates, personnel records and equipment register to evaluate the proposed configuration. Confirm the contracting entity, hosting location, support hours, data access and any onsite work in the proposal. Location in this guide does not establish a local office, customer endorsement or pre-approved configuration.</p></section>';
 if((mod||app)&&ind)html+='<section><h2>The '+esc(label(ind).toLowerCase())+' workflow</h2>'+paragraphs(sector.ndtAngle)+'<p>Keep the module scope separate from sector-specific configuration. Demonstrate the required records and approval steps using a representative job before agreeing the implementation.</p></section>';
 html+='<section><h2>Records and controls to evaluate</h2><ul>'+caps.map(s=>'<li>'+esc(s)+'</li>').join('')+'</ul></section>';
 html+='<section><h2>Follow the work from start to finish</h2>'+paragraphs(k.workflow)+'</section>';
 html+='<section><h2>Check the evidence, permissions and handover</h2>'+paragraphs(k.ndtAngle)+'<p>During the trial, ask one user to create a record and another to review it. Make a correction, check which version a customer receives, and export the final record with its references. Record any manual steps or configuration gaps in the acceptance checklist.</p><p>Software organises evidence; it does not grant personnel certification, laboratory accreditation or customer approval. Confirm the requirements that apply to your work with the responsible technical or quality manager.</p></section>';
 const faqs=(k.faqs||[]).filter(f=>Array.isArray(f)&&f[0]&&f[1]);
 if(faqs.length)html+='<section><h2>Questions about '+esc(name.toLowerCase())+'</h2>'+faqs.map(([q,a])=>'<h3>'+esc(q)+'</h3>'+paragraphs(a)).join('')+'</section>';
 html+='<section><h2>Choose the next step</h2><p><a href="/free-trial">Request the 14-day ERP trial</a> to work through a representative job. Use the <a href="/ndt-erp-integration-matrix">integration scoping guide</a> for external systems: a REST API connection needs an agreed data mapping, implementation and test plan.</p><p>'+(mod?'<a href="/erp-modules/'+mod+'">'+esc(name)+' overview</a> · ':'')+(ind?'<a href="/erp-industries/'+ind+'">'+esc(label(ind))+' guide</a> · ':'')+'<a href="/erp/pricing">Current plans</a> · <a href="/contact?service=erp">Discuss your workflow</a></p></section>';
 const canonical=city?(mod?(ind?'/erp-modules/'+mod+'-for-'+ind:'/erp-modules/'+mod):'/erp-industries/'+ind):path;
 return {html,canonical,title:heading+' | Atlantis NDT',description:'Evaluate '+name.toLowerCase()+forSector.toLowerCase()+where+' with a real inspection job. Review records, approval steps, configuration limits and the ERP trial.'};
}
