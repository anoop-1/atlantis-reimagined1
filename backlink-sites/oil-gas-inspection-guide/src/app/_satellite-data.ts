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
  "featured": {
    "title": "Contractor evidence handover before turnaround closeout",
    "path": "/guides/contractor-evidence-handover-turnaround-closeout",
    "description": "Build a usable contractor-to-owner handover with a reconciled scope register, report manifest, exceptions and a tested evidence transfer."
  },
  "googleVerification": "",
  "description": "Oil and Gas Inspection Guide: practical scoping questions and subject guides for oil and gas maintenance and integrity buyers. Prepare a clear technical brief."
};
export const offers = [
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
    "key": "twin",
    "name": "Digital Twin NDT reporting",
    "path": "/digital-twin-reporting",
    "service": "digital-twins",
    "cta": "Request a Digital Twin demo",
    "description": "Explore inspection results in the context of an asset model. Discuss the asset, available records and whether a standalone product or ERP module fits your requirements."
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
