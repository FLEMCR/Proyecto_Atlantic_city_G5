# Guía principal del piloto Atlantic City
 
## 1. Contexto acordado: 

> Proyecto académico EFSRT del ciclo 2; el sílabo y la rúbrica prevalecen; el profesor es el Product Owner; cuatro Developers (1 Scrum Master); Sprints de una semana, hasta cuatro o cinco. La prioridad académica incluye la capa de vista. El alcance final debe confirmarlo el Product Owner.

> **Propósito de esta guía:** explicar el único diagrama BPMN integrado del proyecto, qué hace cada área, cómo leer cada ruta, cómo se relaciona con las partes técnicas del piloto y qué significa el vocabulario. Está escrita para que cualquier integrante pueda entender y exponer el producto completo, no solo su módulo.

## 2. En pocas palabras: qué propone el piloto

> Consultar o crear un perfil central, registrar cada visita e interacción, vincular posibles incidencias, guardar el historial aunque no haya promoción, y usar campañas y criterios previamente aprobados para evaluar si una oferta aplica. En la misma vista se modelan, como rutas iniciadas por separado, la planificación de campañas, la generación de reportes y una automatización opcional.

El objetivo es demostrar un recorrido entendible y comprobable con datos ficticios. No se pretende construir un CRM empresarial completo para más de mil empleados, ni reemplazar todos los sistemas de la organización.

### Regla para resolver discrepancias

1. Instrucción directa del profesor y rúbrica.
2. Sílabo e indicadores EFSRT.
3. Problema y funciones descritas para Atlantic City.
4. Acuerdos que el profesor, como Product Owner, confirme con el equipo.
5. Esta guía, el BPMN y las propuestas de trabajo: son artefactos de diseño que se pueden corregir al recibir retroalimentación.

## 3. Cómo leer el BPMN integrado (archivo bizagi)

### 3.1 Un diagrama, cuatro recorridos

El archivo contiene **un pool, seis carriles y cuatro recorridos independientes** dentro de una sola vista. «Segmentación de clientes» es un subproceso embebido que aparece colapsado en el diagrama principal; las cinco tareas internas se muestran en el diagrama de detalle independiente:

1. atención al cliente, registro de datos, historial, incidencia y promoción;
2. definición y publicación de campañas;
3. solicitud y revisión de reportes;
4. automatización de una tarea, marcada como opcional y sujeta a priorización y aprobación del PO.

Los recorridos de campaña, reporte y automatización tienen sus propios eventos de inicio porque no ocurren necesariamente durante cada atención. Que estén en la misma vista no significa que una atención tenga que ejecutar todos esos recorridos consecutivamente.

### 3.2 Símbolos y conexiones

- **Círculo verde:** evento de inicio; su contorno/símbolo interior indica el tipo.
- **Rectángulo redondeado:** tarea realizada por un área o por el sistema.
- **Rectángulo redondeado con marcador de subproceso colapsado:** agrupa actividades que se explican en la vista de detalle.
- **Rombo:** compuerta de decisión. Las salidas “Sí/No” representan alternativas; solo se sigue la salida que corresponda.
- **Círculo rojo:** fin del recorrido correspondiente.
- **Flecha continua:** flujo de secuencia entre elementos del mismo pool.

El subproceso embebido «Segmentación de clientes» agrupa cinco tareas consecutivas y tiene su detalle en un diagrama separado para facilitar la lectura. No se dibujan objetos de datos ni asociaciones de datos en ninguno de los dos diagramas. Esto no significa que el sistema carezca de datos: los datos y reglas se describen en esta guía y se implementan solo si el PO y la rúbrica lo requieren. Las políticas de marketing, cuando se mencionan, son un insumo implícito (se realizaran en su desarrollo) y no un objeto gráfico BPMN.

Los eventos de inicio tienen tipos distintos.



| Recorrido | Evento de inicio | Tipo BPMN | Justificación y límite |

|---|---|---|---|

| Atención del cliente | «Solicitar registro o atención» | Mensaje | Representa una solicitud entrante del cliente como estímulo del recorrido. No fija el canal real. |

| Campaña | «Inicio: necesidad de campaña» | Temporal | Representa un disparo asociado al tiempo/calendario. La fecha, periodicidad o condición temporal concreta queda por definir por el PO; no se presume una frecuencia. |

| Reporte | «Inicio: solicitud de reporte» | Señal | Representa la recepción de una señal para iniciar la ruta de reporte. La fuente de la señal y la forma exacta de solicitar el reporte quedan por confirmar. |

| Automatización opcional | «Inicio opcional: automatización» | Condicional | Representa un inicio sujeto a que se cumpla una condición y a que el PO priorice la automatización. La expresión concreta no se inventa y debe acordarse antes de implementarla. |

|---|---|---|---|



En el flujo de cliente hay dos finales válidos: uno termina la atención sin promoción y otro termina después de registrar la promoción comunicada. Ambos ocurren **después** de guardar la visita/interacción; no se pierde el historial cuando la oferta no aplica.

### 3.3 Pool y carriles: quién hace qué

Un **pool** representa el proceso/participante organizacional modelado. Los **carriles (lanes)** dividen las responsabilidades dentro de ese proceso. En esta vista el cliente aparece como carril para facilitar la lectura del recorrido académico. Si se modelara al cliente como participante completamente externo en una colaboración BPMN estricta, se dibujaría en otro pool y las comunicaciones serían flujos de mensaje, no secuencias internas (se tendría que hacer otros diagramas o pools).

La referencia del sílabo a seis gerencias se conserva como contexto organizacional; no se afirma que las seis ejecuten tareas en este proceso. El modelo asigna actividad a cuatro áreas funcionales (Servicio al Cliente/Operaciones, Sistema CRM/datos, Marketing y TI) y conserva los carriles Cliente y Gerencia General/PO para representar la solicitud/participación y la revisión/decisión correspondiente.



| Carril | Responsabilidad en el modelo | Qué no significa |

|---|---|---|

| **Cliente** | Solicita registro o atención y recibe información de una oferta cuando corresponda. | No significa que el cliente pueda consultar o editar cualquier dato interno del CRM. |

| **Servicio al Cliente / Operaciones** | Identifica al cliente, captura/corrige datos, registra visitas e interacciones y atiende o escala una incidencia reportada. | No ejecuta por sí solo la lógica técnica de validación o persistencia de la base de datos. |

| **Sistema CRM / datos** | Busca y valida perfiles, evita duplicados según una regla aprobada, guarda perfil/visita/caso/promoción, consulta criterios y produce reportes. | No es una persona ni equivale solo a la base de datos. La interfaz también forma parte del sistema.|

| **Marketing** | Propone público, criterios y oferta; prepara la promoción que corresponda según campaña/reglas vigentes. | No debe inventar umbrales ni enviar una promoción no aprobada por el PO. |

| **Gerencia General / Product Owner** | Representa solicitudes/revisión de indicadores y la decisión de priorizar la automatización. La aprobación de campaña es una propuesta por validar. | La aprobación no se considera un requisito empresarial confirmado hasta que el PO lo diga. |

| **Gerencia de TI** | Configura y prueba la automatización opcional; la activa y monitorea solo si el PO la aprueba. | No implica una integración real ni una automatización obligatoria en el MVP. |

|---|---|---|



## 4. Recorrido A — atención, perfil, historial e interacción

Sigue esta secuencia al leer el flujo principal de izquierda a derecha, atendiendo las etiquetas de cada compuerta.

### Paso A1. Inicio e identificación

1. El cliente solicita registrarse o recibir atención.
2. Servicio al Cliente identifica al cliente con el dato que apruebe el PO (por ejemplo, un código interno o un dato de búsqueda definido para el prototipo).
3. La compuerta **“¿Cliente registrado?”** separa dos rutas:
   - **Sí:** el sistema consulta el perfil existente.
   - **No:** Servicio al Cliente solicita y captura los datos necesarios para el alta.

No se asume que un correo o teléfono sea siempre identificador único. La regla real de búsqueda y posible duplicidad se debe acordar con el PO.

### Paso A2. Validación y creación sin duplicar

4. El sistema valida que los datos obligatorios tengan formato y contenido aceptables y revisa posibles duplicados con la regla definida.
5. En **“¿Datos válidos?”**:
   - **No:** se corrigen o completan los datos y vuelven a validarse. No se crea un perfil hasta pasar la validación.
   - **Sí:** se crea un perfil central.
6. De acuerdo con el diagrama aprobado, la ruta de cliente nuevo y la de cliente existente se conectan directamente con **«Registrar visita e interacción»**. Ese punto común permite continuar el recorrido.


**Separación técnica recomendada:** Servicio al Cliente recopila o corrige información; la lógica del sistema verifica reglas; la base de datos conserva el perfil aprobado. Mostrar un mensaje entendible si el dato no es válido o parece duplicado.

### Paso A3. Visita, interacción e incidencia

7. Servicio al Cliente registra la visita y la interacción asociada al cliente. El PO debe precisar qué campos son necesarios: fecha, canal/área, motivo y notas mínimas son ejemplos, no una lista obligatoria.
8. La compuerta **“¿Se reporta una incidencia?”** separa casos:
   - **Sí:** Servicio al Cliente registra y clasifica la queja, consulta o solicitud, y la atiende o escala según el criterio que se acuerde. El sistema guarda el estado del caso asociado al perfil.
   - **No:** no se crea un caso de incidencia.
9. Las dos ramas se reúnen y el sistema guarda la visita/interacción y actualiza el historial del cliente.

Este punto es deliberado: el historial se registra **tanto si hubo una incidencia como si no**, y antes de evaluar una promoción. Si el caso de incidencia tiene seguimiento, responsables o estados detallados, se debe añadir el nivel de detalle que el PO y la rúbrica exijan; no inferir categorías, plazos ni reglas que no se hayan acordado.

### Paso A4. Segmentación y decisión promocional

10. El subproceso colapsado **«Segmentación de clientes»** se detalla en una vista separada. En el carril **«Sistema CRM / datos»**, el inicio y el fin son simples y se ejecutan cinco tareas en secuencia: (1) consultar frecuencia de visitas del cliente; (2) consultar nivel de gasto del cliente; (3) consultar preferencias de juegos del cliente; (4) consultar historial de promociones del cliente; y (5) «Segmentar al cliente (diferenciador para clasificar al cliente)». Los cuatro primeros son los criterios de segmentación; la quinta tarea produce la clasificación.

Las tareas del subproceso se entienden así:



| Tarea | Qué significa en el piloto | Qué no se presupone |

|---|---|---|

| **Consultar frecuencia de visitas del cliente** | Recuperar el dato de frecuencia que esté disponible en el historial del cliente. | No se fija el periodo de conteo ni cómo calcular la frecuencia; lo define el PO. |

| **Consultar nivel de gasto del cliente** | Consultar el nivel de gasto registrado para ese perfil, si está disponible. | No se fija moneda, periodo, rango ni umbral. |

| **Consultar preferencias de juegos del cliente** | Leer las preferencias que el cliente haya indicado o que estén registradas con autorización. | No se infiere una preferencia a partir de su comportamiento sin regla aprobada. |

| **Consultar historial de promociones del cliente** | Consultar las promociones registradas para ese perfil como parte del historial. | Un registro de demostración no prueba que una oferta real se haya enviado o canjeado. |

| **Segmentar al cliente (diferenciador para clasificar al cliente)** | Aplicar la clasificación que el PO defina con los cuatro criterios anteriores. | No se inventan segmentos, pesos, umbrales ni fórmulas; si faltan datos o una regla aprobada, no se fabrica una clasificación. |

|---|---|---|



El inicio simple marca el comienzo interno del subproceso cuando el flujo principal llega a «Segmentación de clientes»; el fin simple devuelve el control al flujo principal. El detalle del subproceso no crea una ruta independiente ni reemplaza los otros recorridos.

Las reglas, disponibilidad de datos, periodos y significado de cada campo deben confirmarse con el PO. No se asignan ponderaciones ni puntos de corte en esta guía. Las políticas de marketing son un insumo implícito cuando corresponda.

11. La compuerta **«¿Cumple criterios de promoción?»** decide:
   - **No:** la atención finaliza sin crear ni enviar una promoción. La visita y la interacción ya quedaron guardadas.
   - **Sí:** Marketing continúa con la oferta conforme a criterios acordados; el sistema registra la promoción y se ejecuta **«Comunicar oferta al cliente»** por un canal real disponible o mediante una simulación identificada (como un correo, mensaje de texto, etc).
12. Se ejecuta **«Actualizar historial de promociones del cliente»** y se cierra la ruta correspondiente.
13. La atención termina.

Si no hay correo, SMS u otra integración real, el prototipo debe etiquetar la comunicación como **simulada**. No presentar una pantalla de confirmación como si se hubiera enviado un mensaje real.

## 5. Recorrido B — campañas y reglas vigentes

Este recorrido inicia cuando existe una necesidad de campaña; no es un paso obligatorio de cada visita.

1. Marketing ejecuta **«Definir objetivo, público y criterios para la campaña»**.
2. Ejecuta **«Diseñar promoción y vigencia»**.
3. La campaña se revisa y decide conforme al mecanismo que confirme el PO; cualquier aprobación formal que aparezca en la vista es un punto por validar.
4. Si se solicitan cambios, se ajusta la definición y vuelve a revisión; si se rechaza, no se publica.
5. Si se aprueba, se registra la campaña dentro del alcance y de los medios disponibles.
6. El recorrido principal evalúa criterios de promoción con datos disponibles; las políticas de marketing son un insumo implícito, no un objeto BPMN.

**Distinción clave:** una **campaña** es una planificación para un público/periodo/objetivo; una **promoción** es la oferta concreta que se presenta o asocia a un cliente. Se relacionan, pero no son sinónimos.

El PO debe decidir variables, vigencia, límites, excepciones y contenido; el equipo no debe inventar descuentos, puntos de corte o segmentaciones comerciales (a menos que se indique).

## 6. Recorrido C — reportes

1. El evento **«Inicio: solicitud de reporte»** inicia la ruta mediante el tipo Señal definido en el modelo.
2. Se define el periodo y los indicadores que autorice el PO para hacer consulta.
3. El sistema consulta datos disponibles y genera el reporte.
4. Gerencia General (PO) revisa los resultados y decide qué acciones tomar. La ruta es independiente de la atención; el origen/señal concreto debe confirmarse.

El modelo no fija qué métricas son oficiales. Cada indicador debe tener una definición verificable y poder contrastarse con datos de prueba. Si la vista muestra información personal, limitarla a lo necesario para el propósito académico y usar datos ficticios.

## 7. Recorrido D — automatización candidata y validación del PO

La ruta es opcional y sujeta a priorización. Si el PO no selecciona una automatización, el equipo no la trata como compromiso de implementación.

1. La ruta inicia bajo la condición que confirme el PO y que quede representada como condición pendiente, sin inventar una expresión.
2. Se ejecuta **«Definir la tarea, reglas y excepciones»**; el PO confirma la tarea repetitiva, entradas, regla, excepciones y resultado esperado.
3. TI **configura y prueba la automatización** con casos de prueba acordados.
4. TI **reporta y muestra resultados al PO**. La demostración y decisión se validan en Sprint Review, con el profesor en su rol de PO.
5. En **«¿Automatización aprobada?»**: si la respuesta es Sí, se ejecuta **«Activar y monitorear»** y se llega a **«Automatización monitoreada»**.
6. Si la respuesta es No, se evalúa **«¿Ajustar las definiciones?»**. Si Sí, se vuelve a **«Definir la tarea, reglas y excepciones»**, se modifica lo necesario, se repite la prueba y se reportan nuevos resultados al PO. Si No, se llega a **«Fin: rechazo de automatización»**; no se activa.

La aprobación no se infiere de que la prueba técnica termine sin errores: el PO debe tomar la decisión explícita. Una simulación se etiqueta como simulación y no como automatización real.

## 8. Áreas del producto y su responsabilidad técnica

### 8.1 Capa de vista / interfaz

Es la parte visible con la que interactúa la persona: pantallas, navegación, formularios, tabla/ficha del cliente, resultados, mensajes de validación y estados de carga/error. Para este EFSRT es un componente importante y debe mostrarse de forma clara.

- **HTML:** estructura/contenido de la página.
- **CSS:** presentación, distribución, colores y adaptación de la interfaz.
- **JavaScript:** interacción en el navegador, validaciones inmediatas y actualización de la vista según el diseño.

Una validación en la vista mejora la experiencia, pero no sustituye la validación del servidor/base de datos. Una persona podría enviar datos sin usar la pantalla habitual; por eso las reglas importantes deben verificarse también en la lógica del sistema.

### 8.2 Lógica de aplicación / backend

Coordina reglas de negocio: validar información, buscar clientes, gestionar visitas, decidir si se puede continuar y preparar resultados. El lenguaje/backend propuesto en trabajos previos es Python, pero el framework (Flask, Django, FastAPI u otro) no se fija sin indicación del profesor.

El backend puede exponerse mediante una API si el equipo decide esa arquitectura; una API no es obligatoria por nombrarla en el diagrama. Si la vista habla directamente con el backend, documentar cómo se envían y reciben datos y qué errores se muestran.

### 8.3 Persistencia y base de datos

La base de datos relacional guarda información estructurada y relaciones, por ejemplo un perfil, varias visitas y varias interacciones vinculadas al mismo cliente. El caso previo usa SQL Server como motor objetivo tentativo; validar con el profesor cómo se conectará el prototipo.

- **Oracle SQL Developer Data Modeler:** herramienta confirmada para diseñar/documentar modelos de datos. No es el motor de base de datos del proyecto.
- **SQL Server:** motor/servidor relacional propuesto para almacenar datos.
- **SQL Server Management Studio (SSMS):** herramienta de administración y consulta de SQL Server; no es lo mismo que SQL Server ni que Oracle SQL Developer Data Modeler.

No crear una integración entre Oracle y SQL Server por el solo hecho de usar Data Modeler: el modelo puede diseñarse con una herramienta y luego implementarse en el motor elegido, previa validación del docente.

### 8.4 Entidades iniciales para discutir, no tablas definitivas



| Entidad candidata | Para qué serviría | Relación de ejemplo |

|---|---|---|

| **Cliente** | Perfil central mínimo que el PO autorice. | Un cliente puede tener muchas visitas e interacciones. |

| **Visita** | Registrar una visita al establecimiento/servicio. | Pertenece a un cliente. |

| **Interacción** | Registrar contacto, atención o comunicación. | Se asocia a un cliente y, si aplica, a una visita o caso. |

| **Incidencia** | Dar seguimiento a queja, consulta o solicitud. | Se asocia al cliente y puede tener estado/solución si se aprueba ese alcance. |

| **Campaña** | Guardar objetivo, vigencia, público y estado de una planificación. | Puede asociarse a promociones y criterios aprobados. |

| **Promoción** | Guardar oferta concreta y su relación con campaña/cliente si corresponde. | Su comunicación/estado puede aparecer en historial. |

| **Segmento** | Clasificación de un cliente a partir de criterios que el PO acuerde. | Los insumos previstos son exactamente frecuencia de visitas, nivel de gasto, preferencias de juegos e historial de promociones. El equipo no define por su cuenta umbrales, pesos ni fórmula. |

| **Ejecución de automatización** (opcional) | Evidencia de una regla probada, resultado y error si falla. | Solo diseñarla si el PO prioriza la automatización. |

|---|---|---|



Antes de construir, definir atributos, clave primaria, claves foráneas, campos obligatorios, estados, reglas de unicidad y política de cambios. Evitar copiar todos los datos del cliente dentro de cada visita; mantener el perfil en una sola fuente lógica y relacionar los registros.

## 9. Privacidad, seguridad y datos de demostración

- Usar **datos ficticios** para desarrollar, probar y exponer el piloto.
- Guardar solo datos pertinentes al propósito aprobado; no pedir datos sensibles “por si acaso”.
- Definir quién puede consultar/editar qué información únicamente si la rúbrica o el PO lo pide; no modelar accesos avanzados como requisito empresarial confirmado sin evidencia.
- No enviar datos personales reales a herramientas públicas de IA ni ponerlos en capturas/Jira/Discord.
- Si una función externa no está conectada, identificarla como simulación.

La guía no exige construir un módulo completo de identidad, auditoría, copias de respaldo o integración corporativa. Si el profesor lo requiere, se incorporará como nuevo alcance explícito.

## 10. Pruebas mínimas recomendadas



| Escenario | Resultado esperado |

|---|---|

| Cliente encontrado | Se consulta el perfil correcto y no se crea otro. |

| Cliente no encontrado | Se inicia el alta y se informa qué datos hacen falta. |

| Datos inválidos | Se muestra qué corregir; no se guarda perfil incompleto. |

| Duplicado posible | El sistema avisa o aplica la regla que defina el PO; no se fusionan perfiles automáticamente sin autorización. |

| Interacción sin incidencia | Se guarda visita/interacción e historial y se sigue al análisis. |

| Interacción con incidencia | Se crea caso asociado y también se conserva la visita/interacción. |

| Promoción no aplicable | La atención termina sin oferta; el historial de la visita sí queda actualizado. |

| Promoción aplicable | Se registra oferta y comunicación, indicando si el canal fue real o simulado. |

| Campaña rechazada | No se publica; queda ruta para ajustar y revisar de nuevo. |

| Reporte | Los valores coinciden con un conjunto pequeño de datos de prueba conocido. |

| Automatización con prueba fallida | No se activa; el ajuste queda pendiente. |

| Automatización con prueba aprobada | Solo se activa si el PO la autorizó y se puede demostrar el resultado. |

|---|---|---|



Registrar resultado esperado, resultado obtenido, estado, evidencia y defecto Jira relacionado. Cada estudiante debe revisar trabajo de otro integrante para compartir conocimiento y detectar errores antes de la demo.

## 11. Decisiones que el Product Owner debe confirmar (IMPORTANTE PREGUNTAR)

1. Qué funciones del caso son obligatorias para la entrega y cuáles quedan como propuestas.
2. Qué campos e identificador se usarán para buscar clientes y detectar duplicados.
3. Qué datos del perfil/historial pueden usarse en el prototipo y cómo se muestran.
4. Qué tipos de incidencia, estados y seguimiento se incluyen.
5. Cómo se interpretan y obtienen los cuatro criterios: frecuencia de visitas, nivel de gasto, preferencias de juegos e historial de promociones; qué datos están disponibles y qué reglas/umbrales aprueba el PO.
6. Si las campañas requieren aprobación formal y quién la realiza.
7. Qué indicadores y periodos tienen valor para los reportes.
8. Qué tarea se automatizaría, si entra en el incremento y cómo se valida la decisión del PO tras recibir el reporte de TI.
9. Qué canal tecnológico, framework Python y motor/base de datos exige o permite el curso.
10. Cómo la rúbrica evaluará la capa de vista, integración y pruebas.

Si una regla está pendiente, escribir **“supuesto por validar”** y usar datos sintéticos; nunca presentarla como política real de Atlantic City.

## 12. Ambigüedades y sugerencias para confirmar con el Product Owner

El BPMN es una vista de nivel general; estas decisiones todavía no deben tratarse como reglas oficiales. Aclárenlas con el profesor antes de programarlas. La automatización aparece como candidata y la aprobación de campañas también está expresamente sujeta a confirmación.



| Punto por aclarar | Riesgo si se supone sin validar | Sugerencia / pregunta concreta |

|---|---|---|

| **Unión directa de cliente nuevo/existente** | En BPMN formal, varios flujos que entran directamente a una tarea pueden interpretarse como una unión paralela (AND), que espera todos los flujos. | El diagrama representa la conexión directa, sin rombo. Para una futura simulación BPMN formal, conviene consultar al profesor si se requiere una compuerta de unión exclusiva, porque varios flujos que entran directamente a una tarea pueden interpretarse como una unión paralela (AND). Esta observación no modifica el diagrama presentado. |

| **Identificador y duplicados de cliente** | Dos perfiles de una misma persona o una fusión errónea de clientes distintos. | Preguntar qué identificador se buscará, qué campos solo alertan de duplicidad y quién autoriza una fusión. No fusionar automáticamente por nombre. |

| **Datos del perfil** | Pedir o guardar información innecesaria o sensible. | Acordar campos obligatorios y opcionales, propósito, formato y mensaje que verá el agente cuando falte un dato. |

| **Visita vs. interacción** | Contar dos veces una visita o no saber qué aparece en el historial. | Definir si cada visita crea una interacción, qué canales incluye una interacción y qué datos mínimos se guardan. |

| **Incidencia** | No queda claro quién resuelve, escala, confirma o cierra un caso. | El diagrama la resume en una tarea de atención/escalamiento. Si la rúbrica lo pide, añadir estados, responsable, condición de cierre/reapertura y comunicación al cliente; definirlos con el PO. |

| **Aprobación de campaña** | Crear un paso de aprobación que no exista en el proceso real, o publicar algo que sí requiere aprobación. | Confirmar si toda campaña requiere aprobación, quién aprueba y qué hacer si se rechaza. Si no aplica, quitar ese rombo del modelo. |

| **Segmentación y elegibilidad** | Clasificación o promoción no autorizada por criterios no definidos. | Confirmar cómo se consultan frecuencia de visitas, nivel de gasto, preferencias de juegos e historial de promociones y qué reglas aprueba el PO. No inventar umbrales ni pesos. |

| **Canal de promoción** | La demo podría afirmar que se envió un SMS/correo cuando solo mostró una pantalla. | Confirmar si se integra un canal. Si no, registrar y presentar la comunicación como simulada. El carril Cliente está dentro del mismo pool por sencillez; si debe ser participante externo, moverlo a otro pool y usar flujos de mensaje. |

| **Reportes** | Métricas con nombres parecidos pueden dar resultados distintos o exponer información innecesaria. | Definir nombre/fórmula, periodo, filtros, audiencia y nivel de detalle; probarlos contra datos ficticios conocidos. |

| **Automatización** | Activar una regla no priorizada o confundir pruebas con aprobación. | El PO prioriza la tarea; TI prueba y presenta resultados. En Sprint Review el PO aprueba, solicita ajustes/prueba repetida o rechaza definitivamente. Sin aprobación no se activa. |

| **Tecnologías e integración** | Confundir la herramienta de modelado con el motor de base de datos, o prometer una integración no implementada. | Confirmar framework y motor con el docente. Oracle SQL Developer Data Modeler diseña el modelo; SQL Server sería el motor tentativo y SSMS una herramienta para administrarlo. Marcar conexiones inexistentes como simuladas. |

| **Responsabilidad manual vs. automática** | Pensar que una tarea ya está automatizada solo porque está en el carril del sistema. | El BPMN compacto usa tareas genéricas: el carril muestra responsable, pero no el tipo técnico. Para cada PBI, decidir si la actividad será humana, automática o simulada. |

|---|---|---|



## 13. Glosario: qué significa, qué no significa y ejemplo



| Término | Qué es | Qué no es | Ejemplo sencillo |

|---|---|---|---|

| **CRM** | En inglés, *Customer Relationship Management*: enfoque y conjunto de procesos/herramientas para gestionar perfiles, interacciones y relaciones con clientes. | No es solamente una tabla, una base de datos o una campaña de marketing. | Consultar una ficha y ver visitas/interacciones relacionadas. |

| **Sistema CRM** | Aplicación que combina interfaz, lógica, datos y procesos de atención/gestión. | No significa que el piloto ya esté integrado con todos los sistemas de la empresa. | El prototipo donde el agente busca un cliente ficticio. |

| **BPMN** | Notación estándar para representar procesos y decisiones mediante eventos, tareas, compuertas y flujos. | No es código ejecutable ni un diagrama entidad-relación. | El archivo `.bpmn` importado en Bizagi. |

| **Pool** | Participante/proceso principal que contiene el flujo modelado. | No es una persona ni una base de datos. | El pool “Atlantic City — piloto CRM”. |

| **Lane / carril** | División del pool para indicar responsabilidad de un área/rol. | No necesariamente representa una división física de la empresa. | “Servicio al cliente” realiza la captura. |

| **Tarea de usuario** | Subtipo BPMN para una acción que realiza principalmente una persona. | No significa que el usuario pueda saltarse las validaciones; además, este subtipo no aparece en la versión compacta del archivo. | Capturar datos o revisar un reporte; aquí la responsabilidad se entiende por el carril. |

| **Tarea de servicio** | Subtipo BPMN para una acción automática/técnica del sistema. | No significa que la automatización ya esté programada; este subtipo tampoco aparece en el archivo compacto. | Validar formato o guardar historial cuando se implemente. |

| **Evento de inicio/fin** | Marca el disparador o la terminación de un recorrido. Los inicios pueden ser de distintos tipos BPMN. | No es una tarea con pasos internos ni todos los eventos de inicio tienen el mismo tipo. | Mensaje para atención; Temporal para campaña; Señal para reporte; Condicional para automatización opcional. |

| **Compuerta exclusiva (XOR)** | Elige una ruta mutuamente excluyente según una condición. | No es un paso que “hace” el cliente; tampoco ejecuta ambas salidas. | “¿Cumple criterios de promoción?”: Sí o No. |

| **Flujo de secuencia** | Flecha continua que indica el orden de actividades dentro del mismo proceso/pool. | No debe usarse para conectar directamente tareas entre pools distintos. | Registrar visita → evaluar promoción. |

| **Flujo de mensaje** | Comunicación entre participantes/pools distintos. | No es lo mismo que secuencia dentro de un pool. | Un sistema externo notifica a un cliente modelado en otro pool. |

| **Asociación de datos** | Conector BPMN punteado que puede relacionar una tarea con información/documento en un diagrama ampliado. | No es una actividad ni una flecha de ejecución; no está dibujado en la versión compacta para Bizagi. | En una ampliación, relacionar los criterios aprobados con la tarea de segmentación. |

| **Subproceso embebido** | Elemento BPMN que contiene un flujo interno y puede mostrarse colapsado en la vista principal. | No es un proceso ajeno al flujo ni una asociación punteada. | «Segmentación de clientes» se ve colapsado en el principal y su detalle de cinco tareas se presenta en diagrama separado. |

| **Cliente / perfil** | Datos centrales aprobados para reconocer y atender a una persona. | No es una visita individual ni una campaña. | Nombre/código permitido y preferencias autorizadas. |

| **Visita** | Registro de una ocurrencia de visita. | No equivale a todo el historial del cliente. | Una visita realizada en una fecha. |

| **Interacción** | Registro de un contacto/atención o comunicación. | No siempre es una visita presencial. | Llamada, atención en ventanilla o comunicación promocional. |

| **Incidencia** | Queja, solicitud o problema que requiere seguimiento según el alcance acordado. | No es automáticamente cualquier interacción. | Una queja vinculada al perfil. |

| **Campaña** | Plan con objetivo, público, vigencia y reglas/ofertas asociadas. | No es la oferta individual que recibe una persona. | Campaña de una temporada para un segmento. |

| **Promoción** | Oferta concreta con condiciones que puede aplicar a un cliente. | No es sinónimo de campaña ni se debe crear si la regla dice “No”. | Descuento ficticio de demostración autorizado por el PO. |

| **Segmentación** | Clasificación de clientes usando criterios aprobados. | No es una etiqueta inventada por el equipo ni necesariamente IA. | Clasificar con una regla simple y documentada. |

| **Regla de negocio** | Condición acordada que determina un resultado del proceso. | No es una suposición que se convierte en verdad por programarla. | Criterio de elegibilidad confirmado por el PO. |

| **Interfaz / UI** | Pantallas y controles con los que interactúa la persona. | No es todo el sistema ni solo la decoración visual. | Formulario, botón, tabla y mensajes de validación. |

| **Capa de vista / frontend** | Presentación y comportamiento de la interfaz en el cliente/navegador. | No sustituye la lógica de negocio o la persistencia. | HTML/CSS/JavaScript para una ficha de cliente. |

| **Backend** | Lógica del servidor que coordina reglas, operaciones y acceso a datos. | No es la pantalla ni la base de datos. | Validar una alta antes de guardarla. |

| **API** | Contrato/interfaz de software para intercambiar solicitudes y respuestas entre componentes. | No es una base de datos ni es obligatoria en toda arquitectura. | Endpoint que recibe datos de un formulario y devuelve resultado. |

| **Base de datos relacional** | Datos organizados en tablas relacionadas mediante claves. | No es el CRM completo ni la herramienta con la que se dibuja el modelo. | Tabla Cliente relacionada con Visita por una clave foránea. |

| **SQL Server** | Motor/servidor relacional propuesto para almacenar y consultar datos. | No es SSMS ni Oracle SQL Developer Data Modeler. | Servidor donde se guardarían datos ficticios del prototipo. |

| **SSMS** | SQL Server Management Studio: herramienta para conectarse, administrar y consultar SQL Server. | No es el motor SQL Server ni una herramienta de diseño independiente de modelo equivalente a Data Modeler. | Ejecutar una consulta de prueba en SQL Server. |

| **Oracle SQL Developer Data Modeler** | Herramienta para diseñar y documentar modelos de datos. | No es la base de datos destino ni SSMS. | Dibujar Cliente—Visita antes de implementarlo en SQL Server. |

| **PK / clave primaria** | Identificador único de una fila dentro de su tabla. | No es necesariamente un dato visible del cliente. | `cliente_id` identifica un perfil. |

| **FK / clave foránea** | Campo que referencia una fila de otra tabla y representa una relación. | No es el identificador del cliente repetido libremente sin reglas. | `visita.cliente_id` apunta a `cliente.cliente_id`. |

| **Validación** | Comprobación de formato, obligatoriedad o regla de datos. | No es lo mismo que detectar con certeza a la misma persona. | Rechazar una fecha con formato incorrecto. |

| **Duplicado posible** | Dos registros que podrían representar a una misma persona según criterios. | No se debe fusionar automáticamente sin una regla segura/aprobada. | Avisar si coincide un identificador único que el PO definió. |

| **CRUD** | Operaciones Create, Read, Update, Delete: crear, consultar, actualizar y eliminar. | No obliga a dar permiso para borrar perfiles en el piloto. | El MVP quizá implementa alta, lectura y actualización; no eliminación. |

| **PBI / Product Backlog Item** | Elemento del backlog: historia, error, requisito técnico, prueba u otro trabajo. | No es exclusivamente una historia de usuario. | `AC-PBI-07` validar el perfil. |

| **Historia de usuario** | Formato para expresar necesidad desde una persona y su beneficio. | No es una especificación técnica completa. | “Como agente, quiero buscar un perfil para atender mejor”. |

| **Criterio de aceptación** | Condición observable para aceptar una historia. | No es una actividad genérica como “programar bien”. | “Si no existe perfil, se informa y permite iniciar alta”. |

| **MVP / piloto** | Alcance mínimo útil para validar la idea con tiempo/datos controlados. | No es la versión empresarial completa. | Flujo de buscar/crear perfil e historial con datos ficticios. |

| **Simulación** | Demostración que representa un comportamiento sin integración real subyacente. | No debe describirse como envío/automatización real. | Marcar “promoción simulada” en vez de afirmar que se envió un SMS. |

| **Product Owner (PO)** | Responsabilidad Scrum que ordena el Product Backlog y maximiza el valor; aquí, el profesor. | No es quien necesariamente programa o asigna cada subtarea. | Confirmar si campaña y automatización entran en el piloto. |

| **Sprint** | Periodo de trabajo de duración fija para alcanzar un objetivo y producir un incremento. | No es solo una semana para dividir tareas sin objetivo o revisión. | Sprint de una semana con una demo comprobable. |

| **Jira** | Herramienta para registrar backlog, prioridades, trabajo y estado. | No es repositorio de código ni reemplaza los acuerdos del equipo. | Vincular PBI con criterio de aceptación y prueba. |

| **Discord** | Canal de coordinación y conversación del equipo. | No debe ser el único lugar donde quedan decisiones importantes. | Registrar un acuerdo de Discord también en Jira/guía. |

|---|---|---|


