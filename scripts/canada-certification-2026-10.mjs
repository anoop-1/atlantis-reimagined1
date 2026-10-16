// Canada certification block — 2026-10-16 (geo honesty workstream).
//
// Crawler layer of src/components/CanadaCertificationBlock.tsx. Both read
// src/data/canada-certification-2026-10.json, so visitors and crawlers see the
// same copy (CLAUDE.md §19.1 / §46.3). Called from applyTrainingReleaseRoute in
// scripts/training-release-2026-10.mjs (no extra hook in prerender.mjs), and
// asserted from assertTrainingReleaseClean.
//
// Placement matches the React layer:
//   - TrainingLocationPage pages (/ndt-training-canada + the nine city pages):
//     directly after the "For Canadian NDT companies" lead block.
//   - Geo hub province pages and the /training/* industry cells: after the page's
//     own content, ahead of the late link blocks (related links, next steps,
//     coverage, the training enquiry CTA), else before </main>.
import { readFileSync } from 'fs';
import { join } from 'path';

export const CANADA_CERT = JSON.parse(readFileSync(join(process.cwd(), 'src/data/canada-certification-2026-10.json'), 'utf-8'));

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const attr = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');

export const canadaCertStats = { pages: 0, afterLead: 0, beforeLate: 0, beforeMainEnd: 0 };

export function isCanadaCertificationPath(path) {
  return CANADA_CERT.paths.includes(path);
}

export function canadaCertificationHtml() {
  const c = CANADA_CERT;
  const head = c.columns.map((h) => `<th scope="col">${esc(h)}</th>`).join('');
  const rows = c.rows.map(([label, a, b]) => `<tr><th scope="row">${esc(label)}</th><td>${esc(a)}</td><td>${esc(b)}</td></tr>`).join('');
  const points = c.points.map(([t, d]) => `<p><strong>${esc(t)}.</strong> ${esc(d)}</p>`).join('');
  const offer = c.offer.map(([t, href, d]) => `<li><strong><a href="${attr(href)}">${esc(t)}</a></strong>: ${esc(d)}</li>`).join('');
  const sources = c.sources.map(([t, href]) => `<li><a href="${attr(href)}" rel="noopener">${esc(t)}</a></li>`).join('');
  return `
    <section id="${c.id}" data-canada-certification="2026-10" aria-labelledby="${c.id}-h">
      <h2 id="${c.id}-h">${esc(c.h2)}</h2>
      <p>${esc(c.intro)}</p>
      <table><caption>${esc(c.tableCaption)}</caption><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table>
      ${points}
      <h3>${esc(c.offerH3)}</h3>
      <ul>${offer}</ul>
      <h3>${esc(c.examsH3)}</h3>
      <p>${esc(c.exams)}</p>
      <p>${esc(c.sourcesLabel)}:</p>
      <ul>${sources}</ul>
    </section>`;
}

const LATE_BLOCK = /<(?:nav|section)\b[^>]*(?:data-keyword-links|data-next-steps|data-cycle|data-coverage|data-cta="training-enquiry"|data-course-next-step)[^>]*>/i;

/** Insert the block into a body. Idempotent. */
export function insertCanadaCertification(body) {
  if (typeof body !== 'string' || body.includes('data-canada-certification=')) return body;
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

export function applyCanadaCertification(route) {
  if (!route || !isCanadaCertificationPath(route.path) || typeof route.bodyContent !== 'string') return route;
  const body = insertCanadaCertification(route.bodyContent);
  if (body === route.bodyContent) return route;
  canadaCertStats.pages++;
  return { ...route, bodyContent: body };
}

// Paths that must exist; the /training/* industry cells are covered when built.
const REQUIRED = (p) => p.startsWith('/ndt-training-');
// (/training/* cells and /corporate-ndt-training/* pages are covered when built.)

/** Build gate: copy facts present, no CGSB-as-certifier wording, no prices, links built. */
export function assertCanadaCertificationClean(BUILT_PATHS) {
  const errs = [];
  const c = CANADA_CERT;
  const blob = JSON.stringify(c, (k, v) => (k.startsWith('_') ? undefined : v));
  const must = [
    [/not a Recognized Training Organization for NRCan or CWB Group/, 'the plain not-an-RTO statement'],
    [/do not count toward NRCan or CWB certification/, 'the courses-do-not-count statement'],
    [/ceased operations on April 1, 2026/, 'the CGSB closure note'],
    [/NRCan NDTCB\) or CWB Group/, 'NRCan or CWB as the certifier'],
    [/authorized-examination-centres-ndt-certification/, 'the NRCan AEC list link'],
  ];
  for (const [rx, what] of must) if (!rx.test(blob)) errs.push(`missing ${what}`);
  const wrong = [
    /certified by (?:the )?CGSB/i, /CGSB[- ]certif/i, /issued by (?:the )?(?:CGSB|Canadian General Standards Board)/i,
    /administered by (?:the )?(?:CGSB|Canadian General Standards Board)/i, /\bCGSB certification\b/i,
  ];
  for (const rx of wrong) if (rx.test(blob)) errs.push(`CGSB presented as the certifier: ${rx}`);
  const money = blob.match(/(?:\$|USD|CAD|C\$)\s?\d/g);
  if (money) errs.push(`currency figure in Canada copy: ${[...new Set(money)].join(', ')}`);
  if (BUILT_PATHS) {
    for (const p of c.paths) if (REQUIRED(p) && !BUILT_PATHS.has(p)) errs.push(`Canada training path not built: ${p}`);
    for (const [, href] of c.offer) {
      const p = href.split('?')[0];
      if (p !== '/contact' && !BUILT_PATHS.has(p)) errs.push(`Canada block links to a page that is not built: ${p}`);
    }
  }
  if (errs.length) throw new Error('Canada certification block gate failed:\n  ' + errs.join('\n  '));
  return true;
}
