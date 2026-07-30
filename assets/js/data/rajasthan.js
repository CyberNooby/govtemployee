/* =============================================================================
   RAJASTHAN — data for state-tool-engine.js. See assets/js/data/kerala.js for
   the schema reference, and assets/js/data/chhattisgarh.js / gujarat.js for
   the prior examples of this file's research/honesty discipline (primary-
   source PDF extraction, rule-by-rule citation, honest hedging over invented
   figures).

   THE CENTRAL FINDING THIS SESSION, STATED UP FRONT — RAJASTHAN GOVERNMENT
   EMPLOYEES ARE CURRENTLY ON THE OLD PENSION SCHEME (OPS), NOT NPS, AND THIS
   HAS NOT BEEN REVERSED BY THE STATE'S SUBSEQUENT CHANGE OF GOVERNMENT: the
   National Pension System applied to Rajasthan civil service employees
   appointed on/after 1.1.2004 (per the State Insurance & Provident Fund
   Department's own NPS background page, sipf.rajasthan.gov.in/
   NPSBackgroundInformation.aspx). That SAME page — read directly this
   session, last updated by the department on 23.09.2025, i.e. nearly two
   years into the BJP government that took office in December 2023 — states
   verbatim: "In compliance with order no. F.12(2)FD/Rules/2022 Jaipur dated
   19-05-2022 and F.12(3)FD/Rules/2022 Jaipur dated 19-05-2022, OPS is
   implemented in place of NPS from 01-04-2022." This was the Ashok
   Gehlot/Congress government's 2022 OPS-restoration decision (the same wave
   Chhattisgarh's file documents for Chhattisgarh) — and the fact that the
   BJP government's own department page still states it in force, unqualified,
   as of a September 2025 update, is the strongest evidence available this
   session that it has NOT been reversed. Operationally, this was further
   formalised — not undone — under the BJP government: a "Rajasthan Rajya
   Karmchari Samanya Pravidhayi Nidhi Niyam, 2024" (Rajasthan State Employees
   General Provident Fund Rules, 2024; Notification No. F.2(2)FD/Rules/2024,
   Jaipur, dated on/about 12.10.2024 — read this session via
   sipf.rajasthan.gov.in's "OPSRules.aspx" page, filed there under the
   filename "GPF Notification(OPS Rules) 542-92.pdf") explicitly defines a
   named "GPF-2004" fund category, alongside plain GPF and "GPF-SAB" (for
   PSU/autonomous-body/board/corporation employees), for "employees appointed
   on/after 1.4.2004" — i.e. the very cohort NPS used to cover — with
   compulsory GPF subscription for pre-1.4.2004 employees (Rule 3(1)) and a
   more nuanced voluntary/opt-in subscription mechanism for the GPF-2004 and
   GPF-SAB cohorts (Rule 3(2)) whose precise mechanics this session could not
   fully resolve (see the OPS/GPF type hints below). Net effect: do not assume
   NPS still applies to a Rajasthan state employee appointed after 1.1.2004 —
   the 'service' category below is built around GPF/OPS accordingly, with an
   explicit status-confirmation type for anyone unsure of their own case.

   A GENUINE METHODOLOGICAL FINDING WORTH RECORDING FOR FUTURE SESSIONS —
   THIS SESSION SOLVED THE "LEGACY NON-UNICODE HINDI FONT" PROBLEM THAT
   CHHATTISGARH'S FILE COULD ONLY FLAG, NOT FIX: chhattisgarh.js documents a
   failure mode where pdftotext extracts a non-empty but garbled text layer
   from certain Rajasthan/Chhattisgarh-government PDFs (legacy Kruti
   Dev/DevLys/Chanakya-family Hindi fonts whose glyph codepoints don't map to
   Unicode) and notes OCR can't help "in the way MP's session fixed its
   scanned-image problem" because that session had no tool to rasterise the
   PDF pages into images for OCR to read. This session hit the identical
   garbled-text symptom on two Rajasthan documents (the OPS/GPF-2004
   notification above, and the State Insurance Scheme FAQ PDF below) — but
   this session's environment DID have PyMuPDF (`fitz`, importable from the
   system Python) and Tesseract with a Hindi language pack, so both documents
   were rasterised to PNG at 300 dpi with PyMuPDF and then OCR'd with
   `tesseract -l hin+eng`, which produced clean, directly readable Devanagari
   text — because OCR reads the rendered glyph shapes (which display
   correctly in any PDF viewer), not the PDF's broken text-layer codepoints.
   This is a real fix for the failure mode, not just a workaround, and it
   should be tried before conceding defeat on any future non-Unicode-Hindi-
   font PDF in this app, provided a rasteriser (PyMuPDF/pdftoppm/Ghostscript)
   is available in the session's environment. Where this file cites OCR'd
   text, it says so, and flags the handful of individual digits/figures where
   OCR legibility was genuinely uncertain (e.g. one mid-tier insurance
   premium figure, and the exact day-of-month on the 2024 GPF notification).

   PRIMARY-SOURCE ACCESS THIS SESSION — genuinely strong for the leave code:
   both volumes of "THE RAJASTHAN SERVICE RULES" (RSR, 1951; Administrative
   Reforms (Gr.7) Department; Volume-I, "Eighth Edition, Compiled upto
   01.07.2026", and Volume-II) were downloaded from
   finance.rajasthan.gov.in/docs/rules/rsr/rsrrules.pdf and
   rsrrules-vol-II.pdf and extracted to clean, directly-readable text via
   pdftotext with NO OCR needed — a genuinely current, actively-maintained
   compilation (its own stated compile date is essentially "now" for this
   session), not a stale scan. Every RSR leave-rule number, sub-clause,
   day-count and amendment-notification citation below (Rules 23, 91, 91-A,
   91-B, 91-C, 92, 93, 93-A, 96, 99-102, 103, 103-A, 103-B, 103-C, 105-108)
   is a direct read of that text, including the inline amendment footnotes
   RSR's own compilation preserves (each rule is presented current-text-first
   with a dated "substituted vide FD Notification No. ..." footnote, followed
   by the superseded historical text for reference — this file cites only the
   current, top-of-section text unless a hint says otherwise). The
   "Rajasthan Civil Services (Pension) Rules, 1996" were also downloaded and
   read in full (finance.rajasthan.gov.in/PDFDOCS/RULES/pensionrules.pdf,
   found live via the Wayback Machine's CDX index after the site's own
   in-page rules menu turned out to be ASP.NET postback links with no plain
   URL) — but that document's own title states it is "AMENDED UPTO 31ST MAY
   2007", roughly two decades staler than the RSR volumes, which is the
   specific reason this file does not assert current rupee/percentage figures
   for family pension and death/retirement gratuity (see the estate-category
   hints) — those are almost certainly Pay-Commission-revised since 2007, but
   no Rajasthan-specific revision order was independently read this session.

   INSURANCE — "Rajasthan Government Servants' Insurance Rules, 1998"
   (Rajasthan Sarkari Karmchari Bima Niyam, 1998 — replacing 1953 rules;
   confirmed via the State Insurance & Provident Fund Department's own Hindi
   FAQ PDF, sipf.rajasthan.gov.in/FAQ/FAQ SI 27-04-23.pdf, OCR'd this
   session per the methodology note above). This is Rajasthan's own
   state-employee endowment life-insurance scheme — distinct from the
   Central "Group Insurance Scheme (All India Services)" also referenced
   on the same department's site, which covers IAS/IPS/IFS officers under a
   separate, centrally-administered scheme and is NOT the type modelled
   below. Coverage phase-in dates, current premium slabs (Order No.
   F.13(24)Finance/Revenue/76 Part, Jaipur, dated 13.03.2020), the sum-assured
   formula, bonus structure and payout rules are all cited from that OCR'd
   text — see the insurance-type hints for the one premium-slab figure this
   session could not read with full confidence.

   CASUAL LEAVE — confirmed, by its absence from both RSR volumes' full text
   (no "Casual Leave" or "Special Casual Leave" rule exists anywhere in
   either volume — confirmed by direct full-text search this session, not
   merely unresearched), to sit entirely outside the Rajasthan Service Rules,
   exactly as in Chhattisgarh/Gujarat/Maharashtra — administered instead by
   General Administration Department / Department of Personnel circular. This
   session could not independently locate that circular: dop.rajasthan.gov.in
   renders almost no content to a plain HTTP fetch (it appears to be a
   JavaScript single-page application) and no separate GAD circular index
   comparable to the Finance Department's own document archive was located.
   No day-count is asserted for either Casual Leave or Special Casual Leave
   below — confirm your current entitlement with your DDO.

   ADVANCES — a genuinely mixed result, reported honestly rather than
   levelled out: House Building Advance IS confirmed to exist and to be
   currently governed by a dedicated scheme, cited in the Rajasthan Treasury
   Rules, 2012 itself (Rule 224/225: "deduction on account of repayment...
   of all long term advances e.g. House Building Advance shall be governed
   as per the new scheme of Government of Rajasthan issued vide notification
   no. 8(2)/2004 dated 24.04.2004") — a real notification number and date,
   though this session did not locate and read that notification's own text,
   so no ceiling amount or interest rate is asserted. "Conveyance Advance" is
   Rajasthan's own GFAR-era term for what other states in this app call
   Motor Vehicle/Car Advance — confirmed to exist by name via cross-references
   in both the RCS (Pension) Rules, 1996 (its "no-dues" clearance appendices
   list "House Building Advance, House Repairs Advance and Conveyance
   Advance" together) and RSR Volume-II's leave-account forms (which include
   a recovery-instalment line for "motor car/cycle advance") — but, as with
   HBA, no ceiling or interest rate was independently read this session (the
   General Financial & Account Rules (GF&AR) itself, which both Rules point
   to as the governing instrument, is published behind an ASP.NET postback
   link on finance.rajasthan.gov.in with no plain PDF URL this session could
   resolve — a postback-simulation attempt via curl also failed). Festival
   Advance — present in both Gujarat's and Chhattisgarh's files, each with at
   least a dated circular reference even without a rupee figure — could NOT
   be found in ANY form for Rajasthan this session, across the RSR volumes,
   the Pension Rules, the Treasury Rules, or the Finance/SIPF department
   pages crawled. It is deliberately OMITTED below rather than included on
   no evidence at all; this is a considered omission, not an oversight.

   ESTATE / FAMILY PENSION — Rule 61 (admissibility) and Rule 62 (rates) of
   the RCS (Pension) Rules, 1996 were read in full: normal-rate family
   pension is 30% of "emoluments" (the rule's own 1996-dated floor/ceiling
   figures — minimum Rs. 1,275/month, maximum 30% of the then-highest
   Government pay of Rs. 24,850/month effective 1.7.1996 — are NOT asserted
   as current; see the staleness note above), rising to an enhanced rate of
   50% of last-drawn pay (or twice the normal rate, whichever is less) for 7
   years or until the deceased would have turned 65, whichever is shorter,
   where the deceased had 7+ years' continuous service (Rule 62(ii)-(iii)).
   Rule 55 gives the Death/Retirement Gratuity table by service length (2x
   emoluments under 1 year; 6x from 1-5 years; 12x from 5-20 years; half a
   month's emoluments per completed six-monthly period beyond that, capped at
   33x, for 20+ years), with retirement gratuity itself at one-fourth
   emoluments per completed six-monthly period up to a max of 16½ times
   emoluments (Rule 55(1)(a)) — again, the rule's own stated ceiling of
   "3.5 lacs rupees" (per a 1998 amendment effective 1.1.1997) is NOT
   asserted as current, for the same 2007-compile-date staleness reason. On
   death in service, RSR's own Rule 91-C separately entitles the family to a
   lump-sum cash payment for the deceased's unutilised Privilege Leave (up to
   300 days) — cited in the family-pension type's hint as an additional,
   RSR-sourced (not Pension-Rules-sourced) entitlement. No distinct
   Rajasthan Treasury Rules indemnity-bond form number (analogous to Kerala's
   K.F.C. Form No. 9) was confirmed this session.

   DELIBERATELY OMITTED, WITH REASONS — Rule 93-A (Special Medical Leave to
   TB-suffering members of the Police Subordinate Service specifically) is
   real and was read in full, but its eligibility is narrow enough (one
   specific service cadre, one specific disease) that, consistent with how
   this app's other state files treat comparably narrow provisions, it is
   left out as an applicant-facing type. Rule 94 (Terminal Leave) and the
   Section VI Study Leave rules (109-119) are likewise omitted — Terminal
   Leave because it is an administrative extension-of-rules provision rather
   than something an employee applies for, and Study Leave for the same
   reason chhattisgarh.js gives (no prior state file in this app models it as
   an applicant-facing type). "Compensatory Leave" (duty performed on a
   holiday) was searched for across both RSR volumes and not found in any
   form — omitted rather than assumed by analogy to other states.
   ============================================================================= */
window.STATE_DATA = window.STATE_DATA || {};
window.STATE_DATA.rajasthan = {
  key: 'rajasthan', name: 'Rajasthan',
  heroTitle: 'Rajasthan — RSR &amp; Service Forms',
  heroMeta: 'leave, State Insurance, GPF/OPS &amp; family pension matters, under the Rajasthan Service Rules, 1951 and the Rajasthan Civil Services (Pension) Rules, 1996',
  idFieldLabel: 'Employee ID',
  coverLetter: false,

  groupOrder: [
    { slot: 'general', name: 'General Leave (Privilege Leave)' },
    { slot: 'lwa', name: 'Extraordinary Leave (EOL)' },
    { slot: 'family', name: 'Family &amp; Medical Leave' },
    { slot: 'casual', name: 'Casual &amp; Special Leave' },
    { slot: 'insurance', name: 'State Insurance Scheme' },
    { slot: 'service', name: 'Service &amp; Establishment Matters' },
    { slot: 'advance', name: 'Advances &amp; Loans' },
    { slot: 'estate', name: 'Family Pension / Estate Claims' },
  ],

  profileFields: [
    { id: 'name', label: 'Full Name', type: 'text', required: true },
    { id: 'pen', label: 'Employee ID', type: 'text', required: true },
    { id: 'designation', label: 'Post Held', type: 'text', required: true },
    { id: 'office', label: 'Office &amp; Department', type: 'text', required: true, full: true, placeholder: 'e.g., O/o the Collector, Jaipur' },
    { id: 'dob', label: 'Date of Birth', type: 'date', required: true },
    { id: 'entry', label: 'Date of Entry into Service / Commencement of Continuous Service', type: 'date', required: true },
    { id: 'pay', label: 'Pay', type: 'text', required: true, placeholder: 'e.g., Pay Matrix Level 10' },
  ],
  formExtraFields: [
    { id: 'allowances', label: 'HRA / Other Compensatory Allowances Drawn', type: 'text', placeholder: 'Optional' },
    { id: 'holidays', label: 'Sundays/Holidays Prefixed/Suffixed to Leave, if any', type: 'text', placeholder: 'e.g., Nil' },
    { id: 'last_leave', label: 'Date of Return from Last Leave (&amp; nature of that leave)', type: 'text', placeholder: 'e.g., 05/01/2026 (Privilege Leave) or NA' },
  ],
  formRows: [
    { label: '1. Name of applicant &amp; Employee ID', template: '${name} (Employee ID: ${pen})' },
    { label: '2. Rule under which applied for', template: '${rule}' },
    { label: '3. Post held', field: 'designation' },
    { label: '4. Office and Department', field: 'office' },
    { label: '5. Pay', field: 'pay' },
    { label: '6. Date of entry into service / commencement of continuous service', field: 'entry' },
    { label: '7. HRA/other compensatory allowances drawn in present post', field: 'allowances' },
    { label: '8. Nature and period of leave applied for', template: '${nature} for ${duration_str}<br>from ${start} to ${end}' },
    { label: '9. Sundays and holidays, if any, prefixed/suffixed to leave', field: 'holidays' },
    { label: '10. Ground on which leave is applied for', field: 'reason' },
    { label: '11. Date of return from last leave, and the nature and period of that leave', field: 'last_leave' },
    { label: '12. Leave address, if granted', field: 'address' },
  ],

  types: {
    privilege_leave: { label: 'Privilege Leave (PL / Earned Leave)', group: 'general', rule: 'Rule 91, Rajasthan Service Rules, 1951', family: 'leave', nature: 'Privilege Leave', defaultReason: 'Private affairs',
      hint: 'Rajasthan’s RSR calls Earned Leave "Privilege Leave" (PL). 30 days/year, credited in advance in two instalments of 15 days each on 1 January and 1 July (Rule 91(1)(a), (2)(a)(i)); accumulation currently capped at 300 days (Rule 91(1)(c)(i), as raised from 240 days by FD Notification No. F.1(5)FD/Rules/96 dated 2.4.1998 w.e.f. 1.1.1998). Maximum grantable at a time is ordinarily 120 days (Rule 91(2)); up to 180 days if wholly/partly spent abroad in specified neighbouring countries, for non-Class-IV employees (Rule 91, Exception (2)); up to 300 days at a time if for treatment of T.B., leprosy, cancer or a mental disease in a recognised Sanatorium/Hospital (Rule 91(3), as raised from 180 to 300 days by the same 1998 notification). All figures are a direct read of a clean-text RSR extraction — no OCR involved.' },
    half_pay_leave: { label: 'Half Pay Leave (HPL)', group: 'general', rule: 'Rule 93(1), Rajasthan Service Rules, 1951', family: 'leave', nature: 'Half Pay Leave', defaultReason: 'Private affairs',
      hint: '20 days in respect of each completed year of service (Rule 93(1)(a)); grantable on medical certificate or for private affairs (Rule 93(1)(b)). The rule text read this session does not itself state a semi-annual advance-crediting mechanism (unlike Privilege Leave’s explicit two-instalment rule) — confirm your DDO’s actual crediting practice. No accumulation ceiling is stated in the rule.' },
    commuted_leave: { label: 'Commuted Leave', group: 'general', rule: 'Rule 93(2)/(c), Rajasthan Service Rules, 1951', family: 'leave', medCert: true, nature: 'Commuted Leave (in lieu of Half Pay Leave)', defaultReason: 'Medical treatment (Medical Certificate enclosed)',
      declarationTemplate: 'I undertake that this commuted leave is debited against my Half Pay Leave account at twice the number of days availed, as required under Rule 93, Rajasthan Service Rules, 1951, and that I shall refund the difference between the leave salary drawn during commuted leave and that admissible during half pay leave should I resign or retire voluntarily from service without returning to duty.',
      hint: 'Up to half of the Half Pay Leave due, on medical certificate, debited at twice the number of days availed against the Half Pay Leave account (Rule 93(c)(ii)); capped at 240 days over the entire service (Rule 93(c)(i)); the combined duration of Privilege Leave and Commuted Leave taken in conjunction is capped at 240 days generally, extending to 300 days for T.B./leprosy/cancer/mental-disease treatment in a recognised institution (Rule 93(c)(iii)-(iv)); up to 180 days may separately be commuted, without a medical certificate, for an approved course of study certified to be in the public interest (Rule 93(2)(ii)). Not grantable unless the sanctioning authority believes the employee will return to duty on its expiry.' },
    leave_not_due: { label: 'Leave Not Due', group: 'general', rule: 'Rule 93(3)/(d), Rajasthan Service Rules, 1951', family: 'leave', nature: 'Leave Not Due', defaultReason: 'Medical treatment (Medical Certificate enclosed)',
      declarationTemplate: 'I undertake to refund the leave salary drawn during this Leave Not Due, which would not have been admissible had Rule 93, Rajasthan Service Rules, 1951 not been applied, in the event of my resignation or voluntary retirement from service before earning it back through future Half Pay Leave accrual.',
      hint: 'Only where the sanctioning authority is satisfied there is a reasonable prospect of the employee returning to duty (Rule 93(3)(a)); limited to the Half Pay Leave likely to be earned thereafter, against which it is debited (Rule 93(3)(b),(d)); capped at 360 days in the entire service, of which not more than 90 days at a time and up to 180 days in all may be granted otherwise than on medical certificate (Rule 93(3)(c)); not admissible preparatory to retirement.' },

    extraordinary_leave: { label: 'Extraordinary Leave (EOL)', group: 'lwa', rule: 'Rule 96, Rajasthan Service Rules, 1951', family: 'leave', needsRouting: true, nature: 'Extraordinary Leave',
      hint: 'Granted only when no other leave is admissible, or when the employee applies in writing in preference to other admissible leave (Rule 96(a)). For an employee not in permanent employ, ordinarily capped at 3 months (extendable to 18 months for T.B./leprosy treatment subject to conditions, or 2 years for higher studies not covered by Study Leave, per an amendment inserted 19.1.2022) on any one occasion; no separate per-occasion cap is stated in the text read this session for permanent employees. All extraordinary leave is subject to the general rule that NO leave of any kind may be granted for a continuous period exceeding 5 years (Rule 23) — beyond that, removal from service may follow unless the Governor determines otherwise. Carries no leave salary and is not debited to the leave account.',
      declarationTemplate: 'I understand that no leave salary is admissible during Extraordinary Leave (Rule 96, Rajasthan Service Rules, 1951), and that the duration applied for is within the 5-year continuous-absence limit prescribed under Rule 23.',
      extraFields: [{ id: 'purpose', label: 'Purpose / Nature of Extraordinary Leave', type: 'text', full: true, placeholder: 'e.g., private employment, higher studies, joining spouse, medical treatment' }] },

    maternity: { label: 'Maternity Leave', group: 'family', rule: 'Rule 103, Rajasthan Service Rules, 1951', family: 'leave', medCert: true, nature: 'Maternity Leave', defaultReason: 'Confinement for childbirth',
      hint: 'Up to 180 days from the date of commencement, for a female employee with fewer than 2 surviving children (Rule 103, as raised from 135 to 180 days by FD Notification No. F.1(43)FD/(Gr.2)/83 dated 11.10.2008); full pay; not debited to the leave account. Ordinarily grantable twice during the entire service; if there is no surviving child even after availing it twice, it may be granted on one further occasion. A 2022 Finance Department clarification (Memorandum No. F.1(6)FD(Rules)/2021, effective retrospectively from 7.12.2020 per a High Court judgment) allows a reduced period of Maternity Leave to an employee who was not yet in Government service at the time of the child’s birth, if she joins within the confinement window and applies within 15 days of joining — a genuinely unusual, specifically-Rajasthan provision.' },
    miscarriage: { label: 'Miscarriage / Abortion Leave', group: 'family', rule: 'Note below Rule 103, Rajasthan Service Rules, 1951', family: 'leave', medCert: true, nature: 'Leave for Miscarriage / Abortion', defaultReason: 'Miscarriage / Abortion',
      hint: 'Granted under the same Rule 103 machinery as Maternity Leave, for a female employee with fewer than 2 surviving children: up to a total of six weeks during the entire service, in one or two occasions, on production of a medical certificate from the authorised medical attendant. ‘Abortion’ for this purpose does not include ‘threatened abortion’, per a Finance Department clarification read this session.' },
    paternity: { label: 'Paternity Leave', group: 'family', rule: 'Rule 103-A, Rajasthan Service Rules, 1951', family: 'leave', nature: 'Paternity Leave', defaultReason: 'Delivery of child by spouse',
      hint: '15 days, for a male employee with fewer than 2 surviving children, available up to 15 days before and up to 3 months after the delivery — a maximum of two occasions during the entire service; lapses if not availed within this window. Full pay; not debited to the leave account; may be combined with any other kind of leave. NOT allowed in the case of miscarriage/abortion of the employee’s wife.' },
    child_adoption: { label: 'Child Adoption Leave', group: 'family', rule: 'Rule 103-B, Rajasthan Service Rules, 1951', family: 'leave', nature: 'Child Adoption Leave', defaultReason: 'Legal adoption of a child',
      hint: 'For a female employee with fewer than 2 surviving children who validly adopts a child below 1 year of age — up to 180 days immediately after the date of adoption; full pay; not debited to the leave account; may be combined with leave of any other kind. As read this session, restricted to female employees (unlike Rajasthan’s own Child Care Leave, which was specifically extended to single male employees in 2020 — see below).',
      extraFields: [{ id: 'fam_date', label: 'Date of Adoption', type: 'date' }, { id: 'fam_info1', label: 'Age of Child at Adoption', type: 'text', placeholder: 'Optional' }] },
    child_care_leave: { label: 'Child Care Leave', group: 'family', rule: 'Rule 103-C, Rajasthan Service Rules, 1951 (inserted 22.5.2018, substantially amended 31.7.2020)', family: 'leave', nature: 'Child Care Leave', defaultReason: 'Care of child (education/illness/other need)',
      hint: 'Up to 730 days (2 years) during the entire service, for a female Government servant OR a single male Government servant (unmarried, widower or divorcee, per the rule’s own 2020-inserted Explanation), for the care of their two eldest surviving children — a child below 18, or a child with 40%+ disability. Leave salary: 100% of pay for the first 365 days, 80% of pay for the next 365 days (as revised by the 31.7.2020 amendment, up from 100% throughout under the original 2018 text). Cannot be claimed as a matter of right; not more than 3 spells in a calendar year, minimum 5 days per spell; ordinarily not granted during probation; not debited against any other leave account; treated like Privilege Leave for sanctioning, including prefix/suffix of Sundays/holidays.',
      extraFields: [{ id: 'fam_info1', label: "Child's Name", type: 'text' }, { id: 'fam_date', label: "Child's Date of Birth", type: 'date' }, { id: 'fam_ta1', label: 'Purpose (education / illness / other specific need)', type: 'textarea', full: true }] },
    special_disability_leave: { label: 'Special Disability Leave', group: 'family', rule: 'Rules 99-102, Rajasthan Service Rules, 1951', family: 'leave', medCert: true, nature: 'Special Disability Leave', defaultReason: 'Injury sustained in the course of official duty',
      hint: 'For disability caused by injury intentionally inflicted (Rule 99), or in consequence of the due performance of official duty, or accidentally incurred in the course of duty (Rule 102) — including, per a specific insertion, injury on election duty. Disability must generally manifest within 3 months of the occurrence, though Government may condone a later manifestation if satisfied as to cause (Rule 99(ii)). Period certified by a Medical Board, capped at 24 months per disability (Rule 99(iv)); counts as duty for pension (Rule 99(vi)). Leave salary: first 120 days (60 days for Class IV) at full leave-salary rate, remainder at half pay or, at the employee’s option, average pay debited against the Privilege Leave account (Rule 99(vii)-(viii)).' },
    hospital_leave: { label: 'Hospital Leave', group: 'family', rule: 'Rules 105-108, Rajasthan Service Rules, 1951', family: 'leave', medCert: true, nature: 'Hospital Leave', defaultReason: 'Injury sustained in the course of official duty',
      hint: 'Restricted to Class IV employees and specific Ministerial/Subordinate staff whose pay at admission to hospital is below Rs. 31,000/month (Rule 105, as last revised by FD Notification No. F.1(4)FD(Rules)/2017-II dated 30.12.2017, effective 1.1.2017) and whose duties involve handling dangerous machinery, explosives or poisonous drugs, or hazardous tasks — not a general-purpose sick leave. Illness/injury must be directly due to risk incurred in the course of official duty. Leave salary under Rule 97(1) or 97(2), for such period as the sanctioning authority considers necessary; combinable with other leave (Rule 108).' },

    casual_leave: { label: 'Casual Leave (CL)', group: 'casual', rule: 'General Administration Department / Department of Personnel circular (Casual Leave does not appear anywhere in the Rajasthan Service Rules, 1951 and is administered separately)', family: 'letter', needsRouting: true, nature: 'Casual Leave', subject: 'Application for Casual Leave', defaultReason: 'Personal / domestic affairs',
      hint: 'Confirmed this session, by full-text search of both RSR volumes, that Casual Leave is NOT part of the Rajasthan Service Rules at all — the same arrangement as Chhattisgarh, Gujarat and Maharashtra, where it sits outside the statutory leave code under a General Administration Department/Department of Personnel circular. That circular could not be located this session (dop.rajasthan.gov.in renders almost no content to a plain fetch, appearing to be a JavaScript application, and no comparable GAD circular index was found). No day-count is asserted — confirm your current-year balance with your DDO.',
      bodyTemplate: 'I request you to kindly grant me Casual Leave for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, on account of <strong>${reason}</strong>.' },
    special_casual_leave: { label: 'Special Casual Leave', group: 'casual', rule: 'General Administration Department / Department of Personnel circular (no Rajasthan-specific circular listing recognised reasons/day-limits independently confirmed this session)', family: 'letter', needsRouting: true, nature: 'Special Casual Leave', subject: 'Application for Special Casual Leave', defaultReason: '',
      hint: 'Most Indian state governments maintain a circular listing recognised Special Casual Leave reasons (e.g. blood donation, sports events, sterilisation) and day-limits, of the kind Kerala’s Appendix VII, Section II sets out — no Rajasthan-specific circular of this kind could be located this session. State your specific reason below and confirm the applicable day-limit and any required proof with your DDO before applying.',
      bodyTemplate: 'I request you to kindly grant me Special Casual Leave for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, on account of: <strong>${reason}</strong>.' },

    si_nomination: { label: 'State Insurance Scheme — Nomination', group: 'insurance', rule: 'Rajasthan Government Servants’ Insurance Rules, 1998 (State Insurance &amp; Provident Fund Department)', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / the State Insurance &amp; Provident Fund Department.',
      hint: 'The "Rajasthan Sarkari Karmchari Bima Niyam, 1998" (Rajasthan Government Servants’ Insurance Rules, 1998, replacing 1953-dated rules) was read this session via an OCR’d departmental FAQ PDF (see the file header’s methodology note). Coverage phased in by category: 1.8.1943 for erstwhile Jaipur State employees, 1.1.1954 for Rajasthan Government employees generally, 1.4.1989 for Panchayat Samiti/Zila Parishad staff, 1.4.1995 (compulsory) for regularised workcharge employees, and 1.4.1998 for Public Sector Undertaking employees (subject to 50%+ of that PSU’s staff agreeing) and optionally for Rajasthan-cadre All India Service officers. An employee becomes insured on completing 2 years’ probation, with the first premium deducted the following March. Current monthly premium slabs, per Order No. F.13(24)Finance/Revenue/76 Part dated 13.03.2020: pay up to Rs. 22,000 — Rs. 800/month; Rs. 28,501-46,500 — Rs. 2,200/month; Rs. 46,501-72,000 — Rs. 3,000/month; above Rs. 72,000 — Rs. 5,000/month; maximum total monthly deduction (including any voluntary extra cover) Rs. 7,000/month. One slab (Rs. 22,001-28,500) was legible via OCR but its exact rupee figure was not — confirm it with your DDO. Only Endowment policies are currently issued (Whole Life policies were issued in the past). Sum assured = an age-at-entry multiplier × monthly premium; up to four types of bonus apply, including a Reversionary Bonus that stood at Rs. 90/thousand sum assured/year on Endowment policies for FY 2019-20 per the same FAQ’s own dated table — a historical baseline only; confirm the current rate. Contributions are eligible for Income Tax deduction under Section 80C.',
      extraFields: [{ id: 'svc_t1', label: 'Nominee Name', type: 'text' }, { id: 'svc_t2', label: 'Nominee Relationship', type: 'text' }, { id: 'svc_t3', label: 'Share, if more than one nominee', type: 'text' }],
      subject: 'State Insurance Scheme — Nomination / Change of Nomination',
      bodyTemplate: 'I submit my nomination under the Rajasthan Government Servants’ Insurance Rules, 1998, as follows: <strong>${svc_t1}</strong>, ${svc_t2}.{{#if svc_t3}} Share: ${svc_t3}.{{/if}}' },
    si_claim: { label: 'State Insurance Scheme — Claim (Maturity / Death / Surrender)', group: 'insurance', rule: 'Rajasthan Government Servants’ Insurance Rules, 1998 (State Insurance &amp; Provident Fund Department)', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / the State Insurance &amp; Provident Fund Department.',
      hint: 'Per the departmental FAQ read this session: on the policy’s maturity date, the sum assured plus bonus is paid to the insured; on death before maturity, double the sum assured plus bonus is paid to the nominee; on leaving State service before maturity without choosing another option, a surrender value (based on a scheduled factor tied to the policy’s elapsed duration) is paid instead. The State Government guarantees payment of these benefits from the Consolidated Fund of the State.',
      extraFields: [{ id: 'svc_date1', label: 'Date of Death / Maturity / Leaving Service', type: 'date' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'State Insurance Scheme — Claim (Maturity / Death / Surrender)',
      bodyTemplate: 'I submit this claim under the Rajasthan Government Servants’ Insurance Rules, 1998, on account of the event dated <strong>${svc_date1}</strong>.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },

    ops_status_query: { label: 'OPS/GPF Status Confirmation / Query', group: 'service', rule: 'FD Orders No. F.12(2)FD/Rules/2022 &amp; F.12(3)FD/Rules/2022 (both dated 19.05.2022) and the Rajasthan State Employees General Provident Fund Rules, 2024 (Notification No. F.2(2)FD/Rules/2024)', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / the State Insurance &amp; Provident Fund (SIPF) Department.',
      hint: 'The National Pension System (NPS) applied to Rajasthan civil service employees appointed on/after 1.1.2004. Per the SIPF Department’s own website (read directly this session, last updated by the department 23.9.2025): "OPS is implemented in place of NPS from 01-04-2022", under the two FD orders cited. This was then formalised via the Rajasthan State Employees General Provident Fund Rules, 2024 (read this session via OCR — see the file header), which define a distinct "GPF-2004" fund category for employees appointed on/after 1.4.2004, alongside plain GPF (pre-1.4.2004 employees, compulsory subscription) and "GPF-SAB" (PSU/autonomous-body/board/corporation employees). This session could NOT fully resolve the precise voluntary-vs-compulsory subscription mechanics for the GPF-2004/GPF-SAB cohort specifically (Rule 3(2) of the 2024 Rules describes a voluntary-subscription option that, once chosen, becomes binding going forward) — if you were appointed on/after 1.1.2004 and are unsure whether you are on GPF-2004 or still notionally under NPS, use this type to request written confirmation of your status and, if applicable, adjustment of any NPS corpus into your GPF-2004 account.',
      extraFields: [{ id: 'svc_date1', label: 'Date of Appointment', type: 'date' }, { id: 'svc_t1', label: 'Former NPS PRAN, if known', type: 'text', placeholder: 'Optional' }, { id: 'svc_ta1', label: 'Nature of query / request', type: 'textarea', full: true }],
      subject: 'OPS/GPF Status Confirmation — Request',
      bodyTemplate: 'Having been appointed to Government service on <strong>${svc_date1}</strong>{{#if svc_t1}}, and previously enrolled under the National Pension System (PRAN: ${svc_t1}){{/if}}, I request written confirmation of my current pension/provident-fund status following the restoration of the Old Pension Scheme for Rajasthan Government employees with effect from 1.4.2022, and any consequent action regarding my GPF-2004 account.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
    gpf_advance: { label: 'GPF Advance / Withdrawal', group: 'service', rule: 'Rajasthan State Employees General Provident Fund Rules, 2024 (Notification No. F.2(2)FD/Rules/2024), applicable to employees on GPF, GPF-2004 or GPF-SAB', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / the State Insurance &amp; Provident Fund Department.',
      hint: 'This session read the scope, definitions and nomination provisions (the first several pages) of the Rajasthan State Employees General Provident Fund Rules, 2024 via OCR (see the file header) but did not examine its advance/withdrawal chapters in depth — no current interest rate, minimum-subscription percentage, or permissible advance ceiling is asserted here. If you were appointed before 1.4.2004, or fall under the GPF-2004/GPF-SAB categories described in the OPS/GPF Status type above, confirm the current figures with your DDO/the State Insurance &amp; Provident Fund Department before applying.',
      extraFields: [{ id: 'svc_t1', label: 'Purpose (education / illness / housing / vehicle / other)', type: 'text' }, { id: 'svc_t2', label: 'Amount Requested (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Application for GPF Advance / Withdrawal',
      bodyTemplate: 'I request that a GPF advance/withdrawal of <strong>Rs. ${svc_t2}</strong> be sanctioned for the purpose of <strong>${svc_t1}</strong>. I confirm I hold a General Provident Fund account under the Rajasthan State Employees General Provident Fund Rules, 2024.{{#if svc_ta1}} ${svc_ta1}{{/if}} I have confirmed the current permissible amount with my DDO/the State Insurance &amp; Provident Fund Department.' },
    pl_encashment_service: { label: 'Privilege Leave Encashment (While in Service)', group: 'service', rule: 'Rule 91-A, Rajasthan Service Rules, 1951', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / the authority competent to sanction Privilege Leave.',
      hint: 'On surrender of Privilege Leave not exceeding 15 days in a financial year, after completing at least 1 year of service (current provision, per FD Orders dated 3.4.2008 and 6.2.2009 — this facility was, per the RSR’s own compiled amendment history, put "in abeyance" around 2000-2002 before being revived from FY 2008-09 "and onwards"; no notification superseding the 2009 order was found in the text read this session, so it is treated as current, but confirm with your DDO). Leave salary calculated per Rule 97 plus Dearness Allowance, on the rate of pay drawn on the date of application; no GPF deduction is made from this encashment payment.',
      extraFields: [{ id: 'svc_t1', label: 'Days of Privilege Leave Surrendered', type: 'text' }],
      subject: 'Application for Privilege Leave Encashment (While in Service)',
      bodyTemplate: 'I request that <strong>${svc_t1}</strong> day(s) of my Privilege Leave be accepted as surrendered under Rule 91-A, Rajasthan Service Rules, 1951, and that leave encashment be sanctioned accordingly. I confirm I have completed at least 1 year of service and have not exceeded my entitlement under this rule during the current financial year.' },
    pl_encashment_retirement: { label: 'Privilege Leave Cash Payment on Retirement', group: 'service', rule: 'Rule 91-B, Rajasthan Service Rules, 1951', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Head of Office.',
      hint: 'On retirement (superannuation, invalid, compensation or retirement pension under Rules 50/53, Rajasthan Civil Services (Pension) Rules, 1996), cash equivalent of leave salary for unutilised Privilege Leave up to 300 days at credit, paid as a one-time lump sum, calculated as (pay + Dearness Allowance admissible on the date of retirement) × (unutilised PL days, capped at 300) ÷ 30. Not admissible where compulsorily retired as a penalty under the Rajasthan Civil Services (CC&amp;A) Rules, 1958; may be withheld pending conclusion of pending disciplinary/criminal proceedings (Rule 91-B(7)).',
      extraFields: [{ id: 'svc_date1', label: 'Date of Retirement', type: 'date' }, { id: 'svc_t1', label: 'Unutilised Privilege Leave (days)', type: 'text' }],
      subject: 'Application for Privilege Leave Cash Payment on Retirement',
      bodyTemplate: 'I request that cash payment in lieu of my unutilised Privilege Leave of <strong>${svc_t1}</strong> day(s), as admissible under Rule 91-B, Rajasthan Service Rules, 1951, be sanctioned in connection with my retirement on <strong>${svc_date1}</strong>.' },

    hba: { label: 'House Building / House Repairs Advance', group: 'advance', rule: 'Government of Rajasthan notification no. 8(2)/2004 dated 24.04.2004, referenced in Rule 224/225, Rajasthan Treasury Rules, 2012', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your Head of Department / DDO.',
      hint: 'Confirmed to exist and to be governed by a dedicated Government of Rajasthan scheme — the Rajasthan Treasury Rules, 2012 itself states that recovery of "all long term advances e.g. House Building Advance shall be governed as per the new scheme of Government of Rajasthan issued vide notification no. 8(2)/2004 dated 24.04.2004." That notification’s own text was not located and read this session, so no eligibility, ceiling amount, or interest rate is asserted — confirm current terms with your DDO/Head of Department before applying. The Rajasthan Civil Services (Pension) Rules, 1996 also separately reference "House Repairs Advance" alongside House Building Advance in its retirement no-dues appendices, suggesting the two may be treated together administratively.',
      extraFields: [{ id: 'svc_t1', label: 'Purpose (construction / purchase / extension / repair)', type: 'text' }, { id: 'svc_t2', label: 'Estimated Cost (₹)', type: 'text' }, { id: 'svc_t3', label: 'Advance Amount Required (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Property / site details', type: 'textarea', full: true }],
      subject: 'Application for House Building / House Repairs Advance',
      bodyTemplate: 'I request that a House Building/House Repairs Advance be sanctioned to me for the purpose of <strong>${svc_t1}</strong>. The estimated cost is <strong>Rs. ${svc_t2}</strong>, and the advance amount required is <strong>Rs. ${svc_t3}</strong>.{{#if svc_ta1}} Property/site details: ${svc_ta1}.{{/if}} I enclose the documents required under the applicable scheme.' },
    conveyance_advance: { label: 'Conveyance Advance (Motor Vehicle/Cycle)', group: 'advance', rule: 'General Financial &amp; Account Rules (GF&amp;AR), Government of Rajasthan (referenced in Rule 91(2)(a)(ii)/Vol-II leave-account forms, Rajasthan Service Rules, and the Rajasthan Civil Services (Pension) Rules, 1996)', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your Head of Department / DDO.',
      hint: 'Rajasthan’s own term (per RSR Volume-II’s leave-account forms, and the Pension Rules’ retirement no-dues appendices, both read this session) for what other states in this app call Motor Vehicle/Car Advance. Both instruments confirm it exists and point to the General Financial &amp; Account Rules (GF&amp;AR) as the governing instrument, but this session could not locate a plain, directly-fetchable URL for the GF&amp;AR itself (it is published behind an ASP.NET postback link on finance.rajasthan.gov.in; a postback-simulation attempt via curl also failed) — no eligibility, ceiling amount, or interest rate is asserted. Confirm current terms with your DDO/Head of Department before applying.',
      extraFields: [{ id: 'svc_t1', label: 'Type of Vehicle', type: 'text' }, { id: 'svc_t2', label: 'Estimated Cost (₹)', type: 'text' }, { id: 'svc_t3', label: 'Advance Amount Required (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Application for Conveyance Advance',
      bodyTemplate: 'I request that a Conveyance Advance be sanctioned to me for the purchase of <strong>${svc_t1}</strong>. The estimated cost is <strong>Rs. ${svc_t2}</strong>, and the advance amount required is <strong>Rs. ${svc_t3}</strong>.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },

    family_pension: { label: 'Family Pension — Claim / Intimation', group: 'estate', rule: 'Rules 55, 61, 62 &amp; 91-C, Rajasthan Civil Services (Pension) Rules, 1996 and Rajasthan Service Rules, 1951', family: 'letter', noRemarksBlock: true,
      hint: 'Rules 61 (admissibility) and 62 (rates) of the RCS (Pension) Rules, 1996 were read directly this session: normal-rate family pension is 30% of emoluments; where the deceased had 7+ years’ continuous service, an enhanced rate of 50% of last-drawn pay (or twice the normal rate, whichever is less) applies for 7 years or until the deceased would have turned 65, whichever is shorter (Rule 62(ii)-(iii)). Death/Retirement Gratuity (Rule 55) is normally claimed alongside Family Pension on death in service, at a rate scaled by qualifying service length (2x/6x/12x emoluments under 1/1-5/5-20 years respectively, then half a month’s emoluments per completed six-monthly period beyond 20 years, capped at 33x). IMPORTANT: the source document for these rules is itself titled "AMENDED UPTO 31ST MAY 2007" — roughly two decades stale relative to the RSR volumes used elsewhere in this file — so the rule’s own 1996/1997-dated rupee and percentage-ceiling figures (e.g. the Rs. 3.5 lakh gratuity ceiling, and the Rs. 1,275 minimum/Rs. 24,850-based maximum for normal-rate family pension) are almost certainly superseded by subsequent Pay Commission revisions; NO current figure is asserted here — confirm with the Directorate of Pension, Government of Rajasthan. Separately, RSR’s own Rule 91-C entitles the family to a lump-sum cash payment for the deceased’s unutilised Privilege Leave (up to 300 days), calculated the same way as Rule 91-B’s retirement payment — mention this separately when filing your claim if applicable.',
      extraFields: [{ id: 'svc_date1', label: 'Date of Death', type: 'date' }, { id: 'svc_t2', label: "Claimant's Relationship to the Deceased", type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Family Pension — Claim / Intimation',
      bodyTemplate: 'I write to intimate the death of the above-named Government employee on <strong>${svc_date1}</strong>, and to request that Family Pension, as admissible under Rule 62, Rajasthan Civil Services (Pension) Rules, 1996, be sanctioned in favour of the eligible member(s) of the family, along with the Death Gratuity admissible under Rule 55 and, if applicable, the cash payment for unutilised Privilege Leave admissible under Rule 91-C, Rajasthan Service Rules, 1951.{{#if svc_t2}} Claimed relationship to the deceased: ${svc_t2}.{{/if}}{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
    deceased_dues_indemnity: { label: "Indemnity Bond — Deceased Employee's Dues", group: 'estate', rule: 'Rajasthan Treasury Rules, 2012 / General Financial &amp; Account Rules (no distinct form number independently confirmed this session)', family: 'letter', noRemarksBlock: true,
      hint: 'The Rajasthan Treasury Rules, 2012 confirm that indemnity bonds are used in connection with certain time-barred and other claims, but this session could not confirm a distinct, dedicated form number for a deceased employee’s dues specifically (analogous to Kerala’s K.F.C. Form No. 9) — confirm the current form and any surety requirement with your Treasury Officer/DDO before executing this bond.',
      extraFields: [{ id: 'svc_date1', label: 'Date of death of employee', type: 'date' }, { id: 'svc_t1', label: 'Name of Claimant(s)', type: 'text' }, { id: 'svc_t2', label: 'Relationship of Claimant(s) to Deceased', type: 'text' }, { id: 'svc_t3', label: 'Amount Claimed (₹)', type: 'text' }, { id: 'svc_ta1', label: "Claimant's address / surety details, if required", type: 'textarea', full: true }],
      subject: "Indemnity — Claim for Deceased Employee's Dues",
      bodyTemplate: 'I/We, <strong>${svc_t1}</strong>, ${svc_t2} of the deceased <strong>${name}</strong>, request payment of the pay, leave salary and other emoluments due, amounting to <strong>Rs. ${svc_t3}</strong>, in respect of death on <strong>${svc_date1}</strong>, and undertake to furnish an indemnity bond (with sureties, if required) in the form currently prescribed by the Treasury.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
  },
};
