# Guion de exposición — Atlantic City (12 minutos, 4 expositores)

Guion literal por diapositiva para la presentación `Presentacion_Atlantic_City_UML.pptx`. Cada bloque dura menos de 3 minutos por integrante; los tiempos entre paréntesis son la meta por diapositiva y dejan unos 30 segundos de colchón por bloque para transiciones. El mismo texto vive en las notas de orador del PPT, así quien expone puede verlo en modo presentador.

Reglas de la exposición: el PPT muestra ideas clave e imágenes; **el detalle lo dice la persona**, nunca se lee la diapositiva. Cada [CLIC] avanza una diapositiva o revela la siguiente idea. Si una pregunta sale del alcance, la respuesta honesta es «está pendiente de priorización del Product Owner».

## Bloque 1 — Luis (Scrum Master + Developer) · 2:45

**D1 Portada (0:15).** «Buenas tardes. Somos el equipo del caso Atlantic City: Daniel, Salomón, Christian y yo. El profesor cumple el rol de Product Owner del proyecto. Presentamos el avance hasta lo visto en clase: el proceso modelado, los requerimientos y los modelos UML de casos de uso, secuencia y clases.» [CLIC]

**D2 Agenda (0:25).** «Cuatro bloques en doce minutos: proceso y método, requerimientos, comportamiento y estructura con estado. En cada uno vamos a responder tres preguntas: qué se hizo, por qué se hizo así y con qué herramienta. No vamos a leer diagramas: vamos a explicar las decisiones que hay detrás.» [CLIC]

**D3 Problema (0:40).** «El problema no es que falte software: es que cada área tiene el suyo y ninguno conversa. Inscripción, promociones y membresías viven separadas, y eso produce duplicidad y retrabajo, un historial que no existe y decisiones de marketing sin indicadores verificables. El objetivo es una fuente central del perfil, el historial y las interacciones. Y una aclaración de alcance que sostendremos toda la exposición: hoy demostramos con datos locales en el navegador; no afirmamos conexión con sistemas reales de Atlantic City porque no existe.» [CLIC]

**D4 BPMN principal (0:50).** «Este es el proceso actual, por eso es AS IS y no ideal. Tres lecturas rápidas: los carriles dicen quién interviene, seis participantes reales; el recorrido dice en qué orden: registrar, atender, segmentar, promocionar y reportar; y las compuertas dicen dónde hoy una persona decide a mano. Ese tercer punto es oro: cada decisión manual del diagrama se volvió después una historia de usuario y un caso de uso. Tener el Bizagi terminado implica que los cuatro conocemos el proceso de memoria.» [CLIC]

**D5 Subproceso (0:35).** «El subproceso de segmentación es el corazón del caso: cuatro criterios, frecuencia de visitas, nivel de gasto, preferencias de juegos e historial de promociones, y una clasificación que hoy es manual. Que sea manual no es un defecto del modelo: es la regla acordada con el Product Owner mientras no se priorice automatizarla. Este subproceso alimenta las historias HU-07 a HU-09 y el caso de uso CU03 que verán más adelante.» [CLIC]

## Bloque 2 — Christian (Developer, modelado y backlog) · 3:00

**D6 Scrum y backlog (0:45).** «El equipo: el docente como Product Owner y cuatro Developers, uno de ellos Scrum Master. El backlog son trece historias con criterio de aceptación comprobable, no deseos sueltos. Los cuatro Sprints de una semana agrupan valor cerrado: primero saber quién es el cliente, después atenderlo, después evaluar ofertas y al final los complementos. La HU-13, la automatización candidata, lleva asterisco porque solo existe si el Product Owner la prioriza.» [CLIC]

**D7 De HU a caso de uso (0:45).** «Aquí la duda típica del curso: qué relación hay entre historia y caso de uso. La historia dice por qué existe la función, en formato Como, Quiero, Para; el caso de uso dice cómo se usa observándolo desde fuera, con secuencia y excepciones. Por eso un caso puede agrupar varias historias: CU01 agrupa buscar, registrar, actualizar y consultar porque en la pantalla real ocurren en un mismo recorrido. La matriz de trazabilidad garantiza algo que el profesor revisa: que no haya historia huérfana ni caso inventado.» [CLIC]

**D8 Diagrama de casos de uso (0:50).** «El diagrama general se lee en tres capas: quiénes actúan, los roles ejecutores a la izquierda y el Product Owner a la derecha; qué metas observables tienen, doce casos dentro del límite del sistema; y qué relaciones obligatorias existen, como el include entre evaluar promoción y consultar criterios. Dos detalles de notación que salen del material del curso: nombres iniciados en verbo y la automatización candidata fuera del rectángulo, porque dibujarla dentro sería prometer lo que el PO no ha priorizado.» [CLIC]

**D9 Plantilla de documentación (0:40).** «Cada caso se documenta con la plantilla del curso: descripción y actores, pre y postcondiciones, secuencia normal en tabla de acción y reacción con alternativas ancladas al paso que las origina, excepciones y los compromisos de rendimiento, frecuencia, importancia y urgencia. Y el detalle que más nos gusta defender: los mensajes del sistema, los MSJ, son las cadenas literales del código, así que la especificación se puede probar provocando la situación en el navegador.» [CLIC]

## Bloque 3 — Salomón (Developer, formularios y estado) · 2:50

**D10 CU02 en tablas (0:50).** «Mostramos un caso completo en el formato del profesor. Precondición: el perfil existe. Paso uno, se selecciona el cliente y el sistema muestra perfil, criterios e historial. Paso dos, tipo de actividad, fecha y nota, con validación de obligatorios. Paso tres, la decisión condicional: si reporta incidencia el sistema habilita y exige la descripción; si no, continúa sin ella. Paso cuatro, se confirma y la atención se conserva con o sin incidencia y con o sin promoción. Esa postcondición es la regla RN01, la que más nos costó acordar y la que mejor demuestra que entendimos el negocio.» [CLIC]

**D11 Secuencia CU02 (0:40).** «El diagrama de secuencia es esa tabla vista en el tiempo. Cuatro líneas de vida: el empleado autorizado, la interfaz, el sistema y los datos, que se llaman registro local y no base de datos porque todavía no hay motor definido: nombramos lo que existe, no lo que suponemos. El fragmento alt es exactamente el paso tres de la tabla. Texto y diagrama dicen lo mismo, siempre.» [CLIC]

**D12 Secuencia CU03 (0:45).** «Este alt concentra las dos reglas más sensibles del proyecto. Rama Aplica: se crea una constancia local y no se envía ningún mensaje, porque ninguna integración está aprobada. Rama No aplica: no se crea comunicación de ningún tipo. Y la elegibilidad la decide una persona, no el sistema: si el profesor pregunta por qué no hay cálculo automático de segmentos, la respuesta es la regla RN04 acordada con el Product Owner.» [CLIC]

**D13 Secuencia CU01 y patrón (0:35).** «Cerramos comportamiento con el patrón que se repite en los tres casos: identificar, validar, guardar, confirmar. En CU01 el alt distingue perfil existente, que se carga, de identificador nuevo, que se da de alta. Y una decisión de diseño: un diagrama por caso, nunca los tres mezclados, porque cada caso merece su alt y sus excepciones propias; mezclarlos haría ilegible el comportamiento.» [CLIC]

## Bloque 4 — Daniel (Developer, pruebas y evidencias) · 2:25 + cierre

**D14 Diagrama de clases (0:50).** «Las clases no se inventaron: son las colecciones que ya guarda el prototipo. Cliente, Visita, Incidencia, Constancia, Promocion y Campana, con sus atributos y multiplicidades: un cliente registra cero o más visitas; una promoción se evalúa cero o más veces. La asociación opcional entre Promocion y Campana es la regla RN05 vista como estructura: una promoción puede existir sin campaña. Al pasarlo a StarUML añadiremos visibilidad y operaciones que el código ejecuta realmente, sin dibujar métodos imaginarios.» [CLIC]

**D15 Coherencia modelo–código (0:40).** «Nuestra prueba de coherencia es simple: provocamos cada excepción en el navegador y buscamos su mensaje en el documento. Los veinticinco mensajes MSJ coinciden con las cadenas del MVP y del prototipo. Los datos son de demostración y viven en el navegador; no hay integración real ni envío externo. Y lo que el Product Owner no ha confirmado no está dibujado ni programado: está listado como pendiente.» [CLIC]

**D16 Estado y siguientes pasos (0:35).** «Estado honesto: el informe con los quince puntos de la estructura está completo, con los casos de uso en la plantilla del curso; el BPMN, los UML y la especificación están verificados contra el código; el MVP y el prototipo son ejecutables y probados. En curso esta semana: el modelo StarUML y la exportación del Bizagi a BPMN. Y dos pendientes que solo el Product Owner puede cerrar: los periodos e indicadores del reporte y la priorización de la HU-13.» [CLIC]

**D17 Cierre (0:20).** «Resumimos en una línea: el proyecto convierte información dispersa en un historial unificado con reglas verificables. Cada diagrama tiene un documento detrás y cada documento un código que lo respalda. Gracias, quedamos por las preguntas.» [FIN]

## Mapa de imágenes: qué va en cada diapositiva

| Diapositiva | Imagen que lleva | Archivo por si hay que reemplazarla |
|---|---|---|
| 1 | Logotipo del caso | `../curso/Atlantic_City_logo.webp` |
| 4 | Diagrama BPMN principal | `../modelado/Atlantic_city_grupo_cinco.png` |
| 5 | Subproceso de segmentación | `../modelado/SUBPROCESO.png` |
| 8 | Diagrama de casos de uso | `../modelado/diagramas/Casos_de_uso.png` |
| 11 | Secuencia registrar visita | `../modelado/diagramas/Secuencia_registrar_visita.png` |
| 12 | Secuencia evaluar promoción | `../modelado/diagramas/Secuencia_evaluar_promocion.png` |
| 13 | Secuencia registrar cliente | `../modelado/diagramas/Secuencia_registrar_cliente.png` |
| 14 | Diagrama de clases | `../modelado/diagramas/Clases.png` |

Si el equipo rehace un diagrama en StarUML antes de la exposición, se reemplaza la imagen de su diapositiva y la copia de `modelado/diagramas/` en el mismo cambio, para que PPT, informe y carpeta coincidan.

## Preguntas probables del profesor y respuestas cortas

1. **¿Por qué CU01 agrupa cuatro historias?** Porque en el recorrido real identificar, registrar, actualizar y consultar ocurren en una misma pantalla; la matriz de trazabilidad deja la relación explícita.
2. **¿Por qué la cuarta línea de vida no es una base de datos?** Porque el curso no ha definido motor; se nombra registro local y se declara como dato de demostración.
3. **¿Por qué «Aplica» no envía un mensaje?** Ninguna integración está aprobada por el PO; la constancia es local y el mensaje MSJ10 lo dice explícitamente.
4. **¿Los segmentos los calcula el sistema?** No: regla RN04, clasificación y elegibilidad manuales hasta que el PO priorice lo contrario.
5. **¿Qué falta para cerrar?** El archivo StarUML, la exportación BPMN y las decisiones de periodo, indicadores y HU-13 que son del PO.
6. **¿Dónde está el detalle completo de cada caso?** En el punto 13 del informe y en la especificación de `modelado/casos_de_uso/`; el PPT lleva solo las ideas clave a propósito.
7. **¿Por qué tres diagramas de secuencia y no uno?** Un diagrama por caso principal; mezclarlos rompería la legibilidad y ocultaría las alternativas de cada uno.
8. **¿Esto está conectado a Atlantic City?** No: datos de demostración locales, declarado en portada, en el informe y en cada evidencia ejecutable.

## Ensayo recomendado

- Un ensayo cronometrado completo con transiciones: debe caer entre 11:30 y 12:00.
- Un ensayo por bloque donde los otros tres interrumpen con las preguntas de la tabla anterior.
- Regla de oro del ensayo: si una frase de la diapositiva se lee tal cual, se reescribe más corta; lo que se lee es lo que no se explica.
