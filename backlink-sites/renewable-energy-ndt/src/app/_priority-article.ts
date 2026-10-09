// Generated from the reviewed editorial JSON source.
export const article = {
  "site": "renewable-energy-ndt",
  "slug": "tower-blade-balance-plant-record-boundaries",
  "title": "Separating tower, blade and balance-of-plant inspection records",
  "description": "Design record boundaries for a mixed renewable portfolio so component histories, locations and review responsibilities remain clear across campaigns.",
  "intent": "Informational asset-record planning for renewable owners separating unlike component evidence within one portfolio.",
  "primaryOffer": "twin",
  "sections": [
    {
      "heading": "One portfolio does not imply one inspection record model",
      "paragraphs": [
        "A renewable portfolio may be managed through one commercial contract while its inspection evidence concerns very different physical items. A tower section, an individual blade and a shared substation asset do not become comparable because they appear in the same monthly report. The record structure must preserve the component, location convention and review context behind each result before combining information into a portfolio view.",
        "Start with the questions people need to answer. A maintenance planner may ask which component needs a follow-up record. An asset engineer may ask whether a finding concerns the same area as a previous campaign. A contract manager may ask which deliverables are outstanding. These are related but distinct uses. A common register can support them if it stores shared administrative fields while allowing component-specific location and evidence fields.",
        "The US Department of Energy's explanation of wind turbines describes blades and the tower as different parts of a turbine. That basic component distinction is useful background for a records hierarchy. It does not define the inspection programme for a particular turbine or portfolio. The planning approach below addresses how evidence is organized; examination selection, access arrangements and technical acceptance remain subject to the responsible teams and applicable requirements."
      ]
    },
    {
      "heading": "Define asset boundaries before assigning report folders",
      "paragraphs": [
        "Create an agreed hierarchy from portfolio to site, system, assembly and identifiable component. Define the meaning of balance of plant for this particular owner and contract rather than assuming every party uses the term identically. List the shared assets included in that category and identify their owning system. A road, cable-related structure or substation component should not be placed under the nearest turbine merely because its photograph was taken during the same visit.",
        "Separate ownership, maintenance responsibility and physical location where they differ. A shared asset may serve several turbines while being maintained under a separate agreement. Record those relationships explicitly. A single parent in the hierarchy can represent its authoritative record location, while additional relationships describe which systems it serves. Duplicating the entire asset under every served turbine creates competing histories and can multiply one finding in the portfolio summary.",
        "Use stable identifiers that survive contractor changes and report-format changes. Preserve contractor labels as aliases when needed. A folder name such as north cluster blades is useful for navigation but should not be the only identifier connecting evidence to a physical item. The owner must still be able to locate that item's history after the portfolio is reorganized, an asset changes maintenance provider or a component is replaced."
      ]
    },
    {
      "heading": "Give tower records their own location vocabulary",
      "paragraphs": [
        "For tower-related evidence, define the location references expected in the record package with the technical team. These may include the relevant section, joint or connection identifier, an orientation convention and the drawing used to interpret the location. The record system should capture the agreed vocabulary without inventing a universal tower inspection grid. Different equipment and owner documentation may require different references.",
        "Distinguish the physical tower component from a reported observation on it. A tower section can have many observations across dates and methods. Each observation needs its own event identity and source record, while the stable component identifier supports retrieval. If the report describes only a broad area, preserve that granularity; do not display a precise point on a model without evidence supporting the position.",
        "Keep access and visibility limitations with the observation. A report covering an accessible portion should not become a complete tower status merely because the dashboard has one tower icon. The portfolio view can show that a defined deliverable is complete while separately recording its coverage boundaries. The responsible reviewer decides what the evidence establishes; the record design ensures that the limitations remain visible when the report is summarized."
      ]
    },
    {
      "heading": "Keep individual blade identity separate from rotor position",
      "paragraphs": [
        "A blade's component identity and its installed rotor position serve different purposes. Preserve the individual identifier where supplied by the authoritative records, and record installation relationships with dates or work events. If a blade is replaced or moved, its earlier inspection history should follow the physical component while the turbine record retains the historical installation relationship. The current blade position alone cannot carry both histories accurately.",
        "Agree the location convention used within blade records, including the reference origin, surface terminology, units and supporting drawing or inspection map. A distance along the blade has little meaning without its reference basis. Different contractors may use different conventions, so retain the original wording and document any cross-reference. Avoid normalizing labels through guesswork simply to make several datasets share the same columns.",
        "Store photographs, annotations and other examination evidence as observations linked to the blade and campaign. A later annotation may refine the location or interpretation without changing the source image. Preserve that distinction and the review history. When comparing campaigns, require a supported relationship between observed areas rather than assuming that similar-looking marks at approximately similar positions represent the same feature."
      ]
    },
    {
      "heading": "Prevent shared infrastructure from disappearing between owners",
      "paragraphs": [
        "Balance-of-plant records often cross team boundaries. Define who receives and maintains evidence for each shared asset class, and record where its authoritative history lives. If a turbine contractor observes a condition on shared infrastructure, the observation should be routed to the appropriate asset custodian while preserving the source campaign and reporting party. Forwarding an image by email is not a durable ownership transfer unless the receiving record is identifiable.",
        "Give interfaces their own references when needed. A record may concern the boundary between a turbine-associated component and a shared system. Rather than forcing it into one category and losing the other relationship, identify the primary physical subject and link the connected assets. The issue owner can then be clear without implying that the observation applies to every connected component.",
        "Keep unassigned observations in an explicit queue with a named routing owner. Do not use miscellaneous as a permanent asset class for information that may matter later. The queue should state what evidence is needed to establish identity, which teams have been asked and the intended resolution date. Uncertain identity is a legitimate state; a forgotten folder is not a useful long-term record model.",
        "When responsibility changes between maintenance providers, transfer the outstanding observation queue together with the asset register. Record acknowledgment by the incoming custodian and retain the previous owner's correspondence. A contract end date should not close a technical query automatically. If the new provider uses different asset labels, complete the identifier cross-reference before importing open observations so the transition does not create duplicate or ownerless actions."
      ]
    },
    {
      "heading": "Hypothetical worked example: a mixed campaign at one site",
      "paragraphs": [
        "Consider a hypothetical campaign covering four turbines and two shared infrastructure assets. The agreed deliverable register contains four tower packages, twelve individual blade packages and two shared-asset packages. These are 18 administrative evidence packages, not 18 equivalent units of condition or examination effort. The register stores each package's component class, responsible reviewer, required files and defined location convention.",
        "The contractor delivers all four tower packages, ten blade packages and both shared-asset packages. A summary can accurately say that 16 of 18 agreed packages have been delivered, provided it names that denominator. It cannot infer that 89 percent of the site is inspected or that the remaining work represents 11 percent of the technical risk. The two missing packages may have different content and consequences from the completed ones.",
        "One observation arrives under turbine T03 but actually concerns a shared structure identified as BP-02. The record custodian moves its authoritative association to BP-02 while preserving a link to the campaign and the turbine-area visit. The portfolio count includes one observation, not a copy under T03 and another under BP-02. The responsible shared-asset reviewer receives the issue with its original evidence and any stated visibility limitation."
      ]
    },
    {
      "heading": "Hypothetical worked example: a blade replacement changes the history",
      "paragraphs": [
        "In the same hypothetical site, turbine T02 previously carried blade BL-117 at position P2. Maintenance records show that BL-117 was removed and BL-309 installed before the current campaign. The older report remains linked to BL-117 and the period of its installation on T02. The current package belongs to BL-309. A turbine-position trend initially attempts to compare the two records as if they described one blade.",
        "The reviewer identifies the replacement event and changes the comparison view. It now shows a component transition at position P2, with separate histories before and after the replacement. No conclusion about condition progression is drawn across the two different physical blades. The portfolio still retains continuity of the turbine position, but that continuity is explicitly an installation history rather than a continuous material history.",
        "A photograph from the current campaign has only the caption T02 blade two and lacks a component reference. The team links it provisionally to the campaign and asks the issuer to confirm the blade identity using the controlled field records. It is not silently assigned to BL-309 based only on the current asset register, because the photograph's acquisition date and intended position must also agree. The clarification becomes part of the image's provenance."
      ]
    },
    {
      "heading": "Choose common fields without flattening technical meaning",
      "paragraphs": [
        "A useful common layer includes asset identifier, component class, campaign, observation date, source record, issue status, review owner and open-action reference. Beneath that layer, allow class-specific fields for location, evidence and limitations. A tower joint reference should not be forced into a blade-distance field, and a shared-asset observation should not require an invented turbine position to satisfy a mandatory form.",
        "Use controlled vocabularies where the meaning is genuinely shared. Delivered, under review and returned for correction can describe document progression across classes if defined consistently. Technical result categories may not be comparable. Before combining them, ask the responsible reviewers whether the categories have the same decision meaning. If they do not, display them separately rather than creating a portfolio severity scale through spreadsheet convenience.",
        "Retain units and source terminology with measured values. An import process can standardize formats only through documented conversions and mappings. Store the original value where useful for traceability, and distinguish a missing measurement from a qualitative observation. A blank numerical field should not become zero, and a narrative comment should not be converted into a numerical condition score without an approved interpretation method."
      ]
    },
    {
      "heading": "Review portfolio summaries for misleading completeness",
      "paragraphs": [
        "Every summary should state what it counts: assets, components, examination events, reports, evidence packages or open actions. These denominators answer different questions. A report can cover several components, while one component can generate multiple reports. Keep the underlying relationships available so a reviewer can move from a total back to the actual items. A percentage without that route is difficult to verify and easy to misuse.",
        "Separate document delivery from technical review and from action closure. An observation may be fully documented while a follow-up decision remains open. A repair-related record may be received while its component identity requires clarification. The dashboard should allow these combinations rather than choosing one overall state that conceals the outstanding question. Use plain labels explaining what remains to be done and who owns it.",
        "Test the portfolio model with edge cases before migrating historical records. Include a replaced blade, a shared asset serving several turbines, a report covering multiple component classes and an observation with uncertain identity. Check that each retains its original evidence and intended review owner. This practical test is more revealing than importing a large number of uncomplicated records and assuming the hierarchy will handle exceptions later."
      ]
    },
    {
      "heading": "Practical portfolio record-boundary checklist",
      "paragraphs": [
        "Use this checklist with maintenance, technical review and record-custodian representatives. Agree a small set of examples for each component class and document the resulting field definitions. The aim is a structure that supports retrieval and responsible review across the portfolio while keeping the distinct meaning of each record intact."
      ],
      "bullets": [
        "Define the owner hierarchy and the contractual meaning of balance of plant, including the authoritative custodian for every shared asset class.",
        "Keep component identity, installed position, physical location and maintenance responsibility as separate relationships with appropriate dates or events.",
        "Specify location conventions for tower, blade and shared-asset records without inventing precision that the source evidence does not support.",
        "Preserve contractor aliases, original measurements, image provenance and limitations when records enter the common portfolio register.",
        "Label every summary denominator and separate delivered documentation, technical review and follow-up action status across component classes.",
        "Test replacements, shared assets and unresolved observations before migration, with a clear routing owner for records that cannot yet be assigned."
      ]
    }
  ],
  "checklist": [
    "Define component and shared-asset boundaries.",
    "Preserve blade identity through installation changes.",
    "Keep class-specific location fields.",
    "Label portfolio counts and unresolved ownership."
  ],
  "references": [
    {
      "label": "US Department of Energy: How wind turbines work",
      "url": "https://www.energy.gov/cmei/systems/how-do-wind-turbines-work"
    }
  ],
  "relatedOffers": [
    "reporting",
    "consulting"
  ]
};
