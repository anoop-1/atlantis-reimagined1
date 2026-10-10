/**
 * 2026-10-10 SEO cycle — crawler-HTML side (CLAUDE.md §48).
 * ─────────────────────────────────────────────────────────────────────────────
 * Why: the 2026-10-09 competitor review (claude.ai project doc
 * seo-sprint-2026-10-competitor-gap.md, action 2 + actions 6, 8, 9) found
 *   • no competitor page offering an API 510/570/653 interval estimator, and ASNT
 *     selling an hours tracker (proof of demand for an SNT-TC-1A hours planner);
 *   • the Level III and API 653 service pages never linking the free written-practice
 *     template, training matrix and API 653 template Atlantis already hosts;
 *   • no vendor-neutral NDT software buyer checklist on the site.
 * The checklist is a BUSINESS_RESOURCES record (route-reconcile renders it). This
 * module adds the two tool routes and injects the path-driven next-step blocks.
 *
 * One source per fact: src/data/integrity-tools-2026-10.json (tool text),
 * src/data/snt-tc-1a-hours.json (hours), src/data/next-steps-2026-10.json (blocks).
 * React reads the same files (SntHoursPlanner, InspectionIntervalCalculator,
 * NextStepsBlock). No prices; screening arithmetic only; Atlantis is not an AI.
 */
import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SITE = 'https://atlantisndt.com';
const load = (p) => JSON.parse(readFileSync(join(ROOT, p), 'utf-8'));
const TOOLS = load('src/data/integrity-tools-2026-10.json');
const HOURS = load('src/data/snt-tc-1a-hours.json');
const NEXT = load('src/data/next-steps-2026-10.json').blocks;
export const CYCLE_MARKER = 'data-next-steps="2026-10"';
export const cycleStats = { routes: 0, blocks: 0 };

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function hoursTable() {
  const rows = Object.keys(HOURS.classroom).map((m) => {
    const c = HOURS.classroom[m], o = HOURS.ojt[m];
    return `<tr><th scope="row">${esc(HOURS.methodNames[m])}</th><td>${c[0]} / ${o[0]}</td><td>${c[1]} / ${o[1]}</td><td>${c[2]} / ${o[2]}</td></tr>`;
  }).join('');
  return `<table><caption>Recommended minimum hours used by the planner: classroom / on-the-job. Level II is in addition to Level I; Level III is in addition to Level II.</caption>
      <thead><tr><th scope="col">Method</th><th scope="col">Level I</th><th scope="col">Level II</th><th scope="col">Level III</th></tr></thead><tbody>${rows}</tbody></table>`;
}

function intervalTable() {
  return `<table><caption>Prescriptive maximum intervals the calculator applies (screening; RBI can change them)</caption>
      <thead><tr><th scope="col">Code</th><th scope="col">Inspection</th><th scope="col">Maximum interval</th></tr></thead><tbody>
      <tr><td>API 510</td><td>Internal or on-stream</td><td>Lesser of half the remaining life and 10 years (remaining life under 4 years: up to the remaining life, no more than 2)</td></tr>
      <tr><td>API 510</td><td>External visual</td><td>Lesser of 5 years and the internal interval</td></tr>
      <tr><td>API 570</td><td>Thickness measurement</td><td>Lesser of half the remaining life and the class maximum (Class 1: 5 years; Classes 2 and 3: 10 years)</td></tr>
      <tr><td>API 570</td><td>External visual</td><td>Classes 1 and 2: 5 years; Class 3: 10 years; Class 4: owner-user</td></tr>
      <tr><td>API 653</td><td>Shell UT thickness</td><td>Lesser of RCA ÷ 2N and 15 years; 5 years when the rate is not known</td></tr>
      <tr><td>API 653</td><td>External inspection</td><td>Lesser of 5 years and RCA ÷ 4N</td></tr>
      <tr><td>API 653</td><td>Internal (floor)</td><td>Lesser of floor remaining life ÷ 2 and 20 years; 10 years when bottom rates are not known</td></tr>
      </tbody></table>`;
}

function toolBody(t, key) {
  const formulas = t.formulas.map(([k, v]) => `<tr><th scope="row">${esc(k)}</th><td><code>${esc(v)}</code></td></tr>`).join('');
  const faq = t.faq.map((f) => `<h3>${esc(f.q)}</h3>\n    <p>${esc(f.a)}</p>`).join('\n    ');
  const related = t.related.map((r) => `<li><a href="${esc(r.href)}">${esc(r.label)}</a></li>`).join('');
  const service = key === 'hours' ? 'training' : 'inspection';
  return `  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/tools">Tools</a><a href="/training">Training</a><a href="/inspection-services">Inspection</a><a href="/contact">Contact</a></nav></header>
  <main>
    <h1>${esc(t.h1)}</h1>
    <p>${esc(t.intro)}</p>
    <p>The interactive ${key === 'hours' ? 'planner' : 'calculator'} runs in your browser; nothing you enter is sent anywhere.</p>
    ${key === 'hours' ? hoursTable() : intervalTable()}
    <h2>Formulas used</h2>
    <table><tbody>${formulas}</tbody></table>
    <h2>Worked example</h2>
    <p>${esc(t.example)}</p>
    <h2>Before you rely on the numbers</h2>
    <ul>${t.notes.map((n) => `<li>${esc(n)}</li>`).join('')}</ul>
    <h2>Frequently asked questions</h2>
    ${faq}
    <h2>Related</h2>
    <ul>${related}</ul>
    <p>${esc(t.cta)} <a href="/contact?service=${service}">Contact Atlantis NDT</a>.</p>
  </main>`;
}

/** The two tool routes. */
export function cycleRoutes() {
  const names = { hours: ['SNT-TC-1A Hours Planner', 'SNT-TC-1A hours planner'], interval: ['API 510, 570 and 653 Inspection Interval Calculator', 'API inspection interval calculator'] };
  const out = ['hours', 'interval'].map((key) => {
    const t = TOOLS[key];
    return {
      path: t.path,
      title: t.title,
      description: t.description,
      canonical: `${SITE}${t.path}`,
      bodyContent: toolBody(t, key),
      structuredData: {
        '@context': 'https://schema.org',
        '@graph': [
          { '@type': 'WebApplication', name: names[key][0], url: `${SITE}${t.path}`, applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web', isAccessibleForFree: true, publisher: { '@type': 'Organization', name: 'Atlantis NDT', url: SITE } },
          { '@type': 'FAQPage', '@id': `${SITE}${t.path}#faq`, mainEntity: t.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
          { '@type': 'BreadcrumbList', itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
            { '@type': 'ListItem', position: 2, name: 'Tools', item: `${SITE}/tools` },
            { '@type': 'ListItem', position: 3, name: names[key][1], item: `${SITE}${t.path}` },
          ] },
        ],
      },
    };
  });
  cycleStats.routes = out.length;
  return out;
}

export function nextStepsHtml(path) {
  const b = NEXT[path];
  if (!b) return '';
  const links = b.links.map(([href, label]) => `<li><a href="${esc(href)}">${esc(label)}</a></li>`).join('');
  return `
    <section ${CYCLE_MARKER} aria-label="${esc(b.h)}">
      <h2>${esc(b.h)}</h2>
      <p>${esc(b.p)}</p>
      <ul>${links}</ul>
    </section>
`;
}

/** Insert the next-step block before the last </main> (idempotent). Runs just before writeRoute. */
export function applyCycleRoute(route) {
  const p = route?.path;
  if (!p || !NEXT[p] || typeof route.bodyContent !== 'string' || route.bodyContent.includes(CYCLE_MARKER)) return route;
  const html = nextStepsHtml(p);
  const i = route.bodyContent.lastIndexOf('</main>');
  const body = i >= 0 ? route.bodyContent.slice(0, i) + html + route.bodyContent.slice(i) : route.bodyContent + html;
  cycleStats.blocks++;
  return { ...route, bodyContent: body };
}

/** Copy guard + link-target guard (targets checked against App routes passed in). */
export function assertCycleClean(knownPaths) {
  const blob = JSON.stringify(TOOLS) + JSON.stringify(NEXT) + cycleRoutes().map((r) => r.bodyContent).join('');
  if (/[$£€₹]\s?\d|\bper (day|hour)\b|\bday[- ]rate\b/i.test(blob)) throw new Error('cycle-2026-10-10: pricing pattern in copy');
  for (const [key, b] of Object.entries(NEXT)) {
    if (/\/erp|software/.test(key) && /\d/.test(b.h + b.p + b.links.map((l) => l[1]).join(''))) throw new Error(`cycle-2026-10-10: numeral in software copy (${key})`);
    if (knownPaths) for (const [href] of b.links) {
      const base = href.split('#')[0].split('?')[0]; // §51: /contact?service=… links resolve to /contact
      if (!knownPaths.has(base)) throw new Error(`cycle-2026-10-10: next-step link target not a known route: ${href} (on ${key})`);
    }
  }
  return true;
}
