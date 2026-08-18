import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createSign } from 'crypto';
const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE = 'https://atlantisndt.com';
const TEST_URL = 'https://atlantisndt.com/ndt-training-denver';

const files = ['gsc-service-account.json', ...Array.from({ length: 10 }, (_, i) => `gsc-service-account-${i + 1}.json`)]
  .filter(f => existsSync(join(__dirname, f)));

async function token(C, scope) {
  const now = Math.floor(Date.now() / 1000);
  const enc = o => Buffer.from(JSON.stringify(o)).toString('base64url');
  const u = `${enc({ alg: 'RS256', typ: 'JWT' })}.${enc({ iss: C.client_email, scope, aud: 'https://oauth2.googleapis.com/token', exp: now + 3600, iat: now })}`;
  const s = createSign('RSA-SHA256'); s.update(u);
  const r = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${u}.${s.sign(C.private_key, 'base64url')}`,
  });
  const j = await r.json();
  if (!j.access_token) throw new Error(JSON.stringify(j).slice(0, 120));
  return j.access_token;
}

for (const f of files) {
  const C = JSON.parse(readFileSync(join(__dirname, f), 'utf-8'));
  let line = `${f.padEnd(28)} ${String(C.client_email).slice(0, 46).padEnd(48)}`;
  try {
    const tk = await token(C, 'https://www.googleapis.com/auth/webmasters');
    // permission level as reported by the sites resource
    const sres = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}`, { headers: { Authorization: `Bearer ${tk}` } });
    const perm = sres.ok ? (await sres.json()).permissionLevel : `site:${sres.status}`;
    // does URL Inspection work?
    const ires = await fetch('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', {
      method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${tk}` },
      body: JSON.stringify({ inspectionUrl: TEST_URL, siteUrl: SITE }),
    });
    let insp = ires.status;
    if (ires.ok) {
      const j = await ires.json();
      insp = `OK — ${j.inspectionResult?.indexStatusResult?.coverageState || 'no coverage field'}`;
    }
    console.log(`${line} perm=${String(perm).padEnd(22)} inspect=${insp}`);
  } catch (e) {
    console.log(`${line} ERR ${e.message.slice(0, 70)}`);
  }
}
