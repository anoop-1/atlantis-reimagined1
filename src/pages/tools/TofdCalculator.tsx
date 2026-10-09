/**
 * TOFD calculator — 2026-10-09 sprint (Day 6, original resource #2).
 * PCS for a target depth, lateral wave / backwall times, tip depth from a measured
 * time and a near-surface dead-zone estimate. Geometry only; no data collection.
 */
import { useMemo, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import ToolArticle from "@/components/sprint/ToolArticle";
import tools from "@/data/sprint-tools.json";
import { trackEngagement } from "@/lib/enquiry-analytics";

const t = tools.tofd;
const IN = 25.4;

export default function TofdCalculator() {
  const [unit, setUnit] = useState<"mm" | "in">("mm");
  const [thk, setThk] = useState(25);
  const [angle, setAngle] = useState(60);
  const [focusFrac, setFocusFrac] = useState(2 / 3);
  const [v, setV] = useState(5920);
  const [freq, setFreq] = useState(5);
  const [cycles, setCycles] = useState(2);
  const [tm, setTm] = useState<number | "">(11);
  const [used, setUsed] = useState(false);
  const f = unit === "mm" ? 1 : IN;
  const fmt = (mm: number) => (unit === "mm" ? `${mm.toFixed(1)} mm` : `${(mm / IN).toFixed(3)} in`);
  const touch = () => { if (!used) { setUsed(true); trackEngagement("tool_use", { tool: "tofd-calculator" }); } };

  const r = useMemo(() => {
    const T = thk * f;
    const th = (angle * Math.PI) / 180;
    if (!(T > 0) || !(angle > 0 && angle < 90) || !(v > 0)) return null;
    const df = T * focusFrac;
    const pcs = 2 * df * Math.tan(th);
    const S = pcs / 2;
    const vmm = v / 1000; // mm per µs
    const tL = (2 * S) / vmm;
    const tBW = (2 * Math.sqrt(S * S + T * T)) / vmm;
    const tp = freq > 0 ? cycles / freq : 0;
    const dzArg = Math.pow((vmm * (tL + tp)) / 2, 2) - S * S;
    const dz = dzArg > 0 ? Math.sqrt(dzArg) : 0;
    let depth: number | null = null;
    let note = "";
    if (tm !== "" && tm > 0) {
      const a = Math.pow((vmm * tm) / 2, 2) - S * S;
      if (tm < tL) note = "Earlier than the lateral wave: check the time reference.";
      else if (tm > tBW) note = "Later than the backwall: outside the wall thickness.";
      depth = a > 0 ? Math.sqrt(a) : 0;
    }
    return { T, df, pcs, tL, tBW, dz, depth, note };
  }, [thk, angle, focusFrac, v, freq, cycles, tm, f]);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebApplication", name: "TOFD Calculator", url: `https://atlantisndt.com${t.path}`, applicationCategory: "UtilitiesApplication", operatingSystem: "Web", isAccessibleForFree: true, publisher: { "@type": "Organization", name: "Atlantis NDT", url: "https://atlantisndt.com" } },
      { "@type": "FAQPage", mainEntity: t.faq.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })) },
    ],
  };
  const input = "w-full rounded-md border border-border bg-background px-3 py-2";

  // Diagram
  const W = 520, H = 170, py = 30, ph = 110;
  const sc = r ? Math.min((W - 40) / (r.pcs * 1.3), 8) : 1;
  const cx = W / 2;

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <Navigation />
      <SEOHead title={t.title} description={t.description} canonical={`https://atlantisndt.com${t.path}`} structuredData={schema} />
      <main className="container mx-auto px-6 py-10 max-w-5xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Tools", href: "/tools" }, { label: "TOFD calculator", href: t.path }]} />
        <h1 className="text-3xl md:text-5xl font-bold mt-6 mb-4">{t.h1}</h1>
        <p className="text-lg text-muted-foreground mb-8">{t.intro}</p>

        <section className="rounded-xl border-2 border-primary/30 bg-card p-6 mb-10" aria-label="Calculator">
          <div className="flex gap-2 mb-4" role="group" aria-label="Units">
            {(["mm", "in"] as const).map((u) => (
              <button key={u} type="button" onClick={() => {
                if (u === unit) return;
                const k = u === "in" ? 1 / IN : IN;
                setThk(+(thk * k).toFixed(u === "in" ? 3 : 1));
                setUnit(u);
              }} className={`px-4 py-1.5 rounded-lg border-2 text-sm font-semibold ${unit === u ? "border-primary bg-primary text-primary-foreground" : "border-primary/40 text-primary"}`}>{u === "mm" ? "Millimetres" : "Inches"}</button>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <label className="text-sm font-semibold">Thickness T ({unit})
              <input type="number" step="any" min={0} value={thk} onChange={(e) => { setThk(+e.target.value); touch(); }} className={input} />
            </label>
            <label className="text-sm font-semibold">Probe angle θ (°)
              <input type="number" step="any" min={1} max={89} value={angle} onChange={(e) => { setAngle(+e.target.value); touch(); }} className={input} />
            </label>
            <label className="text-sm font-semibold">Beam crossing depth
              <select value={focusFrac} onChange={(e) => { setFocusFrac(+e.target.value); touch(); }} className={input}>
                <option value={2 / 3}>Two-thirds of thickness (usual)</option>
                <option value={0.5}>Half thickness</option>
                <option value={0.8}>80% of thickness</option>
              </select>
            </label>
            <label className="text-sm font-semibold">Longitudinal velocity (m/s)
              <input type="number" value={v} onChange={(e) => { setV(+e.target.value); touch(); }} className={input} />
            </label>
            <label className="text-sm font-semibold">Probe frequency (MHz)
              <input type="number" step="any" min={0} value={freq} onChange={(e) => { setFreq(+e.target.value); touch(); }} className={input} />
            </label>
            <label className="text-sm font-semibold">Pulse length (cycles)
              <input type="number" step="any" min={0} value={cycles} onChange={(e) => { setCycles(+e.target.value); touch(); }} className={input} />
            </label>
            <label className="text-sm font-semibold md:col-span-3">Measured tip arrival time (µs, optional)
              <input type="number" step="any" min={0} value={tm} onChange={(e) => { setTm(e.target.value === "" ? "" : +e.target.value); touch(); }} className={input} />
            </label>
          </div>
          {r ? (
            <div className="grid md:grid-cols-2 gap-6 mt-6" role="status" aria-live="polite">
              <dl className="grid grid-cols-2 gap-3 text-sm">
                <div><dt className="text-muted-foreground">Probe centre separation</dt><dd className="text-lg font-bold">{fmt(r.pcs)}</dd></div>
                <div><dt className="text-muted-foreground">Beam crossing depth</dt><dd className="text-lg font-bold">{fmt(r.df)}</dd></div>
                <div><dt className="text-muted-foreground">Lateral wave arrival</dt><dd className="text-lg font-bold">{r.tL.toFixed(2)} µs</dd></div>
                <div><dt className="text-muted-foreground">Backwall arrival</dt><dd className="text-lg font-bold">{r.tBW.toFixed(2)} µs</dd></div>
                <div><dt className="text-muted-foreground">Dead zone (estimate)</dt><dd className="text-lg font-bold">{fmt(r.dz)}</dd></div>
                {r.depth !== null && <div><dt className="text-muted-foreground">Tip depth</dt><dd className="text-lg font-bold">{fmt(r.depth)}</dd></div>}
                {r.note && <p className="col-span-2 text-amber-700">{r.note}</p>}
              </dl>
              <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="TOFD probe arrangement">
                <rect x={0} y={py} width={W} height={ph} fill="#e2e8f0" stroke="#475569" />
                <rect x={cx - (r.pcs / 2) * sc - 12} y={py - 18} width={24} height={16} fill="#1d4ed8" />
                <rect x={cx + (r.pcs / 2) * sc - 12} y={py - 18} width={24} height={16} fill="#1d4ed8" />
                <polyline points={`${cx - (r.pcs / 2) * sc},${py} ${cx},${py + (r.df / r.T) * ph} ${cx + (r.pcs / 2) * sc},${py}`} fill="none" stroke="#1d4ed8" strokeWidth={2} />
                <line x1={cx - (r.pcs / 2) * sc} x2={cx + (r.pcs / 2) * sc} y1={py + 3} y2={py + 3} stroke="#16a34a" strokeDasharray="4 3" />
                <rect x={0} y={py} width={W} height={(r.dz / r.T) * ph} fill="#f59e0b" opacity={0.25} />
                {r.depth !== null && <circle cx={cx} cy={py + Math.min(r.depth / r.T, 1) * ph} r={5} fill="#dc2626" />}
                <text x={6} y={H - 6} fontSize="11" fill="#475569">Lateral wave (green), beam crossing (blue), dead zone (amber), tip (red)</text>
              </svg>
            </div>
          ) : (
            <p className="mt-4 text-sm text-red-600">Enter a thickness and velocity above zero and an angle between 1° and 89°.</p>
          )}
        </section>

        <ToolArticle t={t} />
      </main>
      <ContactDetails />
    </div>
  );
}
