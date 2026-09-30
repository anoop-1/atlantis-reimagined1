// "Individual technician" vs "company team" paths — mirrors pathsBlockHtml()
// in scripts/training-na.mjs so crawlers and visitors see the same two CTAs.
import { Link } from "react-router-dom";
import { User, Users } from "lucide-react";
import {
  COMPANY_QUOTE_URL,
  EMPLOYER_PROGRAM_PATH,
  INDIVIDUAL_ENQUIRY_URL,
} from "@/lib/na-training";

export default function TrainingPathChooser({ label }: { label: string }) {
  return (
    <section className="py-12 bg-background" aria-label="Choose your training path">
      <div className="container mx-auto max-w-5xl px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Two ways to train in {label}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border p-6 bg-secondary/20">
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <User className="w-5 h-5 text-primary" /> I&apos;m an individual technician
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              You want Level I or Level II in one method, or you are preparing for ASNT Level III. Theory runs live
              online; your employer (or the employer you are joining) certifies you under its written practice, and the
              practical examination is administered by an ASNT Level III on real specimens.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <a href={INDIVIDUAL_ENQUIRY_URL} target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium">
                Send a course enquiry
              </a>
              <Link to="/ndt-training-online" className="underline text-primary self-center">NDT training online</Link>
            </div>
          </div>
          <div className="rounded-xl border p-6 bg-secondary/20">
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" /> I&apos;m training a company team
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              You need a crew trained, examined and certified to your SNT-TC-1A written practice, onsite at your
              facility or blended with live online theory, with Level III oversight and an audit-ready file. Quote
              within one business day.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <Link to={COMPANY_QUOTE_URL} className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium">
                Request a company team training quote
              </Link>
              <Link to={EMPLOYER_PROGRAM_PATH} className="underline text-primary self-center">
                SNT-TC-1A certification programme for NDT companies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
