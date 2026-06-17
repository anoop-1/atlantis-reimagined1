#!/usr/bin/env node
/**
 * Day-8 — Inject inline <a> anchors into top high-impression pages so the
 * link graph from blog/cert traffic flows into money pages. Cascade fix for
 * Phase-1 Blocker #5 (no inline-anchor cascade from top blog → money).
 *
 * Reuses pattern from inject-related-guides.mjs + inject-toc.mjs (TARGETS map,
 * MARKER idempotency, regex match inside JSX text nodes only).
 *
 * The regex looks for the target phrase between `>` and `<` (JSX text), skips
 * occurrences inside an attribute or existing <a>, and wraps the first
 * `max` occurrences with an underlined <a href>.
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const MARKER = '/* INLINE_ANCHORS_INJECTED_v1 */';
const PROOF_MARKER = '/* INLINE_PROOF_INJECTED_v1 */';

const ANCHOR_CLASS = 'text-primary underline underline-offset-2 hover:opacity-80';

/** Equal-segment-weighted Day-8 anchor plan. Each item:
 *  file, phrase (case-sensitive), href, max occurrences to wrap. */
const PLAN = [
  // ─── Training cluster ─────────────────────────────────────────────────
  { file: 'src/pages/blog/ndt-salary-guide-2026-global.tsx', anchors: [
    { phrase: 'API 510',           href: '/api-510-certification', max: 1 },
    { phrase: 'API 570',           href: '/api-570-certification', max: 1 },
    { phrase: 'API 653',           href: '/api-653-certification', max: 1 },
    { phrase: 'ASNT Level III',    href: '/consulting/asnt-level-iii-consulting-services', max: 1 },
    { phrase: 'ASNT certification', href: '/asnt-certification', max: 1 },
  ]},
  { file: 'src/pages/asnt-certification.tsx', anchors: [
    { phrase: 'SNT-TC-1A',         href: '/blog/asnt-snt-tc-1a-certification-requirements', max: 1 },
    { phrase: 'Level III consulting', href: '/consulting/asnt-level-iii-consulting-services', max: 1 },
    { phrase: 'API 510',           href: '/api-510-certification', max: 1 },
    { phrase: 'API 570',           href: '/api-570-certification', max: 1 },
    { phrase: 'API 653',           href: '/api-653-certification', max: 1 },
  ]},
  { file: 'src/pages/api-510-certification.tsx', anchors: [
    { phrase: 'FFS',               href: '/consulting/api-579-fitness-for-service-services', max: 1 },
    { phrase: 'RBI',               href: '/consulting/rbi-program-design', max: 1 },
    { phrase: 'API 570',           href: '/api-570-certification', max: 1 },
    { phrase: 'API 653',           href: '/api-653-certification', max: 1 },
  ]},
  { file: 'src/pages/api-570-certification.tsx', anchors: [
    { phrase: 'CUI',               href: '/blog/corrosion-under-insulation', max: 1 },
    { phrase: 'API 510',           href: '/api-510-certification', max: 1 },
    { phrase: 'API 581',           href: '/consulting/rbi-program-design', max: 1 },
    { phrase: 'reporting software', href: '/best-ndt-reporting-software-2026', max: 1 },
  ]},
  { file: 'src/pages/api-653-certification.tsx', anchors: [
    { phrase: 'API 510',           href: '/api-510-certification', max: 1 },
    { phrase: 'API 570',           href: '/api-570-certification', max: 1 },
    { phrase: 'tank inspection guide', href: '/blog/api-653-tank-inspection-guide', max: 1 },
    { phrase: 'digital twin',      href: '/digital-twins/storage-tank', max: 1 },
  ]},

  // ─── Consulting + DT/ERP routing from blog cluster ────────────────────
  { file: 'src/pages/api-653-tank-inspection-guide.tsx', anchors: [
    { phrase: 'API 653 certification', href: '/api-653-certification', max: 1 },
    { phrase: 'FFS',               href: '/consulting/api-579-fitness-for-service-services', max: 1 },
    { phrase: 'digital twin',      href: '/digital-twins/storage-tank', max: 1 },
  ]},
  { file: 'src/pages/blog/rt-vs-ut-complete-comparison.tsx', anchors: [
    { phrase: 'ASNT certification', href: '/asnt-certification', max: 1 },
    { phrase: 'digital twin',      href: '/digital-twins', max: 1 },
  ]},
  { file: 'src/pages/blog/iso-9712-vs-asnt-decision-flowchart-which-cert-by-country.tsx', anchors: [
    { phrase: 'ASNT certification', href: '/asnt-certification', max: 1 },
    { phrase: 'Level III consulting', href: '/consulting/asnt-level-iii-consulting-services', max: 1 },
  ]},
];

/** US-CTR proof line — Step 2 of Day-8 plan. Adds an outcome+credibility band
 * after the first <h1>...</h1> in each target. Outcome-only (no $$). */
const PROOF_LINE = (href, label) => `
        <p className="my-4 rounded-md border-l-4 border-primary/60 bg-primary/5 p-3 text-sm">
          <strong>Atlantis NDT proof:</strong> ASNT Level III-led prep, 96% first-attempt pass rate, 2026 cohorts.
          {' '}<a href="${href}" className="${ANCHOR_CLASS}">${label} →</a>
        </p>
`;

const PROOF_TARGETS = [
  { file: 'src/pages/asnt-certification.tsx',               href: '/contact',                  label: 'Talk to an ASNT Level III' },
  { file: 'src/pages/api-510-certification.tsx',            href: '/contact',                  label: 'See the API 510 schedule' },
  { file: 'src/pages/api-570-certification.tsx',            href: '/contact',                  label: 'See the API 570 schedule' },
  { file: 'src/pages/api-653-certification.tsx',            href: '/contact',                  label: 'See the API 653 schedule' },
  { file: 'src/pages/api-653-tank-inspection-guide.tsx',    href: '/api-653-certification',    label: 'Prep with Atlantis NDT' },
  { file: 'src/pages/blog/ndt-salary-guide-2026-global.tsx', href: '/asnt-certification',      label: 'See your cert pathway' },
  { file: 'src/pages/blog/rt-vs-ut-complete-comparison.tsx', href: '/asnt-certification',      label: 'Get ASNT Level II / III' },
  { file: 'src/pages/blog/iso-9712-vs-asnt-decision-flowchart-which-cert-by-country.tsx', href: '/asnt-certification', label: 'Prep with Atlantis NDT' },
];

function escapeRegExp(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

function injectAnchors(src, anchors) {
  let totalWrapped = 0;
  for (const a of anchors) {
    let count = 0;
    // Hardened regex: NO newlines in pre/post (prevents spans across object-literal
    // string properties that don't contain real JSX). Also rejects matches inside
    // double-quoted strings or JSX expression containers.
    const phraseRe = new RegExp(`(>[^<\\n"{}]*?)\\b(${escapeRegExp(a.phrase)})\\b([^<\\n"{}]*?<)`, 'g');
    src = src.replace(phraseRe, (m, pre, mid, post) => {
      if (count >= a.max) return m;
      if (pre.includes('<a ') || pre.includes('href=') || pre.includes('className=')) return m;
      count++;
      totalWrapped++;
      return `${pre}<a href="${a.href}" className="${ANCHOR_CLASS}">${mid}</a>${post}`;
    });
  }
  return { src, totalWrapped };
}

function injectProofLine(src, href, label) {
  if (src.includes('INLINE_PROOF_INJECTED_v1')) return null;
  if (!/<h1[\s>]/.test(src)) return null;
  // Match the first </h1> tag and insert proof line right after it.
  // JSX comments wrap content with {/* */} — DO NOT nest /* */ inside that.
  let inserted = false;
  const out = src.replace(/(<\/h1>)/, (m) => {
    if (inserted) return m;
    inserted = true;
    return `${m}\n        {/* INLINE_PROOF_INJECTED_v1 */}${PROOF_LINE(href, label)}`;
  });
  return inserted ? out : null;
}

const isUsCtr = process.argv.includes('--us-ctr');
const args = process.argv.slice(2);
const fileArg = args.find(a => a.startsWith('--file='));
const onlyFile = fileArg ? fileArg.slice('--file='.length) : null;

let patchedAnchors = 0;
let totalWrapped = 0;
let patchedProof = 0;
const failures = [];

// ─── Pass A: inline anchors ──────────────────────────────────────────────
if (!isUsCtr) {
  for (const t of PLAN) {
    if (onlyFile && onlyFile !== t.file) continue;
    const p = join(ROOT, t.file);
    if (!existsSync(p)) { failures.push({ file: t.file, err: 'not found' }); continue; }
    let src = readFileSync(p, 'utf-8');
    if (src.includes(MARKER)) { console.log(`skip (marker present): ${t.file}`); continue; }
    const { src: out, totalWrapped: n } = injectAnchors(src, t.anchors);
    if (n === 0) { failures.push({ file: t.file, err: 'no anchor matched' }); continue; }
    const final = `// ${MARKER}\n` + out;
    writeFileSync(p, final, 'utf-8');
    patchedAnchors++;
    totalWrapped += n;
    console.log(`patched (${n} anchors): ${t.file}`);
  }
}

// ─── Pass B: US-CTR proof line ───────────────────────────────────────────
if (isUsCtr || args.includes('--proof')) {
  for (const t of PROOF_TARGETS) {
    if (onlyFile && onlyFile !== t.file) continue;
    const p = join(ROOT, t.file);
    if (!existsSync(p)) { failures.push({ file: t.file, err: 'not found (proof)' }); continue; }
    let src = readFileSync(p, 'utf-8');
    const out = injectProofLine(src, t.href, t.label);
    if (!out) { failures.push({ file: t.file, err: 'no <h1> match or marker present' }); continue; }
    writeFileSync(p, out, 'utf-8');
    patchedProof++;
    console.log(`proof injected: ${t.file}`);
  }
}

console.log(`\n=== Day-8 inject-inline-anchors summary ===`);
console.log(`Anchor pass: ${patchedAnchors} files patched, ${totalWrapped} total anchors wrapped.`);
console.log(`Proof pass:  ${patchedProof} files patched.`);
if (failures.length) console.log(`Failures: ${JSON.stringify(failures, null, 2)}`);
