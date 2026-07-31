/* =============================================================================
   CHANDIGARH (UT) — data for state-tool-engine.js. See assets/js/data/
   kerala.js for the schema reference and assets/js/data/central.js for the
   CCS Rules citations this file directly reuses, plus assets/js/data/
   andamannicobar.js for the prior UT precedent this file's approach follows
   most closely. Chandigarh is the second Union Territory added.

   THE HEADLINE FINDING — A MAJOR, RECENT, WELL-CORROBORATED RULES
   TRANSITION: Chandigarh Administration employees were governed by the
   PUNJAB CIVIL SERVICES RULES for decades (a legacy of Chandigarh's history
   as the shared capital of Punjab and Haryana, administered largely by
   deputed Punjab-cadre officers) until the Ministry of Home Affairs
   notified their transition to CENTRAL CIVIL SERVICES RULES, EFFECTIVE 1
   APRIL 2022 (MHA notification dated 29 March 2022) — confirmed via FIVE
   INDEPENDENT MAJOR NEWS SOURCES this session found via a search-engine
   fallback (WebSearch itself hit its session rate limit mid-research; a
   direct WebFetch of DuckDuckGo's HTML search endpoint was used instead,
   and is flagged here as a materially different research method than this
   project's usual WebSearch tool — treat the underlying claims with the
   same scrutiny, but note the sourcing PATH itself was atypical this
   session): Indian Express ("Chandigarh notifies Central Services Rules,
   retirement age goes up from 58 to 60 years"), The Tribune ("Now,
   Chandigarh staff to retire at 60"), The Hindu ("Rules notified to align
   Chandigarh employees with Central Civil Services"), Hindustan Times
   ("Central service rules for Chandigarh administration employees
   notified"), and PTC News (explicitly stating the 1 April 2022 effective
   date and the 29 March 2022 MHA notification date). THREE SPECIFIC,
   CROSS-CORROBORATED CHANGES FROM THIS TRANSITION: (1) age of
   superannuation raised from 58 to 60 years; (2) Child Care Leave extended
   from 1 year to 2 years for women employees (i.e. aligned to the standard
   CCS Rule 43-C 730-day/2-year figure this project's central.js and
   andamannicobar.js files already carry, replacing whatever shorter
   Punjab-style provision applied before); (3) grade-based conveyance
   allowance increases (an allowances matter, not modelled as a leave/
   pension type in this file).

   PENSION — A GENUINELY DISTINCTIVE, ACTIVE TRANSITION STORY, NOT A SIMPLE
   ONE-TIME SWITCH: this session found (via the same DuckDuckGo-fallback
   method) that Chandigarh Administration employees RETIRING ON OR AFTER 1
   APRIL 2022 are governed by the Central Civil Services (Pension) Rules,
   1972 and are entitled to Central Pay Scales. SEPARATELY AND MORE
   DISTINCTIVELY: a Department of Pension &amp; Pensioners' Welfare Office
   Memorandum (No. 57/05/2021-P&amp;PW, dated 3 March 2023) enables employees
   "appointed against posts or vacancies advertised/notified" under terms
   that would have made them CCS (Pension) Rules-eligible, to move from the
   National Pension System (NPS) to the CCS (Pension) Rules, 1972 framework
   (i.e. a form of OPS) — this is the well-known central-government
   one-time NPS-to-OPS option for specific pre-2004-vacancy recruits,
   APPLIED HERE IN THE CHANDIGARH UT CONTEXT. This session found a
   secondary source describing the UT Administration's own commitment to
   "complete the entire process of identifying eligible employees and then
   transitioning them" BY 15 AUGUST 2025 — this file could not independently
   verify whether that internal deadline was actually met, so it is
   presented as a reported administrative target, not a confirmed
   completion date. SEPARATELY CONFIRMED: a GPF (Central Service) Rules,
   1960 amendment notification specific to Chandigarh, dated 22 September
   2022, from the Department of Pension and Pensioners' Welfare — GPF is
   therefore also confirmed to have transitioned to the Central instrument
   alongside Leave and Pension.

   HISTORICAL CONTEXT ONLY, NOT CURRENT FIGURES — THE PUNJAB CIVIL SERVICES
   RULES (PRE-1.4.2022 BASELINE): this session fetched and read (via
   curl+pdftotext, after the familiar WebFetch "binary/corrupted" false
   negative on the same PDF) Chapter VIII (Leave) of the Punjab Civil
   Services Rules, Volume I, Part I — confirming, for instance, a 300-day
   Earned Leave encashment/accumulation ceiling (Rule 8.21/8.22) under the
   PRE-TRANSITION regime. This file does NOT use any Punjab CSR figure as a
   current entitlement for Chandigarh employees — since the 1 April 2022
   transition, the CURRENT governing instrument is CCS (Leave) Rules 1972
   directly, and this file reuses the same rule citations and figures
   already independently verified in this project's central.js file (see
   that file's own header for the underlying CCS sourcing), on the same
   reasoning already applied for Andaman &amp; Nicobar Islands: post-transition
   Chandigarh employees ARE, for leave/pension/GPF purposes, effectively
   Central Government employees, not a state-modified variant.

   RESEARCH METHOD CAVEAT: because WebSearch was unavailable for a portion
   of this session (hit a session-level rate limit), several of the claims
   above rely on a DuckDuckGo HTML-search fallback via WebFetch rather than
   this project's usual WebSearch tool. The underlying source snippets
   (five independent major news outlets, converging on the same date and
   figures) are treated as reliable on their own corroborating weight, but
   this file flags the atypical research path for transparency, and none of
   the primary government notification PDFs themselves (the MHA
   notification, the DoPPW OM 57/05/2021-P&amp;PW, or the September 2022 GPF
   notification) were independently fetched and read in full this session —
   only referenced via secondary news/summary coverage. Confirm current
   figures with your DDO/HRMS before relying on any of them.

   DELIBERATELY OMITTED, WITH REASONS: Grade-based conveyance allowance
   changes from the 2022 transition are an allowances matter, not a leave/
   service-application type, and are not modelled here. Group Insurance
   specifics for Chandigarh (post-transition CGEGIS terms) were not
   independently re-verified this session — this file reuses central.js's
   CGEGIS 1980 citation on the same "effectively Central Government
   employees" reasoning as GPF/Pension, without a separate primary check.
   ============================================================================= */
window.STATE_DATA = window.STATE_DATA || {};
window.STATE_DATA.chandigarh = {
  key: 'chandigarh', name: 'Chandigarh',
  heroTitle: 'Chandigarh (UT) — CCS Leave &amp; Service Forms',
  heroMeta: 'leave, family care, insurance, advances, GPF/pension scheme status &amp; family pension matters, under Central Civil Services Rules — Chandigarh Administration employees transitioned from Punjab Civil Services Rules to CCS Rules effective 1 April 2022',
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
    { id: 'office', label: 'Office / Department', type: 'text', required: true, full: true, placeholder: 'e.g., O/o the Deputy Commissioner, Chandigarh' },
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
      hint: 'Chandigarh Administration employees have been governed by CCS (Leave) Rules 1972 directly since transitioning from Punjab Civil Services Rules, effective 1 April 2022.' },
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
      hint: 'DIRECTLY PART OF THE 2022 TRANSITION STORY: Chandigarh Administration extended CCL from 1 year to 2 years for women employees as part of the shift to CCS Rules (confirmed via multiple news sources), aligning to the standard CCS Rule 43-C figure — for two eldest surviving children, up to age 18 (22 if disabled), max 730 days across the entire career, not more than 3 spells in a calendar year. Pay taper (full pay for an initial period, reduced thereafter) applies per current DoPT instructions — confirm the exact split and spell limits with your DDO before applying.',
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

    pension_status_query: { label: 'Pension Scheme Status — Confirmation / Query (NPS / CCS Pension Rules)', group: 'service', rule: 'CCS (Pension) Rules 1972 for those retiring on/after 1.4.2022; DoPPW O.M. No. 57/05/2021-P&amp;PW, 3.3.2023 (NPS-to-CCS Pension Rules option)', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / PAO.',
      hint: 'CONFIRMED: Chandigarh Administration employees retiring on or after 1 April 2022 are governed by CCS (Pension) Rules, 1972, entitled to Central Pay Scales. SEPARATELY, a DoPPW Office Memorandum (No. 57/05/2021-P&amp;PW, dated 3 March 2023) allows employees appointed against posts/vacancies that would have made them CCS (Pension) Rules-eligible to move from NPS to CCS (Pension) Rules (a form of Old Pension Scheme) — the UT Administration reportedly targeted completing this identification-and-transition process by 15 August 2025, though this session could not confirm whether that target was actually met. Use this type to request written confirmation of your own current scheme status and eligibility for this option from your DDO/PAO.',
      extraFields: [{ id: 'svc_date1', label: 'Date of joining service', type: 'date' }, { id: 'svc_t1', label: 'Current Scheme, if known, &amp; PRAN, if applicable', type: 'text', placeholder: 'Optional' }, { id: 'svc_ta1', label: 'Nature of query / request', type: 'textarea', full: true }],
      subject: 'Pension Scheme Status — Confirmation / Query',
      bodyTemplate: 'Having joined service on <strong>${svc_date1}</strong>{{#if svc_t1}}, and presently understood to be on: ${svc_t1},{{/if}} I request written confirmation of my current pension scheme status, including my eligibility, if any, to move from the National Pension System to CCS (Pension) Rules, 1972 under DoPPW O.M. No. 57/05/2021-P&amp;PW dated 3 March 2023.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
    gpf_advance: { label: 'GPF Advance / Withdrawal', group: 'service', rule: 'General Provident Fund (Central Service) Rules, 1960, as amended for Chandigarh, 22.9.2022', family: 'letter', subject: 'Application for GPF Advance / Withdrawal', noControllingRemarks: true, controllingHint: 'Typically your DDO / Accounts Officer.',
      extraFields: [{ id: 'svc_t1', label: 'Purpose (education / illness / housing / vehicle / other)', type: 'text' }, { id: 'svc_t2', label: 'Amount Requested (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      bodyTemplate: 'I request that a GPF advance/withdrawal of <strong>Rs. ${svc_t2}</strong> be sanctioned for the purpose of <strong>${svc_t1}</strong>. This applies since I joined service before 01.01.2004 and hold a General Provident Fund account under the General Provident Fund (Central Service) Rules, 1960, as amended for Chandigarh Administration employees with effect from 22 September 2022.{{#if svc_ta1}} ${svc_ta1}{{/if}} The current permissible advance cap has been confirmed with my DDO / Accounts Officer.' },
    macp: { label: 'MACP Option / Representation', group: 'service', rule: 'DoPT O.M. No. 35034/3/2008-Estt.(D), 19.05.2009', family: 'letter', subject: 'MACP Option / Representation', noControllingRemarks: true, controllingHint: 'Typically your DDO / Head of Office.',
      extraFields: [{ id: 'svc_date1', label: 'Date from which upgradation is due/claimed', type: 'date' }, { id: 'svc_t1', label: 'Present grade pay / level', type: 'text' }, { id: 'svc_t2', label: 'Years of continuous service in this grade', type: 'text' }],
      bodyTemplate: 'I request consideration for a financial upgradation under the Modified Assured Career Progression (MACP) Scheme, DoPT O.M. No. 35034/3/2008-Estt.(D) dated 19.05.2009, effective from <strong>${svc_date1}</strong>. I have completed <strong>${svc_t2}</strong> years of continuous service in my present grade pay/level of <strong>${svc_t1}</strong> without promotion, which I understand qualifies for one of the three upgradations available at 10/20/30 years of service.' },
    retirement_age_query: { label: 'Superannuation Age Confirmation (58 → 60 Transition)', group: 'service', rule: 'MHA notification effective 1 April 2022 (dated 29 March 2022)', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Head of Office.',
      hint: 'CONFIRMED VIA MULTIPLE NEWS SOURCES: the age of superannuation for Chandigarh Administration employees was raised from 58 to 60 years as part of the 1 April 2022 transition to Central Civil Services Rules. This session did not independently fetch the primary MHA notification text — use this type to request written confirmation of your own applicable superannuation date from your DDO/Head of Office, particularly if you were near the pre-transition retirement age at the time of the change.',
      extraFields: [{ id: 'svc_ta1', label: 'Nature of query', type: 'textarea', full: true }],
      subject: 'Superannuation Age Confirmation',
      bodyTemplate: 'Following the Government\'s notification bringing Chandigarh Administration employees under Central Civil Services Rules with effect from 1 April 2022, and the associated increase in the age of superannuation from 58 to 60 years, I request written confirmation of my own applicable superannuation date.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },

    hba: { label: 'House Building Advance (HBA)', group: 'advance', rule: 'HBA Rules for Central Government Employees, 2017', family: 'letter', subject: 'Application for House Building Advance', noControllingRemarks: true, controllingHint: 'Typically your Head of Department / Ministry of Housing &amp; Urban Affairs nodal office.',
      hint: 'Advance amount is the least of: 34 months’ Basic Pay, ₹25 lakh, or the cost of the house/flat (or your repaying capacity, if lower). The interest rate is revised periodically — confirm the current rate with your DDO before finalising.',
      extraFields: [{ id: 'svc_t1', label: 'Purpose (construction / purchase / extension / repair / site + house)', type: 'text' }, { id: 'svc_t2', label: 'Estimated Cost (₹)', type: 'text' }, { id: 'svc_t3', label: 'Advance Amount Required (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Property / site details', type: 'textarea', full: true }],
      bodyTemplate: 'I request that a House Building Advance be sanctioned to me for the purpose of <strong>${svc_t1}</strong>, under the HBA Rules for Central Government Employees, 2017. The estimated cost is <strong>Rs. ${svc_t2}</strong>, and the advance amount required is <strong>Rs. ${svc_t3}</strong> (within the prescribed cap of 34 months’ Basic Pay / ₹25 lakh / cost, whichever is least).{{#if svc_ta1}} Property/site details: ${svc_ta1}.{{/if}} I have confirmed the currently applicable interest rate with my DDO.' },

    family_pension: { label: 'Family Pension — Claim / Intimation', group: 'estate', rule: 'Rule 54, CCS (Pension) Rules 1972', family: 'letter', subject: 'Family Pension — Claim / Intimation', noRemarksBlock: true,
      extraFields: [{ id: 'svc_date1', label: 'Date of Death', type: 'date' }, { id: 'svc_t2', label: "Claimant's Relationship to the Deceased", type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      bodyTemplate: 'I write to intimate the death of the above-named Government servant on <strong>${svc_date1}</strong>, and to request that Family Pension, as admissible under Rule 54, CCS (Pension) Rules 1972, be sanctioned in favour of the eligible member(s) of the family.{{#if svc_t2}} Claimed relationship to the deceased: ${svc_t2}.{{/if}}{{#if svc_ta1}} ${svc_ta1}{{/if}} Central government offices commonly use Form 3 (Details of Family under Rule 54(12)) and Form 10 (intimation to the nominee) alongside this letter — please advise if your office requires either as a separate enclosure.' },
  },
};
