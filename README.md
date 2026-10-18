# Atlantic City

## Sistema de Gestión de Clientes

Repositorio de trabajo del proyecto **Modernización del Sistema de Gestión de Clientes de Atlantic City**. Reúne el informe de avance, el Product Backlog acordado por el equipo, las guías del proyecto, el modelo BPMN y UML, los wireframes, el MVP y el prototipo con navegación.

El sílabo y la estructura de entrega propuesta por el profesor orientan el trabajo. El profesor cumple el rol de Product Owner (PO) y el equipo está formado por cuatro Developers. Las prioridades y reglas de negocio se confirman con el PO antes de incorporarlas como comportamiento del sistema.

Cada carpeta tiene su README y, cuando corresponde, su guía detallada. Ningún archivo vive suelto sin carpeta temática.

## Estructura del repositorio

```text
proyecto_final/
├── README.md                            ← este índice
├── curso/                               ← sílabo y logotipo oficiales del curso
│   ├── Silabo_EFSRT_Desarrollo_Capa_de_Vista.pdf
│   ├── Atlantic_City_logo.webp
│   └── README.md
├── informe/                             ← punto 1 a 15 de la estructura de entrega
│   ├── Avance_Atlantic_City.docx
│   ├── Guia_Informe_de_Avance.md
│   └── README.md
├── backlog/                             ← puntos 6 y 7
│   ├── Product_Backlog_Atlantic_City.md
│   ├── Product_Backlog_Atlantic_City.docx
│   └── README.md
├── docs/                                ← guías de producto, backlog, Scrum y verificación
│   ├── Guia_Principal_Atlantic_City.md
│   ├── Product_Backlog_Guia_Atlantic_City.md
│   ├── Scrum_Guia_Atlantic_City.md
│   ├── Registro_de_verificacion.md
│   └── README.md
├── modelado/                            ← puntos 4, 12, 14 y 15
│   ├── Atlantic_city_grupo_cinco.png
│   ├── SUBPROCESO.png
│   ├── diagramas/                       ← casos de uso, secuencia y clases, con su README
│   ├── Guia_Modelado_Bizagi_Atlantic_City.md
│   ├── Guia_Modelado_UML_Atlantic_City.md
│   └── README.md
├── prototipado/                         ← puntos 8, 9 y 10
│   ├── wireframe_manual.png
│   ├── wireframe_digital.png
│   ├── Guia_Prototipado_y_MVP.md
│   ├── README.md
│   ├── MVP/                             ← punto 9, con su guía de código
│   │   ├── index.html
│   │   ├── styles.css
│   │   ├── app.js
│   │   ├── Guia_Codigo_MVP.md
│   │   └── README.md
│   └── prototipo_navegable/             ← punto 10, con su guía de código
│       ├── index.html
│       ├── styles.css
│       ├── app.js
│       ├── Atlantic_City_Prototipo_Navegable_Archivo_unico.html
│       ├── Guia_Codigo_Prototipo_Navegable.md
│       └── README.md
└── desarrollo/                          ← punto 11
    ├── Guia_Desarrollo.md
    └── README.md
```

Los archivos originales proporcionados para lectura y consulta se conservan, sin modificaciones, en la carpeta hermana `../uploads/`. Su inventario está en `../uploads/README.md`. El registro de datos del equipo, herramientas, reglas y pendientes está en `../REGLAS_Y_DATOS_DEL_PROYECTO.md`.

## Correspondencia con la estructura de entrega

| Punto de la estructura | Dónde está |
|---|---|
| Portada y 1. Descripción del negocio | `informe/Avance_Atlantic_City.docx` |
| 2. Problema del negocio | `informe/Avance_Atlantic_City.docx` y `docs/Guia_Principal_Atlantic_City.md` |
| 3. Procesos del negocio | `informe/Avance_Atlantic_City.docx` y `docs/Guia_Principal_Atlantic_City.md` |
| 4. Diagrama de procesos en Bizagi | `modelado/` |
| 5. Metodología Scrum | `docs/Scrum_Guia_Atlantic_City.md` |
| 6. Product Backlog | `backlog/` |
| 7. Historias de usuario | `backlog/Product_Backlog_Atlantic_City.md` |
| 8. Wireframes digitales | `prototipado/wireframe_manual.png` y `wireframe_digital.png` |
| 9. MVP | `prototipado/MVP/` |
| 10. Prototipo con navegación | `prototipado/prototipo_navegable/` |
| 11. Implementación mínima | `desarrollo/Guia_Desarrollo.md` más el código de MVP y prototipo |
| 12. Casos de uso | `modelado/diagramas/Casos_de_uso.png` |
| 13. Descripción de casos de uso | `informe/Avance_Atlantic_City.docx`, CU01 a CU04 |
| 14. Diagramas de secuencia | `modelado/diagramas/Secuencia_*.png` |
| 15. Diagrama de clases | `modelado/diagramas/Clases.png` |

## Índice de guías

| Guía | Carpeta | Qué explica |
|---|---|---|
| `Guia_Principal_Atlantic_City.md` | `docs/` | Negocio, problema, funciones, participantes del proceso, reglas que no se rompen y correspondencia con la estructura |
| `Product_Backlog_Guia_Atlantic_City.md` | `docs/` | Cómo leer y refinar historias, prioridades y plan de Sprints |
| `Scrum_Guia_Atlantic_City.md` | `docs/` | Roles, ceremonias, Definition of Done, pruebas y handoff entre Developers |
| `Registro_de_verificacion.md` | `docs/` | Comprobaciones ejecutadas y su resultado |
| `Guia_Informe_de_Avance.md` | `informe/` | Contenido del Word por sección, fuentes, marcadores por completar y sincronización |
| `Guia_Modelado_Bizagi_Atlantic_City.md` | `modelado/` | Proceso AS IS, carriles, recorridos, subproceso, notación y guion de exposición |
| `Guia_Modelado_UML_Atlantic_City.md` | `modelado/` | Cómo se construyeron y leen los diagramas UML y qué no afirman |
| `Guia_Prototipado_y_MVP.md` | `prototipado/` | Wireframes, recorrido del MVP, vistas del prototipo, datos de demostración y pruebas |
| `Guia_Codigo_MVP.md` | `prototipado/MVP/` | Código del MVP función por función, reglas embebidas, validaciones y patrones reutilizables |
| `Guia_Codigo_Prototipo_Navegable.md` | `prototipado/prototipo_navegable/` | Código del prototipo: navegación, renders, formularios, CSV y patrones reutilizables |
| `Guia_Desarrollo.md` | `desarrollo/` | Arquitectura de la capa de vista, semántica HTML, CSS, JavaScript y validaciones |
| README de cada carpeta | todas | Contenido y reglas de uso de la carpeta |

## Punto de partida técnico

- **HTML, CSS y JavaScript:** base del MVP, del prototipo con navegación y de la implementación mínima.
- **Bizagi Modeler:** herramienta utilizada para las imágenes del modelado BPMN.
- **Jira y Discord:** herramientas de seguimiento y coordinación descritas en la guía Scrum del equipo.
- **Servidor estático local:** `python -m http.server` solo sirve los archivos para probar las interfaces; no es un backend del producto.

El trabajo actual se limita a la capa de vista. El lenguaje de servidor y el motor de base de datos no están definidos por el sílabo ni por la estructura de entrega; si el curso los requiere más adelante, se acordarán con el profesor antes de implementarlos.

## Versiones funcionales

- **MVP (`prototipado/MVP/`, puerto 4173):** una sola pantalla para registrar una visita o interacción, asociarla a un perfil, añadir una incidencia opcional y revisar manualmente una promoción de demostración. Muestra un resumen, conteos e historial guardados solo en el navegador.
- **Prototipo con navegación (`prototipado/prototipo_navegable/`, puerto 4174):** siete vistas conectadas (Inicio, Clientes, Visitas e interacciones, Incidencias, Segmentación, Promociones y campañas, Reportes) para demostrar la navegación entre interfaces.

Todos los registros de ejemplo están identificados como datos de demostración. No existe conexión con sistemas reales de Atlantic City ni envío externo de mensajes. La clasificación y la elegibilidad no se calculan automáticamente; la automatización es opcional y no está implementada.

Los wireframes de Inicio/Dashboard son una propuesta visual amplia. **No representan el alcance del MVP sencillo**, aunque sí anticipan la organización de pantallas del prototipo con navegación.

## Lectura recomendada

1. `informe/Avance_Atlantic_City.docx` — informe con los quince puntos de la estructura; su guía indica qué completar antes de entregar.
2. `docs/Guia_Principal_Atlantic_City.md` — objetivo, procesos, participantes y decisiones del producto.
3. `backlog/Product_Backlog_Atlantic_City.md` — fuente de consulta de las 13 historias de usuario y su prioridad.
4. `docs/Scrum_Guia_Atlantic_City.md` — organización del trabajo de los cuatro Developers con el profesor como PO.
5. `modelado/Guia_Modelado_Bizagi_Atlantic_City.md` y `modelado/Guia_Modelado_UML_Atlantic_City.md` — proceso y sistema modelados, y cómo explicarlos.
6. `prototipado/Guia_Prototipado_y_MVP.md` — wireframes, MVP y prototipo con navegación.
7. `prototipado/MVP/Guia_Codigo_MVP.md` y `prototipado/prototipo_navegable/Guia_Codigo_Prototipo_Navegable.md` — el código explicado en detalle, con ejemplos de uso y de reutilización.
8. `desarrollo/Guia_Desarrollo.md` — conceptos y patrones de la capa de vista.
