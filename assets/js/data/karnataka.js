/* =============================================================================
   KARNATAKA — data for state-tool-engine.js. See assets/js/data/kerala.js
   for the schema reference.

   RULE-ACCURACY NOTE: researched directly against the primary Karnataka
   Civil Services Rules (KCSR) text. Deliberately differs from Kerala/Central
   where the rules genuinely differ — Extraordinary Leave (Rule 117) is a
   single undifferentiated type (like Central's EOL, not Kerala's named-
   subtype LWA); there is NO separately-named "Hospital Leave" (Special
   Disability Leave, Rules 136–137, is the only equivalent, scoped to
   duty-related injury only); Casual/Special Casual Leave live in "Annexure
   B" to KCSR, not the numbered rules, and are cited accordingly. Two items
   researched came back too uncertain to ship: a reported "Child Care Leave"
   (Rule 135-C, 730 days) could NOT be confirmed against the primary KCSR
   text — omitted entirely rather than hard-coding an unverified rule/figure.
   "Compensatory Leave" was searched for directly in the primary text and
   not found as a codified rule — also omitted rather than fabricating a
   citation. MACP-equivalent year-slabs, HBA/Motor Vehicle Advance ceilings,
   and KGID's specific rule/form numbers are stated generically (no
   specific figure asserted) since they could not be verified this session.
   ============================================================================= */
window.STATE_DATA = window.STATE_DATA || {};
window.STATE_DATA.karnataka = {
  key: 'karnataka', name: 'Karnataka',
  heroTitle: 'Karnataka — KCSR &amp; Service Forms',
  heroMeta: 'leave, insurance, advances &amp; family pension, under KCSR',
  idFieldLabel: 'Employee ID',
  coverLetter: false,

  groupOrder: [
    { slot: 'general', name: 'General Leave' },
    { slot: 'lwa', name: 'Extraordinary Leave' },
    { slot: 'family', name: 'Family & Medical Leave' },
    { slot: 'casual', name: 'Casual & Special Leave' },
    { slot: 'insurance', name: 'KGID Insurance' },
    { slot: 'service', name: 'Service & Establishment Matters' },
    { slot: 'advance', name: 'Advances & Loans' },
    { slot: 'estate', name: 'Estate / Death Benefit Claims' },
  ],

  profileFields: [
    { id: 'name', label: 'Full Name', type: 'text', required: true },
    { id: 'pen', label: 'Employee ID', type: 'text', required: true },
    { id: 'designation', label: 'Designation', type: 'text', required: true },
    { id: 'office', label: 'Office / Department', type: 'text', required: true, full: true, placeholder: 'e.g., O/o the Deputy Commissioner, Mysuru' },
    { id: 'dob', label: 'Date of Birth', type: 'date', required: true },
    { id: 'entry', label: 'Date of Entry into Service', type: 'date', required: true },
    { id: 'pay', label: 'Pay &amp; Scale of Pay', type: 'text', required: true, placeholder: 'e.g., Level 15, Rs 41600' },
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
    earned_leave: { label: 'Earned Leave', group: 'general', rule: 'Rule 112, KCSR', family: 'leave', nature: 'Earned Leave', defaultReason: 'Private affairs',
      hint: '30 days/calendar year, credited in 2 instalments of 15 days (1 Jan & 1 Jul); max accumulation 240 days; max grant at a time 120 days (180 for a Gazetted officer spending 60+ days abroad, 240 as leave preparatory to retirement).' },
    half_pay_leave: { label: 'Half Pay Leave', group: 'general', rule: 'Rule 114(1)–(2), KCSR', family: 'leave', nature: 'Half Pay Leave', defaultReason: 'Private affairs',
      hint: '20 days/year (2 instalments of 10 days, 1 Jan & 1 Jul); grantable on medical certificate or for private affairs.' },
    commuted_leave: { label: 'Commuted Leave', group: 'general', rule: 'Rule 114(4), KCSR', family: 'leave', nature: 'Commuted Leave (in lieu of Half Pay Leave)', defaultReason: 'Medical treatment (Medical Certificate enclosed)',
      declarationTemplate: 'I undertake that this commuted leave is debited against my Half Pay Leave account at double the number of days availed, as required under Rule 114(4), KCSR.',
      hint: 'Max half of Half Pay Leave due; max 120 days at a time on private affairs; combined with Earned Leave, total ≤180 days.' },
    leave_not_due: { label: 'Leave Not Due', group: 'general', rule: 'Rule 114(6), KCSR', family: 'leave', nature: 'Leave Not Due', defaultReason: 'Medical treatment (Medical Certificate enclosed)',
      declarationTemplate: 'I undertake to refund the leave salary drawn during this Leave Not Due, which would not have been admissible had Rule 114(6), KCSR not been applied, in the event of my resignation or voluntary retirement before earning it back through future Half Pay Leave accrual.',
      hint: 'Only for permanent employees with a reasonable prospect of returning to duty; max 360 days in entire service (max 90 days at a time and 180 days in all otherwise than on medical certificate).' },

    extraordinary_leave: { label: 'Extraordinary Leave (EOL)', group: 'lwa', rule: 'Rule 117, KCSR', family: 'leave', needsRouting: true, nature: 'Extraordinary Leave',
      hint: 'A single leave type — KCSR does not split this into named sub-purposes the way Kerala’s LWA does. Granted when no other leave is due/admissible, or on written request. No leave salary is payable (Rule 118(5)). Internal caps for non-permanent employees: 3 months (no medical certificate); 6 months (common ailment, medical certificate, after 1+ yr service); 18 months (notified serious illness, after 1+ yr service); 2–3 years (UG/PG/doctoral study with prior Government approval, after 3+ yrs service).',
      declarationTemplate: 'I understand that no leave salary is admissible during Extraordinary Leave under Rule 117, KCSR, and that the duration applied for is within the limits prescribed for my category and length of service.',
      extraFields: [{ id: 'purpose', label: 'Purpose / Nature of Extraordinary Leave', type: 'text', full: true, placeholder: 'e.g., private employment, higher studies, joining spouse' }] },

    maternity: { label: 'Maternity Leave', group: 'family', rule: 'Rule 135, KCSR', family: 'leave', medCert: true, nature: 'Maternity Leave', defaultReason: 'Confinement for childbirth',
      hint: 'Reported as 180 days full pay from commencement (increased from 135 days per a 2012 order) — confirm the currently applicable figure with your DDO. Not admissible with 2+ living children. Up to 60 days may be combined with other leave without a medical certificate.' },
    maternity_miscarriage: { label: 'Maternity Leave — Miscarriage / Abortion (incl. MTP)', group: 'family', rule: 'Rule 135, KCSR', family: 'leave', medCert: true, nature: 'Leave for Miscarriage / Abortion', defaultReason: 'Miscarriage / Abortion',
      hint: 'Up to 6 weeks with a medical certificate.' },
    paternity: { label: 'Paternity Leave', group: 'family', rule: 'Rule 135-B, KCSR', family: 'leave', nature: 'Paternity Leave', defaultReason: 'Delivery of child by spouse',
      hint: '15 days, during the wife’s confinement; not admissible with 2+ living children; not debited to the leave account; cannot be encashed or merged with Earned Leave; may not normally be refused; may be combined with any leave except Casual Leave.' },
    child_adoption: { label: 'Child Adoption Leave', group: 'family', rule: 'Rule 135-A, KCSR', family: 'leave', nature: 'Child Adoption Leave', defaultReason: 'Legal adoption of a child',
      hint: 'Leave of the kind due and admissible (including up to 60 days commuted leave without medical certificate, and leave not due) up to 1 year or till the adopted child turns 1, whichever is less; not admissible if the employee has 2+ living children at the time of adoption.' },
    special_disability_leave: { label: 'Special Disability Leave', group: 'family', rule: 'Rules 136–137, KCSR', family: 'leave', medCert: true, nature: 'Special Disability Leave', defaultReason: 'Injury sustained in the course of official duty',
      hint: 'For injury intentionally inflicted (Rule 136) or accidental injury/illness (Rule 137) incurred in the due performance of duty. Max 24 months per disability; leave salary at Earned Leave rate for the first 120 days, then Half Pay Leave rate. Karnataka has no separately-named "Hospital Leave" category — this is the equivalent, scoped strictly to duty-related injury.' },

    casual_leave: { label: 'Casual Leave', group: 'casual', rule: 'Annexure B, Rule 1, KCSR (G.O. No. FD 163 SRS 58, dated 5.12.1958, as amended)', family: 'letter', needsRouting: true, nature: 'Casual Leave', subject: 'Application for Casual Leave', defaultReason: 'Personal / domestic affairs',
      hint: '15 days per calendar year; max 7 days at a time; pro-rated (1 day/completed month) for employees with under 1 year of service in the post.',
      bodyTemplate: 'I request you to kindly grant me Casual Leave for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, on account of <strong>${reason}</strong>.' },
    scl_blood: { label: 'Special Casual Leave — Blood Donation', group: 'casual', rule: 'Annexure B, Rule 11-G, KCSR', family: 'letter', needsRouting: true, nature: 'Special Casual Leave for Blood Donation', subject: 'Application for Special Casual Leave — Blood Donation', defaultReason: 'Voluntary blood donation',
      hint: '1 day, on production of a certificate from the Blood Bank / Hospital / Indian Red Cross Society.',
      bodyTemplate: 'I request you to kindly grant me Special Casual Leave for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, on account of voluntary blood donation: <strong>${reason}</strong>. A certificate from the Blood Bank/Hospital is enclosed.' },
    scl_sports: { label: 'Special Casual Leave — Sports / Mountaineering / Trekking', group: 'casual', rule: 'Annexure B, Rule 10, KCSR', family: 'letter', needsRouting: true, nature: 'Special Casual Leave for Sports/Trekking', subject: 'Application for Special Casual Leave — Sports/Trekking', defaultReason: 'Representing State/Country in Sports or a trekking/mountaineering expedition',
      hint: 'General cap of 30 days/calendar year for trekking/mountaineering/coaching camps and for sportspersons/managers/coaches/umpires; trekking/mountaineering benefit limited to 3 occasions in the entire service.',
      bodyTemplate: 'I request you to kindly grant me Special Casual Leave for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, on account of: <strong>${reason}</strong>.' },
    scl_family_planning: { label: 'Special Casual Leave — Family Planning (Sterilisation)', group: 'casual', rule: 'Annexure B, Rules 11, 11-B, 11-H, KCSR', family: 'letter', needsRouting: true, nature: 'Special Casual Leave for Family Planning', subject: 'Application for Special Casual Leave — Family Planning', defaultReason: 'Sterilisation operation',
      hint: '7 days (Vasectomy/Tubectomy, either spouse); 14 days (non-puerperal sterilisation, women); 3 days (husband, on wife’s Laparoscopic sterilisation without delivery); 7 days (female employee’s own Laparoscopic sterilisation) — all on production of a medical certificate from the operating officer.',
      bodyTemplate: 'I request you to kindly grant me Special Casual Leave for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, on account of: <strong>${reason}</strong>. A medical certificate from the operating officer is enclosed.' },

    kgid_proposal: { label: 'KGID — Policy Proposal', group: 'insurance', rule: 'Karnataka Government Insurance Department (KGID) — specific rule/form numbers not independently verified', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / the KGID office.',
      hint: 'This tool could not verify KGID’s specific proposal-form or rule numbers this session — confirm the current process at kgidonline.karnataka.gov.in or with your DDO.',
      extraFields: [{ id: 'svc_t1', label: 'Sum Assured Proposed (₹)', type: 'text' }, { id: 'svc_t2', label: 'Nominee Name', type: 'text' }, { id: 'svc_t3', label: 'Nominee Relationship', type: 'text' }],
      subject: 'Proposal — Karnataka Government Insurance Department (KGID)',
      bodyTemplate: 'I request that I may be enrolled as a policyholder under the Karnataka Government Insurance Department (KGID) scheme, with a Sum Assured of <strong>${svc_t1}</strong>. I nominate <strong>${svc_t2}</strong>{{#if svc_t3}} (${svc_t3}){{/if}} to receive the benefits under this policy in the event of my death.' },
    kgid_claim: { label: 'KGID — Claim', group: 'insurance', rule: 'Karnataka Government Insurance Department (KGID) — specific rule/form numbers not independently verified', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / the KGID office.',
      extraFields: [{ id: 'svc_date1', label: 'Date of Maturity / Date of Death', type: 'date' }, { id: 'svc_t1', label: 'Policy Number', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Claim — Karnataka Government Insurance Department (KGID)',
      bodyTemplate: 'I submit this claim in respect of KGID Policy No. <strong>${svc_t1}</strong>, on account of the event dated <strong>${svc_date1}</strong>.{{#if svc_ta1}} ${svc_ta1}{{/if}} I enclose the policy document and supporting documents.' },

    gpf_advance: { label: 'GPF Advance', group: 'service', rule: 'Karnataka General Provident Fund Rules (2016 codification)', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Treasury.',
      hint: 'Applies only if you joined state service before 01.04.2006 (GPF; employees joining on/after that date are covered by NPS instead).',
      extraFields: [{ id: 'svc_t1', label: 'Purpose (education / illness / housing / vehicle / other)', type: 'text' }, { id: 'svc_t2', label: 'Amount Requested (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Application for GPF Advance',
      bodyTemplate: 'I request that a GPF advance of <strong>Rs. ${svc_t2}</strong> be sanctioned for the purpose of <strong>${svc_t1}</strong>. This applies since I joined service before 01.04.2006.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
    nps_reg: { label: 'NPS Subscriber Registration', group: 'service', rule: 'National Pension System — mandatory for Karnataka state employees joining on/after 01.04.2006', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO.',
      extraFields: [{ id: 'svc_date1', label: 'Date of joining service', type: 'date' }, { id: 'svc_t1', label: 'Bank account number &amp; branch (for NPS)', type: 'text' }, { id: 'svc_t2', label: 'Nominee Name', type: 'text' }, { id: 'svc_t3', label: 'Nominee Relationship', type: 'text' }],
      subject: 'Application for NPS Subscriber Registration',
      bodyTemplate: 'I request that I be registered as a subscriber under the National Pension System, having joined service on <strong>${svc_date1}</strong>. My bank account for NPS purposes is <strong>${svc_t1}</strong>, and I nominate <strong>${svc_t2}</strong>{{#if svc_t3}} (${svc_t3}){{/if}} as my nominee. My DDO will process this through the HRMS/treasury system for PRAN allotment.' },
    time_bound_advancement: { label: 'Time Bound Advancement Option', group: 'service', rule: 'Karnataka Civil Services (Time Bound Advancement) Rules, 1983', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Head of Office.',
      hint: 'A separate, long-standing scheme (predates and is not the same as Central Government’s MACP) granting periodic financial upgradation for continuous service without promotion — the exact year-thresholds could not be verified this session; confirm the applicable slab with your DDO before applying.',
      extraFields: [{ id: 'svc_date1', label: 'Date from which upgradation is due/claimed', type: 'date' }, { id: 'svc_t1', label: 'Present grade / pay level', type: 'text' }, { id: 'svc_t2', label: 'Years of continuous service without promotion', type: 'text' }],
      subject: 'Time Bound Advancement Option',
      bodyTemplate: 'I request consideration for a financial upgradation under the Karnataka Civil Services (Time Bound Advancement) Rules, 1983, effective from <strong>${svc_date1}</strong>. I have completed <strong>${svc_t2}</strong> years of continuous service in my present grade/pay level of <strong>${svc_t1}</strong> without promotion.' },

    hba: { label: 'House Building Advance', group: 'advance', rule: 'Referenced at Rule 348, KCSR (specific governing G.O. and current ceiling not independently verified)', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your Head of Department.',
      hint: 'Existence of this scheme is confirmed by KCSR Rule 348, but the current ceiling amount and interest rate could not be verified this session — confirm with your DDO / Finance Department before finalising your application.',
      extraFields: [{ id: 'svc_t1', label: 'Purpose (construction / purchase / extension / repair / site + house)', type: 'text' }, { id: 'svc_t2', label: 'Estimated Cost (₹)', type: 'text' }, { id: 'svc_t3', label: 'Advance Amount Required (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Property / site details', type: 'textarea', full: true }],
      subject: 'Application for House Building Advance',
      bodyTemplate: 'I request that a House Building Advance be sanctioned to me for the purpose of <strong>${svc_t1}</strong>, as recognised under Rule 348, KCSR. The estimated cost is <strong>Rs. ${svc_t2}</strong>, and the advance amount required is <strong>Rs. ${svc_t3}</strong>.{{#if svc_ta1}} Property/site details: ${svc_ta1}.{{/if}} I have confirmed the currently applicable ceiling and interest rate with my DDO.' },
    motor_vehicle_advance: { label: 'Motor Cycle / Motor Car Advance', group: 'advance', rule: 'Referenced at Rule 348, KCSR (specific governing G.O. and current ceiling not independently verified)', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your Head of Department.',
      extraFields: [{ id: 'svc_t1', label: 'Type of Vehicle', type: 'text' }, { id: 'svc_t2', label: 'Estimated Cost (₹)', type: 'text' }, { id: 'svc_t3', label: 'Advance Amount Required (₹)', type: 'text' }],
      subject: 'Application for Motor Vehicle Advance',
      bodyTemplate: 'I request that a Motor Vehicle Advance be sanctioned to me for the purchase of <strong>${svc_t1}</strong>, as recognised under Rule 348, KCSR. The estimated cost is <strong>Rs. ${svc_t2}</strong>, and the advance amount required is <strong>Rs. ${svc_t3}</strong>.' },

    family_pension: { label: 'Family Pension — Claim / Intimation', group: 'estate', rule: 'Karnataka Government Servants’ (Family Pension) Rules, 1964 (cross-referenced by KCSR Rules 347-A/347-B)', family: 'letter', noRemarksBlock: true,
      extraFields: [{ id: 'svc_date1', label: 'Date of Death', type: 'date' }, { id: 'svc_t2', label: 'Claimant’s Relationship to the Deceased', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Family Pension — Claim / Intimation',
      bodyTemplate: 'I write to intimate the death of the above-named Government servant on <strong>${svc_date1}</strong>, and to request that Family Pension, as admissible under the Karnataka Government Servants’ (Family Pension) Rules, 1964, be sanctioned in favour of the eligible member(s) of the family.{{#if svc_t2}} Claimed relationship to the deceased: ${svc_t2}.{{/if}}{{#if svc_ta1}} ${svc_ta1}{{/if}} KCSR Rule 347-A requires the sanctioning authority to settle this within 2 months of intimation.' },
    deceased_dues_indemnity: { label: "Indemnity Bond — Deceased Employee's Dues", group: 'estate', rule: 'Karnataka Financial Code, Article 81, Form No. 13', family: 'letter', noRemarksBlock: true,
      hint: 'If the gross claim is ≤ Rs. 5,000, the Head of Office may pay directly without a formal indemnity bond if satisfied of the claimant’s title — confirm this threshold is still current with your Treasury Officer. Above that, an indemnity bond in Form No. 13 with sureties (normally 2, or 1 if the claim is under Rs. 7,500) is required.',
      extraFields: [{ id: 'svc_date1', label: 'Date of death of employee', type: 'date' }, { id: 'svc_t1', label: 'Name of Claimant(s)', type: 'text' }, { id: 'svc_t2', label: 'Relationship of Claimant(s) to Deceased', type: 'text' }, { id: 'svc_t3', label: 'Amount Claimed (₹)', type: 'text' }, { id: 'svc_ta1', label: "Claimant's address / surety details, if required", type: 'textarea', full: true }],
      subject: "Indemnity — Claim for Deceased Employee's Dues (K.F.C. Form No. 13)",
      bodyTemplate: 'I/We, <strong>${svc_t1}</strong>, ${svc_t2} of the deceased <strong>${name}</strong>, request payment of the pay, leave salary and other emoluments due, amounting to <strong>Rs. ${svc_t3}</strong>, in respect of death on <strong>${svc_date1}</strong>, under Article 81, Karnataka Financial Code, and undertake to furnish an indemnity bond in Form No. 13 (with sureties, if required) as prescribed.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
  },
};
