# Primary-site handoff for the satellite release

The primary website and product applications were not edited. The 35 satellite upgrades are ready locally; the owner will commit and push them manually.

## Referral contract to preserve

Satellite product links use `satellite`, `cta`, `utm_source`, `utm_medium=referral`, `utm_campaign=satellite-product-funnels` and `utm_content`. The delegated click handler adds `satellite_path` for the actual source page. Contact links also supply the existing `service` value and a bounded, non-personal subject. Worksheet free text is never placed in a URL or analytics event.

Preserve these service values in the primary contact form: `erp`, `reporting`, `digital-twins`, `practical-ndt`, `training`, `inspection`, `consulting`. Confirm successful submission only after the existing backend accepts it, retain the source attribution in authorized lead storage, and distinguish enquiry clicks from accepted enquiries and qualified leads.

Primary commercial intent owners remain `/erp`, `/erp/apps/ndt-reports`, `/digital-twin-reporting`, `/practical-ndt`, `/training`, `/inspection-services` and `/consulting`. Relevant supporting links also use `/ndt-inspection-software`, `/ndt-training-online`, `/consulting/ndt-consulting-level-iii`, the API 510/570/653 inspection-service pages, `/digital-twins`, the software buyer checklist and the training-hours planner. These are verified destinations, not new primary pages created by this release.

## Work requiring the primary-site or account owner

- Complete the commercial landing-page and high-traffic ERP article improvements in the existing primary-site branch. The satellites provide useful decision guides; they do not duplicate a product configurator or claim a production simulation demo.
- Validate each contact service selection, backend success/error behavior, anti-spam controls, lead storage, CRM qualification and source attribution in staging. No live enquiries were submitted during the satellite browser tests.
- Validate consent behavior and GA4/GSC configuration for the actual production domains. Review business events from the strategy only where the corresponding successful action really exists. Keep `satellite_contact_click`, `satellite_brief_complete` and `satellite_brief_download` as secondary interactions.
- Obtain a current US GSC query/page export, an equivalent comparison period, GA4 referral and landing-page segments, and CRM lead/customer counts. Existing supplied query exports are historical primary-site evidence, not current satellite performance.
- Verify genuine product screenshots, supported features, integrations, training formats, schedules, credentials and service availability before making new claims. Obtain permission and evidence before publishing customer case studies.
- Continue ERP, Digital Twin, Simulation, LMS, Connect and private-portal work only in their confirmed applications. Preserve authentication and permissions; fictional demo records must remain isolated from customer records.
- Verify live redirects, canonical hosts, deployment settings, caching, status codes and real-user Core Web Vitals after publication. Local static builds do not establish VPS or production performance.
- Review the prepared outreach proposals and each publication's current rules before any message or submission. Nothing has been sent.

## Measurement checkpoints

At day 30, examine indexation, US impressions/clicks and guide-to-product journeys. At day 60, inspect qualified enquiries and completed demos or consultations by business line. At day 90, use CRM-confirmed customers, enrolments and revenue to choose the next work. Use equivalent windows, retain unknown baselines as unknown and avoid interpreting interaction events as customers.
