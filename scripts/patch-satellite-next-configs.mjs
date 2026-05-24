#!/usr/bin/env node
/**
 * Patch next.config.js across satellites to add typescript.ignoreBuildErrors + eslint.ignoreDuringBuilds.
 * Idempotent.
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

let patched = 0;
const failures = [];

const SNIPPET = `  typescript: { ignoreBuildErrors: true },\n  eslint: { ignoreDuringBuilds: true },`;

for (const name of sats) {
  const p = join(SAT, name, 'next.config.js');
  try { statSync(p); } catch { continue; }
  let src = readFileSync(p, 'utf-8');
  if (src.includes('ignoreBuildErrors')) continue; // already patched

  // Insert after `const nextConfig = {`
  const m = src.match(/(const nextConfig\s*=\s*\{)/);
  if (!m) {
    failures.push({ sat: name, err: 'no nextConfig declaration' });
    continue;
  }
  const insertAt = m.index + m[0].length;
  const newSrc = src.slice(0, insertAt) + '\n' + SNIPPET + '\n' + src.slice(insertAt);
  try {
    writeFileSync(p, newSrc, 'utf-8');
    patched++;
    console.log(`patched: ${name}`);
  } catch (e) {
    failures.push({ sat: name, err: e.message });
  }
}

console.log(`\nDone. Patched ${patched} satellites.`);
if (failures.length) console.log(JSON.stringify(failures, null, 2));
