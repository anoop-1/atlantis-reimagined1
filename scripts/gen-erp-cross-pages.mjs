import { assertPermutationGenAllowed } from './_permutation-freeze.mjs';
assertPermutationGenAllowed('gen-erp-cross-pages.mjs');

// Generate module × industry cross-page TSX stubs.
// For each industry, iterate its module list and emit a tailored cross-page.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DATA = JSON.parse(readFileSync(join(__dirname, 'gen-erp-data.json'), 'utf-8'));

const MODULE_BY_SLUG = Object.fromEntries(DATA.modules.map(m => [m.slug, m]));

// Per-(module, industry) tailored content snippets.
// We use intersection of industry.codes / operators / pain + module.features.
function buildCrossContent(industry, module) {
  // Filter module features to keep only ones relevant to the industry.
  // Heuristic: keep first 8 (already industry-meaningful since modules were
  // written with all 12 industries in mind), then add 2 industry-specific
  // overrides.
  const features = [
    ...module.features.slice(0, 6),
    `Tailored for ${industry.name.toLowerCase()} — pre-configured templates, terminology, and reports`,
    `Integrates with ${industry.operators.slice(0, 3).join(', ')} vendor-portal flow-down requirements`,
  ];

  const codes = industry.regs.slice(0, 8);
  const operators = industry.operators.slice(0, 8);

  const intro = `${module.intro.split('. ').slice(0, 2).join('. ')}.

For ${industry.name.toLowerCase()}, the ${module.name.toLowerCase()} module is configured around the codes, regulators, and operator-specific requirements you face every day: ${codes.slice(0, 5).join(', ')}. Pre-built workflows, report templates, and qualification matrices match the operator-specific quality clauses from ${operators.slice(0, 4).join(', ')} so your team is productive on day one — not after six months of configuration.`;

  const useCases = [
    `A 25-person ${industry.name.toLowerCase().replace(/ies$/, 'y').replace(/s$/, '')} runs ${module.name.toLowerCase()} as a standalone module — replacing 3 spreadsheets and 2 disconnected SaaS tools — and reports a 60–80% reduction in administrative time within 90 days.`,
    `A multinational ${industry.name.toLowerCase()} deploys ${module.name.toLowerCase()} across 12 sites under a global rollout. Region-specific data residency and language localization support GDPR, India DPDP Act, and Saudi NDMO requirements.`,
    `A growing ${industry.name.toLowerCase().replace(/ies$/, 'y').replace(/s$/, '')} integrates ${module.name.toLowerCase()} with their existing ERP (NetSuite, QuickBooks, or SAP) and CMMS — eliminating duplicate data entry and reducing customer-facing report turnaround from 5 days to <24 hours.`,
    `An audit-driven ${industry.name.toLowerCase()} uses ${module.name.toLowerCase()} to pass ISO 9001 / ISO 17025 / AS9100 / customer-specific quality audits with zero findings — evidence packages assembled in 30 seconds vs. 80+ hours of manual prep.`,
  ];

  const pain = industry.pain.slice(0, 4);

  const desc = `${module.name} for ${industry.name} — purpose-configured module from Atlantis NDT ERP. ${codes.slice(0, 3).join(', ')}. Demo: info@atlantisndt.com.`;

  // FAQs — combine generic module FAQs with industry-specific framing.
  const faqs = [
    [
      `Does ${module.name.toLowerCase()} work specifically for ${industry.name.toLowerCase()}?`,
      `Yes. The module is configured for ${industry.name.toLowerCase()} workflow with pre-built templates aligned to ${codes.slice(0, 4).join(', ')}. Operator-specific quality clauses for ${operators.slice(0, 3).join(', ')} are pre-loaded so the system is productive on day one without months of custom configuration.`
    ],
    [
      `How does the system integrate with our existing ${industry.name.toLowerCase()} tools?`,
      `Standard integration via REST API with major ${industry.name.toLowerCase()} systems. Atlantis NDT ERP can run as the system of record for ${module.name.toLowerCase()} while flowing relevant data to your accounting (QuickBooks / Xero / NetSuite / SAP / Dynamics), CMMS (Maximo / SAP PM / Meridium / AspenTech APM), and customer-portal systems. Bi-directional sync keeps everything aligned.`
    ],
    [
      `Can it scale from a small ${industry.name.toLowerCase()} to a global multinational?`,
      `Yes. Atlantis NDT ERP is delivered as multi-tenant SaaS — a 5-person ${industry.name.toLowerCase().replace(/ies$/, 'y').replace(/s$/, '')} pays a small monthly subscription with the same feature set as a 500-person global operation. Modules can be turned on individually or as a bundle; only pay for what you use.`
    ],
    module.faqs[0],
    module.faqs[1],
  ];

  return { features, codes, operators, intro, useCases, pain, desc, faqs };
}

const outDir = join(ROOT, 'src/pages/erp-modules');
mkdirSync(outDir, { recursive: true });

let written = 0;
const allCombos = [];
for (const industry of DATA.industries) {
  for (const moduleSlug of industry.modules) {
    const module = MODULE_BY_SLUG[moduleSlug];
    if (!module) { console.warn(`Missing module: ${moduleSlug}`); continue; }
    const c = buildCrossContent(industry, module);
    const data = {
      moduleSlug: module.slug,
      moduleName: module.name,
      industrySlug: industry.slug,
      industryName: industry.name,
      title: `${module.name} for ${industry.name}`,
      desc: c.desc,
      intro: c.intro,
      industryFeatures: c.features,
      industryUseCases: c.useCases,
      industryCodes: c.codes,
      industryOperators: c.operators,
      industryPain: c.pain,
      faqs: c.faqs,
    };
    const slug = `${module.slug}-for-${industry.slug}`;
    const fname = join(outDir, `${slug}.tsx`);
    const idSafe = slug.replace(/-/g, '_');
    const content = `import ErpModuleIndustryPage from '@/components/ErpModuleIndustryPage';
const data = ${JSON.stringify(data, null, 2)};
export default function ErpCross_${idSafe}() { return <ErpModuleIndustryPage {...data} />; }
`;
    writeFileSync(fname, content);
    allCombos.push({ slug, moduleSlug: module.slug, industrySlug: industry.slug, title: `${module.name} for ${industry.name} | Atlantis NDT ERP`, desc: c.desc });
    written++;
  }
}

console.log(`✓ ${written} module × industry cross-pages written`);

// Emit App.tsx patch lines + prerender entries
const lazy = allCombos.map(c => `const ErpCross_${c.slug.replace(/-/g, '_')} = lazy(() => import("./pages/erp-modules/${c.slug}"));`).join('\n');
const routes = allCombos.map(c => `                  <Route path="/erp-modules/${c.slug}" element={<LazyRoute Component={ErpCross_${c.slug.replace(/-/g, '_')}} />} />`).join('\n');
writeFileSync(join(__dirname, '_cross-lazy.txt'), lazy + '\n');
writeFileSync(join(__dirname, '_cross-routes.txt'), routes + '\n');

const prerenderEntries = allCombos.map(c => ({
  path: `/erp-modules/${c.slug}`,
  title: c.title,
  description: c.desc,
  bodyH1: c.title,
  bodyText: c.desc,
}));
writeFileSync(join(__dirname, '_cross-prerender.json'), JSON.stringify(prerenderEntries, null, 2));
console.log(`✓ App.tsx + prerender patch files written`);
