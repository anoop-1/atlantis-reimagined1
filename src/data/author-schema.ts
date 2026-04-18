/**
 * Shared schema.org Person + Organization objects for E-E-A-T boost.
 * Import and embed in `structuredData['@graph']` on every deep technical page.
 * Author credentials (ASNT Level III, API 653) signal expertise — critical for
 * Google YMYL quality rating on certification/salary/inspection-safety topics.
 */

export const ATLANTIS_AUTHOR_ANOOP = {
  "@type": "Person",
  "@id": "https://atlantisndt.com/#anoop-rayavarapu",
  "name": "Anoop Rayavarapu",
  "jobTitle": "Founder & CEO, Atlantis NDT",
  "url": "https://atlantisndt.com/about",
  "description":
    "ASNT NDT Level III certified (multi-method) and founder of Atlantis NDT. 15+ years leading inspection, training, and digital-twin engagements across oil & gas, petrochemical, and aerospace sectors in USA, Middle East, and India.",
  "sameAs": [
    "https://www.linkedin.com/in/anoop-rayavarapu",
    "https://atlantisndt.com/about",
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certification",
      "name": "ASNT NDT Level III (UT, RT, MT, PT, VT, ET)",
      "recognizedBy": {
        "@type": "Organization",
        "name": "American Society for Nondestructive Testing",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certification",
      "name": "API 653 Aboveground Storage Tank Inspector",
      "recognizedBy": { "@type": "Organization", "name": "American Petroleum Institute" },
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certification",
      "name": "ISO 9001:2015 Lead Auditor",
      "recognizedBy": { "@type": "Organization", "name": "International Organization for Standardization" },
    },
  ],
} as const;

export const ATLANTIS_PUBLISHER = {
  "@type": "Organization",
  "@id": "https://atlantisndt.com/#organization",
  "name": "Atlantis NDT",
  "url": "https://atlantisndt.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://atlantisndt.com/logo.png",
    "width": 512,
    "height": 512,
  },
  "sameAs": [
    "https://www.linkedin.com/company/atlantis-ndt",
  ],
  "foundingDate": "2018",
  "founder": { "@id": "https://atlantisndt.com/#anoop-rayavarapu" },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Houston",
    "addressRegion": "TX",
    "addressCountry": "USA",
  },
  "hasCredential": [
    { "@type": "EducationalOccupationalCredential", "name": "ISO 9001:2015 Certified" },
    { "@type": "EducationalOccupationalCredential", "name": "ASNT SNT-TC-1A Compliant Written Practice" },
    { "@type": "EducationalOccupationalCredential", "name": "API 653 Authorized Inspector Programs" },
  ],
} as const;

/**
 * Builds a TechArticle @graph entry with Atlantis author + publisher.
 * Use on deep technical blog posts and product pillar pages.
 */
export function buildTechArticleSchema(opts: {
  url: string;
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified: string;
  section?: string;
  keywords?: string;
  dependencies?: string;
}) {
  return {
    "@type": "TechArticle",
    "@id": `${opts.url}#article`,
    "mainEntityOfPage": opts.url,
    "headline": opts.headline,
    "description": opts.description,
    "image": opts.image ?? "https://atlantisndt.com/og-default.png",
    "author": ATLANTIS_AUTHOR_ANOOP,
    "publisher": ATLANTIS_PUBLISHER,
    "datePublished": opts.datePublished,
    "dateModified": opts.dateModified,
    "inLanguage": "en-US",
    "articleSection": opts.section ?? "NDT Technical",
    "keywords": opts.keywords,
    "proficiencyLevel": "Expert",
    "dependencies": opts.dependencies,
  };
}
