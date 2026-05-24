#!/usr/bin/env node
/**
 * Deploy all 35 satellites to Vercel using their existing .vercel/project.json links.
 * Reads VERCEL_TOKEN from env or arg.
 *   Usage: VERCEL_TOKEN=vcp_xxx node scripts/deploy-all-satellites.mjs
 *   Or:    node scripts/deploy-all-satellites.mjs <token>
 */
import { readdirSync, existsSync, readFileSync } from 'fs';
import { spawnSync } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SAT_DIR = join(ROOT, 'backlink-sites');

const TOKEN = process.env.VERCEL_TOKEN || process.argv[2];
if (!TOKEN) {
  console.error('Missing VERCEL_TOKEN. Pass as env or arg.');
  process.exit(1);
}

// List of satellite dirs that have .vercel/project.json
const sats = readdirSync(SAT_DIR, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name)
  .filter(name => existsSync(join(SAT_DIR, name, '.vercel', 'project.json')));

console.log(`Found ${sats.length} satellites to deploy:\n  ${sats.join('\n  ')}\n`);

const results = [];
const vercelCmd = process.platform === 'win32' ? 'vercel.cmd' : 'vercel';

for (let i = 0; i < sats.length; i++) {
  const name = sats[i];
  const dir = join(SAT_DIR, name);
  const proj = JSON.parse(readFileSync(join(dir, '.vercel', 'project.json'), 'utf-8'));
  console.log(`[${i+1}/${sats.length}] Deploying ${name} (project ${proj.projectId})...`);
  const r = spawnSync(vercelCmd, [
    'deploy',
    '--prod',
    '--token', TOKEN,
    '--scope', proj.orgId,
    '--yes',
  ], { encoding: 'utf8', shell: true, cwd: dir, timeout: 600_000 });
  const out = (r.stdout || '') + (r.stderr || '');
  const urlMatch = out.match(/https:\/\/[^\s]+\.vercel\.app/);
  const deployUrl = urlMatch ? urlMatch[0] : '(no URL)';
  const success = r.status === 0;
  console.log(`  → ${success ? 'OK' : 'FAIL'} ${deployUrl} ${success ? '' : '\n    err: ' + out.slice(-300)}`);
  results.push({ name, projectId: proj.projectId, success, deployUrl, error: success ? null : out.slice(-500) });
}

const ok = results.filter(r => r.success).length;
console.log(`\nDone. ${ok}/${results.length} deployed successfully.`);
const log = { generated: new Date().toISOString(), total: results.length, successful: ok, results };
import('fs').then(fs => fs.writeFileSync(join(__dirname, 'satellite-deploy-log-2026-05-24.json'), JSON.stringify(log, null, 2)));
console.log('Log → scripts/satellite-deploy-log-2026-05-24.json');
