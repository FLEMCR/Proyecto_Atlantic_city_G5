# Modelado BPMN y UML

Corresponde a los puntos 4, 12, 14 y 15 de la estructura de entrega: el diagrama del proceso actual (AS IS) hecho en Bizagi Modeler y los diagramas UML del sistema.

- `Atlantic_city_grupo_cinco.png`: diagrama principal con los recorridos de atención, campaña, reporte y automatización candidata, organizados en un pool y seis carriles.
- `SUBPROCESO.png`: detalle del subproceso de segmentación de clientes, con los cuatro criterios y la tarea de clasificación.
- `diagramas/`: diagrama de casos de uso, tres diagramas de secuencia y el diagrama de clases básico.
- `Atlantic_City_UML.mdj`: modelo editable de StarUML con los cinco diagramas (casos de uso, clases y las tres secuencias con sus fragmentos alt); es el archivo que el equipo abre para mantener los diagramas.
- `Casos_de_Uso_Atlantic_City_version_del_equipo.docx`: el documento de casos de uso original corregido por el equipo, con las cinco figuras; el porqué de cada corrección está en `../docs/Guia_Correcciones_UML_Atlantic_City.md`.
- `../docs/Guia_Diagramas_de_Secuencia_Atlantic_City.md`: qué es una secuencia, las cuatro lifelines, lectura mensaje por mensaje, StarUML clic a clic y verificación.
- `casos_de_uso/`: especificación de CU01 a CU04 con la plantilla del profesor (secuencia normal, excepciones, rendimiento, frecuencia, importancia, urgencia), datos de entrada y salida, catálogos RN, EXC y MSJ, y la guía de casos de uso con los pasos de StarUML, ambas en `../docs/`.
- `Guia_Bizagi_un_inicio_un_fin.md` y `Boceto_Bizagi_un_inicio_un_fin.png`: pedido del profesor de simplificar el diagrama principal a un solo evento de inicio y uno de fin: tabla de elementos, flujos, paso a paso en Bizagi Modeler, textos de reemplazo para la sección 4 del informe y la distinción AS-IS / TO-BE de la semana 12. El boceto es referencia para el redibujo, no entregable.
- `../docs/Guia_Modelado_Bizagi_Atlantic_City.md`: qué demuestra el modelo BPMN terminado, actores y carriles, lectura de actividades y decisiones, secuencia del proceso, subproceso, elementos BPMN, guion de exposición, preguntas frecuentes y cómo reconstruirlo en Bizagi Modeler.
- `../docs/Guia_Modelado_UML_Atlantic_City.md`: cómo se construyeron y cómo se leen los diagramas de casos de uso, secuencia y clases, y qué no se debe afirmar con ellos.

Las imágenes BPMN conservan los archivos recibidos. El diagrama representa el proceso y no prueba que haya una integración real o una función implementada. El archivo editable es un `.bpm` (formato binario de Bizagi); para compartirlo como texto se exporta a BPMN 2.0 desde Export/Import → Export → BPMN. Para explicar el recorrido, leer las guías y confirmar las reglas pendientes con el profesor/PO.
