/* clientes.js — módulo 1: perfiles de cliente (HU-01 a HU-04).
   CRUD de perfiles con identificador único (RN07) y ficha con historial. */
'use strict';

let filtroClientes = { texto: '', clase: '' };

function renderClientes() {
  llenarSelectClientes('visita-cliente');
  llenarSelectClientes('seg-cliente');
  llenarSelectClientes('eleg-cliente');
  llenarSelectClientes('rep-cliente', true);
  const selFiltro = document.getElementById('cliente-filtro-clase');
  const clases = [...new Set(DATOS.clientes.map(c => c.clasificacion).filter(Boolean))];
  selFiltro.innerHTML = '<option value="">Todas las clasificaciones</option>' +
    clases.map(c => '<option>' + escapeHtml(c) + '</option>').join('');
  selFiltro.value = filtroClientes.clase;

  const filas = DATOS.clientes.filter(c => {
    const t = filtroClientes.texto.toLowerCase();
    const okTexto = !t || c.identificador.toLowerCase().includes(t) || c.nombre.toLowerCase().includes(t);
    const okClase = !filtroClientes.clase || c.clasificacion === filtroClientes.clase;
    return okTexto && okClase;
  }).map(c => [
    escapeHtml(c.identificador) + (c.demo ? ' <span class="etiqueta demo">demo</span>' : ''),
    escapeHtml(c.nombre),
    escapeHtml(c.nivelGasto || 'Por definir'),
    escapeHtml(c.clasificacion || 'Sin clasificar'),
    '<button class="btn-mini" data-ver="' + escapeHtml(c.identificador) + '">Ver ficha</button> ' +
    '<button class="btn-mini" data-editar="' + escapeHtml(c.identificador) + '">Editar</button>'
  ]);
  pintarTabla('tabla-clientes', ['Identificador', 'Cliente', 'Nivel de gasto', 'Clasificación', 'Acciones'], filas,
    'No hay clientes que coincidan con el filtro.');
  document.querySelectorAll('#tabla-clientes [data-ver]').forEach(b => b.addEventListener('click', () => verFicha(b.dataset.ver)));
  document.querySelectorAll('#tabla-clientes [data-editar]').forEach(b => b.addEventListener('click', () => editarCliente(b.dataset.editar)));
  renderSegmentacionTabla();
}

function editarCliente(id) {
  const c = clientePorId(id);
  if (!c) return;
  document.getElementById('cliente-original').value = c.identificador;
  document.getElementById('cliente-id').value = c.identificador;
  document.getElementById('cliente-nombre').value = c.nombre;
  document.getElementById('cliente-gasto').value = c.nivelGasto || '';
  document.getElementById('cliente-pref').value = c.preferencias || '';
  document.getElementById('cliente-form-titulo').textContent = 'Actualizar datos del cliente';
  document.getElementById('cliente-id').focus();
}

function registrarClientes() {
  document.getElementById('cliente-buscar').addEventListener('input', e => { filtroClientes.texto = e.target.value; renderClientes(); });
  document.getElementById('cliente-filtro-clase').addEventListener('change', e => { filtroClientes.clase = e.target.value; renderClientes(); });
  document.getElementById('cliente-cancelar').addEventListener('click', () => {
    document.getElementById('form-cliente').reset();
    document.getElementById('cliente-original').value = '';
    document.getElementById('cliente-form-titulo').textContent = 'Registrar cliente';
  });
  document.getElementById('ficha-cerrar').addEventListener('click', () => { document.getElementById('ficha-cliente').hidden = true; });

  document.getElementById('form-cliente').addEventListener('submit', e => {
    e.preventDefault();
    const id = document.getElementById('cliente-id').value.trim();
    const nombre = document.getElementById('cliente-nombre').value.trim();
    if (!id || !nombre) {                       /* EXC01 */
      aviso('MSJ01', 'Completa el identificador y el nombre del cliente.', true);
      (!id ? document.getElementById('cliente-id') : document.getElementById('cliente-nombre')).focus();
      return;
    }
    const original = document.getElementById('cliente-original').value;
    const duplicado = DATOS.clientes.some(c => c.identificador === id && c.identificador !== original);
    if (duplicado) {                             /* EXC02 / RN07 */
      aviso('MSJ07', 'Ese identificador ya está registrado.', true);
      document.getElementById('cliente-id').focus();
      return;
    }
    const datos = {
      nivelGasto: document.getElementById('cliente-gasto').value,
      preferencias: document.getElementById('cliente-pref').value.trim(),
    };
    if (original) {
      const c = clientePorId(original);
      Object.assign(c, { identificador: id, nombre }, datos);
      aviso('MSJ18', 'Perfil actualizado.');
    } else {
      DATOS.clientes.push(Object.assign({ identificador: id, nombre, clasificacion: '', creadoEn: hoyISO(), demo: false }, datos));
      aviso('MSJ17', 'Cliente registrado.');
    }
    document.getElementById('form-cliente').reset();
    document.getElementById('cliente-original').value = '';
    document.getElementById('cliente-form-titulo').textContent = 'Registrar cliente';
    guardar();
  });
}

function verFicha(id) {
  const c = clientePorId(id);
  if (!c) return;
  const visitas = DATOS.visitas.filter(v => v.cliente === id);
  const inc = DATOS.incidencias.filter(v => v.cliente === id);
  const cons = DATOS.constancias.filter(v => v.cliente === id);
  const rev = DATOS.revisiones.filter(v => v.cliente === id);
  const caja = document.getElementById('ficha-cliente-cuerpo');
  caja.innerHTML =
    '<p><strong>' + escapeHtml(c.identificador) + ' · ' + escapeHtml(c.nombre) + '</strong> ' +
    (c.demo ? '<span class="etiqueta demo">demo</span>' : '') + '<br>' +
    '<span class="ayuda">Nivel de gasto: ' + escapeHtml(c.nivelGasto || 'Por definir') +
    ' · Preferencias: ' + escapeHtml(c.preferencias || 'Por definir') +
    ' · Clasificación: ' + escapeHtml(c.clasificacion || 'Sin clasificar') +
    ' · Registro: ' + escapeHtml(fechaLarga(c.creadoEn)) + '</span></p>' +
    '<h2>Visitas e interacciones (' + visitas.length + ')</h2>' +
    (visitas.length ? '<ul class="lista-actividad">' + visitas.map(v => '<li>' + escapeHtml(fechaLarga(v.fecha)) + ' — ' + escapeHtml(v.tipo) + (v.nota ? ': ' + escapeHtml(v.nota) : '') + '</li>').join('') + '</ul>' : '<p class="vacio">Sin atenciones registradas.</p>') +
    '<h2>Incidencias (' + inc.length + ')</h2>' +
    (inc.length ? '<ul class="lista-actividad">' + inc.map(v => '<li>' + escapeHtml(v.id) + ': ' + escapeHtml(v.descripcion) + '</li>').join('') + '</ul>' : '<p class="vacio">Sin incidencias.</p>') +
    '<h2>Revisiones y constancias (' + rev.length + ' / ' + cons.length + ')</h2>' +
    (rev.length ? '<ul class="lista-actividad">' + rev.map(v => '<li>' + escapeHtml(v.resultado) + ' — ' + escapeHtml(v.promocion) + ' (' + escapeHtml(fechaLarga(v.fecha)) + ')</li>').join('') + '</ul>' : '<p class="vacio">Sin revisiones de elegibilidad.</p>');
  document.getElementById('ficha-cliente').hidden = false;
  document.getElementById('ficha-cliente').scrollIntoView({ behavior: 'smooth' });
}

registrarVista('clientes', renderClientes);
document.addEventListener('DOMContentLoaded', registrarClientes);
