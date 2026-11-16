/* MVP sencillo de atención: un único recorrido local, sin integraciones externas. */
(() => {
  'use strict';
  const STORE_KEY = 'atlanticCitySimpleMvp_v1';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const nowISO = () => new Date().toISOString();
  const todayISO = () => {
    const now = new Date();
    return new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  };
  const makeId = (prefix) => `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
  const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (ch) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const formatDate = (value) => {
    if (!value) return '—';
    const date = new Date(`${String(value).slice(0, 10)}T12:00:00`);
    return Number.isNaN(date.getTime()) ? escapeHtml(value) : new Intl.DateTimeFormat('es-PE', { dateStyle: 'medium' }).format(date);
  };
  const sampleData = () => ({
    clients: [
      { code: 'AC-001', name: 'Cliente de prueba 01', spend: 'Por definir', games: 'Preferencia de prueba A', segment: 'Sin clasificar', creadoEn: nowISO() },
      { code: 'AC-002', name: 'Cliente de prueba 02', spend: 'Por definir', games: 'Preferencia de prueba B', segment: 'Sin clasificar', creadoEn: nowISO() }
    ],
    campaigns: [{ id: 'CAM-01', name: 'Campaña de prueba', creadoEn: nowISO() }],
    promotions: [{ id: 'PRO-01', name: 'Promoción de prueba', identificadorDeCampana: 'CAM-01', creadoEn: nowISO() }],
    attentions: [
      { id: 'ATT-DEMO-01', code: 'AC-001', kind: 'Visita', date: todayISO(), note: 'Registro de ejemplo', incident: false, incidentDescription: '', identificadorDeCampana: '', promotionId: '', eligibility: '', creadoEn: nowISO() },
      { id: 'ATT-DEMO-02', code: 'AC-002', kind: 'Interacción', date: todayISO(), note: 'Registro de ejemplo', incident: false, incidentDescription: '', identificadorDeCampana: '', promotionId: '', eligibility: '', creadoEn: nowISO() }
    ],
    communications: []
  });
  function migrarCamposEstado(estado) {
    const equiv = { createdAt: 'creadoEn', campaignId: 'identificadorDeCampana', eligibilityId: 'identificadorDeElegibilidad', localRecord: 'registroLocal' };
    if (estado && typeof estado === 'object') for (const lista of Object.values(estado)) if (Array.isArray(lista)) for (const reg of lista) if (reg && typeof reg === 'object') for (const viejo in equiv) if (viejo in reg && !(equiv[viejo] in reg)) { reg[equiv[viejo]] = reg[viejo]; delete reg[viejo]; }
    return estado;
  }
  function normalizeState(parsed) {
    parsed = migrarCamposEstado(parsed);
    return {
      clients: Array.isArray(parsed.clients) ? parsed.clients : [],
      campaigns: Array.isArray(parsed.campaigns) ? parsed.campaigns : [],
      promotions: Array.isArray(parsed.promotions) ? parsed.promotions : [],
      attentions: Array.isArray(parsed.attentions) ? parsed.attentions : [],
      communications: Array.isArray(parsed.communications) ? parsed.communications : []
    };
  }
  function loadState() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      return raw ? normalizeState(JSON.parse(raw)) : sampleData();
    } catch (error) { return sampleData(); }
  }
  const db = loadState();
  let lastAttention = null;
  let toastTimer;

  function toast(message) {
    const el = $('#toast'); el.textContent = message; el.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('show'), 3200);
  }
  function showMessage(message, ok = true) {
    const el = $('#form-message');
    el.textContent = message;
    el.classList.add('show');
    el.style.background = ok ? 'var(--sage)' : '#f6dfd4';
  }
  function clearMessage() { $('#form-message').textContent = ''; $('#form-message').classList.remove('show'); }
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(db)); return true; }
    catch (error) { showMessage('No se pudieron guardar los cambios en este navegador.', false); return false; }
  }
  const byCode = (code) => db.clients.find((client) => client.code.toLowerCase() === String(code || '').trim().toLowerCase());
  const clientName = (code) => byCode(code)?.name || 'Cliente no disponible';
  const visitsFor = (code) => db.attentions.filter((item) => item.code.toLowerCase() === String(code || '').trim().toLowerCase() && item.kind === 'Visita').length;
  const communicationsFor = (code) => db.communications.filter((item) => item.code.toLowerCase() === String(code || '').trim().toLowerCase()).length;
  const campaignFor = (id) => db.campaigns.find((item) => item.id === id);
  const promotionFor = (id) => db.promotions.find((item) => item.id === id);
  const campaignName = (id) => campaignFor(id)?.name || 'Sin campaña vinculada';
  const promotionName = (id) => promotionFor(id)?.name || 'Sin promoción';
  const eligibilityName = (value) => value === 'aplica' ? 'Aplica · revisión manual' : value === 'no-aplica' ? 'No aplica' : 'Sin revisión';
  const valueOr = (value, fallback = 'No disponible') => String(value || '').trim() || fallback;

  function fillSelect(select, items, placeholder) {
    const previous = select.value;
    select.innerHTML = `<option value="">${escapeHtml(placeholder)}</option>` + items.map((item) => `<option value="${escapeHtml(item.id)}">${escapeHtml(item.name)}</option>`).join('');
    if (items.some((item) => item.id === previous)) select.value = previous;
  }
  function renderCriteria() {
    const code = $('#client-code').value.trim();
    $('#criteria-visits').textContent = visitsFor(code);
    $('#criteria-promotions').textContent = communicationsFor(code);
  }
  function renderStats() {
    $('#stat-clients').textContent = db.clients.length;
    $('#stat-attentions').textContent = db.attentions.length;
    $('#stat-incidents').textContent = db.attentions.filter((item) => item.incident).length;
    $('#stat-communications').textContent = db.communications.length;
  }
  function renderRecent() {
    const items = [...db.attentions].sort((a,b) => String(b.creadoEn || b.date).localeCompare(String(a.creadoEn || a.date))).slice(0,6);
    const wrap = $('#recent-list');
    if (!items.length) { wrap.innerHTML = '<div class="empty-state">Aún no hay atenciones guardadas.</div>'; return; }
    wrap.innerHTML = items.map((item) => {
      const client = escapeHtml(clientName(item.code));
      const label = item.eligibility === 'aplica' ? 'Aplica' : item.eligibility === 'no-aplica' ? 'No aplica' : 'Sin revisión';
      const badgeClass = item.eligibility === 'aplica' ? 'applies' : item.eligibility === 'no-aplica' ? 'no-apply' : '';
      const details = [item.note, item.incident ? `Incidencia: ${item.incidentDescription || 'registrada'}` : '', item.promotionId ? `${promotionName(item.promotionId)} · ${label}` : ''].filter(Boolean).join(' · ');
      return `<div class="record-item"><div><strong>${escapeHtml(item.id)} · ${client}</strong><small>${escapeHtml(item.kind)} · ${formatDate(item.date)}${details ? ` · ${escapeHtml(details)}` : ''}</small></div><span class="record-badge ${badgeClass}">${escapeHtml(label)}</span></div>`;
    }).join('');
  }
  function formSnapshot() {
    const code = $('#client-code').value.trim();
    const existing = byCode(code);
    const promotionId = $('#promotion-select').value;
    const identificadorDeCampana = $('#campaign-select').value;
    return {
      code,
      name: $('#client-name').value.trim() || existing?.name || '',
      spend: $('#client-spend').value.trim() || existing?.spend || '',
      games: $('#client-games').value.trim() || existing?.games || '',
      segment: $('#client-segment').value.trim() || existing?.segment || '',
      kind: $('#activity-kind').value,
      date: $('#activity-date').value || todayISO(),
      note: $('#activity-note').value.trim(),
      incident: $('#incident-toggle').checked,
      incidentDescription: $('#incident-description').value.trim(),
      identificadorDeCampana,
      promotionId,
      eligibility: promotionId ? $('#eligibility-select').value : ''
    };
  }
  function showReceipt(data, id, isSaved) {
    const code = data.code || '';
    const title = data.name || (code ? clientName(code) : 'Completa los datos del cliente');
    $('#receipt-id').textContent = id || (code || data.name ? 'BORRADOR' : '—');
    $('#receipt-title').textContent = title;
    $('#receipt-meta').textContent = isSaved ? 'Atención guardada en este navegador' : (code || data.name ? 'Vista previa · aún no guardada' : 'El resumen se actualiza al llenar el formulario.');
    $('#preview-client').textContent = code ? `${title} · ${code}` : '—';
    $('#preview-activity').textContent = (code || isSaved) && data.kind ? `${data.kind} · ${formatDate(data.date)}` : '—';
    $('#preview-campaign').textContent = data.identificadorDeCampana ? campaignName(data.identificadorDeCampana) : 'Sin campaña';
    $('#preview-promotion').textContent = data.promotionId ? promotionName(data.promotionId) : 'Sin promoción';
    $('#preview-result').textContent = data.promotionId ? eligibilityName(data.eligibility) : 'Sin revisión';
    $('#preview-incident').textContent = data.incident ? `Sí · ${data.incidentDescription || 'descripción pendiente'}` : 'No registrada';
    $('#preview-frequency').textContent = `${visitsFor(code)} visitas`;
    $('#preview-spend').textContent = valueOr(data.spend);
    $('#preview-games').textContent = valueOr(data.games);
    $('#preview-history').textContent = `${communicationsFor(code)} constancias locales`;
    $('#preview-segment').textContent = valueOr(data.segment, 'Sin clasificar');
    const receiptNote = data.promotionId && data.eligibility === 'no-aplica'
      ? 'No se registra comunicación porque el resultado es «No aplica».'
      : data.promotionId && data.eligibility === 'aplica'
        ? 'Se guardará una constancia local; no se enviará un mensaje.'
        : data.promotionId
          ? 'Ingresa el resultado manual según la regla que confirme el PO.'
          : 'La atención se guarda aunque no se seleccione una promoción.';
    $('#receipt-note').textContent = receiptNote;
  }
  function renderPreview() {
    const draft = formSnapshot();
    const hasDraft = Boolean(draft.code || draft.name || draft.note || draft.identificadorDeCampana || draft.promotionId || draft.incident);
    if (hasDraft || !lastAttention) showReceipt(draft, null, false);
    else showReceipt(lastAttention, lastAttention.id, true);
    renderCriteria();
  }
  function updateEligibilityControl() {
    const hasPromotion = Boolean($('#promotion-select').value);
    const select = $('#eligibility-select');
    select.disabled = !hasPromotion;
    select.options[0].textContent = hasPromotion ? 'Selecciona un resultado' : 'Selecciona una promoción primero';
    if (!hasPromotion) select.value = '';
  }
  function renderAll() {
    fillSelect($('#campaign-select'), db.campaigns, 'Sin campaña vinculada');
    fillSelect($('#promotion-select'), db.promotions, 'Sin promoción');
    updateEligibilityControl();
    renderStats(); renderRecent(); renderPreview();
  }
  function tryLoadProfile() {
    const code = $('#client-code').value.trim();
    const client = byCode(code);
    if (!client) { renderPreview(); return; }
    if (!$('#client-name').value.trim()) $('#client-name').value = client.name;
    if (!$('#client-spend').value.trim()) $('#client-spend').value = client.spend || '';
    if (!$('#client-games').value.trim()) $('#client-games').value = client.games || '';
    if (!$('#client-segment').value.trim()) $('#client-segment').value = client.segment || '';
    showMessage(`Perfil local ${client.code} cargado. Puedes actualizar los datos disponibles.`, true);
    lastAttention = null; renderPreview();
  }
  function clearForm() {
    $('#attention-form').reset();
    $('#activity-date').value = todayISO();
    $('#incident-fields').classList.add('hidden');
    $('#incident-description').required = false;
    lastAttention = null; clearMessage(); updateEligibilityControl(); renderPreview();
  }
  function submitAttention(event) {
    event.preventDefault();
    clearMessage();
    const draft = formSnapshot();
    if (!draft.code || !draft.name) { showMessage('Completa el identificador y el nombre del cliente.', false); return; }
    if (draft.incident && !draft.incidentDescription) { showMessage('Describe brevemente la incidencia o desmarca esa opción.', false); return; }
    if (draft.promotionId && !draft.eligibility) { showMessage('Selecciona el resultado de revisión manual de la promoción.', false); $('#eligibility-select').focus(); return; }

    const existing = byCode(draft.code);
    const client = {
      code: existing?.code || draft.code,
      name: draft.name,
      spend: draft.spend,
      games: draft.games,
      segment: draft.segment,
      creadoEn: existing?.creadoEn || nowISO()
    };
    if (existing) Object.assign(existing, client); else db.clients.push(client);
    const attention = {
      ...draft,
      code: client.code,
      id: makeId('ATN'),
      creadoEn: nowISO()
    };
    db.attentions.push(attention);
    if (draft.promotionId && draft.eligibility === 'aplica') {
      db.communications.push({ id: makeId('COM'), attentionId: attention.id, code: client.code, promotionId: draft.promotionId, date: draft.date, registroLocal: true });
    }
    const persisted = save();
    lastAttention = attention;
    $('#attention-form').reset();
    $('#activity-date').value = todayISO();
    $('#incident-fields').classList.add('hidden');
    $('#incident-description').required = false;
    updateEligibilityControl();
    renderStats(); renderRecent(); showReceipt(attention, attention.id, true); renderCriteria();
    const persistenceNote = persisted ? '' : ' Solo estará disponible durante esta sesión.';
    if (draft.promotionId && draft.eligibility === 'aplica') showMessage(`Atención registrada. Se creó una constancia local; no se envió un mensaje.${persistenceNote}`, persisted);
    else if (draft.promotionId && draft.eligibility === 'no-aplica') showMessage(`Atención y revisión registradas. No se creó comunicación.${persistenceNote}`, persisted);
    else showMessage(`Visita o interacción registrada en el historial local.${persistenceNote}`, persisted);
    toast(persisted ? 'Registro guardado en este navegador.' : 'Registro disponible solo en esta sesión.');
  }

  // Inicio: una pantalla, un recorrido básico y datos de prueba identificados.
  $('#today-label').textContent = new Intl.DateTimeFormat('es-PE', { dateStyle: 'medium' }).format(new Date());
  $('#activity-date').value = todayISO();
  $('#incident-toggle').addEventListener('change', (event) => {
    $('#incident-fields').classList.toggle('hidden', !event.target.checked);
    $('#incident-description').required = event.target.checked;
    lastAttention = null; renderPreview();
  });
  $('#client-code').addEventListener('input', () => { lastAttention = null; renderPreview(); });
  $('#client-code').addEventListener('blur', tryLoadProfile);
  $('#promotion-select').addEventListener('change', () => {
    const selected = promotionFor($('#promotion-select').value);
    if (selected?.identificadorDeCampana && !$('#campaign-select').value) $('#campaign-select').value = selected.identificadorDeCampana;
    updateEligibilityControl(); lastAttention = null; renderPreview();
  });
  $('#campaign-select').addEventListener('change', () => { lastAttention = null; renderPreview(); });
  $('#eligibility-select').addEventListener('change', () => { lastAttention = null; renderPreview(); });
  $$('#attention-form input, #attention-form textarea, #attention-form select').forEach((el) => {
    if (el.id === 'incident-toggle' || el.id === 'client-code' || el.id === 'campaign-select' || el.id === 'promotion-select' || el.id === 'eligibility-select') return;
    el.addEventListener('input', () => { lastAttention = null; renderPreview(); });
    el.addEventListener('change', () => { lastAttention = null; renderPreview(); });
  });
  $('#attention-form').addEventListener('submit', submitAttention);
  $('#clear-form').addEventListener('click', clearForm);
  renderAll();
})();
