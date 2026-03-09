#!/usr/bin/env node
/**
 * GSC Backlink Tracker
 * ====================
 * Pulls external links via GSC Links API, tracks new vs lost, identifies top-linked pages.
 *
 * USAGE:
 *   node scripts/gsc-backlinks.mjs              # Full backlink report
 *   node scripts/gsc-backlinks.mjs --top-pages   # Top linked pages
 *   node scripts/gsc-backlinks.mjs --top-sites   # Top linking sites
 *   node scripts/gsc-backlinks.mjs --track        # Compare against baseline & save
 *   node scripts/gsc-backlinks.mjs --export       # Export to JSON
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CREDENTIALS_PATH = join(__dirname, 'gsc-service-account.json');
const BASELINE_PATH = join(__dirname, 'backlink-baseline.json');
const SITE_URL = 'https://atlantisndt.com';

const args = process.argv.slice(2);
const showTopPages = args.includes('--top-pages');
const showTopSites = args.includes('--top-sites');
const trackChanges = args.includes('--track');
const exportData = args.includes('--export');
const showAll = !showTopPages && !showTopSites && !trackChanges;

// ─── Auth (same pattern as gsc-analytics.mjs) ──────────────────────────────
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

// ─── GSC Links API ──────────────────────────────────────────────────────────
async function getExternalLinks(accessToken) {
  const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE_URL)}/links`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  if (!res.ok) throw new Error(`Links API failed: ${res.status} ${await res.text()}`);
  return res.json();
}

// ─── Analysis ───────────────────────────────────────────────────────────────
function analyzeLinks(data) {
  const externalLinks = data.externalLinks || [];
  const internalLinks = data.internalLinks || [];

  // Top linked pages (most external links)
  const topPages = [...externalLinks]
    .sort((a, b) => (b.urls?.length || 0) - (a.urls?.length || 0))
    .slice(0, 20);

  // Top linking sites
  const siteLinkCounts = {};
  externalLinks.forEach(page => {
    (page.urls || []).forEach(link => {
      try {
        const domain = new URL(link).hostname;
        siteLinkCounts[domain] = (siteLinkCounts[domain] || 0) + 1;
      } catch {}
    });
  });
  const topSites = Object.entries(siteLinkCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20);

  return {
    totalExternalLinks: externalLinks.reduce((sum, p) => sum + (p.urls?.length || 0), 0),
    totalLinkingDomains: Object.keys(siteLinkCounts).length,
    totalLinkedPages: externalLinks.length,
    totalInternalLinks: internalLinks.length,
    topPages,
    topSites,
  };
}

function trackDelta(currentData) {
  const today = new Date().toISOString().split('T')[0];

  if (existsSync(BASELINE_PATH)) {
    const baseline = JSON.parse(readFileSync(BASELINE_PATH, 'utf-8'));
    const prevDomains = new Set(baseline.domains || []);
    const currentDomains = new Set(currentData.topSites.map(([d]) => d));

    const newDomains = [...currentDomains].filter(d => !prevDomains.has(d));
    const lostDomains = [...prevDomains].filter(d => !currentDomains.has(d));

    console.log('\n📊 Changes since last baseline (%s):', baseline.date);
    console.log('   External links: %d → %d (%+d)', baseline.totalExternalLinks, currentData.totalExternalLinks, currentData.totalExternalLinks - baseline.totalExternalLinks);
    console.log('   Linking domains: %d → %d (%+d)', baseline.totalLinkingDomains, currentData.totalLinkingDomains, currentData.totalLinkingDomains - baseline.totalLinkingDomains);

    if (newDomains.length > 0) {
      console.log('\n   ✅ New linking domains:');
      newDomains.forEach(d => console.log('      + %s', d));
    }
    if (lostDomains.length > 0) {
      console.log('\n   ❌ Lost linking domains:');
      lostDomains.forEach(d => console.log('      - %s', d));
    }
  }

  // Save new baseline
  writeFileSync(BASELINE_PATH, JSON.stringify({
    date: today,
    totalExternalLinks: currentData.totalExternalLinks,
    totalLinkingDomains: currentData.totalLinkingDomains,
    domains: currentData.topSites.map(([d]) => d),
  }, null, 2), 'utf-8');
  console.log('\n💾 Baseline saved to %s', BASELINE_PATH);
}

// ─── Main ───────────────────────────────────────────────────────────────────
async function main() {
  if (!existsSync(CREDENTIALS_PATH)) {
    console.error('❌ Missing credentials:', CREDENTIALS_PATH);
    process.exit(1);
  }

  const credentials = JSON.parse(readFileSync(CREDENTIALS_PATH, 'utf-8'));
  console.log('🔑 Authenticating as %s...', credentials.client_email);
  const token = await getAccessToken(credentials, 'https://www.googleapis.com/auth/webmasters.readonly');

  console.log('📡 Fetching backlink data for %s...', SITE_URL);
  const data = await getExternalLinks(token);
  const analysis = analyzeLinks(data);

  if (showAll || showTopPages || showTopSites) {
    console.log('\n═══════════════════════════════════════════');
    console.log('  BACKLINK REPORT — %s', SITE_URL);
    console.log('═══════════════════════════════════════════');
    console.log('  Total external links:  %d', analysis.totalExternalLinks);
    console.log('  Unique linking domains: %d', analysis.totalLinkingDomains);
    console.log('  Pages with backlinks:  %d', analysis.totalLinkedPages);
    console.log('  Internal links:        %d', analysis.totalInternalLinks);
  }

  if (showAll || showTopPages) {
    console.log('\n📄 Top Linked Pages:');
    console.log('   %-50s  Links', 'Page');
    console.log('   ' + '─'.repeat(60));
    analysis.topPages.slice(0, 15).forEach(p => {
      const path = (p.siteUrl || '').replace(SITE_URL, '') || '/';
      console.log('   %-50s  %d', path.substring(0, 50), p.urls?.length || 0);
    });
  }

  if (showAll || showTopSites) {
    console.log('\n🌐 Top Linking Sites:');
    console.log('   %-40s  Links', 'Domain');
    console.log('   ' + '─'.repeat(50));
    analysis.topSites.slice(0, 15).forEach(([domain, count]) => {
      console.log('   %-40s  %d', domain, count);
    });
  }

  if (trackChanges) {
    trackDelta(analysis);
  }

  if (exportData) {
    const exportPath = join(__dirname, 'backlinks-export.json');
    writeFileSync(exportPath, JSON.stringify({ date: new Date().toISOString(), ...analysis }, null, 2), 'utf-8');
    console.log('\n📁 Exported to %s', exportPath);
  }
}

main().catch(err => { console.error('❌', err.message); process.exit(1); });
