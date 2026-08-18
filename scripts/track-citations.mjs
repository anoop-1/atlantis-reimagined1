#!/usr/bin/env node
/**
 * Citation tracker — Phase 3 leading indicator. 2026-08-18.
 * ─────────────────────────────────────────────────────────────────────────────
 * Records, over time, the share of the frozen prompt panel on which
 * atlantisndt.com surfaces. This is the KPI that moves BEFORE clicks do.
 *
 * WHAT THIS CAN AND CANNOT MEASURE — read this before trusting a number.
 *
 * It CANNOT query ChatGPT, Perplexity, Gemini or Google AI Overviews directly.
 * No API access to any of them is configured in this project, and scraping their
 * interfaces would be both unreliable and against their terms. So the automated
 * series measures an observable PROXY: for each panel prompt, does the domain
 * appear in the organic results a retriever would draw from?
 *
 * That proxy is directional, not authoritative. Retrieval draws heavily on the
 * organic result set, so appearing there is close to a precondition for being
 * cited — but appearing is not being cited, and the gap between them is exactly
 * what the citation spec is trying to close.
 *
 * For the authoritative series, run the panel manually against the assistants
 * once a month and record the outcome with --record. Manual entries are stored
 * separately and never overwritten by an automated run, because a hand-checked
 * citation is worth more than fifty proxy hits.
 *
 * USAGE
 *   node scripts/track-citations.mjs --baseline        establish the first point
 *   node scripts/track-citations.mjs --run             append an automated point
 *   node scripts/track-citations.mjs --record c01=cited,t02=absent,s03=mentioned
 *   node scripts/track-citations.mjs --report          show the series
 *
 * Automated checking needs WebSearch, which is available to agents rather than
 * to a bare node process. Without it, --run records a "pending" point listing
 * exactly which prompts need checking, so the panel can be worked by hand or
 * handed to an agent.
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { PROMPT_PANEL, PANEL_VERSION, PANEL_FROZEN_UNTIL, PANEL_BY_CATEGORY } from './prompt-panel.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const STORE = join(__dirname, 'citation-series.json');
const args = process.argv.slice(2);

const load = () =>
  existsSync(STORE)
    ? JSON.parse(readFileSync(STORE, 'utf-8'))
    : { panelVersion: PANEL_VERSION, frozenUntil: PANEL_FROZEN_UNTIL, points: [] };

const save = (s) => writeFileSync(STORE, JSON.stringify(s, null, 2));

/** cited > mentioned > absent. Anything else is treated as unchecked. */
const OUTCOMES = ['cited', 'mentioned', 'absent'];

function summarise(results) {
  const n = Object.keys(results).length;
  const cited = Object.values(results).filter((v) => v === 'cited').length;
  const mentioned = Object.values(results).filter((v) => v === 'mentioned').length;
  const byCat = {};
  for (const [cat, prompts] of Object.entries(PANEL_BY_CATEGORY)) {
    const ids = prompts.map((p) => p.id).filter((id) => results[id]);
    if (!ids.length) continue;
    byCat[cat] = {
      checked: ids.length,
      cited: ids.filter((id) => results[id] === 'cited').length,
    };
  }
  return {
    checked: n,
    cited,
    mentioned,
    citationRate: n ? +((cited / n) * 100).toFixed(1) : 0,
    presenceRate: n ? +(((cited + mentioned) / n) * 100).toFixed(1) : 0,
    byCategory: byCat,
  };
}

const store = load();

if (store.panelVersion !== PANEL_VERSION) {
  console.error(
    `\nPANEL MISMATCH — the stored series was built on panel ${store.panelVersion}, the code now declares ${PANEL_VERSION}.\n` +
    `A frozen panel is the whole basis for comparing points over time. Do not overwrite the series;\n` +
    `start a second labelled cohort with its own baseline instead.\n`
  );
  process.exit(1);
}

// ── --record: manual, authoritative entries ──────────────────────────────────
if (args.includes('--record')) {
  const spec = args[args.indexOf('--record') + 1] ?? '';
  const results = {};
  const unknown = [];
  for (const pair of spec.split(',').map((s) => s.trim()).filter(Boolean)) {
    const [id, outcome] = pair.split('=').map((s) => s.trim());
    if (!PROMPT_PANEL.some((p) => p.id === id)) { unknown.push(id); continue; }
    if (!OUTCOMES.includes(outcome)) { unknown.push(`${id}=${outcome}`); continue; }
    results[id] = outcome;
  }
  if (unknown.length) {
    console.error(`Unknown prompt id or outcome: ${unknown.join(', ')}`);
    console.error(`Valid outcomes: ${OUTCOMES.join(', ')}`);
    process.exit(1);
  }
  const point = {
    date: new Date().toISOString().split('T')[0],
    method: 'manual',
    results,
    summary: summarise(results),
  };
  store.points.push(point);
  save(store);
  console.log(`\nRecorded ${Object.keys(results).length} manual check(s).`);
  console.log(`  citation rate ${point.summary.citationRate}%  ·  presence ${point.summary.presenceRate}%\n`);
  process.exit(0);
}

// ── --report ─────────────────────────────────────────────────────────────────
if (args.includes('--report')) {
  console.log(`\nCitation series — panel ${store.panelVersion}, frozen until ${store.frozenUntil}`);
  console.log(`  ${PROMPT_PANEL.length} prompts in panel, ${store.points.length} point(s) recorded\n`);
  if (!store.points.length) {
    console.log('  No points yet. Run --baseline first.\n');
    process.exit(0);
  }
  console.log('  date        method    checked  cited  citation%  presence%');
  for (const p of store.points) {
    const s = p.summary;
    console.log(
      `  ${p.date}  ${String(p.method).padEnd(9)} ${String(s.checked).padStart(7)} ${String(s.cited).padStart(6)} ` +
      `${String(s.citationRate).padStart(9)} ${String(s.presenceRate).padStart(10)}`
    );
  }
  const first = store.points[0].summary, last = store.points[store.points.length - 1].summary;
  if (store.points.length > 1) {
    console.log(`\n  Movement since baseline: citation ${first.citationRate}% -> ${last.citationRate}%`);
  }
  console.log(`\n  By category, latest point:`);
  for (const [cat, v] of Object.entries(last.byCategory ?? {})) {
    console.log(`    ${cat.padEnd(14)} ${v.cited}/${v.checked} cited`);
  }
  console.log();
  process.exit(0);
}

// ── --baseline / --run: emit the worklist ────────────────────────────────────
const isBaseline = args.includes('--baseline');
if (isBaseline && store.points.length) {
  console.error('\nA baseline already exists. Use --run to append a point, or delete citation-series.json to restart.\n');
  process.exit(1);
}

const point = {
  date: new Date().toISOString().split('T')[0],
  method: 'pending',
  note:
    'Automated checking requires WebSearch, which is available to an agent rather than to a bare node process. ' +
    'Hand this worklist to an agent, or check by hand and record with --record.',
  results: {},
  summary: summarise({}),
};
store.points.push(point);
save(store);

console.log(`\n${isBaseline ? 'Baseline' : 'Point'} created for ${point.date}. ${PROMPT_PANEL.length} prompts need checking.\n`);
console.log('Worklist — for each prompt, decide: cited / mentioned / absent\n');
for (const p of PROMPT_PANEL) {
  console.log(`  ${p.id}  [${p.category}]  ${p.prompt}`);
}
console.log(`\nRecord results like:\n  node scripts/track-citations.mjs --record c01=cited,c02=absent,k01=mentioned\n`);
