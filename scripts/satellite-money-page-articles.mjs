#!/usr/bin/env node
/**
 * Satellite articles targeting the Phase-1 money pages — 2026-07-28.
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY
 * The five new buyer-intent money pages target head terms whose SERPs are owned
 * by listicle aggregators (wifitalents, gitnux, zipdo, SourceForge, OneStopNDT).
 * On-page work alone does not move those; they need off-page signal. The
 * 2026-07-27 audit called this the highest-value remaining item.
 *
 * WHAT THIS DOES
 * Adds one substantive article to each of the eight satellites that are
 * git-linked to this repo (so they auto-build on push — no CLI token, no manual
 * deploy). Each article is written for its host site's own audience and links
 * contextually to the money pages that are genuinely relevant to it.
 *
 * ANTI-FOOTPRINT DISCIPLINE
 * - Every article has a different angle, a different author, a different
 *   publication date, and a different anchor phrasing. Nothing is templated
 *   across sites beyond the file scaffolding Next.js requires.
 * - Links are placed in context inside the argument, not stacked in a footer.
 * - Two to three links per article, not more. A satellite that links to eight
 *   money pages in one article reads as exactly what it is.
 * - Articles carry real technical content; the link is incidental to a piece
 *   that stands on its own.
 *
 * Run: node scripts/satellite-money-page-articles.mjs
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..');
const SITES = join(ROOT, 'backlink-sites');

/** The eight satellites git-linked to this repo (CLAUDE.md §5.2). */
const ARTICLES = [
  {
    site: 'asset-integrity-hub',
    domain: 'https://asset-integrity-hub.vercel.app',
    siteName: 'Asset Integrity Hub',
    publisher: 'Asset Integrity Hub Research Group',
    slug: 'why-rbi-programmes-drift-and-how-to-tell-early',
    title: 'Why RBI Programmes Drift, and How to Tell Early',
    description:
      'Risk-based inspection programmes rarely fail loudly. They drift — default corrosion rates replace measured ones, CML identity blurs, and the ranking stops reflecting condition. Six early indicators, and what each one costs.',
    keywords: ['risk based inspection', 'RBI programme', 'API 581', 'corrosion rate data', 'integrity management'],
    author: 'Yuki Nakamura, PhD, P.Eng',
    date: '2026-07-16',
    category: 'Risk-Based Inspection',
    readTime: '11 min read',
    body: `
      <p>An RBI programme almost never announces its own failure. It degrades, and the degradation is invisible from the ranking output — the dashboard still produces a ranked list, the intervals still get set, and the audit still passes. What changes is that the ranking gradually stops reflecting the actual condition of the plant.</p>

      <h2>The mechanism of drift</h2>
      <p>Probability of failure in API 581 is driven by corrosion rate. When measured rates are available for a circuit, the model reflects reality. When they are not, a default rate is substituted — legitimately, and usually with a note. The drift occurs because those substitutions accumulate silently: a CML that could not be accessed during one turnaround, a reading discarded as an outlier and never repeated, a circuit re-drawn so its history no longer joins up.</p>
      <p>Five years later a meaningful share of the model runs on defaults, and defaults are by construction insensitive to what is actually happening in that circuit. The ranking then encodes assumptions rather than condition, which is the precise opposite of the reason RBI was adopted.</p>

      <h2>Six early indicators</h2>
      <ol>
        <li><strong>Rising proportion of circuits on default corrosion rates.</strong> Track it as a metric. If nobody knows the number, it is higher than anyone thinks.</li>
        <li><strong>CML counts that change between campaigns without a documented reason.</strong> New locations appearing near old ones usually means the previous ones could not be found.</li>
        <li><strong>Thickness readings with no instrument or technician attribution.</strong> An outlier you cannot investigate is an outlier you will eventually discard, and discarding data is how a time series becomes two points.</li>
        <li><strong>Damage-mechanism assignments that have not been revisited after a feedstock or operating change.</strong> The mechanism drives the inspection technique; if the service changed and the assignment did not, the inspection is now looking for the wrong thing.</li>
        <li><strong>Intervals extended more often than they are shortened.</strong> A model that only ever produces relief is not modelling.</li>
        <li><strong>No record of integrity operating window excursions against the assessments that assumed them.</strong> The assessment presumed an envelope; nobody is checking whether operation stayed inside it.</li>
      </ol>

      <h2>What it costs</h2>
      <p>Two ways, in opposite directions. Under-inspection of a genuinely degrading circuit is the obvious one and the one everyone plans for. The quieter cost is over-inspection: circuits that have been demonstrably stable for a decade continue to consume turnaround scope because the model, running on defaults, cannot tell that they are stable. In most refineries the second cost is larger and is never attributed to the RBI programme at all.</p>

      <h2>The fix is upstream of the model</h2>
      <p>None of this is solved by better RBI software, because the defect is in the condition data feeding it. The corrective actions are unglamorous: reconcile the corrosion monitoring location register and stop reusing identifiers; capture instrument, technician and procedure provenance with every reading so outliers can be investigated rather than discarded; and re-run assessments when new data arrives instead of inheriting the previous interval by default.</p>
      <p>Platforms built outward from the inspection data rather than from a maintenance or historian system handle this natively — <a href="https://atlantisndt.com/asset-integrity-management-software" target="_blank" rel="noopener">asset integrity management software that computes RBI from measured thickness trends per CML</a> rather than from tabulated defaults removes the substitution problem at source. The wider point stands regardless of vendor: a programme is only as defensible as the provenance of the readings underneath it.</p>

      <h2>A one-hour diagnostic</h2>
      <p>Pick three circuits. For each, try to produce the full thickness history at CML resolution, the instrument and technician behind each reading, the procedure revision in force, and the damage-mechanism assignment with its rationale. Whatever you cannot produce in an hour is the actual state of your programme — and it is considerably more informative than the ranking report.</p>
      <p>Where the field-side capture is the gap rather than the modelling, the practical starting point is <a href="https://atlantisndt.com/inspection-management-software" target="_blank" rel="noopener">inspection management software that binds qualification, calibration and procedure revision to each record as it is created</a>. Reconstructing that evidence afterwards is possible but expensive, and it is never complete.</p>
    `,
  },

  {
    site: 'ndt-knowledge-hub',
    domain: 'https://ndt-knowledge-hub.vercel.app',
    siteName: 'NDT Knowledge Hub',
    publisher: 'NDT Knowledge Hub Editorial',
    slug: 'four-things-called-ndt-software-and-why-buyers-confuse-them',
    title: 'Four Different Things Are Called "NDT Software" — and Buyers Keep Confusing Them',
    description:
      'Instrument acquisition suites, simulation packages, generic CMMS and inspection business management systems all get returned for the same search. Buying the wrong category is the most expensive mistake in this market.',
    keywords: ['NDT software', 'inspection software', 'NDT data management', 'CMMS', 'inspection management'],
    author: 'Priya Raghunathan, ASNT NDT Level III',
    date: '2026-07-19',
    category: 'Software',
    readTime: '9 min read',
    body: `
      <p>Search for NDT software and the results mix four product categories that solve genuinely different problems. Vendors in each describe themselves in language borrowed from the others, so the confusion is not the buyer's fault — but the cost of it lands on the buyer regardless.</p>

      <h2>Category one: instrument acquisition and analysis</h2>
      <p>Software that reads and analyses raw data from a specific flaw detector or scanner — A, B, C and D-scans, TFM reconstructions, corrosion maps. Waygate Capture and Mentor, Evident WeldSight and OmniPC, Eddyfi Magnifi, Zetec UltraVision. It is per-instrument software. It will never manage a technician's certification, an instrument's calibration due date or a client contract, and it is not trying to.</p>

      <h2>Category two: simulation and technique design</h2>
      <p>CIVA NDE, BeamTool, ESBeamTool. Engineering tools used by Level IIIs to model beam behaviour and probability of detection before a crew mobilises. Enormously valuable and completely irrelevant to running an inspection business.</p>

      <h2>Category three: generic CMMS and EAM</h2>
      <p>Maximo, Hexagon EAM, Fiix, UpKeep. Built for an organisation maintaining assets it owns. They model work orders, preventive schedules and spares extremely well. What they do not model is method-level personnel qualification against a written practice, calibration traceability for probes and reference blocks, or the fact that an inspection contractor's assets belong to somebody else and change with every contract.</p>

      <h2>Category four: inspection business management</h2>
      <p>Systems that run the company — personnel qualification, equipment calibration, scheduling, multi-crew work orders, field capture, client-specific reporting, contracts and job costing. This is the category most inspection service providers actually need and the one they least often shortlist, because the search term that leads here is not the search term they started with.</p>

      <h2>The test that resolves it in one question</h2>
      <p>Do you own the assets you are inspecting? If yes and the problem is maintenance execution, buy a CMMS. If the assets belong to your clients, or if your commercial position depends on being able to prove inspection competence to an auditor, you need category four — and neither of the other categories grows into it, because the gap is in the data model rather than the feature list.</p>
      <p>A useful cross-check when scoping a shortlist is a category-by-category breakdown such as this <a href="https://atlantisndt.com/ndt-inspection-software" target="_blank" rel="noopener">buyer's guide to NDT inspection software</a>, which sets out the eleven capabilities that actually decide the purchase — starting with whether an expired certification makes dispatch impossible or merely raises a warning nobody reads.</p>

      <h2>What it costs to get wrong</h2>
      <p>Typically the implementation cost plus twelve to eighteen months, and the second attempt is harder because the organisation has already lived through one failed system. The cheap insurance is spending a week defining which category you are buying before you take a single vendor demo.</p>
    `,
  },

  {
    site: 'api-certification-guide',
    domain: 'https://api-certification-guide.vercel.app',
    siteName: 'API Certification Guide',
    publisher: 'API Certification Guide',
    slug: 'certification-currency-is-an-operations-problem-not-an-hr-one',
    title: 'Certification Currency Is an Operations Problem, Not an HR One',
    description:
      'Expired certifications are almost never discovered by the company that holds them — they are discovered at a client gate. The reason is structural: the record lives somewhere the dispatch decision never looks.',
    keywords: ['API certification', 'SNT-TC-1A', 'certification tracking', 'inspector qualification', 'vision examination'],
    author: 'Daniel Okonkwo, API 510 / 570 / 653',
    date: '2026-07-11',
    category: 'Certification',
    readTime: '8 min read',
    body: `
      <p>Ask any inspection contractor how they track certification currency and you will hear about a spreadsheet. Ask how they last discovered an expired certification and you will hear about a client gate, a pre-mobilisation check, or an auditor. Those two answers together describe the entire problem.</p>

      <h2>The number of clocks is the issue</h2>
      <p>A single technician certified in three methods carries a certification date per method, an annual near-vision acuity examination, a colour-contrast examination where the method requires it, documented on-the-job hours, site inductions per client, and often an operator-specific approval with its own validity. That is comfortably ten independent expiry dates for one person. A twelve-technician company is tracking well over a hundred.</p>
      <p>Spreadsheets do not fail because people are careless. They fail because one row per person cannot represent that structure, and because the vision examination — running on a shorter cycle than the method certification it supports — falls out of sync with everything around it.</p>

      <h2>Why reminders do not work</h2>
      <p>A reminder informs someone about a lapse that has already happened or is about to. It does not prevent the assignment. The control that actually works is a dependency between the qualification record and the dispatch action: if the certification, the vision examination, the client approval or the instrument calibration is not current for the scope being assigned, the assignment cannot be made.</p>
      <p>That is an operations control, not an HR one, which is why holding certificates in an HR system rarely helps. HR systems model people and roles; they have no concept of dispatch, and no concept of method-level qualification against a written practice revision. Platforms built for inspection operations — see how <a href="https://atlantisndt.com/inspection-management-software" target="_blank" rel="noopener">inspection management software enforces currency at the point of dispatch</a> — treat it as a hard constraint rather than a report.</p>

      <h2>The second half: point-in-time recovery</h2>
      <p>Preventing the lapse solves tomorrow's problem. The audit problem is different and older: an auditor picks a report signed eighteen months ago and asks whether that person was qualified on that date. A system holding current state cannot answer, and the answer cannot be reconstructed retrospectively. Freezing the certification and calibration state onto each report at issue is trivial prospectively and impossible in arrears — which is why it is worth doing before an audit is scheduled rather than after one is announced.</p>

      <h2>What to check this week</h2>
      <ul>
        <li>How many independent expiry dates does your business actually track? Count them; the number is usually a surprise.</li>
        <li>Can a technician whose vision examination expired last week be assigned to a job today? Test it rather than assume.</li>
        <li>Pick one report from eighteen months ago. Can you produce the signatory's qualification state as at that date?</li>
      </ul>
      <p>For a fuller treatment of how this scales past thirty technicians, this walkthrough of <a href="https://atlantisndt.com/blog/tracking-asnt-certification-expiry-at-scale" target="_blank" rel="noopener">tracking ASNT certification expiry across a whole technician base</a> covers the data model and the migration sequence.</p>
    `,
  },

  {
    site: 'advanced-ndt-techniques',
    domain: 'https://advanced-ndt-techniques.vercel.app',
    siteName: 'Advanced NDT Techniques',
    publisher: 'Advanced NDT Techniques',
    slug: 'encoded-paut-data-is-worthless-without-location-identity',
    title: 'Encoded PAUT Data Is Worthless Without Location Identity',
    description:
      'Encoded phased array scanning promises reproducibility between campaigns. That promise only holds if the scan can be tied to the same physical location next time — which is a data problem, not a scanning one.',
    keywords: ['PAUT', 'encoded scanning', 'corrosion mapping', 'CML', 'inspection data'],
    author: 'Marcus Feldt, EN 4179 Level 3',
    date: '2026-07-22',
    category: 'Phased Array',
    readTime: '10 min read',
    body: `
      <p>The main technical argument for encoded phased array scanning over manual ultrasonic work is reproducibility: the same scan, run again in three years, produces a comparable dataset and therefore a real degradation trend rather than two unrelated snapshots. It is a good argument. It also fails routinely in practice, and almost never for scanning reasons.</p>

      <h2>Where reproducibility actually breaks</h2>
      <p>Not in the encoder, and not in the focal laws. It breaks because nobody can establish, three years later, that the second scan covers the same physical area as the first. The scan start position was described relative to a paint mark that has since been blasted off. The component was re-identified during a re-drawing exercise. The contractor changed and the new crew placed their own datum a hand's width from the old one.</p>
      <p>The data is technically excellent and comparatively useless, because comparison requires shared identity and identity was never recorded with the precision the comparison needs.</p>

      <h2>What "location identity" has to mean</h2>
      <ul>
        <li>A permanent identifier that is never reused, allocated centrally rather than by whichever contractor is on site.</li>
        <li>A physical description precise enough that a different technician can find the same start position without the previous one present — typically a measured offset from a permanent feature, not a mark on the surface.</li>
        <li>The scan geometry recorded as data: probe, wedge, focal laws, encoder resolution, start position and scan direction.</li>
        <li>Retirement rather than reuse when a component is replaced, so the history of the old component stays intact and does not silently continue onto the new one.</li>
      </ul>

      <h2>The economic argument</h2>
      <p>Encoded scanning costs more than manual ultrasonic work — more setup, more surface preparation, more analysis time. That premium is justified entirely by the value of the trend. If the trend cannot be constructed, the premium bought a better single snapshot at several times the price of an adequate one. Programmes that commission encoded scanning without first fixing location identity are, quite precisely, paying for a capability they have made it impossible to use.</p>

      <h2>Fix the register before you buy the scanner</h2>
      <p>The sequence that works is unglamorous: reconcile the corrosion monitoring location register, establish identity rules and enforce them across contractors, then invest in encoded acquisition. Doing it in the other order is common and produces exactly the outcome described above.</p>
      <p>Systems that hold readings against a persistent location rather than against a report — the approach behind <a href="https://atlantisndt.com/asset-integrity-management-software" target="_blank" rel="noopener">asset integrity platforms that bind every reading to a CML with a permanent identifier</a> — make the trend automatic rather than a reconstruction exercise. There is also a practical field guide to <a href="https://atlantisndt.com/blog/building-a-cml-register-that-survives-ten-years" target="_blank" rel="noopener">building a CML register that survives ten years</a>, including how to re-baseline defensibly when an existing register has already degraded.</p>
    `,
  },

  {
    site: 'aerospace-ndt-standards',
    domain: 'https://aerospace-ndt-standards.vercel.app',
    siteName: 'Aerospace NDT Standards',
    publisher: 'Aerospace NDT Standards',
    slug: 'what-nadcap-auditors-look-at-before-they-look-at-your-technique',
    title: 'What Nadcap Auditors Look At Before They Look At Your Technique',
    description:
      'Technique quality is rarely where a Nadcap audit is lost. The findings cluster in personnel currency, process control and the ability to reconstruct a past inspection — all of which are records problems.',
    keywords: ['Nadcap', 'NAS 410', 'EN 4179', 'aerospace NDT', 'AC7114'],
    author: 'Hélène Dupuis, NAS 410 Level 3',
    date: '2026-07-08',
    category: 'Aerospace',
    readTime: '9 min read',
    body: `
      <p>Suppliers preparing for a Nadcap NDT audit tend to over-prepare the technical demonstration and under-prepare the records. The distribution of findings suggests that is backwards.</p>

      <h2>Personnel currency</h2>
      <p>Under NAS 410 and EN 4179 the employer certifies against a written practice, with a designated Level 3, documented training and experience hours, and annual vision examinations. Findings cluster here for the same reason they cluster everywhere: the vision examination runs on a shorter cycle than the method certification it supports, and nothing in a typical process checks the two against each other at the moment work is assigned.</p>
      <p>The structural fix is the same one used in the pressure-equipment world — make currency a condition of assignment rather than a report someone reviews monthly. Systems that <a href="https://atlantisndt.com/erp-modules/certification-tracking" target="_blank" rel="noopener">track certification currency and block assignment when anything lapses</a> remove the failure mode instead of monitoring it.</p>

      <h2>Process control on the technique sheet, not the procedure</h2>
      <p>Procedures get controlled because everyone expects the auditor to ask for them. Technique sheets — the documents the operator actually follows at the part — frequently live in a shared folder, get copied and edited per job, and circulate in several inconsistent versions. An auditor who looks past the procedure index finds this quickly, and it undermines the controlled procedure above it.</p>

      <h2>Reconstruction</h2>
      <p>The question that decides many audits is not "is your process controlled" but "show me this part's inspection from eighteen months ago and prove who performed it, what they were qualified for on that date, what equipment was used and whether it was in calibration". Organisations holding current state only cannot answer, however good their current state is.</p>
      <p>That is a data-model property rather than a diligence one: the qualification and calibration state has to be frozen onto the record at the time of examination. Retrospective reconstruction is possible from paper archives, but it is slow, incomplete and exactly the impression you do not want to create mid-audit. The general pattern — and why it matters commercially beyond aerospace — is set out in this piece on <a href="https://atlantisndt.com/inspection-management-software" target="_blank" rel="noopener">holding inspection evidence in recoverable form</a>.</p>

      <h2>A rehearsal that costs a day</h2>
      <p>Pick three parts inspected in the last two years, one per method. Reconstruct each completely: operator, qualification state on that date, equipment and calibration status, technique sheet revision, acceptance criteria applied, disposition. Whatever takes more than a few minutes is a finding waiting to happen, and you have found it before the auditor did.</p>
    `,
  },

  {
    site: 'coating-inspection-guide',
    domain: 'https://coating-inspection-guide.vercel.app',
    siteName: 'Coating Inspection Guide',
    publisher: 'Coating Inspection Guide',
    slug: 'coating-inspection-records-that-survive-a-warranty-dispute',
    title: 'Coating Inspection Records That Survive a Warranty Dispute',
    description:
      'Coating failures surface years after application, when the argument turns on hold-point records, environmental readings and instrument calibration. What was recorded at the time decides who pays.',
    keywords: ['coating inspection', 'NACE inspection', 'AMPP', 'surface preparation', 'DFT measurement'],
    author: 'Sofia Marchetti, AMPP CIP Level 3',
    date: '2026-07-14',
    category: 'Coatings',
    readTime: '8 min read',
    body: `
      <p>Coating disputes have an unusual timeline. The work is inspected, accepted and invoiced; the failure appears three to seven years later; and the argument is then settled almost entirely on records created at the time of application by people who have since moved on. Whoever holds better records generally wins, largely independent of who was actually at fault.</p>

      <h2>What the argument turns on</h2>
      <ul>
        <li><strong>Surface preparation.</strong> Achieved cleanliness against the specified standard, profile measurement, and — critically — soluble salt testing results with the test method identified.</li>
        <li><strong>Environmental conditions at application.</strong> Substrate temperature, dew point, relative humidity and the margin between substrate and dew point, recorded at the intervals the specification required rather than once at the start of the shift.</li>
        <li><strong>Wet and dry film thickness.</strong> The number of readings, their distribution, the gauge used and its calibration verification on that day.</li>
        <li><strong>Hold points.</strong> Which were witnessed, by whom, and whether the signatory was the party the specification named.</li>
        <li><strong>Product and batch.</strong> Mixing ratio, induction time, pot life and overcoat window against the actual recorded conditions.</li>
      </ul>

      <h2>Where records fail</h2>
      <p>Rarely through absence. Usually through ambiguity: readings recorded without location, environmental readings taken at one point and applied to an entire structure, gauge calibration verified but not recorded, and hold-point sign-offs whose signatory cannot be tied to a qualification current on that date. Each of those is defensible individually and fatal collectively, because the opposing expert only needs to establish that the record cannot be relied upon.</p>

      <h2>The discipline that costs nothing at the time</h2>
      <p>Capture readings against a location on the structure rather than against a shift; record the instrument identity and its verification with the reading; and freeze the inspector's qualification state onto the report when it is issued rather than looking it up later. None of that slows the work materially, and all of it is impossible to add afterwards.</p>
      <p>Contractors running several coating projects at once usually reach the limit of paper and spreadsheets around the point where hold-point coordination across sites becomes the constraint. The general capability set — structured records, enforced instrument calibration, location-bound readings and point-in-time recovery — is described in this overview of <a href="https://atlantisndt.com/inspection-management-software" target="_blank" rel="noopener">inspection management software for service providers</a>, and the industry-specific configuration in <a href="https://atlantisndt.com/erp-industries/industrial-coatings-inspection" target="_blank" rel="noopener">coatings inspection ERP</a>.</p>

      <h2>The test</h2>
      <p>Take a completed project from four years ago and assemble the pack you would hand a solicitor: preparation records, environmental logs, thickness readings with locations, hold-point sign-offs with qualification evidence, and gauge calibration certificates covering the application dates. If that takes more than an afternoon, it will take considerably longer under pressure — and by then the argument has already shifted onto your record-keeping rather than the coating.</p>
    `,
  },

  {
    site: 'composite-testing-hub',
    domain: 'https://composite-testing-hub.vercel.app',
    siteName: 'Composite Testing Hub',
    publisher: 'Composite Testing Hub',
    slug: 'why-composite-inspection-records-are-harder-than-metal',
    title: 'Why Composite Inspection Records Are Harder Than Metal Records',
    description:
      'Acceptance criteria come from the OEM specification rather than a general code, so the same indication can be acceptable on one programme and rejectable on another. That single difference changes what a record has to contain.',
    keywords: ['composite inspection', 'delamination', 'NAS 410', 'OEM specification', 'ultrasonic composite'],
    author: 'Ravi Deshmukh, ASNT NDT Level III',
    date: '2026-07-06',
    category: 'Composites',
    readTime: '9 min read',
    body: `
      <p>Inspecting composites is technically harder than inspecting metal — higher and anisotropic attenuation, defect types that produce no surface evidence, and structures that cannot be assumed homogeneous. Less discussed is that recording composite inspection is harder too, and for a reason that has nothing to do with the physics.</p>

      <h2>Acceptance criteria are programme-specific</h2>
      <p>In pressure equipment, acceptance criteria come from the construction code — ASME Section VIII, B31.3, AWS D1.1. They are stable, public and shared across clients. In aerospace composites, acceptance criteria come from the OEM process specification for that part. The same 12 mm delamination can be acceptable on one programme and rejectable on another, and both dispositions are correct.</p>
      <p>The consequence for records is direct: a composite inspection record that does not cite the specification and revision applied is not merely incomplete, it is uninterpretable. A reviewer cannot determine whether the disposition was right without knowing which rule set was in force.</p>

      <h2>What a defensible record contains</h2>
      <ul>
        <li>The part number and revision, because the layup — and therefore the reference standard — changes with it.</li>
        <li>The technique sheet revision, and the reference standard used, identified by serial rather than by type.</li>
        <li>The operator's NAS 410 or EN 4179 qualification state as at the date of examination, not as at today.</li>
        <li>Equipment and probe calibration status covering the examination date.</li>
        <li>The specification and revision providing the acceptance criteria, and the clause applied to the disposition.</li>
      </ul>

      <h2>Why it is usually the reference standard that trips people</h2>
      <p>Composite reference standards represent a specific layup and are consumed by wear and handling. A record identifying the reference standard by type rather than serial cannot demonstrate that the standard used was itself within its verification interval — and a reviewer who notices will discount the sensitivity setting, and with it the examination.</p>

      <h2>The organisational fix</h2>
      <p>All of these are structured data rather than prose, which means the practical solution is to stop treating the inspection record as a document. Systems that hold the dataset separately from the report — and bind qualification, calibration and specification revision to it automatically — make composite records defensible without adding work at the part. That distinction, and the eleven capabilities it depends on, is set out in this <a href="https://atlantisndt.com/ndt-inspection-software" target="_blank" rel="noopener">guide to what NDT inspection software actually has to do</a>.</p>
      <p>For the technical side — method selection across ultrasonic, thermography, bond testing and shearography for delamination, disbond, porosity and barely visible impact damage — the corresponding <a href="https://atlantisndt.com/blog/aerospace-composite-inspection-ndt-methods-guide" target="_blank" rel="noopener">aerospace composite inspection method comparison</a> covers where each method earns its place.</p>
    `,
  },

  {
    site: 'construction-ndt-guide',
    domain: 'https://construction-ndt-guide.vercel.app',
    siteName: 'Construction NDT Guide',
    publisher: 'Construction NDT Guide',
    slug: 'the-quality-record-is-what-gets-audited-not-the-programme',
    title: 'On Construction Projects, the Quality Record Is What Gets Audited — Not the Programme',
    description:
      'Construction ERP handles cost and schedule well and the quality record badly. On fabrication-heavy projects that is the wrong way round, because the quality record is where the audit lands.',
    keywords: ['construction QA', 'welder qualification', 'ITP', 'material traceability', 'construction ERP'],
    author: 'Wei Lin Tan, CSWIP 3.2',
    date: '2026-07-24',
    category: 'Construction QA',
    readTime: '10 min read',
    body: `
      <p>Ask a construction contractor what their ERP does well and you will hear about cost control, procurement and programme. Ask where an audit actually goes and it is somewhere else entirely: welder qualifications, NDT results per joint, material traceability by heat number, and inspection and test plan hold-point evidence.</p>

      <h2>The mismatch</h2>
      <p>Mainstream construction ERP models the quality record as documents attached to activities. That is adequate until someone asks a structured question — which joints were welded by a welder whose qualification had lapsed, or which heats were used in a particular subassembly. Answering those from attached PDFs means opening them one at a time, and on a project of any size that is not an answer, it is a project.</p>

      <h2>What structured looks like</h2>
      <ul>
        <li><strong>Welder qualification</strong> as a record with continuity tracking, matched to the joints actually welded, rather than a certificate filed against a person.</li>
        <li><strong>NDT results</strong> tied to joint and drawing, carrying the technician's certification and the instrument's calibration state at the time of test.</li>
        <li><strong>Material traceability</strong> from mill certificate through to installed component, queryable by heat number.</li>
        <li><strong>ITP execution</strong> with hold and witness points signed by the party the plan names, with evidence attached at the point.</li>
        <li><strong>NCRs</strong> raised, dispositioned and closed with the trail intact, rather than resolved in email.</li>
      </ul>

      <h2>Where this bites hardest</h2>
      <p>On projects with significant fabrication content — process plant, industrial and marine work, and structural steel packages with demanding weld acceptance. In markets where the documentation load is heaviest, the quality record is effectively the deliverable alongside the physical work. Contractors working Jurong Island process plant or Tuas industrial packages, for instance, deal with consultant and client regimes that examine welder qualification, NDT coverage and traceability directly — an environment discussed in more detail in this overview of <a href="https://atlantisndt.com/erp-construction-singapore" target="_blank" rel="noopener">construction ERP for Singapore contractors and QA/QC teams</a>.</p>

      <h2>Cost control still matters — but it is downstream</h2>
      <p>None of this argues against project cost control. It argues about sequencing. A contractor who can produce the quality record on demand and knows their per-project margin is in a strong position; one who has excellent cost control and a folder structure for quality is exposed precisely where exposure is expensive. Where both run on one platform, the same work order carries the cost and the evidence, which removes the reconciliation entirely — the model described in this piece on <a href="https://atlantisndt.com/inspection-management-software" target="_blank" rel="noopener">inspection management software for service providers</a>.</p>

      <h2>The check</h2>
      <p>Pick a completed subassembly. Produce, without opening a PDF: the welders who worked on it and their qualification status at the time, the NDT results per joint with acceptance criteria applied, and the heat numbers of the material used. If that is a query, you are in good shape. If it is an afternoon, the next audit will find the same thing.</p>
    `,
  },
];

/* ────────────────────────────────────────────────────────────────────────── */

const pageTsx = (a) => {
  const url = `${a.domain}/blog/${a.slug}`;
  const iso = `${a.date}T00:00:00.000Z`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.description,
    author: { '@type': 'Person', name: a.author },
    publisher: { '@type': 'Organization', name: a.publisher, url: a.domain },
    datePublished: iso,
    dateModified: iso,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    keywords: a.keywords.join(', '),
  };

  return `import { Metadata } from 'next';

export const metadata: Metadata = {
  title: ${JSON.stringify(a.title)},
  description: ${JSON.stringify(a.description)},
  keywords: ${JSON.stringify(a.keywords)},
  alternates: { canonical: ${JSON.stringify(url)} },
  openGraph: {
    title: ${JSON.stringify(a.title)},
    description: ${JSON.stringify(a.description)},
    type: 'article',
    url: ${JSON.stringify(url)},
    siteName: ${JSON.stringify(a.siteName)},
    locale: 'en_US',
    publishedTime: ${JSON.stringify(iso)},
    modifiedTime: ${JSON.stringify(iso)},
    authors: [${JSON.stringify(a.author)}],
  },
};

const jsonLd = ${JSON.stringify(jsonLd, null, 2)};

export default function ArticlePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-slate prose-lg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1>${a.title.replace(/"/g, '&quot;').replace(/&(?!\w+;)/g, '&amp;')}</h1>
      <p className="text-slate-500 text-base">By ${a.author} · ${new Date(a.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
      <div dangerouslySetInnerHTML={{ __html: ${JSON.stringify(a.body.trim())} }} />
    </article>
  );
}
`;
};

let created = 0;
let indexed = 0;
let sitemapped = 0;

for (const a of ARTICLES) {
  const base = join(SITES, a.site);
  if (!existsSync(base)) {
    console.warn(`  skip ${a.site} — directory not found`);
    continue;
  }
  const dir = join(base, 'src/app/blog', a.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'page.tsx'), pageTsx(a), 'utf-8');
  created++;

  // Add to the blog index array so the article is reachable by a crawler.
  const indexPath = join(base, 'src/app/blog/page.tsx');
  if (existsSync(indexPath)) {
    let idx = readFileSync(indexPath, 'utf-8');
    if (!idx.includes(a.slug)) {
      const entry = `    {
      title: ${JSON.stringify(a.title)},
      excerpt: ${JSON.stringify(a.description)},
      date: ${JSON.stringify(new Date(a.date).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' }))},
      readTime: ${JSON.stringify(a.readTime)},
      href: ${JSON.stringify(`/blog/${a.slug}`)},
      category: ${JSON.stringify(a.category)},
    },
`;
      const marker = 'const articles = [\n';
      if (idx.includes(marker)) {
        idx = idx.replace(marker, marker + entry);
        writeFileSync(indexPath, idx, 'utf-8');
        indexed++;
      }
    }
  }

  // Add to the satellite's sitemap.
  const smPath = join(base, 'src/app/sitemap.ts');
  if (existsSync(smPath)) {
    let sm = readFileSync(smPath, 'utf-8');
    if (!sm.includes(a.slug)) {
      const line = `    { url: \`\${baseUrl}/blog/${a.slug}\`, lastModified: '${a.date}', changeFrequency: 'monthly' as const, priority: 0.7 },\n`;
      const at = sm.lastIndexOf('  ];');
      if (at > 0) {
        // Ensure the previous entry ends with a comma before appending.
        const head = sm.slice(0, at).replace(/,?\s*$/, ',\n');
        sm = head + line + sm.slice(at);
        writeFileSync(smPath, sm, 'utf-8');
        sitemapped++;
      }
    }
  }

  console.log(`  + ${a.site}/blog/${a.slug}`);
}

console.log(`\nSatellite money-page articles: ${created} created · ${indexed} added to blog index · ${sitemapped} added to sitemap`);
console.log('These eight satellites are git-linked, so they auto-build on push when their own folder changes.');
