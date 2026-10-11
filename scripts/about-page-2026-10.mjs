// /about crawler body (2026-10-11, owner decision: state only what Atlantis can evidence).
//
// One source for both layers: src/data/about-2026-10.json is also rendered by the React
// page (src/pages/About.tsx). The previous crawler body claimed five "global hubs"
// (Houston, Hyderabad, Dubai, Singapore, London), a mobilisation-hours promise, staff-hours,
// audit-finding and on-time percentage figures, and a "Customer Outcomes" section,
// none of which could be evidenced.
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const HERE = dirname(fileURLToPath(import.meta.url));
export const ABOUT = JSON.parse(readFileSync(join(HERE, '..', 'src', 'data', 'about-2026-10.json'), 'utf8'));

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function aboutBodyHtml() {
  const a = ABOUT;
  const li = (items, fn) => `<ul>${items.map(fn).join('')}</ul>`;
  return `  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/about">About</a><a href="/consulting">Consulting</a><a href="/training">Training</a><a href="/erp">ERP</a><a href="/digital-twins">Digital Twins</a><a href="/contact">Free Consultation</a></nav></header>
  <main>
    <h1>${esc(a.h1)}</h1>
    <p>${esc(a.intro)}</p>
    <h2>${esc(a.storyHeading)}</h2>
    ${a.story.map((p) => `<p>${esc(p)}</p>`).join('\n    ')}
    <h2>Founder — Anoop Rayavarapu</h2>
    ${li(a.facts, (f) => `<li><strong>${esc(f.label)}</strong> — ${esc(f.text)}</li>`)}
    <p>See the <a href="/authors/anoop-rayavarapu">founder profile</a>.</p>
    <h2>${esc(a.servicesHeading)}</h2>
    ${li(a.services, (s) => `<li><strong><a href="${s.href}">${esc(s.label)}</a></strong> — ${esc(s.text)}</li>`)}
    <h2>${esc(a.valuesHeading)}</h2>
    ${li(a.values, (v) => `<li><strong>${esc(v.title)}</strong> — ${esc(v.text)}</li>`)}
    <h2>${esc(a.caseStudiesHeading)}</h2>
    <p>${esc(a.caseStudies)} <a href="/case-studies">Read the case studies</a>.</p>
    <h2>${esc(a.addressesHeading)}</h2>
    ${li(a.addresses, (x) => `<li><strong>${esc(x.label)}</strong> — ${esc(x.text)}</li>`)}
    <p>${esc(a.contact)} <a href="/contact"><strong>Contact Atlantis NDT</strong></a>.</p>
  </main>`;
}
