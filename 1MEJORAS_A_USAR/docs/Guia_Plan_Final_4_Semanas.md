# Plan del final — cuatro semanas según la hoja de ruta del profesor

Fuentes: `Hoja de ruta del proyecto.pdf` (Sprints de las semanas 8 a 11 y presentación en la 12), `Almacenamiento local.pdf`, `LocalStorage II.pdf`, `LocalStorage III.pdf` y la ficha de evaluación del parcial (16/20). Este plan traduce esa hoja de ruta al proyecto Atlantic City sin inventar alcance: todo módulo sale de una historia de usuario existente.

## Punto de partida favorable

El MVP y el prototipo ya usan localStorage con datos de demostración, validaciones con sus mensajes MSJ y las reglas RN en el código: el mecanismo de persistencia que el profesor enseña en sus tres PDFs es exactamente el que el equipo ya usa. El trabajo de las cuatro semanas es convertir el prototipo en la aplicación final con la estructura y el alcance que pide la hoja de ruta (CRUD completo, dashboard dinámico y reportes), no empezar de cero. La carpeta `aplicacion/ATLANTIC_CITY/` ya contiene esa base funcional completa (siete vistas, validaciones con el catálogo MSJ01–MSJ32, migración desde el prototipo y el MVP, semilla demo y respaldo JSON): los sprints se dedican a refinarla módulo por módulo, pasar la matriz de pruebas y completar las evidencias, no a empezarla.

## La aplicación final y su organización

Carpeta nueva del repositorio: `proyecto_final/aplicacion/ATLANTIC_CITY/`, con la estructura que recomienda la hoja de ruta:

```
ATLANTIC_CITY/
├── index.html
├── css/estilos.css
├── js/
│   ├── principal.js      navegación, dashboard, capa de almacenamiento y migración
│   ├── clientes.js       módulo 1: perfiles (HU-01 a HU-04)
│   ├── visitas.js        módulo 2: visitas, interacciones e incidencias (HU-05 y HU-06)
│   ├── promociones.js    módulo 3: segmentación, campañas, promociones y elegibilidad (HU-07 a HU-11)
│   └── reportes.js       módulo 4: consultas, filtros, CSV y respaldo JSON (HU-12)
├── datos/datos_iniciales.json   datos de demostración (RN08)
└── imagenes/
```

Los datos iniciales se incorporan desde el código al primer arranque (el profesor advierte no leer el JSON local con `fetch()` por las restricciones del navegador; si se quisiera, se usa un servidor local sencillo).

**localStorage (decisión adoptada):** se mantiene la opción 2 de `LocalStorage II.pdf`, que el prototipo ya usa: una sola clave con estructura por módulo (`atlantic_city_app_v1` con propiedades `clientes`, `visitas`, `incidencias`, `campanas`, `promociones`, `revisiones`, `constancias`). Al abrir, se migra desde la clave anterior del prototipo (`atlanticCityMvp_v3`) con el mismo patrón que ya existe. Patrones obligatorios del profesor (LocalStorage III): lectura con `JSON.parse(localStorage.getItem(...)) || []`, guardado con `trim()` y validación previa, tablas renderizadas dinámicamente, y exportar/importar respaldo JSON con `Blob` y `FileReader` (LocalStorage II) en la vista de reportes: sirve para llevar la demo a cualquier máquina y para mostrar la evidencia al profesor. Para inspeccionar: F12 → Application → Local Storage.

## Semana por semana

### Sprint 1 — Semana 8: interfaz y módulo de clientes
Objetivo del profesor: estructura general, menú, dashboard inicial y primer módulo CRUD.
En Atlantic City: index.html + menú lateral con las secciones del wireframe; dashboard v1 con conteos; módulo clientes completo (buscar, registrar, editar, consultar ficha con historial vacío); validaciones RN07/EXC01/EXC02 con sus mensajes MSJ07/MSJ01/MSJ17/MSJ18; tabla con búsqueda por texto. Historias: HU-01 a HU-04.
Extra de arranque (antes de programar, sesión de 30 minutos del profesor): abrir informe, problema y objetivo, backlog, las tres HU prioritarias (HU-01, HU-02, HU-05), wireframes y decidir la primera funcionalidad. Esa misma semana: redibujar el Bizagi simplificado con la guía `../modelado/Guia_Bizagi_un_inicio_un_fin.md`.
Evidencia: navegación completa + alta de un cliente con duplicado rechazado, en video o demo en vivo.

### Sprint 2 — Semana 9: módulo de visitas e incidencias e integración
Objetivo del profesor: segundo módulo integrado con el primero.
En Atlantic City: registro de visita o interacción eligiendo el cliente desde perfiles ya registrados (integración real con el módulo 1); incidencia opcional con descripción obligatoria (EXC04/MSJ02); el historial del cliente muestra sus atenciones; RN01 visible: la atención se guarda sin incidencia ni promoción; RN06: el conteo de frecuencia suma solo tipo Visita. Historias: HU-05 y HU-06.
Evidencia: registrar cliente → registrarle visita → verla en su ficha.

### Sprint 3 — Semana 10: integración general, dashboard y reportes
Objetivo del profesor: indicadores dinámicos, tablas de consulta, filtros y reportes.
En Atlantic City: vista de segmentación (cuatro criterios + etiqueta manual, RN04); campañas y promociones como registros distintos (RN05) con elegibilidad manual (RN02/RN03/MSJ10/MSJ11); dashboard dinámico: perfiles, visitas vs interacciones, incidencias, constancias locales, y que cambien al guardar o editar; reportes con filtros por periodo y cliente, exportación CSV exacta a pantalla (HU-12/EXC07/MSJ25) y respaldo JSON exportar/importar. Historias: HU-07 a HU-12.
Evidencia: guardar una revisión «Aplica» y ver subir el contador de constancias y aparecer la fila en el reporte.

### Sprint 4 — Semana 11: pruebas, correcciones y versión definitiva
Objetivo del profesor: probar todo, corregir, alinear diagramas y completar el informe.
En Atlantic City: matriz de pruebas completa (caso válido, obligatorios vacíos, duplicado, dato ausente por formulario); persistencia (cerrar y reabrir el navegador, exportar/importar respaldo); revisión de que los diagramas UML digan lo mismo que la aplicación (actividad 8 del profesor); informe final actualizado (sección de pruebas y resultados); demo ensayada. HU-13 entra solo si el PO la prioriza.
Entregables del profesor: aplicación corregida, matriz de pruebas, registro de errores y soluciones, informe actualizado, evidencias.

### Semana 12 — Presentación final
Los nueve puntos del profesor, con el Bizagi simplificado (AS-IS y TO-BE), la matriz de trazabilidad completa, la demo en vivo sobre la aplicación publicada y las conclusiones y recomendaciones del equipo.

## Modificar y eliminar «cuando corresponda» (decisión documentada)

La hoja de ruta exige modificar y eliminar información cuando corresponda. Criterio del equipo, pendiente de un visto bueno del PO:

- Se edita: perfil del cliente, campaña, promoción, clasificación manual y notas de seguimiento de incidencias.
- Se elimina con confirmación: campañas y promociones sin registros vinculados, y los datos de demostración completos (botón «limpiar datos de demo», patrón del ejemplo del profesor).
- No se elimina: visitas, interacciones, incidencias y constancias, porque la regla RN01 conserva el historial de atención; borrarlo contradeciría una regla confirmada. Esta justificación va escrita en el informe.

## Roles de programación (todos programan)

| Rol hoja de ruta | Integrante | Foco |
|---|---|---|
| Dev 1 — interfaz HTML y CSS | Luis Coloma | estructura, menú, dashboard, estilos |
| Dev 2 — funcionalidades JavaScript | Salomón Fernández | lógica de los módulos y formularios |
| Dev 3 — datos y validaciones | Christian Huapaya | capa localStorage, migración, validaciones y mensajes |
| Dev 4 — integración y pruebas | Daniel Asmat | integración entre módulos, matriz de pruebas, evidencias |
| Scrum Master (rota) | Luis Coloma | ficha semanal y tablero |
| Product Owner | Mg. Víctor Andrade Soto | prioriza y confirma reglas pendientes |

## Ficha obligatoria de cada Sprint (una por semana)

Archivo: `fichas/Ficha_Sprint_1_Semana_8.md` (plantilla ya creada; se copia una por semana), con estos siete puntos exactos del profesor: 1) nombre del Sprint, 2) objetivo, 3) actividades realizadas, 4) funcionalidades implementadas, 5) problemas encontrados, 6) evidencias de funcionamiento, 7) actividades pendientes. Más la lista de control: se cumplió el objetivo; las funcionalidades funcionan; se realizaron pruebas; se actualizaron las historias; se guardaron capturas; se actualizó el informe; participaron todos. Regla del profesor: una funcionalidad que solo aparece dibujada no se considera terminada.

## Plantilla de matriz de pruebas (Sprint 4)

| Formulario u operación | Caso | Resultado esperado (mensaje o regla) | Resultado obtenido | Evidencia |
|---|---|---|---|---|
| Alta de cliente | identificador duplicado | MSJ07, foco al campo, no duplica (RN07/EXC02) | | |
| Alta de cliente | obligatorios vacíos | MSJ01, no guarda (EXC01) | | |
| Visita | sin cliente válido | MSJ08, no registra (EXC03) | | |
| Visita con incidencia | sin descripción | MSJ02, no registra (EXC04) | | |
| Visita sin promoción | caso válido | se conserva en historial (RN01/MSJ14 o MSJ19) | | |
| Elegibilidad | sin resultado | MSJ03, foco al resultado (EXC05) | | |
| Elegibilidad «Aplica» | caso válido | constancia local, sin mensaje externo (RN03/MSJ10 o MSJ12) | | |
| Elegibilidad «No aplica» | caso válido | sin comunicación (RN02/MSJ11 o MSJ13) | | |
| Reporte CSV | exportar | filas iguales a la pantalla (MSJ25); si el navegador bloquea, EXC07 | | |
| Persistencia | cerrar y reabrir navegador | los registros siguen; F12 → Application los muestra | | |

Registro de errores: tabla con ID, descripción, dónde se detectó, solución y fecha; se mantiene vivo desde el Sprint 1.

## Criterios de terminado del profesor y estado actual

| Criterio | Hoy |
|---|---|
| Interfaz organizada y coherente | sí (prototipo) |
| Menú de navegación funcional | sí |
| Dashboard | sí, estático → dinámico en Sprint 3 |
| Módulos del alcance | parciales → completos en Sprints 1 a 3 |
| Registrar y consultar | sí |
| Modificar y eliminar cuando corresponda | edición sí; eliminación según la decisión documentada → Sprint 1 a 3 |
| Validaciones | sí |
| Conserva los datos (localStorage) | sí |
| Reportes o indicadores | CSV sí; indicadores dinámicos en Sprint 3 |
| Probado | matriz de pruebas en Sprint 4 |
| Documentación y diagramas | sí; Bizagi por simplificar y AS-IS por dibujar |
| Demostrable en exposición | sí (Netlify) |

## Informe: qué se actualiza cada semana (tabla del profesor)

El informe que se actualiza es `../informe/Atlantic_City_PARCIAL_G5.docx` (crece hasta volverse el informe final): semana 8, sección 4 con el Bizagi simplificado y el AS-IS; semanas 9 y 10, las secciones de MVP y prototipo pasan a describir la aplicación final y sus módulos; semana 11, nueva sección de pruebas y resultados con la matriz; semana 12, conclusiones y recomendaciones. Las secciones UML se tocan solo si la aplicación cambia algo que el diagrama afirma.
