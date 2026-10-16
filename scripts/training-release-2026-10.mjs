// Training release — 2026-10-12 (SEO audit actions 6 and 10; training workstream).
//
// One hook in prerender.mjs, at write time after every other body writer:
//   route = applyTrainingReleaseRoute(route);
// and one assert after the route list is final:
//   assertTrainingReleaseClean(BUILT_PATHS);
//
// What it does (crawler layer; the React layer reads the same data files):
//   1. Course info markup — every per-method/level course page (src/data/course-facts.json),
//      /training, /ndt-training-online, the converting city pages and /ndt-training-hyderabad
//      carry exactly ONE Course node built by src/data/course-markup-2026-10.mjs: name,
//      description, provider (Organization @id), offers[{category: "Paid"}] — never a price
//      (CLAUDE.md §18 gate rule 1) — and hasCourseInstance with courseMode + courseWorkload from
//      src/data/snt-tc-1a-hours.json. Dated sessions in src/data/course-sessions.json (empty
//      today) add courseSchedule/startDate/location and a visible "Scheduled sessions" table.
//      Every older Course node on those paths (route structuredData and inline body JSON-LD) is
//      removed, because seo-release-2026-09-12.mjs keeps only the last Course per page.
//   2. "NDT training near me" (query-verbatim H2 + direct answer) on /training; a pointer to it
//      on /ndt-training-online (no second H2, so /training stays the owner of the query).
//   3. Course detail (methods, levels, SNT-TC-1A hours, how practicals work, fee link) on the
//      converting city pages: Tampa, St. Louis, Pittsburgh, Jubail, Abu Dhabi, Manila.
//   4. /ndt-training-hyderabad rebuilt from src/data/training-release-2026-10.json and the
//      Hyderabad address in src/data/about-2026-10.json. India is never priced.
//   5. Canadian training pages lead with Level III consulting and the Atlantis ERP
//      (/erp/pricing linked, never repeated).
//   6. Stale wording on /training and the GCC training pages (fee answers that contradicted the
//      published Middle East fee table, invented schedules, centres, visa letters, client lists),
//      plus the training-na claim sanitiser on the international template pages.
//
// No prices, dates, venues, client names or counts are introduced here.
import { readFileSync } from 'fs';
import { join } from 'path';
import {
  SITE, courseNodeForPath, coursePathsFor, validateCourseNode, validateSessionsData,
  sessionRows, packageHours, classroomHours, methodRows as sharedMethodRows,
} from '../src/data/course-markup-2026-10.mjs';
import { sanitiseString } from './training-na.mjs';
import { applyCanadaCertification, assertCanadaCertificationClean, canadaCertStats } from './canada-certification-2026-10.mjs'; // 2026-10-16 Canada: which certification does your job need?
import { recordTrainingGeoHonesty, trainingGeoHonestyStats, isGeoTrainingPath } from './training-geo-honesty-2026-10.mjs'; // 2026-10-16 no implied local presence / dates on city, region and industry training pages

const ROOT = process.cwd();
const readJson = (p) => JSON.parse(readFileSync(join(ROOT, p), 'utf-8'));
export const FACTS = readJson('src/data/course-facts.json');
export const HOURS = readJson('src/data/snt-tc-1a-hours.json');
export const SESSIONS = readJson('src/data/course-sessions.json');
export const COPY = readJson('src/data/training-release-2026-10.json');
const ENQUIRY = readJson('src/data/training-enquiry-copy-2026-10.json'); // 2026-10-16 no dates on city/region/industry training pages
const ABOUT = readJson('src/data/about-2026-10.json');
export const HYDERABAD_ADDRESS = (ABOUT.addresses.find((a) => /Hyderabad/.test(a.label)) || {}).text;
const BUILD_DATE = new Date();

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const strip = (s) => String(s).replace(/<[^>]+>/g, '').replace(/&amp;/g, '&');
const fill = (s, vars) => String(s).replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));

export const stats = { course: 0, nearMe: 0, onlinePointer: 0, cityCourses: 0, canada: 0, hyderabad: 0, sessions: 0, rules: {}, sanitised: {}, removedCourseNodes: 0 };

// ── which paths carry which Course node (same builder as the React layer) ──
const CITY = COPY.cityCourses.pages;
export const COURSE_PATHS = coursePathsFor(FACTS, COPY);

export function courseNodeFor(path, now = BUILD_DATE) {
  return courseNodeForPath(path, { facts: FACTS, hours: HOURS, sessions: SESSIONS, copy: COPY, now });
}

// ── JSON-LD helpers ───────────────────────────────────────────────────────
const isCourse = (n) => n && typeof n === 'object' && (n['@type'] === 'Course' || (Array.isArray(n['@type']) && n['@type'].includes('Course')));

/** Deep-remove Course nodes (top level, @graph, arrays, nested properties). */
function dropCourses(node) {
  if (Array.isArray(node)) {
    const out = [];
    for (const x of node) {
      if (isCourse(x)) { stats.removedCourseNodes++; continue; }
      out.push(dropCourses(x));
    }
    return out;
  }
  if (!node || typeof node !== 'object') return node;
  const out = {};
  for (const [k, v] of Object.entries(node)) {
    if (isCourse(v)) { stats.removedCourseNodes++; continue; }
    out[k] = dropCourses(v);
  }
  return out;
}

function walkStrings(o, fn) {
  if (Array.isArray(o)) return o.map((x) => walkStrings(x, fn));
  if (o && typeof o === 'object') {
    const r = {};
    for (const [k, v] of Object.entries(o)) r[k] = walkStrings(v, fn);
    return r;
  }
  return typeof o === 'string' ? fn(o) : o;
}

function isEmptyLd(j) {
  if (!j) return true;
  if (Array.isArray(j)) return j.length === 0;
  if (Array.isArray(j['@graph'])) return j['@graph'].length === 0;
  return Object.keys(j).filter((k) => k !== '@context').length === 0;
}

function withCourse(sd, course) {
  let base = sd ? dropCourses(sd) : null;
  if (!base || isEmptyLd(base)) return { '@context': 'https://schema.org', '@graph': [course] };
  if (Array.isArray(base)) return [...base, { '@context': 'https://schema.org', '@graph': [course] }];
  if (Array.isArray(base['@graph'])) return { ...base, '@graph': [...base['@graph'], course] };
  if (isCourse(base)) return { '@context': 'https://schema.org', '@graph': [course] };
  const { '@context': ctx, ...rest } = base;
  return { '@context': ctx || 'https://schema.org', '@graph': [rest, course] };
}

// ── copy rules (stale wording / unevidenced claims) ───────────────────────
// [label, paths, regex, html replacement, text replacement for JSON-LD strings (null = HTML only)]
const GCC_TRAINING = ['/training-me', '/ndt-training-saudi-arabia', '/ndt-training-dubai', '/ndt-training-uae', '/ndt-training-qatar', '/ndt-training-abu-dhabi', '/ndt-training-jubail', '/ndt-training-dammam', '/ndt-training-riyadh', '/ndt-training-khobar', '/ndt-training-yanbu', '/ndt-training-doha', '/ndt-training-kuwait', '/ndt-training-manama', '/ndt-training-muscat', '/ndt-training-oman', '/ndt-training-sharjah'];
/** International template pages that get the training-na claim sanitiser (NA cities already do). */
const INTL_TEMPLATE = [...GCC_TRAINING, '/ndt-training-manila'];

const H = (hk, l) => HOURS.classroom[hk][l];
const O = (hk, l) => HOURS.ojt[hk][l];
const methodHoursSentence = () => ['UT', 'RT', 'MT', 'PT', 'VT', 'ET']
  .map((k) => `${k} Level I ${H(k, 0)} (${O(k, 0)}), Level II ${H(k, 1)} (${O(k, 1)})`).join('; ');

const ME_FEES_HERE = 'Fees for the fully online Level I and Level II programme are published in the fee table on this page, in US dollars with the approximate dirham equivalent; on-site, group and corporate programmes are quoted within 24 hours.';
const ME_FEES_THERE_HTML = 'Fees for the fully online Level I and Level II programme for candidates in the Middle East are published on the <a href="/training-me#training-fees">Middle East training page</a>; on-site, group and corporate programmes in Saudi Arabia are quoted within 24 hours.';
const VISA = 'Travel is rarely needed: theory runs live online and the practical sessions run at your employer\'s facility in the region. Atlantis does not sponsor work visas; ask us before booking travel for any course.';
const LENGTH = `Course length follows the SNT-TC-1A classroom hours for the method and level (for example ${H('UT', 1)} hours for UT Level II and ${H('MT', 1)} hours for MT Level II); experience hours are logged on the job. Dates are agreed with each employer or candidate.`;
const ONLINE_FORMATS = 'Yes — theory runs as live online sessions led by an ASNT NDT Level III, with practical sessions at your facility; fully online, self-paced Level I and Level II programmes are published for the Middle East, Europe and South East Asia.';

export const RULES = [
  // ── /training ───────────────────────────────────────────────────────────
  ['training-intro', ['/training'],
    /Atlantis NDT founder (?:<a [^>]*>)?Anoop Rayavarapu(?:<\/a>)? — ASNT NDT Level III multi-method — runs the global NDT training program from[\s\S]*?framework requirements\./,
    'Atlantis NDT founder <a href="/authors/anoop-rayavarapu">Anoop Rayavarapu</a>, ASNT NDT Level III in five methods (UT, RT, MT, PT, VT) with 11+ years of international NDT field experience, leads the training. Courses are ASNT SNT-TC-1A Level I and Level II in UT, PAUT, TOFD, RT, MT, PT, VT and ET, plus ASNT Level III exam preparation, delivered live online, on-site at your facility, or blended, for technicians and employers in the United States and Canada, the Middle East, India, Europe and South East Asia.', null],
  ['training-matrix', ['/training'],
    /<h2>The Method × Level Matrix[^<]*<\/h2>\s*<p>[\s\S]*?<\/p>/,
    `<h2>The Method × Level Matrix — UT, PAUT, TOFD, RT, MT, PT, VT, ET</h2><p>SNT-TC-1A recommended classroom hours, with on-the-job experience hours in brackets: ${methodHoursSentence()}. Level II hours are in addition to Level I. PAUT and TOFD Level II build on conventional UT Level II, with hours set by the employer's written practice. The five-method packages (VT, PT, MT, UT, RT) total ${packageHours(HOURS, 0)} classroom hours at Level I and ${packageHours(HOURS, 1)} at Level II. Your written practice sets the binding figures; every method and level is in the <a href="/resources/training-requirements-matrix">training requirements matrix</a>. Course pages: <a href="/asnt-level-2-ut-online-course">ASNT Level 2 UT online course</a>, <a href="/paut-level-2-training-course">PAUT Level 2 training course</a>, <a href="/tofd-training-certification-course">TOFD training and certification course</a>, <a href="/eddy-current-testing-level-2-course">eddy current (ET) Level 2 course</a> and <a href="/ndt-level-2-recertification-course">NDT Level 2 recertification course</a>.</p>`, null],
  ['training-schemes', ['/training'],
    /(<h2>ASNT Certification Pathways[^<]*<\/h2>\s*)<p>[\s\S]*?<\/p>/,
    '$1<p>Atlantis trains to ASNT SNT-TC-1A, the employer-based scheme: your employer certifies you under its written practice. ASNT\'s central certifications, ASNT NDT Level III and ASNT 9712, are examined by ASNT, and ISO 9712 and PCN are sat through their own accredited third-party bodies, which Atlantis does not administer. Which scheme a contract requires is set by the operator and the employer. See <a href="/asnt-certification">ASNT certification</a> and <a href="/compare/asnt-vs-pcn">ASNT vs PCN</a>.</p>', null],
  ['training-format', ['/training'],
    /<h2>Atlantis Academy — Format and Cohort Schedule<\/h2>\s*<p>[\s\S]*?<\/p>/,
    '<h2>Course format and scheduling</h2><p>Courses run as single-method Level I or Level II courses, multi-method programmes such as the five-method packages, and ASNT Level III exam preparation. Theory runs live online with replays, or on-site; practical sessions run at your facility. There is no fixed public calendar: dates are agreed with each employer or candidate when you enquire.</p>', null],
  ['training-regions', ['/training'],
    /<h2>Regional Cohorts[^<]*<\/h2>\s*<p>[\s\S]*?<\/p>/,
    '<h2>Regional training pages</h2><p>United States and Canada: the city, state and province pages under Nationwide on this page, and <a href="/ndt-training-usa">NDT training USA</a>. Middle East: <a href="/training-me">Middle East training</a> (published online fees), <a href="/ndt-training-saudi-arabia">Saudi Arabia</a>, <a href="/ndt-training-dubai">Dubai</a>, <a href="/ndt-training-abu-dhabi">Abu Dhabi</a> and <a href="/ndt-training-jubail">Jubail</a>. India: <a href="/training-india">NDT training India</a> and <a href="/ndt-training-hyderabad">Hyderabad</a>, where Atlantis has an office. Europe: <a href="/ndt-training-london">London</a>. South East Asia: <a href="/ndt-training-singapore">Singapore</a>. Everywhere, training is delivered live online or on-site at your facility; Atlantis does not run training centres.</p>', null],
  ['training-practicals', ['/training'],
    /<h2>The Practical-Week Architecture[^<]*<\/h2>\s*<p>[\s\S]*?<\/p>/,
    '<h2>How practical training works</h2><p>Practical training runs on real specimens. For on-site courses the instructor brings reference specimens and calibration blocks to your facility and trains on your own equipment; for live online courses the practical sessions run at your employer\'s facility. The practical examination is administered by an ASNT Level III under your employer\'s written practice. Between sessions, candidates practise on the <a href="/practical-ndt">Practical NDT simulator</a>, which is practice only and not a substitute for the practical examination.</p>', null],
  ['training-written-practice', ['/training'],
    /<h2>The Written-Practice Template[^<]*<\/h2>\s*<p>[\s\S]*?<\/p>/,
    '<h2>The written practice behind your certification</h2><p>Under SNT-TC-1A, the employer\'s written practice decides the hours, the examinations and who signs the certification. Atlantis publishes a free <a href="/resources/ndt-written-practice-template">written-practice template</a>, and companies without a Level III can use <a href="/consulting/ndt-consulting-level-iii">outsourced ASNT Level III consulting</a> to write or review one before a course starts.</p>', null],
  ['training-corporate', ['/training'],
    /<h2>Corporate On-Site Training[^<]*<\/h2>\s*<p>[\s\S]*?<\/p>/,
    '<h2>Corporate on-site training</h2><p>For NDT companies, fabricators and asset owners training a crew, the course runs on-site at your facility around your shift pattern, on your own equipment, with practical sessions and examinations under your written practice and ASNT Level III oversight. Written practice review can be bundled with the programme. See <a href="/corporate-ndt-training">group NDT training for inspection company staff</a> and the <a href="/snt-tc-1a-employer-certification-program">SNT-TC-1A certification programme for NDT companies</a>; on-site programmes are quoted within 24 hours.</p>', null],
  ['training-faq-q1', ['/training'],
    /4-6 months for single method \(40 hours Level I classroom \+ 210 hours Level I experience \+ 40 hours Level II \+ 420 hours Level II experience under Level III\)\.(?: Atlantis Academy compresses classroom; field experience is owner-logged\.)?/,
    `For UT, SNT-TC-1A recommends ${H('UT', 0)} classroom hours and ${O('UT', 0)} hours of experience for Level I, then a further ${H('UT', 1)} classroom hours and ${O('UT', 1)} hours of experience for Level II. The classroom hours take weeks; the experience hours are logged on the job, and your written practice sets the binding figures.`,
    `For UT, SNT-TC-1A recommends ${H('UT', 0)} classroom hours and ${O('UT', 0)} hours of experience for Level I, then a further ${H('UT', 1)} classroom hours and ${O('UT', 1)} hours of experience for Level II. The classroom hours take weeks; the experience hours are logged on the job, and your written practice sets the binding figures.`],
  ['training-faq-fees', ['/training'],
    /Affordable\. Accessible\. Fully customizable\. Pricing varies by region, cohort size, scope, and corporate-program overlays\. Tailored quote within 24 hours\./,
    'US fees for Level I and Level II, per method and as five-method packages, and for the online Level III refresher are published in the fee table on this page. Middle East, Europe and South East Asia fees are on the regional pages; other regions and on-site or corporate programmes are quoted within 24 hours.',
    'US fees for Level I and Level II, per method and as five-method packages, and for the online Level III refresher are published in the fee table on this page. Middle East, Europe and South East Asia fees are on the regional pages; other regions and on-site or corporate programmes are quoted within 24 hours.'],
  ['training-faq-corporate', ['/training'],
    /Yes — on-site corporate cohorts for Aramco contractor pools, ADNOC framework holders, NTPC, Reliance, HAL, Boeing supplier-tier\./,
    'Yes — on-site courses at your facility for company crews, with practical sessions on your own equipment and ASNT Level III oversight. See <a href="/corporate-ndt-training">corporate NDT training</a>.',
    'Yes — on-site courses at your facility for company crews, with practical sessions on your own equipment and ASNT Level III oversight.'],
  ['training-faq-recert', ['/training'],
    /Available as a public cohort, an online refresher, or bundled into a/,
    'Available as an online refresher or bundled into a', 'Available as an online refresher or bundled into a'],
  // ── online formats (/training Q6, /training-me Q7, Saudi Q7) ─────────────
  ['online-formats', ['/training', '/training-me'],
    /Hybrid online \+ practical-week format via (?:<a href="\/lms">)?Atlantis LMS(?:<\/a>)?\.?/,
    ONLINE_FORMATS, ONLINE_FORMATS],
  ['online-formats-sa', ['/ndt-training-saudi-arabia'],
    /Hybrid format via (?:<a href="\/lms">)?Atlantis LMS(?:<\/a>)?\.?/,
    ONLINE_FORMATS, ONLINE_FORMATS],
  // ── /training-me ────────────────────────────────────────────────────────
  ['me-h1', ['/training-me'],
    /<h1([^>]*)>NDT Training Middle East 2026 — Aramco, ADNOC, QatarEnergy, KOC, KNPC, Petronas Operator-Aligned Cohorts<\/h1>/,
    '<h1$1>NDT Training in the Middle East — ASNT SNT-TC-1A Courses Online and On-Site</h1>', null],
  ['me-cities', ['/training-me'],
    /<h2>City Cohorts — Dammam, Abu Dhabi, Dubai[^<]*<\/h2>\s*<p>[\s\S]*?<\/p>/,
    '<h2>Where Middle East training runs</h2><p>Courses for candidates in Saudi Arabia, the UAE, Qatar, Kuwait, Bahrain and Oman run in three ways: the fully online, self-paced Level I and Level II programme (fees in the table on this page), live online theory with an ASNT NDT Level III, and on-site courses at the employer\'s facility, where the practical sessions and the practical examination take place. Atlantis does not run training centres in the region and has no fixed public calendar; dates are agreed with each employer or candidate. Country and city pages: <a href="/ndt-training-saudi-arabia">Saudi Arabia</a>, <a href="/ndt-training-uae">UAE</a>, <a href="/ndt-training-dubai">Dubai</a>, <a href="/ndt-training-abu-dhabi">Abu Dhabi</a>, <a href="/ndt-training-jubail">Jubail</a>, <a href="/ndt-training-qatar">Qatar</a> and <a href="/training">all NDT training</a>.</p>', null],
  ['me-length', ['/training-me'],
    /5-day intensives for single-method Level II classroom \+ practical, with experience-hour logging continuing on-job\. Multi-method cohorts run 2-3 weeks back-to-back\./,
    LENGTH, LENGTH],
  ['me-level3', ['/training-me'],
    /Atlantis Academy runs Level III cohorts in Dammam, Abu Dhabi, Dubai, Doha, and Kuwait City quarterly\. Houston \+ Hyderabad cohorts are alternates\./,
    'ASNT Level III exam preparation runs live online, so it can be taken from anywhere in the Middle East; ASNT\'s Level III examinations are booked through ASNT\'s own testing arrangements. See <a href="/asnt-level-iii-training">ASNT Level III training</a>.',
    'ASNT Level III exam preparation runs live online, so it can be taken from anywhere in the Middle East; ASNT\'s Level III examinations are booked through ASNT\'s own testing arrangements.'],
  ['me-fees', ['/training-me'],
    /Affordable\. Accessible\. Fully customizable\. Pricing varies by region and scope — tailored quote within 24 hours\./,
    ME_FEES_HERE, ME_FEES_HERE],
  ['me-visa', ['/training-me'],
    /Atlantis issues training-invitation letters that support Saudi business visa, UAE training visa, and Qatar \/ Kuwait \/ Bahrain \/ Oman equivalents\. We do not sponsor work visas\./,
    VISA, VISA],
  ['me-positioning', ['/training-me'],
    /Corporate programs available for Aramco contractor pools, ADNOC framework holders, QatarEnergy NFE, KOC, KNPC, Petronas, Sonatrach, NOC Libya\. Atlantis Academy is positioned affordable, accessible, fully customizable — pricing varies by region and scope\./,
    'Corporate programmes run on-site for contractor and operator teams at their own facilities. Online fees are published in the fee table on this page; corporate programmes are quoted.', null],
  ['me-drilling', ['/training-me'],
    /\s*Atlantis Middle East cohorts include 16-hour operator-spec navigation drilling alongside the SNT-TC-1A 2024 core syllabus\./, '', ''],
  ['me-macrographs', ['/training-me'],
    / with live macrographs and B-scan archives from Aramco \/ ADNOC \/ QatarEnergy turnarounds/, '', ''],
  ['me-engagements', ['/training-me'],
    /\s*Atlantis Doha \+ Dammam cohorts run cryogenic-service PAUT practical modules with QatarEnergy \+ JGC \+ Chiyoda \+ Hyundai E&(?:amp;)?C \+ Tecnimont engagement references\./, '', ''],
  ['me-kuwait', ['/training-me'],
    /\s*Atlantis Manama \+ Kuwait City cohorts cover all three operator scopes in parallel\./, '', ''],
  ['me-north-africa', ['/training-me'],
    /Atlantis Middle East cohorts welcome North African candidates from Algeria \/ Libya \/ Egypt \/ Tunisia \/ Morocco with operator-spec written-practice templates aligned to Sonatrach \/ NOC \/ EGPC contractor pre-qualification — affordable, accessible, fully customizable\./,
    'Candidates from North Africa can join the live online theory sessions, with practical sessions at their employer\'s facility.', null],
  // ── /ndt-training-saudi-arabia ──────────────────────────────────────────
  ['sa-h1', ['/ndt-training-saudi-arabia'],
    /<h1([^>]*)>NDT Training Saudi Arabia 2026 — Aramco-Aligned Cohorts in Dammam, Jubail, Yanbu, Riyadh, Jeddah<\/h1>/,
    '<h1$1>NDT Training in Saudi Arabia — ASNT SNT-TC-1A Courses for Teams in Dammam, Jubail, Yanbu, Riyadh and Jeddah</h1>', null],
  ['sa-intro-fees', ['/ndt-training-saudi-arabia'],
    /Affordable, accessible, fully customizable Atlantis Academy pricing — tailored quote within 24 hours\./,
    ME_FEES_THERE_HTML, strip(ME_FEES_THERE_HTML)],
  ['sa-cities', ['/ndt-training-saudi-arabia'],
    /<h2>City Cohorts — Dammam, Jubail, Yanbu[^<]*<\/h2>\s*<p>[\s\S]*?<\/p>/,
    '<h2>Where Saudi training runs</h2><p>Saudi courses run live online with an ASNT NDT Level III, or on-site at the employer\'s facility in Dammam, Jubail, Yanbu, Riyadh, Jeddah or elsewhere in the Kingdom, where the practical sessions and the practical examination take place. Candidates in Saudi Arabia can also take the fully online, self-paced Level I and Level II programme whose fees are published on the <a href="/training-me#training-fees">Middle East training page</a>. Atlantis does not run a training centre in Saudi Arabia and has no fixed public calendar; dates are agreed with each employer. See <a href="/ndt-training-jubail">Jubail</a>, <a href="/training-me">Middle East</a> and <a href="/training">all NDT training</a>.</p>', null],
  ['sa-visa', ['/ndt-training-saudi-arabia'],
    /Atlantis issues training-invitation letters supporting Saudi business visa\. We do not sponsor work visas; mobilisation is via contractor pool\./,
    VISA, VISA],
  ['sa-length', ['/ndt-training-saudi-arabia'],
    /5-day intensives single method; 2-3 weeks back-to-back multi-method; Level III multi-method preparation by arrangement\./,
    `${LENGTH} Level III exam preparation is arranged per candidate.`, `${LENGTH} Level III exam preparation is arranged per candidate.`],
  ['sa-women', ['/ndt-training-saudi-arabia'],
    /Yes — Atlantis Academy runs women-in-NDT cohorts in Saudi per Vision 2030 workforce-diversification\./,
    'Courses are open to every candidate. On-site courses run for an employer\'s own team at its facility, so the employer decides who is in the group.',
    'Courses are open to every candidate. On-site courses run for an employer\'s own team at its facility, so the employer decides who is in the group.'],
  ['sa-women-section', ['/ndt-training-saudi-arabia'],
    /Atlantis Academy runs women-in-NDT cohorts in Saudi Arabia covering[\s\S]*?Atlantis cohorts integrate\./,
    'Atlantis courses are open to every candidate, and employers can run on-site courses for their own teams at their facility.', null],
  ['sa-fees', ['/ndt-training-saudi-arabia'],
    /Affordable\. Accessible\. Fully customizable\. Pricing varies by region and scope — tailored quote within 24 hours\./,
    ME_FEES_THERE_HTML, strip(ME_FEES_THERE_HTML)],
  ['sa-clients', ['/ndt-training-saudi-arabia'],
    /Corporate programs for Aramco contractor pools \([^)]*\), SABIC framework holders, SADARA, YASREF, Petro Rabigh\./,
    'Corporate programmes run on-site for contractor and operator teams at their own facilities.', null],
  ['sa-templates', ['/ndt-training-saudi-arabia'],
    /Atlantis Academy issues the written-practice \+ procedure portfolio templates aligned to SAEP-1112 audit checklist — graduates do not file from scratch\./,
    'Atlantis publishes a free <a href="/resources/ndt-written-practice-template">written-practice template</a>, and outsourced ASNT Level III consulting can adapt it to the contractor\'s requirements.', null],
  ['sa-macrographs', ['/ndt-training-saudi-arabia'],
    /\s*Atlantis cohorts drill closed-book damage-mechanism recognition against live macrographs from Aramco \/ SABIC turnarounds\./, '', ''],
  ['sa-cohort-modules', ['/ndt-training-saudi-arabia'],
    /\s*Atlantis Jubail \+ Yanbu cohorts include petrochem-specific damage-mechanism modules alongside the SAEP-1112 written-practice navigation\. Mobilisation through [^.]*\./, '', ''],
  ['sa-asset-stack', ['/ndt-training-saudi-arabia'],
    /\s*Atlantis cohorts cover the asset-stack with operator-spec damage atlas overlaid on the SNT-TC-1A 2024 \/ CP-189-2020 syllabus\./, '', ''],
  // ── method course pages: hours that contradicted snt-tc-1a-hours.json ───
  ['hours-ut2', ['/asnt-level-2-ut-online-course'],
    /Typically ≈80 classroom hours for Level II per SNT-TC-1A recommended training-hour guidance, on top of Level I\./,
    `Typically ${H('UT', 1)} classroom hours for Level II per SNT-TC-1A recommended training-hour guidance, on top of the ${H('UT', 0)} Level I hours.`,
    `Typically ${H('UT', 1)} classroom hours for Level II per SNT-TC-1A recommended training-hour guidance, on top of the ${H('UT', 0)} Level I hours.`],
  ['hours-ut2-desc', ['/asnt-level-2-ut-online-course'], /~80 classroom hours\./, `${H('UT', 1)} classroom hours on top of Level I.`, `${H('UT', 1)} classroom hours on top of Level I.`],
  ['hours-et2', ['/eddy-current-testing-level-2-course'], /≈80 classroom hours per SNT-TC-1A guidance/, `${H('ET', 1)} classroom hours per SNT-TC-1A guidance, in addition to Level I`, `${H('ET', 1)} classroom hours per SNT-TC-1A guidance, in addition to Level I`],
  ['hours-rt2', ['/radiographic-testing-level-2-course'], /≈80 classroom hours per SNT-TC-1A guidance\./, `${H('RT', 1)} classroom hours per SNT-TC-1A guidance, in addition to Level I.`, `${H('RT', 1)} classroom hours per SNT-TC-1A guidance, in addition to Level I.`],
  ['hours-mt', ['/magnetic-particle-testing-certification-course'], /≈40 hours Level I, ≈80 hours Level II per SNT-TC-1A guidance\./, `${H('MT', 0)} classroom hours at Level I and ${H('MT', 1)} at Level II per SNT-TC-1A guidance.`, `${H('MT', 0)} classroom hours at Level I and ${H('MT', 1)} at Level II per SNT-TC-1A guidance.`],
  ['hours-pt1', ['/liquid-penetrant-testing-level-1-course'], /≈40 classroom hours per SNT-TC-1A guidance\./, `${H('PT', 0)} classroom hours per SNT-TC-1A guidance.`, `${H('PT', 0)} classroom hours per SNT-TC-1A guidance.`],
  // ── international template pages ────────────────────────────────────────
  // "next cohort" implied a public schedule that does not exist (no course dates; owner input)
  ['next-cohort', (p) => /^\/ndt-training-[a-z0-9-]+$/.test(p), /Ask about the next cohort in/g, 'Ask about a course in', 'Ask about a course in'],
  // 2026-10-16: the static training CTA (prerender.mjs TRAINING ENQUIRY CTA) promised
  // "available dates"; on city, region and industry pages it now reads from
  // src/data/training-enquiry-copy-2026-10.json, the same copy the React templates pass.
  ['cta-dates-h2', isGeoTrainingPath, /<h2>Ask about NDT training dates and delivery<\/h2>/g, `<h2>${esc(ENQUIRY.heading)}</h2>`, null],
  ['cta-dates-p', isGeoTrainingPath, /<p>Tell us the methods and levels you need and how many technicians\. We reply with available dates, the delivery options that fit, and what your written practice requires — usually the same working day\.<\/p>/g, `<p>${esc(ENQUIRY.body)}</p>`, null],
  ['cta-cohorts-link', isGeoTrainingPath, />Employer-sponsored cohorts<\/a>/g, '>Employer-sponsored training</a>', null],
  // ── /ndt-training-near-me: no "arranged venues" model, US fees are published ──
  ['near-me-venues', ['/ndt-training-near-me'],
    /at your own site anywhere in the country, at arranged venues in metro areas across ([^,]+(?:, [^,]+)*?), and blended — theory online, practical delivered in person\./,
    'on-site at your facility anywhere in the country, live online for the classroom hours, and blended — theory online, then the practical at your facility. Atlantis does not run training centres; the metro and state pages cover $1.', null],
  ['near-me-desc', ['/ndt-training-near-me'],
    /delivered on-site, at arranged venues in 45\+ US metros(?:, or blended online plus practical)?\.?/,
    'delivered on-site at your facility anywhere in the US, live online, or blended.', 'delivered on-site at your facility anywhere in the US, live online, or blended.'],
  ['near-me-fees', ['/ndt-training-near-me'],
    /Atlantis NDT publishes no pricing — pricing varies by region, scope, delivery model, team size\./,
    'US training fees are published on the <a href="/ndt-training-usa#training-fees">NDT training USA page</a>; on-site and group programmes are quoted.', null],
];
const appliesTo = (paths, path) => (typeof paths === 'function' ? paths(path) : paths.includes(path));

function applyRules(path, body, sd) {
  let b = body;
  let s = sd;
  for (const [label, paths, rx, html, text] of RULES) {
    if (!appliesTo(paths, path)) continue;
    const r = new RegExp(rx.source, rx.flags);
    const n = (b.match(new RegExp(rx.source, rx.flags.includes('g') ? rx.flags : rx.flags + 'g')) || []).length;
    if (n) { b = b.replace(r, html); stats.rules[label] = (stats.rules[label] || 0) + n; }
    if (text !== null && s) s = walkStrings(s, (str) => str.replace(new RegExp(rx.source, rx.flags), text));
  }
  if (INTL_TEMPLATE.includes(path)) {
    b = sanitiseString(b, stats.sanitised, false);
    if (s) s = walkStrings(s, (str) => sanitiseString(str, stats.sanitised, true));
  }
  return { body: b, sd: s };
}

// ── HTML blocks ───────────────────────────────────────────────────────────
function insertAfterIntro(body, html) {
  const h1End = body.search(/<\/h1>/i);
  if (h1End >= 0) {
    const after = body.slice(h1End);
    const pEnd = after.search(/<\/p>/i);
    const next = after.search(/<(?:h2|section)[\s>]/i);
    const at = (pEnd >= 0 && (next < 0 || pEnd < next)) ? h1End + pEnd + 4 : h1End + 5;
    return body.slice(0, at) + html + body.slice(at);
  }
  const m = body.search(/<main[^>]*>/i);
  if (m >= 0) { const e = body.indexOf('>', m) + 1; return body.slice(0, e) + html + body.slice(e); }
  return html + body;
}

/** Insert after the first section whose opening tag matches `marker`; falls back to the intro. */
function insertAfterSection(body, marker, html) {
  const i = body.indexOf(marker);
  if (i < 0) return insertAfterIntro(body, html);
  const end = body.indexOf('</section>', i);
  if (end < 0) return insertAfterIntro(body, html);
  const at = end + '</section>'.length;
  return body.slice(0, at) + html + body.slice(at);
}

function insertBeforeMainEnd(body, html) {
  const i = body.lastIndexOf('</main>');
  return i >= 0 ? body.slice(0, i) + html + '\n  ' + body.slice(i) : body + html;
}

export function nearMeHtml() {
  const c = COPY.nearMe;
  const formats = c.formats.map(([t, d]) => `<li><strong>${esc(t)}.</strong> ${d}</li>`).join('');
  const cities = c.cities.map(([href, label]) => `<li><a href="${href}">NDT training in ${esc(label)}</a></li>`).join('');
  return `
    <section id="${c.id}" data-training-release="near-me" aria-labelledby="${c.id}-h">
      <h2 id="${c.id}-h">${esc(c.h2)}</h2>
      <p>${esc(c.answer)}</p>
      <h3>${esc(c.formatsH3)}</h3>
      <ul>${formats}</ul>
      <h3>${esc(c.certH3)}</h3>
      <p>${esc(c.certAnswer)}</p>
      <h3>${esc(c.citiesH3)}</h3>
      <ul>${cities}</ul>
      <p>${esc(c.citiesNote)} <a href="${c.ctaHref.replace(/&/g, '&amp;')}"><strong>${esc(c.ctaText)}</strong></a>${esc(c.ctaAfter)}</p>
    </section>`;
}

export function onlinePointerHtml() {
  return `\n    <p data-training-release="near-me-pointer">${COPY.onlinePointer.html}</p>`;
}

export const methodRows = () => sharedMethodRows(FACTS, HOURS);

export function cityCoursesHtml(path) {
  const cc = COPY.cityCourses;
  const c = cc.pages[path];
  const vars = { label: c.label, labelEnc: encodeURIComponent(c.label), l1: packageHours(HOURS, 0), l2: packageHours(HOURS, 1) };
  const rows = methodRows().map((r) => `<tr><th scope="row">${esc(r.method)}</th><td>${r.l1}</td><td>${r.l2}</td><td>${r.pages.map(([p, t]) => `<a href="${p}">${esc(t)}</a>`).join(' · ')}</td></tr>`).join('');
  const subject = encodeURIComponent(`Course enquiry - ${c.label}`);
  return `
    <section data-training-release="city-courses" aria-label="${esc(fill(cc.h2, vars))}">
      <h2>${esc(fill(cc.h2, vars))}</h2>
      <p>${esc(fill(cc.intro, vars))}</p>
      <table><caption>${esc(cc.caption)}</caption><thead><tr>${cc.columns.map((h) => `<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table>
      <p>${esc(fill(cc.packages, vars))} ${cc.advanced}</p>
      <h3>${esc(cc.practicalH3)}</h3>
      <ul>${cc.practical.map((p) => `<li>${fill(p, vars)}</li>`).join('')}</ul>
      <p>${fill(cc.fees[c.fees], vars)} <a href="/contact?service=training&amp;subject=${subject}"><strong>${esc(fill(cc.ctaText, vars))}</strong></a>${esc(cc.ctaAfter)}</p>
    </section>`;
}

export function canadaHtml(label) {
  const c = COPY.canada;
  const items = c.items.map(([t, d, href]) => `<li><strong><a href="${href}">${esc(t)}</a></strong>: ${d}</li>`).join('');
  return `
    <section data-training-release="canada-lead" aria-label="${esc(c.h2)}">
      <h2>${esc(c.h2)}</h2>
      <p>${esc(c.intro)}</p>
      <ul>${items}</ul>
      <p>${esc(fill(c.after, { label }))}</p>
    </section>`;
}

export function sessionsHtml(path, now = BUILD_DATE) {
  const rows = sessionRows(path, SESSIONS, now);
  if (!rows.length) return '';
  return `
    <section data-training-release="sessions" aria-label="Scheduled sessions">
      <h2>Scheduled sessions</h2>
      <table><caption>Scheduled course sessions</caption><thead><tr><th scope="col">Course</th><th scope="col">Dates</th><th scope="col">Format</th><th scope="col">Venue</th></tr></thead><tbody>${rows.map((r) => `<tr><th scope="row">${esc(r.course)}</th><td>${esc(r.dates)}</td><td>${esc(r.format)}</td><td>${esc(r.venue)}</td></tr>`).join('')}</tbody></table>
      <p><a href="/contact?service=training&amp;subject=Scheduled%20session">Ask about a scheduled session</a>.</p>
    </section>`;
}

// ── Hyderabad ─────────────────────────────────────────────────────────────
export function hyderabadBodyHtml(keep = '') {
  const h = COPY.hyderabad;
  const v = { address: HYDERABAD_ADDRESS };
  const levels = h.levels.map(([t, d, href]) => `<li><strong><a href="${href}">${esc(t)}</a></strong>: ${esc(d)}</li>`).join('');
  const cc = COPY.cityCourses;
  const pv = { label: 'Hyderabad' };
  const rows = methodRows().map((r) => `<tr><th scope="row">${esc(r.method)}</th><td>${r.l1}</td><td>${r.l2}</td><td>${r.pages.map(([p, t]) => `<a href="${p}">${esc(t)}</a>`).join(' · ')}</td></tr>`).join('');
  const faq = h.faq.map(([q, a]) => `<h3>${esc(q)}</h3><p>${esc(fill(a, v))}</p>`).join('\n      ');
  const related = h.related.map(([href, t]) => `<li><a href="${href}">${esc(t)}</a></li>`).join('');
  return `  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/training">Training</a><a href="/training-india">India</a><a href="/ndt-training-online">Online</a><a href="/contact">Contact</a></nav></header>
  <main>
    <h1>${esc(h.h1)}</h1>
    <section data-citation-block="answer" data-training-release="hyderabad" aria-label="Direct answer">
      <p>${esc(h.intro)}</p>
    </section>
    <p>${esc(h.leadBy)}</p>
    <h2>${esc(h.coursesH2)}</h2>
    <p>${esc(h.coursesIntro)}</p>
    <ul>${levels}</ul>
    <table><caption>${esc(cc.caption)}</caption><thead><tr>${cc.columns.map((c) => `<th scope="col">${esc(c)}</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table>
    <p>${esc(fill(cc.packages, { l1: packageHours(HOURS, 0), l2: packageHours(HOURS, 1) }))} ${cc.advanced}</p>
    <h2>${esc(h.practicalH2)}</h2>
    <ul>${cc.practical.map((p) => `<li>${fill(p, pv)}</li>`).join('')}</ul>
    <h2>${esc(h.officeH2)}</h2>
    <p>${esc(fill(h.office, v))}</p>
    <h2>${esc(h.otherSchemesH2)}</h2>
    <p>${esc(h.otherSchemes)}</p>
    <h2>${esc(h.faqH2)}</h2>
      ${faq}
    <h2>${esc(h.ctaH2)}</h2>
    <p>${esc(h.cta)} <a href="${h.ctaHref.replace(/&/g, '&amp;')}"><strong>${esc(h.ctaText)}</strong></a>. ${esc(cc.fees.india)}</p>
    <ul>${related}</ul>${keep}
  </main>`;
}

function hyderabadStructuredData(path) {
  const h = COPY.hyderabad;
  const v = { address: HYDERABAD_ADDRESS };
  return {
    '@context': 'https://schema.org',
    '@graph': [
      courseNodeFor(path),
      { '@type': 'FAQPage', mainEntity: h.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: fill(a, v) } })) },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Training', item: `${SITE}/training` },
        { '@type': 'ListItem', position: 3, name: 'NDT training India', item: `${SITE}/training-india` },
        { '@type': 'ListItem', position: 4, name: 'Hyderabad', item: `${SITE}${path}` },
      ] },
    ],
  };
}

/** Keep the late, system-wide blocks (related links, next steps, coverage) when the page body is rebuilt. */
function keptBlocks(body) {
  const out = [];
  const rx = /<(nav|section)\b[^>]*data-(?:keyword-links|next-steps|cycle|coverage|product-video|product-shots)[^>]*>[\s\S]*?<\/\1>/g;
  let m;
  while ((m = rx.exec(body)) !== null) out.push('\n    ' + m[0]);
  return out.join('');
}

// ── the hook ──────────────────────────────────────────────────────────────
export function applyTrainingReleaseRoute(route) {
  if (!route || !route.path || typeof route.bodyContent !== 'string') return route;
  const path = route.path;
  let body = route.bodyContent;
  let sd = route.structuredData;
  let meta = {};

  if (path === COPY.hyderabad.path) {
    body = hyderabadBodyHtml(keptBlocks(body));
    sd = hyderabadStructuredData(path);
    meta = { title: COPY.hyderabad.title, ogTitle: COPY.hyderabad.title, description: COPY.hyderabad.description, ogDesc: COPY.hyderabad.description };
    stats.hyderabad++;
  } else {
    ({ body, sd } = applyRules(path, body, sd));
    // descriptions take the same text rules (e.g. the "~80 classroom hours" UT Level II snippet)
    for (const key of ['description', 'ogDesc']) {
      if (typeof route[key] !== 'string') continue;
      let d = route[key];
      for (const [, paths, rx, , text] of RULES) if (text !== null && appliesTo(paths, path)) d = d.replace(new RegExp(rx.source, rx.flags), text);
      if (d !== route[key]) meta[key] = d;
    }
    if (COPY.canada.paths.includes(path) && !body.includes('data-training-release="canada-lead"')) {
      const label = (route.naTraining && route.naTraining.name) || (path === '/ndt-training-canada' ? 'Canada' : path.replace('/ndt-training-', '').split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' '));
      body = insertAfterIntro(body, canadaHtml(label));
      stats.canada++;
    }
    if (path === COPY.nearMe.path && !body.includes('data-training-release="near-me"')) {
      body = body.includes('class="training-paths"') ? insertAfterSection(body, '<section class="training-paths"', nearMeHtml()) : insertAfterSection(body, 'id="training-pathway"', nearMeHtml());
      stats.nearMe++;
    }
    if (path === COPY.onlinePointer.path && !body.includes('data-training-release="near-me-pointer"')) {
      body = insertAfterIntro(body, onlinePointerHtml());
      stats.onlinePointer++;
    }
    // 2026-10-16: certification facts for Canadian training pages (after the Canada lead when present).
    body = applyCanadaCertification({ path, bodyContent: body }).bodyContent;
    if (CITY[path] && !body.includes('data-training-release="city-courses"')) {
      body = body.includes('class="training-paths"') ? insertAfterSection(body, '<section class="training-paths"', cityCoursesHtml(path)) : insertAfterIntro(body, cityCoursesHtml(path));
      stats.cityCourses++;
    }
  }

  if (COURSE_PATHS.includes(path)) {
    // inline JSON-LD in the body: drop older Course nodes (and apply the copy rules)
    body = body.replace(/<script type="application\/ld\+json"([^>]*)>([\s\S]*?)<\/script>/g, (m0, attrs, json) => {
      try {
        const j = dropCourses(JSON.parse(json));
        if (isEmptyLd(j)) return '';
        return `<script type="application/ld+json"${attrs}>${JSON.stringify(j).replace(/</g, '\\u003c')}</script>`;
      } catch { return m0; }
    });
    const course = courseNodeFor(path);
    if (course) {
      sd = withCourse(sd, course);
      stats.course++;
      const sess = sessionsHtml(path);
      if (sess && !body.includes('data-training-release="sessions"')) {
        body = body.includes('class="course-facts"') ? insertAfterSection(body, '<section class="course-facts"', sess)
          : body.includes('data-training-release="city-courses"') ? insertAfterSection(body, 'data-training-release="city-courses"', sess)
          : body.includes('data-training-release="near-me"') ? insertAfterSection(body, 'data-training-release="near-me"', sess)
          : insertBeforeMainEnd(body, sess);
        stats.sessions++;
      }
    }
  }
  // 2026-10-12: /training now owns "ndt training near me" (its near-me section); the old
  // near-me page stays for the generators that link to it but points its canonical at /training,
  // so the two pages stop splitting the query (CLAUDE.md §56).
  if (path === '/ndt-training-near-me') meta = { ...meta, canonical: 'https://atlantisndt.com/training' };
  recordTrainingGeoHonesty(path, body, route.noindex === true);
  return { ...route, ...meta, bodyContent: body, structuredData: sd };
}

/** Build-time gate: data shapes, Course validity on every covered path, links built, no prices in our copy. */
export function assertTrainingReleaseClean(BUILT_PATHS) {
  const errs = [];
  errs.push(...validateSessionsData(SESSIONS, BUILT_PATHS).map((e) => `course-sessions.json: ${e}`));
  for (const path of COURSE_PATHS) {
    if (BUILT_PATHS && !BUILT_PATHS.has(path)) { errs.push(`course path not built: ${path}`); continue; }
    const c = courseNodeFor(path);
    const p = validateCourseNode(c);
    // PAUT, TOFD and Level II recertification have no SNT-TC-1A row: their workload is an
    // owner input (course-facts.json courseHours). Everything else must validate.
    const pending = FACTS.pages[path] && FACTS.pages[path].hoursKey == null && !FACTS.pages[path].hoursKeys && !(FACTS.pages[path].courseHours > 0);
    if (p.length && !(pending && p.every((x) => /courseWorkload or courseSchedule/.test(x)))) errs.push(`${path}: Course markup invalid — ${p.join(', ')}`);
  }
  const copyNoNotes = JSON.stringify(COPY, (k, v) => (k.startsWith('_') ? undefined : v));
  const blob = copyNoNotes + RULES.map((r) => String(r[3]).replace(/\$\d/g, '') + (r[4] || '')).join(' ');
  const money = blob.match(/(?:\$|USD|AED|SAR|INR|₹|€|£)\s?\d/g);
  if (money) errs.push(`training release copy contains a currency figure: ${[...new Set(money)].join(', ')}`);
  if (/\b(?:19|20)\d\d-\d\d-\d\d\b/.test(blob)) errs.push('training release copy contains a date; dates live only in course-sessions.json');
  const hrefs = [...blob.matchAll(/href=\\?"(\/[^"#?\\]*)/g)].map((m) => m[1]);
  const links = [...hrefs, ...COPY.nearMe.cities.map((c) => c[0]), ...COPY.canada.items.map((i) => i[2]), ...COPY.hyderabad.related.map((r) => r[0]), ...COPY.hyderabad.levels.map((l) => l[2])];
  if (BUILT_PATHS) for (const l of new Set(links)) if (l !== '/contact' && !BUILT_PATHS.has(l)) errs.push(`training release links to a page that is not built: ${l}`);
  if (!HYDERABAD_ADDRESS) errs.push('Hyderabad address missing from src/data/about-2026-10.json');
  assertCanadaCertificationClean(BUILT_PATHS); // throws on its own errors
  if (errs.length) throw new Error('training release 2026-10 gate failed:\n  ' + errs.join('\n  '));
  return true;
}

export function trainingReleaseStats() {
  return `🎓 Training release 2026-10-12: ${JSON.stringify({ ...stats, coursePaths: COURSE_PATHS.length, l1Package: packageHours(HOURS, 0), l2Package: packageHours(HOURS, 1), utLevelI: classroomHours(HOURS, ['UT'], [0]) })}\n🍁 Canada certification block: ${JSON.stringify(canadaCertStats)}\n${trainingGeoHonestyStats()}`;
}
