# Material complementario del profesor — casos de uso y modelado UML

Diez documentos entregados por el profesor para leer, analizar e incorporar al proyecto en todo lo referido a casos de uso, diagramas de secuencia, diagramas de clases y su elaboración con StarUML. Aquí se conservan copias de consulta; los originales recibidos están, sin modificar, en `../../../uploads/`.

## Qué es cada documento

| Archivo | Tipo | Qué aporta al proyecto |
|---|---|---|
| `Plantilla de Descripción de Caso de Uso.pdf` | Plantilla oficial | El formato con el que se documenta cada caso de uso: identificador y nombre, descripción, actores, precondiciones, postcondiciones, secuencia normal con alternativas numeradas (● 2.1), excepciones, rendimiento, frecuencia, importancia, urgencia y comentarios. |
| `Documentación de Casos de Uso.pdf` | Diapositivas con ejemplo resuelto | Muestra la misma plantilla ya llenada (CU1 Registrar Estudiante) y el recorrido en StarUML para llegar al diagrama. Es la referencia visual de cómo debe quedar una descripción terminada. |
| `Guía para la Elaboración y Presentación de Casos de Uso.pdf` | Guía metodológica | Reglas de redacción: identificadores CU00X, RN0X, FA0X, EXC0X y MSJ0X; nombres iniciados en verbo; cómo escribir flujo básico, flujos alternos, excepciones, mensajes, criterios de aceptación y consideraciones de estilo. Incluye un ejemplo completo (CU002). |
| `Plantilla de Especificación de Casos de Uso.pdf` | Plantilla industrial (DNP) | Estructura de documento de especificación: actores con diagrama, matriz de trazabilidad requerimiento–caso de uso, diagrama, fichas por caso con flujos, reglas de negocio, datos de entrada, datos de salida, prototipos de pantalla, excepciones y mensajes. |
| `PMOInformatica Plantilla de Casos de Uso.pdf` | Plantilla industrial | Ficha de actor (nombre, descripción, características, relación, referencias, atributos) y ficha de caso con curso normal y cursos alternos por número de paso. Complementa la anterior para describir actores. |
| `StarUML Casos de Uso.pdf` | Tutorial de herramienta | Cómo crear el diagrama en StarUML: `Model > Add Diagram > Use Case Diagram` (o clic derecho en el modelo), actores, asunto o sujeto del sistema, casos de uso y asociaciones. |
| `Diagramas de caso de Uso.pdf` | Pautas de dibujo | Reglas de calidad del diagrama: actores con nombre de rol a la izquierda, casos con verbo inicial y nombre descriptivo, casos incluidos a la derecha, herederos debajo, flechas discontinuas para «include» y «extend», asociación actor–caso sin flecha. |
| `Diagramas de Secuencias con StarUML.pdf` | Tutorial con ejemplos | Cómo documentar la secuencia de eventos de cada caso (descripción, actores, precondiciones, postcondiciones, eventos normales, excepciones) y cómo se ve el diagrama en StarUML con lifelines y fragmentos `alt`. |
| `Diagrama de clases.pdf` | Teoría y ejercicios | Estructura de la clase en tres zonas, visibilidad `+ - #`, tipos de relación (asociación, agregación, composición, dependencia, herencia), multiplicidad, buenas prácticas y ejercicios resueltos (tienda, veterinaria, zoológico, biblioteca, centro educativo). |
| `296342524.pdf` | Artículo académico (CUPIDo) | Fundamento de por qué documentar casos de uso con plantilla: encabezado de trazabilidad, hoja de revisión y cuerpo de trece campos. Lectura de respaldo, no cambia el formato elegido. |

## Cómo se incorporó al proyecto

1. **Formato de descripción**: el punto 13 del informe (`../../informe/Avance_Atlantic_City.docx`) y la especificación de `../../modelado/casos_de_uso/` usan la plantilla oficial, con los complementos de la guía metodológica (actores, trazabilidad HU–CU, reglas de negocio RN y mensajes MSJ tomados del código real).
2. **Reglas de dibujo**: los diagramas UML del proyecto se revisaron contra las pautas de `Diagramas de caso de Uso.pdf`; la lista de comprobación está en `../../docs/Guia_Modelado_UML_Atlantic_City.md`.
3. **StarUML**: los pasos para reproducir y verificar cada diagrama (casos de uso, secuencia y clases) están en `../../docs/Guia_Casos_de_Uso_Atlantic_City.md`, sección de StarUML.
4. **Secuencias**: la documentación de eventos por caso (descripción, actores, precondiciones, postcondiciones, eventos normales y excepciones) vive dentro de cada caso de uso de la especificación, igual que en los ejemplos del profesor.
5. **Clases**: las visibilidades y tipos de relación que el equipo debe aplicar al pasar el diagrama a StarUML se indican en la guía UML y en la guía de casos de uso.

## Reglas de uso

- Estos documentos mandan en formato y notación de casos de uso por encima de cualquier costumbre del equipo.
- Lo que sea una regla de negocio del caso Atlantic City sigue viniendo del sílabo y del Product Owner; este material dice cómo documentarla, no cuáles son.
- Si el profesor entrega una versión nueva de alguna plantilla, se reemplaza la copia aquí, se actualiza este README y se revisa el punto 13 del informe.
