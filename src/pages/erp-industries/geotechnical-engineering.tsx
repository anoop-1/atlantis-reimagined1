import ErpIndustryPage from '@/components/ErpIndustryPage';
const data = {
  "slug": "geotechnical-engineering",
  "name": "Geotechnical Engineering Firms",
  "title": "ERP for Geotechnical Engineering & Site Investigation Firms",
  "h1": "ERP for Geotechnical Engineering Firms",
  "desc": "Site investigation campaign management, borehole / CPT data management, laboratory testing workflow (ASTM D / EN ISO standards), geotechnical report generation, and project closeout for geotechnical consultancies and site-investigation contractors.",
  "intro": "Geotechnical engineering firms run site investigation campaigns, drill boreholes, conduct CPTs, sample soils, run laboratory tests, and produce geotechnical reports that underpin civil and infrastructure projects worldwide. Atlantis ERP's geotechnical configuration manages the campaign-to-report lifecycle on a single platform.",
  "modules": [
    "work-order-management",
    "project-management",
    "document-control",
    "quality-management",
    "asset-management",
    "certification-tracking",
    "calibration-management",
    "inventory-management"
  ],
  "regs": [
    "ASTM D420 series (soil sampling)",
    "ASTM D2487 (USCS classification)",
    "ASTM D2216 (moisture)",
    "ASTM D4318 (Atterberg limits)",
    "ASTM D2435 (consolidation)",
    "ASTM D3080 (direct shear)",
    "EN ISO 14688 / 14689 (soil / rock classification)",
    "EN ISO 22282 (geotechnical investigation)",
    "BS 5930 (UK ground investigation)",
    "AGS data format"
  ],
  "operators": [
    "Arup — engineering",
    "Mott MacDonald — engineering",
    "WSP — engineering",
    "Atkins — engineering",
    "AECOM — civil",
    "Fugro — geotechnical",
    "Geosyntec — geotechnical",
    "Stantec — engineering",
    "Bechtel — EPC",
    "Skanska — construction"
  ],
  "pain": [
    "Borehole logs in Word / Excel — re-typed multiple times across project",
    "CPT raw data files in vendor formats — manual conversion to AGS format",
    "Lab test results in paper notebooks — re-entered into project database",
    "Site investigation campaign coordination across drillers, lab, engineers — informal",
    "Final geotechnical report assembly takes 6+ weeks"
  ],
  "faqs": [
    [
      "Does it support AGS data format for UK / EU geotechnical projects?",
      "Yes. AGS (Association of Geotechnical and Geoenvironmental Specialists) data format export is native — AGS 3.1, AGS 4, AGS 4.1 are supported. Project data (borehole, CPT, lab tests) exports in AGS-compliant format for client deliverable. Import from drillers / lab providers in AGS format is also supported."
    ],
    [
      "How are borehole logs and CPT data managed?",
      "Borehole logs per ASTM / EN ISO 14688 are authored in the platform with strata description, sample recovery, SPT / N-value, groundwater observations, and Atterberg / shear-strength results. CPT raw data from vendor PSPs (Geomil, Pagani, Hogentogler) imports automatically with tip resistance, sleeve friction, pore pressure, and friction ratio plotted vs. depth."
    ],
    [
      "Can laboratory test workflow be tracked from sample receipt to report?",
      "Yes. Sample receipt at the lab triggers chain-of-custody tracking, test assignment (Atterberg, particle-size, consolidation, triaxial, direct shear, CBR, etc.), test execution, result review, and report sign-off. Lab equipment calibration ties into the result via the calibration management module."
    ],
    [
      "Does it produce client-ready geotechnical reports?",
      "Yes. The geotechnical report builder assembles introduction, site description, investigation methodology, factual data (borehole logs, CPT plots, lab results), interpretation (soil profile, design parameters), and recommendations. Customer-format templates support major engineering firms (Arup, Mott MacDonald, Fugro, AECOM, WSP)."
    ],
    [
      "How is field-engineer / drill-rig coordination managed?",
      "Site investigation campaigns are managed as projects with drill-rig schedule, field engineer assignment, daily progress (boreholes drilled, samples obtained, samples to lab), and budget tracking. Mobile field-app captures borehole completion and sample submission in real-time."
    ]
  ]
};
export default function ErpIndustry_geotechnical_engineering() { return <ErpIndustryPage {...data} />; }
