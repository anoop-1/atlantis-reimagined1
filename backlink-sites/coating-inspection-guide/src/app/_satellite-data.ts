// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "coating-inspection-guide",
  "name": "Coating Inspection Planning",
  "primary": "consulting",
  "related": [
    "inspection",
    "reporting"
  ],
  "audience": "Coating project and quality managers",
  "headline": "Define the coating acceptance records before the work starts.",
  "introduction": "A coating inspection package depends on the coating system, substrate preparation and project specification. Agree hold points, environmental records, instrument checks and reporting expectations in advance. A complete record identifies both the measured result and the condition under which it was obtained.",
  "questions": [
    "Which coating system and project specification apply?",
    "What preparation, application and final-inspection hold points are required?",
    "Which instruments, personnel qualifications and reports are specified?"
  ],
  "boundary": "Confirm coating-specific personnel and delivery capability with Atlantis before assuming availability. Project requirements govern acceptance.",
  "domain": "https://coating-inspection-guide.vercel.app",
  "guides": [
    {
      "href": "/blog",
      "label": "Blog"
    },
    {
      "href": "/defects",
      "label": "Defects"
    },
    {
      "href": "/inspections",
      "label": "Inspections"
    },
    {
      "href": "/methods",
      "label": "Methods"
    },
    {
      "href": "/standards",
      "label": "Standards"
    }
  ],
  "googleVerification": "",
  "description": "Coating Inspection Planning: practical scoping questions and subject guides for coating project and quality managers. Explore relevant Atlantis NDT support."
};
export const offers = [
  {
    "key": "consulting",
    "name": "NDT Level III consulting",
    "path": "/consulting",
    "service": "consulting",
    "cta": "Discuss Level III support",
    "description": "Scope written-practice review, procedures, qualification programmes or audit support around your governing documents and employer responsibilities."
  },
  {
    "key": "inspection",
    "name": "NDT inspection services",
    "path": "/inspection-services",
    "service": "inspection",
    "cta": "Request an inspection scope review",
    "description": "Share the asset, location, applicable requirements and work window. Atlantis confirms method suitability, personnel, delivery availability and quotation scope."
  },
  {
    "key": "reporting",
    "name": "NDT reporting software",
    "path": "/erp/apps/ndt-reports",
    "service": "reporting",
    "cta": "Discuss your reporting workflow",
    "description": "Explore field data capture, company report templates and review workflows. Discuss standalone reporting or its role within Atlantis ERP."
  }
];
type Offer = typeof offers[number];
export function contactUrl(offer: Offer, placement: string) {
  const url = new URL('/contact', 'https://atlantisndt.com');
  url.search = new URLSearchParams({ service: offer.service, subject: site.name + ': ' + offer.name, satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: placement }).toString();
  return url.toString();
}
export function productUrl(offer: Offer) { const url = new URL(offer.path, 'https://atlantisndt.com'); url.search = new URLSearchParams({ satellite: site.slug, cta: 'product', utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: 'product' }).toString(); return url.toString(); }
