import { Navigation } from "@/components/Navigation";
import PillarHubNav from "@/components/PillarHubNav";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import {
  Building2, Users, MapPin, ShieldCheck, Award, Clock, Phone, CheckCircle2,
  Globe, BriefcaseBusiness, GraduationCap, Factory, Laptop2
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger
} from "@/components/ui/accordion";
import type { CorporateTrainingCityProfile } from "@/data/corporate-training-seo";
import { isCuratedCity } from "@/data/curated-cities";
import { CONSULTING_CITY_SLUGS, TRAINING_CITY_SLUGS } from "@/data/city-profiles";

interface Props {
  profile: CorporateTrainingCityProfile;
}

/**
 * Single reusable per-city corporate training page.
 * All 55+ city routes render via this component — content variation comes
 * from the profile object in corporate-training-seo.ts.
 */
export default function CorporateTrainingLocationPage({ profile }: Props) {
  const {
    slug, city, country, region, lat, lng,
    anchorIndustries, namedEmployers, typicalBatchSize, onsiteTravelRadius,
    priceRangeUSD, localPriceNote, localCertBodies, topMethodsInDemand,
    localCaseStudy, faqs, shortPitch, localContextParagraph,
  } = profile;

  const canonical = `/corporate-ndt-training/${slug}`;
  const pageTitle = `Corporate NDT Training in ${city} 2026 | Onsite & Online`;
  const pageDescription = `Expert corporate NDT training in ${city} — onsite at your facility or online. ${anchorIndustries[0]}-focused cohorts, ASNT-aligned, from ${priceRangeUSD.split(' ')[0]}.`.slice(0, 158);

  // Related services — only render if route exists
  const relatedConsultingHref = CONSULTING_CITY_SLUGS.has(slug) ? `/consulting/ndt-consulting-${slug}` : null;
  const relatedTrainingHref = TRAINING_CITY_SLUGS.has(slug) ? `/ndt-training-${slug}` : null;
  const relatedErpHref = `/ndt-erp-${slug}`;
  const relatedDtHref = `/digital-twin-${slug}`;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        canonical={canonical}
        noindex={!isCuratedCity(slug)}
        localBusiness={{
          city,
          region,
          country,
          lat,
          lng,
          serviceType: "Corporate NDT Training",
          description: `Corporate NDT training provider in ${city} delivering onsite, online, and blended ASNT SNT-TC-1A, ISO 9712, and local-scheme-aligned cohorts for ${anchorIndustries.slice(0, 2).join(' and ')}.`,
        }}
        course={{
          name: `Corporate NDT Training — ${city}`,
          description: `Corporate NDT training in ${city}: ${topMethodsInDemand.join(', ')}. Delivered onsite, online, or blended. ${typicalBatchSize}. Aligned to ${localCertBodies[0]}.`,
          deliveryMode: ['onsite', 'online', 'blended'],
          city,
          country,
          educationalCredentialAwarded: `${localCertBodies[0]} Level I / II certification (Level III available on request)`,
          educationalLevel: 'Intermediate',
          coursePrerequisites: 'Secondary education + basic vision test; method-specific OJT hours per applicable written practice.',
        }}
        faq={faqs}
      />
      <Navigation />
      <PillarHubNav active="training" />

      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: "Home", path: "/" },
              { label: "Corporate NDT Training", path: "/corporate-ndt-training" },
              { label: city },
            ]}
          />

          {/* Hero */}
          <header className="mt-6 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Corporate NDT Training in {city}
              <span className="block text-xl md:text-2xl font-medium text-muted-foreground mt-3">
                Onsite at your facility, online for distributed teams, or blended — your choice
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mt-6 max-w-3xl">{shortPitch}</p>

            <div className="flex flex-wrap gap-3 mt-6">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md font-medium">
                <Phone className="w-4 h-4" /> Request a corporate quote
              </Link>
              <a href="#delivery-modes" className="inline-flex items-center gap-2 border px-5 py-2.5 rounded-md font-medium">
                <GraduationCap className="w-4 h-4" /> Compare delivery modes
              </a>
            </div>
          </header>

          {/* Local context */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Factory className="w-6 h-6 text-primary" /> {city}'s NDT training landscape
            </h2>
            <p className="text-base leading-relaxed mb-6 max-w-4xl">{localContextParagraph}</p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Anchor industries driving demand</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {anchorIndustries.map((ind, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm capitalize">{ind}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Employers we've trained for (or adjacent-to)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {namedEmployers.slice(0, 6).map((e, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Building2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        <span className="text-sm">{e}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Delivery modes */}
          <section id="delivery-modes" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Delivery modes we offer in {city}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg"><Factory className="w-5 h-5" /> Onsite</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p>Our trainer at your facility in {city}. Classroom + practicals on your own equipment where feasible.</p>
                  <p className="text-muted-foreground"><strong>Travel radius:</strong> {onsiteTravelRadius}</p>
                  <p className="text-muted-foreground"><strong>Batch size:</strong> {typicalBatchSize}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg"><Laptop2 className="w-5 h-5" /> Online</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p>Live-led theory + virtual-lab streaming of UT/PAUT signal acquisition from our nearest regional hub.</p>
                  <p className="text-muted-foreground"><strong>Good for:</strong> distributed teams, pre-work before a turnaround, refresher cycles.</p>
                  <p className="text-muted-foreground"><strong>Savings vs onsite:</strong> ~25-35%</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg"><Globe className="w-5 h-5" /> Blended</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p>Theory + written exam online; hands-on practicals + specimen exam delivered onsite at your {city} facility.</p>
                  <p className="text-muted-foreground"><strong>Typical split:</strong> 40-60% online / 60-40% onsite</p>
                  <p className="text-muted-foreground"><strong>Savings vs onsite:</strong> ~20-25%</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Top methods */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" /> Top NDT methods in demand in {city}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {topMethodsInDemand.map((m, i) => (
                <Card key={i}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl font-bold text-primary">{i + 1}</span>
                      <p className="text-sm">{m}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Local case study */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <BriefcaseBusiness className="w-6 h-6 text-primary" /> {city} case snippet
            </h2>
            <Card className="border-l-4 border-primary">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">{localCaseStudy.title}</h3>
                <p className="text-sm mb-3">{localCaseStudy.summary}</p>
                <p className="text-sm font-medium text-primary">Outcome: {localCaseStudy.outcome}</p>
              </CardContent>
            </Card>
          </section>

          {/* Compliance */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-primary" /> Local credentials & schemes we align to in {city}
            </h2>
            <div className="flex flex-wrap gap-3">
              {localCertBodies.map((b, i) => (
                <span key={i} className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> {b}
                </span>
              ))}
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Clock className="w-6 h-6 text-primary" /> Pricing snapshot — {city}
            </h2>
            <Card>
              <CardContent className="pt-6">
                <dl className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="font-semibold text-muted-foreground">Typical price band</dt>
                    <dd className="text-base mt-1">{priceRangeUSD}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-muted-foreground">Typical batch size</dt>
                    <dd className="text-base mt-1">{typicalBatchSize}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-muted-foreground">Onsite travel radius</dt>
                    <dd className="text-base mt-1">{onsiteTravelRadius}</dd>
                  </div>
                  {localPriceNote && (
                    <div>
                      <dt className="font-semibold text-muted-foreground">Billing note</dt>
                      <dd className="text-base mt-1">{localPriceNote}</dd>
                    </div>
                  )}
                </dl>
                <p className="text-xs text-muted-foreground mt-4">
                  All prices indicative; final quote depends on method mix, number of cohorts, travel & accommodation, and specimen material.
                  Atlantis NDT pricing includes trainer fees, written + practical exam, ASNT Level III countersignature, and digital competence records.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">{city}-specific FAQs</h2>
            <Accordion type="single" collapsible>
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left">{f.question}</AccordionTrigger>
                  <AccordionContent className="text-sm">{f.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Related */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-primary" /> Also serving {city}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link to={relatedErpHref} className="block p-4 border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-sm mb-1">NDT ERP in {city}</h3>
                <p className="text-xs text-muted-foreground">Reporting, calibration tracking, certification mgmt</p>
              </Link>
              <Link to={relatedDtHref} className="block p-4 border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-sm mb-1">Digital Twins in {city}</h3>
                <p className="text-xs text-muted-foreground">Asset-integrity digital twins for your plant</p>
              </Link>
              {relatedConsultingHref && (
                <Link to={relatedConsultingHref} className="block p-4 border rounded-lg hover:border-primary transition-colors">
                  <h3 className="font-semibold text-sm mb-1">NDT Consulting in {city}</h3>
                  <p className="text-xs text-muted-foreground">Level III program + procedure development</p>
                </Link>
              )}
              {relatedTrainingHref && (
                <Link to={relatedTrainingHref} className="block p-4 border rounded-lg hover:border-primary transition-colors">
                  <h3 className="font-semibold text-sm mb-1">Open-enrolment Training in {city}</h3>
                  <p className="text-xs text-muted-foreground">Individual ASNT Level I / II / III</p>
                </Link>
              )}
            </div>
          </section>

          {/* CTA */}
          <section className="mb-12">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="pt-8 pb-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  Book a corporate NDT training site visit in {city}
                </h2>
                <p className="max-w-2xl mx-auto mb-6 text-primary-foreground/90">
                  Our {city} bench typically responds to a corporate RFQ inside 2 business days.
                  We'll recommend method mix, batch sizing, and an onsite vs online vs blended plan based on your facility's
                  turnaround calendar and inspector-competence gap.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-md font-medium">
                    <Phone className="w-4 h-4" /> Request a corporate quote
                  </Link>
                  <Link to="/corporate-ndt-training" className="inline-flex items-center gap-2 border border-primary-foreground/30 px-6 py-3 rounded-md font-medium">
                    <Users className="w-4 h-4" /> See all cities
                  </Link>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
        <ContactDetails />
      </main>
    </div>
  );
}
