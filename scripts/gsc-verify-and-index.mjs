import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { createSign } from 'crypto';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const creds = JSON.parse(readFileSync(join(__dirname, 'gsc-service-account.json'), 'utf-8'));

const SITES = [
  'https://ndt-knowledge-hub.vercel.app',
  'https://industrial-inspection-resources.vercel.app',
  'https://asset-integrity-hub.vercel.app',
  'https://ndt-training-academy.vercel.app',
  'https://ndt-careers-portal.vercel.app',
];

async function getToken(scope) {
  const header = { alg: 'RS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const claim = { iss: creds.client_email, scope, aud: 'https://oauth2.googleapis.com/token', exp: now + 3600, iat: now };
  const encode = (obj) => Buffer.from(JSON.stringify(obj)).toString('base64url');
  const unsigned = encode(header) + '.' + encode(claim);
  const sign = createSign('RSA-SHA256');
  sign.update(unsigned);
  const sig = sign.sign(creds.private_key, 'base64url');
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: 'grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=' + unsigned + '.' + sig,
  });
  const data = await res.json();
  if (!data.access_token) throw new Error('Token error: ' + JSON.stringify(data));
  return data.access_token;
}

async function main() {
  // Step 1: Get verification tokens for all sites
  console.log('=== STEP 1: Getting verification tokens ===\n');
  const verifyToken = await getToken('https://www.googleapis.com/auth/siteverification');
  
  const verificationMeta = {};
  
  for (const site of SITES) {
    console.log(`Getting token for ${site}...`);
    const res = await fetch('https://www.googleapis.com/siteVerification/v1/token', {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + verifyToken, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        verificationMethod: 'META',
        site: { type: 'SITE', identifier: site + '/' }
      }),
    });
    const data = await res.json();
    console.log(`  Status: ${res.status}`);
    if (data.token) {
      console.log(`  Token: ${data.token}`);
      verificationMeta[site] = data.token;
    } else {
      console.log(`  Error: ${JSON.stringify(data)}`);
    }
  }
  
  // Save tokens
  writeFileSync(join(__dirname, 'verification-tokens.json'), JSON.stringify(verificationMeta, null, 2));
  console.log('\nSaved verification tokens to verification-tokens.json');
  console.log(JSON.stringify(verificationMeta, null, 2));
}

main().catch(console.error);
