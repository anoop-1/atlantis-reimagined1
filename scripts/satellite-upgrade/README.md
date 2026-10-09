# Satellite product-funnel upgrade — October 2026

## Purpose and limits

Turn the 35 existing Vercel properties into clearly owned, useful subject resources with relevant routes to Atlantis products and services. Do not add more satellite domains, city permutations or artificial independent endorsements. Traffic and backlinks are not business outcomes: measure accepted enquiries, sales qualification and closed revenue.

This release replaces all 35 homepages, shared navigation/footer and enquiry journeys. It preserves the 750 existing page routes, adds/corrects canonical and sitemap coverage, and repairs selected repeated legacy claims and links. It is **not** a technical-expert review or complete rewrite of all legacy articles, nor evidence of ranking or revenue improvement.

## Offer architecture

Shared theme: all 35 projects use the same `site.css` with navy text, blue accents and white/cream backgrounds, including light briefing cards and footers. Scoped legacy utility overrides preserve article structure while normalizing former amber, teal, purple and other decorative palettes. The generator stamps `data-theme="blue-cream-v1"`; run the live verifier with `--theme` to require this release marker. Source validation checks all 35 generated stylesheets against the shared source and checks normal-text contrast against both light backgrounds. This theme-only release does not add URLs or require another sitemap submission.

October 9 coverage correction: each satellite now exposes all seven core offers on its homepage and in its site-wide footer. The primary and related offers remain first, followed by the rest of the catalogue. A new `/atlantis-products-services` page on every site explains use cases, enquiry preparation and scope boundaries for all seven offers, plus secondary links to 3D scanning and NDT Connect. The new page is accessible from every article's navigation and appears in each sitemap. This adds 35 useful navigation pages (785 routes total), not hundreds of region/method permutations. Ownership remains disclosed; API training is explicitly excluded. Core product and contact links preserve referral attribution and the selected service.

The exact 35-site mapping and unique editorial briefs live in `catalog.mjs`. Software Solutions and Workflow Automation lead to ERP; Asset Integrity leads to Digital Twin reporting; training and career resources lead to NDT training with Simulation as a related offer; standards, safety and specialist scope resources lead to Level III consulting; applicable industry resources lead to inspection scope reviews. Equipment resources combine recordkeeping, training and technical review. The API-named resource preserves its existing URL but does not sell API training.

Every homepage has a unique audience, decision-oriented headline, educational introduction, three preparation questions, relevant existing resources and explicit scope boundaries. Primary buttons go to the main `/contact` page with the relevant service and topic preselected. Secondary links go to product pages. Digital Twin and Simulation are described as standalone or ERP-linked options, subject to confirmed capabilities. No unsupported US office, accreditation, client count, price or guarantee is introduced.

US enquiries are the first priority; Canada, Europe, Australia, New Zealand, Singapore and Japan follow; Middle East, India and Africa remain supported subject to delivery scope. Geographic priorities do not imply local offices or onsite availability.

## Measurement

- Outbound contact clicks use `satellite_contact_click`: this is engagement, not a lead.
- Links retain satellite ID, CTA placement, source path and external-campaign parameters. Main-site session storage retains only validated routing fields across product-to-contact navigation.
- Existing accepted-enquiry events and enquiry emails receive `satellite_id`, `satellite_path`, and `satellite_cta`. No form contents or arbitrary query strings are added to analytics.
- Register event-scoped GA4 custom dimensions for those three parameters if not already present. Segment satellite traffic by hostname/site_role; do not mix satellite pageviews with main-site landing-page performance.
- Review existing GA4 cross-domain configuration before adding these hosts: campaign-tagged referral analysis and a continuous cross-domain session are different attribution designs. Avoid counting a contact click, enquiry, qualified lead and sale as four sales.
- A consent/privacy review of the inherited GA4 configuration remains an owner task. This release does not introduce a new analytics provider or claim consent compliance.
- Establish a pre-release 90-day baseline and compare 28/90-day cohorts after release by country, site, offer, accepted enquiry, qualified enquiry, demo held, quote and closed revenue. No numerical growth forecast is justified by this code release alone.

## Build and release

1. Edit `catalog.mjs`, the two templates or `site.css`.
2. Run `node scripts/satellite-upgrade/generate.mjs` from the main repo root.
3. Install validation dependencies with `npm ci --prefix backlink-sites` and run `node scripts/satellite-upgrade/validate.mjs`.
4. Run `node scripts/satellite-upgrade/build-all.mjs`. Each site still installs/builds independently in Vercel; parent dependencies are only for local QA. Build reports are ignored under `backlink-sites/validation-results`.
5. Refresh an individual site's lock when its dependency manifest changes. All satellites use Next 14.2.35 in this release; continue normal security patch maintenance.
6. Publish one reviewed commit through the primary repository. Existing Vercel integrations deploy the primary-linked projects; the existing `mirror-satellites-b` workflow syncs the 11 overflow sites to `atlantis-satellites-b`. Do not edit the mirror directly. Main VPS deployment also runs because attribution changes touch the main app.
7. Verify every production homepage, canonical and contact route, plus main-site contact preselection. Check main VPS and mirror workflows. Do not submit fake production leads.
8. To roll back, revert only the release commit on main and allow the same deployment/mirror path to run. Preserve unrelated subsequent changes; never force-reset production history.

The first rollout exposed an inherited deployment-skip bug: Vercel ran `git diff --quiet HEAD^ HEAD -- backlink-sites/<slug>` from inside that satellite directory, which matched no files and canceled changed projects. Each project's `vercel.json` now overrides it with `git diff --quiet HEAD^ HEAD -- .`, valid in both primary and mirror layouts. A missing parent commit returns a nonzero exit code and builds rather than silently skipping. The public verifier accepts Next.js's normalized root canonical with or without a trailing slash.

Pre-release QA: all 35 production builds and TypeScript checks passed; the validator covered 750 page routes, 143 homepage resource links and 515 contact-routing cases. Software/training/inspection previews were inspected, including 390px mobile layouts; the training CTA correctly preselected the live contact form without submitting a lead. Main Vite compilation passed, and the main VPS release for `459c890` completed successfully. Existing main-app bundle-size/duplicate-key warnings and its npm lock inconsistency are outside this satellite change; its actual Bun-based deployment succeeded.

## Remaining business checkpoints

**First 30 days:** Have the responsible NDT expert review highest-traffic legacy articles, supported methods, scope boundaries and credentials. Check actual enquiries in the inbox against accepted-lead analytics. Establish response-time ownership and pipeline stages. Register GA4 dimensions, validate consent settings, and review GSC indexation for each property. Do not submit mass indexing requests or buy network backlinks.

**Days 30–90:** Prioritize sites by qualified US and secondary-market enquiries, not page count. Publish original sample reports, real product walkthroughs, approved case studies and practical scoping checklists on the primary domain; link relevant satellite guides to them. Improve pages with impressions and genuine buyer intent. Merge or retire weak duplicate articles only with URL-by-URL review and suitable redirects.

**Months 3–6:** Test one meaningful CTA or lead-qualification change at a time. Use absolute lead counts as well as rates when volume is small. Compare demos held and quotes, not just form fills. Review whether some satellite libraries should become consolidated main-domain resources.

**Months 6–12:** Expand only topics and markets with demonstrated qualified pipeline and delivery capacity. Earn editorial links through useful original evidence and industry relationships. Retire low-value duplication through a separate approved migration. Reassess revenue contribution, support cost and maintenance cost of all 35 properties.

There is no guaranteed Google promotion, backlink uplift or conversion increase. Continued expert content review, reliable enquiry follow-up and measurement are required after deployment.
