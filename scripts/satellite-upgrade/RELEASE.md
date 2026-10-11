# Satellite upgrade release — 10 October 2026

The 35 satellite websites are upgraded locally and ready for your review and manual commit. All upgrade changes remain uncommitted and unpushed. No production deployment or outreach was performed.

Open `review.html` for the visual review, keyword ownership map, research and 30/60/90-day tracker. The parent folder also contains `UPGRADE REVIEW.html`. While the included local preview service is running, open http://127.0.0.1:43840/review.

## What changed

- Added 35 original decision guides, 35 private working-brief tools and 35 complete searchable resource libraries: 105 new pages. All 890 existing page URLs are retained, giving 995 pages in total.
- Each guide includes a subject-specific decision table, a clearly hypothetical example, preparation prompts, scope boundaries and relevant primary-site links.
- Worksheets generate a text download without registration. Answers are not sent to analytics or inserted in contact URLs, and disappear when the page is left. They are planning aids, not engineering approval tools.
- Added 73 contextual primary links in the new guides and 42 links to relevant existing phrases. Corrected links to 16 confirmed missing primary destinations and one broken internal article destination. The final rendered pages reference 276 distinct primary destinations, all verified as reachable.
- Added Article and Breadcrumb structured data to the new guides, unique metadata and self-canonicals. Substantive guides and libraries are indexable. The new worksheets remain available but are noindex/follow and excluded from sitemaps.
- Every retained page is reachable through its site's complete library. Three pre-existing `/resources` pages were preserved; new libraries use `/resource-library`.
- Corrected the identified repeated template in 350 legacy articles: unsupported named-author credentials and claims of firsthand experience, blanket method-selection advice and unsupported fixed-duration assertions. Publisher attribution is explicit. This targeted correction does not constitute a standards or engineering approval of every retained technical article.
- Preserved the existing blue-and-cream visual system, strengthened mobile tables and forms, and added keyboard-accessible search, form labels, result announcements and printable/downloadable briefs.

## Research and conversion preparation

- `keyword-portfolio.json`: 100 commercial tracking hypotheses allocated exactly as the strategy specifies (20 ERP, 15 Digital Twin, 15 Simulation, 20 Training, 15 Level III, 15 Inspection). Each has a primary commercial owner and a supporting satellite guide. Missing live rank, volume and difficulty remain unknown. Historical query matches are explicitly labeled as supplied primary-site snapshots.
- `topic-keyword-map.json`: 122 distinct subject terms mapped to the 35 new guides. Terms guide the subject and relevant links; they are not a requirement to repeat every exact phrase.
- `competitor-gap-map.json`: 35 implemented content opportunities grounded in the supplied strategy, repository competitor summaries and competitive-coverage data. No paid-platform traffic or backlink estimates are invented.
- `backlink-prospects.json`: 50 publication/association candidates; 42 official pages retrieved and 8 requiring manual access checks. Submission policies were specifically reviewed for Inspectioneering and Reliabilityweb; other editorial routes need confirmation.
- `outreach-drafts.json`: 20 tailored proposal drafts. No messages sent and no links claimed as acquired. Review publication rules, contributor credentials and the deployed resource before using any draft.
- `review.html`: a local aggregate-metric tracker with optional browser-local saving and JSON export/import. It is not connected to GA4, GSC or the CRM.

The existing `satellite_contact_click` event remains an outbound interaction, not a successful enquiry. New `satellite_brief_complete` and `satellite_brief_download` events are secondary interactions, deduplicated within a page session. Their payload contains site/resource/service identifiers and source path only. Successful enquiry and sale measurement remains the responsibility of the primary website and CRM.

## Validation completed

| Check | Result |
| --- | --- |
| Production static builds | 35/35 passed |
| Type checks | 35/35 passed |
| Browser journeys | 35/35 passed |
| Rendered-page audit | 995 pages, no broken internal links, duplicate titles or H1-count failures |
| Primary destinations retained in final HTML | 276 reachable destinations |
| Original long-form guides | 35 passed existing editorial checks, 2,055–2,149 section words each |
| Enquiry route checks | 2,205 passed |
| Working brief generation/download/reset | Passed across all 35 sites |
| Analytics/privacy checks | No draft text in events or contact URLs; no duplicate completion event; no false lead events |
| Responsive review | All new guide/worksheet layouts checked at 390px; representative desktop/mobile screenshots inspected |
| Regeneration | Stable on repeat generation after the corrections |
| Original URLs | All 890 retained |
| Git scope | Satellite source plus satellite tools/reports only; nothing staged |

`release-validation.json` records the source hashes and summary. `release-evidence/` contains the rendered-page audit, browser results, typing results and public-link evidence. Detailed build logs and screenshots remain in the ignored `backlink-sites/validation-results` folder. Verified final previews are stored outside Git in the parent `.previews` folder; tracked historic build exports were restored so they do not pollute your commit. Run builds before re-running an audit against `out/`.

## Manual commit and deployment

1. Open the actual repository at `Atlantis Satellite Sites/.source-repository`, branch `codex/organize-satellites`. The 35 named folders are links into this same repository.
2. Review and commit the intended changes under `backlink-sites/` and `scripts/satellite-upgrade/`. There are no primary-site or application edits in this release. Do not stage generated `out/`, `.next/`, dependencies or local previews.
3. Reconcile your commit with current `main` before pushing. At handoff, `origin/main` is `214634a34403ed4081622cb94f96c680afdd8f54`; it advanced during this work. A read-only comparison found no incoming changes to satellite source or shared upgrade tools. The only difference in those committed paths was the earlier local folder-organizer helper. Do not overwrite Claude's primary-site work or force-push.
4. Push/merge through your usual main-branch workflow. The existing workflow mirrors the 11 overflow sites to `atlantis-satellites-b`; do not push that mirror independently. A feature-branch push alone may create only a preview, depending on account settings.
5. Check both deployment workflows and the live Vercel results, then verify each new guide, worksheet, sitemap and contact journey. Account settings, quotas and live domain bindings were not authenticated.
6. Capture the live GSC/GA4/CRM baseline and complete the primary-site checks in `PRIMARY-SITE-HANDOFF.md` before evaluating growth.

Suggested commit subject: `Upgrade satellite guides, working briefs and primary-site journeys`

Rollback after deployment: revert the resulting satellite upgrade commit through the normal main-branch workflow and allow both deployment routes to rebuild. Do not reset unrelated primary-site commits. Before committing, review or discard individual changes using Git; the original supplied folder remains untouched.

## Reproducing the checks

Install the existing shared dependencies in `backlink-sites/` using its package manifest, then run from the repository root:

```sh
node scripts/satellite-upgrade/generate.mjs
node scripts/satellite-upgrade/validate.mjs
node scripts/satellite-upgrade/validate-editorial.mjs
node scripts/satellite-upgrade/typecheck-all.mjs
node scripts/satellite-upgrade/build-all.mjs
python3 scripts/satellite-upgrade/audit-output.py
node scripts/satellite-upgrade/preview-growth.mjs
```

The browser check uses Playwright and Chrome: set `PLAYWRIGHT_MODULE` and `CHROME_PATH` if they are not on your normal runtime paths, then run `browser-check.cjs` while the local previews are running. To preview the preserved final exports instead of current `out/`, set `SATELLITE_PREVIEW_ROOT` to the parent folder's `.previews` directory.

## Limits of this release

This completes the satellite implementation scope. The primary-site redesign, application features, live form acceptance, account configuration, production publishing and measured traffic/sales outcomes are separate from this local release. No live Core Web Vitals, ranking improvement or sales increase is claimed. The full externally stored competitor document was not available locally; the supplied strategy and repository summaries/data were used. No API training, new local-office claims, invented case studies or unsupported product capabilities were added.
