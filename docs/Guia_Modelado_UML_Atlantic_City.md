# Guía de modelado UML — casos de uso, secuencia y clases

## 1. Qué contiene la carpeta `diagramas/`

| Archivo | Punto de la estructura | Qué muestra |
|---|---|---|
| `../modelado/diagramas/Casos_de_uso.png` | 12 | Diagrama general de casos de uso con los cinco actores y los doce casos del alcance actual |
| `../modelado/diagramas/Secuencia_registrar_cliente.png` | 14 | Recorrido actor → interfaz → sistema → datos al registrar un cliente (HU-02) |
| `../modelado/diagramas/Secuencia_registrar_visita.png` | 14 | Recorrido al registrar una visita o interacción (HU-05) |
| `../modelado/diagramas/Secuencia_evaluar_promocion.png` | 14 | Recorrido al evaluar si una promoción aplica (HU-09) |
| `../modelado/diagramas/Clases.png` | 15 | Diagrama de clases básico con seis clases y sus asociaciones |

Estos diagramas complementan al modelo BPMN de `../modelado/Atlantic_city_grupo_cinco.png` y `../modelado/SUBPROCESO.png`. El BPMN describe el proceso del negocio; los diagramas UML describen el sistema que lo atiende. No son lo mismo y conviene explicarlo así en la sustentación.

## 2. Cómo se construyeron

1. **Actores.** Se tomaron de los carriles del modelo BPMN y de las historias de usuario: el cliente como actor externo que no accede al sistema, el personal de Servicio al Cliente / Operaciones, el personal de Marketing, la gerencia o usuario autorizado para reportes, y el Product Owner como quien decide prioridades. No se agregaron actores que el proceso no muestre.
2. **Casos de uso.** Cada caso corresponde a una historia del Product Backlog con prioridad activa. HU-13 se dibuja fuera del límite del sistema con una relación punteada al Product Owner, porque solo se desarrolla si él la prioriza.
3. **Secuencias.** Se siguieron los recorridos reales del código del MVP y del prototipo: qué hace la interfaz, qué verifica el sistema y qué se guarda en el registro local. El cuarto objeto se llama «Datos (registro local)» para no afirmar una base de datos que aún no existe.
4. **Clases.** Los atributos son los campos que usan hoy el MVP y el prototipo. No se incluyeron campos de contacto —correo, teléfono, dirección— porque el Product Owner todavía no confirma cuáles se solicitan.

## 3. Cómo leer el diagrama de casos de uso

- El rectángulo grande es el límite del sistema; todo lo que está dentro es funcionalidad del producto.
- Los monigotes son los actores. Las líneas simples indican qué casos usa cada actor.
- La flecha punteada con «include» entre HU-09 y HU-07 significa que evaluar una promoción siempre incluye consultar los criterios de segmentación.
- HU-13 fuera del límite recuerda que la automatización no forma parte del alcance actual.

Pregunta típica y respuesta del equipo: **¿por qué el Cliente aparece como actor si no usa el sistema?** Porque el caso de negocio lo incluye: solicita la atención y recibe la oferta. Quien opera el sistema es el personal autorizado.

## 4. Cómo leer los diagramas de secuencia

- Cada columna es un objeto: la persona autorizada, la interfaz, el sistema y los datos.
- Las flechas continuas son llamadas o envíos; las punteadas son respuestas.
- El recuadro con la etiqueta «alt» separa caminos alternativos: identificador registrado o disponible en el primer diagrama; resultado «Aplica» o «No aplica» en el tercero.
- La flecha que sale y vuelve al mismo objeto representa una verificación interna, por ejemplo la validación de campos obligatorios.

Pregunta típica: **¿por qué el objeto de datos no es una base de datos?** Porque la implementación actual guarda los registros en el almacenamiento local del navegador. Si el curso confirma un motor, el diagrama se actualiza cambiando ese objeto, sin alterar el recorrido.

## 5. Cómo leer el diagrama de clases

- Cada recuadro tiene tres zonas: nombre de la clase, atributos y operaciones.
- Las líneas entre clases son asociaciones con multiplicidades: un cliente registra de cero a muchas visitas, incidencias y constancias; una constancia evalúa una promoción; una campaña organiza de cero a muchas promociones.
- Las operaciones son las que ya existen en el código: registrar, actualizar, consultar, listar por cliente y agregar seguimiento.

Pregunta típica: **¿por qué no hay herencia ni clases de usuario?** Porque el nivel pedido es básico y el sistema actual no distingue roles dentro de la interfaz; agregarlos sería inventar una regla de acceso que el Product Owner no ha definido.

## 6. Qué no se debe afirmar con estos diagramas

- Que exista una base de datos relacional: el objeto «Datos» es el registro local del navegador.
- Que los campos de contacto estén confirmados: aparecen en el sílabo como posibilidad, no como acuerdo.
- Que la automatización esté en el alcance: HU-13 está fuera del límite del sistema por decisión del backlog.
- Que los casos de uso describan reglas nuevas: cada flujo replica lo que el backlog, el modelo BPMN y el código ya dicen.

## 7. Cuándo actualizar estos diagramas

- Si el Product Owner confirma campos nuevos del perfil o reglas de duplicidad.
- Si el curso define un motor de base de datos: cambia el objeto «Datos» de las secuencias y pueden añadirse atributos.
- Si el backlog agrega o retira historias con prioridad activa: cambia el diagrama de casos de uso.
- Si se implementa autenticación o roles: aparecen actores o clases nuevas.

Cada actualización se vuelve a dibujar con las mismas reglas y se verifica que las imágenes del informe de avance coincidan con las de esta carpeta.

## 8. Alineación con el material del curso y trabajo en StarUML

Los diagramas de esta carpeta se revisaron contra las pautas entregadas por el profesor en el material complementario (`../curso/material_complementario/`):

- Casos de uso: nombres iniciados en verbo, actores principales a la izquierda, caso incluido a la derecha del que lo invoca, `<<include>>` y `<<extend>>` con flecha discontinua y asociación actor–caso sin flecha. El diagrama cumple estas pautas; HU-13 permanece fuera del rectángulo del sistema hasta que el Product Owner la priorice.
- Secuencia: lifelines de actor, interfaz, sistema y datos, con fragmentos `alt` para las alternativas; coincide con la documentación de secuencia de eventos que el profesor muestra como previa al diagrama. Esa documentación por caso vive ahora en `../modelado/casos_de_uso/Especificacion_Casos_de_Uso_Atlantic_City.md`.
- Clases: tres zonas por clase y multiplicidades en las asociaciones. Al pasar el diagrama a StarUML, el equipo añade la visibilidad (`+`) en los atributos que las vistas leen y escriben y las operaciones que el código realmente ejecuta, según se detalla en `Guia_Casos_de_Uso_Atlantic_City.md`.

El equipo trabaja los diagramas UML en StarUML. Los pasos para reproducir y verificar cada uno (casos de uso, secuencia y clases), incluido el guardado del archivo `.mdj` y la exportación de imágenes, están en la sección 7 de `Guia_Casos_de_Uso_Atlantic_City.md`. Mientras el modelo de StarUML y las imágenes de esta carpeta coexisten, cualquier cambio se exporta de nuevo y se reemplaza en ambos lados y en el informe.
