#!/usr/bin/env node
/**
 * Practical NDT "first-ever" claim — retired 2026-10-12 (owner approved; CLAUDE.md §54 open item).
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY: ~300 Practical NDT pages (hub, 266 city pages, 32 geo hubs, their meta descriptions and
 * Service JSON-LD) said "Atlantis built the first-ever online practical NDT simulation portal"
 * or "the first online practical NDT simulator". Nothing in the repo evidences it, and the
 * search results for "ndt simulator" show older browser and desktop simulators. The owner
 * approved removing it. What is true, and what the pages now say: Practical NDT is an online
 * practical NDT simulation portal (browser-based, 3D), standalone or inside the Atlantis LMS /
 * ERP eLearning portal.
 *
 * ONE SOURCE for three users:
 *   - scrubPracticalClaims(str)   the replacement, used by the generators
 *                                 (build-practical-ndt-routes.mjs, build-geo-hubs.mjs) so a
 *                                 re-run cannot bring the claim back, and by --fix below.
 *   - PRACTICAL_CLAIM_RULES       rules for scripts/assert-no-fabricated-claims.mjs
 *                                 (kind PRACTICAL-FIRST-CLAIM), with practicalClaimSelfTest().
 *   - PRACTICAL_CLAIM_HANDOFF     files owned by other release workstreams (12 Oct 2026) that
 *                                 still carry the same sentence. They are reported, not failed,
 *                                 up to the listed count; any extra copy fails. After the merge:
 *                                   node scripts/practical-ndt-claims.mjs --fix-handoff
 *                                 then the list can be emptied.
 *
 * Third-party "firsts" (Boundary Dam's carbon capture unit, Barakah as the Arab world's first
 * commercial nuclear station) are facts about regional industry, not Atlantis claims; the rules
 * only fire on a simulator / portal / Practical NDT noun phrase.
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// Order matters: the possessive forms before the generic article forms.
const FIXES = [
  [/\bAtlantis(['’])s first[- ](?:ever )?online practical NDT (simulator|simulation portal|portal)\b/g, 'Atlantis$1s online practical NDT $2'],
  // "Fargo's first online practical NDT simulator: practise ..." (description openers)
  [/\b((?:[A-Z][\w.-]*\s){0,2}[A-Z][\w.-]*)['’]s first[- ](?:ever )?online practical NDT (simulator|simulation portal|portal)\b/g, 'Online practical NDT $2 for $1'],
  [/\bthe first[- ](?:ever )?online practical NDT (simulator|simulation portal|portal)\b/g, 'an online practical NDT $1'],
  [/\bThe first[- ](?:ever )?online practical NDT (simulator|simulation portal|portal)\b/g, 'An online practical NDT $1'],
  [/\b(?:the |The )?First[- ](?:ever )?online practical NDT (simulator|simulation portal|portal)\b/g, 'Online practical NDT $1'],
  [/\b(?:a|an) first[- ](?:ever )?online practical NDT (simulator|simulation portal|portal)\b/g, 'an online practical NDT $1'],
];

/** Replace the retired claim with the factual description. Idempotent. */
export function scrubPracticalClaims(s) {
  if (typeof s !== 'string' || !/first/i.test(s)) return s;
  let out = s;
  for (const [re, rep] of FIXES) out = out.replace(re, rep);
  return out;
}

// Adjectives that may sit between "first" and the product noun in the claim shape.
const ADJ = String.raw`(?:online|browser[- ]based|web[- ]based|cloud[- ]based|virtual|3D|three-dimensional|immersive|interactive|game[- ]like|gamified|practical|NDT|UT|ultrasonic|A-scan|training|skills?|VR)`;
const NOUN = String.raw`(?:simulat(?:or|ion)s?\b|portal\b|platform\b)`;

/**
 * [kind, regex, context?, neg?, fileRe?] — the same shape as RULES in assert-no-fabricated-claims.mjs.
 * Applied to every src/** and scripts/** source (and dist HTML with --dist).
 */
export const PRACTICAL_CLAIM_RULES = [
  // "the first-ever online practical NDT simulation portal", "the first online practical NDT simulator"
  ['PRACTICAL-FIRST-CLAIM', new RegExp(String.raw`\bfirst(?:[- ]ever)?\s+(?:${ADJ}[\s,-]+){1,6}${NOUN}`, 'i')],
  // "first-ever" anywhere near the product ("Atlantis built the first-ever ... for practice")
  ['PRACTICAL-FIRST-CLAIM', /\bfirst[- ]ever\b(?=[^.<"`]{0,80}\b(?:simulat|portal|Practical NDT|Atlantis)\b)/i],
  // "the world's first browser-based NDT simulator"; not "the world's first commercial-scale carbon capture unit"
  ['PRACTICAL-FIRST-CLAIM', /\bworld['’]s\s+first\b(?=[^.<"`]{0,60}\b(?:NDT|simulat\w*|portal|e-?learning)\b)/i],
  // "Practical NDT is the only online NDT simulator", "the first and only ..."
  ['PRACTICAL-FIRST-CLAIM', new RegExp(String.raw`\b(?:the|our|Atlantis['’]s?)\s+(?:first and\s+)?only\s+(?:${ADJ}[\s,-]+){0,5}NDT\s+(?:training\s+)?${NOUN}`, 'i')],
  // Scoped to the simulator: "Industry-First NDT ERP" (press pages) is a separate owner question.
  ['PRACTICAL-FIRST-CLAIM', /\b(?:first[- ]of[- ]its[- ]kind|industry[- ]first|first and only)\b(?=[^.<"`]{0,80}\b(?:simulat|portal|Practical NDT|A-scan)\b)/i],
  // 2026-10-17 (owner-approved white paper): the procedure evaluator credits recorded steps and the
  // trainee's interpretation is reviewed by the instructor, not scored by the software; there is no
  // adaptive difficulty engine (three levels of assistance instead); there are twelve workplaces.
  ['PRACTICAL-SCORED-CLAIM', /\binstant,? scored feedback\b|\bscored feedback instantly\b|\b(?:every|each) (?:job|attempt|scenario) is scored instantly\b/i],
  ['PRACTICAL-ADAPTIVE-CLAIM', /\badaptive (?:difficulty|scenarios?)\b|\bdifficulty engine\b|\bdifficulty adapts\b/i],
  ['PRACTICAL-WORKPLACE-COUNT', /\b(?:five|5)\s+(?:(?:workplace|virtual|3D|realistic)\s+)*environments\b/i, undefined, undefined, /\.(?:json|tsx)$|-routes(?:-[\w-]+)?\.mjs$|^scripts\/prerender\.mjs$/],
];

/** Known-bad strings must match, known-good strings must not — or the gate is broken. */
export function practicalClaimSelfTest(rules = PRACTICAL_CLAIM_RULES) {
  const own = rules.filter(([k]) => k === 'PRACTICAL-FIRST-CLAIM');
  const hit = (t) => own.some(([, re]) => new RegExp(re.source, re.flags).test(t));
  const BAD = [
    'Atlantis built the first-ever online practical NDT simulation portal for practice and hands-on experience',
    'Practical NDT, the first online practical NDT simulator, for Australian crews',
    '"description":"First online practical NDT simulator for Swedish steel and paper mills"',
    'practise UT, PAUT and TOFD in Atlantis’s first online practical NDT simulator. Request a demo.',
    'the first online practical NDT portal for tank, pipeline and refinery crews',
    'Practical NDT is the world’s first browser-based NDT simulator',
    'Atlantis Practical NDT is the only online NDT simulator with scored feedback',
    'a first-of-its-kind NDT simulation portal',
    'Fargo&#39;s first-ever virtual NDT training platform',
  ];
  const GOOD = [
    'Unit 3 being one of the world’s first commercial-scale carbon capture units.',
    "The emirate's nuclear program, the Arab world's first, at the Barakah power plant",
    'Atlantis built an online practical NDT simulation portal for practice and hands-on experience',
    'A trainee preparing for their first practical exam can use the simulator to build baseline skill',
    'The platform adapts from a first-time trainee learning to hold a probe through to a Level III',
    'Practical NDT is a practice layer only, and the simulator only helps with technique',
    'Your first online NDT training session covers the theory',
    'Atlantis’s online practical NDT simulator for Alberta oil sands crews',
  ];
  const broken = [...BAD.filter((t) => !hit(t)).map((t) => `missed: ${t}`), ...GOOD.filter(hit).map((t) => `false positive: ${t}`)];
  // 2026-10-17 scored / adaptive / workplace-count rules.
  const other = rules.filter(([k]) => k !== 'PRACTICAL-FIRST-CLAIM');
  const hit2 = (t) => other.some(([, re]) => new RegExp(re.source, re.flags).test(t));
  const BAD2 = [
    'work realistic inspection jobs with instant scored feedback on every scan',
    'every session ends with instant, scored feedback that shows what was found',
    'The adaptive difficulty engine adjusts scenario complexity to demonstrated performance',
    'Difficulty adapts as users progress, so the platform stays useful.',
    'lets trainees practise 12 methods in 5 virtual environments',
    'Practical NDT has five workplace environments, twelve methods and 33 guided lessons.',
  ];
  const GOOD2 = [
    'Sit ASNT-format practice examinations online with instant feedback.',
    'API introduced instant scoring for most computer-based exams from the April 2024 window',
    'with step-by-step procedure feedback, and the interpretation is reviewed by the instructor',
    'Three levels of assistance, from guided to independent, for any skill level',
    'Adaptive scanning: real-time focal law adjustment for nozzles',
    'twelve workplaces, twelve method families and 33 guided lessons',
  ];
  broken.push(...BAD2.filter((t) => !hit2(t)).map((t) => `missed: ${t}`), ...GOOD2.filter(hit2).map((t) => `false positive: ${t}`));
  // The scrub must clear every known-bad shape it is responsible for.
  for (const t of BAD.slice(0, 5)) if (hit(scrubPracticalClaims(t))) broken.push(`scrub left a claim: ${scrubPracticalClaims(t)}`);
  return broken;
}

/**
 * Other workstreams' files (12 Oct 2026 release) that still carry the sentence. Not edited on
 * the practical branch (COMMON.md: no edits to another workstream's pages). The gate reports
 * these as pending, up to the count; one more copy in the same file fails.
 * Sources that are .html (scripts/training-gap/src) are not scanned by the gate but are fixed
 * by --fix-handoff so the training-gap build cannot reintroduce the sentence.
 */
export const PRACTICAL_CLAIM_HANDOFF = {}; // emptied 2026-10-12 after --fix-handoff cleared all 25 copies
const HANDOFF_EXTRA_SOURCES = [];

/**
 * Called by the gate after the scan: removes PRACTICAL-FIRST-CLAIM hits in handoff files up to
 * their listed count (mutates `violations`) and returns the pending list for a warning.
 */
export function releasePracticalHandoff(violations) {
  const pending = [];
  const within = {};
  for (const file of Object.keys(PRACTICAL_CLAIM_HANDOFF)) {
    const abs = join(ROOT, file);
    within[file] = existsSync(abs) && countPracticalClaims(readFileSync(abs, 'utf8')) <= PRACTICAL_CLAIM_HANDOFF[file];
  }
  for (let i = violations.length - 1; i >= 0; i--) {
    const v = violations[i];
    if (v.kind !== 'PRACTICAL-FIRST-CLAIM' || !within[v.file]) continue;
    pending.unshift(v);
    violations.splice(i, 1);
  }
  return pending;
}

/** Distinct claim occurrences in a text (overlapping hits from several rules count once). */
export function countPracticalClaims(text) {
  let n = 0;
  for (const line of String(text).split(/\r?\n/)) {
    const spans = [];
    for (const [, re] of PRACTICAL_CLAIM_RULES) {
      for (const m of line.matchAll(new RegExp(re.source, re.flags.includes('g') ? re.flags : re.flags + 'g'))) spans.push([m.index, m.index + Math.max(m[0].length, 1)]);
    }
    spans.sort((a, b) => a[0] - b[0]);
    let end = -1;
    for (const [s, e] of spans) { if (s >= end) n++; end = Math.max(end, e); }
  }
  return n;
}

function fixFiles(rels) {
  let files = 0, changed = 0;
  for (const rel of rels) {
    const abs = join(ROOT, rel);
    if (!existsSync(abs)) continue;
    const before = readFileSync(abs, 'utf8');
    const after = scrubPracticalClaims(before);
    if (after !== before) {
      writeFileSync(abs, after);
      files++;
      changed += (before.match(/first[- ]ever|first online/gi) || []).length - (after.match(/first[- ]ever|first online/gi) || []).length;
    }
  }
  return { files, changed };
}

// CLI: --self-test | --fix-handoff | --fix <file...>
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const args = process.argv.slice(2);
  if (args[0] === '--self-test') {
    const broken = practicalClaimSelfTest();
    if (broken.length) { console.error(broken.join('\n')); process.exit(2); }
    console.log('practical-ndt-claims self-test PASS');
  } else if (args[0] === '--fix-handoff') {
    const r = fixFiles([...Object.keys(PRACTICAL_CLAIM_HANDOFF), ...HANDOFF_EXTRA_SOURCES]);
    console.log(`practical-ndt-claims: fixed ${r.changed} claim(s) in ${r.files} handoff file(s). Empty PRACTICAL_CLAIM_HANDOFF once the gate shows no pending hits.`);
  } else if (args[0] === '--fix') {
    const r = fixFiles(args.slice(1));
    console.log(`practical-ndt-claims: fixed ${r.changed} claim(s) in ${r.files} file(s).`);
  } else {
    console.log('usage: node scripts/practical-ndt-claims.mjs --self-test | --fix-handoff | --fix <file...>');
  }
}
