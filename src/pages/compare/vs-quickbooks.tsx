import ErpComparisonPage from "@/components/ErpComparisonPage";

export default function VsQuickbooks() {
    return (
        <ErpComparisonPage
            slug="vs-quickbooks"
            competitorName="QuickBooks Online"
            competitorShortName="QuickBooks Online"
            competitorVendor="Intuit"
            competitorUrl="https://quickbooks.intuit.com/"
            metaTitle="Atlantis NDT ERP vs QuickBooks Online 2026 — When QuickBooks Alone Isn't Enough"
            metaDescription="QuickBooks Online vs Atlantis NDT ERP for inspection companies. When QuickBooks + spreadsheets is enough, when inspection workflow needs purpose-built tooling."
            keywords="quickbooks alternative inspection, atlantis ndt erp vs quickbooks, quickbooks for ndt company, inspection management beyond quickbooks"
            intro="QuickBooks Online (QBO) is the right choice for very small inspection contractors (1-5 people) where accounting is the primary software need and inspection workflow can be managed with spreadsheets and email. Atlantis NDT ERP doesn't replace QuickBooks — most Atlantis customers run QuickBooks + Atlantis side-by-side. This page covers when QuickBooks + spreadsheets is genuinely sufficient and when inspection workflow has outgrown that approach."
            competitorWinsTitle="When QuickBooks Online is the right choice"
            competitorWinsLead="QuickBooks Online is the right answer in these situations. We acknowledge them honestly."
            competitorWins={[
                      "You are a 1-3 person inspection contractor with simple billing needs and inspection workflow that fits in 2-3 Excel sheets.",
                      "Your annual software budget is under $5K and any specialized tool is premature.",
                      "Inspection is a side business or just-starting venture (under 1 year operating).",
                      "You have only 1-2 active clients and certification tracking fits on a calendar reminder system.",
                      "You don't generate enough inspection reports to justify automation (under 50 reports/year)."
            ]}
            atlantisWinsTitle="When Atlantis NDT ERP wins"
            atlantisWinsLead="Specifically for inspection / NDT / calibration / welding / marine survey / pipeline integrity / aerospace QC service companies:"
            atlantisWins={[
                      "You have 5+ technicians whose ASNT / ISO 9712 / PCN certifications you can no longer track on a spreadsheet without missing expiries.",
                      "You issue more than 100 inspection reports per year and manual Word / Excel formatting is consuming 8-15 hours per week.",
                      "You serve multiple clients with different report-format requirements and your office admin re-types reports per client.",
                      "Your customers are demanding API 510/570/653 / ASME / AWS-compliant report formats that QuickBooks + Word can't generate.",
                      "You've had an audit finding (or close call) due to expired certifications, missed inspection intervals, or missing calibration records."
            ]}
            comparisonRows={[
                      {
                                "dim": "TCO Year 1",
                                "atlantis": "$18K-$30K (small shop tier)",
                                "competitor": "$1K-$3K (QuickBooks Online subscription)"
                      },
                      {
                                "dim": "Scope",
                                "atlantis": "Inspection workflow + cert tracking + basic invoicing",
                                "competitor": "Accounting only (GL, AR, AP, payroll)"
                      },
                      {
                                "dim": "ASNT cert tracking",
                                "atlantis": "Native with expiry alerts",
                                "competitor": "Not offered (need spreadsheet)"
                      },
                      {
                                "dim": "API code scheduling",
                                "atlantis": "Native (API 510/570/653)",
                                "competitor": "Not offered"
                      },
                      {
                                "dim": "Inspection report generation",
                                "atlantis": "Native API-format PDFs",
                                "competitor": "Manual Word / Excel"
                      },
                      {
                                "dim": "Customer reports portal",
                                "atlantis": "Native multi-client",
                                "competitor": "Not offered"
                      },
                      {
                                "dim": "Mobile field capture",
                                "atlantis": "Native iOS / Android offline",
                                "competitor": "QuickBooks mobile app — limited"
                      },
                      {
                                "dim": "Calibration tracking",
                                "atlantis": "Native ISO 17025-ready",
                                "competitor": "Not offered (need spreadsheet)"
                      },
                      {
                                "dim": "Audit-package generation",
                                "atlantis": "One-click",
                                "competitor": "Manual document gathering"
                      },
                      {
                                "dim": "QuickBooks integration",
                                "atlantis": "Native — invoices flow to QBO",
                                "competitor": "(it IS QuickBooks)"
                      },
                      {
                                "dim": "Strongest at",
                                "atlantis": "Inspection workflow + cert + reports",
                                "competitor": "Accounting / financial reporting"
                      }
            ]}
            migrationParagraph="Migration is the wrong framing — QuickBooks and Atlantis are complementary. Most Atlantis customers run QuickBooks Online for accounting (GL, AR, AP, payroll, tax) and Atlantis for inspection workflow (ASNT, codes, reports, audit). Integration via QuickBooks Online API flows approved Atlantis invoices to QBO AR; customer master and chart-of-accounts sync. Implementation 2-3 weeks, $5K-$15K typical for small inspection contractor."
            scenarios={[
                      {
                                "title": "Solo inspector — 1 person, 30 reports/year",
                                "description": "QuickBooks + Word + Excel works. Atlantis at $18K/year is premature. Re-evaluate when you grow past 3 technicians.",
                                "winner": "competitor"
                      },
                      {
                                "title": "Small NDT contractor — 6 people, 200 reports/year, 4 clients",
                                "description": "Atlantis at $24K-$35K/year + QuickBooks Online for accounting is the right combo. The 8-15 hour/week saved on report production and cert tracking covers Atlantis cost within 3-4 months.",
                                "winner": "atlantis"
                      },
                      {
                                "title": "Growing inspection company — 15 people, 800 reports/year, 12 clients",
                                "description": "Atlantis at $40K-$60K/year + QuickBooks Online combo. Multi-client compliance dashboards, customer portals, API-format reports — all needed at this scale. QuickBooks alone with spreadsheets is no longer viable.",
                                "winner": "atlantis"
                      }
            ]}
            faqs={[
                      {
                                "question": "Should I keep QuickBooks if I adopt Atlantis?",
                                "answer": "Yes. QuickBooks remains the financial system of record (GL, AR, AP, payroll, tax). Atlantis becomes the inspection-workflow system of record. Native integration syncs customers, invoices, and chart-of-accounts."
                      },
                      {
                                "question": "When is QuickBooks alone enough?",
                                "answer": "Under 5 people, under 100 reports/year, 1-3 clients. Above those thresholds, spreadsheets + Word-formatted reports start consuming more office-admin time than the cost of purpose-built inspection software."
                      },
                      {
                                "question": "Can Atlantis replace QuickBooks for accounting?",
                                "answer": "No. Atlantis handles T&M invoicing, day-rate billing, expense and mileage capture — operational accounting. For GL, AR, AP, payroll, multi-entity consolidation, sales tax, and financial reporting, QuickBooks (or NetSuite, Xero, Sage Intacct) is the right tool."
                      },
                      {
                                "question": "What's the integration like between Atlantis and QuickBooks?",
                                "answer": "Native QuickBooks Online integration via QBO REST API. Approved Atlantis invoices flow to QBO AR with proper customer / project / GL-code / tax mapping. Sub-contractor bills flow to AP. Customer master and chart-of-accounts sync bi-directionally."
                      },
                      {
                                "question": "What if I use Xero, FreshBooks, or Wave instead?",
                                "answer": "Xero is supported via native integration (same pattern as QuickBooks). FreshBooks and Wave are not natively integrated; CSV export from Atlantis to these platforms works for simple AR. Sage Intacct and Microsoft Dynamics 365 Finance are native integrations."
                      },
                      {
                                "question": "What's the ROI for a small NDT contractor moving from QuickBooks + spreadsheets to QuickBooks + Atlantis?",
                                "answer": "Typical payback 3-6 months. Drivers: 8-15 hours/week saved on report production and cert tracking (translates to $25K-$60K/year of recovered billable time), elimination of audit-finding risk, customer-portal differentiation in proposals."
                      }
            ]}
            ratingValue="4.8"
            ratingCount="94"
            contactSubject="Atlantis NDT ERP + QuickBooks — Small-Shop Setup"
            related={[
                { href: "/compare", label: "All ERP Comparisons", blurb: "Hub: 10 Atlantis NDT ERP vs X comparison pages." },
                { href: "/compare/vs-maximo", label: "vs IBM Maximo", blurb: "Tier-1 EAM platform comparison." },
                { href: "/compare/vs-sap-pm", label: "vs SAP PM", blurb: "Enterprise SAP-ecosystem platform comparison." },
                { href: "/compare/vs-meridium", label: "vs Hexagon Meridium APM", blurb: "Refinery APM / RBI comparison." },
                { href: "/erp-modules", label: "ERP Modules Catalog", blurb: "11 modules of the Atlantis NDT ERP." },
                { href: "/erp-industries", label: "ERP by Industry", blurb: "Tailored configs for 12 inspection verticals." },
                { href: "/ndt-erp-solution", label: "Atlantis NDT ERP", blurb: "Product overview, pricing, modules, deployment." },
                { href: "/ndt-erp-vs-generic-erp", label: "NDT ERP vs Generic ERP", blurb: "Category-level decision framework." },
            ]}
        />
    );
}
