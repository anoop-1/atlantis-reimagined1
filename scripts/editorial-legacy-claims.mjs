// Correct inherited boilerplate that asserted requirements without a valid basis.
// These replacements constrain the claim; they do not certify a technical procedure.
export function correctLegacyEditorialClaims($, root, path) {
  let changed = false;
  const rules = [
    [/AI model validated per ASME PCC-3|^Code-acceptance pathway for technology-acquired data:/, 'Automation needs a documented scope, representative performance evidence and an agreed review process. Confirm whether the governing examination requirements permit the proposed technique. A software feature or general risk-planning standard does not establish code acceptance.'],
    [/^This standard does not stand alone — it cross-references/, 'Identify the governing product, construction or in-service requirements and their adopted editions. Record which examination and acceptance references they invoke; do not assume that standards from different applications are interchangeable.'],
    [/^Mandatory appendices establish minimum requirements that cannot be waived/, 'Check the status of annexes, appendices and referenced documents in the applicable edition. Resolve proposed departures through the authority responsible for the work; the route depends on the governing requirements.'],
    [/^The standard requires inspector qualification per ASNT SNT-TC-1A/, 'Confirm the personnel qualification and authorisation requirements invoked for this work. Record who performs the examination, who reviews the results and who has authority to decide disposition. These responsibilities are not identical in every scheme.'],
    [/^Indication characterisation: linear vs rounded/, 'Describe each indication using the characteristics required by the examination procedure. Apply the specified acceptance rules within the authorised scope and refer unresolved findings to the responsible technical authority.'],
    [/^Repeat audit findings on this standard:/, 'For the review, retain the applicable procedure revision, personnel authorisation, equipment checks, location references and examination results. Ask the customer which additional evidence and approvals the contract requires.'],
    [/^Fitness-for-Service per API 579-1 \/ ASME FFS-1 applies when/, 'Where findings require engineering assessment, the responsible integrity team must define the assessment scope, necessary measurements and applicable methodology. Atlantis NDT can discuss examination evidence; it does not provide an engineering fitness-for-service assessment.'],
    [/^Atlantis NDT publishes audit-ready records per ISO 9001/, 'Agree record retention, access, review and handover requirements with the customer. A software record does not establish accreditation to an ISO standard; verify any accreditation claim against the issuing body’s current scope.'],
    [/^Certification pathway elements:/, 'Identify the exact certification scheme, method, level and sector. Confirm its current training, experience, examination and vision requirements with the employer or issuing body. There is no single hours table that applies to every NDT qualification.'],
    [/^Recert calendar:|^A: SNT-TC-1A: employer Written Practice defines/, 'Record the expiry date and renewal requirements for each actual credential. Use the issuing body’s current guidance or the applicable employer written practice; do not infer the renewal route from a generic cross-scheme calendar.'],
    [/^Cross-recognition: ASNT Level III/, 'Acceptance depends on the specified role, method, level, sector, employer authorisation and customer requirements. Obtain confirmation of the required credential before booking training or examinations; credentials are not automatically interchangeable.'],
    [/^A: Dual-scheme: ASNT NDT Level II/, 'Specify the credential and employer authorisation required for the assignment. Confirm the proposed personnel’s actual methods, levels, sectors and validity before awarding the work.'],
    [/^A: Minimum: ASNT SNT-TC-1A Level II certification/, 'Personnel requirements depend on the method, level, sector, certification scheme and employer authorisation. Confirm the training, experience, assessment and any technique-specific requirements for the assignment.'],
    [/^A: PAUT: complex geometry \+ automated coverage/, 'PAUT, TOFD and conventional UT have different capabilities and coverage limits. Select the arrangement for the expected flaw, material, geometry and access, and demonstrate the required performance under the approved procedure.'],
    [/^A: Code coverage: full ASME/, 'Identify the governing references, examination methods and required personnel approvals in the enquiry. Confirm the proposed scope, delivery arrangements and any integration work in the proposal.'],
    [/^A: Always reference the latest published edition/, 'Use the edition required by the contract, governing requirements and applicable jurisdiction. Record that edition in the procedure and evaluate changes before adopting a later publication.'],
    [/^Free 30-minute consultation with Atlantis NDT founder/, 'Use the consultation to define the asset, examination objective, governing requirements, delivery arrangements and records needed. The proposal should identify responsibilities, timing, exclusions and any software or integration work.'],
    [/^Atlantis NDT integrates technology output natively:/, 'For technology-generated data, demonstrate how the proposed workflow imports, identifies, reviews and exports a representative result. Confirm configuration and interface requirements before treating a connection as available.'],
    // 2026-10-18 sweep: sources no longer carry the turnaround promise; the second alternatives match their new wording.
    [/^A: Offices in Houston.*(?:24-hour turnaround|Level III sign-off\. Hybrid: local Level II)|^A: On-site mobilisation.*(?:24h turnaround|Remote procedure authoring \+ Level III sign-off\. Hybrid model — local Level II)/, 'Confirm onsite availability, remote support, personnel responsibilities and turnaround in the proposal. Delivery arrangements depend on the examination scope and location.'],
    [/^A: Depends on material.*Typical sensitivity: detects defects from/, 'Detection capability depends on the material, geometry, flaw characteristics, equipment and procedure. Establish the required capability with representative evidence; a universal minimum detectable flaw size would be misleading.'],
  ];
  const methods = [
    [/^Radiographic Testing \(RT\).*ASTM E1444/, 'Radiographic testing can reveal suitable internal discontinuities through differences in radiation transmission. Establish the technique, image quality and acceptance reference for the actual component.'],
    [/^Eddy Current Testing \(ECT\).*ASTM E2375/, 'Eddy current testing examines conductive materials. Probe arrangement, frequency, material properties and geometry determine which conditions it can detect.'],
    [/^Ultrasonic Testing \(UT\).*ASTM E494/, 'Ultrasonic testing uses sound propagation to examine suitable materials. Select and demonstrate the technique for the flaw type, orientation, geometry and access.'],
    [/^Magnetic Particle Testing \(MT\).*ASTM E1316/, 'Magnetic particle testing examines ferromagnetic materials for relevant surface and near-surface discontinuities. It is not applicable to every metal or to nonmagnetic adhesive layers.'],
    [/^Liquid Penetrant Testing \(PT\).*composites/, 'Liquid penetrant testing reveals suitable surface-breaking discontinuities in nonporous materials. Surface condition, material compatibility and the approved process determine applicability.'],
  ];
  root.find('p,li').each((_, e) => {
    const el = $(e);
    if (el.find('p,li,ul,ol').length) return;
    const t = el.text().trim();
    const replacement = [...rules, ...methods].find(([pattern]) => pattern.test(t));
    if (replacement) { el.text(replacement[1]); changed = true; }
  });
  if (path.startsWith('/blog/')) {
    // Published pages must not imply that an unissued future edition was reviewed.
    const clean = s => s.replace(/\s*\[?202[78]\]?\s*(?:—\s*Decoded)?/g, ' ').replace(/\s{2,}/g, ' ').trim();
    for (const el of $('title,h1,h2').toArray()) {
      const old = $(el).text(), next = clean(old);
      if (old !== next) { $(el).text(next); changed = true; }
    }
    const meta = $('meta[name="description"]');
    const old = meta.attr('content') || '', next = clean(old);
    if (old !== next) { meta.attr('content', next); changed = true; }
    root.find('p').each((_, e) => {
      const el = $(e), t = el.text().trim();
      if (/^By .* · .*202[78]/.test(t)) { el.text(t.split(' · ')[0]); changed = true; }
    });
  }
  return changed;
}
