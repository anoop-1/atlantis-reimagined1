#!/usr/bin/env node
/**
 * Blog quality audit — flag thin blogs + duplicate FAQ patterns.
 *
 * Usage:
 *   node scripts/blog-quality-audit.mjs                   # full audit
 *   node scripts/blog-quality-audit.mjs --min-words=800   # custom threshold
 *   node scripts/blog-quality-audit.mjs --batch=P0        # restrict to id range
 */
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const BLOGS_PATH = join(ROOT, 'src', 'data', 'blogs.json');

const BATCHES = {
  P0: { from: 900, to: 1079 },
  P1: { from: 700, to: 888 },
  P2: { from: 400, to: 519 },
  P3: { from: 300, to: 399 },
  ALL: { from: 0, to: 99999 },
};

const args = process.argv.slice(2);
const minWords = parseInt((args.find(a => a.startsWith('--min-words=')) || '--min-words=600').split('=')[1], 10);
const batchArg = (args.find(a => a.startsWith('--batch=')) || '--batch=ALL').split('=')[1];
const batch = BATCHES[batchArg] || BATCHES.ALL;

const blogs = JSON.parse(readFileSync(BLOGS_PATH, 'utf-8'));

const wc = s => (s || '').replace(/<[^>]+>/g, ' ').replace(/&\w+;/g, ' ').replace(/\s+/g, ' ').trim().split(/\s+/).filter(Boolean).length;

let thin = 0, ok = 0, scanned = 0;
let buckets = { '<400':0, '400-599':0, '600-799':0, '800-1199':0, '1200+':0 };
let firstQ1 = new Map(); // FAQ Q1 → count

for (const b of blogs) {
  const id = parseInt(b.id, 10);
  if (isNaN(id)) continue;
  if (id < batch.from || id > batch.to) continue;
  scanned++;
  const w = wc(b.content);
  if (w < 400) buckets['<400']++;
  else if (w < 600) buckets['400-599']++;
  else if (w < 800) buckets['600-799']++;
  else if (w < 1200) buckets['800-1199']++;
  else buckets['1200+']++;

  if (w < minWords) thin++; else ok++;

  const m = b.content && b.content.match(/<h3>Q1:\s*([^<]+)<\/h3>/);
  if (m) {
    const k = m[1].trim().slice(0, 80);
    firstQ1.set(k, (firstQ1.get(k) || 0) + 1);
  }
}

const totalDupQ1 = [...firstQ1.values()].filter(v => v > 1).reduce((a, b) => a + b, 0);

console.log(`Quality audit — batch ${batchArg} — min-words ${minWords}`);
console.log(`  Scanned: ${scanned}`);
console.log(`  OK (≥${minWords}w): ${ok}`);
console.log(`  THIN (<${minWords}w): ${thin}`);
console.log(`  Word-count distribution:`);
for (const [k, v] of Object.entries(buckets)) console.log(`    ${k}: ${v}`);
console.log(`  FAQ Q1 duplicates (same wording across ≥2 blogs): ${[...firstQ1.values()].filter(v => v > 1).length} unique patterns, ${totalDupQ1} blogs affected`);
console.log(`  Most-repeated Q1 patterns:`);
[...firstQ1.entries()].filter(([,v]) => v > 5).sort((a,b) => b[1] - a[1]).slice(0, 5).forEach(([q, n]) => console.log(`    ${n}× "${q}..."`));

process.exit(thin > 0 ? 0 : 0); // info-only, never fail build
