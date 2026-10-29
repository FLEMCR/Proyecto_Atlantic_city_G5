# Documentación del proyecto

Aquí viven **todas las guías del proyecto**, juntas para encontrarlas a la primera, más el registro de verificación. Cada guía cubre un frente del trabajo y todas usan el mismo vocabulario del modelo BPMN, del backlog y de la especificación de casos de uso.

## Orden de lectura sugerido

| # | Guía | Para qué sirve |
|---|---|---|
| 1 | `Guia_Materiales_del_Curso_Atlantic_City.md` | Digesto de todos los PDF del curso: qué es cada uno, qué ideas deja y dónde se usó, desde el ABP y el problema hasta Bizagi, backlog, wireframes, casos de uso, secuencias y clases en StarUML |
| 2 | `Guia_Principal_Atlantic_City.md` | Contexto del negocio, problema, funciones, participantes del proceso, reglas que no se deben romper y correspondencia con la estructura de entrega |
| 3 | `Product_Backlog_Guia_Atlantic_City.md` | Cómo leer y refinar una historia, prioridades vigentes, secuencia de capacidades y plan de Sprints |
| 4 | `Scrum_Guia_Atlantic_City.md` | Roles, ceremonias, artefactos, Definition of Done, pruebas y cómo evitar pérdida de información entre los cuatro Developers |
| 5 | `Guia_Modelado_Bizagi_Atlantic_City.md` | Proceso AS IS, carriles, recorridos, subproceso de segmentación, notación, guion de exposición y exportación a BPMN 2.0 |
| 6 | `Guia_Modelado_UML_Atlantic_City.md` | Cómo se construyeron y cómo se leen los diagramas UML, su alineación con el material del curso y qué no se debe afirmar con ellos |
| 7 | `Guia_Casos_de_Uso_Atlantic_City.md` | Plantilla del profesor campo por campo, identificadores CU/RN/FA/EXC/MSJ, trazabilidad con backlog y código, y StarUML paso a paso |
| 8 | `Guia_Prototipado_y_MVP.md` | Wireframes, recorrido del MVP, vistas del prototipo, datos de demostración y pruebas manuales |
| 9 | `Guia_Codigo_MVP.md` | Código del MVP función por función, reglas embebidas, validaciones y patrones reutilizables en otros proyectos |
| 10 | `Guia_Codigo_Prototipo_Navegable.md` | Código del prototipo: navegación entre vistas, renders, formularios, exportación CSV y patrones reutilizables |
| 11 | `Guia_Desarrollo.md` | Arquitectura de la capa de vista, semántica HTML, CSS adaptable, JavaScript del navegador y validaciones implementadas |
| 12 | `Guia_Informe_de_Avance.md` | Qué contiene cada sección del Word, de qué fuente sale, marcadores por completar y cómo mantenerlo sincronizado |
| 13 | `Guia_Diagramas_de_Secuencia_Atlantic_City.md` | Qué muestra una secuencia, las cuatro lifelines y su significado, lectura mensaje por mensaje de CU01 a CU03, fragmentos alt, StarUML clic a clic, errores frecuentes y verificación |
| 14 | `Guia_Correcciones_UML_Atlantic_City.md` | Criterio de corrección, tabla de cambios frente al documento y los diagramas recibidos, lectura del proceso casos de uso, secuencia y clases, y comprobación propia |
| 15 | `Registro_de_verificacion.md` | Comprobaciones ejecutadas sobre código, documentos y ejecución, con su resultado |

## Documentos de trabajo que no son guías

Viven junto a su material, no aquí:

- `../modelado/casos_de_uso/Especificacion_Casos_de_Uso_Atlantic_City.md`: fichas CU01 a CU04 con la plantilla del profesor, datos de entrada y salida, catálogos RN, EXC y MSJ.
- `../curso/material_complementario/`: los PDF del profesor sobre casos de uso, secuencias, clases y StarUML, con su README de incorporación.
- `../presentacion/`: PPT de la exposición y guion literal por expositor, con tiempos, mapa de imágenes y preguntas probables.
- `../backlog/Product_Backlog_Atlantic_City.md`: fuente de consulta de las historias.

## Reglas de esta carpeta

1. Toda guía nueva o movida se registra en la tabla de arriba y en el índice del README raíz.
2. Si un acuerdo nuevo cambia una regla de producto, se actualizan aquí la guía afectada y, si corresponde, el informe, el backlog y la especificación de casos de uso. Ningún acuerdo queda solo en Discord o en una conversación.
3. Las guías se citan por su nombre dentro de `docs/`; desde otras carpetas se cita la ruta relativa a docs/ (../docs/ o ../../docs/) según la profundidad.
4. Antes de cada entrega se revisa el `Registro_de_verificacion.md` y se agregan las comprobaciones nuevas.
