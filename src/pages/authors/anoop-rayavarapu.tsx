/**
 * /authors/anoop-rayavarapu — the author entity page.
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY THIS EXISTS
 *
 * Every citation layer carries a byline linking here, so without this page each
 * one is a 404 — worse than no byline at all.
 *
 * Beyond fixing the link, this is the E-E-A-T asset the competitor audit found
 * unexploited across the whole category. Of ten ASNT Level III consulting
 * competitors fetched, only two named a human being anywhere. Across the
 * training segment, proof is testimonial-grade: BBB badges, staff photos, one
 * BLS footnote. Nobody publishes a credentialed technical reviewer with methods
 * and certifications listed.
 *
 * The direct citation lift from author credentials is modest on its own — brand
 * and entity trust scores around 6.8/10 in the 2026 studies. Its value is that
 * it is durable and uncopyable: a competitor can add a comparison table in an
 * afternoon, and cannot manufacture a named ASNT Level III.
 *
 * Person schema with hasCredential comes from src/data/author-schema.ts, which
 * already existed and was already embedded on two pages. This page makes it a
 * real entity with a resolvable URL rather than a floating @id.
 */
import { SEOHead } from "@/components/SEOHead";
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { ATLANTIS_AUTHOR_ANOOP, ATLANTIS_PUBLISHER } from "@/data/author-schema";

const METHODS = [
  { code: "UT", name: "Ultrasonic Testing" },
  { code: "RT", name: "Radiographic Testing" },
  { code: "MT", name: "Magnetic Particle Testing" },
  { code: "PT", name: "Liquid Penetrant Testing" },
  { code: "VT", name: "Visual Testing" },
  { code: "ET", name: "Eddy Current Testing" },
];

const REVIEWS = [
  { href: "/blog/ndt-salary-guide-2026-global", label: "NDT salary by certification level and method" },
  { href: "/blog/cwi-pass-rate-by-part-a-b-c-breakdown", label: "AWS CWI pass rates by examination part" },
  { href: "/consulting/ndt-consulting-level-iii", label: "Outsourced ASNT Level III scope and authority" },
  { href: "/blog/api-510-570-653-exam-schedule-2026", label: "API 510, 570 and 653 examination windows" },
  { href: "/asnt-certification", label: "ASNT certification pathway" },
  { href: "/blog/asnt-snt-tc-1a-certification-requirements", label: "SNT-TC-1A written practice requirements" },
];

export default function AuthorAnoopRayavarapu() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { ...ATLANTIS_AUTHOR_ANOOP, url: "https://atlantisndt.com/authors/anoop-rayavarapu" },
      ATLANTIS_PUBLISHER,
      {
        "@type": "ProfilePage",
        "@id": "https://atlantisndt.com/authors/anoop-rayavarapu#profile",
        mainEntity: { "@id": ATLANTIS_AUTHOR_ANOOP["@id"] },
        url: "https://atlantisndt.com/authors/anoop-rayavarapu",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <SEOHead
        title="Anoop Rayavarapu — ASNT NDT Level III, Technical Reviewer"
        description="ASNT NDT Level III certified across UT, RT, MT, PT, VT and ET, API 653 tank inspector and ISO 9001:2015 lead auditor. Technical reviewer for Atlantis NDT certification, code and inspection guidance."
        canonical="https://atlantisndt.com/authors/anoop-rayavarapu"
        structuredData={structuredData}
      />
      <Navigation />
      <Breadcrumbs />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Anoop Rayavarapu</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
          ASNT NDT Level III · Founder, Atlantis NDT · Technical reviewer
        </p>

        {/* The answer block pattern, applied to the author entity itself: a
            self-contained statement of who this is and what they may sign. */}
        <section
          data-citation-block="answer"
          className="my-6 rounded-lg border-l-4 border-blue-700 dark:border-blue-400 bg-slate-50 dark:bg-slate-900/50 p-5"
        >
          <p className="text-base sm:text-lg leading-relaxed">
            Anoop Rayavarapu holds ASNT NDT Level III certification across six methods — UT, RT, MT,
            PT, VT and ET — together with API 653 aboveground storage tank inspector certification
            and ISO 9001:2015 lead auditor qualification. He reviews the certification, code and
            inspection guidance published on this site.
          </p>
          <p className="mt-4 text-sm sm:text-base text-slate-700 dark:text-slate-300">
            A Level III is the only level authorised to approve NDT procedures, author or approve an
            employer written practice, and administer the examinations by which Level I and Level II
            technicians are qualified under ASNT SNT-TC-1A. That authority is what makes technical
            review meaningful rather than editorial: the guidance on this site is checked by someone
            who carries the same responsibility in practice, across oil and gas, petrochemical,
            aerospace and marine inspection programmes in the United States, the Middle East and India.
          </p>
          <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            <span className="font-semibold">Certification scheme: </span>
            ASNT SNT-TC-1A (2024 edition) · API Individual Certification Programs · ISO 9001:2015
          </p>
        </section>

        <h2 className="text-xl font-bold mt-10 mb-3">Certifications</h2>
        <div className="overflow-x-auto rounded-lg border border-slate-300 dark:border-slate-700">
          <table className="w-full border-collapse text-sm">
            <caption className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-400 border-b border-slate-300 dark:border-slate-700">
              Held certifications, the body that grants each, and what each authorises
            </caption>
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <th scope="col" className="px-4 py-2.5 text-left font-semibold">Certification</th>
                <th scope="col" className="px-4 py-2.5 text-left font-semibold">Granted by</th>
                <th scope="col" className="px-4 py-2.5 text-left font-semibold">Authorises</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="px-4 py-2.5 text-left font-medium border-t border-slate-200 dark:border-slate-800">
                  ASNT NDT Level III (UT, RT, MT, PT, VT, ET)
                </th>
                <td className="px-4 py-2.5 border-t border-slate-200 dark:border-slate-800">American Society for Nondestructive Testing</td>
                <td className="px-4 py-2.5 border-t border-slate-200 dark:border-slate-800">Approving procedures, authoring written practice, qualifying personnel</td>
              </tr>
              <tr className="bg-slate-50/60 dark:bg-slate-900/40">
                <th scope="row" className="px-4 py-2.5 text-left font-medium border-t border-slate-200 dark:border-slate-800">
                  API 653
                </th>
                <td className="px-4 py-2.5 border-t border-slate-200 dark:border-slate-800">American Petroleum Institute</td>
                <td className="px-4 py-2.5 border-t border-slate-200 dark:border-slate-800">Aboveground storage tank inspection, repair and alteration</td>
              </tr>
              <tr>
                <th scope="row" className="px-4 py-2.5 text-left font-medium border-t border-slate-200 dark:border-slate-800">
                  ISO 9001:2015 Lead Auditor
                </th>
                <td className="px-4 py-2.5 border-t border-slate-200 dark:border-slate-800">ISO-recognised certification body</td>
                <td className="px-4 py-2.5 border-t border-slate-200 dark:border-slate-800">Auditing quality management systems, including NDT programmes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mt-10 mb-3">Methods certified</h2>
        <ul className="grid sm:grid-cols-2 gap-2 mb-8">
          {METHODS.map((m) => (
            <li key={m.code} className="text-slate-700 dark:text-slate-300">
              <span className="font-semibold">{m.code}</span> — {m.name}
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-bold mt-10 mb-3">Pages technically reviewed</h2>
        <ul className="space-y-2 mb-10">
          {REVIEWS.map((r) => (
            <li key={r.href}>
              <Link to={r.href} className="text-blue-700 dark:text-blue-400 underline underline-offset-2">
                {r.label}
              </Link>
            </li>
          ))}
        </ul>

        <section className="border-t border-slate-200 dark:border-slate-800 pt-6">
          <h2 className="text-xl font-bold mb-3">Technical review enquiries</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            Atlantis NDT provides outsourced ASNT Level III services — written practice development,
            procedure approval, examination administration and audit support — for employers without
            a Level III on staff. Scope and engagement model are quoted on request.
          </p>
          <Link
            to="/contact?service=consulting&subject=ASNT%20Level%20III%20enquiry"
            className="inline-block rounded-md bg-blue-700 px-5 py-2.5 text-white font-semibold hover:bg-blue-800"
          >
            Discuss a Level III engagement
          </Link>
        </section>
      </main>
    </div>
  );
}
