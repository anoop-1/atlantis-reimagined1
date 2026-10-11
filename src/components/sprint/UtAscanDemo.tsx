/**
 * Simplified UT A-scan demo — 2026-10-09 sprint (Day 4); range + gate added 2026-10-12.
 *
 * A straight-beam pulse-echo toy: move the probe along a plate that contains one
 * planar reflector, change gain, range, thickness and material, place a gate, and
 * watch the A-scan. The model (echo times t = 2d / v, amplitudes, gate reading) lives
 * in src/data/ascan-model-2026-10.mjs, which the crawler page also uses for its worked
 * example. Everything else is deliberately idealised (no beam spread, attenuation, near
 * field, dead zone or calibration), and the page says so: this is an educational demo,
 * NOT a validated engineering simulation and not the Practical NDT simulator itself.
 *
 * Used on /practical-ndt (#ut-demo) and /tools/ultrasonic-a-scan-simulator.
 */
import { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { trackEngagement } from "@/lib/enquiry-analytics";
import DemoRequestForm from "@/components/sprint/DemoRequestForm";
import { MATERIALS, PLATE_LEN, FLAW, LIMITS, DEFAULTS, SAMPLES, computeAscan, type MaterialKey } from "@/data/ascan-model-2026-10.mjs";
import ASCAN from "@/data/ascan-simulator-2026-10.json";

export const ASCAN_TOOL_PATH = ASCAN.path;

interface Props {
  id?: string;
  heading?: string;
  /** Show a link to the full-page tool (used on /practical-ndt). */
  fullPageLink?: boolean;
  /** On a tool page: also send the shared GA4 tool_use event with this tool name. */
  toolUse?: string;
}

export default function UtAscanDemo({ id = "ut-demo", heading = "Try a simplified UT A-scan", fullPageLink = false, toolUse }: Props) {
  const [pos, setPos] = useState(DEFAULTS.pos);
  const [gain, setGain] = useState(DEFAULTS.gain);
  const [thk, setThk] = useState(DEFAULTS.thickness);
  const [mat, setMat] = useState<MaterialKey>(DEFAULTS.material);
  const [range, setRange] = useState(DEFAULTS.range);
  const [gateStart, setGateStart] = useState(DEFAULTS.gateStart);
  const [gateWidth, setGateWidth] = useState(DEFAULTS.gateWidth);
  const [gateLevel, setGateLevel] = useState(DEFAULTS.gateLevel);
  const [demo, setDemo] = useState<"" | "Standalone simulator" | "Inside the Atlantis ERP (eLearning portal)">("");
  const touched = useRef(false);

  const interact = (what: string) => {
    if (!touched.current) {
      touched.current = true;
      trackEngagement("ut_demo_interact", { control: what });
      if (toolUse) trackEngagement("tool_use", { tool: toolUse });
    }
  };

  const r = useMemo(
    () => computeAscan({ pos, gain, thickness: thk, material: mat, range, gateStart, gateWidth, gateLevel }),
    [pos, gain, thk, mat, range, gateStart, gateWidth, gateLevel],
  );

  const W = 560, H = 200;
  const trace = useMemo(
    () => r.amps.map((a, i) => `${((i / SAMPLES) * W).toFixed(1)},${(H - (a / 100) * (H - 10)).toFixed(1)}`).join(" "),
    [r.amps],
  );
  const xD = (mm: number) => (mm / range) * W; // screen x for a sound-path depth
  const yA = (pct: number) => H - (pct / 100) * (H - 10);
  const matLabel = MATERIALS.find((m) => m.key === mat)!.label;

  // Cross-section geometry
  const CW = 560, CH = 140, py = 40;
  const ph = (thk / 50) * 80 + 20;
  const xP = (mm: number) => (mm / PLATE_LEN) * CW;
  const ticks = [0, 2, 4, 6, 8, 10];

  return (
    <section id={id} className="py-16 scroll-mt-24" aria-labelledby={`${id}-h`}>
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-8">
          <p className="inline-block rounded-full bg-amber-100 text-amber-900 px-4 py-1 text-sm font-semibold mb-3">Simplified educational demo — not a validated engineering simulation</p>
          <h2 id={`${id}-h`} className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Slide the probe across the plate. Over sound metal you see the backwall echo; over the reflector an earlier echo appears and the
            backwall drops. Set gain and range, place the gate over the echo you want to read, and read the depth (depth = velocity × time ÷ 2).
          </p>
          {fullPageLink && (
            <p className="mt-3 text-base">
              <Link to={ASCAN_TOOL_PATH} className="font-semibold text-primary underline underline-offset-4">
                {ASCAN.practicalHub.fullPageLink}
              </Link>
            </p>
          )}
        </div>
        <div className="rounded-xl border bg-card p-4 md:p-6">
          <svg viewBox={`0 0 ${CW} ${CH}`} className="w-full h-auto" role="img" aria-label={`Plate cross-section, probe at ${pos} millimetres`}>
            <rect x={0} y={py} width={CW} height={ph} fill="#cbd5e1" stroke="#475569" />
            <rect x={xP(FLAW.from)} y={py + (r.flawDepth / thk) * ph - 2} width={xP(FLAW.to) - xP(FLAW.from)} height={4} fill="#dc2626" />
            <rect x={xP(pos) - 10} y={py - 22} width={20} height={20} rx={3} fill="#1d4ed8" />
            <line x1={xP(pos)} x2={xP(pos)} y1={py} y2={py + ph} stroke="#1d4ed8" strokeDasharray="3 3" />
            <text x={4} y={py + ph + 14} fontSize="11" fill="#475569">{matLabel}, {thk} mm — reflector (red) between {FLAW.from} and {FLAW.to} mm</text>
          </svg>
          <svg
            viewBox={`0 0 ${W} ${H + 24}`}
            className="w-full h-auto mt-4 bg-slate-900 rounded-lg"
            role="img"
            aria-label={`A-scan display, range ${range} millimetres; gate from ${r.gate.start} to ${r.gate.end.toFixed(0)} millimetres at ${gateLevel} percent`}
          >
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <line key={i} x1={(i / 10) * W} x2={(i / 10) * W} y1={0} y2={H} stroke="#334155" strokeWidth={1} />
            ))}
            {[0, 1, 2, 3, 4].map((i) => (
              <line key={i} x1={0} x2={W} y1={(i / 4) * H} y2={(i / 4) * H} stroke="#334155" strokeWidth={1} />
            ))}
            <polyline points={trace} fill="none" stroke="#4ade80" strokeWidth={1.5} />
            {/* Gate: a horizontal bar at the threshold, from gate start to gate end */}
            <line x1={xD(r.gate.start)} x2={xD(r.gate.end)} y1={yA(gateLevel)} y2={yA(gateLevel)} stroke={r.gate.alarm ? "#f87171" : "#fbbf24"} strokeWidth={3} />
            <text x={Math.min(xD(r.gate.start) + 2, W - 50)} y={yA(gateLevel) - 5} fontSize="10" fill={r.gate.alarm ? "#fca5a5" : "#fcd34d"}>Gate</text>
            {ticks.map((i) => (
              <text key={i} x={Math.min((i / 10) * W + 2, W - 40)} y={H + 16} fontSize="10" fill="#94a3b8">{((i / 10) * range).toFixed(0)} mm</text>
            ))}
          </svg>
          <p className="mt-2 text-xs text-muted-foreground">
            Horizontal: sound path (depth) in mm; full screen = {range} mm = {r.rangeUs.toFixed(2)} µs in {matLabel.toLowerCase()}. Vertical: amplitude, % of full-screen height.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="space-y-4">
              <label className="block text-sm font-semibold">Probe position: {pos} mm
                <input type="range" min={0} max={PLATE_LEN} value={pos} onChange={(e) => { setPos(+e.target.value); interact("position"); }} className="w-full" />
              </label>
              <label className="block text-sm font-semibold">Gain: {gain > 0 ? "+" : ""}{gain} dB
                <input type="range" min={LIMITS.gain[0]} max={LIMITS.gain[1]} value={gain} onChange={(e) => { setGain(+e.target.value); interact("gain"); }} className="w-full" />
              </label>
              <label className="block text-sm font-semibold">Range (screen width): {range} mm
                <input type="range" min={LIMITS.range[0]} max={LIMITS.range[1]} step={5} value={range} onChange={(e) => { setRange(+e.target.value); interact("range"); }} className="w-full" />
              </label>
              <fieldset className="rounded-lg border border-border p-3 space-y-3">
                <legend className="px-1 text-sm font-semibold">Gate</legend>
                <label className="block text-sm">Start: {gateStart} mm
                  <input type="range" min={LIMITS.gateStart[0]} max={Math.min(LIMITS.gateStart[1], range)} value={Math.min(gateStart, range)} onChange={(e) => { setGateStart(+e.target.value); interact("gate"); }} className="w-full" />
                </label>
                <label className="block text-sm">Width: {gateWidth} mm
                  <input type="range" min={LIMITS.gateWidth[0]} max={LIMITS.gateWidth[1]} value={gateWidth} onChange={(e) => { setGateWidth(+e.target.value); interact("gate"); }} className="w-full" />
                </label>
                <label className="block text-sm">Threshold: {gateLevel}% of screen height
                  <input type="range" min={LIMITS.gateLevel[0]} max={LIMITS.gateLevel[1]} step={5} value={gateLevel} onChange={(e) => { setGateLevel(+e.target.value); interact("gate"); }} className="w-full" />
                </label>
              </fieldset>
              <label className="block text-sm font-semibold">Plate thickness: {thk} mm
                <input type="range" min={LIMITS.thickness[0]} max={LIMITS.thickness[1]} value={thk} onChange={(e) => { setThk(+e.target.value); interact("thickness"); }} className="w-full" />
              </label>
              <label className="block text-sm font-semibold">Material
                <select value={mat} onChange={(e) => { setMat(e.target.value as MaterialKey); interact("material"); }} className="w-full mt-1 rounded-md border border-border bg-background px-3 py-2 font-normal">
                  {MATERIALS.map((m) => <option key={m.key} value={m.key}>{m.label} (longitudinal {m.v} m/s)</option>)}
                </select>
              </label>
            </div>
            <div className="rounded-lg bg-secondary/40 p-4 text-sm space-y-2" role="status" aria-live="polite">
              <p>
                <strong>Gate reading</strong> ({r.gate.start}–{r.gate.end.toFixed(0)} mm, threshold {gateLevel}%):{" "}
                {r.gate.alarm && r.gate.depth != null
                  ? <>echo at {r.gate.depth.toFixed(1)} mm ({r.gate.time!.toFixed(2)} µs), {r.gate.peak.toFixed(0)}% of screen height — above threshold.</>
                  : <>no echo above the threshold{r.gate.peak > 0 ? ` (highest signal ${r.gate.peak.toFixed(0)}%)` : ""}.</>}
              </p>
              {r.overFlaw ? (
                <>
                  <p><strong>Indication</strong> at {r.tFlaw.toFixed(2)} µs → depth {(r.v * r.tFlaw / 2 / 1000).toFixed(1)} mm (reflector set at {r.flawDepth} mm).</p>
                  <p>Backwall echo much weaker: the reflector is shadowing it.</p>
                </>
              ) : (
                <p><strong>Backwall</strong> at {r.tBack.toFixed(2)} µs → thickness {(r.v * r.tBack / 2 / 1000).toFixed(1)} mm.</p>
              )}
              {!r.backwallOnScreen && <p>The backwall is beyond the screen: increase the range to see it.</p>}
              <p>Main echo about {r.mainPeak.toFixed(0)}% of screen height{r.saturated ? " — saturated; reduce gain before reading amplitude or sizing anything" : ""}.</p>
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
