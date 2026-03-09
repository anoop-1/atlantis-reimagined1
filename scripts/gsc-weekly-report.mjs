#!/usr/bin/env node
/**
 * GSC Weekly Performance Report
 * =============================
 * Week-over-week comparison of clicks, impressions, CTR, position with deltas.
 *
 * USAGE:
 *   node scripts/gsc-weekly-report.mjs           # This week vs last week
 *   node scripts/gsc-weekly-report.mjs --save     # Save report to JSON
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CREDENTIALS_PATH = join(__dirname, 'gsc-service-account.json');
const REPORTS_PATH = join(__dirname, 'weekly-reports.json');
const SITE_URL = 'https://atlantisndt.com';

const args = process.argv.slice(2);
const saveReport = args.includes('--save');

// ─── Auth ────────────────────────────────────────────────────────────────────
async function getAccessToken(credentials, scope) {
  const header = { alg: 'RS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const claim = {
    iss: credentials.client_email,
    scope,
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  };

  const { createSign } = await import('crypto');
  const encode = (obj) => Buffer.from(JSON.stringify(obj)).toString('base64url');
  const unsignedToken = `${encode(header)}.${encode(claim)}`;
  const sign = createSign('RSA-SHA256');
  sign.update(unsignedToken);
  const signature = sign.sign(credentials.private_key, 'base64url');
  const jwt = `${unsignedToken}.${signature}`;

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });

  if (!res.ok) throw new Error(`Token exchange failed: ${res.status} ${await res.text()}`);
  return (await res.json()).access_token;
}

// ─── GSC API ─────────────────────────────────────────────────────────────────
async function querySearchAnalytics(accessToken, { dimensions, startDate, endDate, rowLimit = 25000 }) {
  const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE_URL)}/searchAnalytics/query`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` },
    body: JSON.stringify({ startDate, endDate, dimensions, rowLimit, type: 'web' }),
  });
  if (!res.ok) throw new Error(`Search Analytics failed: ${res.status} ${await res.text()}`);
  return res.json();
}

// ─── Date helpers ───────────────────────────────────────────────────────────
function getWeekRange(weeksAgo = 0) {
  const end = new Date();
  end.setDate(end.getDate() - 3 - (weeksAgo * 7)); // 3-day GSC lag
  const start = new Date(end);
  start.setDate(start.getDate() - 7);
  return {
    startDate: start.toISOString().split('T')[0],
    endDate: end.toISOString().split('T')[0],
  };
}

function pctChange(current, previous) {
  if (previous === 0) return current > 0 ? '+∞' : '0.0%';
  const pct = ((current - previous) / previous * 100).toFixed(1);
  return pct > 0 ? `+${pct}%` : `${pct}%`;
}

function formatDelta(current, previous, inverse = false) {
  const diff = current - previous;
  const sign = diff > 0 ? '+' : '';
  const color = inverse ? (diff < 0 ? '↗' : diff > 0 ? '↘' : '→') : (diff > 0 ? '↗' : diff < 0 ? '↘' : '→');
  return `${sign}${diff.toFixed(1)} ${color}`;
}

// ─── Main ───────────────────────────────────────────────────────────────────
async function main() {
  if (!existsSync(CREDENTIALS_PATH)) {
    console.error('❌ Missing credentials:', CREDENTIALS_PATH);
    process.exit(1);
  }

  const credentials = JSON.parse(readFileSync(CREDENTIALS_PATH, 'utf-8'));
  console.log('🔑 Authenticating...');
  const token = await getAccessToken(credentials, 'https://www.googleapis.com/auth/webmasters.readonly');

  const thisWeek = getWeekRange(0);
  const lastWeek = getWeekRange(1);

  console.log('📡 Fetching this week (%s to %s)...', thisWeek.startDate, thisWeek.endDate);
  console.log('📡 Fetching last week (%s to %s)...', lastWeek.startDate, lastWeek.endDate);

  const [thisWeekData, lastWeekData, thisWeekPages, lastWeekPages] = await Promise.all([
    querySearchAnalytics(token, { dimensions: ['date'], ...thisWeek }),
    querySearchAnalytics(token, { dimensions: ['date'], ...lastWeek }),
    querySearchAnalytics(token, { dimensions: ['page'], ...thisWeek }),
    querySearchAnalytics(token, { dimensions: ['page'], ...lastWeek }),
  ]);

  // Aggregate weekly totals
  const aggregate = (rows) => ({
    clicks: (rows || []).reduce((s, r) => s + r.clicks, 0),
    impressions: (rows || []).reduce((s, r) => s + r.impressions, 0),
    ctr: (rows || []).reduce((s, r) => s + r.ctr, 0) / Math.max((rows || []).length, 1),
    position: (rows || []).reduce((s, r) => s + r.position, 0) / Math.max((rows || []).length, 1),
  });

  const tw = aggregate(thisWeekData.rows);
  const lw = aggregate(lastWeekData.rows);

  console.log('\n═══════════════════════════════════════════════════════');
  console.log('  WEEKLY PERFORMANCE REPORT — %s', SITE_URL);
  console.log('  This week: %s to %s', thisWeek.startDate, thisWeek.endDate);
  console.log('  Last week: %s to %s', lastWeek.startDate, lastWeek.endDate);
  console.log('═══════════════════════════════════════════════════════');

  console.log('\n📊 Overview:');
  console.log('   %-18s  %10s  %10s  %12s  %10s', 'Metric', 'This Week', 'Last Week', 'Change', 'Delta %');
  console.log('   ' + '─'.repeat(70));
  console.log('   %-18s  %10d  %10d  %12s  %10s', 'Clicks', tw.clicks, lw.clicks, formatDelta(tw.clicks, lw.clicks), pctChange(tw.clicks, lw.clicks));
  console.log('   %-18s  %10d  %10d  %12s  %10s', 'Impressions', tw.impressions, lw.impressions, formatDelta(tw.impressions, lw.impressions), pctChange(tw.impressions, lw.impressions));
  console.log('   %-18s  %9.2f%%  %9.2f%%  %12s  %10s', 'CTR', tw.ctr * 100, lw.ctr * 100, formatDelta(tw.ctr * 100, lw.ctr * 100), pctChange(tw.ctr, lw.ctr));
  console.log('   %-18s  %10.1f  %10.1f  %12s  %10s', 'Avg Position', tw.position, lw.position, formatDelta(tw.position, lw.position, true), pctChange(tw.position, lw.position));

  // Top movers (pages that improved/declined most)
  const pageMap = {};
  (thisWeekPages.rows || []).forEach(r => {
    const page = r.keys[0].replace(SITE_URL, '') || '/';
    pageMap[page] = { thisWeek: r };
  });
  (lastWeekPages.rows || []).forEach(r => {
    const page = r.keys[0].replace(SITE_URL, '') || '/';
    if (!pageMap[page]) pageMap[page] = {};
    pageMap[page].lastWeek = r;
  });

  const movers = Object.entries(pageMap)
    .filter(([, v]) => v.thisWeek && v.lastWeek)
    .map(([page, v]) => ({
      page,
      clickDelta: v.thisWeek.clicks - v.lastWeek.clicks,
      impDelta: v.thisWeek.impressions - v.lastWeek.impressions,
      twClicks: v.thisWeek.clicks,
      lwClicks: v.lastWeek.clicks,
    }))
    .sort((a, b) => b.clickDelta - a.clickDelta);

  if (movers.length > 0) {
    console.log('\n📈 Top Gainers (by clicks):');
    console.log('   %-45s  %6s → %6s  %8s', 'Page', 'Last', 'This', 'Delta');
    console.log('   ' + '─'.repeat(70));
    movers.filter(m => m.clickDelta > 0).slice(0, 10).forEach(m => {
      console.log('   %-45s  %6d → %6d  %+8d', m.page.substring(0, 45), m.lwClicks, m.twClicks, m.clickDelta);
    });

    console.log('\n📉 Top Decliners (by clicks):');
    console.log('   %-45s  %6s → %6s  %8s', 'Page', 'Last', 'This', 'Delta');
    console.log('   ' + '─'.repeat(70));
    movers.filter(m => m.clickDelta < 0).slice(-10).reverse().forEach(m => {
      console.log('   %-45s  %6d → %6d  %+8d', m.page.substring(0, 45), m.lwClicks, m.twClicks, m.clickDelta);
    });
  }

  // New pages (appeared this week, not last week)
  const newPages = Object.entries(pageMap)
    .filter(([, v]) => v.thisWeek && !v.lastWeek && v.thisWeek.clicks > 0)
    .map(([page, v]) => ({ page, clicks: v.thisWeek.clicks, impressions: v.thisWeek.impressions }))
    .sort((a, b) => b.clicks - a.clicks);

  if (newPages.length > 0) {
    console.log('\n🆕 New Pages This Week:');
    newPages.slice(0, 10).forEach(p => {
      console.log('   %s — %d clicks, %d impressions', p.page, p.clicks, p.impressions);
    });
  }

  // Save report
  if (saveReport) {
    const reports = existsSync(REPORTS_PATH) ? JSON.parse(readFileSync(REPORTS_PATH, 'utf-8')) : [];
    reports.push({
      date: new Date().toISOString(),
      period: thisWeek,
      metrics: tw,
      previousMetrics: lw,
      topGainers: movers.filter(m => m.clickDelta > 0).slice(0, 5),
      topDecliners: movers.filter(m => m.clickDelta < 0).slice(-5),
    });
    writeFileSync(REPORTS_PATH, JSON.stringify(reports, null, 2), 'utf-8');
    console.log('\n💾 Report saved to %s (%d total reports)', REPORTS_PATH, reports.length);
  }
}

main().catch(err => { console.error('❌', err.message); process.exit(1); });
