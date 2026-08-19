/**
 * One-off: insert TrainingEnquiryCTA into the training pages that lack it.
 *
 * Targets are the pages where US organic traffic actually lands and where
 * ms_form_click therefore cannot fire, measured 90d to 2026-08-17. It edits
 * only files that (a) exist, (b) do not already reference the Microsoft Form,
 * and (c) have a recognisable insertion point. Anything else is reported and
 * left alone rather than force-edited.
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, '..', 'src', 'pages');

const TARGETS = [
  'Training.tsx', 'training-usa.tsx', 'ndt-training-online.tsx',
  'ndt-level-1-training.tsx', 'ndt-level-2-training.tsx', 'asnt-level-iii-training.tsx',
  'ultrasonic-testing-training.tsx', 'radiographic-testing-training.tsx',
  'magnetic-particle-testing-training.tsx', 'penetrant-testing-training.tsx',
  'visual-testing-training.tsx', 'eddy-current-testing-training.tsx',
  'oil-gas-ndt-training.tsx', 'aerospace-ndt-training.tsx', 'aviation-ndt-training.tsx',
  'nuclear-ndt-training.tsx', 'maritime-ndt-training.tsx', 'manufacturing-ndt-training.tsx',
  'corporate-ndt-training.tsx',
];

const IMPORT = 'import TrainingEnquiryCTA from "@/components/TrainingEnquiryCTA";';
const DRY = process.argv.includes('--dry-run');

let edited = 0;
const skipped = [], missing = [], noAnchor = [];

for (const name of TARGETS) {
  const file = join(SRC, name);
  if (!existsSync(file)) { missing.push(name); continue; }
  let s = readFileSync(file, 'utf-8');

  if (/forms\.(cloud\.microsoft|office\.com)|TrainingEnquiryCTA/.test(s)) { skipped.push(name); continue; }

  // Insert the import after the last existing import line.
  const importLines = [...s.matchAll(/^import .*;$/gm)];
  if (!importLines.length) { noAnchor.push(name + ' (no imports)'); continue; }
  const last = importLines[importLines.length - 1];
  s = s.slice(0, last.index + last[0].length) + '\n' + IMPORT + s.slice(last.index + last[0].length);

  // Insert the CTA before the closing </main>, falling back to the last closing
  // div of the component's return. Only a confident match is edited.
  const mainClose = s.lastIndexOf('</main>');
  if (mainClose === -1) { noAnchor.push(name + ' (no </main>)'); continue; }
  s = s.slice(0, mainClose) + '        <TrainingEnquiryCTA />\n      ' + s.slice(mainClose);

  if (!DRY) writeFileSync(file, s, 'utf-8');
  edited++;
  console.log(`  ${DRY ? '[dry] ' : ''}added CTA -> ${name}`);
}

console.log(`\n  edited ${edited}`);
if (skipped.length) console.log(`  already had a form CTA (${skipped.length}): ${skipped.join(', ')}`);
if (missing.length) console.log(`  file not found (${missing.length}): ${missing.join(', ')}`);
if (noAnchor.length) console.log(`  no safe insertion point (${noAnchor.length}): ${noAnchor.join(', ')}`);
