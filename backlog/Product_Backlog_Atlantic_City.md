# PRODUCT BACKLOG — ATLANTIC CITY

**Proyecto:** Modernización del Sistema de Gestión de Clientes

## 1. Objetivo del producto

Desarrollar un sistema de información que permita centralizar los perfiles e historial de clientes, registrar visitas e incidencias, consultar segmentos, gestionar promociones y campañas, y generar reportes que apoyen la atención al cliente y la toma de decisiones.

## 2. Lista del Product Backlog

| ID | Nombre de la historia de usuario | Prioridad |
|---|---|---|
| HU-01 | Buscar e identificar un cliente | Alta |
| HU-02 | Registrar el perfil de un cliente | Alta |
| HU-03 | Actualizar los datos del cliente | Alta |
| HU-04 | Consultar el perfil y su historial | Alta |
| HU-05 | Registrar una visita o interacción | Alta |
| HU-06 | Registrar y consultar una incidencia | Media |
| HU-07 | Consultar los criterios de segmentación | Alta |
| HU-08 | Consultar el segmento del cliente | Alta |
| HU-09 | Evaluar si una promoción aplica | Alta |
| HU-10 | Definir y gestionar una campaña | Media |
| HU-11 | Registrar y comunicar una oferta | Alta |
| HU-12 | Consultar un reporte verificable | Media |
| HU-13 | Probar una automatización candidata | Baja / condicionada |

## 3. Historias de usuario y criterios de validación

### HU-01 — Buscar e identificar un cliente

**Prioridad:** Alta

**Como:** empleado autorizado de Servicio al Cliente/Operaciones.  
**Quiero:** buscar un perfil con el identificador que se confirme.  
**Para:** saber si el cliente ya está registrado y evitar duplicidades.

**Criterios de validación**
- La búsqueda utiliza el identificador acordado con el Product Owner.
- Si encuentra una coincidencia, muestra el perfil correspondiente y solo la información autorizada.
- Si no hay coincidencias, lo indica claramente y permite iniciar el registro si ese paso está incluido.
- La prueba se realiza con registros de prueba.

### HU-02 — Registrar el perfil de un cliente

**Prioridad:** Alta

**Como:** empleado autorizado de Servicio al Cliente/Operaciones.  
**Quiero:** registrar un perfil con los campos definidos.  
**Para:** contar con la información necesaria para atender al cliente.

**Criterios de validación**
- El formulario solicita únicamente los campos confirmados por el Product Owner.
- Si falta un campo obligatorio o el formato no es válido, indica qué debe corregirse y no confirma el registro.
- Los posibles duplicados se tratan según la regla acordada; no se fusionan perfiles automáticamente por una coincidencia no confirmada.
- Al completar el registro, el perfil puede volver a consultarse.

### HU-03 — Actualizar los datos del cliente

**Prioridad:** Alta

**Como:** empleado autorizado de Servicio al Cliente/Operaciones.  
**Quiero:** revisar y corregir los datos permitidos de un perfil.  
**Para:** mantener la información del cliente actualizada.

**Criterios de validación**
- Solo se modifican los campos autorizados para el usuario y el alcance definido.
- Los datos inválidos generan un mensaje claro y no se confirman como guardados.
- Después de guardar, la consulta del perfil muestra los cambios realizados.
- La actualización no elimina visitas, interacciones ni promociones ya registradas.

### HU-04 — Consultar el perfil y su historial

**Prioridad:** Alta

**Como:** empleado autorizado.  
**Quiero:** consultar la ficha del cliente y su historial disponible.  
**Para:** brindar una atención coherente con la información registrada.

**Criterios de validación**
- La ficha muestra los datos disponibles y autorizados para ese usuario.
- Las visitas, interacciones e historial de promociones incluidos en el sistema aparecen asociados al perfil correcto.
- La pantalla distingue entre «sin registros» y un error al cargar la información.

### HU-05 — Registrar una visita o interacción

**Prioridad:** Alta

**Como:** empleado autorizado de Servicio al Cliente/Operaciones.  
**Quiero:** registrar una visita o interacción asociada a un cliente.  
**Para:** mantener actualizado su historial de atención.

**Criterios de validación**
- El registro queda asociado al perfil correcto.
- El formulario utiliza solo los datos mínimos confirmados.
- Una vez confirmado, el registro aparece en el historial del cliente.
- La visita queda registrada aunque no haya incidencia o no corresponda una promoción.

### HU-06 — Registrar y consultar una incidencia

**Prioridad:** Media

**Como:** empleado de Servicio al Cliente/Operaciones.  
**Quiero:** registrar una incidencia reportada y consultar su estado.  
**Para:** dar seguimiento a una queja, consulta o solicitud relacionada con la atención.

**Criterios de validación**
- Solo se crea una incidencia cuando se reporta una; si no se reporta, no se genera un caso.
- La incidencia se vincula al perfil correspondiente cuando este se encuentra disponible.
- Los campos, estados y solución se limitan a los que confirme el Product Owner.
- No se presuponen plazos ni procedimientos que no hayan sido acordados.

### HU-07 — Consultar los criterios de segmentación

**Prioridad:** Alta

**Como:** personal autorizado de Marketing.  
**Quiero:** consultar la frecuencia de visitas, el nivel de gasto, las preferencias de juegos y el historial de promociones.  
**Para:** contar con los insumos previstos para clasificar al cliente.

**Criterios de validación**
- La consulta considera esos cuatro criterios de segmentación.
- Cada dato se asocia al cliente correcto.
- Si un dato no existe o no está autorizado, se indica como ausente o no disponible; no se inventa ni se sustituye silenciosamente.
- Los criterios y ejemplos utilizados se validan con el Product Owner.

### HU-08 — Consultar el segmento del cliente

**Prioridad:** Alta

**Como:** personal autorizado de Marketing.  
**Quiero:** consultar la clasificación obtenida con los criterios aprobados.  
**Para:** orientar el análisis o una oferta cuando corresponda.

**Criterios de validación**
- La clasificación utiliza únicamente la regla confirmada por el Product Owner.
- Si no existe una regla aprobada o faltan datos necesarios, se informa que no es posible asignar un segmento.
- No se inventan umbrales, ponderaciones, fórmulas ni nombres de segmentos.
- El resultado puede comprobarse con casos acordados.

### HU-09 — Evaluar si una promoción aplica

**Prioridad:** Alta

**Como:** sistema CRM.  
**Quiero:** evaluar la elegibilidad de una oferta según criterios aprobados.  
**Para:** continuar por la ruta correcta sin comunicar una promoción no aplicable.

**Criterios de validación**
- El resultado indica «aplica» o «no aplica» según la regla confirmada.
- Si no aplica, no se registra una oferta como comunicada y la visita permanece en el historial.
- Si aplica, el proceso continúa con una oferta autorizada.
- Se prueban ambos resultados y no se inventan motivos de elegibilidad.

### HU-10 — Definir y gestionar una campaña

**Prioridad:** Media

**Como:** personal de Marketing.  
**Quiero:** definir el objetivo, el público y los criterios de una campaña, y preparar la promoción correspondiente.  
**Para:** organizar una oferta para el público acordado.

**Criterios de validación**
- Los campos de objetivo, público, criterios, promoción y vigencia se incluyen según lo confirmado.
- El mecanismo y responsable de aprobación formal se incorporan solo si los confirma el Product Owner.
- Una campaña pendiente o rechazada no se presenta como publicada.
- Si no hay un canal de publicación disponible, se identifica claramente que la publicación es simulada.

### HU-11 — Registrar y comunicar una oferta

**Prioridad:** Alta

**Como:** personal autorizado de Marketing.  
**Quiero:** asociar una promoción aplicable al cliente y dejar constancia de su comunicación.  
**Para:** personalizar la atención y conservar el historial de promociones.

**Criterios de validación**
- La oferta se registra solo cuando corresponde según la evaluación aprobada.
- La promoción queda asociada al cliente y a la campaña cuando esa relación esté definida.
- El historial refleja la oferta registrada.
- Si no hay un canal real de comunicación, el resultado se identifica como simulado y no se afirma que se envió un mensaje real.

### HU-12 — Consultar un reporte verificable

**Prioridad:** Media

**Como:** gerente o usuario autorizado.  
**Quiero:** consultar un reporte para el periodo y alcance solicitados.  
**Para:** revisar la actividad de clientes o campañas con información verificable.

**Criterios de validación**
- Los indicadores, periodo y filtros se confirman antes de generar el reporte.
- Los valores coinciden con un conjunto de datos de prueba conocido.
- Si no hay resultados, el sistema lo indica claramente.
- El reporte muestra solo la información autorizada y necesaria; la consulta es una ruta independiente de la atención al cliente.

### HU-13 — Probar una automatización candidata

**Prioridad:** Baja / condicionada

**Como:** equipo de TI.  
**Quiero:** probar una tarea repetitiva priorizada y presentar los resultados.  
**Para:** obtener una decisión antes de considerar su activación.

**Criterios de validación**
- Esta historia solo se selecciona si el Product Owner prioriza la automatización y confirma la tarea, las reglas y las excepciones.
- La prueba registra el resultado esperado, el obtenido y cualquier error.
- La prueba técnica no equivale a aprobación: no se activa sin una decisión explícita del Product Owner.
- Si se solicitan ajustes o se rechaza la propuesta, permanece inactiva; cualquier simulación se identifica como tal.

## 4. Planificación propuesta de Sprints

| Sprint | Duración | Historias de usuario |
|---|---|---|
| Sprint 1 | 1 semana | HU-01, HU-02, HU-03, HU-04 |
| Sprint 2 | 1 semana | HU-05, HU-07 |
| Sprint 3 | 1 semana | HU-08, HU-09, HU-11 |
| Sprint 4 | 1 semana | HU-06, HU-10, HU-12, HU-13* |

\* HU-13 es de prioridad baja/condicionada; solo se incorpora si el Product Owner la prioriza y confirma su definición. La asignación a Sprint es una planificación propuesta y puede cambiar por decisión del PO y la capacidad del equipo.

## 5. Product Backlog ordenado por prioridad

| Orden | ID | Historia de usuario | Prioridad |
|---:|---|---|---|
| 1 | HU-01 | Buscar e identificar un cliente | Alta |
| 2 | HU-02 | Registrar el perfil de un cliente | Alta |
| 3 | HU-03 | Actualizar los datos del cliente | Alta |
| 4 | HU-04 | Consultar el perfil y su historial | Alta |
| 5 | HU-05 | Registrar una visita o interacción | Alta |
| 6 | HU-07 | Consultar los criterios de segmentación | Alta |
| 7 | HU-08 | Consultar el segmento del cliente | Alta |
| 8 | HU-09 | Evaluar si una promoción aplica | Alta |
| 9 | HU-11 | Registrar y comunicar una oferta | Alta |
| 10 | HU-06 | Registrar y consultar una incidencia | Media |
| 11 | HU-10 | Definir y gestionar una campaña | Media |
| 12 | HU-12 | Consultar un reporte verificable | Media |
| 13 | HU-13 | Probar una automatización candidata | Baja / condicionada |
