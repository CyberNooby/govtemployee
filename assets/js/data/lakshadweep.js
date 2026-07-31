/* =============================================================================
   LAKSHADWEEP (UT) — data for state-tool-engine.js. See assets/js/data/
   kerala.js for the schema reference, assets/js/data/central.js for the CCS
   Rules citations this file directly reuses, and assets/js/data/
   andamannicobar.js for the closest prior UT precedent — Lakshadweep is
   structurally A&amp;N's near-twin: a small island UT with no legislature,
   administered directly by the Central Government via an Administrator, and
   part of the SAME shared "Delhi, Andaman &amp; Nicobar Islands, Lakshadweep,
   Daman &amp; Diu and Dadra &amp; Nagar Haveli Civil Services" (DANICS-adjacent)
   cadre framework this project's andamannicobar.js file already documented
   — confirmed via WebSearch. This is the seventh Union Territory added, and
   the SECOND-TO-LAST government in this entire rollout (Puducherry remains).

   LEAVE RULES — DIRECTLY CCS-GOVERNED, SAME AS A&amp;N: confirmed via WebSearch
   that Lakshadweep is grouped with A&amp;N/Delhi/Chandigarh/Daman &amp; Diu/Dadra
   &amp; Nagar Haveli under the shared DANICS civil-services framework, and that
   the Central Civil Services (Leave) Rules, 1972 govern leave directly. This
   file therefore reuses central.js's CCS Rules citations and figures
   directly, on the same reasoning already applied for the other directly-
   CCS-governed UTs in this app's roster — not independently re-verified rule
   number-by-rule-number for Lakshadweep specifically.

   ISLAND SPECIAL DUTY ALLOWANCE (ISDA) — CONFIRMED, SHARED WITH A&amp;N: this
   session found that ISDA is explicitly granted to Central Government
   employees on posting to EITHER the Andaman &amp; Nicobar Islands OR
   Lakshadweep — the SAME 7th CPC-era allowance (10% of basic pay, effective
   1 July 2017) this project's andamannicobar.js file already documents for
   A&amp;N, confirmed via multiple independent aggregator sources for
   Lakshadweep specifically too. A DIRECTLY-CONFIRMED OPERATIONAL DETAIL not
   previously captured in this app's A&amp;N file: ISDA is NOT admissible during
   periods of leave/training/tour extending beyond a full calendar month
   while the employee is outside the Andaman &amp; Nicobar/Lakshadweep island
   group. A separate Hard Area Allowance-style addition was also found to
   exist — specifically for Lakshadweep islands OTHER THAN Kavaratti and
   Agatti (the two most developed/connected islands, and presumably the seat
   of the UT Administration and Lakshadweep's main airport respectively) —
   mirroring the same "extra allowance for the more remote islands within
   the group" structure this project's A&amp;N file found for the Nicobar Group
   specifically. THIS SESSION COULD NOT CONFIRM THE EXACT LAKSHADWEEP HARD
   AREA ALLOWANCE PERCENTAGE (one secondary source suggested ISDA rates "up
   to 20%" for island postings generally, which may reflect a combined ISDA
   + Hard Area figure for the more remote islands rather than a base ISDA
   rate — this session could not fully reconcile the exact breakdown, so the
   10% ISDA base rate is presented with confidence, and the additional
   Hard Area component is flagged as unconfirmed-rate rather than guessed).

   TWO GENUINELY DISTINCTIVE ISLAND-TRAVEL BENEFITS, BOTH DIRECTLY CONFIRMED:
   (1) ANNUAL FREE SEA PASSAGE — employees of the Lakshadweep AND A&amp;N
   Administrations may be sanctioned an ADVANCE of 90% of the estimated ship
   fare from the Island to the Mainland and back, for availing this Annual
   Free Sea Passage — a genuinely distinctive benefit this session did not
   find modelled in this app's existing A&amp;N file (worth checking there too
   in a future session, though not retroactively added here). (2) EMERGENCY
   PASSAGE CONCESSION — the same benefit this project's A&amp;N file already
   documents (2 extra career-long occasions to Home Town or a declared
   family residence, restricted to spouse and dependent children, per a
   February 2020 DoPT/DoPPW memorandum) — this session directly confirmed
   Lakshadweep is explicitly named alongside A&amp;N, the North-East Region, and
   Ladakh as covered by this same concession.

   PENSION SCHEME STATUS — presumed, on the same "effectively Central
   Government employees" reasoning as the other directly-CCS-governed UTs in
   this app's roster, to follow the NATIONAL NPS (1.1.2004 cutoff) and UPS
   (operative 1.4.2025) timeline — this session found only a DGLL
   (Directorate General of Lighthouses and Lighships, a specific maritime-
   safety department, not the general Lakshadweep Administration) reference
   confirming the standard 2004 cutoff, so this is presented as the expected
   national pattern rather than an independently Lakshadweep-Administration-
   specific confirmation.

   DELIBERATELY OMITTED OR HEDGED, WITH REASONS: this session found no
   Lakshadweep-specific Group Insurance Scheme distinct from CGEGIS, and no
   Lakshadweep-specific House Building Advance variant or GPF specifics —
   all reuse central.js's citations without independent re-verification, on
   the same reasoning already applied for the other directly-CCS-governed
   UTs in this app's roster.
   ============================================================================= */
window.STATE_DATA = window.STATE_DATA || {};
window.STATE_DATA.lakshadweep = {
  key: 'lakshadweep', name: 'Lakshadweep',
  heroTitle: 'Lakshadweep (UT) — CCS Leave &amp; Service Forms, with Island Allowances',
  heroMeta: 'leave, family care, insurance, advances, GPF/pension scheme status &amp; family pension matters, under Central Civil Services Rules directly, plus Island Special Duty Allowance, Annual Free Sea Passage, and Emergency Passage Concession matters distinctive to island postings',
  idFieldLabel: 'Employee / PIS Number',
  coverLetter: false,

  groupOrder: [
    { slot: 'general', name: 'General Leave' },
    { slot: 'lwa', name: 'Extraordinary Leave (EOL)' },
    { slot: 'family', name: 'Family &amp; Medical Leave' },
    { slot: 'casual', name: 'Casual &amp; Special Leave' },
    { slot: 'insurance', name: 'Insurance &amp; Accident Benefits' },
    { slot: 'service', name: 'Service &amp; Pension Scheme Status' },
    { slot: 'advance', name: 'Advances &amp; Travel' },
    { slot: 'estate', name: 'Estate / Death Benefit Claims' },
  ],

  profileFields: [
    { id: 'name', label: 'Full Name', type: 'text', required: true },
    { id: 'pen', label: 'Employee / PIS Number', type: 'text', required: true },
    { id: 'designation', label: 'Designation', type: 'text', required: true },
    { id: 'office', label: 'Office / Department', type: 'text', required: true, full: true, placeholder: 'e.g., O/o the Collector &amp; Development Commissioner, Kavaratti' },
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
      hint: 'Lakshadweep Administration employees are governed by CCS (Leave) Rules 1972 directly, the same as other Central Government civilian employees.' },
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

    pension_status_query: { label: 'Pension Scheme Status — Confirmation / Query (NPS / UPS)', group: 'service', rule: 'NPS mandatory for civilian employees joining on/after 01.01.2004; Unified Pension Scheme operative from 01.04.2025', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / PAO.',
      hint: 'The Unified Pension Scheme (UPS) became operative for Central Government employees nationally from 1 April 2025, giving existing NPS subscribers a one-time option to move to UPS. This session found only a Directorate General of Lighthouses and Lighships (DGLL, a specific maritime department, not the general Lakshadweep Administration) reference confirming the standard 1.1.2004 NPS cutoff for Lakshadweep-connected employees — presumed, not independently confirmed for the Lakshadweep Administration generally. Use this type to request written confirmation of your own current scheme status and any applicable election deadline from your DDO/PAO.',
      extraFields: [{ id: 'svc_date1', label: 'Date of joining service', type: 'date' }, { id: 'svc_t1', label: 'Current Scheme, if known, &amp; PRAN, if applicable', type: 'text', placeholder: 'Optional' }, { id: 'svc_ta1', label: 'Nature of query / request', type: 'textarea', full: true }],
      subject: 'Pension Scheme Status — Confirmation / Query',
      bodyTemplate: 'Having joined service on <strong>${svc_date1}</strong>{{#if svc_t1}}, and presently understood to be on: ${svc_t1},{{/if}} I request written confirmation of my current pension scheme status, including any applicable National Pension System (NPS) to Unified Pension Scheme (UPS) election deadline, following the Government\'s implementation of UPS from 1 April 2025.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
    gpf_advance: { label: 'GPF Advance / Withdrawal', group: 'service', rule: 'General Provident Fund (Central Service) Rules, 1960', family: 'letter', subject: 'Application for GPF Advance / Withdrawal', noControllingRemarks: true, controllingHint: 'Typically your DDO / Accounts Officer.',
      extraFields: [{ id: 'svc_t1', label: 'Purpose (education / illness / housing / vehicle / other)', type: 'text' }, { id: 'svc_t2', label: 'Amount Requested (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      bodyTemplate: 'I request that a GPF advance/withdrawal of <strong>Rs. ${svc_t2}</strong> be sanctioned for the purpose of <strong>${svc_t1}</strong>. This applies since I joined service before 01.01.2004 and hold a General Provident Fund account under the General Provident Fund (Central Service) Rules, 1960.{{#if svc_ta1}} ${svc_ta1}{{/if}} The current permissible advance cap has been confirmed with my DDO / Accounts Officer.' },
    island_allowance: { label: 'Island Special Duty Allowance / Hard Area Allowance — Claim / Confirmation', group: 'service', rule: '7th CPC-linked Finance Ministry order, effective 1 July 2017', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Accounts Officer.',
      hint: 'DIRECTLY CONFIRMED: Island Special Duty Allowance (ISDA) at 10% of basic pay for Central Government civilian employees posted in Lakshadweep, effective 1 July 2017 — NOT admissible during leave/training/tour extending beyond a full calendar month while outside the island group. A separate Hard Area Allowance-style addition applies to Lakshadweep islands OTHER THAN Kavaratti and Agatti — this session could not confirm the exact additional rate. Use this type to request written confirmation of your current entitlement and rate(s) from your DDO/Accounts Officer.',
      extraFields: [{ id: 'svc_t1', label: 'Island of Posting', type: 'text', placeholder: 'e.g., Kavaratti, Agatti, or another island' },
        { id: 'svc_date1', label: 'Date of Posting to this Island', type: 'date' }, { id: 'svc_ta1', label: 'Nature of query / request', type: 'textarea', full: true }],
      subject: 'Island Special Duty Allowance / Hard Area Allowance — Claim / Confirmation',
      bodyTemplate: 'Having been posted to <strong>${svc_t1}</strong> with effect from <strong>${svc_date1}</strong>, I request written confirmation of my current entitlement to Island Special Duty Allowance and/or Hard Area Allowance, and the applicable rate(s), under the Finance Ministry order effective 1 July 2017.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },

    hba: { label: 'House Building Advance (HBA)', group: 'advance', rule: 'HBA Rules for Central Government Employees, 2017', family: 'letter', subject: 'Application for House Building Advance', noControllingRemarks: true, controllingHint: 'Typically your Head of Department / Ministry of Housing &amp; Urban Affairs nodal office.',
      hint: 'Advance amount is the least of: 34 months’ Basic Pay, ₹25 lakh, or the cost of the house/flat (or your repaying capacity, if lower). The interest rate is revised periodically — confirm the current rate with your DDO before finalising.',
      extraFields: [{ id: 'svc_t1', label: 'Purpose (construction / purchase / extension / repair / site + house)', type: 'text' }, { id: 'svc_t2', label: 'Estimated Cost (₹)', type: 'text' }, { id: 'svc_t3', label: 'Advance Amount Required (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Property / site details', type: 'textarea', full: true }],
      bodyTemplate: 'I request that a House Building Advance be sanctioned to me for the purpose of <strong>${svc_t1}</strong>, under the HBA Rules for Central Government Employees, 2017. The estimated cost is <strong>Rs. ${svc_t2}</strong>, and the advance amount required is <strong>Rs. ${svc_t3}</strong> (within the prescribed cap of 34 months’ Basic Pay / ₹25 lakh / cost, whichever is least).{{#if svc_ta1}} Property/site details: ${svc_ta1}.{{/if}} I have confirmed the currently applicable interest rate with my DDO.' },
    sea_passage_advance: { label: 'Annual Free Sea Passage — Advance', group: 'advance', rule: 'DoPT/DoE instructions for Lakshadweep and A&amp;N Administration employees', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Accounts Officer.',
      hint: 'DIRECTLY CONFIRMED, AND DISTINCTIVE TO LAKSHADWEEP AND A&amp;N EMPLOYEES: an advance of 90% of the estimated ship fare from the Island to the Mainland and back may be sanctioned for availing your Annual Free Sea Passage. Confirm your current eligibility, frequency, and the adjustment procedure with your DDO/Accounts Officer before applying.',
      extraFields: [{ id: 'svc_t1', label: 'Route (e.g., Kavaratti to Kochi and back)', type: 'text' }, { id: 'svc_t2', label: 'Estimated Ship Fare (₹)', type: 'text' }, { id: 'svc_t3', label: 'Advance Amount Requested (90% of fare) (₹)', type: 'text' }],
      subject: 'Application for Annual Free Sea Passage — Advance',
      bodyTemplate: 'I request that an advance of <strong>Rs. ${svc_t3}</strong> (90% of the estimated ship fare of Rs. ${svc_t2}) be sanctioned for my Annual Free Sea Passage from <strong>${svc_t1}</strong>. I confirm this is within my current entitlement and will submit actual fare receipts for adjustment on completion of the journey.' },
    emergency_passage: { label: 'Emergency Passage Concession', group: 'advance', rule: 'DoPT/DoPPW memorandum (clarification dated February 2020)', family: 'letter', needsRouting: true, noControllingRemarks: true, controllingHint: 'Typically your DDO / Head of Office.',
      hint: 'DIRECTLY CONFIRMED, AND DISTINCTIVE TO EMPLOYEES POSTED IN THE NORTH-EAST REGION, ANDAMAN &amp; NICOBAR ISLANDS, LAKSHADWEEP AND LADAKH: two additional occasions during your ENTIRE SERVICE CAREER to travel to your Home Town, or to any other place of residence declared by your family for the duration of the posting — restricted to your spouse and dependent children. This is separate from and in addition to your regular LTC entitlement, and separate from your Annual Free Sea Passage. Confirm your remaining Emergency Passage Concession balance with your DDO before applying.',
      extraFields: [{ id: 'svc_t1', label: 'Destination (Home Town or declared family residence)', type: 'text' }, { id: 'svc_ta1', label: 'Names of family members traveling (spouse / dependent children)', type: 'textarea', full: true }],
      subject: 'Application for Emergency Passage Concession',
      bodyTemplate: 'I request sanction of Emergency Passage Concession to travel to <strong>${svc_t1}</strong>, for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, on account of <strong>${reason}</strong>.{{#if svc_ta1}} Family members traveling: ${svc_ta1}.{{/if}} I confirm this is within my entitlement of two such occasions during my entire service career.' },

    family_pension: { label: 'Family Pension — Claim / Intimation', group: 'estate', rule: 'Rule 54, CCS (Pension) Rules 1972', family: 'letter', subject: 'Family Pension — Claim / Intimation', noRemarksBlock: true,
      extraFields: [{ id: 'svc_date1', label: 'Date of Death', type: 'date' }, { id: 'svc_t2', label: "Claimant's Relationship to the Deceased", type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      bodyTemplate: 'I write to intimate the death of the above-named Government servant on <strong>${svc_date1}</strong>, and to request that Family Pension, as admissible under Rule 54, CCS (Pension) Rules 1972, be sanctioned in favour of the eligible member(s) of the family.{{#if svc_t2}} Claimed relationship to the deceased: ${svc_t2}.{{/if}}{{#if svc_ta1}} ${svc_ta1}{{/if}} Central government offices commonly use Form 3 (Details of Family under Rule 54(12)) and Form 10 (intimation to the nominee) alongside this letter — please advise if your office requires either as a separate enclosure.' },
  },
};
