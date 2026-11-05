(function(){
var css=".cr-back{position:fixed;inset:0;z-index:300;background:rgba(20,20,20,.45);display:none;align-items:center;justify-content:center;padding:20px}.cr-back.on{display:flex;animation:fadeIn .2s ease}.cr{width:100%;max-width:380px;background:#fff;border-radius:20px;box-shadow:0 24px 60px rgba(31,33,32,.22);padding:24px}.cr-t{font-family:\"P22Mackinac\",serif;font-weight:500;font-size:22px;letter-spacing:-.02em;margin:0 0 4px;color:var(--ink2)}.cr-s{font-size:13px;color:var(--t-mute);margin:0 0 18px}.cr-stage{position:relative;width:100%;aspect-ratio:1;border-radius:14px;overflow:hidden;background:var(--field);cursor:grab;touch-action:none;user-select:none}.cr-stage.drag{cursor:grabbing}.cr-stage img{position:absolute;left:50%;top:50%;max-width:none;transform-origin:center;pointer-events:none;-webkit-user-drag:none}.cr-mask{position:absolute;inset:0;pointer-events:none;background:radial-gradient(circle at center,transparent 0 calc(40% - 1px),rgba(255,255,255,.78) 40%)}.cr-ring{position:absolute;inset:10%;border-radius:50%;box-shadow:0 0 0 1.5px #fff,0 0 0 3px rgba(28,29,28,.14);pointer-events:none}.cr-zoom{display:flex;align-items:center;gap:12px;margin:18px 0 0}.cr-zoom svg{width:16px;height:16px;stroke:var(--t-mute);fill:none;stroke-width:2;stroke-linecap:round;flex:none}.cr-zoom input{flex:1;accent-color:var(--ink2)}.cr-act{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:22px}.cr-act span{display:flex;gap:8px}.cr-ghost{font-family:inherit;font-size:13.5px;font-weight:600;color:var(--ink2);background:#fff;border:1px solid var(--line);border-radius:999px;padding:11px 18px;cursor:pointer}.cr-ghost:hover{border-color:var(--ink2)}.cr .btn-black{padding:11px 22px;font-size:13.5px}.cr-link{background:none;border:0;padding:0;font-family:inherit;font-size:13.5px;font-weight:600;color:var(--ink2);cursor:pointer;text-decoration:underline;text-underline-offset:3px;text-decoration-color:var(--line)}.cr-link:hover{color:var(--blue)}"+'@keyframes crIn{from{opacity:0}to{opacity:1}}.cr-back.on{animation:crIn .2s ease}.cr .btn-black{background:var(--ink2,#1c1d1c);color:#fff;border:0;font-family:inherit;font-weight:700;border-radius:999px;cursor:pointer}.cr .btn-black:hover{background:var(--blue,#678DC6)}.qz-avatar{border-radius:50%!important}.qz-avatar img{border-radius:50%}';
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
var wrap=document.createElement('div');
wrap.innerHTML='<div class="cr-back" id="crBack"><div class="cr" role="dialog" aria-modal="true" aria-labelledby="crT"><h3 class="cr-t" id="crT">Profile photo</h3><p class="cr-s">Drag to reposition, zoom to resize.</p><div class="cr-stage" id="crStage"><img id="crImg" alt="" /><div class="cr-mask"></div><div class="cr-ring"></div></div><div class="cr-zoom"><svg viewBox="0 0 24 24"><line x1="6" y1="12" x2="18" y2="12"/></svg><input type="range" id="crZoom" min="1" max="3" step="0.01" value="1" aria-label="Zoom" /><svg viewBox="0 0 24 24"><line x1="6" y1="12" x2="18" y2="12"/><line x1="12" y1="6" x2="12" y2="18"/></svg></div><div class="cr-act"><button class="cr-link" type="button" id="crUp">Upload new</button><span><button class="cr-ghost" type="button" id="crCancel">Cancel</button><button class="btn-black" type="button" id="crSave">Save</button></span></div><input type="file" accept="image/*" id="crFile" hidden /></div></div>';
document.body.appendChild(wrap.firstChild);
var back=document.getElementById('crBack'),stage=document.getElementById('crStage'),img=document.getElementById('crImg'),zoom=document.getElementById('crZoom'),file=document.getElementById('crFile');
var cur=null,z=1,x=0,y=0,base=1,S=0;
function clamp(){var r=S*0.4,w=img.naturalWidth*base*z/2,hh=img.naturalHeight*base*z/2;x=Math.max(r-w,Math.min(w-r,x));y=Math.max(r-hh,Math.min(hh-r,y))}
function draw(){clamp();img.style.width=img.naturalWidth*base+'px';img.style.transform='translate(-50%,-50%) translate('+x+'px,'+y+'px) scale('+z+')'}
function fit(){S=stage.clientWidth;if(!img.naturalWidth)return;base=S*0.8/Math.min(img.naturalWidth,img.naturalHeight);z=1;x=0;y=0;zoom.value=1;draw()}
img.onload=fit;
function open(av){cur=av;var i=av.querySelector('img');back.classList.add('on');img.src=i?i.src:'';if(img.complete&&img.naturalWidth)fit()}
function close(){back.classList.remove('on')}
document.addEventListener('click',function(e){var av=e.target.closest&&e.target.closest('.qz-avatar');if(!av||back.contains(av))return;e.preventDefault();e.stopPropagation();open(av)},true);
document.addEventListener('keydown',function(e){var av=document.activeElement&&document.activeElement.closest&&document.activeElement.closest('.qz-avatar');if(av&&(e.key==='Enter'||e.key===' ')){e.preventDefault();open(av)}if(e.key==='Escape'&&back.classList.contains('on'))close()});
document.querySelectorAll('.qz-avatar').forEach(function(a){a.tabIndex=0;a.setAttribute('role','button')});
document.getElementById('crCancel').onclick=close;
back.addEventListener('click',function(e){if(e.target===back)close()});
zoom.oninput=function(){z=+zoom.value;draw()};
stage.addEventListener('wheel',function(e){e.preventDefault();z=Math.max(1,Math.min(3,z-e.deltaY*0.002));zoom.value=z;draw()},{passive:false});
var sx,sy,ox,oy,dn=false;
stage.addEventListener('pointerdown',function(e){stage.setPointerCapture(e.pointerId);dn=true;stage.classList.add('drag');sx=e.clientX;sy=e.clientY;ox=x;oy=y});
stage.addEventListener('pointermove',function(e){if(!dn)return;x=ox+e.clientX-sx;y=oy+e.clientY-sy;draw()});
stage.addEventListener('pointerup',function(){dn=false;stage.classList.remove('drag')});
document.getElementById('crUp').onclick=function(){file.click()};
file.onchange=function(){var f=file.files[0];if(!f)return;var r=new FileReader();r.onload=function(){img.src=r.result};r.readAsDataURL(f);file.value=''};
document.getElementById('crSave').onclick=function(){
  var out=320,c=document.createElement('canvas');c.width=c.height=out;var ctx=c.getContext('2d'),k=out/(S*0.8),s=base*z*k;
  ctx.beginPath();ctx.arc(out/2,out/2,out/2,0,Math.PI*2);ctx.clip();ctx.fillStyle='#fff';ctx.fillRect(0,0,out,out);
  var w=img.naturalWidth*s,hh=img.naturalHeight*s;
  try{ctx.drawImage(img,out/2+x*k-w/2,out/2+y*k-hh/2,w,hh);var d=c.toDataURL('image/png');
    var old=cur&&cur.querySelector('img');var oldSrc=old?old.getAttribute('src'):null;
    var set=[].slice.call(document.querySelectorAll('.qz-avatar img,.pf-av img,.app-user-btn img'));
    if(oldSrc)document.querySelectorAll('img').forEach(function(i){if(i.getAttribute('src')===oldSrc&&set.indexOf(i)<0)set.push(i)});
    set.forEach(function(i){i.src=d;i.style.borderRadius='50%';if(i.parentElement)i.parentElement.style.borderRadius='50%'});
  }catch(err){}
  close();
};
})();