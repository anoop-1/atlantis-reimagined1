import ErpIndustryPage from '@/components/ErpIndustryPage';
const data = {
  "slug": "marine-survey-companies",
  "name": "Marine Survey & Offshore Inspection",
  "title": "ERP for Marine Survey & Offshore Inspection Companies",
  "h1": "ERP for Marine Survey & Offshore Inspection",
  "desc": "Hull condition surveys, class-society alignment (DNV, ABS, LR, BV, ClassNK, RINA, KR), IMCA D-018 IRM, offshore inspection campaign management, ROV operations, and FPSO life-extension assessment workflows.",
  "intro": "Marine survey and offshore inspection sit at the intersection of class-society rules, flag-state requirements, IMO regulations, and operator-specific integrity programs. A surveyor in Singapore today might inspect a Panama-flagged tanker classed by DNV, en route to Houston where USCG will inspect on arrival, with cargo destined for an EU port. Atlantis ERP's marine-survey configuration manages this complexity natively.",
  "modules": [
    "work-order-management",
    "certification-tracking",
    "asset-management",
    "project-management",
    "document-control",
    "quality-management",
    "audit-management",
    "inventory-management"
  ],
  "regs": [
    "IMO MARPOL / SOLAS / STCW",
    "IACS UR / common rules",
    "DNV / ABS / LR / BV / ClassNK / RINA / KR class rules",
    "IMCA D-018 IRM (offshore IRM)",
    "IMCA C-002 (diving inspection)",
    "API RP 2A (offshore platforms)",
    "API RP 17B (subsea)",
    "ISO 19901-9 (offshore reliability)",
    "STCW certification"
  ],
  "operators": [
    "Shell — upstream / marine",
    "BP — marine",
    "TotalEnergies — FPSO operations",
    "Equinor — Norwegian shelf",
    "MODEC — FPSO operator",
    "SBM Offshore — FPSO",
    "Yinson — FPSO",
    "Bumi Armada — FPSO",
    "Lloyd's Register (class)",
    "DNV (class)"
  ],
  "pain": [
    "IACS class-society reporting in Word / Excel — manual reformatting per society",
    "ROV inspection footage management — terabytes of video without indexing",
    "IMCA D-018 inspection-record format compliance — paper records in field",
    "FPSO surveyor team rotation — qualifications expire mid-tour",
    "Hull life-extension assessment — corrosion / cracking data scattered across legacy surveys"
  ],
  "faqs": [
    [
      "Does it support IMCA D-018 inspection record formats?",
      "Yes. IMCA D-018 Inspection, Repair and Maintenance (IRM) record formats are native. Inspection findings with type, location (member ID + coordinate), severity, and recommendation are captured per IMCA template. Photo / video evidence attaches per finding. ROV inspection runs link to subsea inspection record. Output PDF matches the IMCA standard format expected by class and operator."
    ],
    [
      "How are class-society survey records organized?",
      "Each vessel has a survey schedule per class (DNV / ABS / LR / BV / ClassNK / RINA / KR) covering annual, intermediate, renewal, dry-dock, in-water, and continuous machinery survey cycles. Each survey item has its scope, methodology, surveyor, and result. Class society reporting formats (PDF and class-society electronic submission) are generated from the underlying records."
    ],
    [
      "Can it manage ROV inspection footage and findings?",
      "Yes. ROV video files (typically MP4 / MOV) are attached per inspection run with timestamp and bottom-time metadata. Findings are indexed at video timecode — a click jumps to the relevant footage. Video is stored in cloud object storage with bandwidth-friendly streaming and high-resolution download for review. Class-society submission packages include indexed video clips and still frames."
    ],
    [
      "How is FPSO life-extension assessment supported?",
      "FPSO life-extension under DNV-OS-C401 / API RP 2FPS requires aggregation of decades of hull, mooring, riser, topside, and process-equipment inspection data. The system maintains a unified asset register with all inspection history, fatigue analysis data, corrosion mapping, and remaining-life forecast per structural element. Life-extension assessment reports are assembled from the underlying data."
    ],
    [
      "Does it handle STCW + IMCA + class-society qualification for surveyors?",
      "Yes. Surveyor qualifications under STCW (Standards of Training, Certification and Watchkeeping), IMCA Diver Medical Examiner / IRM Inspector, class-society Senior Surveyor accreditation, CSWIP 3.1U / 3.2U / 3.3U underwater inspector, and IIMS marine surveyor certificates are tracked with expiry alerts. Mobilization checklists ensure no surveyor sails without all required qualifications current."
    ]
  ]
};
export default function ErpIndustry_marine_survey_companies() { return <ErpIndustryPage {...data} />; }
