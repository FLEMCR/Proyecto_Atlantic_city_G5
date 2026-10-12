# Atlantic City

## Sistema de Gestión de Clientes

Repositorio de trabajo para el proyecto **Modernización del Sistema de Gestión de Clientes de Atlantic City**. Reúne el Product Backlog acordado por el equipo, las guías del proyecto, el modelo BPMN, los wireframes y el MVP sencillo.

El sílabo y las indicaciones del profesor orientan el trabajo. El profesor cumple el rol de Product Owner (PO) y el equipo está formado por cuatro Developers. Las prioridades y reglas de negocio se confirman con el PO antes de incorporarlas como comportamiento del sistema.

## Estructura del repositorio

```text
proyecto_final/
├── README.md
├── Silabo_EFSRT_Desarrollo_Capa_de_Vista.pdf
├── Atlantic_City_logo.webp
├── backlog/
│   ├── Product_Backlog_Atlantic_City.md
│   └── Product_Backlog_Atlantic_City.docx
├── docs/
│   ├── Guia_Principal_Atlantic_City.md
│   ├── Product_Backlog_Guia_Atlantic_City.md
│   ├── Scrum_Guia_Atlantic_City.md
│   └── Registro_de_verificacion.md
├── modelado/
│   ├── Atlantic_city_grupo_cinco.png
│   ├── SUBPROCESO.png
│   └── Guia_Modelado_Bizagi_Atlantic_City.md
├── prototipado/
│   ├── wireframe_manual.png
│   ├── wireframe_digital.png
│   ├── Guia_Prototipado_y_MVP.md
│   └── MVP/
│       ├── index.html
│       ├── styles.css
│       └── app.js
└── desarrollo/
    ├── Guia_Desarrollo.md
    ├── html_css_js/
    ├── python/
    └── sql/
```

Los archivos originales proporcionados para lectura y consulta se conservan, sin modificaciones, en la carpeta hermana `../uploads/`. Su inventario está en `../uploads/README.md`.

## Punto de partida técnico

- **HTML, CSS y JavaScript:** base del MVP sencillo de la capa de vista.
- **Bizagi Modeler:** herramienta utilizada para las imágenes del modelado BPMN.
- **Jira y Discord:** herramientas de seguimiento y coordinación descritas en la guía Scrum del equipo.
- **Python y SQL:** carpetas preparadas para organizar el desarrollo posterior. El material del curso presenta alternativas, pero no fija aquí un framework de Python ni un motor de base de datos. La selección debe confirmarse antes de implementar backend o persistencia SQL.

## MVP actual

El MVP funcional está en `prototipado/MVP/`. Es una sola pantalla para registrar una visita o interacción, asociarla a un perfil, añadir una incidencia opcional y revisar manualmente una promoción de demostración. Muestra un resumen, conteos e historial almacenados solo en el navegador.

Todos los registros de ejemplo están identificados como datos de demostración. No existe conexión con sistemas reales de Atlantic City ni envío externo de mensajes. La clasificación y la elegibilidad no se calculan automáticamente; la automatización es opcional y no está implementada.

Los wireframes de Inicio/Dashboard son una propuesta visual más amplia, conservada como referencia de diseño para una etapa posterior. **No representan el alcance del MVP sencillo.**

## Lectura recomendada

1. `docs/Guia_Principal_Atlantic_City.md` — objetivo, procesos, participantes y decisiones del producto.
2. `backlog/Product_Backlog_Atlantic_City.md` — fuente de consulta de las 13 historias de usuario y su prioridad.
3. `docs/Scrum_Guia_Atlantic_City.md` — organización del trabajo de los cuatro Developers con el profesor como PO.
4. `modelado/Guia_Modelado_Bizagi_Atlantic_City.md` — recorrido BPMN y forma de explicarlo.
5. `prototipado/Guia_Prototipado_y_MVP.md` — wireframes y recorrido funcional del MVP.
6. `desarrollo/Guia_Desarrollo.md` — conceptos y ejemplos de la capa de vista y de las capas técnicas previstas.
