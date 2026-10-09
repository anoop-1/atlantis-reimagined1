// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "construction-ndt-guide",
  "name": "Construction NDT Planning",
  "primary": "inspection",
  "related": [
    "consulting",
    "reporting"
  ],
  "audience": "Fabricators, contractors and construction quality teams",
  "headline": "Organize inspection around the weld register and release sequence.",
  "introduction": "Construction inspection becomes easier to schedule when weld identification, drawing revision and examination extent are agreed. Separate readiness for inspection from final acceptance. A report should make it possible to trace the result back to the component and the applicable requirement.",
  "questions": [
    "Which welds or components require examination and to what extent?",
    "What access, sequencing and site-readiness constraints apply?",
    "How will repairs, re-examination and release status be recorded?"
  ],
  "boundary": "Request a scope review with the governing specification. Inspection availability and acceptance responsibilities must be confirmed for the project.",
  "domain": "https://construction-ndt-guide.vercel.app",
  "guides": [
    {
      "href": "/structural",
      "label": "Structural NDT"
    },
    {
      "href": "/structural/concrete",
      "label": "Concrete NDT Methods"
    },
    {
      "href": "/structural/steel-structures",
      "label": "Steel Structure Testing"
    },
    {
      "href": "/structural/bridges",
      "label": "Bridge Inspection Guide"
    },
    {
      "href": "/structural/rebar",
      "label": "Rebar Detection & Assessment"
    }
  ],
  "googleVerification": "",
  "description": "Construction NDT Planning: practical scoping questions and subject guides for fabricators, contractors and construction quality teams. Explore relevant Atlantis NDT support."
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
