# Aplicación final Atlantic City

Aplicación web del proyecto, con la estructura de la hoja de ruta del profesor: `ATLANTIC_CITY/` con `ATLANTIC_CITY/index.html`, `ATLANTIC_CITY/css/estilos.css`, `ATLANTIC_CITY/js/` (principal, clientes, visitas, promociones, reportes), `ATLANTIC_CITY/datos/datos_iniciales.json` e `ATLANTIC_CITY/imagenes/`. Es la base «ideal» 100 % funcional sobre la que el equipo refina por sprints (semanas 8 a 11): todo módulo, validación y mensaje de esta carpeta debe seguir coincidiendo con los catálogos de la especificación.

## Cómo se abre

Doble clic en `ATLANTIC_CITY/index.html` (funciona sin servidor porque no usa `fetch()` de archivos locales) o con cualquier servidor estático, por ejemplo `python3 -m http.server` en esta carpeta.

## Qué incluye

- **Siete vistas** con menú lateral: Inicio (dashboard dinámico), Clientes, Visitas e interacciones, Incidencias, Segmentación, Promociones y campañas, y Reportes.
- **CRUD donde aplica**: alta y edición de perfiles, visitas/interacciones con incidencia opcional y seguimiento, etiqueta manual de segmentación (RN04), campañas y promociones como registros distintos (RN05), revisión de elegibilidad manual con constancia local solo si «Aplica» (RN02/RN03). Los perfiles no se eliminan (RN01); campañas y promociones se eliminan solo sin vínculos y tras confirmación.
- **Validaciones con los mensajes literales del catálogo MSJ** (MSJ01–MSJ32): el texto del código y el de la especificación son idénticos.
- **Reporte con filtros** (periodo, cliente, tipo) y exportación CSV de exactamente las filas en pantalla (HU-12, MSJ25, EXC07).
- **Respaldo JSON** exportar/importar (MSJ29/MSJ30) y restablecimiento de datos de demostración (MSJ31).

## Persistencia (localStorage)

- Opción 2 de la guía del profesor: **una clave jerárquica** `atlantic_city_app_v1` con un objeto `{clientes, visitas, incidencias, campanas, promociones, revisiones, constancias}`.
- **Migración**: si la clave final no existe, la app intenta leer `atlanticCityMvp_v3` (prototipo) y `atlanticCitySimpleMvp_v1` (MVP) antes de sembrar.
- **Semilla de demostración**: tres clientes AC-001 a AC-003, dos atenciones ATT-0001/ATT-0002, una campaña CAMP-0001 y una promoción PROMO-0001, todos con `demo: true` y etiqueta visible «demo» (RN08). `ATLANTIC_CITY/datos/datos_iniciales.json` es la copia de referencia de esa semilla; la app no la descarga por `fetch()`, la lleva en `ATLANTIC_CITY/js/principal.js`.
- Fallo de persistencia → MSJ06 (EXC06).

## Reparto sugerido por sprint

- Dev 1: `ATLANTIC_CITY/index.html` y `ATLANTIC_CITY/css/estilos.css` (Sprint 1, interfaz y menú).
- Dev 2: `ATLANTIC_CITY/js/principal.js` y navegación (Sprint 1) y `ATLANTIC_CITY/js/reportes.js` (Sprint 3).
- Dev 3: `ATLANTIC_CITY/js/clientes.js` y `ATLANTIC_CITY/js/visitas.js` con sus validaciones (Sprints 1 y 2).
- Dev 4: `ATLANTIC_CITY/js/promociones.js`, integración y pruebas (Sprints 2 y 3).
- Todos: refinamientos, pruebas de la matriz de `../docs/Guia_Plan_Final_4_Semanas.md` y verificación de que los diagramas correspondan con la app (Sprint 4).

## Regla de mantenimiento

Si se cambia un mensaje en el código, se cambia en la especificación (`../modelado/casos_de_uso/Especificacion_Casos_de_Uso_Atlantic_City.md`), en el punto 13.8 del informe y en el guion; si se añade uno nuevo, se numera a continuación del último MSJ del catálogo.
