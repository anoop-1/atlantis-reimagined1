/**
 * ACCP → ASNT 9712 wording pass — 2026-09-29.
 * ─────────────────────────────────────────────────────────────────────────────
 * ASNT replaced the ACCP (ASNT Central Certification Program) with ASNT 9712
 * and its central "ASNT NDT Level II" / "ASNT NDT Level III" credentials.
 * About 1,200 built pages still presented ACCP as a live programme — mostly
 * through a handful of shared template strings ("SNT-TC-1A / CP-189 / ACCP",
 * "ACCP Professional Level III", "ACCP Level 2").
 *
 * This rewrites PRESENT-TENSE mentions at render time, in the crawler layer,
 * and leaves HISTORICAL mentions alone: anything within a short window of
 * "formerly", "former", "legacy", "replaced", "retire", "sunset",
 * "transition", "existing", "expir", a revision citation ("ACCP Rev 9") and
 * similar is kept verbatim. /compliance/* pages are skipped entirely — they
 * were authored after the change and already describe the transition.
 *
 * Only the uppercase token is touched, so URL slugs (/blog/asnt-accp-…) are
 * never rewritten.
 */

const HISTORICAL = /formerly|former|legacy|replac|retire|sunset|transition|existing|expir|until|restricted|certificants|applications|history|historic|previously|renamed|no longer|discontinu|legacy/i;

const RULES = [
  // Most specific first.
  [/\bACCP \(ASNT Central Certification Program(?:me)?\)/g, () => 'ASNT 9712 (which replaced ACCP, the former ASNT Central Certification Program)'],
  [/\b(?:ASNT )?ACCP Professional Level (?:III|3)\b/g, () => 'ASNT NDT Level III'],
  [/\b(?:ASNT )?ACCP Level (?:III|3)\b/g, () => 'ASNT NDT Level III'],
  [/\b(?:ASNT )?ACCP Level (?:II|2)\b/g, () => 'ASNT NDT Level II'],
  [/\bASNT ACCP\b/g, (first) => (first ? 'ASNT 9712 (formerly ACCP)' : 'ASNT 9712')],
  [/\bACCP\b/g, (first) => (first ? 'ASNT 9712 (formerly ACCP)' : 'ASNT 9712')],
];

/** Rewrite present-tense ACCP mentions in `text`. Returns { text, changed }. */
export function modernizeAccpText(text) {
  if (!text || text.indexOf('ACCP') === -1) return { text, changed: 0 };
  let changed = 0;
  let firstUsed = /ASNT 9712 \(formerly ACCP\)/.test(text);
  let out = text;
  for (const [re, make] of RULES) {
    out = out.replace(re, (m, ...args) => {
      const offset = args[args.length - 2];
      const src = args[args.length - 1];
      const before = src.slice(Math.max(0, offset - 45), offset);
      const after = src.slice(offset + m.length, offset + m.length + 30);
      // Keep historical context, revision citations and anything already rewritten.
      if (HISTORICAL.test(before) || HISTORICAL.test(after)) return m;
      if (re !== RULES[0][0] && /^\s*Rev\b/.test(after)) return m;
      if (/ASNT 9712 \($/.test(before) || /which replaced $/.test(before)) return m;
      const rep = make(!firstUsed);
      if (/formerly ACCP/.test(rep)) firstUsed = true;
      changed++;
      return rep;
    });
  }
  return { text: out, changed };
}

/** Page-level entry point used by prerender's writeRoute. */
export function modernizeAccpHtml(html, routePath) {
  if (!html || html.indexOf('ACCP') === -1) return { html, changed: 0 };
  if (/^\/compliance(\/|$)/.test(routePath || '')) return { html, changed: 0 };
  const { text, changed } = modernizeAccpText(html);
  return { html: text, changed };
}

/** Classifier shared with the dist verifier: does `html` present ACCP as current? */
export function countPresentTenseAccp(html) {
  if (!html || html.indexOf('ACCP') === -1) return 0;
  let n = 0;
  const re = /\bACCP\b/g;
  let m;
  while ((m = re.exec(html))) {
    const before = html.slice(Math.max(0, m.index - 45), m.index);
    const after = html.slice(m.index + 4, m.index + 34);
    if (HISTORICAL.test(before) || HISTORICAL.test(after) || /^\s*Rev\b/.test(after)) continue;
    n++;
  }
  return n;
}
