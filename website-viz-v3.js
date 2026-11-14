import * as THREE from 'three';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';

await document.fonts.load('700 120px Cinzel').catch(()=>{});
const FONT='"Cinzel","Times New Roman",serif';
const rnd=(a,b)=>a+Math.random()*(b-a);
const mouse={x:0,y:0},sm={x:0,y:0};
addEventListener('pointermove',e=>{mouse.x=e.clientX/innerWidth-.5;mouse.y=e.clientY/innerHeight-.5});

/* ---------- procedural textures ---------- */
const cv=(s=512)=>{const c=document.createElement('canvas');c.width=c.height=s;return [c,c.getContext('2d')]};
function hex(h,k){const n=parseInt(h.slice(1),16);let r=n>>16,g=n>>8&255,b=n&255;const f=v=>Math.max(0,Math.min(255,Math.round(k<1?v*k:v+(255-v)*(k-1))));return `rgb(${f(r)},${f(g)},${f(b)})`}
function toNormal(hc,str){const w=hc.width,src=hc.getContext('2d').getImageData(0,0,w,w).data;const [c,x]=cv(w);const out=x.createImageData(w,w),o=out.data;
  const H=(i,j)=>src[(((j+w)%w)*w+((i+w)%w))*4]/255;
  for(let j=0;j<w;j++)for(let i=0;i<w;i++){const dx=(H(i+1,j)-H(i-1,j))*str,dy=(H(i,j+1)-H(i,j-1))*str;const l=Math.hypot(dx,dy,1),p=(j*w+i)*4;
    o[p]=(-dx/l*.5+.5)*255;o[p+1]=(dy/l*.5+.5)*255;o[p+2]=(1/l*.5+.5)*255;o[p+3]=255}
  x.putImageData(out,0,0);return new THREE.CanvasTexture(c)}
const tex=c=>{const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=8;return t};
function blurred(c,px){const [o,x]=cv(c.width);x.filter=`blur(${px}px)`;x.drawImage(c,0,0);return o}

function bricks(x,S,b,h){ // sandstone tesserae band; h = height ctx
  for(let y=0;y<S;y+=11)for(let xx=-(y/11%2)*7;xx<S;xx+=15){if(xx>b&&xx<S-b-12&&y>b&&y<S-b-8)continue;
    x.fillStyle=`hsl(${rnd(26,34)},${rnd(38,50)}%,${rnd(62,74)}%)`;x.fillRect(xx+1,y+1,13,9);h&&(h.fillStyle='#fff',h.fillRect(xx+1.5,y+1.5,12,8))}}
const mosaicCache={};
function mosaic(color,label){const k=color+label;if(mosaicCache[k])return mosaicCache[k];
  const S=512,b=58,[c,x]=cv(S),[hc,h]=cv(S);
  x.fillStyle='#b88e66';x.fillRect(0,0,S,S);h.fillStyle='#555';h.fillRect(0,0,S,S);bricks(x,S,b,h);
  x.fillStyle=hex(color,.55);x.fillRect(b-6,b-6,S-2*b+12,S-2*b+12);
  x.fillStyle=color;x.fillRect(b,b,S-2*b,S-2*b);
  x.fillStyle=hex(color,.5);for(let i=b+14;i<S-b-10;i+=20)for(const [px,py] of[[i,b+14],[i,S-b-14],[b+14,i],[S-b-14,i]]){x.save();x.translate(px,py);x.rotate(Math.PI/4);x.fillRect(-4,-4,8,8);x.restore()}
  x.fillStyle=hex(color,.52);x.font=`700 ${label.length>2?150:200}px ${FONT}`;x.textAlign='center';x.textBaseline='middle';x.fillText(label,S/2,S/2+12);
  for(let yy=b+30;yy<S-b-30;yy+=10)for(let xx=b+30;xx<S-b-30;xx+=10){x.fillStyle=`rgba(${Math.random()<.5?'255,255,255':'0,0,0'},${rnd(0,.07)})`;x.fillRect(xx,yy,10,10)}
  x.strokeStyle='rgba(0,0,0,.14)';x.lineWidth=1.4;x.beginPath();
  for(let v=b+30;v<=S-b-30;v+=10){x.moveTo(b+30,v+rnd(-.6,.6));x.lineTo(S-b-30,v+rnd(-.6,.6));x.moveTo(v+rnd(-.6,.6),b+30);x.lineTo(v+rnd(-.6,.6),S-b-30)}x.stroke();
  h.fillStyle='#fff';h.fillRect(b,b,S-2*b,S-2*b);h.strokeStyle='#888';h.lineWidth=1.6;h.beginPath();
  for(let v=b+30;v<=S-b-30;v+=10){h.moveTo(b+30,v);h.lineTo(S-b-30,v);h.moveTo(v,b+30);h.lineTo(v,S-b-30)}h.stroke();
  h.fillStyle='#bbb';h.font=x.font;h.textAlign='center';h.textBaseline='middle';h.fillText(label,S/2,S/2+12);
  return mosaicCache[k]={map:tex(c),normalMap:toNormal(blurred(hc,1),3)}}
let sandTex;function sand(){if(sandTex)return sandTex;const S=256,[c,x]=cv(S),[hc,h]=cv(S);x.fillStyle='#b88e66';x.fillRect(0,0,S,S);h.fillStyle='#555';h.fillRect(0,0,S,S);bricks(x,S,S,h);
  return sandTex={map:tex(c),normalMap:toNormal(blurred(hc,.8),2)}}

const METAL={gold:{c:'#d8aa42',p:'#7a5a14',m:.72,r:.34},silver:{c:'#b7b9b8',p:'#5f625f',m:.75,r:.4},copper:{c:'#a0603e',p:'#4e2818',m:.6,r:.46},
  bronze:{c:'#6b4c38',p:'#2e1d12',m:.55,r:.52},green:{c:'#5e8b72',p:'#2a4536',m:.18,r:.64},iron:{c:'#7a7872',p:'#3a3935',m:.6,r:.5}};
const coinCache={};
function coinMats(metal,label,laurel){const k=metal+label+laurel;if(coinCache[k])return coinCache[k];const M=METAL[metal],S=512,C=S/2;
  const [hc,h]=cv(S);h.fillStyle='#606060';h.fillRect(0,0,S,S);
  const g=h.createRadialGradient(C,C,212,C,C,256);g.addColorStop(0,'#606060');g.addColorStop(.2,'#f0f0f0');g.addColorStop(.8,'#d8d8d8');g.addColorStop(1,'#707070');
  h.fillStyle=g;h.fillRect(0,0,S,S);h.fillStyle='#606060';h.beginPath();h.arc(C,C,214,0,7);h.fill();
  h.fillStyle='#b0b0b0';for(let i=0;i<72;i++){const a=i/72*Math.PI*2;h.beginPath();h.arc(C+Math.cos(a)*196,C+Math.sin(a)*196,4.5,0,7);h.fill()}
  h.fillStyle='#e4e4e4';
  if(laurel){for(const sd of[-1,1])for(let i=0;i<9;i++){const a=Math.PI/2+sd*(.42+i*.26);h.save();h.translate(C+Math.cos(a)*158,C+Math.sin(a)*158);h.rotate(a+sd*.55);h.beginPath();h.ellipse(0,0,11,30,0,0,7);h.fill();h.restore()}}
  h.font=`700 ${laurel?150:label.length>2?140:190}px ${FONT}`;h.textAlign='center';h.textBaseline='middle';h.fillText(label,C,C+10);
  const hb=blurred(hc,2.2);
  const [c,x]=cv(S);x.fillStyle=M.c;x.fillRect(0,0,S,S);
  for(let i=0;i<500;i++){x.fillStyle=Math.random()<.7?M.p:'#fff';x.globalAlpha=rnd(.03,.12);x.beginPath();x.arc(rnd(0,S),rnd(0,S),rnd(3,34),0,7);x.fill()}
  x.globalAlpha=.55;x.globalCompositeOperation='overlay';x.drawImage(hb,0,0);x.globalCompositeOperation='source-over';x.globalAlpha=1;
  const face=new THREE.MeshStandardMaterial({map:tex(c),normalMap:toNormal(hb,5.5),metalness:M.m,roughness:M.r});
  const side=new THREE.MeshStandardMaterial({color:hex(M.c,.85),metalness:M.m,roughness:M.r+.06});
  return coinCache[k]=[side,face,face]}
const geoCache={};const coinGeo=(r,h)=>geoCache[r+'_'+h]||(geoCache[r+'_'+h]=new THREE.CylinderGeometry(r,r,h,72));
function coin(metal,label,laurel=false,r=.45,hh=.085){const m=new THREE.Mesh(coinGeo(r,hh),coinMats(metal,label,laurel));m.castShadow=m.receiveShadow=true;m.rotation.y=rnd(0,6.28);return m}
function tile(color,label,w=1.1,t=.11){const g=new THREE.Group();const s=sand();
  const body=new THREE.Mesh(new RoundedBoxGeometry(w,t,w,4,.05),new THREE.MeshStandardMaterial({color:'#c79d74',roughness:.85,map:s.map,normalMap:s.normalMap}));body.castShadow=body.receiveShadow=true;g.add(body);
  const mt=mosaic(color,label);const top=new THREE.Mesh(new THREE.PlaneGeometry(w*.96,w*.96),new THREE.MeshStandardMaterial({...mt,roughness:.62,polygonOffset:true,polygonOffsetFactor:-2}));
  top.rotation.x=-Math.PI/2;top.position.y=t/2+.001;top.receiveShadow=true;g.add(top);return g}

/* ---------- stage ---------- */
function stage(el,camPos,look){
  const r=new THREE.WebGLRenderer({antialias:true,alpha:true,preserveDrawingBuffer:true});
  r.setPixelRatio(Math.min(devicePixelRatio,2));r.toneMapping=THREE.ACESFilmicToneMapping;r.toneMappingExposure=.86;
  r.shadowMap.enabled=true;r.shadowMap.type=THREE.VSMShadowMap;el.appendChild(r.domElement);
  const s=new THREE.Scene();s.environment=new THREE.PMREMGenerator(r).fromScene(new RoomEnvironment(),.04).texture;s.environmentIntensity=.8;
  s.add(new THREE.HemisphereLight(0xfffaf2,0xd8d0c4,.55));
  const d=new THREE.DirectionalLight(0xfff6ea,2.4);d.position.set(-4,9,5);d.castShadow=true;d.shadow.mapSize.set(2048,2048);
  Object.assign(d.shadow.camera,{left:-6,right:6,top:6,bottom:-6,near:1,far:30});d.shadow.radius=10;d.shadow.blurSamples=16;d.shadow.bias=-.0004;s.add(d);
  const fl=new THREE.Mesh(new THREE.PlaneGeometry(40,40),new THREE.ShadowMaterial({opacity:.2,color:0x4a3c2c}));fl.rotation.x=-Math.PI/2;fl.receiveShadow=true;s.add(fl);
  const c=new THREE.PerspectiveCamera(30,1,.1,100);const cp=new THREE.Vector3(...camPos),lk=new THREE.Vector3(...look);let k=1;
  const fit=()=>{const w=el.clientWidth,h=el.clientHeight;r.setSize(w,h,false);c.aspect=w/h;k=w/h<1?1+(1-w/h)*1.1:1;c.updateProjectionMatrix()};
  new ResizeObserver(fit).observe(el);fit();
  let vis=false;new IntersectionObserver(([e])=>vis=e.isIntersecting).observe(el);
  const ptr=new THREE.Vector2(9,9),ray=new THREE.Raycaster(),hit=new THREE.Vector3(99,0,99),pl=new THREE.Plane(new THREE.Vector3(0,1,0),0);
  el.addEventListener('pointermove',e=>{const b=el.getBoundingClientRect();ptr.set((e.clientX-b.left)/b.width*2-1,-(e.clientY-b.top)/b.height*2+1)});
  el.addEventListener('pointerleave',()=>ptr.set(9,9));
  return {s,c,hit,go(fn){const clk=new THREE.Clock();let t=0;
    const frame=(dt,live)=>{t+=dt;sm.x+=(mouse.x-sm.x)*.05;sm.y+=(mouse.y-sm.y)*.05;
      c.position.copy(cp).sub(lk).multiplyScalar(k).add(lk);c.position.x+=sm.x*.9;c.position.y-=sm.y*.6;c.lookAt(lk);c.updateMatrixWorld();
      if(ptr.x<5){ray.setFromCamera(ptr,c);ray.ray.intersectPlane(pl,hit)}else hit.set(99,0,99);
      fn(t,dt,live);r.render(s,c)};
    frame(3,false);(function loop(){requestAnimationFrame(loop);const dt=Math.min(clk.getDelta(),.05);if(vis)frame(dt,true)})()}};
}
const easeOutBounce=x=>{const n=7.5625,d=2.75;return x<1/d?n*x*x:x<2/d?n*(x-=1.5/d)*x+.75:x<2.5/d?n*(x-=2.25/d)*x+.9375:n*(x-=2.625/d)*x+.984375};
const ease=x=>x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2;

/* ---------- 01 Arena: mosaic tiles, one per gate ---------- */
{const {s,go,hit}=stage(document.getElementById('v1'),[0,8.6,6.4],[0,0,.1]);
 const T=[['#2c4fa6','I'],['#58b4e4','II'],['#a8adb4','III'],['#e57628','IV'],['#e6c238','V'],['#9aa0a6','VI'],['#2f8a56','VII'],['#c63a2f','VIII'],['#7b58a6','IX']];
 const L=[[-1.45,-1.2,.22,0],[.1,-1.6,-.06,0],[1.6,-1,.32,0],[-1.7,.25,.08,0],[-.35,.95,-.28,0],[1.3,.85,.2,0],[-.72,-.38,-.14,1],[.62,-.3,.1,1],[.3,1.5,.06,1]];
 const tiles=T.map(([col,l],i)=>{const g=tile(col,l);const [x,z,ry,ly]=L[i];
   g.userData={x,z,ry,lift:0,y0:.056+ly*.12,tilt:ly?.05:0};s.add(g);return g});
 let t0=-1;
 go((t,dt,live)=>{if(live&&t0<0)t0=t;const it=t0<0?99:t-t0;
   const cyc=3.2,fi=Math.floor(Math.max(0,it-1.6)/cyc)%9,fp=(Math.max(0,it-1.6)%cyc)/1.1;
   tiles.forEach((g,i)=>{const u=g.userData;const dx=hit.x-u.x,dz=hit.z-u.z,dd=Math.hypot(dx,dz);
     const want=Math.max(0,1-dd/1.1)*.38;u.lift+=(want-u.lift)*Math.min(1,dt*8);
     let y=u.y0+u.lift,rx=-dz*u.lift*.5+u.tilt,rz=dx*u.lift*.5;
     const ip=THREE.MathUtils.clamp((it-i*.09)/1.1,0,1);if(ip<1)y+=(1-easeOutBounce(ip))*4.2;
     if(it>1.6&&i===fi&&fp<1){y+=Math.sin(fp*Math.PI)*.9;rx+=ease(fp)*Math.PI*2}
     g.position.set(u.x,y,u.z);g.rotation.set(rx,u.ry,rz)})});}

/* ---------- 02 Treasury: stacks of coin that grow as patrons fund ---------- */
{const {s,go}=stage(document.getElementById('v2'),[5.2,5.6,7.4],[0,.45,0]);
 const H=.085;
 const ST=[[-1.5,-.35,'green','I',9],[-.4,-.95,'gold','XX',14],[.85,-.55,'iron','X',11],[-.75,.75,'bronze','III',7],[.55,.7,'copper','V',10]].map(([x,z,m,l,n])=>({x,z,m,l,n0:n,coins:[]}));
 const place=(st,c,i)=>{c.position.set(st.x+rnd(-.03,.03),H/2+i*H*1.01,st.z+rnd(-.03,.03));c.rotation.x=rnd(-.02,.02);c.rotation.z=rnd(-.02,.02)};
 ST.forEach(st=>{for(let i=0;i<st.n0;i++){const c=coin(st.m,st.l);place(st,c,i);s.add(c);st.coins.push(c)}});
 [[1.9,.1,'gold','XX'],[-2.1,1.1,'green','I'],[1.5,1.6,'silver','X'],[-.1,1.9,'bronze','III']].forEach(([x,z,m,l])=>{const c=coin(m,l);c.position.set(x,H/2,z);s.add(c)});
 const lean=coin('copper','V');lean.position.set(1.25,.4,-1.45);lean.rotation.set(0,.6,1.12);s.add(lean);
 const fall=[];let next=.6,drops=0,shrink=-1;
 go((t,dt)=>{
   if(shrink>=0){shrink+=dt*2;ST.forEach(st=>st.coins.slice(st.n0).forEach(c=>c.scale.setScalar(Math.max(.001,1-shrink))));
     if(shrink>=1){ST.forEach(st=>{st.coins.splice(st.n0).forEach(c=>s.remove(c))});shrink=-1;drops=0;next=t+.6}}
   else if(t>next){const st=ST[Math.floor(Math.random()*ST.length)];const c=coin(st.m,st.l);const i=st.coins.length;place(st,c,i);
     c.userData={ty:c.position.y,v:0,tx:c.rotation.x,w:rnd(.5,1)};c.position.y+=3.2;s.add(c);st.coins.push(c);fall.push(c);next=t+.55;
     if(++drops>=24)next=t+2.4}
   else if(drops>=24&&!fall.length&&t>next-.1)shrink=0;
   for(let j=fall.length-1;j>=0;j--){const c=fall[j],u=c.userData;u.v-=16*dt;c.position.y+=u.v*dt;const gap=c.position.y-u.ty;
     c.rotation.x=u.tx+Math.sin(gap*3)*.25*Math.min(1,gap)*u.w;
     if(gap<=0){c.position.y=u.ty;c.rotation.x=u.tx;if(u.v<-2){u.v*=-.18}else fall.splice(j,1)}}});}

/* ---------- helmet ---------- */
const hMatCache={};
function hMat(metal,dark=1){const k=metal+dark;if(hMatCache[k])return hMatCache[k];const M=METAL[metal],S=512;
  const [c,x]=cv(S),[hc,h]=cv(S);x.fillStyle=hex(M.c,dark);x.fillRect(0,0,S,S);h.fillStyle='#808080';h.fillRect(0,0,S,S);
  for(let i=0;i<700;i++){const px=rnd(0,S),py=rnd(0,S),r=rnd(2,30);x.fillStyle=Math.random()<.7?M.p:'#fff';x.globalAlpha=rnd(.03,.12);x.beginPath();x.arc(px,py,r,0,7);x.fill();
    h.fillStyle=Math.random()<.5?'#000':'#fff';h.globalAlpha=rnd(.02,.08);h.beginPath();h.arc(px,py,r,0,7);h.fill()}
  for(let i=0;i<160;i++){x.strokeStyle=M.p;x.globalAlpha=rnd(.05,.18);x.lineWidth=rnd(.5,1.5);const px=rnd(0,S),py=rnd(0,S);x.beginPath();x.moveTo(px,py);x.lineTo(px+rnd(-30,30),py+rnd(-8,8));x.stroke()}
  const m=new THREE.MeshStandardMaterial({map:tex(c),normalMap:toNormal(blurred(hc,3),2.5),metalness:M.m,roughness:M.r,side:THREE.DoubleSide});return hMatCache[k]=m}
function helmet(metal,laurel=false){const g=new THREE.Group(),m=hMat(metal),md=hMat(metal,.55);
  const add=(geo,mat,f)=>{const o=new THREE.Mesh(geo,mat);o.castShadow=o.receiveShadow=true;f&&f(o);g.add(o);return o};
  const V=(a)=>a.map(([r,y])=>new THREE.Vector2(r,y));
  add(new THREE.LatheGeometry(V([[.345,.08],[.36,.22],[.355,.4],[.32,.56],[.24,.69],[.12,.77],[.001,.79]]),72),m);
  add(new THREE.LatheGeometry(V([[.34,.12],[.46,.07],[.6,.06],[.66,.09],[.655,.105],[.58,.085],[.46,.095],[.35,.15]]),96),m);
  const TH=1.9;add(new THREE.CylinderGeometry(.352,.352,.4,48,1,true,-TH/2,TH),md,o=>o.position.y=.3);
  const bar=new THREE.TorusGeometry(.358,.011,6,40,TH);
  for(let i=0;i<5;i++)add(bar,m,o=>{o.rotation.set(Math.PI/2,TH/2-Math.PI/2,0);o.position.y=.13+i*.085});
  const vb=new THREE.BoxGeometry(.022,.4,.022);
  for(let i=0;i<8;i++){const a=-TH/2+(i+.5)*TH/8;add(vb,m,o=>{o.position.set(Math.sin(a)*.358,.3,Math.cos(a)*.358);o.rotation.y=a})}
  add(new THREE.TorusGeometry(.358,.02,8,64,TH),m,o=>{o.rotation.set(Math.PI/2,TH/2-Math.PI/2,0);o.position.y=.5});
  add(new THREE.TorusGeometry(.43,.05,16,64,Math.PI),m,o=>{o.rotation.y=Math.PI/2;o.position.y=.37;o.scale.z=.55});
  add(new THREE.TorusGeometry(.5,.028,12,64,Math.PI*.92),m,o=>{o.rotation.y=Math.PI/2;o.rotation.z=Math.PI*.04;o.position.y=.37;o.scale.z=.5});
  const rv=new THREE.SphereGeometry(.018,10,8);
  for(let i=0;i<22;i++){const a=i/22*Math.PI*2;if(Math.abs(Math.atan2(Math.sin(a),Math.cos(a)))<TH/2)continue;add(rv,m,o=>o.position.set(Math.sin(a)*.36,.2,Math.cos(a)*.36))}
  if(laurel){const lg=new THREE.SphereGeometry(1,16,12);for(const sd of[-1,1])for(let i=0;i<10;i++){const a=sd*(.25+i*.27);
    add(lg,m,o=>{o.position.set(Math.sin(a)*.345,.56+Math.cos(i*1.7)*.012,Math.cos(a)*.345);o.scale.set(.028,.075,.018);o.lookAt(o.position.x*2,.56,o.position.z*2);o.rotateZ(sd*1.35)})}}
  return g}

/* ---------- 03 Podium: mosaic plinths, gladiator helmets ---------- */
{const {s,go}=stage(document.getElementById('v3'),[2.2,3.9,10.2],[.2,1.3,0]);const sd=sand();
 const P=[[-1.42,1.15,'#a8adb4','II','silver',.98],[0,1.75,'#e6c238','I','gold',1.12],[1.42,.75,'#c86a3a','III','copper',.98]],hs=[];
 P.forEach(([x,h,col,l,m,sc],i)=>{
   const b=new THREE.Mesh(new RoundedBoxGeometry(1.26,h,1.26,6,.06),new THREE.MeshStandardMaterial({color:'#dcc7aa',roughness:.9,normalMap:sd.normalMap,normalScale:new THREE.Vector2(.25,.25)}));
   b.position.set(x,h/2,0);b.castShadow=b.receiveShadow=true;s.add(b);
   const tp=tile(col,l,1.22,.08);tp.position.set(x,h+.04,0);s.add(tp);
   const g=helmet(m,i===1);g.scale.setScalar(sc);g.position.set(x,h+.02,0);s.add(g);g.userData={y:h+.02,i,r0:[.5,.15,-.5][i]};hs.push(g)});
 const fh=helmet('bronze');fh.scale.setScalar(.8);fh.position.set(2.5,.5,-.35);fh.rotation.set(0,-1.2,1.3);s.add(fh);
 const tl=tile('#2c4fa6','V',.9,.09);tl.position.set(-2.05,.045,-.9);tl.rotation.y=.4;s.add(tl);
 go(t=>{hs.forEach(g=>{const u=g.userData;g.rotation.y=u.r0+Math.sin(t*.45+u.i*1.2)*.55})});}
