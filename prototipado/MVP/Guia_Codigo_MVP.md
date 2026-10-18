# Guía de código del MVP — Atlantic City

Explica línea por línea cómo funciona el MVP sencillo de `index.html`, `styles.css` y `app.js`: en qué se basa cada decisión, qué hace cada función, cómo se usa dentro del proyecto y qué partes se pueden reutilizar en otros proyectos.

## 1. En qué se basa este código

| Fuente | Qué aporta al código |
|---|---|
| Punto 9 de la estructura de entrega (MVP) | La idea de elegir funcionalidades mínimas reales en lugar de programar todo el sistema: una sola pantalla y un recorrido demostrable. |
| Punto 11 de la estructura (implementación mínima) | HTML, CSS y JavaScript sin frameworks, formularios con validaciones y datos simulados. |
| Sílabo del curso | Los conceptos del negocio: perfil de cliente, visita o interacción, incidencia, cuatro criterios de segmentación, campaña y promoción como entidades distintas. |
| Reglas acordadas con el Product Owner y registradas en `../../../REGLAS_Y_DATOS_DEL_PROYECTO.md` | La visita se conserva aunque no haya incidencia ni promoción; «No aplica» no crea comunicación; «Aplica» crea solo una constancia local; la clasificación y la elegibilidad son manuales; los datos son de demostración. |
| Patrones de interfaz del ejemplo de pedido del curso | Organización compacta en pasos numerados, formulario a la izquierda y resumen inmediato a la derecha. Del ejemplo solo se tomó el patrón visual, no sus productos ni sus reglas. |

Ninguna regla de negocio inventada vive en este código: cuando una definición está pendiente del Product Owner, el campo existe como texto libre o como dato «No disponible», y el mensaje de la interfaz lo dice.

## 2. Los tres archivos y su responsabilidad

| Archivo | Responsabilidad | Tamaño aproximado |
|---|---|---|
| `index.html` | Estructura y significado: encabezado, formulario por pasos, panel resumen, conteos, historial y pie. | 121 líneas |
| `styles.css` | Presentación: paleta, tarjetas, recibo, insignias y adaptación a tres anchos de pantalla. | 5 líneas comprimidas (una regla por línea) |
| `app.js` | Comportamiento: estado local, validaciones, eventos, renderizado y mensajes. | 258 líneas |

La separación no es decorativa: permite revisar estructura, presentación y lógica por separado, y es lo que pide la guía de desarrollo como práctica de trabajo real.

## 3. `index.html` por secciones

1. **`<head>`**: `doctype`, `lang="es"`, codificación UTF-8, viewport, `theme-color`, título y enlace al CSS. Estos cinco metadatos son la lista mínima de calidad que revisa el equipo en cada cambio.
2. **`header.topbar`**: marca del proyecto y dos datos de contexto: la insignia «Datos de demostración» y `#today-label`, que JavaScript rellena con la fecha local en formato peruano.
3. **`.page-title`**: kicker «RECORRIDO BÁSICO», el `h1` único de la página y el subtítulo que anuncia el alcance: una atención, su historial y una revisión promocional manual si corresponde.
4. **`section.panel.form-panel` con `form#attention-form`**: el formulario en tres bloques numerados.
   - *Paso 1 — Perfil y datos disponibles*: `#client-code` y `#client-name` obligatorios (`required`), más `#client-spend`, `#client-games` y `#client-segment` opcionales con `maxlength`. Debajo, `.criteria-strip` muestra en vivo `#criteria-visits` y `#criteria-promotions`.
   - *Paso 2 — Registrar la atención*: `#activity-kind` (Visita/Interacción), `#activity-date` tipo date obligatorio y `#activity-note` opcional.
   - *Paso 3 — Opcionales*: `#incident-toggle` (checkbox) que revela `#incident-fields` con `#incident-description`; y `#campaign-select`, `#promotion-select`, `#eligibility-select` (deshabilitado hasta elegir promoción).
   - Botones `#attention-form submit` y `#clear-form`, más `#form-message` con `role="status"` y `aria-live="polite"` para que los lectores de pantalla anuncien el resultado.
5. **`section.panel.preview-panel`**: el resumen tipo comprobante. `#receipt-id`, `#receipt-title`, `#receipt-meta`, seis filas `#preview-*`, la tarjeta de cuatro criterios `#preview-frequency/spend/games/history`, la etiqueta manual `#preview-segment` y `#receipt-note`, cuyo texto cambia según el estado de la revisión.
6. **Dos `section.panel.section-panel`**: `stats-grid` con `#stat-clients/attentions/incidents/communications` y `#recent-list` con el historial reciente.
7. **`footer`**: recuerda los tres límites del prototipo: datos solo en este navegador, sin integración real ni envío externo, automatización no implementada.
8. **`#toast`**: aviso flotante con `role="status"` para confirmaciones breves.
9. **`<script src="app.js">` al final del `body`**: el JavaScript se carga después del DOM para no necesitar esperas de carga.

Detalles de semántica que conviene saber explicar: cada campo vive dentro de su `label`, por lo que no hacen falta `for` sueltos; los bloques son `section` con `h2`/`h3` en orden; los estados ocultos usan la clase `.hidden` (`display:none`) y no atributos sueltos; y ningún significado depende solo del color, porque las insignias llevan texto («Aplica», «No aplica», «Sin revisión»).

## 4. `styles.css` por bloques

1. **`:root` con variables**: `--paper`, `--card`, `--ink`, `--muted`, `--line`, `--tan`, `--tan-soft`, `--sage`, `--yellow`, `--shadow`. Cambiar la paleta completa toca una sola línea.
2. **Base**: `box-sizing` global, tipografías del sistema (sin fuentes externas) y el contenedor `.app` con borde y sombra dura que imita una ficha de papel.
3. **Cabecera y títulos**: `.topbar`, `.brand`, `.demo-badge` y `.step-badge` como etiquetas giradas tipo sticker; `.page-title` con `h1` serif.
4. **Rejilla principal**: `.main-grid` en dos columnas `minmax(0,1.08fr) / minmax(360px,.92fr)`; formulario y resumen lado a lado en escritorio.
5. **Paneles y formulario**: `.panel`, `.form-grid` de dos columnas, estilos de `input/select/textarea` con foco visible (`box-shadow` anillo), `.full` para campos anchos, `.check-row` para el checkbox de incidencia y `.incident-fields` con fondo propio.
6. **Comprobante**: `.receipt` con borde punteado y filas `.receipt-row`; `.receipt-note` en verde salvia.
7. **Criterios y notas**: `.criteria-strip`, `.criteria-card`, `.criteria-list`, `.manual-label` y `.note` amarilla.
8. **Conteos e historial**: `.stats-grid`, `.stat-box`, `.record-item` y `.record-badge` con variantes `.applies` y `.no-apply`.
9. **Mensaje y toast**: `.message.show` y `.toast.show` controlan visibilidad con una sola clase que JavaScript agrega o quita.
10. **Tres `@media`**: a 900 px la rejilla pasa a una columna y se quitan las rotaciones; a 600 px el layout se vuelve móvil puro (cabecera apilada, formulario a una columna, conteos en dos); a 370 px se ajustan marca y filas del recibo. Ningún ancho fijo produce scroll horizontal.

## 5. `app.js` por bloques

Todo el archivo vive dentro de una función anónima autoejecutable con `'use strict'`: no deja variables globales y falla rápido si algo se usa mal.

### 5.1 Utilidades (líneas 5 a 19)

| Función | Qué hace | Por qué existe |
|---|---|---|
| `$(selector)` y `$$(selector)` | Atajos de `querySelector` y `querySelectorAll` con resultado como arreglo. | Menos ruido en el código de eventos y render. |
| `nowISO()` | Fecha y hora actual en ISO. | Marcar `createdAt` de registros. |
| `todayISO()` | Fecha local en `AAAA-MM-DD` sin desfase de zona horaria. | Valor inicial de los campos de fecha y fecha por defecto de una atención. |
| `makeId(prefix)` | Identificador corto con base 36 y azar, por ejemplo `ATN-lx2…-a9f`. | Ids legibles en el historial sin necesitar base de datos. |
| `escapeHtml(value)` | Reemplaza `& < > " '` por entidades. | Todo texto que se inserta con `innerHTML` pasa por aquí: evita que un nombre con `<script>` se ejecute. |
| `formatDate(value)` | Convierte `AAAA-MM-DD` a fecha legible con `Intl.DateTimeFormat('es-PE')`; si no puede, muestra el texto escapado. | Presentación coherente sin librerías. |

### 5.2 Estado y persistencia (líneas 20 a 65)

- `STORE_KEY = 'atlanticCitySimpleMvp_v1'`: clave del `localStorage`. El sufijo `_v1` permite migrar en el futuro sin romper datos viejos.
- `sampleData()`: datos de demostración iniciales: dos perfiles (`AC-001`, `AC-002`), una campaña, una promoción vinculada, una visita y una interacción. Son ficticios y la interfaz lo declara.
- `normalizeState(parsed)`: garantiza que `clients`, `campaigns`, `promotions`, `attentions` y `communications` sean arreglos aunque el JSON guardado esté incompleto o corrupto.
- `loadState()`: lee el JSON guardado; si falla o no existe, usa `sampleData()`. Nunca lanza error al abrir la página.
- `db`: el objeto de estado en memoria. Todas las lecturas y escrituras pasan por él.
- `save()`: escribe `JSON.stringify(db)` en `localStorage` dentro de un `try/catch`. Si el navegador lo impide (modo privado, cuota llena), avisa con `showMessage(..., false)` y devuelve `false`; el flujo continúa en memoria y el mensaje final lo aclara.
- `clearMessage()`: limpia el área de mensajes.

### 5.3 Consultas derivadas (líneas 66 a 75)

Funciones de una línea que traducen el estado a respuestas de negocio:

- `byCode(code)`: busca el perfil por identificador sin distinguir mayúsculas.
- `clientName(code)`: nombre o «Cliente no disponible».
- `visitsFor(code)`: cuenta atenciones de tipo «Visita». Las interacciones no suman: es la regla de frecuencia del proyecto.
- `communicationsFor(code)`: cuenta constancias locales del cliente.
- `campaignFor/promotionFor/campaignName/promotionName`: resolución de ids a nombres con texto de respaldo.
- `eligibilityName(value)`: convierte `aplica` / `no-aplica` / vacío en «Aplica · revisión manual», «No aplica» o «Sin revisión».
- `valueOr(value, fallback)`: texto o «No disponible».

### 5.4 Renderizado (líneas 77 a 171)

- `fillSelect(select, items, placeholder)`: reconstruye un `select` con opciones escapadas y **conserva la selección previa** si el id sigue existiendo. Es el patrón que evita perder lo elegido al repintar.
- `renderCriteria()`: actualiza los dos contadores del paso 1 según el identificador escrito.
- `renderStats()`: vuelca los cuatro conteos del pie.
- `renderRecent()`: ordena las atenciones por `createdAt` descendente, toma seis y pinta `.record-item` con insignia de resultado; si no hay nada, un `.empty-state` explicativo.
- `showReceipt(data, id, isSaved)`: el corazón visual. Rellena el comprobante con los datos que haya (borrador o atención guardada), decide el texto de `#receipt-meta` («BORRADOR», «vista previa» o «guardada») y elige la nota final según promoción y resultado: sin promoción, «la atención se guarda aunque no se seleccione una promoción»; con promoción y sin resultado, pide el resultado manual; «no-aplica» aclara que no habrá comunicación; «aplica» aclara que será constancia local sin mensaje.
- `renderPreview()`: decide qué mostrar: si el formulario tiene borrador o no hay última atención, muestra el borrador; si no, vuelve al comprobante de la última atención guardada. Luego llama a `renderCriteria()`.
- `updateEligibilityControl()`: si no hay promoción elegida, deshabilita `#eligibility-select`, resetea su valor y cambia el texto de la primera opción a «Selecciona una promoción primero».
- `renderAll()`: reconstruye selects de campaña y promoción, ajusta elegibilidad y repinta conteos, historial y vista previa. Es el punto de entrada tras cualquier cambio estructural del estado.

### 5.5 Interacción con el formulario (líneas 172 a 231)

- `tryLoadProfile()`: al salir del campo identificador (`blur`), si el perfil existe copia sus datos a los campos vacíos, avisa «Perfil local … cargado» y limpia la última atención para que el comprobante muestre el borrador. Si no existe, no hace ruido: solo repinta.
- `clearForm()`: resetea el formulario, restaura la fecha de hoy, oculta la incidencia, quita su obligatoriedad, limpia mensaje y vuelve al estado inicial del comprobante.
- `submitAttention(event)`: el flujo completo de guardado, en este orden:
  1. `preventDefault()` y limpieza de mensajes.
  2. `formSnapshot()`: fotografía del formulario en un objeto plano (código, nombre, gasto, preferencias, clasificación, tipo, fecha, nota, incidencia, descripción, campaña, promoción, elegibilidad). Los valores vacíos se completan con los del perfil existente para no borrar datos al registrar una atención.
  3. Tres validaciones con mensaje y foco: identificador y nombre obligatorios; descripción de incidencia obligatoria si el checkbox está activo; resultado de elegibilidad obligatorio si hay promoción.
  4. Alta o actualización del perfil: si existe se usa `Object.assign` sobre el mismo objeto (no se duplica); si no, se agrega con `createdAt` nuevo.
  5. Se crea la atención con `makeId('ATN')` y se agrega a `db.attentions`. **Siempre**, haya o no incidencia y haya o no promoción.
  6. Solo si hay promoción y el resultado es «aplica», se crea una constancia en `db.communications` con `localRecord: true`.
  7. `save()`; se guarda `lastAttention`; se resetea el formulario; se repinta todo; y el mensaje final distingue los tres casos (constancia creada, revisión sin comunicación, atención simple), añadiendo «Solo estará disponible durante esta sesión» si la persistencia falló. `toast()` refuerza el aviso.

### 5.6 Arranque y listeners (líneas 233 a 258)

- Fecha visible y fecha del campo al valor de hoy.
- `change` de `#incident-toggle`: muestra u oculta `#incident-fields` y sincroniza `required` de la descripción. Es la validación condicional del punto 11 de la estructura.
- `input` de `#client-code` y de cualquier otro control del formulario (excepto los que ya tienen listener propio): repinta la vista previa en vivo.
- `blur` de `#client-code`: `tryLoadProfile()`.
- `change` de `#promotion-select`: si la promoción tiene campaña y no hay campaña elegida, la preselecciona (coherencia campaña-promoción); ajusta elegibilidad y repinta.
- `change` de campaña, elegibilidad y resto de campos: repinta la vista previa.
- `submit` del formulario → `submitAttention`; clic de `#clear-form` → `clearForm`.
- `renderAll()` final: primer pintado al abrir la página.

## 6. Reglas de negocio dentro del código

| Regla del proyecto | Dónde vive en el código | Cómo se nota al usarlo |
|---|---|---|
| La visita o interacción se conserva aunque no haya incidencia ni promoción | `submitAttention` agrega la atención antes y fuera de cualquier condición | Registrar una atención sin tocar incidencia ni promoción funciona y aparece en el historial |
| «No aplica» no crea comunicación | El `if` de constancias exige `eligibility === 'aplica'` | Tras guardar «No aplica», el contador de constancias no cambia y la nota del recibo lo explica |
| «Aplica» crea solo una constancia local | `db.communications.push({... localRecord: true})` y el mensaje «no se envió un mensaje» | El toast y el mensaje lo dicen explícitamente |
| La frecuencia cuenta solo visitas | `visitsFor` filtra `kind === 'Visita'` | Registrar una interacción no mueve el contador de frecuencia |
| Clasificación y elegibilidad manuales | No existe función de cálculo; los campos son de texto o select manual | Ninguna pantalla inventa un segmento |
| Campaña y promoción son entidades distintas | Colecciones separadas y selects separados, con vínculo opcional `campaignId` | Se pueden registrar por separado y relacionarlas después |
| Datos de demostración identificados | `sampleData()` más la insignia del HTML y el pie | La pantalla declara su carácter ficticio |

## 7. Validaciones y mensajes

| Caso | Mecanismo | Mensaje o efecto |
|---|---|---|
| Identificador o nombre vacío | `required` del HTML + comprobación en `submitAttention` | «Completa el identificador y el nombre del cliente.» |
| Incidencia activada sin descripción | `required` dinámico + comprobación | «Describe brevemente la incidencia o desmarca esa opción.» |
| Promoción sin resultado de elegibilidad | Select deshabilitado hasta elegir promoción + comprobación con foco | «Selecciona el resultado de revisión manual de la promoción.» |
| Longitudes excesivas | `maxlength` por campo | El navegador limita la captura |
| Fecha inválida | `input type="date"` con valor inicial de hoy | El control solo acepta fechas |
| Persistencia imposible | `try/catch` de `save()` | «No se pudieron guardar los cambios en este navegador.» y nota de sesión |
| Texto con caracteres especiales | `escapeHtml` en todo `innerHTML` | Se muestra como texto, nunca como marcado |

## 8. Cómo se usa en el proyecto

1. **Ejecución**: desde esta carpeta, `python -m http.server 4173` y abrir `http://localhost:4173`. El servidor solo entrega archivos; no es backend.
2. **Demostración en clase**: el recorrido de siete pasos de `../Guia_Prototipado_y_MVP.md` (cargar perfil, visita, interacción, incidencia, «No aplica», «Aplica», conteos).
3. **Pruebas manuales antes de dar por listo un cambio**: caso válido, requerido vacío, dato ausente y ventana estrecha; más consola abierta sin errores.
4. **Sustentación**: cada integrante debe poder explicar el flujo evento → `formSnapshot()` → validación → mutación de `db` → `save()` → render, y por qué la constancia solo existe con «Aplica».
5. **Relación con el backlog**: este código cubre de forma demostrativa HU-01, HU-02, HU-03, HU-05, HU-07, HU-09 y HU-11 en su versión manual. No cubre HU-04, HU-06, HU-08, HU-10, HU-12 ni HU-13, que viven en el prototipo con navegación o siguen pendientes.

## 9. Cómo reutilizar estos patrones en otros proyectos

Los patrones siguientes no contienen reglas de Atlantic City: son formas de organizar una app de formulario + estado local. Para reutilizarlos, cambia clave, campos, textos y mensajes; no copies las reglas de negocio.

### 9.1 Almacén local con semilla y normalización

```js
const STORE_KEY = 'miProyecto_v1';
const sampleData = () => ({ items: [] });
function normalizeState(parsed) {
  return { items: Array.isArray(parsed.items) ? parsed.items : [] };
}
function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    return raw ? normalizeState(JSON.parse(raw)) : sampleData();
  } catch (error) { return sampleData(); }
}
const db = loadState();
function save() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(db)); return true; }
  catch (error) { return false; }
}
```

Sirve para cualquier prototipo de aula o demo: datos que sobreviven recargas sin backend. La normalización es la parte que casi todos olvidan y la que evita pantallas rotas con datos viejos.

### 9.2 Fotografía del formulario y vista previa en vivo

```js
function formSnapshot() {
  return { titulo: $('#titulo').value.trim(), fecha: $('#fecha').value };
}
function renderPreview() {
  const draft = formSnapshot();
  $('#preview-titulo').textContent = draft.titulo || 'Sin título';
}
$('#mi-form').addEventListener('input', renderPreview);
```

Útil cuando el usuario debe ver el resultado antes de guardar: cotizaciones, fichas, comprobantes.

### 9.3 Obligatoriedad condicional

```js
$('#toggle').addEventListener('change', (event) => {
  $('#detalle-campos').classList.toggle('hidden', !event.target.checked);
  $('#detalle').required = event.target.checked;
});
```

Patrón general: un checkbox que habilita un bloque y transfiere la obligatoriedad al campo interno.

### 9.4 Select dependiente de otro select

```js
function updateDependiente() {
  const hayPadre = Boolean($('#padre').value);
  const hijo = $('#hijo');
  hijo.disabled = !hayPadre;
  hijo.options[0].textContent = hayPadre ? 'Selecciona un resultado' : 'Selecciona primero la opción anterior';
  if (!hayPadre) hijo.value = '';
}
```

### 9.5 Lista segura con estado vacío

```js
function renderList(items) {
  const wrap = $('#lista');
  if (!items.length) { wrap.innerHTML = '<div class="empty-state">Aún no hay registros.</div>'; return; }
  wrap.innerHTML = items.map((item) =>
    `<div class="record-item"><strong>${escapeHtml(item.nombre)}</strong></div>`).join('');
}
```

### 9.6 Toast con temporizador único

```js
let toastTimer;
function toast(message) {
  const el = $('#toast');
  el.textContent = message; el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 3200);
}
```

### 9.7 Notas de adaptación

- Cambia `STORE_KEY` por proyecto y versión; dos apps en el mismo navegador no deben compartir clave (por eso el prototipo con navegación usa otra).
- Mantén `escapeHtml` en todo `innerHTML`; si un dato solo se muestra, prefiere `textContent`.
- Los mensajes deben decir qué falta y qué pasó; un color solo no comunica.
- Si el proyecto crece a varias pantallas, el siguiente paso natural es el patrón de vistas del prototipo con navegación, no repetir formularios sueltos.

## 10. Limitaciones conocidas y dónde cambiarlas

| Limitación | Por qué existe | Qué la desbloquea |
|---|---|---|
| Sin búsqueda ni ficha de perfil | El MVP prioriza un recorrido, no el catálogo completo | HU-01 y HU-04 ya están demostradas en el prototipo con navegación |
| Sin estados de incidencia | El Product Owner no los ha definido | Acuerdo del PO sobre tipos y seguimiento |
| Frecuencia sin periodo | El periodo de referencia está pendiente | Acuerdo del PO; entonces `visitsFor` podría filtrar por rango de fechas |
| Constancias solo locales | No hay canal real conectado ni aprobado | Decisión del PO y un canal autorizado; hasta entonces todo aviso dice que no se envió un mensaje |
| Sin autenticación ni roles | Fuera del alcance de la capa de vista de esta etapa | Definición del curso o del PO |

## 11. Glosario rápido

- **Atención**: una visita o interacción registrada; la unidad del historial.
- **Constancia local**: registro de que una promoción «Aplica» fue revisada y aceptada manualmente; no es un mensaje enviado.
- **Borrador**: estado del formulario antes de guardar; el comprobante lo marca como tal.
- **`db`**: objeto en memoria que replica una base de datos mínima; `localStorage` es su copia persistente.
- **Render**: repintar una zona de la pantalla desde el estado; aquí siempre es manual y explícito.
