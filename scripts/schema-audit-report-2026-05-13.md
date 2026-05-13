# Schema Audit Report — 2026-05-13

**Scope:** dist/erp-modules, dist/erp-industries, dist/erp, dist/compare, dist/case-studies, dist/ndt-erp-*, dist/resources

**Files audited:** 679
**Files with issues:** 679
**Total issues:** 679

## Severity Summary

| Severity | Count |
|---|---|
| critical | 0 |
| warning | 679 |
| info | 0 |

## Rules Checked

1. No duplicate aggregateRating on the same `@id` entity
2. No `review[]` attached to Organization (regression check for commit 961d7991)
3. No duplicate FAQPage on the same URL
4. Product/SoftwareApplication has aggregateRating or review[] (not neither)
5. BreadcrumbList present on non-root pages
6. Open Graph + Twitter Card meta tags present
7. Canonical link present and matches the URL path
8. Hreflang values restricted to English variants

## Important Context

This audit reads the **static prerendered HTML only**. JSON-LD that is injected at runtime by React (via `react-helmet-async` or similar) is NOT visible here. Google's rendering pipeline does execute JavaScript, so client-injected schema can still be picked up — but the safest pattern is to inline page-specific JSON-LD (Product, SoftwareApplication, BreadcrumbList, FAQPage) into the prerender output. If only `Organization` + `WebSite` schema show up in the static HTML, the page-specific schema is being added client-side and will work for Google but not for less-capable crawlers (Bing, social-media bots, AI crawlers).

## Issues — Grouped by Pattern

| Pattern | Severity | Count | Example file(s) | Fix |
|---|---|---|---|---|
| missing BreadcrumbList schema on non-root page | warning | 679 | dist/case-studies/adnoc-offshore-pipeline-inspection/index.html<br>dist/case-studies/aerospace-ndt-qualification-program/index.html<br>dist/case-studies/digital-twin-refinery-implementation/index.html | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |

## Issues — Full Detail (first 200)

| File | Issue | Severity | Recommended Fix |
|---|---|---|---|
| dist/case-studies/adnoc-offshore-pipeline-inspection/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/case-studies/aerospace-ndt-qualification-program/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/case-studies/digital-twin-refinery-implementation/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/case-studies/gulf-coast-refinery-ndt-program/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/case-studies/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/case-studies/india-refinery-training-program/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/case-studies/lng-terminal-cryogenic-inspection/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/case-studies/petrochemical-turnaround-ndt/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/case-studies/pipeline-fitness-for-service/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/case-studies/power-plant-boiler-inspection/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/case-studies/storage-tank-api-653-program/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/compare/api-510-vs-api-570/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/compare/asnt-vs-pcn/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/compare/atlantis-dt-vs-aspen-mtell/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/compare/atlantis-dt-vs-aveva-pi-system/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/compare/atlantis-dt-vs-bentley-itwin/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/compare/atlantis-dt-vs-ge-predix/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/compare/atlantis-dt-vs-hexagon-eam/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/compare/atlantis-dt-vs-ibm-maximo/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/compare/atlantis-dt-vs-osisoft-pi/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/compare/atlantis-dt-vs-siemens-mindsphere/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/compare/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/compare/ndt-consulting-vs-in-house/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/compare/vs-aspentech-mtell/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/compare/vs-bentley-assetwise/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/compare/vs-etq-reliance/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/compare/vs-ge-vernova-apm/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/compare/vs-maximo/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/compare/vs-meridium/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/compare/vs-netsuite/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/compare/vs-procore/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/compare/vs-quickbooks/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/compare/vs-sap-pm/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/aerospace-quality-control/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/aerospace-quality-control-aberdeen/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/aerospace-quality-control-abu-dhabi/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/aerospace-quality-control-calgary/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/aerospace-quality-control-doha/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/aerospace-quality-control-dubai/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/aerospace-quality-control-houston/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/aerospace-quality-control-hyderabad/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/aerospace-quality-control-jakarta/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/aerospace-quality-control-kuala-lumpur/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/aerospace-quality-control-lagos/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/aerospace-quality-control-london/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/aerospace-quality-control-mumbai/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/aerospace-quality-control-perth/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/aerospace-quality-control-saudi-arabia/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/aerospace-quality-control-singapore/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/calibration-laboratories/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/calibration-laboratories-aberdeen/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/calibration-laboratories-abu-dhabi/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/calibration-laboratories-calgary/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/calibration-laboratories-doha/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/calibration-laboratories-dubai/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/calibration-laboratories-houston/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/calibration-laboratories-hyderabad/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/calibration-laboratories-jakarta/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/calibration-laboratories-kuala-lumpur/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/calibration-laboratories-lagos/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/calibration-laboratories-london/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/calibration-laboratories-mumbai/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/calibration-laboratories-perth/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/calibration-laboratories-saudi-arabia/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/calibration-laboratories-singapore/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/construction-quality-assurance/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/construction-quality-assurance-aberdeen/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/construction-quality-assurance-abu-dhabi/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/construction-quality-assurance-calgary/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/construction-quality-assurance-doha/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/construction-quality-assurance-dubai/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/construction-quality-assurance-houston/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/construction-quality-assurance-hyderabad/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/construction-quality-assurance-jakarta/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/construction-quality-assurance-kuala-lumpur/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/construction-quality-assurance-lagos/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/construction-quality-assurance-london/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/construction-quality-assurance-mumbai/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/construction-quality-assurance-perth/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/construction-quality-assurance-saudi-arabia/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/construction-quality-assurance-singapore/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/environmental-testing-labs/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/environmental-testing-labs-aberdeen/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/environmental-testing-labs-abu-dhabi/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/environmental-testing-labs-calgary/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/environmental-testing-labs-doha/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/environmental-testing-labs-dubai/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/environmental-testing-labs-houston/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/environmental-testing-labs-hyderabad/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/environmental-testing-labs-jakarta/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/environmental-testing-labs-kuala-lumpur/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/environmental-testing-labs-lagos/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/environmental-testing-labs-london/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/environmental-testing-labs-mumbai/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/environmental-testing-labs-perth/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/environmental-testing-labs-saudi-arabia/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/environmental-testing-labs-singapore/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/geotechnical-engineering/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/geotechnical-engineering-aberdeen/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/geotechnical-engineering-abu-dhabi/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/geotechnical-engineering-calgary/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/geotechnical-engineering-doha/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/geotechnical-engineering-dubai/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/geotechnical-engineering-houston/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/geotechnical-engineering-hyderabad/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/geotechnical-engineering-jakarta/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/geotechnical-engineering-kuala-lumpur/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/geotechnical-engineering-lagos/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/geotechnical-engineering-london/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/geotechnical-engineering-mumbai/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/geotechnical-engineering-perth/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/geotechnical-engineering-saudi-arabia/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/geotechnical-engineering-singapore/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/industrial-coatings-inspection/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/industrial-coatings-inspection-aberdeen/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/industrial-coatings-inspection-abu-dhabi/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/industrial-coatings-inspection-calgary/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/industrial-coatings-inspection-doha/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/industrial-coatings-inspection-dubai/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/industrial-coatings-inspection-houston/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/industrial-coatings-inspection-hyderabad/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/industrial-coatings-inspection-jakarta/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/industrial-coatings-inspection-kuala-lumpur/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/industrial-coatings-inspection-lagos/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/industrial-coatings-inspection-london/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/industrial-coatings-inspection-mumbai/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/industrial-coatings-inspection-perth/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/industrial-coatings-inspection-saudi-arabia/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/industrial-coatings-inspection-singapore/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/marine-survey-companies/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/marine-survey-companies-aberdeen/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/marine-survey-companies-abu-dhabi/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/marine-survey-companies-calgary/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/marine-survey-companies-doha/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/marine-survey-companies-dubai/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/marine-survey-companies-houston/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/marine-survey-companies-hyderabad/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/marine-survey-companies-jakarta/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/marine-survey-companies-kuala-lumpur/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/marine-survey-companies-lagos/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/marine-survey-companies-london/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/marine-survey-companies-mumbai/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/marine-survey-companies-perth/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/marine-survey-companies-saudi-arabia/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/marine-survey-companies-singapore/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/metrology-laboratories/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/metrology-laboratories-aberdeen/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/metrology-laboratories-abu-dhabi/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/metrology-laboratories-calgary/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/metrology-laboratories-doha/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/metrology-laboratories-dubai/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/metrology-laboratories-houston/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/metrology-laboratories-hyderabad/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/metrology-laboratories-jakarta/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/metrology-laboratories-kuala-lumpur/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/metrology-laboratories-lagos/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/metrology-laboratories-london/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/metrology-laboratories-mumbai/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/metrology-laboratories-perth/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/metrology-laboratories-saudi-arabia/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/metrology-laboratories-singapore/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/ndt-inspection-companies/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/ndt-inspection-companies-aberdeen/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/ndt-inspection-companies-abu-dhabi/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/ndt-inspection-companies-calgary/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/ndt-inspection-companies-doha/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/ndt-inspection-companies-dubai/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/ndt-inspection-companies-houston/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/ndt-inspection-companies-hyderabad/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/ndt-inspection-companies-jakarta/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/ndt-inspection-companies-kuala-lumpur/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/ndt-inspection-companies-lagos/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/ndt-inspection-companies-london/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/ndt-inspection-companies-mumbai/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/ndt-inspection-companies-perth/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/ndt-inspection-companies-saudi-arabia/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/ndt-inspection-companies-singapore/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/oilfield-services/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/oilfield-services-aberdeen/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/oilfield-services-abu-dhabi/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/oilfield-services-calgary/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/oilfield-services-doha/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/oilfield-services-dubai/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/oilfield-services-houston/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/oilfield-services-hyderabad/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/oilfield-services-jakarta/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/oilfield-services-kuala-lumpur/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/oilfield-services-lagos/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/oilfield-services-london/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/oilfield-services-mumbai/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/oilfield-services-perth/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/oilfield-services-saudi-arabia/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/oilfield-services-singapore/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/pipeline-integrity-services/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/pipeline-integrity-services-aberdeen/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/pipeline-integrity-services-abu-dhabi/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/pipeline-integrity-services-calgary/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |
| dist/erp-industries/pipeline-integrity-services-doha/index.html | missing BreadcrumbList schema on non-root page | warning | Inject a BreadcrumbList JSON-LD block listing the path from home → section → page. |

_… 479 more rows omitted from inline table. Re-run with output redirection for full list._
