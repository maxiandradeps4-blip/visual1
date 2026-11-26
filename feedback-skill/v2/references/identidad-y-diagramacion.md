# Identidad, diagramación y legibilidad

## Carácter
Editorial suizo contemporáneo con energía medida: **clean, dinámica, inteligente, memorable, profesional**.
Negro y blanco son la base; coral y cian aportan ritmo y función, nunca están en todo.

## Paleta
| Rol | HEX | Uso | Contraste s/blanco |
|---|---|---|---|
| Negro | `#111111` | titulares, cuerpo, fotos B/N, botones | 18,9:1 |
| Coral | `#F04D51` | foco único, alerta, flecha, cifras ≥ 24 px | 3,6:1 |
| Cian | `#0BB0D2` | dato destacado, formas, filetes de marca | 2,6:1 — **nunca texto** |
| Gris texto | `#6C7277` | notas, fuentes, texto secundario | 4,9:1 |
| Gris forma | `#C9CDCF` | barras neutras | solo formas |
| Filete | `#E4E6E6` | divisores | solo líneas |
Para destacar una cifra "en cian": cifra en negro + filete o barra cian encima.

## Retícula
- Márgenes ≥ 6–7 % del ancho (≈ 72–80 px en 1080–1240 px). 12 columnas; módulos de 3, 4, 5, 6, 7 u 8.
- Escala única de espacios: 8 · 16 · 24 · 32 · 48 · 72 · 96. Cifra↔texto 8; datos 16–24; subgrupos 32; secciones ≥ 72
  (≥ 28 en 9:16 o piezas compactas).
- Bordes izquierdos alineados; cifras alineadas por su línea base con la de al lado.
- Separar con espacio y filete de 1 px `#E4E6E6`. Sin cajas, fondos, sombras ni radios para agrupar.

## Jerarquía
- Máximo 3 tamaños de cifra (p. ej. 112/48/28 en vertical largo; 64/36/24 en 9:16) y 3 de texto (cuerpo, nota, etiqueta).
- Una **cifra protagonista** por sección; el resto subordinado. Variar el reparto de columnas entre secciones da ritmo.
- Mismo patrón por sección: número + título → dato principal → apoyo → nota.

## Mínimos de legibilidad
| Elemento | Pieza 1080–1240 px | Lámina 16:9 (pt) |
|---|---|---|
| Título principal | ≥ 56 px | ≥ 40 |
| Título de sección | ≥ 22 px | ≥ 24 |
| Cuerpo | ≥ 14 px | ≥ 16 |
| Notas, etiquetas, ejes | ≥ 12 px | ≥ 12 |
| Absoluto (fuente, créditos) | 11 px | 10 |
Interlineado 1,35–1,5 en cuerpo, 1–1,2 en titulares. Líneas de 35–75 caracteres. Mayúsculas solo en etiquetas
cortas con tracking +6–8 %. Sin viudas: ajustar ancho del módulo o `nowrap`, nunca el texto.

## Cuando no cabe
1. Quitar decoración. 2. Compactar espacios dentro de la escala. 3. Ampliar el lienzo. 4. Con permiso, dividir.
Nunca bajar de los mínimos ni recortar texto.
