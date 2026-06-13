import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, DollarSign, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { SEOHead } from '@/components/SEOHead';
import { Navigation } from '@/components/Navigation';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import ContactDetails from '@/components/ContactDetails';
import { Link } from 'react-router-dom';

const REPORT_TIME_REDUCTION = 0.60;
const ADMIN_OVERHEAD_REDUCTION = 0.50;
// NOTE: Atlantis-specific license figures removed — pricing varies by region and team size.
// Users get a tailored quote at info@atlantisndt.com. Generic ROI math (savings, time-saved) preserved.
const LICENSE_LOW = 0;
const LICENSE_HIGH = 0;

function fmtUsd(n: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
}

export default function NdtErpRoiCalculator() {
  const [technicians, setTechnicians] = useState<number>(15);
  const [jobsPerMonth, setJobsPerMonth] = useState<number>(8);
  const [hoursPerReport, setHoursPerReport] = useState<number>(3);
  const [techRate, setTechRate] = useState<number>(85);
  const [adminHoursPerWeek, setAdminHoursPerWeek] = useState<number>(20);
  const [adminRate, setAdminRate] = useState<number>(45);

  const results = useMemo(() => {
    const annualReports = technicians * jobsPerMonth * 12;
    const currentReportHours = annualReports * hoursPerReport;
    const currentReportCost = currentReportHours * techRate;
    const projectedReportCost = currentReportCost * (1 - REPORT_TIME_REDUCTION);
    const reportLaborSavings = currentReportCost - projectedReportCost;

    const annualAdminCost = adminHoursPerWeek * 52 * adminRate;
    const adminSavings = annualAdminCost * ADMIN_OVERHEAD_REDUCTION;

    const totalSavings = reportLaborSavings + adminSavings;

    const licenseLow = LICENSE_LOW;
    const licenseHigh = LICENSE_HIGH;
    const licenseMid = (licenseLow + licenseHigh) / 2;
    const netRoiLow = totalSavings - licenseHigh;
    const netRoiHigh = totalSavings - licenseLow;
    const paybackMonthsMid = licenseMid > 0 && totalSavings > 0
      ? (licenseMid / totalSavings) * 12
      : 0;

    return {
      annualReports,
      currentReportCost,
      projectedReportCost,
      reportLaborSavings,
      annualAdminCost,
      adminSavings,
      totalSavings,
      licenseLow,
      licenseHigh,
      netRoiLow,
      netRoiHigh,
      paybackMonthsMid
    };
  }, [technicians, jobsPerMonth, hoursPerReport, techRate, adminHoursPerWeek, adminRate]);

  const faq = [
    {
      question: 'Where does the 60% report-time reduction figure come from?',
      answer: 'Aggregated case studies across Mistras Group DRIVE, Oceaneering NDTMS, InspectionXpert, and Atlantis NDT Suite rollouts consistently show a 50-70% reduction in technician time spent on report production when moving from Word/Excel templates to structured digital capture with auto-generated reports. 60% is the median across 40+ published deployments. Your mileage may vary based on the baseline workflow and the methods you run.'
    },
    {
      question: 'Is the 50% admin overhead reduction realistic?',
      answer: 'Administrative overhead in an NDT business is concentrated in three activities: manual report QA, job file assembly for the client, and certification/calibration paperwork. A purpose-built NDT ERP automates all three. 50% reduction is achievable within 6-9 months post go-live; some customers hit 70%+ but we use 50% as a conservative planning assumption.'
    },
    {
      question: 'How much does Atlantis NDT ERP cost?',
      answer: 'Pricing varies by region and team size — request a tailored quote at info@atlantisndt.com. Atlantis NDT ERP is positioned as the affordable, fully customizable alternative across small (5-10 tech), mid (25-40 tech), and enterprise (50+ tech) deployments. Tell us your tech count, methods, and integration scope and we will quote.'
    },
    {
      question: 'Does the calculator include training and change-management cost?',
      answer: 'No. The calculator shows direct labor and admin savings only. Plan an additional $5K-$25K one-time cost for training, change management, and data migration. These costs are usually recouped within the first 4-6 months of operation and are absorbed into the Year 1 payback calculation when you run a full TCO model.'
    }
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'NDT ERP ROI Calculator',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: 'Interactive ROI calculator for NDT ERP investment. Model report labor savings, admin overhead reduction, and payback period for your inspection business.',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        provider: { '@type': 'Organization', name: 'Atlantis NDT', url: 'https://atlantisndt.com' }
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map(f => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer }
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title="NDT ERP ROI Calculator 2026: Savings & Payback"
        description="Free NDT ERP ROI calculator. Model report labor savings, admin reduction, Year 1 net ROI, and payback months for your inspection business."
        keywords="NDT ERP ROI, NDT software ROI calculator, inspection software savings, NDT ERP payback, NDT ERP cost benefit"
        canonical="https://atlantisndt.com/ndt-erp-roi-calculator"
        structuredData={structuredData}
        faq={faq}
      />
      <div className="container mx-auto px-6 pt-4">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'NDT ERP', href: '/ndt-erp-solution' }, { label: 'ROI Calculator' }]} />
      </div>

      <motion.section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="flex items-center justify-center gap-2 text-primary mb-4">
            <Calculator className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wide">ROI Calculator</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">NDT ERP ROI Calculator 2026</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Plug in your inspection business numbers. See your annual report labor savings, admin overhead reduction,
            Year 1 net ROI, and payback period for a purpose-built NDT ERP deployment.
          </p>
        </div>
      </motion.section>

      <section className="py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Your Inputs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div>
                  <Label htmlFor="technicians">Number of field technicians</Label>
                  <Input id="technicians" type="number" min={1} value={technicians} onChange={(e) => setTechnicians(Math.max(0, Number(e.target.value)))} />
                </div>
                <div>
                  <Label htmlFor="jobs">Average jobs per technician per month</Label>
                  <Input id="jobs" type="number" min={0} value={jobsPerMonth} onChange={(e) => setJobsPerMonth(Math.max(0, Number(e.target.value)))} />
                </div>
                <div>
                  <Label htmlFor="hours">Current hours spent per report</Label>
                  <Input id="hours" type="number" min={0} step={0.25} value={hoursPerReport} onChange={(e) => setHoursPerReport(Math.max(0, Number(e.target.value)))} />
                </div>
                <div>
                  <Label htmlFor="techRate">Average fully-loaded tech rate ($/hr)</Label>
                  <Input id="techRate" type="number" min={0} value={techRate} onChange={(e) => setTechRate(Math.max(0, Number(e.target.value)))} />
                </div>
                <div>
                  <Label htmlFor="adminHours">Admin overhead hours per week (whole team)</Label>
                  <Input id="adminHours" type="number" min={0} value={adminHoursPerWeek} onChange={(e) => setAdminHoursPerWeek(Math.max(0, Number(e.target.value)))} />
                </div>
                <div>
                  <Label htmlFor="adminRate">Average admin rate ($/hr)</Label>
                  <Input id="adminRate" type="number" min={0} value={adminRate} onChange={(e) => setAdminRate(Math.max(0, Number(e.target.value)))} />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="text-2xl">Your Projected ROI</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" /> Annual reports produced
                  </div>
                  <span className="font-semibold">{results.annualReports.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <DollarSign className="w-4 h-4" /> Current annual report labor cost
                  </div>
                  <span className="font-semibold">{fmtUsd(results.currentReportCost)}</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    Projected with NDT ERP (60% faster)
                  </div>
                  <span className="font-semibold">{fmtUsd(results.projectedReportCost)}</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    Report labor savings / year
                  </div>
                  <Badge variant="default" className="text-base">{fmtUsd(results.reportLaborSavings)}</Badge>
                </div>
                <div className="flex items-center justify-between pb-3 border-b">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    Admin savings / year (50% reduction)
                  </div>
                  <Badge variant="default" className="text-base">{fmtUsd(results.adminSavings)}</Badge>
                </div>
                <div className="flex items-center justify-between pb-3 border-b">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground font-semibold">
                    <TrendingUp className="w-4 h-4" /> Total annual savings
                  </div>
                  <span className="text-xl font-bold text-primary">{fmtUsd(results.totalSavings)}</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b">
                  <div className="text-sm text-muted-foreground">NDT ERP license</div>
                  <span className="font-semibold text-primary">Request a tailored quote</span>
                </div>
                <div className="text-xs text-muted-foreground italic">
                  Atlantis NDT ERP is affordable, accessible, and fully customizable. Pricing varies by region and team size — email info@atlantisndt.com for your tailored quote, then compare your annual savings (above) against the quote to compute Year 1 net ROI and payback.
                </div>
                <Button asChild size="lg" className="w-full mt-4">
                  <Link to="/contact">Get a Custom ROI Model</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">How the calculator works &mdash; assumptions explained</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              The calculator uses six inputs that together describe the report-production cost structure of a typical NDT inspection business,
              plus two industry-benchmark assumptions derived from published NDT ERP case studies and our own implementation data across
              100+ inspection company deployments.
            </p>
            <p>
              <strong>Input 1: Number of field technicians.</strong> We assume each tech is fully-loaded and billable. If you have part-time
              or support staff, include them as fractional FTEs. <strong>Input 2: Jobs per tech per month.</strong> A job is one discrete
              inspection scope that produces at least one report. Typical ranges: 6-12 for multi-day scopes, 15-25 for short thickness surveys.
            </p>
            <p>
              <strong>Input 3: Current hours per report.</strong> This is the most impactful variable and the one most customers underestimate.
              Include field capture time plus office QA and formatting time, not just the desk-side typing time. Typical baseline is 2-4 hours
              per report for teams on Word/Excel templates, dropping to 6-8 hours for complex multi-method jobs.
            </p>
            <p>
              <strong>Input 4: Tech rate $/hr.</strong> Use the fully-loaded cost (base + burden + benefits + overhead allocation). For US
              Level II UT/PAUT technicians this is usually $70-$110/hr. For ASNT Level III consultants it is $150-$250/hr. <strong>Inputs 5
              and 6: admin overhead hours and rate.</strong> Admin time is the hidden cost of NDT businesses: report QA, file assembly for
              the client, certification chasing, calibration paperwork. Even well-run 15-tech shops burn 15-30 hours/week on this.
            </p>
            <p>
              <strong>Assumption A: 60% report-time reduction.</strong> Median reduction across published NDT ERP case studies. A
              purpose-built NDT ERP auto-populates 70% of report fields from captured field data, auto-validates against method procedure
              templates, and auto-generates the PDF. <strong>Assumption B: 50% admin overhead reduction.</strong> Conservative. We have
              customers who hit 70%+ after 9 months of mature usage, but 50% is a safe planning number.
            </p>
            <p>
              Atlantis NDT Suite is positioned as affordable, accessible, and fully customizable across small (5-10 tech), mid (25-40 tech),
              and enterprise (50+ tech) deployments — pricing varies by region and team size, so we share a tailored quote when you contact
              us at info@atlantisndt.com rather than publishing a fixed list price here. Implementation fees and training are not included in
              the net ROI; plan an additional one-time cost for those, typically recouped in the first 4-6 months. The calculator is deliberately
              conservative: it ignores downstream revenue uplift from faster report turnaround (winning repeat business from clients) and from
              expanded capacity (same team doing more jobs because they are not stuck in paperwork).
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Want a version customized to your P&amp;L?</h2>
          <p className="text-muted-foreground mb-6">
            Share your current jobs/month and tech count. We will build a 5-year TCO model with your actual numbers and benchmarks from
            comparable companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg"><Link to="/contact">Request Custom Model</Link></Button>
            <Button asChild size="lg" variant="outline"><Link to="/ndt-erp-vs-generic-erp">See ERP Comparison</Link></Button>
          </div>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
