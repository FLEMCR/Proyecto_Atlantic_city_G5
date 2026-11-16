# Guía principal — Atlantic City: el avance del proyecto en orden

Cómo se lee esta guía: las secciones 1 a 3 cuentan qué es el proyecto y todo lo que se hizo, en el orden en que se hizo; las secciones 4 a 6 responden las tres dudas que más se repiten en el equipo (cuál debió ser el orden de elaboración y por qué, cuántos procesos hay en el Bizagi y de dónde salen, y si el MVP y el prototipo hacen lo que se pide); las secciones 7 a 9 son referencia rápida (códigos del proyecto, mapa de carpetas y reglas que no se rompen).

## 1. Qué es el proyecto

Modernización del Sistema de Gestión de Clientes de Atlantic City: un sistema de información que centraliza el perfil y el historial del cliente, registra visitas e incidencias, permite consultar los criterios de segmentación y evaluar promociones, y genera reportes verificables. El problema que atiende, descrito en el sílabo: información de clientes repartida entre áreas, perfiles duplicados, falta de historial unificado y decisiones sin indicadores verificables.

El alcance de esta entrega es la capa de vista: HTML, CSS y JavaScript en el navegador, con los datos guardados en el registro local y datos de ejemplo marcados como demostración. No hay backend ni conexión con sistemas reales de Atlantic City; la base central y la automatización quedan pendientes de acuerdo con el Product Owner.

**Equipo:** el profesor como Product Owner (Víctor Andrade) y cuatro Developers: Luis Coloma (Scrum Master + Developer), Christian Huapaya, Salomón Fernández y Daniel Asmat.

**Orden para resolver discrepancias:** primero la indicación directa del profesor/PO y la rúbrica vigente; después el sílabo; después el backlog que mantiene el equipo, sujeto a priorización del PO; y al final el modelo BPMN, las guías y los prototipos, que se actualizan cuando hay acuerdos nuevos. Lo que no está confirmado se registra como pendiente: no se convierte en regla por suposición.

## 2. El avance completo, paso a paso

| # | Paso | Qué se hizo | Dónde vive | Qué alimenta |
|---|---|---|---|---|
| 1 | Marco y roles | Scrum con el profesor como PO: cuatro Developers, ceremonias, Definition of Done | `Scrum_Guia_Atlantic_City.md` | La forma de trabajar del equipo |
| 2 | Proceso AS IS | Actividades reconocidas con el PO y modeladas en Bizagi: un pool, seis carriles, cuatro recorridos y un subproceso | `../modelado/Atlantic_city_grupo_cinco.png`, `../modelado/SUBPROCESO.png`, `Guia_Modelado_Bizagi_Atlantic_City.md` | El backlog y los casos de uso |
| 3 | Product Backlog | Trece historias de usuario (HU-01 a HU-13) con prioridad y cuatro Sprint de una semana | `../backlog/Product_Backlog_Atlantic_City.md` y su .docx | Los casos de uso y las pantallas |
| 4 | Casos de uso y especificación | Doce casos consolidados en CU01 a CU04 con la plantilla del profesor, matriz HU↔CU y catálogos RN01–RN08, EXC01–EXC07 y MSJ01–MSJ32 | `../modelado/casos_de_uso/Especificacion_Casos_de_Uso_Atlantic_City.md` | Las secuencias y el código |
| 5 | Diagramas UML en StarUML | Casos de uso sin include, tres diagramas de secuencia con fragmentos alt y diagrama de clases con atributos en español | `../modelado/diagramas/`, `../modelado/Atlantic_City_UML.mdj`, `Guia_Modelado_UML_Atlantic_City.md` | El informe y el PPT |
| 6 | Wireframes | Boceto manual y versión digital, ambos en blanco y negro: estructura y jerarquía antes que color | `../prototipado/wireframe_manual.png`, `../prototipado/wireframe_digital.png` | El MVP y el prototipo |
| 7 | MVP | Una sola pantalla con el recorrido mínimo: perfil, atención con incidencia opcional y revisión promocional manual, con validaciones y mensajes reales | `../prototipado/MVP/`, `Guia_Codigo_MVP.md` | La demostración en vivo |
| 8 | Prototipo navegable | Siete vistas conectadas sin recargar la página, estado compartido, búsqueda global y exportación CSV idéntica a la pantalla | `../prototipado/prototipo_navegable/`, `Guia_Codigo_Prototipo_Navegable.md` | La demostración en vivo |
| 9 | Entregables | Informe de avance, documento de casos de uso del equipo, PPT de 17 diapositivas y guion de exposición de 12 minutos para cuatro expositores | `../informe/`, `../modelado/`, `../presentacion/` | La sustentación |

## 3. Cada paso en corto

**3.1 El proceso en Bizagi.** Un pool de gestión de clientes con seis carriles: Cliente; Servicio al Cliente / Operaciones; Sistema CRM / datos; Marketing; Gerencia General / PO; y Gerencia de TI. Los carriles son responsabilidades del proceso dibujado, no seis programas ni seis bases de datos. Dentro del pool hay un único evento de inicio y una compuerta exclusiva que dirige a los cuatro recorridos (sección 5); cada recorrido conserva su disparador de negocio y la segmentación como subproceso colapsado, cuyo detalle está en `../modelado/SUBPROCESO.png`: cuatro consultas de criterios (frecuencia de visitas, nivel de gasto, preferencias de juegos, historial de promociones) y una clasificación final que es manual.

**3.2 El backlog.** Perfiles: HU-01 buscar e identificar, HU-02 registrar, HU-03 actualizar, HU-04 consultar perfil e historial. Atención: HU-05 registrar visita o interacción, HU-06 registrar y consultar incidencia. Segmentación y promociones: HU-07 consultar los cuatro criterios, HU-08 consultar el segmento, HU-09 evaluar elegibilidad, HU-10 definir y gestionar campaña, HU-11 registrar y comunicar oferta. Reportes: HU-12 consultar un reporte verificable. Automatización candidata: HU-13, prioridad baja y condicionada a que el PO la priorice. Prioridad no equivale a implementado: el orden definitivo lo mantiene el PO.

**3.3 Los casos de uso.** CU01 agrupa buscar, registrar, actualizar y consultar; CU02 es la atención con incidencia opcional; CU03 es la evaluación con criterios, campaña y constancia; CU04 es el reporte. La matriz HU↔CU conecta cada historia con su recorrido. Las reglas acordadas con el PO se catalogaron RN01 a RN08; los caminos de error, EXC01 a EXC07; y los mensajes literales que muestra el sistema, MSJ01 a MSJ32, idénticos a los del código: por eso la especificación funciona como prueba ejecutable.

**3.4 El UML.** Diagrama de casos de uso: tres actores ejecutores a la izquierda, el PO a la derecha (no ejecuta casos: confirma reglas y prioriza), doce casos nombrados por la tarea y sin numeración de historias, sin include entre óvalos y con la automatización candidata fuera del límite. Secuencias de CU01, CU02 y CU03 con cuatro líneas de vida (empleado autorizado, interfaz, sistema, datos) y fragmentos alt solo donde hay ramas reales: identificador duplicado en CU01 y Aplica/No aplica en CU03; CU02 no tiene alt porque la atención siempre se conserva. Clases: seis clases con atributos en español, iguales a los del código, y asociaciones simples cuyas multiplicidades se leen como reglas.

**3.5 Los wireframes.** En blanco y negro los dos (manual y digital) porque un wireframe revisa estructura y jerarquía, no estética; el color aparece recién en el prototipo.

**3.6 El MVP y el prototipo.** El MVP es el recorrido mínimo demostrable en una pantalla: formulario en tres pasos (perfil y datos disponibles, atención, opcionales con incidencia y revisión promocional), resumen tipo comprobante con los cuatro criterios, conteos e historial reciente. El prototipo navegable son siete vistas —inicio, clientes, visitas, incidencias, segmentos, promociones y reportes— que comparten un mismo estado en el registro local, con navegación sin recarga, búsqueda global, migración de datos de versiones anteriores y exportación CSV con exactamente las filas mostradas en pantalla.

**3.7 Los entregables.** Informe de avance siguiendo la estructura propuesta (wireframes, después MVP, después prototipo), documento de casos de uso del equipo, PPT de 17 diapositivas con los diagramas vigentes y guion de exposición en `../presentacion/`.

## 4. En qué orden debió hacerse esto (y por qué)

La cadena de dependencias del proyecto es:

**Proceso (Bizagi) → Backlog (HU) → Casos de uso (CU + reglas RN) → Secuencias → Clases → Wireframes → MVP y prototipo → Informe y PPT.**

Por qué en ese orden: cada paso es la materia prima del siguiente.

- El proceso dice qué actividades existen y quién las hace; de ahí salen las historias, que son esas actividades convertidas en capacidades con valor de negocio.
- Los casos de uso necesitan las historias: agrupan las HU en recorridos observables actor–sistema y fijan las reglas con el PO.
- Las secuencias necesitan los casos cerrados: son el caso de uso vuelto mensajes entre las cuatro líneas de vida. Dibujadas antes, se inventan pasos.
- Las clases salen de las secuencias: lo que el sistema consulta y guarda en ellas se vuelve atributos, y las multiplicidades escriben las reglas. Dibujadas antes, se inventan datos.
- Los wireframes dibujan lo que las HU y los CU piden ver; hechos antes, se redibujan.
- El código implementa los wireframes con las reglas y los mensajes literales (MSJ) de la especificación.

**La duda del equipo, respondida:** sí, los casos de uso se podían empezar apenas terminado —o incluso durante— el modelado en Bizagi, porque el proceso ya entrega los actores y las actividades. El orden fino que se usó fue cerrar primero el backlog para que los casos respondieran a historias priorizadas, pero ambas cosas son compatibles en paralelo: lo que se iteró fue hacia atrás, cada ajuste de una regla volvió al diagrama y al código en el mismo cambio. Lo que no se puede saltear en ningún orden: secuencias sin casos, clases sin secuencias, ni código sin reglas y mensajes acordados.

## 5. Los procesos del Bizagi: cuántos son y de dónde salen

No hay «tres procesos» en archivos separados: hay **un solo pool con seis carriles que contiene cuatro recorridos, cada uno con su propio evento de inicio, más un subproceso**.

| Recorrido | Disparador | De dónde sale | Por qué está separado |
|---|---|---|---|
| A. Perfil y atención (ruta principal) | El cliente solicita atención o registro | Es lo que ocurre en cada atención: identificar, resolver perfil, registrar visita con incidencia opcional, dejar historial, segmentar y decidir promoción | Es el corazón del proceso |
| B. Campaña | Marketing recibe una necesidad de campaña | De las actividades de Marketing reconocidas en la entrevista | No ocurre en cada atención; además campaña ≠ promoción (RN05) |
| C. Reporte | Gerencia solicita un reporte | De la necesidad de indicadores verificables del sílabo | Es una consulta bajo demanda, no parte de la atención |
| D. Automatización candidata | El PO prioriza la tarea (HU-13) | De una tarea que TI podría automatizar a futuro | Es condicional: prueba técnica no es aprobación |
| Subproceso: segmentación de clientes | Se llama dentro de la ruta principal | De los cuatro criterios acordados con el PO | Colapsado para mantener legible la vista principal; su detalle está en `../modelado/SUBPROCESO.png` |

Si alguien cuenta «tres», son los tres recorridos con inicio independiente (campaña, reporte y automatización): salen de las actividades reconocidas con el PO que no ocurren en cada atención. Se dibujaron dentro del mismo pool porque comparten responsables (los carriles), pero con inicio propio para que nadie lea que cada atención genera una campaña, un reporte o una automatización. La segmentación no es un quinto recorrido: es un detalle interno de la ruta principal. Los cuatro recorridos, paso a paso, están explicados en `Guia_Modelado_Bizagi_Atlantic_City.md`.

## 6. ¿El MVP y el prototipo pueden hacer lo que se pide?

Cobertura del backlog priorizado:

| Historia | Qué pide | MVP (una pantalla) | Prototipo navegable (siete vistas) |
|---|---|---|---|
| HU-01 buscar e identificar | Encontrar al cliente | Identificador en el formulario del recorrido | Sí: búsqueda por cliente, filtro por segmento y búsqueda global |
| HU-02 registrar cliente | Alta con datos válidos | Sí: validaciones y mensajes reales | Sí: alta con identificador único (RN07, EXC02, MSJ07) |
| HU-03 actualizar | Corregir el perfil | No entra en el recorrido mínimo | Sí: edición que distingue alta de edición |
| HU-04 consultar perfil e historial | Ver todo del cliente | Historial reciente y resumen | Sí: ficha e historial completo |
| HU-05 registrar visita o interacción | Atención con tipo y fecha | Sí | Sí: vista de visitas con formulario y tabla |
| HU-06 registrar incidencia | Incidencia opcional con descripción | Sí: checkbox que revela descripción obligatoria | Sí: vista de incidencias con seguimiento |
| HU-07 consultar los cuatro criterios | Ver frecuencia, gasto, juegos, historial | Tarjeta de criterios en el resumen | Sí: panel de criterios en la vista de segmentos |
| HU-08 consultar segmento | Ver la clasificación | Etiqueta manual del segmento | Sí: clasificación por etiqueta manual (RN04) |
| HU-09 evaluar elegibilidad | Aplica / No aplica manual | Sí: select habilitado al elegir promoción | Sí: formulario de elegibilidad |
| HU-10 definir y gestionar campaña | Campaña distinta de promoción | Selector de campaña | Sí: formularios de campaña y promoción vinculada (RN05) |
| HU-11 registrar y comunicar oferta | Constancia del resultado | Sí: constancia local con «Aplica» | Sí: constancia local; ningún envío externo (RN02 y RN03) |
| HU-12 reporte verificable | Reporte contrastable | Conteos en pantalla | Sí: vista de reportes y CSV idéntico a la pantalla |
| HU-13 automatización candidata | Probar una automatización | No implementada | No implementada: condicionada al PO |

**Respuesta corta: sí.** Todo lo priorizado en el alcance de la capa de vista (HU-01 a HU-12) se puede demostrar hoy: el MVP prueba el recorrido mínimo con reglas y mensajes reales, y el prototipo la navegación completa con reporte CSV. Lo que no hacen no es un hueco, es alcance acordado: HU-13 está condicionada al PO, el backend y la base central quedan pendientes de acuerdo, la segmentación no se calcula sola (RN04), no hay envíos externos (RN02 y RN03) y todos los datos son de demostración (RN08).

## 7. Los códigos del proyecto

Todo el proyecto se cita con cinco catálogos, nombrados con las iniciales de cada cosa y un número correlativo (el número es orden de catálogo, no prioridad). Existen para que el informe, los diagramas, el PPT y el código hablen de exactamente lo mismo:

| Código | Qué es | Catálogo |
|---|---|---|
| HU | Historia de usuario: necesidad con valor de negocio, priorizada en el backlog | HU-01 a HU-13 |
| CU | Caso de uso: recorrido observable actor–sistema | CU01 a CU04, que consolidan los doce casos del diagrama |
| RN | Regla de negocio: política acordada con el PO que existe fuera del software y el sistema respeta | RN01 a RN08 |
| EXC | Excepción: camino de error de un caso, con la resolución que da el sistema | EXC01 a EXC07 |
| MSJ | Mensaje: cadena literal que muestra el sistema, idéntica a la del código | MSJ01 a MSJ32 |

## 8. Dónde vive cada cosa

```
proyecto_final/
├── backlog/       Las trece historias (md y docx)
├── curso/         Materiales del curso y complementarios del profesor
├── docs/          Todas las guías del proyecto y el registro de verificación
├── informe/       Informe de avance (docx) con las figuras del modelado
├── modelado/      Bizagi (PNG), UML (.mdj y diagramas/) y casos de uso (docx y especificación)
├── presentacion/  Guion de exposición y PPT alternativo; el PPT del equipo es el de la sustentación
└── prototipado/   Wireframes en blanco y negro, MVP/ y prototipo_navegable/
```

El orden de lectura de las quince guías está en `README.md` de esta carpeta. Para entender el proyecto completo alcanza con esta guía; para ejecutar una parte concreta (abrir Bizagi, levantar el prototipo, rehacer un diagrama en StarUML) se usa la guía específica de la tabla del paso 2.

## 9. Reglas que no se rompen

Las ocho reglas de negocio acordadas con el Product Owner:

- **RN01:** la visita o interacción se conserva en el historial aunque no exista incidencia ni promoción asociada.
- **RN02:** un resultado «No aplica» no crea comunicación de ningún tipo.
- **RN03:** un resultado «Aplica» crea únicamente una constancia local; no se envía ningún mensaje externo.
- **RN04:** la clasificación del cliente y la elegibilidad de la promoción se ingresan de forma manual; el sistema no las calcula.
- **RN05:** campaña y promoción son entidades distintas; una promoción puede existir sin campaña o vincularse a una.
- **RN06:** la frecuencia de visitas suma únicamente atenciones de tipo «Visita».
- **RN07:** el identificador de cliente es único; un alta con identificador existente se bloquea.
- **RN08:** todos los registros de ejemplo están identificados como datos de demostración; no existe conexión con sistemas reales de Atlantic City.

Y las de forma de trabajo: no inventar umbrales, pesos, fórmulas, segmentos, aprobaciones ni integraciones que el PO no haya confirmado; lo pendiente se registra como pendiente del PO; campaña no es promoción; y ningún acuerdo queda solo en una conversación: se actualiza la guía afectada y, si corresponde, el informe, el backlog y la especificación.
