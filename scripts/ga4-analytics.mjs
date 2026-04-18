#!/usr/bin/env node
/**
 * GA4 Analytics — pulls traffic data via Google Analytics Data API.
 * Uses same service account as GSC (atlantismarketing@x-jigsaw-293515).
 *
 * USAGE:
 *   node scripts/ga4-analytics.mjs            # 28-day report
 *   node scripts/ga4-analytics.mjs --days 90  # custom range
 *   node scripts/ga4-analytics.mjs --list     # list accessible properties
 */

import { readFileSync, existsSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CREDENTIALS_PATH = join(__dirname, 'gsc-service-account.json');

const args = process.argv.slice(2);
const listMode = args.includes('--list');
const daysIdx = args.indexOf('--days');
const days = daysIdx !== -1 ? parseInt(args[daysIdx + 1], 10) : 28;
const propIdx = args.indexOf('--property');
let propertyId = propIdx !== -1 ? args[propIdx + 1] : process.env.GA4_PROPERTY_ID || null;

async function getAccessToken(credentials, scope) {
  const header = { alg: 'RS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const claim = { iss: credentials.client_email, scope, aud: 'https://oauth2.googleapis.com/token', exp: now + 3600, iat: now };
  const { createSign } = await import('crypto');
  const encode = (obj) => Buffer.from(JSON.stringify(obj)).toString('base64url');
  const unsigned = `${encode(header)}.${encode(claim)}`;
  const sign = createSign('RSA-SHA256');
  sign.update(unsigned);
  const signature = sign.sign(credentials.private_key, 'base64url');
  const jwt = `${unsigned}.${signature}`;
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });
  if (!res.ok) throw new Error(`Token exchange: ${res.status} ${await res.text()}`);
  return (await res.json()).access_token;
}

async function listProperties(token) {
  // Admin API — list account summaries (all accounts + properties the SA can see)
  const res = await fetch('https://analyticsadmin.googleapis.com/v1beta/accountSummaries', {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(`Admin API: ${res.status} ${await res.text()}`);
  return res.json();
}

async function runReport(token, propertyId, body) {
  const url = `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Data API: ${res.status} ${await res.text()}`);
  return res.json();
}

function dateRange(n) {
  const end = new Date();
  const start = new Date(end);
  start.setDate(start.getDate() - n);
  return { startDate: start.toISOString().split('T')[0], endDate: end.toISOString().split('T')[0] };
}

function printTable(data, cols, maxRows = 40) {
  if (!data.length) { console.log('  (no data)\n'); return; }
  const header = cols.map(c => c.label.padEnd(c.width)).join(' | ');
  console.log('  ' + header);
  console.log('  ' + cols.map(c => '-'.repeat(c.width)).join('-+-'));
  for (const row of data.slice(0, maxRows)) {
    console.log('  ' + cols.map(c => {
      const v = String(row[c.key] ?? '');
      return c.align === 'right' ? v.padStart(c.width) : v.padEnd(c.width);
    }).join(' | '));
  }
  if (data.length > maxRows) console.log(`  ... and ${data.length - maxRows} more\n`);
  console.log();
}

async function main() {
  if (!existsSync(CREDENTIALS_PATH)) { console.error('Missing gsc-service-account.json'); process.exit(1); }
  const creds = JSON.parse(readFileSync(CREDENTIALS_PATH, 'utf-8'));
  console.log(`Auth: ${creds.client_email}`);

  const token = await getAccessToken(creds, 'https://www.googleapis.com/auth/analytics.readonly');

  if (listMode || !propertyId) {
    console.log('\nListing accessible GA4 properties...\n');
    const summary = await listProperties(token);
    if (!summary.accountSummaries?.length) {
      console.log('No accounts accessible. Grant SA "Viewer" role on the GA4 property.');
      console.log(`Service account: ${creds.client_email}\n`);
      return;
    }
    for (const acct of summary.accountSummaries) {
      console.log(`Account: ${acct.displayName} (${acct.account})`);
      for (const p of acct.propertySummaries || []) {
        console.log(`  Property: ${p.displayName}  ID: ${p.property.replace('properties/', '')}`);
      }
    }
    if (!propertyId) { console.log('\nRe-run with --property <ID> or set GA4_PROPERTY_ID'); return; }
  }

  const { startDate, endDate } = dateRange(days);
  console.log(`\nProperty: ${propertyId}   Range: ${startDate} → ${endDate} (${days}d)\n`);

  // Summary
  const summary = await runReport(token, propertyId, {
    dateRanges: [{ startDate, endDate }],
    metrics: [
      { name: 'sessions' }, { name: 'activeUsers' }, { name: 'screenPageViews' },
      { name: 'engagementRate' }, { name: 'averageSessionDuration' }, { name: 'bounceRate' },
      { name: 'newUsers' },
    ],
  });
  const row = summary.rows?.[0]?.metricValues || [];
  if (row.length === 0) {
    console.log('═══ TRAFFIC SUMMARY ═══');
    console.log('  NO DATA for this period. Either (a) property has no events captured,');
    console.log('  (b) the gtag Measurement ID on the live site points to a different');
    console.log('  property, or (c) a cookie-consent banner is blocking analytics.');
    console.log('  Tip: try a wider --days range or check the GA4 real-time view.\n');
    return;
  }
  const [sessions = 0, users = 0, pv = 0, engRate = 0, avgDur = 0, bounce = 0, newU = 0] = row.map(r => parseFloat(r.value) || 0);
  console.log('═══ TRAFFIC SUMMARY ═══');
  console.log(`  Sessions:          ${Math.round(sessions).toLocaleString()}`);
  console.log(`  Active users:      ${Math.round(users).toLocaleString()}`);
  console.log(`  New users:         ${Math.round(newU).toLocaleString()}`);
  console.log(`  Page views:        ${Math.round(pv).toLocaleString()}`);
  console.log(`  Engagement rate:   ${(engRate * 100).toFixed(1)}%`);
  console.log(`  Bounce rate:       ${(bounce * 100).toFixed(1)}%`);
  console.log(`  Avg session dur:   ${avgDur.toFixed(0)}s`);
  console.log(`  Daily avg sess:    ${(sessions / days).toFixed(0)}/day\n`);

  // Channels
  const channels = await runReport(token, propertyId, {
    dateRanges: [{ startDate, endDate }],
    dimensions: [{ name: 'sessionDefaultChannelGroup' }],
    metrics: [{ name: 'sessions' }, { name: 'activeUsers' }, { name: 'engagementRate' }],
    orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
  });
  console.log('── TRAFFIC BY CHANNEL ──');
  printTable((channels.rows || []).map(r => ({
    channel: r.dimensionValues[0].value,
    sessions: parseInt(r.metricValues[0].value),
    users: parseInt(r.metricValues[1].value),
    eng: (parseFloat(r.metricValues[2].value) * 100).toFixed(1) + '%',
  })), [
    { key: 'channel', label: 'Channel', width: 24 },
    { key: 'sessions', label: 'Sess', width: 8, align: 'right' },
    { key: 'users', label: 'Users', width: 8, align: 'right' },
    { key: 'eng', label: 'Eng', width: 7, align: 'right' },
  ]);

  // Top pages
  const pages = await runReport(token, propertyId, {
    dateRanges: [{ startDate, endDate }],
    dimensions: [{ name: 'pagePath' }],
    metrics: [{ name: 'screenPageViews' }, { name: 'activeUsers' }, { name: 'engagementRate' }, { name: 'averageSessionDuration' }],
    orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
    limit: 30,
  });
  console.log('── TOP PAGES ──');
  printTable((pages.rows || []).map(r => ({
    path: r.dimensionValues[0].value.slice(0, 58),
    pv: parseInt(r.metricValues[0].value),
    users: parseInt(r.metricValues[1].value),
    eng: (parseFloat(r.metricValues[2].value) * 100).toFixed(0) + '%',
    dur: parseFloat(r.metricValues[3].value).toFixed(0) + 's',
  })), [
    { key: 'path', label: 'Page', width: 58 },
    { key: 'pv', label: 'Views', width: 7, align: 'right' },
    { key: 'users', label: 'Users', width: 7, align: 'right' },
    { key: 'eng', label: 'Eng', width: 6, align: 'right' },
    { key: 'dur', label: 'Dur', width: 6, align: 'right' },
  ]);

  // Country
  const geo = await runReport(token, propertyId, {
    dateRanges: [{ startDate, endDate }],
    dimensions: [{ name: 'country' }],
    metrics: [{ name: 'sessions' }, { name: 'activeUsers' }],
    orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
    limit: 15,
  });
  console.log('── TOP COUNTRIES ──');
  printTable((geo.rows || []).map(r => ({
    country: r.dimensionValues[0].value,
    sessions: parseInt(r.metricValues[0].value),
    users: parseInt(r.metricValues[1].value),
  })), [
    { key: 'country', label: 'Country', width: 24 },
    { key: 'sessions', label: 'Sess', width: 8, align: 'right' },
    { key: 'users', label: 'Users', width: 8, align: 'right' },
  ]);

  // Device
  const device = await runReport(token, propertyId, {
    dateRanges: [{ startDate, endDate }],
    dimensions: [{ name: 'deviceCategory' }],
    metrics: [{ name: 'sessions' }, { name: 'engagementRate' }, { name: 'bounceRate' }],
  });
  console.log('── BY DEVICE ──');
  printTable((device.rows || []).map(r => ({
    dev: r.dimensionValues[0].value,
    sessions: parseInt(r.metricValues[0].value),
    eng: (parseFloat(r.metricValues[1].value) * 100).toFixed(1) + '%',
    bounce: (parseFloat(r.metricValues[2].value) * 100).toFixed(1) + '%',
  })), [
    { key: 'dev', label: 'Device', width: 14 },
    { key: 'sessions', label: 'Sess', width: 8, align: 'right' },
    { key: 'eng', label: 'Eng', width: 8, align: 'right' },
    { key: 'bounce', label: 'Bounce', width: 8, align: 'right' },
  ]);

  // Daily trend
  const trend = await runReport(token, propertyId, {
    dateRanges: [{ startDate, endDate }],
    dimensions: [{ name: 'date' }],
    metrics: [{ name: 'sessions' }, { name: 'activeUsers' }],
    orderBys: [{ dimension: { dimensionName: 'date' } }],
  });
  console.log('── DAILY TREND ──');
  for (const r of trend.rows || []) {
    const d = r.dimensionValues[0].value;
    const s = parseInt(r.metricValues[0].value);
    const u = parseInt(r.metricValues[1].value);
    console.log(`  ${d.slice(0,4)}-${d.slice(4,6)}-${d.slice(6)}  sess=${String(s).padStart(4)}  users=${String(u).padStart(4)}`);
  }

  const out = join(__dirname, 'ga4-report.json');
  writeFileSync(out, JSON.stringify({
    generated: new Date().toISOString(),
    propertyId, dateRange: { startDate, endDate, days },
    summary: { sessions, users, newUsers: newU, pageViews: pv, engagementRate: engRate, bounceRate: bounce, avgSessionDuration: avgDur },
    channels: channels.rows, topPages: pages.rows, countries: geo.rows, devices: device.rows, daily: trend.rows,
  }, null, 2));
  console.log(`\nExported: ${out}\n`);
}

main().catch(e => { console.error('ERROR:', e.message); process.exit(1); });
