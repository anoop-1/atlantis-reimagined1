// Prerender route for /business-consulting, built from the same JSON the React
// page renders (keeps the crawler and human layers aligned, incl. the H1).
import { readFileSync } from 'fs';

const d = JSON.parse(readFileSync(new URL('../src/data/business-consulting.json', import.meta.url), 'utf-8'));
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const cta = '/contact?service=consulting&amp;subject=Business%20consulting';

export const BUSINESS_CONSULTING_ROUTE = {
  path: '/business-consulting',
  publishedAt: '2026-09-27',
  title: d.title,
  description: d.description,
  bodyContent: [
    '<header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/consulting">NDT Level III Consulting</a><a href="/training">Training</a><a href="/erp">ERP</a><a href="/contact">Contact</a></nav></header>',
    '<main>',
    `<h1>${esc(d.h1)}</h1>`,
    `<p>${esc(d.intro)} <a href="${cta}">Book a consultation</a> or see <a href="/consulting">NDT Level III consulting</a>.</p>`,
    '<h2>Where we help</h2>',
    ...d.areas.map((a) => `<h3>${esc(a.title)}</h3><p>${esc(a.text)}</p>`),
    '<h2>How an engagement works</h2>',
    `<ol>${d.how.map((h) => `<li>${esc(h)}</li>`).join('')}</ol>`,
    '<p>Affordable. Accessible. Fully customizable. Quote on request.</p>',
    `<h2>Talk through your business</h2><p>A free first conversation with an ASNT Level III who runs NDT businesses. <a href="${cta}">Send an enquiry</a>.</p>`,
    '</main>',
  ].join('\n'),
};
