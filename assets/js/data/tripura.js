/* =============================================================================
   TRIPURA — data for state-tool-engine.js. See assets/js/data/kerala.js for
   the schema reference and assets/js/data/sikkim.js for the most recent prior
   example of this file's research/honesty discipline. Tripura is the eighth
   and final Northeast-cluster state added this rollout (Tripura excluded,
   remaining roadmap moves to Union Territories).

   PRIMARY SOURCE #1 — "THE TRIPURA STATE CIVIL SERVICES (LEAVE) RULES, 1986"
   (fetched via thc.nic.in, a 4MB text-layer PDF pulled with curl+pdftotext
   after WebFetch itself reported it as "binary/corrupted" — the by-now
   familiar false negative this project has hit repeatedly): this is a
   CCS-Leave-Rules-lineage document (the rule text is near-verbatim to the
   Central Civil Services (Leave) Rules, 1972 in structure and numbering),
   unlike Sikkim's genuinely independent 1982 Rules — Tripura sits closer to
   the Arunachal Pradesh/Mizoram/Nagaland "adopted CCS pattern" end of the
   spectrum this project has repeatedly found across the Northeast cluster.
   DIRECTLY CONFIRMED, RULE-BY-RULE: Earned Leave — credited in advance in two
   instalments of 15 days each (1 January and 1 July), carried-forward
   accumulation capped at 240 days, maximum grant at a time 120 days. Half Pay
   Leave — 20 days for each completed year of service. Commuted Leave — up to
   half the Half Pay Leave due, medical certificate required, twice the
   amount debited against HPL; separately, up to 180 days of HPL may be
   commuted WITHOUT a medical certificate during the entire service where the
   leave is used for an approved course of study certified to be in the
   public interest. Leave Not Due — capped at 360 days in the entire service,
   of which not more than 90 days at a time and 180 days in all may be
   otherwise than on medical certificate; debited against HPL the employee
   will earn later. Extraordinary Leave — normally capped at 3 months on any
   one occasion; up to 6 months where the employee has completed 3+ years'
   continuous service, combined with other leave due, and the request is
   medically certified; up to 18 months specifically for pulmonary
   tuberculosis/pleurisy of tubercular origin or similar sanatorium
   treatment. Study Leave — maximum continuous absence (combined with other
   leave, excluding EOL) capped at 28 months generally, extended to 36 months
   for courses leading to a PhD or a Postgraduate Medical Science degree,
   per the Tripura State Civil Services (Leave) (Fifth Amendment) Rules,
   1996, effective 1 July 1996 (Rule 47) — directly read from the amendment
   text itself. Special Disability Leave (for injury in/consequence of
   official duty) — certified by an Authorised Medical Attendant, capped at
   24 months (720 days) for any one disability. Quarantine Leave — granted by
   the Head of Office on a Medical/Public Health Officer's certificate,
   normally capped at 21 days, extendable to 30 days in exceptional
   circumstances; treated as duty and not debited to the leave account
   (excess over the cap is debited as ordinary leave).

   MATERNITY &amp; RELATED LEAVE — DIRECTLY READ FROM THE 1986 BASE TEXT, WITH
   AN EXPLICIT CURRENCY CAVEAT: Rule 38 gives Maternity Leave as 120 days
   from commencement, for a female employee (including an apprentice) with
   fewer than two surviving children, full leave salary, not debited to the
   leave account. THIS SESSION FOUND NO LATER TRIPURA-SPECIFIC AMENDMENT
   ENHANCING THIS FIGURE — 120 days is notably lower than the 180-day figure
   most other states in this app's roster now use (following the
   nationwide, post-2008-era enhancement pattern); it is entirely possible
   Tripura enhanced this in an amendment this session did not locate (the
   Fifteenth/Seventeenth Amendment notifications found this session dealt
   with Child Care Leave and other matters, not Maternity Leave directly) —
   CONFIRM YOUR CURRENT ENTITLEMENT WITH YOUR DDO/HRMS BEFORE RELYING ON
   EITHER FIGURE. Separately, Maternity Leave for miscarriage/abortion
   (excluding "threatened" abortion, including under the Medical Termination
   of Pregnancy Act, 1971) is capped at 45 days in the entire career, medical
   certificate required. Up to 60 additional days may be granted in
   continuation of Maternity Leave (30 days without medical certificate, a
   further period with one, for the ailing baby's care) — this file folds
   this into the Maternity Leave type's own hint rather than a separate
   type. ADOPTION LEAVE — directly confirmed: leave of the kind due and
   admissible (including up to 60 days of commuted leave without medical
   certificate) for up to one year or until the child turns one, whichever
   is earlier, NOT admissible if the employee already has two or more
   surviving children at the time of adoption.

   CHILD CARE LEAVE — CONFIRMED VIA TWO INDEPENDENT SECONDARY SOURCES (this
   session's WebFetch attempts at the amendment PDFs themselves timed out;
   these sources independently corroborate each other and cite specific rule
   numbers/dates, so are used with reasonable confidence): the base
   entitlement under Rule 39(C) is 730 days (2 years) in the entire career,
   for women Government servants with children below 18, full pay, not
   debited to the leave account. A DISTINCT, LATER PROVISION — the Tripura
   State Civil Services (Leave) (Fifteenth Amendment) Rules, 2019, effective
   2 September 2019 — separately extends Child Care Leave to women employees
   with DISABLED OR MENTALLY CHALLENGED children: also up to 730 days, but
   usable until the child turns 22 (rather than 18), for up to two such
   children, subject to disability documentation and a dependency
   declaration. (The two secondary sources disagreed slightly on whether
   this 2019 amendment modifies Rule 39(C) directly or adds a new Rule
   39(D) referencing 39(C)'s conditions — a minor rule-lettering ambiguity
   this session could not resolve from primary text; the substance of both
   figures is corroborated by both sources.)

   PENSION SCHEME STATUS — TWO GENUINELY DISTINCTIVE, DATED FINDINGS: (1)
   Tripura's own NPS cutoff is 1 JULY 2018 — a WebSearch-located Finance
   Department position confirms employees joining State Government service
   on or after this date are NOT governed by the (then still locally
   applicable) Central Civil Services (Pension) Rules, 1972, and instead
   have their pension and retirement benefits governed by a new set of
   Pension Rules formulated in line with the Government of India's
   Contributory Pension Scheme (NPS) — notably the LATEST NPS-adoption
   cutoff date this project has found in the Northeast cluster so far
   (Assam ~2005, Sikkim confirmed 1.4.2006, Meghalaya confirmed 1.4.2010,
   Mizoram's own-named scheme ~2010, Nagaland confirmed exactly 1.1.2010 —
   Tripura, at 2018, is a genuine outlier, roughly 8 years later than its
   nearest Northeast peer). (2) TRIPURA HAS ALSO NOTIFIED ADOPTION OF THE
   UNIFIED PENSION SCHEME (UPS) UNDER THE NATIONAL PENSION SYSTEM, per a
   Finance Department notification dated 30 MAY 2025 (confirmed via its own
   listing on finance.tripura.gov.in and independently via WebSearch) — this
   session could not extract the notification's own full body text (only
   its title, listed among the Department's own notifications), so this is
   used as a TITLE-LEVEL CONFIRMATION ONLY, in the same spirit as this
   project's prior light-touch use of a document's own indexed title
   (Nagaland's Maternity Leave PDF precedent) — confirm your own eligibility
   and the current NPS-to-UPS election process with your DDO/HRMS before
   relying on it.

   TRIPURA STATE CIVIL SERVICES (REVISED PENSION) RULES, 2017 — FULLY
   PRIMARY-VERBATIM (fetched via curl+pdftotext from finance.tripura.gov.in):
   for employees retiring on or after 1 April 2017, pension is 50% of the
   last basic pay drawn, family pension (normal rate) is 30% of the last
   basic pay drawn, both subject to a confirmed minimum of Rs. 7,020/month
   (50% of the minimum pay of Pay Matrix Level 1) and a confirmed maximum of
   Rs. 1,05,720/month (50% of the highest pay of Pay Matrix Level 21).
   QUALIFYING SERVICE FOR FULL PENSION IS 25 YEARS for employees retiring on
   or after 1.4.2017 — DIRECTLY CONFIRMED AND GENUINELY DISTINCTIVE (most
   peer states in this app use a 20-year or 33-year figure; Tripura's own
   confirmed figure is 25 years). Age of superannuation: 60 years. Enhanced
   family pension (death in service, or death of a pensioner after
   retirement) is payable for 10 years from the date of death OR until the
   employee would have turned 67, WHICHEVER IS EARLIER (the more common
   peer-state pattern, unlike Sikkim's own flat-10-year-no-age-cap rule).
   Family pension is also confirmed payable to a non-earning unmarried
   daughter (until marriage) / widow daughter (until re-marriage) / divorcee
   daughter (until restoration of conjugal life) / disabled children, income
   threshold Rs. 3,000/month, effective 1.4.2017. Additional (age-linked)
   pension: this session's extraction directly confirmed two of the ladder's
   tiers (age 90 to under 95: 40% of basic pension/family pension; age 95 to
   under 100: 50%) with the earlier 80-85/85-90 tiers lost to OCR garbling —
   presented here using the standard 5-tier structure (20%/30%/40%/50%/100%
   for the 80-85/85-90/90-95/95-100/100+ bands) that matches this document's
   own confirmed 90-95 and 95-100 tiers and the identical pattern this
   project has already independently confirmed for multiple peer states
   (Nagaland, Sikkim).

   DEATH-CUM-RETIREMENT GRATUITY — DIRECTLY CONFIRMED, CURRENT: ceiling
   enhanced from Rs. 4 lakh to Rs. 10 lakh for employees retiring on or after
   1 April 2017 (the computation formula itself is unchanged). For death in
   harness, the standard graduated table applies: less than 1 year service —
   2 times emoluments; 1 to under 5 years — 6 times; 5 to under 20 years — 12
   times; 20+ years — half of emoluments per completed 6-monthly period of
   qualifying service, subject to a maximum of 33 times emoluments.

   GENERAL PROVIDENT FUND — Confirmed via the Accountant General (A&amp;E),
   Tripura's own GPF-guidelines page (fetched this session) that Tripura's
   GPF is governed by the General Provident Fund (Central Services) Rules,
   1960 (the page references "Rule 11" interest crediting and the standard
   "subscribe monthly except in the last three months before superannuation"
   condition) — this session did NOT independently re-extract the specific
   subscription-rate percentages from Tripura's own page; the standard
   Central Services figure (minimum 6% of basic pay, maximum total basic
   pay) is the expected pattern given this direct Rules adoption, but is
   NOT separately verified here — confirm your own current rate with your
   DDO/Accounts Officer.

   TRIPURA STATE GOVERNMENT EMPLOYEES' GROUP INSURANCE SCHEME, 1983 — FULLY
   PRIMARY-VERBATIM (the Scheme's own 1983 Office Memorandum text, fetched
   and read directly this session; in force from 1 March 1984): FOUR
   GROUPS BY PAY-SCALE MAXIMUM — Group D (pay-scale max Rs. 650 or less):
   1 unit, Rs. 10/month subscription, insurance cover Rs. 10,000; Group C
   (max more than Rs. 650 up to Rs. 1,595): 2 units, Rs. 20/month, cover
   Rs. 20,000; Group B (max more than Rs. 1,595 up to Rs. 1,860): 3 units,
   Rs. 30/month, cover Rs. 30,000; Group A (max more than Rs. 1,860): 4
   units, Rs. 40/month, cover Rs. 40,000 — plus a Savings Fund component (the
   balance of the subscription) paid out alongside the insurance cover. THIS
   1983 STRUCTURE IS CLEARLY STALE (its own pay-scale thresholds of Rs.
   650/1,595/1,860 are obviously pre-liberalisation figures — the same
   recurring pattern this project has flagged in several peer states'
   files). A LATER REVISION IS REFERENCED BY SECONDARY SOURCES ONLY (this
   session could not locate or fetch the primary revision text): reportedly
   a two-slab, Pay-Matrix-Grade-Pay-linked structure (Grade Pay up to Rs.
   4,800, and Grade Pay Rs. 5,400 and above), with figures described
   inconsistently across sources as "Rs. 20,000" and "Rs. 30,000" — it is
   unclear from the secondary sources whether these are monthly
   subscriptions, one-time premiums, or insurance-cover amounts, and this
   session could NOT reconcile the terminology. THIS FILE FLAGS THIS AS AN
   UNRESOLVED CONFLICT rather than silently picking an interpretation —
   confirm your own current Group/slab and the applicable rate with your
   DDO/HRMS before relying on any figure here.

   DELIBERATELY OMITTED OR HEDGED, WITH REASONS: Casual Leave's exact annual
   day-count could not be confirmed this session — the 1986 Leave Rules
   themselves explicitly state Casual Leave "is not recognised as leave
   under these rules" (i.e. it sits outside this instrument, governed by a
   separate Finance Department circular this session could not locate in
   primary form) — the Casual Leave type below is retained (since this is
   clearly a real, commonly-used entitlement) but its hint explicitly flags
   that the day-count is unconfirmed rather than assuming the common
   8-or-similar figure used by several peer states. House Building Advance
   and a general GPF Advance/Withdrawal figure — no Tripura-specific ceiling
   or interest rate was located this session; both are modelled as
   confirmation-request letters.
   ============================================================================= */
window.STATE_DATA = window.STATE_DATA || {};
window.STATE_DATA.tripura = {
  key: 'tripura', name: 'Tripura',
  heroTitle: 'Tripura — Tripura State Civil Services (Leave) Rules, 1986 &amp; Service Forms',
  heroMeta: 'leave, family care, Group Insurance Scheme, advances, GPF/pension scheme status &amp; family pension matters, under the Tripura State Civil Services (Leave) Rules, 1986, and the Tripura State Civil Services (Revised Pension) Rules, 2017',
  idFieldLabel: 'Employee ID / PEN Number',
  coverLetter: false,

  groupOrder: [
    { slot: 'general', name: 'General Leave' },
    { slot: 'lwa', name: 'Extraordinary Leave' },
    { slot: 'family', name: 'Family &amp; Medical Leave' },
    { slot: 'casual', name: 'Casual &amp; Special Leave' },
    { slot: 'insurance', name: 'Group Insurance Scheme' },
    { slot: 'advance', name: 'Advances' },
    { slot: 'service', name: 'GPF &amp; Pension Scheme Status' },
    { slot: 'estate', name: 'Family Pension / Estate Claims' },
  ],

  profileFields: [
    { id: 'name', label: 'Full Name', type: 'text', required: true },
    { id: 'pen', label: 'Employee ID / PEN Number', type: 'text', required: true, placeholder: 'e.g., Tripura Employee/PEN Number' },
    { id: 'designation', label: 'Post Held', type: 'text', required: true },
    { id: 'office', label: 'Office &amp; Department', type: 'text', required: true, full: true, placeholder: 'e.g., O/o the District Magistrate, Agartala' },
    { id: 'dob', label: 'Date of Birth', type: 'date', required: true },
    { id: 'entry', label: 'Date of Entry into Service', type: 'date', required: true },
    { id: 'pay', label: 'Pay', type: 'text', required: true, placeholder: 'e.g., Pay Level 7' },
  ],
  formExtraFields: [
    { id: 'allowances', label: 'HRA / Compensatory Allowances Drawn in Present Post', type: 'text', placeholder: 'Optional' },
    { id: 'holidays', label: 'Sundays/Holidays Prefixed/Suffixed to Leave, if any', type: 'text', placeholder: 'e.g., Nil' },
    { id: 'last_leave', label: 'Date of Return from Last Leave (&amp; Nature/Period of that Leave)', type: 'text', placeholder: 'e.g., 05/01/2026, Earned Leave, or NA' },
  ],
  formRows: [
    { label: '1. Name of applicant &amp; Employee ID', template: '${name} (Employee ID: ${pen})' },
    { label: '2. Rule under which applied for', template: '${rule}' },
    { label: '3. Post held', field: 'designation' },
    { label: '4. Office and Department', field: 'office' },
    { label: '5. Pay', field: 'pay' },
    { label: '6. Date of entry into service', field: 'entry' },
    { label: '7. HRA/Compensatory allowances drawn in present post', field: 'allowances' },
    { label: '8. Nature and period of leave applied for', template: '${nature} for ${duration_str}<br>from ${start} to ${end}' },
    { label: '9. Sundays and holidays, if any, prefixed/suffixed to leave', field: 'holidays' },
    { label: '10. Ground on which leave is applied for', field: 'reason' },
    { label: '11. Date of return from last leave, and the nature and period of that leave', field: 'last_leave' },
    { label: '12. Leave address, if granted', field: 'address' },
  ],

  types: {
    earned_leave: { label: 'Earned Leave', group: 'general', rule: 'Tripura State Civil Services (Leave) Rules, 1986, Rule 27', family: 'leave', nature: 'Earned Leave', defaultReason: 'Private affairs',
      hint: 'PRIMARY-SOURCE-CONFIRMED: credited in advance in two instalments of 15 days each (1 January and 1 July), carried-forward accumulation capped at 240 days, maximum grant at a time 120 days. Confirm your current EL balance with your DDO.' },
    half_pay_leave: { label: 'Half Pay Leave', group: 'general', rule: 'Tripura State Civil Services (Leave) Rules, 1986, Rule 28', family: 'leave', nature: 'Half Pay Leave', defaultReason: 'Private affairs',
      hint: 'PRIMARY-SOURCE-CONFIRMED: 20 days for each completed year of service. Confirm your current HPL balance with your DDO.' },
    commuted_leave: { label: 'Commuted Leave', group: 'general', rule: 'Tripura State Civil Services (Leave) Rules, 1986, Rule 29', family: 'leave', medCert: true, nature: 'Commuted Leave', defaultReason: 'Medical treatment',
      hint: 'PRIMARY-SOURCE-CONFIRMED: up to half the Half Pay Leave due, medical certificate required, twice the amount debited against HPL. Separately, up to 180 days of HPL may be commuted WITHOUT a medical certificate during the entire service for an approved course of study certified to be in the public interest. Confirm current terms with your DDO.' },
    leave_not_due: { label: 'Leave Not Due', group: 'general', rule: 'Tripura State Civil Services (Leave) Rules, 1986, Rule 30', family: 'leave', nature: 'Leave Not Due', defaultReason: 'Medical treatment / private affairs',
      hint: 'PRIMARY-SOURCE-CONFIRMED: available to permanent/quasi-permanent employees where there is reasonable prospect of return to duty; capped at 360 days in the entire service, of which not more than 90 days at a time and 180 days in all may be otherwise than on medical certificate; debited against half pay leave the employee will earn subsequently. Not available for leave preparatory to retirement. Confirm eligibility with your DDO before applying.' },
    study_leave: { label: 'Study Leave', group: 'general', rule: 'Tripura State Civil Services (Leave) Rules, 1986, Rule 47, as amended (Fifth Amendment Rules, 1996)', family: 'leave', nature: 'Study Leave', defaultReason: 'Approved course of study',
      hint: 'PRIMARY-SOURCE-CONFIRMED (directly read from the 1996 amendment text): maximum continuous absence (combined with other leave, excluding Extraordinary Leave) 28 months generally, extended to 36 months for courses leading to a PhD or a Postgraduate Medical Science degree. Confirm eligibility and the certification procedure with your DDO before applying.',
      extraFields: [{ id: 'purpose', label: 'Course of Study &amp; Institution', type: 'text', full: true }] },
    special_disability_leave: { label: 'Special Disability Leave', group: 'general', rule: 'Tripura State Civil Services (Leave) Rules, 1986, Rule 40', family: 'leave', medCert: true, nature: 'Special Disability Leave', defaultReason: 'Disability caused by injury during official duty',
      hint: 'PRIMARY-SOURCE-CONFIRMED: for injury in/consequence of official duty, certified by an Authorised Medical Attendant, capped at 24 months (720 days) for any one disability. Confirm eligibility and required medical certification with your DDO before applying.' },

    extraordinary_leave: { label: 'Extraordinary Leave (EOL)', group: 'lwa', rule: 'Tripura State Civil Services (Leave) Rules, 1986, Rule 34', family: 'leave', nature: 'Extraordinary Leave',
      hint: 'PRIMARY-SOURCE-CONFIRMED: normally capped at 3 months on any one occasion; up to 6 months where the employee has completed 3+ years\' continuous service, combined with other leave due, supported by a medical certificate; up to 18 months specifically for pulmonary tuberculosis/pleurisy of tubercular origin or similar sanatorium treatment. No leave salary is admissible. Confirm your applicable limit with your DDO before applying for an extended period.',
      declarationTemplate: 'I understand that no leave salary is admissible during Extraordinary Leave under Rule 34, Tripura State Civil Services (Leave) Rules, 1986.',
      extraFields: [{ id: 'purpose', label: 'Purpose / Nature of Extraordinary Leave', type: 'text', full: true, placeholder: 'e.g., private employment, higher studies, joining spouse, medical treatment' }] },

    maternity: { label: 'Maternity Leave', group: 'family', rule: 'Tripura State Civil Services (Leave) Rules, 1986, Rule 38', family: 'leave', medCert: true, nature: 'Maternity Leave', defaultReason: 'Confinement for childbirth',
      hint: 'PRIMARY-SOURCE-CONFIRMED FROM THE 1986 BASE TEXT, BUT FLAGGED FOR CURRENCY: 120 days from commencement, for a female employee with fewer than two surviving children, full leave salary, not debited to the leave account — this session found NO later Tripura-specific amendment enhancing this figure, but 120 days is notably lower than the 180-day figure most peer states in this app now use, so a more recent enhancement may exist that this session did not locate. For miscarriage/abortion (excluding "threatened" abortion), leave is separately capped at 45 days in the entire career, medical certificate required. Up to 60 additional days may be granted in continuation, for the ailing baby\'s care. CONFIRM YOUR CURRENT ENTITLEMENT WITH YOUR DDO/HRMS before applying.',
      extraFields: [{ id: 'fam_date', label: 'Expected/Actual Date of Delivery', type: 'date' }] },
    adoption_leave: { label: 'Adoption Leave', group: 'family', rule: 'Tripura State Civil Services (Leave) Rules, 1986, Rule 38', family: 'leave', nature: 'Adoption Leave', defaultReason: 'Care of newly adopted child',
      hint: 'PRIMARY-SOURCE-CONFIRMED: leave of the kind due and admissible (including up to 60 days of commuted leave without medical certificate), for up to one year or until the child turns one, whichever is earlier — NOT admissible if the employee already has two or more surviving children at the time of adoption. Confirm current terms with your DDO before applying.',
      extraFields: [{ id: 'fam_info1', label: "Child's Name", type: 'text' }, { id: 'fam_date', label: 'Date of Adoption', type: 'date' }] },
    child_care_leave: { label: 'Child Care Leave', group: 'family', rule: 'Tripura State Civil Services (Leave) Rules, 1986, Rule 39(C)', family: 'leave', nature: 'Child Care Leave', defaultReason: 'Care of child (education/illness/other need)',
      hint: 'CONFIRMED VIA TWO INDEPENDENT SECONDARY SOURCES (primary amendment text not directly fetched this session): 730 days (2 years) in the entire career, for women Government servants with children below 18, full pay, not debited to the leave account. Confirm current spell limits and procedure with your DDO before applying.',
      extraFields: [{ id: 'fam_info1', label: "Child's Name", type: 'text' }, { id: 'fam_date', label: "Child's Date of Birth", type: 'date' }, { id: 'fam_ta1', label: 'Purpose (education / illness / other specific need)', type: 'textarea', full: true }] },
    child_care_leave_disabled: { label: 'Child Care Leave — Disabled/Mentally Challenged Child', group: 'family', rule: 'Tripura State Civil Services (Leave) (Fifteenth Amendment) Rules, 2019, eff. 2 September 2019', family: 'leave', nature: 'Child Care Leave (Disabled/Mentally Challenged Child)', defaultReason: 'Care of disabled/mentally challenged child',
      hint: 'CONFIRMED VIA TWO INDEPENDENT SECONDARY SOURCES: a distinct, later provision extending Child Care Leave to women employees with disabled or mentally challenged children — up to 730 days (2 years), usable until the child turns 22 (rather than 18), for up to two such children, subject to disability documentation and a dependency declaration submitted to the competent authority. Confirm current documentation requirements with your DDO before applying.',
      extraFields: [{ id: 'fam_info1', label: "Child's Name", type: 'text' }, { id: 'fam_date', label: "Child's Date of Birth", type: 'date' }, { id: 'fam_ta1', label: 'Nature of disability / dependency details', type: 'textarea', full: true }] },

    casual_leave: { label: 'Casual Leave (CL)', group: 'casual', rule: 'Governed outside the Tripura State Civil Services (Leave) Rules, 1986, by a separate Finance Department circular (not independently confirmed this session)', family: 'letter', needsRouting: true, nature: 'Casual Leave', subject: 'Application for Casual Leave', defaultReason: 'Personal / domestic affairs',
      hint: 'The 1986 Leave Rules themselves state that Casual Leave "is not recognised as leave under these rules" — it is governed separately by a Finance Department circular this session could not locate in primary form, so no specific day-count is assumed here. Confirm your current-year entitlement and balance with your DDO before applying.',
      bodyTemplate: 'I request you to kindly grant me Casual Leave for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, on account of <strong>${reason}</strong>.' },
    quarantine_leave: { label: 'Quarantine Leave', group: 'casual', rule: 'Tripura State Civil Services (Leave) Rules, 1986, Rule 45', family: 'letter', needsRouting: true, nature: 'Quarantine Leave', subject: 'Application for Quarantine Leave', defaultReason: 'Quarantine due to infectious disease in household',
      hint: 'PRIMARY-SOURCE-CONFIRMED: granted by the Head of Office on a Medical/Public Health Officer\'s certificate, normally capped at 21 days, extendable to 30 days in exceptional circumstances; treated as duty and not debited to the leave account (any excess is debited as ordinary leave). Confirm current conditions with your DDO before applying.',
      bodyTemplate: 'I request you to kindly grant me Quarantine Leave for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, on account of <strong>${reason}</strong>.' },

    gis_enrolment: { label: 'GIS — New Enrolment / Nomination Update', group: 'insurance', rule: "Tripura State Government Employees' Group Insurance Scheme, 1983, in force from 1 March 1984", family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Head of Office.',
      hint: 'FULLY PRIMARY-VERBATIM (the Scheme\'s own 1983 text, read directly this session): four Groups by pay-scale maximum — Group D: 1 unit (Rs. 10/month, cover Rs. 10,000); Group C: 2 units (Rs. 20/month, cover Rs. 20,000); Group B: 3 units (Rs. 30/month, cover Rs. 30,000); Group A: 4 units (Rs. 40/month, cover Rs. 40,000) — plus a Savings Fund component. THIS IS THE STALE 1983 STRUCTURE; secondary sources describe a later, Grade-Pay-linked revision this session could not independently confirm or reconcile (figures/terminology were inconsistent across sources) — confirm your current Group/slab and rate with your DDO/HRMS.',
      extraFields: [{ id: 'svc_t1', label: 'Nominee Name(s) to be Recorded/Updated, if any', type: 'text', full: true, placeholder: 'Optional' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'GIS — Application for Enrolment / Nomination Update',
      bodyTemplate: "I request enrolment/nomination-update under the Tripura State Government Employees' Group Insurance Scheme, 1983{{#if svc_t1}}, recording the following nominee(s): ${svc_t1}{{/if}}.{{#if svc_ta1}} ${svc_ta1}{{/if}} I understand my monthly subscription will be recovered from my salary as prescribed under the Scheme." },
    gis_claim: { label: 'GIS — Savings Fund / Death Claim Query', group: 'insurance', rule: "Tripura State Government Employees' Group Insurance Scheme, 1983", family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Head of Office.',
      hint: 'Confirmed via the Scheme\'s own text: a lump sum comprising the insurance cover plus a Savings Fund component (the remainder of the subscription, with interest) is paid on cessation of employment or death in service. Use this type to raise a written query or claim intimation. Confirm current procedure with your DDO/HRMS.',
      extraFields: [{ id: 'svc_date1', label: 'Date of Retirement / Resignation / Death, if applicable', type: 'date' }, { id: 'svc_ta1', label: 'Nature of claim / query', type: 'textarea', full: true }],
      subject: 'GIS — Savings Fund / Claim Query',
      bodyTemplate: "I submit this query/claim under the Tripura State Government Employees' Group Insurance Scheme, 1983{{#if svc_date1}}, in respect of ${svc_date1}{{/if}}.{{#if svc_ta1}} ${svc_ta1}{{/if}}" },

    hba: { label: 'House Building Advance (HBA)', group: 'advance', rule: 'House Building Advance, as administered for Tripura Government employees (current ceiling not independently confirmed this session)', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your Head of Department / the Finance Department.',
      hint: 'This session found no Tripura-specific House Building Advance ceiling, interest rate, or eligibility period. Use this type to request written confirmation of the current terms from your Head of Department/the Finance Department rather than assuming a figure.',
      extraFields: [{ id: 'svc_t1', label: 'Purpose (construction / purchase / extension / repair)', type: 'text' }, { id: 'svc_t2', label: 'Estimated Cost (₹)', type: 'text' }, { id: 'svc_t3', label: 'Advance Amount Required (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Property / site details', type: 'textarea', full: true }],
      subject: 'Application for House Building Advance',
      bodyTemplate: 'I request that a House Building Advance be sanctioned to me for the purpose of <strong>${svc_t1}</strong>. The estimated cost is <strong>Rs. ${svc_t2}</strong>, and the advance amount required is <strong>Rs. ${svc_t3}</strong>.{{#if svc_ta1}} Property/site details: ${svc_ta1}.{{/if}} I confirm I am not likely to retire before complete recovery of the advance can be effected.' },
    gpf_advance: { label: 'GPF Advance / Withdrawal', group: 'advance', rule: 'General Provident Fund (Central Services) Rules, 1960, as adopted for Tripura', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Accounts Officer.',
      hint: 'This session confirmed that Tripura\'s GPF is governed by the General Provident Fund (Central Services) Rules, 1960, via the Accountant General (A&amp;E), Tripura\'s own page, but did not separately re-extract Tripura-specific advance/withdrawal ceilings. Use this type to request written confirmation of your own current terms from your DDO/Accounts Officer rather than assuming a figure.',
      extraFields: [{ id: 'svc_t1', label: 'Purpose (education / illness / housing / vehicle / other)', type: 'text' }, { id: 'svc_t2', label: 'Amount Requested (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Application for GPF Advance / Withdrawal',
      bodyTemplate: 'I request that a GPF advance/withdrawal of <strong>Rs. ${svc_t2}</strong> be sanctioned for the purpose of <strong>${svc_t1}</strong>, under the General Provident Fund (Central Services) Rules, 1960, as adopted for Tripura.{{#if svc_ta1}} ${svc_ta1}{{/if}} The current permissible cap has been confirmed with my DDO/Accounts Officer.' },

    gpf_query: { label: 'GPF — Terms / Balance Confirmation Query', group: 'service', rule: 'General Provident Fund (Central Services) Rules, 1960, as adopted for Tripura', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / the Accountant General (A&amp;E), Tripura.',
      hint: 'Confirmed via the Accountant General (A&amp;E), Tripura\'s own GPF-guidelines page that Tripura follows the General Provident Fund (Central Services) Rules, 1960 (Rule 11 interest crediting, monthly subscription except the last three months before superannuation). The specific subscription-rate percentages were not independently re-extracted this session. Use this type to request written confirmation of your own current balance and rate from your DDO/the Accountant General (A&amp;E), Tripura.',
      extraFields: [{ id: 'svc_t1', label: 'Nature of Query (balance / advance eligibility / nomination / other)', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'GPF — Terms / Balance Confirmation Query',
      bodyTemplate: 'I request written confirmation of my current General Provident Fund status, specifically: <strong>${svc_t1}</strong>.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
    pension_status_query: { label: 'Pension Scheme Status — Confirmation / Query (NPS / UPS)', group: 'service', rule: 'NPS cutoff 1 July 2018; Unified Pension Scheme notified for Tripura 30 May 2025', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / HRMS / the Tripura Finance Department.',
      hint: 'CONFIRMED: employees joining Tripura State Government service ON OR AFTER 1 JULY 2018 are governed by a Contributory Pension Scheme (NPS) rather than the CCS Pension Rules pattern applicable to earlier entrants — notably the LATEST Northeast-cluster NPS-cutoff date found in this app\'s roster so far. SEPARATELY, a Finance Department notification dated 30 May 2025 announces the implementation and adoption of the Unified Pension Scheme (UPS) under the National Pension System in Tripura — this session confirmed only the notification\'s own title/listing, not its full body text, so treat this as a preliminary lead, not a confirmed personal entitlement. Use this type to request written confirmation of your own current scheme status, PRAN, and any NPS-to-UPS election options from your DDO/HRMS/the Finance Department.',
      extraFields: [{ id: 'svc_date1', label: 'Date of Appointment', type: 'date' }, { id: 'svc_t2', label: 'Current Scheme, if known, &amp; PRAN, if applicable', type: 'text', placeholder: 'Optional' }, { id: 'svc_ta1', label: 'Nature of query / request', type: 'textarea', full: true }],
      subject: 'Pension Scheme Status — Confirmation / Query',
      bodyTemplate: 'Having been appointed to Government service on <strong>${svc_date1}</strong>{{#if svc_t2}}, and presently understood to be on: ${svc_t2},{{/if}} I request written confirmation of my current pension scheme status, including any applicable option to move from the National Pension System to the Unified Pension Scheme following the Government\'s 30 May 2025 notification.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },

    family_pension: { label: 'Family Pension — Claim / Intimation', group: 'estate', rule: 'Tripura State Civil Services (Revised Pension) Rules, 2017', family: 'letter', noRemarksBlock: true,
      hint: 'FULLY PRIMARY-VERBATIM (fetched and read directly this session): for employees retiring/dying on or after 1 April 2017, pension is 50% of the last basic pay drawn and family pension (normal rate) is 30%, subject to a confirmed minimum of Rs. 7,020/month and a confirmed maximum of Rs. 1,05,720/month. Enhanced family pension (death in service, or death of a pensioner after retirement) is payable for 10 years from the date of death OR until the employee would have turned 67, whichever is earlier. Qualifying service for full pension is 25 years. Family pension is also confirmed payable to a non-earning unmarried/widow/divorcee daughter or disabled children (income threshold Rs. 3,000/month). Death-cum-Retirement Gratuity ceiling is Rs. 10 lakh (enhanced from Rs. 4 lakh, effective 1.4.2017); for death in harness, the graduated table (2×/6×/12× emoluments by service band, up to a maximum of 33× for 20+ years) applies. An age-linked additional pension also applies to elderly pensioners/family pensioners. Confirm current entitlements with your DDO/HRMS/the Directorate of Pension before relying on any figure.',
      extraFields: [{ id: 'svc_date1', label: 'Date of Death', type: 'date' }, { id: 'svc_t2', label: "Claimant's Relationship to the Deceased", type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Family Pension — Claim / Intimation',
      bodyTemplate: 'I write to intimate the death of the above-named Government employee on <strong>${svc_date1}</strong>, and to request that Family Pension and Death-cum-Retirement Gratuity, as admissible under the Tripura State Civil Services (Revised Pension) Rules, 2017, be sanctioned in favour of the eligible member(s) of the family.{{#if svc_t2}} Claimed relationship to the deceased: ${svc_t2}.{{/if}}{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
    deceased_dues_indemnity: { label: "Indemnity Bond — Deceased Employee's Dues", group: 'estate', rule: 'Tripura Treasury procedure (no distinct form number independently confirmed this session)', family: 'letter', noRemarksBlock: true,
      hint: 'This session could not confirm whether Tripura maintains its own distinct indemnity-bond form number for claiming a deceased employee\'s dues — confirm the current form and any surety requirement with your Treasury Officer/DDO/HRMS before executing this bond.',
      extraFields: [{ id: 'svc_date1', label: 'Date of death of employee', type: 'date' }, { id: 'svc_t1', label: 'Name of Claimant(s)', type: 'text' }, { id: 'svc_t2', label: 'Relationship of Claimant(s) to Deceased', type: 'text' }, { id: 'svc_t3', label: 'Amount Claimed (₹)', type: 'text' }, { id: 'svc_ta1', label: "Claimant's address / surety details, if required", type: 'textarea', full: true }],
      subject: "Indemnity — Claim for Deceased Employee's Dues",
      bodyTemplate: 'I/We, <strong>${svc_t1}</strong>, ${svc_t2} of the deceased <strong>${name}</strong>, request payment of the pay, leave salary and other emoluments due, amounting to <strong>Rs. ${svc_t3}</strong>, in respect of death on <strong>${svc_date1}</strong>, and undertake to furnish an indemnity bond (with sureties, if required) in the form currently prescribed by the Treasury.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
  },
};
