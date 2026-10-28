# Atlantic City

## Sistema de Gestión de Clientes

Repositorio de trabajo del proyecto **Modernización del Sistema de Gestión de Clientes de Atlantic City**. Reúne el informe de avance, el Product Backlog acordado por el equipo, todas las guías del proyecto, el material del profesor, el modelo BPMN y UML, los casos de uso documentados, los wireframes, el MVP y el prototipo con navegación.

El sílabo y la estructura de entrega propuesta por el profesor orientan el trabajo. El profesor cumple el rol de Product Owner (PO) y el equipo está formado por cuatro Developers. Las prioridades y reglas de negocio se confirman con el PO antes de incorporarlas como comportamiento del sistema.

## De un vistazo

| Carpeta | Qué es | Abrir primero |
|---|---|---|
| `informe/` | El entregable: Word con los quince puntos de la estructura | `informe/Avance_Atlantic_City.docx` |
| `docs/` | Todas las guías del proyecto y el registro de verificación | `docs/Guia_Principal_Atlantic_City.md` y `docs/README.md` |
| `backlog/` | Product Backlog con 13 historias y plan de Sprints | `backlog/Product_Backlog_Atlantic_City.md` |
| `modelado/` | BPMN, diagramas UML y especificación de casos de uso | `modelado/README.md` |
| `prototipado/` | Wireframes, MVP y prototipo con navegación (código ejecutable) | `prototipado/README.md` y los de MVP y prototipo |
| `curso/` | Sílabo, logotipo y material complementario del profesor | `curso/material_complementario/README.md` |
| `presentacion/` | PPT de la exposición y guion de 12 minutos para cuatro expositores | `presentacion/Guion_Exposicion_Atlantic_City.md` |

Regla de orden: ninguna carpeta tiene archivos sueltos sin tema, todas tienen README y todas las guías viven juntas en `docs/` para encontrarlas a la primera.

## Estructura del repositorio

```text
proyecto_final/
├── README.md                            ← este índice
├── curso/                               ← material oficial del curso
│   ├── Silabo_EFSRT_Desarrollo_Capa_de_Vista.pdf
│   ├── Atlantic_City_logo.webp
│   ├── material_complementario/         ← 10 PDF de casos de uso, secuencias, clases y StarUML
│   └── README.md
├── informe/                             ← puntos 1 a 15 de la estructura de entrega
│   ├── Avance_Atlantic_City.docx
│   └── README.md
├── backlog/                             ← puntos 6 y 7
│   ├── Product_Backlog_Atlantic_City.md
│   ├── Product_Backlog_Atlantic_City.docx
│   └── README.md
├── docs/                                ← todas las guías del proyecto
│   ├── Guia_Principal_Atlantic_City.md
│   ├── Guia_Materiales_del_Curso_Atlantic_City.md   ← digesto de todos los PDF del curso
│   ├── Product_Backlog_Guia_Atlantic_City.md
│   ├── Scrum_Guia_Atlantic_City.md
│   ├── Guia_Modelado_Bizagi_Atlantic_City.md
│   ├── Guia_Modelado_UML_Atlantic_City.md
│   ├── Guia_Casos_de_Uso_Atlantic_City.md
│   ├── Guia_Prototipado_y_MVP.md
│   ├── Guia_Codigo_MVP.md
│   ├── Guia_Codigo_Prototipo_Navegable.md
│   ├── Guia_Desarrollo.md
│   ├── Guia_Informe_de_Avance.md
│   ├── Registro_de_verificacion.md
│   └── README.md
├── modelado/                            ← puntos 4, 12, 14 y 15
│   ├── Atlantic_city_grupo_cinco.png
│   ├── SUBPROCESO.png
│   ├── casos_de_uso/                    ← especificación CU01-CU04 con la plantilla del profesor
│   ├── diagramas/                       ← casos de uso, secuencia y clases
│   └── README.md
├── presentacion/                        ← PPT de la exposición y guion por expositor
└── prototipado/                         ← puntos 8, 9 y 10
    ├── wireframe_manual.png
    ├── wireframe_digital.png
    ├── README.md
    ├── MVP/                             ← punto 9: código ejecutable
    └── prototipo_navegable/             ← punto 10: código ejecutable
```

Los archivos originales proporcionados para lectura y consulta se conservan, sin modificaciones, en la carpeta hermana `../uploads/`. Su inventario está en `../uploads/README.md`. El registro de datos del equipo, herramientas, reglas y pendientes está en `../REGLAS_Y_DATOS_DEL_PROYECTO.md`.

## Correspondencia con la estructura de entrega

| Punto de la estructura | Dónde está |
|---|---|
| Portada y 1. Descripción del negocio | `informe/Avance_Atlantic_City.docx` |
| 2. Problema del negocio | `informe/Avance_Atlantic_City.docx` y `docs/Guia_Principal_Atlantic_City.md` |
| 3. Procesos del negocio | `informe/Avance_Atlantic_City.docx` y `docs/Guia_Principal_Atlantic_City.md` |
| 4. Diagrama de procesos en Bizagi | `modelado/` y `docs/Guia_Modelado_Bizagi_Atlantic_City.md` |
| 5. Metodología Scrum | `docs/Scrum_Guia_Atlantic_City.md` |
| 6. Product Backlog | `backlog/` |
| 7. Historias de usuario | `backlog/Product_Backlog_Atlantic_City.md` |
| 8. Wireframes digitales | `prototipado/wireframe_manual.png` y `prototipado/wireframe_digital.png` |
| 9. MVP | `prototipado/MVP/` y `docs/Guia_Codigo_MVP.md` |
| 10. Prototipo con navegación | `prototipado/prototipo_navegable/` y `docs/Guia_Codigo_Prototipo_Navegable.md` |
| 11. Implementación mínima | `docs/Guia_Desarrollo.md` más el código de MVP y prototipo |
| 12. Casos de uso | `modelado/diagramas/Casos_de_uso.png` |
| 13. Descripción de casos de uso | `informe/Avance_Atlantic_City.docx` con la plantilla del profesor; versión extendida en `modelado/casos_de_uso/` y `docs/Guia_Casos_de_Uso_Atlantic_City.md` |
| 14. Diagramas de secuencia | `modelado/diagramas/Secuencia_registrar_cliente.png`, `modelado/diagramas/Secuencia_registrar_visita.png` y `modelado/diagramas/Secuencia_evaluar_promocion.png` |
| 15. Diagrama de clases | `modelado/diagramas/Clases.png` |

## Índice de guías (todas en `docs/`)

| Guía | Qué enseña |
|---|---|
| `docs/Guia_Principal_Atlantic_City.md` | Negocio, problema, funciones, participantes del proceso, reglas que no se rompen y correspondencia con la estructura |
| `docs/Guia_Materiales_del_Curso_Atlantic_City.md` | Digesto de todos los PDF del curso: qué es cada uno, qué ideas deja y cómo se usa en el proyecto, desde el ABP hasta StarUML |
| `docs/Product_Backlog_Guia_Atlantic_City.md` | Cómo leer y refinar historias, prioridades y plan de Sprints |
| `docs/Scrum_Guia_Atlantic_City.md` | Roles, ceremonias, Definition of Done, pruebas y handoff entre Developers |
| `docs/Guia_Modelado_Bizagi_Atlantic_City.md` | Proceso AS IS, carriles, recorridos, subproceso, notación y guion de exposición |
| `docs/Guia_Modelado_UML_Atlantic_City.md` | Cómo se construyeron y leen los diagramas UML, su alineación con el material del curso y qué no afirman |
| `docs/Guia_Casos_de_Uso_Atlantic_City.md` | Plantilla del profesor campo por campo, trazabilidad con backlog y código, y StarUML paso a paso |
| `docs/Guia_Prototipado_y_MVP.md` | Wireframes, recorrido del MVP, vistas del prototipo, datos de demostración y pruebas |
| `docs/Guia_Codigo_MVP.md` | Código del MVP función por función, reglas embebidas, validaciones y patrones reutilizables |
| `docs/Guia_Codigo_Prototipo_Navegable.md` | Código del prototipo: navegación, renders, formularios, CSV y patrones reutilizables |
| `docs/Guia_Desarrollo.md` | Arquitectura de la capa de vista, semántica HTML, CSS, JavaScript y validaciones |
| `docs/Guia_Informe_de_Avance.md` | Contenido del Word por sección, fuentes, marcadores por completar y sincronización |
| `docs/Registro_de_verificacion.md` | Comprobaciones ejecutadas y su resultado |

Documentos de trabajo que no son guías y viven junto a su material: `modelado/casos_de_uso/Especificacion_Casos_de_Uso_Atlantic_City.md` y `curso/material_complementario/` con su README.

## Punto de partida técnico

- **HTML, CSS y JavaScript:** base del MVP, del prototipo con navegación y de la implementación mínima.
- **Bizagi Modeler:** herramienta utilizada para las imágenes del modelado BPMN.
- **StarUML:** herramienta del equipo para los diagramas UML; los pasos están en `docs/Guia_Casos_de_Uso_Atlantic_City.md`.
- **Jira y Discord:** herramientas de seguimiento y coordinación descritas en la guía Scrum del equipo.
- **Servidor estático local:** `python -m http.server` solo sirve los archivos para probar las interfaces; no es un backend del producto.

El trabajo actual se limita a la capa de vista. El lenguaje de servidor y el motor de base de datos no están definidos por el sílabo ni por la estructura de entrega; si el curso los requiere más adelante, se acordarán con el profesor antes de implementarlos.

## Versiones funcionales

- **MVP (`prototipado/MVP/`, puerto 4173):** una sola pantalla para registrar una visita o interacción, asociarla a un perfil, añadir una incidencia opcional y revisar manualmente una promoción de demostración. Muestra un resumen, conteos e historial guardados solo en el navegador.
- **Prototipo con navegación (`prototipado/prototipo_navegable/`, puerto 4174):** siete vistas conectadas (Inicio, Clientes, Visitas e interacciones, Incidencias, Segmentación, Promociones y campañas, Reportes) para demostrar la navegación entre interfaces.

Todos los registros de ejemplo están identificados como datos de demostración. No existe conexión con sistemas reales de Atlantic City ni envío externo de mensajes. La clasificación y la elegibilidad no se calculan automáticamente; la automatización es opcional y no está implementada.

Los wireframes de Inicio/Dashboard son una propuesta visual amplia. **No representan el alcance del MVP sencillo**, aunque sí anticipan la organización de pantallas del prototipo con navegación.

## Lectura recomendada

1. `docs/Guia_Materiales_del_Curso_Atlantic_City.md` — para absorber el tema: qué aporta cada PDF del curso y dónde se usó.
2. `informe/Avance_Atlantic_City.docx` — informe con los quince puntos; su guía indica qué completar antes de entregar.
3. `docs/Guia_Principal_Atlantic_City.md` — objetivo, procesos, participantes y decisiones del producto.
4. `backlog/Product_Backlog_Atlantic_City.md` — fuente de consulta de las 13 historias de usuario y su prioridad.
5. `docs/Scrum_Guia_Atlantic_City.md` — organización del trabajo de los cuatro Developers con el profesor como PO.
6. `docs/Guia_Modelado_Bizagi_Atlantic_City.md` y `docs/Guia_Modelado_UML_Atlantic_City.md` — proceso y sistema modelados, y cómo explicarlos.
7. `modelado/casos_de_uso/Especificacion_Casos_de_Uso_Atlantic_City.md` y `docs/Guia_Casos_de_Uso_Atlantic_City.md` — casos de uso con el formato del profesor y su guía con StarUML.
8. `docs/Guia_Prototipado_y_MVP.md`, `docs/Guia_Codigo_MVP.md` y `docs/Guia_Codigo_Prototipo_Navegable.md` — wireframes, recorrido y código explicado en detalle.
9. `docs/Guia_Desarrollo.md` y `docs/Guia_Informe_de_Avance.md` — patrones de la capa de vista y mantenimiento del Word.
