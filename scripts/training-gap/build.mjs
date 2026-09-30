#!/usr/bin/env node
/**
 * Training-gap page builder — 2026-09-29.
 * ─────────────────────────────────────────────────────────────────────────────
 * Source: scripts/training-gap/src/<slug>.html, each opening with a
 * <!--meta {json} --> block followed by the body HTML (no <h1>; the FAQ lives
 * in <section data-faq="1"> as h3/p pairs).
 *
 * Output: src/data/training-gap-pages.json — ONE file read by both layers:
 *   scripts/training-gap-routes-2026-09-29.mjs  (prerender, crawlers)
 *   src/pages/TrainingGapPage.tsx               (React, humans)
 *
 * Rejects (exit 1) a page under its word floor, with a price, "Odoo", the
 * owner's personal address, or an offer of a scheme Atlantis does not train.
 *
 *   node scripts/training-gap/build.mjs
 */
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..', '..');
const SRC = join(__dirname, 'src');
const OUT = join(ROOT, 'src', 'data', 'training-gap-pages.json');

const ep = readFileSync(join(ROOT, 'src/lib/enquiry-endpoint.ts'), 'utf-8');
const FORM = (ep.match(/MS_FORM_URL\s*=[\s\r\n]*'([^']+)'/) || [])[1];
if (!FORM) throw new Error('MS_FORM_URL not found');

const PUBLISHED = '2026-09-29';
const ORDER = [
  'asnt-level-iii-basic-exam-prep',
  'asnt-level-iii-ut-exam-prep',
  'asnt-level-iii-rt-exam-prep',
  'asnt-level-iii-mt-exam-prep',
  'asnt-level-iii-pt-exam-prep',
  'asnt-level-iii-vt-exam-prep',
  'asnt-level-iii-et-exam-prep',
  'asnt-ndt-level-ii-exam-prep',
  'can-you-get-ndt-certified-online',
];

const words = (html) =>
  html.replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').split(/\s+/).filter(Boolean).length;
const strip = (s) => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&sup2;/g, '²').replace(/&nbsp;/g, ' ');

const FORBIDDEN = [
  [/[$£€₹]\s?\d/, 'price'],
  [/odoo/i, 'Odoo'],
  [/anu\.anoop485/i, 'personal email'],
  [/\b(our|atlantis)\b[^.]{0,80}\b(ISO 9712|PCN|CSWIP|CWI|API 510|API 570|API 653)\b[^.]{0,30}\b(training|course)/i, 'non-SNT training offer'],
  [/pass rate/i, 'pass-rate claim'],
  [/training (centre|center)\b/i, 'physical centre wording'],
];

const pages = [];
for (const slug of ORDER) {
  const raw = readFileSync(join(SRC, `${slug}.html`), 'utf-8');
  const m = raw.match(/^<!--meta\s*([\s\S]*?)-->\s*/);
  if (!m) throw new Error(`${slug}: no meta block`);
  const meta = JSON.parse(m[1]);
  let body = raw.slice(m[0].length).trim().replace(/\{\{FORM\}\}/g, FORM);
  if (/<h1[\s>]/i.test(body)) throw new Error(`${slug}: body must not carry an <h1>`);
  const faqSec = body.match(/<section data-faq="1"[\s\S]*?<\/section>/);
  if (!faqSec) throw new Error(`${slug}: no FAQ section`);
  const faqs = [...faqSec[0].matchAll(/<h3>([\s\S]*?)<\/h3>\s*<p>([\s\S]*?)<\/p>/g)].map((x) => ({
    q: decode(strip(x[1])),
    a: decode(strip(x[2])),
  }));
  for (const [re, why] of FORBIDDEN) {
    const hit = body.match(re) || JSON.stringify(meta).match(re);
    if (hit) throw new Error(`${slug}: forbidden (${why}): "${hit[0]}"`);
  }
  const wc = words(body);
  const floor = meta.minWords || 2000;
  if (wc < floor) console.warn(`⚠️  ${slug}: ${wc} words (floor ${floor})`);
  if (meta.title.length > 75) console.warn(`⚠️  ${slug}: title ${meta.title.length} chars`);
  if (meta.description.length > 165) console.warn(`⚠️  ${slug}: description ${meta.description.length} chars`);
  pages.push({ ...meta, slug, publishedAt: PUBLISHED, bodyHtml: body, faqs, words: wc });
  console.log(`${slug}: ${wc} words, ${faqs.length} FAQs`);
}

// ── Cross-link block: every page links to every other page in the family ──
const LABEL = {
  'asnt-level-iii-basic-exam-prep': 'Level III Basic exam prep',
  'asnt-level-iii-ut-exam-prep': 'Level III UT (ultrasonic) exam prep',
  'asnt-level-iii-rt-exam-prep': 'Level III RT (radiographic) exam prep',
  'asnt-level-iii-mt-exam-prep': 'Level III MT (magnetic particle) exam prep',
  'asnt-level-iii-pt-exam-prep': 'Level III PT (liquid penetrant) exam prep',
  'asnt-level-iii-vt-exam-prep': 'Level III VT (visual) exam prep',
  'asnt-level-iii-et-exam-prep': 'Level III ET (electromagnetic) exam prep',
  'asnt-ndt-level-ii-exam-prep': 'ASNT NDT Level II exam prep',
  'can-you-get-ndt-certified-online': 'Can you get NDT certified online?',
};
const l3 = ORDER.filter((s) => s.startsWith('asnt-level-iii-'));
const li = (s) => `<li><a href="/${s}">${LABEL[s]}</a></li>`;
const linkBlockHtml =
  `<section data-block="exam-prep-by-method" aria-label="Exam prep by method">` +
  `<h2>ASNT exam prep by method</h2>` +
  `<p>Atlantis NDT runs live online preparation for each ASNT NDT Level III exam, led by an ASNT Level III. Each page covers the exam structure, what it tests, a week-by-week study plan and the key references.</p>` +
  `<ul>${l3.map(li).join('')}</ul>` +
  `<p>Working toward Level II instead? See <a href="/asnt-ndt-level-ii-exam-prep">ASNT NDT Level II exam prep</a>, and read <a href="/can-you-get-ndt-certified-online">can you get NDT certified online?</a> for what an online course can and cannot give you.</p>` +
  `</section>`;

for (const p of pages) {
  const others = ORDER.filter((s) => s !== p.slug);
  p.relatedHtml =
    `<nav data-block="exam-prep-related" aria-label="Related exam preparation">` +
    `<h2>Related ASNT exam preparation</h2><ul>${others.map(li).join('')}` +
    `<li><a href="/asnt-level-iii-training">ASNT Level III training overview</a></li>` +
    `<li><a href="/ndt-training-online">Online NDT training</a></li>` +
    `<li><a href="/training">All NDT training courses</a></li></ul></nav>`;
}

writeFileSync(OUT, JSON.stringify({ generated: PUBLISHED, formUrl: FORM, linkBlockHtml, pages }, null, 1) + '\n', 'utf-8');
console.log(`\n✅ ${pages.length} pages → ${OUT}`);
