// Fotografías reales enlazadas desde Unsplash; composición 100% HTML/CSS.
const photographicSources=Object.freeze({
  printing:"https://images.unsplash.com/photo-1503694978374-8a2fa686963a?auto=format&fit=crop&w=1100&q=84",
  newspapers:"https://images.unsplash.com/photo-1647255748526-25cdb76ce823?auto=format&fit=crop&w=1100&q=84",
  paper:"https://images.unsplash.com/photo-1654372066379-d8a1c70f7363?auto=format&fit=crop&w=1000&q=82",
  microphone:"https://images.unsplash.com/photo-1776690329305-fb4141bd528a?auto=format&fit=crop&w=1100&q=84",
  mixing:"https://images.unsplash.com/photo-1608333195448-88210e9e444f?auto=format&fit=crop&w=1100&q=84",
  studio:"https://images.unsplash.com/photo-1734383172782-d57707506342?auto=format&fit=crop&w=950&q=82",
  tower:"https://images.unsplash.com/photo-1700463108455-956c595bc97b?auto=format&fit=crop&w=1000&q=84",
  phone:"https://images.unsplash.com/photo-1657194967479-4c378e8590b7?auto=format&fit=crop&w=1000&q=84"
});
const photoSceneSets=Object.freeze({
 hero:["printing","newspapers","microphone","phone"],
 press:["printing","newspapers","paper"],
 audio:["microphone","mixing","studio"],
 digital:["tower","phone","studio"]
});
const photoFallbacks=Object.freeze({
 hero:"./assets/collage-comunicacion.svg",press:"./assets/collage-prensa.svg",audio:"./assets/collage-audio.svg",digital:"./assets/collage-dialogo.svg"
});
function renderPhotoScene(node){
 if(!node)return;
 const theme=photoSceneSets[node.dataset.theme]?node.dataset.theme:"hero";
 const picks=photoSceneSets[theme];
 node.style.backgroundImage='url("'+photoFallbacks[theme]+'")';
 node.style.backgroundSize="cover";
 node.style.backgroundPosition="center";
 node.replaceChildren();
 ["shape-a","shape-b","shape-c"].forEach(n=>{
  const s=document.createElement("span");s.className="scene-shape "+n;s.setAttribute("aria-hidden","true");node.appendChild(s);
 });
 picks.forEach((key,i)=>{
  const im=document.createElement("img");im.src=photographicSources[key];im.alt="";im.decoding="async";im.loading=(theme==="hero"&&i===0)?"eager":"lazy";im.className="scene-photo scene-photo-"+(i+1);im.setAttribute("aria-hidden","true");node.appendChild(im);
 });
 const arc=document.createElementNS("http://www.w3.org/2000/svg","svg");
 arc.setAttribute("viewBox","0 0 960 700");arc.setAttribute("preserveAspectRatio","none");arc.setAttribute("class","scene-arc");arc.setAttribute("aria-hidden","true");
 arc.innerHTML='<path d="M65 535Q255 290 492 368T908 230" fill="none" stroke="#fff" stroke-width="3"/><circle cx="250" cy="385" r="9" fill="#fff"/><circle cx="674" cy="344" r="9" fill="#fff"/><circle cx="907" cy="230" r="9" fill="#fff"/>';
 node.appendChild(arc);
}
document.querySelectorAll(".photo-scene").forEach(renderPhotoScene);
