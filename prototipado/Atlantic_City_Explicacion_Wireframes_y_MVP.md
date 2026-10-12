# Atlantic City — explicación de los wireframes y del MVP

## 1. Para qué sirve este documento

Esta guía permite leer las cuatro variantes del wireframe y recorrer el prototipo MVP. Describe qué representa cada pantalla, qué acciones se pueden probar y por qué se eligieron esas decisiones de diseño. El wireframe y el MVP se han alineado con la guía de procesos y el Product Backlog de Atlantic City.

La aplicación es un prototipo autónomo de navegador: **no está conectada a sistemas reales de Atlantic City**, a un servidor, a SQL Server ni a un canal de correo o mensajería. Los registros que muestra o que se agreguen desde los formularios quedan en el almacenamiento local del navegador. La marca «Datos de demostración» y los nombres «Cliente de prueba» identifican los registros precargados; sus cantidades no son métricas reales del negocio.

En el equipo, el docente cumple el rol de Product Owner y participan cuatro Developers. Las decisiones no especificadas por el PO quedan descritas como pendientes, en lugar de inventar reglas comerciales.

## 2. Qué representa cada wireframe

Los cuatro archivos representan **la misma pantalla de Inicio / Dashboard** y conservan el mismo contenido, distribución general y datos de muestra. Cambian únicamente el medio de elaboración y el tratamiento del color.

![Hoja comparativa de las cuatro variantes](Atlantic_City_Wireframes/wireframes_comparativa.png)

| Archivo | Qué representa | Para qué sirve |
|---|---|---|
| `wireframe_manual_bn.png` | Boceto manual en blanco y negro. | Revisar rápidamente la jerarquía, las agrupaciones y el espacio de los módulos sin que el color condicione la conversación. |
| `wireframe_manual_color.png` | El mismo boceto manual con acentos de color. | Añadir una primera lectura semántica de categorías —por ejemplo, perfiles, actividad, campañas y promociones— conservando el carácter exploratorio del boceto. |
| `wireframe_digital_bn.png` | La misma pantalla organizada digitalmente en escala de grises. | Revisar alineación, proporciones, etiquetas y densidad de información con menos ruido visual. |
| `wireframe_digital_color.png` | La pantalla digital con la paleta propuesta. | Mostrar con mayor fidelidad la jerarquía visual que orienta el MVP y facilitar una revisión conjunta del diseño. |

### Lectura de la pantalla

- **Barra superior:** identidad del producto, búsqueda rápida de clientes y perfil visual del equipo. «Datos de demostración» identifica el carácter de la información precargada.
- **Navegación lateral:** acceso a Inicio, Clientes, Visitas e interacciones, Incidencias, Segmentación, Promociones y campañas, y Reportes.
- **Indicadores superiores:** conteos de perfiles, visitas/interacciones, incidencias y promociones presentes en los datos locales. Son conteos del prototipo, no indicadores oficiales aprobados por el PO.
- **Actividad reciente:** muestra registros de ejemplo y sirve para comprender que la visita/interacción se conserva en el historial, exista o no una incidencia. Si no hay incidencias en los datos locales, aparece un mensaje de ese estado.
- **Criterios de segmentación:** recuerda los cuatro insumos del proyecto: frecuencia de visitas, nivel de gasto, preferencias de juegos e historial de promociones. La pantalla indica que la etiqueta de clasificación se ingresa manualmente mientras no exista una regla aprobada.
- **Clientes recientes:** muestra una tabla resumida con identificador de demostración, nombre, cantidad de registros de actividad, clasificación manual y preferencia disponible.
- **Campañas y promociones:** se presentan como elementos relacionados, pero diferentes. Una campaña organiza una iniciativa; una promoción es la oferta concreta. La tarjeta además resume la bifurcación de elegibilidad: «No aplica» no crea comunicación; «Aplica» genera solo una constancia local en este prototipo, no un envío real.

### Por qué se usa esta composición

1. **Prioridad al trabajo diario.** Perfiles e historial ocupan el centro de la pantalla; desde ahí se accede a las secciones del backlog sin introducir módulos ajenos al proceso.
2. **Navegación persistente.** El menú lateral mantiene visibles las áreas principales y evita convertir la pantalla de Inicio en un formulario extenso.
3. **Jerarquía por lectura.** Conteos, actividad reciente, criterios y perfiles permiten entender primero el estado del prototipo y luego explorar los registros.
4. **Color como apoyo, no como regla.** Los acentos ayudan a diferenciar tipos de contenido, pero cada elemento también tiene etiqueta textual. El color no codifica elegibilidad ni prioridad empresarial.
5. **Separación conceptual de marketing.** Se muestran por separado campañas y ofertas para no tratarlas como sinónimos, tal como explica la guía del proceso.
6. **Sin métricas inventadas.** Se usan conteos de filas locales y no se muestran ingresos, canjes, satisfacción, reservas ni porcentajes de eficacia que no están definidos en el backlog.
7. **Mismo contenido en las cuatro variantes.** Comparar el estilo manual/digital y monocromático/a color no cambia el alcance funcional ni implica cuatro productos distintos.

## 3. Qué permite hacer el MVP

El MVP lleva los módulos del wireframe a una interfaz navegable. Los datos de demostración precargados son tres perfiles de prueba, dos registros de visita/interacción, una campaña de prueba y una promoción de prueba vinculada; no incluye incidencias ni constancias iniciales. El usuario puede agregar sus propios registros de demostración mediante los formularios.

| Sección | Funciones disponibles | Qué significa el resultado |
|---|---|---|
| **Inicio** | Consultar conteos locales, clientes recientes, actividad y registros de marketing. | Resumen de los datos de este navegador; no es un tablero de métricas reales de Atlantic City. |
| **Clientes** | Crear y editar perfiles, buscar desde la sección Clientes o la búsqueda superior, filtrar por etiqueta y revisar la cantidad de registros de visita/interacción. La búsqueda superior abre Clientes; no busca en visitas ni promociones. Se valida que el identificador no se repita dentro de esta base local. | Permite demostrar la gestión básica del perfil. Los campos y la regla real de identificación/duplicados aún deben confirmarse con el PO. |
| **Visitas e interacciones** | Registrar cliente, tipo, fecha y nota; buscar registros previos. | La actividad queda vinculada al perfil y no depende de registrar una incidencia o una promoción. |
| **Incidencias** | Registrar una descripción, asociar opcionalmente un perfil y añadir notas de seguimiento. | No se inventan estados, responsables, categorías, plazos ni SLA. Esos detalles siguen pendientes de decisión. |
| **Segmentación** | Consultar los cuatro criterios disponibles y guardar una etiqueta manual para el perfil. | No se calcula un segmento automáticamente ni se atribuyen pesos, umbrales o fórmulas al proyecto. |
| **Campañas** | Registrar nombre, objetivo, público/criterios y periodo como campos de texto. | Guardar el registro no significa que la campaña haya sido aprobada o publicada. El flujo formal de aprobación debe confirmarlo el PO. |
| **Promociones** | Registrar una oferta y, opcionalmente, vincularla a una campaña. Se muestran criterios y descripción ingresados. | La promoción es la oferta concreta; su existencia local no prueba que sea una oferta real o vigente. |
| **Elegibilidad y constancias** | Elegir cliente y promoción y guardar manualmente «Aplica» o «No aplica». | No se evalúa una regla automáticamente. «No aplica» guarda la revisión y no crea constancia. «Aplica» crea una constancia local, pero no envía un correo, SMS u otro mensaje. |
| **Reportes** | Consultar conteos locales, ver la distribución de etiquetas manuales y descargar un CSV de los registros. | El CSV refleja la información de esta demostración. No tiene filtros por periodo ni indicadores de negocio validados por el PO. |

### Recorrido recomendado para probarlo

1. En **Clientes**, crear o actualizar un perfil de prueba.
2. En **Visitas e interacciones**, registrar una actividad vinculada a ese perfil.
3. En **Incidencias**, si se desea probar la ruta opcional, registrar un caso y una nota; la visita previa permanece en el historial.
4. En **Segmentación**, revisar los criterios disponibles y escribir una etiqueta manual, si se quiere demostrarla.
5. En **Promociones y campañas**, registrar primero una campaña (opcional) y luego una promoción, con vínculo opcional.
6. En **Registrar resultado de elegibilidad**, guardar «No aplica» y comprobar que no se crea constancia. Después, en otro registro de prueba con resultado «Aplica», comprobar que se crea una constancia local identificada como tal.
7. En **Reportes**, contrastar los conteos y exportar un CSV.

Las etiquetas y notas ingresadas por quien prueba el prototipo también son datos de demostración. No se deben describir como aprobaciones, decisiones ni comunicaciones reales.

## 4. Los cuatro criterios: significado y límite actual

El proyecto considera estos criterios: **frecuencia de visitas, nivel de gasto, preferencias de juegos e historial de promociones**. El MVP presenta información local asociada al perfil, pero no pretende que esa información sea todavía una segmentación aprobada:

- **Frecuencia de visitas:** por ahora se cuentan únicamente las actividades cuyo tipo es «Visita»; las interacciones no se suman como visitas. No se define un periodo; por tanto, ese conteo **no debe interpretarse como una frecuencia formal**.
- **Nivel de gasto:** es un campo de texto de demostración. No hay moneda, rango, periodo ni cálculo confirmado.
- **Preferencias de juegos:** es un campo de texto editable para representar el dato disponible. No se infiere una preferencia a partir de conducta.
- **Historial de promociones:** el resumen del prototipo cuenta las constancias locales de comunicación registradas para el perfil. No demuestra que la persona recibiera o canjeara una oferta y no sustituye una definición de historial acordada.

El PO debe validar el origen, significado, disponibilidad, autorización y periodo de referencia de cada criterio. Hasta entonces, la clasificación permanece manual.

## 5. Decisiones funcionales importantes

### Visita e incidencia

El orden elegido refleja el proceso: la visita/interacción se registra antes de valorar una promoción y permanece en el historial tanto si se reporta una incidencia como si no. La incidencia es una ruta condicional, no un paso obligatorio de toda atención.

### Campaña y promoción

La campaña recoge la planificación (por ejemplo, objetivo, público y periodo); la promoción es la oferta concreta. El formulario y las tablas del MVP mantienen entidades separadas y permiten una asociación opcional. No se añadió un estado de aprobación porque el mecanismo formal aún debe confirmarse con el PO.

### Resultado de elegibilidad

El formulario registra un resultado manual porque todavía no hay reglas de negocio acordadas para calcularlo. La opción «Aplica» no equivale a autorización comercial automática: representa que quien usa el prototipo ingresó ese resultado tras aplicar una regla que deberá estar aprobada. La constancia local permite visualizar el historial sin simular un canal externo.

### Reportes

Los conteos se calculan sobre las filas presentes en el navegador y se muestran con fines demostrativos. No se presentan como indicadores oficiales. El periodo, los filtros, las definiciones y las métricas del reporte deben ser acordados con el PO antes de interpretar resultados de negocio.

### Automatización

La automatización es opcional y condicionada a la priorización y decisión del PO. **No está implementada en este MVP.** Antes de considerar una automatización, el PO debe definir la tarea, las reglas, las excepciones y el resultado esperado; después corresponderían su configuración, pruebas, presentación de resultados y decisión explícita del PO.

## 6. Límites técnicos y decisiones pendientes

- **Persistencia:** `localStorage` del navegador. Los datos no se comparten entre dispositivos ni se sincronizan con un sistema central; borrar los datos del sitio/navegador puede eliminarlos.
- **Integraciones:** no hay conexión con CRM, bases de datos, SQL Server, sistemas de clientes ni servicios externos. No se envían correos ni mensajes.
- **Datos:** la información precargada es ficticia. Usar solo registros de demostración al probar o presentar el prototipo.
- **Reglas de negocio:** quedan pendientes de PO el identificador definitivo y campos autorizados del perfil; periodo y significado de frecuencia; fuente/unidad/periodo de gasto; reglas y datos de elegibilidad; contenido y vigencia de la oferta; aprobación de campañas; e indicadores y filtros de reportes.
- **Incidencias:** el prototipo conserva descripción y notas libres, pero no implementa un ciclo de estados, asignación, escalamiento o cierre.
- **Automatización:** no hay tarea automática activa, conectores ni monitoreo.
- **Validación:** las comprobaciones de formularios y duplicados son locales a esta interfaz; no reemplazan reglas de servidor, controles de acceso ni validación de una base de datos.

Estos límites evitan presentar como acordados procesos, métricas, políticas o integraciones que el backlog deja a decisión del PO.

## 7. Archivos de entrega

- `Atlantic_City_MVP_Unificado.html`: prototipo con estructura, estilos y lógica en un único HTML.
- `Atlantic_City_MVP_Dividido/index.html`, `styles.css`, `app.js`: la misma aplicación con archivos separados para lectura y modificación.
- `Atlantic_City_MVP_Dividido.zip`: carpeta dividida empaquetada.
- `Atlantic_City_Wireframes/`: las cuatro imágenes, hoja comparativa y README.
- `Atlantic_City_Wireframes/Wireframes_Atlantic_City.zip`: paquete de wireframes.
- `Atlantic_City_MVP_y_Wireframes.zip`: paquete conjunto con MVP, wireframes y esta guía.

Para recorrer el prototipo dividido, sirve la carpeta con un servidor estático local; por ejemplo, desde `Atlantic_City_MVP_Dividido`, ejecuta `python -m http.server 4173` y abre `http://localhost:4173`. En el entorno de vista previa ya abierto, se puede continuar probando la versión servida. Mantén el mismo origen del navegador para conservar su almacenamiento local.
