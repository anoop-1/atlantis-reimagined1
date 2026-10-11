// Site menu (owner, 2026-10-11): the header carries two menus, Products and Services,
// each with its own hover dropdown listing everything in that line. Resources (blog,
// tools, downloads, case studies, statistics) live in the footer, not the header.
// One list for the header (Navigation.tsx) and the footer (ContactDetails.tsx).
export type MenuItem = { name: string; path: string; blurb: string };

export const PRODUCTS: MenuItem[] = [
   { name: "Atlantis ERP", path: "/erp", blurb: "Run your whole NDT business" },
   { name: "Digital Twin Reporting", path: "/digital-twin-reporting", blurb: "Inspection reports on 3D assets" },
   { name: "Practical NDT Simulation", path: "/practical-ndt", blurb: "3D hands-on skills simulator" },
   { name: "NDT Reporting Software", path: "/intelligent-reporting-software", blurb: "Field data to signed reports" },
   { name: "Digital Twins Platform", path: "/digital-twins", blurb: "Asset integrity in 3D" },
   { name: "NDT Connect", path: "/ndt-connect", blurb: "Find NDT service providers" },
];

export const SERVICES: MenuItem[] = [
   { name: "NDT Training", path: "/training", blurb: "ASNT Level III-led courses" },
   { name: "Inspection Services", path: "/inspection-services", blurb: "UT, PAUT, TOFD and API 510/570/653" },
   { name: "NDT Level III Consulting", path: "/consulting", blurb: "Written practices, procedures, audits" },
   { name: "NDT Report Validation", path: "/report-validation", blurb: "Independent review of issued reports" },
   { name: "3D Scanning Services", path: "/3d-scanning-services", blurb: "Laser scanning of plant and assets" },
   { name: "Business Consulting", path: "/business-consulting", blurb: "Set-up, quality systems and growth" },
];

export const RESOURCES: { name: string; path: string }[] = [
   { name: "Blog", path: "/blog" },
   { name: "Case Studies", path: "/case-studies" },
   { name: "Free NDT Tools", path: "/tools" },
   { name: "Resources & Downloads", path: "/resources" },
   { name: "NDT Report Templates", path: "/ndt-report-templates" },
   { name: "Industry Statistics", path: "/ndt-industry-statistics" },
   { name: "FAQ", path: "/faq" },
   { name: "Press & Media", path: "/press" },
];
