// "Get the editable Word/Excel version" request for the NDT report template
// pages (2026-09-29). Sends through the same EmailJS enquiry path as
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
  const [format, setFormat] = useState("Word");
  const [note, setNote] = useState("");
  const subject = `Template request — ${method}`;

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (submitting.current) return;
    submitting.current = true;
    const enquiryId = newEnquiryId();
    const context = enquiryContext("reporting");
    setStatus("sending");
    const details =
      `Enquiry ID: ${enquiryId}\nForm: template-request\nTemplate: ${templateName}\nFormat wanted: ${format}\n` +
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
      trackAcceptedEnquiry(enquiryId, "template-request", "reporting", "emailjs");
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
        <h2 className="text-2xl font-bold mb-2">Get the editable Word or Excel version</h2>
        <p className="text-muted-foreground mb-5">
          We will email you the editable {templateName} so you can add your logo and adjust fields to your procedure. Nothing else is sent unless you ask.
        </p>
        {status === "sent" ? (
          <p className="text-green-700 font-semibold">Thanks — the editable template is on its way to {email || "your inbox"}.</p>
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
              Format
              <select value={format} onChange={(e) => setFormat(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2 font-normal">
                <option>Word</option>
                <option>Excel</option>
                <option>Both</option>
              </select>
            </label>
            <label className="text-sm font-semibold sm:col-span-2">
              Anything to adapt? (optional)
              <textarea rows={2} value={note} onChange={(e) => setNote(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2 font-normal" placeholder="Client specification, extra fields, language…" />
            </label>
            <button type="submit" disabled={status === "sending"} className="sm:col-span-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground disabled:opacity-60">
              {status === "sending" ? "Sending…" : "Email me the editable template"}
            </button>
            {status === "error" && (
              <p className="sm:col-span-2 text-sm text-red-600">
                Something went wrong. Email <a className="underline" href={`mailto:info@atlantisndt.com?subject=${encodeURIComponent(subject)}`}>info@atlantisndt.com</a> and we will send it.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
