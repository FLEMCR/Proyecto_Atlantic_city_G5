# Guía de desarrollo — arquitectura, archivos y tecnologías

## 1. Objetivo

Esta guía ayuda a los cuatro Developers a comprender el código disponible, explicar cómo se relacionan las partes y reutilizar patrones sencillos. La implementación actual del MVP es una aplicación estática de **HTML, CSS y JavaScript en el navegador**. No contiene servidor de aplicación, framework, API ni base de datos central.

La carpeta `desarrollo/html_css_js/` conserva una versión ampliada anterior como referencia. El MVP sencillo vigente está en `prototipado/MVP/`; no se deben confundir ni reemplazar entre sí.

## 2. Arquitectura actual

```text
Persona usuaria
      │ acciones en formularios
      ▼
HTML (estructura) ⇄ JavaScript (eventos, validación y estado local)
      │                              │
      └──────── CSS (presentación)   └── localStorage del navegador
```

- El navegador carga `index.html` y los archivos enlazados.
- JavaScript actualiza la vista y conserva los registros en `localStorage` del mismo navegador y origen.
- No hay autenticación, API, servidor de negocio, almacenamiento compartido ni conexión con Atlantic City.
- Los registros usados para empezar son ficticios y están identificados como datos de demostración.

Un servidor estático solo entrega los archivos. Ejecutar `python -m http.server` para abrir el prototipo no convierte Python en backend.

## 3. Archivos del MVP sencillo

Ubicación: `prototipado/MVP/`.

| Archivo | Propósito | Puntos de lectura |
|---|---|---|
| `index.html` | Estructura semántica, formulario, resumen, conteos e historial. | `lang="es"`, metadatos, `header`, `main`, `section`, formularios etiquetados, estados y enlaces a CSS/JS. |
| `styles.css` | Colores, distribución, tarjetas, mensajes y adaptación a pantallas. | Variables CSS en `:root`, clases de panel/formulario, diseño con Grid y breakpoints de `@media`. |
| `app.js` | Estado, eventos, validaciones, persistencia local y renderizado. | `STORE_KEY`, datos iniciales, `loadState`, `save`, `renderAll`, `submitAttention` y listeners. |
| `README.md` | Instrucciones de ejecución y alcance. | Servidor estático, almacenamiento local y limitaciones. |

### 3.1 Flujo al abrir la página

1. El navegador interpreta el HTML y crea el DOM.
2. El CSS enlazado define cómo se presenta el DOM.
3. Al final del `body` se carga `app.js`.
4. El JavaScript obtiene elementos con `querySelector`, lee o inicia el estado, enlaza eventos y ejecuta el render inicial.
5. Cuando la persona completa el formulario y lo envía, el código valida los campos acordados en el prototipo, actualiza el objeto local, guarda y vuelve a pintar resumen, historial y conteos.

El archivo JavaScript envuelve su código en una función anónima autoejecutable y usa modo estricto. Esto reduce variables globales accidentales; no reemplaza el diseño por módulos si el proyecto crece.

### 3.2 Estado local y recorrido de una atención

El estado guarda perfiles, campañas, promociones, atenciones e historial de constancias locales. La clave de persistencia actual es `atlanticCitySimpleMvp_v1`.

- `loadState()` lee JSON del navegador o prepara datos de prueba.
- `normalizeState()` comprueba que las colecciones principales sean arreglos.
- `formSnapshot()` toma los valores actuales del formulario.
- `submitAttention()` valida el perfil, descripción de incidencia y resultado manual cuando hay una promoción.
- `save()` intenta persistir en `localStorage`.
- `renderStats()`, `renderRecent()` y `renderPreview()` sincronizan lo que se ve con el estado.

Una constancia local se agrega únicamente cuando una promoción tiene resultado manual «Aplica». «No aplica» conserva la revisión pero no crea constancia. Ninguna de las dos opciones envía comunicación externa.

### 3.3 Reutilización: ejemplo de escucha de formulario

El patrón del prototipo separa captura del evento, validación, actualización del estado y renderizado:

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

## 4. HTML semántico y accesible

HTML define el significado de la interfaz, no solo su apariencia. En las páginas del proyecto se emplean elementos como `header`, `nav`, `main`, `section` y `footer` para agrupar áreas.

Buenas prácticas para mantener:

- declarar `<!doctype html>`, `lang="es"`, codificación UTF-8 y viewport;
- usar encabezados en orden comprensible;
- asociar cada campo con una etiqueta visible (`label`) y mantener identificadores únicos;
- marcar solo los campos que realmente sean obligatorios para la historia;
- identificar mensajes de resultado con `role="status"` y `aria-live` cuando necesiten anunciarse;
- usar botones para acciones y enlaces para navegación a otra dirección;
- conservar texto explícito además del color para estados como «Aplica» o «No aplica».

Ejemplo reutilizable:

```html
<label for="client-code">Identificador</label>
<input id="client-code" name="clientCode" autocomplete="off">
<p id="client-code-help">Dato usado para buscar el perfil.</p>
```

Si se agrega una validación, el mensaje debe explicar qué falta, no solo cambiar el color del campo.

## 5. CSS: presentación y adaptación

El CSS del MVP define una paleta mediante propiedades personalizadas (`--paper`, `--ink`, etc.), agrupa estilos por componente y usa Grid/Flexbox para formularios y tarjetas. Las reglas `@media` reorganizan la pantalla para tabletas y móviles.

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

## 6. JavaScript del navegador

JavaScript conecta acciones y vista. En este proyecto se usa JavaScript nativo, sin paquetes externos ni framework. Patrones observables en `app.js`:

- `$()` y `$$()` encapsulan consultas de DOM;
- `addEventListener()` enlaza acciones;
- `textContent` muestra texto sin interpretarlo como HTML;
- `escapeHtml()` protege el texto interpolado en las vistas que generan marcado con `innerHTML`;
- funciones como `renderRecent()` y `renderStats()` organizan la presentación;
- `try/catch` permite detectar fallos de lectura o escritura local.

Para nuevas funciones, mantener separados estos pasos: leer entradas, validarlas, aplicar una transformación pequeña al estado, guardar si corresponde y actualizar la vista. No colocar reglas de negocio no confirmadas en una función solo porque resulte fácil programarlas.

### Límite de `localStorage`

`localStorage` es almacenamiento de texto en el navegador: no tiene usuarios, permisos, validación del servidor, copias de seguridad ni sincronización. Los datos pueden desaparecer al limpiar el navegador y son visibles desde el mismo dispositivo/origen. No usarlo para datos reales de clientes.

## 7. Versión ampliada de referencia

La carpeta `desarrollo/html_css_js/` contiene:

- `Atlantic_City_MVP_Ampliado_Referencia.html`: archivo HTML de referencia en una sola página.
- `version_dividida/index.html`: estructura multipantalla de la versión ampliada.
- `version_dividida/styles.css`: estilos de esa versión.
- `version_dividida/app.js`: navegación, perfiles, visitas, incidencias, criterios, campañas, promociones, revisiones manuales y exportación CSV local.
- `version_dividida/README.md`: instrucciones y limitaciones propias de esa referencia.

Esta versión ofrece más pantallas y ejemplos de navegación que el MVP sencillo. Se mantiene separada porque es una referencia previa; para el alcance actual se consulta primero `prototipado/MVP/`. Antes de reutilizar una función, revisar su comportamiento, los datos guardados y si corresponde a un criterio acordado. No copiar resultados de demostración como cifras reales.

## 8. Python y SQL: opciones por confirmar

Las carpetas `desarrollo/python/` y `desarrollo/sql/` son espacios preparados para el trabajo posterior. Su presencia no confirma lenguaje de servidor, framework, motor de base de datos, proveedor ni integración.

### Python

Python podría alojar lógica del servidor si el curso y el PO confirman esa necesidad. Se debe acordar el framework, los endpoints, validaciones, autenticación, pruebas y despliegue antes de implementarlo.

Ejemplo aislado de una función reusable —no es una API ni una regla del producto—:

```python
def normalizar_codigo(valor: str) -> str:
    return valor.strip().upper()
```

Si se selecciona un framework web, la estructura del servicio debe acordarse en conjunto; los datos de navegador actuales no se vuelven automáticamente accesibles para un servicio Python.

### SQL

SQL se usaría para consultar o modificar datos de un motor relacional que el equipo seleccione. El esquema debe derivarse de historias refinadas y decisiones del PO; no definir campos personales, relaciones o reglas antes de confirmarlos.

Plantilla didáctica sin nombres de tablas ni reglas del producto:

```sql
SELECT <columnas>
FROM <tabla_confirmada>
WHERE <condicion_confirmada>;
```

Antes de ejecutar SQL con datos reales, se requieren permisos, protección, parametrización de consultas, validaciones y política de respaldo. La carpeta no contiene aún un esquema definitivo.

## 9. Ejecutar y verificar los archivos

Desde `prototipado/MVP/`:

```bash
python -m http.server 4173
```

Abrir `http://localhost:4173`. El comando inicia un servidor de archivos local para facilitar la carga del CSS/JS y el almacenamiento por origen; no inicia un backend del producto. La guía de prototipado contiene los casos manuales sugeridos.

Al revisar un cambio:

1. cargar la página y abrir la consola del navegador;
2. verificar que no haya errores de JavaScript o recursos faltantes;
3. probar caso válido, requerido vacío y datos ausentes;
4. comprobar el resumen y el historial, no solo el formulario;
5. revisar el comportamiento en ventana estrecha y con teclado;
6. comprobar que los datos sigan siendo ficticios y que ningún texto afirme un envío o integración inexistente;
7. confirmar el cambio con otro Developer y dejar evidencia en la tarea correspondiente.

## 10. Próximos acuerdos técnicos

Antes de construir backend o persistencia central, confirmar con el PO y el profesor:

- qué historias y criterios se implementan en el siguiente incremento;
- si Python es requerido y qué framework/versión se usará;
- qué motor de datos se acepta y dónde se ejecuta;
- el esquema y validaciones aprobados;
- manejo de autenticación, permisos y datos personales;
- si habrá integración real y cómo se autoriza/probaría;
- entorno de despliegue, pruebas y criterios de aceptación.

Hasta entonces, se trabaja en la capa de vista y con datos de demostración, manteniendo las carpetas de Python y SQL como espacios sin stack definitivo.
