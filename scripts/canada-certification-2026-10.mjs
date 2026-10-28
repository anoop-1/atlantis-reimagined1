// Canadian training pages — 2026-10-16 (geo honesty workstream); ASNT SNT-TC-1A
// offer added 2026-10-17 on the owner's request ("Canadian pages should also offer
// ASNT SNT-TC-1A … include ASNT SNT-TC-1A based training and certification there").
//
// Crawler layer of src/components/CanadaCertificationBlock.tsx. Both read
// src/data/canada-certification-2026-10.json (copy, titles, metas, H1s) and the
// shared helpers in src/data/canada-certification-2026-10.mjs, so visitors and
// crawlers see the same text (CLAUDE.md §19.1 / §46.3). Called from
// applyTrainingReleaseRoute in scripts/training-release-2026-10.mjs; the data gate
// runs from assertTrainingReleaseClean, and assertCanadaPagesBuilt() checks the
// written dist HTML once the route loop has finished.
//
// What a Canadian training page carries, in this order:
//   1. title / meta description / H1 from the JSON `pages` entry (ASNT SNT-TC-1A visible);
//   2. the SNT-TC-1A offer section (data-canada-snt) near the top;
//   3. the compact CAN/CGSB-48.9712 note (data-canada-certification) directly below it.
// Placement (matches the React layer):
//   - TrainingLocationPage pages (/ndt-training-canada + the nine city pages):
//     directly after the "For Canadian NDT companies" lead block;
//   - everything else (province hubs, /training/* cells, /corporate-ndt-training/*):
//     in front of the first <h2> after the H1 (outside any wrapper that <h2> sits in),
//     else ahead of the late link blocks, else before </main>.
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { canadaPageMeta, firstH2InsertIndex, isCanadaTrainingPath } from '../src/data/canada-certification-2026-10.mjs';

export const CANADA_CERT = JSON.parse(readFileSync(join(process.cwd(), 'src/data/canada-certification-2026-10.json'), 'utf-8'));

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const attr = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');

export const canadaCertStats = { pages: 0, afterLead: 0, beforeFirstH2: 0, beforeLate: 0, beforeMainEnd: 0, meta: 0, h1: 0 };

export function isCanadaCertificationPath(path) {
  return isCanadaTrainingPath(CANADA_CERT, path);
}

/** { title, description, h1 } for a Canadian training page, or null. */
export function canadaMetaFor(path) {
  return canadaPageMeta(CANADA_CERT, path);
}

const linkTail = (text, href) => (href && text ? ` <a href="${attr(href)}"${/^https?:/.test(href) ? ' rel="noopener"' : ''}>${esc(text)}</a>.` : '');

/** The SNT-TC-1A offer section. */
export function canadaSntOfferHtml() {
  const o = CANADA_CERT.offer;
  const services = o.services.map(([t, href, d]) => `<li><strong><a href="${attr(href)}">${esc(t)}</a></strong>: ${esc(d)}</li>`).join('');
  const who = o.who.map(([t, d]) => `<li><strong>${esc(t)}.</strong> ${esc(d)}</li>`).join('');
  const forList = o.for.map(([t, d, lt, href]) => `<li><strong>${esc(t)}.</strong> ${esc(d)}${linkTail(lt, href)}</li>`).join('');
  return `
    <section id="${o.id}" data-canada-snt="2026-10" aria-labelledby="${o.id}-h">
      <h2 id="${o.id}-h">${esc(o.h2)}</h2>
      <p>${esc(o.intro)}</p>
      <h3>${esc(o.servicesH3)}</h3>
      <ul>${services}</ul>
      <h3>${esc(o.whoH3)}</h3>
      <ul>${who}</ul>
      <h3>${esc(o.forH3)}</h3>
      <p>${esc(o.forIntro)}</p>
      <ul>${forList}</ul>
      <h3>${esc(o.howH3)}</h3>
      <p>${esc(o.how)}</p>
      <p><a href="${attr(o.ctaHref)}"><strong>${esc(o.ctaText)}</strong></a>${esc(o.ctaAfter)}</p>
    </section>`;
}

/** The compact CAN/CGSB-48.9712 note (below the offer). */
export function canadaCertNoteHtml() {
  const c = CANADA_CERT.cert;
  const points = c.points.map(([t, d, lt, href]) => `<p><strong>${esc(t)}.</strong> ${esc(d)}${linkTail(lt, href)}</p>`).join('');
  const sources = c.sources.map(([t, href]) => `<li><a href="${attr(href)}" rel="noopener">${esc(t)}</a></li>`).join('');
  return `
    <section id="${c.id}" data-canada-certification="2026-10" aria-labelledby="${c.id}-h">
      <h2 id="${c.id}-h">${esc(c.h2)}</h2>
      <p>${esc(c.intro)}</p>
      ${points}
      <p>${esc(c.sourcesLabel)}:</p>
      <ul>${sources}</ul>
    </section>`;
}

/** Offer first, then the CAN/CGSB-48.9712 note. */
export function canadaCertificationHtml() {
  return canadaSntOfferHtml() + canadaCertNoteHtml();
}

const LATE_BLOCK = /<(?:nav|section)\b[^>]*(?:data-keyword-links|data-next-steps|data-cycle|data-coverage|data-cta="training-enquiry"|data-course-next-step)[^>]*>/i;

/** Insert the offer + note into a body. Idempotent. */
export function insertCanadaCertification(body) {
  if (typeof body !== 'string' || body.includes('data-canada-snt=')) return body;
  const html = canadaCertificationHtml();
  const lead = body.indexOf('data-training-release="canada-lead"');
  if (lead >= 0) {
    const end = body.indexOf('</section>', lead);
    if (end >= 0) {
      const at = end + '</section>'.length;
      canadaCertStats.afterLead++;
      return body.slice(0, at) + html + body.slice(at);
    }
  }
  const mainEnd = body.lastIndexOf('</main>');
  const mainAt = body.search(/<main[\s>]/i);
  const h1End = body.indexOf('</h1>', mainAt >= 0 ? mainAt : 0);
  const from = h1End >= 0 ? h1End + 5 : (mainAt >= 0 ? body.indexOf('>', mainAt) + 1 : 0);
  const at = firstH2InsertIndex(body, from, mainEnd);
  if (at >= 0) {
    canadaCertStats.beforeFirstH2++;
    return body.slice(0, at) + html + '\n    ' + body.slice(at);
  }
  const m = LATE_BLOCK.exec(body);
  if (m && (mainEnd < 0 || m.index < mainEnd)) {
    canadaCertStats.beforeLate++;
    return body.slice(0, m.index) + html + '\n    ' + body.slice(m.index);
  }
  if (mainEnd >= 0) {
    canadaCertStats.beforeMainEnd++;
    return body.slice(0, mainEnd) + html + '\n  ' + body.slice(mainEnd);
  }
  canadaCertStats.beforeMainEnd++;
  return body + html;
}

/** Replace the first <h1> inside <main> (or the first <h1>) with the page's H1. */
function setMainH1(body, h1) {
  const mainAt = body.search(/<main[\s>]/i);
  const rx = /<h1(\s[^>]*)?>[\s\S]*?<\/h1>/i;
  const scope = mainAt >= 0 ? body.slice(mainAt) : body;
  const m = rx.exec(scope);
  if (!m) return { body, changed: false };
  const at = (mainAt >= 0 ? mainAt : 0) + m.index;
  const next = `<h1${m[1] || ''}>${esc(h1)}</h1>`;
  if (m[0] === next) return { body, changed: false };
  return { body: body.slice(0, at) + next + body.slice(at + m[0].length), changed: true };
}

/** Route-level hook: offer + note in the body, and the page's title, meta and H1. */
export function applyCanadaCertification(route) {
  if (!route || !isCanadaCertificationPath(route.path) || typeof route.bodyContent !== 'string') return route;
  let body = insertCanadaCertification(route.bodyContent);
  const out = { ...route };
  if (body !== route.bodyContent) canadaCertStats.pages++;
  const meta = canadaMetaFor(route.path);
  if (meta) {
    const h = setMainH1(body, meta.h1);
    if (h.changed) { body = h.body; canadaCertStats.h1++; }
    if (route.title !== meta.title || route.description !== meta.description) canadaCertStats.meta++;
    out.title = meta.title;
    out.ogTitle = meta.title;
    out.description = meta.description;
    out.ogDesc = meta.description;
  }
  out.bodyContent = body;
  return out;
}

// Paths that must exist; the /training/* industry cells and the corporate pages are covered when built.
const REQUIRED = (p) => p.startsWith('/ndt-training-');

const TITLE_MAX = 60;
const DESC_MIN = 140;
const DESC_MAX = 155;

/** Data gate (runs before the route loop): copy facts, offer present, metas sized, no prices, links built. */
export function assertCanadaCertificationClean(BUILT_PATHS) {
  const errs = [];
  const c = CANADA_CERT;
  const blob = JSON.stringify(c, (k, v) => (k.startsWith('_') ? undefined : v));
  const offer = JSON.stringify(c.offer || {});
  const note = JSON.stringify(c.cert || {});
  const must = [
    [note, /not a Recognized Training Organization for NRCan or CWB Group/, 'the plain not-an-RTO statement'],
    [note, /do not count toward NRCan or CWB certification/, 'the courses-do-not-count statement'],
    [note, /ceased operations on April 1, 2026/, 'the CGSB closure note'],
    [note, /NRCan NDTCB\) or CWB Group/, 'NRCan or CWB as the certifier'],
    [note, /authorized-examination-centres-ndt-certification/, 'the NRCan AEC list link'],
    // the SNT-TC-1A offer (owner, 2026-10-17): training, Level III prep, employer certification, who certifies
    [offer, /ASNT SNT-TC-1A Level I and Level II courses in UT, RT, MT, PT and VT/, 'SNT-TC-1A Level I and II training in the five methods'],
    [offer, /PAUT and TOFD/, 'the PAUT and TOFD courses'],
    [offer, /Level III exam preparation/, 'Level III exam preparation'],
    [offer, /outside-agency Level III/, 'the outside-agency Level III service'],
    [offer, /general, specific and practical examinations/, 'the general, specific and practical examinations'],
    [offer, /written practice/, 'the employer written practice'],
    [offer, /Your employer certifies you/, 'who certifies under SNT-TC-1A (the employer)'],
    [offer, /ASNT examines and certifies you/, 'who certifies under ASNT central certification (ASNT)'],
    [offer, /never certifies anyone/, 'a course never certifies anyone'],
    [offer, /Practical NDT simulator and in person at your facility/, 'how practicals run'],
    
    [offer, /nuclear supply-chain and US-code work/, 'the nuclear scope (supply chain and US-code work only)'],
  ];
  for (const [text, rx, what] of must) if (!rx.test(text)) errs.push(`missing ${what}`);
  const wrong = [
    /certified by (?:the )?CGSB/i, /CGSB[- ]certif/i, /issued by (?:the )?(?:CGSB|Canadian General Standards Board)/i,
    /administered by (?:the )?(?:CGSB|Canadian General Standards Board)/i, /\bCGSB certification\b/i,
  ];
  for (const rx of wrong) if (rx.test(blob)) errs.push(`CGSB presented as the certifier: ${rx}`);
  // never imply SNT-TC-1A is accepted for CANDU in-service inspection, or that Atlantis is an RTO / certifies
  const overreach = [
    /SNT-TC-1A[^."]{0,80}\b(?:accepted|recognized|recognised)\b[^."]{0,40}\bCANDU\b/i,
    /\bAtlantis(?: NDT)? (?:is|are) (?:an? )?(?:NRCan |CWB )?Recognized Training Organization/i,
    /\bAtlantis(?: NDT)? (?:certifies|issues certificates)\b/i,
    /\b(?:cohorts?|intakes?|course dates|scheduled sessions?)\b/i,
  ];
  for (const rx of overreach) if (rx.test(offer)) errs.push(`offer overreaches: ${rx}`);
  const money = blob.match(/(?:\$|USD|CAD|C\$)\s?\d/g);
  if (money) errs.push(`currency figure in Canada copy: ${[...new Set(money)].join(', ')}`);
  // titles / metas / H1s
  for (const p of c.paths) {
    const m = c.pages && c.pages[p];
    if (!m) { errs.push(`${p}: no title/description/H1 entry in pages`); continue; }
    if (!/SNT-TC-1A/.test(m.title || '')) errs.push(`${p}: title lacks SNT-TC-1A`);
    if ((m.title || '').length > TITLE_MAX) errs.push(`${p}: title ${m.title.length} > ${TITLE_MAX}`);
    const dl = (m.description || '').length;
    if (dl < DESC_MIN || dl > DESC_MAX) errs.push(`${p}: description ${dl} outside ${DESC_MIN}-${DESC_MAX}`);
    if (!/SNT-TC-1A/.test(m.description || '')) errs.push(`${p}: description lacks SNT-TC-1A`);
    if (!/SNT-TC-1A/.test(m.h1 || '')) errs.push(`${p}: H1 lacks SNT-TC-1A`);
    if (/within one business day|within 24 hours/i.test(`${m.title} ${m.description}`)) errs.push(`${p}: turnaround promise in the snippet`);
  }
  for (const p of Object.keys(c.pages || {})) if (!c.paths.includes(p)) errs.push(`pages has ${p}, which is not in paths`);
  const titles = c.paths.map((p) => c.pages[p] && c.pages[p].title).filter(Boolean);
  const dupT = titles.filter((t, i) => titles.indexOf(t) !== i);
  if (dupT.length) errs.push(`duplicate titles: ${[...new Set(dupT)].join(' | ')}`);
  // insertion self-test on the three body shapes (lead, top-level h2, h2 inside a section)
  const probe = [
    '<main><h1>x</h1><p>a</p><section data-training-release="canada-lead"><h2>l</h2></section><h2>b</h2></main>',
    '<main><h1>x</h1><p>a</p><h2>b</h2></main>',
    '<main><h1>x</h1><p>a</p><section data-citation-block="facet"><h2>b</h2></section></main>',
  ];
  const statsBefore = { ...canadaCertStats };
  for (const b of probe) {
    const out = insertCanadaCertification(b);
    Object.assign(canadaCertStats, statsBefore); // the self-test does not count as pages
    const o = out.indexOf('data-canada-snt=');
    const n = out.indexOf('data-canada-certification=');
    const firstOtherH2 = out.indexOf('<h2>b</h2>');
    if (o < 0 || n < o || (firstOtherH2 >= 0 && firstOtherH2 < o) || /<section data-citation-block="facet">\s*<section/.test(out)) errs.push(`insertion self-test failed on ${b.slice(0, 60)}…`);
  }
  if (BUILT_PATHS) {
    for (const p of c.paths) if (REQUIRED(p) && !BUILT_PATHS.has(p)) errs.push(`Canada training path not built: ${p}`);
    const hrefs = [...c.offer.services.map((s) => s[1]), c.offer.ctaHref, ...c.cert.points.map((x) => x[3]).filter(Boolean)];
    for (const href of hrefs) {
      if (!href || /^https?:/.test(href)) continue;
      const p = href.split('?')[0];
      if (p !== '/contact' && !BUILT_PATHS.has(p)) errs.push(`Canada block links to a page that is not built: ${p}`);
    }
  }
  if (errs.length) throw new Error('Canada certification block gate failed:\n  ' + errs.join('\n  '));
  return true;
}

/**
 * Built-HTML gate (runs after the route loop, on dist): every Canadian training page that
 * was written must carry the SNT-TC-1A offer near the top (no other <h2> in <main> before
 * it except the Canada lead's), the CAN/CGSB-48.9712 note below it, and its JSON title,
 * meta description and H1. Fails the build when a page loses any of them.
 */
export function assertCanadaPagesBuilt(distDir) {
  const errs = [];
  let checked = 0;
  const c = CANADA_CERT;
  const decode = (s) => String(s).replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
  for (const p of c.paths) {
    const file = join(distDir, ...p.replace(/^\//, '').split('/'), 'index.html');
    if (!existsSync(file)) { if (REQUIRED(p)) errs.push(`${p}: not written to dist`); continue; }
    checked++;
    const html = readFileSync(file, 'utf-8');
    const meta = c.pages[p];
    const mainAt = html.search(/<main[\s>]/i);
    const main = mainAt >= 0 ? html.slice(mainAt, html.lastIndexOf('</main>') + 7) : html;
    const o = main.indexOf('data-canada-snt="2026-10"');
    const n = main.indexOf('data-canada-certification="2026-10"');
    if (o < 0) { errs.push(`${p}: the ASNT SNT-TC-1A offer is missing`); continue; }
    if (n < o) errs.push(`${p}: the CAN/CGSB-48.9712 note is missing or above the offer`);
    const before = main.slice(0, o);
    const leadAt = before.indexOf('data-training-release="canada-lead"');
    const leadEnd = leadAt >= 0 ? before.indexOf('</section>', leadAt) : -1;
    const outsideLead = leadAt >= 0 && leadEnd >= 0 ? before.slice(0, leadAt) + before.slice(leadEnd) : before;
    const h2Before = (outsideLead.match(/<h2[\s>]/gi) || []).length;
    if (h2Before > 0) errs.push(`${p}: the offer is not near the top (${h2Before} other <h2> above it)`);
    const t = (html.match(/<title>([^<]*)<\/title>/) || [])[1];
    if (decode(t || '') !== meta.title) errs.push(`${p}: <title> "${t}" is not the JSON title`);
    const d = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1];
    if (decode(d || '') !== meta.description) errs.push(`${p}: meta description is not the JSON description`);
    const h1 = (main.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1];
    if (decode(String(h1 || '').replace(/<[^>]+>/g, '')).trim() !== meta.h1) errs.push(`${p}: H1 is not the JSON H1`);
  }
  if (errs.length) throw new Error(`Canada training pages gate failed (${checked} built pages checked):\n  ` + errs.join('\n  '));
  return `🍁 Canada training pages: ${checked} built pages carry the ASNT SNT-TC-1A offer near the top, the CAN/CGSB-48.9712 note, and their SNT-TC-1A title, meta and H1`;
}
