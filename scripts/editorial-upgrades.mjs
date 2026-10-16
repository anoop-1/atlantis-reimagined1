// One editorial upgrades map for both layers (2026-10-16). Read by editorialBlogRecord()
// (scripts/editorial-blog-data.mjs → BlogDetail's per-slug JSON) and applyEditorialQuality()
// (scripts/editorial-quality-pass.mjs → the published crawler HTML), so the two cannot drift.
//   src/data/editorial-page-upgrades.json   hand-written upgrades {path: {title, description, html, replace, canonical}}
//   scripts/practice-tests-2026-10.mjs      practice-test pages generated from src/data/practice-tests/*.json
import { readFileSync } from 'node:fs';
import { practiceTestUpgrades } from './practice-tests-2026-10.mjs';

const base = JSON.parse(readFileSync(new URL('../src/data/editorial-page-upgrades.json', import.meta.url), 'utf8'));
const practice = practiceTestUpgrades();
for (const path of Object.keys(practice)) {
  if (base[path]) throw new Error(`editorial-upgrades: ${path} is in editorial-page-upgrades.json and is also generated from src/data/practice-tests; keep one source`);
}

export const EDITORIAL_PAGE_UPGRADES = { ...base, ...practice };
