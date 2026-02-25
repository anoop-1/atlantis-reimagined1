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

function injectMeta(html, { title, description, canonical, ogTitle, ogDesc, bodyContent }) {
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
    title: 'NDT Consulting Services USA | ASNT Level III Houston | Atlantis NDT',
    description: 'NDT consulting services across the USA. ASNT Level III certified consultants for oil & gas, petrochemical, aerospace & power generation. Houston-based, serving nationwide. Free consultation.',
    bodyH1: 'NDT Consulting Services USA',
    bodyText: 'Expert NDT consulting services across the USA. Houston-based ASNT Level III consultants serving oil & gas, petrochemical, and aerospace industries nationwide.',
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
    title: 'NDT Training Middle East | ASNT Certification UAE | Atlantis NDT',
    description: 'NDT training courses in Middle East. ASNT Level I, II & III certification in UAE, Saudi Arabia & Qatar. UT, MT, PT, RT, ET, VT methods. Online and on-site options.',
    bodyH1: 'NDT Training Middle East',
    bodyText: 'Professional NDT training in the Middle East. ASNT certification courses in UAE, Saudi Arabia, and Qatar for Level I, II, and III.',
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
    title: 'NDT Connect Platform | NDT Professional Network | Atlantis NDT',
    description: 'NDT Connect: The professional network for NDT inspectors, Level III consultants and inspection companies. Post jobs, find experts, share knowledge.',
    bodyH1: 'NDT Connect Platform',
    bodyText: 'NDT Connect is the professional network for NDT inspectors and consultants. Find jobs, connect with experts, and grow your NDT career.',
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
    title: 'NDT for Oil & Gas | Pipeline, Refinery & Offshore Inspection | Atlantis NDT',
    description: 'Expert NDT services for oil & gas industry. Pipeline inspection, refinery maintenance, offshore structures, pressure vessels. ASNT Level III consultants for API 510/570/653 compliance.',
    bodyH1: 'NDT for Oil & Gas Industry',
    bodyText: 'Expert NDT consulting and training for the oil & gas industry. Pipeline inspection, refinery maintenance, and offshore structure assessment by ASNT Level III professionals.',
  },
  {
    path: '/ndt-for-aerospace',
    title: 'NDT for Aerospace | Aircraft & Component Inspection | Atlantis NDT',
    description: 'Expert NDT services for aerospace industry. Aircraft structural inspection, engine component testing, composite material assessment. ASNT/NAS-410 certified inspectors.',
    bodyH1: 'NDT for Aerospace Industry',
    bodyText: 'Expert NDT consulting and training for aerospace. Aircraft structural inspection, engine component testing, and composite assessment by ASNT certified professionals.',
  },
  {
    path: '/ndt-for-power-generation',
    title: 'NDT for Power Generation | Turbine & Boiler Inspection | Atlantis NDT',
    description: 'NDT services for power generation. Turbine blade inspection, boiler tube testing, pressure vessel assessment, nuclear component inspection. ASNT Level III certified.',
    bodyH1: 'NDT for Power Generation',
    bodyText: 'Expert NDT for power generation facilities. Turbine inspection, boiler tube testing, and pressure vessel assessment by ASNT Level III professionals.',
  },
  {
    path: '/asnt-certification',
    title: 'ASNT Certification Guide | Level I II III Requirements | Atlantis NDT',
    description: 'Complete ASNT certification guide. Requirements for Level I, II, and III across all NDT methods. Study tips, exam preparation, and training courses from Atlantis NDT.',
    bodyH1: 'ASNT Certification Guide',
    bodyText: 'Complete guide to ASNT NDT certification. Requirements, exam preparation, and study resources for Level I, II, and III certification.',
  },
  {
    path: '/api-510-certification',
    title: 'API 510 Certification | Pressure Vessel Inspector Training | Atlantis NDT',
    description: 'API 510 pressure vessel inspector certification training. Study guides, exam prep, and hands-on training from ASNT Level III instructors. Improve exam pass rates.',
    bodyH1: 'API 510 Certification',
    bodyText: 'API 510 pressure vessel inspector certification preparation. Comprehensive training and exam prep from experienced ASNT Level III instructors.',
  },
  {
    path: '/api-570-certification',
    title: 'API 570 Certification | Piping Inspector Training | Atlantis NDT',
    description: 'API 570 piping inspector certification training. Study preparation, exam practice, and piping inspection fundamentals from experienced NDT consultants.',
    bodyH1: 'API 570 Certification',
    bodyText: 'API 570 piping inspector certification preparation. Comprehensive training and exam prep covering piping inspection fundamentals.',
  },
  {
    path: '/api-653-certification',
    title: 'API 653 Certification | Above Ground Storage Tank Inspector | Atlantis NDT',
    description: 'API 653 above ground storage tank inspector certification training. Tank inspection techniques, code requirements, and exam preparation from expert NDT consultants.',
    bodyH1: 'API 653 Certification',
    bodyText: 'API 653 above ground storage tank inspector certification preparation covering tank inspection techniques and code requirements.',
  },
  {
    path: '/intelligent-reporting-software',
    title: 'NDT Reporting Software | Digital Inspection Reports | Atlantis NDT',
    description: 'Intelligent NDT reporting software. Create professional inspection reports, integrate with digital twins, manage findings. Cloud-based, mobile-friendly NDT documentation.',
    bodyH1: 'Intelligent NDT Reporting Software',
    bodyText: 'Professional NDT reporting software for inspection companies. Create digital reports, integrate findings, and manage inspection documentation in the cloud.',
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
    title: 'Online NDT Training | ASNT Certification Courses Online | Atlantis NDT',
    description: 'Online NDT training courses for ASNT Level I, II & III certification. Learn UT, MT, PT, RT, ET, VT from anywhere. Self-paced and instructor-led options. 95% pass rate.',
    bodyH1: 'Online NDT Training Courses',
    bodyText: 'Online NDT training for ASNT certification. Level I, II, and III courses for UT, MT, PT, RT, ET, and VT methods. Self-paced and instructor-led options.',
  },
  {
    path: '/ndt-training-usa',
    title: 'NDT Training USA | ASNT Courses Houston & Nationwide | Atlantis NDT',
    description: 'NDT training courses across the USA. ASNT Level I, II, III certification in Houston and online. UT, MT, PT, RT, ET, VT methods. 95% pass rate guaranteed.',
    bodyH1: 'NDT Training USA',
    bodyText: 'Professional NDT training in the USA. ASNT certification courses in Houston and online, serving inspectors nationwide.',
  },
  {
    path: '/ndt-training-india',
    title: 'NDT Training India | ASNT Courses Hyderabad & Mumbai | Atlantis NDT',
    description: 'NDT training in India. ASNT Level I, II, III certification courses in Hyderabad, Mumbai, Chennai, Delhi, Bangalore. UT, MT, PT, RT, ET, VT. Online and classroom.',
    bodyH1: 'NDT Training India',
    bodyText: 'Professional NDT training across India. ASNT certification courses in Hyderabad, Mumbai, Chennai, Delhi, and Bangalore.',
  },
  {
    path: '/ndt-training-dubai',
    title: 'NDT Training Dubai | ASNT Certification UAE | Atlantis NDT',
    description: 'NDT training in Dubai and UAE. ASNT Level I, II & III certification courses for UT, MT, PT, RT, ET, VT. English and Arabic language options. Oil & gas industry specialists.',
    bodyH1: 'NDT Training Dubai',
    bodyText: 'Professional NDT training in Dubai and UAE. ASNT certification courses for oil & gas industry professionals.',
  },
  {
    path: '/ndt-training-saudi-arabia',
    title: 'NDT Training Saudi Arabia | ASNT Certification Riyadh Jeddah | Atlantis NDT',
    description: 'NDT training in Saudi Arabia. ASNT Level I, II, III certification courses for Saudi Aramco, SABIC and petrochem sector. Riyadh, Jeddah, Dammam, Jubail locations.',
    bodyH1: 'NDT Training Saudi Arabia',
    bodyText: 'Professional NDT training in Saudi Arabia. ASNT certification for oil & gas and petrochemical industry professionals.',
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
    title: 'NDT Career Guide | How to Start & Advance in NDT | Atlantis NDT',
    description: 'Complete NDT career guide. How to start in NDT, certification paths, salary expectations, career progression from Level I to Level III. Expert guidance from ASNT certified professionals.',
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

consultingCities.forEach(citySlug => {
  const cityName = toTitleCase(citySlug);
  routes.push({
    path: `/consulting/ndt-consulting-${citySlug}`,
    title: `NDT Level III Consulting ${cityName} | ASNT Procedures & Audits | Atlantis NDT`,
    description: `ASNT Level III NDT consulting services in ${cityName}. Procedure development, program audits, technique qualification & expert witness services. 50+ certified experts. Request free quote.`,
    canonical: `${SITE_URL}/consulting/ndt-consulting-${citySlug}`,
    bodyContent: `  <header><nav><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/contact">Contact</a></nav></header>\n  <main>\n    <h1>NDT Level III Consulting ${cityName}</h1>\n    <p>ASNT Level III NDT consulting services in ${cityName}. Expert procedure development, program audits, SNT-TC-1A compliance, and written practice development for oil & gas, petrochemical, and industrial facilities.</p>\n  </main>`,
  });
});

// Special city consulting page
routes.push({
  path: '/consulting/ndt-consulting-level-iii',
  title: 'ASNT Level III NDT Consulting Services | Expert Consultants | Atlantis NDT',
  description: 'Dedicated ASNT Level III NDT consulting services. Procedure development per SNT-TC-1A, program audits, personnel qualification, written practices, and expert witness services.',
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

// ── Additional standalone pages ──────────────────────────────────────────
const extraPages = [
  { path: '/digital-twins-ndt-guide', title: 'Digital Twins for NDT | Complete Guide | Atlantis NDT', description: 'Complete guide to digital twins in NDT. How digital twin technology transforms inspection, asset integrity, and maintenance in oil & gas, aerospace, and power generation.' },
  { path: '/digital-twins-oil-gas', title: 'Digital Twins for Oil & Gas | Asset Integrity | Atlantis NDT', description: 'Digital twin solutions for oil & gas. Real-time pipeline monitoring, corrosion tracking, and predictive maintenance. Reduce inspection costs and improve asset reliability.' },
  { path: '/ut-vs-rt-comparison', title: 'UT vs RT: Ultrasonic vs Radiographic Testing Comparison | Atlantis NDT', description: 'UT vs RT comparison guide. When to use ultrasonic testing vs radiographic testing, cost comparison, accuracy, applications, and regulatory requirements for each method.' },
  { path: '/blog/api-653-tank-inspection-guide', title: 'API 653 Tank Inspection Guide | Complete Reference | Atlantis NDT', description: 'Complete API 653 above ground storage tank inspection guide. Inspection intervals, minimum thickness calculations, bottom inspection methods, and compliance requirements.' },
  { path: '/blog/ndt-career-guide', title: 'NDT Career Guide 2025 | How to Become an NDT Inspector | Atlantis NDT', description: 'Complete NDT career guide for 2025. How to enter the NDT field, certification requirements, salary ranges, and career advancement from Level I to Level III.' },
  { path: '/blog/ut-vs-rt-comparison', title: 'UT vs RT Comparison | Ultrasonic vs Radiographic Testing | Atlantis NDT', description: 'Detailed comparison of ultrasonic testing and radiographic testing. Applications, advantages, limitations, cost, and when to use each NDT method.' },
  { path: '/blog/digital-twins-ndt-guide', title: 'Digital Twins in NDT | Complete Technical Guide | Atlantis NDT', description: 'How digital twins are transforming NDT inspections. Implementation guide, case studies, ROI calculations, and future trends in digital twin technology for asset integrity.' },
  { path: '/blog/digital-twins-oil-gas', title: 'Digital Twins for Oil & Gas | Implementation Guide | Atlantis NDT', description: 'How oil & gas companies are implementing digital twins for asset integrity. Pipeline monitoring, corrosion prediction, and inspection optimization case studies.' },
];

extraPages.forEach(p => {
  routes.push({
    path: p.path,
    title: p.title,
    description: p.description,
    canonical: `${SITE_URL}${p.path}`,
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
    if (path.startsWith('/consulting/')) return '0.75';
    if (path.startsWith('/blog/')) return '0.80';
    if (path.includes('-training')) return '0.85';
    if (path.includes('-testing')) return '0.75';
    return '0.70';
  };

  const urls = routeList
    .filter(r => !r.path.includes(':'))
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
console.log(`🗺️  Sitemap updated: ${routes.filter(r => !r.path.includes(':')).length + 1} URLs`);
console.log(`📁 Output: ${DIST}/[route]/index.html`);
