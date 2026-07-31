/* =============================================================================
   ANDAMAN &amp; NICOBAR ISLANDS — data for state-tool-engine.js. See
   assets/js/data/kerala.js for the schema reference and assets/js/data/
   central.js for the CCS Rules citations this file directly reuses. This is
   the FIRST Union Territory added to this app (the Northeast state cluster
   completed with Tripura) and structurally the most distinctive UT case
   found so far: A&amp;N Islands has NO separate state-cadre Leave/Pension Rules
   of its own — its administration (a Union Territory administered directly
   by the Central Government via a Lieutenant Governor, under the Ministry
   of Home Affairs) staffs the general run of its employees under the SAME
   Central Civil Services (Leave) Rules, 1972 and Central Civil Services
   (Pension) Rules, 1972 that apply to any other Central Government civilian
   employee — confirmed via WebSearch (a service-matters FAQ compilation by
   the A&amp;N Administration itself cites CCS (Leave) Rules, 1972 directly,
   with the same "leave cannot be claimed as a matter of right" and "leave
   not due" language this project's central.js file already carries).

   THE "DELHI, ANDAMAN &amp; NICOBAR ISLANDS, LAKSHADWEEP, DAMAN &amp; DIU AND DADRA
   &amp; NAGAR HAVELI CIVIL SERVICES RULES, 2003" — a genuinely important finding
   this session, but NOT a Leave Rules instrument: this is the recruitment/
   cadre-structure Rules for DANICS and DANIPS, the elite, UPSC-recruited
   generalist administrative and police services common to FIVE Union
   Territories (Delhi, A&amp;N Islands, Lakshadweep, Daman &amp; Diu, and Dadra &amp;
   Nagar Haveli) — analogous to a state's own IAS/IPS-adjacent service, not
   the leave/pension framework for the general run of A&amp;N Administration
   employees. This is worth flagging explicitly for whichever of Delhi,
   Lakshadweep, or Dadra &amp; Nagar Haveli and Daman &amp; Diu is researched next
   in this rollout — the SAME shared cadre-structure instrument will likely
   surface again, and should not be mistaken for that UT's Leave Rules.

   ISLAND-SPECIFIC ALLOWANCES — TWO DIRECTLY-CONFIRMED, DISTINCTIVE FIGURES
   FOUND FOR NO OTHER GOVERNMENT IN THIS APP'S ROSTER: (1) Island Special
   Duty Allowance (ISDA) at 10% of basic pay for Central Government
   civilian employees posted in Andaman &amp; Nicobar Islands, effective 1 July
   2017 (7th CPC-linked Finance Ministry order, confirmed via WebSearch);
   (2) Hard Area Allowance at 20% of basic pay, specifically for postings in
   the Nicobar Group of Islands, ADMISSIBLE IN ADDITION TO ISDA where both
   apply, also effective 1 July 2017. Where more than one Special
   Compensatory Allowance is admissible at a station, the employee may
   choose whichever benefits them most. EMERGENCY PASSAGE CONCESSION — a
   distinctive LTC-adjacent benefit directly confirmed via a DoPT/DoPPW
   memorandum (via WebFetch, February 2020 clarification): Central
   Government employees posted in the North-East Region, Andaman &amp; Nicobar
   Islands, Lakshadweep, and Ladakh get TWO ADDITIONAL occasions during
   their ENTIRE SERVICE CAREER to travel — via this Emergency Passage
   Concession — to their Home Town OR to any other place of residence
   declared by their family for the duration of the posting, restricted to
   the employee's spouse and dependent children.

   LEAVE RULES — REUSES THE SAME CCS (LEAVE) RULES, 1972 CITATIONS THIS
   PROJECT'S central.js FILE ALREADY ESTABLISHED, since A&amp;N Administration
   employees are directly governed by that instrument (not a state-modified
   variant) — Earned Leave (Rules 26 &amp; 27), Half Pay Leave (Rule 29),
   Commuted Leave (Rule 30), Leave Not Due (Rule 31), Extraordinary Leave
   (Rule 32, 5-year continuous-leave ceiling), Maternity Leave/Miscarriage
   (Rule 43), Paternity Leave (Rule 43-A), Paternity Leave for Child
   Adoption (Rule 43-AA), Child Adoption Leave (Rule 43-B), Child Care Leave
   (Rule 43-C), Work Related Illness &amp; Injury Leave (Rule 44), Casual Leave
   and Special Casual Leave variants (DoPT O.M.s, outside the CCS (Leave)
   Rules proper), and Compensatory Leave (DoPT O.M., 11.08.1976). See
   central.js's own header for the sourcing of these exact figures — this
   file does not re-verify them independently since they are the identical
   national instrument, not an A&amp;N-specific variant.

   PENSION SCHEME STATUS — A&amp;N ADMINISTRATION EMPLOYEES FOLLOW THE NATIONAL
   CENTRAL GOVERNMENT TIMELINE DIRECTLY, NOT A SEPARATELY-NOTIFIED UT DATE:
   NPS is mandatory for civilian employees joining on/after 1 January 2004
   (the national CCS cutoff, same as central.js). SEPARATELY, AND VERY
   CURRENT: the Unified Pension Scheme (UPS) became operative for Central
   Government employees from 1 April 2025, and this session directly found
   an A&amp;N-specific news report (Nicobar Times) confirming A&amp;N Administration
   employees under NPS were required to submit their UPS option by 30 June
   2025 (existing NPS subscribers get a 3-month window from 1.4.2025), while
   new recruits joining on/after 1 April 2025 must opt for UPS within 30
   days of joining. THIS SESSION ALSO FOUND EVIDENCE OF A LIVE, NAMED
   OPS-RESTORATION ADVOCACY EFFORT: the Non-Gazetted Officers' Association,
   Andaman &amp; Nicobar Islands, held a "State Level Convention on Restoration
   of Old Pension Scheme" on 12 August 2023 — this is an older date than
   this project's other, more recently-dated Northeast-cluster OPS-dispute
   findings, so its current status (2023 vs. now) is explicitly flagged as
   unconfirmed for currency — confirm your own current scheme status with
   your DDO/PAO regardless of any of these figures.

   GPF, CGEGIS &amp; FAMILY PENSION — same reasoning as above: these are
   directly the national Central Government instruments (General Provident
   Fund (Central Service) Rules, 1960; Central Government Employees Group
   Insurance Scheme, 1980; Rule 54, CCS (Pension) Rules 1972), reused from
   central.js without independent re-verification since A&amp;N Administration
   employees are, for these purposes, Central Government employees.

   DELIBERATELY OMITTED, WITH REASONS: DANICS/DANIPS-specific service
   matters (recruitment quotas, cadre strength, promotion channels) are
   cadre-management/HR matters for a small elite service, not leave/benefit
   applications an ordinary employee would file — out of scope for this
   tool's leave-and-service-forms focus. A House Building Advance-specific
   A&amp;N interest-rate variant was not searched for separately — this file
   reuses central.js's confirmed HBA Rules 2017 figures on the assumption
   they apply identically (not independently re-verified for A&amp;N this
   session).
   ============================================================================= */
window.STATE_DATA = window.STATE_DATA || {};
window.STATE_DATA.andamannicobar = {
  key: 'andamannicobar', name: 'Andaman & Nicobar Islands',
  heroTitle: 'Andaman &amp; Nicobar Islands — CCS Leave &amp; Service Forms, with Island Allowances',
  heroMeta: 'leave, family care, insurance, advances, GPF/pension scheme status &amp; family pension matters, under CCS Rules directly (A&amp;N Administration employees are Central Government employees), plus Island Special Duty/Hard Area Allowance and Emergency Passage Concession matters distinctive to island postings',
  idFieldLabel: 'Employee / PIS Number',
  coverLetter: false,

  groupOrder: [
    { slot: 'general', name: 'General Leave' },
    { slot: 'lwa', name: 'Extraordinary Leave (EOL)' },
    { slot: 'family', name: 'Family &amp; Medical Leave' },
    { slot: 'casual', name: 'Casual &amp; Special Leave' },
    { slot: 'insurance', name: 'Insurance &amp; Accident Benefits' },
    { slot: 'service', name: 'Service &amp; Pension Scheme Status' },
    { slot: 'advance', name: 'Advances &amp; Travel Concessions' },
    { slot: 'estate', name: 'Estate / Death Benefit Claims' },
  ],

  profileFields: [
    { id: 'name', label: 'Full Name', type: 'text', required: true },
    { id: 'pen', label: 'Employee / PIS Number', type: 'text', required: true },
    { id: 'designation', label: 'Designation', type: 'text', required: true },
    { id: 'office', label: 'Office / Department', type: 'text', required: true, full: true, placeholder: 'e.g., O/o the Deputy Commissioner, Port Blair' },
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
    el: { label: 'Earned Leave (EL)', group: 'general', rule: 'Rule 26 &amp; 27, CCS (Leave) Rules 1972', family: 'leave', nature: 'Earned Leave', defaultReason: 'Private affairs' },
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
    scl_organ: { label: 'Special Casual Leave — Organ Donation', group: 'casual', rule: 'DoPT Office Memorandum (not CCS (Leave) Rules 1972)', family: 'letter', needsRouting: true, nature: 'Special Casual Leave for Organ Donation', subject: 'Application for Special Casual Leave — Organ Donation', defaultReason: 'Voluntary organ donation',
      hint: 'Reported as up to 42 days — confirm the current entitlement with your DDO before applying.',
      bodyTemplate: 'I request you to kindly grant me Special Casual Leave for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, on account of voluntary organ donation: <strong>${reason}</strong>. A medical certificate is enclosed.' },
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
      hint: 'DIRECTLY CONFIRMED: the Unified Pension Scheme (UPS) became operative for Central Government employees, including A&amp;N Administration staff, from 1 April 2025. Employees already on NPS as of that date had a 3-month window to submit their UPS option (reported deadline 30 June 2025 for A&amp;N Administration employees specifically); new recruits joining on/after 1.4.2025 must opt for UPS within 30 days of joining, or default to NPS. Use this type to request written confirmation of your own current scheme status and any pending election deadline from your DDO/PAO.',
      extraFields: [{ id: 'svc_date1', label: 'Date of joining service', type: 'date' }, { id: 'svc_t1', label: 'Current Scheme, if known, &amp; PRAN, if applicable', type: 'text', placeholder: 'Optional' }, { id: 'svc_ta1', label: 'Nature of query / request', type: 'textarea', full: true }],
      subject: 'Pension Scheme Status — Confirmation / Query',
      bodyTemplate: 'Having joined service on <strong>${svc_date1}</strong>{{#if svc_t1}}, and presently understood to be on: ${svc_t1},{{/if}} I request written confirmation of my current pension scheme status, including any applicable National Pension System (NPS) to Unified Pension Scheme (UPS) election deadline, following the Government\'s implementation of UPS from 1 April 2025.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
    gpf_advance: { label: 'GPF Advance / Withdrawal', group: 'service', rule: 'General Provident Fund (Central Service) Rules, 1960', family: 'letter', subject: 'Application for GPF Advance / Withdrawal', noControllingRemarks: true, controllingHint: 'Typically your DDO / Accounts Officer.',
      extraFields: [{ id: 'svc_t1', label: 'Purpose (education / illness / housing / vehicle / other)', type: 'text' }, { id: 'svc_t2', label: 'Amount Requested (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      bodyTemplate: 'I request that a GPF advance/withdrawal of <strong>Rs. ${svc_t2}</strong> be sanctioned for the purpose of <strong>${svc_t1}</strong>. This applies since I joined service before 01.01.2004 and hold a General Provident Fund account under the General Provident Fund (Central Service) Rules, 1960.{{#if svc_ta1}} ${svc_ta1}{{/if}} The current permissible advance cap has been confirmed with my DDO / Accounts Officer.' },
    macp: { label: 'MACP Option / Representation', group: 'service', rule: 'DoPT O.M. No. 35034/3/2008-Estt.(D), 19.05.2009', family: 'letter', subject: 'MACP Option / Representation', noControllingRemarks: true, controllingHint: 'Typically your DDO / Head of Office.',
      extraFields: [{ id: 'svc_date1', label: 'Date from which upgradation is due/claimed', type: 'date' }, { id: 'svc_t1', label: 'Present grade pay / level', type: 'text' }, { id: 'svc_t2', label: 'Years of continuous service in this grade', type: 'text' }],
      bodyTemplate: 'I request consideration for a financial upgradation under the Modified Assured Career Progression (MACP) Scheme, DoPT O.M. No. 35034/3/2008-Estt.(D) dated 19.05.2009, effective from <strong>${svc_date1}</strong>. I have completed <strong>${svc_t2}</strong> years of continuous service in my present grade pay/level of <strong>${svc_t1}</strong> without promotion, which I understand qualifies for one of the three upgradations available at 10/20/30 years of service.' },
    island_allowance: { label: 'Island Special Duty Allowance / Hard Area Allowance — Claim / Confirmation', group: 'service', rule: '7th CPC-linked Finance Ministry order, effective 1 July 2017', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Accounts Officer.',
      hint: 'DIRECTLY CONFIRMED: Island Special Duty Allowance (ISDA) at 10% of basic pay for Central Government civilian employees posted in Andaman &amp; Nicobar Islands, effective 1 July 2017. Hard Area Allowance at 20% of basic pay applies specifically to postings in the Nicobar Group of Islands, ADMISSIBLE IN ADDITION TO ISDA where both apply. Where more than one Special Compensatory Allowance is admissible at a station, you may choose whichever benefits you most. Use this type to request written confirmation of your current entitlement and rate from your DDO/Accounts Officer.',
      extraFields: [{ id: 'svc_t1', label: 'Station / Island of Posting', type: 'text', placeholder: 'e.g., Port Blair, or Nicobar Group of Islands' },
        { id: 'svc_date1', label: 'Date of Posting to this Station', type: 'date' }, { id: 'svc_ta1', label: 'Nature of query / request', type: 'textarea', full: true }],
      subject: 'Island Special Duty Allowance / Hard Area Allowance — Claim / Confirmation',
      bodyTemplate: 'Having been posted to <strong>${svc_t1}</strong> with effect from <strong>${svc_date1}</strong>, I request written confirmation of my current entitlement to Island Special Duty Allowance and/or Hard Area Allowance, and the applicable rate(s), under the Finance Ministry order effective 1 July 2017.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },

    hba: { label: 'House Building Advance (HBA)', group: 'advance', rule: 'HBA Rules for Central Government Employees, 2017', family: 'letter', subject: 'Application for House Building Advance', noControllingRemarks: true, controllingHint: 'Typically your Head of Department / Ministry of Housing &amp; Urban Affairs nodal office.',
      hint: 'Advance amount is the least of: 34 months’ Basic Pay, ₹25 lakh, or the cost of the house/flat (or your repaying capacity, if lower). The interest rate is revised periodically — confirm the current rate with your DDO before finalising.',
      extraFields: [{ id: 'svc_t1', label: 'Purpose (construction / purchase / extension / repair / site + house)', type: 'text' }, { id: 'svc_t2', label: 'Estimated Cost (₹)', type: 'text' }, { id: 'svc_t3', label: 'Advance Amount Required (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Property / site details', type: 'textarea', full: true }],
      bodyTemplate: 'I request that a House Building Advance be sanctioned to me for the purpose of <strong>${svc_t1}</strong>, under the HBA Rules for Central Government Employees, 2017. The estimated cost is <strong>Rs. ${svc_t2}</strong>, and the advance amount required is <strong>Rs. ${svc_t3}</strong> (within the prescribed cap of 34 months’ Basic Pay / ₹25 lakh / cost, whichever is least).{{#if svc_ta1}} Property/site details: ${svc_ta1}.{{/if}} I have confirmed the currently applicable interest rate with my DDO.' },
    emergency_passage: { label: 'Emergency Passage Concession', group: 'advance', rule: 'DoPT/DoPPW memorandum (clarification dated February 2020)', family: 'letter', needsRouting: true, noControllingRemarks: true, controllingHint: 'Typically your DDO / Head of Office.',
      hint: 'DIRECTLY CONFIRMED, AND DISTINCTIVE TO EMPLOYEES POSTED IN THE NORTH-EAST REGION, ANDAMAN &amp; NICOBAR ISLANDS, LAKSHADWEEP AND LADAKH: two additional occasions during your ENTIRE SERVICE CAREER to travel to your Home Town, or to any other place of residence declared by your family for the duration of the posting — restricted to your spouse and dependent children. This is separate from and in addition to your regular LTC entitlement. Confirm your remaining Emergency Passage Concession balance with your DDO before applying.',
      extraFields: [{ id: 'svc_t1', label: 'Destination (Home Town or declared family residence)', type: 'text' }, { id: 'svc_ta1', label: 'Names of family members traveling (spouse / dependent children)', type: 'textarea', full: true }],
      subject: 'Application for Emergency Passage Concession',
      bodyTemplate: 'I request sanction of Emergency Passage Concession to travel to <strong>${svc_t1}</strong>, for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, on account of <strong>${reason}</strong>.{{#if svc_ta1}} Family members traveling: ${svc_ta1}.{{/if}} I confirm this is within my entitlement of two such occasions during my entire service career.' },

    family_pension: { label: 'Family Pension — Claim / Intimation', group: 'estate', rule: 'Rule 54, CCS (Pension) Rules 1972', family: 'letter', subject: 'Family Pension — Claim / Intimation', noRemarksBlock: true,
      extraFields: [{ id: 'svc_date1', label: 'Date of Death', type: 'date' }, { id: 'svc_t2', label: "Claimant's Relationship to the Deceased", type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      bodyTemplate: 'I write to intimate the death of the above-named Government servant on <strong>${svc_date1}</strong>, and to request that Family Pension, as admissible under Rule 54, CCS (Pension) Rules 1972, be sanctioned in favour of the eligible member(s) of the family.{{#if svc_t2}} Claimed relationship to the deceased: ${svc_t2}.{{/if}}{{#if svc_ta1}} ${svc_ta1}{{/if}} Central government offices commonly use Form 3 (Details of Family under Rule 54(12)) and Form 10 (intimation to the nominee) alongside this letter — please advise if your office requires either as a separate enclosure.' },
  },
};
