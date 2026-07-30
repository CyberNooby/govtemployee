/* =============================================================================
   MADHYA PRADESH — data for state-tool-engine.js. See assets/js/data/kerala.js
   for the schema reference, and assets/js/data/gujarat.js for the prior
   example of this file's research/honesty discipline (primary-source PDF
   extraction, rule-by-rule citation, honest hedging over invented figures).
   This is a REWRITE of an earlier draft of this same file that was built from
   secondary case-law citations of the (now superseded) 1977 Rules — that
   draft's own header is worth reading in git history as a record of what a
   WebSearch-budget-exhausted session can and can't responsibly claim; this
   session had a working web-fetch path and, more importantly, found that the
   entire legal landscape it was describing had just changed. See below.

   THE CENTRAL FINDING THIS SESSION, STATED UP FRONT — MP'S LEAVE RULES WERE
   REPLACED WHILE THIS FILE WAS BEING RESEARCHED: Madhya Pradesh's leave code
   was governed for nearly 50 years by the "Madhya Pradesh Civil Services
   (Leave) Rules, 1977" (Notification No. 650/989/77/R-1/IV, Bhopal, 4 August
   1977, in force from 1 October 1977) — a full, clean-text copy of which was
   downloaded and read this session (code.mp.gov.in/WriteReadData/Pdf/
   Rule_1977_0778_Pdf_F1484_English.pdf, extracted via pdftotext, no OCR
   needed). BUT the Madhya Pradesh Cabinet approved a wholesale replacement
   (reported 20 August 2025), the Finance Department notified the "Madhya
   Pradesh Civil Services (Leave) Rules, 2025" (Notification No.
   F.6-4-2025-Niyam-IV [नियम-चार], Bhopal, dated 24 November 2025, signed by
   Manish Rastogi, Additional Chief Secretary, Finance Department — published
   as Gazette Notification No. 362 dated 26 December 2025 per a secondary
   index at indianemployees.com), and Rule 1(2) of that new instrument fixes
   its own commencement at 1 January 2026, with Rule 59 expressly repealing
   the 1977 Rules on that date (savings clause preserves leave already
   earned/sanctioned under the old rules). Given this tool's "today" is late
   July 2026, the 2025 Rules are the CURRENTLY GOVERNING instrument, not the
   1977 Rules — so, unusually for this app's state files, the file below is
   built primarily on a regime barely six months old rather than a
   decades-settled one. The 1977 text was still read in full and is used
   throughout as the baseline for describing what changed and by how much.

   PRIMARY-SOURCE ACCESS TO THE 2025 RULES — genuine, but with a caveat that
   does not apply to any prior state file in this app: the official 2025
   Rules PDF (code.mp.gov.in/WriteReadData/Departments/finance/Rules/
   Madhya_Pradesh_Civil_Service_(Leave)_Rules,_2025.pdf, 40 pages) is a
   SCANNED image with no text layer — pdftotext returned zero characters, the
   same dead end Gujarat's session hit on its Group Insurance PDF. Unlike
   that Gujarat dead end, this session had a working OCR path (Tesseract,
   installed locally, Hindi-trained data) and rendered + OCR'd all 40 pages
   (via PyMuPDF for page rasterisation). The OCR text is genuinely readable
   Hindi prose — rule numbers, structure, and most wording came through
   cleanly — but it has ONE systematic, repeatable failure mode worth
   recording for any future session re-deriving this file: the scan's font
   renders the Western-numeral digit "1" in a way Tesseract repeatedly
   misreads as "4" (so "180" often OCRs as "480", "15" as "45", "10" as
   "40", "1 वर्ष" as "4 वर्ष", etc.), while digits not involving a lone "1"
   (30, 300, 360, 90, 45, 24, 5, 6, 80, 100, 730, 365, 285) came through
   consistently and are NOT suspected of this error. Every figure below drawn
   from the 2025 OCR text was cross-checked for internal consistency (does
   the "corrected" reading match the equivalent 1977 rule's already-clean
   figure, or a distinct but plausible revision of it?) AND cross-corroborated
   against independent secondary summaries of the same 2025 Rules published
   by indianemployees.com, mppatwari.com, mpeducationgyandeep.in, dnpindia.in
   and drishtiias.com before being asserted as a real day-count. Anywhere
   that cross-check was inconclusive, the figure is explicitly hedged in that
   type's hint rather than asserted — see especially Special Disability
   Leave and Child Adoption Leave below.

   THE 2000 CHHATTISGARH BIFURCATION — what this file CAN and CANNOT honestly
   claim: the 1977 Rules read this session predate the November 2000 split of
   Chhattisgarh from undivided Madhya Pradesh, so both successor states
   inherited the SAME 1977 Rules at bifurcation, the same pattern this app's
   andhrapradesh.js/telangana.js files documented for their own 2014 split.
   An earlier draft of this file (see git history) found direct evidence via
   case law that Chhattisgarh was still applying "Rule 17 of M.P. Civil
   Services (Leave) Rules, 1977" as late as December 2006, i.e. Chhattisgarh
   continued the inherited MP rules by adoption for at least six years
   post-bifurcation rather than immediately writing its own. This session did
   not research Chhattisgarh further, so it makes NO claim about whether
   Chhattisgarh has since (in the twenty years since that case) replaced
   those inherited rules with its own renumbered code. What CAN be said with
   confidence: as of the 2025 Rules' 1 January 2026 commencement, Madhya
   Pradesh has now unilaterally replaced its own copy with a new,
   MP-specific instrument (own notification number, own Finance Department
   signatory, own commencement date) — whatever Chhattisgarh is currently
   running is, from this date forward, necessarily a DIFFERENT document from
   Madhya Pradesh's, even if the two were identical as recently as 2006. Do
   not assume MP's 2025 figures apply to Chhattisgarh, or vice versa.

   CASUAL LEAVE — deliberately excluded from the Leave Rules entirely, in
   BOTH the 1977 and 2025 versions: Rule 10's own Explanation (identical
   wording in both, confirmed by direct read of both PDFs) states "Casual
   leave, which is not recognised as leave under these rules, shall not be
   combined with any other kind of leave admissible under these rules" — the
   same carve-out pattern Gujarat's Rule 15 Explanation and Maharashtra's GAD
   arrangement use. A tertiary source (mppolice.gov.in's leave chapter) points
   to a separate "Book Circular II-6" as governing Casual Leave for at least
   one MP department, confirming the circular-based, outside-the-Rules
   administration is real and current, but this session could not locate or
   read a primary General Administration Department circular giving the
   current annual day-count for state employees generally — no figure is
   asserted; see the type's hint.

   GROUP INSURANCE — confirmed to exist by NAME and YEAR only: the "Madhya
   Pradesh Government Employees Group Insurance Scheme, 1985" is referenced
   in circular-title listings at indianemployees.com (e.g. "Launch of Madhya
   Pradesh Government Employees Group Insurance Scheme, 1985" and a separate
   circular on delayed final-payment cases). Those listings also surfaced two
   OTHER scheme names in passing — a "Madhya Pradesh Government Servant
   Employees Insurance-cum-Savings Scheme, 2003" (an earlier session's draft
   of this file treated this 2003 scheme, not the 1985 one, as MP's current
   group insurance arrangement, sourced from case-law citation) and a "Family
   Welfare Fund Scheme" dated 1974 — this session did NOT resolve which of
   the 1985 and 2003 names is the scheme currently in force, or whether one
   superseded the other; this is recorded here so a future session does not
   silently pick one over the other without checking. No contribution rate
   or benefit table for either was read this session (no primary document
   with extractable text was located).

   NPS — genuinely well-sourced this session, unusually so: a Finance
   Department circular (No. F-9/3/2003-Niyam-IV, Bhopal, dated 25 September
   2006 — itself a scanned PDF at finance.mp.gov.in/old/newpensionrule.pdf,
   OCR'd this session) confirms the "Defined Contribution Pension Scheme"
   (referred to informally elsewhere as the New Contributory Pension Scheme,
   2006 / NPS) applies to Government of Madhya Pradesh employees appointed on
   or after 1 January 2005, per an earlier Finance Department memo of the
   same file number dated 13 January 2005 (the 2006 circular is interim
   account-keeping guidance referencing that original 2005 introduction, not
   the introduction itself). This corrects an earlier draft of this file,
   which could not confirm any MP-specific NPS cutoff at all.

   ADVANCES (HBA / Motor Car / Festival Advance) — DELIBERATELY OMITTED, not
   hedged: finance.mp.gov.in's own rules index confirms the Madhya Pradesh
   Financial Code (Vols. I & II) and the Book of Financial Powers exist and
   are current, which is almost certainly where any HBA/Motor Car/Festival
   Advance scheme would be codified — but unlike Gujarat's session (which
   found a specific, dated Finance Department GR transferring HBA/Motor Car
   account administration to a named Directorate), this session found no
   comparable anchor for Madhya Pradesh: no scheme-specific rule name, no
   administering-authority citation, no press corroboration of a current
   Festival Advance announcement. Per this task's discipline, inventing a
   generic "MP Financial Code" citation with no rule number behind it would
   fall short of the honesty bar the Gujarat file set — so the entire
   'advance' category slot is omitted from groupOrder below rather than
   populated with unanchored guesses. A future session with time to read the
   Financial Code volumes directly could likely repopulate this slot
   properly.

   ESTATE / FAMILY PENSION — the "Madhya Pradesh Civil Services (Pension)
   Rules, 1976" is confirmed to exist (finance.mp.gov.in's own rules index)
   and a secondary legal-database index (legitquest.com) points to Rules 47
   and 48 (contributory / non-contributory family pension) and Rules 69 and
   71 (family pension + gratuity on death in service / death of a pensioner)
   as the relevant provisions — but the Pension Rules PDF located this
   session (finance.mp.gov.in) is, like the 2025 Leave Rules, a scanned
   image, and this session did not OCR it (the Leave Rules took priority
   given this file's brief). No percentage-of-pay figure, enhanced-rate
   duration, or gratuity ceiling is asserted below — only the rule numbers
   themselves, sourced from the secondary index, not a primary read.
   ============================================================================= */
window.STATE_DATA = window.STATE_DATA || {};
window.STATE_DATA.madhyapradesh = {
  key: 'madhyapradesh', name: 'Madhya Pradesh',
  heroTitle: 'Madhya Pradesh — MPCS (Leave) Rules, 2025 &amp; Service Forms',
  heroMeta: 'leave, family care, insurance &amp; family pension, under the Madhya Pradesh Civil Services (Leave) Rules, 2025 (in force from 1 January 2026) and the Madhya Pradesh Civil Services (Pension) Rules, 1976',
  idFieldLabel: 'Employee Code',
  coverLetter: false,

  groupOrder: [
    { slot: 'general', name: 'General Leave' },
    { slot: 'lwa', name: 'Extraordinary Leave' },
    { slot: 'family', name: 'Family &amp; Medical Leave' },
    { slot: 'casual', name: 'Casual &amp; Special Leave' },
    { slot: 'insurance', name: 'Group Insurance Scheme' },
    { slot: 'service', name: 'Service &amp; Establishment Matters' },
    { slot: 'estate', name: 'Family Pension / Estate Claims' },
  ],

  profileFields: [
    { id: 'name', label: 'Full Name', type: 'text', required: true },
    { id: 'pen', label: 'Employee Code', type: 'text', required: true },
    { id: 'designation', label: 'Designation / Post Held', type: 'text', required: true },
    { id: 'office', label: 'Section, Office &amp; Department', type: 'text', required: true, full: true, placeholder: 'e.g., Establishment Section, O/o the Collector, Bhopal' },
    { id: 'dob', label: 'Date of Birth', type: 'date', required: true },
    { id: 'entry', label: 'Date of Entry into Service', type: 'date', required: true },
    { id: 'pay', label: 'Basic Pay', type: 'text', required: true, placeholder: 'e.g., Level 6, Rs 35400' },
  ],
  formExtraFields: [
    { id: 'holidays_prefix_suffix', label: 'Public Holiday(s) Proposed to be Prefixed/Suffixed to Leave, if any', type: 'text', full: true, placeholder: 'Optional — see Rule 20' },
  ],
  formRows: [
    { label: '1. Name of applicant &amp; Employee Code', template: '${name} (Employee Code: ${pen})' },
    { label: '2. Post held', field: 'designation' },
    { label: '3. Section, Office and Department', field: 'office' },
    { label: '4. Basic Pay', field: 'pay' },
    { label: '5. Nature and period of leave applied for', template: '${nature} for ${duration_str}<br>from ${start} to ${end}' },
    { label: '6. Public holiday(s) proposed to be prefixed/suffixed', template: '${holidays_prefix_suffix}' },
    { label: '7. Ground on which leave is applied for', field: 'reason' },
    { label: '8. Address during leave', field: 'address' },
  ],

  types: {
    earned_leave: { label: 'Earned Leave (EL)', group: 'general', rule: 'Rule 25, Madhya Pradesh Civil Services (Leave) Rules, 2025', family: 'leave', nature: 'Earned Leave', defaultReason: 'Private affairs',
      hint: '30 days/year, credited in advance in two instalments of 15 days each on 1 January and 1 July (Rule 25(1)); carry-forward accumulation cap raised to 300 days (up from 240 days under the 1977 Rules) — a partial-credit rule applies when the balance is between 285 and 300 days at a half-year end (Rule 25(1)(c)). Ordinarily up to 180 days grantable at a time, extendable up to 300 days if the leave is wholly or partly spent outside India (with the India-spent portion still capped at 180 days) (Rule 25(2)-(3)). The 180/300 figures were OCR-read from a scanned source PDF with a known 1-vs-4 digit-misread risk (raw OCR showed "480") — corrected here to 180 based on internal consistency with the 1977 Rules\' equivalent 120-day figure scaled up, and cross-corroborated against secondary summaries of the 2025 Rules; confirm your current in-hand balance with your DDO.' },
    vacation_dept_earned_leave: { label: 'Earned Leave (Vacation/Teaching Staff)', group: 'general', rule: 'Rule 27, Madhya Pradesh Civil Services (Leave) Rules, 2025', family: 'leave', nature: 'Earned Leave (Vacation Department)', defaultReason: 'Private affairs',
      hint: 'A new, distinct entitlement for teaching/educational staff in vacation departments who were previously excluded from Earned Leave altogether under the 1977 Rules if they availed the full vacation. Under Rule 27, such staff now get 10 days/year, credited in two instalments of 5 days each on 1 January and 1 July, with an additional pro-rata credit (up to a combined cap of 30 days/year) if the vacation of that year was not fully availed (Rule 27(1)). This is one of the more clearly-legible figures in the OCR (5 is not part of the 1-vs-4 misread pattern) and matches independent secondary summaries reporting "10 days annually" for educational staff.' },
    half_pay_leave: { label: 'Half Pay Leave (HPL)', group: 'general', rule: 'Rule 28, Madhya Pradesh Civil Services (Leave) Rules, 2025', family: 'leave', nature: 'Half Pay Leave', defaultReason: 'Private affairs',
      hint: '20 days/year, credited in advance in two instalments of 10 days each on 1 January and 1 July (Rule 28(1)) — unchanged in substance from the 1977 Rules\' 20-days-per-completed-year figure, now expressed as an explicit two-instalment credit. May be granted on medical certificate or for private affairs (Rule 28(3)-(4)); no accumulation ceiling is stated in the rule. The "10-10 days" reading corrects a raw OCR "40-40" via the documented 1-vs-4 digit-misread pattern, cross-corroborated against secondary summaries.' },
    commuted_leave: { label: 'Commuted Leave', group: 'general', rule: 'Rule 29, Madhya Pradesh Civil Services (Leave) Rules, 2025', family: 'leave', medCert: true, nature: 'Commuted Leave (in lieu of Half Pay Leave)', defaultReason: 'Medical treatment (Medical Certificate enclosed)',
      declarationTemplate: 'I undertake that this commuted leave is debited against my Half Pay Leave account at twice the number of days availed, as required under Rule 29, Madhya Pradesh Civil Services (Leave) Rules, 2025, and that I shall refund the difference between the leave salary drawn during commuted leave and that admissible during half pay leave should I resign or retire voluntarily from service without returning to duty.',
      hint: 'Up to half of the Half Pay Leave due, on medical certificate, debited at twice the number of days availed against the Half Pay Leave account (Rule 29(1)); up to 180 days allowed in the entire career without a medical certificate, for an approved course of study certified to be in the public interest (Rule 29(2)) — unchanged from the 1977 Rules\' equivalent provision, and this "180" reads cleanly in the OCR without the 1-vs-4 ambiguity affecting other figures in this file.' },
    leave_not_due: { label: 'Leave Not Due', group: 'general', rule: 'Rule 30, Madhya Pradesh Civil Services (Leave) Rules, 2025', family: 'leave', nature: 'Leave Not Due', defaultReason: 'Medical treatment (Medical Certificate enclosed)',
      declarationTemplate: 'I undertake to refund the leave salary drawn during this Leave Not Due, which would not have been admissible had Rule 30, Madhya Pradesh Civil Services (Leave) Rules, 2025 not been applied, in the event of my resignation or voluntary retirement from service before earning it back through future Half Pay Leave accrual.',
      hint: 'Only where the competent authority is satisfied there is a reasonable prospect of the employee returning to duty (Rule 30(1)(a)); limited to the Half Pay Leave likely to be earned thereafter, against which it is debited (Rule 30(1)(b),(d)); capped at 360 days in the entire career, of which not more than 90 days at a time, and up to 180 days in all without a medical certificate (Rule 30(1)(c)) — the 360/90 figures are unambiguous in the OCR; the 180 corrects a raw OCR "480" via the documented digit-misread pattern and matches the identical figure in the 1977 Rules.' },

    extraordinary_leave: { label: 'Extraordinary Leave (EOL)', group: 'lwa', rule: 'Rule 31, Madhya Pradesh Civil Services (Leave) Rules, 2025', family: 'leave', needsRouting: true, nature: 'Extraordinary Leave',
      hint: 'A single leave type — Madhya Pradesh does not split this into named sub-purposes. Granted only when no other leave is admissible, or when the employee specifically requests it in writing in preference to other admissible leave (Rule 31(1)). No distinct career-aggregate cap is stated in this rule itself; it remains subject to the general 5-year continuous-absence ceiling that applies to leave of any kind (Rule 11, carried over unchanged from Rule 11 of the 1977 Rules). No leave salary is payable and it is not debited to the leave account (Rule 31(3)).',
      declarationTemplate: 'I understand that no leave salary is admissible during Extraordinary Leave (Rule 31, Madhya Pradesh Civil Services (Leave) Rules, 2025), and that the duration applied for is within the 5-year continuous-absence limit prescribed under Rule 11.',
      extraFields: [{ id: 'purpose', label: 'Purpose / Nature of Extraordinary Leave', type: 'text', full: true, placeholder: 'e.g., private employment, higher studies, joining spouse, medical treatment' }] },

    maternity: { label: 'Maternity Leave', group: 'family', rule: 'Rule 36, Madhya Pradesh Civil Services (Leave) Rules, 2025', family: 'leave', medCert: true, nature: 'Maternity Leave', defaultReason: 'Confinement for childbirth',
      hint: 'Up to 180 days from the date of commencement, for a woman government servant with fewer than 2 living children (Rule 36(1)) — raised from the 1977 Rules\' 90 days; full pay; not debited to the leave account (Rule 36(2)); combinable with any other leave (Rule 36(3)). For miscarriage/abortion (including under the MTP Act, 1971), capped at 45 days in the entire career, limited to the period recommended by the medical authority (Rule 36(5)) — this 45-day figure is unambiguous in the OCR and unchanged from the 1977 Rules. Up to 60 days of commuted leave/leave not due may follow without a medical certificate (Rule 36(6)). A new surrogacy provision extends 180 days\' maternity leave (from the child\'s date of birth) to a commissioning mother with fewer than 2 living children where either she or the surrogate mother is a government servant (Rule 36(7)) — the "180" readings here correct a raw OCR "480" via the documented digit-misread pattern, cross-corroborated against secondary summaries of the 2025 Rules.',
      extraFields: [{ id: 'fam_date', label: 'Expected/Actual Date of Delivery', type: 'date' }] },
    paternity: { label: 'Paternity Leave', group: 'family', rule: 'Rule 37, Madhya Pradesh Civil Services (Leave) Rules, 2025', family: 'leave', nature: 'Paternity Leave', defaultReason: 'Delivery of child by spouse',
      hint: '15 days, for a male government servant with fewer than 2 living children, available from 15 days before the expected date of delivery up to 6 months after (Rule 37(1)); no medical certificate required (Rule 37(2)); combinable with any leave except Casual Leave (Rule 37(3)); full pay; not debited to the leave account (Rule 37(4)-(5)); lapses if not availed within the window (Rule 37(6)); the rule states this leave shall "normally not be refused" (Rule 37(8)). A new surrogacy provision extends the same 15 days, within 6 months, to a commissioning father with fewer than 2 living children (Rule 37(7)). All "15" figures here correct a raw OCR "45" via the documented digit-misread pattern, cross-corroborated against secondary summaries and unchanged from the 1977 Rules\' identical 15-day figure.' },
    paternity_adoption: { label: 'Paternity Leave (Adoption)', group: 'family', rule: 'Rule 38, Madhya Pradesh Civil Services (Leave) Rules, 2025', family: 'leave', nature: 'Paternity Leave for Adoption of a Child', defaultReason: 'Legal adoption of a child',
      hint: '15 days, for a male government servant with fewer than 2 living children who adopts a child below the age of 1 year, available within 6 months of the adoption; lapses if not availed within that window; adjusted against other available leave if the adoption is not legally finalised after a foster-care period. This is a new provision not present in the 1977 Rules. The "15 days" / "1 year" readings correct raw OCR "45"/"4 वर्ष" via the documented 1-vs-4 digit-misread pattern.',
      extraFields: [{ id: 'fam_date', label: 'Date of Adoption', type: 'date' }] },
    child_adoption: { label: 'Child Adoption Leave (Mother)', group: 'family', rule: 'Rule 39, Madhya Pradesh Civil Services (Leave) Rules, 2025', family: 'leave', nature: 'Child Adoption Leave', defaultReason: 'Legal adoption of a child',
      hint: 'For a woman government servant adopting a child, not admissible if she already has more than 1 surviving child at the time of adoption; available for up to 2 adoptions in a career; granted until the adopted child turns 1 year old. The OCR-read day-cap for this leave is genuinely uncertain — it showed "70 days," a figure that does NOT fit the file\'s usual 1-vs-4 misread pattern (neither digit is a 1 or 4), so it is not being silently "corrected" the way other figures in this file are; but the equivalent 1977 Rule 38-B capped this leave at 67 days, a suspiciously close but different number. Confirm your current entitlement (67, 70, or another figure) with your DDO before relying on either. Other due leave (including up to 60 days\' commuted leave/leave not due without medical certificate) may follow in continuation, up to the child\'s first birthday; full pay; not debited to the leave account.',
      extraFields: [{ id: 'fam_date', label: 'Date of Adoption', type: 'date' }, { id: 'fam_info1', label: 'Age of Child at Adoption', type: 'text', placeholder: 'Optional' }] },
    child_care_leave: { label: 'Child Care Leave', group: 'family', rule: 'Rule 40, Madhya Pradesh Civil Services (Leave) Rules, 2025', family: 'leave', nature: 'Child Care Leave', defaultReason: "Care of child (education/illness/other need)",
      hint: 'Available to a woman government servant OR a "single male government servant" (defined in the rule as unmarried, widower, or divorced) for the care of up to 2 eldest surviving children, for needs such as education or illness, up to 730 days over the entire career (Rule 40(1)); cannot be claimed as a matter of right (Rule 40(2)). "Child" means below 18 years, or below 22 years if certified at least 40% disabled under a Ministry of Social Justice &amp; Empowerment, Government of India notification (the specific notification number/date was not clearly legible in the scanned source this session) (Rule 40(3)). Not normally sanctioned more than 3 times in a calendar year (a single female government servant may take it up to 6 times a year); not for less than 5 days at a time (Rule 40(4)(a)) — the 3/6/5 figures are unambiguous in the OCR. Pay: 100% of last-drawn pay for the first 365 days, 80% for the next 365 days (Rule 40(4)(c)) — the "100%" corrects a raw OCR "400%" via the documented digit-misread pattern and is strongly corroborated by every secondary summary of the 2025 Rules found this session. Combinable with other leave; a separate leave account is maintained in Form 5; generally apply at least 3 weeks in advance. This is a genuinely new entitlement — a much narrower Child Care Leave existed under the 1977 Rules by a later 2015 amendment (Rule 38(C), also capped at 730 days but confirmed only via case law, restricted to female employees, per an earlier draft of this file), and Rule 40 both restates and extends it to single male employees.',
      extraFields: [{ id: 'fam_info1', label: "Child's Name", type: 'text' }, { id: 'fam_date', label: "Child's Date of Birth", type: 'date' }, { id: 'fam_ta1', label: 'Purpose (education / illness / other specific need)', type: 'textarea', full: true }] },
    special_disability_leave: { label: 'Special Disability Leave', group: 'family', rule: 'Rules 41 &amp; 42, Madhya Pradesh Civil Services (Leave) Rules, 2025', family: 'leave', medCert: true, nature: 'Special Disability Leave', defaultReason: 'Injury sustained in the course of official duty',
      hint: 'For disability caused by injury intentionally inflicted (Rule 41) or accidentally incurred (Rule 42) in, or in consequence of, the due performance of official duty; disability must generally manifest within 3 months of the incident (Rule 41(2)); capped at 24 months per disability (Rule 41(3), unambiguous in the OCR); counts as duty for pension-qualifying service and is not debited to the leave account (Rule 41(6)). Leave salary during this leave starts at Earned-Leave-equivalent rate before dropping to Half-Pay-Leave-equivalent rate (Rule 41(7)) — the exact day-count boundary between the two rates could NOT be reliably read from the scanned source this session (OCR returned figures that fit neither the 1977 Rules\' 20-day/120-day boundaries cleanly nor an obviously-corrected revision of them); confirm the current split with your DDO before relying on it. All cases require Administrative Department concurrence (Rule 43).' },

    casual_leave: { label: 'Casual Leave (CL)', group: 'casual', rule: 'General Administration Department circular (Casual Leave is expressly excluded from the definition of "leave" under Rule 10\'s Explanation, Madhya Pradesh Civil Services (Leave) Rules, 2025 — and identically worded in the 1977 Rules — and is administered separately)', family: 'letter', needsRouting: true, nature: 'Casual Leave', subject: 'Application for Casual Leave', defaultReason: 'Personal / domestic affairs',
      hint: 'Rule 10\'s own Explanation states Casual Leave "shall not be combined with any other kind of leave admissible under these rules" — it sits outside the Leave Rules entirely (true of both the 1977 and 2025 versions, confirmed by direct reads of both PDFs this session), and is instead governed by a separate General Administration Department circular. A tertiary source (a Madhya Pradesh Police leave manual page) points to a document called "Book Circular II-6" as governing Casual Leave for at least one MP department, confirming circular-based administration is real and current, but this session could not locate or read a primary GAD circular giving the current annual day-count for state employees generally — do not assume a specific figure; confirm your current-year balance with your DDO.',
      bodyTemplate: 'I request you to kindly grant me Casual Leave for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, on account of <strong>${reason}</strong>.' },
    special_casual_leave: { label: 'Special Casual Leave', group: 'casual', rule: 'General Administration Department circular (no Madhya Pradesh-specific circular listing recognised reasons/day-limits independently confirmed this session)', family: 'letter', needsRouting: true, nature: 'Special Casual Leave', subject: 'Application for Special Casual Leave', defaultReason: '',
      hint: 'Most Indian state governments maintain a General Administration Department circular listing recognised Special Casual Leave reasons (e.g. blood donation, sports events, sterilisation) and day-limits, of the kind Kerala\'s Appendix VII, Section II sets out — but no Madhya Pradesh-specific circular of this kind could be located this session. State your specific reason below and confirm the applicable day-limit and any required proof with your DDO before applying — this tool does not assert a specific day cap here.',
      bodyTemplate: 'I request you to kindly grant me Special Casual Leave for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, on account of: <strong>${reason}</strong>.' },

    gis_nomination: { label: 'Group Insurance Scheme — Nomination', group: 'insurance', rule: 'Madhya Pradesh Government Employees Group Insurance Scheme, 1985 (Finance Department)', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Head of Office.',
      hint: 'Confirmed to exist by name and year only, via circular-title listings at a secondary index (indianemployees.com), not a primary Finance Department document read this session — no contribution rate or benefit table is asserted below; confirm the current structure with your DDO/Finance Department. Note: the same secondary index also lists a "Madhya Pradesh Government Servant Employees Insurance-cum-Savings Scheme, 2003" (which an earlier draft of this file, sourced from case law, treated as the scheme currently in force) and a 1974-dated "Family Welfare Fund Scheme" — this session could not resolve whether the 1985 or 2003 scheme is the one currently operating, or whether one superseded the other; confirm which scheme currently applies to you with your DDO/Finance Department before relying on either name.',
      extraFields: [{ id: 'svc_t1', label: 'Nominee Name', type: 'text' }, { id: 'svc_t2', label: 'Nominee Relationship', type: 'text' }, { id: 'svc_t3', label: 'Share, if more than one nominee', type: 'text' }],
      subject: 'Group Insurance Scheme — Nomination / Change of Nomination',
      bodyTemplate: 'I submit my nomination under the Madhya Pradesh Government Employees Group Insurance Scheme, 1985, as follows: <strong>${svc_t1}</strong>, ${svc_t2}.{{#if svc_t3}} Share: ${svc_t3}.{{/if}}' },
    gis_claim: { label: 'Group Insurance Scheme — Claim', group: 'insurance', rule: 'Madhya Pradesh Government Employees Group Insurance Scheme, 1985 (Finance Department)', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Head of Office.',
      extraFields: [{ id: 'svc_date1', label: 'Date of Death / Retirement', type: 'date' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Group Insurance Scheme — Claim (Death / Retirement)',
      bodyTemplate: 'I submit this claim under the Madhya Pradesh Government Employees Group Insurance Scheme, 1985, on account of the event dated <strong>${svc_date1}</strong>.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },

    nps_reg: { label: 'NPS Subscriber Registration', group: 'service', rule: 'Defined Contribution Pension Scheme (National Pension System) — Madhya Pradesh Finance Department memo No. F-9/3/2003-Niyam-IV dated 13 January 2005, applicable to employees appointed on or after 1.1.2005', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / the Directorate of Pension, Provident Fund and Insurance.',
      hint: 'Read directly this session (via OCR of a scanned Finance Department circular, No. F-9/3/2003-Niyam-IV, dated 25 September 2006, which itself references and elaborates the original 13.1.2005 memo): the scheme applies to Government of Madhya Pradesh civil-service employees appointed on or after 1 January 2005. Confirm whether NPS or the General Provident Fund applies to you, based on your specific date of joining, with your DDO.',
      extraFields: [{ id: 'svc_date1', label: 'Date of joining service', type: 'date' }, { id: 'svc_t1', label: 'Bank account number &amp; branch (for NPS)', type: 'text' }, { id: 'svc_t2', label: 'Nominee Name', type: 'text' }, { id: 'svc_t3', label: 'Nominee Relationship', type: 'text' }],
      subject: 'Application for NPS Subscriber Registration',
      bodyTemplate: 'I request that I be registered as a subscriber under the National Pension System (NPS) / Defined Contribution Pension Scheme, having joined service on <strong>${svc_date1}</strong>, on or after the 1 January 2005 cutoff. My bank account for this purpose is <strong>${svc_t1}</strong>, and I nominate <strong>${svc_t2}</strong>{{#if svc_t3}} (${svc_t3}){{/if}} as my nominee.' },
    gpf_advance: { label: 'GPF Advance / Withdrawal', group: 'service', rule: 'The Madhya Pradesh General Provident Fund Rules', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / the Directorate of Pension, Provident Fund and Insurance.',
      hint: 'Applies only if you joined service before Madhya Pradesh\'s 1 January 2005 NPS cutoff (see the NPS Registration type) and hold a General Provident Fund account. The Madhya Pradesh General Provident Fund Rules are confirmed to exist (listed on finance.mp.gov.in) but this session could not read their text — the current minimum-subscription percentage, interest rate and permissible advance ceiling are not independently confirmed and are NOT asserted here; confirm with your DDO/the Directorate of Pension, Provident Fund and Insurance.',
      extraFields: [{ id: 'svc_t1', label: 'Purpose (education / illness / housing / vehicle / other)', type: 'text' }, { id: 'svc_t2', label: 'Amount Requested (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Application for GPF Advance / Withdrawal',
      bodyTemplate: 'I request that a GPF advance/withdrawal of <strong>Rs. ${svc_t2}</strong> be sanctioned for the purpose of <strong>${svc_t1}</strong>. I confirm I joined service before Madhya Pradesh\'s 1 January 2005 NPS cutoff and hold a General Provident Fund account.{{#if svc_ta1}} ${svc_ta1}{{/if}} I have confirmed the current permissible amount with my DDO/the Directorate of Pension, Provident Fund and Insurance.' },
    leave_encashment: { label: 'Leave Encashment on Retirement', group: 'service', rule: 'Rule 57, Madhya Pradesh Civil Services (Leave) Rules, 2025', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Head of Office.',
      hint: 'Read directly off the 2025 Rules this session: on superannuation, compulsory retirement, voluntary retirement, invalid pension, or death in service, unutilised Earned Leave and Half Pay Leave (combined, capped at 300 days) are encashed as a lump sum — Earned Leave at (pay + DA at retirement)/30 per day, Half Pay Leave at half that rate — with the whole provision expressly stated to apply to retirements/deaths occurring after 31 December 2025, i.e. essentially from the new Rules\' own commencement (Rule 57(1), Note 3). If disciplinary/criminal proceedings are pending at retirement, the competent authority may withhold the amount wholly or partly pending outcome (Rule 57(2)).',
      extraFields: [{ id: 'svc_date1', label: 'Date of Retirement / Cessation of Service', type: 'date' }, { id: 'svc_t1', label: 'Unutilised Earned Leave (days)', type: 'text' }, { id: 'svc_t2', label: 'Unutilised Half Pay Leave (days)', type: 'text' }],
      subject: 'Application for Leave Encashment on Retirement',
      bodyTemplate: 'I request that the leave encashment admissible to me under Rule 57, Madhya Pradesh Civil Services (Leave) Rules, 2025, in respect of my retirement/cessation of service on <strong>${svc_date1}</strong>, be sanctioned. My unutilised balances are: Earned Leave — <strong>${svc_t1}</strong> days; Half Pay Leave — <strong>${svc_t2}</strong> days (combined subject to the 300-day statutory ceiling).' },

    family_pension: { label: 'Family Pension — Claim / Intimation', group: 'estate', rule: 'Rules 47, 48, 69 &amp; 71, Madhya Pradesh Civil Services (Pension) Rules, 1976', family: 'letter', noRemarksBlock: true,
      hint: 'The Madhya Pradesh Civil Services (Pension) Rules, 1976 are confirmed to exist and to contain family pension provisions at Rules 47 and 48 (contributory / non-contributory family pension) and Rules 69 and 71 (family pension and gratuity on death in service, and on death of a pensioner respectively) — these rule numbers are sourced from a secondary legal-database index (legitquest.com) this session, NOT from an independent read of the primary Pension Rules text (the PDF located on finance.mp.gov.in is a scanned image, like the 2025 Leave Rules, and was not OCR\'d this session given this file\'s focus on leave). No percentage-of-pay figure, enhanced-rate duration, or Death-cum-Retirement Gratuity ceiling is asserted here — confirm all current figures with the Directorate of Pension, Provident Fund and Insurance before relying on this tool for a family pension claim.',
      extraFields: [{ id: 'svc_date1', label: 'Date of Death', type: 'date' }, { id: 'svc_t2', label: "Claimant's Relationship to the Deceased", type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Family Pension — Claim / Intimation',
      bodyTemplate: 'I write to intimate the death of the above-named Government employee on <strong>${svc_date1}</strong>, and to request that Family Pension, as admissible under the Madhya Pradesh Civil Services (Pension) Rules, 1976, be sanctioned in favour of the eligible member(s) of the family, along with any gratuity admissible on death in service.{{#if svc_t2}} Claimed relationship to the deceased: ${svc_t2}.{{/if}}{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
    deceased_dues_indemnity: { label: "Indemnity Bond — Deceased Employee's Dues", group: 'estate', rule: 'Madhya Pradesh Financial Code / Treasury Code (no distinct form number independently confirmed this session)', family: 'letter', noRemarksBlock: true,
      hint: 'This tool could not confirm this session whether Madhya Pradesh maintains its own distinct Financial Code/Treasury Code indemnity-bond form number (analogous to Kerala\'s K.F.C. Form No. 9) — confirm the current form and any surety requirement with your Treasury Officer/DDO before executing this bond.',
      extraFields: [{ id: 'svc_date1', label: 'Date of death of employee', type: 'date' }, { id: 'svc_t1', label: 'Name of Claimant(s)', type: 'text' }, { id: 'svc_t2', label: 'Relationship of Claimant(s) to Deceased', type: 'text' }, { id: 'svc_t3', label: 'Amount Claimed (₹)', type: 'text' }, { id: 'svc_ta1', label: "Claimant's address / surety details, if required", type: 'textarea', full: true }],
      subject: "Indemnity — Claim for Deceased Employee's Dues",
      bodyTemplate: 'I/We, <strong>${svc_t1}</strong>, ${svc_t2} of the deceased <strong>${name}</strong>, request payment of the pay, leave salary and other emoluments due, amounting to <strong>Rs. ${svc_t3}</strong>, in respect of death on <strong>${svc_date1}</strong>, and undertake to furnish an indemnity bond (with sureties, if required) in the form currently prescribed by the Treasury.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
  },
};
