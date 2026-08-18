import { readFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createSign } from 'crypto';
const __dirname = dirname(fileURLToPath(import.meta.url));
const C = JSON.parse(readFileSync(join(__dirname, 'gsc-service-account.json'), 'utf-8'));
const SITE = 'https://atlantisndt.com';
const now = Math.floor(Date.now() / 1000);
const enc = o => Buffer.from(JSON.stringify(o)).toString('base64url');
const u = `${enc({ alg: 'RS256', typ: 'JWT' })}.${enc({ iss: C.client_email, scope: 'https://www.googleapis.com/auth/webmasters.readonly', aud: 'https://oauth2.googleapis.com/token', exp: now + 3600, iat: now })}`;
const sg = createSign('RSA-SHA256'); sg.update(u);
const tk = (await (await fetch('https://oauth2.googleapis.com/token', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${u}.${sg.sign(C.private_key, 'base64url')}` })).json()).access_token;

// Recent publishing batches, newest first.
const batches = readdirSync(__dirname)
  .filter(f => /^indexing-url-list-2026-08-\d\d.*\.json$/.test(f))
  .sort().reverse().slice(0, 6);
console.log('batches:', batches.join(', '), '\n');

const urls = new Set();
for (const b of batches) {
  try {
    const j = JSON.parse(readFileSync(join(__dirname, b), 'utf-8'));
    const list = Array.isArray(j) ? j : (j.urls || j.list || []);
    for (const x of list) {
      const url = typeof x === 'string' ? x : (x.url || x.loc);
      if (url && url.startsWith('http')) urls.add(url);
    }
  } catch (e) { console.log('  skip', b, e.message.slice(0, 60)); }
}
const sample = [...urls].slice(0, 45);
console.log(`sampling ${sample.length} of ${urls.size} recently submitted URLs\n`);

async function inspect(url) {
  const r = await fetch('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', {
    method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${tk}` },
    body: JSON.stringify({ inspectionUrl: url, siteUrl: SITE }),
  });
  if (!r.ok) return { err: `${r.status} ${(await r.text()).slice(0, 120)}` };
  const j = await r.json();
  const i = j.inspectionResult?.indexStatusResult || {};
  return { verdict: i.verdict, coverage: i.coverageState, robots: i.robotsTxtState, indexing: i.indexingState, crawled: i.lastCrawlTime, canonical: i.googleCanonical };
}

const tally = {};
for (const url of sample) {
  const r = await inspect(url);
  const k = r.err ? `ERR ${r.err.slice(0, 40)}` : (r.coverage || r.verdict || 'unknown');
  tally[k] = (tally[k] || 0) + 1;
  console.log(`  ${String(r.verdict || '-').padEnd(8)} ${String(k).slice(0, 52).padEnd(54)} ${url.replace(SITE, '').slice(0, 46)}`);
  await new Promise(x => setTimeout(x, 220));
}
console.log('\n=== TALLY ===');
for (const [k, v] of Object.entries(tally).sort((a, b) => b[1] - a[1])) console.log(`  ${String(v).padStart(3)}  ${k}`);
