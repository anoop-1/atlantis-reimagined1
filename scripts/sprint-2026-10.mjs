/**
 * 7-day SEO & conversion sprint — 2026-10-09. Crawler-HTML mirror.
 * ─────────────────────────────────────────────────────────────────────────────
 * The prerendered <main> is what crawlers and no-JS visitors read; React renders
 * the UI. Everything the sprint added to the React pages is mirrored here from the
 * SAME data files, so the two never disagree:
 *
 *   src/data/sprint-funnels.json   training pathway, Level III paths, home strip
 *   src/data/dt-sample.json        digital twin sample report (sample data)
 *   src/data/sprint-tools.json     two new calculators (text + worked examples)
 *
 * What it does, per route (applySprintRoute runs last, just before writeRoute):
 *   1. Buyer-focused H1 on the money pages (same text as the React H1).
 *   2. Static versions of the new sections, inserted after the intro paragraph.
 *   3. FAQPage JSON-LD built ONLY from the FAQ already visible in <main>, for
 *      money pages that had none (practical-ndt, inspection-services, consulting).
 *   4. SoftwareApplication for /practical-ndt (no offers, no ratings).
 * sprintRoutes() adds the two calculator pages; applySprintHome() mirrors the
 * homepage strip. No prices anywhere (CLAUDE.md §18); ERP copy has no numerals.
 */
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SITE = 'https://atlantisndt.com';
const load = (p) => JSON.parse(readFileSync(join(ROOT, p), 'utf-8'));
const FUNNELS = load('src/data/sprint-funnels.json');
const DT = load('src/data/dt-sample.json');
const TOOLS = load('src/data/sprint-tools.json');
export const SPRINT_MARKER = 'data-sprint="2026-10"';

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const SPRINT_H1 = {
  '/erp': 'ERP for NDT and Inspection Companies — Certifications, Calibration, Dispatch and Reports in One System',
  '/digital-twins': 'Asset Integrity Digital Twin — Your Inspection Data and CMLs on One 3D Model',
  '/digital-twin-reporting': 'Digital Twin NDT Reporting Software — Every Reading on the 3D Asset',
  '/practical-ndt': 'Practical NDT Simulator — Hands-On UT, PAUT, RT, MT and More in an Immersive 3D World',
  '/training': 'NDT Training Courses — UT, PAUT, TOFD, RT, MT, PT and More, Led by an ASNT Level III',
  '/consulting': 'NDT Level III Consulting — Written Practices, Procedures, Certification Programmes and Audits',
  '/inspection-services': 'API 510, 570 and 653 Inspection Services — Pressure Vessels, Piping and Storage Tanks',
};

// ── section renderers ────────────────────────────────────────────────────────
function assess(c) {
  const [t0, t1, t2] = c.readings;
  const [y0, y1, y2] = DT.years;
  const lt = (t0 - t2) / (y2 - y0);
  const st = (t1 - t2) / (y2 - y1);
  const rate = Math.max(lt, st, 0.001);
  const rl = (t2 - c.tmin) / rate;
  return { rate, rl, status: rl < 5 ? 'Action needed' : rl < 10 ? 'Monitor' : 'Acceptable' };
}

export function dtPreviewHtml() {
  const rows = DT.cmls.map((c) => {
    const a = assess(c);
    return `<tr><th scope="row">${c.id}</th><td>${c.course}</td><td>${c.tmin}</td>${c.readings.map((r) => `<td>${r.toFixed(1)}</td>`).join('')}<td>${a.rate.toFixed(3)}</td><td>${a.rl > 99 ? 'more than 99' : a.rl.toFixed(1)}</td><td>${a.status}</td></tr>`;
  }).join('');
  const links = DT.erpLinks.map(([k, v]) => `<li><strong>${esc(k)}:</strong> ${esc(v)}</li>`).join('');
  const subj = (s) => encodeURIComponent(s);
  return `
    <section id="dt-preview" ${SPRINT_MARKER}>
      <h2>Try a sample digital twin report</h2>
      <p><strong>Sample data — an illustrative tank, not a real asset or client record.</strong> Click a thickness monitoring location (CML) on the tank shell in the interactive version: the report updates with its readings across three campaigns, the corrosion rates, remaining life to minimum thickness and when to look again. Switch views to see the same reading linked to its work order, technician certificate, instrument calibration and procedure inside the ERP.</p>
      <table><caption>${esc(DT.asset)} shell CMLs (sample data, mm): readings by campaign, governing corrosion rate (mm/yr) and remaining life to t-min (years)</caption>
        <thead><tr><th scope="col">CML</th><th scope="col">Course</th><th scope="col">t-min</th>${DT.years.map((y) => `<th scope="col">${y}</th>`).join('')}<th scope="col">Rate</th><th scope="col">Remaining life</th><th scope="col">Status</th></tr></thead>
        <tbody>${rows}</tbody></table>
      <p>Screening arithmetic on sample data: the governing rate is the higher of the long- and short-term rates; remaining life is (latest reading − t-min) ÷ governing rate. Your inspector and the applicable code (API 510, 570 or 653) decide the real interval.</p>
      <h3>Inside the ERP (sample linked records)</h3>
      <ul>${links}</ul>
      <p>Standalone, the twin takes your readings from spreadsheets or your reporting tool, places each one on the 3D asset and issues the report; your existing systems stay as they are.</p>
      <p><a href="/contact?service=digital-twins&amp;subject=${subj('Digital twin demo (standalone)')}">Demo it with my data — standalone</a> · <a href="/contact?service=digital-twins&amp;subject=${subj('Digital twin demo (inside the ERP)')}">Demo it inside the ERP</a></p>
    </section>
`;
}

export function utDemoHtml() {
  const v = 5920, T = 25, d = +(T * 0.48).toFixed(1);
  const tB = (2 * T) / v * 1000, tF = (2 * d) / v * 1000;
  return `
    <section id="ut-demo" ${SPRINT_MARKER}>
      <h2>Try a simplified UT A-scan</h2>
      <p><strong>Simplified educational demo — not a validated engineering simulation.</strong> In the interactive version you slide a straight-beam probe across a plate that contains one planar reflector. Over sound metal the A-scan shows the backwall echo; over the reflector an earlier echo appears and the backwall drops. Gain, thickness and material (carbon steel, stainless steel, aluminium) can be changed.</p>
      <p>Depth is read from the echo time: depth = velocity × time ÷ 2. For example, in carbon steel (longitudinal velocity ${v.toLocaleString('en-US')} m/s) a ${T} mm plate puts the backwall echo at ${tB.toFixed(2)} µs, and a reflector at ${d} mm returns an echo at ${tF.toFixed(2)} µs.</p>
      <p>The geometry is idealised: no beam spread, attenuation, near field, dead zone, couplant or calibration effects. It shows the principle, not what a real instrument on a real part will display. Skills are built on the full Practical NDT simulator and on calibrated equipment in training.</p>
      <p><a href="/contact?service=practical-ndt&amp;subject=${encodeURIComponent('Practical NDT simulator demo (standalone)')}">Demo the full simulator — standalone</a> · <a href="/contact?service=practical-ndt&amp;subject=${encodeURIComponent('Practical NDT simulator demo (inside the ERP)')}">Demo it inside the ERP</a> · Free calculators: <a href="/tools/ut-angle-beam-calculator">UT angle beam</a>, <a href="/tools/tofd-calculator">TOFD</a></p>
    </section>
`;
}

export function trainingPathwayHtml() {
  const t = FUNNELS.training;
  return `
    <section id="${t.id}" ${SPRINT_MARKER}>
      <h2>${esc(t.heading)}</h2>
      <p>${esc(t.intro)}</p>
      ${t.stages.map((s, i) => `<h3>Step ${i + 1}: ${esc(s.h)}</h3><p>${esc(s.p)}</p><p><strong>From Atlantis:</strong> ${esc(s.you)}</p>`).join('\n      ')}
      <h3>${esc(t.prereqHeading)}</h3>
      <ul>${t.prereqs.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
      <p>No written practice yet? See <a href="/consulting#level3-paths">written-practice support</a>.</p>
      <h3>${esc(t.quoteHeading)}</h3>
      <ul>${t.quote.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
      <p>${esc(t.quoteNote)}</p>
      <h3>${esc(t.flowHeading)}</h3>
      <ol>${t.flow.map((f) => `<li><strong>${esc(f.h)}.</strong> ${esc(f.p)}</li>`).join('')}</ol>
      <p><a href="/contact?service=training&amp;subject=${encodeURIComponent('Training enquiry (pathway)')}">Start your training enquiry</a></p>
    </section>
`;
}

export function level3PathsHtml() {
  const l = FUNNELS.level3;
  const cards = l.paths.map((p) => `<h3>${esc(p.h)}</h3><p>${esc(p.p)}</p><p><strong>You get:</strong> ${p.get.map(esc).join('; ')}. <strong>We need from you:</strong> ${p.need.map(esc).join('; ')}.</p><p><a href="/contact?service=consulting&amp;scope=${encodeURIComponent(p.option)}&amp;subject=${encodeURIComponent('Level III: ' + p.h)}">Start with ${esc(p.h.toLowerCase())}</a></p>`).join('\n      ');
  return `
    <section id="${l.id}" ${SPRINT_MARKER}>
      <h2>${esc(l.heading)}</h2>
      <p>${esc(l.intro)}</p>
      ${cards}
      <p>Want the full detail first? <a href="${l.detailHref}">Every Level III engagement, set out separately</a>.</p>
    </section>
`;
}

export function homeStripHtml() {
  const h = FUNNELS.home;
  return `
    <section id="${h.id}" ${SPRINT_MARKER}>
      <h2>${esc(h.heading)}</h2>
      <p>${esc(h.intro)}</p>
      <ul>${h.items.map((it) => `<li><a href="${it.href}">${esc(it.label)}</a>: ${esc(it.blurb)}</li>`).join('')}</ul>
    </section>
`;
}

// ── helpers ──────────────────────────────────────────────────────────────────
function insertAfterIntro(body, html) {
  const h1 = body.search(/<h1[\s>]/i);
  if (h1 >= 0) {
    const pEnd = body.indexOf('</p>', h1);
    if (pEnd >= 0) return body.slice(0, pEnd + 4) + html + body.slice(pEnd + 4);
  }
  return /<main[^>]*>/i.test(body) ? body.replace(/<main[^>]*>/i, (m) => m + html) : body + html;
}
function replaceH1(body, text) {
  return body.replace(/<h1([^>]*)>[\s\S]*?<\/h1>/i, (_m, attrs) => `<h1${attrs}>${esc(text)}</h1>`);
}
const strip = (s) => s.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim();

/** FAQ pairs that are VISIBLE in <main>: <h3>Q</h3><p>A</p> under a "Frequently asked" / "FAQ" H2. */
export function visibleFaq(body) {
  const out = [];
  const re = /<h2[^>]*>\s*(?:Frequently asked|Frequently Asked|FAQ)[^<]*<\/h2>([\s\S]*?)(?=<h2[\s>]|<\/main>|$)/gi;
  let m;
  while ((m = re.exec(body))) {
    const pairs = [...m[1].matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/gi)];
    for (const p of pairs) {
      const q = strip(p[1]).replace(/^Q\d+:\s*/i, '');
      const a = strip(p[2]).replace(/^A:\s*/i, '');
      if (q && a && !out.some((x) => x.q === q)) out.push({ q, a });
    }
  }
  return out.slice(0, 10);
}
function hasType(sd, type) {
  if (!sd) return false;
  const nodes = Array.isArray(sd) ? sd : sd['@graph'] ? sd['@graph'] : [sd];
  return nodes.some((n) => n && (n['@type'] === type || (Array.isArray(n['@type']) && n['@type'].includes(type))));
}
function appendNode(route, node) {
  if (!route.structuredData) { route.structuredData = { '@context': 'https://schema.org', ...node }; return; }
  if (Array.isArray(route.structuredData['@graph'])) { route.structuredData['@graph'].push(node); return; }
  route.structuredData = { '@context': 'https://schema.org', '@graph': [route.structuredData, node] };
}

const SECTIONS = {
  '/digital-twin-reporting': dtPreviewHtml,
  '/digital-twins': dtPreviewHtml,
  '/practical-ndt': utDemoHtml,
  '/training': trainingPathwayHtml,
  '/consulting': level3PathsHtml,
};
const FAQ_SCHEMA_PATHS = new Set(['/practical-ndt', '/inspection-services', '/consulting']);

export const sprintStats = { h1: 0, sections: 0, faq: 0, software: 0, routes: 0, home: 0 };

// "Online" is used as a pseudo-city by some programmatic templates, which produced
// copy such as "Where can I take NDT training in Online?". Repaired at the last write.
const ONLINE_FIXES = [
  [/\bbased in Online\b/g, 'working online'],
  [/\bfirms in Online\b/g, 'firms working online'],
  [/\ba firm in Online\b/g, 'a firm working online'],
  [/\bcandidates in Online\b/g, 'candidates training online'],
  [/\bin Online\b/g, 'online'],
];
function fixOnline(str) {
  let out = str;
  for (const [re, rep] of ONLINE_FIXES) out = out.replace(re, rep);
  return out;
}
function fixOnlinePseudoCity(route) {
  const blob = (route.bodyContent || '') + JSON.stringify(route.structuredData || '') + (route.title || '') + (route.description || '');
  if (!/\bin Online\b/.test(blob)) return route;
  const r = { ...route };
  if (r.bodyContent) r.bodyContent = fixOnline(r.bodyContent);
  if (r.title) r.title = fixOnline(r.title);
  if (r.description) r.description = fixOnline(r.description);
  if (r.structuredData) r.structuredData = JSON.parse(fixOnline(JSON.stringify(r.structuredData)));
  sprintStats.online = (sprintStats.online || 0) + 1;
  return r;
}

/** Last body writer for the sprint's money pages. Idempotent. */
export function applySprintRoute(route) {
  if (!route || !route.path || !route.bodyContent) return route;
  route = fixOnlinePseudoCity(route);
  const p = route.path;
  if (!SPRINT_H1[p] && !SECTIONS[p] && !FAQ_SCHEMA_PATHS.has(p)) return route;
  const r = { ...route };
  if (SPRINT_H1[p]) {
    const before = r.bodyContent;
    r.bodyContent = replaceH1(r.bodyContent, SPRINT_H1[p]);
    if (r.bodyContent !== before) sprintStats.h1++;
  }
  if (SECTIONS[p] && !r.bodyContent.includes(SPRINT_MARKER)) {
    r.bodyContent = insertAfterIntro(r.bodyContent, SECTIONS[p]());
    sprintStats.sections++;
  }
  if (FAQ_SCHEMA_PATHS.has(p) && !hasType(r.structuredData, 'FAQPage')) {
    const faq = visibleFaq(r.bodyContent);
    if (faq.length >= 2) {
      r.structuredData = r.structuredData ? JSON.parse(JSON.stringify(r.structuredData)) : r.structuredData;
      appendNode(r, {
        '@type': 'FAQPage',
        '@id': `${SITE}${p}#faq`,
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a.slice(0, 1500) } })),
      });
      sprintStats.faq++;
    }
  }
  if (p === '/practical-ndt' && !hasType(r.structuredData, 'SoftwareApplication')) {
    appendNode(r, {
      '@type': 'SoftwareApplication',
      name: 'Atlantis Practical NDT',
      description: 'Immersive 3D NDT skills-practice simulator for UT, PAUT, RT, MT, PT, VT, ET and TOFD, standalone or inside the Atlantis ERP eLearning portal. Complements formal training; not a certification substitute.',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Web',
      url: `${SITE}/practical-ndt`,
      publisher: { '@type': 'Organization', name: 'Atlantis NDT', url: SITE },
    });
    sprintStats.software++;
  }
  return r;
}

function toolBody(t, key) {
  const formulas = t.formulas.map(([k, v]) => `<tr><th scope="row">${esc(k)}</th><td><code>${esc(v)}</code></td></tr>`).join('');
  const faq = t.faq.map((f) => `<h3>${esc(f.q)}</h3>\n    <p>${esc(f.a)}</p>`).join('\n    ');
  return `  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/tools">Tools</a><a href="/training">Training</a><a href="/practical-ndt">Practical NDT</a><a href="/contact">Contact</a></nav></header>
  <main>
    <h1>${esc(t.h1)}</h1>
    <p>${esc(t.intro)}</p>
    <p>The interactive ${key === 'angle' ? 'angle beam' : 'TOFD'} calculator runs in your browser; nothing you enter is sent anywhere.</p>
    <h2>Formulas used</h2>
    <table><tbody>${formulas}</tbody></table>
    <h2>Worked example</h2>
    <p>${esc(t.example)}</p>
    <h2>Before you rely on the numbers</h2>
    <ul>${t.notes.map((n) => `<li>${esc(n)}</li>`).join('')}</ul>
    <h2>Frequently asked questions</h2>
    ${faq}
    <h2>Related</h2>
    <ul><li><a href="/practical-ndt#ut-demo">Try the simplified A-scan demo</a></li><li><a href="/tools/sound-velocity-reference">Sound velocity reference table</a></li><li><a href="/tools/ultrasonic-thickness-calculator">Ultrasonic thickness calculator</a></li><li><a href="/training#training-pathway">UT, PAUT and TOFD training: how training, exams and certification fit</a></li>${key === 'angle' ? '<li><a href="/tools/tofd-calculator">TOFD calculator</a></li>' : '<li><a href="/tools/ut-angle-beam-calculator">UT angle beam calculator</a></li>'}</ul>
    <p>Building UT, PAUT or TOFD skills for a team? <a href="/training">Atlantis NDT training</a> is led by an ASNT Level III, and the <a href="/practical-ndt">Practical NDT simulator</a> gives hands-on practice between courses.</p>
  </main>`;
}

/** The two calculator routes (Day 6 original resources). */
export function sprintRoutes() {
  const out = [];
  for (const key of ['angle', 'tofd']) {
    const t = TOOLS[key];
    out.push({
      path: t.path,
      title: t.title,
      description: t.description,
      canonical: `${SITE}${t.path}`,
      bodyContent: toolBody(t, key),
      structuredData: {
        '@context': 'https://schema.org',
        '@graph': [
          { '@type': 'WebApplication', name: key === 'angle' ? 'UT Angle Beam Calculator' : 'TOFD Calculator', url: `${SITE}${t.path}`, applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web', isAccessibleForFree: true, publisher: { '@type': 'Organization', name: 'Atlantis NDT', url: SITE } },
          { '@type': 'FAQPage', '@id': `${SITE}${t.path}#faq`, mainEntity: t.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
          { '@type': 'BreadcrumbList', itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
            { '@type': 'ListItem', position: 2, name: 'Tools', item: `${SITE}/tools` },
            { '@type': 'ListItem', position: 3, name: key === 'angle' ? 'UT angle beam calculator' : 'TOFD calculator', item: `${SITE}${t.path}` },
          ] },
        ],
      },
    });
  }
  sprintStats.routes = out.length;
  return out;
}

/** Homepage strip, inserted before the first </main> of dist/index.html. */
export function applySprintHome(html) {
  if (html.includes(`id="${FUNNELS.home.id}"`)) return html;
  const i = html.indexOf('</main>');
  if (i < 0) return html;
  sprintStats.home++;
  return html.slice(0, i) + homeStripHtml() + html.slice(i);
}

/** Copy guard: no prices in anything this module emits; no numerals in ERP copy. */
export function assertSprintClean() {
  const blob = JSON.stringify(FUNNELS) + JSON.stringify(TOOLS) + dtPreviewHtml() + utDemoHtml() + trainingPathwayHtml() + level3PathsHtml() + homeStripHtml();
  const price = /[$£€₹]\s?\d|\bper (day|hour)\b|\bday[- ]rate\b/i;
  if (price.test(blob)) throw new Error('sprint-2026-10: pricing pattern in sprint copy');
  if (/\d/.test(SPRINT_H1['/erp'])) throw new Error('sprint-2026-10: numeral in ERP H1');
  return true;
}
