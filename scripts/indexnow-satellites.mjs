#!/usr/bin/env node
/**
 * IndexNow submission for the 35 backlink satellites.
 *
 * scripts/indexnow-ping.mjs hardcodes the atlantisndt.com host, so it cannot be
 * reused here: IndexNow requires one request per host, and the key must be
 * verifiable at that same host.
 *
 * Every satellite ships the same key file in public/, which is correct — the key
 * is only required to be retrievable from the host it is claimed for, and each
 * satellite serves its own copy at https://<host>/<key>.txt.
 *
 * Reads the URL list produced by build-satellite-url-list.mjs and groups it back
 * by host.
 *
 * Usage: node scripts/indexnow-satellites.mjs [--list=scripts/<file>.json]
 */
import { readFileSync, readdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const listArg = process.argv.slice(2).find((a) => a.startsWith('--list='));
const LIST = listArg
  ? join(__dirname, '..', listArg.split('=')[1])
  : join(__dirname, 'indexing-url-list-satellites-2026-08-02.json');

const { urls } = JSON.parse(readFileSync(LIST, 'utf8'));

/** Group by host, since IndexNow accepts one host per submission. */
const byHost = new Map();
for (const { url } of urls) {
  const host = new URL(url).host;
  if (!byHost.has(host)) byHost.set(host, []);
  byHost.get(host).push(url);
}

/** The key filename is the key itself, taken from the satellite's public/ dir. */
const keyFor = (host) => {
  const name = host.replace('.vercel.app', '');
  const dir = join(__dirname, '..', 'backlink-sites', name, 'public');
  if (!existsSync(dir)) return null;
  const f = readdirSync(dir).find((x) => /^[0-9a-f]{32}\.txt$/.test(x));
  return f ? f.replace('.txt', '') : null;
};

let submitted = 0;
let failed = 0;

for (const [host, list] of byHost) {
  const key = keyFor(host);
  if (!key) {
    console.log(`${host.padEnd(46)} SKIP — no IndexNow key file in public/`);
    failed++;
    continue;
  }

  // The key must actually be served, or IndexNow rejects the whole batch.
  let keyOk = false;
  try {
    const probe = await fetch(`https://${host}/${key}.txt`, { signal: AbortSignal.timeout(20000) });
    keyOk = probe.ok;
  } catch { /* treated as not served */ }

  if (!keyOk) {
    console.log(`${host.padEnd(46)} SKIP — key not served at /${key}.txt`);
    failed++;
    continue;
  }

  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host,
        key,
        keyLocation: `https://${host}/${key}.txt`,
        urlList: list,
      }),
      signal: AbortSignal.timeout(30000),
    });
    // 200 and 202 both mean accepted.
    if (res.ok) { console.log(`${host.padEnd(46)} ${String(res.status).padEnd(4)} ${list.length} urls accepted`); submitted += list.length; }
    else { console.log(`${host.padEnd(46)} ${res.status} ${(await res.text()).slice(0, 120)}`); failed++; }
  } catch (err) {
    console.log(`${host.padEnd(46)} ERROR ${String(err && err.message || err)}`);
    failed++;
  }
}

console.log(`\nhosts: ${byHost.size} · URLs accepted: ${submitted} · hosts failed/skipped: ${failed}`);
