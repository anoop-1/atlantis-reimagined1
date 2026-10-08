/**
 * MarineReportFormatBlock — Marine / Maritime NDT report sequence structured to
 * the content IACS Recommendation No. 20 and class rules expect. Acceptance of a
 * report is always the attending class surveyor's decision; Atlantis holds no
 * class-society acceptance or approval of its format, so never claim one here.
 *
 * Sequence (Atlantis bundle order):
 *   1. Cover page          — vessel particulars, IMO no., class, surveyor, ref, date
 *   2. Calibration record  — UT block / transducer S/N, gain, range, DAC/TCG, date
 *   3. NDT Level II cert   — SNT-TC-1A / ISO 9712 / PCN, method, expiry, signature
 *   4. NDT report          — procedure, technique, scope, findings, acceptance, sign-off
 *
 * Code references: IACS Rec No. 20 + UR W11 / Z23; IMO MSC.1/Circ.1409; class
 * rules of ABS, DNV, Lloyd's Register, Bureau Veritas (BV), RINA, ClassNK, KR,
 * CCS, IRS, PRS, RS (IACS members); ASME Section V; ISO 17635/17636/17640;
 * ASTM E1444/E165.
 *
 * Atlantis NDT Reporting Software ships this as the default report template —
 * generates the 4-doc bundle automatically per inspection, with embedded
 * certificates and calibration records pulled from the equipment + personnel
 * registers. Renders as a content section + JSON-LD HowTo schema for SEO.
 */
import { Anchor, FileCheck, Award, ClipboardList, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  city?: string;
  country?: string;
}

const SEQUENCE = [
  {
    n: 1,
    icon: FileCheck,
    title: "Cover Page",
    summary:
      "Vessel particulars + report identification — first page every class surveyor opens.",
    fields: [
      "Vessel name + IMO number + flag",
      "Class society (ABS / DNV / Lloyd's / BV / RINA / ClassNK / KR / CCS / IRS) + class notation",
      "Owner + manager (ISM) + builder + yard hull no.",
      "Survey type (Annual / Intermediate / Special / Docking / Damage)",
      "Inspection location (yard / port / drydock) + date(s)",
      "Report reference no. + revision + issue date",
      "Inspection company logo + report approval block",
    ],
  },
  {
    n: 2,
    icon: ShieldCheck,
    title: "Calibration Record",
    summary:
      "Equipment traceability — a surveyor will query a report that arrives without calibration evidence.",
    fields: [
      "Instrument make / model / serial number (Olympus EPOCH 650, Sonatest, GE USM Go+, etc.)",
      "Transducer S/N + frequency + element size + angle (e.g. 4 MHz 2×4 mm 45°)",
      "Calibration reference block ID (IIW V1 / V2, DSC, ASTM E164, ISO 2400-1)",
      "Gain / range / DAC or TCG curve / sound-velocity / wedge correction",
      "Calibration date + operator + ambient temperature",
      "Couplant / penetrant / particle batch + lot no. (ASTM E1417, ASTM E1444)",
      "Equipment calibration certificate ref + next-due date (ISO/IEC 17025 traceable)",
    ],
  },
  {
    n: 3,
    icon: Award,
    title: "NDT Level II Certificate",
    summary:
      "Personnel competence — the evidence that the inspector was qualified for the method and level used.",
    fields: [
      "Inspector name + employee ID + photograph",
      "Certifying body — ASNT SNT-TC-1A / CP-189, ISO 9712, PCN (BINDT), ASNT 9712 (formerly ACCP), CSWIP",
      "Method + level (e.g. UT-2, RT-2, MT-2, PT-2, ET-2, VT-2, PAUT-2, TOFD-2)",
      "Sector — Welds / Castings / Forgings / Tubes / Composites / Marine",
      "Date of certification + expiry date + last vision/colour-check",
      "Annual eye test record (Jaeger J1 + Ishihara) per ISO 9712 §7.4",
      "Authorising Level III signature + Written Practice reference",
    ],
  },
  {
    n: 4,
    icon: ClipboardList,
    title: "NDT Report",
    summary:
      "The technical content — bound behind documents 1–3 so the surveyor sees the supporting evidence first.",
    fields: [
      "Procedure reference no. + technique (UT-Pulse-Echo, PAUT, TOFD, RT, MT-Yoke, PT-Solvent)",
      "Scope — weld IDs, plate thicknesses, joint geometry, surface condition",
      "Reference code — ASME Sec. V, ISO 17635/17636/17640, AWS D1.1, IACS Rec. 20, UR W11",
      "Findings — defect type / position / size / orientation / indication amplitude (% DAC)",
      "Acceptance criteria — ISO 5817 Level B/C/D, ASME B&PV App. 12, class society rules",
      "Sketches + photographs + UT A/B/C-scans + RT film index",
      "Inspector signature + Atlantis NDT Level III review signature + date",
    ],
  },
];

export default function MarineReportFormatBlock({ city, country }: Props) {
  const locale = city ? ` (${city}${country ? `, ${country}` : ""})` : "";

  // HowTo schema — emit as JSON-LD for the marine report sequence
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `Marine NDT Report Format — Sequence Structured to IACS Recommendation No. 20${locale}`,
    description:
      "Marine / Maritime NDT inspection report bundle structured to the content that IACS Recommendation No. 20 and the rules of class societies such as ABS, DNV, Lloyd's Register, Bureau Veritas, RINA, ClassNK, KR, CCS and IRS expect. 4-document sequence: cover page → calibration record → NDT Level II certificate → NDT report. Acceptance is the attending class surveyor's decision.",
    totalTime: "PT20M",
    step: SEQUENCE.map((s) => ({
      "@type": "HowToStep",
      position: s.n,
      name: s.title,
      text: s.summary,
      itemListElement: s.fields.map((f) => ({ "@type": "HowToDirection", text: f })),
    })),
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-900 text-sm font-semibold mb-4">
            <Anchor className="w-4 h-4" />
            Marine / Maritime — NDT Report Format Structured to IACS Rec. 20
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Marine NDT Report Format{city ? ` — ${city}` : ""} — IACS Class-Society Sequence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            An NDT report for a classed vessel — ABS, DNV, Lloyd's Register, Bureau
            Veritas, RINA, ClassNK, KR, CCS, IRS — has to carry the content IACS
            Recommendation No. 20 and the society's rules expect. Atlantis NDT Reporting
            Software lays that content out as a 4-document bundle and generates it
            automatically per inspection, with the calibration record and Level II
            certificate pulled live from the equipment + personnel registers — no manual
            assembly. Acceptance of the report is the attending class surveyor's decision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {SEQUENCE.map((s) => (
            <div
              key={s.n}
              className="bg-white rounded-xl border-2 border-blue-100 hover:border-blue-400 transition-colors p-6 shadow-sm"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                  {s.n}
                </div>
                <div>
                  <div className="flex items-center gap-2 text-blue-700 mb-1">
                    <s.icon className="w-5 h-5" />
                    <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{s.summary}</p>
                </div>
              </div>
              <ul className="space-y-2 pl-2">
                {s.fields.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-blue-500 mt-1">▸</span>
                    <span className="text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 rounded-xl bg-blue-900 text-white">
          <h3 className="text-xl font-bold mb-3">
            Why the sequence matters{city ? ` for ${city} operators` : ""}
          </h3>
          <p className="text-blue-100 mb-4 leading-relaxed">
            IACS Recommendation No. 20 and IMO MSC.1/Circ.1409 both require traceable
            evidence of equipment calibration and personnel competence to accompany every
            NDT result on classed vessels and offshore units. A surveyor can query or
            decline a report where the calibration record or Level II certificate is
            missing or illegible — and during a dry-dock that costs time. Atlantis NDT
            Reporting Software enforces the
            sequence at PDF generation: the inspector cannot finalise a report without
            valid calibration + Level II evidence attached.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link
              to="/marine-offshore-ndt-services"
              className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-white text-blue-900 font-semibold hover:bg-blue-50 transition"
            >
              Marine &amp; Offshore NDT Services →
            </Link>
            <Link
              to="/intelligent-reporting-software"
              className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-600 transition"
            >
              Reporting Software Hub →
            </Link>
            <Link
              to="/best-ndt-reporting-software-2026"
              className="inline-flex items-center gap-1 px-4 py-2 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10 transition"
            >
              Top 10 Reporting Tools 2026 →
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-amber-500 text-blue-900 font-semibold hover:bg-amber-400 transition"
            >
              Request a Demo
            </Link>
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      </div>
    </section>
  );
}
