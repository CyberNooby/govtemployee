/* =============================================================================
   TELANGANA — data for state-tool-engine.js. See assets/js/data/kerala.js
   for the schema reference, assets/js/data/andhrapradesh.js for the closest
   prior example of this file's research/honesty discipline (Telangana was
   bifurcated from undivided Andhra Pradesh in 2014, along with the state now
   called "Andhra Pradesh" — both inherited the same common-origin service
   rules as a starting point), and assets/js/data/karnataka.js for another
   example of the same discipline.

   RULE-ACCURACY NOTE — read before trusting any figure below.

   PRIMARY-SOURCE ACCESS: exactly the same obstacle hit for Andhra Pradesh
   recurred here — every primary-looking PDF found this session (MCRHRDI
   "Telangana State Leave Rules, 1933" training-institute presentations,
   individual G.O. PDFs on treasury.telangana.gov.in, dsa.telangana.gov.in,
   tsso.in, cag.gov.in) came back as a scanned/compressed binary with no
   extractable text layer — no OCR tool was available in this environment.
   Nothing here was read directly off a primary gazette or G.O. page. Every
   rule number, day-count and G.O. citation below was instead corroborated
   across secondary sources that reproduce G.O. text with number and date
   (teachersbadi.in, apteachers.in, tsteachersdiary.in, tsteachersbadi.in,
   guruvu.in, MCRHRDI presentation abstracts surfaced via search snippets).
   Where sources disagreed, or a figure could be found only once, that is
   stated in the item's `hint` rather than silently picking one number.
   Treat every figure below as "well-corroborated by secondary sources," not
   "independently verified against the primary gazette."

   A RECURRING CONTAMINATION RISK THIS SESSION: several AP-and-Telangana
   "teacher portal" sites (apteacher.net, aputf.org, apteachers.in) serve
   mixed AP/TS content, and general-purpose web search summarization
   sometimes attributed an AP-only G.O. to Telangana (e.g. a search answer
   initially asserted Telangana had issued its own CPS→OPS switch G.O. under
   the same number, "G.O.Ms.No.53 dt.13.7.2026" — re-fetching the underlying
   page showed that G.O. is explicitly Andhra Pradesh-only; a separate search
   confirmed Telangana employee unions were, as of this session, still
   *petitioning* the Telangana government to issue an equivalent order — see
   the CPS/OPS note below). Every figure below that looked AP-flavoured was
   re-checked against a source that named "Telangana"/"TS" explicitly before
   being kept; a few could not be re-confirmed and were omitted or hedged
   accordingly.

   BIFURCATION NOTE: the Telangana Leave Rules, 1933 (Telangana's own
   retitling of the same Annexure III to the Fundamental Rules text also
   still used, under its original name, by Andhra Pradesh) and the Telangana
   Revised Pension Rules, 1980 (Telangana's retitling of the same G.O.(P)
   No.80, Fin/Plan, P&C Dept., dt.26.1.1980 text AP also still uses) are
   common-origin rules inherited by both successor states — confirmed by an
   MCRHRDI presentation literally titled "TELANGANA STATE LEAVE RULES, 1933"
   using the same rule numbers (Rules 8–23 etc.) as AP's file. Where a rule
   below is simply that common-origin 1933/1980 text with no TS-specific
   post-2014 amendment found, that is what's being presented — not an
   independently-confirmed TS-only provision. Genuinely TS-specific findings
   (rules Telangana amended on its own, separately from AP, after 2014) are
   flagged explicitly below and in the relevant `hint`.

   GENUINE POST-2014 TELANGANA-SPECIFIC DIVERGENCES FOUND THIS SESSION
   (the most valuable findings for this file — read this list first):
   - Child Care Leave: Telangana's own figure is 90 days in the entire
     service (G.O.Ms.No.209, Finance (HRM-III) Dept, dt.21.11.2016 — 3
     months, max 15 days/spell, min 6 spells), corroborated by two
     independent TS-specific sources (teachersbadi.in, apteachers.in, both
     naming "Telangana" and G.O.209 explicitly). Andhra Pradesh separately
     enhanced its own Child Care Leave to 180 days (G.O.Ms.No.33/2022 &
     G.O.Ms.No.199/2022, per andhrapradesh.js). Telangana has NOT been found
     to have matched that enhancement — this is a genuine, well-corroborated
     divergence, not an oversight.
   - CPS → Old Pension Scheme (OPS) one-time switch option: Andhra Pradesh
     issued G.O.Ms.No.53, Finance (HR.III-Pension & GPF) Dept, dt.13.7.2026
     granting this option (see andhrapradesh.js). Telangana has NOT issued an
     equivalent order — a search this session found Telangana Employees' JAC
     (Chairman V. Lachireddy) petitioning the Telangana government to issue a
     similar G.O., confirming no TS equivalent existed as of this session.
     Deliberately OMITTED from this file for that reason — including it would
     misrepresent an AP-only benefit as available to TS employees.
   - Additional Casual Leave for women employees: Telangana granted this via
     its own G.O.Ms.No.142, Finance (HRM-III) Dept, dt.1.9.2018 (5 extra days
     CL/year) — a different G.O. number and an earlier date than Andhra
     Pradesh's parallel G.O.Ms.No.18, dt.10.3.2021 for the same benefit. Same
     day-count, independently-issued G.O. in each state.
   - Automatic Advancement Scheme: Telangana re-issued this under its own
     G.O.Ms.No.65, Finance Dept, dt.17.6.2021 (tied to Telangana's own
     Revised Pay Scales, 2020), distinct from Andhra Pradesh's G.O.Ms.No.68,
     dt.12.6.2015 (tied to AP's Tenth PRC). Same 6/12/18/24-year structure,
     independently re-issued G.O. in each state, confirming each state runs
     its own Pay Revision Commission cycle post-bifurcation.
   - Festival Advance: Telangana's own G.O.Ms.No.39, Finance Dept,
     dt.15.4.2015, distinct from Andhra Pradesh's G.O.Ms.No.167, dt.20.9.2017
     for what is reportedly the same Rs.7,500 (general) / Rs.5,000 (Class-IV)
     figure — again, independently re-issued in each state (one source gave a
     conflicting 3-tier Rs.7,500/6,000/4,500 GO/NGO/Class-IV breakdown for
     Telangana specifically — flagged in that type's hint rather than picked
     silently).
   - House Building Advance: Telangana's own G.O.Ms.No.37, Finance (HRM.IV)
     Dept, dt.10.4.2015 (tied to Telangana's own "First PRC"), distinct from
     Andhra Pradesh's G.O.Ms.No.174 lineage. Existence and interest rate
     (5% Class IV / 5.5% others) are TS-specific-source-corroborated; the
     exact current ceiling figures conflict across sources this session (see
     that type's hint) — same honesty gap AP's file has, but at least a
     TS-specific governing G.O. number could be identified here.
   - APGLI → TGLI: the scheme was renamed after 2014 (official portal:
     tgli.telangana.gov.in; also referred to as "TSGLI" interchangeably
     across secondary sources) — same historical fund (Hyderabad State Life
     Insurance Fund, 1913 → Andhra Pradesh Government Life Insurance Fund,
     1956 → split naming post-2014). Reported parameters differ in kind from
     what could be found for AP (insurable age 19–56 vs AP's reported 21–53;
     a "max premium 20% of basic pay or Rs.20,000, whichever is less" ceiling
     vs AP's reported ~4%-of-pay minimum-subscription slab) — these may not
     be directly comparable metrics (maximum-allowed vs minimum-required),
     so no contradiction is asserted, but neither figure is presented as
     more than secondary-source-corroborated.

   ITEMS DELIBERATELY OMITTED OR GENERICALLY WORDED THIS SESSION:
   - CPS→OPS switch option: omitted entirely (see above — confirmed not to
     exist for Telangana as of this session).
   - Child Adoption Leave: included, but Telangana's own current day-count
     could NOT be independently confirmed this session. Search results
     repeatedly surfaced Andhra Pradesh's G.O.Ms.No.33, dt.8.3.2022 (180
     days) under queries phrased for Telangana — re-checking the source
     (aputf.org, explicitly headed "GOVERNMENT OF ANDHRA PRADESH ABSTRACT")
     confirmed that G.O. is AP-only. No Telangana-specific adoption-leave G.O.
     or day-count could be independently confirmed — worded generically
     below rather than borrowing AP's figure.
   - "Work Related Illness and Injury Leave (WRILL/WRIIL)": a search for
     Telangana-specific Special Disability Leave surfaced WRILL/WRIIL, but
     every source found for it cited DoPT/CCS (Leave) Rules and Central
     Government rule numbers (Rules 45/46), not Telangana Leave Rules — this
     looks like Central Government content bleeding into a Telangana-scoped
     search rather than a genuine Telangana provision. NOT used; Special
     Disability Leave is presented the same generic way Andhra Pradesh's file
     presents it.
   - Special Casual Leave — Sports: existence and a ~30-day/calendar-year cap
     for national/international events and IMF/YHAI-approved
     mountaineering/trekking is corroborated, but the specific governing
     G.O. number could not be confirmed as Telangana-specific this session
     (a "G.O.Ms.No.270 F&P FWFR-I" surfaced but could not be verified as
     Telangana's own, as opposed to a general/AP citation) — worded
     generically, matching Andhra Pradesh's own treatment of this type.
   - Deceased Employee's Dues indemnity bond: a "Form No. 3-A" and
     Rs.5,000/Rs.7,500 surety thresholds surfaced in search results, but
     could not be confirmed this session as specifically the Telangana/AP
     Financial Code's own form (as opposed to a general Treasury Rules
     convention) — mentioned in the hint as an unconfirmed lead, not asserted
     as fact.
   - Telangana Financial Code: sources this session (dsa.telangana.gov.in,
     treasury.telangana.gov.in) host the "Andhra Pradesh Financial Code" and
     "Andhra Pradesh Treasury Code" verbatim, under their original AP names,
     with no evidence of a formal Telangana-specific renaming or renumbering
     — cited below as "Andhra Pradesh Financial Code (continued in force in
     Telangana)," matching what the sources actually show rather than
     assuming a "Telangana Financial Code" that could not be confirmed.

   ITEMS RESOLVED WITH MORE CONFIDENCE THAN ANDHRA PRADESH'S OWN FILE COULD:
   - Earned Leave accumulation ceiling: andhrapradesh.js explicitly flagged
     this as unresolved this session ("sources gave inconsistent figures").
     For Telangana, three independent sources (tsemployees.in, teachersbadi.in,
     apteachers.in) consistently gave 300 days, enhanced from 240 days
     effective 16.9.2005 via G.O.Ms.No.232, Fin (FR.I) Dept — a pre-2014
     common-origin G.O., so likely true of AP too, but only independently
     corroborated for Telangana this session.
   ============================================================================= */
window.STATE_DATA = window.STATE_DATA || {};
window.STATE_DATA.telangana = {
  key: 'telangana', name: 'Telangana',
  heroTitle: 'Telangana — TS Leave Rules &amp; Service Forms',
  heroMeta: 'leave, insurance, advances &amp; family pension, under the Telangana Leave Rules, 1933 &amp; allied service rules',
  idFieldLabel: 'Employee ID',
  coverLetter: false,

  groupOrder: [
    { slot: 'general', name: 'General Leave' },
    { slot: 'lwa', name: 'Extraordinary Leave' },
    { slot: 'family', name: 'Family & Medical Leave' },
    { slot: 'casual', name: 'Casual & Special Leave' },
    { slot: 'insurance', name: 'TGLI Insurance' },
    { slot: 'service', name: 'Service & Establishment Matters' },
    { slot: 'advance', name: 'Advances & Loans' },
    { slot: 'estate', name: 'Estate / Death Benefit Claims' },
  ],

  profileFields: [
    { id: 'name', label: 'Full Name', type: 'text', required: true },
    { id: 'pen', label: 'Employee ID', type: 'text', required: true },
    { id: 'designation', label: 'Designation', type: 'text', required: true },
    { id: 'office', label: 'Office / Department', type: 'text', required: true, full: true, placeholder: 'e.g., O/o the District Collector, Warangal' },
    { id: 'dob', label: 'Date of Birth', type: 'date', required: true },
    { id: 'entry', label: 'Date of Entry into Service', type: 'date', required: true },
    { id: 'pay', label: 'Pay &amp; Scale of Pay', type: 'text', required: true, placeholder: 'e.g., RPS 2020, Rs 43230' },
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
    earned_leave: { label: 'Earned Leave', group: 'general', rule: 'Rules 8–12, Telangana Leave Rules, 1933 (Superior Service)', family: 'leave', nature: 'Earned Leave', defaultReason: 'Private affairs',
      hint: 'Advance credit of 15 days on 1 Jan and 15 days on 1 Jul (30 days/year) for permanent employees in Superior Service (Rule 8); max grant at a time 120 days, extendable to 180 days if the leave is spent outside India (Rule 11 &amp; G.O.Ms.No.153, Fin (FR.I) Dept, dt.4.5.2010 — a pre-bifurcation, common-origin G.O.). Accumulation ceiling: 300 days, enhanced from 240 days effective 16.9.2005 via G.O.Ms.No.232, Fin (FR.I) Dept — corroborated by 3 independent Telangana-facing sources this session (this figure could not be resolved with confidence for Andhra Pradesh in this tool\'s AP file). Last Grade Service employees are governed by the parallel Rules 17–18 with different credit figures.' },
    half_pay_leave: { label: 'Half Pay Leave', group: 'general', rule: 'Rules 13–15, Telangana Leave Rules, 1933 (Superior Service)', family: 'leave', nature: 'Half Pay Leave', defaultReason: 'Private affairs',
      hint: '20 days credited for every completed year of service (including periods of Extraordinary Leave); no ceiling on accumulation; grantable either on medical certificate or for private affairs. During Half Pay Leave, leave salary is half-pay + half-DA, irrespective of scale of pay. Last Grade Service employees are governed by the parallel Rule 18.' },
    commuted_leave: { label: 'Commuted Leave', group: 'general', rule: 'Rule 15-B, Telangana Leave Rules, 1933', family: 'leave', nature: 'Commuted Leave (in lieu of Half Pay Leave)', defaultReason: 'Medical treatment (Medical Certificate enclosed)',
      declarationTemplate: 'I undertake that this commuted leave is debited against my Half Pay Leave account at double the number of days availed, as required under Rule 15-B, Telangana Leave Rules, 1933, and that I will return to duty on its expiry.',
      hint: 'Max half of the Half Pay Leave due, on medical certificate; max 240 days in the entire service. May not be granted unless the sanctioning authority has reason to believe the Government servant will return to duty on its expiry. Last Grade Service employees are governed by the parallel Rule 18-B.' },
    leave_not_due: { label: 'Leave Not Due', group: 'general', rule: 'Rule 15-C, Telangana Leave Rules, 1933', family: 'leave', nature: 'Leave Not Due', defaultReason: 'Medical treatment (Medical Certificate enclosed)',
      declarationTemplate: 'I undertake to refund the leave salary drawn during this Leave Not Due, which would not have been admissible had Rule 15-C, Telangana Leave Rules, 1933, not been applied, in the event of my resignation or voluntary retirement before earning it back through future Half Pay Leave accrual.',
      hint: 'Granted only on medical certificate, when no Half Pay Leave/Earned Leave balance remains; max 180 days in the entire service; debited against the Half Pay Leave account against future credit.' },

    extraordinary_leave: { label: 'Extraordinary Leave (EOL)', group: 'lwa', rule: 'Rule 16, Telangana Leave Rules, 1933 (Superior Service)', family: 'leave', needsRouting: true, nature: 'Extraordinary Leave',
      hint: 'A single leave type — like Andhra Pradesh\'s, Karnataka\'s and Central Government\'s EOL, not split into Kerala-style named LWA sub-purposes. Granted when no other leave is admissible, or on written request even when other leave is due. No leave salary is payable. Non-permanent employees face internal caps under Rule 23: 3 months (ordinary); 6 months (with 3+ years\' continuous service and a medical certificate); 18 months (tuberculosis/leprosy treatment at a recognised institution); 12 months (cancer or mental illness treatment); 24 months (studies certified to be in the public interest, against a bond). Last Grade Service employees are governed by the parallel Rule 19.',
      declarationTemplate: 'I understand that no leave salary is admissible during Extraordinary Leave under Rule 16, Telangana Leave Rules, 1933, and that the duration applied for is within the limits prescribed for my category and length of service.',
      extraFields: [{ id: 'purpose', label: 'Purpose / Nature of Extraordinary Leave', type: 'text', full: true, placeholder: 'e.g., private employment, higher studies, joining spouse, medical treatment' }] },

    maternity: { label: 'Maternity Leave', group: 'family', rule: 'G.O.Ms.No.152, Finance (FR.I) Dept, dt.4.5.2010', family: 'leave', medCert: true, nature: 'Maternity Leave', defaultReason: 'Confinement for childbirth',
      hint: '180 days on full pay, granted outside the Earned Leave account; admissible only up to 2 surviving children; may be combined with other leave. This is a pre-bifurcation, common-origin G.O. also relied on by Andhra Pradesh\'s file — confirmed as still cited for Telangana specifically by TS-facing sources (tsteachersbadi.in) this session. This tool could not independently confirm a separate Telangana-specific rule/day-count for Miscarriage/MTP leave this session — if applicable to you, confirm the current provision and figure with your DDO before applying under this type.' },
    paternity: { label: 'Paternity Leave', group: 'family', rule: 'G.O.Ms.No.231, Finance &amp; Planning Dept, dt.16.9.2005', family: 'leave', nature: 'Paternity Leave', defaultReason: 'Delivery of child by spouse',
      hint: '15 days on full pay, admissible to married male Government employees with fewer than 2 surviving children; may be availed within 15 days before, or within 6 months of, the date of delivery. Pre-bifurcation, common-origin G.O., corroborated for Telangana specifically by tsteachersdiary.in this session.' },
    child_adoption: { label: 'Child Adoption Leave', group: 'family', rule: 'Telangana Leave Rules / allied G.O.s (Telangana-specific current rule number and day-count not independently confirmed this session)', family: 'leave', nature: 'Child Adoption Leave', defaultReason: 'Legal adoption of a child',
      hint: 'This tool found only Andhra Pradesh\'s own G.O.Ms.No.33, dt.8.3.2022 (180 days) when searching for this benefit — that G.O. is explicitly headed "GOVERNMENT OF ANDHRA PRADESH" and could not be confirmed as applicable to Telangana. No independently-confirmed Telangana-specific adoption-leave G.O. number or day-count was found this session — confirm the current provision and figure with your DDO before applying under this type. Do not assume AP\'s 180-day figure applies here without confirming.' },
    child_care_leave: { label: 'Child Care Leave', group: 'family', rule: 'G.O.Ms.No.209, Finance (HRM-III) Dept, dt.21.11.2016', family: 'leave', nature: 'Child Care Leave', defaultReason: 'Care of a minor child',
      hint: '90 days (3 months) in the entire service, for women employees, to care for the two eldest children up to age 18 (22 for a disabled child); max 15 days per spell, min 6 spells; child must be dependent on and residing with the employee; cannot be combined with Casual Leave, Special Casual Leave or LTC; requires prior sanction. Corroborated by 2 independent Telangana-specific sources (teachersbadi.in, apteachers.in), both naming G.O.209 explicitly. NOTE: this is genuinely lower than Andhra Pradesh\'s own figure of 180 days (enhanced via AP\'s G.O.Ms.No.33/2022 &amp; G.O.Ms.No.199/2022, per this tool\'s Andhra Pradesh file) — Telangana has not been found to have matched that enhancement; do not assume AP\'s 180-day figure applies here.' },
    special_disability_leave: { label: 'Special Disability Leave', group: 'family', rule: 'Telangana Leave Rules, 1933 (rule number not consistently confirmed across sources this session)', family: 'leave', medCert: true, nature: 'Special Disability Leave', defaultReason: 'Injury sustained in the course of official duty',
      hint: 'For a permanent or temporary Government servant disabled by injury intentionally inflicted, or caused in/consequence of the due performance of official duty or official position — including certain road accidents while proceeding on official duty between offices/courts/field work sites, but excluding ordinary residence-to-office commute accidents. Max 24 months per disability; leave salary at full-pay rate for the first 120 days (permanent employees) or 30 days (temporary employees), then at half-pay rate; not debited to any leave account. No separately-named "Hospital Leave" distinct from this could be confirmed for Telangana. A search this session surfaced "Work Related Illness and Injury Leave (WRILL/WRIIL)" as a possible successor to this leave type, but every source for it cited Central Government DoPT/CCS (Leave) Rules, not Telangana Leave Rules — not used here as it could not be confirmed as a Telangana-specific provision.' },

    casual_leave: { label: 'Casual Leave', group: 'casual', rule: 'Telangana Leave Rules, 1933, Appendix (Casual Leave)', family: 'letter', needsRouting: true, nature: 'Casual Leave', subject: 'Application for Casual Leave', defaultReason: 'Personal / domestic affairs',
      hint: '15 days per calendar year, credited proportionately for mid-year appointments; max continuous absence (CL combined with holidays) ordinarily 10 days; unavailed leave lapses at year-end; treated as duty. Corroborated by 4+ independent Telangana-facing sources this session.',
      bodyTemplate: 'I request you to kindly grant me Casual Leave for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, on account of <strong>${reason}</strong>.' },
    scl_blood: { label: 'Special Casual Leave — Blood Donation', group: 'casual', rule: 'G.O.Ms.No.137, dt.23.2.1984', family: 'letter', needsRouting: true, nature: 'Special Casual Leave for Blood Donation', subject: 'Application for Special Casual Leave — Blood Donation', defaultReason: 'Voluntary blood donation',
      hint: '1 day (the day on which blood is donated), on production of a certificate from the Blood Bank/Hospital. Pre-bifurcation, common-origin G.O. — Andhra Pradesh\'s own file reports this as a 2-day benefit (1 day of donation + 1 day within 6 months); sources found for Telangana this session described only the 1-day donation-date benefit — this discrepancy is noted rather than silently reconciled; confirm current entitlement with your DDO.',
      bodyTemplate: 'I request you to kindly grant me Special Casual Leave for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, on account of voluntary blood donation: <strong>${reason}</strong>. A certificate from the Blood Bank/Hospital is enclosed.' },
    scl_family_planning: { label: 'Special Casual Leave — Family Planning (Sterilisation)', group: 'casual', rule: 'G.O.Ms.No.1415, dt.10.6.1968 &amp; G.O.Ms.No.102, dt.19.2.1981', family: 'letter', needsRouting: true, nature: 'Special Casual Leave for Family Planning', subject: 'Application for Special Casual Leave — Family Planning', defaultReason: 'Sterilisation operation',
      hint: '6 days (Vasectomy, male employee); 7 days (husband, on wife\'s Tubectomy); 14 days (Tubectomy, female employee); 14 days (Salpingectomy following Medical Termination of Pregnancy, female employee); 21 days (Recanalisation, either spouse) — all on production of a medical certificate from the operating officer/hospital. Pre-bifurcation, common-origin G.O.s. Andhra Pradesh\'s own file cites later, different G.O. numbers (G.O.Ms.No.607/1991 &amp; G.O.Ms.No.124/1982) for a broadly similar but not identical set of day-counts — it is unclear from this session\'s sources whether those later amending G.O.s also apply to Telangana; confirm current entitlement with your DDO.',
      bodyTemplate: 'I request you to kindly grant me Special Casual Leave for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, on account of: <strong>${reason}</strong>. A medical certificate from the operating officer/hospital is enclosed.' },
    scl_sports: { label: 'Special Casual Leave — Sports / National or International Events', group: 'casual', rule: 'Telangana Leave Rules, 1933 (specific G.O./rule number not independently confirmed this session)', family: 'letter', needsRouting: true, nature: 'Special Casual Leave for Sports', subject: 'Application for Special Casual Leave — Sports', defaultReason: 'Representing State/Country in a sporting event',
      hint: 'Reported as up to 30 days/calendar year for representing the State or Country at a national or international sporting event, and separately up to 30 days/calendar year for Indian Mountaineering Foundation / Youth Hostels Association of India-approved mountaineering/trekking expeditions. A "G.O.Ms.No.270 F&amp;P FWFR-I" surfaced in search results but could not be independently confirmed as Telangana-specific this session; confirm the current governing G.O./rule number with your DDO before applying.',
      bodyTemplate: 'I request you to kindly grant me Special Casual Leave for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, on account of: <strong>${reason}</strong>.' },
    scl_women_additional: { label: 'Special Casual Leave — Additional (Women Employees)', group: 'casual', rule: 'G.O.Ms.No.142, Finance (HRM-III) Dept, dt.1.9.2018', family: 'letter', needsRouting: true, nature: 'Special Casual Leave (Additional, Women Employees)', subject: 'Application for Special Casual Leave (Additional, Women Employees)', defaultReason: 'Personal / domestic affairs',
      hint: '5 additional days of Casual Leave per calendar year for all women employees of the Telangana State Government, over and above the standard 15 days Casual Leave. This is a Telangana-specific G.O., independently issued and pre-dating Andhra Pradesh\'s own parallel G.O.Ms.No.18, dt.10.3.2021 for the same benefit — same day-count (5), different G.O. number and date in each state.',
      bodyTemplate: 'I request you to kindly grant me Special Casual Leave (Additional, Women Employees) for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, under G.O.Ms.No.142, dt.1.9.2018, on account of <strong>${reason}</strong>.' },

    tgli_proposal: { label: 'TGLI — New Policy Proposal', group: 'insurance', rule: 'Telangana Government Life Insurance Fund Rules (successor to the Andhra Pradesh Government Life Insurance Fund Rules; renamed post-2014)', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / the TGLI Divisional/District Office.',
      hint: 'TGLI (also referred to as TSGLI across secondary sources; official portal tgli.telangana.gov.in) is a compulsory life insurance scheme for Telangana State Government employees, descended from the same Hyderabad State Life Insurance Fund (1913) / Andhra Pradesh Government Life Insurance Fund (1956) lineage APGLI also descends from, renamed after the 2014 bifurcation. Reported insurable age: 19–56 years. Reported premium ceiling: maximum 20% of basic pay or Rs.20,000/month (inclusive of premium on all policies), whichever is less — this is a different kind of figure from Andhra Pradesh\'s reported ~4%-of-pay *minimum* subscription slab, so no direct contradiction is asserted, but neither figure was independently verified against a primary rule text this session — confirm current terms with your TGLI office.',
      extraFields: [{ id: 'svc_t1', label: 'Sum Assured Proposed (₹)', type: 'text' }, { id: 'svc_t2', label: 'Nominee Name', type: 'text' }, { id: 'svc_t3', label: 'Nominee Relationship', type: 'text' }],
      subject: 'Proposal — Telangana Government Life Insurance (TGLI)',
      bodyTemplate: 'I request that I may be enrolled as a policyholder under the Telangana Government Life Insurance (TGLI) scheme, with a Sum Assured of <strong>${svc_t1}</strong>. I nominate <strong>${svc_t2}</strong>{{#if svc_t3}} (${svc_t3}){{/if}} to receive the benefits under this policy in the event of my death.' },
    tgli_claim: { label: 'TGLI — Claim (Maturity / Death)', group: 'insurance', rule: 'Telangana Government Life Insurance Fund Rules (successor to the Andhra Pradesh Government Life Insurance Fund Rules; renamed post-2014)', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / the TGLI Divisional/District Office.',
      extraFields: [{ id: 'svc_date1', label: 'Date of Maturity / Date of Death', type: 'date' }, { id: 'svc_t1', label: 'Policy Number', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Claim — Telangana Government Life Insurance (TGLI)',
      bodyTemplate: 'I submit this claim in respect of TGLI Policy No. <strong>${svc_t1}</strong>, on account of the event dated <strong>${svc_date1}</strong>.{{#if svc_ta1}} ${svc_ta1}{{/if}} I enclose the policy document, the prescribed indemnity bond (where applicable) and supporting documents.' },

    gpf_advance: { label: 'GPF Advance', group: 'service', rule: 'General Provident Fund (Andhra Pradesh) Rules, 1935, as continued in force in Telangana', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Treasury.',
      hint: 'Applies only if you were recruited before 1.9.2004 (GPF; a pre-bifurcation, common-origin cutoff) — employees recruited on/after that date are covered by CPS/NPS instead. Minimum subscription: 6% of basic pay (fixed on the basic pay drawn on 31 March of the preceding financial year), not exceeding basic pay. Interest rate is revised periodically by the Finance Department — confirm the current rate with your DDO/Treasury.',
      extraFields: [{ id: 'svc_t1', label: 'Purpose (education / illness / housing / vehicle / other)', type: 'text' }, { id: 'svc_t2', label: 'Amount Requested (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Application for GPF Advance',
      bodyTemplate: 'I request that a GPF advance of <strong>Rs. ${svc_t2}</strong> be sanctioned for the purpose of <strong>${svc_t1}</strong>. This applies since I was recruited before 1.9.2004.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
    nps_reg: { label: 'CPS / NPS Subscriber Registration', group: 'service', rule: 'Contributory Pension Scheme (CPS) — mandatory for Telangana state employees recruited on/after 1.9.2004', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO.',
      hint: 'Employee contributes 10% of Basic Pay + DA; Telangana-facing sources this session consistently describe the Government matching contribution as also 10% (not raised to 14% as some other jurisdictions have done) — this was found single-summarised rather than corroborated across multiple independent primary-quoting sources, so confirm the current matching rate with your DDO before relying on it. PRAN is allotted by NSDL via the CPS PRAN Facilitation Centre.',
      extraFields: [{ id: 'svc_date1', label: 'Date of joining service', type: 'date' }, { id: 'svc_t1', label: 'Bank account number &amp; branch (for CPS/NPS)', type: 'text' }, { id: 'svc_t2', label: 'Nominee Name', type: 'text' }, { id: 'svc_t3', label: 'Nominee Relationship', type: 'text' }],
      subject: 'Application for CPS/NPS Subscriber Registration',
      bodyTemplate: 'I request that I be registered as a subscriber under the Contributory Pension Scheme (CPS/NPS), having joined service on <strong>${svc_date1}</strong>. My bank account for this purpose is <strong>${svc_t1}</strong>, and I nominate <strong>${svc_t2}</strong>{{#if svc_t3}} (${svc_t3}){{/if}} as my nominee. My DDO will process this through the CPS PRAN Facilitation Centre for PRAN allotment.' },
    automatic_advancement: { label: 'Automatic Advancement Scheme — Option', group: 'service', rule: 'G.O.Ms.No.65, Finance Dept, dt.17.6.2021', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Head of Office.',
      hint: 'Telangana\'s long-standing substitute for regular promotion where none is available due to non-availability of vacancies — not the same scheme as Central Government\'s MACP, though it serves a similar purpose. Periodicity: financial upgradation after 6, 12, 18 and 24 years of continuous service without promotion, tied to Telangana\'s own Revised Pay Scales, 2020. This G.O. is Telangana\'s own, independently issued and distinct from Andhra Pradesh\'s parallel G.O.Ms.No.68, dt.12.6.2015 for the same underlying 6/12/18/24-year structure.',
      extraFields: [{ id: 'svc_date1', label: 'Date from which upgradation is due/claimed', type: 'date' }, { id: 'svc_t1', label: 'Present grade / pay level', type: 'text' }, { id: 'svc_t2', label: 'Years of continuous service without promotion', type: 'text' }],
      subject: 'Automatic Advancement Scheme — Option',
      bodyTemplate: 'I request consideration for a financial upgradation under the Automatic Advancement Scheme (G.O.Ms.No.65, Finance Dept, dt.17.6.2021), effective from <strong>${svc_date1}</strong>. I have completed <strong>${svc_t2}</strong> years of continuous service in my present grade/pay level of <strong>${svc_t1}</strong> without promotion.' },

    hba: { label: 'House Building Advance', group: 'advance', rule: 'G.O.Ms.No.37, Finance (HRM.IV) Dept, dt.10.4.2015 (current rupee ceilings not independently verified)', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your Head of Department.',
      hint: 'This G.O. is Telangana\'s own, independently issued (tied to Telangana\'s "First PRC"), distinct from Andhra Pradesh\'s parallel G.O. lineage. Reported interest rate: 5% p.a. (Class IV employees), 5.5% p.a. (all other employees), repayable in 300 monthly instalments (240 for principal, 60 for interest) — corroborated by a source naming Telangana explicitly. The exact current rupee ceilings conflict across sources found this session: one source reported construction ceilings of roughly Rs.20–35 lakh depending on pay scale, house-site-purchase ceiling of 15× basic pay or Rs.10 lakh, and repair/extension ceiling of 20× basic pay or Rs.6 lakh; another, less detailed source gave a site-purchase figure of 10× basic pay or Rs.2 lakh. These are not reconciled here — confirm the current ceiling applicable to you with your DDO/Finance Department before finalising your application.',
      extraFields: [{ id: 'svc_t1', label: 'Purpose (construction / purchase / extension / repair / site + house)', type: 'text' }, { id: 'svc_t2', label: 'Estimated Cost (₹)', type: 'text' }, { id: 'svc_t3', label: 'Advance Amount Required (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Property / site details', type: 'textarea', full: true }],
      subject: 'Application for House Building Advance',
      bodyTemplate: 'I request that a House Building Advance be sanctioned to me for the purpose of <strong>${svc_t1}</strong>. The estimated cost is <strong>Rs. ${svc_t2}</strong>, and the advance amount required is <strong>Rs. ${svc_t3}</strong>.{{#if svc_ta1}} Property/site details: ${svc_ta1}.{{/if}} I have confirmed the currently applicable ceiling and interest rate with my DDO.' },
    motor_vehicle_advance: { label: 'Motor Cycle / Motor Car Advance', group: 'advance', rule: 'Andhra Pradesh Financial Code (continued in force in Telangana) — specific governing G.O. and current ceiling not independently verified', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your Head of Department.',
      hint: 'Existence of this scheme, alongside HBA, is well-corroborated, but the current rupee ceiling and interest rate could not be verified for Telangana this session — confirm with your DDO before finalising your application.',
      extraFields: [{ id: 'svc_t1', label: 'Type of Vehicle', type: 'text' }, { id: 'svc_t2', label: 'Estimated Cost (₹)', type: 'text' }, { id: 'svc_t3', label: 'Advance Amount Required (₹)', type: 'text' }],
      subject: 'Application for Motor Vehicle Advance',
      bodyTemplate: 'I request that a Motor Vehicle Advance be sanctioned to me for the purchase of <strong>${svc_t1}</strong>. The estimated cost is <strong>Rs. ${svc_t2}</strong>, and the advance amount required is <strong>Rs. ${svc_t3}</strong>.' },
    festival_advance: { label: 'Festival Advance', group: 'advance', rule: 'G.O.Ms.No.39, Finance Dept, dt.15.4.2015', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO.',
      hint: 'Reported as Rs.7,500 (employees on pay scales up to Rs.26,600–77,030) / Rs.5,000 (Class-IV employees), interest-free, recoverable in 10 equal instalments. This G.O. is Telangana\'s own, independently issued and distinct from Andhra Pradesh\'s parallel G.O.Ms.No.167, dt.20.9.2017 for what is reportedly the same figure. One less-detailed source gave a conflicting 3-tier breakdown (Rs.7,500 / Rs.6,000 / Rs.4,500 for G.O./N.G.O./Class-IV employees respectively) — not reconciled here; confirm the current ceiling applicable to your category with your DDO before applying.',
      extraFields: [{ id: 'svc_t1', label: 'Amount Requested (₹)', type: 'text' }],
      subject: 'Application for Festival Advance',
      bodyTemplate: 'I request that a Festival Advance of <strong>Rs. ${svc_t1}</strong> be sanctioned to me, recoverable in equal monthly instalments as prescribed under the current Government Order. I have confirmed the currently applicable ceiling with my DDO.' },

    family_pension: { label: 'Family Pension — Claim / Intimation', group: 'estate', rule: 'Rule 50, Telangana Revised Pension Rules, 1980', family: 'letter', noRemarksBlock: true,
      hint: 'The Telangana Revised Pension Rules, 1980 are Telangana\'s own retitling of the same pre-bifurcation G.O.(P) No.80, Fin/Plan, P&amp;C Dept, dt.26.1.1980 text also still relied on, under its original name, by Andhra Pradesh — same rule numbering (Rules 46–50) in both states\' sources found this session.',
      extraFields: [{ id: 'svc_date1', label: 'Date of Death', type: 'date' }, { id: 'svc_t2', label: 'Claimant\'s Relationship to the Deceased', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Family Pension — Claim / Intimation',
      bodyTemplate: 'I write to intimate the death of the above-named Government servant on <strong>${svc_date1}</strong>, and to request that Family Pension, as admissible under Rule 50, Telangana Revised Pension Rules, 1980, be sanctioned in favour of the eligible member(s) of the family.{{#if svc_t2}} Claimed relationship to the deceased: ${svc_t2}.{{/if}}{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
    deceased_dues_indemnity: { label: "Indemnity Bond — Deceased Employee's Dues", group: 'estate', rule: 'Andhra Pradesh Financial Code (continued in force in Telangana) — specific article/form number not independently confirmed this session', family: 'letter', noRemarksBlock: true,
      hint: 'A "Form No. 3-A" with sureties required for claims over Rs.5,000 (single surety permitted below Rs.7,500) surfaced in search results this session, but could not be confirmed as specifically the Andhra Pradesh/Telangana Financial Code\'s own form, as opposed to a general Treasury Rules convention — mentioned here as an unconfirmed lead, not asserted as fact. Confirm the current form and any surety requirement with your Treasury Officer/DDO before executing this bond.',
      extraFields: [{ id: 'svc_date1', label: 'Date of death of employee', type: 'date' }, { id: 'svc_t1', label: 'Name of Claimant(s)', type: 'text' }, { id: 'svc_t2', label: 'Relationship of Claimant(s) to Deceased', type: 'text' }, { id: 'svc_t3', label: 'Amount Claimed (₹)', type: 'text' }, { id: 'svc_ta1', label: "Claimant's address / surety details, if required", type: 'textarea', full: true }],
      subject: "Indemnity — Claim for Deceased Employee's Dues",
      bodyTemplate: 'I/We, <strong>${svc_t1}</strong>, ${svc_t2} of the deceased <strong>${name}</strong>, request payment of the pay, leave salary and other emoluments due, amounting to <strong>Rs. ${svc_t3}</strong>, in respect of death on <strong>${svc_date1}</strong>, and undertake to furnish an indemnity bond (with sureties, if required) in the form prescribed under the Andhra Pradesh Financial Code, as continued in force in Telangana.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
  },
};
