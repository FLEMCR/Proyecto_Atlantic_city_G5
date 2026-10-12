# Guía de modelado BPMN — Atlantic City

## 1. Qué contiene la carpeta

- `Atlantic_city_grupo_cinco.png`: vista principal integrada del proceso.
- `SUBPROCESO.png`: detalle del subproceso de segmentación de clientes.

Las dos imágenes se copiaron sin alterar el contenido. La guía explica cómo leerlas y cómo responder preguntas sobre sus participantes, actividades, decisiones y límites.

## 2. Propósito del modelo

El modelo muestra cómo se relacionan la atención al cliente, la gestión de perfiles, las incidencias, las campañas, las promociones, los reportes y una automatización candidata. Permite conversar sobre responsables, secuencia y decisiones antes de implementar funciones.

Un BPMN describe un proceso; **no es código de la aplicación, esquema de base de datos ni prueba de una integración real**. Una actividad ubicada en el carril del sistema indica responsabilidad del sistema en el proceso modelado, no que ya exista código que la ejecute.

## 3. Vista principal: seis carriles y cuatro recorridos

El diagrama principal presenta el proceso de Atlantic City con seis carriles. Los recorridos de campaña, reporte y automatización parten de inicios propios; no son pasos obligatorios de toda visita.

### Carriles y responsabilidades

| Carril | Actividades que representa | Cómo explicarlo |
|---|---|---|
| **Cliente** | Solicita registro o atención y recibe la información que corresponda. | Participa en el proceso; el diagrama no le otorga acceso general al CRM. |
| **Servicio al Cliente / Operaciones** | Identifica al cliente, solicita/captura datos, registra la visita/interacción y gestiona una incidencia reportada. | Interacción operativa con el cliente. Las reglas de campos y seguimiento dependen de la definición del PO. |
| **Sistema CRM / datos** | Busca/valida perfiles, conserva información e historial, consulta criterios, registra una oferta y prepara datos para reportes. | Responsable de actividades del sistema; no equivale solo a una base de datos. |
| **Marketing** | Define el público y los criterios de campaña, diseña la oferta y participa en la selección de promoción. | No inventa condiciones ni publica una oferta sin decisión confirmada. |
| **Gerencia General / PO** | Revisa resultados de reportes y representa decisiones de prioridad; aparece en la revisión de campaña del modelo. | En el proyecto, el profesor ocupa el rol de PO. Una aprobación formal de campaña sigue por confirmar. |
| **Gerencia de TI** | Define, configura y prueba una automatización candidata; informa resultados al PO. | La activación depende de una decisión explícita del PO. |

La referencia empresarial a varias gerencias no significa que todas ejecuten actividades en este proceso. El modelo organiza las responsabilidades necesarias para estos recorridos.

### 3.1 Recorrido de atención del cliente

Lee el flujo desde el inicio de atención hacia la derecha y siguiendo las salidas «Sí/No» de cada compuerta.

1. **Inicio de atención:** un cliente solicita atención o registro.
2. **Identificar cliente:** Servicio al Cliente busca el perfil usando el identificador que se defina.
3. **¿Cliente registrado?**
   - **Sí:** el sistema consulta el perfil existente.
   - **No:** se solicitan los datos necesarios para iniciar el registro.
4. **Validar datos y posible duplicado / ¿Datos válidos?**
   - **No:** los datos se corrigen o completan y se vuelven a validar.
   - **Sí:** el sistema crea el perfil.
5. Ambas rutas continúan a **registrar visita e interacción**. La imagen conecta las rutas a esa tarea sin mostrar una compuerta de unión exclusiva; no se debe cambiar esa representación sin acuerdo del profesor.
6. **¿Se reporta una incidencia?**
   - **Sí:** se registra y atiende la incidencia conforme al proceso que confirme el PO.
   - **No:** no se crea un caso.
7. El sistema guarda/actualiza la visita y el historial del cliente. El historial se conserva tanto con incidencia como sin ella.
8. Se ejecuta el subproceso **Segmentación de clientes**, cuyo detalle aparece en `SUBPROCESO.png`.
9. **¿Cumple criterios de promoción?**
   - **No:** la atención termina sin registrar ni comunicar una promoción. La visita ya debe permanecer en el historial.
   - **Sí:** se selecciona/prepara la oferta correspondiente, se registra y se comunica por el canal disponible o de forma identificada como simulada; luego se actualiza el historial de promociones.
10. El flujo llega al fin correspondiente.

**Idea central para explicar:** la visita/interacción es un registro independiente de la incidencia y de la promoción. La atención no desaparece si no hay caso ni oferta.

### 3.2 Recorrido de campaña

Es una ruta propia. Marketing define objetivo, público y criterios, diseña una promoción con vigencia y llega a una revisión/decisión. Si se requiere ajustar, la definición se revisa; si se aprueba, se registra o publica según el proceso definido.

El diagrama sugiere una revisión por parte del PO. Antes de presentarla como política empresarial, confirmar quién aprueba campañas y si todas requieren aprobación formal.

**No confundir:**

- **Campaña:** planificación para un objetivo, público y periodo.
- **Promoción:** oferta concreta que se puede asociar a una campaña o cliente.

### 3.3 Recorrido de reporte

El proceso parte de una solicitud/señal de reporte, define el periodo y los indicadores del alcance, consulta los datos, revisa los resultados y concluye la ruta. El diagrama muestra un proceso independiente de la atención. El origen exacto de la solicitud y las métricas se confirman con el PO.

### 3.4 Recorrido de automatización candidata

El evento de inicio representa una condición para considerar una tarea automática. La ruta contiene definición de tarea/reglas/excepciones, configuración y prueba por TI, reporte de resultados al PO y una decisión sobre aprobación.

- **Aprobación:** solo entonces se continúa a activar/monitorear.
- **Ajustes solicitados:** se actualiza la definición, se vuelve a probar y se informa de nuevo.
- **Rechazo o no priorización:** permanece inactiva.

La prueba y la autorización son decisiones diferentes. Sin priorización del PO, esta ruta no es un compromiso de desarrollo.

## 4. Detalle del subproceso de segmentación

`SUBPROCESO.png` amplía la caja colapsada «Segmentación de clientes» del flujo principal. Está dibujado en un carril «Sistema CRM / datos», con un evento de inicio, cinco tareas en secuencia y un evento de fin:

1. **Consultar frecuencia de visitas del cliente.**
2. **Consultar nivel de gasto del cliente.**
3. **Consultar preferencias de juegos del cliente.**
4. **Consultar historial de promociones del cliente.**
5. **Segmentar al cliente (diferenciador para clasificar al cliente).**

Las cuatro primeras tareas consultan criterios; la quinta clasifica con una regla acordada. El detalle vuelve al flujo principal al terminar. No es un recorrido independiente de la atención.

### Qué debe saberse de cada criterio

| Criterio | Pregunta que debe resolver el PO | Qué no se debe inventar |
|---|---|---|
| Frecuencia de visitas | Periodo de referencia, origen y definición de visita. | Un conteo, rango o periodo sin acuerdo. |
| Nivel de gasto | Unidad, periodo y fuente permitida. | Moneda, rangos o umbrales. |
| Preferencias de juegos | Cómo se obtiene y registra la preferencia, y qué uso está autorizado. | Preferencias inferidas sin regla aprobada. |
| Historial de promociones | Qué evento cuenta como promoción histórica: registro, comunicación, recepción u otro. | Suponer que un registro local demuestra entrega o canje. |
| Segmento | Nombres, regla, datos necesarios y tratamiento de ausencias. | Pesos, fórmulas, segmentos o condiciones creados por el equipo. |

## 5. Elementos BPMN que conviene explicar

- **Evento de inicio:** círculo que dispara un recorrido. Los inicios del modelo tienen tipos distintos según la ruta; el símbolo interior y su etiqueta aportan significado.
- **Evento de fin:** círculo de borde grueso que marca la conclusión de esa ruta.
- **Tarea:** rectángulo redondeado con una acción; se ubica en el carril del responsable.
- **Compuerta:** rombo que divide o controla rutas según una condición. Las etiquetas Sí/No indican qué salida seguir.
- **Pool:** participante general del proceso.
- **Carril (lane):** subdivisión del pool para ordenar responsabilidades.
- **Flujo de secuencia:** flecha que ordena actividades dentro del mismo pool.
- **Subproceso colapsado:** actividad que contiene un flujo interno representado por separado para mejorar legibilidad.

El dibujo mostrado usa una vista compacta. Si se requiere ejecutar una simulación formal, revisar con el profesor la semántica de uniones, tipos de tarea y eventos antes de redibujarla. En particular, una tarea que recibe más de un flujo de entrada puede interpretarse de manera distinta según la notación; la imagen actual no muestra una compuerta de unión entre las rutas de cliente nuevo y existente.

## 6. Cómo presentar el modelado oralmente

Una explicación de dos minutos puede seguir este orden:

1. **Objetivo:** mostrar la gestión de perfiles e historial, la atención y los procesos complementarios del caso.
2. **Participantes:** señalar pool y seis carriles; explicar qué hace cada responsable y que el sistema no es una persona.
3. **Ruta principal:** identificación → perfil existente o alta → visita/interacción → incidencia opcional → historial → segmentación → decisión promocional.
4. **Decisiones:** leer una compuerta como una condición con dos salidas; el ejemplo más importante es promoción aplica/no aplica.
5. **Rutas independientes:** campaña, reporte y automatización tienen disparadores propios y no forman parte obligatoria de cada atención.
6. **Detalle:** mostrar `SUBPROCESO.png` y nombrar los cuatro criterios y la tarea final de clasificación.
7. **Límites:** reglas comerciales, periodo, indicadores y tecnología pendientes no se presentan como confirmados.

## 7. Preguntas frecuentes para los cuatro Developers

**¿Por qué se registran visitas aunque no haya incidencia?**  
Porque el historial de la atención debe conservarse en ambas salidas de la decisión de incidencia.

**¿Qué sucede si la promoción no aplica?**  
Se conserva la visita/interacción y se termina la ruta sin registrar la oferta como comunicada.

**¿El subproceso calcula automáticamente el segmento?**  
El modelo representa la tarea, pero la fórmula y los segmentos no están definidos por la imagen. El PO debe confirmar la regla antes de programarla.

**¿Una campaña es lo mismo que una promoción?**  
No. La campaña organiza objetivo/público/periodo; la promoción es la oferta concreta.

**¿La ruta de automatización significa que ya existe una automatización?**  
No. Representa una candidata condicionada a prioridad, definición, pruebas y aprobación explícita del PO.

**¿Los carriles son todos los sistemas de Atlantic City?**  
No. Son responsabilidades del proceso dibujado; no describen infraestructura o integraciones existentes.

## 8. Revisión antes de exponer el diagrama

- Abrir la imagen principal y la de detalle para asegurar que ambas se refieren a la misma versión.
- Leer las etiquetas de inicio, tareas, decisiones y fines directamente en el modelado.
- Explicar todos los carriles con el mismo vocabulario de la imagen.
- No agregar actores, umbrales, políticas o conexiones externas que no estén acordados.
- Si se recibe el archivo editable de Bizagi, comprobar el diagrama directamente en Bizagi antes de afirmar que la importación o edición fue verificada.
