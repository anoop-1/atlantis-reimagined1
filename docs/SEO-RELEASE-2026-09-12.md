# Regional SEO upgrade — September 12, 2026

Implementation of the audit at `../seo-audit-2026-09-12/Atlantis-SEO-Audit-and-90-Day-Plan-2026-09-12.md`.

The user requested completing the implementation work in the 90-day plan today. Actual post-release search performance, field Core Web Vitals and customer evidence cannot be created in advance. Those acceptance conditions remain separately measurable.

## Release scope

- Build-owned metadata and JSON-LD on direct loads and client navigation. Priority training, software, translated and editorial pages render the published `<main>` content through the existing navigation and enquiry components.
- Visible initial HTML; no CSS rule hiding the editorial content until JavaScript runs.
- Real missing-page behavior by removing the homepage rewrite; preserve existing redirects and API routes. Add a www-to-apex redirect and a custom error document.
- Restore `/compliance` as a navigation hub for existing country/standards guides. Repair links only against actual build output; keep the text of missing destinations without a broken link.
- Reciprocal English/Arabic/Spanish alternates; initial language and direction; consistent Spanish content on the existing São Paulo Spanish URL.
- Final-document canonical-only sitemap membership, no duplicate child membership, no fabricated fresh lastmod dates. Restore self-canonicals for the distinct storage-tank, fillet-weld and butt-weld definitions; retain the remaining intentional donors outside sitemaps.
- Accepted enquiries carry an opaque enquiry ID, service, target region, landing path and form ID into delivery records. Generate the success event once per ID in the browser session. Email-app launches and contact clicks remain engagement events. Actual CRM qualification remains downstream of the delivery handoff.
- Removed manual bundle groups that preloaded the blog and 3D code on text articles.
- Public digital-twin demo evidence describes inspected controls and labels the sample as demo data.
- First content queue: US/India/Gulf training, Abu Dhabi, software buyer workflows, calibration download, salary guide, UT practice questions, official API schedule, B31.3 intent links and Level III consulting scope.

## Validation and current state

Final local build passed: 7,458 built pages; 5,493 canonical sitemap URLs; 89 corrected links and 989 removed dead anchors (text preserved). Full sitemap verification passed with zero failures. All 13 existing strict preflight checks also pass. Mobile calibration and Arabic layouts have no horizontal page overflow. Ten priority direct-load checks and Arabic-to-English client navigation preserve one H1, one schema graph, the expected canonical, title, language and direction. The calibration DOCX is present and the preview returns a real 404 for an unknown URL.

Mocked enquiry contract test passes: invalid types and honeypot rejected; accepted SMTP response returns the same opaque ID; context reaches the delivery record; repeated success calls emit one event; email clicks emit no lead; custom hits omit query values. The test sends no real message.

The repository-wide TypeScript check reports 398 errors across 380 files, with no errors in changed or new modules. A separate source snapshot of the prior commit was checked against the same installed dependencies; the diagnostic comparison is retained in the private audit evidence. A Contact animation prop error was corrected while touching that file. Existing errors must be distinguished from regressions in the release notes.

First mobile Lighthouse baseline: live salary guide performance 61, LCP 8,446 ms, FCP 5,391 ms, TBT 24 ms, CLS 0. Report captured successfully; Lighthouse's Windows temporary-profile cleanup later returned EPERM. Compressed local preview: performance 94, LCP 2,486 ms, FCP 2,411 ms, TBT 40 ms, CLS 0. Preview analytics is disabled, so a separate production comparison is required. This is a lab observation, not the GSC field percentile.

## Commands

```text
npm run build
node scripts/test-enquiry-contract.mjs
npm run seo:verify
node scripts/preflight.mjs --strict
node scripts/serve-seo-preview.mjs
```

Preview: `http://127.0.0.1:4175`. Build post-pass: `scripts/seo-release-2026-09-12.mjs`. Browser parity tests must cover direct loads and navigation into and out of Arabic pages, plus contact forms and downloads. The deployment runbook states that a push to main deploys through Vercel; production release verification and analytics read-back will be recorded in the private audit release report.

## Evidence needed for later acceptance

- An actual accepted enquiry and its received record, then a qualified/closed status joined by enquiry ID. Mock tests do not prove inbox receipt.
- Approved, inspectable product screenshots and customer cases. Existing marketing assertions alone do not establish approval or results. No new customer outcomes are fabricated.
- Search recrawl, a complete comparison window and field CWV updates. Weekly measurement should use Google organic data, comparable weekdays and the frozen pre-change baseline; paid-search changes remain separate.
- External outreach and directory submissions are not part of automated publishing without explicit recipient/message authorization.

## Source checks

- [API official schedules](https://www.api.org/products-and-services/individual-certification-programs/schedules-and-fees), checked September 12, 2026: the old combined windows and year-round claim were wrong and are replaced.
- [ASNT employer-based certification](https://www.asnt.org/standards-publications/blog/employer-based-certification-programs): certification responsibility is distinct from course attendance.
- [ASME B31.3 scope](https://www.asme.org/codes-standards/find-codes-standards/process-piping): overview and project checklist have distinct purposes.
- [BLS OEWS](https://www.bls.gov/oes/): broad occupational wage data must not be presented as a guaranteed NDT method-specific offer.
- [Google event guidance](https://developers.google.com/analytics/devguides/collection/ga4/events) and [Vercel routing](https://vercel.com/docs/project-configuration/vercel-json).
