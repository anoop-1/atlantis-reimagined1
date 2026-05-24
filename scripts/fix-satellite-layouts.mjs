#!/usr/bin/env node
/**
 * Fix Header() JSX bug in satellite layout.tsx files.
 * Header returns multiple JSX siblings without fragment wrap — breaks Next.js build.
 * Wraps Header()'s return body in <>...</>.
 *
 * Idempotent — skips files already wrapped.
 */
import { readdirSync, readFileSync, writeFileSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SAT = join(ROOT, 'backlink-sites');

const sats = readdirSync(SAT, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

let fixed = 0;
let alreadyOk = 0;
const failures = [];

for (const name of sats) {
  const p = join(SAT, name, 'src', 'app', 'layout.tsx');
  try { statSync(p); } catch { continue; }
  const src = readFileSync(p, 'utf-8');

  // Match: function Header() { return ( ...JSX... ); }
  // The body usually has multiple <script>, <header>, etc. siblings.
  // We wrap the return value parens content in <> ... </> if not already wrapped.

  const headerMatch = src.match(/(function Header\(\)\s*\{\s*return\s*\()([\s\S]*?)(\);\s*\})/);
  if (!headerMatch) { continue; }

  const body = headerMatch[2].trim();
  // Already wrapped?
  if (body.startsWith('<>') || body.startsWith('<React.Fragment')) {
    alreadyOk++;
    continue;
  }
  // Body must be JSX. Wrap.
  const newReturn = `${headerMatch[1]}\n    <>\n${headerMatch[2].replace(/\n/g, '\n  ')}\n    </>\n  ${headerMatch[3]}`;
  const newSrc = src.replace(headerMatch[0], newReturn);

  // Also check Footer() for same bug
  const footerMatch = newSrc.match(/(function Footer\(\)\s*\{\s*return\s*\()([\s\S]*?)(\);\s*\})/);
  let finalSrc = newSrc;
  if (footerMatch) {
    const fbody = footerMatch[2].trim();
    if (!fbody.startsWith('<>') && !fbody.startsWith('<React.Fragment') && !fbody.startsWith('<footer') && !fbody.startsWith('<div')) {
      // wrap if multiple siblings
      const siblings = fbody.split(/<\/(?:footer|div|nav|section|aside)>/g).filter(s => s.trim()).length;
      // crude heuristic — just check if body contains 2+ top-level openings
      const opens = (fbody.match(/^\s*<[A-Za-z]/gm) || []).length;
      if (opens > 1) {
        const newFooter = `${footerMatch[1]}\n    <>\n${footerMatch[2].replace(/\n/g, '\n  ')}\n    </>\n  ${footerMatch[3]}`;
        finalSrc = newSrc.replace(footerMatch[0], newFooter);
      }
    }
  }

  try {
    writeFileSync(p, finalSrc, 'utf-8');
    fixed++;
    console.log(`fixed: ${name}/src/app/layout.tsx`);
  } catch (e) {
    failures.push({ sat: name, err: e.message });
  }
}

console.log(`\nDone. Fixed ${fixed} / ${sats.length} satellites. ${alreadyOk} already OK. ${failures.length} failures.`);
if (failures.length) console.log(JSON.stringify(failures, null, 2));
