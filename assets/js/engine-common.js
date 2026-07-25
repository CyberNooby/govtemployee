/* =============================================================================
   SHARED ENGINE — reusable across every tool page in this platform.
   Loaded via <script src="assets/js/engine-common.js"> BEFORE each page's own
   inline <script>. Every function here is a plain global, on purpose: existing
   markup calls these by name directly from onclick/onchange/oninput attributes,
   so a page never has to know it's calling into a shared file.

   CONTRACT — a tool page gets Preview + Download/Print "for free" by
   following these conventions:
     - exactly one <form> wraps the data-entry fields
     - #preview_modal / #preview-render-target exist (see markup below)
     - #form_modal exists ONLY if the tool needs a "pick a sub-type" step
       (optional — e.g. Income Tax doesn't need one, Kerala's forms do)
     - the page defines a global function syncFormData() that fills every
       .out-xxx span / print-template target from current field values
     - #document-preview holds one or more .page elements (toggle a page
       on/off for the current type via the .hidden-print class)
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
  const formModal = document.getElementById('form_modal');
  const previewModal = document.getElementById('preview_modal');
  const anyOpen = (formModal && formModal.classList.contains('open')) ||
                  (previewModal && previewModal.classList.contains('open'));
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
  _modalCloseTimers[id] = setTimeout(() => { el.classList.remove('open'); updateBodyScrollLock(); }, 200);
  updateBodyScrollLock();
}
function closePreviewModal() { closeModal('preview_modal'); }

document.addEventListener('keydown', function (e) {
  if (e.key !== 'Escape') return;
  const previewModal = document.getElementById('preview_modal');
  const formModal = document.getElementById('form_modal');
  if (previewModal && previewModal.classList.contains('open')) { closePreviewModal(); }
  else if (formModal && formModal.classList.contains('open') && typeof closeFormModal === 'function') { closeFormModal(); }
});

/* ---- signature capture: background-isolation canvas engine -------------
   Ids/classes this depends on: #sig_upload (file input), #sig_preview_img,
   #sig_preview_container, #sig_adjust_help, and .sig-img-target on every
   signature slot in the print template. --------------------------------- */
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

/* ---- Preview + PDF generation, driven by each page's own syncFormData() */
function openPreviewModal() {
  const form = document.querySelector('form');
  if (form && !form.checkValidity()) { form.reportValidity(); return; }
  if (typeof syncFormData === 'function') syncFormData();
  const target = document.getElementById('preview-render-target');
  target.innerHTML = '';
  document.querySelectorAll('#document-preview .page:not(.hidden-print)').forEach(page => {
    const card = document.createElement('div');
    card.className = 'page-preview-card';
    card.innerHTML = page.innerHTML;
    target.appendChild(card);
  });
  const sigContainer = document.getElementById('sig_preview_container');
  const hasSignature = sigContainer && sigContainer.style.display !== 'none';
  const sigControls = document.getElementById('modal_sig_controls');
  if (sigControls) sigControls.style.display = hasSignature ? 'flex' : 'none';
  openModal('preview_modal');
}
function generatePDF() {
  const form = document.querySelector('form');
  if (form && !form.checkValidity()) { form.reportValidity(); return; }
  closePreviewModal();
  if (typeof syncFormData === 'function') syncFormData();
  setTimeout(() => {
    window.print();
    if (typeof closeFormModal === 'function') closeFormModal();
  }, 150);
}
