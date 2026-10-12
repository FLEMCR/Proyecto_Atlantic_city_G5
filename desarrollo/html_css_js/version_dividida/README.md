# Atlantic City — MVP dividido

## Ejecutar

La aplicación está hecha con HTML, CSS y JavaScript sin dependencias externas. Sirve esta carpeta con un servidor estático y abre la dirección local en el navegador:

```bash
python -m http.server 4173
```

Abre `http://localhost:4173`. Mantén el mismo origen/navegador para conservar los registros, que se guardan en `localStorage`.

## Archivos

- `index.html`: estructura y formularios.
- `styles.css`: presentación adaptable.
- `app.js`: navegación, validaciones locales, registros, reportes y exportación CSV.

## Alcance y límites

Los perfiles y registros precargados están identificados como datos de demostración. Los formularios permiten mantener perfiles, registrar visitas/interacciones e incidencias, consultar los cuatro criterios, escribir una clasificación manual, separar campañas de promociones, guardar una revisión manual de elegibilidad y exportar registros locales.

No hay integración con sistemas de Atlantic City, base de datos, SQL Server ni canal de comunicación externo. No se calculan reglas automáticas de elegibilidad ni segmentos; «Aplica» crea únicamente una constancia local, no un mensaje enviado. La automatización opcional no está implementada. Consulta la [guía de desarrollo](../../../desarrollo/Guia_Desarrollo.md) para estudiar los archivos y la [guía de prototipado](../../../prototipado/Guia_Prototipado_y_MVP.md) para revisar el recorrido, las decisiones pendientes del Product Owner y la diferencia con el MVP sencillo vigente.
