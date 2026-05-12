import ErpIndustryPage from '@/components/ErpIndustryPage';
const data = {
  "slug": "oilfield-services",
  "name": "Oilfield Services & Wellsite Inspection",
  "title": "ERP for Oilfield Services & Wellsite Inspection Companies",
  "h1": "ERP for Oilfield Services & Wellsite Inspection",
  "desc": "Drilling rig inspection, BOP testing, casing / tubing inspection, wireline / coiled-tubing operations, frac / completion services QC, and field-service ticketing — for oilfield services companies serving upstream operators worldwide.",
  "intro": "Oilfield services companies live in the field. Drilling rigs in the Permian, Marcellus, Bakken, North Sea, Saudi Empty Quarter, Brazilian pre-salt. Wellsite inspection, BOP testing, casing / tubing inspection, wireline operations, coiled tubing, frac operations — each with its own field-execution and HSE requirements. Atlantis ERP's oilfield-services configuration is built for the field-ticketing-and-billing reality of upstream.",
  "modules": [
    "work-order-management",
    "certification-tracking",
    "project-management",
    "asset-management",
    "quality-management",
    "document-control",
    "inventory-management",
    "calibration-management"
  ],
  "regs": [
    "API Spec 4F (drilling derricks)",
    "API Spec 6A (wellhead)",
    "API Spec 16A (drill-through equipment)",
    "API Spec 16D (BOP control)",
    "API RP 53 (BOP)",
    "API RP 5A5 (OCTG inspection)",
    "API RP 5C5 / 5C6 / 5C7 (casing / tubing)",
    "ISO 13501 / 13628 (subsea)",
    "US BSEE / BOEM (offshore US)",
    "Norwegian PSA"
  ],
  "operators": [
    "ExxonMobil — upstream",
    "Chevron — upstream",
    "Shell — upstream",
    "BP — upstream",
    "ConocoPhillips — upstream",
    "Saudi Aramco upstream",
    "ADNOC Onshore",
    "PEMEX upstream",
    "Petrobras pre-salt",
    "Equinor — Norwegian shelf"
  ],
  "pain": [
    "Field-ticket capture on paper — billing disputes, days lost in invoicing",
    "Rig / BOP test scheduling on Excel — compliance findings from regulator",
    "Casing / tubing inspection records scattered — no aggregated wellbore data",
    "OCTG inventory (drill collars, casing, tubing) — no real-time location tracking",
    "Technician certification (BOSIET / HUET / H2S Alive / IADC RigPass) renewal misses"
  ],
  "faqs": [
    [
      "Does it support API 5C5 / 5C6 / 5C7 casing / tubing inspection per joint?",
      "Yes. Per-joint inspection records — joint ID, manufacturer, lot, age, prior runs, current inspection results (UT thickness, surface examination, hardness, drift) — are tracked per API 5C5. The wellbore inventory is built from inspection records, supporting integrity decisions on which joints to re-run vs. retire."
    ],
    [
      "How are BOP tests scheduled and documented?",
      "BOP tests per API RP 53 (weekly low-pressure + high-pressure, ram tests, annular tests) are scheduled per rig and tracked against well construction phase. Test results are documented with pressure trace, time hold, and pass / fail; pressure-test diagrams attach automatically. Regulator submission per BSEE / NOPSEMA / Petroleum Safety Authority is supported."
    ],
    [
      "Can field-ticket data flow to invoicing?",
      "Yes. Field-service tickets are captured in the mobile app at the wellsite — service hours, equipment day-rates, consumables, mileage, per-diem — with customer-rep signature on-site. Approved tickets flow to invoicing with proper customer / well / cost-code mapping. Disputes drop dramatically vs. paper tickets."
    ],
    [
      "Does it track OCTG (oil country tubular goods) inventory?",
      "Yes. OCTG inventory — drill pipe, drill collars, heavy-weight drill pipe (HWDP), casing, tubing — is tracked per joint by serial number. Joint condition (new, used-good, used-limited, retired), inspection history, accumulated rotating hours, footage drilled, and location (rack, well, in-transit) are maintained."
    ],
    [
      "How are oilfield-specific safety certifications (BOSIET, H2S Alive, IADC RigPass) tracked?",
      "BOSIET / FOET / HUET, H2S Alive, IADC RigPass, OSHA HAZWOPER, MEDIC First Aid, RIG-PASS variants, and confined-space entry quals are tracked per technician with expiry alerts. Mobilization-to-rig matching ensures only fully-qualified personnel are dispatched."
    ]
  ]
};
export default function ErpIndustry_oilfield_services() { return <ErpIndustryPage {...data} />; }
