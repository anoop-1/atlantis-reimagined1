// Replace unverifiable numeric stat tiles (projects, years, pass rates, trainee
// counts, uptime, accuracy, time-saved, location counts) on service/training
// pages with true, non-numeric facts. Exact-string only; no regex.
// Usage: node scripts/fix-unverified-stat-tiles-2026-09-30.mjs [--apply]
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const APPLY = process.argv.includes('--apply');
const L = '</div><div className="text-muted-foreground">';
const PAIRS = [
  ['>15+' + L + 'Years Experience<', '>Level III' + L + 'ASNT-Led<'],
  ['>95%' + L + 'Pass Rate<', '>SNT-TC-1A' + L + 'Aligned Programmes<'],
  ['>400+' + L + 'Trained Technicians<', '>Live' + L + 'Instructor-Led Classes<'],
  ['>450+' + L + 'Trained Technicians<', '>Live' + L + 'Instructor-Led Classes<'],
  ['>500+' + L + 'Projects<', '>US + Canada' + L + 'North America-Wide<'],
  ['>50+' + L + 'Expert Instructors<', '>Level III' + L + 'Lead Instructor<'],
  ['>99.99%' + L + 'Availability<', '>Hosted' + L + 'Cloud Service<'],
  ['>99%' + L + 'Data Accuracy<', '>Structured' + L + 'Report Data<'],
  ['>50%' + L + 'Time Saved on Reports<', '>Templates' + L + 'Code-Aligned Reports<'],
  ['>6' + L + 'India Locations<', '>Online + Onsite' + L + 'India Delivery<'],
  ['>5+' + L + 'KSA Locations<', '>Online + Onsite' + L + 'KSA Delivery<'],
];
function walk(d, out = []) { for (const n of readdirSync(d)) { const f = join(d, n); const s = statSync(f); if (s.isDirectory()) walk(f, out); else if (n.endsWith('.tsx')) out.push(f); } return out; }
const tot = Object.fromEntries(PAIRS.map(([a]) => [a, 0]));
const files = [];
for (const f of [...walk(join(ROOT, 'src/pages')), ...walk(join(ROOT, 'src/components'))]) {
  let s = readFileSync(f, 'utf8'); const b = s;
  for (const [a, r] of PAIRS) { const n = s.split(a).length - 1; if (n) { tot[a] += n; s = s.split(a).join(r); } }
  if (s !== b) { files.push(f.slice(ROOT.length + 1)); if (APPLY) writeFileSync(f, s); }
}
for (const [a, n] of Object.entries(tot)) console.log(n, a);
console.log(APPLY ? 'APPLIED' : 'DRY RUN', files.length, 'files'); console.log(files.join('\n'));
