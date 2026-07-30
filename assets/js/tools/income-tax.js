/* =============================================================================
   INCOME TAX STATEMENT GENERATOR — national tool, not tied to any state.
   Same mount/namespace pattern as the other tools (see kerala.js) but a
   different shape: a month-by-month pay register (Mar-Feb, matching how a
   government DDO actually prepares an annual pay certificate, since pay is
   credited a month in arrears) feeding an Old vs New regime comparison, then
   a two-page printable statement (computation summary + pay register
   annexure).

   FIGURES — FY 2026-27 (AY 2027-28), researched against the official Union
   Budget 2026-27 speech (read in full; no change proposed to individual
   slabs/deductions vs FY 2025-26) and incometax.gov.in. The one figure NOT
   independently confirmed on a .gov.in page — the HRA metro list expanding
   from 4 to 8 cities (adding Bengaluru, Hyderabad, Pune, Ahmedabad) via the
   Income-tax Rules 2026 (G.S.R. 198(E), Notification 22/2026, Rule 279,
   effective 1 April 2026) — is corroborated by multiple independent
   professional/tax-compliance sources citing the same notification number,
   so it's used here, but is flagged to the user in the disclaimer since it
   has direct rupee impact. Marginal relief on surcharge is NOT computed
   (deliberately) — surcharge is shown as a flat-bracket estimate only, with
   an explicit note to consult the current computation near a surcharge
   threshold rather than trust a simplified number.

   DELIBERATELY NOT COMPUTED: state Professional Tax slabs. PT varies by
   state, changes over time, and some states don't levy it at all — rather
   than hardcode ~30 slab tables (a real staleness/accuracy risk), the user
   enters the actual amount deducted each month from their own payslip. Same
   principle for the "Other Deduction" column: it's for the user's own
   payslip record (GIS premium, advance recovery, etc.) and is deliberately
   NOT fed into the tax computation, since most such line items aren't
   recognised IT-Act deductions and treating them as one would understate
   the user's real taxable income.
   ============================================================================= */
(function () {
  'use strict';

  const METRO_CITIES = ['Delhi', 'Mumbai', 'Kolkata', 'Chennai', 'Bengaluru', 'Hyderabad', 'Pune', 'Ahmedabad'];
  const FY_START_YEAR = 2026;
  const FY_LABEL = FY_START_YEAR + '-' + String(FY_START_YEAR + 1).slice(2);
  const AY_LABEL = (FY_START_YEAR + 1) + '-' + String(FY_START_YEAR + 2).slice(2);

  // "Earned month" convention, not calendar-FY order: government salary is
  // credited a month in arrears, so the 12 months of pay actually RECEIVED
  // within FY 2026-27 (1 Apr 2026 - 31 Mar 2027) span March 2026 (paid in
  // April 2026) through February 2027 (paid in March 2027) — this is the
  // same convention treasuries/DDOs use for annual pay certificates.
  const MONTH_NAMES = ['March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February'];
  const PAY_MONTHS = MONTH_NAMES.map((name, i) => ({ label: name + ' ' + (i <= 9 ? FY_START_YEAR : FY_START_YEAR + 1) }));
  const PAY_COLS = [
    ['basic', 'Basic Pay'], ['da', 'DA'], ['hra', 'HRA'], ['other', 'Other Allow.'],
    ['pf', 'PF / NPS'], ['pt', 'Prof. Tax'], ['otherded', 'Other Ded.'],
  ];
  const REGISTER_COLS = [
    ['basic', 'Basic'], ['da', 'DA'], ['hra', 'HRA'], ['other', 'Other'],
    ['pf', 'PF/NPS'], ['pt', 'P.Tax'], ['otherded', 'Other Ded.'], ['monthGross', 'Gross'], ['netPay', 'Net Pay'],
  ];

  // Marginal-rate slabs. Each entry: tax up to this cumulative income at this rate.
  const NEW_REGIME_SLABS = [
    { upto: 400000, rate: 0 }, { upto: 800000, rate: 0.05 }, { upto: 1200000, rate: 0.10 },
    { upto: 1600000, rate: 0.15 }, { upto: 2000000, rate: 0.20 }, { upto: 2400000, rate: 0.25 },
    { upto: Infinity, rate: 0.30 },
  ];
  const OLD_REGIME_SLABS = [
    { upto: 250000, rate: 0 }, { upto: 500000, rate: 0.05 }, { upto: 1000000, rate: 0.20 }, { upto: Infinity, rate: 0.30 },
  ];
  const STANDARD_DEDUCTION = { new: 75000, old: 50000 };
  const REBATE_87A = { new: { limit: 1200000, cap: 60000 }, old: { limit: 500000, cap: 12500 } };
  const SURCHARGE_BRACKETS_OLD = [
    { above: 50000000, rate: 0.37 }, { above: 20000000, rate: 0.25 }, { above: 10000000, rate: 0.15 }, { above: 5000000, rate: 0.10 }, { above: 0, rate: 0 },
  ];
  const SURCHARGE_BRACKETS_NEW = [
    { above: 20000000, rate: 0.25 }, { above: 10000000, rate: 0.15 }, { above: 5000000, rate: 0.10 }, { above: 0, rate: 0 },
  ];
  const CESS_RATE = 0.04;
  const CAP_80C = 150000, CAP_80CCD1B = 50000;

  function slabTax(income, slabs) {
    let tax = 0, prev = 0;
    for (const s of slabs) {
      if (income <= prev) break;
      const bandTop = Math.min(income, s.upto);
      tax += Math.max(0, bandTop - prev) * s.rate;
      prev = s.upto;
      if (income <= s.upto) break;
    }
    return Math.round(tax);
  }
  function surchargeFor(taxableIncome, tax, regime) {
    const brackets = regime === 'new' ? SURCHARGE_BRACKETS_NEW : SURCHARGE_BRACKETS_OLD;
    const b = brackets.find(x => taxableIncome > x.above);
    return { rate: b ? b.rate : 0, amount: Math.round(tax * (b ? b.rate : 0)) };
  }

  // agg is the output of readMonthlyAggregates() — the same aggregate feeds
  // both regimes; only which deductions apply differs (Old Regime allows
  // HRA/80C/80CCD(1B)/80D/Professional Tax, New Regime allows neither, per
  // current law — only the employer's 80CCD(2) NPS contribution survives
  // under both).
  function computeRegime(agg, regime) {
    const stdDed = STANDARD_DEDUCTION[regime];
    let hraExemption = 0, ded80c = 0, ded80ccd1b = 0, ded80d = 0, dedPT = 0;
    if (regime === 'old') {
      hraExemption = agg.hraExemptionTotal;
      const base80c = agg.c80Other + agg.ownPFAnnual;
      ded80c = Math.min(base80c, CAP_80C);
      if (agg.scheme === 'nps') {
        // Section 80CCD(1B): an additional ₹50,000 exclusively for the
        // employee's OWN NPS contribution beyond the 80C cap — the overflow
        // is capped by however much of that overflow is actually NPS money,
        // not other-80C investments spilling over.
        const overflow = Math.max(0, base80c - CAP_80C);
        ded80ccd1b = Math.min(overflow, agg.ownPFAnnual, CAP_80CCD1B);
      }
      const selfCap = agg.selfSenior ? 50000 : 25000;
      const parentCap = agg.parentSenior ? 50000 : 25000;
      ded80d = Math.min(agg.d80Self, selfCap) + Math.min(agg.d80Parent, parentCap);
      dedPT = agg.ptAnnual;
    }
    const ded80ccd2 = agg.nps80ccd2 || 0; // employer NPS contribution — deductible under BOTH regimes
    const totalDeductions = stdDed + hraExemption + ded80c + ded80ccd1b + ded80d + dedPT + ded80ccd2;
    const taxableIncome = Math.max(0, agg.gross - totalDeductions);
    const slabs = regime === 'new' ? NEW_REGIME_SLABS : OLD_REGIME_SLABS;
    let tax = slabTax(taxableIncome, slabs);
    const rebateRule = REBATE_87A[regime];
    const rebate = taxableIncome <= rebateRule.limit ? Math.min(tax, rebateRule.cap) : 0;
    const taxAfterRebate = tax - rebate;
    const surcharge = surchargeFor(taxableIncome, taxAfterRebate, regime);
    const cess = Math.round((taxAfterRebate + surcharge.amount) * CESS_RATE);
    const totalPayable = taxAfterRebate + surcharge.amount + cess;
    return {
      gross: agg.gross, stdDed, hraExemption, ded80c, ded80ccd1b, ded80d, dedPT, ded80ccd2,
      totalDeductions, taxableIncome, tax, rebate, taxAfterRebate, surcharge, cess, totalPayable,
    };
  }

  function numVal(id) { const v = parseFloat(val(id).replace(/,/g, '')); return isNaN(v) ? 0 : v; }
  function fmtRs(n) { return '₹' + Math.round(n).toLocaleString('en-IN'); }

  /* ---- monthly pay grid: build + read ------------------------------------ */
  function renderPayGrid() {
    const thead = '<thead><tr><th>Month</th>' + PAY_COLS.map(c => '<th>' + c[1] + '</th>').join('') + '</tr></thead>';
    const tbody = '<tbody>' + PAY_MONTHS.map((m, i) => {
      const cells = PAY_COLS.map(c => '<td><input type="number" min="0" id="it_m' + i + '_' + c[0] + '" placeholder="0"></td>').join('');
      return '<tr><td>' + m.label + '</td>' + cells + '</tr>';
    }).join('') + '</tbody>';
    document.getElementById('it_pay_grid').innerHTML = thead + tbody;
  }
  function fillDown() {
    const cols = PAY_COLS.map(c => c[0]);
    const vals = cols.map(c => val('it_m0_' + c));
    for (let i = 1; i < 12; i++) {
      cols.forEach((c, ci) => { const el = document.getElementById('it_m' + i + '_' + c); if (el) el.value = vals[ci]; });
    }
  }
  function readMonthlyAggregates() {
    const metro = document.getElementById('it_city').value === 'metro';
    const monthlyRent = numVal('it_rent_paid') / 12;
    const scheme = document.getElementById('it_pf_scheme').value;
    let grossMonthly = 0, hraExemptionTotal = 0, ownPFAnnual = 0, ptAnnual = 0, otherDedAnnual = 0;
    const rows = [];
    for (let i = 0; i < 12; i++) {
      const basic = numVal('it_m' + i + '_basic'), da = numVal('it_m' + i + '_da'), hra = numVal('it_m' + i + '_hra'),
            other = numVal('it_m' + i + '_other'), pf = numVal('it_m' + i + '_pf'), pt = numVal('it_m' + i + '_pt'),
            otherded = numVal('it_m' + i + '_otherded');
      const basicDa = basic + da;
      const monthGross = basicDa + hra + other;
      grossMonthly += monthGross;
      ownPFAnnual += pf;
      ptAnnual += pt;
      otherDedAnnual += otherded;
      // Rule 2A HRA exemption, applied per month (not as one annual lump)
      // since Basic/DA/HRA can change mid-year (increment, DA revision) —
      // now that the data is monthly, the per-month formula is the more
      // correct one to use, not an approximation.
      const rule10pct = Math.max(0, monthlyRent - 0.10 * basicDa);
      const cityPct = (metro ? 0.50 : 0.40) * basicDa;
      hraExemptionTotal += Math.max(0, Math.min(hra, rule10pct, cityPct));
      rows.push({ month: PAY_MONTHS[i].label, basic, da, hra, other, pf, pt, otherded, monthGross, netPay: monthGross - pf - pt - otherded });
    }
    const bonus = numVal('it_bonus');
    const leaveAmt = numVal('it_leave_encash');
    const leaveAtRetirement = document.getElementById('it_leave_retirement').checked;
    const leaveTaxable = leaveAtRetirement ? 0 : leaveAmt;
    const leaveExempt = leaveAtRetirement ? leaveAmt : 0;
    return {
      rows, gross: grossMonthly + bonus + leaveTaxable, hraExemptionTotal, ownPFAnnual, ptAnnual, otherDedAnnual,
      bonus, leaveAmt, leaveAtRetirement, leaveTaxable, leaveExempt, scheme,
      c80Other: numVal('it_80c'), d80Self: numVal('it_80d_self'), selfSenior: document.getElementById('it_80d_self_senior').checked,
      d80Parent: numVal('it_80d_parent'), parentSenior: document.getElementById('it_80d_parent_senior').checked,
      nps80ccd2: numVal('it_80ccd2'),
    };
  }

  let _lastResult = null;
  function compute() {
    const agg = readMonthlyAggregates();
    const oldR = computeRegime(agg, 'old');
    const newR = computeRegime(agg, 'new');
    _lastResult = { agg, oldR, newR };
    renderResults(agg, oldR, newR);
    document.getElementById('it_results').classList.remove('hidden-section');
    document.getElementById('it_preview_btn_wrap').classList.remove('hidden-section');
  }

  function payRegisterHtml(agg) {
    const totals = {}; REGISTER_COLS.forEach(c => { totals[c[0]] = 0; });
    const rows = agg.rows.map(r => {
      REGISTER_COLS.forEach(c => { totals[c[0]] += r[c[0]]; });
      return '<tr><td>' + r.month + '</td>' + REGISTER_COLS.map(c => '<td>' + fmtRs(r[c[0]]) + '</td>').join('') + '</tr>';
    }).join('');
    const totalRow = '<tr><td>Total</td>' + REGISTER_COLS.map(c => '<td>' + fmtRs(totals[c[0]]) + '</td>').join('') + '</tr>';
    return '<h3 style="margin:20px 0 8px; font-size:.95rem; font-family:\'Fraunces\',Georgia,serif;">Monthly Pay Register (' + PAY_MONTHS[0].label + ' – ' + PAY_MONTHS[11].label + ')</h3>' +
      '<div style="overflow-x:auto;"><table class="data-table"><thead><tr><th>Month</th>' + REGISTER_COLS.map(c => '<th>' + c[1] + '</th>').join('') + '</tr></thead>' +
      '<tbody>' + rows + '</tbody><tfoot>' + totalRow + '</tfoot></table></div>';
  }

  function renderResults(agg, oldR, newR) {
    const better = oldR.totalPayable === newR.totalPayable ? 'equal' : (oldR.totalPayable < newR.totalPayable ? 'old' : 'new');
    const diff = Math.abs(oldR.totalPayable - newR.totalPayable);
    const row = (label, oldV, newV) => `<tr><td>${label}</td><td class="text-right">${oldV}</td><td class="text-right">${newV}</td></tr>`;
    let html = `
      <table class="form-table compare-table">
        <tr><td></td><td class="text-right bold">Old Regime</td><td class="text-right bold">New Regime</td></tr>
        ${row('Gross Salary', fmtRs(oldR.gross), fmtRs(newR.gross))}
        ${row('Standard Deduction', fmtRs(oldR.stdDed), fmtRs(newR.stdDed))}
        ${row('HRA Exemption', fmtRs(oldR.hraExemption), fmtRs(newR.hraExemption))}
        ${row('Section 80C (incl. GPF/NPS)', fmtRs(oldR.ded80c), fmtRs(newR.ded80c))}
        ${row('Section 80CCD(1B) — NPS (Self)', fmtRs(oldR.ded80ccd1b), fmtRs(newR.ded80ccd1b))}
        ${row('Section 80D', fmtRs(oldR.ded80d), fmtRs(newR.ded80d))}
        ${row('Professional Tax — Sec 16(iii)', fmtRs(oldR.dedPT), fmtRs(newR.dedPT))}
        ${row('Employer NPS — 80CCD(2)', fmtRs(oldR.ded80ccd2), fmtRs(newR.ded80ccd2))}
        <tr><td class="bold">Taxable Income</td><td class="text-right bold">${fmtRs(oldR.taxableIncome)}</td><td class="text-right bold">${fmtRs(newR.taxableIncome)}</td></tr>
        ${row('Tax before Rebate', fmtRs(oldR.tax), fmtRs(newR.tax))}
        ${row('Section 87A Rebate', '−' + fmtRs(oldR.rebate), '−' + fmtRs(newR.rebate))}
        ${row('Surcharge', fmtRs(oldR.surcharge.amount), fmtRs(newR.surcharge.amount))}
        ${row('Health & Education Cess (4%)', fmtRs(oldR.cess), fmtRs(newR.cess))}
        <tr><td class="bold">Total Tax Payable</td><td class="text-right bold">${fmtRs(oldR.totalPayable)}</td><td class="text-right bold">${fmtRs(newR.totalPayable)}</td></tr>
      </table>
      <div class="info-callout" style="display:block; margin-top:14px;">
        ${better === 'equal' ? 'Both regimes work out equal for the numbers entered.' :
          `<strong>${better === 'old' ? 'Old Regime' : 'New Regime'}</strong> works out lower by <strong>${fmtRs(diff)}</strong> for the numbers entered.`}
      </div>`;
    if (agg.leaveAtRetirement && agg.leaveAmt > 0) {
      html += `<div class="help-text" style="margin-top:8px;">${fmtRs(agg.leaveExempt)} of leave encashment is treated as fully exempt under Section 10(10AA) (government employee, paid at retirement/superannuation) and is excluded from Gross Salary above.</div>`;
    }
    if (oldR.surcharge.rate > 0 || newR.surcharge.rate > 0) {
      html += `<div class="help-text" style="margin-top:8px;">Surcharge shown is a flat-bracket estimate and does not apply marginal relief — at income levels near a surcharge threshold, get the exact figure from a tax professional or the official calculator before relying on this number.</div>`;
    }
    html += payRegisterHtml(agg);
    document.getElementById('it_results_table').innerHTML = html;
  }

  function buildStatementPage(agg, oldR, newR) {
    const name = val('it_name'), pan = val('it_pan') || 'N/A', designation = val('it_designation'), office = val('it_office');
    const row = (label, oldV, newV) => `<tr><td>${label}</td><td class="text-right">${oldV}</td><td class="text-right">${newV}</td></tr>`;
    let leaveNote = '';
    if (agg.leaveAtRetirement && agg.leaveAmt > 0) {
      leaveNote = ' Gross Salary excludes ' + fmtRs(agg.leaveExempt) + ' leave encashment treated as exempt under Section 10(10AA) (paid at retirement).';
    } else if (agg.leaveAmt > 0) {
      leaveNote = ' Gross Salary includes ' + fmtRs(agg.leaveTaxable) + ' leave encashment (taxable — encashed during service, not at retirement).';
    }
    return `
      <div class="page-title">TAX COMPUTATION STATEMENT<br><span style="font-size:10pt; font-weight:normal;">Financial Year ${FY_LABEL} (Assessment Year ${AY_LABEL})</span></div>
      <table class="form-table">
        <tr><td>Name</td><td>:</td><td>${name || 'N/A'}</td></tr>
        <tr><td>PAN</td><td>:</td><td>${pan}</td></tr>
        <tr><td>Designation</td><td>:</td><td>${designation || 'N/A'}</td></tr>
        <tr><td>Office / Employer</td><td>:</td><td>${office || 'N/A'}</td></tr>
      </table>
      <table class="form-table compare-table" style="margin-top:14px;">
        <tr><td></td><td class="text-right bold">Old Regime</td><td class="text-right bold">New Regime</td></tr>
        ${row('Gross Salary', fmtRs(oldR.gross), fmtRs(newR.gross))}
        ${row('Standard Deduction', fmtRs(oldR.stdDed), fmtRs(newR.stdDed))}
        ${row('HRA Exemption (Sec. 10(13A))', fmtRs(oldR.hraExemption), fmtRs(newR.hraExemption))}
        ${row('Section 80C (incl. GPF/NPS own contribution)', fmtRs(oldR.ded80c), fmtRs(newR.ded80c))}
        ${row('Section 80CCD(1B) — NPS (Self)', fmtRs(oldR.ded80ccd1b), fmtRs(newR.ded80ccd1b))}
        ${row('Section 80D', fmtRs(oldR.ded80d), fmtRs(newR.ded80d))}
        ${row('Professional Tax — Sec 16(iii)', fmtRs(oldR.dedPT), fmtRs(newR.dedPT))}
        ${row('Employer NPS Contribution — 80CCD(2)', fmtRs(oldR.ded80ccd2), fmtRs(newR.ded80ccd2))}
        <tr><td class="bold">Taxable Income</td><td class="text-right bold">${fmtRs(oldR.taxableIncome)}</td><td class="text-right bold">${fmtRs(newR.taxableIncome)}</td></tr>
        ${row('Tax before Rebate', fmtRs(oldR.tax), fmtRs(newR.tax))}
        ${row('Section 87A Rebate', '−' + fmtRs(oldR.rebate), '−' + fmtRs(newR.rebate))}
        ${row('Surcharge', fmtRs(oldR.surcharge.amount), fmtRs(newR.surcharge.amount))}
        ${row('Health & Education Cess (4%)', fmtRs(oldR.cess), fmtRs(newR.cess))}
        <tr><td class="bold">Total Tax Payable</td><td class="text-right bold">${fmtRs(oldR.totalPayable)}</td><td class="text-right bold">${fmtRs(newR.totalPayable)}</td></tr>
      </table>
      <div class="mb-4 text-justify mt-4" style="font-size:10pt;">Computed using FY ${FY_LABEL} slab rates and the Section 87A rebate thresholds as per the Union Budget ${FY_LABEL}; standard deduction ₹75,000 (New Regime) / ₹50,000 (Old Regime); Section 80C (including own GPF/NPS contribution) capped at ₹1,50,000, with a further ₹50,000 available under Section 80CCD(1B) for NPS subscribers only; Section 80D capped at ₹25,000 (₹50,000 if a senior citizen) for self/family and separately for parents; Professional Tax is the amount actually paid, per your state's Professional Tax Act. HRA exemption is computed month-by-month against that month's Basic+DA and rent (annual rent assumed even across all 12 months). HRA exemption uses the 50% metro-city rate for Delhi, Mumbai, Kolkata, Chennai, Bengaluru, Hyderabad, Pune and Ahmedabad (effective FY ${FY_LABEL} under the Income-tax Rules, 2026) and 40% elsewhere. Gross Salary includes Bonus/Ex-gratia of ${fmtRs(agg.bonus)}.${leaveNote} See the attached Annexure for the month-by-month pay register. This is a computation aid, not a filed return or Form 16 — confirm final figures with your employer's payroll/DDO before submitting an investment declaration.</div>
      <div class="flex-space mt-8">
        <div>Place: ${val('it_place')}<br>Date: ${fval('it_date')}</div>
        <div class="text-center">Signature of Employee<br><br><br>${name}</div>
      </div>`;
  }

  function buildAnnexurePage(agg) {
    const totals = {}; REGISTER_COLS.forEach(c => { totals[c[0]] = 0; });
    const bodyRows = agg.rows.map(r => {
      REGISTER_COLS.forEach(c => { totals[c[0]] += r[c[0]]; });
      return '<tr><td>' + r.month + '</td>' + REGISTER_COLS.map(c => '<td>' + fmtRs(r[c[0]]) + '</td>').join('') + '</tr>';
    }).join('');
    const totalRow = '<tr class="bold"><td>Total</td>' + REGISTER_COLS.map(c => '<td>' + fmtRs(totals[c[0]]) + '</td>').join('') + '</tr>';
    let html = `
      <div class="page-title">ANNEXURE — MONTHLY PAY REGISTER<br><span style="font-size:10pt; font-weight:normal;">${PAY_MONTHS[0].label} to ${PAY_MONTHS[11].label}</span></div>
      <table class="pay-register-table">
        <thead><tr><th>Month</th>${REGISTER_COLS.map(c => '<th>' + c[1] + '</th>').join('')}</tr></thead>
        <tbody>${bodyRows}${totalRow}</tbody>
      </table>
      <table class="form-table" style="margin-top:16px;">
        <tr><td>Bonus / Ex-gratia</td><td>:</td><td>${fmtRs(agg.bonus)}</td></tr>
        <tr><td>Earned Leave Encashment</td><td>:</td><td>${fmtRs(agg.leaveAmt)}${agg.leaveAmt > 0 ? (agg.leaveAtRetirement ? ' (exempt — paid at retirement, Sec. 10(10AA))' : ' (taxable — encashed during service)') : ''}</td></tr>
      </table>
      <div class="text-justify" style="font-size:9pt; margin-top:10px;">Net Pay above is gross pay for the month minus PF/NPS, Professional Tax and Other Deduction entered for that month — a payslip-style figure, not a tax computation. "Other Deduction" is not treated as tax-deductible in the computation on the preceding page.</div>`;
    return html;
  }

  function fillPrintPages() {
    const agg = readMonthlyAggregates();
    const oldR = computeRegime(agg, 'old');
    const newR = computeRegime(agg, 'new');
    document.getElementById('it_page_body').innerHTML = buildStatementPage(agg, oldR, newR);
    document.getElementById('it_annexure_body').innerHTML = buildAnnexurePage(agg);
  }

  function openAppModal() {
    showFormPanel();
    document.getElementById('it_results').classList.add('hidden-section');
    document.getElementById('it_preview_btn_wrap').classList.add('hidden-section');
    openModal('app_modal');
  }
  function closeAppModal() { closeModal('app_modal'); }
  function showFormPanel() {
    document.getElementById('panel_preview').classList.add('hidden-section');
    document.getElementById('panel_form').classList.remove('hidden-section');
  }
  function showPreviewPanel() {
    if (!_lastResult) compute();
    fillPrintPages();
    renderDocumentPreview('preview-render-target');
    trackActivity(); // shared engine — local-only activity count for the Home dashboard
    document.getElementById('panel_form').classList.add('hidden-section');
    document.getElementById('panel_preview').classList.remove('hidden-section');
  }
  function generatePDF() {
    fillPrintPages();
    setTimeout(() => { window.print(); closeAppModal(); }, 150);
  }

  function init() {
    renderPayGrid();
    document.getElementById('it_compute_btn').addEventListener('click', compute);
    document.getElementById('it_fill_down_btn').addEventListener('click', fillDown);
  }

  window.it_init = init;
  window.it_openAppModal = openAppModal;
  window.it_closeAppModal = closeAppModal;
  window.it_showFormPanel = showFormPanel;
  window.it_showPreviewPanel = showPreviewPanel;
  window.it_generatePDF = generatePDF;
})();
