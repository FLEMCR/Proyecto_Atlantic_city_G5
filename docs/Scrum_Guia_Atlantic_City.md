# Scrum para el equipo Atlantic City

## 1. Contexto y propósito

El equipo está formado por **cuatro Developers**. El profesor desempeña el rol de **Product Owner (PO)** y confirma prioridades y reglas del producto. El plan recibido organiza cuatro Sprints de una semana; el equipo debe revisar el trabajo posible y mantener visible cualquier cambio.

Esta guía explica cómo coordinarse para que el trabajo no dependa de una sola persona, las decisiones no se pierdan en conversaciones y los cuatro integrantes puedan explicar el proceso, el código, las pruebas y las limitaciones.

## 2. Scrum en breve

Scrum organiza el desarrollo en ciclos cortos. En cada ciclo, el equipo define un resultado, realiza el trabajo, revisa un incremento y adapta el plan. Se apoya en tres ideas:

- **Transparencia:** el estado, las decisiones y los problemas son visibles.
- **Inspección:** se revisan el producto, los criterios y la forma de trabajar.
- **Adaptación:** el plan se ajusta cuando el PO aclara el producto o el equipo aprende algo nuevo.

Jira y Discord apoyan estas prácticas; usar herramientas no sustituye acordar objetivos, revisar resultados ni registrar decisiones.

## 3. Responsabilidades

### Product Owner — profesor

- Ordena el Product Backlog de acuerdo con el valor y las necesidades del producto.
- Aclara campos, reglas y criterios de negocio pendientes.
- Revisa los incrementos y aporta retroalimentación.
- Decide si la automatización entra al trabajo priorizado y, si se prueba, si se aprueba, se ajusta o se rechaza.

El equipo prepara preguntas concretas, evidencia y opciones; no traslada al PO decisiones técnicas cotidianas ni presenta supuestos como acuerdos.

### Developers — cuatro integrantes

Los cuatro responden por el incremento completo: interfaz, lógica, datos, pruebas, integración y documentación según el trabajo seleccionado. Pueden dividir tareas para avanzar, pero el conocimiento no debe quedar encerrado en una sola persona.

Prácticas recomendadas para este equipo:

- Trabajar en parejas o pequeños grupos por tarea y rotar las áreas entre Sprints.
- Pedir revisión a otro integrante; el autor no es la única persona que prueba su cambio.
- Hacer sesiones breves de transferencia cuando una persona termine una parte que otra necesita.
- Asegurar que, como mínimo, dos Developers sepan ejecutar cada parte importante.
- Cambiar quién presenta módulos en la Review para que los cuatro practiquen la explicación.

La facilitación de reuniones puede acordarse entre los cuatro Developers. Facilitar no convierte a una persona en jefa ni elimina la responsabilidad compartida.

## 4. Artefactos del trabajo

### Product Backlog

Lista priorizada del producto. La versión consolidada está en `backlog/Product_Backlog_Atlantic_City.md`; el PO mantiene la prioridad final. Las historias tienen criterios observables y decisiones pendientes identificables.

### Sprint Backlog

Plan de la semana: objetivo del Sprint, historias seleccionadas y tareas que los Developers acuerdan realizar. Se actualiza durante la semana cuando cambia el plan de trabajo, conservando el objetivo del Sprint.

### Incremento

Resultado integrado que se puede ejecutar o revisar y que satisface la Definition of Done del equipo. Una pantalla desconectada, una tarea empezada o código sin probar no son automáticamente un incremento terminado.

## 5. Ciclo de Sprint semanal

### Antes del Sprint Planning — refinamiento

El PO y el equipo aclaran las historias que podrían entrar pronto: propósito, criterios, dependencias, datos necesarios y preguntas abiertas. El equipo no necesita detallar desde el primer día todas las historias del producto.

### Sprint Planning — inicio de semana

1. Revisar el orden actual del backlog y cambios del PO.
2. Acordar un **Sprint Goal** expresado como resultado, no solo una lista de tareas.
3. Seleccionar historias que los cuatro Developers puedan terminar con calidad.
4. Desglosar las historias seleccionadas en tareas de interfaz, datos/lógica, pruebas, integración y documentación cuando corresponda.
5. Identificar responsables de avanzar y revisores distintos.
6. Registrar tareas, preguntas y riesgos en Jira.

### Trabajo diario

- Cada Developer actualiza la tarjeta en Jira cuando cambia el estado.
- El equipo integra y prueba en incrementos pequeños; no espera hasta el último día para reunir módulos.
- En un check-in breve se comparte avance, siguiente paso y bloqueo. El Daily Scrum, cuando se realice, se centra en adaptar el plan hacia el Sprint Goal.
- Discord se utiliza para coordinar y pedir ayuda; los acuerdos importantes se resumen en Jira o en la documentación.

### Sprint Review — cierre y retroalimentación

El equipo muestra una parte ejecutable al profesor/PO y explica qué criterios cumple, qué pruebas se hicieron y qué queda fuera. Se toman notas de la retroalimentación y el PO puede reordenar el backlog.

Si la historia HU-13 está priorizada, se presenta el resultado de las pruebas y el PO decide explícitamente si aprueba, pide ajustes o rechaza la propuesta. Una prueba técnica exitosa por sí sola no autoriza activar una automatización.

### Retrospectiva — mejora del equipo

Después de revisar el producto, los cuatro Developers conversan sobre qué ayudó, qué dificultó el trabajo y qué acción concreta probarán en el siguiente Sprint. Se registran una o dos acciones, sin buscar culpables.

## 6. Plan de Sprints vigente

| Sprint | Objetivo de trabajo | Historias según el plan recibido |
|---|---|---|
| **1 — Perfiles** | Buscar, crear, actualizar y consultar un perfil con su historial disponible. | HU-01, HU-02, HU-03, HU-04 |
| **2 — Atención y criterios** | Registrar visita/interacción y consultar los cuatro criterios. | HU-05, HU-07 |
| **3 — Segmento y oferta** | Consultar el segmento, evaluar la promoción y dejar registro de oferta según criterios aprobados. | HU-08, HU-09, HU-11 |
| **4 — Complementos** | Abordar funciones complementarias que el PO mantenga prioritarias. | HU-06, HU-10, HU-12 y HU-13* |

\* HU-13 es baja/condicionada y solo se selecciona con priorización y definición del PO. El plan propuesto no significa que todas las historias estén aprobadas para implementación. Si una historia no cumple sus criterios, no se marca como terminada; el PO y el equipo acuerdan su nueva prioridad.

## 7. Cómo evitar pérdida de información

### Fuente de verdad

- **Jira:** estado de historias/tareas, prioridad, responsable, revisor, bloqueo, evidencia y decisiones de Sprint.
- **Carpeta del proyecto:** guías vigentes, backlog, modelo, wireframes, MVP y material de aprendizaje.
- **Discord:** coordinación cotidiana; no es el único registro de decisiones.

### Registro de decisiones

Para cada pregunta al PO, anotar: historia o proceso relacionado, pregunta, fecha de consulta, respuesta acordada y qué archivos/pruebas deben cambiar. Si aún no hay respuesta, conservar el estado «pendiente».

### Handoff entre Developers

Al entregar una tarea, quien la desarrolló deja una nota breve en la tarjeta: archivos modificados, cómo ejecutar, qué probar, resultado y limitaciones conocidas. El siguiente Developer reproduce el resultado antes de continuar. Una revisión cruzada debe ser entendible por alguien que no escribió el código.

### Evitar trabajo duplicado o incompatible

Antes de empezar, revisar Jira y el tablero; acordar qué archivos toca cada persona; integrar cambios pequeños; actualizar el estado al detenerse. Si dos tareas editan el mismo archivo, coordinarse antes de combinar cambios.

## 8. Definition of Done del equipo

Una historia se puede considerar terminada cuando:

- cumple todos sus criterios de validación;
- funciona con los datos y escenarios acordados;
- incluye manejo comprensible de entradas faltantes o inválidas cuando aplica;
- fue revisada por otro integrante;
- se probaron los casos previstos y se registró el resultado;
- está integrada con el incremento y no rompe otras funciones;
- la documentación afectada está actualizada;
- el equipo puede demostrarla y explicar sus límites.

La Definition of Done es un acuerdo común que se puede ajustar con el PO o la rúbrica. Si un criterio no se cumple, la historia queda en progreso o vuelve al backlog; no se oculta el pendiente.

## 9. Pruebas y demostración

Para cada historia, registrar al menos:

| Campo | Qué anotar |
|---|---|
| Caso | Qué condición se está probando. |
| Datos de entrada | Identificador y valores ficticios utilizados. |
| Esperado | Resultado derivado de los criterios confirmados. |
| Obtenido | Resultado observado. |
| Estado | Correcto, defectuoso o pendiente. |
| Evidencia | Captura, registro o salida de prueba. |
| Responsable/revisor | Quién ejecutó y quién verificó. |

En la demo, indicar qué partes usan datos de demostración, qué funciones se guardan solo localmente y qué conexiones no están implementadas. Una constancia de pantalla no se describe como mensaje realmente enviado.

## 10. Preguntas frecuentes del equipo

**¿Puede un Developer tomar una decisión de negocio para avanzar?**  
Puede proponer una opción técnica, pero las reglas de producto, campos autorizados y prioridades se confirman con el PO. Mientras tanto se registra el pendiente.

**¿Una historia asignada a un Sprint ya está comprometida como terminada?**  
El equipo planifica completarla, pero debe revisar capacidad, dependencias y criterios. Si hay un bloqueo, lo comunica y renegocia el plan; no la marca como terminada sin cumplir la Definition of Done.

**¿Cómo se explica una diferencia entre wireframe y MVP?**  
Los wireframes de Inicio/Dashboard representan una propuesta visual más amplia para una etapa posterior. El MVP actual es una pantalla sencilla para probar un recorrido acotado; la guía de prototipado explica la diferencia.

**¿Python y SQL ya están seleccionados?**  
No por el solo hecho de tener carpetas preparadas. Los materiales de clase presentan tecnologías posibles; el framework y el motor deben confirmarse antes de escribir código de servidor o scripts específicos.

## 11. Guion de explicación compartido

Cada integrante debe poder explicar, con sus palabras:

1. qué problema busca atender el proyecto;
2. quién usa el proceso y qué responsabilidades muestra cada carril;
3. por qué la visita/interacción se conserva aunque no exista incidencia ni promoción;
4. cuáles son los cuatro criterios y qué falta acordar para clasificarlos;
5. cómo se distingue una campaña de una promoción;
6. qué hace el MVP, qué datos guarda y qué no está integrado;
7. qué prueba evidencia el resultado de la historia que presenta;
8. qué decisiones siguen pendientes del PO.

El objetivo es que el equipo presente una explicación coherente, no que cada persona conozca solo su tarea asignada.
