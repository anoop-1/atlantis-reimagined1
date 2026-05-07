/**
 * IndexNow Ping — Bing/Yandex/Seznam instant indexing notification.
 *
 * Usage:
 *   node scripts/indexnow-ping.mjs                   # ping every URL in dist/sitemap.xml
 *   node scripts/indexnow-ping.mjs URL1 URL2 ...     # ping specific URLs
 *
 * Or imported by prerender.mjs:
 *   const mod = await import('./indexnow-ping.mjs');
 *   await mod.main(arrayOfUrls);
 *
 * Spec: https://www.indexnow.org/documentation
 *
 * Notes:
 *  - Generates an 8-char hex key on first run, persists at scripts/indexnow-key.json
 *  - Drops the key file at public/<key>.txt so the key endpoint resolves
 *  - Posts JSON to https://api.indexnow.org/indexnow
 *  - Never throws — always warns and returns. Calling code can stay non-blocking.
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { randomBytes } from 'crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const PUBLIC_DIR = join(ROOT, 'public');
const DIST_DIR = join(ROOT, 'dist');
const KEY_FILE = join(__dirname, 'indexnow-key.json');
const HOST = 'atlantisndt.com';
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const BATCH_SIZE = 10000; // IndexNow accepts up to 10k URLs per request

function loadOrCreateKey() {
  if (existsSync(KEY_FILE)) {
    try {
      const data = JSON.parse(readFileSync(KEY_FILE, 'utf-8'));
      if (data && typeof data.key === 'string' && /^[a-f0-9]{8,128}$/.test(data.key)) {
        return data.key;
      }
    } catch (err) {
      console.warn(`[indexnow] could not parse ${KEY_FILE}: ${err.message} — regenerating`);
    }
  }
  const key = randomBytes(4).toString('hex'); // 8-char hex
  writeFileSync(KEY_FILE, JSON.stringify({ key, createdAt: new Date().toISOString() }, null, 2), 'utf-8');
  console.log(`[indexnow] generated new key: ${key}`);
  return key;
}

function ensurePublicKeyFile(key) {
  if (!existsSync(PUBLIC_DIR)) mkdirSync(PUBLIC_DIR, { recursive: true });
  const target = join(PUBLIC_DIR, `${key}.txt`);
  if (!existsSync(target)) {
    writeFileSync(target, key, 'utf-8');
    console.log(`[indexnow] wrote key endpoint: public/${key}.txt`);
  }
  // Mirror to dist/ so it's live on the deployed site immediately
  if (existsSync(DIST_DIR)) {
    const distTarget = join(DIST_DIR, `${key}.txt`);
    if (!existsSync(distTarget)) {
      writeFileSync(distTarget, key, 'utf-8');
    }
  }
}

function loadUrlsFromSitemap() {
  const sitemapPath = join(DIST_DIR, 'sitemap.xml');
  if (!existsSync(sitemapPath)) {
    console.warn(`[indexnow] no sitemap at ${sitemapPath}`);
    return [];
  }
  const xml = readFileSync(sitemapPath, 'utf-8');
  const urls = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  let m;
  while ((m = re.exec(xml)) !== null) {
    urls.push(m[1].trim());
  }
  return urls;
}

async function postBatch(urlList, key, keyLocation) {
  const body = JSON.stringify({
    host: HOST,
    key,
    keyLocation,
    urlList,
  });
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body,
    });
    const text = await res.text().catch(() => '');
    console.log(`[indexnow] POST ${urlList.length} URLs → ${res.status} ${res.statusText}${text ? ' | ' + text.slice(0, 200) : ''}`);
    return { ok: res.ok, status: res.status, body: text };
  } catch (err) {
    console.warn(`[indexnow] POST failed: ${err.message}`);
    return { ok: false, status: 0, body: err.message };
  }
}

export async function main(urls) {
  let urlList = Array.isArray(urls) ? urls.filter(Boolean) : [];

  if (urlList.length === 0) {
    urlList = loadUrlsFromSitemap();
  }

  if (urlList.length === 0) {
    console.warn('[indexnow] no URLs to submit — bailing');
    return { ok: false, submitted: 0 };
  }

  // Normalize: any path-only entries are joined to the host
  urlList = urlList.map(u => {
    if (/^https?:\/\//i.test(u)) return u;
    if (u.startsWith('/')) return `https://${HOST}${u}`;
    return `https://${HOST}/${u}`;
  });

  // Dedupe while preserving order
  urlList = Array.from(new Set(urlList));

  const key = loadOrCreateKey();
  ensurePublicKeyFile(key);
  const keyLocation = `https://${HOST}/${key}.txt`;

  let totalOk = 0;
  let totalFail = 0;
  for (let i = 0; i < urlList.length; i += BATCH_SIZE) {
    const batch = urlList.slice(i, i + BATCH_SIZE);
    const result = await postBatch(batch, key, keyLocation);
    if (result.ok) totalOk += batch.length;
    else totalFail += batch.length;
  }

  console.log(`[indexnow] done — ${totalOk} accepted, ${totalFail} failed across ${urlList.length} URLs`);
  return { ok: totalFail === 0, submitted: urlList.length };
}

// Run as CLI when invoked directly (`node scripts/indexnow-ping.mjs`).
// Skip auto-run when imported from another module (e.g. prerender.mjs).
const isDirectRun = (() => {
  try {
    const entry = (process.argv[1] || '').replace(/\\/g, '/');
    return entry.endsWith('/indexnow-ping.mjs') || entry === 'indexnow-ping.mjs';
  } catch {
    return false;
  }
})();

if (isDirectRun) {
  const cliUrls = process.argv.slice(2);
  main(cliUrls).catch(err => {
    console.warn(`[indexnow] unexpected error: ${err.message}`);
    process.exit(0); // never crash callers
  });
}
