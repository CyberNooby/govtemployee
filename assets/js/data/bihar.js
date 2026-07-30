/* =============================================================================
   BIHAR — data for state-tool-engine.js. See assets/js/data/kerala.js for the
   schema reference, and assets/js/data/uttarakhand.js / punjab.js for the two
   most directly relevant prior examples of this file's research/honesty
   discipline (primary-source extraction wherever possible, rule-by-rule
   citation, honest hedging over invented figures, explicit flagging of
   conflicting sources, and independently resolving the state's current
   NPS/OPS status rather than assuming). Bihar is the first "East zone" state
   added to this app.

   THE PROVENANCE QUESTION THIS FILE WAS SPECIFICALLY ASKED TO RESOLVE — BIHAR
   DID NOT INHERIT UP'S FUNDAMENTAL RULES; IT HAS ITS OWN, LONG-STANDING,
   SEPARATELY-NUMBERED "BIHAR SERVICE CODE": this session located and
   downloaded, directly from Bihar's own Finance Department website
   (state.bihar.gov.in/finance — the file is hosted at
   .../finance/cache/12/Documents/Bihar-Seva-Sanhita.pdf, 473 pages, ~78MB),
   a document titled "बिहार सेवा संहिता" (Bihar Seva Sanhita / "Bihar Service
   Code"). Its own preface identifies it as a 12th-edition privately-published
   reference compilation (publisher: Eastern Book Agency, Patna) that
   incorporates "important and up-to-date central and state government
   decisions" into the Code's own text — i.e. it is the Finance Department's
   own working reference copy of the Code, not a bare, unannotated gazette
   reprint, but also not the raw gazette/notification text itself. Unlike
   Uttar Pradesh/Uttarakhand (still on the inherited UP Fundamental Rules) or
   Punjab (kept "Punjab Civil Services Rules" under its own colonial-era
   name), Bihar's own Service Code is BIHAR'S OWN independent, continuously-
   maintained instrument — Bihar was never carved out of another state the
   way UP's other neighbours in this app were (see the bifurcation note
   below for the one relevant boundary event: Bihar losing territory TO
   Jharkhand, not gaining it from anywhere).

   THE LEGACY-HINDI-FONT GARBLING PROBLEM, HIT HARD HERE — AND HOW THIS
   SESSION WORKED AROUND IT WITHIN A BOUNDED TIME BUDGET: exactly as
   documented in chhattisgarh.js/rajasthan.js/haryana.js, `pdftotext` (both
   plain and `-layout`) on this PDF produces pure garbage for every Devanagari
   character — the document is typeset in a legacy non-Unicode Hindi font
   whose glyph codepoints pdftotext dutifully extracts as if they were
   Latin/ASCII text (confirmed independently via PyMuPDF's own text extractor
   too, same garbling — this is a font-encoding problem, not a
   library-specific one). Per this task's explicit instruction not to repeat
   a prior Haryana session's 10+-minute stall on this exact failure mode,
   this session rasterized a BOUNDED, targeted set of pages (the front-matter/
   table-of-contents pages, plus a handful of body-page samples used only to
   confirm the garbling was real and to test whether deeper page-by-page
   navigation was tractable) via PyMuPDF and ran Tesseract OCR (`-l hin`,
   which produced clean, legible, high-confidence Hindi text — a genuine
   contrast with the garbled pdftotext output) on those pages only. This
   yielded a confident, primary-source read of the Code's own CHAPTER/PART
   STRUCTURE for leave (below), but this session deliberately did NOT attempt
   to OCR through the full ~150-200-page span the table of contents indicates
   the Leave chapters occupy in order to extract verbatim rule text and exact
   current day-count/accrual figures — full-book OCR navigation in this
   privately-typeset compilation (whose internal page/rule cross-references
   turned out, on inspection, to include multiple restarted pagination
   sequences for different Parts/Appendices, making page-number arithmetic
   unreliable) was judged likely to be exactly the kind of open-ended,
   slow-to-converge task this task's own instructions warn against. This is
   the single most important honesty caveat in this file: THE CHAPTER/PART
   STRUCTURE BELOW IS PRIMARY-SOURCED (a direct OCR read of the state's own
   hosted PDF); THE SPECIFIC DAY-COUNTS, ACCRUAL FORMULAS AND ACCUMULATION
   CEILINGS BELOW ARE, WITH FEW EXCEPTIONS NOTED INLINE, SECONDARY-SOURCED
   ONLY (a single Scribd-hosted summary document, "बिहार सरकार के अवकाश नियम
   2023" / "Bihar Government Leave Rules 2023") OR NOT ASSERTED AT ALL.

   BIHAR SERVICE CODE — LEAVE CHAPTER STRUCTURE, AS OCR'D DIRECTLY FROM THE
   TABLE OF CONTENTS (PDF pages 4-5 of the document above) THIS SESSION:
   Chapter 6 ("छुट्टी" / Leave) — Part 1: General Conditions of Leave; Part 2:
   "विशेष और साधारण छुट्टी नियमावली" (Special and Ordinary Leave Rules — i.e.
   Casual Leave and Special Casual Leave appear to be governed WITHIN the
   Service Code itself, structurally similar to Punjab's Appendix 17 pattern,
   rather than by a wholly separate General Administration Department
   circular the way several other states in this app handle Casual Leave —
   this session could not fully confirm this inference by reading the Part 2
   rule text itself, so it is offered as a plausible, TOC-based reading, not
   a certainty); Part 3: Leave Account; Part 4: Grant of Leave; Part 5: Leave
   Salary; Part 6: Exceptions (military officers in civil employment, Bihar
   Survey Department field staff, part-time/fee-paid government servants,
   probationers and apprentices, menials paid from local funds). Chapter 7
   ("विशेष रियायतें" / Special Concessions) — four named subsections: Special
   Disability Leave, Study Leave, "प्रसव छुट्टी" (Confinement/Maternity
   Leave), and Hospital Leave. Part 8, headed "नई छुट्टी नियमावली" ("New
   Leave Rules") — beginning with a General subsection (rule numbers reading
   as approximately 222-226 in the OCR, though exact digits in this
   compilation's TOC were not fully legible/reliable — see below), followed
   by dedicated subsections for Permanent Government Servants (Earned Leave,
   Half Pay Leave, Commuted Leave, Leave Not Due, and Extraordinary Leave, in
   that order — each a distinctly named "भाग" (a), (b), (c), (d), (e)) and
   for Temporary Government Servants, and a further Leave Salary subsection.
   THE NAME "NEW LEAVE RULES" IS ITSELF NOTABLE: it closely parallels the
   Government of India's own 1972 revision of its leave chapter (the CCS
   (Leave) Rules, 1972, informally known at the time of introduction as the
   Centre's "New Leave Rules," replacing the old Fundamental-Rules-based
   leave chapter) — this session offers that parallel as a plausible
   INFERENCE about Bihar's own leave-chapter history (a state-level
   revision/substitution of an older leave chapter, modelled on or
   contemporaneous with the Centre's own 1972 reform), not as an
   independently confirmed fact — the Code's own text, as OCR'd, does not
   itself cite "1972" or reference the Central Rules by name in the portions
   read this session. IMPORTANT DIGIT-RELIABILITY CAVEAT: Tesseract's OCR of
   Devanagari numerals in this dense, multi-column table-of-contents layout
   was inconsistent — chapter/part TITLES (words) OCR'd cleanly and
   repeatably, but the accompanying rule-number and page-number columns
   frequently misread digits (e.g. one page-range read variously as
   fragments like "98-08" or "209" in ways that are not internally
   consistent with the surrounding structure) — so this file cites the
   CONFIRMED chapter/part NAMES and their relative ORDER, but does not assert
   precise rule numbers beyond the approximate "rules 222-226" for Part 8's
   General subsection, and does not assert exact page numbers at all.

   LEAVE DAY-COUNTS/FORMULAS — SECONDARY-SOURCED, TYPE BY TYPE: a single
   Scribd-hosted document, "बिहार सरकार के अवकाश नियम 2023" ("Bihar
   Government Leave Rules 2023," scribd.com/document/710798660/3-LEAVE, read
   via its preview text this session, NOT the full 19-page document and NOT
   independently cross-corroborated against a second source), states: Casual
   Leave 16 days/year; Restricted Holidays 3 days/year (not modelled as an
   applicant-facing type in this file — see below); Half Pay Leave 20
   days/year; Maternity Leave 180 days; Paternity Leave 15 days; Child Care
   Leave 730 days for a maximum of 2 children; Extraordinary Leave up to 3
   months, or up to 18 months in certain (unspecified in the preview)
   circumstances. These figures are used below, but every type's own hint
   flags this single-secondary-source status explicitly rather than
   presenting them as independently verified — confirm your own current
   entitlement with your DDO/HRMS before relying on any of them.

   BIHAR PENSION RULES, 1950 — CONFIRMED AS THE CURRENT GOVERNING PENSION
   INSTRUMENT BY AN UNUSUALLY AUTHORITATIVE SECONDARY SOURCE, BUT WITH STALE
   PRIMARY TEXT: the Principal Accountant General (Audit & Entitlement),
   Bihar's own FAQ page (cag.gov.in/ae/bihar/en/faqs?type=pension — the
   Government of India's own audit body, a strong secondary corroboration of
   current applicability even though it states no figures) says in terms:
   "Pension and Gratuity to the employees retiring from Bihar Government is
   regulated by Bihar Pension Rules, 1950." This session also read (via
   legitquest.com, a legal-database secondary source, not a primary gazette
   text) portions of the Rules' OWN original 1950 text — effective 20
   January 1950, qualifying service defined at Rule 29/58, a Finance
   Department Resolution dated 23 August 1950 — but the specific family-
   pension provision read (Rule 48) is phrased in plainly pre-liberalisation,
   colonial-continuity language ("Government recognises no claim by a widow
   on account of the service of her husband" except in defined extraordinary
   circumstances) that is almost certainly long superseded by later
   liberalising amendments (matching the nationwide post-1964 pattern every
   other state in this app's file reflects) — this session could NOT trace
   those amendments or any current family-pension percentage, gratuity
   ceiling, or commutation percentage, so NONE is asserted below; this is a
   deliberately more conservative treatment than this file could have given
   if it had simply repeated the 1950 text's own figures.

   NPS / OPS STATUS — THE OTHER FINDING THIS SESSION WAS SPECIFICALLY ASKED
   TO RESOLVE: Bihar's own NPS cutoff date is 1 SEPTEMBER 2005 — a date
   distinct from every other North/Central-zone state this app has covered
   (UP 1.4.2005, Uttarakhand 1.10.2005, Rajasthan/Punjab 1.1.2004,
   Chhattisgarh 1.11.2004) — corroborated by THREE independent secondary
   sources this session: a reported Patna High Court ruling (dated 23 April
   2026, per supremetoday.ai) stating the ruling "reinforces fairness in
   applying Bihar's pension resolutions, especially for those selected
   before the New Pension Scheme (NPS) cut-off of September 1, 2005"; a
   university-employee circular reference describing the "New Contributory
   Pension Scheme" as applying to staff "appointed on or after 01.09.2005 in
   the Universities and their Constituent Colleges"; and a Hindi-language
   news report (news4nation.com). None of these is a primary Finance
   Department notification independently read this session, but their
   mutual, independent agreement on the same date is treated as reasonably
   reliable corroboration for the CUTOFF DATE itself. SEPARATELY, AND MORE
   NARROWLY: the same news report describes a Bihar Finance Department
   resolution reported dated 28 November 2023 that reopened an Old Pension
   Scheme (OPS) OPTION specifically for TEACHERS appointed after the
   1.9.2005 cutoff, with an application-window deadline reported only as
   "October 22" (the year was not legible in the snippet read this session).
   THIS SESSION COULD NOT CONFIRM: (a) whether this OPS-reopening option
   extends to Bihar government employees generally or is genuinely
   education-department/teacher-specific only (the only source read this
   session discusses teachers specifically); (b) the precise eligibility
   mechanic (e.g. whether it turns on recruitment-advertisement date vs.
   actual joining date, the narrowing pattern this app's Rajasthan/Punjab/
   Uttarakhand/HP/UP files each independently found for their own states);
   or (c) the specific resolution/notification number. This session found NO
   evidence of a Bihar Unified Pension Scheme (UPS) adoption (unlike
   Uttarakhand) — no UPS claim is made below. NET PICTURE: an active Bihar
   state employee appointed before 1.9.2005 is very likely on the Bihar
   Pension Rules, 1950 (Old Pension Scheme, as amended, current figures not
   independently confirmed this session); one appointed on/after that date
   is, by default, on NPS, UNLESS they fall within the narrow, teacher-
   specific (per the sole source found) 28.11.2023 OPS-reopening window —
   confirm your own status with your DDO/HRMS rather than assuming either.

   GROUP INSURANCE — CONFIRMED BY NAME, BUT WITH CLEARLY STALE 1994 FIGURES:
   the "Bihar Government Servant's Compulsory Group Insurance Rules, 1994"
   is confirmed to exist and to be the operative scheme name via two
   independent legal-database secondary sources (indiankanoon.org and
   latestlaws.com, both reproducing what reads as the Rules' own statutory
   text, though neither is a primary gazette PDF fetched directly this
   session). Structure and 1994-dated figures found: membership compulsory
   for work-charged, temporary and permanent Gazetted/Non-Gazetted
   government servants appointed on/after 1 October 1994 (pre-1994 members
   could opt in by 25 October 1994); Class IV employees: Rs. 50/month
   premium, Rs. 50,000 insurance cover; Classes III/II/I: Rs. 96/month
   premium, Rs. 96,000 insurance cover; premiums split 2/3 to a "Saving
   Fund" and 1/3 to an "Insurance Fund"; accumulated savings carry 12.5% per
   annum compound interest. NO subsequent amendment to these rupee figures
   was located this session — given more than three decades and multiple
   Pay Commission-linked revisions have elapsed since 1994, these figures
   are almost certainly stale/superseded, and are presented below with that
   explicit caveat rather than as current amounts — confirm your actual
   current premium/cover with your DDO/HRMS before relying on them.

   GENERAL PROVIDENT FUND — NAME AND AMENDMENT DATES CONFIRMED, SUBSTANTIVE
   CONTENT NOT: the original "Bihar General Provident Fund Rules" (1948,
   Notification No. 1057-F dated 18 August 1948) is confirmed via
   indiankanoon.org, with two later amendments confirmed by name/number/date
   via legal-index secondary sources (indianemployees.com/legitquest.com):
   the "Bihar General Provident Fund (Amendment) Rules, 2022" (Notification
   No. 1327, dated 26 December 2022) and the "Bihar General Provident Fund
   (Amendment) Rules, 2024" (Notification No. 632, dated 26 June 2024). This
   session could NOT read the substantive content of either amendment (a
   direct fetch attempt on the 2022 amendment's own page 404'd) — no
   subscription rate, contribution ceiling, or advance/withdrawal figure is
   asserted below. By the same logic as the NPS cutoff above, GPF membership
   most likely tracks the pre-1.9.2005-recruitment cohort, but this specific
   linkage was not independently confirmed this session.

   ADVANCES — DELIBERATELY OMITTED AS A WHOLE CATEGORY, WITH REASONS: this
   session found NO Bihar-specific evidence whatsoever for House Building
   Advance, Motor Vehicle/Motor Cycle Advance, or Festival Advance schemes —
   every search surfaced only Central Government schemes or nothing at all
   (contrast Uttarakhand's file, which at least found application-form
   documents, or Rajasthan's, which found a notification number even without
   a rupee figure). Rather than invent a scheme name, ceiling or interest
   rate for Bihar specifically, the entire 'advance' category slot is left
   out of groupOrder below — the same conservative choice punjab.js made for
   the identical category under an identical evidentiary gap.

   BIHAR/JHARKHAND BIFURCATION (15 NOVEMBER 2000) — WHAT THIS FILE CAN AND
   CANNOT CLAIM ABOUT IT: under the Bihar Reorganisation Act, 2000, Jharkhand
   was carved OUT OF Bihar with effect from 15 November 2000 (this is the
   mirror-image event to Chhattisgarh being carved out of Madhya Pradesh the
   same year, and to Telangana being carved out of Andhra Pradesh in 2014 —
   both already covered by this app). Section 85 of that Act (per a secondary
   summary read this session, not the Act's own primary text) empowered the
   appropriate government to adapt or modify laws made before the "appointed
   day" — including, by the general pattern every Indian state-reorganisation
   statute follows, existing Bihar service/leave/pension rules — for
   application to both successor states, within a window (reported as two
   years) of the split, rather than lapsing them outright. This file makes NO
   claim about Jharkhand's OWN current, independently-evolved service rules
   (that is explicitly out of scope for this task) — it only notes that
   Bihar's OWN Service Code, Pension Rules and Group Insurance Rules
   discussed above all significantly PRE-DATE the 2000 split (1950, 1994,
   and the Service Code's own older core), so the relevant provenance
   direction here is "Bihar's pre-2000 instruments continued to govern
   Bihar itself after Jharkhand's departure," not "Bihar inherited anything
   from a parent state" (Bihar had none, in the direction this app's UP-
   derived states did).

   DELIBERATELY OMITTED OR NOT MODELLED, WITH REASONS: Restricted Holidays
   (3 days/year per the single secondary source above) is a holiday-election
   mechanism, not an application-for-leave in the sense this engine's
   'leave'/'letter' primitives model, and no other state file in this app
   models it — omitted. Miscarriage/Abortion Leave, and any Adoption Leave
   provision, were not separately identified in the Chapter 7 table-of-
   contents structure read this session (only Special Disability Leave,
   Study Leave, Maternity/Confinement Leave and Hospital Leave are named
   there as distinct subsections) — rather than assume either exists as a
   distinct, separately-numbered provision the way several peer states'
   files confirm for their own states, both are omitted here; a maternity
   claim involving miscarriage should be raised as a query with your DDO.
   Study Leave (Chapter 7, Part 2, confirmed to exist by name and position
   in the TOC) is omitted for the same reason every other state file in this
   app omits it: no prior file models it as an applicant-facing type. Special
   Casual Leave is included below, but WITHOUT a Punjab-style enumerated list
   of recognised reasons (sterilisation, sports, trade-union office-bearer,
   etc.) — this session found no Bihar-specific circular or Service Code
   sub-clause listing such reasons, so a free-text reason field is used
   instead, with the hint flagging the gap explicitly.
   ============================================================================= */
window.STATE_DATA = window.STATE_DATA || {};
window.STATE_DATA.bihar = {
  key: 'bihar', name: 'Bihar',
  heroTitle: 'Bihar — Bihar Service Code (Bihar Seva Sanhita) &amp; Service Forms',
  heroMeta: 'leave, family care, Group Insurance, GPF/NPS/OPS &amp; family pension matters, under the Bihar Service Code (Bihar Seva Sanhita), the Bihar Pension Rules, 1950, and the Bihar Government Servant&#39;s Compulsory Group Insurance Rules, 1994',
  idFieldLabel: 'Employee Code (HRMS)',
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
    { id: 'pen', label: 'Employee Code (HRMS)', type: 'text', required: true, placeholder: 'e.g., Bihar HRMS Employee Code' },
    { id: 'designation', label: 'Post Held', type: 'text', required: true },
    { id: 'office', label: 'Office &amp; Department', type: 'text', required: true, full: true, placeholder: 'e.g., O/o the District Magistrate, Patna' },
    { id: 'dob', label: 'Date of Birth', type: 'date', required: true },
    { id: 'entry', label: 'Date of Entry into Service', type: 'date', required: true },
    { id: 'pay', label: 'Pay', type: 'text', required: true, placeholder: 'e.g., Pay Level 7' },
  ],
  formExtraFields: [
    { id: 'allowances', label: 'Compensatory Allowances Drawn in Present Post', type: 'text', placeholder: 'Optional' },
    { id: 'holidays', label: 'Sundays/Holidays Prefixed/Suffixed to Leave, if any', type: 'text', placeholder: 'e.g., Nil' },
    { id: 'last_leave', label: 'Date of Return from Last Leave (&amp; Nature/Period of that Leave)', type: 'text', placeholder: 'e.g., 05/01/2026, Earned Leave, or NA' },
  ],
  formRows: [
    { label: '1. Name of applicant &amp; Employee Code', template: '${name} (Employee Code: ${pen})' },
    { label: '2. Rule under which applied for', template: '${rule}' },
    { label: '3. Post held', field: 'designation' },
    { label: '4. Office and Department', field: 'office' },
    { label: '5. Pay', field: 'pay' },
    { label: '6. Date of entry into service', field: 'entry' },
    { label: '7. Compensatory allowances drawn in present post', field: 'allowances' },
    { label: '8. Nature and period of leave applied for', template: '${nature} for ${duration_str}<br>from ${start} to ${end}' },
    { label: '9. Sundays and holidays, if any, prefixed/suffixed to leave', field: 'holidays' },
    { label: '10. Ground on which leave is applied for', field: 'reason' },
    { label: '11. Date of return from last leave, and the nature and period of that leave', field: 'last_leave' },
    { label: '12. Leave address, if granted', field: 'address' },
  ],

  types: {
    earned_leave: { label: 'Earned Leave', group: 'general', rule: 'Bihar Service Code, Chapter 6, Part 8 ("New Leave Rules"), Permanent Government Servants section', family: 'leave', nature: 'Earned Leave', defaultReason: 'Private affairs',
      hint: 'PRIMARY-SOURCE-CONFIRMED TO EXIST AND NAMED AS A DISTINCT PROVISION, FIGURES NOT CONFIRMED: this session directly OCR\'d the table of contents of the Bihar Service Code (hosted by Bihar\'s own Finance Department at state.bihar.gov.in/finance) and confirmed a distinct, named "Earned Leave" sub-part within Chapter 6, Part 8 ("New Leave Rules"), for Permanent Government Servants — but could not reliably OCR the exact rule number or the current accrual rate/maximum-accumulation ceiling from this large (473-page), legacy-Hindi-font-encoded compilation within a reasonable time budget (pdftotext produces only garbled output for this document; full-book OCR navigation was judged too slow to be worth attempting, per this app\'s standing rule against stalling on stubborn scanned/garbled PDFs). No day-count, accrual formula, or accumulation cap is asserted — confirm your current EL balance and accrual method with your DDO/HRMS before applying.' },
    half_pay_leave: { label: 'Half Pay Leave', group: 'general', rule: 'Bihar Service Code, Chapter 6, Part 8 ("New Leave Rules"), Permanent Government Servants section', family: 'leave', nature: 'Half Pay Leave', defaultReason: 'Private affairs',
      hint: 'Confirmed to exist as a distinct, named provision via direct OCR of the Bihar Service Code\'s own table of contents this session (see Earned Leave\'s hint for the sourcing/methodology caveat). A single secondary source (a Scribd-hosted summary, "Bihar Government Leave Rules 2023," not independently corroborated or read in full this session) states 20 days credited per completed year of service — the same figure used nationally under the Centre\'s own CCS (Leave) Rules pattern, so it reads as plausible, but is NOT independently confirmed against Bihar\'s own primary rule text. Leave salary is conventionally at half the pay drawn immediately before proceeding on leave, but this was not independently confirmed for Bihar this session either.' },
    commuted_leave: { label: 'Commuted Leave', group: 'general', rule: 'Bihar Service Code, Chapter 6, Part 8 ("New Leave Rules"), Permanent Government Servants section', family: 'leave', medCert: true, nature: 'Commuted Leave (in lieu of Half Pay Leave)', defaultReason: 'Medical treatment (Medical Certificate enclosed)',
      hint: 'Confirmed to exist as a distinct, named provision ("रूपान्तरित छुट्टी" — literally "converted/commuted leave") via direct OCR of the Bihar Service Code\'s own table of contents this session, positioned immediately after Half Pay Leave in the Permanent Government Servants section of Chapter 6, Part 8. No day-count, medical-certificate requirement, or debit-ratio (commonly twice the days taken debited against Half Pay Leave, under the Centre\'s own parallel CCS pattern) was independently confirmed for Bihar\'s own current text this session — the medical-certificate flag on this form is a conventional default, not a Bihar-specific confirmation. Confirm current terms with your DDO/HRMS before applying.' },
    leave_not_due: { label: 'Leave Not Due', group: 'general', rule: 'Bihar Service Code, Chapter 6, Part 8 ("New Leave Rules"), Permanent Government Servants section', family: 'leave', medCert: true, nature: 'Leave Not Due', defaultReason: 'Medical treatment (Medical Certificate enclosed)',
      hint: 'Confirmed to exist as a distinct, named provision ("अदेय छुट्टी" — literally "leave not [yet] due/payable") via direct OCR of the Bihar Service Code\'s own table of contents this session, positioned after Commuted Leave in the Permanent Government Servants section of Chapter 6, Part 8. No day-count, debit mechanism, or "reasonable prospect of return to duty" conditions were independently confirmed for Bihar\'s own current text this session (these are the conventional conditions under the parallel Central Government provision, not asserted as Bihar-specific here). Confirm current terms with your DDO/HRMS before applying.' },

    extraordinary_leave: { label: 'Extraordinary Leave (EOL)', group: 'lwa', rule: 'Bihar Service Code, Chapter 6, Part 8 ("New Leave Rules"), Permanent Government Servants section', family: 'leave', nature: 'Extraordinary Leave',
      hint: 'Confirmed to exist as a distinct, named provision ("असाधारण छुट्टी") via direct OCR of the Bihar Service Code\'s own table of contents this session — the final named sub-part in the Permanent Government Servants section of Chapter 6, Part 8, after Leave Not Due. A single secondary source (a Scribd-hosted summary, not independently corroborated) states Extraordinary Leave may be granted up to 3 months, or up to 18 months in unspecified "certain cases" — neither figure is independently confirmed against Bihar\'s own primary rule text this session. Conventionally (matching the pattern in every peer state\'s file in this app), no leave salary is admissible and it is not debited to any leave account, but this was not independently confirmed for Bihar specifically. Confirm with your DDO/HRMS before applying for an extended period.',
      declarationTemplate: 'I understand that no leave salary is admissible during Extraordinary Leave under the Bihar Service Code, and that it is not debited against my leave account.',
      extraFields: [{ id: 'purpose', label: 'Purpose / Nature of Extraordinary Leave', type: 'text', full: true, placeholder: 'e.g., private employment, higher studies, joining spouse, medical treatment' }] },

    maternity: { label: 'Maternity Leave', group: 'family', rule: 'Bihar Service Code, Chapter 7, Part 3 ("प्रसव छुट्टी" / Confinement Leave)', family: 'leave', medCert: true, nature: 'Maternity Leave', defaultReason: 'Confinement for childbirth',
      hint: 'Confirmed to exist as a distinct, named provision within Chapter 7 ("Special Concessions") of the Bihar Service Code via direct OCR of the Code\'s own table of contents this session — Part 3 is headed "प्रसव छुट्टी" (Confinement/Maternity Leave), a single named rule in that TOC listing (suggesting a consolidated provision, rather than several separately-numbered sub-clauses). A single secondary source (a Scribd-hosted summary, not independently corroborated) states 180 days — this matches the modern, post-6th-Pay-Commission figure most Indian states and the Centre now use, and likely reflects a later amendment/order updating an originally shorter (e.g. 3-month) figure in the base Code text, but this session could not independently confirm either the 180-day figure itself or any amending order/number. Confirm your current entitlement with your DDO/HRMS before applying.',
      extraFields: [{ id: 'fam_date', label: 'Expected/Actual Date of Delivery', type: 'date' }] },
    paternity: { label: 'Paternity Leave', group: 'family', rule: 'Government of Bihar order (specific number/date not independently verified this session)', family: 'leave', nature: 'Paternity Leave', defaultReason: 'Delivery of child by spouse',
      hint: 'NOT located within the Bihar Service Code\'s own Chapter 6/7 table of contents this session — Paternity Leave, like in several peer states in this app (e.g. Uttar Pradesh\'s own file found no evidence of it in UP\'s Fundamental Rules text at all), most likely exists via a separate, more recent Government of Bihar order rather than the base Code text, following the same pattern as the Central Government\'s own Paternity Leave (which stems from a 1999 DoPT Office Memorandum, not the CCS Leave Rules\' original 1972 text). A single secondary source (a Scribd-hosted summary, not independently corroborated, and no order number located) states 15 days. Confirm your eligibility and the applicable order with your DDO/HRMS before applying.',
      extraFields: [{ id: 'fam_date', label: 'Date of Delivery', type: 'date' }, { id: 'fam_info1', label: 'Name of Spouse', type: 'text', placeholder: 'Optional' }] },
    child_care_leave: { label: 'Child Care Leave', group: 'family', rule: 'Government of Bihar order (specific number/date not independently verified this session)', family: 'leave', nature: 'Child Care Leave', defaultReason: 'Care of child (education/illness/other need)',
      hint: 'NOT located within the Bihar Service Code\'s own Chapter 6/7 table of contents this session — like Paternity Leave above, and consistent with the pattern in most peer states in this app (where Child Care Leave typically originates in a post-2008 government order following the 6th Central Pay Commission\'s recommendation, not the base leave code), this most likely rests on a separate Government of Bihar order this session could not locate/cite by number. A single secondary source (a Scribd-hosted summary, not independently corroborated) states 730 days (2 years) across the entire service, for a maximum of 2 children — matching the common pattern several peer states in this app use (e.g. Uttarakhand, Rajasthan). No spell-length minimum/maximum, age-of-child ceiling, or eligibility restriction (e.g. women-only vs. all employees) was located this session — confirm current terms with your DDO/HRMS before applying.',
      extraFields: [{ id: 'fam_info1', label: "Child's Name", type: 'text' }, { id: 'fam_date', label: "Child's Date of Birth", type: 'date' }, { id: 'fam_ta1', label: 'Purpose (education / illness / other specific need)', type: 'textarea', full: true }] },
    special_disability_leave: { label: 'Special Disability Leave', group: 'family', rule: 'Bihar Service Code, Chapter 7, Part 1 (Special Disability Leave)', family: 'leave', medCert: true, nature: 'Special Disability Leave', defaultReason: 'Injury sustained in the course of official duty',
      hint: 'Confirmed to exist as a distinct, named provision — the first of four named subsections in Chapter 7 ("Special Concessions") of the Bihar Service Code — via direct OCR of the Code\'s own table of contents this session. No day-count/ceiling, certifying-authority requirement, or leave-salary rate was independently confirmed for Bihar\'s own current text this session; the general Indian-state pattern (period certified by a Medical Board/Authorised Medical Attendant, commonly capped around 24 months per disability) is NOT asserted here as Bihar-specific. Confirm current terms with your DDO/HRMS before applying.' },
    hospital_leave: { label: 'Hospital Leave', group: 'family', rule: 'Bihar Service Code, Chapter 7, Part 4 (Hospital Leave)', family: 'leave', medCert: true, nature: 'Hospital Leave', defaultReason: 'Injury/illness sustained in the course of official duty',
      hint: 'Confirmed to exist as a distinct, named provision — the fourth named subsection in Chapter 7 ("Special Concessions") of the Bihar Service Code, after Special Disability Leave, Study Leave and Confinement Leave — via direct OCR of the Code\'s own table of contents this session. As in most peer states in this app, this leave is typically restricted to a defined list of hazardous-duty categories (Group D staff, staff handling dangerous machinery/explosives, etc.) and requires a medical certificate confirming the illness/injury was directly due to official duty — but this session could NOT independently confirm Bihar\'s own current eligibility list, day-count, or leave-salary rate. Confirm current terms with your DDO/HRMS before applying.' },

    casual_leave: { label: 'Casual Leave (CL)', group: 'casual', rule: 'Bihar Service Code, Chapter 6, Part 2 ("Special and Ordinary Leave Rules")', family: 'letter', needsRouting: true, nature: 'Casual Leave', subject: 'Application for Casual Leave', defaultReason: 'Personal / domestic affairs',
      hint: 'The Bihar Service Code\'s own table of contents, OCR\'d directly this session, lists a Chapter 6, Part 2 headed "विशेष और साधारण छुट्टी नियमावली" ("Special and Ordinary Leave Rules") — this session reads that as the likely home of both Casual Leave ("साधारण"/ordinary) and Special Casual Leave within the Code itself, structurally similar to Punjab\'s Appendix 17 pattern, rather than a wholly separate General Administration Department circular the way several other states in this app handle Casual Leave — but this is an inference from the TOC heading, not a confirmed read of the Part 2 rule text itself. A single secondary source (a Scribd-hosted summary, not independently corroborated) states 16 days of Casual Leave per year. As with every peer state in this app, Casual Leave conventionally sits outside the formal leave account, is not treated as absence from duty, and pay is not intermitted — none of that is independently confirmed for Bihar\'s own text this session. Confirm your current-year balance with your DDO/HRMS.',
      bodyTemplate: 'I request you to kindly grant me Casual Leave for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, on account of <strong>${reason}</strong>.' },
    special_casual_leave: { label: 'Special Casual Leave', group: 'casual', rule: 'Bihar Service Code, Chapter 6, Part 2 ("Special and Ordinary Leave Rules")', family: 'letter', needsRouting: true, nature: 'Special Casual Leave', subject: 'Application for Special Casual Leave', defaultReason: '',
      hint: 'Structurally grouped with Casual Leave in the same Chapter 6, Part 2 heading of the Bihar Service Code\'s table of contents (see Casual Leave\'s hint for the sourcing caveat on this inference). UNLIKE Punjab\'s file in this app (which found and read an enumerated list of recognised reasons — sterilisation, sports events, trade-union office-bearer duties, etc. — in PCSR\'s own Appendix 17), this session found NO Bihar-specific circular or Service Code sub-clause listing recognised Special Casual Leave reasons or their individual day-limits. State your specific reason below, and confirm the applicable day-limit and any required proof with your DDO/HRMS before applying.',
      bodyTemplate: 'I request you to kindly grant me Special Casual Leave for <strong>${duration_str}</strong>, from <strong>${start}</strong> to <strong>${end}</strong>, on account of: <strong>${reason}</strong>.' },

    gis_nomination: { label: 'Group Insurance Scheme — Nomination', group: 'insurance', rule: "Bihar Government Servant's Compulsory Group Insurance Rules, 1994", family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Head of Office.',
      hint: 'Confirmed by name via two independent legal-database secondary sources (indiankanoon.org and latestlaws.com, both reproducing statutory text — not a primary gazette PDF fetched directly this session): membership is compulsory for work-charged, temporary and permanent Gazetted/Non-Gazetted government servants appointed on/after 1 October 1994 (pre-1994 employees could opt in by 25 October 1994). THE FIGURES FOUND ARE THE SCHEME\'S OWN ORIGINAL, 1994-DATED ONES — almost certainly stale after three-plus decades and multiple Pay Commission revisions, and presented here ONLY as a historical baseline, not as current amounts: Class IV — Rs. 50/month premium, Rs. 50,000 insurance cover; Classes III/II/I — Rs. 96/month premium, Rs. 96,000 insurance cover; premiums split 2/3 to a "Saving Fund" and 1/3 to an "Insurance Fund"; accumulated savings carry 12.5% per annum compound interest. No subsequent amendment to these figures was located this session. Confirm your current class/band, premium and cover amount with your DDO/HRMS before relying on this for a nomination.',
      extraFields: [{ id: 'svc_t1', label: 'Nominee Name', type: 'text' }, { id: 'svc_t2', label: 'Nominee Relationship', type: 'text' }, { id: 'svc_t3', label: 'Share, if more than one nominee', type: 'text' }],
      subject: 'Group Insurance Scheme — Nomination / Change of Nomination',
      bodyTemplate: "I submit my nomination under the Bihar Government Servant's Compulsory Group Insurance Rules, 1994, as follows: <strong>${svc_t1}</strong>, ${svc_t2}.{{#if svc_t3}} Share: ${svc_t3}.{{/if}}" },
    gis_claim: { label: 'Group Insurance Scheme — Claim (Savings Fund / Death)', group: 'insurance', rule: "Bihar Government Servant's Compulsory Group Insurance Rules, 1994", family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / Head of Office.',
      hint: 'On the scheme structure found this session (see the Nomination type\'s hint for the full sourcing/staleness caveat on the specific rupee figures): the insurance-cover amount appropriate to the member\'s class, plus the accumulated Saving Fund balance (with compound interest), is ordinarily payable on death in service; the Saving Fund accumulation alone on cessation of service otherwise. Confirm the current benefit amount and claim procedure with your DDO/HRMS before filing.',
      extraFields: [{ id: 'svc_date1', label: 'Date of Death / Retirement / Cessation of Service', type: 'date' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Group Insurance Scheme — Claim',
      bodyTemplate: "I submit this claim under the Bihar Government Servant's Compulsory Group Insurance Rules, 1994, on account of the event dated <strong>${svc_date1}</strong>.{{#if svc_ta1}} ${svc_ta1}{{/if}}" },

    gpf_advance: { label: 'GPF Advance / Withdrawal', group: 'service', rule: 'Bihar General Provident Fund Rules, 1948 (Notification No. 1057-F dated 18.8.1948), as amended by the Bihar General Provident Fund (Amendment) Rules, 2022 (Notification No. 1327 dated 26.12.2022) and 2024 (Notification No. 632 dated 26.6.2024)', family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / the Accountant General (A&amp;E), Bihar.',
      hint: 'The name and two most recent amendment dates/numbers are confirmed via legal-index secondary sources (indianemployees.com, legitquest.com) this session, but this session could NOT read either amendment\'s substantive content (a direct fetch of the 2022 amendment\'s own page returned a 404 error) — no subscription rate, contribution ceiling, or advance/withdrawal purpose list or amount is asserted below. By the same logic as Bihar\'s own 1.9.2005 NPS cutoff (see the Pension Scheme Status type), GPF membership most likely tracks the same pre-1.9.2005-recruitment cohort, but this specific linkage was not independently confirmed this session. Confirm the current permissible amount, purpose and your own eligibility to subscribe to the Fund with your DDO/the Accountant General (A&amp;E), Bihar.',
      extraFields: [{ id: 'svc_t1', label: 'Purpose', type: 'text' }, { id: 'svc_t2', label: 'Amount Requested (₹)', type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Application for GPF Advance / Withdrawal',
      bodyTemplate: 'I request that a GPF advance/withdrawal of <strong>Rs. ${svc_t2}</strong> be sanctioned for the purpose of <strong>${svc_t1}</strong>, under the Bihar General Provident Fund Rules, 1948, as amended.{{#if svc_ta1}} ${svc_ta1}{{/if}} I have confirmed the current permissible amount and my eligibility to subscribe to the Fund with my DDO/the Accountant General (A&amp;E), Bihar.' },
    pension_status_query: { label: 'Pension Scheme Status — Confirmation / Query (OPS / NPS)', group: 'service', rule: "The Bihar Pension Rules, 1950 (as amended); Bihar's own 1 September 2005 NPS cutoff; and a reported 28.11.2023 Finance Department resolution reopening an Old Pension Scheme option for certain teachers appointed after that cutoff (scope not independently confirmed — see hint)", family: 'letter', noControllingRemarks: true, controllingHint: 'Typically your DDO / HRMS / the Directorate of Accounts and Treasuries, Bihar.',
      hint: 'BIHAR\'S OWN NPS CUTOFF IS 1 SEPTEMBER 2005 — corroborated by three independent secondary sources this session (a reported Patna High Court ruling, a university-employee circular reference, and a Hindi-language news report), though none is a primary Finance Department notification independently read this session. Employees appointed before that date are, in principle, on the Bihar Pension Rules, 1950 (Old Pension Scheme, as amended — current family-pension/gratuity/commutation figures NOT confirmed this session, see the Family Pension type). Employees appointed on/after that date are, by default, on the National Pension System (NPS). SEPARATELY: a Hindi-language news report describes a Bihar Finance Department resolution reported dated 28 November 2023 that reopened an OPS OPTION specifically for TEACHERS appointed after the 1.9.2005 cutoff, with an application deadline reported only as "October 22" (year not legible in the source read). This session could NOT confirm whether this option extends to Bihar government employees generally or is genuinely limited to the education department, nor the precise eligibility mechanic or resolution number — do NOT assume it applies to you merely because you joined after 1.9.2005. This session found NO evidence of a Bihar Unified Pension Scheme (UPS) adoption. Use this type to request written confirmation of your own current status from your DDO/HRMS/the Directorate of Accounts and Treasuries.',
      extraFields: [{ id: 'svc_date1', label: 'Date of Appointment', type: 'date' }, { id: 'svc_t2', label: 'Current Scheme, if known (OPS / NPS) &amp; PRAN, if applicable', type: 'text', placeholder: 'Optional' }, { id: 'svc_ta1', label: 'Nature of query / request', type: 'textarea', full: true }],
      subject: 'Pension Scheme Status — Confirmation / Query',
      bodyTemplate: 'Having been appointed to Government service on <strong>${svc_date1}</strong>{{#if svc_t2}}, and presently understood to be on: ${svc_t2},{{/if}} I request written confirmation of my current pension scheme status — the Bihar Pension Rules, 1950 (Old Pension Scheme) or the National Pension System (NPS) — and, if applicable, of any Old Pension Scheme option available to me and its current procedure/deadline.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },

    family_pension: { label: 'Family Pension — Claim / Intimation', group: 'estate', rule: 'The Bihar Pension Rules, 1950 (as amended)', family: 'letter', noRemarksBlock: true,
      hint: 'The Principal Accountant General (Audit &amp; Entitlement), Bihar\'s own FAQ page (cag.gov.in) confirms the Bihar Pension Rules, 1950 (as amended) as the current governing instrument for pension and gratuity — a reasonably authoritative secondary corroboration of current applicability. HOWEVER, this session could NOT trace the current family-pension percentage, minimum/maximum amount, enhanced-rate duration, gratuity ceiling, or commutation percentage: the only substantive family-pension text read this session (via a legal-database secondary source reproducing what reads as the Rules\' own 1950 original text, Rule 48) is phrased in plainly pre-liberalisation language ("Government recognises no claim by a widow... except" in defined extraordinary circumstances) that is almost certainly long superseded by later amendments this session could not independently locate — NO current rate or figure is asserted below. If the deceased was appointed on/after 1 September 2005 and was on NPS, the applicable death benefit is instead governed by National Pension System rules — see the Pension Scheme Status type. Confirm current entitlements with your DDO/HRMS/the Directorate of Accounts and Treasuries, Bihar, before relying on any figure.',
      extraFields: [{ id: 'svc_date1', label: 'Date of Death', type: 'date' }, { id: 'svc_t2', label: "Claimant's Relationship to the Deceased", type: 'text' }, { id: 'svc_ta1', label: 'Additional details', type: 'textarea', full: true }],
      subject: 'Family Pension — Claim / Intimation',
      bodyTemplate: 'I write to intimate the death of the above-named Government employee on <strong>${svc_date1}</strong>, and to request that Family Pension and Death Gratuity, as admissible under the Bihar Pension Rules, 1950 (or, if applicable, under the National Pension System), be sanctioned in favour of the eligible member(s) of the family.{{#if svc_t2}} Claimed relationship to the deceased: ${svc_t2}.{{/if}}{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
    deceased_dues_indemnity: { label: "Indemnity Bond — Deceased Employee's Dues", group: 'estate', rule: 'Bihar Treasury / Bihar Service Code procedure (no distinct form number independently confirmed this session)', family: 'letter', noRemarksBlock: true,
      hint: 'This session could not confirm whether Bihar maintains its own distinct indemnity-bond form number (analogous to Kerala\'s K.F.C. Form No. 9) for claiming a deceased employee\'s dues — confirm the current form and any surety requirement with your Treasury Officer/DDO/HRMS before executing this bond.',
      extraFields: [{ id: 'svc_date1', label: 'Date of death of employee', type: 'date' }, { id: 'svc_t1', label: 'Name of Claimant(s)', type: 'text' }, { id: 'svc_t2', label: 'Relationship of Claimant(s) to Deceased', type: 'text' }, { id: 'svc_t3', label: 'Amount Claimed (₹)', type: 'text' }, { id: 'svc_ta1', label: "Claimant's address / surety details, if required", type: 'textarea', full: true }],
      subject: "Indemnity — Claim for Deceased Employee's Dues",
      bodyTemplate: 'I/We, <strong>${svc_t1}</strong>, ${svc_t2} of the deceased <strong>${name}</strong>, request payment of the pay, leave salary and other emoluments due, amounting to <strong>Rs. ${svc_t3}</strong>, in respect of death on <strong>${svc_date1}</strong>, and undertake to furnish an indemnity bond (with sureties, if required) in the form currently prescribed by the Treasury.{{#if svc_ta1}} ${svc_ta1}{{/if}}' },
  },
};
