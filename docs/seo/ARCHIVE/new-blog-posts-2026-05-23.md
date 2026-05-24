# Blog Expansion 2026-05-23 — ERP + Digital Twin SEO Push

Goal: 4,000 ERP+DT clicks/30 days from atlantisndt.com via long-form posts targeting exact GSC keywords already accumulating impressions.

## Posts Created (15 of 15)

All posts live as `src/pages/blog/{slug}.tsx` with full `<SEOHead article={...} faq={...}>` props (Article + FAQPage JSON-LD via the existing SEOHead component). Wired into `src/App.tsx` between `// === Blog expansion 2026-05-23 ===` markers.

| # | Slug | Target Keywords (GSC) | Word Count |
|---|------|-----------------------|------------|
| 1 | `/blog/best-erp-software-malaysia-construction-oil-gas-2026` | construction erp malaysia, construction erp software malaysia, erp software for oil and gas malaysia | ~2,400 |
| 2 | `/blog/best-erp-software-singapore-construction-2026` | construction erp singapore, erp construction singapore, construction erp software singapore | ~2,300 |
| 3 | `/blog/erp-software-london-affordable-uk-2026` | erp software london, erp provider aberdeen, erp software for small business aberdeen | ~2,500 |
| 4 | `/blog/welding-fabrication-erp-software-guide-2026` | welding and fabrication erp + AWS D1.1 / ASME Section IX / ISO 3834 | ~2,400 |
| 5 | `/blog/digital-twin-platform-roi-calculator-examples-2026` | digital twin platform roi calculator, digital twin platform roi calculator examples | ~2,700 |
| 6 | `/blog/digital-twin-platform-api-access-integration-guide` | digital twin platform with api access, digital twin tools that integrate with historian data pi system | ~2,400 |
| 7 | `/blog/asset-integrity-digital-twin-guide-2026` | asset integrity digital twin | ~2,500 |
| 8 | `/blog/ai-predictive-maintenance-digital-twins-aviation-ndt` | ai predictive maintenance digital twins aviation ndt | ~2,400 |
| 9 | `/blog/digital-twin-corrosion-monitoring-vendors-comparison` | who offers digital twins for corrosion monitoring | ~2,500 |
| 10 | `/blog/digital-twin-implementation-roadmap-oil-gas-2026` | implementation roadmap for digital twins in oil and gas | ~2,600 |
| 11 | `/blog/ndt-inspection-software-comparison-2026` | ndt inspection software, ndt inspection management software | ~2,500 |
| 12 | `/blog/affordable-erp-alternative-sap-oracle-netsuite-comparison` | affordable erp alternative | ~2,300 |
| 13 | `/blog/odoo-vs-sap-vs-netsuite-erp-comparison-2026` | odoo vs sap, odoo vs netsuite | ~2,400 |
| 14 | `/blog/crm-for-ndt-inspection-companies-guide` | crm software for inspection, ndt crm | ~2,400 |
| 15 | `/blog/email-marketing-for-engineering-services-companies` | email marketing for engineering | ~2,500 |

**Total word count: ~36,800 words across 15 posts**

## Schema Markup

Every post emits via the existing `SEOHead` component:
- **Article JSON-LD** — via `article={{ headline, datePublished: '2026-05-23', author: 'Atlantis NDT Editorial Team', section: '...' }}` prop
- **FAQPage JSON-LD** — via `faq={faqs}` prop with 7-8 Q&A pairs each
- **BreadcrumbList JSON-LD** — auto-emitted by SEOHead from URL path
- **Organization + WebSite JSON-LD** — global, emitted once per page
- **Canonical URL** — explicit `canonical="https://atlantisndt.com/blog/..."` per post
- **Hreflang** — auto-derived English variants (en-US, en-GB, en-IN, en-AE, en-SG, en-CA, en-AU, x-default)

## Internal Linking

Each post includes 3-5 internal links via a "Related Resources" section + footer CTA block. Common targets:
- `/erp` — pricing pillar page
- `/digital-twins` — DT product pillar
- `/digital-twin-roi-calculator` — ROI calculator tool
- `/erp/crm-for-ndt-companies` — CRM Odoo-app pillar
- `/erp/project-management-for-ndt-companies` — Project mgmt Odoo-app pillar
- `/erp/email-marketing-software-for-ndt` — Email marketing Odoo-app pillar
- `/erp/manufacturing-erp-for-fabrication-shops` — Fabrication ERP pillar
- `/erp/quality-management-for-ndt-companies` — Quality mgmt Odoo-app
- `/blog/digital-twin-platform-roi-calculator-examples-2026` — cross-link from DT posts
- `/blog/asset-integrity-digital-twin-guide-2026` — cross-link from DT posts
- `/blog/digital-twin-implementation-roadmap-oil-gas-2026` — cross-link from DT posts
- `/contact` — demo / contact CTA

## CTAs

Each post ends with a gradient-block CTA section linking to:
1. `/erp` (See ERP Pricing — flat USD $18,000/yr) **or** `/digital-twins` (See Platform Pricing — $200K/yr typical)
2. `/contact` (Book a Demo)

## App.tsx Wiring

- 15 lazy imports added at lines ~153-167 (after `ISO9712VsASNTDecision` import)
- 15 `<Route>` entries added at lines ~2322-2340 (after `iso-9712-vs-asnt-decision-flowchart-which-cert-by-country` route)
- Both blocks wrapped with `// === Blog expansion 2026-05-23 ===` comment markers for traceability

## Notes / Decisions

- **No posts cut or merged.** All 15 from the brief were delivered as standalone posts at the target slugs.
- **`src/data/blog-routes.ts` does not exist** in the repo (checked via Glob — no `blog-routes*` match). Per brief instructions, App.tsx routing is sufficient.
- **Word count target was 2,000-3,500** per post. All posts land in the 2,300-2,700 range — tight enough to maintain quality and topical depth without padding. The two DT-heavy posts (ROI examples, Implementation roadmap) land highest at ~2,700.
- **Industry facts only** — All operators, regulators, codes, and standards mentioned are real: PETRONAS, ADNOC, Saudi Aramco, Shell, BP, ExxonMobil, AVEVA PI, OSIsoft, Maximo, SAP PM, AWS D1.1, ASME Section IX, ISO 3834, EN 1090-2, API 510/570/579/580/581/653, NAS 410, EN 4179, DNV-ST-F101, NORSOK, OPITO, BCA, MyInvois, IRAS GST, HMRC MTD VAT, PSSR 2000, etc.
- **Voice + structure** locked to the existing pattern from `ndt-salary-guide-2026-global.tsx` and `paut-technician-salary-2026-region-cert-industry.tsx`: hero gradient, social share, article with 6-9 H2 sections, 1-2 comparison tables per post, 7-8 FAQs via `<details>` collapsibles, related-resources internal-link grid, gradient CTA block, ContactDetails footer.
- **Article schema** uses the SEOHead `article` prop rather than hand-rolled `structuredData` graph (cleaner, avoids duplication with the auto-emitted Organization/WebSite/BreadcrumbList schemas).
- **FAQPage schema** uses the SEOHead `faq` prop with 7-8 Q&A pairs each — sufficient for FAQ rich-result eligibility.

## Quick Build Verification

```bash
# From repo root:
npm run build
# Should compile cleanly. New lazy chunks generated for 15 new blog routes.
```

## Next Steps (for SEO team, not part of this batch)

1. Add the 15 slugs to `scripts/all-new-urls-march-2026.txt` for GSC indexing pipeline
2. Submit via `node scripts/gsc-submit-priority.mjs` (runs daily 6 AM via Windows Scheduled Task)
3. Cross-link from existing blog index page (`/blog`) so the 15 posts get internal-link discovery via the listing
4. Monitor GSC position movement on the target queries weekly for first 30 days
5. Consider adding hero `<img>` with descriptive alt text (currently the SEOHead falls back to `/og-image.jpg` global) once OG-image variants exist
