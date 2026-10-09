// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "pressure-vessel-ndt",
  "name": "Pressure Vessel NDT",
  "primary": "inspection",
  "related": [
    "consulting",
    "twin"
  ],
  "audience": "Pressure equipment owners and inspection planners",
  "headline": "Separate vessel examination from the engineering acceptance decision.",
  "introduction": "A vessel scope should identify construction details, material, service and the inspection objective. Thickness readings and weld examinations provide different evidence. Define location references and reporting needs so the responsible inspector or engineer can use the results without reconstructing field context.",
  "questions": [
    "What vessel, material and service conditions are involved?",
    "Is the requirement thickness monitoring, weld examination or repair support?",
    "Which governing requirements, access arrangements and work dates apply?"
  ],
  "boundary": "NDT results alone do not establish vessel fitness for service or authorize continued operation. Confirm the responsible assessment and acceptance roles.",
  "domain": "https://pressure-vessel-ndt.vercel.app",
  "guides": [
    {
      "href": "/design",
      "label": "Design"
    },
    {
      "href": "/fabrication",
      "label": "Fabrication"
    },
    {
      "href": "/operation",
      "label": "Operation"
    }
  ],
  "googleVerification": "",
  "description": "Pressure Vessel NDT: practical scoping questions and subject guides for pressure equipment owners and inspection planners. Explore relevant Atlantis NDT support."
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
  },
  {
    "key": "twin",
    "name": "Digital Twin NDT reporting",
    "path": "/digital-twin-reporting",
    "service": "digital-twins",
    "cta": "Request a Digital Twin demo",
    "description": "Explore inspection results in the context of an asset model. Discuss the asset, available records and whether a standalone product or ERP module fits your requirements."
  }
];
type Offer = typeof offers[number];
export function contactUrl(offer: Offer, placement: string) {
  const url = new URL('/contact', 'https://atlantisndt.com');
  url.search = new URLSearchParams({ service: offer.service, subject: site.name + ': ' + offer.name, satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: placement }).toString();
  return url.toString();
}
export function productUrl(offer: Offer) { const url = new URL(offer.path, 'https://atlantisndt.com'); url.search = new URLSearchParams({ satellite: site.slug, cta: 'product', utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: 'product' }).toString(); return url.toString(); }
