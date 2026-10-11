#!/usr/bin/env node
/**
 * assert-no-fabricated-claims — standing gate for claims Atlantis NDT never made true.
 *
 * WHY THIS EXISTS
 * A "95% first-time pass rate", "50+ ASNT Level III consultants" and a
 * "Houston-based team" / "Training in Houston, Dubai, Hyderabad" layer kept
 * resurfacing in Google snippets (Honolulu training page, /ndt-consulting-{state})
 * long after the 2026-09-10 cleanup, because each copy lived in a different
 * layer: a React component, a prerender template, a route module, blogs.json.
 * This asserts on all layers at once. Run it before every commit.
 *
 * WHAT IS TRUE (and may be said instead)
 *   - Atlantis NDT is led by Anoop Rayavarapu, ASNT NDT Level III (founder)
 *   - training is ASNT SNT-TC-1A-based, Level III-led, delivered online,
 *     live-virtual, or onsite at the client's facility
 *
 * WHAT IS A VIOLATION (exit 1)
 *   PASS-RATE      an 85-99% pass-rate figure, or any "our/proven ... NN% ... pass"
 *                  claim (third-party exam statistics in the 20-80% band —
 *                  API ICP, CWI, ASNT Basic — are NOT flagged)
 *   LEVEL-III-TEAM "50+ / over 50 / fifty-plus ... Level III", "team of 50+ ..."
 *   RESPONSE-PROMISE "24-48 hours" response/deployment promises (only when an
 *                  Atlantis/we/our/deploy/response word is within 150 chars)
 *   LOCATION       "Houston-based team", "Training in Houston, Dubai, Hyderabad",
 *                  "our Hyderabad centre/lab", i.e. implied training centres
 *   FOUNDER-CREDENTIAL "API 5xx/653", "ISO 9001 Lead Auditor", "CWI" or
 *                  "Authorized Inspector" within ~150 chars after "Rayavarapu" /
 *                  "our founder" (he is ASNT NDT Level III only — 2026-10-07);
 *                  2026-10-11: also ET in his Level III method list ("(UT, RT,
 *                  MT, PT, VT, ET)", "UT/RT/MT/PT/VT/ET", "... VT and ET"),
 *                  "six methods", and "12+ ... years" (he holds five methods —
 *                  UT, RT, MT, PT, VT — and has 11+ years of field experience).
 *                  These rules self-test on known-bad/known-good strings first.
 *
 * SCOPE
 *   src/** and scripts/** sources (.ts .tsx .mjs .js .json), excluding
 *   node_modules, dist, .claude, .tsdata, *.backup*, and raw analytics dumps
 *   (GSC/GA4 query exports, indexing queues, audit logs) that never ship.
 *   --dist   also scan dist/**\/*.html (the crawler-facing layer) if present
 *   --verbose  print every hit
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, dirname, relative, sep } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const VERBOSE = process.argv.includes('--verbose');
const WITH_DIST = process.argv.includes('--dist');

// 2026-10-04: ASNT Level III family — sources whose copy is only Level III
// pages, plus their crawler output (scanned with --dist). Used to scope rules
// whose legacy copies elsewhere on the site have not been swept yet.
const LEVEL3_FAMILY = /^(?:src\/pages\/asnt-level-iii-training\.tsx|src\/pages\/resources\/asnt-level-iii-study-guide\.tsx|src\/components\/CertTrainingLocationPage\.tsx|src\/data\/training-gap-pages\.json|dist\/(?:asnt-level-iii-[^/]+|training\/asnt-level-iii-training-[^/]+|resources\/asnt-level-iii-study-guide)\/index\.html)$/;

// 2026-10-11: window after the founder's name for the method-list rules below. It
// skips inline tags and may cross a sentence boundary, but never the end of a
// paragraph, list item, table cell, heading or byline <div>, nor a JSON "\n".
const FOUNDER_LIST_WINDOW = String.raw`(?:Rayavarapu|\b[Oo]ur founder)(?:(?!<\/(?:p|li|div|td|th|section|h[1-6])>|\\n)(?:<[^>]*>|[^\n<])){0,260}?`;

export const RULES = [
  // ── pass-rate claims ───────────────────────────────────────────────────
  ['PASS-RATE', /(?<![-–\d.])(?:8[5-9]|9\d|100)(?:\.\d)?(?:\s?[-–]\s?(?:8[5-9]|9\d|100))?\s?%\+?\s+(?:first[- ](?:time|attempt)\s+|exam\s+|training\s+|certification\s+|overall\s+|student\s+|cohort\s+)?pass(?:es|ing)?\b(?!\s*(?:mark|score|grade|threshold|point))/i],
  ['PASS-RATE', /\bpass(?:ing)?[- ]rates?\s+(?:of|above|over|exceeding)\s+(?:8[5-9]|9\d)\s?%/i],
  ['PASS-RATE', /\b(?:our|proven|atlantis(?: ndt)?['’]?s?)\b[^.<"`]{0,50}\b\d{2}(?:[-–]\d{2})?\s?%[^.<"`]{0,25}\bpass(?:es|ing)?\s+rates?/i],
  ['PASS-RATE', /(?<!\bif\s)(?<![-–\d.])(?:8[5-9]|9\d)\s?%\s+of\s+(?:our\s+)?(?:students|candidates|trainees|graduates|delegates)\s+pass/i],
  // ── team-size claims of many Level IIIs ────────────────────────────────
  ['LEVEL-III-TEAM', /\b(?:[2-9]\d|1\d\d)\+\s*(?:certified\s+|qualified\s+)?(?:ASNT\s+)?(?:NDT\s+)?Level[- ]?(?:III|3)\b/i],
  ['LEVEL-III-TEAM', /\b(?:over|more than)\s+(?:[2-9]\d|fifty|forty|thirty)\s+(?:certified\s+)?(?:ASNT\s+)?(?:NDT\s+)?Level[- ]?(?:III|3)\b/i],
  ['LEVEL-III-TEAM', /\bfifty[- ]plus\s+(?:certified\s+)?(?:ASNT\s+|NDT\s+)?(?:Level|specialists|consultants|instructors|experts|professionals)/i],
  ['LEVEL-III-TEAM', /\bteam of\s+\d{2,}\+?\s*(?:certified\s+|qualified\s+)?(?:ASNT|NDT|Level|consultants|instructors|specialists|experts|professionals|inspectors)/i],
  ['LEVEL-III-TEAM', /\b(?:[2-9]\d|1\d\d)\+\s*(?:certified\s+)?(?:ASNT\s+)?(?:NDT\s+)?(?:consultants|instructors|Level III experts)\b/i],
  // ── physical-location implications for training / consulting ───────────
  ['LOCATION', /\bHouston[- ](?:based|headquartered)\s+team\b/i],
  ['LOCATION', /\b(?:training|courses?|classes|available|delivered|delivery|offered)\s+(?:in|at|across)\s+(?:Houston|Dubai|Hyderabad|India)\s*,\s*(?:Houston|Dubai|Hyderabad|Riyadh|Saudi)/i],
  ['LOCATION', /\b(?:in|across)\s+Houston,\s+Dubai,\s+(?:Hyderabad|India)(?:,\s+(?:and\s+)?Riyadh)?,?\s+(?:and|&)\s+online\b/i],
  ['LOCATION', /\bHouston,\s+Dubai,\s+(?:Hyderabad|India)\s*(?:&|and)\s+online\b/i],
  ['LOCATION', /\bour\s+(?:Houston|Dubai|Hyderabad|Riyadh)\s+(?:training\s+|technical\s+)?(?:centre|center|campus|facility|lab|hub)\b/i],
  ['LOCATION', /\bHyderabad\s+(?:technical|training)\s+(?:centre|center)\b/i],
  ['LOCATION', /\b(?:including|in|across)\s+(?:Dubai|Houston|Hyderabad)(?:\s*\((?:USA|UAE|India)\))?,\s+(?:Dubai|Houston|Hyderabad)\b/i],
  ['LOCATION', /\b(?:Dubai|Hyderabad|Houston|India|Riyadh|Mumbai)\s+(?:NDT\s+)?training\s+(?:centre|center|campus|facility|lab)s?\b/i],
  ['LOCATION', /\bAtlantis\b[^.<"\x60]{0,30}\bTraining\s+Cent(?:re|er)s?\b/i],
  ['LOCATION', /\bour\s+(?:Houston|Dubai|Hyderabad|Riyadh|Mumbai|Singapore)\s+(?:NDT\s+)?(?:lab|laboratory|classroom|campus)s?\b/i],
  // ── headcount of certified staff ───────────────────────────────────────
  ['LEVEL-III-TEAM', /\b\d{2,}\+\s*(?:certified|qualified)\s+(?:NDT\s+)?(?:consultants|instructors|specialists|experts|professionals)\b/i],
  // ── unverified response / mobilisation promises (Atlantis-promise context only) ──
  ['RESPONSE-PROMISE', /\b24\s?[-–]\s?48\s?(?:-?\s?h\b|hrs?\b|hours?\b)/i,
    /\b(?:Atlantis|we|our|us|deploy\w*|mobili[sz]\w*|respon\w*|turnaround|dispatch\w*|on[- ]site|consultants?|quote|proposal)\b/i],
  // ── 2026-10-02 round 2 ────────────────────────────────────────────────
  // NON-ASNT-SCHEME-OFFER: Atlantis training is ASNT SNT-TC-1A only. It does not
  // offer CWI, CSWIP, PCN, ISO 9712, ISNT or API 510/570/653/580 training or exam
  // prep. Third-party descriptions of those schemes are fine; an Atlantis offer
  // is not. Rules flagged NEG are skipped when a denial precedes the match
  // ("Atlantis NDT does not offer API 653 exam preparation").
  ['NON-ASNT-SCHEME-OFFER', /\bCWI Plus\b/i],
  ['NON-ASNT-SCHEME-OFFER', /\bAtlantis(?: NDT)?(?:['’]s?)?\s+(?:AWS\s+)?(?:CWI|CSWIP|PCN|ISO 9712|ISNT|API (?:510|570|653|580))\s+(?:exam\s+)?(?:prep|preparation|coaching|course|training|program|programme|route|cohort)s?\b/i],
  ['NON-ASNT-SCHEME-OFFER', /\b(?:API (?:510|570|653|580)|CWI|CSWIP) (?:study support|study program|prep plan|prep block|prep cohort)s?\b/i, null, 'NEG'],
  ['NON-ASNT-SCHEME-OFFER', /\b(?:AWS )?(?:CWI|CSWIP(?: 3\.\d[A-Z]?)?)(?: \/ CSWIP(?: 3\.\d[A-Z]?)?)? (?:exam )?prep(?:aration)? (?:included|available as add-on|is delivered|block)\b/i],
  ['NON-ASNT-SCHEME-OFFER', /\b(?:offers?|provides?|runs?|delivers?|includes?|help)\s+(?:both\s+)?(?:Level I, II,? and III\s+)?(?:[A-Z]{2,4}\s+)?(?:training\s+and\s+)?(?:ASNT\s*(?:SNT-TC-1A\s*)?(?:and|\/|&)\s*)?(?:AWS CWI|CWI|CSWIP|PCN|(?:EN )?ISO 9712|ISNT|API (?:510|570|653|580))(?:\s*(?:\/|,|and)\s*(?:CWI|CSWIP|PCN|ISO 9712|ISNT|API (?:510|570|653)))*\s+(?:exam\s+)?(?:training|prep|preparation|courses?|coaching|certification programs?)\b/i, null, 'NEG'],
  ['NON-ASNT-SCHEME-OFFER', /\bASNT(?: SNT-TC-1A)?\s*(?:and|\/|&)\s*ISO 9712\s+(?:exam\s+)?(?:training|prep|preparation|courses?)\b/i, null, 'NEG'],
  ['NON-ASNT-SCHEME-OFFER', /\b(?:CSWIP|PCN|ISO 9712) Preparation"/],
  ['NON-ASNT-SCHEME-OFFER', /\bprepare candidates for all of these\b/i],
  // 2026-10-04: /training/cwi-training-{city} rendered "CWI Certification Training
  // in Tampa", "Atlantis NDT delivers CWI Certification Training", Course schema,
  // "AWS Certified Welding Inspector preparation in Tampa" + "Ask about the next
  // cohort" — none of which the rules above caught, because the offer was built
  // from template variables. These catch the rendered copy (run with --dist) and
  // the product-name literals / data keys the templates were built from.
  ['NON-ASNT-SCHEME-OFFER', /\b(?:AWS )?CWI (?:Certification )?(?:Training|Course|Seminar|Exam Prep|Prep(?:aration)?)(?= in [A-Z]|["'`])/, null, 'NEG'],
  ['NON-ASNT-SCHEME-OFFER', /\b(?:Atlantis(?: NDT)?|[Ww]e)(?:<\/strong>)?\s+(?:delivers?|offers?|provides?|runs?|teach(?:es)?)\s+(?:the\s+)?(?:AWS\s+)?CWI\s+(?:Certification\s+)?(?:training|prep|preparation|courses?|seminars?|programmes?|programs?|cohorts?)\b/i, null, 'NEG'],
  ['NON-ASNT-SCHEME-OFFER', /\bCertified Welding Inspector\b(?: \(CWI\))?(?: exam(?:ination)?)? (?:preparation|prep|training|course|seminar|cohort)s? in [A-Z]/, null, 'NEG'],
  ['NON-ASNT-SCHEME-OFFER', /["']cwi-training["']\s*:\s*\{/],
  ['NON-ASNT-SCHEME-OFFER', /\bcwi\s*:\s*\{\s*name:\s*['"](?:AWS )?Certified Welding Inspector['"]/],
  ['NON-ASNT-SCHEME-OFFER', /"@type"\s*:\s*"Course"\s*,\s*"name"\s*:\s*"[^"]*\bCWI\b/],
  // CLAIMED-APPROVAL: approvals/listings Atlantis does not hold.
  ['CLAIMED-APPROVAL', /\b(?:ADNOC|Aramco|SABIC|PDO|KOC|QatarEnergy)(?:\s*(?:and|&|\/)\s*(?:Saudi\s+)?(?:ADNOC|Aramco|SABIC|PDO|KOC))?[- ]approved\s+(?:training\s+)?(?:programs?|programmes?|courses?|training)\b/i],
  ['CLAIMED-APPROVAL', /["'](?:Saudi Aramco Approved|SABIC Recogni[sz]ed|ADNOC Approved)["']/],
  ['CLAIMED-APPROVAL', /\bour [A-Z][a-z]+ entity is [A-Z]{2,}-listed\b/],
  // PRICE-HINT: copy implying Atlantis publishes rates.
  ['PRICE-HINT', /\blists?\b[^.<"]{0,80}\btypical rates\b/i],
  // INVENTED-CASE-STUDY: engagement outcomes Atlantis cannot evidence.
  ['INVENTED-CASE-STUDY', /\bAnonymi[sz]ed Case Study\b/i],
  ['INVENTED-CASE-STUDY', /\b\d{1,2}% below (?:the )?(?:previous|prior|open[- ]enrol\w*)\b/i],
  ['INVENTED-CASE-STUDY', /\bcost[- ]per[- ]head\b[^.]{0,40}\b\d{1,2}% below\b/i],
  // 2026-10-11 (owner: remove every claim the business cannot evidence). The only real
  // case studies are the two in src/data/case-stories-2026-10.json. These shapes carried
  // invented clients and outcomes across ~45 retired blog posts (301'd in vercel.json), 75
  // blog sections, six consulting pages and the /digital-twins pricing card.
  ['INVENTED-CASE-STUDY', /\bSample client outcomes\b/i],
  ['INVENTED-CASE-STUDY', /\bAnonymi[sz]ed customer quote\b|\bCustomer Profile \(Anonymi[sz]ed\)|\bcustomer — a large operator in this sector\b/i],
  ['INVENTED-CASE-STUDY', /\b(?:Level III|Level 3) of record on (?:Saudi )?Aramco\b/i],
  ['INVENTED-CASE-STUDY', /\bReal customer outcomes\b/i],
  ['CLAIMED-APPROVAL', /\bSource-code escrow with Iron Mountain\b|\bhours of (?:ASNT )?Level III consulting included annually\b/i],
  ['CLAIMED-APPROVAL', /\b(?:Atlantis|Our)\b[^.<"`]{0,40}\bAchieves ISO 9001\b|\bNew ASNT Level III Training Facility\b/i],
  ['PASS-RATE', /\b(?:our|we have run|Atlantis)\b[^.<"]{0,80}\b\d{2}% (?:\w+ ){0,2}pass rates?\b/i, null, 'NEG'],
  // ERP-TIMELINE: owner rule — ERP implementation is "typically 2 to 4 weeks from
  // kickoff; depends on how clean your existing records are". Any other week
  // range on an ERP surface is a violation. Scoped to ERP files (5th element).
  ['ERP-TIMELINE', /\b(?:implementation|go-live|goes live|go live|migration|onboarding|rollout|deployment)\b[^.<"`]{0,50}\b(?!2\s?(?:–|-|to)\s?4\s?weeks)\d{1,2}\s?(?:–|-|to)\s?\d{1,2}\s?weeks?\b/i,
    /\b(?:Atlantis|our|we)\b|ERP/i, null,
    /^(?:src\/pages\/erp\/|src\/components\/(?:ErpLocationPage|ERPSoftwareCityPage)\.tsx|src\/pages\/NdtErpVsGenericErp\.tsx)/],
  ['ERP-TIMELINE', /Typical timeline:? \d{1,2}\s?(?:–|-|to)\s?\d{1,2} weeks/i],
  // ERP-CORROSION-RATE: the ERP does not calculate or trend corrosion rates.
  ['ERP-CORROSION-RATE', /procedure libraries; corrosion-rate trending/i],
  // ── 2026-10-04 Level III family ───────────────────────────────────────
  // NAS 410 / EN 4179 personnel are certified by their employer under its
  // written practice with a Responsible Level 3. Atlantis neither delivers nor
  // examines that qualification; its offer is ASNT Level III exam preparation
  // and SNT-TC-1A Level III services. Denials ("Atlantis does not ... NAS 410")
  // and questions ("Does Atlantis offer NAS 410 training?") are not flagged.
  // 2026-10-10 owner (CLAUDE.md §51): Atlantis DOES offer NAS 410 Level 3 *services*
  // (written practices, procedure approval, Nadcap audit support) through an associate who
  // holds NAS 410 Level 3. The founder is not NAS 410 Level 3 (FOUNDER-CREDENTIAL below).
  // NAS 410 training, qualification and examinations delivered by Atlantis stay blocked.
  ['NON-ASNT-SCHEME-OFFER', /\bdelivered and examined by Atlantis\b/i],
  ['NON-ASNT-SCHEME-OFFER', /\b(?:plus|and to|including)\s+NAS[- ]?410\s*(?:\/|and|&)\s*EN 4179 aerospace qualification\b/i],
  ['NON-ASNT-SCHEME-OFFER', /\bAtlantis(?: NDT)?\b(?:(?!\b(?:not|no|never|nor|only)\b|n['’]t\b)[^.;<"`]){0,60}\b(?:delivers?|offers?|provides?|trains?|examines?|runs?)\b(?:(?!\b(?:not|no|never|nor)\b|n['’]t\b)[^.;(<"`]){0,40}\bNAS[- ]?410\b[^.;<"`]{0,30}\b(?:training|qualification|examinations?|courses?)\b/i, null, 'NEG'],
  ['NON-ASNT-SCHEME-OFFER', /\bNAS[- ]?410\b[^.;<"`]{0,60}\b(?:training|qualification|examination)\b[^.;<"`]{0,40}\b(?:delivered|examined|provided|run) by Atlantis\b/i, null, 'NEG'],
  // SECURITY-CLAIM (2026-10-10, CLAUDE.md §48): certifications, cipher suites and
  // uptime SLAs Atlantis has never evidenced. ~50 ERP/DT FAQ answers claimed
  // "ISO 27001-certified infrastructure", "AES-256 / TLS 1.3" and "99.95% uptime".
  // What is true (src/data/erp-decision.json → security): cloud service or own
  // infrastructure, hosting agreed before go-live, access/backups/retention in the
  // rollout plan, records exportable. Third-party mentions (Oracle's SLA, a buyer
  // question "ask for their ISO 27001 certificate") are not matched: the patterns
  // only catch the claim shapes, and uptime needs an Atlantis word nearby.
  ['SECURITY-CLAIM', /\bISO 27001[- ](?:certified|hosted|hosting|infrastructure)\b|\bISO 27001 (?:hosted|infrastructure|controls are mapped)\b|\bTLS 1\.3 in transit\b|\bAES-256 (?:at rest|at-rest)\b/i],
  ['SECURITY-CLAIM', /\b(?:Atlantis|our platform|our cloud)\b[^"`<]{0,150}?\b99\.9\d?% uptime\b/i],
  // QUOTE-24H: REMOVED 2026-10-04 — owner confirmed "quote within 24 hours" is a
  // real promise. Copy already changed to "on request" stays as it is.
  // ── 2026-10-04 owner-approved headline figures ────────────────────────
  // TRAINEE-COUNT: the only approved trainee figure is "1,000+ technicians
  // trained" (site-wide, worldwide). Country/region counts are not approved
  // (they would exceed the total). Cohort ranges ("cohorts of 4-25 technicians
  // trained") are not counts and are skipped by the lookbehind.
  ['TRAINEE-COUNT', /(?<![-–\d.,])(?!1,000\+\s)\d[\d,]*\+?\s+(?:technicians|students|candidates|professionals)\s+(?:trained|certified)\b/i],
  // INSPECTION-COUNT: the only approved form is "1,500+ inspection activities";
  // any "N inspections completed/performed/delivered" count fails.
  ['INSPECTION-COUNT', /(?<![-–\d.,])\d[\d,]*\+?\s+inspections\s+(?:successfully\s+)?(?:completed|performed|delivered)\b/i],
  // LEVEL3-EXAM-FACT: figures ASNT does not publish (checked on asnt.org
  // 2026-10-04): Prometric delivery, 60-80-question method exams, a fixed
  // 70%/80% pass mark, the 4,200 / 12,600-hour Level III experience figures.
  ['LEVEL3-EXAM-FACT', /\bPrometric\b|\b60\s?[-–]\s?80 questions\b|\b(?:4,200|12,600) (?:documented )?hours\b|\b(?:You need|need) 70% to pass\b|\b70% (?:overall|for the Basic)\b|\b80% (?:overall|for the Method)\b/i, null, null, LEVEL3_FAMILY],
  // ── 2026-10-07 founder credentials ────────────────────────────────────
  // FOUNDER-CREDENTIAL: owner decision 2026-10-07 — Anoop Rayavarapu is ASNT
  // NDT Level III ONLY. He is not an API 510/570/653 inspector, not an ISO 9001
  // Lead Auditor, not a CWI. Fails when one of those credentials appears within
  // ~150 chars after "Rayavarapu" / "our founder" in the same sentence (the
  // window stops at ". ", ";", a quote, or a JSON "\n"; HTML tags are skipped).
  // Code references used as subject matter ("damage-mechanism review per API
  // 571", "the API 653 inspector of record on the owner's side", "your
  // Authorized Inspector") are not credentials and are excluded by lookbehind.
  ['FOUNDER-CREDENTIAL', new RegExp(
    String.raw`(?:Rayavarapu|\b[Oo]ur founder)(?:<[^>]*>|(?!\.\s|\.<|\\n)[^;"\n<]){0,150}?` +
    String.raw`(?:(?<!\b(?:per|to|under|of|the|with|for|by|your|owner's|owner’s|in|on|from|against|vs\.?)\s)API\s?(?:5\d\d|653)\b` +
    String.raw`|ISO 9001(?::2015)?(?:<\/a>)?\s+[Ll]ead[- ][Aa]uditor` +
    String.raw`|(?<!\b(?:your|the|owner's|owner’s|nominated|AWS)\s)\bCWI\b` +
    String.raw`|(?<!\b(?:your|the|owner's|owner’s|nominated)\s)Authori[sz]ed Inspector` +
    String.raw`|NAS[- ]?410 Level (?:III|3)\b)`)],
  // 2026-10-11 (owner): the founder is ASNT NDT Level III in FIVE methods — UT, RT,
  // MT, PT, VT — with 11+ years of international NDT field experience. 586 built
  // pages had said "(UT, RT, MT, PT, VT, ET)", "six methods" or "15+ years".
  // FOUNDER_LIST_WINDOW may cross a sentence boundary ("... founder & CEO of
  // Atlantis NDT. ASNT NDT Level III certified across six methods") but stops at
  // the end of the paragraph / list item / cell / byline element. The method list
  // must follow "Level III" closely, so ET in a course or service list elsewhere
  // in the paragraph ("Atlantis trains UT, RT, MT, PT, VT and ET") is not matched.
  ['FOUNDER-CREDENTIAL', new RegExp(FOUNDER_LIST_WINDOW +
    String.raw`Level (?:III|3)\b(?:(?!\.\s)[^;\n<(]){0,40}?` +
    String.raw`(?:\((?=[^)]{0,80}\bET\b)(?:UT|RT|MT|PT|VT|ET)\b[^)]{0,80}\)` +                       // (UT, RT, MT, PT, VT, ET)
    String.raw`|\b(?=(?:[A-Z]{2,4}\/){1,8}ET\b|ET\/)(?:UT|RT|MT|PT|VT|ET|PAUT|TOFD)(?:\/(?:UT|RT|MT|PT|VT|ET|PAUT|TOFD)){2,}\b` + // UT/RT/MT/PT/VT/ET
    String.raw`|\b(?:UT|RT|MT|PT|VT),\s(?:(?:UT|RT|MT|PT|VT),\s)*(?:and\s)?ET\b` +                     // UT, RT, ..., ET
    String.raw`|\b(?:UT|RT|MT|PT|VT),?\sand\sET\b)`)],                                                   // ... VT and ET
  ['FOUNDER-CREDENTIAL', new RegExp(FOUNDER_LIST_WINDOW +
    String.raw`Level (?:III|3)\b(?:(?!\.\s)[^;\n<]){0,60}?\b(?:six|6) (?:NDT |ASNT )?methods\b`)],
  // Years of experience: same-sentence window as the rule above it.
  ['FOUNDER-CREDENTIAL', new RegExp(
    String.raw`(?:Rayavarapu|\b[Oo]ur founder)(?:<[^>]*>|(?!\.\s|\.<|\\n)[^;"\n<]){0,200}?` +
    String.raw`\b(?:1[2-9]|[2-9]\d)\+?\s+(?:years|yrs)\b`)],
];

// Self-test for the 2026-10-11 founder rules: known-bad strings must match and
// known-good strings must not, or the gate itself is broken.
{
  const founderRules = RULES.filter(([k]) => k === 'FOUNDER-CREDENTIAL');
  const hit = (t) => founderRules.some(([, re]) => new RegExp(re.source, re.flags).test(t));
  const BAD = [
    'Technically reviewed by <a href="/authors/anoop-rayavarapu">Anoop Rayavarapu</a> — ASNT NDT Level III (UT, RT, MT, PT, VT, ET)</div>',
    '<strong>Anoop Rayavarapu</strong> — ASNT NDT Level III (UT, RT, MT, PT, ET, VT), Founder',
    'Founded in 2018 by Anoop Rayavarapu (ASNT NDT Level III, multi-method UT/RT/MT/PT/VT/ET).',
    'Anoop Rayavarapu is the founder &amp; CEO of Atlantis NDT. ASNT NDT Level III certified across six methods (UT, RT, MT, PT, VT, ET) per SNT-TC-1A',
    'Anoop Rayavarapu holds ASNT NDT Level III certification across six methods — UT, RT, MT, PT, VT and ET.',
    'Primary author: Anoop Rayavarapu, founder + CEO. ASNT NDT Level III certified across six methods (UT/RT/MT/PT/VT/ET) per SNT-TC-1A',
    'Atlantis NDT founder Anoop Rayavarapu — ASNT NDT Level III multi-method — has tracked NDT industry indicators across 15+ years of inspection engineering',
  ];
  const GOOD = [
    'Technically reviewed by <a href="/authors/anoop-rayavarapu">Anoop Rayavarapu</a> — ASNT NDT Level III (UT, RT, MT, PT, VT)</div>',
    'Anoop Rayavarapu holds ASNT NDT Level III certification in five methods — UT, RT, MT, PT and VT — and has 11+ years of international NDT field experience.',
    'Led by Anoop Rayavarapu, ASNT NDT Level III.</p><p>Atlantis teaches UT, PAUT, TOFD, RT, MT, PT, VT and ET at Level I and Level II.',
    'Anoop Rayavarapu (ASNT NDT Level III) reviews this page. Courses cover UT, RT, MT, PT, VT and ET.',
  ];
  const broken = [...BAD.filter((t) => !hit(t)).map((t) => `missed: ${t}`), ...GOOD.filter(hit).map((t) => `false positive: ${t}`)];
  if (broken.length) {
    console.error('\n=== assert-no-fabricated-claims: FOUNDER-CREDENTIAL self-test FAILED ===');
    broken.forEach((b) => console.error('  ' + b));
    process.exit(2);
  }
}

// A denial or a question ("Does Atlantis have a training centre in X?" -> "No.")
// is the honest statement, not a claim.
const NEGATION = /\b(?:no|not|never|without|nor|neither|does|do you|is there|are there)\b|n['’]t\b/i;
// For NEG-flagged offer rules: a denial shortly before the match.
const OFFER_DENIAL = /\b(?:not|never|nor|no longer|does|do you|is there)\b|n['’]t\b|\bno\b/i;

/**
 * Reviewed exceptions — read in full and confirmed to be third-party, learner-
 * or customer-side text, not an Atlantis claim. Keyed by file + a substring of
 * the reported snippet so new content in the same file is still caught.
 * Adding here is a deliberate act: never add anything Atlantis says about itself.
 */
const REVIEWED = [
  ['scripts/practical-ndt-routes.mjs', 'distance from the big Houston training labs'],   // third-party labs
  ['src/data/practical-ndt-cities.json', 'distance from the big Houston training labs'], // same text, data copy
  ['scripts/gen-erp-data.json', 'Multi-site NDT contractor managing 800+ probes'],       // customer example
  ['src/pages/erp-modules/inventory-management.tsx', 'Multi-site NDT contractor managing 800+ probes'], // customer example
  ['scripts/prerender.mjs', 'API ICP exam schedule'],                                     // third-party exam sittings
  ['scripts/prerender.mjs', '"96% pass rate since 2019", a free-retake guarantee'],                                // code comment recording the 2026-09-10 removal
  ['src/pages/ndt-training-online.tsx', 'Whether you are in Houston, Hyderabad, Dubai'],  // learner location
  ['scripts/depth-pages-routes.mjs', "purchaser's project office"],                      // customer office
  ['src/data/depth-pages.json', "purchaser's project office"],
  ['scripts/drafted-pages.json', "purchaser's project office"],
  // market-wide provider pass rates in a buyer's guide (not Atlantis figures)
  ['src/data/blogs.json', 'Top-Tier ASNT Provider (85%+ pass)'],
  ['src/data/blogs.json', 'providers (a significant capital item) typically have 85%+ pass rates'],
  ['src/data/blogs.json', '→ 85% pass rate →'],
  ['src/data/blogs.json', 'yields 90%+ pass rates'],
  ['src/data/blogs.json', 'Providers with 85%+ first-time pass rates are ideal'],
  ['src/data/blogs.json', 'top provider 300 miles away has 88% pass rate'],
  // 2026-10-02 round 2: third-party providers / guard comments, not Atlantis offers
  ['src/pages/blog/api-653-certification-complete-guide.tsx', 'Some universities offer API 653 preparation'],
  ['scripts/training-family-layers.mjs', 'here is how we deliver API 510 training in Baltimore'],
  // 2026-10-04: code comment that DENIES a CWI offer ("offers no CWI prep")
  ['scripts/prerender.mjs', 'Atlantis offers no CWI prep, so no "enrol" there'],
  // 2026-10-07: code comment whose denial ("Atlantis does not") sits on the previous line
  ['scripts/ctr-wave12-overrides.mjs', '*     offer CWI training.'],
];
const isReviewed = (file, snippet) => REVIEWED.some(([f, s]) => f === file && snippet.includes(s));

/**
 * Files that legitimately contain the patterns: other gates/fixers that hold
 * them as regex literals, and one-shot historical generators/sweeps whose
 * output already lives in src/data (which IS scanned). Each entry is a
 * deliberate act — never add a file that ships Atlantis claims to crawlers.
 */
const SKIP_FILES = new Set([
  'scripts/assert-no-fabricated-claims.mjs', // this file
  'scripts/build-geo-hubs.mjs',              // holds the pass-rate pattern as a guard regex
  'scripts/home-first-screen.mjs',           // holds the "team of 50+" pattern as a strip regex
  'scripts/fix-unverified-stat-tiles-2026-09-30.mjs', // fixer: patterns are search terms
  'scripts/pricing-sweep-2026-08-09.mjs',    // historical sweep: before/after string pairs
  'scripts/pricing-sweep-round5-2026-08-09.mjs',
  // One-shot historical generators — NOT imported by the build (checked
  // 2026-10-02: nothing in prerender.mjs / package.json build references them).
  // Their output was persisted to src/data/blogs.json and route modules, which
  // ARE scanned and are clean. They still contain the old "96% pass" copy, so
  // DO NOT re-run any of them without stripping those claims first.
  'scripts/day9-generate-blogs.mjs',
  'scripts/day10-generate-blogs.mjs',
  'scripts/day11-generate-blogs.mjs',
  'scripts/day15-mega-blog-generator.mjs',
  'scripts/day18-final-mega-blog-generator.mjs',
  'scripts/year-2027-mega-blog-generator.mjs',
  'scripts/year-2028-h1-mega-blog-generator.mjs',
  'scripts/generate-round5-ctr-overrides.mjs',
  'scripts/blog-quality-pass3.mjs',
  'scripts/content-quality-upgrader.mjs',
  'scripts/inject-inline-anchors.mjs',
  'scripts/pseo-generator-v3.mjs',
  'scripts/auto-rewrite-bleeders.mjs',       // suggestion-only output; "facts" are third-party exam stats
]);

/** Raw analytics/indexing dumps under scripts/ — query text, never shipped. */
const DUMP_RE = /(^|\/)(_|gsc-|ga4-|indexing-|seo-demand|us-deepdive|diag-traffic|striking-distance|round5-opportunities|ranking-baseline|drop-analysis|ctr-opportunity|phase-harvest|content-briefs|citation-spec-report|\.thin-audit|pricing-placeholder-backlog|pseo-improvement-targets|pseo-route-inventory)[^/]*\.json$/;

const EXCLUDE_DIRS = new Set(['node_modules', 'dist', '.claude', '.tsdata', '.git', 'round6-agent-outputs']);

function walk(dir, acc = []) {
  if (!existsSync(dir)) return acc;
  for (const e of readdirSync(dir)) {
    if (EXCLUDE_DIRS.has(e)) continue;
    const p = join(dir, e);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, acc);
    else if (/\.(tsx?|mjs|cjs|js|json)$/.test(e) && !/\.backup|\.bak$|\.orig$/.test(e)) acc.push(p);
  }
  return acc;
}

const toRel = (abs) => relative(ROOT, abs).split(sep).join('/');

let files = [...walk(join(ROOT, 'src')), ...walk(join(ROOT, 'scripts'))]
  .filter((abs) => { const r = toRel(abs); return !SKIP_FILES.has(r) && !DUMP_RE.test(r); });

if (WITH_DIST) {
  const distFiles = [];
  const walkHtml = (d) => {
    if (!existsSync(d)) return;
    for (const e of readdirSync(d)) {
      const p = join(d, e);
      if (statSync(p).isDirectory()) walkHtml(p);
      else if (e.endsWith('.html')) distFiles.push(p);
    }
  };
  walkHtml(join(ROOT, 'dist'));
  files = files.concat(distFiles);
}

const VIOLATIONS = [];
for (const abs of files) {
  const rel = toRel(abs);
  let text;
  try { text = readFileSync(abs, 'utf8'); } catch { continue; }
  const lines = text.split(/\r?\n/);
  lines.forEach((line, i) => {
    for (const [kind, re, ctx, neg, fileRe] of RULES) {
      if (fileRe && !fileRe.test(rel)) continue;
      const g = new RegExp(re.source, re.flags.includes('g') ? re.flags : re.flags + 'g');
      let m;
      while ((m = g.exec(line)) !== null) {
        const s = Math.max(0, m.index - 60);
        // A denial ("Atlantis has no training centre in X") is the true statement, not a claim.
        if (ctx && !ctx.test(line.slice(Math.max(0, m.index - 150), m.index + m[0].length + 150))) continue;
        if (isReviewed(rel, line.slice(Math.max(0, m.index - 200), m.index + m[0].length + 200))) continue;
        if (kind === 'LOCATION' && NEGATION.test(line.slice(Math.max(0, m.index - 50), m.index + m[0].length))) continue;
        // denial within 50 chars before, or the match is part of a question ("... API 653 training?")
        if (neg === 'NEG' && (OFFER_DENIAL.test(line.slice(Math.max(0, m.index - 50), m.index)) || /^[^.<]{0,40}\?/.test(line.slice(m.index + m[0].length)))) continue;
        VIOLATIONS.push({ file: rel, line: i + 1, kind, text: line.slice(s, m.index + m[0].length + 60).replace(/\s+/g, ' ') });
        if (m[0].length === 0) g.lastIndex++;
      }
    }
  });
}

console.log('\n=== assert-no-fabricated-claims ===');
console.log(`scanned ${files.length} files${WITH_DIST ? ' (incl. dist/)' : ''}\n`);
if (!VIOLATIONS.length) {
  console.log('PASS — no fabricated pass-rate, Level III team-size or training-centre claims.\n');
  process.exit(0);
}
const byKind = {};
for (const v of VIOLATIONS) (byKind[v.kind] = byKind[v.kind] || []).push(v);
for (const [kind, list] of Object.entries(byKind)) {
  console.log(`${kind}  (${list.length})`);
  (VERBOSE ? list : list.slice(0, 25)).forEach((v) => console.log(`   ${v.file}:${v.line}  ${v.text}`));
  if (!VERBOSE && list.length > 25) console.log(`   … ${list.length - 25} more (--verbose)`);
  console.log('');
}
console.log(`FAIL — ${VIOLATIONS.length} violation(s).\n`);
process.exit(1);
