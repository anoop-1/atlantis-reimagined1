/**
 * Simplified UT A-scan demo — 2026-10-09 sprint (Day 4).
 *
 * A straight-beam pulse-echo toy: move the probe along a plate that contains one
 * planar reflector, change gain, thickness and material, and watch the A-scan.
 * Echo times use t = 2d / v. Everything else is deliberately idealised (no beam
 * spread, attenuation, near field, dead zone or calibration), and the page says so:
 * this is an educational demo, NOT a validated engineering simulation and not the
 * Practical NDT simulator itself.
 */
import { useMemo, useRef, useState } from "react";
import { trackEngagement } from "@/lib/enquiry-analytics";
import DemoRequestForm from "@/components/sprint/DemoRequestForm";

const MATERIALS = [
  { key: "steel", label: "Carbon steel", v: 5920 },
  { key: "ss", label: "Stainless steel (304)", v: 5790 },
  { key: "al", label: "Aluminium", v: 6320 },
] as const;

const PLATE_LEN = 120; // mm
const FLAW = { from: 45, to: 75, depthFrac: 0.48 };

// Deterministic "grass" so the trace does not flicker between renders.
function grass(i: number) {
  const x = Math.sin(i * 12.9898) * 43758.5453;
  return (x - Math.floor(x)) * 2.2;
}

export default function UtAscanDemo({ id = "ut-demo" }: { id?: string }) {
  const [pos, setPos] = useState(20);
  const [gain, setGain] = useState(0);
  const [thk, setThk] = useState(25);
  const [mat, setMat] = useState<(typeof MATERIALS)[number]["key"]>("steel");
  const [demo, setDemo] = useState<"" | "Standalone simulator" | "Inside the Atlantis ERP (eLearning portal)">("");
  const touched = useRef(false);
  const v = MATERIALS.find((m) => m.key === mat)!.v;
  const flawDepth = +(thk * FLAW.depthFrac).toFixed(1);
  const overFlaw = pos >= FLAW.from && pos <= FLAW.to;

  const interact = (what: string) => {
    if (!touched.current) {
      touched.current = true;
      trackEngagement("ut_demo_interact", { control: what });
    }
  };

  // time in microseconds: 2 * d(mm) / v(m/s) * 1e3
  const tBack = (2 * thk) / v * 1000;
  const tFlaw = (2 * flawDepth) / v * 1000;
  const range = Math.max(tBack * 2.3, 10);

  const trace = useMemo(() => {
    const g = Math.pow(10, gain / 20);
    const pts: string[] = [];
    const N = 400;
    const W = 560, H = 200;
    const echo = (t: number, t0: number, amp: number) => amp * Math.exp(-Math.pow((t - t0) / (range * 0.006), 2));
    for (let i = 0; i <= N; i++) {
      const t = (i / N) * range;
      let a = echo(t, 0, 100); // initial pulse
      if (overFlaw) {
        a += echo(t, tFlaw, 70 * g);
        a += echo(t, 2 * tFlaw, 25 * g); // flaw repeat
        a += echo(t, tBack, 12 * g); // shadowed backwall
      } else {
        a += echo(t, tBack, 80 * g);
        a += echo(t, 2 * tBack, 40 * g); // second backwall
      }
      a += grass(i) * g;
      const y = H - (Math.min(a, 100) / 100) * (H - 10);
      pts.push(`${((i / N) * W).toFixed(1)},${y.toFixed(1)}`);
    }
    return pts.join(" ");
  }, [gain, overFlaw, tBack, tFlaw, range]);

  const peak = overFlaw ? Math.min(70 * Math.pow(10, gain / 20), 100) : Math.min(80 * Math.pow(10, gain / 20), 100);
  const W = 560, H = 200;
  const xT = (t: number) => (t / range) * W;

  // Cross-section geometry
  const CW = 560, CH = 140, py = 40;
  const ph = (thk / 50) * 80 + 20;
  const xP = (mm: number) => (mm / PLATE_LEN) * CW;

  return (
    <section id={id} className="py-16 scroll-mt-24" aria-labelledby={`${id}-h`}>
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-8">
          <p className="inline-block rounded-full bg-amber-100 text-amber-900 px-4 py-1 text-sm font-semibold mb-3">Simplified educational demo — not a validated engineering simulation</p>
          <h2 id={`${id}-h`} className="text-3xl md:text-4xl font-bold mb-3">Try a simplified UT A-scan</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Slide the probe across the plate. Over sound metal you see the backwall echo; over the reflector an earlier echo appears and the
            backwall drops. Change gain, thickness or material and read the depth from the echo time (depth = velocity × time ÷ 2).
          </p>
        </div>
        <div className="rounded-xl border bg-card p-4 md:p-6">
          <svg viewBox={`0 0 ${CW} ${CH}`} className="w-full h-auto" role="img" aria-label={`Plate cross-section, probe at ${pos} millimetres`}>
            <rect x={0} y={py} width={CW} height={ph} fill="#cbd5e1" stroke="#475569" />
            <rect x={xP(FLAW.from)} y={py + (flawDepth / thk) * ph - 2} width={xP(FLAW.to) - xP(FLAW.from)} height={4} fill="#dc2626" />
            <rect x={xP(pos) - 10} y={py - 22} width={20} height={20} rx={3} fill="#1d4ed8" />
            <line x1={xP(pos)} x2={xP(pos)} y1={py} y2={py + ph} stroke="#1d4ed8" strokeDasharray="3 3" />
            <text x={4} y={py + ph + 14} fontSize="11" fill="#475569">{MATERIALS.find((m) => m.key === mat)!.label}, {thk} mm — reflector (red) between {FLAW.from} and {FLAW.to} mm</text>
          </svg>
          <svg viewBox={`0 0 ${W} ${H + 24}`} className="w-full h-auto mt-4 bg-slate-900 rounded-lg" role="img" aria-label="A-scan display">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <line key={i} x1={(i / 10) * W} x2={(i / 10) * W} y1={0} y2={H} stroke="#334155" strokeWidth={1} />
            ))}
            {[0, 1, 2, 3, 4].map((i) => (
              <line key={i} x1={0} x2={W} y1={(i / 4) * H} y2={(i / 4) * H} stroke="#334155" strokeWidth={1} />
            ))}
            <polyline points={trace} fill="none" stroke="#4ade80" strokeWidth={1.5} />
            {[0, 2, 4, 6, 8, 10].map((i) => (
              <text key={i} x={Math.min((i / 10) * W + 2, W - 40)} y={H + 16} fontSize="10" fill="#94a3b8">{((i / 10) * range).toFixed(1)} µs</text>
            ))}
            <line x1={xT(overFlaw ? tFlaw : tBack)} x2={xT(overFlaw ? tFlaw : tBack)} y1={0} y2={H} stroke="#facc15" strokeDasharray="4 3" />
          </svg>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="space-y-4">
              <label className="block text-sm font-semibold">Probe position: {pos} mm
                <input type="range" min={0} max={PLATE_LEN} value={pos} onChange={(e) => { setPos(+e.target.value); interact("position"); }} className="w-full" />
              </label>
              <label className="block text-sm font-semibold">Gain: {gain > 0 ? "+" : ""}{gain} dB
                <input type="range" min={-12} max={12} value={gain} onChange={(e) => { setGain(+e.target.value); interact("gain"); }} className="w-full" />
              </label>
              <label className="block text-sm font-semibold">Plate thickness: {thk} mm
                <input type="range" min={10} max={50} value={thk} onChange={(e) => { setThk(+e.target.value); interact("thickness"); }} className="w-full" />
              </label>
              <label className="block text-sm font-semibold">Material
                <select value={mat} onChange={(e) => { setMat(e.target.value as typeof mat); interact("material"); }} className="w-full mt-1 rounded-md border border-border bg-background px-3 py-2 font-normal">
                  {MATERIALS.map((m) => <option key={m.key} value={m.key}>{m.label} (longitudinal {m.v} m/s)</option>)}
                </select>
              </label>
            </div>
            <div className="rounded-lg bg-secondary/40 p-4 text-sm space-y-2" role="status" aria-live="polite">
              {overFlaw ? (
                <>
                  <p><strong>Indication</strong> at {tFlaw.toFixed(2)} µs → depth {(v * tFlaw / 2 / 1000).toFixed(1)} mm (reflector set at {flawDepth} mm).</p>
                  <p>Backwall echo much weaker: the reflector is shadowing it.</p>
                </>
              ) : (
                <p><strong>Backwall</strong> at {tBack.toFixed(2)} µs → thickness {(v * tBack / 2 / 1000).toFixed(1)} mm.</p>
              )}
              <p>Peak signal about {peak.toFixed(0)}% of screen height{peak >= 100 ? " — saturated; reduce gain before sizing anything" : ""}.</p>
              <p className="text-xs text-muted-foreground pt-2">
                Idealised straight-beam geometry: no beam spread, attenuation, near-field, dead zone, couplant or calibration effects.
                It shows the principle, not what a real instrument on a real part will display. The Practical NDT simulator and real
                training on calibrated equipment are where skills are built.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          <button type="button" onClick={() => { setDemo("Standalone simulator"); trackEngagement("ndt_simulation_demo_open", { mode: "standalone" }); }} className="rounded-lg bg-primary px-6 py-4 font-semibold text-primary-foreground hover:opacity-90">
            Demo the full simulator — standalone
          </button>
          <button type="button" onClick={() => { setDemo("Inside the Atlantis ERP (eLearning portal)"); trackEngagement("ndt_simulation_demo_open", { mode: "erp" }); }} className="rounded-lg border-2 border-primary px-6 py-4 font-semibold text-primary hover:bg-primary/10">
            Demo it inside the ERP
          </button>
        </div>
        {demo && (
          <div className="mt-8 max-w-2xl mx-auto">
            <DemoRequestForm
              key={demo}
              formId="ut-demo"
              service="practical-ndt"
              businessLine="practical-ndt"
              leadType="ndt_simulation_demo"
              subject="Practical NDT simulator demo request (A-scan demo)"
              heading="Request a Practical NDT simulator demo"
              intro="Tell us who would use it (trainees, a training centre, an inspection team) and which methods matter most."
              submitLabel="Send my demo request"
              choice={{ name: "deployment", label: "How would you use it?", choices: ["Standalone simulator", "Inside the Atlantis ERP (eLearning portal)"] }}
              defaultChoice={demo}
            />
          </div>
        )}
      </div>
    </section>
  );
}
