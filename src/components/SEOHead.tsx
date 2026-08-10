import { useEffect } from 'react';
const SITE_URL = 'https://atlantisndt.com';

interface HreflangLink {
  hreflang: string; // e.g., 'en-US', 'en-AE', 'en-IN', 'x-default'
  href: string;     // Full URL or path
}

/** LocalBusiness JSON-LD block — emit on every city-scoped page */
export interface LocalBusinessSchema {
  /** Display name; defaults to "Atlantis NDT — {city}" */
  name?: string;
  /** Descriptive service category (e.g., "NDT Training", "NDT ERP Software", "Corporate NDT Training") */
  serviceType?: string;
  /** Human-readable city, e.g. "Houston" */
  city: string;
  /** State/region, e.g. "TX" (optional for non-US) */
  region?: string;
  /** ISO country code, e.g. "US", "AE", "IN" */
  country: string;
  /** Latitude (optional but recommended for local pack) */
  lat?: number;
  /** Longitude */
  lng?: number;
  /** Local contact phone (falls back to global) */
  phone?: string;
  /** Price band token, e.g. "$$" */
  priceRange?: string;
  /** Short description specific to this city/service */
  description?: string;
  /** Absolute image URL (falls back to org logo) */
  image?: string;
}

/** Course JSON-LD for training pages — unlocks Google Courses SERP */
export interface CourseSchema {
  name: string;
  description: string;
  provider?: string;
  /** Canonical course URL; defaults to canonical of page */
  url?: string;
  /** Any combination of delivery modes */
  deliveryMode?: Array<'online' | 'onsite' | 'blended' | 'classroom'>;
  /** ISO 8601 duration, e.g. "PT40H" for 40 hours */
  durationISO?: string;
  /** Free-text prerequisites */
  coursePrerequisites?: string;
  /** City/region offered in (optional) */
  city?: string;
  /** ISO country code */
  country?: string;
  /** Instructor/credential qualification */
  educationalCredentialAwarded?: string;
  /** e.g. "Beginner" | "Intermediate" | "Advanced" */
  educationalLevel?: string;
  /** Price (optional, numeric string) */
  price?: string;
  /** ISO currency code, e.g. "USD", "INR", "AED" */
  priceCurrency?: string;
}

/** Article JSON-LD for blog posts */
export interface ArticleSchema {
  headline: string;
  /** ISO date */
  datePublished: string;
  /** ISO date */
  dateModified?: string;
  author?: string;
  /** Absolute image URL */
  image?: string;
  /** Article section/category */
  section?: string;
}

/** FAQPage JSON-LD — highly effective for SERP real estate */
export interface FaqItem {
  question: string;
  answer: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  structuredData?: object;
  hreflangLinks?: HreflangLink[];
  /** Set to true for low-value city-template pages to prevent doorway page penalties */
  noindex?: boolean;
  /** Emit LocalBusiness JSON-LD — use on every city-scoped page */
  localBusiness?: LocalBusinessSchema;
  /** Emit Course JSON-LD — use on every training page */
  course?: CourseSchema;
  /** Emit Article JSON-LD — use on blog posts */
  article?: ArticleSchema;
  /** Emit FAQPage JSON-LD — add at least 3 Q&A pairs per city page */
  faq?: FaqItem[];
  /** Document language code, e.g. "en", "ar", "es". Applied to <html lang>. */
  lang?: string;
  /** Document text direction. Applied to <html dir>. Use "rtl" for Arabic, Hebrew. */
  dir?: 'ltr' | 'rtl';
}

export const SEOHead = ({
  title,
  description,
  keywords = "NDT, Non-Destructive Testing, ultrasonic testing, radiographic testing, magnetic particle testing, penetrant testing, eddy current testing, visual testing, inspection services, asset integrity, quality assurance, certified professionals, oil and gas, marine, aerospace, nuclear, energy, manufacturing",
  ogImage = "/og-image.jpg",
  canonical,
  structuredData,
  hreflangLinks,
  noindex = false,
  localBusiness,
  course,
  article,
  faq,
  lang,
  dir,
}: SEOHeadProps) => {
  useEffect(() => {
    // Apply <html lang> + <html dir> for accessibility, search engines and RTL layouts
    try {
      if (lang) document.documentElement.lang = lang;
      if (dir) document.documentElement.dir = dir;
      else if (lang && lang !== 'ar' && lang !== 'he' && lang !== 'fa' && lang !== 'ur') {
        // Reset to LTR when navigating from an RTL page back to an LTR-language page
        document.documentElement.dir = 'ltr';
      }
    } catch {}

    // Set title (avoid duplicate branding if title already contains site name)
    const brandSuffix = 'Atlantis NDT - Professional NDT Services';
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('atlantis ndt')) {
      document.title = title;
    } else {
      document.title = `${title} | ${brandSuffix}`;
    }

    // Set meta tags
    const setMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;

      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }

      meta.setAttribute('content', content);
    };

    // Basic meta tags
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    setMetaTag('robots', noindex ? 'noindex, follow' : 'index, follow');
    setMetaTag('author', 'Atlantis NDT');

    // Normalize canonical (prefer SITE_URL)
    let finalCanonical = canonical || '';
    try {
      if (!finalCanonical) {
        finalCanonical = `${SITE_URL}${window.location.pathname}`;
      } else if (finalCanonical.startsWith('/')) {
        finalCanonical = `${SITE_URL}${finalCanonical}`;
      }
    } catch (e) {
      // fallback when window is not available
      if (!finalCanonical) finalCanonical = SITE_URL;
    }

    // Open Graph tags
    setMetaTag('og:title', title.includes('Atlantis NDT') ? title : `${title} | Atlantis NDT`, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', 'website', true);
    // Ensure og:image is absolute URL
    const finalOgImage = ogImage.startsWith('/') ? `${SITE_URL}${ogImage}` : ogImage;
    setMetaTag('og:image', finalOgImage, true);
    setMetaTag('og:site_name', 'Atlantis NDT', true);
    // OG url
    setMetaTag('og:url', finalCanonical, true);

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:site', '@AtlantisNDT');
    setMetaTag('twitter:title', title.includes('Atlantis NDT') ? title : `${title} | Atlantis NDT`);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', finalOgImage);

    // Canonical URL
    if (finalCanonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = finalCanonical;
    }

    // Hreflang tags for multi-regional targeting
    // First, remove any existing hreflang links
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());

    // Auto-derive hreflang when not explicitly provided — English variants by region
    // All variants point to the same canonical page unless explicit hreflangLinks override.
    const effectiveHreflang: HreflangLink[] = hreflangLinks && hreflangLinks.length > 0
      ? hreflangLinks
      : [
          { hreflang: 'en',         href: finalCanonical },
          { hreflang: 'en-US',      href: finalCanonical },
          { hreflang: 'en-GB',      href: finalCanonical },
          { hreflang: 'en-IN',      href: finalCanonical },
          { hreflang: 'en-AE',      href: finalCanonical },
          { hreflang: 'en-SG',      href: finalCanonical },
          { hreflang: 'en-CA',      href: finalCanonical },
          { hreflang: 'en-AU',      href: finalCanonical },
          { hreflang: 'x-default',  href: finalCanonical },
        ];

    effectiveHreflang.forEach(({ hreflang, href }) => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = hreflang;
      link.href = href.startsWith('/') ? `${SITE_URL}${href}` : href;
      document.head.appendChild(link);
    });

    // Structured Data (page-specific)
    if (structuredData) {
      let script = document.querySelector('script[data-sd="page"]') as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-sd', 'page');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

    // Organization + WebSite schema (global - runs once)
    if (!document.querySelector('script[data-sd="org"]')) {
      const orgScript = document.createElement('script');
      orgScript.type = 'application/ld+json';
      orgScript.setAttribute('data-sd', 'org');
      orgScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": "https://atlantisndt.com/#organization",
            "name": "Atlantis NDT",
            "url": "https://atlantisndt.com",
            "logo": {
              "@type": "ImageObject",
              "url": "https://atlantisndt.com/atlantis.png",
              "width": 512,
              "height": 512
            },
            "description": "Global NDT consulting, training, and digital twin solutions. 50+ ASNT Level III certified professionals serving oil & gas, aerospace, and power generation industries.",
            "foundingDate": "2018",
            "numberOfEmployees": {
              "@type": "QuantitativeValue",
              "minValue": 50
            },
            "sameAs": [
              "https://www.linkedin.com/company/atlantis-ndt"
            ],
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+1-281-840-8969",
                "contactType": "sales",
                "areaServed": ["US", "AE", "SA", "IN", "GB", "SG", "CA", "QA", "KW", "OM"],
                "availableLanguage": "English"
              },
              {
                "@type": "ContactPoint",
                "email": "info@atlantisndt.com",
                "contactType": "customer service",
                "availableLanguage": "English"
              }
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Houston",
              "addressLocality": "Houston",
              "addressRegion": "TX",
              "postalCode": "77001",
              "addressCountry": "US"
            },
            "areaServed": [
              { "@type": "Country", "name": "United States" },
              { "@type": "Country", "name": "United Arab Emirates" },
              { "@type": "Country", "name": "Saudi Arabia" },
              { "@type": "Country", "name": "India" },
              { "@type": "Country", "name": "United Kingdom" },
              { "@type": "Country", "name": "Canada" },
              { "@type": "Country", "name": "Singapore" },
              { "@type": "Country", "name": "Australia" },
              { "@type": "Country", "name": "Qatar" },
              { "@type": "Country", "name": "Kuwait" }
            ],
            "knowsAbout": [
              "Non-Destructive Testing",
              "Ultrasonic Testing",
              "Radiographic Testing",
              "Magnetic Particle Testing",
              "Liquid Penetrant Testing",
              "Eddy Current Testing",
              "Visual Testing",
              "ASNT Certification",
              "API 510 Certification",
              "API 570 Certification",
              "API 653 Certification",
              "Digital Twin Technology",
              "Asset Integrity Management",
              "Risk-Based Inspection",
              "Fitness-for-Service"
            ],
            "hasCredential": [
              { "@type": "EducationalOccupationalCredential", "credentialCategory": "ASNT Level III" },
              { "@type": "EducationalOccupationalCredential", "credentialCategory": "API 510" },
              { "@type": "EducationalOccupationalCredential", "credentialCategory": "API 570" },
              { "@type": "EducationalOccupationalCredential", "credentialCategory": "API 653" }
            ]
          },
          {
            "@type": "WebSite",
            "@id": "https://atlantisndt.com/#website",
            "name": "Atlantis NDT",
            "url": "https://atlantisndt.com",
            "publisher": { "@id": "https://atlantisndt.com/#organization" },
            "inLanguage": "en-US",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://atlantisndt.com/blog?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          }
        ]
      });
      document.head.appendChild(orgScript);
    }

    // BreadcrumbList schema
    try {
      const path = window.location.pathname;
      if (path !== '/') {
        const segments = path.split('/').filter(Boolean);
        const breadcrumbItems = [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL }
        ];
        let currentPath = '';
        segments.forEach((seg, i) => {
          currentPath += `/${seg}`;
          breadcrumbItems.push({
            "@type": "ListItem",
            "position": i + 2,
            "name": seg.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
            "item": `${SITE_URL}${currentPath}`
          });
        });

        let bcScript = document.querySelector('script[data-sd="breadcrumb"]') as HTMLScriptElement;
        if (!bcScript) {
          bcScript = document.createElement('script');
          bcScript.type = 'application/ld+json';
          bcScript.setAttribute('data-sd', 'breadcrumb');
          document.head.appendChild(bcScript);
        }
        bcScript.textContent = JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": breadcrumbItems
        });
      }
    } catch {}

    // ── LocalBusiness JSON-LD (city-scoped pages) ─────────────────────
    if (localBusiness) {
      let lbScript = document.querySelector('script[data-sd="localbusiness"]') as HTMLScriptElement;
      if (!lbScript) {
        lbScript = document.createElement('script');
        lbScript.type = 'application/ld+json';
        lbScript.setAttribute('data-sd', 'localbusiness');
        document.head.appendChild(lbScript);
      }
      const lbName = localBusiness.name || `Atlantis NDT — ${localBusiness.city}`;
      const lbImage = localBusiness.image || `${SITE_URL}/atlantis.png`;
      const lbPayload: Record<string, unknown> = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${finalCanonical}#localbusiness`,
        "name": lbName,
        "image": lbImage,
        "url": finalCanonical,
        "telephone": localBusiness.phone || "+1-281-840-8969",
        "priceRange": localBusiness.priceRange || "$$",
        "description": localBusiness.description || description,
        "parentOrganization": { "@id": "https://atlantisndt.com/#organization" },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": localBusiness.city,
          ...(localBusiness.region ? { "addressRegion": localBusiness.region } : {}),
          "addressCountry": localBusiness.country,
        },
        "areaServed": { "@type": "City", "name": localBusiness.city },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "127",
          "bestRating": "5",
          "worstRating": "1"
        },
      };
      if (typeof localBusiness.lat === 'number' && typeof localBusiness.lng === 'number') {
        lbPayload.geo = {
          "@type": "GeoCoordinates",
          "latitude": localBusiness.lat,
          "longitude": localBusiness.lng,
        };
      }
      if (localBusiness.serviceType) {
        (lbPayload as { "@type": string | string[] })["@type"] = ["LocalBusiness", "ProfessionalService"];
        lbPayload.makesOffer = {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": localBusiness.serviceType },
          "areaServed": { "@type": "City", "name": localBusiness.city },
        };
      }
      lbScript.textContent = JSON.stringify(lbPayload);
    } else {
      // Clean up stale LocalBusiness from prior nav
      document.querySelector('script[data-sd="localbusiness"]')?.remove();
    }

    // ── Course JSON-LD (training pages) ───────────────────────────────
    if (course) {
      let cScript = document.querySelector('script[data-sd="course"]') as HTMLScriptElement;
      if (!cScript) {
        cScript = document.createElement('script');
        cScript.type = 'application/ld+json';
        cScript.setAttribute('data-sd', 'course');
        document.head.appendChild(cScript);
      }
      const deliveryModes = course.deliveryMode || ['onsite'];
      const courseInstances = deliveryModes.map(mode => {
        const courseModeMap: Record<string, string> = {
          online: 'https://schema.org/OnlineEventAttendanceMode',
          onsite: 'https://schema.org/OfflineEventAttendanceMode',
          classroom: 'https://schema.org/OfflineEventAttendanceMode',
          blended: 'https://schema.org/MixedEventAttendanceMode',
        };
        return {
          "@type": "CourseInstance",
          "courseMode": mode,
          "eventAttendanceMode": courseModeMap[mode],
          ...(course.durationISO ? { "courseWorkload": course.durationISO } : {}),
          ...(course.city ? {
            "location": {
              "@type": "Place",
              "name": course.city,
              ...(course.country ? {
                "address": { "@type": "PostalAddress", "addressLocality": course.city, "addressCountry": course.country }
              } : {})
            }
          } : {}),
        };
      });
      const coursePayload: Record<string, unknown> = {
        "@context": "https://schema.org",
        "@type": "Course",
        "@id": `${finalCanonical}#course`,
        "name": course.name,
        "description": course.description,
        "url": course.url || finalCanonical,
        "provider": {
          "@type": "Organization",
          "name": course.provider || "Atlantis NDT",
          "sameAs": SITE_URL
        },
        "hasCourseInstance": courseInstances,
      };
      if (course.coursePrerequisites) coursePayload.coursePrerequisites = course.coursePrerequisites;
      if (course.educationalCredentialAwarded) coursePayload.educationalCredentialAwarded = course.educationalCredentialAwarded;
      if (course.educationalLevel) coursePayload.educationalLevel = course.educationalLevel;
      // CLAUDE.md §18 — never emit price/priceCurrency in an Offer. The
      // course.price/priceCurrency props are deliberately ignored so that a
      // future caller passing them cannot reintroduce a pricing violation.
      coursePayload.offers = {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "url": finalCanonical,
      };
      cScript.textContent = JSON.stringify(coursePayload);
    } else {
      document.querySelector('script[data-sd="course"]')?.remove();
    }

    // ── Article JSON-LD (blog posts) ──────────────────────────────────
    if (article) {
      let aScript = document.querySelector('script[data-sd="article"]') as HTMLScriptElement;
      if (!aScript) {
        aScript = document.createElement('script');
        aScript.type = 'application/ld+json';
        aScript.setAttribute('data-sd', 'article');
        document.head.appendChild(aScript);
      }
      const artImage = article.image
        ? (article.image.startsWith('/') ? `${SITE_URL}${article.image}` : article.image)
        : finalOgImage;
      aScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `${finalCanonical}#article`,
        "headline": article.headline,
        "image": artImage,
        "datePublished": article.datePublished,
        "dateModified": article.dateModified || article.datePublished,
        "author": {
          "@type": article.author && article.author.toLowerCase().includes('atlantis') ? "Organization" : "Person",
          "name": article.author || "Atlantis NDT Editorial Team"
        },
        "publisher": { "@id": "https://atlantisndt.com/#organization" },
        "mainEntityOfPage": { "@type": "WebPage", "@id": finalCanonical },
        ...(article.section ? { "articleSection": article.section } : {}),
      });
    } else {
      document.querySelector('script[data-sd="article"]')?.remove();
    }

    // ── FAQPage JSON-LD ───────────────────────────────────────────────
    if (faq && faq.length > 0) {
      let fScript = document.querySelector('script[data-sd="faq"]') as HTMLScriptElement;
      if (!fScript) {
        fScript = document.createElement('script');
        fScript.type = 'application/ld+json';
        fScript.setAttribute('data-sd', 'faq');
        document.head.appendChild(fScript);
      }
      fScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faq.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": { "@type": "Answer", "text": item.answer }
        }))
      });
    } else {
      document.querySelector('script[data-sd="faq"]')?.remove();
    }
  }, [title, description, keywords, ogImage, canonical, structuredData, hreflangLinks, localBusiness, course, article, faq, lang, dir]);

  return null;
};
