/* =============================================================================
   SHARED ENGINE — reusable across every tool page in this platform.
   Loaded via <script src="assets/js/engine-common.js"> BEFORE each page's own
   inline <script>. Every function here is a plain global, on purpose: existing
   markup calls these by name directly from onclick/onchange/oninput attributes,
   so a page never has to know it's calling into a shared file.

   CONTRACT — a tool page gets modal mechanics, signature capture, and
   preview rendering "for free" by following these conventions:
     - exactly one <form> wraps the data-entry fields
     - any modal a page defines uses the .modal-overlay class and is
       opened/closed via openModal(id)/closeModal(id) — updateBodyScrollLock
       and the Escape key handler work automatically for any number of
       modals on the page, keyed off that class, not specific ids
     - the page defines a global function syncFormData() that fills every
       .out-xxx span / print-template target from current field values
     - #document-preview holds one or more .page elements (toggle a page
       on/off for the current type via the .hidden-print class);
       renderDocumentPreview(targetId) clones the active ones into any
       container the page names
     - signature elements use the sig_* ids/classes documented inline below
   ============================================================================= */

/* ---- tiny formatting helpers ------------------------------------------- */
function formatDate(dateString) {
  if (!dateString) return '';
  const d = new Date(dateString);
  if (isNaN(d.getTime())) return dateString;
  return d.getDate().toString().padStart(2, '0') + '/' +
         (d.getMonth() + 1).toString().padStart(2, '0') + '/' +
         d.getFullYear();
}
function val(id) { const el = document.getElementById(id); return el ? el.value.trim() : ''; }
function fval(id) { return formatDate(val(id)); }

/* ---- modal mechanics ---------------------------------------------------- */
function updateBodyScrollLock() {
  const anyOpen = document.querySelector('.modal-overlay.open') !== null;
  document.body.style.overflow = anyOpen ? 'hidden' : '';
}
const _modalCloseTimers = {};
function openModal(id) {
  const el = document.getElementById(id); if (!el) return;
  if (_modalCloseTimers[id]) { clearTimeout(_modalCloseTimers[id]); delete _modalCloseTimers[id]; }
  el.classList.add('open'); // display:flex now, still at its pre-animation opacity/transform
  requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('visible')));
  updateBodyScrollLock();
}
function closeModal(id) {
  const el = document.getElementById(id); if (!el) return;
  el.classList.remove('visible'); // starts the fade/scale-out
  _modalCloseTimers[id] = setTimeout(() => {
    el.classList.remove('open');
    updateBodyScrollLock();
    el.dispatchEvent(new CustomEvent('modal:closed')); // lets a page hook its own "on closed" behavior, regardless of what triggered the close (× button, Escape, etc.)
  }, 200);
  updateBodyScrollLock();
}

document.addEventListener('keydown', function (e) {
  if (e.key !== 'Escape') return;
  const openModalEl = document.querySelector('.modal-overlay.open');
  if (openModalEl) closeModal(openModalEl.id);
});

/* ---- signature capture: background-isolation canvas engine -------------
   Ids/classes this depends on: #sig_upload (file input), #sig_preview_img,
   #sig_preview_container, #sig_adjust_help, and .sig-img-target on every
   signature slot in the print template.

   #document-preview's pages are built LAZILY — state-tool-engine.js's
   renderPages() (and every bespoke per-state renderFn) only populates it
   when Preview/Print is actually clicked, and rebuilds it from scratch
   every time with fresh, src-less .sig-img-target <img> tags. That means a
   signature uploaded before the first preview has no .sig-img-target
   elements to attach to yet, and even a signature uploaded after one
   preview gets wiped the next time renderPages() reruns (switching type,
   previewing again, printing). _lastSignatureDataUrl + applyStoredSignature()
   exist so the caller can re-stamp the signature onto whatever fresh page
   markup just got built — call applyStoredSignature() right after every
   renderPages() call, before renderDocumentPreview(). --------------------- */
let _lastSignatureDataUrl = null;
function applyStoredSignature() {
  if (!_lastSignatureDataUrl) return;
  document.querySelectorAll('.sig-img-target').forEach(target => {
    target.src = _lastSignatureDataUrl;
    target.style.display = 'block';
  });
}
function processSignatureUpload(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = new Image();
      img.onload = function () {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i], g = data[i + 1], b = data[i + 2];
          const avg = (r + g + b) / 3;
          if (avg > 180) {
            data[i + 3] = 0; // paper background -> transparent
          } else {
            data[i] = Math.max(0, r - 40);
            data[i + 1] = Math.max(0, g - 40);
            data[i + 2] = Math.max(0, b - 40);
          }
        }
        ctx.putImageData(imgData, 0, 0);
        const transparentDataUrl = canvas.toDataURL('image/png');
        _lastSignatureDataUrl = transparentDataUrl;
        const previewImg = document.getElementById('sig_preview_img');
        if (previewImg) previewImg.src = transparentDataUrl;
        const previewContainer = document.getElementById('sig_preview_container');
        if (previewContainer) previewContainer.style.display = 'flex';
        const adjustHelp = document.getElementById('sig_adjust_help');
        if (adjustHelp) adjustHelp.style.display = 'block';
        document.querySelectorAll('.sig-img-target').forEach(target => {
          target.src = transparentDataUrl;
          target.style.display = 'block';
        });
        resetSigTransform();
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  }
}
function updateSigTransform(source) {
  const scaleId = source === 'modal' ? 'sig_scale_modal' : 'sig_scale';
  const rotateId = source === 'modal' ? 'sig_rotate_modal' : 'sig_rotate';
  const scaleEl = document.getElementById(scaleId), rotateEl = document.getElementById(rotateId);
  if (!scaleEl || !rotateEl) return;
  const scale = scaleEl.value, rotate = rotateEl.value;
  document.documentElement.style.setProperty('--sig-scale', scale / 100);
  document.documentElement.style.setProperty('--sig-rotate', rotate + 'deg');
  ['sig_scale', 'sig_scale_modal'].forEach(id => { const el = document.getElementById(id); if (el) el.value = scale; });
  ['sig_rotate', 'sig_rotate_modal'].forEach(id => { const el = document.getElementById(id); if (el) el.value = rotate; });
  ['sig_scale_val', 'sig_scale_val_modal'].forEach(id => { const el = document.getElementById(id); if (el) el.textContent = scale + '%'; });
  ['sig_rotate_val', 'sig_rotate_val_modal'].forEach(id => { const el = document.getElementById(id); if (el) el.textContent = rotate + '\u00b0'; });
}
function resetSigTransform() {
  ['sig_scale', 'sig_scale_modal'].forEach(id => { const el = document.getElementById(id); if (el) el.value = 100; });
  ['sig_rotate', 'sig_rotate_modal'].forEach(id => { const el = document.getElementById(id); if (el) el.value = 0; });
  updateSigTransform('main');
}

/* ---- smart date engine: for any tool with a start/end/duration triad ---
   Ids: #start, #end, #dur_num, #dur_unit, #duration_str. Not every tool
   uses this (Income Tax doesn't), which is fine — it just sits unused. -- */
function calculateFromDates() {
  const sDate = val('start'), eDate = val('end');
  if (sDate && eDate) {
    const start = new Date(sDate), end = new Date(eDate);
    const diffDays = Math.ceil((end - start) / 86400000) + 1; // inclusive
    if (diffDays > 0) {
      document.getElementById('dur_num').value = diffDays;
      document.getElementById('dur_unit').value = 'days';
      document.getElementById('duration_str').value = diffDays + ' Days';
    }
  }
}
function calculateEndDate() {
  const sDate = val('start');
  const num = parseInt(document.getElementById('dur_num').value, 10);
  const unit = document.getElementById('dur_unit').value;
  if (sDate && num > 0) {
    const start = new Date(sDate);
    let end = new Date(start);
    if (unit === 'days') { end.setDate(start.getDate() + (num - 1)); document.getElementById('duration_str').value = num + ' Days'; }
    else if (unit === 'months') { end.setMonth(start.getMonth() + num); end.setDate(end.getDate() - 1); document.getElementById('duration_str').value = num + ' Months'; }
    else if (unit === 'years') { end.setFullYear(start.getFullYear() + num); end.setDate(end.getDate() - 1); document.getElementById('duration_str').value = num + ' Years'; }
    const yyyy = end.getFullYear(), mm = String(end.getMonth() + 1).padStart(2, '0'), dd = String(end.getDate()).padStart(2, '0');
    document.getElementById('end').value = `${yyyy}-${mm}-${dd}`;
  }
}

/* ---- Preview rendering, reusable regardless of how a page's modal(s)
   are laid out. Each page's own script decides when to call this and what
   to do with its result (open a modal, switch a view, etc.). ------------- */
function renderDocumentPreview(targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.innerHTML = '';
  document.querySelectorAll('#document-preview .page:not(.hidden-print)').forEach(page => {
    const card = document.createElement('div');
    card.className = 'page-preview-card';
    card.innerHTML = page.innerHTML;
    target.appendChild(card);
  });
}
function updateSigControlsVisibility(controlsId) {
  const sigContainer = document.getElementById('sig_preview_container');
  const hasSignature = sigContainer && sigContainer.style.display !== 'none';
  const controls = document.getElementById(controlsId);
  if (controls) controls.style.display = hasSignature ? 'flex' : 'none';
}

/* ---- local activity tracking --------------------------------------------
   Powers the Home dashboard's "documents generated on this device" stat +
   sparkline. Deliberately NOT a "current visitors" counter — this app has no
   backend, so there is no honest way to know who else is using it right
   now. This instead counts real, on-this-device events (a form preview
   being generated), stored only in localStorage, never transmitted
   anywhere — consistent with the site's "nothing leaves your browser"
   promise. Called once from each tool's showPreviewPanel(). ------------- */
function trackActivity() {
  try {
    const key = 'sfh_activity';
    const today = new Date().toISOString().slice(0, 10);
    const data = JSON.parse(localStorage.getItem(key) || '{}');
    data[today] = (data[today] || 0) + 1;
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) { /* private browsing or storage blocked — fine, just skip */ }
}
function getActivityData(days) {
  try {
    const data = JSON.parse(localStorage.getItem('sfh_activity') || '{}');
    const result = [];
    const now = new Date();
    for (let i = days - 1; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      const key = d.toISOString().slice(0, 10);
      result.push({ date: key, count: data[key] || 0 });
    }
    return result;
  } catch (e) { return []; }
}

/* ---- dashboard tool mounting -------------------------------------------
   Lets a dashboard page (index.html) open any tool's modal+print markup
   directly in its own DOM instead of navigating to a separate page. Each
   tool ships its own <template id="tpl_xxx"> (modal dialog + print pages)
   and its own script (loaded once, up front, wrapped in an IIFE so its
   internals never collide with another tool's identically-named globals —
   see assets/js/tools/kerala.js for the pattern). Only one tool is ever
   live in #tool_mount at a time: switching tools clears the mount and
   clones a fresh copy of the new tool's template (calling its init once);
   reopening the SAME tool again just calls its open function again,
   skipping the reclone so any in-progress field values survive a
   close/reopen, matching how the old single-page-per-tool version worked. */
let _mountedTool = null;
function openDashboardTool(toolKey, templateId, initFnName, openFnName, arg) {
  const mount = document.getElementById('tool_mount');
  if (!mount) return;
  if (_mountedTool !== toolKey) {
    mount.innerHTML = '';
    const tpl = document.getElementById(templateId);
    if (!tpl) return;
    mount.appendChild(tpl.content.cloneNode(true));
    _mountedTool = toolKey;
    // toolKey is passed to init too (not just open) so the shared
    // state-tool-engine.js knows which state's data object to render
    // before anything else runs — income-tax.js's init() just ignores it.
    if (typeof window[initFnName] === 'function') window[initFnName](toolKey);
  }
  if (typeof window[openFnName] === 'function') window[openFnName](arg, toolKey);
}
