// Training geo honesty gate — 2026-10-16.
//
// Atlantis NDT has no training centre, classroom, partner site or public venue in
// any city (the Houston address is a mailing suite; Hyderabad is an office, not a
// public training centre). Courses run year-round with no fixed course dates:
// theory is online and primarily self-paced, with starts in the first week of each
// month, and practicals run in the Practical NDT simulator and in person at the
// customer's own facility (src/data/training-availability.json; CLAUDE.md §24.2,
// §35.5). A competitor runs template city pages that imply a local school; ours
// must not.
//
// recordTrainingGeoHonesty() is called from applyTrainingReleaseRoute for every
// route (its body is final apart from the course next-step and owner-link
// passes, which add no presence or schedule wording). assertTrainingGeoHonesty()
// runs once after the route loop in prerender.mjs and fails the build if any
// city, region or industry training page still implies a local presence, a
// scheduled intake or an Atlantis exam centre.
//
// A sentence that negates the claim ("Atlantis has no training centre in X",
// "Is there a classroom in X? No.") or asks it as a question is not a violation.
// Third-party exam centres named as such are fine: the rules only fire on
// wording about Atlantis, or on scheduling words that have no honest use here.

/** City, region and industry training pages (this workstream's families). */
export function isGeoTrainingPath(path) {
  if (!path) return false;
  if (/^\/ndt-training-(?:online|near-me)$/.test(path)) return false; // national pages, owned elsewhere
  return /^\/ndt-training-[a-z0-9-]+$/.test(path)
    || /^\/training\/[a-z0-9-]+$/.test(path)
    || /^\/[a-z0-9-]+-ndt-training(?:-[a-z0-9-]+)?$/.test(path)
    || /^\/corporate-training\/[a-z0-9-]+$/.test(path)
    || /^\/corporate-ndt-training\/[a-z0-9-]+$/.test(path)
    || /^\/training-(?:usa|india|me|canada)$/.test(path);
}

const NEGATION = /\b(?:no|not|never|nor|none|without|cannot|isn['’]t|doesn['’]t|don['’]t|aren['’]t|won['’]t|neither|rather than|instead of)\b/i;
const ATLANTIS = /\b(?:Atlantis|our|we|us)\b/i;

// [label, regex, needs Atlantis/our/we in the same sentence]
export const GEO_HONESTY_RULES = [
  ['our-city-centre', /\bour [A-Z][\w.'’ -]{1,30}? (?:training|exam(?:ination)?|test(?:ing)?) (?:cent(?:er|re)|facility|campus|classroom|lab|school)\b/, false],
  ['atlantis-centre-in', /\b(?:training|exam(?:ination)?|test(?:ing)?) (?:cent(?:er|re)|facility|campus|classroom|school|venue) (?:in|at|near) [A-Z]/, true],
  ['classroom-in-city', /\bclassroom(?:s)? (?:in|at) [A-Z]/, true],
  ['partner-site', /\bpartner (?:site|facilit(?:y|ies)|venue|centre|center|location|lab|classroom|school)s?\b/i, false],
  ['near-you', /\b(?:cent(?:er|re)|classroom|facility|venue|location|school|lab)s? near you\b/i, false],
  ['next-intake', /\b(?:next|upcoming|scheduled) (?:intake|cohort|session|class|batch|course start)s?\b/i, false],
  // Onsite dates agreed with an employer are honest; published course, cohort or
  // intake dates are not ("plan training dates against the job roster" passes).
  ['cohort-dates', /\b(?:cohort|course|class|intake) dates\b|\b(?:request|get|see|check|view|book)\b[^.]{0,40}\btraining dates\b/i, false],
  ['cohort-forms', /\b(?:when a cohort forms|cohorts? forms? around|follows the cohort|cohort scheduling)\b/i, false],
  // "an agreed location scheme" (tube mapping) is not a venue, so "location" only counts after arranged/rented/hired.
  ['arranged-venue', /\b(?:arranged|agreed|rented|hired|nearby) (?:venue|training room|classroom)s?\b|\b(?:arranged|rented|hired) locations?\b/i, false],
  ['in-person-classroom', /\b(?:in-person|public|classroom) (?:classroom|cohort)s?\b/i, false],
  ['atlantis-exam-centre', /\bAtlantis(?: NDT)?(?:['’]s)? (?:exam(?:ination)?|test(?:ing)?|training) cent(?:er|re)\b/i, false],
  ['exam-slot', /\bbooks? your exam slot\b/i, false],
  ['ways-to-train-in', /\bways to train in [A-Z]/, false],
];

const viol = [];
let checked = 0;

function textOf(html) {
  return String(html)
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<\/(?:p|li|h[1-6]|td|th|tr|dt|dd|caption|figcaption|section|div)>/gi, '. ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&').replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/&nbsp;/g, ' ')
    // Abbreviations are not sentence ends ("St. Louis", "Ft. McMurray", "U.S.").
    .replace(/\b(St|Ste|Mt|Ft|Pt|Dr|Inc|Ltd|Co|Corp|vs|approx)\./g, '$1')
    .replace(/\bU\.S\./g, 'US')
    .replace(/\s+/g, ' ');
}

function sentenceAround(text, index, length) {
  let a = index;
  while (a > 0 && index - a < 400 && !/[.!?]/.test(text[a - 1])) a--;
  let b = index + length;
  while (b < text.length && b - index < 400 && !/[.!?]/.test(text[b])) b++;
  return text.slice(a, Math.min(text.length, b + 1)).trim();
}

/** Returns [{rule, sentence}] for one page body. */
export function scanTrainingGeoHonesty(html) {
  const text = textOf(html);
  const out = [];
  for (const [label, rx, needsAtlantis] of GEO_HONESTY_RULES) {
    const g = new RegExp(rx.source, rx.flags.includes('g') ? rx.flags : rx.flags + 'g');
    let m;
    while ((m = g.exec(text)) !== null) {
      const s = sentenceAround(text, m.index, m[0].length);
      if (NEGATION.test(s) || /\?\s*$/.test(s)) continue;
      if (needsAtlantis && !ATLANTIS.test(s)) continue;
      out.push({ rule: label, sentence: s.slice(0, 220) });
    }
  }
  return out;
}

export function recordTrainingGeoHonesty(path, html, noindex = false) {
  if (!isGeoTrainingPath(path) || typeof html !== 'string') return;
  checked++;
  for (const v of scanTrainingGeoHonesty(html)) viol.push({ path, noindex, ...v });
}

export function trainingGeoHonestyStats() {
  return `🧭 Training geo honesty: ${checked} city/region/industry training pages checked, ${viol.length} violation(s)`;
}

/** Fails the build when a city, region or industry training page implies presence, intakes or an Atlantis exam centre. */
// TRAINING_GEO_HONESTY_WARN=1 downgrades the failure to a warning for one
// documented build only (same convention as PRERENDER_ALLOW_DRIFT); fix the copy
// rather than leaving it set.
export function assertTrainingGeoHonesty() {
  if (!viol.length) return true;
  const byRule = {};
  for (const v of viol) byRule[v.rule] = (byRule[v.rule] || 0) + 1;
  const sample = viol.slice(0, 40).map((v) => `${v.path}${v.noindex ? ' (noindex)' : ''} [${v.rule}] ${v.sentence}`);
  const msg = `training geo honesty gate failed: ${viol.length} violation(s) ${JSON.stringify(byRule)}\n  ` + sample.join('\n  ');
  if (process.env.TRAINING_GEO_HONESTY_WARN === '1') { console.warn(`⚠️  ${msg}`); return false; }
  throw new Error(msg);
}
