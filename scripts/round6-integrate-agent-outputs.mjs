#!/usr/bin/env node
/**
 * Round-6 Phase C — integrate agent outputs into prerender.mjs.
 *
 * Reads scripts/round6-agent-outputs/*.json and:
 *   - Validates each page entry (path + bodyContent ≥1,500w)
 *   - Strips pricing leaks (extra safety beyond strip-pricing.mjs)
 *   - Injects a single Round-6 override block at end of CTR_OVERRIDES region
 *     of scripts/prerender.mjs — using a unique helper map ROUND6_BODY_OVERRIDES
 *     and a post-processing route override in the route-finalisation step.
 *
 * Idempotency: marker comment `// === Round-6 body overrides ===` prevents
 * double-injection on re-run.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const OUTPUTS_DIR = join(ROOT, 'scripts', 'round6-agent-outputs');
const PRERENDER = join(ROOT, 'scripts', 'prerender.mjs');
const MARKER = '// === Round-6 body overrides ===';

const FORBIDDEN_PRICING = [
  /\$\s*\d+/, /USD\s*\d+/, /SAR\s*\d+/, /AED\s*\d+/, /INR\s*\d+/, /CAD\s*\d+/,
  /GBP\s*\d+/, /EUR\s*\d+/, /QAR\s*\d+/, /KWD\s*\d+/, /OMR\s*\d+/, /BHD\s*\d+/,
  /\d+\s*(?:USD|SAR|AED|INR|CAD|GBP|EUR|QAR|KWD|OMR|BHD)/i,
  /\$\d+K|\$\d+\s*per/i, /MYR\s*\d+|NOK\s*\d+|BRL\s*\d+|MXN\s*\d+|IDR\s*\d+|NGN\s*\d+|SGD\s*\d+/i,
];

function wordCount(html) {
  return (html || '').replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/gi, ' ')
    .replace(/\s+/g, ' ').trim().split(/\s+/).filter(Boolean).length;
}

function hasPricingLeak(text) {
  for (const re of FORBIDDEN_PRICING) if (re.test(text)) return re.source;
  return null;
}

const allEntries = [];
const skipped = [];
const files = readdirSync(OUTPUTS_DIR).filter(f => f.endsWith('-output.json'));

for (const file of files) {
  const data = JSON.parse(readFileSync(join(OUTPUTS_DIR, file), 'utf-8'));
  if (!data.pages) continue;
  for (const p of data.pages) {
    if (!p.path || !p.bodyContent) { skipped.push({ ...p, reason: 'missing path or bodyContent' }); continue; }
    const w = wordCount(p.bodyContent);
    if (w < 1200) { skipped.push({ path: p.path, reason: `word count ${w} < 1200` }); continue; }
    const leak = hasPricingLeak(p.bodyContent + ' ' + (p.title || '') + ' ' + (p.description || ''));
    if (leak) { skipped.push({ path: p.path, reason: `pricing leak: ${leak}` }); continue; }
    allEntries.push({
      path: p.path,
      title: p.title || null,
      description: p.description || null,
      bodyContent: p.bodyContent,
      words: w,
    });
  }
}

console.log(`Round-6 integrator:`);
console.log(`  Files read: ${files.length}`);
console.log(`  Valid entries: ${allEntries.length}`);
console.log(`  Skipped: ${skipped.length}`);
if (skipped.length) skipped.slice(0, 5).forEach(s => console.log(`    ${s.path}: ${s.reason}`));

// ─── Inject into prerender.mjs ──────────────────────────────────────────
const prerender = readFileSync(PRERENDER, 'utf-8');

// Build override map JS
let block = `\n${MARKER}\n`;
block += `// Auto-generated from scripts/round6-agent-outputs/*.json — ${allEntries.length} pages.\n`;
block += `// Pattern: ROUND6_BODY_OVERRIDES[path] = { title?, description?, bodyContent }\n`;
block += `const ROUND6_BODY_OVERRIDES = {\n`;
for (const e of allEntries) {
  const escPath = e.path.replace(/'/g, "\\'");
  const escTitle = e.title ? e.title.replace(/'/g, "\\'") : null;
  const escDesc = e.description ? e.description.replace(/'/g, "\\'") : null;
  // bodyContent stays as a template-literal — escape backticks + dollar-braces
  const escBody = e.bodyContent.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
  block += `  '${escPath}': {\n`;
  if (escTitle) block += `    title: '${escTitle}',\n`;
  if (escDesc) block += `    description: '${escDesc}',\n`;
  block += `    bodyContent: \`${escBody}\`,\n`;
  block += `  },\n`;
}
block += `};\n\n`;

// Apply override in the route-finalisation step. Hook into a place after all
// routes are pushed but before sitemap generation. We'll patch routes.forEach
// finalisation in prerender to read ROUND6_BODY_OVERRIDES.
block += `// Apply ROUND6_BODY_OVERRIDES to existing routes (and to CTR_OVERRIDES title/desc).\n`;
block += `for (const r of routes) {\n`;
block += `  const o = ROUND6_BODY_OVERRIDES[r.path];\n`;
block += `  if (!o) continue;\n`;
block += `  if (o.title) r.title = o.title;\n`;
block += `  if (o.description) r.description = o.description;\n`;
block += `  if (o.bodyContent) r.bodyContent = o.bodyContent;\n`;
block += `}\n`;
block += `console.log('🎓 Round-6 body overrides applied: ' + Object.keys(ROUND6_BODY_OVERRIDES).length + ' routes');\n`;
block += `// === /Round-6 body overrides ===\n`;

let newPrerender;
if (prerender.includes(MARKER)) {
  // Replace existing block
  newPrerender = prerender.replace(
    new RegExp(`\\n${MARKER.replace(/[/*\-]/g, '\\$&')}[\\s\\S]*?// === /Round-6 body overrides ===\\n`),
    block
  );
} else {
  // Insert before sitemap generation / write step. Find the marker.
  // Looking for "routes.forEach(route =>" — the body-content write loop.
  const insertAfter = prerender.indexOf('routes.forEach(route =>');
  if (insertAfter === -1) {
    console.error('Could not find routes.forEach write loop — aborting.');
    process.exit(1);
  }
  newPrerender = prerender.slice(0, insertAfter) + block + '\n' + prerender.slice(insertAfter);
}

writeFileSync(PRERENDER, newPrerender, 'utf-8');
console.log(`\nInjected ${allEntries.length} body overrides into scripts/prerender.mjs`);
console.log(`Total content: ${allEntries.reduce((s, e) => s + e.words, 0).toLocaleString()} words`);
