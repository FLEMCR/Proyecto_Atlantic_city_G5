# Guía del informe de avance — Avance_Atlantic_City.docx

Explica qué contiene el documento, de qué fuente sale cada sección, qué falta por completar a mano y cómo mantenerlo sincronizado con el repositorio hasta la entrega final.

## 1. Qué es y dónde vive

`../informe/Avance_Atlantic_City.docx` es el entregable documental que sigue la estructura propuesta por el profesor: portada más quince puntos, en ese orden. Es el documento que se presenta y se sustenta; el resto del repositorio es el respaldo que permite responder preguntas.

Formato deliberado: fuente Calibri, encabezados numerados, viñetas con negrita inicial, tablas simples con borde y figuras centradas con pie. Sin cuadros decorativos, sin colores de relleno y sin texto repetitivo de relleno. Ese aspecto sencillo es parte del acuerdo del equipo: el documento debe leerse como trabajo propio, no como plantilla generada.

## 2. Contenido sección por sección y su fuente

| Sección | Contenido | Fuente de la que sale |
|---|---|---|
| Portada | Institución, escuela, carrera, curso, título, integrantes, docente, ciclo y año, con el logotipo | `../curso/Atlantic_City_logo.webp` y datos del equipo; carrera, nombres y docente están entre corchetes |
| 1. Descripción del negocio | Empresa, seis gerencias, situación actual, clientes y usuarios | Sílabo (`../curso/Silabo_EFSRT_Desarrollo_Capa_de_Vista.pdf`) |
| 2. Problema del negocio | Problema principal, cinco específicos, consecuencias y objetivo | Sílabo, redactado como un solo problema con derivados |
| 3. Procesos del negocio | Siete procesos con objetivo, participantes y descripción | `../docs/Guia_Principal_Atlantic_City.md` y el modelo BPMN |
| 4. Diagrama en Bizagi | Proceso actual AS IS, descripción de carriles, recorridos, subproceso y notación | `../modelado/Atlantic_city_grupo_cinco.png` y `../modelado/SUBPROCESO.png` |
| 5. Metodología Scrum | Tabla de equipo con PO y cuatro Developers (uno como Scrum Master) y tabla de Sprints | `../docs/Scrum_Guia_Atlantic_City.md` y `../backlog/Product_Backlog_Atlantic_City.md` |
| 6. Product Backlog | Tabla de 13 historias con prioridad y Sprint | `../backlog/Product_Backlog_Atlantic_City.md` |
| 7. Historias de usuario | Las 13 historias con Como/Quiero/Para y criterios de aceptación | El mismo Markdown del backlog |
| 8. Wireframes digitales | Explicación de la pantalla y las dos imágenes | `../../uploads/Wireframe_manual.jpeg` y `../../uploads/Wireframe_digital.jpeg` |
| 9. MVP | Funcionalidades mínimas, bloques de la pantalla, validaciones, datos y límites | `../prototipado/MVP/` dentro de `../prototipado/` y su guía de código |
| 10. Prototipo con navegación | Qué es, recorrido, componentes y límites | `../prototipado/prototipo_navegable/` y su guía de código |
| 11. Implementación mínima | Tecnologías, archivos, validaciones implementadas, datos simulados y lo que no se implementa | `Guia_Desarrollo.md` |
| 12. Casos de uso | Actores y diagrama general | `../modelado/diagramas/Casos_de_uso.png` y `Guia_Modelado_UML_Atlantic_City.md` |
| 13. Descripción de casos de uso | Actores, matriz de trazabilidad HU–CU y CU01 a CU04 con la plantilla «Descripción de Caso de Uso» del profesor (secuencia normal con alternativas, excepciones, rendimiento, frecuencia, importancia, urgencia y comentarios), más reglas de negocio RN01–RN08 y mensajes MSJ01–MSJ25 | `../modelado/casos_de_uso/Especificacion_Casos_de_Uso_Atlantic_City.md`, backlog y cadenas literales del código |
| 14. Diagramas de secuencia | Tres diagramas actor → interfaz → sistema → datos | `../modelado/diagramas/`, archivos `../modelado/diagramas/Secuencia_registrar_cliente.png`, `../modelado/diagramas/Secuencia_registrar_visita.png` y `../modelado/diagramas/Secuencia_evaluar_promocion.png` |
| 15. Diagrama de clases | Diagrama básico de seis clases | `../modelado/diagramas/Clases.png` |
| Cierre | Estado del avance, preparación de la semana 7 y pendientes del Product Owner | `../../REGLAS_Y_DATOS_DEL_PROYECTO.md` |

El orden MVP (9) antes que prototipo (10) sigue la estructura propuesta. En el caso resuelto del profesor el orden es inverso; esa diferencia es consciente y se puede explicar si el profesor la pregunta.

## 3. Marcadores por completar a mano

Antes de entregar, buscar y reemplazar en Word:

1. `[completar]` de la línea de carrera en la portada.
2. `[Completar con los nombres de los cuatro integrantes]` de la portada.
3. `[Completar]` de la línea del docente.
4. `[nombre por completar]` en la fila del Product Owner de la tabla de equipo.
5. `[Integrante 1]` a `[Integrante 4]` en la misma tabla, recordando que el Integrante 1 figura como Scrum Master y Developer; si el equipo rota esa responsabilidad, ajustar el texto de la celda.

Nada más queda pendiente: el resto del documento está completo y verificado.

## 4. Figuras incrustadas y sus originales

| Figura | Archivo original |
|---|---|
| Logotipo de portada | `../curso/Atlantic_City_logo.webp` |
| Figura 1, diagrama principal BPMN | `../modelado/Atlantic_city_grupo_cinco.png` |
| Figura 2, subproceso de segmentación | `../modelado/SUBPROCESO.png` |
| Figura 3, wireframe manual | `../prototipado/wireframe_manual.png`, boceto del equipo en blanco y negro |
| Figura 4, wireframe digital | `../prototipado/wireframe_digital.png`, versión digital del equipo en blanco y negro |
| Figura 5, casos de uso | `../modelado/diagramas/Casos_de_uso.png` |
| Figuras 6 a 8, secuencias | `../modelado/diagramas/Secuencia_registrar_cliente.png`, `../modelado/diagramas/Secuencia_registrar_visita.png`, `../modelado/diagramas/Secuencia_evaluar_promocion.png` |
| Figura 9, clases | `../modelado/diagramas/Clases.png` |

Las imágenes están incrustadas, no vinculadas: el documento viaja solo. Si se redibuja algún diagrama, se reemplaza la imagen dentro del Word para que documento y carpeta `modelado/diagramas/` coincidan.

## 5. Cómo mantenerlo sincronizado

1. **Cambia el backlog** (historias, prioridades o Sprints): actualizar las tablas de los puntos 6 y 7 y la tabla de Sprints del punto 5 desde `../backlog/Product_Backlog_Atlantic_City.md`. El Markdown del backlog, su Word y este informe deben decir lo mismo.
2. **Cambia el modelo BPMN**: reemplazar figuras 1 y 2 y revisar el texto del punto 4, que describe carriles y recorridos tal como están dibujados.
3. **Cambia el código del MVP o del prototipo**: revisar los puntos 9, 10 y 11; en particular las listas de validaciones, que deben coincidir con `Guia_Desarrollo.md`.
4. **Cambia un flujo de un caso de uso**: actualizar en el mismo cambio la especificación de `../modelado/casos_de_uso/`, el punto 13 del informe, el diagrama o secuencia afectado y el catálogo de mensajes si cambió alguna cadena del código.
5. **El Product Owner confirma una regla pendiente**: decidir si entra al alcance; si entra, actualizar procesos, historias, diagramas UML y los puntos afectados. Si no entra, no se toca nada: el documento no presenta pendientes como acuerdos.
6. **Se agregan o retiran actores, casos o clases**: actualizar figuras 5 a 9 y sus párrafos, siguiendo `Guia_Modelado_UML_Atlantic_City.md` y los pasos de StarUML de `Guia_Casos_de_Uso_Atlantic_City.md`.

Regla de oro: el informe nunca se adelanta al repositorio. Todo lo que afirma debe poder señalarse en una carpeta del proyecto.

## 6. Lista de verificación antes de entregar

- Marcadores de portada y tabla de equipo reemplazados; ninguna línea entre corchetes.
- Nombres de integrantes coherentes entre portada, tabla de equipo y registro del equipo.
- Figuras nítidas y con pie; ninguna imagen estirada.
- Tablas de backlog e historias iguales al Markdown del backlog.
- Revisión de ortografía y de que ningún texto afirme integración real, envío de mensajes o reglas no confirmadas.
- Una persona del equipo que no escribió la sección la lee en voz alta: si puede explicarla, está lista para sustentarse.
- Copia de respaldo del documento final en esta misma carpeta con nombre distinto, por si acaso.

## 7. Relación con los otros documentos

- `../backlog/Product_Backlog_Atlantic_City.docx`: versión de presentación del backlog por separado; útil si el profesor pide solo ese artefacto.
- `../docs/`: las guías que sustentan cada sección y preparan las respuestas de la sustentación.
- `../curso/material_complementario/`: plantillas y guías del profesor que fijan el formato de los casos de uso y la notación UML.
- `../../REGLAS_Y_DATOS_DEL_PROYECTO.md`: lista de pendientes del Product Owner y reglas que el informe respeta.
