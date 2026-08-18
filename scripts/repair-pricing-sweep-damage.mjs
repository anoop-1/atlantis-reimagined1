#!/usr/bin/env node
/**
 * Repair collateral damage from the pricing sweep — 2026-08-18.
 * ─────────────────────────────────────────────────────────────────────────────
 * WHAT HAPPENED
 *
 * The site-wide pricing removal (2026-08-05) was meant to strip ATLANTIS prices.
 * Policy explicitly permits third-party figures — ASNT and AWS exam fees,
 * industry salary bands. A blanket substitution ran anyway and replaced those
 * permitted figures with two placeholder phrases:
 *
 *     "a significant cost item"      15 occurrences
 *     "a scoped, quoted figure"     198 occurrences
 *
 * across 8 files, producing text that is at best padded and at worst broken:
 *
 *   "the retake fee for failing any single part is approximately a scoped,
 *    quoted figure so two retakes alone cost more than the seminar"
 *   "a scoped, quoted figureaffordable, accessible total over 2-3 years"
 *   cost: "a scoped, quoted figure exam + a scoped, quoted figure seminar"
 *   cost: "Moderate (a scoped, quoted figure100/hr)"
 *
 * These sit on pages that rank for cost-intent queries — exactly the queries the
 * US training segment depends on — so this is a live quality defect, not
 * cosmetic. It is also the incident behind the standing rule: never blanket-sub
 * after targeted passes.
 *
 * WHAT THIS SCRIPT DOES — AND DELIBERATELY DOES NOT DO
 *
 * It applies ONLY transformations that cannot be wrong:
 *
 *   1. Deletes the parenthetical "(a significant cost item)". It is pure noise;
 *      removing it always leaves a correct sentence.
 *   2. Repairs concatenations where the placeholder fused to the next word
 *      ("figureaffordable" → "figure. Affordable"), which are outright bugs.
 *
 * It does NOT rewrite the remaining ~198 standalone placeholders, because doing
 * that well needs the original figures back, and inventing them would be worse
 * than the current text. Those are inventoried to a report instead, so the fix
 * can be done properly — by restoring real, cited third-party figures, which
 * policy allows and which is what the winning competitor pages do.
 *
 *   node scripts/repair-pricing-sweep-damage.mjs --dry-run
 *   node scripts/repair-pricing-sweep-damage.mjs
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, dirname, relative } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, '..', 'src');
const DRY = process.argv.includes('--dry-run');

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.(tsx?|jsx?|json)$/.test(name)) out.push(p);
  }
  return out;
}

const files = walk(SRC);
let filesChanged = 0, parensRemoved = 0, concatsFixed = 0;
const remaining = [];

for (const file of files) {
  const before = readFileSync(file, 'utf-8');
  if (!before.includes('a significant cost item') && !before.includes('a scoped, quoted figure')) continue;
  let after = before;

  // 1. Parenthetical noise — always safe to delete. Handles the space before it
  //    so "course (a significant cost item)," becomes "course,".
  after = after.replace(/\s*\((?:a\s+)?significant cost item\)/gi, '');
  after = after.replace(/\s*\(a significant cost item\)/gi, '');

  // 2. Fused concatenations: the placeholder ran straight into the next word or
  //    number. Restore a sentence boundary (word) or a space (number).
  after = after.replace(/a scoped, quoted figure([a-z])/g, (_m, ch) => `a scoped, quoted figure. ${ch.toUpperCase()}`);
  after = after.replace(/a scoped, quoted figure(\d)/g, 'a scoped, quoted figure $1');

  const pBefore = (before.match(/\((?:a\s+)?significant cost item\)/gi) || []).length;
  const cBefore = (before.match(/a scoped, quoted figure[a-z\d]/g) || []).length;

  if (after !== before) {
    filesChanged++;
    parensRemoved += pBefore;
    concatsFixed += cBefore;
    if (!DRY) writeFileSync(file, after, 'utf-8');
  }

  // Inventory whatever placeholders survive — these need real figures, not a regex.
  const lines = after.split('\n');
  lines.forEach((line, i) => {
    if (line.includes('a scoped, quoted figure') || line.includes('a significant cost item')) {
      remaining.push({
        file: relative(join(__dirname, '..'), file).replace(/\\/g, '/'),
        line: i + 1,
        excerpt: line.trim().slice(0, 150),
      });
    }
  });
}

console.log(`\n${DRY ? '[DRY RUN] ' : ''}Pricing-sweep damage repair`);
console.log(`  files touched            ${filesChanged}`);
console.log(`  parentheticals removed   ${parensRemoved}`);
console.log(`  concatenations repaired  ${concatsFixed}`);
console.log(`  placeholders remaining   ${remaining.length}   ← need real cited third-party figures, not a substitution`);

const byFile = {};
for (const r of remaining) (byFile[r.file] ??= []).push(r);
console.log('\n  Remaining, by file:');
for (const [f, rows] of Object.entries(byFile).sort((a, b) => b[1].length - a[1].length)) {
  console.log(`    ${String(rows.length).padStart(4)}  ${f}`);
}

const out = join(__dirname, 'pricing-placeholder-backlog.json');
if (!DRY) {
  writeFileSync(out, JSON.stringify({
    generated: new Date().toISOString(),
    note: 'Third-party fees (ASNT, AWS) and industry salary bands ARE permitted by policy. ' +
          'The correct fix is restoring real figures WITH a cited source and an accessed date — ' +
          'ASNT publishes its schedule at certification.asnt.org. Do not re-run a blanket substitution.',
    remaining,
  }, null, 2));
  console.log(`\n  Backlog written to ${out}`);
}
console.log();
