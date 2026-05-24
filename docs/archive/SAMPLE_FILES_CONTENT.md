# Sample File Content Reference

This document shows the actual content of files created for each site configuration.

## Sample 1: vercel.json (All Sites - Identical)

**File**: `{site}/vercel.json`

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs"
}
```

**Purpose**: Tells Vercel how to build your Next.js application
**Required**: Yes, in each site root directory
**Changes Needed**: None, this is standard configuration

---

## Sample 2: public/robots.txt (All Sites - Minor URL Variation)

**File**: `{site}/public/robots.txt`

### Example for ndt-knowledge-hub:
```
User-agent: *
Allow: /

Sitemap: https://ndt-knowledge-hub.vercel.app/sitemap.xml
```

### Example for industrial-inspection-resources:
```
User-agent: *
Allow: /

Sitemap: https://industrial-inspection-resources.vercel.app/sitemap.xml
```

**Purpose**: Search engine crawler instructions (static file)
**Required**: Yes, in each site's public/ directory
**Note**: Each site has its own URL in the Sitemap line

---

## Sample 3: .env.example (All Sites - Minor URL Variation)

**File**: `{site}/.env.example`

### Example for ndt-knowledge-hub:
```
NEXT_PUBLIC_SITE_URL=https://ndt-knowledge-hub.vercel.app
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Example for asset-integrity-hub:
```
NEXT_PUBLIC_SITE_URL=https://asset-integrity-hub.vercel.app
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Purpose**: Template for environment variables
**Required**: Yes, in each site root directory
**How to Use**:
1. Copy to `.env.local`
2. Update NEXT_PUBLIC_SITE_URL with actual Vercel URL
3. Update NEXT_PUBLIC_GA_ID with Google Analytics ID

---

## Sample 4: src/app/sitemap.ts (Varies by Site Content)

### Example for ndt-knowledge-hub (22 routes):

```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ndt-knowledge-hub.vercel.app'
  const today = new Date().toISOString().split('T')[0]

  return [
    {
      url: `${baseUrl}`,
      lastModified: today,
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/certifications`,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/certifications/api-510`,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    // ... more routes
  ]
}
```

### Example for asset-integrity-hub (13 routes):

```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://asset-integrity-hub.vercel.app'
  const today = new Date().toISOString().split('T')[0]

  return [
    {
      url: `${baseUrl}`,
      lastModified: today,
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/digital-twin-roi-calculator`,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    // ... more routes
  ]
}
```

**Purpose**: Dynamically generates XML sitemap at `/sitemap.xml`
**Required**: Yes, in each site's src/app/ directory
**Key Features**:
- Uses environment variable `NEXT_PUBLIC_SITE_URL` for base URL
- Falls back to placeholder URL if env var not set
- Includes ALL routes from that site
- Priority: 1.0 (homepage) → 0.8 (sections) → 0.6 (content)
- Change frequency: 'monthly' (homepage) → 'weekly' (all others)
- Last modified: Dynamic (current date)
- Fully customized per site based on its routes

---

## Sample 5: src/app/robots.ts (All Sites - Identical Logic, Different URLs)

**File**: `{site}/src/app/robots.ts`

### Example for ndt-knowledge-hub:
```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ndt-knowledge-hub.vercel.app'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
```

### Example for ndt-careers-portal:
```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ndt-careers-portal.vercel.app'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
```

**Purpose**: Dynamically generates robots.txt at `/robots.txt`
**Required**: Yes, in each site's src/app/ directory
**Key Features**:
- Uses environment variable `NEXT_PUBLIC_SITE_URL`
- Falls back to placeholder URL if env var not set
- Allows all user agents (*)
- References the dynamic sitemap
- Follows Next.js MetadataRoute pattern

---

## How These Files Work Together

1. **Search engine crawls** `https://site.vercel.app/robots.txt`
   - Gets either static version from `public/robots.txt` or dynamic from `src/app/robots.ts`
   
2. **robots.txt references** the sitemap location
   - Points to `https://site.vercel.app/sitemap.xml`
   
3. **Search engine crawls** `https://site.vercel.app/sitemap.xml`
   - Gets dynamically generated XML from `src/app/sitemap.ts`
   
4. **Sitemap includes** all routes with proper metadata
   - URLs, priorities, change frequencies, last modified dates
   
5. **Search engine crawls** each URL listed in sitemap
   - Discovers and indexes all pages in your site

---

## Environment Variable Flow

**Development**:
```
.env.local (not in git)
    ↓
process.env.NEXT_PUBLIC_SITE_URL
    ↓
Used in sitemap.ts and robots.ts
    ↓
Local URLs: http://localhost:3000/...
```

**Production on Vercel**:
```
Vercel Settings → Environment Variables
    ↓
process.env.NEXT_PUBLIC_SITE_URL
    ↓
Used in sitemap.ts and robots.ts
    ↓
Production URLs: https://site.vercel.app/...
```

---

## File Sizes and Types

| File Type | Example Size | Count | Total |
|-----------|-------------|-------|-------|
| vercel.json | ~87 bytes | 5 | ~435 bytes |
| public/robots.txt | ~90 bytes | 5 | ~450 bytes |
| src/app/sitemap.ts | 1-4 KB | 5 | 15-20 KB |
| src/app/robots.ts | ~200 bytes | 5 | ~1 KB |
| .env.example | ~90 bytes | 5 | ~450 bytes |
| **TOTAL** | | **25** | **~18-22 KB** |

---

## Validation Checklist

All files have been validated for:
- Correct JSON syntax (vercel.json)
- Correct TypeScript syntax (sitemap.ts, robots.ts)
- Correct robots.txt format (public/robots.txt)
- Proper environment variable usage
- Correct file locations in each site directory
- Unique content per site (especially sitemap.ts)
- Proper priority and frequency values

All 5 sites are now ready for Vercel deployment!
