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
| Especificación de casos de uso | Creada en `modelado/casos_de_uso/`: CU01 a CU04 con datos de entrada y salida, catálogos RN01–RN08, EXC01–EXC07 y MSJ01–MSJ32 |
| Mensajes MSJ contra el código | Los 32 mensajes coinciden con las cadenas literales del MVP, del prototipo y de la aplicación final |
| Material complementario del profesor | Diez PDF copiados a `curso/material_complementario/` con README que explica cada uno y su incorporación |
| Presentación del avance | `../presentacion/Presentacion_Atlantic_City_UML.pptx`: 17 diapositivas, 7 imágenes incrustadas, 5 tablas y notas de orador con guion y tiempos; transición de fundido sencilla |
| PPT reconstruido editable | `../presentacion/Proyectocapavistaatlantic_corregido_editable.pptx`: 22 diapositivas sobre el estilo del original (fondos, esquinas, olas y dorado recuperados del PDF), con las tres correcciones aplicadas, tablas nativas de backlog, sprints y matriz HU–CU, diagramas UML en alta resolución y el Bizagi nítido en siete vistas (completo, subproceso y cinco acercamientos de cada recorrido de inicio a fin) |
| Word del parcial hasta clases | `../informe/Atlantic_City_PARCIAL_G5.docx`: secciones 1 a 10 reconstruidas del PDF del equipo con su mismo estilo (Calibri 11, títulos navy, HU en azul, tablas Table Grid, figuras con leyenda en cursiva) y secciones 11 a 15 tomadas del informe final; correcciones aplicadas: HU-09 con rol correcto («empleado autorizado de Marketing» en vez de «sistema CRM»), acentos de «Salomón Fernández» en la tabla Scrum, texto de 12.2 coherente con el diagrama sin flechas include, figuras renumeradas 1 a 8 y diagramas de Bizagi en alta resolución; verificado bloque por bloque contra el PDF (solo difiere la corrección de HU-09); enlaces clicables a Netlify bajo los títulos de las secciones 9 y 10 (MVP y prototipo), ambos sitios verificados en línea con sus datos de demostración |
| Matriz de trazabilidad completa | Observación de la ficha de evaluación del parcial atendida: la sección 13.2 de `../informe/Atlantic_City_PARCIAL_G5.docx` y la sección 2 de `../modelado/casos_de_uso/Especificacion_Casos_de_Uso_Atlantic_City.md` llevan la matriz HU a caso de uso, reglas, excepciones, secuencia, clases, vistas y Sprint; los números de figura de la especificación se sincronizaron con el informe |
| Bizagi un inicio y un fin | `../modelado/Guia_Bizagi_un_inicio_un_fin.md` con el borrador `../modelado/Boceto_Bizagi_un_inicio_un_fin.png`: estructura objetivo de un solo inicio y un solo fin pedida por el profesor, con paso a paso en Bizagi Modeler y textos de reemplazo para la sección 4; pendiente el redibujo del equipo y el reemplazo del PNG en informe y PPT |
| Plan del final | `Guia_Plan_Final_4_Semanas.md`: Sprints de las semanas 8 a 11 y semana 12 mapeados a los módulos de Atlantic City según la hoja de ruta del profesor, con localStorage siguiendo sus tres PDF (clave jerárquica por módulo, migración, respaldo JSON), roles de programación, ficha semanal y matriz de pruebas |
| Ajuste transversal por Bizagi simplificado | La lectura de inicio único y fin único ya está propagada sin tocar reglas ni backlog: sección 4 del informe reestructurada en 4.1 AS-IS, 4.2 TO-BE, 4.3 descripción con el arranque por compuerta y el cierre único, y 4.4 alcance; guion de exposición (bloque de Luis, bloque de Christian y banco de preguntas), Guía Principal y Guía de Modelado con la misma lectura; el backlog, la especificación de casos de uso y los diagramas UML no cambian porque la simplificación es de forma y no crea ni elimina capacidades |
| Aplicación final | `../aplicacion/ATLANTIC_CITY/`: SPA de siete vistas (inicio, clientes, visitas, incidencias, segmentación, promociones y campañas, reportes) con la estructura de la hoja de ruta; localStorage de clave única `atlantic_city_app_v1` con migración desde las claves del prototipo y del MVP, semilla de demostración marcada (RN08), validaciones con los mensajes literales del catálogo, dashboard dinámico, reportes con filtros y CSV exacto a pantalla, respaldo JSON exportar/importar y restablecer demo; base «ideal» funcional para refinar por sprints |
| Boceto AS-IS | `../modelado/Boceto_Bizagi_AS_IS.png`: borrador de referencia para dibujar el diagrama AS-IS en Bizagi Modeler (un inicio y un fin, proceso actual sin sistema: búsqueda en aplicaciones que no se comunican, recaptura y conciliación manual, atención con la información disponible y registros por área en planillas propias); su texto de acompañamiento es el de la sección 4.1 del informe y su tabla de elementos está en la guía del redibujo |
| Catálogo MSJ ampliado | Mensajes MSJ26 a MSJ32 nacidos del código de la aplicación final (edición de campaña y de promoción, eliminación tras confirmación, respaldo exportado o importado, respaldo inválido, restablecimiento demo y campos obligatorios genéricos); propagados a la sección 6 de la especificación, a la tabla del punto 13.8 del informe (33 filas) y al guion de exposición («son 32»), con los conteos MSJ01–MSJ32 sincronizados en guías y README |
| Guion de exposición | Versión final sencilla y autocontenida para la sustentación: al inicio los cinco catálogos completos con el origen y el uso de cada código (13 HU con prioridad y Sprint, 4 CU con sus historias y actores, 8 RN, 7 EXC y 32 MSJ literales con dónde aparece cada uno) y al final el banco de preguntas del profesor por tema (conceptos, decisiones y porqués, dónde se refleja en MVP y prototipo, organización y alcance); un bloque corrido por expositor sobre el PPT de 22 diapositivas (suma 11:40, dentro del objetivo de 12:00 (el profesor dio hasta 15); el bloque de Luis se pulió a partir de su propio texto y los de Christian, Salomón y Daniel se reescribieron en el mismo estilo hablado. Correcciones de fondo al texto de Luis: el problema es la información repartida entre áreas (no la división del trabajo), los clientes no son usuarios del sistema, los carriles del Bizagi no son el equipo, son cuatro recorridos con inicio propio en un solo pool (no tres procesos aparte), la automatización candidata la prueba la Gerencia de TI solo si el PO la prioriza, el básico es el MVP y el prototipo es el navegable, y el orden del camino es secuencias → clases → wireframes → MVP → prototipo; las tres correcciones del PPT siguen al final del guion |
| Requisitos verificados contra los documentos del curso | La estructura propuesta de quince puntos, el sílabo (Parcial individual 30 % y Final grupal 70 % con demostración del sistema y reflexión) y la Plantilla de Especificación de Casos de Uso del profesor —que trae los identificadores [RN0X], [EXC01] y [MSJ0X]— cubren todo lo que llevan el PPT y el guion; los topes pedidos se respetan: tres secuencias (máximo dos o tres), cuatro casos descritos (pedido tres o cuatro), wireframe solo diseño, MVP mínimo y clases básicas; única desviación justificada: la cuarta lifeline se llama «Datos / registro local» en lugar de «Base de datos» porque no hay backend |
| Guía principal reescrita | `Guia_Principal_Atlantic_City.md` reordenada para entender todo el avance: tabla paso a paso del proyecto (Bizagi → backlog → casos de uso → UML → wireframes → MVP → prototipo → entregables) con dónde vive cada paso, el orden correcto de elaboración y por qué, los cuatro recorridos del pool de Bizagi con el subproceso de segmentación, la cobertura del MVP y del prototipo frente a las trece historias, los códigos del proyecto y las ocho reglas de negocio |
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
| Aplicación final | `aplicacion/ATLANTIC_CITY/` | 8080 | Página, hoja de estilos y los cinco archivos de comportamiento responden 200; humo automatizado con jsdom de 18 escenarios (altas, ediciones, duplicado, incidencias, seguimiento, etiqueta, campañas, promociones, elegibilidad Aplica y No aplica, eliminaciones protegidas, filtros, CSV, respaldo, restablecer y migración): TODO OK |

Recorridos previstos para la prueba manual, descritos en `Guia_Prototipado_y_MVP.md`: en el MVP, cargar un perfil de demostración, registrar una visita y una interacción, registrar una atención con incidencia, guardar una revisión «No aplica» sin constancia y una «Aplica» con constancia local; en el prototipo, recorrer las siete vistas, registrar un cliente, asociarle una visita y una incidencia, consultar los criterios, guardar una clasificación manual, registrar campaña y promoción con ambos resultados de elegibilidad y exportar el CSV local.

## 5. Observaciones

- Los conteos del MVP y del prototipo corresponden a datos de demostración almacenados en el navegador; no son indicadores del negocio.
- El trabajo se limita a la capa de vista. El lenguaje de servidor y el motor de base de datos no están definidos por el sílabo ni por la estructura de entrega para esta etapa; por eso el objeto «Datos» de los diagramas de secuencia se nombra «registro local».
- Los wireframes representan la pantalla de Inicio/Dashboard y no el alcance del MVP sencillo, aunque anticipan la organización del prototipo con navegación.
- Nombres de campos del código en español: `creadoEn`, `identificadorDeCampana`, `identificadorDeElegibilidad` y `registroLocal` en el MVP, el prototipo con navegación y el archivo único; los datos locales guardados con los nombres anteriores se migran al abrir; diagrama de clases, `.mdj`, Word del equipo e informe sincronizados con los mismos nombres.
- Wireframes regenerados por acuerdo del equipo: el manual como boceto a lápiz en blanco y negro y el digital en blanco y negro con línea limpia; las figuras 3 y 4 del Word apuntan a esos archivos del equipo y no a los JPEG recibidos.
- Lo que continúa pendiente de definición del Product Owner son los umbrales y condiciones automáticas de segmentación, elegibilidad, campañas, reportes y automatización (en la app y en los diagramas se resuelven con criterios manuales, sin inventar reglas); los diagramas UML no incluyen esos umbrales. Ese pendiente no es una salida del alcance: la hoja de ruta del profesor lista «promociones» entre los módulos justificados y hasta incluye `promociones.js` en su estructura sugerida, y el proceso del negocio incluye la gestión de promociones, por lo que campañas y promociones se conservan como recorrido propio dentro del proceso único.
- En el informe de avance faltan los nombres de los cuatro integrantes, el nombre del docente y la carrera; están marcados entre corchetes en la portada y en la tabla del equipo Scrum para completarlos a mano antes de entregar.
