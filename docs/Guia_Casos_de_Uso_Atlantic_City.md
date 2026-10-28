# Guía de casos de uso y StarUML — Atlantic City

Explica cómo documenta el equipo sus casos de uso, con qué plantilla, cómo se llena cada campo en el contexto de Atlantic City, cómo se mantiene la trazabilidad con el backlog, el código y los diagramas, y cómo se reproduce y verifica cada diagrama en StarUML siguiendo los materiales del profesor.

## 1. Fuentes de esta guía

| Material | Qué se tomó de él |
|---|---|
| `../curso/material_complementario/Plantilla de Descripción de Caso de Uso.pdf` | El formato oficial de descripción: identificador y nombre, descripción, actores, precondiciones, postcondiciones, secuencia normal con alternativas (● 2.1), excepciones, rendimiento, frecuencia, importancia, urgencia y comentarios. |
| `../curso/material_complementario/Documentación de Casos de Uso.pdf` | El ejemplo resuelto CU1 Registrar Estudiante y el recorrido StarUML hasta el diagrama. |
| `../curso/material_complementario/Guía para la Elaboración y Presentación de Casos de Uso.pdf` | Reglas de redacción e identificadores: CU00X, RN0X, FA0X, EXC0X, MSJ0X; nombres con verbo inicial; flujo básico y alterno; criterios de aceptación; consideraciones de estilo. |
| `../curso/material_complementario/Plantilla de Especificación de Casos de Uso.pdf` | Secciones de documento: actores, matriz de trazabilidad, datos de entrada y salida, prototipos de pantalla, excepciones y mensajes a nivel de sistema. |
| `../curso/material_complementario/PMOInformatica Plantilla de Casos de Uso.pdf` | Ficha de actor con descripción, características, relación y referencias. |
| `../curso/material_complementario/StarUML Casos de Uso.pdf` | Creación del diagrama de casos de uso en StarUML y concepto de asunto o sujeto. |
| `../curso/material_complementario/Diagramas de caso de Uso.pdf` | Pautas de calidad del diagrama y notación de relaciones. |
| `../curso/material_complementario/Diagramas de Secuencias con StarUML.pdf` | Documentación de secuencia de eventos por caso y diagrama con lifelines y fragmentos `alt`. |
| `../curso/material_complementario/Diagrama de clases.pdf` | Tres zonas de la clase, visibilidad, tipos de relación, multiplicidad y buenas prácticas. |
| `../curso/material_complementario/296342524.pdf` | Fundamento académico de documentar con plantilla (CUPIDo): trazabilidad y hoja de revisión. |

## 2. Qué formato usa el equipo y por qué

El equipo documenta con la **plantilla del profesor** porque es la que aparece resuelta en sus diapositivas y la que se pedirá en la sustentación. De la guía metodológica toma los identificadores y las tablas de reglas, excepciones y mensajes; de las plantillas industriales toma las fichas de actor, la matriz de trazabilidad y los datos de entrada y salida. La mezcla queda así:

1. Ficha de actores (PMO) y diagrama de actores.
2. Matriz de trazabilidad historia → caso de uso (DNP).
3. Por cada caso: tabla de la plantilla del profesor, con la secuencia normal y las excepciones como tablas anidadas, tal como aparece en el ejemplo CU1.
4. Catálogos de sistema: reglas de negocio RN, excepciones EXC y mensajes MSJ.
5. Datos de entrada y salida por caso, con referencia a la pantalla que los implementa.

Nada de esto inventa reglas de negocio: el contenido sale del sílabo, de los acuerdos con el Product Owner y del código existente. La plantilla dice cómo escribirlo, no qué escribir.

## 3. Campo por campo, aplicado a Atlantic City

| Campo | Cómo se llena aquí | Ejemplo correcto | Ejemplo que no se acepta |
|---|---|---|---|
| Identificador y nombre | `CU0X` consecutivo único más nombre iniciado en verbo de proceso. | CU02 — Registrar visita o interacción | CU2 — Hacer atención |
| Descripción | Quién lo ejecuta, por qué y qué obtiene, en dos o tres líneas. | «Permite al empleado dejar constancia de una atención…» | «El sistema registra cosas del cliente» |
| Actores | Rol ejecutor primero; los demás con su papel entre paréntesis. | Empleado de Marketing (ejecutor); Cliente (fuente de los datos) | «El usuario» sin rol |
| Precondiciones | Estado que se asume cierto antes de empezar; no se vuelve a validar en el flujo. | «El perfil del cliente existe en el registro local» | «El sistema funciona» |
| Postcondiciones | Estado garantizado al terminar, incluido qué pasa con los datos. | «La atención queda conservada aunque no haya incidencia» | «Se guarda todo bien» |
| Secuencia normal | Un paso por interacción; la acción del actor y la reacción del sistema en columnas separadas; alternativas como viñetas ● X.X dentro del paso que las origina; el último paso cierra el caso. | Paso 3 con ● 3.1 y ● 3.2 para la incidencia | Pasos que mezclan actor y sistema en la misma celda |
| Excepciones | Situación previsible no deseada y reacción concreta, referenciando el mensaje MSJ que el código muestra. | «Incidente marcado sin descripción → MSJ02» | «Puede fallar algo» |
| Rendimiento | Cota de tiempo real del entorno actual: local, sin servidor. | «Máximo dos segundos en el entorno local» | «Instantáneo» sin cota |
| Frecuencia | Si el Product Owner no la ha fijado, se escribe «Por confirmar con el Product Owner» y el uso de demostración. | «Por confirmar con el Product Owner» | Un número inventado |
| Importancia y urgencia | Valores de la plantilla: vital / importante / quedaría bien; inmediatamente / hay presión / puede esperar. | Vital, Inmediatamente | «Alta» (ese valor es de prioridad de historia, no de esta campo) |
| Comentarios | Alcance real y pendientes: guardado local, integraciones no existentes, automatización no implementada. | «El guardado de esta etapa es local en el navegador» | Silenciar las limitaciones |

Reglas de redacción tomadas de la guía metodológica y verificadas en cada caso:

- Describir **qué** hace el sistema, no **cómo** lo implementa; sin nombres de tablas, funciones ni tecnologías dentro de los pasos.
- No mencionar controles de interfaz concretos («el botón azul»); sí acciones observables («confirma el registro»).
- Listado de alternativas completo, sin «etc.».
- Iteraciones en lenguaje natural («el sistema procesa todas las atenciones del periodo»), no como bucles.
- Toda llamada a otro caso de uso queda explícita en el paso que la origina.

## 4. Identificadores y catálogos

| Prefijo | Significado | Regla |
|---|---|---|
| CU0X | Caso de uso | Consecutivo único dentro del sistema; el nombre inicia en verbo. |
| RN0X | Regla de negocio | Vive en el catálogo del sistema; un caso la referencia, no la copia. |
| FA0X | Flujo alterno | Numeración X.X anclada al paso del flujo básico que lo origina. |
| EXC0X | Excepción | Catálogo del sistema; se reutiliza entre casos cuando la situación es la misma. |
| MSJ0X | Mensaje | Texto literal que el código muestra; si el código cambia, cambia el catálogo. |

Los mensajes MSJ de este proyecto **son las cadenas reales del código** del MVP y del prototipo. Por eso la especificación sirve también como prueba: si un mensaje de la tabla no aparece al provocar la situación en el navegador, o el código cambió sin actualizar el documento o viceversa.

## 5. Cómo nace un caso de uso nuevo

1. Partir de una historia del backlog (`../backlog/Product_Backlog_Atlantic_City.md`). Si la historia no existe, no se inventa el caso: se propone al Product Owner.
2. Decidir si es un caso nuevo o un paso incluido de uno existente. Registrar visita nació como paso de CU02 porque la incidencia es opcional dentro de la atención, no un recorrido aparte.
3. Escribir la ficha con la plantilla, usando como fuente el recorrido real del código: abrir el MVP o el prototipo y seguir el flujo clic a clic antes de redactar.
4. Asignar o referenciar RN, EXC y MSJ del catálogo; si aparece un mensaje nuevo en el código, añadirlo al catálogo con su ID.
5. Dibujar o actualizar el diagrama de casos de uso y, si el caso es principal, su diagrama de secuencia en StarUML.
6. Actualizar en el mismo cambio: especificación, punto 13 del informe, matriz de trazabilidad y, si cambia un dato persistente, el diagrama de clases.
7. Registrar el cambio en la tabla de control de versiones de la especificación.

## 6. Trazabilidad: cinco vistas del mismo acuerdo

| Acuerdo | Dónde vive | Qué se revisa al cambiar |
|---|---|---|
| Necesidad y prioridad | Historia de usuario en el backlog | Prioridad y Sprint |
| Funcionalidad observable | Caso de uso CU0X en esta especificación y en el punto 13 del informe | Secuencia, excepciones, criterios de aceptación |
| Comportamiento dinámico | Diagrama de secuencia (figuras 6 a 8 del informe) | Mensajes y fragmentos `alt` |
| Datos persistentes | Diagrama de clases (figura 9) y colecciones del código | Atributos y asociaciones |
| Implementación | Código del MVP o del prototipo y catálogo MSJ | Cadenas de mensajes y validaciones |

Regla del equipo: un cambio en cualquiera de las cinco vistas obliga a revisar las otras cuatro en la misma entrega. Ninguna vista se adelanta a las demás.

## 7. StarUML paso a paso

### 7.1 Diagrama de casos de uso

1. `Model > Add > Use Case Diagram`, o clic derecho sobre el modelo en el Model Explorer → `Add Diagram > Use Case Diagram` (así aparece en las diapositivas del profesor).
2. Arrastrar desde el Toolbox un **Actor** por cada rol de la ficha de actores y nombrarlo con el nombre del rol, no el de la persona.
3. Añadir el **Subject** (rectángulo del sistema) y nombrarlo «Sistema de Gestión de Clientes Atlantic City»; los casos de uso van dentro.
4. Añadir un **Use Case** por cada caso del alcance con nombre iniciado en verbo y colocarlo en orden lógico de recorrido, de arriba hacia abajo.
5. Unir actor y caso con **Association** (línea sin flecha).
6. Para HU-09 → HU-07 usar **Include**: flecha discontinua con la etiqueta `<<include>>` apuntando al caso incluido, colocado a la derecha del que lo invoca.
7. HU-13 queda fuera del rectángulo del sistema, asociada al Product Owner, hasta que el PO la priorice.
8. Exportar la imagen y reemplazarla en el informe y en `../modelado/diagramas/Casos_de_uso.png` para que ambas versiones coincidan.

Lista de comprobación del diagrama, tomada de las pautas del curso:

- Actores con nombre de rol y actores principales a la izquierda.
- Nombres de caso con verbo inicial y descriptivos («Registrar visita o interacción», no «Registrar»).
- Casos incluidos a la derecha del invocador; herederos debajo del principal.
- `<<include>>` y `<<extend>>` con flecha discontinua; la de `extend` apunta al caso base.
- Asociación actor–caso sin flecha.
- Sin cruces de líneas evitables y sin casos huérfanos sin actor.

### 7.2 Diagrama de secuencia

1. `Add Diagram > Sequence Diagram` por cada caso principal.
2. Crear los lifelines del recorrido actual: el actor (`: Empleado autorizado` o el rol que corresponda), `: Interfaz`, `: Sistema` y `: Datos (registro local)`. En los ejemplos del profesor el cuarto participante es la base de datos; aquí se nombra registro local porque no hay base central todavía.
3. Añadir los mensajes en orden con `Message` (flecha sólida) y las respuestas con flecha de retorno.
4. Las alternativas ● X.X del texto se dibujan como **Combined Fragment** de tipo `alt`, con una región por rama (por ejemplo, incidencia reportada o no; «Aplica» o «No aplica»).
5. Numerar los mensajes igual que los pasos de la secuencia normal del caso para poder señalar ambos lados en la sustentación.
6. Documentar antes del diagrama, como en las diapositivas: descripción, actores, precondiciones, postcondiciones, secuencia de eventos normales y excepciones. Esa documentación es la ficha del caso de uso.

### 7.3 Diagrama de clases

1. `Add Diagram > Class Diagram`.
2. Una clase por entidad persistente del código: Cliente, Visita, Incidencia, Constancia, Promocion, Campana.
3. En la segunda zona, los atributos con visibilidad: `+ identificador`, `+ nombre`, etc. El material del curso permite simplificar, pero al pasar a StarUML el equipo usa visibilidad pública para los datos que las vistas leen y escriben.
4. En la tercera zona, las operaciones que el código realmente ejerce sobre la entidad (por ejemplo `+ registrar()`, `+ actualizarDatos()`); si una operación no existe en el código, no se dibuja.
5. Relaciones: **asociación** con nombre y multiplicidad para registra / reporta / recibe / evalúa / organiza, tal como está en la figura 9. Si más adelante una entidad solo existiera dentro de otra (por ejemplo una línea de detalle), se evaluaría composición o agregación según el ciclo de vida, con rombo lleno o vacío.
6. Revisar contra las buenas prácticas del curso: primero estructura y cardinalidades, después atributos y operaciones; diagramas pequeños y legibles antes que uno gigante.

### 7.4 Guardado y versiones del modelo

- Guardar el archivo `.mdj` de StarUML dentro de `../` (carpeta modelado) con nombre el archivo Atlantic_City_UML.mdj dentro de `../modelado/` la primera vez que el equipo lo cree, y mencionarlo en el README de modelado.
- Antes de cada entrega, exportar de nuevo los PNG y compararlos con los incrustados en el informe.
- Si el profesor pide intercambio con otra herramienta, StarUML exporta a XMI; ese archivo, y no capturas sueltas, es el que se comparte.

## 8. Errores que esta guía evita

1. **Copiar la plantilla y llenarla de diseño**: los pasos hablan de interacciones, no de pantallas ni de código.
2. **Inventar frecuencia o rendimiento**: sin acuerdo del Product Owner se escribe «por confirmar».
3. **Mensajes que no existen**: todo MSJ debe poder provocarse en el navegador; si no, se corrige el catálogo o el código.
4. **Duplicar reglas dentro de cada caso**: las reglas viven una sola vez en el catálogo RN y se referencian.
5. **Actualizar el informe sin actualizar la especificación o el diagrama**: la regla de las cinco vistas lo prohíbe.
6. **Dibujar en StarUML sin las pautas**: actores a la izquierda, verbos al inicio, include a la derecha; un diagrama correcto pero desordenado resta claridad en la sustentación.
7. **Tratar HU-13 como incluida**: sigue fuera del rectángulo del sistema hasta que el Product Owner la priorice.

## 9. Reutilización en otros proyectos

El método es portable tal cual:

1. Elegir la plantilla oficial del curso o cliente como formato único de descripción.
2. Construir el catálogo MSJ desde el código real (o desde la especificación, si aún no hay código, y verificarlo cuando lo haya).
3. Mantener la matriz de trazabilidad requisito → caso de uso como puente entre backlog y especificación.
4. Numerar con CU/RN/FA/EXC/MSJ desde el primer documento para no renombrar después.
5. Dibujar en StarUML solo después de tener la ficha escrita: el diagrama valida la ficha, no la reemplaza.
6. Aplicar la regla de las cinco vistas (necesidad, caso, secuencia, clases, código) para que ningún artefacto envejezca solo.

En un proyecto con backend, los únicos cambios serían el cuarto lifeline (base de datos real en lugar de registro local), los rendimientos acordados con el cliente y los datos de entrada y salida con tipos y tamaños del modelo de datos.

## 10. Dónde está cada entregable de casos de uso

| Entregable | Ubicación |
|---|---|
| Especificación completa con datos de entrada y salida | `../modelado/casos_de_uso/Especificacion_Casos_de_Uso_Atlantic_City.md` (esta carpeta) |
| Versión de presentación, punto 13 del informe | `../informe/Avance_Atlantic_City.docx` |
| Diagrama general de casos de uso | `../modelado/diagramas/Casos_de_uso.png` y figura 5 del informe |
| Diagramas de secuencia | `../modelado/diagramas/Secuencia_registrar_cliente.png`, `../modelado/diagramas/Secuencia_registrar_visita.png` y `../modelado/diagramas/Secuencia_evaluar_promocion.png`; figuras 6 a 8 del informe |
| Diagrama de clases | `../modelado/diagramas/Clases.png` y figura 9 del informe |
| Reglas de dibujo y notación UML | `Guia_Modelado_UML_Atlantic_City.md` |
| Material del profesor | `../curso/material_complementario/` |
