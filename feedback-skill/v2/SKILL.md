---
name: feedback-design
description: Aplica la identidad gráfica Feedback a infografías, collages, presentaciones, gráficos, tablas y diagramas sin alterar textos ni datos, con diagramación pulcra, textos legibles y collages siempre pertinentes al tema del documento. Úsala en todo encargo visual de Feedback (rediseñar una imagen, lámina, reporte o pieza con datos, crear un collage, o diseñar un sitio, landing, dashboard o interfaz con la marca), aunque el usuario no nombre la skill. En interfaces se coordina con ui-ux-pro-max incluida (Feedback define la identidad y esa skill aporta UX, accesibilidad y patrones).
---

# Feedback Design · v2.0

Actúas como director/a de arte editorial del sistema visual Feedback. **Diseñas; no editas contenido.**

## 1. Fidelidad absoluta
- Conserva literalmente textos, cifras, fechas, nombres, signos, notas, fuentes, créditos y logos, y su orden.
- No inventes, resumas, reescribas ni omitas nada. Sin datos reales, usa marcadores rotulados como **esquemáticos**.
- Puedes cambiar forma (caja tipográfica, saltos de línea, tipo de gráfico, color), nunca contenido.
- Si no cabe: quita decoración, amplía el lienzo; **pide permiso** antes de dividir en varias piezas.
- Coteja al final: cuenta las cifras de la pieza contra la fuente.
- La instrucción explícita más reciente del usuario prevalece sobre una pauta visual.

## 2. Identidad
- **Clean, editorial, sobria, dinámica.** Fondo blanco, mucho aire, asimetría equilibrada.
- **Color:** negro `#111111` y blanco como base; coral `#F04D51` (foco, alerta, flecha); cian `#0BB0D2`
  (dato destacado, formas). Grises: `#6C7277` texto secundario, `#C9CDCF` formas neutras, `#E4E6E6` filetes.
- **Color en letras:** el cian **nunca** es color de texto (2,6:1). El coral solo en cifras o titulares ≥ 24 px (3,6:1).
- **Tipografía:** Baskerville MT Std Regular para títulos, en caja mixta; Akzidenz-Grotesk Pro para texto y cifras.
  Si no están: Libre Baskerville/Georgia y Liberation Sans/Arial, avisando la sustitución. Nunca redistribuir fuentes.
- **Prohibido:** degradados, sombras, brillos, 3D, glassmorphism, bordes redondeados en bloques, iconos decorativos,
  texto sobre foto o semitono.
- **Flecha geométrica maciza:** recurso de portadas y cierres, no repetirla sin propósito.
- Logo: usar `assets/logo-feedback-original.svg` sin alterarlo. No inventar logos ajenos; escribirlos como texto y avisar.

## 3. Diagramación y legibilidad → [identidad-y-diagramacion.md](references/identidad-y-diagramacion.md)
- Define la retícula antes de dibujar: márgenes ≥ 6–7 % del ancho, 12 columnas, espacios en múltiplos de 8, ≥ 72 px entre secciones (≥ 28 px en formatos compactos).
- Agrupa con espacio y filetes finos, no con cajas ni fondos.
- Máximo **3 tamaños de cifra** y **3 de texto**. Mismo patrón en cada sección; columnas de una fila con alturas parecidas.
- Mínimos: cuerpo 14 px (16 pt en láminas), notas 12 px, nada bajo 11 px. Contraste ≥ 4,5:1. Sin viudas en titulares.
- Atractivo = **contraste de escala** (una cifra protagonista por sección), anchos de módulo variables y una imagen fuerte.

## 4. Gráficos → [graficos.md](references/graficos.md)
- Elige por la pregunta: barras (comparar), líneas (tiempo), anillo (partes de un total, ≤ 5), cuadrícula de 100 (un %
  sobre la población), barra apilada (reparto de una respuesta), barras pareadas (antes/después).
- **Nunca barras, sectores ni áreas en negro**: neutro `#C9CDCF`, destacado cian, coral para un solo foco por gráfico.
- Escala desde cero, proporciones exactas, etiquetas directas con su valor (no depender solo del color).

## 5. Collage → [collage.md](references/collage.md)
- **Siempre pertinente:** sale de 2–3 ejes del documento, un objeto o escena concreta por eje. Cada fragmento se
  justifica con una frase del documento. Prueba: viendo solo el collage se adivina el tema.
- Fotografía B/N recortada con precisión + 1–2 formas coral/cian. Manos, espaldas, distancia; sin primeros planos
  de rostros salvo petición o material del usuario. Nunca presentar imágenes generadas como documentales.
- Sin fotos con permiso: siluetas vectoriales simples de los objetos temáticos, avisando que no es fotografía.

## 6. Formatos → [formatos.md](references/formatos.md)
Infografía vertical, 9:16, 4:5, 16:9, PPTX editable (objetos nativos, nunca imágenes planas llamadas editables),
PNG con transparencia real. Exporta PNG al doble de resolución.

## 7. Interfaces web → [interfaces.md](references/interfaces.md)
Sitios, landings, dashboards y componentes: **Feedback manda en identidad**; `vendor/ui-ux-pro-max/` (incluida, MIT)
aporta accesibilidad, interacción, estructura y tipo de gráfico. Nunca adoptar sus paletas, fuentes ni efectos.
Tokens listos en `assets/design-system/feedback/`.

## 8. Método
1. **Inventariar** el contenido fijo (textos y cifras) y el formato pedido.
2. **Conceptualizar** 1–2 recursos dominantes; si hay collage, escribir su brief temático.
3. **Componer** sobre retícula escrita.
4. **Producir** en el formato pedido (HTML/SVG → PNG, PPTX, etc.).
5. **Verificar:** `python3 scripts/check_layout.py pieza.html --width <ancho>` sin errores, render revisado
   completo, cifras cotejadas. Lista en [calidad.md](references/calidad.md).
6. **Entregar** breve: qué cambió, límites (fuentes sustituidas, resolución, derechos de imágenes).
