/* MVP local para perfiles, visitas, incidencias, segmentación, campañas y promociones. */
(() => {
  'use strict';
  const STORE_KEY = 'atlanticCityMvp_v3';
  const LEGACY_KEY = 'atlanticCityMvp_v2';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const todayISO = () => {
    const now = new Date();
    const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
    return local.toISOString().slice(0, 10);
  };
  const nowISO = () => new Date().toISOString();
  const makeId = (prefix) => `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
  const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (ch) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const formatDate = (value) => {
    if (!value) return '—';
    const date = new Date(`${String(value).slice(0, 10)}T12:00:00`);
    return Number.isNaN(date.getTime()) ? escapeHtml(value) : new Intl.DateTimeFormat('es-PE', { dateStyle: 'medium' }).format(date);
  };

  const sampleData = () => {
    const campaignId = makeId('CAM');
    const promotionId = makeId('PRO');
    return {
      clients: [
        { code: 'AC-001', name: 'Cliente de prueba 01', spend: 'Por definir', games: 'Preferencia de prueba A', segment: 'Sin clasificar', createdAt: nowISO() },
        { code: 'AC-002', name: 'Cliente de prueba 02', spend: 'Por definir', games: 'Preferencia de prueba B', segment: 'Sin clasificar', createdAt: nowISO() },
        { code: 'AC-003', name: 'Cliente de prueba 03', spend: 'Por definir', games: 'Por definir', segment: '', createdAt: nowISO() }
      ],
      visits: [
        { id: makeId('VIS'), code: 'AC-001', kind: 'Visita', date: todayISO(), note: 'Registro de ejemplo' },
        { id: makeId('VIS'), code: 'AC-002', kind: 'Interacción', date: todayISO(), note: 'Registro de ejemplo' }
      ],
      incidents: [],
      campaigns: [{ id: campaignId, name: 'Campaña de prueba', objective: 'Por definir', audience: 'Criterios por confirmar', period: 'Por definir', createdAt: nowISO() }],
      promotions: [{ id: promotionId, name: 'Promoción de prueba', campaignId, criteria: 'Criterios por confirmar', description: 'Registro de ejemplo', createdAt: nowISO() }],
      eligibilityChecks: [],
      communications: []
    };
  };

  function normalizeState(parsed) {
    const campaigns = Array.isArray(parsed.campaigns) ? parsed.campaigns : [];
    const promotions = Array.isArray(parsed.promotions) ? parsed.promotions : [];
    let normalizedCampaigns = campaigns;
    let normalizedPromotions = promotions;
    // Migrate the earlier prototype, where a campaign was a free-text field on a promotion.
    if (!campaigns.length) {
      const oldNames = [...new Set(promotions.map((p) => String(p.campaign || '').trim()).filter(Boolean))];
      const ids = new Map(oldNames.map((name) => [name, makeId('CAM')]));
      normalizedCampaigns = oldNames.map((name) => ({ id: ids.get(name), name, objective: '', audience: 'Por confirmar', period: '', createdAt: nowISO() }));
      normalizedPromotions = promotions.map((p) => ({ ...p, campaignId: p.campaignId || ids.get(String(p.campaign || '').trim()) || '' }));
    }
    return {
      clients: Array.isArray(parsed.clients) ? parsed.clients : [],
      visits: Array.isArray(parsed.visits) ? parsed.visits : [],
      incidents: Array.isArray(parsed.incidents) ? parsed.incidents : [],
      campaigns: normalizedCampaigns,
      promotions: normalizedPromotions,
      eligibilityChecks: Array.isArray(parsed.eligibilityChecks) ? parsed.eligibilityChecks : [],
      communications: Array.isArray(parsed.communications) ? parsed.communications : []
    };
  }
  function loadState() {
    try {
      const saved = localStorage.getItem(STORE_KEY) || localStorage.getItem(LEGACY_KEY);
      if (!saved) return sampleData();
      return normalizeState(JSON.parse(saved));
    } catch (error) { return sampleData(); }
  }
  let db = loadState();
  let toastTimer;
  const save = () => { try { localStorage.setItem(STORE_KEY, JSON.stringify(db)); } catch (error) { toast('No se pudo guardar en este navegador.'); } };
  const toast = (message) => {
    const el = $('#toast'); if (!el) return;
    el.textContent = message; el.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('show'), 3200);
  };
  const clientByCode = (code) => db.clients.find((client) => client.code === code);
  const clientName = (code) => clientByCode(code)?.name || 'Cliente no disponible';
  const activityCountFor = (code) => db.visits.filter((visit) => visit.code === code).length;
  const visitsFor = (code) => db.visits.filter((visit) => visit.code === code && (!visit.kind || visit.kind === 'Visita')).length;
  const communicationsFor = (code) => db.communications.filter((item) => item.code === code).length;
  const classification = (client) => client.segment?.trim() || 'Sin clasificar';
  const promotionName = (id) => db.promotions.find((p) => p.id === id)?.name || 'Promoción no disponible';
  const campaignName = (id) => db.campaigns.find((c) => c.id === id)?.name || 'Sin campaña vinculada';

  function showView(name) {
    $$('.view').forEach((view) => view.classList.toggle('active', view.id === `view-${name}`));
    $$('.nav-link').forEach((button) => button.classList.toggle('active', button.dataset.view === name));
    $('#sidebar').classList.remove('open');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderAll();
  }
  function emptyRow(cols, text) { return `<tr><td colspan="${cols}" class="empty-state">${escapeHtml(text)}</td></tr>`; }
  function fillClientSelect(select, placeholder, selectedValue = '') {
    if (!select) return;
    const prev = selectedValue || select.value;
    select.innerHTML = `<option value="">${escapeHtml(placeholder)}</option>` + db.clients.map((c) => `<option value="${escapeHtml(c.code)}">${escapeHtml(c.code)} · ${escapeHtml(c.name)}</option>`).join('');
    if (db.clients.some((c) => c.code === prev)) select.value = prev;
  }
  function fillPromotionSelect(select, placeholder) {
    if (!select) return;
    const prev = select.value;
    select.innerHTML = `<option value="">${escapeHtml(placeholder)}</option>` + db.promotions.map((p) => `<option value="${escapeHtml(p.id)}">${escapeHtml(p.name)}</option>`).join('');
    if (db.promotions.some((p) => p.id === prev)) select.value = prev;
  }
  function fillCampaignSelect(select, placeholder) {
    if (!select) return;
    const prev = select.value;
    select.innerHTML = `<option value="">${escapeHtml(placeholder)}</option>` + db.campaigns.map((c) => `<option value="${escapeHtml(c.id)}">${escapeHtml(c.name)}</option>`).join('');
    if (db.campaigns.some((c) => c.id === prev)) select.value = prev;
  }
  function recentActivity(limit = 6) {
    const items = [
      ...db.visits.map((v) => ({ date: v.date, title: `${v.kind || 'Actividad'} registrada`, detail: `${clientName(v.code)}${v.note ? ` · ${v.note}` : ''}`, icon: '↻' })),
      ...db.incidents.map((i) => ({ date: i.date, title: 'Incidencia registrada', detail: `${i.code ? clientName(i.code) : 'Sin perfil vinculado'} · ${i.description}`, icon: '!' })),
      ...db.eligibilityChecks.filter((x) => x.result === 'no-aplica').map((x) => ({ date: x.date, title: 'Promoción revisada: no aplica', detail: `${clientName(x.code)} · ${promotionName(x.promotionId)}`, icon: '◇' })),
      ...db.communications.map((c) => ({ date: c.date, title: 'Constancia local registrada', detail: `${clientName(c.code)} · ${promotionName(c.promotionId)}`, icon: '✦' }))
    ];
    return items.sort((a,b) => String(b.date).localeCompare(String(a.date))).slice(0, limit);
  }
  function activityMarkup(items) {
    if (!items.length) return '<div class="empty-state">Aún no hay actividad registrada.</div>';
    return items.map((item) => `<div class="activity-item"><span class="activity-icon">${escapeHtml(item.icon)}</span><div><div class="activity-title">${escapeHtml(item.title)}</div><div class="activity-sub">${escapeHtml(item.detail)}</div></div><span class="activity-date">${formatDate(item.date)}</span></div>`).join('');
  }
  function marketingRecords(limit = 3) {
    const items = [
      ...db.campaigns.map((c) => ({ type: 'Campaña', name: c.name, detail: c.objective || c.audience || 'Objetivo por confirmar', date: c.createdAt, color: 'chip-purple' })),
      ...db.promotions.map((p) => ({ type: 'Promoción', name: p.name, detail: p.campaignId ? campaignName(p.campaignId) : (p.criteria || 'Sin campaña vinculada'), date: p.createdAt, color: 'chip-teal' }))
    ];
    return items.sort((a,b) => String(b.date).localeCompare(String(a.date))).slice(0, limit);
  }
  function renderHome() {
    $('#stat-clients').textContent = db.clients.length;
    $('#stat-visits').textContent = db.visits.length;
    $('#stat-incidents').textContent = db.incidents.length;
    $('#stat-promos').textContent = db.promotions.length;
    const recent = [...db.clients].sort((a,b) => String(b.createdAt).localeCompare(String(a.createdAt))).slice(0,5);
    $('#home-client-rows').innerHTML = recent.length ? recent.map((c) => `<tr><td><span class="cell-primary">${escapeHtml(c.code)}</span></td><td><span class="cell-primary">${escapeHtml(c.name)}</span></td><td>${activityCountFor(c.code)}</td><td><span class="chip chip-blue">${escapeHtml(classification(c))}</span></td><td>${escapeHtml(c.games || 'No disponible')}</td></tr>`).join('') : emptyRow(5, 'No hay perfiles registrados.');
    const homeActivities = recentActivity(db.incidents.length ? 5 : 4);
    if (!db.incidents.length) homeActivities.push({ date: '', title: 'Sin incidencias registradas', detail: 'No hay casos en los datos locales.', icon: '!' });
    $('#home-activity').innerHTML = activityMarkup(homeActivities);
    const marketing = marketingRecords(4);
    $('#home-promotions').innerHTML = marketing.length ? marketing.map((item) => `<div class="compact-promo"><div><strong>${escapeHtml(item.name)}</strong><small>${escapeHtml(item.detail)}</small></div><span class="chip ${item.color}">${escapeHtml(item.type)}</span></div>`).join('') : '<div class="empty-state">No hay campañas ni promociones registradas.</div>';
  }
  function renderClientTable() {
    const query = ($('#client-search')?.value || '').trim().toLowerCase();
    const selected = $('#client-segment-filter')?.value || '';
    const labels = [...new Set(db.clients.map(classification))].sort((a,b) => a.localeCompare(b, 'es'));
    const filter = $('#client-segment-filter');
    if (filter) {
      const keep = filter.value;
      filter.innerHTML = '<option value="">Todas las clasificaciones</option>' + labels.map((label) => `<option value="${escapeHtml(label)}">${escapeHtml(label)}</option>`).join('');
      if (labels.includes(keep)) filter.value = keep;
    }
    const filtered = db.clients.filter((c) => (!query || [c.code,c.name,c.spend,c.games,c.segment].join(' ').toLowerCase().includes(query)) && (!selected || classification(c) === selected));
    $('#client-count-label').textContent = `${filtered.length} de ${db.clients.length} perfiles`;
    $('#client-rows').innerHTML = filtered.length ? filtered.map((c) => `<tr><td><span class="cell-primary">${escapeHtml(c.code)}</span></td><td>${escapeHtml(c.name)}</td><td>${activityCountFor(c.code)}</td><td>${escapeHtml(c.spend || 'No disponible')}</td><td>${escapeHtml(c.games || 'No disponible')}</td><td><span class="chip chip-blue">${escapeHtml(classification(c))}</span></td><td><button class="table-action" data-edit-client="${escapeHtml(c.code)}">Editar</button></td></tr>`).join('') : emptyRow(7, query ? 'No se encontraron perfiles.' : 'Aún no hay clientes.');
  }
  function renderVisits() {
    fillClientSelect($('#visit-client'), 'Selecciona un cliente', $('#visit-client')?.value);
    const q = ($('#visit-search')?.value || '').trim().toLowerCase();
    const items = [...db.visits].sort((a,b) => String(b.date).localeCompare(String(a.date))).filter((v) => !q || `${clientName(v.code)} ${v.note} ${v.kind}`.toLowerCase().includes(q));
    $('#visit-count-label').textContent = `${items.length} registros`;
    $('#visit-rows').innerHTML = items.length ? items.map((v) => `<tr><td>${formatDate(v.date)}</td><td><span class="cell-primary">${escapeHtml(clientName(v.code))}</span><div class="cell-muted">${escapeHtml(v.code)}</div></td><td><span class="chip chip-teal">${escapeHtml(v.kind || 'Actividad')}</span></td><td>${escapeHtml(v.note || '—')}</td></tr>`).join('') : emptyRow(4, 'No hay visitas o interacciones registradas.');
  }
  function renderIncidents() {
    fillClientSelect($('#incident-client'), 'Sin perfil vinculado (opcional)', $('#incident-client')?.value);
    const rows = [...db.incidents].sort((a,b) => String(b.date).localeCompare(String(a.date)));
    $('#incident-rows').innerHTML = rows.length ? rows.map((i) => `<tr><td>${formatDate(i.date)}</td><td>${i.code ? `${escapeHtml(clientName(i.code))}<div class="cell-muted">${escapeHtml(i.code)}</div>` : 'Sin perfil vinculado'}</td><td>${escapeHtml(i.description)}</td><td>${escapeHtml(i.followup || 'Sin nota de seguimiento')}</td><td><button class="table-action" data-followup="${escapeHtml(i.id)}">Añadir nota</button></td></tr>`).join('') : emptyRow(5, 'No hay incidencias registradas.');
  }
  function renderSegments() {
    fillClientSelect($('#segment-client'), 'Selecciona un cliente', $('#segment-client')?.value);
    const select = $('#segment-client');
    if (select?.value) updateSegmentPreview(select.value);
    const rows = db.clients.map((c) => `<tr><td><span class="cell-primary">${escapeHtml(c.name)}</span><div class="cell-muted">${escapeHtml(c.code)}</div></td><td>${visitsFor(c.code)} registradas<br><span class="cell-muted">periodo no definido</span></td><td>${escapeHtml(c.spend || 'No disponible')}</td><td>${escapeHtml(c.games || 'No disponible')}</td><td>${communicationsFor(c.code)} constancias locales</td><td><span class="chip chip-purple">${escapeHtml(classification(c))}</span></td></tr>`).join('');
    $('#segment-rows').innerHTML = rows || emptyRow(6, 'Registra un cliente para consultar sus criterios.');
  }
  function updateSegmentPreview(code) {
    const c = clientByCode(code); const wrap = $('#segment-criteria');
    if (!c || !wrap) { if (wrap) wrap.innerHTML = ''; $('#segment-label').value = ''; return; }
    const values = [
      ['Frecuencia de visitas', `${visitsFor(code)} registradas; periodo por definir`],
      ['Nivel de gasto', c.spend || 'No disponible'],
      ['Preferencias de juegos', c.games || 'No disponible'],
      ['Historial de promociones', `${communicationsFor(code)} constancias locales`]
    ];
    wrap.innerHTML = values.map(([label,value]) => `<div class="criteria-value"><small>${escapeHtml(label)}</small><strong>${escapeHtml(value)}</strong></div>`).join('');
    $('#segment-label').value = c.segment || '';
  }
  function renderMarketing() {
    fillCampaignSelect($('#promotion-campaign'), 'Sin campaña vinculada');
    fillPromotionSelect($('#eligibility-promotion'), 'Selecciona una promoción');
    fillClientSelect($('#eligibility-client'), 'Selecciona un cliente', $('#eligibility-client')?.value);
    const campaigns = [...db.campaigns].sort((a,b) => String(b.createdAt).localeCompare(String(a.createdAt)));
    $('#campaign-rows').innerHTML = campaigns.length ? campaigns.map((c) => `<tr><td><span class="cell-primary">${escapeHtml(c.name)}</span></td><td>${escapeHtml(c.objective || 'No especificado')}</td><td>${escapeHtml(c.audience || 'No especificado')}</td><td>${escapeHtml(c.period || 'No especificado')}</td><td><span class="chip chip-purple">Registrada</span></td></tr>`).join('') : emptyRow(5, 'No hay campañas registradas.');
    const promotions = [...db.promotions].sort((a,b) => String(b.createdAt).localeCompare(String(a.createdAt)));
    $('#promotion-rows').innerHTML = promotions.length ? promotions.map((p) => `<tr><td><span class="cell-primary">${escapeHtml(p.name)}</span></td><td>${escapeHtml(p.campaignId ? campaignName(p.campaignId) : '—')}</td><td>${escapeHtml(p.criteria || 'No especificados')}</td><td>${escapeHtml(p.description || '—')}</td><td>${formatDate(p.createdAt)}</td></tr>`).join('') : emptyRow(5, 'No hay promociones registradas.');
    const checks = [...db.eligibilityChecks].sort((a,b) => String(b.date).localeCompare(String(a.date)));
    $('#eligibility-rows').innerHTML = checks.length ? checks.map((x) => {
      const hasCommunication = db.communications.some((c) => c.eligibilityId === x.id);
      const resultLabel = x.result === 'aplica' ? 'Aplica (revisión manual)' : 'No aplica';
      return `<tr><td>${formatDate(x.date)}</td><td>${escapeHtml(clientName(x.code))}</td><td>${escapeHtml(promotionName(x.promotionId))}</td><td><span class="chip ${x.result === 'aplica' ? 'chip-teal' : 'chip-amber'}">${escapeHtml(resultLabel)}</span></td><td>${escapeHtml(x.note || '—')}</td><td>${hasCommunication ? '<span class="chip chip-blue">Constancia local</span>' : '<span class="chip chip-gray">Sin comunicación</span>'}</td></tr>`;
    }).join('') : emptyRow(6, 'No hay revisiones de elegibilidad registradas.');
  }
  function renderReports() {
    $('#report-clients').textContent = db.clients.length;
    $('#report-visits').textContent = db.visits.length;
    $('#report-incidents').textContent = db.incidents.length;
    $('#report-communications').textContent = db.communications.length;
    const map = new Map(); db.clients.forEach((c) => { const key = classification(c); map.set(key, (map.get(key)||0)+1); });
    const entries = [...map.entries()].sort((a,b) => b[1]-a[1]); const max = Math.max(1,...entries.map((x) => x[1]));
    $('#report-segments').innerHTML = entries.length ? entries.map(([label,count]) => `<div class="bar-row"><span>${escapeHtml(label)}</span><div class="bar-track"><div class="bar-fill" style="width:${Math.max(7, count/max*100)}%"></div></div><strong>${count}</strong></div>`).join('') : '<div class="empty-state">No hay datos para mostrar.</div>';
    $('#report-activity').innerHTML = activityMarkup(recentActivity(6));
    $('#report-marketing-types').innerHTML = [
      ['Campañas', db.campaigns.length, 'Planificación de marketing'],
      ['Promociones', db.promotions.length, 'Ofertas concretas registradas'],
      ['Revisiones de elegibilidad', db.eligibilityChecks.length, 'Resultado manual; no aplica una fórmula'],
      ['Constancias locales', db.communications.length, 'No demuestra envío por un canal real']
    ].map(([type,count,note]) => `<tr><td><span class="cell-primary">${escapeHtml(type)}</span></td><td>${count}</td><td>${escapeHtml(note)}</td></tr>`).join('');
  }
  function renderAll() { renderHome(); renderClientTable(); renderVisits(); renderIncidents(); renderSegments(); renderMarketing(); renderReports(); }
  function openClientForm(client = null) {
    const panel = $('#client-form-panel'); panel.classList.remove('hidden');
    $('#client-form-title').textContent = client ? 'Actualizar perfil' : 'Registrar cliente';
    $('#client-submit').textContent = client ? 'Guardar cambios' : 'Guardar perfil';
    $('#client-edit-key').value = client?.code || '';
    $('#client-code').value = client?.code || ''; $('#client-code').readOnly = Boolean(client);
    $('#client-name').value = client?.name || ''; $('#client-spend').value = client?.spend || ''; $('#client-games').value = client?.games || ''; $('#client-segment').value = client?.segment || '';
    panel.scrollIntoView({ behavior: 'smooth', block: 'start' }); $('#client-name').focus({ preventScroll: true });
  }
  function closeClientForm() { $('#client-form').reset(); $('#client-edit-key').value=''; $('#client-code').readOnly=false; $('#client-form-panel').classList.add('hidden'); }
  function exportCSV() {
    const rows = [['Tipo','Identificador','Nombre/Detalle','Fecha','Dato adicional']];
    db.clients.forEach((c) => rows.push(['Cliente',c.code,c.name,'',`Gasto: ${c.spend || ''}; Preferencias: ${c.games || ''}; Clasificación: ${classification(c)}`]));
    db.visits.forEach((v) => rows.push([v.kind || 'Actividad',v.code,clientName(v.code),v.date,v.note || '']));
    db.incidents.forEach((i) => rows.push(['Incidencia',i.code || '',i.description,i.date,i.followup || '']));
    db.campaigns.forEach((c) => rows.push(['Campaña',c.id,c.name,String(c.createdAt).slice(0,10),`Objetivo: ${c.objective || ''}; Público: ${c.audience || ''}; Periodo: ${c.period || ''}`]));
    db.promotions.forEach((p) => rows.push(['Promoción',p.id,p.name,String(p.createdAt).slice(0,10),`Campaña: ${campaignName(p.campaignId)}; Criterios: ${p.criteria || ''}; Descripción: ${p.description || ''}`]));
    db.eligibilityChecks.forEach((x) => rows.push(['Revisión de elegibilidad',x.id,`${clientName(x.code)} / ${promotionName(x.promotionId)}`,x.date,`Resultado manual: ${x.result}; Nota: ${x.note || ''}`]));
    db.communications.forEach((c) => rows.push(['Constancia local',c.code,`${clientName(c.code)} / ${promotionName(c.promotionId)}`,c.date,c.note || 'No se envió un mensaje externo']));
    const csv = '\ufeff' + rows.map((row) => row.map((value) => `"${String(value ?? '').replace(/"/g,'""')}"`).join(',')).join('\r\n');
    const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'}); const url = URL.createObjectURL(blob); const link = document.createElement('a');
    link.href=url; link.download='reporte_atlantic_city.csv'; document.body.appendChild(link); link.click(); link.remove(); URL.revokeObjectURL(url); toast('Reporte CSV descargado.');
  }

  // Navegación y accesos rápidos.
  $$('.nav-link').forEach((button) => button.addEventListener('click', () => showView(button.dataset.view)));
  document.addEventListener('click', (event) => {
    const go = event.target.closest('[data-go]'); if (go) showView(go.dataset.go);
    const edit = event.target.closest('[data-edit-client]'); if (edit) openClientForm(clientByCode(edit.dataset.editClient));
    const follow = event.target.closest('[data-followup]'); if (follow) {
      const incident = db.incidents.find((item) => item.id === follow.dataset.followup); if (!incident) return;
      const value = window.prompt('Añade una nota de seguimiento (no se cambia un estado predefinido):', incident.followup || '');
      if (value !== null) { incident.followup = value.trim(); save(); renderAll(); toast('Nota de seguimiento guardada.'); }
    }
  });
  $('#menu-toggle').addEventListener('click', () => $('#sidebar').classList.toggle('open'));
  $('#global-search').addEventListener('input', (event) => {
    const query = event.target.value.trim(); if (query) { showView('clients'); $('#client-search').value = query; renderClientTable(); }
    else if ($('#view-clients').classList.contains('active')) { $('#client-search').value=''; renderClientTable(); }
  });

  // Alta y actualización de perfiles.
  $('#toggle-client-form').addEventListener('click', () => openClientForm());
  $('#close-client-form').addEventListener('click', closeClientForm); $('#cancel-client-form').addEventListener('click', closeClientForm);
  $('#client-form').addEventListener('submit', (event) => {
    event.preventDefault(); const editing = $('#client-edit-key').value;
    const code = $('#client-code').value.trim(); const name = $('#client-name').value.trim();
    const collision = db.clients.some((c) => c.code.toLowerCase() === code.toLowerCase() && c.code !== editing);
    if (collision) { toast('Ese identificador ya está registrado.'); $('#client-code').focus(); return; }
    const existing = editing ? clientByCode(editing) : null;
    const item = { code, name, spend: $('#client-spend').value.trim(), games: $('#client-games').value.trim(), segment: $('#client-segment').value.trim(), createdAt: existing?.createdAt || nowISO() };
    if (existing) Object.assign(existing,item); else db.clients.push(item);
    save(); closeClientForm(); renderAll(); toast(existing ? 'Perfil actualizado.' : 'Cliente registrado.');
  });
  $('#client-search').addEventListener('input', renderClientTable); $('#client-segment-filter').addEventListener('change', renderClientTable);

  // Visitas e interacciones. El registro no depende de que haya incidencia o promoción.
  $('#visit-date').value = todayISO();
  $('#visit-form').addEventListener('submit', (event) => {
    event.preventDefault(); if (!clientByCode($('#visit-client').value)) { toast('Selecciona un cliente registrado.'); return; }
    db.visits.push({ id: makeId('VIS'), code: $('#visit-client').value, kind: $('#visit-kind').value, date: $('#visit-date').value || todayISO(), note: $('#visit-note').value.trim() });
    save(); event.target.reset(); $('#visit-date').value=todayISO(); renderAll(); toast('Visita o interacción registrada.');
  });
  $('#visit-search').addEventListener('input', renderVisits);

  // Incidencias: texto y seguimiento libre; no se presuponen estados ni plazos.
  $('#incident-form').addEventListener('submit', (event) => {
    event.preventDefault();
    db.incidents.push({ id: makeId('INC'), code: $('#incident-client').value || '', date: todayISO(), description: $('#incident-description').value.trim(), followup: $('#incident-followup').value.trim() });
    save(); event.target.reset(); renderAll(); toast('Incidencia registrada.');
  });

  // Criterios de segmentación: etiqueta manual hasta contar con una regla aprobada.
  $('#segment-client').addEventListener('change', (event) => updateSegmentPreview(event.target.value));
  $('#segment-form').addEventListener('submit', (event) => {
    event.preventDefault(); const client=clientByCode($('#segment-client').value); if (!client) { toast('Selecciona un perfil.'); return; }
    client.segment=$('#segment-label').value.trim(); save(); renderAll(); $('#segment-client').value=client.code; updateSegmentPreview(client.code); toast('Etiqueta manual guardada.');
  });

  // Campañas y promociones son entidades separadas.
  $('#campaign-form').addEventListener('submit', (event) => {
    event.preventDefault();
    db.campaigns.push({ id: makeId('CAM'), name: $('#campaign-name').value.trim(), objective: $('#campaign-objective').value.trim(), audience: $('#campaign-audience').value.trim(), period: $('#campaign-period').value.trim(), createdAt: nowISO() });
    save(); event.target.reset(); renderAll(); toast('Campaña registrada; no se marca como aprobada o publicada.');
  });
  $('#promotion-form').addEventListener('submit', (event) => {
    event.preventDefault();
    db.promotions.push({ id: makeId('PRO'), name: $('#promotion-name').value.trim(), campaignId: $('#promotion-campaign').value, criteria: $('#promotion-criteria').value.trim(), description: $('#promotion-description').value.trim(), createdAt: nowISO() });
    save(); event.target.reset(); renderAll(); toast('Promoción registrada.');
  });
  // La revisión se ingresa manualmente según una regla confirmada; nunca se calcula aquí.
  $('#eligibility-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const promotionId=$('#eligibility-promotion').value, code=$('#eligibility-client').value, result=$('#eligibility-result').value;
    if (!db.promotions.some((p) => p.id === promotionId) || !clientByCode(code) || !['aplica','no-aplica'].includes(result)) { toast('Selecciona una promoción, un cliente y el resultado de revisión.'); return; }
    const check={ id:makeId('REV'), promotionId, code, result, date:todayISO(), note:$('#eligibility-note').value.trim() };
    db.eligibilityChecks.push(check);
    if (result === 'aplica') {
      db.communications.push({ id:makeId('COM'), eligibilityId:check.id, promotionId, code, date:todayISO(), note:check.note, localRecord:true });
      save(); event.target.reset(); renderAll(); toast('Revisión guardada. Se creó una constancia local; no se envió un mensaje.');
    } else {
      save(); event.target.reset(); renderAll(); toast('Revisión guardada como “No aplica”; no se registró comunicación.');
    }
  });

  $('#export-report').addEventListener('click', exportCSV);
  $('#today-label').textContent = new Intl.DateTimeFormat('es-PE', { dateStyle:'medium' }).format(new Date());
  renderAll();
})();
