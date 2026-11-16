# Guía: diagrama Bizagi con un solo inicio y un solo fin

## Por qué

El profesor pidió simplificar el modelo Bizagi: **un único evento de inicio y un único evento de fin** en el diagrama principal (hoy hay cuatro inicios y varios fines). Además, la hoja de ruta pide presentar en la semana 12 el proceso **AS-IS y TO-BE**, así que el redibujo aprovecha para dejar esa distinción bien hecha.

Borradores visuales de referencia (no son entregables, son para calcar en Bizagi Modeler): `Boceto_Bizagi_un_inicio_un_fin.png` (TO-BE) y `Boceto_Bizagi_AS_IS.png` (AS-IS).

## Qué NO cambia

- El pool Atlantic City y sus seis carriles: Cliente, Servicio al Cliente / Operaciones, Sistema CRM / datos, Marketing, Gerencia General / Product Owner y Gerencia de TI.
- El subproceso de segmentación (sus cinco tareas y su carril del sistema): se deja colapsado igual que hoy.
- Las reglas de negocio: RN01 a RN08 siguen rigiendo las mismas compuertas y los mismos textos.
- La condicionalidad de la automatización (HU-13): solo entra si el PO la prioriza.

## Estructura objetivo (diagrama principal = TO-BE)

| # | Elemento | Tipo | Carril | Nombre sugerido |
|---|---|---|---|---|
| 1 | Evento de inicio (único) | inicio | Cliente | Solicitud de atención o necesidad de gestión del negocio |
| 2 | Compuerta exclusiva | XOR | Servicio al Cliente | ¿Qué recorrido inicia? (salidas rotuladas: Atención, Campaña, Reporte, Automatización) |
| 3 | Tarea | tarea | Servicio al Cliente | Identificar al cliente y validar el perfil |
| 4 | Tarea | tarea | Servicio al Cliente | Registrar la visita o interacción |
| 5 | Tarea | tarea | Servicio al Cliente | Registrar la incidencia si se reporta |
| 6 | Tarea | tarea | Sistema CRM / datos | Guardar el historial |
| 7 | Subproceso | subproceso | Sistema CRM / datos | Segmentación de clientes (detalle sin cambios) |
| 8 | Compuerta exclusiva | XOR | Sistema CRM / datos | ¿Cumple los criterios de promoción? |
| 9 | Tarea | tarea | Marketing | Seleccionar, registrar y comunicar la oferta |
| 10 | Tarea | tarea | Marketing | Definir la campaña: objetivo, público y criterios |
| 11 | Tarea | tarea | Marketing | Diseñar la promoción con su vigencia |
| 12 | Compuerta exclusiva | XOR | Gerencia General / PO | Revisión del PO: ¿aprueba? (ajustar vuelve a 10; aprobar sigue) |
| 13 | Tarea | tarea | Marketing | Registrar la promoción aprobada |
| 14 | Tarea | tarea | Gerencia General / PO | Solicitar el reporte |
| 15 | Tarea | tarea | Gerencia General / PO | Definir periodo y alcance |
| 16 | Tarea | tarea | Sistema CRM / datos | Consultar los datos disponibles |
| 17 | Tarea | tarea | Sistema CRM / datos | Presentar el resultado para su revisión |
| 18 | Tarea | tarea | Gerencia de TI | Definir la tarea con sus reglas y excepciones |
| 19 | Tarea | tarea | Gerencia de TI | Configurar y probar |
| 20 | Tarea | tarea | Gerencia de TI | Informar los resultados al PO |
| 21 | Compuerta exclusiva | XOR | Gerencia de TI / PO | PO: ¿la prioriza? (si no, queda inactiva y se conserva el resultado) |
| 22 | Compuerta exclusiva de unión | XOR | Sistema CRM / datos | Cierre de los recorridos (sin rótulo de negocio) |
| 23 | Evento de fin (único) | fin | Sistema CRM / datos | Registros y resultados conservados en el sistema |

Flujos clave:

- 1 → 2; y desde 2 salen los cuatro recorridos rotulados: Atención (3), Campaña (10), Reporte (14), Automatización (18).
- Atención: 3 → 4 → 5 → 6 → 7 → 8; 8 con «sí» → 9; 8 con «no» → 22 (la atención termina sin oferta, RN02).
- Campaña: 10 → 11 → 12; 12 «ajustar» → 10 (flecha de retroceso); 12 «aprobar» → 13 → 22.
- Reporte: 14 → 15 → 16 → 17 → 22.
- Automatización: 18 → 19 → 20 → 21; 21 con cualquier salida → 22 (si no se prioriza queda inactiva, pero el resultado de la prueba se conserva).
- 9 → 22; y 22 → 23. Todos los caminos terminan en el mismo fin.

## Estructura objetivo del AS-IS (boceto `Boceto_Bizagi_AS_IS.png`)

El AS-IS dibuja cómo se atiende hoy, sin el sistema propuesto, también con un inicio y un fin únicos. En Bizagi se dibuja como segundo diagrama del mismo pool; los carriles que hoy no participan (Sistema CRM / datos y Gerencia de TI) quedan sin elementos en este diagrama.

| # | Elemento | Tipo | Carril | Nombre sugerido |
|---|---|---|---|---|
| 1 | Evento de inicio (único) | inicio | Cliente | El cliente solicita atención o registro |
| 2 | Tarea | tarea | Servicio al Cliente / Operaciones | Buscar los datos del cliente en aplicaciones que no se comunican |
| 3 | Compuerta exclusiva | XOR | Servicio al Cliente / Operaciones | ¿El dato se encuentra y no está duplicado? («no o duplicado» → 4; «sí» → 5) |
| 4 | Tarea | tarea | Servicio al Cliente / Operaciones | Volver a capturar y conciliar a mano |
| 5 | Tarea | tarea | Servicio al Cliente / Operaciones | Atender con la información disponible |
| 6 | Compuerta exclusiva | XOR | Servicio al Cliente / Operaciones | ¿Qué área registra el resultado? (atención → 7, marketing → 8, gerencia → 9) |
| 7 | Tarea | tarea | Servicio al Cliente / Operaciones | Guardar la atención en planillas propias |
| 8 | Tarea | tarea | Marketing | Guardar promociones y campañas en planillas propias |
| 9 | Tarea | tarea | Gerencia General / Product Owner | Armar el reporte a mano entre planillas de áreas |
| 10 | Compuerta exclusiva de unión | XOR | Servicio al Cliente / Operaciones | Cierre sin registro compartido |
| 11 | Evento de fin (único) | fin | Servicio al Cliente / Operaciones | Información dispersa y expuesta a duplicidad |

Flujos: 1 → 2 → 3; 3 «no o duplicado» → 4 → 5; 3 «sí» → 5; 5 → 6; 6 → 7, 6 → 8 y 6 → 9; 7, 8 y 9 → 10; 10 → 11. El texto que acompaña este diagrama en el informe es el de la sección 4.1.

## Paso a paso en Bizagi Modeler

1. Abrir el archivo actual del pool Atlantic City y guardar una copia de respaldo antes de tocar nada.
2. Borrar los tres eventos de inicio de campaña, reporte y automatización; dejar uno solo en el carril Cliente con el nombre del elemento 1.
3. Agregar la compuerta exclusiva 2 después del inicio y reconectar las cuatro rutas existentes a sus salidas, rotulando cada flujo (Atención, Campaña, Reporte, Automatización).
4. Borrar los eventos de fin sobrantes; agregar la compuerta de unión 22 y el fin único 23; llevar la salida de cada recorrido a la compuerta 22 y de ahí al fin.
5. Revisar: ninguna tarea sin flecha de entrada y salida, ninguna compuerta con una sola salida sin rótulo, los seis carriles siguen participando.
6. Verificar contra el boceto de referencia que ningún recorrido nuevo se inventó: los cuatro son los mismos de hoy, solo cambia el arranque y el cierre.
7. Exportar el PNG en alta resolución (mismo tamaño de exportación que el actual) y guardarlo como `Atlantic_city_grupo_cinco.png` (o `_v2` si se prefiere conservar el anterior).
8. Con el PNG nuevo: reemplazar la Figura 1 del informe Word, la Figura 1 del PPT editable y la diapositiva del deck del equipo; regenerar los acercamientos del PPT si algún recorte quedó desalineado.

## Textos de reemplazo para el informe (pegar al actualizar la sección 4)

**4.1 Proceso actual — AS-IS (nuevo diagrama sencillo, también con un inicio y un fin).**
«El AS-IS muestra cómo se atiende hoy, sin el sistema propuesto: el cliente solicita atención o registro; el personal busca sus datos en aplicaciones que no se comunican; cuando no los encuentra o están duplicados vuelve a capturarlos y concilia a mano; la atención se brinda con la información disponible; y el resultado queda en planillas o aplicaciones locales de cada área. El recorrido termina con la información dispersa y expuesta a duplicidad, que es exactamente el problema que el sistema propuesto resuelve. Este diagrama tiene un solo inicio y un solo fin.»

**4.2 Proceso propuesto — TO-BE (el diagrama simplificado).**
«El TO-BE conserva el pool de seis carriles y el subproceso de segmentación, pero ahora arranca con un único evento de inicio: el cliente solicita atención o el negocio identifica una necesidad de gestión. Una compuerta exclusiva dirige el trabajo a uno de los cuatro recorridos: la atención del cliente, la campaña de Marketing, el reporte que pide Gerencia o la automatización candidata que prueba TI bajo autorización del Product Owner. Cada recorrido conserva sus tareas, compuertas y reglas de hoy; al terminar, todos confluyen en una compuerta de unión y en un único evento de fin: los registros y resultados quedan conservados en el sistema. La simplificación es de forma, no de fondo: ninguna regla de negocio cambió.»

**4.3 Alcance del diagrama**: se mantiene el texto actual del informe sin cambios.

## Pendientes ligados a este redibujo

- Hasta que exista el PNG nuevo, el informe y los PPT siguen mostrando el diagrama de cuatro inicios; no mezclar versiones.
- El boceto AS-IS ya está dibujado (`Boceto_Bizagi_AS_IS.png`) con su tabla de 11 elementos: lo que falta es dibujarlo en Modeler junto con el TO-BE y exportar ambos PNG para el informe y los PPT de la semana 12.
- El guion de exposición, la Guía Principal y la Guía de Modelado ya quedaron actualizados a la lectura de inicio común y fin único; lo único que espera al PNG nuevo de Bizagi son las imágenes del informe y de los PPT.
- La decisión de qué borrar o conservar en el AS-IS es del equipo con el PO; la propuesta de 4.1 es el mínimo suficiente para la semana 12.
