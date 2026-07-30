/* =============================================================================
   HIMACHAL PRADESH — data for state-tool-engine.js. See assets/js/data/kerala.js
   for the schema reference, and assets/js/data/punjab.js / rajasthan.js for the
   prior examples of this file's research/honesty discipline (primary-source
   extraction, rule-by-rule citation, honest hedging over invented figures, and
   independently resolving each state's current NPS/OPS status rather than
   assuming a blanket "restoration").

   THE PROVENANCE QUESTION THIS FILE WAS SPECIFICALLY ASKED TO RESOLVE — HP IS
   NEITHER "STILL ON PCSR" (PUNJAB'S ANSWER) NOR "REWROTE PCSR INTO ITS OWN
   NUMBERED CODE" (HARYANA'S ANSWER) — HP ADOPTED THE CENTRAL GOVERNMENT'S OWN
   RULES, NOT PUNJAB'S: this session found, and read primary notification text
   for, a third and genuinely distinct pattern. Himachal Pradesh's leave code is
   the Central Civil Services (Leave) Rules, 1972, "in their application to the
   State of Himachal Pradesh" — the Governor of HP, under the same proviso to
   Article 309 of the Constitution used elsewhere in this app, periodically
   issues freestanding notifications titled "Central Civil Services (Leave)
   Himachal Pradesh Amendment Rules, [year]" that amend specific numbered rules
   of the CENTRE's own CCS (Leave) Rules 1972 AS APPLIED TO HP — not a rewritten
   or renamed HP-numbered code, and not Punjab Civil Services Rules at all. The
   same pattern repeats for HP's pension and provident-fund codes (see below):
   "Central Civil Services (Pension) Rules, 1972" and "General Provident Fund
   (Central Services) Rules, 1960," each "in their application to the State of
   Himachal Pradesh." This session verified the pattern by OCR'ing two HP
   Finance (Regulations) Department notifications directly (methodology below):
   Notification No. Fin(C)A(3)-11/2003 dated 7.3.2012 ("Central Civil Services
   (Leave) (Himachal Pradesh) Amendment, Rules, 2012") and Notification No.
   Fin(C)A(3)-1/2008-Loose dated 21.12.2017 ("Central Civil Services (Leave)
   Himachal Pradesh (Amendment) Rules, 2017") — both open with near-identical
   operative language: "the Governor of Himachal Pradesh is pleased to make the
   following rules further to amend Central Civil Services (Leave) Rules, 1972
   IN THEIR APPLICATION TO THE STATE OF HIMACHAL PRADESH." This is a clean,
   well-evidenced, HP-specific finding, not an assumption by analogy to any
   other state's file in this app.

   A GENUINELY IMPORTANT CONSEQUENCE OF THIS ADOPTION MECHANISM, FLAGGED
   EXPLICITLY RATHER THAN SMOOTHED OVER: because each change requires its own
   separate "...Himachal Pradesh Amendment Rules" gazette notification, HP's
   version of the CCS Rules does NOT appear to automatically track every
   subsequent amendment DoPT makes to the base Central rules — the clearest
   evidence is Maternity Leave itself (see below), where HP's own Rule 43(1)
   figure was not raised to 180 days until a dedicated 21.12.2017 HP
   notification, years after DoPT's own central increase. Net effect: for any
   provision below where this session could not independently confirm a
   matching "...Himachal Pradesh Amendment Rules" notification, this file
   flags that HP's current text on that specific point was NOT independently
   verified — the rule NUMBER is very likely right (it is HP's own adopted
   numbering of the Centre's CCS Rules), but the exact current wording/figure
   may differ from the Centre's own current CCS text if HP has not (or not yet)
   separately gazetted a matching change. This is the single most important
   methodological caveat in this file — read it before trusting any rule
   number below at face value the way you might for Kerala's/Rajasthan's/
   Punjab's own fully-self-contained codes.

   METHODOLOGY / OCR NOTE — WebSearch's per-session budget was exhausted before
   this session's first query could run (0 of 200 remaining), so all web
   research after that point used WebFetch against lite.duckduckgo.com/lite/
   (a plain-HTML search results page) instead, and direct WebFetch against
   specific himachal.nic.in / hp.gov.in-family / hpfas.in / cag.gov.in URLs
   surfaced that way. Several HP Finance Department notifications are scanned
   image PDFs with no usable text layer (WebFetch's own PDF handling reported
   them as "corrupted/garbled binary" — a different failure mode from the
   legacy-Hindi-font garbling documented in rajasthan.js/chhattisgarh.js, but
   the same practical problem: no readable text to work from directly). This
   session's environment had PyMuPDF (`fitz`, importable from the system
   Python at C:\Users\...\Python312\python.exe) and Tesseract 5 with English
   support, so the 2012, 2017 and 2023 notifications below were rasterised to
   PNG at 300dpi with PyMuPDF and OCR'd with `tesseract -l eng`, producing
   clean, directly-readable English text (the notifications' own bilingual
   Hindi pages were present but not relied on, consistent with this app's
   standing practice) — this file cites those as OCR'd. The 2024 Child Care
   Leave restoration notification and the pre-2023 OPS/pension-cutoff
   notification were NOT independently located as primary PDFs this
   session (see their own hints below) — those two items rest on multiple,
   mutually-corroborating SECONDARY sources (news coverage and .hp.gov.in-
   affiliated institutions' own adoption memos), not on this session's own
   read of the underlying gazette text, and are flagged as such throughout.

   MATERNITY LEAVE — READ DIRECTLY, OCR'd, HIGH CONFIDENCE: Notification No.
   Fin(C)A(3)-1/2008-Loose dated 21.12.2017 ("Central Civil Services (Leave)
   Himachal Pradesh (Amendment) Rules, 2017") amends sub-rule (1) of Rule 43 of
   the CCS (Leave) Rules, 1972 "in their application to the State of Himachal
   Pradesh," substituting the figure "135" with a new figure for the number of
   days of Maternity Leave. The OCR of that substituted figure itself was
   legible but not fully certain digit-by-digit (it read as "480," which is
   very unlikely to be the actual figure); MULTIPLE independent secondary
   sources (the HP Finance & Accounts Service's own hpfas.in leave-rules index,
   which titles this exact 21.12.2017 notification "ENHANCED MATERNITY LEAVE
   180 DAYS UNDER CCS LEAVE RULES") converge on 180 days, consistent with the
   Centre's own long-standing 180-day figure — this file therefore states 180
   days, but flags that the specific digit substitution was read via OCR of a
   scanned page, corroborated by a secondary source, not a fully clean primary
   read.

   CHILD ADOPTION LEAVE, PATERNITY LEAVE FOR CHILD ADOPTION, AND CHILD CARE
   LEAVE — DELETED IN 2012, ONLY ONE (NARROWLY) RESTORED IN 2024 — READ
   DIRECTLY FOR THE 2012 DELETION, SECONDARY-SOURCED FOR THE 2024 RESTORATION:
   Notification No. Fin(C)A(3)-11/2003 dated 7.3.2012 ("Central Civil Services
   (Leave) (Himachal Pradesh) Amendment, Rules, 2012"), OCR'd directly this
   session, DELETES, in the CCS (Leave) Rules 1972 as applied to HP: (a)
   sub-clause (ii) of sub-rule 2(b) of Rule 39 (this session could not
   determine what substantive provision Rule 39 itself governs, and no type
   below is built on it — noted for completeness only); (b) Rule 43-AA
   (Paternity Leave for Child Adoption); (c) Rule 43-B (Child Adoption Leave);
   and (d) Rule 43-C (Child Care Leave) — all three family-leave provisions
   wholesale, for HP specifically, effective 7.3.2012. Multiple secondary
   sources (lawtrend.in, theweek.in, devdiscourse.com, himtimes.com, all
   reporting the same underlying event) converge on: the HP Government later
   notified "Central Civil Services (Leave) Himachal Pradesh Amendment Rules,
   2024" (reported Notification No. Fin(C)A(3)-3/2024, dated 31.7.2024),
   restoring Rule 43-C — but NARROWLY, not as a full restoration of the
   pre-2012 general-purpose Child Care Leave: the restored provision is
   reported as available only to a woman Government employee caring for a
   child with 40%+ disability, up to 730 days over the entire service, usable
   until the child turns 20 — and was issued specifically because the HP
   Government informed the Supreme Court it would do so, in a case concerning
   exactly this cohort. This session found NO corroborating report, primary or
   secondary, that Rule 43-B (Child Adoption Leave) or Rule 43-AA (Paternity
   Leave for Child Adoption) have been similarly restored — both are therefore
   treated as still deleted in HP and are NOT modelled as types below (see
   "DELIBERATELY OMITTED" further down). Because this session could not
   independently locate and read the 2024 notification's own primary text
   (only converging secondary news coverage), the Child Care Leave type below
   is written narrowly, per that secondary reporting, with the uncertainty
   flagged in its own hint rather than presented as independently confirmed.

   PENSION / GPF / NPS-OPS STATUS — THE OTHER FINDING THIS SESSION WAS
   SPECIFICALLY ASKED TO RESOLVE, AND A FOURTH DISTINCT PATTERN FROM
   RAJASTHAN'S/CHHATTISGARH'S BLANKET SWAPS, PUNJAB'S RECRUITMENT-DATE-BASED
   NARROWING, AND HARYANA'S "NO RESTORATION AT ALL": HP's pension code is
   likewise the "Central Civil Services (Pension) Rules, 1972... in [their]
   application to the State of Himachal Pradesh" (per a CAG (Comptroller and
   Auditor General) departmental summary page for HP, cag.gov.in/ae/
   himachal-pradesh/en/page-ae-himachal-pradesh-pension-rules, read via
   WebFetch — a SECONDARY summary of the primary notification, not the
   notification's own text) — that page states these Pension Rules were made
   INAPPLICABLE to "all appointments made in the State of Himachal Pradesh on
   or after 15.05.2003" via Notification No. Fin(Pen)A(3)-1/96 dated
   15.05.2003, i.e. the cohort appointed on/after 15.5.2003 was moved onto a
   contributory/NPS-style scheme instead — a genuinely HP-specific cutoff DATE
   (15.05.2003), distinct from the 1.1.2004 cutoff this app's other state
   files (Rajasthan, Punjab, Chhattisgarh) each independently confirmed for
   their own states. This session THEN found, and read directly via OCR (high
   confidence — see methodology note above), Notification No. Fin(C)A(3)-3/2023
   dated 2.6.2023 ("General Provident Fund (Central services), Himachal
   Pradesh Amendment Rules, 2023"), substituting Rule 4 (Conditions of
   Eligibility) of the General Provident Fund (Central Services) Rules, 1960 as
   applied to HP, with a proviso stating verbatim: "a Government servant
   appointed during the period between 15.05.2003 and 31.03.2023 and who has
   opted to continue under the contributory Pension Scheme (National Pension
   System), shall not be eligible to subscribe to the [General Provident]
   Fund." Read the negative of that proviso plainly: a Government servant
   appointed in that SAME 15.05.2003–31.03.2023 window who did NOT opt to
   continue under NPS — i.e. who opted instead for the Old Pension Scheme —
   IS eligible to subscribe to GPF. This is the actual operative mechanism
   behind HP's OPS restoration, read from primary rule text, not press
   coverage: it was a one-time OPTION offered specifically to the
   15.05.2003–31.03.2023 recruitment cohort, not a blanket conversion of every
   NPS subscriber, and NOT available to anyone appointed on/after 1.4.2023
   (who remain on NPS by this rule's own plain terms). Multiple secondary,
   .hp.gov.in-affiliated sources (education.hp.gov.in, hpuniv.ac.in,
   hillagric.ac.in — each an institution formally adopting the same underlying
   order for its own staff) independently corroborate the originating OPS
   notification as No. Fin(Pen)A(3)-1/2023 dated 4.5.2023, effective
   1.4.2023, accompanied by a Standard Operating Procedure — consistent with,
   and explaining, the 31.03.2023/1.4.2023 boundary date read directly in the
   GPF rule text above. IMPORTANT — LOWER-CONFIDENCE, SECONDARY-ONLY ADDENDUM:
   this session also found secondary reporting (via WebFetch of search-result
   summaries, not a primary document) of a further Finance (Pension)
   Department Office Memorandum, reported dated 9.7.2026, following what is
   described as "Government of India instructions from March 3, 2023,"
   EXTENDING the OPS option to employees "recruited against posts/vacancies
   advertised or notified on or before May 15, 2003, even if their
   appointments were made after that date" — i.e. a further narrowing/
   extension keyed to the RECRUITMENT-ADVERTISEMENT date rather than the
   appointment date, structurally similar to the recruitment-date-based
   narrowing Punjab's own file found for Punjab's 2025 circular. This item is
   explicitly LOWER CONFIDENCE than the rest of this section — its primary
   text was not located or read this session — and is presented in the
   relevant type's hint with that caveat, not as independently confirmed fact.
   Net effect for this file's 'service' category: an HP employee should not
   assume "I am currently on NPS, therefore OPS now applies to me" — eligibility
   turns on WHEN YOUR OWN APPOINTMENT (or, per the lower-confidence 2026 item,
   your recruitment advertisement) fell relative to these specific windows, not
   simply your date of joining or current scheme.

   GROUP INSURANCE — CONFIRMED BY NAME, NOT BY FIGURE: the "H.P. State
   Government Employees Group Insurance Scheme, 1984" is confirmed by name and
   1984 origin year via secondary sources (references to Finance Department
   quarterly Group Insurance Scheme "benefit table" notifications, corroborated
   across himachal.nic.in/finance, education.hp.gov.in, hpforest.gov.in and
   hpseb.in postings of the same recurring quarterly circular) — but this
   session could not read the scheme's own founding rules/notification text
   directly, so NO premium, subscription-unit, or sum-assured figure is
   asserted for it (the same gap Punjab's file hit with its own 1982 scheme's
   "Not Printed" Appendix VII). SEPARATELY, and NOT confirmed to be the same
   scheme or a different one, this session also found references to a
   compulsorily-renewed "Group Personal Accident Insurance Scheme" covering a
   wider set of categories ("Regular, Adhoc, Part-time, Contractual and Daily
   Waged employees" of departments, boards, corporations, universities and
   autonomous bodies), with a renewal period reported as 18.11.2025 to
   17.11.2026 and one low-confidence secondary source citing an approximate
   Rs. 200 premium for that period — this figure is NOT independently verified
   and is NOT asserted as reliable; it is mentioned in the relevant type's hint
   only as a flagged, unconfirmed data point, consistent with this file's
   discipline of never silently asserting an unverified rupee figure.

   CASUAL LEAVE / SPECIAL CASUAL LEAVE — CONSISTENT WITH THE CENTRE'S OWN
   PRACTICE, NOT PART OF THE ADOPTED CCS (LEAVE) RULES CODE: exactly as
   central.js documents for the Centre itself, Casual Leave and Special Casual
   Leave sit outside the CCS (Leave) Rules, 1972 (and hence outside HP's own
   "...in their application to Himachal Pradesh" adoption of that code),
   administered instead by a separate Department of Personnel/General
   Administration circular. This session could not locate that HP-specific
   circular or a reliable current day-count for ordinary Casual Leave — no
   figure is asserted for it below (mirroring central.js's own honest gap for
   Centre's CL day-count, and Rajasthan's/Punjab's approach where a comparable
   circular could not be found). For Special Casual Leave, this session DID
   find secondary-sourced, DoPT-OM-pattern figures for specific reasons —
   sterilisation (6 working days, male; 14 days, female), voluntary organ
   donation (up to 42 days, per treating-physician recommendation), and blood/
   apheresis donation (1 day per donation, up to 4 times a year) — consistent
   with the same pattern central.js documents for the Centre's own DoPT
   circulars, but the specific HP (or DoPT-as-applied-to-HP) circular number
   was not independently confirmed this session; flagged in the type's own
   hint.

   ADVANCES — DELIBERATELY THIN, WITH REASONS: House Building Advance is
   confirmed to EXIST for HP employees — an application-form page and a
   Finance Department Office Memorandum referencing revision of HBA "rates/
   entitlements/limits" consequent on the State's 1.1.2016 pay-scale revision
   were both located via himachal.nic.in — but this session could not read
   either document's full text (a specific PDF URL guessed from a search
   snippet 404'd, and time was not spent chasing further guesses per this
   task's own instruction not to get stuck), so NO ceiling amount or interest
   rate is asserted. The HP Financial Rules, 2009 (HPFR2009 — downloaded and
   pdftotext'd directly this session, clean text, no OCR needed, from
   tal.hp.gov.in) was searched in full for "House Building," "Motor Car,"
   "Motor Vehicle," "Festival" and "Conveyance Advance" and returned NO hits
   for any of them — consistent with these being separate Finance Department
   schemes outside the core Financial Rules, the same structural finding
   Rajasthan's file made for Rajasthan's own General Financial & Account
   Rules. Motor Vehicle Advance and Festival Advance are OMITTED entirely —
   no HP-specific evidence for either was found this session, in the Financial
   Rules or via search.

   ESTATE / FAMILY PENSION — Rule 54 of the CCS (Pension) Rules, 1972, as
   applied to HP, is confirmed by name via the CAG summary page cited above for
   employees within its applicable cohort (appointed before 15.05.2003, or an
   OPS-option-holder per the 2023 mechanism described above) — but this
   session did NOT read the Pension Rules' own rate/percentage text directly
   (only the CAG department's summary page, which itself states it does not
   itself give "specific family pension rates or detailed gratuity calculation
   formulas"), so NO percentage, minimum, or ceiling figure is asserted here.
   Separately, the same CAG summary references an Office Memorandum No.
   Fin(Pen)A(3)-1/96 dated 18.9.2017, extending Death Gratuity/gratuity
   benefits specifically to Government employees under the New Pension Scheme
   (NPS) who retire or die in service on or after 22.9.2017 — confirmed to
   exist by this citation, but again no rate/formula was independently read.
   No distinct HP indemnity-bond form number (analogous to Kerala's K.F.C. Form
   No. 9) was found this session.

   DELIBERATELY OMITTED, WITH REASONS — Paternity Leave for Child Adoption
   (Rule 43-AA) and Child Adoption Leave (Rule 43-B) are omitted as applicant-
   facing types: both were deleted for HP in 2012 (read directly, OCR'd — see
   above) and no restoration for either was found (only the narrower Rule 43-C
   restoration was). Offering them as selectable types would misrepresent
   currently-inapplicable entitlements to an HP employee. Study Leave and
   Compensatory Leave/Comp-off are omitted for the same reasons this app's
   other files give: no prior state file in this app models Study Leave as an
   applicant-facing type, and no HP-specific circular establishing Comp-off for
   HP state employees (as distinct from the Centre's own DoPT circular, which
   does not automatically extend to state cadres) was found this session.
   Quarantine Leave — present in Punjab's/Haryana's files because it sits
   inside THEIR OWN numbered Appendix 17/Chapter XV — has no equivalent inside
   the CCS (Leave) Rules 1972 that HP adopts, and is therefore not modelled
   here (consistent with central.js, which also has no Quarantine Leave type).
   ============================================================================= */
window.STATE_DATA = window.STATE_DATA || {};
window.STATE_DATA.himachalpradesh = {
  key: 'himachalpradesh', name: 'Himachal Pradesh',
  heroTitle: 'Himachal Pradesh — CCS (Leave) Rules (as applied to HP) &amp; Service Forms',
  heroMeta: 'leave, Group Insurance, GPF/NPS/OPS &amp; family pension matters, under the Central Civil Services (Leave) Rules, 1972 and Central Civil Services (Pension) Rules, 1972, each in their application to the State of Himachal Pradesh, as amended',
  idFieldLabel: 'Employee ID',
  coverLetter: false,
  leaveFormFooterHtml: '(a) I undertake to refund the difference between the leave salary drawn during full-pay commuted leave and that admissible during leave on half pay, which would not have been admissible had Rule 30, Central Civil Services (Leave) Rules, 1972 (in their application to Himachal Pradesh), not been applied, in the event of my retirement from service at the end of or during the currency of the leave.<br><br>(b) I undertake to refund the leave salary drawn during &ldquo;leave not due&rdquo;, which would not have been admissible had Rule 31, Central Civil Services (Leave) Rules, 1972 (in their application to Himachal Pradesh), not been applied, in the event of my voluntary retirement or resignation from service at any time until I earn half pay leave not less than the amount of leave not due availed of by me.',

  groupOrder: [
    { slot: 'general', name: 'General Leave' },
    { slot: 'lwa', name: 'Extraordinary Leave (EOL)' },
    { slot: 'family', name: 'Family &amp; Medical Leave' },
    { slot: 'casual', name: 'Casual &amp; Special Leave' },
    { slot: 'insurance', name: 'Group Insurance Scheme' },
    { slot: 'service', name: 'Service &amp; Establishment Matters' },
    { slot: 'advance', name: 'Advances &amp; Loans' },
    { slot: 'estate', name: 'Family Pension / Estate Claims' },
  ],

  profileFields: [
    { id: 'name', label: 'Full Name', type: 'text', required: true },
    { id: 'pen', label: 'Employee ID', type: 'text', required: true },
    { id: 'designation', label: 'Post Held', type: 'text', required: true },
    { id: 'office', label: 'Department, Office &amp; Section', type: 'text', required: true, full: true, placeholder: 'e.g., O/o the Deputy Commissioner, Shimla' },
    { id: 'dob', label: 'Date of Birth', type: 'date', required: true },
    { id: 'entry', label: 'Date of Entry into Service', type: 'date', required: true },
    { id: 'pay', label: 'Pay', type: 'text', required: true, placeholder: 'e.g., Pay Matrix Level 7' },
  ],
  formExtraFields: [
    { id: 'allowances', label: 'House-Rent Allowance / Other Compensatory Allowance Drawn', type: 'text', placeholder: 'Optional' },
    { id: 'holidays', label: 'Sunday(s)/Holiday(s) Proposed to be Prefixed/Suffixed', type: 'text', placeholder: 'e.g., Nil' },
    { id: 'last_leave', label: 'Date of Return from Last Leave (&amp; Nature/Period of that Leave)', type: 'text', placeholder: 'e.g., 05/01/2026, Earned Leave, or NA' },
  ],
  formRows: [
    { label: '1. Name of applicant', field: 'name' },
    { label: '2. Leave Rules applicable', template: '${rule}' },
    { label: '3. Post held', field: 'designation' },
    { label: '4. Department, office and section', field: 'office' },
    { label: '5. Pay', field: 'pay' },
    { label: '6. House-Rent Allowance or other compensatory allowance drawn in the present post', field: 'allowances' },
    { label: '7. Nature and period of leave applied for and date from which required', template: '${nature} for ${duration_str}<br>from ${start} to ${end}' },
    { label: '8. Sundays and holidays, if any, proposed to be prefixed/suffixed to leave', field: 'holidays' },
    { label: '9. Ground on which leave is applied for', field: 'reason' },
    { label: '10. Date of return from last leave, and the nature and period of that leave', field: 'last_leave' },
    { label: '11. Address during leave', field: 'address' },
  ],

  types: {
    earned_leave: { label: 'Earned Leave', group: 'general', rule: 'Rules 26 &amp; 27, Central Civil Services (Leave) Rules, 1972 (in their application to Himachal Pradesh)', family: 'leave', nature: 'Earned Leave', defaultReason: 'Private affairs',
      hint: 'This session found no HP-specific "...Himachal Pradesh Amendment Rules" notification touching Rules 26/27 — the rule numbers are HP\'s own adopted numbering of the Centre\'s CCS (Leave) Rules, 1972 (confirmed via the primary "in their application to Himachal Pradesh" notifications read this session for other rules — see the file header), but the day-count/accrual/accumulation figures below reflect the Centre\'s own long-standing, current CCS text and were NOT independently re-verified against an HP-specific gazette this session: 30 days credited per year in two instalments of 15 each (1 January and 1 July), accumulation capped at 300 days. Confirm your current balance with your DDO, particularly if HP has issued an amendment this session did not locate.' },
    half_pay_leave: { label: 'Half Pay Leave', group: 'general', rule: 'Rule 29, Central Civil Services (Leave) Rules, 1972 (in their application to Himachal Pradesh)', family: 'leave', nature: 'Half Pay Leave', defaultReason: 'Private affairs',
      hint: '20 days credited in respect of each completed year of service, grantable on medical certificate or for private affairs, per the Centre\'s own current CCS text — no HP-specific amendment to this rule was found this session (see Earned Leave\'s hint for the same caveat). No accumulation ceiling.' },
    commuted_leave: { label: 'Commuted Leave', group: 'general', rule: 'Rule 30, Central Civil Services (Leave) Rules, 1972 (in their application to Himachal Pradesh)', family: 'leave', medCert: true, nature: 'Commuted Leave (in lieu of Half Pay Leave)', defaultReason: 'Medical treatment (Medical Certificate enclosed)',
      hint: 'Commuted leave not exceeding half the Half Pay Leave due may be granted on medical certificate, debited at twice the number of days availed against the Half Pay Leave account, only where the sanctioning authority believes the employee will return to duty on its expiry — the Centre\'s own current CCS text; no HP-specific amendment to this rule was found this session. The refund undertaking on voluntary retirement without returning to duty is printed as item (a) in this form\'s footer.' },
    leave_not_due: { label: 'Leave Not Due', group: 'general', rule: 'Rule 31, Central Civil Services (Leave) Rules, 1972 (in their application to Himachal Pradesh)', family: 'leave', medCert: true, nature: 'Leave Not Due', defaultReason: 'Medical treatment (Medical Certificate enclosed)',
      hint: 'Grantable only where the sanctioning authority is satisfied there is a reasonable prospect of return to duty; debited against Half Pay Leave likely to be earned thereafter — the Centre\'s own current CCS text; no HP-specific amendment to this rule was found this session. The refund undertaking is printed as item (b) in this form\'s footer.' },

    extraordinary_leave: { label: 'Extraordinary Leave (EOL)', group: 'lwa', rule: 'Rule 32, Central Civil Services (Leave) Rules, 1972 (in their application to Himachal Pradesh)', family: 'leave', needsRouting: true, nature: 'Extraordinary Leave',
      hint: 'Granted only when no other leave is admissible, or when the employee applies in writing in preference to other admissible leave. No leave salary is admissible; not debited to any leave account. No leave of any kind may be granted for a continuous period exceeding 5 years. No HP-specific amendment to this rule was found this session — figures are the Centre\'s own current CCS text (see the file header\'s general caveat on HP\'s adoption mechanism). Confirm any department-specific practice with your DDO.',
      declarationTemplate: 'I understand that no leave salary is admissible during Extraordinary Leave under Rule 32, Central Civil Services (Leave) Rules, 1972 (in their application to Himachal Pradesh), and that the duration applied for is within the 5-year continuous-absence limit prescribed under these Rules.',
      extraFields: [{ id: 'purpose', label: 'Purpose / Nature of Extraordinary Leave', type: 'text', full: true, placeholder: 'e.g., private employment, higher studies, joining spouse, medical treatment' }] },

    maternity: { label: 'Maternity Leave', group: 'family', rule: 'Rule 43(1), Central Civil Services (Leave) Rules, 1972 (in their application to Himachal Pradesh), as amended by Notification No. Fin(C)A(3)-1/2008-Loose dated 21.12.2017', family: 'leave', nature: 'Maternity Leave', defaultReason: 'Confinement for childbirth',
      hint: 'Up to 180 days, at full pay, without the need for a medical certificate, so timed that the date of confinement falls within the leave period; not debited to the leave account. HP-SPECIFIC FINDING, OCR\'d directly this session: the 180-day figure was only substituted into HP\'s own applied text of Rule 43(1) — raising it from a prior figure of 135 days — by a dedicated Notification No. Fin(C)A(3)-1/2008-Loose dated 21.12.2017; the exact substituted digit was OCR-read with some uncertainty but corroborated by an independent secondary source (the HP Finance &amp; Accounts Service\'s own hpfas.in leave-rules index, which titles this exact notification "ENHANCED MATERNITY LEAVE 180 DAYS"). This is a good example of HP needing its own separate gazette action even for a change DoPT had already made centrally years earlier — see the file header.',
      extraFields: [{ id: 'fam_date', label: 'Expected/Actual Date of Delivery', type: 'date' }] },
    miscarriage: { label: 'Miscarriage / Abortion Leave', group: 'family', rule: 'Rule 43, Central Civil Services (Leave) Rules, 1972 (in their application to Himachal Pradesh)', family: 'leave', medCert: true, nature: 'Leave for Miscarriage / Abortion', defaultReason: 'Miscarriage / Abortion',
      hint: 'Up to 45 days on medical certificate, under the Maternity Leave provisions of Rule 43 — the Centre\'s own current CCS text; no HP-specific amendment to this particular sub-provision was found this session (only Rule 43(1)\'s day-count for Maternity Leave itself was independently confirmed as HP-amended — see above).' },
    paternity: { label: 'Paternity Leave', group: 'family', rule: 'Rule 43-A, Central Civil Services (Leave) Rules, 1972 (in their application to Himachal Pradesh)', family: 'leave', nature: 'Paternity Leave', defaultReason: 'Delivery of child by spouse',
      hint: '15 days, for a male employee with fewer than 2 surviving children, admissible from 15 days before to 6 months after the date of delivery — the Centre\'s own current CCS text. IMPORTANT: this session\'s primary-source read of HP\'s 7.3.2012 deletion notification (Fin(C)A(3)-11/2003) confirmed it deleted Rule 43-AA (Paternity Leave for CHILD ADOPTION specifically), Rule 43-B and Rule 43-C, but did NOT list Rule 43-A (ordinary Paternity Leave, on the birth of a biological child) among the deletions — so this type is retained as currently applicable in HP, unlike its child-adoption counterpart below (which is omitted from this file — see the file header).',
      extraFields: [{ id: 'fam_date', label: 'Date of Delivery', type: 'date' }, { id: 'fam_info1', label: 'Name of Spouse', type: 'text', placeholder: 'Optional' }] },
    child_care_leave: { label: 'Child Care Leave (Disabled Child)', group: 'family', rule: 'Rule 43-C, Central Civil Services (Leave) Rules, 1972 (in their application to Himachal Pradesh) — deleted by Notification No. Fin(C)A(3)-11/2003 dated 7.3.2012, restored (narrowly) by reported Notification No. Fin(C)A(3)-3/2024 dated 31.7.2024', family: 'leave', nature: 'Child Care Leave', defaultReason: 'Care of a child with 40%+ disability',
      hint: 'LOWER CONFIDENCE — SECONDARY-SOURCED, NOT INDEPENDENTLY READ IN PRIMARY FORM THIS SESSION: Child Care Leave (Rule 43-C) was deleted for HP altogether in 2012 (confirmed by direct OCR of the primary deletion notification — see the file header). Multiple converging secondary news reports (not this session\'s own read of the 2024 gazette text) state HP restored Rule 43-C in 2024, but NARROWLY: reportedly available only to a woman Government employee for a child certified with 40% or more disability, up to 730 days over the entire service, usable until the child turns 20 — NOT a general restoration of Child Care Leave for any minor child the way most other states in this app model it (compare Punjab\'s/Rajasthan\'s general-purpose Child Care Leave for any of the two eldest children under 18). If your child does not meet this specific disability threshold, this leave is very likely NOT currently available to you in HP — confirm directly with your DDO before relying on it, and treat the 2024 restoration\'s exact conditions as unconfirmed pending a primary-source read.',
      extraFields: [{ id: 'fam_info1', label: "Child's Name", type: 'text' }, { id: 'fam_date', label: "Child's Date of Birth", type: 'date' }, { id: 'fam_ta1', label: 'Nature/Percentage of Disability &amp; Purpose', type: 'textarea', full: true }] },
    special_disability_leave: { label: 'Special Disability Leave / Hospital Leave', group: 'family', rule: 'Rule 44, Central Civil Services (Leave) Rules, 1972 (in their application to Himachal Pradesh)', family: 'leave', medCert: true, nature: 'Special Disability Leave', defaultReason: 'Injury/illness sustained in the course of official duty',
      hint: 'GENUINE UNCERTAINTY, FLAGGED RATHER THAN GUESSED: at the Centre, Rule 44 (and the older Hospital Leave/Special Disability Leave provisions it covered) was substantially REPLACED in 2019 by Work Related Illness and Injury Leave (WRIIL) — see central.js\'s own "wriil" type, citing Rule 44 for the current Centre-wide provision. This session could NOT find any HP-specific "...Himachal Pradesh Amendment Rules" notification adopting the 2019 WRIIL replacement for HP — which, per this file\'s header note on HP\'s adoption mechanism (each Centre-side amendment needs its own separate HP gazette action to take effect here), leaves it genuinely unclear whether HP currently runs the pre-2019 Special Disability Leave/Hospital Leave text or has since separately adopted WRIIL. This type is offered under the older, pre-2019 name and framing (disability/injury/illness attributable to official duty, medical-certificate-supported) as the safer default given the uncertainty; confirm the current position — and the correct current rule citation — with your DDO before relying on it.' },

    casual_leave: { label: 'Casual Leave (CL)', group: 'casual', rule: 'Departmental / General Administration circular (Casual Leave is not part of the Central Civil Services (Leave) Rules, 1972, consistent with the Centre\'s own practice — see central.js)', family: 'letter', needsRouting: true, nature: 'Casual Leave', subject: 'Application for Casual Leave', defaultReason: 'Personal / domestic affairs',
      hint: 'Exactly as at the Centre, Casual Leave sits outside the CCS (Leave) Rules, 1972 that HP otherwise adopts wholesale — administered instead by a separate departmental/GAD circular this session could not locate for HP specifically, so no day-count is asserted. Confirm your current-year balance with your DDO.',
      bodyTemplate: 'I request you to kindly grant me Casual Leave for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, on account of <strong>${reason}</strong>.' },
    special_casual_leave: { label: 'Special Casual Leave', group: 'casual', rule: 'Departmental / DoPT-pattern circular (not part of the Central Civil Services (Leave) Rules, 1972)', family: 'letter', needsRouting: true, nature: 'Special Casual Leave', subject: 'Application for Special Casual Leave', defaultReason: '',
      hint: 'As with ordinary Casual Leave, Special Casual Leave sits outside the CCS (Leave) Rules code. This session found secondary-sourced figures, consistent with the common DoPT-circular pattern documented for the Centre itself in central.js, for a few specific reasons — select below. The precise HP (or DoPT-as-applied-to-HP) circular number was NOT independently confirmed this session; confirm the applicable limit and required proof with your DDO before applying.',
      extraFields: [{ id: 'scl_reason', label: 'Recognised Reason', type: 'select', full: true, options: [
        { value: 'Sterilisation operation (self, male)', label: 'Sterilisation, Self (Male) — up to 6 working days' },
        { value: 'Sterilisation operation (self, female) / Tubectomy', label: 'Sterilisation, Self (Female) / Tubectomy — up to 14 days' },
        { value: 'Voluntary organ donation (self)', label: 'Voluntary Organ Donation (Self) — up to 42 days, per treating physician\u2019s recommendation' },
        { value: 'Voluntary blood / apheresis donation', label: 'Voluntary Blood / Apheresis Donation — 1 day per donation, up to 4 times a year' },
        { value: 'Other (please specify in the reason field below)', label: 'Other (please specify in the reason field below)' },
      ] }],
      bodyTemplate: 'I request you to kindly grant me Special Casual Leave for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, on account of: <strong>${scl_reason}</strong>.{{#if reason}} Further details: ${reason}.{{/if}}' },

    gis_nomination: { label: 'Group Insurance Scheme — Nomination', group: 'insurance', rule: 'H.P. State Government Employees Group Insurance Scheme, 1984', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Head of Office.',
      hint: 'Confirmed by name and 1984 origin via secondary sources (recurring Finance Department quarterly "Group Insurance Scheme benefit table" circulars, corroborated across himachal.nic.in/finance, education.hp.gov.in, hpforest.gov.in and hpseb.in) — this session could not read the scheme\'s own founding rules/notification text directly, so no premium, subscription-unit, or sum-assured figure is asserted; confirm your current unit count and cover amount with your DDO before relying on this for a nomination. SEPARATELY, this session also found references to a compulsorily-renewed "Group Personal Accident Insurance Scheme" covering a wider set of categories (Regular, Adhoc, Part-time, Contractual and Daily Waged employees of departments/boards/corporations/universities/autonomous bodies), most recently renewed for the period 18.11.2025 to 17.11.2026 — this session could NOT confirm whether this is the same 1984 scheme under another name or a genuinely separate product; one low-confidence secondary source cited an approximate Rs. 200 premium for the current renewal period, which is NOT independently verified and should not be relied upon.',
      extraFields: [{ id: 'svc_t1', label: 'Nominee Name', type: 'text' }, { id: 'svc_t2', label: 'Nominee Relationship', type: 'text' }, { id: 'svc_t3', label: 'Share, if more than one nominee', type: 'text' }],
      subject: 'Group Insurance Scheme — Nomination / Change of Nomination',
      bodyTemplate: 'I submit my nomination under the H.P. State Government Employees Group Insurance Scheme, 1984, as follows: <strong>${svc_t1}</strong>, ${svc_t2}.{{#if svc_t3}} Share: ${svc_t3}.{{/if}}' },
    gis_claim: { label: 'Group Insurance Scheme — Claim (Savings Fund / Death)', group: 'insurance', rule: 'H.P. State Government Employees Group Insurance Scheme, 1984', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Head of Office.',
      hint: 'On the common Indian-state Group Insurance and Savings Fund pattern (see the Nomination type\'s hint above for what this session could and could not confirm about the scheme itself): an insurance-cover component appropriate to the member\'s subscription, plus the accumulated Savings Fund balance (quarterly-compounded interest, per Finance Department benefit-table circulars this session located references to but did not read the founding figures of), is ordinarily payable on death in service; the Savings Fund accumulation alone on cessation of service otherwise. Confirm the current benefit amount and claim procedure with your DDO before filing.',
      extraFields: [{ id: 'svc_date1', label: 'Date of Death / Retirement / Cessation of Service', type: 'date' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Group Insurance Scheme — Claim',
      bodyTemplate: 'I submit this claim under the H.P. State Government Employees Group Insurance Scheme, 1984, on account of the event dated <strong>${svc_date1}</strong>.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },

    gpf_advance: { label: 'GPF Advance / Withdrawal', group: 'service', rule: 'Rule 4, General Provident Fund (Central Services) Rules, 1960 (in their application to Himachal Pradesh), as amended by Notification No. Fin(C)A(3)-3/2023 dated 2.6.2023', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / the Accounts Maintenance Authority.',
      hint: 'READ DIRECTLY, OCR\'d this session (high confidence): all temporary Government servants after one year\'s continuous service, and all permanent Government servants, subscribe to the Fund — EXCEPT a Government servant appointed between 15.05.2003 and 31.03.2023 who opted to continue under the National Pension System (contributory Pension Scheme), who is NOT eligible to subscribe to GPF (Rule 4, as substituted 2.6.2023). In other words: if you were appointed before 15.05.2003, or you were appointed in the 15.05.2003–31.03.2023 window and chose the Old Pension Scheme option (see the OPS/NPS Status type below), you hold/are eligible for a GPF account; if you were appointed on/after 1.4.2023, or you were in that window but chose to remain on NPS, you are not. This session read only the eligibility clause (Rule 4) directly — it did NOT independently confirm the current subscription percentage, advance purposes, or ceiling amounts for HP\'s GPF advance/withdrawal provisions; confirm the current permissible amount and purpose list with your DDO before applying.',
      extraFields: [{ id: 'svc_t1', label: 'Purpose', type: 'text' }, { id: 'svc_t2', label: 'Amount Requested (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Application for GPF Advance / Withdrawal',
      bodyTemplate: 'I request that a GPF advance/withdrawal of <strong>Rs. ${svc_t2}</strong> be sanctioned for the purpose of <strong>${svc_t1}</strong>, under the General Provident Fund (Central Services) Rules, 1960, in their application to Himachal Pradesh.{{#if svc_ta1}} ${svc_ta1}{{/if}} I confirm I am eligible to subscribe to the General Provident Fund under Rule 4 of these Rules, as amended.' },
    ops_status_query: { label: 'OPS / NPS Status Confirmation / Query', group: 'service', rule: 'Notification No. Fin(Pen)A(3)-1/96 dated 15.05.2003; Notification No. Fin(Pen)A(3)-1/2023 dated 4.5.2023; and Rule 4, General Provident Fund (Central Services) Rules, 1960 (in their application to Himachal Pradesh), as amended 2.6.2023', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / the Finance (Pension) Department.',
      hint: 'Employees appointed BEFORE 15.05.2003 remain on the CCS (Pension) Rules, 1972 (as applied to HP) / GPF-based code (per a CAG departmental summary of Notification No. Fin(Pen)A(3)-1/96 dated 15.05.2003 — NOT independently read in primary form this session). Employees appointed on/after 15.05.2003 were, by default, moved to a contributory/NPS-style scheme. HP then restored an Old Pension Scheme OPTION: per Rule 4 of the General Provident Fund (Central Services) Rules, 1960 (as applied to HP), READ DIRECTLY this session (high confidence), an employee appointed between 15.05.2003 and 31.03.2023 who did NOT choose to continue under NPS is eligible to subscribe to GPF — i.e. is on OPS. This is corroborated by multiple .hp.gov.in-affiliated institutions (education.hp.gov.in, HP University, CSK HP Agricultural University) each citing the originating Notification No. Fin(Pen)A(3)-1/2023 dated 4.5.2023, effective 1.4.2023, with an accompanying Standard Operating Procedure. Employees appointed ON OR AFTER 1.4.2023 remain on NPS by this rule\'s own plain terms — this is NOT a blanket restoration for every current NPS subscriber. LOWER-CONFIDENCE ADDENDUM (secondary-sourced only, primary text not located this session): a further Office Memorandum, reported dated 9.7.2026, is said to extend the OPS option to employees "recruited against posts/vacancies advertised or notified on or before 15.05.2003, even if their appointments were made after that date" — i.e. keyed to when your post was ADVERTISED, not just when you joined; treat this specific extension as unconfirmed until you have seen the primary order. Use this type to request written confirmation of your own status from your DDO/the Finance (Pension) Department if in doubt.',
      extraFields: [{ id: 'svc_date1', label: 'Date of Appointment (Joining)', type: 'date' }, { id: 'svc_t1', label: 'Date Post/Vacancy was Advertised or Notified, if known', type: 'text', placeholder: 'Optional' }, { id: 'svc_t2', label: 'PRAN, if known', type: 'text', placeholder: 'Optional' }, { id: 'svc_ta1', label: 'Nature of query / request', type: 'textarea', full: true }],
      subject: 'OPS / NPS Status Confirmation — Request',
      bodyTemplate: 'Having joined Government service on <strong>${svc_date1}</strong>{{#if svc_t1}}, with my post/vacancy advertised or notified on ${svc_t1}{{/if}}{{#if svc_t2}} (PRAN: ${svc_t2}){{/if}}, I request written confirmation of my current pension scheme status — Central Civil Services (Pension) Rules, 1972 / General Provident Fund (Old Pension Scheme) or the contributory National Pension System (NPS) — with particular reference to Notification No. Fin(Pen)A(3)-1/2023 dated 4.5.2023 and Rule 4, General Provident Fund (Central Services) Rules, 1960 (in their application to Himachal Pradesh), as amended by Notification No. Fin(C)A(3)-3/2023 dated 2.6.2023.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },

    hba: { label: 'House Building Advance (HBA)', group: 'advance', rule: 'Himachal Pradesh Finance Department scheme (current ceiling/interest rate not independently confirmed this session)', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your Head of Department / DDO.',
      hint: 'CONFIRMED TO EXIST, FIGURES NOT CONFIRMED: an HBA application-form page is published on himachal.nic.in, and a Finance Department Office Memorandum referencing revision of HBA "rates/entitlements/limits" consequent on the 1.1.2016 State pay-scale revision was located by title — but neither document\'s full text was read this session (a guessed direct PDF URL 404\'d; this was not pursued further, per this task\'s own instruction not to get stuck chasing a single document). NO ceiling amount, eligibility (years of service), or interest rate is asserted — confirm current terms with your Head of Department/DDO before applying. The HP Financial Rules, 2009 (read in full, clean text, no OCR needed) contain NO House Building/Motor Car/Motor Vehicle/Festival/Conveyance Advance chapter — this scheme sits entirely outside that compilation, administered by a separate Finance Department order.',
      extraFields: [{ id: 'svc_t1', label: 'Purpose (construction / purchase / extension / repair)', type: 'text' }, { id: 'svc_t2', label: 'Estimated Cost (₹)', type: 'text' }, { id: 'svc_t3', label: 'Advance Amount Required (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Property / site details', type: 'textarea', full: true }],
      subject: 'Application for House Building Advance',
      bodyTemplate: 'I request that a House Building Advance be sanctioned to me for the purpose of <strong>${svc_t1}</strong>. The estimated cost is <strong>Rs. ${svc_t2}</strong>, and the advance amount required is <strong>Rs. ${svc_t3}</strong>.{{#if svc_ta1}} Property/site details: ${svc_ta1}.{{/if}} I enclose the documents required under the applicable Himachal Pradesh Finance Department scheme.' },

    family_pension: { label: 'Family Pension — Claim / Intimation', group: 'estate', rule: 'Rule 54, Central Civil Services (Pension) Rules, 1972 (in their application to Himachal Pradesh)', family: 'letter', noRemarksBlock: true,
      hint: 'Confirmed by rule number and name via a CAG (Comptroller and Auditor General) departmental summary page for Himachal Pradesh — that page itself states it does not give specific family pension rates or gratuity calculation formulas, and this session did not separately locate and read the Pension Rules\' own rate text, so NO percentage, minimum, or ceiling figure is asserted here; confirm current rates with the Directorate of Pensions/Accountant General, Himachal Pradesh, before relying on any amount. Separately, the same CAG summary references Office Memorandum No. Fin(Pen)A(3)-1/96 dated 18.9.2017, which extended Death Gratuity/gratuity benefits to Government employees under the New Pension Scheme (NPS) who retire or die in service on or after 22.9.2017 — confirmed to exist by this citation, but again with no rate/formula independently verified. This claim is admissible only to the applicable cohort described in the OPS/NPS Status type above (broadly: appointed before 15.05.2003, or an OPS-option-holder per the 2023 mechanism) — NPS-covered employees\' families should instead pursue the gratuity route under the 18.9.2017 Office Memorandum cited above, and any applicable NPS/PFRDA death benefit.',
      extraFields: [{ id: 'svc_date1', label: 'Date of Death', type: 'date' }, { id: 'svc_t2', label: "Claimant's Relationship to the Deceased", type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Family Pension — Claim / Intimation',
      bodyTemplate: 'I write to intimate the death of the above-named Government employee on <strong>${svc_date1}</strong>, and to request that Family Pension, as admissible under Rule 54, Central Civil Services (Pension) Rules, 1972 (in their application to Himachal Pradesh), be sanctioned in favour of the eligible member(s) of the family, along with the Death Gratuity admissible under the applicable Rules/Office Memoranda.{{#if svc_t2}} Claimed relationship to the deceased: ${svc_t2}.{{/if}}{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
    deceased_dues_indemnity: { label: "Indemnity — Deceased/Missing Employee's Dues", group: 'estate', rule: 'HP Treasury Rules, 2017 / HP Financial Rules, 2009 (no distinct, general-purpose indemnity-bond form number independently confirmed this session)', family: 'letter', noRemarksBlock: true,
      hint: 'This session read the HP Financial Rules, 2009 in full (clean text, no OCR needed) but did not find a distinct, dedicated indemnity-bond form number for a deceased employee\'s general dues (analogous to Kerala\'s K.F.C. Form No. 9) — nor did it independently read the HP Treasury Rules, 2017 in full to check there. Confirm the current form and any surety requirement with your Treasury Officer/DDO before executing any bond.',
      extraFields: [{ id: 'svc_date1', label: 'Date of Death / Since Missing', type: 'date' }, { id: 'svc_t1', label: 'Name of Claimant(s) / Obligor', type: 'text' }, { id: 'svc_t2', label: 'Relationship of Claimant(s) to Deceased/Missing Employee', type: 'text' }, { id: 'svc_t3', label: 'Amount Claimed (₹)', type: 'text' }, { id: 'svc_ta1', label: "Claimant's address / surety details, if required", type: 'textarea', full: true }],
      subject: "Indemnity — Claim for Deceased/Missing Employee's Dues",
      bodyTemplate: 'I/We, <strong>${svc_t1}</strong>, ${svc_t2} of the deceased/missing <strong>${name}</strong>, request payment of the pay, leave salary, pension/family pension and other emoluments due, amounting to <strong>Rs. ${svc_t3}</strong>, in respect of the event dated <strong>${svc_date1}</strong>, and undertake to furnish an indemnity bond (with sureties, as required) in the form currently prescribed by the Treasury/Pension Branch.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
  },
};
