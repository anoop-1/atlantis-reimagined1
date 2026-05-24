# Vercel Deployment Configuration Setup

## Overview
All 5 satellite sites have been configured for deployment as separate Vercel projects from the same git repository using Vercel's "Root Directory" feature.

## Sites Configured
1. ndt-knowledge-hub → ndt-knowledge-hub.vercel.app
2. industrial-inspection-resources → industrial-inspection-resources.vercel.app
3. asset-integrity-hub → asset-integrity-hub.vercel.app
4. ndt-training-academy → ndt-training-academy.vercel.app
5. ndt-careers-portal → ndt-careers-portal.vercel.app

## Files Created for Each Site

### 1. vercel.json
Configuration file for Vercel deployment with Next.js settings:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs"
}
```

**Location**: `{site-directory}/vercel.json`

### 2. public/robots.txt
Static robots.txt file for search engine crawlers:
- Allows all user agents to crawl the site
- References the dynamic XML sitemap at `/sitemap.xml`

**Location**: `{site-directory}/public/robots.txt`

### 3. src/app/sitemap.ts
Dynamic Next.js sitemap generator:
- Automatically generates XML sitemap at `/sitemap.xml`
- Uses environment variable `NEXT_PUBLIC_SITE_URL` for base URL
- Falls back to placeholder URL if env var not set
- Includes all routes discovered in each site
- Priority levels:
  - Homepage: 1.0
  - Section pages: 0.8
  - Content pages: 0.6
- Change frequency:
  - Homepage: monthly
  - Other pages: weekly
- Last modified date: Current date (dynamic)

**Location**: `{site-directory}/src/app/sitemap.ts`

### 4. src/app/robots.ts
Dynamic Next.js robots.txt generator:
- Outputs proper robots.txt format
- References the dynamic sitemap
- Uses environment variable `NEXT_PUBLIC_SITE_URL`

**Location**: `{site-directory}/src/app/robots.ts`

### 5. .env.example
Environment variables template:
```
NEXT_PUBLIC_SITE_URL=https://your-site.vercel.app
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Location**: `{site-directory}/.env.example`

## Routes per Site

### ndt-knowledge-hub (22 routes)
- / (homepage)
- /certifications, /certifications/api-510, /certifications/api-570, /certifications/api-653, /certifications/asnt-level-iii
- /glossary
- /guides, /guides/ndt-career-path, /guides/ndt-salary-guide
- /methods, /methods/eddy-current-testing, /methods/liquid-penetrant-testing, /methods/magnetic-particle-testing, /methods/radiographic-testing, /methods/ultrasonic-testing, /methods/visual-testing
- /resources
- /software-reviews, /software-reviews/digital-twin-technology, /software-reviews/ndt-erp-systems

### industrial-inspection-resources (14 routes)
- / (homepage)
- /case-studies
- /industries, /industries/aerospace-inspection, /industries/oil-gas-inspection, /industries/power-generation-inspection
- /standards, /standards/api-inspection-codes, /standards/asme-codes-ndt
- /technology, /technology/digital-twins-asset-management, /technology/erp-for-inspection-companies, /technology/ndt-reporting-software

### asset-integrity-hub (13 routes)
- / (homepage)
- /blog, /blog/digital-twin-roi-calculator, /blog/erp-vs-spreadsheets-ndt
- /digital-twins, /digital-twins/oil-gas, /digital-twins/predictive-maintenance
- /erp-solutions, /erp-solutions/implementation-guide
- /ndt-software, /ndt-software/ndtconnect-review, /ndt-software/reporting-tools

### ndt-training-academy (14 routes)
- / (homepage)
- /career
- /certifications, /certifications/api-exam-prep, /certifications/asnt-study-guide
- /regional, /regional/india, /regional/middle-east, /regional/usa
- /training, /training/mt-pt-training, /training/rt-training, /training/ut-training

### ndt-careers-portal (14 routes)
- / (homepage)
- /careers, /careers/level-iii-consultant, /careers/ndt-inspector
- /consulting-guide
- /job-markets, /job-markets/asia-pacific, /job-markets/houston, /job-markets/middle-east
- /resources
- /salary, /salary/by-location, /salary/by-method

## Deployment Instructions

### Step 1: Set Up Environment Variables
For each site, create a `.env.local` file in the site directory:
```bash
cp {site-directory}/.env.example {site-directory}/.env.local
```

Then update the values:
- `NEXT_PUBLIC_SITE_URL`: Use the actual Vercel URL (or custom domain once assigned)
- `NEXT_PUBLIC_GA_ID`: Replace with actual Google Analytics ID

### Step 2: Create Vercel Projects
1. Go to https://vercel.com/new
2. Connect your git repository
3. For each site, create a new project with:
   - **Project Name**: Site name (e.g., ndt-knowledge-hub)
   - **Root Directory**: Set to the site directory (e.g., ndt-knowledge-hub)
   - **Framework**: Next.js (should auto-detect)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

### Step 3: Add Environment Variables
In each Vercel project's Settings:
1. Go to Settings > Environment Variables
2. Add the environment variables:
   - `NEXT_PUBLIC_SITE_URL`: Your deployed URL
   - `NEXT_PUBLIC_GA_ID`: Your GA tracking ID

### Step 4: Deploy
Push your repository to trigger automatic deployments, or manually trigger via Vercel dashboard.

## SEO Features

### Sitemap Generation
- Dynamic XML sitemaps at `/sitemap.xml`
- Uses Next.js MetadataRoute for proper formatting
- Includes all discoverable routes
- Proper priority and frequency values

### Robots.txt
- Static public version served directly
- Dynamic version generated by Next.js app
- Allows all crawlers
- References sitemap location

### Environment-Based URLs
- All URLs respect `NEXT_PUBLIC_SITE_URL` environment variable
- Falls back to placeholder URLs if not configured
- Ensures correct sitemap URLs across all deployments

## File Locations Summary

```
backlink-sites/
├── ndt-knowledge-hub/
│   ├── vercel.json
│   ├── public/robots.txt
│   ├── src/app/sitemap.ts
│   ├── src/app/robots.ts
│   └── .env.example
├── industrial-inspection-resources/
│   ├── vercel.json
│   ├── public/robots.txt
│   ├── src/app/sitemap.ts
│   ├── src/app/robots.ts
│   └── .env.example
├── asset-integrity-hub/
│   ├── vercel.json
│   ├── public/robots.txt
│   ├── src/app/sitemap.ts
│   ├── src/app/robots.ts
│   └── .env.example
├── ndt-training-academy/
│   ├── vercel.json
│   ├── public/robots.txt
│   ├── src/app/sitemap.ts
│   ├── src/app/robots.ts
│   └── .env.example
├── ndt-careers-portal/
│   ├── vercel.json
│   ├── public/robots.txt
│   ├── src/app/sitemap.ts
│   ├── src/app/robots.ts
│   └── .env.example
└── VERCEL_DEPLOYMENT_SETUP.md (this file)
```

## Notes
- All sitemaps automatically use the current date as the last modified date
- Sitemap change frequencies are optimized based on page type
- Priority values follow best practices (1.0 for homepage, 0.8 for sections, 0.6 for content)
- Each site has identical structure but customized routes based on content
