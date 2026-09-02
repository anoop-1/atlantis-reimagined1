/**
 * Snippet geometry — site-wide description trimming. 2026-09-02.
 * ─────────────────────────────────────────────────────────────────────────────
 * MEASURED: 5,351 of 6,531 indexable pages (82%) carry a meta description longer
 * than Google's display limit of roughly 155 characters, and those pages hold
 * 198,240 impressions over 90 days. Every one of them is cut mid-sentence, and
 * frequently mid-word, in the SERP.
 *
 *   Glossary     100% of pages over the limit    16,110 impressions
 *   Training      97%                            14,131
 *   3D scanning   99%                            11,955
 *   ERP           89%                             9,145
 *   Blog          65%                            69,277
 *
 * This pass is the scaled companion to CTR wave 7. Wave 7 hand-rewrote the 19
 * highest-value blog snippets so the payoff sits inside the visible window —
 * that is front-loading, and it needs an author. This pass cannot front-load,
 * and does not pretend to: it makes the remaining thousands END CLEANLY instead
 * of being severed by Google mid-word.
 *
 * WHY THAT IS STILL WORTH DOING
 * The trimmed tail was never displayed. Nothing that a searcher could read is
 * being removed; what changes is whether the visible text terminates as a
 * complete thought or as a fragment with an ellipsis. A description that fits is
 * also materially more likely to be used verbatim rather than replaced by a
 * passage Google picks out of the body.
 *
 * WHAT IT DELIBERATELY DOES NOT TOUCH
 * Titles. A title over 60 characters is also cut, but trimming one mechanically
 * risks removing the differentiator — the city, the sector, the standard number
 * — which is exactly the defect fixed earlier today when three ERP city pages
 * were found sharing a title because the city fell off the end. Title length is
 * an authoring decision, handled per family at the generator, not by a blanket
 * pass.
 *
 * Also untouched: any path already carrying a CTR wave override, because those
 * were written to this geometry deliberately and re-trimming them would be a
 * second opinion on a decision already made.
 */

/** Google's practical display limit for a description, in characters. */
export const DESC_LIMIT = 155;

/**
 * Below this, a trim has cut too much to be worth it and the original — even
 * truncated by Google — carries more information. Measured against the corpus:
 * a floor of 110 keeps every trim substantive.
 */
const MIN_USEFUL = 110;

/**
 * Trim to the last clean boundary at or before the limit.
 *
 * Preference order is sentence end, then clause boundary, then word boundary.
 * A sentence end is best because the result reads as finished writing rather
 * than as something that stopped. A word boundary is the floor — a description
 * must never end mid-word, which is the failure this whole pass exists to stop.
 */
export function trimDescription(text, limit = DESC_LIMIT) {
  const s = String(text || '').replace(/\s+/g, ' ').trim();
  if (s.length <= limit) return s;

  const window = s.slice(0, limit + 1);

  // 1. Sentence end. Require a following space or end-of-window so that
  //    "API 510." inside "API 510.5" is not mistaken for a sentence.
  const sentence = window.match(/^[\s\S]*[.!?](?=\s|$)/);
  if (sentence && sentence[0].trim().length >= MIN_USEFUL) {
    return sentence[0].trim();
  }

  // 2. Clause boundary — em dash, colon, semicolon or comma. Drop the mark
  //    itself so the line does not end on dangling punctuation.
  const clause = window.match(/^[\s\S]*[^\s](?=\s*[—:;,])/);
  if (clause && clause[0].trim().length >= MIN_USEFUL) {
    return clause[0].trim().replace(/[\s—:;,]+$/, '');
  }

  // 3. Word boundary. Strip any trailing punctuation or conjunction so the
  //    result does not read as an interrupted sentence.
  let cut = s.slice(0, limit);
  cut = cut.slice(0, cut.lastIndexOf(' '));
  cut = cut.replace(/[\s,;:—-]+$/, '');
  cut = cut.replace(/\s+(?:and|or|plus|with|for|the|a|an|of|to|in|by|at|from|that|which|when|how)$/i, '');
  return cut.trim();
}

/**
 * Applies the trim across the route list, in place.
 *
 * @param routes   prerender route list
 * @param skip     Set of paths to leave alone (the CTR wave overrides)
 */
export function applySnippetGeometry(routes, skip = new Set()) {
  const out = { trimmed: 0, alreadyFits: 0, skipped: 0, missing: 0, tooShortToTrim: 0, saved: 0, examples: [] };

  for (const r of routes) {
    if (!r || !r.path) continue;
    if (skip.has(r.path)) { out.skipped++; continue; }

    const d = r.description;
    if (!d) { out.missing++; continue; }
    if (d.length <= DESC_LIMIT) { out.alreadyFits++; continue; }

    const t = trimDescription(d);
    // A trim that lands under the useful floor means the description had no
    // boundary worth cutting at. Leaving it long is the lesser harm: Google
    // truncates it either way, and the longer version at least carries more
    // for any consumer that reads the tag whole.
    if (t.length < MIN_USEFUL) { out.tooShortToTrim++; continue; }

    out.saved += d.length - t.length;
    r.description = t;
    if (r.ogDesc && r.ogDesc.length > DESC_LIMIT) r.ogDesc = t;
    out.trimmed++;
    if (out.examples.length < 3) {
      out.examples.push(`${r.path}: ${d.length} -> ${t.length} chars`);
    }
  }
  return out;
}
