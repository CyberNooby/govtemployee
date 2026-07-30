/* =============================================================================
   UTTAR PRADESH — data for state-tool-engine.js. See assets/js/data/kerala.js
   for the schema reference, and assets/js/data/rajasthan.js / chhattisgarh.js
   for the prior examples of this file's research/honesty discipline
   (primary-source extraction, rule-by-rule citation, honest hedging over
   invented figures, and independently resolving each state's current
   NPS/OPS status rather than assuming).

   THE CENTRAL STRUCTURAL FINDING THIS SESSION, STATED UP FRONT — UNLIKE
   RAJASTHAN (its own numbered RSR, 1951) OR CHHATTISGARH (its own numbered
   2010 Leave Rules), UTTAR PRADESH HAS NEVER CONSOLIDATED ITS LEAVE CODE INTO
   A STANDALONE "CIVIL SERVICES (LEAVE) RULES" INSTRUMENT AT ALL. Leave for UP
   state government employees is governed directly by the "Uttar Pradesh
   Fundamental Rules" (FR) and "Subsidiary Rules" (SR) — originally made by
   the Governor under section 241(2)(b) of the Government of India Act, 1935
   (continued in force post-independence as rules under the proviso to
   Article 309 of the Constitution, the standard mechanism by which pre-1950
   Government-of-India-Act-era service rules survive) — and published
   together, to this day, as "Uttar Pradesh Financial Handbook, Volume II,
   Parts II-IV." This was read directly and extensively this session at
   budget.up.nic.in/Fin_H_Book/volume2/ (a genuinely different and BETTER
   extraction situation than Rajasthan's/Chhattisgarh's PDF-based sessions:
   UP's Financial Handbook is hosted as plain, directly-readable per-chapter
   HTML, not a scanned or legacy-non-Unicode-Hindi-font PDF — no OCR was
   needed anywhere in this session; a small custom Python regex-based
   HTML-to-text stripper, written this session since no `lynx`/`html2text`
   was available in the shell, was sufficient). Leave sits in FR Part II,
   Chapter X ("Leave," Rules 58-60, 64-74, 76-78, 80-93, 101, 103-104) plus SR
   Part III: Chapter VIII (medical certificates, 43-45), Chapter IX (leave
   procedures, 80-131), Chapter XI-A (study leave, 146-A), Chapter XII
   (compensatory allowances during leave, 147-152-F), Chapter XIII (maternity
   leave, 153-154), Chapter XIV (hospital leave, 155-156), Chapter XV (leave
   from temporary/officiating service, 157-161-A), Chapter XVI (part-time/
   fee-paid staff, 162-168), and Chapter XVII (probationers/apprentices, 170,
   172). Every FR/SR rule number, day-count and leave-salary fraction cited
   below is a direct read of that clean HTML text (URLs of the form
   budget.up.nic.in/Fin_H_Book/volume2/NN.html), not a secondary summary,
   unless a hint says otherwise. Uttar Pradesh's own Finance Department portal
   pages (finance.up.nic.in / finance.up.gov.in) were UNREACHABLE to every
   tool available this session — WebFetch failed DNS resolution on both
   hostnames, and a direct `curl` from Bash also failed to resolve
   finance.up.nic.in specifically (`curl`, unlike WebFetch, DID successfully
   reach budget.up.nic.in and prsindia.org, which is how this session's
   primary-source reading was possible at all — worth remembering for a
   future session hitting a WebFetch DNS failure on a `.up.gov.in`/`.up.nic.in`
   host: try plain `curl` from Bash before concluding the source is
   unreachable). No WebSearch tool call succeeded this session either — its
   200/200 budget was reported already exhausted before the first query for
   this file could run, exactly the situation chhattisgarh.js's session
   documented — so every finding below that isn't a direct budget.up.nic.in
   read came from WebFetch against html.duckduckgo.com search-result pages
   and a handful of secondary sites (named individually below); none of it is
   a from-memory assertion.

   A GENUINE, WELL-CITED STRUCTURAL QUIRK — "LEAVE NOT DUE" DOES NOT EXIST FOR
   VIRTUALLY ANY CURRENT UP EMPLOYEE, AND IS DELIBERATELY OMITTED BELOW: FR
   Chapter X splits into two parallel leave codes by recruitment date. FR 81
   (the OLD code, using "leave on average pay" / "leave on half average pay" /
   "leave not due" terminology inherited essentially unchanged from the
   pre-1922/pre-1936 Civil Service Regulations) applies only to government
   servants recruited before 1 April 1966 who never opted into the new code —
   a cohort that, fifty-plus years on, no longer meaningfully exists in active
   service. FR 81-B (inserted for "all government servants who enter
   government service on or after April 1, 1966") is the code that applies to
   essentially every UP state employee today, and it does NOT contain a
   "leave not due" provision at all — its six sub-rules cover only Earned
   Leave, Leave on Medical Certificate, Leave on Private Affairs, Commuted
   Leave, and a cross-reference to Extraordinary Leave (FR 85). "Leave Not
   Due" (FR 81(c)) is therefore omitted from this file entirely, not through
   oversight but because it is confirmed, by direct rule-text read, to be a
   dead letter for the FR 81-B cohort every current applicant belongs to.

   A SECOND STRUCTURAL QUIRK, EQUALLY WELL-CITED — UP'S "COMMUTED LEAVE" IS
   NOT A GENERAL MEDICAL-PURPOSE COMMUTATION LIKE EVERY OTHER STATE IN THIS
   APP: FR 81-B(4), read directly, restricts Commuted Leave to a government
   servant "proceeding on study leave under Fundamental Rule 84" for the
   purpose of "obtaining higher technical qualifications" — there is no
   general "commute half-pay-leave-equivalent leave on medical certificate"
   option comparable to Kerala's Rule 84/Rajasthan's Rule 93(c)/Chhattisgarh's
   Rule 29. This file's Commuted Leave type is modelled accordingly (tied to
   Study Leave, FR 84), not copied from another state's medical-commutation
   template. Also distinctive: leave-salary during Leave on Medical
   Certificate (FR 81-B(2), up to 12 months career, +6 months in exceptional
   cases) is payable at FULL "average pay" under FR 87-A(1) — not half — so it
   is genuinely NOT a "half pay leave" analogue; the half-rate leave in UP's
   structure is "Leave on Private Affairs" (FR 81-B(3), capped at 365 days
   career, FR 87-A(3)). This file's type labels follow UP's own FR
   terminology rather than relabelling them to match other states' EL/HPL
   vocabulary, to avoid misrepresenting the actual rule.

   STALE RUPEE FIGURES IN THE PRIMARY TEXT ITSELF — FLAGGED, NOT SILENTLY
   UPDATED OR DROPPED: budget.up.nic.in's own Financial Handbook pages carry a
   site disclaimer that these handbooks "are yet to be revised," and this
   session found direct evidence why that matters: FR 87-A(3) caps leave
   salary on Leave on Private Affairs at "a maximum of Rs. 750" (per month,
   unrevised since at least the "C.S." amendment printed in that page); SR 155
   (Hospital Leave) restricts eligibility to staff drawing "a pay not
   exceeding Rs. 300 per mensem" (effective 1.4.1979, per the rule's own
   text); the House Building Advance rule at budget.up.nic.in/Fin_H_Book/
   volume5/part1/102.html (its own cited revision: "C.S. No. 104, dated
   October 3, 1997") gives a cost ceiling of "150 times basic pay, minimum
   Rs. 2.50 lakhs, maximum Rs. 6 lakhs" and an advance ceiling of "50 months'
   basic pay or Rs. 2,50,000 (construction/purchase) / Rs. 60,000 (repair),
   whichever is less"; and the Motor Cycle/Scooter/Moped Advance rule at
   .../volume5/part1/108.html (cited revision: "C.S. No. 102, dated June 30,
   1993") gives ceilings of "Rs. 10,000" / "Rs. 6,000" and minimum-basic-pay
   eligibility thresholds of "Rs. 600" / "Rs. 850" per month. These are
   OBVIOUSLY obsolete for any current employee (multiple Pay Commissions have
   intervened) — they are presented below explicitly labelled as the
   as-printed historical figures from UP's own currently-hosted official
   text, never as current entitlements, exactly as chhattisgarh.js treats its
   2003-dated Group Insurance table. Where a materially different, more
   recent figure was found via secondary reporting (see House Building
   Advance below), both figures are given, each labelled by source and date,
   per this app's standing rule to flag conflicting figures rather than pick
   one silently.

   NPS / OPS STATUS — THE FINDING THE TASK SPECIFICALLY ASKED THIS SESSION TO
   RESOLVE, AND A GENUINELY DIFFERENT ANSWER FROM RAJASTHAN'S/CHHATTISGARH'S:
   Uttar Pradesh has NOT undertaken a general Old Pension Scheme restoration.
   The National Pension System applies to UP government employees appointed
   on or after 1 April 2005. What this session found, via WebFetch against
   html.duckduckgo.com (multiple 2025-dated Indian news outlets — Dainik
   Jagran, Newstrack, Times Bull, India.com — cross-corroborating the same
   facts; NO primary Finance Department G.O. text was independently located
   or read this session, so treat the specifics below as secondary-corroborated,
   not primary-verified) is a narrow, one-time OPS OPTION window: employees
   who were formally appointed on/after 1 April 2005 but whose underlying
   recruitment process/advertisement was issued BEFORE 28 March 2005 (i.e. a
   cohort caught on the NPS side of the cutoff purely by administrative
   delay in completing an already-initiated pre-cutoff recruitment) were
   given the option to move to OPS instead. Reporting describes repeated
   deadline extensions for exercising this option through 2025 (an original
   31 March 2025 deadline, later reported as extended to 30 September and
   then 30 November 2025) — this is NOT a blanket restoration of OPS for all
   post-2005 UP employees the way Rajasthan's 1.4.2022 restoration or
   Chhattisgarh's 1.11.2004-cohort restoration were; it is a narrow correction
   for a specific pre-cutoff-recruited, post-cutoff-appointed group. Do not
   assume a UP employee recruited normally after 1 April 2005 is on OPS — the
   default for that group remains NPS, as far as this session could establish.
   Separately, and NOT about NPS/OPS: the "General Provident Fund (Uttar
   Pradesh) Rules, 1985" (superseding 1935-dated rules, per legitquest.com's
   index) is the GPF instrument for pre-2005/OPS-eligible employees, and this
   session directly read a clean, primary English-language text — "The
   General Provident Fund (Uttar Pradesh) Rules, 1985-Rule 12 (Amendment and
   Validation) Act, 2022" (U.P. Act No. 9 of 2022, assented 29.9.2022,
   downloaded from prsindia.org and extracted with pdftotext, no OCR needed)
   — but that Act turned out, on full reading, to be a narrow technical
   validation of a 1986 abolition of a GPF incentive bonus under the old
   Rule 12, unrelated to NPS/OPS or to advance/withdrawal terms; no current
   GPF interest rate or advance ceiling is asserted below.

   GROUP INSURANCE — the "Uttar Pradesh State Employees Group Insurance and
   Savings Scheme" (उत्तर प्रदेश राज्य कर्मचारी सामूहिक बीमा एवं बचत योजना) is
   confirmed to exist by name, via a circular index entry at
   indianemployees.com dated 24 October 2005 ("regarding classification of
   pay scales for monthly subscription cover under Uttar Pradesh State
   Employees Group Insurance and Savings Scheme") — a secondary
   circular-aggregator site, not a primary government PDF. This session could
   NOT independently confirm the scheme's founding year, current monthly
   subscription amounts, or current insurance-cover amounts per pay
   group/class — no rupee figure is asserted for this scheme below; confirm
   your current Group/subscription/cover with your DDO before applying.

   FAMILY PENSION — governed by the "Uttar Pradesh Civil Service Regulations"
   (CSR; budget.up.nic.in/Fin_H_Book/CSR/index.html states this reprint is
   "corrected to March, 1998," itself adapted from the Government of India's
   original 1889 Civil Service Regulations), Part IV, Chapter XIX ("Amount of
   Pensions," Articles 468-493), operated together with the "New Family
   Pension Scheme, 1965" as extended to UP (confirmed via a CAG India PDF
   reference found this session, not independently read in full). A UP
   government site, sadup.gov.in (Secretariat Administration Department),
   states a normal family-pension rate of "30 per cent of the last drawn
   salary... but not less than Rs 3,500," explicitly sourced by that page to
   "Sixth Pay Commission" figures — i.e. almost certainly superseded by a
   Seventh Pay Commission revision (the Pension Directorate's own G.O. index,
   read this session at pensiondirectorate.up.gov.in, lists entries dated
   23.12.2016 and 18.7.2017 that are very likely that revision, but their
   content/current minimum figure was not independently read this session —
   NO current minimum-pension rupee figure is asserted below). The same
   sadup.gov.in page gives an enhanced rate of 50% of last-drawn pay/double
   the normal rate, payable for 7 years or until the deceased would have
   turned 65 (whichever is shorter) where 7+ years' qualifying service, and a
   death/retirement gratuity table (2x emoluments under 1 year; 6x for 1-5
   years; 12x for 5-20 years; scaling to a maximum of 33x for 20+ years,
   capped at Rs. 10,00,000) — these percentage/multiplier figures match the
   near-universal Indian pattern and are plausible as current, but were not
   independently verified against a primary G.O. this session; the currency
   of the Rs. 10,00,000 gratuity ceiling specifically is not asserted with
   confidence.

   ADVANCES — House Building Advance is confirmed to exist, governed by
   paragraphs 244-A to 244-L of UP Financial Handbook Volume V, Part I (see
   the stale-figures note above for its own 1997-dated text). A July 2025 UP
   Cabinet decision, reported by indianmasterminds.com (secondary; no primary
   G.O. number located this session), raised the ceiling to Rs. 25 lakh for
   construction/purchase and Rs. 10 lakh for repair, at 7.5% interest (down
   from 9%) — the same article states the ceiling immediately prior to this
   2025 revision was Rs. 7.5 lakh/Rs. 1.80 lakh, meaning at least one further
   revision happened between the 1997 text and 2025 that this session did not
   independently locate. Both the 1997 primary-text figures and the
   2025-reported figures are given below, each explicitly labelled by source
   — do not treat either as certainly current without confirming with your
   DDO. Motor Cycle/Scooter/Moped Advance is confirmed to exist (paragraphs
   246/246-A of the same Volume V Part I) but only the stale 1993-dated
   figures noted above were found; no current ceiling is asserted. "Festival
   Advance," present in Rajasthan's and Chhattisgarh's files as a classic
   small interest-free treasury advance, was deliberately NOT modelled for UP
   this session: what this session actually found for UP under that heading
   was structurally different — an annual ad-hoc Diwali bonus (capped at
   Rs. 7,000 for roughly 8 lakh employees, per patrika.com, October 2025) and
   a separate advance-salary-before-Holi disbursement (per a Hindi OneIndia
   report referencing 28 February 2026) — neither is the repayable
   treasury-advance-with-instalments mechanism this app's "advance" slot
   otherwise models, so forcing a "Festival Advance" type onto these findings
   would misrepresent them; omitted rather than mismatched.

   DELIBERATELY OMITTED, WITH REASONS — "Leave Not Due" (see the structural
   quirk above: FR 81(c) does not apply to the FR 81-B cohort virtually every
   current employee belongs to). Paternity Leave and Child Adoption Leave:
   this session searched specifically (including Hindi-language queries) and
   found NO evidence either exists as a distinct UP state-service rule
   (contrast Rajasthan's Rule 103-A/103-B and Chhattisgarh's Rule 38-A/38-B,
   both independently confirmed in those states' own primary texts) — omitted
   rather than assumed-by-analogy to other states. Leave Encashment (on
   retirement): a single weak, ambiguous hit (a "leave encashment" PDF hosted
   at urise.up.gov.in, which appears to be a UP higher-education-sector HRMS
   portal rather than a general state-civil-service source) was not treated
   as sufficient evidence to include a citable type this session — omitted.
   Study Leave (FR 84/SR Chapter XI-A, Rule 146-A) is omitted for the same
   reason every other state file in this app omits it: no prior state file
   models it as an applicant-facing type. Vacation-Department leave
   adjustments (FR 82/SR Chapter XI) are folded into the Earned Leave hint
   rather than given a separate type, matching this app's general practice
   of not modelling department-specific carve-outs as their own types.

   CHILD CARE LEAVE — confirmed to exist via a secondary-aggregator source
   (mirzapurteachers.in, a teacher-focused UP-government-circulars blog, NOT
   a primary government PDF), citing a G.O. sequence: G.O. No.
   G-573/Das-2018-218-79 dated 24.3.2009 (foundational), amended by G.O. No.
   1301/79-5-2010-33/2009 dated 8.6.2010, G.O. No. Be-A-2-176/Das-2011-2016-79
   dated 11.4.2011, and G.O. No. 3/G-2-100/Das-2014-21679 dated 24.9.2014.
   Per that source: maximum 730 days (2 years) across the entire service,
   usable only until the child turns 18, and — as of those G.O.s —
   RESTRICTED TO FEMALE EMPLOYEES ONLY ("यह अवकाश केवल महिला कार्मिक के लिए ही
   स्वीकृत होता हैं"). Separately, a March 2023 UP Cabinet decision (reported
   by drishtiias.com, a current-affairs aggregator, not a primary source)
   extended a 2-year Child Care Leave specifically to single-parent All India
   Service (IAS/IPS/IFS) officers on the UP cadre — a narrow, AIS-only
   cohort; this session found NO evidence this was extended further to
   single male employees in general UP state (non-AIS) service, unlike
   Madhya Pradesh's 2025 Rules or Rajasthan's Rule 103-C, both of which
   explicitly do extend to single male employees in their own primary texts.
   The exact pay-rate mechanism during UP's Child Care Leave (e.g. whether it
   steps down after a threshold, as Rajasthan's and the Central Government's
   both do) was not confirmed this session — flagged in the type's hint.
   ============================================================================= */
window.STATE_DATA = window.STATE_DATA || {};
window.STATE_DATA.uttarpradesh = {
  key: 'uttarpradesh', name: 'Uttar Pradesh',
  heroTitle: 'Uttar Pradesh — UP Fundamental &amp; Subsidiary Rules and Service Forms',
  heroMeta: 'leave, family care, group insurance &amp; service matters, under the Uttar Pradesh Fundamental Rules and Subsidiary Rules (UP Financial Handbook, Volume II) and the UP Civil Service Regulations',
  idFieldLabel: 'Employee Code',
  coverLetter: false,

  groupOrder: [
    { slot: 'general', name: 'General Leave' },
    { slot: 'lwa', name: 'Extraordinary Leave' },
    { slot: 'family', name: 'Family &amp; Medical Leave' },
    { slot: 'casual', name: 'Casual &amp; Special Leave' },
    { slot: 'insurance', name: 'Group Insurance &amp; Savings Scheme' },
    { slot: 'service', name: 'Service &amp; Establishment Matters' },
    { slot: 'advance', name: 'Advances &amp; Loans' },
    { slot: 'estate', name: 'Family Pension / Estate Claims' },
  ],

  profileFields: [
    { id: 'name', label: 'Full Name', type: 'text', required: true },
    { id: 'pen', label: 'Employee Code', type: 'text', required: true, placeholder: 'e.g., Manav Sampada Employee Code' },
    { id: 'designation', label: 'Post Held', type: 'text', required: true },
    { id: 'office', label: 'Office &amp; Department', type: 'text', required: true, full: true, placeholder: 'e.g., O/o the District Magistrate, Lucknow' },
    { id: 'dob', label: 'Date of Birth', type: 'date', required: true },
    { id: 'entry', label: 'Date of Entry into Service / Commencement of Continuous Service', type: 'date', required: true },
    { id: 'pay', label: 'Pay', type: 'text', required: true, placeholder: 'e.g., Pay Matrix Level 7' },
  ],
  formExtraFields: [
    { id: 'allowances', label: 'Compensatory Allowances Drawn in Present Post', type: 'text', placeholder: 'Optional' },
    { id: 'holidays', label: 'Sundays/Holidays Prefixed/Suffixed to Leave, if any', type: 'text', placeholder: 'e.g., Nil' },
    { id: 'last_leave', label: 'Date of Return from Last Leave (&amp; nature of that leave)', type: 'text', placeholder: 'e.g., 05/01/2026 (Earned Leave) or NA' },
  ],
  formRows: [
    { label: '1. Name of applicant &amp; Employee Code', template: '${name} (Employee Code: ${pen})' },
    { label: '2. Rule under which applied for', template: '${rule}' },
    { label: '3. Post held', field: 'designation' },
    { label: '4. Office and Department', field: 'office' },
    { label: '5. Pay', field: 'pay' },
    { label: '6. Date of entry into service / commencement of continuous service', field: 'entry' },
    { label: '7. Compensatory allowances drawn in present post', field: 'allowances' },
    { label: '8. Nature and period of leave applied for', template: '${nature} for ${duration_str}<br>from ${start} to ${end}' },
    { label: '9. Sundays and holidays, if any, prefixed/suffixed to leave', field: 'holidays' },
    { label: '10. Ground on which leave is applied for', field: 'reason' },
    { label: '11. Date of return from last leave, and the nature and period of that leave', field: 'last_leave' },
    { label: '12. Leave address, if granted', field: 'address' },
  ],

  types: {
    earned_leave: { label: 'Earned Leave', group: 'general', rule: 'Fundamental Rule 81-B(1), Uttar Pradesh Fundamental Rules', family: 'leave', nature: 'Earned Leave', defaultReason: 'Private affairs',
      hint: 'One-eleventh of the period spent on duty; ceases to accrue once the balance reaches 180 days (FR 81-B(1), first proviso). Maximum grantable at a time is 120 days if spent in Asia; up to 180 days if any portion is spent outside Asia, provided the portion spent in India does not exceed 120 days (FR 81-B(1)(ii)). Paid at full "average pay" (FR 87-A(1)). For staff of a vacation department, entitlement is reduced by 30 days for each year the full vacation is availed, pro-rated if only part of the vacation is availed (FR 81-B(1), second proviso; see FR 82/Subsidiary Rules Chapter XI for the vacation-department rules themselves, not separately modelled here). All figures read directly from a clean HTML text of the Uttar Pradesh Fundamental Rules (budget.up.nic.in/Fin_H_Book/volume2/) — no OCR involved. This applies to the FR 81-B cohort (recruited on/after 1.4.1966), i.e. effectively every current employee; a separate, older FR 81 code with different fractions/caps applies only to a now essentially extinct pre-1966-recruit cohort.' },
    medical_certificate_leave: { label: 'Leave on Medical Certificate', group: 'general', rule: 'Fundamental Rule 81-B(2), Uttar Pradesh Fundamental Rules', family: 'leave', medCert: true, nature: 'Leave on Medical Certificate', defaultReason: 'Medical treatment (Medical Certificate enclosed)',
      hint: 'Up to 12 months in all during the entire service (FR 81-B(2)(i)); a further 6 months in exceptional cases, on the recommendation of a Medical Board, once the 12-month limit is exhausted (proviso to FR 81-B(2)(i)). Requires a certificate from a Governor-specified medical authority, for a period not exceeding that recommended. Distinctively (unlike most other states in this app), leave salary during this leave is payable at FULL "average pay," equal to the rate for Earned Leave (FR 87-A(1)) — not at a half rate — so this is not a "half pay leave" analogue; UP\'s half-rate leave is Leave on Private Affairs (below). No leave may be granted unless the sanctioning authority is satisfied there is a reasonable probability of return to duty on expiry (FR 81-B(2)(ii)).' },
    private_affairs_leave: { label: 'Leave on Private Affairs (Half Average Pay)', group: 'general', rule: 'Fundamental Rule 81-B(3), Uttar Pradesh Fundamental Rules', family: 'leave', nature: 'Leave on Private Affairs', defaultReason: 'Private affairs',
      hint: 'Up to 365 days in all during the entire service, earned at one-eleventh of the period spent on duty; on any one occasion, not more than 90 days if spent wholly in Asia, or 90 days plus time spent outside Asia up to a maximum of 180 days if spent partly/wholly outside Asia (FR 81-B(3)). Not grantable unless the sanctioning authority believes the employee will return to duty on its expiry, or unless it is leave preparatory to retirement. Leave salary is payable at HALF the rate applicable to Earned Leave/Medical Certificate Leave (FR 87-A(3)) — this is UP\'s functional half-pay-rate leave. FR 87-A(3)\'s own text caps this half-rate leave salary at "a maximum of Rs. 750" (per month) — an obviously obsolete, decades-stale figure carried in the currently-hosted official text (the site itself discloses its handbooks "are yet to be revised"); do not rely on this rupee figure, and confirm your actual leave-salary calculation with your DDO.' },
    commuted_leave_study: { label: 'Commuted Leave (for Study Leave under FR 84)', group: 'general', rule: 'Fundamental Rule 81-B(4), Uttar Pradesh Fundamental Rules', family: 'leave', nature: 'Commuted Leave (for Study Leave under Fundamental Rule 84)', defaultReason: 'Pursuing an approved course of study for obtaining higher technical qualifications (Study Leave under FR 84)',
      declarationTemplate: 'I confirm that this Commuted Leave is applied for at my option in connection with Study Leave under Fundamental Rule 84, for the purpose of obtaining higher technical qualifications, and I understand that twice the number of days availed will be debited against my Leave on Private Affairs account under Fundamental Rule 81-B(4), Uttar Pradesh Fundamental Rules.',
      hint: 'IMPORTANT — unlike every other state in this app, UP\'s Commuted Leave is NOT a general medical-purpose commutation. FR 81-B(4), read directly this session, restricts it to a government servant "proceeding on study leave under Fundamental Rule 84" for the purpose of obtaining higher technical qualifications; it is half the amount of Leave on Private Affairs admissible, restricted on any one occasion to 45 days if spent wholly in Asia or 90 days if spent wholly/partly outside Asia; twice the amount granted is debited against the Leave on Private Affairs account; not grantable unless the sanctioning authority believes the employee will return to duty on its expiry. The Study Leave rules themselves (FR 84; detailed in Subsidiary Rules Chapter XI-A, Rule 146-A) were not independently read in full this session — confirm your Study Leave sanction and its terms with your DDO before applying for Commuted Leave against it.' },

    extraordinary_leave: { label: 'Extraordinary Leave (EOL)', group: 'lwa', rule: 'Fundamental Rule 85, Uttar Pradesh Fundamental Rules', family: 'leave', nature: 'Extraordinary Leave',
      hint: 'Granted only in special circumstances: (1) when no other leave is by rule admissible, or (2) when other leave is admissible but the government servant applies in writing for Extraordinary Leave in preference to it (FR 85(a)). Not debited against the leave account; no leave salary admissible. May be granted in combination with, or in continuation of, other admissible leave, and periods of unauthorised absence may be retrospectively commuted into Extraordinary Leave (FR 85(b)). FR 81-B(5) separately confirms Extraordinary Leave for the modern (post-1.4.1966) cohort is governed "in accordance with the provisions of Fundamental Rule 85, read with Fundamental Rule 18" — FR 18 itself was not independently read this session. No explicit maximum-continuous-absence ceiling specific to Extraordinary Leave for the FR 81-B cohort was located this session (the older FR 81(d) cohort has an explicit 28-month ceiling, and Subsidiary Rule 156 separately caps Hospital-Leave-plus-other-leave combinations at 28 months) — confirm with your DDO before applying for an extended period.',
      declarationTemplate: 'I understand that no leave salary is admissible during Extraordinary Leave (Fundamental Rule 85, Uttar Pradesh Fundamental Rules), and that it is not debited against my leave account.',
      extraFields: [{ id: 'purpose', label: 'Purpose / Nature of Extraordinary Leave', type: 'text', full: true, placeholder: 'e.g., private employment, higher studies, joining spouse, medical treatment' }] },

    maternity: { label: 'Maternity Leave', group: 'family', rule: 'Subsidiary Rule 153, Uttar Pradesh Financial Handbook, Vol. II, Part III, Chapter XIII (made by the Governor under Fundamental Rule 101)', family: 'leave', medCert: true, nature: 'Maternity Leave', defaultReason: 'Confinement for childbirth',
      hint: 'On full pay, up to the end of 3 months from the date of commencement of leave, for confinement (SR 153(1)); not granted more than 3 times during the entire service, including temporary service; not granted at all if the employee already has 2 or more living children, EXCEPT that if either of the two living children suffers an incurable disease/disability, one further grant is allowed towards a third child, still subject to the 3-times-total cap; no such leave is admissible until at least 2 years have elapsed since the expiry of the last Maternity Leave granted. Not debited against the leave account; may be combined with any other kind of leave (SR 154). Last substantively amended, per the rule\'s own footnote, vide Notification No. G.4-484/X-90-216-79 dated 3.5.1990 — this session found NO evidence of a later increase to 180 days (six months), the figure several other states in this app (e.g. Rajasthan, raised in 2008) now use; UP\'s own text, as currently hosted, still states 3 months. Confirm with your DDO in case a subsequent, unfound Government Order has since revised this.',
      extraFields: [{ id: 'fam_date', label: 'Expected/Actual Date of Delivery', type: 'date' }] },
    miscarriage: { label: 'Miscarriage / Abortion Leave', group: 'family', rule: 'Subsidiary Rule 153(2), Uttar Pradesh Financial Handbook, Vol. II, Part III, Chapter XIII', family: 'leave', medCert: true, nature: 'Leave for Miscarriage / Abortion', defaultReason: 'Miscarriage / Abortion',
      hint: 'Up to a total of 6 weeks on each occasion, irrespective of the number of surviving children, on production of a certificate from the Authorised Medical Attendant (SR 153(2)). Abortion induced under the Medical Termination of Pregnancy Act, 1971 is expressly treated as "abortion" for this purpose (SR 153, Note 3). Not debited against the leave account; combinable with other leave (SR 154).' },
    hospital_leave: { label: 'Hospital Leave', group: 'family', rule: 'Subsidiary Rules 155-156, Uttar Pradesh Financial Handbook, Vol. II, Part III, Chapter XIV (made by the Governor under Fundamental Rule 101)', family: 'leave', medCert: true, nature: 'Hospital Leave', defaultReason: 'Injury/illness sustained in the course of official duty',
      hint: 'Restricted to a specific, named list of hazard-exposed categories of government servant (SR 155): guards in permanent employ, executive Police Department staff, Jail Department warders/orderlies and lunatic-asylum staff, Forest Department subordinates, Animal Husbandry syces, Government Press employees, Government laboratory subordinates, staff working government machinery, Tarai/Bhabar peons, specified Irrigation Department canal staff, excise peons, U.P. Fire Service members, and generally "all other government servants whose duties involve handling of dangerous machinery, explosive materials, poisonous gases and drugs... or who are obliged to perform hazardous tasks" — NOT a general-purpose sick leave for all employees. As printed, eligibility is further limited to a pay not exceeding Rs. 300 per mensem (SR 155(1), effective 1.4.1979) — an obviously obsolete ceiling; confirm current eligibility with your DDO. Maximum 6 months in any one term of 3 years, at one time or by instalments; leave salary at full pay for the first 3 months, half that rate thereafter (SR 155(3)). Not debited against the leave account; combinable with other admissible leave, subject to a combined-absence ceiling of 28 months (SR 156).' },
    special_disability_leave: { label: 'Special Disability Leave', group: 'family', rule: 'Fundamental Rules 83 &amp; 83-A, Uttar Pradesh Fundamental Rules', family: 'leave', medCert: true, nature: 'Special Disability Leave', defaultReason: 'Injury sustained in the course of official duty',
      hint: 'For disability caused by injury in, or in consequence of, the due performance of official duty, or in consequence of official position (FR 83), extended by FR 83-A to injury accidentally incurred in or in consequence of official duty, or illness attributable to a particular duty that increases the ordinary risk of the post. Period certified by a Medical Board, capped at 24 months per disability (FR 83(3)); may be granted more than once if the disability recurs, but not exceeding 24 months for any one disability (FR 83(5)). Counts as duty for pension purposes; not debited against the leave account except as separately provided (FR 83(6)). Leave salary: for the first 4 months (120 days, for the FR 81-B cohort per FR 83(7)\'s Exception) at full average pay, the remainder at half average pay, or at the employee\'s option a further portion at full rate within the FR 81-B(1) Earned Leave limit (FR 83(7)).' },
    child_care_leave: { label: 'Child Care Leave', group: 'family', rule: 'Government Order No. G-573/Das-2018-218-79 dated 24.3.2009, as amended by G.O. Nos. 1301/79-5-2010-33/2009 (8.6.2010), Be-A-2-176/Das-2011-2016-79 (11.4.2011) and 3/G-2-100/Das-2014-21679 (24.9.2014) — this leave does not appear in the Fundamental/Subsidiary Rules text read this session', family: 'leave', nature: 'Child Care Leave', defaultReason: 'Care of child (education/illness/other need)',
      hint: 'Confirmed to exist via a secondary source (a UP-teacher-focused government-circulars blog citing the G.O. sequence above, NOT a primary government PDF read this session): maximum 730 days (2 years) across the entire service, usable only until the child turns 18. As of these G.O.s, RESTRICTED TO FEMALE EMPLOYEES ONLY — this session found no evidence of an equivalent for single male employees in general (non-All-India-Service) UP state service, unlike Rajasthan\'s Rule 103-C or Madhya Pradesh\'s 2025 Rules, both of which explicitly extend to single male employees in their own primary texts. A March 2023 UP Cabinet decision separately extended a 2-year Child Care Leave to single-parent All India Service (IAS/IPS/IFS) officers on the UP cadre specifically — a narrow cohort this type is NOT written for; if you are a single-parent AIS officer, confirm the applicable order with your cadre-controlling authority rather than relying on this type. The exact pay-rate mechanism (e.g. whether it steps down after a threshold, as several other states\' schemes do) was not confirmed this session — confirm with your DDO.',
      extraFields: [{ id: 'fam_info1', label: "Child's Name", type: 'text' }, { id: 'fam_date', label: "Child's Date of Birth", type: 'date' }, { id: 'fam_ta1', label: 'Purpose (education / illness / other specific need)', type: 'textarea', full: true }] },

    casual_leave: { label: 'Casual Leave (CL)', group: 'casual', rule: 'General Administration / Personnel (Karmik) Department order (excluded from the Fundamental/Subsidiary Rules by Subsidiary Rule 201\'s own text)', family: 'letter', needsRouting: true, nature: 'Casual Leave', subject: 'Application for Casual Leave', defaultReason: 'Personal / domestic affairs',
      hint: 'Subsidiary Rule 201 states, in terms read this session (via a secondary hosting of the SR text, indiankanoon.org — the primary budget.up.nic.in SR chapter covering Rule 201 was not independently opened this session): "Casual leave is not recognized and is not subject to any rule... a government servant on casual leave is not treated as absent from duty, and his pay is not intermitted." It sits entirely outside the Fundamental/Subsidiary Rules leave account, the same arrangement documented for Rajasthan and Chhattisgarh, and is instead administered by circular of the General Administration/Personnel (Karmik) Department. No current annual day-count was located this session — confirm your current-year entitlement with your DDO.',
      bodyTemplate: 'I request you to kindly grant me Casual Leave for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, on account of <strong>${reason}</strong>.' },
    special_casual_leave: { label: 'Special Casual Leave', group: 'casual', rule: 'General Administration / Personnel (Karmik) Department order (no Uttar-Pradesh-specific circular listing recognised reasons/day-limits independently confirmed this session)', family: 'letter', needsRouting: true, nature: 'Special Casual Leave', subject: 'Application for Special Casual Leave', defaultReason: '',
      hint: 'Most Indian state governments maintain a circular listing recognised Special Casual Leave reasons (e.g. blood donation, sports events, sterilisation) and day-limits, of the kind Kerala\'s Appendix VII, Section II sets out — no Uttar-Pradesh-specific circular of this kind could be located this session. State your specific reason below and confirm the applicable day-limit and any required proof with your DDO before applying.',
      bodyTemplate: 'I request you to kindly grant me Special Casual Leave for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, on account of: <strong>${reason}</strong>.' },

    gis_nomination: { label: 'Group Insurance &amp; Savings Scheme — Nomination', group: 'insurance', rule: 'Uttar Pradesh State Employees Group Insurance and Savings Scheme', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Head of Office.',
      hint: 'The "Uttar Pradesh State Employees Group Insurance and Savings Scheme" (a twin-benefit scheme, following the common Indian-state pattern of an insurance-cover-on-death component plus a savings-fund component) is confirmed to exist by name, via a secondary circular-index site (indianemployees.com), citing a departmental circular dated 24.10.2005 on pay-scale classification for monthly subscription cover — no primary government PDF was located and read this session. The scheme\'s founding year, current monthly subscription amounts, and current insurance-cover amounts per pay group/class were NOT independently confirmed — no rupee figure is asserted below; confirm your current Group and subscription/cover amount with your DDO before relying on this for a nomination.',
      extraFields: [{ id: 'svc_t1', label: 'Nominee Name', type: 'text' }, { id: 'svc_t2', label: 'Nominee Relationship', type: 'text' }, { id: 'svc_t3', label: 'Share, if more than one nominee', type: 'text' }],
      subject: 'Group Insurance &amp; Savings Scheme — Nomination / Change of Nomination',
      bodyTemplate: 'I submit my nomination under the Uttar Pradesh State Employees Group Insurance and Savings Scheme, as follows: <strong>${svc_t1}</strong>, ${svc_t2}.{{#if svc_t3}} Share: ${svc_t3}.{{/if}}' },
    gis_claim: { label: 'Group Insurance &amp; Savings Scheme — Claim', group: 'insurance', rule: 'Uttar Pradesh State Employees Group Insurance and Savings Scheme', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Head of Office.',
      hint: 'On the common Indian-state Group Insurance and Savings pattern (not independently confirmed for UP\'s specific text this session): the insurance-cover amount appropriate to the member\'s pay group, plus the accumulated Savings Fund balance, is ordinarily payable on death in service; the Savings Fund accumulation alone on retirement/cessation otherwise. See the Nomination type\'s hint for the same currency caveat on rupee figures — confirm current benefit amounts with your DDO before filing a claim.',
      extraFields: [{ id: 'svc_date1', label: 'Date of Death / Retirement', type: 'date' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Group Insurance &amp; Savings Scheme — Claim (Death / Retirement)',
      bodyTemplate: 'I submit this claim under the Uttar Pradesh State Employees Group Insurance and Savings Scheme, on account of the event dated <strong>${svc_date1}</strong>.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },

    gpf_advance: { label: 'GPF Advance / Withdrawal', group: 'service', rule: 'General Provident Fund (Uttar Pradesh) Rules, 1985', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / the Accountant General (A&amp;E), Uttar Pradesh.',
      hint: 'The "General Provident Fund (Uttar Pradesh) Rules, 1985" (superseding 1935-dated rules, per a legitquest.com index entry) is the applicable GPF instrument. This session directly read a clean primary text — "The General Provident Fund (Uttar Pradesh) Rules, 1985-Rule 12 (Amendment and Validation) Act, 2022" (U.P. Act No. 9 of 2022, from prsindia.org) — but that Act is a narrow technical validation of a 1986 abolition of a GPF incentive bonus under the old Rule 12, and does not itself set out current advance/withdrawal terms. No current minimum-subscription percentage, interest rate, or permissible advance ceiling is asserted here. If you were appointed on/after 1.4.2005, you are ordinarily on NPS, not GPF, UNLESS you fall within the narrow pre-28.3.2005-recruitment-advertised OPS-option cohort described in the OPS Option type below — if in doubt, use that type first to confirm your status.',
      extraFields: [{ id: 'svc_t1', label: 'Purpose (education / illness / housing / vehicle / other)', type: 'text' }, { id: 'svc_t2', label: 'Amount Requested (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Application for GPF Advance / Withdrawal',
      bodyTemplate: 'I request that a GPF advance/withdrawal of <strong>Rs. ${svc_t2}</strong> be sanctioned for the purpose of <strong>${svc_t1}</strong>, under the General Provident Fund (Uttar Pradesh) Rules, 1985.{{#if svc_ta1}} ${svc_ta1}{{/if}} I have confirmed the current permissible amount with my DDO/the Accountant General (A&amp;E), Uttar Pradesh.' },
    ops_option_query: { label: 'OPS Option — Status Confirmation / Query', group: 'service', rule: 'One-time OPS option for employees appointed on/after 1.4.2005 whose recruitment advertisement predates 28.3.2005 — confirmed only via secondary 2025 news reporting this session, no primary Finance Department G.O. number located', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / the Directorate of Treasury, Accounts &amp; Pension.',
      hint: 'IMPORTANT — Uttar Pradesh has NOT undertaken a general OPS restoration; NPS remains the default for employees appointed on/after 1.4.2005. This session found (via 2025-dated Indian news reporting only — Dainik Jagran, Newstrack, Times Bull, India.com — no primary G.O. text independently read) a narrow, one-time OPS option limited to employees appointed on/after 1.4.2005 whose underlying recruitment process/advertisement was issued BEFORE 28.3.2005, with a deadline reported as repeatedly extended through late 2025. If you believe you fall within this specific cohort, use this type to request written confirmation of your eligibility and current status from your DDO/the Directorate of Treasury, Accounts &amp; Pension — do NOT assume this applies to you merely because you joined after 1.4.2005; it applies only to the narrow pre-cutoff-recruited/post-cutoff-appointed group described above.',
      extraFields: [{ id: 'svc_date1', label: 'Date of Appointment', type: 'date' }, { id: 'svc_t1', label: 'Date of Recruitment Advertisement/Notification, if known', type: 'text', placeholder: 'Optional — relevant if before 28.3.2005' }, { id: 'svc_t2', label: 'Former NPS PRAN, if known', type: 'text', placeholder: 'Optional' }, { id: 'svc_ta1', label: 'Nature of query / request', type: 'textarea', full: true }],
      subject: 'OPS Option — Status Confirmation / Query',
      bodyTemplate: 'Having been appointed to Government service on <strong>${svc_date1}</strong>{{#if svc_t1}}, pursuant to a recruitment process/advertisement dated ${svc_t1},{{/if}}{{#if svc_t2}} and currently enrolled under the National Pension System (PRAN: ${svc_t2}),{{/if}} I request written confirmation of whether I am eligible for the one-time Old Pension Scheme option available to employees whose recruitment predates 28 March 2005, and if so, the procedure and current deadline for exercising it.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },

    hba: { label: 'House Building Advance', group: 'advance', rule: 'Uttar Pradesh Financial Handbook, Vol. V, Part I, paragraphs 244-A to 244-L', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your Head of Department / DDO.',
      hint: 'The official, currently-hosted rule text (its own cited revision: "C.S. No. 104, dated October 3, 1997") gives a cost ceiling of 150 times basic pay (minimum Rs. 2.50 lakh, maximum Rs. 6 lakh) and an advance ceiling of 50 months\' basic pay or Rs. 2,50,000 (construction/purchase) / Rs. 60,000 (repair), whichever is less — figures that are obviously obsolete after multiple Pay Commissions. A July 2025 UP Cabinet decision, reported by indianmasterminds.com (secondary; no primary G.O. number located this session), raised the ceiling to Rs. 25 lakh for construction/purchase and Rs. 10 lakh for repair, at 7.5% interest (down from 9%) — the same report states the ceiling immediately before this 2025 change was Rs. 7.5 lakh/Rs. 1.80 lakh, so at least one further intermediate revision exists that this session did not locate. Confirm the CURRENT ceiling, interest rate and eligibility conditions with your DDO/Head of Department before applying — do not rely on either figure set above without confirmation.',
      extraFields: [{ id: 'svc_t1', label: 'Purpose (construction / purchase / extension / repair)', type: 'text' }, { id: 'svc_t2', label: 'Estimated Cost (₹)', type: 'text' }, { id: 'svc_t3', label: 'Advance Amount Required (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Property / site details', type: 'textarea', full: true }],
      subject: 'Application for House Building Advance',
      bodyTemplate: 'I request that a House Building Advance be sanctioned to me for the purpose of <strong>${svc_t1}</strong>. The estimated cost is <strong>Rs. ${svc_t2}</strong>, and the advance amount required is <strong>Rs. ${svc_t3}</strong>.{{#if svc_ta1}} Property/site details: ${svc_ta1}.{{/if}} I enclose the documents required under the applicable scheme, and have confirmed the current ceiling and interest rate with my DDO/Head of Department.' },
    motor_vehicle_advance: { label: 'Motor Cycle / Scooter / Moped Advance', group: 'advance', rule: 'Uttar Pradesh Financial Handbook, Vol. V, Part I, paragraphs 246 &amp; 246-A', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your Head of Department / DDO.',
      hint: 'The official, currently-hosted rule text (its own cited revision: "C.S. No. 102, dated June 30, 1993") gives, for Motor Cycle/Scooter: a ceiling of 12 months\' pay or Rs. 10,000 or 80% of the anticipated price (whichever is least), for employees drawing a minimum basic pay of Rs. 600/month; and for Moped/Auto-Cycle: 10 months\' pay or Rs. 6,000 or the anticipated price (whichever is least), minimum basic pay Rs. 850/month. These are 1990s-dated figures, obviously obsolete after multiple Pay Commissions — no current ceiling was located this session. Confirm the current ceiling, eligibility threshold and interest rate with your DDO/Head of Department before applying.',
      extraFields: [{ id: 'svc_t1', label: 'Type of Vehicle', type: 'text' }, { id: 'svc_t2', label: 'Estimated Cost (₹)', type: 'text' }, { id: 'svc_t3', label: 'Advance Amount Required (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Application for Motor Cycle / Scooter / Moped Advance',
      bodyTemplate: 'I request that an advance be sanctioned to me for the purchase of <strong>${svc_t1}</strong>. The estimated cost is <strong>Rs. ${svc_t2}</strong>, and the advance amount required is <strong>Rs. ${svc_t3}</strong>.{{#if svc_ta1}} ${svc_ta1}{{/if}} I have confirmed the current ceiling and eligibility with my DDO/Head of Department.' },

    family_pension: { label: 'Family Pension — Claim / Intimation', group: 'estate', rule: 'Uttar Pradesh Civil Service Regulations, Part IV, Chapter XIX (Articles 468-493), together with the New Family Pension Scheme, 1965 as extended to Uttar Pradesh', family: 'letter', noRemarksBlock: true,
      hint: 'A UP government site (sadup.gov.in, Secretariat Administration Department) states a normal family-pension rate of 30% of last-drawn salary, an enhanced rate of 50% (double the normal rate) payable for 7 years or until the deceased would have turned 65 (whichever is shorter) where 7+ years\' qualifying service, and a death/retirement gratuity table (2x emoluments under 1 year of service; 6x for 1-5 years; 12x for 5-20 years; scaling to a maximum of 33x for 20+ years, capped at Rs. 10,00,000). The percentages/multipliers match the near-universal Indian pattern; however, the same source explicitly ties its stated minimum family pension of Rs. 3,500 to "Sixth Pay Commission" figures, which is almost certainly superseded by a Seventh Pay Commission revision this session could not independently confirm (the Pension Directorate\'s own G.O. index lists likely-relevant entries dated 23.12.2016 and 18.7.2017, neither independently read). NO current minimum-pension or gratuity-ceiling rupee figure is asserted with confidence — confirm with the Directorate of Pension, Government of Uttar Pradesh before relying on this tool for a family pension claim.',
      extraFields: [{ id: 'svc_date1', label: 'Date of Death', type: 'date' }, { id: 'svc_t2', label: "Claimant's Relationship to the Deceased", type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Family Pension — Claim / Intimation',
      bodyTemplate: 'I write to intimate the death of the above-named Government employee on <strong>${svc_date1}</strong>, and to request that Family Pension, as admissible under the Uttar Pradesh Civil Service Regulations and the New Family Pension Scheme, 1965, be sanctioned in favour of the eligible member(s) of the family, along with any gratuity admissible on death in service.{{#if svc_t2}} Claimed relationship to the deceased: ${svc_t2}.{{/if}}{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
    deceased_dues_indemnity: { label: "Indemnity Bond — Deceased Employee's Dues", group: 'estate', rule: 'Uttar Pradesh Financial Handbook / Treasury procedure (no distinct form number independently confirmed this session)', family: 'letter', noRemarksBlock: true,
      hint: 'This session could not confirm whether Uttar Pradesh maintains its own distinct Financial Handbook indemnity-bond form number (analogous to Kerala\'s K.F.C. Form No. 9) for claiming a deceased employee\'s dues — confirm the current form and any surety requirement with your Treasury Officer/DDO before executing this bond.',
      extraFields: [{ id: 'svc_date1', label: 'Date of death of employee', type: 'date' }, { id: 'svc_t1', label: 'Name of Claimant(s)', type: 'text' }, { id: 'svc_t2', label: 'Relationship of Claimant(s) to Deceased', type: 'text' }, { id: 'svc_t3', label: 'Amount Claimed (₹)', type: 'text' }, { id: 'svc_ta1', label: "Claimant's address / surety details, if required", type: 'textarea', full: true }],
      subject: "Indemnity — Claim for Deceased Employee's Dues",
      bodyTemplate: 'I/We, <strong>${svc_t1}</strong>, ${svc_t2} of the deceased <strong>${name}</strong>, request payment of the pay, leave salary and other emoluments due, amounting to <strong>Rs. ${svc_t3}</strong>, in respect of death on <strong>${svc_date1}</strong>, and undertake to furnish an indemnity bond (with sureties, if required) in the form currently prescribed by the Treasury.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
  },
};
