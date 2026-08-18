/**
 * Duplicate-H1 and stray-head repair — 2026-08-18.
 * ─────────────────────────────────────────────────────────────────────────────
 * WHAT WAS WRONG
 *
 * Fifteen routes had a broken H1: fourteen emitted TWO <h1> elements and one
 * emitted none. Two H1s is an ambiguous topic signal — the page states its
 * subject twice and lets the engine choose — and it is exactly the kind of
 * defect that survives for months because nothing visibly breaks.
 *
 * The cause is structural rather than editorial. The stored blog body for those
 * routes is a full document fragment carrying its own <meta name="viewport">
 * and its own <article><h1>, which prerender then wraps in <main><article><h1>
 * again. That nests an article inside an article and repeats the heading, and a
 * <meta> tag inside <body> is invalid HTML on top of it.
 *
 * WHAT THIS DOES, IN ORDER OF PREFERENCE
 *
 *   1. Strips <meta> and in-body <link rel="canonical">. Both are invalid there,
 *      and a stray in-body canonical is worse than invalid because it can
 *      contradict the real one in <head>.
 *   2. Removes a second <h1> whose text is IDENTICAL to the first. The heading
 *      is already stated; the copy is pure duplication.
 *   3. Demotes a second <h1> whose text DIFFERS to <h2>. That case is the
 *      article's own title against prerender's SEO heading — both carry real
 *      information, so removing one would lose content. Demoting keeps the
 *      words and leaves exactly one H1.
 *   4. When a page has NO <h1>: emits the route's declared h1 if it has one,
 *      otherwise promotes the body's first <h2>.
 *
 * Step 4 never invents text. A declared h1 is a value that already existed and
 * simply was not rendered; a first <h2> is already functioning as the page's
 * main heading and only its level is wrong. Writing a heading from scratch is an
 * editorial act and does not belong in a build step, so a page with neither is
 * reported rather than patched.
 *
 * ORDERING: this must run AFTER every pass that assigns bodyContent — including
 * the content-upgrade and thin-page-straggler passes. Placed before them it saw
 * routes whose body did not exist yet and silently fixed nothing.
 */

const H1_RE = /<h1[^>]*>([\s\S]*?)<\/h1>/gi;
const H2_RE = /<h2[^>]*>([\s\S]*?)<\/h2>/i;
const MAIN_RE = /<main[^>]*>/i;

const textOf = (s) =>
  String(s).replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim().toLowerCase();

export function fixDuplicateH1(routes) {
  const out = { deduped: 0, demoted: 0, injected: 0, promoted: 0, metaStripped: 0, noH1: [], differing: [] };

  for (const r of routes) {
    if (!r || typeof r.bodyContent !== 'string' || !r.bodyContent) continue;
    let body = r.bodyContent;

    const before = body;
    body = body
      .replace(/<meta[^>]*>/gi, '')
      .replace(/<link[^>]*rel=["']canonical["'][^>]*>/gi, '');
    if (body !== before) out.metaStripped++;

    const matches = [...body.matchAll(H1_RE)];

    // ── No H1 at all ─────────────────────────────────────────────────────────
    if (matches.length === 0) {
      if (r.h1 && String(r.h1).trim()) {
        const heading = `<h1>${String(r.h1).trim()}</h1>`;
        const main = body.match(MAIN_RE);
        body = main
          ? body.slice(0, main.index + main[0].length) + '\n    ' + heading + body.slice(main.index + main[0].length)
          : heading + body;
        out.injected++;
      } else {
        const h2 = body.match(H2_RE);
        if (h2) {
          const promoted = h2[0].replace(/^<h2/i, '<h1').replace(/<\/h2>$/i, '</h1>');
          body = body.slice(0, h2.index) + promoted + body.slice(h2.index + h2[0].length);
          out.promoted++;
        } else {
          out.noH1.push(r.path);
        }
      }
      r.bodyContent = body;
      continue;
    }

    if (matches.length === 1) { r.bodyContent = body; continue; }

    // ── More than one H1 ─────────────────────────────────────────────────────
    const firstText = textOf(matches[0][1]);
    let changed = 0;
    // Walk backwards so earlier match indices stay valid as the string mutates.
    for (let i = matches.length - 1; i >= 1; i--) {
      const m = matches[i];
      if (textOf(m[1]) === firstText) {
        body = body.slice(0, m.index) + body.slice(m.index + m[0].length);
        changed++;
        continue;
      }
      const demoted = m[0].replace(/^<h1/i, '<h2').replace(/<\/h1>$/i, '</h2>');
      body = body.slice(0, m.index) + demoted + body.slice(m.index + m[0].length);
      out.demoted++;
      changed++;
      out.differing.push(`${r.path}: demoted "${textOf(m[1]).slice(0, 44)}"`);
    }
    if (changed) out.deduped++;
    r.bodyContent = body;
  }

  return out;
}
