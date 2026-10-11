// Generated from scripts/satellite-upgrade/growth-content.json.
import { site } from "./_satellite-data";
export const growth = {
  "site": "ndt-safety-compliance",
  "slug": "inspection-mobilization-record-review",
  "title": "Inspection mobilization: separate record readiness from site authorization",
  "description": "Organize personnel, equipment, procedures and site prerequisites before scheduling an inspection crew.",
  "keywords": [
    "NDT compliance management",
    "NDT personnel authorization",
    "inspection readiness checklist"
  ],
  "offer": "consulting",
  "answer": "A complete document pack is only one part of readiness. The employer and site authority must also determine whether the proposed work is authorized under the applicable controls. Keep those decisions visible when scheduling inspection. List the record owner, the evidence checked and unresolved prerequisites instead of assigning a single green status to the whole job. Recheck assumptions when the crew, instrument, scope or work location changes; an earlier review may not cover the substitution.",
  "decisions": [
    {
      "label": "Personnel and scope",
      "evidence": "Match the assigned person to the required method, level and employer authorization. Keep access credentials and task qualification as separate checks.",
      "question": "Does the evidence cover this task and employer, rather than merely a similar method name?"
    },
    {
      "label": "Equipment and procedure",
      "evidence": "Identify the actual instruments, accessories and approved instructions to be used. Record substitutions and who reviews their impact.",
      "question": "Which changes require another technical check before the examination can proceed?"
    },
    {
      "label": "Site prerequisites",
      "evidence": "Record the site’s permit, access, preparation and coordination requirements as inputs owned by the site. Do not turn this checklist into a risk assessment.",
      "question": "Who confirms that the work location is released under the site’s own process?"
    }
  ],
  "example": "Hypothetical mobilization: the original crew is ready, but the work window changes and a replacement technician is proposed. The coordinator reopens the affected personnel and access checks while retaining the earlier equipment review. The site still decides whether the new work window is authorized. This avoids both repeating every unrelated check and treating yesterday’s pack as blanket permission for a changed job.",
  "fields": [
    {
      "label": "Assigned scope",
      "hint": "Describe the job, method and work location."
    },
    {
      "label": "Personnel references",
      "hint": "Record the roles and evidence categories to be checked, without personal documents."
    },
    {
      "label": "Equipment substitutions",
      "hint": "Identify planned instruments and the process for reviewing replacements."
    },
    {
      "label": "Site-owned prerequisites",
      "hint": "List required confirmations and the responsible site roles."
    },
    {
      "label": "Open decisions",
      "hint": "Name each unresolved question and the person responsible for closing it."
    }
  ],
  "links": [
    {
      "path": "/consulting/ndt-consulting-level-iii",
      "label": "NDT programme review",
      "context": "Discuss document and responsibility gaps through"
    },
    {
      "path": "/erp",
      "label": "personnel and equipment record management",
      "context": "Explore support for"
    }
  ],
  "boundary": "This is an administrative planning aid, not a safety procedure, permit or authorization to work. Site-specific risks require the responsible safety and technical authorities."
};
export function referralUrl(path: string, placement: string) { const url = new URL(path, "https://atlantisndt.com"); url.search = new URLSearchParams({ satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: "referral", utm_campaign: "satellite-product-funnels", utm_content: placement }).toString(); return url.toString(); }
