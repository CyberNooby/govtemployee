/* =============================================================================
   MAHARASHTRA — data for state-tool-engine.js. See assets/js/data/kerala.js
   for the schema reference.

   RULE-ACCURACY NOTE — read before touching this file: the only available
   copy of the Maharashtra Civil Services (Leave) Rules 1981 usable for this
   research had an internal numbering defect (Chapter V headers printed ~8
   numbers low vs. the rules' own cross-references). Rule numbers below for
   Earned/Half Pay/Commuted Leave (50/60/61) are a researched CORRECTION,
   medium-high confidence, not independently re-confirmed by a second
   source. Leave Not Due (62), Extraordinary Leave (63), Maternity Leave
   (74), Hospital Leave (77), and Special Disability Leave (75/76) WERE
   independently corroborated and are high confidence for the rule number
   itself. Maternity Leave's current DAY-COUNT is the single most uncertain
   figure researched (sources conflict: 90 days per the unamended rule text
   vs. widely-reported 360 days per a 2018 Cabinet decision vs. a reported
   2025 eligibility amendment) — deliberately NOT asserted as a specific
   number here; the generated text tells the user to confirm it. Several
   other items (Paternity Leave, Child Adoption Leave, Casual Leave's exact
   day-count, Motor Vehicle Advance, Probation/Confirmation's rule number,
   and the deceased-employee indemnity form number) could not be verified
   from a primary source and are either omitted or stated generically.
   Maharashtra has NO simple childbirth-triggered Paternity Leave — what
   exists is a conditional "Child Rearing Leave," usable only when the
   spouse is incapacitated or deceased; labelled distinctly below so it
   isn't mistaken for an ordinary paternity entitlement.
   ============================================================================= */
window.STATE_DATA = window.STATE_DATA || {};
window.STATE_DATA.maharashtra = {
  key: 'maharashtra', name: 'Maharashtra',
  heroTitle: 'Maharashtra — MCS Leave Rules &amp; Service Forms',
  heroMeta: 'leave, insurance, advances &amp; family pension, under MCS Rules',
  idFieldLabel: 'Employee ID',
  coverLetter: false,

  groupOrder: [
    { slot: 'general', name: 'General Leave' },
    { slot: 'lwa', name: 'Extraordinary Leave' },
    { slot: 'family', name: 'Family & Medical Leave' },
    { slot: 'casual', name: 'Casual & Special Leave' },
    { slot: 'insurance', name: 'Group Insurance Scheme' },
    { slot: 'service', name: 'Service & Establishment Matters' },
    { slot: 'advance', name: 'Advances & Loans' },
    { slot: 'estate', name: 'Estate / Death Benefit Claims' },
  ],

  profileFields: [
    { id: 'name', label: 'Full Name', type: 'text', required: true },
    { id: 'pen', label: 'Employee ID', type: 'text', required: true },
    { id: 'designation', label: 'Designation', type: 'text', required: true },
    { id: 'office', label: 'Office / Department', type: 'text', required: true, full: true, placeholder: 'e.g., O/o the Collector, Pune' },
    { id: 'dob', label: 'Date of Birth', type: 'date', required: true },
    { id: 'entry', label: 'Date of Entry into Service', type: 'date', required: true },
    { id: 'pay', label: 'Pay &amp; Scale of Pay', type: 'text', required: true, placeholder: 'e.g., Level 14, Rs 38600' },
  ],
  formRows: [
    { label: '1. Name of applicant', template: '${name} (Employee ID: ${pen})' },
    { label: '2. Date of Birth', field: 'dob' },
    { label: '3. Designation', field: 'designation' },
    { label: '4. Office / Department', field: 'office' },
    { label: '5. Pay and scale of pay', field: 'pay' },
    { label: '6. Date of entry into service', field: 'entry' },
    { label: '7. Address during leave', field: 'address' },
    { label: '8. Nature and period of leave applied for', template: '${nature} for ${duration_str}<br>from ${start} to ${end}' },
    { label: '9. Ground on which leave is applied for', field: 'reason' },
  ],

  types: {
    earned_leave: { label: 'Earned Leave (EL)', group: 'general', rule: 'Rule 50, Maharashtra Civil Services (Leave) Rules 1981', family: 'leave', nature: 'Earned Leave', defaultReason: 'Private affairs',
      hint: 'Earned at 1/11th of duty period; ceases to accrue once 180 days stand at credit. Max grantable at one time: 120 days (180 if spent wholly/partly outside India/neighbouring countries, Class I/II employees only).' },
    half_pay_leave: { label: 'Half Pay Leave (HPL)', group: 'general', rule: 'Rule 60, Maharashtra Civil Services (Leave) Rules 1981', family: 'leave', nature: 'Half Pay Leave', defaultReason: 'Private affairs',
      hint: '20 days credited per completed year of service; may be taken on medical certificate or for private affairs.' },
    commuted_leave: { label: 'Commuted Leave', group: 'general', rule: 'Rule 61, Maharashtra Civil Services (Leave) Rules 1981', family: 'leave', nature: 'Commuted Leave (in lieu of Half Pay Leave)', defaultReason: 'Medical treatment (Medical Certificate enclosed)',
      declarationTemplate: 'I undertake that this commuted leave is debited against my Half Pay Leave account at twice the number of days availed, as required under the Maharashtra Civil Services (Leave) Rules 1981.',
      hint: 'Up to half of Half Pay Leave due, granted on medical certificate; up to 90 days allowed in the entire career without medical certificate for an approved course of study.' },
    leave_not_due: { label: 'Leave Not Due', group: 'general', rule: 'Rule 62, Maharashtra Civil Services (Leave) Rules 1981', family: 'leave', nature: 'Leave Not Due', defaultReason: 'Medical treatment (Medical Certificate enclosed)',
      declarationTemplate: 'I undertake to refund the leave salary drawn during this Leave Not Due, which would not have been admissible had Rule 62 not been applied, in the event of my resignation or voluntary retirement before earning it back through future Half Pay Leave accrual.',
      hint: 'Only for permanent employees with a reasonable prospect of returning to duty; capped at 360 days in the entire career (max 90 days at a time and 180 days in all otherwise than on medical certificate).' },

    extraordinary_leave: { label: 'Extraordinary Leave (EOL)', group: 'lwa', rule: 'Rule 63, Maharashtra Civil Services (Leave) Rules 1981', family: 'leave', needsRouting: true, nature: 'Extraordinary Leave',
      hint: 'A single leave type — Maharashtra does not split this into named sub-purposes the way Kerala’s LWA does. For non-permanent employees: caps range from 3 months (no other leave admissible) up to 24 months (certified studies in public interest, after 3+ yrs service, bond required); permanent employees are subject to Government discretion within the overall 5-year continuous-leave ceiling (Rule 10).',
      declarationTemplate: 'I understand that no leave salary is admissible during Extraordinary Leave, and that the duration applied for is within the limits prescribed for my category and length of service.',
      extraFields: [{ id: 'purpose', label: 'Purpose / Nature of Extraordinary Leave', type: 'text', full: true, placeholder: 'e.g., private employment, higher studies, joining spouse' }] },

    maternity: { label: 'Maternity Leave', group: 'family', rule: 'Rule 74, Maharashtra Civil Services (Leave) Rules 1981 (as amended)', family: 'leave', medCert: true, nature: 'Maternity Leave', defaultReason: 'Confinement for childbirth',
      hint: 'The current day-limit could not be confirmed with confidence — the original rule text specifies 90 days, but a widely-reported 2018 Cabinet decision and a reported 2025 amendment suggest this has since been substantially increased. Do not assume a specific figure; confirm the currently gazetted entitlement with your DDO before applying. Full pay, not debited to the leave account; can combine with up to 60 more days (incl. commuted leave) without a medical certificate; also covers miscarriage/MTP abortion (up to 6 weeks).' },
    child_rearing_leave: { label: 'Child Rearing Leave (spouse incapacitated/deceased)', group: 'family', rule: 'General Administration Department Government Resolution (not part of MCS Leave Rules 1981; exact G.R. number not independently verified)', family: 'leave', nature: 'Child Rearing Leave', defaultReason: 'Care of minor children — spouse incapacitated or deceased',
      hint: 'This is NOT a standard paternity leave available on ordinary childbirth. It applies only where the male employee’s wife is bedridden/mentally incapacitated or not alive, to care for children under 18 — reportedly up to 180 days, possibly split into up to 3 spells in a calendar year. Confirm current eligibility and duration with your DDO; this tool does not assert either figure as confirmed.' },
    child_adoption: { label: 'Leave for Adoption of a Child', group: 'family', rule: 'General Administration Department Government Resolution (exact rule/G.R. number not independently verified)', family: 'leave', nature: 'Leave for Adoption of a Child', defaultReason: 'Legal adoption of a child',
      hint: 'Sources disagree on the current day-limit (90 vs. 180 days reported from different eras/sources) — this tool does not assert a specific figure; confirm the current entitlement with your DDO.' },
    hospital_leave: { label: 'Hospital Leave', group: 'family', rule: 'Rule 77, Maharashtra Civil Services (Leave) Rules 1981', family: 'leave', medCert: true, nature: 'Hospital Leave', defaultReason: 'Injury sustained in the course of official duty',
      hint: 'Available only to Class IV employees, and Class III employees whose duties involve dangerous machinery/explosives/poisonous drugs or specific hazardous occupations (incl. named police/excise/forest subordinate categories) — not a general-purpose sick leave. Leave salary at Earned Leave or Half Pay Leave rate; not debited to the leave account; combinable with other leave up to 28 months total.' },
    special_disability_leave: { label: 'Special Disability Leave', group: 'family', rule: 'Rules 75 (intentional injury) / 76 (accidental injury), Maharashtra Civil Services (Leave) Rules 1981', family: 'leave', medCert: true, nature: 'Special Disability Leave', defaultReason: 'Injury sustained in the course of official duty',
      hint: 'Max 24 months per disability; first 120 days at Earned Leave-equivalent rate, remainder at Half Pay Leave-equivalent rate; counts as qualifying service for pension; disability must generally manifest within 3 months of the incident.' },

    casual_leave: { label: 'Casual Leave (CL)', group: 'casual', rule: 'General Administration Department circular (not part of MCS Leave Rules 1981 — the rules explicitly exclude CL from statutory leave)', family: 'letter', needsRouting: true, nature: 'Casual Leave', subject: 'Application for Casual Leave', defaultReason: 'Personal / domestic affairs',
      hint: 'Reported as 8 days per calendar year for non-teaching state employees (this figure could not be independently confirmed against a primary GAD circular — confirm your current-year balance with your DDO).',
      bodyTemplate: 'I request you to kindly grant me Casual Leave for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, on account of <strong>${reason}</strong>.' },
    scl_family_planning: { label: 'Special Casual Leave — Family Planning (Sterilisation)', group: 'casual', rule: 'General Administration Department circular (exact G.R. number not independently verified)', family: 'letter', needsRouting: true, nature: 'Special Casual Leave for Family Planning', subject: 'Application for Special Casual Leave — Family Planning', defaultReason: 'Sterilisation operation',
      hint: 'Reported range of 4 to 21 days depending on the specific procedure, with medical certification required — confirm the exact entitlement for your procedure with your DDO.',
      bodyTemplate: 'I request you to kindly grant me Special Casual Leave for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, on account of: <strong>${reason}</strong>. A medical certificate is enclosed.' },
    compensatory_leave: { label: 'Compensatory Leave', group: 'casual', rule: 'Recognised under MCS Leave Rules 1981 (Chapter IV, combination-of-holidays provisions); specific granting G.R. not independently located', family: 'letter', needsRouting: true, nature: 'Compensatory Leave', subject: 'Application for Compensatory Leave', defaultReason: 'Compensation for duty performed on a Sunday/holiday',
      hint: 'Granted in lieu of duty performed on a Sunday/holiday, provided no overtime allowance/honorarium was paid for that day; can be prefixed/suffixed to regular leave. Day-limits could not be independently verified — confirm with your DDO.',
      bodyTemplate: 'I request you to kindly grant me Compensatory Leave for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, in lieu of duty performed by me on <strong>${reason}</strong>, on which no overtime allowance/honorarium was paid to me.' },

    gis_nomination: { label: 'MSGEGIS — Nomination', group: 'insurance', rule: 'Maharashtra State Government Employees’ Group Insurance Scheme, 1982 (MSGEGIS)', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Head of Office.',
      hint: 'A contributory, twin-benefit scheme (insurance cover on death-in-service + savings-fund payout on retirement), mandatory since 1 May 1982. Current contribution rates and benefit tables are not stated here — check the calculator at mahakosh.maharashtra.gov.in or with your DDO.',
      extraFields: [{ id: 'svc_t1', label: 'Nominee Name', type: 'text' }, { id: 'svc_t2', label: 'Nominee Relationship', type: 'text' }, { id: 'svc_t3', label: 'Share, if more than one nominee', type: 'text' }],
      subject: 'MSGEGIS — Nomination / Change of Nomination',
      bodyTemplate: 'I submit my nomination under the Maharashtra State Government Employees’ Group Insurance Scheme, 1982 (MSGEGIS), as follows: <strong>${svc_t1}</strong>, ${svc_t2}.{{#if svc_t3}} Share: ${svc_t3}.{{/if}}' },
    gis_claim: { label: 'MSGEGIS — Claim', group: 'insurance', rule: 'Maharashtra State Government Employees’ Group Insurance Scheme, 1982 (MSGEGIS)', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Head of Office.',
      extraFields: [{ id: 'svc_date1', label: 'Date of Death / Retirement', type: 'date' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'MSGEGIS — Claim (Death / Retirement)',
      bodyTemplate: 'I submit this claim under the Maharashtra State Government Employees’ Group Insurance Scheme, 1982 (MSGEGIS), on account of the event dated <strong>${svc_date1}</strong>.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },

    gpf_house_advance: { label: 'GPF Advance for House Building', group: 'service', rule: 'Maharashtra General Provident Fund Rules', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Accounts Officer.',
      hint: 'Maharashtra appears to route house-building assistance through a GPF advance rather than a distinct HBA scheme. Sanctionable after 10 years of service (or within 10 years before retirement, not in the last 3 months); withdrawal capped at the lesser of 75% of GPF balance or (3×balance − 4×outstanding advance)/4. Applies only if you joined service before 1 November 2005 (GPF; later joiners are on NPS).',
      extraFields: [{ id: 'svc_t1', label: 'Purpose (construction / purchase / extension / repair)', type: 'text' }, { id: 'svc_t2', label: 'Amount Requested (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Application for GPF Advance (House Building)',
      bodyTemplate: 'I request that a GPF advance of <strong>Rs. ${svc_t2}</strong> be sanctioned for the purpose of <strong>${svc_t1}</strong>. I confirm I joined service before 1 November 2005 and hold a General Provident Fund account.{{#if svc_ta1}} ${svc_ta1}{{/if}} I have confirmed the current permissible amount with my DDO/Accounts Officer.' },
    nps_reg: { label: 'NPS Subscriber Registration', group: 'service', rule: 'National Pension System — mandatory for Maharashtra state employees joining on/after 1 November 2005', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO.',
      hint: 'Some employees selected before but joining after 1 Nov 2005 may have a window to opt for the Old Pension Scheme instead — confirm your specific eligibility with your DDO, as this area has changed more than once in recent years.',
      extraFields: [{ id: 'svc_date1', label: 'Date of joining service', type: 'date' }, { id: 'svc_t1', label: 'Bank account number &amp; branch (for NPS)', type: 'text' }, { id: 'svc_t2', label: 'Nominee Name', type: 'text' }, { id: 'svc_t3', label: 'Nominee Relationship', type: 'text' }],
      subject: 'Application for NPS Subscriber Registration',
      bodyTemplate: 'I request that I be registered as a subscriber under the National Pension System, having joined service on <strong>${svc_date1}</strong>. My bank account for NPS purposes is <strong>${svc_t1}</strong>, and I nominate <strong>${svc_t2}</strong>{{#if svc_t3}} (${svc_t3}){{/if}} as my nominee.' },
    assured_career_progression: { label: 'Assured Career Progression Option', group: 'service', rule: 'G.R. सा.प्र.वि.शा.नि.क्र.एस.आर.व्ही.-१०९५/प्रक्र-१/९५, dated 8 June 1995 (revised under 7th Pay Commission framework, G.R. dated 30 September 2022)', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Head of Office.',
      hint: 'For Group C/D employees, reported as eligible after 12 years of regular service for a time-bound pay-scale upgrade; further-tier thresholds (beyond the first) and Group A/B officer eligibility could not be confirmed this session — confirm your specific eligibility with your DDO.',
      extraFields: [{ id: 'svc_date1', label: 'Date from which upgradation is due/claimed', type: 'date' }, { id: 'svc_t1', label: 'Present grade / pay level', type: 'text' }, { id: 'svc_t2', label: 'Years of continuous regular service', type: 'text' }],
      subject: 'Assured Career Progression Option',
      bodyTemplate: 'I request consideration for a pay-scale upgrade under the Assured Career Progression Scheme, effective from <strong>${svc_date1}</strong>. I have completed <strong>${svc_t2}</strong> years of continuous regular service in my present grade/pay level of <strong>${svc_t1}</strong> without promotion.' },

    family_pension: { label: 'Family Pension — Claim / Intimation', group: 'estate', rule: 'Rule 116, Maharashtra Civil Services (Pension) Rules, 1982', family: 'letter', noRemarksBlock: true,
      extraFields: [{ id: 'svc_date1', label: 'Date of Death', type: 'date' }, { id: 'svc_t2', label: 'Claimant’s Relationship to the Deceased', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Family Pension — Claim / Intimation',
      bodyTemplate: 'I write to intimate the death of the above-named Government servant on <strong>${svc_date1}</strong>, and to request that Family Pension, as admissible under Rule 116, Maharashtra Civil Services (Pension) Rules 1982, be sanctioned in favour of the eligible member(s) of the family.{{#if svc_t2}} Claimed relationship to the deceased: ${svc_t2}.{{/if}}{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
    deceased_dues_indemnity: { label: "Indemnity — Deceased Employee's Dues", group: 'estate', rule: 'Maharashtra Treasury Rules / Pension Rules (exact form number not independently verified — confirm with your Treasury Officer/DDO)', family: 'letter', noRemarksBlock: true,
      hint: 'This tool could not confirm the specific Maharashtra form number equivalent to Kerala’s K.F.C. Form No. 9 — check the current requirement with your Treasury Officer before relying on this letter alone.',
      extraFields: [{ id: 'svc_date1', label: 'Date of death of employee', type: 'date' }, { id: 'svc_t1', label: 'Name of Claimant(s)', type: 'text' }, { id: 'svc_t2', label: 'Relationship of Claimant(s) to Deceased', type: 'text' }, { id: 'svc_t3', label: 'Amount Claimed (₹)', type: 'text' }, { id: 'svc_ta1', label: "Claimant's address / surety details, if required", type: 'textarea', full: true }],
      subject: "Indemnity — Claim for Deceased Employee's Dues",
      bodyTemplate: 'I/We, <strong>${svc_t1}</strong>, ${svc_t2} of the deceased <strong>${name}</strong>, request payment of the pay, leave salary and other emoluments due, amounting to <strong>Rs. ${svc_t3}</strong>, in respect of death on <strong>${svc_date1}</strong>, and undertake to furnish an indemnity bond (with sureties, if required) in the form currently prescribed by the Treasury.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
  },
};
