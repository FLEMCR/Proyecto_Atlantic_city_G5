/* promociones.js — módulo 3: segmentación manual (HU-07, HU-08), campañas y
   promociones (HU-10, HU-11) y elegibilidad manual (HU-09). RN02 a RN05. */
'use strict';

function criteriosDe(id) {
  const visitas = DATOS.visitas.filter(v => v.cliente === id && v.tipo === 'Visita').length;  /* RN06 */
  const c = clientePorId(id);
  return {
    frecuencia: visitas + ' visita(s) registradas · periodo por definir',
    gasto: (c && c.nivelGasto) || 'No disponible',
    preferencias: (c && c.preferencias) || 'No disponible',
    promociones: DATOS.constancias.filter(k => k.cliente === id).length + ' constancia(s) locales'
  };
}

function renderSegmentacion() {
  const sel = document.getElementById('seg-cliente');
  const previo = sel.value;                 /* conserva la elección al repoblar el select */
  llenarSelectClientes('seg-cliente');
  sel.value = previo;
  renderSegmentacionTabla();
  const id = sel.value;
  const caja = document.getElementById('seg-criterios');
  if (!id) { caja.innerHTML = '<p class="vacio">Selecciona un cliente para consultar sus cuatro criterios.</p>'; return; }
  const cr = criteriosDe(id);
  caja.innerHTML = '<ul class="criterios"><li>Frecuencia de visitas: ' + escapeHtml(cr.frecuencia) + '</li>' +
    '<li>Nivel de gasto: ' + escapeHtml(cr.gasto) + '</li>' +
    '<li>Preferencias de juegos: ' + escapeHtml(cr.preferencias) + '</li>' +
    '<li>Historial de promociones: ' + escapeHtml(cr.promociones) + '</li></ul>';
  const c = clientePorId(id);
  document.getElementById('seg-etiqueta').value = (c && c.clasificacion) || '';
}

function renderSegmentacionTabla() {
  const filas = DATOS.clientes.map(c => {
    const cr = criteriosDe(c.identificador);
    return [
      escapeHtml(c.nombre) + '<br><span class="ayuda">' + escapeHtml(c.identificador) + '</span>',
      escapeHtml(cr.frecuencia.split(' ·')[0]),
      escapeHtml(cr.gasto),
      escapeHtml(cr.promociones),
      escapeHtml(c.clasificacion || 'Sin clasificar')
    ];
  });
  pintarTabla('tabla-segmentacion', ['Cliente', 'Visitas', 'Nivel de gasto', 'Constancias', 'Etiqueta manual'], filas, 'Sin clientes registrados.');
}

function renderMarketing() {
  const filasC = DATOS.campanas.map(cp => {
    const vinculadas = DATOS.promociones.filter(p => p.campana === cp.id).length;
    return [
      escapeHtml(cp.nombre) + (cp.demo ? ' <span class="etiqueta demo">demo</span>' : ''),
      escapeHtml(cp.objetivo || 'Por definir'),
      escapeHtml(cp.publico || 'Por definir'),
      escapeHtml(cp.periodo || 'Por definir'),
      '<button class="btn-mini" data-camped="' + escapeHtml(cp.id) + '">Editar</button> ' +
      '<button class="btn-mini" data-campdel="' + escapeHtml(cp.id) + '"' + (vinculadas ? ' disabled title="Tiene promociones vinculadas"' : '') + '>Eliminar</button>'
    ];
  });
  pintarTabla('tabla-campanas', ['Campaña', 'Objetivo', 'Público / criterios', 'Periodo', 'Acciones'], filasC, 'Sin campañas registradas.');
  const filasP = DATOS.promociones.map(p => {
    const usadas = DATOS.revisiones.filter(r => r.promocion === p.id).length;
    return [
      escapeHtml(p.nombre) + (p.demo ? ' <span class="etiqueta demo">demo</span>' : ''),
      escapeHtml(p.campana ? (DATOS.campanas.find(c => c.id === p.campana) || {}).nombre || p.campana : 'Sin campaña'),
      escapeHtml(p.criterios || 'Por confirmar'),
      '<button class="btn-mini" data-promed="' + escapeHtml(p.id) + '">Editar</button> ' +
      '<button class="btn-mini" data-promdel="' + escapeHtml(p.id) + '"' + (usadas ? ' disabled title="Tiene revisiones registradas"' : '') + '>Eliminar</button>'
    ];
  });
  pintarTabla('tabla-promociones', ['Promoción', 'Campaña', 'Criterios', 'Acciones'], filasP, 'Sin promociones registradas.');
  const selC = document.getElementById('promocion-campana');
  selC.innerHTML = '<option value="">Sin campaña vinculada</option>' + DATOS.campanas.map(c => '<option value="' + escapeHtml(c.id) + '">' + escapeHtml(c.nombre) + '</option>').join('');
  const selE = document.getElementById('eleg-promocion');
  selE.innerHTML = '<option value="">Selecciona una promoción</option>' + DATOS.promociones.map(p => '<option value="' + escapeHtml(p.id) + '">' + escapeHtml(p.nombre) + '</option>').join('');
  llenarSelectClientes('eleg-cliente');
  const filasR = DATOS.revisiones.slice().reverse().map(r => [
    escapeHtml(fechaLarga(r.fecha)),
    escapeHtml(r.cliente) + ' · ' + escapeHtml(nombreCliente(r.cliente)),
    escapeHtml(r.promocion),
    escapeHtml(r.resultado),
    r.resultado === 'Aplica' ? 'Constancia local creada' : 'Sin comunicación (RN02)'
  ]);
  pintarTabla('tabla-revisiones', ['Fecha', 'Cliente', 'Promoción', 'Resultado', 'Constancia'], filasR, 'No hay revisiones de elegibilidad registradas.');
  document.querySelectorAll('[data-camped]').forEach(b => b.addEventListener('click', () => editarCampana(b.dataset.camped)));
  document.querySelectorAll('[data-campdel]').forEach(b => b.addEventListener('click', () => eliminarCampana(b.dataset.campdel)));
  document.querySelectorAll('[data-promed]').forEach(b => b.addEventListener('click', () => editarPromocion(b.dataset.promed)));
  document.querySelectorAll('[data-promdel]').forEach(b => b.addEventListener('click', () => eliminarPromocion(b.dataset.promdel)));
}

function editarCampana(id) {
  const c = DATOS.campanas.find(x => x.id === id); if (!c) return;
  document.getElementById('campana-original').value = c.id;
  document.getElementById('campana-nombre').value = c.nombre;
  document.getElementById('campana-objetivo').value = c.objetivo || '';
  document.getElementById('campana-publico').value = c.publico || '';
  document.getElementById('campana-periodo').value = c.periodo || '';
  document.getElementById('campana-cancelar').hidden = false;
}
function eliminarCampana(id) {
  if (!confirm('Se eliminará la campaña si no tiene promociones vinculadas. ¿Continuar?')) return;
  DATOS.campanas = DATOS.campanas.filter(c => c.id !== id);
  aviso('MSJ28', 'Registro eliminado tras confirmación.');
  guardar();
}
function editarPromocion(id) {
  const p = DATOS.promociones.find(x => x.id === id); if (!p) return;
  document.getElementById('promocion-original').value = p.id;
  document.getElementById('promocion-nombre').value = p.nombre;
  document.getElementById('promocion-criterios').value = p.criterios || '';
  document.getElementById('promocion-descripcion').value = p.descripcion || '';
  document.getElementById('promocion-cancelar').hidden = false;
  renderMarketing();
  document.getElementById('promocion-campana').value = p.campana || '';
}
function eliminarPromocion(id) {
  if (!confirm('Se eliminará la promoción si no tiene revisiones registradas. ¿Continuar?')) return;
  DATOS.promociones = DATOS.promociones.filter(p => p.id !== id);
  aviso('MSJ28', 'Registro eliminado tras confirmación.');
  guardar();
}

function registrarPromociones() {
  document.getElementById('seg-cliente').addEventListener('change', renderSegmentacion);
  document.getElementById('form-etiqueta').addEventListener('submit', e => {
    e.preventDefault();
    const id = document.getElementById('seg-cliente').value;
    const c = clientePorId(id);
    if (!c) { aviso('MSJ08', 'Selecciona un cliente registrado.', true); return; }
    c.clasificacion = document.getElementById('seg-etiqueta').value.trim();   /* RN04 */
    aviso('MSJ21', 'Etiqueta manual guardada.');
    guardar();
  });

  document.getElementById('form-campana').addEventListener('submit', e => {
    e.preventDefault();
    const nombre = document.getElementById('campana-nombre').value.trim();
    if (!nombre) { aviso('MSJ32', 'Completa los campos obligatorios antes de guardar.', true); document.getElementById('campana-nombre').focus(); return; }
    const original = document.getElementById('campana-original').value;
    const datos = {
      nombre,
      objetivo: document.getElementById('campana-objetivo').value.trim(),
      publico: document.getElementById('campana-publico').value.trim(),
      periodo: document.getElementById('campana-periodo').value.trim()
    };
    if (original) {
      Object.assign(DATOS.campanas.find(c => c.id === original), datos);
      aviso('MSJ26', 'Campaña actualizada.');
    } else {
      DATOS.campanas.push(Object.assign({ id: siguienteId(DATOS.campanas, 'CAMP-'), creadoEn: hoyISO(), demo: false }, datos));
      aviso('MSJ22', 'Campaña registrada; no se marca como aprobada o publicada.');
    }
    e.target.reset(); document.getElementById('campana-original').value = '';
    document.getElementById('campana-cancelar').hidden = true;
    guardar();
  });
  document.getElementById('campana-cancelar').addEventListener('click', () => {
    document.getElementById('form-campana').reset();
    document.getElementById('campana-original').value = '';
    document.getElementById('campana-cancelar').hidden = true;
  });

  document.getElementById('form-promocion').addEventListener('submit', e => {
    e.preventDefault();
    const nombre = document.getElementById('promocion-nombre').value.trim();
    if (!nombre) { aviso('MSJ32', 'Completa los campos obligatorios antes de guardar.', true); document.getElementById('promocion-nombre').focus(); return; }
    const original = document.getElementById('promocion-original').value;
    const datos = {
      nombre,
      campana: document.getElementById('promocion-campana').value,
      criterios: document.getElementById('promocion-criterios').value.trim(),
      descripcion: document.getElementById('promocion-descripcion').value.trim()
    };
    if (original) {
      Object.assign(DATOS.promociones.find(p => p.id === original), datos);
      aviso('MSJ27', 'Promoción actualizada.');
    } else {
      DATOS.promociones.push(Object.assign({ id: siguienteId(DATOS.promociones, 'PROMO-'), creadoEn: hoyISO(), demo: false }, datos));
      aviso('MSJ23', 'Promoción registrada.');
    }
    e.target.reset(); document.getElementById('promocion-original').value = '';
    document.getElementById('promocion-cancelar').hidden = true;
    guardar();
  });
  document.getElementById('promocion-cancelar').addEventListener('click', () => {
    document.getElementById('form-promocion').reset();
    document.getElementById('promocion-original').value = '';
    document.getElementById('promocion-cancelar').hidden = true;
  });

  /* el resultado se habilita recién al elegir promoción (dependencia entre campos) */
  document.getElementById('eleg-promocion').addEventListener('change', e => {
    const sel = document.getElementById('eleg-resultado');
    sel.disabled = !e.target.value;
    sel.value = '';
    sel.innerHTML = e.target.value
      ? '<option value="">Selecciona un resultado</option><option value="Aplica">Aplica — validación manual según la regla aprobada</option><option value="No aplica">No aplica</option>'
      : '<option value="">Selecciona una promoción primero</option>';
  });
  document.getElementById('form-elegibilidad').addEventListener('submit', e => {
    e.preventDefault();
    const promocion = document.getElementById('eleg-promocion').value;
    const cliente = document.getElementById('eleg-cliente').value;
    const resultado = document.getElementById('eleg-resultado').value;
    if (!promocion || !cliente) { aviso('MSJ09', 'Selecciona una promoción, un cliente y el resultado de revisión.', true); return; }
    if (!resultado) {                              /* EXC05 */
      aviso('MSJ03', 'Selecciona el resultado de revisión manual de la promoción.', true);
      document.getElementById('eleg-resultado').focus();
      return;
    }
    const rev = { id: siguienteId(DATOS.revisiones, 'REV-'), cliente, promocion, resultado, nota: document.getElementById('eleg-nota').value.trim(), fecha: hoyISO(), creadoEn: hoyISO(), demo: false };
    DATOS.revisiones.push(rev);
    if (resultado === 'Aplica') {                   /* RN03 */
      DATOS.constancias.push({ id: siguienteId(DATOS.constancias, 'CONST-'), cliente, promocion, revision: rev.id, fecha: hoyISO(), creadoEn: hoyISO(), demo: false });
      aviso('MSJ10', 'Revisión guardada. Se creó una constancia local; no se envió un mensaje.');
    } else {                                        /* RN02 */
      aviso('MSJ11', 'Revisión guardada como «No aplica»; no se registró comunicación.');
    }
    e.target.reset();
    document.getElementById('eleg-resultado').disabled = true;
    document.getElementById('eleg-resultado').innerHTML = '<option value="">Selecciona una promoción primero</option>';
    guardar();
  });
}

registrarVista('segmentacion', renderSegmentacion);
registrarVista('marketing', renderMarketing);
document.addEventListener('DOMContentLoaded', registrarPromociones);
