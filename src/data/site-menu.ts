// Site menu (owner, 2026-10-11): the header carries two menus, Products and Services,
// each with its own hover dropdown listing everything in that line. Resources (blog,
// tools, downloads, case studies, statistics) live in the footer, not the header.
// One list for the header (Navigation.tsx) and the footer (ContactDetails.tsx).
import { INSPECTION_NAV } from "@/data/inspection-section/index.mjs";
import { CONSULTING_NAV } from "@/data/consulting-section/index.mjs";

export type SubMenuItem = { name: string; path: string; children?: SubMenuItem[] };
export type MenuPanel = { menuTitle?: string; allLabel?: string; talk?: [string, string] };
// `children` (2026-10-18): Services → Inspection opens a nested flyout listing the inspection section.
export type MenuItem = { name: string; path: string; blurb: string; children?: SubMenuItem[] } & MenuPanel;

export const PRODUCTS: MenuItem[] = [
   { name: "Atlantis ERP", path: "/erp", blurb: "Run your whole NDT business" },
   { name: "Digital Twin Reporting", path: "/digital-twin-reporting", blurb: "Inspection reports on 3D assets" },
   { name: "Practical NDT Simulation", path: "/practical-ndt", blurb: "3D hands-on skills simulator" },
   { name: "NDT Reports App", path: "/erp/apps/ndt-reports", blurb: "Field data to signed reports" },
   { name: "Digital Twins Platform", path: "/digital-twins", blurb: "Asset integrity in 3D" },
   { name: "NDT Connect", path: "/ndt-connect", blurb: "Find NDT service providers" },
];

// 2026-11-20 (owner): AWS CWI training sits in the training section: Services › NDT Training opens a panel
// listing the courses, CWI included. The standalone CWI item stays so the footer keeps listing it.
export const TRAINING_NAV: MenuItem = {
   name: "NDT Training", path: "/training", blurb: "ASNT Level III-led courses",
   menuTitle: "NDT and welding inspection training", allLabel: "All training courses",
   talk: ["/contact?service=training&subject=Training%20enquiry", "Talk to us about training"],
   children: [
      { name: "NDT Level 1 Training", path: "/ndt-level-1-training" },
      { name: "NDT Level 2 Training", path: "/ndt-level-2-training" },
      { name: "ASNT Level III Training", path: "/asnt-level-iii-training" },
      { name: "Online NDT Training", path: "/ndt-training-online" },
      { name: "NDT Training in the USA", path: "/ndt-training-usa" },
      { name: "AWS CWI Training (6 Days)", path: "/aws-cwi-training" },
      { name: "NDT Practice Tests", path: "/ndt-practice-tests" },
      { name: "SNT-TC-1A Eligibility Check", path: "/snt-tc-1a-eligibility" },
   ],
};

export const SERVICES: MenuItem[] = [
   TRAINING_NAV,
   { name: "AWS CWI Training (6 Days)", path: "/aws-cwi-training", blurb: "Corporate, online or one-to-one exam prep" },
   { name: INSPECTION_NAV.name, path: INSPECTION_NAV.path, blurb: INSPECTION_NAV.blurb ?? "", children: INSPECTION_NAV.children, menuTitle: INSPECTION_NAV.menuTitle, allLabel: INSPECTION_NAV.allLabel, talk: INSPECTION_NAV.talk },
   { name: "NDT Level III Consulting", path: "/consulting", blurb: "Audits, SNT-TC-1A programmes, compliance, ISO", children: CONSULTING_NAV.children, menuTitle: CONSULTING_NAV.menuTitle, allLabel: CONSULTING_NAV.allLabel, talk: CONSULTING_NAV.talk },
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
