/**
 * De-cannibalisation pass — 2026-08-20.
 * ─────────────────────────────────────────────────────────────────────────────
 * THE PROBLEM, MEASURED
 *
 * The owner asked why impressions and clicks are so lopsided between products.
 * Over 90 days: Blog 263,041 impressions, Training 25,444, ERP 9,272, Consulting
 * 3,218. The instinct is that consulting needs more pages. It does not — the
 * demand is already arriving and losing:
 *
 *   "asnt level iii consulting"        281 impressions   position 54
 *   "ndt level 3 consultant"           218 impressions   position 65
 *   "ndt level 3 consulting services"  190 impressions   position 75
 *
 * Pulling page-by-query explains it. THIRTY-ONE pages compete for "asnt level
 * iii consulting". The purpose-built /consulting/asnt-level-iii-consulting-
 * services ranks 83rd; a blog post ranks 12th. Google is handed thirty-one
 * candidates for one intent and ranks none of them properly.
 *
 * The cause is in the markup. The city template bakes the head term into every
 * permutation, so 1,231 pages claim "NDT ERP", 349 claim "NDT training", 178
 * claim "NDT consulting":
 *
 *   <h1>NDT Consulting in Houston — ASNT Level III (Level 3) + API RBI + FFS + Code Consulting</h1>
 *   <h1>NDT Consulting in Seattle — ASNT Level III (Level 3) + API RBI + FFS + Code Consulting</h1>
 *
 * Blogs dominate the site because they are the only family whose titles are
 * individually written. The imbalance is self-inflicted.
 *
 * WHAT THIS PASS DOES — AND DELIBERATELY DOES NOT DO
 *
 * It does NOT delete pages, sections or links. Every page keeps its body, its
 * internal links and its route (CLAUDE.md: improvements are additive).
 *
 * It changes two things per permutation page:
 *   1. The generic head-term TAIL comes off the title and H1. The city keeps its
 *      own term — /consulting/ndt-consulting-houston should absolutely target
 *      "ndt consulting houston" — but it stops also claiming the national head
 *      term it cannot win and is diluting.
 *   2. The tail is replaced with the city's real differentiator, drawn from the
 *      same research the T5 layer uses. Houston gets its sectors, Wichita gets
 *      its own; the titles stop being interchangeable.
 *
 * It also strips one specific sentence from the consulting city template:
 *   "An 'NDT Level 3 consultant' and an 'NDT Level III consultant' are the same
 *    qualification — the numeral and Roman-numeral forms are used
 *    interchangeably in {city} and worldwide."
 * That sentence exists only to claim both spellings of the head term on 151
 * pages. It is the clearest keyword-stuffing signal on the site and it is
 * actively harming the canonical page it competes with. Removing it is the point
 * of the exercise, not a loss of content.
 *
 * WHY NOT JUST CANONICAL-TAG THEM TO THE HUB
 * Because the city pages have their own legitimate query ("ndt consulting
 * houston", 125 impressions) and a canonical tag would surrender it. The fix is
 * to make each page target the query it can win, which is what differentiation
 * means.
 */

const HEAD_TAIL_PATTERNS = [
  // The consulting city template's generic tail, in title and H1 form.
  /\s*[—-]\s*ASNT Level III \(Level 3\) \+ API RBI \+ FFS \+ Code Consulting\s*$/i,
  /\s*[—-]\s*ASNT Level III \+ API 581 RBI \+ 579 FFS\s*\|\s*Free Consultation\s*$/i,
  /\s*\|\s*Free Consultation\s*$/i,
];

/** The keyword-stuffing sentence, which appears once per consulting city page. */
const NUMERAL_STUFF =
  /\s*An &quot;NDT Level 3 consultant&quot; and an &quot;NDT Level III consultant&quot; are the same qualification[^.]*\.\s*/g;
const NUMERAL_STUFF_PLAIN =
  /\s*An "NDT Level 3 consultant" and an "NDT Level III consultant" are the same qualification[^.]*\.\s*/g;

const list = (a, n = 3) => (a || []).filter(Boolean).slice(0, n).join(', ');

/**
 * Build the differentiating tail for a city page from its own research.
 * Returns '' when there is nothing real to say — an empty tail is better than a
 * generic one, since a generic one is what caused this.
 */
function differentiator(d) {
  if (!d) return '';
  const sectors = (d.industries || []).filter(Boolean);
  if (sectors.length >= 2) return `${list(sectors, 2)} Inspection Programmes`;
  if (sectors.length === 1) return `${sectors[0]} Inspection Programmes`;
  const codes = (d.localCompliance || []).filter(Boolean);
  if (codes.length) return `${list(codes, 2)} Programme Support`;
  return '';
}

function trimTail(s) {
  let out = String(s || '');
  for (const re of HEAD_TAIL_PATTERNS) out = out.replace(re, '');
  return out.replace(/\s*[—-]\s*$/, '').trim();
}

const LIMIT = 70;

/**
 * Compose "{base} — {differentiator}" within the title budget, never cutting a
 * word. Tries the full differentiator, then a one-sector version, then the base
 * alone. Drops the "2026" filler from the base first, since it buys nothing in
 * the SERP and costs five characters that a real sector name can use.
 */
function fitTitle(base, diff, d) {
  const lean = base.replace(/\s+20\d\d\b/, '');
  const candidates = [];
  if (diff) {
    candidates.push(`${lean} — ${diff}`);
    const first = (d?.industries || []).filter(Boolean)[0];
    if (first) candidates.push(`${lean} — ${first} Inspection`);
    if (first) candidates.push(`${lean} — ${first}`);
  }
  candidates.push(lean, base);
  for (const c of candidates) if (c.length <= LIMIT) return c;
  // Everything overflows: fall back to the base, cut at a word boundary.
  const cut = lean.slice(0, LIMIT);
  const sp = cut.lastIndexOf(' ');
  return (sp > 30 ? cut.slice(0, sp) : cut).replace(/\s*[—,-]\s*$/, '').trim();
}

export async function applyDecannibalisation(routes, cityData) {
  const out = { consultingCity: 0, stuffRemoved: 0, titlesTrimmed: 0, examples: [] };

  for (const r of routes) {
    if (!r || !r.path) continue;

    if (r.path.startsWith('/consulting/ndt-consulting-')) {
      const slug = r.path.replace('/consulting/ndt-consulting-', '');
      const d = cityData[slug];
      const diff = differentiator(d);
      const before = r.title;

      // Title: drop the generic tail, add the city's own differentiator — but
      // only when it FITS. The first version sliced to 70 characters and cut
      // mid-word ("…Inspection Pro", "…Spacecr"), which is worse than no
      // differentiator at all: a truncated title reads as broken in the SERP.
      // If the whole thing will not fit, try a shorter differentiator, then fall
      // back to the trimmed base alone.
      const baseTitle = trimTail(r.title);
      if (baseTitle !== r.title) out.titlesTrimmed++;
      r.title = fitTitle(baseTitle, diff, d);

      // H1: same treatment. The city stays; the national head term goes.
      if (r.h1) {
        const baseH1 = trimTail(r.h1);
        r.h1 = diff ? `${baseH1} — ${diff}` : baseH1;
      }

      // Body: the H1 lives in bodyContent for this family, so rewrite it there
      // too, and remove the numeral-stuffing sentence.
      if (r.bodyContent) {
        const h1re = /<h1>NDT Consulting in ([^<—]+)\s*[—-]\s*ASNT Level III \(Level 3\) \+ API RBI \+ FFS \+ Code Consulting<\/h1>/;
        const m = r.bodyContent.match(h1re);
        if (m) {
          const city = m[1].trim();
          r.bodyContent = r.bodyContent.replace(
            h1re,
            `<h1>NDT Consulting in ${city}${diff ? ` — ${diff}` : ''}</h1>`,
          );
        }
        const had = NUMERAL_STUFF.test(r.bodyContent) || NUMERAL_STUFF_PLAIN.test(r.bodyContent);
        NUMERAL_STUFF.lastIndex = 0;
        NUMERAL_STUFF_PLAIN.lastIndex = 0;
        if (had) {
          r.bodyContent = r.bodyContent.replace(NUMERAL_STUFF, ' ').replace(NUMERAL_STUFF_PLAIN, ' ');
          out.stuffRemoved++;
        }
      }

      out.consultingCity++;
      if (out.examples.length < 4 && before !== r.title) out.examples.push(`${slug}: "${r.title}"`);
    }
  }
  return out;
}

/**
 * The canonical pages must actually claim the terms they are meant to own.
 * The audit found two that did not: /erp never says "NDT ERP" in its title, and
 * /consulting/asnt-level-iii-consulting-services never says "NDT Level 3
 * consulting" — the exact phrasing 218 impressions a quarter arrive on. A page
 * cannot win a term it does not state.
 */
export function reinforceCanonicals(routes) {
  const FIXES = {
    '/consulting/asnt-level-iii-consulting-services': {
      title: 'ASNT Level III Consulting Services — Outsourced NDT Level 3',
      h1: 'ASNT Level III Consulting Services (NDT Level 3 Consultant)',
    },
    // /erp IS NOT LISTED HERE, DELIBERATELY.
    //
    // The audit flags it for not claiming "NDT ERP", and the first version of
    // this file duly rewrote its title to do so. That was wrong, and
    // scripts/erp-generic-positioning.mjs says why: a US-filtered GSC pull on
    // 2026-08-07 found ZERO US queries containing the literal word "erp"
    // earning impressions, while "compliance tracking", "calibration
    // management" and "audit preparation" demonstrably do. The current title
    // was written from that measurement.
    //
    // The audit's rule — a canonical should claim its head term — is a good
    // default and wrong here, because the head term is one the US market does
    // not use. That reframes the ERP problem rather than solving it: the fix is
    // not to make /erp claim "NDT ERP" but to stop the 1,231 permutation pages
    // claiming it, since they are targeting a phrase with no US demand at all.
    // ERP's US total is 380 impressions and 0 clicks in 90 days, which is what
    // targeting an unsearched term looks like.
  };
  // MUST RUN LATE. The first version ran with the rest of the de-cannibalisation
  // pass and silently lost: /erp has its title set again by a later map, and
  // /consulting/asnt-level-iii-consulting-services is a depth page whose H1 is
  // rendered from depth-pages.json. Both overwrote what this had just set. It
  // now runs after every title-assigning pass, and replaces the first <h1>
  // whatever it currently contains rather than matching the old text.
  let applied = 0;
  const changed = [];
  for (const r of routes) {
    const f = FIXES[r?.path];
    if (!f) continue;
    if (f.title) r.title = f.title;
    if (f.h1) {
      r.h1 = f.h1;
      if (r.bodyContent && /<h1[^>]*>/.test(r.bodyContent)) {
        r.bodyContent = r.bodyContent.replace(/<h1([^>]*)>[\s\S]*?<\/h1>/, `<h1$1>${f.h1}</h1>`);
      }
    }
    applied++;
    changed.push(r.path);
  }
  return { applied, changed };
}
