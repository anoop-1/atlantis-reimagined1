#!/usr/bin/env node
/**
 * Deterministic Atlantis pricing strip across src/ + docs/marketing/.
 * Skip: salary bands, industry equipment costs, customer ROI, SAP B1 ($180K), etc.
 * Strip: explicit Atlantis subscription prices in pillar + comparison pages.
 */
import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const FILES = execSync('git ls-files src/ docs/marketing/', { cwd: ROOT }).toString()
  .split('\n').filter(f => f.match(/\.(tsx|ts|mjs|json|md)$/));

// Patterns ordered most-specific to least-specific
const REPLACEMENTS = [
  // Atlantis subscription pricing — strip outright
  [/Atlantis NDT ERP includes (.+?)\. (Designed for .+?\.) regionally priced, fully customizable,/g, 'Atlantis NDT ERP includes $1. $2 Affordable, accessible, fully customizable,'],
  [/regionally priced,? fully customizable/g, 'affordable, accessible, fully customizable'],
  [/regionally priced/g, 'affordable, accessible'],

  // Specific Atlantis ERP yearly price tokens
  [/\$18,000\/yr flat\.?/g, 'affordable, accessible subscription.'],
  [/\$18,?000\/yr\b/g, 'affordable, accessible'],
  [/\$18[K,k]\/yr\b/g, 'affordable, accessible'],
  [/\$18,000 USD\/yr\b/g, 'affordable, accessible'],
  [/\$18,000 flat,?/g, 'affordable, accessible,'],
  [/\$18,000\b/g, 'affordable, accessible'],
  [/\$18[Kk]\b/g, 'affordable, accessible'],

  // DT enterprise tier
  [/\$200,000\/yr enterprise SaaS/g, 'Enterprise SaaS, affordable, accessible'],
  [/\$200,000\/yr/g, 'enterprise tier, accessible'],
  [/\$200[Kk]\/yr/g, 'enterprise tier, accessible'],
  [/\$200[Kk] enterprise/g, 'enterprise-tier'],
  [/\$200,000 enterprise/g, 'enterprise-tier'],
  [/\$200[Kk]\b/g, 'enterprise tier'],

  // Competitor enterprise license refs (when used as Atlantis comparison)
  [/\$250,?000\+? SAP/g, 'enterprise-license SAP'],
  [/\$250[Kk]\+? SAP/g, 'enterprise-license SAP'],
  [/SAP S\/4HANA at \$250[Kk]\+?/g, 'SAP S/4HANA enterprise license'],
  [/\$180,?000\+? Oracle/g, 'enterprise-license Oracle'],
  [/\$180[Kk]\+? Oracle/g, 'enterprise-license Oracle'],
  [/Oracle Cloud ERP at \$180[Kk]\+?/g, 'Oracle Cloud ERP enterprise license'],
  [/\$80,?000\+? NetSuite/g, 'enterprise-tier NetSuite'],
  [/\$80[Kk]\+? NetSuite/g, 'enterprise-tier NetSuite'],
  [/NetSuite at \$80[Kk]\+?/g, 'NetSuite enterprise tier'],

  // SAP B1 — KEEP this; user noted $180K SAP B1 is real competitor pricing context
  // We pattern-match generic enterprise pricing only when adjacent to "Atlantis" or comparison context
];

let touched = 0;
let totalReplacements = 0;

for (const rel of FILES) {
  const p = join(ROOT, rel.replace(/\//g, '\\'));
  let src;
  try { src = readFileSync(p, 'utf-8'); } catch { continue; }
  let out = src;
  let fileReps = 0;
  for (const [pattern, replacement] of REPLACEMENTS) {
    const before = out;
    out = out.replace(pattern, replacement);
    if (out !== before) {
      const matches = (before.match(pattern) || []).length;
      fileReps += matches;
    }
  }
  if (out !== src) {
    writeFileSync(p, out, 'utf-8');
    touched++;
    totalReplacements += fileReps;
    console.log(`  ${fileReps.toString().padStart(3)} ${rel}`);
  }
}

console.log(`\nDone. Touched ${touched} files, ${totalReplacements} total replacements.`);
