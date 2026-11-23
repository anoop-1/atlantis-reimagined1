// Second check for a new US training city page (the first is scripts/na-training-validate.mjs): the training geo
// honesty gate that fails the site build ("scheduled class", "next session", "our venue"…), superlative,
// partnership and US radiography wording, and external links.   node scripts/training-refine/validate-city-extra.mjs <slug> ...
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT, BANNED, text, scanTrainingGeoHonesty } from './lib.mjs';
let bad = 0;
for (const slug of process.argv.slice(2)) {
  const d = JSON.parse(readFileSync(join(ROOT, `src/data/deep-content/ndt-training-${slug}.json`), 'utf8'));
  const p = JSON.parse(readFileSync(join(ROOT, `src/data/na-training-2026-11/${slug}.json`), 'utf8'));
  const html = `${d.bodyHtml}<p>${p.localContext}</p><p>${p.certPathwayNote}</p>`;
  const probs = scanTrainingGeoHonesty(html, `/ndt-training-${slug}`).map((v) => `honesty gate ${v.rule}: "${v.sentence.slice(0, 150)}"`);
  const t = text(html);
  for (const [re, label] of BANNED.filter(([, l]) => /superlative|partnership|RT offer/.test(l))) { const m = t.match(re); if (m) probs.push(`${label}: "...${t.slice(Math.max(0, m.index - 50), m.index + 70)}..."`); }
  for (const [, href] of d.bodyHtml.matchAll(/href="([^"]+)"/g)) if (/^https?:/.test(href)) probs.push(`external link ${href}`);
  console.log(`${probs.length ? '✗' : '✓'} ${slug}`); for (const x of probs) console.log('    - ' + x);
  if (probs.length) bad++;
}
process.exit(bad ? 1 : 0);
