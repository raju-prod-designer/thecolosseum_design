import * as THREE from 'three';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';

const INK=0x232523,BLUE=0x678DC6,GOLD=0xe8c27a;
const mouse={x:0,y:0},sm={x:0,y:0};
addEventListener('pointermove',e=>{mouse.x=e.clientX/innerWidth-.5;mouse.y=e.clientY/innerHeight-.5});

function stage(el,bg,camPos,look){
  const r=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});
  r.setPixelRatio(Math.min(devicePixelRatio,2));
  r.toneMapping=THREE.ACESFilmicToneMapping;r.toneMappingExposure=1.05;
  r.shadowMap.enabled=true;r.shadowMap.type=THREE.VSMShadowMap;
  el.appendChild(r.domElement);
  const s=new THREE.Scene();s.background=new THREE.Color(bg);
  const pm=new THREE.PMREMGenerator(r);s.environment=pm.fromScene(new RoomEnvironment(),.04).texture;
  const c=new THREE.PerspectiveCamera(30,1,.1,100);
  const d=new THREE.DirectionalLight(0xffffff,1.6);d.position.set(3,9,5);d.castShadow=true;
  d.shadow.mapSize.set(1024,1024);Object.assign(d.shadow.camera,{left:-7,right:7,top:7,bottom:-7});d.shadow.radius=14;d.shadow.blurSamples=20;d.shadow.bias=-.0005;
  s.add(d);
  const cp=new THREE.Vector3(...camPos),lk=new THREE.Vector3(...look);let k=1;
  const fit=()=>{const w=el.clientWidth,h=el.clientHeight;r.setSize(w,h,false);c.aspect=w/h;k=w/h<1?1.45:1;c.updateProjectionMatrix()};
  new ResizeObserver(fit).observe(el);fit();
  let vis=false;new IntersectionObserver(([e])=>vis=e.isIntersecting).observe(el);
  return {s,c,r,go(fn){const clk=new THREE.Clock();let t=0;
    const frame=dt=>{t+=dt;sm.x+=(mouse.x-sm.x)*.04;sm.y+=(mouse.y-sm.y)*.04;fn(t,dt);
      c.position.copy(cp).multiplyScalar(k);c.position.x+=sm.x*1.6;c.position.y-=sm.y*1.1;c.lookAt(lk);r.render(s,c)};
    frame(2);
    (function loop(){requestAnimationFrame(loop);const dt=Math.min(clk.getDelta(),.05);if(!vis)return;frame(dt)})()}};
}
function shadowFloor(s,y,op=.1){const g=new THREE.Mesh(new THREE.PlaneGeometry(40,40),new THREE.ShadowMaterial({opacity:op}));g.rotation.x=-Math.PI/2;g.position.y=y;g.receiveShadow=true;s.add(g)}
const glass=(o={})=>new THREE.MeshPhysicalMaterial({color:0xffffff,metalness:0,roughness:.06,transmission:1,thickness:.8,ior:1.45,iridescence:.9,iridescenceIOR:1.35,iridescenceThicknessRange:[200,800],clearcoat:1,clearcoatRoughness:.05,envMapIntensity:1.3,...o});
const gold=(o={})=>new THREE.MeshPhysicalMaterial({color:GOLD,metalness:.62,roughness:.3,clearcoat:.8,clearcoatRoughness:.1,envMapIntensity:2.4,...o});

/* ---------- 01 Gates: a stream of gladiators thinning through glass gates ---------- */
{
  const {s,go}=stage(document.getElementById('v1'),0xffffff,[-10,3.6,13],[-.6,-.3,0]);
  const GX=[-4.4,-2.2,0,2.2,4.4];
  GX.forEach((x,i)=>{const R=1.75-i*.22;
    const m=new THREE.Mesh(new THREE.TorusGeometry(R,.11,64,220),i==4?gold():glass({attenuationColor:new THREE.Color(0xdfe8f6),attenuationDistance:2}));
    m.rotation.y=Math.PI/2;m.position.x=x;s.add(m)});
  const champ=new THREE.Mesh(new THREE.SphereGeometry(.26,64,48),gold({roughness:.08}));champ.position.x=6;s.add(champ);
  const N=18000,seed=new Float32Array(N*4);for(let i=0;i<N*4;i++)seed[i]=Math.random();
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(new Float32Array(N*3),3));g.setAttribute('aS',new THREE.BufferAttribute(seed,4));
  const mat=new THREE.ShaderMaterial({transparent:true,depthWrite:false,
    uniforms:{uT:{value:0},uGX:{value:GX},uPix:{value:Math.min(devicePixelRatio,2)}},
    vertexShader:`uniform float uT,uPix;uniform float uGX[5];attribute vec4 aS;varying vec3 vC;varying float vA;
    void main(){float L=17.;float sp=.55+aS.x*.45;float x=mod(uT*sp+aS.y*L,L)-9.;
      float g=min(5.,floor(log(max(aS.z,1e-5))/log(.6)));
      float ang=aS.w*6.2832+x*.45+uT*.15;float r0=pow(fract(aS.x*13.7),.5)*1.45;
      float gx=g<5.?uGX[int(g)]:6.;float xe=min(x,gx);
      float f=clamp(1.-(xe+5.2)/12.,.12,1.);vec3 p=vec3(xe,sin(ang)*r0*f,cos(ang)*r0*f);
      vA=smoothstep(-9.,-7.,x);float sz=1.;
      vec3 ink=mix(vec3(.14,.145,.14),vec3(.40,.55,.78),step(.82,aS.w));vC=ink;
      if(x>gx){float d=x-gx;
        if(g<5.){vec3 rd=normalize(vec3(0.,p.y,p.z)+1e-3);p+=vec3(d*.35,0.,0.)+rd*d*1.1;p.y-=d*d*.35;vA*=max(0.,1.-d/2.2);vC=vec3(.72,.72,.70);sz=.8;}
        else{p=mix(p,vec3(6.,0.,0.),smoothstep(0.,1.2,d));vA*=1.-smoothstep(.9,1.3,d);}
      }
      if(g>=5.&&x>uGX[4]){vC=vec3(.83,.66,.30);sz=1.9;}
      vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=sz*uPix*(1.6+aS.z*1.8)*(13./-mv.z);}`,
    fragmentShader:`varying vec3 vC;varying float vA;void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;gl_FragColor=vec4(vC,vA*smoothstep(.5,.25,d)*.9);}`});
  s.add(new THREE.Points(g,mat));
  go(t=>{mat.uniforms.uT.value=t;champ.position.y=Math.sin(t*1.6)*.05;champ.rotation.y=t});
}

/* ---------- 02 Treasury: molten purse sealed inside a glass vault ---------- */
{
  const {s,go}=stage(document.getElementById('v2'),0xf6f4f0,[6.2,4.4,9.4],[0,.35,0]);shadowFloor(s,-1.52,.12);
  const vault=new THREE.Group();s.add(vault);
  const box=new THREE.Mesh(new RoundedBoxGeometry(2.7,2.7,2.7,10,.42),glass({thickness:1.6,roughness:.04,iridescence:.6,attenuationColor:new THREE.Color(0xe7eefa),attenuationDistance:3}));
  box.castShadow=true;vault.add(box);
  const plinth=new THREE.Mesh(new RoundedBoxGeometry(3.3,.16,3.3,6,.07),new THREE.MeshPhysicalMaterial({color:0xffffff,roughness:.35,clearcoat:.4}));
  plinth.position.y=-1.44;plinth.castShadow=plinth.receiveShadow=true;s.add(plinth);
  const bm=gold({roughness:.18,metalness:.75});const uT={value:0};
  bm.onBeforeCompile=sh=>{sh.uniforms.uT=uT;
    sh.vertexShader=`uniform float uT;
    float fld(vec3 p){return .12*sin(p.x*1.8+uT*.9)*sin(p.y*2.1+uT*.7)*sin(p.z*1.7+uT*1.1)+.03*sin(p.x*3.6+p.y*3.1+uT*1.3);}
    vec3 dsp(vec3 n){return n*(.82+fld(n*1.4));}
    `+sh.vertexShader.replace('#include <beginnormal_vertex>',`vec3 n0=normalize(position);vec3 tg=normalize(cross(n0,abs(n0.y)<.99?vec3(0,1,0):vec3(1,0,0)));vec3 bt=cross(n0,tg);
      vec3 P0=dsp(n0);vec3 P1=dsp(normalize(n0+tg*.01));vec3 P2=dsp(normalize(n0+bt*.01));vec3 objectNormal=normalize(cross(P1-P0,P2-P0));`)
    .replace('#include <begin_vertex>','vec3 transformed=P0;')};
  const blob=new THREE.Mesh(new THREE.IcosahedronGeometry(1,64),bm);blob.castShadow=true;vault.add(blob);
  const seal=new THREE.Mesh(new THREE.TorusGeometry(2.25,.035,24,200),new THREE.MeshPhysicalMaterial({color:BLUE,roughness:.2,metalness:.2,clearcoat:1}));
  seal.rotation.set(Math.PI/2.3,0,.2);vault.add(seal);
  const CN=36,coins=new THREE.InstancedMesh(new THREE.CylinderGeometry(.2,.2,.035,48),gold({roughness:.2}),CN);coins.castShadow=true;s.add(coins);
  const o=new THREE.Object3D(),cs=[...Array(CN)].map((_,i)=>({ph:i/CN,a:Math.random()*6.28,y:(Math.random()-.5)*1.6,sp:.07+Math.random()*.04}));
  go((t,dt)=>{uT.value=t;vault.rotation.y=t*.12;vault.position.y=Math.sin(t*.8)*.04;seal.rotation.z=t*.3;
    cs.forEach((c,i)=>{c.ph=(c.ph+dt*c.sp)%1;const p=c.ph,R=4.2-p*3.1,a=c.a+p*5.5+t*.05;
      o.position.set(Math.cos(a)*R,c.y*(1-p*.6)+Math.sin(t+i)*.05,Math.sin(a)*R);o.rotation.set(t*.7+i,a,.4+i);
      o.scale.setScalar(Math.min(1,p*6)*(1-THREE.MathUtils.smoothstep(p,.85,1)));o.updateMatrix();coins.setMatrixAt(i,o.matrix)});
    coins.instanceMatrix.needsUpdate=true});
}

/* ---------- 03 Podium: glass plinths, champion orbs and a laurel ---------- */
{
  const {s,go}=stage(document.getElementById('v3'),0xffffff,[4.6,3.8,10.5],[0,1.25,0]);shadowFloor(s,0,.12);
  const P=[[-1.5,1.3,new THREE.MeshPhysicalMaterial({color:0xdde6f5,metalness:1,roughness:.05})],[0,2.05,gold({roughness:.18})],[1.5,.85,new THREE.MeshPhysicalMaterial({color:BLUE,roughness:.28,clearcoat:1,clearcoatRoughness:.08})]],orbs=[];
  P.forEach(([x,h,om])=>{
    const m=new THREE.Mesh(new RoundedBoxGeometry(1.3,h,1.3,8,.14),glass({roughness:.28,thickness:1.4,iridescence:.5,attenuationColor:new THREE.Color(0xeef1f6),attenuationDistance:2.5}));
    m.position.set(x,h/2,0);m.castShadow=true;s.add(m);
    const o=new THREE.Mesh(new THREE.SphereGeometry(.3,64,48),om);o.castShadow=true;o.userData.h=h+.34;o.position.set(x,h+.34,0);s.add(o);orbs.push(o)});
  const wreath=new THREE.Group();wreath.position.set(0,3.55,0);s.add(wreath);
  const LN=2*13*2,leaves=new THREE.InstancedMesh(new THREE.SphereGeometry(1,24,16),gold({roughness:.14}),LN);leaves.castShadow=true;wreath.add(leaves);
  const o=new THREE.Object3D();let li=0;
  for(const sd of[-1,1])for(let i=0;i<13;i++)for(const [rr,off] of[[.5,0],[.64,.1]]){
    const a=-Math.PI/2+sd*(THREE.MathUtils.degToRad(14+i*12.5)+off);const sc=1-i*.03;
    o.position.set(Math.cos(a)*rr,Math.sin(a)*rr,0);o.rotation.set(0,0,a+sd*(Math.PI/2+.55));o.scale.set(.045*sc,.13*sc,.03);o.updateMatrix();leaves.setMatrixAt(li++,o.matrix)}
  const GN=64,dots=[];for(let i=0;i<GN;i++)for(let j=0;j<GN;j++){const x=(i-GN/2)*.22,z=(j-GN/2)*.22;const d=Math.hypot(x,z);if(d<1.4||d>7)continue;dots.push(x,0,z)}
  const dg=new THREE.BufferGeometry();dg.setAttribute('position',new THREE.Float32BufferAttribute(dots,3));
  const dm=new THREE.ShaderMaterial({transparent:true,depthWrite:false,uniforms:{uT:{value:0},uPix:{value:Math.min(devicePixelRatio,2)}},
    vertexShader:`uniform float uT,uPix;varying float vA,vR;void main(){vec3 p=position;float d=length(p.xz);float tier=floor(d/1.4);
      float w=sin(d*2.2-uT*1.6);p.y=.02+max(w,0.)*.06;vA=(1.-smoothstep(4.5,7.,d))*(.25+.5*max(w,0.));vR=mod(tier,2.);
      vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=uPix*(2.+max(w,0.)*1.6)*(10./-mv.z);}`,
    fragmentShader:`varying float vA,vR;void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;vec3 c=mix(vec3(.14,.145,.14),vec3(.40,.55,.78),vR*.7);gl_FragColor=vec4(c,vA);}`});
  s.add(new THREE.Points(dg,dm));
  go(t=>{dm.uniforms.uT.value=t;wreath.rotation.y=Math.sin(t*.5)*.7;wreath.position.y=3.55+Math.sin(t*1.1)*.07;
    orbs.forEach((o,i)=>{o.position.y=o.userData.h+Math.sin(t*1.3+i*1.4)*.07;o.rotation.y=t*.6})});
}
