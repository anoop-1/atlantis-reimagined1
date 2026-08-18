import { readFileSync } from 'fs';
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
const q = async b => {
  const r = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${tk}` }, body: JSON.stringify({ type: 'web', rowLimit: 25000, ...b }) });
  if (!r.ok) throw new Error(r.status + ' ' + (await r.text()).slice(0, 200));
  return (await r.json()).rows || [];
};
const S = '2026-06-15', E = '2026-08-14';

const CLUSTERS = {
  salary: ['salary', 'pay', 'wage', 'earn'],
  software: ['software', 'reporting software', 'inspection software'],
  api653: ['api 653', 'tank inspection'],
  api617: ['api 617'],
  consulting: ['level iii consulting', 'level 3 consult'],
  cost: ['ndt inspection cost', 'ndt cost'],
  snttc1a: ['snt-tc-1a', 'snt tc 1a'],
  trainingOnline: ['online training', 'training online', 'ndt training near me', 'ndt school'],
};

const pairs = await q({ startDate: S, endDate: E, dimensions: ['query', 'page'] });
console.log('total query+page rows', pairs.length);

for (const [name, needles] of Object.entries(CLUSTERS)) {
  const hits = pairs.filter(r => needles.some(n => r.keys[0].includes(n)));
  const byPage = {};
  for (const r of hits) {
    const p = r.keys[1].replace(SITE, '');
    byPage[p] ??= { c: 0, i: 0, wpos: 0, queries: [] };
    byPage[p].c += r.clicks; byPage[p].i += r.impressions;
    byPage[p].wpos += r.position * r.impressions;
    byPage[p].queries.push([r.keys[0], r.impressions, +r.position.toFixed(1), r.clicks]);
  }
  const ranked = Object.entries(byPage).sort((a, b) => b[1].i - a[1].i).slice(0, 6);
  console.log(`\n===== ${name.toUpperCase()} =====`);
  for (const [p, v] of ranked) {
    console.log(`  ${String(v.c).padStart(4)}c ${String(v.i).padStart(6)}i  pos ${(v.wpos / v.i).toFixed(1).padStart(5)}  ${p}`);
    for (const [qq, ii, pp, cc] of v.queries.sort((a, b) => b[1] - a[1]).slice(0, 6))
      console.log(`        ${String(cc).padStart(3)}c ${String(ii).padStart(5)}i p${String(pp).padStart(5)}  ${qq.slice(0, 55)}`);
  }
}
