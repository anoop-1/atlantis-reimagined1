import { SEOHead } from "@/components/SEOHead";

/* ─── Compact NDT Reference Data ─── */
const methods = [
  {
    abbr: "UT",
    name: "Ultrasonic Testing",
    detects: "Internal flaws, wall thinning, lack of fusion, laminations",
    bestFor: "Thickness gauging, weld inspection, corrosion mapping",
    limitations: "Requires couplant; operator-dependent; difficult on rough/thin surfaces",
  },
  {
    abbr: "RT",
    name: "Radiographic Testing",
    detects: "Porosity, inclusions, cracks, incomplete penetration",
    bestFor: "Weld quality verification, casting inspection, permanent records",
    limitations: "Radiation hazard; slow; area evacuation required; poor for planar defects",
  },
  {
    abbr: "MT",
    name: "Magnetic Particle Testing",
    detects: "Surface cracks, seams, laps, near-surface voids",
    bestFor: "Ferromagnetic weld inspection, forging/casting surface checks",
    limitations: "Ferromagnetic materials only; requires demagnetization; no deep defects",
  },
  {
    abbr: "PT",
    name: "Penetrant Testing",
    detects: "Surface-breaking cracks, porosity, laps, seams",
    bestFor: "Non-ferrous metals, ceramics, plastics; field portability",
    limitations: "Surface defects only; requires clean dry surface; chemical handling",
  },
  {
    abbr: "ET",
    name: "Eddy Current Testing",
    detects: "Surface cracks, corrosion, conductivity changes, coating thickness",
    bestFor: "Tube inspection, aerospace fatigue cracks, high-speed scanning",
    limitations: "Conductive materials only; limited penetration depth; complex signals",
  },
  {
    abbr: "VT",
    name: "Visual Testing",
    detects: "Surface defects, misalignment, corrosion, weld profile issues",
    bestFor: "First-pass inspection, general condition assessment, weld acceptance",
    limitations: "Surface only; subjective; requires adequate lighting and access",
  },
];

export default function EmbedNDTReference() {
  return (
    <div className="p-4 bg-white font-sans text-sm">
      <SEOHead
        title="NDT Quick Reference Widget"
        description="Compact comparison of all 6 NDT methods: UT, RT, MT, PT, ET, VT. Detection capabilities, best applications, and limitations at a glance."
        canonical="https://atlantisndt.com/embed/ndt-reference"
      />

      <h2 className="text-base font-bold text-slate-900 mb-3">
        NDT Method Quick Reference
      </h2>

      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-[#004aad] text-white">
              <th className="text-left p-2.5 font-semibold whitespace-nowrap">
                Method
              </th>
              <th className="text-left p-2.5 font-semibold">Detects</th>
              <th className="text-left p-2.5 font-semibold">Best For</th>
              <th className="text-left p-2.5 font-semibold">Limitations</th>
            </tr>
          </thead>
          <tbody>
            {methods.map((m, i) => (
              <tr
                key={m.abbr}
                className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
              >
                <td className="p-2.5 font-bold text-[#004aad] whitespace-nowrap align-top">
                  {m.abbr}
                  <span className="block text-[10px] font-normal text-slate-500 leading-tight">
                    {m.name}
                  </span>
                </td>
                <td className="p-2.5 text-slate-700 align-top">{m.detects}</td>
                <td className="p-2.5 text-slate-700 align-top">{m.bestFor}</td>
                <td className="p-2.5 text-slate-500 align-top">
                  {m.limitations}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-3 text-center">
        <span className="text-[11px] text-slate-400">
          Powered by{" "}
          <a
            href="https://atlantisndt.com/tools/ndt-quick-reference"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
            style={{ color: "#004aad" }}
          >
            Atlantis NDT
          </a>
        </span>
      </div>
    </div>
  );
}
