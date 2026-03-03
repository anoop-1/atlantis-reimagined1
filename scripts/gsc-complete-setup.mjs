import { readFileSync } from 'fs';
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

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function main() {
  // STEP 1: Verify ownership via Site Verification API
  console.log('========== STEP 1: VERIFY OWNERSHIP ==========\n');
  const verifyToken = await getToken('https://www.googleapis.com/auth/siteverification');
  
  for (const site of SITES) {
    console.log(`Verifying ${site}...`);
    const res = await fetch('https://www.googleapis.com/siteVerification/v1/webResource?verificationMethod=META', {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + verifyToken, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        site: { type: 'SITE', identifier: site + '/' }
      }),
    });
    const data = await res.json();
    if (res.ok) {
      console.log(`  SUCCESS - Verified as owner!`);
    } else {
      console.log(`  Status: ${res.status} - ${JSON.stringify(data).substring(0, 200)}`);
    }
    await sleep(1000);
  }
  
  // STEP 2: Submit sitemaps via GSC Webmasters API
  console.log('\n========== STEP 2: SUBMIT SITEMAPS ==========\n');
  const wmToken = await getToken('https://www.googleapis.com/auth/webmasters');
  
  for (const site of SITES) {
    const sitemapUrl = site + '/sitemap.xml';
    console.log(`Submitting sitemap for ${site}...`);
    const encodedSite = encodeURIComponent(site + '/');
    const encodedSitemap = encodeURIComponent(sitemapUrl);
    const url = `https://www.googleapis.com/webmasters/v3/sites/${encodedSite}/sitemaps/${encodedSitemap}`;
    const res = await fetch(url, {
      method: 'PUT',
      headers: { 'Authorization': 'Bearer ' + wmToken, 'Content-Type': 'application/json' },
    });
    if (res.ok) {
      console.log(`  SUCCESS - Sitemap submitted!`);
    } else {
      const text = await res.text();
      console.log(`  Status: ${res.status} - ${text.substring(0, 200)}`);
    }
    await sleep(500);
  }
  
  // STEP 3: Request indexing via Indexing API
  console.log('\n========== STEP 3: REQUEST INDEXING ==========\n');
  const indexToken = await getToken('https://www.googleapis.com/auth/indexing');
  
  const allUrls = [
    "https://ndt-knowledge-hub.vercel.app/",
    "https://ndt-knowledge-hub.vercel.app/certifications",
    "https://ndt-knowledge-hub.vercel.app/certifications/api-510",
    "https://ndt-knowledge-hub.vercel.app/certifications/api-570",
    "https://ndt-knowledge-hub.vercel.app/certifications/api-653",
    "https://ndt-knowledge-hub.vercel.app/certifications/asnt-level-iii",
    "https://ndt-knowledge-hub.vercel.app/glossary",
    "https://ndt-knowledge-hub.vercel.app/guides",
    "https://ndt-knowledge-hub.vercel.app/guides/ndt-career-path",
    "https://ndt-knowledge-hub.vercel.app/guides/ndt-salary-guide",
    "https://ndt-knowledge-hub.vercel.app/methods",
    "https://ndt-knowledge-hub.vercel.app/methods/eddy-current-testing",
    "https://ndt-knowledge-hub.vercel.app/methods/liquid-penetrant-testing",
    "https://ndt-knowledge-hub.vercel.app/methods/magnetic-particle-testing",
    "https://ndt-knowledge-hub.vercel.app/methods/radiographic-testing",
    "https://ndt-knowledge-hub.vercel.app/methods/ultrasonic-testing",
    "https://ndt-knowledge-hub.vercel.app/methods/visual-testing",
    "https://ndt-knowledge-hub.vercel.app/resources",
    "https://ndt-knowledge-hub.vercel.app/software-reviews",
    "https://ndt-knowledge-hub.vercel.app/software-reviews/digital-twin-technology",
    "https://ndt-knowledge-hub.vercel.app/software-reviews/ndt-erp-systems",
    "https://industrial-inspection-resources.vercel.app/",
    "https://industrial-inspection-resources.vercel.app/case-studies",
    "https://industrial-inspection-resources.vercel.app/industries",
    "https://industrial-inspection-resources.vercel.app/industries/aerospace-inspection",
    "https://industrial-inspection-resources.vercel.app/industries/oil-gas-inspection",
    "https://industrial-inspection-resources.vercel.app/industries/power-generation-inspection",
    "https://industrial-inspection-resources.vercel.app/standards",
    "https://industrial-inspection-resources.vercel.app/standards/api-inspection-codes",
    "https://industrial-inspection-resources.vercel.app/standards/asme-codes-ndt",
    "https://industrial-inspection-resources.vercel.app/technology",
    "https://industrial-inspection-resources.vercel.app/technology/digital-twins-asset-management",
    "https://industrial-inspection-resources.vercel.app/technology/erp-for-inspection-companies",
    "https://industrial-inspection-resources.vercel.app/technology/ndt-reporting-software",
    "https://asset-integrity-hub.vercel.app/",
    "https://asset-integrity-hub.vercel.app/blog",
    "https://asset-integrity-hub.vercel.app/blog/digital-twin-roi-calculator",
    "https://asset-integrity-hub.vercel.app/blog/erp-vs-spreadsheets-ndt",
    "https://asset-integrity-hub.vercel.app/digital-twins",
    "https://asset-integrity-hub.vercel.app/digital-twins/oil-gas",
    "https://asset-integrity-hub.vercel.app/digital-twins/predictive-maintenance",
    "https://asset-integrity-hub.vercel.app/erp-solutions",
    "https://asset-integrity-hub.vercel.app/erp-solutions/implementation-guide",
    "https://asset-integrity-hub.vercel.app/ndt-software",
    "https://asset-integrity-hub.vercel.app/ndt-software/ndtconnect-review",
    "https://asset-integrity-hub.vercel.app/ndt-software/reporting-tools",
    "https://ndt-training-academy.vercel.app/",
    "https://ndt-training-academy.vercel.app/career",
    "https://ndt-training-academy.vercel.app/certifications",
    "https://ndt-training-academy.vercel.app/certifications/api-exam-prep",
    "https://ndt-training-academy.vercel.app/certifications/asnt-study-guide",
    "https://ndt-training-academy.vercel.app/regional",
    "https://ndt-training-academy.vercel.app/regional/india",
    "https://ndt-training-academy.vercel.app/regional/middle-east",
    "https://ndt-training-academy.vercel.app/regional/usa",
    "https://ndt-training-academy.vercel.app/training",
    "https://ndt-training-academy.vercel.app/training/mt-pt-training",
    "https://ndt-training-academy.vercel.app/training/rt-training",
    "https://ndt-training-academy.vercel.app/training/ut-training",
    "https://ndt-careers-portal.vercel.app/",
    "https://ndt-careers-portal.vercel.app/careers",
    "https://ndt-careers-portal.vercel.app/careers/level-iii-consultant",
    "https://ndt-careers-portal.vercel.app/careers/ndt-inspector",
    "https://ndt-careers-portal.vercel.app/consulting-guide",
    "https://ndt-careers-portal.vercel.app/job-markets",
    "https://ndt-careers-portal.vercel.app/job-markets/asia-pacific",
    "https://ndt-careers-portal.vercel.app/job-markets/houston",
    "https://ndt-careers-portal.vercel.app/job-markets/middle-east",
    "https://ndt-careers-portal.vercel.app/resources",
    "https://ndt-careers-portal.vercel.app/salary",
    "https://ndt-careers-portal.vercel.app/salary/by-location",
    "https://ndt-careers-portal.vercel.app/salary/by-method"
  ];
  
  let successCount = 0;
  let failCount = 0;
  
  // Submit in batches of 5 with delays
  for (let i = 0; i < allUrls.length; i++) {
    const url = allUrls[i];
    try {
      const res = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
        method: 'POST',
        headers: { 'Authorization': 'Bearer ' + indexToken, 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, type: 'URL_UPDATED' }),
      });
      if (res.ok) {
        successCount++;
        if (i < 5 || i % 10 === 0) console.log(`  [${i+1}/${allUrls.length}] ${url} - OK`);
      } else {
        failCount++;
        const text = await res.text();
        if (i < 5) console.log(`  [${i+1}/${allUrls.length}] ${url} - ${res.status}: ${text.substring(0, 100)}`);
      }
    } catch (e) {
      failCount++;
    }
    // Rate limit: 200ms between requests
    if (i % 5 === 4) await sleep(500);
    else await sleep(200);
  }
  
  console.log(`\nIndexing results: ${successCount} succeeded, ${failCount} failed out of ${allUrls.length} URLs`);
  
  console.log('\n========== COMPLETE ==========');
}

main().catch(console.error);
