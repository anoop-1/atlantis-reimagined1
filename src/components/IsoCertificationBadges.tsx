/**
 * ISO certification badges for the site footer — 2026-11-07 (owner: "add ISO certified company
 * with 9001 & 14001 logos in the home page's footer").
 *
 * Facts (checked against the certificates in the company OneDrive, "Renewed ISO certificates",
 * issued 29 Sep 2026): Atlantis Inspection Services Pvt. Ltd. holds ISO 9001:2015 (and
 * ISO 45001:2018) for "non-destructive testing, inspection & training services", certified by
 * Veritas Management System UK Ltd.; ISO 14001 was renewed in the same cycle (owner-confirmed).
 *
 * The seals are drawn here rather than copied: ISO's own logo may not be used by certified
 * organisations, so each badge names the standard, never the ISO organisation's mark. If the
 * certification body supplies its own certification mark, swap the artwork, not the facts.
 */
type Badge = { std: string; ed: string; label: string };

const BADGES: Badge[] = [
  { std: "9001", ed: "2015", label: "Quality management" },
  { std: "14001", ed: "2015", label: "Environmental management" },
];

function Seal({ std, ed, label }: Badge) {
  const id = `iso-arc-${std}`;
  return (
    <svg viewBox="0 0 120 120" className="h-[72px] w-[72px] shrink-0" role="img" aria-label={`ISO ${std}:${ed} certified, ${label.toLowerCase()} system`}>
      <defs>
        <path id={id} d="M 60 60 m -44 0 a 44 44 0 1 1 88 0 a 44 44 0 1 1 -88 0" />
      </defs>
      <circle cx="60" cy="60" r="58" fill="#0b1f3d" stroke="hsl(195 100% 50%)" strokeWidth="2" />
      <circle cx="60" cy="60" r="35" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
      {/* Long labels ("ENVIRONMENTAL MANAGEMENT") get a smaller ring font so the text never meets its own start. */}
      <text fill="rgba(255,255,255,0.85)" fontSize={label.length > 20 ? 8.4 : 9.5} fontWeight="600" letterSpacing={label.length > 20 ? 1.05 : 1.6}>
        <textPath href={`#${id}`} startOffset="2%">CERTIFIED · {label.toUpperCase()} ·</textPath>
      </text>
      <text x="60" y="55" textAnchor="middle" fill="#ffffff" fontSize="20" fontWeight="800" letterSpacing="1">ISO</text>
      <text x="60" y="72" textAnchor="middle" fill="hsl(195 100% 50%)" fontSize={std.length > 4 ? 14 : 15} fontWeight="800">{std}</text>
      <text x="60" y="84" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8.5" fontWeight="600">{ed}</text>
    </svg>
  );
}

export default function IsoCertificationBadges() {
  return (
    <section aria-label="ISO certifications" className="mb-8 flex flex-col gap-4 rounded-xl border border-gray-800 bg-black/20 p-5 sm:flex-row sm:items-center sm:gap-6">
      <div className="flex gap-3">
        {BADGES.map((b) => <Seal key={b.std} {...b} />)}
      </div>
      <div className="min-w-0">
        <p className="text-base font-semibold text-white">ISO certified company</p>
        <p className="mt-1 text-sm leading-relaxed text-gray-400">
          ISO 9001:2015 quality management and ISO 14001:2015 environmental management, certified by Veritas Management System UK Ltd. for non-destructive testing, inspection and training services (Atlantis Inspection Services Pvt. Ltd.).
        </p>
      </div>
    </section>
  );
}
