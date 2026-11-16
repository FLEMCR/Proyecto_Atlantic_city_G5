# Guion de exposición — Atlantic City (PPT del equipo, 17 diapositivas)

Versión final y sencilla para la sustentación, autocontenida: **al inicio están las cinco tablas completas de los códigos del proyecto** (qué son, de dónde salieron, dónde se usan y cuáles son, uno por uno); después viene el guion y al final el banco de preguntas del profesor. Forma de usarlo la noche anterior: leer las tablas una vez para saber de qué habla todo el mundo, leer el guion rápido y memorizar solo el bloque propio. Está escrito sobre el PPT ya corregido: primero se aplican las tres correcciones del final y después se expone con este texto.

**Duración:** el profesor dio hasta 15 minutos; el equipo acordó 12 (3 por expositor). El guion suma 11:40 hablando tranquilo: hay margen para los pases y la demo sin pasarse de 12:00. El PPT con el que se sustenta es `Proyectocapavistaatlantic_corregido_editable.pptx` (22 diapositivas): trae las tres correcciones aplicadas, tablas nativas editables y el Bizagi en alta resolución, con el diagrama completo, el subproceso y cinco acercamientos (diapositivas 7 a 11) para explicar cada recorrido de inicio a fin sin pixeles. Si sobra tiempo en la sustentación, se usa en la demostración de Salomón, no en agregar texto.

## Los cinco códigos del proyecto, completos

### HU — Historias de usuario (son 13)

**Qué son:** la necesidad del negocio escrita como «Como [quién], quiero [qué], para [qué]» con sus criterios de aceptación.
**De dónde salieron:** de las actividades reales del día a día que se identificaron al modelar el proceso en Bizagi, convertidas en capacidades con valor de negocio; el Product Owner las prioriza. El formato es el de los puntos 6 y 7 de la estructura propuesta del curso.
**Dónde se usan:** en el backlog (`../backlog/Product_Backlog_Atlantic_City.md` y su Word), en el plan de sprints, en la matriz de trazabilidad (slide 8 del PPT) y en las pantallas: cada vista del prototipo responde a historias concretas. Slides 7 y 8.

| ID | Historia | Prioridad | Sprint |
|---|---|---|---|
| HU-01 | Buscar e identificar un cliente | Alta | 1 |
| HU-02 | Registrar el perfil de un cliente | Alta | 1 |
| HU-03 | Actualizar los datos del cliente | Alta | 1 |
| HU-04 | Consultar el perfil y su historial | Alta | 1 |
| HU-05 | Registrar una visita o interacción | Alta | 2 |
| HU-06 | Registrar y consultar una incidencia | Media | 4 |
| HU-07 | Consultar los criterios de segmentación | Alta | 2 |
| HU-08 | Consultar el segmento del cliente | Alta | 3 |
| HU-09 | Evaluar si una promoción aplica | Alta | 3 |
| HU-10 | Definir y gestionar una campaña | Media | 4 |
| HU-11 | Registrar y comunicar una oferta | Alta | 3 |
| HU-12 | Consultar un reporte verificable | Media | 4 |
| HU-13 | Probar una automatización candidata | Baja / condicionada | 4* |

\* HU-13 solo se incorpora si el Product Owner la prioriza y confirma su definición.

### CU — Casos de uso (son 4 principales)

**Qué son:** el recorrido observable entre un actor y el sistema que produce un resultado completo. Agrupan varias historias.
**De dónde salieron:** de agrupar las historias priorizadas en recorridos actor–sistema. La estructura propuesta pide describir «3 o 4 casos principales» y el curso da la plantilla de descripción de caso de uso; con esa plantilla están escritos en la especificación.
**Dónde se usan:** en el diagrama de casos de uso (slide 11), en los tres diagramas de secuencia (slides 12 a 14), en la especificación (`../modelado/casos_de_uso/Especificacion_Casos_de_Uso_Atlantic_City.md`), en el Word del equipo y en la matriz HU↔CU (slide 8). Ojo: el diagrama muestra doce casos nombrados por la tarea; la especificación describe los 4 principales que los consolidan.

| CU | Nombre | Historias que agrupa | Actor que lo ejecuta |
|---|---|---|---|
| CU01 | Registrar cliente | HU-01 a HU-04 | Empleado de Servicio al Cliente / Operaciones |
| CU02 | Registrar visita o interacción | HU-05 y HU-06 | Empleado de Servicio al Cliente / Operaciones |
| CU03 | Evaluar si una promoción aplica | HU-07 a HU-11 | Empleado de Marketing |
| CU04 | Consultar reporte verificable | HU-12 | Gerencia o usuario autorizado |

HU-13 queda fuera del alcance actual. El Product Owner no ejecuta casos: confirma reglas y prioriza. El cliente tampoco es actor: no opera el sistema, entrega datos y recibe atención.

### RN — Reglas de negocio (son 8)

**Qué son:** decisiones del negocio que serían ciertas aunque el sistema no existiera; el sistema se limita a respetarlas. Solo el PO las decide.
**De dónde salieron:** de las decisiones que el PO confirmó en las compuertas del proceso en Bizagi (¿la atención se conserva sin incidencia?, ¿qué hace «Aplica» y «No aplica»?, ¿qué pasa si no hay fórmula de segmentos?, ¿el identificador se puede repetir?). El formato del código [RN0X] viene de la Plantilla de Especificación de Casos de Uso del profesor.
**Dónde se usan:** en el campo «Comentarios» de las fichas de casos, en los fragmentos alt y mensajes de las secuencias, en las multiplicidades del diagrama de clases (slide 15), en las validaciones del código del MVP y del prototipo, y en los slides 6 y 12 a 15 del PPT.

| RN | Regla |
|---|---|
| RN01 | La visita o interacción se conserva en el historial aunque no exista incidencia ni promoción asociada. |
| RN02 | Un resultado «No aplica» no crea comunicación de ningún tipo. |
| RN03 | Un resultado «Aplica» crea únicamente una constancia local en la versión actual; no se envía ningún mensaje externo. |
| RN04 | La clasificación del cliente y la elegibilidad de la promoción se ingresan de forma manual; el sistema no las calcula. |
| RN05 | Campaña y promoción son entidades distintas; una promoción puede existir sin campaña o vincularse a una. |
| RN06 | La frecuencia de visitas suma únicamente atenciones de tipo «Visita»; las interacciones no se acumulan. |
| RN07 | El identificador de cliente es único dentro del registro; un alta con identificador existente se bloquea en las vistas de perfil. |
| RN08 | Todos los registros de ejemplo están identificados como datos de demostración; no existe conexión con sistemas reales de Atlantic City. |

### EXC — Excepciones (son 7)

**Qué son:** el camino de error de un caso: qué lo dispara y cómo lo resuelve el sistema (en general: avisa con su mensaje y no guarda).
**De dónde salieron:** de las validaciones que las reglas y los datos obligatorios exigen en cada caso (la duplicidad de RN07, la descripción obligatoria de la incidencia, el resultado faltante en la evaluación…). El formato [EXC01] viene de la misma plantilla del profesor.
**Dónde se usan:** en el campo de excepciones de las fichas de casos, en las ramas de error de las secuencias y en las validaciones del código: cada excepción presenta su mensaje MSJ.

| EXC | Qué pasa | Casos donde ocurre |
|---|---|---|
| EXC01 | Datos obligatorios vacíos al confirmar un registro: presenta el mensaje correspondiente (MSJ01) y no guarda. | CU01, CU02, CU03 |
| EXC02 | Identificador duplicado en un alta de perfil: presenta MSJ07, lleva el foco al campo y no duplica. | CU01 |
| EXC03 | Cliente inexistente seleccionado para una atención. | CU02 |
| EXC04 | Incidencia marcada sin descripción. | CU02 |
| EXC05 | Evaluación de promoción sin resultado. | CU03 |
| EXC06 | Persistencia local no disponible en el navegador. | CU01, CU02, CU03 |
| EXC07 | Descarga bloqueada por el navegador al exportar. | CU04 |

### MSJ — Mensajes (son 32)

**Qué son:** la cadena literal que muestra la pantalla, idéntica a la que está escrita en el código del MVP, del prototipo y de la aplicación final.
**De dónde salieron:** del código real: primero se escribieron en el MVP y el prototipo, la aplicación final añadió los suyos (MSJ26 a MSJ32) y todos se copiaron a la especificación, para que documento y código no se separen nunca. El formato [MSJ0X] viene de la plantilla del profesor.
**Dónde se usan:** en las confirmaciones y errores del MVP, del prototipo y de la aplicación final, enlazados a su excepción (por ejemplo EXC02 → MSJ07), y en el catálogo de la especificación.

| MSJ | Mensaje literal | Dónde aparece |
|---|---|---|
| MSJ01 | Completa el identificador y el nombre del cliente. | MVP y aplicación final: registro sin datos obligatorios |
| MSJ02 | Describe brevemente la incidencia o desmarca esa opción. | MVP y aplicación final: incidencia sin descripción |
| MSJ03 | Selecciona el resultado de revisión manual de la promoción. | MVP, prototipo y aplicación final: evaluación sin resultado |
| MSJ04 | Perfil local (identificador) cargado. Puedes actualizar los datos disponibles. | MVP: identificador coincide con un perfil |
| MSJ05 | No se pudieron guardar los cambios en este navegador. | MVP: falla de persistencia |
| MSJ06 | No se pudo guardar en este navegador. | Prototipo y aplicación final: falla de persistencia |
| MSJ07 | Ese identificador ya está registrado. | Prototipo y aplicación final: identificador duplicado |
| MSJ08 | Selecciona un cliente registrado. | Prototipo y aplicación final: atención sin cliente válido |
| MSJ09 | Selecciona una promoción, un cliente y el resultado de revisión. | Prototipo y aplicación final: evaluación incompleta |
| MSJ10 | Revisión guardada. Se creó una constancia local; no se envió un mensaje. | Prototipo y aplicación final: resultado «Aplica» |
| MSJ11 | Revisión guardada como «No aplica»; no se registró comunicación. | Prototipo y aplicación final: resultado «No aplica» |
| MSJ12 | Atención registrada. Se creó una constancia local; no se envió un mensaje. | MVP: atención con «Aplica» |
| MSJ13 | Atención y revisión registradas. No se creó comunicación. | MVP: atención con «No aplica» |
| MSJ14 | Visita o interacción registrada en el historial local. | MVP: atención sin promoción |
| MSJ15 | Registro guardado en este navegador. | MVP: persistencia correcta |
| MSJ16 | Registro disponible solo en esta sesión. | MVP: persistencia no disponible |
| MSJ17 | Cliente registrado. | Prototipo y aplicación final: alta de perfil |
| MSJ18 | Perfil actualizado. | Prototipo y aplicación final: edición de perfil |
| MSJ19 | Visita o interacción registrada. | Prototipo y aplicación final: alta de atención |
| MSJ20 | Incidencia registrada. | Prototipo y aplicación final: alta de incidencia |
| MSJ21 | Etiqueta manual guardada. | Prototipo y aplicación final: clasificación manual |
| MSJ22 | Campaña registrada; no se marca como aprobada o publicada. | Prototipo y aplicación final: alta de campaña |
| MSJ23 | Promoción registrada. | Prototipo y aplicación final: alta de promoción |
| MSJ24 | Nota de seguimiento guardada. | Prototipo y aplicación final: seguimiento de incidencia |
| MSJ25 | Reporte CSV descargado. | Prototipo y aplicación final: exportación |
| MSJ26 | Campaña actualizada. | Aplicación final: edición de campaña |
| MSJ27 | Promoción actualizada. | Aplicación final: edición de promoción |
| MSJ28 | Registro eliminado tras confirmación. | Aplicación final: eliminación de campaña o promoción sin vínculos |
| MSJ29 | Respaldo exportado o importado correctamente. | Aplicación final: exportar o importar respaldo JSON |
| MSJ30 | El archivo no es un respaldo válido; no se modificaron los datos. | Aplicación final: importación de archivo inválido |
| MSJ31 | Datos de demostración restablecidos. | Aplicación final: restablecer datos demo |
| MSJ32 | Completa los campos obligatorios antes de guardar. | Aplicación final: campaña, promoción o seguimiento incompletos |

## Reparto y tiempos

| Expositor | Diapositivas | Qué explica | Tiempo |
|---|---|---|---|
| Luis | 1 a 5 | Saludo, problema, propuesta, cómo está construido, los códigos del proyecto, los seis carriles y los cuatro recorridos del Bizagi desde su inicio común, y el camino completo del proyecto | 3:00 |
| Christian | 5 a 13 | El recorrido del proceso en orden, el subproceso, los cinco acercamientos de cada recorrido de inicio a fin, el backlog con sus sprints y la diferencia entre historia y caso de uso | 3:00 |
| Salomón | 14 a 18 | El wireframe, la demostración en vivo del MVP y el prototipo, el diagrama de casos de uso y las secuencias CU01 y CU02 | 3:00 |
| Daniel | 19 a 22 | La secuencia CU03, el diagrama de clases, las conclusiones con la reflexión del equipo y el cierre | 2:40 |

Orden: Luis → Christian → Salomón → Daniel. Cada uno habla una sola vez. Regla del equipo: nadie dice un código sin decir qué es.

## Diapositiva por diapositiva

### Luis — apertura y camino (diapositivas 1 a 5)

**D1 Portada (0:10).** «Buenos días, profesor Víctor Andrade y compañeros. Somos el grupo cinco: Salomón, Daniel, Christian y yo, Luis. Nuestro trabajo es el desarrollo de un sistema de información para la gestión unificada de clientes de Atlantic City.» (Si la sustentación es por la tarde, cambiar a «buenas tardes».)

**D2 Contexto y problema (0:30).** «La problemática actual es que la información de los clientes está repartida entre varias áreas del negocio. Un ejemplo: un empleado de servicio al cliente registra los datos de un cliente y luego otro puede volver a registrar al mismo cliente, y se generan duplicados porque no hay una base centralizada. Esto mismo complica obtener datos para crear nuevas promociones y para elegir a qué clientes aplicarlas.»

**D3 Objetivos y propuesta (0:30).** «Frente a esto, proponemos un sistema que funcione como una sola fuente de información: el personal identifica y atiende, y el sistema valida, guarda y consulta. Así el personal registra a los clientes y consulta sus datos sin la duplicidad de antes, y se logra centralizar perfiles e historial, registrar visitas e incidencias, consultar criterios y gestionar campañas, y generar reportes.»

**D4 Capacidades, cómo está construido y códigos (0:50).** «Estas capacidades no son un dibujo: ya están plasmadas en un MVP y en un prototipo con navegación. Ambos están hechos con HTML, CSS y JavaScript, y por ahora guardan la información en el registro local del navegador: todavía no hay backend, y pasar a una base central queda pendiente de acuerdo con el Product Owner. Los datos que se ven son de ejemplo, marcados como datos de demostración. Un detalle que van a notar en los slides: además de las historias de usuario y los casos de uso, usamos Reglas de Negocio, Excepciones y Mensajes con un número al lado, que es su identificador. Sirve para que el informe, los diagramas y el código citen exactamente lo mismo.»

**D5 Proceso en Bizagi y el camino completo (1:00).** «¿Cómo avanzamos? Con el marco de trabajo Scrum: tenemos un backlog con historias de usuario que resolvemos en sprints. Y lo primero fue identificar el proceso del negocio: analizamos las actividades reales del día a día, las agrupamos y las representamos en Bizagi. El resultado es este gráfico: un pool con seis carriles —Cliente, Servicio al Cliente, Sistema CRM, Marketing, Gerencia General y Gerencia de TI—; cada carril es un responsable del proceso. El diagrama arranca con un solo inicio: el cliente solicita atención o el negocio identifica una necesidad; y una compuerta exclusiva dirige el trabajo a uno de los cuatro recorridos, porque no ocurren en cada atención: la atención del cliente; la campaña, que maneja Marketing; el reporte, que pide la Gerencia General; y la automatización candidata, que probaría la Gerencia de TI solo si el Product Owner la prioriza. Y al final todos confluyen en un solo fin: los registros y resultados conservados en el sistema. Y para que se vea todo el camino: de este proceso salieron las trece historias de usuario del backlog; de las historias, los casos de uso con sus actores; de los casos, los diagramas de secuencia; de las secuencias, las clases; y con todo eso se dibujaron los wireframes, que después se plasmaron en el MVP y en el prototipo. Le cedo la palabra a mi compañero Christian.»

### Christian — el proceso en orden, los acercamientos y la planificación (diapositivas 5 a 13)

**D5 El recorrido, en orden (0:30).** «Tomo el diagrama donde lo dejó Luis y lo recorro de izquierda a derecha: primero se identifica al cliente con su identificador; el rombo decide si el perfil ya existe o hay que crearlo; después se registra la visita o la interacción, con incidencia si el cliente reporta una; y todo queda guardado en el historial para consultas. Los otros tres recorridos que salen del inicio común tienen cada uno su disparador: la campaña la define Marketing cuando hay una necesidad, el reporte lo pide Gerencia, y la automatización solo entra si el Product Owner la prioriza; y los cuatro terminan en el mismo fin. Este modelo está hecho en Bizagi y es el mismo que está en el informe.»

**D6 Subproceso de segmentación (0:30).** «Este subproceso es la segmentación de clientes. Hace cinco tareas seguidas: consulta la frecuencia de visitas, el nivel de gasto, las preferencias de juegos y el historial de promociones, y al final clasifica al cliente. Pero ojo con dos cosas: la clasificación la ingresa el empleado a mano, porque el sistema no calcula segmentos por sí solo —esa es la regla de negocio RN04—; y cuando se cuenta la frecuencia, solo suman las visitas, no las interacciones —esa es la regla RN06—.»

**D7 a D11 Acercamientos: cada recorrido de inicio a fin (0:50).** Un slide por recorrido, con el diagrama en grande y nítido: la atención en dos tramos (del inicio al registro de la visita; de la segmentación a la promoción y el fin), la campaña (inicio en Marketing, revisión del PO, ajuste o aprobación), el reporte (solicitud, periodo y resultados) y la automatización (definición, prueba de TI y decisión del PO). Una frase por slide siguiendo la flecha desde el inicio verde hasta el fin rojo.

**D12 Backlog y sprints (0:40).** «De este proceso salió nuestro backlog: trece historias de usuario, las HU, cada una con su prioridad, repartidas en cuatro sprints de una semana. La última, la HU-13, es probar una automatización candidata, y está condicionada: solo se hace si el Product Owner la prioriza, por eso lleva el asterisco. Tenerla escrita pero condicionada es cuidar el alcance del proyecto, no tener trabajo incompleto.»

**D13 Historias y casos de uso (0:30).** «Y acá está la diferencia que ordena todo: la historia de usuario es la necesidad del negocio; el caso de uso es el recorrido que se puede observar entre el actor y el sistema. La matriz del slide los conecta: el CU01 agrupa buscar, registrar, actualizar y consultar el perfil; el CU02 es la atención con incidencia opcional; el CU03 es la evaluación de promociones; y el CU04 es el reporte. Lo que construimos con estas historias lo muestra Salomón.»

### Salomón — lo construido y las dos primeras secuencias (diapositivas 14 a 18)

**D14 Wireframe (0:20).** «Antes de programar, dibujamos las pantallas. Este wireframe en blanco y negro muestra la estructura y el orden de la información, sin colores, porque acá lo que se revisa es la estructura, no el diseño final. Es un boceto de referencia: no funciona, y los números que ven son datos de demostración.»

**D15 MVP y prototipo, con demostración en vivo (0:55).** «Y de ese boceto salieron estas dos versiones, que sí funcionan. El MVP es una sola pantalla con lo mínimo: registra, valida con mensajes reales y guarda. El prototipo con navegación tiene siete vistas conectadas sin recargar la página, y exporta un reporte CSV con exactamente lo que se ve en pantalla. Lo vemos rapidito en vivo: [registrar un cliente con identificador repetido → se ve el mensaje; registrar uno válido; registrar una visita; mostrar el historial]. Todo se guarda en el registro local del navegador. Esta es la demostración del sistema funcionando.» (Si la demo falla, se explica sobre las capturas del slide y se sigue; no se detiene la exposición.)

**D16 Casos de uso (0:35).** «Para entender qué puede hacer el sistema, este es el diagrama de casos de uso. Adentro del límite están los doce casos, nombrados por la tarea que hacen, sin números de historias. A la izquierda están los tres actores que sí usan el sistema; a la derecha el Product Owner, que no ejecuta casos: él confirma las reglas y prioriza. Dos decisiones a propósito: la automatización queda fuera del límite hasta que el PO la priorice, y no hay flechas entre los óvalos, porque las dependencias se ven paso a paso en las secuencias.»

**D17 Secuencia CU01 — Registrar cliente (0:35).** «Primera secuencia: registrar cliente, el CU01. Hay cuatro líneas de vida: el empleado, la interfaz, el sistema y el registro de datos. La flecha continua es el que pide; la discontinua, el que responde. Lo importante es este bloque alt: si el identificador ya existe, el sistema avisa y devuelve el foco al campo, no deja duplicar —porque el identificador es único, regla RN07—; si está libre, guarda y confirma. Ese camino de error es la excepción EXC02, y el mensaje que lee el usuario es el MSJ07, el mismo texto que está en el código. Eso lo acabamos de ver en vivo.»

**D18 Secuencia CU02 — Registrar visita o interacción (0:35).** «Segunda secuencia: registrar visita o interacción, el CU02. Fíjense que esta no tiene alt, y no es olvido: no hay ramas, porque la regla RN01 dice que la atención se conserva siempre, haya o no incidencia, haya o no promoción. La incidencia es un paso opcional del recorrido: si hay, se agrega al final con su descripción obligatoria. Y el tipo Visita o Interacción se guarda porque la frecuencia después suma solo las visitas. Ahora Daniel cierra con la evaluación de promociones.»

### Daniel — la última secuencia, la estructura y el cierre (diapositivas 19 a 22)

**D19 Secuencia CU03 — Evaluar si una promoción aplica (0:45).** «Tercera secuencia: evaluar si una promoción aplica, el CU03. Marketing consulta los cuatro criterios del cliente sobre el registro local —los mismos del subproceso que mostró Christian— y escribe el resultado a mano, porque el sistema no lo calcula: otra vez la regla RN04. El alt de acá es la decisión de negocio, y cada rama tiene su regla: si el resultado es Aplica, se crea una constancia local y no sale ningún mensaje del sistema, esa es la regla RN03; si es No aplica, la revisión se guarda pero no se crea ninguna comunicación, esa es la regla RN02. Ojo: constancia local no es un envío real.»

**D20 Clases (0:55).** «Y todo lo que vimos guardarse, ¿dónde queda? En estas seis clases, que son exactamente lo que el sistema conserva. Los atributos están en español, iguales a los del código, y las relaciones se leen como reglas: un cliente puede tener cero o muchas visitas; una visita puede tener cero o una incidencia; y la constancia solo se crea en la rama Aplica. Si se preguntan por qué no hay una clase Segmentación o una clase Reporte: porque no son cosas que se guardan, son consultas; el segmento es una etiqueta manual del cliente y el reporte se arma en el momento con lo que ya está registrado.»

**D21 Conclusiones y reflexión (0:50).** «Para cerrar, nuestras conclusiones: [leer las cuatro del slide]. Y la reflexión del equipo, en una frase: este proyecto nos enseñó que modelar y programar son la misma conversación. Cuando un flujo cambia, cambian juntos el proceso, el caso de uso, la secuencia, la clase y el código; si uno se queda atrás, el sistema termina mintiendo.»

**D22 Cierre (0:10).** «Muchas gracias. Quedamos atentos a sus preguntas.» Reparto de respuestas: proceso y backlog, Christian; pantallas, demo y primeras secuencias, Salomón; CU03 y clases, Daniel; el camino del proyecto y los códigos, Luis.

## Preguntas probables del profesor (por tema, con respuesta corta)

### Sobre conceptos

- **¿Qué es un caso de uso?** Un recorrido observable entre un actor y el sistema que produce un resultado completo. Ejemplo: en CU01 el empleado registra un cliente y el sistema valida, guarda y confirma.
- **¿Qué es una historia de usuario y en qué se diferencia del caso de uso?** La HU es la necesidad del negocio («quiero registrar un cliente para tener su información centralizada»); el CU es el recorrido observable. La matriz los conecta: un caso agrupa varias historias.
- **¿Qué es una regla de negocio?** Una decisión del negocio que sería cierta aunque el sistema no existiera; el sistema la respeta y solo el PO la decide. Ejemplo: RN01, la atención siempre se conserva.
- **¿Qué es una excepción?** El camino de error de un caso: qué lo dispara y cómo lo resuelve el sistema —avisa con su mensaje y no guarda—. Ejemplo: EXC02, identificador duplicado.
- **¿Qué es un mensaje (MSJ)?** El texto literal que muestra la pantalla, idéntico al del código. Ejemplo: MSJ07, «Ese identificador ya está registrado».
- **¿Qué es el alt de una secuencia?** Un bloque con ramas excluyentes: se cumple una sola. En CU01: identificador ya registrado o identificador disponible.
- **¿Qué es un subproceso en Bizagi?** Una actividad colapsada cuyo detalle se dibuja aparte para no ensuciar la vista principal. Acá es la segmentación de clientes, con sus cinco tareas.
- **¿Qué es un carril (lane)?** La división del pool que indica quién es responsable de cada tarea; no son sistemas ni bases de datos separadas.
- **¿Campaña y promoción son lo mismo?** No: la campaña organiza objetivo, público y periodo; la promoción es la oferta concreta, y puede existir sin campaña (RN05).
- **¿Qué es el MVP y en qué se diferencia del prototipo?** El MVP es una sola pantalla con lo mínimo para probar el corazón del sistema; el prototipo son siete vistas con navegación que demuestran el cambio entre interfaces.

### Sobre decisiones (por qué y cómo llegamos)

- **¿Cómo llegaron a la conclusión de usar los códigos RN, EXC y MSJ?** Porque la Plantilla de Especificación de Casos de Uso del profesor los pide —trae los campos [RN0X], [EXC01] y [MSJ0X]—, y porque cada decisión aparece en el informe, los diagramas y el código: con el mismo código, todos los documentos citan lo mismo.
- **¿Cuáles son los procesos del negocio?** Los que atenderá el sistema: gestión de clientes (perfil e historial), atención (visitas e incidencias), gestión de promociones (evaluación, campaña y constancia) y reportes. En Bizagi quedaron como la ruta principal de atención más los recorridos de campaña, reporte y automatización, y la segmentación como subproceso.
- **¿No se quitan las campañas y promociones del proyecto?** No: la hoja de ruta del profesor lista «promociones» entre los ejemplos de módulos justificados y su estructura sugerida trae `promociones.js`; el proceso del negocio incluye la gestión de promociones y el backlog las prioriza en el Sprint 3. Lo que se simplificó fue la forma del diagrama —un inicio y un fin—, no los recorridos: la campaña y la promoción siguen siendo el recorrido de Marketing dentro del proceso único, iguales en el boceto, en el informe y en la aplicación final.
- **¿Por qué el Bizagi tiene un solo inicio si el negocio tiene cuatro disparadores?** Porque el profesor pidió simplificar el modelo: un único evento de inicio y una compuerta exclusiva que dirige el trabajo a uno de los cuatro recorridos del mismo pool. Los disparadores no cambiaron: la atención ocurre en cada visita del cliente, pero la campaña, el reporte y la automatización tienen disparadores propios y no ocurren en cada atención; la compuerta los hace visibles sin dibujar cuatro inicios. No son procesos en archivos separados: son el mismo diagrama, y todos terminan en el mismo fin único.
- **¿Quién dispara cada recorrido?** La atención, el cliente que llega; la campaña, una necesidad de Marketing; el reporte, un pedido de Gerencia; la automatización, solo si el PO la prioriza —la configura y prueba TI (HU-13)—.
- **¿Por qué la segmentación es un subproceso y no una pantalla o una clase?** Porque es un detalle interno de la atención: consulta cuatro criterios y clasifica. En el sistema es una consulta más una etiqueta manual (RN04); no se calcula ni se guarda como entidad aparte.
- **¿Por qué no hay flechas (include) entre los óvalos del diagrama de casos?** Decisión del equipo: un diagrama donde cada caso se lee solo. Las dependencias están documentadas en los pasos de las fichas y en los mensajes de las secuencias —la consulta de criterios son los mensajes 3 a 5 de CU03—.
- **¿Por qué el cliente no es actor del diagrama?** Porque no opera el sistema: entrega sus datos y recibe la atención. Los que ejecutan son los tres empleados; el PO confirma reglas y prioriza, y tampoco ejecuta casos.
- **¿Por qué los wireframes en blanco y negro?** Porque un wireframe revisa estructura y jerarquía, no estética —la estructura propuesta pide que el wireframe sea «solo diseño, no funciona»—. El color aparece recién en el prototipo.
- **¿Por qué la cuarta línea de vida dice «Datos / registro local» y no «Base de datos»?** Porque no hay backend: la estructura permite «datos simulados o una base de datos sencilla según lo que hayan aprendido», y lo acordado con el PO en esta etapa es el registro local del navegador.

### Dónde se refleja (MVP y prototipo)

- **¿Dónde se ve la RN01?** En la vista de visitas del prototipo y en el paso 2 del MVP: la atención se guarda sin marcar incidencia y sin elegir promoción, y el historial la conserva igual.
- **¿Dónde se ven RN02 y RN03?** En la evaluación de promociones: con «Aplica» el sistema muestra MSJ10 (prototipo) o MSJ12 (MVP) —«se creó una constancia local; no se envió un mensaje»—; con «No aplica», MSJ11 o MSJ13 —no se crea ninguna comunicación—.
- **¿Dónde se ven RN04 y RN06?** RN04: el segmento y la elegibilidad se eligen a mano en los formularios; el sistema no calcula nada. RN06: la frecuencia cuenta solo atenciones de tipo «Visita»; las interacciones no suman.
- **¿Dónde se ven RN07, EXC02 y MSJ07?** En el alta de cliente del prototipo: al poner un identificador que ya existe aparece «Ese identificador ya está registrado» y el foco vuelve al campo. Está en la demo en vivo.
- **¿Qué tanto abarcan el MVP y el prototipo?** El prototipo cubre de HU-01 a HU-12 en sus siete vistas, con exportación CSV; el MVP cubre el recorrido mínimo: registro con validaciones, atención con incidencia opcional, revisión manual con constancia local, conteos e historial. Quedan fuera solo HU-13 (condicionada al PO) y el backend (pendiente de acuerdo).
- **¿Qué guarda el sistema hoy?** El registro local del navegador (localStorage), con datos de demostración identificados como tales; la base central queda pendiente de acuerdo con el Product Owner.
- **¿El reporte CSV puede diferir de la pantalla?** No: exporta exactamente las filas que se están mostrando. Eso hace que el reporte sea verificable, como pide la HU-12.
- **¿Se puede usar el prototipo sin servidor?** Sí: hay una copia en archivo único que se abre con doble clic en cualquier navegador; los datos viven solo en ese navegador.

### Sobre organización y alcance

- **¿Cómo organizaron los sprints?** Cuatro sprints de una semana: Sprint 1, perfiles (HU-01 a 04); Sprint 2, atención y criterios (HU-05 y 07); Sprint 3, segmento, evaluación y oferta (HU-08, 09 y 11); Sprint 4, incidencias, campaña, reporte y la HU-13 condicionada (HU-06, 10, 12 y 13*).
- **¿Dónde está Scrum si no documentaron ceremonias?** En el equipo con sus roles, el backlog priorizado y el plan de sprints. La estructura propuesta pide explícitamente no documentar ceremonias de manera excesiva.
- **¿La automatización ya funciona?** No: es candidata. Está escrita como HU-13, fuera del límite del diagrama de casos, y solo se prueba si el PO la prioriza; una prueba técnica no es aprobación.
- **¿Quién hizo qué en el equipo?** Los cuatro participaron del modelado y del código; la exposición se reparte siguiendo el orden en que se hizo el proyecto, así cada uno explica una parte completa del camino.

## Ensayo de esta noche (lo mínimo)

1. Si se expone con el PDF original, aplicar las tres correcciones del final; con el PPT reconstruido (`Proyectocapavistaatlantic_corregido_editable.pptx`) ya vienen hechas y el Bizagi trae sus acercamientos.
2. Leer una vez las cinco tablas del inicio (10 minutos) para que nadie se sorprenda con un código en los slides.
3. Cada expositor lee su bloque dos veces y lo dice una vez en voz alta, sin leer, mirando el slide. Nadie estudia el bloque del otro.
4. Salomón deja el prototipo abierto y ensaya una vez la ruta de la demo: identificador repetido → mensaje → registro válido → visita → historial.
5. Un ensayo completo con cronómetro, los cuatro seguidos. Objetivo: entre 11:00 y 12:00. Si se pasan, se recortan frases, no evidencias.
6. El día de la sustentación: prototipo abierto desde antes de empezar y PPT revisado en la laptop o PC desde la que se expone.

## Correcciones que se aplican al PPT antes de exponer

Este guion asume que las tres correcciones ya están hechas: en el PPT reconstruido (`Proyectocapavistaatlantic_corregido_editable.pptx`) vienen aplicadas de fábrica, y esta lista queda para quien trabaje sobre el PDF original del equipo:

1. **Diapositiva 12 — falta la secuencia de CU01.** Hoy las diapositivas 12 y 13 repiten la misma imagen (secuencia de CU02, «Registrar visita o interacción»). Reemplazar la imagen de la 12 por `../modelado/diagramas/Secuencia_registrar_cliente.png`. Con el cambio el orden queda: 12 = CU01 Registrar cliente, 13 = CU02 Registrar visita o interacción, 14 = CU03 Evaluar si una promoción aplica, igual que en el informe.
2. **Diapositiva 9 — el título dice «DASHBOARD» pero la imagen es el wireframe.** Lo que se muestra es el boceto de referencia en blanco y negro, no una pantalla funcional. Renombrar el título a «VISTA DE REFERENCIA (WIREFRAME)». Si no se llega a editar el PPT, Salomón lo aclara en su primera frase de la D9.
3. **Diapositivas 2 y 3 — detalles del texto.** En la 2, corregir el punto duplicado de «clientes..». En la 3, la línea «AREAS: Marketing, gerencias y TI consultan o administran» se expone con el alcance actual: TI no administra usuarios ni roles hoy; solo participa en la automatización candidata si el Product Owner la prioriza.
