#!/usr/bin/env node
/**
 * Day-8 — Audit Vercel link status of every backlink-sites/* directory and
 * the latest deploy state via the Vercel API. Pinpoints WHY 25/35 satellites
 * silently failed in 2026-05-24 deploy log (`error: ""`). Classifies each
 * satellite into:
 *   - no-link        — .vercel/project.json absent (never linked)
 *   - project-404    — linked locally but project deleted on Vercel
 *   - auth-403       — token not authorised for this project
 *   - deploy-failed  — latest deployment state ERROR / CANCELED
 *   - building       — latest deployment is still BUILDING (race)
 *   - ready          — latest deployment is READY and served
 *
 * Output: scripts/_satellite-link-audit-day8.json
 *
 * Token: set $env:VERCEL_TOKEN before running (from Tokens.docx).
 */
import { readdirSync, existsSync, readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SAT_DIR = join(ROOT, 'backlink-sites');

const TOKEN = process.env.VERCEL_TOKEN;
if (!TOKEN) {
  console.error('Missing VERCEL_TOKEN env var.');
  process.exit(1);
}

const sats = readdirSync(SAT_DIR, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

console.log(`Found ${sats.length} satellite directories under backlink-sites/.`);

const report = [];
for (let i = 0; i < sats.length; i++) {
  const name = sats[i];
  const dir = join(SAT_DIR, name);
  const projPath = join(dir, '.vercel', 'project.json');
  if (!existsSync(projPath)) {
    report.push({ name, status: 'no-link' });
    console.log(`[${i + 1}/${sats.length}] ${name}: no-link`);
    continue;
  }
  let proj;
  try { proj = JSON.parse(readFileSync(projPath, 'utf-8')); }
  catch { report.push({ name, status: 'project-json-bad' }); continue; }

  const teamQ = proj.orgId ? `?teamId=${proj.orgId}` : '';
  const headers = { Authorization: `Bearer ${TOKEN}` };

  let projRes, depRes;
  try {
    projRes = await fetch(`https://api.vercel.com/v9/projects/${proj.projectId}${teamQ}`, { headers });
    depRes  = await fetch(`https://api.vercel.com/v6/deployments${teamQ ? teamQ + '&' : '?'}projectId=${proj.projectId}&limit=1`, { headers });
  } catch (e) {
    report.push({ name, status: 'network-error', error: String(e) });
    continue;
  }

  if (projRes.status === 404) {
    report.push({ name, status: 'project-404', projectId: proj.projectId });
    console.log(`[${i + 1}/${sats.length}] ${name}: project-404 (deleted on Vercel)`);
    continue;
  }
  if (projRes.status === 403) {
    report.push({ name, status: 'auth-403', projectId: proj.projectId });
    console.log(`[${i + 1}/${sats.length}] ${name}: auth-403 (token can't access project)`);
    continue;
  }
  if (!projRes.ok) {
    report.push({ name, status: `project-${projRes.status}`, projectId: proj.projectId });
    continue;
  }
  const projData = await projRes.json();
  const depData = depRes.ok ? await depRes.json() : { deployments: [] };
  const latest = depData.deployments?.[0];
  const state = latest?.state || latest?.readyState || 'none';
  const status = state === 'READY' ? 'ready'
              : state === 'BUILDING' || state === 'QUEUED' ? 'building'
              : state === 'ERROR' || state === 'CANCELED' ? 'deploy-failed'
              : 'unknown';
  report.push({
    name,
    status,
    projectId: proj.projectId,
    orgId: proj.orgId,
    projectName: projData.name,
    latestState: state,
    latestUrl: latest?.url ? `https://${latest.url}` : null,
    latestCreated: latest?.created || null,
    framework: projData.framework,
    rootDirectory: projData.rootDirectory,
  });
  console.log(`[${i + 1}/${sats.length}] ${name}: ${status} (latest state: ${state})`);
}

const summary = report.reduce((acc, r) => { acc[r.status] = (acc[r.status] || 0) + 1; return acc; }, {});
const out = { generated: new Date().toISOString(), total: sats.length, summary, results: report };
const outPath = join(ROOT, 'scripts', '_satellite-link-audit-day8.json');
writeFileSync(outPath, JSON.stringify(out, null, 2), 'utf-8');
console.log(`\nSummary: ${JSON.stringify(summary)}\nReport → ${outPath}`);
