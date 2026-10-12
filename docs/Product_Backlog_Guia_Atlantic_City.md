# Guía de uso del Product Backlog — Atlantic City

## 1. Para qué sirve

El Product Backlog reúne las necesidades del sistema ordenadas por prioridad. La versión consolidada de referencia está en [`backlog/Product_Backlog_Atlantic_City.md`](../backlog/Product_Backlog_Atlantic_City.md), y su versión de presentación en Word está en `backlog/Product_Backlog_Atlantic_City.docx`.

El Product Backlog no es una lista de tareas que se deban programar todas al mismo tiempo. El PO decide prioridades y aclaraciones de producto; los cuatro Developers seleccionan y organizan trabajo para cada Sprint según el objetivo y la capacidad.

## 2. Cómo leer una historia

Cada historia expresa una necesidad en tres partes:

- **Como:** quién necesita la función.
- **Quiero:** qué resultado busca esa persona.
- **Para:** qué beneficio espera.

Los criterios de validación describen resultados observables. Sirven para diseñar, programar y probar la historia; no sustituyen una regla que todavía debe confirmar el PO.

### Ejemplo del proyecto

> Como empleado autorizado, quiero buscar un perfil con el identificador que se confirme, para saber si el cliente ya está registrado y evitar duplicidades.

Antes de considerar HU-01 lista para implementar, el PO debe confirmar cuál es el identificador. El equipo puede preparar la estructura, pero no debe decidir sin acuerdo si será correo, teléfono, DNI u otro dato.

## 3. Prioridades de la versión consolidada

| Prioridad | Historias | Interpretación de trabajo |
|---|---|---|
| **Alta** | HU-01 a HU-05, HU-07 a HU-09 y HU-11 | Funciones principales del producto. El PO mantiene el orden dentro de este conjunto. |
| **Media** | HU-06, HU-10 y HU-12 | Funciones complementarias que se planifican según la capacidad y la indicación del PO. |
| **Baja / condicionada** | HU-13 | Solo entra en un Sprint si el PO prioriza la automatización y define tarea, reglas, excepciones y resultado esperado. |

La prioridad no equivale a «ya implementada», «aprobada» ni «entra automáticamente al siguiente Sprint».

## 4. Secuencia de capacidades

1. **Buscar, registrar y actualizar perfiles:** HU-01, HU-02 y HU-03.
2. **Consultar ficha e historial:** HU-04.
3. **Registrar atención:** HU-05 y, si el PO la prioriza, HU-06.
4. **Consultar criterios y clasificación:** HU-07 y HU-08. Los cuatro criterios son frecuencia de visitas, nivel de gasto, preferencias de juegos e historial de promociones.
5. **Evaluar y registrar oferta:** HU-09 y HU-11. La oferta solo se comunica según una regla confirmada; si no hay canal real, se identifica como simulación.
6. **Planificar campaña, reportar o automatizar:** HU-10, HU-12 y HU-13 según el orden que confirme el PO.

Las campañas son planificaciones y las promociones son ofertas concretas. La evaluación de una promoción no debe borrar la visita ni la interacción previamente registrada.

## 5. Plan de Sprint proporcionado

| Sprint | Duración | Historias asignadas en el plan actual |
|---|---|---|
| 1 | 1 semana | HU-01, HU-02, HU-03 y HU-04 |
| 2 | 1 semana | HU-05 y HU-07 |
| 3 | 1 semana | HU-08, HU-09 y HU-11 |
| 4 | 1 semana | HU-06, HU-10, HU-12 y HU-13* |

\* HU-13 es condicional. Si el PO no prioriza la automatización, no se selecciona como compromiso; el PO y el equipo ajustan el contenido del Sprint conforme al backlog vigente y al tiempo disponible.

La asignación es el plan compartido por el equipo y puede revisarse con el PO. Una historia no se considera terminada solo porque se haya iniciado su Sprint.

## 6. Refinamiento antes de seleccionar una historia

Para cada historia que esté próxima a implementarse, el equipo debe poder responder:

1. ¿Qué necesidad concreta resuelve y quién la utiliza?
2. ¿Qué criterios de validación observables debe cumplir?
3. ¿Qué datos hacen falta y cuáles están confirmados?
4. ¿Qué dependencia existe con otra historia, pantalla o decisión?
5. ¿Qué casos normales, inválidos y de datos ausentes se probarán?
6. ¿Qué partes requieren respuesta del PO?
7. ¿Cómo se demostrará el resultado usando datos de prueba?

Si falta una decisión de negocio, se registra como pregunta para el PO en el lugar de trabajo acordado. No se reemplaza la pregunta con una regla inventada.

## 7. Cómo mantener el backlog sin perder decisiones

- Mantener el Markdown como fuente legible y el Word como copia de presentación; al editar contenido, actualizar ambas versiones desde el mismo texto acordado.
- Cada cambio debe indicar historia, criterio afectado, decisión del PO y fecha de actualización en el registro de equipo/Jira.
- Los acuerdos tomados por Discord se registran también en Jira o en las guías para que los cuatro Developers puedan encontrarlos.
- No borrar criterios anteriores sin registrar el cambio; revisar impactos en wireframes, MVP, modelo y pruebas.
- El responsable de una historia no es el único que entiende el módulo: otro Developer revisa y cada integrante conoce el recorrido general.
- Si el PO cambia prioridad, actualizar el backlog y el Sprint Backlog antes de asumir un nuevo compromiso.

## 8. Relación entre historias, proceso y pruebas

| Parte del proceso | Historias relacionadas | Evidencia esperada |
|---|---|---|
| Identificación y perfil | HU-01 a HU-04 | Búsqueda/resultado, alta o actualización y consulta del historial. |
| Visita e incidencia | HU-05 y HU-06 | Visita conservada con o sin incidencia; caso vinculado cuando corresponde. |
| Segmentación | HU-07 y HU-08 | Consulta de los cuatro criterios y resultado solo con regla acordada. |
| Promoción y campaña | HU-09, HU-10 y HU-11 | Pruebas de «aplica/no aplica», planificación diferenciada de la oferta y constancia o simulación claramente identificada. |
| Reporte | HU-12 | Filtros/periodo confirmados y datos contrastados con un conjunto de prueba. |
| Automatización candidata | HU-13 | Definición del PO, casos, resultados, informe y decisión explícita antes de activar. |

El MVP actual es un prototipo local sencillo; no demuestra por sí solo todos los criterios de las trece historias. La guía de prototipado identifica claramente qué muestra y qué queda pendiente.
