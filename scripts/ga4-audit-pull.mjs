#!/usr/bin/env node
/**
 * GA4 Audit Pull
 * ==============
 * Verifies Google Analytics Data API access for the Atlantis service account,
 * lists accessible GA4 properties, then pulls 28d + 90d traffic reports.
 *
 * USAGE:
 *   node scripts/ga4-audit-pull.mjs
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CREDENTIALS_PATH = join(__dirname, 'gsc-service-account.json');
const OUTPUT_PATH = join(__dirname, 'ga4-audit-2026-04.json');
const ERROR_PATH = join(__dirname, 'ga4-audit-error.md');
const STATUS_PATH = join(__dirname, 'ga4-audit-status.md');

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

// ─── Admin API: list account summaries ──────────────────────────────────────
async function listAccountSummaries(accessToken) {
  const url = 'https://analyticsadmin.googleapis.com/v1beta/accountSummaries?pageSize=200';
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const text = await res.text();
  if (!res.ok) {
    const err = new Error(`accountSummaries ${res.status}: ${text}`);
    err.status = res.status;
    err.body = text;
    throw err;
  }
  return JSON.parse(text);
}

// ─── Data API: runReport ────────────────────────────────────────────────────
async function runReport(accessToken, propertyId, { startDate, endDate, dimensions, metrics, limit = 10000 }) {
  const url = `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`;
  const body = {
    dateRanges: [{ startDate, endDate }],
    dimensions: dimensions.map((n) => ({ name: n })),
    metrics: metrics.map((n) => ({ name: n })),
    limit,
  };
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  if (!res.ok) {
    const err = new Error(`runReport (${propertyId}) ${res.status}: ${text}`);
    err.status = res.status;
    err.body = text;
    throw err;
  }
  return JSON.parse(text);
}

// ─── Date helpers ────────────────────────────────────────────────────────────
function getDateRange(numDays) {
  const end = new Date();
  end.setDate(end.getDate() - 1);
  const start = new Date(end);
  start.setDate(start.getDate() - numDays);
  return {
    startDate: start.toISOString().split('T')[0],
    endDate: end.toISOString().split('T')[0],
  };
}

// ─── Error writer ────────────────────────────────────────────────────────────
function writeErrorReport(stage, err) {
  const lines = [];
  lines.push(`# GA4 Audit Error`);
  lines.push('');
  lines.push(`**Date:** ${new Date().toISOString()}`);
  lines.push(`**Stage:** ${stage}`);
  lines.push(`**GCP project:** 139446864572`);
  lines.push(`**Service account:** atlantismarketing@x-jigsaw-293515.iam.gserviceaccount.com`);
  lines.push('');
  lines.push(`## Error`);
  lines.push('');
  lines.push('```');
  lines.push(err.message || String(err));
  lines.push('```');
  if (err.body) {
    lines.push('');
    lines.push('## Response body');
    lines.push('');
    lines.push('```json');
    lines.push(err.body);
    lines.push('```');
  }
  lines.push('');
  lines.push('## Diagnosis');
  lines.push('');
  const msg = (err.message || '') + ' ' + (err.body || '');
  if (/SERVICE_DISABLED|has not been used|is disabled/i.test(msg)) {
    lines.push('- Required Google API is **not enabled** in GCP project 139446864572.');
    lines.push('- Enable **Google Analytics Admin API** and **Google Analytics Data API**:');
    lines.push('  - https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com/overview?project=139446864572');
    lines.push('  - https://console.developers.google.com/apis/api/analyticsdata.googleapis.com/overview?project=139446864572');
    lines.push('- After enabling, wait ~1-2 minutes and re-run `node scripts/ga4-audit-pull.mjs`.');
  } else if (/PERMISSION_DENIED|does not have sufficient permissions|insufficient/i.test(msg)) {
    lines.push('- Service account lacks permission to access a GA4 property.');
    lines.push('- In GA4 Admin → Account Access Management (or Property Access Management), add');
    lines.push('  `atlantismarketing@x-jigsaw-293515.iam.gserviceaccount.com` as **Viewer** on each property');
    lines.push('  (atlantisndt.com / ndt-connect.com / visapath).');
  } else if (/NOT_FOUND|not found/i.test(msg)) {
    lines.push('- Requested resource not found. If Admin API returned 0 properties, the service account');
    lines.push('  is not linked to any GA4 account/property. Add it as Viewer in GA4 Admin.');
  } else if (/invalid_grant|UNAUTHENTICATED|401/.test(msg)) {
    lines.push('- Auth/JWT problem. Verify credentials file and that the service account key is still active.');
  } else {
    lines.push('- Unknown error — see raw response body above.');
  }
  writeFileSync(ERROR_PATH, lines.join('\n'));
}

function writeStatus(ok, summary) {
  writeFileSync(STATUS_PATH, summary);
  console.log(`Status written to: ${STATUS_PATH}`);
}

// ─── Main ────────────────────────────────────────────────────────────────────
async function main() {
  if (!existsSync(CREDENTIALS_PATH)) {
    const msg = `ERROR: credentials file missing: ${CREDENTIALS_PATH}`;
    console.error(msg);
    writeStatus(false, `# GA4 Audit Status\n\n**Result:** FAILED (missing credentials)\n\n${msg}\n`);
    process.exit(1);
  }

  const credentials = JSON.parse(readFileSync(CREDENTIALS_PATH, 'utf-8'));
  console.log(`Authenticating as: ${credentials.client_email}`);

  let accessToken;
  try {
    accessToken = await getAccessToken(credentials, 'https://www.googleapis.com/auth/analytics.readonly');
    console.log('  Got access token.');
  } catch (err) {
    console.error('Token exchange failed:', err.message);
    writeErrorReport('JWT exchange', err);
    writeStatus(false, `# GA4 Audit Status\n\n**Result:** FAILED at JWT exchange.\n\n\`\`\`\n${err.message}\n\`\`\`\n\nSee ga4-audit-error.md for remediation.\n`);
    process.exit(2);
  }

  // Step 1: list properties the SA can see
  let accountSummaries;
  try {
    accountSummaries = await listAccountSummaries(accessToken);
  } catch (err) {
    console.error('accountSummaries failed:', err.message);
    writeErrorReport('Admin API accountSummaries', err);
    writeStatus(
      false,
      `# GA4 Audit Status\n\n**Result:** FAILED at Admin API accountSummaries.\n\n**Status:** ${err.status}\n\n\`\`\`\n${err.message}\n\`\`\`\n\nSee ga4-audit-error.md for remediation steps.\n`
    );
    process.exit(3);
  }

  const accounts = accountSummaries.accountSummaries || [];
  const properties = [];
  for (const acct of accounts) {
    for (const p of acct.propertySummaries || []) {
      const propId = (p.property || '').replace('properties/', '');
      properties.push({
        accountName: acct.displayName,
        accountId: (acct.account || '').replace('accounts/', ''),
        propertyId: propId,
        propertyDisplayName: p.displayName,
        propertyType: p.propertyType,
      });
    }
  }

  console.log(`\nAccessible GA4 accounts: ${accounts.length}`);
  console.log(`Accessible GA4 properties: ${properties.length}`);
  for (const p of properties) {
    console.log(`  - ${p.propertyDisplayName} (id=${p.propertyId}, account=${p.accountName})`);
  }

  if (!properties.length) {
    const msg = `Admin API succeeded, but the service account has access to 0 properties.`;
    console.warn(`\n${msg}`);
    const body = [
      `# GA4 Audit Error`,
      ``,
      `**Date:** ${new Date().toISOString()}`,
      `**Stage:** after accountSummaries`,
      ``,
      `## Result`,
      ``,
      `${msg}`,
      ``,
      `## Unblock`,
      ``,
      `- Go to GA4 → Admin → Account Access Management (or per-property Access Management)`,
      `- Add \`${credentials.client_email}\` as **Viewer** for:`,
      `  - atlantisndt.com GA4 property (G-1EF92RXSVR)`,
      `  - ndt-connect.com GA4 property`,
      `  - visapath GA4 property`,
      `- Re-run \`node scripts/ga4-audit-pull.mjs\``,
      ``,
    ].join('\n');
    writeFileSync(ERROR_PATH, body);
    writeStatus(
      false,
      `# GA4 Audit Status\n\n**Result:** PARTIAL — Admin API works but SA sees 0 properties.\n\nService account \`${credentials.client_email}\` must be added as Viewer on the GA4 properties.\n\nSee ga4-audit-error.md for steps.\n`
    );
    // still write a JSON with what we got
    writeFileSync(
      OUTPUT_PATH,
      JSON.stringify(
        {
          generated: new Date().toISOString(),
          serviceAccount: credentials.client_email,
          accountSummaries,
          properties: [],
          reports: {},
          note: 'No properties accessible — see ga4-audit-error.md.',
        },
        null,
        2
      )
    );
    process.exit(0);
  }

  // Step 2: pull 28d + 90d reports for each property
  const range28 = getDateRange(28);
  const range90 = getDateRange(90);
  console.log(`\n28d window: ${range28.startDate} → ${range28.endDate}`);
  console.log(`90d window: ${range90.startDate} → ${range90.endDate}`);

  const dimensions = ['country', 'pagePath', 'sessionSourceMedium'];
  const metrics = ['sessions', 'activeUsers', 'engagedSessions', 'screenPageViews', 'averageSessionDuration'];

  const reports = {};
  const errors = [];

  for (const prop of properties) {
    console.log(`\n── Property: ${prop.propertyDisplayName} (${prop.propertyId})`);
    reports[prop.propertyId] = { property: prop, reports: {} };
    for (const [label, range] of [
      ['last28d', range28],
      ['last90d', range90],
    ]) {
      try {
        const report = await runReport(accessToken, prop.propertyId, {
          startDate: range.startDate,
          endDate: range.endDate,
          dimensions,
          metrics,
          limit: 10000,
        });

        const rowCount = (report.rows || []).length;
        // quick totals
        const totalsMap = {};
        for (const h of report.metricHeaders || []) totalsMap[h.name] = 0;
        for (const row of report.rows || []) {
          (report.metricHeaders || []).forEach((h, i) => {
            totalsMap[h.name] += Number(row.metricValues[i].value) || 0;
          });
        }
        console.log(
          `  [${label}] rows=${rowCount}, sessions=${totalsMap.sessions || 0}, activeUsers=${totalsMap.activeUsers || 0}, views=${totalsMap.screenPageViews || 0}`
        );
        reports[prop.propertyId].reports[label] = {
          dateRange: range,
          rowCount,
          totals: totalsMap,
          dimensionHeaders: report.dimensionHeaders,
          metricHeaders: report.metricHeaders,
          rows: report.rows || [],
          rowsReturned: rowCount,
        };
      } catch (err) {
        console.error(`  [${label}] FAILED: ${err.message}`);
        errors.push({ propertyId: prop.propertyId, range: label, error: err.message, body: err.body });
        reports[prop.propertyId].reports[label] = { error: err.message, body: err.body };
      }
    }
  }

  writeFileSync(
    OUTPUT_PATH,
    JSON.stringify(
      {
        generated: new Date().toISOString(),
        serviceAccount: credentials.client_email,
        gcpProjectNumber: '139446864572',
        dateRanges: { last28d: range28, last90d: range90 },
        dimensions,
        metrics,
        accounts,
        properties,
        reports,
        errors,
      },
      null,
      2
    )
  );
  console.log(`\nWrote: ${OUTPUT_PATH}`);

  // ── Build status.md summary ──
  const statusLines = [];
  statusLines.push(`# GA4 Audit Status`);
  statusLines.push('');
  statusLines.push(`**Date:** ${new Date().toISOString()}`);
  statusLines.push(`**Service account:** ${credentials.client_email}`);
  statusLines.push(`**Accessible properties:** ${properties.length}`);
  statusLines.push('');
  if (errors.length) {
    statusLines.push(`**Result:** PARTIAL — ${errors.length} report call(s) failed (see errors section).`);
  } else {
    statusLines.push(`**Result:** OK — Admin API + Data API both reachable; reports pulled successfully.`);
  }
  statusLines.push('');
  statusLines.push(`## Properties`);
  statusLines.push('');
  for (const p of properties) {
    statusLines.push(`- **${p.propertyDisplayName}** — property id \`${p.propertyId}\` (account: ${p.accountName})`);
  }
  statusLines.push('');
  statusLines.push(`## Top-line totals`);
  statusLines.push('');
  statusLines.push(`| Property | Window | Sessions | Users | Views | Engaged sessions | Avg session sec |`);
  statusLines.push(`|---|---|---:|---:|---:|---:|---:|`);
  for (const prop of properties) {
    for (const label of ['last28d', 'last90d']) {
      const r = reports[prop.propertyId].reports[label];
      if (r && r.totals) {
        const avgSec = r.totals.averageSessionDuration
          ? (r.totals.averageSessionDuration / Math.max(1, r.rowCount || 1)).toFixed(1)
          : '0';
        statusLines.push(
          `| ${prop.propertyDisplayName} | ${label} | ${r.totals.sessions || 0} | ${r.totals.activeUsers || 0} | ${r.totals.screenPageViews || 0} | ${r.totals.engagedSessions || 0} | ${avgSec} |`
        );
      } else if (r && r.error) {
        statusLines.push(`| ${prop.propertyDisplayName} | ${label} | ERROR | - | - | - | - |`);
      }
    }
  }
  statusLines.push('');
  if (errors.length) {
    statusLines.push(`## Errors`);
    statusLines.push('');
    for (const e of errors) {
      statusLines.push(`- property=${e.propertyId} range=${e.range}: ${e.error}`);
    }
    statusLines.push('');
  }
  statusLines.push(`## Output files`);
  statusLines.push('');
  statusLines.push(`- Full JSON: \`scripts/ga4-audit-2026-04.json\``);
  statusLines.push(`- This status: \`scripts/ga4-audit-status.md\``);
  if (errors.length) statusLines.push(`- Error details: \`scripts/ga4-audit-error.md\``);
  writeStatus(true, statusLines.join('\n'));

  if (errors.length) process.exit(4);
}

main().catch((err) => {
  console.error('FATAL:', err.message);
  writeErrorReport('main', err);
  writeStatus(
    false,
    `# GA4 Audit Status\n\n**Result:** FATAL ERROR\n\n\`\`\`\n${err.message}\n\`\`\`\n\nSee ga4-audit-error.md.\n`
  );
  process.exit(99);
});
