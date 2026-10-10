import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SEOHead } from "@/components/SEOHead";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Navigation } from "@/components/Navigation";
import { Users, CheckCircle2, Cpu, Award } from "lucide-react";
import ContactDetails from "@/components/ContactDetails";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { newEnquiryId, enquiryContext, trackAcceptedEnquiry, leadMetaLines, pipelineFor, isQualifiedLead } from "@/lib/enquiry-analytics";

// 2026-10-07 owner strategy (Contact Us remembers intent): a few short,
// optional questions per commercial line, so the enquiry arrives qualified and
// the reply can be specific. Never required: a short form beats a complete one.
type IntentField = { name: string; label: string; placeholder?: string; options?: string[] };
const INTENT_FIELDS: Record<string, IntentField[]> = {
   erp: [
      { name: "teamSize", label: "Team size", options: ["1-10", "11-50", "51-200", "200+"] },
      { name: "currentTools", label: "What do you use today?", placeholder: "e.g. Excel, Word templates, another ERP" },
   ],
   reporting: [
      { name: "methods", label: "Methods you report", placeholder: "e.g. UT, RT, MT, PAUT" },
      { name: "currentTools", label: "How are reports made today?", placeholder: "e.g. Word/Excel, vendor software" },
   ],
   "digital-twins": [
      { name: "assetType", label: "Asset type", placeholder: "e.g. tank farm, process unit, pipeline" },
      { name: "currentTools", label: "Where is inspection data kept today?", placeholder: "e.g. spreadsheets, PDF reports" },
   ],
   "practical-ndt": [
      { name: "organisation", label: "You are a…", options: ["Training centre", "Inspection company", "Asset owner", "Individual technician"] },
      { name: "methods", label: "Methods of interest", placeholder: "e.g. UT, PAUT, MT" },
   ],
   // 2026-10-09 sprint (Day 5): the training funnel separates training, exam and
   // certification, records the buying stage (enrol intent -> training_enrolment)
   // and asks what could stop the enrolment, so lost-lead reasons are captured at
   // enquiry time instead of guessed afterwards.
   training: [
      { name: "goal", label: "What do you need?", options: ["Training only (classroom + practical hours)", "Training and exam under my employer's written practice", "Exam / certification only (training already done)", "Not sure: explain the difference"] },
      { name: "buyer", label: "Who is the training for?", options: ["Me, paying myself", "My company's staff"] },
      { name: "location", label: "Where are the trainees?", placeholder: "City, state or country" },
      { name: "stage", label: "Where are you in the process?", options: ["Researching options", "Comparing quotes", "Ready to enrol / book seats", "Waiting on employer approval"] },
      { name: "trainees", label: "Number of trainees", options: ["1", "2-5", "6-15", "16+"] },
      { name: "methods", label: "Methods and levels", placeholder: "e.g. UT Level II, PAUT, TOFD" },
      { name: "delivery", label: "Delivery", options: ["Onsite at our facility", "Remote / online", "Not sure yet"] },
      { name: "blocker", label: "Anything that could stop you going ahead?", options: ["Dates", "Budget or funding approval", "Location or travel", "Experience-hour prerequisites", "Nothing: ready to go"] },
   ],
   // Inspection RFQ: method, asset, code, scope, location, timeline. No uploads:
   // the site has no secure file store, so drawings follow by email reply.
   inspection: [
      { name: "method", label: "Method(s)", options: ["UT thickness / corrosion mapping", "PAUT / TOFD", "API 653 tank NDE (MFL / UT)", "MT / PT / VT", "RT", "Not sure yet"] },
      { name: "assetType", label: "Asset or component", placeholder: "e.g. pressure vessels, piping circuits, AST floor" },
      { name: "standard", label: "Code or standard", placeholder: "e.g. API 510, API 570, API 653, ASME VIII, AWS D1.1" },
      { name: "scope", label: "Scope / quantity", placeholder: "e.g. 3 tanks, 40 welds, 120 CMLs" },
      { name: "location", label: "Site location", placeholder: "City, state / province" },
      { name: "timing", label: "When is the work needed?", options: ["Within 2 weeks", "Within 1-3 months", "Planned turnaround", "Just budgeting"] },
   ],
   // Level III: the four structured paths (written practice, procedures,
   // qualification and certification programmes, audits and ongoing support).
   consulting: [
      { name: "scope", label: "Which Level III path?", options: ["Written practice (SNT-TC-1A / CP-189)", "Procedures and technique sheets", "Qualification and certification programme", "Audits and ongoing Level III support", "Other"] },
      { name: "standard", label: "Governing document", options: ["SNT-TC-1A", "ANSI/ASNT CP-189", "NAS 410 / EN 4179", "ISO 9712", "Customer specification", "Not sure"] },
      { name: "timing", label: "Deadline", options: ["Audit or deadline within 30 days", "Within this quarter", "No fixed date"] },
   ],
   "3d-scanning": [
      { name: "assetType", label: "What needs scanning?", placeholder: "e.g. plant area, vessel, structure" },
      { name: "location", label: "Site location", placeholder: "City, state / province" },
   ],
};
// Where each line's visitor can read on while waiting for the reply.
const NEXT_READ: Record<string, { label: string; path: string }> = {
   erp: { label: "See the ERP apps", path: "/erp/apps" },
   reporting: { label: "How the reporting software works", path: "/intelligent-reporting-software" },
   "digital-twins": { label: "Digital Twin reporting explained", path: "/digital-twin-reporting" },
   "practical-ndt": { label: "Practical NDT simulator overview", path: "/practical-ndt" },
   training: { label: "Browse training courses", path: "/training" },
   inspection: { label: "Inspection services we perform", path: "/inspection-services" },
   consulting: { label: "What our Level III consulting covers", path: "/consulting" },
};

export default function Contact() {
   const submitting = useRef(false);
   const contactInfo = [
      {
         icon: Phone,
         title: "Phone",
         details: "+1 (281) 840-8969",
         subtitle: "Mon-Fri, 8AM - 6PM",
      },
      {
         icon: Mail,
         title: "Email",
         details: "info@atlantisndt.com",
         subtitle: "24/7 Support",
      },
      {
         icon: MapPin,
         title: "Location",
         details: "Houston, USA",
         subtitle: "Multiple Locations",
      },
      {
         icon: Clock,
         title: "Response Time",
         details: "< 24 Hours",
         subtitle: "Emergency Available",
      },
   ];

   const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Atlantis NDT",
      description:
         "Professional Non-Destructive Testing services, training, and consultancy",
      url: "https://atlantisndt.com",
      contactPoint: {
         "@type": "ContactPoint",
         telephone: "+1 (281) 840-8969",
         contactType: "Customer Service",
         email: "info@atlantisndt.com",
      },
      serviceArea: "North America",
      hasOfferCatalog: {
         "@type": "OfferCatalog",
         name: "Professional Services",
         itemListElement: [
            {
               "@type": "Offer",
               itemOffered: {
                  "@type": "Service",
                  name: "Training Programs",
                  description:
                     "Comprehensive NDT training and certification programs",
               },
            },
            {
               "@type": "Offer",
               itemOffered: {
                  "@type": "Service",
                  name: "Consulting Services",
                  description:
                     "Expert Level III NDT consulting and quality assurance",
               },
            },
         ],
      },
   };

   // 2026-07-29 CRO fix. GA4 for the last 28 days: 392 erp_demo_request_click
   // events but only 66 form_start and 34 generate_lead. Visitors were arriving
   // at /contact?subject=ERP%20Demo%20Request and finding a completely blank
   // form with no indication that their intent had carried across, so most of
   // them left. Deep-linked intent is now honoured: ?service= preselects the
   // dropdown and ?subject= seeds the message, so the visitor lands on a form
   // that already knows why they are there.
   const [searchParams] = useSearchParams();
   const presetService = (searchParams.get("service") || "").toLowerCase();
   const presetSubject = searchParams.get("subject") || "";
   // 2026-10-09: ?scope= preselects the first intent question (e.g. a Level III
   // path card links here with its path already chosen).
   const presetScope = searchParams.get("scope") || "";

   const inferService = () => {
      if (presetService) return presetService;
      const s = presetSubject.toLowerCase();
      if (s.includes("erp")) return "erp";
      if (s.includes("twin")) return "digital-twins";
      if (s.includes("scan")) return "3d-scanning";
      if (s.includes("train")) return "training";
      if (s.includes("consult")) return "consulting";
      if (s.includes("inspect")) return "inspection";
      return "";
   };

   const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      service: inferService(),
      message: presetSubject ? `${presetSubject} — ` : "",
   });

   // Keep the form in step if the visitor arrives via an in-app link that only
   // changes the query string (React Router will not remount the component).
   useEffect(() => {
      const svc = inferService();
      if (!svc && !presetSubject) return;
      setFormData((prev) => ({
         ...prev,
         service: prev.service || svc,
         message: prev.message || (presetSubject ? `${presetSubject} — ` : ""),
      }));
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [presetService, presetSubject]);
   const [details, setDetails] = useState<Record<string, string>>(() => {
      const first = INTENT_FIELDS[presetService]?.[0];
      return presetScope && first ? { [first.name]: presetScope } : {};
   });
   const [confirmed, setConfirmed] = useState<{ id: string; service: string } | null>(null);
   const [loading, setLoading] = useState(false);
   const [success, setSuccess] = useState("");
   const formRef = useRef<HTMLFormElement>(null);

   // 2026-08-18 CRO + measurement fix.
   //
   // Measured 7-17 Aug, the only window in which all of these events existed:
   //   demo CTA clicked 95 → form_start 11 (11.6%) → lead 9 → submitted 6.
   // The form converts well once begun; 88% of the intent is lost before anyone
   // types. The 2026-07-29 fix made the form REMEMBER why the visitor came, but
   // it did not make the form VISIBLE — it sits at the bottom of a hero plus a
   // four-card grid, so a visitor arriving from a demo CTA lands above the fold
   // of a page whose point is further down, and on mobile has to scroll past
   // two full sections to reach it.
   //
   // Two changes, both scoped to visitors who arrived WITH intent (a ?service=
   // or ?subject= param, i.e. from a CTA rather than from the nav):
   //   1. Bring the form to them.
   //   2. Emit contact_form_reached, so this funnel step is measurable on its
   //      own rather than inferred from GA4 Enhanced Measurement's form_start,
   //      which only fires on interaction and therefore cannot distinguish
   //      "never arrived" from "arrived and ignored it".
   useEffect(() => {
      if (typeof window === "undefined") return;
      const arrivedWithIntent = Boolean(presetService || presetSubject);
      if (!arrivedWithIntent || !formRef.current) return;

      window.gtag?.("event", "contact_form_reached", {
         page_path: window.location.pathname,
         intent_service: presetService || "(inferred)",
         intent_subject: presetSubject || "(none)",
      });

      // Deferred a frame so layout has settled, otherwise the target offset is
      // computed against a half-rendered page and lands in the wrong place.
      const id = window.requestAnimationFrame(() => {
         const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
         formRef.current?.scrollIntoView({
            behavior: reduced ? "auto" : "smooth",
            block: "center",
         });
      });
      return () => window.cancelAnimationFrame(id);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [presetService, presetSubject]);
   const handleChange = (
      e: React.ChangeEvent<
         HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
   ) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };
   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (submitting.current) return;
      submitting.current = true;
      const enquiryId = newEnquiryId();
      const context = enquiryContext(formData.service);
      const detailLines = (INTENT_FIELDS[formData.service] || [])
         .filter((fld) => details[fld.name])
         .map((fld) => `${fld.label}: ${details[fld.name]}`)
         .join("\n");
      // 2026-10-09 sprint: lead type, pipeline tag and form-qualified flag.
      const leadType = formData.service === "training" && /ready to enrol/i.test(details.stage || "") ? "training_enrolment" : "contact";
      const pipeline = pipelineFor(context.service, leadType);
      const qualified = isQualifiedLead({ email: formData.email, company: formData.company, stage: details.stage || details.timing || "" });
      let acceptedId = "";
      let method = "smtp";
      setLoading(true);
      setSuccess("");

      try {
         // Primary path: EmailJS, straight from the browser to the
         // info@atlantisndt.com Microsoft 365 mailbox. Every contact form on
         // the site goes through EmailJS so enquiries never depend on the
         // VPS's local iRedMail/Postfix. The /api/contact relay is kept only
         // as a backup if EmailJS itself is unreachable.
         let delivered = false;
         const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
         const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
         const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;
         if (serviceId && templateId && publicKey) {
            try {
               const fullName = `${formData.firstName} ${formData.lastName}`.trim();
               await emailjs.send(
                  serviceId,
                  templateId,
                  {
                     enquiry_id: enquiryId,
                     ...context,
                     name: fullName,
                     from_name: fullName,
                     user_name: fullName,
                     email: formData.email,
                     from_email: formData.email,
                     user_email: formData.email,
                     reply_to: formData.email,
                     company: formData.company || "(not provided)",
                     usecase: formData.service || "(not selected)",
                     message:
                        `Enquiry ID: ${enquiryId}\nPipeline: ${pipeline}${qualified ? " (form-qualified)" : ""}\nService: ${context.service}\nRegion: ${context.target_region}\nForm: contact\n` + leadMetaLines(context.service, "contact", leadType) +
                        `Name:    ${fullName}\n` +
                        `Email:   ${formData.email}\n` +
                        `Phone:   ${formData.phone || "(not provided)"}\n` +
                        `Company: ${formData.company || "(not provided)"}\n` +
                        `Service: ${formData.service || "(not selected)"}\n\n` +
                        (detailLines ? `Details:\n${detailLines}\n\n` : "") +
                        `Message:\n${formData.message}`,
                     subject: `[${pipeline}] Contact form: ${fullName}${formData.company ? ` (${formData.company})` : ""}${formData.service ? ` — ${formData.service}` : ""}`,
                     to_email: "info@atlantisndt.com",
                  },
                  { publicKey },
               );
               acceptedId = enquiryId;
               method = "emailjs";
               delivered = true;
            } catch (ejErr: any) {
               console.warn("EmailJS failed, falling back to contact API:", ejErr);
            }
         }

         if (!delivered) {
            const res = await fetch("/api/contact", {
               method: "POST",
               headers: { "Content-Type": "application/json" },
               body: JSON.stringify({ ...formData, details: `Pipeline: ${pipeline}${qualified ? " (form-qualified)" : ""}\n${detailLines}`, subject: `[${pipeline}] Contact form`, enquiryId, ...context, form_id: "contact" }),
            });
            const result = await res.json().catch(() => ({} as any));
            if (!res.ok || !result?.ok || !result?.enquiryId) {
               throw new Error(result?.error || `Mail service unavailable (HTTP ${res.status})`);
            }
            acceptedId = result.enquiryId;
            method = result.fallback || "smtp";
         }

         trackAcceptedEnquiry(acceptedId, "contact", context.service, method, { lead_type: leadType, qualified });

         setSuccess("Message sent successfully!");
         setConfirmed({ id: acceptedId, service: formData.service });
         setDetails({});
         setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            company: "",
            service: "",
            message: "",
         });
      } catch (error: any) {
         console.error("Contact form error:", error);
         const errorMessage = error?.message || "Unknown error";
         setSuccess(`Failed to send message: ${errorMessage}`);
      }

      submitting.current = false;
      setLoading(false);
   };

   return (
      <div className="min-h-screen pt-20 bg-background">
         <Navigation />
         <SEOHead
            title="Contact Atlantis NDT - 24H Response [Expert Support]"
            description="Get expert NDT support in 24 hours. Contact Atlantis NDT for training, inspection, consulting. Call +1 (281) 840-8969. Free quote, multiple locations."
            keywords="contact NDT services, Atlantis NDT contact, NDT inspection quote, professional NDT consulting"
            structuredData={structuredData}
            canonical="https://atlantisndt.com/contact"
         />

         {/* Hero Section */}
         <motion.section
            className="py-20 bg-gradient-to-r from-primary/10 to-accent/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
         >
            <div className="container mx-auto px-6 text-center max-w-4xl">
               <motion.h1
                  className="text-4xl md:text-6xl font-bold mb-6"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
               >
                  Contact <span className="gradient-text">Us</span>
               </motion.h1>
               <motion.p
                  className="text-xl text-muted-foreground leading-relaxed"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
               >
                  Our expert team is ready to provide customized solutions for
                  your inspection, training, and consultancy needs.
               </motion.p>
            </div>
         </motion.section>

         {/* CONVERSION FIX 2026-09-07 — form first, cards second.
             GA4 over a single comparable window: 98 contact-CTA clicks produced
             11 form starts and 8 submits. 73% of people who START the form finish
             it, so the form converts; 89% of the loss happens before it is ever
             reached. The cause was this page order — a full py-20 grid of four
             info cards with mb-16 sat between the hero and the form, so a visitor
             arriving from an "Enquire now" click had to scroll past a screen of
             cards on desktop and several on mobile. The form now comes first. */}
         {/* Contact Form & Company Info */}
         <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
               <div className="grid lg:grid-cols-2 gap-12">
                  {/* Contact Form.
                      The entrance animation was initial={{ opacity: 0 }} with
                      whileInView — so the form rendered INVISIBLE until scrolled
                      into view. Now that it is the first thing below the hero it
                      is frequently already in the viewport on load, and an
                      opacity-0 form is the worst possible thing to show someone
                      who just clicked "Enquire now". Animate on mount instead. */}
                  <motion.div
                     initial={{ opacity: 0, y: 12 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.4 }}
                  >
                     <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                           <CardTitle className="text-2xl">
                              Get in Touch
                           </CardTitle>
                           <p className="text-muted-foreground">
                              Fill out the form and we'll respond within 24
                              hours.
                           </p>
                        </CardHeader>
                        <CardContent>
                           <form
                              ref={formRef}
                              className="space-y-6"
                              onSubmit={handleSubmit}
                           >
                              <input
                                 type="text"
                                 name="website"
                                 tabIndex={-1}
                                 autoComplete="off"
                                 style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
                                 aria-hidden="true"
                              />
                              <div className="grid md:grid-cols-2 gap-4">
                                 <div>
                                    <Label htmlFor="firstName">
                                       First Name *
                                    </Label>
                                    <Input
                                       id="firstName"
                                       name="firstName"
                                       placeholder="John"
                                       required
                                       value={formData.firstName}
                                       onChange={handleChange}
                                    />
                                 </div>
                                 <div>
                                    <Label htmlFor="lastName">
                                       Last Name *
                                    </Label>
                                    <Input
                                       id="lastName"
                                       name="lastName"
                                       placeholder="Doe"
                                       required
                                       value={formData.lastName}
                                       onChange={handleChange}
                                    />
                                 </div>
                              </div>
                              <div>
                                 <Label htmlFor="email">Email *</Label>
                                 <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="john@company.com"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                 />
                              </div>
                              <div>
                                 <Label htmlFor="phone">Phone</Label>
                                 <Input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="+1 (555) 123-4567"
                                    value={formData.phone}
                                    onChange={handleChange}
                                 />
                              </div>
                              <div>
                                 <Label htmlFor="company">Company</Label>
                                 <Input
                                    id="company"
                                    name="company"
                                    placeholder="Your Company Name"
                                    value={formData.company}
                                    onChange={handleChange}
                                 />
                              </div>
                              <div>
                                 <Label htmlFor="service">
                                    Service Interest
                                 </Label>
                                 <select
                                    id="service"
                                    name="service"
                                    className="w-full p-3 border border-input rounded-md bg-background"
                                    value={formData.service}
                                    onChange={handleChange}
                                 >
                                    {/* 2026-07-29: ERP and 3D Scanning added. GA4 shows /erp is the
                                        single largest landing page on the site (7,638 sessions/28d)
                                        and ERP demo requests arrive at /contact?subject=ERP Demo
                                        Request — but ERP was not selectable here, so those enquiries
                                        were being filed against a blank or unrelated service. */}
                                    <option value="">Select a service</option>
                                    <option value="erp">
                                       ERP &amp; Business Management Software
                                    </option>
                                    <option value="digital-twins">
                                       Digital Twins &amp; Asset Integrity
                                    </option>
                                    <option value="3d-scanning">
                                       3D Scanning &amp; Reality Capture
                                    </option>
                                    <option value="inspection">
                                       Inspection Services
                                    </option>
                                    <option value="reporting">
                                       NDT Reporting Software
                                    </option>
                                    <option value="practical-ndt">
                                       Practical NDT (3D skills simulator)
                                    </option>
                                    <option value="training">
                                       Training Programs
                                    </option>
                                    <option value="consulting">
                                       Level III Consulting
                                    </option>
                                    <option value="other">
                                       Something else
                                    </option>
                                 </select>
                              </div>
                              {(INTENT_FIELDS[formData.service] || []).length > 0 && (
                                 <div className="grid md:grid-cols-2 gap-4" data-intent-fields={formData.service}>
                                    {INTENT_FIELDS[formData.service].map((fld) => (
                                       <div key={fld.name}>
                                          <Label htmlFor={`d-${fld.name}`}>{fld.label}</Label>
                                          {fld.options ? (
                                             <select
                                                id={`d-${fld.name}`}
                                                className="w-full p-3 border border-input rounded-md bg-background"
                                                value={details[fld.name] || ""}
                                                onChange={(e) => setDetails({ ...details, [fld.name]: e.target.value })}
                                             >
                                                <option value="">Choose (optional)</option>
                                                {fld.options.map((o) => <option key={o} value={o}>{o}</option>)}
                                             </select>
                                          ) : (
                                             <Input
                                                id={`d-${fld.name}`}
                                                placeholder={fld.placeholder}
                                                value={details[fld.name] || ""}
                                                onChange={(e) => setDetails({ ...details, [fld.name]: e.target.value })}
                                             />
                                          )}
                                       </div>
                                    ))}
                                 </div>
                              )}
                              {formData.service === "inspection" && (
                                 <p className="text-xs text-muted-foreground">
                                    Drawings, ITPs or earlier reports: please don't attach them here. Reply to our acknowledgement email and they go straight to the team quoting the job.
                                 </p>
                              )}
                              {formData.service === "training" && (
                                 <p className="text-xs text-muted-foreground">
                                    Training, exam and certification are three different things: <a className="underline text-primary" href="/training#training-pathway">see how they fit together</a> before you choose.
                                 </p>
                              )}
                              <div>
                                 <Label htmlFor="message">Message *</Label>
                                 <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about your project..."
                                    rows={5}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                 />
                              </div>
                              {success && (
                                 <div className={`p-4 rounded-lg ${success.includes('Failed') ? 'bg-red-100 text-red-700 border border-red-300' : 'bg-green-100 text-green-700 border border-green-300'}`}>
                                    {success.includes('Failed') ? success : (
                                       <div className="space-y-1" data-enquiry-confirmed="1">
                                          <p className="font-semibold">Thank you, your enquiry is in.</p>
                                          {confirmed?.id && <p className="text-sm">Reference: <span className="font-mono">{confirmed.id}</span></p>}
                                          <p className="text-sm">The Atlantis NDT team will reply by email within 24 hours with next steps, usually a short call to confirm scope.</p>
                                          {confirmed && NEXT_READ[confirmed.service] && (
                                             <p className="text-sm">While you wait: <a className="underline font-medium" href={NEXT_READ[confirmed.service].path}>{NEXT_READ[confirmed.service].label} →</a></p>
                                          )}
                                       </div>
                                    )}
                                 </div>
                              )}
                              <p className="text-xs text-muted-foreground">
                                 Replies come from the Atlantis NDT team within 24 hours. Your details are used only to answer this enquiry.
                              </p>
                              <Button
                                 type="submit"
                                 className="btn-primary w-full group"
                                 disabled={loading}
                              >
                                 {loading ? "Sending..." : "Send Message"}{" "}
                                 <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                              </Button>
                           </form>
                        </CardContent>
                     </Card>
                  </motion.div>

                  {/* Company Info */}
                  <motion.div
                     initial={{ x: 50, opacity: 0 }}
                     whileInView={{ x: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8, delay: 0.2 }}
                     className="space-y-6"
                  >
                     <Card className="border-0 shadow-lg p-6">
                        <CardHeader>
                           <CardTitle className="text-2xl">
                              Why Choose Atlantis NDT?
                           </CardTitle>
                           <p className="text-muted-foreground mt-2">
                              Discover what sets us apart in Non-Destructive
                              Testing services.
                           </p>
                        </CardHeader>
                        <CardContent className="mt-6 grid gap-6">
                           {[
                              {
                                 icon: Users,
                                 title: "Expert Team",
                                 description:
                                    "Led by an ASNT NDT Level III, with field experience across multiple industries.",
                              },
                              {
                                 icon: CheckCircle2,
                                 title: "Proven Track Record",
                                 description:
                                    "1,500+ inspection activities successfully completed with high client satisfaction.",
                              },
                              {
                                 icon: Cpu,
                                 title: "Advanced Technology",
                                 description:
                                    "VR/AR training and digital twin solutions for cutting-edge NDT services.",
                              },
                              {
                                 icon: Award,
                                 title: "Industry Recognition",
                                 description:
                                    "Trusted by top companies in oil & gas, aerospace, marine, and nuclear sectors.",
                              },
                           ].map((item, index) => (
                              <motion.div
                                 key={index}
                                 className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-all cursor-pointer"
                                 initial={{ opacity: 0, y: 20 }}
                                 whileInView={{ opacity: 1, y: 0 }}
                                 viewport={{ once: true }}
                                 transition={{
                                    delay: index * 0.1,
                                    duration: 0.6,
                                 }}
                              >
                                 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-primary/20 flex items-center justify-center">
                                    <item.icon className="w-6 h-6 text-primary" />
                                 </div>
                                 <div>
                                    <h4 className="font-semibold text-lg">
                                       {item.title}
                                    </h4>
                                    <p className="text-muted-foreground text-sm">
                                       {item.description}
                                    </p>
                                 </div>
                              </motion.div>
                           ))}
                        </CardContent>
                     </Card>
                  </motion.div>
               </div>
            </div>
         </section>
         {/* Contact Info Cards */}
         <section className="py-20">
            <div className="container mx-auto px-6">
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
                  {contactInfo.map((info, index) => (
                     <ScrollReveal
                        key={index}
                        animation="fadeUp"
                        delay={index * 0.1}
                     >
                        <Card className="text-center border-0 shadow-lg hover:scale-105 transition-transform">
                           <CardContent className="p-6">
                              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                 <info.icon className="w-8 h-8 text-primary-foreground" />
                              </div>
                              <h3 className="text-lg font-bold mb-1">
                                 {info.title}
                              </h3>
                              <p className="text-primary font-semibold">
                                 {info.details}
                              </p>
                              <p className="text-muted-foreground text-sm">
                                 {info.subtitle}
                              </p>
                           </CardContent>
                        </Card>
                     </ScrollReveal>
                  ))}
               </div>
            </div>
         </section>

         {/* Emergency Section */}
         <section className="py-20 bg-gray-100 text-primary">
            <div className="container mx-auto px-6 text-center">
               <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
               >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                     Emergency Inspection Services
                  </h2>
                  <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 text-black">
                     Critical equipment failure? We provide 24/7 emergency
                     inspection services to get your operations back online
                     safely.
                  </p>
                  <Button
                     size="lg"
                     variant="outline"
                     className="bg-transparent border-primary text-primary hover:bg-primary hover:text-white"
                     onClick={() => (window.location.href = "tel:+12818408969")}
                  >
                     Emergency Hotline: +1 (281) 840-8969
                  </Button>
               </motion.div>
            </div>
         </section>
         <ContactDetails />
      </div>
   );
}
