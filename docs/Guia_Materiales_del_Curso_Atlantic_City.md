# Guía de materiales del curso — qué aporta cada documento y dónde se usó

Digesto de lectura de todo el material entregado por el profesor, en el orden en que el proyecto lo va necesitando: desde comprender el problema antes de tocar cualquier herramienta, pasando por Bizagi y el backlog, hasta los casos de uso, las secuencias y las clases en StarUML. Cada ficha dice qué es el documento, qué ideas deja y en qué parte del proyecto se usó, para que cualquier integrante pueda absorber el tema y responder sin brechas.

Cómo usarla: leer la ficha antes de abrir el PDF completo; abrir el PDF cuando haya que citar o copiar formato; y cerrar el ciclo leyendo la guía del proyecto que corresponde a esa etapa.

## Etapa 1 — Entender el curso y el problema, antes de cualquier herramienta

### Sílabo EFSRT (`../curso/Silabo_EFSRT_Desarrollo_Capa_de_Vista.pdf`)
- **Qué es:** el documento que define el caso Atlantic City, las funciones básicas de la solución, las gerencias involucradas, la metodología ABP, las fases y la evaluación.
- **Ideas clave:** el problema es información de clientes dispersa en varios sistemas, con duplicidades, sin historial unificado y con dificultad para analizar resultados a tiempo; la solución esperada es un sistema que unifique perfil, visitas, preferencias e interacciones y apoye promociones; el curso trabaja por ABP: el equipo aprende resolviendo el caso, no memorizando; la evaluación combina parcial individual y final grupal.
- **Dónde se usó:** puntos 1 y 2 del informe, sección de contexto de `Guia_Principal_Atlantic_City.md` y regla de que el sílabo manda sobre cualquier suposición del equipo.

### Introducción al ABP y comprensión del problema (`../../uploads/Introducción al ABP y comprensión del problema.pdf`)
- **Qué es:** diapositivas que explican qué es un proyecto de software, qué problemas resuelve una aplicación web y cómo acotar alcance.
- **Ideas clave:** un proyecto de software incluye análisis, programación, diseño, base de datos, pruebas, documentación y trabajo en equipo; una aplicación web ataca desorganización, procesos manuales, pérdida de datos, demoras, falta de reportes y mala comunicación entre áreas; diseñar la solución exige separar el problema del negocio de la tecnología que lo atenderá.
- **Dónde se usó:** la redacción del problema principal, los problemas específicos y las consecuencias del punto 2 del informe sigue esa separación problema/consecuencia/objetivo.

## Etapa 2 — Saber exactamente qué se entrega

### Estructura propuesta del trabajo (`../../uploads/Estructura propuesta del trabajo.pdf`)
- **Qué es:** la lista de los quince puntos que debe tener el informe, con el detalle mínimo de cada uno.
- **Ideas clave:** portada con institución, carrera, curso, título, integrantes, docente, ciclo y año; problema principal único con 3 a 5 específicos, consecuencias y objetivo; procesos con nombre, objetivo, participantes y descripción; Bizagi AS IS exigido; Scrum demostrado con equipo y Sprints, no con teoría memorizada; wireframes, MVP y prototipo con navegación como evidencias de diseño; implementación mínima con formularios, validaciones y datos simulados; cierre con casos de uso, secuencias y clases.
- **Dónde se usó:** el índice completo de `../informe/Avance_Atlantic_City.docx` y la tabla de correspondencia del README raíz; el orden wireframes → MVP → prototipo viene de aquí.

### Caso.pdf y CasoResuelto.pdf (`../../uploads/`)
- **Qué es:** un caso de ejemplo de otro dominio y su versión resuelta por el profesor.
- **Ideas clave:** el resuelto muestra el nivel de sencillez esperado: documento directo, tablas simples, figuras con pie, sin adornos; también muestra cómo se describen procesos, cómo se presenta el backlog y cómo se narran MVP y prototipo.
- **Dónde se usó:** como referencia de formato del Word; por acuerdo del equipo no se copia contenido ni orden distinto al de la estructura propuesta.

### Desarrollo del caso de estudio (`../../uploads/Desarrollo del caso de estudio.pdf`)
- **Qué es:** el ejercicio guiado del profesor con el caso biblioteca: procesos narrados, equipo Scrum y backlog.
- **Ideas clave:** de la narración del proceso salen los procesos y subprocesos; el PO es quien conoce el flujo y las prioridades; el Scrum Master facilita y elimina obstáculos; el backlog es una lista priorizada de características con valor de negocio.
- **Dónde se usó:** como espejo del método aplicado a Atlantic City: narrar los siete procesos del punto 3 y armar el equipo con el profesor como PO.

## Etapa 3 — Modelar el proceso en Bizagi

### Procesos Atlactic.pdf (`../../uploads/Procesos Atlactic.pdf`)
- **Qué es:** la propuesta de proceso macro y subprocesos de Atlantic City: gestión de clientes, segmentación, promociones y atención al cliente, con sus tareas.
- **Ideas clave:** registrar, actualizar y consultar perfil son subprocesos de gestión de clientes; la segmentación consulta frecuencia, gasto, preferencias y promociones anteriores antes de asignar segmento; las promociones se crean, se personalizan por segmento y se registran al enviarse; la atención registra solicitudes y atiende incidencias.
- **Dónde se usó:** es la base del diagrama BPMN de `../modelado/` y de los siete procesos del punto 3; los cuatro criterios de segmentación del código salen de esta tabla. Ojo: lo que aquí aparece como automatizable no está implementado; solo lo acordado con el PO vive en el MVP y el prototipo.

### Bizagi Modeler.pdf (`../../uploads/Bizagi Modeler.pdf`)
- **Qué es:** introducción a proceso (secuencialidad, entradas y salidas, objetivo, repetitividad, interconexión) y al modelador con el ejemplo de Solicitud de Compras.
- **Ideas clave:** un proceso se diagrama con eventos, tareas, compuertas de decisión y carriles por participante; las decisiones abren caminos (aprobar, rechazar, pedir cambios); el modelo AS IS describe cómo se trabaja hoy, no cómo debería trabajarse.
- **Dónde se usó:** la notación y el recorrido del diagrama de `../modelado/Atlantic_city_grupo_cinco.png`, explicado en `Guia_Modelado_Bizagi_Atlantic_City.md`, que también indica cómo reconstruirlo y cómo exportarlo a BPMN 2.0 para compartirlo como texto.

## Etapa 4 — Organizar el trabajo: backlog e historias

### Biblioteca_ProductoBacklog.pdf (`../../uploads/Biblioteca_ProductoBacklog.pdf`)
- **Qué es:** ejemplo completo de Product Backlog generado para el caso biblioteca: HU con identificador, nombre, formato Como/Quiero/Para, criterios de aceptación, prioridad, cuatro Sprints de una semana y lista priorizada.
- **Ideas clave:** la estructura de cada historia es fija y comprobable; los Sprints agrupan historias que entregan valor cerrado; la lista final ordenada por prioridad es la que manda al planear.
- **Dónde se usó:** `../backlog/Product_Backlog_Atlantic_City.md` replica exactamente esa estructura con las 13 HU de Atlantic City y sus cuatro Sprints.

### DE las HU a los RF o viceversa (`../../uploads/DE las HU a los RF o viceversa.pdf`)
- **Qué es:** comparación entre historia de usuario y requerimiento funcional y el orden típico en metodologías ágiles.
- **Ideas clave:** en ágil la secuencia es necesidad → historia → requerimientos funcionales → desarrollo; la historia expresa el valor de negocio y el requerimiento detalla qué debe hacer el sistema; una historia puede derivar varios requerimientos.
- **Dónde se usó:** los criterios de aceptación de cada HU y las validaciones del código son los requerimientos derivados; la matriz HU → caso de uso de `../modelado/casos_de_uso/` es el mismo puente visto desde el análisis.

## Etapa 5 — Diseñar pantallas antes de programarlas

### Wireframes y prototipos de baja fidelidad (`../../uploads/Wireframes y prototipos de baja fidelidad.pdf`)
- **Qué es:** definición de wireframe (estructura, distribución, navegación; sin colores ni detalles) y de prototipo de baja fidelidad mínimamente funcional en HTML, CSS y JS.
- **Ideas clave:** primero la estructura, después lo bonito; el wireframe valida la idea rápido; el prototipo de navegación demuestra el flujo entre pantallas.
- **Dónde se usó:** los dos wireframes de `../prototipado/` (manual y digital de la misma pantalla) y la distinción entre MVP de una pantalla y prototipo de siete vistas; el PDF también ubica la semana de trabajo: antes de wireframes hubo diagrama de clases, lo que explica por qué las clases del punto 15 coinciden con los datos del código.

### HTML de ejemplo del profesor (`../../uploads/Atlantic_City_MVP.html`, `../../uploads/mvp.html`, `../../uploads/Paneando_Ando_MVP.html`, `../../uploads/PrototipoPaneando.html`)
- **Qué es:** implementaciones de ejemplo para observar organización de código y patrones de interfaz.
- **Ideas clave:** un MVP puede ser una sola página con formulario y resumen; separar HTML, CSS y JS aunque el proyecto sea pequeño; los datos de demo permiten recorrer el flujo sin backend.
- **Dónde se usó:** solo como referencia de patrones; el código del equipo se escribió desde cero para Atlantic City y no reutiliza productos ni reglas de esos ejemplos.

## Etapa 6 — Casos de uso: el material de la segunda entrega

### Diagramas de caso de Uso.pdf
- **Qué es:** pautas de dibujo del diagrama de casos de uso: cuatro objetos (actor, caso, sistema, paquete) y reglas de calidad.
- **Ideas clave:** actores con nombre de rol y principales a la izquierda; casos con verbo inicial y nombre descriptivo, en orden lógico; incluidos a la derecha del que los invoca; herederos debajo; `<<include>>` y `<<extend>>` con flecha discontinua (extend apunta al caso base); asociación actor–caso sin flecha; los actores no interactúan entre actores.
- **Dónde se usó:** checklist de revisión de `../modelado/diagramas/Casos_de_uso.png` y sección 8 de `Guia_Modelado_UML_Atlantic_City.md`.

### StarUML Casos de Uso.pdf
- **Qué es:** recorrido por StarUML: crear el diagrama, agregar actores, el asunto o sujeto del sistema, los casos y las asociaciones.
- **Ideas clave:** el diagrama se crea con `Model > Add Diagram > Use Case Diagram` o clic derecho en el modelo; el subject delimita la frontera del sistema; todo lo que queda fuera del rectángulo es entorno o pendiente.
- **Dónde se usó:** sección 7.1 de `Guia_Casos_de_Uso_Atlantic_City.md`, con los pasos exactos para que el equipo reproduzca el diagrama del proyecto.

### Documentación de Casos de Uso.pdf
- **Qué es:** dos cosas en uno: el mismo recorrido StarUML y la plantilla de descripción ya llenada (CU1 Registrar Estudiante) con secuencia normal, excepciones, rendimiento, frecuencia e importancia.
- **Ideas clave:** la descripción terminada se ve como una tabla única con tablas anidadas para secuencia y excepciones; la frecuencia y la importancia se declaran, no se omiten; las excepciones se escriben como «en el caso de que… el sistema deberá…».
- **Dónde se usó:** es el espejo directo del punto 13 del informe y de las fichas de `../modelado/casos_de_uso/Especificacion_Casos_de_Uso_Atlantic_City.md`.

### Plantilla de Descripción de Caso de Uso.pdf
- **Qué es:** la plantilla en limpio: identificador y nombre, descripción (quién, por qué, qué obtendrá), actores, precondiciones, postcondiciones, secuencia normal con alternativas ● X.X, excepciones, rendimiento, frecuencia, importancia, urgencia y comentarios.
- **Ideas clave:** las precondiciones se asumen ciertas y no se revalidan en el flujo; las alternativas se numeran ancladas al paso que las origina; importancia y urgencia tienen valores cerrados ({vital, importante, quedaría bien} y {inmediatamente, hay presión, puede esperar}).
- **Dónde se usó:** formato único de los CU01 a CU04 en informe y especificación; la tabla campo por campo de `Guia_Casos_de_Uso_Atlantic_City.md` explica cómo llenar cada uno aquí.

### Guía para la Elaboración y Presentación de Casos de Uso.pdf
- **Qué es:** la guía metodológica con identificadores y reglas de redacción, más un ejemplo completo (CU002 Registrar Novedad).
- **Ideas clave:** CU00X único y nombre con verbo de proceso; RN0X para reglas que existen fuera del software; FB con primer paso que inicia y último que cierra; FA0X numerado X.X que indica de dónde sale y a dónde vuelve; EXC0X y MSJ0X normalmente a nivel de sistema porque se reutilizan; criterios de aceptación que cubren también flujos alternos y excepciones; describir el qué, nunca el cómo ni la interfaz.
- **Dónde se usó:** los catálogos RN01–RN08, EXC01–EXC07 y MSJ01–MSJ25 de la especificación y del punto 13; los MSJ son las cadenas reales del código, lo que convierte a la especificación en prueba ejecutable.

### Plantilla de Especificación de Casos de Uso.pdf y PMOInformatica Plantilla de Casos de Uso.pdf
- **Qué son:** plantillas industriales de documento de especificación: control de versiones, actores con ficha y diagrama, matriz de trazabilidad requerimiento–caso, ficha por caso con flujo básico y alternos, reglas de negocio, datos de entrada, datos de salida, prototipos de pantalla, excepciones y mensajes.
- **Ideas clave:** la trazabilidad requisito–caso es el puente que evita casos huérfanos o requisitos sin diseño; los datos de entrada se describen campo por campo con tipo, tamaño, obligatoriedad y validaciones; los mensajes se catalogan una sola vez a nivel de sistema.
- **Dónde se usó:** las secciones de actores, matriz HU–CU y datos de entrada/salida de la especificación; la ficha de actor con características y referencias viene de PMO.

### 296342524.pdf (artículo CUPIDo)
- **Qué es:** paper académico que propone y valida una plantilla integradora de casos de uso para análisis y diseño.
- **Ideas clave:** documentar con plantilla es un acuerdo de comunicación entre cliente, usuarios y desarrolladores; el encabezado con versión y estado y la hoja de revisión dan trazabilidad del documento mismo; ninguna plantilla es definitiva: se mejora con retroalimentación.
- **Dónde se usó:** como fundamento de mantener control de versiones y hoja de revisión en la especificación; no cambia el formato elegido, que es el del profesor.

## Etapa 7 — Secuencias y clases en StarUML

### Diagramas de Secuencias con StarUML.pdf
- **Qué es:** seis casos documentados (iniciar sesión, registrar, consultar, actualizar estudiante, consultar curso, asignar a curso) con su secuencia de eventos y excepciones, y las capturas del diagrama en StarUML.
- **Ideas clave:** antes del diagrama se documenta descripción, actores, precondiciones, postcondiciones, eventos normales y excepciones; el diagrama usa lifelines de actor, interfaz, sistema y base de datos, mensajes numerados y fragmentos `alt` para las ramas; las excepciones del texto son las regiones del `alt`.
- **Dónde se usó:** la estructura de cuatro lifelines de las figuras 6 a 8 del informe (con «Datos (registro local)» en lugar de base de datos, porque no hay base central) y la documentación por caso dentro de cada ficha de la especificación.

### Diagrama de clases.pdf
- **Qué es:** teoría y ejercicios: clase en tres zonas, visibilidad `+ - #`, relaciones (asociación, agregación, composición, dependencia, herencia), multiplicidad, buenas prácticas y enunciados resueltos (tienda, veterinaria, zoológico, biblioteca, centro educativo).
- **Ideas clave:** las clases salen de los sustantivos del dominio; primero estructura y cardinalidades, después atributos y operaciones; agregar o componer depende del ciclo de vida de las partes; la herencia es «es un»; diagramas pequeños y sin cruces antes que uno gigante.
- **Dónde se usó:** `../modelado/diagramas/Clases.png` (seis clases con atributos del código y asociaciones con multiplicidad) y la sección 7.3 de `Guia_Casos_de_Uso_Atlantic_City.md`, que indica añadir visibilidad y operaciones reales al pasarlo a StarUML.

## Mapa de conceptos del curso

| Concepto | En una línea | Dónde vive en el proyecto |
|---|---|---|
| Problema de negocio | Información dispersa, duplicada y sin historial unificado que impide atender y analizar a tiempo | Punto 2 del informe |
| Proceso AS IS | Cómo se trabaja hoy en Atlantic City, con sus carriles y decisiones | `../modelado/` y su guía Bizagi |
| Historia de usuario | Necesidad con valor de negocio en formato Como/Quiero/Para con criterios | `../backlog/` |
| Requerimiento funcional | Detalle de qué hace el sistema, derivado de la historia | Criterios de aceptación y validaciones del código |
| Caso de uso | Recorrido observable actor–sistema con secuencia, alternativas y excepciones | `../modelado/casos_de_uso/` y punto 13 |
| Regla de negocio RN | Política que existe fuera del software y el sistema respeta | Catálogo RN01–RN08 |
| Mensaje MSJ | Texto exacto que el sistema muestra al usuario | Catálogo MSJ01–MSJ25, igual al código |
| Wireframe | Estructura de pantalla sin estética | `../prototipado/wireframe_manual.png` y `../prototipado/wireframe_digital.png` |
| MVP | Mínimo recorrido funcional demostrable | `../prototipado/MVP/` |
| Prototipo con navegación | Pantallas conectadas que demuestran el flujo | `../prototipado/prototipo_navegable/` |
| Diagrama de secuencia | El caso de uso visto en el tiempo entre lifelines | Figuras 6 a 8 del informe |
| Diagrama de clases | Los sustantivos del dominio con atributos y relaciones | Figura 9 del informe |

## Cómo estudia el equipo este material

1. Cada integrante lee una etapa completa de esta guía y el PDF correspondiente, y prepara tres preguntas que le haría al profesor.
2. En la reunión siguiente, quien leyó explica el tema al resto en cinco minutos sin mirar el PDF; los demás preguntan hasta cerrar brechas.
3. Las preguntas simuladas de sustentación mezclan etapas: «¿de qué PDF sale este formato?», «¿qué regla del sílabo limita esta función?», «¿qué mensaje del código prueba esta excepción?».
4. Tener el Bizagi terminado implica conocer los procesos; tener la especificación terminada implica conocer los recorridos; tener el código explicado implica conocer las validaciones. Las tres afirmaciones deben poder defenderse por los cuatro integrantes.

## Reglas de oro del material

- El sílabo y el Product Owner definen **qué** existe; los materiales de formato definen **cómo se documenta**; nunca al revés.
- Un PDF de ejemplo de otro dominio (biblioteca, nómina, estudiantes) aporta formato y método, jamás reglas de negocio de Atlantic City.
- Si el profesor entrega una versión nueva de una plantilla, se actualiza la copia en `../curso/material_complementario/`, su README, esta guía y el formato afectado del informe en el mismo cambio.
