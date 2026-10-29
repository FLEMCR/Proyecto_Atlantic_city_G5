# Especificación de casos de uso — Atlantic City

Documento de trabajo del equipo que desarrolla, con el formato pedido por el profesor, la especificación completa de los casos de uso del sistema. Su versión de presentación es el punto 13 del informe `../../informe/Avance_Atlantic_City.docx`; este archivo añade los datos de entrada y salida por caso y el catálogo completo de reglas, excepciones y mensajes.

Formato base: plantilla «Descripción de Caso de Uso» del profesor, complementada con la guía de elaboración de casos de uso (identificadores CU, RN, FA, EXC, MSJ) y con las secciones de actores, trazabilidad y datos de la plantilla de especificación industrial entregada como material complementario.

## Control de versiones

| Versión | Fecha | Descripción | Autor |
|---|---|---|---|
| 1.0 | Semana 5 | Primera versión con CU01 a CU04, actores, trazabilidad, reglas y mensajes | Equipo de desarrollo, cuatro integrantes |

## 1. Actores del sistema

### 1.1 Ficha de actores

**Cliente**
- Identificador: AC-01
- Descripción: persona que recibe el servicio de Atlantic City; entrega sus datos y recibe información de su atención.
- Características: no opera el sistema; participa como fuente de datos y destinataria de la atención.
- Relación: es atendido por el Empleado de Servicio al Cliente / Operaciones.
- Referencias: CU01, CU02; historias HU-01 a HU-05.

**Empleado de Servicio al Cliente / Operaciones**
- Identificador: AC-02
- Descripción: identifica, registra y actualiza perfiles y deja constancia de visitas, interacciones e incidencias.
- Características: usuario operativo del sistema; trabaja con el registro local en la etapa actual.
- Relación: entrega a Marketing los criterios que consulta para evaluar promociones.
- Referencias: CU01, CU02; historias HU-01 a HU-06.

**Empleado de Marketing**
- Identificador: AC-03
- Descripción: registra campañas y promociones, consulta los criterios de segmentación y evalúa la elegibilidad de forma manual.
- Características: usuario analítico; sus decisiones de elegibilidad y clasificación no las calcula el sistema.
- Relación: consume la información que genera Servicio al Cliente.
- Referencias: CU03; historias HU-07 a HU-11.

**Gerencia o usuario autorizado**
- Identificador: AC-04
- Descripción: revisa la actividad de clientes y campañas mediante reportes para la toma de decisiones.
- Características: usuario de consulta; no modifica registros.
- Relación: recibe del Product Owner la confirmación de periodos e indicadores.
- Referencias: CU04; historia HU-12.

**Product Owner**
- Identificador: AC-05
- Descripción: profesor del curso; ordena el backlog, confirma reglas de negocio, periodos e indicadores y decide sobre la automatización candidata.
- Características: no ejecuta casos de uso del sistema; su confirmación es precondición de varios flujos.
- Referencias: precondición de CU04; historia HU-13 fuera del alcance actual.

### 1.2 Diagrama de actores

El diagrama de actores coincide con el recuadro de actores del diagrama general de casos de uso (figura 5 del informe): cuatro actores humanos a la izquierda y el Product Owner a la derecha, fuera de los casos ejecutables.

## 2. Matriz de trazabilidad

| Historia | Nombre | Caso de uso principal | Papel dentro del caso |
|---|---|---|---|
| HU-01 | Buscar e identificar un cliente | CU01 | Paso incluido: carga del perfil al escribir el identificador |
| HU-02 | Registrar el perfil de un cliente | CU01 | Flujo principal |
| HU-03 | Actualizar los datos del cliente | CU01 | Relacionada: actualización dentro del mismo recorrido |
| HU-04 | Consultar el perfil y su historial | CU01 | Relacionada: criterios e historial en la misma pantalla |
| HU-05 | Registrar una visita o interacción | CU02 | Flujo principal |
| HU-06 | Registrar y consultar una incidencia | CU02 | Paso incluido: incidencia opcional |
| HU-07 | Consultar los criterios de segmentación | CU03 | Paso incluido: consulta de los cuatro criterios |
| HU-08 | Consultar el segmento del cliente | CU03 | Relacionada: clasificación manual durante la evaluación |
| HU-09 | Evaluar si una promoción aplica | CU03 | Flujo principal |
| HU-10 | Definir y gestionar una campaña | CU03 | Relacionada: campaña como contexto de la promoción |
| HU-11 | Registrar y comunicar una oferta | CU03 | Relacionada: constancia local como resultado de «Aplica» |
| HU-12 | Consultar un reporte verificable | CU04 | Flujo principal |
| HU-13 | Probar una automatización candidata | Fuera del alcance actual | Pendiente de priorización del Product Owner |

## 3. Casos de uso

### CU01 — Registrar cliente

| Campo | Contenido |
|---|---|
| Descripción | Permite al empleado autorizado crear o actualizar el perfil de un cliente con los datos disponibles de la etapa actual, para que el perfil quede disponible en las atenciones y consultas posteriores del recorrido. |
| Actores | Empleado de Servicio al Cliente / Operaciones (ejecutor); Cliente (fuente de los datos). |
| Casos de uso asociados | Incluye la búsqueda e identificación del cliente (HU-01). Relacionado con consultar perfil e historial (HU-04). |
| Prioridad | Alta |
| Precondiciones | El empleado está usando el sistema con el registro local disponible. Para un alta, el identificador no está registrado; para una actualización, el identificador existe. |
| Postcondiciones | El perfil queda guardado en el registro local y disponible para consulta. En una actualización, los datos nuevos reemplazan a los anteriores sin perder el historial de atenciones. |
| Criterios de aceptación | El identificador y el nombre son obligatorios y el sistema no guarda sin ellos. Un identificador existente carga el perfil en lugar de duplicarlo en el MVP y bloquea el alta duplicada en la vista de clientes del prototipo. El perfil queda visible para consultas inmediatamente después de guardar. |
| Documentos anexos | Punto 9 del informe (MVP) y punto 10 (prototipo con navegación), donde se ven las pantallas. |

**Secuencia normal**

| # | Acción (actor) | Reacción (sistema) |
|---|---|---|
| 1 | Escribe el identificador del cliente en el campo de perfil. | Busca el identificador en el registro local. ● 1.1 Si existe, carga los datos guardados en los campos vacíos e informa que el perfil local fue cargado (MSJ04). ● 1.2 Si no existe, mantiene el formulario listo para un alta. |
| 2 | Completa o confirma nombre, nivel de gasto, preferencias de juegos y clasificación. | Valida que el nombre no quede vacío y respeta las longitudes máximas. |
| 3 | Confirma el registro del perfil. | Verifica que el identificador no duplique a otro perfil en un alta (MSJ07 si duplica), guarda el perfil nuevo o actualiza el existente y confirma (MSJ17 o MSJ18 en el prototipo). |
| 4 | — | Fin del caso de uso. |

**Excepciones**

| ID | Situación | Comportamiento del sistema |
|---|---|---|
| EXC01 | Confirma sin identificador o sin nombre. | Presenta MSJ01 y no guarda. |
| EXC02 | Alta con identificador existente en la vista de clientes del prototipo. | Presenta MSJ07, lleva el foco al campo y no duplica. |

| Rendimiento | Confirmación en un máximo de dos segundos en el entorno local, sin servidor. |
|---|---|
| Frecuencia | Por confirmar con el Product Owner; en demostración se usa en las sesiones del recorrido de clase. |
| Importancia | Vital |
| Urgencia | Inmediatamente |
| Comentarios | Guardado local en el navegador; la base central queda pendiente de acuerdo con el Product Owner. |

**Datos de entrada**

| Campo | Descripción | Tipo | Tamaño | Requerido | Validación | Valores |
|---|---|---|---|---|---|---|
| Identificador | Código único del cliente, por ejemplo AC-001 | Texto | 20 | Sí | Único, sin distinguir mayúsculas al comparar | Libre |
| Nombre | Nombre del cliente | Texto | 60 | Sí | No vacío | Libre |
| Nivel de gasto | Dato disponible para criterios | Texto | 40 | No | Longitud máxima | Libre o «No disponible» |
| Preferencias de juegos | Dato disponible para criterios | Texto | 80 | No | Longitud máxima | Libre o «No disponible» |
| Clasificación | Etiqueta manual de segmento | Texto | 40 | No | Se guarda tal como se escribe | Libre o «Sin clasificar» |

**Datos de salida**

| Campo | Descripción |
|---|---|
| Confirmación de registro | Mensaje de alta o actualización correcta. |
| Perfil cargado | Criterios e historial visibles en la misma pantalla y en la vista de clientes del prototipo. |

**Prototipo de pantalla**: paso 1 del MVP (`../../prototipado/MVP/`) y vista Clientes del prototipo con navegación.

### CU02 — Registrar visita o interacción

| Campo | Contenido |
|---|---|
| Descripción | Permite al empleado dejar constancia de una atención del cliente, como visita o como interacción, con la posibilidad de reportar una incidencia, para construir el historial unificado que hoy no existe. |
| Actores | Empleado de Servicio al Cliente / Operaciones (ejecutor); Cliente (fuente de los datos de la atención). |
| Casos de uso asociados | Incluye el registro y consulta de incidencia (HU-06). Requiere que el perfil exista (resultado de CU01). |
| Prioridad | Alta |
| Precondiciones | El perfil del cliente existe en el registro local y el empleado está usando el sistema. |
| Postcondiciones | La atención queda conservada en el historial con tipo, fecha y nota. Si se reportó incidencia, queda asociada. El historial queda disponible para consulta. |
| Criterios de aceptación | La atención se guarda aunque no haya incidencia ni promoción. La incidencia solo se guarda con descripción. El tipo de actividad admite únicamente Visita o Interacción y la frecuencia posterior suma solo visitas. |
| Documentos anexos | Punto 9 y punto 10 del informe. |

**Secuencia normal**

| # | Acción (actor) | Reacción (sistema) |
|---|---|---|
| 1 | Selecciona el cliente por su identificador y revisa el perfil cargado. | Muestra datos del perfil, criterios actuales e historial reciente. |
| 2 | Indica tipo de actividad (visita o interacción), fecha y nota opcional. | Valida la fecha y los campos obligatorios. |
| 3 | Decide si reporta una incidencia. | ● 3.1 Si la reporta, habilita el campo de descripción y lo vuelve obligatorio. ● 3.2 Si no, mantiene el bloque oculto y la atención continúa sin incidencia. |
| 4 | Confirma el registro. | Conserva la atención en el historial, con o sin incidencia y con o sin promoción, y confirma (MSJ14 en el MVP, MSJ19 en el prototipo). |
| 5 | — | Fin del caso de uso. |

**Excepciones**

| ID | Situación | Comportamiento del sistema |
|---|---|---|
| EXC03 | Cliente inexistente en el prototipo. | Presenta MSJ08 y no registra. |
| EXC04 | Incidencia activada sin descripción. | Presenta MSJ02 y no registra. |

| Rendimiento | Conservación y confirmación en un máximo de dos segundos en el entorno local. |
|---|---|
| Frecuencia | Por confirmar con el Product Owner; es el caso más usado del recorrido de demostración. |
| Importancia | Vital |
| Urgencia | Inmediatamente |
| Comentarios | Regla acordada RN01: la visita se conserva aunque no exista incidencia ni promoción. |

**Datos de entrada**

| Campo | Descripción | Tipo | Tamaño | Requerido | Validación | Valores |
|---|---|---|---|---|---|---|
| Cliente | Identificador del perfil atendido | Lista | 20 | Sí | Debe existir en el registro | Perfiles registrados |
| Tipo de actividad | Visita o Interacción | Lista | 12 | Sí | Selección única | Visita, Interacción |
| Fecha | Fecha de la atención | Fecha | 10 | Sí | Fecha válida, por defecto hoy | Calendario |
| Nota | Comentario libre de la atención | Texto | 200 | No | Longitud máxima | Libre |
| Incidencia | Marca de reporte | Booleano | — | No | Si está activa exige descripción | Sí, No |
| Descripción de incidencia | Relato breve del hecho | Texto | 300 | Solo con incidencia | No vacío si la marca está activa | Libre |

**Datos de salida**

| Campo | Descripción |
|---|---|
| Atención en el historial | Fila con fecha, cliente, tipo e incidencia en las vistas de historial. |
| Conteo actualizado | Indicadores de atenciones e incidencias. |

**Prototipo de pantalla**: paso 2 del MVP y vista Visitas e interacciones del prototipo.

### CU03 — Evaluar si una promoción aplica

| Campo | Contenido |
|---|---|
| Descripción | Permite al empleado de Marketing revisar, para un cliente y una promoción registrada, si la oferta aplica según los cuatro criterios y la decisión manual, dejando constancia local del resultado sin enviar comunicaciones externas. |
| Actores | Empleado de Marketing (ejecutor); Empleado de Servicio al Cliente / Operaciones (puede ejecutarla dentro del recorrido de atención del MVP). |
| Casos de uso asociados | Incluye como paso del flujo la consulta de los criterios de segmentación (HU-07). Relacionado con campaña (HU-10) y constancia local (HU-11). |
| Prioridad | Alta |
| Precondiciones | El perfil existe y hay una promoción registrada, con su campaña vinculada si corresponde. El empleado está usando el sistema. |
| Postcondiciones | La evaluación queda en el historial de promociones del cliente. Con «Aplica» se crea una constancia local; con «No aplica» no se crea comunicación. |
| Criterios de aceptación | Sin promoción seleccionada el resultado permanece deshabilitado. El resultado admite solo «Aplica» o «No aplica». Solo «Aplica» crea constancia y ningún resultado envía mensajes externos. Los cuatro criterios se muestran desde el registro local y la frecuencia suma solo visitas. |
| Documentos anexos | Punto 9 y punto 10 del informe; vista Promociones y campañas del prototipo. |

**Secuencia normal**

| # | Acción (actor) | Reacción (sistema) |
|---|---|---|
| 1 | Selecciona la promoción a evaluar y, si corresponde, la campaña vinculada. | Muestra la campaña asociada y habilita el campo de resultado. ● 1.1 Si no hay promoción, mantiene el resultado deshabilitado e indica seleccionar primero una promoción. |
| 2 | Consulta los cuatro criterios: frecuencia de visitas, nivel de gasto, preferencias de juegos e historial. | Presenta los criterios sobre el registro local; la frecuencia suma solo visitas. |
| 3 | Ingresa el resultado de la revisión manual: «Aplica» o «No aplica». | Valida que el resultado sea uno de los dos valores permitidos. |
| 4 | Confirma la evaluación. | Guarda la evaluación; con «Aplica» crea la constancia local sin enviar mensajes (MSJ10 o MSJ12) y con «No aplica» registra sin comunicación (MSJ11 o MSJ13). |
| 5 | — | Fin del caso de uso. |

**Excepciones**

| ID | Situación | Comportamiento del sistema |
|---|---|---|
| EXC05 | Evaluación confirmada sin resultado. | Presenta MSJ03 y lleva el foco al campo de resultado. |
| EXC06 | El navegador impide guardar el registro local. | Presenta MSJ05 o MSJ06 y mantiene los datos solo durante la sesión. |

| Rendimiento | Criterios y confirmación en un máximo de dos segundos en el entorno local. |
|---|---|
| Frecuencia | Por confirmar con el Product Owner; una ejecución por promoción evaluada. |
| Importancia | Importante |
| Urgencia | Inmediatamente |
| Comentarios | Clasificación y elegibilidad manuales (RN04). La automatización candidata es HU-13 y espera priorización. |

**Datos de entrada**

| Campo | Descripción | Tipo | Tamaño | Requerido | Validación | Valores |
|---|---|---|---|---|---|---|
| Campaña | Contexto de la promoción | Lista | — | No | Entidad distinta de la promoción | Campañas registradas |
| Promoción | Oferta a evaluar | Lista | — | Sí (para evaluar) | Debe existir | Promociones registradas |
| Cliente | Perfil evaluado | Lista o texto según versión | 20 | Sí | Debe existir | Perfiles registrados |
| Resultado | Decisión manual de elegibilidad | Lista | 10 | Sí con promoción | Solo dos valores | Aplica, No aplica |

**Datos de salida**

| Campo | Descripción |
|---|---|
| Evaluación en el historial | Fila con promoción, cliente, resultado y fecha. |
| Constancia local | Solo con «Aplica»; se marca como constancia local, sin comunicación enviada. |

**Prototipo de pantalla**: paso 3 del MVP y vista Promociones y campañas del prototipo.

### CU04 — Consultar reporte verificable

| Campo | Contenido |
|---|---|
| Descripción | Permite a la gerencia o a un usuario autorizado revisar conteos, distribución por clasificación y detalle de actividad sobre los registros disponibles, con indicación clara cuando no hay resultados, para apoyar la revisión de campañas y atenciones. |
| Actores | Gerencia o usuario autorizado (ejecutor); Product Owner (confirma periodo y filtros). |
| Casos de uso asociados | Ninguno incluido; consume los registros producidos por CU01 a CU03. |
| Prioridad | Media |
| Precondiciones | El periodo y los filtros están confirmados por el Product Owner y existen registros en la fuente consultada; en la versión actual, el registro local. |
| Postcondiciones | El reporte queda presentado o exportado con los mismos datos mostrados. La consulta no modifica registros. |
| Criterios de aceptación | Sin resultados se muestra un estado vacío claro y no se presentan datos parciales como totales. La exportación CSV contiene exactamente lo mostrado en pantalla, con acentos legibles en Excel. Las notas de datos de demostración y fuente local acompañan al reporte. |
| Documentos anexos | Vista Reportes del prototipo con navegación. |

**Secuencia normal**

| # | Acción (actor) | Reacción (sistema) |
|---|---|---|
| 1 | Abre el reporte y confirma periodo y filtros acordados. | Prepara la consulta sobre el registro local. |
| 2 | Solicita la generación del reporte. | Calcula conteos, distribución por clasificación y detalle por tipo. ● 2.1 Si no hay resultados para el filtro, presenta el estado vacío y no muestra parciales como totales. |
| 3 | Revisa las notas de origen y alcance de los datos. | Muestra las notas de datos de demostración y fuente local. |
| 4 | Exporta el archivo CSV si lo necesita. | Descarga un archivo con exactamente los datos presentados (MSJ25). |
| 5 | — | Fin del caso de uso. |

**Excepciones**

| ID | Situación | Comportamiento del sistema |
|---|---|---|
| EXC07 | El navegador bloquea la descarga del archivo. | No entrega el archivo; el usuario revisa permisos y repite. El reporte permanece en pantalla. |

| Rendimiento | Reporte completo en un máximo de cinco segundos con el volumen actual de demostración. |
|---|---|
| Frecuencia | Por confirmar con el Product Owner; se prevé una revisión por periodo acordado. |
| Importancia | Importante |
| Urgencia | Hay presión |
| Comentarios | Indicadores y periodo definitivos forman parte de HU-12 y esperan confirmación del Product Owner. |

**Datos de entrada**

| Campo | Descripción | Tipo | Requerido | Validación | Valores |
|---|---|---|---|---|---|
| Periodo | Ventana de tiempo acordada | Fecha | Confirmado por el PO | En la versión actual se consulta todo el registro local | Por acordar |
| Filtros | Clasificación o tipo de registro | Lista | No | Valores existentes | Clasificaciones y tipos presentes |

**Datos de salida**

| Campo | Descripción |
|---|---|
| Conteos | Totales de perfiles, atenciones, incidencias, evaluaciones y constancias. |
| Distribución por clasificación | Barras proporcionales con etiqueta y cantidad. |
| Detalle por tipo | Tabla de campañas, promociones, evaluaciones y constancias con sus notas. |
| Archivo CSV | `reporte_atlantic_city.csv` con las mismas filas mostradas. |

**Prototipo de pantalla**: vista Reportes del prototipo con navegación.

## 4. Reglas de negocio del sistema

| ID | Regla |
|---|---|
| RN01 | La visita o interacción se conserva en el historial aunque no exista incidencia ni promoción asociada. |
| RN02 | Un resultado «No aplica» no crea comunicación de ningún tipo. |
| RN03 | Un resultado «Aplica» crea únicamente una constancia local en la versión actual; no se envía ningún mensaje externo. |
| RN04 | La clasificación del cliente y la elegibilidad de la promoción se ingresan de forma manual; el sistema no las calcula. |
| RN05 | Campaña y promoción son entidades distintas; una promoción puede existir sin campaña o vincularse a una. |
| RN06 | La frecuencia de visitas suma únicamente atenciones de tipo «Visita»; las interacciones no se acumulan. |
| RN07 | El identificador de cliente es único dentro del registro; un alta con identificador existente se bloquea en las vistas de perfil. |
| RN08 | Todos los registros de ejemplo están identificados como datos de demostración; no existe conexión con sistemas reales de Atlantic City. |

## 5. Excepciones del sistema

Catálogo único; cada caso de uso referencia los identificadores que le aplican.

| ID | Excepción | Casos donde aplica |
|---|---|---|
| EXC01 | Datos obligatorios vacíos al confirmar un registro: el sistema presenta el mensaje correspondiente y no guarda. | CU01, CU02, CU03 |
| EXC02 | Identificador duplicado en un alta de perfil. | CU01 |
| EXC03 | Cliente inexistente seleccionado para una atención. | CU02 |
| EXC04 | Incidencia marcada sin descripción. | CU02 |
| EXC05 | Evaluación de promoción sin resultado. | CU03 |
| EXC06 | Persistencia local no disponible en el navegador. | CU01, CU02, CU03 |
| EXC07 | Descarga bloqueada por el navegador al exportar. | CU04 |

## 6. Mensajes del sistema

| ID | Contenido | Dónde se presenta |
|---|---|---|
| MSJ01 | Completa el identificador y el nombre del cliente. | MVP: registro sin datos obligatorios |
| MSJ02 | Describe brevemente la incidencia o desmarca esa opción. | MVP: incidencia sin descripción |
| MSJ03 | Selecciona el resultado de revisión manual de la promoción. | MVP y prototipo: evaluación sin resultado |
| MSJ04 | Perfil local (identificador) cargado. Puedes actualizar los datos disponibles. | MVP: identificador coincide con un perfil |
| MSJ05 | No se pudieron guardar los cambios en este navegador. | MVP: falla de persistencia |
| MSJ06 | No se pudo guardar en este navegador. | Prototipo: falla de persistencia |
| MSJ07 | Ese identificador ya está registrado. | Prototipo: identificador duplicado |
| MSJ08 | Selecciona un cliente registrado. | Prototipo: atención sin cliente válido |
| MSJ09 | Selecciona una promoción, un cliente y el resultado de revisión. | Prototipo: evaluación incompleta |
| MSJ10 | Revisión guardada. Se creó una constancia local; no se envió un mensaje. | Prototipo: resultado «Aplica» |
| MSJ11 | Revisión guardada como «No aplica»; no se registró comunicación. | Prototipo: resultado «No aplica» |
| MSJ12 | Atención registrada. Se creó una constancia local; no se envió un mensaje. | MVP: atención con «Aplica» |
| MSJ13 | Atención y revisión registradas. No se creó comunicación. | MVP: atención con «No aplica» |
| MSJ14 | Visita o interacción registrada en el historial local. | MVP: atención sin promoción |
| MSJ15 | Registro guardado en este navegador. | MVP: persistencia correcta |
| MSJ16 | Registro disponible solo en esta sesión. | MVP: persistencia no disponible |
| MSJ17 | Cliente registrado. | Prototipo: alta de perfil |
| MSJ18 | Perfil actualizado. | Prototipo: edición de perfil |
| MSJ19 | Visita o interacción registrada. | Prototipo: alta de atención |
| MSJ20 | Incidencia registrada. | Prototipo: alta de incidencia |
| MSJ21 | Etiqueta manual guardada. | Prototipo: clasificación manual |
| MSJ22 | Campaña registrada; no se marca como aprobada o publicada. | Prototipo: alta de campaña |
| MSJ23 | Promoción registrada. | Prototipo: alta de promoción |
| MSJ24 | Nota de seguimiento guardada. | Prototipo: seguimiento de incidencia |
| MSJ25 | Reporte CSV descargado. | Prototipo: exportación |

## 7. Relación con los diagramas

- Cada caso de uso de este documento corresponde a elipses del diagrama general (figura 5 del informe): CU01 agrupa HU-01 a HU-04, CU02 agrupa HU-05 y HU-06, CU03 agrupa HU-07 a HU-11 y CU04 corresponde a HU-12.
- Las secuencias normales de CU01, CU02 y CU03 coinciden paso a paso con los diagramas de secuencia de las figuras 6, 7 y 8 del informe; las alternativas ● X.X del texto son los fragmentos `alt` del diagrama.
- Las clases del diagrama de la figura 9 (Cliente, Visita, Incidencia, Constancia, Promocion, Campana) son los datos de entrada y salida persistentes de estos casos.
- Cualquier cambio en un flujo de este documento obliga a revisar diagrama, secuencia, clases, código del MVP o prototipo y el punto correspondiente del informe: los cinco deben decir lo mismo.
