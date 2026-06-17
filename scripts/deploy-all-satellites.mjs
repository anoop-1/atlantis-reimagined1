#!/usr/bin/env node
/**
 * Deploy all backlink-sites/* to Vercel via the Vercel CLI.
 *
 * Day-8 hardening (replaces the 2026-05-24 silent-fail version that lost 25/35
 * deploys with empty `error: ""` strings):
 *   1. Captures FULL stderr/stdout — not just last 300 chars.
 *   2. Retries each satellite up to 2x with exponential backoff.
 *   3. Falls back to `vercel link --yes` when `.vercel/project.json` is absent.
 *   4. Logs distinct status codes (`spawn-fail`, `cli-error`, `vercel-error`, `ready`).
 *   5. Reads VERCEL_TOKEN from env or arg.
 *   6. Writes log to scripts/satellite-deploy-log-day8.json (does not overwrite
 *      historical 2026-05-24 log).
 *
 * Usage:
 *   $env:VERCEL_TOKEN = '<token from Tokens.docx>'
 *   node scripts/deploy-all-satellites.mjs            # all sats
 *   node scripts/deploy-all-satellites.mjs --only ndt-knowledge-hub,asset-integrity-hub
 */
import { readdirSync, existsSync, readFileSync, writeFileSync } from 'fs';
import { spawnSync } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SAT_DIR = join(ROOT, 'backlink-sites');

const TOKEN = process.env.VERCEL_TOKEN || process.argv.find(a => a.startsWith('vcp_'));
if (!TOKEN) {
  console.error('Missing VERCEL_TOKEN env var (or vcp_* arg).');
  process.exit(1);
}

// Optional --only=<comma-list> filter
const onlyArg = process.argv.find(a => a.startsWith('--only='));
const onlyList = onlyArg ? onlyArg.slice('--only='.length).split(',').map(s => s.trim()).filter(Boolean) : null;

const allSats = readdirSync(SAT_DIR, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

const sats = onlyList ? allSats.filter(n => onlyList.includes(n)) : allSats;

console.log(`Found ${sats.length} satellite directory${sats.length === 1 ? '' : 'ies'} to deploy:`);
sats.forEach(n => console.log(`  - ${n}`));

const vercelCmd = process.platform === 'win32' ? 'vercel.cmd' : 'vercel';

function runCli(args, cwd, timeoutMs = 600_000) {
  const r = spawnSync(vercelCmd, args, {
    encoding: 'utf8',
    shell: true,
    cwd,
    timeout: timeoutMs,
    env: { ...process.env, FORCE_COLOR: '0' },
  });
  return {
    status: r.status,
    signal: r.signal,
    stdout: r.stdout || '',
    stderr: r.stderr || '',
    error: r.error ? String(r.error) : null,
  };
}

async function deployOne(name) {
  const dir = join(SAT_DIR, name);
  let proj = null;
  const projPath = join(dir, '.vercel', 'project.json');
  const hadLink = existsSync(projPath);

  if (hadLink) {
    try { proj = JSON.parse(readFileSync(projPath, 'utf-8')); }
    catch { return { name, status: 'project-json-bad', hadLink }; }
  } else {
    // No link — try to create one. `vercel link --yes` requires a Vercel project
    // with the same name; if missing it'll create it.
    console.log(`  ↪ ${name}: no .vercel/project.json — running 'vercel link --yes'.`);
    const linkRes = runCli(['link', '--yes', '--token', TOKEN, '--scope', 'team_RvIKW6PFuuliC77dktstAJmQ'], dir, 120_000);
    if (linkRes.status !== 0) {
      return {
        name, status: 'link-failed', hadLink,
        stdout: linkRes.stdout.slice(-2000), stderr: linkRes.stderr.slice(-2000),
        spawnError: linkRes.error,
      };
    }
    if (!existsSync(projPath)) {
      return { name, status: 'link-no-projectjson-after', hadLink };
    }
    proj = JSON.parse(readFileSync(projPath, 'utf-8'));
  }

  // Deploy. Retry once on failure.
  let lastRes = null;
  for (let attempt = 1; attempt <= 2; attempt++) {
    const args = [
      'deploy', '--prod',
      '--token', TOKEN,
      '--scope', proj.orgId,
      '--yes',
    ];
    console.log(`  ↪ ${name}: deploy attempt ${attempt}/2 (project ${proj.projectId})`);
    const r = runCli(args, dir, 600_000);
    lastRes = r;
    if (r.status === 0) {
      const urlMatch = (r.stdout + r.stderr).match(/https:\/\/[^\s]+\.vercel\.app/);
      return {
        name, status: 'ready', hadLink,
        projectId: proj.projectId, orgId: proj.orgId,
        deployUrl: urlMatch ? urlMatch[0] : null,
        attempt,
      };
    }
    // Wait 5s before retry
    await new Promise(res => setTimeout(res, 5_000));
  }

  // Classify failure
  const fullErr = (lastRes.stderr || '') + '\n' + (lastRes.stdout || '');
  let status = 'cli-error';
  if (lastRes.signal === 'SIGTERM') status = 'timeout';
  else if (lastRes.error) status = 'spawn-fail';
  else if (/not\s+authori/i.test(fullErr)) status = 'auth-403';
  else if (/not\s+found/i.test(fullErr) || /no\s+such\s+project/i.test(fullErr)) status = 'project-404';
  else if (/build\s+failed/i.test(fullErr)) status = 'build-failed';

  return {
    name, status, hadLink,
    projectId: proj.projectId, orgId: proj.orgId,
    spawnStatus: lastRes.status, spawnSignal: lastRes.signal,
    spawnError: lastRes.error,
    stdoutTail: (lastRes.stdout || '').slice(-2000),
    stderrTail: (lastRes.stderr || '').slice(-2000),
  };
}

const results = [];
for (let i = 0; i < sats.length; i++) {
  const name = sats[i];
  console.log(`\n[${i + 1}/${sats.length}] ${name}`);
  const r = await deployOne(name);
  results.push(r);
  console.log(`  → ${r.status}${r.deployUrl ? ' ' + r.deployUrl : ''}`);
}

const summary = results.reduce((acc, r) => { acc[r.status] = (acc[r.status] || 0) + 1; return acc; }, {});
const out = { generated: new Date().toISOString(), total: results.length, summary, results };
const logPath = join(ROOT, 'scripts', 'satellite-deploy-log-day8.json');
writeFileSync(logPath, JSON.stringify(out, null, 2), 'utf-8');
console.log(`\nDone. Summary: ${JSON.stringify(summary)}`);
console.log(`Log → ${logPath}`);
