// Free downloads block + custom-templates quotation CTA in the crawler HTML (owner, 2026-10-24).
// Copy, placements and markup: src/data/free-downloads-2026-10.mjs (React: FreeDownloadsBlock.tsx).
// Inserted before </main>, ahead of the coverage block (slot "downloads:" precedes "coverage:").
import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { downloadsFor, downloadsHtml, PLACEMENTS, TEMPLATES, PACKS, DOWNLOADS_COPY } from '../src/data/free-downloads-2026-10.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
export const freeDownloadsStats = { pages: 0 };
const BLOCK_RE = /<section data-free-downloads="2026-10"[\s\S]*?<\/section>/g;

export function applyDownloadsRoute(route) {
  const b = downloadsFor(route?.path);
  if (!b || typeof route.bodyContent !== 'string') return route;
  let body = route.bodyContent.replace(BLOCK_RE, '');
  const html = downloadsHtml(b);
  const i = body.lastIndexOf('</main>');
  body = i >= 0 ? body.slice(0, i) + html + body.slice(i) : body + html;
  freeDownloadsStats.pages++;
  return { ...route, bodyContent: body };
}

/** Build guard: every file exists, every placement page is built, no price wording in the CTA. */
export function assertDownloadsClean(knownPaths) {
  const problems = [];
  for (const t of Object.values(TEMPLATES)) {
    if (!existsSync(join(ROOT, 'public', t.file))) problems.push(`missing file ${t.file}`);
    if (knownPaths && !knownPaths.has(t.page)) problems.push(`template page ${t.page} not built`);
  }
  for (const p of Object.values(PACKS)) if (!existsSync(join(ROOT, 'public', p.file))) problems.push(`missing file ${p.file}`);
  if (knownPaths) for (const [paths] of PLACEMENTS) for (const p of paths) if (!knownPaths.has(p)) problems.push(`placement ${p} not built`);
  if (/[$£€₹]\s?\d|\bprice|\bfee\b|\bdiscount/i.test(JSON.stringify(DOWNLOADS_COPY))) problems.push('price wording in downloads copy');
  if (problems.length) throw new Error(`free-downloads: ${problems.length} problem(s):\n  ${problems.join('\n  ')}`);
  console.log(`⬇️  Free downloads 2026-10-24: ${Object.keys(TEMPLATES).length} Excel templates, ${Object.keys(PACKS).length} practice PDFs, guard PASS`);
}
