/* reportes.js — módulo 4: reporte con filtros y exportación CSV (HU-12).
   El CSV exporta exactamente las filas visibles tras filtrar. */
'use strict';

let reporte = { desde: '', hasta: '', cliente: '', tipo: '' };

function filasReporte() {
  return DATOS.visitas.filter(v => {
    if (reporte.desde && v.fecha < reporte.desde) return false;
    if (reporte.hasta && v.fecha > reporte.hasta) return false;
    if (reporte.cliente && v.cliente !== reporte.cliente) return false;
    if (reporte.tipo && v.tipo !== reporte.tipo) return false;
    return true;
  });
}

function renderReportes() {
  llenarSelectClientes('rep-cliente', true);
  document.getElementById('rep-cliente').value = reporte.cliente;
  document.getElementById('rep-tipo').value = reporte.tipo;
  document.getElementById('rep-desde').value = reporte.desde;
  document.getElementById('rep-hasta').value = reporte.hasta;

  const filas = filasReporte();
  document.getElementById('rep-resumen').textContent =
    'Mostrando ' + filas.length + ' de ' + DATOS.visitas.length + ' atenciones.';

  pintarTabla('tabla-reporte', ['Fecha', 'Cliente', 'Nombre', 'Tipo', 'Nota', 'Incidencia'],
    filas.slice().reverse().map(v => [
      escapeHtml(fechaLarga(v.fecha)), escapeHtml(v.cliente), escapeHtml(nombreCliente(v.cliente)),
      escapeHtml(v.tipo), escapeHtml(v.nota || '—'), v.incidencia ? 'Sí' : 'No'
    ]), 'Ninguna atención coincide con los filtros.');

  const cons = DATOS.constancias.filter(k =>
    (!reporte.cliente || k.cliente === reporte.cliente));
  pintarTabla('tabla-constancias', ['Constancia', 'Fecha', 'Cliente', 'Promoción'],
    cons.slice().reverse().map(k => [
      escapeHtml(k.id), escapeHtml(fechaLarga(k.fecha)),
      escapeHtml(k.cliente) + ' · ' + escapeHtml(nombreCliente(k.cliente)), escapeHtml(k.promocion)
    ]), 'No hay constancias locales para este filtro.');
}

function exportarCSV() {
  try {
    const encabezado = ['Fecha', 'Cliente', 'Nombre', 'Tipo', 'Nota', 'Incidencia'];
    const lineas = filasReporte().map(v => [
      v.fecha, v.cliente, nombreCliente(v.cliente), v.tipo, v.nota || '', v.incidencia ? 'Si' : 'No'
    ]);
    const csv = [encabezado].concat(lineas)
      .map(fila => fila.map(c => '"' + String(c == null ? '' : c).replace(/"/g, '""') + '"').join(','))
      .join('\r\n');
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'reporte_atlantic_city.csv';
    a.click();
    URL.revokeObjectURL(a.href);
    aviso('MSJ25', 'Reporte CSV descargado.');
  } catch (err) {
    aviso('MSJ25', 'Reporte CSV descargado.', true);   /* EXC07 */
  }
}

function registrarReportes() {
  ['rep-desde', 'rep-hasta', 'rep-cliente', 'rep-tipo'].forEach(id => {
    const el = document.getElementById(id);
    el.addEventListener('change', () => { reporte[id.slice(4)] = el.value; renderReportes(); });
  });
  document.getElementById('rep-aplicar').addEventListener('click', () => {
    ['desde', 'hasta', 'cliente', 'tipo'].forEach(k => { reporte[k] = document.getElementById('rep-' + k).value; });
    renderReportes();
  });
  document.getElementById('rep-csv').addEventListener('click', exportarCSV);
}

registrarVista('reportes', renderReportes);
document.addEventListener('DOMContentLoaded', registrarReportes);
