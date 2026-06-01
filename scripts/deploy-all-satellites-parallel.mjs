#!/usr/bin/env node
/**
 * Parallel-deploy all satellites via Vercel CLI. Concurrency 8.
 * Usage: VERCEL_TOKEN=vcp_xxx node scripts/deploy-all-satellites-parallel.mjs
 */
import { readdirSync, existsSync, readFileSync, writeFileSync } from 'fs';
import { spawn } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SAT_DIR = join(ROOT, 'backlink-sites');
const CONCURRENCY = 8;
const TOKEN = process.env.VERCEL_TOKEN || process.argv[2];
if (!TOKEN) { console.error('Missing VERCEL_TOKEN'); process.exit(1); }

const sats = readdirSync(SAT_DIR, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name)
  .filter(name => existsSync(join(SAT_DIR, name, '.vercel', 'project.json')));

console.log(`Deploying ${sats.length} satellites in parallel (concurrency ${CONCURRENCY})...`);

const vercelCmd = process.platform === 'win32' ? 'vercel.cmd' : 'vercel';

function deployOne(name) {
  return new Promise(resolve => {
    const dir = join(SAT_DIR, name);
    const proj = JSON.parse(readFileSync(join(dir, '.vercel', 'project.json'), 'utf-8'));
    const start = Date.now();
    const args = ['deploy', '--prod', '--token', TOKEN, '--scope', proj.orgId, '--yes'];
    const p = spawn(vercelCmd, args, { cwd: dir, shell: true });
    let out = '';
    p.stdout.on('data', d => out += d.toString());
    p.stderr.on('data', d => out += d.toString());
    const timer = setTimeout(() => p.kill(), 480_000);
    p.on('close', code => {
      clearTimeout(timer);
      const urlMatch = out.match(/https:\/\/[^\s]+\.vercel\.app/);
      const url = urlMatch ? urlMatch[0] : null;
      const ok = code === 0 && url;
      const elapsed = Math.round((Date.now() - start) / 1000);
      console.log(`  ${ok ? 'OK  ' : 'FAIL'} ${elapsed}s ${name} ${url || '(no url)'}`);
      resolve({ name, projectId: proj.projectId, ok, url, code, elapsedSec: elapsed, errTail: ok ? null : out.slice(-400) });
    });
  });
}

const results = [];
let idx = 0;
async function worker() {
  while (idx < sats.length) {
    const i = idx++;
    if (i >= sats.length) break;
    const r = await deployOne(sats[i]);
    results.push(r);
  }
}

await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));

const ok = results.filter(r => r.ok).length;
console.log(`\nDone. ${ok}/${results.length} deployed successfully.`);
writeFileSync(
  join(__dirname, 'satellite-deploy-log-parallel-2026-05-24.json'),
  JSON.stringify({ generated: new Date().toISOString(), concurrency: CONCURRENCY, total: results.length, successful: ok, results }, null, 2)
);
console.log('Log → scripts/satellite-deploy-log-parallel-2026-05-24.json');
