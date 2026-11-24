# Uso de Feedback Design Skill en Claude

## Activación y alcance
La skill enseña un **sistema editorial de diseño**, no reemplaza el juicio de diseño ni instala software.
Se debe utilizar en solicitudes de presentaciones, collages, gráficas de datos, tableros, diagramas,
portadillas y piezas institucionales con lenguaje Feedback.

Cuando el usuario pide una presentación o documento editable, comprueba qué herramientas de
creación de archivos tiene el entorno actual. No declares editable un archivo que esté compuesto
por imágenes planas. En Claude Code, ejecuta scripts de producción solo si el entorno ofrece
las dependencias necesarias y el usuario lo ha autorizado.

## Claude.ai
1. Accede a **Personalizar / Customize → Skills**.
2. Usa **+ → Crear skill → Subir un skill / Upload a skill**.
3. Sube el ZIP `feedback-design-skill-claude-v1.1.0.zip`.
4. Activa el skill. Prueba: "Aplica Feedback Design Skill a estos datos y conserva todos los valores".

El ZIP debe contener la carpeta `feedback-design/` directamente, con `SKILL.md` en ella.
No es necesario descomprimir para subir el archivo ZIP a Claude.ai.

## Claude Code
- Proyecto: descomprime `feedback-design/` en `.claude/skills/feedback-design/`.
- Personal: descomprime `feedback-design/` en `~/.claude/skills/feedback-design/`.
- Usa una petición explícita de diseño Feedback o llama a `/feedback-design` cuando el entorno lo permita.
- Comprueba que el archivo `SKILL.md` quede en la ruta indicada y que las referencias se
  mantengan dentro de la misma carpeta.

## Principios críticos
- **Autonomía editorial nula:** no omitir ni alterar contenido literal, cifras, fechas y fuentes.
- **Lenguaje Feedback:** blanco, negro, coral `#F04D51`, cian `#0BB0D2`; retícula clara, mucho aire.
- **Tipografía:** Baskerville MT Std para títulos y Akzidenz-Grotesk Pro para textos, si están instaladas legalmente.
- **Collage fotográfico:** blanco y negro, recortes precisos, sin personas cuando así se indique; no afirmar que imágenes sintéticas son documentales.
- **Gráficos:** diagramas y visualizaciones sobrias, con escalas fieles y acentos medidos.
- No redistribuir archivos de fuentes comerciales.

## Ejercicios de comprobación
1. Rediseñar una diapositiva de texto sin cambiar una sola palabra.
2. Generar un gráfico de barras a partir de un archivo proporcionado sin alterar ejes ni datos.
3. Crear un collage sin rostros y sin textos con material fotográfico autorizado.
4. Diseñar una portadilla minimalista con flecha geométrica y conservar el título exacto.

## Dependencias y limitaciones
No incluye código ejecutable ni instaladores. El resultado depende de las herramientas activas
para crear imágenes, SVG, PPTX, PDF o documentos. Las fuentes comerciales no vienen incluidas.
