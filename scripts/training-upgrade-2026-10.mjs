/**
 * Training upgrade block — crawler HTML side, 2026-10-16.
 * ─────────────────────────────────────────────────────────────────────────────
 * Why: US training pages rank deep (GSC 90d to 2026-10-14: /ndt-level-1-training p69,
 * /ndt-level-2-training p30, /asnt-level-iii-training p66, /ndt-training-online p59,
 * method training pages p73-81) while training landings carry 37.8% of GA4 key events
 * from 8.9% of sessions. The US competitors that rank state who certifies whom, give
 * per-method course detail (hours, outline, what the practical checks) and name the
 * instructor and the practical arrangement. This block gives every Atlantis training
 * page those facts, plainly:
 *   1. Training and certification: who does what (course / employer under SNT-TC-1A /
 *      the ASNT central route)
 *   2. How the practical works (year-round start, theory, Practical NDT simulator,
 *      hands-on at the employer's facility, the employer's practical exam)
 *   3. Who leads the training (founder credential exactly as CLAUDE.md §54 states it)
 * and, on the six national method pages, an SNT-TC-1A hours table read from
 * src/data/snt-tc-1a-hours.json, a course outline, what the employer's practical checks,
 * and next-step links (practice test, practice-test hub, Level III exam prep, hours
 * planner, enquiry).
 *
 * ONE source for both layers: src/data/training-upgrade-2026-10.json, resolved by
 * src/data/training-upgrade-2026-10.mjs, which React (TrainingUpgradeBlock.tsx) also uses.
 * Inserted before the last </main> (idempotent marker data-training-upgrade="2026-10").
 * Prerender handover makes this copy visible to visitors until hydration (§56), so it is
 * held to the same truth rules as React: no prices, no dates, no pass rates, no
 * accreditation, no venue, no "the course certifies you".
 */
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { trainingUpgradeFor, trainingUpgradePaths } from '../src/data/training-upgrade-2026-10.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const read = (p) => JSON.parse(readFileSync(join(__dirname, '..', p), 'utf-8'));
const DATA = read('src/data/training-upgrade-2026-10.json');
const HOURS = read('src/data/snt-tc-1a-hours.json');

export const TRAINING_UPGRADE_MARKER = 'data-training-upgrade="2026-10"';
export const trainingUpgradeStats = { pages: 0, methodPages: 0 };

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const isExternal = (href) => /^https?:\/\//.test(href);
const a = ([href, label]) => `<a href="${esc(href)}"${isExternal(href) ? ' rel="noopener"' : ''}>${esc(label)}</a>`;
const ul = (items) => `<ul>${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`;

/** The block's HTML for a path ('' when the path carries none). */
export function trainingUpgradeHtml(path) {
  const b = trainingUpgradeFor(path, DATA, HOURS);
  if (!b) return '';
  const out = [];
  const m = b.method;
  if (m) {
    out.push(`<h2>${esc(m.topicsH2)}</h2>${ul(m.topics)}`);
    out.push(
      `<h2>${esc(m.hoursH2)}</h2>` +
      `<table><caption>${esc(m.hoursCaption)}</caption>` +
      `<thead><tr>${m.hoursHead.map((h) => `<th scope="col">${esc(h)}</th>`).join('')}</tr></thead>` +
      `<tbody>${m.hoursRows.map(([lvl, c, o]) => `<tr><th scope="row">${esc(lvl)}</th><td>${esc(c)}</td><td>${esc(o)}</td></tr>`).join('')}</tbody></table>`,
    );
    out.push(`<h2>${esc(m.checksH2)}</h2><p>${esc(m.checksIntro)}</p>${ul(m.checks)}`);
  }
  const w = b.who;
  out.push(
    `<h2>${esc(w.h2)}</h2><p>${esc(w.intro)}</p>` +
    w.columns.map((c) => `<h3>${esc(c.h3)}</h3>${ul(c.items)}${c.link ? `<p>${a(c.link)}</p>` : ''}`).join('') +
    `<p>${esc(w.closing)}</p>`,
  );
  const p = b.practical;
  out.push(
    `<h2>${esc(p.h2)}</h2><p>${esc(p.intro)}</p>` +
    `<ol>${p.steps.map(([t, x]) => `<li><strong>${esc(t)}.</strong> ${esc(x)}</li>`).join('')}</ol>` +
    `<h3>${esc(p.trains.h3)}</h3>${ul(p.trains.items)}` +
    `<h3>${esc(p.cannot.h3)}</h3>${ul(p.cannot.items)}` +
    `<p>${esc(p.note)}</p>` +
    `<p>${p.links.map(a).join(' · ')}</p>`,
  );
  const i = b.instructor;
  out.push(
    `<h2>${esc(i.h2)}</h2>` +
    `<p>${esc(i.lead)} ${a(i.authorLink)}.</p>` +
    `<p>${esc(i.verify)} ${a(i.verifyLink)}.</p>` +
    (i.note ? `<p>${esc(i.note)}</p>` : ''),
  );
  if (m) out.push(`<h2>${esc(m.linksH2)}</h2><ul>${m.links.map((l) => `<li>${a(l)}</li>`).join('')}</ul>`);
  return `\n    <section ${TRAINING_UPGRADE_MARKER} aria-label="Training details">\n      ${out.join('\n      ')}\n    </section>\n`;
}

/** Insert the block before the last </main> (else before the footer, else at the end). Idempotent. */
export function applyTrainingUpgradeRoute(route) {
  const path = route?.path;
  if (!path || !DATA.pages[path] || typeof route.bodyContent !== 'string' || route.bodyContent.includes(TRAINING_UPGRADE_MARKER)) return route;
  const html = trainingUpgradeHtml(path);
  if (!html) return route;
  const body = route.bodyContent;
  let at = body.lastIndexOf('</main>');
  if (at < 0) at = body.lastIndexOf('<footer');
  const next = at >= 0 ? body.slice(0, at) + html + body.slice(at) : body + html;
  trainingUpgradeStats.pages++;
  if (DATA.pages[path].method) trainingUpgradeStats.methodPages++;
  return { ...route, bodyContent: next };
}

// ── guards ──────────────────────────────────────────────────────────────────
const PRICE = /[$£€₹]|\bUSD\b|\bpric(?:e|es|ing)\b|\bfees?\b|\btuition\b|\bdiscount/i;
const OUTCOME = /\bpass(?:ing)?[- ]rates?\b|\bguarantee|\baccredit|\bVA[- ](?:approved|benefits|funded)\b|\bGI Bill\b|\bWIOA\b|\bstate[- ](?:licensed|approved)\b|\b(?:job|career) placement\b|\bplacement rates?\b|\bjob[- ]ready\b|\bfirst[- ]time pass/i;
const DATED = [
  /\b(?:next|upcoming)\s+(?:intake|cohort|class|session|course|batch)(?:e?s)?\b/i,
  /\b(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sept?|Oct|Nov|Dec)\.?\s+\d{1,2}(?:st|nd|rd|th)?\b/,
  /\b20\d\d-\d\d-\d\d\b/,
  /\b(?:enrol(?:l)?ment|registration)\s+(?:closes|deadline)\b/i,
  /\bseats?\s+(?:left|remaining|limited)\b/i,
  /\b(?:classes|courses?|cohorts?)\s+(?:start|begin)s?\s+on\b/i,
];
const VENUE = /\b(?:our|Atlantis['’]?s?)\s+(?:own\s+)?(?:training\s+)?(?:cent(?:re|er)|campus|classroom|lab|laboratory|venue|partner site|facility)\b/i;
const CERTIFIES = /\b(?:course|training|Atlantis|we)\s+(?:will\s+)?certif(?:y|ies)\s+(?:you|your)\b|\bcertification (?:is )?included\b|\bget certified (?:online|with us)\b/i;
const FOUNDER_BAD = /\bsix methods\b|\bNAS[- ]?410\b|\bcertificate (?:no\.|number|#)|\b(?:1[2-9]|[2-9]\d)\+?\s*years\b|\b(?:UT|RT|MT|PT|VT)(?:,\s*(?:UT|RT|MT|PT|VT))*,?\s*(?:and\s+)?ET\)|\bCWI\b|\bAuthorized Inspector\b/;

function textOf(b) {
  const parts = [b.who.h2, b.who.intro, b.who.closing, ...b.who.columns.flatMap((c) => [c.h3, ...c.items, ...(c.link ? [c.link[1]] : [])]),
    b.practical.h2, b.practical.intro, b.practical.note, ...b.practical.steps.flat(), b.practical.trains.h3, ...b.practical.trains.items,
    b.practical.cannot.h3, ...b.practical.cannot.items, ...b.practical.links.map((l) => l[1]),
    b.instructor.h2, b.instructor.lead, b.instructor.verify, b.instructor.authorLink[1], b.instructor.verifyLink[1], b.instructor.note || ''];
  if (b.method) {
    const m = b.method;
    parts.push(m.topicsH2, ...m.topics, m.hoursH2, m.hoursCaption, ...m.hoursHead, ...m.hoursRows.map((r) => r[0]), m.checksH2, m.checksIntro, ...m.checks, m.linksH2, ...m.links.map((l) => l[1]));
  }
  return parts.join('\n');
}

function linksOf(b) {
  const links = [...b.practical.links, b.instructor.authorLink, b.instructor.verifyLink, ...b.who.columns.filter((c) => c.link).map((c) => c.link)];
  if (b.method) links.push(...b.method.links);
  return links;
}

/**
 * Build guard: every page carrying the block and every internal link target is a built page;
 * external links only to certification.asnt.org; copy free of prices, outcome/accreditation
 * claims, dated-session wording, venue claims, "the course certifies you", and founder-credential
 * errors; the founder line states exactly the five methods and 11+ years; the hours table is
 * numeric and comes from snt-tc-1a-hours.json.
 */
export function assertTrainingUpgradeClean(knownPaths) {
  const lead = DATA.instructor && DATA.instructor.lead;
  if (!lead || !lead.includes('ASNT NDT Level III (UT, RT, MT, PT, VT)') || !lead.includes('11+ years')) {
    throw new Error('training-upgrade: instructor line must state "ASNT NDT Level III (UT, RT, MT, PT, VT)" and "11+ years"');
  }
  for (const path of trainingUpgradePaths(DATA)) {
    const b = trainingUpgradeFor(path, DATA, HOURS);
    if (knownPaths && !knownPaths.has(path)) throw new Error(`training-upgrade: ${path} is not a built page`);
    const text = textOf(b);
    const fail = (why, hit) => { throw new Error(`training-upgrade: ${why} on ${path}: "${hit}"`); };
    let hit;
    if ((hit = text.match(PRICE))) fail('pricing wording', hit[0]);
    if ((hit = text.match(OUTCOME))) fail('outcome/accreditation claim', hit[0]);
    for (const re of DATED) if ((hit = text.match(re))) fail('dated-session wording', hit[0]);
    if ((hit = text.match(VENUE))) fail('venue/centre claim', hit[0]);
    if ((hit = text.match(CERTIFIES))) fail('"the course certifies" wording', hit[0]);
    if ((hit = text.match(FOUNDER_BAD))) fail('founder-credential rule', hit[0]);
    if (b.method && b.method.key === 'ET' && !(b.instructor.note || '').includes('not one of his')) fail('ET page needs the instructor note', 'ET');
    if (b.method) {
      for (const [, c, o] of b.method.hoursRows) if (!/^\d+$/.test(String(c)) || !/^\d+$/.test(String(o))) fail('non-numeric hours cell', `${c}/${o}`);
      // Numerals only in the hours table: never in the method copy itself.
      const methodCopy = [...b.method.topics, ...b.method.checks].join(' ').replace(/\b(?:ASME|ASTM|API|AWS|ISO|EN|SNT-TC)[- ]?[A-Z]?\d+[A-Z0-9.:-]*/g, '').replace(/SNT-TC-1A/g, '');
      if ((hit = methodCopy.match(/\d/))) fail('numeral in method copy', hit[0]);
    }
    for (const [href] of linksOf(b)) {
      if (isExternal(href)) {
        if (!/^https:\/\/certification\.asnt\.org(?:\/|$)/.test(href)) fail('external link outside certification.asnt.org', href);
        continue;
      }
      const target = href.split(/[?#]/)[0].replace(/\/$/, '') || '/';
      if (knownPaths && !knownPaths.has(target)) fail('link target is not a built page', target);
    }
    // The rendered HTML too: no "$" or dates slip in through templating.
    const html = trainingUpgradeHtml(path);
    if (/[$£€₹]/.test(html)) fail('currency symbol in rendered HTML', '$');
  }
  return true;
}
