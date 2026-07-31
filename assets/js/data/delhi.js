/* =============================================================================
   DELHI (NCT) — data for state-tool-engine.js. See assets/js/data/kerala.js
   for the schema reference and assets/js/data/central.js for the CCS Rules
   citations this file directly reuses, plus assets/js/data/andamannicobar.js,
   chandigarh.js and dadranagarhaveliandamandiu.js for the prior UT precedent
   this file's leave/pension approach follows. Delhi is the fourth Union
   Territory added, and the FIRST WITH ITS OWN LEGISLATURE (a National
   Capital Territory under Article 239AA, with an elected Chief Minister and
   Legislative Assembly) — this session deliberately did NOT assume the
   simpler "always directly CCS-governed, no distinctive local story"
   pattern established for Andaman &amp; Nicobar Islands and Dadra &amp; Nagar
   Haveli and Daman &amp; Diu, and researched fresh, per this project's own
   prior-session note that Delhi's distinct constitutional status might
   produce a genuinely different story. It did, on the SERVICES-CONTROL
   side rather than the leave/pension-figures side (see below).

   LEAVE/PENSION/GPF/INSURANCE FIGURES — CONFIRMED, VIA WEBSEARCH, TO STILL
   BE THE DIRECT CENTRAL INSTRUMENTS: "Delhi government employees operate
   under the Central Civil Services (Leave) Rules," and this session
   separately confirmed (via Delhi's own Principal Accounts Office, COA
   Delhi, chapter references on GPF and CGEGIS) that GNCTD employees'
   General Provident Fund and Central Government Employees' Group Insurance
   Scheme (CGEGIS, in force from 1 January 1982) are administered as the
   same central instruments — so, despite Delhi's distinct legislative
   status, THIS FILE STILL REUSES central.js's CCS Rules citations and
   figures directly for leave/pension/GPF/insurance, on the same reasoning
   already applied for the other three UTs in this app's roster.

   THE GENUINELY DISTINCTIVE STORY — WHO CONTROLS TRANSFERS, POSTINGS AND
   DISCIPLINARY MATTERS FOR GNCTD EMPLOYEES: this is Delhi's real point of
   difference from the other UTs in this app, and it is NOT a leave/pension-
   figure story but a SERVICES-CONTROL / ADMINISTRATIVE-AUTHORITY story.
   Background (confirmed via WebSearch, multiple corroborating legal/news
   sources): a Supreme Court Constitution Bench ruled UNANIMOUSLY (2023) in
   favour of the Delhi Government having legislative and executive power
   over "services" (i.e. transfers, postings, disciplinary matters for
   GNCTD civil servants) EXCLUDING public order, police, and land. The
   Union Government responded with the Government of National Capital
   Territory of Delhi (Amendment) Ordinance, 2023 (later re-enacted by
   Parliament as the GNCTD (Amendment) Act, 2023), which REMOVED "services"
   from the Delhi Legislative Assembly's legislative competence and
   established the NATIONAL CAPITAL CIVIL SERVICES AUTHORITY (NCCSA) —
   consisting of the Chief Minister, the Chief Secretary of Delhi, and the
   Principal Home Secretary of Delhi — to make RECOMMENDATIONS to the
   Lieutenant Governor (not final decisions) on transfers, postings, and
   disciplinary matters for GNCTD employees, with the LG's decision final
   in case of a difference of opinion. Delhi's elected government challenged
   the 2023 Act's constitutionality; that challenge was referred to a
   five-judge Supreme Court Constitution Bench and, per the most recent
   sources this session found, REMAINS PENDING/UNRESOLVED as of the 2025-26
   period — separately, Delhi's own elected government changed hands in the
   February 2025 Assembly election (BJP formed the government), which this
   session notes as relevant political context without further comment,
   since it may affect the practical (though not the underlying legal)
   significance of the dispute going forward. THIS FILE MODELS A DEDICATED
   QUERY TYPE for GNCTD employees to request written clarification of which
   authority (NCCSA/Lieutenant Governor, vs. the erstwhile position) is
   currently handling their own transfer/posting/disciplinary matter, given
   this is a genuinely unsettled, actively-litigated administrative
   question — NOT a simple fact this tool can assert either way.

   DELIBERATELY OMITTED, WITH REASONS: this session found no Delhi-specific
   special compensatory/hardship allowance analogous to A&amp;N's ISDA/Hard
   Area Allowance (Delhi postings do not carry that kind of remote-locality
   premium), and no Delhi-specific Rules-transition story analogous to
   Chandigarh's 2022 Punjab-to-CCS-Rules switch, or merger-continuity story
   analogous to Dadra &amp; Nagar Haveli and Daman &amp; Diu's 2020 merger — Delhi's
   own distinctive story is the services-control dispute documented above.
   ============================================================================= */
window.STATE_DATA = window.STATE_DATA || {};
window.STATE_DATA.delhi = {
  key: 'delhi', name: 'Delhi (NCT)',
  heroTitle: 'Delhi (NCT) — CCS Leave &amp; Service Forms',
  heroMeta: 'leave, family care, insurance, advances, GPF/pension scheme status &amp; family pension matters, under Central Civil Services Rules directly, plus matters relating to the National Capital Civil Services Authority (NCCSA), the Lieutenant Governor, and transfers/postings/disciplinary control for GNCTD employees',
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
    { id: 'office', label: 'Office / Department', type: 'text', required: true, full: true, placeholder: 'e.g., O/o the Deputy Commissioner, GNCTD, New Delhi' },
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
      hint: 'GNCTD employees are governed by CCS (Leave) Rules 1972 directly, the same as other Central Government civilian employees.' },
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
      hint: '180 days from commencement, for women employees with fewer than two surviving children, regardless of length of service. Not debited against the leave account.' },
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
      hint: 'Day-limits vary by the specific DoPT circular governing your reason (e.g. representing India/State in sports or cultural events, or participation in the Republic Day parade/camp). State the reason and confirm the applicable limit with your DDO — this tool does not assert a specific day cap here.',
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
      hint: 'The Unified Pension Scheme (UPS) became operative for Central Government employees nationally from 1 April 2025, giving existing NPS subscribers a one-time option to move to UPS. Delhi\'s own Chief Minister had separately urged the Centre to implement the Old Pension Scheme for GNCTD employees — this session found no indication that request was granted, and OPS does not appear to apply to GNCTD employees. Use this type to request written confirmation of your own current scheme status and any applicable election deadline from your DDO/PAO.',
      extraFields: [{ id: 'svc_date1', label: 'Date of joining service', type: 'date' }, { id: 'svc_t1', label: 'Current Scheme, if known, &amp; PRAN, if applicable', type: 'text', placeholder: 'Optional' }, { id: 'svc_ta1', label: 'Nature of query / request', type: 'textarea', full: true }],
      subject: 'Pension Scheme Status — Confirmation / Query',
      bodyTemplate: 'Having joined service on <strong>${svc_date1}</strong>{{#if svc_t1}}, and presently understood to be on: ${svc_t1},{{/if}} I request written confirmation of my current pension scheme status, including any applicable National Pension System (NPS) to Unified Pension Scheme (UPS) election deadline, following the Government\'s implementation of UPS from 1 April 2025.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
    gpf_advance: { label: 'GPF Advance / Withdrawal', group: 'service', rule: 'General Provident Fund (Central Service) Rules, 1960', family: 'letter', subject: 'Application for GPF Advance / Withdrawal', noControllingRemarks: true, controllingHint: 'Typically your DDO / Accounts Officer.',
      extraFields: [{ id: 'svc_t1', label: 'Purpose (education / illness / housing / vehicle / other)', type: 'text' }, { id: 'svc_t2', label: 'Amount Requested (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      bodyTemplate: 'I request that a GPF advance/withdrawal of <strong>Rs. ${svc_t2}</strong> be sanctioned for the purpose of <strong>${svc_t1}</strong>. This applies since I joined service before 01.01.2004 and hold a General Provident Fund account under the General Provident Fund (Central Service) Rules, 1960.{{#if svc_ta1}} ${svc_ta1}{{/if}} The current permissible advance cap has been confirmed with my DDO / Accounts Officer.' },
    macp: { label: 'MACP Option / Representation', group: 'service', rule: 'DoPT O.M. No. 35034/3/2008-Estt.(D), 19.05.2009', family: 'letter', subject: 'MACP Option / Representation', noControllingRemarks: true, controllingHint: 'Typically your DDO / Head of Office.',
      extraFields: [{ id: 'svc_date1', label: 'Date from which upgradation is due/claimed', type: 'date' }, { id: 'svc_t1', label: 'Present grade pay / level', type: 'text' }, { id: 'svc_t2', label: 'Years of continuous service in this grade', type: 'text' }],
      bodyTemplate: 'I request consideration for a financial upgradation under the Modified Assured Career Progression (MACP) Scheme, DoPT O.M. No. 35034/3/2008-Estt.(D) dated 19.05.2009, effective from <strong>${svc_date1}</strong>. I have completed <strong>${svc_t2}</strong> years of continuous service in my present grade pay/level of <strong>${svc_t1}</strong> without promotion, which I understand qualifies for one of the three upgradations available at 10/20/30 years of service.' },
    nccsa_query: { label: 'Transfer / Posting / Disciplinary Matter — Authority Query (NCCSA)', group: 'service', rule: 'Government of NCT of Delhi (Amendment) Act, 2023', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Head of Office / the GAD, GNCTD.',
      hint: 'CONFIRMED, AND ACTIVELY LITIGATED: the GNCTD (Amendment) Act, 2023 removed "services" (transfers, postings, disciplinary matters for GNCTD civil servants) from the Delhi Legislative Assembly\'s competence and created the National Capital Civil Services Authority (NCCSA) — comprising the Chief Minister, Chief Secretary, and Principal Home Secretary of Delhi — to make recommendations to the Lieutenant Governor, whose decision is final in case of disagreement. Delhi\'s elected government\'s constitutional challenge to this Act was referred to a five-judge Supreme Court Constitution Bench and, as of the most recent sources this session found (2025-26), remains pending/unresolved. Use this type to request written clarification of which authority is currently handling your own transfer/posting/disciplinary matter, given this is a genuinely unsettled question this tool cannot answer definitively.',
      extraFields: [{ id: 'svc_t1', label: 'Nature of the matter (transfer / posting / disciplinary)', type: 'text' }, { id: 'svc_ta1', label: 'Details of your query', type: 'textarea', full: true }],
      subject: 'Transfer / Posting / Disciplinary Matter — Authority Query',
      bodyTemplate: 'I request written clarification of the authority currently competent to decide the following matter concerning my service: <strong>${svc_t1}</strong>.{{#if svc_ta1}} ${svc_ta1}{{/if}} I understand this may involve the National Capital Civil Services Authority and/or the Lieutenant Governor, under the Government of NCT of Delhi (Amendment) Act, 2023.' },

    hba: { label: 'House Building Advance (HBA)', group: 'advance', rule: 'HBA Rules for Central Government Employees, 2017', family: 'letter', subject: 'Application for House Building Advance', noControllingRemarks: true, controllingHint: 'Typically your Head of Department / Ministry of Housing &amp; Urban Affairs nodal office.',
      hint: 'Advance amount is the least of: 34 months’ Basic Pay, ₹25 lakh, or the cost of the house/flat (or your repaying capacity, if lower). The interest rate is revised periodically — confirm the current rate with your DDO before finalising.',
      extraFields: [{ id: 'svc_t1', label: 'Purpose (construction / purchase / extension / repair / site + house)', type: 'text' }, { id: 'svc_t2', label: 'Estimated Cost (₹)', type: 'text' }, { id: 'svc_t3', label: 'Advance Amount Required (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Property / site details', type: 'textarea', full: true }],
      bodyTemplate: 'I request that a House Building Advance be sanctioned to me for the purpose of <strong>${svc_t1}</strong>, under the HBA Rules for Central Government Employees, 2017. The estimated cost is <strong>Rs. ${svc_t2}</strong>, and the advance amount required is <strong>Rs. ${svc_t3}</strong> (within the prescribed cap of 34 months’ Basic Pay / ₹25 lakh / cost, whichever is least).{{#if svc_ta1}} Property/site details: ${svc_ta1}.{{/if}} I have confirmed the currently applicable interest rate with my DDO.' },

    family_pension: { label: 'Family Pension — Claim / Intimation', group: 'estate', rule: 'Rule 54, CCS (Pension) Rules 1972', family: 'letter', subject: 'Family Pension — Claim / Intimation', noRemarksBlock: true,
      extraFields: [{ id: 'svc_date1', label: 'Date of Death', type: 'date' }, { id: 'svc_t2', label: "Claimant's Relationship to the Deceased", type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      bodyTemplate: 'I write to intimate the death of the above-named Government servant on <strong>${svc_date1}</strong>, and to request that Family Pension, as admissible under Rule 54, CCS (Pension) Rules 1972, be sanctioned in favour of the eligible member(s) of the family.{{#if svc_t2}} Claimed relationship to the deceased: ${svc_t2}.{{/if}}{{#if svc_ta1}} ${svc_ta1}{{/if}} Central government offices commonly use Form 3 (Details of Family under Rule 54(12)) and Form 10 (intimation to the nominee) alongside this letter — please advise if your office requires either as a separate enclosure.' },
  },
};
