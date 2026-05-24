# Atlantis NDT — Strategic SEO Audit + Digital Twin Repositioning Roadmap

**Date:** 2026-04-25
**Tagline:** *Experts in Digital Twin solutions, Non-destructive testing and software.*
**Mandate:** Reposition Atlantis as the standalone Industrial Digital Twin authority. NDT and software become supporting backbone, not the headline. Oil & Gas (incl. petrochemical) is the primary vertical; Maritime, Defense, Aerospace are secondary.

---

## 1. Executive Summary

The current site ranks poorly because Google sees Atlantis as **a generalist NDT training/consulting shop with a side ERP product**. The Digital Twin offering — the most defensible, highest-margin, most strategically differentiated capability — is buried. The homepage H1 says *"Excellence in NDT Consulting & Training."* The `/digital-twins` page inherits the wrong H1 and mentions LIDAR zero times, IoT zero times, LNG zero times. There is no schema markup on the homepage. There is no meta description on the homepage. The word "NDT" appears 40 times on the homepage; "digital twin" appears 11.

Meanwhile, the 120 new ERP city pages are about to ship. They are technically excellent (full schema combo, hreflang, named facilities) but their URL pattern (`/ndt-erp-{city}`) anchors them to ERP software, not Digital Twin solutions.

**The pivot:** treat Digital Twin as the **pillar topic**, anchor everything else as a spoke. Compete on a defensible wedge — **NDT-data-overlaid-on-digital-twin** — that the established players (Hexagon SmartPlant, Bentley iTwin, AVEVA, Siemens Xcelerator, Akselos) do not own.

**The fix is in three layers:**

1. **On-page corrections** (week 1): rewrite homepage + `/digital-twins` H1, meta, schema. Add the new tagline. Surface LIDAR + IoT + AI + NDT-overlay in the hero fold.
2. **Architecture layer** (weeks 2–4): make `/digital-twins` the pillar. Re-anchor the 120 city pages with a parallel `/digital-twin-{city}` URL family. Build cluster pages for LIDAR scan-to-twin, IoT sensor integration, AI predictive analytics, NDT overlay.
3. **Authority layer** (weeks 5–12): convert ASNT Level III credentialing + named regulator codes into E-E-A-T signals; build named case studies; earn links from oil & gas operators, ASNT, OSHA, AWS.

**90-day target:** rank top-3 for five long-tail wedge queries (e.g., *NDT data overlay on digital twin*, *LIDAR digital twin refinery*, *FPSO digital twin inspection*) and lift the homepage from non-ranking to page-1 for *industrial digital twin solutions* + *digital twin NDT*.

---

## 2. Current State Diagnosis

### 2.1 Homepage (`/`)

| Element | Current state | Problem |
|---|---|---|
| H1 | "Excellence in NDT Consulting & Training" | NDT-led, no Digital Twin signal |
| Meta description | **empty** | No SERP snippet control |
| Schema | **none** | No Organization, no SoftwareApplication, no LocalBusiness |
| "Digital twin" mentions | 11 | Buried under 40 mentions of "NDT" |
| LIDAR / IoT / AI mentions | 0 / 0 / 0 | Tech stack invisible to crawlers |
| Hero CTA | NDT training | Wrong primary CTA for the new positioning |

### 2.2 `/digital-twins` Page

| Element | Current state | Problem |
|---|---|---|
| H1 | "Excellence in NDT Consulting & Training \| Atlantis NDT" | **Wrong H1** — inherited from global template |
| LIDAR mentions | 0 | Core capability missing |
| IoT mentions | 0 | Core capability missing |
| LNG mentions | 0 | Vertical missing |
| "Predictive" mentions | 3 | Too thin for the AI predictive analytics story |
| Schema | none observed | No SoftwareApplication, no Service, no FAQPage |
| Imagery | generic | No NDT-overlay-on-3D-asset visual — the most defensible asset story |

### 2.3 Sitemap + Existing URL Inventory

- Total URLs in current sitemap: **2,476**
- Digital-twin-anchored URLs already live: **20+** (`/digital-twin-roi-calculator`, `/digital-twin-readiness-quiz`, `/digital-twin-vendor-comparison`, `/digital-twin-api-510-570-580-mapping`, etc.) — *these were never linked from the pillar page and are not crawled at meaningful frequency*
- 73 already-live ERP city pages: thin, no schema, no hreflang, no named facilities
- About to deploy: 120 ERP city pages + 5 industry verticals + 61 hreflang alternates = **187 new URLs**
- Soft 404 leakage: any unmapped URL returns the homepage shell with HTTP 200 (e.g., `/ndt-erp-totally-fake-url`) — Google reads this as a soft 404 across the entire site, suppressing crawl budget. Fixed in the Tier-1-4 ship via `<Route path="*" element={<NotFound />} />`.

### 2.4 What's working

- ASNT Level III credentialing — strongest E-E-A-T signal, currently underused
- 120 named city pages with regulator codes (ADNOC COP, Saudi Aramco SAES-W-010, API 510/570/580, KEPIC, PETRONAS PTS) — once shipped, these are unique on the open web
- Multi-language coverage (EN, ES, PT, DE, FR, AR, KO, RU) — competitors don't match this depth
- 10 GSC service accounts (2,000 URL/day indexing capacity) — infrastructure advantage over typical mid-size players

---

## 3. Competitive Landscape

### 3.1 The five players who own "industrial digital twin" head terms

| Vendor | What they own | Where they're weak |
|---|---|---|
| **Hexagon (SmartPlant / HxGN SDx)** | Asset visualization, point cloud | NDT data is an afterthought; not method-by-method coded |
| **Bentley iTwin** | Infrastructure-grade twins, OpenPlant | Generic across industries, no NDT specialization |
| **AVEVA (E3D, PI System)** | Process plant lifecycle | Heavy enterprise sell, no SMB / regional plant story |
| **Siemens Xcelerator (Teamcenter, Mendix)** | OT/IT integration, manufacturing | Discrete manufacturing focus, weaker on hydrocarbons |
| **Akselos** | Reduced-order physics simulation | Niche, no sensor-integration narrative, no NDT |

**Conclusion:** the head term *industrial digital twin* is locked. **Don't compete head-on.**

### 3.2 The defensible wedge — five long-tail clusters with weak incumbents

| Wedge query | Current top-10 | Atlantis advantage |
|---|---|---|
| **NDT data overlay on digital twin** | mostly academic papers, no commercial SERP | ASNT Level III + 120 named facilities + actual product |
| **LIDAR digital twin refinery** | Hexagon, Bentley generic pages | Method-specific (UT/RT/MT/PT) overlay narrative |
| **Digital twin radiation monitoring** | nuclear research labs only | Live IoT + RT integration is unique |
| **FPSO digital twin inspection** | sparse — mostly engineering blogs | Maritime + offshore O&G + named operators |
| **Predictive maintenance digital twin petrochemical** | Honeywell, AVEVA at 4-10 | API 510/570/580 mapping, IBM Maximo / SAP PM integration |

These are the rankable beachheads. Win these in 90 days, then expand the cluster.

### 3.3 What competitors lack that Atlantis has

1. **NDT-overlay-on-3D-asset visualization** — color-coded heatmap of UT thickness, RT defect maps, MT crack indications painted onto the 3D twin geometry. Hexagon SmartPlant treats NDT as document attachments, not geometric data layers.
2. **LIDAR + IoT + AI + NDT single-vendor pipeline** — competitors stitch this together via partners; Atlantis can position as integrated.
3. **ASNT Level III credentialing** — top-of-pyramid NDT authority. No enterprise digital-twin vendor has this.
4. **Named regulator code coverage in 120 cities × 8 languages** — uniquely deep geographic + regulatory specificity.

---

## 4. Strategic Repositioning

### 4.1 Brand line (everywhere — homepage hero, all schema, footer, OG tags)

> **Atlantis — Experts in Digital Twin solutions, Non-destructive testing and software.**

Subline (homepage hero, ~140 chars):

> Industrial Digital Twins for Oil & Gas, Maritime, Defense and Aerospace. LIDAR scan-to-twin, IoT live monitoring, AI predictive analytics, NDT data color-coded onto every asset.

### 4.2 Primary vertical priority

1. **Oil & Gas (incl. petrochemical)** — refineries, FPSOs, LNG terminals, pipelines, tank farms. Highest spend, highest regulatory pressure, highest ROI for Atlantis.
2. **Maritime** — shipyards, naval, offshore platforms.
3. **Defense** — depot-level MRO, weapons systems sustainment.
4. **Aerospace MRO** — engine overhaul, structural inspection.
5. **Power Generation** (already has a vertical page) — fossil + nuclear.

### 4.3 The four capability pillars to surface above the fold on the new homepage

1. **LIDAR scan-to-twin** — high-density 3D capture, mesh-to-asset registration, design-data merge.
2. **IoT live monitoring** — NDT sensors (UT thickness probes, AE sensors, eddy current arrays), temperature, pressure, gas, radiation, vibration, corrosion.
3. **AI predictive analytics** — anomaly detection, RUL (remaining useful life) forecasting, RBI (risk-based inspection) prioritization.
4. **NDT data overlay** — every UT/RT/MT/PT/VT inspection result color-coded onto the 3D asset geometry. Click an indication, see the original NDT report, technician, ASNT level, calibration record.

### 4.4 Voice + tone

- Authority-led, not promotional. Lead with regulator codes, ASNT Level III, named facilities.
- Engineer-readable. Avoid marketing fluff like "transformative" / "cutting-edge."
- Show, don't tell — every claim is backed by a named site, code, or technical screenshot.

---

## 5. Site Architecture Changes

### 5.1 New URL hierarchy

```
/                                              ← pillar homepage (Digital Twin first)
/digital-twins                                 ← pillar page (rewritten)
  /digital-twins/lidar-scan-to-twin            ← cluster: LIDAR workflow
  /digital-twins/iot-sensor-integration        ← cluster: IoT integration
  /digital-twins/ai-predictive-analytics       ← cluster: AI / RUL / RBI
  /digital-twins/ndt-data-overlay              ← cluster: NDT overlay (the wedge)
  /digital-twins/oil-and-gas                   ← vertical hub
  /digital-twins/maritime                      ← vertical hub
  /digital-twins/defense                       ← vertical hub
  /digital-twins/aerospace                     ← vertical hub
  /digital-twin-{city}                         ← 120 city pages re-anchored (parallel to /ndt-erp-{city})
  /:lang/digital-twin-{city}                   ← language alternates

/ndt                                           ← NDT supporting pillar
  /ndt-methods, /training, /consulting, etc.   ← existing tree, kept

/ndt-erp-software                              ← software pillar (unchanged)
  /ndt-erp-{city}                              ← 120 city pages (about to ship)
```

### 5.2 Critical cross-links

- Every `/digital-twin-{city}` page links to the parallel `/ndt-erp-{city}` page (and vice versa).
- The four cluster pages link from the pillar `/digital-twins` and from each city/vertical page.
- Existing thin pages (`/digital-twin-roi-calculator`, `/digital-twin-readiness-quiz`, etc.) are linked from the pillar page sidebar — convert them from orphan to crawled.

### 5.3 Schema.org coverage

| Page type | Schema combo |
|---|---|
| Homepage | Organization + WebSite + BreadcrumbList |
| `/digital-twins` (pillar) | SoftwareApplication + Service + FAQPage + BreadcrumbList |
| `/digital-twins/{cluster}` | Article + HowTo + FAQPage + BreadcrumbList |
| `/digital-twin-{city}` | SoftwareApplication + LocalBusiness + FAQPage + BreadcrumbList (same combo as ERP city pages) |
| `/ndt-erp-{city}` | (already specced) |
| Industry vertical pages | Service + FAQPage + BreadcrumbList |

### 5.4 hreflang

- Every pillar + cluster + city page gets hreflang alternates to all language variants that exist
- `x-default` always points to the EN canonical
- Already implemented in the build-sitemap.mjs pipeline — extend to cover the new digital-twin URL family

---

## 6. Content Pillar / Cluster Map

### 6.1 Pillar — `/digital-twins` (rewrite)

**Target queries:** *industrial digital twin solutions*, *digital twin NDT*, *digital twin oil and gas*

**Required sections (in order):**

1. Hero: tagline + 4-pillar quick stats (LIDAR resolution, IoT sensor channels supported, AI model accuracy, # NDT methods overlaid)
2. The four capabilities (each with a 60-sec scroll-stop section + dashboard screenshot)
3. The NDT-overlay differentiator (this is the wedge — give it 30% of the page real estate)
4. Industries served (4 vertical cards)
5. Named customer / facility logos (whatever can be cleared for use)
6. Regulator code coverage (API 510/570/580, ADNOC COP, Saudi Aramco SAES-W-010, KEPIC, PETRONAS PTS, KOC Standards, ABS/DNV for maritime, MIL-STD for defense)
7. ASNT Level III authority block
8. FAQ (8 questions)
9. CTA: book a discovery call + download spec sheet

### 6.2 Cluster pages (4)

#### `/digital-twins/lidar-scan-to-twin`

Targets: *LIDAR digital twin*, *3D scan to digital twin*, *point cloud refinery digital twin*, *as-built scan to twin oil & gas*. ~2,500 words. Workflow diagram. Include resolution specs (e.g. 5mm @ 30m), accuracy metrics, supported scanners (Leica RTC360, FARO Focus, Z+F Imager).

#### `/digital-twins/iot-sensor-integration`

Targets: *IoT digital twin sensors*, *digital twin pressure temperature monitoring*, *digital twin radiation monitoring*, *gas monitoring digital twin LNG*. List supported sensor types with Modbus / OPC-UA / MQTT protocol coverage. Mention edge gateway hardware partners.

#### `/digital-twins/ai-predictive-analytics`

Targets: *AI predictive maintenance digital twin*, *RUL prediction digital twin*, *risk-based inspection AI*, *anomaly detection refinery digital twin*. Show model architecture diagram (transformer / LSTM / XGBoost stack), accuracy benchmarks, integration with SAP PM / IBM Maximo / Oracle eAM.

#### `/digital-twins/ndt-data-overlay` ← **THE WEDGE PAGE**

Targets: *NDT data overlay on digital twin*, *UT thickness map 3D model*, *RT defect color coding 3D*, *digital twin MT crack indication*. ~3,500 words — make it the most thorough page on the open web for this query. Method-by-method (UT/PAUT/RT/CR-DR/MT/PT/VT/ECT/AET) showing how the inspection data is registered to the asset and color-coded. Include a screenshot of the actual dashboard. This is the page that will rank, attract links, and convert.

### 6.3 Vertical hubs (4)

Each is a topical hub linking down to the 120 cities filtered by industry tag.

- `/digital-twins/oil-and-gas` — refineries, FPSOs, LNG terminals, pipelines, tank farms, petrochemical
- `/digital-twins/maritime` — shipyards, naval, offshore platforms, FPSO/FSO
- `/digital-twins/defense` — depot MRO, weapons sustainment, military logistics infrastructure
- `/digital-twins/aerospace` — engine overhaul (existing /ndt-erp-for-aerospace-mro complements)

### 6.4 City pages — `/digital-twin-{city}` (120 of them)

Mirror structure of the ERP city pages but rewrite copy to lead with the digital-twin capability for that city's facility profile. Re-use the existing facility data (operators, regulator codes, NOC industries) — don't create new content from scratch. Internally cross-link to the parallel `/ndt-erp-{city}` page.

### 6.5 Existing orphan digital-twin URLs

The 20+ already-live URLs (ROI calculator, readiness quiz, vendor comparison, API 510/570/580 mapping, etc.) get a cleanup pass:
- Each linked from the pillar page in a "Tools & Resources" section
- Each gets schema markup if missing
- Each gets a contextual link to one cluster page and one vertical hub
- The vendor comparison page gets a fresh comparison table including Hexagon, Bentley iTwin, AVEVA, Siemens, Akselos with Atlantis row showing the NDT-overlay differentiator

---

## 7. E-E-A-T Strategy

Google's E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) is the largest unforced rest of value sitting on the table.

### 7.1 Experience

- Author boxes on every cluster page and vertical hub page, with named ASNT Level III certificate holders, years in field, methods certified
- Project-by-project case studies with named facility, asset, scope, and (where releasable) outcome metrics
- Photos of actual scan + inspection work in the field (LIDAR rig on a refinery deck, technician operating PAUT scanner, etc.)

### 7.2 Expertise

- ASNT Level III credentialing block on the homepage above the fold
- Linked to certificate registry verification where ASNT permits
- Method-specific credentials (UT III, RT III, MT III, PT III, ET III, AE III) called out individually

### 7.3 Authoritativeness

- Regulator code coverage matrix on the homepage (visual grid: API / ASME / ADNOC / Aramco / ABS / DNV / MIL-STD)
- Speaking / publication record (ASNT conference talks, journal articles, white papers — converted to a `/insights/` library)
- Industry certifications page (`/certifications/`) listing every standards body Atlantis is accredited under

### 7.4 Trustworthiness

- Real `/contact` page with phone, named addresses for USA / India / Middle East offices, working hours, named operations leads
- Customer logo wall (only those with permission)
- Privacy policy + terms updated, dated, accessible from every page
- HTTPS + valid cert (already in place)
- Contact form working — *protected by the contact-form regression rule per memory*

---

## 8. 90-Day Execution Sequence

### Week 1 — On-page emergency fixes (no architecture changes)

| # | Task | Owner | Deliverable |
|---|---|---|---|
| 1 | Rewrite homepage H1 + meta description | Anoop | New H1: "Industrial Digital Twins, NDT and Software" or similar. Meta: 155 char hero pitch with tagline. |
| 2 | Add Organization + WebSite schema to homepage | Anoop | JSON-LD block in `<head>` |
| 3 | Fix `/digital-twins` H1 (remove inherited "Excellence in NDT…") | Anoop | Component override on this route |
| 4 | Add hero rewrite to `/digital-twins` — surface LIDAR + IoT + AI + NDT-overlay above the fold | Anoop | New hero section + 4 capability cards |
| 5 | Ship Tier 1-4 ERP expansion (the 187 URLs) with the catch-all 404 fix | Anoop | DEPLOY-ONE-COMMAND.md sequence |
| 6 | Verify contact form not broken by deploy (mandatory regression) | Anoop | Test submission + email arrival confirmation |

### Weeks 2-4 — Architecture build

| # | Task | Deliverable |
|---|---|---|
| 7 | Build pillar `/digital-twins` rewrite (sections 1-9 from §6.1) | Replaces existing thin page |
| 8 | Build 4 cluster pages (LIDAR, IoT, AI, NDT-overlay) | 4 new URLs, full schema, cross-linked |
| 9 | Build 4 vertical hub pages (O&G, Maritime, Defense, Aerospace) | 4 new URLs |
| 10 | Build dynamic `DigitalTwinCityPage.tsx` (mirror of ERPSoftwareCityPage) | One component, 120 cities × N langs |
| 11 | Add 120 `/digital-twin-{city}` routes + 60+ language alternates to App.tsx | Route patch |
| 12 | Extend prerender + sitemap pipeline to cover new URLs | ~370 new URLs in sitemap |
| 13 | Cross-link all `/digital-twin-{city}` ↔ `/ndt-erp-{city}` pages | Internal link block on each |
| 14 | Cleanup pass on 20+ orphan digital-twin URLs (link from pillar, add schema) | Each URL gets ≥3 internal inbound links |
| 15 | Submit new URLs to GSC via 10-account multi-account script (~370 new URLs ≈ 1 day at 2K cap, well under) | `node scripts/gsc-submit-multi-account.mjs` |

### Weeks 5-8 — Authority + content depth

| # | Task | Deliverable |
|---|---|---|
| 16 | Author block + ASNT Level III bios on every cluster + vertical page | 8 author profiles, JSON-LD `Person` schema |
| 17 | First 4 case studies (1 refinery, 1 FPSO, 1 LNG, 1 aerospace MRO) | 4 long-form `/case-studies/{slug}` pages |
| 18 | Insights library — port existing white papers / talks into `/insights/` | ~20 articles, FAQPage where applicable |
| 19 | Regulator code matrix component on homepage | Visual grid + linked to per-code methodology pages |
| 20 | Customer logo wall (whoever can be cleared) | Hero section addition |
| 21 | Translate the 4 cluster pages to ES, AR (priority Gulf market) | 8 new language URLs |

### Weeks 9-12 — Off-page + measurement

| # | Task | Deliverable |
|---|---|---|
| 22 | Outreach — guest posts on ASNT, AWS Industrial blog, IPC, AICHE | 4-6 high-DR backlinks |
| 23 | LinkedIn long-form content sequence (Anoop personal brand → corporate) | 8 posts, 1/week, each linking a cluster page |
| 24 | Podcast appearances (Oil & Gas Energy Podcast, NDT Outlook) | 2-3 appearances |
| 25 | Set up GSC Performance Report monitoring for the 5 wedge queries | Weekly report — track impressions, position |
| 26 | Set up rank tracking (Ahrefs / SEMrush / serpapi) on 30 priority queries | Dashboard |
| 27 | Quarterly content review — bottom-decile pages get content expansion | Performance-driven prioritization |

### Day 90 — Success Criteria

| Metric | Baseline | Target |
|---|---|---|
| Homepage rank for "industrial digital twin solutions" | not in top 100 | top 20 |
| Rank for "NDT data overlay on digital twin" | n/a | top 3 |
| Rank for "LIDAR digital twin refinery" | n/a | top 5 |
| Rank for "FPSO digital twin inspection" | n/a | top 5 |
| Indexed URLs (atlantisndt.com site:) | ~2,476 | ~2,800 (with 80%+ of new URLs indexed) |
| Organic clicks (GSC, prior 28 days) | baseline week 1 | +60% by day 90 |
| Branded query CTR | baseline | +25% (better SERP titles + meta) |

---

## 9. Risks + Guardrails

1. **Contact form regression** — every change to the `<App />` route tree, `vercel.json`, or build pipeline must be followed by a contact-form smoke test before merging to main. *Hard rule per memory.*
2. **Don't break ERP city pages currently in flight** — the Digital Twin rebuild runs *after* the 187-URL ERP expansion is shipped and indexed. Sequence matters.
3. **Don't cannibalize** — `/digital-twin-{city}` and `/ndt-erp-{city}` are intentionally parallel. Each has a unique primary intent (digital twin vs. ERP software). Use distinct H1s, distinct primary CTAs, distinct schema (`SoftwareApplication.applicationSubCategory`).
4. **Skill skip risk** — competitors will react if the wedge works. Keep the NDT-overlay page substantially better than anything they ship in response (3,500+ words, real screenshots, method-by-method). Update quarterly.
5. **Translation drift** — AR + ES translations must preserve technical anchors (SAP PM, IBM Maximo, API 510, ADNOC COP) untranslated. Existing translation pipeline already handles this for ERP pages; extend with the same guards.
6. **Indexing API quota** — 2,000/day across 10 SAs is enough for the full new URL drop. Always run `--dry-run` first to gate-check; never submit to URLs that fail the SPA-fallback detector.

---

## 10. Open Questions for Anoop

1. **Customer permissions** — which named customers can appear on the homepage logo wall and as case-study subjects? Top priority: 1 refinery (Aramco / ADNOC / Reliance / Pertamina), 1 FPSO operator (Petrobras / Modec / SBM), 1 aerospace MRO.
2. **Dashboard screenshot release** — is there a sanitized version of the live sensor dashboard that can be shown publicly? This is the single highest-converting visual asset for the NDT-overlay wedge page.
3. **ASNT Level III holder count** — how many active Level IIIs are on the team, and across which methods? Drives the authority block sizing.
4. **Office addresses for LocalBusiness schema** — confirm USA / India / Middle East office street addresses + phone numbers for trust-signal schema.
5. **Pricing exposure** — does Atlantis publish list pricing or stay behind "request a quote"? Affects whether to add `Offer` / `PriceSpecification` schema.

---

## 11. Files to Build Next (in execution order)

1. Homepage rewrite component (`/src/pages/Index.tsx` or equivalent) — H1 + meta + schema + hero
2. `/digital-twins` pillar page rewrite (`/src/pages/DigitalTwinsPillar.tsx`)
3. 4 cluster pages (`/src/pages/DigitalTwinsLidar.tsx`, `DigitalTwinsIot.tsx`, `DigitalTwinsAi.tsx`, `DigitalTwinsNdtOverlay.tsx`)
4. 4 vertical hubs (`/src/pages/DigitalTwinsOilGas.tsx`, etc.)
5. Dynamic `/src/pages/DigitalTwinCityPage.tsx` (mirror of ERPSoftwareCityPage)
6. Routes patch — extend `app-routes-patch.tsx` with the new tree
7. `/src/data/digital-twin-cities.json` — same 120 cities, but with vertical tags + digital-twin-specific copy fields
8. Updated `prerender.mjs` URL list + `build-sitemap.mjs` static routes
9. Author profile data (`/src/data/asnt-level-iii-authors.json`)
10. First case study template (`/src/pages/CaseStudyTemplate.tsx`)

---

**End of audit.** When you're ready to execute, the next deliverable I should build is the homepage hero rewrite (component + H1/meta/schema patch) — the single highest-leverage 30-minute change on the entire site.
