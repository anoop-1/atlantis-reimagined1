#!/usr/bin/env node
/**
 * 30-day click tracker — measures progress vs 4,000-clicks-in-30-days goal.
 *
 * Pulls last 30 days of GSC clicks/impressions/CTR/position for:
 *   - whole atlantisndt.com
 *   - /erp section only
 *   - /digital-twin* section only
 *   - top-30 newly-created pages
 *
 * Writes a snapshot to scripts/30day-tracker-snapshots/{date}.json
 * and prints a delta vs the prior snapshot.
 *
 * Goal start date: 2026-05-23.
 *
 * Usage: node scripts/gsc-30day-tracker.mjs
 */
import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync } from 'fs';
import { createSign } from 'crypto';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const CRED = join(__dirname, 'gsc-service-account.json');
const SNAP_DIR = join(__dirname, '30day-tracker-snapshots');
const URL_LIST = join(__dirname, 'indexing-url-list.json');
const SITE = 'sc-domain:atlantisndt.com';
const GOAL_START = '2026-05-23';
// Updated 2026-05-24 — new goal is site-wide 30k clicks/month by 2026-06-22
const GOAL_CLICKS = 30000;     // site-wide last 30d
const GOAL_DAYS = 30;
const GOAL_TARGET_DATE = '2026-06-22';

if (!existsSync(SNAP_DIR)) mkdirSync(SNAP_DIR, { recursive: true });

const cred = JSON.parse(readFileSync(CRED, 'utf-8'));

async function getToken() {
  const now = Math.floor(Date.now() / 1000);
  const enc = o => Buffer.from(JSON.stringify(o)).toString('base64url');
  const h = enc({ alg: 'RS256', typ: 'JWT' });
  const c = enc({ iss: cred.client_email, scope: 'https://www.googleapis.com/auth/webmasters.readonly', aud: 'https://oauth2.googleapis.com/token', exp: now + 3600, iat: now });
  const u = h + '.' + c;
  const sig = createSign('RSA-SHA256').update(u).sign(cred.private_key, 'base64url');
  const res = await fetch('https://oauth2.googleapis.com/token', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: 'grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=' + u + '.' + sig });
  return (await res.json()).access_token;
}

async function query(token, body) {
  const r = await fetch('https://searchconsole.googleapis.com/webmasters/v3/sites/' + encodeURIComponent(SITE) + '/searchAnalytics/query', { method: 'POST', headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  return r.json();
}

function range(days) {
  const end = new Date(); end.setDate(end.getDate() - 3);
  const start = new Date(end); start.setDate(start.getDate() - days);
  return { startDate: start.toISOString().slice(0, 10), endDate: end.toISOString().slice(0, 10) };
}

function bucket(page) {
  const p = page.replace('https://atlantisndt.com', '');
  if (p === '/erp' || p.startsWith('/erp/') || p.startsWith('/ndt-erp-')) return 'erp';
  if (p.startsWith('/digital-twin')) return 'dt';
  if (p.startsWith('/training') || p.startsWith('/ndt-training') || p === '/training' || p.includes('-training-') || p.includes('-certification')) return 'training';
  if (p.startsWith('/consulting')) return 'consulting';
  return 'other';
}

async function main() {
  const t = await getToken();
  const r30 = range(30);

  console.log('Pulling GSC 30d', r30.startDate, '→', r30.endDate);
  const pageRes = await query(t, { ...r30, dimensions: ['page'], rowLimit: 25000, dataState: 'all' });
  const rows = pageRes.rows || [];

  const sums = {
    all: { clicks: 0, imp: 0 },
    erp: { clicks: 0, imp: 0, pages: 0 },
    dt: { clicks: 0, imp: 0, pages: 0 },
    training: { clicks: 0, imp: 0, pages: 0 },
    consulting: { clicks: 0, imp: 0, pages: 0 },
    other: { clicks: 0, imp: 0, pages: 0 },
  };
  for (const row of rows) {
    sums.all.clicks += row.clicks;
    sums.all.imp += row.impressions;
    const b = bucket(row.keys[0]);
    sums[b].clicks += row.clicks;
    sums[b].imp += row.impressions;
    sums[b].pages += 1;
  }

  // New pages from indexing-url-list.json
  const newUrls = new Set();
  if (existsSync(URL_LIST)) {
    const l = JSON.parse(readFileSync(URL_LIST, 'utf-8'));
    l.urls.forEach(u => newUrls.add(u.url));
  }
  let newPagesClicks = 0, newPagesImp = 0, newPagesWithImp = 0;
  for (const row of rows) {
    if (newUrls.has(row.keys[0])) {
      newPagesClicks += row.clicks;
      newPagesImp += row.impressions;
      if (row.impressions > 0) newPagesWithImp++;
    }
  }

  const erpDtClicks = sums.erp.clicks + sums.dt.clicks;
  const erpDtImp = sums.erp.imp + sums.dt.imp;
  const daysSinceStart = Math.floor((Date.now() - new Date(GOAL_START).getTime()) / 86400000);
  const daysRemaining = Math.max(0, GOAL_DAYS - daysSinceStart);
  const progress = sums.all.clicks / GOAL_CLICKS;
  const onPace = daysSinceStart > 0 ? (sums.all.clicks / daysSinceStart) * GOAL_DAYS : 0;

  const snap = {
    date: new Date().toISOString().slice(0, 10),
    range: r30,
    daysSinceGoalStart: daysSinceStart,
    daysRemaining,
    goal: { clicks: GOAL_CLICKS, days: GOAL_DAYS },
    siteWide: sums.all,
    erp: sums.erp,
    dt: sums.dt,
    erpDtCombined: { clicks: erpDtClicks, imp: erpDtImp, ctrPct: erpDtImp > 0 ? (erpDtClicks / erpDtImp * 100).toFixed(2) : '0' },
    newPages: { tracked: newUrls.size, withImpressions: newPagesWithImp, clicks: newPagesClicks, imp: newPagesImp },
    progressVsGoal: { pct: (progress * 100).toFixed(1), projectedAt30d: Math.round(onPace) },
  };

  // Find prior snapshot
  const files = readdirSync(SNAP_DIR).filter(f => f.endsWith('.json')).sort();
  let prior = null;
  if (files.length > 0) {
    try { prior = JSON.parse(readFileSync(join(SNAP_DIR, files[files.length - 1]), 'utf-8')); } catch {}
  }

  const out = join(SNAP_DIR, snap.date + '.json');
  writeFileSync(out, JSON.stringify(snap, null, 2));

  console.log('');
  console.log('═══════════════════════════════════════════════════════════════');
  console.log(' 30-DAY SITE-WIDE TRACKER —', snap.date);
  console.log('═══════════════════════════════════════════════════════════════');
  console.log(' Goal:', GOAL_CLICKS, 'site-wide clicks in 30 days by', GOAL_TARGET_DATE);
  console.log(' Days since start:', daysSinceStart, '| Days remaining:', daysRemaining);
  console.log('');
  console.log(' Site-wide last 30d  : clicks=' + sums.all.clicks + ' imp=' + sums.all.imp);
  console.log(' Training section    : clicks=' + sums.training.clicks + ' imp=' + sums.training.imp + ' pages=' + sums.training.pages);
  console.log(' Consulting section  : clicks=' + sums.consulting.clicks + ' imp=' + sums.consulting.imp + ' pages=' + sums.consulting.pages);
  console.log(' ERP section         : clicks=' + sums.erp.clicks + ' imp=' + sums.erp.imp + ' pages=' + sums.erp.pages);
  console.log(' DT section          : clicks=' + sums.dt.clicks + ' imp=' + sums.dt.imp + ' pages=' + sums.dt.pages);
  console.log(' Other (blog/methods): clicks=' + sums.other.clicks + ' imp=' + sums.other.imp + ' pages=' + sums.other.pages);
  console.log(' ERP+DT combined     : clicks=' + erpDtClicks + ' imp=' + erpDtImp);
  console.log('');
  console.log(' New pages tracked   :', newUrls.size);
  console.log(' New pages w/ impr   :', newPagesWithImp);
  console.log(' New pages clicks    :', newPagesClicks);
  console.log(' New pages imp       :', newPagesImp);
  console.log('');
  console.log(' Progress vs goal    :', snap.progressVsGoal.pct + '%   (', sums.all.clicks, '/', GOAL_CLICKS, ')');
  console.log(' Projected at day 30 :', snap.progressVsGoal.projectedAt30d, 'clicks');
  console.log(' On-pace?            :', snap.progressVsGoal.projectedAt30d >= GOAL_CLICKS ? 'YES' : 'NO — accelerate');

  if (prior) {
    const d = (k1, k2) => (snap[k1][k2] || 0) - (prior[k1]?.[k2] || 0);
    console.log('');
    console.log(' Δ vs prior snapshot (' + prior.date + '):');
    console.log('   Site-wide clicks Δ : ' + (sums.all.clicks - (prior.siteWide?.clicks || 0)));
    console.log('   ERP clicks Δ       : ' + (sums.erp.clicks - (prior.erp?.clicks || 0)));
    console.log('   DT clicks Δ        : ' + (sums.dt.clicks - (prior.dt?.clicks || 0)));
    console.log('   New pages w/ imp Δ : ' + (newPagesWithImp - (prior.newPages?.withImpressions || 0)));
  }
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('Snapshot saved →', out.replace(ROOT + '\\', ''));
}

main().catch(e => { console.error(e); process.exit(1); });
