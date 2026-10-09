/**
 * UT angle beam calculator — 2026-10-09 sprint (Day 6, original resource #1).
 * Pure trigonometry for flat plate: skip distances, leg sound paths, indication
 * depth / surface distance / leg, and a Snell's law helper. No data collection.
 */
import { useMemo, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import ToolArticle from "@/components/sprint/ToolArticle";
import tools from "@/data/sprint-tools.json";
import { trackEngagement } from "@/lib/enquiry-analytics";

const t = tools.angle;
const IN = 25.4;

export default function UtAngleBeamCalculator() {
  const [unit, setUnit] = useState<"mm" | "in">("mm");
  const [thk, setThk] = useState(25);
  const [angle, setAngle] = useState(60);
  const [sp, setSp] = useState<number | "">(70);
  const [v1, setV1] = useState(2730);
  const [v2, setV2] = useState(3240);
  const [inc, setInc] = useState(46.9);
  const [used, setUsed] = useState(false);
  const f = unit === "mm" ? 1 : IN; // input unit -> mm
  const fmt = (mm: number) => (unit === "mm" ? `${mm.toFixed(1)} mm` : `${(mm / IN).toFixed(3)} in`);

  const r = useMemo(() => {
    const T = thk * f;
    const th = (angle * Math.PI) / 180;
    if (!(T > 0) || !(angle > 0 && angle < 90)) return null;
    const hs = T * Math.tan(th), fs = 2 * hs, leg = T / Math.cos(th);
    let ind: null | { depth: number; sd: number; leg: number } = null;
    if (sp !== "" && sp > 0) {
      const S = sp * f;
      const x = S * Math.cos(th);
      const n = Math.floor(x / T);
      const rem = x - n * T;
      ind = { depth: n % 2 === 0 ? rem : T - rem, sd: S * Math.sin(th), leg: n + 1 };
    }
    return { T, hs, fs, leg, ind };
  }, [thk, angle, sp, f]);

  const snell = useMemo(() => {
    const s = Math.sin((inc * Math.PI) / 180) * (v2 / v1);
    return s >= 1 ? null : (Math.asin(s) * 180) / Math.PI;
  }, [inc, v1, v2]);

  const touch = () => { if (!used) { setUsed(true); trackEngagement("tool_use", { tool: "ut-angle-beam-calculator" }); } };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebApplication", name: "UT Angle Beam Calculator", url: `https://atlantisndt.com${t.path}`, applicationCategory: "UtilitiesApplication", operatingSystem: "Web", isAccessibleForFree: true, publisher: { "@type": "Organization", name: "Atlantis NDT", url: "https://atlantisndt.com" } },
      { "@type": "FAQPage", mainEntity: t.faq.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })) },
    ],
  };

  const input = "w-full rounded-md border border-border bg-background px-3 py-2";
  // Diagram (two legs)
  const W = 520, H = 150, py = 20, ph = 90;
  const scale = r ? Math.min(W / (r.fs * 1.15), 6) : 1;

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <Navigation />
      <SEOHead title={t.title} description={t.description} canonical={`https://atlantisndt.com${t.path}`} structuredData={schema} />
      <main className="container mx-auto px-6 py-10 max-w-5xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Tools", href: "/tools" }, { label: "UT angle beam calculator", href: t.path }]} />
        <h1 className="text-3xl md:text-5xl font-bold mt-6 mb-4">{t.h1}</h1>
        <p className="text-lg text-muted-foreground mb-8">{t.intro}</p>

        <section className="rounded-xl border-2 border-primary/30 bg-card p-6 mb-10" aria-label="Calculator">
          <div className="flex gap-2 mb-4" role="group" aria-label="Units">
            {(["mm", "in"] as const).map((u) => (
              <button key={u} type="button" onClick={() => {
                if (u === unit) return;
                const k = u === "in" ? 1 / IN : IN;
                setThk(+(thk * k).toFixed(u === "in" ? 3 : 1));
                if (sp !== "") setSp(+(sp * k).toFixed(u === "in" ? 3 : 1));
                setUnit(u);
              }} className={`px-4 py-1.5 rounded-lg border-2 text-sm font-semibold ${unit === u ? "border-primary bg-primary text-primary-foreground" : "border-primary/40 text-primary"}`}>{u === "mm" ? "Millimetres" : "Inches"}</button>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <label className="text-sm font-semibold">Thickness T ({unit})
              <input type="number" step="any" min={0} value={thk} onChange={(e) => { setThk(+e.target.value); touch(); }} className={input} />
            </label>
            <label className="text-sm font-semibold">Refracted angle θ (°)
              <input type="number" step="any" min={1} max={89} value={angle} onChange={(e) => { setAngle(+e.target.value); touch(); }} className={input} />
            </label>
            <label className="text-sm font-semibold">Indication sound path ({unit}, optional)
              <input type="number" step="any" min={0} value={sp} onChange={(e) => { setSp(e.target.value === "" ? "" : +e.target.value); touch(); }} className={input} />
            </label>
          </div>
          {r ? (
            <div className="grid md:grid-cols-2 gap-6 mt-6" role="status" aria-live="polite">
              <dl className="grid grid-cols-2 gap-3 text-sm">
                <div><dt className="text-muted-foreground">Half skip</dt><dd className="text-lg font-bold">{fmt(r.hs)}</dd></div>
                <div><dt className="text-muted-foreground">Full skip</dt><dd className="text-lg font-bold">{fmt(r.fs)}</dd></div>
                <div><dt className="text-muted-foreground">Sound path, one leg</dt><dd className="text-lg font-bold">{fmt(r.leg)}</dd></div>
                <div><dt className="text-muted-foreground">Sound path, full V</dt><dd className="text-lg font-bold">{fmt(2 * r.leg)}</dd></div>
                {r.ind && (<>
                  <div><dt className="text-muted-foreground">Indication depth</dt><dd className="text-lg font-bold">{fmt(r.ind.depth)}</dd></div>
                  <div><dt className="text-muted-foreground">Surface distance from BIP</dt><dd className="text-lg font-bold">{fmt(r.ind.sd)}</dd></div>
                  <div className="col-span-2"><dt className="text-muted-foreground">Found on</dt><dd className="font-bold">Leg {r.ind.leg}{r.ind.leg > 2 ? " (beyond full skip: check the geometry)" : ""}</dd></div>
                </>)}
              </dl>
              <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Beam path diagram">
                <rect x={0} y={py} width={W} height={ph} fill="#e2e8f0" stroke="#475569" />
                <polyline points={`10,${py} ${10 + r.hs * scale},${py + ph} ${10 + r.fs * scale},${py}`} fill="none" stroke="#1d4ed8" strokeWidth={2} />
                {r.ind && (
                  <circle cx={10 + r.ind.sd * scale} cy={py + (r.ind.depth / r.T) * ph} r={5} fill="#dc2626" />
                )}
                <text x={10} y={H - 8} fontSize="11" fill="#475569">Beam path (blue) and indication (red), not to scale vertically</text>
              </svg>
            </div>
          ) : (
            <p className="mt-4 text-sm text-red-600">Enter a thickness above zero and an angle between 1° and 89°.</p>
          )}
          <hr className="my-6" />
          <h2 className="text-xl font-bold mb-3">Snell's law helper</h2>
          <div className="grid md:grid-cols-4 gap-4 items-end">
            <label className="text-sm font-semibold">Wedge velocity V₁ (m/s)
              <input type="number" value={v1} onChange={(e) => { setV1(+e.target.value); touch(); }} className={input} />
            </label>
            <label className="text-sm font-semibold">Incident angle θ₁ (°)
              <input type="number" step="any" value={inc} onChange={(e) => { setInc(+e.target.value); touch(); }} className={input} />
            </label>
            <label className="text-sm font-semibold">Shear velocity in part V₂ (m/s)
              <input type="number" value={v2} onChange={(e) => { setV2(+e.target.value); touch(); }} className={input} />
            </label>
            <p className="text-sm" role="status" aria-live="polite">
              Refracted angle θ₂: <strong className="text-lg">{snell === null ? "none (beyond the critical angle)" : `${snell.toFixed(1)}°`}</strong>
            </p>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Defaults: acrylic wedge 2,730 m/s, carbon steel shear 3,240 m/s.</p>
        </section>

        <ToolArticle t={t} />
      </main>
      <ContactDetails />
    </div>
  );
}
