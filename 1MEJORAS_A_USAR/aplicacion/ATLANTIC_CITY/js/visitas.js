/* visitas.js — módulo 2: visitas, interacciones e incidencias (HU-05 y HU-06).
   La atención se conserva aunque no haya incidencia ni promoción (RN01). */
'use strict';

let filtroVisitas = { cliente: '', texto: '' };

function renderVisitas() {
  llenarSelectClientes('visita-cliente');
  const sel = document.getElementById('visita-filtro-cliente');
  sel.innerHTML = '<option value="">Todos los clientes</option>' +
    DATOS.clientes.map(c => '<option value="' + escapeHtml(c.identificador) + '">' + escapeHtml(c.identificador) + ' · ' + escapeHtml(c.nombre) + '</option>').join('');
  sel.value = filtroVisitas.cliente;
  const filas = DATOS.visitas.filter(v => {
    const okC = !filtroVisitas.cliente || v.cliente === filtroVisitas.cliente;
    const okT = !filtroVisitas.texto || (v.nota || '').toLowerCase().includes(filtroVisitas.texto.toLowerCase());
    return okC && okT;
  }).slice().reverse().map(v => [
    escapeHtml(fechaLarga(v.fecha)),
    escapeHtml(v.cliente) + '<br><span class="ayuda">' + escapeHtml(nombreCliente(v.cliente)) + '</span>',
    escapeHtml(v.tipo),
    escapeHtml(v.nota || '—'),
    v.incidencia ? 'Sí · ' + escapeHtml(v.incidencia) : 'No'
  ]);
  pintarTabla('tabla-visitas', ['Fecha', 'Cliente', 'Tipo', 'Nota', 'Incidencia'], filas, 'Sin atenciones registradas.');
  renderIncidencias();
}

function renderIncidencias() {
  const sel = document.getElementById('seg-incidencia');
  sel.innerHTML = '<option value="">Selecciona una incidencia</option>' +
    DATOS.incidencias.map(i => '<option value="' + escapeHtml(i.id) + '">' + escapeHtml(i.id) + ' · ' + escapeHtml(nombreCliente(i.cliente)) + '</option>').join('');
  const filas = DATOS.incidencias.slice().reverse().map(i => [
    escapeHtml(i.id),
    escapeHtml(i.cliente) + ' · ' + escapeHtml(nombreCliente(i.cliente)),
    escapeHtml(i.descripcion),
    i.notas && i.notas.length ? i.notas.map(n => escapeHtml(n)).join('<br>') : '<span class="ayuda">Sin notas aún</span>'
  ]);
  pintarTabla('tabla-incidencias', ['ID', 'Cliente', 'Descripción', 'Seguimiento'], filas, 'No hay incidencias registradas.');
}

function registrarVisitas() {
  document.getElementById('visita-fecha').value = hoyISO();
  document.getElementById('visita-incidencia').addEventListener('change', e => {
    document.getElementById('caja-incidencia').hidden = !e.target.checked;
  });
  document.getElementById('visita-filtro-cliente').addEventListener('change', e => { filtroVisitas.cliente = e.target.value; renderVisitas(); });
  document.getElementById('visita-buscar').addEventListener('input', e => { filtroVisitas.texto = e.target.value; renderVisitas(); });

  document.getElementById('form-visita').addEventListener('submit', e => {
    e.preventDefault();
    const cliente = document.getElementById('visita-cliente').value;
    if (!cliente) {                              /* EXC03 */
      aviso('MSJ08', 'Selecciona un cliente registrado.', true);
      document.getElementById('visita-cliente').focus();
      return;
    }
    const conIncidencia = document.getElementById('visita-incidencia').checked;
    const descripcion = document.getElementById('visita-inc-descripcion').value.trim();
    if (conIncidencia && !descripcion) {         /* EXC04 */
      aviso('MSJ02', 'Describe brevemente la incidencia o desmarca esa opción.', true);
      document.getElementById('visita-inc-descripcion').focus();
      return;
    }
    const visita = {
      id: siguienteId(DATOS.visitas, 'ATT-'),
      cliente,
      tipo: document.getElementById('visita-tipo').value,
      fecha: document.getElementById('visita-fecha').value || hoyISO(),
      nota: document.getElementById('visita-nota').value.trim(),
      incidencia: null,
      creadoEn: hoyISO(),
      demo: false
    };
    if (conIncidencia) {
      const inc = { id: siguienteId(DATOS.incidencias, 'INC-'), cliente, descripcion, notas: [], creadoEn: hoyISO(), demo: false };
      DATOS.incidencias.push(inc);
      visita.incidencia = inc.id;
    }
    DATOS.visitas.push(visita);                  /* RN01: se conserva siempre */
    aviso('MSJ19', 'Visita o interacción registrada.');
    if (conIncidencia) aviso('MSJ20', 'Incidencia registrada.');
    document.getElementById('form-visita').reset();
    document.getElementById('visita-fecha').value = hoyISO();
    document.getElementById('caja-incidencia').hidden = true;
    guardar();
  });

  document.getElementById('form-seguimiento').addEventListener('submit', e => {
    e.preventDefault();
    const id = document.getElementById('seg-incidencia').value;
    const nota = document.getElementById('seg-nota').value.trim();
    const inc = DATOS.incidencias.find(i => i.id === id);
    if (!inc || !nota) {                         /* EXC01 */
      aviso('MSJ32', 'Completa los campos obligatorios antes de guardar.', true);
      (!inc ? document.getElementById('seg-incidencia') : document.getElementById('seg-nota')).focus();
      return;
    }
    inc.notas = inc.notas || [];
    inc.notas.push(nota + ' (' + fechaLarga(hoyISO()) + ')');
    aviso('MSJ24', 'Nota de seguimiento guardada.');
    document.getElementById('form-seguimiento').reset();
    guardar();
  });
}

registrarVista('visitas', renderVisitas);
registrarVista('incidencias', renderIncidencias);
document.addEventListener('DOMContentLoaded', registrarVisitas);
