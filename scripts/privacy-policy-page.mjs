// /privacy-policy crawler body (2026-10-31, owner). URL only: never linked from the
// navigation or the footer. Same data and the same article renderer as the React page
// (src/pages/PrivacyPolicy.tsx): src/data/privacy-policy-2026-10.{json,mjs}.
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { PRIVACY_PATH, privacyArticleHtml, privacyPageSchema, assertPrivacyPolicyClean } from '../src/data/privacy-policy-2026-10.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
export const PRIVACY = JSON.parse(readFileSync(join(HERE, '..', 'src', 'data', 'privacy-policy-2026-10.json'), 'utf8'));

export function privacyPolicyRoute() {
  const article = privacyArticleHtml(PRIVACY);
  assertPrivacyPolicyClean(PRIVACY, article);
  return {
    path: PRIVACY_PATH,
    title: PRIVACY.title,
    description: PRIVACY.description,
    canonical: `https://atlantisndt.com${PRIVACY_PATH}`,
    structuredData: privacyPageSchema(PRIVACY),
    bodyContent: `  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/about">About</a><a href="/consulting">Consulting</a><a href="/training">Training</a><a href="/erp">ERP</a><a href="/digital-twins">Digital Twins</a><a href="/contact">Free Consultation</a></nav></header>
  <main>
${article}
  </main>`,
  };
}
