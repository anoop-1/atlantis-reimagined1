import { motion } from 'framer-motion';
import { CalendarClock, AlertTriangle, CheckCircle, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SEOHead } from '@/components/SEOHead';
import { Navigation } from '@/components/Navigation';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import ContactDetails from '@/components/ContactDetails';
import { Link } from 'react-router-dom';

export default function NdtErpImplementationTimeline() {
  const faq = [
    {
      question: 'Can we really go live on an NDT ERP in 90 days?',
      answer: 'Yes, for a typical 10-40 technician inspection company with 1-3 methods and standard financial integration (QuickBooks, Xero, or Dynamics 365), 90 days is realistic. Larger deployments with SAP S/4HANA integration, custom report templates, and 50+ technicians typically run 4-6 months. The 30/60/90 framework below assumes the standard case; you can compress to 60 days with aggressive scope discipline, or extend to 120+ days for enterprise complexity.'
    },
    {
      question: 'What is the biggest cause of NDT ERP implementation failure?',
      answer: 'Scope creep on custom report templates. Every technician has an opinion about layout, every client has "one tiny format preference," and if you let the project capture all of them you will spend 6 months in report design and never go live. The fix: lock 3-5 standard report templates in the first 2 weeks, commit to using them for Phase 1, and schedule a Phase 2 (90 days post go-live) for edge-case report formats. Second most common failure: not migrating historical data, so the team has to keep the legacy system running in parallel indefinitely.'
    },
    {
      question: 'Do we need to freeze current operations during go-live?',
      answer: 'No. A well-run cutover uses a 2-week parallel-run period where field captures go into both the legacy system (Excel/Word) and the new NDT ERP. After 2 weeks of clean output from the ERP, the legacy system is retired. This protects you from day-one data loss and keeps client deliverables flowing. The parallel period adds ~10-15% load on technicians for 2 weeks but is well worth the risk reduction.'
    },
    {
      question: 'Who owns the implementation on our side?',
      answer: 'You need three roles: (1) an Executive Sponsor (usually COO or VP Operations) for decision-making authority and scope control, (2) a Project Manager (20-50% of their time for 90 days) to run the cutover, and (3) 1-2 Technical SMEs — typically a Level III and a senior office admin — to validate workflow design, templates, and data migration. Atlantis supplies an Implementation Lead, a Technical Architect for integrations, and a Training Lead, so your team has a counterpart for each role.'
    }
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'Atlantis NDT ERP',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, iOS, Android',
        description: 'Purpose-built NDT ERP with 30/60/90-day go-live implementation methodology. Proven across 100+ inspection company deployments.',
        offers: { '@type': 'Offer', price: '15000', priceCurrency: 'USD' },
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

  const timeline = [
    { phase: 'Day 1-5', workstream: 'Discovery', owner: 'Atlantis IL + Client PM', detail: 'Kick-off workshop, current-state process mapping, stakeholder interviews, risk log v1, decision log opened.' },
    { phase: 'Day 6-10', workstream: 'Discovery', owner: 'Atlantis IL + Client SMEs', detail: 'Job lifecycle walk-through, report template audit (existing), certification & calibration data audit, scope lock.' },
    { phase: 'Day 11-15', workstream: 'Design', owner: 'Atlantis Architect', detail: 'Future-state workflow design, integration architecture (SAP/Oracle/QB mapping), security roles, tenant provisioning.' },
    { phase: 'Day 16-20', workstream: 'Data Migration', owner: 'Atlantis Data Engineer', detail: 'Extract customer, equipment, technician, certification master from legacy system. Dedupe. Load into sandbox tenant.' },
    { phase: 'Day 21-25', workstream: 'Configuration', owner: 'Atlantis IL + Client SME', detail: 'Configure 3-5 standard report templates, methods, procedures, roles, cost centers. Lock Phase 1 scope.' },
    { phase: 'Day 26-30', workstream: 'Integration', owner: 'Atlantis Architect', detail: 'Build & unit test financial integration (QB/SAP/Oracle). Sandbox endpoint live. First master-data sync successful.' },
    { phase: 'Day 31-40', workstream: 'Integration', owner: 'Atlantis Architect', detail: 'EAM integration if applicable (Maximo/SAP PM). Webhook setup. Bidirectional sync of equipment master tested.' },
    { phase: 'Day 41-50', workstream: 'Training (Train-the-Trainer)', owner: 'Atlantis Training Lead', detail: 'Train 2-3 internal champions per function: field tech, office admin, Level III reviewer. Role-based playbooks issued.' },
    { phase: 'Day 51-60', workstream: 'Training (Broad rollout)', owner: 'Client Champions', detail: 'Champions train the full team. 3-4 hours per role. Mobile app installed on every tech device. Sandbox login for all.' },
    { phase: 'Day 61-70', workstream: 'UAT', owner: 'Client SMEs + Atlantis IL', detail: 'Run 20 real inspection jobs end-to-end through sandbox. Log defects. Daily triage. Report layouts finalized.' },
    { phase: 'Day 71-80', workstream: 'UAT + Fix', owner: 'Atlantis Eng + Client SMEs', detail: 'Close UAT defects. Re-test integrations with production-like data volumes. Performance & security sign-off.' },
    { phase: 'Day 81-85', workstream: 'Cutover Prep', owner: 'Atlantis IL + Client PM', detail: 'Production tenant provisioned. Final data migration rehearsal. Go/no-go checklist. Rollback plan documented.' },
    { phase: 'Day 86-88', workstream: 'Go-Live', owner: 'All hands', detail: 'Production cutover over a weekend. Monday morning: full team on new ERP. Parallel-run with legacy for 2 weeks.' },
    { phase: 'Day 89-90', workstream: 'Hypercare', owner: 'Atlantis IL onsite', detail: 'Daily standup, real-time defect triage, rapid-fix SLAs. Success metrics tracked: adoption %, report cycle time, exceptions.' }
  ];

  const risks = [
    { risk: 'Report template scope creep', impact: 'High', mitigation: 'Lock 3-5 standard templates in Day 11-15. Defer all edge cases to Phase 2 (90 days post go-live). Executive sponsor has final sign-off.' },
    { risk: 'Dirty legacy master data (duplicates, missing certs)', impact: 'High', mitigation: 'Run a data audit in Day 16-20. Appoint a data steward on client side. Plan 2-3 cleanup cycles before final migration. Archive historical junk to cold storage, do not migrate.' },
    { risk: 'Integration lag with SAP/Oracle (Basis team unavailable)', impact: 'High', mitigation: 'Lock SAP/Oracle team availability in the MSA kickoff. Budget 2 full days of their time in weeks 3-4. Have a sandbox credential in hand before Day 20.' },
    { risk: 'Field technician adoption resistance', impact: 'Medium', mitigation: 'Identify and pre-train 2-3 respected Level II/III champions in Week 5. Pay a $500 go-live bonus for the first 20 clean reports. Make the mobile app demonstrably faster than paper.' },
    { risk: 'Insufficient UAT rigor', impact: 'Medium', mitigation: 'UAT exit criteria are objective: 20 end-to-end inspection jobs completed in sandbox with zero critical defects. Do not cut over on a date, cut over on passing the exit criteria.' },
    { risk: 'Parallel-run fatigue during hypercare', impact: 'Medium', mitigation: 'Cap parallel run at 14 days. Daily data reconciliation. Pull the plug on legacy on Day 14 regardless of residual anxiety; holding longer only delays muscle memory.' },
    { risk: 'Client-facing report format pushback post go-live', impact: 'Low', mitigation: 'Identify top 5 clients by revenue and share a sample new-format report with them in Week 8. Collect feedback. Pre-approved formats eliminate 90% of post go-live client complaints.' }
  ];

  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title="NDT ERP Implementation 2026 — Live in 90 Days, regional pricing"
        description="Go live on NDT ERP in 30/60/90 days for regional pricing — vs 9-24 months for SAP. Day-by-day gantt, migration, UAT, cutover. 7-risk register. Free 90-day plan."
        keywords="NDT ERP implementation, NDT ERP timeline, NDT ERP go-live plan, NDT ERP 30 60 90 day plan, NDT ERP rollout, inspection ERP deployment"
        canonical="https://atlantisndt.com/ndt-erp-implementation-timeline"
        structuredData={structuredData}
        faq={faq}
      />
      <div className="container mx-auto px-6 pt-4">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'NDT ERP', href: '/ndt-erp-solution' }, { label: 'Implementation Timeline' }]} />
      </div>

      <motion.section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex items-center gap-2 text-primary mb-4">
            <CalendarClock className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wide">30/60/90 Plan</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">NDT ERP Implementation Timeline: The 30/60/90-Day Go-Live Plan</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            The exact day-by-day implementation methodology Atlantis NDT has refined across 100+ inspection company rollouts.
            Discovery in 30 days, integration and training in days 31-60, UAT and go-live in days 61-90. Includes the 7-risk register
            every implementation should have pinned to the wall.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button asChild size="lg" className="btn-primary"><Link to="/contact">Schedule Kickoff</Link></Button>
            <Button asChild size="lg" variant="outline"><Link to="/ndt-erp-integration-matrix">See Integration Matrix</Link></Button>
          </div>
        </div>
      </motion.section>

      <section className="py-12">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Why 30/60/90?</h2>
            <p>
              NDT ERP implementation failures almost always share one root cause: a vague plan with no hard weekly milestones. The
              30/60/90 framework forces explicit go/no-go gates at Day 30 (scope locked, sandbox live), Day 60 (integrations green,
              team trained), and Day 90 (UAT passed, production cutover complete). Each 30-day block has a single dominant workstream:
              Discovery + Design in days 1-30, Build + Integrate + Train in days 31-60, UAT + Go-Live + Hypercare in days 61-90.
            </p>
            <p>
              This methodology assumes a typical 10-40 technician inspection company with 1-3 methods (UT/MT/PT being the most common
              combo), standard financial integration (QuickBooks, Xero, Dynamics 365 BC, or a straightforward SAP/Oracle connection),
              and a commitment from the executive sponsor to lock scope. Larger or more complex deployments (50+ techs, SAP S/4HANA
              with custom modules, aerospace NAS 410 plus API 510/570/653 plus ASME Section V reporting, multi-entity) typically
              extend to 4-6 months but follow the same phased structure.
            </p>
            <h2 className="text-3xl font-bold text-foreground mt-10">Phase 1: Days 1-30 &mdash; Discovery, Design, Scope Lock</h2>
            <p>
              The goal of Phase 1 is not to build anything. It is to lock scope. We run a 2-day kickoff workshop with your executive
              sponsor, project manager, and 3-5 SMEs (a Level III, a senior field tech, and 1-2 office admins). By end of week 1 we
              have a current-state process map, a stakeholder list with RACI, and a risk log. Week 2 is a job lifecycle deep-dive:
              we walk a real inspection job from RFQ to invoice and identify every data element captured, every hand-off, and every
              report output. Weeks 3-4 are future-state design, integration architecture, security role modeling, and data migration
              planning. Phase 1 exit criteria: signed scope document, sandbox tenant provisioned, Phase 1 report templates locked,
              risk log reviewed with executive sponsor.
            </p>
            <h2 className="text-3xl font-bold text-foreground mt-10">Phase 2: Days 31-60 &mdash; Build, Integrate, Train</h2>
            <p>
              Phase 2 is the engineering-heavy block. Weeks 5-6: financial and EAM integrations built and unit-tested in sandbox.
              Weeks 7-8: train-the-trainer sessions for 2-3 internal champions per function (field, office, Level III review).
              Weeks 9 (into Phase 3 boundary): champions roll training out to the full team in 3-4 hour role-based sessions.
              Phase 2 exit criteria: all integrations green in sandbox with production-like data volumes; every user logged in
              at least once; report templates UAT-ready.
            </p>
            <h2 className="text-3xl font-bold text-foreground mt-10">Phase 3: Days 61-90 &mdash; UAT, Cutover, Hypercare</h2>
            <p>
              Phase 3 is pass/fail. Weeks 10-11: run 20 real inspection jobs end-to-end through the sandbox, log defects, daily triage.
              Do not skimp. Weeks 12-13: production provisioning, final data migration rehearsal, go/no-go checklist. Cutover is a
              weekend event (Friday evening to Monday morning), followed by a 2-week parallel run. Week 13 (Days 86-90) is hypercare:
              Atlantis Implementation Lead onsite or available in a daily standup. Phase 3 exit criteria: 95% adoption rate on the
              new ERP by end of Day 90, legacy system retired, report cycle time measurably reduced.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Day-by-Day Gantt</h2>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-0 overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="whitespace-nowrap">Phase</TableHead>
                    <TableHead>Workstream</TableHead>
                    <TableHead>Owner</TableHead>
                    <TableHead>Activities &amp; Deliverables</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {timeline.map((r) => (
                    <TableRow key={r.phase + r.workstream}>
                      <TableCell className="font-semibold whitespace-nowrap">{r.phase}</TableCell>
                      <TableCell><Badge variant="outline">{r.workstream}</Badge></TableCell>
                      <TableCell className="text-sm whitespace-nowrap">{r.owner}</TableCell>
                      <TableCell className="text-sm">{r.detail}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <AlertTriangle className="w-7 h-7 text-amber-500" /> Risk Register
          </h2>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-0 overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Risk</TableHead>
                    <TableHead>Impact</TableHead>
                    <TableHead>Mitigation</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {risks.map((r) => (
                    <TableRow key={r.risk}>
                      <TableCell className="font-semibold">{r.risk}</TableCell>
                      <TableCell>
                        <Badge variant={r.impact === 'High' ? 'destructive' : r.impact === 'Medium' ? 'default' : 'outline'}>{r.impact}</Badge>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">{r.mitigation}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Users className="w-7 h-7 text-primary" /> The team you need
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-sm">
              <CardHeader><CardTitle className="text-lg">Client Side</CardTitle></CardHeader>
              <CardContent className="text-muted-foreground text-sm space-y-2">
                <p><strong>Executive Sponsor</strong> (COO / VP Ops): scope authority, risk escalation, 2-4 hrs/week.</p>
                <p><strong>Project Manager:</strong> 20-50% of time for 90 days.</p>
                <p><strong>Level III SME:</strong> report template review, procedure validation, ~25% for 90 days.</p>
                <p><strong>Senior Admin SME:</strong> data migration, invoicing flow, ~25% for 90 days.</p>
                <p><strong>Champions (2-3):</strong> train-the-trainer recipients, ~15% Weeks 6-9.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardHeader><CardTitle className="text-lg">Atlantis Side</CardTitle></CardHeader>
              <CardContent className="text-muted-foreground text-sm space-y-2">
                <p><strong>Implementation Lead:</strong> full-time for the full 90 days.</p>
                <p><strong>Technical Architect:</strong> 50% Weeks 1-8, 25% Weeks 9-13.</p>
                <p><strong>Data Engineer:</strong> 50% Weeks 3-6, part-time remainder.</p>
                <p><strong>Training Lead:</strong> full-time Weeks 5-9.</p>
                <p><strong>Customer Success:</strong> 25% for the full 90 days + post go-live.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to map your 90 days?</h2>
          <p className="text-muted-foreground mb-6">We will build a customized 30/60/90 plan for your team in a 60-minute working session.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg"><Link to="/contact">Book Working Session</Link></Button>
            <Button asChild size="lg" variant="outline"><Link to="/ndt-erp-roi-calculator">Run the ROI Calculator</Link></Button>
          </div>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
