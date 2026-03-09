#!/usr/bin/env node
/**
 * GSC Ranking Alerts
 * ==================
 * Compares current positions against a baseline, alerts on significant changes.
 *
 * USAGE:
 *   node scripts/gsc-alerts.mjs               # Check for ranking changes
 *   node scripts/gsc-alerts.mjs --baseline     # Save current positions as baseline
 *   node scripts/gsc-alerts.mjs --threshold 5  # Alert on >5 position drops (default: 3)
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CREDENTIALS_PATH = join(__dirname, 'gsc-service-account.json');
const RANKING_BASELINE_PATH = join(__dirname, 'ranking-baseline.json');
const SITE_URL = 'https://atlantisndt.com';

const args = process.argv.slice(2);
const saveBaseline = args.includes('--baseline');
const thresholdIdx = args.indexOf('--threshold');
const threshold = thresholdIdx !== -1 ? parseInt(args[thresholdIdx + 1], 10) : 3;

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

function getDateRange(numDays = 7) {
  const end = new Date();
  end.setDate(end.getDate() - 3);
  const start = new Date(end);
  start.setDate(start.getDate() - numDays);
  return {
    startDate: start.toISOString().split('T')[0],
    endDate: end.toISOString().split('T')[0],
  };
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

  const range = getDateRange(7);
  console.log('📡 Fetching query positions (%s to %s)...', range.startDate, range.endDate);

  const queryData = await querySearchAnalytics(token, { dimensions: ['query'], ...range });
  const pageData = await querySearchAnalytics(token, { dimensions: ['page'], ...range });

  // Build current position map
  const currentQueryPositions = {};
  (queryData.rows || []).forEach(r => {
    currentQueryPositions[r.keys[0]] = {
      position: r.position,
      clicks: r.clicks,
      impressions: r.impressions,
    };
  });

  const currentPagePositions = {};
  (pageData.rows || []).forEach(r => {
    const page = r.keys[0].replace(SITE_URL, '') || '/';
    currentPagePositions[page] = {
      position: r.position,
      clicks: r.clicks,
      impressions: r.impressions,
    };
  });

  if (saveBaseline) {
    writeFileSync(RANKING_BASELINE_PATH, JSON.stringify({
      date: new Date().toISOString(),
      period: range,
      queries: currentQueryPositions,
      pages: currentPagePositions,
    }, null, 2), 'utf-8');
    console.log('💾 Baseline saved (%d queries, %d pages)', Object.keys(currentQueryPositions).length, Object.keys(currentPagePositions).length);
    return;
  }

  // Compare against baseline
  if (!existsSync(RANKING_BASELINE_PATH)) {
    console.log('⚠️  No baseline found. Run with --baseline first to create one.');
    console.log('   Showing current top positions instead...\n');

    // Show top 10 entries
    const topNew = Object.entries(currentPagePositions)
      .filter(([, v]) => v.position <= 10)
      .sort((a, b) => a[1].position - b[1].position);

    console.log('🏆 Pages in Top 10:');
    console.log('   %-45s  %8s  %8s  %8s', 'Page', 'Position', 'Clicks', 'Impressions');
    console.log('   ' + '─'.repeat(75));
    topNew.forEach(([page, v]) => {
      console.log('   %-45s  %8.1f  %8d  %8d', page.substring(0, 45), v.position, v.clicks, v.impressions);
    });
    return;
  }

  const baseline = JSON.parse(readFileSync(RANKING_BASELINE_PATH, 'utf-8'));
  console.log('📋 Comparing against baseline from %s', baseline.date.split('T')[0]);

  let alerts = 0;

  // ─── Query position alerts ─────────────────────────────────────────────
  const queryDrops = [];
  const queryGains = [];
  const newTop10 = [];

  for (const [query, current] of Object.entries(currentQueryPositions)) {
    const prev = baseline.queries[query];
    if (prev) {
      const delta = current.position - prev.position;
      if (delta > threshold) {
        queryDrops.push({ query, from: prev.position, to: current.position, delta, impressions: current.impressions });
      } else if (delta < -threshold) {
        queryGains.push({ query, from: prev.position, to: current.position, delta, impressions: current.impressions });
      }
    }
    if (current.position <= 10 && (!prev || prev.position > 10)) {
      newTop10.push({ query, position: current.position, clicks: current.clicks, impressions: current.impressions });
    }
  }

  // ─── Page position alerts ──────────────────────────────────────────────
  const pageDrops = [];
  const pageGains = [];

  for (const [page, current] of Object.entries(currentPagePositions)) {
    const prev = baseline.pages[page];
    if (prev) {
      const delta = current.position - prev.position;
      if (delta > threshold) {
        pageDrops.push({ page, from: prev.position, to: current.position, delta, impressions: current.impressions });
      } else if (delta < -threshold) {
        pageGains.push({ page, from: prev.position, to: current.position, delta, impressions: current.impressions });
      }
    }
  }

  console.log('\n═══════════════════════════════════════════════════════');
  console.log('  RANKING ALERTS — Threshold: >%d positions', threshold);
  console.log('═══════════════════════════════════════════════════════');

  // New top-10 entries
  if (newTop10.length > 0) {
    console.log('\n🏆 NEW Top 10 Entries:');
    newTop10.sort((a, b) => a.position - b.position).forEach(e => {
      console.log('   ✅ "%s" — position %.1f (%d clicks, %d imp)', e.query, e.position, e.clicks, e.impressions);
    });
    alerts += newTop10.length;
  }

  // Query gains
  if (queryGains.length > 0) {
    queryGains.sort((a, b) => a.delta - b.delta);
    console.log('\n📈 Query Position Improvements (>%d positions):', threshold);
    queryGains.slice(0, 15).forEach(e => {
      console.log('   ↗ "%s" — %.1f → %.1f (%+.1f)', e.query, e.from, e.to, e.delta);
    });
    alerts += queryGains.length;
  }

  // Query drops
  if (queryDrops.length > 0) {
    queryDrops.sort((a, b) => b.delta - a.delta);
    console.log('\n🚨 Query Position Drops (>%d positions):', threshold);
    queryDrops.slice(0, 15).forEach(e => {
      console.log('   ↘ "%s" — %.1f → %.1f (%+.1f) [%d imp]', e.query, e.from, e.to, e.delta, e.impressions);
    });
    alerts += queryDrops.length;
  }

  // Page gains
  if (pageGains.length > 0) {
    pageGains.sort((a, b) => a.delta - b.delta);
    console.log('\n📈 Page Position Improvements (>%d positions):', threshold);
    pageGains.slice(0, 10).forEach(e => {
      console.log('   ↗ %s — %.1f → %.1f (%+.1f)', e.page, e.from, e.to, e.delta);
    });
  }

  // Page drops
  if (pageDrops.length > 0) {
    pageDrops.sort((a, b) => b.delta - a.delta);
    console.log('\n🚨 Page Position Drops (>%d positions):', threshold);
    pageDrops.slice(0, 10).forEach(e => {
      console.log('   ↘ %s — %.1f → %.1f (%+.1f) [%d imp]', e.page, e.from, e.to, e.delta, e.impressions);
    });
  }

  if (alerts === 0 && queryDrops.length === 0 && queryGains.length === 0) {
    console.log('\n✅ No significant ranking changes detected.');
  }

  console.log('\n📊 Summary: %d improvements, %d drops, %d new top-10', queryGains.length + pageGains.length, queryDrops.length + pageDrops.length, newTop10.length);
}

main().catch(err => { console.error('❌', err.message); process.exit(1); });
