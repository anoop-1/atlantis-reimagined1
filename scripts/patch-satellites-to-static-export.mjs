#!/usr/bin/env node
/**
 * Switch all 35 satellite next.config.js from `output: 'standalone'` to `output: 'export'`.
 * Removes `headers()` block (incompatible with static export).
 * Adds `trailingSlash: true` for static file serving compatibility.
 *
 * Result: full static HTML in `out/` directory — no ISR, no serverless functions,
 * zero Fast Origin Transfer for satellite content. Vercel serves pure static files.
 */
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SAT = join(ROOT, 'backlink-sites');

const STATIC_CONFIG = `/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
`;

const sats = readdirSync(SAT, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name)
  .filter(n => existsSync(join(SAT, n, 'next.config.js')));

let patched = 0;
for (const name of sats) {
  const p = join(SAT, name, 'next.config.js');
  const cur = readFileSync(p, 'utf-8');
  if (cur.includes("output: 'export'") && cur.includes('trailingSlash: true')) {
    continue; // already patched
  }
  writeFileSync(p, STATIC_CONFIG, 'utf-8');
  patched++;
  console.log(`patched: ${name}`);
}
console.log(`\nDone. Patched ${patched} / ${sats.length} satellites.`);
console.log('Each next deploy will emit pure static HTML in out/ — no ISR, no SSR functions.');
