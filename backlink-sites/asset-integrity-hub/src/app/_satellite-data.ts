// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "asset-integrity-hub",
  "name": "Asset Integrity Hub",
  "primary": "twin",
  "related": [
    "inspection",
    "consulting"
  ],
  "audience": "Asset integrity and reliability managers",
  "headline": "Connect inspection history to the asset decisions it supports.",
  "introduction": "Start with an asset register and consistent inspection locations. A visual model becomes useful when a finding can be traced to its date, method, source report and review status. Prioritize one asset class and a repeatable data structure before expanding the model across a facility.",
  "questions": [
    "Can the same inspection location be identified across campaigns?",
    "Which source records, drawings and models are available and reliable?",
    "Who reviews changes in condition and approves follow-up work?"
  ],
  "boundary": "A Digital Twin organizes evidence; engineering assessment and inspection intervals still require the applicable procedure and responsible technical authority.",
  "domain": "https://asset-integrity-hub.vercel.app",
  "guides": [
    {
      "href": "/digital-twins",
      "label": "Digital Twins Guide"
    },
    {
      "href": "/erp-solutions",
      "label": "ERP Implementation"
    }
  ],
  "featured": {
    "title": "Preserving Source-Report Provenance When Findings Move onto Asset Models",
    "path": "/guides/source-report-provenance-for-model-mapped-findings",
    "description": "Plan the evidence links, mapping decisions and revision records needed to trace a model marker back to an inspection report and its stated limitations."
  },
  "googleVerification": "",
  "description": "Asset Integrity Hub: practical scoping questions and subject guides for asset integrity and reliability managers. Prepare a clear technical brief."
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
    "description": "Share the asset, location, applicable requirements and work window. The provider confirms method suitability, personnel, delivery availability and quotation scope."
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
    "key": "erp",
    "name": "NDT operations software",
    "path": "/erp",
    "service": "erp",
    "cta": "Request an ERP walkthrough",
    "description": "Connect technician records, calibration, dispatch and inspection reporting. Start with the workflow that needs attention and agree the rollout scope with the provider."
  },
  {
    "key": "reporting",
    "name": "NDT reporting software",
    "path": "/erp/apps/ndt-reports",
    "service": "reporting",
    "cta": "Discuss your reporting workflow",
    "description": "Explore field data capture, company report templates and review workflows. Discuss standalone reporting or its role within the provider's ERP."
  },
  {
    "key": "simulation",
    "name": "Practical NDT Simulation",
    "path": "/practical-ndt",
    "service": "practical-ndt",
    "cta": "Request a Simulation demo",
    "description": "Explore practical learning scenarios for technicians and training teams. Confirm supported methods, assessment needs and standalone or ERP-linked access with the provider."
  },
  {
    "key": "training",
    "name": "NDT training",
    "path": "/training",
    "service": "training",
    "cta": "Ask about NDT training",
    "description": "Discuss method, level, experience, delivery format and course availability. Individual learners and employer-sponsored teams can request a suitable pathway."
  }
];
type Offer = typeof offers[number];
export function contactUrl(offer: Offer, placement: string) {
  const url = new URL('/contact', 'https://atlantisndt.com');
  url.search = new URLSearchParams({ service: offer.service, subject: site.name + ': ' + offer.name, satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: placement }).toString();
  return url.toString();
}
export function productUrl(offer: Offer) { const url = new URL(offer.path, 'https://atlantisndt.com'); url.search = new URLSearchParams({ satellite: site.slug, cta: 'product', utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: 'product' }).toString(); return url.toString(); }
