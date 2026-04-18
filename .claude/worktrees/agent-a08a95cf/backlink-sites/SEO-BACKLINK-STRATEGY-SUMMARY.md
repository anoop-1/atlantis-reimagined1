# Atlantis NDT - SEO Backlink Strategy Summary
## Date: March 3, 2026

---

## Current Performance (GSC Data: Jan 28 - Feb 25, 2026)

| Metric | Value |
|--------|-------|
| Total Clicks | 88 (avg 3.1/day) |
| Total Impressions | 8,927 |
| Average CTR | 0.99% |
| Average Position | 14.9 |
| Pages with Traffic | 259 |
| Unique Queries | 525 |

### Top Performing Pages
| Page | Clicks | Impressions | CTR | Position |
|------|--------|-------------|-----|----------|
| Homepage (/) | 19 | 200 | 9.5% | 6.6 |
| /ndt-training-dubai | 5 | 200 | 2.5% | 8.2 |
| /training-india | 4 | 61 | 6.6% | 32.3 |
| /radiographic-testing-chennai | 3 | 16 | 18.8% | 5.3 |
| /resources | 3 | 45 | 6.7% | 5.5 |

### High-Impression / Low-Click Pages (Backlink Priority Targets)
| Page | Impressions | Clicks | Position | Action Needed |
|------|-------------|--------|----------|---------------|
| /blog/api-653-tank-inspection-guide | 1,271 | 1 | 13.1 | Push to page 1 |
| /blog/eddy-current-testing | 843 | 0 | 45.7 | Needs authority boost |
| /blog/ut-vs-rt-comparison | 421 | 2 | 6.5 | Backlinks to improve CTR |
| /asnt-certification | 337 | 0 | 10.7 | Push to top 5 |
| /api-653-certification | 254 | 0 | 42.3 | Needs major backlink push |
| /api-570-certification | 213 | 1 | 40.5 | Needs major backlink push |
| /blog/magnetic-particle-testing | 212 | 1 | 20.1 | Push to page 1 |

---

## Satellite Sites Deployed

### Site #1: NDT Knowledge Hub
- **URL:** https://ndt-knowledge-hub.vercel.app
- **Focus:** NDT methods, certifications, career guides, glossary
- **Pages:** 21
- **Primary backlink targets:** Training, consulting, certification pages

### Site #2: Industrial Inspection Resources
- **URL:** https://industrial-inspection-resources.vercel.app
- **Focus:** Industry-specific inspection (O&G, aerospace, power gen), standards, technology
- **Pages:** 13
- **Primary backlink targets:** Consulting, digital twins, ERP

### Site #3: Asset Integrity Digital Hub
- **URL:** https://asset-integrity-hub.vercel.app
- **Focus:** Digital twins, ERP solutions, NDT software, NDTConnect
- **Pages:** 12
- **Primary backlink targets:** ERP, NDTConnect, intelligent reporting, digital twins

### Site #4: NDT Training Academy
- **URL:** https://ndt-training-academy.vercel.app
- **Focus:** Training programs, certification prep, regional training
- **Pages:** 13
- **Primary backlink targets:** Training (USA, India, ME), certifications

### Site #5: NDT Careers Portal
- **URL:** https://ndt-careers-portal.vercel.app
- **Focus:** NDT careers, salary data, job markets, consulting guide
- **Pages:** 13
- **Primary backlink targets:** Consulting (global + location pages), salary, career blog

---

## Total Backlink Inventory (328 total links to atlantisndt.com)

### By Service Line
| Service Line | Backlinks | Target URLs |
|-------------|-----------|-------------|
| Training | 89 | /training, /training-usa, /training-india, /training-me, /ndt-training-dubai, etc. |
| Consulting | 60 | /consulting, /consulting/ndt-consulting-houston, -dubai, -singapore, -saudi-arabia, etc. |
| NDT ERP | 28 | /ndt-erp-solution |
| Intelligent Reporting | 24 | /intelligent-reporting-software |
| NDTConnect | 20 | /ndt-connect-platform |
| Digital Twins | 19 | /digital-twins, /digital-twins-oil-gas-assets |
| Main Domain | 16 | atlantisndt.com |
| Certifications | 18 | /asnt-certification, /api-570-certification, /api-653-certification, /api-510-certification |
| Blog Posts | 15 | Various blog articles |
| Other Pages | 39 | Location pages, method pages, salary, contact |

### By Satellite Site
| Site | Total Backlinks |
|------|----------------|
| NDT Knowledge Hub | ~65 |
| Industrial Inspection Resources | ~55 |
| Asset Integrity Hub | ~70 |
| NDT Training Academy | ~75 |
| NDT Careers Portal | ~63 |

---

## Indexing Status

- All 5 sitemaps submitted to Google via sitemap ping
- All 5 sitemaps submitted to Bing
- 72 total URLs across all satellite sites
- All pages returning HTTP 200
- robots.txt and sitemap.xml verified on all sites

---

## Next Steps (Manual Actions Required)

### Immediate (This Week)
1. **Add satellite sites to Google Search Console:**
   - Go to https://search.google.com/search-console
   - Add each Vercel URL as a property (URL prefix method)
   - Verify via HTML tag or DNS
   - Submit sitemap.xml for each

2. **Add satellite sites to Bing Webmaster Tools:**
   - Go to https://www.bing.com/webmasters
   - Add each site and submit sitemaps

3. **Git commit the backlink-sites folder:**
   - `cd backlink-sites && git init && git add . && git commit -m "Add 5 backlink satellite sites"`
   - Or add to the main atlantis-reimagined1 repo

### Short Term (Next 2 Weeks)
4. **Monitor indexing progress** in GSC for each satellite site
5. **Request indexing** for key pages via GSC URL Inspection tool
6. **Add internal cross-links** between satellite sites for link juice flow

### Ongoing
7. **Add new content monthly** to keep sites fresh and crawled
8. **Monitor GSC rankings** for target keywords
9. **Track referral traffic** from satellite sites in GA4
10. **Consider custom domains** for satellite sites (improves trust signals vs vercel.app)

---

## Technical Details

- **Framework:** Next.js 14 with App Router (SSR/SSG)
- **Hosting:** Vercel (free tier, 5 separate projects)
- **Styling:** Tailwind CSS
- **SEO:** Server-side metadata, JSON-LD structured data, XML sitemaps, robots.txt
- **Content:** 800-1500+ words per page, genuine educational NDT content
- **All files located at:** `backlink-sites/` in the atlantis-reimagined1 repo
