// Custom-template quotation request on the NDT report template pages. 2026-09-29: was
// "email me the editable version"; 2026-10-24 (owner): the Excel version is now a direct
// download, so this form asks for templates in the visitor's own format and is quoted.
// Originally (2026-09-29) Sends through the same EmailJS enquiry path as
// EnquiryCaptureForm, subject "Template request — {method}". Falls back to a
// mailto to info@atlantisndt.com when EmailJS env vars are missing.
import { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { newEnquiryId, enquiryContext, trackAcceptedEnquiry, trackEngagement } from "@/lib/enquiry-analytics";

interface Props {
  method: string; // e.g. "UT", "PAUT"
  templateName: string;
}

export default function TemplateRequestForm({ method, templateName }: Props) {
  const submitting = useRef(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [format, setFormat] = useState("This report in our company format");
  const [note, setNote] = useState("");
  const subject = `Custom template quotation — ${method}`;

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (submitting.current) return;
    submitting.current = true;
    const enquiryId = newEnquiryId();
    const context = enquiryContext("templates");
    setStatus("sending");
    const details =
      `Enquiry ID: ${enquiryId}\nForm: custom-template-request\nTemplate: ${templateName}\nWhat is needed: ${format}\n` +
      `Name:    ${name}\nEmail:   ${email}\nCompany: ${company || "(not provided)"}\n` +
      `Source:  ${typeof window !== "undefined" ? window.location.pathname : "(unknown page)"}\n\nNote:\n${note || "(none)"}`;
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;
      if (!serviceId || !templateId || !publicKey) {
        window.location.href = `mailto:info@atlantisndt.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(details)}`;
        trackEngagement("email_contact_click", { form_id: "template-request", method: "mailto_fallback" });
        setStatus("error");
        return;
      }
      await emailjs.send(
        serviceId,
        templateId,
        {
          enquiry_id: enquiryId,
          ...context,
          name,
          from_name: name,
          user_name: name,
          email,
          from_email: email,
          user_email: email,
          reply_to: email,
          company,
          usecase: `${templateName} (${format})`,
          subject: `${subject} — ${name}${company ? ` (${company})` : ""}`,
          message: details,
          to_email: "info@atlantisndt.com",
        },
        { publicKey },
      );
      trackAcceptedEnquiry(enquiryId, "custom-template-request", "templates", "emailjs");
      setStatus("sent");
    } catch (err) {
      console.error("EmailJS error", err);
      setStatus("error");
    } finally {
      submitting.current = false;
    }
  }

  return (
    <section id="request-template" className="container mx-auto px-6 max-w-3xl py-10">
      <div className="rounded-xl border-2 border-primary/20 bg-white p-6">
        <h2 className="text-2xl font-bold mb-2">Need it in your own format? Request a custom template</h2>
        <p className="text-muted-foreground mb-5">
          The Excel version of the {templateName} above is free to download. If you need it in your company's or your client's format, matched to your procedure and code, or a template for another method, tell us what you need and we will reply with a quotation.
        </p>
        {status === "sent" ? (
          <p className="text-green-700 font-semibold">Thanks. We have your request and will reply to {email || "your inbox"} with a quotation within one business day.</p>
        ) : (
          <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-semibold">
              Your name *
              <input required value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2 font-normal" />
            </label>
            <label className="text-sm font-semibold">
              Work email *
              <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2 font-normal" />
            </label>
            <label className="text-sm font-semibold">
              Company
              <input value={company} onChange={(e) => setCompany(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2 font-normal" />
            </label>
            <label className="text-sm font-semibold">
              What do you need?
              <select value={format} onChange={(e) => setFormat(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2 font-normal">
                <option>This report in our company format</option>
                <option>This report in our client's format</option>
                <option>Templates for other methods</option>
                <option>A complete report pack for our written practice</option>
              </select>
            </label>
            <label className="text-sm font-semibold sm:col-span-2">
              Methods, industry, code or client specification (optional)
              <textarea rows={2} value={note} onChange={(e) => setNote(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2 font-normal" placeholder="e.g. PAUT and TOFD for B31.3 piping; client format attached on reply" />
            </label>
            <button type="submit" disabled={status === "sending"} className="sm:col-span-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground disabled:opacity-60">
              {status === "sending" ? "Sending…" : "Request a quotation"}
            </button>
            {status === "error" && (
              <p className="sm:col-span-2 text-sm text-red-600">
                Something went wrong. Email <a className="underline" href={`mailto:info@atlantisndt.com?subject=${encodeURIComponent(subject)}`}>info@atlantisndt.com</a> and we will reply with a quotation.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
