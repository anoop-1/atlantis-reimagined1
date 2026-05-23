#!/usr/bin/env node
/**
 * Pull 90-day GSC impressions for /ndt-erp-* pages on atlantisndt.com.
 *
 * Output: scripts/erp-90d-impressions.json
 *   { generated, site, range, total, items: [ {slug, page, impressions, clicks, ctr, position} ] }
 *
 * Auth: scripts/gsc-service-account.json (shared with other GSC scripts).
 *
 * Strategy: Pull all dimensions=['page'] rows for 90d, filter to /ndt-erp- prefix,
 * then join against the canonical erpCities slug list extracted from prerender.mjs.
 * Slugs with zero recorded impressions are emitted with impressions=0.
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createSign } from 'crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const CRED = join(__dirname, 'gsc-service-account.json');
const SITE = 'https://atlantisndt.com';
const OUT = join(__dirname, 'erp-90d-impressions.json');
const SLUGS_FILE = join(__dirname, '_erp-slugs-list.json');

async function getToken(c, scope) {
  const now = Math.floor(Date.now() / 1000);
  const head = Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })).toString('base64url');
  const claim = Buffer.from(JSON.stringify({
    iss: c.client_email, scope, aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600, iat: now,
  })).toString('base64url');
  const unsigned = `${head}.${claim}`;
  const sig = createSign('RSA-SHA256').update(unsigned).sign(c.private_key, 'base64url');
  const r = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${unsigned}.${sig}`,
  });
  if (!r.ok) throw new Error(`token error: ${r.status} ${await r.text()}`);
  return (await r.json()).access_token;
}

async function gsc(token, body) {
  const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`;
  const r = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ ...body, type: 'web' }),
  });
  if (!r.ok) throw new Error(`gsc error: ${r.status} ${await r.text()}`);
  return r.json();
}

function range(days) {
  const end = new Date(); end.setDate(end.getDate() - 3);
  const start = new Date(end); start.setDate(start.getDate() - days);
  return { startDate: start.toISOString().slice(0, 10), endDate: end.toISOString().slice(0, 10) };
}

async function main() {
  if (!existsSync(CRED)) throw new Error(`credentials missing: ${CRED}`);
  if (!existsSync(SLUGS_FILE)) throw new Error(`slugs file missing: ${SLUGS_FILE} (re-run extractor)`);

  const creds = JSON.parse(readFileSync(CRED, 'utf-8'));
  const tok = await getToken(creds, 'https://www.googleapis.com/auth/webmasters.readonly');
  const r90 = range(90);

  console.log(`Pulling 90d page-level data ${r90.startDate} → ${r90.endDate} (page contains /ndt-erp-)`);

  // Use dimensionFilterGroups to scope to /ndt-erp- pages directly.
  const body = {
    ...r90,
    dimensions: ['page'],
    rowLimit: 25000,
    dimensionFilterGroups: [{
      filters: [{ dimension: 'page', operator: 'contains', expression: '/ndt-erp-' }],
    }],
  };

  const res = await gsc(tok, body);
  const rows = res.rows || [];
  console.log(`GSC returned ${rows.length} /ndt-erp- page rows`);

  // Index by slug
  const bySlug = new Map();
  for (const row of rows) {
    const pageUrl = row.keys[0];
    const path = pageUrl.replace(SITE, '').replace(/\/$/, '');
    const m = path.match(/^\/ndt-erp-([a-z0-9-]+)$/);
    if (!m) continue; // skip variants like /ar/ndt-erp-..., /es/ndt-erp-... and pillar pages
    const slug = m[1];
    // Skip ERP pillar/non-city slugs that shouldn't be candidates
    const skip = new Set([
      'solution', 'software-comparison', 'vs-generic-erp', 'integration-matrix',
      'roi-calculator', 'implementation-timeline',
    ]);
    if (skip.has(slug)) continue;
    bySlug.set(slug, {
      slug, page: path,
      impressions: row.impressions || 0,
      clicks: row.clicks || 0,
      ctr: row.ctr || 0,
      position: row.position || 0,
    });
  }

  // Merge with full slug list so every ERP city is represented
  const allSlugs = JSON.parse(readFileSync(SLUGS_FILE, 'utf-8'));
  const items = allSlugs.map(slug => bySlug.get(slug) || {
    slug, page: `/ndt-erp-${slug}`,
    impressions: 0, clicks: 0, ctr: 0, position: 0,
  });

  items.sort((a, b) => b.impressions - a.impressions);

  const out = {
    generated: new Date().toISOString(),
    site: SITE,
    range: r90,
    total: items.length,
    withImpressions: items.filter(i => i.impressions > 0).length,
    items,
  };

  writeFileSync(OUT, JSON.stringify(out, null, 2));
  console.log(`Wrote ${OUT}`);
  console.log(`Top 5:`, items.slice(0, 5).map(i => `${i.slug}=${i.impressions}`).join(', '));
  console.log(`Bottom 5:`, items.slice(-5).map(i => `${i.slug}=${i.impressions}`).join(', '));
}

main().catch(e => { console.error(e); process.exit(1); });
