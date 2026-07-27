import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Meeting NADCAP Compliance with an NDT Inspection ERP",
  description: "NADCAP AC7114 and AS9100D compliance depend on traceable NDT records. See how inspection-management ERP systems close the audit evidence gap.",
  keywords: ["NADCAP compliance","AC7114","AS9100D","NDT inspection ERP","aerospace quality control","NAS410","audit management"],
  alternates: { canonical: "https://aerospace-ndt-standards.vercel.app/blog/nadcap-compliance-with-ndt-inspection-erp" },
  openGraph: {
    title: "Meeting NADCAP Compliance with an NDT Inspection ERP",
    description: "NADCAP AC7114 and AS9100D compliance depend on traceable NDT records. See how inspection-management ERP systems close the audit evidence gap.",
    type: 'article',
    url: "https://aerospace-ndt-standards.vercel.app/blog/nadcap-compliance-with-ndt-inspection-erp",
    siteName: "Aerospace Ndt Standards",
    locale: 'en_US',
    publishedTime: "2025-03-11",
    modifiedTime: "2025-03-11",
    authors: ["Dana Whitfield, ASNT Level III / NADCAP Program Auditor"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Meeting NADCAP Compliance with an NDT Inspection ERP",
  "description": "NADCAP AC7114 and AS9100D compliance depend on traceable NDT records. See how inspection-management ERP systems close the audit evidence gap.",
  "author": {
    "@type": "Person",
    "name": "Dana Whitfield, ASNT Level III / NADCAP Program Auditor"
  },
  "datePublished": "2025-03-11",
  "dateModified": "2025-03-11",
  "publisher": {
    "@type": "Organization",
    "name": "Aerospace Ndt Standards"
  },
  "mainEntityOfPage": "https://aerospace-ndt-standards.vercel.app/blog/nadcap-compliance-with-ndt-inspection-erp",
  "url": "https://aerospace-ndt-standards.vercel.app/blog/nadcap-compliance-with-ndt-inspection-erp"
};

export default function ArticlePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-slate prose-lg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="breadcrumb text-sm text-gray-500 mb-6">
        <a href="/" className="hover:underline">Home</a>
        <span> / </span>
        <a href="/blog" className="hover:underline">Blog</a>
        <span> / </span>
        <span>How an NDT Inspection ERP Supports NADCAP and AS9100 Compliance</span>
      </nav>
      <h1>How an NDT Inspection ERP Supports NADCAP and AS9100 Compliance</h1>
      <p className="text-sm text-gray-500 mb-8">By Dana Whitfield, ASNT Level III / NADCAP Program Auditor &middot; Published 2025-03-11</p>
      <div dangerouslySetInnerHTML={{ __html: `<p>NADCAP compliance for a nondestructive testing operation means demonstrating, with objective evidence, that every inspection was performed by a currently certified technician, on a calibrated instrument, against a controlled procedure revision, and that the resulting record is fully traceable from purchase order through final disposition &mdash; a standard that most aerospace suppliers cannot meet reliably on paper travelers or disconnected spreadsheets, which is why NDT-heavy sources of supply are increasingly moving inspection records into a dedicated inspection-management ERP.</p><h2>Why NADCAP Audits Fail on NDT Programs</h2><p>The Performance Review Institute's AC7114 family (the base document plus method-specific supplements: AC7114/1 for penetrant, AC7114/2 for magnetic particle, AC7114/3 for radiography, AC7114/4 for ultrasonic, and AC7114/5 for eddy current) drives one of the highest nonconformance rates in the entire NADCAP audit program. The recurring findings are rarely about technique &mdash; they are about evidence. Auditors ask for the personnel certification record tied to a specific inspection report, the calibration certificate tied to a specific instrument serial number used on a specific date, and the procedure revision in effect at the time the part was inspected. When those three records live in three different systems &mdash; a training spreadsheet, a calibration binder, and a paper traveler &mdash; reconstructing the chain for a sampled part takes hours and frequently exposes a gap.</p><h2>Personnel Certification Traceability Under NAS410</h2><p>NAS410 (harmonized with EN 4179 in Europe) governs Level I, II, and III certification for aerospace NDT personnel, including initial qualification, recurring vision exams, and recertification intervals that vary by method. A NADCAP auditor will pull a random inspection report and expect the system to show, without a manual lookup, that the technician who signed it held a valid, unexpired certification in that method on that date. Manual tracking almost always breaks down at scale: certifications lapse quietly, vision exams get missed, and a technician ends up performing accepted work outside their certification window. An inspection-management ERP that hard-links technician IDs to certification expiry dates can block work order assignment for a lapsed credential before the inspection ever happens, turning a reactive audit finding into a preventive control.</p><h2>Calibration and Equipment Control</h2><p>AS9100D clause 7.1.5 and the corresponding NADCAP checklist items require documented evidence that measurement and test equipment is calibrated to a traceable standard, with due dates tracked and equipment quarantined automatically once it lapses. For phased array UT instruments, reference blocks, and eddy current probes, this means every inspection report should carry the equipment serial number, its calibration due date at time of use, and a link back to the calibration certificate itself. Systems built for general manufacturing rarely model this relationship correctly for NDT-specific equipment classes; a platform purpose-built for the industry, such as an <a href='https://atlantisndt.com/ndt-erp-solution' rel='noopener'>NDT-specific ERP solution</a>, treats calibration status as a hard gate on report generation rather than a separate administrative record.</p><h2>AS9102 First Article Inspection and Document Control</h2><p>AS9102 first article inspection reporting frequently requires NDT results as a supporting attachment, and AS9100D clause 8.5.1 requires that production be carried out under controlled conditions, including the correct revision of the applicable specification. For NDT procedures written against ASTM E1417 (liquid penetrant), ASTM E1444 (magnetic particle), ASTM E2001 or E164 (ultrasonic), and customer-specific specifications layered on top, revision control is not optional &mdash; using a superseded acceptance criteria table is a documented cause of NADCAP major findings. Centralizing procedures, revision history, and customer specification cross-references inside the same system that generates the inspection report removes the single most common paperwork-driven nonconformance: an inspector referencing the wrong revision because the correct one wasn't readily accessible on the shop floor.</p><h2>Closing Findings Before They Become NCRs</h2><p>A well-run aerospace supplier treats every internal audit finding the way it would treat a NADCAP finding: root cause, corrective action, verification of effectiveness, and closure evidence, all timestamped and attributable. Doing this in a spreadsheet works for a handful of findings a year; it collapses once a supplier is running concurrent NADCAP merit audits across multiple NDT methods and simultaneously managing customer-specific supplemental requirements. A structured <a href='https://atlantisndt.com/erp-modules/audit-management' rel='noopener'>audit management module</a> keeps finding status, corrective action ownership, and re-audit scheduling in one traceable record set, which is exactly the evidence trail an auditor wants to see when reviewing how the quality system handles its own nonconformances.</p><h2>What an Audit-Ready NDT Workflow Looks Like in Practice</h2><ul><li>Work order creation automatically checks technician certification status against the required method and level before assignment is permitted.</li><li>Instrument selection pulls current calibration status; expired equipment cannot be selected for an active inspection report.</li><li>Inspection reports auto-populate the correct procedure revision based on the customer specification tied to the part number.</li><li>Digital signatures replace wet-ink sign-off while preserving a legally defensible audit trail.</li><li>Nonconformances raised during inspection route directly into the corrective action and audit management workflow, closing the loop without re-keying data.</li><li>Documents, certifications, and calibration records are retrievable in seconds during a sampled-part pull, not hours.</li></ul><h2>Sector-Specific ERP Beats Generic Manufacturing Systems</h2><p>Generic MRP or ERP platforms model calibration, personnel certification, and procedure control as afterthoughts bolted onto a manufacturing workflow that was never designed around inspection evidence. Suppliers serving the aerospace supply chain get more reliable audit outcomes from a platform purpose-built for <a href='https://atlantisndt.com/erp-industries/aerospace-quality-control' rel='noopener'>aerospace quality control</a> workflows, where NDT method, personnel certification, and calibration status are first-class data objects rather than free-text fields. The difference shows up directly in NADCAP audit cycle time and in the number of findings that require a corrective action response rather than a simple observation.</p><h2>The Bottom Line for Quality Managers</h2><p>NADCAP and AS9100D compliance is fundamentally a data traceability problem disguised as a technique problem. Suppliers with strong inspectors still fail audits when the supporting records &mdash; personnel certification, equipment calibration, procedure revision, and corrective action history &mdash; live in disconnected systems. Consolidating those records inside an inspection-management ERP built for NDT does not replace sound inspection practice, but it closes the evidence gap that produces the majority of documentation-driven NADCAP findings, and it turns audit preparation from a multi-week fire drill into a routine data pull.</p>` }} />
    </article>
  );
}
