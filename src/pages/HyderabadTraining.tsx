// /ndt-training-hyderabad — rebuilt 2026-10-12 (training release, SEO audit action 10).
// One source with the crawler HTML (scripts/training-release-2026-10.mjs → hyderabadBodyHtml):
// copy in src/data/training-release-2026-10.json, address in src/data/about-2026-10.json,
// hours in src/data/snt-tc-1a-hours.json. India is never priced (CLAUDE.md §18): fees are
// quoted, and this page imports no pricing data. Atlantis does not run training centres.
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import TrainingEnquiryCTA from "@/components/TrainingEnquiryCTA";
import { Link } from "react-router-dom";
import { MapPin, GraduationCap } from "lucide-react";
import about from "@/data/about-2026-10.json";
import {
  RELEASE_COPY,
  HOURS,
  CourseHoursTable,
  PracticalSessionsList,
  releaseCourseNode,
} from "@/components/TrainingReleaseBlocks";
import { packageHours } from "@/data/course-markup-2026-10.mjs";

type Hyd = {
  path: string; title: string; description: string; h1: string; intro: string; leadBy: string;
  coursesH2: string; coursesIntro: string; levels: [string, string, string][];
  practicalH2: string; officeH2: string; office: string; otherSchemesH2: string; otherSchemes: string;
  faqH2: string; faq: [string, string][]; ctaH2: string; cta: string; ctaHref: string; ctaText: string;
  related: [string, string][];
};
const H = (RELEASE_COPY as unknown as { hyderabad: Hyd }).hyderabad;
const ADDRESS = (about.addresses.find((a) => /Hyderabad/.test(a.label)) || { text: "" }).text;
const fill = (s: string) => s.replace(/\{address\}/g, ADDRESS);
const CC = RELEASE_COPY.cityCourses;

function Links({ html }: { html: string }) {
  // the "advanced" sentence carries internal links as HTML in the shared copy
  const parts: React.ReactNode[] = [];
  const rx = /<a href="([^"]+)">([^<]+)<\/a>/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = rx.exec(html)) !== null) {
    if (m.index > last) parts.push(html.slice(last, m.index));
    parts.push(<Link key={m.index} to={m[1]} className="text-primary underline">{m[2]}</Link>);
    last = m.index + m[0].length;
  }
  if (last < html.length) parts.push(html.slice(last));
  return <>{parts}</>;
}

export default function HyderabadTraining() {
  const canonical = `https://atlantisndt.com${H.path}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      releaseCourseNode(H.path),
      {
        "@type": "FAQPage",
        mainEntity: H.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: fill(a) } })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://atlantisndt.com/" },
          { "@type": "ListItem", position: 2, name: "Training", item: "https://atlantisndt.com/training" },
          { "@type": "ListItem", position: 3, name: "NDT training India", item: "https://atlantisndt.com/training-india" },
          { "@type": "ListItem", position: 4, name: "Hyderabad", item: canonical },
        ],
      },
    ],
  };
  const l1 = packageHours(HOURS, 0) ?? "";
  const l2 = packageHours(HOURS, 1) ?? "";

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title={H.title}
        description={H.description}
        keywords="NDT training Hyderabad, NDT courses Hyderabad, ASNT training Hyderabad, NDT Level 2 training Hyderabad, SNT-TC-1A training India"
        canonical={canonical}
        structuredData={structuredData}
      />
      <Breadcrumbs />

      <section className="bg-gradient-to-br from-orange-600 to-amber-700 text-white pt-24">
        <div className="container mx-auto max-w-5xl px-6 py-14">
          <div className="flex items-center gap-2 text-orange-100 mb-4">
            <MapPin className="w-5 h-5" />
            <span>Hyderabad, Telangana · Live online and on-site at your facility</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{H.h1}</h1>
          <div data-citation-block="answer" className="text-lg text-orange-50 max-w-3xl mb-4">
            <p>{H.intro}</p>
          </div>
          <p className="text-orange-100 max-w-3xl mb-8">{H.leadBy}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to={H.ctaHref} className="inline-block bg-white text-orange-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">
              {H.ctaText}
            </Link>
            <Link to="/training-india" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">
              NDT training in India
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2"><GraduationCap className="w-7 h-7 text-orange-600" />{H.coursesH2}</h2>
          <p className="text-slate-600 mb-6">{H.coursesIntro}</p>
          <ul className="space-y-3 mb-8">
            {H.levels.map(([t, d, href]) => (
              <li key={t} className="bg-white rounded-lg border p-4">
                <Link to={href} className="font-semibold text-orange-700 underline">{t}</Link>: <span className="text-slate-600">{d}</span>
              </li>
            ))}
          </ul>
          <CourseHoursTable caption={CC.caption} />
          <p className="text-slate-600">
            {CC.packages.replace("{l1}", String(l1)).replace("{l2}", String(l2))} <Links html={CC.advanced} />
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold mb-4">{H.practicalH2}</h2>
          <PracticalSessionsList label="Hyderabad" />
          <h2 className="text-2xl font-bold mt-10 mb-3">{H.officeH2}</h2>
          <p className="text-slate-600 flex items-start gap-2"><MapPin className="w-5 h-5 text-orange-600 mt-0.5 shrink-0" />{fill(H.office)}</p>
          <h2 className="text-2xl font-bold mt-10 mb-3">{H.otherSchemesH2}</h2>
          <p className="text-slate-600">{H.otherSchemes}</p>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-6">{H.faqH2}</h2>
          {H.faq.map(([q, a]) => (
            <div key={q} className="mb-5">
              <h3 className="text-lg font-semibold mb-1">{q}</h3>
              <p className="text-slate-600">{fill(a)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="container mx-auto max-w-4xl px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{H.ctaH2}</h2>
          <p className="text-orange-50 mb-2 text-lg">{H.cta}</p>
          <p className="text-orange-100 mb-8">{CC.fees.india}</p>
          <Link to={H.ctaHref} className="inline-block bg-white text-orange-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">
            {H.ctaText}
          </Link>
          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-orange-50">
            {H.related.map(([href, t]) => (
              <li key={href}><Link to={href} className="underline">{t}</Link></li>
            ))}
          </ul>
        </div>
      </section>

      <TrainingEnquiryCTA />
      <ContactDetails />
    </div>
  );
}
