/* =============================================================================
   PUDUCHERRY (UT) — data for state-tool-engine.js. See assets/js/data/
   kerala.js for the schema reference, assets/js/data/central.js for the CCS
   Rules citations this file directly reuses, and assets/js/data/delhi.js for
   the closest prior UT precedent — a UT WITH its own legislature that still
   turned out to be directly CCS-governed for leave/pension purposes. This is
   the EIGHTH AND FINAL Union Territory added, and the LAST government in
   this entire multi-session state-and-UT rollout — after this file, every
   entry in `OTHER_STATES` is gone and all 28 states + 8 UTs are live.

   FRENCH COLONIAL HERITAGE, AND WHY IT DOESN'T PRODUCE A DISTINCT LEAVE
   RULES INSTRUMENT: Puducherry (the former French colonial territory of
   Pondicherry) merged with India de facto on 1 November 1954, with formal
   de jure cession completed on 16 August 1962 when France ratified the
   Treaty of Cession — confirmed via WebSearch (multiple corroborating
   sources). The modern administrative structure (a Legislative Assembly and
   Council of Ministers under a Lieutenant Governor, per Article 239 of the
   Constitution and the Government of Union Territories Act, 1963) took
   effect from 1 July 1963, commemorated annually as Puducherry Foundation
   Day. DESPITE THIS DISTINCT COLONIAL LINEAGE AND ITS OWN LEGISLATURE (the
   same structural category as Delhi and J&amp;K), this session found — same as
   Delhi — that Puducherry Government employees are governed by CCS (Leave)
   Rules 1972 DIRECTLY, not a surviving French-era or Puducherry-specific
   Leave Rules instrument. This file therefore reuses central.js's CCS Rules
   citations and figures directly for leave/pension/GPF/insurance, on the
   same reasoning already applied for Delhi and the other directly-CCS-
   governed UTs in this app's roster.

   THE "PONDICHERRY CIVIL SERVICE RULES, 1967" NAMING TRAP — THE SAME LESSON
   THIS APP LEARNED FROM DANICS, NOW CONFIRMED FOR PUDUCHERRY'S OWN CADRE:
   this session found the "Pondicherry Civil Service Rules, 1967" — but,
   exactly like the DANICS Rules this project's andamannicobar.js file
   already flagged, this is NOT a general Leave Rules instrument. It is the
   recruitment/cadre-structure Rules for the "Pondicherry Civil Service"
   (PONDICS) — Puducherry's OWN elite, UPSC-recruited generalist
   administrative service (three grades: Junior Administrative Grade, Grade
   I/Selection Grade, and Grade II), analogous to DANICS for the other UTs
   but distinct and Puducherry-specific rather than shared. This is worth
   remembering if this document resurfaces in a future search — it should
   NOT be cited as this UT's Leave Rules source.

   THE FOUR-REGION ADMINISTRATIVE STRUCTURE — A GENUINELY DISTINCTIVE,
   DIRECTLY-CONFIRMED FEATURE: Puducherry UT is not one contiguous territory
   but FOUR SEPARATE, NON-CONTIGUOUS EXCLAVES — Puducherry town/region itself
   and Karaikal (both Tamil Nadu-adjacent), Mahe (a small enclave surrounded
   by Kerala), and Yanam (a small enclave surrounded by Andhra Pradesh) —
   each a former separate French colonial establishment. This session
   confirmed this has DIRECT, CURRENT administrative significance: separate
   Deputy Directors of Accounts and Treasuries for Karaikal, Mahe, and
   Yanam, and REGION-SPECIFIC House Rent Allowance rates under the 7th CPC —
   specifically, HRA for "other rural areas of Puducherry, Karaikal, Mahe
   and Yanam Region" was enhanced from 8% to 9%, effective 1 July 2021 (per
   a Puducherry Finance Department order, confirmed via WebSearch).

   PENSION SCHEME STATUS — STANDARD NATIONAL FRAMEWORK, WITH A CONFIRMED
   PUDUCHERRY-SPECIFIC APPLICATION OF THE NATIONAL "PRE-2004-SELECTED"
   EXCEPTION: this session found NPS confirmed as Puducherry's standard
   framework (Directorate of Accounts and Treasuries, Government of
   Puducherry, own NPS withdrawal-rules page: withdrawal from 6 months
   before superannuation or on reaching age 60, minimum 40% of corpus
   annuitised, full withdrawal permitted if corpus is under Rs. 2 lakh at
   retirement). SEPARATELY, AND DIRECTLY CONFIRMED via a Puducherry Health
   &amp; Family Welfare Department notification (its own title: "Coverage under
   Central Civil Services (Pension) Rules, 1972 of those Central Government
   employees whose selection for appointment were finalized before 1
   January 2004 but joined Government Service on or after 1 January 2004"):
   Puducherry applies the SAME national exception this project's
   chandigarh.js file already found (via DoPPW O.M. No. 57/05/2021-P&amp;PW) —
   employees selected before the 2004 NPS cutoff but who joined after it may
   be covered under the CCS (Pension) Rules, 1972 (i.e. Old Pension Scheme
   terms) rather than NPS. The Unified Pension Scheme (UPS), per the
   national framework, requires a 10% employee contribution of basic pay
   plus Dearness Allowance — confirmed via WebSearch as applicable to
   Puducherry on the same national terms; NPS subscribers generally CANNOT
   switch to OPS outside this limited pre-2004-selection exception and
   certain compassionate-appointment cases.

   DELIBERATELY OMITTED OR HEDGED, WITH REASONS: this session found no
   Puducherry-specific Group Insurance Scheme distinct from CGEGIS, and no
   Puducherry-specific House Building Advance, GPF, or DCRG/Family Pension
   figures distinct from the standard CCS instruments — all reuse
   central.js's citations without independent re-verification, on the same
   reasoning already applied for the other directly-CCS-governed UTs in
   this app's roster. A Puducherry Police Manual chapter ("Leave Procedure
   and Pension") was located but not used as a source here, since it
   governs police personnel specifically rather than the general run of UT
   employees this tool is meant to serve.
   ============================================================================= */
window.STATE_DATA = window.STATE_DATA || {};
window.STATE_DATA.puducherry = {
  key: 'puducherry', name: 'Puducherry',
  heroTitle: 'Puducherry (UT) — CCS Leave &amp; Service Forms',
  heroMeta: 'leave, family care, insurance, advances, GPF/pension scheme status &amp; family pension matters, under Central Civil Services Rules directly, across all four regions of the UT — Puducherry, Karaikal, Mahe and Yanam',
  idFieldLabel: 'Employee / PIS Number',
  coverLetter: false,

  groupOrder: [
    { slot: 'general', name: 'General Leave' },
    { slot: 'lwa', name: 'Extraordinary Leave (EOL)' },
    { slot: 'family', name: 'Family &amp; Medical Leave' },
    { slot: 'casual', name: 'Casual &amp; Special Leave' },
    { slot: 'insurance', name: 'Insurance &amp; Accident Benefits' },
    { slot: 'service', name: 'Service &amp; Pension Scheme Status' },
    { slot: 'advance', name: 'Advances &amp; Loans' },
    { slot: 'estate', name: 'Estate / Death Benefit Claims' },
  ],

  profileFields: [
    { id: 'name', label: 'Full Name', type: 'text', required: true },
    { id: 'pen', label: 'Employee / PIS Number', type: 'text', required: true },
    { id: 'designation', label: 'Designation', type: 'text', required: true },
    { id: 'office', label: 'Office / Department', type: 'text', required: true, full: true, placeholder: 'e.g., O/o the Deputy Director of Accounts and Treasuries, Karaikal' },
    { id: 'dob', label: 'Date of Birth', type: 'date', required: true },
    { id: 'entry', label: 'Date of Entry into Service', type: 'date', required: true },
    { id: 'pay', label: 'Pay Level / Basic Pay', type: 'text', required: true, placeholder: 'e.g., Level 7, Rs 44900' },
  ],
  formRows: [
    { label: '1. Name of applicant', template: '${name} (Employee/PIS No.: ${pen})' },
    { label: '2. Date of Birth', field: 'dob' },
    { label: '3. Designation', field: 'designation' },
    { label: '4. Office / Department', field: 'office' },
    { label: '5. Pay level / Basic Pay', field: 'pay' },
    { label: '6. Date of entry into service', field: 'entry' },
    { label: '7. Address during leave', field: 'address' },
    { label: '8. Nature and period of leave applied for', template: '${nature} for ${duration_str}<br>from ${start} to ${end}' },
    { label: '9. Ground on which leave is applied for', field: 'reason' },
  ],

  types: {
    el: { label: 'Earned Leave (EL)', group: 'general', rule: 'Rule 26 &amp; 27, CCS (Leave) Rules 1972', family: 'leave', nature: 'Earned Leave', defaultReason: 'Private affairs',
      hint: 'Puducherry Government employees are governed by CCS (Leave) Rules 1972 directly, across all four regions of the UT (Puducherry, Karaikal, Mahe and Yanam).' },
    hpl: { label: 'Half Pay Leave (HPL)', group: 'general', rule: 'Rule 29, CCS (Leave) Rules 1972', family: 'leave', nature: 'Half Pay Leave', defaultReason: 'Private affairs' },
    commuted: { label: 'Commuted Leave', group: 'general', rule: 'Rule 30, CCS (Leave) Rules 1972', family: 'leave', nature: 'Commuted Leave (in lieu of Half Pay Leave)', defaultReason: 'Medical treatment (Medical Certificate enclosed)',
      declarationTemplate: 'I undertake that this commuted leave is debited against my Half Pay Leave account at twice the number of days availed, as required under Rule 30, CCS (Leave) Rules 1972.' },
    leavenotdue: { label: 'Leave Not Due', group: 'general', rule: 'Rule 31, CCS (Leave) Rules 1972', family: 'leave', nature: 'Leave Not Due', defaultReason: 'Medical treatment (Medical Certificate enclosed)',
      declarationTemplate: 'I undertake to refund the leave salary drawn during this Leave Not Due, which would not have been admissible had Rule 31, CCS (Leave) Rules 1972 not been applied, in the event of my resignation or voluntary retirement from service before earning it back through future Half Pay Leave accrual.' },

    eol: { label: 'Extraordinary Leave (EOL)', group: 'lwa', rule: 'Rule 32, CCS (Leave) Rules 1972', family: 'leave', nature: 'Extraordinary Leave',
      hint: 'Granted only when no other leave is admissible, or you specifically apply for EOL in writing. No leave of any kind may exceed 5 years continuously (Rule 32); no leave salary is payable during this period.',
      declarationTemplate: 'I understand that no leave salary is admissible during Extraordinary Leave (Rule 32, CCS (Leave) Rules 1972), and that this leave, combined with any other continuous leave, does not exceed the 5-year ceiling prescribed under the rule.',
      extraFields: [{ id: 'purpose', label: 'Purpose / Nature of Extraordinary Leave', type: 'text', full: true, placeholder: 'e.g., private employment, higher studies, joining spouse' }] },

    maternity: { label: 'Maternity Leave', group: 'family', rule: 'Rule 43, CCS (Leave) Rules 1972', family: 'leave', nature: 'Maternity Leave', medCert: true, defaultReason: 'Confinement for childbirth',
      hint: '180 days from commencement, for women employees with fewer than two surviving children. Not debited against the leave account.' },
    miscarriage: { label: 'Miscarriage / Abortion Leave', group: 'family', rule: 'Rule 43, CCS (Leave) Rules 1972', family: 'leave', nature: 'Leave for Miscarriage / Abortion', medCert: true, defaultReason: 'Miscarriage / Abortion',
      hint: 'Up to 45 days on medical certificate, under the Maternity Leave provisions of Rule 43.' },
    paternity: { label: 'Paternity Leave', group: 'family', rule: 'Rule 43-A, CCS (Leave) Rules 1972', family: 'leave', nature: 'Paternity Leave', medCert: true, defaultReason: 'Delivery of child by spouse',
      hint: '15 days, for male employees with fewer than two surviving children, within 15 days before to 6 months after the date of delivery.' },
    paternity_adoption: { label: 'Paternity Leave (Child Adoption)', group: 'family', rule: 'Rule 43-AA, CCS (Leave) Rules 1972', family: 'leave', nature: 'Paternity Leave for Child Adoption', defaultReason: 'Legal adoption of a child',
      hint: '15 days, for male employees with fewer than two surviving children adopting a child below 1 year, within 6 months of a valid adoption. Confirm the current rule sub-clause with your DDO.' },
    child_adoption: { label: 'Child Adoption Leave', group: 'family', rule: 'Rule 43-B, CCS (Leave) Rules 1972', family: 'leave', nature: 'Child Adoption Leave', defaultReason: 'Legal adoption of a child',
      hint: '180 days immediately following a valid adoption, for women employees with fewer than two surviving children adopting a child below 1 year. Confirm the current rule sub-clause with your DDO.' },
    ccl: { label: 'Child Care Leave (CCL)', group: 'family', rule: 'Rule 43-C, CCS (Leave) Rules 1972', family: 'leave', nature: 'Child Care Leave', defaultReason: 'Care of minor child',
      hint: 'For women employees, for their two eldest surviving children, up to age 18 (22 if disabled) — max 730 days across the entire career, not more than 3 spells in a calendar year. Pay taper (full pay for an initial period, reduced thereafter) applies per current DoPT instructions — confirm the exact split and spell limits with your DDO before applying, as these have been revised more than once.',
      declarationTemplate: 'I declare that this Child Care Leave is claimed for my child named below, and that my cumulative Child Care Leave availed to date (across all spells) does not exceed the entitlement admissible under Rule 43-C, CCS (Leave) Rules 1972.',
      extraFields: [{ id: 'child_name', label: "Child's Name", type: 'text' }, { id: 'child_dob', label: "Child's Date of Birth", type: 'date' }] },
    wriil: { label: 'Work Related Illness &amp; Injury Leave (WRIIL)', group: 'family', rule: 'Rule 44, CCS (Leave) Rules 1972', family: 'leave', nature: 'Work Related Illness and Injury Leave', medCert: true, defaultReason: 'Illness / injury attributable to official duty',
      hint: 'For illness/injury attributable to or aggravated by performance of official duty. This replaced the earlier "Hospital Leave" / accidental "Special Disability Leave" categories following the 2019 amendment — confirm the current pay-period structure with your DDO.',
      declarationTemplate: 'I declare that the illness/injury for which this leave is claimed is attributable to, or was aggravated by, the performance of my official duties, as required under Rule 44, CCS (Leave) Rules 1972.' },

    cl: { label: 'Casual Leave (CL)', group: 'casual', rule: 'DoPT O.M. No. 12/9/94-JCA, 14.01.1998 (not part of CCS (Leave) Rules 1972)', family: 'letter', needsRouting: true, nature: 'Casual Leave', subject: 'Application for Casual Leave', defaultReason: 'Personal / domestic affairs',
      hint: 'Currently 8 days per calendar year; not more than 5 days may normally be taken at one time. Confirm your current-year balance with your DDO.',
      bodyTemplate: 'I request you to kindly grant me Casual Leave for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, on account of <strong>${reason}</strong>.' },
    scl_blood: { label: 'Special Casual Leave — Blood Donation', group: 'casual', rule: 'DoPT Office Memorandum (not CCS (Leave) Rules 1972)', family: 'letter', needsRouting: true, nature: 'Special Casual Leave for Blood Donation', subject: 'Application for Special Casual Leave — Blood Donation', defaultReason: 'Voluntary blood / apheresis donation',
      hint: 'Reported as 1 day per donation, up to 4 times a year, at a licensed blood bank — confirm the current entitlement and required proof with your DDO.',
      bodyTemplate: 'I request you to kindly grant me Special Casual Leave for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, on account of voluntary blood / apheresis donation: <strong>${reason}</strong>. Proof of donation from the blood bank is enclosed.' },
    scl_other: { label: 'Special Casual Leave — Other', group: 'casual', rule: 'DoPT Office Memorandum (not CCS (Leave) Rules 1972)', family: 'letter', needsRouting: true, nature: 'Special Casual Leave', subject: 'Application for Special Casual Leave',
      hint: 'Day-limits vary by the specific DoPT circular governing your reason (e.g. representing India/State in sports or cultural events). State the reason and confirm the applicable limit with your DDO — this tool does not assert a specific day cap here.',
      bodyTemplate: 'I request you to kindly grant me Special Casual Leave for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, on account of: <strong>${reason}</strong>.' },
    compoff: { label: 'Compensatory Leave (Comp-off)', group: 'casual', rule: 'DoPT O.M. dated 11.08.1976 (not CCS (Leave) Rules 1972)', family: 'letter', needsRouting: true, nature: 'Compensatory Leave', subject: 'Application for Compensatory Leave', defaultReason: 'Compensation for duty performed on a holiday / beyond office hours',
      hint: 'For duty performed on a Sunday/weekly-off/holiday. Commonly capped at 2 days availed at a time and normally granted within 1 month of becoming due — confirm current instructions with your DDO.',
      extraFields: [{ id: 'comp_dates', label: 'Date(s) of Duty Performed on Holiday / Beyond Office Hours', type: 'text', full: true, placeholder: 'e.g., 12/07/2026 and 19/07/2026' }],
      bodyTemplate: 'I request you to kindly grant me Compensatory Leave for <strong>${duration_str}</strong> in lieu of duty performed by me on the holiday(s) / beyond office hours on <strong>${comp_dates}</strong>. I have not availed of any other compensatory arrangement in respect of this duty.' },

    cgegis_nom: { label: 'CGEGIS — Nomination', group: 'insurance', rule: 'Central Government Employees Group Insurance Scheme, 1980', family: 'letter', subject: 'CGEGIS — Nomination / Change of Nomination', noControllingRemarks: true, controllingHint: 'Typically your DDO / Head of Office.',
      extraFields: [{ id: 'svc_t1', label: 'Nominee Name', type: 'text' }, { id: 'svc_t2', label: 'Nominee Relationship', type: 'text' }, { id: 'svc_t3', label: 'Share, if more than one nominee', type: 'text' }, { id: 'svc_ta1', label: 'Additional nominees / remarks', type: 'textarea', full: true }],
      bodyTemplate: 'I submit my nomination under the Central Government Employees Group Insurance Scheme (CGEGIS), in force since 1.1.1982, as follows: <strong>${svc_t1}</strong>, ${svc_t2}.{{#if svc_t3}} Share: ${svc_t3}.{{/if}}{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
    cgegis_claim: { label: 'CGEGIS — Claim', group: 'insurance', rule: 'Central Government Employees Group Insurance Scheme, 1980', family: 'letter', subject: 'CGEGIS — Claim (Death / Retirement)', noControllingRemarks: true, controllingHint: 'Typically your DDO / Head of Office.',
      extraFields: [{ id: 'svc_date1', label: 'Date of Death / Retirement', type: 'date' }, { id: 'svc_t2', label: 'Amount Claimed, if known (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      bodyTemplate: 'I submit this claim under the Central Government Employees Group Insurance Scheme (CGEGIS), 1980, on account of the event dated <strong>${svc_date1}</strong>.{{#if svc_t2}} Amount claimed, if known: Rs. ${svc_t2}.{{/if}}{{#if svc_ta1}} ${svc_ta1}{{/if}} The insurance + savings fund benefit table is revised quarterly by the Department of Expenditure — the current table has been confirmed with my DDO separately.' },

    pension_status_query: { label: 'Pension Scheme Status — Confirmation / Query (NPS / UPS / Pre-2004 Exception)', group: 'service', rule: 'NPS mandatory for civilian employees joining on/after 01.01.2004; CCS (Pension) Rules 1972 coverage for those selected before 1.1.2004 but joining on/after; UPS operative from 01.04.2025', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / PAO.',
      hint: 'CONFIRMED via a Puducherry Health &amp; Family Welfare Department notification: employees whose selection for appointment was finalised BEFORE 1 January 2004, but who joined Government service ON OR AFTER that date, may be covered under CCS (Pension) Rules, 1972 (Old Pension Scheme terms) rather than NPS — confirm your own eligibility for this exception with your DDO/PAO. Separately, the Unified Pension Scheme (UPS) became operative nationally from 1 April 2025 (10% employee contribution of basic pay plus DA), giving existing NPS subscribers a one-time option to move to UPS. Outside the pre-2004-selection exception and certain compassionate-appointment cases, NPS subscribers generally cannot switch back to the Old Pension Scheme. Use this type to request written confirmation of your own current scheme status from your DDO/PAO.',
      extraFields: [{ id: 'svc_date1', label: 'Date of joining service', type: 'date' }, { id: 'svc_t1', label: 'Date of Selection for Appointment, if different from joining date', type: 'text', placeholder: 'Optional — relevant to the pre-2004-selection exception' }, { id: 'svc_ta1', label: 'Nature of query / request', type: 'textarea', full: true }],
      subject: 'Pension Scheme Status — Confirmation / Query',
      bodyTemplate: 'Having joined service on <strong>${svc_date1}</strong>{{#if svc_t1}} (selection for appointment finalised on: ${svc_t1}){{/if}}, I request written confirmation of my current pension scheme status, including my eligibility, if any, for coverage under CCS (Pension) Rules, 1972 as a pre-1.1.2004-selected appointee, and any applicable NPS-to-UPS election deadline.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
    gpf_advance: { label: 'GPF Advance / Withdrawal', group: 'service', rule: 'General Provident Fund (Central Service) Rules, 1960', family: 'letter', subject: 'Application for GPF Advance / Withdrawal', noControllingRemarks: true, controllingHint: 'Typically your DDO / Accounts Officer.',
      extraFields: [{ id: 'svc_t1', label: 'Purpose (education / illness / housing / vehicle / other)', type: 'text' }, { id: 'svc_t2', label: 'Amount Requested (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      bodyTemplate: 'I request that a GPF advance/withdrawal of <strong>Rs. ${svc_t2}</strong> be sanctioned for the purpose of <strong>${svc_t1}</strong>. This applies since I joined service before 01.01.2004 and hold a General Provident Fund account under the General Provident Fund (Central Service) Rules, 1960.{{#if svc_ta1}} ${svc_ta1}{{/if}} The current permissible advance cap has been confirmed with my DDO / Accounts Officer.' },
    hra_region_query: { label: 'House Rent Allowance — Region-Specific Rate Confirmation', group: 'service', rule: '7th CPC-linked Puducherry Finance Department order, region-specific rates effective 1 July 2021', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Accounts Officer.',
      hint: 'DIRECTLY CONFIRMED: Puducherry UT comprises four separate, non-contiguous regions — Puducherry, Karaikal, Mahe, and Yanam — each with its own Deputy Director of Accounts and Treasuries, and REGION-SPECIFIC House Rent Allowance rates. For "other rural areas" of all four regions, HRA was enhanced from 8% to 9% of basic pay, effective 1 July 2021. Use this type to request written confirmation of your own current HRA classification and rate for your specific posting region from your DDO/Accounts Officer.',
      extraFields: [{ id: 'svc_t1', label: 'Region of Posting', type: 'text', placeholder: 'e.g., Puducherry, Karaikal, Mahe, or Yanam' }, { id: 'svc_ta1', label: 'Nature of query / request', type: 'textarea', full: true }],
      subject: 'House Rent Allowance — Region-Specific Rate Confirmation',
      bodyTemplate: 'I am posted in the <strong>${svc_t1}</strong> region of the Union Territory. I request written confirmation of my current House Rent Allowance classification and applicable rate for this posting.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },

    hba: { label: 'House Building Advance (HBA)', group: 'advance', rule: 'HBA Rules for Central Government Employees, 2017', family: 'letter', subject: 'Application for House Building Advance', noControllingRemarks: true, controllingHint: 'Typically your Head of Department / Ministry of Housing &amp; Urban Affairs nodal office.',
      hint: 'Advance amount is the least of: 34 months’ Basic Pay, ₹25 lakh, or the cost of the house/flat (or your repaying capacity, if lower). The interest rate is revised periodically — confirm the current rate with your DDO before finalising.',
      extraFields: [{ id: 'svc_t1', label: 'Purpose (construction / purchase / extension / repair / site + house)', type: 'text' }, { id: 'svc_t2', label: 'Estimated Cost (₹)', type: 'text' }, { id: 'svc_t3', label: 'Advance Amount Required (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Property / site details', type: 'textarea', full: true }],
      bodyTemplate: 'I request that a House Building Advance be sanctioned to me for the purpose of <strong>${svc_t1}</strong>, under the HBA Rules for Central Government Employees, 2017. The estimated cost is <strong>Rs. ${svc_t2}</strong>, and the advance amount required is <strong>Rs. ${svc_t3}</strong> (within the prescribed cap of 34 months’ Basic Pay / ₹25 lakh / cost, whichever is least).{{#if svc_ta1}} Property/site details: ${svc_ta1}.{{/if}} I have confirmed the currently applicable interest rate with my DDO.' },

    family_pension: { label: 'Family Pension — Claim / Intimation', group: 'estate', rule: 'Rule 54, CCS (Pension) Rules 1972', family: 'letter', subject: 'Family Pension — Claim / Intimation', noRemarksBlock: true,
      extraFields: [{ id: 'svc_date1', label: 'Date of Death', type: 'date' }, { id: 'svc_t2', label: "Claimant's Relationship to the Deceased", type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      bodyTemplate: 'I write to intimate the death of the above-named Government servant on <strong>${svc_date1}</strong>, and to request that Family Pension, as admissible under Rule 54, CCS (Pension) Rules 1972, be sanctioned in favour of the eligible member(s) of the family.{{#if svc_t2}} Claimed relationship to the deceased: ${svc_t2}.{{/if}}{{#if svc_ta1}} ${svc_ta1}{{/if}} Central government offices commonly use Form 3 (Details of Family under Rule 54(12)) and Form 10 (intimation to the nominee) alongside this letter — please advise if your office requires either as a separate enclosure.' },
  },
};
