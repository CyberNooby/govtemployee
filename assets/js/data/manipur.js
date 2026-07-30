/* =============================================================================
   MANIPUR — data for state-tool-engine.js. See assets/js/data/kerala.js for
   the schema reference and assets/js/data/assam.js/odisha.js for the fullest
   prior examples of this file's research/honesty discipline. Manipur is the
   third Northeast-cluster state added after Arunachal Pradesh and Assam, and
   its own Leave/Family Pension sourcing is among the STRONGEST this app has
   found for any state — a genuinely detailed, dated, rule-by-rule primary
   document, closer in richness to Odisha/Assam's own files than to Arunachal
   Pradesh's sparser one.

   PRIMARY SOURCE #1 — "MANIPUR CIVIL SERVICES (LEAVE) RULES 1979 AS AMENDED":
   this session fetched and read (via pdftotext on the actual PDF, hosted at
   highereducationmanipur.gov.in) A GENUINELY EXCEPTIONAL, ITEM-BY-ITEM,
   DATE-STAMPED PRIMARY DOCUMENT — every provision below is cited to its own
   rule number AND, in most cases, the specific amending notification and
   date that introduced or changed it. THE DOCUMENT'S OWN OPENING TEXT
   CONFIRMS, IN TERMS: "With effect from 1.7.1981: The provisions of CCS
   (Leave) Rules, 1972 as amended from time to time, have been adopted by the
   State Government of Manipur, vide Government of Manipur, Secretariat
   Finance (PIC) Notification No. 1/79/79-(PIC) Dated 20.5.81 as the Manipur
   Civil Services (Leave) Rule, 1979" — i.e. UNLIKE ARUNACHAL PRADESH (where
   CCS-Leave-Rules adoption was inferred by pattern, not itself gazette-
   quoted), MANIPUR'S OWN ADOPTION OF CCS (LEAVE) RULES 1972 IS DIRECTLY,
   EXPLICITLY CONFIRMED BY A NAMED, DATED NOTIFICATION IN THE PRIMARY TEXT
   ITSELF. Rule numbers below accordingly match this app's own central.js
   file's citations of the same underlying CCS Rules almost exactly.

   DIRECTLY READ, RULE BY RULE, WITH AMENDMENT HISTORY: Earned Leave (Rule
   26/27) — credited in advance in 2 instalments of 15 days each (1 Jan/1 Jul)
   since 1.7.1981; accumulation ceiling raised in stages (180 days pre-1990,
   240 days from 31.7.90, 300 days from 1.1.99 per F.D. (PIC) O.M. No.
   12/5/99-PIC dated 2.6.99); maximum single-spell grant raised from 120 days
   (pre-24.10.1991) to 180 days (F.D. (PIC) O.M. No. 4/1/88-PIC dated
   24.10.1991), with an exception up to 300 days for Group A/B officers if
   the excess is spent abroad; up to 300 days as Leave Preparatory to
   Retirement; 10 days' EL encashable with LTC since 2.6.99. Half Pay Leave
   (Rule 29) — 20 days/completed year, credited in advance (10+10 days) since
   31.7.1990 (F.D. (PIC) Notification No. 4/1/88-PIC dated 31.7.90), NO
   accumulation ceiling (only the overall 5-year continuous-leave cap under
   Rule 12 applies). Commuted Leave (Rule 30(I)) — medical certificate,
   twice the amount debited against HPL. Leave Not Due (Rule 31) — capped at
   360 days entire service, ordinarily on medical certificate only (exceptions
   for continuation of Maternity Leave, and for a female employee adopting a
   child under one year old, without medical certificate). Extraordinary
   Leave (Rule 32) — no leave salary, but HOUSE RENT ALLOWANCE AND
   COMPENSATORY ALLOWANCE CONTINUE at the pre-leave rate (a specific, useful
   detail this session did not find stated this explicitly for any peer
   state's own EOL provision); no ceiling for a permanent employee (subject
   to the 5-year overall continuous-leave cap); for temporary employees, 3
   months (any reason), 6 months (1+ year's service, medical certificate for
   common ailments), 18 months (cancer/mental illness/pulmonary TB or
   pleurisy/TB of any body part/leprosy), 24 months (3+ years' service,
   approved studies in the public interest); an SC/ST pre-examination-
   training exception beyond 3 months.

   MATERNITY LEAVE — DIRECTLY DATE-STAMPED ENHANCEMENT, UNLIKE ASSAM'S OWN
   FILE (where a plausible-but-unconfirmed enhancement was flagged): the SAME
   primary Leave Rules document confirms Maternity Leave was 135 days
   originally (Rule 43(1)), ENHANCED TO 180 DAYS WITH EFFECT FROM 1.9.2008
   (Government of India Direction (5) below Rule 43) — a dated, primary-
   sourced enhancement this file uses directly, not an assumption. 45 days
   total (entire service) for miscarriage/abortion, irrespective of surviving
   children — NOTE THIS DIFFERS FROM THE 6-WEEKS (42-DAY) FIGURE SEVERAL PEER
   STATES IN THIS APP USE for the equivalent provision; Manipur's own 45-day,
   whole-career-ceiling framing is used here rather than normalised to match
   peer states. Not debited to the leave account; up to 2 years' continuation
   (since 1.9.2008, up from 1 year) in further leave without medical
   certificate. Paternity Leave (Rule 43-A) — 15 days, fewer than 2 surviving
   children, within 15 days before to 6 months after delivery, not debited,
   "not to be refused normally." Child Adoption Leave (Rule 43-B) — 135 days
   immediately after a valid adoption of a child under 1 year, fewer than 2
   surviving children — NOTE THIS DIFFERS FROM THE 180-DAY FIGURE THIS APP'S
   OWN CENTRAL.JS FILE USES for the nominally-identical CCS Rule 43-B
   provision; Manipur's own primary text states 135 days, used here as-is
   rather than silently reconciled with Central's own figure — a genuine,
   flagged divergence between two jurisdictions notionally applying "the same"
   adopted Rule. Child Care Leave — 730 days (2 years), women employees, up
   to 2 minor children, effective 1.7.2008, matching the nationwide pattern.

   SPECIAL DISABILITY LEAVE (Rules 44 &amp; 45) AND HOSPITAL LEAVE (Rule 46) —
   BOTH DIRECTLY CONFIRMED, NEITHER MODELLED FOR SEVERAL OTHER STATES IN THIS
   APP'S ROSTER: Special Disability Leave — up to 24 months for disability
   from injury/illness caused by or aggravated by official duty, full pay for
   the first 120 days then HPL-equivalent salary thereafter (with an option
   to simultaneously draw own HPL for a further 120 days at EL-equivalent
   pay, though that portion IS debited to the leave account), not otherwise
   debited, counts as service for pension/increment. Hospital Leave — for
   Group C (hazardous-duty) and Group D employees injured/made ill in the
   course of duty, up to 28 months combined with other leave, same 120-day
   full-pay-then-HPL-rate structure as Special Disability Leave but WITHOUT
   that leave's own simultaneous-HPL-topup option. A brief "Compensatory
   Leave" note (below Rule 22) — a full day off in lieu of Sunday/holiday
   duty — is also named, and modelled below as a simple type. NOT modelled,
   as genuinely inapplicable to this app's applicant base: "Seamen's Sick
   Leave" (Rule 47, for officers on Government vessels) and "Departmental
   Leave" (Rule 49, specific to Survey of India/P&amp;T Department field
   staff) — both present in the primary source but structurally irrelevant to
   a general Manipur Government employee.

   CASUAL LEAVE — NO DAY-COUNT FOUND: the primary Leave Rules document itself
   describes Casual Leave only conceptually ("treated as duty and not any
   recognised form of leave," not combinable with other recognised leave) —
   consistent with the nationwide pattern of Casual Leave sitting OUTSIDE the
   formal Leave Rules, governed instead by separate administrative
   instructions this session could not locate for Manipur specifically. The
   CCS figure (8 days/year) is offered only as a plausible comparison, not a
   confirmed Manipur figure.

   PENSION SCHEME STATUS — NPS, WITH AN ACTIVE, MAJOR, ONGOING INDEFINITE
   STRIKE AS OF THIS FILE'S OWN WRITING: this session confirmed via multiple
   independent, genuinely current Manipur-specific news sources (EastMojo,
   Imphal Times) that Manipur Government employees launched an INDEFINITE
   CEASE-WORK STRIKE on 1 July 2026, still ongoing as of the most recent
   reporting found this session (an EastMojo report dated 10 July 2026 cites
   an estimated Rs. 13.28 crore loss over nine days; broader search summaries
   describe the situation as "unresolved... as of late July 2026," i.e.
   effectively up to this file's own writing date). THE STRIKE'S OWN NAMED
   DEMANDS, per this reporting, extend well beyond pension: restoration of
   Saturday as a weekly holiday, Dearness Allowance/Relief raised from the
   currently-reported 42% to 60% (parity with Central Government employees),
   implementation of the 8th Pay Commission, retirement age raised from 60 to
   62 years, AND — the pension-specific demand — scrapping BOTH the National
   Pension System (NPS) and the Unified Pension Scheme (UPS) in favour of
   restoring the Old Pension Scheme (OPS). This session found NO confirmation
   the strike has been resolved, nor that OPS/any other demand has been
   granted, as of this file's writing — treat Manipur as remaining on NPS,
   but flag this prominently as a live, disruptive, unresolved dispute that
   may have changed by the time this is read.

   GENERAL PROVIDENT FUND — CONFIRMED AS THE ADOPTED CENTRAL INSTRUMENT, WITH
   A DETAILED, DIRECTLY-QUOTED AG MANIPUR FAQ: this session's searches
   confirmed Manipur's GPF accounts are administered under the "GPF (CS)
   Rules, 1960" (i.e. the General Provident Fund (Central Services) Rules,
   1960 — the SAME instrument this app's own central.js file cites for
   Central Government employees), consistent with Manipur's demonstrated
   pattern of adopting Central instruments wholesale. The Principal
   Accountant General (A&amp;E), Manipur's own FAQ page, fetched this session,
   gives (at the time it was written; a rate "subject to periodic revision,
   not asserted as necessarily current") an 8% interest rate; GPF ADVANCE
   capped at half the balance or 3 months' pay, whichever is less (extendable
   to 75% of balance in exceptional cases, per the sanctioning authority's
   discretion), with at least a 4-month gap required between successive
   advances; GPF WITHDRAWAL capped at half the balance or 6 months' pay,
   whichever is less (extendable to 90% of balance specifically for house
   purchase/construction), with at least a 6-month gap required between
   successive withdrawals — no cap on the total number of advances/
   withdrawals across a career, only the minimum spacing between them.

   GROUP INSURANCE SCHEME — NO MANIPUR-SPECIFIC SCHEME CONFIRMED: unlike
   Assam/West Bengal/Odisha, where this session found named, unit-graded
   1980s-era Group Insurance Schemes with specific premium/cover figures, NO
   Manipur-specific scheme name, premium, or cover amount was located this
   session — searches returned only generic, national-level descriptions of
   how such schemes typically work (a 3:7 Insurance-Fund/Savings-Fund split,
   common across several states' schemes, but not confirmed as Manipur's own
   figure). The type below is accordingly a confirmation-request letter, not
   a populated scheme description.

   FAMILY PENSION — A SECOND EXCEPTIONALLY STRONG PRIMARY SOURCE: this
   session fetched and read (via pdftotext) a "FAMILY PENSION" document
   hosted directly on cag.gov.in for the Principal Accountant General (A&amp;E),
   Manipur — genuinely primary text, not a secondary summary. DIRECTLY
   CONFIRMED, VERBATIM: Normal Rate 30% of the basic pay last drawn; Enhanced
   Rate 50% of the pay last drawn, where the employee died IN SERVICE after 7+
   years' continuous service, payable for 10 years from the day after death;
   where death occurs AFTER RETIREMENT (while in receipt of pension), the
   Enhanced Rate is instead payable for 7 years, OR until the date the
   deceased would have turned 67, whichever is LESS. NO Death-cum-Retirement
   Gratuity ceiling was stated in this same document, and this session's
   separate attempt to fetch a "revision of pension post-2016" Manipur
   Government order returned a genuinely scanned/image-only PDF with no
   extractable text layer (confirmed via an empty pdftotext run) — per this
   app's standing rule against stalling on stubborn scanned documents, this
   was not OCR'd this session; no DCRG figure is asserted for Manipur.
   Governing instrument name (Manipur Civil Services (Pension) Rules, 1977)
   is referenced in passing within the Leave Rules document itself (in the
   context of a Leave Not Due proviso), confirming its existence and rough
   date, though this session did not separately read its own full text.

   DELIBERATELY OMITTED, WITH REASONS: House Building Advance, Motor Car
   Advance, Computer Advance and Festival Advance — this session's searches
   found NO Manipur-specific figures for any of these (only generic/other-
   state results) — modelled below as confirmation-request letters, not
   populated with a borrowed peer-state or Central figure. "Leave to
   Probationers" and "Leave to Apprentices" (both named in the primary Leave
   Rules source) are procedural/eligibility clarifications rather than
   distinct leave TYPES an applicant would select, and are not modelled as
   separate types here.
   ============================================================================= */
window.STATE_DATA = window.STATE_DATA || {};
window.STATE_DATA.manipur = {
  key: 'manipur', name: 'Manipur',
  heroTitle: 'Manipur — Manipur Civil Services (Leave) Rules, 1979 &amp; Service Forms',
  heroMeta: 'leave, family care, advances, GPF/NPS &amp; family pension matters, under the Manipur Civil Services (Leave) Rules, 1979 (adopting CCS (Leave) Rules, 1972) and the Manipur Civil Services (Pension) Rules, 1977',
  idFieldLabel: 'Employee ID / PIS Number',
  coverLetter: false,

  groupOrder: [
    { slot: 'general', name: 'General Leave' },
    { slot: 'lwa', name: 'Extraordinary Leave' },
    { slot: 'family', name: 'Family &amp; Medical Leave' },
    { slot: 'casual', name: 'Casual &amp; Special Leave' },
    { slot: 'insurance', name: 'Group Insurance Scheme' },
    { slot: 'advance', name: 'Advances' },
    { slot: 'service', name: 'GPF &amp; Pension Scheme Status' },
    { slot: 'estate', name: 'Family Pension / Estate Claims' },
  ],

  profileFields: [
    { id: 'name', label: 'Full Name', type: 'text', required: true },
    { id: 'pen', label: 'Employee ID / PIS Number', type: 'text', required: true, placeholder: 'e.g., Manipur Employee/PIS Number' },
    { id: 'designation', label: 'Post Held', type: 'text', required: true },
    { id: 'office', label: 'Office &amp; Department', type: 'text', required: true, full: true, placeholder: 'e.g., O/o the Deputy Commissioner, Imphal West' },
    { id: 'dob', label: 'Date of Birth', type: 'date', required: true },
    { id: 'entry', label: 'Date of Entry into Service', type: 'date', required: true },
    { id: 'pay', label: 'Pay', type: 'text', required: true, placeholder: 'e.g., Pay Level 7' },
  ],
  formExtraFields: [
    { id: 'allowances', label: 'HRA / Compensatory Allowances Drawn in Present Post', type: 'text', placeholder: 'Optional' },
    { id: 'holidays', label: 'Sundays/Holidays Prefixed/Suffixed to Leave, if any', type: 'text', placeholder: 'e.g., Nil' },
    { id: 'last_leave', label: 'Date of Return from Last Leave (&amp; Nature/Period of that Leave)', type: 'text', placeholder: 'e.g., 05/01/2026, Earned Leave, or NA' },
  ],
  formRows: [
    { label: '1. Name of applicant &amp; Employee ID', template: '${name} (Employee ID: ${pen})' },
    { label: '2. Rule under which applied for', template: '${rule}' },
    { label: '3. Post held', field: 'designation' },
    { label: '4. Office and Department', field: 'office' },
    { label: '5. Pay', field: 'pay' },
    { label: '6. Date of entry into service', field: 'entry' },
    { label: '7. HRA/Compensatory allowances drawn in present post', field: 'allowances' },
    { label: '8. Nature and period of leave applied for', template: '${nature} for ${duration_str}<br>from ${start} to ${end}' },
    { label: '9. Sundays and holidays, if any, prefixed/suffixed to leave', field: 'holidays' },
    { label: '10. Ground on which leave is applied for', field: 'reason' },
    { label: '11. Date of return from last leave, and the nature and period of that leave', field: 'last_leave' },
    { label: '12. Leave address, if granted', field: 'address' },
  ],

  types: {
    earned_leave: { label: 'Earned Leave', group: 'general', rule: 'Manipur Civil Services (Leave) Rules, 1979, Rule 26/27', family: 'leave', nature: 'Earned Leave', defaultReason: 'Private affairs',
      hint: 'PRIMARY-SOURCE-CONFIRMED, WITH FULL AMENDMENT HISTORY (rule text read directly this session): credited in advance in 2 instalments of 15 days each (1 Jan/1 Jul); accumulation ceiling is 300 days (raised in stages, most recently vide F.D. (PIC) O.M. No. 12/5/99-PIC, dt. 2.6.99); maximum single-spell grant 180 days (F.D. (PIC) O.M. No. 4/1/88-PIC, dt. 24.10.1991), up to 300 days for Group A/B officers if the excess is spent abroad, or as Leave Preparatory to Retirement. 10 days\' EL is encashable with LTC. Confirm your current EL balance with your DDO/Finance Department.' },
    half_pay_leave: { label: 'Half Pay Leave', group: 'general', rule: 'Manipur Civil Services (Leave) Rules, 1979, Rule 29', family: 'leave', nature: 'Half Pay Leave', defaultReason: 'Private affairs',
      hint: 'PRIMARY-SOURCE-CONFIRMED: 20 days per completed year of service, credited in advance (10+10 days on 1 Jan/1 Jul) since 31.7.1990 (F.D. (PIC) Notification No. 4/1/88-PIC). NO accumulation ceiling — only the overall 5-year continuous-leave limit (Rule 12) applies. Grantable on medical certificate, without medical certificate, or on private affairs. Confirm your current HPL balance with your DDO.' },
    commuted_leave: { label: 'Commuted Leave', group: 'general', rule: 'Manipur Civil Services (Leave) Rules, 1979, Rule 30(I)', family: 'leave', medCert: true, nature: 'Commuted Leave', defaultReason: 'Medical treatment',
      hint: 'PRIMARY-SOURCE-CONFIRMED: granted on medical certificate to a permanent or temporary Government servant; twice the amount availed is debited against the Half Pay Leave account. Confirm current terms with your DDO.' },
    leave_not_due: { label: 'Leave Not Due', group: 'general', rule: 'Manipur Civil Services (Leave) Rules, 1979, Rule 31', family: 'leave', nature: 'Leave Not Due', defaultReason: 'Medical treatment / private affairs',
      hint: 'PRIMARY-SOURCE-CONFIRMED: capped at 360 days in the entire service, debited against Half Pay Leave earned subsequently, ordinarily on medical certificate only (exceptions apply in continuation of Maternity Leave, and for a female employee adopting a child under one year old, without medical certificate). Confirm your eligibility with your DDO before applying.' },
    special_disability_leave: { label: 'Special Disability Leave', group: 'general', rule: 'Manipur Civil Services (Leave) Rules, 1979, Rules 44 &amp; 45', family: 'leave', medCert: true, nature: 'Special Disability Leave', defaultReason: 'Disability caused by injury during official duty',
      hint: 'PRIMARY-SOURCE-CONFIRMED: up to 24 months, for disability from injury or illness caused/aggravated by official duty. Full pay for the first 120 days, then leave salary equal to Half Pay Leave rate thereafter — you may additionally draw your own Half Pay Leave for a further 120 days at Earned-Leave-equivalent pay (that portion IS debited to your leave account). Not otherwise debited; counts as service for pension/increment. Confirm eligibility and required medical certification with your DDO before applying.' },
    hospital_leave: { label: 'Hospital Leave', group: 'general', rule: 'Manipur Civil Services (Leave) Rules, 1979, Rule 46', family: 'leave', medCert: true, nature: 'Hospital Leave', defaultReason: 'Illness/injury from hazardous official duty',
      hint: 'PRIMARY-SOURCE-CONFIRMED: for Group C employees whose duties involve dangerous machinery/explosives/poisonous drugs/hazardous tasks, and for Group D employees, while under medical treatment for illness/injury from risks incurred in official duty. Up to 28 months combined with other leave; full pay for the first 120 days, then Half-Pay-Leave-equivalent salary thereafter (unlike Special Disability Leave, there is no option to simultaneously draw your own HPL for a further 120 days). Not debited to the leave account. Confirm eligibility with your DDO before applying.' },

    extraordinary_leave: { label: 'Extraordinary Leave (EOL)', group: 'lwa', rule: 'Manipur Civil Services (Leave) Rules, 1979, Rule 32', family: 'leave', nature: 'Extraordinary Leave',
      hint: 'PRIMARY-SOURCE-CONFIRMED: no leave salary, but HOUSE RENT ALLOWANCE AND COMPENSATORY ALLOWANCE continue at the rate drawn immediately before proceeding on leave. No ceiling for a permanent employee (subject to the overall 5-year continuous-leave cap, Rule 12); for a temporary employee — 3 months (any reason), 6 months (1+ year\'s service, medical certificate, common ailments), 18 months (cancer/mental illness/pulmonary tuberculosis or pleurisy/tuberculosis of any body part/leprosy), or 24 months (3+ years\' service, an approved course of study certified to be in the public interest). Confirm your own applicable ceiling with your DDO before applying for an extended period.',
      declarationTemplate: 'I understand that no leave salary is admissible during Extraordinary Leave under Rule 32, Manipur Civil Services (Leave) Rules, 1979, though HRA and Compensatory Allowance continue at the pre-leave rate.',
      extraFields: [{ id: 'purpose', label: 'Purpose / Nature of Extraordinary Leave', type: 'text', full: true, placeholder: 'e.g., private employment, higher studies, joining spouse, medical treatment' }] },

    maternity: { label: 'Maternity Leave', group: 'family', rule: 'Manipur Civil Services (Leave) Rules, 1979, Rule 43(1), as enhanced w.e.f. 1.9.2008', family: 'leave', medCert: true, nature: 'Maternity Leave', defaultReason: 'Confinement for childbirth',
      hint: 'PRIMARY-SOURCE-CONFIRMED, WITH A DATED ENHANCEMENT (rule text read directly this session): 180 days from commencement, for a married or unmarried female Government servant with fewer than two surviving children — enhanced from 135 days with effect from 1.9.2008 (Government of India Direction (5) below Rule 43). Full pay, not debited to the leave account, combinable with any other leave, counts as service for increment/pension. Up to 2 years\' further leave (since 1.9.2008) may follow without medical certificate. Confirm your current entitlement with your DDO before applying.',
      extraFields: [{ id: 'fam_date', label: 'Expected/Actual Date of Delivery', type: 'date' }] },
    miscarriage: { label: 'Miscarriage / Abortion Leave', group: 'family', rule: 'Manipur Civil Services (Leave) Rules, 1979, Rule 43(3)', family: 'leave', medCert: true, nature: 'Leave for Miscarriage / Abortion', defaultReason: 'Miscarriage / Abortion',
      hint: 'PRIMARY-SOURCE-CONFIRMED: a total of 45 days across the entire service (NOTE: this differs from the 6-weeks/42-day figure several peer states in this app use for the equivalent provision — Manipur\'s own 45-day, career-wide ceiling is used here), admissible irrespective of number of surviving children, on a medical certificate from an AMA (Gazetted)/RMP (Non-Gazetted). Confirm your remaining balance with your DDO before applying.',
      extraFields: [{ id: 'fam_date', label: 'Date', type: 'date' }] },
    paternity: { label: 'Paternity Leave', group: 'family', rule: 'Manipur Civil Services (Leave) Rules, 1979, Rule 43-A', family: 'leave', nature: 'Paternity Leave', defaultReason: 'Delivery of child by spouse',
      hint: 'PRIMARY-SOURCE-CONFIRMED: 15 days, for a male Government servant with fewer than two surviving children, to be availed from 15 days before to up to 6 months after the date of delivery. Full pay, not debited to the leave account, "not to be refused normally" (per the source\'s own wording) — but combinable with any leave EXCEPT Casual Leave.',
      extraFields: [{ id: 'fam_date', label: 'Date of Delivery', type: 'date' }, { id: 'fam_info1', label: 'Name of Spouse', type: 'text', placeholder: 'Optional' }] },
    child_adoption: { label: 'Leave on Adoption of a Child', group: 'family', rule: 'Manipur Civil Services (Leave) Rules, 1979, Rule 43-B', family: 'leave', nature: 'Leave on Adoption of a Child', defaultReason: 'Legal adoption of a child',
      hint: 'PRIMARY-SOURCE-CONFIRMED: 135 days immediately following a valid adoption of a child under 1 year old, for a female Government servant with fewer than two surviving children (NOTE: this app\'s own Central Government file cites 180 days for the nominally-identical CCS Rule 43-B provision — Manipur\'s own primary text states 135 days, used here as a genuine, flagged divergence rather than reconciled to match). Full pay, not debited, combinable with any other leave. Confirm your current entitlement with your DDO before applying.',
      extraFields: [{ id: 'fam_date', label: "Date of Adoption", type: 'date' }] },
    child_care_leave: { label: 'Child Care Leave', group: 'family', rule: 'Manipur Civil Services (Leave) Rules, 1979 (w.e.f. 1.7.2008)', family: 'leave', nature: 'Child Care Leave', defaultReason: 'Care of child (education/illness/other need)',
      hint: 'PRIMARY-SOURCE-CONFIRMED: 730 days (2 years) total, effective 1.7.2008, for women employees with minor children, for up to 2 children, for rearing or specific care needs. Confirm current spell limits and pay-taper terms with your DDO before applying.',
      extraFields: [{ id: 'fam_info1', label: "Child's Name", type: 'text' }, { id: 'fam_date', label: "Child's Date of Birth", type: 'date' }, { id: 'fam_ta1', label: 'Purpose (education / illness / other specific need)', type: 'textarea', full: true }] },

    casual_leave: { label: 'Casual Leave (CL)', group: 'casual', rule: 'Governed by administrative instructions rather than the Leave Rules themselves (day-count not independently confirmed this session)', family: 'letter', needsRouting: true, nature: 'Casual Leave', subject: 'Application for Casual Leave', defaultReason: 'Personal / domestic affairs',
      hint: 'The Manipur Civil Services (Leave) Rules themselves describe Casual Leave only conceptually ("treated as duty, not a recognised form of leave," not combinable with other recognised leave) — no day-count was found this session, consistent with Casual Leave sitting outside the formal Leave Rules nationwide. The CCS figure (8 days/year) is offered only as a plausible comparison, not a confirmed Manipur figure. State your specific reason below, and confirm your current-year balance with your DDO before applying.',
      bodyTemplate: 'I request you to kindly grant me Casual Leave for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, on account of <strong>${reason}</strong>.' },
    compensatory_leave: { label: 'Compensatory Leave', group: 'casual', rule: 'Manipur Civil Services (Leave) Rules, 1979 (Note below Rule 22)', family: 'letter', needsRouting: true, nature: 'Compensatory Leave', subject: 'Application for Compensatory Leave', defaultReason: 'Compensation for duty performed on a holiday',
      hint: 'PRIMARY-SOURCE-CONFIRMED (briefly noted below Rule 22): a full day\'s Compensatory Leave may be treated as a holiday, granted in lieu of duty performed on a Sunday or holiday. Confirm current conditions (time limit to avail, maximum accumulation) with your DDO before applying.',
      extraFields: [{ id: 'comp_dates', label: 'Date(s) of Duty Performed on Holiday', type: 'text', full: true, placeholder: 'e.g., 12/07/2026' }],
      bodyTemplate: 'I request you to kindly grant me Compensatory Leave for <strong>${duration_str}</strong> in lieu of duty performed by me on the holiday(s) on <strong>${comp_dates}</strong>.' },

    gis_query: { label: 'Group Insurance Scheme — Enrolment / Query', group: 'insurance', rule: 'Group Insurance Scheme, as administered for Manipur Government employees (scheme name/figures not independently confirmed this session)', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Head of Office.',
      hint: 'This session found NO Manipur-specific Group Insurance Scheme name, premium slab, or cover amount — searches returned only generic national-level descriptions of how such schemes typically work (a common 3:7 Insurance-Fund/Savings-Fund split used by several states\' own schemes, but not confirmed as Manipur\'s own figure). Use this type to request written confirmation of whether a Group Insurance Scheme currently operates for Manipur Government employees, and if so, its current premium and cover, from your DDO/HRMS.',
      extraFields: [{ id: 'svc_t1', label: 'Nominee Name(s), if enrolling/updating', type: 'text', full: true, placeholder: 'Optional' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Group Insurance Scheme — Enrolment / Query',
      bodyTemplate: 'I request written confirmation of the Group Insurance Scheme currently applicable to me as a Manipur Government employee{{#if svc_t1}}, and enrolment/nomination update for: ${svc_t1}{{/if}}.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },

    hba: { label: 'House Building Advance (HBA)', group: 'advance', rule: 'House Building Advance, as administered for Manipur Government employees (current ceiling not independently confirmed this session)', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your Head of Department / the Finance Department.',
      hint: 'This session found no Manipur-specific House Building Advance ceiling, interest rate, or eligibility period. Use this type to request written confirmation of the current terms from your Head of Department/the Finance Department rather than assuming a figure.',
      extraFields: [{ id: 'svc_t1', label: 'Purpose (construction / purchase / extension / repair)', type: 'text' }, { id: 'svc_t2', label: 'Estimated Cost (₹)', type: 'text' }, { id: 'svc_t3', label: 'Advance Amount Required (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Property / site details', type: 'textarea', full: true }],
      subject: 'Application for House Building Advance',
      bodyTemplate: 'I request that a House Building Advance be sanctioned to me for the purpose of <strong>${svc_t1}</strong>. The estimated cost is <strong>Rs. ${svc_t2}</strong>, and the advance amount required is <strong>Rs. ${svc_t3}</strong>.{{#if svc_ta1}} Property/site details: ${svc_ta1}.{{/if}} I confirm I am not likely to retire before complete recovery of the advance can be effected.' },
    motor_car_advance: { label: 'Motor Car / Motor Cycle Advance', group: 'advance', rule: 'Motor Car/Motor Cycle Advance, as administered for Manipur Government employees (current ceiling not independently confirmed this session)', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your Head of Department / the Finance Department.',
      hint: 'This session found no Manipur-specific Motor Car/Motor Cycle Advance ceiling or eligibility criteria. Use this type to request written confirmation of the current terms from your Head of Department/the Finance Department rather than assuming a figure.',
      extraFields: [{ id: 'svc_t1', label: 'Vehicle Type (Motor Car / Motor Cycle)', type: 'text' }, { id: 'svc_t2', label: 'Anticipated Price (₹)', type: 'text' }, { id: 'svc_t3', label: 'Advance Amount Required (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Application for Motor Car / Motor Cycle Advance',
      bodyTemplate: 'I request that a <strong>${svc_t1}</strong> Advance be sanctioned to me. The anticipated price is <strong>Rs. ${svc_t2}</strong>, and the advance amount required is <strong>Rs. ${svc_t3}</strong>.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
    gpf_advance: { label: 'GPF Advance / Withdrawal', group: 'advance', rule: 'General Provident Fund (Central Services) Rules, 1960, as adopted for Manipur Government employees', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Accounts Officer.',
      hint: 'PRIMARY-ADJACENT-CONFIRMED (Principal Accountant General (A&amp;E), Manipur\'s own current GPF FAQ, read this session): a TEMPORARY ADVANCE is capped at half the Fund balance or 3 months\' pay, whichever is less (extendable to 75% of balance in exceptional cases), with at least a 4-month gap required between successive advances. A WITHDRAWAL is capped at half the balance or 6 months\' pay, whichever is less (extendable to 90% of balance specifically for house purchase/construction), with at least a 6-month gap between successive withdrawals — no cap on total number across your career. Confirm your own current balance and eligibility with your DDO/Accounts Officer.',
      extraFields: [{ id: 'svc_t1', label: 'Type (Advance / Withdrawal) &amp; Purpose', type: 'text' }, { id: 'svc_t2', label: 'Amount Requested (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Application for GPF Advance / Withdrawal',
      bodyTemplate: 'I request that a GPF advance/withdrawal of <strong>Rs. ${svc_t2}</strong> be sanctioned for: <strong>${svc_t1}</strong>, under the General Provident Fund (Central Services) Rules, 1960, as adopted for Manipur Government employees.{{#if svc_ta1}} ${svc_ta1}{{/if}} The current permissible cap has been confirmed with my DDO/Accounts Officer.' },

    gpf_query: { label: 'GPF — Terms / Balance Confirmation Query', group: 'service', rule: 'General Provident Fund (Central Services) Rules, 1960, as adopted for Manipur Government employees', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / the Accountant General (A&amp;E), Manipur.',
      hint: 'See the GPF Advance/Withdrawal type\'s hint for this session\'s sourcing (the Principal Accountant General (A&amp;E), Manipur\'s own current FAQ page). Use this type to request written confirmation of your own current subscription rate, balance, and advance/withdrawal eligibility from your DDO/the Accountant General (A&amp;E), Manipur.',
      extraFields: [{ id: 'svc_t1', label: 'Nature of Query (balance / advance eligibility / nomination / other)', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'GPF — Terms / Balance Confirmation Query',
      bodyTemplate: 'I request written confirmation of my current General Provident Fund status, specifically: <strong>${svc_t1}</strong>.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
    pension_status_query: { label: 'Pension Scheme Status — Confirmation / Query (NPS)', group: 'service', rule: 'National Pension System — mandatory for civilian employees joining on/after 1.1.2004', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / HRMS / the Manipur Finance Department.',
      hint: 'ACTIVE, MAJOR, ONGOING DISPUTE AS OF THIS FILE\'S OWN WRITING — CONFIRM CURRENT STATUS BEFORE RELYING: Manipur Government employees launched an INDEFINITE cease-work strike on 1 July 2026 (multiple Manipur-specific news sources this session, including an EastMojo report dated 10 July 2026 citing an estimated Rs. 13.28 crore loss over nine days), demanding — among other things — that BOTH the National Pension System (NPS) and the Unified Pension Scheme (UPS) be scrapped in favour of restoring the Old Pension Scheme (OPS), alongside restoration of Saturday as a weekly holiday, DA/DR raised from a reported 42% to 60% (Central parity), 8th Pay Commission implementation, and retirement age raised from 60 to 62. This session found NO confirmation the strike has been resolved or any demand granted as of its own writing (reporting described the situation as unresolved into late July 2026). Treat Manipur as remaining on NPS for now, but confirm current status given the live, disruptive dispute — use this type to request written confirmation of your own scheme and PRAN from your DDO/HRMS/the Finance Department.',
      extraFields: [{ id: 'svc_date1', label: 'Date of Appointment', type: 'date' }, { id: 'svc_t2', label: 'Current Scheme, if known (NPS) &amp; PRAN, if applicable', type: 'text', placeholder: 'Optional' }, { id: 'svc_ta1', label: 'Nature of query / request', type: 'textarea', full: true }],
      subject: 'Pension Scheme Status — Confirmation / Query',
      bodyTemplate: 'Having been appointed to Government service on <strong>${svc_date1}</strong>{{#if svc_t2}}, and presently understood to be on: ${svc_t2},{{/if}} I request written confirmation of my current pension scheme status under the National Pension System.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },

    family_pension: { label: 'Family Pension — Claim / Intimation', group: 'estate', rule: 'Manipur Civil Services (Pension) Rules, 1977', family: 'letter', noRemarksBlock: true,
      hint: 'FULLY PRIMARY-VERBATIM (a "Family Pension" document read directly this session, hosted on cag.gov.in for the Principal Accountant General (A&amp;E), Manipur): Normal Rate 30% of basic pay last drawn; Enhanced Rate 50% of pay last drawn, where the employee died IN SERVICE after 7+ years\' continuous service, payable for 10 years from the day after death; where death occurs AFTER RETIREMENT (in receipt of pension), the Enhanced Rate is instead payable for 7 years, or until the deceased would have turned 67, whichever is LESS. NO Death-cum-Retirement Gratuity ceiling was stated in this same document — a separate Manipur pension-revision order this session tried to fetch returned as a scanned/image PDF with no extractable text, and was not OCR\'d per this app\'s standing time-boxing rule; no DCRG figure is asserted. Confirm current entitlements with your DDO/HRMS/the Directorate of Pension before relying on any figure.',
      extraFields: [{ id: 'svc_date1', label: 'Date of Death', type: 'date' }, { id: 'svc_t2', label: "Claimant's Relationship to the Deceased", type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Family Pension — Claim / Intimation',
      bodyTemplate: 'I write to intimate the death of the above-named Government employee on <strong>${svc_date1}</strong>, and to request that Family Pension, as admissible under the Manipur Civil Services (Pension) Rules, 1977 (or, if applicable, under the National Pension System), be sanctioned in favour of the eligible member(s) of the family.{{#if svc_t2}} Claimed relationship to the deceased: ${svc_t2}.{{/if}}{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
    deceased_dues_indemnity: { label: "Indemnity Bond — Deceased Employee's Dues", group: 'estate', rule: 'Manipur Treasury procedure (no distinct form number independently confirmed this session)', family: 'letter', noRemarksBlock: true,
      hint: 'This session could not confirm whether Manipur maintains its own distinct indemnity-bond form number for claiming a deceased employee\'s dues — confirm the current form and any surety requirement with your Treasury Officer/DDO/HRMS before executing this bond.',
      extraFields: [{ id: 'svc_date1', label: 'Date of death of employee', type: 'date' }, { id: 'svc_t1', label: 'Name of Claimant(s)', type: 'text' }, { id: 'svc_t2', label: 'Relationship of Claimant(s) to Deceased', type: 'text' }, { id: 'svc_t3', label: 'Amount Claimed (₹)', type: 'text' }, { id: 'svc_ta1', label: "Claimant's address / surety details, if required", type: 'textarea', full: true }],
      subject: "Indemnity — Claim for Deceased Employee's Dues",
      bodyTemplate: 'I/We, <strong>${svc_t1}</strong>, ${svc_t2} of the deceased <strong>${name}</strong>, request payment of the pay, leave salary and other emoluments due, amounting to <strong>Rs. ${svc_t3}</strong>, in respect of death on <strong>${svc_date1}</strong>, and undertake to furnish an indemnity bond (with sureties, if required) in the form currently prescribed by the Treasury.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
  },
};
