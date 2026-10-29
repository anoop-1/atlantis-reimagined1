import ErpIndustryPage from '@/components/ErpIndustryPage';
const data = {
  "slug": "aerospace-quality-control",
  "name": "Aerospace Quality Control",
  "title": "ERP for Aerospace QC, NDT & MRO Companies (AS9100, SNT-TC-1A)",
  "h1": "ERP for Aerospace Quality Control & MRO",
  "desc": "AS9100D quality management, SNT-TC-1A-based NDT personnel qualification, aircraft MRO work-order management, FAA / EASA / DGCA regulatory compliance, customer-specific (Boeing / Airbus / Bombardier / Pratt & Whitney) quality flow-down.",
  "intro": "Aerospace quality is the highest standard in industrial inspection. AS9100D extends ISO 9001 with industry-specific requirements; NDT personnel qualification runs on the employer's ASNT SNT-TC-1A-based written practice; customer-specific specifications from Boeing (D6-82479), Airbus (AITM), Bombardier, Embraer, and Pratt & Whitney (ASQR-01) add another layer. The aerospace ERP configuration handles all of it.",
  "modules": [
    "certification-tracking",
    "document-control",
    "quality-management",
    "work-order-management",
    "audit-management",
    "asset-management",
    "inventory-management",
    "calibration-management"
  ],
  "regs": [
    "AS9100D / AS9120 / AS9110 (MRO)",
    "ASNT SNT-TC-1A (2024) written practice",
    "FAA 14 CFR Part 145 / 21",
    "EASA Part 145 / Part-M",
    "DGCA CAR Section 2 / Series E",
    "Nadcap AC7114 (NDT) via PRI eAuditNet",
    "ASTM E1417 / E1444 / E1742 / E2375 (aerospace NDT)",
    "ISO 9712 — annex on aerospace"
  ],
  "operators": [
    "Boeing — commercial / defense",
    "Airbus — commercial / defense",
    "Bombardier — business aviation",
    "Embraer — regional jet",
    "Pratt & Whitney — engine OEM",
    "GE Aerospace — engine OEM",
    "Rolls-Royce — engine OEM",
    "Safran — engine / components",
    "Lockheed Martin — defense",
    "Northrop Grumman — defense"
  ],
  "pain": [
    "SNT-TC-1A written-practice qualification matrix and OEM endorsements in Excel — version drift across departments",
    "Customer-specific quality clauses (Boeing D-590, AITM, ASQR-01) flow-down is informal — audit findings",
    "Work-order traceability per FAA 14 CFR Part 145 — manual paper trails",
    "FOD prevention program not integrated with work-order — incident risk",
    "Calibration of dimensional / NDT equipment scattered across multiple systems"
  ],
  "faqs": [
    [
      "Does it support aerospace personnel qualification under an SNT-TC-1A written practice?",
      "Yes. Qualification under your ASNT SNT-TC-1A-based written practice is native — training hours, experience, General / Specific / Practical examinations, vision-test currency and recertification are all tracked per technician, with each customer's aerospace requirements and OEM endorsements layered on top. The qualification matrix supports method, technique, and customer-specific qualifications (e.g., Boeing FPI Level II per D-590) and exports as a Nadcap AC7114 audit pack for PRI eAuditNet. Atlantis also provides ASNT NDT Level III consulting to write or update the written practice itself."
    ],
    [
      "How are Boeing / Airbus / OEM customer quality clauses managed?",
      "Customer-specific quality flow-down per AS9100D §4.4. Boeing D6-82479, Airbus AITM, Bombardier ASTM, Embraer NE, Pratt & Whitney ASQR-01, GE S-1000 are imported as controlled customer documents. Internal procedures that implement customer requirements are cross-referenced; revision changes flag affected internal documents for review."
    ],
    [
      "Does it work for FAA Part 145 repair stations?",
      "Yes. Work-order traceability per 14 CFR Part 145.211 (record keeping) and Part 145.219 (work performed) is supported. Operations log, parts traceability (8130-3 forms), inspection records, maintenance release (Form 8130 / EASA Form 1), and customer notification of major repair / alteration are all integrated. Part 145 audit readiness is the default state."
    ],
    [
      "Can it manage AS9100D + ISO 9001 + ISO 17025 integrated systems?",
    ],
    [
      "How is FOD (foreign object debris) prevention integrated?",
      "FOD prevention per AS9146 is integrated with work-order workflow. Tool / equipment check-in / check-out, FOD shadow-board sign-off, FOD walk inspection, and FOD-found incident workflow are all in-system. Daily FOD compliance is visible on the production-area dashboard."
    ]
  ]
};
export default function ErpIndustry_aerospace_quality_control() { return <ErpIndustryPage {...data} />; }
