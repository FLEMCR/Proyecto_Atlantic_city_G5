# Scrum desde cero — guía para el equipo Atlantic City

**Contexto confirmado:** el profesor es el Product Owner; son cuatro Developers; usarán Jira y Discord; cada Sprint será de una semana y disponen de un máximo de cuatro o cinco Sprints. Esta guía explica el proceso para leerla y consultarla durante el proyecto.

**Modelo de negocio del piloto:** el equipo mantiene un BPMN principal integrado, con cuatro rutas independientes y eventos de inicio de tipos distintos. El subproceso embebido de segmentación se muestra colapsado en esa vista y se explica con sus cinco tareas en un diagrama de detalle independiente. La [Guía principal de Atlantic City] explica los diagramas, las áreas, los detalles técnicos y el glosario. El [Product Backlog] detalla las historias y criterios. El profesor confirma las prioridades del backlog.


La estructura de seis gerencias mencionada en el sílabo se conserva como contexto, pero no implica que todas ejecuten tareas: el BPMN tiene seis carriles y asigna trabajo a cuatro áreas funcionales, además de representar Cliente y Gerencia General/PO como participantes de solicitud/revisión.

## 1. Scrum en una frase

Scrum es un marco de trabajo para construir un producto **por incrementos pequeños**, recibir retroalimentación y adaptar las prioridades. En vez de planificar cada detalle y esperar hasta el final, el equipo acuerda un objetivo para esta semana, crea una parte utilizable, la muestra y aprende qué hacer después.

El ciclo básico es:

```
Backlog priorizado → plan semanal → construir y probar → mostrar incremento
        ↑                                                    ↓
        └──────────── retroalimentación y nuevo orden ────────┘
```

Los principios que lo sostienen son **transparencia** (trabajo visible), **inspección** (revisar producto/avance) y **adaptación** (cambiar plan o prioridad cuando se aprende algo). Jira y Discord ayudan, pero tener esas herramientas no significa por sí solo que se esté trabajando con Scrum.

## 2. Quién hace qué

Scrum define tres responsabilidades. Para su equipo, la asignación inicial es:

### Product Owner — profesor

El PO es responsable de maximizar el valor del producto y ordenar las prioridades. En vuestro caso el profesor confirmó que asumirá este rol. Puede aclarar qué requisitos son más importantes, validar reglas de negocio y dar retroalimentación al revisar el incremento.

El PO **no tiene que asignar cada subtarea técnica** ni asistir a todas las reuniones diarias. El equipo lleva sus preguntas y decisiones de alcance al PO, y el PO mantiene el Product Backlog ordenado. Para automatización, el PO decide si se prioriza y si los resultados reportados por TI justifican aprobarla, pedir ajustes o rechazarla; no se presume aprobación por haber terminado una prueba.

### Developers — cuatro integrantes

Los cuatro Developers son responsables, en conjunto, de construir un Incremento de calidad. Dentro del equipo pueden organizarse temporalmente por interfaz, datos, lógica, pruebas o documentación, pero el resultado pertenece al equipo completo.

**Organización práctica para cuatro Developers:** pueden trabajar en dos parejas para avanzar en paralelo, pero roten las parejas y revisen entre áreas. Por ejemplo, no dejen siempre a las mismas dos personas como únicas responsables de interfaz y a las otras dos como únicas responsables de datos. Reserven revisión cruzada e integración para que los cuatro comprendan el recorrido completo (TRABAJO EN EQUIPO QUE PIDE EL PO).

### Scrum Master — un estudiante facilitador

Uno de los cuatro puede facilitar las reuniones, ayudar a retirar bloqueos y recordar el objetivo del Sprint. El Scrum Master **no es jefe**, no reparte calificaciones y no es la única persona que administra el proyecto. En un equipo pequeño puede también programar o diseñar. No es obligatorio cambiar de Scrum Master cada semana; pero sí conviene rotar quién presenta y explica los módulos para que todos aprendan.

## 3. Las tres piezas principales del trabajo

### Product Backlog — lista priorizada del producto

Es la lista completa, cambiante y ordenada de necesidades, mejoras, errores y trabajo técnico. El PO decide el orden final, y el equipo puede proponer elementos y ayudar a aclararlos.

Ejemplos para Atlantic City:

- buscar o registrar un cliente;
- validar los datos y reducir perfiles duplicados;
- registrar visitas e interacciones;
- consultar el historial;
- segmentar clientes y evaluar si aplica una promoción;
- gestionar incidencias o reportes, si el PO los prioriza.

No es una lista que se debe completar entera antes de la entrega. Es la fuente desde la que se selecciona el trabajo siguiente.

### Sprint Backlog — el plan de esta semana

Al planificar el Sprint, los Developers eligen del Product Backlog una cantidad de trabajo realista y acuerdan cómo abordarla. El Sprint Backlog incluye el **Sprint Goal**, los elementos seleccionados y el plan de trabajo. Se puede ajustar durante la semana al aprender más, sin perder de vista el objetivo.

### Incremento — lo que ya está usable

Es una parte del producto integrada y que cumple el estándar de calidad del equipo (Lo funcional que se tenga hasta el momento). Ejemplo: una vista que permite buscar un cliente ficticio, muestra el perfil correcto y comunica claramente cuando no encuentra resultados.

Una diapositiva, una tarea iniciada o código que nadie puede ejecutar (aún no terminados) no son necesariamente un Incremento terminado.

Cada Sprint debe lograr minimo un incremento.

## 4. El objetivo detrás de cada artefacto



| Artefacto | Compromiso que lo acompaña | Pregunta que responde |

|---|---|---|

| Product Backlog | **Product Goal** | ¿Qué queremos lograr con el producto piloto en general? |

| Sprint Backlog | **Sprint Goal** | ¿Qué resultado importante vamos a conseguir esta semana? |

| Incremento | **Definition of Done** | ¿Qué calidad debe tener el trabajo para considerarse terminado? |

|---|---|---|



### Product Goal sugerido

> Entregar un piloto usable que centralice un perfil y su historial básico y demuestre cómo apoyar una atención consistente y una promoción basada en reglas acordadas.

El profesor confirma o modifica este objetivo.

### Sprint Goal de ejemplo

> Al final de esta semana, el equipo podrá registrar un cliente de prueba y volver a consultar su perfil.

Un Sprint Goal es un resultado compartido; no es simplemente una lista de títulos de Jira.

### Definition of Done (DoD)

Acuerdo común de calidad. Una historia podría estar “Hecha” cuando cumple sus criterios de aceptación, está revisada por otro integrante, probada, integrada, documentada y se puede demostrar. El equipo define el DoD al comenzar y lo mejora si es necesario.

## 5. Cómo escribir y descomponer el trabajo

### Product Backlog Item (PBI)

Es cualquier elemento del Product Backlog: historia de usuario, requisito técnico, bug, prueba o documentación. No todos los PBI tienen que ser historias de usuario.

### Historia de usuario

Formato opcional para explicar una necesidad desde quien la usa:

> Como **[usuario]**, quiero **[objetivo]**, para **[beneficio]**.

**Ejemplo:** Como agente de Servicio al Cliente, quiero buscar el perfil de un cliente para atenderlo con información consistente.

### Criterios de aceptación

Son comprobaciones observables para saber si esa historia funciona como se esperaba. Para la búsqueda anterior:

- si el cliente existe, se muestra el perfil correcto;
- si no existe, se explica que no se encontró y se puede iniciar el alta;
- una búsqueda inválida muestra un mensaje comprensible;
- se usa información ficticia para las pruebas.

### Subtareas

Son pasos técnicos para completar un PBI, por ejemplo: construir el formulario, programar la búsqueda, conectar datos, probar y documentar. Terminar una subtarea no necesariamente significa que la historia ya esté terminada.

### Refinamiento

Actividad continua para aclarar los elementos que pronto podrían planificarse: objetivo, criterios, dependencias, dudas y tamaño. No es obligatorio preparar o estimar todo el producto desde el inicio.

## 6. Un Sprint de una semana, paso a paso

Los tiempos de reunión de abajo son sugerencias para el curso, no tiempos obligatorios del marco Scrum. Ajusten al horario real.

### 1) Refinar el Product Backlog

El PO y el equipo revisan elementos próximos. Ejemplo: antes de hacer un formulario de cliente, acordar campos obligatorios e identificador de búsqueda. Las decisiones de negocio se preguntan al PO; las decisiones técnicas se discuten en el equipo.

### 2) Sprint Planning — planificar

Al inicio de la semana, sugerencia de 45–90 minutos:

1. Revisar prioridades con el PO.
2. Decidir por qué el Sprint importa y escribir el Sprint Goal.
3. Seleccionar lo que el equipo puede completar con su disponibilidad real.
4. Aclarar criterios de aceptación y descomponer subtareas.
5. Acordar qué se probará y quién revisará.

No se deben seleccionar todas las tareas pendientes ni comprometer más de lo que cuatro Developers pueden terminar con calidad.

### 3) Trabajo y Daily Scrum

Durante los días de trabajo, actualicen Jira, desarrollen, integren cambios y prueben de manera gradual. El **Daily Scrum** dura como máximo 15 minutos y los Developers inspeccionan el avance hacia el Sprint Goal y adaptan su plan.

Pueden comentar: avance, siguiente paso y bloqueo. Las tres preguntas son una forma de hacerlo, no un requisito. Si no pueden reunirse por voz, acuerden un check-in escrito corto como adaptación del equipo. Discord ayuda a coordinar; los cambios de alcance importantes se registran en Jira.

### 4) Sprint Review — mostrar y aprender

Al final de la semana, sugerencia de 30–60 minutos. Demuestren una parte **ejecutable** al profesor/PO y al equipo. Escuchen comentarios y actualicen prioridades. La Review no debería ser solo una presentación de diapositivas ni una aceptación automática de cada tarjeta. Si el Sprint incluye automatización, TI presenta el reporte y los resultados de sus pruebas; el PO valida ahí la decisión de aprobar, solicitar ajustes y una nueva prueba, o rechazar definitivamente. Hasta que exista aprobación explícita, la automatización no se activa ni se declara aceptada.

### 5) Sprint Retrospective — mejorar como equipo

Después de la Review, sugerencia de 30–45 minutos. Conversen:

- ¿Qué ayudó a avanzar?
- ¿Qué nos hizo perder tiempo o bloqueó el trabajo?
- ¿Qué acción pequeña probará el equipo la próxima semana?

Registrar una o dos acciones concretas en Jira. La conversación busca mejorar el sistema de trabajo, no culpar a una persona.

### 6) Cerrar el Sprint y empezar el siguiente

Lo que no cumple los criterios **no se marca como Hecho**. Vuelve al Product Backlog y el PO decide su prioridad futura. En el próximo Planning el equipo vuelve a elegir el trabajo posible.

## 7. Ejemplo completo: segmentación y decisión del PO sobre automatización

### Historia de segmentación: AC-PBI-24 y AC-PBI-12

1. **Product Backlog:** el PO confirma la prioridad y las reglas de AC-PBI-11; AC-PBI-24 consulta frecuencia de visitas, nivel de gasto, preferencias de juegos e historial de promociones; AC-PBI-12 asigna/consulta el segmento con esos criterios.

2. **Refinamiento:** el equipo identifica qué datos ficticios estarán disponibles. Si faltan reglas o datos, lo registra como pregunta; no crea umbrales o pesos propios.

3. **Sprint Planning:** si el objetivo semanal lo permite, se selecciona la consulta y la clasificación como parte de «Segmentación de clientes».

4. **Desarrollo en Jira:** se detallan las cinco tareas secuenciales del subproceso: consultar cada uno de los cuatro criterios y, luego, segmentar al cliente.

5. **Pruebas:** se revisan datos completos y faltantes. El resultado se compara con el criterio aprobado por el PO; cuando no haya una regla aprobada, se informa que no se puede asignar segmento.

6. **Done:** se completa cuando los criterios observables, la revisión cruzada, la documentación y la evidencia cumplen la Definition of Done.

7. **Review:** el equipo demuestra la vista principal con el subproceso colapsado y el detalle de la secuencia de cinco tareas. El PO comenta y actualiza prioridades si corresponde.

### Historia condicionada de automatización: AC-PBI-19

1. **Priorización:** el profesor decide si la automatización entra al Product Backlog seleccionado y concreta tarea, entradas, reglas, excepciones y resultado esperado.

2. **Construcción y prueba:** TI configura la alternativa aprobada y prueba resultados normales y de error; la simulación se identifica como tal.

3. **Reporte:** TI presenta al PO el informe de resultados y evidencias.

4. **Sprint Review:** el PO valida el resultado y decide: aprobar; pedir ajustes para volver a definir y probar; o rechazar definitivamente.

5. **Después de la Review:** solo con aprobación explícita se continúa a «Activar y monitorear». Con ajustes se devuelve al ciclo de definición/prueba; con rechazo definitivo no se activa y se registra el cierre/repriorización en Jira.

La prueba técnica y la aprobación del PO son decisiones distintas. Si el PO no prioriza la automatización, el equipo no debe inventar una selección ni presentar su implementación como comprometida.

## 8. Cómo organizar Jira y Discord

### Jira: fuente de verdad para el trabajo

Un tablero sencillo puede tener `Backlog → Seleccionado → En curso → Revisión → Pruebas → Hecho`. En cada tarjeta registren título, objetivo, criterios de aceptación, prioridad, dependencia, responsable y revisor. Si usan estimaciones, acuerden una técnica; Story Points, Fibonacci o Planning Poker son opcionales y no miden productividad individual.

El archivo `Product_Backlog_Guia_Atlantic_City` es un borrador para iniciar esta lista. El profesor debe confirmarlo y ordenarlo.

### Discord: espacio de comunicación

Si una decisión se tomó por Discord, anótenla también en Jira o documentación. Así quien no estuvo en la conversación puede encontrarla.

## 9. Plan tentativo de cuatro o cinco Sprints semanales

Las metas actuales se conservan; los PBIs son una propuesta de planificación y se seleccionan según la prioridad del PO y la capacidad real de los cuatro Developers. Las funciones complementarias se toman solo si el profesor las ordena para el piloto.



| Sprint | Sprint Goal actual | Plan y lista priorizada propuesta |

|---|---|---|

| **1. Entender y diseñar** | Entender el problema y acordar el diseño del piloto. | AC-PBI-01–04: alcance, BPMN principal con inicios de distinto tipo, subproceso de segmentación colapsado y diagrama de detalle, pantallas iniciales y modelo lógico. |

| **2. Perfil de cliente** | Poder buscar, registrar y consultar un perfil ficticio. | AC-PBI-05–08: navegación, búsqueda, alta/validación y ficha/historial inicial; pruebas y documentación desde el Sprint. |

| **3. Visitas e historial** | Registrar visita/historial y demostrar la decisión de promoción sí/no. | AC-PBI-09–14 y AC-PBI-24 según capacidad: visita/interacción, preferencias, consulta de los cuatro criterios, asignación de segmento, elegibilidad y promoción; pruebas de cada ruta. |

| **4. Complemento prioritario** | Entregar la función complementaria de mayor prioridad e integrar. | El PO escoge entre AC-PBI-15/16 (incidencias), AC-PBI-17 (campañas), AC-PBI-18 (reportes) o AC-PBI-19 (automatización). Para AC-PBI-19, reservar Review para informe y decisión PO; mantener trabajo de pruebas/documentación. |

| **5. Validar y presentar (si se dispone)** | Validar, corregir, documentar y presentar una versión candidata. | AC-PBI-20–23 y pendientes priorizados: correcciones, recorrido integrado, evidencia, demo y cierre. Si solo hay cuatro semanas, integrar validación en Sprint 4 y reducir funciones complementarias según acuerdo PO, no quitar pruebas silenciosamente. |

|---|---|---|



Con cuatro Sprints, planifiquen para que el Sprint 4 incluya el trabajo de validación y demo. Un quinto Sprint es contingencia permitida por el calendario, no un requisito. Los Developers seleccionan trabajo realista; no se comprometen con los PBIs por el mero hecho de que aparezcan en el backlog.

## 10. Glosario rápido

- **PO / Product Owner:** ordena prioridades y aclara valor/necesidades; en este equipo, el profesor.

- **SM / Scrum Master:** facilita Scrum y ayuda con bloqueos; no es jefe.

- **Developers:** los cuatro integrantes que producen el incremento.

- **Product Backlog:** lista priorizada del producto completo.

- **Sprint Backlog:** objetivo, trabajo seleccionado y plan de la semana.

- **Sprint Goal:** resultado común que guía el Sprint.

- **Incremento:** parte usable y comprobada del producto.

- **Criterios de aceptación:** condiciones que debe cumplir una historia.

- **Definition of Done:** estándar de calidad compartido para marcar trabajo Hecho.

- **Impedimento:** bloqueo que frena al equipo y debe hacerse visible.

- **Stakeholder/interesado:** persona o área que puede aportar necesidades o comentarios; no necesariamente es PO.

## 11. Regla para que los cuatro conozcan el proyecto

Repartir tareas está bien; formar silos, no. Cada historia importante debe tener un revisor distinto, al menos dos personas deben saber ejecutar cada módulo, y cada semana debe cambiar quién explica una parte en la demo. Todos deberían poder describir el problema, el recorrido principal, cómo se conectan interfaz/lógica/datos, qué se probó y qué limitaciones quedan.
