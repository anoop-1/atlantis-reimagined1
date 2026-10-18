// /ndt-training-online — 2026-10-18 (training.md §5.5; owner: no live online classes, US fees allowed here).
//
// Crawler side of the "Online NDT courses by method" table (src/data/online-training-2026-10.json,
// also rendered by src/pages/ndt-training-online.tsx), plus removal of the generic template blocks
// the corePages shorthand wrapper adds to this owner page ("Atlantis NDT Integrated Stack",
// "Code Stack + Compliance", "Delivery Model + Free Consultation": a 24-hour turnaround, an
// ISO 9001 claim and "publishes no pricing" beside published US fees). Called from
// applyTrainingReleaseRoute; the approved US fee table fills the slot after the course table.
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const readJson = (p) => JSON.parse(readFileSync(join(ROOT, p), 'utf-8'));
export const ONLINE = readJson('src/data/online-training-2026-10.json');
const HOURS = readJson('src/data/snt-tc-1a-hours.json');
export const ONLINE_PATH = ONLINE.path;
export const ONLINE_MARKER = 'data-online-courses';
const TRAINING_FEES_SLOT = '<!--training-fees-slot-->'; // same token as scripts/approved-pricing.mjs

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Rows: [method name, L1, L2, start, format, practical, [href, label]] — hours from snt-tc-1a-hours.json. */
export function onlineCourseRows() {
  return ONLINE.methods.map(([k, href, label]) => {
    if (!HOURS.classroom[k]) throw new Error(`online-training: snt-tc-1a-hours.json has no ${k} row`);
    return [HOURS.methodNames[k] || k, HOURS.classroom[k][0], HOURS.classroom[k][1], ONLINE.start, ONLINE.format, ONLINE.practical, [href, label]];
  });
}

export function onlineCoursesHtml() {
  const rows = onlineCourseRows().map((r) => `<tr><th scope="row">${esc(r[0])}</th>${r.slice(1, 6).map((c) => `<td>${esc(c)}</td>`).join('')}<td><a href="${esc(r[6][0])}">${esc(r[6][1])}</a></td></tr>`).join('');
  return `
    <section ${ONLINE_MARKER} aria-labelledby="online-courses-h">
      <h2 id="online-courses-h">${esc(ONLINE.h2)}</h2>
      <p>${esc(ONLINE.intro)}</p>
      <table><caption>${esc(ONLINE.caption)}</caption><thead><tr>${ONLINE.head.map((h) => `<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table>
      <p>${ONLINE.after}</p>
      <p>${esc(ONLINE.feesLead)}</p>
      ${TRAINING_FEES_SLOT}
    </section>`;
}

// The corePages shorthand template (prerender.mjs shorthandWrap) is shared by ~500 pages; on this
// owner page its three generic sections are removed here rather than in the shared wrapper.
const TEMPLATE_SECTIONS = [
  /\s*<h2>Atlantis NDT Integrated Stack<\/h2>\s*<p>[\s\S]*?<\/p>/,
  /\s*<h2>Code Stack \+ Compliance<\/h2>\s*<p>[\s\S]*?<\/p>/,
  /\s*<h2>Delivery Model \+ Free Consultation<\/h2>\s*<p>[\s\S]*?<\/p>/,
];

export function applyOnlineTraining(path, body) {
  if (path !== ONLINE_PATH || typeof body !== 'string') return body;
  let b = body;
  for (const rx of TEMPLATE_SECTIONS) b = b.replace(rx, '');
  if (!b.includes(ONLINE_MARKER)) {
    const ptr = b.indexOf('data-training-release="near-me-pointer"');
    const at = ptr >= 0 ? b.indexOf('</p>', ptr) + 4 : -1;
    b = at > 3 ? b.slice(0, at) + onlineCoursesHtml() + b.slice(at) : b.replace(/<\/main>/i, `${onlineCoursesHtml()}\n  </main>`);
  }
  return b;
}

export function assertOnlineTrainingClean(BUILT_PATHS) {
  const errs = [];
  const html = onlineCoursesHtml();
  const text = html.replace(/<[^>]+>/g, ' ');
  if (/\blive\b|\breplays?\b|\bcohorts?\b|\$\s?\d/i.test(text)) errs.push('forbidden wording or an amount in the online course table');
  if (BUILT_PATHS) for (const m of html.matchAll(/href="(\/[^"#?]*)/g)) if (!BUILT_PATHS.has(m[1])) errs.push(`links to a page that is not built: ${m[1]}`);
  if (errs.length) throw new Error('online training table (2026-10-18) gate failed:\n  ' + errs.join('\n  '));
  return true;
}
