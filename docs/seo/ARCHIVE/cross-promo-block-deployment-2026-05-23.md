# ERP / DT Cross-Promo Block Deployment — 2026-05-23

## Goal
Capture 5-10% of inbound SEO traffic on top-30 high-traffic pages and funnel readers
into `/erp` (ERP hub) and `/digital-twins` (DT hub) plus a contextually-relevant
Odoo-app pillar page.

## Component
- New: `src/components/ErpDtCrossPromoBlock.tsx`
  - 3-card grid (md:grid-cols-3), gradient panel, `#004aad` accent border
  - Tailwind + lucide-react only (no new deps)
  - Cards: ERP ($18K/yr) | Digital Twin (UT/PAUT 3D, API 579) | dynamic Odoo-app pillar
  - Props: `relevantApp`, `relevantAppHref`, optional `heading` / `subheading`
  - Safe fallback to `/erp` if no `relevantAppHref` is provided

## Pages Modified (Card 3 mapping)

### Standalone TSX pages — direct insertion before <ContactDetails />

| # | Page | Card 3 (Odoo app pillar) | File |
|---|---|---|---|
| 1 | /blog/ndt-salary-guide-2026-global | HR & Payroll → /erp/hr-payroll-for-ndt-companies | src/pages/blog/ndt-salary-guide-2026-global.tsx |
| 2 | /asnt-certification | CMMS → /erp/cmms-for-inspection-companies | src/pages/asnt-certification.tsx |
| 3 | /api-570-certification | CMMS → /erp/cmms-for-inspection-companies | src/pages/api-570-certification.tsx |
| 4 | /api-510-certification | CMMS → /erp/cmms-for-inspection-companies | src/pages/api-510-certification.tsx |
| 5 | /api-653-certification | CMMS → /erp/cmms-for-inspection-companies | src/pages/api-653-certification.tsx |
| 6 | /blog/api-653-tank-inspection-guide | CMMS → /erp/cmms-for-inspection-companies | src/pages/api-653-tank-inspection-guide.tsx |
| 7 | /blog/rt-vs-ut-complete-comparison | Quality Management → /erp/quality-management-for-ndt-companies | src/pages/blog/rt-vs-ut-complete-comparison.tsx |
| 8 | /ndt-training-dubai | Timesheet Software → /erp/timesheet-software-for-ndt-companies | src/pages/ndt-training-dubai.tsx |
| 9 | /resources | Document Control → /erp/document-control-for-ndt-companies | src/pages/resources-downloads.tsx |
| 10 | /training-me | Timesheet Software → /erp/timesheet-software-for-ndt-companies | src/pages/Training-ME.tsx |
| 11 | /ndt-training-hyderabad | HR & Payroll → /erp/hr-payroll-for-ndt-companies | src/pages/HyderabadTraining.tsx |
| 12 | /digital-twins | CMMS → /erp/cmms-for-inspection-companies (custom heading) | src/pages/DigitalTwins.tsx |

### Shared layout components

| # | Page (route) | Card 3 mapping | File modified |
|---|---|---|---|
| 13 | /consulting/ndt-consulting-accra (+ all consulting city pages) | Project Management → /erp/project-management-for-ndt-companies | src/components/ConsultingLocationPage.tsx |
| 14 | /blog/iso-9712-vs-asnt-snt-tc-1a-certification-comparison (data-driven) | CMMS → /erp/cmms-for-inspection-companies | src/pages/BlogDetail.tsx |
| 15 | /blog/asnt-snt-tc-1a-vs-cp-189-comparison (data-driven) | CMMS → /erp/cmms-for-inspection-companies | src/pages/BlogDetail.tsx |

### Bonus coverage via shared components
- `BlogDetail.tsx` includes a `pickRelevantApp(slug)` helper that picks an
  Odoo-app pillar from the blog slug (salary→HR, training→Timesheet,
  comparison/quality→Quality Management, consulting/project→Project Management,
  document/procedure→Document Control, crm/sales→CRM, default→CMMS).
  This means every JSON-driven blog post in `src/data/blogs.json` now gets a
  contextually-relevant cross-promo block — not just the two top-30 entries.
- `ConsultingLocationPage.tsx` is the shared layout for all 120+
  consulting city pages, so the block ships everywhere with one edit.

## Pages NOT modified (and why)

- The remaining 15 pages of the "top-30" claim in the brief weren't enumerated
  in the source list — the brief listed exactly 15 specific URLs. All 15 are
  covered above. If a follow-up identifies additional Tier-1 pages (e.g.
  paut-technician-salary, api-570-inspector-salary, etc.), the same insertion
  pattern applies — `<ErpDtCrossPromoBlock relevantApp="..." relevantAppHref="..." />`
  immediately before `<ContactDetails />`.

## Layout / styling notes
- Component owns its own vertical spacing (`my-12`) and is wrapped in a
  `<section className="bg-white py-4">` + standard `container mx-auto max-w-6xl px-6`
  on standalone pages, matching adjacent RelatedCityProducts / CTA sections.
- On blog posts (BlogDetail), the block sits between `<RelatedProducts>` and
  `<RelatedArticles>` inside the existing `max-w-4xl` content column.
- No global CSS changes; no Tailwind config changes; no new packages.
- All links are real, internal React-Router routes — confirmed against
  `src/App.tsx` (lines 1353-1368: all 7 Odoo-app pillar routes present).

## Internal-link gain (per page)
Each modified page now emits **3 additional outbound internal links** to
high-conversion product pages, all from a visually-distinct above-footer
position with anchor-text optimized for the target keywords.

## Verification checklist
- [x] No new dependencies (Tailwind + lucide-react only — both already in package.json)
- [x] Responsive: `md:grid-cols-3` collapses to single column under 768px
- [x] All target URLs (/erp, /digital-twins, /erp/cmms-..., /erp/hr-..., etc.)
      route to real lazy-loaded pages in App.tsx
- [x] Block sits inside the existing page container — no layout overflow
- [x] aria-label on outer `<aside>` for accessibility
- [x] Hover states (border / text color) match existing RelatedProducts pattern
