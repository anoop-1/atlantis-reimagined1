# Consulting Product SEO — Competitive & Keyword Analysis
**Date:** 2026-09-19 · **Scope:** `/consulting` + `/consulting/ndt-consulting-{city}` family (172 URLs with data) · **GSC window:** 2026-06-18 → 2026-09-16 (90d) · **Property:** atlantisndt.com, service account pull

## Methodology note
GSC's `page contains '/consulting'` filter pulled 172 pages / 200 queries reliably on single-dimension requests. Combining `country` with the page filter suppressed ~59% of impressions (2,372 of 5,718) due to GSC's privacy thresholding — consistent with the known `country+page` suppression issue on this property. **Geo splits below therefore use content-based inference** (each `/consulting/ndt-consulting-{slug}` page is definitionally tied to one country via its slug, per `prerender.mjs`'s `cityCountryMap`), which is exhaustive and not subject to the same suppression. Also note: only 7 of 200 disclosed queries carried a visible click — GSC anonymizes low-volume query text, so most of the 89 total clicks come from an undisclosed long tail, not the named queries below.

## 1. Current state

### Headline volume
**89 clicks / 5,718 impressions / 1.56% CTR over 90 days** across the entire consulting page family (172 URLs). That is under 1 click/day for the whole product line. This is a volume problem before it is anything else.

### Where the impressions sit (position distribution, all 172 pages)
| Position band | Pages | Impressions | Share |
|---|---|---|---|
| 1–10 | 89 | 1,526 | 26.7% |
| 11–20 | 30 | 743 | 13.0% |
| 21–40 | 24 | 1,826 | 31.9% |
| 41+ | 29 | 1,623 | 28.4% |

60% of impressions land at position 21+, where CTR is effectively zero. Page count skews toward pos 1–10 (89 of 172 pages) because dozens of ultra-narrow, near-zero-volume long-tail pages rank #1–10 for queries nobody searches — the SEO mechanics work; the addressable terms don't have volume.

### The 4 core buyer terms are buried
| Query | Impressions | Clicks | Position |
|---|---|---|---|
| asnt level iii consulting | 401 | 0 | 63.4 |
| ndt level 3 consulting services | 269 | 0 | 74.4 |
| ndt consulting | 260 | 0 | 58.9 |
| ndt level 3 consultant | 242 | 0 | 69.5 |

These 4 terms alone are 1,172 impressions (20.5% of the family total) — real, recurring buyer demand for the exact product Atlantis sells — sitting on page 6–8. Zero clicks. This is the single highest-leverage fix available: moving these from pos ~65 to pos ~10 would likely do more for the product than any city-page expansion.

### Job-seeker vs buyer intent — the hypothesis does NOT hold
Classified all 200 disclosed queries by regex signal:
- **Job-seeker/training signal** ("near me", "jobs", "schools", "course", "career advancement", "study references"): **12 queries, ~17 impressions total — 0.3% of family impressions.** Examples: "ndt training near me" (7 impr), "ndt level iii jobs" (1 impr), "non destructive testing schools near me" (1 impr).
- **Explicit buyer signal** ("consult-", "services", "company", "audit", "program", "compliance", "outsourced", "hire", RFP-style language): **78 queries, 1,662 impressions (29.1%).**
- **Ambiguous/technical-compliance** (110 queries, remainder of volume): dominated by hyper-specific B2B procurement/compliance research — NAVSEA Tech Pub 271, IACS UR Z17, NADCAP/AC7114, AS9100/9110, OSHA 1910.119(j) mechanical integrity, API 579/653/510 specifics, and two long natural-language RFP-style questions ("API 510 pressure vessel inspector versus a national board NBIC commissioned inspector... which is more appropriate to specify in our RFPs" — 32 impr, pos 58.5; "do we accept ASNT NDT Level III in lieu of API QUTE for UT-related scopes on our turnaround contracts" — 19 impr, pos 46.7). These read as enterprise engineers/procurement staff doing due diligence, not job seekers.
- **Noise**: "atlantis ndt" (127 impr, branded), "irisndt corpus christi" (59 impr — a competitor's brand name misfiring onto Atlantis's Corpus Christi page), "site:atlantisndt.com" (72 impr, technical operator).

**Verdict:** job-seeker leakage is real but tiny (0.3% of impressions) and is not the reason clicks are low. The problem is ranking depth on high-volume buyer terms, not audience mismatch. One caveat: the *separate* `/ndt-consulting-{state}` page family (38 US state pages, outside this task's defined `/consulting/*` scope but adjacent and cannibalizing the same queries) explicitly blends training-exam language ("ASNT Level I, II, and III certification... 95% first-time pass rate") into consulting copy — that family does carry job-seeker contamination and should be split if it's ever revisited.

### Geo tiers (content-inferred, 71 of 106 city pages have any data)
| Tier | Pages w/ data | Impressions | Clicks | CTR |
|---|---|---|---|---|
| USA (primary) | 21 | 1,254 | 12 | 0.96% |
| Canada/Europe/Australia-NZ (secondary) | 17 | 505 | 12 | 2.38% |
| India/Middle East (tertiary) | 13 | 459 | 17 | 3.70% |
| Beyond priority (Asia/LatAm/Africa) | 20 | 605 | 12 | 2.0% |

**The stated priority order is inverted in practice.** Tertiary-tier pages convert almost 4x better than primary-tier USA pages. Specific evidence:
- **Houston** (company HQ, primary market) — 131 impressions, **0 clicks, position 66.3.**
- **Corpus Christi** (best US volume) — 266 impressions, position 33.2 — closest US page to page-1, still not there.
- **Abu Dhabi** (tertiary) — 66 impressions, **5 clicks, 7.58% CTR, position 8.7** — the best-performing city page in the entire dataset.
- **`/consulting-usa`** (a separate regional hub route) — 31 impressions, **position 92.7**, effectively invisible.
- **`/consulting-me`** (Middle East hub) — 14 impressions, position 15.6 — 6x better positioned than the USA hub.
- **Calgary** (secondary) — 172 impressions, 4 clicks, position 26.9 — the strongest non-US winnable target.

### Topic/vertical pages quietly outperform both city pages and the hub
78 non-city "topic" pages under `/consulting/*` (aviation-ndt-consulting, navsea-ndt-requirements-shipyard, faa-part-145-repair-station-ndt, iacs-service-supplier-approval, nuclear-ndt-consulting-pittsburgh, level-iii-method-scope-limitations, etc.) deliver **2,101 impressions (36.8%) and 27 clicks (30.3%)** — comparable in aggregate to the 71 city pages (2,823 impr / 53 clicks) — while individually ranking far better: `level-iii-method-scope-limitations` pos 3.8, `navsea-ndt-requirements-shipyard` pos 5.9, `aviation-ndt-consulting` pos 10.0 at 3.61% CTR, `iacs-service-supplier-approval` pos 6.1. Compare to the `/consulting` hub itself: 687 impressions at **position 21.7** for the site's single most important consulting term.

### Saturation signal
Of 106 possible `/consulting/ndt-consulting-{city}` pages (91 international + 15 "new US city" pages), only 71 registered any impressions in 90 days — **roughly a third get zero search demand at all.** A further 22 hyper-granular refinery-town pages (Khurais, Sohar, Pengerang, Cilacap, Duqm, Manama, Fujairah, Ruwais, Sharjah, Shaybah, Khobar, Muscat, Port Arthur, Torrance, Fort Saskatchewan, Chalmette, Woods Cross, Odessa-TX, Eureka-CA, Port Hedland, etc.) combine for just 107 impressions (1.9% of family total) — consistent with the pSEO yield-saturation pattern already documented for this site. Two of these are trailing-slash duplicates of existing canonical URLs (`ndt-consulting-colorado-springs/`, `ndt-consulting-lake-charles/`) splitting authority from their real page.

## 2. Competitive gaps

Three real tiers of competitor were found via search:

**Tier A — global certification-brand giants** (trust comes from the brand itself): **TÜV Rheinland** ("NDT Consultancy Services US" — written-practice review, Level III accreditation across techniques, plant-life-extension and FFS support), **Bureau Veritas North America** ("NDT Training & Level III Consulting"), **Applus+** (a dedicated "Level 3 Consulting Services US" landing page). None publish pricing; all lean entirely on institutional brand recognition rather than named-consultant credibility.

**Tier B — large multi-service asset-integrity/NDE firms**: **Mistras Group** (API-certified inspectors across 510/570/653/571/577/580/936/1169, and publicizes named enterprise deals — e.g. a public press release naming INEOS Group for mechanical-integrity/RBI software), **Acuren** (RBI per API 580/581 bundled with broader NDE/engineering/rope-access), **Applus+ RTD**. These win on scale and documented, *named* client wins — something Atlantis's pages currently have zero of.

**Tier C — boutique/independent Level III specialists (closest peers to Atlantis's actual size)**: **Hellier NDT** — runs a named, branded "AIOA Level III Services Program" (Authorized Independent Outside Agency) with a dedicated PDF explaining the offer and a published-fee discount structure for enrolled clients; **TechKnowServ Corporation**; **Applied Technical Services (ATS Labs)** — dedicated "ASNT Level III Consulting" page; **NDTCS**, **Sound NDT Solutions**, **NDT Training Center**, **NDT Institute**, **iFluids** (RBI/API 580-581 FFS specialist boutique).

**What they do that Atlantis's pages don't:**
1. **Branding the offer as a named program**, not a generic city page (Hellier's "AIOA Level III Services Program" is a product name you can search and remember; Atlantis has 106 near-identical city pages but no single named flagship offer).
2. **Named, public case studies** (Mistras/INEOS). Atlantis's consulting pages currently show zero named clients or projects anywhere in the family.
3. **Institutional trust via accreditation brand** (TÜV, Bureau Veritas) — a lever Atlantis structurally cannot pull as an independent shop, which makes personal-credential and responsiveness trust signals more important, not less.

**What Atlantis's pages already do better than most competitors found:** the rich city-page copy explicitly promises "on-site mobilisation 24–72h," "24-hour turnaround" on procedure sign-off, and names the actual Level III (Anoop Rayavarapu, ASNT Level III multi-method, API 653, ISO 9001 Lead Auditor) — none of the competitor pages surfaced in search show a named individual credential or a numeric SLA promise on their public marketing pages. This is a real, underused differentiator that isn't being leveraged in titles/meta or above-the-fold — it's buried in body copy on pages nobody reaches (pos 21–95).

**Two flags worth surfacing even though this is a research task (no edits made):**
- Every one of the ~106 `/consulting/ndt-consulting-{city}` pages auto-injects an identical `LocalBusiness`/`ProfessionalService` schema block with `"aggregateRating": {"ratingValue": "4.9", "reviewCount": "127"}` — the exact same number on every single page, not tied to any visible review platform. This reads as fabricated to both users and Google's review-schema spam checks, and is the same category of issue the site did a cleanup pass on 2026-09-10.
- `/consulting/ndt-consulting-level-iii` states "*Independent ASNT Level III consulting typically runs 1,500 to 3,500 USD per day*" — this is the only page in the family that violates the standing no-pricing rule (every city page correctly says "Atlantis NDT publishes no pricing").

## 3. Prioritized recommendations

1. **Fix ranking on the 4 core head terms first.** "asnt level iii consulting," "ndt level 3 consulting services," "ndt consulting," "ndt level 3 consultant" = 1,172 impressions/90d at pos 59–74, zero clicks. The copy is already buyer-framed and detailed — this is an authority/internal-linking/backlink gap, not a content gap. Concentrate links (internal nav + any outreach) on `/consulting` and `/consulting/ndt-consulting-level-iii`, the two pages built to rank for these terms.
2. **Fix the USA-priority inversion.** `/consulting-usa` (pos 92.7) and Houston — the HQ market — (pos 66.3, 0 clicks) are the worst-positioned geo pages in the entire family, while `/consulting-me` (pos 15.6) and Abu Dhabi (pos 8.7, 7.58% CTR) outperform them by 5–8x. Per the stated USA-first priority, these two pages are the most out-of-line-with-strategy assets on the site and should get the next authority/content pass, using the Abu Dhabi and Oman pages (pos 8.7–9.7) as the internal template for what's already working.
3. **Build more topic/vertical pages, not more cities.** 78 topic pages already deliver comparable volume (36.8% of impressions) to 71 city pages at far better average position (single digits to teens vs. 20s–90s for city/hub pages). High-value gaps to fill next, matched to the USA-first priority: pipeline-integrity RBI, refinery-turnaround Level III staffing, midstream API 653 program audits — same pattern as the aviation/maritime/nuclear pages that already rank pos 4–11.
4. **Stop expanding city coverage; prune the dead weight.** ~35 of 106 city pages get zero impressions in 90 days; 22 hyper-granular refinery-town pages produce 1.9% of family impressions combined. Consolidate or noindex the lowest-value micro-city pages and fix the two trailing-slash duplicate URLs before adding any new geography.
5. **Job-seeker targeting does not need a pivot.** Only 0.3% of impressions carry job-seeker signal. Leave query targeting as-is for the `/consulting/*` family. The one real leak is the separate `/ndt-consulting-{state}` page family (38 pages, different URL pattern) that explicitly mixes "95% first-time pass rate" exam language into consulting copy — worth a targeted split in a future pass, not urgent for this family.
6. **Replace the fabricated 4.9/127-review schema** across all city pages with real, verifiable trust signals — actual certification numbers, one or two named projects/clients, and promote the existing 24–72h mobilization / 24-hour turnaround promise into titles or above-the-fold copy, since no competitor found in this search publishes a comparable numeric SLA.
7. **Remove the per-day pricing figure** on `/consulting/ndt-consulting-level-iii` — it is the one page in the family breaking the site-wide no-pricing rule, and none of the Tier A/B/C competitors researched publish day rates either.

Combined, items 1–2 target the highest-volume, most strategically important gap (USA head terms and HQ market both currently invisible); items 3–4 redirect the page-production engine toward the content type already proven to rank; items 5–7 are trust/compliance fixes that cost little and remove real liabilities before the next content push.
