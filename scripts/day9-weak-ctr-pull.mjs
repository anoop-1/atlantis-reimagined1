#!/usr/bin/env node
/**
 * Day-9 Step 4 — Pull top-30 weakest-CTR high-impression pages from GSC for CTR rewrite.
 *
 * Criteria:
 *   - impressions ≥ 30 (worth rewriting)
 *   - CTR < 2.0% (clear underperformer)
 *   - rank by clicks-potential = impressions × (0.05 − current CTR) descending
 *
 * Output: scripts/_day9-weak-ctr.json (top 30 with current title + meta + URL)
 */
import { readFileSync, writeFileSync } from 'fs';
import { createSign } from 'crypto';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const CRED = join(__dirname, 'gsc-service-account.json');
const SITE = 'sc-domain:atlantisndt.com';

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

(async () => {
  const token = await getToken();
  const { startDate, endDate } = range(30);
  console.log(`GSC pull: ${startDate} → ${endDate}`);

  const result = await query(token, {
    startDate, endDate,
    dimensions: ['page'],
    rowLimit: 500,
    dimensionFilterGroups: [{
      filters: [{ dimension: 'page', operator: 'contains', expression: 'atlantisndt.com' }],
    }],
  });

  const rows = result.rows || [];
  console.log(`Got ${rows.length} pages from GSC.`);

  // Filter weak-CTR + high-impression candidates
  const weak = rows
    .filter(r => r.impressions >= 30 && (r.clicks / r.impressions) < 0.02)
    .map(r => {
      const ctr = r.clicks / r.impressions;
      const potential = r.impressions * Math.max(0, 0.05 - ctr);
      return {
        url: r.keys[0],
        path: new URL(r.keys[0]).pathname.replace(/\/$/, ''),
        clicks: r.clicks,
        impressions: r.impressions,
        ctr: +(ctr * 100).toFixed(2),
        position: +r.position.toFixed(1),
        potential: +potential.toFixed(1),
      };
    })
    .sort((a, b) => b.potential - a.potential)
    .slice(0, 30);

  const out = { generated: new Date().toISOString(), window: { startDate, endDate }, count: weak.length, weak };
  writeFileSync(join(__dirname, '_day9-weak-ctr.json'), JSON.stringify(out, null, 2), 'utf-8');
  console.log(`Wrote ${weak.length} weak-CTR pages → scripts/_day9-weak-ctr.json`);
  console.log('Top 5:');
  weak.slice(0, 5).forEach(w => console.log(`  ${w.path}: ${w.clicks}cl / ${w.impressions}imp / ${w.ctr}% / pos ${w.position} / potential +${w.potential}cl`));
})();
