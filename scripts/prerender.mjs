/**
 * Atlantis NDT - Build-time Pre-render Script
 * Generates per-route index.html files with correct meta tags for SEO
 * No Puppeteer/Chrome needed - pure Node.js file operations
 *
 * Run: node scripts/prerender.mjs  (automatically after vite build)
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');
const SITE_URL = 'https://atlantisndt.com';

// ─── Helpers ────────────────────────────────────────────────────────────────

function toTitleCase(slug) {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

function injectMeta(html, { title, description, canonical, ogTitle, ogDesc, bodyContent, noindex }) {
  let out = html;

  // Title
  out = out.replace(
    /<title>[^<]*<\/title>/,
    `<title>${title}</title>`
  );

  // Meta description
  out = out.replace(
    /<meta name="description"\s+content="[^"]*"\s*\/>/,
    `<meta name="description" content="${description.replace(/"/g, '&quot;')}" />`
  );

  // Canonical
  if (canonical) {
    out = out.replace(
      /<link rel="canonical" href="[^"]*"\s*\/>/,
      `<link rel="canonical" href="${canonical}" />`
    );
  }

  // OG Title
  out = out.replace(
    /<meta property="og:title" content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${(ogTitle || title).replace(/"/g, '&quot;')}" />`
  );

  // OG Description
  out = out.replace(
    /<meta property="og:description"\s*\n?\s*content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${(ogDesc || description).replace(/"/g, '&quot;')}" />`
  );

  // OG URL
  out = out.replace(
    /<meta property="og:url" content="[^"]*"\s*\/>/,
    `<meta property="og:url" content="${canonical || SITE_URL}" />`
  );

  // Noindex for embeddable widgets
  if (noindex) {
    out = out.replace(
      /<meta name="robots" content="[^"]*"\s*\/>/,
      `<meta name="robots" content="noindex, nofollow" />`
    );
    // If no robots meta exists, add one after description
    if (!out.includes('name="robots"')) {
      out = out.replace(
        /<meta name="description"/,
        `<meta name="robots" content="noindex, nofollow" />\n    <meta name="description"`
      );
    }
  }

  // Replace static body fallback content if provided
  if (bodyContent) {
    out = out.replace(
      /(<div id="root">)[\s\S]*?(<\/div>\s*<script)/,
      `$1\n${bodyContent}\n$2`
    );
  }

  return out;
}

function writeRoute(routePath, meta, template) {
  // routePath is like '/consulting/ndt-consulting-houston'
  // becomes dist/consulting/ndt-consulting-houston/index.html
  const segments = routePath.replace(/^\//, '').split('/');
  const dir = join(DIST, ...segments);
  mkdirSync(dir, { recursive: true });
  const html = injectMeta(template, meta);
  writeFileSync(join(dir, 'index.html'), html, 'utf-8');
}

// ─── Load base template ───────────────────────────────────────────────────

const baseTemplate = readFileSync(join(DIST, 'index.html'), 'utf-8');

// ─── Blog posts ───────────────────────────────────────────────────────────

const blogsRaw = readFileSync(join(ROOT, 'src/data/blogs.json'), 'utf-8');
const blogs = JSON.parse(blogsRaw);

// ─── Route Definitions ────────────────────────────────────────────────────

const routes = [];

// ── Static core pages ────────────────────────────────────────────────────
const corePages = [
  {
    path: '/about',
    title: 'About Atlantis NDT | Global NDT Consulting & Training Leaders',
    description: 'Learn about Atlantis NDT — a global leader in NDT consulting, training and digital twins. 50+ ASNT Level III experts serving oil & gas, aerospace & industry across USA, India and Middle East.',
    bodyH1: 'About Atlantis NDT',
    bodyText: 'Atlantis NDT is a global leader in Non-Destructive Testing consulting, training, and digital twin technology. Our team of 50+ ASNT Level III certified professionals serves clients across the USA, India, and Middle East.',
  },
  {
    path: '/consulting',
    title: 'NDT Consulting Services | ASNT Level III Experts | Atlantis NDT',
    description: 'Expert NDT consulting services from 50+ ASNT Level III professionals. Procedure development, program audits, ASNT SNT-TC-1A compliance, written practices & expert witness services. USA, India, Middle East.',
    bodyH1: 'NDT Consulting Services',
    bodyText: 'Atlantis NDT provides expert NDT consulting services including procedure development, program audits, ASNT SNT-TC-1A compliance, and written practice development.',
  },
  {
    path: '/consulting-usa',
    title: 'NDT Level III Consulting USA | ASNT Certified | Procedure Writing & Program Management',
    description: 'ASNT Level III NDT consulting USA: procedure development, written practices, program audits, third-party inspection. Houston-based, serving nationwide. Free consultation.',
    bodyH1: 'NDT Level III Consulting USA',
    bodyText: 'Expert ASNT Level III NDT consulting services across the USA. Houston-based consultants for procedure writing, program audits, and third-party inspection in oil & gas, petrochemical, and aerospace industries.',
  },
  {
    path: '/consulting-india',
    title: 'NDT Consulting Services India | ASNT Level III Hyderabad | Atlantis NDT',
    description: 'NDT consulting services across India. ASNT Level III certified consultants in Hyderabad for oil & gas, petrochemical, power generation & manufacturing. Serving Mumbai, Chennai, Delhi, Bangalore.',
    bodyH1: 'NDT Consulting Services India',
    bodyText: 'Expert NDT consulting services across India. Hyderabad-based ASNT Level III consultants serving oil & gas, petrochemical, and power generation industries.',
  },
  {
    path: '/consulting-me',
    title: 'NDT Consulting Services Middle East | ASNT Level III UAE | Atlantis NDT',
    description: 'NDT consulting services in UAE, Saudi Arabia, Qatar, Kuwait & Oman. ASNT Level III certified consultants for oil & gas and petrochemical industries across the Gulf region.',
    bodyH1: 'NDT Consulting Services Middle East',
    bodyText: 'Expert NDT consulting services across the Middle East. ASNT Level III consultants in UAE, Saudi Arabia, Qatar, Kuwait, and Oman serving oil & gas and petrochemical industries.',
  },
  {
    path: '/training',
    title: 'NDT Training Courses | ASNT Level I II III Certification | Atlantis NDT',
    description: 'ASNT-aligned NDT training courses for Level I, II & III certification. UT, MT, PT, RT, ET, VT methods. Online and classroom options. 95% pass rate. USA, India & Middle East.',
    bodyH1: 'NDT Training Programs',
    bodyText: 'Professional NDT training courses for ASNT Level I, II, and III certification. Covering UT, MT, PT, RT, ET, and VT methods with 95% pass rate across all programs.',
  },
  {
    path: '/training-usa',
    title: 'NDT Training USA | ASNT Certification Courses Houston | Atlantis NDT',
    description: 'ASNT-aligned NDT training courses in the USA. Level I, II & III certification for UT, MT, PT, RT, ET, VT. Houston training center with online options. 95% pass rate.',
    bodyH1: 'NDT Training USA',
    bodyText: 'Professional NDT training in the USA. Houston-based ASNT certification courses for Level I, II, and III with 95% pass rate.',
  },
  {
    path: '/training-india',
    title: 'NDT Training India | ASNT Certification Hyderabad | Atlantis NDT',
    description: 'NDT training courses in India. ASNT-aligned Level I, II & III certification programs in Hyderabad. UT, MT, PT, RT, ET, VT methods. Online and classroom options.',
    bodyH1: 'NDT Training India',
    bodyText: 'Professional NDT training in India. ASNT certification courses in Hyderabad for Level I, II, and III with classroom and online options.',
  },
  {
    path: '/training-me',
    title: 'NDT Training UAE & Middle East 2026 | Dubai, Saudi Arabia, Qatar',
    description: 'NDT training in UAE, Dubai, Saudi Arabia, Qatar, Kuwait & Oman. ASNT SNT-TC-1A + ISO 9712 Level I/II/III certification. UT, RT, MT, PT, ET, VT. Monthly batches, 95% pass rate. Enrol today.',
    bodyH1: 'NDT Training Middle East',
    bodyText: 'Professional NDT training across Middle East: UAE, Saudi Arabia, Qatar, Kuwait, Oman, and Bahrain. ASNT SNT-TC-1A and ISO 9712 Level I, II, III certification for all major NDT methods.',
  },
  {
    path: '/digital-twins',
    title: 'NDT Digital Twins | 3D Asset Inspection & Visualization | Atlantis NDT',
    description: 'Advanced NDT digital twin technology for oil & gas, aerospace & power generation. Real-time 3D asset visualization, defect mapping, and inspection data integration. Request demo.',
    bodyH1: 'NDT Digital Twins Technology',
    bodyText: 'Advanced digital twin technology for NDT inspection. Real-time 3D asset visualization and defect mapping for oil & gas, aerospace, and power generation industries.',
  },
  {
    path: '/erp',
    title: 'NDT ERP Solution | Inspection Management Software | Atlantis NDT',
    description: 'Comprehensive NDT ERP solution for inspection companies. Manage jobs, personnel certifications, equipment calibration, reports, and invoicing in one platform. Built for NDT.',
    bodyH1: 'NDT ERP Solution',
    bodyText: 'Comprehensive ERP solution built specifically for NDT inspection companies. Manage jobs, certifications, equipment, and reports in one integrated platform.',
  },
  {
    path: '/ndt-methods',
    title: 'NDT Methods Guide | UT MT PT RT ET VT Explained | Atlantis NDT',
    description: 'Complete guide to all major NDT methods: Ultrasonic Testing (UT), Magnetic Particle Testing (MT), Penetrant Testing (PT), Radiographic Testing (RT), Eddy Current (ET), Visual Testing (VT).',
    bodyH1: 'NDT Methods',
    bodyText: 'Comprehensive guide to all major Non-Destructive Testing methods including UT, MT, PT, RT, ET, and VT with applications, techniques, and standards.',
  },
  {
    path: '/faq',
    title: 'NDT FAQ | Common Questions About NDT Consulting & Training | Atlantis NDT',
    description: 'Frequently asked questions about NDT consulting, training, certification, and digital twins. Get answers from ASNT Level III experts at Atlantis NDT.',
    bodyH1: 'Frequently Asked Questions',
    bodyText: 'Get answers to common questions about NDT consulting, training, ASNT certification, and digital twin technology from our Level III experts.',
  },
  {
    path: '/contact',
    title: 'Contact Atlantis NDT | NDT Consulting & Training Inquiry',
    description: 'Contact Atlantis NDT for NDT consulting, training, and digital twin services. Houston TX: +1 (281) 840-8969. Offices in USA, India, and Middle East. Free consultation.',
    bodyH1: 'Contact Atlantis NDT',
    bodyText: 'Contact Atlantis NDT for expert NDT consulting and training services. USA: +1 (281) 840-8969 | Email: info@atlantisndt.com',
  },
  {
    path: '/ndt-connect',
    title: 'NDT Connect | Inspection Management & Reporting Software',
    description: 'NDT Connect: cloud-based inspection management and reporting software for NDT inspectors and companies. Digital reports, certificate tracking, job scheduling. Request a free demo.',
    bodyH1: 'NDT Connect — Inspection Management Software',
    bodyText: 'NDT Connect is cloud-based inspection management and NDT reporting software. Manage inspections, certifications, and digital reports for individuals and inspection companies.',
  },
  {
    path: '/blog',
    title: 'NDT Blog | Insights on Testing, Inspection & Certification | Atlantis NDT',
    description: 'Expert NDT insights on ultrasonic testing, radiographic testing, digital twins, ASNT certification, and NDT industry trends. Written by ASNT Level III professionals.',
    bodyH1: 'NDT Blog & Resources',
    bodyText: 'Expert insights on NDT methods, industry trends, ASNT certification, and digital twin technology. Written by ASNT Level III professionals at Atlantis NDT.',
  },
  {
    path: '/case-studies',
    title: 'NDT Case Studies | Industry Success Stories | Atlantis NDT',
    description: 'Real-world NDT consulting and training success stories. See how Atlantis NDT helped oil & gas, aerospace and power generation companies improve inspection quality.',
    bodyH1: 'NDT Case Studies',
    bodyText: 'Real-world success stories showing how Atlantis NDT helped clients in oil & gas, aerospace, and power generation improve their NDT programs.',
  },
  {
    path: '/ndt-for-oil-gas',
    title: 'NDT for Oil & Gas | Pipeline, Refinery & Offshore Inspection | API 510/570/653 | Atlantis NDT',
    description: 'Expert NDT consulting for oil & gas: pressure vessel API 510, piping API 570, storage tank API 653, pipeline inspection, offshore NDT, CUI detection. ASNT Level III consultants. Free consultation.',
    bodyH1: 'NDT for Oil & Gas Industry',
    bodyText: 'Expert NDT consulting and training for the oil & gas industry. Pipeline inspection, refinery maintenance, and offshore structure assessment by ASNT Level III professionals. API 510/570/653 compliance, CUI programs, and fitness for service assessment.',
  },
  {
    path: '/ndt-for-aerospace',
    title: 'NDT for Aerospace | Aircraft, Composite & Engine Component Inspection | NAS-410 | Atlantis NDT',
    description: 'Expert NDT consulting for aerospace: aircraft structural inspection, composite NDT, engine component testing, NAS-410 compliant procedures, NADCAP audit prep. ASNT Level III consultants.',
    bodyH1: 'NDT for Aerospace Industry',
    bodyText: 'Expert NDT consulting and training for aerospace. Aircraft structural inspection, composite NDT, engine component testing, NAS-410 written practices, and NADCAP audit preparation by ASNT Level III certified professionals.',
  },
  {
    path: '/ndt-for-power-generation',
    title: 'Power Generation NDT | Turbine, Boiler & Generator Inspection | ASME Qualified | Atlantis',
    description: 'Power generation NDT services: gas turbine blade inspection, boiler tube testing, steam turbine rotors, HRSG, condenser tubes. ASME/NRC qualified. Outage planning & Level III consulting.',
    bodyH1: 'NDT Services for Power Generation',
    bodyText: 'Comprehensive NDT inspection, training, and consulting for power plants. Turbines, boilers, generators, and balance of plant. ASME qualified outage support teams with 500+ outages supported.',
  },
  {
    path: '/asnt-certification',
    title: 'ASNT Certification & ACCP Guide 2026 | NDT Level I–III Exam & Costs',
    description: 'Complete ASNT certification guide: SNT-TC-1A vs ACCP differences, Level I/II/III exam requirements, costs ($200-$750), ACCP NDT certification pathway, study tips, and 95% pass rate training.',
    bodyH1: 'ASNT NDT Certification Guide 2026',
    bodyText: 'Complete ASNT certification guide: SNT-TC-1A and ACCP programs for Level I, II, and III across all NDT methods. 95% first-time pass rate with ASNT Level III consulting available.',
  },
  {
    path: '/api-510-certification',
    title: 'API 510 Certification 2026 | Exam Guide, Study Tips & Pass Rates',
    description: 'API 510 Pressure Vessel Inspector certification guide: exam format (150 questions, open-book), required codes, study plan, pass rates, and prep courses. Dubai, Houston & online training with 95% pass rate.',
    bodyH1: 'API 510 Pressure Vessel Inspector Certification',
    bodyText: 'API 510 pressure vessel inspector certification preparation. Comprehensive training and exam prep from experienced ASNT Level III instructors.',
  },
  {
    path: '/api-570-certification',
    title: 'API 570 Certification 2026 | Piping Inspector Exam Guide & Study Plan',
    description: 'API 570 Piping Inspector certification: open-book exam format, 8 required reference codes (ASME B31.3, API 571/574/577), study plan, remaining life formulas, and pass rates. Training in Dubai, Houston & online.',
    bodyH1: 'API 570 Piping Inspector Certification',
    bodyText: 'Comprehensive API 570 Piping Inspector certification exam preparation. Open-book format covering ASME B31.3, API 570/571/574/577, remaining life calculations, and RBI. Dubai, Houston, India, and online.',
  },
  {
    path: '/api-570-training',
    title: 'API 570 Training & Certification | Piping Inspector Exam Prep | Atlantis NDT',
    description: 'API 570 Piping Inspector certification training: exam prep for open-book format, all required codes (ASME B31.3, API 571, 574, 578). Dubai, Houston & online. 95% pass rate.',
    bodyH1: 'API 570 Piping Inspector Training',
    bodyText: 'Comprehensive API 570 Piping Inspector certification training. Open-book exam preparation covering ASME B31.3, API 570, 571, 574, 578, and 580. Available in Dubai, Houston, India, and online.',
  },
  {
    path: '/eddy-current-tube-inspection',
    title: 'Eddy Current Tube Inspection | Heat Exchanger ECT & RFEC | Atlantis NDT',
    description: 'Expert eddy current tube inspection: ECT for non-ferrous tubes, RFEC for carbon steel. Fast heat exchanger inspection with API 510 compliant reports. Get a quote from Atlantis NDT.',
    bodyH1: 'Eddy Current Tube Inspection',
    bodyText: 'Professional eddy current tube inspection services for heat exchangers, boilers, and condensers. ECT and RFEC methods. ASNT Level II certified technicians. API 510 compliant reporting.',
  },
  {
    path: '/api-653-certification',
    title: 'API 653 Certification 2026 | Tank Inspector Exam, Codes & Study Guide',
    description: 'API 653 Tank Inspector certification: open-book exam with 10 reference codes (API 650/651/653), inspection interval calculations, RBI, NDT requirements. 95% pass rate training in Dubai, Houston & online.',
    bodyH1: 'API 653 Aboveground Storage Tank Inspector Certification',
    bodyText: 'Comprehensive API 653 Aboveground Storage Tank Inspector certification exam preparation. Open-book format covering API 653/650/651, RBI, tank inspection intervals, and NDT methods. 95% pass rate.',
  },
  {
    path: '/intelligent-reporting-software',
    title: 'NDT Reporting Software | Digital Inspection Reports & API Compliance',
    description: 'NDT reporting software for digital inspection reports, digital twin integration, and API 510/570/653 compliance tracking. Cloud-based, mobile-ready. Free demo available.',
    bodyH1: 'NDT Reporting Software',
    bodyText: 'Professional NDT reporting software for inspection companies. Digital inspection reports integrated with digital twins, API compliance tracking, and cloud-based MRO NDT solution.',
  },
  {
    path: '/ndt-erp-solution',
    title: 'NDT ERP Solution | Complete Inspection Business Software | Atlantis NDT',
    description: 'Complete ERP solution for NDT inspection companies. Job management, personnel certifications, equipment calibration tracking, invoicing, and reporting. Built for NDT.',
    bodyH1: 'NDT ERP Solution',
    bodyText: 'Comprehensive ERP solution built for NDT inspection companies. Manage your entire business from job creation to invoicing.',
  },
  {
    path: '/digital-twins-oil-gas-assets',
    title: 'Digital Twins for Oil & Gas Assets | Asset Integrity Management | Atlantis NDT',
    description: 'Digital twin solutions for oil & gas asset integrity. Real-time corrosion monitoring, inspection data visualization, risk-based inspection planning. Reduce downtime and costs.',
    bodyH1: 'Digital Twins for Oil & Gas Assets',
    bodyText: 'Advanced digital twin technology for oil & gas asset integrity management. Real-time monitoring, corrosion tracking, and inspection data visualization.',
  },
  {
    path: '/ndt-training-online',
    title: 'Online NDT Training | ASNT Level I II III Virtual Courses | Atlantis NDT',
    description: 'Online NDT training for ASNT SNT-TC-1A Level I, II, III certification. UT, MT, PT, RT, ET, VT theory modules. Flexible schedule, instructor support. Enrol from anywhere.',
    bodyH1: 'Online NDT Training Courses',
    bodyText: 'Online NDT training for ASNT SNT-TC-1A certification. Level I and II theory courses for UT, MT, PT, RT, ET, and VT methods. Live virtual and self-paced options. Practical component must be completed in-person.',
  },
  {
    path: '/ndt-training-usa',
    title: 'NDT Training USA | ASNT Certification Houston | SNT-TC-1A & CP-189 | Atlantis NDT',
    description: 'NDT training in the USA: ASNT SNT-TC-1A and CP-189 Level I, II, III certification. Houston training center. UT, MT, PT, RT, ET, VT. Aerospace NAS-410. 95% pass rate.',
    bodyH1: 'NDT Training USA',
    bodyText: 'Professional NDT training in the USA. ASNT SNT-TC-1A and CP-189 certification courses in Houston, TX and online. Level I, II, and III for UT, MT, PT, RT, ET, VT. Aerospace NAS-410 preparation available. 95% pass rate.',
  },
  {
    path: '/ndt-training-india',
    title: 'NDT Training India | ASNT & ISNT Certification Hyderabad | Atlantis NDT',
    description: 'NDT training in India: ASNT SNT-TC-1A and ISNT Level I, II, III courses in Hyderabad, Mumbai, Chennai, Delhi. UT, MT, PT, RT, ET, VT. 95% pass rate. Enrol today.',
    bodyH1: 'NDT Training India',
    bodyText: 'Professional NDT training across India. ASNT SNT-TC-1A and ISNT Level I, II, and III certification courses in Hyderabad (main center), Mumbai, Chennai, Delhi NCR, and Bangalore. UT, MT, PT, RT, ET, VT. Online options available. 95% pass rate.',
  },
  {
    path: '/ndt-training-dubai',
    title: 'NDT Training Dubai 2026 | ASNT & ISO 9712 Courses [Monthly Batches]',
    description: 'NDT training in Dubai, UAE: ASNT SNT-TC-1A + ISO 9712 Level I/II/III. UT, RT, MT, PT, ET, VT. Monthly class starts, ADNOC & Aramco recognized. 95% pass rate. Tax-free NDT career in UAE.',
    bodyH1: 'NDT Training Dubai & UAE',
    bodyText: 'Professional NDT training in Dubai, Abu Dhabi, and across UAE. ASNT SNT-TC-1A and ISO 9712 Level I, II, III certification for oil & gas industry professionals. CSWIP preparation available. ADNOC and Aramco contractor recognised. Tax-free career in UAE. Monthly class starts.',
  },
  {
    path: '/ndt-training-saudi-arabia',
    title: 'NDT Training Saudi Arabia | ARAMCO SAEP-1112 Compliant | Atlantis NDT',
    description: 'ASNT and ARAMCO-compliant NDT training in Saudi Arabia. SNT-TC-1A Level I, II, III for UT, MT, PT, RT, ET. SAEP-1112 compliant procedures. Vision 2030 project ready.',
    bodyH1: 'NDT Training Saudi Arabia',
    bodyText: 'Professional NDT training in Saudi Arabia. ASNT SNT-TC-1A and SAEP-1112 compliant certification for oil & gas and petrochemical industry professionals. Saudi Aramco and SABIC recognised. Dammam, Riyadh, Jubail, and on-site training available.',
  },
  {
    path: '/ndt-training-hyderabad',
    title: 'NDT Training Hyderabad | ASNT Certification Courses | Atlantis NDT',
    description: 'NDT training in Hyderabad, India. ASNT Level I, II, III certification for UT, MT, PT, RT, ET, VT. Classroom and online options. Best NDT institute in Hyderabad.',
    bodyH1: 'NDT Training Hyderabad',
    bodyText: 'Best NDT training institute in Hyderabad. ASNT certification courses for Level I, II, and III with hands-on lab training.',
  },
  {
    path: '/aerospace-ndt-training',
    title: 'Aerospace NDT Training | NAS-410 Certification Courses | Atlantis NDT',
    description: 'Aerospace NDT training and NAS-410 certification. Aircraft inspection techniques, composite testing, engine component NDT. ASNT certified instructors with aerospace experience.',
    bodyH1: 'Aerospace NDT Training',
    bodyText: 'Specialized NDT training for aerospace industry. NAS-410 certification preparation and aircraft inspection techniques.',
  },
  {
    path: '/oil-gas-ndt-training',
    title: 'Oil & Gas NDT Training | API Inspector Certification | Atlantis NDT',
    description: 'NDT training for oil & gas industry. API 510/570/653 inspection, pipeline integrity, pressure vessel inspection. ASNT certification and API inspector preparation.',
    bodyH1: 'Oil & Gas NDT Training',
    bodyText: 'Specialized NDT training for oil & gas industry professionals. API certification preparation and pipeline/pressure vessel inspection training.',
  },
  {
    path: '/power-generation-ndt-training',
    title: 'Power Generation NDT Training | Boiler & Turbine Inspection | Atlantis NDT',
    description: 'NDT training for power generation industry. Boiler inspection, turbine blade testing, generator component NDT. ASNT certification for power plant inspectors.',
    bodyH1: 'Power Generation NDT Training',
    bodyText: 'NDT training for power generation professionals. Boiler inspection, turbine testing, and power plant component NDT certification.',
  },
  {
    path: '/ndt-connect-platform',
    title: 'NDT Connect Platform | NDT Jobs & Professional Network | Atlantis NDT',
    description: 'NDT Connect: Find NDT jobs, connect with Level III consultants, share inspection insights. The professional network built exclusively for NDT industry.',
    bodyH1: 'NDT Connect Professional Platform',
    bodyText: 'NDT Connect is the professional network exclusively for NDT industry. Find jobs, connect with experts, and grow your career.',
  },
  {
    path: '/ndt-career-guide',
    title: 'NDT Career Guide 2026 | Salary, Highest-Paying Methods & Career Path',
    description: 'How to start and advance in NDT: highest-paying methods (PAUT, TOFD), Level I-III salary ranges, certification paths, and career progression. Expert guidance from ASNT Level III professionals.',
    bodyH1: 'NDT Career Guide',
    bodyText: 'Complete guide to starting and advancing in an NDT career. Certification paths, salary expectations, and career progression advice.',
  },
  {
    path: '/resources-downloads',
    title: 'NDT Resources & Downloads | Study Materials & Guides | Atlantis NDT',
    description: 'Free NDT resources and downloads. Study guides, certification checklists, NDT method comparison charts, and industry standards summaries from Atlantis NDT experts.',
    bodyH1: 'NDT Resources & Downloads',
    bodyText: 'Free NDT resources including study guides, certification materials, and industry standard summaries.',
  },
  {
    path: '/press-media',
    title: 'Press & Media | Atlantis NDT News & Announcements',
    description: 'Latest news, press releases, and media coverage of Atlantis NDT. Industry announcements, partnership news, and company updates.',
    bodyH1: 'Press & Media',
    bodyText: 'Latest news and press releases from Atlantis NDT. Industry announcements and company updates.',
  },
];

corePages.forEach(p => {
  routes.push({
    path: p.path,
    title: p.title,
    description: p.description,
    canonical: `${SITE_URL}${p.path}`,
    bodyContent: p.bodyH1 ? `  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/consulting">NDT Consulting</a><a href="/training">NDT Training</a><a href="/blog">Blog</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>${p.bodyH1}</h1>\n    <p>${p.bodyText}</p>\n  </main>` : null,
  });
});

// ── Blog post pages ──────────────────────────────────────────────────────
blogs.forEach(blog => {
  routes.push({
    path: `/blog/${blog.slug}`,
    title: `${blog.title} | Atlantis NDT`,
    description: blog.excerpt || blog.description || `${blog.title} - Expert NDT insights from ASNT Level III professionals at Atlantis NDT.`,
    canonical: `${SITE_URL}/blog/${blog.slug}`,
    bodyContent: `  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/blog">Blog</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <article>\n      <h1>${blog.title}</h1>\n      <p>${blog.excerpt || ''}</p>\n    </article>\n  </main>`,
  });
});

// ── Consulting city pages ────────────────────────────────────────────────
const consultingCities = [
  'houston', 'los-angeles', 'new-orleans', 'denver', 'chicago', 'seattle',
  'dallas', 'phoenix', 'philadelphia', 'san-francisco', 'detroit', 'pittsburgh',
  'baton-rouge', 'corpus-christi', 'tulsa', 'beaumont', 'dubai', 'saudi-arabia',
  'qatar', 'kuwait', 'abu-dhabi', 'bahrain', 'oman', 'jubail', 'yanbu', 'dammam',
  'mumbai', 'hyderabad', 'bangalore', 'chennai', 'delhi', 'kolkata', 'pune',
  'ahmedabad', 'kochi', 'vizag', 'jamnagar', 'singapore', 'malaysia', 'indonesia',
  'thailand', 'vietnam', 'philippines', 'hong-kong', 'taiwan', 'south-korea',
  'japan', 'china', 'beijing', 'shanghai', 'shenzhen', 'australia', 'sydney',
  'melbourne', 'brisbane', 'perth', 'new-zealand', 'uk', 'norway', 'netherlands',
  'belgium', 'germany', 'france', 'spain', 'italy', 'scotland', 'aberdeen',
  'calgary', 'edmonton', 'toronto', 'vancouver', 'nigeria', 'ghana', 'accra',
  'south-africa', 'cape-town', 'johannesburg', 'nairobi', 'kenya', 'egypt',
  'algeria', 'angola', 'brazil', 'sao-paulo', 'rio-de-janeiro', 'argentina',
  'buenos-aires', 'chile', 'santiago', 'colombia', 'bogota', 'peru', 'lima',
  'mexico-city', 'trinidad', 'bangkok', 'jakarta', 'manila', 'casablanca',
  'lagos', 'ho-chi-minh',
];

// Region-specific differentiators to beat local competitors
const regionDifferentiators = {
  // Middle East
  'dubai': { industries: 'oil & gas, petrochemical, and downstream', certs: 'ASNT Level III & API certified', usp: 'Serving UAE, GCC & Middle East' },
  'saudi-arabia': { industries: 'upstream, downstream & petrochemical', certs: 'Saudi Aramco approved, ASNT Level III', usp: 'Kingdom-wide coverage from Jubail to Yanbu' },
  'qatar': { industries: 'LNG, gas processing & offshore', certs: 'QatarEnergy approved, ASNT certified', usp: 'North Field expansion & Ras Laffan expertise' },
  'kuwait': { industries: 'refining, upstream & petrochemical', certs: 'ASNT Level III & API certified', usp: 'Clean fuels project & KIPIC support' },
  'abu-dhabi': { industries: 'offshore, downstream & sour gas', certs: 'ADNOC approved, ASNT Level III', usp: 'Ruwais & offshore platform specialists' },
  'bahrain': { industries: 'refining, aluminum & petrochemical', certs: 'ASNT Level III certified', usp: 'BAPCO modernization expertise' },
  'oman': { industries: 'EOR, LNG & petrochemical', certs: 'ASNT Level III & API certified', usp: 'PDO & Duqm SEZ specialists' },
  // India
  'mumbai': { industries: 'refining, offshore & petrochemical', certs: 'ASNT Level III, ISNT affiliated', usp: 'Western India corridor specialists' },
  'chennai': { industries: 'automotive, power & refining', certs: 'ASNT Level III certified', usp: 'South India industrial hub experts' },
  'bangalore': { industries: 'aerospace, defense & manufacturing', certs: 'ASNT Level III, NAS 410', usp: 'HAL corridor & aerospace NDT specialists' },
  'delhi': { industries: 'refining, pipeline & power generation', certs: 'ASNT Level III certified', usp: 'North India refinery specialists' },
  'kolkata': { industries: 'steel, thermal power & petrochemical', certs: 'ASNT Level III certified', usp: 'Eastern India heavy industry experts' },
  // Europe
  'uk': { industries: 'offshore, nuclear & aerospace', certs: 'PCN, ASNT Level III certified', usp: 'North Sea & decommissioning experts' },
  'aberdeen': { industries: 'offshore oil & gas, subsea & wind', certs: 'PCN Level III, ASNT certified', usp: 'North Sea integrity management specialists' },
  'norway': { industries: 'offshore, subsea & energy', certs: 'NORSOK compliant, ASNT Level III', usp: 'Norwegian shelf & platform life extension' },
  'germany': { industries: 'chemical, automotive & manufacturing', certs: 'DIN EN ISO, ASNT Level III', usp: 'Ludwigshafen & Leverkusen corridor' },
  'netherlands': { industries: 'refining, offshore & petrochemical', certs: 'ASNT Level III, EN certified', usp: 'Europoort & Rotterdam complex specialists' },
  'france': { industries: 'nuclear, refining & aerospace', certs: 'COFREND, ASNT Level III', usp: 'Nuclear fleet & Total Energies support' },
  'italy': { industries: 'refining, petrochemical & manufacturing', certs: 'ASNT Level III, EN certified', usp: 'ENI operations & Mediterranean refining' },
  // Asia-Pacific
  'singapore': { industries: 'petrochemical, marine & aerospace', certs: 'ASNT Level III certified', usp: 'Jurong Island & regional APAC hub' },
  'australia': { industries: 'LNG, mining & infrastructure', certs: 'ISO 9712, ASNT Level III', usp: 'Gorgon, Wheatstone & NW Shelf experts' },
  'japan': { industries: 'refining, manufacturing & nuclear', certs: 'JIS compliant, ASNT Level III', usp: 'Japanese quality standards specialists' },
  'south-korea': { industries: 'refining, shipbuilding & petrochemical', certs: 'ASNT Level III certified', usp: 'Ulsan mega-refinery specialists' },
  'malaysia': { industries: 'offshore, refining & petrochemical', certs: 'ASNT Level III certified', usp: 'Petronas operations & South China Sea' },
  // Africa
  'nigeria': { industries: 'offshore, onshore & refining', certs: 'ASNT Level III certified', usp: 'Niger Delta & deepwater specialists' },
  'south-africa': { industries: 'synfuels, refining & mining', certs: 'ASNT Level III certified', usp: 'Sasol & SAPREF operations experts' },
  'egypt': { industries: 'gas, refining & petrochemical', certs: 'ASNT Level III certified', usp: 'Mediterranean & Red Sea operations' },
  // Asia-Pacific continued
  'indonesia': { industries: 'offshore, refining & petrochemical', certs: 'ASNT Level III certified', usp: 'Balikpapan, Cilacap & Dumai refinery experts' },
  'thailand': { industries: 'petrochemical, refining & manufacturing', certs: 'ASNT Level III certified', usp: 'Map Ta Phut & PTT operations specialists' },
  'vietnam': { industries: 'offshore, refining & gas processing', certs: 'ASNT Level III certified', usp: 'Dung Quat & Nghi Son refinery experts' },
  'philippines': { industries: 'refining, power & manufacturing', certs: 'ASNT Level III certified', usp: 'Bataan refinery & industrial zone specialists' },
  'hong-kong': { industries: 'marine, construction & infrastructure', certs: 'ASNT Level III certified', usp: 'Asia-Pacific financial hub NDT support' },
  'taiwan': { industries: 'semiconductor, petrochemical & manufacturing', certs: 'ASNT Level III certified', usp: 'Formosa Plastics & CPC refinery specialists' },
  'china': { industries: 'refining, petrochemical & manufacturing', certs: 'ASNT Level III certified', usp: 'Sinopec & PetroChina operations support' },
  'beijing': { industries: 'refining, power & pipeline', certs: 'ASNT Level III certified', usp: 'North China refinery & pipeline specialists' },
  'shanghai': { industries: 'petrochemical, shipbuilding & manufacturing', certs: 'ASNT Level III certified', usp: 'Yangtze Delta industrial corridor experts' },
  'shenzhen': { industries: 'electronics, manufacturing & construction', certs: 'ASNT Level III certified', usp: 'Pearl River Delta industrial hub specialists' },
  'sydney': { industries: 'power, manufacturing & infrastructure', certs: 'ISO 9712, ASNT Level III', usp: 'NSW industrial infrastructure specialists' },
  'melbourne': { industries: 'aerospace, manufacturing & defense', certs: 'ISO 9712, ASNT Level III', usp: 'Victoria advanced manufacturing hub experts' },
  'brisbane': { industries: 'LNG, mining & energy', certs: 'ISO 9712, ASNT Level III', usp: 'Curtis Island LNG & Queensland mining experts' },
  'perth': { industries: 'LNG, mining & offshore', certs: 'ISO 9712, ASNT Level III', usp: 'Gorgon, Wheatstone & Pilbara mining specialists' },
  'new-zealand': { industries: 'energy, manufacturing & infrastructure', certs: 'ASNT Level III certified', usp: 'Taranaki energy & infrastructure experts' },
  'bangkok': { industries: 'petrochemical, automotive & power', certs: 'ASNT Level III certified', usp: 'Eastern Seaboard & Map Ta Phut specialists' },
  'jakarta': { industries: 'refining, offshore & manufacturing', certs: 'ASNT Level III certified', usp: 'Pertamina operations & Java industrial hub' },
  'manila': { industries: 'power, shipbuilding & manufacturing', certs: 'ASNT Level III certified', usp: 'Bataan & Subic Bay industrial corridor' },
  'ho-chi-minh': { industries: 'refining, gas & manufacturing', certs: 'ASNT Level III certified', usp: 'Southern Vietnam industrial hub experts' },
  // Europe continued
  'belgium': { industries: 'petrochemical, refining & nuclear', certs: 'ASNT Level III, EN certified', usp: 'Antwerp port & chemical corridor specialists' },
  'spain': { industries: 'refining, petrochemical & energy', certs: 'ASNT Level III, EN certified', usp: 'Repsol operations & Mediterranean corridor' },
  'scotland': { industries: 'offshore, whisky & energy', certs: 'PCN, ASNT Level III certified', usp: 'North Sea & renewable energy specialists' },
  // Canada
  'calgary': { industries: 'oil sands, midstream & pipeline', certs: 'ASNT Level III, CWB certified', usp: 'Canadian energy sector specialists' },
  'edmonton': { industries: 'oil sands upgrading & petrochemical', certs: 'ASNT Level III, CWB certified', usp: 'Alberta upgrader & refinery specialists' },
  'toronto': { industries: 'automotive, steel & manufacturing', certs: 'ASNT Level III, CGSB certified', usp: 'Golden Horseshoe industrial corridor experts' },
  'vancouver': { industries: 'pipeline, marine & LNG', certs: 'ASNT Level III, CWB certified', usp: 'Trans Mountain & Pacific gateway specialists' },
  // Africa continued
  'ghana': { industries: 'offshore petroleum & mining', certs: 'ASNT Level III certified', usp: 'Jubilee field & West Africa specialists' },
  'accra': { industries: 'offshore oil & gas, mining & industrial', certs: 'ASNT Level III certified', usp: 'Ghana petroleum & mining hub experts' },
  'cape-town': { industries: 'refining, maritime & manufacturing', certs: 'ASNT Level III certified', usp: 'Western Cape industrial corridor specialists' },
  'johannesburg': { industries: 'mining, steel & manufacturing', certs: 'ASNT Level III certified', usp: 'Gauteng mining & industrial hub experts' },
  'nairobi': { industries: 'energy, geothermal & infrastructure', certs: 'ASNT Level III certified', usp: 'East Africa energy & infrastructure specialists' },
  'kenya': { industries: 'geothermal, pipeline & manufacturing', certs: 'ASNT Level III certified', usp: 'Turkana pipeline & geothermal experts' },
  'algeria': { industries: 'gas, refining & petrochemical', certs: 'ASNT Level III certified', usp: 'Sonatrach operations & Saharan pipeline specialists' },
  'angola': { industries: 'offshore deepwater & LNG', certs: 'ASNT Level III certified', usp: 'Sonangol & Angola LNG specialists' },
  'casablanca': { industries: 'phosphate, automotive & manufacturing', certs: 'ASNT Level III certified', usp: 'OCP phosphate & Moroccan industrial hub experts' },
  'lagos': { industries: 'offshore, refining & petrochemical', certs: 'ASNT Level III certified', usp: 'Lagos industrial corridor & West Africa hub' },
  // Americas
  'houston': { industries: 'oil & gas, petrochemical & refining', certs: 'ASNT Level III, API 510/570/653', usp: 'Gulf Coast headquarters, 50+ consultants' },
  'los-angeles': { industries: 'refining, aerospace & manufacturing', certs: 'ASNT Level III, NAS 410', usp: 'West Coast refining & aerospace specialists' },
  'new-orleans': { industries: 'LNG, petrochemical & refining', certs: 'ASNT Level III, API certified', usp: 'Mississippi River corridor & LNG export experts' },
  'denver': { industries: 'oil & gas, aerospace & renewable energy', certs: 'ASNT Level III certified', usp: 'DJ Basin & Rocky Mountain energy specialists' },
  'chicago': { industries: 'refining, steel & manufacturing', certs: 'ASNT Level III, API certified', usp: 'Midwest heavy crude refining & manufacturing experts' },
  'seattle': { industries: 'aerospace, refining & maritime', certs: 'ASNT Level III, NAS 410', usp: 'Boeing corridor & Pacific Northwest specialists' },
  'dallas': { industries: 'aerospace, defense & manufacturing', certs: 'ASNT Level III, NAS 410', usp: 'DFW defense manufacturing corridor experts' },
  'phoenix': { industries: 'semiconductor, aerospace & solar', certs: 'ASNT Level III certified', usp: 'Arizona semiconductor & aerospace specialists' },
  'philadelphia': { industries: 'refining, pharmaceutical & manufacturing', certs: 'ASNT Level III, API certified', usp: 'East Coast refining & industrial corridor experts' },
  'san-francisco': { industries: 'tech manufacturing, refining & marine', certs: 'ASNT Level III certified', usp: 'Bay Area industrial & energy specialists' },
  'detroit': { industries: 'automotive, steel & manufacturing', certs: 'ASNT Level III certified', usp: 'Michigan automotive & heavy industry experts' },
  'pittsburgh': { industries: 'steel, nuclear & manufacturing', certs: 'ASNT Level III certified', usp: 'Steel City industrial heritage specialists' },
  'baton-rouge': { industries: 'refining, petrochemical & chemical', certs: 'ASNT Level III, API certified', usp: 'Louisiana refinery corridor specialists' },
  'corpus-christi': { industries: 'refining, petrochemical & LNG', certs: 'ASNT Level III, API certified', usp: 'South Texas refining & export terminal experts' },
  'tulsa': { industries: 'pipeline, midstream & refining', certs: 'ASNT Level III, API certified', usp: 'Oklahoma pipeline & midstream hub specialists' },
  'beaumont': { industries: 'refining, petrochemical & LNG', certs: 'ASNT Level III, API certified', usp: 'Golden Triangle refinery corridor experts' },
  'brazil': { industries: 'pre-salt deepwater, refining & offshore', certs: 'ASNT Level III certified', usp: 'Petrobras & pre-salt expertise' },
  'sao-paulo': { industries: 'refining, petrochemical & manufacturing', certs: 'ASNT Level III certified', usp: 'REPLAN refinery & Paulinia industrial hub' },
  'rio-de-janeiro': { industries: 'offshore deepwater, refining & subsea', certs: 'ASNT Level III certified', usp: 'Pre-salt FPSO & Comperj specialists' },
  'argentina': { industries: 'oil & gas, mining & power', certs: 'ASNT Level III certified', usp: 'Vaca Muerta shale & Patagonia operations' },
  'buenos-aires': { industries: 'refining, petrochemical & power', certs: 'ASNT Level III certified', usp: 'Argentine industrial corridor specialists' },
  'chile': { industries: 'mining, energy & LNG', certs: 'ASNT Level III certified', usp: 'Copper mining & LNG terminal specialists' },
  'santiago': { industries: 'mining, manufacturing & energy', certs: 'ASNT Level III certified', usp: 'Chilean mining & energy corridor experts' },
  'colombia': { industries: 'oil & gas, refining & pipeline', certs: 'ASNT Level III certified', usp: 'Ecopetrol operations & Andean specialists' },
  'bogota': { industries: 'refining, pipeline & manufacturing', certs: 'ASNT Level III certified', usp: 'Barrancabermeja refinery corridor experts' },
  'peru': { industries: 'mining, gas & refining', certs: 'ASNT Level III certified', usp: 'Camisea gas & Peruvian mining specialists' },
  'lima': { industries: 'refining, mining & manufacturing', certs: 'ASNT Level III certified', usp: 'Talara refinery & Peruvian industrial hub' },
  'mexico-city': { industries: 'refining, automotive & petrochemical', certs: 'ASNT Level III certified', usp: 'PEMEX operations & Mexican manufacturing experts' },
  'trinidad': { industries: 'LNG, gas processing & petrochemical', certs: 'ASNT Level III certified', usp: 'Atlantic LNG & Point Lisas specialists' },
  // Middle East continued
  'jubail': { industries: 'petrochemical, desalination & steel', certs: 'Saudi Aramco approved, ASNT Level III', usp: 'Royal Commission industrial city specialists' },
  'yanbu': { industries: 'refining, petrochemical & utilities', certs: 'Saudi Aramco approved, ASNT Level III', usp: 'Red Sea industrial corridor experts' },
  'dammam': { industries: 'oil & gas, marine & manufacturing', certs: 'Saudi Aramco approved, ASNT Level III', usp: 'Eastern Province petroleum hub specialists' },
  // India continued
  'hyderabad': { industries: 'pharmaceutical, aerospace & defense', certs: 'ASNT Level III certified', usp: 'DRDO corridor & pharma manufacturing experts' },
  'pune': { industries: 'automotive, defense & manufacturing', certs: 'ASNT Level III certified', usp: 'Western India automotive & defense hub' },
  'ahmedabad': { industries: 'refining, textile & petrochemical', certs: 'ASNT Level III certified', usp: 'Gujarat refinery & industrial corridor specialists' },
  'kochi': { industries: 'refining, shipbuilding & petrochemical', certs: 'ASNT Level III certified', usp: 'BPCL Kochi refinery & Cochin Shipyard experts' },
  'vizag': { industries: 'refining, steel & shipbuilding', certs: 'ASNT Level III certified', usp: 'HPCL Vizag refinery & Rashtriya Ispat specialists' },
  'jamnagar': { industries: 'refining & petrochemical', certs: 'ASNT Level III certified', usp: 'Reliance Jamnagar mega-refinery specialists' },
};

consultingCities.forEach(citySlug => {
  const cityName = toTitleCase(citySlug);
  const diff = regionDifferentiators[citySlug];
  const title = diff
    ? `NDT Consulting ${cityName} | ${diff.certs} | ${diff.usp} | Atlantis NDT`
    : `NDT Consulting ${cityName} | ASNT Level III Experts | Free Quote | Atlantis NDT`;
  const desc = diff
    ? `Expert NDT consulting in ${cityName} for ${diff.industries}. ${diff.certs} professionals. Procedure writing, program audits, SNT-TC-1A compliance & expert witness. ${diff.usp}. Get a free quote.`
    : `Top-rated NDT consulting in ${cityName}: ASNT Level III procedure writing, program audits, SNT-TC-1A compliance, and expert witness. 50+ certified consultants. Get a free quote today.`;
  routes.push({
    path: `/consulting/ndt-consulting-${citySlug}`,
    title,
    description: desc,
    canonical: `${SITE_URL}/consulting/ndt-consulting-${citySlug}`,
    bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Level III Consulting ${cityName}</h1>\n    <p>ASNT Level III NDT consulting services in ${cityName}${diff ? ` for ${diff.industries}` : ''}. Expert procedure development, program audits, SNT-TC-1A compliance, and written practice development${diff ? `. ${diff.usp}` : ' for oil & gas, petrochemical, and industrial facilities'}.</p>\n  </main>`,
  });
});

// Special city consulting page
routes.push({
  path: '/consulting/ndt-consulting-level-iii',
  title: 'NDT Level III Consulting | ASNT Certified Expert Consultants',
  description: 'NDT Level III consulting services: ASNT-certified procedure development, SNT-TC-1A compliance, program audits, personnel qualification, written practices, and expert witness. Global coverage.',
  canonical: `${SITE_URL}/consulting/ndt-consulting-level-iii`,
});

// ── NDT Method + City pages ───────────────────────────────────────────────
const methodPages = [
  { method: 'Ultrasonic Testing', slug: 'ultrasonic-testing', short: 'UT', detail: 'weld inspection, thickness measurement, corrosion mapping and flaw detection' },
  { method: 'Radiographic Testing', slug: 'radiographic-testing', short: 'RT', detail: 'weld inspection, casting evaluation, pipe inspection and volumetric flaw detection' },
  { method: 'Magnetic Particle Testing', slug: 'magnetic-particle-testing', short: 'MT', detail: 'surface and near-surface crack detection in ferromagnetic materials' },
  { method: 'Liquid Penetrant Testing', slug: 'penetrant-testing', short: 'PT', detail: 'surface-breaking defect detection in welds, castings and machined parts' },
  { method: 'Eddy Current Testing', slug: 'eddy-current-testing', short: 'ET', detail: 'heat exchanger tube inspection, surface crack detection and conductivity testing' },
  { method: 'Visual Testing', slug: 'visual-testing', short: 'VT', detail: 'direct and remote visual inspection of welds, structures and components' },
];

const methodCities = [
  'houston', 'los-angeles', 'new-orleans', 'denver', 'chicago', 'calgary',
  'norway', 'kuwait', 'abu-dhabi', 'bangalore', 'mumbai', 'delhi', 'chennai',
  'singapore', 'dubai', 'saudi-arabia', 'qatar', 'uk',
];

methodPages.forEach(m => {
  // Main method page
  routes.push({
    path: `/${m.slug}`,
    title: `${m.method} (${m.short}) | NDT Inspection Services | Atlantis NDT`,
    description: `Professional ${m.method} (${m.short}) services. ASNT Level II & III certified inspectors for ${m.detail}. Oil & gas, aerospace & industrial inspection worldwide.`,
    canonical: `${SITE_URL}/${m.slug}`,
    bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/blog">Blog</a></nav></header>\n  <main>\n    <h1>${m.method} Services</h1>\n    <p>Professional ${m.method} (${m.short}) inspection services from ASNT Level II & III certified inspectors. Specializing in ${m.detail}.</p>\n  </main>`,
  });

  // City-specific method pages
  methodCities.forEach(citySlug => {
    const cityName = toTitleCase(citySlug);
    routes.push({
      path: `/${m.slug}-${citySlug}`,
      title: `${m.method} ${cityName} | ${m.short} Inspection Services | Atlantis NDT`,
      description: `Professional ${m.method} (${m.short}) services in ${cityName}. ASNT Level II & III certified inspectors for ${m.detail}. Serving oil & gas, aerospace & industrial clients.`,
      canonical: `${SITE_URL}/${m.slug}-${citySlug}`,
      bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>${m.method} Services ${cityName}</h1>\n    <p>Professional ${m.method} (${m.short}) inspection services in ${cityName} from ASNT Level II & III certified inspectors. Specializing in ${m.detail}.</p>\n  </main>`,
    });
  });
});

// ── Ultrasonic Testing pillar page override (replaces generic methodPages entry) ──
routes.push({
  path: '/ultrasonic-testing',
  title: 'Ultrasonic Testing (UT) | PAUT, TOFD, AUT Guide | ASME V Art 4 | Atlantis NDT',
  description: 'Complete guide to ultrasonic testing: conventional UT, phased array (PAUT), TOFD, AUT, guided wave. ASME V Article 4, API 5L, AWS D1.1. Level I-III UT training and Level III consulting.',
  canonical: `${SITE_URL}/ultrasonic-testing`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/training">Training</a><a href="/blog">Blog</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>Ultrasonic Testing (UT) | Complete Guide to UT NDT Methods</h1>\n    <p>Complete guide to ultrasonic testing (UT): conventional pulse-echo, phased array UT (PAUT), TOFD, automated UT, guided wave testing, and immersion UT. ASME Section V Article 4, API 5L, API 1104, AWS D1.1 compliant. ASNT Level I–III UT training and Level III consulting from Atlantis NDT.</p>\n  </main>`,
});

// ── Magnetic Particle Testing pillar page override ──────────────────────────
routes.push({
  path: '/magnetic-particle-testing',
  title: 'Magnetic Particle Testing (MT/MPI) | Surface Defect Detection | ASME V Art 7 | Atlantis NDT',
  description: 'Complete guide to magnetic particle testing (MT/MPI): wet fluorescent, dry powder, yoke and prod methods. ASME V Article 7, API 650, AWS D1.1. Level I-III MT training and Level III consulting.',
  canonical: `${SITE_URL}/magnetic-particle-testing`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/training">Training</a><a href="/blog">Blog</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>Magnetic Particle Testing (MT/MPI) | Surface &amp; Near-Surface Defect Detection</h1>\n    <p>Complete guide to magnetic particle testing (MT/MPI): wet fluorescent MT (WFMT), dry powder MT, yoke method, prod method, and coil/central conductor technique. ASME Section V Article 7, API 650, API 570, AWS D1.1 compliant. ASNT Level I–III MT training and Level III consulting from Atlantis NDT.</p>\n  </main>`,
});

// ── Liquid Penetrant Testing pillar page override ───────────────────────────
routes.push({
  path: '/penetrant-testing',
  title: 'Liquid Penetrant Testing (PT/FPI) | Surface Crack Detection | ASME V Art 6 | Atlantis NDT',
  description: 'Complete guide to liquid penetrant testing: visible dye, fluorescent FPI, water washable, post-emulsifiable. ASME V Article 6, AMS 2644, ASTM E1417. Level I-III PT training and consulting.',
  canonical: `${SITE_URL}/penetrant-testing`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/training">Training</a><a href="/blog">Blog</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>Liquid Penetrant Testing (PT/FPI) | Surface Defect Detection | Any Material</h1>\n    <p>Complete guide to liquid penetrant testing (PT/FPI): visible dye penetrant, fluorescent penetrant inspection (FPI), water washable PT, and post-emulsifiable PT. AMS 2644 sensitivity levels 1/2 through 4. ASME Section V Article 6, AMS 2644, ASTM E1417, API 570 compliant. ASNT Level I–III PT training and Level III consulting from Atlantis NDT.</p>\n  </main>`,
});

// ── Radiographic Testing pillar page override ────────────────────────────
routes.push({
  path: '/radiographic-testing',
  title: 'Radiographic Testing (RT) | X-Ray, Gamma & Digital Radiography | ASME V Art 2 | Atlantis NDT',
  description: 'Complete guide to radiographic testing: film RT, digital radiography, gamma (Ir-192, Co-60), computed radiography. ASME V Article 2, API 1104, AWS D1.1. Level I-III RT training and consulting.',
  canonical: `${SITE_URL}/radiographic-testing`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/training">Training</a><a href="/blog">Blog</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>Radiographic Testing (RT) | X-Ray, Gamma &amp; Digital Radiography | ASME V Art 2</h1>\n    <p>Complete guide to radiographic testing (RT): film radiography, digital radiography (DR), computed radiography (CR), and gamma radiography with Ir-192, Co-60, Se-75. ASME Section V Article 2, API 1104 pipeline radiography, AWS D1.1. ASNT Level I–III RT training, radiation safety consulting, and Level III RT consulting from Atlantis NDT.</p>\n  </main>`,
});

// ── Visual Testing pillar page override ──────────────────────────────────
routes.push({
  path: '/visual-testing',
  title: 'Visual Testing (VT) | Direct & Remote Visual Inspection | ASME V Art 9 | Atlantis NDT',
  description: 'Complete guide to visual testing: direct VT, borescope inspection, remote visual (RVI), drone NDT. ASME V Article 9, AWS D1.1. Level I-III VT training and certification. Atlantis NDT.',
  canonical: `${SITE_URL}/visual-testing`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/training">Training</a><a href="/blog">Blog</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>Visual Testing (VT) | Direct &amp; Remote Visual Inspection | ASME V Art 9</h1>\n    <p>Complete guide to visual testing (VT): direct visual examination, remote visual inspection (RVI), rigid borescope inspection, flexible videoscope inspection, and drone/UAV NDT. ASME Section V Article 9, AWS D1.1 weld visual acceptance criteria. ASNT Level I–III VT training, AWS CWI preparation, and Level III VT consulting from Atlantis NDT.</p>\n  </main>`,
});

// ── Phased Array UT pillar page ──────────────────────────────────────────
routes.push({
  path: '/phased-array-ut',
  title: 'Phased Array UT (PAUT) | S-Scan Weld Inspection | ASME V App IV | Atlantis NDT',
  description: 'Complete guide to phased array ultrasonic testing (PAUT): S-scan, TFM, ASME V Appendix IV, AWS D1.1 Annex K. PAUT vs conventional UT. Level II PAUT training and Level III consulting.',
  canonical: `${SITE_URL}/phased-array-ut`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/training">Training</a><a href="/blog">Blog</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>Phased Array Ultrasonic Testing (PAUT) | Advanced Weld &amp; Component Inspection | Atlantis NDT</h1>\n    <p>Complete guide to phased array ultrasonic testing (PAUT): S-scan beam steering, multi-angle weld inspection, TFM (Total Focusing Method), ASME V Appendix IV compliance, PAUT vs conventional UT comparison, and Level I–III PAUT training from Atlantis NDT.</p>\n  </main>`,
});

// ── TOFD Testing pillar page ─────────────────────────────────────────────
routes.push({
  path: '/tofd-testing',
  title: 'TOFD Testing | Time of Flight Diffraction | ASME V App III | Weld Inspection | Atlantis NDT',
  description: 'Complete guide to TOFD testing: time of flight diffraction for weld volumetric inspection. ASME V Appendix III, EN ISO 10863. TOFD vs PAUT vs RT comparison. Specialist training available.',
  canonical: `${SITE_URL}/tofd-testing`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/training">Training</a><a href="/blog">Blog</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>TOFD Testing | Time of Flight Diffraction | Weld Volumetric Inspection | Atlantis NDT</h1>\n    <p>Complete guide to TOFD testing (time of flight diffraction): diffraction physics, D-scan interpretation, lateral wave and back wall reference signals, dead zone, ASME V Article 4 Mandatory Appendix III, EN ISO 10863, BS 7706. TOFD vs PAUT vs radiographic testing comparison. Specialist TOFD training and ASME Appendix III procedure development from Atlantis NDT.</p>\n  </main>`,
});

// ── Additional standalone pages ──────────────────────────────────────────
const extraPages = [
  { path: '/digital-twins-ndt-guide', title: 'Digital Twins for NDT | Complete Implementation Guide [2026]', description: 'Complete guide to digital twins in NDT. How digital twin technology transforms inspection, asset integrity, and maintenance in oil & gas, aerospace, and power generation.' },
  { path: '/digital-twins-oil-gas', title: 'Digital Twins for Oil & Gas [2026] | Pipeline & Asset Integrity', description: 'Digital twin solutions for oil & gas in 2026. Real-time pipeline monitoring, corrosion tracking, and predictive maintenance. Reduce inspection costs by 40%.' },
  { path: '/ut-vs-rt-comparison', title: 'UT vs RT: Which NDT Method Should You Choose? [2026 Side-by-Side Guide]', description: 'UT vs RT comparison: cost, speed, defect detection accuracy, radiation safety, and code requirements (ASME, AWS, API). Decision matrix to choose the right weld inspection method.' },
  { path: '/blog/api-653-tank-inspection-guide', title: 'API 653 Tank Inspection Guide [2026] | Intervals, Floor Scanning & Checklist', description: 'API 653 tank inspection explained: external (every 5 yr), internal (every 10 yr, RBI-adjustable), floor UT/MFL scanning, shell thickness evaluation, and hot-tap repair criteria. Free downloadable checklist.' },
  { path: '/blog/ndt-career-guide', title: 'NDT Career Guide 2026 | Salary, Certifications & Career Path', description: 'How to become an NDT inspector in 2026: certification requirements (ASNT, ISO 9712), salary ranges ($45K-$120K+), highest-paying methods, and career advancement from Level I to Level III.' },
  { path: '/blog/ut-vs-rt-comparison', title: 'UT vs RT: Which NDT Method Should You Choose? [2026 Comparison Table]', description: 'Side-by-side comparison of ultrasonic testing vs radiographic testing: cost ($800 vs $1,500/weld), speed, accuracy, radiation safety, ASME/AWS code requirements. Decision matrix included.' },
  { path: '/blog/digital-twins-ndt-guide', title: 'Digital Twins in NDT: How They Transform Inspection & Asset Integrity', description: 'How digital twin technology is transforming NDT inspections. Implementation guide with real ROI data, case studies from oil & gas, and step-by-step adoption roadmap.' },
  { path: '/blog/digital-twins-oil-gas', title: 'Digital Twins in Oil & Gas [2026]: Implementation Guide & ROI Data', description: 'How oil & gas companies implement digital twins for asset integrity in 2026. Pipeline monitoring, corrosion prediction, 40% cost reduction case studies, and vendor comparison.' },
];

extraPages.forEach(p => {
  routes.push({
    path: p.path,
    title: p.title,
    description: p.description,
    canonical: `${SITE_URL}${p.path}`,
  });
});

// ── Advanced NDT Method Pages ─────────────────────────────────────────────
routes.push({
  path: '/guided-wave-testing',
  title: 'Guided Wave Testing (GWT/LRUT) | Long-Range Pipe Screening | CUI Detection | Atlantis NDT',
  description: 'Complete guide to guided wave testing: long-range ultrasonic pipe screening, CUI detection, buried pipe inspection. ASTM E2775, API 570. LRUT consulting from Atlantis NDT Level III experts.',
  canonical: `${SITE_URL}/guided-wave-testing`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/ultrasonic-testing">Ultrasonic Testing</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>Guided Wave Testing (GWT/LRUT) | Long-Range Pipe Screening | CUI Detection</h1>\n    <p>Guided Wave Testing (GWT), also known as Long-Range Ultrasonic Testing (LRUT), screens hundreds of metres of pipe from a single test point. Ideal for CUI detection, buried pipeline assessment, and rack piping inspection. ASTM E2775, API 570 Appendix H compliant. ASNT Level III consulting from Atlantis NDT.</p>\n  </main>`,
});

routes.push({
  path: '/corrosion-mapping',
  title: 'Corrosion Mapping | UT Thickness Mapping & C-Scan | API 510/570/653 | Atlantis NDT',
  description: 'Expert corrosion mapping services: PAUT C-scan, automated UT scanning, manual thickness surveys. API 510/570/653 reporting, fitness for service assessment, remaining life calculations.',
  canonical: `${SITE_URL}/corrosion-mapping`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/ultrasonic-testing">Ultrasonic Testing</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>Corrosion Mapping | Ultrasonic Thickness Mapping &amp; C-Scan Inspection</h1>\n    <p>Quantify metal loss across large areas with PAUT C-scan, automated UT scanning, and manual thickness surveys. API 510/570/653 compliant reporting, fitness for service assessment per API 579, and remaining life calculations for pressure vessels, tanks, and pipelines. Atlantis NDT provides all corrosion mapping methods globally.</p>\n  </main>`,
});

routes.push({
  path: '/digital-twin-reporting',
  title: 'Digital Twin Reporting Software | 3D NDT Data Visualization | Atlantis NDT',
  description: 'Create color-coded 3D digital twins from your NDT inspection data. Visualize corrosion, thickness loss, and defect distribution across vessels, pipelines, and tanks. API 579 fitness-for-service reporting.',
  canonical: `${SITE_URL}/digital-twin-reporting`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/digital-twins">Digital Twins</a><a href="/erp">NDT ERP</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>Digital Twin Reporting Software | 3D NDT Data Visualization</h1>\n    <p>Transform raw NDT inspection data into interactive 3D color-coded digital twins. Enter asset dimensions and thickness measurements — the platform generates a live visual model showing green (acceptable), amber (monitor), orange (plan repair), and red (immediate action) zones. API 579, API 510/570/653, and ASME compliant reporting from Atlantis NDT.</p>\n  </main>`,
});

routes.push({
  path: '/corrosion-under-insulation',
  title: 'Corrosion Under Insulation (CUI) | Detection Methods & Inspection Programme | Atlantis NDT',
  description: 'Expert guide to CUI detection: pulsed eddy current, guided wave testing, profile radiography, and infrared thermography. API RP 583 compliant CUI inspection programmes. Atlantis NDT Level III consulting.',
  canonical: `${SITE_URL}/corrosion-under-insulation`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/guided-wave-testing">Guided Wave Testing</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>Corrosion Under Insulation (CUI) | Detection Methods &amp; Inspection Programme</h1>\n    <p>Corrosion under insulation is one of the costliest damage mechanisms in the oil &amp; gas and petrochemical industries. This guide covers CUI risk factors, the five proven detection technologies (GWT, PEC, Profile RT, UT, IRT), governing codes (API RP 583, API 570, API 510), and a 6-step CUI management programme. Atlantis NDT provides CUI inspection consulting and Level III programme design globally.</p>\n  </main>`,
});

// ── High-Priority Keyword Pages (2026) ───────────────────────────────────
routes.push({
  path: '/weld-inspection',
  title: 'Weld Inspection Services | AWS D1.1, ASME IX, API 1104 | Atlantis NDT',
  description: 'Expert weld inspection guide: NDT methods for weld quality control (RT, UT, PAUT, MT, PT, VT), weld defect types, governing codes AWS D1.1, ASME Section IX, API 1104. PAUT replacing RT for most weld applications. ASNT Level III consulting.',
  canonical: `${SITE_URL}/weld-inspection`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/phased-array-ut">PAUT</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>Weld Inspection Services | NDT Methods for Weld Quality Control</h1>\n    <p>Weld inspection is the single largest application of NDT — approximately 15% of all industrial NDT globally. This guide covers all major weld inspection methods (RT, PAUT, UT, MT, PT, VT), weld defect types and best NDT method for each, governing codes (AWS D1.1, ASME Section IX, API 1104, EN ISO 17638), PAUT vs RT comparison, and inspection procedure requirements. ASNT Level III weld inspection consulting from Atlantis NDT.</p>\n  </main>`,
});

routes.push({
  path: '/acoustic-emission-testing',
  title: 'Acoustic Emission Testing (AET) | Pressure Vessel & Pipeline Monitoring | Atlantis NDT',
  description: 'Complete guide to acoustic emission testing: passive stress wave monitoring for pressure vessels, storage tank floors, pipeline leak detection. ASME Section V Article 12, ASTM E569. Whole-structure monitoring without internal access.',
  canonical: `${SITE_URL}/acoustic-emission-testing`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/ultrasonic-testing">Ultrasonic Testing</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>Acoustic Emission Testing (AET) | In-Service Pressure Vessel &amp; Pipeline Monitoring</h1>\n    <p>Acoustic Emission Testing (AET) is a passive NDT technique that monitors entire structures simultaneously by detecting stress waves from active defects, corrosion, and leaks. Unlike RT or UT which inspect one location at a time, AET uses a fixed sensor array to screen complete vessels, tank floors, or pipeline sections while equipment remains in service. ASME Section V Article 12/13, ASTM E569. Atlantis NDT provides AET program design and Level III consulting globally.</p>\n  </main>`,
});

routes.push({
  path: '/magnetic-flux-leakage-testing',
  title: 'Magnetic Flux Leakage Testing (MFL) | Tank Floor & Pipeline Inspection | Atlantis NDT',
  description: 'Complete guide to Magnetic Flux Leakage (MFL) testing: tank floor inspection per API 653 Appendix C, in-line pipeline inspection (ILI pigging), well casing, wire rope. Hall effect sensors, MFL vs UT, API 653/1163/NACE SP0102 standards.',
  canonical: `${SITE_URL}/magnetic-flux-leakage-testing`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/corrosion-mapping">Corrosion Mapping</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>Magnetic Flux Leakage Testing (MFL) | Tank Floor &amp; Pipeline Inspection</h1>\n    <p>Magnetic Flux Leakage (MFL) testing uses magnetic saturation and Hall effect sensors to detect metal loss in ferromagnetic materials. MFL is the standard method for API 653 storage tank floor inspection (Appendix C) and the backbone of pipeline integrity management through in-line inspection (ILI) pigging per API 1163 and NACE SP0102. 95-100% scan coverage. Atlantis NDT provides MFL program consulting globally.</p>\n  </main>`,
});

routes.push({
  path: '/ndt-technician-salary',
  title: 'NDT Technician Salary 2026 | By Method, Level & Location | Atlantis NDT',
  description: 'Complete NDT technician salary guide 2026: salary ranges by ASNT Level I/II/III, by NDT method (PAUT earns $80K-$110K, AUT $85K-$115K), by location (Houston, Dubai, Calgary, UK). Median $55,000-$95,000 USA. Updated February 2026.',
  canonical: `${SITE_URL}/ndt-technician-salary`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/training">NDT Training</a><a href="/asnt-certification">ASNT Certification</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Technician Salary Guide 2026: By Method, Level &amp; Location</h1>\n    <p>NDT technicians earn $28-$85/hour depending on method, level, location, and industry. USA median salary: $55,000-$95,000/year. PAUT and AUT specialists command 40-80% premium over MT/PT baseline. Level III commands 30-60% premium over Level II. Top locations: Houston (oil &amp; gas), Dubai (tax-free), offshore North Sea/Gulf of Mexico. Complete salary tables by ASNT level, NDT method, and location. Atlantis NDT training helps you reach the next level.</p>\n  </main>`,
});

// ── New High-Intent Pages (2026) ────────────────────────────────────────
routes.push({
  path: '/ndt-methods-comparison',
  title: 'NDT Methods Comparison 2026 | UT vs RT vs MT vs PT vs ET vs VT [Guide]',
  description: 'Complete NDT methods comparison: side-by-side table of UT, RT, MT, PT, ET, VT by cost, speed, accuracy, and application. Includes decision flowchart and industry selection matrix.',
  canonical: `${SITE_URL}/ndt-methods-comparison`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/ndt-methods">NDT Methods</a><a href="/training">Training</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Methods Comparison Guide 2026</h1>\n    <p>Complete side-by-side comparison of all six major NDT methods — Ultrasonic Testing (UT), Radiographic Testing (RT), Magnetic Particle Testing (MT), Liquid Penetrant Testing (PT), Eddy Current Testing (ET), and Visual Testing (VT) — with cost, speed, accuracy, and application data. Decision flowchart and industry selection matrix included.</p>\n  </main>`,
});

routes.push({
  path: '/ndt-certification-guide',
  title: 'NDT Certification Guide 2026 | Requirements, Costs & Career Path [Complete]',
  description: 'Complete NDT certification guide: ASNT SNT-TC-1A vs ISO 9712 vs PCN comparison, Level I/II/III requirements, exam costs ($200-$750), training hours, and career salary progression.',
  canonical: `${SITE_URL}/ndt-certification-guide`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/asnt-certification">ASNT Certification</a><a href="/training">Training</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Certification Guide 2026 | Complete Pathway from Level I to III</h1>\n    <p>Everything you need to know about NDT certification: ASNT SNT-TC-1A vs ISO 9712 vs PCN vs CSWIP comparison, Level I/II/III requirements, training hours, exam costs, career progression, and salary expectations at each level.</p>\n  </main>`,
});

// ─── Tools Pages ─────────────────────────────────────────────────────────

routes.push({
  path: '/tools',
  title: 'Free NDT Tools & Calculators | Method Selector, Cost Calculator, ROI | Atlantis NDT',
  description: 'Free interactive NDT tools: method selector quiz, certification cost calculator, inspection ROI calculator, and quick reference chart. Built for NDT professionals by ASNT Level III experts.',
  canonical: `${SITE_URL}/tools`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/tools">Tools</a><a href="/resources">Resources</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>Free NDT Tools & Calculators</h1>\n    <p>Interactive tools to help NDT professionals make better decisions. Method selector, certification cost calculator, inspection ROI calculator, and NDT quick reference chart.</p>\n  </main>`,
});

routes.push({
  path: '/tools/ndt-method-selector',
  title: 'NDT Method Selector Tool | Find the Right Testing Method | Atlantis NDT',
  description: 'Interactive quiz to find the best NDT method for your application. Answer 6 questions about material, defects, access, and codes to get ranked recommendations with confidence scores.',
  canonical: `${SITE_URL}/tools/ndt-method-selector`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/tools">Tools</a><a href="/ndt-methods">NDT Methods</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Method Selector Tool</h1>\n    <p>Answer 6 questions about your inspection requirements and get ranked NDT method recommendations with confidence scores. Covers UT, RT, MT, PT, ET, and VT.</p>\n  </main>`,
});

routes.push({
  path: '/tools/ndt-certification-cost-calculator',
  title: 'NDT Certification Cost Calculator 2026 | Training Investment & ROI | Atlantis NDT',
  description: 'Calculate NDT certification costs by region: ASNT Level I/II/III, ISO 9712, API 510/570/653. See exam fees, training costs, and 5-year ROI projections.',
  canonical: `${SITE_URL}/tools/ndt-certification-cost-calculator`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/tools">Tools</a><a href="/ndt-certification-guide">Certification Guide</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Certification Cost Calculator 2026</h1>\n    <p>Calculate the total cost of NDT certifications including exam fees, training, materials, and travel. Compare costs across regions and see 5-year ROI projections.</p>\n  </main>`,
});

routes.push({
  path: '/tools/ndt-roi-calculator',
  title: 'NDT Inspection ROI Calculator | Time-Based vs Risk-Based Savings | Atlantis NDT',
  description: 'Calculate ROI of switching from time-based to risk-based NDT inspection. Input facility parameters and see annual savings, failure prevention, and 5-year projections.',
  canonical: `${SITE_URL}/tools/ndt-roi-calculator`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/tools">Tools</a><a href="/consulting">Consulting</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Inspection ROI Calculator</h1>\n    <p>Compare time-based vs risk-based inspection approaches. Enter facility parameters to see annual cost savings, failure prevention statistics, and 5-year ROI projections.</p>\n  </main>`,
});

routes.push({
  path: '/tools/ndt-quick-reference',
  title: 'NDT Quick Reference Chart | All 6 Methods Compared | Atlantis NDT',
  description: 'Quick reference comparison of all 6 NDT methods: UT, RT, MT, PT, ET, VT. Side-by-side table with defects detected, materials, costs, and speed. Embeddable widget available.',
  canonical: `${SITE_URL}/tools/ndt-quick-reference`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/tools">Tools</a><a href="/ndt-methods">NDT Methods</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Quick Reference Chart</h1>\n    <p>Compare all six major NDT methods at a glance. Side-by-side comparison table covering defects detected, materials, surface prep, skill level, cost, and speed. Embed on your site with one line of code.</p>\n  </main>`,
});

routes.push({
  path: '/embed/ndt-reference',
  title: 'NDT Quick Reference Widget',
  description: 'Embeddable NDT quick reference widget for external sites.',
  canonical: `${SITE_URL}/embed/ndt-reference`,
  bodyContent: `  <main>\n    <h1>NDT Quick Reference</h1>\n    <p>Powered by Atlantis NDT</p>\n  </main>`,
  noindex: true,
});

// ─── Resource Pages ──────────────────────────────────────────────────────

routes.push({
  path: '/resources/ndt-inspection-checklist',
  title: 'NDT Inspection Checklist | Pre-Inspection to Reporting | Free Download | Atlantis NDT',
  description: 'Free NDT inspection checklist covering pre-inspection planning, equipment calibration, during inspection requirements, post-inspection reporting, and code-specific reminders. Download as PDF.',
  canonical: `${SITE_URL}/resources/ndt-inspection-checklist`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/resources">Resources</a><a href="/consulting">Consulting</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Inspection Checklist</h1>\n    <p>Comprehensive checklist for planning and executing NDT inspections. Covers pre-inspection, during inspection, and post-inspection requirements per ASME Section V, API 510/570/653.</p>\n  </main>`,
});

routes.push({
  path: '/resources/api-653-inspection-template',
  title: 'API 653 Tank Inspection Template | AST Inspection Forms | Free Download | Atlantis NDT',
  description: 'Free API 653 tank inspection template with shell thickness readings, floor condition assessment, corrosion rate calculations, and remaining life estimation forms.',
  canonical: `${SITE_URL}/resources/api-653-inspection-template`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/resources">Resources</a><a href="/api-653-certification">API 653</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>API 653 Tank Inspection Template</h1>\n    <p>Template for above-ground storage tank inspections per API 653. Includes shell, floor, and roof inspection forms, thickness reading tables, and corrosion rate calculations.</p>\n  </main>`,
});

routes.push({
  path: '/resources/asnt-level-iii-study-guide',
  title: 'ASNT Level III Study Guide | Exam Prep Overview | Free Download | Atlantis NDT',
  description: 'Free ASNT Level III exam study guide: exam format, topics by method, key standards, study strategy, common failure areas, and day-of-exam tips.',
  canonical: `${SITE_URL}/resources/asnt-level-iii-study-guide`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/resources">Resources</a><a href="/asnt-certification">ASNT Certification</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>ASNT Level III Exam Study Guide</h1>\n    <p>Comprehensive study guide for ASNT Level III certification: exam format, topic coverage by method, key standards, study timeline, and test-day strategies.</p>\n  </main>`,
});

routes.push({
  path: '/resources/ndt-procedure-template',
  title: 'NDT Procedure Template | SNT-TC-1A & ISO 9712 Compliant | Free Download | Atlantis NDT',
  description: 'Free NDT procedure writing template aligned with ASNT SNT-TC-1A and ISO 9712. Covers scope, equipment, calibration, technique, evaluation, and reporting sections.',
  canonical: `${SITE_URL}/resources/ndt-procedure-template`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/resources">Resources</a><a href="/consulting">Consulting</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Procedure Template</h1>\n    <p>General NDT procedure template aligned with ASNT SNT-TC-1A and ISO 9712. Includes sections for scope, equipment, calibration, technique, evaluation criteria, and reporting requirements.</p>\n  </main>`,
});

routes.push({
  path: '/resources/ndt-safety-checklist',
  title: 'NDT Safety Checklist | Radiation, Electrical & Worksite Safety | Free Download | Atlantis NDT',
  description: 'Free NDT safety checklist covering radiation safety for RT, electrical safety for ET/UT, chemical safety for PT/MT, confined space entry, and working at heights.',
  canonical: `${SITE_URL}/resources/ndt-safety-checklist`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/resources">Resources</a><a href="/training">Training</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Safety Checklist</h1>\n    <p>Safety checklist for NDT operations: radiation safety, electrical safety, chemical safety, confined space, working at heights. Covers all major NDT methods.</p>\n  </main>`,
});

routes.push({
  path: '/resources/training-requirements-matrix',
  title: 'NDT Training Requirements Matrix | Hours by Method & Level | Free Download | Atlantis NDT',
  description: 'Free training requirements matrix: ASNT SNT-TC-1A, ISO 9712, and PCN training hours by NDT method and certification level. Side-by-side scheme comparison.',
  canonical: `${SITE_URL}/resources/training-requirements-matrix`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/resources">Resources</a><a href="/training">Training</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Training Requirements Matrix</h1>\n    <p>Matrix showing training hour requirements for NDT certifications: ASNT SNT-TC-1A, ISO 9712, and PCN. Comparison by method and level with education credit reductions.</p>\n  </main>`,
});

// ─── Content & Guide Pages ──────────────────────────────────────────────

routes.push({
  path: '/ndt-industry-statistics',
  title: 'NDT Industry Statistics 2026 | Market Size, Salaries, Growth Data | Atlantis NDT',
  description: 'NDT industry data: $15.8B market (2024) growing to $25.3B (2030), salary ranges by method and level, workforce statistics, certification demographics, and regional market share.',
  canonical: `${SITE_URL}/ndt-industry-statistics`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/blog">Blog</a><a href="/ndt-technician-salary">Salary Guide</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Industry Statistics 2026</h1>\n    <p>Comprehensive NDT industry data with interactive charts. Global market size, growth projections, salary statistics by method and level, workforce demographics, and regional market share analysis.</p>\n  </main>`,
});

routes.push({
  path: '/ndt-complete-guide',
  title: 'What is Non-Destructive Testing? Complete NDT Guide 2026 | Atlantis NDT',
  description: 'Complete guide to non-destructive testing (NDT): what it is, 6 major methods (UT, RT, MT, PT, ET, VT), advanced techniques, applications by industry, standards, certification, and careers.',
  canonical: `${SITE_URL}/ndt-complete-guide`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/ndt-methods">NDT Methods</a><a href="/training">Training</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>What is Non-Destructive Testing? Complete NDT Guide 2026</h1>\n    <p>Everything you need to know about NDT: definition, history, the six major methods, advanced techniques, applications by industry, governing standards and codes, certification pathways, career opportunities, and the future of NDT.</p>\n  </main>`,
});

routes.push({
  path: '/api-inspector-guide',
  title: 'API Inspector Guide 2026 | API 510 vs 570 vs 653 Comparison | Atlantis NDT',
  description: 'Complete API inspector guide: API 510 vs 570 vs 653 side-by-side comparison, prerequisites, exam format, study strategy, career path, and salary expectations.',
  canonical: `${SITE_URL}/api-inspector-guide`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/api-510-certification">API 510</a><a href="/api-570-certification">API 570</a><a href="/api-653-certification">API 653</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>API Inspector Guide 2026</h1>\n    <p>Complete guide for API inspectors: API 510, 570, and 653 comparison, certification requirements, exam preparation, career path, and salary expectations at each level.</p>\n  </main>`,
});

routes.push({
  path: '/ndt-standards-comparison',
  title: 'NDT Standards Comparison | ASME Section V vs ASTM vs ISO vs EN | Atlantis NDT',
  description: 'NDT standards comparison: ASME Section V, ASTM, ISO, EN, AWS, and API standards. Which standard applies by application, country, and industry. Acceptance criteria differences.',
  canonical: `${SITE_URL}/ndt-standards-comparison`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/ndt-methods">NDT Methods</a><a href="/consulting">Consulting</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Standards Comparison</h1>\n    <p>Comprehensive comparison of NDT standards: ASME Section V, ASTM, ISO, EN, AWS, and API. Coverage by method, industry, and country with acceptance criteria differences explained.</p>\n  </main>`,
});

routes.push({
  path: '/ndt-equipment-guide',
  title: 'NDT Equipment Guide 2026 | Top Brands & Instrument Comparison | Atlantis NDT',
  description: 'NDT equipment comparison: Olympus, GE/Baker Hughes, Eddyfi, Sonatest, Zetec. UT, RT, MT, PT, ET instruments compared by features, price range, and best applications.',
  canonical: `${SITE_URL}/ndt-equipment-guide`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/ndt-methods">NDT Methods</a><a href="/consulting">Consulting</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Equipment Guide 2026</h1>\n    <p>Compare NDT equipment from top manufacturers: Olympus, GE/Baker Hughes, Eddyfi, Sonatest, Zetec. Instrument recommendations by method, application, and budget.</p>\n  </main>`,
});

routes.push({
  path: '/ndt-learning-path',
  title: 'NDT Learning Path | From Beginner to Level III Expert | Free Guide | Atlantis NDT',
  description: 'Structured NDT learning roadmap: 5 stages from introduction to Level III expert. Training requirements, certification milestones, salary at each stage, and recommended resources.',
  canonical: `${SITE_URL}/ndt-learning-path`,
  bodyContent: `  <header><nav><a href="/">Home</a><a href="/ndt-certification-guide">Certification</a><a href="/training">Training</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Learning Path | Beginner to Level III Expert</h1>\n    <p>Your complete roadmap from NDT beginner to Level III expert. Five structured stages with training requirements, certification milestones, salary expectations, and recommended resources at each level.</p>\n  </main>`,
});

// ─── Digital Twin Location Pages ──────────────────────────────────────────

const digitalTwinCities = [
  { slug: 'houston',      city: 'Houston',      country: 'USA',         assets: 'refinery pressure vessels, offshore FPSO hulls, and pipeline networks' },
  { slug: 'dubai',        city: 'Dubai',        country: 'UAE',         assets: 'ENOC refinery vessels, offshore platform topsides, and product storage tanks' },
  { slug: 'abu-dhabi',    city: 'Abu Dhabi',    country: 'UAE',         assets: 'ADNOC offshore platforms, LNG cryogenic storage, and sour-gas pipelines' },
  { slug: 'saudi-arabia', city: 'Saudi Arabia', country: 'Saudi Arabia',assets: 'Saudi Aramco crude separators, refinery columns, and cross-country pipelines' },
  { slug: 'calgary',      city: 'Calgary',      country: 'Canada',      assets: 'oil sands coking units, bitumen upgrader vessels, and cold-service pipelines' },
  { slug: 'singapore',    city: 'Singapore',    country: 'Singapore',   assets: 'Jurong Island cracker units, naphtha storage tanks, and heat exchanger bundles' },
  { slug: 'mumbai',       city: 'Mumbai',       country: 'India',       assets: 'BPCL refinery columns, ONGC offshore wellheads, and coastal storage tanks' },
  { slug: 'london',       city: 'London',       country: 'UK',          assets: 'North Sea FPSO hulls, downstream refinery vessels, and pipeline risers' },
  { slug: 'perth',        city: 'Perth',        country: 'Australia',   assets: 'Gorgon and Wheatstone LNG cryogenic storage, FLNG vessel structures' },
  { slug: 'doha',         city: 'Doha',         country: 'Qatar',       assets: 'QatarEnergy LNG cryogenic spheres, North Field platform structures' },
  { slug: 'kuwait',       city: 'Kuwait City',  country: 'Kuwait',      assets: 'Al-Zour refinery vessels, KNPC process equipment, and crude pipeline networks' },
  { slug: 'aberdeen',     city: 'Aberdeen',     country: 'UK',          assets: 'North Sea fixed platform members, FPSO hull plating, and subsea risers' },
  { slug: 'oslo',         city: 'Oslo',         country: 'Norway',      assets: 'Equinor platform topsides, subsea manifolds, and NORSOK mooring chains' },
  { slug: 'rotterdam',    city: 'Rotterdam',    country: 'Netherlands', assets: 'Europoort cracking columns, crude storage tanks, and chemical reactors' },
  { slug: 'hyderabad',    city: 'Hyderabad',    country: 'India',       assets: 'HPCL refinery monitoring systems, BHEL power boilers, and gas separators' },
  { slug: 'muscat',       city: 'Muscat',       country: 'Oman',        assets: 'PDO oil production separators, OQ Sohar refinery vessels, and Sur LNG tanks' },
  { slug: 'kuala-lumpur', city: 'Kuala Lumpur', country: 'Malaysia',    assets: 'Pengerang Integrated Complex reactors, Petronas FPSO structures, and LNG storage' },
  { slug: 'lagos',        city: 'Lagos',        country: 'Nigeria',     assets: 'Dangote Refinery distillation units, NNPC vessels, and deepwater FPSO hulls' },
  { slug: 'new-orleans',  city: 'New Orleans',  country: 'USA',         assets: 'refinery pressure vessels, LNG export terminal cryogenic tanks, and petrochemical reactors' },
  { slug: 'denver',       city: 'Denver',       country: 'USA',         assets: 'DJ Basin separator vessels, Rocky Mountain pipelines, and midstream compression vessels' },
];

digitalTwinCities.forEach(({ slug, city, country, assets }) => {
  routes.push({
    path: `/digital-twin-${slug}`,
    title: `Digital Twin NDT ${city} | 3D Inspection Visualization | Atlantis NDT`,
    description: `Digital twin NDT solutions in ${city}, ${country}. Real-time 3D asset visualization for ${assets}. API 510/570/653 compliant reporting, corrosion trending, FFS assessment, and predictive maintenance. Request a demo from Atlantis NDT.`,
    canonical: `${SITE_URL}/digital-twin-${slug}`,
    bodyContent: `  <header><nav><a href="/">Home</a><a href="/digital-twins">Digital Twins</a><a href="/digital-twin-reporting">Reporting Platform</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>Digital Twin Solutions ${city} | 3D Asset Inspection Visualisation</h1>\n    <p>Atlantis NDT delivers digital twin inspection solutions in ${city}, ${country}. Our platform transforms NDT data from ultrasonic testing, TOFD, and phased array into a live colour-coded 3D model of your assets — including ${assets}. Real-time corrosion monitoring, API 579 fitness-for-service calculations, and automated API 510/570/653 regulatory reporting. Book a demonstration today.</p>\n  </main>`,
  });
});

// ── NDT ERP Location Pages ───────────────────────────────────────────────

const erpCities = [
  { city: 'Houston',      country: 'USA',          slug: 'houston',      industries: 'refineries, petrochemical plants, and midstream operators' },
  { city: 'Dubai',        country: 'UAE',          slug: 'dubai',        industries: 'oil & gas operators, EPC contractors, and offshore facilities' },
  { city: 'Abu Dhabi',    country: 'UAE',          slug: 'abu-dhabi',    industries: 'ADNOC facilities, downstream refining, and offshore platforms' },
  { city: 'Saudi Arabia', country: 'Saudi Arabia', slug: 'saudi-arabia', industries: 'Saudi Aramco, SABIC, and major petrochemical complexes' },
  { city: 'Calgary',      country: 'Canada',       slug: 'calgary',      industries: 'oil sands operations, midstream pipelines, and conventional petroleum' },
  { city: 'Singapore',    country: 'Singapore',    slug: 'singapore',    industries: 'Jurong Island petrochemicals, LNG terminals, and marine inspection' },
  { city: 'Mumbai',       country: 'India',        slug: 'mumbai',       industries: 'BPCL and HPCL refineries, ONGC offshore assets, and petrochemicals' },
  { city: 'London',       country: 'UK',           slug: 'london',       industries: 'North Sea support, nuclear, aerospace, and manufacturing sectors' },
  { city: 'Perth',        country: 'Australia',    slug: 'perth',        industries: 'LNG plants, iron ore processing, and offshore Carnarvon Basin operations' },
  { city: 'Doha',         country: 'Qatar',        slug: 'doha',         industries: 'QatarEnergy LNG, North Field expansion, and petrochemical complexes' },
  { city: 'Kuwait City',  country: 'Kuwait',       slug: 'kuwait',       industries: 'KNPC clean fuels, KOC upstream operations, and Al-Zour refinery' },
  { city: 'Muscat',       country: 'Oman',         slug: 'muscat',       industries: 'PDO oilfields, OQ refinery, and Duqm Special Economic Zone' },
  { city: 'Hyderabad',    country: 'India',        slug: 'hyderabad',    industries: 'HPCL refinery, BHEL manufacturing, and pharmaceutical sector' },
  { city: 'Chennai',      country: 'India',        slug: 'chennai',      industries: 'CPCL refinery, automotive manufacturing, and aerospace' },
  { city: 'Kuala Lumpur', country: 'Malaysia',     slug: 'kuala-lumpur', industries: 'PETRONAS upstream and downstream, and ASEAN energy infrastructure' },
  { city: 'Lagos',        country: 'Nigeria',      slug: 'lagos',        industries: 'NNPCL refineries, Shell SPDC network, and IOC upstream operations' },
  { city: 'New Orleans',  country: 'USA',          slug: 'new-orleans',  industries: 'Gulf Coast refineries, petrochemical corridor, and PSM-covered facilities' },
  { city: 'Denver',       country: 'USA',          slug: 'denver',       industries: 'DJ Basin shale, Rocky Mountain midstream pipelines, and refineries' },
  { city: 'Aberdeen',     country: 'UK',           slug: 'aberdeen',     industries: 'UKCS offshore platforms, FPSOs, and onshore terminal facilities' },
  { city: 'Oslo',         country: 'Norway',       slug: 'oslo',         industries: 'NCS offshore, Equinor, Aker BP, and NORSOK-governed operations' },
];

erpCities.forEach(({ city, country, slug, industries }) => {
  routes.push({
    path: `/ndt-erp-${slug}`,
    title: `NDT ERP Software ${city} | Inspection Management System | Atlantis NDT`,
    description: `NDT ERP software for inspection companies in ${city}, ${country}. Automate ASNT certification tracking, API 510/570/653 scheduling, and PDF report generation for ${industries}.`,
    canonical: `${SITE_URL}/ndt-erp-${slug}`,
    bodyContent: `  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/erp">NDT ERP</a><a href="/consulting">Consulting</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT ERP Software in ${city} | Inspection Management System</h1>\n    <p>Purpose-built NDT ERP software for inspection companies in ${city}, ${country}. Manage ASNT, ISO 9712, and PCN certification tracking with automated expiry alerts, API 510/570/653 inspection scheduling, corrosion data trending, and professional PDF report generation — all in one cloud platform. Serving ${industries}. Request a demo from Atlantis NDT.</p>\n  </main>`,
  });
});

// ─── 20 US State Pages (NDT Level III Consulting & Training) ─────────────

const usStatePages = [
  { slug: 'texas', name: 'Texas', abbr: 'TX', focus: 'oil & gas, petrochemical, aerospace, wind energy', cities: 'Houston, Dallas, San Antonio, Austin, Midland, Beaumont, Corpus Christi' },
  { slug: 'california', name: 'California', abbr: 'CA', focus: 'aerospace (Boeing, Northrop Grumman, SpaceX), refining, infrastructure', cities: 'Los Angeles, San Francisco, San Diego, Sacramento' },
  { slug: 'louisiana', name: 'Louisiana', abbr: 'LA', focus: 'petrochemical corridor, LNG export terminals, offshore oil & gas', cities: 'New Orleans, Baton Rouge, Lake Charles' },
  { slug: 'ohio', name: 'Ohio', abbr: 'OH', focus: 'manufacturing, nuclear power, refining, pipeline integrity', cities: 'Cleveland, Cincinnati, Columbus, Toledo' },
  { slug: 'pennsylvania', name: 'Pennsylvania', abbr: 'PA', focus: 'nuclear power, refining, steel manufacturing, Marcellus Shale', cities: 'Philadelphia, Pittsburgh' },
  { slug: 'colorado', name: 'Colorado', abbr: 'CO', focus: 'DJ Basin oil & gas, aerospace (Lockheed Martin), mining, wind energy', cities: 'Denver, Colorado Springs' },
  { slug: 'michigan', name: 'Michigan', abbr: 'MI', focus: 'automotive (GM, Ford, Stellantis), nuclear power, pipeline integrity', cities: 'Detroit, Grand Rapids' },
  { slug: 'illinois', name: 'Illinois', abbr: 'IL', focus: 'nuclear power (6 plants, most in US), refining, manufacturing', cities: 'Chicago, Joliet' },
  { slug: 'new-york', name: 'New York', abbr: 'NY', focus: 'infrastructure, nuclear decommissioning, aerospace, utilities', cities: 'New York City, Buffalo' },
  { slug: 'florida', name: 'Florida', abbr: 'FL', focus: 'aerospace (NASA, SpaceX), nuclear power, marine, phosphate mining', cities: 'Jacksonville, Tampa, Orlando, Miami' },
  { slug: 'washington', name: 'Washington', abbr: 'WA', focus: 'Boeing aerospace, Hanford nuclear cleanup, refining, naval shipyard', cities: 'Seattle, Tacoma, Richland' },
  { slug: 'georgia', name: 'Georgia', abbr: 'GA', focus: 'Vogtle nuclear, manufacturing, Port of Savannah, military', cities: 'Atlanta, Savannah, Augusta' },
  { slug: 'new-jersey', name: 'New Jersey', abbr: 'NJ', focus: 'refining, nuclear power, pharmaceutical manufacturing, infrastructure', cities: 'Newark, Elizabeth, Paulsboro' },
  { slug: 'north-carolina', name: 'North Carolina', abbr: 'NC', focus: 'nuclear power (Duke Energy), GE Aviation aerospace, manufacturing', cities: 'Charlotte, Raleigh, Wilmington' },
  { slug: 'virginia', name: 'Virginia', abbr: 'VA', focus: 'Newport News Shipbuilding (carriers & subs), nuclear power, defense', cities: 'Norfolk, Hampton Roads, Richmond' },
  { slug: 'tennessee', name: 'Tennessee', abbr: 'TN', focus: 'TVA nuclear fleet, Oak Ridge National Lab, automotive, chemical', cities: 'Nashville, Knoxville, Memphis' },
  { slug: 'alabama', name: 'Alabama', abbr: 'AL', focus: 'NASA Marshall (Huntsville), Airbus Mobile, nuclear power, shipbuilding', cities: 'Huntsville, Mobile, Birmingham' },
  { slug: 'oklahoma', name: 'Oklahoma', abbr: 'OK', focus: 'SCOOP/STACK oil plays, Cushing pipeline hub, Tinker AFB aerospace, wind energy', cities: 'Tulsa, Oklahoma City' },
  { slug: 'minnesota', name: 'Minnesota', abbr: 'MN', focus: '3M/Honeywell manufacturing, Enbridge pipelines, nuclear power, medical devices', cities: 'Minneapolis, St. Paul' },
  { slug: 'wisconsin', name: 'Wisconsin', abbr: 'WI', focus: 'manufacturing (Caterpillar, Oshkosh), Marinette Marine frigates, nuclear, paper/pulp', cities: 'Milwaukee, Green Bay' },
];

usStatePages.forEach(({ slug, name, abbr, focus, cities }) => {
  routes.push({
    path: `/ndt-consulting-${slug}`,
    title: `NDT Level III Consulting ${name} (${abbr}) | ASNT Certified | Training & Inspection | Atlantis NDT`,
    description: `NDT Level III consulting & ASNT certification training in ${name}. Expert procedure development, program audits, SNT-TC-1A compliance for ${focus}. Serving ${cities}. Houston-headquartered, 50+ Level III consultants.`,
    canonical: `${SITE_URL}/ndt-consulting-${slug}`,
    bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/training">Training</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Level III Consulting & Training in ${name}</h1>\n    <p>Atlantis NDT provides ASNT Level III consulting and NDT training across ${name}. Our Houston-headquartered team of 50+ certified consultants specializes in ${focus}. Serving ${cities} and all ${name} locations.</p>\n    <h2>Industries in ${name}</h2>\n    <p>Our Level III consultants have direct experience in ${focus}. We deploy ASNT-certified experts to any ${name} location within 24-48 hours.</p>\n    <h2>NDT Training in ${name}</h2>\n    <p>ASNT Level I, II, and III certification for all 6 major NDT methods. 95% first-time pass rate. Virtual and on-site options.</p>\n  </main>`,
  });
});

// ─── 15 New US City Consulting Pages ─────────────────────────────────────

const newUSCityPages = [
  { slug: 'austin', city: 'Austin', state: 'TX', focus: 'semiconductor manufacturing, tech sector, renewable energy, Samsung fab, Tesla Gigafactory' },
  { slug: 'san-antonio', city: 'San Antonio', state: 'TX', focus: 'military installations (JBSA), Eagle Ford Shale, CPS Energy, aerospace MRO' },
  { slug: 'fort-worth', city: 'Fort Worth', state: 'TX', focus: 'Lockheed Martin F-35 production, Bell helicopter, defense manufacturing, refining' },
  { slug: 'midland', city: 'Midland-Odessa', state: 'TX', focus: 'Permian Basin oil & gas, drilling, pipeline infrastructure, compression stations' },
  { slug: 'sacramento', city: 'Sacramento', state: 'CA', focus: 'Aerojet Rocketdyne aerospace, SMUD power generation, infrastructure' },
  { slug: 'orlando', city: 'Orlando', state: 'FL', focus: 'Lockheed Martin, Northrop Grumman, L3Harris defense, NASA KSC support' },
  { slug: 'norfolk', city: 'Norfolk', state: 'VA', focus: 'Naval Station Norfolk, Newport News Shipbuilding, carrier and submarine maintenance' },
  { slug: 'huntsville', city: 'Huntsville', state: 'AL', focus: 'NASA Marshall SFC, Boeing SLS, Blue Origin, ULA, Redstone Arsenal defense' },
  { slug: 'mobile', city: 'Mobile', state: 'AL', focus: 'Airbus A320 assembly, Austal USA Navy ships, chemical manufacturing, offshore support' },
  { slug: 'oklahoma-city', city: 'Oklahoma City', state: 'OK', focus: 'Tinker AFB MRO, American Airlines maintenance, midstream oil & gas' },
  { slug: 'colorado-springs', city: 'Colorado Springs', state: 'CO', focus: 'aerospace defense (Northrop Grumman, L3Harris), US Space Command' },
  { slug: 'savannah', city: 'Savannah', state: 'GA', focus: 'Port of Savannah, Gulfstream Aerospace, manufacturing, military' },
  { slug: 'raleigh', city: 'Raleigh', state: 'NC', focus: 'semiconductor manufacturing, pharmaceutical, GE Aviation, Research Triangle' },
  { slug: 'nashville', city: 'Nashville', state: 'TN', focus: 'automotive (Nissan, GM Spring Hill), TVA power generation, manufacturing' },
  { slug: 'lake-charles', city: 'Lake Charles', state: 'LA', focus: 'LNG terminals (Cameron, Driftwood), petrochemical plants, refining' },
];

newUSCityPages.forEach(({ slug, city, state, focus }) => {
  routes.push({
    path: `/consulting/ndt-consulting-${slug}`,
    title: `NDT Consulting ${city}, ${state} | ASNT Level III Experts | Free Quote | Atlantis NDT`,
    description: `Top-rated NDT Level III consulting in ${city}, ${state}. ASNT certified procedure writing, program audits, SNT-TC-1A compliance for ${focus}. 50+ certified consultants. Free consultation.`,
    canonical: `${SITE_URL}/consulting/ndt-consulting-${slug}`,
    bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/training">Training</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Level III Consulting in ${city}, ${state}</h1>\n    <p>ASNT Level III NDT consulting in ${city}, ${state}. Procedure development, program audits, SNT-TC-1A compliance for ${focus}. Houston-headquartered team deploys within 24-48 hours.</p>\n  </main>`,
  });
});

// ─── Extended Method × City pages (30 additional cities beyond methodCities) ──

const extendedMethodCities = [
  'new-york', 'boston', 'atlanta', 'miami', 'washington-dc', 'nashville',
  'minneapolis', 'cleveland', 'baltimore', 'tampa', 'charlotte', 'indianapolis',
  'san-diego', 'portland', 'salt-lake-city', 'kansas-city', 'st-louis',
  'milwaukee', 'cincinnati', 'jacksonville',
  'aberdeen', 'hamburg', 'rotterdam', 'stavanger', 'antwerp', 'marseille',
  'milan', 'barcelona', 'gdansk', 'edinburgh',
];

methodPages.forEach(m => {
  extendedMethodCities.forEach(citySlug => {
    const cityName = toTitleCase(citySlug);
    routes.push({
      path: `/${m.slug}-${citySlug}`,
      title: `${m.method} ${cityName} | ${m.short} Inspection Services | Atlantis NDT`,
      description: `Professional ${m.method} (${m.short}) services in ${cityName}. ASNT Level II & III certified inspectors for ${m.detail}. Serving oil & gas, aerospace & industrial clients in ${cityName}.`,
      canonical: `${SITE_URL}/${m.slug}-${citySlug}`,
      bodyContent: `  <header><nav><a href="/">Home</a><a href="/${m.slug}">${m.method}</a><a href="/consulting">Consulting</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>${m.method} Services in ${cityName}</h1>\n    <p>Professional ${m.method} (${m.short}) inspection services in ${cityName}. ASNT Level II & III certified inspectors specializing in ${m.detail} for oil & gas, aerospace, power generation, and manufacturing industries.</p>\n    <h2>Why Choose Atlantis NDT for ${m.short} in ${cityName}?</h2>\n    <p>Atlantis NDT provides certified ${m.method} inspectors in ${cityName} with expertise in API 510/570/653 compliance, ASME Section V procedures, and AWS D1.1 weld inspection. Contact us for a free quote.</p>\n  </main>`,
    });
  });
});

// ─── Training City Pages ─────────────────────────────────────────────────

const trainingCityPages = [
  { slug: 'houston', city: 'Houston', region: 'USA', detail: 'Houston, TX training center with hands-on labs and API exam preparation. Serving the Gulf Coast oil & gas corridor.' },
  { slug: 'new-york', city: 'New York', region: 'USA', detail: 'New York City NDT training for aerospace, manufacturing, and construction industries. Manhattan and tri-state area.' },
  { slug: 'los-angeles', city: 'Los Angeles', region: 'USA', detail: 'LA-based NDT training for aerospace (Boeing, Northrop Grumman), oil refining, and manufacturing sectors.' },
  { slug: 'chicago', city: 'Chicago', region: 'USA', detail: 'Chicago NDT training for manufacturing, power generation, and pipeline industries across the Midwest.' },
  { slug: 'denver', city: 'Denver', region: 'USA', detail: 'Denver NDT training for oil & gas (DJ Basin), mining, and power generation industries in the Rocky Mountain region.' },
  { slug: 'new-orleans', city: 'New Orleans', region: 'USA', detail: 'New Orleans NDT training for Gulf Coast refineries, petrochemical plants, and offshore operations.' },
  { slug: 'dallas', city: 'Dallas', region: 'USA', detail: 'Dallas-Fort Worth NDT training for aerospace (Lockheed Martin), oil & gas, and manufacturing sectors.' },
  { slug: 'philadelphia', city: 'Philadelphia', region: 'USA', detail: 'Philadelphia NDT training for refining, nuclear power, and heavy manufacturing industries in the Northeast.' },
  { slug: 'pittsburgh', city: 'Pittsburgh', region: 'USA', detail: 'Pittsburgh NDT training for steel manufacturing, power generation, and petrochemical industries.' },
  { slug: 'atlanta', city: 'Atlanta', region: 'USA', detail: 'Atlanta NDT training for aerospace, automotive, and construction industries across the Southeast.' },
];

trainingCityPages.forEach(({ slug, city, region, detail }) => {
  routes.push({
    path: `/ndt-training-${slug}`,
    title: `NDT Training ${city} | ASNT Level I-III Certification | Atlantis NDT`,
    description: `ASNT-aligned NDT training in ${city}, ${region}. Level I, II & III certification for UT, MT, PT, RT, ET, VT. ${detail} 95% pass rate. Enrol today.`,
    canonical: `${SITE_URL}/ndt-training-${slug}`,
    bodyContent: `  <header><nav><a href="/">Home</a><a href="/training">Training</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Training in ${city}</h1>\n    <p>Professional ASNT-aligned NDT training in ${city}. ${detail} Level I, II, and III certification for all major NDT methods with 95% pass rate.</p>\n  </main>`,
  });
});

// ─── Additional Training Pages ───────────────────────────────────────────

const additionalTrainingPages = [
  { path: '/api-510-training', title: 'API 510 Training | Pressure Vessel Inspector Exam Prep | Atlantis NDT', description: 'API 510 Pressure Vessel Inspector certification training. Open-book exam preparation covering ASME Section VIII, API 510/572/576/579. Houston, Dubai, India & online. 95% pass rate.', h1: 'API 510 Pressure Vessel Inspector Training' },
  { path: '/api-653-training', title: 'API 653 Training | Tank Inspector Certification Exam Prep | Atlantis NDT', description: 'API 653 Aboveground Storage Tank Inspector certification training. Exam prep for API 650/651/653, RBI, and floor inspection. Houston, Dubai, India & online. 95% pass rate.', h1: 'API 653 Tank Inspector Training' },
  { path: '/asnt-level-iii-training', title: 'ASNT Level III Training | NDT Manager Certification Prep | Atlantis NDT', description: 'ASNT Level III certification training: Basic, Method, and Specific exam preparation. Written practice development, program management, and procedure review. 95% pass rate.', h1: 'ASNT Level III Certification Training' },
  { path: '/phased-array-training', title: 'Phased Array UT Training | PAUT Certification Course | Atlantis NDT', description: 'Phased Array UT (PAUT) training and certification. S-scan, TFM, sector scans, ASME V Appendix IV. Hands-on lab with Olympus OmniScan. Houston, Dubai, India & online.', h1: 'Phased Array UT (PAUT) Training' },
];

additionalTrainingPages.forEach(p => {
  routes.push({
    path: p.path,
    title: p.title,
    description: p.description,
    canonical: `${SITE_URL}${p.path}`,
    bodyContent: `  <header><nav><a href="/">Home</a><a href="/training">Training</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>${p.h1}</h1>\n    <p>${p.description}</p>\n  </main>`,
  });
});

// ─── Industry Service Pages ──────────────────────────────────────────────

const industryServicePages = [
  { path: '/oil-gas-ndt-services', title: 'Oil & Gas NDT Services | Pipeline, Refinery & Offshore Inspection | Atlantis NDT', description: 'Comprehensive NDT services for oil & gas: pipeline integrity, refinery inspection, offshore platforms, pressure vessel testing. API 510/570/653 certified inspectors.', h1: 'Oil & Gas NDT Services' },
  { path: '/aerospace-ndt-services', title: 'Aerospace NDT Services | Aircraft, Engine & Composite Inspection | Atlantis NDT', description: 'Specialized NDT services for aerospace: aircraft structural inspection, engine component testing, composite NDT. NAS-410 certified, NADCAP compliant.', h1: 'Aerospace NDT Services' },
  { path: '/power-generation-ndt-services', title: 'Power Generation NDT Services | Turbine, Boiler & Nuclear Inspection | Atlantis NDT', description: 'NDT services for power generation: gas turbine, boiler tube, steam generator, and nuclear component inspection. ASME qualified outage support teams.', h1: 'Power Generation NDT Services' },
  { path: '/petrochemical-ndt-services', title: 'Petrochemical NDT Services | Reactor, Column & Heat Exchanger Inspection | Atlantis NDT', description: 'NDT services for petrochemical plants: reactor vessels, distillation columns, heat exchangers, piping systems. API 510/570 compliant, turnaround support.', h1: 'Petrochemical NDT Services' },
  { path: '/pipeline-inspection-services', title: 'Pipeline Inspection Services | ILI, GWT & Corrosion Assessment | Atlantis NDT', description: 'Pipeline inspection services: in-line inspection (ILI), guided wave testing, corrosion mapping, CUI detection. API 570, ASME B31.3/B31.4 compliant.', h1: 'Pipeline Inspection Services' },
  { path: '/marine-offshore-ndt-services', title: 'Marine & Offshore NDT Services | FPSO, Platform & Subsea Inspection | Atlantis NDT', description: 'NDT services for marine & offshore: FPSO hull inspection, platform structural assessment, subsea pipeline integrity. DNV, Lloyd\'s, ABS certified.', h1: 'Marine & Offshore NDT Services' },
  { path: '/nuclear-ndt-services', title: 'Nuclear NDT Services | Reactor, Steam Generator & Containment Inspection | Atlantis NDT', description: 'Nuclear NDT services: reactor vessel inspection, steam generator tube testing, containment structure assessment. NRC qualified, ASME Section XI compliant.', h1: 'Nuclear NDT Services' },
  { path: '/construction-ndt-services', title: 'Construction NDT Services | Structural Steel & Weld Inspection | Atlantis NDT', description: 'NDT services for construction: structural steel weld inspection, concrete assessment, rebar scanning. AWS D1.1, AISC certified inspectors.', h1: 'Construction NDT Services' },
];

industryServicePages.forEach(p => {
  routes.push({
    path: p.path,
    title: p.title,
    description: p.description,
    canonical: `${SITE_URL}${p.path}`,
    bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>${p.h1}</h1>\n    <p>${p.description}</p>\n  </main>`,
  });
});

// ─── Software Comparison & Feature Pages ─────────────────────────────────

const softwarePages = [
  { path: '/ndt-erp-software-comparison', title: 'NDT ERP Software Comparison 2026 | Top Solutions Compared | Atlantis NDT', description: 'Compare top NDT ERP software solutions: features, pricing, integrations. Atlantis NDT ERP vs competitors for inspection management, cert tracking, and reporting.' },
  { path: '/ndt-reporting-software-comparison', title: 'NDT Reporting Software Comparison 2026 | Digital Reports | Atlantis NDT', description: 'Compare NDT reporting software: digital reports, API compliance, digital twin integration. Side-by-side feature comparison of top solutions for inspection companies.' },
  { path: '/digital-twin-ndt-software', title: 'Digital Twin NDT Software | 3D Asset Visualization | Atlantis NDT', description: 'Digital twin software for NDT inspection data visualization. Convert thickness readings into 3D color-coded asset models. API 579 fitness-for-service integration.' },
  { path: '/ndt-software-features', title: 'NDT Software Features | Inspection Management Platform | Atlantis NDT', description: 'Complete feature overview of Atlantis NDT software platform: job management, certification tracking, digital twin reporting, API compliance, and mobile inspection.' },
  { path: '/ndt-data-management', title: 'NDT Data Management | Inspection Data Organization & Analysis | Atlantis NDT', description: 'NDT data management solutions: organize inspection data, track corrosion trends, automate reporting, and integrate with digital twin platforms. Cloud-based and secure.' },
];

softwarePages.forEach(p => {
  routes.push({
    path: p.path,
    title: p.title,
    description: p.description,
    canonical: `${SITE_URL}${p.path}`,
    bodyContent: `  <header><nav><a href="/">Home</a><a href="/erp">NDT ERP</a><a href="/digital-twins">Digital Twins</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>${p.title.split('|')[0].trim()}</h1>\n    <p>${p.description}</p>\n  </main>`,
  });
});

// ─── New Blog Posts (not in blogs.json) ──────────────────────────────────

const newBlogPosts = [
  { path: '/blog/eddy-current-testing-complete-guide', title: 'Eddy Current Testing: Complete Guide to ECT Methods, Equipment & Standards', description: 'Comprehensive eddy current testing guide: conventional ECT, pulsed EC, bobbin coil, RFEC. Equipment selection, ASTM E309, and aerospace/oil & gas applications.', h1: 'Eddy Current Testing: Complete Guide' },
  { path: '/blog/ultrasonic-testing-ultimate-guide', title: 'Ultrasonic Testing: Ultimate Guide to UT NDT Methods & Techniques', description: 'The ultimate guide to ultrasonic testing: pulse-echo, TOFD, phased array, automated UT. ASME Section V, calibration, probe selection, and scan plans.', h1: 'Ultrasonic Testing: Ultimate Guide' },
  { path: '/blog/api-653-certification-complete-guide', title: 'API 653 Certification: Complete Guide to Tank Inspector Exam 2026', description: 'Everything about API 653 certification: exam format, required codes, study plan, calculation formulas, and tips from experienced API tank inspectors.', h1: 'API 653 Certification: Complete Guide' },
  { path: '/blog/ndt-salary-guide-2026-global', title: 'NDT Salary Guide 2026: Global Pay by Method, Level & Location', description: 'Global NDT salary guide for 2026: pay ranges by ASNT level, NDT method, and location. USA, Middle East, India, Europe, and Australia data.', h1: 'NDT Salary Guide 2026' },
  { path: '/blog/rt-vs-ut-complete-comparison', title: 'RT vs UT: Complete Comparison for Weld Inspection [Decision Guide]', description: 'RT vs UT detailed comparison: cost, speed, safety, defect detection, code requirements. When to use radiographic testing vs ultrasonic testing for welds.', h1: 'RT vs UT: Complete Weld Inspection Comparison' },
];

newBlogPosts.forEach(p => {
  routes.push({
    path: p.path,
    title: `${p.title} | Atlantis NDT`,
    description: p.description,
    canonical: `${SITE_URL}${p.path}`,
    bodyContent: `  <header><nav><a href="/">Home</a><a href="/blog">Blog</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <article>\n      <h1>${p.h1}</h1>\n      <p>${p.description}</p>\n    </article>\n  </main>`,
  });
});

// ─── Misc pages (resources landing, press, industry) ─────────────────────

const miscPages = [
  { path: '/resources', title: 'NDT Resources | Guides, Templates & Checklists | Atlantis NDT', description: 'Free NDT resources: inspection checklists, procedure templates, study guides, and training requirement matrices. Built by ASNT Level III experts.' },
  { path: '/press', title: 'Press & Media | Atlantis NDT News', description: 'Latest news and press releases from Atlantis NDT. Industry announcements, partnership news, and company updates.' },
  { path: '/industry', title: 'Industries We Serve | NDT for Oil & Gas, Aerospace, Power & More | Atlantis NDT', description: 'NDT services across industries: oil & gas, aerospace, power generation, petrochemical, marine, nuclear, and construction. ASNT Level III certified consultants.' },
];

miscPages.forEach(p => {
  routes.push({
    path: p.path,
    title: p.title,
    description: p.description,
    canonical: `${SITE_URL}${p.path}`,
    bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/training">Training</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>${p.title.split('|')[0].trim()}</h1>\n    <p>${p.description}</p>\n  </main>`,
  });
});

// ─── Generate sitemap ─────────────────────────────────────────────────────

function buildSitemap(routeList) {
  const today = new Date().toISOString().split('T')[0];

  const priorityMap = {
    '/': '1.0',
    '/consulting': '0.95',
    '/training': '0.95',
    '/digital-twins': '0.90',
    '/contact': '0.80',
    '/blog': '0.85',
  };

  const changefreqMap = (path) => {
    if (path === '/') return 'weekly';
    if (path.startsWith('/blog/')) return 'monthly';
    if (path.startsWith('/consulting/')) return 'monthly';
    return 'monthly';
  };

  const getPriority = (path) => {
    if (priorityMap[path]) return priorityMap[path];
    if (path === '/tools') return '0.85';
    if (path.startsWith('/tools/')) return '0.80';
    if (path.startsWith('/resources/')) return '0.75';
    if (path.startsWith('/consulting/')) return '0.75';
    if (path.startsWith('/blog/')) return '0.80';
    if (path.includes('-training')) return '0.85';
    if (path.startsWith('/digital-twin-')) return '0.80';
    if (path.startsWith('/ndt-erp-')) return '0.75';
    if (path.includes('-testing')) return '0.75';
    if (path === '/embed/ndt-reference') return '0.30';
    if (path.includes('guide') || path.includes('statistics') || path.includes('comparison')) return '0.80';
    return '0.70';
  };

  const urls = routeList
    .filter(r => !r.path.includes(':') && !r.noindex)
    .map(r => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreqMap(r.path)}</changefreq>
    <priority>${getPriority(r.path)}</priority>
  </url>`)
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Generated by prerender.mjs — ${routeList.filter(r => !r.path.includes(':')).length} pages — ${today} -->
  <!-- Homepage -->
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
${urls}
</urlset>`;
}

// ─── Generate files ────────────────────────────────────────────────────────

let generated = 0;
let skipped = 0;

routes.forEach(route => {
  try {
    // Skip dynamic route patterns
    if (route.path.includes(':')) {
      skipped++;
      return;
    }
    writeRoute(route.path, route, baseTemplate);
    generated++;
  } catch (err) {
    console.warn(`  ⚠️  Failed: ${route.path} — ${err.message}`);
    skipped++;
  }
});

// Write updated sitemap
const sitemapXml = buildSitemap(routes);
writeFileSync(join(DIST, 'sitemap.xml'), sitemapXml, 'utf-8');
// Also update public/ so it persists across builds
writeFileSync(join(ROOT, 'public', 'sitemap.xml'), sitemapXml, 'utf-8');

console.log(`\n✅ Pre-render complete: ${generated} pages generated, ${skipped} skipped`);
console.log(`🗺️  Sitemap updated: ${routes.filter(r => !r.path.includes(':') && !r.noindex).length + 1} URLs`);
console.log(`📁 Output: ${DIST}/[route]/index.html`);
