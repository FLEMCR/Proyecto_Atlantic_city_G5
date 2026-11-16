# Guía de diagramas de secuencia — Atlantic City

Guía de trabajo para el integrante que elabora los diagramas de secuencia del sistema. Explica qué muestra cada diagrama, cómo se lee cada flecha, qué significa cada mensaje en el proceso del negocio y cómo construirlos y verificarlos en StarUML. Las imágenes de referencia están en `../modelado/diagramas/` y el archivo editable del equipo es `../modelado/Atlantic_City_UML.mdj`.

## 1. Qué muestra un diagrama de secuencia y por qué se usa aquí

Un diagrama de secuencia muestra un recorrido completo del sistema en el tiempo: quién pide algo, a quién se lo pide y qué respuesta recibe, ordenado de arriba hacia abajo. No muestra pantallas ni tablas: muestra la conversación entre las partes del sistema durante un caso de uso.

En este proyecto conviene por tres razones:

- El caso de uso (texto) dice qué pasos ocurren; la secuencia muestra esos mismos pasos como mensajes entre partes, y ambos deben coincidir paso a paso.
- Deja ver que hoy el sistema trabaja con un registro local en el navegador: la lifeline de datos nunca es un servidor externo ni un sistema real de Atlantic City.
- Deja ver dónde el sistema decide solo (validaciones) y dónde decide una persona (clasificación y elegibilidad manuales), que es una regla acordada con el Product Owner.

Relación con los otros diagramas: el diagrama de casos de uso dice qué se puede hacer; el de clases dice qué se guarda; el de secuencia dice en qué orden ocurre una ejecución concreta de un caso de uso.

## 2. Las cuatro lifelines del proyecto y su significado de negocio

| Lifeline | Qué representa en el negocio | Qué NO es |
|---|---|---|
| Empleado autorizado | La persona que opera el sistema en ese recorrido: Servicio al Cliente / Operaciones en CU01 y CU02, Marketing en CU03. Es el actor del caso de uso. | No es el cliente de Atlantic City: el cliente entrega datos y recibe atención, pero no opera el sistema. |
| Interfaz (capa de vista) | La pantalla que el empleado ve y toca: formularios del MVP o vistas del prototipo con navegación. Recibe lo escrito y muestra mensajes y confirmaciones. | No decide reglas: solo presenta y captura. |
| Sistema | La lógica que valida, consulta y decide: aplica las reglas RN01 a RN08, arma criterios, crea la constancia local. | No es una persona: nunca «opina»; lo manual lo ingresa el empleado. |
| Datos (registro local) | El almacén local del navegador donde viven perfiles, atenciones, incidencias, evaluaciones y constancias de la etapa actual. | No es una base central ni un sistema real de Atlantic City; eso queda pendiente de acuerdo con el Product Owner. |

Las cuatro lifelines son las únicas del proyecto. Si un recorrido necesitara una quinta (por ejemplo, un correo externo), ese recorrido no es del alcance actual y no se dibuja.

## 3. Cómo se lee cada flecha

- Flecha continua con punta llena: una parte pide algo a otra (solicitud o llamada). Ejemplo: «3: Consulta si el identificador ya existe».
- Flecha discontinua: la respuesta a una solicitud anterior. Ejemplo: «4: Devuelve el resultado de la búsqueda». Toda discontinua nace de una continua previa.
- Flecha que sale y vuelve a la misma lifeline: trabajo interno, en este proyecto siempre una validación. Ejemplo: «5: Valida campos obligatorios y formato».
- Recuadro `alt` con guardas entre corchetes: ramas excluyentes de una misma decisión. Solo ocurre una rama por ejecución. En CU01 la decisión es si el identificador ya está registrado; en CU03, si el resultado de la revisión es «Aplica» o «No aplica».
- El tiempo corre hacia abajo: el mensaje 11 siempre ocurre después del 10. La numeración del diagrama coincide con el orden de la secuencia normal del caso de uso.

## 4. Los tres diagramas, mensaje por mensaje

### 4.1 Secuencia CU01 — Registrar cliente (`../modelado/diagramas/Secuencia_registrar_cliente.png`)

Recorrido: el empleado escribe el identificador, el sistema busca en el registro local y, según exista o no, carga el perfil para actualizar o deja el formulario listo para un alta; al confirmar, valida y guarda.

| # | De → A | Tipo | Qué está pasando en el proceso |
|---|---|---|---|
| 1 | Empleado → Interfaz | solicitud | El empleado escribe identificador y datos del cliente en el formulario (paso 1 y 2 de la secuencia normal del CU01). |
| 2 | Interfaz → Sistema | solicitud | La pantalla entrega lo escrito; la interfaz no valida nada por su cuenta. |
| 3 | Sistema → Datos | solicitud | El sistema busca el identificador en el registro local: es la búsqueda e identificación del cliente, el paso incluido de CU01. |
| 4 | Datos → Sistema | respuesta | El registro contesta si el identificador existe o no; con esta respuesta se decide cuál rama del `alt` ocurrirá. |
| 5 | Sistema → Sistema | interno | Validación de obligatorios y longitudes: sin identificador o sin nombre no se guarda (excepción EXC01, mensaje MSJ01). |
| 6 | Sistema → Interfaz | respuesta, rama «identificador ya registrado» | El sistema avisa que el identificador ya existe; en el prototipo este camino presenta MSJ07 y bloquea el alta duplicada (RN07). |
| 7 | Interfaz → Empleado | respuesta, misma rama | La pantalla muestra el mensaje y devuelve el foco al campo para corregir; aquí termina esa ejecución. |
| 8 | Sistema → Datos | solicitud, rama «identificador disponible» | El sistema guarda el perfil nuevo o el perfil actualizado; una actualización reemplaza datos sin perder historial. |
| 9 | Datos → Sistema | respuesta, misma rama | El registro local confirma que escribió correctamente. |
| 10 | Sistema → Interfaz | respuesta, misma rama | El sistema devuelve la ficha del cliente ya guardada para que la pantalla la muestre. |
| 11 | Interfaz → Empleado | respuesta, misma rama | La pantalla muestra la confirmación (MSJ17 en alta, MSJ18 en actualización del prototipo). Fin del caso. |

Lectura de proceso: los mensajes 3 a 7 son la protección contra duplicados; los mensajes 8 a 11 son el guardado y la confirmación. Las dos ramas no ocurren juntas: por eso van dentro de un `alt`.

### 4.2 Secuencia CU02 — Registrar visita o interacción (`../modelado/diagramas/Secuencia_registrar_visita.png`)

Recorrido: el empleado selecciona un cliente existente, indica tipo de actividad, fecha y nota, y el sistema conserva la atención en el historial y la refleja en la consulta.

| # | De → A | Tipo | Qué está pasando en el proceso |
|---|---|---|---|
| 1 | Empleado → Interfaz | solicitud | Selección del cliente y completado de la actividad (paso 1 y 2 de la secuencia normal del CU02). |
| 2 | Interfaz → Sistema | solicitud | La pantalla entrega tipo, fecha y nota; el tipo solo admite Visita o Interacción. |
| 3 | Sistema → Datos | solicitud | Verificación de que el perfil exista: una atención sin cliente válido no se registra (EXC03, MSJ08 en el prototipo). |
| 4 | Datos → Sistema | respuesta | El registro devuelve los datos del perfil verificado. |
| 5 | Sistema → Datos | solicitud | Guardado de la atención con tipo, fecha y nota. |
| 6 | Datos → Sistema | respuesta | Confirmación de escritura del registro local. |
| 7 | Sistema → Datos | solicitud | Actualización del historial del cliente con la atención nueva. |
| 8 | Datos → Sistema | respuesta | Devolución del historial ya actualizado. |
| 9 | Sistema → Interfaz | respuesta | El sistema devuelve el resumen de la atención para la pantalla. |
| 10 | Interfaz → Empleado | respuesta | La pantalla muestra el registro en el historial (MSJ14 en el MVP, MSJ19 en el prototipo). Fin del caso. |

Lectura de proceso: este recorrido no tiene `alt` porque la incidencia es opcional y su registro es un paso incluido del caso (HU-06): cuando se reporta, se añade al final el guardado de la incidencia con su descripción obligatoria (EXC04 si falta), y la atención se conserva igual con o sin incidencia y con o sin promoción (RN01). La frecuencia posterior suma solo atenciones de tipo Visita (RN06).

### 4.3 Secuencia CU03 — Evaluar si una promoción aplica (`../modelado/diagramas/Secuencia_evaluar_promocion.png`)

Recorrido: Marketing selecciona la promoción, consulta los cuatro criterios sobre el registro local, ingresa el resultado manual y el sistema deja constancia del resultado; solo «Aplica» crea constancia local.

| # | De → A | Tipo | Qué está pasando en el proceso |
|---|---|---|---|
| 1 | Empleado → Interfaz | solicitud | Selección de la promoción a evaluar; sin promoción el resultado permanece deshabilitado. |
| 2 | Interfaz → Sistema | solicitud | La pantalla pide los criterios de esa promoción y su campaña vinculada si corresponde (RN05). |
| 3 | Sistema → Datos | solicitud | Consulta de los cuatro criterios del cliente: frecuencia de visitas, nivel de gasto, preferencias de juegos e historial. Es el paso incluido de CU03: sin la consulta de los criterios no hay evaluación. |
| 4 | Datos → Sistema | respuesta | El registro devuelve los datos disponibles; la frecuencia suma solo visitas (RN06). |
| 5 | Sistema → Interfaz | respuesta | La pantalla muestra los criterios y habilita el campo de resultado. |
| 6 | Empleado → Interfaz | solicitud | El empleado ingresa el resultado de su revisión manual: «Aplica» o «No aplica» (RN04). |
| 7 | Interfaz → Sistema | solicitud | La pantalla entrega el resultado; solo se aceptan esos dos valores (EXC05 si falta, MSJ03). |
| 8 | Sistema → Datos | solicitud, rama «resultado Aplica» | Registro de la oferta y creación de la constancia local; ningún mensaje sale del sistema (RN03). |
| 9 | Datos → Sistema | respuesta, misma rama | Confirmación de la constancia escrita. |
| 10 | Sistema → Datos | solicitud, rama «resultado No aplica» | La revisión se conserva sin crear constancia y sin comunicación de ningún tipo (RN02). |
| 11 | Datos → Sistema | respuesta, misma rama | Confirmación del registro de la revisión. |
| 12 | Sistema → Interfaz | respuesta | Devolución del resultado de la evaluación para la pantalla. |
| 13 | Interfaz → Empleado | respuesta | La pantalla muestra el resumen y actualiza el historial de promociones del cliente (MSJ10 a MSJ13 según resultado y versión). Fin del caso. |

Lectura de proceso: los mensajes 8 y 9 frente a 10 y 11 son la decisión de negocio más importante del caso: «Aplica» deja constancia local, «No aplica» solo deja la revisión. Las dos ramas van dentro de un `alt` porque una ejecución toma exactamente una.

Nota de forma: en las imágenes de referencia las dos ramas de cada decisión se dibujan como dos recuadros `alt` seguidos; en StarUML se capturan como un solo fragmento `alt` con dos operandos separados por línea discontinua, que es la misma decisión escrita en notación estándar. El archivo `.mdj` del equipo ya lo trae así.

## 5. Construirlos en StarUML, clic a clic

1. Abrir `../modelado/Atlantic_City_UML.mdj` en StarUML: los tres diagramas aparecen bajo el modelo «Atlantic City» con los nombres «Secuencia CU01 Registrar cliente», «Secuencia CU02 Registrar visita o interacción» y «Secuencia CU03 Evaluar si una promoción aplica». Si se parte de un proyecto nuevo: clic derecho sobre el modelo en el panel Explorer, Add Diagram, Sequence Diagram.
2. Lifelines: con el diagrama abierto, usar el botón Lifeline de la paleta del diagrama y hacer clic en el lienzo, o arrastrar desde el panel. Crear cuatro y nombrarlas exactamente: Empleado autorizado, Interfaz, Sistema, Datos. El orden de izquierda a derecha es ese: primero quien opera, último quien guarda.
3. Mensajes de solicitud: botón Message de la paleta; clic sobre la lifeline de origen y arrastre hasta la de destino; soltar y escribir el texto con su número al inicio, por ejemplo «3: Consulta si el identificador ya existe». StarUML lo dibuja continuo con punta llena.
4. Mensajes de respuesta: botón Reply Message; mismo procedimiento. Se dibuja discontinuo. Usarlo siempre para los mensajes pares que devuelven información y para los cierres hacia el empleado.
5. Mensaje interno: botón Self Message sobre la lifeline Sistema para el mensaje 5 de CU01.
6. Fragmento alt: botón Combined Fragment de la paleta; dibujar el recuadro que cubre las filas de las ramas; en el panel o con doble clic fijar el operador en `alt`; añadir el segundo operando con el botón del fragmento o desde el Explorer (Interaction Operand); escribir la guarda de cada operando, por ejemplo «identificador ya registrado» y «identificador disponible», y colocar dentro de cada operando los mensajes de esa rama.
7. Orden y alturas: StarUML baja cada mensaje nuevo debajo del anterior; si se mueve uno, revisar que la numeración del texto siga coincidiendo con el orden visual.
8. Exportar la imagen: con el diagrama seleccionado, File, Export Diagram, formato PNG, y guardarla en `../modelado/diagramas/` con el nombre del archivo de referencia que reemplaza.

## 6. Errores frecuentes y cómo evitarlos

- Dibujar una respuesta con flecha continua: toda devolución de información es Reply Message; si ambas flechas del par 3 y 4 quedan continuas, el diagrama dice que Datos también inicia solicitudes, y no lo hace.
- Olvidar el `alt` de CU01: sin ramas, el diagrama muestra el alta duplicada y el guardado en la misma ejecución, lo que contradice RN07.
- Olvidar el `alt` de CU03: sin ramas, «Aplica» y «No aplica» crearían constancia las dos, lo que contradice RN02 y RN03.
- Inventar lifelines: no existen correo, pasarela de mensajes ni sistemas de Atlantic City en el alcance actual (RN08); un mensaje hacia afuera del cuarteto es un error de alcance, no de dibujo.
- Poner mensajes que no están en la especificación: cada mensaje del diagrama corresponde a un paso de la secuencia normal del caso de uso; si un mensaje no tiene paso, sobra; si un paso no tiene mensaje, falta.
- Numerar fuera de orden o repetir números al mover filas: la numeración es la línea de tiempo del caso.
- Titular con códigos de historia: el título nombra el caso de uso (Registrar cliente, Registrar visita o interacción, Evaluar si una promoción aplica); las historias son trazabilidad del backlog, no nombres de diagrama.

## 7. Verificación antes de entregar

- Cada fila del cuadro de mensajes de esta guía existe en el diagrama, con el mismo número, el mismo sentido de flecha y el mismo tipo (continua, discontinua o interna).
- Las guardas del `alt` coinciden con las condiciones de la especificación: identificador registrado o disponible en CU01; resultado «Aplica» o «No aplica» en CU03.
- El diagrama coincide con su figura del informe (figuras 6, 7 y 8) y con la imagen de `../modelado/diagramas/`: si se cambia uno, se cambian los cinco lugares.
- Los mensajes de confirmación citados (MSJ01, MSJ03, MSJ07, MSJ08, MSJ10 a MSJ14, MSJ17 a MSJ19) existen con ese texto en el catálogo de mensajes de la especificación de casos de uso.
- El MVP y el prototipo se comportan como dice el diagrama: guardar sin obligatorios no guarda, un identificador duplicado no crea un segundo perfil, y «No aplica» no crea constancia.
- El archivo `.mdj` abre en StarUML con los tres diagramas y sus fragmentos; si algún día el archivo no abriera en una versión distinta de StarUML, esta guía y las imágenes de referencia permiten reconstruirlos siguiendo la sección 5.

## 8. Archivos de este tema

| Archivo | Contenido |
|---|---|
| `../modelado/Atlantic_City_UML.mdj` | Modelo editable del equipo en StarUML: casos de uso, clases y las tres secuencias. |
| `../modelado/diagramas/Secuencia_registrar_cliente.png` | Imagen de referencia de CU01. |
| `../modelado/diagramas/Secuencia_registrar_visita.png` | Imagen de referencia de CU02. |
| `../modelado/diagramas/Secuencia_evaluar_promocion.png` | Imagen de referencia de CU03. |
| `../modelado/casos_de_uso/Especificacion_Casos_de_Uso_Atlantic_City.md` | Secuencias normales, excepciones y mensajes que estos diagramas representan. |
