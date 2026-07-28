/**
 * Thin-page upgrade — 2026-07-28, next cycle.
 * ─────────────────────────────────────────────────────────────────────────────
 * The post-deploy audit left 198 sitemap URLs under 400 rendered words. Thin
 * pages at this scale are a site-wide quality signal, not just 198 weak URLs:
 * Google's site-level quality assessment reads the whole corpus, so a large
 * shallow tail drags on pages that are individually fine.
 *
 * The clusters, and what each was missing:
 *   ~90  /services/{method}-inspection-{city}   method described in one sentence
 *   ~35  /corporate-ndt-training/{city}         no programme or local substance
 *    20  /ndt-consulting-{state}                template with a state name
 *    16  /consulting/ndt-consulting-{city}      same, city variant
 *    10  /case-studies/*                        headline + one-line summary only
 *     4  /tools/*                               calculator with no methodology
 *     4  /standards/*                           source JSON entry was short
 *    ~19 hub and misc pages                     including /glossary at 107 words
 *
 * Everything added here is substantive and verifiable: method physics and
 * detection capability, the codes that actually govern each examination, the
 * evidence chain a client audit tests, and — for city pages — local industrial
 * context drawn from the same research the DT/ERP pages render. Nothing is
 * padded, no claim is invented, and no existing content is removed: every
 * generator APPENDS to the body already present.
 *
 * Pricing policy (CLAUDE.md §18): no Atlantis price appears anywhere below.
 */

import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { upgradeStragglerPages } from './thin-page-stragglers.mjs';
import { addAuthoredFaqs } from './faq-content.mjs';
import { loadCityContext, upgradeIndustryPages, upgradeInspectionPages, upgradeCertTrainingPages } from './noindex-recovery.mjs';
import { applyErpGenericPositioning, assertNoNumbersInErpHubMeta } from './erp-generic-positioning.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const SRC = resolve(HERE, '../src');

/** Committed GSC snapshot — decides which pages are worth authoring FAQs for. */
let DEMAND_SNAPSHOT = {};
try {
  DEMAND_SNAPSHOT = JSON.parse(readFileSync(resolve(HERE, 'seo-demand-90d.json'), 'utf-8')).pages || {};
} catch { /* optional */ }

const esc = (s) =>
  String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const ul = (items) => `<ul>${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`;

const ACRONYMS = new Set(['ndt', 'ut', 'rt', 'mt', 'pt', 'vt', 'et', 'paut', 'tofd', 'mfl', 'ae', 'lrut', 'iris', 'ect', 'uae', 'usa', 'uk', 'lng', 'api', 'asme', 'aws', 'iso', 'erp', 'dc', 'st']);
const label = (slug) =>
  String(slug)
    .split('-')
    .map((w) => (ACRONYMS.has(w.toLowerCase()) ? w.toUpperCase() : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(' ');

/** Append a section before </main>, or at the end if there is no main element. */
function append(route, html) {
  const body = route.bodyContent || '  <main>\n  </main>';
  route.bodyContent = /<\/main>\s*$/.test(body)
    ? body.replace(/<\/main>\s*$/, `${html}\n  </main>`)
    : body + html;
}

/* ────────────────────────────────────────────────────────────────────────────
 * Method knowledge — used by /services/{method}-inspection-{city}
 * Written against ASME Section V, the ASTM E-series and the ISO 17640/17636
 * family; each entry states what the method physically detects and, just as
 * importantly, what it does not.
 * ────────────────────────────────────────────────────────────────────────── */

const METHODS = {
  tofd: {
    name: 'Time-of-Flight Diffraction (TOFD)',
    principle:
      'TOFD places a transmitter and receiver either side of a weld and measures the arrival time of sound diffracted from the tips of a discontinuity, rather than the amplitude reflected from its face. Because sizing depends on diffraction timing rather than reflection amplitude, TOFD is largely insensitive to flaw orientation — the weakness that limits conventional pulse-echo on planar defects that are not favourably aligned to the beam.',
    detects: [
      'Planar defects regardless of orientation — lack of fusion, lack of penetration, and cracks that pulse-echo can miss entirely',
      'Through-wall height with accuracy typically far better than amplitude-based sizing, which is what fitness-for-service assessment actually needs',
      'Flaw growth between inspections, because the same scan geometry reproduces closely',
      'Embedded defects across the full weld volume in a single pass along the weld',
    ],
    limits:
      'TOFD has a near-surface dead zone from the lateral wave and a back-wall zone that both require complementary coverage — normally pulse-echo or phased array. It also produces a grey-scale image that demands a trained interpreter; TOFD data reviewed by someone without specific TOFD qualification is a common source of both missed and over-called indications.',
    codes:
      'ASME Section V Article 4 Mandatory Appendix III, ASME Code Case 2235 for ultrasonic examination in lieu of radiography, ISO 10863, ISO 15626 for acceptance, and API 1104 Annex A for pipeline girth welds.',
    when: 'Choose TOFD where through-wall sizing drives a fitness-for-service or acceptance decision, where radiography is impractical for access or radiation-safety reasons, or where weld volume must be covered quickly on long seams.',
  },
  paut: {
    name: 'Phased Array Ultrasonic Testing (PAUT)',
    principle:
      'A phased array probe contains many small elements pulsed with controlled time delays, which steers and focuses the beam electronically. One probe position can therefore sweep a range of angles (sectorial scan) or step a focal law along the array (linear scan), producing an imaged cross-section of the weld or component instead of a single A-scan trace.',
    detects: [
      'Weld defects across a range of angles from one probe position — lack of fusion, lack of penetration, slag and cracking',
      'Corrosion mapping with encoded C-scans that reproduce between campaigns',
      'Crack sizing and depth measurement with imaged confirmation of the interpretation',
      'Complex geometry — nozzles, branch connections, dissimilar-metal welds — where fixed-angle probes cannot achieve coverage',
    ],
    limits:
      'Coverage must be demonstrated by a documented scan plan; a phased array scan that looks thorough on screen can still leave a volume unexamined if the focal laws and probe positions were never modelled. Encoded scanning also needs surface condition and access good enough to run the scanner reliably.',
    codes:
      'ASME Section V Article 4 Mandatory Appendices IV and V, ASME Section VIII Division 1 Appendix 12, ISO 13588, ISO 19285 for acceptance, API 1104 Annex A, and AWS D1.1 Annex H for ultrasonic weld examination.',
    when: 'Choose PAUT where you need imaged, encoded, reproducible data — for repeat corrosion surveys, for weld examination replacing radiography, or where geometry defeats conventional angle-beam probes.',
  },
  'guided-wave': {
    name: 'Guided Wave Ultrasonic Testing (GWUT / LRUT)',
    principle:
      'A collar of transducers around the pipe launches low-frequency guided waves that travel along the pipe wall for tens of metres in each direction. Reflections from changes in cross-section are interpreted to locate areas of metal loss, so long runs are screened from a single access point rather than examined metre by metre.',
    detects: [
      'Metal loss under insulation, under road and rail crossings, and in buried or sleeved sections without excavation',
      'Corrosion at pipe supports and touchpoints that conventional UT cannot reach',
      'Changes in cross-section over long inaccessible runs from a single collar position',
      'Screening of a large length quickly to target where detailed UT or radiography should then be applied',
    ],
    limits:
      'Guided wave is a screening tool, not a sizing tool. It reports an estimated cross-sectional area change over a region, not a wall thickness at a point, and its range is heavily reduced by heavy coatings, bitumen wrap, tight bends, branch connections and product deposits. Every significant indication needs follow-up by conventional UT or radiography before any fitness-for-service decision.',
    codes:
      'ASTM E2775 and ASTM E2929 for guided wave examination of piping, ISO 18211 for long-range testing, applied within the inspection planning frameworks of API 570 and API RP 583 for corrosion under insulation.',
    when: 'Choose guided wave where the problem is finding which part of a long, inaccessible run needs attention — insulated lines, sleeved crossings and pipe racks — and pair it with a sizing method for the areas it flags.',
  },
  'acoustic-emission': {
    name: 'Acoustic Emission Testing (AE)',
    principle:
      'Acoustic emission listens rather than interrogates. Sensors on the structure detect the transient elastic waves released when a defect grows, when a crack face rubs, or when a leak turbulently escapes, while the item is under a controlled stress or pressure. It is a global, real-time method: a small number of sensors monitor an entire vessel or tank rather than a single location.',
    detects: [
      'Active, growing defects during a controlled pressure or load test — the distinction between a flaw that is stable and one that is propagating',
      'Tank floor corrosion activity and leakage on in-service aboveground storage tanks without taking them out of service',
      'Crack growth in pressure vessels, spheres and reactors during hydrotest or over-pressure',
      'Leakage in valves, heat exchangers and buried lines',
    ],
    limits:
      'AE locates and ranks activity; it does not size or characterise a defect. Every zone it flags requires follow-up by UT, radiography or visual examination to determine what is actually there. It is also sensitive to background noise, so test conditions and sensor coupling govern the quality of the result far more than in other methods.',
    codes:
      'ASME Section V Article 11 and Article 12, ASTM E569, ASTM E1930 for pressure vessel examination, ASTM E1067 for fibre-reinforced vessels, and API 653 Annex E practice for tank floor evaluation.',
    when: 'Choose AE where the question is "is anything actively degrading right now, and where" across a large item, particularly where taking it out of service for internal inspection is the expensive alternative.',
  },
  mfl: {
    name: 'Magnetic Flux Leakage (MFL)',
    principle:
      'MFL saturates a ferromagnetic wall with a magnetic field; where metal is missing, flux leaks out of the wall and is detected by sensors passing over the surface. It scans large ferrous areas quickly, which is why it dominates storage tank floor screening and in-line pipeline inspection.',
    detects: [
      'Tank floor corrosion and pitting from both the product side and the soil side, at scanning speeds no point-by-point method can match',
      'Pipeline wall loss during in-line inspection runs, with axial and circumferential field variants suited to different defect orientations',
      'Under-deposit and soil-side corrosion that visual examination cannot see',
      'General wall loss across large ferrous plate areas for screening before detailed UT',
    ],
    limits:
      'MFL is a screening method whose sizing accuracy depends on wall thickness, coating thickness, defect geometry and scanning speed. Indications are confirmed and sized by ultrasonic prove-up. It also degrades on thick walls, on heavily coated surfaces, and on non-ferrous materials where it does not work at all.',
    codes:
      'API 653 for aboveground storage tank inspection including floor evaluation, API 570 and ASME B31.8S for pipeline integrity assessment, ASTM E570 for flux leakage examination of ferromagnetic tubing, and POF specifications for in-line inspection performance.',
    when: 'Choose MFL to screen large ferrous areas fast — tank floors before an internal inspection scope is set, or pipeline runs where in-line inspection is available — then size with UT what MFL finds.',
  },
  'ultrasonic-testing': {
    name: 'Ultrasonic Testing (UT)',
    principle:
      'Conventional ultrasonic testing introduces high-frequency sound into the component and interprets the returned echoes. Straight-beam probes measure remaining wall and find laminations; angle-beam probes interrogate weld volume. It remains the most widely applied volumetric method because it is fast, portable and needs access to one surface only.',
    detects: [
      'Remaining wall thickness at corrosion monitoring locations, feeding corrosion-rate and remaining-life calculation',
      'Lack of fusion, lack of penetration and cracking in welds using angle-beam techniques',
      'Laminations, inclusions and mid-wall separation in plate and forgings',
      'Hydrogen-induced cracking and blistering in sour service',
    ],
    limits:
      'Amplitude-based sizing is orientation-sensitive: a planar defect poorly aligned to the beam can return little signal. Coarse-grained and austenitic materials scatter and attenuate the beam, and rough or coated surfaces degrade coupling. Where through-wall sizing matters, TOFD or phased array is the better tool.',
    codes:
      'ASME Section V Article 4 and Article 5, ASME Section VIII Division 1, AWS D1.1 Section 6, API 1104, and ISO 17640, ISO 16810 and ISO 16811.',
    when: 'Choose conventional UT for thickness surveys, corrosion monitoring and routine weld examination where access, speed and portability matter more than imaged data.',
  },
};

/* ────────────────────────────────────────────────────────────────────────────
 * City / regional context, reused from the same research the DT pages render
 * ────────────────────────────────────────────────────────────────────────── */

let CITY_CONTEXT = {};
let CORP_CITIES = [];

export async function loadContext() {
  try {
    const dt = await import(pathToFileURL(resolve(SRC, 'data/dt-city-data.mjs')).href);
    CITY_CONTEXT = dt.digitalTwinLocationContext || {};
  } catch { /* optional */ }
  // Corporate-training city research (anchor industries, named employers) lives
  // in TypeScript; transpile it here rather than depending on another module's
  // build cache, which is cleaned up at the end of the prerender run.
  if (!CORP_CITIES.length) {
    try {
      const esbuild = (await import('esbuild')).default;
      const out = resolve(HERE, '../.tsdata/thin_corporate-training-seo.mjs');
      await esbuild.build({
        entryPoints: [resolve(SRC, 'data/corporate-training-seo.ts')],
        outfile: out,
        format: 'esm',
        bundle: true,
        platform: 'node',
        logLevel: 'silent',
        plugins: [{
          name: 'alias',
          setup(b) {
            b.onResolve({ filter: /^@\// }, (a) => ({
              path: resolve(SRC, a.path.slice(2)) + (/\.(ts|tsx|json|mjs|js)$/.test(a.path) ? '' : '.ts'),
            }));
          },
        }],
      });
      const mod = await import(pathToFileURL(out).href);
      CORP_CITIES = mod.CORPORATE_TRAINING_CITIES || [];
    } catch { /* optional */ }
  }
  return { CITY_CONTEXT, CORP_CITIES };
}

export function setCorporateCities(list) {
  CORP_CITIES = Array.isArray(list) ? list : [];
}

const contextFor = (slug) => CITY_CONTEXT[slug] || null;

/* ────────────────────────────────────────────────────────────────────────────
 * 1. /services/{method}-inspection-{city|country}
 * ────────────────────────────────────────────────────────────────────────── */

const SERVICE_RE = /^\/services\/([a-z-]+?)-inspection-([a-z0-9-]+)$/;

export function upgradeServicePages(routes) {
  let n = 0;
  for (const r of routes) {
    const m = r.path.match(SERVICE_RE);
    if (!m ) continue;
    const method = METHODS[m[1]];
    if (!method) continue;
    if ((r.bodyContent || '').length > 5200) continue;

    const place = label(m[2]);
    const ctx = contextFor(m[2]);

    append(r, `
    <section aria-label="${esc(method.name)} explained">
      <h2>How ${esc(method.name)} works</h2>
      <p>${esc(method.principle)}</p>

      <h2>What it detects</h2>
      ${ul(method.detects)}

      <h2>What it will not do</h2>
      <p>${esc(method.limits)}</p>

      <h2>When ${esc(method.name)} is the right choice</h2>
      <p>${esc(method.when)}</p>

      <h2>Codes and acceptance criteria</h2>
      <p>Examinations are performed to written procedures qualified against ${esc(method.codes)} Acceptance criteria come from the construction or in-service code governing the item — ASME Section VIII for pressure vessels, ASME B31.3 for process piping, API 510, API 570 and API 653 in service, AWS D1.1 for structural steel — and the applicable edition is recorded against the examination so the disposition can be reconstructed later.</p>

      <h2>${esc(place)} context</h2>
      ${ctx ? `<p>${esc(ctx)}</p>` : `<p>Work in ${esc(place)} is scoped around the asset classes and access constraints of the local industrial base, the client's own vendor-approval regime, and the inspection intervals set by the governing in-service code. Mobilisation, permit and access planning are agreed before the crew travels, because on most sites those are the constraints that decide the cost of the campaign rather than the examination itself.</p>`}

      <h2>How the examination is controlled</h2>
      <p>Every examination carries its own evidence chain: the technician's certification for the method and level under ASNT SNT-TC-1A or ISO 9712, current on the day of inspection; the calibration status of the instrument, probes, wedges and reference blocks used, traceable under ISO 17025; and the revision of the procedure and technique sheet in force at the time. An ASNT NDT Level III reviews and signs the final disposition. That bundle is exactly what a client or accreditation audit asks for, and it is recorded as the work happens rather than assembled afterwards.</p>

      <h2>What you receive</h2>
      ${ul([
        'A report in your required format, with indications located against the component and, where relevant, against a persistent corrosion monitoring location so trends stay continuous between campaigns',
        'Raw data files in the instrument-native format plus an open export, so the dataset outlives any single supplier relationship',
        'The procedure revision, technician certification state and instrument calibration status applicable at the time of examination',
        'Where a finding affects continued service, a clear statement of the code clause that governs the acceptance decision',
      ])}

      <p>Related: <a href="/inspection-management-software">inspection management software</a> · <a href="/asset-integrity-management-software">asset integrity management software</a> · <a href="/consulting">ASNT Level III consulting</a> · <a href="/training">NDT training and certification</a> · <a href="/digital-twins">digital twin for asset integrity</a>. <a href="/contact">Request a quote for ${esc(place)}</a>.</p>
    </section>`);
    n++;
  }
  return n;
}

/* ────────────────────────────────────────────────────────────────────────────
 * 2. /corporate-ndt-training/{city}
 * ────────────────────────────────────────────────────────────────────────── */

export function upgradeCorporateTraining(routes) {
  const bySlug = new Map(CORP_CITIES.map((c) => [c.slug, c]));
  let n = 0;
  for (const r of routes) {
    const m = r.path.match(/^\/corporate-ndt-training\/([a-z0-9-]+)$/);
    if (!m ) continue;
    if ((r.bodyContent || '').length > 5200) continue;
    const c = bySlug.get(m[1]);
    const place = c?.city || label(m[1]);
    const ctx = contextFor(m[1]);

    append(r, `
    <section aria-label="Corporate NDT training in ${esc(place)}">
      <h2>Why companies in ${esc(place)} run training in-house</h2>
      <p>Sending technicians to public cohorts one at a time is slow, expensive in travel, and produces inconsistent practical experience. On-site corporate training solves all three: the whole crew is qualified together, on your own equipment and specimens, against the written practice they will actually work to. For inspection contractors, the more important effect is on client audits — a cohort trained against one written practice, with documented training hours and on-the-job experience recorded consistently, produces a personnel record that survives scrutiny.</p>

      ${c?.anchorIndustries?.length ? `<h2>The ${esc(place)} industrial base</h2><p>Training in ${esc(place)} is scoped around the work that exists locally: ${esc(c.anchorIndustries.join(', '))}.${c.namedEmployers?.length ? ` Employers and asset owners in the area include ${esc(c.namedEmployers.slice(0, 6).join(', '))}.` : ''}</p>` : ''}
      ${ctx ? `<p>${esc(ctx)}</p>` : ''}

      <h2>What a corporate programme covers</h2>
      ${ul([
        'Method-level Level I and Level II training in UT, RT, MT, PT, VT and ET, with practical hours logged against your written practice',
        'Advanced method training — phased array, TOFD, corrosion mapping and guided wave — for crews moving into higher-value scopes',
        'API inspector preparation for API 510, API 570 and API 653 where the crew supports in-service inspection',
        'Written practice review and, where required, ASNT Level III examination and certification of your personnel',
        'Client-specific and operator-specific qualification preparation, where the site demands its own approval on top of ASNT or ISO 9712',
      ])}

      <h2>How delivery works</h2>
      <p>Programmes run on site at your facility using your own equipment, specimens and procedures, so what is taught matches what the crew will do the following week. Theory can be delivered ahead of the practical block through <a href="/lms">Atlantis LMS</a> to compress the on-site time, and practical assessment is supervised by an ASNT NDT Level III. Cohort size, sequence and shift pattern are set around your operation rather than a fixed public calendar — including split cohorts for crews on rotation.</p>

      <h2>What you get at the end</h2>
      ${ul([
        'Certification records for each technician per method and level, with examination results, training hours and on-the-job experience documented against the written practice revision in force',
        'Vision examination records aligned to the same currency cycle, which is the single most commonly missed item at client gate checks',
        'A qualification matrix showing which technicians can be dispatched to which scopes, ready to load into your inspection management system',
        'Recommendations on the written practice itself where the training exposes gaps between what it says and what the crew does',
      ])}

      <p>Related: <a href="/corporate-ndt-training">corporate NDT training</a> · <a href="/training">NDT training and certification</a> · <a href="/asnt-certification">ASNT certification pathways</a> · <a href="/consulting">ASNT Level III consulting</a> · <a href="/erp-modules/certification-tracking">certification tracking</a>. <a href="/contact">Discuss a cohort in ${esc(place)}</a>.</p>
    </section>`);
    n++;
  }
  return n;
}

/* ────────────────────────────────────────────────────────────────────────────
 * 3. Consulting state + city pages
 * ────────────────────────────────────────────────────────────────────────── */

const CONSULTING_BODY = (place, ctx) => `
    <section aria-label="NDT consulting in ${esc(place)}">
      <h2>What an outsourced ASNT Level III actually does</h2>
      <p>Most inspection companies do not need a full-time Level III; they need the functions a Level III performs. Those are specific and separable: authoring and signing the written practice, developing and qualifying procedures for each method offered, examining and certifying Level I and Level II personnel, validating techniques and equipment, and being available and named when a client audits the programme. Engaged as a retained service, that covers the technical accountability without carrying the salary.</p>

      ${ctx ? `<h2>The ${esc(place)} asset base and what it demands</h2><p>${esc(ctx)}</p>` : ''}

      <h2>Service lines</h2>
      ${ul([
        'Written practice authoring and revision to ASNT SNT-TC-1A, ANSI/ASNT CP-189, NAS 410 or ISO 9712, including the annual review most quality systems require and few actually perform',
        'Procedure development and approval across UT, PAUT, TOFD, RT, MT, PT, ET and VT, written against the governing construction or in-service code and qualified on representative specimens',
        'Personnel qualification and certification — general, specific and practical examinations, vision examination administration, and the experience-hour records that support them',
        'Risk-based inspection programme design under API 580 and API 581, built on measured corrosion rates rather than default rates',
        'Fitness-for-service assessment under API 579-1/ASME FFS-1 — Part 4 general metal loss, Part 5 local metal loss, Part 9 crack-like flaws',
        'ISO 17020 and ISO 17025 accreditation support, internal audit and pre-assessment against the standard the assessor will actually apply',
        'Failure investigation, root-cause analysis and expert-witness support where a finding becomes contentious',
      ])}

      <h2>Codes and client regimes covered</h2>
      <p>ASME Section V, Section VIII and Section IX; ASME B31.1 and B31.3; AWS D1.1 and D1.5; API 510, API 570, API 653, API 577, API 578 and API 1104; ISO 17635, ISO 17636 and ISO 17640; NACE/AMPP MR0175 and MR0103 for sour service. Operator-specific approvals — Aramco, ADNOC, QatarEnergy, KOC, PETRONAS, Shell and similar — are prepared against the client's own vendor-qualification checklist rather than a generic template.</p>

      <h2>How engagements are structured</h2>
      <p>Most procedure reviews and written-practice updates are returned signed and stamped within two to five business days. Larger scopes — building a multi-method programme from nothing, preparing an ISO 17020 accreditation package, or standing up an RBI programme — are scoped individually with a defined deliverable list. Work runs per-project or on retainer, and a retainer is usually the better arrangement once a company is being audited by more than one client.</p>

      <h2>What tends to be found first</h2>
      ${ul([
        'A written practice that has not been reviewed since it was adopted, and no longer matches how the crews work',
        'Technique sheets circulating in several uncontrolled versions beneath a controlled procedure',
        'Certification records complete for the certificate but missing vision examinations or documented on-the-job hours',
        'Calibration certificates held for instruments but not for probes, wedges and reference blocks — the most common ISO 17025 finding',
        'No way to reconstruct which procedure revision applied to an inspection performed two years ago',
      ])}

      <p>Related: <a href="/consulting">NDT consulting services</a> · <a href="/consulting/asnt-level-iii-consulting-services">ASNT Level III consulting</a> · <a href="/consulting/rbi-program-design">RBI programme design</a> · <a href="/consulting/fitness-for-service-api-579">fitness-for-service</a> · <a href="/inspection-management-software">inspection management software</a> · <a href="/training">NDT training</a>. <a href="/contact">Request a consultation in ${esc(place)}</a>.</p>
    </section>`;

export function upgradeConsultingPages(routes) {
  let n = 0;
  for (const r of routes) {
    const m = r.path.match(/^\/ndt-consulting-([a-z0-9-]+)$/) || r.path.match(/^\/consulting\/ndt-consulting-([a-z0-9-]+)$/);
    if (!m ) continue;
    if (m[1] === 'level-iii') continue; // hand-written hub, handled separately
    if ((r.bodyContent || '').length > 5200) continue;
    append(r, CONSULTING_BODY(label(m[1]), contextFor(m[1])));
    n++;
  }
  return n;
}

/* ────────────────────────────────────────────────────────────────────────────
 * 4. Case studies
 * ────────────────────────────────────────────────────────────────────────────
 * Existing headline claims are left exactly as they are. What is added is the
 * methodology behind that class of engagement — factual about how the work is
 * performed, with no new client claims and no invented numbers.
 * ────────────────────────────────────────────────────────────────────────── */

export function upgradeCaseStudies(routes) {
  let n = 0;
  for (const r of routes) {
    if (!/^\/case-studies\/[a-z0-9-]+$/.test(r.path) ) continue;
    if ((r.bodyContent || '').length > 4500) continue;
    const topic = label(r.path.split('/').pop());

    append(r, `
    <section aria-label="How this engagement was delivered">
      <h2>How an engagement like this is scoped</h2>
      <p>Programmes of this type start with an evidence review rather than a proposal. We look at the written practice, the procedures and technique sheets actually in circulation, the certification and calibration registers, and a sample of issued reports — then trace one report backwards to see whether the qualification state of its signatory, the calibration state of the instruments used and the procedure revision in force on that date can all be recovered. What that trace cannot produce is the real scope of the engagement, and it is almost always different from what the client expected going in.</p>

      <h2>The phases that follow</h2>
      ${ul([
        'Gap assessment against the governing codes and the client-specific approval regimes that apply to the work — documented as findings with the clause each relates to, not as generic advice',
        'Written practice and procedure remediation, authored and signed by an ASNT NDT Level III against the specific methods, materials and thickness ranges in scope',
        'Personnel qualification — general, specific and practical examinations, vision examinations, and reconstruction of training and experience records where they are incomplete',
        'Equipment and technique validation, including calibration traceability for probes, wedges and reference blocks, not only for instruments',
        'A dry-run audit against the client or accreditation checklist that will actually be applied, before the real one',
        'Handover of the evidence structure so the programme stays defensible without further external support',
      ])}

      <h2>What determines whether it holds</h2>
      <p>The technical work is rarely the difficult part. What determines whether a programme still passes an audit two years later is whether the evidence keeps being produced as a by-product of doing the work, rather than assembled by one person who knows where everything is filed. That means certification currency enforced at dispatch, calibration status enforced at dispatch, procedure revisions bound automatically to inspection records, and point-in-time recovery of all three. Where a client has no system capable of that, the programme decays quietly until the next audit surfaces it.</p>

      <h2>What transfers to your operation</h2>
      <p>The specifics of ${esc(topic.toLowerCase())} differ by asset class and jurisdiction, but the structure does not. If you are facing a client audit, an accreditation assessment, or a vendor-approval renewal, the highest-value first step is the same trace described above — pick one issued report and try to reconstruct it completely. Whatever you cannot produce is the scope.</p>

      <p>Related: <a href="/case-studies">all case studies</a> · <a href="/consulting">ASNT Level III consulting</a> · <a href="/inspection-management-software">inspection management software</a> · <a href="/asset-integrity-management-software">asset integrity management software</a> · <a href="/training">NDT training</a>. <a href="/contact">Discuss a similar programme</a>.</p>
    </section>`);
    n++;
  }
  return n;
}

/* ────────────────────────────────────────────────────────────────────────────
 * 5. Calculators and tools
 * ────────────────────────────────────────────────────────────────────────── */

export function upgradeTools(routes) {
  let n = 0;
  for (const r of routes) {
    if (!/^\/(tools\/[a-z0-9-]+|ndt-erp-roi-calculator|digital-twin-readiness-quiz)$/.test(r.path) ) continue;
    if ((r.bodyContent || '').length > 4500) continue;
    const topic = label(r.path.split('/').pop());

    append(r, `
    <section aria-label="How to use this tool">
      <h2>What this tool is actually modelling</h2>
      <p>Every estimate of this kind rests on assumptions, and the useful ones state them. The output here is a starting figure for a conversation with your own operations and finance teams — not a quotation, and not a substitute for a scoped assessment. Inputs you supply about your own operation dominate the result; industry defaults are only used where you have no figure of your own, and they are deliberately conservative.</p>

      <h2>Getting the inputs right</h2>
      ${ul([
        'Use your own historical figures wherever you have them. Operations teams are usually accurate about downtime and mobilisation cost because they have lived through the events; vendor benchmarks are not.',
        'Count the non-billable time honestly — report preparation, audit-evidence assembly, standby and rework are where inspection businesses actually lose margin, and they are routinely excluded from estimates.',
        'Separate one-off transition effort from recurring effect. Benefits that depend on a workflow change take one to two inspection cycles to appear, not one month.',
        'Test the result at the edges. If the conclusion reverses when a single input moves 20%, the conclusion is the input, not the model.',
      ])}

      <h2>How to read the output</h2>
      <p>Treat the figure as a range, not a point. In practice the largest and most reliable component of value in inspection operations is time recovered from work that produces no revenue — report formatting, chasing certification and calibration records, and assembling evidence for audits. The least reliable components are those that assume immediate behaviour change across a whole organisation. Weight your interpretation accordingly, and if you are building an internal business case, present the conservative end.</p>

      <h2>What it does not tell you</h2>
      <p>It does not tell you whether your data is in a state to support the change, which is usually the real constraint. Before committing to any programme on the strength of a calculator, check whether you can reconstruct one issued inspection report end to end — technician qualification, instrument calibration and procedure revision as at the date of inspection. If you cannot, that gap will consume more of the timeline than anything this tool models.</p>

      <p>Related: <a href="/tools">all NDT tools</a> · <a href="/inspection-management-software">inspection management software</a> · <a href="/asset-integrity-management-software">asset integrity management software</a> · <a href="/consulting">ASNT Level III consulting</a>. <a href="/contact">Ask for a scoped assessment</a> instead of an estimate.</p>
    </section>`);
    n++;
  }
  return n;
}

/* ────────────────────────────────────────────────────────────────────────────
 * 6. Standards pages whose source JSON entry was short
 * ────────────────────────────────────────────────────────────────────────── */

export function upgradeStandardsPages(routes) {
  let n = 0;
  for (const r of routes) {
    if (!/^\/standards\/[a-z0-9-]+$/.test(r.path) ) continue;
    if ((r.bodyContent || '').length > 4200) continue;
    const code = label(r.path.split('/').pop()).replace(/\bE(\d)/, 'E$1');

    append(r, `
    <section aria-label="Applying ${esc(code)} in practice">
      <h2>How a standard like this is applied in an inspection programme</h2>
      <p>A standard is only half of the requirement. It defines how an examination is performed and, in some cases, how results are classified — but the acceptance criteria that decide whether a component stays in service normally come from the construction or in-service code governing the item, not from the examination standard itself. Confusing the two is one of the more common findings in a procedure review: a procedure that correctly cites the examination standard but applies acceptance criteria from the wrong code or the wrong edition.</p>

      <h2>What has to be in place for compliance to be demonstrable</h2>
      ${ul([
        'A written procedure qualified against this standard for the specific materials, thickness ranges and geometries in scope — not a generic procedure covering everything',
        'Personnel certified for the method and level under ASNT SNT-TC-1A, ANSI/ASNT CP-189, NAS 410 or ISO 9712, current on the date the examination was performed',
        'Equipment, probes and reference standards in calibration on that date, with traceability to a national standard under ISO 17025',
        'The applicable edition of the standard recorded against the examination, so historical work stays assessed under the edition then in force',
        'Technique sheets under the same revision control as the procedure above them — the most frequently uncontrolled document in an otherwise compliant quality system',
      ])}

      <h2>Edition changes</h2>
      <p>When a new edition is issued, new work moves to it from a defined effective date that you set and record; work already performed stays assessed under the edition in force at the time. Retrospectively applying a new edition to historical dispositions invalidates the original acceptance decision and creates a substantially larger problem than the one being solved.</p>

      <h2>Where this usually goes wrong</h2>
      <p>Not in the technical content, but in reconstruction. An auditor picks an issued report and asks which procedure revision applied, who performed the work and whether they were qualified on that date, and whether the instrument and reference blocks were in calibration. Programmes that hold only current state can answer none of those. Binding the document revision, the qualification state and the calibration state to each inspection record as it is created turns that from an investigation into a lookup.</p>

      <p>Related: <a href="/standards">all standards</a> · <a href="/glossary">NDT glossary</a> · <a href="/consulting">ASNT Level III consulting</a> · <a href="/training">NDT training and certification</a> · <a href="/inspection-management-software">inspection management software</a>. <a href="/contact">Ask a Level III about applying ${esc(code)}</a>.</p>
    </section>`);
    n++;
  }
  return n;
}

/* ────────────────────────────────────────────────────────────────────────────
 * 7. Hub pages — a hub's job is to describe and route to its collection
 * ────────────────────────────────────────────────────────────────────────── */

const HUB_INTRO = {
  '/glossary': {
    h: 'About this glossary',
    p: 'Over 200 terms used in non-destructive testing, inspection and asset integrity, each defined in the sense the codes actually use rather than the dictionary sense. Terminology matters commercially here: written practices, procedures and client audits all turn on precise use of terms like "indication" versus "defect", "certification" versus "qualification", and "examination" versus "inspection" — distinctions that carry contractual weight.',
  },
  '/standards': {
    h: 'About this standards library',
    p: 'The codes and standards that govern NDT examinations and the in-service inspection decisions built on them — what each covers, its key requirements, which certifications reference it, and how it is applied in a working inspection programme. Examination standards define how a method is performed; construction and in-service codes define what is acceptable. Both are needed to make a disposition defensible.',
  },
  '/industry': {
    h: 'About these industry pages',
    p: 'Inspection requirements differ by industry more than by method. The damage mechanisms that are credible, the codes that govern acceptance, the regulators involved and the consequence of failure all change between a refinery, an aerospace supplier, a marine yard and a power station — and the inspection programme should change with them.',
  },
  '/case-studies': {
    h: 'About these case studies',
    p: 'Programme-level engagements rather than single inspections: written practice and procedure remediation, personnel qualification, accreditation support and integrity programme design. The pattern repeats across asset classes even when the technical detail does not.',
  },
  '/corporate-ndt-training': {
    h: 'About corporate NDT training',
    p: 'On-site cohort training run at your facility, on your equipment and specimens, against your written practice. It qualifies a whole crew consistently, produces a personnel record that survives a client audit, and avoids the travel cost and scheduling drag of sending technicians to public courses one at a time.',
  },
  '/tools': {
    h: 'About these tools',
    p: 'Free calculators and reference tools for inspection planning and business cases. Each states its assumptions; each is a starting point for a conversation with your own operations and finance teams rather than a quotation.',
  },
};

export function upgradeHubPages(routes) {
  const byPath = new Map(routes.map((r) => [r.path, r]));
  let n = 0;

  for (const [hub, copy] of Object.entries(HUB_INTRO)) {
    const r = byPath.get(hub);
    if (!r) continue;
    if ((r.bodyContent || '').length > 5000) continue;
    // /glossary had been marked noindex by the reconciler because its component
    // renders its list client-side and so extracted almost no static text. It is
    // a legitimate hub with 218 children and 12 impressions/90d, and it was also
    // sitting in sitemap-glossary.xml while noindexed — a contradictory signal.
    // Now that it carries real content, index it.
    if (r.noindex) { delete r.noindex; delete r.noindexFollow; }

    // List the hub's own children so the page routes crawlers onward.
    const children = routes
      .filter((x) => x.path.startsWith(`${hub}/`) && x.path.split('/').length === hub.split('/').length + 1 && !x.noindex)
      .slice(0, 60);

    append(r, `
    <section aria-label="${esc(copy.h)}">
      <h2>${esc(copy.h)}</h2>
      <p>${esc(copy.p)}</p>
      ${children.length ? `<h2>In this section</h2><ul>${children
        .map((c) => `<li><a href="${c.path}">${esc((c.title || c.path).replace(/\s*[|—-]\s*Atlantis NDT.*$/i, '').slice(0, 90))}</a></li>`)
        .join('')}</ul>` : ''}
      <h2>Where to go next</h2>
      <p>If you are qualifying people, start with <a href="/training">NDT training and certification</a> and the <a href="/asnt-certification">ASNT certification pathways</a>. If you are building or defending a programme, start with <a href="/consulting">ASNT Level III consulting</a>. If the problem is that the records exist but cannot be produced on demand, that is what <a href="/inspection-management-software">inspection management software</a> and the <a href="/asset-integrity-management-software">asset integrity platform</a> are for. <a href="/contact">Ask a Level III directly</a>.</p>
    </section>`);
    n++;
  }
  return n;
}

/* ────────────────────────────────────────────────────────────────────────────
 * 8. Remaining product / method hub stragglers
 * ────────────────────────────────────────────────────────────────────────── */

const PRODUCT_STRAGGLERS = {
  '/tofd-testing': 'tofd',
  '/phased-array-training': 'paut',
  '/guided-wave-testing': 'guided-wave',
};

export function upgradeMethodStragglers(routes) {
  let n = 0;
  for (const r of routes) {
    const key = PRODUCT_STRAGGLERS[r.path];
    if (!key ) continue;
    const method = METHODS[key];
    if (!method || (r.bodyContent || '').length > 5000) continue;
    append(r, `
    <section aria-label="${esc(method.name)} in depth">
      <h2>How ${esc(method.name)} works</h2>
      <p>${esc(method.principle)}</p>
      <h2>What it detects</h2>
      ${ul(method.detects)}
      <h2>Limitations worth knowing before you specify it</h2>
      <p>${esc(method.limits)}</p>
      <h2>When to choose it</h2>
      <p>${esc(method.when)}</p>
      <h2>Governing codes</h2>
      <p>${esc(method.codes)}</p>
      <p>Related: <a href="/training">NDT training and certification</a> · <a href="/consulting">ASNT Level III consulting</a> · <a href="/inspection-management-software">inspection management software</a> · <a href="/asset-integrity-management-software">asset integrity management software</a>. <a href="/contact">Request a quote or a technique review</a>.</p>
    </section>`);
    n++;
  }
  return n;
}

/* ────────────────────────────────────────────────────────────────────────────
 * Orchestrator
 * ────────────────────────────────────────────────────────────────────────── */

export async function upgradeThinPages(routes, { corporateCities } = {}) {
  await loadContext();
  await loadCityContext();
  if (corporateCities) setCorporateCities(corporateCities);
  return {
    services: upgradeServicePages(routes),
    corporate: upgradeCorporateTraining(routes),
    consulting: upgradeConsultingPages(routes),
    caseStudies: upgradeCaseStudies(routes),
    tools: upgradeTools(routes),
    standards: upgradeStandardsPages(routes),
    hubs: upgradeHubPages(routes),
    methods: upgradeMethodStragglers(routes),
    stragglers: upgradeStragglerPages(routes, append),
    // Authored Q&A for pages with real demand that render none of their own.
    // The SEO post-pass derives FAQPage schema from this visible content, so
    // the page and its structured data can never disagree.
    // The /industry, /inspection and /training permutation families were left
    // thin because every generator skipped noindex routes. They are crawled
    // regardless, and the re-index decision downstream now runs on the content
    // that actually ships — so they get real content either way.
    industry: upgradeIndustryPages(routes, append),
    inspection: upgradeInspectionPages(routes, append),
    certTraining: upgradeCertTrainingPages(routes, append),
    faqs: addAuthoredFaqs(routes, append, DEMAND_SNAPSHOT),
    // 2026-07-29 owner direction: ERP pages must read as a business management
    // platform rather than an NDT product, must carry the affordable /
    // accessible / fully customizable positioning, and must contain no numbers.
    erp: (assertNoNumbersInErpHubMeta(), applyErpGenericPositioning(routes, append)),
  };
}
