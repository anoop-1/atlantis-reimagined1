# Atlantis NDT — Comprehensive SEO Audit & Traffic Growth Plan
**Date:** March 21, 2026
**Website:** atlantisndt.com
**Platform:** Vercel (React SPA with pre-rendering)
**GSC Data Period:** Dec 6, 2025 – Mar 6, 2026 (90 days)

---

## EXECUTIVE SUMMARY

Atlantis NDT's website is technically well-built with 711+ pre-rendered pages, comprehensive structured data, and a solid programmatic SEO foundation. However, **GSC data reveals a critical gap: 23,567 impressions but only 181 clicks (0.77% CTR) over 90 days with an average position of 14.9.** The site is being shown but not clicked.

The biggest wins will come from: (1) fixing the CTR crisis on high-impression pages, (2) pushing "striking distance" keywords from page 2 to page 1, (3) improving content depth on the pages Google is already indexing, and (4) solving the massive 7.4MB image problem.

**Estimated traffic uplift from implementing all recommendations: 5-10x current traffic (from ~2 clicks/day to 15-25+ clicks/day) within 3-6 months.**

---

## 1. CRITICAL FINDINGS FROM GSC DATA

### Current Performance Snapshot
| Metric | Value | Assessment |
|--------|-------|------------|
| Total Clicks (90d) | 181 | Very low |
| Total Impressions (90d) | 23,567 | Decent — Google is crawling |
| Average CTR | 0.77% | Critically low (industry avg 3-5%) |
| Average Position | 14.9 | Page 2 average |
| Pages with traffic | 270 | Good coverage |
| Unique queries | 789 | Solid keyword breadth |

### The #1 Problem: CTR Crisis
Your site is appearing in search results but users aren't clicking. This is caused by:
- **Poor title tags in SERPs** — generic or truncated titles
- **Missing/weak meta descriptions** — Google generates snippets that don't compel clicks
- **Position 5-15 for most pages** — bottom of page 1 or top of page 2

### Top Revenue-Losing Pages (High Impressions, Near-Zero CTR)

| Page | Impressions | Clicks | CTR | Avg Position | Action Needed |
|------|-------------|--------|-----|--------------|---------------|
| /blog/eddy-current-testing | 3,226 | 1 | 0.0% | 63.1 | Content overhaul — position too low |
| /blog/api-653-tank-inspection-guide | 1,943 | 6 | 0.3% | 15.3 | **QUICK WIN** — push to page 1 |
| /blog/ultimate-guide-ndt-digital-twins | 1,382 | 0 | 0.0% | 5.0 | **URGENT** — position 5 but 0 clicks! Title/desc broken |
| /blog/digital-twins-ndt-guide | 1,061 | 0 | 0.0% | 5.7 | **URGENT** — cannibalized by above? |
| /blog/ut-vs-rt-comparison | 910 | 5 | 0.5% | 7.1 | Better title = easy 3x clicks |
| /asnt-certification | 754 | 3 | 0.4% | 10.0 | **QUICK WIN** — optimize title/desc |
| /blog/ndt-salary-guide | 696 | 0 | 0.0% | 5.9 | **URGENT** — 0 clicks at position 6! |
| /blog/ndt-career-top-choice | 689 | 1 | 0.1% | 5.7 | Cannibalization with salary guide |
| /training-me | 512 | 4 | 0.8% | 13.4 | Push to page 1 |
| /blog/digital-twins-reduce-refinery-turnaround | 471 | 2 | 0.4% | 6.5 | Better CTR optimization |

### Keyword Quick Wins (Position 4-20 with High Impressions)

| Query | Position | Impressions | Opportunity |
|-------|----------|-------------|-------------|
| ntd connect | 5.7 | 234 | Fix brand typo targeting |
| eddy current array + digital twin | 8.5 | 52 | Niche authority content |
| api 653 tank inspection | ~15 | 1,943 | Biggest single page opportunity |
| ndt level iii consulting | 25.4 | 134 | Core money keyword — needs page authority |
| ndt training in uae | 25.0 | 79 | Middle East training page needs work |

---

## 2. TECHNICAL SEO ISSUES

### CRITICAL: 7.4MB Factory Image
- **File:** `/public/factory.png` — 7.4MB uncompressed PNG
- **Impact:** Destroys mobile performance scores, increases bounce rate
- **Fix:** Convert to WebP (target <200KB), serve responsive sizes via `<picture>` element
- **Also:** `/public/background.png` (588KB) should be WebP (<80KB target)

### SPA Rendering + Pre-render Pipeline
Your pre-render script (`scripts/prerender.mjs`) injects meta tags into 711+ pages — this is good. However:
- **Issue:** The SEOHead component uses `useEffect()` (client-side) to set meta tags. If prerender fails or new pages are added without updating the script, Googlebot sees default/homepage meta tags.
- **Risk level:** Medium (mitigated by prerender, but fragile)
- **Recommendation:** Audit that every route in App.tsx (586 routes) has a corresponding entry in prerender.mjs. Currently there's a mismatch (586 routes vs 711 prerendered — the extra likely come from parameterized routes, but verify).

### Missing Hreflang Implementation
- The SEOHead component supports `hreflangLinks` prop, but **no page actually uses it**
- With content targeting USA, India, Middle East — this is a missed opportunity
- Google may treat your regional pages (/consulting-usa, /consulting-india, /consulting-me) as near-duplicate content
- **Fix:** Add hreflang tags to all regional page variants

### Sitemap Issues
- All 711 URLs use the **same lastmod date** (2026-03-01) — Google devalues sitemaps with uniform dates
- No sitemap index file for the scale of pages you have
- **Fix:** Generate dynamic lastmod based on actual content changes; split into sitemap index with category-based sub-sitemaps (blog, consulting, training, locations)

### Canonical URL Concerns
- Canonical is auto-generated from `window.location.pathname` — this means if someone accesses via www or trailing slash variants, the canonical may not normalize properly
- The prerender script does inject canonicals statically, which helps
- **Verify:** Test that `/consulting/` and `/consulting` both resolve to the same canonical

### Missing Security Headers for SEO
Your vercel.json has good security headers, but you're missing:
- `Content-Security-Policy` — not directly SEO, but affects trust signals
- `Strict-Transport-Security` — ensures HTTPS (important for rankings)

---

## 3. ON-PAGE SEO ISSUES

### Title Tag Problems
Several high-traffic pages appear to show the **homepage title** in SERPs ("Excellence in NDT Consulting & Training | Atlantis NDT") instead of their page-specific title. This is confirmed by WebFetch of `/consulting` and `/training` pages both returning the homepage H1 and title.

**Root cause:** The SPA serves the same `index.html` for all routes. If prerender injection fails or JS doesn't execute, Google sees the default homepage title.

**Fix priorities:**
1. Verify prerender output for top 20 pages by checking `dist/` folder HTML
2. Consider adding `<noscript>` fallback with page-specific content (already partially done)
3. Test with `curl -A Googlebot https://atlantisndt.com/consulting` to verify what bots actually see

### Meta Description Issues
- Consulting page description is 213 characters (exceeds 160-char Google display limit)
- Several pages have no meta description at all in the pre-rendered HTML
- Pages ranking position 5-10 with 0% CTR almost certainly have broken/missing descriptions

### Content Thin-ness on Key Pages
- The noscript/static fallback content in `index.html` is only ~800 words
- City-specific pages appear to use templated content with minimal uniqueness
- Blog pages are content-rich, but the main service pages (consulting, training) need more depth

### Heading Hierarchy
- Most pages have proper H1 → H2 hierarchy
- **Issue:** The static fallback H1 ("Excellence in NDT Consulting & Training | Atlantis NDT") is the same across all pages — this confuses Google if it's what gets indexed

---

## 4. CONTENT CANNIBALIZATION ISSUES

### Digital Twins Content Overlap
You have multiple pages competing for the same "digital twins NDT" keywords:
- `/blog/ultimate-guide-ndt-digital-twins-asset-integrity-2025` (1,382 imp, pos 5.0)
- `/blog/digital-twins-ndt-guide` (1,061 imp, pos 5.7)
- `/blog/digital-twins-oil-gas` (357 imp, pos 6.7)
- `/blog/digital-twins-reduce-refinery-turnaround-time` (471 imp, pos 6.5)
- `/blog/digital-twin-roadmap-oil-gas-companies-asset-integrity` (341 imp, pos 15.7)
- `/digital-twins` (service page)

**Result:** Google can't decide which page to rank, so none rank well and CTR is near-zero across all.

**Fix:** Consolidate into 2-3 distinct pages with clear keyword differentiation:
1. `/digital-twins` → Main service/commercial page (target: "digital twin NDT services")
2. `/blog/digital-twins-complete-guide` → Ultimate guide (consolidate the 2 guides)
3. `/blog/digital-twins-oil-gas-case-studies` → Industry-specific applications

### Career/Salary Content Overlap
- `/blog/ndt-salary-guide-2025` (696 imp, 0 clicks)
- `/blog/ndt-career-top-choice-2025` (689 imp, 1 click)
- `/blog/ndt-career-guide` (433 imp, 0 clicks)

These are cannibalizing each other. Merge into one definitive career page.

### Eddy Current Testing Overlap
- `/blog/eddy-current-testing` (3,226 imp, 1 click, pos 63 — too far back)
- `/eddy-current-testing-singapore` (59 imp, 2 clicks)
- Various other eddy current city pages

The main blog post is getting massive impressions but ranking on page 7. Needs major content upgrade and internal link authority.

---

## 5. PERFORMANCE & CORE WEB VITALS

### Known Optimizations Already Done (Good)
- React.lazy() code splitting on all 36+ page components
- IntersectionObserver for 3D model lazy loading
- Proper image lazy loading for below-fold content
- Critical asset preloading (logo)
- DNS prefetch for external resources
- Cache headers configured in vercel.json

### Still Needed

| Issue | Impact | Fix |
|-------|--------|-----|
| factory.png = 7.4MB | Severe LCP impact | Convert to WebP, max 200KB |
| background.png = 588KB | High LCP impact | Convert to WebP, max 80KB |
| No responsive images | Mobile wastes bandwidth | Add `<picture>` with srcset |
| 3D model files (.glb) in public/ | Massive initial page weight | Verify they're truly lazy loaded |
| Three.js bundle (~800KB+) | TBT/TTI impact | Dynamic import only on pages that use 3D |
| No font subsetting | FCP delay | Subset fonts to used characters |
| Google Analytics blocking render | FCP delay | Load gtag.js with `defer` instead of `async` |

### Bundle Size Concerns
With 107 dependencies including Three.js, GSAP, Framer Motion, Swiper, Recharts, and multiple Radix UI components — the JS bundle is likely 2-3MB+. Even with code splitting, the vendor chunk is probably heavy.

**Recommendation:** Run `npx vite-bundle-visualizer` to identify the heaviest chunks and consider:
- Moving Three.js to a separate chunk loaded only on /digital-twins
- Replacing Framer Motion with CSS animations for simple transitions
- Tree-shaking unused Radix UI components

---

## 6. LINK BUILDING & AUTHORITY

### Current State
- GSC shows very few external backlinks
- Competitors (NDT Consulting Group, Hellier NDT, TB3 NDT, TÜV Rheinland) have established domain authority
- The site is relatively new and lacks third-party trust signals

### Backlink Opportunities
1. **ASNT Industry Directory** — Get listed on asnt.org member/company pages
2. **Guest posts on NDT industry publications** — NDT.net, Inspectioneering.com, The NDT Technician
3. **Case study partnerships** — Co-author case studies with clients (refineries, aerospace companies)
4. **Industry event listings** — Submit to conference/event directories
5. **LinkedIn articles** — Cross-promote blog content from the company LinkedIn page
6. **API certification resources** — Get linked from API training resource pages
7. **University partnerships** — Engineering department NDT resource pages

---

## 7. PRIORITIZED ACTION PLAN

### Phase 1: Quick Wins (Week 1-2) — Estimated +50-100% traffic

1. **Fix titles & descriptions on top 10 pages by impressions**
   - `/blog/ultimate-guide-ndt-digital-twins` — This is position 5 with 1,382 impressions and 0 clicks. The title/description is clearly not rendering properly in SERPs.
   - `/blog/ndt-salary-guide-2025` — Position 6, 696 impressions, 0 clicks. Same issue.
   - All pages listed in the "Revenue-Losing Pages" table above.
   - **How:** Check prerender.mjs output for each page, fix meta tags, redeploy.

2. **Compress factory.png and background.png**
   - Convert to WebP format
   - factory.png: 7.4MB → target <200KB
   - background.png: 588KB → target <80KB

3. **Fix the "ntd connect" query** — 234 impressions for a brand typo. Ensure your NDT Connect page targets "ndt connect" correctly.

4. **Verify pre-rendered HTML** — `curl` the top 20 pages and confirm title/description are correct in the raw HTML.

### Phase 2: Content Consolidation (Week 2-4) — Estimated +100-200% traffic

5. **Merge digital twins content** — Consolidate 5 overlapping blog posts into 2-3 distinct, authoritative pages. Set up 301 redirects from deprecated URLs.

6. **Merge career/salary content** — Combine 3 overlapping career posts into one definitive resource.

7. **Upgrade eddy current testing content** — Your most-impressed page (3,226 impressions) is stuck at position 63. Needs a complete rewrite with 3,000+ words, diagrams, and internal links.

8. **Add FAQ schema to top 20 pages** — Capture People Also Ask boxes in SERPs.

### Phase 3: Technical Improvements (Week 3-6) — Estimated +30-50% traffic

9. **Implement hreflang tags** — Connect regional page variants properly.

10. **Dynamic sitemap generation** — Generate sitemap with accurate lastmod dates; split into sub-sitemaps.

11. **Bundle optimization** — Analyze and reduce JS payload, especially Three.js isolation.

12. **Add Strict-Transport-Security header** — HSTS for ranking boost.

13. **Implement responsive images** — `<picture>` elements with WebP + fallback.

### Phase 4: Authority Building (Ongoing) — Long-term 3-10x traffic

14. **Backlink outreach** — Target industry directories, publications, and partner sites.

15. **Publish 2-3 new blog posts per month** — Target high-volume keywords: "eddy current testing" (1,011 impressions already), "ultrasonic testing" (170 imp), "API 653" (113 imp), "API 570" (85 imp).

16. **Google Business Profile** — Ensure Houston and Hyderabad offices have optimized GBP listings.

17. **Schema enhancement** — Add Service, Course, and FAQ schema to all relevant pages.

---

## 8. WHAT'S WORKING WELL

- **Strong programmatic SEO foundation** — 586 routes covering cities, methods, and industries
- **Comprehensive structured data** — Organization, LocalBusiness, BreadcrumbList, Course schemas
- **Good redirect handling** — WordPress migration redirects are properly configured
- **Code splitting** — React.lazy() on all page components
- **Security headers** — Properly configured in vercel.json
- **Pre-render pipeline** — Generates static HTML for SEO crawlers
- **Homepage performance** — Position 6 average with 8.5% CTR (best performing page)
- **Dubai training page** — 11 clicks, 327 impressions, 3.4% CTR — proves the model works

---

## BOTTOM LINE

Your site has the technical infrastructure to rank. The problem is primarily **CTR and content quality**, not technical SEO. The pre-render pipeline is good but needs verification that it's actually working for all pages. The biggest immediate wins are:

1. **Fix broken meta tags on your top 10 pages** (free, 1-2 hours of work, potentially doubles traffic)
2. **Compress the 7.4MB image** (free, 10 minutes, improves Core Web Vitals)
3. **Resolve content cannibalization** (1-2 days of work, could 3x traffic from digital twins keywords alone)

The site is getting 23,567 impressions per quarter — the traffic is there waiting. You just need to give Google (and users) a reason to click.
