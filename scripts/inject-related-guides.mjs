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
