# Product Backlog Guía — Atlantic City

## 1. Objetivo de producto

> Entregar un piloto CRM comprensible y demostrable que centralice perfiles e historial básico, apoye la atención al cliente y permita mostrar segmentación, promociones, reportes y una posible automatización según lo que priorice el PO.

La capa de vista tiene prioridad académica. HTML, CSS y JavaScript describen la interfaz; la rúbrica y el docente determinan cuánto backend Python y persistencia SQL Server se exige. Los datos de pruebas serán ficticios. No se afirmará que existe una integración con sistemas reales de Atlantic City cuando sea una simulación.

El backlog cubre las seis funciones del sílabo: **gestión de perfiles, segmentación, promociones, reportes, automatización y atención al cliente**. La mención de seis gerencias en el contexto del sílabo no significa que todas ejecuten tareas del proceso: solo las áreas funcionales representadas con actividades en el BPMN intervienen como ejecutoras.

## 2. Uso del backlog en Jira

1. Crear/actualizar cada elemento como una historia (HU) o PBI en el Product Backlog de Jira.
2. Copiar la descripción en formato «Como…, quiero…, para…» y los criterios observables. Mantener las decisiones pendientes como preguntas al PO, no como reglas inventadas.
3. Registrar prioridad, Sprint propuesto, estado, responsable, revisor y evidencia. El orden de este documento es una propuesta; el PO confirma el orden definitivo.
4. Descomponer en subtareas de vista, lógica, datos, pruebas o documentación cuando la PBI se seleccione. Priorizar la capa de vista sin inferir que se exige una solución full-stack completa.
5. Dejar Story Points/estimaciones sin asignar hasta que los cuatro Developers decidan si usarán una técnica. No son obligatorios.
6. Actualizar Jira cuando el PO cambie prioridades o acepte/rechace un incremento. Los acuerdos relevantes también quedan en Jira.

**Campos sugeridos:** ID, épica, título/HU, descripción, criterios de aceptación, prioridad PO, Sprint, dependencias, responsable, revisor, estado, evidencia y estimación opcional.  
**Estados sugeridos:** `Backlog → Seleccionado → En curso → Revisión → Pruebas → Hecho`.

## 3. Prioridades y planificación general

- **Alta (P0):** núcleo del piloto, diseño, perfil, atención, historial, segmentación y demostración de promoción bajo criterios acordados.

- **Media (P1):** funciones del sílabo que se incorporan según capacidad y orden del PO: incidencias/atención, campañas y reportes.

- **Baja/condicionada (P2):** automatización, hasta que el PO la priorice y apruebe el resultado probado.

- Pruebas, integración, documentación y revisión son trabajo transversal: acompañan los Sprints y no se dejan únicamente para la última semana.

### Lista priorizada propuesta

| Orden | PBI | Historia resumida | Prioridad inicial | Sprint propuesto |
|----|-----------|---|---|---|
| 01 | AC-PBI-01 | Acordar alcance y usuarios con el PO | Alta (P0) | 1 |
| 02 | AC-PBI-02 | Modelar el proceso y sus vistas BPMN | Alta (P0) | 1 |
| 03 | AC-PBI-03 | Prototipar pantallas y navegación | Alta (P0) | 1 |
| 04 | AC-PBI-04 | Diseñar el modelo de datos | Alta (P0) | 1 |
| 05 | AC-PBI-05 | Crear estructura de aplicación y navegación | Alta (P0) | 2 |
| 06 | AC-PBI-06 | Buscar y consultar perfiles | Alta (P0) | 2 |
| 07 | AC-PBI-07 | Registrar/actualizar perfiles con validación | Alta (P0) | 2 |
| 08 | AC-PBI-08 | Consultar ficha e historial | Alta (P0) | 2 |
| 09 | AC-PBI-09 | Registrar visita e interacción | Alta (P0) | 3 |
| 10 | AC-PBI-10 | Mantener preferencias e historial | Alta (P0) | 3 |
| 11 | AC-PBI-11 | Acordar reglas con los cuatro criterios | Alta (P0) | 3 |
| 12 | AC-PBI-24 | Consultar frecuencia, gasto, juegos e historial promocional | Alta (P0) | 3 |
| 13 | AC-PBI-12 | Asignar/consultar segmento sin umbrales inventados | Alta (P0) | 3 |
| 14 | AC-PBI-13 | Evaluar promoción aplicable/no aplicable | Alta (P0) | 3 |
| 15 | AC-PBI-14 | Preparar, registrar y comunicar promoción | Alta (P0) | 3–4 |
| 16 | AC-PBI-20 | Probar componentes | Alta (P0), transversal | Todos |
| 17 | AC-PBI-21 | Integrar y probar recorridos | Alta (P0), transversal | 3–5 |
| 18 | AC-PBI-22 | Mantener documentación y versiones | Alta (P0), transversal | Todos |
| 19 | AC-PBI-23 | Validar y presentar versión candidata | Alta (P0), cierre | 4 o 5 |
| 20 | AC-PBI-15 | Registrar incidencia de atención | Media (P1) | 4, si prioriza PO |
| 21 | AC-PBI-16 | Dar seguimiento/resolver incidencia | Media (P1) | 4–5, si prioriza PO |
| 22 | AC-PBI-17 | Definir y gestionar campaña | Media (P1) | 4, si prioriza PO |
| 23 | AC-PBI-18 | Consultar reporte verificable | Media (P1) | 4, si prioriza PO |
| 24 | AC-PBI-19 | Probar automatización y obtener decisión del PO | Baja/condicionada (P2) | 4–5, solo con decisión PO |
|----|-----------|---|---|---|



Esta lista esta ordenada en base a la prioridad de mayor a menor.

## 4. Historias de usuario y criterios de aceptación


### Épica E0 — Comprender, diseñar y acordar el piloto

#### AC-PBI-01 — Confirmar problema, usuarios y alcance

**Descripción (HU):** Como equipo, quiero acordar con el PO el problema, los usuarios y el alcance, para construir una propuesta coherente con el sílabo y la rúbrica.  
**Prioridad:** Alta (P0) · **Sprint propuesto:** 1.

**Criterios de aceptación**
- El problema, objetivo, usuarios y seis funciones del sílabo quedan resumidos.
- Requisitos confirmados, preguntas abiertas y supuestos se distinguen explícitamente.
- El PO revisa qué funciones son obligatorias, opcionales o futuras.
- Las decisiones y dudas se registran en Jira.


#### AC-PBI-02 — Modelar el proceso y las vistas BPMN

**Descripción (HU):** Como equipo, quiero representar el proceso integrado y detallar la segmentación, para explicar responsables, decisiones, rutas y límites del piloto.  
**Prioridad:** Alta (P0) · **Sprint propuesto:** 1.

**Criterios de aceptación**
- Hay un pool con seis carriles y cuatro rutas independientes: atención/cliente, campaña, reporte y automatización candidata; las rutas independientes no se convierten en pasos obligatorios de cada atención.
- Se conserva la ruta de atención con sus decisiones de cliente nuevo/existente, registro de visita e interacción, incidencia opcional, historial, segmentación y evaluación promocional.
- La rama nueva y la existente se unen directamente en «Registrar visita e interacción», sin compuerta de unión, conforme al diagrama acordado.
- «Segmentación de clientes» se muestra como subproceso colapsado en la vista principal y dispone de un diagrama de detalle separado con inicio y fin simples, carril «Sistema CRM / datos» y cinco tareas en secuencia.
- Los eventos de inicio son de tipos distintos y se explican: Mensaje para atención, Temporal para campaña, Señal para reporte y Condicional para automatización opcional. Sus disparadores/expresiones pendientes no se inventan.
- No se dibujan objetos de datos ni asociaciones de datos en el BPMN. Las políticas de marketing, si se mencionan, son un insumo implícito.
- Las etiquetas de Sí/No, nombres de tareas y finales reflejan la versión aprobada del diagrama.
- Se comprueba el XML/XSD si es posible y se revisa el archivo dentro de Bizagi antes de afirmar que Bizagi lo importó correctamente. Validar XSD no se presenta como prueba de importación.

#### AC-PBI-03 — Prototipar pantallas y navegación

**Descripción (HU):** Como usuario del piloto, quiero recorrer pantallas claras y consistentes, para encontrar las funciones priorizadas sin perderme.  
**Prioridad:** Alta (P0) · **Sprint propuesto:** 1.

**Criterios de aceptación**
- Se muestran las vistas incluidas en el alcance acordado y su navegación.
- Formularios, ficha de cliente y mensajes de estado se entienden en revisión del equipo/PO.
- El prototipo prioriza la capa de vista y no presupone una arquitectura full-stack no exigida por la rúbrica.
- Se registran cambios solicitados antes de dar por finalizadas las pantallas.

#### AC-PBI-04 — Diseñar el modelo relacional

**Descripción (HU):** Como equipo, quiero diseñar entidades y relaciones para representar perfiles e historial sin duplicación innecesaria, para apoyar las funciones priorizadas.  
**Prioridad:** Alta (P0) · **Sprint propuesto:** 1.

**Criterios de aceptación**
- El modelo lógico se prepara en Oracle SQL Developer Data Modeler.
- Se identifican entidades, atributos, claves primarias/foráneas y relaciones de acuerdo con el alcance.
- Se refleja la relación entre cliente, visita/interacción, promoción y los criterios de segmentación si se implementan.
- El profesor revisa el modelo antes de la implementación de base de datos.
- La documentación diferencia Oracle SQL Developer Data Modeler (herramienta de modelado) de SQL Server Management Studio (herramienta de administración de SQL Server).


### Épica E1 — Interfaz y gestión de perfiles

#### AC-PBI-05 — Crear estructura y navegación de la aplicación

**Descripción (HU):** Como usuario, quiero una estructura de aplicación y navegación consistentes, para acceder a las funciones aprobadas.  
**Prioridad:** Alta (P0) · **Sprint propuesto:** 2.

**Criterios de aceptación**
- La aplicación o prototipo inicia y muestra las secciones acordadas.
- Etiquetas, controles y estilos son coherentes.
- Las rutas de navegación incluidas en la demostración no tienen enlaces muertos.

#### AC-PBI-06 — Buscar y consultar un cliente

**Descripción (HU):** Como agente de Servicio al Cliente, quiero buscar un perfil, para atender a la persona con información disponible y evitar duplicar su registro.  
**Prioridad:** Alta (P0) · **Sprint propuesto:** 2.

**Criterios de aceptación**
- Se utiliza el identificador de búsqueda que confirme el PO.
- Si existe coincidencia, la vista muestra el perfil correcto y los campos autorizados.
- Si no hay coincidencia, el sistema lo indica y permite iniciar el alta.
- Una entrada inválida muestra un mensaje entendible.
- Las pruebas usan datos ficticios.

#### AC-PBI-07 — Registrar o actualizar un perfil con validación

**Descripción (HU):** Como agente, quiero registrar o corregir un perfil, para mantener la información autorizada consistente.  
**Prioridad:** Alta (P0) · **Sprint propuesto:** 2.

**Criterios de aceptación**
- La pantalla solicita solo campos aprobados por el PO.
- Los datos obligatorios faltantes o inválidos no se confirman como guardados y se indica qué corregir.
- Posibles duplicados se manejan conforme a la regla acordada; no se fusionan automáticamente por una coincidencia no autorizada.
- Tras guardar, el perfil puede volver a consultarse.

#### AC-PBI-08 — Consultar ficha e historial del cliente

**Descripción (HU):** Como agente, quiero consultar la ficha y el historial pertinente del cliente, para brindar una atención coherente.  
**Prioridad:** Alta (P0) · **Sprint propuesto:** 2.

**Criterios de aceptación**
- La ficha presenta solo la información autorizada y disponible.
- Visitas, interacciones y promociones aparecen vinculadas al perfil correcto si están incluidas en el incremento.
- La vista distingue «sin registros» de un error de carga.


### Épica E2 — Atención al cliente, visitas e historial

#### AC-PBI-09 — Registrar una visita o interacción

**Descripción (HU):** Como agente, quiero registrar una visita e interacción, para dejar constancia en el historial del cliente.  
**Prioridad:** Alta (P0) · **Sprint propuesto:** 3.

**Criterios de aceptación**
- Solo se solicitan datos mínimos confirmados para el piloto.
- El registro queda relacionado con el perfil correcto.
- El registro nuevo aparece en el historial una vez confirmado.
- Registrar otra visita no crea un perfil adicional.

#### AC-PBI-10 — Mantener preferencias e historial

**Descripción (HU):** Como agente o personal autorizado, quiero consultar las preferencias e interacciones disponibles, para orientar la atención sin perder la historia previa.  
**Prioridad:** Alta (P0) · **Sprint propuesto:** 3.

**Criterios de aceptación**
- Las preferencias de juegos se identifican como dato disponible según la política que confirme el PO; no se infieren preferencias no proporcionadas.
- El historial puede distinguir visita/interacción de una promoción registrada.
- Una actualización no borra indebidamente registros previos.
- Se usan únicamente datos ficticios en la demostración.


### Épica E3 — Segmentación y promociones

#### AC-PBI-11 — Acordar criterios de segmentación y elegibilidad

**Descripción (HU):** Como PO o responsable de Marketing, quiero acordar criterios comprensibles de segmentación, para que el equipo pueda clasificar clientes sin inventar reglas comerciales.  
**Prioridad:** Alta (P0) · **Sprint propuesto:** 3.

**Criterios de aceptación**
- Los criterios contemplan los cuatro insumos del modelo: **frecuencia de visitas, nivel de gasto, preferencias de juegos e historial de promociones**.
- Para cada criterio se documenta su significado, origen/disponibilidad y periodo de referencia solo cuando el PO lo confirme.
- El PO valida qué reglas se usan y qué resultado observable se espera.
- No se inventan umbrales, pesos, fórmulas, segmentos, vigencias ni condiciones promocionales. Los valores de demostración se identifican como datos ficticios o supuestos pendientes.
- Se preparan ejemplos de prueba con resultados aprobados por el PO.

#### AC-PBI-24 — Consultar los criterios de segmentación del cliente

**Descripción (HU):** Como sistema CRM, quiero consultar la frecuencia de visitas, el nivel de gasto, las preferencias de juegos y el historial de promociones disponibles, para proporcionar los insumos a la clasificación del cliente.  
**Prioridad:** Alta (P0) · **Sprint propuesto:** 3 · **Dependencia:** AC-PBI-11.

**Criterios de aceptación**
- La consulta intenta obtener exactamente los cuatro criterios definidos: frecuencia de visitas, nivel de gasto, preferencias de juegos e historial de promociones.
- Si un dato no existe o no fue autorizado, se señala como ausente/no disponible; no se inventa ni se sustituye silenciosamente.
- La información consultada se asocia al cliente correcto y puede ser revisada en una prueba con datos ficticios.
- La tarea de consulta precede a la clasificación dentro del subproceso de segmentación.

#### AC-PBI-12 — Asignar o consultar el segmento del cliente

**Descripción (HU):** Como personal autorizado de Marketing, quiero consultar la clasificación resultante, para orientar el análisis o una oferta cuando corresponda.  
**Prioridad:** Alta (P0) · **Sprint propuesto:** 3 · **Dependencia:** AC-PBI-11 y AC-PBI-24.

**Criterios de aceptación**
- La asignación utiliza únicamente la regla y los criterios aprobados por el PO.
- La interfaz puede mostrar el segmento y los criterios/datos disponibles que sustentan el resultado, según el alcance aprobado.
- Si no existe regla aprobada o faltan datos, se informa el estado y no se inventa una clasificación.
- Se prueban casos de datos completos y datos faltantes; los límites numéricos se prueban solo si el PO los define.

#### AC-PBI-13 — Evaluar si una promoción aplica

**Descripción (HU):** Como sistema, quiero evaluar si la oferta cumple los criterios aprobados, para continuar por la ruta correcta sin crear promociones no aplicables.  
**Prioridad:** Alta (P0) · **Sprint propuesto:** 3.

**Criterios de aceptación**
- La decisión tiene dos salidas observables: aplica / no aplica, según regla aprobada.
- En «no aplica», no se crea ni se comunica oferta y la visita/interacción permanece en el historial.
- En «aplica», se continúa con la oferta autorizada o ficticia identificada como demostración.
- Se prueban ambas salidas. No se inventan razones de elegibilidad.

#### AC-PBI-14 — Preparar, registrar y comunicar una promoción

**Descripción (HU):** Como responsable de Marketing, quiero preparar y registrar una promoción autorizada, para comunicar una oferta pertinente y conservar su historial.  
**Prioridad:** Alta (P0) · **Sprint propuesto:** 3–4.

**Criterios de aceptación**
- El contenido, criterios y vigencia provienen de una decisión del PO o se identifican como datos ficticios de demostración.
- La oferta queda relacionada con el cliente/campaña en la medida definida para el piloto.
- El sistema conserva el historial de promociones del cliente.
- Si no hay un canal externo implementado, «Comunicar oferta al cliente (canal posible/simulado)» se presenta explícitamente como simulación.
- Las políticas de marketing, si se requieren para la decisión, son un insumo implícito a confirmar; no se agregan objetos de datos BPMN contra el diagrama acordado.


### Épica E4 — Atención de incidencias

#### AC-PBI-15 — Registrar una incidencia

**Descripción (HU):** Como cliente o agente, quiero registrar una incidencia, para que una queja, consulta o solicitud relacionada con la atención pueda ser considerada.  
**Prioridad:** Media (P1) · **Sprint propuesto:** 4, si lo prioriza el PO.

**Criterios de aceptación**
- El registro contiene únicamente los datos y estados acordados con el PO.
- La incidencia se vincula al perfil correcto, si existe.
- La ruta se activa solo cuando se reporta una incidencia; sin incidencia, la atención continúa sin crear un caso.
- Los datos usados en pruebas son ficticios.

#### AC-PBI-16 — Dar seguimiento a una incidencia

**Descripción (HU):** Como agente, quiero registrar el seguimiento acordado de una incidencia, para dejar constancia de la atención y su estado.  
**Prioridad:** Media (P1) · **Sprint propuesto:** 4–5, si lo prioriza el PO.

**Criterios de aceptación**
- Se registra únicamente el seguimiento que exija el alcance/rúbrica y que valide el PO.
- La solución, escalamiento, responsable, notificación y cierre se incluyen solo si fueron acordados.
- El estado visible corresponde al registro guardado.
- No se inventan plazos, categorías, SLA ni procedimientos empresariales.


### Épica E5 — Campañas y reportes

#### AC-PBI-17 — Definir y gestionar una campaña

**Descripción (HU):** Como responsable de Marketing, quiero definir objetivo, público y criterios para una campaña y diseñar una promoción con vigencia, para preparar una oferta que pueda evaluarse según decisiones acordadas.  
**Prioridad:** Media (P1) · **Sprint propuesto:** 4, si lo prioriza el PO.

**Criterios de aceptación**
- Se registran objetivo, público/criterios, diseño de promoción y vigencia solo en los campos acordados.
- La decisión de campaña sigue el flujo aprobado, incluyendo revisión del PO si corresponde.
- Una campaña rechazada o pendiente no se presenta como publicada.
- Si no existe canal de envío real, se informa que la publicación/comunicación es simulada.
- No se fijan descuentos, umbrales o reglas que el PO no haya confirmado.

#### AC-PBI-18 — Consultar un reporte verificable

**Descripción (HU):** Como gerente o usuario autorizado, quiero consultar un reporte del periodo y alcance solicitados, para revisar información y apoyar decisiones.  
**Prioridad:** Media (P1) · **Sprint propuesto:** 4, si lo prioriza el PO.

**Criterios de aceptación**
- El periodo, filtros e indicadores incluidos son definidos o revisados por el PO.
- Los datos visibles concuerdan con un conjunto de prueba conocido y verificable.
- Si no hay resultados, el sistema lo indica claramente.
- Solo se muestran los datos necesarios para el propósito académico y autorizado.
- La solicitud y revisión del reporte permanecen como ruta independiente en BPMN.


### Épica E6 — Automatización candidata sujeta al PO

#### AC-PBI-19 — Configurar, probar y validar una automatización con el PO

**Descripción (HU):** Como equipo de TI, quiero configurar y probar una tarea repetitiva priorizada y presentar sus resultados al PO, para obtener una decisión explícita antes de activarla.  
**Prioridad:** Baja/condicionada (P2) · **Sprint propuesto:** 4–5, solo si el PO prioriza la automatización.

**Criterios de aceptación**
- El PO prioriza la tarea y confirma sus definiciones, reglas, excepciones y resultado esperado antes de implementarla.
- TI configura y prueba la automatización y entrega un reporte de resultados verificables al PO.
- La aprobación/rechazo se presenta y valida durante el Sprint Review con el profesor como PO; la prueba técnica por sí sola no equivale a aprobación.
- Si el PO aprueba, se continúa a «Activar y monitorear» y se documenta el resultado.
- Si el PO rechaza con ajustes, se vuelve a «Definir la tarea, reglas y excepciones», se actualiza el trabajo priorizado y se prueba de nuevo.
- Si el PO no aprueba ajustes o rechaza definitivamente, no se activa y se termina por «Fin: rechazo de automatización».
- Sin priorización/decisión del PO, no se presenta la automatización como requisito comprometido ni como activa.


### Épica E7 — Calidad, integración, documentación y presentación

#### AC-PBI-20 — Probar cada componente

**Descripción (HU):** Como equipo, queremos probar por separado los componentes incluidos, para encontrar defectos antes de integrarlos.  
**Prioridad:** Alta (P0), transversal · **Sprint:** todos.

**Criterios de aceptación**
- Cada prueba registra entrada, resultado esperado, resultado obtenido, estado y evidencia.
- Se prueban casos normales, inválidos y relevantes de datos faltantes según el PBI.
- Los defectos se registran en Jira y se relacionan con la PBI correspondiente.

#### AC-PBI-21 — Integrar y probar recorridos completos

**Descripción (HU):** Como equipo, queremos probar los recorridos integrados del piloto, para comprobar que las pantallas y componentes priorizados entregan resultados coherentes.  
**Prioridad:** Alta (P0), transversal · **Sprint:** 3–5.

**Criterios de aceptación**
- Se recorren escenarios de cliente existente/nuevo y se confirma la unión directa en «Registrar visita e interacción» del modelo aprobado.
- Se prueban datos válidos/inválidos, incidencia sí/no y promoción aplicable/no aplicable según el alcance implementado.
- Se valida que segmentación consulte los cuatro criterios, según estén disponibles/autorizados.
- Campañas, reportes y automatización se prueban solo si el PO las prioriza en el incremento.
- La integración o simulación se declara correctamente; se conservan casos, resultados y evidencias.

#### AC-PBI-22 — Documentar y mantener versiones

**Descripción (HU):** Como integrante del equipo, quiero documentación completa y actualizada, para ejecutar, probar y explicar el piloto con el mismo entendimiento.  
**Prioridad:** Alta (P0), transversal · **Sprint:** todos.

**Criterios de aceptación**
- La Guía Principal explica el BPMN, los eventos iniciales de tipos distintos, sus seis carriles, el subproceso colapsado y la vista separada de detalle, además de las capas técnicas y límites.
- La Guía Scrum refleja la revisión del PO y la planificación de Sprints.
- El Product Backlog conserva las PBIs 01–23, incorpora las actualizaciones acordadas y mantiene la planificación y criterios observables.
- Las imágenes, el BPMN principal y el detalle de segmentación corresponden a la misma versión conceptual.
- Se distinguen validación XSD y prueba real de importación en Bizagi.

#### AC-PBI-23 — Validar y presentar la versión candidata

**Descripción (HU):** Como equipo, queremos demostrar el incremento al PO y explicar sus pruebas y límites, para recibir retroalimentación y orientar el siguiente paso.  
**Prioridad:** Alta (P0), cierre · **Sprint:** 4 o 5.

**Criterios de aceptación**
- La demostración usa datos ficticios y un recorrido previamente acordado.
- Se muestra al menos un camino principal y una decisión/error observable.
- Si hay automatización candidata, el PO revisa reporte y decide aprobación, ajuste o rechazo en Sprint Review; no se presupone su aceptación.
- Los cuatro Developers pueden explicar el objetivo, proceso, interfaz, decisiones técnicas, pruebas y limitaciones.
- Se registran feedback, defectos pendientes y próximos pasos en Jira.


## 5. Cobertura de las seis funciones del sílabo



| Función | PBIs relacionados | Resultado dentro del alcance aprobado |

|---|---|---|

| Gestión de perfiles | AC-PBI-06–08 | Buscar, registrar/actualizar y consultar la ficha e historial autorizado. |

| Segmentación | AC-PBI-11, AC-PBI-24, AC-PBI-12 | Acordar y consultar los cuatro criterios y luego asignar/consultar el segmento sin inventar fórmula. |

| Promociones | AC-PBI-13, AC-PBI-14, AC-PBI-17 | Evaluar elegibilidad, preparar/registrar oferta y gestionar campaña si el PO la prioriza. |

| Reportes | AC-PBI-18 | Consultar un reporte con filtros e indicadores aprobados y datos verificables. |

| Automatización | AC-PBI-19 | Configurar y probar únicamente tras priorización PO; presentar resultados y validar aprobación/ajuste/rechazo. |

| Atención al cliente | AC-PBI-09, AC-PBI-10, AC-PBI-15, AC-PBI-16 | Registrar visita/interacción e incidencia y dar el seguimiento incluido por decisión del PO. |

|---|---|---|



La cobertura en el backlog no implica que todas las funciones deban quedar implementadas en el mismo piloto; la priorización final corresponde al Product Owner.

## 6. Dependencias principales


```
AC-PBI-01 Alcance confirmado
  ├─ AC-PBI-02 BPMN principal + detalle de segmentación
  ├─ AC-PBI-03 prototipo de vista
  └─ AC-PBI-04 modelo de datos
       ↓
AC-PBI-05 estructura/navegación
  → AC-PBI-06 búsqueda 		→	 AC-PBI-07 alta/validación 	→	 AC-PBI-08 ficha
  → AC-PBI-09 visita/interacción	 → 	AC-PBI-10 historial/preferencias
  → AC-PBI-11 reglas acordadas		 → 	AC-PBI-24 consulta de cuatro criterios
  → AC-PBI-12 segmento		 → 	AC-PBI-13 elegibilidad		 → 	AC-PBI-14 promoción

  → AC-PBI-15/16 atención de incidencias, si PO prioriza
  → AC-PBI-17 campaña y AC-PBI-18 reporte, si PO prioriza
  → AC-PBI-19 automatización y validación del PO, solo si PO prioriza

AC-PBI-20 pruebas (en todos los sprints), AC-PBI-21 integración (en los sprints 3-5) y AC-PBI-22 documentación (en todos los sprints): trabajo transversal (porque no dependen de un PBI, se hacen en paralelo con los demás).
AC-PBI-23: evidencia, revisión del incremento y presentación (en los sprints 4-5).
```


## 7. Planificación propuesta de Sprints

Los Sprints son de **una semana**. El equipo planifica cuatro Sprints como base y utiliza un quinto únicamente si el calendario lo permite. Las metas actuales se conservan; el PO ordena qué PBIs se seleccionan según capacidad y prioridad.



| Sprint semanal | Sprint Goal | Lista priorizada / PBIs propuestos |

|---|---|---|

| **1 — Entender y diseñar** | Entender el problema y acordar el diseño del piloto. | AC-PBI-01; AC-PBI-02; AC-PBI-03; AC-PBI-04. Resultado: alcance revisado, BPMN principal/detalle, primera vista y modelo lógico discutidos. |

| **2 — Perfil** | Poder buscar, registrar y consultar un perfil ficticio. | AC-PBI-05; AC-PBI-06; AC-PBI-07; AC-PBI-08; AC-PBI-20 (pruebas iniciales); AC-PBI-22 (documentación del incremento). |

| **3 — Visitas, historial y promoción** | Registrar visita/historial y demostrar la decisión de promoción sí/no. | AC-PBI-09; AC-PBI-10; AC-PBI-11; AC-PBI-24; AC-PBI-12; AC-PBI-13; AC-PBI-14 según capacidad; AC-PBI-20/21/22. |

| **4 — Complemento prioritario e integración** | Entregar e integrar la función complementaria de mayor prioridad que el PO seleccione. | Selección acordada entre AC-PBI-15/16 (atención), AC-PBI-17 (campañas), AC-PBI-18 (reportes) y AC-PBI-19 (automatización condicionada); más pruebas/documentación. La automatización solo se toma si el PO la prioriza. |

| **5 — Validar y presentar (si se dispone)** | Validar, corregir, documentar y presentar una versión candidata. | AC-PBI-20–23 y correcciones priorizadas. Si el proyecto termina en cuatro Sprints, integrar este trabajo dentro del Sprint 4 reduciendo funciones complementarias según decisión PO; no eliminar calidad en silencio. |

|---|---|---|



### Sprint Review y decisión del Product Owner

En cada Sprint Review se muestra un incremento verificable y se recibe retroalimentación del PO. Si se trabajó en AC-PBI-19, el equipo presenta el reporte y los resultados de prueba; el profesor, como PO, aprueba, pide ajustes/re-prueba o rechaza la automatización. El equipo actualiza Jira y el Product Backlog a partir de esa decisión. La Review no equivale a aceptación automática de todo el trabajo ni a autorización de activación.

## 8. Definition of Done sugerida

Una PBI se considera **Hecha** cuando cumple sus criterios observables, fue probada al nivel acordado, revisada por otro integrante, integrada si corresponde y puede demostrarse. Jira refleja estado y evidencia; la documentación se actualiza; las simulaciones y limitaciones se identifican claramente. La aceptación del PO se registra cuando aplica y no se sustituye por una validación técnica del equipo.

## 9. Decisiones que debe confirmar el Product Owner

- Qué funciones y criterios de la rúbrica son obligatorios y cuánto desarrollo exige la capa de vista.
- Qué campos e identificador se usan para perfiles y detección de posibles duplicados.
- Cómo se interpretan frecuencia de visitas, nivel de gasto, preferencias de juegos e historial de promociones; qué datos/periodos están disponibles y qué reglas se usarán.
- Qué condiciones rigen incidencias, campañas, promociones e indicadores de reportes.
- Si se prioriza una automatización y qué tarea, entradas, reglas, excepciones y resultados se deben probar.
- Cómo se toma y registra la decisión de aprobación, ajuste o rechazo definitivo de automatización durante Sprint Review.
- Tecnologías y conexiones requeridas por la rúbrica, incluyendo hasta dónde se implementan Python y SQL Server.

**Nota:** prioridades y Sprint propuestos facilitan la planificación; no reemplazan la priorización final del profesor PO. No se inventan umbrales ni políticas de negocio.
