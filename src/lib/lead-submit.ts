/**
 * Shared lead delivery — 2026-09-30.
 *
 * End-to-end path for every form that uses it (EnquiryCaptureForm, ErpShortForm):
 *   1. JS path, primary: EmailJS (browser -> EmailJS -> info@atlantisndt.com, M365).
 *   2. JS path, backup: POST /api/contact (JSON) -> nginx -> atlantis-contact.service
 *      on the VPS (port 3021) -> local Postfix -> info@. The API needs firstName,
 *      lastName, email and message, so the name is split and the message composed.
 *   3. No-JS path: the <form> itself carries method="post", enctype="text/plain"
 *      and action="mailto:info@atlantisndt.com?..." with every field named, so a
 *      failed hydration still produces an email from the visitor's mail client.
 *      (The VPS API only parses JSON — it answers "Invalid JSON" to a
 *      form-encoded POST — so it cannot be the no-JS action until INFRA adds a
 *      urlencoded parser and a 303 redirect back to the page.)
 *
 * submitLead() resolves only when a provider has ACCEPTED the enquiry, and the
 * caller fires generate_lead (trackAcceptedEnquiry) only after that.
 * It throws on failure so the caller can show the error state.
 */
import emailjs from "@emailjs/browser";
import { newEnquiryId, enquiryContext } from "@/lib/enquiry-analytics";

export interface LeadInput {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  /** Email subject line (the visitor's name is appended). */
  subject: string;
  /** Stable id of the form, e.g. "erp-short" or "enquiry-erp". */
  formId: string;
  /** Service key used by enquiryContext (erp, training, reporting, …). */
  service: string;
  /** GA4 + email: business line the lead belongs to. */
  businessLine: string;
  /** GA4 + email: what kind of lead this is (walkthrough, consultation, …). */
  leadType: string;
  /** Any other labelled fields, written into the email body in order. */
  fields?: Record<string, string>;
}

export interface LeadResult {
  id: string;
  method: string;
  /** Params to pass to trackAcceptedEnquiry's `extra` argument. */
  analytics: { business_line: string; landing_page: string; lead_type: string };
}

export async function submitLead(input: LeadInput): Promise<LeadResult> {
  const enquiryId = newEnquiryId();
  const context = enquiryContext(input.service);
  const analytics = {
    business_line: input.businessLine,
    landing_page: context.landing_path,
    lead_type: input.leadType,
  };
  const extraLines = Object.entries(input.fields || {})
    .map(([k, v]) => `${k}: ${v && v.trim() ? v.trim() : "(not provided)"}`)
    .join("\n");
  const details =
    `Enquiry ID: ${enquiryId}\n` +
    `Business line: ${analytics.business_line}\n` +
    `Lead type: ${analytics.lead_type}\n` +
    `Landing page: ${analytics.landing_page}\n` +
    `Page: ${context.page_path}\n` +
    `Service: ${context.service}\nRegion: ${context.target_region}\nForm: ${input.formId}\n\n` +
    `Name:    ${input.name}\n` +
    `Email:   ${input.email}\n` +
    `Phone:   ${input.phone || "(not provided)"}\n` +
    `Company: ${input.company || "(not provided)"}\n` +
    (extraLines ? `\n${extraLines}\n` : "");
  const subject = `${input.subject} — ${input.name}${input.company ? ` (${input.company})` : ""}`;

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

  if (serviceId && templateId && publicKey) {
    try {
      // The template renders {{name}} and {{message}}; aliases are sent too.
      await emailjs.send(
        serviceId,
        templateId,
        {
          enquiry_id: enquiryId,
          ...context,
          ...analytics,
          name: input.name,
          from_name: input.name,
          user_name: input.name,
          email: input.email,
          from_email: input.email,
          user_email: input.email,
          reply_to: input.email,
          company: input.company || "",
          usecase: (input.fields && Object.values(input.fields)[0]) || "",
          subject,
          message: details,
          to_email: "info@atlantisndt.com",
        },
        { publicKey },
      );
      return { id: enquiryId, method: "emailjs", analytics };
    } catch (err) {
      console.warn("EmailJS failed, falling back to contact API:", err);
    }
  }

  const [firstName, ...rest] = input.name.trim().split(/\s+/);
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName: firstName || input.name,
      lastName: rest.join(" ") || "-",
      email: input.email,
      phone: input.phone || "",
      company: input.company || "",
      service: context.service,
      message: `${subject}\n\n${details}`,
      enquiryId,
      target_region: context.target_region,
      landing_path: context.landing_path,
      page_path: context.page_path,
      form_id: input.formId,
    }),
  });
  const result = await res.json().catch(() => ({} as Record<string, unknown>));
  if (!res.ok || !result?.ok) {
    throw new Error((result?.error as string) || `Mail service unavailable (HTTP ${res.status})`);
  }
  return { id: (result.enquiryId as string) || enquiryId, method: (result.fallback as string) || "api", analytics };
}

/** mailto: action used as the no-JS fallback on every lead form. */
export function mailtoAction(subject: string) {
  return `mailto:info@atlantisndt.com?subject=${encodeURIComponent(subject)}`;
}
