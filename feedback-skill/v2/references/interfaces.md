# Integración con UI UX Pro Max

`ui-ux-pro-max` es una skill de terceros (MIT) con una base buscable de patrones de interfaz,
reglas de accesibilidad, tipos de gráfico, estructuras de landing y guías por stack. Feedback Design
la usa como **asesora técnica**, nunca como fuente de identidad.

## Reparto de roles
| Decisión | Manda | Notas |
|---|---|---|
| Color, tipografía, estilo visual, collage, logo, tono editorial | **Feedback** | Tokens de `assets/tokens.json` y `assets/design-system/feedback/` |
| Fidelidad de textos y datos | **Feedback** | Nada de lo que devuelva la búsqueda autoriza cambiar contenido |
| Selección del tipo de gráfico | Ambas | Consultar `--domain chart`; validar con [graficos.md](graficos.md) |
| Accesibilidad, foco, teclado, tamaños táctiles | **ui-ux-pro-max** | Si es más exigente que Feedback, aplicar la más exigente |
| Estructura de páginas, navegación, formularios, estados | **ui-ux-pro-max** | `--domain landing`, `--domain ux` |
| Implementación por framework | **ui-ux-pro-max** | `--stack <stack>` detectado del proyecto |
| Retícula, espaciado y legibilidad | **Feedback** | [identidad-y-diagramacion.md](identidad-y-diagramacion.md); sus mínimos ya cumplen los de ui-ux-pro-max |

## Cuándo consultarla
Solo en piezas **interactivas o de interfaz**: sitios, landings, dashboards, apps, formularios,
componentes, tableros de datos navegables, presentaciones web con navegación.
No hace falta para infografías estáticas, láminas, collages ni documentos: ahí basta Feedback.

## Cómo encontrar el script
ui-ux-pro-max viene **incluida** en esta skill (`vendor/ui-ux-pro-max/`, v2.15.0, MIT). Usar esa copia;
si el usuario tiene instalada una versión independiente más nueva, se puede usar en su lugar.
```bash
FB=$(dirname "$(ls -d /mnt/skills/*/feedback-design/SKILL.md ~/.claude/skills/feedback-design/SKILL.md \
     .claude/skills/feedback-design/SKILL.md 2>/dev/null | head -1)")
UUPM="$FB/vendor/ui-ux-pro-max"
python3 "$UUPM/scripts/search.py" "<consulta>" --domain <dominio>
```
Sus reglas completas están en `vendor/ui-ux-pro-max/UUPM-SKILL.md` y `vendor/ui-ux-pro-max/references/`
(`quick-reference.md`, `pro-rules.md`). Leerlas solo cuando el encargo sea una interfaz.
Requiere Python 3 (solo biblioteca estándar, sin red).

## Qué consultas sí y cuáles no
**Sí** (una intención, 2–5 términos):
- `"dashboard comparison categories" --domain chart` → tipo de gráfico.
- `"error summary validation" --domain ux` → formularios.
- `"keyboard focus modal" --domain ux` → accesibilidad.
- `"hero social-proof" --domain landing` → orden de secciones.
- `"responsive layout" --stack html-tailwind` → implementación.

**No para Feedback**:
- `--domain color`, `--domain typography`, `--domain google-fonts`, `--domain style`: su resultado
  contradice la identidad.
- `--design-system` **sin filtrar**: genera paleta, fuentes, sombras y efectos ajenos (por ejemplo
  verdes, Exo/Roboto Mono y tarjetas con sombra). Si se usa para obtener el patrón de página o
  los antipatrones, **descartar** colores, tipografías, sombras, radios y efectos del resultado.
- Nunca `--persist` sobre un `design-system/` existente sin leerlo, ni `--force` sin permiso.

## Sistema de diseño Feedback en formato ui-ux-pro-max
`assets/design-system/feedback/` contiene `MASTER.md`, `tokens.css` y `tokens.json` con la identidad
Feedback en el mismo formato que usa ui-ux-pro-max. En un proyecto de código:
1. Copiar la carpeta a `<raíz-del-proyecto>/design-system/feedback/` (sin sobrescribir si ya existe).
2. Construir cada página leyendo ese `MASTER.md`; las variaciones por página van en
   `design-system/feedback/pages/<pagina>.md` y solo registran desviaciones justificadas.
3. Importar `tokens.css` y usar sus variables; no escribir hex sueltos en los componentes.

## Conflictos frecuentes y resolución
| ui-ux-pro-max sugiere | Feedback resuelve |
|---|---|
| Sombras en tarjetas, hover con elevación | Sin sombras; agrupar por espacio y filete `#E4E6E6`; hover con subrayado o cambio de color |
| Gradientes, glassmorphism, neumorphism, glow | Prohibidos |
| Bordes redondeados 8–12 px | 0 px en bloques; 2 px máximo en campos y botones |
| Paletas por industria | Negro, blanco, coral, cian y grises de apoyo |
| Google Fonts por "mood" | Baskerville MT Std + Akzidenz-Grotesk Pro; fallbacks Libre Baskerville/Georgia y Liberation Sans/Arial |
| Iconos en cada tarjeta | Solo iconos funcionales (navegación, acciones); nunca decorativos |
| Modo oscuro | Solo si se pide; fondo `#111111`, texto blanco, coral y cian conservan su función |
| Animaciones de entrada vistosas | Movimiento mínimo (≤ 200 ms, opacidad o desplazamiento corto) y respetar `prefers-reduced-motion` |

Cuando una regla de ui-ux-pro-max protege accesibilidad o usabilidad (contraste, foco visible,
objetivos táctiles de 44 px, etiquetas visibles), se cumple aunque obligue a ajustar la
composición; se resuelve dentro de la paleta Feedback, no saliéndose de ella.
