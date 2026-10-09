// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "api-certification-guide",
  "name": "API Inspection and Certification Context",
  "primary": "inspection",
  "related": [
    "consulting"
  ],
  "audience": "Plant personnel separating inspection work from individual certification",
  "headline": "Separate the inspection scope from the inspector certification pathway.",
  "introduction": "An API credential, an inspection programme and an NDT examination scope are related but distinct. Equipment owners should identify the asset requirements and required authority before procuring work. Candidates should obtain current eligibility and examination information directly from the certification body.",
  "questions": [
    "Is the requirement field inspection, NDT examination or technical programme support?",
    "Does it concern vessels, piping or aboveground storage tanks?",
    "Which code edition, site location and work window apply?"
  ],
  "boundary": "Atlantis does not offer API training through this site. Certification and examination information should be checked with API; commercial enquiries route to inspection or consulting.",
  "domain": "https://api-certification-guide.vercel.app",
  "guides": [
    {
      "href": "/api-510",
      "label": "Api 510"
    },
    {
      "href": "/blog",
      "label": "Blog"
    },
    {
      "href": "/study",
      "label": "Study"
    }
  ],
  "googleVerification": "",
  "description": "API Inspection and Certification Context: practical scoping questions and subject guides for plant personnel separating inspection work from individual certification. Explore relevant Atlantis NDT support."
};
export const offers = [
  {
    "key": "inspection",
    "name": "NDT inspection services",
    "path": "/inspection-services",
    "service": "inspection",
    "cta": "Request an inspection scope review",
    "description": "Share the asset, location, applicable requirements and work window. Atlantis confirms method suitability, personnel, delivery availability and quotation scope."
  },
  {
    "key": "consulting",
    "name": "NDT Level III consulting",
    "path": "/consulting",
    "service": "consulting",
    "cta": "Discuss Level III support",
    "description": "Scope written-practice review, procedures, qualification programmes or audit support around your governing documents and employer responsibilities."
  }
];
type Offer = typeof offers[number];
export function contactUrl(offer: Offer, placement: string) {
  const url = new URL('/contact', 'https://atlantisndt.com');
  url.search = new URLSearchParams({ service: offer.service, subject: site.name + ': ' + offer.name, satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: placement }).toString();
  return url.toString();
}
export function productUrl(offer: Offer) { const url = new URL(offer.path, 'https://atlantisndt.com'); url.search = new URLSearchParams({ satellite: site.slug, cta: 'product', utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: 'product' }).toString(); return url.toString(); }
