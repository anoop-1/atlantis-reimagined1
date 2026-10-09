// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "corrosion-management-ndt",
  "name": "Corrosion Monitoring Resources",
  "primary": "twin",
  "related": [
    "inspection",
    "consulting"
  ],
  "audience": "Corrosion and asset-integrity teams",
  "headline": "Make repeat measurements comparable before interpreting the trend.",
  "introduction": "A corrosion history needs consistent measurement locations, units and inspection context. Keep original readings, campaign dates and review status available when comparing results. Unexpected changes should lead to a review of measurement conditions and asset information before a conclusion is drawn.",
  "questions": [
    "Can inspection locations be reliably relocated on the asset?",
    "Are previous readings, dates and measurement conditions available?",
    "Who reviews anomalies and sets the required follow-up?"
  ],
  "boundary": "Remaining-life and interval decisions require applicable engineering methods and technical approval. A visualization alone cannot establish fitness for service.",
  "domain": "https://corrosion-management-ndt.vercel.app",
  "guides": [
    {
      "href": "/types",
      "label": "Corrosion Types"
    },
    {
      "href": "/types/pitting",
      "label": "Pitting Corrosion Detection"
    },
    {
      "href": "/types/cui",
      "label": "Corrosion Under Insulation (CUI)"
    },
    {
      "href": "/types/scc",
      "label": "Stress Corrosion Cracking (SCC)"
    },
    {
      "href": "/types/erosion",
      "label": "Erosion-Corrosion"
    }
  ],
  "googleVerification": "",
  "description": "Corrosion Monitoring Resources: practical scoping questions and subject guides for corrosion and asset-integrity teams. Explore relevant Atlantis NDT support."
};
export const offers = [
  {
    "key": "twin",
    "name": "Digital Twin NDT reporting",
    "path": "/digital-twin-reporting",
    "service": "digital-twins",
    "cta": "Request a Digital Twin demo",
    "description": "Explore inspection results in the context of an asset model. Discuss the asset, available records and whether a standalone product or ERP module fits your requirements."
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
