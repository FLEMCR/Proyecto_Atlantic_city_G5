# Guía de prototipado — wireframes, MVP y prototipo con navegación

## 1. Qué contiene esta carpeta y en qué orden se presenta

La estructura de entrega propuesta por el profesor pide tres productos distintos en este bloque. Aquí se conservan los tres, separados para no mezclarlos:

| Punto de la estructura | Producto | Ubicación | Qué demuestra |
|---|---|---|---|
| 8 | Wireframes digitales | `../prototipado/wireframe_manual.png` y `../prototipado/wireframe_digital.png` | El diseño de la pantalla, sin funcionamiento |
| 9 | Producto Mínimo Viable (MVP) | `MVP/` | Las funcionalidades mínimas que sí se implementan |
| 10 | Prototipo con navegación | `prototipo_navegable/` | Las mismas pantallas conectadas entre sí |

El orden del informe es wireframes → MVP → prototipo con navegación, tal como aparece en la estructura propuesta. En el ejemplo resuelto del profesor el prototipo aparece antes que el MVP; ese orden pertenece a ese documento y no se copia aquí.

Tres ideas que conviene tener claras antes de explicar cualquiera de las piezas:

1. **El wireframe no funciona.** No tiene botones funcionales, validaciones, navegación ni programación: solo diseño.
2. **El MVP es pequeño a propósito.** Resuelve el recorrido mínimo para no intentar programar todo Atlantic City.
3. **El prototipo con navegación conecta pantallas.** Su objetivo es demostrar que se entiende el paso de una interfaz a otra.

## 2. Wireframe manual: `../prototipado/wireframe_manual.png`

Es el boceto manual de la pantalla de Inicio/Dashboard. Organiza visualmente navegación, indicadores, actividad reciente, criterios de segmentación, perfiles y registros de marketing. Se usa para revisar estructura y jerarquía antes de construir una interfaz más completa.

### Cómo leerlo

- La cabecera identifica Atlantic City y marca que los datos son de demostración.
- El menú lateral reúne las secciones planteadas para una interfaz más amplia.
- Los indicadores representan conteos ilustrativos; no son indicadores reales aprobados.
- La actividad resume visitas e incidencias.
- La zona de criterios recuerda los cuatro insumos del proyecto.
- La tabla de perfiles y la sección de campañas/promociones muestran agrupaciones de información.
- La nota de elegibilidad es un resumen del flujo: «No aplica» no genera comunicación; «Aplica» se representaría mediante una constancia local.

## 3. Wireframe digital: `../prototipado/wireframe_digital.png`

Es la versión digital de la misma pantalla y contiene las mismas áreas que el manual. Permite revisar alineación, proporciones, lectura de textos y distribución con una estructura más ordenada. No agrega funciones por ser digital.

### Por qué se entregan ambas versiones

El boceto manual facilita conversar sobre estructura; el digital ayuda a revisar la distribución con más precisión. Compararlas permite validar la organización antes de construir la interfaz. En ambos casos, etiquetas y texto acompañan al color para que el significado no dependa solo de la paleta.

### Cómo explicar un wireframe en la presentación

Sigue el recorrido visual de la pantalla, de arriba hacia abajo y de izquierda a derecha: cabecera e identidad, menú de navegación, indicadores, zonas de contenido (actividad, criterios, perfiles, marketing) y notas. Termina diciendo qué no es: no es una pantalla funcional ni una promesa de alcance.

## 4. MVP sencillo: estructura de la pantalla

Ubicación: `../prototipado/MVP/` (index.html, styles.css, app.js).

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

## 6. Prototipo con navegación

Ubicación: `../prototipado/prototipo_navegable/` (index.html, styles.css, app.js y una versión en archivo único).

Convierte el wireframe en una interfaz navegable con siete vistas: Inicio, Clientes, Visitas e interacciones, Incidencias, Segmentación, Promociones y campañas, y Reportes. El menú lateral cambia de vista sin recargar la página y los accesos directos del Inicio llevan a la sección correspondiente.

### Recorrido que se demuestra

```text
Inicio
  ↓
Clientes → Registrar cliente → Guardar → Lista de clientes → Ver ficha
  ↓
Visitas e interacciones → Registrar actividad → Historial del cliente
  ↓
Incidencias → Registrar incidencia → Seguimiento
  ↓
Segmentación → Consultar los cuatro criterios → Clasificación manual
  ↓
Promociones y campañas → Campaña / Promoción / Revisión de elegibilidad
  ↓
Reportes → Resumen local y exportación CSV
```

### Qué hace cada vista

| Vista | Qué muestra | Qué permite hacer |
|---|---|---|
| Inicio | Resumen general, clientes recientes, criterios, actividad y marketing | Ir a cualquier sección con los accesos directos |
| Clientes | Base de perfiles de demostración | Registrar, buscar, actualizar y abrir la ficha |
| Visitas e interacciones | Formulario y actividad registrada | Registrar una visita o interacción y buscar en el historial |
| Incidencias | Casos y notas de seguimiento | Registrar una incidencia y añadir seguimiento |
| Segmentación | Los cuatro criterios por perfil | Consultar los insumos y escribir una clasificación manual |
| Promociones y campañas | Campañas, promociones y revisiones | Registrar campaña, promoción y resultado manual de elegibilidad |
| Reportes | Resumen de los registros locales | Revisar conteos y exportar un CSV local |

### Diferencia con el MVP

El MVP es una sola pantalla con el recorrido mínimo; el prototipo con navegación muestra cómo se conectan las pantallas entre sí. Ambos usan datos de demostración guardados en el navegador y ninguno sustituye al otro en la entrega.

## 7. Datos de demostración y persistencia

Al iniciar por primera vez, cada versión muestra registros de prueba (perfiles, visitas, una campaña y una promoción). El distintivo «Datos de demostración» identifica el carácter ficticio de la información.

Los cambios se guardan en `localStorage` del navegador. Por eso:

- permanecen en el mismo navegador/origen;
- no se comparten entre equipos;
- pueden perderse al limpiar los datos del sitio;
- no son una base de datos central ni una integración con Atlantic City.

El MVP usa la clave `atlanticCitySimpleMvp_v1` y el prototipo con navegación la clave `atlanticCityMvp_v3`; al ser claves distintas, los registros de una versión no se mezclan con los de la otra aunque se abran en el mismo navegador y origen.

## 8. Cómo ejecutar y probar

Cada carpeta se sirve por separado para que las dos versiones no se confundan.

```bash
# MVP (punto 9 de la estructura)
cd prototipado/MVP && python -m http.server 4173

# Prototipo con navegación (punto 10 de la estructura)
cd prototipado/prototipo_navegable && python -m http.server 4174
```

El archivo único del prototipo también puede abrirse con doble clic, sin servidor.

### Prueba básica del MVP

1. Escribe `AC-001` y sal del campo para cargar un perfil de demostración, o ingresa un identificador y nombre nuevos.
2. Registra una visita; revisa el resumen y el historial.
3. Repite como interacción y comprueba que no se cuenta como visita para el criterio de frecuencia.
4. Prueba una atención sin incidencia y otra con incidencia.
5. Selecciona la campaña y promoción de prueba, guarda «No aplica» y verifica que no se crea constancia.
6. Repite con «Aplica» y confirma que el historial registra una constancia local, sin indicar que se envió un mensaje.
7. Revisa que los conteos y el historial distingan los registros locales.

### Prueba básica del prototipo con navegación

1. Recorre las siete vistas desde el menú lateral y confirma que el cambio no recarga la página.
2. Registra un cliente nuevo y búscalo en la lista y en su ficha.
3. Registra una visita asociada a ese cliente y verifícala en el historial.
4. Registra una incidencia y añade una nota de seguimiento.
5. Consulta los cuatro criterios en Segmentación y guarda una clasificación manual.
6. Registra una promoción, evalúa «No aplica» y luego «Aplica»; comprueba que solo el segundo caso crea constancia local.
7. Abre Reportes y exporta el CSV local; verifica que los conteos coincidan con lo registrado.

## 9. Decisiones pendientes y funciones posteriores

Ninguna de las dos versiones resuelve por sí sola todos los criterios del Product Backlog. Antes de ampliar el producto, el PO debe confirmar identificador y campos, fuentes de datos, periodo de frecuencia, regla de segmentación y elegibilidad, campos y estados de incidencias, condiciones y aprobación de campañas, e indicadores y periodos de reportes.

Los wireframes del Dashboard sirven como referencia de estructura para esa evolución; su presencia no autoriza a dar por implementadas esas funciones.

## 10. Archivos de la carpeta

- `../prototipado/wireframe_manual.png` — pantalla Inicio/Dashboard, boceto manual.
- `../prototipado/wireframe_digital.png` — la misma pantalla, diseño digital.
- `../prototipado/MVP/index.html`, `../prototipado/MVP/styles.css`, `../prototipado/MVP/app.js` — MVP sencillo de una pantalla.
- `Guia_Codigo_MVP.md` — guía detallada del código del MVP: funciones, reglas embebidas, validaciones y patrones reutilizables.
- `../prototipado/MVP/README.md` — ejecución y límites del MVP.
- `../prototipado/prototipo_navegable/index.html`, `../prototipado/prototipo_navegable/styles.css`, `../prototipado/prototipo_navegable/app.js` — prototipo de siete vistas conectadas.
- `Guia_Codigo_Prototipo_Navegable.md` — guía detallada del código del prototipo: navegación, renders, formularios, exportación CSV y patrones reutilizables.
- `../prototipado/prototipo_navegable/Atlantic_City_Prototipo_Navegable_Archivo_unico.html` — el mismo prototipo en un solo archivo.
- `../prototipado/prototipo_navegable/README.md` — ejecución, recorrido y límites del prototipo.
