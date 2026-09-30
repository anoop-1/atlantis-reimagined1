import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { trackAcceptedEnquiry } from "@/lib/enquiry-analytics";
import { submitLead } from "@/lib/lead-submit";
import home from "@/data/home-first-screen.json";

// Homepage inline enquiry form (2026-09-30 audit plan, item 7).
// Field names match the prerendered no-JS form in scripts/home-first-screen.mjs
// (name, email, company, need). Without JS the form posts to its mailto: action;
// with JS it is delivered by the shared submitLead() (src/lib/lead-submit.ts).
// generate_lead fires only after a delivery provider accepted the enquiry.
const LABELS: Record<string, string> = Object.fromEntries(home.needs.map((n) => [n.value, n.label]));

export default function HomeEnquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const submitting = useRef(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting.current) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const company = String(data.get("company") || "").trim();
    const need = String(data.get("need") || "").trim();
    if (!name || !email || !need) { setStatus("error"); setError("Please fill in your name, email and what you need."); return; }

    submitting.current = true;
    setStatus("sending");
    setError("");
    try {
      // Shared delivery path (EmailJS -> /api/contact); resolves only when accepted.
      const result = await submitLead({
        name, email, company,
        subject: "Homepage enquiry",
        formId: "home_enquiry",
        service: need,
        businessLine: need,
        leadType: "homepage_enquiry",
        fields: { Need: LABELS[need] || need },
      });
      trackAcceptedEnquiry(result.id, "home_enquiry", need, result.method, result.analytics);
      form.reset();
      setStatus("sent");
    } catch (err) {
      console.error("Homepage enquiry error:", err);
      setStatus("error");
      setError("Sorry, the enquiry could not be sent. Please email info@atlantisndt.com or use the contact page.");
    }
    submitting.current = false;
  };

  if (status === "sent") {
    return (
      <div role="status" className="rounded-xl border bg-white p-6 text-left shadow-md">
        <p className="font-semibold text-lg mb-1">{home.form.heading}</p>
        <p className="text-muted-foreground">{home.form.success}</p>
      </div>
    );
  }

  const field = "w-full rounded-md border border-input bg-background px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary";
  return (
    <form
      id="home-enquiry"
      name="home-enquiry"
      method="post"
      action={home.form.noJsAction}
      encType="text/plain"
      data-form-id="home_enquiry"
      onSubmit={handleSubmit}
      className="rounded-xl border bg-white p-6 text-left shadow-md space-y-3"
    >
      <h2 className="text-xl font-bold">{home.form.heading}</h2>
      <div>
        <label htmlFor="home-enquiry-name" className="block text-sm font-medium mb-1">Name</label>
        <input id="home-enquiry-name" name="name" type="text" autoComplete="name" required className={field} />
      </div>
      <div>
        <label htmlFor="home-enquiry-email" className="block text-sm font-medium mb-1">Work email</label>
        <input id="home-enquiry-email" name="email" type="email" autoComplete="email" required className={field} />
      </div>
      <div>
        <label htmlFor="home-enquiry-company" className="block text-sm font-medium mb-1">Company</label>
        <input id="home-enquiry-company" name="company" type="text" autoComplete="organization" className={field} />
      </div>
      <div>
        <label htmlFor="home-enquiry-need" className="block text-sm font-medium mb-1">What do you need?</label>
        <select id="home-enquiry-need" name="need" required defaultValue="" className={field}>
          <option value="" disabled>Select one</option>
          {home.needs.map((n) => <option key={n.value} value={n.value}>{n.label}</option>)}
        </select>
      </div>
      <Button type="submit" className="btn-primary w-full" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : home.form.submit}
      </Button>
      {status === "error" && <p role="alert" className="text-sm text-red-600">{error}</p>}
      <p className="text-xs text-muted-foreground">{home.form.note}</p>
    </form>
  );
}
