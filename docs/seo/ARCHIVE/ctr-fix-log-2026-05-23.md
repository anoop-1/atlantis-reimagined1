# CTR Fix Log — 2026-05-23

Title + meta description rewrites on 30 high-impression, low-CTR pages. Brand positioning: "Affordable NDT ERP — $18,000/yr, all 30+ Odoo apps included, fully customizable."

## ERP-PRIMARY (12 pages)

1. `/erp` (src/pages/Erp.tsx)
   - OLD title: "ERP Solutions"
   - NEW title: "Affordable ERP — $18,000/yr, 30+ Odoo Apps Included"

2. `/ndt-erp-solution` (src/pages/ndt-erp-solution.tsx)
   - OLD title: "NDT ERP Software for Inspection Companies (2026 Guide + Pricing) | Atlantis NDT"
   - NEW title: "Affordable NDT ERP $18,000/yr — All Odoo Apps Included"

3. `/ndt-erp-vs-generic-erp` (src/pages/NdtErpVsGenericErp.tsx)
   - OLD title: "NDT ERP vs Generic ERP: 2026 Comparison Guide"
   - NEW title: "NDT ERP vs SAP/Oracle 2026 — $18K/yr vs $2M+ TCO"

4. `/ndt-erp-{city}` formula (src/components/ErpLocationPage.tsx — affects ALL ndt-erp-{city} pages incl. London, Qatar)
   - OLD title formula: "NDT ERP Software ${city} | Inspection Management System | Atlantis NDT"
   - NEW title formula: "Affordable NDT ERP in ${city} — $18,000/yr All Odoo Apps Included"
   - OLD desc formula: "NDT ERP software for inspection companies in ${city}, ${country}. Automate ASNT certification tracking, API 510/570/653 scheduling, and PDF report generation. Purpose-built for NDT — not a generic ERP."
   - NEW desc formula: "Atlantis NDT ERP for inspection companies in ${city}, ${country}. $18,000/yr flat — 30+ Odoo apps included. ASNT/ISO 9712 certification tracking, work orders, RBI. Demo: info@atlantisndt.com"

5. `/ndt-erp-london`, `/ndt-erp-qatar` — covered by ErpLocationPage edit (#4)

6. `/ndt-erp-software-comparison` (src/pages/ndt-erp-software-comparison.tsx)
   - OLD title: "NDT ERP Software Comparison 2026 | Best Solutions Reviewed | Atlantis NDT"
   - NEW title: "Best NDT ERP Software 2026 — 8 Vendors Compared, $18K vs $2M+"

7. `/ndt-erp-implementation-timeline` (src/pages/NdtErpImplementationTimeline.tsx)
   - OLD title: "NDT ERP Implementation Timeline 2026: 30/60/90 Plan"
   - NEW title: "NDT ERP Implementation 2026 — Live in 90 Days, $18K/yr"

8. `/ndt-erp-integration-matrix` (src/pages/NdtErpIntegrationMatrix.tsx)
   - OLD title: "NDT ERP Integration Matrix 2026: SAP, Oracle, Maximo"
   - NEW title: "NDT ERP Integrations 2026 — 10 Systems Mapped, $18K/yr"

9. `/erp-modules` (src/pages/ErpModulesHub.tsx)
   - OLD title: "ERP Modules for Inspection Companies | Atlantis NDT ERP"
   - NEW title: "11 NDT ERP Modules — $18K/yr Flat, All Apps Included"

10. `/erp-industries` (src/pages/ErpIndustriesHub.tsx)
    - OLD title: "ERP Software for Inspection & Service Companies — by Industry | Atlantis NDT"
    - NEW title: "ERP for Inspection Companies — 12 Industries, $18K/yr"

11. `/erp-compare` (src/pages/ErpCompareHub.tsx)
    - OLD title: "Atlantis NDT ERP vs Maximo, SAP, Meridium & 7 More — Honest Comparisons 2026"
    - NEW title: "NDT ERP vs Maximo/SAP/Meridium 2026 — $18K vs $2M+"

12. `/erp-implementation-cost-calculator` (src/pages/ErpImplementationCostCalculator.tsx)
    - OLD title: "NDT ERP Implementation Cost Calculator [2026]: Atlantis, SAP, Oracle, Maximo TCO"
    - NEW title: "NDT ERP Cost Calculator 2026 — Atlantis $18K vs SAP $2M+"

## DIGITAL TWIN (8 pages)

13. `/digital-twins` (src/pages/DigitalTwins.tsx) — 688 imp, 0.7% CTR
    - OLD title: "Digital Twin NDT Software for Oil & Gas, Aerospace & Power Assets | Atlantis NDT"
    - NEW title: "Digital Twin Software for NDT 2026 — UT/PAUT in 3D, API 579"

14. `/digital-twin-roi-calculator` (src/pages/DigitalTwinRoiCalculator.tsx)
    - OLD title: "Digital Twin ROI Calculator 2026: Free 8-Input NDT Tool"
    - NEW title: "Digital Twin ROI Calculator 2026 — Free, See Payback in Months"

15. `/digital-twin-vendor-comparison` (src/pages/DigitalTwinVendorComparison.tsx)
    - OLD title: "Digital Twin Platform Comparison 2026: 6 NDT Vendors Rated"
    - NEW title: "Best Digital Twin Platforms 2026 — 6 NDT Vendors Compared"

16. `/digital-twins-ndt-guide-2026` (src/pages/DigitalTwinsNdtGuide2026.tsx)
    - OLD title: "Digital Twin NDT Guide 2026: 5-Stage Maturity Model"
    - NEW title: "Digital Twin NDT Guide 2026 — 5-Stage Model, 6 Vendors"

17. `/digital-twin-reporting` (src/pages/digital-twin-reporting.tsx)
    - OLD title: "Digital Twin NDT Reporting Software | 3D Asset Inspection Visualization | Atlantis NDT"
    - NEW title: "Digital Twin NDT Reporting 2026 — UT/PAUT in 3D, API 510/570/653"

18. `/digital-twin-vs-3d-model-ndt` (src/pages/DigitalTwinVs3dModel.tsx)
    - OLD title: "Digital Twin vs 3D Model in NDT: 13-Point 2026 Comparison"
    - NEW title: "Digital Twin vs 3D Model 2026 — 13-Point NDT Comparison"

19. `/digital-twin-readiness-quiz` (src/pages/DigitalTwinReadinessQuiz.tsx)
    - OLD title: "Digital Twin Readiness Quiz 2026: 10-Question Score (Free)"
    - NEW title: "Digital Twin Readiness Quiz 2026 — Free 10-Question NDT Score"

20. `/digital-twin-api-510-570-580-mapping` (src/pages/DigitalTwinApiMapping.tsx)
    - OLD title: "Digital Twin API 510/570/580 Mapping 2026: 5 Codes"
    - NEW title: "Digital Twin API 510/570/580/579 Mapping 2026 — 5 Codes"

## CERTIFICATION (4 pages — 8k+ imp/each)

21. `/asnt-certification` (src/pages/asnt-certification.tsx)
    - OLD title: "ASNT Certification 2026 — SNT-TC-1A, ACCP, Level I/II/III"
    - NEW title: "ASNT Certification 2026 — $280 Fees, 91% Pass, $150K+ Salary"

22. `/api-510-certification` (src/pages/api-510-certification.tsx)
    - OLD title: "API 510 Certification 2026 — Requirements, Cost, Pass Rate"
    - NEW title: "API 510 Certification 2026 — $730 Exam, 84% Pass, 5-Day Prep"

23. `/api-570-certification` (src/pages/api-570-certification.tsx)
    - OLD title: "API 570 Certification 2026: Cost, Schedule, Pass Rate"
    - NEW title: "API 570 Certification 2026 — $730 Exam, 82% Pass, 5-Day Prep"

24. `/api-653-certification` (src/pages/api-653-certification.tsx)
    - OLD title: "API 653 Tank Inspector Certification 2026 — Cost, Pass Rate"
    - NEW title: "API 653 Tank Inspector 2026 — $730 Exam, 85% Pass, 5-Day Prep"

## HIGH-VOLUME BLOG POSTS (6 posts)

25. `/blog/ndt-salary-guide-2026-global` (src/pages/blog/ndt-salary-guide-2026-global.tsx) — 13,328 imp
    - OLD title: "NDT Salary 2026: Level I–III Pay by Region & Method"
    - NEW title: "NDT Salary 2026 — Level I $45K, II $65K, III $130K+ (Global)"

26. `/blog/ultimate-guide-ndt-digital-twins-asset-integrity-2025` (src/data/blogs.json, id 13)
    - OLD title: "[2025 Edition] Digital Twins + NDT = Asset Integrity Mastery"
    - NEW title: "NDT Digital Twins 2026 — Ultimate Asset Integrity Guide"

27. `/blog/best-ndt-reporting-software-oil-gas-digital-twin` (src/data/blogs.json, id 17)
    - OLD title: "Best NDT Reporting Software for Oil & Gas — Digital Twin, Asset Integrity & RBI Built-in"
    - NEW title: "Best NDT Reporting Software 2026 — Digital Twin & RBI Built-in"

28. `/blog/digital-twins-oil-gas` (src/pages/digital-twins-oil-gas.tsx)
    - OLD title: "Digital Twins for Oil & Gas: How Refineries Save $2M+ Per Turnaround [2026]"
    - NEW title: "Digital Twins for Oil & Gas 2026 — Save $2M+ Per Turnaround"

29. `/blog/digital-twin-roadmap-oil-gas-companies-asset-integrity` (src/data/blogs.json, id 14)
    - OLD title: "Digital Twin Roadmap for Oil & Gas: 5-Phase Implementation Guide"
    - NEW title: "Digital Twin Roadmap for Oil & Gas 2026 — 6-Stage Plan"

30. `/blog/iso-9712-vs-asnt-snt-tc-1a-certification-comparison` (src/data/blogs.json, id 91) — 1,457 imp, 2.1% CTR
    - OLD title: "ISO 9712 vs ASNT SNT-TC-1A: Certification Comparison [2026]"
    - NEW title: "ISO 9712 vs ASNT SNT-TC-1A 2026 — Which Cert for +30% Salary?"
