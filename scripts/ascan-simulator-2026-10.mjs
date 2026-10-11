/**
 * Ultrasonic A-scan simulator tool page + Practical NDT hub topic — 2026-10-12 (SEO audit action 8).
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY: ~267 Practical NDT pages produced 24 impressions; "ndt simulator" does not show Atlantis,
 * and the browser A-scan demo (2026-10-09, /practical-ndt#ut-demo) had no page of its own, so the
 * one asset no competitor offers was invisible for "ultrasonic testing simulator" / "A-scan
 * simulator". This module is the crawler side of:
 *   - /tools/ultrasonic-a-scan-simulator (ascanToolRoute): the demo as its own indexable page,
 *     WebApplication (no Offer, no price) + FAQPage + BreadcrumbList.
 *   - /practical-ndt (applyAscanRoute): "NDT simulator" intro paragraph and a prominent link to
 *     the tool; H1 lives in SPRINT_H1 (scripts/sprint-2026-10.mjs) as before.
 *   - /tools (applyAscanRoute): the UT tools list with the new page.
 * ONE SOURCE: src/data/ascan-simulator-2026-10.json (copy) and src/data/ascan-model-2026-10.mjs
 * (the model the React tool runs; the worked example is computed with it). React reads the same
 * files: src/pages/tools/UltrasonicAscanSimulator.tsx, src/pages/PracticalNdt.tsx, tools/index.tsx.
 */
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { workedExample, MATERIALS } from '../src/data/ascan-model-2026-10.mjs';
import { PRACTICAL_CLAIM_RULES } from './practical-ndt-claims.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SITE = 'https://atlantisndt.com';
const T = JSON.parse(readFileSync(join(ROOT, 'src/data/ascan-simulator-2026-10.json'), 'utf-8'));
export const ASCAN_MARKER = 'data-ascan-tool="2026-10"';
export const ASCAN_PATH = T.path;
export const ascanStats = { route: 0, practical: 0, tools: 0 };

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
/** Escape text and turn [label](/path) into links (same syntax the React page renders). */
export function inline(s) {
  const parts = [];
  let last = 0;
  for (const m of String(s).matchAll(/\[([^\]]+)\]\(([^)\s]+)\)/g)) {
    parts.push(esc(s.slice(last, m.index)));
    parts.push(`<a href="${esc(m[2])}">${esc(m[1])}</a>`);
    last = m.index + m[0].length;
  }
  parts.push(esc(s.slice(last)));
  return parts.join('');
}
const plain = (s) => String(s).replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '$1');

function blockHtml(b) {
  if (b.p) return `<p>${inline(b.p)}</p>`;
  if (b.ul) return `<ul>${b.ul.map((x) => `<li>${inline(x)}</li>`).join('')}</ul>`;
  if (b.ol) return `<ol>${b.ol.map((x) => `<li>${inline(x)}</li>`).join('')}</ol>`;
  if (b.example) {
    const ex = workedExample();
    return `<p>${esc(ex.setup)}</p><ol>${ex.steps.map((x) => `<li>${esc(x)}</li>`).join('')}</ol><p>${esc(ex.check)}</p>`;
  }
  return '';
}

export function ascanToolBody() {
  const sections = T.sections.map((s) => `    <h2 id="${esc(s.id)}">${esc(s.h2)}</h2>\n    ${s.body.map(blockHtml).join('\n    ')}`).join('\n');
  const faq = T.faq.map((f) => `<h3>${esc(f.q)}</h3>\n    <p>${esc(f.a)}</p>`).join('\n    ');
  const related = T.related.map((r) => `<li><a href="${esc(r.href)}">${esc(r.label)}</a></li>`).join('');
  const mats = MATERIALS.map((m) => `${m.label} (${m.v.toLocaleString('en-US')} m/s)`).join(', ');
  return `  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/tools">Tools</a><a href="/practical-ndt">Practical NDT</a><a href="/training">Training</a><a href="/contact">Contact</a></nav></header>
  <main>
    <h1>${esc(T.h1)}</h1>
    <p>${esc(T.intro)}</p>
    <section id="ascan-simulator" ${ASCAN_MARKER} aria-label="${esc(T.toolHeading)}">
      <p><strong>Simplified educational demo — not a validated engineering simulation.</strong> The interactive simulator runs in your browser: a probe position slider, gain (−12 to +12 dB), range (10 to 150 mm), one gate (start, width and threshold), plate thickness (10 to 50 mm) and material: ${esc(mats)}. The readout gives the gate reading, the echo time and depth, and warns when an echo saturates.</p>
    </section>
${sections}
    <h2 id="faq">Frequently asked questions</h2>
    ${faq}
    <h2>Related tools</h2>
    <ul>${related}</ul>
  </main>`;
}

/** The tool route (pushed next to the other tool routes in prerender.mjs). */
export function ascanToolRoute() {
  assertAscanClean();
  const url = `${SITE}${T.path}`;
  ascanStats.route = 1;
  return {
    path: T.path,
    title: T.title,
    description: T.description,
    canonical: url,
    bodyContent: ascanToolBody(),
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebApplication',
          '@id': `${url}#app`,
          name: T.appName,
          url,
          description: T.intro,
          applicationCategory: 'EducationalApplication',
          operatingSystem: 'Web browser',
          browserRequirements: 'Requires JavaScript',
          isAccessibleForFree: true,
          inLanguage: 'en',
          featureList: 'A-scan display, probe position, gain in dB, range, one gate with threshold, plate thickness, carbon steel / stainless steel / aluminium velocities, gate reading of depth and amplitude',
          audience: { '@type': 'EducationalAudience', educationalRole: 'UT trainees, Level II candidates and NDT instructors' },
          publisher: { '@type': 'Organization', name: 'Atlantis NDT', url: SITE },
        },
        { '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: T.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
        { '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: 'Tools', item: `${SITE}/tools` },
          { '@type': 'ListItem', position: 3, name: T.breadcrumb, item: url },
        ] },
      ],
    },
  };
}

const H = T.practicalHub;
export function practicalCalloutHtml() {
  return `<p ${ASCAN_MARKER}><strong>${esc(H.calloutLead)}</strong> <a href="${esc(T.path)}">${esc(H.calloutLink)}</a>: ${esc(H.calloutTail)}</p>`;
}
export function toolsHubHtml() {
  return `
    <section ${ASCAN_MARKER} aria-label="Ultrasonic testing tools">
      <h2>Ultrasonic testing tools</h2>
      <ul><li><a href="${esc(T.path)}">${esc(T.toolsHubCard.title)}</a>: ${esc(T.toolsHubCard.description.charAt(0).toLowerCase() + T.toolsHubCard.description.slice(1))}.</li><li><a href="/tools/ut-angle-beam-calculator">UT angle beam calculator</a>: skip distance, sound path, flaw depth and leg.</li><li><a href="/tools/tofd-calculator">TOFD calculator</a>: probe centre separation, tip depth and dead zone.</li><li><a href="/tools/sound-velocity-reference">Sound velocity reference</a> and <a href="/tools/ultrasonic-thickness-calculator">ultrasonic thickness calculator</a>.</li></ul>
    </section>
`;
}

// The /practical-ndt crawler intro written in 2026-05 (prerender.mjs base route). Replaced, not
// duplicated, by the "NDT simulator" intro; matched on its opening so nothing else is touched.
const OLD_PRACTICAL_INTRO = /<p><strong>Atlantis Practical NDT<\/strong> is an immersive, game-like 3D skills-practice simulation platform\.[\s\S]*?<\/p>/;

/** Runs right after applySprintRoute. Idempotent (marker). */
export function applyAscanRoute(route) {
  const p = route?.path;
  if (!p || typeof route.bodyContent !== 'string' || route.bodyContent.includes(ASCAN_MARKER)) return route;
  if (p === '/practical-ndt') {
    let body = route.bodyContent;
    const intro = `<p>${esc(H.intro)} <strong>Affordable. Accessible. Fully customizable.</strong></p>`;
    if (OLD_PRACTICAL_INTRO.test(body)) body = body.replace(OLD_PRACTICAL_INTRO, intro + practicalCalloutHtml());
    else body = body.replace(/<\/h1>/i, (m) => `${m}\n    ${intro}${practicalCalloutHtml()}`);
    ascanStats.practical++;
    return { ...route, bodyContent: body };
  }
  if (p === '/tools') {
    const body = route.bodyContent;
    const h1 = body.search(/<\/h1>/i);
    const pEnd = h1 >= 0 ? body.indexOf('</p>', h1) : -1;
    const html = toolsHubHtml();
    ascanStats.tools++;
    return { ...route, bodyContent: pEnd >= 0 ? body.slice(0, pEnd + 4) + html + body.slice(pEnd + 4) : body.replace(/<\/main>/i, `${html}</main>`) };
  }
  return route;
}

/** Copy + link guard. knownPaths (BUILT_PATHS) is optional: without it only the copy is checked. */
export function assertAscanClean(knownPaths) {
  const html = ascanToolBody() + practicalCalloutHtml() + toolsHubHtml();
  const blob = JSON.stringify(T) + html;
  const bad = [];
  if (/[$£€₹]\s?\d|\b(?:USD|INR|AED|SAR)\s?\d|\bper (?:day|hour|seat|user|month)\b/i.test(plain(blob))) bad.push('pricing pattern');
  for (const [, re] of PRACTICAL_CLAIM_RULES) if (re.test(blob)) bad.push(`first/only claim: ${blob.match(re)[0]}`);
  if (/\b(?:revolutionary|world-class|leading|best-in-class|unmatched)\b/i.test(blob)) bad.push('hype word');
  if (T.title.length > 60) bad.push(`title ${T.title.length} chars`);
  if (T.description.length < 140 || T.description.length > 155) bad.push(`description ${T.description.length} chars`);
  const words = ascanToolBody().replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  if (words < 900) bad.push(`tool page only ${words} words`);
  if (knownPaths) {
    for (const m of html.matchAll(/href="(\/[^"#?]*)/g)) {
      const base = m[1].replace(/\/$/, '') || '/';
      if (base !== T.path && !knownPaths.has(base)) bad.push(`link target not built: ${m[1]}`);
    }
  }
  if (bad.length) throw new Error(`ascan-simulator-2026-10: ${[...new Set(bad)].join('; ')}`);
  return true;
}
