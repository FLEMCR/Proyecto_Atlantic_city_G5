# Guía principal — Atlantic City

## 1. Propósito

Esta guía reúne el contexto del proyecto, el proceso que se modeló, las funciones del sistema y los acuerdos que el equipo debe conservar al diseñar o explicar una entrega. La fuente de prioridad es el sílabo y, para las decisiones del producto, las indicaciones del profesor en su rol de Product Owner (PO).

**Equipo:** un profesor como PO y cuatro Developers.  
**Proyecto:** Modernización del Sistema de Gestión de Clientes de Atlantic City.  
**Objetivo del sistema:** centralizar perfiles e historial, registrar visitas e incidencias, consultar criterios de segmentación, gestionar promociones y campañas y generar reportes que apoyen la atención y la toma de decisiones.

La información precargada en los prototipos es ficticia. El trabajo no debe afirmar que existe conexión con sistemas reales de Atlantic City, comunicación externa o reglas que el PO no haya confirmado.

## 2. Problema que se busca atender

El sílabo describe información de clientes distribuida en sistemas, posibles duplicidades, falta de historial unificado, dificultades para coordinar áreas y limitaciones para analizar resultados de forma oportuna. La respuesta propuesta es un sistema de información que organice el perfil y los registros relacionados y que apoye la atención y el análisis de promociones.

El proyecto se desarrolla por incrementos. El objetivo no es dar por construida toda la plataforma corporativa; cada funcionalidad se concreta según el Product Backlog, la rúbrica y las indicaciones del PO.

### Orden de referencia para resolver discrepancias

1. Indicación directa del profesor y rúbrica vigente.
2. Sílabo y objetivos del curso.
3. Backlog final que mantiene el equipo, sujeto a priorización del PO.
4. Modelo BPMN, guías y prototipos como artefactos que se actualizan ante nuevos acuerdos.

Si un dato o regla no está confirmado, se registra como pendiente y no se convierte en una regla del sistema por suposición.

## 3. Funciones del producto y prioridad del backlog

El backlog consolidado contiene trece historias:

- **Perfiles:** HU-01 buscar e identificar; HU-02 registrar; HU-03 actualizar; HU-04 consultar perfil e historial.
- **Atención:** HU-05 registrar visita/interacción; HU-06 registrar y consultar incidencia.
- **Segmentación y promociones:** HU-07 consultar los cuatro criterios; HU-08 consultar el segmento; HU-09 evaluar elegibilidad; HU-10 definir y gestionar campaña; HU-11 registrar y comunicar oferta.
- **Reportes:** HU-12 consultar un reporte verificable.
- **Automatización candidata:** HU-13, de prioridad baja/condicionada y solo si el PO la prioriza.

La prioridad Alta, Media o Baja/condicionada no equivale por sí sola a que una historia esté implementada. El PO mantiene el orden definitivo y el equipo selecciona trabajo para cada Sprint según el plan y la capacidad real.

## 4. Participantes del proceso BPMN

El modelo principal muestra un pool de Atlantic City dividido en seis carriles. Los carriles indican quién ejecuta o representa una responsabilidad dentro del proceso modelado; no son seis programas ni seis bases de datos.

| Carril | Responsabilidad representada | Límite de interpretación |
|---|---|---|
| **Cliente** | Solicita registro o atención, entrega datos cuando corresponde y recibe información de una oferta si aplica. | No representa acceso libre del cliente a los datos internos del CRM. |
| **Servicio al Cliente / Operaciones** | Identifica al cliente, solicita o corrige datos, registra visita/interacción y gestiona la incidencia reportada según el proceso acordado. | No sustituye las validaciones técnicas del sistema. |
| **Sistema CRM / datos** | Consulta perfiles, valida los datos según reglas confirmadas, conserva visitas e historial, consulta criterios y genera información para reportes. | El sistema es más que la base de datos: también tiene interfaz y lógica. |
| **Marketing** | Define público y campaña, prepara la oferta y participa en la selección de promociones. | No se asignan umbrales, descuentos ni reglas de elegibilidad sin validación. |
| **Gerencia General / Product Owner** | Representa la revisión de reportes y las decisiones de prioridad; la aprobación de campañas debe confirmarse. | El rol de PO del profesor no implica que cada sugerencia del modelo ya sea una política empresarial. |
| **Gerencia de TI** | Configura y prueba una automatización candidata y presenta resultados si el PO la prioriza. | No significa que el prototipo esté conectado a sistemas reales ni que la automatización esté activa. |

El sílabo describe otras gerencias en el contexto de la empresa. Su mención no implica que todas ejecuten tareas en el diagrama de este proceso.

## 5. Cómo se organiza el BPMN principal

El diagrama principal reúne cuatro recorridos iniciados por separado. La ruta principal corresponde a la atención del cliente. Las rutas de campaña, reporte y automatización no ocurren necesariamente durante cada visita.

### 5.1 Recorrido A — perfil y atención

1. El cliente solicita atención o registro.
2. Servicio al Cliente identifica el perfil con el identificador que confirme el PO.
3. La decisión «¿Cliente registrado?» conduce a consultar el perfil existente o iniciar el alta.
4. Para un cliente nuevo, se solicitan y validan los datos. Si no son válidos, se corrigen; si lo son, se crea el perfil. Los campos obligatorios y la regla de duplicidad deben ser acordados.
5. Las rutas de cliente nuevo y existente continúan a **registrar visita e interacción**.
6. Se revisa si se reporta una incidencia. Si sí, se registra y se atiende o deriva según las reglas que se confirmen. Si no, no se crea un caso.
7. La visita/interacción se conserva en el historial en ambos casos.
8. La atención consulta los criterios y llega a la decisión de elegibilidad promocional. Si no aplica, termina sin registrar comunicación. Si aplica, continúa con la oferta autorizada o identificada como demostración, se registra el historial correspondiente y se comunica por un canal real o claramente simulado.

La secuencia deliberada es: **registrar la visita/interacción y luego evaluar la promoción**. Una incidencia no reemplaza la visita ni la elimina.

### 5.2 Recorrido B — campaña

Marketing recibe una necesidad de campaña, define objetivo, público y criterios, y diseña la promoción y su vigencia. El modelo incluye una revisión/decisión, pero el mecanismo formal y el responsable se incorporan como regla definitiva solo si el PO los confirma. Una campaña pendiente o rechazada no se describe como publicada.

**Distinción de términos:** una campaña organiza una iniciativa para un público u objetivo; una promoción es la oferta concreta. Se pueden relacionar, pero no son sinónimos.

### 5.3 Recorrido C — reporte

La ruta inicia por una solicitud/señal de reporte, define el alcance que corresponda, consulta datos disponibles y presenta el resultado para revisión. El periodo, los filtros y los indicadores se deben confirmar con el PO. Cada resultado debe poder contrastarse con datos de prueba conocidos.

### 5.4 Recorrido D — automatización candidata

El flujo de automatización es opcional. Antes de desarrollarlo, el PO debe priorizar la tarea y definir entradas, reglas, excepciones y resultado esperado. TI configura y prueba; después presenta evidencia al PO. La prueba técnica no equivale a aprobación: solo se activa si existe una decisión explícita del PO. Si no se prioriza, no se trata como funcionalidad comprometida.

## 6. Subproceso de segmentación

En la vista principal, «Segmentación de clientes» aparece como subproceso colapsado. Su detalle está en `../modelado/SUBPROCESO.png`: un flujo interno del sistema, con inicio y fin simples, y cinco tareas consecutivas:

1. Consultar frecuencia de visitas del cliente.
2. Consultar nivel de gasto del cliente.
3. Consultar preferencias de juegos del cliente.
4. Consultar historial de promociones del cliente.
5. Segmentar al cliente con los criterios aprobados.

Los primeros cuatro son los insumos; el quinto produce una clasificación. El periodo de frecuencia, el origen de gasto, las preferencias autorizadas, la definición del historial y la regla de clasificación requieren acuerdo del PO. No se deben inventar umbrales, pesos, fórmulas ni nombres de segmentos. Si faltan datos o no existe regla aprobada, el resultado debe indicar que no se puede clasificar con la información disponible.

## 7. Conceptos BPMN para explicar el modelo

- **Pool:** representa el participante/proceso general modelado.
- **Lane o carril:** distribuye responsabilidades dentro del pool.
- **Evento de inicio:** marca el disparador del recorrido. La imagen principal emplea distintos tipos para atención, campaña, reporte y automatización candidata.
- **Tarea:** actividad realizada por un participante o sistema.
- **Compuerta exclusiva:** permite escoger una salida, por ejemplo «Sí» o «No».
- **Flujo de secuencia:** ordena actividades dentro del mismo pool.
- **Subproceso colapsado:** oculta detalle interno para mantener legible la vista principal; el diagrama de detalle explica sus tareas.
- **Evento de fin:** indica que terminó el recorrido correspondiente.

El modelo es una representación del proceso, no código ejecutable. Una tarea en el carril del sistema no demuestra por sí sola que la automatización esté implementada. El nivel de detalle, los eventos y las reglas se explican con las imágenes conservadas en `modelado/` y con la guía específica de modelado.

## 8. Relación entre interfaz, lógica y datos

### Capa de vista

Es la parte con la que una persona interactúa: estructura, formularios, controles, mensajes y presentación de resultados.

- **HTML** define la estructura y el significado de los elementos.
- **CSS** controla presentación, distribución, colores y adaptación a distintos tamaños de pantalla.
- **JavaScript** gestiona interacciones en el navegador, validaciones inmediatas y actualización de la vista.

### Lógica del sistema

La lógica del servidor, si llega a implementarse, recibe solicitudes, valida reglas y coordina operaciones. Ni el sílabo ni la estructura de entrega fijan para esta etapa un lenguaje de servidor, por lo que el proyecto no tiene código de backend ni carpetas reservadas para él. Si el curso lo requiere más adelante, se acuerda con el profesor antes de implementarlo.

### Persistencia

Una base relacional podría mantener entidades y relaciones entre perfiles, visitas, incidencias, campañas, promociones y registros de comunicación. El motor no está definido por los materiales de esta etapa y no se ha creado un esquema.

El MVP y el prototipo con navegación usan almacenamiento local del navegador y datos de demostración. Este mecanismo facilita probar la interfaz; no equivale a una base central ni sustituye validación de servidor.

## 9. Privacidad, datos y comunicación

- Usar datos ficticios en wireframes, prototipos y pruebas.
- Solicitar solo los datos confirmados por el PO para cada función.
- No mostrar información personal real en capturas o materiales de exposición.
- Si no hay un canal conectado, identificar el registro como constancia local o simulación y no como mensaje enviado.
- No tratar conteos locales de demostración como indicadores reales.

## 10. Decisiones que deben confirmarse

1. Identificador de búsqueda, campos obligatorios y reglas de duplicidad.
2. Datos de perfil autorizados y tratamiento de datos ausentes.
3. Campos mínimos de una visita/interacción y relación entre ambos conceptos.
4. Tipos, estados y seguimiento de incidencias.
5. Periodo y fuente de la frecuencia; unidad y periodo de gasto; fuente de preferencias; alcance del historial promocional.
6. Segmentos, fórmulas y criterios de elegibilidad.
7. Relación entre campaña y promoción, vigencia y eventual aprobación.
8. Indicadores, periodos y filtros de reportes.
9. Si se prioriza automatización y qué tarea se probaría.
10. Si el curso requiere más adelante un lenguaje de servidor, un framework y un motor de base de datos; nada de esto está fijado en el sílabo ni en la estructura de entrega para la etapa actual.

Hasta que se acuerden, estos puntos permanecen pendientes; no se convierten en requisitos por estar ilustrados en una imagen o un prototipo.

## 11. Fuentes de trabajo

- Sílabo del proyecto, copia en `../curso/Silabo_EFSRT_Desarrollo_Capa_de_Vista.pdf` y original en `../../uploads/`.
- Estructura propuesta del trabajo, entregada por el profesor; original en `../../uploads/Estructura propuesta del trabajo.pdf`.
- Caso de ejemplo y caso resuelto del profesor, usados solo como referencia de formato; originales en `../../uploads/Caso.pdf` y `../../uploads/CasoResuelto.pdf`.
- Product Backlog consolidado en `../backlog/Product_Backlog_Atlantic_City.md`.
- Imágenes del modelo en `modelado/`.
- Informe de avance en `../informe/Avance_Atlantic_City.docx`, con los quince puntos de la estructura; su guía de mantenimiento está en `Guia_Informe_de_Avance.md`.
- Materiales de clase y ejemplos originales en `../../uploads/`.
- Material complementario del profesor sobre casos de uso, secuencias, clases y StarUML, en `../curso/material_complementario/`; fija el formato del punto 13 del informe y de la especificación de `../modelado/casos_de_uso/`.

## 12. Correspondencia con la estructura de entrega

La estructura propuesta por el profesor organiza el trabajo en quince puntos. Esta tabla indica dónde está cada uno y qué falta para el cierre de la semana 7.

| Punto | Contenido | Estado |
|---|---|---|
| Portada | Institución, carrera, curso, título, integrantes, docente, ciclo y año | En el informe de avance; faltan los nombres de los integrantes |
| 1. Descripción del negocio | Atlantic City, áreas, situación actual, clientes y usuarios | Listo en el informe de avance |
| 2. Problema del negocio | Problema principal, específicos, consecuencias y objetivo | Listo en el informe de avance |
| 3. Procesos del negocio | Nombre, objetivo, participantes y descripción breve | Listo en el informe y en esta guía |
| 4. Diagrama de procesos en Bizagi | Proceso actual AS IS | Listo: `modelado/` con la vista principal y el subproceso |
| 5. Metodología Scrum | Equipo y Sprints | Listo: `Scrum_Guia_Atlantic_City.md` |
| 6. Product Backlog | ID, historia, prioridad y Sprint | Listo: `backlog/` |
| 7. Historias de usuario | Como/Quiero/Para y criterios de aceptación | Listo: 13 historias en `backlog/` |
| 8. Wireframes digitales | Pantallas como dibujo, sin funcionamiento | Listo: `../prototipado/wireframe_manual.png` y `../prototipado/wireframe_digital.png` |
| 9. MVP | Funcionalidades mínimas que sí se implementan | Listo: `prototipado/MVP/` |
| 10. Prototipo con navegación | Las mismas pantallas conectadas | Listo: `prototipado/prototipo_navegable/` |
| 11. Implementación mínima | HTML, CSS, JavaScript, formularios, navegación, validaciones y datos simulados | Listo en las dos versiones funcionales; se explica en `Guia_Desarrollo.md` |
| 12. Casos de uso | Actores y un diagrama general | Pendiente para la semana 7 |
| 13. Descripción de casos de uso | Tres o cuatro casos principales | Pendiente para la semana 7 |
| 14. Diagramas de secuencia | Dos o tres: actor, interfaz, sistema y base de datos | Pendiente para la semana 7 |
| 15. Diagrama de clases | Diagrama básico derivado de las funcionalidades | Pendiente para la semana 7 |

El informe de avance reúne los puntos 1 a 10 en el orden de la estructura. En el ejemplo resuelto del profesor el prototipo aparece antes que el MVP; en este proyecto se sigue el orden de la estructura propuesta: wireframes, MVP y después prototipo con navegación.

Tener el modelado terminado en Bizagi significa que el equipo ya recorrió los procesos del caso: identificó participantes, actividades, decisiones y límites antes de diseñar pantallas. Esa es la razón por la que las guías, el backlog y los prototipos usan el mismo vocabulario del diagrama.
