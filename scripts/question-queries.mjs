#!/usr/bin/env node
/**
 * Question-form query mining — 2026-08-20.
 * ─────────────────────────────────────────────────────────────────────────────
 * The owner asked for "more frequently asked questions as blogs". The failure
 * mode there is obvious and common: invent the questions, write the posts, rank
 * for nothing. So this pulls the questions people ACTUALLY typed at this site
 * over 90 days and ranks them by unserved impressions.
 *
 * A query qualifies when it reads as a question — either an interrogative stem
 * (how/what/why/which/when/who/where/can/do/does/is/are/should) or a verbatim
 * "X vs Y" comparison — and it is NOT already answered by a page whose slug
 * carries the same intent. That last filter is what stops this producing a list
 * of posts already written.
 *
 * US SPLIT: GSC suppresses ~87% of clicks when a country filter is combined
 * with page or query dimensions, so per-country query lists are unreliable at
 * row level. Country is pulled as a SEPARATE filter-only aggregate and used to
 * label the market share, never to slice individual query rows.
 *
 *   node scripts/question-queries.mjs            # top unserved questions
 *   node scripts/question-queries.mjs --days 90
 */
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, dirname, relative } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE = 'https://atlantisndt.com';
const DIST = join(__dirname, '..', 'dist');
const argv = process.argv.slice(2);
const days = argv.includes('--days') ? parseInt(argv[argv.indexOf('--days') + 1], 10) : 90;

const STEMS = /^(how|what|why|which|when|who|where|can|could|do|does|did|is|are|should|will|must|need)\b/i;
const VS = /\bvs\b|\bversus\b|\bdifference between\b|\bbetter than\b/i;

async function token(creds, scope) {
  const { createSign } = await import('crypto');
  const now = Math.floor(Date.now() / 1000);
  const enc = (o) => Buffer.from(JSON.stringify(o)).toString('base64url');
  const unsigned = `${enc({ alg: 'RS256', typ: 'JWT' })}.${enc({
    iss: creds.client_email, scope, aud: 'https://oauth2.googleapis.com/token', exp: now + 3600, iat: now,
  })}`;
  const sign = createSign('RSA-SHA256');
  sign.update(unsigned);
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${unsigned}.${sign.sign(creds.private_key, 'base64url')}`,
  });
  const j = await res.json();
  if (!j.access_token) throw new Error(`auth failed: ${JSON.stringify(j).slice(0, 200)}`);
  return j.access_token;
}

async function query(at, body) {
  const rows = [];
  for (let start = 0; ; start += 25000) {
    const res = await fetch(
      `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`,
      { method: 'POST', headers: { Authorization: `Bearer ${at}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...body, rowLimit: 25000, startRow: start }) },
    );
    if (!res.ok) throw new Error(`GSC ${res.status}: ${(await res.text()).slice(0, 200)}`);
    const j = await res.json();
    const batch = j.rows || [];
    rows.push(...batch);
    if (batch.length < 25000) break;
  }
  return rows;
}

/** Slugs we have already built, tokenised, so we can tell served from unserved. */
function builtSlugTokens() {
  const set = new Set();
  const walk = (d) => {
    for (const n of readdirSync(d)) {
      const q = join(d, n);
      if (statSync(q).isDirectory()) {
        const rel = relative(DIST, q).split('\\').join('/');
        set.add(rel.split('/').pop());
        walk(q);
      }
    }
  };
  walk(DIST);
  return set;
}

/** Does a built slug already cover this query's content words? */
function served(q, slugs) {
  const stop = new Set(['how', 'what', 'why', 'which', 'when', 'who', 'where', 'can', 'do', 'does', 'is', 'are', 'should', 'the', 'a', 'an', 'to', 'of', 'in', 'for', 'and', 'or', 'you', 'i', 'my', 'get', 'be', 'it', 'with', 'on']);
  const terms = q.toLowerCase().replace(/[^a-z0-9\s-]/g, ' ').split(/\s+/).filter((w) => w && !stop.has(w));
  if (terms.length < 2) return true;
  for (const slug of slugs) {
    const hit = terms.filter((t) => slug.includes(t)).length;
    if (hit >= Math.max(2, Math.ceil(terms.length * 0.7))) return true;
  }
  return false;
}

async function main() {
  const end = new Date(Date.now() - 2 * 864e5).toISOString().slice(0, 10);
  const start = new Date(Date.now() - (days + 2) * 864e5).toISOString().slice(0, 10);
  const at = await token(JSON.parse(readFileSync(join(__dirname, 'gsc-service-account.json'), 'utf-8')),
    'https://www.googleapis.com/auth/webmasters.readonly');

  console.log(`\nQuery pull: ${start} → ${end}`);
  const all = await query(at, { startDate: start, endDate: end, dimensions: ['query'] });
  console.log(`  ${all.length} distinct queries`);

  // Country as a filter-only aggregate — never combined with the query dimension.
  // BOTH sides must use the SAME dimension or the ratio is meaningless: GSC drops
  // anonymised queries from query-dimension totals but keeps them in date-dimension
  // totals, so dividing a date-dim US figure by a query-dim total gave 140.9% on the
  // first run. Same dimension on both sides, always.
  const [usAgg, allAgg] = await Promise.all([
    query(at, { startDate: start, endDate: end, dimensions: ['date'],
      dimensionFilterGroups: [{ filters: [{ dimension: 'country', operator: 'equals', expression: 'usa' }] }] }),
    query(at, { startDate: start, endDate: end, dimensions: ['date'] }),
  ]);
  const usImpr = usAgg.reduce((a, r) => a + r.impressions, 0);
  const totImpr = allAgg.reduce((a, r) => a + r.impressions, 0);
  console.log(`  US share of impressions: ${((usImpr / totImpr) * 100).toFixed(1)}% (${usImpr} of ${totImpr}, date-dim both sides)\n`);

  const slugs = builtSlugTokens();
  const questions = all
    .map((r) => ({ q: r.keys[0], impressions: r.impressions, clicks: r.clicks, position: r.position, ctr: r.ctr }))
    .filter((r) => STEMS.test(r.q) || VS.test(r.q))
    .filter((r) => r.impressions >= 5);

  const unserved = questions.filter((r) => !served(r.q, slugs)).sort((a, b) => b.impressions - a.impressions);
  const servedQ = questions.filter((r) => served(r.q, slugs));

  console.log(`  question-form queries (>=5 impressions): ${questions.length}`);
  console.log(`    already served by a built slug: ${servedQ.length}`);
  console.log(`    UNSERVED: ${unserved.length} — ${unserved.reduce((a, r) => a + r.impressions, 0)} impressions\n`);
  console.log('  top 45 unserved questions:');
  unserved.slice(0, 45).forEach((r, i) =>
    console.log(`    ${String(i + 1).padStart(2)}. ${String(r.impressions).padStart(4)}i  ${r.clicks}c  p${r.position.toFixed(0).padStart(2)}  ${r.q}`));

  writeFileSync(join(__dirname, 'question-queries.json'),
    JSON.stringify({ window: { start, end, days }, usSharePct: +((usImpr / totImpr) * 100).toFixed(1), unserved, served: servedQ.length }, null, 1));
  console.log('\n  → scripts/question-queries.json\n');
}

main().catch((e) => { console.error('FAILED: ' + e.message); process.exit(1); });
