import ErpIndustryPage from '@/components/ErpIndustryPage';
const data = {
  "slug": "industrial-coatings-inspection",
  "name": "Industrial Coatings Inspection",
  "title": "ERP for Industrial Coatings & Corrosion Inspection Companies",
  "h1": "ERP for Industrial Coatings & Corrosion Inspection",
  "desc": "NACE / AMPP coating inspector workflow management, SSPC surface preparation tracking, holiday testing records, DFT measurement campaign management, ISO 12944 corrosion-protection compliance, and offshore coating QA.",
  "intro": "Industrial coatings inspection — from refinery tank linings to offshore platform topside coatings to pipeline external coatings — is governed by NACE / AMPP coating inspector qualifications, SSPC surface-preparation standards, and ISO 12944 corrosion-protection systems. The coatings ERP is built to manage the inspection campaigns and documentation that owner-operators demand.",
  "modules": [
    "work-order-management",
    "certification-tracking",
    "quality-management",
    "document-control",
    "audit-management",
    "asset-management",
    "inventory-management",
    "project-management"
  ],
  "regs": [
    "NACE / AMPP CIP Level I / II / III",
    "SSPC PA 2 (DFT measurement)",
    "SSPC SP 1 / SP 5 / SP 6 / SP 10 / SP 11 (surface prep)",
    "ISO 12944 (corrosion protection)",
    "ISO 8501 (visual cleanliness)",
    "ISO 8502 (surface contamination)",
    "ISO 19840 (DFT measurement)",
    "ASTM D4541 (pull-off adhesion)",
    "ASTM D5402 (cleanliness)",
    "BS 5493"
  ],
  "operators": [
    "Hempel (paint mfr)",
    "Jotun (paint mfr)",
    "AkzoNobel International (paint mfr)",
    "PPG (paint mfr)",
    "Sherwin-Williams Protective & Marine (paint mfr)",
    "Shell coatings spec",
    "BP coatings spec",
    "ADNOC coatings spec",
    "Saudi Aramco SAES-H-001 / SAES-H-101"
  ],
  "pain": [
    "DFT readings on paper, re-entered into Excel — transcription errors",
    "Hold-point notification to client / engineer informal — clients miss critical holds",
    "Inspector qualifications expire mid-project — NACE Level II cert lapses, work rejected",
    "Coating-system data sheets scattered across project email — wrong system applied",
    "Pull-off adhesion test results in field notebooks — not aggregated for project closeout"
  ],
  "faqs": [
    [
      "Does it manage NACE / AMPP Coating Inspector qualifications?",
      "Yes. NACE / AMPP CIP Level I / II / III qualifications, BGAS-CSWIP coating inspector, ICorr coating inspector, FROSIO coating inspector are tracked with expiry, scope, and renewal workflow. Inspector assignments to jobs are gated against required qualification."
    ],
    [
      "How are DFT (dry-film thickness) campaigns managed?",
      "DFT readings per SSPC PA 2 are captured in the field app on a mobile DFT gauge. The grid pattern, spot-measurements, and 80-80 rule statistics are calculated automatically. Out-of-spec spots trigger remediation work order. Final coating system pull-down per SSPC PA 2 §9 generates the customer-facing DFT report."
    ],
    [
      "Does it support ISO 12944 corrosion-protection system documentation?",
      "Yes. The coating-system database holds each system (paint type, generic coating, manufacturer product reference, layer thickness, surface preparation) per ISO 12944 / SSPC SP standards. Project-specific coating-system specifications are imported and tracked; deviation from approved system requires engineering authorization."
    ],
    [
      "Can it track hold points and witness inspections by the client?",
      "Yes. Project-specific inspection-and-test plan (ITP) defines hold (H), witness (W), and review (R) points. Each hold-point has notification lead-time and witness-list. The customer / engineer / class-society surveyor receives notification 24–48 hours in advance via email and portal. Witness-attendance / waiver is logged."
    ],
    [
      "How are pull-off adhesion (ASTM D4541) results stored?",
      "ASTM D4541 pull-off adhesion tests are logged per dolly with diameter, glue, dwell time, pull rate, pull-off MPa, and failure mode (cohesive / adhesive / glue). Project-level statistics (mean, std dev, minimum, characteristic value) and customer-acceptance criteria are evaluated automatically. Pull-off charts are included in the project closeout dossier."
    ]
  ]
};
export default function ErpIndustry_industrial_coatings_inspection() { return <ErpIndustryPage {...data} />; }
