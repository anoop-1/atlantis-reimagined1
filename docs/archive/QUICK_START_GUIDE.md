# Quick Start Guide: Vercel Deployment Setup

## What Was Set Up

All 5 satellite sites now have complete Vercel deployment configuration including:
- Vercel build configuration (`vercel.json`)
- Dynamic XML sitemaps (`src/app/sitemap.ts`)
- Dynamic robots.txt (`src/app/robots.ts`)
- Static robots.txt (`public/robots.txt`)
- Environment variable templates (`.env.example`)

## File Locations

### ndt-knowledge-hub
```
ndt-knowledge-hub/
├── vercel.json
├── .env.example
├── public/
│   └── robots.txt
└── src/app/
    ├── sitemap.ts
    └── robots.ts
```

### industrial-inspection-resources
```
industrial-inspection-resources/
├── vercel.json
├── .env.example
├── public/
│   └── robots.txt
└── src/app/
    ├── sitemap.ts
    └── robots.ts
```

### asset-integrity-hub
```
asset-integrity-hub/
├── vercel.json
├── .env.example
├── public/
│   └── robots.txt
└── src/app/
    ├── sitemap.ts
    └── robots.ts
```

### ndt-training-academy
```
ndt-training-academy/
├── vercel.json
├── .env.example
├── public/
│   └── robots.txt
└── src/app/
    ├── sitemap.ts
    └── robots.ts
```

### ndt-careers-portal
```
ndt-careers-portal/
├── vercel.json
├── .env.example
├── public/
│   └── robots.txt
└── src/app/
    ├── sitemap.ts
    └── robots.ts
```

## How to Deploy

### 1. Local Testing (Optional)

Test that the build works:
```bash
cd ndt-knowledge-hub
npm run build
npm start
```

Visit `http://localhost:3000/sitemap.xml` and `http://localhost:3000/robots.txt` to verify they work.

### 2. Environment Configuration

Create `.env.local` in each site directory:
```bash
cd ndt-knowledge-hub
cp .env.example .env.local
```

Edit `.env.local` and update:
```
NEXT_PUBLIC_SITE_URL=https://ndt-knowledge-hub.vercel.app
NEXT_PUBLIC_GA_ID=G-YOUR_GA_ID
```

Repeat for other 4 sites.

### 3. Create Vercel Projects

Go to https://vercel.com/new and create 5 projects:

**For each project:**
1. Select your git repository
2. Project Name: `ndt-knowledge-hub` (or site name)
3. Framework Preset: Next.js
4. Root Directory: `ndt-knowledge-hub` (toggle "Root Directory" on and select folder)
5. Build Command: `npm run build`
6. Output Directory: `.next`
7. Click "Deploy"

### 4. Configure Environment Variables

For each Vercel project:
1. Go to Settings > Environment Variables
2. Add:
   - `NEXT_PUBLIC_SITE_URL`: The actual Vercel URL
   - `NEXT_PUBLIC_GA_ID`: Your Google Analytics ID
3. Save and redeploy

### 5. Verify Deployment

After deployment, verify:
- Sitemap: `https://site-name.vercel.app/sitemap.xml`
- Robots: `https://site-name.vercel.app/robots.txt`

Both should work immediately without additional configuration.

## What Each File Does

### vercel.json
Tells Vercel how to build your Next.js site. Standard configuration, no changes needed.

### public/robots.txt
Static file served by Vercel. Tells search engines:
- Allow all crawlers to access your site
- Where to find the dynamic sitemap

### src/app/sitemap.ts
Generates dynamic XML sitemap with all routes:
- Uses `NEXT_PUBLIC_SITE_URL` environment variable
- Fallback to placeholder URL if not set
- Includes all pages from your site
- Proper priority and change frequency

### src/app/robots.ts
Generates dynamic robots.txt:
- Uses `NEXT_PUBLIC_SITE_URL` environment variable
- References the sitemap
- Allows all crawlers

### .env.example
Template for environment variables. Copy to `.env.local` and update values.

## Routes in Each Site

### ndt-knowledge-hub (22 routes)
Homepage + 4 main sections:
- Certifications (5 routes)
- Guides (3 routes)
- Methods (7 routes)
- Resources
- Software Reviews (2 routes)
- Glossary

### industrial-inspection-resources (14 routes)
Homepage + 4 main sections:
- Case Studies
- Industries (3 routes)
- Standards (2 routes)
- Technology (3 routes)

### asset-integrity-hub (13 routes)
Homepage + 4 main sections:
- Blog (2 routes)
- Digital Twins (2 routes)
- ERP Solutions (1 route)
- NDT Software (2 routes)

### ndt-training-academy (14 routes)
Homepage + 4 main sections:
- Career
- Certifications (2 routes)
- Regional (3 routes)
- Training (3 routes)

### ndt-careers-portal (14 routes)
Homepage + 5 main sections:
- Careers (2 routes)
- Consulting Guide
- Job Markets (3 routes)
- Resources
- Salary (2 routes)

## Testing Your Sitemaps

### In Google Chrome:
1. Visit `https://site-name.vercel.app/sitemap.xml`
2. You should see XML-formatted sitemap
3. All URLs should start with your domain

### In Google Search Console:
1. Add your site to Google Search Console
2. Go to Sitemaps
3. Submit: `https://site-name.vercel.app/sitemap.xml`
4. Google will crawl and index your pages

### Robots.txt Testing:
1. Visit `https://site-name.vercel.app/robots.txt`
2. Should show proper robots.txt format
3. Should reference sitemap URL

## Troubleshooting

### Sitemap returns 404
- Check `.env.local` has correct `NEXT_PUBLIC_SITE_URL`
- Verify `src/app/sitemap.ts` exists in site directory
- Redeploy after environment changes

### Wrong URLs in sitemap
- Update `NEXT_PUBLIC_SITE_URL` in Vercel project settings
- Redeploy the project
- URLs should appear in sitemap after rebuild

### Robots.txt incorrect
- Check `public/robots.txt` content
- Update `NEXT_PUBLIC_SITE_URL` if dynamic version not working
- Static version in `public/` will be served directly

## Next Steps

1. Deploy all 5 sites to Vercel
2. Configure environment variables in each project
3. Verify sitemaps and robots.txt work
4. Submit sitemaps to Google Search Console
5. Monitor crawl statistics

## Support

For issues, check:
- `VERCEL_DEPLOYMENT_SETUP.md` - Detailed configuration guide
- `FILES_CREATED_SUMMARY.txt` - Summary of all files created
- Vercel documentation: https://vercel.com/docs
- Next.js documentation: https://nextjs.org/docs

---

All 5 sites are ready for deployment. The configuration is complete!
