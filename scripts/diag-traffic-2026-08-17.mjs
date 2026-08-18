#!/usr/bin/env node
/**
 * Full traffic diagnostic — GSC + GA4, period-over-period.
 * Answers: what dropped, where, when, and is it impressions (index/serving)
 * or CTR/position (ranking) driven.
 *
 *   node scripts/diag-traffic-2026-08-17.mjs
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createSign } from 'crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CREDS = JSON.parse(readFileSync(join(__dirname, 'gsc-service-account.json'), 'utf-8'));
const SITE = 'https://atlantisndt.com';
const GA4_PROPERTY = '517088706';
const OUT = join(__dirname, 'diag-traffic-2026-08-17.json');

// ── auth ─────────────────────────────────────────────────────────────────────
async function token(scope) {
  const now = Math.floor(Date.now() / 1000);
  const enc = (o) => Buffer.from(JSON.stringify(o)).toString('base64url');
  const unsigned = `${enc({ alg: 'RS256', typ: 'JWT' })}.${enc({
    iss: CREDS.client_email, scope, aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600, iat: now,
  })}`;
  const s = createSign('RSA-SHA256'); s.update(unsigned);
  const jwt = `${unsigned}.${s.sign(CREDS.private_key, 'base64url')}`;
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });
  if (!res.ok) throw new Error(`token: ${res.status} ${await res.text()}`);
  return (await res.json()).access_token;
}

// ── GSC ──────────────────────────────────────────────────────────────────────
async function gsc(tk, body) {
  const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`;
  for (let attempt = 0; attempt < 4; attempt++) {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${tk}` },
      body: JSON.stringify({ type: 'web', ...body }),
    });
    if (res.ok) return (await res.json()).rows || [];
    const txt = await res.text();
    if (res.status === 429 || res.status >= 500) { await new Promise(r => setTimeout(r, 2000 * (attempt + 1))); continue; }
    throw new Error(`gsc ${res.status}: ${txt.slice(0, 300)}`);
  }
  throw new Error('gsc: retries exhausted');
}

const usaFilter = [{ filters: [{ dimension: 'country', operator: 'equals', expression: 'usa' }] }];

// ── date helpers ─────────────────────────────────────────────────────────────
const d = (s) => new Date(s + 'T00:00:00Z');
const iso = (dt) => dt.toISOString().split('T')[0];
const shift = (s, n) => { const x = d(s); x.setUTCDate(x.getUTCDate() + n); return iso(x); };

const END = iso(new Date(Date.now() - 3 * 864e5));       // GSC 3-day lag
const R_START = shift(END, -27);                          // recent 28d
const P_END = shift(R_START, -1);
const P_START = shift(P_END, -27);                        // prior 28d
const Y_END = shift(END, -364);                           // same 28d, 1 yr ago
const Y_START = shift(R_START, -364);
const LONG_START = shift(END, -364);                      // 365d daily trend

// ── analysis helpers ─────────────────────────────────────────────────────────
const path = (u) => u.replace(SITE, '') || '/';
function section(p) {
  if (/^\/(ndt-)?training|training|course|level-(i{1,3}|1|2|3)\b|-certification|asnt-|api-\d/.test(p)) return 'Training/Cert';
  if (p.includes('ndt-erp') || p.includes('/erp')) return 'ERP';
  if (p.includes('digital-twin')) return 'Digital Twins';
  if (p.includes('consult')) return 'Consulting';
  if (p.includes('/blog')) return 'Blog';
  if (p.includes('reporting')) return 'Reporting Software';
  if (/(ultrasonic|radiograph|magnetic-particle|penetrant|eddy-current|visual-testing|phased-array|tofd|guided-wave)/.test(p)) return 'NDT Methods';
  return 'Other';
}
const sum = (rows, k) => rows.reduce((s, r) => s + (r[k] || 0), 0);

function delta(before, after) {
  const bc = sum(before, 'clicks'), ac = sum(after, 'clicks');
  const bi = sum(before, 'impressions'), ai = sum(after, 'impressions');
  return {
    clicks: { before: bc, after: ac, chg: ac - bc, pct: bc ? +(((ac - bc) / bc) * 100).toFixed(1) : null },
    impressions: { before: bi, after: ai, chg: ai - bi, pct: bi ? +(((ai - bi) / bi) * 100).toFixed(1) : null },
    ctr: { before: bi ? +(bc / bi * 100).toFixed(2) : 0, after: ai ? +(ac / ai * 100).toFixed(2) : 0 },
  };
}

function joinByKey(prior, recent) {
  const m = new Map();
  for (const r of prior) m.set(r.keys[0], { key: r.keys[0], b: r, a: null });
  for (const r of recent) {
    const e = m.get(r.keys[0]);
    if (e) e.a = r; else m.set(r.keys[0], { key: r.keys[0], b: null, a: r });
  }
  return [...m.values()].map(e => ({
    key: e.key,
    bc: e.b?.clicks || 0, ac: e.a?.clicks || 0,
    bi: e.b?.impressions || 0, ai: e.a?.impressions || 0,
    bp: e.b?.position ?? null, ap: e.a?.position ?? null,
    dClicks: (e.a?.clicks || 0) - (e.b?.clicks || 0),
    dImpr: (e.a?.impressions || 0) - (e.b?.impressions || 0),
  }));
}

function bySection(rows) {
  const out = {};
  for (const r of rows) {
    const s = section(path(r.keys[0]));
    out[s] ??= { clicks: 0, impressions: 0, pages: 0 };
    out[s].clicks += r.clicks; out[s].impressions += r.impressions; out[s].pages++;
  }
  return out;
}

// ── GA4 ──────────────────────────────────────────────────────────────────────
async function ga4(tk, body) {
  const res = await fetch(`https://analyticsdata.googleapis.com/v1beta/properties/${GA4_PROPERTY}:runReport`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${tk}` },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`ga4 ${res.status}: ${(await res.text()).slice(0, 300)}`);
  return (await res.json()).rows || [];
}

// ── main ─────────────────────────────────────────────────────────────────────
const log = (...a) => console.log(...a);

async function main() {
  log(`GSC window  recent ${R_START}..${END}   prior ${P_START}..${P_END}   yr-ago ${Y_START}..${Y_END}`);
  const tk = await token('https://www.googleapis.com/auth/webmasters.readonly');

  const P = (dims, start, end, extra = {}) =>
    gsc(tk, { dimensions: dims, startDate: start, endDate: end, rowLimit: 25000, ...extra });

  const [
    dailyAll, dailyUSA,
    pagesR, pagesP, pagesY,
    pagesUSR, pagesUSP,
    queriesR, queriesP,
    queriesUSR, queriesUSP,
    countryR, countryP,
    deviceR,ceviceP,
  ] = await Promise.all([
    P(['date'], LONG_START, END),
    P(['date'], LONG_START, END, { dimensionFilterGroups: usaFilter }),
    P(['page'], R_START, END),
    P(['page'], P_START, P_END),
    P(['page'], Y_START, Y_END),
    P(['page'], R_START, END, { dimensionFilterGroups: usaFilter }),
    P(['page'], P_START, P_END, { dimensionFilterGroups: usaFilter }),
    P(['query'], R_START, END),
    P(['query'], P_START, P_END),
    P(['query'], R_START, END, { dimensionFilterGroups: usaFilter }),
    P(['query'], P_START, P_END, { dimensionFilterGroups: usaFilter }),
    P(['country'], R_START, END),
    P(['country'], P_START, P_END),
    P(['device'], R_START, END),
    P(['device'], P_START, P_END),
  ]);

  const report = {
    generated: new Date().toISOString(),
    windows: { recent: [R_START, END], prior: [P_START, P_END], yearAgo: [Y_START, Y_END] },
    sitewide: delta(pagesP, pagesR),
    sitewideVsYearAgo: delta(pagesY, pagesR),
    usa: delta(pagesUSP, pagesUSR),
    daily: { all: dailyAll.map(r => ({ date: r.keys[0], c: r.clicks, i: r.impressions, p: +r.position.toFixed(1) })),
             usa: dailyUSA.map(r => ({ date: r.keys[0], c: r.clicks, i: r.impressions, p: +r.position.toFixed(1) })) },
    sections: { recent: bySection(pagesR), prior: bySection(pagesP), yearAgo: bySection(pagesY) },
    sectionsUSA: { recent: bySection(pagesUSR), prior: bySection(pagesUSP) },
    pageDeltas: joinByKey(pagesP, pagesR).sort((a, b) => a.dClicks - b.dClicks),
    pageDeltasUSA: joinByKey(pagesUSP, pagesUSR).sort((a, b) => a.dClicks - b.dClicks),
    queryDeltas: joinByKey(queriesP, queriesR).sort((a, b) => a.dClicks - b.dClicks),
    queryDeltasUSA: joinByKey(queriesUSP, queriesUSR).sort((a, b) => a.dClicks - b.dClicks),
    countryDeltas: joinByKey(countryP, countryR).sort((a, b) => a.dClicks - b.dClicks),
    deviceDeltas: joinByKey(ceviceP, deviceR),
  };

  // ── GA4 ──
  try {
    const gtk = await token('https://www.googleapis.com/auth/analytics.readonly');
    const range = (s, e) => ({ startDate: s, endDate: e });
    const [chanR, chanP, ga4Pages, ga4Geo, ga4Daily, ga4Land] = await Promise.all([
      ga4(gtk, { dateRanges: [range(R_START, END)], dimensions: [{ name: 'sessionDefaultChannelGroup' }], metrics: [{ name: 'sessions' }, { name: 'activeUsers' }, { name: 'engagementRate' }] }),
      ga4(gtk, { dateRanges: [range(P_START, P_END)], dimensions: [{ name: 'sessionDefaultChannelGroup' }], metrics: [{ name: 'sessions' }, { name: 'activeUsers' }, { name: 'engagementRate' }] }),
      ga4(gtk, { dateRanges: [range(P_START, END)], dimensions: [{ name: 'pagePath' }], metrics: [{ name: 'screenPageViews' }, { name: 'activeUsers' }, { name: 'engagementRate' }], orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }], limit: 200 }),
      ga4(gtk, { dateRanges: [range(P_START, P_END), range(R_START, END)], dimensions: [{ name: 'country' }], metrics: [{ name: 'sessions' }], orderBys: [{ metric: { metricName: 'sessions' }, desc: true }], limit: 25 }),
      ga4(gtk, { dateRanges: [range(LONG_START, END)], dimensions: [{ name: 'date' }], metrics: [{ name: 'sessions' }, { name: 'activeUsers' }], orderBys: [{ dimension: { dimensionName: 'date' } }], limit: 400 }),
      ga4(gtk, { dateRanges: [range(R_START, END)], dimensions: [{ name: 'landingPage' }, { name: 'sessionDefaultChannelGroup' }], metrics: [{ name: 'sessions' }, { name: 'engagementRate' }], orderBys: [{ metric: { metricName: 'sessions' }, desc: true }], limit: 150 }),
    ]);
    report.ga4 = {
      channelsRecent: chanR, channelsPrior: chanP, pages: ga4Pages,
      countriesPriorVsRecent: ga4Geo, daily: ga4Daily, landingPages: ga4Land,
    };
  } catch (e) {
    report.ga4Error = e.message;
    log('GA4 pull failed:', e.message);
  }

  writeFileSync(OUT, JSON.stringify(report, null, 2));

  // ── console summary ──
  const pc = (o) => `${o.before} → ${o.after} (${o.pct > 0 ? '+' : ''}${o.pct}%)`;
  log('\n══ SITEWIDE 28d vs prior 28d ══');
  log('  clicks      ', pc(report.sitewide.clicks));
  log('  impressions ', pc(report.sitewide.impressions));
  log('  ctr         ', report.sitewide.ctr.before + '% → ' + report.sitewide.ctr.after + '%');
  log('\n══ SITEWIDE 28d vs SAME 28d LAST YEAR ══');
  log('  clicks      ', pc(report.sitewideVsYearAgo.clicks));
  log('  impressions ', pc(report.sitewideVsYearAgo.impressions));
  log('\n══ USA 28d vs prior 28d ══');
  log('  clicks      ', pc(report.usa.clicks));
  log('  impressions ', pc(report.usa.impressions));
  log('  ctr         ', report.usa.ctr.before + '% → ' + report.usa.ctr.after + '%');

  log('\n══ SECTION (all geo): prior → recent clicks | impressions ══');
  const secs = new Set([...Object.keys(report.sections.prior), ...Object.keys(report.sections.recent)]);
  for (const s of secs) {
    const b = report.sections.prior[s] || { clicks: 0, impressions: 0, pages: 0 };
    const a = report.sections.recent[s] || { clicks: 0, impressions: 0, pages: 0 };
    log(`  ${s.padEnd(20)} ${String(b.clicks).padStart(6)} → ${String(a.clicks).padStart(6)}  |  ${String(b.impressions).padStart(7)} → ${String(a.impressions).padStart(7)}  pages ${b.pages}→${a.pages}`);
  }
  log('\n══ SECTION (USA only) ══');
  const secsU = new Set([...Object.keys(report.sectionsUSA.prior), ...Object.keys(report.sectionsUSA.recent)]);
  for (const s of secsU) {
    const b = report.sectionsUSA.prior[s] || { clicks: 0, impressions: 0, pages: 0 };
    const a = report.sectionsUSA.recent[s] || { clicks: 0, impressions: 0, pages: 0 };
    log(`  ${s.padEnd(20)} ${String(b.clicks).padStart(5)} → ${String(a.clicks).padStart(5)}  |  ${String(b.impressions).padStart(7)} → ${String(a.impressions).padStart(7)}  pages ${b.pages}→${a.pages}`);
  }

  log('\n══ TOP 25 PAGE LOSERS (all geo) ══');
  for (const r of report.pageDeltas.slice(0, 25))
    log(`  ${String(r.dClicks).padStart(5)}c ${String(r.dImpr).padStart(7)}i  pos ${String(r.bp?.toFixed(1) ?? '-').padStart(5)}→${String(r.ap?.toFixed(1) ?? '-').padStart(5)}  ${path(r.key).slice(0, 70)}`);

  log('\n══ TOP 25 QUERY LOSERS (all geo) ══');
  for (const r of report.queryDeltas.slice(0, 25))
    log(`  ${String(r.dClicks).padStart(5)}c ${String(r.dImpr).padStart(7)}i  pos ${String(r.bp?.toFixed(1) ?? '-').padStart(5)}→${String(r.ap?.toFixed(1) ?? '-').padStart(5)}  ${r.key.slice(0, 60)}`);

  log('\n══ TOP 20 QUERY LOSERS (USA) ══');
  for (const r of report.queryDeltasUSA.slice(0, 20))
    log(`  ${String(r.dClicks).padStart(5)}c ${String(r.dImpr).padStart(7)}i  pos ${String(r.bp?.toFixed(1) ?? '-').padStart(5)}→${String(r.ap?.toFixed(1) ?? '-').padStart(5)}  ${r.key.slice(0, 60)}`);

  log('\n══ COUNTRY DELTAS (top 15 losers) ══');
  for (const r of report.countryDeltas.slice(0, 15))
    log(`  ${r.key.padEnd(6)} clicks ${String(r.bc).padStart(5)}→${String(r.ac).padStart(5)}   impr ${String(r.bi).padStart(7)}→${String(r.ai).padStart(7)}`);

  log(`\nWrote ${OUT}`);
}

main().catch(e => { console.error('FATAL', e); process.exit(1); });
