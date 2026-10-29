# Registro de verificación

Resultado de las comprobaciones realizadas sobre los archivos del proyecto después de la reorganización por la estructura de entrega, de agregar los puntos 11 a 15 y de categorizar los archivos sueltos en carpetas temáticas.

## 1. Estructura

| Elemento | Estado |
|---|---|
| `proyecto_final/` como carpeta principal, con seis carpetas esenciales a la vista: `backlog/`, `curso/`, `docs/`, `informe/`, `modelado/` y `prototipado/` | Completo |
| Raíz del proyecto con solo el `README.md`; informe en `informe/`, sílabo y logotipo en `curso/` | Completo |
| `prototipado/` con wireframes, README, carpeta `MVP/` y carpeta `prototipo_navegable/` separadas, cada una con su código | Completo |
| `modelado/` con las dos imágenes BPMN, `diagramas/` con cinco imágenes UML, `casos_de_uso/` con la especificación y READMEs en carpeta y subcarpetas | Completo |
| `informe/` con el documento y README; su guía vive en `docs/` con las demás | Completo |
| Todas las guías del proyecto reunidas en `docs/`, incluidas las de código, con README propio que las indexa en orden de lectura | Completo |
| Guía de materiales del curso | Creada en `docs/`: digesto de todos los PDF del curso por etapas, con ideas clave y dónde se usó cada uno | Completo |
| Reorganización final | La carpeta `desarrollo/` se retiró al mover su guía a `docs/`; todas las referencias internas se actualizaron y se verificaron | Completo |
| README en cada carpeta del proyecto, incluidas `docs/`, `curso/`, `backlog/`, `diagramas/`, `casos_de_uso/` y `material_complementario/` | Completo |
| `uploads/` con los 23 archivos originales recibidos y su inventario | Completo |
| Carpetas de entregas anteriores y carpeta duplicada del proyecto | Eliminadas; el contenido vigente quedó en `proyecto_final/` |
| Carpetas de servidor y base de datos | Retiradas: la etapa actual no las requiere |
| Archivos del proyecto | 60, todos mencionados en el README o en el README de su carpeta |

## 2. Código

| Comprobación | Resultado |
|---|---|
| Sintaxis de `../prototipado/MVP/app.js` | Correcta |
| Sintaxis de `../prototipado/prototipo_navegable/app.js` | Correcta |
| Sintaxis del JavaScript incrustado en `../prototipado/prototipo_navegable/Atlantic_City_Prototipo_Navegable_Archivo_unico.html` | Correcta |
| Identificadores usados por JavaScript y presentes en el HTML | Sin referencias faltantes: 41 de 41 en el MVP y 74 de 74 en el prototipo |
| Identificadores duplicados | Ninguno: 41 únicos en el MVP, 80 en el prototipo y 80 en el archivo único |
| `doctype`, `lang="es"`, codificación, viewport y título | Presentes en los tres HTML |
| Encabezado principal | Uno en el MVP; uno por vista en el prototipo, siete en total |
| Formularios | Uno en el MVP; siete en el prototipo |
| Campos con etiqueta asociada | Todos; ninguno sin `label` |
| Recursos rotos en HTML (CSS, JS, imágenes) | Ninguno |
| Dependencias externas en CSS o JavaScript | Ninguna |
| Claves de almacenamiento local | Distintas entre versiones: `atlanticCitySimpleMvp_v1` y `atlanticCityMvp_v3` |
| Textos de las interfaces que llamaban MVP al prototipo | Corregidos en los index.html y app.js de ambas versiones y en el archivo único |

## 3. Documentos

| Comprobación | Resultado |
|---|---|
| Enlaces relativos en los archivos Markdown | Todos válidos tras corregir las rutas afectadas por la categorización en carpetas |
| Guías de código del MVP y del prototipo con navegación | Creadas en sus carpetas: explican cada archivo y función, las reglas embebidas, las validaciones, ejemplos de uso en el proyecto y patrones reutilizables en otros proyectos |
| Guía del informe de avance | Creada en `informe/`: contenido por sección, fuentes, marcadores por completar y sincronización |
| README por carpeta | Las once carpetas del proyecto tienen su README |
| Referencias a carpetas retiradas o rutas antiguas | Ninguna |
| Coincidencia entre la estructura descrita en el README y los archivos reales | Correcta |
| Informe de avance `../informe/Avance_Atlantic_City.docx` | Abre correctamente: 397 párrafos, 27 tablas (19 de nivel superior y 8 anidadas) y 10 imágenes |
| Punto 13 del informe | Reescrito con la plantilla «Descripción de Caso de Uso» del profesor: tabla por caso con secuencia normal y excepciones anidadas, más actores, trazabilidad, reglas de negocio y mensajes |
| Especificación de casos de uso | Creada en `modelado/casos_de_uso/`: CU01 a CU04 con datos de entrada y salida, catálogos RN01–RN08, EXC01–EXC07 y MSJ01–MSJ25 |
| Mensajes MSJ contra el código | Los 25 mensajes coinciden con las cadenas literales del MVP y del prototipo |
| Material complementario del profesor | Diez PDF copiados a `curso/material_complementario/` con README que explica cada uno y su incorporación |
| Presentación del avance | `../presentacion/Presentacion_Atlantic_City_UML.pptx`: 17 diapositivas, 7 imágenes incrustadas, 5 tablas y notas de orador con guion y tiempos; transición de fundido sencilla |
| Guion de exposición | Cuatro bloques de menos de 3 minutos, mapa de imágenes por diapositiva y 8 preguntas probables con respuesta |
| Avance previo del equipo revisado | Diapositivas UML que estaban vacías completadas; historias ampliadas de 5 a 13; numeración y encuadre de métricas corregidos en la versión nueva |
| Informe de avance: puntos de la estructura | Los quince, en el orden de la estructura propuesta, con el MVP antes del prototipo con navegación |
| Informe de avance: datos personales | Portada y tabla del equipo con marcadores entre corchetes para completar a mano |
| Versión Word del Product Backlog | Generada desde el mismo texto del Markdown; 141 párrafos, 3 tablas y 13 historias |
| Marcas de formato sin procesar en los Word | Ninguna |
| Notas internas, comentarios de proceso o contenido de otros casos en los entregables | No se encontraron |
| Diagramas UML | Cinco imágenes generadas y revisadas visualmente; coinciden con el backlog, el modelo BPMN y el código |
| Diagramas de casos de uso y clases recibidos del equipo | Revisados contra el backlog y la especificación: se corrigieron alcances inventados, typos, relaciones sin estereotipo y clases fuera del alcance; las versiones corregidas reemplazaron a las anteriores en `modelado/diagramas/`, en las figuras 5 y 9 del Word y en las diapositivas 8 y 14 del PPT; por acuerdo del equipo el diagrama de casos de uso no dibuja relaciones include o extend entre óvalos |
| Modelo editable de StarUML | `../modelado/Atlantic_City_UML.mdj` con cinco diagramas (casos de uso, clases y tres secuencias); 906 identificadores internos y 1766 referencias, ninguna rota; regenerado con el esquema de contención oficial de StarUML para que los diagramas abran ya ubicados, con el de casos de uso como diagrama inicial |
| Guía de diagramas de secuencia | `../docs/Guia_Diagramas_de_Secuencia_Atlantic_City.md`: lifelines, lectura mensaje por mensaje de las tres secuencias, fragmentos alt, StarUML clic a clic, errores frecuentes y lista de verificación |
| Documento de casos de uso recibido, versión del equipo | `../modelado/Casos_de_Uso_Atlantic_City_version_del_equipo.docx`: misma estructura del original con alcance corregido, secuencia de eventos CU01 con la plantilla del profesor y cinco figuras incrustadas |
| Guía de correcciones UML | `../docs/Guia_Correcciones_UML_Atlantic_City.md`: criterio de corrección, tabla elemento original contra decisión del equipo, lectura del proceso casos de uso, secuencia y clases, y comprobación propia en cinco minutos |

## 4. Prueba de ejecución

| Versión | Carpeta | Puerto | Resultado |
|---|---|---|---|
| MVP | `prototipado/MVP/` | 4173 | Página, hoja de estilos y archivo de comportamiento respondieron 200 |
| Prototipo con navegación | `prototipado/prototipo_navegable/` | 4174 | Página, hoja de estilos y archivo de comportamiento respondieron 200 |
| Prototipo en archivo único | `prototipado/prototipo_navegable/` | 4174 | Respondió 200 |

Recorridos previstos para la prueba manual, descritos en `Guia_Prototipado_y_MVP.md`: en el MVP, cargar un perfil de demostración, registrar una visita y una interacción, registrar una atención con incidencia, guardar una revisión «No aplica» sin constancia y una «Aplica» con constancia local; en el prototipo, recorrer las siete vistas, registrar un cliente, asociarle una visita y una incidencia, consultar los criterios, guardar una clasificación manual, registrar campaña y promoción con ambos resultados de elegibilidad y exportar el CSV local.

## 5. Observaciones

- Los conteos del MVP y del prototipo corresponden a datos de demostración almacenados en el navegador; no son indicadores del negocio.
- El trabajo se limita a la capa de vista. El lenguaje de servidor y el motor de base de datos no están definidos por el sílabo ni por la estructura de entrega para esta etapa; por eso el objeto «Datos» de los diagramas de secuencia se nombra «registro local».
- Los wireframes representan la pantalla de Inicio/Dashboard y no el alcance del MVP sencillo, aunque anticipan la organización del prototipo con navegación.
- Nombres de campos del código en español: `creadoEn`, `identificadorDeCampana`, `identificadorDeElegibilidad` y `registroLocal` en el MVP, el prototipo con navegación y el archivo único; los datos locales guardados con los nombres anteriores se migran al abrir; diagrama de clases, `.mdj`, Word del equipo e informe sincronizados con los mismos nombres.
- Wireframes regenerados por acuerdo del equipo: el manual como boceto a lápiz en blanco y negro y el digital en blanco y negro con línea limpia; las figuras 3 y 4 del Word apuntan a esos archivos del equipo y no a los JPEG recibidos.
- Las reglas de segmentación, elegibilidad, campañas, reportes y automatización continúan pendientes de definición del Product Owner; los diagramas UML no las incluyen.
- En el informe de avance faltan los nombres de los cuatro integrantes, el nombre del docente y la carrera; están marcados entre corchetes en la portada y en la tabla del equipo Scrum para completarlos a mano antes de entregar.
