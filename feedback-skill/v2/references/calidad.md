# Control de calidad

## Antes de entregar
- [ ] Textos, cifras, fechas, notas y fuente idénticos al original (contar cifras en pieza vs. fuente).
- [ ] Orden y número de secciones o láminas conservados.
- [ ] Retícula, escala de espacios y máximo 3 tamaños de cifra / 3 de texto.
- [ ] `scripts/check_layout.py` sin errores: mínimos, contraste, superposiciones, desbordes, fuera de lienzo.
- [ ] Sin letras en cian; coral solo ≥ 24 px; ninguna barra/sector/área negra.
- [ ] Collage con brief temático, pasa la prueba de adivinanza y no toca el texto.
- [ ] Sin degradados, sombras, iconos decorativos ni texto sobre imagen.
- [ ] Imágenes con derechos claros; las generadas, rotuladas como ilustrativas.
- [ ] Formato, medida y resolución pedidos; contenido dentro del lienzo.
- [ ] PPTX "editable" = objetos nativos.

## Uso del script
```bash
python3 scripts/check_layout.py pieza.html --width 1240            # vertical largo
python3 scripts/check_layout.py pieza.html --width 1080 --height 1920 # 9:16
```
Requiere Playwright con Chromium. Devuelve código 1 si encuentra problemas.

## Casos de prueba
1. **Fidelidad:** «Rediseña sin cambiar texto ni valores» → mismas cifras y fuente; nada inventado.
2. **Tabla 12 × 12:** 144 valores, encabezados intactos, legible.
3. **Collage pertinente:** documento sobre juventud, política, redes e IA → urna/papeleta, celular, manos; sin paisajes.
4. **Portadilla:** título exacto + flecha geométrica, sin bajadas añadidas.
5. **PPTX editable:** objetos nativos.
6. **Legibilidad:** script sin errores; barras neutras grises y destacada cian; ninguna cifra en cian.
7. **Landing con ui-ux-pro-max:** estructura y accesibilidad de ui-ux-pro-max; identidad 100 % Feedback.
8. **Límites honestos:** si faltan fuentes, fotos o formatos, decirlo con precisión y proponer alternativa.

## Pedidos de ejemplo
- «Aplica Feedback Design a esta infografía; conserva todos los textos y cifras; formato 9:16.»
- «Crea un collage sobre minería en Calama con estas fotos; PNG transparente, sin texto ni rostros.»
- «Rediseña este PPTX con Feedback; mismo contenido y número de láminas; editable.»
- «Diseña una landing de Feedback para la encuesta; usa ui-ux-pro-max para accesibilidad.»
