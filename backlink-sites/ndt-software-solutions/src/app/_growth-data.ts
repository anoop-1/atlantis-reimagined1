// Generated from scripts/satellite-upgrade/growth-content.json.
import { site } from "./_satellite-data";
export const growth = {
  "site": "ndt-software-solutions",
  "slug": "spreadsheet-reporting-or-ndt-erp",
  "title": "Spreadsheets, NDT reporting software or ERP: a workflow comparison",
  "description": "Compare three approaches using record ownership, review control and data export. Build a software evaluation brief without an email gate.",
  "keywords": [
    "NDT ERP software",
    "NDT management software",
    "NDT business management software",
    "inspection management software",
    "NDT company management software",
    "NDT reporting and management software"
  ],
  "offer": "erp",
  "answer": "Choose the system boundary before choosing the product. A spreadsheet can support a small, clearly owned register; a reporting tool concentrates on producing and reviewing inspection records; an ERP evaluation follows the job through scheduling, personnel, equipment and commercial handoffs. The practical question is where information loses its owner. Follow a representative job from the client request to the issued report, mark every re-entry, and include a correction after issue. Compare what each proposed system actually demonstrates against that workflow.",
  "decisions": [
    {
      "label": "Shared spreadsheet",
      "evidence": "Useful when the scope is limited and one team owns the register. Keep a documented identifier, controlled master and recoverable revision history. File sharing alone does not prove approval control.",
      "question": "Can a reviewer identify who changed an issued record and recover the previous version?"
    },
    {
      "label": "Dedicated reporting",
      "evidence": "Consider this when report preparation and review are the main bottleneck. Test company templates, attachments, reviewer comments and a corrected issue with your own anonymized example.",
      "question": "Can the issued report, its evidence and the reason for revision be exported together?"
    },
    {
      "label": "Integrated NDT ERP",
      "evidence": "Evaluate this when qualifications, calibration, crew allocation and job status need to stay connected. Separate native functions from configured integrations, migration services and roadmap items.",
      "question": "Who owns each record after migration, and what happens if an integration is unavailable?"
    }
  ],
  "example": "Hypothetical comparison: a contractor maintains a good equipment register but repeatedly copies field readings into client templates. The first pilot can focus on reporting, with a reference to the existing equipment record. A second contractor cannot consistently match assignments to current personnel records; its pilot should include dispatch and authorization. Neither business benefits from scoring every available module equally. Record the unresolved demonstration questions before asking for a quotation.",
  "fields": [
    {
      "label": "Current handoff",
      "hint": "Name the task where people re-enter or reconcile data, and the teams involved."
    },
    {
      "label": "Must-have records",
      "hint": "List job IDs, personnel records, instruments, source files and report templates."
    },
    {
      "label": "Approval exception",
      "hint": "Describe one rejected report or correction after issue to demonstrate."
    },
    {
      "label": "Migration and export",
      "hint": "State which history must move and the formats needed when leaving the system."
    },
    {
      "label": "Pilot evidence",
      "hint": "Define what users must complete successfully before you consider wider rollout."
    }
  ],
  "links": [
    {
      "path": "/erp",
      "label": "NDT ERP software",
      "context": "Use the workflow comparison to scope a demonstration of"
    },
    {
      "path": "/erp/apps/ndt-reports",
      "label": "NDT reporting software",
      "context": "For a reporting-first pilot, review"
    },
    {
      "path": "/resources/ndt-software-buyer-checklist",
      "label": "NDT software buyer checklist",
      "context": "Take the unresolved questions into the"
    }
  ],
  "boundary": "This is a purchasing framework from an Atlantis-owned resource, not an independent ranking or a promise that a particular integration is available."
};
export function referralUrl(path: string, placement: string) { const url = new URL(path, "https://atlantisndt.com"); url.search = new URLSearchParams({ satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: "referral", utm_campaign: "satellite-product-funnels", utm_content: placement }).toString(); return url.toString(); }
