# Guía de correcciones UML y lectura de los diagramas — Atlantic City

Documento que explica, corrección por corrección, por qué la versión del equipo difiere del documento original de casos de uso y de los diagramas de StarUML recibidos de otros integrantes, y cómo se entienden los tres tipos de diagrama (casos de uso, secuencia y clases) como un solo proceso. Acompaña al Word del equipo `../modelado/Casos_de_Uso_Atlantic_City_version_del_equipo.docx`, a las imágenes de `../modelado/diagramas/` y al modelo editable `../modelado/Atlantic_City_UML.mdj`.

## 1. Qué archivo es cada uno

| Archivo | Para qué sirve |
|---|---|
| `../modelado/Casos_de_Uso_Atlantic_City_version_del_equipo.docx` | El mismo documento original de casos de uso, sección por sección, con el alcance y la notación corregidos y las figuras del equipo incrustadas. Es el que se entrega. |
| `../modelado/diagramas/Casos_de_uso.png` y `../modelado/diagramas/Clases.png` | Versiones corregidas de los dos diagramas recibidos, para rehacer en StarUML o comparar. |
| `../modelado/diagramas/Secuencia_*.png` | Las tres secuencias vigentes, mensaje por mensaje iguales a la especificación. |
| `../modelado/Atlantic_City_UML.mdj` | Modelo de StarUML con los cinco diagramas; es el archivo que el equipo abre para mantener todo junto. |
| `../modelado/casos_de_uso/Especificacion_Casos_de_Uso_Atlantic_City.md` | Fuente de verdad de flujos, reglas, excepciones y mensajes. |
| `Guia_Diagramas_de_Secuencia_Atlantic_City.md` | Lectura mensaje por mensaje de las secuencias y clics de StarUML. |

## 2. Criterio de corrección: de dónde sale cada decisión

Toda corrección de esta guía se apoya en una de cuatro fuentes del equipo:

1. El backlog del producto: trece historias con su prioridad. Si una función no está en ninguna historia, no se dibuja.
2. La especificación de casos de uso: flujos CU01 a CU04, reglas RN01 a RN08, excepciones EXC01 a EXC07 y mensajes MSJ01 a MSJ25, ya verificados contra el código.
3. Los acuerdos con el Product Owner: qué se calcula y qué se ingresa a mano, qué queda fuera hasta su priorización, y que no existe conexión con sistemas reales de Atlantic City.
4. El código del MVP y del prototipo: las operaciones y mensajes que realmente se ejecutan.

De ese criterio salen tres reglas de trabajo: cada óvalo, clase o mensaje debe poder señalarse con el dedo en una de las cuatro fuentes; los nombres de los casos dicen la tarea y no llevan numeración de historias, porque la trazabilidad vive en la matriz de la especificación; y la notación UML se completa siempre (estereotipos, flechas discontinuas, multiplicidades), porque una línea suelta no comunica nada.

## 3. El diagrama de casos de uso: qué traía el original y por qué cambió

| Elemento del documento o diagrama original | Qué se hizo | Razón |
|---|---|---|
| Actor «Administrador TI» con «Mantener parámetros del sistema», «Administrar usuarios» y «Gestionar roles y permisos» | Se eliminó el actor y sus tres casos | Ninguna historia del backlog los respalda, no hay código que los ejecute y no hay acuerdo con el Product Owner. Dibujarlos es prometer un alcance de cuentas, roles y contraseñas que el sistema no tiene. |
| «Gestionar perfil de clientes» | Se eliminó | Caso paraguas: repite lo que ya hacen Buscar e identificar cliente, Registrar perfil y Actualizar datos. Un óvalo que contiene a otros tres no añade función y rompe la trazabilidad con las historias. |
| «Actualizar historial del cliente» | Se eliminó | El historial se actualiza como consecuencia de Registrar visita o interacción; no es una función independiente que alguien ejecute por separado. |
| «Gestionar incidencias» y «Consultar estado de incidencias» | Se unificaron en «Registrar y consultar incidencia» | Una sola historia cubre el registro con descripción y la consulta con seguimiento; dos óvalos para una historia duplican el alcance. |
| «Gestionar campañas y promobiones» | Se separó en «Definir y gestionar campaña» dentro del recorrido de «Evaluar si una promoción aplica» | Campaña y promoción son entidades distintas y una promoción puede existir sin campaña (RN05); además el nombre original traía un error de escritura. |
| «Asignar oferta a clientes» | Se renombró a «Registrar y comunicar oferta» | Lo que el sistema hace es dejar una constancia local cuando el resultado es «Aplica»; «asignar» sugiere envíos externos que no existen (RN02 y RN03). |
| «Exportar reporte» como caso o extensión aparte | Se integró dentro de «Consultar reporte verificable» | El archivo CSV contiene exactamente los datos presentados en pantalla: es la salida del mismo caso, no un comportamiento adicional. |
| «Definior criterios» como función del sistema | Se sacó del sistema | Los criterios son reglas confirmadas por el Product Owner, no una pantalla que los modifique; el nombre original traía además un error de escritura. |
| «Consultar reportes» también para Marketing | El reporte quedó solo con Gerencia o usuario autorizado | El reporte verificable es la historia de Gerencia; Marketing no la tiene en el backlog. |
| Relaciones entre casos dibujadas como líneas simples y con dirección invertida («Registrar oferta include Evaluar elegibilidad») | Se eliminaron todas las flechas entre óvalos: la dependencia de la evaluación sobre los criterios se documenta como paso incluido del flujo de CU03 y como mensajes 3 a 5 de su secuencia | Decisión del equipo para la sustentación: cada caso se lee por sí mismo en el diagrama, y la obligación de consultar criterios se revisa paso a paso en la especificación y en la secuencia, no en una flecha entre óvalos. |
| «Registrar incidencia extend Registrar visita» | Se quitó como extend | La incidencia es un paso opcional dentro del recorrido de la atención: en el diagrama es un caso asociado al actor y en la especificación es un paso incluido de CU02; la atención se conserva igual sin incidencia (RN01). |
| Product Owner ausente y automatización sin lugar | Product Owner fuera de los casos ejecutables y «Probar automatización candidata» fuera del límite, unida a él con línea discontinua | El Product Owner no ejecuta casos: confirma reglas y prioriza. La automatización es una historia sin priorizar y por eso no entra al límite del sistema. |
| Errores de escritura en nombres de casos | Se corrigieron | Un entregable con errores de escritura pierde credibilidad en la revisión, aunque el modelo sea correcto. |
| Nombres con código de historia en los óvalos | Los óvalos nombran solo la tarea | Decisión del equipo: el diagrama se lee como funcionalidad; la correspondencia con historias vive en la matriz de trazabilidad de la especificación. |

## 4. La secuencia de eventos del Word: el CU-02 original contra el CU01 del equipo

- El código del caso no coincidía: el documento original titulaba «CU-02 Registrar perfil de cliente», mientras que en la numeración del equipo ese recorrido es CU01 Registrar cliente, que cubre buscar, registrar, actualizar y consultar en un solo flujo. Mantener códigos distintos por documento rompe todas las referencias cruzadas con la especificación, el informe y el PPT.
- Los pasos originales mezclaban pantallas con acciones («abre la sección de clientes», «selecciona la opción para registrar»): la plantilla del profesor pide acciones del actor y reacciones del sistema, y así está en la versión del equipo, con cuatro pasos que coinciden uno a uno con la especificación verificada.
- Las excepciones originales eran genéricas (E1, E2, E3 sin catálogo): la versión del equipo usa EXC01 y EXC02, que existen en el catálogo único y se conectan con los mensajes reales del código (MSJ01 en el MVP, MSJ07, MSJ17 y MSJ18 en el prototipo).
- «Sistema CRM» aparecía como actor: el sistema nunca es actor de su propio caso; los actores son las personas que lo operan y el Product Owner como confirmador de reglas.

## 5. Cómo se entiende el proceso: casos de uso, secuencia y clases

Los tres diagramas cuentan la misma historia desde tres ángulos, y entender eso es lo que permite defender cualquiera de ellos en la revisión:

- El diagrama de casos de uso es la fotografía de las capacidades: qué se puede hacer y quién lo hace. No dice en qué orden ni qué se guarda.
- El diagrama de secuencia es la película de una ejecución: toma un caso y lo muestra ocurriendo en el tiempo, entre las cuatro líneas de vida (el empleado que opera, la interfaz que captura y muestra, el sistema que valida y decide, y los datos del registro local donde todo queda guardado).
- El diagrama de clases es el almacén y las herramientas: qué queda guardado después de la ejecución y qué operaciones ejecuta el código sobre esos registros.

Ejemplo con CU01, siguiendo los tres a la vez: el paso 1 de la secuencia de eventos («escribe el identificador») es el mensaje 1 del diagrama de secuencia; los mensajes 3 y 4 consultan la línea de vida de datos, que es la clase Cliente con su identificador único (RN07); la rama «identificador ya registrado» del fragmento alt es la excepción EXC02 con su mensaje MSJ07 en el prototipo; y los mensajes 8 y 9 escriben el perfil, que en el diagrama de clases son las operaciones registrar y actualizarDatos de la clase Cliente.

Ejemplo con CU03: el paso incluido de CU03 (consultar los criterios antes de evaluar) son los mensajes 3 a 5 de su secuencia; la decisión «Aplica» o «No aplica» es el fragmento alt con sus dos ramas, que son las reglas RN03 y RN02; y la clase Constancia existe exactamente para la rama «Aplica», con su operación crearDesdeEvaluacion: en la rama «No aplica» no se crea nada, y por eso Constancia tiene multiplicidad cero o muchas contra el cliente.

Ejemplo con CU02 y las multiplicidades: «Cliente 1 registra 0 o muchas Visita» se lee como que cada cliente atendido va formando su historial, y «Visita 1 reporta 0 o 1 Incidencia» dice que una atención puede llevar una incidencia o ninguna, que es RN01 escrito en notación de clases. La frecuencia que suma solo visitas (RN06) es la razón por la que el tipo de actividad es un atributo de Visita y no una clase aparte.

La consecuencia práctica: si un cambio toca un flujo, se revisan los cinco lugares (diagrama de casos, secuencia, clases, código e informe), porque los tres diagramas son la misma historia y una contradicción entre ellos significa que uno de los tres miente.

## 6. Por qué se usa la versión del equipo y no la de los documentos recibidos

- Señalable: cada óvalo, clase y mensaje apunta a una historia, una regla, un mensaje del catálogo o una línea de código. Los documentos recibidos incluyen elementos que no apuntan a ninguna parte (Administrador TI, roles, permisos, contraseñas).
- No promete lo que no existe: un login con usuarios y roles no está en el MVP ni en el prototipo; presentarlo en el diagrama sería una inconsistencia visible en la revisión y frente al Product Owner.
- Notación completa: automatización fuera del límite con línea discontinua, multiplicidades y nombres de asociación en las clases, y cero flechas sueltas entre óvalos. Los originales traían líneas sin estereotipo y relaciones invertidas.
- Sincronizada: las figuras del Word del equipo, las diapositivas del PPT, las imágenes de `../modelado/diagramas/`, el `.mdj` y el código dicen lo mismo. El documento original contradecía la numeración de la especificación y el alcance del backlog.
- Pendientes visibles: la automatización candidata y los indicadores definitivos quedan fuera del límite o como confirmación del Product Owner, no escondidos dentro del sistema como si ya estuvieran hechos.

## 7. Comprobación propia en cinco minutos

- Buscar en el backlog alguna historia de usuarios, roles o parámetros del sistema: no existe, por eso ese actor salió del diagrama.
- Abrir el MVP o el prototipo y buscar un inicio de sesión con contraseñas: no existe, por eso la clase Usuario con contraseña salió del diagrama de clases.
- Comparar los cuatro pasos de la secuencia de eventos del Word del equipo con los mensajes 1 a 11 de la secuencia CU01: coinciden en orden y en sentido de las flechas.
- Revisar la rama «No aplica» de la secuencia CU03: no crea constancia, igual que RN02 y que el código.
- Exportar el CSV del prototipo y compararlo con la pantalla: contiene exactamente lo mostrado, por eso la exportación no es un caso aparte.

## 8. Archivos de este tema

| Archivo | Contenido |
|---|---|
| `../modelado/Casos_de_Uso_Atlantic_City_version_del_equipo.docx` | Documento de casos de uso corregido, con las cinco figuras del equipo. |
| `Guia_Diagramas_de_Secuencia_Atlantic_City.md` | Lectura mensaje por mensaje de las tres secuencias y construcción en StarUML. |
| `Guia_Modelado_UML_Atlantic_City.md` | Cómo se construyen y leen los diagramas UML del proyecto. |
| `Guia_Casos_de_Uso_Atlantic_City.md` | Plantilla del profesor campo por campo y trazabilidad. |
| `../modelado/casos_de_uso/Especificacion_Casos_de_Uso_Atlantic_City.md` | Flujos, reglas, excepciones y mensajes verificados. |
