import {readFileSync} from 'node:fs';
import {renderErpEnquiryHtml} from './erp-rebuild-route.mjs';
const copy = JSON.parse(readFileSync(new URL('../src/data/buyer-evaluation.json', import.meta.url)));
const esc = s => String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
const link = ([href,label]) => `<a href="${esc(href)}">${esc(label)}</a>`;
export function applyBuyerEvaluation(route) {
  const p = copy[route.path]; if (!p) return route;
  const sections = p.sections.map(s => `<section><h2>${esc(s.heading)}</h2>${(s.paragraphs || []).map(t=>`<p>${esc(t)}</p>`).join('')}${s.items ? `<ul>${s.items.map(t=>`<li>${esc(t)}</li>`).join('')}</ul>` : ''}${s.rows ? `<table><caption>${esc(s.heading)}</caption><thead><tr>${s.columns.map(c=>`<th scope="col">${esc(c)}</th>`).join('')}</tr></thead><tbody>${s.rows.map(r=>`<tr>${r.map((c,i)=>i ? `<td>${esc(c)}</td>` : `<th scope="row">${esc(c)}</th>`).join('')}</tr>`).join('')}</tbody></table>` : ''}${s.links ? `<p>${s.links.map(link).join(' · ')}</p>` : ''}</section>`).join('\n');
  const form = route.path === '/free-trial' ? renderErpEnquiryHtml({trial:true}) : '';
  return {...route, title:p.title, ogTitle:p.title, description:p.description, ogDesc:p.description, canonical:`https://atlantisndt.com${route.path}`, bodyContent:`<header><nav>${link(['/','Home'])} · ${link(['/erp','ERP'])} · ${link(['/contact?service=erp','Contact'])}</nav></header><main data-buyer-evaluation><h1>${esc(p.h1)}</h1><p>${esc(p.intro)}</p><p>${link([p.cta.href,p.cta.label])} · ${link([p.secondary.href,p.secondary.label])}</p>${sections}<section><h2>Frequently asked questions</h2>${p.faq.map(f=>`<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join('')}</section>${form}</main>`, structuredData:{'@context':'https://schema.org','@type':'FAQPage',mainEntity:p.faq.map(f=>({'@type':'Question',name:f.q,acceptedAnswer:{'@type':'Answer',text:f.a}}))}};
}
