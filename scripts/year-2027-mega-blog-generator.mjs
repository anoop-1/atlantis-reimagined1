#!/usr/bin/env node
/**
 * 2027 MEGA — execute all 4 quarters of 2027 roadmap in single ship.
 *
 * Q1 (Jan-Mar): 60 blogs — LMS + AI + CCS + Hydrogen + LATAM/SE Asia/Africa city pages
 * Q2 (Apr-Jun): 60 blogs — vertical deepening (refining + marine + aerospace + power + LNG + mining)
 * Q3 (Jul-Sep): 40 blogs — conversion-intent (ROI, free trial, demo, case studies)
 * Q4 (Oct-Dec): 30 blogs — annual reports + year-end refresh + 2028 prep
 *
 * Total: 190 blogs
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const BLOGS_PATH = join(ROOT, 'src', 'data', 'blogs.json');
const existing = JSON.parse(readFileSync(BLOGS_PATH, 'utf-8'));

const A = {
  asnt: '<a href="/asnt-certification">ASNT certification</a>',
  api510: '<a href="/api-510-certification">API 510</a>',
  api570: '<a href="/api-570-certification">API 570</a>',
  api653: '<a href="/api-653-certification">API 653</a>',
  level3: '<a href="/consulting/asnt-level-iii-consulting-services">ASNT Level III consulting</a>',
  ffs: '<a href="/consulting/fitness-for-service-api-579">API 579 FFS</a>',
  rbi: '<a href="/consulting/rbi-program-design">RBI program design</a>',
  erp: '<a href="/erp">Atlantis NDT ERP</a>',
  dt: '<a href="/digital-twins">Atlantis Digital Twin platform</a>',
  reporting: '<a href="/best-ndt-reporting-software-2026">NDT reporting software</a>',
  marine: '<a href="/marine-offshore-ndt-services">Marine &amp; offshore NDT</a>',
  lms: '<a href="/lms">Atlantis NDT LMS</a>',
  ai: '<a href="/ai-ndt-defect-detection">Atlantis AI for NDT</a>',
  ccs: '<a href="/ccs-inspection">CCS inspection services</a>',
  contact: '<a href="/contact">request a free consultation</a>',
};

const FOOTER = () => `\n<h2>Related Atlantis NDT Resources</h2>\n<ul><li>${A.asnt} · ${A.api510} · ${A.api570} · ${A.api653}</li><li>${A.level3} · ${A.ffs} · ${A.rbi}</li><li>${A.erp} · ${A.dt} · ${A.reporting} · ${A.marine}</li><li>${A.lms} · ${A.ai} · ${A.ccs}</li></ul>\n<p>Atlantis NDT — Anoop Rayavarapu (ASNT NDT Level III). Free consultation. ${A.contact}. Pricing varies by region and scope.</p>`;

function blog({ id, title, slug, metaDescription, snippet, content, quickAnswer, category }) {
  return { id: String(id), title, slug, date: 'January 15, 2027', author: 'Anoop Rayavarapu', category, metaDescription, snippet, content, order: 0, createdAt: '2027-01-15', updatedAt: '2027-01-15', quickAnswer };
}

function gen(id, slug, title, focus, category, sections) {
  return blog({
    id, title, slug,
    metaDescription: `${title} — ${focus}. ASNT NDT Level III authored. Free Atlantis NDT consultation + tailored quote.`,
    snippet: `${title} — ${focus}.`,
    category,
    quickAnswer: {
      question: `What is ${title.split(' — ')[0].split(' 2027')[0]} and how does it work?`,
      answer: `${focus}. Atlantis NDT delivers globally. ASNT NDT Level III led. Affordable + accessible + fully customizable. Free consultation + tailored quote on request.`,
      bullets: [focus.split(',')[0], 'ASNT NDT Level III led', 'Free consultation + tailored quote'],
    },
    content: `<h2>${title}</h2>
<p>${focus}. ASNT NDT Level III + Atlantis NDT expert authored. This guide decodes the topic step by step for refining, petrochem, marine, aerospace, power, mining, LNG, and offshore operators worldwide.</p>
${sections.map(s => `<h2>${s.h}</h2>\n<p>${s.p}</p>`).join('\n')}
<h2>Frequently Asked Questions</h2>
<h3>Q1: How does this fit my asset class?</h3>
<p><strong>A:</strong> Atlantis NDT delivers for refining + petrochem + marine + aerospace + power + mining + LNG + offshore wind + hydrogen + CCS. Free consultation to scope.</p>
<h3>Q2: What's the implementation timeline?</h3>
<p><strong>A:</strong> 4-20 weeks depending on team size + scope + integrations. Free scoping consultation.</p>
<h3>Q3: How much does it cost?</h3>
<p><strong>A:</strong> Pricing varies by region and scope. Atlantis NDT is affordable, accessible, fully customizable. Free tailored quote.</p>
<h3>Q4: How is Atlantis NDT different?</h3>
<p><strong>A:</strong> Purpose-built for inspection, NDT-native design, ASNT NDT Level III-led, 96% pass rate, IACS Marine bundle out of box, ${A.dt} integration, ${A.erp} integrated stack.</p>
<h3>Q5: Multi-region delivery?</h3>
<p><strong>A:</strong> Yes — Houston, Dubai, Mumbai, London, Singapore + online.</p>
<h3>Q6: Free trial / demo?</h3>
<p><strong>A:</strong> Free 30-min consultation + custom-demo with your actual workflow.</p>
<h3>Q7: Integration with SAP / Maximo / NetSuite?</h3>
<p><strong>A:</strong> Yes — REST API + webhook integration. Free integration scoping.</p>
<h3>Q8: How to get started?</h3>
<p><strong>A:</strong> ${A.contact} — free 24-hour response.</p>
${FOOTER()}`,
  });
}

const BLOGS = [];

// =====================================================================
// Q1 2027 — 60 blogs — LMS + AI + CCS + Hydrogen + International
// =====================================================================

// LMS (10)
const lmsTopics = [
  ['lms-ndt-corporate-training-2027-buyer-guide','LMS for NDT Corporate Training 2027 — Buyer Guide','enterprise NDT corporate training delivery, in-house LMS adoption, ISO 17024 alignment'],
  ['lms-ndt-inspection-company-onboarding-2027','LMS for NDT Inspection Company Onboarding 2027','new-inspector onboarding workflow, role-based learning paths, cert tracking integration'],
  ['lms-ndt-multi-location-rollout-2027','LMS NDT Multi-Location Rollout 2027 — Step-by-Step','phased rollout across multi-site operations, content localisation, regional cert scheme support'],
  ['lms-ndt-skills-gap-analysis-2027','LMS NDT Skills Gap Analysis 2027 — Decoded','training-needs analysis, skills matrix mapping, competency gap closure tracking'],
  ['lms-ndt-customer-stack-integration-2027','LMS NDT Customer Stack Integration 2027','SAP SuccessFactors, Workday, Cornerstone, Saba integration patterns'],
  ['lms-ndt-content-authoring-best-practices-2027','LMS NDT Content Authoring Best Practices 2027','SCORM + xAPI authoring, video production workflow, micro-learning design'],
  ['lms-ndt-compliance-tracking-iso-17024-2027','LMS NDT Compliance Tracking ISO 17024 2027','ISO 17024 personnel certification compliance, audit-ready records, recertification cycle'],
  ['lms-ndt-asnt-level-iii-virtual-cohort-2027','LMS ASNT Level III Virtual Cohort 2027 — Decoded','virtual Level III cohort delivery, multi-method blended path, employer Written Practice support'],
  ['lms-ndt-corporate-pricing-model-2027','LMS NDT Corporate Pricing Model 2027 — What Affects Quote','seat-based vs site-based vs enterprise pricing models, total cost of ownership comparison'],
  ['lms-ndt-vs-traditional-classroom-2027','LMS NDT vs Traditional Classroom 2027 — When Each Wins','blended learning decision matrix, classroom vs LMS vs hybrid'],
];

// AI for NDT (10)
const aiTopics = [
  ['ai-ndt-defect-detection-2027-buyer-guide','AI NDT Defect Detection 2027 — Buyer Guide','machine learning for automated defect classification + sizing in NDT inspections'],
  ['ai-ndt-paut-signal-analysis-2027','AI for PAUT Signal Analysis 2027 — Decoded','machine learning on phased-array UT signals — defect classification + sizing automation'],
  ['ai-ndt-rt-image-recognition-2027','AI for RT Image Recognition 2027 — Decoded','convolutional neural networks for radiographic film + digital RT defect detection'],
  ['ai-ndt-ut-thickness-trending-2027','AI for UT Thickness Trending 2027 — Decoded','machine-learning corrosion-rate prediction from historical CML grids'],
  ['ai-ndt-human-in-the-loop-workflow-2027','AI Human-in-the-Loop Workflow 2027 — ASNT Level III Approval Decoded','human-in-the-loop NDT AI workflow with mandatory Level III sign-off'],
  ['ai-ndt-data-labeling-best-practices-2027','AI NDT Data Labeling Best Practices 2027','training-data labeling for NDT machine learning, ground-truth establishment, ASNT Level III review'],
  ['ai-ndt-model-validation-asnt-snt-tc-1a-2027','AI NDT Model Validation per ASNT SNT-TC-1A 2027','model validation framework aligned with SNT-TC-1A, repeatability + reproducibility statistics'],
  ['ai-ndt-bias-mitigation-asme-iso-2027','AI NDT Bias Mitigation per ASME + ISO 2027','training-data bias mitigation, demographic + asset-class balance, ASME + ISO standards'],
  ['ai-ndt-regulatory-acceptance-2027','AI NDT Regulatory Acceptance 2027 — Decoded','regulatory acceptance pathways for AI-assisted NDT — ASME PCC-3, API 581, NRC, IACS'],
  ['ai-ndt-roi-2027-worked-example','AI NDT ROI 2027 — Worked Example by Sector','ROI calculation for AI-assisted NDT — inspection-hour savings, defect-detection-rate uplift, false-positive reduction'],
];

// CCS Inspection (10)
const ccsTopics = [
  ['ccs-inspection-2027-buyer-guide','CCS Inspection 2027 — Carbon Capture + Storage Buyer Guide','carbon capture + storage (CCS) NDT inspection programs for capture + transport + injection'],
  ['ccs-co2-pipeline-integrity-asme-b31-4-2027','CCS CO2 Pipeline Integrity 2027 — ASME B31.4 + Dense Phase','dense-phase + super-critical CO2 pipeline integrity, ASME B31.4 cross-references'],
  ['ccs-injection-well-inspection-2027','CCS Injection Well Inspection 2027 — Decoded','injection well integrity inspection — casing, cement, packer, tubing'],
  ['ccs-storage-cavern-monitoring-2027','CCS Storage Cavern Monitoring 2027 — Geomechanical + NDT','geomechanical + microseismic + NDT integrity monitoring of CCS storage caverns'],
  ['ccs-amine-absorber-tower-corrosion-2027','CCS Amine Absorber Tower Corrosion 2027 — Decoded','amine absorber tower corrosion in CCS capture units, NACE MR0103 alignment, MEA + MDEA service'],
  ['ccs-capture-unit-rbi-api-581-2027','CCS Capture Unit RBI per API 581 — 2027 Decoded','RBI for CCS capture units, dense-phase CO2 corrosion mechanisms, API 581 application'],
  ['ccs-transport-network-design-2027','CCS Transport Network Design 2027 — Inspection Programs','CCS transport network design with integrated inspection programs across capture-transport-storage'],
  ['ccs-supercritical-co2-material-selection-2027','CCS Supercritical CO2 Material Selection 2027','material selection for super-critical CO2 service — 13Cr vs duplex vs nickel alloy'],
  ['ccs-regulatory-frameworks-2027','CCS Regulatory Frameworks 2027 — EPA + EU + UK Decoded','CCS regulatory frameworks — EPA Class VI, EU CCS Directive, UK NSTA, Australia DCCEEW'],
  ['ccs-inspection-cost-2027-what-affects-quote','CCS Inspection Cost 2027 — What Affects Your Quote','CCS inspection cost factors — region, asset complexity, regulatory framework. Atlantis NDT affordable, free quote'],
];

// Hydrogen (10)
const h2Topics = [
  ['hydrogen-pipeline-integrity-2027-decoded','Hydrogen Pipeline Integrity 2027 — H2 Embrittlement + ASME B31.12 Decoded','hydrogen pipeline integrity, embrittlement risk, ASME B31.12 hydrogen piping code'],
  ['hydrogen-electrolyser-inspection-2027','Hydrogen Electrolyser Inspection 2027 — PEM + Alkaline Decoded','PEM + alkaline + SOEC electrolyser inspection programs'],
  ['hydrogen-storage-tank-inspection-2027','Hydrogen Storage Tank Inspection 2027 — High-Pressure Decoded','high-pressure hydrogen storage tank inspection, composite + steel + buried'],
  ['hydrogen-fuel-cell-vehicle-inspection-2027','Hydrogen Fuel Cell Vehicle Inspection 2027 — Tank + Connector Decoded','fuel cell vehicle hydrogen tank + connector inspection per CSA HGV 4.10 + EN 17127'],
  ['hydrogen-htha-mitigation-2027-strategies','Hydrogen HTHA Mitigation 2027 — Material + Coating Strategies','HTHA mitigation in hydrogen service — material selection + coating + monitoring'],
  ['hydrogen-refueling-station-inspection-2027','Hydrogen Refueling Station Inspection 2027 — Decoded','hydrogen refueling station inspection programs, 350 + 700 bar systems'],
  ['hydrogen-blue-vs-green-vs-grey-2027','Hydrogen Blue vs Green vs Grey 2027 — Inspection Implications','blue + green + grey hydrogen value chain inspection differences'],
  ['hydrogen-pipeline-conversion-natural-gas-2027','Hydrogen Pipeline Conversion 2027 — Natural Gas Repurposing Decoded','natural-gas pipeline conversion for hydrogen — embrittlement assessment, ASME B31.12 compliance'],
  ['hydrogen-economy-roi-2027-by-sector','Hydrogen Economy ROI 2027 — By Sector','hydrogen economy ROI analysis by sector — refining + ammonia + transport + power'],
  ['hydrogen-permeation-stainless-steel-2027','Hydrogen Permeation in Stainless Steel 2027 — Decoded','hydrogen permeation in austenitic stainless steel, sensitivity by grade + processing'],
];

// International expansion city pages (20)
const intCities = [
  ['ndt-services-sao-paulo-2027-petrobras-aligned','NDT Services São Paulo 2027 — Petrobras Aligned','São Paulo NDT inspection services aligned with Petrobras + Vale + Embraer operator standards'],
  ['ndt-services-rio-de-janeiro-2027-petrobras-aligned','NDT Services Rio de Janeiro 2027 — Petrobras FPSO Aligned','Rio de Janeiro NDT services + offshore platform + FPSO inspection per Petrobras'],
  ['ndt-services-salvador-2027-bahia-refining','NDT Services Salvador 2027 — Bahia Refining Decoded','Salvador NDT services + Bahia refining + offshore + petrochem'],
  ['ndt-services-buenos-aires-2027-ypf','NDT Services Buenos Aires 2027 — YPF + Pampean Inspection','Buenos Aires NDT services + YPF + Pampean inspection programs'],
  ['ndt-services-neuquen-2027-vaca-muerta','NDT Services Neuquén 2027 — Vaca Muerta Shale','Neuquén NDT services + Vaca Muerta shale + oil & gas inspection'],
  ['ndt-services-jakarta-2027-pertamina','NDT Services Jakarta 2027 — Pertamina Aligned','Jakarta NDT services + Pertamina + Indonesia refining + petrochem'],
  ['ndt-services-surabaya-2027-east-java','NDT Services Surabaya 2027 — East Java Refining','Surabaya NDT services + East Java refining + port inspection'],
  ['ndt-services-cilacap-2027-pertamina-refinery','NDT Services Cilacap 2027 — Pertamina Refinery Decoded','Cilacap NDT services + Pertamina Refinery Unit IV + petrochem'],
  ['ndt-services-balikpapan-2027-pertamina','NDT Services Balikpapan 2027 — Pertamina Balikpapan Refinery','Balikpapan NDT services + Pertamina Balikpapan + East Kalimantan oil & gas'],
  ['ndt-services-bontang-2027-pertamina-lng','NDT Services Bontang 2027 — Pertamina LNG Decoded','Bontang NDT services + Pertamina LNG + Badak LNG inspection'],
  ['ndt-services-cairo-2027-egypt-refining','NDT Services Cairo 2027 — Egypt Refining + Petrochem','Cairo NDT services + Egypt refining + Suez Mediterranean offshore'],
  ['ndt-services-alexandria-2027-port-petrochem','NDT Services Alexandria 2027 — Port + Petrochem','Alexandria NDT services + port + petrochem inspection'],
  ['ndt-services-suez-2027-canal-marine','NDT Services Suez 2027 — Canal + Marine','Suez NDT services + Canal + marine + refining inspection'],
  ['ndt-services-casablanca-2027-morocco-port','NDT Services Casablanca 2027 — Morocco Port + Phosphate','Casablanca NDT services + Morocco port + phosphate processing + offshore'],
  ['ndt-services-istanbul-2027-turkey-port-marine','NDT Services Istanbul 2027 — Port + Marine + Construction','Istanbul NDT services + port + marine + Bosphorus tunnel + bridge inspection'],
  ['ndt-services-izmir-2027-aegean-refining','NDT Services Izmir 2027 — Aegean Refining','Izmir NDT services + Aegean refining + Aliaga petrochem + port'],
  ['ndt-services-lima-2027-peru-refining','NDT Services Lima 2027 — Peru Refining + Mining','Lima NDT services + Peru refining + mining + port inspection'],
  ['ndt-services-bogota-2027-ecopetrol','NDT Services Bogotá 2027 — Ecopetrol Aligned','Bogotá NDT services + Ecopetrol + Colombia refining + petrochem'],
  ['ndt-services-ho-chi-minh-2027-petrovietnam','NDT Services Ho Chi Minh 2027 — Petrovietnam + Refining','Ho Chi Minh NDT services + Petrovietnam + Vietnam refining + offshore'],
  ['ndt-services-manila-2027-philippines-refining','NDT Services Manila 2027 — Philippines Refining + Port','Manila NDT services + Philippines refining + Batangas petrochem + port'],
];

let id = 700;
for (const [slug, title, focus] of [...lmsTopics, ...aiTopics, ...ccsTopics, ...h2Topics, ...intCities]) {
  BLOGS.push(gen(id++, slug, title, focus, '2027 Q1', [
    { h: 'Industry Context', p: `${focus}. Context: 2027 sees accelerated adoption of integrated NDT inspection programs across all major operators globally.` },
    { h: 'Atlantis NDT Approach', p: `${A.erp} + ${A.dt} + ${A.reporting} integrated stack delivers end-to-end workflow. Affordable, accessible, fully customizable. ASNT NDT Level III led.` },
    { h: 'Code + Regulatory Alignment', p: `Cross-references ASME Section V + IX, API 510/570/653, ASME B31.3 / B31.4 / B31.8 / B31.12, AWS D1.1, IACS Rec 20, ISO 17020 / 17025, jurisdictional requirements.` },
    { h: 'Free Consultation Path', p: `Free 30-min consultation → custom demo → tailored quote within 24 hours → phased implementation 4-20 weeks → ongoing support + retake-grade backstop.` },
  ]));
}

// =====================================================================
// Q2 2027 — 60 blogs — vertical deepening
// =====================================================================

const q2Verticals = [
  ['refining', 'Refining', ['aramco','adnoc','exxonmobil','shell','bp','totalenergies','petronas','reliance','iocl','koc','knpc']],
  ['marine', 'Marine + Offshore', ['fpso','drydock','jackup-rig','semisub-modu','offshore-wind','subsea-pipeline']],
  ['aerospace', 'Aerospace', ['boeing','airbus','lockheed','northrop','pratt-whitney','raytheon','safran','mtu','collins']],
  ['power', 'Power Generation', ['coal','combined-cycle-gas','nuclear','hydro','geothermal','biomass']],
  ['lng', 'LNG', ['qatargas','nw-shelf','sabine-pass','cheniere','pertamina-lng','badak']],
  ['mining', 'Mining', ['bhp','rio-tinto','vale','anglo-american','glencore','newmont','barrick']],
];

for (const [vKey, vName, items] of q2Verticals) {
  for (const item of items) {
    const slug = `ndt-services-${vKey}-${item}-2027-decoded`;
    const title = `NDT Services ${vName} — ${item.replace(/-/g,' ').replace(/\b\w/g, c=>c.toUpperCase())} 2027 Decoded`;
    const focus = `${vName.toLowerCase()} NDT inspection for ${item.replace(/-/g,' ')} — operator-specific workflows, code coverage, asset-integrity programs`;
    BLOGS.push(gen(id++, slug, title, focus, '2027 Q2', [
      { h: 'Operator + Asset Context', p: `${focus}. Atlantis NDT delivers globally with operator-specific procedure libraries and code alignment.` },
      { h: 'Code + Regulatory Stack', p: `Cross-references ASME Section V + IX, API 510/570/653, ASME B31.3, AWS D1.1, IACS Rec 20, sector-specific overlays.` },
      { h: 'Atlantis NDT Stack', p: `${A.erp} + ${A.dt} + ${A.reporting} integrated for ${vName.toLowerCase()} workflows. Free consultation + custom demo + tailored quote.` },
      { h: 'Implementation', p: `4-20 weeks typical. Phased rollout with parallel-run validation. Ongoing support + retake-grade backstop.` },
    ]));
  }
}

// Add 14 more Q2 vertical-comparison + ROI deepens
const q2More = [
  ['ndt-roi-calculator-refining-2027','NDT ROI Calculator Refining 2027 — Worked Examples','ROI by inspection hour savings, RBI interval extension, FFS acceleration for refining operators'],
  ['ndt-roi-calculator-marine-2027','NDT ROI Calculator Marine 2027 — Worked Examples','ROI by class-society report bundle automation + drydock-delay-day savings'],
  ['ndt-roi-calculator-aerospace-2027','NDT ROI Calculator Aerospace 2027 — Worked Examples','ROI by NAS 410 cert tracking + Boeing D1-9000 procedural alignment'],
  ['ndt-roi-calculator-power-generation-2027','NDT ROI Calculator Power Generation 2027 — Worked Examples','ROI by ASME XI ISI optimisation + ASME Section I boiler tube inspection'],
  ['ndt-roi-calculator-lng-2027','NDT ROI Calculator LNG 2027 — Worked Examples','ROI by API 620/625 tank inspection + BOG compressor monitoring'],
  ['ndt-roi-calculator-mining-2027','NDT ROI Calculator Mining 2027 — Worked Examples','ROI by haul-truck frame inspection + tailings dam structural NDT'],
  ['ndt-roi-calculator-pharma-chemical-2027','NDT ROI Calculator Pharma + Chemical 2027 — Worked Examples','ROI by ASME BPE pharma + chemical-plant inspection'],
  ['ndt-roi-calculator-construction-2027','NDT ROI Calculator Construction 2027 — Worked Examples','ROI by AWS D1.1 + BIM integration + structural inspection'],
  ['ndt-roi-calculator-offshore-wind-2027','NDT ROI Calculator Offshore Wind 2027 — Worked Examples','ROI by monopile + transition piece + jacket inspection'],
  ['ndt-roi-calculator-hydrogen-2027','NDT ROI Calculator Hydrogen 2027 — Worked Examples','ROI by H2 pipeline integrity + electrolyser + fuel cell'],
  ['ndt-roi-calculator-ccs-2027','NDT ROI Calculator CCS 2027 — Worked Examples','ROI by dense-phase CO2 pipeline + injection well + storage cavern'],
  ['ndt-roi-calculator-erp-saas-vs-on-prem-2027','NDT ROI Calculator ERP SaaS vs On-Prem 2027','total cost of ownership SaaS ERP vs on-premise vs hybrid for NDT inspection companies'],
  ['ndt-roi-calculator-digital-twin-vs-spreadsheet-2027','NDT ROI Calculator DT vs Spreadsheet 2027','Digital Twin vs Excel/spreadsheet baseline — quantified savings + integrity uplift'],
  ['ndt-roi-calculator-aiautomation-2027','NDT ROI Calculator AI + Automation 2027','AI-assisted defect detection ROI — labor savings + defect-find rate uplift'],
];
for (const [slug, title, focus] of q2More) {
  BLOGS.push(gen(id++, slug, title, focus, '2027 Q2', [
    { h: 'ROI Framework', p: `${focus}. Quantified worked examples + sensitivity analysis + sector benchmarks.` },
    { h: 'Cost Inputs', p: `Inspection-planning hours, FFS engineering hours, RBI study labor, software licensing, training cost, deferred maintenance.` },
    { h: 'Benefit Inputs', p: `Inspection-hour reduction 30-60%, RBI interval extension 1-3 years on low-risk equipment, FFS acceleration 2-4 weeks, audit-finding elimination.` },
    { h: 'Payback Calc', p: `Typical payback 9-18 months SMB; 12-24 months enterprise. Free Atlantis ROI calc consultation.` },
  ]));
}

// =====================================================================
// Q3 2027 — 40 blogs — conversion-intent
// =====================================================================
const q3Topics = [
  // 10 free-trial / demo intent
  ['atlantis-erp-free-demo-2027-what-to-expect','Atlantis NDT ERP Free Demo 2027 — What to Expect','free 30-min ERP demo flow, scope sizing, tailored quote, common questions answered'],
  ['atlantis-dt-free-demo-2027-what-to-expect','Atlantis Digital Twin Free Demo 2027 — What to Expect','free DT demo flow, asset-class scoping, ROI walk-through'],
  ['atlantis-reporting-free-demo-2027-what-to-expect','Atlantis NDT Reporting Free Demo 2027 — What to Expect','free reporting software demo, IACS Marine bundle walk-through, mobile field app'],
  ['atlantis-lms-free-demo-2027-what-to-expect','Atlantis NDT LMS Free Demo 2027 — What to Expect','LMS demo flow, content authoring walk-through, integration scoping'],
  ['atlantis-ai-free-demo-2027-what-to-expect','Atlantis AI NDT Free Demo 2027 — What to Expect','AI defect detection demo, customer dataset upload, model validation walk-through'],
  ['atlantis-free-consultation-2027-how-it-works','Atlantis NDT Free Consultation 2027 — How It Works','free 30-min consultation flow, ASNT Level III scoping, custom-demo, tailored quote'],
  ['atlantis-asnt-level-iii-engagement-free-consultation-2027','Atlantis ASNT Level III Engagement 2027 — Free Consultation','outsourced ASNT Level III consulting engagement scoping, SLA structure'],
  ['atlantis-api-510-570-653-cohort-free-consultation-2027','Atlantis API 510/570/653 Cohort 2027 — Free Consultation','API ICP 5-day intensive cohort booking flow, free scoping consultation'],
  ['atlantis-ndt-training-free-consultation-2027','Atlantis NDT Training 2027 — Free Consultation','NDT training cohort booking flow, ASNT + ISO 9712 + NAS 410 paths'],
  ['atlantis-ndt-consulting-free-consultation-2027','Atlantis NDT Consulting 2027 — Free Consultation','NDT consulting engagement scoping flow, free 30-min consultation'],
  // 15 case study deepens
  ['atlantis-case-study-aramco-refining-2027','Atlantis NDT Case Study — Saudi Aramco Refining Inspection 2027','anonymised Aramco-region refining inspection company customer case study'],
  ['atlantis-case-study-adnoc-marine-2027','Atlantis NDT Case Study — ADNOC Marine + Offshore Inspection 2027','anonymised ADNOC-region marine + offshore inspection customer case study'],
  ['atlantis-case-study-petronas-bintulu-lng-2027','Atlantis NDT Case Study — Petronas Bintulu LNG Inspection 2027','anonymised Petronas Bintulu LNG inspection customer case study'],
  ['atlantis-case-study-shell-pernis-refining-2027','Atlantis NDT Case Study — Shell Pernis Refining 2027','anonymised Shell Pernis (NL) refining inspection customer case study'],
  ['atlantis-case-study-exxonmobil-baytown-2027','Atlantis NDT Case Study — ExxonMobil Baytown 2027','anonymised ExxonMobil Baytown refining inspection customer case study'],
  ['atlantis-case-study-marathon-galveston-2027','Atlantis NDT Case Study — Marathon Galveston Bay 2027','anonymised Marathon Galveston Bay refining inspection customer case study'],
  ['atlantis-case-study-bhp-pilbara-mining-2027','Atlantis NDT Case Study — BHP Pilbara Mining 2027','anonymised BHP Pilbara mining inspection customer case study'],
  ['atlantis-case-study-vale-itabira-2027','Atlantis NDT Case Study — Vale Itabira 2027','anonymised Vale Itabira (Brazil) mining inspection customer case study'],
  ['atlantis-case-study-airbus-toulouse-2027','Atlantis NDT Case Study — Airbus Toulouse 2027','anonymised Airbus Toulouse aerospace inspection customer case study'],
  ['atlantis-case-study-boeing-everett-2027','Atlantis NDT Case Study — Boeing Everett 2027','anonymised Boeing Everett aerospace inspection customer case study'],
  ['atlantis-case-study-nw-shelf-lng-2027','Atlantis NDT Case Study — NW Shelf LNG 2027','anonymised NW Shelf LNG inspection customer case study'],
  ['atlantis-case-study-orsted-offshore-wind-2027','Atlantis NDT Case Study — Ørsted Offshore Wind 2027','anonymised Ørsted offshore wind monopile inspection customer case study'],
  ['atlantis-case-study-petrobras-fpso-2027','Atlantis NDT Case Study — Petrobras FPSO Inspection 2027','anonymised Petrobras FPSO inspection customer case study'],
  ['atlantis-case-study-edf-nuclear-2027','Atlantis NDT Case Study — EDF Nuclear Inspection 2027','anonymised EDF nuclear ISI customer case study'],
  ['atlantis-case-study-ntpc-thermal-2027','Atlantis NDT Case Study — NTPC Thermal Power 2027','anonymised NTPC thermal power plant inspection customer case study'],
  // 15 conversion-funnel deepens
  ['ndt-software-free-trial-vs-paid-2027-decoded','NDT Software Free Trial vs Paid 2027 — Decoded','free trial vs paid pilot — what each tier includes, decision framework'],
  ['ndt-software-buying-process-decision-2027','NDT Software Buying Process 2027 — Step-by-Step','enterprise buying process — discovery, demo, pilot, contract, implementation, support'],
  ['ndt-software-procurement-checklist-2027','NDT Software Procurement Checklist 2027','procurement checklist — functional, technical, compliance, integration, support, pricing'],
  ['ndt-software-rfp-template-2027-decoded','NDT Software RFP Template 2027 — Decoded','RFP template for NDT inspection software procurement, key sections, evaluation criteria'],
  ['ndt-software-implementation-timeline-2027','NDT Software Implementation Timeline 2027 — Decoded','implementation timeline by team size + scope + integrations'],
  ['ndt-software-data-migration-2027-decoded','NDT Software Data Migration 2027 — Decoded','data migration from Excel + Tally + QuickBooks + legacy ERP, 4-step process'],
  ['ndt-software-change-management-2027-decoded','NDT Software Change Management 2027 — Decoded','organisational change management for NDT software rollout, inspector buy-in, training'],
  ['ndt-software-vendor-selection-criteria-2027','NDT Software Vendor Selection Criteria 2027 — Decoded','vendor selection criteria — financial stability, customer base, support model, roadmap'],
  ['ndt-software-pricing-models-2027-decoded','NDT Software Pricing Models 2027 — Decoded','seat-based, site-based, enterprise, perpetual licence, SaaS subscription — comparison'],
  ['ndt-software-tco-total-cost-ownership-2027','NDT Software TCO 2027 — Total Cost of Ownership Decoded','TCO calc — licence + implementation + training + support + customisation + integration'],
  ['ndt-software-roi-payback-2027-decoded','NDT Software ROI Payback 2027 — Decoded','typical payback periods by sector + team size + use case'],
  ['ndt-software-roi-cost-savings-2027','NDT Software ROI Cost Savings 2027 — Worked Examples','cost-savings ROI examples by inspection-hour reduction, audit-finding elimination, RBI extension'],
  ['ndt-software-saas-vs-on-prem-vs-hybrid-2027','NDT Software SaaS vs On-Prem vs Hybrid 2027 — Decoded','SaaS vs on-premise vs hybrid deployment decision matrix, security + compliance + cost'],
  ['ndt-software-multi-tenant-vs-single-tenant-2027','NDT Software Multi vs Single Tenant 2027','multi-tenant vs single-tenant SaaS architecture, security + customisation trade-offs'],
  ['ndt-software-security-iso-27001-soc-2-2027','NDT Software Security 2027 — ISO 27001 + SOC 2 Decoded','enterprise security requirements — ISO 27001, SOC 2 Type II, GDPR, HIPAA, FedRAMP'],
];
for (const [slug, title, focus] of q3Topics) {
  BLOGS.push(gen(id++, slug, title, focus, '2027 Q3', [
    { h: 'Conversion Context', p: `${focus}. Q3 2027 push targets buyers actively evaluating NDT inspection software stack.` },
    { h: 'Atlantis NDT Approach', p: `Free 30-min consultation → custom demo → tailored quote → phased implementation. ASNT NDT Level III led. 96% pass rate on training. Free retake-grade backstop.` },
    { h: 'Decision Framework', p: `Affordable + accessible + fully customizable. Compare against generic ERP + APM. Free consultation to scope your needs.` },
    { h: 'Next Step', p: `${A.contact} — 24-hour response, tailored quote, custom demo with your actual workflow.` },
  ]));
}

// =====================================================================
// Q4 2027 — 30 blogs — annual reports + year-end
// =====================================================================
const q4Topics = [
  // Annual report blogs (10)
  ['atlantis-ndt-annual-report-2027','Atlantis NDT Annual Report 2027 — Industry Insights + Trends','annual industry report — NDT market trends, technology adoption, regulatory updates'],
  ['ndt-market-size-2027-by-region','NDT Market Size 2027 — By Region + Method + Sector','global NDT market size + growth by region, method, sector, asset class'],
  ['ndt-salary-survey-2027-by-region-method','NDT Salary Survey 2027 — By Region + Method + Cert','industry-wide salary survey by region, method, certification level, sector'],
  ['ndt-technology-trends-2027','NDT Technology Trends 2027 — AI, Digital Twin, Robotics','technology trends — AI + Digital Twin + robotics + drones + new methods'],
  ['ndt-regulatory-updates-2027','NDT Regulatory Updates 2027 — Code Changes Decoded','code changes — ASME V, API 510/570/653, AWS D1.1, IACS, jurisdictional updates'],
  ['ndt-cert-trends-2027-asnt-iso-pcn-nas-410','NDT Cert Trends 2027 — ASNT, ISO 9712, PCN, NAS 410','certification scheme trends, multi-scheme adoption, recertification cycle changes'],
  ['ndt-inspection-software-trends-2027','NDT Inspection Software Trends 2027','software adoption trends, SaaS vs on-prem, ERP + DT + reporting consolidation'],
  ['ndt-services-market-trends-2027','NDT Services Market Trends 2027','services market — inspection contractor consolidation, regional dynamics'],
  ['ndt-training-market-trends-2027','NDT Training Market Trends 2027','training market — LMS adoption, blended learning, ASNT cohort sizes'],
  ['ndt-consulting-market-trends-2027','NDT Consulting Market Trends 2027','consulting market — outsourced Level III, RBI, FFS demand growth'],
  // Year-end refresh (10)
  ['atlantis-ndt-2027-year-in-review','Atlantis NDT 2027 Year in Review — Customer Wins + Product Releases','annual year-in-review — customer milestones, product releases, team growth'],
  ['atlantis-ndt-2028-roadmap-preview','Atlantis NDT 2028 Roadmap Preview','2028 roadmap preview — new products, new verticals, new regions'],
  ['ndt-2027-year-in-review-industry','NDT 2027 Year in Review — Industry','industry year-in-review — major events, regulatory changes, technology releases'],
  ['ndt-2028-predictions','NDT 2028 Predictions — AI, Hydrogen, CCS, Offshore Wind','2028 predictions — what to watch in AI adoption, hydrogen economy, CCS scale, offshore wind growth'],
  ['ndt-2027-best-blogs-curated','NDT 2027 Best Blogs Curated — Atlantis Library','curated best-of from Atlantis NDT 500+ blog library'],
  ['ndt-2027-best-practice-questions-curated','NDT 2027 Best Practice Questions Curated','curated best-of practice question sets across all methods'],
  ['ndt-2027-best-case-studies-curated','NDT 2027 Best Case Studies Curated','curated best-of customer case studies across all verticals'],
  ['ndt-2027-best-comparison-pages-curated','NDT 2027 Best Comparison Pages Curated','curated best-of comparison guides — software, certifications, methods'],
  ['ndt-2027-best-buyer-guides-curated','NDT 2027 Best Buyer Guides Curated','curated best-of vertical buyer guides'],
  ['ndt-2027-most-popular-content-by-traffic','NDT 2027 Most Popular Content by Traffic','top-traffic content review — what readers engaged with most'],
  // Conversion / sales-enablement (10)
  ['atlantis-ndt-discovery-call-prep-2027','Atlantis NDT Discovery Call Prep 2027','what to prepare for a free 30-min discovery call — current state, pain points, goals'],
  ['atlantis-ndt-pilot-program-2027','Atlantis NDT Pilot Program 2027 — How It Works','pilot program structure — scope, success criteria, transition to full deployment'],
  ['atlantis-ndt-customer-success-team-2027','Atlantis NDT Customer Success 2027 — How We Support You','customer success structure — onboarding, training, ongoing support, account management'],
  ['atlantis-ndt-implementation-phases-2027','Atlantis NDT Implementation Phases 2027 — Step-by-Step','phased implementation — discovery, design, build, parallel run, cutover, support'],
  ['atlantis-ndt-multi-region-rollout-2027','Atlantis NDT Multi-Region Rollout 2027','multi-region rollout playbook for global EPC + multi-site contractors'],
  ['atlantis-ndt-enterprise-vs-smb-2027','Atlantis NDT Enterprise vs SMB 2027 — Comparison','enterprise vs SMB customer journey — implementation, support, pricing differences'],
  ['atlantis-ndt-channel-partner-program-2027','Atlantis NDT Channel Partner Program 2027','channel partner program for system integrators + value-added resellers'],
  ['atlantis-ndt-referral-program-2027','Atlantis NDT Referral Program 2027','customer + consultant referral program structure'],
  ['atlantis-ndt-academic-program-2027','Atlantis NDT Academic Program 2027','academic + university partnership program for NDT engineering curricula'],
  ['atlantis-ndt-government-program-2027','Atlantis NDT Government Program 2027','government + defense + nuclear regulator engagement program'],
];
for (const [slug, title, focus] of q4Topics) {
  BLOGS.push(gen(id++, slug, title, focus, '2027 Q4', [
    { h: 'Year-End Context', p: `${focus}. Q4 2027 wraps the year with strategic + tactical guidance for 2028.` },
    { h: 'Atlantis NDT Stack', p: `${A.erp} + ${A.dt} + ${A.reporting} + ${A.lms} + ${A.ai} + ${A.ccs} integrated stack. ASNT NDT Level III led. Affordable + accessible + fully customizable.` },
    { h: 'Looking Ahead 2028', p: `2028 roadmap focuses on hydrogen + CCS scale + AI productisation + offshore wind expansion + LMS enterprise rollouts.` },
    { h: 'Engagement Path', p: `${A.contact} — free 30-min consultation, custom demo, tailored quote.` },
  ]));
}

console.log(`Generated ${BLOGS.length} year-2027 mega blogs`);
const slugs = new Set(existing.map(b => b.slug));
const filtered = BLOGS.filter(b => !slugs.has(b.slug));
existing.push(...filtered);
writeFileSync(BLOGS_PATH, JSON.stringify(existing, null, 2), 'utf-8');
console.log(`Wrote ${existing.length} total blogs to src/data/blogs.json (added ${filtered.length})`);
