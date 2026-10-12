# Registro de verificación

Resultado de las comprobaciones realizadas sobre los archivos del proyecto.

## 1. Estructura

| Elemento | Estado |
|---|---|
| `proyecto_final/` con backlog, docs, modelado, prototipado y desarrollo | Completo |
| `desarrollo/` con `html_css_js`, `python` y `sql` | Completo |
| `prototipado/` con `wireframe_manual.png`, `wireframe_digital.png` y carpeta `MVP/` | Completo |
| `modelado/` con las dos imágenes BPMN entregadas | Completo |
| Sílabo, logo y README en la raíz del proyecto | Completo |
| `uploads/` con los archivos originales y su inventario | Completo |

## 2. Código

| Comprobación | Resultado |
|---|---|
| Sintaxis de `prototipado/MVP/app.js` | Correcta |
| Sintaxis de `desarrollo/html_css_js/version_dividida/app.js` | Correcta |
| Sintaxis del JavaScript incluido en el HTML ampliado de referencia | Correcta |
| Identificadores usados por JavaScript presentes en el HTML | Sin referencias faltantes (41 de 41 y 74 de 74) |
| Identificadores duplicados en HTML | Ninguno |
| `lang`, codificación, viewport, título y encabezado principal | Presentes en los tres HTML |
| Campos de formulario con etiqueta asociada | Todos |
| Imágenes sin texto alternativo | Ninguna |
| Dependencias externas en CSS (`@import` o URL remota) | Ninguna |
| Enlaces relativos rotos en HTML | Ninguno |

## 3. Documentación

| Comprobación | Resultado |
|---|---|
| Enlaces relativos en los documentos Markdown | Todos válidos |
| Coincidencia entre la estructura descrita en el README y los archivos | Correcta |
| Versión Word del Product Backlog | Generada desde el mismo texto del Markdown; 13 historias y tres tablas |
| Texto de proceso o notas internas en los entregables | No se encontró |

## 4. Prueba de ejecución

El MVP se sirvió de forma local desde `prototipado/MVP/`. La página principal, la hoja de estilos y el archivo de comportamiento respondieron correctamente.

Recorrido funcional previsto para la prueba manual: cargar un perfil de demostración, registrar una visita, registrar una interacción, registrar una atención con incidencia, guardar una revisión «No aplica» sin constancia y una revisión «Aplica» con constancia local.

## 5. Observaciones

- Los conteos del MVP corresponden a datos de demostración almacenados en el navegador; no son indicadores del negocio.
- Las carpetas `desarrollo/python/` y `desarrollo/sql/` están preparadas, pero el lenguaje de servidor y el motor de base de datos siguen pendientes de confirmación.
- Los wireframes representan una propuesta de Inicio/Dashboard para una etapa posterior y no el alcance del MVP actual.
- Las reglas de segmentación, elegibilidad, campañas, reportes y automatización continúan pendientes de definición.
