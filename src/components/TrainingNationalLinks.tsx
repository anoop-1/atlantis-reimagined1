// City-page block that routes the national head terms to their owner pages
// with exact anchor text (CLAUDE.md §25.2 pattern). Mirrors routingBlockHtml()
// in scripts/training-na.mjs.
import { Link } from "react-router-dom";
import { CONSULTING_OWNER_PATH, EMPLOYER_PROGRAM_PATH } from "@/lib/na-training";

export default function TrainingNationalLinks({ label }: { label: string }) {
  return (
    <section className="py-10 bg-background" aria-label="National NDT training programmes">
      <div className="container mx-auto max-w-4xl px-6">
        <h2 className="text-2xl font-bold mb-3">National programmes behind this {label} page</h2>
        <p className="text-muted-foreground leading-relaxed">
          This page covers NDT training for employers and technicians in {label}. The national programmes live on their
          own pages: <Link className="text-primary underline" to="/training">NDT training</Link> (every method and level
          across the USA and Canada), <Link className="text-primary underline" to="/ndt-training-online">NDT training online</Link>,{" "}
          <Link className="text-primary underline" to="/snt-tc-1a-training-certification">SNT-TC-1A training and certification</Link>,{" "}
          <Link className="text-primary underline" to={EMPLOYER_PROGRAM_PATH}>SNT-TC-1A certification programme for NDT companies</Link>,{" "}
          <Link className="text-primary underline" to="/asnt-level-iii-training">ASNT Level III training</Link> and{" "}
          <Link className="text-primary underline" to={CONSULTING_OWNER_PATH}>ASNT Level III consulting</Link>. Hours by method
          and level are in the <Link className="text-primary underline" to="/resources/training-requirements-matrix">training requirements matrix</Link>;
          practise on the <Link className="text-primary underline" to="/practical-ndt">Practical NDT simulator</Link>.
        </p>
      </div>
    </section>
  );
}
