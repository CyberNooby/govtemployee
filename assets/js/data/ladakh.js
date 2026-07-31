/* =============================================================================
   LADAKH (UT) — data for state-tool-engine.js. See assets/js/data/kerala.js
   for the schema reference, assets/js/data/central.js for the CCS Rules
   citations this file directly reuses, and assets/js/data/andamannicobar.js
   for the closest prior UT precedent (island/remote-posting allowances
   layered on top of directly-CCS-governed base rules). Ladakh is the sixth
   Union Territory added, and — per this project's own prior-session caution
   after Jammu &amp; Kashmir turned out to have retained its own distinct 1979
   Leave Rules — this file's leave/pension baseline was researched fresh
   rather than assumed, despite Ladakh being carved out of the SAME 2019
   Jammu &amp; Kashmir Reorganisation Act as J&amp;K itself.

   THE ANSWER: UNLIKE J&amp;K, LADAKH DOES FOLLOW THE "DIRECTLY CCS-GOVERNED"
   PATTERN — confirmed via WebSearch: the Ladakh UT Administration's own
   circulars (e.g. Circular No. 01-GAD of 2019, dated 30 November 2019, and
   Order No. 115-LA(GAD) of 2020, dated 8 December 2020, both governing
   "availing of leave by government employees/seeking station leave
   permission") are administrative INSTRUCTIONS layered ON TOP OF the
   Central Civil Services (Leave) Rules, 1972, not a replacement or
   continuation of J&amp;K's own 1979 Rules. This makes sense given Ladakh —
   unlike J&amp;K — has NO legislature of its own and is administered directly
   by the Central Government via a Lieutenant Governor, putting it in the
   same structural category as Andaman &amp; Nicobar Islands, Chandigarh, and
   Dadra &amp; Nagar Haveli and Daman &amp; Diu rather than J&amp;K or Delhi. This file
   therefore reuses central.js's CCS Rules citations and figures directly
   for leave/pension/GPF/insurance, on the same reasoning already applied
   for those UTs — this session did NOT independently re-verify each CCS
   rule number/figure for Ladakh specifically.

   THE GENUINELY DISTINCTIVE STORY — REMOTE-POSTING ALLOWANCES, SPECIFIC TO
   LADAKH'S HIGH-ALTITUDE, EXTREME-CLIMATE, LOGISTICALLY DIFFICULT TERRAIN:
   two directly-confirmed allowances, both layered on top of the base CCS
   salary structure rather than being leave/pension figures themselves: (1)
   SPECIAL DUTY ALLOWANCE (SDA) at 10% of basic pay (7th CPC rate) for
   Central Government civilian employees serving in Ladakh — explicitly
   EXTENDED to Ladakh following the 2019 J&amp;K reorganisation (this is a
   DIFFERENT, separately-named allowance from Andaman &amp; Nicobar Islands'
   own "Island Special Duty Allowance," even though both happen to be set
   at the same 10% rate — worth NOT conflating the two schemes when
   comparing states/UTs in this app). (2) SPECIAL COMPENSATORY (REMOTE
   LOCALITY) ALLOWANCE (SCRLA), at 6th CPC rates, offered as an OPTIONAL
   ALTERNATIVE to SDA — an employee may choose whichever benefits them
   most, the same "pick the more favourable compensatory allowance"
   pattern this project's A&amp;N file already documented for its own ISDA/
   Hard Area Allowance pairing. SEPARATELY: this session found that a HIGH
   ALTITUDE ALLOWANCE exists for Ladakh postings, but the specific rate
   table located (Rs. 810-16,800 rising to Rs. 2,700-25,000 per month)
   applies to DEFENCE FORCES AND CENTRAL ARMED POLICE FORCES (CAPF)
   personnel specifically, via the Risk &amp; Hardship (R&amp;H) Matrix — this
   session could NOT confirm whether an equivalent High Altitude Allowance
   applies to ordinary CIVILIAN UT Administration employees, and this file
   does NOT assume it does; a hedged query type is included instead of
   asserting a civilian entitlement.

   PENSION SCHEME STATUS — CONFIRMED NPS, WITH ACTIVE (UNRESOLVED)
   RESTORATION ADVOCACY: this session found that the All Jammu Kashmir &amp;
   Ladakh Teachers' Federation (AJKLTF) — a shared employee association
   spanning BOTH J&amp;K and Ladakh, reflecting their common 2019-reorganisation
   origin — has sought restoration of the Old Pension Scheme (OPS),
   indicating Ladakh UT employees are currently on NPS. UNLIKE J&amp;K (where
   this project's own jammukashmir.js file found an EXPLICIT February 2026
   government refusal to restore OPS), this session found NO similarly
   explicit, dated ruling-out specific to Ladakh — the AJKLTF's advocacy
   appears to remain live/unresolved as of this session. The Unified
   Pension Scheme (UPS) became operative for Central Government employees
   nationally from 1 April 2025 — presumed, but not independently
   Ladakh-specific-confirmed this session, to apply to Ladakh UT employees
   on the same national timeline as other directly-CCS-governed UTs.

   ADMINISTRATIVE CONTEXT, NOT MODELLED AS A LEAVE/SERVICE-APPLICATION
   TYPE: this session found two genuinely significant, well-documented but
   NOT leave/pension-related current stories worth noting for context only:
   (1) a domicile-and-reservation policy reserving 85% of jobs for
   Scheduled Tribes in Ladakh (whose population is reported as over 97%
   tribal), with domicile requiring 15 years' residence after 31 October
   2019 (or 7 years of schooling with Class 10/12 exams taken in Ladakh) —
   a recruitment-eligibility matter, not something an existing employee
   applies for via this tool, and not modelled here (the same reasoning
   this project applied to J&amp;K's own domicile rules); (2) an ACTIVE,
   UNRESOLVED political demand for Ladakh's inclusion in the Constitution's
   Sixth Schedule (which would grant substantially more autonomous
   decision-making power than the existing, more limited Ladakh Autonomous
   Hill Development Councils of Leh and Kargil currently have) — this
   session found the demand still pending/under consideration by the Union
   Government (MHA reportedly "mulling" partial safeguards), NOT resolved
   either way, and not itself a leave/service matter.

   DELIBERATELY OMITTED OR HEDGED, WITH REASONS: this session found no
   Ladakh-specific Group Insurance Scheme distinct from CGEGIS, and no
   Ladakh-specific House Building Advance variant — both reuse central.js's
   citations without independent re-verification, on the same "effectively
   Central Government employees" reasoning already applied for the other
   directly-CCS-governed UTs in this app's roster.
   ============================================================================= */
window.STATE_DATA = window.STATE_DATA || {};
window.STATE_DATA.ladakh = {
  key: 'ladakh', name: 'Ladakh',
  heroTitle: 'Ladakh (UT) — CCS Leave &amp; Service Forms, with Remote-Posting Allowances',
  heroMeta: 'leave, family care, insurance, advances, GPF/pension scheme status &amp; family pension matters, under Central Civil Services Rules directly, plus Special Duty Allowance / Special Compensatory (Remote Locality) Allowance matters distinctive to Ladakh\'s high-altitude postings',
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
    { id: 'office', label: 'Office / Department', type: 'text', required: true, full: true, placeholder: 'e.g., O/o the Deputy Commissioner, Leh' },
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
      hint: 'Ladakh UT Administration employees are governed by CCS (Leave) Rules 1972 directly, with additional local instructions on station-leave permission for travel outside the UT (Ladakh UT Administration Circular No. 01-GAD of 2019 and Order No. 115-LA(GAD) of 2020) — confirm current station-leave procedure with your DDO.' },
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
      hint: 'Ladakh UT employees are confirmed to be on NPS. The All Jammu Kashmir &amp; Ladakh Teachers\' Federation (AJKLTF) has separately sought restoration of the Old Pension Scheme for Ladakh (and J&amp;K) employees — this session found no explicit Ladakh-specific ruling-out or granting of that request (unlike neighbouring J&amp;K, where restoration was explicitly ruled out in February 2026), so treat this as an active, unresolved advocacy point. The Unified Pension Scheme (UPS) became operative nationally from 1 April 2025. Use this type to request written confirmation of your own current scheme status and any applicable election deadline from your DDO/PAO.',
      extraFields: [{ id: 'svc_date1', label: 'Date of joining service', type: 'date' }, { id: 'svc_t1', label: 'Current Scheme, if known, &amp; PRAN, if applicable', type: 'text', placeholder: 'Optional' }, { id: 'svc_ta1', label: 'Nature of query / request', type: 'textarea', full: true }],
      subject: 'Pension Scheme Status — Confirmation / Query',
      bodyTemplate: 'Having joined service on <strong>${svc_date1}</strong>{{#if svc_t1}}, and presently understood to be on: ${svc_t1},{{/if}} I request written confirmation of my current pension scheme status, including any applicable National Pension System (NPS) to Unified Pension Scheme (UPS) election deadline, following the Government\'s implementation of UPS from 1 April 2025.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
    gpf_advance: { label: 'GPF Advance / Withdrawal', group: 'service', rule: 'General Provident Fund (Central Service) Rules, 1960', family: 'letter', subject: 'Application for GPF Advance / Withdrawal', noControllingRemarks: true, controllingHint: 'Typically your DDO / Accounts Officer.',
      extraFields: [{ id: 'svc_t1', label: 'Purpose (education / illness / housing / vehicle / other)', type: 'text' }, { id: 'svc_t2', label: 'Amount Requested (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      bodyTemplate: 'I request that a GPF advance/withdrawal of <strong>Rs. ${svc_t2}</strong> be sanctioned for the purpose of <strong>${svc_t1}</strong>. This applies since I joined service before 01.01.2004 and hold a General Provident Fund account under the General Provident Fund (Central Service) Rules, 1960.{{#if svc_ta1}} ${svc_ta1}{{/if}} The current permissible advance cap has been confirmed with my DDO / Accounts Officer.' },
    remote_allowance_query: { label: 'Special Duty Allowance / Remote Locality Allowance — Confirmation', group: 'service', rule: 'Special Duty Allowance (SDA), 10% of basic pay (7th CPC), extended to Ladakh following the 2019 reorganisation; optional Special Compensatory (Remote Locality) Allowance (SCRLA) at 6th CPC rates', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Accounts Officer.',
      hint: 'DIRECTLY CONFIRMED: Special Duty Allowance (SDA) at 10% of basic pay for Central Government civilian employees serving in Ladakh, extended here following the 2019 J&amp;K reorganisation. An optional alternative, Special Compensatory (Remote Locality) Allowance (SCRLA) at 6th CPC rates, may be chosen instead if more beneficial — you cannot claim both. A High Altitude Allowance also exists for Ladakh postings, but the rate table this session located applies specifically to Defence Forces/CAPF personnel — this session could NOT confirm whether an equivalent applies to civilian UT Administration employees, so no figure is assumed here. Use this type to request written confirmation of your current entitlement and rate from your DDO/Accounts Officer.',
      extraFields: [{ id: 'svc_t1', label: 'Station of Posting', type: 'text', placeholder: 'e.g., Leh, or Kargil' }, { id: 'svc_date1', label: 'Date of Posting to this Station', type: 'date' }, { id: 'svc_ta1', label: 'Nature of query / request', type: 'textarea', full: true }],
      subject: 'Special Duty Allowance / Remote Locality Allowance — Confirmation',
      bodyTemplate: 'Having been posted to <strong>${svc_t1}</strong> with effect from <strong>${svc_date1}</strong>, I request written confirmation of my current entitlement to Special Duty Allowance and/or Special Compensatory (Remote Locality) Allowance, and the applicable rate(s), and whether a civilian equivalent of the High Altitude Allowance applies to my posting.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },

    hba: { label: 'House Building Advance (HBA)', group: 'advance', rule: 'HBA Rules for Central Government Employees, 2017', family: 'letter', subject: 'Application for House Building Advance', noControllingRemarks: true, controllingHint: 'Typically your Head of Department / Ministry of Housing &amp; Urban Affairs nodal office.',
      hint: 'Advance amount is the least of: 34 months’ Basic Pay, ₹25 lakh, or the cost of the house/flat (or your repaying capacity, if lower). The interest rate is revised periodically — confirm the current rate with your DDO before finalising.',
      extraFields: [{ id: 'svc_t1', label: 'Purpose (construction / purchase / extension / repair / site + house)', type: 'text' }, { id: 'svc_t2', label: 'Estimated Cost (₹)', type: 'text' }, { id: 'svc_t3', label: 'Advance Amount Required (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Property / site details', type: 'textarea', full: true }],
      bodyTemplate: 'I request that a House Building Advance be sanctioned to me for the purpose of <strong>${svc_t1}</strong>, under the HBA Rules for Central Government Employees, 2017. The estimated cost is <strong>Rs. ${svc_t2}</strong>, and the advance amount required is <strong>Rs. ${svc_t3}</strong> (within the prescribed cap of 34 months’ Basic Pay / ₹25 lakh / cost, whichever is least).{{#if svc_ta1}} Property/site details: ${svc_ta1}.{{/if}} I have confirmed the currently applicable interest rate with my DDO.' },

    family_pension: { label: 'Family Pension — Claim / Intimation', group: 'estate', rule: 'Rule 54, CCS (Pension) Rules 1972', family: 'letter', subject: 'Family Pension — Claim / Intimation', noRemarksBlock: true,
      extraFields: [{ id: 'svc_date1', label: 'Date of Death', type: 'date' }, { id: 'svc_t2', label: "Claimant's Relationship to the Deceased", type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      bodyTemplate: 'I write to intimate the death of the above-named Government servant on <strong>${svc_date1}</strong>, and to request that Family Pension, as admissible under Rule 54, CCS (Pension) Rules 1972, be sanctioned in favour of the eligible member(s) of the family.{{#if svc_t2}} Claimed relationship to the deceased: ${svc_t2}.{{/if}}{{#if svc_ta1}} ${svc_ta1}{{/if}} Central government offices commonly use Form 3 (Details of Family under Rule 54(12)) and Form 10 (intimation to the nominee) alongside this letter — please advise if your office requires either as a separate enclosure.' },
  },
};
