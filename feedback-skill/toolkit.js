(()=>{
  const menu=document.getElementById('site-nav');
  const toggle=document.getElementById('nav-toggle');
  if(menu&&toggle){
    const close=()=>{menu.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');};
    toggle.addEventListener('click',()=>{
      const open=!menu.classList.contains('is-open');
      menu.classList.toggle('is-open',open);toggle.setAttribute('aria-expanded',String(open));
    });
    menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.classList.contains('is-open')){close();toggle.focus();}});
    document.addEventListener('pointerdown',e=>{if(menu.classList.contains('is-open')&&!menu.contains(e.target)&&!toggle.contains(e.target))close();});
  }
  const piece=document.getElementById('builder-piece');
  const ratio=document.getElementById('builder-ratio');
  const output=document.getElementById('builder-output');
  const topic=document.getElementById('builder-topic');
  const form=document.getElementById('prompt-builder');
  const result=document.getElementById('builder-result');
  const copied=document.getElementById('builder-status');
  const exact=document.getElementById('builder-exact');
  const noFaces=document.getElementById('builder-no-faces');
  const sources=document.getElementById('builder-sources');
  const names={presentacion:'presentación',word:'documento institucional de Word',collage:'collage editorial',grafico:'gráfico de datos',portadilla:'portadilla',diagrama:'diagrama'};
  const descriptions={
    word:'Crea o rediseña un documento A4 con portada, encabezados, pie de página, estilos de título, tablas y párrafos nativos de Word. Aplica diseño editorial institucional de 2026: jerarquías tipográficas amplias, retícula asimétrica, filetes precisos, aire y contraste funcional. Conserva íntegros los textos, datos y fuentes, sin inventar información institucional.',
    presentacion:'Trabaja con una retícula editorial contemporánea, jerarquías claras, espacios blancos y composición profesional. Mantén la cantidad y el orden de láminas salvo una indicación explícita.',
    collage:'Integra fotografía principalmente en blanco y negro con recortes precisos, geometrías coral #F04D51 y cian #0BB0D2. Une los elementos mediante una idea, sin agregar textos o rostros no solicitados.',
    grafico:'Elige el tipo de visualización según la pregunta, respeta escalas y ejes, mantén cada observación e identifica las unidades y fuentes. Usa coral y cian solo para comparaciones justificadas.',
    portadilla:'Da protagonismo a un título en caja mixta, una flecha geométrica grande cuando corresponda, retícula asimétrica y amplio espacio negativo.',
    diagrama:'Organiza etapas y actores con jerarquía editorial; usa solamente conexiones y sentidos de flecha presentes en la fuente.'
  };
  const defaults={presentacion:'PPTX editable',word:'DOCX editable',collage:'PNG transparente',grafico:'SVG editable',portadilla:'PPTX editable',diagrama:'SVG editable'};
  function updateOutput(){
    const type=piece.value;
    const subject=topic.value.trim()||'el tema o material que adjunto';
    const mode=output.value;
    const notes=[];
    if(exact.checked)notes.push('Conserva literalmente textos, cifras, etiquetas, orden y fuentes; no inventes, resumas ni omitas información.');
    if(noFaces.checked)notes.push('Evita rostros protagonistas; prioriza manos, detalles o personas de espalda cuando corresponda.');
    if(sources.checked)notes.push('Si utilizas referencias territoriales, fuentes o imágenes, comprueba su procedencia y no presentes contenido sintético como registro documental.');
    if(mode==='PPTX editable'||mode==='SVG editable'||mode==='DOCX editable')notes.push('Construye textos, gráficos y formas editables, evitando láminas planas salvo fotografías.');
    else notes.push('Exporta al formato solicitado y no declares el resultado editable si se trata de una imagen plana.');
    result.textContent=`Aplica Feedback Design Skill. Diseña ${names[type]} sobre ${subject}, en formato ${ratio.value}, con entrega ${mode}. ${descriptions[type]} ${notes.join(' ')} Usa Baskerville MT Std y Akzidenz-Grotesk Pro cuando las fuentes estén legalmente disponibles; en caso contrario, informa la sustitución tipográfica.`;
    if(copied)copied.textContent='';
  }
  if(form&&piece&&ratio&&output&&topic&&result){
    piece.addEventListener('change',()=>{output.value=defaults[piece.value];if(piece.value==='word')ratio.value='A4 vertical';else if(ratio.value==='A4 vertical')ratio.value='16:9';updateOutput();});
    form.addEventListener('input',updateOutput);
    form.addEventListener('change',updateOutput);
    form.addEventListener('submit',e=>e.preventDefault());
    updateOutput();
  }
  async function copyText(value){
    if(navigator.clipboard&&window.isSecureContext)return navigator.clipboard.writeText(value);
    const t=document.createElement('textarea');t.value=value;t.setAttribute('readonly','');t.style.position='fixed';t.style.left='-9999px';document.body.appendChild(t);t.select();
    const ok=document.execCommand('copy');t.remove();if(!ok)throw new Error('No se pudo copiar');
  }
  document.getElementById('builder-copy')?.addEventListener('click',async()=>{
    try{await copyText(result.textContent);copied.textContent='Instrucción copiada.'}
    catch{copied.textContent='Selecciona la instrucción anterior para copiarla.'}
  });
  const checklist=[...document.querySelectorAll('[data-qa]')];
  const qaProgress=document.getElementById('qa-progress');
  const qaStatus=document.getElementById('qa-status');
  function updateQA(){const complete=checklist.filter(el=>el.checked).length;
    if(qaProgress)qaProgress.textContent=`${complete} de ${checklist.length} comprobaciones realizadas`;
    if(qaStatus)qaStatus.textContent=complete===checklist.length?'Revisión completa: confirma los archivos originales antes de entregar.':'';
  }
  checklist.forEach(input=>input.addEventListener('change',updateQA));
  document.getElementById('qa-reset')?.addEventListener('click',()=>{checklist.forEach(x=>x.checked=false);updateQA()});
  document.getElementById('qa-copy')?.addEventListener('click',async()=>{
    const text=['CONTROL DE CALIDAD — FEEDBACK',...checklist.map(el=>`${el.checked?'[x]':'[ ]'} ${el.dataset.qa}`)].join('\n');
    try{await copyText(text);if(qaStatus)qaStatus.textContent='Checklist copiada.'}
    catch{if(qaStatus)qaStatus.textContent='Selecciona el contenido para copiarlo.'}
  });
  updateQA();
  const svgLink=document.getElementById('manual-download-svg');
  const chartBtns=[...document.querySelectorAll('.manual-option')];
  if(svgLink){
    const refresh=()=>{
      const selected=document.querySelector('.manual-option[aria-pressed="true"]');
      const id=selected?.dataset.chart||'barras';
      if(!['barras','lineas','anillo','dispersion','tablas','diagramas'].includes(id))return;
      svgLink.href=`./assets/grafico-editorial-${id}.svg`;
      svgLink.download=`feedback-grafico-${id}.svg`;
      svgLink.setAttribute('aria-label',`Descargar ejemplo de ${id} como SVG`);
    };
    chartBtns.forEach(btn=>{
      btn.addEventListener('click',refresh);
      btn.addEventListener('keydown',e=>{if(e.key==='ArrowUp'||e.key==='ArrowDown')queueMicrotask(refresh)});
    });
    refresh();
  }
})();