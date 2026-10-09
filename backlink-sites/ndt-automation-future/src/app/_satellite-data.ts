// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "ndt-automation-future",
  "name": "NDT Workflow Automation",
  "primary": "erp",
  "related": [
    "twin",
    "simulation"
  ],
  "audience": "Inspection managers evaluating digital workflows",
  "headline": "Automate a defined handoff before automating an entire operation.",
  "introduction": "Map a recurring task such as calibration verification, report review or crew allocation. Record its inputs, exceptions and approval owner. Automation is easier to evaluate when the team can show what happens to an incomplete record or an unusual job rather than only demonstrating the ideal path.",
  "questions": [
    "Which repeated handoff currently creates delay or rework?",
    "What exceptions require a human decision?",
    "How will the team compare the pilot with its current process?"
  ],
  "boundary": "Confirm each capability in a product demonstration. Automation and simulation do not remove the need for qualified personnel and approved procedures.",
  "domain": "https://ndt-automation-future.vercel.app",
  "guides": [
    {
      "href": "/future",
      "label": "Future"
    },
    {
      "href": "/implementation",
      "label": "Implementation"
    },
    {
      "href": "/technologies",
      "label": "Technologies"
    },
    {
      "href": "/trends",
      "label": "Trends"
    }
  ],
  "googleVerification": "",
  "description": "NDT Workflow Automation: practical scoping questions and subject guides for inspection managers evaluating digital workflows. Explore relevant Atlantis NDT support."
};
export const offers = [
  {
    "key": "erp",
    "name": "Atlantis NDT ERP",
    "path": "/erp",
    "service": "erp",
    "cta": "Request an ERP walkthrough",
    "description": "Connect technician records, calibration, dispatch and inspection reporting. Start with the workflow that needs attention and agree the rollout scope with Atlantis."
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
    "key": "simulation",
    "name": "Practical NDT Simulation",
    "path": "/practical-ndt",
    "service": "practical-ndt",
    "cta": "Request a Simulation demo",
    "description": "Explore practical learning scenarios for technicians and training teams. Confirm supported methods, assessment needs and standalone or ERP-linked access with Atlantis."
  },
  {
    "key": "reporting",
    "name": "NDT reporting software",
    "path": "/erp/apps/ndt-reports",
    "service": "reporting",
    "cta": "Discuss your reporting workflow",
    "description": "Explore field data capture, company report templates and review workflows. Discuss standalone reporting or its role within Atlantis ERP."
  },
  {
    "key": "training",
    "name": "NDT training",
    "path": "/training",
    "service": "training",
    "cta": "Ask about NDT training",
    "description": "Discuss method, level, experience, delivery format and course availability. Individual learners and employer-sponsored teams can request a suitable pathway."
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
