/**
 * Simplified straight-beam UT A-scan model — 2026-10-12 (practical workstream).
 * ─────────────────────────────────────────────────────────────────────────────
 * ONE model for both layers: src/components/sprint/UtAscanDemo.tsx draws it, and
 * scripts/ascan-simulator-2026-10.mjs computes the crawler page's worked example with
 * the same functions, so the numbers on the page are the numbers the tool shows.
 *
 * Pulse-echo, longitudinal wave, one planar reflector parallel to the surface.
 * Echo time t = 2d / v. Deliberately idealised: no beam spread, attenuation, near
 * field, dead zone, couplant, angle beams, mode conversion or calibration (DAC/TCG).
 * An educational demo, not a validated engineering simulation.
 */

export const MATERIALS = [
  { key: 'steel', label: 'Carbon steel', v: 5920 },
  { key: 'ss', label: 'Stainless steel (304)', v: 5790 },
  { key: 'al', label: 'Aluminium', v: 6320 },
];

export const PLATE_LEN = 120; // mm, probe travel
export const FLAW = { from: 45, to: 75, depthFrac: 0.48 }; // reflector span (mm) and depth as a fraction of thickness
export const LIMITS = {
  thickness: [10, 50],
  gain: [-12, 12],
  range: [10, 150],
  gateStart: [0, 140],
  gateWidth: [2, 100],
  gateLevel: [10, 90],
};
export const DEFAULTS = { pos: 20, gain: 0, thickness: 25, material: 'steel', range: 60, gateStart: 5, gateWidth: 15, gateLevel: 40 };
export const SAMPLES = 400;

/** Echo amplitudes in % full-screen height at 0 dB, before gain. */
export const AMP = { pulse: 100, flaw: 70, flawRepeat: 25, shadowedBackwall: 12, backwall: 80, secondBackwall: 40, grass: 2.2 };

const velocityOf = (material) => (MATERIALS.find((m) => m.key === material) || MATERIALS[0]).v;
/** depth (mm) -> echo time (µs) */
export const timeOf = (depthMm, v) => ((2 * depthMm) / v) * 1000;
/** echo time (µs) -> depth (mm) */
export const depthOf = (tUs, v) => (v * tUs) / 2 / 1000;

// Deterministic "grass" so the trace does not flicker between renders.
function grass(i) {
  const x = Math.sin(i * 12.9898) * 43758.5453;
  return (x - Math.floor(x)) * AMP.grass;
}

/**
 * Compute one A-scan. Inputs: { pos, gain, thickness, material, range, gateStart, gateWidth, gateLevel }.
 * Returns the amplitude samples (0-100 % FSH, clipped like a real screen), echo times and the gate reading.
 */
export function computeAscan(input = {}) {
  const s = { ...DEFAULTS, ...input };
  const v = velocityOf(s.material);
  const flawDepth = +(s.thickness * FLAW.depthFrac).toFixed(1);
  const overFlaw = s.pos >= FLAW.from && s.pos <= FLAW.to;
  const g = Math.pow(10, s.gain / 20);
  const rangeUs = timeOf(s.range, v);
  const tBack = timeOf(s.thickness, v);
  const tFlaw = timeOf(flawDepth, v);
  // Echo width scales with the screen so an echo always looks like an echo.
  const width = rangeUs * 0.006;
  const echo = (t, t0, amp) => amp * Math.exp(-Math.pow((t - t0) / width, 2));
  const amps = [];
  for (let i = 0; i <= SAMPLES; i++) {
    const t = (i / SAMPLES) * rangeUs;
    let a = echo(t, 0, AMP.pulse); // initial pulse (not amplified, as on most screens it saturates anyway)
    if (overFlaw) {
      a += echo(t, tFlaw, AMP.flaw * g);
      a += echo(t, 2 * tFlaw, AMP.flawRepeat * g);
      a += echo(t, tBack, AMP.shadowedBackwall * g);
    } else {
      a += echo(t, tBack, AMP.backwall * g);
      a += echo(t, 2 * tBack, AMP.secondBackwall * g);
    }
    a += grass(i) * g;
    amps.push(Math.min(a, 100));
  }
  // Gate: start and width in mm of sound path; reading = highest sample inside the gate.
  const gStart = Math.max(0, Math.min(s.gateStart, s.range));
  const gEnd = Math.max(gStart, Math.min(s.gateStart + s.gateWidth, s.range));
  let peak = 0, peakIdx = -1;
  for (let i = 0; i <= SAMPLES; i++) {
    const d = (i / SAMPLES) * s.range;
    if (d < gStart || d > gEnd) continue;
    if (amps[i] > peak) { peak = amps[i]; peakIdx = i; }
  }
  const gateDepth = peakIdx >= 0 ? (peakIdx / SAMPLES) * s.range : null;
  const alarm = peak >= s.gateLevel;
  const mainPeak = overFlaw ? Math.min(AMP.flaw * g, 100) : Math.min(AMP.backwall * g, 100);
  // (shadowed backwall height, for the worked example)
  const backwallPeak = Math.min((overFlaw ? AMP.shadowedBackwall : AMP.backwall) * g, 100);
  return {
    v, flawDepth, overFlaw, rangeUs, tBack, tFlaw, amps,
    backwallOnScreen: s.thickness <= s.range,
    mainPeak, backwallPeak, saturated: mainPeak >= 100,
    gate: { start: gStart, end: gEnd, level: s.gateLevel, peak, depth: gateDepth, time: gateDepth == null ? null : timeOf(gateDepth, v), alarm },
  };
}

/**
 * Worked example for the tool page, computed with the same model the tool runs
 * (React and crawler both render these strings, so they cannot drift from the tool).
 */
export function workedExample() {
  const base = { material: 'steel', thickness: 25, gain: 0, range: 60, gateStart: 5, gateWidth: 15, gateLevel: 40 };
  const sound = computeAscan({ ...base, pos: 20 });
  const flaw = computeAscan({ ...base, pos: 60 });
  const lower = computeAscan({ ...base, pos: 60, gain: -6 });
  const thick = computeAscan({ ...base, pos: 60, thickness: 50 });
  const moved = computeAscan({ ...base, pos: 60, thickness: 50, gateStart: 15, gateWidth: 20 });
  // The sentences below describe these states; fail loudly if the model ever disagrees.
  if (sound.gate.alarm || !flaw.gate.alarm || lower.gate.alarm || thick.gate.alarm || !moved.gate.alarm) {
    throw new Error('ascan-model: worked example no longer matches the model (gate alarm states changed)');
  }
  const v = sound.v.toLocaleString('en-US');
  const pct = (x) => Math.round(x);
  return {
    setup: `Carbon steel (${v} m/s), 25 mm plate, 0 dB gain, range ${base.range} mm (${sound.rangeUs.toFixed(2)} µs), gate from ${base.gateStart} to ${base.gateStart + base.gateWidth} mm at ${base.gateLevel}% of screen height.`,
    steps: [
      `Probe at 20 mm, over sound metal: the backwall echo sits at ${sound.tBack.toFixed(2)} µs, which is ${(sound.v * sound.tBack / 2000).toFixed(1)} mm. It is outside the gate, so the gate reads no echo above the threshold.`,
      `Probe at 60 mm, over the reflector: an echo appears at ${flaw.tFlaw.toFixed(2)} µs, which is ${flaw.gate.depth.toFixed(1)} mm deep, at about ${pct(flaw.gate.peak)}% of screen height, and the gate alarms. The backwall drops to about ${pct(flaw.backwallPeak)}% because the reflector shadows it.`,
      `Reduce gain by 6 dB: the same echo falls to about ${pct(lower.gate.peak)}%, below the ${base.gateLevel}% threshold, so the gate no longer alarms. Gain and gate threshold are always read together.`,
      `Increase the thickness to 50 mm: the reflector is now ${thick.flawDepth.toFixed(1)} mm deep, outside a ${base.gateStart}–${base.gateStart + base.gateWidth} mm gate, so the gate is silent. Move the gate to 15–35 mm and the reading returns: ${moved.gate.depth.toFixed(1)} mm.`,
    ],
    check: `Check by hand: depth = velocity × time ÷ 2 = ${v} m/s × ${flaw.tFlaw.toFixed(2)} µs ÷ 2 = ${(flaw.v * flaw.tFlaw / 2000).toFixed(1)} mm.`,
  };
}
