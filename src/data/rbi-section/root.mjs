// /inspection/risk-based-inspection — the RBI service page (owner page for "risk based inspection services /
// consulting"). Rewritten 2026-11-23 when the owner made RBI an Atlantis service delivered remotely; imported by
// src/data/inspection-section/sections.mjs so it stays part of the inspection section (menu, cards, breadcrumbs).
// Deliverables only: no named credentials or software. Fitness-for-service (API 579) is not offered.
// RBI_LIVE lists the child pages that are published (src/data/rbi-section/pages/*.json); update it with each release.
export const RBI_LIVE = {
  topics: [],
  countries: [],
};

const P = (slug) => `/inspection/risk-based-inspection/${slug}`;

export const RBI_ROOT = {
  path: '/inspection/risk-based-inspection',
  kind: 'service',
  navLabel: 'Risk-based inspection (RBI)',
  title: 'Risk-Based Inspection (RBI) Services, Delivered Remotely',
  description: 'Remote RBI studies to API 580/581 and ASME PCC-3 for vessels, piping and storage tanks: damage mechanisms, risk ranking and inspection plans.',
  h1: 'Risk-based inspection (RBI) services, delivered remotely',
  eyebrow: 'Inspection',
  intro: 'Risk-based inspection spends inspection effort where the risk is, instead of on a fixed calendar. Done well, it lengthens intervals on equipment that is genuinely low risk and concentrates methods and coverage on the items where a failure would hurt. Done badly, it is a spreadsheet that justifies whatever interval was wanted. Atlantis carries out RBI studies to API RP 580, API RP 581 and ASME PCC-3, or to the operator\'s own RBI standard, for pressure vessels, piping circuits and storage tanks. The study is delivered remotely from your drawings, process data and inspection history, and the plan it produces is one your inspector of record can approve and your inspection teams can execute.',
  highlights: [
    { h: 'Remote by design', p: 'Data arrives through a shared data room and the working sessions run by video, so the study does not wait for a site visit or a visa. Your inspectors verify what needs to be seen in the field; in the United States our UT, MT, PT and VT technicians can close data gaps on site.' },
    { h: 'Built on damage mechanisms', p: 'Every item and piping circuit is assigned credible damage mechanisms to API 571 from its material, temperature and process chemistry. Probability of failure follows from those mechanisms and from how effective past inspection really was, not from an assumed corrosion rate.' },
    { h: 'A plan, not a score', p: 'The output is an inspection plan for each item: method, coverage, expected effectiveness and due date, plus a data-gap log and reassessment triggers. Intervals stay within what API 510, API 570 and API 653 allow, and your inspector of record approves them.' },
  ],
  sections: [
    { id: 'method', h: 'How RBI works', p: [
      'Each equipment item or piping circuit is assessed for probability of failure (POF) and consequence of failure (COF). Probability is driven by the damage mechanisms that can act on the item, the rate at which they act, and the effectiveness of the inspections already carried out. Consequence is driven by the fluid, the inventory that could be released, the location and what a release would do to people, the environment and the business. Risk is the combination of the two, and the purpose of the study is to reduce the risk that inspection can reduce.',
      'API RP 580 sets out what a risk-based inspection programme must contain and how it is managed. API RP 581 provides a quantitative method, with damage factors for each mechanism, a management systems factor and consequence areas, and ASME PCC-3 provides a further framework for inspection planning using risk-based methods. Many operators also have their own RBI procedure, and where they do, the study follows it. Qualitative, semi-quantitative and quantitative approaches all have their place; the choice depends on the size of the facility, the quality of its data and what the regulator or insurer expects to see.',
    ] },
    { id: 'remote', h: 'How a remote RBI study runs', p: [
      'The study starts with a data request tailored to the facility: process flow diagrams and P&IDs, heat and material balances, equipment datasheets and manufacturer\'s data reports, piping line lists and isometrics, inspection reports and thickness history, process chemistry and integrity operating windows, and the existing inspection plan. Documents are shared through a data room, and a data-gap log is opened on day one so that missing information is visible rather than quietly assumed.',
      'Corrosion loops and damage mechanisms are then built with your process, operations, corrosion and inspection people in video workshops, item by item for the critical units. Risk is calculated and reviewed in a second round of sessions, and the inspection plans are drafted with the people who will execute them. Field verification, such as confirming insulation condition, injection-point locations or the condition of a tank floor, is carried out by your inspectors against a list the study produces. Remote delivery also means the work can follow a turnaround schedule across time zones without travel being the constraint.',
    ] },
    { id: 'scope', h: 'What an RBI study covers', list: [
      'Facility and unit boundaries, equipment and circuit register, and the governing codes and operator standards.',
      'Data collection, data-gap log and agreed assumptions for anything that cannot be found.',
      'Corrosion loops and damage mechanism assignment to API 571, with integrity operating windows to API 584 where they drive the damage rate.',
      'Probability and consequence of failure, qualitative, semi-quantitative or quantitative as the facility needs.',
      'Risk ranking and the risk targets the owner sets.',
      'Inspection plans with methods, coverage, effectiveness and due dates for each item, and CML or TML optimisation for piping.',
      'Reassessment triggers: process changes, IOW exceedances, new inspection results and a fixed review cycle.',
      'A report and a register the owner keeps, in a format that can be loaded into the owner\'s inspection system or RBI software.',
    ] },
    { id: 'equipment', h: 'Pressure vessels, piping and storage tanks', p: [
      'Pressure vessels, columns and heat exchangers are assessed against API 510, which allows inspection intervals to be set by an RBI assessment that meets API RP 580, within the code\'s own limits. Exchanger bundles, internal versus on-stream inspection and the credit given to each technique are where most of the value lies.',
      'Process piping is assessed circuit by circuit under API 570 and API 574: corrosion loops, injection and mix points, dead legs, corrosion under insulation and small-bore connections. The plan sets which CMLs to keep, add or retire and which technique each needs.',
      'Aboveground storage tanks are assessed under API 653, which allows the internal inspection interval to be set by RBI, with API 575 for inspection practice. Product-side and soil-side bottom corrosion, the floor scan data, the shell and the roof each carry their own mechanisms, and the plan says when the next out-of-service inspection is due and what it must cover.',
    ] },
    { id: 'execute', h: 'From plan to inspection', p: [
      'An RBI plan is only useful if it is executed with the methods and coverage it assumed. A plan that credits a highly effective inspection and then receives a spot thickness check has overstated its own confidence. The plans we write state the technique, the coverage and the effectiveness each inspection must achieve, so the inspection contractor knows what is needed and the next reassessment knows what was actually done.',
      'In the United States, Atlantis can carry out ultrasonic thickness surveys, corrosion mapping and magnetic particle, penetrant and visual examination to close data gaps or execute parts of the plan, with procedures reviewed by an ASNT NDT Level III. Atlantis does not perform radiography in the United States. Elsewhere, the plan is executed by your inspection contractor, and we review the results back into the model.',
    ] },
    { id: 'boundary', h: 'What stays with the owner', p: [
      'The owner\'s inspector of record, whether an API 510, 570 or 653 inspector, an Authorized Inspector or the operator\'s inspection authority, approves the intervals and remains responsible for them. Atlantis builds the study and recommends; it does not act as inspector of record.',
      'When inspection finds damage that falls outside the construction code, such as wall loss below the minimum required thickness or a crack-like flaw, the next step is a fitness-for-service assessment to API 579-1/ASME FFS-1 by the owner\'s engineer. Atlantis does not perform fitness-for-service assessments; the RBI model is updated with the outcome.',
    ] },
    { id: 'who', h: 'Who uses an outside RBI study', p: [
      'Refineries, petrochemical and chemical plants, gas processing plants, terminals and tank farms, and power plants use outside RBI studies for different reasons: to set up a first programme, to extend one from a pilot unit to the whole site, to revalidate a model that has drifted out of date, or to prepare for an audit by a regulator or insurer. Terminal and tank-farm owners in particular use RBI to plan out-of-service tank inspections, which are expensive in lost storage, around what the floor and shell data actually show.',
    ] },
  ],
  codes: ['API RP 580 (risk-based inspection)', 'API RP 581 (risk-based inspection methodology)', 'ASME PCC-3 (inspection planning using risk-based methods)', 'API 571 (damage mechanisms)', 'API 584 (integrity operating windows)', 'API 510, API 570 and API 653 (in-service inspection codes)', 'API 574 and API 575 (inspection practices)'],
  deliverables: ['RBI register with POF, COF and risk for every item', 'Inspection plan with methods, coverage, effectiveness and due dates', 'Corrosion loop and damage mechanism report', 'Data-gap log and agreed assumptions', 'Reassessment criteria and review schedule'],
  industries: ['Refining and petrochemical', 'Tank terminals and storage', 'Gas processing and LNG', 'Chemical and fertiliser', 'Power generation'],
  faqs: [
    { q: 'Can an RBI study really be done remotely?', a: 'Yes, for the engineering work: data collection, damage mechanism review, risk calculation and plan writing all run from documents and video workshops. What needs eyes in the field, such as insulation condition or the location of an injection point, goes on a verification list for your inspectors. In the United States our technicians can also collect thickness data on site.' },
    { q: 'Can RBI extend inspection intervals?', a: 'Yes, where the assessment shows low risk and the inspection history supports it, within the limits of the governing code. API 510, API 570 and API 653 each allow RBI-based intervals subject to their own conditions, and the owner\'s inspector of record approves them.' },
    { q: 'Do we need RBI software to run the programme?', a: 'Not to start. Small programmes run on a structured register; larger ones usually move into commercial RBI software. The study is delivered in a format that can be loaded into the owner\'s system, and if you already run RBI software we work from its exports and return results in the same structure.' },
    { q: 'How often should an RBI assessment be updated?', a: 'When process conditions, damage mechanisms, operating windows or inspection results change, after major repairs or modifications, and on a fixed review cycle written into the programme so the plan never runs on stale data. API RP 580 describes the triggers.' },
    { q: 'Which RBI method do you use?', a: 'The one the facility needs and the owner accepts: qualitative screening for a first pass, semi-quantitative for most units, and the quantitative method of API RP 581 where the data supports it and the owner wants it. If the operator has its own RBI standard, the study follows that standard.' },
    { q: 'Does Atlantis perform fitness-for-service assessments?', a: 'No. When inspection finds damage outside the construction code, the fitness-for-service assessment to API 579-1/ASME FFS-1 stays with the owner\'s engineer. The RBI model is then updated with the outcome and the revised inspection plan.' },
    { q: 'What do you need from us to start?', a: 'An equipment and line list for the units in scope, P&IDs and process flow diagrams, heat and material balances, design data, inspection history and thickness data, and a contact in operations, process and inspection for the workshops. Gaps are logged rather than guessed, and the study states every assumption it had to make.' },
  ],
  related: [['/inspection/asset-integrity-services', 'Asset integrity services'], ['/inspection/turnarounds-shutdowns', 'Turnarounds and shutdowns'], ['/tools/api-inspection-interval-calculator', 'API inspection interval calculator'], ['/standards/api-580', 'API RP 580 explained'], ['/standards/api-581', 'API RP 581 explained'], ['/blog/risk-based-inspection-rbi-explained-api-580-vs-api-581', 'API 580 vs API 581'], ['/consulting/rbi-program-design', 'The NDT data an RBI study needs']],
};

// Link pills to the published child pages (topics, then countries).
if (RBI_LIVE.topics.length) RBI_ROOT.sections.splice(4, 0, { id: 'topics', h: 'RBI by equipment and subject', p: 'Each page below goes deeper into one part of an RBI study.', links: RBI_LIVE.topics });
if (RBI_LIVE.countries.length) RBI_ROOT.sections.splice(RBI_ROOT.sections.length - 1, 0, { id: 'countries', h: 'RBI services by country', p: 'Country pages cover the regulators, operator standards and storage and refining hubs that shape RBI there. Every study is delivered remotely.', links: RBI_LIVE.countries });
export { P as rbiPath };
