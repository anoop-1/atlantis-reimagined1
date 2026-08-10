#!/usr/bin/env node
/**
 * Atlantis pricing sweep — round 2, 2026-08-09.
 *
 * Round 1 fixed SERP overrides + per-student meta. Round 2 covers the deeper
 * layers round 1 exposed:
 *   4. Schema.org Offer blocks carrying a real Atlantis price
 *   5. The corporate-training shared table + typed data contract (15 pages ×
 *      4 tiers = 60 rendered per-head price ranges, also fed into Offers)
 *   6. Remaining Atlantis ERP annual price prose in the London ERP blog
 *   7. The latent SEOHead Course-price code path (neutralised so it can never
 *      emit a price even if a future caller passes one)
 *
 * Run:  node scripts/pricing-sweep-round2-2026-08-09.mjs [--apply]
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const APPLY = process.argv.includes('--apply');

const log = [];
let count = 0;

/** Several files in this repo are CRLF. Try LF first, then the CRLF variant. */
function edit(rel, find, repl, note) {
  const abs = join(ROOT, rel);
  if (!existsSync(abs)) { log.push(`  MISSING  ${rel}`); return; }
  const src = readFileSync(abs, 'utf8');
  const crlf = (s) => s.replace(/\r?\n/g, '\r\n');
  let f = find, r = repl;
  if (src.split(f).length - 1 === 0 && src.split(crlf(find)).length - 1 > 0) {
    f = crlf(find); r = crlf(repl);
  }
  const n = src.split(f).length - 1;
  if (n === 0) { log.push(`  not found  ${rel} — ${note}`); return; }
  log.push(`  ${APPLY ? 'FIXED' : 'would fix'} x${n}  ${rel} — ${note}`);
  count += n;
  if (APPLY) writeFileSync(abs, src.split(f).join(r));
}

function editRe(rel, re, repl, note) {
  const abs = join(ROOT, rel);
  if (!existsSync(abs)) { log.push(`  MISSING  ${rel}`); return; }
  const src = readFileSync(abs, 'utf8');
  const m = src.match(re);
  if (!m) { log.push(`  not found  ${rel} — ${note}`); return; }
  log.push(`  ${APPLY ? 'FIXED' : 'would fix'} x${m.length}  ${rel} — ${note}`);
  count += m.length;
  if (APPLY) writeFileSync(abs, src.replace(re, repl));
}

// ── 4. Schema.org Offer blocks with a real Atlantis price ──────────────────
for (const f of ['src/pages/NdtErpImplementationTimeline.tsx', 'src/pages/NdtErpIntegrationMatrix.tsx']) {
  edit(f,
    "offers: { '@type': 'Offer', price: '15000', priceCurrency: 'USD' },",
    "offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },",
    'real $15,000 Atlantis price in Offer schema');
}
edit('src/pages/NdtErpRoiCalculator.tsx',
  "offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },",
  "offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },",
  'price key in Offer schema (free tool)');

edit('src/components/ERPSoftwareCityPage.tsx',
  `    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "Contact for pricing",
      url: canonical
    }`,
  `    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: canonical
    }`,
  'price/priceCurrency keys in Offer');

edit('src/components/ReportingLocationPage.tsx',
  `        offers: {
          "@type": "Offer",
          price: "Contact for pricing",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock"
        },`,
  `        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock"
        },`,
  'price/priceCurrency keys in Offer');

// ── 5. Corporate-training per-head price table (template + schema + data) ──
edit('src/pages/corporate-training/_VerticalTemplate.tsx',
  `      "offers": config.pricing.map(p => ({
         "@type": "Offer",
         "name": \`\${p.headcount} cohort\`,
         "description": \`\${p.perHead}. \${p.notes}\`,
         "priceCurrency": "USD",
      })),`,
  `      "offers": config.pricing.map(p => ({
         "@type": "Offer",
         "name": \`\${p.headcount} cohort\`,
         "description": p.notes,
         "availability": "https://schema.org/InStock",
      })),`,
  'per-head price fed into Offer schema');

edit('src/pages/corporate-training/_VerticalTemplate.tsx',
  `                           <th className="px-4 py-3">Per-Head Indicative Price</th>`,
  `                           <th className="px-4 py-3">Cohort Delivery Model</th>`,
  'price column header');

edit('src/pages/corporate-training/_VerticalTemplate.tsx',
  `   perHead: string;      // e.g. "$1,250 per head"`,
  `   perHead: string;      // cohort delivery model — NEVER a price (CLAUDE.md §18)`,
  'PricingTier type contract comment');

// Replace every "$X–$Y per head" value with a qualitative delivery model.
const CT_DIR = join(ROOT, 'src/pages/corporate-training');
if (existsSync(CT_DIR)) {
  for (const f of readdirSync(CT_DIR).filter((x) => x.endsWith('.tsx') && x !== '_VerticalTemplate.tsx')) {
    editRe(`src/pages/corporate-training/${f}`,
      // Covers both plain "$X–$Y per head" and the 100+ tier's
      // "POA — typically $X–$Y per head" form.
      /perHead: "[^"]*\$[0-9][^"]*"/g,
      'perHead: "Quote on request"',
      'per-head price values');
  }
}

// ── 6. Remaining Atlantis ERP annual price prose (London ERP blog) ─────────
const LON = 'src/pages/blog/erp-software-london-affordable-uk-2026.tsx';
edit(LON,
  'Atlantis NDT ERP at regional pricing (~£14,500/year).',
  'Atlantis NDT ERP, positioned for this tier (quote on request).',
  'Atlantis ERP annual price in FAQ answer');
edit(LON,
  'Atlantis NDT ERP at £14,500/year adds the inspection-and-asset-integrity modules',
  'Atlantis NDT ERP adds the inspection-and-asset-integrity modules',
  'Atlantis ERP annual price in body prose');
edit(LON,
  'any UK SME needing real ERP without 6-figure cost. Flat £14,500/year regardless of user count.',
  'any UK SME needing real ERP without 6-figure cost. Flat annual subscription regardless of user count — quote on request.',
  'Atlantis ERP annual price in tier list');
edit(LON,
  'See Pricing — Flat £14,500/year (USD affordable, accessible)',
  'Affordable, Accessible, Fully Customizable — Quote on Request',
  'Atlantis ERP price in an H2 heading');

// ── 7. Neutralise the latent SEOHead Course-price emitter ─────────────────
edit('src/components/SEOHead.tsx',
  `      if (course.price && course.priceCurrency) {
        coursePayload.offers = {
          "@type": "Offer",
          "price": course.price,
          "priceCurrency": course.priceCurrency,
          "availability": "https://schema.org/InStock",
          "url": finalCanonical,
        };
      }`,
  `      // CLAUDE.md §18 — never emit price/priceCurrency in an Offer. The
      // course.price/priceCurrency props are deliberately ignored so that a
      // future caller passing them cannot reintroduce a pricing violation.
      coursePayload.offers = {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "url": finalCanonical,
      };`,
  'latent Course-price schema emitter');

console.log(`\n=== Atlantis pricing sweep round 2 — ${APPLY ? 'APPLY' : 'DRY RUN'} ===`);
log.forEach((l) => console.log(l));
console.log(`\n${count} replacement(s).`);
if (!APPLY) console.log('Re-run with --apply to write.');
