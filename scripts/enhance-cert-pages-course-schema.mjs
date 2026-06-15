#!/usr/bin/env node
/**
 * Add Course JSON-LD schema to the 4 cert pages.
 * Google can show course duration + provider + Course rich results.
 * Cert pages: /asnt-certification, /api-510-certification, /api-570-certification, /api-653-certification
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const CERT_SCHEMAS = {
  "src/pages/api-510-certification.tsx": {
    name: "API 510 Pressure Vessel Inspector Certification Prep",
    desc: "Comprehensive prep for the API 510 Authorized Pressure Vessel Inspector exam. Body-of-knowledge coverage of ASME Section V, VIII, API 510, 571, 572, 576, 577. ASNT Level III-led instruction.",
    workload: "PT80H",
    cred: "API 510 Authorized Pressure Vessel Inspector",
    level: "Professional"
  },
  "src/pages/api-570-certification.tsx": {
    name: "API 570 Piping Inspector Certification Prep",
    desc: "Comprehensive prep for the API 570 Authorized Piping Inspector exam. Body-of-knowledge coverage of ASME B31.3, API 570, 571, 574, 578. ASNT Level III-led instruction.",
    workload: "PT75H",
    cred: "API 570 Authorized Piping Inspector",
    level: "Professional"
  },
  "src/pages/api-653-certification.tsx": {
    name: "API 653 Aboveground Tank Inspector Certification Prep",
    desc: "Comprehensive prep for the API 653 Authorized Aboveground Tank Inspector exam. Body-of-knowledge coverage of API 650, 651, 652, 653, 571, ASME Section V. ASNT Level III-led instruction.",
    workload: "PT75H",
    cred: "API 653 Authorized Aboveground Tank Inspector",
    level: "Professional"
  },
};

function buildCourseSchema(canonical, s) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": canonical + "#course",
    name: s.name,
    description: s.desc,
    provider: { "@id": "https://atlantisndt.com/#organization" },
    url: canonical,
    educationalCredentialAwarded: s.cred,
    educationalLevel: s.level,
    hasCourseInstance: [
      {
        "@type": "CourseInstance",
        courseMode: "online",
        eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
        courseWorkload: s.workload,
      },
      {
        "@type": "CourseInstance",
        courseMode: "onsite",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        courseWorkload: s.workload,
      },
    ],
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: canonical,
    },
  };
}

let touched = 0;
const failures = [];
for (const [rel, s] of Object.entries(CERT_SCHEMAS)) {
  const p = join(ROOT, rel.replace(/\//g, '\\'));
  let src;
  try { src = readFileSync(p, 'utf-8'); } catch (e) { failures.push({ file: rel, err: e.message }); continue; }

  // Skip if Course schema already present
  if (/["']@type["']\s*:\s*["']Course["']/.test(src)) {
    console.log('skip (has Course):', rel);
    continue;
  }

  // Find <SEOHead and add structuredData prop if missing
  // Strategy: find existing SEOHead block, look for structuredData= prop; if missing, insert
  const canonical = rel.includes('api-510') ? 'https://atlantisndt.com/api-510-certification'
    : rel.includes('api-570') ? 'https://atlantisndt.com/api-570-certification'
    : 'https://atlantisndt.com/api-653-certification';
  const schema = buildCourseSchema(canonical, s);

  // Look for existing structuredData prop and merge into @graph; otherwise add
  const seoHeadMatch = src.match(/<SEOHead\s[\s\S]*?\/>/);
  if (!seoHeadMatch) { failures.push({ file: rel, err: 'no SEOHead' }); continue; }
  const seoHead = seoHeadMatch[0];

  if (seoHead.includes('structuredData=')) {
    // Insert a constant declaration above SEOHead block (declare courseSchema, reference it)
    // For safety, just inject a separate <script> via SEOHead's structuredData if not already
    console.log('skip (already has structuredData):', rel, '— manual add needed');
    continue;
  }

  // Inject const + structuredData prop
  const schemaConstName = 'courseSchema';
  const schemaConst = `\nconst ${schemaConstName} = ${JSON.stringify(schema, null, 2)};\n`;

  // Find first import block; add const before first import? Better: just before the export function.
  // Find `export default function` or `export function`
  const exportMatch = src.match(/(export default function|export function)/);
  if (!exportMatch) { failures.push({ file: rel, err: 'no export function' }); continue; }
  const exportPos = exportMatch.index;
  let out = src.slice(0, exportPos) + schemaConst + '\n' + src.slice(exportPos);

  // Update SEOHead to include structuredData
  const newSeoHead = seoHead.replace(/\/>$/, ` structuredData={${schemaConstName}} />`);
  out = out.replace(seoHead, newSeoHead);

  writeFileSync(p, out, 'utf-8');
  touched++;
  console.log('added Course schema:', rel);
}
console.log(`\nDone. ${touched} cert pages enhanced.`);
if (failures.length) console.log('Failures:', JSON.stringify(failures, null, 2));
