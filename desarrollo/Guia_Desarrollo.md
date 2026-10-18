# Guía de desarrollo — archivos, tecnologías y prácticas de la capa de vista

## 1. Objetivo

Esta guía ayuda a los cuatro Developers a comprender el código disponible, explicar cómo se relacionan las partes y reutilizar patrones sencillos. Corresponde al punto 11 de la estructura de entrega (implementación mínima): HTML, CSS, JavaScript, formularios, navegación, validaciones y datos simulados.

Todo lo implementado hasta ahora es una aplicación estática que se ejecuta **en el navegador**. No contiene servidor de aplicación, framework, API, autenticación ni base de datos central.

El código está en dos carpetas, cada una con su propósito:

| Carpeta | Punto de la estructura | Qué es |
|---|---|---|
| `../prototipado/MVP/` | 9. MVP | Una sola pantalla con el recorrido mínimo funcional |
| `../prototipado/prototipo_navegable/` | 10. Prototipo con navegación | Siete vistas conectadas entre sí |

Ambas versiones se mantienen con archivos separados (`index.html`, `styles.css`, `app.js`), como se organiza un trabajo real. El prototipo incluye además una copia en archivo único para abrirlo sin servidor.

Cada carpeta tiene su guía de código detallada, función por función y con patrones reutilizables:

- `../prototipado/MVP/Guia_Codigo_MVP.md`
- `../prototipado/prototipo_navegable/Guia_Codigo_Prototipo_Navegable.md`

Esta guía desarrolla los conceptos generales de la capa de vista; las guías de código entran al detalle de cada archivo.

## 2. Arquitectura actual

```text
Persona usuaria
      │ acciones en formularios y menú
      ▼
HTML (estructura) ⇄ JavaScript (eventos, validación y estado local)
      │                              │
      └──────── CSS (presentación)   └── localStorage del navegador
```

- El navegador carga `index.html` y los archivos enlazados.
- JavaScript actualiza la vista y conserva los registros en `localStorage` del mismo navegador y origen.
- No hay autenticación, API, servidor de negocio, almacenamiento compartido ni conexión con Atlantic City.
- Los registros usados para empezar son ficticios y están identificados como datos de demostración.

Un servidor estático solo entrega los archivos. Ejecutar `python -m http.server` para abrir una carpeta no convierte Python en backend del producto.

## 3. Archivos del MVP sencillo

Ubicación: `../prototipado/MVP/`.

| Archivo | Propósito | Puntos de lectura |
|---|---|---|
| `index.html` | Estructura semántica, formulario, resumen, conteos e historial. | `lang="es"`, metadatos, `header`, `main`, `section`, formularios etiquetados, estados y enlaces a CSS/JS. |
| `styles.css` | Colores, distribución, tarjetas, mensajes y adaptación a pantallas. | Variables CSS en `:root`, clases de panel/formulario, diseño con Grid y breakpoints de `@media`. |
| `app.js` | Estado, eventos, validaciones, persistencia local y renderizado. | `STORE_KEY`, `sampleData`, `loadState`, `save`, `renderAll`, `submitAttention` y listeners. |
| `README.md` | Instrucciones de ejecución y alcance. | Servidor estático, almacenamiento local y limitaciones. |

### 3.1 Flujo al abrir la página

1. El navegador interpreta el HTML y crea el DOM.
2. El CSS enlazado define cómo se presenta el DOM.
3. Al final del `body` se carga `app.js`.
4. El JavaScript obtiene elementos con `querySelector`, lee o inicia el estado, enlaza eventos y ejecuta el render inicial.
5. Cuando la persona completa el formulario y lo envía, el código valida los campos acordados en el prototipo, actualiza el objeto local, guarda y vuelve a pintar resumen, historial y conteos.

El archivo JavaScript envuelve su código en una función anónima autoejecutable y usa modo estricto. Esto reduce variables globales accidentales; no reemplaza el diseño por módulos si el proyecto crece.

### 3.2 Estado local y recorrido de una atención

El estado guarda perfiles, campañas, promociones, atenciones e historial de constancias locales. La clave de persistencia es `atlanticCitySimpleMvp_v1`.

- `loadState()` lee JSON del navegador o prepara datos de prueba.
- `normalizeState()` comprueba que las colecciones principales sean arreglos.
- `formSnapshot()` toma los valores actuales del formulario.
- `submitAttention()` valida el perfil, la descripción de incidencia y el resultado manual cuando hay una promoción.
- `save()` intenta persistir en `localStorage`.
- `renderStats()`, `renderRecent()` y `renderPreview()` sincronizan lo que se ve con el estado.

Una constancia local se agrega únicamente cuando una promoción tiene resultado manual «Aplica». «No aplica» conserva la revisión pero no crea constancia. Ninguna de las dos opciones envía comunicación externa.

### 3.3 Reutilización: ejemplo de escucha de formulario

El patrón del MVP separa captura del evento, validación, actualización del estado y renderizado:

```js
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const valor = campo.value.trim();
  if (!valor) {
    mostrarMensaje('Completa el dato requerido.');
    campo.focus();
    return;
  }

  estado.registros.push({ valor, fecha: new Date().toISOString() });
  guardarEstado();
  renderizarLista();
});
```

Antes de llevarlo al producto, adaptar la validación a criterios confirmados; el ejemplo no define una regla de Atlantic City.

## 4. Archivos del prototipo con navegación

Ubicación: `../prototipado/prototipo_navegable/`.

| Archivo | Propósito | Puntos de lectura |
|---|---|---|
| `index.html` | Estructura de las siete vistas, menú lateral y formularios. | `nav` con botones `data-view`, `section.view` por pantalla, tablas con `tbody` vacío que se rellena por JavaScript. |
| `styles.css` | Presentación, barra lateral, tarjetas, tablas y adaptación. | Clases `.view` y `.active` para mostrar una sola vista, Grid para paneles, `@media` para pantallas estrechas. |
| `app.js` | Navegación entre vistas, validaciones, registros, reportes y exportación CSV. | `showView()`, `renderAll()`, `openClientForm()`, `exportCSV()`, `escapeHtml()`. |
| `Atlantic_City_Prototipo_Navegable_Archivo_unico.html` | El mismo prototipo en un solo archivo. | CSS y JavaScript incrustados; útil para adjuntar o abrir sin servidor. |
| `README.md` | Ejecución, recorrido y límites. | Puerto sugerido, comparación con el MVP. |

La clave de persistencia es `atlanticCityMvp_v3`. Como difiere de la del MVP, los registros de una versión no se mezclan con los de la otra aunque se abran en el mismo navegador y origen.

### 4.1 Patrón de navegación entre vistas

El prototipo no recarga la página: oculta todas las vistas y muestra la seleccionada.

```js
function showView(name) {
  document.querySelectorAll('.view').forEach((view) => {
    view.classList.toggle('active', view.id === `view-${name}`);
  });
  document.querySelectorAll('.nav-link').forEach((button) => {
    button.classList.toggle('active', button.dataset.view === name);
  });
  renderAll();
}
```

Cada botón del menú lleva `data-view="clientes"` y cada pantalla tiene `id="view-clientes"`. El mismo mecanismo permite que los accesos directos del Inicio (`data-go`) lleven a otra sección. Este es el punto que se demuestra en el punto 10 de la estructura: el paso de una interfaz a otra.

### 4.2 Qué resuelve cada vista

| Vista | Funciones implementadas |
|---|---|
| Inicio | Resumen general, clientes recientes, criterios, actividad reciente y accesos directos |
| Clientes | Registrar, buscar por texto, filtrar por clasificación, actualizar y abrir la ficha de un perfil |
| Visitas e interacciones | Registrar una visita o interacción y buscar en el historial |
| Incidencias | Registrar una incidencia y añadir notas de seguimiento |
| Segmentación | Consultar los cuatro criterios y guardar una clasificación manual |
| Promociones y campañas | Registrar campaña, promoción y resultado manual de elegibilidad |
| Reportes | Conteos locales y exportación a CSV descargado desde el navegador |

## 5. HTML semántico y accesible

HTML define el significado de la interfaz, no solo su apariencia. En las páginas del proyecto se emplean elementos como `header`, `nav`, `main`, `section` y `footer` para agrupar áreas.

Buenas prácticas para mantener:

- declarar `<!doctype html>`, `lang="es"`, codificación UTF-8 y viewport;
- usar encabezados en orden comprensible;
- asociar cada campo con una etiqueta visible (`label`) y mantener identificadores únicos;
- marcar solo los campos que realmente sean obligatorios para la historia;
- identificar mensajes de resultado con `role="status"` y `aria-live` cuando necesiten anunciarse;
- usar botones para acciones y enlaces para navegación a otra dirección;
- conservar texto explícito además del color para estados como «Aplica» o «No aplica»;
- separar estructura, presentación y comportamiento en archivos distintos.

Ejemplo reutilizable:

```html
<label for="client-code">Identificador</label>
<input id="client-code" name="clientCode" autocomplete="off">
<p id="client-code-help">Dato usado para buscar el perfil.</p>
```

Si se agrega una validación, el mensaje debe explicar qué falta, no solo cambiar el color del campo.

## 6. CSS: presentación y adaptación

El CSS define una paleta mediante propiedades personalizadas (`--paper`, `--ink`, etc.), agrupa estilos por componente y usa Grid/Flexbox para formularios y tarjetas. Las reglas `@media` reorganizan la pantalla para tabletas y móviles.

Ejemplo reutilizable:

```css
.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

@media (max-width: 600px) {
  .form-grid { grid-template-columns: 1fr; }
}
```

Cambiar la apariencia en CSS sin alterar el significado del HTML facilita mantener la interfaz. Evitar anchos fijos que produzcan desplazamiento horizontal y revisar contraste y foco de teclado después de cada cambio.

## 7. JavaScript del navegador

JavaScript conecta acciones y vista. En este proyecto se usa JavaScript nativo, sin paquetes externos ni framework. Patrones observables en los dos `app.js`:

- `$()` y `$$()` encapsulan consultas de DOM;
- `addEventListener()` enlaza acciones;
- `textContent` muestra texto sin interpretarlo como HTML;
- `escapeHtml()` protege el texto interpolado en las vistas que generan marcado con `innerHTML`;
- funciones como `renderAll()`, `renderRecent()` y `renderStats()` organizan la presentación;
- `try/catch` permite detectar fallos de lectura o escritura local.

Para nuevas funciones, mantener separados estos pasos: leer entradas, validarlas, aplicar una transformación pequeña al estado, guardar si corresponde y actualizar la vista. No colocar reglas de negocio no confirmadas en una función solo porque resulte fácil programarlas.

### Límite de `localStorage`

`localStorage` es almacenamiento de texto en el navegador: no tiene usuarios, permisos, validación del servidor, copias de seguridad ni sincronización. Los datos pueden desaparecer al limpiar el navegador y son visibles desde el mismo dispositivo/origen. No usarlo para datos reales de clientes.

## 8. Validaciones de la implementación mínima

La estructura de entrega pide demostrar programación con validaciones sencillas. Estas son las que ya existen en el código y cómo se explican:

| Validación | Dónde está | Qué hace |
|---|---|---|
| Campo obligatorio | Formularios del MVP (3 campos) y del prototipo (11 campos) | El atributo `required` bloquea el envío y el JavaScript revisa el valor recortado antes de guardar |
| Longitud máxima | Campos de texto de ambas versiones | `maxlength` limita la captura y evita que el resumen o la tabla se desborden |
| Identificador único | Registro de clientes del prototipo | Si el código ya existe, avisa «Ese identificador ya está registrado» y devuelve el foco al campo |
| Perfil existente | Formulario de atención del MVP | Al salir del campo identificador, carga los datos guardados y actualiza el perfil en vez de duplicarlo |
| Obligatorio condicional | Incidencia del MVP | Si se activa la casilla de incidencia, la descripción pasa a ser obligatoria; si se desactiva, deja de serlo |
| Dependencia entre campos | Elegibilidad del MVP | El selector de resultado permanece deshabilitado hasta elegir una promoción, y su primer mensaje cambia según haya o no promoción |
| Revisión explícita | Elegibilidad del MVP y notas del prototipo | El resultado manual debe guardarse de forma consciente; la nota de seguimiento pide confirmación del texto antes de guardarla |
| Formato de fecha | Campos `type="date"` | El navegador limita la entrada a una fecha válida y el código usa la fecha del día como valor inicial |

La estructura de entrega menciona como ejemplos la validación de correo, la de teléfono numérico y la confirmación antes de eliminar. Ninguna de las tres está implementada todavía: los campos de contacto no forman parte de los datos confirmados por el Product Owner y las pantallas actuales no incluyen una acción de eliminación. Cuando el PO confirme esos campos o esa acción, la validación se agrega siguiendo el mismo patrón de mensaje claro y foco en el campo.

## 9. Ejecutar y verificar los archivos

Cada carpeta se sirve por separado para no mezclar las dos versiones:

```bash
# MVP (punto 9)
cd prototipado/MVP && python -m http.server 4173

# Prototipo con navegación (punto 10)
cd prototipado/prototipo_navegable && python -m http.server 4174
```

Abrir `http://localhost:4173` o `http://localhost:4174` según corresponda. El comando inicia un servidor de archivos local para facilitar la carga del CSS/JS y el almacenamiento por origen; no inicia un backend del producto. La guía de prototipado contiene los casos manuales sugeridos para cada versión.

Al revisar un cambio:

1. cargar la página y abrir la consola del navegador;
2. verificar que no haya errores de JavaScript ni recursos faltantes;
3. probar caso válido, requerido vacío y datos ausentes;
4. comprobar el resumen, la lista o el historial, no solo el formulario;
5. revisar el comportamiento en ventana estrecha y con teclado;
6. comprobar que los datos sigan siendo ficticios y que ningún texto afirme un envío o integración inexistente;
7. confirmar el cambio con otro Developer y dejar evidencia en la tarea correspondiente.

## 10. Próximos acuerdos técnicos

El trabajo actual se limita a la capa de vista con datos de demostración. Antes de construir un backend o una persistencia central, confirmar con el profesor y el PO:

- qué historias y criterios se implementan en el siguiente incremento;
- si el curso requiere un lenguaje de servidor y cuál;
- si se usará un motor de datos, cuál y dónde se ejecuta;
- el esquema y las validaciones aprobadas;
- manejo de autenticación, permisos y datos personales;
- si habrá integración real y cómo se autoriza y prueba;
- entorno de despliegue, pruebas y criterios de aceptación.

Ninguna de esas decisiones consta en el sílabo ni en la estructura de entrega para esta etapa, por lo que no se ha creado código ni carpetas de servidor o base de datos. Cuando el profesor las indique, se acuerdan y recién entonces se implementan.
