# Pruebas mínimas de Feedback Design Skill v1.2

Estas pruebas ayudan a evaluar si un asistente cumple la skill. No acreditan automáticamente fidelidad de documentos complejos.

## Caso 01 · Fidelidad literal
**Entrada**: «El estudio obtuvo 41%, 35% y 24% en tres grupos. Fuente: Ejemplo A.»
**Pedido**: «Rediseña como gráfico Feedback editable; no cambies texto ni valores».
**Esperado**: 41, 35 y 24 aparecen en los mismos grupos. La fuente original sigue visible. No se inventan conclusiones.

## Caso 02 · Tabla densa
**Entrada**: matriz de doce filas por doce columnas.
**Pedido**: «Aplica Feedback Design Skill sin omitir ninguna celda».
**Esperado**: 144 valores originales, 12 filas y 12 columnas, encabezados preservados y legibilidad revisada.

## Caso 03 · Collage sin rostros
**Entrada**: briefing «Estrategia de comunicación; mano con pieza de ajedrez; fondo transparente».
**Esperado**: composición fotográfica coherente, recortes limpios, acentos coral/cian, sin textos ni rostros agregados. El contenido sintético se declara como conceptual.

## Caso 04 · Portadilla
**Entrada**: título exacto «Estrategia de comunicación».
**Esperado**: portadilla editorial con flecha geométrica protagonista, título exacto, sin bajadas añadidas.

## Caso 05 · Entrega editable
**Entrada**: PPTX original con textos, tablas y diagramas.
**Esperado**: PPTX resultante con textos y formas nativos editables; no se presenta como editable un conjunto de imágenes planas.

## Caso 06 · Límites honestos
Si el entorno no permite crear PNG, PPTX, SVG o disponer de las tipografías originales, el asistente debe indicarlo con precisión y proponer un formato alternativo compatible. La skill no habilita herramientas por sí sola.

Nota: todos los valores de este documento son **ejemplos ficticios**, nunca resultados de clientes.
