# Guía de prototipado — wireframes y MVP Atlantic City

## 1. Relación entre los wireframes y el MVP

En esta carpeta se conservan dos piezas con propósitos distintos:

1. **Wireframes manual y digital:** representan la misma pantalla Inicio/Dashboard, en dos estilos. Es una propuesta visual más amplia para una etapa de desarrollo posterior.
2. **MVP sencillo:** es la página funcional de la carpeta `MVP/`. Demuestra un único recorrido de atención, con formulario, resumen tipo comprobante, conteos locales e historial.

Los wireframes no son pantallas navegables y no significan que todas las funciones del Dashboard estén ya implementadas. El MVP sencillo tampoco es el sistema completo. Esta separación evita confundir diseño visual futuro con funcionalidad disponible.

## 2. Wireframe manual: `wireframe_manual.png`

Es el boceto manual de la pantalla de Inicio/Dashboard. Organiza visualmente navegación, indicadores, actividad reciente, criterios de segmentación, perfiles y registros de marketing. Se usa para revisar estructura y jerarquía antes de construir una interfaz más completa.

### Cómo leerlo

- La cabecera identifica Atlantic City y marca que los datos son de demostración.
- El menú lateral reúne las secciones planteadas para una interfaz más amplia.
- Los indicadores representan conteos ilustrativos; no son indicadores reales aprobados.
- La actividad resume visitas e incidencias.
- La zona de criterios recuerda los cuatro insumos del proyecto.
- La tabla de perfiles y la sección de campañas/promociones muestran agrupaciones de información.
- La nota de elegibilidad es un resumen del flujo: «No aplica» no genera comunicación; «Aplica» se representaría mediante una constancia local en el MVP actual.

## 3. Wireframe digital: `wireframe_digital.png`

Es la versión digital de la misma pantalla y contiene las mismas áreas que el manual. Permite revisar alineación, proporciones, lectura de textos y distribución con una estructura más ordenada. No agrega funciones por ser digital.

### Por qué se entregan ambas versiones

El boceto manual facilita conversar sobre estructura; el digital ayuda a revisar la distribución con más precisión. Compararlas permite validar la organización antes de construir una interfaz extensa. En ambos casos, etiquetas y texto acompañan al color para que el significado no dependa solo de la paleta.

## 4. MVP sencillo: estructura de la pantalla

El MVP toma del ejemplo de pedido una organización compacta: pasos numerados, formulario principal, vista-resumen inmediata, conteos e historial. Se adaptan únicamente patrones de interfaz; no se usan los productos, métricas ni reglas del ejemplo.

### Paso 1 — Perfil y datos disponibles

- Identificador y nombre del cliente son obligatorios en el prototipo.
- Si el identificador ya existe localmente, al salir del campo se cargan los valores guardados disponibles; al registrar la atención se actualiza el perfil en vez de duplicarlo.
- Nivel de gasto y preferencias de juegos son campos de texto; su significado, fuente y datos autorizados deben confirmarse.
- La clasificación se ingresa manualmente; no se calcula un segmento.

### Paso 2 — Visita o interacción

Se elige el tipo de actividad, fecha y una nota opcional. La actividad queda en el historial con independencia de que exista incidencia o promoción.

### Paso 3 — Opcionales

- Se puede activar una incidencia y escribir una descripción.
- Campaña y promoción aparecen en campos separados y opcionales. La aplicación contiene una campaña y una promoción de demostración para mostrar la diferencia y la relación posible.
- Si se selecciona una promoción, se debe guardar «Aplica» o «No aplica» como revisión manual. El sistema no calcula elegibilidad.

### Paso 4 — Resumen y comprobante

El panel derecho muestra el perfil, actividad, campaña, promoción, resultado, incidencia, cuatro criterios disponibles y etiqueta manual. La vista se actualiza mientras se completa el formulario; tras guardar, presenta el registro local creado.

### Conteos e historial

Al pie de la pantalla se muestran perfiles, visitas/interacciones, incidencias y constancias locales, además de las atenciones recientes. Son conteos de datos locales de demostración, no reportes de negocio con filtros o indicadores validados por el PO.

## 5. Reglas de comportamiento del MVP

- **Visita/interacción:** cada atención se guarda en el historial.
- **Incidencia:** se registra solo cuando se activa esa opción; no se asignan estados, categorías, plazos ni responsables.
- **Frecuencia:** el resumen cuenta atenciones de tipo «Visita»; las interacciones no se suman. El periodo está pendiente, por lo que el total no constituye una frecuencia formal.
- **Historial promocional:** cuenta constancias locales de este prototipo; no demuestra envío, recepción ni canje.
- **Sin promoción:** la atención se registra normalmente y no se exige un resultado de elegibilidad.
- **«No aplica»:** conserva la revisión, pero no crea constancia.
- **«Aplica»:** crea una constancia local, sin enviar un mensaje.
- **Campaña:** selección opcional independiente; el MVP no gestiona su aprobación o publicación.
- **Automatización:** no implementada.

## 6. Datos de demostración y persistencia

Al iniciar por primera vez se muestran dos perfiles de prueba, una visita, una interacción, una campaña y una promoción de prueba. No hay incidencias ni constancias precargadas. El distintivo «Datos de demostración» identifica el carácter ficticio de la información.

Los cambios se guardan en `localStorage` del navegador. Por eso:

- permanecen en el mismo navegador/origen;
- no se comparten entre equipos;
- pueden perderse al limpiar los datos del sitio;
- no son una base de datos central ni una integración con Atlantic City.

## 7. Cómo ejecutar y probarlo

Desde `prototipado/MVP/`, inicia un servidor estático:

```bash
python -m http.server 4173
```

Abre `http://localhost:4173` en el navegador. Para una prueba básica:

1. Escribe `AC-001` y sal del campo para cargar un perfil de demostración, o ingresa un identificador y nombre nuevos.
2. Registra una visita; revisa el resumen y el historial.
3. Repite como interacción y comprueba que no se cuenta como visita para el criterio de frecuencia.
4. Prueba una atención sin incidencia y otra con incidencia.
5. Selecciona la campaña y promoción de prueba, guarda «No aplica» y verifica que no se crea constancia.
6. Repite con «Aplica» y confirma que el historial registra una constancia local, sin indicar que se envió un mensaje.
7. Revisa que los conteos y el historial distingan los registros locales.

## 8. Decisiones pendientes y funciones posteriores

El MVP no resuelve por sí solo todos los criterios del Product Backlog. Antes de ampliar el producto, el PO debe confirmar identificador y campos, fuentes de datos, periodo de frecuencia, regla de segmentación y elegibilidad, campos/estados de incidencias, condiciones y aprobación de campañas, indicadores y periodos de reportes, así como tecnologías de backend y base de datos.

Las vistas completas de perfiles, gestión de campañas, reportes e incidencias pueden planificarse mediante el Product Backlog. Los wireframes del Dashboard sirven como referencia de estructura para esa evolución; su presencia no autoriza a dar por implementadas esas funciones.

## 9. Archivos de la carpeta

- `wireframe_manual.png` — pantalla Inicio/Dashboard, boceto manual.
- `wireframe_digital.png` — la misma pantalla, diseño digital.
- `MVP/index.html` — estructura y formulario.
- `MVP/styles.css` — presentación adaptable.
- `MVP/app.js` — comportamiento local, validaciones y actualización de la vista.
