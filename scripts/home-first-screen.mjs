// Homepage first screen (2026-09-30 audit plan, item 7) — crawler/no-JS layer.
//
// prerender.mjs writes dist/index.html from the Vite template plus the Round-7
// homepage body. This module is the single source for what the "/" route must
// say in BOTH layers; src/data/home-first-screen.json mirrors the same data for
// the React Hero (src/components/Hero.tsx) so the two layers cannot drift.
//
//  - H1 exactly HOME.h1 (the old React H1 rendered "Excellence in NDTConsulting"
//    because a <br/> separated two inline runs with no whitespace).
//  - Six commercial hubs as the first-screen choices, Digital Twins secondary.
//  - A short inline enquiry form with named fields. Without JavaScript it posts
//    to a mailto: action (the VPS /api/contact endpoint only accepts JSON today);
//    with JavaScript React intercepts it and delivers via EmailJS -> /api/contact.
//  - The Round-7 body stays underneath (additive), with its old <h1> demoted to
//    <h2> and the unsupported claims (50+ specialists, 1,000+ inspections,
//    ISO 9712 / RBI / FFS offerings) rewritten per the fabricated-claims rules.
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const HERE = dirname(fileURLToPath(import.meta.url));
export const HOME = JSON.parse(readFileSync(join(HERE, '..', 'src', 'data', 'home-first-screen.json'), 'utf8'));

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function homeFirstScreenHtml() {
  const choices = HOME.choices.map((c) =>
    `<li><a href="${c.href}" data-business-line="${esc(c.businessLine)}"><strong>${esc(c.label)}</strong> <span>${esc(c.blurb)}</span></a></li>`
  ).join('');
  const options = HOME.needs.map((n) => `<option value="${esc(n.value)}">${esc(n.label)}</option>`).join('');
  return `<section id="home-first-screen" aria-labelledby="home-h1">` +
    `<h1 id="home-h1">${esc(HOME.h1)}</h1>` +
    `<p>${esc(HOME.intro)}</p>` +
    `<nav aria-label="Choose a service"><ul>${choices}</ul>` +
    `<p>${esc(HOME.secondary.prefix)} <a href="${HOME.secondary.href}">${esc(HOME.secondary.label)}</a></p></nav>` +
    `<form id="home-enquiry" name="home-enquiry" method="post" action="${HOME.form.noJsAction}" enctype="text/plain" data-form-id="home_enquiry">` +
    `<h2>${esc(HOME.form.heading)}</h2>` +
    `<p><label for="home-enquiry-name">Name</label> <input id="home-enquiry-name" name="name" type="text" autocomplete="name" required></p>` +
    `<p><label for="home-enquiry-email">Work email</label> <input id="home-enquiry-email" name="email" type="email" autocomplete="email" required></p>` +
    `<p><label for="home-enquiry-company">Company</label> <input id="home-enquiry-company" name="company" type="text" autocomplete="organization"></p>` +
    `<p><label for="home-enquiry-need">What do you need?</label> <select id="home-enquiry-need" name="need" required><option value="">Select one</option>${options}</select></p>` +
    `<p><button type="submit">${esc(HOME.form.submit)}</button></p>` +
    `<p>${esc(HOME.form.note)}</p>` +
    `</form></section>`;
}

// Targeted rewrites of the Round-7 homepage body. Each pattern is a claim that
// breaks a hard content rule; everything else in that body is kept verbatim.
const CLAIM_FIXES = [
  [/an ASNT NDT Level III in multiple methods/g, 'an ASNT NDT Level III and our lead instructor'],
  [/ Our team of 50\+ certified ASNT Level III specialists covers ultrasonic/g, ' Our work covers ultrasonic'],
  [/ per ASNT SNT-TC-1A and ISO 9712 across/g, ' per ASNT SNT-TC-1A across'],
  [/Instructor-led training delivered on-site from Houston and Hyderabad, or online\./g, 'Delivered live online or on-site at your facility.'],
  [/, API RBI program design, fitness-for-service per API 579,/g, ','],
  [/Global Footprint, Trusted by Industry Leaders/g, 'Global Footprint'],
  [/Atlantis NDT has completed (?:1,000\+ inspections|1,500\+ inspection activities) and trained (?:thousands of|1,000\+) technicians\. Our client base spans supermajors, national oil companies, aerospace OEMs, and steel fabricators\./g, 'Atlantis NDT works with operators, fabricators, EPCs and inspection companies.'],
  [/ — pricing varies by region and scope, and we return a tailored quote within 24 hours\./g, ' — we return a tailored quote within one business day.'],
  // 2026-10-11 (owner): only evidenced facts — founder-led, five-method Level III, 11+
  // years, offices in Houston and Hyderabad, remote / online / on-site delivery. No
  // "global" company, offices, client base, team of experts or scheduling promises.
  [/Atlantis NDT is a global non-destructive testing company delivering/g, 'Atlantis NDT is a founder-led non-destructive testing company delivering'],
  [/Founded by Anoop Rayavarapu — an ASNT NDT Level III and our lead instructor — the company operates from Houston, Texas and Hyderabad, India, and serves clients across the USA, India, the UAE, Saudi Arabia, Singapore, and worldwide\. Our ASNT Level III-led work covers ultrasonic, radiographic, magnetic particle, penetrant, eddy current, and visual testing for oil &amp; gas, aerospace, marine, nuclear, power generation, and manufacturing clients\./g,
    'Founded and led by Anoop Rayavarapu, ASNT NDT Level III in five methods (UT, RT, MT, PT, VT) with 11+ years of international NDT field experience. The company has offices in Houston, Texas and Hyderabad, India, and delivers work remotely, online, or on-site at the client&#39;s facility. Its Level III-led consulting covers ultrasonic, radiographic, magnetic particle, penetrant and visual testing for oil &amp; gas, aerospace, marine, power generation and manufacturing.'],
  [/study guides authored by Level III professionals\./g, 'study guides authored by an ASNT NDT Level III.'],
  [/<h2>Global Footprint<\/h2><p>With offices in Houston and Hyderabad and delivery capability across [^<]*?and beyond, Atlantis NDT works with operators, fabricators, EPCs and inspection companies\./g,
    '<h2>Where we work</h2><p>Atlantis NDT has offices in Houston, Texas and Hyderabad, India, and delivers remotely, online, or on-site at the client&#39;s facility. The services are built for operators, fabricators, EPCs and inspection companies.'],
  [/training content and procedures written by practicing Level III experts/g, 'training content and procedures written by an ASNT NDT Level III'],
  [/<li>Same-week scheduling for inspection and consulting engagements<\/li>/g, '<li>Remote, online or on-site delivery at your facility</li>'],
];

export function applyHomeFirstScreen(homeHtml, bodyHtml) {
  let body = bodyHtml;
  for (const [re, to] of CLAIM_FIXES) body = body.replace(re, to);
  // Exactly one H1: demote the legacy one, then put the first screen at the top of <main>.
  body = body.replace(/<h1>([\s\S]*?)<\/h1>/g, '<h2>$1</h2>');
  body = /<main>/.test(body) ? body.replace('<main>', `<main>${homeFirstScreenHtml()}`) : `<main>${homeFirstScreenHtml()}</main>${body}`;

  let html = homeHtml.replace(/(<div id="root">)[\s\S]*?(<\/div>\s*<\/body>)/, (_m, o, c) => `${o}\n${body}\n${c}`);
  const t = esc(HOME.title), d = esc(HOME.description);
  html = html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${t}</title>`)
    .replace(/<meta\s+name="description"[\s\S]*?>/, `<meta name="description" content="${d}">`)
    .replace(/<meta\s+property="og:title"[\s\S]*?>/, `<meta property="og:title" content="${t}">`)
    .replace(/<meta\s+property="og:description"[\s\S]*?>/, `<meta property="og:description" content="${d}">`);
  return html;
}
