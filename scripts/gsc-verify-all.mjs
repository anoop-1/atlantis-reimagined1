import { readFileSync } from 'fs';
import { createSign } from 'crypto';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const credentials = JSON.parse(readFileSync(join(__dirname, 'gsc-service-account.json'), 'utf-8'));

async function getToken(scope) {
  const header = { alg: 'RS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const claim = { iss: credentials.client_email, scope, aud: 'https://oauth2.googleapis.com/token', exp: now + 3600, iat: now };
  const encode = (obj) => Buffer.from(JSON.stringify(obj)).toString('base64url');
  const unsigned = `${encode(header)}.${encode(claim)}`;
  const sign = createSign('RSA-SHA256');
  sign.update(unsigned);
  const sig = sign.sign(credentials.private_key, 'base64url');
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${unsigned}.${sig}`,
  });
  return (await res.json()).access_token;
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

const unverified = [
  'https://pressure-vessel-inspection.vercel.app/',
  'https://industrial-coating-inspection.vercel.app/',
  'https://ut-testing-academy.vercel.app/',
  'https://corrosion-engineering-guide.vercel.app/',
  'https://offshore-ndt-guide.vercel.app/',
  'https://pipeline-integrity-hub.vercel.app/',
  'https://ndt-standards-reference.vercel.app/',
  'https://ndt-career-portal.vercel.app/',
  'https://ndt-digital-technology.vercel.app/',
  'https://tank-inspection-guide.vercel.app/',
  'https://rt-testing-hub.vercel.app/',
  'https://weld-inspection-pro.vercel.app/',
  'https://aerospace-ndt-center.vercel.app/',
  'https://passport-power-index.vercel.app/',
  'https://go-visa.vercel.app/',
  'https://travel-docs-checklist.vercel.app/',
];

const verToken = await getToken('https://www.googleapis.com/auth/siteverification');
const wmToken = await getToken('https://www.googleapis.com/auth/webmasters');

console.log('Checking & verifying ' + unverified.length + ' sites...\n');

let verified = 0, noMeta = 0, unreachable = 0, failed = 0;

for (const siteUrl of unverified) {
  const name = siteUrl.replace('https://', '').replace('/', '');
  process.stdout.write(name.padEnd(50));

  // Check if site is reachable and has meta tag
  let hasMeta = false;
  try {
    const pageRes = await fetch(siteUrl, { redirect: 'follow' });
    if (!pageRes.ok) {
      console.log(`UNREACHABLE (${pageRes.status})`);
      unreachable++;
      continue;
    }
    const html = await pageRes.text();
    hasMeta = html.includes('google-site-verification') && html.includes('dlNM5ly7deh5YYSr3uXXCL_lyNXxdluY229Ywzm34nE');
    if (!hasMeta) {
      console.log('NO META TAG — needs deployment with verification tag');
      noMeta++;
      continue;
    }
  } catch (e) {
    console.log(`ERROR: ${e.message}`);
    unreachable++;
    continue;
  }

  // Attempt META verification
  const verRes = await fetch('https://www.googleapis.com/siteVerification/v1/webResource?verificationMethod=META', {
    method: 'POST',
    headers: { Authorization: `Bearer ${verToken}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ site: { type: 'SITE', identifier: siteUrl } }),
  });
  const verData = await verRes.json();

  if (verRes.status === 200 || verData.id) {
    // Add to GSC as property
    const addRes = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}`, {
      method: 'PUT', headers: { Authorization: `Bearer ${wmToken}` },
    });

    // Submit sitemap
    const domain = new URL(siteUrl).hostname;
    const smUrl = `https://${domain}/sitemap.xml`;
    const smRes = await fetch(
      `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/sitemaps/${encodeURIComponent(smUrl)}`,
      { method: 'PUT', headers: { Authorization: `Bearer ${wmToken}` } }
    );

    console.log(`VERIFIED + ADDED + SITEMAP`);
    verified++;
  } else {
    const errMsg = verData.error?.message || JSON.stringify(verData);
    console.log(`VERIFY FAILED (${verRes.status}): ${errMsg.substring(0, 100)}`);
    failed++;
  }

  await sleep(1500);
}

console.log(`\n========================================`);
console.log(`  Verified: ${verified}`);
console.log(`  No meta tag: ${noMeta}`);
console.log(`  Unreachable: ${unreachable}`);
console.log(`  Failed: ${failed}`);
console.log(`========================================\n`);
