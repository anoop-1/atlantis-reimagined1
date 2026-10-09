// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "welding-inspection-hub",
  "name": "Welding Inspection Hub",
  "primary": "inspection",
  "related": [
    "consulting",
    "reporting"
  ],
  "audience": "Fabrication and welding inspection buyers",
  "headline": "Prepare a weld inspection package with clear examination boundaries.",
  "introduction": "Identify the weld population, examination stage and applicable requirements before requesting personnel. Coordinate visual checks and any specified surface or volumetric examinations. A consistent report register helps the buyer track work completed, exceptions and re-examination without losing joint identity.",
  "questions": [
    "What joint list, drawings and examination extent can be supplied?",
    "Which methods and personnel qualifications are specified?",
    "What access, schedule and report handover are required?"
  ],
  "boundary": "A request for welding inspection does not automatically include every NDT method or credential. Atlantis confirms the delivery scope during enquiry review.",
  "domain": "https://welding-inspection-hub.vercel.app",
  "guides": [
    {
      "href": "/ndt-methods",
      "label": "Weld NDT Methods"
    },
    {
      "href": "/ndt-methods/rt-weld",
      "label": "Radiographic Testing for Welds"
    },
    {
      "href": "/ndt-methods/ut-weld",
      "label": "Ultrasonic Weld Testing"
    },
    {
      "href": "/ndt-methods/mt-weld",
      "label": "Magnetic Particle Weld Testing"
    },
    {
      "href": "/ndt-methods/paut-weld",
      "label": "Phased Array Weld Scanning"
    }
  ],
  "googleVerification": "",
  "description": "Welding Inspection Hub: practical scoping questions and subject guides for fabrication and welding inspection buyers. Explore relevant Atlantis NDT support."
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
