// /ndt-erp-roi-calculator — rebuilt 2026-09-29 as an HOURS-based, ungated
// time-savings calculator. Results show immediately; the enquiry form is
// optional and sits after the results.
//
// Removed from the previous version (fabricated-claims rule): a hard-coded 60%
// "median across 40+ deployments" report-time reduction, a 50% admin reduction
// attributed to customers, "100+ inspection company deployments", and
// pre-filled dollar rates. Every default below is an EXAMPLE ASSUMPTION the
// visitor is told to overwrite; the labour-rate field starts empty and money is
// only shown when the visitor supplies their own rate. No Atlantis price.
// Static copy (method, worked example, FAQ) lives in
// src/data/software-assets/extras.json, shared with the prerender layer.
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Calculator, Clock } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import EnquiryCaptureForm from "@/components/EnquiryCaptureForm";
import RichHtml from "@/components/software-assets/RichHtml";
import extras from "@/data/software-assets/extras.json";

type Field = { key: string; label: string; hint?: string; step?: number; suffix?: string };

const DEFAULTS: Record<string, number | ""> = {
  technicians: 12,
  reportsPerMonth: 160,
  minutesNow: 45,
  minutesExpected: 20,
  certHours: 10,
  certShare: 60,
  calHours: 6,
  calShare: 50,
  dispatchHours: 20,
  dispatchShare: 40,
  invoiceHours: 12,
  invoiceShare: 50,
  lagNow: 9,
  lagExpected: 3,
  fteHours: 1800,
  rate: "",
};

const num = (v: number | "") => (v === "" || !isFinite(Number(v)) ? 0 : Math.max(0, Number(v)));
const fmt = (n: number, d = 1) => n.toLocaleString("en-US", { maximumFractionDigits: d, minimumFractionDigits: 0 });

export default function NdtErpRoiCalculator() {
  const r = extras.roi;
  const [v, setV] = useState<Record<string, number | "">>(DEFAULTS);
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setV((prev) => ({ ...prev, [k]: e.target.value === "" ? "" : Number(e.target.value) }));

  const res = useMemo(() => {
    const share = (k: string) => Math.min(100, num(v[k])) / 100;
    const reports = (num(v.reportsPerMonth) * Math.max(0, num(v.minutesNow) - num(v.minutesExpected))) / 60;
    const cert = num(v.certHours) * share("certShare");
    const cal = num(v.calHours) * share("calShare");
    const dispatch = num(v.dispatchHours) * share("dispatchShare");
    const invoice = num(v.invoiceHours) * share("invoiceShare");
    const month = reports + cert + cal + dispatch + invoice;
    const year = month * 12;
    const fte = num(v.fteHours) > 0 ? year / num(v.fteHours) : 0;
    const perTech = num(v.technicians) > 0 ? month / num(v.technicians) : 0;
    const lag = Math.max(0, num(v.lagNow) - num(v.lagExpected));
    const rate = v.rate === "" ? null : num(v.rate);
    return { reports, cert, cal, dispatch, invoice, month, year, fte, perTech, lag, rate };
  }, [v]);

  const subject =
    `Demo tailored to my numbers: ${num(v.technicians)} technicians, ${num(v.reportsPerMonth)} reports/month, ` +
    `${num(v.minutesNow)} min/report now; estimated ${fmt(res.month)} h/month recoverable ` +
    `(reports ${fmt(res.reports)}, certs ${fmt(res.cert)}, calibration ${fmt(res.cal)}, dispatch/timesheets ${fmt(res.dispatch)}, invoicing ${fmt(res.invoice)}); invoicing lag ${num(v.lagNow)}→${num(v.lagExpected)} days`;
  const cta = `/contact?service=erp&subject=${encodeURIComponent(subject)}`;

  const input = (f: Field) => (
    <label key={f.key} className="block text-sm">
      <span className="font-medium">{f.label}</span>
      {f.hint && <span className="block text-xs text-muted-foreground">{f.hint}</span>}
      <span className="mt-1 flex items-center gap-2">
        <input
          type="number"
          inputMode="decimal"
          min={0}
          step={f.step ?? 1}
          value={v[f.key]}
          onChange={set(f.key)}
          className="w-full rounded-md border px-3 py-2"
        />
        {f.suffix && <span className="text-xs text-muted-foreground whitespace-nowrap">{f.suffix}</span>}
      </span>
    </label>
  );

  const area = (title: string, a: Field, b: Field) => (
    <fieldset className="rounded-lg border p-4">
      <legend className="px-1 text-sm font-semibold">{title}</legend>
      <div className="grid sm:grid-cols-2 gap-3">{[input(a), input(b)]}</div>
    </fieldset>
  );

  const row = (label: string, h: number) => (
    <div className="flex items-center justify-between border-b py-2 text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-semibold">{fmt(h)} h / month</span>
    </div>
  );

  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title={r.title}
        description={r.description}
        canonical="https://atlantisndt.com/ndt-erp-roi-calculator"
        keywords="NDT software ROI, NDT software time savings, inspection software hours saved, NDT ERP calculator"
        faq={r.faqs.map((f) => ({ question: f.q, answer: f.a }))}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "ERP", href: "/erp" }, { label: "Time-savings calculator", href: "/ndt-erp-roi-calculator" }]} />

      <section className="py-12 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Calculator className="w-4 h-4" /> Free calculator, no email needed
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{r.h1}</h1>
          <p className="text-lg text-muted-foreground">{r.lead}</p>
        </div>
      </section>

      <section className="container mx-auto px-6 max-w-6xl py-10">
        <p className="mb-6 rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm text-amber-900">
          The starting values are <strong>example assumptions</strong> so the calculator shows a result. They are not benchmarks or results from Atlantis customers. Replace each one with your own figures.
        </p>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-4">
            <fieldset className="rounded-lg border p-4">
              <legend className="px-1 text-sm font-semibold">Your company</legend>
              <div className="grid sm:grid-cols-2 gap-3">
                {input({ key: "technicians", label: "Field technicians" })}
                {input({ key: "reportsPerMonth", label: "NDT reports issued per month", hint: "All methods, whole company" })}
              </div>
            </fieldset>
            <fieldset className="rounded-lg border p-4">
              <legend className="px-1 text-sm font-semibold">Report production</legend>
              <div className="grid sm:grid-cols-2 gap-3">
                {input({ key: "minutesNow", label: "Office minutes per report now", hint: "Typing up, formatting, checking, correcting, chasing signatures", suffix: "min" })}
                {input({ key: "minutesExpected", label: "Minutes per report you expect with field capture", hint: "Your estimate", suffix: "min" })}
              </div>
            </fieldset>
            {area(
              "Certification tracking",
              { key: "certHours", label: "Hours per month now", hint: "Expiries, vision tests, cert copies for clients", suffix: "h" },
              { key: "certShare", label: "Share you expect to automate", suffix: "%" },
            )}
            {area(
              "Calibration tracking",
              { key: "calHours", label: "Hours per month now", hint: "Instrument and probe records, due dates, certificates", suffix: "h" },
              { key: "calShare", label: "Share you expect to automate", suffix: "%" },
            )}
            {area(
              "Dispatch and timesheets",
              { key: "dispatchHours", label: "Hours per month now", hint: "Crew assignment, availability, timesheet collection", suffix: "h" },
              { key: "dispatchShare", label: "Share you expect to automate", suffix: "%" },
            )}
            {area(
              "Invoicing preparation",
              { key: "invoiceHours", label: "Hours per month now", hint: "Matching timesheets, POs and job records", suffix: "h" },
              { key: "invoiceShare", label: "Share you expect to automate", suffix: "%" },
            )}
            <fieldset className="rounded-lg border p-4">
              <legend className="px-1 text-sm font-semibold">Optional</legend>
              <div className="grid sm:grid-cols-2 gap-3">
                {input({ key: "lagNow", label: "Days from job completion to invoice now", suffix: "days" })}
                {input({ key: "lagExpected", label: "Days you expect after", suffix: "days" })}
                {input({ key: "fteHours", label: "Working hours per full-time employee per year", hint: "Example assumption", suffix: "h" })}
                {input({ key: "rate", label: "Your loaded labour rate per hour (optional)", hint: "Leave empty to see hours only. Your own currency.", step: 0.01 })}
              </div>
            </fieldset>
          </div>

          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-24 rounded-xl border-2 border-primary/20 bg-white p-6 shadow-sm" aria-live="polite">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" /> Your estimate
              </h2>
              {row("Report production", res.reports)}
              {row("Certification tracking", res.cert)}
              {row("Calibration tracking", res.cal)}
              {row("Dispatch and timesheets", res.dispatch)}
              {row("Invoicing preparation", res.invoice)}
              <div className="mt-4 rounded-lg bg-primary/5 p-4">
                <div className="text-sm text-muted-foreground">Hours recovered</div>
                <div className="text-3xl font-bold text-primary">{fmt(res.month)} h / month</div>
                <div className="text-sm mt-1">
                  {fmt(res.year, 0)} h / year · {fmt(res.fte, 2)} full-time equivalents · {fmt(res.perTech)} h per technician per month
                </div>
                {res.lag > 0 && <div className="text-sm mt-1">Invoicing {fmt(res.lag, 0)} days sooner after each job</div>}
                {res.rate !== null && res.rate > 0 && (
                  <div className="text-sm mt-2">
                    Value of those hours at your rate: <strong>{fmt(res.month * res.rate, 0)}</strong> per month, <strong>{fmt(res.year * res.rate, 0)}</strong> per year (your currency)
                  </div>
                )}
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Estimate from your inputs only. Atlantis pricing is quoted on request and is not included.
              </p>
              <Link to={cta} data-cta-variant="roi-calculator-result" className="mt-4 block w-full rounded-lg bg-primary px-6 py-3 text-center font-semibold text-primary-foreground">
                Get a demo tailored to these numbers
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 max-w-4xl py-10">
        <RichHtml html={r.staticHtml} />
      </section>

      <EnquiryCaptureForm variant="erp" />
      <ContactDetails />
    </div>
  );
}
