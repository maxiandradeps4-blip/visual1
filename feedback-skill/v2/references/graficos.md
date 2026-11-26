# Gráficos y datos

## Regla cero
Valores, unidades, etiquetas, categorías, orden, notas y fuente idénticos a la entrega. No inferir tendencias ni causas.
Si los porcentajes no suman 100 por redondeo, se dibujan tal cual (no "completar").

## Elegir por la pregunta
| Pregunta | Gráfico | Reglas |
|---|---|---|
| ¿Qué categoría es mayor? | Barras | Eje desde cero, ancho constante, etiqueta de valor directa |
| ¿Cómo cambió? (2 momentos) | Barras pareadas | Misma escala para todos los pares; antes gris, después cian |
| ¿Cómo cambió? (serie) | Líneas | Intervalos reales, sin suavizar |
| ¿Cómo se reparte un total? | Anillo (≤ 5) | Sector mayor parte a las 12; % rotulado junto a cada color |
| ¿Cómo se reparte una respuesta? | Barra apilada 100 % | Segmentos con etiqueta debajo |
| ¿Qué parte de la población? | Cuadrícula de 100 | Celdas llenas = %; vacías `#EEF0F0`; cifra y texto al pie |
| ¿Valor exacto? | Tabla | Todas las filas/celdas; líneas finas |
| ¿Cómo se conectan? | Diagrama | Solo relaciones reales; flechas = dirección |

## Color
- **Nunca negro en barras, sectores o áreas.** Neutro `#C9CDCF`; destacado `#0BB0D2`; un solo foco `#F04D51`.
- Un color puede codificar significado si se explica (p. ej. digital en cian, presencial en gris oscuro `#6C7277`).
- Etiquetas de valor en negro; coral solo si la cifra es ≥ 24 px y es el foco.
- Nunca depender solo del color: cada barra o sector lleva su valor escrito.

## Producción
- SVG o HTML con proporciones calculadas desde los valores, nunca a ojo.
- PPTX editable: gráficos nativos o formas nativas con datos editables.
- Gráficos sin datos reales: rotular **esquemático**.
