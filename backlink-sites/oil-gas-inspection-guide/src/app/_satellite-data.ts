// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "oil-gas-inspection-guide",
  "name": "Oil and Gas Inspection Guide",
  "primary": "inspection",
  "related": [
    "consulting",
    "twin"
  ],
  "audience": "Oil and gas maintenance and integrity buyers",
  "headline": "Turn the asset list into a clear inspection work package.",
  "introduction": "Different pressure equipment, piping and structural assets require different examination plans. Start with the operating context, damage concerns and prior records. Define the scope and review responsibilities so field results can be connected to a maintenance or engineering decision.",
  "questions": [
    "Which equipment and damage concerns are driving the work?",
    "What prior inspection records and applicable requirements are available?",
    "What isolation, access and turnaround constraints affect delivery?"
  ],
  "boundary": "Service scope and personnel availability must be confirmed. General references to industry codes do not establish operator approval.",
  "domain": "https://oil-gas-inspection-guide.vercel.app",
  "guides": [
    {
      "href": "/api-codes",
      "label": "API Inspection Codes Explained"
    },
    {
      "href": "/api-codes/api-653-complete-guide",
      "label": "API 653 Tank Inspection"
    },
    {
      "href": "/api-codes/api-570-piping",
      "label": "API 570 Piping Inspection"
    },
    {
      "href": "/api-codes/api-510-pressure-vessels",
      "label": "API 510 Pressure Vessel Inspection"
    },
    {
      "href": "/api-codes/api-580-rbi",
      "label": "API 580 Risk-Based Inspection"
    }
  ],
  "googleVerification": "",
  "description": "Oil and Gas Inspection Guide: practical scoping questions and subject guides for oil and gas maintenance and integrity buyers. Explore relevant Atlantis NDT support."
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
