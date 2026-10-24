#!/usr/bin/env python3
"""Branded PDF practice packs: UT, MT, PT, RT Level II, General and Specific (owner, 2026-10-24).

Owner: "include practice questions for UT, MT, PT & RT general and specific for level II for them to
download ... all practice questions should be branded with Atlantis logo".

Source of truth: src/data/practice-packs/{ut,mt,pt,rt}-level-2.json (authoring rules in SPEC.md).
Output: public/downloads/practice/{m}-level-2-{general|specific}-practice-questions.pdf
Each PDF: cover, instructions, questions (no answers), then answer key with explanations.

Run: python3 scripts/build-practice-packs.py
"""
import json, sys
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (BaseDocTemplate, Frame, Image, KeepTogether, PageBreak, PageTemplate,
                                Paragraph, Spacer, Table, TableStyle)

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "src/data/practice-packs"
OUT = ROOT / "public/downloads/practice"
LOGO = ROOT / "public/atlantis-icon-master-512.png"
BLUE = colors.HexColor("#0B4EA2")
NAVY = colors.HexColor("#1F3A5F")
GREY = colors.HexColor("#555555")
SITE = "atlantisndt.com"

pdfmetrics.registerFont(TTFont("DV", "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"))
pdfmetrics.registerFont(TTFont("DVB", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"))
pdfmetrics.registerFont(TTFont("DVI", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Oblique.ttf"))

S = {
    "title": ParagraphStyle("title", fontName="DVB", fontSize=24, leading=29, textColor=NAVY, alignment=TA_CENTER),
    "sub": ParagraphStyle("sub", fontName="DV", fontSize=13, leading=18, textColor=GREY, alignment=TA_CENTER),
    "h2": ParagraphStyle("h2", fontName="DVB", fontSize=14, leading=18, textColor=NAVY, spaceBefore=6, spaceAfter=6),
    "body": ParagraphStyle("body", fontName="DV", fontSize=10, leading=14),
    "small": ParagraphStyle("small", fontName="DV", fontSize=8.5, leading=11.5, textColor=GREY),
    "q": ParagraphStyle("q", fontName="DVB", fontSize=10, leading=14, spaceBefore=4),
    "opt": ParagraphStyle("opt", fontName="DV", fontSize=10, leading=13.5, leftIndent=18),
    "ans": ParagraphStyle("ans", fontName="DV", fontSize=9.5, leading=13),
    "cta": ParagraphStyle("cta", fontName="DV", fontSize=10, leading=14, textColor=colors.white),
}
LETTERS = "ABCD"


def esc(s):
    return str(s).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def header_footer(title):
    def draw(c, doc):
        c.saveState()
        w, h = LETTER
        c.drawImage(str(LOGO), 0.75 * inch, h - 0.72 * inch, width=0.38 * inch, height=0.38 * inch, mask="auto")
        c.setFont("DVB", 11); c.setFillColor(BLUE)
        c.drawString(1.2 * inch, h - 0.55 * inch, "ATLANTIS NDT")
        c.setFont("DV", 8); c.setFillColor(GREY)
        c.drawRightString(w - 0.75 * inch, h - 0.55 * inch, title)
        c.setStrokeColor(BLUE); c.setLineWidth(0.8)
        c.line(0.75 * inch, h - 0.8 * inch, w - 0.75 * inch, h - 0.8 * inch)
        c.setFont("DV", 7.5); c.setFillColor(GREY)
        c.drawString(0.75 * inch, 0.5 * inch, f"© Atlantis Engineering Consultants · Original practice questions, not ASNT examination questions · {SITE}")
        c.drawRightString(w - 0.75 * inch, 0.5 * inch, f"Page {doc.page}")
        c.restoreState()
    return draw


def cover(pack, kind, sec):
    m, name = pack["method"], pack["methodName"]
    n = len(sec["questions"])
    out = [Spacer(1, 0.9 * inch), Image(str(LOGO), width=1.3 * inch, height=1.3 * inch), Spacer(1, 0.15 * inch),
           Paragraph("ATLANTIS NDT", ParagraphStyle("brand", fontName="DVB", fontSize=16, textColor=BLUE, alignment=TA_CENTER)),
           Spacer(1, 0.45 * inch),
           Paragraph(f"{name} ({m}) Level II", S["title"]),
           Spacer(1, 0.08 * inch),
           Paragraph(f"{kind} Examination — Practice Questions", S["title"]),
           Spacer(1, 0.25 * inch),
           Paragraph(f"{n} multiple-choice questions with an answer key and explanations", S["sub"]),
           Spacer(1, 0.6 * inch)]
    rows = [["Candidate name", ""], ["Date", ""], ["Time allowed (suggested)", "90 minutes" if kind == "General" else "60 minutes"],
            ["Score", f"_____ / {n}"]]
    t = Table(rows, colWidths=[2.3 * inch, 3.4 * inch], rowHeights=0.36 * inch)
    t.setStyle(TableStyle([("FONT", (0, 0), (-1, -1), "DV", 10), ("FONT", (0, 0), (0, -1), "DVB", 10),
                           ("GRID", (0, 0), (-1, -1), 0.5, GREY), ("BACKGROUND", (0, 0), (0, -1), colors.HexColor("#EEF2F7")),
                           ("VALIGN", (0, 0), (-1, -1), "MIDDLE")]))
    out += [t, Spacer(1, 0.5 * inch),
            Paragraph(f"Reviewed {pack.get('lastReviewed', '')} · Atlantis Engineering Consultants · {SITE}", S["sub"]),
            PageBreak()]
    return out


def instructions(pack, kind, sec):
    docs = sec.get("documents") or []
    out = [Paragraph("Before you start", S["h2"]),
           Paragraph(esc(sec.get("intro", "")), S["body"]), Spacer(1, 6)]
    if docs:
        out.append(Paragraph("<b>Documents these questions are written against:</b> " + esc("; ".join(docs)) +
                             ". Your employer's written practice and the contract decide which edition applies; if yours differs, check the answer against your edition.", S["body"]))
        out.append(Spacer(1, 6))
    out += [
        Paragraph("Choose the single best answer for each question. Work without notes first, then check yourself against the answer key at the back. "
                  "Under ASNT SNT-TC-1A your employer's written practice sets the passing grade and the number of questions in the real examination.", S["body"]),
        Spacer(1, 6),
        Paragraph("These are original study questions written by Atlantis NDT. They are not taken from, and do not reproduce, any ASNT or employer examination.", S["small"]),
        Spacer(1, 14),
    ]
    return out


def questions_block(sec):
    out = []
    for i, q in enumerate(sec["questions"], start=1):
        parts = [Paragraph(f"{i}. {esc(q['q'])}", S["q"])]
        for j, o in enumerate(q["options"]):
            parts.append(Paragraph(f"{LETTERS[j]}. {esc(o)}", S["opt"]))
        parts.append(Spacer(1, 4))
        out.append(KeepTogether(parts))
    return out


def answer_key(sec):
    out = [PageBreak(), Paragraph("Answer key and explanations", S["h2"])]
    grid = [[f"{i}. {LETTERS[q['answer']]}" for i, q in enumerate(sec["questions"][k:k + 10], start=k + 1)]
            for k in range(0, len(sec["questions"]), 10)]
    grid = [r + [""] * (10 - len(r)) for r in grid]
    t = Table(grid, colWidths=[0.69 * inch] * 10)
    t.setStyle(TableStyle([("FONT", (0, 0), (-1, -1), "DVB", 9), ("GRID", (0, 0), (-1, -1), 0.4, GREY),
                           ("ALIGN", (0, 0), (-1, -1), "CENTER"), ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#F5F8FC"))]))
    out += [t, Spacer(1, 10)]
    for i, q in enumerate(sec["questions"], start=1):
        ref = f" <font color='#555555'>[{esc(q.get('ref', ''))}]</font>" if q.get("ref") else ""
        out.append(Paragraph(f"<b>{i}. {LETTERS[q['answer']]}</b> — {esc(q['explanation'])}{ref}", S["ans"]))
        out.append(Spacer(1, 4))
    return out


def cta():
    t = Table([[Paragraph("<b>Preparing for certification?</b> Atlantis NDT trains to ASNT SNT-TC-1A online with an ASNT NDT Level III, "
                          "with the Practical NDT simulator for hands-on practice. Free downloads and courses: "
                          f"<u>{SITE}/ndt-practice-tests</u> · <u>{SITE}/training</u>. "
                          f"Need custom practice exams or report templates for your company? Request a quotation at <u>{SITE}/contact</u>.", S["cta"])]],
              colWidths=[7.0 * inch])
    t.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, -1), NAVY), ("LEFTPADDING", (0, 0), (-1, -1), 12),
                           ("RIGHTPADDING", (0, 0), (-1, -1), 12), ("TOPPADDING", (0, 0), (-1, -1), 10), ("BOTTOMPADDING", (0, 0), (-1, -1), 10)]))
    return [Spacer(1, 14), t]


def build(pack, kind):
    sec = pack["general" if kind == "General" else "specific"]
    m = pack["method"].lower()
    OUT.mkdir(parents=True, exist_ok=True)
    path = OUT / f"{m}-level-2-{kind.lower()}-practice-questions.pdf"
    title = f"{pack['method']} Level II · {kind} practice questions"
    doc = BaseDocTemplate(str(path), pagesize=LETTER, leftMargin=0.75 * inch, rightMargin=0.75 * inch,
                          topMargin=1.0 * inch, bottomMargin=0.8 * inch,
                          title=f"{pack['methodName']} ({pack['method']}) Level II {kind} Practice Questions — Atlantis NDT",
                          author="Atlantis Engineering Consultants", subject="NDT Level II practice questions",
                          creator="Atlantis NDT (atlantisndt.com)")
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="f")
    doc.addPageTemplates([PageTemplate(id="p", frames=[frame], onPage=header_footer(title))])
    story = cover(pack, kind, sec) + instructions(pack, kind, sec) + questions_block(sec) + answer_key(sec) + cta()
    doc.build(story)
    return path


def validate(pack):
    errs = []
    for kind, n in (("general", 40), ("specific", 20)):
        qs = pack[kind]["questions"]
        if len(qs) != n: errs.append(f"{pack['id']} {kind}: {len(qs)} questions, expected {n}")
        for q in qs:
            if len(q["options"]) != 4 or not (0 <= q["answer"] <= 3): errs.append(f"{q['id']}: bad options/answer")
    return errs


if __name__ == "__main__":
    methods = sys.argv[1:] or ["ut", "mt", "pt", "rt"]
    bad = []
    for m in methods:
        f = DATA / f"{m}-level-2.json"
        if not f.exists():
            print("missing", f); bad.append(m); continue
        pack = json.loads(f.read_text(encoding="utf-8"))
        e = validate(pack)
        if e:
            print("\n".join(e)); bad.append(m); continue
        for kind in ("General", "Specific"):
            print("wrote", build(pack, kind).relative_to(ROOT))
    sys.exit(1 if bad else 0)
