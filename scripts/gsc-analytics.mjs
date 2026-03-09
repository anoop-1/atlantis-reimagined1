#!/usr/bin/env node
/**
 * Google Search Console Analytics Script
 * =======================================
 * Pulls performance data (clicks, impressions, CTR, position) from GSC Search Analytics API.
 *
 * USAGE:
 *   node scripts/gsc-analytics.mjs                    # Full report (last 28 days)
 *   node scripts/gsc-analytics.mjs --pages             # Top pages by clicks
 *   node scripts/gsc-analytics.mjs --queries            # Top queries by clicks
 *   node scripts/gsc-analytics.mjs --opportunities      # High impression, low CTR pages
 *   node scripts/gsc-analytics.mjs --zero-traffic       # Pages with zero clicks
 *   node scripts/gsc-analytics.mjs --days 90            # Custom date range
 *   node scripts/gsc-analytics.mjs --export             # Export full data to JSON
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CREDENTIALS_PATH = join(__dirname, 'gsc-service-account.json');
const SITE_URL = 'https://atlantisndt.com';

// ─── Parse CLI args ──────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const showPages = args.includes('--pages');
const showQueries = args.includes('--queries');
const showOpportunities = args.includes('--opportunities');
const showZeroTraffic = args.includes('--zero-traffic');
const exportData = args.includes('--export');
const daysIndex = args.indexOf('--days');
const days = daysIndex !== -1 ? parseInt(args[daysIndex + 1], 10) : 28;
const showAll = !showPages && !showQueries && !showOpportunities && !showZeroTraffic;

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

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Token exchange failed: ${res.status} ${text}`);
  }
  return (await res.json()).access_token;
}

// ─── GSC Search Analytics API ────────────────────────────────────────────────
async function querySearchAnalytics(accessToken, { dimensions, startDate, endDate, rowLimit = 25000, startRow = 0 }) {
  const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE_URL)}/searchAnalytics/query`;

  const body = {
    startDate,
    endDate,
    dimensions,
    rowLimit,
    startRow,
    type: 'web',
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Search Analytics API failed: ${res.status} ${text}`);
  }

  return res.json();
}

// ─── Date helpers ────────────────────────────────────────────────────────────
function getDateRange(numDays) {
  const end = new Date();
  end.setDate(end.getDate() - 3); // GSC data has 3-day lag
  const start = new Date(end);
  start.setDate(start.getDate() - numDays);
  return {
    startDate: start.toISOString().split('T')[0],
    endDate: end.toISOString().split('T')[0],
  };
}

// ─── Analysis functions ──────────────────────────────────────────────────────
function analyzePages(rows) {
  return rows
    .sort((a, b) => b.clicks - a.clicks)
    .map(r => ({
      page: r.keys[0].replace(SITE_URL, ''),
      clicks: r.clicks,
      impressions: r.impressions,
      ctr: (r.ctr * 100).toFixed(1) + '%',
      position: r.position.toFixed(1),
    }));
}

function analyzeQueries(rows) {
  return rows
    .sort((a, b) => b.clicks - a.clicks)
    .map(r => ({
      query: r.keys[0],
      clicks: r.clicks,
      impressions: r.impressions,
      ctr: (r.ctr * 100).toFixed(1) + '%',
      position: r.position.toFixed(1),
    }));
}

function findOpportunities(rows) {
  // High impressions but low CTR = pages that show up but don't get clicked
  return rows
    .filter(r => r.impressions > 50 && r.ctr < 0.03)
    .sort((a, b) => b.impressions - a.impressions)
    .map(r => ({
      page: r.keys[0].replace(SITE_URL, ''),
      impressions: r.impressions,
      clicks: r.clicks,
      ctr: (r.ctr * 100).toFixed(1) + '%',
      position: r.position.toFixed(1),
      potential: Math.round(r.impressions * 0.05) + ' clicks if CTR=5%',
    }));
}

function findZeroTrafficPages(pageRows, sitemapUrls) {
  const pagesWithTraffic = new Set(pageRows.map(r => r.keys[0]));
  return sitemapUrls
    .filter(url => !pagesWithTraffic.has(url))
    .map(url => url.replace(SITE_URL, ''));
}

function getSitemapUrls() {
  const sitemapPath = join(__dirname, '..', 'public', 'sitemap.xml');
  if (!existsSync(sitemapPath)) return [];
  const xml = readFileSync(sitemapPath, 'utf-8');
  const urls = [];
  const regex = /<loc>(.*?)<\/loc>/g;
  let match;
  while ((match = regex.exec(xml)) !== null) {
    urls.push(match[1]);
  }
  return [...new Set(urls)]; // deduplicate
}

// ─── Report formatting ──────────────────────────────────────────────────────
function printTable(data, columns, maxRows = 50) {
  if (!data.length) {
    console.log('  No data found.\n');
    return;
  }

  // Header
  const header = columns.map(c => c.label.padEnd(c.width)).join(' | ');
  console.log('  ' + header);
  console.log('  ' + columns.map(c => '-'.repeat(c.width)).join('-+-'));

  // Rows
  const rows = data.slice(0, maxRows);
  for (const row of rows) {
    const line = columns.map(c => {
      const val = String(row[c.key] ?? '');
      return c.align === 'right' ? val.padStart(c.width) : val.padEnd(c.width);
    }).join(' | ');
    console.log('  ' + line);
  }

  if (data.length > maxRows) {
    console.log(`  ... and ${data.length - maxRows} more rows`);
  }
  console.log();
}

// ─── Main ────────────────────────────────────────────────────────────────────
async function main() {
  if (!existsSync(CREDENTIALS_PATH)) {
    console.error('ERROR: gsc-service-account.json not found.');
    process.exit(1);
  }

  const credentials = JSON.parse(readFileSync(CREDENTIALS_PATH, 'utf-8'));
  console.log(`\nAuthenticating as: ${credentials.client_email}`);

  const accessToken = await getAccessToken(credentials, 'https://www.googleapis.com/auth/webmasters.readonly');
  const { startDate, endDate } = getDateRange(days);
  console.log(`Date range: ${startDate} to ${endDate} (${days} days)\n`);

  // Pull data in parallel
  const [pageData, queryData, dateData] = await Promise.all([
    querySearchAnalytics(accessToken, { dimensions: ['page'], startDate, endDate }),
    querySearchAnalytics(accessToken, { dimensions: ['query'], startDate, endDate }),
    querySearchAnalytics(accessToken, { dimensions: ['date'], startDate, endDate }),
  ]);

  const pageRows = pageData.rows || [];
  const queryRows = queryData.rows || [];
  const dateRows = dateData.rows || [];

  // ── Summary ──
  const totalClicks = pageRows.reduce((s, r) => s + r.clicks, 0);
  const totalImpressions = pageRows.reduce((s, r) => s + r.impressions, 0);
  const avgCTR = totalImpressions > 0 ? (totalClicks / totalImpressions * 100).toFixed(2) : '0';
  const avgPosition = pageRows.length > 0 ? (pageRows.reduce((s, r) => s + r.position, 0) / pageRows.length).toFixed(1) : '0';
  const dailyAvgClicks = (totalClicks / days).toFixed(0);

  console.log('═══════════════════════════════════════════════════════════════');
  console.log('                    TRAFFIC SUMMARY');
  console.log('═══════════════════════════════════════════════════════════════');
  console.log(`  Total Clicks:        ${totalClicks.toLocaleString()}`);
  console.log(`  Total Impressions:   ${totalImpressions.toLocaleString()}`);
  console.log(`  Average CTR:         ${avgCTR}%`);
  console.log(`  Average Position:    ${avgPosition}`);
  console.log(`  Daily Avg Clicks:    ${dailyAvgClicks}/day`);
  console.log(`  Pages with Traffic:  ${pageRows.length}`);
  console.log(`  Unique Queries:      ${queryRows.length}`);
  console.log(`  Target:              10,000 clicks/day`);
  console.log(`  Gap:                 ${Math.max(0, 10000 - Number(dailyAvgClicks)).toLocaleString()} clicks/day needed`);
  console.log('═══════════════════════════════════════════════════════════════\n');

  // ── Daily trend ──
  if (showAll) {
    console.log('── DAILY CLICK TREND ──');
    const sortedDates = dateRows.sort((a, b) => a.keys[0].localeCompare(b.keys[0]));
    for (const d of sortedDates) {
      const bar = '█'.repeat(Math.max(1, Math.round(d.clicks / Math.max(1, ...sortedDates.map(x => x.clicks)) * 40)));
      console.log(`  ${d.keys[0]}  ${String(d.clicks).padStart(6)} clicks  ${bar}`);
    }
    console.log();
  }

  // ── Top Pages ──
  if (showAll || showPages) {
    const pages = analyzePages(pageRows);
    console.log('── TOP PAGES BY CLICKS ──');
    printTable(pages, [
      { key: 'page', label: 'Page', width: 55 },
      { key: 'clicks', label: 'Clicks', width: 8, align: 'right' },
      { key: 'impressions', label: 'Impr', width: 8, align: 'right' },
      { key: 'ctr', label: 'CTR', width: 7, align: 'right' },
      { key: 'position', label: 'Pos', width: 6, align: 'right' },
    ], 40);
  }

  // ── Top Queries ──
  if (showAll || showQueries) {
    const queries = analyzeQueries(queryRows);
    console.log('── TOP QUERIES BY CLICKS ──');
    printTable(queries, [
      { key: 'query', label: 'Query', width: 50 },
      { key: 'clicks', label: 'Clicks', width: 8, align: 'right' },
      { key: 'impressions', label: 'Impr', width: 8, align: 'right' },
      { key: 'ctr', label: 'CTR', width: 7, align: 'right' },
      { key: 'position', label: 'Pos', width: 6, align: 'right' },
    ], 40);
  }

  // ── Opportunities ──
  if (showAll || showOpportunities) {
    const opps = findOpportunities(pageRows);
    console.log('── HIGH IMPRESSION, LOW CTR OPPORTUNITIES ──');
    console.log('  (Pages getting seen but not clicked - improve titles/descriptions)\n');
    printTable(opps, [
      { key: 'page', label: 'Page', width: 50 },
      { key: 'impressions', label: 'Impr', width: 8, align: 'right' },
      { key: 'clicks', label: 'Clicks', width: 8, align: 'right' },
      { key: 'ctr', label: 'CTR', width: 7, align: 'right' },
      { key: 'position', label: 'Pos', width: 6, align: 'right' },
      { key: 'potential', label: 'Potential', width: 22 },
    ], 30);
  }

  // ── Zero Traffic Pages ──
  if (showAll || showZeroTraffic) {
    const sitemapUrls = getSitemapUrls();
    const zeroPages = findZeroTrafficPages(pageRows, sitemapUrls);
    console.log(`── ZERO TRAFFIC PAGES (${zeroPages.length} of ${sitemapUrls.length} sitemap URLs) ──`);
    console.log('  (Pages in sitemap with 0 clicks in the period)\n');

    // Group by type
    const groups = {
      'Digital Twin': [],
      'ERP': [],
      'Consulting': [],
      'Method+Location': [],
      'Blog': [],
      'Other': [],
    };

    for (const p of zeroPages) {
      if (p.includes('digital-twin-')) groups['Digital Twin'].push(p);
      else if (p.includes('ndt-erp-')) groups['ERP'].push(p);
      else if (p.includes('consulting/')) groups['Consulting'].push(p);
      else if (p.match(/(ultrasonic|radiographic|magnetic|penetrant|eddy|visual)-.*-/)) groups['Method+Location'].push(p);
      else if (p.includes('blog/')) groups['Blog'].push(p);
      else groups['Other'].push(p);
    }

    for (const [group, pages] of Object.entries(groups)) {
      if (pages.length > 0) {
        console.log(`  ${group} (${pages.length} pages):`);
        for (const p of pages.slice(0, 10)) {
          console.log(`    - ${p}`);
        }
        if (pages.length > 10) console.log(`    ... and ${pages.length - 10} more`);
        console.log();
      }
    }
  }

  // ── Section breakdown ──
  if (showAll) {
    console.log('── TRAFFIC BY SECTION ──');
    const sections = {};
    for (const r of pageRows) {
      const path = r.keys[0].replace(SITE_URL, '');
      let section = 'Other';
      if (path.includes('digital-twin')) section = 'Digital Twins';
      else if (path.includes('ndt-erp')) section = 'ERP';
      else if (path.includes('consulting/')) section = 'Consulting';
      else if (path.includes('blog/')) section = 'Blog';
      else if (path.includes('training')) section = 'Training';
      else if (path.match(/(ultrasonic|radiographic|magnetic|penetrant|eddy|visual)-testing/)) section = 'NDT Methods';
      else if (path.match(/(phased-array|tofd|guided-wave|acoustic|corrosion|weld|magnetic-flux)/)) section = 'Advanced NDT';
      else if (path.match(/(api-|asnt-|certification)/)) section = 'Certifications';

      if (!sections[section]) sections[section] = { clicks: 0, impressions: 0, pages: 0 };
      sections[section].clicks += r.clicks;
      sections[section].impressions += r.impressions;
      sections[section].pages += 1;
    }

    const sectionData = Object.entries(sections)
      .sort(([, a], [, b]) => b.clicks - a.clicks)
      .map(([section, data]) => ({
        section,
        clicks: data.clicks,
        impressions: data.impressions,
        pages: data.pages,
        clicksPerPage: (data.clicks / data.pages).toFixed(1),
      }));

    printTable(sectionData, [
      { key: 'section', label: 'Section', width: 20 },
      { key: 'clicks', label: 'Clicks', width: 8, align: 'right' },
      { key: 'impressions', label: 'Impr', width: 10, align: 'right' },
      { key: 'pages', label: 'Pages', width: 6, align: 'right' },
      { key: 'clicksPerPage', label: 'Clk/Page', width: 10, align: 'right' },
    ]);
  }

  // ── Export ──
  if (exportData) {
    const exportPath = join(__dirname, 'gsc-report.json');
    const report = {
      generated: new Date().toISOString(),
      dateRange: { startDate, endDate, days },
      summary: {
        totalClicks,
        totalImpressions,
        avgCTR: parseFloat(avgCTR),
        avgPosition: parseFloat(avgPosition),
        dailyAvgClicks: parseInt(dailyAvgClicks),
        pagesWithTraffic: pageRows.length,
        uniqueQueries: queryRows.length,
      },
      pages: analyzePages(pageRows),
      queries: analyzeQueries(queryRows),
      opportunities: findOpportunities(pageRows),
      zeroTrafficPages: findZeroTrafficPages(pageRows, getSitemapUrls()),
      dailyTrend: dateRows.sort((a, b) => a.keys[0].localeCompare(b.keys[0])).map(d => ({
        date: d.keys[0],
        clicks: d.clicks,
        impressions: d.impressions,
      })),
    };
    writeFileSync(exportPath, JSON.stringify(report, null, 2));
    console.log(`\nFull report exported to: ${exportPath}\n`);
  }
}

main().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
