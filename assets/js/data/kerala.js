/* =============================================================================
   KERALA — data for state-tool-engine.js. No logic here except the small
   set of `bespoke` render functions this state's types need (Transfer of
   Charge party-resolution, the LWA proforma bundle, and Special Casual
   Leave's regex-driven medical note) — everything else is declarative.
   ============================================================================= */
window.STATE_DATA = window.STATE_DATA || {};
window.STATE_DATA.kerala = {
  key: 'kerala', name: 'Kerala',
  heroTitle: 'Kerala — KSR &amp; Service Forms',
  heroMeta: 'leave, insurance, advances &amp; estate claims',
  idFieldLabel: 'PEN',
  coverLetter: true,
  defaultCoverAttachmentsText: 'I have attached the statutory Form No. 13 (Rule 113, Part I, K.S.R.) along with this letter.',
  leaveFormFooterHtml: '15. (a) I undertake to refund the difference between the leave salary drawn during commuted leave and that admissible during half pay leave which would not have been admissible in the event of my retirement from service at the end of or during the currency of leave.<br><br>(b) I undertake to refund the leave salary drawn during leave not due which would not have been admissible had rule 85, Part I KSR, not been applied in the event of my voluntary retirement or resignation from service at any time until I earn half pay leave not less than the amount of leave not due availed of by me.',

  groupOrder: [
    { slot: 'general', name: 'General Leave (Form 13)' },
    { slot: 'lwa', name: 'Leave Without Allowance (LWA)' },
    { slot: 'family', name: 'Family & Medical Leave' },
    { slot: 'casual', name: 'Casual & Special Leave' },
    { slot: 'insurance', name: 'Insurance & Accident Benefits' },
    { slot: 'service', name: 'Service & Establishment Matters' },
    { slot: 'advance', name: 'Advances & Loans' },
    { slot: 'estate', name: 'Estate / Death Benefit Claims' },
  ],

  profileFields: [
    { id: 'name', label: 'Full Name', type: 'text', required: true },
    { id: 'pen', label: 'PEN Number', type: 'text', required: true },
    { id: 'designation', label: 'Designation', type: 'text', required: true },
    { id: 'emp_type', label: 'Employment Type', type: 'select', required: true, options: [{ value: 'Regular / Substantive', label: 'Regular / Substantive' }, { value: 'Officiating', label: 'Officiating' }] },
    { id: 'office', label: 'Current Office, Department &amp; Section', type: 'text', required: true, full: true, placeholder: 'e.g., District Treasury, Kozhikode' },
    { id: 'dob', label: 'Date of Birth', type: 'date', required: true },
    { id: 'entry', label: 'Date of Entry into Service', type: 'date', required: true },
    { id: 'pay', label: 'Pay &amp; Scale of Pay', type: 'text', required: true, placeholder: 'e.g., Rs 39300-83000, Level 8' },
    { id: 'probation', label: 'Probation / Confirmation Status (Post &amp; Date)', type: 'text', placeholder: 'Optional' },
  ],
  formExtraFields: [
    { id: 'holidays', label: 'Sundays/Holidays Prefixed/Suffixed', type: 'text', placeholder: 'e.g., Nil' },
    { id: 'allowances', label: 'Allowances in Present Post', type: 'text', placeholder: 'e.g., HRA Rs 1824' },
    { id: 'last_leave', label: 'Date of return from last leave', type: 'text', placeholder: 'e.g., 05/01/2026 (EL) or NA' },
  ],
  formRows: [
    { label: '1. Name of applicant (PEN)', template: '${name} (PEN: ${pen})' },
    { label: '2. Date of Birth', field: 'dob' },
    { label: '3. Post held', field: 'designation' },
    { label: '4. Department, Office and Section', field: 'office' },
    { label: '5. Pay and scale of Pay', field: 'pay' },
    { label: '6. Date of entry in service', field: 'entry' },
    { label: '7. Date of commencement of continuous service', field: 'entry' },
    { label: '8. Confirmation in any post (Date &amp; Post)', field: 'probation' },
    { label: '9. Address during the leave', field: 'address' },
    { label: '10. Allowances drawn in present post', field: 'allowances' },
    { label: '11. Nature and period of leave applied for', template: '${nature} for ${duration_str}<br>from ${start} to ${end}' },
    { label: '12. Sundays and holidays prefixed/suffixed', field: 'holidays' },
    { label: '13. Ground on which leave is applied for', field: 'reason' },
    { label: '14. Date of return from last leave', field: 'last_leave' },
  ],

  types: {
    el: { label: 'Earned Leave', group: 'general', rule: 'Rule 78, Part I, K.S.R.', family: 'leave', nature: 'Earned Leave', formHeading: 'FORM No. 13', defaultReason: 'Private affairs' },
    hpl: { label: 'Half Pay Leave', group: 'general', rule: 'Rule 83, Part I, K.S.R.', family: 'leave', nature: 'Half Pay Leave', formHeading: 'FORM No. 13', defaultReason: 'Private affairs' },
    commuted: { label: 'Commuted Leave', group: 'general', rule: 'Rule 84, Part I, K.S.R.', family: 'leave', nature: 'Commuted Leave (in lieu of Half Pay Leave)', formHeading: 'FORM No. 13', defaultReason: 'Medical treatment (Medical Certificate enclosed)' },
    leavenotdue: { label: 'Leave Not Due', group: 'general', rule: 'Rule 85, Part I, K.S.R.', family: 'leave', nature: 'Leave Not Due', formHeading: 'FORM No. 13', defaultReason: 'Medical treatment (Medical Certificate enclosed)' },

    lwa_abroad: { label: 'LWA — Employment Abroad', group: 'lwa', rule: 'Rule 88 & Appendix XII-A, Part I, K.S.R.', family: 'bespoke', needsRouting: true, renderFn: 'lwaBundle', nature: 'Leave Without Allowance (LWA)', hint: 'capped at 5 years across the entire service, subject to eligibility.', defaultReason: 'For taking up employment abroad', extraFields: [{ id: 'lwa_country', label: 'Country of Employment', type: 'text', placeholder: 'Optional, but recommended' }, { id: 'lwa_employer', label: 'Details of Foreign Employer (Name &amp; Address)', type: 'text', full: true, placeholder: 'Optional, but recommended' }] },
    lwa_india: { label: 'LWA — Employment within India', group: 'lwa', rule: 'Rule 88 & Appendix XII-A, Part I, K.S.R.', family: 'bespoke', needsRouting: true, renderFn: 'lwaBundle', nature: 'Leave Without Allowance (LWA)', hint: 'capped at 5 years across the entire service, subject to eligibility.', defaultReason: 'For taking up employment within India', extraFields: [{ id: 'lwa_country', label: 'Place of Employment in India', type: 'text', placeholder: 'Optional, but recommended' }, { id: 'lwa_employer', label: 'Details of Employer (Name &amp; Address)', type: 'text', full: true, placeholder: 'Optional, but recommended' }] },
    lwa_study: { label: 'LWA — Higher Studies', group: 'lwa', rule: 'Rule 88 & Appendix XII-B, Part I, K.S.R.', family: 'bespoke', needsRouting: true, renderFn: 'lwaBundle', nature: 'Leave Without Allowance (LWA)', hint: 'capped at 5 years across the entire service, subject to eligibility.', defaultReason: 'For pursuing higher studies', extraFields: [{ id: 'lwa_country', label: 'Institution &amp; Course of Study', type: 'text', placeholder: 'Optional, but recommended' }, { id: 'lwa_employer', label: 'Expected Duration of Course', type: 'text', full: true, placeholder: 'Optional, but recommended' }] },
    lwa_spouse: { label: 'LWA — Joining Spouse', group: 'lwa', rule: 'Rule 88 & Appendix XII-C, Part I, K.S.R.', family: 'bespoke', needsRouting: true, renderFn: 'lwaBundle', nature: 'Leave Without Allowance (LWA)', hint: 'capped at 5 years across the entire service, subject to eligibility.', defaultReason: 'For joining spouse', extraFields: [{ id: 'lwa_country', label: 'Name &amp; Designation of Spouse', type: 'text', placeholder: 'Optional, but recommended' }, { id: 'lwa_employer', label: "Spouse's Office / Department &amp; Place of Posting", type: 'text', full: true, placeholder: 'Optional, but recommended' }] },

    maternity: { label: 'Maternity Leave', group: 'family', rule: 'Rule 100, Part I, K.S.R.', family: 'leave', nature: 'Maternity Leave', formHeading: 'FORM No. 13', defaultReason: 'Confinement for childbirth', declarationSeparatePage: true, extraFields: [{ id: 'fam_date', label: 'Expected / Actual Date of Delivery', type: 'date' }, { id: 'fam_info1', label: 'Hospital / Medical Officer', type: 'text', placeholder: 'Optional' }],
      declarationTemplate: 'I, <strong>${name}</strong>, working as <strong>${designation}</strong> at <strong>${office}</strong>, declare that I am / was expecting confinement for childbirth on or around <strong>${fam_date}</strong>{{#if fam_info1}}, and that I am under the medical care of <strong>${fam_info1}</strong>{{/if}}. A medical certificate in support of this application, as required under Rule 100, Part I, K.S.R., is enclosed.' },
    miscarriage: { label: 'Miscarriage / Abortion Leave', group: 'family', rule: 'Rule 101, Part I, K.S.R.', family: 'leave', nature: 'Leave for Miscarriage / Abortion', formHeading: 'FORM No. 13', defaultReason: 'Miscarriage / Abortion', declarationSeparatePage: true, extraFields: [{ id: 'fam_date', label: 'Date of Miscarriage', type: 'date' }, { id: 'fam_info1', label: 'Hospital / Medical Officer', type: 'text', placeholder: 'Optional' }],
      declarationTemplate: 'I, <strong>${name}</strong>, working as <strong>${designation}</strong> at <strong>${office}</strong>, declare that I underwent a miscarriage / abortion on <strong>${fam_date}</strong>{{#if fam_info1}}, under the care of <strong>${fam_info1}</strong>{{/if}}. This application does not exceed the six-week limit prescribed under Rule 101, Part I, K.S.R. A medical certificate from the attending medical practitioner is enclosed.' },
    hysterectomy: { label: 'Hysterectomy Leave', group: 'family', rule: 'Rule 101-A, Part I, K.S.R.', family: 'leave', nature: 'Hysterectomy Leave', formHeading: 'FORM No. 13', defaultReason: 'Hysterectomy', declarationSeparatePage: true, extraFields: [{ id: 'fam_date', label: 'Date of Surgery', type: 'date' }, { id: 'fam_info1', label: 'Hospital / Medical Officer', type: 'text', placeholder: 'Optional' }],
      declarationTemplate: 'I, <strong>${name}</strong>, working as <strong>${designation}</strong> at <strong>${office}</strong>, declare that I underwent a hysterectomy on <strong>${fam_date}</strong>{{#if fam_info1}}, at / under <strong>${fam_info1}</strong>{{/if}}. This application does not exceed the 45-day limit prescribed under Rule 101-A, Part I, K.S.R. A medical certificate from the attending medical practitioner is enclosed.' },
    paternity: { label: 'Paternity Leave', group: 'family', rule: 'Rule 102-B, Part I, K.S.R.', family: 'leave', nature: 'Paternity Leave', formHeading: 'FORM No. 13', defaultReason: 'Delivery of child by spouse', declarationSeparatePage: true, extraFields: [{ id: 'fam_date', label: 'Date of Delivery of Wife', type: 'date' }, { id: 'fam_info1', label: 'Name of Spouse', type: 'text', placeholder: 'Optional' }, { id: 'fam_info2', label: "This Child's Number (e.g., 1st / 2nd)", type: 'text', placeholder: 'Optional' }],
      declarationTemplate: 'I, <strong>${name}</strong>, working as <strong>${designation}</strong> at <strong>${office}</strong>, declare that my wife{{#if fam_info1}}, <strong>${fam_info1}</strong>,{{/if}} delivered / is expected to deliver our <strong>${fam_info2}</strong> child on or around <strong>${fam_date}</strong>. This application falls within the window of 10 days before, or 3 months from, the date of delivery permitted under Rule 102-B, Part I, K.S.R., and I have not exhausted the two occasions of Paternity Leave admissible to me. A medical certificate stating the date of delivery is enclosed.' },
    adoption: { label: 'Child Adoption Leave', group: 'family', rule: 'Part I, K.S.R. (Child Adoption Leave provisions — confirm current rule number with your DDO)', family: 'leave', nature: 'Child Adoption Leave', formHeading: 'FORM No. 13', defaultReason: 'Legal adoption of a child', declarationSeparatePage: true, extraFields: [{ id: 'fam_date', label: 'Date of Adoption', type: 'date' }, { id: 'fam_info1', label: 'Adoption Agency / Authority', type: 'text', placeholder: 'Optional' }, { id: 'fam_info2', label: 'Age of Child at Adoption', type: 'text', placeholder: 'Optional' }],
      declarationTemplate: 'I, <strong>${name}</strong>, working as <strong>${designation}</strong> at <strong>${office}</strong>, declare that I have legally adopted a child, aged <strong>${fam_info2}</strong> at the time of adoption, through <strong>${fam_info1}</strong>, on <strong>${fam_date}</strong>. The adoption deed / certificate in support of this application is enclosed.' },
    hospital: { label: 'Hospital Leave', group: 'family', rule: 'Rule 103, Part I, K.S.R.', family: 'leave', nature: 'Hospital Leave', formHeading: 'FORM No. 13', defaultReason: 'Injury sustained in the course of official duty', declarationSeparatePage: true, extraFields: [{ id: 'fam_date', label: 'Date of Accident / Injury', type: 'date' }, { id: 'fam_info1', label: 'Place of Accident / Injury', type: 'text', placeholder: 'Optional' }, { id: 'fam_info2', label: 'Circumstances (how the injury arose in the course of official duty)', type: 'textarea', full: true, placeholder: 'Optional' }],
      declarationTemplate: 'I, <strong>${name}</strong>, working as <strong>${designation}</strong> at <strong>${office}</strong>, declare that I sustained an injury on <strong>${fam_date}</strong> at <strong>${fam_info1}</strong>, in the course of and in consequence of the due performance of my official duties, under the following circumstances:</div><div class="mb-4 text-justify" style="border:1px solid #999; padding: 10px 14px; min-height: 40px;">${fam_info2}</div><div class="mb-4 text-justify">A medical certificate from the treating medical officer, as required under Rule 103, Part I, K.S.R., is enclosed.' },

    cl: { label: 'Casual Leave', group: 'casual', rule: 'Appendix VII, Part I, K.S.R.', family: 'letter', needsRouting: true, nature: 'Casual Leave', subject: 'Application for Casual Leave', defaultReason: 'Personal / domestic affairs',
      bodyTemplate: 'I request you to kindly grant me Casual Leave for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, on account of <strong>${reason}</strong>.</div><div class="mb-4 text-justify">I have not availed of Casual Leave / Special Casual Leave in excess of my entitlement during this calendar year, to the best of my knowledge.' },
    scl: { label: 'Special Casual Leave', group: 'casual', rule: 'Appendix VII, Section II, Part I, K.S.R.', family: 'bespoke', needsRouting: true, renderFn: 'sclBody', nature: 'Special Casual Leave', defaultReason: '', extraFields: [{ id: 'scl_reason', label: 'Recognised Reason', type: 'select', full: true, options: [
      { value: 'Voluntary Blood / Blood-Component Donation', label: 'Voluntary Blood / Blood-Component Donation — up to 4 days in a calendar year' },
      { value: 'Voluntary Kidney / Organ Donation', label: 'Voluntary Kidney / Organ Donation — up to 45 days' },
      { value: 'Angioplasty (Self)', label: 'Angioplasty (Self) — up to 30 days' },
      { value: 'Chemotherapy / Radiation Therapy / Heart Surgery / Organ or Kidney Transplant (Self)', label: 'Chemotherapy / Radiation / Heart Surgery / Transplant (Self) — per medical certificate' },
      { value: 'Pacemaker Implantation (Self)', label: 'Pacemaker Implantation (Self) — up to 21 days in a calendar year' },
      { value: 'Sterilisation — Tubectomy (Self)', label: 'Sterilisation — Tubectomy (Self) — up to 14 days' },
      { value: 'Sterilisation — Vasectomy (Self)', label: 'Sterilisation — Vasectomy (Self) — up to 6 working days' },
      { value: "Spouse's Tubectomy", label: "Spouse's Tubectomy — up to 7 days" },
      { value: 'Illness Connected with Disability', label: 'Illness Connected with Disability — up to 15 days in a calendar year' },
      { value: 'Artificial Limb Fitting / Replacement', label: 'Artificial Limb Fitting / Replacement — up to 15 days at a time' },
      { value: 'Infectious Disease in Residence', label: 'Infectious Disease in Residence — up to 21 days' },
      { value: 'Parent of a Physically / Mentally Challenged Child', label: 'Parent of a Physically / Mentally Challenged Child — per applicable G.O.' },
      { value: 'Attending Court (Witness / Juror / Party in a Case)', label: 'Attending Court (Witness / Juror / Party) — as permitted by sanctioning authority' },
      { value: 'Representing State / Country in Sports or Cultural Events', label: 'Representing State / Country in Sports or Cultural Events — as permitted' },
      { value: 'Other (please specify in the reason field below)', label: 'Other (please specify in the reason field below)' },
    ] }] },
    compensation: { label: 'Compensation Leave', group: 'casual', rule: 'Appendix VII, Section III, Part I, K.S.R.', family: 'letter', needsRouting: true, nature: 'Compensation Leave', subject: 'Application for Compensation Leave', defaultReason: 'Compensation for duty performed on a holiday / beyond office hours', extraFields: [{ id: 'comp_dates', label: 'Date(s) of Duty Performed on Holiday / Beyond Office Hours', type: 'text', full: true, placeholder: 'e.g., 12/07/2026 and 19/07/2026' }, { id: 'comp_days', label: 'Compensation Leave Days Claimed', type: 'number', placeholder: 'e.g., 2', help: 'Max 15 days in a calendar year; max 10 days accumulated at a time (Appendix VII, Section III).' }],
      bodyTemplate: 'I request you to kindly grant me Compensation Leave of <strong>${comp_days} day(s)</strong> under Appendix VII, Section III, Part I, K.S.R., in lieu of duty performed by me on the holiday(s) / beyond office hours on <strong>${comp_dates}</strong>. I have not availed of any other compensatory arrangement in respect of this duty.' },

    sli_proposal: { label: 'SLI — New Policy Proposal', group: 'insurance', rule: 'Kerala State Insurance Department', family: 'letter', subject: 'Proposal for State Life Insurance Policy', noControllingRemarks: true, controllingHint: 'Typically your District Insurance Officer.', extraFields: [{ id: 'svc_t1', label: 'Sum Assured Proposed (₹)', type: 'text' }, { id: 'svc_t2', label: 'Nominee Name', type: 'text' }, { id: 'svc_t3', label: 'Nominee Relationship', type: 'text' }, { id: 'svc_ta1', label: 'Existing SLI policy numbers, if any', type: 'textarea', full: true }],
      bodyTemplate: 'I request that I may be enrolled as a policyholder under the State Life Insurance Scheme, with a Sum Assured of <strong>${svc_t1}</strong>. I nominate <strong>${svc_t2}</strong>{{#if svc_t3}} (${svc_t3}){{/if}} to receive the benefits under this policy in the event of my death.{{#if svc_ta1}} I already hold the following SLI polic(y/ies): ${svc_ta1}.{{/if}} I enclose the proposal form and the first premium receipt/challan.' },
    sli_nomination: { label: 'SLI — Change of Nomination', group: 'insurance', rule: 'Kerala State Insurance Department', family: 'letter', subject: 'Application for Change of Nomination — SLI', noControllingRemarks: true, controllingHint: 'Typically your District Insurance Officer.', extraFields: [{ id: 'svc_t1', label: 'Policy Number', type: 'text' }, { id: 'svc_t2', label: 'New Nominee Name', type: 'text' }, { id: 'svc_t3', label: 'New Nominee Relationship &amp; Share', type: 'text' }, { id: 'svc_ta1', label: 'Reason for change', type: 'textarea', full: true }],
      bodyTemplate: 'I request that my nomination under SLI Policy No. <strong>${svc_t1}</strong> be changed. My new nominee is <strong>${svc_t2}</strong>{{#if svc_t3}}, ${svc_t3}{{/if}}.{{#if svc_ta1}} Reason for this change: ${svc_ta1}.{{/if}}' },
    sli_loan: { label: 'SLI — Loan Against Policy', group: 'insurance', rule: 'Kerala State Insurance Department', family: 'letter', subject: 'Application for Loan Against SLI Policy', noControllingRemarks: true, controllingHint: 'Typically your District Insurance Officer.', extraFields: [{ id: 'svc_t1', label: 'Policy Number', type: 'text' }, { id: 'svc_t2', label: 'Loan Amount Required (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Purpose of loan', type: 'textarea', full: true }],
      bodyTemplate: 'I request that a loan of <strong>Rs. ${svc_t2}</strong> be sanctioned against my SLI Policy No. <strong>${svc_t1}</strong>, for the purpose of ${svc_ta1}.' },
    sli_claim: { label: 'SLI — Claim (Maturity / Death)', group: 'insurance', rule: 'Kerala State Insurance Department', family: 'letter', subject: 'Claim Application — SLI Policy', noControllingRemarks: true, controllingHint: 'Typically your District Insurance Officer.', extraFields: [{ id: 'svc_date1', label: 'Date of Maturity / Date of Death', type: 'date' }, { id: 'svc_t1', label: 'Policy Number', type: 'text' }, { id: 'svc_t2', label: 'Claim Amount (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      bodyTemplate: 'I submit this claim in respect of SLI Policy No. <strong>${svc_t1}</strong>, on account of the event dated <strong>${svc_date1}</strong>, for an amount of <strong>Rs. ${svc_t2}</strong>.{{#if svc_ta1}} Additional details: ${svc_ta1}.{{/if}} I enclose the policy document and supporting documents.' },
    jr_nomination: { label: 'Jeevan Raksha (GPAIS) — Nomination', group: 'insurance', rule: 'Kerala State Insurance Department (formerly GPAIS)', family: 'letter', subject: 'Nomination — Jeevan Raksha (GPAIS)', noControllingRemarks: true, controllingHint: 'Typically your District Insurance Officer / Head of Office.', extraFields: [{ id: 'svc_t1', label: 'Nominee Name', type: 'text' }, { id: 'svc_t2', label: 'Nominee Relationship', type: 'text' }, { id: 'svc_t3', label: 'Share, if more than one nominee', type: 'text' }, { id: 'svc_ta1', label: 'Additional nominees / remarks', type: 'textarea', full: true }],
      bodyTemplate: 'Consequent to the revision of the Group Personal Accident Insurance Scheme as "Jeevan Raksha", I submit my nomination as follows: <strong>${svc_t1}</strong>, ${svc_t2}.{{#if svc_t3}} Share: ${svc_t3}.{{/if}}{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
    jr_claim: { label: 'Jeevan Raksha (GPAIS) — Claim', group: 'insurance', rule: 'Kerala State Insurance Department (formerly GPAIS)', family: 'letter', subject: 'Claim Application — Jeevan Raksha (GPAIS)', noControllingRemarks: true, controllingHint: 'Typically your District Insurance Officer / Head of Office.', extraFields: [{ id: 'svc_date1', label: 'Date of Death / Accident', type: 'date' }, { id: 'svc_t1', label: 'Cause (Natural Death / Accident)', type: 'text' }, { id: 'svc_t2', label: 'Claim Amount (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Circumstances / additional details', type: 'textarea', full: true }],
      bodyTemplate: 'I submit this claim under the Jeevan Raksha (Group Personal Accident Insurance) Scheme, on account of <strong>${svc_t1}</strong> dated <strong>${svc_date1}</strong>, for an amount of <strong>Rs. ${svc_t2}</strong>.{{#if svc_ta1}} Circumstances: ${svc_ta1}.{{/if}}' },
    fbs_closure: { label: 'Family Benefit Scheme — Closure / Claim', group: 'insurance', rule: 'Family Benefit Scheme (FBS)', family: 'letter', subject: 'Closure / Claim Application — Family Benefit Scheme', noControllingRemarks: true, controllingHint: 'Typically your Head of Office / DDO.', extraFields: [{ id: 'svc_date1', label: 'Date of Death', type: 'date' }, { id: 'svc_t1', label: 'FBS Account Number', type: 'text' }, { id: 'svc_t2', label: 'Name of Claimant', type: 'text' }, { id: 'svc_t3', label: 'Relationship of Claimant to Deceased', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      bodyTemplate: 'I, <strong>${svc_t2}</strong>, submit this application for closure/claim under the Family Benefit Scheme, FBS Account No. <strong>${svc_t1}</strong>, on account of the death of the subscriber on <strong>${svc_date1}</strong>. I am the <strong>${svc_t3}</strong> of the deceased.{{#if svc_ta1}} Additional details: ${svc_ta1}.{{/if}}' },

    toc: { label: 'Transfer of Charge Report', group: 'service', rule: 'Article 81(a), Chapter IV, K.F.C. (Form 7 &amp; Form 8/8A)', family: 'bespoke', renderFn: 'tocBundle', controllingHint: 'Typically the next superior officer, for countersignature.', extraFields: [
      { id: 'toc_role', label: 'Your Role in This Handover', type: 'select', full: true, options: [{ value: 'relieving', label: 'I am the Relieving Officer (taking over)' }, { value: 'relieved', label: 'I am the Relieved Officer (handing over)' }] },
      { id: 'toc_other_name', label: 'Name of the Other Officer', type: 'text' },
      { id: 'toc_other_designation', label: 'Designation of the Other Officer', type: 'text' },
      { id: 'toc_datetime', label: 'Date &amp; Time of Handover', type: 'text', placeholder: 'e.g., 25/07/2026, 10:30 AM' },
      { id: 'toc_advance', label: 'Permanent Advance (₹) &amp; Stock Particulars Handed Over', type: 'text', placeholder: 'e.g., Rs 500; 12 registers, 1 almirah' },
      { id: 'toc_remarks', label: 'Additional Remarks', type: 'textarea', full: true },
    ] },
    probation: { label: 'Probation Declaration', group: 'service', rule: 'Kerala Service Rules / Special Rules', family: 'letter', subject: 'Declaration of Probation', noControllingRemarks: true, controllingHint: 'Typically your Head of Department.', extraFields: [{ id: 'svc_date1', label: 'Date of commencement of probation', type: 'date' }, { id: 'svc_t1', label: 'Post in which probation is declared', type: 'text' }, { id: 'svc_t2', label: 'Period of interruption, if any', type: 'text' }, { id: 'svc_t3', label: 'Date of completion of probation', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      bodyTemplate: 'I declare that I have satisfactorily completed my period of probation in the post of <strong>${svc_t1}</strong>, commencing from <strong>${svc_date1}</strong>{{#if svc_t3}} and completed on ${svc_t3}{{/if}}.{{#if svc_t2}} Period of interruption, if any: ${svc_t2}.{{/if}} I request that my probation in this post be declared as satisfactorily completed.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
    pay_option: { label: 'Pay Revision / Higher Grade Option', group: 'service', rule: 'Pay Revision Rules / Time Bound Higher Grade Scheme', family: 'letter', subject: 'Option for Pay Revision / Higher Grade', noControllingRemarks: true, controllingHint: 'Typically your DDO / Head of Office.', extraFields: [{ id: 'svc_date1', label: 'Date from which option is exercised', type: 'date' }, { id: 'svc_t1', label: 'Occasion (Pay Revision / Higher Grade / Promotion)', type: 'text' }, { id: 'svc_t2', label: 'Present pay &amp; scale', type: 'text' }, { id: 'svc_t3', label: 'Revised pay &amp; scale', type: 'text' }, { id: 'svc_ta1', label: 'Reason / remarks', type: 'textarea', full: true }],
      bodyTemplate: 'I hereby exercise my option to have the benefit of <strong>${svc_t1}</strong> take effect from <strong>${svc_date1}</strong>. My present pay and scale is <strong>${svc_t2}</strong>{{#if svc_t3}}, and the revised pay and scale would be ${svc_t3}{{/if}}.{{#if svc_ta1}} Reason/remarks: ${svc_ta1}.{{/if}} I understand that this option, once exercised, is final and binding.' },
    nps_reg: { label: 'NPS Subscriber Registration', group: 'service', rule: 'National Pension System (for those who joined on/after 01.04.2013)', family: 'letter', subject: 'Application for NPS Subscriber Registration', noControllingRemarks: true, controllingHint: 'Typically your DDO.', extraFields: [{ id: 'svc_date1', label: 'Date of joining service', type: 'date' }, { id: 'svc_t1', label: 'Bank account number &amp; branch (for NPS)', type: 'text' }, { id: 'svc_t2', label: 'Nominee Name', type: 'text' }, { id: 'svc_t3', label: 'Nominee Relationship', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      bodyTemplate: 'I request that I be registered as a subscriber under the National Pension System (NPS), having joined service on <strong>${svc_date1}</strong>. My bank account for NPS purposes is <strong>${svc_t1}</strong>, and I nominate <strong>${svc_t2}</strong>{{#if svc_t3}} (${svc_t3}){{/if}} as my nominee.{{#if svc_ta1}} ${svc_ta1}{{/if}} I enclose the duly filled subscriber registration form for certification and forwarding.' },

    hba: { label: 'House Building Advance (HBA) Application', group: 'advance', rule: 'Kerala Financial Code, Form No. 29', family: 'letter', subject: 'Application for House Building Advance', noControllingRemarks: true, controllingHint: 'Typically your Head of Department / Finance (HBA) Department.', extraFields: [{ id: 'svc_t1', label: 'Purpose (construction / purchase / extension / repair / site + house)', type: 'text' }, { id: 'svc_t2', label: 'Estimated Cost (₹)', type: 'text' }, { id: 'svc_t3', label: 'Advance Amount Required (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Property / site details', type: 'textarea', full: true }],
      bodyTemplate: 'I request that a House Building Advance be sanctioned to me for the purpose of <strong>${svc_t1}</strong>. The estimated cost is <strong>Rs. ${svc_t2}</strong>, and the advance amount required is <strong>Rs. ${svc_t3}</strong>.{{#if svc_ta1}} Property/site details: ${svc_ta1}.{{/if}} I enclose the documents required under the House Building Advance rules.' },
    mva: { label: 'Motor Vehicle Advance Application', group: 'advance', rule: 'Kerala Financial Code (Motor Vehicle Advance scheme)', family: 'letter', subject: 'Application for Motor Vehicle Advance', noControllingRemarks: true, controllingHint: 'Typically your Head of Department.', extraFields: [{ id: 'svc_t1', label: 'Type of Vehicle (cycle / two-wheeler / car; conventional or electric)', type: 'text' }, { id: 'svc_t2', label: 'Estimated Cost (₹)', type: 'text' }, { id: 'svc_t3', label: 'Advance Amount Required (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      bodyTemplate: 'I request that a Motor Vehicle Advance be sanctioned to me for the purchase of <strong>${svc_t1}</strong>. The estimated cost is <strong>Rs. ${svc_t2}</strong>, and the advance amount required is <strong>Rs. ${svc_t3}</strong>.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },

    indemnity: { label: "Indemnity Bond — Deceased Employee's Dues", group: 'estate', rule: 'Kerala Financial Code, Form No. 9', family: 'bespoke', renderFn: 'indemnityBond', controllingHint: 'Typically the Treasury Officer / DDO.', extraFields: [
      { id: 'svc_date1', label: 'Date of death of employee', type: 'date' },
      { id: 'svc_t1', label: 'Name of Claimant(s)', type: 'text' },
      { id: 'svc_t2', label: 'Relationship of Claimant(s) to Deceased', type: 'text' },
      { id: 'svc_t3', label: 'Amount Claimed (₹)', type: 'text' },
      { id: 'svc_ta1', label: "Claimant's address / surety details, if required", type: 'textarea', full: true },
    ] },
  },
};

/* ---- bespoke render functions (see state-tool-engine.js's 'bespoke'
   primitive) — the handful of Kerala types that are genuine multi-page
   bundles or need cross-field logic beyond template interpolation. --------- */
window.STATE_RENDER_FNS = window.STATE_RENDER_FNS || {};
window.STATE_RENDER_FNS.kerala = {
  sclBody: function (ctx) {
    const medicalNote = /kidney|organ|angioplasty|chemotherapy|radiation|heart surgery|transplant|pacemaker|sterilisation|tubectomy|vasectomy/i.test(ctx.reason || '')
      ? ' A medical certificate from the authorised Medical Officer is enclosed.' : '';
    const body = `
      <div class="text-right mb-4">Place: ${ctx.place || ''}<br>Date: ${ctx.app_date || ''}</div>
      <div class="mb-4">From<br><br><strong>${ctx.name || ''}</strong> (PEN: ${ctx.pen || 'N/A'})<br>${ctx.designation || ''}<br>${ctx.office || ''}</div>
      <div class="mb-4">To<br><br><strong>${ctx.controlling || ''}</strong><br>${ctx.office || ''}</div>
      <div class="mb-4">Respected Sir/Madam,</div>
      <div class="mb-4" style="padding-left:40px;"><strong>Sub:</strong> Application for Special Casual Leave — reg.</div>
      <div class="mb-4 text-justify">I request you to kindly grant me Special Casual Leave for <strong>${ctx.duration_str || ''}</strong>, from <strong>${ctx.start || ''}</strong> to <strong>${ctx.end || ''}</strong>, under Appendix VII, Section II, Part I, K.S.R., on account of: <strong>${ctx.reason || 'the reason stated below'}</strong>.${medicalNote}</div>
      <div class="mb-4 text-justify">I have not availed of Casual Leave / Special Casual Leave in excess of my entitlement during this calendar year, to the best of my knowledge.</div>
      <div class="signature-block">Yours faithfully,<br>
        <div class="sig-slot"><img class="sig-img-target" style="display:none;" alt="Signature"></div>
        (<strong>${ctx.name || ''}</strong>)</div>
      <div class="clear"></div>
      <hr>
      <div class="mb-4"><strong>Remarks / Recommendation of the Controlling Officer:</strong></div>
      <div style="height:60px;"></div>
      <div class="text-right">Signature (with date) and Designation</div>`;
    return body;
  },

  // The bundle's own cover letter (below) promises three enclosures: "Form
  // No. 13, the required LWA Proforma, and all mandatory declarations" — but
  // until this fix only Form 13 and the declaration page actually rendered,
  // leaving the promised "LWA Proforma" (the Appendix XII-A/B/C application
  // itself, distinct from the general Rule 113 Form 13) missing from the
  // bundle entirely. Added below as `lwa_proforma`, sourced from Appendix
  // XII-A's own eligibility conditions (completed probation, no bond/
  // disciplinary/outstanding-dues bar, no combining with other leave, no
  // extension within 12 months of superannuation — per ksrmadeeasy.blogspot.com's
  // reproduction of the Appendix text) rather than a verbatim government
  // proforma layout, which this session could not independently locate. Also
  // added: a Recommendation/forwarding-officer block on Form 13 itself, since
  // — like every other application in this bundle that must be forwarded
  // through the hierarchy for sanction — it previously ended at the
  // applicant's own signature with no space for the forwarding officer.
  lwaBundle: function (ctx) {
    return [
      { id: 'lwa_cover', bodyHtml: `
        <div class="text-right mb-4">Place: ${ctx.place || ''}<br>Date: ${ctx.app_date || ''}</div>
        <div class="mb-4">From<br><br><strong>${ctx.name || ''}</strong><br>${ctx.designation || ''}<br>${ctx.office || ''}</div>
        <div class="mb-4">To<br><br><strong>${ctx.controlling || ''}</strong><br>${ctx.office || ''}</div>
        <div class="mb-4">Respected Sir/Madam,</div>
        <div class="mb-4" style="padding-left: 40px;"><strong>Sub:</strong> Application for <strong>${ctx.nature}</strong> for <strong>${ctx.duration_str || ''}</strong> - reg.</div>
        <div class="mb-4 text-justify">I am submitting herewith my application for <strong>${ctx.nature}</strong> for a period of <strong>${ctx.duration_str || ''}</strong> from <strong>${ctx.start || ''}</strong> to <strong>${ctx.end || ''}</strong>. The leave is required on account of: <strong>${ctx.reason || ''}</strong>.</div>
        <div class="mb-4 text-justify">I have attached Form No. 13, the required LWA Proforma, and all mandatory declarations regarding the loss of service benefits, along with proof of my ${ctx.reason || 'purpose'}.</div>
        <div class="mb-4">I kindly request you to sanction the leave / forward the application to the competent authority with your recommendation.</div>
        <div class="signature-block">Yours faithfully,<br><div class="sig-slot"><img class="sig-img-target" style="display:none;" alt="Signature"></div>(${ctx.name || ''})</div>
        <div class="clear"></div>` },
      { id: 'lwa_form13', bodyHtml: `
        <div class="page-title">FORM No. 13<br>APPLICATION FOR LEAVE<br><span style="font-size:10pt; font-weight:normal;">(Rule 113, Part I, K.S.R)</span></div>
        <table class="form-table">
          <tr><td>1. Name of applicant (PEN)</td><td>:</td><td>${ctx.name || ''} (PEN: ${ctx.pen || ''})</td></tr>
          <tr><td>2. Date of Birth</td><td>:</td><td>${ctx.dob || ''}</td></tr>
          <tr><td>3. Post held</td><td>:</td><td>${ctx.designation || ''}</td></tr>
          <tr><td>4. Department, Office and Section</td><td>:</td><td>${ctx.office || ''}</td></tr>
          <tr><td>5. Pay and scale of Pay</td><td>:</td><td>${ctx.pay || ''}</td></tr>
          <tr><td>6. Date of entry in service</td><td>:</td><td>${ctx.entry || ''}</td></tr>
          <tr><td>9. Address during the leave</td><td>:</td><td>${ctx.address || ''}</td></tr>
          <tr><td>11. Nature and period of leave applied for</td><td>:</td><td>${ctx.nature} for ${ctx.duration_str || ''}<br>from ${ctx.start || ''} to ${ctx.end || ''}</td></tr>
          <tr><td>13. Ground on which leave is applied for</td><td>:</td><td>${ctx.reason || ''}</td></tr>
        </table>
        <div class="flex-space mt-4">
          <div>16. Place: ${ctx.place || ''}</div>
          <div class="text-center">Signature of Applicant (with date)<br><div class="sig-slot"><img class="sig-img-target" style="display:none;" alt="Signature"></div></div>
        </div>` },
      { id: 'lwa_form13_office', bodyHtml: `
        <div class="mb-4"><strong>17. Remarks and/or recommendation of the Controlling Officer:</strong></div>
        <div style="height:50px;"></div>
        <div class="text-right mb-4">Signature (with date) and Designation</div>
        <div class="mb-4"><strong>18. Certificate Regarding Admissibility of Leave</strong> <span style="font-weight:normal; font-size:10pt;">(by the Accountant General, in the case of Gazetted Officers; otherwise by the Head of Office)</span></div>
        <div class="mb-4 text-justify">Certified that <strong>${ctx.nature || ''}</strong> for <strong>${ctx.duration_str || ''}</strong>, from <strong>${ctx.start || ''}</strong> to <strong>${ctx.end || ''}</strong>, is admissible under ${ctx.rule || ''}.</div>
        <div class="text-right mb-4">Signature (with date) and Designation</div>
        <div class="mb-4"><strong>19. Orders of the Sanctioning Authority:</strong></div>
        <div style="height:50px;"></div>
        <div class="text-right">Signature (with date) and Designation</div>` },
      { id: 'lwa_proforma', bodyHtml: `
        <div class="page-title">PROFORMA<br>APPLICATION FOR LEAVE WITHOUT ALLOWANCES<br><span style="font-size:10pt; font-weight:normal;">(${ctx.rule || 'Appendix XII-A/XII-B/XII-C, Part I, K.S.R.'})</span></div>
        <table class="form-table">
          <tr><td>1. Name of applicant (PEN)</td><td>:</td><td>${ctx.name || ''} (PEN: ${ctx.pen || ''})</td></tr>
          <tr><td>2. Post held &amp; Office</td><td>:</td><td>${ctx.designation || ''}, ${ctx.office || ''}</td></tr>
          <tr><td>3. Date of entry into service</td><td>:</td><td>${ctx.entry || ''}</td></tr>
          <tr><td>4. Whether probation in the present/entry cadre has been completed</td><td>:</td><td>____________________</td></tr>
          <tr><td>5. Nature of employment / purpose proposed</td><td>:</td><td>${ctx.reason || ''}</td></tr>
          <tr><td>6. Country/place of employment or study</td><td>:</td><td>${ctx.lwa_country || ''}</td></tr>
          <tr><td>7. Employer / institution</td><td>:</td><td>${ctx.lwa_employer || ''}</td></tr>
          <tr><td>8. Period of leave applied for</td><td>:</td><td>${ctx.duration_str || ''} (${ctx.start || ''} to ${ctx.end || ''})</td></tr>
          <tr><td>9. Total LWA already availed under this Appendix, if any, during entire service</td><td>:</td><td>____________________</td></tr>
        </table>
        <div class="mb-4 text-justify mt-4">I certify that: (a) I am not a member of a "scarce category" required to resign before taking up such employment, or, if I am, that I have complied with that requirement; (b) I am not under any bonded obligation to serve the Government; (c) no disciplinary action or vigilance enquiry is pending against me; (d) I have no outstanding loan or other liability to the Government that is not already cleared or bonded; and (e) I understand that this leave cannot be combined with, or granted in continuation of, any other kind of leave, and cannot extend within twelve months of my date of superannuation.</div>
        <div class="flex-space mt-4">
          <div>Place: ${ctx.place || ''}<br>Date: ${ctx.app_date || ''}</div>
          <div class="text-center">Signature of Applicant<br><div class="sig-slot"><img class="sig-img-target" style="display:none;" alt="Signature"></div>${ctx.name || ''}</div>
        </div>
        <hr>
        <div class="mb-4 text-justify"><strong>Recommendation and Certificate of the Head of Office/Department:</strong> Certified that the particulars furnished above have been verified and found correct, that the applicant satisfies the eligibility conditions under this Appendix, that no disciplinary proceedings or vigilance enquiry is pending or contemplated against the applicant, that no dues are outstanding from the applicant to the Government that are not already cleared or bonded, and that the application is forwarded for sanction by the competent authority.</div>
        <div style="height:60px;"></div>
        <div class="text-right">Signature (with date) and Designation</div>` },
      { id: 'lwa_noc', bodyHtml: `
        <div class="page-title">APPLICATION FOR NO OBJECTION CERTIFICATE / PRIOR INTIMATION<br><span style="font-size:10pt; font-weight:normal;">(For proceeding abroad on Leave Without Allowance)</span></div>
        <table class="form-table">
          <tr><td>1. Name of applicant (PEN)</td><td>:</td><td>${ctx.name || ''} (PEN: ${ctx.pen || ''})</td></tr>
          <tr><td>5. Country / Place proposed to be visited</td><td>:</td><td>${ctx.lwa_country || ''}</td></tr>
          <tr><td>6. Period of absence from duty</td><td>:</td><td>${ctx.duration_str || ''} (${ctx.start || ''} to ${ctx.end || ''})</td></tr>
          <tr><td>7. Purpose of visit</td><td>:</td><td>${ctx.reason || ''}</td></tr>
          <tr><td>8. Present / correspondence address in India</td><td>:</td><td>${ctx.address || ''}</td></tr>
        </table>
        <div class="mb-4 text-justify" style="margin-top:20px;">I request that a No Objection Certificate / prior intimation, as required for travel abroad while in Government service, be issued in my favour.</div>
        <div class="signature-block">Signature of Applicant<br><div class="sig-slot"><img class="sig-img-target" style="display:none;" alt="Signature"></div>(${ctx.name || ''})</div>
        <div class="clear"></div>` },
      { id: 'lwa_dec', bodyHtml: `
        <div class="page-title">DECLARATION</div>
        <div class="mb-4 text-justify">I, <strong>${ctx.name || ''}</strong>, working as <strong>${ctx.designation || ''}</strong> at <strong>${ctx.office || ''}</strong>, do hereby declare that I shall abide by the terms and conditions stipulated in ${ctx.rule || ''} and the relevant Government Orders in force, in case the Leave Without Allowance applied for is sanctioned.</div>
        <div class="mb-4 text-justify">(1) I express my consent to lose service benefits for the duration of this leave, including pension, increment, Half Pay Leave accumulation, higher grade, and seniority to juniors who may be promoted during my absence.<br>(2) I am prepared to start my probation afresh in the said cadre on rejoining duty, if not already completed, and to forfeit service benefits accrued before proceeding on leave.<br>(3) I am not under any bonded obligation to serve the Government.<br>(4) There is no outstanding liability to the Government against me.<br>(5) No disciplinary action or vigilance enquiry is pending against me.</div>
        <div class="flex-space mt-8">
          <div>Place: ${ctx.place || ''}<br>Date: ${ctx.app_date || ''}</div>
          <div class="text-center">Signature of Applicant<br><div class="sig-slot"><img class="sig-img-target" style="display:none;" alt="Signature"></div><strong>${ctx.name || ''}</strong></div>
        </div>` },
    ];
  },

  tocBundle: function (ctx) {
    const role = ctx.toc_role;
    const applicantName = ctx.name || '____________', applicantDesig = ctx.designation || '____________';
    const otherName = ctx.toc_other_name || '____________', otherDesig = ctx.toc_other_designation || '____________';
    const p = role === 'relieved'
      ? { relievedName: applicantName, relievedDesig: applicantDesig, relievingName: otherName, relievingDesig: otherDesig, applicantIsRelieving: false }
      : { relievedName: otherName, relievedDesig: otherDesig, relievingName: applicantName, relievingDesig: applicantDesig, applicantIsRelieving: true };
    const sigImg = '<img class="sig-img-target" style="display:none;" alt="Signature">';
    return [
      { id: 'toc7', bodyHtml: `
        <div class="page-title">K.F.C. FORM No. 7<br><span style="font-size:10pt; font-weight:normal;">[See Chapter IV, Article 81(a)] &mdash; REPORT OF TRANSFER OF CHARGE</span></div>
        <table class="form-table">
          <tr><td>1. Office</td><td>:</td><td>${ctx.office || 'N/A'}</td></tr>
          <tr><td>2. Post</td><td>:</td><td>${ctx.designation || 'N/A'}</td></tr>
          <tr><td>3. Date &amp; time of transfer of charge</td><td>:</td><td>${ctx.toc_datetime || '____________'}</td></tr>
          <tr><td>4. Relieved Officer (handing over)</td><td>:</td><td>${p.relievedName}, ${p.relievedDesig}</td></tr>
          <tr><td>5. Relieving Officer (taking over)</td><td>:</td><td>${p.relievingName}, ${p.relievingDesig}</td></tr>
          <tr><td>6. Remarks</td><td>:</td><td>${ctx.toc_remarks || 'Nil'}</td></tr>
        </table>
        <div class="mb-4 text-justify">Certified that charge of the above post was made over by <strong>${p.relievedName}</strong> to <strong>${p.relievingName}</strong> on the date and time shown above, and that this report is submitted in terms of Article 81(a), Chapter IV, K.F.C.</div>
        <div class="flex-space mt-8">
          <div class="text-center">Signature of Relieved Officer<div class="sig-slot">${!p.applicantIsRelieving ? sigImg : ''}</div>(${p.relievedName})</div>
          <div class="text-center">Signature of Relieving Officer<div class="sig-slot">${p.applicantIsRelieving ? sigImg : ''}</div>(${p.relievingName})</div>
        </div>
        <div class="clear"></div>
        <div class="mt-8 text-center">Countersigned:<br><br><br>Signature &amp; Designation of Next Superior Officer</div>` },
      { id: 'toc8', bodyHtml: `
        <div class="page-title">K.F.C. FORM No. 8 / 8A<br><span style="font-size:10pt; font-weight:normal;">ACKNOWLEDGMENT OF PERMANENT ADVANCE &amp; STOCK ON TRANSFER OF CHARGE</span></div>
        <div class="mb-4 text-justify">I, <strong>${p.relievingName}</strong>, ${p.relievingDesig}, ${ctx.office || 'N/A'}, hereby acknowledge having taken charge, on <strong>${ctx.toc_datetime || '____________'}</strong>, from <strong>${p.relievedName}</strong>, ${p.relievedDesig}, of the following, as verified and found correct:</div>
        <table class="form-table">
          <tr><td>(a) Permanent Advance / Stock particulars handed over</td><td>:</td><td>${ctx.toc_advance || 'Nil'}</td></tr>
          <tr><td>(b) Additional remarks</td><td>:</td><td>${ctx.toc_remarks || 'Nil'}</td></tr>
        </table>
        <div class="mb-4 text-justify">This acknowledgment is furnished for attachment to my first salary bill in the new post, as required under the Kerala Financial Code.</div>
        <div class="signature-block">Signature of Relieving Officer<br><div class="sig-slot">${p.applicantIsRelieving ? sigImg : ''}</div>(${p.relievingName})</div>
        <div class="clear"></div>` },
    ];
  },

  indemnityBond: function (ctx) {
    return `
      <div class="page-title">K.F.C. FORM No. 9<br><span style="font-size:10pt; font-weight:normal;">INDEMNITY BOND</span><br><span style="font-size:9pt; font-weight:normal;">(To receive pay, leave salary and other emoluments due to a deceased Government servant)</span></div>
      <div class="mb-4 text-justify">KNOW ALL MEN BY THESE PRESENTS that I/We, <strong>${ctx.svc_t1 || ''}</strong>, ${ctx.svc_t2 || ''} of the deceased, do hereby bind myself/ourselves to indemnify the Governor of Kerala against all claims of whatsoever nature that may hereafter be made against the Government in respect of the pay, leave salary, and other emoluments due to late <strong>${ctx.name || ''}</strong>, who was working as <strong>${ctx.designation || ''}</strong> at <strong>${ctx.office || ''}</strong> (PEN: ${ctx.pen || ''}), and who died on <strong>${ctx.svc_date1 || ''}</strong>, amounting to <strong>Rs. ${ctx.svc_t3 || ''}</strong>, which sum I/we am/are claiming as legal heir(s)/nominee(s) of the deceased.</div>
      <div class="mb-4 text-justify">${ctx.svc_ta1 || ''}</div>
      <div class="mb-4 text-justify">IN WITNESS WHEREOF I/We have set my/our hand(s) this ${ctx.app_date || ''} at ${ctx.place || ''}.</div>
      <div class="signature-block">Signature(s) of Claimant(s)<br><div class="sig-slot"><img class="sig-img-target" style="display:none;" alt="Signature"></div></div>
      <div class="clear"></div>
      <div class="mt-8"><div class="bold mb-2">Witnesses:</div>1. Name &amp; Address: ____________________________________________<br><br>2. Name &amp; Address: ____________________________________________</div>
      <div class="mt-8"><div class="bold mb-2">Surety (if required by the Treasury/DDO, depending on the amount claimed):</div>
        <div class="mb-4 text-justify">I, ____________________________________________, hereby stand surety for the above claimant(s) and bind myself to be jointly and severally liable with them under the terms of this bond.</div>
        <div class="signature-block">Signature of Surety<br><div style="height:40px;"></div></div>
        <div class="clear"></div>
      </div>
      <div class="mb-4 text-justify mt-8" style="font-size:10pt; font-style:italic;">Note: This bond ordinarily needs to be executed on non-judicial stamp paper of the value prescribed by the Treasury/DDO, and may require a surety depending on the amount claimed. Please confirm the current requirement before execution.</div>
      <hr>
      <div class="mb-4 text-justify"><strong>Verification and Forwarding by Head of Office / DDO:</strong> Certified that the service particulars of the deceased shown above have been verified against departmental records, that the amount claimed represents the pay, leave salary and other emoluments actually due, that no other claim in respect of the same dues is pending or has been admitted, and that this bond (with surety, if required) is forwarded to the Treasury Officer for payment.</div>
      <div style="height:50px;"></div>
      <div class="text-right">Signature (with date) and Designation</div>`;
  },
};
