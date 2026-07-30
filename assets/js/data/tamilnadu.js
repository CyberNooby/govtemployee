/* =============================================================================
   TAMIL NADU — data for state-tool-engine.js. See assets/js/data/kerala.js
   for the schema reference.

   RULE-ACCURACY NOTE: Tamil Nadu uses TWO parallel citation systems — the
   Fundamental Rules (FR, TN's own adopted edition) for leave *categories*,
   and the separate Tamil Nadu Leave Rules, 1933 (TNLR) for the day-count
   *mechanics* of Earned/Unearned Leave. Both are cited where applicable;
   do not conflate with Kerala's K.S.R. or Central's CCS numbering.
   Several figures researched came back low/medium confidence (Paternity
   Leave's exact day-limit and G.O., Child Adoption Leave's current
   day-limit, HBA's current ceiling, Motor Vehicle Advance figures, the
   deceased-employee indemnity bond's exact form number) — these are
   deliberately left unstated/generic in the generated text rather than
   asserting a possibly-wrong number; each says to confirm with the DDO.
   Tamil Nadu has NO confirmed Child Care Leave (no Central-style Rule 43-C
   equivalent found) and NO "TNGLI" — its group insurance runs through an
   LIC-administered Group Insurance Scheme (GIS), not a state-run insurance
   department like Kerala's SLI.
   ============================================================================= */
window.STATE_DATA = window.STATE_DATA || {};
window.STATE_DATA.tamilnadu = {
  key: 'tamilnadu', name: 'Tamil Nadu',
  heroTitle: 'Tamil Nadu — Fundamental Rules &amp; Service Forms',
  heroMeta: 'leave, insurance, advances &amp; family pension, under FR / TNLR',
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
    { id: 'office', label: 'Office / Department', type: 'text', required: true, full: true, placeholder: 'e.g., O/o the District Collector, Coimbatore' },
    { id: 'dob', label: 'Date of Birth', type: 'date', required: true },
    { id: 'entry', label: 'Date of Entry into Service', type: 'date', required: true },
    { id: 'pay', label: 'Pay &amp; Scale of Pay', type: 'text', required: true, placeholder: 'e.g., Level 19, Rs 56100' },
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
    earned_leave: { label: 'Earned Leave (EL)', group: 'general', rule: 'Tamil Nadu Leave Rules (TNLR) 8, 11, 17, 20', family: 'leave', nature: 'Earned Leave', defaultReason: 'Private affairs',
      hint: 'Credited 2½ days per completed month; permanent staff get advance credit of 15 days each 1 Jan & 1 Jul. Max accumulation 240 days; max grant at one time 180 days for permanent staff (30 for temporary/probationers).' },
    unearned_leave_medical: { label: 'Unearned Leave on Medical Certificate', group: 'general', rule: 'Tamil Nadu Leave Rules (TNLR) 15, 18A, 19A, 23(a)(1), 23(c)', family: 'leave', nature: 'Unearned Leave on Medical Certificate', defaultReason: 'Medical treatment (Medical Certificate enclosed)',
      hint: 'Full pay and allowances (unlike Kerala/Central’s half-pay leave). Tiered by service length: 90 days (2–5 yrs) up to 540 days (20+ yrs); extended to 540 days without Medical Board reference for certain notified conditions (TB, cancer, kidney/retina transplant, HIV-AIDS).' },
    unearned_leave_private: { label: 'Unearned Leave on Private Affairs', group: 'general', rule: 'Tamil Nadu Leave Rules (TNLR) 13, 14, 19A', family: 'leave', nature: 'Unearned Leave on Private Affairs', defaultReason: 'Private affairs',
      hint: 'Half pay + full allowances. Permanent Superior Service: 90 days in first 10 years, 180 days after; max 90 days at a time (180 combined with Earned Leave). Not available to temporary staff.' },

    extraordinary_leave: { label: 'Extraordinary Leave (EOL)', group: 'lwa', rule: 'Tamil Nadu Leave Rules (TNLR) 19, 19A, 23(a)(ii)/(iii), 23(b); Fundamental Rules 18(4), 85(b)', family: 'leave', needsRouting: true, nature: 'Extraordinary Leave',
      hint: 'A single leave type — Tamil Nadu does not split this into named sub-purposes the way Kerala’s LWA does. No leave salary is payable. Without medical certificate: max 180 days at a time (under 5 years’ service) or 1 year (5+ years), with a mandatory 3-year gap between two maximum-length spells. With medical certificate (notified conditions): up to 2 years, or unrestricted for permanent staff.',
      declarationTemplate: 'I understand that no leave salary is admissible during Extraordinary Leave under the Tamil Nadu Leave Rules, and that the duration applied for is within the limits prescribed for my length of service and category.',
      extraFields: [{ id: 'purpose', label: 'Purpose / Nature of Extraordinary Leave', type: 'text', full: true, placeholder: 'e.g., private employment, higher studies, joining spouse' }] },

    maternity: { label: 'Maternity Leave', group: 'family', rule: 'Instructions under Fundamental Rule 101(a); enhanced per G.O.Ms.No.84, dated 23.08.2021', family: 'leave', medCert: true, nature: 'Maternity Leave', defaultReason: 'Confinement for childbirth',
      hint: 'Full pay and allowances. Reported current entitlement is 365 days from date of confinement (enhanced from 180 days per G.O.Ms.No.84/23.08.2021) for women with fewer than 2 surviving children — confirm the currently applicable figure with your DDO, since this was enhanced more than once.' },
    maternity_miscarriage: { label: 'Maternity Leave — Miscarriage / Abortion (incl. MTP)', group: 'family', rule: 'Instruction 1B/1C under Fundamental Rule 101(a); G.O.Ms.237, P&amp;AR (FR III) Dept., dated 29.06.1993', family: 'leave', medCert: true, nature: 'Leave for Miscarriage / Abortion', defaultReason: 'Miscarriage / Abortion',
      hint: '42 days (6 weeks), full pay; no restriction on the number of times it may be sanctioned.' },
    paternity: { label: 'Paternity Leave', group: 'family', rule: 'Instructions under Fundamental Rule 101(a)/(ab) (exact Government Order not independently verified)', family: 'leave', nature: 'Paternity Leave', defaultReason: 'Delivery of child by spouse',
      hint: 'Commonly reported as 15 days, for male employees with fewer than 2 surviving children, available between the date of delivery and up to 6 months after. This tool could not independently verify the governing G.O. number or confirm the day-limit against a primary source — confirm your current entitlement with your DDO before applying.' },
    child_adoption: { label: 'Leave for Adoption of a Child', group: 'family', rule: 'G.O.Ms.342, Social Welfare &amp; NMP Dept., dated 08.12.1995; Fundamental Rule 101(ab)', family: 'leave', nature: 'Leave for Adoption of a Child', defaultReason: 'Legal adoption of a child',
      hint: 'Available to women employees with fewer than 2 living children adopting a child below 1 year. Sources disagree on the current day-limit (older rule uses a sliding scale up to 1 year by the child’s age at adoption; some reports cite 240 days under a later enhancement) — this tool does not assert a specific figure; confirm the current entitlement with your DDO.' },
    hospital_leave: { label: 'Hospital Leave', group: 'family', rule: 'Instructions under Fundamental Rule 101(b)', family: 'leave', medCert: true, nature: 'Hospital Leave', defaultReason: 'Injury sustained in the course of official duty',
      hint: 'For Basic Service / at-risk subordinate staff (dangerous machinery, explosives, poisons) hospitalized for a duty-related injury: full pay as in-patient, then half-pay-with-full-allowances; 6 months per completed 3 years of service, max 28 months combined with other leave. Not normally available to Superior Service officers.' },
    special_disability_leave: { label: 'Special Disability Leave', group: 'family', rule: 'Fundamental Rule 83', family: 'leave', medCert: true, nature: 'Special Disability Leave', defaultReason: 'Injury sustained in the course of official duty',
      hint: 'Max 24 months; first 4 months full pay & allowances, remainder half pay with full allowances. Disability must have manifested within 3 months of the duty-related injury; requires a Medical Board certificate.' },

    casual_leave: { label: 'Casual Leave', group: 'casual', rule: 'Annexure VII, Fundamental Rules (Ruling (3) under FR 85)', family: 'letter', needsRouting: true, nature: 'Casual Leave', subject: 'Application for Casual Leave', defaultReason: 'Personal / domestic affairs',
      hint: 'Max 12 days per calendar year; may combine with compensatory leave/holidays up to 10 days total absence. Half-day CL permitted.',
      bodyTemplate: 'I request you to kindly grant me Casual Leave for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, on account of <strong>${reason}</strong>.' },
    special_casual_leave: { label: 'Special Casual Leave', group: 'casual', rule: 'Annexure VII, Fundamental Rules (Executive Instructions 7–13 under Ruling (3), FR 85)', family: 'letter', needsRouting: true, nature: 'Special Casual Leave', subject: 'Application for Special Casual Leave',
      hint: 'Does not count against ordinary CL. Covers plague-camp detention, court/inquiry witness duty, Rabies house-quarantine (general max 21–30 days); national/international sports or mountaineering/trekking (30 days/year); sterilisation (8 days men / 20 days women); and full Home Guard duty. State your specific reason — the exact cap depends on which category applies; confirm with your DDO.',
      extraFields: [{ id: 'scl_reason', label: 'Recognised Reason', type: 'text', full: true, placeholder: 'e.g., sterilisation operation, sports participation, court witness duty' }],
      bodyTemplate: 'I request you to kindly grant me Special Casual Leave for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, under Annexure VII to the Fundamental Rules, on account of: <strong>${scl_reason}</strong>.' },
    restricted_holiday: { label: 'Restricted Holiday', group: 'casual', rule: 'G.O.Ms.No.428, P&amp;AR (FR III) Dept., dated 16.12.2003 (list periodically revised)', family: 'letter', needsRouting: true, nature: 'Restricted Holiday', subject: 'Application for Restricted Holiday', defaultReason: '',
      hint: '3 days per calendar year, from a fixed list of religious festivals (any employee may choose from the list regardless of their own religion), in addition to CL. Not available to temporary staff. No half-day RH.',
      bodyTemplate: 'I request you to kindly grant me Restricted Holiday for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, on account of <strong>${reason}</strong>, from the notified list of Restricted Holidays for this year.' },
    compensatory_leave: { label: 'Compensatory Holidays', group: 'casual', rule: 'G.O.Ms.2218, Public (Miscellaneous) Dept., dated 14.12.1981', family: 'letter', needsRouting: true, nature: 'Compensatory Leave', subject: 'Application for Compensatory Leave', defaultReason: 'Compensation for duty performed on a holiday',
      hint: 'For working on a holiday. Normally only for Group C/D staff; max 20 days credit per calendar year; lapses 6 months after the relevant holiday; granted at the discretion of the sanctioning authority, not as of right.',
      bodyTemplate: 'I request you to kindly grant me Compensatory Leave for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, in lieu of duty performed by me on the holiday(s) on <strong>${reason}</strong>.' },

    gis_nomination: { label: 'Group Insurance Scheme — Nomination', group: 'insurance', rule: 'Tamil Nadu Government Employees’ Group Insurance Scheme (LIC-administered)', family: 'letter', subject: 'Group Insurance Scheme — Nomination / Change of Nomination', noControllingRemarks: true, controllingHint: 'Typically your DDO / Head of Office.',
      extraFields: [{ id: 'svc_t1', label: 'Nominee Name', type: 'text' }, { id: 'svc_t2', label: 'Nominee Relationship', type: 'text' }, { id: 'svc_t3', label: 'Share, if more than one nominee', type: 'text' }, { id: 'svc_ta1', label: 'Additional nominees / remarks', type: 'textarea', full: true }],
      bodyTemplate: 'I submit my nomination under the Tamil Nadu Government Employees’ Group Insurance Scheme (administered through LIC) as follows: <strong>${svc_t1}</strong>, ${svc_t2}.{{#if svc_t3}} Share: ${svc_t3}.{{/if}}{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
    gis_claim: { label: 'Group Insurance Scheme — Claim', group: 'insurance', rule: 'Tamil Nadu Government Employees’ Group Insurance Scheme (LIC-administered)', family: 'letter', subject: 'Group Insurance Scheme — Claim (Death / Retirement)', noControllingRemarks: true, controllingHint: 'Typically your DDO / Head of Office.',
      extraFields: [{ id: 'svc_date1', label: 'Date of Death / Retirement', type: 'date' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      bodyTemplate: 'I submit this claim under the Tamil Nadu Government Employees’ Group Insurance Scheme, administered through LIC, on account of the event dated <strong>${svc_date1}</strong>.{{#if svc_ta1}} ${svc_ta1}{{/if}} I understand the payable amount depends on my subscription slab and is disbursed by LIC via account-payee cheque.' },

    gpf_advance: { label: 'GPF Advance', group: 'service', rule: 'General Provident Fund (Tamil Nadu) Rules, 2006 edition', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Treasury.',
      hint: 'Applies only if you joined service before 01.04.2003 (GPF; those joining on/after that date are on the Contributory Pension Scheme / NPS instead).',
      extraFields: [{ id: 'svc_t1', label: 'Purpose (education / illness / housing / vehicle / other)', type: 'text' }, { id: 'svc_t2', label: 'Amount Requested (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Application for GPF Advance',
      bodyTemplate: 'I request that a GPF advance of <strong>Rs. ${svc_t2}</strong> be sanctioned for the purpose of <strong>${svc_t1}</strong>, under the General Provident Fund (Tamil Nadu) Rules. This applies since I joined service before 01.04.2003.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
    nps_reg: { label: 'CPS/NPS Subscriber Registration', group: 'service', rule: 'Tamil Nadu Government Employees’ Contributory Pension Scheme (CPS/NPS) — mandatory for those joining on/after 01.04.2003', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO.',
      extraFields: [{ id: 'svc_date1', label: 'Date of joining service', type: 'date' }, { id: 'svc_t1', label: 'Bank account number &amp; branch (for NPS)', type: 'text' }, { id: 'svc_t2', label: 'Nominee Name', type: 'text' }, { id: 'svc_t3', label: 'Nominee Relationship', type: 'text' }],
      subject: 'Application for CPS/NPS Subscriber Registration',
      bodyTemplate: 'I request that I be registered as a subscriber under the Contributory Pension Scheme (CPS/NPS), having joined service on <strong>${svc_date1}</strong>. My bank account for this purpose is <strong>${svc_t1}</strong>, and I nominate <strong>${svc_t2}</strong>{{#if svc_t3}} (${svc_t3}){{/if}} as my nominee.' },
    selection_special_grade: { label: 'Selection Grade / Special Grade Option', group: 'service', rule: 'G.O.Ms.No.210, P&amp;AR(S) Dept., dated 11.03.1987 (periodically revised)', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Head of Office.',
      hint: 'Tamil Nadu does not use MACP terminology — instead, two increments are granted on completing 10 years (Selection Grade) and 20 years (Special Grade) of service, plus a one-time 3% bonus increment on completing 30 years. This grants increments within the same pay level, not a level jump — do not treat it as identical to Central/Kerala’s MACP-style scheme.',
      extraFields: [{ id: 'svc_date1', label: 'Date from which the increment is due/claimed', type: 'date' }, { id: 'svc_t1', label: 'Years of continuous service', type: 'text' }, { id: 'svc_t2', label: 'Present pay level / scale', type: 'text' }],
      subject: 'Selection Grade / Special Grade Option',
      bodyTemplate: 'I request consideration for the Selection Grade / Special Grade increment under G.O.Ms.No.210, P&amp;AR(S) Dept., dated 11.03.1987 (as revised), effective from <strong>${svc_date1}</strong>. I have completed <strong>${svc_t1}</strong> years of continuous service; my present pay level/scale is <strong>${svc_t2}</strong>.' },

    hba: { label: 'House Building Advance (HBA)', group: 'advance', rule: 'Appendix 25, Tamil Nadu Financial Code, Volume II', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your Head of Department / Housing & Urban Development nodal office.',
      hint: 'Requires 6 years continuous regular service or confirmed status, and at least 5 years left before retirement; one advance per employee’s lifetime (plus one enlargement advance). The current ceiling amount changes periodically — confirm it with your DDO / Treasury before finalising your application rather than relying on a remembered figure.',
      extraFields: [{ id: 'svc_t1', label: 'Purpose (construction / purchase / extension / repair / site + house)', type: 'text' }, { id: 'svc_t2', label: 'Estimated Cost (₹)', type: 'text' }, { id: 'svc_t3', label: 'Advance Amount Required (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Property / site details', type: 'textarea', full: true }],
      subject: 'Application for House Building Advance',
      bodyTemplate: 'I request that a House Building Advance be sanctioned to me for the purpose of <strong>${svc_t1}</strong>, under Appendix 25 of the Tamil Nadu Financial Code, Volume II. The estimated cost is <strong>Rs. ${svc_t2}</strong>, and the advance amount required is <strong>Rs. ${svc_t3}</strong>.{{#if svc_ta1}} Property/site details: ${svc_ta1}.{{/if}} I have confirmed the currently applicable ceiling and interest rate with my DDO.' },
    motor_vehicle_advance: { label: 'Motor Car / Two-Wheeler Advance', group: 'advance', rule: 'Tamil Nadu Financial Code, Chapter X, Article 230, Form 12', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your Head of Department.',
      hint: 'Car and two-wheeler advances are separate schemes; no advance is given for second-hand vehicles, and normally not a second advance while one is outstanding. Current ceiling amounts could not be independently verified for this tool — confirm with your DDO.',
      extraFields: [{ id: 'svc_t1', label: 'Type of Vehicle (car / two-wheeler)', type: 'text' }, { id: 'svc_t2', label: 'Estimated Cost (₹)', type: 'text' }, { id: 'svc_t3', label: 'Advance Amount Required (₹)', type: 'text' }],
      subject: 'Application for Motor Vehicle Advance',
      bodyTemplate: 'I request that a Motor Vehicle Advance be sanctioned to me for the purchase of <strong>${svc_t1}</strong>, under the Tamil Nadu Financial Code, Chapter X, Article 230. The estimated cost is <strong>Rs. ${svc_t2}</strong>, and the advance amount required is <strong>Rs. ${svc_t3}</strong>. I confirm I do not hold another such advance outstanding.' },

    family_pension: { label: 'Family Pension — Claim / Intimation', group: 'estate', rule: 'Rule 49, Tamil Nadu Pension Rules, 1978', family: 'letter', noRemarksBlock: true,
      extraFields: [{ id: 'svc_date1', label: 'Date of Death', type: 'date' }, { id: 'svc_t2', label: 'Claimant’s Relationship to the Deceased', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Family Pension — Claim / Intimation',
      bodyTemplate: 'I write to intimate the death of the above-named Government servant on <strong>${svc_date1}</strong>, and to request that Family Pension, as admissible under Rule 49, Tamil Nadu Pension Rules 1978, be sanctioned in favour of the eligible member(s) of the family.{{#if svc_t2}} Claimed relationship to the deceased: ${svc_t2}.{{/if}}{{#if svc_ta1}} ${svc_ta1}{{/if}} I understand Form 14 is used for claims from family members other than the surviving spouse — please advise if this applies to my claim.' },
    death_gratuity: { label: 'Death Gratuity — Claim', group: 'estate', rule: 'Rule 46, Tamil Nadu Pension Rules, 1978', family: 'letter', noRemarksBlock: true,
      extraFields: [{ id: 'svc_date1', label: 'Date of Death', type: 'date' }, { id: 'svc_t2', label: 'Claimant’s Relationship to the Deceased', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Death Gratuity — Claim',
      bodyTemplate: 'I write to claim Death Gratuity, as admissible under Rule 46, Tamil Nadu Pension Rules 1978, following the death of the above-named Government servant on <strong>${svc_date1}</strong>.{{#if svc_t2}} Claimed relationship to the deceased: ${svc_t2}.{{/if}}{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
    deceased_dues_indemnity: { label: "Indemnity Bond — Deceased Employee's Dues", group: 'estate', rule: 'Tamil Nadu Financial Code / Treasury Code (exact form number not independently verified — confirm with your Treasury Officer/DDO)', family: 'letter', noRemarksBlock: true,
      hint: 'This tool could not confirm the specific Tamil Nadu form number equivalent to Kerala’s K.F.C. Form No. 9 — check the current requirement with your Treasury Officer before relying on this letter alone.',
      extraFields: [{ id: 'svc_date1', label: 'Date of death of employee', type: 'date' }, { id: 'svc_t1', label: 'Name of Claimant(s)', type: 'text' }, { id: 'svc_t2', label: 'Relationship of Claimant(s) to Deceased', type: 'text' }, { id: 'svc_t3', label: 'Amount Claimed (₹)', type: 'text' }, { id: 'svc_ta1', label: "Claimant's address / surety details, if required", type: 'textarea', full: true }],
      subject: "Indemnity — Claim for Deceased Employee's Dues",
      bodyTemplate: 'I/We, <strong>${svc_t1}</strong>, ${svc_t2} of the deceased <strong>${name}</strong>, request payment of the pay, leave salary and other emoluments due, amounting to <strong>Rs. ${svc_t3}</strong>, in respect of death on <strong>${svc_date1}</strong>, and undertake to furnish an indemnity bond (with sureties, if required) in the form currently prescribed by the Treasury.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
  },
};
