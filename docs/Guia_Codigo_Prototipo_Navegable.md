# Guía de código del prototipo con navegación — Atlantic City

Explica cómo funciona el prototipo de siete vistas (`../prototipado/prototipo_navegable/index.html`, `../prototipado/prototipo_navegable/styles.css`, `../prototipado/prototipo_navegable/app.js` y la copia en archivo único): en qué se basa, qué hace cada función, cómo se usa dentro del proyecto y qué patrones se pueden reutilizar en otros proyectos.

## 1. En qué se basa este código

| Fuente | Qué aporta al código |
|---|---|
| Punto 10 de la estructura de entrega (prototipo con navegación) | El objetivo central: conectar las pantallas del wireframe para demostrar que se entiende la navegación entre interfaces. |
| Wireframes de `../prototipado/wireframe_manual.png` y `../prototipado/wireframe_digital.png` | La organización de las secciones: cabecera, menú lateral, indicadores, tablas y zonas de marketing. |
| Patrones probados en el MVP (`../prototipado/MVP/`) | Escapado de texto, selects que conservan su selección, estados vacíos, toast, validaciones con mensaje y foco. |
| Reglas acordadas con el Product Owner | Campaña distinta de promoción; visita conservada sin incidencia; clasificación y elegibilidad manuales; constancias locales; datos de demostración. |

La diferencia de fondo con el MVP: aquí el protagonista no es un recorrido mínimo sino el **cambio de vista sin recargar la página** y la coherencia entre siete pantallas que comparten un mismo estado.

## 2. Archivos y responsabilidad

| Archivo | Responsabilidad |
|---|---|
| `../prototipado/prototipo_navegable/index.html` | Barra lateral, cabecera, siete `section.view`, formularios por vista y tablas vacías que JavaScript rellena. |
| `../prototipado/prototipo_navegable/styles.css` | Layout de aplicación: sidebar fijo, área de contenido, chips de estado, tablas y tres puntos de quiebre. |
| `../prototipado/prototipo_navegable/app.js` | Estado compartido, navegación, render por vista, formularios, búsqueda global y exportación CSV. |
| `../prototipado/prototipo_navegable/Atlantic_City_Prototipo_Navegable_Archivo_unico.html` | El mismo prototipo con CSS y JS incrustados, para abrir con doble clic o adjuntar sin servidor. Cualquier cambio en los archivos separados debe reflejarse aquí. |

## 3. index.html por zonas

1. **`aside#sidebar`**: marca y `nav` con siete botones `.nav-link` que llevan `data-view="home|clients|visits|incidents|segments|promotions|reports"`. El atributo `data-view` es el contrato entre HTML y JavaScript: el botón no sabe qué hacer, solo dice a qué vista pertenece.
2. **`header`**: `#menu-toggle` para abrir el sidebar en móvil, buscador global `#global-search`, etiqueta «Datos de demostración», `#today-label` y la placa de usuario del panel.
3. **Siete `section.view`**, una por pantalla, con `id="view-<nombre>"` y la clase `active` solo en Inicio:
   - `#view-home`: cuatro `#stat-*`, tabla `#home-client-rows`, actividad `#home-activity` y marketing `#home-promotions`, más botones `data-go` de acceso directo.
   - `#view-clients`: `#client-search`, `#client-segment-filter`, panel de formulario oculto `#client-form-panel` con `#client-form` (incluye el campo invisible `#client-edit-key` que distingue alta de edición), tabla `#client-rows` y contador `#client-count-label`.
   - `#view-visits`: `#visit-form`, `#visit-search` y tabla `#visit-rows`.
   - `#view-incidents`: `#incident-form` y tabla `#incident-rows` con botones `data-followup`.
   - `#view-segments`: `#segment-client`, panel `#segment-criteria` de cuatro criterios, `#segment-form` con `#segment-label` y tabla `#segment-rows`.
   - `#view-promotions`: `#campaign-form`, `#promotion-form` (con `#promotion-campaign` para vincular), `#eligibility-form` y las tres tablas `#campaign-rows`, `#promotion-rows`, `#eligibility-rows`.
   - `#view-reports`: conteos `#report-*`, barras `#report-segments`, actividad `#report-activity`, tabla `#report-marketing-types` y botón `#export-report`.
4. **`#toast`** y `<script src="app.js">` al final.

Los botones de acción dentro de tablas (`data-edit-client`, `data-followup`) y los accesos directos (`data-go`) no tienen `onclick` inline: el JavaScript los captura por delegación de eventos, lo que permite regenerar las filas sin volver a enchufar listeners.

## 4. styles.css por bloques

1. **Variables y base**: paleta corporativa sobria, tipografías del sistema, `body` en `display:flex` con `height:100vh` y `overflow:hidden` para que el scroll viva dentro del contenido y no en la página.
2. **Sidebar**: ancho fijo por variable, fondo oscuro, `.nav-links li` con borde izquierdo que se ilumina en `.active` y en hover.
3. **Cabecera y contenido**: `header` blanco de 60 px, `.content` con scroll propio, `.page-header` con título y subtítulo.
4. **Tarjetas y tablas**: `.cards-grid` de cuatro columnas, `.panel`, `.table-wrap` con scroll, `thead` fijo, `.cell-primary`, `.cell-muted`, `.chip` con variantes de color y texto (nunca color solo).
5. **Formularios**: `.form-grid`, `.full-field`, `.search-field` con lupa dibujada en CSS (`.search-glass`), botones `.button` y `.table-action`.
6. **Actividad y barras**: `.activity-item`, `.bar-row` con `.bar-fill` cuya anchura pone JavaScript en porcentaje.
7. **Tres `@media`**: a 1150 px las tarjetas pasan a dos columnas; a 760 px el sidebar se vuelve lateral oculto que abre `#menu-toggle` con la clase `.open`; a 430 px todo se apila y las tablas scrollan horizontalmente.

## 5. app.js por bloques

IIFE con `'use strict'`, igual que el MVP.

### 5.1 Utilidades y estado (líneas 1 a 87)

- `STORE_KEY = 'atlanticCityMvp_v3'` y `LEGACY_KEY = 'atlanticCityMvp_v2'`: la clave actual y la anterior.
- `sampleData()`: tres perfiles, dos actividades, una campaña y una promoción de demostración; incidencias, revisiones y constancias vacías.
- `normalizeState(parsed)`: además de asegurar arreglos, **migra datos de la versión anterior**: en `v2` la campaña era un texto libre dentro de la promoción; si no hay campañas pero hay promociones con ese texto, se crean campañas reales con id propio y se reescribe `campaignId`. Es un ejemplo de migración de esquema en almacenamiento local.
- `loadState()` prueba primero la clave actual y luego la heredada; `save()` con `try/catch` y toast de error.
- `toast(message)` con temporizador único.
- Consultas derivadas: `clientByCode`, `clientName`, `activityCountFor`, `visitsFor` (solo tipo Visita), `communicationsFor`, `classification` (etiqueta manual o «Sin clasificar»), `promotionName`, `campaignName`.

### 5.2 Navegación (líneas 89 a 95)

```js
function showView(name) {
  $$('.view').forEach((view) => view.classList.toggle('active', view.id === `view-${name}`));
  $$('.nav-link').forEach((button) => button.classList.toggle('active', button.dataset.view === name));
  $('#sidebar').classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderAll();
}
```

Cuatro líneas que resumen el punto 10 de la estructura: ocultar todas las vistas, mostrar la pedida, marcar el botón activo, cerrar el menú móvil y repintar. No hay recarga, no hay router externo.

### 5.3 Render por vista (líneas 96 a 224)

- `emptyRow(cols, text)`: fila única con `colspan` y estado vacío escapado.
- `fillClientSelect / fillPromotionSelect / fillCampaignSelect`: reconstruyen selects conservando la selección previa si el elemento sigue existiendo.
- `recentActivity(limit)`: mezcla visitas, incidencias, revisiones «no aplica» y constancias en una sola línea de tiempo ordenada por fecha. Cada tipo lleva su icono de texto.
- `activityMarkup(items)` y `marketingRecords(limit)`: presentación de esa línea de tiempo y de campañas/promociones recientes.
- `renderHome()`: conteos, cinco clientes recientes con su actividad y clasificación, línea de tiempo (añadiendo una nota «Sin incidencias registradas» si no hay) y tarjetas de marketing.
- `renderClientTable()`: lectura de `#client-search` y `#client-segment-filter`, reconstrucción del filtro con las etiquetas existentes, filtrado combinado de texto y clasificación, contador «X de Y perfiles» y filas con botón `data-edit-client`.
- `renderVisits()`: rellena el select de cliente, filtra por búsqueda sobre nombre, nota y tipo, y pinta la tabla ordenada por fecha.
- `renderIncidents()`: tabla con cliente vinculado o «Sin perfil vinculado», descripción, seguimiento y botón `data-followup`.
- `renderSegments()` y `updateSegmentPreview(code)`: tabla de los cuatro criterios por perfil y, al elegir un cliente, panel con los valores concretos y su etiqueta manual precargada en `#segment-label`.
- `renderMarketing()`: selects de vinculación y tres tablas; en la de revisiones se busca si existe una constancia con `eligibilityId` igual al id de la revisión para pintar «Constancia local» o «Sin comunicación».
- `renderReports()`: conteos, agrupación por clasificación con `Map`, barras proporcionales (`width` en porcentaje con mínimo 7 % para que ninguna desaparezca), línea de tiempo y tabla de tipos de registro con su observación.
- `renderAll()`: llama a los siete renders. Es caro pero simple y correcto para un prototipo de datos pequeños; si el volumen creciera, el siguiente paso sería repintar solo la vista activa.

### 5.4 Formularios y acciones (líneas 225 a 332)

- `openClientForm(client)` / `closeClientForm()`: muestran u ocultan el panel de perfil; en modo edición fijan `#client-edit-key`, marcan el código como `readOnly` y cambian títulos y botón. El mismo formulario sirve para alta y actualización.
- Delegación global de clics: `[data-go]` navega, `[data-edit-client]` abre edición y `[data-followup]` pide una nota con `window.prompt`, la guarda recortada y repinta. El prompt avisa que no se cambia un estado predefinido: el prototipo no inventa estados de incidencia.
- `#menu-toggle` abre o cierra el sidebar; `#global-search` salta a Clientes y rellena su búsqueda al escribir, y la limpia si se borra el texto estando en esa vista.
- Submit de `#client-form`: normaliza código y nombre, detecta colisión de identificador (comparando en minúsculas y excluyendo el código en edición), avisa con toast y foco, y guarda alta o `Object.assign` de actualización.
- Submit de `#visit-form`: exige un cliente registrado (`Selecciona un cliente registrado.`) y agrega la actividad con fecha de hoy por defecto.
- Submit de `#incident-form`: agrega la incidencia con o sin perfil vinculado; el select lo permite porque el caso real puede llegar sin perfil identificado.
- Segmentación: `change` del select actualiza la vista previa; submit guarda la etiqueta manual recortada.
- Campañas y promociones: submits independientes que registran cada entidad con sus campos; el toast de campaña recuerda que no se marca como aprobada ni publicada.
- Elegibilidad: valida promoción, cliente y resultado dentro de `['aplica','no-aplica']`; crea la revisión y, solo con «aplica», la constancia con `eligibilityId` y `localRecord: true`; los mensajes distinguen ambos resultados y niegan el envío de mensajes.
- `#export-report` → `exportCSV()`; fecha de cabecera y `renderAll()` de arranque.

### 5.5 Exportación CSV (líneas 235 a 247)

1. Construye una matriz de filas: encabezado y una fila por cliente, visita, incidencia, campaña, promoción, revisión y constancia, con un campo «dato adicional» que resume los detalles.
2. Escapa comillas duplicándolas y envuelve cada celda entre comillas; separador `,` y fin de línea `\r\n`.
3. Añade el BOM `\ufeff` para que Excel abra los acentos correctamente.
4. Crea un `Blob`, un `URL.createObjectURL`, un enlace temporal con `download="reporte_atlantic_city.csv"`, lo pulsa, lo retira y libera la URL con `revokeObjectURL`.
5. Toast de confirmación. Es una descarga desde el navegador: no hay servidor ni archivo en disco del proyecto.

## 6. Reglas de negocio dentro del código

| Regla | Dónde vive | Efecto visible |
|---|---|---|
| Campaña ≠ promoción | Colecciones y formularios separados, vínculo opcional `campaignId` | Se puede registrar una promoción sin campaña y vincularla después |
| La visita se conserva sin incidencia ni promoción | `#visit-form` no consulta incidencias ni promociones | Registrar actividad nunca pide datos de marketing |
| Incidencia opcional y sin perfil posible | `#incident-client` con opción vacía | Una incidencia puede quedar «Sin perfil vinculado» |
| Clasificación manual | `#segment-label` se guarda tal cual; no hay fórmula | La tabla de segmentación muestra la etiqueta escrita |
| Elegibilidad manual | El resultado viene de un select; el código solo lo valida | Ningún cálculo automático de segmentos o elegibilidad |
| «Aplica» crea constancia local; «No aplica» no | `if (result === 'aplica')` dentro del submit de elegibilidad | La tabla de revisiones muestra «Constancia local» o «Sin comunicación» |
| Registros de demostración | `sampleData()` y etiquetas de la interfaz | Todo dato inicial es ficticio y está declarado |

## 7. Validaciones y mensajes

| Caso | Mecanismo | Mensaje |
|---|---|---|
| Campos obligatorios de cada formulario | `required` del HTML | Mensaje nativo del navegador |
| Identificador duplicado al registrar o editar | Comparación en minúsculas excluyendo el código en edición | «Ese identificador ya está registrado.» con foco en el campo |
| Actividad sin cliente | Comprobación previa al push | «Selecciona un cliente registrado.» |
| Revisión de elegibilidad incompleta | Comprobación de promoción, cliente y resultado | «Selecciona una promoción, un cliente y el resultado de revisión.» |
| Longitudes | `maxlength` por campo | Límite de captura del navegador |
| Nota de seguimiento | `window.prompt` con valor previo; `null` cancela sin tocar nada | «Nota de seguimiento guardada.» solo si se confirma |
| Texto peligroso | `escapeHtml` en todo `innerHTML` | Se muestra como texto plano |

## 8. Cómo se usa en el proyecto

1. **Ejecución**: desde esta carpeta, `python -m http.server 4174` y abrir `http://localhost:4174`. El archivo único también abre con doble clic.
2. **Demostración del punto 10**: recorrer el menú completo mostrando que no hay recarga, usar los accesos directos del Inicio, el buscador global y el filtro por clasificación, y cerrar con la exportación CSV.
3. **Pruebas manuales**: las siete vistas con datos y vacías (limpiar el sitio), alta y edición de perfil con identificador duplicado, visita sin incidencia, incidencia sin perfil, revisión «No aplica» y «Aplica», y ventana de 760 px y 430 px.
4. **Sustentación**: explicar `showView`, la delegación de eventos con `data-*`, por qué los selects conservan su selección y qué hace la migración `v2 → v3`.
5. **Relación con el backlog**: demuestra HU-01 a HU-12 en su versión manual y local; HU-13 sigue fuera por decisión de priorización.

## 9. Cómo reutilizar estos patrones en otros proyectos

### 9.1 Navegación por vistas sin recarga

```html
<nav><button data-view="inicio">Inicio</button><button data-view="reportes">Reportes</button></nav>
<section class="view active" id="view-inicio">…</section>
<section class="view" id="view-reportes">…</section>
```

```js
document.querySelectorAll('[data-view]').forEach((boton) => {
  boton.addEventListener('click', () => {
    const nombre = boton.dataset.view;
    document.querySelectorAll('.view').forEach((v) => v.classList.toggle('active', v.id === `view-${nombre}`));
    document.querySelectorAll('[data-view]').forEach((b) => b.classList.toggle('active', b === boton));
  });
});
```

Con CSS `.view { display:none } .view.active { display:block }` se tiene un menú de aplicación completo sin framework.

### 9.2 Delegación de eventos para filas regeneradas

```js
document.addEventListener('click', (event) => {
  const editar = event.target.closest('[data-editar]');
  if (editar) { abrirFormulario(editar.dataset.editar); }
});
```

Imprescindible cuando el `innerHTML` de una tabla se reconstruye en cada render: los listeners viven en el contenedor, no en cada fila.

### 9.3 Select que conserva su selección al repintar

```js
function llenarSelect(select, items, placeholder) {
  const previo = select.value;
  select.innerHTML = `<option value="">${placeholder}</option>` +
    items.map((i) => `<option value="${i.id}">${i.nombre}</option>`).join('');
  if (items.some((i) => i.id === previo)) select.value = previo;
}
```

### 9.4 Migración de datos guardados al cambiar de versión

```js
function normalizeState(parsed) {
  let items = Array.isArray(parsed.items) ? parsed.items : [];
  if (parsed.version === 1) {
    items = items.map((item) => ({ ...item, nuevoCampo: item.campoViejo ?? '' }));
  }
  return { version: 2, items };
}
```

La idea del prototipo (crear campañas reales a partir de un texto libre antiguo) es el mismo principio: leer lo viejo, escribir lo nuevo, no romper al usuario.

### 9.5 Búsqueda y filtro combinados sobre una tabla

```js
const consulta = $('#buscador').value.trim().toLowerCase();
const filtro = $('#filtro').value;
const filas = datos.filter((d) =>
  (!consulta || [d.codigo, d.nombre].join(' ').toLowerCase().includes(consulta)) &&
  (!filtro || d.etiqueta === filtro));
```

### 9.6 Descarga CSV desde el navegador

```js
const csv = '\ufeff' + filas.map((f) => f.map((c) => `"${String(c ?? '').replace(/"/g, '""')}"`).join(',')).join('\r\n');
const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8;' }));
const a = Object.assign(document.createElement('a'), { href: url, download: 'reporte.csv' });
a.click(); URL.revokeObjectURL(url);
```

### 9.7 Notas de adaptación

- Cambia `STORE_KEY` y el nombre del archivo CSV por proyecto.
- Mantén los `data-*` como único vocabulario entre HTML y JS; si cambias un `id`, cambia su render.
- Si una vista necesita datos reales de servidor, reemplaza su render por una carga asíncrona y deja las demás iguales: el patrón de vistas no depende de `localStorage`.
- Los chips y barras siempre con texto además de color.

## 10. Limitaciones conocidas

| Limitación | Motivo |
|---|---|
| `renderAll()` repinta las siete vistas en cada acción | Simplicidad y datos pequeños; aceptable para un prototipo de curso |
| Sin paginación ni orden por columna | Fuera del alcance pedido; las tablas son de demostración |
| `window.prompt` para la nota de seguimiento | Suficiente para el prototipo; en producto sería un panel propio |
| Sin autenticación ni roles | La capa de vista de esta etapa no los incluye |
| CSV sin filtros | El reporte verificable con periodo y filtros es HU-12 y espera definición del Product Owner |

## 11. Diferencias con el MVP, en una tabla

| Aspecto | MVP (`../prototipado/MVP/`) | Prototipo con navegación (esta carpeta) |
|---|---|---|
| Pantallas | Una | Siete conectadas |
| Foco de la demostración | Un recorrido mínimo completo | La navegación y la coherencia entre pantallas |
| Estado | Cinco colecciones | Siete colecciones, con revisiones de elegibilidad separadas |
| Perfiles | Se crean al registrar una atención | Alta y edición con formulario propio |
| Búsqueda | No tiene | Global y por vista, más filtro por clasificación |
| Salida de datos | Resumen en pantalla | Resumen más exportación CSV |
| Clave de almacenamiento | `atlanticCitySimpleMvp_v1` | `atlanticCityMvp_v3` |

Ambas versiones conviven a propósito: el MVP responde «qué mínimo funciona» y el prototipo responde «cómo se conectan las pantallas». Ninguna reemplaza a la otra en la entrega.
