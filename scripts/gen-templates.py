"""Generate native xlsx + docx templates for /public/templates/.
Run from project root: python scripts/gen-templates.py
"""
import os
from openpyxl import Workbook
from openpyxl.styles import Font, Alignment, PatternFill, Border, Side
from openpyxl.utils import get_column_letter
from docx import Document
from docx.shared import Pt, RGBColor, Inches, Cm
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_ALIGN_VERTICAL

OUT = "public/templates"
os.makedirs(OUT, exist_ok=True)

# ============================================================
# Helpers
# ============================================================
BRAND = "1F4E79"
BRAND_LIGHT = "DDEBF7"
ACCENT = "C00000"
HEADER_FILL = PatternFill(start_color=BRAND, end_color=BRAND, fill_type="solid")
HEADER_LIGHT = PatternFill(start_color=BRAND_LIGHT, end_color=BRAND_LIGHT, fill_type="solid")
HEADER_FONT = Font(name="Calibri", size=11, bold=True, color="FFFFFF")
BOLD = Font(name="Calibri", size=11, bold=True)
CENTER = Alignment(horizontal="center", vertical="center", wrap_text=True)
LEFT = Alignment(horizontal="left", vertical="center", wrap_text=True)
THIN = Side(border_style="thin", color="666666")
BORDER = Border(left=THIN, right=THIN, top=THIN, bottom=THIN)

def xlsx_set_widths(ws, widths):
    for i, w in enumerate(widths, 1):
        ws.column_dimensions[get_column_letter(i)].width = w

def xlsx_title_row(ws, row, title, ncols, color=BRAND):
    ws.merge_cells(start_row=row, end_row=row, start_column=1, end_column=ncols)
    cell = ws.cell(row=row, column=1, value=title)
    cell.font = Font(name="Calibri", size=16, bold=True, color="FFFFFF")
    cell.alignment = CENTER
    cell.fill = PatternFill(start_color=color, end_color=color, fill_type="solid")
    ws.row_dimensions[row].height = 30

def xlsx_section(ws, row, title, ncols, color=BRAND_LIGHT, dark=False):
    ws.merge_cells(start_row=row, end_row=row, start_column=1, end_column=ncols)
    cell = ws.cell(row=row, column=1, value=title)
    cell.font = Font(name="Calibri", size=12, bold=True, color="FFFFFF" if dark else "1F4E79")
    cell.alignment = LEFT
    cell.fill = PatternFill(start_color=color, end_color=color, fill_type="solid")
    ws.row_dimensions[row].height = 22

def xlsx_header(ws, row, headers):
    for i, h in enumerate(headers, 1):
        c = ws.cell(row=row, column=i, value=h)
        c.font = HEADER_FONT
        c.alignment = CENTER
        c.fill = HEADER_FILL
        c.border = BORDER
    ws.row_dimensions[row].height = 28

def xlsx_data_row(ws, row, values):
    for i, v in enumerate(values, 1):
        c = ws.cell(row=row, column=i, value=v)
        c.alignment = LEFT if i <= 2 else CENTER
        c.border = BORDER
        c.font = Font(name="Calibri", size=10)
    ws.row_dimensions[row].height = 22

def xlsx_brand_footer(ws, row, ncols):
    ws.merge_cells(start_row=row, end_row=row, start_column=1, end_column=ncols)
    cell = ws.cell(row=row, column=1,
                   value="© Atlantis NDT — Free template. Customize for your specific application. "
                         "Demo: info@atlantisndt.com | atlantisndt.com")
    cell.font = Font(name="Calibri", size=9, italic=True, color="666666")
    cell.alignment = CENTER

# ============================================================
# 1) NDT Inspection Checklist (XLSX)
# ============================================================
def make_inspection_checklist():
    wb = Workbook()
    ws = wb.active
    ws.title = "NDT Inspection Checklist"
    xlsx_set_widths(ws, [4, 50, 12, 12, 12, 25])

    xlsx_title_row(ws, 1, "NDT Inspection Checklist — Pre / During / Post", 6)
    ws.cell(row=2, column=1, value="Project:").font = BOLD
    ws.cell(row=2, column=4, value="Date:").font = BOLD
    ws.cell(row=3, column=1, value="Client:").font = BOLD
    ws.cell(row=3, column=4, value="Inspector:").font = BOLD
    ws.cell(row=4, column=1, value="Asset / Equipment:").font = BOLD
    ws.cell(row=4, column=4, value="Method:").font = BOLD
    ws.cell(row=5, column=1, value="Reference Standards:").font = BOLD
    ws.cell(row=5, column=4, value="Procedure No.:").font = BOLD

    sections = [
        ("PRE-INSPECTION (before mobilization)", [
            "Inspection procedure reviewed and approved (latest revision)",
            "Inspector certification current — ASNT/ISO 9712/PCN scope verified",
            "Calibration certificates current — UT block, gauge, source activity",
            "Reference standards available — applicable code (ASME V, API 510/570/653)",
            "Client written practice / SAEP / ACS / DEP reviewed",
            "PPE issued — coveralls, hard hat, safety glasses, gloves, hearing protection",
            "Work permit / PTW issued — hot work / confined space / radiation as applicable",
            "JSA / risk assessment completed and signed by all crew",
            "Equipment functional check completed on-site",
            "Acceptance criteria reviewed and agreed with client / engineer",
            "Drawings / P&ID / isometric / weld map available",
            "Previous inspection records reviewed (if re-inspection)",
        ]),
        ("DURING INSPECTION", [
            "Surface preparation per procedure — cleaning, grinding, etching",
            "Couplant / penetrant / developer applied per procedure",
            "Reference standard checked — block, IIW, V1/V2, ASME basic block",
            "Probe / source / detector verified for the technique",
            "Scan plan executed — coverage % verified",
            "Indications marked + photographed with scale + location reference",
            "Indication sizing per procedure — length / depth / height",
            "Data recorded in field log / report draft",
            "Each indication classified — relevant / non-relevant / acceptable / reject",
            "Hold points notified to client / engineer in advance",
            "Operating-condition data logged (temperature, pressure) where required",
            "Reference standards re-verified at end of shift (calibration check)",
        ]),
        ("POST-INSPECTION", [
            "Inspection report draft completed — code-format (API / ASME)",
            "Photos and data attachments compiled",
            "Acceptance / reject summary clear and unambiguous",
            "Repair / rework instructions issued for rejected items",
            "Report reviewed by Level III / supervisor",
            "Customer-format formatting applied (per client written practice)",
            "Distribution list — owner, inspector body, regulator copies",
            "Records archived per retention schedule (typically 7 years)",
            "Site demobilization — equipment recovered, calibration logged",
            "Hazardous materials disposal — penetrant fluids, developer, radiography waste",
            "Lessons learned captured for next campaign",
            "Invoice / time sheet finalized for billing",
        ]),
    ]

    row = 7
    for section_title, items in sections:
        row += 1
        xlsx_section(ws, row, section_title, 6, color=BRAND, dark=True)
        row += 1
        xlsx_header(ws, row, ["#", "Item", "Pass / Fail / N/A", "Initial", "Date", "Comments / Reference"])
        for i, item in enumerate(items, 1):
            row += 1
            xlsx_data_row(ws, row, [i, item, "", "", "", ""])

    row += 2
    xlsx_section(ws, row, "Sign-off", 6, color=BRAND_LIGHT)
    row += 1
    xlsx_header(ws, row, ["Role", "Name", "ASNT Cert No.", "Method/Level", "Signature", "Date"])
    for role in ["Inspector", "Senior Inspector / Witness", "Level III Review", "Client Representative"]:
        row += 1
        xlsx_data_row(ws, row, [role, "", "", "", "", ""])

    row += 2
    xlsx_brand_footer(ws, row, 6)
    wb.save(f"{OUT}/ndt-inspection-checklist.xlsx")

# ============================================================
# 2) API 653 Tank Inspection Template (XLSX) — multi-sheet
# ============================================================
def make_api653_template():
    wb = Workbook()

    # Sheet: Cover
    cv = wb.active
    cv.title = "Cover"
    xlsx_set_widths(cv, [4, 30, 30, 30])
    xlsx_title_row(cv, 1, "API 653 Aboveground Storage Tank Inspection Record", 4)
    info = [
        ("Tank Tag No.", "Tank Description"),
        ("Site / Location", "Inspection Date"),
        ("Diameter (ft / m)", "Height (ft / m)"),
        ("Product / Service", "Specific Gravity"),
        ("Design Standard", "Year of Construction"),
        ("Last Internal Inspection", "Next Internal Due"),
        ("Last External Inspection", "Next External Due"),
        ("Foundation Type", "Roof Type (Fixed / Floating / IFR)"),
        ("Shell Material", "Floor Material"),
        ("Lining (Y/N + type)", "Cathodic Protection (Y/N + type)"),
        ("Inspector Name", "API 653 Cert No."),
        ("Inspection Type", "Inspection Result (Pass / Conditional / Fail)"),
    ]
    r = 3
    for left, right in info:
        cv.cell(row=r, column=1, value=left).font = BOLD
        cv.cell(row=r, column=2, value="").border = BORDER
        cv.cell(row=r, column=3, value=right).font = BOLD
        cv.cell(row=r, column=4, value="").border = BORDER
        r += 1
    r += 2
    xlsx_brand_footer(cv, r, 4)

    # Sheet: Shell UT Thickness
    sh = wb.create_sheet("Shell UT Thickness")
    xlsx_set_widths(sh, [10, 12, 14, 14, 14, 14, 14, 14, 14, 14, 14, 16])
    xlsx_title_row(sh, 1, "API 653 §6.4 Shell Thickness Measurement", 12)
    xlsx_header(sh, 3, ["Course", "Elev (ft)", "Nominal t (in)", "Min t1 (in)", "Min t2 (in)", "Min t3 (in)", "Min t4 (in)", "Min t5 (in)", "Min t6 (in)", "Avg t (in)", "Min reading", "Remaining Life (yr)"])
    for c in range(1, 11):
        sh.cell(row=4 + c - 1, column=1, value=f"Course {c}")
    for r in range(4, 14):
        for c in range(1, 13):
            sh.cell(row=r, column=c).border = BORDER
            if c > 1:
                sh.cell(row=r, column=c).alignment = CENTER

    # Sheet: Floor / Bottom
    fl = wb.create_sheet("Floor Inspection")
    xlsx_set_widths(fl, [4, 35, 14, 14, 14, 25])
    xlsx_title_row(fl, 1, "API 653 §6.3 Floor / Bottom Inspection", 6)
    xlsx_header(fl, 3, ["#", "Inspection Item", "Pass / Fail", "Min Thickness", "Required Min", "Comments"])
    floor_items = [
        "Sketch plate inspection — visual external",
        "Annular ring thickness measurement",
        "Floor plate UT thickness — center grid (per API 653 §6.3.2)",
        "Floor seam weld visual inspection",
        "Floor scanning — MFL / vacuum box / floor scanner (if internal)",
        "Floor lining condition (if applicable)",
        "Sump / drainage system condition",
        "Underside corrosion observed (Y/N + extent)",
        "Foundation chime contact / settlement measurement",
        "Cathodic protection survey results",
    ]
    for i, item in enumerate(floor_items, 1):
        xlsx_data_row(fl, 3 + i, [i, item, "", "", "", ""])

    # Sheet: Roof Inspection
    rf = wb.create_sheet("Roof Inspection")
    xlsx_set_widths(rf, [4, 35, 14, 14, 14, 25])
    xlsx_title_row(rf, 1, "API 653 §6.5 Roof Inspection", 6)
    xlsx_header(rf, 3, ["#", "Inspection Item", "Pass / Fail", "Min Thickness", "Required Min", "Comments"])
    roof_items = [
        "Fixed roof / IFR external visual",
        "Roof plate UT thickness — grid pattern",
        "Floating roof primary seal condition",
        "Floating roof secondary seal condition",
        "Roof drain operability",
        "Roof support / rafter condition",
        "Roof manway / nozzle reinforcing pad",
        "Roof emergency vent function",
        "Walking lane / hand-rail integrity",
        "Atmospheric venting / PV valve check",
    ]
    for i, item in enumerate(roof_items, 1):
        xlsx_data_row(rf, 3 + i, [i, item, "", "", "", ""])

    # Sheet: Settlement Survey
    ss = wb.create_sheet("Settlement Survey")
    xlsx_set_widths(ss, [8, 16, 16, 16, 20])
    xlsx_title_row(ss, 1, "API 653 Annex B Settlement Survey", 5)
    xlsx_header(ss, 3, ["Station", "Elev (ft / m)", "Diff vs Mean", "% Diff", "Status (Pass/Fail)"])
    for s in range(1, 25):
        xlsx_data_row(ss, 3 + s, [f"S{s}", "", "", "", ""])

    # Sheet: Recommendations
    rc = wb.create_sheet("Recommendations")
    xlsx_set_widths(rc, [4, 14, 50, 14, 14, 20])
    xlsx_title_row(rc, 1, "Recommendations & Follow-up Actions", 6)
    xlsx_header(rc, 3, ["#", "Priority", "Description", "API 653 Ref.", "Due Date", "Responsible"])
    for i in range(1, 11):
        xlsx_data_row(rc, 3 + i, [i, "", "", "", "", ""])

    # Sheet: Sign-off
    so = wb.create_sheet("Sign-off")
    xlsx_set_widths(so, [4, 25, 20, 18, 14])
    xlsx_title_row(so, 1, "Sign-off", 5)
    xlsx_header(so, 3, ["#", "Role", "Name", "API 653 Cert No.", "Date"])
    for i, r in enumerate(["API 653 Inspector", "Owner / Operator Engineer", "Independent Review", "Regulatory (if applicable)"], 1):
        xlsx_data_row(so, 3 + i, [i, r, "", "", ""])

    xlsx_brand_footer(so, 10, 5)
    wb.save(f"{OUT}/api-653-tank-inspection-template.xlsx")

# ============================================================
# 3) NDT Safety Checklist (XLSX)
# ============================================================
def make_safety_checklist():
    wb = Workbook()
    ws = wb.active
    ws.title = "NDT Safety Checklist"
    xlsx_set_widths(ws, [4, 50, 12, 12, 12, 25])

    xlsx_title_row(ws, 1, "NDT Safety Checklist — Worksite, RT, Electrical, Chemical, Confined Space", 6)
    ws.cell(row=2, column=1, value="Project / Site:").font = BOLD
    ws.cell(row=2, column=4, value="Date:").font = BOLD
    ws.cell(row=3, column=1, value="Crew Lead:").font = BOLD
    ws.cell(row=3, column=4, value="JSA Ref.:").font = BOLD

    sections = [
        ("GENERAL WORKSITE", [
            "Site induction / orientation completed for all crew",
            "PTW (Permit to Work) issued and posted at worksite",
            "Hazard communication briefing complete — site-specific risks reviewed",
            "Emergency assembly point identified — route and muster station",
            "First-aid kit on-site + AED location known",
            "Fire extinguishers on-site, current inspection tag",
            "Communication — radio / mobile signal verified",
            "PPE — hard hat, safety glasses, gloves, FRC, steel-toe boots",
            "Lockout / Tagout (LOTO) verified where applicable",
            "Spill kit on-site for chemical / fluid containment",
            "Site speed limit + traffic rules observed",
            "Buddy system in place for elevated / isolated work",
        ]),
        ("RADIATION SAFETY (RT)", [
            "Radiography work permit issued — DOT / state authority compliance",
            "Source serial number + activity verified at SOE start",
            "Source / collimator transport documentation per IAEA TS-R-1",
            "Survey meter calibrated within 12 months — battery checked",
            "Survey meter functional check at start of shift — known source",
            "Dosimetry — TLD / OSL badge + pocket dosimeter for all radiographer crew",
            "Radiation area barricades + signage installed (high / low / restricted)",
            "Boundary radiation level confirmed — 2 mR/hr at boundary, 100 mR/hr inside RA",
            "Watchdog / standby person assigned during exposure",
            "Source-position verification — collimator + film / DR setup",
            "Cyclic monitoring of dose rate during shoot",
            "Source return-to-position confirmed via dual indicator (mechanical + survey)",
            "Daily survey log completed and signed",
            "Source storage — locked, ventilated, shielded enclosure post-shift",
        ]),
        ("ELECTRICAL SAFETY", [
            "GFCI / RCD on all 110V / 230V site power",
            "Cables inspected — no damage, kinks, exposed conductors",
            "Equipment grounded + bonded where applicable",
            "Generators positioned with adequate ventilation",
            "Magnetic particle yoke + prods — insulation intact",
            "Eddy current bench / portable — earthing verified",
            "Battery banks (for portable UT scopes) — vented, secured",
            "Hot work permit (welding / grinding) if applicable",
        ]),
        ("CHEMICAL SAFETY (PT / MT / Coatings)", [
            "SDS available for all chemicals on-site",
            "Solvent removable penetrant — flash point + ventilation OK",
            "Aerosol cans — date checked, no overheating",
            "Eyewash + emergency shower within 10 sec of chemical use",
            "Skin protection — nitrile / neoprene gloves per SDS",
            "Respiratory protection where required — fit-test current",
            "Waste container labeled — hazardous waste segregation",
            "Spill response materials staged near chemical use",
        ]),
        ("CONFINED SPACE / HEIGHT / OFFSHORE", [
            "Confined space entry permit issued — atmosphere tested",
            "Continuous gas monitoring (O₂, H₂S, LEL, CO) inside CS",
            "Rescue plan + retrieval gear on-site",
            "Attendant outside CS — log entries / exits",
            "Working at heights — fall protection (harness, lanyard, anchor)",
            "Scaffold tagged and inspected for current shift",
            "Offshore mobilization — BOSIET / HUET / FOET current",
            "MEDIC / sea-survival currency verified",
            "Lifejacket + EPIRB / PLB for offshore work",
        ]),
    ]

    row = 5
    for stitle, items in sections:
        row += 1
        xlsx_section(ws, row, stitle, 6, color=BRAND, dark=True)
        row += 1
        xlsx_header(ws, row, ["#", "Item", "Pass / Fail / N/A", "Initial", "Date", "Comments / Action"])
        for i, item in enumerate(items, 1):
            row += 1
            xlsx_data_row(ws, row, [i, item, "", "", "", ""])

    row += 2
    xlsx_section(ws, row, "Crew Sign-off", 6, color=BRAND_LIGHT)
    row += 1
    xlsx_header(ws, row, ["Name", "Role", "Cert No.", "Signature", "Date", "Comments"])
    for _ in range(8):
        row += 1
        xlsx_data_row(ws, row, ["", "", "", "", "", ""])

    row += 2
    xlsx_brand_footer(ws, row, 6)
    wb.save(f"{OUT}/ndt-safety-checklist.xlsx")

# ============================================================
# 4) Training Requirements Matrix (XLSX)
# ============================================================
def make_training_matrix():
    wb = Workbook()
    ws = wb.active
    ws.title = "Training Matrix"
    xlsx_set_widths(ws, [22, 14, 18, 18, 18, 22, 22])

    xlsx_title_row(ws, 1, "NDT Training Requirements Matrix — ASNT SNT-TC-1A / ISO 9712 / PCN", 7)
    xlsx_header(ws, 3, ["Method", "Level", "ASNT Training (hrs)", "ASNT Experience (hrs)", "ISO 9712 Training (hrs)", "ISO 9712 Min Experience (months)", "PCN Equivalent Requirements"])

    data = [
        ("Ultrasonic Testing (UT)", "Level I", 40, 210, 40, 3, "PCN UT Level 1 — 40 hr training + 3 mo OJT"),
        ("Ultrasonic Testing (UT)", "Level II", 40, 630, 80, 9, "PCN UT Level 2 — 80 hr training + 9 mo OJT"),
        ("Ultrasonic Testing (UT)", "Level III", "Per CP-189", "≥ 4 yr", "Per ISO 9712", "≥ 4 yr", "PCN Level 3 — ASNT/ISO eq."),
        ("Radiographic Testing (RT)", "Level I", 40, 210, 40, 3, "PCN RT Level 1 — 40 hr + 3 mo OJT"),
        ("Radiographic Testing (RT)", "Level II", 40, 630, 80, 9, "PCN RT Level 2 — 80 hr + 9 mo OJT"),
        ("Magnetic Particle (MT)", "Level I", 12, 130, 16, 1, "PCN MT Level 1"),
        ("Magnetic Particle (MT)", "Level II", 24, 390, 16, 3, "PCN MT Level 2"),
        ("Liquid Penetrant (PT)", "Level I", 8, 130, 16, 1, "PCN PT Level 1"),
        ("Liquid Penetrant (PT)", "Level II", 16, 390, 16, 3, "PCN PT Level 2"),
        ("Eddy Current (ET)", "Level I", 40, 210, 40, 3, "PCN ET Level 1"),
        ("Eddy Current (ET)", "Level II", 40, 630, 80, 9, "PCN ET Level 2"),
        ("Visual Testing (VT)", "Level I", 8, 130, 16, 1, "PCN VT Level 1"),
        ("Visual Testing (VT)", "Level II", 16, 390, 16, 3, "PCN VT Level 2"),
        ("Phased Array UT (PAUT)", "Level II", 80, 630, 80, 9, "PCN PAUT 80 hr + 9 mo OJT"),
        ("Time of Flight Diffraction (TOFD)", "Level II", 40, 320, 40, 6, "PCN TOFD 40 hr + 6 mo OJT"),
        ("Long Range UT (LRUT/GWT)", "Level II", 40, 320, 40, 6, "Per scheme certification"),
        ("AUT (Automated UT)", "Level II", 40, 320, 40, 6, "PCN AUT competency"),
        ("Computed Radiography (CR)", "Level II", 16, 210, 16, 3, "Add-on to RT Level II"),
        ("Digital Radiography (DR)", "Level II", 16, 210, 16, 3, "Add-on to RT Level II"),
    ]
    for i, row in enumerate(data, 4):
        xlsx_data_row(ws, i, row)
    for c in range(1, 8):
        ws.cell(row=4, column=c).font = BOLD if c == 1 else Font(name="Calibri", size=10)

    # Notes section
    n = 4 + len(data) + 2
    xlsx_section(ws, n, "Notes", 7, color=BRAND_LIGHT)
    notes = [
        "ASNT SNT-TC-1A 2024 edition values shown; CP-189-2020 may apply for some employers.",
        "ISO 9712:2021 training-hour minima shown; PCN GEN Issue 12 may impose additional requirements.",
        "Vision acuity (Jaeger J1/J2) + color discrimination annually for all certified personnel.",
        "Re-certification: ASNT 5-yr employer recert / ACCP 5-yr ASNT recert / ISO 9712 5-yr / PCN 5-yr.",
        "Sector / industry add-ons may require additional training (NAS-410, Boeing D-590, Saudi Aramco SAEP-1142, ADNOC ACS).",
        "Levels III: 4-year minimum experience including 1 year in the specific method.",
    ]
    for i, note in enumerate(notes, 1):
        ws.cell(row=n + i, column=1, value=f"  • {note}").alignment = LEFT
        ws.merge_cells(start_row=n + i, end_row=n + i, start_column=1, end_column=7)

    xlsx_brand_footer(ws, n + len(notes) + 2, 7)
    wb.save(f"{OUT}/training-requirements-matrix.xlsx")

# ============================================================
# DOCX helpers
# ============================================================
def docx_setup(doc, title):
    section = doc.sections[0]
    section.top_margin = Cm(2)
    section.bottom_margin = Cm(2)
    section.left_margin = Cm(2)
    section.right_margin = Cm(2)
    style = doc.styles['Normal']
    style.font.name = "Calibri"
    style.font.size = Pt(11)
    # Header
    h = doc.add_heading(title, level=0)
    h.alignment = WD_ALIGN_PARAGRAPH.CENTER
    for run in h.runs:
        run.font.color.rgb = RGBColor(0x1F, 0x4E, 0x79)
    # Sub-line
    p = doc.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = p.add_run("Atlantis NDT — Free Editable Template")
    r.italic = True
    r.font.color.rgb = RGBColor(0x66, 0x66, 0x66)
    r.font.size = Pt(10)
    doc.add_paragraph()

def docx_section(doc, text, level=1):
    h = doc.add_heading(text, level=level)
    for run in h.runs:
        run.font.color.rgb = RGBColor(0x1F, 0x4E, 0x79)

def docx_label(doc, label, value=""):
    p = doc.add_paragraph()
    r1 = p.add_run(f"{label}: ")
    r1.bold = True
    p.add_run(value)

def docx_table(doc, headers, rows):
    table = doc.add_table(rows=1 + len(rows), cols=len(headers))
    table.style = "Light Grid Accent 1"
    for i, h in enumerate(headers):
        cell = table.rows[0].cells[i]
        cell.text = h
        for p in cell.paragraphs:
            for r in p.runs:
                r.bold = True
                r.font.color.rgb = RGBColor(0xFF, 0xFF, 0xFF)
        cell._tc.get_or_add_tcPr().append(
            __import__('docx.oxml.ns', fromlist=['qn']).qn  # placeholder
        )  # will fail silently - styling minimal
    for ri, row in enumerate(rows, 1):
        for ci, val in enumerate(row):
            table.rows[ri].cells[ci].text = str(val)

def docx_footer(doc):
    doc.add_paragraph()
    p = doc.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = p.add_run("© Atlantis NDT — Free editable template. Customize for your method, code, and customer requirements. "
                  "Demo: info@atlantisndt.com  •  atlantisndt.com")
    r.italic = True
    r.font.color.rgb = RGBColor(0x66, 0x66, 0x66)
    r.font.size = Pt(9)

# ============================================================
# 5) NDT Procedure Template (DOCX)
# ============================================================
def make_procedure_template():
    doc = Document()
    docx_setup(doc, "NDT Procedure Template — SNT-TC-1A / ISO 9712 Compliant")

    docx_section(doc, "1. Procedure Identification")
    for k, v in [
        ("Procedure Number", "[XXX-NDT-001]"),
        ("Revision", "[Rev 0]"),
        ("Effective Date", "[YYYY-MM-DD]"),
        ("Method", "[UT / RT / MT / PT / ET / VT / PAUT / TOFD]"),
        ("Application", "[e.g., Weld Inspection, Thickness Measurement, Tube Bundle Inspection]"),
        ("Material", "[CS / SS / Duplex / Cu / Al / Composite]"),
        ("Thickness Range", "[e.g., 6 mm – 100 mm]"),
        ("Geometry", "[e.g., Butt Weld, Pipe, Plate, Tube, Tank Shell]"),
        ("Reference Codes", "[ASME Section V Article 4 / API 510 / EN ISO 17640 / AWS D1.1]"),
        ("Customer / Project", "[Owner-Operator / EPC / Project No.]"),
        ("Prepared by", "[Name, ASNT Level III Cert No.]"),
        ("Reviewed by", "[Name, Position]"),
        ("Approved by", "[Name, Position]"),
    ]:
        docx_label(doc, k, v)

    docx_section(doc, "2. Scope")
    doc.add_paragraph(
        "This procedure defines the requirements for [Method] examination of [Application] in accordance with "
        "[Reference Code(s)] for [Customer]. The procedure applies to [Material] components in the thickness "
        "range of [Thickness Range] and geometry [Geometry]. Examination shall be performed by personnel "
        "qualified per [ASNT SNT-TC-1A / ISO 9712 / PCN] to the appropriate Level for the activity being "
        "performed."
    )

    docx_section(doc, "3. Reference Documents")
    refs = [
        "ASNT SNT-TC-1A (latest edition) — Recommended Practice for Personnel Qualification and Certification",
        "ASNT CP-189 (latest edition) — Standard for Qualification and Certification (if applicable)",
        "ISO 9712:2021 — NDT Personnel Qualification and Certification",
        "ASME Section V (latest edition) — NDE",
        "ASME Section VIII Division 1 — Pressure Vessels (acceptance criteria)",
        "ASME B31.3 — Process Piping (acceptance criteria)",
        "API 510 / 570 / 653 / 580 / 581 — In-service inspection codes",
        "[Customer Written Practice / Saudi Aramco SAEP / ADNOC ACS / Shell DEP — as applicable]",
        "Equipment manufacturer manual — [insert]",
        "[Calibration / reference block standard]",
    ]
    for r in refs:
        doc.add_paragraph(r, style="List Bullet")

    docx_section(doc, "4. Personnel Qualification")
    doc.add_paragraph(
        "Personnel performing the examination shall be qualified and certified to the appropriate Level per "
        "the employer's Written Practice [WPN-NDT-001] or per [ISO 9712 / PCN] as applicable. Level I "
        "personnel shall work under the supervision of qualified Level II or Level III. Level II personnel "
        "perform the examination, evaluate results, and prepare reports. Level III personnel are responsible "
        "for procedure approval, technique development, and final evaluation of indications."
    )
    docx_label(doc, "Minimum Level for Examination", "[Level II]")
    docx_label(doc, "Procedure Approval Level", "[Level III]")
    docx_label(doc, "Vision Acuity", "Annual Jaeger J1/J2 + Ishihara color")

    docx_section(doc, "5. Equipment & Materials")
    table = doc.add_table(rows=1, cols=4)
    table.style = "Light Grid Accent 1"
    hdr = table.rows[0].cells
    for i, h in enumerate(["Item", "Specification", "Make / Model / Standard", "Calibration / Verification"]):
        hdr[i].text = h
    for row_data in [
        ("Instrument", "[e.g., Digital UT flaw detector]", "[Olympus EPOCH 650 / Sonatest D70]", "Manufacturer functional check + linearity per ASME V"),
        ("Probe / Source", "[e.g., 5 MHz, Ø10 mm angle beam 60° / 45°]", "[Olympus / Eddyfi / Sonatest]", "Per ASME V Article 4 setup"),
        ("Couplant", "[ASTM E114 acceptable; e.g., Sonotech Ultragel II]", "[Manufacturer]", "Compatible with material"),
        ("Reference Block", "[IIW V1 / V2 / ASME basic / customer-specific]", "[Steel block, traceable]", "Per ASME V Annex"),
        ("Calibration Block", "[Step-wedge / DAC block]", "[As applicable]", "Verify before each scan"),
        ("Other Equipment", "[Survey meter / film badge / penetrant kit]", "[As applicable]", "Current calibration"),
    ]:
        row = table.add_row().cells
        for i, val in enumerate(row_data):
            row[i].text = val

    docx_section(doc, "6. Surface Preparation")
    doc.add_paragraph(
        "Inspection surfaces shall be free of scale, dirt, weld spatter, paint, and any condition that would "
        "interfere with the examination. Surface preparation requirements:"
    )
    for item in [
        "Visual inspection: degrease and clean per ASME V Article 9 §T-921",
        "Magnetic Particle: clean to bare metal per ASTM E1444 §6",
        "Liquid Penetrant: degrease, dry; coating-free per ASME V Article 6 §T-621",
        "Ultrasonic: smooth surface, Ra ≤ 6.3 µm; remove scale and loose material",
        "Radiographic: surface need only allow source/film/IP placement; weld-cap not required to be flush",
    ]:
        doc.add_paragraph(item, style="List Bullet")

    docx_section(doc, "7. Examination Technique")
    doc.add_paragraph(
        "Examination shall be conducted as follows. The technique includes calibration / system verification, "
        "scan plan with coverage % calculation, indication detection, indication characterization, sizing, "
        "and recording."
    )
    docx_section(doc, "7.1 Calibration / System Verification", level=2)
    doc.add_paragraph("[Per ASME V Article 4 §T-460 / Annex VIII for UT — describe the calibration sequence and DAC / DGS / TCG setup, sensitivity, and verification frequency.]")
    docx_section(doc, "7.2 Scan Plan & Coverage", level=2)
    doc.add_paragraph("[Describe scan increments, overlap %, scan speed limits, probe coupling check intervals.]")
    docx_section(doc, "7.3 Indication Detection & Characterization", level=2)
    doc.add_paragraph("[Define recording threshold (e.g., DAC -6 dB), characterization criteria (planar vs volumetric), and sizing methodology (6 dB drop / 20 dB drop / amplitude / TOFD tip-diffraction).]")

    docx_section(doc, "8. Acceptance Criteria")
    doc.add_paragraph(
        "Indications shall be evaluated against the acceptance criteria of the applicable construction code "
        "or customer specification. Where multiple criteria apply, the most stringent shall govern."
    )
    docx_label(doc, "Primary Code", "[ASME Section VIII Division 1 / B31.3 / API 510 / AWS D1.1]")
    docx_label(doc, "Customer Specification", "[if applicable]")
    docx_label(doc, "Stricter Limit Applied", "[Reference + clause]")

    docx_section(doc, "9. Reporting")
    doc.add_paragraph(
        "Inspection results shall be documented on a format that includes the following minimum elements:"
    )
    for item in [
        "Procedure number, revision, and date",
        "Component identification (asset, weld map ID, drawing reference)",
        "Examination method, technique, and acceptance code reference",
        "Equipment used (instrument, probe, calibration block, source) with serial numbers",
        "Inspector name and qualification (Level + ASNT/ISO/PCN cert no.)",
        "Calibration record at start and end of examination",
        "All indications with location, size, characterization, and acceptance result",
        "Accept / reject decision per acceptance criteria",
        "Disposition for rejects (repair / rework / waiver request)",
        "Photographs / images / data files (where applicable)",
    ]:
        doc.add_paragraph(item, style="List Number")

    docx_section(doc, "10. Records & Retention")
    doc.add_paragraph(
        "All examination records, calibration certificates, personnel certification copies, and technique "
        "sheets shall be retained for [7 years] post-project closeout or as specified by [Customer / "
        "Regulatory authority]. Records shall be stored in a controlled environment with retrieval traceability "
        "per ISO 9001 §7.5 or ISO/IEC 17025 §8.4."
    )

    docx_section(doc, "11. Revision History")
    table = doc.add_table(rows=2, cols=4)
    table.style = "Light Grid Accent 1"
    for i, h in enumerate(["Rev", "Date", "Description", "Approved by"]):
        table.rows[0].cells[i].text = h
    for i, v in enumerate(["0", "[YYYY-MM-DD]", "Initial issue", "[Level III Name]"]):
        table.rows[1].cells[i].text = v

    docx_footer(doc)
    doc.save(f"{OUT}/ndt-procedure-template.docx")

# ============================================================
# 6) ASNT Level III Study Guide (DOCX)
# ============================================================
def make_level_iii_study_guide():
    doc = Document()
    docx_setup(doc, "ASNT NDT Level III — Exam Study Guide")

    p = doc.add_paragraph()
    r = p.add_run("Use this study guide for ASNT NDT Level III Basic and Method exam preparation. Covers exam format, topic coverage by method, key reference standards, recommended study timeline, and test-day strategies.")
    r.italic = True

    docx_section(doc, "1. ASNT Level III Exam Structure")
    doc.add_paragraph(
        "The ASNT Level III qualification consists of: (1) Basic Exam — 135 questions covering NDT fundamentals, "
        "materials science, manufacturing processes, and quality concepts; (2) Method Exam — 66 questions on the "
        "specific NDT method (UT / RT / MT / PT / ET / VT / LT / NR / AE); (3) Specific Examination — employer-"
        "administered exam covering codes, standards, and procedures applicable to the employer's products."
    )
    docx_section(doc, "1.1 Time Allowed", level=2)
    docx_label(doc, "Basic Exam", "2.5 hours, closed-book")
    docx_label(doc, "Method Exam", "2 hours, closed-book")
    docx_label(doc, "Specific Exam", "Variable, employer-defined")
    docx_section(doc, "1.2 Pass Threshold", level=2)
    docx_label(doc, "Each Exam", "≥ 70% composite (some methods 80%)")

    docx_section(doc, "2. Basic Exam — Topic Coverage")
    for item in [
        "Materials science: ferrous and non-ferrous metals, polymers, composites, ceramics",
        "Manufacturing processes: casting, forging, welding, rolling, extrusion, machining",
        "Discontinuities: inherent (casting porosity, hot tears), processing (lamination, hydrogen flakes), service-induced (fatigue, corrosion, SCC)",
        "Materials properties: tensile, hardness, impact, fracture toughness",
        "NDT method overview — capabilities, limitations, application areas of each method",
        "Quality concepts: SPC, AQL, sampling plans, gauge R&R, ISO 9001 / AS9100 fundamentals",
        "Codes and standards overview — ASME V, API ICP, EN ISO, AWS D1.1, MIL-STD",
        "Personnel qualification — SNT-TC-1A, CP-189, ACCP, ISO 9712, NAS-410",
        "Safety — radiation, electrical, chemical, confined space",
    ]:
        doc.add_paragraph(item, style="List Bullet")

    docx_section(doc, "3. Method Exam — Topic Coverage (UT example)")
    for item in [
        "Wave propagation: longitudinal, shear, surface, Lamb modes, mode conversion",
        "Probes: piezoelectric, phased array, EMAT — frequency, element size, beam profile",
        "Calibration: DAC, DGS, TCG, time-corrected gain, reference block selection (IIW V1/V2, ASME basic)",
        "Scanning techniques: contact, immersion, automated, phased array, TOFD",
        "Discontinuity characterization: planar vs volumetric, tip-diffraction sizing, 6/20 dB drop",
        "Specific applications: weld inspection, thickness measurement, tube bundle inspection, casting / forging",
        "Code requirements: ASME V Article 4 (UT for welds), Article 5 (other), Annex VIII (PAUT)",
        "Equipment performance verification: ASME V Annex II, linearity, dead zone, near field",
    ]:
        doc.add_paragraph(item, style="List Bullet")

    docx_section(doc, "4. Recommended Study Timeline")
    table = doc.add_table(rows=1, cols=3)
    table.style = "Light Grid Accent 1"
    for i, h in enumerate(["Weeks", "Focus", "Activities"]):
        table.rows[0].cells[i].text = h
    timeline = [
        ("Week 1-2", "Foundations", "Read ASNT Level III Study Guide (Method); review codes; build summary notes."),
        ("Week 3-4", "Materials & Processes", "Materials science chapters; manufacturing processes; defect types."),
        ("Week 5-6", "Method Deep-Dive", "Method-specific chapter; calibration techniques; code applications."),
        ("Week 7", "Practice Questions", "ASNT Level III Question Books; 200+ practice questions."),
        ("Week 8", "Mock Exam + Weak Areas", "2 full mock exams; identify gaps; targeted study."),
        ("Week 9", "Code Drill", "ASME V / API 510/570/653 / customer specs — code-tab strategy."),
        ("Week 10", "Final Review + Exam", "Light review; rest; exam day."),
    ]
    for row_data in timeline:
        row = table.add_row().cells
        for i, val in enumerate(row_data):
            row[i].text = val

    docx_section(doc, "5. Reference Materials")
    for item in [
        "ASNT Level III Study Guide — Basic + Method (per method)",
        "ASNT Question Books — Level III (per method)",
        "ASME Section V (current edition) — NDE",
        "ASME Section IX — Welding & Brazing Qualifications",
        "API 510 / 570 / 653 / 580 / 581 Body of Knowledge",
        "AWS D1.1 — Structural Welding Code",
        "Atlantis NDT Level III prep course materials (Houston, Dubai, Hyderabad, Online)",
        "ASNT Handbook (current edition) — for the specific method",
    ]:
        doc.add_paragraph(item, style="List Bullet")

    docx_section(doc, "6. Test-Day Strategy")
    for item in [
        "Sleep 7-8 hours night before. No new material that day.",
        "Eat a light protein-rich breakfast.",
        "Arrive 30 min early. Bring two photo IDs.",
        "Read the question twice before looking at answers. Eliminate clearly-wrong answers first.",
        "Skip hard questions; flag and return after completing easier ones.",
        "Time management: ~1 min per question for Basic. Method exam more time per question.",
        "Don't leave any question blank. Educated guess > blank.",
        "Review flagged questions if time permits. Trust first instinct unless you find new info.",
        "Stay calm. The exam is not designed to trick you — read the question precisely.",
    ]:
        doc.add_paragraph(item, style="List Number")

    docx_section(doc, "7. After the Exam")
    doc.add_paragraph(
        "ASNT typically notifies results within 4-6 weeks. Passing both Basic and Method qualifies you as "
        "ASNT NDT Level III for that method. Apply for the employer-specific written practice and complete "
        "any Specific Examination required by your employer. Maintain certification with annual review per "
        "SNT-TC-1A or 5-yearly recertification per ACCP / ISO 9712 / PCN."
    )
    doc.add_paragraph(
        "If you fail, ASNT permits retest after 30 days. Most candidates who fail do so on Basic — invest "
        "additional time in materials science, manufacturing processes, and quality concepts. Method failures "
        "often relate to underestimating the depth of code knowledge required."
    )

    docx_section(doc, "8. Atlantis NDT Level III Prep Course")
    doc.add_paragraph(
        "Atlantis NDT delivers ASNT Level III preparation in Houston (HQ), Dubai, Hyderabad, and online. "
        "Course duration: 80-120 hours per method depending on candidate background. 95% first-attempt pass "
        "rate. ASNT Level III instructors with multi-method certification and active inspection experience. "
        "Mock exams, code-tab strategy, and 1-on-1 mentoring included. Contact info@atlantisndt.com to enroll."
    )

    docx_footer(doc)
    doc.save(f"{OUT}/asnt-level-iii-study-guide.docx")

# ============================================================
# Run
# ============================================================
if __name__ == "__main__":
    make_inspection_checklist()
    make_api653_template()
    make_safety_checklist()
    make_training_matrix()
    make_procedure_template()
    make_level_iii_study_guide()
    print("Templates generated in", OUT)
    for f in sorted(os.listdir(OUT)):
        size = os.path.getsize(f"{OUT}/{f}")
        print(f"  {f}  ({size:,} bytes)")
