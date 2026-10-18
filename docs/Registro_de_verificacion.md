# Registro de verificación

Resultado de las comprobaciones realizadas sobre los archivos del proyecto después de la reorganización por la estructura de entrega, de agregar los puntos 11 a 15 y de categorizar los archivos sueltos en carpetas temáticas.

## 1. Estructura

| Elemento | Estado |
|---|---|
| `proyecto_final/` como carpeta principal, con `backlog/`, `curso/`, `desarrollo/`, `docs/`, `informe/`, `modelado/` y `prototipado/` | Completo |
| Raíz del proyecto con solo el `README.md`; informe en `informe/`, sílabo y logotipo en `curso/` | Completo |
| `prototipado/` con wireframes, guía, carpeta `MVP/` y carpeta `prototipo_navegable/` separadas | Completo |
| `modelado/` con las dos imágenes BPMN, la carpeta `diagramas/` con cinco imágenes UML, dos guías y READMEs en carpeta y subcarpeta | Completo |
| `informe/` con el documento, su guía y README | Completo |
| Guías de código del MVP y del prototipo con navegación, en cada carpeta junto al código | Completo |
| README en cada carpeta del proyecto, incluidas `docs/`, `curso/`, `backlog/` y `diagramas/` | Completo |
| `desarrollo/` con la guía de la capa de vista y README | Completo |
| `uploads/` con los 23 archivos originales recibidos y su inventario | Completo |
| Carpetas de entregas anteriores y carpeta duplicada del proyecto | Eliminadas; el contenido vigente quedó en `proyecto_final/` |
| Carpetas de servidor y base de datos | Retiradas: la etapa actual no las requiere |
| Archivos del proyecto | 43, todos mencionados en el README o en el README de su carpeta |

## 2. Código

| Comprobación | Resultado |
|---|---|
| Sintaxis de `prototipado/MVP/app.js` | Correcta |
| Sintaxis de `prototipado/prototipo_navegable/app.js` | Correcta |
| Sintaxis del JavaScript incrustado en `Atlantic_City_Prototipo_Navegable_Archivo_unico.html` | Correcta |
| Identificadores usados por JavaScript y presentes en el HTML | Sin referencias faltantes: 41 de 41 en el MVP y 74 de 74 en el prototipo |
| Identificadores duplicados | Ninguno: 41 únicos en el MVP, 80 en el prototipo y 80 en el archivo único |
| `doctype`, `lang="es"`, codificación, viewport y título | Presentes en los tres HTML |
| Encabezado principal | Uno en el MVP; uno por vista en el prototipo, siete en total |
| Formularios | Uno en el MVP; siete en el prototipo |
| Campos con etiqueta asociada | Todos; ninguno sin `label` |
| Recursos rotos en HTML (CSS, JS, imágenes) | Ninguno |
| Dependencias externas en CSS o JavaScript | Ninguna |
| Claves de almacenamiento local | Distintas entre versiones: `atlanticCitySimpleMvp_v1` y `atlanticCityMvp_v3` |
| Textos de las interfaces que llamaban MVP al prototipo | Corregidos en `index.html`, `app.js` y el archivo único |

## 3. Documentos

| Comprobación | Resultado |
|---|---|
| Enlaces relativos en los archivos Markdown | Todos válidos tras corregir las rutas afectadas por la categorización en carpetas |
| Guías de código del MVP y del prototipo con navegación | Creadas en sus carpetas: explican cada archivo y función, las reglas embebidas, las validaciones, ejemplos de uso en el proyecto y patrones reutilizables en otros proyectos |
| Guía del informe de avance | Creada en `informe/`: contenido por sección, fuentes, marcadores por completar y sincronización |
| README por carpeta | Las once carpetas del proyecto tienen su README |
| Referencias a carpetas retiradas o rutas antiguas | Ninguna |
| Coincidencia entre la estructura descrita en el README y los archivos reales | Correcta |
| Informe de avance `Avance_Atlantic_City.docx` | Abre correctamente: 393 párrafos, 7 tablas y 10 imágenes |
| Informe de avance: puntos de la estructura | Los quince, en el orden de la estructura propuesta, con el MVP antes del prototipo con navegación |
| Informe de avance: datos personales | Portada y tabla del equipo con marcadores entre corchetes para completar a mano |
| Versión Word del Product Backlog | Generada desde el mismo texto del Markdown; 141 párrafos, 3 tablas y 13 historias |
| Marcas de formato sin procesar en los Word | Ninguna |
| Notas internas, comentarios de proceso o contenido de otros casos en los entregables | No se encontraron |
| Diagramas UML | Cinco imágenes generadas y revisadas visualmente; coinciden con el backlog, el modelo BPMN y el código |

## 4. Prueba de ejecución

| Versión | Carpeta | Puerto | Resultado |
|---|---|---|---|
| MVP | `prototipado/MVP/` | 4173 | Página, hoja de estilos y archivo de comportamiento respondieron 200 |
| Prototipo con navegación | `prototipado/prototipo_navegable/` | 4174 | Página, hoja de estilos y archivo de comportamiento respondieron 200 |
| Prototipo en archivo único | `prototipado/prototipo_navegable/` | 4174 | Respondió 200 |

Recorridos previstos para la prueba manual, descritos en `prototipado/Guia_Prototipado_y_MVP.md`: en el MVP, cargar un perfil de demostración, registrar una visita y una interacción, registrar una atención con incidencia, guardar una revisión «No aplica» sin constancia y una «Aplica» con constancia local; en el prototipo, recorrer las siete vistas, registrar un cliente, asociarle una visita y una incidencia, consultar los criterios, guardar una clasificación manual, registrar campaña y promoción con ambos resultados de elegibilidad y exportar el CSV local.

## 5. Observaciones

- Los conteos del MVP y del prototipo corresponden a datos de demostración almacenados en el navegador; no son indicadores del negocio.
- El trabajo se limita a la capa de vista. El lenguaje de servidor y el motor de base de datos no están definidos por el sílabo ni por la estructura de entrega para esta etapa; por eso el objeto «Datos» de los diagramas de secuencia se nombra «registro local».
- Los wireframes representan la pantalla de Inicio/Dashboard y no el alcance del MVP sencillo, aunque anticipan la organización del prototipo con navegación.
- Las reglas de segmentación, elegibilidad, campañas, reportes y automatización continúan pendientes de definición del Product Owner; los diagramas UML no las incluyen.
- En el informe de avance faltan los nombres de los cuatro integrantes, el nombre del docente y la carrera; están marcados entre corchetes en la portada y en la tabla del equipo Scrum para completarlos a mano antes de entregar.
