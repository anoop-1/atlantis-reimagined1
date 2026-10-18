// /asnt-level-iii-training — cost and exam-preparation sections, 2026-10-18 (training.md §5.3).
//
// One data file, src/data/level3-training-2026-10.json, read here (crawler) and by
// src/components/Level3CostPrepBlock.tsx (React). Called from applyTrainingReleaseRoute
// (scripts/training-release-2026-10.mjs), so prerender.mjs needs no new hook. ASNT exam formats
// and fees come from src/data/asnt-certification-2026-10.json; the Atlantis refresher fees appear
// only through the <!--training-fees-slot--> that scripts/approved-pricing.mjs fills (the path is
// allowlisted in src/data/approved-training-fees.json). The one visible FAQ in the block is added
// to the page's FAQPage, so schema stays equal to what the page shows.
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const readJson = (p) => JSON.parse(readFileSync(join(ROOT, p), 'utf-8'));
export const LEVEL3 = readJson('src/data/level3-training-2026-10.json');
const ASNT = readJson('src/data/asnt-certification-2026-10.json');
export const LEVEL3_PATH = LEVEL3.path;
export const LEVEL3_MARKER = 'data-level3-cost-prep';
const TRAINING_FEES_SLOT = '<!--training-fees-slot-->'; // same token as scripts/approved-pricing.mjs (not imported: pricing-gate PLACEMENT rule)

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const table = (caption, head, rows) => `<table><caption>${esc(caption)}</caption><thead><tr>${head.map((h) => `<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c, i) => (i === 0 ? `<th scope="row">${esc(c)}</th>` : `<td>${esc(c)}</td>`)).join('')}</tr>`).join('')}</tbody></table>`;

const level3Fees = () => ASNT.fees.tables.find((t) => /Level III/.test(t.caption));
const examRows = () => ASNT.level3.exams.map((e) => [e.label, String(e.items), `${e.hours} hours`]);

export function level3BlockHtml() {
  const c = LEVEL3.cost, p = LEVEL3.prep, fees = level3Fees();
  const domains = p.domains.map(([t, d]) => `<li><strong>${esc(t)}.</strong> ${esc(d)}</li>`).join('');
  const faq = LEVEL3.faq.map(([q, a]) => `<h3>${esc(q)}</h3><p>${esc(a)}</p>`).join('');
  return `
    <section ${LEVEL3_MARKER} aria-labelledby="level3-cost">
      <h2 id="level3-cost">${esc(c.h2)}</h2>
      ${c.paras.map((x) => `<p>${esc(x)}</p>`).join('')}
      ${TRAINING_FEES_SLOT}
      <h3>${esc(c.asntH3)}</h3>
      ${table(fees.caption, ASNT.fees.head, fees.rows)}
      <p>Source: <a href="${esc(fees.url)}" rel="noopener">${esc(fees.urlLabel)}</a>. ${esc(c.salaryNote)} <a href="/ndt-level-3-salary">NDT Level 3 salary</a>.</p>
      ${faq}
      <h2 id="level3-prep">${esc(p.h2)}</h2>
      <p>${esc(p.intro)}</p>
      <ol>${domains}</ol>
      <p>${esc(p.examsLead)}</p>
      ${table(ASNT.level3.examsCaption, ASNT.level3.examsHead, examRows())}
      <p>${p.after}</p>
    </section>`;
}

function insertAfterIntro(body, html) {
  const h1End = body.search(/<\/h1>/i);
  if (h1End < 0) return body.replace(/<\/main>/i, `${html}\n  </main>`);
  const after = body.slice(h1End);
  const pEnd = after.search(/<\/p>/i);
  const next = after.search(/<(?:h2|section)[\s>]/i);
  const at = (pEnd >= 0 && (next < 0 || pEnd < next)) ? h1End + pEnd + 4 : h1End + 5;
  return body.slice(0, at) + html + body.slice(at);
}

const questions = () => LEVEL3.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }));

/** Adds the block's visible Q&A to the page's FAQPage (or creates one). */
function withFaq(sd) {
  const add = questions();
  let done = false;
  const walk = (n) => {
    if (Array.isArray(n)) return n.map(walk);
    if (!n || typeof n !== 'object') return n;
    if (n['@type'] === 'FAQPage' && !done) {
      done = true;
      const have = new Set([].concat(n.mainEntity || []).map((q) => q && q.name));
      return { ...n, mainEntity: [...[].concat(n.mainEntity || []), ...add.filter((q) => !have.has(q.name))] };
    }
    return Object.fromEntries(Object.entries(n).map(([k, v]) => [k, walk(v)]));
  };
  const out = sd ? walk(sd) : null;
  if (done) return out;
  const node = { '@type': 'FAQPage', mainEntity: add };
  if (!out) return { '@context': 'https://schema.org', '@graph': [node] };
  if (Array.isArray(out)) return [...out, { '@context': 'https://schema.org', ...node }];
  if (Array.isArray(out['@graph'])) return { ...out, '@graph': [...out['@graph'], node] };
  const { '@context': ctx, ...rest } = out;
  return { '@context': ctx || 'https://schema.org', '@graph': [rest, node] };
}

export function applyLevel3Block(path, body, sd) {
  if (path !== LEVEL3_PATH || typeof body !== 'string' || body.includes(LEVEL3_MARKER)) return { body, sd };
  return { body: insertAfterIntro(body, level3BlockHtml()), sd: withFaq(sd) };
}

export function assertLevel3Clean(BUILT_PATHS) {
  const errs = [];
  const html = level3BlockHtml();
  const text = html.replace(/<[^>]+>/g, ' ');
  if (!level3Fees()) errs.push('no ASNT Level III fee table in asnt-certification-2026-10.json');
  const amounts = text.match(/\$\s?\d[\d,]*/g) || [];
  const asnt = new Set(level3Fees().rows.flatMap((r) => r.slice(1)));
  for (const a of amounts) if (!asnt.has(a)) errs.push(`amount ${a} is not an ASNT fee (Atlantis fees render only from approved-training-fees.json)`);
  if (/\bcohorts?\b|\blive online\b|\breplays?\b|\bwithin 24 hours\b/i.test(text)) errs.push('forbidden wording in the Level III block');
  if (!html.includes(TRAINING_FEES_SLOT)) errs.push('fee slot missing');
  if (BUILT_PATHS) for (const m of html.matchAll(/href="(\/[^"#?]*)/g)) if (!BUILT_PATHS.has(m[1])) errs.push(`links to a page that is not built: ${m[1]}`);
  if (errs.length) throw new Error('Level III training block (2026-10-18) gate failed:\n  ' + errs.join('\n  '));
  return true;
}
