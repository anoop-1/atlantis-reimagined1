#!/usr/bin/env node
/**
 * Day-7 expansion B: inject TableOfContents + RelatedGuidesBlock on
 * 17 DT use-case pages + 10 DT competitor compare pages.
 * Idempotent. Insert TOC before <Breadcrumbs />; RelatedGuidesBlock before
 * <ContactDetails />.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const USECASES = join(ROOT, 'src', 'pages', 'digital-twins-usecases');
const COMPARE = join(ROOT, 'src', 'pages', 'compare');

// Default 4-item TOC (matches the H2 structure used by use-case + compare templates)
const TOC_USECASE = [
  { id: 'overview', label: 'Use Case Overview' },
  { id: 'integrations', label: 'Integrations & Architecture' },
  { id: 'roi', label: 'ROI & Outcomes' },
  { id: 'faq', label: 'FAQ' },
];
const TOC_COMPARE = [
  { id: 'overview', label: 'Comparison Overview' },
  { id: 'matrix', label: 'Feature Matrix' },
  { id: 'verdict', label: 'When Each Wins' },
  { id: 'faq', label: 'FAQ' },
];

// Cross-segment related-guide cards reused for all DT pages
const RELATED_DT = [
  { title: "Atlantis Digital Twin Platform", href: "/digital-twins", description: "Atlantis DT platform hub", icon: "dt" },
  { title: "Digital Twin ROI Calculator", href: "/digital-twin-roi-calculator", description: "Worked examples", icon: "dt" },
  { title: "Digital Twin Readiness Quiz", href: "/digital-twin-readiness-quiz", description: "Maturity assessment", icon: "dt" },
  { title: "ASNT Level III Consulting", href: "/consulting/asnt-level-iii-consulting-services", description: "Outsourced Level III of record", icon: "consulting" },
  { title: "Atlantis NDT ERP Hub", href: "/erp", description: "Affordable Odoo-based ERP", icon: "erp" },
  { title: "ASNT Certification Path", href: "/asnt-certification", description: "Level I/II/III prep", icon: "cert" },
];

function findLastComponentsImport(src) {
  const re = /import[^\n]+from\s+["']@\/components\/[^"']+["'];?[\r\n]+/g;
  let last = null, m;
  while ((m = re.exec(src)) !== null) last = m;
  return last;
}

function injectImports(src, names) {
  const last = findLastComponentsImport(src);
  if (!last) return null;
  const importEnd = last.index + last[0].length;
  const toAdd = names
    .filter(n => !src.includes(`@/components/${n}`) && !src.includes(`from "@/components/${n}"`))
    .map(n => `import ${n} from "@/components/${n}";\n`)
    .join('');
  return src.slice(0, importEnd) + toAdd + src.slice(importEnd);
}

function injectTocBeforeBreadcrumbs(src, items) {
  if (src.includes('<TableOfContents')) return null;
  const tocItems = items.map(i => `{ id: "${i.id}", label: "${i.label}" }`).join(', ');
  const block = `        <TableOfContents items={[${tocItems}]} />\n`;
  if (/<Breadcrumbs\s/.test(src)) {
    return src.replace(/(<Breadcrumbs\s)/, block + '        $1');
  }
  return null;
}

function injectRgBeforeContactDetails(src, links) {
  if (src.includes('<RelatedGuidesBlock')) return null;
  const linksStr = JSON.stringify(links, null, 2);
  const block = `        <RelatedGuidesBlock links={${linksStr}} />\n\n        `;
  if (/(\s*)<ContactDetails\s*\/>/.test(src)) {
    return src.replace(/(\s*)<ContactDetails\s*\/>/, '\n' + block + '<ContactDetails />');
  }
  return null;
}

function processDir(dirPath, tocItems) {
  if (!existsSync(dirPath)) return { patched: 0, skipped: 0, failures: [] };
  const files = readdirSync(dirPath).filter(f => f.endsWith('.tsx'));
  let patched = 0;
  let skipped = 0;
  const failures = [];
  for (const f of files) {
    const p = join(dirPath, f);
    let src = readFileSync(p, 'utf-8');
    const originalHadBoth = src.includes('<TableOfContents') && src.includes('<RelatedGuidesBlock');
    if (originalHadBoth) { skipped++; continue; }

    // Add imports
    const withImports = injectImports(src, ['TableOfContents', 'RelatedGuidesBlock']);
    if (!withImports) { failures.push({ file: f, err: 'no @/components import' }); continue; }
    src = withImports;

    // Inject TOC
    const withToc = injectTocBeforeBreadcrumbs(src, tocItems);
    if (withToc) src = withToc;

    // Inject RG
    const withRg = injectRgBeforeContactDetails(src, RELATED_DT);
    if (withRg) src = withRg;

    if (!withToc && !withRg) { failures.push({ file: f, err: 'no anchor' }); continue; }

    writeFileSync(p, src, 'utf-8');
    patched++;
    console.log(`patched: ${f}`);
  }
  return { patched, skipped, failures };
}

console.log('=== DT use-case pages ===');
const r1 = processDir(USECASES, TOC_USECASE);
console.log(`Done. ${r1.patched} patched, ${r1.skipped} skipped.`);
if (r1.failures.length) console.log('Failures:', JSON.stringify(r1.failures, null, 2));

console.log('\n=== Atlantis DT competitor compare pages ===');
const r2 = processDir(COMPARE, TOC_COMPARE);
console.log(`Done. ${r2.patched} patched, ${r2.skipped} skipped.`);
if (r2.failures.length) console.log('Failures:', JSON.stringify(r2.failures, null, 2));

console.log(`\nTotal: ${r1.patched + r2.patched} pages enhanced with TOC + RelatedGuidesBlock.`);
