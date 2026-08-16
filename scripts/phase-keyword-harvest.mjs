/**
 * Per-segment keyword harvest — 2026-08-16 (Phase 0 of the 4-phase expansion).
 * ─────────────────────────────────────────────────────────────────────────────
 * Every expansion phase STARTS with this pull (asset selection) and ENDS with
 * it (gate measurement). One tool, so the numbers judged at the gate are
 * produced the same way as the numbers that justified the work.
 *
 *   node scripts/phase-keyword-harvest.mjs --segment training [--days 90]
 *   node scripts/phase-keyword-harvest.mjs --refresh-demand
 *
 * --segment  training|erp|dt|consulting → writes a committed summary at
 *            scripts/phase-harvest-{segment}-{YYYY-MM-DD}.json with persona
 *            buckets, per-query page competition, and gate metrics.
 * --refresh-demand → regenerates scripts/seo-demand-90d.json (the snapshot that
 *            gates sitemap priority + FAQ thresholds in prerender.mjs) and the
 *            zero-impression prune.
 *
 * ⚠️ RULES BAKED IN (each one is a past defect):
 *  - Trailing-slash variants are SUMMED, never Map-collided (§20.11/§21.8 —
 *    /page/ overwrote /page three separate times before this was systematised).
 *  - USA-filtered pulls are SHAPE only: the country filter returns ~26% of the
 *    true US total through anonymisation (§31.2). Totals come from the country
 *    dimension; never present a filtered sum as "US traffic".
 *  - Rows are sorted client-side; the GSC API returns alphabetical rows when
 *    clicks are zero, which reads as a demand ranking and is not one (§23.2).
 */
import { readFileSync, writeFileSync } from 'fs';
import { createSign } from 'crypto';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE = 'sc-domain:atlantisndt.com';

const args = process.argv.slice(2);
const flag = (name, dflt) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? (args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : true) : dflt;
};
const SEGMENT = flag('segment', null);
const DAYS = Number(flag('days', 90));
const REFRESH = args.includes('--refresh-demand');

/* ── auth ─────────────────────────────────────────────────────────────────── */
async function token() {
  const SA = JSON.parse(readFileSync(join(__dirname, 'gsc-service-account.json'), 'utf8'));
  const now = Math.floor(Date.now() / 1000);
  const h = Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })).toString('base64url');
  const c = Buffer.from(JSON.stringify({
    iss: SA.client_email, scope: 'https://www.googleapis.com/auth/webmasters.readonly',
    aud: 'https://oauth2.googleapis.com/token', exp: now + 3600, iat: now,
  })).toString('base64url');
  const s = createSign('RSA-SHA256'); s.update(`${h}.${c}`);
  const r = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${h}.${c}.${s.sign(SA.private_key, 'base64url')}`,
  });
  const j = await r.json();
  if (!j.access_token) throw new Error(`auth failed: ${JSON.stringify(j).slice(0, 200)}`);
  return j.access_token;
}
async function gsc(t, body) {
  const r = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`, {
    method: 'POST', headers: { Authorization: `Bearer ${t}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const j = await r.json();
  if (j.error) throw new Error(JSON.stringify(j.error).slice(0, 300));
  return j.rows || [];
}
const dstr = (d) => d.toISOString().slice(0, 10);
function window(days) {
  // GSC final data lags ~2 days — end the window there, not today.
  const end = new Date(Date.now() - 2 * 864e5);
  const start = new Date(end.getTime() - days * 864e5);
  return { startDate: dstr(start), endDate: dstr(end) };
}
/** §20.11: normalise AND SUM — the caller merges rows through this key. */
const pathKey = (u) => {
  let p = String(u).replace(/^https?:\/\/[^/]+/, '');
  p = p.replace(/\/$/, '') || '/';
  return p;
};

/* ── segment definitions ─────────────────────────────────────────────────── */
const SEGMENTS = {
  training: {
    page: (p) => /training|certification|asnt|snt-tc|course|exam|level-[i1-3]|school|salary/i.test(p),
    buckets: {
      school:        /school/i,
      near_me:       /near me|nearby/i,
      salary:        /salary|pay\b|earn|make|income|wage/i,
      career_switch: /become|becoming|career|welder|no (college|degree|experience)|get (into|started)|veteran|transition/i,
      online:        /online|virtual|remote(?!.?visual)/i,
      cost:          /cost|fee|price|how much/i,
      method:        /(ultrasonic|radiograph|magnetic|penetrant|visual|eddy|paut|phased array|tofd|\but\b|\brt\b|\bmt\b|\bpt\b).{0,24}(training|course|cert)/i,
      level:         /level (i{1,3}|[1-3])\b/i,
      employer:      /sponsor|our (inspector|technician|crew)|we |written practice|in lieu|mandate|hire|nationwide|multi.?site/i,
      exam:          /exam|pass rate|study|prep|retake|fail/i,
    },
  },
  erp: {
    page: (p) => /^\/(erp|ndt-erp|erp-modules|erp-industries)|software|ndt-connect|resources\//i.test(p),
    buckets: {
      head_term:  /^(ndt |inspection |asset integrity )?(software|erp|management software|reporting software)/i,
      workflow:   /report|certif.*track|calibrat|schedul|work order|invoice|job cost/i,
      competitor: /alternative|vs\b|versus|compare|quickbooks|netsuite|floodlight|sap\b/i,
      buyer:      /best|top|how to (choose|evaluate|select)|review/i,
    },
  },
  dt: {
    page: (p) => /^\/(digital-twin|compare\/atlantis-dt|compare\/digital-twin)/i.test(p),
    buckets: {
      vendor:   /predix|aveva|cognite|bentley|itwin|thingworx|mindsphere|maximo|azure digital|osisoft|apm\b/i,
      alt:      /alternative|vs\b|versus|compare/i,
      use_case: /corrosion|integrity|monitor|predictive|roi|implementation|oil.{0,4}gas|refinery/i,
    },
  },
  consulting: {
    page: (p) => /consulting|level-iii|rbi|fitness-for-service|written-practice|industry\//i.test(p),
    buckets: {
      level_iii:   /level (iii|3)|written practice/i,
      service:     /rbi|risk.based|fitness for service|api 579|procedure (development|writing)|audit/i,
      industry:    /maritime|marine|aerospace|aviation|nuclear|oil.{0,4}gas|pipeline|power|shipyard|refinery/i,
      hire_intent: /consultant|consulting service|outsourc|hire|contract/i,
    },
  },
};

/* ── --refresh-demand ─────────────────────────────────────────────────────── */
async function refreshDemand(t) {
  const w = window(90);
  console.log(`refreshing seo-demand-90d.json (${w.startDate} → ${w.endDate})…`);
  const rows = await gsc(t, { ...w, dimensions: ['page'], rowLimit: 25000 });
  const pages = {};
  for (const r of rows) {
    const k = pathKey(r.keys[0]);
    const m = pages[k] || { i: 0, c: 0, pw: 0 };
    m.i += r.impressions; m.c += r.clicks; m.pw += r.position * r.impressions;
    pages[k] = m;
  }
  for (const k of Object.keys(pages)) {
    const m = pages[k];
    pages[k] = { i: m.i, c: m.c, p: Number((m.pw / m.i).toFixed(1)) };
  }
  const out = {
    generated: dstr(new Date()),
    window: w,
    note: 'Trailing-slash variants SUMMED per §20.11/§21.8. Regenerate with phase-keyword-harvest.mjs --refresh-demand.',
    pages,
  };
  writeFileSync(join(__dirname, 'seo-demand-90d.json'), JSON.stringify(out, null, 1));
  console.log(`  wrote ${Object.keys(pages).length} pages`);
}

/* ── --segment harvest ───────────────────────────────────────────────────── */
async function harvest(t, segment) {
  const def = SEGMENTS[segment];
  if (!def) throw new Error(`unknown segment "${segment}" — use ${Object.keys(SEGMENTS).join('|')}`);
  const w = window(DAYS);
  console.log(`harvesting ${segment} (${w.startDate} → ${w.endDate})…`);

  // 1. USA shape: query × page (anonymisation-limited — SHAPE ONLY, §31.2)
  const us = await gsc(t, {
    ...w, dimensions: ['query', 'page'], rowLimit: 25000,
    dimensionFilterGroups: [{ filters: [{ dimension: 'country', operator: 'equals', expression: 'usa' }] }],
  });
  // 2. Global query totals for the same pages (context)
  const globalQ = await gsc(t, { ...w, dimensions: ['query', 'page'], rowLimit: 25000 });

  const shape = (rows) => {
    const byQuery = new Map();
    for (const r of rows) {
      const page = pathKey(r.keys[1]);
      if (!def.page(page)) continue;
      const q = r.keys[0];
      const m = byQuery.get(q) || { i: 0, c: 0, pw: 0, pages: new Map() };
      m.i += r.impressions; m.c += r.clicks; m.pw += r.position * r.impressions;
      const pm = m.pages.get(page) || { i: 0, c: 0, pw: 0 };
      pm.i += r.impressions; pm.c += r.clicks; pm.pw += r.position * r.impressions;
      m.pages.set(page, pm);
      byQuery.set(q, m);
    }
    return byQuery;
  };
  const usQ = shape(us);
  const glQ = shape(globalQ);

  const bucketise = (byQuery) => {
    const buckets = {};
    const seen = new Set();
    for (const [name, re] of Object.entries(def.buckets)) {
      const rows = [];
      for (const [q, m] of byQuery) {
        if (seen.has(q) || !re.test(q) || /^site:/.test(q)) continue;
        seen.add(q);
        rows.push({
          q, i: m.i, c: m.c, pos: Number((m.pw / m.i).toFixed(1)),
          competing: m.pages.size,
          top: [...m.pages.entries()].sort((a, b) => b[1].i - a[1].i).slice(0, 3)
            .map(([p, pm]) => ({ p, i: pm.i, pos: Number((pm.pw / pm.i).toFixed(1)) })),
        });
      }
      rows.sort((a, b) => b.i - a.i); // §23.2: never trust API ordering
      buckets[name] = {
        queries: rows.length,
        impressions: rows.reduce((a, b) => a + b.i, 0),
        clicks: rows.reduce((a, b) => a + b.c, 0),
        wtdPos: rows.length ? Number((rows.reduce((a, b) => a + b.pos * b.i, 0) / Math.max(1, rows.reduce((a, b) => a + b.i, 0))).toFixed(1)) : null,
        top: rows.slice(0, 15),
      };
    }
    return buckets;
  };

  const out = {
    segment, generated: dstr(new Date()), window: w, days: DAYS,
    caveat: 'USA figures are anonymisation-limited SHAPE (~26% of true totals, §31.2). Slash variants summed (§20.11).',
    usa: {
      totalImpressions: [...usQ.values()].reduce((a, b) => a + b.i, 0),
      totalClicks: [...usQ.values()].reduce((a, b) => a + b.c, 0),
      distinctQueries: usQ.size,
      buckets: bucketise(usQ),
    },
    global: {
      totalImpressions: [...glQ.values()].reduce((a, b) => a + b.i, 0),
      totalClicks: [...glQ.values()].reduce((a, b) => a + b.c, 0),
      distinctQueries: glQ.size,
      buckets: bucketise(glQ),
    },
    // Cannibalisation report: US queries split across 4+ pages (the §40.3 shape)
    cannibalised: [...usQ.entries()]
      .filter(([q, m]) => m.pages.size >= 4 && m.i >= 20 && !/^site:/.test(q))
      .sort((a, b) => b[1].i - a[1].i).slice(0, 20)
      .map(([q, m]) => ({
        q, i: m.i, pages: m.pages.size,
        detail: [...m.pages.entries()].sort((a, b) => b[1].i - a[1].i).slice(0, 5)
          .map(([p, pm]) => `${p} ${pm.i}i p${(pm.pw / pm.i).toFixed(0)}`),
      })),
  };
  const file = join(__dirname, `phase-harvest-${segment}-${dstr(new Date())}.json`);
  writeFileSync(file, JSON.stringify(out, null, 1));
  console.log(`  wrote ${file}`);
  console.log(`  USA: ${out.usa.distinctQueries} queries · ${out.usa.totalImpressions}i · ${out.usa.totalClicks}c`);
  for (const [b, v] of Object.entries(out.usa.buckets)) {
    if (!v.impressions) continue;
    console.log(`    ${b.padEnd(14)} ${String(v.queries).padStart(4)}q ${String(v.impressions).padStart(6)}i ${String(v.clicks).padStart(3)}c  wtd p${v.wtdPos}`);
  }
  console.log(`  cannibalised (4+ pages splitting one query): ${out.cannibalised.length}`);
}

/* ── main ─────────────────────────────────────────────────────────────────── */
const t = await token();
if (REFRESH) await refreshDemand(t);
if (SEGMENT) await harvest(t, SEGMENT);
if (!REFRESH && !SEGMENT) console.log('usage: --segment training|erp|dt|consulting [--days N] | --refresh-demand');
