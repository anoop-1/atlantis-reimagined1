# NDT-Connect.com SEO Audit — 2026-04-24

## Executive summary

NDT-Connect is in surprisingly good shape on the *per-page* fundamentals — Next.js on Vercel with page-level prerendering is working (cities, methods, city-method pages, industries, comparisons, cost guides, and most standards all ship unique titles, meta descriptions, canonicals, and multi-type JSON-LD schema). The site is **not** suffering from the React-SPA catch-all noindex issue that Atlantis hit. What it is suffering from is far more fixable: a **broken sitemap** (566+ URLs that 404, roughly 20% of the 2,902 submitted URLs), a **non-functional satellite backlink network** (13 of 15 ndt-connect.com satellites do not link back to the main site at all), and a **generic hero / missing-H1 footprint on the homepage + a couple of index pages** that kills CTR on branded and head-term queries. The top-3 opportunities, in order, are: (1) stop shipping 404s — regenerate the sitemap from only live routes or generate the missing /standards/* and /ndt-services/{city}/{industry} pages from the same template that works for city-method, (2) wire satellite backlinks to ndt-connect.com with useful anchor text (the 13 satellites already rank and are doing nothing for us), (3) Phase-A CTR sweep on the 9 highest-value indexed pages (homepage, /find-providers, /services, /glossary, /certifications, and the top city-method pages). Expected traffic impact over 90 days if all three ship: ~3–5x current impressions (baseline is low — Tier 3 indexing pipeline is only partially submitted), with CTR lift of ~30–50% on the stopped-404 pages once Google recrawls.

## Current state observed

### Technical

Fetches on 2026-04-24 (user-agent `Mozilla/5.0`, then cross-checked with Googlebot UA — responses identical, which is correct behavior):

- **Stack:** Next.js on Vercel. `x-vercel-cache: PRERENDER` on most routes confirms pages are built at deploy time, not hydrated at request time. Crawlers see real HTML — no SPA-catch-all risk.
- **Robots / sitemap:** `https://ndt-connect.com/robots.txt` is clean (Allow: /, Disallow on admin/dashboard/api/settings/my-requests/provider-dashboard/provider-profile/provider-requests/track-request). Sitemap referenced correctly.
- **Sitemap size:** 2,902 URLs in `sitemap.xml`. Breakdown by section: 1,500 `/ndt-services/*` URLs (75 cities × 20 segments — 12 methods + 7 industries + 1 city-root), 84 `/standards/*`, 18 `/blog/*`, 12 `/services/*`, plus misc top-level and compare/cost-guide/careers/case-studies/industries/glossary.
- **Sitemap 404 rate (CRITICAL):**
  - Standards: **41 of 84 (49%) return HTTP 404 with `<meta name="robots" content="noindex">`**. Confirmed broken URLs include `asnt-snt-tc-1a`, `asme-b31-8`, `api-571`, `api-580`, `api-581`, `api-620`, `api-650`, `aws-d1-6`, `astm-e569`, `nace-sp0169`, `pcn-certification`, `nas-410` — many of the most-searched NDT standards are exactly the ones 404ing.
  - City pages (random 40-URL sample): **10 of 40 (25%) return 404**. All 10 failures are `/ndt-services/{city}/{industry}` URLs (e.g. `singapore/manufacturing`, `perth/power-generation`, `melbourne/oil-and-gas`, `chennai/oil-and-gas`, `bahrain/aerospace`). The `/ndt-services/{city}/{method}` pattern appears to resolve consistently; the `/ndt-services/{city}/{industry}` pattern appears to be **entirely broken** (sitemap contains ~525 of these).
  - Total estimated dead URLs in sitemap: **~566 (~20%)**. Every one of these is bleeding GSC crawl budget and will be flagged under "Not found (404)" and "Submitted URL not found (404)" in the GSC Coverage report once Tier 3 submission finishes.
- **Canonicals:** Correctly set per page. Each unique URL points to itself. Homepage points to bare `https://ndt-connect.com` (no trailing slash). No cross-domain or cross-subdirectory leaks observed in spot checks.
- **Robots meta:** `index, follow` on all live pages. 404 pages correctly emit `noindex`. No accidental noindex on live pages observed.
- **H1 discipline:**
  - Homepage — **H1 present** but wraps a multi-span phrase: `Book NDT Inspection Services Online` — keyword-weak (no "marketplace", "NDT providers", "non-destructive testing services" inside the H1).
  - Most content pages (about, contact, blog, glossary, faq, certifications, industries, services index, cost-guide, compare, careers) have clean H1s.
  - **City-method pages** (e.g. `/ndt-services/houston/ultrasonic-testing`) have H1 `Ultrasonic Testing Inspection` — missing the city name in the H1, which is the #1 local SEO signal. Title tag is correct (`Ultrasonic Testing in Houston | NDT Connect`); the H1 should match.
  - **City root pages** (e.g. `/ndt-services/houston`) have no visible H1 in first 5 `<h1>` matches — only H2s appear. This needs a one-line fix.
  - **/find-providers** and **/services/ultrasonic-testing** similarly missing a prominent H1 in first-scan.
- **Schema / JSON-LD (good):** Rich structured data is shipping per page type. Observed on live pages:
  - Homepage: Organization, ContactPoint, PostalAddress, WebSite, SearchAction.
  - City-method: City, State, Service, Organization, FAQPage, Question, Answer (but **no LocalBusiness**, no GeoCoordinates).
  - City root: Offer, OfferCatalog, City, Country, Service, Organization, FAQPage.
  - Services index and method: Service, FAQPage, Organization.
  - Blog index: BreadcrumbList, ListItem, FAQPage, Organization.
  - Compare, cost-guide, careers: self-describing (verified present). Missing: `Product` or `AggregateOffer` on cost-guide, `JobPosting` on careers pages (strong rich-snippet candidate).
  - Contact: ContactPage, ContactPoint, Organization, PostalAddress.
  - About: Organization, GeoCircle, GeoCoordinates (present, good).
- **OpenGraph / Twitter cards:** Homepage has complete og:title / og:description / og:image (1200×630 PNG served via `/opengraph-image`) / og:site_name / og:type / og:url. Not every page has per-page OG (spot-check showed the default was being reused). Low-effort fix.
- **Hreflang:** **None observed on any page.** With 75 cities across Americas/Europe/Middle East/Asia-Pacific/Africa and the Atlantis group having the same issue, this is a known lever (Phase E in the skill playbook). For now the lack of hreflang is not a bleeding-out bug, but it's the biggest single move for the India + Middle East city pages where English-alternate markup would help disambiguate targeting.
- **Duplicate content across cities:** Spot check Houston-UT vs Dallas-UT (same country, same method): **80.9% textual similarity** over the first 8,000 characters. That's above the threshold where Google treats near-duplicate city pages as one and picks a "canonical" itself — which can suppress 74 of the 75 city pages per method. The "Overview", "Key Facilities & Infrastructure", "Applicable Standards & Codes", and "FAQ" blocks are largely templated; only the city name and a few industry strings vary.
- **Favicon, manifest.json:** Present. Image alt text not audited in depth — spot-check of homepage found minimal meaningful alt text on hero/decorative images.

### Content

- **Homepage:** 1,206 words of real copy (Three Simple Steps → Built for the NDT Industry → NDT Methods → Industries We Serve → Find NDT Services Near You → Grow Your NDT Business → testimonials → Featured Providers → Free NDT Tools → Latest from Our Blog). Strong internal-link hub behavior. 4 ld+json blocks. But the hero phrase "Book NDT Inspection Services Online" is **branded/action copy, not keyword copy** — on the head term `NDT marketplace` or `NDT service providers` this hero does not match the query intent. Meta description (`Find certified NDT inspectors worldwide…`) is better calibrated.
- **/find-providers:** 213 words (thin). This is the page most users will land on for "NDT providers near me", and it has no H1, no FAQs, no category/region jump-links in the prerendered HTML. It relies on the JS-rendered filter UI. If most of the page is client-rendered post-hydration, crawlers see almost nothing. This is the single biggest missed opportunity on the site: the highest commercial-intent page is the thinnest.
- **/services (index):** 886 words, clean, links to all 12 methods.
- **/services/ultrasonic-testing** and siblings: 595 words each, FAQ schema present, Advantages / Limitations / Applicable Standards / Other NDT Methods block. Decent quality but generic — needs more "when to use UT vs RT", "pricing", "typical thickness ranges", "code requirements" to compete against established NDT educational sites.
- **City-method pages** (e.g. `/ndt-services/houston/ultrasonic-testing`, 1,213 words): Overview + Key Facilities & Infrastructure + Applicable Standards & Codes + FAQs + nearby-location links. Structure is excellent. Content is too boilerplate (see 80.9% dup above).
- **City root pages** (e.g. `/ndt-services/houston`, 722 words): OfferCatalog schema, listing every method offered. Strong.
- **Blog:** 18 posts; word counts range 452–1,903. Titles are strong (`NDT Career Guide 2026`, `NDT Industry Statistics & Market Size 2026`, `UT vs RT: Choosing Between Ultrasonic and Radiographic Testing`). This is a respectable start for a content hub but thin for a site claiming to be "the #1 marketplace".
- **Glossary:** 6,560 words, 200+ terms, CollectionPage schema, clean H1, alphabetical browse. Under-leveraged — not linked prominently from city-method pages.
- **Standards index:** 4,212 words, index of 84 standards. Strong page. The fact that 41 of the 84 standards it links to are 404 is a crawl-trap on this otherwise-strong page.
- **Comparison pages** (`/compare/ut-vs-rt`): 1,129 words, well-targeted head terms. Great pattern — the "X vs Y" URL format directly captures long-tail comparison queries.
- **Cost-guide pages** (`/cost-guide/houston/ultrasonic-testing`): 731 words. Pricing content is exactly what converts commercial-intent visitors. Needs actual price ranges, not generic ranges.
- **Career pages** (`/careers/houston`): 834 words. Missing JobPosting schema — adding it would make every careers URL eligible for Google Jobs rich snippet.

### Indexing & GSC

- Per Atlantis CLAUDE.md, Tier 3 (ndt-connect.com) is in progress. ~3,691 URLs targeted, but the real live-URL count is **closer to 2,336** once the 566 dead sitemap URLs are subtracted. Submitting dead URLs wastes daily quota (200/day hard limit on the Indexing API) and trains GSC's "submitted URL had issues" counters.
- **Indexing-pipeline blocker**: the sitemap is the source of truth for the submission script. If `gsc-submit-priority.mjs` is reading from sitemap.xml, it's been submitting 404s for weeks.
- The 15-satellite site set: per the CLAUDE.md plan, these are meant to be backlink supply for ndt-connect.com. On live inspection, **13 of 15 do not link to ndt-connect.com at all**. The 2 that do (ndt-equipment-reviews, ndt-safety-compliance) have exactly 2 outbound ndt-connect.com links each. **This is essentially zero backlink equity being passed.**

### Off-site

Satellite-by-satellite inspection summary (HTTP 200 everywhere, all served from vercel.app, sizes 23–48KB):

| Satellite | Links to ndt-connect.com | Notes |
|---|---|---|
| aerospace-ndt-center | 0 | "Aerospace NDT Center" — content but no backlink |
| corrosion-engineering-guide | 0 | |
| industrial-coating-inspection | 0 | |
| ndt-career-portal | 0 | |
| ndt-digital-technology | 0 | |
| ndt-equipment-reviews | 2 | Only one that has meaningful backlinks |
| ndt-safety-compliance | 2 | Only one that has meaningful backlinks |
| ndt-standards-reference | 0 | Ironic given the main-site standards gap |
| offshore-ndt-guide | 0 | |
| pipeline-integrity-hub | 0 | |
| pressure-vessel-inspection | 0 | |
| rt-testing-hub | 0 | |
| tank-inspection-guide | 0 | |
| ut-testing-academy | 0 | |
| weld-inspection-pro | 0 | |

**Competitive landscape** (brief, verify rankings before over-investing):
- **Direct B2B marketplace competitor:** `ndt.world` — positions as global NDT services directory. Verify its GSC rank on "NDT marketplace", "NDT service providers worldwide" before deciding how aggressive to be.
- **Directories** (not true marketplaces): `ndt.org`, `metoree.com`, `ensun.io`. These rank for `"NDT companies"` type queries. Verify.
- **Content authorities:** `inspectioneering.com` (magazine/journal; not a marketplace — compete with blog content, not marketplace pages).
- **Large vendors (not marketplaces):** MISTRAS, Applus+, Intertek, Bureau Veritas, SGS, Baker Hughes. These are service providers, not directories — they rank for their own brand + city/service queries, so they overlap with city-method pages but not with marketplace queries.
- **Positioning wedge:** NDT-Connect's unique positioning is "instant quote from multiple verified providers" — ndt.world is a flat directory, the big vendors are monolithic. Lean into the marketplace angle in titles and schema.

Reference: ndt.world (https://www.ndt.world/), ndt.org directory (https://www.ndt.org/category.asp?c=USA).

## Opportunities ranked by leverage

### Quick wins (ship in 1–2 weeks, compounding CTR impact)

1. **Stop the 404 bleed — regenerate the sitemap from live routes only** (half a day of work). Either add every 404 URL to a `noindex` exclude list, or — better — have the build pipeline enumerate routes from the actual file tree (or Next.js `generateStaticParams`) so the sitemap and the routes match by construction. Expected impact: within 4 weeks, GSC "Submitted URL not found (404)" count drops to zero; `alreadyIndexed` rate per submission batch rises because we stop burning quota on dead URLs. **Blocks Tier 3 completion from being a disaster.**

2. **Wire satellite backlinks (2 days)**. On each of the 13 satellites with zero backlinks, add at least: one homepage hero CTA `Book NDT Inspection on NDT-Connect` linking to `https://ndt-connect.com/`, one footer link `Find certified [topic] providers on NDT-Connect` using topic-appropriate anchor text (e.g. aerospace-ndt-center → `Aerospace NDT services on NDT-Connect` → `/ndt-services/seattle/ultrasonic-testing` or the industry page), and one in-content link from the highest-traffic article per site. Anchor-text plan: 60% branded `NDT Connect`, 30% exact-match topical (`phased array ultrasonic testing services`, `pressure vessel inspection providers`), 10% naked URL. Expected impact: 40+ dofollow backlinks from topically relevant sites currently going unused.

3. **Rewrite 9 highest-value page titles + metas for CTR** (1 day). Current titles are good-enough but none of them have a number, year, or social-proof hook — the CTR-before-rank principle says hit those triggers on top-impression pages. Targets:
   - Homepage: `NDT Connect | #1 Marketplace for Non-Destructive Testing Services` → `Book NDT Inspection in 75+ Cities | Verified NDT Providers | NDT Connect`. Meta: swap "the leading marketplace" (unverifiable) for "Compare quotes from 100+ verified NDT inspectors. Free for asset owners. Real-time tracking."
   - `/find-providers`: `Find NDT Providers — Certified Inspectors Worldwide | NDT Connect` → `Find Certified NDT Providers in 75+ Cities | Free Quotes | NDT Connect`.
   - `/services/ultrasonic-testing`: add "(UT)" and "2026" → `Ultrasonic Testing (UT) Services 2026 | Get Certified UT Inspectors | NDT Connect`.
   - `/ndt-services/{city}/{method}` title template: currently `Ultrasonic Testing in Houston | NDT Connect`. Add a commercial hook: `Ultrasonic Testing (UT) in Houston, TX | Certified Inspectors, Instant Quote | NDT Connect`. **Implement once in the city-method template, propagate to all 900+ pages.**
   - `/glossary`: stable; add "250+ NDT Terms Defined (2026)" for a freshness signal.

4. **Fix the homepage H1 + city-method H1** (30 minutes each, shared template). Homepage H1 → `Book Certified NDT Inspection Services` (or similar keyword-heavier phrase), paired with the hero subhead staying kinetic. City-method H1 → `Ultrasonic Testing Services in Houston, Texas` — must include city + method in the H1 tag itself. Also fix city-root pages that currently have no visible H1.

5. **Per-page OG images on city-method pages** (half day). Currently homepage OG is rich (1200×630 branded PNG) but spot checks show other pages may be defaulting. Ensure the city-method OG image dynamically inserts city + method (the `/opengraph-image` route on Next.js supports this). LinkedIn sharing by NDT professionals is a meaningful referral channel and branded preview cards raise click-through.

6. **Add LocalBusiness + GeoCoordinates schema to city-root and city-method pages** (half day). Currently the City/State schema is present but `LocalBusiness` (with area served = the city) is not. Google's local pack eligibility is tied to this.

### Structural improvements (ship in 3–6 weeks, rank-lift impact)

1. **Rebuild `/find-providers` as prerendered content** (1 week). Currently 213 words — most of the page is hydration-time. The head term "find NDT providers" is exactly what this page must own. Requirements:
   - Prerender a browseable index with at least 800 words of copy (intro + "how our matching works" + featured cities + featured methods + featured industries + FAQ block + 3–5 CTA variations).
   - Expose the filter *state* in the URL so pre-filtered views (e.g. `/find-providers?method=UT&city=Houston`) can also be crawled. If these become canonical to `/ndt-services/houston/ultrasonic-testing` via redirect, that's fine; the point is the SERP sees the right destination.
   - Strict FAQPage schema with the 10 real questions asset owners ask (pricing, timeline, certifications, remote vs on-site, report format, what info to provide in a request).
   - Contact-form rule: **nothing in the rewrite may touch `/contact`, `/api/contact` (if it exists), or the `mailto:support@ndt-connect.com` / `mailto:partnerships@ndt-connect.com` anchors**. Verify after deploy by loading `/contact`, clicking the mailto, and sending a 1-line test to confirm inbox receipt.

2. **Break the 80% duplicate-content problem on city-method pages** (2–3 weeks, template work). These pages are the sitemap backbone (~900 live URLs). The current template has ~300 words of genuinely varying content and ~900 words of near-boilerplate. Targets:
   - **Add real local hooks per city**: for each of the 75 cities, inject 2–3 location-specific sentences into the Overview section naming actual local infrastructure — port names (Port of Houston, Jebel Ali, Tanjong Pagar), refineries/plants (ExxonMobil Baytown, ADNOC Ruwais), airport hubs, shipyards, regulatory authorities (DOT PHMSA for US pipelines, ADNOC SPC for UAE).
   - **Method × city co-occurrence blurb**: a short paragraph explaining why this particular method matters in this city (e.g. PAUT in Dubai because of subsea/topside offshore work, RT in Houston because of refinery turnaround cycles).
   - **Distinct FAQ set per city or per region**: at minimum, 2 of 5 FAQs must reference city-specific regulations, turnaround windows, or local code authority. Keep 3 FAQs shared for schema stability.
   - **Ship as a template edit (one file)**, not 900 page edits. Pattern: data-driven `cities.json` already almost certainly exists on this codebase (analogous to Atlantis' `erp-cities.json`); extend the city record with `local_hooks: string[]`, `regulatory_notes: string[]`, `faq_overrides: FAQ[]`. Let the template interpolate.

3. **Generate the missing city-industry pages** (1 week). The sitemap already expects `/ndt-services/{city}/{industry}` URLs (7 industries × 75 cities = 525 URLs). Either:
   - **Build the template** (duplicate the city-method template, swap method for industry, rewire the catalog), OR
   - **301 to `/industries/{industry}` or `/ndt-services/{city}`**, whichever is closer to user intent. Cheapest option short-term: 301 to the city root page. Properly done, this still captures head-term traffic and kills the 404.
   - Remove the URLs from the sitemap until they ship.
   - Check internal-link outbound: if any page is linking to these city-industry URLs, those links become 404s and should be patched.

4. **Fix the 41 broken /standards/* URLs** (1 week, content-heavy). The live standard pages (API 510, API 570, AWS D1.2, ISO 16810, ISO 17637, ISO 17638, EN 13018) are good templates — they rank well on narrow-intent "standard X" queries and are conversion-adjacent (standards → who complies → book an inspection). Targets:
   - Generate real content for the 41 missing standards using the same template. Don't LLM-fabricate text — every standard page must cite actual scope from the published document, which means a real human edit pass before publication. The user's skill doctrine is explicit: "No fabrication."
   - If any standard isn't going to get written in the next 6 weeks, remove its URL from the sitemap.

5. **JobPosting schema on `/careers/{city}` pages** (2 days). Rich snippet in SERP for a careers page is a massive CTR lever. Every `/careers/houston` page should emit a `JobPosting` JSON-LD block per role. If roles are placeholder/demo until real listings exist, emit a careers-aggregator page with no `JobPosting` markup rather than fake roles — Google penalizes fake JobPosting aggressively.

6. **Internal-link audit — pull the glossary and the standards index into every method and city-method page** (3 days). Glossary is 6,560 words of crawl-worthy content barely linked to. Every city-method page already links the method's "Applicable Standards & Codes" — add a glossary link for 5 key terms per page. Every blog post should link 3–5 glossary entries. This creates the "interlinked content hub" the skill doctrine calls for.

7. **Hreflang + localization pass on India and Middle East city pages** (2 weeks, Phase E). India alone has 5 cities in the sitemap. These pages currently serve only English. Add `hreflang="en"` + `hreflang="en-IN"` + `hreflang="x-default"` for the India set. Postpone full translation until GSC shows non-English impression demand; the hreflang markup itself clarifies targeting and is zero content work.

### Moonshots (ship in 2–3 months, traffic-multiplier impact)

1. **Interactive tools that earn backlinks.** The skill doctrine is explicit: "Interactive tools earn backlinks; static guides don't." Candidates:
   - **NDT Method Selector** (already linked from the footer — is it interactive? Audit then upgrade). Goal: answer "what NDT method for X?" as a quiz, emit a result page that deep-links to `/services/{method}` + a list of providers.
   - **NDT Cost Estimator** (already listed in footer). Upgrade to take inputs (material, thickness, location, scope) and output a cost range + a "get quotes" CTA. Cost-estimator pages earn links from procurement blogs.
   - **Standards Cross-Reference Tool.** "What standards apply to my pipeline weld inspection?" — a multi-select that spits out a checklist with relevant API/ASME/ISO standards. This is not on any competitor site; it would be uniquely linkable.

2. **Public inspection-market data dashboard.** Take the sitemap's city × method coverage and publish a public page: "NDT Inspection Demand Index — Q2 2026". Use aggregate request volume from the marketplace (even if the numbers are small, frame them as early-indicator). Data journalism gets linked. NDT.net, Inspectioneering, Industry Today will all cite original data.

3. **Expand the 12 methods × 7 industries → 84 pillar-cluster matrix.** Currently the `/services/{method}` and `/industries/{industry}` pages exist in isolation. Build 84 `/services/{method}/for/{industry}` pages (e.g. `/services/ultrasonic-testing/for/aerospace`) that speak directly to buyer intent in that industry. Each page links up to its pillar and out to the 5 most relevant city-method pages. This is the pillar-cluster pattern from the skill doctrine.

4. **Verified provider directory pages (indexed).** Currently `/provider-profile/*` is Disallow-ed in robots.txt. Reconsider: if a provider is verified, their profile page is the most conversion-heavy page on the site and is a ranking candidate for "[provider name] NDT reviews". Scope: a gated `/provider-directory/{provider-slug}` public page with real content (certifications, methods offered, case studies), and a Disallow of the logged-in provider dashboards. Requires a content-moderation pipeline; start with 10–20 flagship providers.

5. **Competitor recapture on ndt.world.** If ndt.world ranks for "NDT marketplace" and NDT-Connect doesn't, the gap is either backlinks or brand age. Audit ndt.world's backlink profile (via Ahrefs or the free `linkody.com`) and target the top 20 referring domains with outreach.

## Execution roadmap

### Week 1 — Sitemap hygiene + CTR sprint

- **Day 1** — Regenerate sitemap from live routes. Rebuild/deploy. Verify the 566 dead URLs are gone from the new sitemap. Re-submit the cleaned sitemap to GSC.
- **Day 1** — Patch the satellite-backlink gap on all 13 orphan satellites. One PR per satellite or a shared template commit (whichever matches the codebase).
- **Day 2** — Rewrite top 9 titles + metas (homepage, find-providers, services index, 3 method pages, glossary, certifications, faq). One-pass edit of the SEOHead/metadata source.
- **Day 2** — Fix homepage H1, city-method H1, city-root H1. Confirm H1 contains primary keyword + city (where applicable).
- **Day 3** — Add LocalBusiness + GeoCoordinates schema to city templates.
- **Day 4–5** — Per-page OG image sweep on city-method pages.
- **Day 5** — Ship. Post-ship: `curl` verify 3 representative URLs (city-method, industry, standard), submit the test contact form (send a message to support@ndt-connect.com), confirm receipt.

### Weeks 2–4 — Head-term routing + content deduplication

- **Week 2** — Rebuild `/find-providers` as prerendered (800+ words, FAQ block, featured cities/methods/industries). Protect contact form (no touches).
- **Week 2** — Generate the 525 city-industry pages from the template (or 301 to city-root, if template build is too long).
- **Week 3** — Break the 80% duplication on city-method pages: add per-city local hooks, regulatory notes, city-specific FAQs via a `cities.json` data-model extension. Template edit.
- **Week 3** — Generate the 41 missing `/standards/*` pages — real scope content, not fabricated — or remove from sitemap if not shipping within 6 weeks.
- **Week 4** — Add JobPosting schema to `/careers/{city}` (only if real openings exist).
- **Week 4** — Internal-link pass: glossary entries + standards from every city-method and blog page.

### Weeks 5–8 — Content hub expansion + localization

- **Week 5** — Begin the 84-page method × industry matrix. Ship 20 per week. Start with the high-intent pairs: UT×Oil & Gas, PAUT×Aerospace, RT×Power Generation, MT×Manufacturing, PT×Marine.
- **Week 6** — Ship the next 20 method×industry pages; start hreflang on India cities.
- **Week 7** — Add hreflang + `en-AE`, `en-SG`, `en-IN`, `en-GB` for the relevant city sets.
- **Week 8** — Backlink outreach campaign to 50 domains (NDT.net, Inspectioneering, API, ASNT, ISO local chapters). Pitch the standards database as a citation resource.

### Weeks 9–12 — Moonshots

- **Week 9–10** — Build one interactive tool (Method Selector upgrade OR Standards Cross-Reference Tool). Launch as a shareable widget.
- **Week 10–11** — Build Cost Estimator v2 (real pricing inputs, emit cost-range page + CTA).
- **Week 11–12** — Launch the NDT Inspection Demand Index as a public dashboard page. Pitch to Inspectioneering, Industry Today, NDT.net.
- **Week 12** — Quarterly review: GSC Coverage, impression trend, click trend, top 20 queries, Top 20 pages by impression. Refresh this roadmap based on what moved.

## Metrics to track

**GSC weekly (every Monday):**
- **Coverage → Not Found (404):** must trend toward 0 within 4 weeks of Week 1 sitemap fix. If it doesn't, the sitemap regenerator has a bug.
- **Coverage → Submitted and indexed** count: expect +10–15%/week once Tier 3 submission completes on *clean* URLs.
- **Performance → 28-day impressions:** baseline before Week 1. Expected trajectory: flat for 2 weeks (recrawl lag), then +30–50% by Week 6 from title/meta CTR fixes alone.
- **Performance → 28-day CTR:** if CTR doesn't lift after Week 4 on the pages whose titles we rewrote, the rewrite was wrong — revert and try a different angle.
- **Performance → average position**: structural changes (H1 fixes, LocalBusiness schema, de-duplication) typically move position in Weeks 5–8. Look for page count in top 10 on primary head terms.

**GSC monthly:**
- **Pages in top 10 for "NDT marketplace", "NDT service providers", "NDT inspection services {city}" for top 10 cities.** Course-correct threshold: if no top-10 for "NDT marketplace" by Week 12, escalate to moonshot 5 (backlink recapture from ndt.world's referring domains).
- **Clicks from the satellites** — track as direct referral in GA4. If Week 4 post-backlink-wire shows <1 session/day from the 13 satellites, the satellites aren't driving traffic for other reasons (low organic traffic on the satellites themselves). Note for a future call on whether to keep/kill satellite maintenance.

**GA4:**
- Engaged sessions on the city-method pages post-de-duplication. If engaged-session rate drops after the template edit, the new content is worse than the old — roll back and iterate.
- /contact page views + mailto:support@ndt-connect.com click-tracking. Must never drop to zero. **This is the contact-form smoke test in metric form.**

**Crawl budget (via GSC crawl stats):**
- Target: "Pages crawled per day" trending up after sitemap fix (more discovery) and "Total crawl requests to 404" trending to zero.

## Risks

- **Contact-form regression (highest impact, low probability if disciplined).** The contact flow is simple — `/contact` page + `mailto:support@ndt-connect.com` and `mailto:partnerships@ndt-connect.com`. No form, no API endpoint, no env vars on the contact path. Risks: any redirect rule added to `vercel.json` or `next.config.js` that accidentally catches `/contact`; any `<a>`-to-`<button>` refactor that drops the `mailto:`; any global component change that removes the contact link from the footer. Hard rule: every SEO ship must include a post-deploy curl of `/contact` that confirms the two mailto anchors are present, and a test email sent to confirm inbox delivery.

- **Duplicate-content penalty risk (medium probability, medium impact).** Breaking the 80% city-method duplication is non-optional — but the deduplication edit itself risks breaking the 900-page template if the cities.json extension has a shape mismatch. Stage: ship on 5 pilot cities first (e.g. Houston, Dubai, Mumbai, London, Singapore), watch them in GSC for 2 weeks, then roll to 75.

- **Thin-content risk on city-industry pages.** The easy path for the 525 missing city-industry URLs is a template like the city-method one. **If the city-industry template is 90% boilerplate**, we've just replaced 525 404s with 525 thin-content doorways — a worse GSC signal. Mitigation: if the content work to make them genuinely differentiated isn't budgeted, 301 to city-root instead. 301s consolidate equity; thin pages dissipate it.

- **Programmatic content at scale ≈ spam signal.** Google's 2024–2025 Helpful Content updates explicitly target programmatic doorway pages. Every new template-driven page must have either a specific local hook (port, refinery, code authority, airport hub) or aggregate multiple related cities into one regional hub. Never publish a city×method pair that is find/replace with the city name.

- **Vercel prerender cache + route-pattern drift.** Next.js `generateStaticParams` paths must match the sitemap entries exactly. If the sitemap is generated from an older `cities.json` and the routes are built from a newer one, drift appears as 404s. Ship both from the same source.

- **Satellite-backlink cluster interpreted as a PBN (low probability).** 15 vercel.app sites all pointing at one marketplace with over-optimized anchor text looks like a private blog network to Google. Mitigation: follow the anchor-text plan in Quick Win #2 (60% branded, 30% topical, 10% naked URL); ensure each satellite has distinct ownership signals (different author, different design variation, different content focus). If all 15 satellites get deindexed in a single month, that's the signal — back off immediately.

- **Indexing-script submission of 404s.** If `gsc-submit-priority.mjs` is currently feeding from `sitemap.xml` without a live-URL filter, it's been wasting 25–50 of the 200-daily-quota on dead URLs for weeks. Fix in Week 1 Day 1; re-seed `gsc-priority-progress.json` to clear any failed submissions.

- **PageSpeed Insights API quota exhausted** on audit day (2026-04-24) — could not pull current Core Web Vitals. Per Atlantis CLAUDE.md, CrUX has no data yet anyway (insufficient traffic, needs ~1,000 visits/28 days). Post-Week-1 this should be re-checked monthly.

- **Competitor rank data not verified in this audit.** The moonshot to "recapture backlinks from ndt.world's referring domains" assumes ndt.world actually outranks NDT-Connect on marketplace head terms. Before investing 2+ weeks in an outreach sprint, verify via `site:ndt.world` + GSC position for "NDT marketplace", "NDT service providers directory". If NDT-Connect already ranks higher, reallocate the budget.

## Appendix — files to open first, by task

- **Sitemap regeneration:** wherever the Next.js app emits `sitemap.xml` — likely `app/sitemap.ts` or `pages/sitemap.xml.ts`. Cross-reference with the `cities.json` (or equivalent) that drives `generateStaticParams` on `/ndt-services/[city]/[method]`.
- **Per-page metadata:** `app/layout.tsx`, each page's `generateMetadata` export, and whatever equivalent of `src/components/SEOHead.tsx` exists in this repo.
- **City template:** the dynamic route file under `app/ndt-services/[city]/[method]/page.tsx` (or equivalent). **This one file drives 900 URLs.**
- **Satellite sites:** deployed via API (per Atlantis CLAUDE.md), not GitHub — patches need the Vercel deploy API, not a git push. See `scripts/deploy-verify-index.mjs`.
- **Indexing script:** `scripts/gsc-submit-priority.mjs` — add a live-URL filter (HTTP HEAD check with 5-URL concurrency) before submitting any URL from the sitemap.
- **Contact form protection:** contact page uses `mailto:` only, no API endpoint. The mandatory verification is: `curl -sL https://ndt-connect.com/contact | grep "mailto:support"` returns a match after every deploy.
