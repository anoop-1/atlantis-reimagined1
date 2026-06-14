#!/usr/bin/env node
/**
 * Fix satellites:
 *   1. Try ALL 10 SAs against the unverified satellites — find one that owns each
 *   2. For all satellites where sitemap is missing from GSC, submit /sitemap.xml
 *   3. For satellites with sitemap errors, pull error details
 */
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { createSign } from 'crypto';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SAT_DIR = join(ROOT, 'backlink-sites');

const SAT_NAMES = readdirSync(SAT_DIR, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name)
  .sort();

// Load ALL 10 SAs
function loadAllSAs() {
  const files = readdirSync(__dirname)
    .filter(f => /^gsc-service-account(-\d+)?\.json$/.test(f))
    .sort();
  return files.map(f => ({ file: f, cred: JSON.parse(readFileSync(join(__dirname, f), 'utf-8')) }));
}

const SAS = loadAllSAs();
console.log(`Loaded ${SAS.length} service accounts:`, SAS.map(s => s.file).join(', '));

async function getToken(cred, scope) {
  const now = Math.floor(Date.now() / 1000);
  const enc = o => Buffer.from(JSON.stringify(o)).toString('base64url');
  const h = enc({ alg: 'RS256', typ: 'JWT' });
  const c = enc({ iss: cred.client_email, scope, aud: 'https://oauth2.googleapis.com/token', exp: now + 3600, iat: now });
  const u = h + '.' + c;
  const sig = createSign('RSA-SHA256').update(u).sign(cred.private_key, 'base64url');
  const r = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: 'grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=' + u + '.' + sig,
  });
  const j = await r.json();
  return j.access_token;
}

async function listSites(token) {
  const r = await fetch('https://www.googleapis.com/webmasters/v3/sites', { headers: { Authorization: 'Bearer ' + token } });
  return r.json();
}

async function listSitemaps(token, site) {
  const r = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(site)}/sitemaps`, {
    headers: { Authorization: 'Bearer ' + token },
  });
  return r.json();
}

async function submitSitemap(token, site, feedpath) {
  const r = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(site)}/sitemaps/${encodeURIComponent(feedpath)}`, {
    method: 'PUT',
    headers: { Authorization: 'Bearer ' + token },
  });
  return { status: r.status, ok: r.status === 200 };
}

// STEP 1 — for each SA, list verified sites + build a map: host -> [accountFiles owning it]
const ownership = {}; // host -> [{file, site (full URL form)}]
for (const sa of SAS) {
  try {
    const token = await getToken(sa.cred, 'https://www.googleapis.com/auth/webmasters.readonly');
    const sitesRes = await listSites(token);
    const entries = sitesRes.siteEntry || [];
    for (const e of entries) {
      // e.siteUrl is like sc-domain:foo.com or https://foo.com/
      let host = null;
      const url = e.siteUrl || '';
      if (url.startsWith('sc-domain:')) host = url.slice('sc-domain:'.length).toLowerCase();
      else if (url.startsWith('http')) try { host = new URL(url).hostname.toLowerCase(); } catch {}
      if (!host) continue;
      if (!ownership[host]) ownership[host] = [];
      ownership[host].push({ file: sa.file, site: url, permissionLevel: e.permissionLevel });
    }
  } catch (e) {
    console.log(`SA ${sa.file} listSites failed: ${e.message}`);
  }
}

// STEP 2 — for each satellite host, report verification + fix sitemap
const report = { generated: new Date().toISOString(), satellites: [] };
for (const name of SAT_NAMES) {
  const host = `${name}.vercel.app`;
  const owners = ownership[host] || [];
  const out = { name, host, owners: owners.map(o => o.file), actions: [] };

  if (owners.length === 0) {
    out.actions.push('NO SA owns this satellite — manual verification required');
    report.satellites.push(out);
    console.log(`${name}: NO OWNER`);
    continue;
  }

  // Try ALL owners until one can submit the sitemap (or already submitted).
  let submitted = false;
  let alreadyThere = false;
  const tried = [];
  for (const owner of owners) {
    const sa = SAS.find(s => s.file === owner.file);
    let token;
    try { token = await getToken(sa.cred, 'https://www.googleapis.com/auth/webmasters'); } catch { continue; }
    const smList = await listSitemaps(token, owner.site);
    const sm = (smList.sitemap || []).map(s => s.path);
    if (sm.some(s => s.includes('/sitemap.xml'))) {
      alreadyThere = true;
      out.actions.push(`Sitemap already submitted (visible to ${owner.file} on ${owner.site})`);
      console.log(`${name}: sitemap already submitted (via ${owner.file})`);
      break;
    }
    const sitemapUrl = `https://${host}/sitemap.xml`;
    const r = await submitSitemap(token, owner.site, sitemapUrl);
    tried.push(`${owner.file}:${owner.site}→${r.status}`);
    if (r.ok) {
      submitted = true;
      out.actions.push(`Submitted ${sitemapUrl} via ${owner.file} (site ${owner.site})`);
      console.log(`${name}: ✓ submitted via ${owner.file} (${owner.site})`);
      break;
    }
  }
  if (!submitted && !alreadyThere) {
    out.actions.push(`FAILED across ${owners.length} owners: ${tried.join(' | ')}`);
    console.log(`${name}: ✗ all owners failed: ${tried.join(' | ')}`);
  }
  report.satellites.push(out);
}

writeFileSync(join(__dirname, 'satellite-fix-sitemaps-report-2026-06-14.json'), JSON.stringify(report, null, 2));
console.log('\nReport → scripts/satellite-fix-sitemaps-report-2026-06-14.json');
