import { useEffect } from 'react';
const SITE_URL = 'https://atlantisndt.com';

interface HreflangLink {
  hreflang: string; // e.g., 'en-US', 'en-AE', 'en-IN', 'x-default'
  href: string;     // Full URL or path
}

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  structuredData?: object;
  hreflangLinks?: HreflangLink[];
}

export const SEOHead = ({
  title,
  description,
  keywords = "NDT, Non-Destructive Testing, ultrasonic testing, radiographic testing, magnetic particle testing, penetrant testing, eddy current testing, visual testing, inspection services, asset integrity, quality assurance, certified professionals, oil and gas, marine, aerospace, nuclear, energy, manufacturing",
  ogImage = "/og-image.jpg",
  canonical,
  structuredData,
  hreflangLinks
}: SEOHeadProps) => {
  useEffect(() => {
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
    setMetaTag('robots', 'index, follow');
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

    // Add new hreflang links
    if (hreflangLinks && hreflangLinks.length > 0) {
      hreflangLinks.forEach(({ hreflang, href }) => {
        const link = document.createElement('link');
        link.rel = 'alternate';
        link.hreflang = hreflang;
        link.href = href.startsWith('/') ? `${SITE_URL}${href}` : href;
        document.head.appendChild(link);
      });
    }

    // Structured Data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, ogImage, canonical, structuredData, hreflangLinks]);

  return null;
};
