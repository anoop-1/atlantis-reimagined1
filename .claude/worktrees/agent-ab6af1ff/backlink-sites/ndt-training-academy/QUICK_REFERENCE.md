# NDT Training Academy - Quick Reference Guide

## Site Location
`/sessions/modest-cool-bohr/mnt/atlantis-reimagined1/backlink-sites/ndt-training-academy/`

## Quick Start
```bash
cd /sessions/modest-cool-bohr/mnt/atlantis-reimagined1/backlink-sites/ndt-training-academy/
npm install
npm run dev  # Development server on http://localhost:3000
npm run build && npm start  # Production
```

## Site Structure at a Glance

### Main Navigation Routes
```
/                    → Homepage
/training            → Training Programs Overview
/training/ut-training       → Ultrasonic Testing Guide
/training/rt-training       → Radiographic Testing Guide
/training/mt-pt-training    → Magnetic Particle & Penetrant Testing
/certifications      → Certification Roadmap
/certifications/asnt-study-guide    → ASNT Exam Prep
/certifications/api-exam-prep       → API 510/570/653 Exam Prep
/regional            → Regional Training Index
/regional/usa        → USA Training
/regional/india      → India Training (Hyderabad)
/regional/middle-east       → Middle East Training
/career              → Career Guide
```

## Key Features

### Content
- 13 pages with 16,500+ words of original content
- Comprehensive NDT training and certification information
- Regional training guides (USA, India, Middle East)
- Career and job market analysis

### SEO
- Unique metadata (title, description, keywords) per page
- JSON-LD schema markup on every page
- Breadcrumb navigation
- Internal cross-linking
- Mobile-responsive design

### Backlinks
- 30+ strategic backlinks to atlantisndt.com
- Primary target: `/training` (main training page)
- Secondary targets: ASNT, API, regional pages, career blog

## Files Overview

### Config Files (6)
| File | Purpose |
|------|---------|
| `package.json` | NPM dependencies |
| `tsconfig.json` | TypeScript configuration |
| `next.config.js` | Next.js optimization |
| `tailwind.config.ts` | Amber/orange theme |
| `postcss.config.js` | CSS processing |
| `.gitignore` | Git exclusions |

### Source Code (15 files)
| Path | Purpose | Words |
|------|---------|-------|
| `src/app/layout.tsx` | Root layout & navigation | Core |
| `src/app/globals.css` | Global styles | Core |
| `src/app/page.tsx` | Homepage | 1200+ |
| `src/app/training/page.tsx` | Training overview | 1500+ |
| `src/app/training/ut-training/page.tsx` | UT training guide | 1400+ |
| `src/app/training/rt-training/page.tsx` | RT training guide | 1400+ |
| `src/app/training/mt-pt-training/page.tsx` | MT/PT training guide | 1300+ |
| `src/app/certifications/page.tsx` | Certification roadmap | 1200+ |
| `src/app/certifications/asnt-study-guide/page.tsx` | ASNT prep guide | 1500+ |
| `src/app/certifications/api-exam-prep/page.tsx` | API exam prep | 1600+ |
| `src/app/regional/page.tsx` | Regional training index | 1000+ |
| `src/app/regional/usa/page.tsx` | USA training | 1500+ |
| `src/app/regional/india/page.tsx` | India training | 1400+ |
| `src/app/regional/middle-east/page.tsx` | Middle East training | 1500+ |
| `src/app/career/page.tsx` | Career guide | 1600+ |

### Documentation (4 files)
- `README.md` - Complete project documentation
- `BACKLINKS_STRATEGY.md` - Detailed backlink strategy
- `PROJECT_STRUCTURE.txt` - File organization reference
- `IMPLEMENTATION_SUMMARY.txt` - Project completion summary

## Color Scheme

**Primary:** Amber/Orange
- `from-amber-500 to-amber-600` for heroes
- `amber-500` for accents
- `text-amber-600` for links

**Secondary:** Slate Gray
- `bg-slate-50/100` for light backgrounds
- `text-slate-700` for body text
- `text-slate-900` for headings

**Section Accents:** Blue, Purple, Red, Green

## Key Backlink Targets

**Most Important:**
```
https://atlantisndt.com/training
https://atlantisndt.com/asnt-certification
https://atlantisndt.com/api-570-certification
```

**Regional:**
```
https://atlantisndt.com/training-usa
https://atlantisndt.com/training-india
https://atlantisndt.com/ndt-training-hyderabad
https://atlantisndt.com/training-me
https://atlantisndt.com/ndt-training-dubai
https://atlantisndt.com/ndt-training-saudi-arabia
```

**Codes:**
```
https://atlantisndt.com/api-510-certification
https://atlantisndt.com/api-653-certification
https://atlantisndt.com/api-570-training
```

**Content:**
```
https://atlantisndt.com/blog/ndt-career-guide
```

## Content Coverage

### NDT Methods
- Ultrasonic Testing (UT) - Level I, II, III, Phased Array
- Radiographic Testing (RT) - Radiation safety, Digital RT
- Magnetic Particle Testing (MT) - Methods and applications
- Penetrant Testing (PT) - Fluorescent and visible methods

### Certifications
- ASNT Level I, II, III (all methods)
- API 510 (Pressure Vessel Inspector)
- API 570 (Piping Inspector)  
- API 653 (Tank Inspector)

### Regions
- United States (major regions and opportunities)
- India (Hyderabad emphasis, cost advantages)
- Middle East (Dubai, Saudi Arabia, Qatar)

### Career Topics
- Job opportunities by industry
- Salary ranges and compensation
- Career progression paths
- Skills development
- Industry growth

## Development Notes

### Adding New Content
1. Create new folder in `src/app/[section]/[page]/`
2. Add `page.tsx` with metadata and content
3. Include breadcrumbs, schema markup, backlinks
4. Update navigation if it's a main section

### Styling
- Use Tailwind CSS utility classes
- Custom components in `globals.css`
- Responsive design with `md:` and `lg:` breakpoints

### Metadata
Every page needs:
```typescript
export const metadata: Metadata = {
  title: "Unique Title",
  description: "Compelling description...",
  keywords: "relevant, keywords",
  openGraph: { ... }
}
```

## Performance Tips

- Images optimized automatically (AVIF, WebP)
- Code splitting per route
- CSS minimized via Tailwind
- No heavy dependencies
- Fast Time to Interactive

## Testing Checklist

Before deployment:
- [ ] Run `npm run build` successfully
- [ ] No TypeScript errors
- [ ] All links functional
- [ ] Mobile responsive (check on device)
- [ ] Navigation works
- [ ] Footer links correct
- [ ] Metadata visible in browser head

## Deployment Checklist

- [ ] Environment variables configured
- [ ] Build passes locally
- [ ] Choose hosting (Vercel recommended)
- [ ] Set up domain/DNS
- [ ] Monitor analytics
- [ ] Test all pages post-deployment
- [ ] Verify backlinks are working

## Support Files

- `README.md` - Full project documentation
- `BACKLINKS_STRATEGY.md` - Backlink distribution strategy
- `PROJECT_STRUCTURE.txt` - Complete file listing
- `IMPLEMENTATION_SUMMARY.txt` - Project summary
- `COMPLETION_SUMMARY.md` - Detailed completion notes

## Key Metrics

- **Total Pages:** 13 content pages
- **Total Words:** 16,500+
- **Backlinks:** 30+ strategic links
- **Configuration Files:** 6
- **Documentation Files:** 4
- **Responsive:** Mobile, Tablet, Desktop
- **Performance:** Optimized for Core Web Vitals

---

**Status:** Production Ready
**Version:** 1.0 Complete
**Last Updated:** March 3, 2026
