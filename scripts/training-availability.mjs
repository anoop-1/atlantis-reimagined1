import { readFileSync } from 'node:fs';
import { showsTrainingAvailability } from '../src/data/training-availability.mjs';
const data = JSON.parse(readFileSync(new URL('../src/data/training-availability.json',import.meta.url)));
const hours = JSON.parse(readFileSync(new URL('../src/data/snt-tc-1a-hours.json',import.meta.url)));
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
export function applyTrainingAvailability(route) {
  if (route.path === '/resources/training-requirements-matrix' && typeof route.bodyContent === 'string') {
    const tables = [['classroom','Classroom training hours'],['ojt','Method experience hours']].map(([key,label]) => `<table><caption>SNT-TC-1A recommended ${label.toLowerCase()}</caption><thead><tr><th scope="col">Method</th><th scope="col">Level I</th><th scope="col">Level II (additional)</th><th scope="col">Level III eligibility</th></tr></thead><tbody>${Object.entries(hours[key]).map(([method,values]) => `<tr><th scope="row">${esc(method)}</th>${values.map(v=>`<td>${esc(v)}</td>`).join('')}</tr>`).join('')}</tbody></table>`).join('');
    const note = 'Level II hours shown are in addition to Level I. Level III eligibility depends on education and experience; it is not a fixed method-hour addition to this table. Check your employer’s written practice and the';
    const block = `<section data-snt-hours><h2>SNT-TC-1A hours by method and level</h2>${tables}<p>${note} <a href="https://certification.asnt.org/certification/asnt-ndt-level-iii">ASNT NDT Level III eligibility requirements</a>.</p></section>`;
    return {...route, bodyContent:route.bodyContent.replace(/<section\b[^>]*data-snt-hours[\s\S]*?<\/section>/g,'').replace('</main>',`${block}</main>`)};
  }
  if (!showsTrainingAvailability(route.path) || typeof route.bodyContent !== 'string') return route;
  const block=`<section data-training-availability><h2>${esc(data.heading)}</h2><p>${esc(data.intro)}</p><dl>${data.items.map(([h,p])=>`<dt>${esc(h)}</dt><dd>${esc(p)}</dd>`).join('')}</dl><p><a href="${esc(data.ctaHref)}">${esc(data.ctaLabel)}</a></p></section>`;
  let body=route.bodyContent.replace(/<section\b[^>]*data-training-availability[\s\S]*?<\/section>/g,'');
  body=body.replace('</main>',`${block}</main>`);
  return {...route,bodyContent:body};
}
