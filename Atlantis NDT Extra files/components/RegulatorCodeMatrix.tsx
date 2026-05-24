import React from "react";

/**
 * RegulatorCodeMatrix
 * ───────────────────
 * Responsive 6-7 column grid of regulator code badges. Used on:
 *   - /digital-twins (pillar)
 *   - /digital-twins/{vertical} hubs
 *   - /digital-twins/{cluster} pages (WEDGE, LIDAR, IoT, AI)
 *
 * Each badge shows the code label and reveals a short scope description
 * as a tooltip on hover / focus. Tailwind only. No external libs.
 *
 * Optional `subset` prop filters to a named list (e.g. oil-gas hub may
 * want only API + ADNOC + Aramco + ABS).
 */

export type RegulatorCode = {
  code: string;
  scope: string;
  family: "api" | "asme" | "middle-east" | "apac" | "maritime" | "defense" | "osha-epa";
};

export const ALL_CODES: RegulatorCode[] = [
  { code: "API 510",        family: "api",         scope: "Pressure Vessel Inspection Code — in-service inspection, repair, alteration, rerating of pressure vessels in petrochem / refining." },
  { code: "API 570",        family: "api",         scope: "Piping Inspection Code — in-service piping systems, corrosion monitoring locations, thickness measurement intervals." },
  { code: "API 580/581",    family: "api",         scope: "Risk-Based Inspection — qualitative (580) + quantitative (581) RBI methodology, probability and consequence of failure." },
  { code: "ASME B31.3",     family: "asme",        scope: "Process Piping — design, fabrication, examination, testing of chemical plant and refinery piping." },
  { code: "ADNOC COP",      family: "middle-east", scope: "ADNOC Code of Practice V2-01 — asset integrity management for UAE upstream and downstream facilities." },
  { code: "Aramco SAES-W-010", family: "middle-east", scope: "Saudi Aramco Engineering Standard — welding of pressure vessels and piping; mandatory for Aramco work." },
  { code: "KEPIC",          family: "apac",        scope: "Korea Electric Power Industry Code — nuclear, conventional power, pressure equipment; KEPIC-MN/MI/ES tracks." },
  { code: "PETRONAS PTS",   family: "apac",        scope: "PETRONAS Technical Standards — Malaysian integrated oil & gas operator standards for inspection and integrity." },
  { code: "KOC Standards",  family: "middle-east", scope: "Kuwait Oil Company Standards — upstream asset inspection, maintenance, NDT acceptance criteria." },
  { code: "ABS",            family: "maritime",    scope: "American Bureau of Shipping — classification rules for steel vessels, offshore units, FPSO conversions." },
  { code: "DNV",            family: "maritime",    scope: "DNV Rules — ship and offshore unit classification; DNV-OS / DNV-RP technical guidance." },
  { code: "Lloyd's Register", family: "maritime",  scope: "Lloyd's Register Rules — classification, survey, and in-service inspection of marine and offshore assets." },
  { code: "MIL-STD-271",    family: "defense",     scope: "Military Standard — Requirements for Non-Destructive Testing Methods for naval and shipboard equipment." },
  { code: "AS9100",         family: "defense",     scope: "Aerospace quality management system standard, including supply-chain special-process NDT controls." },
  { code: "FAA Part 145",   family: "defense",     scope: "FAA Repair Station Rule — certificated MRO facilities performing maintenance on US-registered aircraft." },
  { code: "EASA Part 145",  family: "defense",     scope: "EASA Approved Maintenance Organisation — EU-equivalent of FAA Part 145 for EU-registered aircraft." },
  { code: "OSHA 1910.119",  family: "osha-epa",    scope: "OSHA Process Safety Management — mechanical integrity program for highly hazardous chemicals above threshold quantities." },
  { code: "EPA RMP",        family: "osha-epa",    scope: "EPA Risk Management Program — 40 CFR Part 68 requirements for facilities handling regulated substances." },
];

const FAMILY_STYLE: Record<RegulatorCode["family"], string> = {
  "api":         "bg-sky-50 text-sky-900 border-sky-200",
  "asme":        "bg-indigo-50 text-indigo-900 border-indigo-200",
  "middle-east": "bg-amber-50 text-amber-900 border-amber-200",
  "apac":        "bg-emerald-50 text-emerald-900 border-emerald-200",
  "maritime":    "bg-cyan-50 text-cyan-900 border-cyan-200",
  "defense":     "bg-slate-100 text-slate-900 border-slate-300",
  "osha-epa":    "bg-rose-50 text-rose-900 border-rose-200",
};

type Props = {
  /** Optional filter — pass a list of code strings to render only those. */
  subset?: string[];
  /** Optional section heading. Omit to render badges only. */
  heading?: string;
  /** Optional intro paragraph rendered above the grid. */
  intro?: string;
};

export default function RegulatorCodeMatrix ({ subset, heading, intro }: Props) {
  const codes = subset && subset.length
    ? ALL_CODES.filter((c) => subset.includes(c.code))
    : ALL_CODES;

  return (
    <section aria-labelledby="regulator-code-matrix-heading" className="w-full">
      {heading ? (
        <h2
          id="regulator-code-matrix-heading"
          className="text-2xl font-bold text-slate-900 md:text-3xl"
        >
          {heading}
        </h2>
      ) : null}
      {intro ? (
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700 md:text-base">
          {intro}
        </p>
      ) : null}

      <ul
        className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7"
        role="list"
      >
        {codes.map((c) => (
          <li key={c.code} className="relative group">
            <div
              tabIndex={0}
              className={`flex h-full cursor-help flex-col justify-center rounded-md border px-3 py-2 text-center text-xs font-semibold outline-none transition focus:ring-2 focus:ring-sky-500 ${FAMILY_STYLE[c.family]}`}
              aria-describedby={`scope-${c.code.replace(/[^a-zA-Z0-9]/g, "-")}`}
            >
              <span className="block text-[0.8rem] leading-tight">{c.code}</span>
            </div>
            <div
              role="tooltip"
              id={`scope-${c.code.replace(/[^a-zA-Z0-9]/g, "-")}`}
              className="pointer-events-none invisible absolute left-1/2 top-full z-20 mt-2 w-64 -translate-x-1/2 rounded-md border border-slate-200 bg-white p-3 text-left text-xs leading-relaxed text-slate-800 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
            >
              <span className="block font-semibold text-slate-900">{c.code}</span>
              <span className="mt-1 block text-slate-700">{c.scope}</span>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-xs text-slate-500">
        Atlantis NDT personnel work under the codes listed above where scope-of-supply requires
        them. Specific code coverage for your asset can be confirmed during the discovery call.
      </p>
    </section>
  );
}
