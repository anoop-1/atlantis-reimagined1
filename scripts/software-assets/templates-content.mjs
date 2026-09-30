// NDT report template library content (2026-09-29).
// Facts checked against public summaries of ASME BPVC Section V, ASTM E797
// and the ISO catalogue (see SOURCES at the bottom). Paragraph numbers in
// ASME Section V move between editions, so every page tells the reader to
// check the edition their contract references.
import { h2, h3, p, ul, ol, contact } from './lib.mjs';

export const PUBLISHED = '2026-09-29';
export const HUB_PATH = '/ndt-report-templates';

const HEADER = [
  ['Report number and revision', 'RPT-2409-017 Rev 0'],
  ['Date of examination', '2026-09-14'],
  ['Client / end user', '[Client name]'],
  ['Project or job number', 'J-2409'],
  ['Work order / PO reference', 'WO-55821'],
  ['Site and location', '[Site], Unit 3 pipe rack'],
  ['Component / item ID', '[Line or equipment tag]'],
  ['Drawing number and revision', 'ISO-1045-01 Rev B'],
  ['Procedure number and revision', 'NDT-PRO-004 Rev 3'],
  ['Acceptance standard', 'As named in the contract (see below)'],
  ['Extent of examination', '100% of the welds listed'],
];

const SIGNOFF = [
  ['Examined by (name, method, level, scheme)', '[Name], UT Level II, SNT-TC-1A'],
  ['Certificate number and expiry', '[Cert no.], expires [date]'],
  ['Reviewed / interpreted by (Level II or III)', '[Name], Level III'],
  ['Client or third-party inspector', '[Name, company], witnessed / reviewed'],
  ['Signatures and dates', 'On the issued report'],
];

// ─── Method pages ───────────────────────────────────────────────────────────
export const METHODS = [
  // ── UT weld ────────────────────────────────────────────────────────────
  {
    slug: 'ut-weld-inspection-report',
    short: 'UT',
    name: 'UT weld inspection report',
    title: 'UT Weld Inspection Report Template (ASME V / ISO 17640)',
    description: 'Free ultrasonic weld inspection report template: required fields under ASME Section V Article 4 and ISO 17640, an example layout, print view and CSV.',
    h1: 'Ultrasonic Testing (UT) Weld Inspection Report Template',
    lead: 'A manual pulse-echo UT report for butt and fillet welds, laid out so every field a code reviewer checks is on the page: equipment and probe identity, calibration, scanning sensitivity, and a location-referenced record of every indication.',
    asme: 'ASME Section V, Article 4',
    iso: 'ISO 17640 (techniques) with ISO 11666 (acceptance levels)',
    requirements:
      h2('What a compliant UT weld report must contain') +
      p('ASME Section V Article 4 splits the paperwork into two layers. The examination record (T-492 in recent editions) carries the general Article 1 record items plus the UT specifics: the instrument identified by manufacturer serial number, each search unit identified by serial number, frequency and size, the beam angles used, the couplant by brand or type, and the search unit cables by type and length. The report itself (T-493) must add a record of the welds or volume examined, which can be a marked-up sketch, the location of each recorded reflector, and the identity of the operator who carried out each examination or part of it.') +
      p('Older editions word this as a single list that also names the procedure, the calibration sheet identity, the surface the examination was conducted from, the surface condition, the frequency, the calibration block and any special equipment. Clients and Authorized Inspectors still expect all of those, so the template keeps them even where a newer edition folds them into the procedure reference. Check which edition your contract or the referencing construction code calls up; paragraph numbers move between editions, the substance does not.') +
      p('Under ISO 17640 the test report is equally prescriptive: it identifies the object, material, weld preparation and thickness, the testing level, the equipment and probes, the reference method and sensitivity (DAC, DGS or reference-block), the scanning surfaces and extent, and the indications with position, length and echo height. Acceptance is then judged against ISO 11666 acceptance levels or the product standard, not against ISO 17640 itself.') +
      ul([
        '<strong>Traceability:</strong> weld number tied to the drawing revision, the WPS and the welder stamp where the client asks for it.',
        '<strong>Calibration evidence:</strong> reference block ID, reference level (for example the DAC primary reference), scanning sensitivity above reference, and the transfer correction applied.',
        '<strong>Indication record:</strong> position along the weld from a stated datum, depth, length, maximum amplitude relative to reference, the probe that found it, and its evaluation.',
        '<strong>People:</strong> the examiner and the reviewer with method, level and certification scheme, plus the client or third-party acceptance if it was witnessed.',
      ]),
    groups: [
      { heading: 'Equipment and calibration', rows: [
        ['Flaw detector (make, model, serial)', '[Make/model], S/N 18-4421'],
        ['Probes (serial, frequency, size, angle)', '45°, 60°, 70° shear, 4 MHz, 8×9 mm, S/N per probe'],
        ['Cables (type, length)', 'Lemo–BNC, 2 m'],
        ['Couplant (brand or type)', 'Water-based gel'],
        ['Calibration / reference block', 'Basic calibration block BCB-25, S/N 0093'],
        ['Reference level and method', 'DAC on side-drilled holes'],
        ['Scanning sensitivity and transfer correction', 'Reference + 6 dB; transfer +2 dB'],
        ['Scan surface and surface condition', 'Outside surface, as-ground'],
        ['Part temperature', '24 °C'],
      ] },
    ],
    results: {
      caption: 'Indication record (example values)',
      head: ['Weld ID', 'Ind. no.', 'Position from datum (mm)', 'Depth (mm)', 'Length (mm)', 'Max amplitude (% DAC)', 'Probe', 'Evaluation', 'Result'],
      rows: [
        ['W-12', '1', '215', '9.5', '12', '65%', '60°', 'Slag, non-planar', 'Acceptable'],
        ['W-12', '2', '480', '14.0', '22', '110%', '45°', 'Planar, root region', 'Reject — repair'],
        ['W-13', '—', '—', '—', '—', '—', '45° / 60°', 'No recordable indications', 'Acceptable'],
      ],
    },
    guidance:
      h2('How to fill it in without getting it bounced') +
      p('Most UT reports that come back from a client reviewer come back for the same handful of reasons. The datum is missing, so nobody can find indication 2 again. The probe serial numbers are on the calibration sheet but not on the report, so the report cannot be tied to the calibration. The reference level is stated but the scanning level is not. Or the report says "no recordable indications" without saying what the recording level was.') +
      ol([
        'State the datum on every weld (for example "0 at top dead centre, clockwise looking with flow") and use it in the position column.',
        'Record the recording level as well as the reference level, so "no recordable indications" has a meaning.',
        'Give each indication its own row, even when two indications sit on the same weld; merged rows are the first thing a reviewer questions.',
        'Record the evaluation and the result separately: the evaluation is what you believe the reflector is, the result is the decision against the acceptance standard.',
        'Keep the calibration check times (start, intervals and end). A failed end-of-shift check means re-examining everything since the last good check, and the report must show which welds that covered.',
      ]) +
      p('If the job is UT in lieu of radiography under a construction code, the report must also show the specific extra requirements that code places on the examination, such as the use of a computerised imaging technique or a performance-demonstrated procedure. Those belong in the procedure reference and in the remarks block, never left for the reader to assume.'),
    automation:
      p('In the NDT Reports app, a UT report carries a probe calibration table, so each probe row holds its serial number, frequency, angle and reference level, and the weld lines hold the defect type, orientation and result. The job, work order, drawing and WPS references come from the job, so they are typed once. The overall result is recorded as acceptable, not acceptable or acceptable with remarks.'),
    faqs: [
      { q: 'Which ASME Section V paragraphs cover UT report contents?', a: 'In recent editions, Article 4 T-492 lists the examination record items (instrument and search unit serial numbers, frequency and size, beam angles, couplant, cables) on top of the general Article 1 record items, and T-493 requires the report to identify the welds or volume examined, the location of each recorded reflector and the operator. Paragraph numbering changes between editions, so cite the edition your contract names.' },
      { q: 'Is ISO 17640 an acceptance standard?', a: 'No. ISO 17640 sets out techniques and testing levels for manual UT of welds. Acceptance levels come from ISO 11666 or from the product or application standard named in the contract.' },
      { q: 'Should the report record indications below the acceptance limit?', a: 'Record everything above the recording level your procedure sets, then evaluate. A record of non-rejectable indications lets the next inspection compare like with like, and several referencing codes require it.' },
      { q: 'Can one report cover several welds?', a: 'Yes, as long as each weld has its own line, its own datum and its own result. A report that lists welds but only gives one overall result will usually be rejected.' },
      { q: 'Who signs a UT weld report?', a: 'The examiner (certified in UT at the level your written practice allows to evaluate and report), a reviewer where your procedure requires one, and the client or third-party inspector if acceptance was witnessed or reviewed.' },
    ],
  },

  // ── UT thickness ───────────────────────────────────────────────────────
  {
    slug: 'ut-thickness-survey-report',
    short: 'UTT',
    name: 'UT thickness survey report',
    title: 'UT Thickness Survey Report Template (ASTM E797, ISO 16809)',
    description: 'Free UT thickness survey report template: CML/TML reading grid, gauge and probe details per ASTM E797 and ISO 16809, example layout, print view and CSV.',
    h1: 'UT Thickness Survey Report Template',
    lead: 'A thickness-gauging report for piping, vessels and tanks with a reading grid by measurement location and direction, laid out so the minimum reading at every location can be found in seconds.',
    asme: 'ASME Section V, Article 23 (SE-797)',
    iso: 'ISO 16809 (ultrasonic thickness measurement)',
    requirements:
      h2('What a compliant thickness survey report must contain') +
      p('ASME Section V adopts ASTM E797 as SE-797 in Article 23, the standard practice for measuring thickness by the manual pulse-echo contact method. Its report section asks for the examination procedure information recorded at the time of measurement: the type of instrument, the standardization (calibration) blocks and their specifications, the size, frequency and type of search unit, and the scanning method. The report must then give the maximum and minimum thickness measured, the location of each measurement, and personnel data including certification level.') +
      p('ISO 16809 covers the same ground for metallic and non-metallic materials by direct contact, based on time-of-flight measurement only. It is the reference most European clients name, and its structure is close enough to E797 that one template can satisfy both if you record the measurement mode (pulse-echo, echo-echo through coatings, or multiple-echo) and how the instrument was calibrated.') +
      p('A thickness survey is usually a data feed for someone else\'s integrity assessment. The owner-user or their inspector will use your readings with previous surveys to work out corrosion rates and remaining life under the inspection code that applies to the asset. Your report therefore has to make every reading re-locatable and comparable: the same location IDs, the same orientation convention and the same reading positions as the last survey.') +
      ul([
        '<strong>Location scheme:</strong> CML/TML identifiers that match the client\'s isometric or vessel drawing, not numbers you invented on the day.',
        '<strong>Orientation:</strong> for piping, readings by direction (for example 0°, 90°, 180°, 270° looking with flow) or by grid position on larger components.',
        '<strong>Calibration:</strong> the step block or known-thickness samples used, the material velocity, and how coatings were handled.',
        '<strong>Anomalies:</strong> laminations, pitting and locations that could not be read, stated as such rather than left blank.',
      ]),
    groups: [
      { heading: 'Equipment and calibration', rows: [
        ['Thickness gauge (make, model, serial)', '[Make/model], S/N 22-1187'],
        ['Probe (type, frequency, diameter, serial)', 'Dual element, 5 MHz, 10 mm, S/N D-440'],
        ['Measurement mode', 'Pulse-echo; echo-echo through coating where noted'],
        ['Calibration block / reference', '5-step block, carbon steel, 2.5–25 mm, S/N 118'],
        ['Material velocity', '5920 m/s (carbon steel)'],
        ['Couplant', 'Glycerine-based gel'],
        ['Surface condition / coating', 'Painted, 250–350 µm'],
        ['Surface temperature', 'Ambient, 28 °C'],
      ] },
    ],
    results: {
      caption: 'Thickness readings by location and direction (example values, mm)',
      head: ['CML / TML', 'Location', 'Nominal', '0°', '90°', '180°', '270°', 'Minimum', 'Remarks'],
      rows: [
        ['CML-01', 'Straight, 300 mm d/s of flange', '7.11', '6.98', '7.02', '6.61', '7.05', '6.61', 'Bottom reading low, re-checked'],
        ['CML-02', 'Elbow extrados', '7.11', '6.72', '6.80', '6.95', '6.88', '6.72', '—'],
        ['CML-03', 'Tee branch', '5.49', '5.40', 'n/a', '5.38', 'n/a', '5.38', 'Access limited at 90°/270°'],
      ],
    },
    guidance:
      h2('Getting a survey the integrity engineer can actually use') +
      p('The integrity engineer reading your survey will put it next to the last three. Anything that stops them lining up the readings sends the report back or, worse, produces a false corrosion rate. The common failures are a changed orientation convention, a different reading position on an elbow, readings through paint taken in pulse-echo mode (which adds the coating thickness to the steel), and blank cells that could mean "not read" or "not required".') +
      ol([
        'Import the location list from the previous survey or the client drawing before you go to site, and keep its IDs.',
        'Write the orientation convention in the header and stick to it.',
        'Record the measurement mode for every reading taken through a coating.',
        'Scan around a low reading and record the minimum found, with a remark if you suspect pitting or a lamination rather than general wall loss; a single spot reading can miss localised corrosion.',
        'Use "n/a" with a reason for anything not read, so a blank never has to be interpreted.',
      ]) +
      p('Thickness surveys are the one NDT report where more data is not always better: a grid of hundreds of readings with no minimum column is harder to review than a well-chosen set of locations with the minimum called out. The template puts the minimum next to the readings for that reason.'),
    automation:
      p('The NDT Reports app has a UT thickness (UTT) report type with readings by direction, so the reading grid above is data, not a table typed into a document. The job carries the drawing and location references, and the report numbering runs in its own UTT sequence. Atlantis records and issues the readings; the corrosion-rate and remaining-life assessment stays with the owner-user\'s inspector under their code.'),
    faqs: [
      { q: 'What does ASTM E797 require in a thickness report?', a: 'The procedure information recorded at the time of measurement (instrument type, calibration blocks, search unit size, frequency and type, scanning method), the maximum and minimum thickness measurements, their locations, and personnel data including certification level. ASME Section V adopts it as SE-797 in Article 23.' },
      { q: 'Can I take readings through paint?', a: 'Yes, if the gauge and procedure support a through-coating mode such as echo-echo, and the report says which mode was used. A pulse-echo reading through paint includes the coating and will read thicker than the steel.' },
      { q: 'Should a thickness survey include corrosion rates?', a: 'Only if your scope includes that assessment. Most NDT contractors report readings and minimums; the owner-user\'s inspector calculates corrosion rates and remaining life under the applicable inspection code.' },
      { q: 'How many readings per location?', a: 'As many as the client\'s specification or your procedure requires. For piping, four readings by direction per location is common, with a scan around the lowest reading.' },
      { q: 'Is ISO 16809 the same as ASTM E797?', a: 'They cover the same technique and overlap heavily. ISO 16809 is written for metallic and non-metallic materials by direct contact using time of flight; use the one your client names and record the details both ask for.' },
    ],
  },

  // ── PT ─────────────────────────────────────────────────────────────────
  {
    slug: 'pt-liquid-penetrant-report',
    short: 'PT',
    name: 'liquid penetrant (PT) report',
    title: 'Liquid Penetrant (PT) Report Template: ASME V Art 6, ISO 3452',
    description: 'Free liquid penetrant inspection report template: penetrant system, dwell and development times, indication record per ASME V Article 6 and ISO 3452-1.',
    h1: 'Liquid Penetrant Testing (PT) Report Template',
    lead: 'A PT report for welds, castings and machined parts that records the penetrant system by batch, the process times and temperatures, the lighting, and each indication by type, location and size.',
    asme: 'ASME Section V, Article 6',
    iso: 'ISO 3452-1 (general principles) with ISO 23277 (acceptance levels for welds)',
    requirements:
      h2('What a compliant PT report must contain') +
      p('ASME Section V Article 6 sets two requirements. First, the recording of indications (T-691 in recent editions): rejectable indications must be recorded with, as a minimum, the type of indication (linear or rounded), its location and its extent (length, diameter or aligned); non-rejectable indications are recorded as the referencing code specifies. Second, the examination record (T-692): the general Article 1 record items, the penetrant type (visible or fluorescent), the type designation of each penetrant, remover, emulsifier and developer used, a map or record of indications, the material and thickness, and the lighting equipment.') +
      p('ISO 3452-1 defines the penetrant process and its process and control testing for surface-breaking discontinuities such as cracks, laps, folds, porosity and lack of fusion, examined under white light or UV-A. It is not an acceptance standard; for welds the acceptance levels usually come from ISO 23277, and for pressure equipment built to ASME from the construction code (for example Section VIII Mandatory Appendix 8).') +
      ul([
        '<strong>Penetrant system:</strong> manufacturer, product designation and batch number for penetrant, remover (and emulsifier if used) and developer, all from the same family where the procedure requires it.',
        '<strong>Process control:</strong> surface preparation, part temperature, penetrant dwell time, removal method, development time.',
        '<strong>Viewing conditions:</strong> white light intensity for visible penetrants or UV-A intensity and ambient light for fluorescent, and the meter used to check them.',
        '<strong>Indication record:</strong> linear or rounded, location from a datum, size, and evaluation against the named acceptance standard.',
      ]),
    groups: [
      { heading: 'Penetrant system and process', rows: [
        ['Penetrant type and method', 'Visible (colour contrast), solvent-removable'],
        ['Penetrant (product, batch)', '[Product], batch 24-117'],
        ['Remover / cleaner (product, batch)', '[Product], batch 24-092'],
        ['Emulsifier (if used)', 'Not used'],
        ['Developer (form, product, batch)', 'Non-aqueous wet, [product], batch 24-101'],
        ['Surface preparation', 'Wire brushed and solvent cleaned'],
        ['Part temperature', '22 °C'],
        ['Dwell time / development time', '10 min / 10 min'],
        ['Lighting and meter', 'White light, measured with light meter S/N LM-07'],
        ['Material and thickness', 'SA-516 Gr 70, 19 mm'],
      ] },
    ],
    results: {
      caption: 'Indication record (example values)',
      head: ['Item / weld', 'Ind. no.', 'Type', 'Location from datum', 'Size (mm)', 'Evaluation', 'Result'],
      rows: [
        ['N2 nozzle weld', '1', 'Linear', '40 mm clockwise from TDC, toe', '6', 'Toe crack', 'Reject — repair'],
        ['N2 nozzle weld', '2', 'Rounded', '120 mm from TDC, cap', '2', 'Porosity, within limits', 'Acceptable'],
        ['Seam W-3', '—', '—', '—', '—', 'No relevant indications', 'Acceptable'],
      ],
    },
    guidance:
      h2('Common reasons PT reports are rejected') +
      p('PT is simple to perform and easy to report badly. Reviewers look first at whether the process was controlled: a report without batch numbers cannot show the materials were in date and compatible; a report without temperature cannot show the dwell time was valid; a report without a light reading cannot show the inspector could see what they were looking for.') +
      ol([
        'Record the part temperature and, if it falls outside the standard range in your procedure, reference the qualified non-standard-temperature procedure.',
        'Write dwell and development times as measured, not "as per procedure".',
        'Record the light intensity reading and the meter serial, and for fluorescent systems the ambient light as well.',
        'Describe every relevant indication as linear or rounded and give its size and location; "indications found" is not a record.',
        'Say whether post-cleaning was carried out, since some clients and some materials require it before the part goes back into service or on to the next process.',
      ]) +
      p('Photographs help, but they are not a substitute for the indication table. Put the photo reference in the remarks column so the photo and the row stay linked.'),
    automation:
      p('The PT report type in the NDT Reports app records the penetrant method and developer, and the weld or item lines carry the defect type, orientation and result, with photos captured in the offline field app and a signature on screen. Consumables such as penetrant, remover and developer can be tracked with reorder levels in Asset Management, so the batch in use is on record before the report is written.'),
    faqs: [
      { q: 'What must a PT report record under ASME Section V?', a: 'The Article 1 general record items, penetrant type (visible or fluorescent), the type designation of each penetrant, remover, emulsifier and developer, a map or record of indications, material and thickness, and the lighting equipment. Rejectable indications are recorded as linear or rounded with location and extent.' },
      { q: 'Does ISO 3452-1 give acceptance criteria?', a: 'No. It covers the method and process control. Acceptance for welds normally comes from ISO 23277 or from the product or construction code named in the contract.' },
      { q: 'Do I need batch numbers on the report?', a: 'Most procedures and clients require them, because they are the only way to show the materials were compatible, in date and, where required, checked for contaminants such as sulfur and halogens.' },
      { q: 'Can I mix products from different manufacturers?', a: 'Only if your procedure allows it. ASME Section V expects materials from the same family unless a mixed system has been qualified, so record exactly what was used.' },
      { q: 'Should non-relevant indications be recorded?', a: 'Record what the referencing code and your procedure require. It is good practice to note that non-relevant indications were investigated, so the reviewer knows they were not missed.' },
    ],
  },

  // ── MT ─────────────────────────────────────────────────────────────────
  {
    slug: 'mt-magnetic-particle-report',
    short: 'MT',
    name: 'magnetic particle (MT) report',
    title: 'Magnetic Particle (MT) Report Template: ASME V Art 7, ISO 17638',
    description: 'Free magnetic particle inspection report template: technique, current, particles, field checks and indication record per ASME V Article 7 and ISO 17638.',
    h1: 'Magnetic Particle Testing (MT) Report Template',
    lead: 'An MT report for ferromagnetic welds and components that records how the part was magnetised, how the field was verified, what particles were used under what light, and every relevant indication.',
    asme: 'ASME Section V, Article 7',
    iso: 'ISO 17638 (MT of welds) with ISO 23278 (acceptance levels)',
    requirements:
      h2('What a compliant MT report must contain') +
      p('ASME Section V Article 7 mirrors Article 6. Rejectable indications must be recorded with, as a minimum, their type (linear or rounded), location and extent; non-rejectable indications are recorded as the referencing code requires. For each examination the record must include the Article 1 general items, the magnetic particle equipment and type of current, the particles (visible or fluorescent, wet or dry), a map or record of indications, the material and thickness, and the lighting equipment. Recent editions place these in the T-790 documentation paragraphs.') +
      p('ISO 17638 specifies MT techniques for surface imperfections in welds in ferromagnetic materials, including the heat-affected zone. It explicitly does not set acceptance levels; those come from ISO 23278 or the product or application standard. Its annex describes technique variations that raise or lower sensitivity, so the report must say which technique and field-verification method were used.') +
      ul([
        '<strong>Magnetisation:</strong> technique (yoke, prods, coil, central conductor), current type (AC, half-wave or full-wave DC), and for prods or coils the amperage and spacing.',
        '<strong>Field verification:</strong> yoke lift test result, or the field indicator or shim used, or a gaussmeter reading, as your procedure requires.',
        '<strong>Particles:</strong> wet or dry, visible or fluorescent, colour, carrier and concentration check, and any contrast paint.',
        '<strong>After the examination:</strong> whether demagnetisation was required and how residual field was checked.',
      ]),
    groups: [
      { heading: 'Technique and equipment', rows: [
        ['Equipment (make, model, serial)', 'AC/DC electromagnetic yoke, S/N Y-2231'],
        ['Technique and current', 'Yoke, AC, two directions at approximately 90°'],
        ['Field verification', 'Lift test on the day; artificial-flaw shim indication confirmed'],
        ['Particles', 'Wet, visible black on white contrast paint'],
        ['Particle product and batch', '[Product], batch 24-066'],
        ['Lighting and meter', 'White light, meter S/N LM-07'],
        ['Surface condition', 'As-welded, contrast paint applied'],
        ['Material and thickness', 'API 5L X52, 12.7 mm'],
        ['Demagnetisation', 'Not required by contract'],
      ] },
    ],
    results: {
      caption: 'Indication record (example values)',
      head: ['Weld / area', 'Ind. no.', 'Type', 'Orientation', 'Location from datum', 'Length (mm)', 'Evaluation', 'Result'],
      rows: [
        ['FW-21 fillet', '1', 'Linear', 'Longitudinal', 'Toe, 85 mm from start', '9', 'Toe crack', 'Reject — repair'],
        ['FW-22 fillet', '—', '—', '—', '—', '—', 'No relevant indications', 'Acceptable'],
        ['Lifting lug L2', '1', 'Linear', 'Transverse', 'Weld end, return', '3', 'Crater crack', 'Reject — repair'],
      ],
    },
    guidance:
      h2('What makes an MT report hold up at audit') +
      p('An MT result is only as good as the field that produced it. Reviewers therefore read the technique block before the results: if the report does not show two magnetisation directions, or does not show that the field was verified, a clean result proves little. The second area is lighting, and the third is the indication description.') +
      ol([
        'Record both magnetisation directions and how they were achieved; one direction finds only discontinuities roughly perpendicular to the field.',
        'Record the yoke lift test result or the field indicator used, and when it was checked.',
        'For fluorescent particles, record UV-A intensity and ambient light, and the meter used.',
        'Describe indications by type, orientation, location and length, and record the decision against the named acceptance standard.',
        'State whether demagnetisation was required, and if so how it was done and verified.',
      ]),
    automation:
      p('The MT report type in the NDT Reports app records the technique and particle type, and each weld line carries defect type, orientation and result. The yoke itself is a tracked instrument in Asset Management, with its calibration or verification record and next due date, and Team Assignments warns when an out-of-calibration item is assigned to a job.'),
    faqs: [
      { q: 'What must an MT examination record include under ASME Section V?', a: 'The Article 1 general record items, the magnetic particle equipment and type of current, the particles (visible or fluorescent, wet or dry), a map or record of indications, material and thickness, and lighting equipment. Rejectable indications are recorded as linear or rounded with location and extent.' },
      { q: 'Is ISO 17638 an acceptance standard?', a: 'No. ISO 17638 covers MT techniques for welds; acceptance levels come from ISO 23278 or the product standard.' },
      { q: 'Why record two magnetisation directions?', a: 'MT is most sensitive to discontinuities lying across the magnetic field. Two directions at roughly 90° cover discontinuities in any orientation, and the report should show both were applied.' },
      { q: 'Do I need to record the yoke lift test?', a: 'If your procedure uses it as the field check, yes: record the result and when it was done. Many procedures require a daily or pre-use check.' },
      { q: 'Can MT be used on austenitic stainless steel?', a: 'No. Austenitic stainless steels are not ferromagnetic; use PT or another method and report it on the matching template.' },
    ],
  },

  // ── RT ─────────────────────────────────────────────────────────────────
  {
    slug: 'rt-radiography-report',
    short: 'RT',
    name: 'radiographic testing (RT) report',
    title: 'Radiography (RT) Report Template: ASME V Art 2, ISO 17636',
    description: 'Free radiographic testing report template: technique details, IQI and density, film-by-film interpretation per ASME V Article 2 and ISO 17636.',
    h1: 'Radiographic Testing (RT) Report Template',
    lead: 'An RT report that combines the technique sheet and the radiograph review record: source, geometry, film or detector, IQI and density, then a segment-by-segment interpretation with a decision on each weld.',
    asme: 'ASME Section V, Article 2',
    iso: 'ISO 17636-1 (film) and ISO 17636-2 (digital detectors) with ISO 10675-1 (acceptance levels)',
    requirements:
      h2('What a compliant RT report must contain') +
      p('ASME Section V Article 2 asks for two documents that most companies combine into one report. The radiographic technique documentation details (T-291) must be prepared and include, as a minimum, the X-ray focal spot size or isotope source size, the base material type and thickness, weld thickness and reinforcement, the minimum source-to-object distance, the distance from the source side of the object to the film, the film manufacturer and designation, the number of films in each holder, and the single- or double-wall exposure arrangement. The radiograph review form (T-292) records the evaluation and disposition of each radiograph, including density and image quality indicator sensitivity, and is kept by the manufacturer on file for the retention period the code sets.') +
      p('ISO 17636-1 covers X- and gamma-ray techniques with film, and ISO 17636-2 covers digital detectors, for fusion-welded joints in plates and pipes. Neither sets acceptance levels; for welds these normally come from ISO 10675-1 or the application standard. Both expect the report to identify the technique class, the IQI type and position, the achieved image quality and the density or grey value range.') +
      ul([
        '<strong>Source and geometry:</strong> isotope and activity or X-ray kV and mA, source or focal spot size, source-to-object and object-to-film distances, exposure arrangement (SWSI, DWSI, DWDI).',
        '<strong>Image quality:</strong> IQI type (hole or wire), designation, placement (source side or film side), the essential hole or wire, and the sensitivity achieved on each film.',
        '<strong>Density:</strong> measured density (or grey value for digital) in the area of interest, against the procedure range.',
        '<strong>Interpretation:</strong> film or segment location marks, discontinuities found by type, and the disposition of each weld, signed by the interpreter.',
      ]),
    groups: [
      { heading: 'Technique details', rows: [
        ['Source / tube', 'Ir-192, 1.5 × 1.5 mm source size'],
        ['Material and thickness', 'SA-106 Gr B, 8.18 mm wall (6" Sch 80)'],
        ['Weld reinforcement', 'Up to 2 mm'],
        ['Exposure arrangement', 'Double wall, single image (DWSI), 3 shots'],
        ['Source-to-object / object-to-film distance', '[as calculated for geometric unsharpness]'],
        ['Film (manufacturer, designation) and screens', '[Film], class per procedure, lead screens'],
        ['Films per cassette', '2'],
        ['IQI type, designation and placement', 'Wire IQI, film side (marked "F")'],
        ['Required density range', 'Per procedure'],
        ['Radiation work permit / licence', '[Permit no.], [licence holder]'],
      ] },
    ],
    results: {
      caption: 'Radiograph review (example values)',
      head: ['Weld ID', 'Film / segment', 'Density', 'IQI sensitivity met', 'Discontinuities', 'Result', 'Remarks'],
      rows: [
        ['W-07', '0–1', '2.6', 'Yes', 'None', 'Acceptable', '—'],
        ['W-07', '1–2', '2.4', 'Yes', 'Scattered porosity', 'Acceptable', 'Within rounded-indication limits'],
        ['W-07', '2–0', '2.7', 'Yes', 'Incomplete penetration, 14 mm', 'Reject — repair', 'Repair and re-shoot as R1'],
      ],
    },
    guidance:
      h2('Keeping RT paperwork clean from darkroom to client') +
      p('Radiography generates more paper than any other method, and the most expensive mistakes are about identification rather than interpretation. A radiograph without legible location markers, or a report whose segment numbers do not match the markers on the film, can mean a re-shoot. So can a report that shows an IQI sensitivity nobody can verify on the film.') +
      ol([
        'Make the segment convention on the report match the lead markers on the film exactly, including the start point and direction.',
        'Record the IQI actually visible on each film, not the IQI that was required.',
        'Record density or grey value in the area of interest on every film; one figure for the whole job is not enough.',
        'Keep repairs traceable: use a repair suffix (R1, R2) on the weld ID and reference the original report.',
        'Record the radiation work permit and licence details your jurisdiction requires alongside the technical data.',
      ]),
    automation:
      p('The RT report type in the NDT Reports app records the source, technique, IQI type and placement, and each weld line carries the defect type and result; a separate Computed Radiography report type covers CR work. The Fleet app records whether a vehicle can carry radioactive sources along with its transport licence number and expiry, and the Employees app holds each technician\'s radiation safety training and badge number.'),
    faqs: [
      { q: 'What goes on an RT technique sheet under ASME Section V?', a: 'At minimum: focal spot or source size, base material type and thickness, weld thickness and reinforcement, minimum source-to-object distance, source-side-of-object-to-film distance, film manufacturer and designation, films per holder, and the single- or double-wall exposure arrangement.' },
      { q: 'What is the radiograph review form?', a: 'The record, required by ASME Section V Article 2, of the evaluation and disposition of each radiograph, including density and IQI sensitivity. It is kept on file for the retention period the referencing code sets.' },
      { q: 'Does ISO 17636 cover digital radiography?', a: 'Yes. ISO 17636-1 covers film techniques and ISO 17636-2 covers digital detectors. Acceptance levels for welds are in ISO 10675-1 or the application standard.' },
      { q: 'Who interprets and signs RT film?', a: 'A certified RT interpreter at the level your written practice allows, usually Level II or III, plus any client or third-party review the contract requires.' },
      { q: 'Should repairs get a new report?', a: 'Report the repair radiographs against the same weld with a repair suffix, reference the original report, and keep both on file.' },
    ],
  },

  // ── VT ─────────────────────────────────────────────────────────────────
  {
    slug: 'vt-visual-inspection-report',
    short: 'VT',
    name: 'visual inspection (VT) report',
    title: 'Visual Weld Inspection (VT) Report Template: ASME V, ISO 17637',
    description: 'Free visual weld inspection report template: technique, lighting, gauges and a weld-by-weld record per ASME V Article 9 and ISO 17637. Print view and CSV.',
    h1: 'Visual Testing (VT) Weld Inspection Report Template',
    lead: 'A VT report for fit-up, in-process and final visual inspection of welds, with the viewing conditions, the gauges used, and a weld-by-weld record of profile and surface imperfections.',
    asme: 'ASME Section V, Article 9',
    iso: 'ISO 17637 (visual testing of fusion-welded joints) with ISO 5817 quality levels',
    requirements:
      h2('What a compliant VT report must contain') +
      p('ASME Section V Article 9 requires a written report when the referencing code section asks for one (T-991 in recent editions). The report must contain the date of the examination, the procedure identification and revision, the technique used (direct, remote or translucent), and the results. Documentation must include every observation and dimensional check the referencing code specifies, so a visual report under a piping or vessel code usually carries weld size, profile and surface imperfection checks against that code\'s limits.') +
      p('ISO 17637 specifies visual testing of fusion welds in metallic materials and can also be applied to the joint before welding. It covers test conditions including illuminance and viewing angle, testing equipment, personnel, and the test record. Quality levels for the imperfections found usually come from ISO 5817 or the application standard.') +
      ul([
        '<strong>Stage:</strong> joint preparation and fit-up, during welding, final weld, or repair.',
        '<strong>Viewing conditions:</strong> direct or remote, lighting and its measured intensity, viewing distance and angle, and any aids (mirrors, magnifiers, borescope).',
        '<strong>Gauges:</strong> fillet and bridge-cam gauges, undercut gauge, and their identification.',
        '<strong>Weld-by-weld result:</strong> size and profile, undercut, overlap, porosity, cracks, arc strikes, spatter, and the decision against the named standard.',
      ]),
    groups: [
      { heading: 'Technique and viewing conditions', rows: [
        ['Inspection stage', 'Final visual, after cleaning'],
        ['Technique', 'Direct visual, supplemented by torch'],
        ['Lighting (type, measured intensity, meter)', 'Torch plus site lighting, meter S/N LM-07'],
        ['Viewing distance and angle', 'Within the procedure limits'],
        ['Gauges and aids', 'Bridge cam gauge S/N G-14, fillet gauge set, 5× magnifier'],
        ['Welding process / WPS', 'SMAW, WPS-011 Rev 2'],
        ['Acceptance standard', 'As named in the contract (e.g. AWS D1.1 or ISO 5817 level B)'],
      ] },
    ],
    results: {
      caption: 'Weld-by-weld visual record (example values)',
      head: ['Weld ID', 'Welder', 'Size / profile', 'Undercut', 'Porosity', 'Cracks', 'Other', 'Result'],
      rows: [
        ['FW-31', 'W-07', '8 mm fillet, convex, OK', 'None', 'None', 'None', '—', 'Acceptable'],
        ['FW-32', 'W-07', '6 mm fillet, undersize 1 mm over 40 mm', 'None', 'None', 'None', '—', 'Reject — build up'],
        ['BW-05', 'W-11', 'Cap height 2 mm, OK', '0.5 mm, 30 mm long', 'None', 'None', 'Arc strike near toe', 'Reject — dress and PT'],
      ],
    },
    guidance:
      h2('Making a visual report more than a tick box') +
      p('Visual inspection finds more rejectable defects than any other method, and it is the report most often reduced to a column of ticks. A tick tells a reviewer that someone looked, not what they saw or how they measured it. The template asks for the measured value where the acceptance standard sets a limit, and a short description where it does not.') +
      ol([
        'Record the stage; a fit-up check and a final visual are different examinations with different acceptance points.',
        'Write measured values against limits (fillet size, cap height, undercut depth), not just "OK".',
        'Record the welder identification where the project tracks welder performance or repair rates.',
        'Note conditions that limited the examination, such as access, lighting or surface condition.',
        'Reference any follow-up method (for example PT after dressing an arc strike) so the chain of evidence is complete.',
      ]),
    automation:
      p('The NDT Reports app has a VT report type with weld lines for defect type, orientation and result, and the offline field app captures photos on the spot and places them in a two-up grid in the PDF. Procedure and WPS references are taken from the job, and the report moves from draft to review to approved before it is sent.'),
    faqs: [
      { q: 'What must a VT report contain under ASME Section V Article 9?', a: 'When the referencing code requires a written report: the date of the examination, the procedure identification and revision, the technique used, the results, and all observations and dimensional checks the referencing code specifies.' },
      { q: 'Does ISO 17637 set acceptance criteria?', a: 'No. It covers how visual testing of fusion welds is carried out and recorded. Quality levels normally come from ISO 5817 or the application standard.' },
      { q: 'Is a tick-box checklist enough for a VT report?', a: 'Rarely. Where the acceptance standard sets a numeric limit, record the measured value; reviewers and auditors expect to see what was measured.' },
      { q: 'Should fit-up inspection be reported separately?', a: 'It can share a template, but record the stage on each line. Fit-up findings and final weld findings have different acceptance points and different follow-up.' },
      { q: 'Who can perform and sign VT?', a: 'Personnel qualified for visual examination under your written practice or the scheme the contract names. Many construction codes also recognise welding inspector qualifications for visual examination of welds.' },
    ],
  },

  // ── PAUT ───────────────────────────────────────────────────────────────
  {
    slug: 'paut-phased-array-report',
    short: 'PAUT',
    name: 'phased array (PAUT) report',
    title: 'Phased Array UT (PAUT) Report Template: ASME V, ISO 13588',
    description: 'Free PAUT weld inspection report template: probe, wedge, focal laws, encoder and scan plan details plus indication table per ASME V Article 4 and ISO 13588.',
    h1: 'Phased Array Ultrasonic Testing (PAUT) Report Template',
    lead: 'A PAUT report for encoded weld scans that records the full setup (probe, wedge, focal laws, encoder, scan plan and calibration) and an indication table referenced to scan and index positions, with the data file named.',
    asme: 'ASME Section V, Article 4 (with its mandatory appendices for phased array E-scan and S-scan techniques)',
    iso: 'ISO 13588 (automated phased array for welds) with ISO 19285 (acceptance levels)',
    requirements:
      h2('What a compliant PAUT report must contain') +
      p('PAUT sits inside ASME Section V Article 4, so everything a manual UT report needs applies: the Article 1 record items, instrument and search unit identification by serial number, couplant, cables, and a report that locates each recorded reflector and identifies the operator. The phased array mandatory appendices then add the parameters that define the technique: the focal laws (E-scan or S-scan, angle range and step, active aperture, focal depth), the wedge, the calibration of every beam used, and for encoded scans the encoder calibration.') +
      p('ISO 13588 specifies automated and semi-automated phased array testing of fusion-welded joints in metallic materials of at least 6 mm thickness, for manufacturing, pre-service and in-service inspection. Acceptance levels for PAUT of welds are given in ISO 19285, or in the application standard the contract names.') +
      p('The practical difference from a manual UT report is the data file. An encoded PAUT scan is an archive that a reviewer can reopen, so the report must name the file, the software version it was acquired with, and the scan plan it was acquired against. Without those, the report and the evidence drift apart.') +
      ul([
        '<strong>Setup:</strong> instrument and software version, probe (elements, pitch, frequency), wedge (angle, material velocity), focal law set, gain and TCG/ACG.',
        '<strong>Coverage:</strong> scan plan reference, index offsets from the weld centreline, number of scans per side, and any areas not covered.',
        '<strong>Encoder:</strong> encoder type and the calibration check result.',
        '<strong>Indications:</strong> scan position, index offset, depth start and end, length, through-wall height, amplitude, classification and result.',
      ]),
    groups: [
      { heading: 'Setup, calibration and scan plan', rows: [
        ['Instrument and software version', '[Make/model], S/N PA-3310, software v[x.y]'],
        ['Probe (elements, pitch, frequency, serial)', '64 elements, 0.6 mm pitch, 5 MHz, S/N PR-887'],
        ['Wedge (angle, velocity, serial)', '55° shear, [velocity], S/N W-212'],
        ['Focal laws', 'S-scan 40°–70°, 1° step, 16-element aperture'],
        ['Calibration (velocity, wedge delay, sensitivity, TCG)', 'On calibration block S/N CB-18, all beams'],
        ['Encoder and check', 'Wheel encoder, 500 mm check within tolerance'],
        ['Scan plan reference', 'SP-2409-03 Rev 1'],
        ['Index offsets / scans per side', '−18 mm and −30 mm from weld centreline, both sides'],
        ['Data file(s)', 'W-44_S1.[ext], W-44_S2.[ext]'],
      ] },
    ],
    results: {
      caption: 'Indication table (example values)',
      head: ['Weld ID', 'Ind. no.', 'Scan position X (mm)', 'Index offset Y (mm)', 'Depth start–end (mm)', 'Length (mm)', 'Height (mm)', 'Amplitude', 'Classification', 'Result'],
      rows: [
        ['W-44', '1', '312', '−2', '11.5–13.0', '18', '1.5', '−4 dB to ref', 'Lack of sidewall fusion', 'Reject — repair'],
        ['W-44', '2', '655', '+1', '6.0–6.5', '5', '0.5', '−12 dB to ref', 'Porosity cluster', 'Acceptable'],
        ['W-45', '—', '—', '—', '—', '—', '—', '—', 'No recordable indications', 'Acceptable'],
      ],
    },
    guidance:
      h2('Reporting PAUT so the data survives review') +
      p('Most PAUT disputes are not about whether an indication exists; they are about whether the scan covered the volume and whether a second analyst would size it the same way. The report is where you prove coverage and repeatability.') +
      ol([
        'Reference the scan plan and include or attach the coverage diagram showing beams across the weld volume and HAZ.',
        'Record the index offsets actually used; if the setup was changed on site, say so and why.',
        'Record encoder checks and the calibration checks at start, during and end of the shift.',
        'Size length and height with the technique your procedure specifies and name it (for example a dB drop method or tip diffraction).',
        'Keep data files under a naming convention that includes the weld ID and scan number, and record them on the report.',
      ]),
    automation:
      p('The PAUT report type in the NDT Reports app carries the focal-law data alongside the weld lines, and the report can reference the acquisition file names. PAUT and TOFD often run together; both report types sit in the same job, with the same drawing, WPS and procedure references, and each has its own numbering sequence.'),
    faqs: [
      { q: 'Which ASME code covers PAUT reporting?', a: 'ASME Section V Article 4 and its mandatory appendices for phased array techniques. The Article 4 examination record and report requirements apply, plus the phased array setup parameters those appendices require.' },
      { q: 'What thickness does ISO 13588 cover?', a: 'ISO 13588:2019 covers semi- or fully automated phased array testing of fusion-welded joints in metallic materials of minimum thickness 6 mm. Acceptance levels are in ISO 19285.' },
      { q: 'Should the PAUT data file be part of the report?', a: 'The file should be retained and named on the report with the software version used, so the scan can be reopened for review or comparison.' },
      { q: 'What is the difference between an E-scan and an S-scan on the report?', a: 'An E-scan (linear) moves a fixed-angle beam along the array; an S-scan (sectorial) sweeps a range of angles from one aperture. Record which was used, with the angle range, step and aperture.' },
      { q: 'Can PAUT replace radiography on my job?', a: 'Only where the construction code and the client allow ultrasonic examination in lieu of radiography, under the conditions that code sets. The report must reference those conditions.' },
    ],
  },

  // ── TOFD ───────────────────────────────────────────────────────────────
  {
    slug: 'tofd-report',
    short: 'TOFD',
    name: 'TOFD report',
    title: 'TOFD Inspection Report Template: ASME V Art 4, ISO 10863',
    description: 'Free time-of-flight diffraction (TOFD) report template: probe pair, PCS, encoder, dead-zone coverage and indication sizing per ASME V Article 4 and ISO 10863.',
    h1: 'Time-of-Flight Diffraction (TOFD) Report Template',
    lead: 'A TOFD report for encoded weld scans that records the probe pair setup, probe centre separation, time window, encoder and dead-zone coverage, and sizes each indication by position, length, depth and height.',
    asme: 'ASME Section V, Article 4 (mandatory appendix for TOFD)',
    iso: 'ISO 10863 (TOFD of welds) with ISO 15626 (acceptance levels)',
    requirements:
      h2('What a compliant TOFD report must contain') +
      p('TOFD falls under ASME Section V Article 4, whose TOFD mandatory appendix sets the equipment, calibration and data-recording requirements. Two probes are used in a pitch-catch arrangement, each probe in the pair with the same nominal frequency and the same element dimensions. The report carries the Article 4 record items (instrument and probe identification, couplant, cables, the location of each recorded reflector and the operator) plus the setup that defines TOFD coverage: probe centre separation, wedge angle, time window and encoder.') +
      p('ISO 10863:2020 specifies TOFD for semi- or fully automated testing of fusion-welded joints in metallic materials of minimum thickness 6 mm, for full-penetration joints of simple geometry in plates, pipes and vessels. It defines four testing levels, A to D, in line with ISO 17635, with increasing testing reliability, and allows TOFD indications to be assessed for acceptance. Acceptance levels are in ISO 15626 or the application standard.') +
      p('TOFD\'s weak spots are the near-surface and back-wall dead zones. A compliant report shows how those zones were covered, whether by offset scans, a complementary PAUT or pulse-echo technique, or surface methods, because a clean TOFD image says nothing about the few millimetres it cannot see.') +
      ul([
        '<strong>Probe pair:</strong> frequency, element size, beam angle, and the probe centre separation (PCS) chosen for the target depth.',
        '<strong>Time window and gain:</strong> the window from before the lateral wave to after the back-wall (or first mode-converted) signal, and the gain setting.',
        '<strong>Scan:</strong> non-parallel or parallel, encoder check, offset scans and the dead-zone coverage method.',
        '<strong>Indications:</strong> scan start and length, depth to top, through-wall height, classification (upper-surface, embedded, lower-surface) and result.',
      ]),
    groups: [
      { heading: 'Setup and coverage', rows: [
        ['Instrument and software version', '[Make/model], S/N PA-3310, software v[x.y]'],
        ['Probe pair (frequency, element size, serials)', '10 MHz, 3 mm, S/N T-51 / T-52'],
        ['Wedge angle', '60°'],
        ['Probe centre separation (PCS)', 'Set for the target depth per scan plan'],
        ['Time window', 'From before lateral wave to after back-wall'],
        ['Scan type and encoder check', 'Non-parallel, wheel encoder, check within tolerance'],
        ['Offset scans', '±10 mm from centreline where required'],
        ['Dead-zone coverage', 'Complementary PAUT (report PA-2409-044)'],
        ['Testing level (ISO 10863) or technique reference', 'Level B'],
        ['Data file(s)', 'W-44_TOFD.[ext]'],
      ] },
    ],
    results: {
      caption: 'Indication table (example values)',
      head: ['Weld ID', 'Ind. no.', 'X start (mm)', 'Length (mm)', 'Depth to top (mm)', 'Height (mm)', 'Type', 'Evaluation', 'Result'],
      rows: [
        ['W-44', '1', '305', '24', '10.8', '2.4', 'Embedded', 'Lack of sidewall fusion', 'Reject — repair'],
        ['W-44', '2', '890', '6', '4.2', '<1', 'Embedded', 'Point-like, porosity', 'Acceptable'],
        ['W-46', '—', '—', '—', '—', '—', '—', 'No recordable indications', 'Acceptable'],
      ],
    },
    guidance:
      h2('What reviewers check first on a TOFD report') +
      p('A TOFD reviewer opens the image, checks the lateral wave and back-wall are both present and stable along the whole scan, checks the encoder moved in step with the probes, and only then looks at indications. The report needs to let them do that without guessing.') +
      ol([
        'Record the PCS and the depth it was optimised for; the same probes at a different PCS give a different coverage.',
        'State how the upper-surface and back-wall dead zones were covered, and reference the complementary report.',
        'Note any loss of coupling or lateral-wave dropouts and whether those lengths were rescanned.',
        'Size height from the diffracted tip signals and record depth to the top of each indication.',
        'Name the data file and software version so the scan can be reopened.',
      ]),
    automation:
      p('TOFD is its own report type in the NDT Reports app, with its own numbering sequence, and it sits in the same job as the PAUT report that covers its dead zones. Both draw their drawing, WPS, procedure and work-order references from the job, and both go through the same review and approval workflow before they are sent.'),
    faqs: [
      { q: 'Which ASME Section V part covers TOFD?', a: 'Article 4, through its mandatory appendix for TOFD. It requires two probes in a pitch-catch arrangement with the same nominal frequency and element dimensions, plus the equipment, calibration and data-recording rules that appendix sets.' },
      { q: 'What thickness range does ISO 10863 cover?', a: 'ISO 10863:2020 applies to fusion-welded joints of minimum thickness 6 mm in plates, pipes and vessels, with testing levels A to D aligned to ISO 17635.' },
      { q: 'Why does a TOFD report need a complementary technique?', a: 'TOFD has dead zones near the scanning surface and near the back wall. The report must show how those zones were covered, usually by PAUT or pulse-echo UT, or by surface methods.' },
      { q: 'Where are TOFD acceptance levels defined?', a: 'In ISO 15626 for ISO-based work, or in the construction code or client specification that calls for the examination.' },
      { q: 'Should the report state probe centre separation?', a: 'Yes. PCS determines the depth at which the beams intersect and therefore the coverage; without it the scan cannot be reproduced.' },
    ],
  },
];

// ─── Method-specific deep sections (inserted after the guidance) ──────────
export const EXTRA = {
  'ut-weld-inspection-report':
    h2('Recording scanning coverage on the report') +
    p('A UT result is only as strong as the coverage behind it. The report should let a reviewer see which beam angles were used from which surfaces and sides, whether the full weld volume plus the required width of heat-affected zone was covered, and where access limited the scan. A sketch showing scan surfaces and any restricted zones is worth more than a sentence claiming "100% coverage". Where a restriction exists, say what was done about it: an additional angle, a scan from the other side, or a note that the area needs a different method.'),
  'ut-thickness-survey-report':
    h2('Planning the next survey from this one') +
    p('Add a short remarks line for every location that was hard to reach, needed scaffolding, or had to be read through coating, and keep it with the location list. The next crew then knows what access to arrange before they arrive. Record the instrument settings that affect comparability, such as measurement mode and velocity, so the next survey can match them.'),
  'pt-liquid-penetrant-report':
    h2('Visible or fluorescent, and how the excess was removed') +
    p('The penetrant type and the removal method decide the sensitivity of the whole examination, so they belong at the top of the process block. Visible (colour-contrast) penetrants are read under white light and are the usual choice for field weld work; fluorescent penetrants are read under UV-A in darkened conditions and are generally more sensitive. Excess penetrant can be removed with water, with an emulsifier followed by water, or with a solvent wipe; each has its own risk of over-removal from shallow discontinuities, which is why the report records the method and not just the product names. ISO 3452-1 and ASME Section V use different designation systems for the same families, so write the designation your procedure uses and do not translate between them on the report.') +
    p('Where the procedure requires a check of the system against a reference panel, record the panel ID and the result. It is the quickest evidence that the penetrant and developer in use on the day were capable of showing what the procedure claims.'),
  'mt-magnetic-particle-report':
    h2('Choosing and recording the magnetisation technique') +
    p('The technique block tells the reviewer what the examination could and could not find. A yoke is the usual field tool for welds: it is portable, it does not touch the part with current-carrying contacts, and with alternating current it is well suited to surface-breaking cracks. Prods pass current through the part and can leave arc strikes, which is why many clients restrict them on finished or high-strength components; the report should say if prods were used and how contact was controlled. Coils and central conductors are common on shop work for shafts, bars and ring-shaped parts.') +
    p('Particle choice matters as much. Wet fluorescent particles under UV-A generally give the best sensitivity for fine cracks; visible particles on a white contrast paint are practical in daylight on site; dry powder is used on hot or rough surfaces. Record which was used, the product and batch, and for wet particles any concentration check your procedure requires.') +
    ul([
      'Record the yoke leg spacing or prod spacing if your procedure limits it.',
      'Record the surface condition and whether contrast paint was applied, since both affect what can be seen.',
      'If the part is to be machined, welded or used near instruments after the examination, record the demagnetisation step and the residual field reading.',
    ]),
  'rt-radiography-report':
    h2('Technique choice and image quality on the report') +
    p('For pipe welds, the exposure arrangement drives the rest of the technique sheet. Double-wall techniques are used where the film cannot be placed inside the pipe: double-wall single-image shots view only the weld on the film side, while double-wall double-image (elliptical or superimposed) shots are used on small diameters. Single-wall techniques, with the source or film inside the pipe, give the best sensitivity where access allows. Each arrangement changes the number of exposures needed for full coverage, and the report should show enough shots to cover the circumference.') +
    p('Geometric unsharpness depends on the source size and the distances recorded in the technique details, which is why those distances must be on the report rather than in someone\'s notebook. Record where the IQI was placed, since a film-side IQI is interpreted differently from a source-side one, and mark the film accordingly.'),
  'vt-visual-inspection-report':
    h2('Recording the stages of weld visual inspection') +
    p('ISO 17637 describes visual testing at several points in the life of a weld: the joint preparation before welding, during welding, the finished weld, and repaired welds. Many quality plans call for a hold or witness point at more than one of these, and each needs its own record line. Before welding, the report typically covers joint type and preparation, root gap, alignment, cleanliness and tack welds. During welding it covers interpass cleaning, root and hot pass condition, and preheat or interpass temperature if the WPS requires it. After welding it covers size, profile, surface imperfections and cleanliness.') +
    p('Recording the stage on each line prevents a common audit finding: a final visual that is presented as evidence of fit-up checks that were never done. It also lets a project see where repairs originate, which is more useful than knowing only that a weld was rejected at the end.') +
    ul([
      'Fit-up: joint preparation, gap, alignment, tack welds, cleanliness.',
      'In-process: root condition, interpass cleaning, temperature control where required.',
      'Final: size, profile, undercut, porosity, cracks, arc strikes, spatter, cleaning.',
      'Repair: excavation checked before re-welding, then final visual on the repair.',
    ]),
  'paut-phased-array-report':
    h2('Scan plan and coverage evidence') +
    p('A PAUT report without a scan plan is hard to defend. The scan plan shows the weld bevel geometry, the probe position (index offset) for each scan, the focal laws, and the beam coverage of the weld volume and heat-affected zone from each side. It is prepared before the job, checked against the actual component on site, and referenced on the report by number and revision. If the joint geometry on site differs from the drawing, the plan should be revised, and the report should reference the revised plan.') +
    p('Attach or reference the coverage diagram, and state any area the beams could not reach because of access, weld cap geometry or attachments. Reviewers will look for the overlap between scans from different offsets and between the two sides of the weld, so the report should give the offsets actually used, not just the planned ones.'),
  'tofd-report':
    h2('Reading the TOFD image for the report') +
    p('The TOFD image is a record of arrival times, not of amplitudes, and the report should describe indications in those terms. The lateral wave travels just below the scanning surface and the back-wall echo marks the far surface; an embedded flaw typically shows as upper and lower tip signals between them, with the phase of the upper tip opposite to the lower. Surface-breaking flaws interrupt the lateral wave or the back-wall. Point reflectors such as porosity appear as short arcs.') +
    p('Record the depth to the top tip and the through-wall height from the tip signals, and the length from the scan-axis extent after any correction your procedure requires for the arc-shaped ends. Where an indication cannot be characterised from the TOFD image alone, the report should reference the complementary technique used to confirm it.'),
};

// ─── Hub ────────────────────────────────────────────────────────────────────
export const HUB = {
  path: HUB_PATH,
  title: 'NDT Report Templates: Free UT, PT, MT, RT, VT, PAUT, TOFD',
  description: 'Free NDT report templates for UT, UT thickness, PT, MT, RT, VT, PAUT and TOFD, with the fields ASME Section V and ISO require. Print or download, then automate.',
  h1: 'NDT Report Templates',
  lead: 'Eight free NDT report templates, one per method, each built around the fields ASME Section V and the matching ISO standard expect to see. Every template has an example layout, a print view you can save as PDF, and a CSV download. If you want the editable Word or Excel version with your logo, ask and we will send it.',
  faqs: [
    { q: 'What should every NDT report include?', a: 'At minimum: a unique report number and revision, the date, the client and job references, the component and weld or area identification tied to a drawing revision, the procedure and revision, the equipment used, the personnel with method and level, the indications found with location and size, the acceptance standard, the result, and signatures. Each method adds its own technique data.' },
    { q: 'Are these templates code-approved?', a: 'No template is approved by a code on its own. The templates are laid out around the record and report requirements of ASME Section V and the ISO method standards, but your procedure, your written practice and your client specification decide what your report must contain.' },
    { q: 'Can I use these templates for ISO-based work?', a: 'Yes. Each page lists the ISO method standard and its companion acceptance standard, and the fields cover what those standards ask for. Change the acceptance-standard field to the one your contract names.' },
    { q: 'How do I get the editable Word or Excel version?', a: 'Use the request form on any template page. We send the editable file to the email you give, and nothing else is sent unless you ask.' },
    { q: 'Why move reports into software?', a: 'Because the same job, drawing, procedure, equipment and technician details are typed again on every report. In software they are entered once, the report goes through review and approval, and the issued PDF matches your company format.' },
  ],
};

export const SOURCES = [
  ['ASME Section V Article 4 record and report items (T-492, T-493), summarised', 'https://www.ndt.net/article/nde-india2006/files/tp-107.pdf'],
  ['ASME Section V Article 4 overview', 'https://www.weldfabworld.com/asme-section-v/'],
  ['ASME Section V Article 6 examination records (T-691, T-692)', 'https://www.inspection-for-industry.com/liquid-penetrant-testing-in-ASME.html'],
  ['ASME Section V Article 7 examination records', 'https://pdfcoffee.com/asme-section-v-art-7-magnetic-particle-examination-pdf-free.html'],
  ['ASME Section V Article 2 T-291 technique details and T-292 review form (ndt.net forum)', 'https://www.ndt.net/forum/thread.php?rootID=88867'],
  ['ASME Section V Article 9 report (T-991)', 'https://pdfcoffee.com/asme-v-art-9-vt-pdf-free.html'],
  ['ASME Section V Article 23 / SE-797 thickness measurement (ndt.net forum)', 'https://www.ndt.net/forum/thread.php?rootID=88660'],
  ['ASTM E797/E797M-21', 'https://store.astm.org/e0797_e0797m-21.html'],
  ['ISO 17640:2018', 'https://www.iso.org/standard/75737.html'],
  ['ISO 10863:2020', 'https://www.iso.org/standard/75443.html'],
  ['ISO 13588:2019', 'https://www.iso.org/standard/72747.html'],
  ['ISO 16809:2017', 'https://www.iso.org/standard/72430.html'],
  ['ISO 3452-1:2021', 'https://www.iso.org/standard/75696.html'],
  ['ISO 17638:2016', 'https://www.iso.org/standard/67261.html'],
  ['ISO 17636-1:2022', 'https://www.iso.org/standard/78319.html'],
  ['ISO 17636-2:2022', 'https://www.iso.org/standard/78320.html'],
  ['ISO 17637:2016', 'https://www.iso.org/standard/67259.html'],
];

export { HEADER, SIGNOFF, contact };
