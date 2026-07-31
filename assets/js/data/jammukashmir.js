/* =============================================================================
   JAMMU &amp; KASHMIR (UT) — data for state-tool-engine.js. See assets/js/data/
   kerala.js for the schema reference and assets/js/data/sikkim.js for the
   fullest prior example of a genuinely independent (non-CCS-adopted) Leave
   Rules instrument. J&amp;K is the fifth Union Territory added, and — like
   Delhi — has its OWN elected legislature (restored under the Jammu and
   Kashmir Reorganisation Act, 2019, which converted the former State of
   Jammu and Kashmir into two UTs: J&amp;K with a legislature, and Ladakh
   without). Critically, THIS FILE DOES NOT REUSE central.js's CCS Rules
   citations the way the smaller UTs (Andaman &amp; Nicobar Islands, Chandigarh,
   Dadra &amp; Nagar Haveli and Daman &amp; Diu, Delhi) do — J&amp;K genuinely retained
   its OWN pre-existing state-era Leave Rules and Civil Service Regulations
   after the 2019 reorganisation (via the Jammu &amp; Kashmir Reorganisation
   (Adaptation of State Laws) Orders, 2020), rather than being switched onto
   the Central instruments wholesale.

   PRIMARY SOURCE — "THE JAMMU AND KASHMIR CIVIL SERVICES (LEAVE) RULES,
   1979": this session fetched and read (via curl+pdftotext, from the J&amp;K
   High Court's own website) the full consolidated, amended text of this
   instrument — genuinely J&amp;K's own numbered Rules (Rules 26-63), CCS-
   Leave-Rules-ADJACENT in overall structure (similar to how this project's
   Tripura file found a near-verbatim-but-still-distinct instrument) but
   with several DIRECTLY CONFIRMED, DISTINCTIVE J&amp;K-SPECIFIC FIGURES:
   Earned Leave (Rule 26) — credited in advance at 2½ days per completed
   calendar month (30 days/year), maximum grant at a time 120 days, and a
   THREE-STAGE, EXPLICITLY DATED ACCUMULATION-CEILING HISTORY directly read
   from the amendment notes themselves: 180 days in the original 1979 text,
   raised to 240 days with effect from 1 January 1988, and raised again to
   300 days with effect from 1 July 1997 (the current, operative figure).
   Half Pay Leave (Rule 28) — 20 days per completed year of service.
   Commuted Leave (Rule 29) — up to half the HPL due, medical certificate,
   twice debited (standard CCS-pattern figures). Extraordinary Leave (Rule
   32) — a four-tier structure: up to 3 months without medical certificate;
   up to 6 months (combined with other admissible leave) with 1+ year's
   service and a medical certificate; up to 18 months specifically for
   cancer or other "life-consuming" disease, mental illness, pulmonary
   tuberculosis/pleurisy, or leprosy, certified by the Director Health
   Services or a Principal Medical College, with 1+ year's service; and up
   to 24 months for prosecuting studies certified to be in the public
   interest, with 3+ years' service. Special Disability Leave (Rules 42-43,
   for injury/illness in/consequence of official duty) — maximum 24 months
   for any one disability, with a directly-confirmed, distinctive leave-
   salary tiering: full EL-equivalent salary for the first 120 days
   (optionally extendable another 120 days, debited to the HPL account),
   HPL-equivalent salary thereafter; counted as duty for pension purposes.
   Quarantine Leave (Rule 44) — 21 days normally, up to 30 days in
   exceptional circumstances, treated as duty. CASUAL LEAVE (RULE 45) — A
   GENUINELY DISTINCTIVE, DIRECTLY-CONFIRMED FIGURE: 15 days per year in
   aggregate — DIRECTLY PART OF THIS FORMAL LEAVE RULES INSTRUMENT (unlike
   most CCS-adopting states/UTs in this app's roster, where Casual Leave
   sits outside the Leave Rules via separate DoPT circulars), and HIGHER
   than the standard 8-day CCS figure most peer governments in this app use.

   MATERNITY, PATERNITY &amp; MISCARRIAGE LEAVE — A DIRECTLY-CONFIRMED,
   MULTI-STAGE AMENDMENT HISTORY: the consolidated 1979 Rules text itself
   (Rule 41(1), read directly) shows a "135 days" figure with its own
   incorporated note that this was itself an increase from an earlier
   96-day baseline — but a SEPARATE, MORE RECENT WebSearch finding (SRO-353
   of 2015, amending Rule 41(1)) confirms Maternity Leave was further
   enhanced to 180 DAYS, for a female employee with fewer than two
   surviving children, full leave salary, not debited to the leave account,
   reportedly available for up to two instances during a career. THIS FILE
   USES 180 DAYS AS THE CURRENT FIGURE, per the more recent, independently-
   corroborated amendment — the 1979 text's own "135 days" is retained here
   only as documented history of the rule's evolution, not the current
   figure. GENUINELY CURRENT AND NEWSWORTHY: a Jammu &amp; Kashmir and Ladakh
   High Court ruling (reported 11 July 2026, via Kashmir Observer) held
   that "maternity leave cannot be reduced to a matter of state charity"
   and is "an unassailable constitutional right," in a case where pay and
   allowances were being withheld during maternity leave despite a policy
   granting the benefit (Health &amp; Medical Education Department, Senior
   Residents/Tutors) — cited here as directly relevant, very recent context
   for any employee facing a similar withholding dispute. Paternity Leave
   (Rule 41(3)) — 15 days, for a male employee with fewer than two
   surviving children, during his wife's confinement, not debited, "may
   not normally be refused under any circumstances" (the Rules' own
   emphatic language) — DIRECTLY PART OF THESE LEAVE RULES, unlike CCS's
   own separate Rule 43-A. Miscarriage/Abortion Leave (Rule 41(2)) — up to
   6 weeks (42 days), medical certificate required, irrespective of the
   number of surviving children (a broader eligibility than the ordinary
   Maternity Leave's "fewer than two children" condition).

   PENSION SCHEME STATUS — TWO GENUINELY DISTINCTIVE, WELL-DATED FINDINGS,
   IN TENSION WITH EACH OTHER: (1) J&amp;K's own NPS cutoff is PRECISELY
   CONFIRMED as 1 JANUARY 2010 — a WebSearch finding (Greater Kashmir,
   TeamLease RegTech, both independently corroborating) that the General
   Provident Fund (Central Services) Rules, 1960, as implemented in J&amp;K,
   "will not be applicable on government servants appointed on or after
   January 1, 2010" — employees appointed on/after that date are on NPS,
   though a later administrative concession (SRO-12, dated 1 January 2018)
   allows them to ALSO voluntarily open a GPF account and contribute to it
   (without any further employer-side GPF contribution) alongside their
   NPS account — a genuinely distinctive dual-account arrangement not found
   in other states/UTs in this app's roster. (2) THE J&amp;K GOVERNMENT HAS
   EXPLICITLY AND RECENTLY RULED OUT RESTORING THE OLD PENSION SCHEME: this
   session found multiple, independently-corroborating, very recent (dated
   February 2026) Kashmir-focused news sources (Kashmir Reader, Greater
   Kashmir, Kashmir Life) reporting the J&amp;K Government's explicit position
   that OPS revival is off the table, citing fiscal-sustainability concerns
   — specifically citing pension expenditure having roughly doubled from
   Rs. 731 crore (2004-05) to Rs. 1,495 crore. THIS IS A SHARP CONTRAST TO
   SIKKIM (this app's only OPS-RESTORATION SUCCESS story) — J&amp;K is, so far,
   this app's clearest EXPLICIT-REFUSAL case, though trade unions/employee
   associations continue actively campaigning for restoration (this session
   found no indication that campaign has succeeded).

   FAMILY PENSION &amp; DEATH-CUM-RETIREMENT GRATUITY — GOVERNED BY THE "JAMMU
   AND KASHMIR FAMILY PENSION-CUM-GRATUITY RULES, 1964" (Schedule XV of the
   Jammu and Kashmir Civil Service Regulations, Volume II) — TWO GENUINELY
   CURRENT, WELL-SOURCED FIGURES: DCRG ceiling raised from Rs. 20 lakh to
   RS. 25 LAKH with effect from 1 JANUARY 2024 (per the Regulations' own
   DA-linked escalator clause: a 25% ceiling rise whenever Dearness
   Allowance reaches 50% of basic pay — DA reached 50% from 1.1.2024,
   confirmed via Kashmir Life) — matching the standard current 7th CPC-era
   figure many CCS-pattern governments in this app now use. AND, GENUINELY
   VERY CURRENT: Enhanced Family Pension (payable where a Government
   servant dies AFTER retirement, i.e. as a pensioner) was extended to be
   payable for 7 YEARS, or until the deceased would have attained age 67,
   whichever is earlier — per a J&amp;K Government amendment reported just
   DAYS before this file was researched (Kashmir Observer, Kashmir
   Despatch, NewsX, all dated 21 July 2026) — a DISTINCTIVE 7-year figure
   (most peer governments in this app's roster use a 7-or-10-year figure;
   confirm this against your own state's file if drawing comparisons).
   Emoluments for gratuity purposes (basic pay + admissible DA) apply for
   retirements/deaths on/after 1.1.2006; gratuity is to be disbursed within
   3 months of the application date. This file did NOT independently
   re-confirm the Family Pension NORMAL-rate percentage for J&amp;K specifically
   (i.e. whether it matches the standard CCS 30%-of-basic-pay figure) —
   hedged accordingly below.

   ADMINISTRATIVE CONTEXT, NOT MODELLED AS A LEAVE/SERVICE-APPLICATION TYPE:
   the J&amp;K civil services cadre merged with the AGMUT (Arunachal Pradesh-
   Goa-Mizoram-UT) cadre per the Jammu and Kashmir Reorganisation
   (Amendment) Act, 2021 — an administrative/officer-cadre matter, not a
   leave/pension entitlement an ordinary employee would apply for. Domicile-
   based recruitment eligibility (a genuinely well-known, distinctive post-
   2019 feature, per the 2020 Adaptation of State Laws Second Order) is
   likewise a recruitment-eligibility matter, not something an existing
   employee applies for via this tool, and is not modelled here.

   DELIBERATELY OMITTED OR HEDGED, WITH REASONS: this session found no
   J&amp;K-specific Group Insurance Scheme (analogous to CGEGIS or the various
   state-specific schemes this app's other files model) — modelled as a
   confirmation-request letter rather than assumed. House Building Advance
   and Study Leave's own maximum-duration figure were not independently
   confirmed for J&amp;K this session (the 1979 Rules' own Study Leave chapter,
   Rules 61+, was read but its overall duration ceiling was not located in
   the time available) — both hedged accordingly.
   ============================================================================= */
window.STATE_DATA = window.STATE_DATA || {};
window.STATE_DATA.jammukashmir = {
  key: 'jammukashmir', name: 'Jammu &amp; Kashmir',
  heroTitle: 'Jammu &amp; Kashmir (UT) — J&amp;K Civil Services (Leave) Rules, 1979 &amp; Service Forms',
  heroMeta: 'leave, family care, advances, GPF/pension scheme status &amp; family pension matters, under the Jammu and Kashmir Civil Services (Leave) Rules, 1979 (retained after the 2019 reorganisation, not switched to CCS Rules), and the Jammu and Kashmir Family Pension-cum-Gratuity Rules, 1964',
  idFieldLabel: 'Employee ID / PIS Number',
  coverLetter: false,

  groupOrder: [
    { slot: 'general', name: 'General Leave' },
    { slot: 'lwa', name: 'Extraordinary Leave' },
    { slot: 'family', name: 'Family &amp; Medical Leave' },
    { slot: 'casual', name: 'Casual &amp; Special Leave' },
    { slot: 'insurance', name: 'Group Insurance' },
    { slot: 'advance', name: 'Advances' },
    { slot: 'service', name: 'GPF &amp; Pension Scheme Status' },
    { slot: 'estate', name: 'Family Pension / Estate Claims' },
  ],

  profileFields: [
    { id: 'name', label: 'Full Name', type: 'text', required: true },
    { id: 'pen', label: 'Employee ID / PIS Number', type: 'text', required: true, placeholder: 'e.g., J&K Employee/PIS Number' },
    { id: 'designation', label: 'Post Held', type: 'text', required: true },
    { id: 'office', label: 'Office &amp; Department', type: 'text', required: true, full: true, placeholder: 'e.g., O/o the Deputy Commissioner, Srinagar' },
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
    earned_leave: { label: 'Earned Leave', group: 'general', rule: 'J&amp;K Civil Services (Leave) Rules, 1979, Rule 26', family: 'leave', nature: 'Earned Leave', defaultReason: 'Private affairs',
      hint: 'PRIMARY-SOURCE-CONFIRMED: credited in advance at 2½ days per completed calendar month (30 days/year), maximum grant at a time 120 days. ACCUMULATION CEILING: 300 days, effective from 1 July 1997 (raised from 240 days in 1988, and 180 days originally in 1979) — directly confirmed via the Rules\' own dated amendment notes. Confirm your current EL balance with your DDO.' },
    half_pay_leave: { label: 'Half Pay Leave', group: 'general', rule: 'J&amp;K Civil Services (Leave) Rules, 1979, Rule 28', family: 'leave', nature: 'Half Pay Leave', defaultReason: 'Private affairs',
      hint: 'PRIMARY-SOURCE-CONFIRMED: 20 days for each completed year of service. Confirm your current HPL balance with your DDO.' },
    commuted_leave: { label: 'Commuted Leave', group: 'general', rule: 'J&amp;K Civil Services (Leave) Rules, 1979, Rule 29', family: 'leave', medCert: true, nature: 'Commuted Leave', defaultReason: 'Medical treatment',
      hint: 'PRIMARY-SOURCE-CONFIRMED: up to half the Half Pay Leave due, medical certificate required, twice the amount debited against HPL due. May be granted at the employee\'s request even when Earned Leave is due. Confirm current terms with your DDO.' },
    special_disability_leave: { label: 'Special Disability Leave', group: 'general', rule: 'J&amp;K Civil Services (Leave) Rules, 1979, Rules 42-43', family: 'leave', medCert: true, nature: 'Special Disability Leave', defaultReason: 'Disability caused by injury/illness during official duty',
      hint: 'PRIMARY-SOURCE-CONFIRMED, WITH A DISTINCTIVE LEAVE-SALARY STRUCTURE: maximum 24 months for any one disability (injury/illness in or consequence of official duty), certified by an authorised Medical Attendant. Leave salary is EL-equivalent for the first 120 days (optionally extendable another 120 days, debited to your HPL account), and HPL-equivalent thereafter. Counted as duty for pension purposes. Confirm eligibility and certification with your DDO before applying.' },
    study_leave: { label: 'Study Leave', group: 'general', rule: 'J&amp;K Civil Services (Leave) Rules, 1979, Rule 61 onward', family: 'leave', nature: 'Study Leave', defaultReason: 'Approved course of study',
      hint: 'PRIMARY-SOURCE-CONFIRMED (eligibility conditions), BUT THE OVERALL MAXIMUM-DURATION CEILING WAS NOT INDEPENDENTLY CONFIRMED THIS SESSION: available for higher studies/specialised training with a direct connection to your duties, study tours certified as being of public-interest advantage, or broader public-administration-related study. Confirm the current maximum duration, and the certification/reporting requirements, with your DDO before applying.',
      extraFields: [{ id: 'purpose', label: 'Course of Study &amp; Institution', type: 'text', full: true }] },

    extraordinary_leave: { label: 'Extraordinary Leave (EOL)', group: 'lwa', rule: 'J&amp;K Civil Services (Leave) Rules, 1979, Rule 32', family: 'leave', nature: 'Extraordinary Leave',
      hint: 'PRIMARY-SOURCE-CONFIRMED, A FOUR-TIER STRUCTURE: up to 3 months without medical certificate; up to 6 months (combined with other admissible leave) with 1+ year\'s continuous service and a medical certificate; up to 18 months specifically for cancer or other "life-consuming" disease, mental illness, pulmonary tuberculosis/pleurisy, or leprosy (certified by the Director Health Services or a Principal Medical College), with 1+ year\'s service; up to 24 months for prosecuting studies certified to be in the public interest, with 3+ years\' service. No leave salary is admissible except where separately noted. Confirm your applicable tier with your DDO before applying.',
      declarationTemplate: 'I understand that no leave salary is admissible during Extraordinary Leave under Rule 32, J&amp;K Civil Services (Leave) Rules, 1979 (except as separately provided for study purposes).',
      extraFields: [{ id: 'purpose', label: 'Purpose / Nature of Extraordinary Leave', type: 'text', full: true, placeholder: 'e.g., private employment, higher studies, medical treatment' }] },

    maternity: { label: 'Maternity Leave', group: 'family', rule: 'J&amp;K Civil Services (Leave) Rules, 1979, Rule 41(1), as amended by SRO-353 of 2015', family: 'leave', medCert: true, nature: 'Maternity Leave', defaultReason: 'Confinement for childbirth',
      hint: 'CONFIRMED VIA A MORE RECENT AMENDMENT THAN THE CONSOLIDATED RULES TEXT ITSELF: 180 days from commencement (per SRO-353 of 2015, superseding the 1979 base text\'s own earlier 135-day and 96-day figures), for a female employee with fewer than two surviving children, full leave salary, not debited to the leave account, reportedly available for up to two instances in a career. GENUINELY CURRENT CONTEXT: a Jammu &amp; Kashmir and Ladakh High Court ruling (reported 11 July 2026) held that maternity leave "cannot be reduced to a matter of state charity" and is a constitutional right, in a case concerning pay withheld during maternity leave — relevant if you face a similar dispute. Confirm your current entitlement with your DDO/HRMS before applying.',
      extraFields: [{ id: 'fam_date', label: 'Expected/Actual Date of Delivery', type: 'date' }] },
    miscarriage_leave: { label: 'Miscarriage / Abortion Leave', group: 'family', rule: 'J&amp;K Civil Services (Leave) Rules, 1979, Rule 41(2)', family: 'leave', medCert: true, nature: 'Miscarriage / Abortion Leave', defaultReason: 'Miscarriage / abortion',
      hint: 'PRIMARY-SOURCE-CONFIRMED: up to 6 weeks (42 days), medical certificate required, IRRESPECTIVE of the number of surviving children (a broader eligibility than ordinary Maternity Leave, which requires fewer than two surviving children). Confirm current terms with your DDO before applying.' },
    paternity: { label: 'Paternity Leave', group: 'family', rule: 'J&amp;K Civil Services (Leave) Rules, 1979, Rule 41(3)', family: 'leave', nature: 'Paternity Leave', defaultReason: 'Delivery of child by spouse',
      hint: 'PRIMARY-SOURCE-CONFIRMED: 15 days during the confinement of your wife, for a male employee with fewer than two surviving children, full leave salary, not debited to the leave account, combinable with other leave. The Rules\' own text states this "may not normally be refused under any circumstances." Confirm current terms with your DDO before applying.',
      extraFields: [{ id: 'fam_date', label: 'Date of Delivery', type: 'date' }, { id: 'fam_info1', label: 'Name of Spouse', type: 'text', placeholder: 'Optional' }] },

    casual_leave: { label: 'Casual Leave (CL)', group: 'casual', rule: 'J&amp;K Civil Services (Leave) Rules, 1979, Rule 45', family: 'letter', needsRouting: true, nature: 'Casual Leave', subject: 'Application for Casual Leave', defaultReason: 'Personal / domestic affairs',
      hint: 'PRIMARY-SOURCE-CONFIRMED, AND DISTINCTIVE: 15 days per year in aggregate — directly part of these formal Leave Rules (Rule 45), unlike most CCS-pattern peer governments in this app\'s roster where Casual Leave sits outside the Leave Rules, and higher than the standard 8-day CCS figure. Not treated as absence from duty; pay is not interrupted. Confirm your current-year balance with your DDO.',
      bodyTemplate: 'I request you to kindly grant me Casual Leave for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, on account of <strong>${reason}</strong>.' },
    quarantine_leave: { label: 'Quarantine Leave', group: 'casual', rule: 'J&amp;K Civil Services (Leave) Rules, 1979, Rule 44', family: 'letter', needsRouting: true, nature: 'Quarantine Leave', subject: 'Application for Quarantine Leave', defaultReason: 'Quarantine due to infectious disease in household',
      hint: 'PRIMARY-SOURCE-CONFIRMED: normally capped at 21 days, extendable to 30 days in exceptional circumstances, granted by the Head of Office on a Medical Officer\'s certificate; treated as duty and not debited to the leave account (any excess is debited as ordinary leave due). Confirm current conditions with your DDO before applying.',
      bodyTemplate: 'I request you to kindly grant me Quarantine Leave for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, on account of <strong>${reason}</strong>.' },

    group_insurance_query: { label: 'Group Insurance — Terms / Enrolment Query', group: 'insurance', rule: 'Group Insurance terms for J&amp;K UT employees (not independently confirmed this session)', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Head of Office.',
      hint: 'This session found no J&amp;K-specific Group Insurance Scheme text (analogous to CGEGIS or other states\' own schemes) to cite with confidence. Use this type to request written confirmation of your current group insurance terms, premium/subscription rate, and cover amount from your DDO/Head of Office rather than assuming a figure.',
      extraFields: [{ id: 'svc_t1', label: 'Nominee Name(s), if updating', type: 'text', full: true, placeholder: 'Optional' }, { id: 'svc_ta1', label: 'Nature of query', type: 'textarea', full: true }],
      subject: 'Group Insurance — Terms / Enrolment Query',
      bodyTemplate: 'I request written confirmation of my current Group Insurance terms, including the applicable premium/subscription rate and cover amount.{{#if svc_t1}} I also wish to record/update the following nominee(s): ${svc_t1}.{{/if}}{{#if svc_ta1}} ${svc_ta1}{{/if}}' },

    hba: { label: 'House Building Advance (HBA)', group: 'advance', rule: 'House Building Advance, as administered for J&amp;K UT employees (current ceiling not independently confirmed this session)', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your Head of Department / the Finance Department.',
      hint: 'This session found no J&amp;K-specific House Building Advance ceiling, interest rate, or eligibility period. Use this type to request written confirmation of the current terms from your Head of Department/the Finance Department rather than assuming a figure.',
      extraFields: [{ id: 'svc_t1', label: 'Purpose (construction / purchase / extension / repair)', type: 'text' }, { id: 'svc_t2', label: 'Estimated Cost (₹)', type: 'text' }, { id: 'svc_t3', label: 'Advance Amount Required (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Property / site details', type: 'textarea', full: true }],
      subject: 'Application for House Building Advance',
      bodyTemplate: 'I request that a House Building Advance be sanctioned to me for the purpose of <strong>${svc_t1}</strong>. The estimated cost is <strong>Rs. ${svc_t2}</strong>, and the advance amount required is <strong>Rs. ${svc_t3}</strong>.{{#if svc_ta1}} Property/site details: ${svc_ta1}.{{/if}} I confirm I am not likely to retire before complete recovery of the advance can be effected.' },
    gpf_advance: { label: 'GPF Advance / Withdrawal', group: 'advance', rule: 'General Provident Fund (Central Services) Rules, 1960, as implemented for J&amp;K (not applicable to employees appointed on/after 1.1.2010)', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Accounts Officer.',
      hint: 'CONFIRMED: GPF (Central Services) Rules, 1960 apply only to J&amp;K UT employees appointed BEFORE 1 January 2010 (later entrants are on NPS, with a voluntary GPF-account option per SRO-12 dated 1.1.2018, without further employer GPF contribution). This session did not separately confirm J&amp;K-specific advance/withdrawal ceilings. Use this type to request written confirmation of your own current terms from your DDO/Accounts Officer.',
      extraFields: [{ id: 'svc_t1', label: 'Purpose (education / illness / housing / vehicle / other)', type: 'text' }, { id: 'svc_t2', label: 'Amount Requested (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Application for GPF Advance / Withdrawal',
      bodyTemplate: 'I request that a GPF advance/withdrawal of <strong>Rs. ${svc_t2}</strong> be sanctioned for the purpose of <strong>${svc_t1}</strong>, under the General Provident Fund (Central Services) Rules, 1960, as implemented for J&amp;K UT employees.{{#if svc_ta1}} ${svc_ta1}{{/if}} The current permissible cap has been confirmed with my DDO/Accounts Officer.' },

    gpf_query: { label: 'GPF — Terms / Balance Confirmation Query', group: 'service', rule: 'General Provident Fund (Central Services) Rules, 1960, as implemented for J&amp;K', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / the Accountant General (A&amp;E), Jammu &amp; Kashmir.',
      hint: 'CONFIRMED: GPF (Central Services) Rules, 1960 do not apply to employees appointed on/after 1 January 2010 (they are on NPS instead, with an optional voluntary GPF savings account per SRO-12 dated 1.1.2018). Use this type to request written confirmation of your own current balance and eligibility from your DDO/the Accountant General (A&amp;E), Jammu &amp; Kashmir.',
      extraFields: [{ id: 'svc_t1', label: 'Nature of Query (balance / advance eligibility / nomination / other)', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'GPF — Terms / Balance Confirmation Query',
      bodyTemplate: 'I request written confirmation of my current General Provident Fund status, specifically: <strong>${svc_t1}</strong>.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
    pension_status_query: { label: 'Pension Scheme Status — Confirmation / Query (NPS; OPS Restoration Ruled Out)', group: 'service', rule: 'NPS cutoff 1.1.2010 for J&amp;K UT employees; OPS restoration explicitly ruled out by the J&amp;K Government (reported Feb. 2026)', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / HRMS / the J&amp;K Finance Department.',
      hint: 'CONFIRMED: employees appointed ON OR AFTER 1 JANUARY 2010 are on the National Pension System (NPS), not the earlier GPF/pension-rules-based track. UNLIKE SIKKIM (this app\'s one OPS-restoration success story), THE J&amp;K GOVERNMENT HAS EXPLICITLY RULED OUT RESTORING THE OLD PENSION SCHEME, citing fiscal-sustainability concerns (multiple corroborating Kashmir-focused sources, reported February 2026) — pension expenditure was cited as having roughly doubled from Rs. 731 crore (2004-05) to Rs. 1,495 crore. Employee associations continue campaigning for restoration; this session found no indication that campaign has succeeded. Use this type to request written confirmation of your own current scheme status from your DDO/HRMS/the Finance Department.',
      extraFields: [{ id: 'svc_date1', label: 'Date of Appointment', type: 'date' }, { id: 'svc_t2', label: 'Current Scheme, if known, &amp; PRAN, if applicable', type: 'text', placeholder: 'Optional' }, { id: 'svc_ta1', label: 'Nature of query / request', type: 'textarea', full: true }],
      subject: 'Pension Scheme Status — Confirmation / Query',
      bodyTemplate: 'Having been appointed to Government service on <strong>${svc_date1}</strong>{{#if svc_t2}}, and presently understood to be on: ${svc_t2},{{/if}} I request written confirmation of my current pension scheme status.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },

    family_pension: { label: 'Family Pension — Claim / Intimation', group: 'estate', rule: 'Jammu and Kashmir Family Pension-cum-Gratuity Rules, 1964 (Schedule XV, J&amp;K CSR Vol. II), as amended', family: 'letter', noRemarksBlock: true,
      hint: 'PRIMARY-SOURCE-CONFIRMED, VERY CURRENT FIGURES: Death-cum-Retirement Gratuity ceiling is Rs. 25 lakh, effective 1 January 2024 (raised from Rs. 20 lakh, per the Regulations\' own escalator clause tied to Dearness Allowance reaching 50% of basic pay). ENHANCED FAMILY PENSION (where a Government servant dies AFTER retirement) is payable for 7 YEARS, or until the deceased would have attained age 67, whichever is earlier — per an amendment reported just days before this file was written (21 July 2026). Emoluments for gratuity purposes (basic pay + admissible DA) apply for retirements/deaths on/after 1.1.2006; gratuity is to be disbursed within 3 months of the application date. This session did NOT independently confirm the Family Pension NORMAL-rate percentage for J&amp;K specifically — confirm all current entitlements with your DDO/HRMS/the Directorate of Pension before relying on any figure.',
      extraFields: [{ id: 'svc_date1', label: 'Date of Death', type: 'date' }, { id: 'svc_t2', label: "Claimant's Relationship to the Deceased", type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Family Pension — Claim / Intimation',
      bodyTemplate: 'I write to intimate the death of the above-named Government employee on <strong>${svc_date1}</strong>, and to request that Family Pension and Death-cum-Retirement Gratuity, as admissible under the Jammu and Kashmir Family Pension-cum-Gratuity Rules, 1964, be sanctioned in favour of the eligible member(s) of the family.{{#if svc_t2}} Claimed relationship to the deceased: ${svc_t2}.{{/if}}{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
    deceased_dues_indemnity: { label: "Indemnity Bond — Deceased Employee's Dues", group: 'estate', rule: 'J&amp;K Treasury procedure (no distinct form number independently confirmed this session)', family: 'letter', noRemarksBlock: true,
      hint: 'This session could not confirm whether J&amp;K maintains its own distinct indemnity-bond form number for claiming a deceased employee\'s dues — confirm the current form and any surety requirement with your Treasury Officer/DDO/HRMS before executing this bond.',
      extraFields: [{ id: 'svc_date1', label: 'Date of death of employee', type: 'date' }, { id: 'svc_t1', label: 'Name of Claimant(s)', type: 'text' }, { id: 'svc_t2', label: 'Relationship of Claimant(s) to Deceased', type: 'text' }, { id: 'svc_t3', label: 'Amount Claimed (₹)', type: 'text' }, { id: 'svc_ta1', label: "Claimant's address / surety details, if required", type: 'textarea', full: true }],
      subject: "Indemnity — Claim for Deceased Employee's Dues",
      bodyTemplate: 'I/We, <strong>${svc_t1}</strong>, ${svc_t2} of the deceased <strong>${name}</strong>, request payment of the pay, leave salary and other emoluments due, amounting to <strong>Rs. ${svc_t3}</strong>, in respect of death on <strong>${svc_date1}</strong>, and undertake to furnish an indemnity bond (with sureties, if required) in the form currently prescribed by the Treasury.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
  },
};
