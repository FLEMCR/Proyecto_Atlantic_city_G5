/* principal.js — capa de almacenamiento, navegación, dashboard y utilidades.
   Persistencia: localStorage con una clave jerárquica por módulo (opción 2 de LocalStorage II).
   No se usa fetch() sobre archivos locales: la semilla demo vive en el código y el
   archivo datos/datos_iniciales.json es la copia de referencia. */
'use strict';

const CLAVE_ALMACEN = 'atlantic_city_app_v1';
const CLAVES_ANTERIORES = ['atlanticCityMvp_v3', 'atlanticCitySimpleMvp_v1'];

/* ---------- semilla de demostración (RN08: todo registro de ejemplo va marcado) ---------- */
function datosIniciales() {
  const hoy = '2026-09-28';
  return {
    clientes: [
      { identificador: 'AC-001', nombre: 'Cliente de prueba 01', nivelGasto: 'Medio', preferencias: 'Preferencia de prueba A', clasificacion: '', creadoEn: hoy, demo: true },
      { identificador: 'AC-002', nombre: 'Cliente de prueba 02', nivelGasto: 'Medio', preferencias: 'Preferencia de prueba B', clasificacion: '', creadoEn: hoy, demo: true },
      { identificador: 'AC-003', nombre: 'Cliente de prueba 03', nivelGasto: '', preferencias: 'Por definir', clasificacion: '', creadoEn: hoy, demo: true }
    ],
    visitas: [
      { id: 'ATT-0001', cliente: 'AC-001', tipo: 'Visita', fecha: hoy, nota: 'Registro de ejemplo', creadoEn: hoy, demo: true },
      { id: 'ATT-0002', cliente: 'AC-002', tipo: 'Interacción', fecha: hoy, nota: 'Registro de ejemplo', creadoEn: hoy, demo: true }
    ],
    incidencias: [],
    campanas: [
      { id: 'CAMP-0001', nombre: 'Campaña de prueba', objetivo: 'Por definir', publico: 'Criterios por confirmar', periodo: 'Por definir', creadoEn: hoy, demo: true }
    ],
    promociones: [
      { id: 'PROMO-0001', nombre: 'Promoción de prueba', campana: 'CAMP-0001', criterios: 'Criterios por confirmar', descripcion: 'Registro de ejemplo', creadoEn: hoy, demo: true }
    ],
    revisiones: [],
    constancias: []
  };
}

/* ---------- almacenamiento ---------- */
const Almacen = {
  leer() {
    try { return JSON.parse(localStorage.getItem(CLAVE_ALMACEN)); } catch (e) { return null; }
  },
  escribir(datos) {
    try { localStorage.setItem(CLAVE_ALMACEN, JSON.stringify(datos)); return true; }
    catch (e) { aviso('MSJ06', 'No se pudo guardar en este navegador.'); return false; }
  },
  /* Migra desde las claves del prototipo y del MVP si la clave final aún no existe. */
  cargar() {
    let datos = this.leer();
    if (datos && datos.clientes) return datos;
    for (const clave of CLAVES_ANTERIORES) {
      try {
        const viejo = JSON.parse(localStorage.getItem(clave));
        if (viejo) {
          const base = datosIniciales();
          datos = {
            clientes: viejo.clientes || viejo.perfiles || base.clientes,
            visitas: viejo.visitas || [],
            incidencias: viejo.incidencias || [],
            campanas: viejo.campanas || [],
            promociones: viejo.promociones || [],
            revisiones: viejo.revisiones || [],
            constancias: viejo.constancias || []
          };
          this.escribir(datos);
          return datos;
        }
      } catch (e) { /* clave ilegible: se intenta la siguiente */ }
    }
    datos = datosIniciales();
    this.escribir(datos);
    return datos;
  }
};

let DATOS = Almacen.cargar();
function guardar() {
  if (Almacen.escribir(DATOS)) refrescoGlobal();
}

/* ---------- utilidades ---------- */
function siguienteId(lista, prefijo) {
  const n = lista.reduce((m, r) => {
    const k = parseInt(String(r.id).replace(/\D/g, ''), 10);
    return isNaN(k) ? m : Math.max(m, k);
  }, 0) + 1;
  return prefijo + String(n).padStart(4, '0');
}
function hoyISO() { return new Date().toISOString().slice(0, 10); }
function fechaLarga(iso) {
  if (!iso) return '—';
  const f = new Date(iso + 'T12:00:00');
  return f.toLocaleDateString('es-PE', { day: 'numeric', month: 'short', year: 'numeric' });
}
function escapeHtml(t) {
  return String(t == null ? '' : t).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function clientePorId(id) { return DATOS.clientes.find(c => c.identificador === id); }
function nombreCliente(id) { const c = clientePorId(id); return c ? c.nombre : id; }

/* ---------- avisos con los mensajes literales del catálogo MSJ ---------- */
function aviso(codigo, texto, esError) {
  const caja = document.getElementById('avisos');
  const div = document.createElement('div');
  div.className = 'aviso' + (esError ? ' error' : '');
  div.innerHTML = '<code>' + escapeHtml(codigo) + '</code>' + escapeHtml(texto);
  caja.appendChild(div);
  setTimeout(() => div.remove(), 5200);
}

/* ---------- tablas genéricas ---------- */
function pintarTabla(tabla, columnas, filas, vacio) {
  const el = typeof tabla === 'string' ? document.getElementById(tabla) : tabla;
  if (!el) return;
  if (!filas.length) {
    el.innerHTML = '<tbody><tr><td class="vacio">' + escapeHtml(vacio || 'No hay registros.') + '</td></tr></tbody>';
    return;
  }
  let html = '<thead><tr>' + columnas.map(c => '<th>' + escapeHtml(c) + '</th>').join('') + '</tr></thead><tbody>';
  for (const f of filas) html += '<tr>' + f.map(c => '<td>' + c + '</td>').join('') + '</tr>';
  el.innerHTML = html + '</tbody>';
}

/* ---------- navegación ---------- */
const VISTAS = {};
function registrarVista(nombre, fn) { VISTAS[nombre] = fn; }
const TITULOS = {
  inicio: 'Inicio', clientes: 'Clientes', visitas: 'Visitas e interacciones',
  incidencias: 'Incidencias', segmentacion: 'Segmentación',
  marketing: 'Promociones y campañas', reportes: 'Reportes'
};
function mostrar(vista) {
  document.querySelectorAll('.vista').forEach(s => s.classList.remove('visible'));
  const sec = document.getElementById('vista-' + vista);
  if (sec) sec.classList.add('visible');
  document.querySelectorAll('.menu nav button').forEach(b => b.classList.toggle('activo', b.dataset.vista === vista));
  document.getElementById('titulo-vista').textContent = TITULOS[vista] || vista;
  if (VISTAS[vista]) VISTAS[vista]();
  if (location.hash.slice(1) !== vista) history.replaceState(null, '', '#' + vista);
}
function refrescoGlobal() {
  renderInicio();
  const activa = document.querySelector('.menu nav button.activo');
  const v = activa ? activa.dataset.vista : 'inicio';
  if (VISTAS[v] && v !== 'inicio') VISTAS[v]();
}

/* ---------- dashboard ---------- */
function renderInicio() {
  const visitas = DATOS.visitas.filter(v => v.tipo === 'Visita').length;
  const inter = DATOS.visitas.length - visitas;
  const tarjetas = [
    ['Perfiles', DATOS.clientes.length], ['Visitas', visitas], ['Interacciones', inter],
    ['Incidencias', DATOS.incidencias.length], ['Constancias locales', DATOS.constancias.length],
    ['Promociones', DATOS.promociones.length]
  ];
  document.getElementById('tablero-tarjetas').innerHTML = tarjetas.map(t =>
    '<div class="tarjeta"><strong>' + t[1] + '</strong><span>' + t[0] + '</span></div>').join('');
  const rec = DATOS.visitas.slice().sort((a, b) => (a.fecha < b.fecha ? 1 : -1)).slice(0, 5);
  document.getElementById('tablero-actividad').innerHTML = rec.length
    ? '<ul class="lista-actividad">' + rec.map(v =>
        '<li><strong>' + escapeHtml(v.id) + ' · ' + escapeHtml(nombreCliente(v.cliente)) + '</strong> — ' +
        escapeHtml(v.tipo) + ' · ' + escapeHtml(fechaLarga(v.fecha)) + (v.nota ? ' · ' + escapeHtml(v.nota) : '') + '</li>').join('') + '</ul>'
    : '<p class="vacio">Sin actividad registrada todavía.</p>';
  document.getElementById('tablero-marketing').innerHTML =
    '<p class="ayuda">' + DATOS.campanas.length + ' campaña(s) y ' + DATOS.promociones.length +
    ' promoción(es) registradas. Una campaña es la planificación; la promoción es la oferta concreta (RN05). ' +
    'La elegibilidad se ingresa a mano en la vista Promociones y campañas.</p>';
}

/* ---------- respaldo JSON (patrón de LocalStorage II) y limpieza demo ---------- */
function exportarRespaldo() {
  const blob = new Blob([JSON.stringify(DATOS, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'atlantic_city_respaldo.json';
  a.click();
  URL.revokeObjectURL(a.href);
  aviso('MSJ29', 'Respaldo exportado o importado correctamente.');
}
function importarRespaldo(archivo) {
  const lector = new FileReader();
  lector.onload = e => {
    try {
      const datos = JSON.parse(e.target.result);
      if (!Array.isArray(datos.clientes) || !Array.isArray(datos.visitas)) throw new Error('formato');
      DATOS = {
        clientes: datos.clientes, visitas: datos.visitas, incidencias: datos.incidencias || [],
        campanas: datos.campanas || [], promociones: datos.promociones || [],
        revisiones: datos.revisiones || [], constancias: datos.constancias || []
      };
      guardar();
      aviso('MSJ29', 'Respaldo exportado o importado correctamente.');
    } catch (err) {
      aviso('MSJ30', 'El archivo no es un respaldo válido; no se modificaron los datos.', true);
    }
  };
  lector.readAsText(archivo);
}
function restablecerDemo() {
  if (!confirm('Se reemplazarán todos los registros de este navegador por los datos de demostración. ¿Continuar?')) return;
  DATOS = datosIniciales();
  guardar();
  aviso('MSJ31', 'Datos de demostración restablecidos.');
}

/* ---------- selects de clientes reutilizables ---------- */
function llenarSelectClientes(select, conVacio) {
  const el = typeof select === 'string' ? document.getElementById(select) : select;
  if (!el) return;
  const primero = conVacio === false ? '' : '<option value="">Selecciona un cliente</option>';
  el.innerHTML = primero + DATOS.clientes.map(c =>
    '<option value="' + escapeHtml(c.identificador) + '">' + escapeHtml(c.identificador) + ' · ' + escapeHtml(c.nombre) + '</option>').join('');
}

/* ---------- arranque ---------- */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('fecha-hoy').textContent = fechaLarga(hoyISO());
  document.querySelectorAll('.menu nav button').forEach(b => b.addEventListener('click', () => mostrar(b.dataset.vista)));
  document.getElementById('resp-exportar').addEventListener('click', exportarRespaldo);
  document.getElementById('resp-importar-btn').addEventListener('click', () => document.getElementById('resp-importar').click());
  document.getElementById('resp-importar').addEventListener('change', e => { if (e.target.files[0]) importarRespaldo(e.target.files[0]); e.target.value = ''; });
  document.getElementById('resp-limpiar').addEventListener('click', restablecerDemo);
  const inicial = location.hash.slice(1);
  mostrar(TITULOS[inicial] ? inicial : 'inicio');
});
