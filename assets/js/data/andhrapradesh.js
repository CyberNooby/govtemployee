/* =============================================================================
   ANDHRA PRADESH — data for state-tool-engine.js. See assets/js/data/kerala.js
   for the schema reference and assets/js/data/karnataka.js for the closest
   prior example of this file's research/honesty discipline.

   RULE-ACCURACY NOTE — read before trusting any figure below.

   PRIMARY-SOURCE ACCESS: every primary-looking PDF this session (the A.P.
   Leave Rules, 1933 gazette text, MCRHRDI/Revenue Academy reading-material
   reproductions, individual G.O. PDFs) came back as a scanned/compressed
   binary that could not be parsed into clean text — no OCR tool was
   available in this environment. Nothing here was read directly off a
   primary gazette page. Every rule number, day-count and G.O. citation below
   was instead corroborated across two or more independent secondary sources
   (MCRHRDI/Revenue Academy training-institute material, AP Finance
   Department circular reproductions, and employee/teacher-union portals —
   apteachers.in, aputf.org, servicesjournal.in — that reproduce G.O. text
   verbatim with number and date). Where only a single source could be found,
   or sources disagreed, that is stated explicitly in the item's `hint`
   rather than silently picking one figure. Treat every figure below as
   "well-corroborated by secondary sources," not "independently verified
   against the primary gazette" — confirm anything materially important with
   your DDO/Finance Section before relying on it.

   BIFURCATION NOTE: Andhra Pradesh was bifurcated in 2014. The A.P. Leave
   Rules, 1933 (Annexure III to the A.P. Fundamental Rules) and the A.P.
   Revised Pension Rules, 1980 are common-origin rules inherited by both
   successor states. Nothing in this file assumes Telangana still matches —
   Telangana is a separate, later build. Where a rule below is simply the
   common-origin 1933/1980 text with no AP-specific post-2014 amendment
   found, that is what's being presented — not an independently-confirmed
   AP-only provision.

   SPECIFIC ITEMS FLAGGED THIS SESSION:
   - Earned Leave: advance credit (15+15 days/yr) and max-grant-at-a-time
     (120, extendable to 180 if leave is spent outside India — G.O.Ms.No.153,
     Fin (FR.I) Dept, dt.4.5.2010) are well-corroborated. The *accumulation
     ceiling* specifically is NOT asserted here — sources this session gave
     inconsistent figures (30 days in one place, which looks like it may be
     conflating the advance-credit total with an accumulation cap) — confirm
     the current EL accumulation ceiling with your DDO.
   - Casual Leave: 15 days/calendar year is corroborated by four independent
     sources including a direct G.O. citation (G.O.Ms.No.18, dt.10.3.2021).
     One AI-summarized extraction of the bare-act text returned "twelve
     days" for the same provision — very likely a misread, but flagged here
     per the stated discipline rather than silently discarded.
   - Special Disability Leave: sources disagreed on the governing rule's
     citation form — some cite it within the numbered A.P. Leave Rules,
     others cite it as "FR-83" (Fundamental Rules). Cited generically below
     rather than picking one number with false confidence. No separately-
     confirmed "Hospital Leave" rule distinct from this was found (unlike
     Kerala's Rule 103) — Special Disability Leave is presented as the sole
     equivalent, same as Karnataka's treatment of its own Rules 136–137.
   - Festival Advance: figures conflict directly — G.O.Ms.No.167 (dt.
     20.9.2017, Tenth PRC) gives Rs. 7,500 (Class IV: Rs. 5,000); a later
     reference (G.O.Rt.No.2115, dt.6.12.2024) was found describing an
     enhancement to Rs. 20,000, but that G.O.'s own text could not be read
     this session to confirm the figure applies to this scheme and not a
     different one. Both figures are stated in the hint; no single number is
     asserted as current.
   - House Building Advance / Motor Vehicle Advance: existence, eligibility
     (8 years' permanent service) and interest rate (5% Class IV / 5.5%
     others) are corroborated, but the current rupee ceiling could not be
     confirmed this session — worded generically, same approach Karnataka
     took for its own HBA/MVA ceilings.
   - Transfer of Charge report: OMITTED ENTIRELY. Unlike Kerala (K.F.C. Form
     7/8) and Karnataka (K.F.C. Article 81(a), Form 13), no AP Financial Code
     article/form number for a charge-transfer report could be found this
     session — omitted rather than fabricated.
   - Indemnity Bond for a deceased employee's pay/leave-salary dues: included
     but cited generically ("Andhra Pradesh Financial Code") since the
     specific article/form number could not be confirmed this session
     (APGLI has its own, separately-confirmed indemnity bond form, used for
     the APGLI claim type instead).
   - CPS→OPS one-time switch option (G.O.Ms.No.53, Finance (HR.III-Pension &
     GPF) Dept, dt.13.7.2026): included because it is unusually current and
     well-corroborated (exact G.O. number, date, department and a 3-month
     window were all independently confirmed) — genuinely new information
     government employees are actively acting on right now.
   - Miscarriage/MTP leave and a standalone Transfer-of-Charge-style "single
     male adoption leave" note are folded into hints on adjacent types
     rather than given their own citation-backed type, since no AP-specific
     rule number/day-count for them could be independently confirmed.
   ============================================================================= */
window.STATE_DATA = window.STATE_DATA || {};
window.STATE_DATA.andhrapradesh = {
  key: 'andhrapradesh', name: 'Andhra Pradesh',
  heroTitle: 'Andhra Pradesh — APLR &amp; Service Forms',
  heroMeta: 'leave, insurance, advances &amp; family pension, under the A.P. Leave Rules, 1933 &amp; allied service rules',
  idFieldLabel: 'Employee ID',
  coverLetter: false,

  groupOrder: [
    { slot: 'general', name: 'General Leave' },
    { slot: 'lwa', name: 'Extraordinary Leave' },
    { slot: 'family', name: 'Family & Medical Leave' },
    { slot: 'casual', name: 'Casual & Special Leave' },
    { slot: 'insurance', name: 'APGLI Insurance' },
    { slot: 'service', name: 'Service & Establishment Matters' },
    { slot: 'advance', name: 'Advances & Loans' },
    { slot: 'estate', name: 'Estate / Death Benefit Claims' },
  ],

  profileFields: [
    { id: 'name', label: 'Full Name', type: 'text', required: true },
    { id: 'pen', label: 'Employee ID', type: 'text', required: true },
    { id: 'designation', label: 'Designation', type: 'text', required: true },
    { id: 'office', label: 'Office / Department', type: 'text', required: true, full: true, placeholder: 'e.g., O/o the District Collector, Guntur' },
    { id: 'dob', label: 'Date of Birth', type: 'date', required: true },
    { id: 'entry', label: 'Date of Entry into Service', type: 'date', required: true },
    { id: 'pay', label: 'Pay &amp; Scale of Pay', type: 'text', required: true, placeholder: 'e.g., Level 15, Rs 42600' },
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
    earned_leave: { label: 'Earned Leave', group: 'general', rule: 'Rules 8–12, A.P. Leave Rules, 1933 (Superior Service)', family: 'leave', nature: 'Earned Leave', defaultReason: 'Private affairs',
      hint: 'Advance credit of 15 days on 1 Jan and 15 days on 1 Jul (30 days/year) for permanent employees in Superior Service (Rule 8); max grant at a time 120 days, extendable to 180 days if the leave is spent outside India (Rule 11 &amp; G.O.Ms.No.153, Fin (FR.I) Dept, dt.4.5.2010). Last Grade Service employees are governed by the parallel Rules 17–18 with different credit figures. The current EL accumulation ceiling could not be reliably confirmed this session — sources gave inconsistent figures — confirm with your DDO.' },
    half_pay_leave: { label: 'Half Pay Leave', group: 'general', rule: 'Rule 13, A.P. Leave Rules, 1933 (Superior Service)', family: 'leave', nature: 'Half Pay Leave', defaultReason: 'Private affairs',
      hint: '20 days credited for every completed year of service (including periods of Extraordinary Leave); reported as having no ceiling on accumulation; grantable either on medical certificate or for private affairs. During Half Pay Leave, leave salary is half-pay + half-DA, irrespective of scale of pay. Last Grade Service employees are governed by the parallel Rule 18.' },
    commuted_leave: { label: 'Commuted Leave', group: 'general', rule: 'Rule 15-B, A.P. Leave Rules, 1933', family: 'leave', nature: 'Commuted Leave (in lieu of Half Pay Leave)', defaultReason: 'Medical treatment (Medical Certificate enclosed)',
      declarationTemplate: 'I undertake that this commuted leave is debited against my Half Pay Leave account at double the number of days availed, as required under Rule 15-B, A.P. Leave Rules, 1933, and that I will return to duty on its expiry.',
      hint: 'Max half of the Half Pay Leave due, on medical certificate; max 240 days in the entire service. May not be granted unless the sanctioning authority has reason to believe the Government servant will return to duty on its expiry. Last Grade Service employees are governed by the parallel Rule 18-B.' },
    leave_not_due: { label: 'Leave Not Due', group: 'general', rule: 'Rule 15-C, A.P. Leave Rules, 1933', family: 'leave', nature: 'Leave Not Due', defaultReason: 'Medical treatment (Medical Certificate enclosed)',
      declarationTemplate: 'I undertake to refund the leave salary drawn during this Leave Not Due, which would not have been admissible had Rule 15-C, A.P. Leave Rules, 1933, not been applied, in the event of my resignation or voluntary retirement before earning it back through future Half Pay Leave accrual.',
      hint: 'Granted only on medical certificate, when no Half Pay Leave/Earned Leave balance remains; max 180 days in the entire service; debited against the Half Pay Leave account against future credit.' },

    extraordinary_leave: { label: 'Extraordinary Leave (EOL)', group: 'lwa', rule: 'Rule 16, A.P. Leave Rules, 1933 (Superior Service)', family: 'leave', needsRouting: true, nature: 'Extraordinary Leave',
      hint: 'A single leave type — like Karnataka\'s and Central Government\'s EOL, not split into Kerala-style named LWA sub-purposes. Granted when no other leave is admissible, or on written request even when other leave is due. No leave salary is payable. Non-permanent employees face internal caps under Rule 23: 3 months (ordinary); 6 months (with 3+ years\' continuous service and a medical certificate); 18 months (tuberculosis/leprosy treatment at a recognised institution); 12 months (cancer or mental illness treatment); 24 months (studies certified to be in the public interest, against a bond). Last Grade Service employees are governed by the parallel Rule 19.',
      declarationTemplate: 'I understand that no leave salary is admissible during Extraordinary Leave under Rule 16, A.P. Leave Rules, 1933, and that the duration applied for is within the limits prescribed for my category and length of service.',
      extraFields: [{ id: 'purpose', label: 'Purpose / Nature of Extraordinary Leave', type: 'text', full: true, placeholder: 'e.g., private employment, higher studies, joining spouse, medical treatment' }] },

    maternity: { label: 'Maternity Leave', group: 'family', rule: 'G.O.Ms.No.152, Finance (FR.I) Dept, dt.4.5.2010', family: 'leave', medCert: true, nature: 'Maternity Leave', defaultReason: 'Confinement for childbirth',
      hint: '180 days on full pay, granted outside the Earned Leave account; admissible only up to 2 surviving children. This tool could not independently confirm a separate AP-specific rule/day-count for Miscarriage/MTP leave this session — if applicable to you, confirm the current provision and figure with your DDO before applying under this type.' },
    paternity: { label: 'Paternity Leave', group: 'family', rule: 'G.O.Ms.No.231, dt.16.9.2005', family: 'leave', nature: 'Paternity Leave', defaultReason: 'Delivery of child by spouse',
      hint: '15 days, admissible to married male Government employees with fewer than 2 surviving children; may be availed at the time of delivery or within 6 months of the date of delivery.' },
    child_adoption: { label: 'Child Adoption Leave', group: 'family', rule: 'G.O.Ms.No.33, dt.8.3.2022', family: 'leave', nature: 'Child Adoption Leave', defaultReason: 'Legal adoption of a child',
      hint: 'Up to 180 days for a female Government servant with fewer than 2 surviving children who legally adopts a child under 1 year of age; not debited to the leave account. The same G.O. separately grants 15 days\' adoption-related leave to "single" (unmarried/widower/divorcee) male employees, within 6 months of the adoption — select this type and note that in the reason field if it applies to you.' },
    child_care_leave: { label: 'Child Care Leave', group: 'family', rule: 'G.O.Ms.No.33, dt.8.3.2022 &amp; G.O.Ms.No.199, dt.19.10.2022', family: 'leave', nature: 'Child Care Leave', defaultReason: 'Care of a minor child',
      hint: 'Reported as enhanced from 60 days to 180 days in the entire service (G.O.Ms.No.33/2022), with the number of permissible spells subsequently enhanced by G.O.Ms.No.199/2022. This tool could not reconcile the exact current eligible-child age ceiling or per-spell/minimum-spell figures between sources this session — confirm the current detailed conditions with your DDO before applying.' },
    special_disability_leave: { label: 'Special Disability Leave', group: 'family', rule: 'A.P. Leave Rules, 1933 (rule number not consistently confirmed across sources this session)', family: 'leave', medCert: true, nature: 'Special Disability Leave', defaultReason: 'Injury sustained in the course of official duty',
      hint: 'For a permanent or temporary Government servant disabled by injury intentionally inflicted, or caused in/consequence of the due performance of official duty or official position — including certain road accidents while proceeding on official duty between offices/courts/field work sites, but excluding ordinary residence-to-office commute accidents. Max 24 months per disability; leave salary at full-pay rate for the first 120 days (permanent employees) or 30 days (temporary employees), then at half-pay rate; not debited to any leave account. No separately-named "Hospital Leave" distinct from this could be confirmed for AP.' },

    casual_leave: { label: 'Casual Leave', group: 'casual', rule: 'A.P. Leave Rules, 1933, Appendix (Casual Leave); see also G.O.Ms.No.18, Fin (HR.IV-FR&amp;LR) Dept, dt.10.3.2021', family: 'letter', needsRouting: true, nature: 'Casual Leave', subject: 'Application for Casual Leave', defaultReason: 'Personal / domestic affairs',
      hint: '15 days per calendar year (corroborated by 4 independent sources, incl. G.O.Ms.No.18/2021); one AI-summarized reading of the bare-act text this session returned "12 days" for the same provision — very likely a misread, flagged here rather than silently dropped. Confirm current entitlement with your DDO.',
      bodyTemplate: 'I request you to kindly grant me Casual Leave for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, on account of <strong>${reason}</strong>.' },
    scl_blood: { label: 'Special Casual Leave — Blood Donation', group: 'casual', rule: 'G.O.Ms.No.137, dt.23.2.1984', family: 'letter', needsRouting: true, nature: 'Special Casual Leave for Blood Donation', subject: 'Application for Special Casual Leave — Blood Donation', defaultReason: 'Voluntary blood donation',
      hint: '2 days — 1 day on the date of donation, and 1 day to be utilised within 6 months of the donation, on production of a certificate from the Blood Bank/Hospital.',
      bodyTemplate: 'I request you to kindly grant me Special Casual Leave for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, on account of voluntary blood donation: <strong>${reason}</strong>. A certificate from the Blood Bank/Hospital is enclosed.' },
    scl_family_planning: { label: 'Special Casual Leave — Family Planning (Sterilisation)', group: 'casual', rule: 'G.O.Ms.No.607, dt.12.11.1991 &amp; G.O.Ms.No.124/F&amp;P, dt.13.4.1982', family: 'letter', needsRouting: true, nature: 'Special Casual Leave for Family Planning', subject: 'Application for Special Casual Leave — Family Planning', defaultReason: 'Sterilisation operation',
      hint: '6 working days (Vasectomy, male employee, G.O.Ms.No.607/1991); 14 working days (Tubectomy — 1st &amp; 2nd, female employee, G.O.Ms.No.124/F&amp;P/1982); 7 days (husband, on wife\'s Tubectomy) — all on production of a medical certificate from the operating officer/hospital.',
      bodyTemplate: 'I request you to kindly grant me Special Casual Leave for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, on account of: <strong>${reason}</strong>. A medical certificate from the operating officer/hospital is enclosed.' },
    scl_sports: { label: 'Special Casual Leave — Sports / National or International Events', group: 'casual', rule: 'A.P. Leave Rules, 1933 (specific G.O./rule number not independently confirmed this session)', family: 'letter', needsRouting: true, nature: 'Special Casual Leave for Sports', subject: 'Application for Special Casual Leave — Sports', defaultReason: 'Representing State/Country in a sporting event',
      hint: 'Reported as up to 30 days/calendar year for representing the State or Country at a national or international sporting event — this tool could not independently confirm the current governing G.O./rule number this session; confirm with your DDO before applying.',
      bodyTemplate: 'I request you to kindly grant me Special Casual Leave for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, on account of: <strong>${reason}</strong>.' },
    scl_women_additional: { label: 'Special Casual Leave — Additional (Women Employees)', group: 'casual', rule: 'G.O.Ms.No.18, Fin (HR.IV-FR&amp;LR) Dept, dt.10.3.2021', family: 'letter', needsRouting: true, nature: 'Special Casual Leave (Additional, Women Employees)', subject: 'Application for Special Casual Leave (Additional, Women Employees)', defaultReason: 'Personal / domestic affairs',
      hint: '5 additional days of Casual Leave per calendar year for all women employees of the A.P. State Government, over and above the standard 15 days Casual Leave and 5 Optional Holidays.',
      bodyTemplate: 'I request you to kindly grant me Special Casual Leave (Additional, Women Employees) for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, under G.O.Ms.No.18, dt.10.3.2021, on account of <strong>${reason}</strong>.' },

    apgli_proposal: { label: 'APGLI — New Policy Proposal', group: 'insurance', rule: 'Andhra Pradesh Government Life Insurance Fund Rules, 2024', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / the APGLI Divisional/District Office.',
      hint: 'APGLI is a compulsory life insurance scheme for all A.P. State Government employees drawing pay from the "010" head of account. Reported eligibility window: age 21–53; reported minimum subscription: slab-based, historically around 4% of basic pay (slabs revised over time); policies are Endowment policies. This tool could not independently confirm the currently applicable premium slab table or maturity age this session — confirm with your APGLI office.',
      extraFields: [{ id: 'svc_t1', label: 'Sum Assured Proposed (₹)', type: 'text' }, { id: 'svc_t2', label: 'Nominee Name', type: 'text' }, { id: 'svc_t3', label: 'Nominee Relationship', type: 'text' }],
      subject: 'Proposal — Andhra Pradesh Government Life Insurance (APGLI)',
      bodyTemplate: 'I request that I may be enrolled as a policyholder under the Andhra Pradesh Government Life Insurance (APGLI) scheme, with a Sum Assured of <strong>${svc_t1}</strong>. I nominate <strong>${svc_t2}</strong>{{#if svc_t3}} (${svc_t3}){{/if}} to receive the benefits under this policy in the event of my death.' },
    apgli_claim: { label: 'APGLI — Claim (Maturity / Death)', group: 'insurance', rule: 'Andhra Pradesh Government Life Insurance Fund Rules, 2024', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / the APGLI Divisional/District Office.',
      extraFields: [{ id: 'svc_date1', label: 'Date of Maturity / Date of Death', type: 'date' }, { id: 'svc_t1', label: 'Policy Number', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Claim — Andhra Pradesh Government Life Insurance (APGLI)',
      bodyTemplate: 'I submit this claim in respect of APGLI Policy No. <strong>${svc_t1}</strong>, on account of the event dated <strong>${svc_date1}</strong>.{{#if svc_ta1}} ${svc_ta1}{{/if}} I enclose the policy document, the prescribed indemnity bond (where applicable) and supporting documents.' },

    gpf_advance: { label: 'GPF Advance', group: 'service', rule: 'Andhra Pradesh General Provident Fund Rules', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Treasury.',
      hint: 'Applies only if you were recruited before 1.9.2004 (GPF); employees recruited on/after that date are covered by CPS/NPS instead. Reported minimum subscription: 6% of basic pay (fixed on the basic pay drawn on 31 March of the preceding financial year); interest rate is revised periodically by the Finance Department (e.g., 7.1% p.a. was notified for part of FY 2024-25) — confirm the current rate with your DDO/Treasury.',
      extraFields: [{ id: 'svc_t1', label: 'Purpose (education / illness / housing / vehicle / other)', type: 'text' }, { id: 'svc_t2', label: 'Amount Requested (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Application for GPF Advance',
      bodyTemplate: 'I request that a GPF advance of <strong>Rs. ${svc_t2}</strong> be sanctioned for the purpose of <strong>${svc_t1}</strong>. This applies since I was recruited before 1.9.2004.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
    nps_reg: { label: 'CPS / NPS Subscriber Registration', group: 'service', rule: 'Contributory Pension Scheme (CPS) — mandatory for A.P. state employees recruited on/after 1.9.2004', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO.',
      hint: 'Employee contributes 10% of Basic Pay + DA; the reported Government matching contribution is also 10% (this tool could not confirm whether AP has since revised its matching share upward, as the Central Government did to 14% — confirm the current matching rate with your DDO). PRAN is allotted by NSDL via the CPS PRAN Facilitation Centre.',
      extraFields: [{ id: 'svc_date1', label: 'Date of joining service', type: 'date' }, { id: 'svc_t1', label: 'Bank account number &amp; branch (for CPS/NPS)', type: 'text' }, { id: 'svc_t2', label: 'Nominee Name', type: 'text' }, { id: 'svc_t3', label: 'Nominee Relationship', type: 'text' }],
      subject: 'Application for CPS/NPS Subscriber Registration',
      bodyTemplate: 'I request that I be registered as a subscriber under the Contributory Pension Scheme (CPS/NPS), having joined service on <strong>${svc_date1}</strong>. My bank account for this purpose is <strong>${svc_t1}</strong>, and I nominate <strong>${svc_t2}</strong>{{#if svc_t3}} (${svc_t3}){{/if}} as my nominee. My DDO will process this through the CPS PRAN Facilitation Centre for PRAN allotment.' },
    cps_to_ops_option: { label: 'Option — Switch from CPS to Old Pension Scheme (OPS)', group: 'service', rule: 'G.O.Ms.No.53, Finance (HR.III-Pension &amp; GPF) Dept, dt.13.7.2026', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Head of Office.',
      hint: 'A one-time option for employees whose recruitment notification was issued before 1.9.2004 but who actually joined service on/after 1.9.2004 (and are therefore currently under CPS) to switch to the Old Pension Scheme. Reported window: 3 months from the date of the G.O. (i.e., by approximately 13.10.2026), extendable at Government\'s discretion. The option, once exercised, is stated to be final and irrevocable — confirm current deadline status with your DDO before relying on this window.',
      extraFields: [{ id: 'svc_date1', label: 'Date recruitment notification was issued', type: 'date' }, { id: 'svc_date2', label: 'Date of joining service', type: 'date' }],
      subject: 'Option to Switch from CPS to the Old Pension Scheme (OPS)',
      bodyTemplate: 'I exercise my one-time option under G.O.Ms.No.53, Finance (HR.III-Pension &amp; GPF) Dept, dt.13.7.2026, to switch from the Contributory Pension Scheme (CPS) to the Old Pension Scheme (OPS). I confirm that the recruitment notification for my post was issued on <strong>${svc_date1}</strong> (before 1.9.2004), and that I joined service on <strong>${svc_date2}</strong> (on/after 1.9.2004). I understand this option, once exercised, is final and irrevocable.' },
    automatic_advancement: { label: 'Automatic Advancement Scheme — Option', group: 'service', rule: 'G.O.Ms.No.68, Finance (HRM.V-PC) Dept, dt.12.6.2015', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Head of Office.',
      hint: 'AP\'s long-standing substitute for regular promotion where none is available due to non-availability of vacancies — not the same scheme as Central Government\'s MACP, though it serves a similar purpose. Reported periodicity: financial upgradation after 6, 12, 18 and 24 years of continuous service without promotion (revised in 2015 from an earlier 8/16/24-year slab structure).',
      extraFields: [{ id: 'svc_date1', label: 'Date from which upgradation is due/claimed', type: 'date' }, { id: 'svc_t1', label: 'Present grade / pay level', type: 'text' }, { id: 'svc_t2', label: 'Years of continuous service without promotion', type: 'text' }],
      subject: 'Automatic Advancement Scheme — Option',
      bodyTemplate: 'I request consideration for a financial upgradation under the Automatic Advancement Scheme (G.O.Ms.No.68, Finance (HRM.V-PC) Dept, dt.12.6.2015), effective from <strong>${svc_date1}</strong>. I have completed <strong>${svc_t2}</strong> years of continuous service in my present grade/pay level of <strong>${svc_t1}</strong> without promotion.' },

    hba: { label: 'House Building Advance', group: 'advance', rule: 'A.P. Financial Code / G.O.Ms.No.174, Fin (A&amp;L) Dept (current ceiling not independently verified)', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your Head of Department.',
      hint: 'Reported eligibility: permanent employee with 8 years\' regular service. Reported interest rate: 5% p.a. (Class IV employees), 5.5% p.a. (all other employees), repayable in 300 monthly instalments (240 for principal, 60 for interest). The current rupee ceiling could not be verified this session — confirm with your DDO/Finance Department before finalising your application.',
      extraFields: [{ id: 'svc_t1', label: 'Purpose (construction / purchase / extension / repair / site + house)', type: 'text' }, { id: 'svc_t2', label: 'Estimated Cost (₹)', type: 'text' }, { id: 'svc_t3', label: 'Advance Amount Required (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Property / site details', type: 'textarea', full: true }],
      subject: 'Application for House Building Advance',
      bodyTemplate: 'I request that a House Building Advance be sanctioned to me for the purpose of <strong>${svc_t1}</strong>. The estimated cost is <strong>Rs. ${svc_t2}</strong>, and the advance amount required is <strong>Rs. ${svc_t3}</strong>.{{#if svc_ta1}} Property/site details: ${svc_ta1}.{{/if}} I have confirmed the currently applicable ceiling and interest rate with my DDO.' },
    motor_vehicle_advance: { label: 'Motor Cycle / Motor Car Advance', group: 'advance', rule: 'A.P. Financial Code (specific governing G.O. and current ceiling not independently verified)', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your Head of Department.',
      hint: 'Existence of this scheme, alongside HBA, is well-corroborated, but the current rupee ceiling and interest rate could not be verified this session — confirm with your DDO before finalising your application.',
      extraFields: [{ id: 'svc_t1', label: 'Type of Vehicle', type: 'text' }, { id: 'svc_t2', label: 'Estimated Cost (₹)', type: 'text' }, { id: 'svc_t3', label: 'Advance Amount Required (₹)', type: 'text' }],
      subject: 'Application for Motor Vehicle Advance',
      bodyTemplate: 'I request that a Motor Vehicle Advance be sanctioned to me for the purchase of <strong>${svc_t1}</strong>. The estimated cost is <strong>Rs. ${svc_t2}</strong>, and the advance amount required is <strong>Rs. ${svc_t3}</strong>.' },
    festival_advance: { label: 'Festival Advance', group: 'advance', rule: 'G.O.Ms.No.167, dt.20.9.2017 (Tenth PRC) — figure possibly superseded, see hint', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO.',
      hint: 'Conflicting figures found this session: G.O.Ms.No.167, dt.20.9.2017 gives Rs. 7,500 (Class IV employees: Rs. 5,000), interest-free, recoverable in 10 equal instalments. A separately-referenced item pointed to a later enhancement to Rs. 20,000 (possibly G.O.Rt.No.2115, dt.6.12.2024), but that G.O.\'s text could not be read this session to confirm the figure and that it applies to this specific scheme. Confirm the current ceiling with your DDO before applying.',
      extraFields: [{ id: 'svc_t1', label: 'Amount Requested (₹)', type: 'text' }],
      subject: 'Application for Festival Advance',
      bodyTemplate: 'I request that a Festival Advance of <strong>Rs. ${svc_t1}</strong> be sanctioned to me, recoverable in equal monthly instalments as prescribed under the current Government Order. I have confirmed the currently applicable ceiling with my DDO.' },

    family_pension: { label: 'Family Pension — Claim / Intimation', group: 'estate', rule: 'Rule 50, Andhra Pradesh Revised Pension Rules, 1980', family: 'letter', noRemarksBlock: true,
      extraFields: [{ id: 'svc_date1', label: 'Date of Death', type: 'date' }, { id: 'svc_t2', label: 'Claimant\'s Relationship to the Deceased', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Family Pension — Claim / Intimation',
      bodyTemplate: 'I write to intimate the death of the above-named Government servant on <strong>${svc_date1}</strong>, and to request that Family Pension, as admissible under Rule 50, Andhra Pradesh Revised Pension Rules, 1980, be sanctioned in favour of the eligible member(s) of the family.{{#if svc_t2}} Claimed relationship to the deceased: ${svc_t2}.{{/if}}{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
    deceased_dues_indemnity: { label: "Indemnity Bond — Deceased Employee's Dues", group: 'estate', rule: 'Andhra Pradesh Financial Code (specific article/form number not independently confirmed this session)', family: 'letter', noRemarksBlock: true,
      hint: 'This tool could not confirm the specific A.P. Financial Code article/form number for an indemnity bond covering a deceased employee\'s pay/leave-salary dues this session (as distinct from APGLI\'s own, separately-confirmed claim indemnity form, used under the APGLI claim type). Confirm the current form and any surety requirement with your Treasury Officer/DDO before executing this bond.',
      extraFields: [{ id: 'svc_date1', label: 'Date of death of employee', type: 'date' }, { id: 'svc_t1', label: 'Name of Claimant(s)', type: 'text' }, { id: 'svc_t2', label: 'Relationship of Claimant(s) to Deceased', type: 'text' }, { id: 'svc_t3', label: 'Amount Claimed (₹)', type: 'text' }, { id: 'svc_ta1', label: "Claimant's address / surety details, if required", type: 'textarea', full: true }],
      subject: "Indemnity — Claim for Deceased Employee's Dues",
      bodyTemplate: 'I/We, <strong>${svc_t1}</strong>, ${svc_t2} of the deceased <strong>${name}</strong>, request payment of the pay, leave salary and other emoluments due, amounting to <strong>Rs. ${svc_t3}</strong>, in respect of death on <strong>${svc_date1}</strong>, and undertake to furnish an indemnity bond (with sureties, if required) in the form prescribed under the Andhra Pradesh Financial Code.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
  },
};
