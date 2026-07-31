/* =============================================================================
   DADRA &amp; NAGAR HAVELI AND DAMAN &amp; DIU (UT) — data for state-tool-engine.js.
   See assets/js/data/kerala.js for the schema reference, assets/js/data/
   central.js for the CCS Rules citations this file directly reuses, and
   assets/js/data/andamannicobar.js for the closest prior UT precedent — this
   UT follows that same "always directly CCS-governed" pattern (unlike
   Chandigarh's documented mid-stream Punjab-Rules-to-CCS-Rules transition).
   This is the third Union Territory added to this app.

   THE HEADLINE FINDING — GOVERNMENT EMPLOYEES DIRECTLY FOLLOW CCS (LEAVE)
   RULES: confirmed via WebSearch that "government employees follow the
   Central Civil Services (Leave) Rules" in this UT, the same direct-
   adoption pattern already established for Andaman &amp; Nicobar Islands —
   this file therefore reuses central.js's CCS Rules citations and figures
   without independent re-verification of the leave/pension rule numbers
   themselves, on the same reasoning applied there: for leave/pension/GPF
   purposes, employees of a UT without its own legislature are effectively
   Central Government employees.

   THE 2020 MERGER — THE GENUINELY DISTINCTIVE STORY FOR THIS UT: Dadra &amp;
   Nagar Haveli and Daman &amp; Diu were TWO SEPARATE Union Territories until
   the Dadra and Nagar Haveli and Daman and Diu (Merger of Union
   Territories) Act, 2019 (tabled in Parliament 26 November 2019, assented
   to by the President 9 December 2019) merged them into a single UT
   EFFECTIVE 26 JANUARY 2020 — confirmed via WebSearch (multiple
   corroborating sources including the MHA's own merger document and
   Wikipedia's administrative-history coverage). The merger created three
   districts (Dadra and Nagar Haveli, Daman, and Diu) under one combined
   administration, with Daman chosen as the new capital. CRITICALLY FOR
   THIS FILE'S PURPOSES: this session found explicit confirmation that the
   merger brought "no change in administration and service conditions and
   reservation" for existing employees, and specifically no change to the
   status of Group III and IV employees — i.e. this was a deliberately
   NON-DISRUPTIVE merger from a service-rules standpoint, reinforcing (not
   complicating) the "directly CCS-governed" baseline above. An employee
   whose service originated under the FORMER separate Daman &amp; Diu or Dadra
   &amp; Nagar Haveli administrations, prior to 26 January 2020, may still find
   it useful to cite this merger explicitly when confirming continuity of
   service/seniority with their DDO — a distinct query type is included for
   this below.

   PENSION SCHEME STATUS — REUSES THE NATIONAL CCS/NPS/UPS TIMELINE, WITH A
   SOURCING CAVEAT: this session did NOT find a UT-specific news article
   analogous to the Nicobar Times piece this project's andamannicobar.js
   file cites for A&amp;N's own UPS rollout — no DNH&amp;DD-specific UPS
   notification or news coverage was located this session. Since this UT's
   employees are directly CCS-governed like A&amp;N, this file presents the
   NATIONAL Central Government NPS/UPS timeline (NPS mandatory for civilian
   employees joining on/after 1.1.2004; Unified Pension Scheme operative
   from 1 April 2025, per the Department of Financial Services' own
   notification, giving a one-time NPS-to-UPS option to existing NPS
   subscribers) as the expected-but-not-locally-confirmed baseline for this
   UT's employees, explicitly flagged as such — confirm your own current
   scheme status and any UT-specific election deadline with your DDO/PAO,
   since this file could not verify whether DNH&amp;DD Administration set its
   own local deadline the way A&amp;N reportedly did (30 June 2025). General
   UPS mechanics also confirmed this session: 50% of the average basic pay
   drawn in the last 12 months before retirement, for 25+ years of
   qualifying service; proportionate pension for 10-25 years of service.

   DELIBERATELY OMITTED, WITH REASONS: this session found no DNH&amp;DD-specific
   Island/Hardship-style special compensatory allowance analogous to A&amp;N's
   ISDA/Hard Area Allowance, or an Emergency Passage Concession extension to
   this UT — a search for "special allowance hardship" for this UT
   surfaced only a Minimum Wages Act "Special Allowance" (a private-sector
   dearness-allowance-equivalent, unrelated to government employee
   postings), so no such type is modelled here. GPF and CGEGIS specifics
   were not independently re-verified this session — this file reuses
   central.js's General Provident Fund (Central Service) Rules, 1960 and
   CGEGIS 1980 citations on the same "effectively Central Government
   employees" reasoning already applied for A&amp;N and Chandigarh, without a
   separate primary check for this UT specifically.
   ============================================================================= */
window.STATE_DATA = window.STATE_DATA || {};
window.STATE_DATA.dadranagarhaveliandamandiu = {
  key: 'dadranagarhaveliandamandiu', name: 'Dadra &amp; Nagar Haveli and Daman &amp; Diu',
  heroTitle: 'Dadra &amp; Nagar Haveli and Daman &amp; Diu (UT) — CCS Leave &amp; Service Forms',
  heroMeta: 'leave, family care, insurance, advances, GPF/pension scheme status &amp; family pension matters, under Central Civil Services Rules directly — this UT merged two formerly separate administrations (Dadra &amp; Nagar Haveli, and Daman &amp; Diu) into one on 26 January 2020, with no change to employee service conditions',
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
    { id: 'office', label: 'Office / Department', type: 'text', required: true, full: true, placeholder: 'e.g., O/o the Collector, Daman' },
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
      hint: 'Employees of this UT Administration are directly governed by CCS (Leave) Rules 1972.' },
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
      hint: 'The Unified Pension Scheme (UPS) became operative for Central Government employees nationally from 1 April 2025, giving existing NPS subscribers a one-time option to move to UPS (50% of average basic pay of the last 12 months before retirement, for 25+ years of qualifying service; proportionate for 10-25 years). THIS SESSION FOUND NO UT-SPECIFIC NEWS ARTICLE CONFIRMING A LOCAL ELECTION DEADLINE for this UT (unlike Andaman &amp; Nicobar Islands, where a local deadline was separately reported) — use this type to request written confirmation of your own current scheme status and any applicable election deadline from your DDO/PAO.',
      extraFields: [{ id: 'svc_date1', label: 'Date of joining service', type: 'date' }, { id: 'svc_t1', label: 'Current Scheme, if known, &amp; PRAN, if applicable', type: 'text', placeholder: 'Optional' }, { id: 'svc_ta1', label: 'Nature of query / request', type: 'textarea', full: true }],
      subject: 'Pension Scheme Status — Confirmation / Query',
      bodyTemplate: 'Having joined service on <strong>${svc_date1}</strong>{{#if svc_t1}}, and presently understood to be on: ${svc_t1},{{/if}} I request written confirmation of my current pension scheme status, including any applicable National Pension System (NPS) to Unified Pension Scheme (UPS) election deadline, following the Government\'s implementation of UPS from 1 April 2025.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
    gpf_advance: { label: 'GPF Advance / Withdrawal', group: 'service', rule: 'General Provident Fund (Central Service) Rules, 1960', family: 'letter', subject: 'Application for GPF Advance / Withdrawal', noControllingRemarks: true, controllingHint: 'Typically your DDO / Accounts Officer.',
      extraFields: [{ id: 'svc_t1', label: 'Purpose (education / illness / housing / vehicle / other)', type: 'text' }, { id: 'svc_t2', label: 'Amount Requested (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      bodyTemplate: 'I request that a GPF advance/withdrawal of <strong>Rs. ${svc_t2}</strong> be sanctioned for the purpose of <strong>${svc_t1}</strong>. This applies since I joined service before 01.01.2004 and hold a General Provident Fund account under the General Provident Fund (Central Service) Rules, 1960.{{#if svc_ta1}} ${svc_ta1}{{/if}} The current permissible advance cap has been confirmed with my DDO / Accounts Officer.' },
    macp: { label: 'MACP Option / Representation', group: 'service', rule: 'DoPT O.M. No. 35034/3/2008-Estt.(D), 19.05.2009', family: 'letter', subject: 'MACP Option / Representation', noControllingRemarks: true, controllingHint: 'Typically your DDO / Head of Office.',
      extraFields: [{ id: 'svc_date1', label: 'Date from which upgradation is due/claimed', type: 'date' }, { id: 'svc_t1', label: 'Present grade pay / level', type: 'text' }, { id: 'svc_t2', label: 'Years of continuous service in this grade', type: 'text' }],
      bodyTemplate: 'I request consideration for a financial upgradation under the Modified Assured Career Progression (MACP) Scheme, DoPT O.M. No. 35034/3/2008-Estt.(D) dated 19.05.2009, effective from <strong>${svc_date1}</strong>. I have completed <strong>${svc_t2}</strong> years of continuous service in my present grade pay/level of <strong>${svc_t1}</strong> without promotion, which I understand qualifies for one of the three upgradations available at 10/20/30 years of service.' },
    merger_continuity_query: { label: 'Service Continuity Confirmation (Pre-2020 Merger)', group: 'service', rule: 'Dadra and Nagar Haveli and Daman and Diu (Merger of Union Territories) Act, 2019, effective 26 January 2020', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Head of Office.',
      hint: 'CONFIRMED: the merger of the formerly separate Dadra &amp; Nagar Haveli and Daman &amp; Diu Union Territories, effective 26 January 2020, brought no change to service conditions, reservation status, or Group III/IV employee status. If your service originated under either former administration before that date, use this type to request written confirmation of your continuous service/seniority record from your DDO/Head of Office.',
      extraFields: [{ id: 'svc_t1', label: 'Former Administration (Dadra & Nagar Haveli, or Daman & Diu)', type: 'text' }, { id: 'svc_date1', label: 'Date of Original Appointment', type: 'date' }, { id: 'svc_ta1', label: 'Nature of query / request', type: 'textarea', full: true }],
      subject: 'Service Continuity Confirmation (Pre-2020 Merger)',
      bodyTemplate: 'Having originally been appointed under the former <strong>${svc_t1}</strong> Administration on <strong>${svc_date1}</strong>, prior to the merger of Union Territories effective 26 January 2020, I request written confirmation of my continuous service and seniority record under the present combined UT Administration.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },

    hba: { label: 'House Building Advance (HBA)', group: 'advance', rule: 'HBA Rules for Central Government Employees, 2017', family: 'letter', subject: 'Application for House Building Advance', noControllingRemarks: true, controllingHint: 'Typically your Head of Department / Ministry of Housing &amp; Urban Affairs nodal office.',
      hint: 'Advance amount is the least of: 34 months’ Basic Pay, ₹25 lakh, or the cost of the house/flat (or your repaying capacity, if lower). The interest rate is revised periodically — confirm the current rate with your DDO before finalising.',
      extraFields: [{ id: 'svc_t1', label: 'Purpose (construction / purchase / extension / repair / site + house)', type: 'text' }, { id: 'svc_t2', label: 'Estimated Cost (₹)', type: 'text' }, { id: 'svc_t3', label: 'Advance Amount Required (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Property / site details', type: 'textarea', full: true }],
      bodyTemplate: 'I request that a House Building Advance be sanctioned to me for the purpose of <strong>${svc_t1}</strong>, under the HBA Rules for Central Government Employees, 2017. The estimated cost is <strong>Rs. ${svc_t2}</strong>, and the advance amount required is <strong>Rs. ${svc_t3}</strong> (within the prescribed cap of 34 months’ Basic Pay / ₹25 lakh / cost, whichever is least).{{#if svc_ta1}} Property/site details: ${svc_ta1}.{{/if}} I have confirmed the currently applicable interest rate with my DDO.' },

    family_pension: { label: 'Family Pension — Claim / Intimation', group: 'estate', rule: 'Rule 54, CCS (Pension) Rules 1972', family: 'letter', subject: 'Family Pension — Claim / Intimation', noRemarksBlock: true,
      extraFields: [{ id: 'svc_date1', label: 'Date of Death', type: 'date' }, { id: 'svc_t2', label: "Claimant's Relationship to the Deceased", type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      bodyTemplate: 'I write to intimate the death of the above-named Government servant on <strong>${svc_date1}</strong>, and to request that Family Pension, as admissible under Rule 54, CCS (Pension) Rules 1972, be sanctioned in favour of the eligible member(s) of the family.{{#if svc_t2}} Claimed relationship to the deceased: ${svc_t2}.{{/if}}{{#if svc_ta1}} ${svc_ta1}{{/if}} Central government offices commonly use Form 3 (Details of Family under Rule 54(12)) and Form 10 (intimation to the nominee) alongside this letter — please advise if your office requires either as a separate enclosure.' },
  },
};
