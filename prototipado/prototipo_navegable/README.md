# Prototipo con navegación — Atlantic City

Prototipo de varias pantallas conectadas entre sí. Corresponde al punto 10 de la estructura de entrega propuesta por el profesor: las pantallas del wireframe se conectan para demostrar que se entiende la navegación entre interfaces.

## Ejecutar

La aplicación está hecha con HTML, CSS y JavaScript sin dependencias externas. Sirve esta carpeta con un servidor estático y abre la dirección local en el navegador:

```bash
python -m http.server 4174
```

Abre `http://localhost:4174`. Mantén el mismo origen y navegador para conservar los registros, que se guardan en `localStorage`.

## Archivos

- `index.html`: estructura de las siete vistas y de sus formularios.
- `styles.css`: presentación, navegación lateral y adaptación a pantallas pequeñas.
- `app.js`: cambio de vista, validaciones locales, registros, reportes y exportación CSV.
- `Atlantic_City_Prototipo_Navegable_Archivo_unico.html`: el mismo prototipo reunido en un solo archivo, para abrirlo con doble clic o adjuntarlo sin servidor.
- `Guia_Codigo_Prototipo_Navegable.md`: guía detallada del código: navegación entre vistas, renders, formularios, exportación CSV y patrones reutilizables.

## Recorrido de navegación

Inicio → Clientes (registrar, buscar, filtrar por clasificación, actualizar y ver ficha) → Visitas e interacciones → Incidencias → Segmentación (consulta de los cuatro criterios y clasificación manual) → Promociones y campañas → Reportes.

El menú lateral cambia de vista sin recargar la página y los accesos directos del Inicio llevan a la sección correspondiente.

## Diferencia con el MVP

| | MVP (`../MVP/`) | Prototipo con navegación (esta carpeta) |
|---|---|---|
| Pantallas | Una sola | Siete vistas conectadas |
| Propósito | Demostrar un recorrido mínimo funcional | Demostrar la navegación entre interfaces |
| Alcance | Registrar una visita o interacción con incidencia y revisión manual opcionales | Perfiles, visitas, incidencias, criterios, campañas, promociones y reportes |

Ninguna de las dos versiones reemplaza a la otra: el MVP muestra el mínimo que se implementa y el prototipo muestra cómo se conectan las pantallas.

## Límites

Los datos son de demostración y se guardan solo en el navegador. No hay backend, base de datos central, autenticación, integración con sistemas de Atlantic City ni envío real de mensajes. La clasificación y la elegibilidad se ingresan manualmente; un resultado «Aplica» crea únicamente una constancia local.

Para el detalle del recorrido, las pruebas manuales y las decisiones pendientes del Product Owner, consulta la [guía de prototipado](../Guia_Prototipado_y_MVP.md). Para estudiar el código por dentro, consulta `Guia_Codigo_Prototipo_Navegable.md`; para la visión general de la capa de vista, la [guía de desarrollo](../../desarrollo/Guia_Desarrollo.md).
