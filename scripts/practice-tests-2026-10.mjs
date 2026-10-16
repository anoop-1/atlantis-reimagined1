/**
 * NDT practice tests — build side (2026-10-16).
 * ─────────────────────────────────────────────────────────────────────────────
 * Data: src/data/practice-tests/<method>-level-<n>.json (one canonical page per set, 30 original
 * questions each). Rendering: src/data/practice-tests/index.mjs (pure functions, also used by the
 * React hub page). This module reads the files at build time — no question text is copied here.
 *
 *   PRACTICE_SETS               validated sets in display order (the import FAILS on any schema error,
 *                               so generate-blogs-index, emit-content-json and prerender all stop)
 *   practiceTestUpgrades()      { [canonicalPath]: { title, description, html, replace: true, … } },
 *                               merged into the editorial upgrades map (scripts/editorial-upgrades.mjs)
 *                               that feeds BOTH editorialBlogRecord() (BlogDetail's per-slug JSON) and
 *                               applyEditorialQuality() (the published crawler HTML).
 *   practiceTestHubRoute()      /ndt-practice-tests crawler route (same model as src/pages/NdtPracticeTests.tsx)
 *   assertPracticeTestsClean()  every link target built, canonicals built, retired paths 301 to their
 *                               canonical in vercel.json and not built, no FAQ-shaped markup, no prices
 *
 * Blocks owned by other modules are embedded from their own renderers, never re-typed: the course
 * next step (src/data/course-next-step-2026-10.mjs) and the inspection/Level III context block
 * (scripts/inspection-l3.mjs). Their markers make the React wrappers in BlogDetail skip them, so
 * the React blog JSON and the crawler HTML stay identical.
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  PRACTICE_HUB, validatePracticeSet, practiceSetWarnings, sortSets, practiceTestPageHtml,
  practiceHubModel, practiceHubHtml, practiceHubSchema, practiceHubTargets, PRACTICE_TEST_MARKER,
} from '../src/data/practice-tests/index.mjs';
import { courseNextStepHtml } from '../src/data/course-next-step-2026-10.mjs';
import { INSPECTION_L3_DATA, contextBlockHtml } from './inspection-l3.mjs';
import { extractVisibleFaqs } from './seo-postpass.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIR = join(ROOT, 'src/data/practice-tests');
const SET_FILE = /^[a-z0-9]+-level-\d+\.json$/;

/** Retired pages that are not a set's own duplicate: path → destination. */
export const EXTRA_RETIRED = {
  '/blog/ndt-2027-best-practice-questions-curated': PRACTICE_HUB.path,
};

export const practiceTestStats = { sets: 0, questions: 0, upgrades: 0, hub: 0, warnings: [] };

function loadSets() {
  const files = readdirSync(DIR).filter((f) => SET_FILE.test(f)).sort();
  const errors = [];
  const sets = [];
  for (const f of files) {
    let set;
    try { set = JSON.parse(readFileSync(join(DIR, f), 'utf-8')); } catch (e) { errors.push(`${f}: invalid JSON (${e.message})`); continue; }
    errors.push(...validatePracticeSet(set, f));
    if (set && `${set.id}.json` !== f) errors.push(`${f}: id "${set.id}" does not match the file name`);
    sets.push(set);
  }
  if (!sets.length) errors.push('no practice-test sets found in src/data/practice-tests');
  // Cross-set rules: one canonical per set, ids unique site-wide, retired paths owned once.
  const canon = new Map(), qids = new Map(), retired = new Map();
  for (const s of sets) {
    if (canon.has(s.canonicalPath)) errors.push(`${s.id}: canonicalPath also used by ${canon.get(s.canonicalPath)}`);
    canon.set(s.canonicalPath, s.id);
    for (const t of s.topics || []) for (const q of t.questions || []) {
      if (qids.has(q.id)) errors.push(`${s.id}: question id ${q.id} also used in ${qids.get(q.id)}`);
      qids.set(q.id, s.id);
    }
    for (const p of s.retiredPaths || []) {
      if (retired.has(p)) errors.push(`${s.id}: retired path ${p} also listed by ${retired.get(p)}`);
      retired.set(p, s.id);
    }
  }
  for (const s of sets) for (const p of s.retiredPaths || []) if (canon.has(p)) errors.push(`${s.id}: retired path ${p} is another set's canonical page`);
  if (errors.length) throw new Error(`practice-tests: ${errors.length} schema error(s) in src/data/practice-tests:\n  ${errors.join('\n  ')}`);
  return sortSets(sets);
}

export const PRACTICE_SETS = loadSets();
practiceTestStats.sets = PRACTICE_SETS.length;
practiceTestStats.questions = PRACTICE_SETS.reduce((n, s) => n + s.topics.reduce((m, t) => m + t.questions.length, 0), 0);
practiceTestStats.warnings = PRACTICE_SETS.flatMap(practiceSetWarnings);

/** Full page HTML for one set, with the course next step and any context block embedded. */
export function practiceTestPage(set) {
  const path = set.canonicalPath;
  const context = (INSPECTION_L3_DATA.contextBlocks || []).find((b) => b.path === path);
  return practiceTestPageHtml(set, PRACTICE_SETS, {
    afterNote: courseNextStepHtml(path, 'answer'),
    beforeNext: (context ? contextBlockHtml(context) : '') + courseNextStepHtml(path, 'end'),
  });
}

/** Editorial upgrade entries (replace: true) for every set, keyed by canonical path. */
export function practiceTestUpgrades() {
  const out = {};
  for (const set of PRACTICE_SETS) {
    out[set.canonicalPath] = {
      replace: true,
      title: set.title,
      description: set.metaDescription,
      h1: set.h1,
      html: practiceTestPage(set),
      updatedAt: `${set.lastReviewed}T00:00:00Z`,
      // Old "50+ free practice questions" quick-answer box: the rewrite replaces it.
      dropFields: ['quickAnswer'],
      source: 'src/data/practice-tests',
    };
  }
  practiceTestStats.upgrades = Object.keys(out).length;
  return out;
}

export const practiceHub = () => practiceHubModel(PRACTICE_SETS);

/** /ndt-practice-tests crawler route. */
export function practiceTestHubRoute() {
  const model = practiceHub();
  practiceTestStats.hub = 1;
  return {
    path: model.path,
    title: model.title,
    description: model.description,
    canonical: model.canonical,
    bodyContent: `  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/training">Training</a><a href="/blog">Blog</a><a href="/contact">Contact</a></nav></header>
  <main>
${practiceHubHtml(model)}
  </main>`,
    structuredData: practiceHubSchema(model),
  };
}

const internalHrefs = (html) => [...String(html).matchAll(/href="([^"]+)"/g)]
  .map((m) => m[1].replace(/&amp;/g, '&'))
  .filter((h) => h.startsWith('/'))
  .map((h) => h.split(/[?#]/)[0] || '/');

const PRICE = /[$£€₹]\s?\d|\b(?:USD|AED|SAR|INR|CAD|GBP|EUR)\s?\d|\b(?:price|prices|pricing|fee|fees|tuition|discount)\b|\bper (?:day|hour|seat|student)\b|\bday[- ]rate\b/i;
const EXAM_FIGURES = /\b\d+\s*(?:minutes|hours?)\s+(?:to complete|time limit|exam)|\bpass(?:ing)?\s+(?:mark|score|grade)\s+(?:of|is)\s+\d|\b\d+\s*%\s+(?:to pass|pass mark|passing)/i;

/** Retired path → destination from vercel.json (literal sources only). */
function redirectMap() {
  const cfg = JSON.parse(readFileSync(join(ROOT, 'vercel.json'), 'utf-8'));
  return new Map((cfg.redirects || []).filter((r) => !r.has && !/[:*()]/.test(r.source)).map((r) => [r.source, r.destination]));
}

/**
 * Build guard. `knownPaths` = every route prerender will write (after the redirect filter).
 * Throws on: an invalid set; a canonical page or link target that is not built; a retired path
 * that is still built or does not 301 to its canonical in vercel.json; FAQ-shaped markup on a
 * practice page; price wording or real-exam figures in rendered copy.
 */
export function assertPracticeTestsClean(knownPaths) {
  const problems = [];
  for (const s of PRACTICE_SETS) problems.push(...validatePracticeSet(s));
  const redirects = redirectMap();
  const retiredAll = new Map([
    ...PRACTICE_SETS.flatMap((s) => s.retiredPaths.map((p) => [p, s.canonicalPath])),
    ...Object.entries(EXTRA_RETIRED),
  ]);
  for (const [from, to] of retiredAll) {
    if (redirects.get(from) !== to) problems.push(`retired ${from} must 301 to ${to} in vercel.json (found ${redirects.get(from) || 'none'})`);
    if (knownPaths && knownPaths.has(from)) problems.push(`retired ${from} is still a built route`);
  }
  const pages = PRACTICE_SETS.map((s) => [s.canonicalPath, practiceTestPage(s)]);
  const model = practiceHub();
  pages.push([model.path, practiceHubHtml(model)]);
  for (const [path, html] of pages) {
    if (knownPaths && !knownPaths.has(path)) problems.push(`${path} is not a built route`);
    if (knownPaths) for (const href of internalHrefs(html)) if (!knownPaths.has(href)) problems.push(`${path}: link target ${href} is not a built route`);
    for (const href of internalHrefs(html)) if (retiredAll.has(href)) problems.push(`${path}: links to retired ${href}`);
    const text = html.replace(/<[^>]+>/g, ' ');
    if (PRICE.test(text)) problems.push(`${path}: price wording in rendered copy`);
    if (EXAM_FIGURES.test(text)) problems.push(`${path}: real-exam duration or pass-mark figure in rendered copy`);
    // Practice questions are not FAQs: neither FAQPage extractor may find Q&A here.
    if (/<h[34][\s>]/i.test(html)) problems.push(`${path}: <h3>/<h4> markup (FAQ extractor pattern)`);
    const faq = extractVisibleFaqs(html);
    if (faq.length) problems.push(`${path}: visible-Q&A extractor finds ${faq.length} pair(s), e.g. "${faq[0].q.slice(0, 60)}"`);
    if ((html.match(/<h1[\s>]/g) || []).length !== 1) problems.push(`${path}: must contain exactly one <h1>`);
  }
  for (const s of PRACTICE_SETS) if (!practiceTestPage(s).includes(PRACTICE_TEST_MARKER)) problems.push(`${s.canonicalPath}: marker missing`);
  for (const t of practiceHubTargets(model)) if (knownPaths && !knownPaths.has(t.split(/[?#]/)[0])) problems.push(`hub target ${t} is not a built route`);
  if (model.title.length > 60) problems.push(`hub title ${model.title.length} chars (max 60)`);
  if (model.description.length < 140 || model.description.length > 155) problems.push(`hub description ${model.description.length} chars (140-155)`);
  if (problems.length) throw new Error(`practice-tests: ${problems.length} problem(s):\n  ${problems.join('\n  ')}`);
  console.log(`📝 Practice tests: ${practiceTestStats.sets} sets, ${practiceTestStats.questions} questions, hub ${model.path}, ${retiredAll.size} retired paths redirected` +
    (practiceTestStats.warnings.length ? ` · notes: ${practiceTestStats.warnings.join('; ')}` : ''));
  return true;
}

