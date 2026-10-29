// NDT Level III consulting section (owner, 2026-10-19): "expand NDT level III consulting pages with
// more content or links to sub pages each — Audit consulting, SNT-TC-1A Training program setup,
// regulatory compliance, ISO 9001, 17020 17025 requirements. Client audits for subcontractor
// approvals, document requirements and so on … listed in navigation."
// Six topic pages on the shared service-section template (same look as /inspection and the rest of
// the site). Each topic links down to the detailed consulting pages that already exist, and those
// pages link back up (consultingTopicLinksFor). One model for React (ConsultingSection.tsx →
// ServiceSectionPage) and the crawler (scripts/consulting-section-2026-10.mjs).
// Rules: no prices; founder = ASNT NDT Level III in UT, RT, MT, PT, VT (§54); NAS 410 is not named or
// offered anywhere on the site (§65, owner 2026-10-28); Atlantis is ISO 9001 + ISO 14001 certified, not accredited to
// ISO/IEC 17020 or 17025 and not a certification/accreditation body (§59.6); time promise only
// "we reply within one business day" (§59.2).
import { createServiceSection, upLinkHtml } from '../service-section/core.mjs';

const C = '/consulting';
const L3 = '/consulting/ndt-consulting-level-iii';
export const CONSULTING_ENQUIRY = '/contact?service=consulting&subject=Level%20III%20consulting';

const P = {
  audit: '/consulting/ndt-audit-consulting',
  sub: '/consulting/subcontractor-approval-audits',
  snt: '/consulting/snt-tc-1a-training-program-setup',
  docs: '/consulting/ndt-documentation-requirements',
  reg: '/consulting/ndt-regulatory-compliance',
  iso: '/consulting/iso-9001-17020-17025-ndt',
};
export const CONSULTING_TOPIC_PATHS = P;

const WHO = {
  id: 'who', h: 'Who does the work',
  p: [
    'Consulting is led by ASNT NDT Level III personnel. Our founder holds ASNT NDT Level III in UT, RT, MT, PT and VT, with more than eleven years of international NDT field experience.',
    'A Level III signs only within the methods they are certified in. Where a scope needs another method or scheme, the proposal names who will cover it before work starts. Under SNT-TC-1A the certifying authority always remains the employer; an outside Level III writes and approves the technical documents, prepares and grades examinations and signs in the capacity the written practice assigns.',
  ],
};

const AUDIT_BY_INDUSTRY = [
  ['refining', 'Refining'], ['petrochemical', 'Petrochemical'], ['pipeline', 'Pipeline'], ['power-generation', 'Power generation'],
  ['offshore', 'Offshore and subsea'], ['lng', 'LNG'], ['tank-terminals', 'Tank terminals'], ['fabrication', 'Fabrication and vessel shops'],
  ['maritime', 'Maritime'], ['shipbuilding', 'Shipbuilding and repair'], ['nuclear', 'Nuclear'], ['aerospace', 'Aerospace (Nadcap)'],
  ['infrastructure', 'Bridges and infrastructure'], ['mining', 'Mining and minerals'], ['steel-metals', 'Steel and metals'],
].map(([s, l]) => [`/consulting/level-iii-audit-support-${s}`, l]);

const WP_BY_INDUSTRY = [
  ['refining', 'Refining'], ['petrochemical', 'Petrochemical'], ['chemical-manufacturing', 'Chemical manufacturing'], ['lng', 'LNG'],
  ['upstream-offshore', 'Upstream and offshore'], ['oil-sands', 'Oil sands'], ['tank-terminals', 'Tank terminals'], ['power-generation', 'Power generation'],
  ['nuclear-power', 'Nuclear power'], ['fabrication-shops', 'Fabrication shops'], ['aerospace', 'Aerospace'], ['steel-metals', 'Steel and metals'],
  ['mining-minerals', 'Mining and minerals'], ['pulp-paper', 'Pulp and paper'],
].map(([s, l]) => [`/consulting/written-practice-for-${s}`, l]);

const PAGES = [
  {
    path: P.audit, kind: 'topic', navLabel: 'Audit consulting',
    title: 'NDT Audit Consulting: Level III Programme Audits',
    description: 'ASNT Level III audits of your NDT programme: written practice, personnel files, procedures and reports, checked before a client, registrar or Nadcap does.',
    h1: 'NDT audit consulting',
    intro: 'Most NDT audit findings are found in records, not in technique: a certification signed outside the Level III’s methods, a vision examination that lapsed, a procedure that no longer matches the code edition on the contract. An ASNT Level III from Atlantis audits your NDT programme the way a client, a registrar or a Nadcap auditor will, before they do, and helps you close what the audit finds.',
    cardsTitle: 'Audit topics', cardsSub: 'Detailed pages on the audits and findings we work on most.',
    cards: [
      { href: '/consulting/ndt-program-audit-gap-assessment', label: 'NDT programme gap assessment', text: 'How findings are classified and the order to fix them in, from certification gaps to report traceability.' },
      { href: '/consulting/nadcap-ac7114-audit-readiness', label: 'Nadcap AC7114 audit readiness', text: 'Aerospace NDT audits land on records: personnel files, procedures and process control.' },
      { href: '/consulting/level-iii-method-scope-limitations', label: 'Level III scope findings', text: 'Why signing outside a Level III’s certified methods is one of the commonest audit findings.' },
      { href: '/consulting/interim-ndt-level-3', label: 'Interim Level III cover before an audit', text: 'What an interim Level III can put right before the auditor arrives, and what it cannot.' },
      { href: '/consulting/api-510-program-audit', label: 'API 510 programme audit', text: 'In-service inspection programme audits for pressure vessels against API 510.' },
      { href: '/consulting/osha-psm-mechanical-integrity-ndt', label: 'PSM mechanical integrity audits', text: 'How an OSHA PSM audit reads your NDT file as mechanical integrity evidence.' },
    ],
    sections: [
      { id: 'what', h: 'What an NDT programme audit covers', list: [
        'The written practice, checked against the current edition of ASNT SNT-TC-1A (or CP-189, ISO 9712 or the client’s scheme) and against the methods and levels you actually use.',
        'Personnel files: training and experience hours, General, Specific and Practical examination records, vision examinations and the certification letter signed in line with the written practice.',
        'Procedures and technique sheets: who approved them, which code edition they cite and whether the acceptance criteria match the contract.',
        'Equipment: calibration and verification records for instruments, probes, reference blocks and image quality indicators, with due dates.',
        'Reports: traceability to the procedure and the technician, coverage achieved and limitations, and the signatures the written practice requires.',
        'Subcontracted NDT: how the scope, the procedures and the certifications of subcontractors are controlled.',
      ] },
      { id: 'types', h: 'Audits we carry out', list: [
        'Internal audits of the NDT programme, run to the internal audit requirements of your quality management system (for example ISO 9001 clause 9.2).',
        'Mock client or second-party audits before a customer’s supplier audit.',
        'Pre-assessments before a Nadcap audit or an accreditation assessment.',
        'Corrective action support after an audit has raised findings, through to closure evidence.',
      ] },
      { id: 'how', h: 'How an audit runs', list: [
        'Scope: the schemes, methods, sites and the audit you are preparing for.',
        'Document review, usually remote: written practice, procedures, a sample of personnel files and reports.',
        'Site visit where needed: interviews, witnessed examinations and a look at equipment and records in use.',
        'Findings classified as major, minor or observation, each with the clause or requirement it relates to.',
        'A corrective action plan with owners, then verification that each finding is closed.',
      ] },
      { id: 'findings', h: 'Findings we see most often', list: [
        'A Level III approving procedures or signing certifications in a method they are not certified in.',
        'Experience hours claimed but not evidenced in the technician’s file.',
        'Vision examinations past their annual date.',
        'Examination results kept without the questions and answer keys that were used.',
        'Procedures citing a superseded code edition, or technique sheets missing for encoded work.',
      ] },
      { id: 'by-industry', h: 'Audit support by industry', p: 'Each industry page covers the codes, the regulator or client schemes and the records that audits in that sector focus on.', links: AUDIT_BY_INDUSTRY },
      WHO,
    ],
    codes: ['ASNT SNT-TC-1A', 'ANSI/ASNT CP-189', 'ISO 9712',  'ISO 9001 clause 9.2 (internal audit)', 'Client and operator specifications'],
    deliverables: ['Audit plan and checklist built for your scope', 'Findings report with clause references', 'Corrective action plan with owners', 'Closure verification record'],
    industries: ['Refining and petrochemical', 'Pipelines and terminals', 'Power generation', 'Fabrication and construction', 'Aerospace', 'Marine and offshore'],
    faqs: [
      { q: 'How long before a client audit should we book a mock audit?', a: 'Early enough to fix what it finds. Record gaps such as missing experience evidence, lapsed vision examinations or unapproved procedures take time to close properly, so book the mock audit well ahead of the client’s date rather than in the last week.' },
      { q: 'Can an outside Level III audit a programme they helped write?', a: 'An auditor should not audit their own work. If Atlantis drafted your written practice, the audit report says so and concentrates on how the programme is run against it: personnel files, examinations, procedures and reports.' },
      { q: 'What happens after the audit report?', a: 'Each finding gets an owner and a corrective action. We help draft the corrections, such as revised procedures, completed personnel files or new examinations, and verify the evidence before the client or registrar sees it.' },
    ],
    related: [[L3, 'Outsourced ASNT Level III consulting'], [P.sub, 'Client audits for subcontractor approval'], [P.docs, 'NDT documentation requirements']],
  },
  {
    path: P.sub, kind: 'topic', navLabel: 'Client & subcontractor approval audits',
    title: 'NDT Subcontractor Approval Audits: Client Audit Preparation',
    description: 'Prepare your NDT company for a client’s subcontractor approval audit, or have an ASNT Level III audit NDT subcontractors before you approve them.',
    h1: 'Client audits for subcontractor approval',
    intro: 'Before an operator, EPC contractor or fabricator puts an NDT company on its approved vendor list, it audits it. Atlantis works on both sides of that audit: we prepare NDT subcontractors to pass a client’s prequalification audit, and we audit NDT subcontractors for owners and contractors who want an independent Level III view before approving one.',
    cardsTitle: 'Approval schemes and sector audits', cardsSub: 'Detailed pages on the approvals NDT subcontractors are most often asked for.',
    cards: [
      { href: '/consulting/iacs-service-supplier-approval', label: 'IACS service supplier approval', text: 'Class approval of service suppliers under IACS UR Z17: per society, renewed on a cycle.' },
      { href: '/consulting/utm-operator-qualification-class-approval', label: 'UTM firm class approval', text: 'Thickness measurement firms are audited on operator files before procedures.' },
      { href: '/consulting/esp-survey-readiness-consulting', label: 'ESP survey readiness', text: 'Enhanced survey programme gauging goes to firms already on the class approved list.' },
      { href: '/consulting/aerospace-responsible-level-iii', label: 'Aerospace Level III consulting', text: 'ASNT Level III consulting behind the aerospace Level III role: written practice, procedures, exams and audits.' },
      { href: '/consulting/faa-part-145-repair-station-ndt', label: 'FAA Part 145 repair station NDT', text: 'What an NDT rating means for a repair station and how auditors read it.' },
      { href: '/consulting/navsea-ndt-requirements-shipyard', label: 'NAVSEA shipyard NDT', text: 'NAVSEA Technical Publication 271 and what Navy yards expect of NDT suppliers.' },
      { href: '/consulting/aar-m-1003-ndt-tank-car-facility', label: 'AAR M-1003 tank car facilities', text: 'NDT elements of AAR M-1003 quality assurance for tank car facilities.' },
    ],
    sections: [
      { id: 'what-clients-check', h: 'What a client checks before approving an NDT subcontractor', list: [
        'The supplier questionnaire, answered consistently with the documents behind it.',
        'The written practice and the certifications of the technicians proposed for the work, for the methods and levels quoted.',
        'The Level III arrangement: a staff Level III or an outside agency, named, with the methods each one is certified in.',
        'Procedures approved for the codes and specifications on the client’s contracts.',
        'Equipment lists with calibration and verification records.',
        'Sample reports that show coverage, limitations and acceptance against stated criteria.',
        'The quality management system and the corrective action records behind it.',
      ] },
      { id: 'for-subcontractors', h: 'For NDT companies being audited', p: 'We review your documents against the client’s questionnaire and specification, close the gaps, assemble the evidence pack the auditor will ask for and run a mock audit so the real one holds no surprises. Where the written practice assigns it, our Level III is available to answer the auditor’s technical questions on the methods we cover.' },
      { id: 'for-owners', h: 'For owners and contractors approving NDT subcontractors', p: 'We audit NDT subcontractors on your behalf against your specification and the scheme they certify to: certifications checked against the written practice, procedures against your codes, a sample of reports and, where useful, a witnessed practical demonstration. The report gives our findings and a recommendation; the approval decision stays with you.' },
      WHO,
    ],
    codes: ['ASNT SNT-TC-1A, ANSI/ASNT CP-189 or ISO 9712, as the scope requires', 'Client and operator specifications', 'IACS UR Z17 (class service suppliers)', 'ISO 9001 (supplier quality management)', 'ASME, AWS or API codes on the contract'],
    deliverables: ['Gap review against the client’s questionnaire', 'Evidence pack index', 'Mock audit report', 'For owners: subcontractor audit report with a recommendation'],
    industries: ['Operators and asset owners', 'EPC contractors', 'Fabricators', 'Shipyards and class work', 'Aerospace supply chain'],
    faqs: [
      { q: 'What do client auditors ask an NDT subcontractor for first?', a: 'Usually the written practice, the certifications of the technicians proposed for the job and the Level III arrangement behind them, then the procedures for the codes on the contract. If those line up, the rest of the audit is mostly records.' },
      { q: 'Can you audit our NDT subcontractors on our behalf?', a: 'Yes. We audit against your specification and the scheme the subcontractor certifies to, and report what we found with a recommendation. The approval decision stays with you.' },
    ],
    related: [[P.audit, 'NDT audit consulting'], [P.docs, 'NDT documentation requirements'], ['/inspection/technical-staffing-services', 'Technical staffing services']],
  },
  {
    path: P.snt, kind: 'topic', navLabel: 'SNT-TC-1A training programme setup',
    title: 'SNT-TC-1A Training Programme Setup for NDT Employers',
    description: 'Set up an NDT certification programme to ASNT SNT-TC-1A: written practice, training plan, experience records, examinations and vision checks.',
    h1: 'SNT-TC-1A training programme setup',
    intro: 'Under ASNT SNT-TC-1A the employer certifies its own NDT personnel, so every certificate needs a programme behind it: a written practice, training to it, recorded experience, examinations and a Level III to run them. Atlantis sets that programme up, whether you are a new inspection company starting from an empty folder or an established employer adding methods, sites or a new client scheme.',
    cardsTitle: 'Programme topics', cardsSub: 'Detailed pages on each part of an employer programme.',
    cards: [
      { href: '/ndt-written-practice-development', label: 'Written practice development', text: 'What an SNT-TC-1A written practice must contain, and how we draft or revise one.' },
      { href: '/consulting/ndt-program-for-a-startup-inspection-company', label: 'Programme for a start-up', text: 'The build order for a new inspection company: practice before equipment.' },
      { href: '/consulting/ndt-examination-question-bank-development', label: 'Examination question banks', text: 'Sizing, security and grading of General and Specific question banks.' },
      { href: '/consulting/ndt-level-3-exam-oversight', label: 'Examination oversight', text: 'Who may administer certification examinations, and who may not.' },
      { href: '/consulting/multi-site-ndt-program-harmonisation', label: 'Multi-site harmonisation', text: 'One written practice across branches without losing control of each site.' },
      { href: '/consulting/ndt-level-iii-succession-planning', label: 'Level III succession planning', text: 'What lapses the day a Level III leaves, and how to plan for it.' },
    ],
    sections: [
      { id: 'contents', h: 'What the programme contains', list: [
        'A written practice that sets the scope, the levels, training and experience requirements, examinations, vision requirements, certification, recertification and records.',
        'A training plan by method and level, using the hours recommended in SNT-TC-1A or values the employer justifies in the written practice.',
        'Experience logs that record supervised hours by method, so the hours can be shown at audit.',
        'General, Specific and Practical examinations, with grading and retention of the papers and answer keys.',
        'Vision examinations: near-vision acuity and colour contrast, at the intervals the written practice sets.',
        'Certification letters signed as the written practice requires, and a recertification and interrupted-service procedure.',
      ] },
      { id: 'setup', h: 'How we set it up', list: [
        'Scope review: the methods and levels you need, the codes and clients you work to and any client scheme on top of SNT-TC-1A.',
        'Written practice drafted, reviewed with you and approved.',
        'Training: Atlantis self-paced online courses, your own training or a mix, mapped to the written practice.',
        'Experience log and certification record templates, on paper, in a spreadsheet or in Atlantis ERP.',
        'Examination banks and practical specimens planned for each method and level.',
        'First examinations and certifications, then a records structure that keeps the programme audit-ready.',
      ] },
      { id: 'roles', h: 'Who does what under SNT-TC-1A', table: { head: ['Role', 'Responsibility'], rows: [
        ['Employer', 'Certifies personnel under its written practice and keeps the records.'],
        ['NDT Level III (staff or outside agency)', 'Approves procedures, prepares and administers examinations and signs as the written practice assigns.'],
        ['Training provider', 'Delivers the training hours and records them; a course does not certify.'],
        ['Technician', 'Completes training and experience and passes the General, Specific and Practical examinations.'],
      ] } },
      { id: 'wp-by-industry', h: 'Written practices by industry', p: 'Industry pages on what an employer’s written practice has to cover in each sector.', links: WP_BY_INDUSTRY },
      { id: 'tools', h: 'Free tools for programme setup', links: [['/tools/snt-tc-1a-hours-planner', 'SNT-TC-1A hours planner'], ['/snt-tc-1a-eligibility', 'SNT-TC-1A eligibility checker'], ['/training', 'Self-paced NDT training']] },
      WHO,
    ],
    codes: ['ASNT SNT-TC-1A (current edition)', 'ANSI/ASNT CP-105 (training outlines)', 'ANSI/ASNT CP-189 where a contract requires it', 'ASME Section V, Article 1', 'Client certification schemes'],
    deliverables: ['Written practice', 'Training matrix by method and level', 'Experience log template', 'Examination bank and practical specimen plan', 'Certification and recertification record structure'],
    industries: ['New inspection companies', 'Fabricators adding in-house NDT', 'Asset owners with in-house inspection', 'Employers adding methods or sites'],
    faqs: [
      { q: 'Does an SNT-TC-1A course certify a technician?', a: 'No. A course provides training hours. Under SNT-TC-1A the employer certifies, after the technician has the training and experience the written practice requires and has passed the General, Specific and Practical examinations.' },
      { q: 'Can our Level III be an outside agency?', a: 'Yes. SNT-TC-1A allows the employer to use an outside agency, such as an outside Level III, for training and examinations. The employer remains responsible for certification and for its written practice.' },
      { q: 'Can the programme run in software rather than on paper?', a: 'Yes. Certifications, examinations, vision records and experience logs can be kept in a spreadsheet or in Atlantis ERP, which flags expiring certificates. What matters to an auditor is that each record is complete and traceable.' },
    ],
    related: [[L3, 'Outsourced ASNT Level III consulting'], [P.docs, 'NDT documentation requirements'], ['/ndt-training-faq', 'NDT training FAQs']],
  },
  {
    path: P.docs, kind: 'topic', navLabel: 'Documentation requirements',
    title: 'NDT Documentation Requirements: Procedures, Records, Reports',
    description: 'The documents an NDT programme needs and who signs each: written practice, certifications, procedures, technique sheets, calibration records, reports.',
    h1: 'NDT documentation requirements',
    intro: 'An NDT programme is judged on paper as much as on the weld. Codes, clients and auditors expect a set of documents that shows who was qualified to do the work, to which procedure, with which equipment, and what they found. Atlantis writes, reviews and organises that document set so it stands up when someone asks for it.',
    cardsTitle: 'Document topics', cardsSub: 'Detailed pages on the documents that cause the most trouble.',
    cards: [
      { href: '/ndt-written-practice-development', label: 'Written practice', text: 'The document every SNT-TC-1A certification rests on.' },
      { href: '/consulting/ndt-technical-procedure-development', label: 'NDT procedures and technique sheets', text: 'Procedures written to the governing code, approved by a Level III.' },
      { href: '/consulting/ndt-procedure-qualification-demonstration', label: 'Procedure qualification by demonstration', text: 'Flawed blocks and qualification records where a code or client asks for them.' },
      { href: '/report-validation', label: 'NDT report validation', text: 'Independent review of issued reports against the procedure and acceptance criteria.' },
      { href: '/consulting/outside-ndt-level-3-can-and-cannot-do', label: 'What an outside Level III can sign', text: 'Which documents an outside Level III may approve, and which the employer must.' },
      { href: '/consulting/ndt-level-3-resigned-what-to-do', label: 'When your Level III leaves', text: 'Which documents stop and which continue when a Level III resigns.' },
    ],
    sections: [
      { id: 'set', h: 'The document set and who owns it', table: { head: ['Document', 'What it shows', 'Who signs or owns it'], rows: [
        ['Written practice', 'How personnel are trained, examined and certified', 'The employer; reviewed and approved by the Level III'],
        ['Personnel certification records', 'Training and experience hours, examination results, vision, certification letter', 'The employer'],
        ['NDT procedures', 'Method, technique, code edition and acceptance criteria', 'Approved by the Level III'],
        ['Technique sheets and scan plans', 'Settings for a specific part, weld or geometry', 'Level II or Level III, as the written practice states'],
        ['Equipment calibration and verification records', 'Instruments, probes, reference blocks and image quality indicators, with due dates', 'The employer'],
        ['Procedure demonstration records', 'Evidence that a technique finds what it must, where a code or client requires it', 'The Level III'],
        ['Inspection reports', 'What was examined, coverage and limitations, indications and their disposition', 'The Level II who performed or interpreted the examination'],
        ['Audit and corrective action records', 'Internal audit findings and their closure', 'The quality function'],
      ] } },
      { id: 'failures', h: 'Where documents usually fail', list: [
        'Procedures that cite a superseded code edition or a code the contract does not use.',
        'Encoded PAUT, TOFD or corrosion mapping work with no technique sheet or scan plan.',
        'Reports that give readings but no coverage, limitations or acceptance criteria.',
        'Calibration certificates that cannot be traced to the instrument or block used.',
        'Certification letters that do not state the method, level and expiry date.',
        'Records not kept for the period the code, contract or regulator requires.',
      ] },
      { id: 'retention', h: 'Retention', p: 'How long records are kept is set by the governing code, the contract or the regulator, and the written practice should state it. Personnel certification records, including examination papers and answer keys, are worth keeping beyond the certification period, because reports signed by that person may be audited long after.' },
      { id: 'templates', h: 'Free templates and checklists', links: [['/resources/qualification-and-calibration-register', 'Qualification and calibration register'], ['/resources/client-audit-evidence-pack-checklist', 'Client audit evidence pack checklist'], ['/tools/snt-tc-1a-hours-planner', 'SNT-TC-1A hours planner']] },
      WHO,
    ],
    codes: ['ASNT SNT-TC-1A, ANSI/ASNT CP-189 or ISO 9712', 'ASME Section V', 'AWS D1.1', 'API 510, API 570 and API 653', 'ISO 9001 clause 7.5 (documented information)'],
    deliverables: ['Document register for the NDT programme', 'Reviewed or rewritten procedures', 'Templates for technique sheets, reports and calibration logs', 'Retention schedule'],
    faqs: [
      { q: 'Who must approve an NDT procedure?', a: 'Under SNT-TC-1A the Level III is responsible for establishing and approving techniques and procedures. The written practice and the referencing code can add requirements, such as demonstrating the procedure on a qualification block.' },
      { q: 'How long should NDT records be kept?', a: 'As long as the governing code, contract or regulator requires, and the written practice should say so. Certification records are usually kept well beyond the certification period, because reports signed by that person may be audited later.' },
    ],
    related: [[P.audit, 'NDT audit consulting'], [P.snt, 'SNT-TC-1A training programme setup'], [P.iso, 'ISO 9001, 17020 and 17025 requirements']],
  },
  {
    path: P.reg, kind: 'topic', navLabel: 'Regulatory compliance',
    title: 'NDT Regulatory Compliance: PSM, PHMSA, ASME, FAA, NRC',
    description: 'NDT programmes mapped against OSHA PSM, PHMSA 49 CFR 192 and 195, ASME and NBIC, FAA Part 145, NRC and class rules, with the gaps closed.',
    h1: 'NDT regulatory compliance',
    intro: 'Regulators rarely write NDT rules of their own. They adopt codes and expect the employer to show that inspection was done by qualified people to recognised practice. Atlantis maps an NDT programme against the regime it operates under and closes the gaps an inspector, a regulator or an auditor would find.',
    cardsTitle: 'Regimes in detail', cardsSub: 'Detailed pages on the regulatory regimes our clients work under.',
    cards: [
      { href: '/consulting/osha-psm-mechanical-integrity-ndt', label: 'OSHA PSM mechanical integrity', text: 'What 1910.119(j) asks of inspection and testing, and of the records behind it.' },
      { href: '/consulting/nqa-1-nuclear-supplier-ndt-program', label: 'Nuclear supplier NDT programmes', text: 'NQA-1 suppliers, and where CP-189 replaces SNT-TC-1A.' },
      { href: '/consulting/nuclear-ndt-consulting', label: 'Nuclear NDT consulting', text: 'CP-189 and ASME Section XI personnel requirements.' },
      { href: '/consulting/faa-part-145-repair-station-ndt', label: 'FAA Part 145 repair stations', text: 'NDT ratings and personnel qualification at repair stations.' },
      { href: '/consulting/offshore-ndt-consulting', label: 'Offshore (BSEE)', text: 'Offshore NDT records that feed the regulator’s inspection filings.' },
      { href: '/consulting/energy-utilities-ndt-consulting', label: 'Power piping (ASME B31.1)', text: 'Who may perform visual examination on power piping under B31.1.' },
      { href: '/consulting/navsea-ndt-requirements-shipyard', label: 'NAVSEA shipyards', text: 'Navy shipyard NDT requirements under Technical Publication 271.' },
      { href: '/consulting/aar-m-1003-ndt-tank-car-facility', label: 'AAR M-1003 tank cars', text: 'NDT elements of AAR M-1003 for tank car facilities.' },
      { href: '/consulting/iacs-service-supplier-approval', label: 'Classification societies (IACS)', text: 'Service supplier approval under IACS UR Z17.' },
    ],
    sections: [
      { id: 'regimes', h: 'Regimes we map NDT programmes against', table: { head: ['Regime', 'Where it applies', 'What it asks of NDT'], rows: [
        ['OSHA 29 CFR 1910.119(j) process safety management', 'US facilities handling highly hazardous chemicals above threshold quantities', 'Inspection and testing to recognised and generally accepted good engineering practice (commonly API 510, 570 and 653), documented, with deficiencies corrected'],
        ['PHMSA 49 CFR Parts 192 and 195', 'US gas and hazardous liquid pipelines', 'Nondestructive testing of welds by personnel trained and qualified in the procedures and equipment used (192.243, 195.234), with API 1104 incorporated by reference'],
        ['ASME Boiler and Pressure Vessel Code and NBIC', 'Pressure equipment under state or provincial jurisdiction', 'Personnel qualified as the referencing code section requires, commonly to SNT-TC-1A or CP-189, with Authorized Inspector acceptance'],
        
        ['NRC 10 CFR 50 Appendix B and ASME Section XI', 'Nuclear plants and their suppliers', 'A quality assurance programme, and CP-189 certification for Section XI NDE personnel'],
        ['BSEE 30 CFR Part 250', 'US offshore platforms', 'Inspection programmes and records the regulator can review'],
        ['Classification society rules (IACS members)', 'Ships and offshore units', 'Service supplier approval and NDT personnel requirements in the class rules'],
      ] } },
      { id: 'work', h: 'What compliance work includes', list: [
        'A map of the regime and the codes it adopts for each asset type and scope you work on.',
        'A written practice and procedures aligned with what that regime adopts.',
        'Records structured the way the regulator, the Authorized Inspector or the client will review them.',
        'A gap list with a corrective plan and owners.',
        'Ongoing Level III support as codes and editions change.',
      ] },
      { id: 'limit', h: 'What we are and are not', p: 'Atlantis is not a regulator, an Authorized Inspection Agency or a notified body. We prepare the programme and the evidence; the regulator, the Authorized Inspector or the client decides acceptance.' },
      WHO,
    ],
    codes: ['OSHA 29 CFR 1910.119', '49 CFR Parts 192 and 195', 'ASME BPVC Sections V, VIII and XI', 'NBIC', '14 CFR Part 145', '10 CFR 50 Appendix B', '30 CFR Part 250'],
    deliverables: ['Regime and code map', 'Gap assessment', 'Aligned written practice and procedures', 'Corrective action plan'],
    industries: ['Refining and chemicals', 'Pipelines', 'Power generation', 'Nuclear supply chain', 'Aviation repair stations', 'Offshore and marine'],
    faqs: [
      { q: 'Is SNT-TC-1A a regulation?', a: 'No. SNT-TC-1A is ASNT’s recommended practice for an employer’s own certification programme. It becomes mandatory when a code, a regulation or a contract adopts it, which is common for pressure equipment and pipelines in the US.' },
      { q: 'What does OSHA PSM require for NDT?', a: 'Paragraph (j) of the PSM standard requires inspection and testing that follows recognised and generally accepted good engineering practice, at a suitable frequency, documented with the date, the inspector, the equipment and the results, and correction of deficiencies. Most facilities meet it through API 510, 570 and 653 programmes.' },
    ],
    related: [[P.audit, 'NDT audit consulting'], [P.iso, 'ISO 9001, 17020 and 17025 requirements'], ['/inspection/asset-integrity-services', 'Asset integrity services']],
  },
  {
    path: P.iso, kind: 'topic', navLabel: 'ISO 9001, 17020 & 17025 requirements',
    title: 'ISO 9001, ISO/IEC 17020 & 17025 for NDT Companies',
    description: 'What ISO 9001, ISO/IEC 17020 and ISO/IEC 17025 ask of NDT inspection companies and laboratories, and how an ASNT Level III prepares you for the assessment.',
    h1: 'ISO 9001, ISO/IEC 17020 and ISO/IEC 17025 requirements for NDT',
    intro: 'Clients ask NDT companies for ISO certificates and accreditations as evidence of a working management system, or of a competent inspection body or laboratory. The three standards ask for different things. Atlantis helps NDT inspection companies and laboratories see which one applies, prepare their system and records, and get ready for the certification or accreditation assessment.',
    cardsTitle: 'Related topics', cardsSub: 'Pages that cover the parts of the programme these standards examine.',
    cards: [
      { href: '/atlantis-iso-9001', label: 'Atlantis NDT quality system', text: 'Our own ISO 9001 and ISO 14001 certified management system.' },
      { href: '/consulting/ndt-program-audit-gap-assessment', label: 'NDT programme gap assessment', text: 'Finding and sequencing the gaps before an assessor does.' },
      { href: P.docs, label: 'NDT documentation requirements', text: 'The document set that competence and method clauses are checked against.' },
      { href: '/consulting/ndt-procedure-qualification-demonstration', label: 'Procedure qualification', text: 'Evidence that a technique is fit for purpose, which 17020 and 17025 both look for.' },
      { href: '/resources/qualification-and-calibration-register', label: 'Qualification and calibration register', text: 'A free register for personnel competence and equipment calibration.' },
    ],
    sections: [
      { id: 'which', h: 'Which standard is which', table: { head: ['Standard', 'What it covers', 'Who issues it'], rows: [
        ['ISO 9001:2015', 'The quality management system of the business', 'An accredited certification body (registrar) certifies it'],
        ['ISO/IEC 17020:2012', 'Competence and impartiality of inspection bodies, as Type A, B or C', 'An accreditation body accredits it'],
        ['ISO/IEC 17025:2017', 'Competence of testing and calibration laboratories and the validity of their results', 'An accreditation body accredits it'],
      ] } },
      { id: 'iso17020', h: 'What ISO/IEC 17020 asks of an NDT inspection body', list: [
        'Impartiality and, depending on Type A, B or C, independence from the parties involved.',
        'Defined competence criteria for each inspector, with evidence that each one meets them.',
        'Inspection methods and procedures, and control of the equipment used.',
        'Inspection records and reports or certificates with the content the standard requires.',
        'Handling of complaints and appeals, and a management system to run it all.',
      ] },
      { id: 'iso17025', h: 'What ISO/IEC 17025 asks of an NDT laboratory', list: [
        'Impartiality and confidentiality, and the competence of personnel.',
        'Selection, verification and, where needed, validation of methods.',
        'Metrological traceability of the equipment used, through calibration.',
        'Evaluation of measurement uncertainty where it is relevant to the result.',
        'Ensuring the validity of results, for example through proficiency testing or interlaboratory comparison.',
        'Reporting of results and a management system to run it all.',
      ] },
      { id: 'fit', h: 'How the NDT programme fits', p: 'An NDT programme already holds much of the evidence these standards ask for: SNT-TC-1A or ISO 9712 certification supports the competence clauses, Level III approved procedures support the method clauses, and a calibration register supports equipment control and traceability. That is where a Level III shortens the work: the gaps are usually in how the evidence is organised rather than in the inspection itself.' },
      { id: 'position', h: 'Our own position', p: 'Atlantis NDT is certified to ISO 9001 and ISO 14001. It is not accredited to ISO/IEC 17020 or ISO/IEC 17025, and it is not a certification or accreditation body. We prepare you for the assessment; the certification body or the accreditation body makes the decision.' },
      { id: 'help', h: 'How we help', list: [
        'A gap assessment against the standard you are aiming for.',
        'Procedures, competence records and, for ISO/IEC 17020, an impartiality analysis.',
        'For ISO/IEC 17025: method verification records, uncertainty evaluations where relevant and a proficiency testing plan.',
        'Internal audit and management review before the assessment.',
        'A readiness review ahead of the certification audit or accreditation assessment.',
      ] },
      WHO,
    ],
    codes: ['ISO 9001:2015', 'ISO/IEC 17020:2012', 'ISO/IEC 17025:2017', 'ISO 9712', 'ASNT SNT-TC-1A', 'Accreditation through ILAC signatories such as ANAB, A2LA or UKAS'],
    deliverables: ['Gap assessment against the chosen standard', 'Procedures and competence records', 'Internal audit and management review records', 'Assessment readiness review'],
    industries: ['NDT inspection companies', 'Third-party inspection bodies', 'NDT and materials laboratories', 'Fabricators with in-house NDT'],
    faqs: [
      { q: 'Do we need ISO/IEC 17020 or 17025, or is ISO 9001 enough?', a: 'It depends on what your clients and regulators ask for. ISO 9001 shows a working quality management system; ISO/IEC 17020 accreditation shows competence and impartiality as an inspection body; ISO/IEC 17025 shows that a laboratory’s results are technically valid. Many field NDT companies hold ISO 9001 only, while laboratories and third-party inspection bodies are more often asked for accreditation.' },
      { q: 'Is Atlantis NDT accredited to ISO/IEC 17020 or 17025?', a: 'No. Atlantis NDT is certified to ISO 9001 and ISO 14001. We help NDT companies prepare for ISO/IEC 17020 and 17025 accreditation; the accreditation body assesses and decides.' },
    ],
    related: [[P.audit, 'NDT audit consulting'], [P.docs, 'NDT documentation requirements'], [P.reg, 'NDT regulatory compliance']],
  },
];

export const CONSULTING_ICONS = {
  [P.audit]: 'ClipboardList', [P.sub]: 'Handshake', [P.snt]: 'GraduationCap',
  [P.docs]: 'FileText', [P.reg]: 'Scale', [P.iso]: 'BadgeCheck',
  [L3]: 'Award', '/ndt-written-practice-development': 'BookOpen', '/consulting/ndt-technical-procedure-development': 'FileCheck',
};

export const CONSULTING_SECTION = createServiceSection({
  pages: PAGES,
  rootPath: L3,
  ancestors: [{ path: C, label: 'Consulting' }, { path: L3, label: 'NDT Level III consulting' }],
  iconFor: CONSULTING_ICONS,
  highlightIcons: ['Award', 'FileCheck', 'Layers'],
  defaultEyebrow: 'NDT Level III consulting',
  cta: {
    primaryHref: '#enquiry', primaryLabel: 'Request a consultation',
    secondaryHref: CONSULTING_ENQUIRY, secondaryLabel: 'Talk to a Level III',
    bandTitle: 'Talk to an ASNT Level III',
    bandText: 'Tell us what the audit, the client or the code is asking for, and by when. We reply within one business day.',
    formId: 'enquiry',
  },
});

export const CONSULTING_PAGES = CONSULTING_SECTION.PAGES;
export const CONSULTING_PATHS = CONSULTING_SECTION.PATHS;

/** "NDT Level III consulting services" card block on /consulting and the Level III page. */
export const CONSULTING_SERVICES_BLOCK = {
  h2: 'NDT Level III consulting services',
  intro: 'Pick the topic you need. Each page explains the work and links to detailed pages for your industry, code or audit.',
  cards: [
    { href: L3, label: 'Outsourced ASNT Level III', text: 'A Level III of record for your written practice, procedures and examinations, without one on the payroll.' },
    { href: P.audit, label: 'Audit consulting', text: 'Internal, mock and pre-assessment audits of your NDT programme, and corrective action support.' },
    { href: P.sub, label: 'Client & subcontractor approval audits', text: 'Pass a client’s prequalification audit, or audit NDT subcontractors before you approve them.' },
    { href: P.snt, label: 'SNT-TC-1A training programme setup', text: 'Written practice, training, experience records, examinations and certification records set up end to end.' },
    { href: '/ndt-written-practice-development', label: 'Written practice development', text: 'A written practice drafted or revised to the current SNT-TC-1A edition and your scope.' },
    { href: '/consulting/ndt-technical-procedure-development', label: 'Procedure development', text: 'Method procedures and technique sheets written to the governing code and approved by a Level III.' },
    { href: P.docs, label: 'Documentation requirements', text: 'The document set an NDT programme needs, who signs each document and how long to keep it.' },
    { href: P.reg, label: 'Regulatory compliance', text: 'NDT programmes mapped against OSHA PSM, PHMSA, ASME and NBIC, FAA, NRC and class rules.' },
    { href: P.iso, label: 'ISO 9001, 17020 & 17025 requirements', text: 'Preparation for ISO 9001 certification or ISO/IEC 17020 and 17025 accreditation.' },
  ],
};
export const CONSULTING_BLOCK_PATHS = new Set([C, L3]);
export const CONSULTING_BLOCK_MARKER = 'data-consulting-services';

/** Header navigation: Services → NDT Level III Consulting → children. */
export const CONSULTING_NAV = {
  menuTitle: 'NDT Level III consulting',
  allLabel: 'All consulting services',
  talk: [CONSULTING_ENQUIRY, 'Talk to a Level III'],
  children: [
    { name: 'Outsourced ASNT Level III', path: L3 },
    { name: 'Audit Consulting', path: P.audit },
    { name: 'Client & Subcontractor Approval Audits', path: P.sub },
    { name: 'SNT-TC-1A Training Programme Setup', path: P.snt },
    { name: 'Written Practice Development', path: '/ndt-written-practice-development' },
    { name: 'Procedure Development', path: '/consulting/ndt-technical-procedure-development' },
    { name: 'Documentation Requirements', path: P.docs },
    { name: 'Regulatory Compliance', path: P.reg },
    { name: 'ISO 9001, 17020 & 17025', path: P.iso },
    { name: 'Consulting by Industry', path: C, children: [
      { name: 'Oil & Gas', path: '/consulting/oil-gas-ndt-consulting' },
      { name: 'Aerospace', path: '/consulting/aerospace-ndt-consulting' },
      { name: 'Maritime', path: '/consulting/maritime-ndt-consulting' },
      { name: 'Nuclear', path: '/consulting/nuclear-ndt-consulting' },
    ] },
  ],
};

// ── Up-links from the detailed consulting pages to their topic page ───────────────────────────
const T = {
  audit: [P.audit, 'Audit consulting'], sub: [P.sub, 'Client & subcontractor approval audits'], snt: [P.snt, 'SNT-TC-1A training programme setup'],
  docs: [P.docs, 'Documentation requirements'], reg: [P.reg, 'Regulatory compliance'], iso: [P.iso, 'ISO 9001, 17020 & 17025 requirements'],
};
const TOPIC_FAMILIES = [
  [/^\/consulting\/level-iii-audit-support-[a-z-]+$/, ['audit', 'docs', 'sub']],
  [/^\/consulting\/written-practice-for-[a-z-]+$/, ['snt', 'docs', 'audit']],
  [/^\/consulting\/(?:ndt-program-audit-gap-assessment|nadcap-ac7114-audit-readiness|level-iii-method-scope-limitations|interim-ndt-level-3|api-510-program-audit)$/, ['audit', 'docs', 'iso']],
  [/^\/consulting\/(?:iacs-service-supplier-approval|utm-operator-qualification-class-approval|esp-survey-readiness-consulting|aerospace-responsible-level-iii|navsea-ndt-requirements-shipyard|aar-m-1003-ndt-tank-car-facility|faa-part-145-repair-station-ndt)$/, ['sub', 'reg', 'audit']],
  [/^\/consulting\/(?:osha-psm-mechanical-integrity-ndt|nqa-1-nuclear-supplier-ndt-program|nuclear-ndt-consulting|offshore-ndt-consulting|energy-utilities-ndt-consulting|aviation-ndt-consulting)$/, ['reg', 'audit', 'docs']],
  [/^\/consulting\/(?:ndt-program-for-a-startup-inspection-company|ndt-examination-question-bank-development|ndt-level-3-exam-oversight|multi-site-ndt-program-harmonisation|ndt-level-iii-succession-planning)$/, ['snt', 'docs', 'audit']],
  [/^\/consulting\/(?:ndt-procedure-qualification-demonstration|outside-ndt-level-3-can-and-cannot-do|ndt-level-3-resigned-what-to-do)$/, ['docs', 'snt', 'audit']],
  [/^\/(?:ndt-written-practice-development|consulting\/ndt-technical-procedure-development)$/, ['snt', 'docs', 'audit', 'iso']],
];
export function consultingTopicLinksFor(path) {
  const p = (path || '').replace(/\/+$/, '') || '/';
  for (const [re, keys] of TOPIC_FAMILIES) {
    if (!re.test(p)) continue;
    return { intro: 'Part of NDT Level III consulting', links: [[L3, 'NDT Level III consulting'], ...keys.map((k) => T[k])].filter(([h]) => h !== p) };
  }
  return null;
}
export const CONSULTING_TOPIC_MARKER = 'data-consulting-topic';
export const consultingTopicHtml = (b) => upLinkHtml(b, CONSULTING_TOPIC_MARKER, 'NDT Level III consulting');
