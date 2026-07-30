/* =============================================================================
   STATE TOOL ENGINE — one shared engine driving every state's leave/service
   form generator (Kerala, Central Government, and every state added after
   them). Replaces what used to be a bespoke ~500-line module per state
   (assets/js/tools/kerala.js, central.js) with ONE engine parameterized by a
   plain-data object per state (assets/js/data/<state>.js, window.STATE_DATA).

   Adding a new state means writing a data file, not new code — see
   assets/js/data/kerala.js for the fullest example of the schema (every
   primitive in use), and PLAN.md / the project's PRD for the schema
   reference. This file should not need to change when a new state is added
   unless that state surfaces a genuinely new *shape* the schema can't
   express (expected to happen eventually — extend the schema, don't bolt on
   a one-off).

   CONTENT PRIMITIVES (deliberately three, not one — see each type's `family`):
     'leave'  - cover letter (optional) + a details table + optional
                declaration paragraph, built entirely from state data
                (formRows / declarationTemplate) via renderTemplate() below.
                Zero per-type code for the common case.
     'letter' - From/To/Subject/Body/Signature single-page letter, per-type
                `bodyTemplate` string rendered via renderTemplate().
     'bespoke'- escape hatch for real cross-field logic or multi-page bundles
                (e.g. Kerala's Transfer of Charge party-resolution, LWA's
                4-page proforma bundle) — the type names a `renderFn` looked
                up on window.STATE_RENDER_FNS[stateKey][name], called with
                (formCtx, type, stateData) and returning either a single
                page's inner HTML (string) or an array of
                {id, title, bodyHtml} for a multi-page bundle.

   Every state's modal/print markup is the ONE shared <template
   id="tpl_state_tool"> in index.html — see that template for the fixed
   chrome (Employee Profile / Digital Signature / Application Routing) and
   the dynamic mount points (#profile_fields_mount, #dynamic_fields_mount,
   #document-preview) this engine populates from state data.
   ============================================================================= */
(function () {
  'use strict';

  // ---- shared category slots: 8 fixed color/icon slots every state's
  // groupOrder entries map onto via {slot, name}. A state's *displayed*
  // category name is free text (Kerala says "Leave Without Allowance
  // (LWA)", Central says "Extraordinary Leave (EOL)") but the underlying
  // color/icon is shared so the platform still looks like one family. -----
  const CATEGORY_SLOTS = {
    general: { colorVar: '--cat-general', icon: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>' },
    lwa: { colorVar: '--cat-lwa', icon: '<path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7z"/>' },
    family: { colorVar: '--cat-family', icon: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.6z"/>' },
    casual: { colorVar: '--cat-casual', icon: '<circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="4.9" y1="4.9" x2="6.3" y2="6.3"/><line x1="17.7" y1="17.7" x2="19.1" y2="19.1"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/><line x1="4.9" y1="19.1" x2="6.3" y2="17.7"/><line x1="17.7" y1="6.3" x2="19.1" y2="4.9"/>' },
    insurance: { colorVar: '--cat-insurance', icon: '<path d="M12 2 4 5v6c0 5 3.4 8.4 8 11 4.6-2.6 8-6 8-11V5z"/>' },
    service: { colorVar: '--cat-service', icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 15l2 2 4-4"/>' },
    advance: { colorVar: '--cat-advance', icon: '<circle cx="9" cy="9" r="6"/><circle cx="15" cy="15" r="6"/>' },
    estate: { colorVar: '--cat-estate', icon: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>' },
  };
  function categoryIconSvg(slot, cls) {
    const s = CATEGORY_SLOTS[slot];
    return '<svg class="' + (cls || 'category-icon') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + (s ? s.icon : '') + '</svg>';
  }

  // ---- templating primitive: {{#if field}}...{{/if}} blocks resolved
  // first (kept iff ctx[field] is truthy), then ${field} interpolation.
  // Used for formRows, declarationTemplate, and letter bodyTemplate — one
  // primitive, three call sites. No dependency, ~15 lines. -----------------
  function renderTemplate(str, ctx) {
    if (!str) return '';
    str = str.replace(/\{\{#if (\w+)\}\}([\s\S]*?)\{\{\/if\}\}/g, (_, key, inner) => (ctx[key] ? inner : ''));
    str = str.replace(/\$\{(\w+)\}/g, (_, key) => (ctx[key] != null && ctx[key] !== '' ? ctx[key] : (ctx[key + '_fallback'] || '')));
    return str;
  }

  let currentStateKey = null;
  let currentTypeKey = null;
  let typeKbdIndex = -1;

  function stateData() { return window.STATE_DATA[currentStateKey]; }
  function typesOf(sd) { return sd.types; }
  function groupNameFor(sd, slot) {
    const g = sd.groupOrder.find(g => g.slot === slot);
    return g ? g.name : slot;
  }

  // ---- form-field context: every profile field + routing field + the
  // currently-selected type's extraFields, keyed by id, formatted (dates
  // via engine-common's formatDate/fval) — this is what renderTemplate()
  // and the generic .out-* binder both read from. ---------------------------
  function collectFieldIds(sd, type) {
    const ids = (sd.profileFields || []).map(f => f.id);
    ids.push('start', 'end', 'duration_str', 'reason', 'address', 'place', 'app_date', 'controlling');
    (sd.formExtraFields || []).forEach(f => ids.push(f.id));
    (type.extraFields || []).forEach(f => ids.push(f.id));
    return ids;
  }
  function fieldMeta(sd, type, id) {
    return (sd.profileFields || []).concat(sd.formExtraFields || []).concat(type.extraFields || []).find(f => f.id === id);
  }
  function buildCtx(sd, type) {
    const ctx = {};
    collectFieldIds(sd, type).forEach(id => {
      const meta = fieldMeta(sd, type, id);
      const raw = val(id);
      ctx[id] = (meta && meta.type === 'date') || id === 'app_date' || id === 'start' || id === 'end' ? (raw ? fval(id) : '') : raw;
    });
    ctx.nature = type.nature || type.label || '';
    ctx.rule = type.rule || '';
    ctx.name = ctx.name || val('name');
    return ctx;
  }

  // ---- dynamic field rendering (profile + per-type extra fields) ----------
  function fieldHtml(f) {
    const req = f.required ? ' required' : '';
    const reqClass = f.required ? ' required' : '';
    const wrapClass = 'form-group' + (f.full ? ' full-width' : '');
    let input;
    if (f.type === 'select') {
      input = `<select id="${f.id}"${req}>` + (f.options || []).map(o => `<option value="${o.value}">${o.label}</option>`).join('') + `</select>`;
    } else if (f.type === 'textarea') {
      input = `<textarea id="${f.id}" rows="${f.rows || 2}"${f.placeholder ? ` placeholder="${f.placeholder}"` : ''}${req}></textarea>`;
    } else {
      input = `<input type="${f.type || 'text'}" id="${f.id}"${f.placeholder ? ` placeholder="${f.placeholder}"` : ''}${req}>`;
    }
    return `<div class="${wrapClass}"><label class="${reqClass.trim()}">${f.label}</label>${input}${f.help ? `<div class="help-text">${f.help}</div>` : ''}</div>`;
  }
  function renderProfileFields(sd) {
    document.getElementById('profile_fields_mount').innerHTML = (sd.profileFields || []).map(fieldHtml).join('');
  }
  function renderExtraFields(sd, type) {
    const mount = document.getElementById('dynamic_fields_mount');
    const wrap = document.getElementById('sec_dynamic_fields');
    const fields = type.extraFields || [];
    mount.innerHTML = fields.length ? fields.map(fieldHtml).join('') : '';
    if (wrap) wrap.classList.toggle('hidden-section', fields.length === 0);
  }
  function renderFormExtraFields(sd) {
    const mount = document.getElementById('form_extra_fields_mount');
    const fields = sd.formExtraFields || [];
    if (!mount) return;
    mount.innerHTML = fields.length ? fields.map(fieldHtml).join('') : '';
  }

  // ---- type dropdown + searchable switcher (verbatim logic from the old
  // per-state modules — this part was already byte-identical between
  // kerala.js and central.js, so porting it here is pure deduplication). ---
  function populateTypeDropdown(sd) {
    const sel = document.getElementById('leave_type');
    sel.innerHTML = '';
    sd.groupOrder.forEach(g => {
      const keys = Object.keys(sd.types).filter(k => sd.types[k].group === g.slot);
      if (!keys.length) return;
      const og = document.createElement('optgroup');
      og.label = g.name;
      keys.forEach(k => {
        const opt = document.createElement('option');
        opt.value = k; opt.textContent = sd.types[k].label;
        og.appendChild(opt);
      });
      sel.appendChild(og);
    });
  }
  function renderTypeList(filter) {
    const sd = stateData();
    const q = (filter || '').trim().toLowerCase();
    const list = document.getElementById('type_list');
    let html = '';
    sd.groupOrder.forEach(g => {
      const keys = Object.keys(sd.types).filter(k => sd.types[k].group === g.slot &&
        (!q || sd.types[k].label.toLowerCase().includes(q) || g.name.toLowerCase().includes(q)));
      if (!keys.length) return;
      html += '<div class="state-list-label">' + g.name + '</div>';
      html += keys.map(k => '<button type="button" class="state-option" role="option" data-key="' + k + '">' +
        '<span class="opt-name">' + sd.types[k].label + '</span></button>').join('');
    });
    list.innerHTML = html || '<div class="state-empty-result">No application type matches &ldquo;' + filter + '&rdquo;.</div>';
    typeKbdIndex = -1;
  }
  function openTypeSwitcher() {
    document.getElementById('type_switcher').classList.add('open');
    document.getElementById('type_switcher_trigger').setAttribute('aria-expanded', 'true');
    const search = document.getElementById('type_search');
    search.value = ''; renderTypeList('');
    setTimeout(() => search.focus(), 10);
  }
  function closeTypeSwitcher() {
    document.getElementById('type_switcher').classList.remove('open');
    document.getElementById('type_switcher_trigger').setAttribute('aria-expanded', 'false');
  }
  function toggleTypeSwitcher() {
    document.getElementById('type_switcher').classList.contains('open') ? closeTypeSwitcher() : openTypeSwitcher();
  }
  function highlightTypeKbd(options) {
    options.forEach((o, i) => o.classList.toggle('kbd-active', i === typeKbdIndex));
    if (options[typeKbdIndex]) options[typeKbdIndex].scrollIntoView({ block: 'nearest' });
  }

  function selectApplicationType(key) {
    const sd = stateData();
    const t = sd.types[key];
    if (!t) return;
    currentTypeKey = key;
    document.getElementById('leave_type').value = key;
    const slot = CATEGORY_SLOTS[t.group] ? t.group : null;
    document.getElementById('type_switcher_icon').innerHTML = slot ? categoryIconSvg(slot) : '';
    document.getElementById('type_switcher_label').textContent = t.label;
    document.getElementById('app_modal').style.setProperty('--modal-accent', slot ? 'var(' + CATEGORY_SLOTS[slot].colorVar + ')' : 'var(--accent)');
    toggleSections(sd, t);
    closeTypeSwitcher();
  }

  function toggleSections(sd, t) {
    // Whether Start/End/Duration/Reason/Address show is independent of which
    // *print* primitive a type uses (`family`) — several 'letter' types
    // (Casual Leave, Special Casual Leave, Compensatory Leave) and 'bespoke'
    // types (Kerala's LWA bundle) still consume ${start}/${end}/${duration_str}
    // in their body text, so they need `needsRouting: true` even though
    // they're not family:'leave'. Only 'leave' defaults to shown.
    const showRouting = t.family === 'leave' || t.needsRouting === true;
    document.getElementById('sec_leave_routing').classList.toggle('hidden-section', !showRouting);
    const formExtraMount = document.getElementById('form_extra_fields_wrap');
    if (formExtraMount) formExtraMount.classList.toggle('hidden-section', t.family !== 'leave' || !(sd.formExtraFields || []).length);
    renderExtraFields(sd, t);
    let ruleText = 'Governed by ' + t.rule;
    if (t.hint) ruleText += ' — ' + t.hint;
    document.getElementById('rule_hint').textContent = ruleText;
    const dot = document.getElementById('category_dot');
    if (CATEGORY_SLOTS[t.group]) { dot.style.background = 'var(' + CATEGORY_SLOTS[t.group].colorVar + ')'; dot.style.visibility = 'visible'; }
    else { dot.style.visibility = 'hidden'; }
    const controllingHint = document.getElementById('controlling_hint');
    if (t.controllingHint) { controllingHint.textContent = t.controllingHint; controllingHint.style.display = 'block'; }
    else { controllingHint.style.display = 'none'; }
    const reasonEl = document.getElementById('reason');
    if (t.defaultReason !== undefined && reasonEl) reasonEl.value = t.defaultReason;
  }

  // ---- print rendering ------------------------------------------------------
  function buildFormRow(row, ctx) {
    const value = row.template ? renderTemplate(row.template, ctx) : (ctx[row.field] || '');
    return `<tr><td>${row.label}</td><td>:</td><td>${value}</td></tr>`;
  }
  // Declaration content (medCert note + declarationTemplate, in that order)
  // is shared by both rendering modes: inline (appended to the leave page
  // itself — Central's shape) and separate-page (its own title + signature
  // block — Kerala's shape). Which mode is used is per-type
  // (`declarationSeparatePage: true`), not per-state, since a state could in
  // principle mix both (none currently do).
  function declarationBodyHtml(t, ctx) {
    const parts = [];
    if (t.medCert) parts.push('A medical certificate in support of this application is enclosed.');
    if (t.declarationTemplate) parts.push(renderTemplate(t.declarationTemplate, ctx));
    return parts.map(p => `<div class="mb-4 text-justify">${p}</div>`).join('');
  }
  // The office-side columns below (items N+1 to N+3) reproduce Kerala's own
  // Form No. 13 (Rule 113, Part I, K.S.R.) verbatim — confirmed this session
  // against two independently-hosted copies of the gazetted form
  // (ism.kerala.gov.in and nsscollegemanjeri.ac.in, matching each other) —
  // items 17 ("Remarks and/or recommendation of the Controlling Officer"),
  // 18 ("Certificate Regarding Admissibility of Leave," normally by the
  // Accountant General for Gazetted Officers) and 19 ("Orders of the
  // Sanctioning Authority," with its own compensatory-allowance footnote).
  // For Kerala's own formRows (14 rows) plus its leaveFormFooterHtml (the
  // Rule 85/113 undertakings, the form's own item 15) plus the applicant's
  // own signature block (item 16), the numbers below land on exactly
  // 17/18/19 as printed on the real form. Every other state's file in this
  // app has its own formRows count, so the same three sections are numbered
  // as a plain continuation of that state's own preceding items — this
  // engine does not claim Kerala's exact "17/18/19" is that other state's
  // own gazetted numbering, only that the sections themselves (a controlling
  // officer's recommendation, an admissibility certificate, and a sanctioning
  // order) are the standard three-stage pipeline every Fundamental
  // Rules-descended leave form in this app's states shares.
  // Split across two physical pages to match the real gazetted Form No. 13
  // layout: the applicant's own section ends at the signature item (Page 1);
  // the controlling officer / sanctioning authority's office-side section
  // (Remarks, Admissibility Certificate, Orders) starts fresh on Page 2 —
  // never sharing a sheet with the applicant's part, on any state's form.
  function buildLeaveFormPage(sd, t, ctx) {
    const heading = t.formHeading
      ? `${t.formHeading}<br><span style="font-size:10pt; font-weight:normal;">(${t.rule})</span>`
      : `APPLICATION FOR ${(t.nature || t.label).toUpperCase()}<br><span style="font-size:10pt; font-weight:normal;">(${t.rule})</span>`;
    const rows = (sd.formRows || []).map(r => buildFormRow(r, ctx)).join('');
    const inlineDeclaration = (t.medCert || t.declarationTemplate) && !t.declarationSeparatePage
      ? `<div class="mt-4">${declarationBodyHtml(t, ctx)}</div>` : '';
    const footer = sd.leaveFormFooterHtml ? `<div class="text-justify mb-4" style="font-size: 11pt;">${sd.leaveFormFooterHtml}</div>` : '';
    const baseCount = (sd.formRows || []).length + (sd.leaveFormFooterHtml ? 1 : 0);
    const sigNum = baseCount + 1;
    return `
      <div class="page-title">${heading}</div>
      <table class="form-table">${rows}</table>
      ${footer}
      ${inlineDeclaration}
      <div class="flex-space mt-4">
        <div>${sigNum}. Place: ${ctx.place || ''}</div>
        <div class="text-center">
          Signature of Applicant (with date)<br>
          <div class="sig-slot"><img class="sig-img-target" style="display:none;" alt="Signature"></div>
        </div>
      </div>`;
  }
  function buildLeaveOfficePage(sd, t, ctx) {
    const baseCount = (sd.formRows || []).length + (sd.leaveFormFooterHtml ? 1 : 0);
    const remarksNum = baseCount + 2, certNum = baseCount + 3, orderNum = baseCount + 4;
    return `
      <div class="mb-4"><strong>${remarksNum}. Remarks and/or recommendation of the Controlling Officer:</strong></div>
      <div style="height:50px;"></div>
      <div class="text-right mb-4">Signature (with date) and Designation</div>
      <div class="mb-4"><strong>${certNum}. Certificate Regarding Admissibility of Leave</strong> <span style="font-weight:normal; font-size:10pt;">(by the Accountant General, in the case of Gazetted Officers; otherwise by the Head of Office)</span></div>
      <div class="mb-4 text-justify">Certified that <strong>${ctx.nature || t.label}</strong> for <strong>${ctx.duration_str || ''}</strong>, from <strong>${ctx.start || ''}</strong> to <strong>${ctx.end || ''}</strong>, is admissible under ${ctx.rule || ''}.</div>
      <div class="text-right mb-4">Signature (with date) and Designation</div>
      <div class="mb-4"><strong>${orderNum}. Orders of the Sanctioning Authority:</strong></div>
      <div style="height:50px;"></div>
      <div class="text-right mb-4">Signature (with date) and Designation</div>
      <div class="mb-4 text-justify" style="font-size:10pt; font-style:italic;">* If the applicant is drawing any compensatory allowance, the sanctioning authority should state whether, on the expiry of leave, the applicant is likely to return to the same post or to another post carrying a similar allowance.</div>
      <hr>
      <div class="mb-4 text-justify"><strong>Certificate of the Head of Office</strong> <span style="font-weight:normal; font-size:10pt;">(supplementary to the form's own numbered columns above; commonly required in practice before an application is forwarded)</span>: Certified that no disciplinary proceedings or vigilance enquiry is pending or contemplated against the applicant, that the applicant's leave account has been verified as shown above, and that the grant of this leave is not likely to affect the exigencies of public service.</div>
      <div style="height:50px;"></div>
      <div class="text-right">Signature (with date) and Designation</div>`;
  }
  function buildDeclarationPage(sd, t, ctx) {
    return `
      <div class="page-title">${t.declarationTitle || 'DECLARATION'}</div>
      ${declarationBodyHtml(t, ctx)}
      <div class="flex-space mt-8">
        <div>Place: ${ctx.place || ''}<br>Date: ${ctx.app_date || ''}</div>
        <div class="text-center">
          Signature of Applicant<br>
          <div class="sig-slot"><img class="sig-img-target" style="display:none;" alt="Signature"></div>
          <strong>${ctx.name || ''}</strong>
        </div>
      </div>`;
  }
  function buildCoverLetterPage(sd, t, ctx) {
    const attachText = t.coverAttachmentsTemplate ? renderTemplate(t.coverAttachmentsTemplate, ctx) : (sd.defaultCoverAttachmentsText || '');
    return `
      <div class="text-right mb-4">Place: ${ctx.place || ''}<br>Date: ${ctx.app_date || ''}</div>
      <div class="mb-4">From<br><br><strong>${ctx.name || ''}</strong><br>${ctx.designation || ''}<br>${ctx.office || ''}</div>
      <div class="mb-4">To<br><br><strong>${ctx.controlling || ''}</strong><br>${ctx.office || ''}</div>
      <div class="mb-4">Respected Sir/Madam,</div>
      <div class="mb-4" style="padding-left: 40px;"><strong>Sub:</strong> Application for <strong>${ctx.nature}</strong> (under ${ctx.rule}) for <strong>${ctx.duration_str || ''}</strong> - reg.</div>
      <div class="mb-4 text-justify">I am submitting herewith my application for <strong>${ctx.nature}</strong> for a period of <strong>${ctx.duration_str || ''}</strong> from <strong>${ctx.start || ''}</strong> to <strong>${ctx.end || ''}</strong>. The leave is required on account of: <strong>${ctx.reason || ''}</strong>.</div>
      <div class="mb-4 text-justify">${attachText}</div>
      <div class="mb-4">I kindly request you to sanction the leave / forward the application to the competent authority with your recommendation.</div>
      <div class="signature-block">
        Yours faithfully,<br>
        <div class="sig-slot"><img class="sig-img-target" style="display:none;" alt="Signature"></div>
        (${ctx.name || ''})
      </div>
      <div class="clear"></div>`;
  }
  function buildLetterPage(sd, t, ctx) {
    const subject = t.subject || t.label;
    const body = renderTemplate(t.bodyTemplate || '', ctx);
    return `
      <div class="text-right mb-4">Place: ${ctx.place || ''}<br>Date: ${ctx.app_date || ''}</div>
      <div class="mb-4">From<br><br><strong>${ctx.name || ''}</strong>${ctx.pen ? ' (' + (sd.idFieldLabel || 'ID') + ': ' + ctx.pen + ')' : ''}<br>${ctx.designation || ''}<br>${ctx.office || ''}</div>
      <div class="mb-4">To<br><br><strong>${ctx.controlling || ''}</strong><br>${ctx.office || ''}</div>
      <div class="mb-4">Respected Sir/Madam,</div>
      <div class="mb-4" style="padding-left:40px;"><strong>Sub:</strong> ${subject} — reg.</div>
      <div class="mb-4 text-justify">${body}</div>
      <div class="signature-block">Yours faithfully,<br>
        <div class="sig-slot"><img class="sig-img-target" style="display:none;" alt="Signature"></div>
        (${ctx.name || ''})</div>
      <div class="clear"></div>
      ${t.noRemarksBlock ? '' : `<hr>
      <div class="mb-4"><strong>Remarks / Recommendation${t.noControllingRemarks ? '' : ' of the Controlling Officer'}:</strong></div>
      <div style="height:60px;"></div>
      <div class="text-right">Signature (with date) and Designation</div>`}`;
  }

  function renderPages(sd, t) {
    const preview = document.getElementById('document-preview');
    preview.innerHTML = '';
    const ctx = buildCtx(sd, t);
    const addPage = (html, id) => {
      const div = document.createElement('div');
      div.className = 'page';
      if (id) div.id = id;
      div.innerHTML = html;
      preview.appendChild(div);
      return div;
    };
    if (t.family === 'leave') {
      if (sd.coverLetter) addPage(buildCoverLetterPage(sd, t, ctx));
      addPage(buildLeaveFormPage(sd, t, ctx));
      addPage(buildLeaveOfficePage(sd, t, ctx));
      if ((t.medCert || t.declarationTemplate) && t.declarationSeparatePage) addPage(buildDeclarationPage(sd, t, ctx));
    } else if (t.family === 'letter') {
      addPage(buildLetterPage(sd, t, ctx));
    } else if (t.family === 'bespoke') {
      const fns = (window.STATE_RENDER_FNS && window.STATE_RENDER_FNS[currentStateKey]) || {};
      const fn = fns[t.renderFn];
      if (typeof fn === 'function') {
        const result = fn(ctx, t, sd);
        if (typeof result === 'string') {
          addPage(result);
        } else if (Array.isArray(result)) {
          result.forEach(p => addPage(p.bodyHtml, p.id));
        }
      }
    }
    const pages = Array.from(preview.querySelectorAll('.page'));
    pages.forEach(p => { p.style.pageBreakAfter = ''; });
    if (pages.length) pages[pages.length - 1].style.pageBreakAfter = 'auto';
  }

  // ---- modal lifecycle ------------------------------------------------------
  function openAppModal(initialKey, stateKey) {
    currentStateKey = stateKey;
    const sd = stateData();
    const key = (initialKey && sd.types[initialKey]) ? initialKey : Object.keys(sd.types)[0];
    selectApplicationType(key);
    showFormPanel();
    openModal('app_modal'); // shared engine (engine-common.js)
  }
  function closeAppModal() { closeModal('app_modal'); } // shared engine
  function showFormPanel() {
    document.getElementById('panel_preview').classList.add('hidden-section');
    document.getElementById('panel_form').classList.remove('hidden-section');
  }
  function showPreviewPanel() {
    const form = document.querySelector('#tool_mount form');
    if (!form.checkValidity()) { form.reportValidity(); return; }
    const sd = stateData(), t = sd.types[currentTypeKey];
    renderPages(sd, t);
    applyStoredSignature(); // shared engine — renderPages() just rebuilt fresh, src-less .sig-img-target tags; re-stamp any uploaded signature onto them
    renderDocumentPreview('preview-render-target'); // shared engine — clones #document-preview's .page elements on-screen
    updateSigControlsVisibility('modal_sig_controls'); // shared engine
    trackActivity(); // shared engine — local-only activity count for the Home dashboard
    document.getElementById('panel_form').classList.add('hidden-section');
    document.getElementById('panel_preview').classList.remove('hidden-section');
  }
  function generatePDF() {
    const sd = stateData(), t = sd.types[currentTypeKey];
    renderPages(sd, t);
    applyStoredSignature(); // renderPages() just rebuilt fresh, src-less .sig-img-target tags; re-stamp any uploaded signature before printing
    setTimeout(() => { window.print(); closeAppModal(); }, 150);
  }

  function wireEvents() {
    document.getElementById('type_switcher_trigger').addEventListener('click', toggleTypeSwitcher);
    document.addEventListener('click', (e) => {
      const switcher = document.getElementById('type_switcher');
      if (switcher && switcher.classList.contains('open') && !switcher.contains(e.target)) closeTypeSwitcher();
    });
    document.getElementById('type_search').addEventListener('input', (e) => renderTypeList(e.target.value));
    document.getElementById('type_list').addEventListener('click', (e) => {
      const btn = e.target.closest('.state-option');
      if (btn) selectApplicationType(btn.dataset.key);
    });
    document.getElementById('type_search').addEventListener('keydown', (e) => {
      const options = Array.from(document.querySelectorAll('#type_list .state-option'));
      if (e.key === 'Escape') { e.stopPropagation(); closeTypeSwitcher(); document.getElementById('type_switcher_trigger').focus(); }
      else if (e.key === 'ArrowDown') { e.preventDefault(); typeKbdIndex = Math.min(typeKbdIndex + 1, options.length - 1); highlightTypeKbd(options); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); typeKbdIndex = Math.max(typeKbdIndex - 1, 0); highlightTypeKbd(options); }
      else if (e.key === 'Enter' && typeKbdIndex >= 0 && options[typeKbdIndex]) { e.preventDefault(); selectApplicationType(options[typeKbdIndex].dataset.key); }
    });
    document.getElementById('start').addEventListener('change', calculateFromDates);
    document.getElementById('end').addEventListener('change', calculateFromDates);
    document.getElementById('dur_num').addEventListener('input', calculateEndDate);
    document.getElementById('dur_unit').addEventListener('change', calculateEndDate);
  }

  function init(stateKey) {
    currentStateKey = stateKey;
    const sd = stateData();
    renderProfileFields(sd);
    renderFormExtraFields(sd);
    populateTypeDropdown(sd);
    renderTypeList('');
    wireEvents();
  }

  window.CATEGORY_SLOTS = CATEGORY_SLOTS;
  window.categoryIconSvg = categoryIconSvg;
  window.renderTemplate = renderTemplate;
  window.st_init = init;
  window.st_openAppModal = openAppModal;
  window.st_closeAppModal = closeAppModal;
  window.st_showFormPanel = showFormPanel;
  window.st_showPreviewPanel = showPreviewPanel;
  window.st_generatePDF = generatePDF;
})();
