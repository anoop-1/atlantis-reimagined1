/**
 * No radiography offer on US pages — 2026-11-17 (CLAUDE.md §78).
 *
 * WHY. Owner, 2026-11-14: Atlantis cannot perform radiographic testing in the United States
 * (industrial radiography is licensed under NRC rules, 10 CFR Part 34, or Agreement State rules).
 * §76 removed the offer from the MT/PT/UT city pages, the 36 US RT city pages and the 21 US
 * inspection hubs. The 2026-11-17 re-audit (scripts/us-rt-offer-scan) found 220 more US pages
 * still listing RT among the methods Atlantis performs:
 *   /api-510|570|653-…-{state} (33)  "Atlantis performs … PAUT, TOFD, WFMT, ET, RT, PT and VT"
 *   /inspection/{tank|corrosion|pipeline|weld}-inspection-services-{city} (71)  "Methods: UT (including PAUT and TOFD), RT, MT, PT and VT"
 *   /industry/{sector}-ndt-{city} (27)  same "Methods:" line
 *   /services/{paut|mfl}-inspection-{city} (3)
 *   /inspection/third-party-inspection-{city} (36)  supplied/executed RT technicians
 *
 * WHAT. One text rule, used by the crawler pass (scripts/seo-release-2026-09-12.mjs) and by the
 * depth-page records for the third-party pages, so both layers say the same thing:
 *   - in a sentence that offers work (Atlantis / we / Methods: / performs / supplies / crews …),
 *     RT is removed from the method list ("PAUT, TOFD, RT, MT" → "PAUT, TOFD, MT");
 *   - the founder's credential ("ASNT NDT Level III in UT, RT, MT, PT and VT") is never touched;
 *   - code references, training, Level III review of radiographs and records are not offers and
 *     are left alone;
 *   - each changed page gets one note: Atlantis does not perform RT in the US, UT is the
 *     volumetric alternative where the code and owner allow, and an ASNT Level III can review the
 *     radiographs and RT procedures of the owner's licensed radiography contractor.
 * Canada and every other country are out of scope (the US licensing rule only).
 */

const STATES = 'alabama alaska arizona arkansas california colorado connecticut delaware florida georgia hawaii idaho illinois indiana iowa kansas kentucky louisiana maine maryland massachusetts michigan minnesota mississippi missouri montana nebraska nevada new-hampshire new-jersey new-mexico new-york north-carolina north-dakota ohio oklahoma oregon pennsylvania rhode-island south-carolina south-dakota tennessee texas utah vermont virginia washington west-virginia wisconsin wyoming'.split(' ');

/** Families whose pages sell inspection work in a named US place. */
const FAMILY = /^\/(?:api-(?:510|570|653)-[a-z-]+|inspection\/[a-z0-9-]+|industry\/[a-z0-9-]+|services\/[a-z0-9-]+)$/;

let placeSet = null;
/** @param {Iterable<string>} usPlaces US city slugs (training + conventional NDT city lists) */
export function setUsPlaces(usPlaces) { placeSet = new Set([...STATES, ...usPlaces]); }

export function isUsInspectionPath(path) {
  if (!FAMILY.test(path || '')) return false;
  const slug = path.split('/').pop();
  if (!placeSet) placeSet = new Set(STATES);
  for (const p of placeSet) if (slug === p || slug.endsWith('-' + p)) return true;
  return false;
}

const METHOD = '(?:UT|PAUT|TOFD|MT|WFMT|PT|VT|ET|ECT|MFL|ACFM|PMI|AUT|phased array UT|UT and PAUT|UT \\(including PAUT and TOFD\\))';
const CRED = /(?:Level III[^.]{0,60}?|qualif[a-z]+ (?:in|covers)|holds? [^.]{0,40}?)\(?UT, RT, MT, PT(?:,| and) VT\)?/g;
const OFFER = /\b(?:Atlantis|we|our|us)\b|Methods?:|\bperform(?:s|ed|ing)?\b|\bexecut(?:e|es|ing)\b|\bsuppl(?:y|ies)\b|\bmobili[sz](?:e|es|ed)\b|\bdeliver(?:s)?\b|\bcrews?\b|\btechnicians?\b|\boperators?\b|\bprovid(?:e|es)\b|\brun\b/i;
const NOT_OFFER = /does not perform radiograph|not perform (?:RT|radiograph)|licensed radiography contractor|Article 2|Section V|review(?:s|ed)? (?:of )?(?:the )?radiograph|training|course|Level III review|other companies|by others/i;

function stripRtFromList(s) {
  let t = s;
  const M = METHOD;
  // "RT on Ohio sites is performed by crews licensed in Ohio" read as an Atlantis licence (§62 owner item)
  t = t.replace(/\bRT on ([A-Z][A-Za-z .]+?) sites is (?:performed|carried out) (?:only )?by crews (?:licensed|holding)[^;,.]*/g,
    "Radiography on $1 sites is performed by the owner's licensed radiography contractor, not by Atlantis");
  t = t.replace(/\bRT is (?:always )?(?:performed|carried out) (?:only )?by crews (?:properly )?(?:licensed|holding)[^;,.]*/g,
    "RT is performed by the owner's licensed radiography contractor, not by Atlantis");
  t = t.replace(/\bRT is (?:performed|carried out) only by (?:properly )?licensed crews/g,
    "RT is performed by the owner's licensed radiography contractor, not by Atlantis");
  t = t.replace(/\b([Rr]adiography in [A-Z][A-Za-z .]+?) is (?:performed|done) by crews licensed/g,
    "$1 is performed by the owner's radiography contractor, licensed");
  t = t.replace(/, and dense urban sites usually push us toward/g, ', and dense urban sites usually push the contractor toward');
  t = t.replace(/, and Atlantis coordinates RT scope with that in mind rather than relying on a single licence/g,
    "; that is the owner's licensed radiography contractor, not Atlantis");
  // deliverables: "C-scans, RT images, guided-wave results" -> "C-scans, guided-wave results"
  t = t.replace(/,\s*RT images(?=,)/g, '');
  // "PAUT, TOFD, profile RT and external VT" -> "PAUT, TOFD and external VT"
  t = t.replace(/,\s*profile RT and /g, ' and ');
  // CUI screening wording: "profile RT, UT at inspection windows" -> "UT at inspection windows"
  t = t.replace(/\bprofile RT,\s*/g, '');
  // a described list item: ", RT for thick-wall piping welds," / "RT of nozzle welds, " -> dropped
  t = t.replace(/,\s*RT (?:for|on|of|where) [^,;.()]+(?=[,;)])/g, '');
  t = t.replace(/(^|[;:]\s*)RT (?:for|on|of) (?![^,;.]* (?:is|are|was) )[^,;.]{1,60}[,;]\s*/g, '$1');
  // middle of a list: "A, RT, B" -> "A, B"
  t = t.replace(new RegExp(`(${M}),\\s*RT,\\s*`, 'g'), '$1, ');
  // "A, RT and B" / "A, RT or B" -> "A and B"
  t = t.replace(new RegExp(`(${M}),\\s*RT,?\\s+(and|or)\\s+`, 'g'), '$1 $2 ');
  // head of a list: "RT, A, B" -> "A, B"
  t = t.replace(new RegExp(`\\bRT,\\s*(?=${M}\\b)`, 'g'), '');
  // tail: "A, B and RT" -> "A and B"; "A and RT" -> "A"
  t = t.replace(new RegExp(`,\\s*(${M}),?\\s+(?:and|or)\\s+RT\\b`, 'g'), ' and $1');
  t = t.replace(new RegExp(`(${M})\\s+(?:and|or)\\s+RT\\b`, 'g'), '$1');
  // slash lists: "UT/RT/MT" -> "UT/MT"; "RT/PAUT" -> "PAUT"; "PAUT/RT" -> "PAUT"
  t = t.replace(/\/RT\b/g, '').replace(/\bRT\//g, '');
  // "RT or UT" / "RT or PAUT" (a choice of volumetric method) -> the UT method
  t = t.replace(/\bRT (?:or|and) (UT|PAUT|AUT|automated UT \(AUT\)|shear-wave UT)\b/g, '$1');
  t = t.replace(/\b(UT|PAUT|AUT) (?:or|and) RT\b/g, '$1');
  return tidy(t);
}

/** Spelled-out forms, used where the page itself sells the work (force mode). */
/** Whole-sentence rewrites where removing a list item would not read cleanly (third-party pages). */
const SENTENCE_REWRITES = [
  ["Equipment logistics matter too: radiography sources require licensed transport and site-specific radiation work permits issued by the host facility's radiation safety officer, and that permitting step needs to be initiated well before the crew mobilizes, not on arrival.",
   "Equipment logistics matter too: where the scope also calls for radiography by the owner's licensed contractor, that contractor arranges the source transport and the site's radiation work permits with the facility's radiation safety officer, well before our crew mobilizes."],
  ["Equipment logistics matter too: radiographic sources require notification and licensing coordination with the site's radiation safety officer before RT work can start, and PAUT or conventional UT kit shipped ahead of the crew needs enough lead time to clear the facility's receiving process.",
   "Equipment logistics matter too: PAUT or conventional UT kit shipped ahead of the crew needs enough lead time to clear the facility's receiving process, and any radiography in the scope is coordinated by the owner's licensed radiography contractor with the site's radiation safety officer."],
  ['phased array units, MT yokes, and portable RT sources where radiography is called for', 'phased array units and MT yokes'],
  ['UT flaw detectors, PAUT and TOFD units, and radiography sources where the site permits', 'UT flaw detectors and PAUT and TOFD units'],
];

/** Spelled-out forms, used where the page itself sells the work (force mode). */
function stripSpelledRt(s) {
  let t = s;
  for (const [a, b] of SENTENCE_REWRITES) t = t.split(a).join(b);
  t = t.replace(/\b(Ultrasonic testing|Ultrasonic) and radiographic testing (cover|for)\b/g, (m, a, b) => (b === 'cover' ? 'Ultrasonic testing covers' : `${a === 'Ultrasonic' ? 'Ultrasonic testing' : a} for`));
  t = t.replace(/\bRT sources,\s*/g, '');
  t = t.replace(/\bradiographic \(RT\),\s*/g, '');
  t = t.replace(/,\s*radiographic testing \(RT\)(?=,)/g, '');
  t = t.replace(/\bradiographic testing \(RT\),\s*/g, '');
  t = t.replace(/,\s*radiography sources(?: and film or digital detectors)?(?: as applicable)?(?=\s*[,—])/g, '');
  t = t.replace(/,\s*source containers for radiographic work(?=,)/g, '');
  t = t.replace(/, ([^,]+), and exposure planning for RT\b/g, ' and $1');
  t = t.replace(/,\s*(?:and )?exposure planning for RT\b/g, '');
  t = t.replace(/,\s*radiation-work permitting for RT(?=\))/g, '');
  t = t.replace(/, ([^,]+),? and radiography exposure planning(?= all)/g, ' and $1');
  t = t.replace(/,\s*(?:and )?radiographic testing where volumetric weld examination[^,.;]*/g, '');
  t = t.replace(/\bvisual, radiographic, ultrasonic\b/g, 'visual, ultrasonic');
  t = t.replace(/,\s*radiograph(?:ic testing|y)(?: (?:for|on|where|of) [^,;.]+)?(?=,|;|\s+and\b)/g, '');
  t = t.replace(/\b[Rr]adiograph(?:ic testing|y)(?: (?:for|on|of|where) [^,;.]+)?,\s*/g, '');
  return tidy(t);
}

function tidy(t) {
  return t
    .replace(/\bUT dominate\b/g, 'UT dominates')
    .replace(/\bUT cover\b/g, 'UT covers')
    .replace(/\bconventional UT both have limits\b/g, 'conventional UT has limits')
    .replace(/\(primarily ([A-Z]{2,5}), and ([A-Z]{2,5})\)/g, '(primarily $1 and $2)')
    .replace(/\b(for|in|on|of|using) (PAUT|UT|MT|PT|VT), and (MT|PT|VT|UT)\b/g, '$1 $2 and $3')
    .replace(/\bUT records that include the actual scan data or radiographic film\/digital image\b/g, 'UT records that include the actual scan data')
    .replace(/,\s*,/g, ',')
    .replace(/,\s*(?=[.;)])/g, '')
    .replace(/  +/g, ' ');
}

/** Sentence-level rule. Returns the text with RT removed from offered method lists. */
export function stripUsRtOffer(text, opts = {}) {
  if (!text || !/\bRT\b|[Rr]adiograph/.test(text)) return { text, n: 0 };
  const masks = [];
  const masked = String(text).replace(CRED, (m) => { masks.push(m); return `\u0000${masks.length - 1}\u0000`; });
  let n = 0;
  // capture the separators so paragraph breaks survive
  const parts = masked.split(/((?<=[.!?])\s+(?=[A-Z<"“(]))/);
  const out = parts.map((seg, i) => {
    if (i % 2) return seg;
    if (NOT_OFFER.test(seg) || (!opts.force && !OFFER.test(seg))) return seg;
    let next = /\bRT\b/.test(seg) ? stripRtFromList(seg) : seg;
    if (opts.force && /[Rr]adiograph|\bRT\b/.test(next)) next = stripSpelledRt(next);
    if (next !== seg) n++;
    return next;
  }).join('');
  const restored = out.replace(/\u0000(\d+)\u0000/g, (_, i) => masks[+i]);
  return { text: n ? restored : text, n };
}

export const US_RT_NOTE_TEXT = 'In the United States, Atlantis does not perform radiographic testing (RT): industrial radiography is licensed under NRC rules (10 CFR Part 34) or Agreement State rules. Where the code and the owner allow, ultrasonic testing is the volumetric alternative, and an ASNT Level III can review the radiographs and RT procedures of your licensed radiography contractor.';

export const US_RT_NOTE_HTML = `<p data-us-rt-note="2026-11">In the United States, Atlantis does not perform radiographic testing (RT): industrial radiography is licensed under NRC rules (10 CFR Part 34) or Agreement State rules. Where the code and the owner allow, <a href="/ultrasonic-testing">ultrasonic testing</a> is the volumetric alternative, and an ASNT Level III can <a href="/report-validation/radiographic-film-and-digital-interpretation-review">review the radiographs and RT procedures</a> of your licensed radiography contractor.</p>`;

/** /inspection/third-party-inspection-{US city} records rewritten by scripts/us-no-radiography-depth-records-2026-11.mjs
 *  (React DepthPage and the crawler pass both show the US note on these). */
export const US_RT_DEPTH_PATHS = ["/inspection/third-party-inspection-anchorage","/inspection/third-party-inspection-aiken","/inspection/third-party-inspection-atlanta","/inspection/third-party-inspection-bakersfield","/inspection/third-party-inspection-baltimore","/inspection/third-party-inspection-austin","/inspection/third-party-inspection-billings","/inspection/third-party-inspection-idaho-falls","/inspection/third-party-inspection-groton","/inspection/third-party-inspection-lake-charles","/inspection/third-party-inspection-chicago","/inspection/third-party-inspection-deer-park","/inspection/third-party-inspection-jacksonville","/inspection/third-party-inspection-midland","/inspection/third-party-inspection-galveston","/inspection/third-party-inspection-baton-rouge","/inspection/third-party-inspection-indianapolis","/inspection/third-party-inspection-beaumont","/inspection/third-party-inspection-minneapolis","/inspection/third-party-inspection-kansas-city","/inspection/third-party-inspection-detroit","/inspection/third-party-inspection-boston","/inspection/third-party-inspection-charlotte","/inspection/third-party-inspection-miami","/inspection/third-party-inspection-bath-maine","/inspection/third-party-inspection-dallas","/inspection/third-party-inspection-newport-news","/inspection/third-party-inspection-corpus-christi","/inspection/third-party-inspection-fort-worth","/inspection/third-party-inspection-louisville","/inspection/third-party-inspection-huntsville","/inspection/third-party-inspection-baytown","/inspection/third-party-inspection-mobile","/inspection/third-party-inspection-cleveland","/inspection/third-party-inspection-east-hartford","/inspection/third-party-inspection-denver","/inspection/third-party-inspection-los-angeles","/inspection/third-party-inspection-new-york","/inspection/third-party-inspection-cincinnati"];
