import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function HelpdeskForNdtInspectionCompanies() {
  return (
    <ErpIndustryAppPage
      pageTitle="Helpdesk for NDT Inspection Companies"
      slug="helpdesk-for-ndt-inspection-companies"
      appName="Helpdesk"
      industry="NDT inspection companies"
      breadcrumbLabel="Helpdesk — NDT Inspection"
      trustBadge="ASNT / ISO 17020 / API ready"
      metaDescription="Atlantis NDT ERP Helpdesk for NDT inspection companies — customer report-dispute resolution, NDE method support tickets, instrument-failure escalation, ISO 17020 complaint handling per §7.6, multi-customer SLA tracking. Flat regional pricing."
      heroBody="Atlantis NDT ERP Helpdesk configured for NDT inspection companies — customer report-dispute resolution workflow, NDE method-specific support ticketing (UT, RT, MT, PT, ET, VT, AUT, PAUT, ToFD, ECT), instrument-failure escalation to OEM (Olympus, Sonatest, GE, Eddyfi, Magnaflux), ISO/IEC 17020 §7.6 complaint handling, ISO/IEC 17025 §7.9 complaint handling, and multi-customer SLA tracking with response-time and resolution-time metrics. Part of the all-apps-included subscription."
      whatItIs={[
        "Helpdesk for NDT Inspection Companies inside Atlantis NDT ERP is the Odoo 18 Helpdesk + CRM + Quality module configured for the customer-support reality of NDT inspection businesses — customer report-dispute tickets (typical examples: 'we believe the UT thickness reading at TML-47 is incorrect', 'the RT film density of weld W-22 is below acceptance', 'the PAUT scan at column C12 missed the geometric reflector you should have noted', 'the MT inspection cleared a weld that our shop QC found to have a 2-mm linear indication'), NDE method-specific support requests (technique-development support, calibration verification, customer-specific report format conformance), instrument-failure escalation tickets, and the formal complaint workflow required by ISO/IEC 17020 §7.6 (Complaints) and ISO/IEC 17025 §7.9 (Complaints).",
        "Multi-customer SLA tracking is differentiated — large refining clients (ExxonMobil, Shell, BP, TotalEnergies) typically expect 24-hour acknowledgement / 5-day initial-resolution / 30-day root-cause-closure; midstream / pipeline customers expect faster (12-hour acknowledgement / 3-day initial-resolution); ASNT / API / NACE technical helpdesk for in-house technicians expects same-day acknowledgement. Per-customer SLA breach alerts and per-customer customer-satisfaction (CSAT) score trending are tracked.",
      ]}
      useCases={[
        { useCase: "Use Case 1", body: "A Houston refining inspection contractor (50 inspectors) cut customer report-dispute resolution time from 11 days to 3 via structured helpdesk workflow — and reduced repeat-dispute rate by 65%." },
        { useCase: "Use Case 2", body: "A Calgary pipeline integrity contractor (40 staff) eliminated 14 SLA breaches per quarter on customer-portal-driven help tickets through automated routing and escalation." },
        { useCase: "Use Case 3", body: "A Mumbai refinery inspection contractor (45 inspectors) tracks bilingual English/Hindi customer complaints with full ISO/IEC 17020 §7.6 compliance evidence." },
        { useCase: "Use Case 4", body: "A Dubai NDT inspection firm (30 inspectors) supporting ADNOC refining and offshore work runs multi-language Arabic/English helpdesk with full audit trail." },
      ]}
      keyFeatures={[
        "Customer report-dispute resolution workflow",
        "NDE method-specific support ticket categorisation",
        "Instrument-failure escalation to OEM dealer / manufacturer",
        "ISO/IEC 17020 §7.6 (Complaints) compliance workflow",
        "ISO/IEC 17025 §7.9 (Complaints) compliance workflow",
        "Multi-customer SLA tracking (24h / 5d / 30d typical)",
        "Per-customer customer-satisfaction (CSAT) score trending",
        "Per-NDE-method root-cause analysis (UT, RT, MT, PT, ET, VT, AUT, PAUT, ToFD, ECT)",
        "Knowledge-base article authoring (canonical question-and-answer library)",
        "Customer self-service portal (ticket creation, status tracking)",
        "Multi-language support (English, Spanish, French, Arabic, Hindi, Mandarin)",
        "Email-ticket auto-creation (inbound email parser)",
        "Mobile app for field-crew support-ticket capture",
      ]}
      integrations={[
        "Olympus EvidentScientific support-portal integration",
        "GE Inspection Technologies support-portal",
        "Sonatest support-portal",
        "Eddyfi Technologies support-portal",
        "Magnaflux / Met-L-Chek MT/PT consumable support",
        "Sentry Equipment NACE coupon support",
        "Customer email parser (inbound ticket creation)",
        "Slack / Microsoft Teams notification integration",
        "WhatsApp Business integration for emerging-market customer support",
        "ServiceNow / Zendesk import/export for migrations",
      ]}
      faqs={[
        { question: "Does the helpdesk implement ISO/IEC 17020 §7.6 complaints workflow?", answer: "Yes. ISO/IEC 17020 §7.6 (Complaints) requires inspection bodies to receive, evaluate and decide on complaints with a defined process. The helpdesk implements the full lifecycle — complaint receipt with acknowledgment to customer, complaint evaluation against scope of accreditation, decision on complaint with documented rationale, communication of decision to customer, complaint-record retention with audit trail. Recurring complaint trends are surfaced for systemic root-cause analysis." },
        { question: "How does the helpdesk handle report-dispute resolution?", answer: "Yes. Customer report-disputes — common examples include UT thickness measurement disputes, RT film density disputes, PAUT scan coverage disputes, MT indication evaluation disputes — flow through a structured workflow. Step 1: Initial dispute receipt with photo / measurement evidence. Step 2: Internal review by responsible inspector. Step 3: Independent re-inspection if warranted. Step 4: Resolution with technical rationale documented." },
        { question: "Can the helpdesk track multi-customer SLAs?", answer: "Yes. Different customers expect different SLAs — major refining customers (ExxonMobil, Shell, BP, TotalEnergies, Saudi Aramco) typically expect 24-hour acknowledgement / 5-day initial-resolution / 30-day root-cause-closure; midstream / pipeline customers expect faster cycles; technical-helpdesk for in-house technicians expects same-day acknowledgement. Per-customer SLA configurations are stored with breach alerts." },
        { question: "Does the helpdesk handle instrument-failure escalation?", answer: "Yes. Instrument-failure tickets (Olympus EPOCH 650 failing self-test, OmniScan X3 PAUT phased-array element drop-out, Magnaflux UV-A lamp output below 1000 µW/cm²) route through internal triage and then to the OEM dealer or manufacturer support portal (Olympus EvidentScientific, GE Inspection Technologies, Sonatest, Eddyfi, Magnaflux). The OEM ticket reference is tracked back to the internal ticket for unified lifecycle visibility." },
        { question: "How does the helpdesk handle multi-language customer support?", answer: "Yes. Multi-language support — English, Spanish (LatAm + Spain), French (France + Quebec + West Africa), Arabic (Gulf + Egypt + Levant), Hindi (India), Mandarin (China), Portuguese (Brazil + Portugal + Lusophone Africa), Bahasa Indonesia (Indonesia + Malaysia), Russian — is supported. Per-customer language preference is honored automatically." },
        { question: "Does the helpdesk auto-create tickets from customer emails?", answer: "Yes. Inbound email parsing creates helpdesk tickets automatically — the customer's email subject becomes the ticket title, the body becomes the description, attachments are preserved, the customer record is auto-linked from email-domain matching. Customer thread continuity is maintained across email replies." },
        { question: "Can the helpdesk track NDE-method-specific root cause?", answer: "Yes. NDE-method-specific root-cause analysis identifies whether disputes are concentrated in a specific method (e.g. 'PAUT disputes are 5x more common than UT disputes — investigate PAUT operator training'), method-application (e.g. 'austenitic stainless PAUT disputes are 3x more common than carbon steel PAUT' — investigate technique adaptation), or customer-segment (e.g. 'aerospace disputes are 4x more common than refining' — investigate aerospace-specific written-practice gaps)." },
        { question: "How does the helpdesk maintain a customer-facing knowledge base?", answer: "Yes. Knowledge-base article authoring — canonical question-and-answer library — is built in. Articles are categorised by NDE method, customer industry, application type, and inspection code. Articles are surfaced to customers via the self-service portal and to inspectors via the mobile app, reducing helpdesk volume by 30-50% over 18 months as the knowledge base matures." },
      ]}
    />
  );
}
