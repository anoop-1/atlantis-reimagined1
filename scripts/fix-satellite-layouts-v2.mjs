#!/usr/bin/env node
/**
 * V2 fix — replace exact strings before/after the JSX siblings in Header() and Footer().
 * Wraps three sibling JSX elements in <>...</>.
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
const failures = [];

for (const name of sats) {
  const p = join(SAT, name, 'src', 'app', 'layout.tsx');
  try { statSync(p); } catch { continue; }
  let src = readFileSync(p, 'utf-8');
  let changed = false;

  // Already wrapped check — Header
  const hasFragHeader = /function Header\(\)\s*\{\s*return\s*\(\s*<>/m.test(src);
  if (!hasFragHeader) {
    // Insert <> after "function Header() {\n  return ("
    // and </> before the matching ");" that closes Header
    const headerOpen = /(function Header\(\)\s*\{\s*return\s*\()/;
    const m = src.match(headerOpen);
    if (m) {
      // Walk forward to find the matching ");\n}" at top-level
      const start = m.index + m[0].length;
      let depth = 1;
      let i = start;
      while (i < src.length && depth > 0) {
        const ch = src[i];
        if (ch === '(') depth++;
        else if (ch === ')') {
          depth--;
          if (depth === 0) break;
        }
        // Skip strings/template literals to avoid false parens
        else if (ch === '`') {
          const end = src.indexOf('`', i + 1);
          i = end > i ? end : i;
        }
        else if (ch === '"') {
          const end = src.indexOf('"', i + 1);
          i = end > i ? end : i;
        }
        else if (ch === "'") {
          const end = src.indexOf("'", i + 1);
          i = end > i ? end : i;
        }
        i++;
      }
      if (depth === 0) {
        // i is at the closing ")" of Header's return
        // Insert <>...</> wrap
        const before = src.slice(0, start);
        const body = src.slice(start, i);
        const after = src.slice(i);
        src = before + '\n    <>' + body + '    </>\n  ' + after;
        changed = true;
      }
    }
  }

  if (changed) {
    try {
      writeFileSync(p, src, 'utf-8');
      fixed++;
      console.log(`fixed: ${name}`);
    } catch (e) {
      failures.push({ sat: name, err: e.message });
    }
  }
}

console.log(`\nDone. Fixed ${fixed} satellites.`);
if (failures.length) console.log(JSON.stringify(failures, null, 2));
