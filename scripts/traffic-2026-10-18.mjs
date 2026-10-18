/**
 * Traffic workstream, release 2026-10-18 — FAQPage from visible Q&A on the pages it fixed.
 * ─────────────────────────────────────────────────────────────────────────────
 * The competitor teardown (/home/claude/wt/shared/rea/traffic.md) found standards and
 * method pages whose FAQPage carried questions the page never showed, and pages whose
 * visible questions had no FAQPage (the demand-gated extractor in seo-postpass.mjs skips
 * pages without a snapshot row). For the paths below the FAQPage is rebuilt here, last,
 * from the <h2>/<h3>Question?</h2><p>Answer</p> pairs actually in the body (§20.8, §58.3);
 * any older FAQPage node on the route is dropped. A path with fewer than two visible
 * questions gets no FAQPage. The questions themselves live in each page's own data
 * (blogs.json, depth-pages.json, glossary-depth.mjs, ...), so both layers show them.
 *
 * Hook: applyTrafficRoute(route) in prerender.mjs, after applyRankWave14Route and just
 * before writeRoute. assertTrafficClean(BUILT_PATHS) fails the build on an unbuilt path.
 */

export const TRAFFIC_FAQ_PATHS = new Set([
  '/blog/mt-vs-pt-comparison',
  '/blog/shear-wave-ut-for-thick-section-inspection',
  '/blog/compression-wave-vs-shear-wave-technical-differences',
  '/blog/reference-standards-and-block-calibration-in-ut',
  '/glossary/astm-e165',
  '/3d-scanning-tank',
]);

export const trafficStats = { faqPages: 0, questions: 0 };

const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', '#39': "'", apos: "'", nbsp: ' ', mdash: '—', ndash: '–', rsquo: '’', lsquo: '‘', rdquo: '”', ldquo: '“', hellip: '…', deg: '°', mu: 'µ', times: '×' };
const decode = (s) => String(s ?? '').replace(/&(#x[0-9a-f]+|#\d+|[a-z0-9]+);/gi, (m, e) => {
  if (e[0] === '#') { const n = e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10); return Number.isFinite(n) ? String.fromCodePoint(n) : m; }
  return ENT[e] ?? ENT[e.toLowerCase()] ?? m;
});
const text = (html) => decode(String(html || '').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();

/** Visible <h2>/<h3> headings that are questions, each followed by one to three <p> answers, in page order. */
export function visibleQuestions(body) {
  const out = [];
  const seen = new Set();
  const re = /<(h[23])[^>]*>((?:(?!<\/?h[1-6][\s>])[\s\S])*?)<\/\1>\s*((?:<p[^>]*>(?:(?!<\/p>)[\s\S])*<\/p>\s*){1,3})/g;
  for (const m of String(body || '').matchAll(re)) {
    const q = text(m[2]).replace(/^Q\d+:\s*/, '');
    const a = text(m[3]).replace(/^A:\s*/, '');
    if (!/\?$/.test(q) || a.length < 40 || seen.has(q)) continue;
    seen.add(q);
    out.push({ q, a });
  }
  return out;
}

function isFaq(n) { return n && (n['@type'] === 'FAQPage' || (Array.isArray(n['@type']) && n['@type'].includes('FAQPage'))); }

function withoutFaq(sd) {
  if (Array.isArray(sd)) return sd.filter((n) => !isFaq(n)).map((n) => (n && Array.isArray(n['@graph']) ? { ...n, '@graph': n['@graph'].filter((x) => !isFaq(x)) } : n));
  if (sd && Array.isArray(sd['@graph'])) return { ...sd, '@graph': sd['@graph'].filter((n) => !isFaq(n)) };
  return isFaq(sd) ? undefined : sd;
}

function withFaq(sd, node) {
  if (!sd) return { '@context': 'https://schema.org', '@graph': [node] };
  if (Array.isArray(sd)) return [...sd.filter((n) => !isFaq(n)).map((n) => (n && n['@graph'] ? { ...n, '@graph': n['@graph'].filter((x) => !isFaq(x)) } : n)), { '@context': 'https://schema.org', ...node }];
  if (Array.isArray(sd['@graph'])) return { ...sd, '@graph': [...sd['@graph'].filter((n) => !isFaq(n)), node] };
  if (isFaq(sd)) return { '@context': 'https://schema.org', ...node };
  const { '@context': _c, ...rest } = sd;
  return { '@context': 'https://schema.org', '@graph': [rest, node] };
}

export function applyTrafficRoute(route) {
  if (!route || !TRAFFIC_FAQ_PATHS.has(route.path) || typeof route.bodyContent !== 'string') return route;
  const qs = visibleQuestions(route.bodyContent);
  if (qs.length < 2) {
    // Never keep an older FAQPage whose questions are not on the page.
    return route.structuredData ? { ...route, structuredData: withoutFaq(route.structuredData) } : route;
  }
  const node = { '@type': 'FAQPage', mainEntity: qs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  trafficStats.faqPages++;
  trafficStats.questions += qs.length;
  return { ...route, structuredData: withFaq(route.structuredData, node) };
}

/** @param {Set<string>} [knownPaths] built paths */
export function assertTrafficClean(knownPaths) {
  const bad = [];
  if (knownPaths) for (const p of TRAFFIC_FAQ_PATHS) if (!knownPaths.has(p)) bad.push(`${p}: not a built page`);
  if (bad.length) throw new Error(`traffic-2026-10-18:\n  ${bad.join('\n  ')}`);
  return TRAFFIC_FAQ_PATHS.size;
}
