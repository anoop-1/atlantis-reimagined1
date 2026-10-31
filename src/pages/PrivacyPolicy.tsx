/**
 * /privacy-policy — 2026-10-31 (owner): reachable by URL only. Do not link it from the
 * navigation or the footer.
 *
 * One model for both layers: src/data/privacy-policy-2026-10.json, rendered by
 * privacyArticleHtml() in src/data/privacy-policy-2026-10.mjs. The crawler body
 * (scripts/privacy-policy-page.mjs) uses the same function, so what visitors read and
 * what Google indexes are the same HTML.
 */
import { SEOHead } from "@/components/SEOHead";
import { Navigation } from "@/components/Navigation";
import data from "@/data/privacy-policy-2026-10.json";
import { privacyArticleHtml, privacyPageSchema, PRIVACY_PATH } from "@/data/privacy-policy-2026-10.mjs";
import type { PrivacyPolicy as PrivacyPolicyData } from "@/data/privacy-policy-2026-10.mjs";

const policy = data as unknown as PrivacyPolicyData;
const articleHtml = privacyArticleHtml(policy);

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title={policy.title}
        description={policy.description}
        canonical={`https://atlantisndt.com${PRIVACY_PATH}`}
        structuredData={privacyPageSchema(policy)}
      />
      {/* Content is our own JSON, escaped by inlineHtml(); no user input reaches it. */}
      <main dangerouslySetInnerHTML={{ __html: articleHtml }} />
    </div>
  );
}
