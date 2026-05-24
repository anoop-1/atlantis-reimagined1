import React from "react";

/**
 * AuthorBio
 * ─────────
 * Renders an author block with name, role, ASNT Level III credentials by
 * method, years in field, and a short bio paragraph. Emits inline Person
 * schema.org JSON-LD so the author surfaces as an E-E-A-T signal.
 *
 * Used at the foot of:
 *   - Every cluster page under /digital-twins/*
 *   - Every vertical hub
 *   - Every case study
 */

export type AsntLevel = {
  method: string;      // e.g. "Ultrasonic Testing"
  methodCode: string;  // e.g. "UT-III"
  certNumber?: string; // optional ASNT cert number, when publishable
};

export type Author = {
  name: string;
  role: string;
  asntLevels: AsntLevel[];
  yearsInField: number;
  bio: string;
  imageUrl?: string | null;
  /** Optional ORCID, LinkedIn, etc. — rendered into JSON-LD sameAs */
  sameAs?: string[];
};

const DEFAULT_AUTHOR: Author = {
  name: "A. Sample ASNT III",
  role: "Senior NDT Level III — Digital Twin Practice",
  asntLevels: [
    { method: "Ultrasonic Testing", methodCode: "UT-III" },
    { method: "Radiographic Testing", methodCode: "RT-III" },
  ],
  yearsInField: 22,
  bio:
    "Placeholder bio. Replace with the real ASNT Level III author for this page before deploy. " +
    "Atlantis publishes author bios on every cluster, vertical hub, and case study as part of the " +
    "E-E-A-T program so that readers can verify the technical authority behind the copy.",
  imageUrl: null,
};

function buildPersonJsonLd (a: Author): object {
  const methodNames = a.asntLevels.map((l) => l.methodCode).join(", ");
  const jobTitle = `${a.role} — ASNT Level III (${methodNames})`;
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: a.name,
    jobTitle,
    knowsAbout: a.asntLevels.map((l) => l.method),
    hasCredential: a.asntLevels.map((l) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: `ASNT Level III ${l.method}`,
      recognizedBy: {
        "@type": "Organization",
        name: "American Society for Nondestructive Testing",
        url: "https://asnt.org",
      },
      ...(l.certNumber ? { identifier: l.certNumber } : {}),
    })),
    worksFor: {
      "@type": "Organization",
      name: "Atlantis NDT",
      url: "https://atlantisndt.com",
    },
    description: a.bio,
  };
  if (a.imageUrl) schema.image = a.imageUrl;
  if (a.sameAs && a.sameAs.length) schema.sameAs = a.sameAs;
  return schema;
}

type Props = { author?: Author };

export default function AuthorBio ({ author = DEFAULT_AUTHOR }: Props) {
  const a = author;
  const jsonLd = buildPersonJsonLd(a);

  return (
    <aside
      className="mt-16 rounded-lg border border-slate-200 bg-slate-50 p-6 md:p-8"
      aria-labelledby="author-bio-heading"
    >
      <script
        type="application/ld+json"
        // JSON.stringify output is safe here — no user-supplied script context
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <p className="text-xs font-semibold uppercase tracking-widest text-sky-700">
        Reviewed by
      </p>

      <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-start">
        {a.imageUrl ? (
          <img
            src={a.imageUrl}
            alt={`${a.name} — ${a.role}`}
            className="h-20 w-20 flex-shrink-0 rounded-full object-cover ring-1 ring-slate-300"
            loading="lazy"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-sky-700 text-lg font-bold text-white"
          >
            {a.name
              .split(/\s+/)
              .map((s) => s[0])
              .slice(0, 2)
              .join("")
              .toUpperCase()}
          </div>
        )}

        <div className="flex-1">
          <h3
            id="author-bio-heading"
            className="text-lg font-semibold text-slate-900"
          >
            {a.name}
          </h3>
          <p className="text-sm text-slate-700">{a.role}</p>

          <ul className="mt-3 flex flex-wrap gap-2">
            {a.asntLevels.map((l) => (
              <li
                key={l.methodCode}
                className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-900"
                title={l.method}
              >
                {l.methodCode}
                {l.certNumber ? ` · ${l.certNumber}` : ""}
              </li>
            ))}
            <li className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
              {a.yearsInField}+ years in the field
            </li>
          </ul>

          <p className="mt-4 text-sm leading-relaxed text-slate-700">{a.bio}</p>
        </div>
      </div>
    </aside>
  );
}
