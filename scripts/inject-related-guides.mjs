#!/usr/bin/env node
/**
 * Inject RelatedGuidesBlock into 10 top-traffic pages before ContactDetails.
 * Idempotent — skips pages already containing RelatedGuidesBlock.
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const TARGETS = {
  "src/pages/blog/ndt-salary-guide-2026-global.tsx": [
    { title: "ASNT Certification Levels & Path", href: "/asnt-certification", description: "Level I/II/III prep, pass-rate, full breakdown", icon: "cert" },
    { title: "API 570 Certification 2026", href: "/api-570-certification", description: "Piping inspector prep + practice questions", icon: "cert" },
    { title: "API 653 Certification 2026", href: "/api-653-certification", description: "Tank inspector prep + study plan", icon: "cert" },
    { title: "ASNT Level III Consulting", href: "/consulting/asnt-level-iii-consulting-services", description: "Outsourced Level III of record + audit defence", icon: "consulting" },
    { title: "HR & Payroll for NDT Companies", href: "/erp/hr-payroll-for-ndt-companies", description: "Affordable, accessible, fully customizable HR for inspection firms", icon: "erp" },
    { title: "NDT KPI Dashboards", href: "/erp/dashboards-and-kpis-for-ndt-companies", description: "Utilization, certification, audit findings — real-time", icon: "erp" },
  ],
  "src/pages/asnt-certification.tsx": [
    { title: "API 510 Pressure Vessel Inspector", href: "/api-510-certification", description: "In-service pressure vessel inspection cert prep", icon: "cert" },
    { title: "API 570 Piping Inspector", href: "/api-570-certification", description: "Process piping inspection cert prep", icon: "cert" },
    { title: "API 653 Tank Inspector", href: "/api-653-certification", description: "Aboveground storage tank inspection prep", icon: "cert" },
    { title: "ASNT Level III Consulting Services", href: "/consulting/asnt-level-iii-consulting-services", description: "Outsourced Level III of record", icon: "consulting" },
    { title: "SNT-TC-1A Requirements Guide", href: "/blog/asnt-snt-tc-1a-certification-requirements", description: "2024 employer-based cert deep dive", icon: "blog" },
    { title: "CMMS for Inspection Companies", href: "/erp/cmms-for-inspection-companies", description: "Affordable certification + asset tracking", icon: "erp" },
  ],
  "src/pages/api-510-certification.tsx": [
    { title: "API 510 Inspector Services", href: "/consulting/api-510-pressure-vessel-inspector-services", description: "Outsourced inspector-of-record + FFS per API 579", icon: "consulting" },
    { title: "API 570 Certification", href: "/api-570-certification", description: "Piping inspector cert prep", icon: "cert" },
    { title: "API 653 Certification", href: "/api-653-certification", description: "Tank inspector cert prep", icon: "cert" },
    { title: "ASNT Certification Path", href: "/asnt-certification", description: "Level I/II/III breakdown", icon: "cert" },
    { title: "Inspection Procedures Software", href: "/erp/inspection-procedures-management-software", description: "Version-control & approve NDT procedures", icon: "erp" },
    { title: "Digital Twin for Asset Integrity", href: "/digital-twins", description: "UT/PAUT 3D overlay + API 579 FFS", icon: "dt" },
  ],
  "src/pages/api-570-certification.tsx": [
    { title: "API 570 Piping Inspector Services", href: "/consulting/api-570-piping-inspector-services", description: "CUI program design + RBI per API 581", icon: "consulting" },
    { title: "API 510 Certification", href: "/api-510-certification", description: "Pressure vessel inspector cert prep", icon: "cert" },
    { title: "API 653 Certification", href: "/api-653-certification", description: "Tank inspector cert prep", icon: "cert" },
    { title: "ASNT Certification Path", href: "/asnt-certification", description: "Level I/II/III breakdown", icon: "cert" },
    { title: "Quality Management for NDT", href: "/erp/quality-management-for-ndt-companies", description: "ISO 9001 / 17025 / 17020 ready", icon: "erp" },
    { title: "Digital Twin Platform", href: "/digital-twins", description: "Inspection-data-native asset integrity", icon: "dt" },
  ],
  "src/pages/api-653-certification.tsx": [
    { title: "API 653 Tank Inspector Services", href: "/consulting/api-653-tank-inspector-services", description: "RBI bottom-plate + settlement FFS programs", icon: "consulting" },
    { title: "API 510 Certification", href: "/api-510-certification", description: "Pressure vessel inspector cert prep", icon: "cert" },
    { title: "API 570 Certification", href: "/api-570-certification", description: "Piping inspector cert prep", icon: "cert" },
    { title: "API 653 Tank Inspection Guide", href: "/blog/api-653-tank-inspection-guide", description: "Complete checklist + intervals", icon: "blog" },
    { title: "CMMS for Inspection Companies", href: "/erp/cmms-for-inspection-companies", description: "Affordable, accessible asset & cert tracking", icon: "erp" },
    { title: "Digital Twin for Tanks", href: "/digital-twins/storage-tank", description: "API 653-aligned tank digital twin", icon: "dt" },
  ],
  "src/pages/api-653-tank-inspection-guide.tsx": [
    { title: "API 653 Certification 2026", href: "/api-653-certification", description: "Pass the API 653 exam", icon: "cert" },
    { title: "API 653 Tank Inspector Services", href: "/consulting/api-653-tank-inspector-services", description: "Outsourced inspector-of-record", icon: "consulting" },
    { title: "API 510 Certification", href: "/api-510-certification", description: "Pressure vessel inspector prep", icon: "cert" },
    { title: "Inspection Procedures Software", href: "/erp/inspection-procedures-management-software", description: "Version-control NDT procedures", icon: "erp" },
    { title: "Digital Twin for Storage Tanks", href: "/digital-twins/storage-tank", description: "Bottom-plate MFL + API 653 RBI overlay", icon: "dt" },
    { title: "ASNT Certification Path", href: "/asnt-certification", description: "Level I/II/III breakdown", icon: "cert" },
  ],
  "src/pages/blog/rt-vs-ut-complete-comparison.tsx": [
    { title: "UT vs RT Comparison (short)", href: "/blog/ut-vs-rt-comparison", description: "Quick decision matrix", icon: "blog" },
    { title: "Visual Testing (VT) Guide", href: "/blog/visual-testing", description: "ASNT Level II VT prep + procedures", icon: "blog" },
    { title: "Digital Twin Platform", href: "/digital-twins", description: "3D UT/PAUT overlay on asset model", icon: "dt" },
    { title: "Quality Management ERP", href: "/erp/quality-management-for-ndt-companies", description: "ISO 9001 / 17020 / 17025 ready", icon: "erp" },
    { title: "ASNT Certification Path", href: "/asnt-certification", description: "Level I/II/III breakdown", icon: "cert" },
    { title: "ASNT Level III Consulting", href: "/consulting/asnt-level-iii-consulting-services", description: "Code interpretation + procedure development", icon: "consulting" },
  ],
  "src/pages/blog/eddy-current-testing-complete-guide.tsx": [
    { title: "Eddy Current Testing Method", href: "/eddy-current-testing", description: "ET hub page", icon: "blog" },
    { title: "ASNT Certification Path", href: "/asnt-certification", description: "ET Level II prep", icon: "cert" },
    { title: "Inspection Procedures Software", href: "/erp/inspection-procedures-management-software", description: "Author & version-control ET procedures", icon: "erp" },
    { title: "Digital Twin Platform", href: "/digital-twins", description: "ET-data-overlay on asset model", icon: "dt" },
    { title: "ASNT Level III Consulting", href: "/consulting/asnt-level-iii-consulting-services", description: "ET method consultation", icon: "consulting" },
    { title: "Quality Management ERP", href: "/erp/quality-management-for-ndt-companies", description: "Affordable, accessible QMS", icon: "erp" },
  ],
  "src/pages/magnetic-particle-testing.tsx": [
    { title: "MT Complete Guide", href: "/blog/magnetic-particle-testing-complete-guide", description: "Wet vs dry, yoke vs prods, ASNT Level II prep", icon: "blog" },
    { title: "ASNT Certification Path", href: "/asnt-certification", description: "MT Level I/II/III breakdown", icon: "cert" },
    { title: "Inspection Procedures Software", href: "/erp/inspection-procedures-management-software", description: "Author MT procedures", icon: "erp" },
    { title: "Digital Twin Platform", href: "/digital-twins", description: "Surface crack overlay on asset model", icon: "dt" },
    { title: "ASNT Level III Consulting", href: "/consulting/asnt-level-iii-consulting-services", description: "MT method consultation", icon: "consulting" },
    { title: "API 653 Tank Inspector", href: "/consulting/api-653-tank-inspector-services", description: "MT-heavy tank inspection programs", icon: "consulting" },
  ],
  "src/pages/ndt-technician-salary.tsx": [
    { title: "NDT Salary Guide 2026 Global", href: "/blog/ndt-salary-guide-2026-global", description: "Country, method, level breakdown", icon: "blog" },
    { title: "ASNT Certification Path", href: "/asnt-certification", description: "Level I/II/III prep", icon: "cert" },
    { title: "API 510 / 570 / 653 Certifications", href: "/api-510-certification", description: "Authorized inspector cert prep", icon: "cert" },
    { title: "ASNT Level III Consulting", href: "/consulting/asnt-level-iii-consulting-services", description: "Career path to Level III consultant", icon: "consulting" },
    { title: "HR & Payroll for NDT Companies", href: "/erp/hr-payroll-for-ndt-companies", description: "Affordable HR with cert expiry tracking", icon: "erp" },
    { title: "NDT Industry Statistics 2026", href: "/ndt-industry-statistics", description: "Market size, jobs, trends", icon: "blog" },
  ],

  // ===== Day-7 expansion (Step 5): 20 additional pages, equal-segment 5/5/5/5 =====

  // Training (5)
  "src/pages/api-510-training.tsx": [
    { title: "API 510 Certification Prep 2026", href: "/api-510-certification", description: "Practice questions + ASNT Level III-led prep", icon: "cert" },
    { title: "API 570 Piping Inspector Training", href: "/api-570-training", description: "Process piping inspection prep", icon: "training" },
    { title: "API 653 Tank Inspector Training", href: "/api-653-training", description: "Aboveground storage tank prep", icon: "training" },
    { title: "API 510 Pressure Vessel Inspector Services", href: "/consulting/api-510-pressure-vessel-inspector-services", description: "Outsourced inspector-of-record", icon: "consulting" },
    { title: "CMMS for Inspection Companies", href: "/erp/cmms-for-inspection-companies", description: "Cert tracking + interval automation", icon: "erp" },
    { title: "Digital Twin for Asset Integrity", href: "/digital-twins", description: "API 579 FFS + RBI per API 581", icon: "dt" },
  ],
  "src/pages/api-570-training.tsx": [
    { title: "API 570 Certification Prep 2026", href: "/api-570-certification", description: "Piping inspector exam prep", icon: "cert" },
    { title: "API 510 Pressure Vessel Training", href: "/api-510-training", description: "Pressure vessel inspector prep", icon: "training" },
    { title: "API 653 Tank Inspector Training", href: "/api-653-training", description: "Storage tank inspector prep", icon: "training" },
    { title: "API 570 Piping Inspector Services", href: "/consulting/api-570-piping-inspector-services", description: "CUI + RBI program design", icon: "consulting" },
    { title: "Quality Management ERP", href: "/erp/quality-management-for-ndt-companies", description: "Affordable QMS for inspection firms", icon: "erp" },
    { title: "Atlantis NDT Digital Twin", href: "/digital-twins", description: "UT/PAUT 3D overlay + FFS", icon: "dt" },
  ],
  "src/pages/api-653-training.tsx": [
    { title: "API 653 Certification Prep 2026", href: "/api-653-certification", description: "Tank inspector exam prep", icon: "cert" },
    { title: "API 510 Pressure Vessel Training", href: "/api-510-training", description: "Pressure vessel inspector prep", icon: "training" },
    { title: "API 570 Piping Inspector Training", href: "/api-570-training", description: "Process piping inspector prep", icon: "training" },
    { title: "API 653 Tank Inspector Services", href: "/consulting/api-653-tank-inspector-services", description: "Bottom-plate RBI + settlement FFS", icon: "consulting" },
    { title: "Asset Management for Tank Farms", href: "/erp/cmms-for-inspection-companies", description: "Tank interval tracking + RBI integration", icon: "erp" },
    { title: "Digital Twin for Storage Tanks", href: "/digital-twins/storage-tank", description: "Bottom-plate corrosion overlay", icon: "dt" },
  ],
  "src/pages/asnt-level-iii-training.tsx": [
    { title: "ASNT Certification Path", href: "/asnt-certification", description: "Level I/II/III route + pass-rates", icon: "cert" },
    { title: "ASNT Level III Consulting Services", href: "/consulting/asnt-level-iii-consulting-services", description: "Outsourced Level III of record", icon: "consulting" },
    { title: "API 510 / 570 / 653 Certifications", href: "/api-510-certification", description: "Authorized inspector cert prep", icon: "cert" },
    { title: "Inspection Procedures Management", href: "/erp/inspection-procedures-management-software", description: "Author + version-control NDT procedures", icon: "erp" },
    { title: "Digital Twin for NDT Asset Integrity", href: "/digital-twins", description: "ASNT Level III-engineered platform", icon: "dt" },
    { title: "NDT Salary Guide 2026", href: "/blog/ndt-salary-guide-2026-global", description: "Level III salary breakdown", icon: "blog" },
  ],
  "src/pages/aerospace-ndt-training.tsx": [
    { title: "ASNT Certification Path", href: "/asnt-certification", description: "NAS 410 + SNT-TC-1A alignment", icon: "cert" },
    { title: "Aerospace Corporate Training", href: "/corporate-training/aerospace", description: "NADCAP AC7114-aligned programs", icon: "training" },
    { title: "Aerospace Quality Control ERP", href: "/erp/quality-management-for-ndt-companies", description: "Nadcap-ready QMS", icon: "erp" },
    { title: "ASNT Level III Consulting", href: "/consulting/asnt-level-iii-consulting-services", description: "Aerospace MRO audit-defence", icon: "consulting" },
    { title: "Digital Twin for Aerospace", href: "/digital-twins", description: "UT/PAUT 3D + NAS 410 traceability", icon: "dt" },
    { title: "Eddy Current Testing Guide", href: "/blog/eddy-current-testing-complete-guide", description: "ET method deep-dive", icon: "blog" },
  ],

  // Consulting (5)
  "src/pages/consulting/AsntLevelIiiConsultingServices.tsx": [
    { title: "API 510 Pressure Vessel Inspector Services", href: "/consulting/api-510-pressure-vessel-inspector-services", description: "In-service vessel programs + RBI", icon: "consulting" },
    { title: "API 570 Piping Inspector Services", href: "/consulting/api-570-piping-inspector-services", description: "CUI + RBI program design", icon: "consulting" },
    { title: "API 653 Tank Inspector Services", href: "/consulting/api-653-tank-inspector-services", description: "Bottom-plate RBI + FFS", icon: "consulting" },
    { title: "Fitness for Service per API 579", href: "/consulting/fitness-for-service-api-579", description: "Level 1/2/3 FFS assessments", icon: "consulting" },
    { title: "ASNT Certification Path", href: "/asnt-certification", description: "Level I/II/III prep", icon: "cert" },
    { title: "Inspection Procedures Management", href: "/erp/inspection-procedures-management-software", description: "Procedure version-control + approval", icon: "erp" },
  ],
  "src/pages/consulting/Api510PressureVesselInspectorServices.tsx": [
    { title: "API 510 Certification Prep 2026", href: "/api-510-certification", description: "Pressure vessel inspector exam prep", icon: "cert" },
    { title: "API 570 Piping Inspector Services", href: "/consulting/api-570-piping-inspector-services", description: "Sister service line — piping", icon: "consulting" },
    { title: "API 653 Tank Inspector Services", href: "/consulting/api-653-tank-inspector-services", description: "Sister service line — tanks", icon: "consulting" },
    { title: "ASNT Level III Consulting", href: "/consulting/asnt-level-iii-consulting-services", description: "Outsourced Level III of record", icon: "consulting" },
    { title: "Fitness for Service per API 579", href: "/consulting/fitness-for-service-api-579", description: "Defect FFS assessments", icon: "consulting" },
    { title: "Digital Twin for Pressure Vessels", href: "/digital-twins/pressure-vessel", description: "UT/PAUT overlay + API 579", icon: "dt" },
  ],
  "src/pages/consulting/Api570PipingInspectorServices.tsx": [
    { title: "API 570 Certification Prep 2026", href: "/api-570-certification", description: "Piping inspector exam prep", icon: "cert" },
    { title: "API 510 Pressure Vessel Inspector Services", href: "/consulting/api-510-pressure-vessel-inspector-services", description: "Sister service line — vessels", icon: "consulting" },
    { title: "API 653 Tank Inspector Services", href: "/consulting/api-653-tank-inspector-services", description: "Sister service line — tanks", icon: "consulting" },
    { title: "ASNT Level III Consulting", href: "/consulting/asnt-level-iii-consulting-services", description: "Outsourced Level III of record", icon: "consulting" },
    { title: "Fitness for Service per API 579", href: "/consulting/fitness-for-service-api-579", description: "Piping FFS assessments", icon: "consulting" },
    { title: "Digital Twin for Pipelines", href: "/digital-twins/pipeline", description: "Pipeline integrity overlay", icon: "dt" },
  ],
  "src/pages/consulting/Api653TankInspectorServices.tsx": [
    { title: "API 653 Certification Prep 2026", href: "/api-653-certification", description: "Tank inspector exam prep", icon: "cert" },
    { title: "API 510 Pressure Vessel Inspector Services", href: "/consulting/api-510-pressure-vessel-inspector-services", description: "Sister service line — vessels", icon: "consulting" },
    { title: "API 570 Piping Inspector Services", href: "/consulting/api-570-piping-inspector-services", description: "Sister service line — piping", icon: "consulting" },
    { title: "ASNT Level III Consulting", href: "/consulting/asnt-level-iii-consulting-services", description: "Outsourced Level III of record", icon: "consulting" },
    { title: "Fitness for Service per API 579", href: "/consulting/fitness-for-service-api-579", description: "Tank settlement + bottom FFS", icon: "consulting" },
    { title: "Digital Twin for Storage Tanks", href: "/digital-twins/storage-tank", description: "Bottom-plate corrosion overlay", icon: "dt" },
  ],
  "src/pages/consulting/fitness-for-service-api-579.tsx": [
    { title: "API 510 Pressure Vessel Inspector Services", href: "/consulting/api-510-pressure-vessel-inspector-services", description: "Vessel FFS engagements", icon: "consulting" },
    { title: "API 570 Piping Inspector Services", href: "/consulting/api-570-piping-inspector-services", description: "Piping FFS engagements", icon: "consulting" },
    { title: "API 653 Tank Inspector Services", href: "/consulting/api-653-tank-inspector-services", description: "Tank FFS engagements", icon: "consulting" },
    { title: "ASNT Level III Consulting", href: "/consulting/asnt-level-iii-consulting-services", description: "Senior technical authority", icon: "consulting" },
    { title: "Atlantis NDT Digital Twin", href: "/digital-twins", description: "UT/PAUT 3D + API 579 FFS overlay", icon: "dt" },
    { title: "Inspection Procedures Management", href: "/erp/inspection-procedures-management-software", description: "Procedure depth for FFS assessments", icon: "erp" },
  ],

  // ERP (5)
  "src/pages/Erp.tsx": [
    { title: "ERP by Industry", href: "/erp-industries", description: "Industry-specific configurations", icon: "erp" },
    { title: "ERP Modules", href: "/erp-modules", description: "Full 35+ Odoo apps catalog", icon: "erp" },
    { title: "NDT vs Generic ERP", href: "/ndt-erp-vs-generic-erp", description: "Why NDT-specific config wins", icon: "erp" },
    { title: "Best NDT Reporting Software 2026", href: "/best-ndt-reporting-software-2026", description: "Vendor comparison", icon: "blog" },
    { title: "ASNT Level III Consulting", href: "/consulting/asnt-level-iii-consulting-services", description: "Outsourced Level III of record", icon: "consulting" },
    { title: "Atlantis Digital Twin Platform", href: "/digital-twins", description: "Asset integrity overlay", icon: "dt" },
  ],
  "src/pages/ErpIndustriesHub.tsx": [
    { title: "ERP Modules", href: "/erp-modules", description: "Full 35+ Odoo apps catalog", icon: "erp" },
    { title: "Atlantis NDT ERP Hub", href: "/erp", description: "All-in-one product hub", icon: "erp" },
    { title: "NDT vs Generic ERP", href: "/ndt-erp-vs-generic-erp", description: "Why NDT-specific config wins", icon: "erp" },
    { title: "ASNT Certification Path", href: "/asnt-certification", description: "Level I/II/III prep", icon: "cert" },
    { title: "API 510 Pressure Vessel Inspector Services", href: "/consulting/api-510-pressure-vessel-inspector-services", description: "Industry consulting", icon: "consulting" },
    { title: "Atlantis Digital Twin Platform", href: "/digital-twins", description: "Asset integrity overlay", icon: "dt" },
  ],
  "src/pages/ErpModulesHub.tsx": [
    { title: "ERP by Industry", href: "/erp-industries", description: "Industry-specific configurations", icon: "erp" },
    { title: "Atlantis NDT ERP Hub", href: "/erp", description: "All-in-one product hub", icon: "erp" },
    { title: "NDT vs Generic ERP", href: "/ndt-erp-vs-generic-erp", description: "Why NDT-specific config wins", icon: "erp" },
    { title: "Best NDT Reporting Software 2026", href: "/best-ndt-reporting-software-2026", description: "Vendor comparison", icon: "blog" },
    { title: "ASNT Level III Consulting", href: "/consulting/asnt-level-iii-consulting-services", description: "Outsourced Level III of record", icon: "consulting" },
    { title: "Atlantis Digital Twin Platform", href: "/digital-twins", description: "Asset integrity overlay", icon: "dt" },
  ],
  "src/pages/best-ndt-reporting-software-2026.tsx": [
    { title: "Atlantis NDT ERP Hub", href: "/erp", description: "All-in-one Odoo-based platform", icon: "erp" },
    { title: "NDT Reports Software", href: "/erp/ndt-reports-software-for-inspection-companies", description: "1-click report generation", icon: "erp" },
    { title: "Inspection Procedures Management", href: "/erp/inspection-procedures-management-software", description: "Procedure version-control", icon: "erp" },
    { title: "ASNT Level III Consulting", href: "/consulting/asnt-level-iii-consulting-services", description: "Outsourced Level III of record", icon: "consulting" },
    { title: "Atlantis Digital Twin", href: "/digital-twins", description: "API 579 FFS + UT/PAUT overlay", icon: "dt" },
    { title: "NDT Salary Guide 2026", href: "/blog/ndt-salary-guide-2026-global", description: "Industry salary data", icon: "blog" },
  ],
  "src/pages/NdtErpVsGenericErp.tsx": [
    { title: "Atlantis NDT ERP Hub", href: "/erp", description: "All-in-one product hub", icon: "erp" },
    { title: "ERP by Industry", href: "/erp-industries", description: "Industry-specific configurations", icon: "erp" },
    { title: "ERP Modules", href: "/erp-modules", description: "Full 35+ Odoo apps catalog", icon: "erp" },
    { title: "Best NDT Reporting Software 2026", href: "/best-ndt-reporting-software-2026", description: "Vendor comparison", icon: "blog" },
    { title: "ASNT Level III Consulting", href: "/consulting/asnt-level-iii-consulting-services", description: "Outsourced Level III of record", icon: "consulting" },
    { title: "Atlantis Digital Twin", href: "/digital-twins", description: "Asset integrity overlay", icon: "dt" },
  ],

  // DT (5)
  "src/pages/DigitalTwins.tsx": [
    { title: "Digital Twin ROI Calculator", href: "/digital-twin-roi-calculator", description: "Worked refinery/FPSO/pipeline examples", icon: "dt" },
    { title: "Digital Twin Readiness Quiz", href: "/digital-twin-readiness-quiz", description: "5-minute maturity assessment", icon: "dt" },
    { title: "Digital Twins NDT Guide 2026", href: "/digital-twins-ndt-guide-2026", description: "Implementation roadmap", icon: "blog" },
    { title: "API 510 / 570 / 653 Inspector Services", href: "/consulting/api-510-pressure-vessel-inspector-services", description: "FFS + RBI consulting", icon: "consulting" },
    { title: "Atlantis NDT ERP Hub", href: "/erp", description: "Inspection workflow + reporting", icon: "erp" },
    { title: "ASNT Certification Path", href: "/asnt-certification", description: "Level I/II/III prep", icon: "cert" },
  ],
  "src/pages/DigitalTwinsNdtGuide2026.tsx": [
    { title: "Digital Twin Platform Hub", href: "/digital-twins", description: "Atlantis DT platform features", icon: "dt" },
    { title: "Digital Twin ROI Calculator", href: "/digital-twin-roi-calculator", description: "Worked examples", icon: "dt" },
    { title: "Digital Twin Readiness Quiz", href: "/digital-twin-readiness-quiz", description: "5-minute assessment", icon: "dt" },
    { title: "Fitness for Service per API 579", href: "/consulting/fitness-for-service-api-579", description: "Digital-twin FFS workflows", icon: "consulting" },
    { title: "Atlantis NDT ERP Hub", href: "/erp", description: "ERP + DT integration", icon: "erp" },
    { title: "ASNT Level III Consulting", href: "/consulting/asnt-level-iii-consulting-services", description: "Senior technical authority", icon: "consulting" },
  ],
  "src/pages/DigitalTwinReadinessQuiz.tsx": [
    { title: "Digital Twin Platform Hub", href: "/digital-twins", description: "Atlantis DT platform features", icon: "dt" },
    { title: "Digital Twin ROI Calculator", href: "/digital-twin-roi-calculator", description: "Worked examples", icon: "dt" },
    { title: "Digital Twins NDT Guide 2026", href: "/digital-twins-ndt-guide-2026", description: "Implementation roadmap", icon: "blog" },
    { title: "Fitness for Service per API 579", href: "/consulting/fitness-for-service-api-579", description: "DT-FFS workflows", icon: "consulting" },
    { title: "Atlantis NDT ERP Hub", href: "/erp", description: "ERP + DT integration", icon: "erp" },
    { title: "ASNT Level III Consulting", href: "/consulting/asnt-level-iii-consulting-services", description: "Senior technical authority", icon: "consulting" },
  ],
  "src/pages/DigitalTwinRoiCalculator.tsx": [
    { title: "Digital Twin Platform Hub", href: "/digital-twins", description: "Atlantis DT platform features", icon: "dt" },
    { title: "Digital Twin Readiness Quiz", href: "/digital-twin-readiness-quiz", description: "Maturity assessment", icon: "dt" },
    { title: "Digital Twins NDT Guide 2026", href: "/digital-twins-ndt-guide-2026", description: "Implementation roadmap", icon: "blog" },
    { title: "Fitness for Service per API 579", href: "/consulting/fitness-for-service-api-579", description: "ROI from FFS deferrals", icon: "consulting" },
    { title: "Atlantis NDT ERP Hub", href: "/erp", description: "ERP + DT integration", icon: "erp" },
    { title: "ASNT Level III Consulting", href: "/consulting/asnt-level-iii-consulting-services", description: "Senior technical authority", icon: "consulting" },
  ],
  "src/pages/DigitalTwinApiMapping.tsx": [
    { title: "Digital Twin Platform Hub", href: "/digital-twins", description: "Atlantis DT platform features", icon: "dt" },
    { title: "Digital Twin ROI Calculator", href: "/digital-twin-roi-calculator", description: "Worked examples", icon: "dt" },
    { title: "Digital Twins NDT Guide 2026", href: "/digital-twins-ndt-guide-2026", description: "Implementation roadmap", icon: "blog" },
    { title: "API 510 / 570 / 653 Inspector Services", href: "/consulting/api-510-pressure-vessel-inspector-services", description: "API code consulting", icon: "consulting" },
    { title: "Atlantis NDT ERP Hub", href: "/erp", description: "ERP + DT integration", icon: "erp" },
    { title: "ASNT Level III Consulting", href: "/consulting/asnt-level-iii-consulting-services", description: "Senior technical authority", icon: "consulting" },
  ],
};

let touched = 0;
const failures = [];

for (const [rel, links] of Object.entries(TARGETS)) {
  const p = join(ROOT, rel.replace(/\//g, '\\'));
  let src;
  try { src = readFileSync(p, 'utf-8'); } catch (e) { failures.push({ file: rel, err: e.message }); continue; }
  if (src.includes('RelatedGuidesBlock')) { console.log('skip (already has):', rel); continue; }

  // Find LAST @/components import — insert RelatedGuidesBlock import after it
  const re = /import[^\n]+from\s+["']@\/components\/[^"']+["'];?[\r\n]+/g;
  let lastMatch = null;
  let m;
  while ((m = re.exec(src)) !== null) { lastMatch = m; }
  if (!lastMatch) { failures.push({ file: rel, err: 'no @/components import' }); continue; }
  const importEnd = lastMatch.index + lastMatch[0].length;
  const newImport = `import RelatedGuidesBlock from "@/components/RelatedGuidesBlock";\n`;
  let out = src.slice(0, importEnd) + newImport + src.slice(importEnd);

  // Build links JSON string
  const linksStr = JSON.stringify(links, null, 6).replace(/^/gm, '        ').trimStart();
  const block = `        <RelatedGuidesBlock links={${linksStr}} />\n\n        `;

  // Insert before ContactDetails
  const cdMatch = out.match(/(\s*)<ContactDetails\s*\/>/);
  if (!cdMatch) { failures.push({ file: rel, err: 'no ContactDetails tag' }); continue; }
  out = out.replace(/(\s*)<ContactDetails\s*\/>/, `\n${block}<ContactDetails />`);

  try {
    writeFileSync(p, out, 'utf-8');
    touched++;
    console.log('injected:', rel);
  } catch (e) {
    failures.push({ file: rel, err: e.message });
  }
}

console.log(`\nDone. ${touched} / ${Object.keys(TARGETS).length} pages injected.`);
if (failures.length) console.log('Failures:', JSON.stringify(failures, null, 2));
