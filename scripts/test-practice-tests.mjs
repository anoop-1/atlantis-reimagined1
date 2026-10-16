// Practice tests (2026-10-16): module test, no build needed. node scripts/test-practice-tests.mjs
// Optional: --dist <dir> also checks every link target against a built dist/ (run after a build).
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import cheerio from 'cheerio';
import {
  PRACTICE_SETS, practiceTestPage, practiceTestUpgrades, practiceTestHubRoute, practiceHub, EXTRA_RETIRED,
} from './practice-tests-2026-10.mjs';
import { practiceHubHtml, cardLabel, PRACTICE_TEST_MARKER, QUESTIONS_PER_SET, validatePracticeSet } from '../src/data/practice-tests/index.mjs';
import { extractVisibleFaqs } from './seo-postpass.mjs';
import { editorialBlogRecord } from './editorial-blog-data.mjs';
import { applyEditorialQuality } from './editorial-quality-pass.mjs';
import { EDITORIAL_PAGE_UPGRADES } from './editorial-upgrades.mjs';
import { COURSE_NEXT_STEP_PAGES, COURSE_NEXT_STEP_MARKER } from '../src/data/course-next-step-2026-10.mjs';
import { DEPTH_PAGE_ROUTES } from './depth-pages-routes.mjs';

const { load } = cheerio;
const args = process.argv.slice(2);
const DIST = args.includes('--dist') ? args[args.indexOf('--dist') + 1] : null;
const read = (f) => readFileSync(f, 'utf8');
const json = (f) => JSON.parse(read(f));
const REACT_FAQ = /<h3>Q\d+:\s*([\s\S]*?)<\/h3>\s*<p>\s*(?:<strong>A:<\/strong>\s*)?([\s\S]*?)<\/p>/g; // src/data/author-schema.ts buildFAQPageSchema

// 1. Sets: schema, counts.
assert.ok(PRACTICE_SETS.length >= 8, 'eight practice-test sets');
for (const s of PRACTICE_SETS) {
  assert.deepEqual(validatePracticeSet(s), [], `${s.id} valid`);
  assert.equal(s.topics.reduce((n, t) => n + t.questions.length, 0), QUESTIONS_PER_SET, `${s.id} question count`);
}
// Validator rejects bad sets (self-test).
const bad = structuredClone(PRACTICE_SETS[0]);
bad.topics[0].questions[0].options.pop();
bad.topics[0].questions[1].answer = 4;
bad.topics[0].questions[2].q = 'What does <b>this</b> cost in $?';
bad.topics[1].questions[0].id = bad.topics[0].questions[0].id;
const errs = validatePracticeSet(bad).join('\n');
for (const want of ['exactly 4 options', 'answer must be an integer', 'HTML in a plain-text field', 'price or fee wording', 'duplicate id']) assert.ok(errs.includes(want), `validator catches: ${want}`);

// 2. Practice markup is not FAQ markup (crawler extractor and React extractor), extractor control works.
const control = '<main><h3>What is a written practice?</h3><p>A written practice is the employer document that sets out how NDT personnel are trained, examined and certified under SNT-TC-1A.</p><h3>Who approves it?</h3><p>The employer’s responsible Level III approves the written practice and the procedures that sit under it, before anyone is certified.</p></main>';
assert.ok(extractVisibleFaqs(control).length === 2, 'FAQ extractor control finds visible Q&A');
const hubHtml = practiceHubHtml(practiceHub());
for (const [path, html] of [...PRACTICE_SETS.map((s) => [s.canonicalPath, practiceTestPage(s)]), ['/ndt-practice-tests', hubHtml]]) {
  assert.deepEqual(extractVisibleFaqs(html), [], `${path}: no FAQ pairs`);
  assert.equal([...html.matchAll(REACT_FAQ)].length, 0, `${path}: no React FAQ pattern`);
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, `${path}: one h1`);
}

// 3. Page content: every question, options A-D, answer inside <details>, note, next steps.
for (const s of PRACTICE_SETS) {
  const $ = load(practiceTestPage(s));
  assert.equal($('.ptq-question').length, QUESTIONS_PER_SET, `${s.id}: questions rendered`);
  assert.equal($('.ptq-options').first().children('li').length, 4, `${s.id}: four options`);
  assert.equal($('details.ptq-answer').length, QUESTIONS_PER_SET, `${s.id}: answers in details`);
  assert.equal($('details.ptq-answer summary').first().text(), 'Show answer');
  const q = s.topics[0].questions[0];
  assert.ok($(`#${q.id} details`).text().includes(`Correct answer: ${'ABCD'[q.answer]}.`), `${s.id}: correct letter shown`);
  assert.ok($('section[aria-label="Practice questions, not exam questions"]').length === 1, `${s.id}: note`);
  assert.ok($('a[href="/ndt-practice-tests"]').length >= 1, `${s.id}: links the hub`);
  assert.ok($(`a[href^="/contact?service=training&subject="]`).length === 1, `${s.id}: training enquiry link`);
  assert.equal($('h2').filter((_, e) => s.topics.some((t) => t.name === $(e).text())).length, s.topics.length, `${s.id}: one H2 per topic`);
  assert.ok(!/\b50-Q\b|50\+ (?:free )?(?:practice )?questions/i.test($.text()), `${s.id}: no 50-question promise`);
}

// 4. Both layers: React blog record and published HTML come from the same upgrade entry.
const blogs = json('src/data/blogs.json');
for (const s of PRACTICE_SETS) {
  const u = EDITORIAL_PAGE_UPGRADES[s.canonicalPath];
  assert.ok(u && u.replace, `${s.canonicalPath}: upgrade entry`);
  const slug = s.canonicalPath.replace('/blog/', '');
  const rec = blogs.find((b) => b.slug === slug);
  assert.ok(rec, `${slug}: blogs.json record exists (BlogDetail per-slug JSON)`);
  const r = editorialBlogRecord(rec);
  assert.equal(r.title, s.title); assert.equal(r.metaDescription, s.metaDescription); assert.equal(r.snippet, s.metaDescription);
  assert.equal(r.h1, s.h1); assert.ok(!('quickAnswer' in r), `${slug}: stale quickAnswer dropped`);
  assert.ok(!/<h1/.test(r.content) && r.content.includes(PRACTICE_TEST_MARKER) && r.content.includes(COURSE_NEXT_STEP_MARKER), `${slug}: record content`);
  // Published layer: an old prerendered page goes through the editorial pass.
  const $ = load(`<html><head><title>Old Free 50-Q Mock Exam</title><meta name="description" content="old"><meta property="og:title" content="old"><link rel="canonical" href="https://atlantisndt.com${s.canonicalPath}"><script type="application/ld+json">{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[]}</script></head><body><div id="root"><header><nav><a href="/">Home</a></nav></header><main><article><h1>Old</h1><p>Free 50-Q Mock Exam</p></article></main><section><h2>Products</h2></section><footer>f</footer></div></body></html>`, { decodeEntities: false });
  assert.ok(applyEditorialQuality($, s.canonicalPath));
  assert.equal($('title').text(), s.title); assert.equal($('meta[name="description"]').attr('content'), s.metaDescription);
  assert.equal($('meta[property="og:title"]').attr('content'), s.title);
  assert.equal($('main').length, 1); assert.equal($('h1').length, 1); assert.equal($('h1').text(), s.h1);
  const amp = (h) => h.replace(/&amp;/g, '&'); // cheerio writes &amp; in attributes back as &
  assert.equal(amp($('main').html()), amp(u.html), `${slug}: published main is the upgrade html`);
  assert.ok(!$.html().includes('FAQPage') && !$.html().includes('50-Q'), `${slug}: no FAQPage, no old copy`);
}
// Hub is untouched by the editorial pass.
{
  const r = practiceTestHubRoute();
  const $ = load(`<html><head><title>${r.title}</title></head><body><div id="root">${r.bodyContent}</div></body></html>`, { decodeEntities: false });
  const before = $('main').html();
  applyEditorialQuality($, r.path);
  assert.equal($('main').html(), before, 'hub main unchanged by the editorial pass');
  assert.ok(r.title.length <= 60 && r.description.length >= 140 && r.description.length <= 155, 'hub title/meta lengths');
  assert.ok(!JSON.stringify(r.structuredData).includes('FAQPage'), 'hub has no FAQ schema');
  for (const c of practiceHub().cards) assert.ok(hubHtml.includes(cardLabel(c).replace(/&/g, '&amp;')), `hub card ${c.id}`);
}

// 5. Retired duplicates: four coordinated edits.
const vercel = json('vercel.json');
const redirects = new Map(vercel.redirects.filter((r) => !r.has).map((r) => [r.source, r.destination]));
const retired = new Map([...PRACTICE_SETS.flatMap((s) => s.retiredPaths.map((p) => [p, s.canonicalPath])), ...Object.entries(EXTRA_RETIRED)]);
const routeTable = read('src/RouteTable.tsx');
const depth = json('src/data/depth-pages.json');
const cert = json('src/data/certification-practice.json');
for (const [from, to] of retired) {
  assert.equal(redirects.get(from), to, `301 ${from} -> ${to}`);
  const slug = from.replace('/blog/', '');
  assert.ok(!blogs.some((b) => b.slug === slug), `${from}: removed from blogs.json`);
  assert.ok(!cert.some((b) => b.slug === slug), `${from}: removed from certification-practice.json`);
  assert.ok(!depth.some((p) => p.slug === from) && !DEPTH_PAGE_ROUTES.some((r) => r.path === from), `${from}: removed from depth pages`);
  assert.ok(!routeTable.includes(`path="${from}"`), `${from}: no React route`);
  assert.ok(!COURSE_NEXT_STEP_PAGES.has(from), `${from}: not mapped for a course next step`);
  for (const [file, text] of [['blogs.json', JSON.stringify(blogs)], ['depth-pages.json', JSON.stringify(depth)], ['next-steps', read('src/data/next-steps-2026-10.json')], ['lead-magnets', read('src/data/lead-magnets.json')]]) {
    assert.ok(!new RegExp(`(?:href=\\\\?"|\\]\\(|")${from.replace(/[-/]/g, '\\$&')}(?![a-z0-9-])`).test(text), `${file} still links ${from}`);
  }
}
assert.ok(routeTable.includes('path="/ndt-practice-tests"'), 'hub React route');

// 6. Inbound links to the hub (next-steps data, both layers).
const next = json('src/data/next-steps-2026-10.json').blocks;
for (const p of ['/training', '/ndt-level-2-training', '/asnt-level-iii-training', '/ndt-training-online', '/ultrasonic-testing-training', '/radiographic-testing-training', '/magnetic-particle-testing-training', '/penetrant-testing-training', '/visual-testing-training', '/eddy-current-testing-training']) {
  assert.ok(next[p]?.links.some(([h]) => h === '/ndt-practice-tests'), `${p} links the hub`);
}

// 7. Optional: link targets against a built dist/.
if (DIST) {
  const missing = [];
  const pages = [...PRACTICE_SETS.map((s) => [s.canonicalPath, practiceTestPage(s)]), ['/ndt-practice-tests', hubHtml]];
  for (const [path, html] of pages) for (const [, href] of html.matchAll(/href="(\/[^"#?]*)/g)) {
    if (!existsSync(`${DIST}${href === '/' ? '' : href}/index.html`)) missing.push(`${path} -> ${href}`);
  }
  assert.deepEqual(missing, [], 'every link target exists in dist');
}
console.log(`Practice tests: ${PRACTICE_SETS.length} sets valid, no FAQ markup, both layers from one upgrade entry, ${retired.size} retired paths redirected and removed, hub linked from ${Object.values(next).filter((b) => b.links.some(([h]) => h === '/ndt-practice-tests')).length} pages${DIST ? ', dist link targets OK' : ''}.`);
