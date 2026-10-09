/**
 * Digital Twin reporting preview — 2026-10-09 sprint (Day 4).
 *
 * An interactive SAMPLE: a made-up storage tank (TK-SAMPLE) with twelve shell CMLs
 * and three inspection campaigns. Click a CML to see its readings, corrosion
 * rates, remaining life and the next-inspection suggestion; switch between the
 * standalone report view and the ERP-linked view (work order, technician
 * certificate, instrument calibration, procedure revision).
 *
 * Every number here is sample data, labelled as such on screen. The arithmetic is
 * the usual thickness-based screening (long-term vs short-term rate, governing
 * rate, remaining life to t-min); it is a demonstration of the report, not an
 * engineering assessment of any asset.
 */
import { useMemo, useRef, useState } from "react";
import { trackEngagement } from "@/lib/enquiry-analytics";
import DemoRequestForm from "@/components/sprint/DemoRequestForm";

import sample from "@/data/dt-sample.json";

type Cml = { id: string; course: number; angle: number; tmin: number; readings: [number, number, number] };
const YEARS = sample.years as [number, number, number];
const NOMINAL = sample.nominal as Record<string, number>;
// Sample data only — not a real asset (src/data/dt-sample.json).
const CMLS = sample.cmls as Cml[];

function assess(c: Cml) {
  const [t0, t1, t2] = c.readings;
  const lt = (t0 - t2) / (YEARS[2] - YEARS[0]);
  const st = (t1 - t2) / (YEARS[2] - YEARS[1]);
  const rate = Math.max(lt, st, 0.001);
  const rl = (t2 - c.tmin) / rate;
  const status = rl < 5 ? "action" : rl < 10 ? "monitor" : "ok";
  const next = Math.min(rl / 2, 10);
  return { lt, st, rate, rl, status, next };
}
const COLOR: Record<string, string> = { ok: "#16a34a", monitor: "#d97706", action: "#dc2626" };
const LABEL: Record<string, string> = { ok: "Acceptable", monitor: "Monitor", action: "Action needed" };

// ERP-linked records for the sample (all illustrative).
const ERP_LINKS = sample.erpLinks as [string, string][];

export default function DigitalTwinPreview({ id = "dt-preview" }: { id?: string }) {
  const [sel, setSel] = useState<string>("C1-240");
  const [view, setView] = useState<"standalone" | "erp">("standalone");
  const [demo, setDemo] = useState<"" | "Standalone digital twin reporting" | "Inside the Atlantis ERP">("");
  const touched = useRef(false);
  const results = useMemo(() => Object.fromEntries(CMLS.map((c) => [c.id, assess(c)])), []);
  const cml = CMLS.find((c) => c.id === sel)!;
  const a = results[sel];

  const interact = (what: string) => {
    if (!touched.current) {
      touched.current = true;
      trackEngagement("digital_twin_preview_interact", { action: what });
    }
  };

  // Tank elevation geometry
  const W = 300, H = 300, x0 = 60, x1 = 240, top = 40, bottom = 270;
  const courseH = (bottom - top) / 4;
  const xFor = (angle: number) => x0 + ((angle + 30) / 360) * (x1 - x0);
  const yFor = (course: number) => bottom - (course - 0.5) * courseH;

  return (
    <section id={id} className="py-16 scroll-mt-24" aria-labelledby={`${id}-h`}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-8">
          <p className="inline-block rounded-full bg-amber-100 text-amber-900 px-4 py-1 text-sm font-semibold mb-3">Sample data — an illustrative tank, not a real asset or client record</p>
          <h2 id={`${id}-h`} className="text-3xl md:text-4xl font-bold mb-3">Try a sample digital twin report</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Click a thickness monitoring location (CML) on the tank shell. The report updates with its readings across three campaigns,
            the corrosion rates, remaining life to minimum thickness and when to look again. Switch views to see the same reading
            linked to its work order, technician certificate, instrument calibration and procedure inside the ERP.
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2 rounded-xl border bg-card p-4">
            <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Sample storage tank shell with twelve CMLs, coloured by status">
              <rect x={x0} y={top} width={x1 - x0} height={bottom - top} fill="#e2e8f0" stroke="#475569" />
              <ellipse cx={(x0 + x1) / 2} cy={top} rx={(x1 - x0) / 2} ry={12} fill="#cbd5e1" stroke="#475569" />
              {[1, 2, 3].map((i) => (
                <line key={i} x1={x0} x2={x1} y1={bottom - i * courseH} y2={bottom - i * courseH} stroke="#94a3b8" strokeDasharray="4 3" />
              ))}
              {[1, 2, 3, 4].map((c) => (
                <text key={c} x={x0 - 8} y={yFor(c) + 4} fontSize="10" textAnchor="end" fill="#475569">Course {c}</text>
              ))}
              {CMLS.map((c) => {
                const r = results[c.id];
                const on = c.id === sel;
                return (
                  <g key={c.id} style={{ cursor: "pointer" }} onClick={() => { setSel(c.id); interact("select_cml"); }}>
                    <circle cx={xFor(c.angle)} cy={yFor(c.course)} r={on ? 11 : 8} fill={COLOR[r.status]} stroke={on ? "#0f172a" : "#fff"} strokeWidth={on ? 3 : 2} />
                    <title>{`${c.id}: ${LABEL[r.status]}`}</title>
                  </g>
                );
              })}
              <text x={W / 2} y={H - 8} fontSize="10" textAnchor="middle" fill="#475569">TK-SAMPLE · shell elevation (0°, 120°, 240°)</text>
            </svg>
            <div className="flex flex-wrap gap-3 justify-center text-xs mt-2">
              {Object.keys(COLOR).map((k) => (
                <span key={k} className="inline-flex items-center gap-1"><span className="inline-block w-3 h-3 rounded-full" style={{ background: COLOR[k] }} />{LABEL[k]}</span>
              ))}
            </div>
            <label className="block mt-4 text-sm font-semibold" htmlFor={`${id}-cml`}>Or pick a CML</label>
            <select id={`${id}-cml`} value={sel} onChange={(e) => { setSel(e.target.value); interact("select_cml"); }} className="w-full mt-1 rounded-md border border-border bg-background px-3 py-2">
              {CMLS.map((c) => <option key={c.id} value={c.id}>{c.id} (course {c.course}, {c.angle}°)</option>)}
            </select>
          </div>
          <div className="lg:col-span-3 rounded-xl border-2 border-primary/30 bg-card p-6" role="status" aria-live="polite">
            <div className="flex flex-wrap gap-2 mb-4" role="tablist" aria-label="Report view">
              {(["standalone", "erp"] as const).map((v) => (
                <button key={v} type="button" role="tab" aria-selected={view === v} onClick={() => { setView(v); interact("toggle_view"); trackEngagement("digital_twin_preview_view", { view: v }); }}
                  className={`rounded-lg px-4 py-2 text-sm font-semibold border-2 ${view === v ? "border-primary bg-primary text-primary-foreground" : "border-primary/40 text-primary"}`}>
                  {v === "standalone" ? "Standalone report view" : "Inside the ERP"}
                </button>
              ))}
            </div>
            <h3 className="text-xl font-bold">CML {cml.id} <span className="text-sm font-normal text-muted-foreground">· course {cml.course}, {cml.angle}° · nominal {NOMINAL[cml.course]} mm · t-min {cml.tmin} mm</span></h3>
            <p className="mt-1 font-semibold" style={{ color: COLOR[a.status] }}>{LABEL[a.status]}</p>
            <table className="w-full text-sm mt-4 border-collapse">
              <caption className="sr-only">Sample thickness readings for CML {cml.id}</caption>
              <thead><tr className="border-b"><th scope="col" className="text-left py-1">Campaign</th><th scope="col" className="text-right py-1">Reading (mm)</th></tr></thead>
              <tbody>
                {YEARS.map((y, i) => (
                  <tr key={y} className="border-b border-border/50"><th scope="row" className="text-left py-1 font-normal">{y} (sample)</th><td className="text-right">{cml.readings[i].toFixed(1)}</td></tr>
                ))}
              </tbody>
            </table>
            <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mt-4 text-sm">
              <div><dt className="text-muted-foreground">Long-term rate</dt><dd className="font-semibold">{a.lt.toFixed(3)} mm/yr</dd></div>
              <div><dt className="text-muted-foreground">Short-term rate</dt><dd className="font-semibold">{a.st.toFixed(3)} mm/yr</dd></div>
              <div><dt className="text-muted-foreground">Remaining life to t-min</dt><dd className="font-semibold">{a.rl > 99 ? "more than 99" : a.rl.toFixed(1)} years</dd></div>
              <div><dt className="text-muted-foreground">Look again within</dt><dd className="font-semibold">{a.next.toFixed(1)} years (half remaining life, capped)</dd></div>
            </dl>
            {view === "erp" ? (
              <div className="mt-5 rounded-lg bg-secondary/40 p-4">
                <p className="font-semibold mb-2">Linked records in the Atlantis ERP (sample)</p>
                <ul className="text-sm space-y-1">
                  {ERP_LINKS.map(([k, v]) => <li key={k}><span className="font-semibold">{k}:</span> {v}</li>)}
                </ul>
                <p className="text-xs text-muted-foreground mt-2">When the twin runs inside the ERP, the reading cannot be issued unless the technician's certificate and the instrument's calibration are in date on the inspection day.</p>
              </div>
            ) : (
              <p className="mt-5 text-sm text-muted-foreground">
                Standalone, the twin takes your readings from spreadsheets or your reporting tool, places each one on the 3D asset and issues the report.
                Your existing systems stay as they are.
              </p>
            )}
            <p className="mt-4 text-xs text-muted-foreground">
              Screening arithmetic on sample data: governing rate is the higher of the long- and short-term rates; remaining life is (latest reading − t-min) ÷ governing rate.
              Your inspector and the applicable code (API 510, 570 or 653) decide the real interval.
            </p>
          </div>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          <button type="button" onClick={() => { setDemo("Standalone digital twin reporting"); trackEngagement("digital_twin_demo_open", { mode: "standalone" }); }} className="rounded-lg bg-primary px-6 py-4 font-semibold text-primary-foreground hover:opacity-90">
            Demo it with my data — standalone
          </button>
          <button type="button" onClick={() => { setDemo("Inside the Atlantis ERP"); trackEngagement("digital_twin_demo_open", { mode: "erp" }); }} className="rounded-lg border-2 border-primary px-6 py-4 font-semibold text-primary hover:bg-primary/10">
            Demo it inside the ERP
          </button>
        </div>
        {demo && (
          <div className="mt-8 max-w-2xl mx-auto">
            <DemoRequestForm
              key={demo}
              formId="dt-preview"
              service="digital-twins"
              businessLine="digital-twins"
              leadType="digital_twin_demo"
              subject="Digital twin demo request (sample report)"
              heading="Request a digital twin demo"
              intro="Tell us roughly which assets you have. We will show the report on an example close to yours."
              submitLabel="Send my demo request"
              choice={{ name: "deployment", label: "How would you use it?", choices: ["Standalone digital twin reporting", "Inside the Atlantis ERP"] }}
              defaultChoice={demo}
            />
          </div>
        )}
      </div>
    </section>
  );
}
