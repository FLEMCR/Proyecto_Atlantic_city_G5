# MVP sencillo — Atlantic City

MVP local de una sola pantalla para probar el recorrido de registrar una visita o interacción, asociarla con un perfil, incluir una incidencia opcional y revisar manualmente una promoción de demostración.

## Ejecutar

Desde esta carpeta inicia un servidor estático:

```bash
python -m http.server 4173
```

Abre `http://localhost:4173`. Mantén el mismo navegador y origen para conservar los registros locales.

## Archivos

- `index.html`: estructura, formulario, resumen de atención, conteos e historial.
- `styles.css`: presentación adaptable a pantallas pequeñas.
- `app.js`: validaciones del prototipo, datos iniciales, eventos, actualización de la interfaz y persistencia local.
- `Guia_Codigo_MVP.md`: guía detallada del código, función por función, con ejemplos de uso y de reutilización en otros proyectos.

## Límites

Los datos son de demostración y se guardan en `localStorage` del navegador. No hay backend, base de datos central, conexión con Atlantic City, envío de mensajes ni automatización. La elegibilidad y la clasificación son manuales; un resultado «Aplica» crea solo una constancia local. La visita se conserva aunque no exista incidencia o promoción.

Para el detalle de wireframes, comportamiento y pruebas, consulta `../Guia_Prototipado_y_MVP.md`. Para entender el código por dentro, consulta `Guia_Codigo_MVP.md`.
