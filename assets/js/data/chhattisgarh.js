/* =============================================================================
   CHHATTISGARH — data for state-tool-engine.js. See assets/js/data/kerala.js
   for the schema reference, assets/js/data/gujarat.js for the prior example
   of this file's research/honesty discipline (primary-source PDF extraction,
   rule-by-rule citation, honest hedging over invented figures), and
   assets/js/data/madhyapradesh.js for the specific open question this file
   was written to resolve — see below.

   THE CENTRAL FINDING THIS SESSION, STATED UP FRONT — CHHATTISGARH HAS ITS
   OWN NUMBERED LEAVE CODE, HAS HAD ONE SINCE 2010, AND IT IS STILL CURRENT:
   the "Chhattisgarh Civil Services (Leave) Rules, 2010" (made under the
   proviso to Article 309 of the Constitution by the Governor of
   Chhattisgarh, commencing 1 October 2010) were downloaded and read IN FULL
   this session — finance.cg.gov.in/Rules_Act/Chhattisgarh Civil
   services(Leave) Rules,2010/Leave rule Index-Eng.pdf, a 42-page document
   which, despite being filed under "Index," is actually the complete
   55-rule text plus all 9 prescribed forms — and it extracted to clean,
   directly-readable Unicode text via pdftotext with NO OCR needed (this
   file's rule citations below are a direct read of that text, not a
   secondary summary). This resolves the exact question madhyapradesh.js's
   header explicitly left open: that file found case-law evidence that
   Chhattisgarh was still citing "Rule 17 of M.P. Civil Services (Leave)
   Rules, 1977" as late as December 2006, i.e. six years after the November
   2000 bifurcation, and asked a future session to find out what happened
   after that. The answer: Chhattisgarh continued running the inherited MP
   1977 Rules by adoption for roughly a decade, then replaced them wholesale
   with its own Chhattisgarh-branded, Chhattisgarh-numbered code in 2010 —
   the same "adopted first, own code later" pattern Gujarat's file documents
   for its 2002 rules (Bombay Rules, 1959 to 2002) and Goa's file documents
   for its own timeline, not a state that simply kept running someone else's
   rules forever. The 2010 Rules have themselves been amended repeatedly
   since (Finance Department circulars — locally called "Vitta Nirdesh" /
   Finance Directives — confirmed and dated this session: FD-04/18 Feb 2013,
   FD-49/1 Aug 2013, FD-15/25 May 2016, FD-15/22 Mar 2018, and FD-52/4 Oct
   2018 which inserted Child Care Leave — see below), so this is a live,
   actively-maintained instrument, not a dead letter.

   METHODOLOGY NOTE — NO WebSearch THIS SESSION: this session's WebSearch
   budget was reported already exhausted (200/200) before any query for this
   file could run, so unlike every prior state file in this app, none of the
   research below came from a search engine at all. It was done entirely by
   direct, targeted crawling of finance.cg.gov.in and gad.cg.gov.in via curl
   (their homepages, Rules_acts.aspx / Rules_and_Circular.aspx index pages,
   and finance.cg.gov.in's own "Vitta Nirdesh" (Finance Directive) circular
   index at vitt_nirdesh/circulars.asp, which turned out to be organised by
   subject into ~23 topic pages plus a year-by-year archive back to 2001)
   plus pdftotext extraction of whatever PDFs those pages linked to. This
   turned out to be a strong, not a weak, path — finance.cg.gov.in's own
   rules archive is extensive and directly linkable — but it means every
   citation below traces to a specific finance.cg.gov.in URL and PDF, not a
   web search result, and it means this session's coverage is only as good
   as what finance.cg.gov.in and gad.cg.gov.in choose to host; a GAD-specific
   circular index (e.g. for Casual Leave day-counts, ordinarily a General
   Administration Department matter, not Finance) was not comparably
   browsable and is hedged accordingly below.

   A THIRD PDF-TEXT FAILURE MODE, DISTINCT FROM PRIOR STATE FILES' TWO —
   worth recording for a future session: madhyapradesh.js documented "clean
   text" (MP 1977 Rules) vs "scanned image, needs OCR" (MP 2025 Rules) as the
   two outcomes pdftotext can hit. This session hit a THIRD, different
   failure mode on several genuinely-current, correctly-dated Chhattisgarh
   Finance Directive PDFs (the 2004 House Building Advance ceiling circular,
   the 2018 Child Care Leave circular and its Gazette copy, the 2022/2026
   Festival Advance circulars, and a 30-page "Pension Forms Set" PDF):
   pdftotext DID extract a text layer — these are not scanned images, and
   returned a nonzero line count — but the characters are garbage
   (e.g. "15UKO[ NNOX" instead of readable Hindi), because the source PDFs
   embed a legacy non-Unicode Hindi font (of the Kruti Dev / DevLys / Chanakya
   family common in older Indian government document workflows) whose glyph
   codepoints simply don't map to the Unicode values pdftotext assumes. This
   is NOT fixable by OCR in the way MP's session fixed its scanned-image
   problem (OCR reads pixels, and these PDFs render correctly as pixels in
   any normal PDF viewer — the font itself is the obstacle, not image
   quality), and this session's environment additionally had no
   pdftoppm/Ghostscript/ImageMagick available to even rasterise the pages for
   an OCR attempt (tesseract itself was present but had nothing to feed it).
   Net effect: several items below are confirmed to EXIST, by exact Finance
   Directive number, date, and (via the surrounding index page, which is
   separately serviceduled in proper UTF-8) exact Hindi title — but their
   body text, and therefore any rupee figure or day-count inside them, could
   not be read this session. Each such case is flagged explicitly below
   rather than guessed at.

   PENSION RULES AND GROUP INSURANCE — CONFIRMED TO BE THE SAME "REBRAND, NOT
   REWRITE" PATTERN, WITH DIRECT TEXTUAL EVIDENCE: two further findings this
   session, both stronger than a name-and-year guess. (1) The 2010 Leave
   Rules text itself cross-references "rule 42(b) of the Chhattisgarh Civil
   Services (Pension) Rules, 1976" (in Rule 30(2)'s second proviso) — so
   Chhattisgarh's Pension Rules carry the identical "1976" year as undivided
   Madhya Pradesh's own Pension Rules, 1976 (the instrument madhyapradesh.js
   cites via a secondary index, Rules 47/48/69/71), strongly suggesting
   Chhattisgarh's Pension Rules are a post-bifurcation rebrand of the same
   1976 text under a new state name, exactly as its Leave Rules were
   (by adoption) until 2010. (2) Direct, unambiguous documentary proof of
   this rebrand pattern was found for the "Chhattisgarh Government Employees
   Group Insurance Scheme, 1985" (full text read this session, see below):
   its own Form No. 9 is headed "MADHYA PRADESH GOVERNMENT EMPLOYEES GROUP
   INSURANCE SCHEME, 1985" — a leftover copy-paste artifact, left uncorrected
   in the document Chhattisgarh's own Finance Department currently hosts as
   ITS scheme text, that proves this is the original Madhya Pradesh 1985
   scheme text with "Chhattisgarh" substituted for "Madhya Pradesh"
   throughout, not an independently drafted Chhattisgarh instrument. Unlike
   the Leave Rules (which WERE eventually rewritten in 2010), no evidence was
   found this session that Chhattisgarh has ever similarly rewritten its
   Pension Rules or its Group Insurance Scheme under a Chhattisgarh-specific
   year — both still run, as far as this session could establish, on
   1976/1985-dated, MP-originated text under a relabelled name.

   NPS TO OPS — A GENUINELY CHHATTISGARH-SPECIFIC, WELL-CORROBORATED, AND
   HIGHLY CONSEQUENTIAL FINDING NOT FLAGGED IN ANY OTHER STATE FILE IN THIS
   APP: multiple dated Finance Directives, found via finance.cg.gov.in's own
   pension-circulars index (vitt_nirdesh/subject.asp?subject=4), confirm that
   Chhattisgarh restored the Old Pension Scheme (OPS) in place of the National
   Pension System (NPS) for state government employees appointed on or after
   1 November 2004 (NPS's original cutoff date) — i.e., effectively all
   current Chhattisgarh state employees are now back on OPS, not NPS. The
   sequence of Finance Directives (titles read directly off finance.cg.gov.in's
   UTF-8 index page, not the PDFs themselves, which were not all opened):
   FD-07 dated 8 April 2022 and FD-08 dated 26 April 2022 (stopping the
   monthly NPS deduction "in view of the decision to implement OPS"), FD-11
   dated 11 May 2022 (titled, translated: "implementing the Old Pension
   Scheme in place of the New Contributory Pension Scheme for state
   employees appointed on/after 1 November 2004" — the operative directive),
   FD-23 dated 20 September 2022 (freezing final withdrawal from the
   accumulated NPS corpus pending its adjustment), and FD-04 dated 25 January
   2023 (lifting that freeze once the OPS restoration was complete). This is
   a real, dated, multiply-corroborated policy reversal specific to
   Chhattisgarh — do not assume NPS still applies to Chhattisgarh employees
   the way it does in Gujarat/Madhya Pradesh/most other states in this app;
   the 'service' category below is built around GPF, not NPS, accordingly.

   GROUP INSURANCE — the "Chhattisgarh Government Employees Group Insurance
   Scheme, 1985" (full clean text read this session, finance.cg.gov.in/
   Rules_Act/Group_Ins._Scheme-1985/Group_Insurance_Scheme_1985.PDF) gives an
   actual contribution/benefit table, current as of the document's own last
   revision date of 1 July 2003: Group D (Class IV) — Rs. 60/month, Rs.
   60,000 insurance cover; Group C (Class III) — Rs. 100/month, Rs. 1,00,000
   cover; Group B (Class II) — Rs. 120/month, Rs. 1,20,000 cover; Group A
   (Class I) — Rs. 160/month, Rs. 1,60,000 cover (each split into an
   Insurance Fund portion and a Savings Fund portion per the document's own
   table). The Savings Fund interest rate history given in the same document
   runs 11% (1.7.1985–31.12.1986) → 12% (1987–2000) → 11% (2001) → 9.5%
   (2002) → 9% (from 1.1.2003). This is a genuinely strong primary source —
   but it is also 20+ years stale on its own terms, and this session found
   clear evidence the scheme has been revised since: a Finance Directive
   titled (translated) "Chhattisgarh Government Employees GIS 1985 —
   increase in contribution and corresponding insurance amount rates w.e.f.
   1 July 2017" (FD-22, dated 27 May 2017) confirms at least one rate
   revision since 2003, and annual/near-annual Finance Directives continue
   through FD-02 dated 9 January 2026 revising the Savings Fund interest
   rate — but, oddly, several of the most recent of these (2022 onward)
   are titled as revising the rate "under the Central Government Employees
   Group Insurance Scheme, 1980," not the state's own 1985-named scheme —
   this session could not resolve whether that is deliberate (Chhattisgarh's
   Finance Department simply pegging its own scheme's Savings Fund rate to
   whatever rate the Government of India separately declares for its own
   CGEGIS, a common inter-scheme convention) or a drafting inconsistency;
   flagged as an open question in the relevant type's hint rather than
   silently resolved either way. The 2017-and-later current contribution
   rates and insurance amounts were NOT independently confirmed this
   session (the FD-22 PDF itself was not opened) — the 2003 table above is
   asserted as a documented historical baseline only; confirm your current
   Group/rate with your DDO/Finance Department.

   CHILD CARE LEAVE — confirmed to exist, is Chhattisgarh-specific and
   post-dates the 2010 codification, but its terms could not be read this
   session: a Finance Directive titled (translated) "amendment to the Leave
   Rules to implement Child Care Leave (संतान पालन अवकाश) for women employees
   of the State Government" (FD-52, dated 4 October 2018, published as
   Chhattisgarh Gazette Extraordinary issue/Rajpatra No. 9 of 2018) is
   confirmed via finance.cg.gov.in's own circular index — but both the plain
   FD-52 PDF and its Gazette copy hit the legacy-font and scanned-image
   failure modes described above respectively, so no day-count, pay-rate, or
   even the exact inserted rule number could be read. Note the directive's
   own title restricts this leave to WOMEN employees — unlike Madhya
   Pradesh's brand-new 2025 Rules (Rule 40), which extended an equivalent
   leave to "single male" employees too; no evidence was found this session
   that Chhattisgarh has done the same, so this file does NOT assume it has.

   CASUAL LEAVE — Rule 10's own Explanation, read directly this session,
   states: "Casual leave or optional leave which are not recognized as leave
   under these rules, shall not be combined with any other kind of leave
   admissible under these rule" — confirming (a) the same statutory carve-out
   pattern documented in Gujarat's Rule 15 Explanation and Madhya Pradesh's
   Rule 10 Explanation, and (b) that Chhattisgarh's rule text separately
   names an "optional leave" concept (commonly a small annual bank of
   employee-chosen holidays in other Indian jurisdictions) alongside Casual
   Leave as similarly excluded — but no day-count for either was located for
   either concept; finance.cg.gov.in's own Finance-Directive index confirmed
   only Leave-Rules amendments (a Finance Department matter), and no
   comparably browsable General Administration Department circular index
   (the department that would ordinarily hold the Casual Leave day-count)
   was found this session. No figure is asserted for either type below.

   ADVANCES — confirmed to exist, both hit the legacy-font failure mode for
   their body text: House Building/Purchase Advance is confirmed via a
   Finance Directive titled (translated) "fixing the maximum value limit for
   House Construction and Purchase Loan to Government employees" (FD-18,
   dated 21 May 2004) — the same day's index also lists a separate "scheme
   for providing loans to Government employees through financial
   institutions" (FD-17, same date, and FD-28 dated 6 August 2004), hinting
   Chhattisgarh may route at least part of this through bank tie-ups rather
   than a pure treasury advance, but this was not confirmed further. Festival
   Advance is confirmed live and periodically revised across two decades,
   most recently by a Standing Finance Directive dated 5 March 2026 (barely
   months before this file was written) — but no rupee figure for any year,
   including the current one, was read. A "Grain Advance" (अनाज अग्रिम) was
   also found referenced alongside Festival Advance in several older
   circulars (2005, 2009) but with no clear evidence it is still current in
   2026 — omitted entirely rather than included on stale evidence. No Motor
   Vehicle Advance for personal/individual use was found (the "वाहन" hits in
   Chhattisgarh's Finance Directive index were all about departmental/official
   vehicle procurement and vehicle allowance, a different scheme) — omitted.

   FAMILY PENSION / ESTATE — the "Chhattisgarh Civil Services (Pension)
   Rules, 1976" is confirmed to exist by name and year (see above), but no
   family-pension-specific rule numbers, percentage-of-pay figures, or DCRG
   ceiling were located this session — the one Pension Rules-adjacent PDF
   downloaded (a file named "CG_Pension_F_R_2003," of uncertain relationship
   to the 1976 Rules given the different year in its filename) was a scanned
   image with no extractable text, and a 30-page "Pension Forms Set" PDF hit
   the legacy-font failure mode. No percentage, rule number beyond the bare
   "1976" citation, or gratuity ceiling is asserted below. Also found but not
   pursued further: a "Chhattisgarh Pension Fund Act, 2025" (Act No. 27 of
   2025, Chhattisgarh Gazette, notified 17 September 2025, Governor's assent
   21 August 2025) and an associated "Pension Fund Rules, 2026" — both
   Hindi-legacy-font/scanned and unread this session; these appear to concern
   a state-level pension corpus/fund-management body rather than individual
   employees' family pension entitlements, but that could not be confirmed,
   so neither is cited in any type below.

   STUDY LEAVE (Chapter VI, Rules 42–53 of the 2010 Rules) and Hospital
   Leave / T.B.-Cancer-Leprosy Leave (present in Gujaral/Kerala but simply
   ABSENT from Chhattisgarh's own Chapter V, which runs Maternity (38) →
   Paternity (38-A) → Child Adoption (38-B) → Special Disability (39-40) →
   Power to grant (40-A/41) with no equivalent rule in between) are both
   deliberately omitted below — Study Leave because no prior state file in
   this app includes it as an applicant-facing type, and Hospital/TB-Cancer-
   Leprosy Leave because their absence from Chhattisgarh's own rule text was
   directly confirmed this session, not merely unresearched.
   ============================================================================= */
window.STATE_DATA = window.STATE_DATA || {};
window.STATE_DATA.chhattisgarh = {
  key: 'chhattisgarh', name: 'Chhattisgarh',
  heroTitle: 'Chhattisgarh — CG Civil Services (Leave) Rules, 2010 &amp; Service Forms',
  heroMeta: 'leave, family care, group insurance &amp; service matters, under the Chhattisgarh Civil Services (Leave) Rules, 2010 (in force from 1 October 2010) and the Chhattisgarh Government Employees Group Insurance Scheme, 1985',
  idFieldLabel: 'Employee Code',
  coverLetter: false,

  groupOrder: [
    { slot: 'general', name: 'General Leave' },
    { slot: 'lwa', name: 'Extraordinary Leave' },
    { slot: 'family', name: 'Family &amp; Medical Leave' },
    { slot: 'casual', name: 'Casual &amp; Special Leave' },
    { slot: 'insurance', name: 'Group Insurance Scheme' },
    { slot: 'service', name: 'Service &amp; Establishment Matters' },
    { slot: 'advance', name: 'Advances &amp; Loans' },
    { slot: 'estate', name: 'Family Pension / Estate Claims' },
  ],

  profileFields: [
    { id: 'name', label: 'Full Name', type: 'text', required: true },
    { id: 'pen', label: 'Employee Code', type: 'text', required: true },
    { id: 'designation', label: 'Post Held', type: 'text', required: true },
    { id: 'office', label: 'Office &amp; Section', type: 'text', required: true, full: true, placeholder: 'e.g., Establishment Section, O/o the Collector, Raipur' },
    { id: 'dob', label: 'Date of Birth', type: 'date', required: true },
    { id: 'entry', label: 'Date of Entry into Service / Commencement of Continuous Service', type: 'date', required: true },
    { id: 'pay', label: 'Pay', type: 'text', required: true, placeholder: 'e.g., Level 6, Rs 35400' },
  ],
  formExtraFields: [
    { id: 'allowances', label: 'HRA / Conveyance / Other Compensatory Allowances Drawn', type: 'text', placeholder: 'Optional' },
    { id: 'holidays', label: 'Sundays/Holidays Prefixed/Suffixed to Leave, if any', type: 'text', placeholder: 'e.g., Nil' },
    { id: 'last_leave', label: 'Date of Return from Last Leave (&amp; nature of that leave)', type: 'text', placeholder: 'e.g., 05/01/2026 (Earned Leave) or NA' },
  ],
  formRows: [
    { label: '1. Name of applicant &amp; Employee Code', template: '${name} (Employee Code: ${pen})' },
    { label: '2. Leave Rules applicable', template: '${rule}' },
    { label: '3. Post held', field: 'designation' },
    { label: '4. Office and Section', field: 'office' },
    { label: '5. Pay', field: 'pay' },
    { label: '6. HRA/conveyance/other compensatory allowances drawn in present post', field: 'allowances' },
    { label: '7. Nature and period of leave applied for', template: '${nature} for ${duration_str}<br>from ${start} to ${end}' },
    { label: '8. Sundays and holidays, if any, prefixed/suffixed to leave', field: 'holidays' },
    { label: '9. Ground on which leave is applied for', field: 'reason' },
    { label: '10. Date of return from last leave, and the nature and period of that leave', field: 'last_leave' },
    { label: '11. Leave address, if granted', field: 'address' },
  ],

  types: {
    earned_leave: { label: 'Earned Leave (EL)', group: 'general', rule: 'Rule 25, Chhattisgarh Civil Services (Leave) Rules, 2010', family: 'leave', nature: 'Earned Leave', defaultReason: 'Private affairs',
      hint: '30 days/year, credited in advance in two instalments of 15 days each on 1 January and 1 July (Rule 25(1)(a)); carry-forward accumulation capped at 300 days, with a partial-credit rule where the balance is between 285 and 300 days at a half-year end (Rule 25(1)(b), proviso); maximum grantable at a time is 180 days (Rule 25(3)). Credited at 2½ days per completed calendar month in the half-year of appointment/retirement/resignation (Rule 26). All figures directly read from a clean-text copy of the Rules — no OCR or digit-ambiguity involved.' },
    vacation_dept_earned_leave: { label: 'Earned Leave (Vacation Department)', group: 'general', rule: 'Rule 27, Chhattisgarh Civil Services (Leave) Rules, 2010', family: 'leave', nature: 'Earned Leave (Vacation Department)', defaultReason: 'Private affairs',
      hint: 'For staff of a "Vacation Department" (a department, e.g. educational institutions, with regular scheduled vacations) — 10 days/year, credited in two instalments of 5 days each on 1 January and 1 July (Rule 27(1)(a)); no Earned Leave at all is admissible for a year in which the full vacation was availed (Rule 27(2)); if only part of the vacation was availed, entitlement rises proportionately up to 20 days for that year (Rule 27(3)(a)); same 300-day carry-forward cap as Rule 25 (Rule 27(5)).' },
    half_pay_leave: { label: 'Half Pay Leave (HPL)', group: 'general', rule: 'Rule 28, Chhattisgarh Civil Services (Leave) Rules, 2010', family: 'leave', nature: 'Half Pay Leave', defaultReason: 'Private affairs',
      hint: '20 days/year, credited in advance in two instalments of 10 days each on 1 January and 1 July (Rule 28(1)); credited at 5/3 day per completed calendar month in the half-year of appointment/retirement/resignation (Rule 28(2)); grantable on medical certificate or for private affairs (Rule 28(3)); no accumulation ceiling is stated in the rule.' },
    commuted_leave: { label: 'Commuted Leave', group: 'general', rule: 'Rule 29, Chhattisgarh Civil Services (Leave) Rules, 2010', family: 'leave', medCert: true, nature: 'Commuted Leave (in lieu of Half Pay Leave)', defaultReason: 'Medical treatment (Medical Certificate enclosed)',
      declarationTemplate: 'I undertake that this commuted leave is debited against my Half Pay Leave account at twice the number of days availed, as required under Rule 29, Chhattisgarh Civil Services (Leave) Rules, 2010, and that I shall refund the difference between the leave salary drawn during commuted leave and that admissible during half pay leave should I resign or retire voluntarily from service without returning to duty.',
      hint: 'Up to half of the Half Pay Leave due, on medical certificate, debited at twice the number of days availed against the Half Pay Leave account (Rule 29(1)); up to 180 days allowed in the entire service without a medical certificate, for an approved course of study certified to be in the public interest (Rule 29(2)); not grantable preparatory to retirement (Rule 29(1)(iii)).' },
    leave_not_due: { label: 'Leave Not Due', group: 'general', rule: 'Rule 30, Chhattisgarh Civil Services (Leave) Rules, 2010', family: 'leave', nature: 'Leave Not Due', defaultReason: 'Medical treatment (Medical Certificate enclosed)',
      declarationTemplate: 'I undertake to refund the leave salary drawn during this Leave Not Due, which would not have been admissible had Rule 30, Chhattisgarh Civil Services (Leave) Rules, 2010 not been applied, in the event of my resignation or voluntary retirement from service before earning it back through future Half Pay Leave accrual.',
      hint: 'Only where the competent authority is satisfied there is a reasonable prospect of the employee returning to duty (Rule 30(1)(a)); limited to the Half Pay Leave likely to be earned thereafter, against which it is debited (Rule 30(1)(b),(d)); capped at 360 days in the entire service, of which not more than 90 days at a time and up to 180 days in all may be granted without a medical certificate (Rule 30(1)(c)); not admissible preparatory to retirement (Rule 30(1)).' },

    extraordinary_leave: { label: 'Extraordinary Leave (EOL)', group: 'lwa', rule: 'Rule 31, Chhattisgarh Civil Services (Leave) Rules, 2010', family: 'leave', needsRouting: true, nature: 'Extraordinary Leave',
      hint: 'A single leave type — Chhattisgarh does not split this into named sub-purposes. Granted only when no other leave is admissible, or when the employee specifically applies in writing for it in preference to other admissible leave (Rule 31(1)); not sanctioned during the notice period given for voluntary retirement (Rule 31(3)); carries no leave salary and is not debited to the leave account (Rule 31(4)/Rule 36(4)). Subject to the general cap on continuous absence of any kind under Rule 11 ("Maximum period of absence from duty"), which the Rules text itself marks "(AMENDMENT)" and currently sets at 5 years continuous.',
      declarationTemplate: 'I understand that no leave salary is admissible during Extraordinary Leave (Rule 31, Chhattisgarh Civil Services (Leave) Rules, 2010), and that the duration applied for is within the 5-year continuous-absence limit prescribed under Rule 11.',
      extraFields: [{ id: 'purpose', label: 'Purpose / Nature of Extraordinary Leave', type: 'text', full: true, placeholder: 'e.g., private employment, higher studies, joining spouse, medical treatment' }] },

    maternity: { label: 'Maternity Leave', group: 'family', rule: 'Rule 38, Chhattisgarh Civil Services (Leave) Rules, 2010', family: 'leave', medCert: true, nature: 'Maternity Leave', defaultReason: 'Confinement for childbirth',
      hint: 'Up to 135 days from the date of commencement, for a woman government servant with fewer than 2 surviving children (Rule 38(1)); full pay; not debited to the leave account (Rule 38(2)); combinable with any other kind of leave (Rule 38(3)). For miscarriage/abortion (including under the Medical Termination of Pregnancy Act, 1971, but expressly excluding "threatened abortion"), irrespective of the number of surviving children, limited to the period recommended by the medical authority, capped at 45 days over the entire service (Rule 38(4) and Note).',
      extraFields: [{ id: 'fam_date', label: 'Expected/Actual Date of Delivery', type: 'date' }] },
    paternity: { label: 'Paternity Leave', group: 'family', rule: 'Rule 38-A, Chhattisgarh Civil Services (Leave) Rules, 2010', family: 'leave', nature: 'Paternity Leave', defaultReason: 'Delivery of child by spouse',
      hint: '15 days, for a male government servant with fewer than 2 surviving children, available up to 15 days before the delivery or up to 6 months after (Rule 38-A(1)); no medical certificate required; full pay; not debited to the leave account; combinable with any other kind of leave (Rule 38-A(2)-(3)); lapses if not availed within the window (Rule 38-A(4)). The rule\'s own Note states this leave "shall not normally be refused."' },
    child_adoption: { label: 'Child Adoption Leave', group: 'family', rule: 'Rule 38-B, Chhattisgarh Civil Services (Leave) Rules, 2010', family: 'leave', nature: 'Child Adoption Leave', defaultReason: 'Legal adoption of a child',
      hint: 'For a woman government servant with fewer than 2 surviving children who legally adopts a child up to 1 year of age — up to 135 days, limited to the date the adopted child turns 1 (Rule 38-B(1)); full pay; not debited to the leave account (Rule 38-B(1),(4)); combinable with other leave (Rule 38-B(2)); in continuation, up to a further period (reduced by the child\'s age at adoption) up to the child\'s first birthday, including up to 60 days of Leave Not Due/Commuted Leave without a medical certificate, may be granted on request (Rule 38-B(3)). As read this session, the rule is restricted to female government servants — no provision extending it to male/single employees was found (contrast Madhya Pradesh\'s 2025 Rules, which do extend an equivalent leave to single male employees).',
      extraFields: [{ id: 'fam_date', label: 'Date of Adoption', type: 'date' }, { id: 'fam_info1', label: 'Age of Child at Adoption', type: 'text', placeholder: 'Optional' }] },
    child_care_leave: { label: 'Child Care Leave', group: 'family', rule: 'Inserted into the Chhattisgarh Civil Services (Leave) Rules, 2010 by Finance Directive No. 52 dated 4 October 2018 (Chhattisgarh Gazette Extraordinary, Rajpatra No. 9 of 2018) — exact inserted rule number not legible this session', family: 'leave', nature: 'Child Care Leave', defaultReason: "Care of child (education/illness/other need)",
      hint: 'Confirmed to exist, and to be a genuinely Chhattisgarh-specific 2018 addition, via finance.cg.gov.in\'s own circular index (title, translated: "amendment to the Leave Rules to implement Child Care Leave for women employees of the State Government"). Restricted, per that title, to WOMEN government servants — unlike Madhya Pradesh\'s 2025 Rules, which extend an equivalent leave to single male employees too; no evidence was found this session that Chhattisgarh has done the same. Both the plain circular PDF and its Gazette copy could not be read this session (one hit a non-Unicode legacy-font encoding, the other is a scanned image) — NO day-count, career cap, or pay-rate is asserted here; confirm your current entitlement with your DDO before applying. Do not assume this matches the Central Government\'s or Madhya Pradesh\'s 730-day figure.',
      extraFields: [{ id: 'fam_info1', label: "Child's Name", type: 'text' }, { id: 'fam_date', label: "Child's Date of Birth", type: 'date' }, { id: 'fam_ta1', label: 'Purpose (education / illness / other specific need)', type: 'textarea', full: true }] },
    special_disability_leave: { label: 'Special Disability Leave', group: 'family', rule: 'Rules 39 &amp; 40, Chhattisgarh Civil Services (Leave) Rules, 2010', family: 'leave', medCert: true, nature: 'Special Disability Leave', defaultReason: 'Injury sustained in the course of official duty',
      hint: 'For disability caused by injury intentionally inflicted (Rule 39) or accidentally incurred (Rule 40) in, or in consequence of, the due performance of official duty; disability must generally manifest within 3 months of the incident, though the sanctioning authority may condone a later manifestation if satisfied as to cause (Rule 39(2)); capped at 24 months per disability, as certified by an Authorized Medical Attendant (Rule 39(3)); counts as duty for pension-qualifying service and is not debited to the leave account (Rule 39(6)). Leave salary: the first 120 days at Earned-Leave-equivalent rate, the remainder at Half-Pay-Leave-equivalent rate (Rule 39(7)) — for the accidental-injury variant specifically, the portion payable at the Earned-Leave-equivalent rate is separately capped at 120 days (Rule 40(2)(iii)). All cases require Administrative Department concurrence (Rule 40-A).' },

    casual_leave: { label: 'Casual Leave (CL)', group: 'casual', rule: 'General Administration Department circular (Casual leave and "optional leave" are both expressly excluded from the definition of "leave" under Rule 10\'s Explanation, Chhattisgarh Civil Services (Leave) Rules, 2010, and administered separately)', family: 'letter', needsRouting: true, nature: 'Casual Leave', subject: 'Application for Casual Leave', defaultReason: 'Personal / domestic affairs',
      hint: 'Rule 10\'s own Explanation states Casual leave "or optional leave" — both named — "which are not recognized as leave under these rules, shall not be combined with any other kind of leave admissible under these rule" — read directly off the Rules text this session. It sits entirely outside the Chhattisgarh Civil Services (Leave) Rules, 2010, and is instead governed by General Administration Department circular. No GAD circular index comparable to Finance Department\'s was found this session, and no primary circular giving the current annual day-count for either Casual Leave or the separately-named "optional leave" could be located — do not assume a specific figure; confirm your current-year balance with your DDO.',
      bodyTemplate: 'I request you to kindly grant me Casual Leave for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, on account of <strong>${reason}</strong>.' },
    special_casual_leave: { label: 'Special Casual Leave', group: 'casual', rule: 'General Administration Department circular (no Chhattisgarh-specific circular listing recognised reasons/day-limits independently confirmed this session)', family: 'letter', needsRouting: true, nature: 'Special Casual Leave', subject: 'Application for Special Casual Leave', defaultReason: '',
      hint: 'Most Indian state governments maintain a General Administration Department circular listing recognised Special Casual Leave reasons (e.g. blood donation, sports events, sterilisation) and day-limits, of the kind Kerala\'s Appendix VII, Section II sets out — but no Chhattisgarh-specific circular of this kind could be located this session. State your specific reason below and confirm the applicable day-limit and any required proof with your DDO before applying.',
      bodyTemplate: 'I request you to kindly grant me Special Casual Leave for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, on account of: <strong>${reason}</strong>.' },

    gis_nomination: { label: 'Group Insurance Scheme — Nomination', group: 'insurance', rule: 'Chhattisgarh Government Employees Group Insurance Scheme, 1985 (Finance Department)', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Head of Office.',
      hint: 'Full scheme text read this session (finance.cg.gov.in): a twin-benefit scheme (insurance cover on death-in-service + Savings Fund lump sum on retirement/cessation), compulsory for employees entering service after the Scheme\'s notification, contributory via monthly subscription in Rs. 10 units — Group D (Class IV) 3 units, Group C (Class III) 5 units, Group B (Class II) 6 units, Group A (Class I) 8 units. As of the document\'s own last-recorded revision (rates effective 1 July 2003): Group D — Rs. 60/month, Rs. 60,000 cover; Group C — Rs. 100/month, Rs. 1,00,000 cover; Group B — Rs. 120/month, Rs. 1,20,000 cover; Group A — Rs. 160/month, Rs. 1,60,000 cover. A Finance Directive (27 May 2017) confirms at least one further rate revision since 2003, and the Savings Fund interest rate has been revised close to annually since (most recently referenced 9 January 2026) — but the 2017-onward rates were not independently confirmed this session; some recent interest-rate directives are oddly titled as revising the Central Government\'s 1980 scheme rather than Chhattisgarh\'s own 1985 scheme, an inconsistency this session could not resolve. Confirm your current Group and subscription/cover amount with your DDO/Finance Department.',
      extraFields: [{ id: 'svc_t1', label: 'Nominee Name', type: 'text' }, { id: 'svc_t2', label: 'Nominee Relationship', type: 'text' }, { id: 'svc_t3', label: 'Share, if more than one nominee', type: 'text' }],
      subject: 'Group Insurance Scheme — Nomination / Change of Nomination',
      bodyTemplate: 'I submit my nomination under the Chhattisgarh Government Employees Group Insurance Scheme, 1985, as follows: <strong>${svc_t1}</strong>, ${svc_t2}.{{#if svc_t3}} Share: ${svc_t3}.{{/if}}' },
    gis_claim: { label: 'Group Insurance Scheme — Claim', group: 'insurance', rule: 'Chhattisgarh Government Employees Group Insurance Scheme, 1985 (Finance Department)', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Head of Office.',
      hint: 'On death in service, the amount payable is the insurance cover appropriate to the member\'s Group plus the accumulated Savings Fund balance (para 11 of the Scheme); on retirement/cessation otherwise, the Savings Fund accumulation alone is payable (para 11(1),(5)). The Scheme\'s own prescribed process routes this through the Head of Office using its own Form Nos. 4-6, per the Scheme text read this session — see the Group Insurance — Nomination type\'s hint for the same currency caveat on rupee figures.',
      extraFields: [{ id: 'svc_date1', label: 'Date of Death / Retirement', type: 'date' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Group Insurance Scheme — Claim (Death / Retirement)',
      bodyTemplate: 'I submit this claim under the Chhattisgarh Government Employees Group Insurance Scheme, 1985, on account of the event dated <strong>${svc_date1}</strong>.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },

    gpf_advance: { label: 'GPF Advance / Withdrawal', group: 'service', rule: 'General Provident Fund Rules, as applicable to Government of Chhattisgarh employees, who are now generally on the Old Pension Scheme (OPS) — restored for employees appointed on/after 1 November 2004 vide Finance Directives dated 8 April 2022, 26 April 2022, and 11 May 2022 (Finance Directive No. 11)', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Directorate of Treasury and Accounts.',
      hint: 'Chhattisgarh restored the Old Pension Scheme (OPS), and with it the General Provident Fund as the applicable retirement-savings vehicle, in place of the National Pension System (NPS), for state employees appointed on or after 1 November 2004 — confirmed via a dated sequence of Finance Directives found this session (FD-07/8 Apr 2022 and FD-08/26 Apr 2022 stopping NPS deductions; FD-11/11 May 2022 as the operative implementation directive; FD-23/20 Sep 2022 and FD-04/25 Jan 2023 governing the resulting NPS-corpus adjustment). Effectively all current Chhattisgarh state employees should now be on GPF, not NPS — if you were recruited during the 2004–2022 window and are unsure of your current status, use the type below instead. The current minimum-subscription percentage, interest rate and permissible advance ceiling under Chhattisgarh\'s own GPF Rules were not independently confirmed this session (a 2020 GPF amendment PDF was located but hit the legacy-font failure mode) — confirm with your DDO/Directorate of Treasury and Accounts.',
      extraFields: [{ id: 'svc_t1', label: 'Purpose (education / illness / housing / vehicle / other)', type: 'text' }, { id: 'svc_t2', label: 'Amount Requested (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Application for GPF Advance / Withdrawal',
      bodyTemplate: 'I request that a GPF advance/withdrawal of <strong>Rs. ${svc_t2}</strong> be sanctioned for the purpose of <strong>${svc_t1}</strong>. I confirm I hold a General Provident Fund account under the Old Pension Scheme as applicable to Chhattisgarh Government employees.{{#if svc_ta1}} ${svc_ta1}{{/if}} I have confirmed the current permissible amount with my DDO/the Directorate of Treasury and Accounts.' },
    ops_nps_transition: { label: 'OPS Restoration — Status Confirmation / Query', group: 'service', rule: 'Finance Directives dated 8 April 2022, 26 April 2022, 11 May 2022 (No. 11), 20 September 2022 (No. 23) and 25 January 2023 (No. 4), Government of Chhattisgarh, Finance Department', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Directorate of Treasury and Accounts.',
      hint: 'For employees appointed on/after 1 November 2004 who were originally enrolled in the National Pension System (NPS) before Chhattisgarh\'s 2022 restoration of the Old Pension Scheme (OPS) for that cohort — use this to formally request confirmation of your current pension status and/or the adjustment of your accumulated NPS corpus into your GPF/pension account, per the Finance Directives cited. This session found the directive titles and dates via finance.cg.gov.in\'s own circular index but could not read their full body text (legacy-font PDFs) — the precise corpus-adjustment mechanics are not asserted here; raise this with your DDO/the Directorate of Treasury and Accounts.',
      extraFields: [{ id: 'svc_date1', label: 'Date of Appointment', type: 'date' }, { id: 'svc_t1', label: 'Former NPS PRAN, if known', type: 'text', placeholder: 'Optional' }, { id: 'svc_ta1', label: 'Nature of query / request', type: 'textarea', full: true }],
      subject: 'Old Pension Scheme Restoration — Status Confirmation / Query',
      bodyTemplate: 'Having been appointed to Government service on <strong>${svc_date1}</strong>{{#if svc_t1}}, and previously enrolled under the National Pension System (PRAN: ${svc_t1}){{/if}}, I request confirmation of my current status under the Old Pension Scheme as restored for Chhattisgarh Government employees appointed on/after 1 November 2004, and the necessary action regarding adjustment of my accumulated pension corpus, if any.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
    leave_encashment: { label: 'Leave Encashment on Retirement', group: 'service', rule: 'Finance Directives dated 12 May 2014 (No. 30) and 27 September 2014 (No. 49), Government of Chhattisgarh, Finance Department', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Head of Office.',
      hint: 'Confirmed to exist as an administered entitlement via finance.cg.gov.in\'s own circular index — the Chhattisgarh Civil Services (Leave) Rules, 2010 itself does not contain a rule titled "leave encashment"; the mechanism instead traces to a Finance Directive dated 12 May 2014 (No. 30, "calculation of eligibility for cash payment of earned leave on retirement of government employees") clarified by a further directive dated 27 September 2014 (No. 49). Neither PDF was read this session — no cap (e.g. whether it mirrors the 300-day Earned Leave accumulation ceiling under Rule 25) or rate figure is asserted; confirm with your DDO before relying on this for a retirement claim.',
      extraFields: [{ id: 'svc_date1', label: 'Date of Retirement / Cessation of Service', type: 'date' }, { id: 'svc_t1', label: 'Unutilised Earned Leave (days)', type: 'text' }, { id: 'svc_t2', label: 'Unutilised Half Pay Leave (days)', type: 'text' }],
      subject: 'Application for Leave Encashment on Retirement',
      bodyTemplate: 'I request that the leave encashment admissible to me on my retirement/cessation of service on <strong>${svc_date1}</strong> be sanctioned. My unutilised balances are: Earned Leave — <strong>${svc_t1}</strong> days; Half Pay Leave — <strong>${svc_t2}</strong> days. I have confirmed the applicable ceiling and rate with my DDO.' },

    hba: { label: 'House Building / Purchase Advance', group: 'advance', rule: 'Finance Directive No. 18 dated 21 May 2004, Government of Chhattisgarh, Finance Department', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your Head of Department / DDO.',
      hint: 'Confirmed to exist via a Finance Directive titled (translated) "fixing the maximum value limit for House Construction and Purchase Loan to Government employees" (No. 18, dated 21 May 2004) — the same day\'s circular index also lists a separate "scheme for providing loans to Government employees through financial institutions" (No. 17, same date, and No. 28 dated 6 August 2004), suggesting Chhattisgarh may route at least part of this advance through bank tie-ups rather than a pure treasury advance, though this was not independently confirmed. The circular PDF itself hit this session\'s legacy-font failure mode — no eligibility, ceiling amount, or interest rate is asserted; confirm current terms with your DDO/Head of Department before applying.',
      extraFields: [{ id: 'svc_t1', label: 'Purpose (construction / purchase / extension / repair)', type: 'text' }, { id: 'svc_t2', label: 'Estimated Cost (₹)', type: 'text' }, { id: 'svc_t3', label: 'Advance Amount Required (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Property / site details', type: 'textarea', full: true }],
      subject: 'Application for House Building / Purchase Advance',
      bodyTemplate: 'I request that a House Building/Purchase Advance be sanctioned to me for the purpose of <strong>${svc_t1}</strong>. The estimated cost is <strong>Rs. ${svc_t2}</strong>, and the advance amount required is <strong>Rs. ${svc_t3}</strong>.{{#if svc_ta1}} Property/site details: ${svc_ta1}.{{/if}} I enclose the documents required under the applicable rules.' },
    festival_advance: { label: 'Festival Advance', group: 'advance', rule: 'Standing Finance Directive dated 5 March 2026, Government of Chhattisgarh, Finance Department (periodically revised — earlier revisions dated 2004, 2009, 2012, and 2022 also confirmed this session)', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO.',
      hint: 'Confirmed live and periodically revised across two decades via finance.cg.gov.in\'s own circular index — most recently a Standing Finance Directive dated 5 March 2026 ("regarding sanction of Festival Advance for Government employees"), with earlier increases dated 2004, 2009, 2012, and 18 August 2022. None of these circular PDFs could be read this session (legacy-font encoding) — no rupee amount for any year, including the current one, is asserted; confirm the current amount and repayment terms with your DDO before applying.',
      extraFields: [{ id: 'svc_t2', label: 'Amount Requested (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Application for Festival Advance',
      bodyTemplate: 'I request that a Festival Advance of <strong>Rs. ${svc_t2}</strong> be sanctioned to me, in accordance with the Finance Department\'s Standing Finance Directive currently in force for the festival advance.{{#if svc_ta1}} ${svc_ta1}{{/if}} I undertake to repay this advance as per the applicable instalment schedule.' },

    family_pension: { label: 'Family Pension — Claim / Intimation', group: 'estate', rule: 'Chhattisgarh Civil Services (Pension) Rules, 1976', family: 'letter', noRemarksBlock: true,
      hint: 'The Chhattisgarh Civil Services (Pension) Rules, 1976 are confirmed to exist and to be currently in force — this session found a direct cross-reference to them inside the Chhattisgarh Civil Services (Leave) Rules, 2010 itself (Rule 30(2), citing "rule 42(b)" of the Pension Rules, 1976, in the context of compulsory retirement). However, no family-pension-specific rule number, percentage-of-pay figure, enhanced-rate duration, or Death-cum-Retirement Gratuity ceiling was independently confirmed this session — the Pension Rules\' own full text was not located in readable form (a related "Pension Forms Set" PDF hit the legacy-font failure mode, and a separately-named "CG_Pension_F_R_2003" PDF, of uncertain relationship to the 1976 Rules, was a scanned image). Confirm all figures with the Directorate of Treasury and Accounts/Directorate of Pension before relying on this tool for a family pension claim.',
      extraFields: [{ id: 'svc_date1', label: 'Date of Death', type: 'date' }, { id: 'svc_t2', label: "Claimant's Relationship to the Deceased", type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Family Pension — Claim / Intimation',
      bodyTemplate: 'I write to intimate the death of the above-named Government employee on <strong>${svc_date1}</strong>, and to request that Family Pension, as admissible under the Chhattisgarh Civil Services (Pension) Rules, 1976, be sanctioned in favour of the eligible member(s) of the family, along with any gratuity admissible on death in service.{{#if svc_t2}} Claimed relationship to the deceased: ${svc_t2}.{{/if}}{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
    deceased_dues_indemnity: { label: "Indemnity Bond — Deceased Employee's Dues", group: 'estate', rule: 'Chhattisgarh Financial Code / Treasury Code (no distinct form number independently confirmed this session)', family: 'letter', noRemarksBlock: true,
      hint: 'This tool could not confirm this session whether Chhattisgarh maintains its own distinct Financial Code/Treasury Code indemnity-bond form number (analogous to Kerala\'s K.F.C. Form No. 9) — confirm the current form and any surety requirement with your Treasury Officer/DDO before executing this bond.',
      extraFields: [{ id: 'svc_date1', label: 'Date of death of employee', type: 'date' }, { id: 'svc_t1', label: 'Name of Claimant(s)', type: 'text' }, { id: 'svc_t2', label: 'Relationship of Claimant(s) to Deceased', type: 'text' }, { id: 'svc_t3', label: 'Amount Claimed (₹)', type: 'text' }, { id: 'svc_ta1', label: "Claimant's address / surety details, if required", type: 'textarea', full: true }],
      subject: "Indemnity — Claim for Deceased Employee's Dues",
      bodyTemplate: 'I/We, <strong>${svc_t1}</strong>, ${svc_t2} of the deceased <strong>${name}</strong>, request payment of the pay, leave salary and other emoluments due, amounting to <strong>Rs. ${svc_t3}</strong>, in respect of death on <strong>${svc_date1}</strong>, and undertake to furnish an indemnity bond (with sureties, if required) in the form currently prescribed by the Treasury.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
  },
};
