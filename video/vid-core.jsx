const VC={ink:'#1c1d1c',body:'#414b59',blue:'#678DC6',em:'#648dc6',blue2:'#80a2d5',deep:'#365f8b',press:'#5876b3',line:'#e6e4df',field:'#f4f4f3',paper:'#fbfcf7',mute:'#6f716f',faint:'#9a9c9a',pos:'#2a9d6e',gold:'#9c7d2c',
  wash:'linear-gradient(135deg,rgba(190,210,240,0.42) 0%,rgba(255,230,210,0.42) 100%)'};
const SERIF="'P22Mackinac',Georgia,serif",SANS="Inter,system-ui,sans-serif";
// The only three motion curves used in the piece.
const MOTION={
  enter:(t,a,d=.4)=>Easing.easeOutCubic(clamp((t-a)/d,0,1)),
  draw:(t,a,d=.5)=>Easing.easeInOutCubic(clamp((t-a)/d,0,1)),
  pop:(t,a,d=.38)=>Easing.easeOutBack(clamp((t-a)/d,0,1)),
};
const lerp=(a,b,p)=>a+(b-a)*p;
const money=n=>'$'+Math.round(n).toLocaleString('en-US');
const typed=(s,p)=>s.slice(0,Math.round(s.length*clamp(p,0,1)));
const cardS={position:'absolute',background:'#fff',border:'1px solid '+VC.line,borderRadius:22,boxShadow:'0 1px 2px rgba(50,52,50,.04),0 34px 80px -40px rgba(50,52,50,.34)'};
const aiS={background:VC.wash+',#fff',border:'1px solid rgba(50,52,50,.10)',borderRadius:18};
const UIX=800;
// Profile photos are stored locally in assets/av/ so exports never depend on a remote API.
const slugN=n=>n.toLowerCase().replace(/[^a-z]+/g,'-');
const PV=n=>'assets/av/'+slugN(n)+'.jpg';
const PEOPLE={'assets/candidate-profile.png':'Marcus Vela','assets/eng-1.png':'Owen Gallagher','assets/eng-2.png':'Lucas Martin','assets/eng-3.png':'Adam Foster','assets/eng-4.png':'Ryan Shaw','assets/eng-5.png':'Daniel Meyer','assets/eng-6.png':'Nikita Babych'};
const EXTRA_PEOPLE=['Owen Gallagher','Dieter Brandt','Sophie Laurent','Eduardo Rocha','Emma Collins','Lukas Weber','Anya Volkova','Samuel Brooks','Sean O\'Neill','Lena Becker','Finn Murphy'];
const avSrc=src=>PEOPLE[src]?PV(PEOPLE[src]):src;
const I=src=>(src&&window.__IMG&&window.__IMG[avSrc(src)])||avSrc(src);

function useT(name){const c=useComposition();return c.T-c.CUES[name];}
function rich(s,emColor){return String(s).split('*').map((seg,i)=>i%2?<em key={i} style={{fontStyle:'italic',color:emColor||VC.em}}>{seg}</em>:seg);}

function Scene({name,next,bg,children}){
  const c=useComposition();
  return <Shot from={c.CUES[name]} to={next?c.CUES[next]:undefined}><div style={{position:'absolute',inset:0,background:bg||VC.paper,overflow:'hidden'}}>{children}</div></Shot>;
}
const VID_EMBED=/[?&]embed\b/.test(location.search);const VID_HOLD={};
window.VID_HOLD_RESET=()=>{for(const k in VID_HOLD)delete VID_HOLD[k];};
const vidHold=(k,t,end)=>{if(!VID_EMBED)return t;if(VID_HOLD[k]||t>=end){VID_HOLD[k]=1;return 99;}return t;};
function Cam({t,dur,ox=1300,oy=540,children}){
  if(VID_EMBED)return <div style={{position:'absolute',inset:0}}>{children}</div>;
  const e=MOTION.enter(t,0,.45);const s=lerp(1.07,1,e)*(1+.035*clamp(t/dur,0,1));
  return <div style={{position:'absolute',inset:0,transform:'scale('+s+')',transformOrigin:ox+'px '+oy+'px'}}>{children}</div>;
}
function UI({children}){return <div style={{position:'absolute',left:UIX,top:0,width:1000,height:1080}}>{children}</div>;}

function Rise({t,at,d=.4,dy=26,dx=0,x,y,w,h,style,children}){
  const p=MOTION.enter(t,at,d);
  return <div style={Object.assign({position:x==null?'relative':'absolute',left:x,top:y,width:w,height:h,opacity:p,transform:'translate('+(dx*(1-p))+'px,'+(dy*(1-p))+'px)'},style)}>{children}</div>;
}
function Pop({t,at,d,x,y,w,h,style,children,origin}){
  const p=MOTION.pop(t,at,d),o=MOTION.enter(t,at,.18);
  return <div style={Object.assign({position:x==null?'relative':'absolute',left:x,top:y,width:w,height:h,opacity:o,transform:'scale('+lerp(.55,1,p)+')',transformOrigin:origin||'center'},style)}>{children}</div>;
}

function Mark({s=30,color}){return <svg viewBox="0 0 40 42" width={s} height={s*42/40} style={{display:'block',flex:'none'}}><path fill={color||VC.em} d="M1 1H16V8H8V34H16V41H1ZM39 1H24V8H32V34H24V41H39Z"></path></svg>;}
function Logo({size=24,color,markColor}){
  return <div style={{display:'flex',alignItems:'center',gap:size*.55,font:'800 '+size+'px/1 '+SANS,letterSpacing:'-.03em',color:color||VC.ink}}><Mark s={size*1.2} color={markColor}/><span><span style={{fontWeight:400}}>the</span>Colosseum</span></div>;
}
function Chrome({t,side,step,dark}){
  return null;
  const o=MOTION.enter(vidHold('chrome',t,.3),0,.3);
  return <React.Fragment>
    <div style={{position:'absolute',left:120,top:82,opacity:o}}><Logo size={24} color={dark?VC.paper:VC.ink}/></div>
    <div style={{position:'absolute',right:120,top:86,display:'flex',alignItems:'center',gap:18,opacity:o}}>
      <span style={{font:'700 15px '+SANS,letterSpacing:'.18em',color:dark?VC.blue2:VC.deep}}>{side}</span>
      {step?<span style={{display:'flex',gap:6}}>{[0,1,2,3,4,5].map(i=><i key={i} style={{display:'block',width:i===step-1?34:14,height:4,borderRadius:4,background:i<step?VC.blue:'rgba(28,29,28,.14)'}}></i>)}</span>:null}
      {step?<span style={{font:'600 15px '+SANS,color:VC.mute}}>{'0'+step+' / 06'}</span>:null}
    </div>
  </React.Fragment>;
}
function Headline({t,at=.06,out,lines,size=80,sub,subAt,x=120,w=620,color,emColor,center,top}){
  if(VID_EMBED){if(out!=null)return null;t=vidHold('head',t*3,(at||0)+1.2);}
  const o=VID_EMBED||out==null?0:MOTION.draw(t,out,.28);
  const sp=MOTION.enter(t,subAt==null?at+.28:subAt,.4);
  const pos=top==null?{top:0,height:1080,display:'flex',flexDirection:'column',justifyContent:'center'}:{top};
  return <div style={Object.assign({position:'absolute',left:x,width:w,textAlign:center?'center':'left'},pos)}>
    <div style={{font:'400 '+size+'px/1.02 '+SERIF,letterSpacing:'-.03em',color:color||VC.ink}}>
      {lines.map((l,i)=>{const p=MOTION.enter(t,at+i*.07,.5);return <div key={i} style={{overflow:'hidden',padding:'0 .1em .14em .02em',margin:'0 -.1em -.14em -.02em'}}><div style={{transform:'translateY('+((1-p)*112-o*112)+'%)'}}>{rich(l,emColor)}</div></div>;})}
    </div>
    {sub?<div style={{marginTop:30,font:'400 24px/1.5 '+SANS,color:color?'rgba(246,243,238,.75)':VC.body,maxWidth:center?760:560,marginLeft:center?'auto':0,marginRight:center?'auto':0,opacity:sp*(1-o),transform:'translateY('+((1-sp)*14)+'px)',textWrap:'pretty'}}>{sub}</div>:null}
  </div>;
}

// The black dot "cursor". keys: [{t,x,y,c(click),down(held until next key),hide}]
function Dot({t,keys,size=30}){
  const first=keys[0],last=keys[keys.length-1];
  let x=first.x,y=first.y,held=false;
  for(let i=0;i<keys.length-1;i++){const a=keys[i],b=keys[i+1];
    if(t>=b.t){x=b.x;y=b.y;continue;}
    if(t>=a.t){const p=MOTION.draw(t,a.t,b.t-a.t);x=lerp(a.x,b.x,p);y=lerp(a.y,b.y,p);held=!!a.down;break;}
  }
  const op=MOTION.enter(t,first.t-.22,.22)*(last.hide?1-MOTION.enter(t,last.t,.2):1);
  let press=held?1:0;const rip=[];
  keys.forEach((k,i)=>{if(!k.c)return;const dt=t-k.t;
    if(dt>-.12&&dt<.2)press=Math.max(press,Math.sin(Math.PI*clamp((dt+.12)/.32,0,1)));
    if(dt>=0&&dt<.55){const p=MOTION.enter(t,k.t,.55);rip.push(<div key={i} style={{position:'absolute',left:-size/2,top:-size/2,width:size,height:size,borderRadius:'50%',border:'2px solid '+VC.ink,opacity:.55*(1-p),transform:'scale('+(1+p*2)+')'}}></div>);}
  });
  return <div style={{position:'absolute',left:x,top:y,width:0,height:0,opacity:op,zIndex:60,pointerEvents:'none'}}>{rip}
    <div style={{position:'absolute',left:-size/2,top:-size/2,width:size,height:size,borderRadius:'50%',background:VC.ink,border:'3px solid #fff',boxShadow:'0 8px 20px rgba(0,0,0,.28)',transform:'scale('+(1-.24*press)+')'}}></div></div>;
}

function Chip({children,style,on}){return <span style={Object.assign({display:'inline-flex',alignItems:'center',gap:8,font:'500 17px '+SANS,color:on?'#fff':VC.body,background:on?VC.ink:'#fff',border:'1px solid '+(on?VC.ink:VC.line),borderRadius:999,padding:'8px 16px',whiteSpace:'nowrap'},style)}>{children}</span>;}
const KIND={bounty:{c:'#9a5b12',bg:'rgba(199,124,32,.11)',b:'rgba(199,124,32,.24)',l:'Bounty'},hiring:{c:'#2f6b4f',bg:'rgba(47,107,79,.1)',b:'rgba(47,107,79,.22)',l:'Hiring challenge'},job:{c:VC.mute,bg:VC.field,b:VC.line,l:'Job'}};
function Kind({k,label,style}){const s=KIND[k];return <span style={Object.assign({font:'700 15px '+SANS,color:s.c,background:s.bg,border:'1px solid '+s.b,borderRadius:999,padding:'6px 14px',whiteSpace:'nowrap'},style)}>{label||s.l}</span>;}
function Prize({children}){return <span style={{font:'700 17px '+SANS,color:VC.blue,background:'rgba(103,141,198,.12)',borderRadius:999,padding:'6px 14px',whiteSpace:'nowrap'}}>{children}</span>;}
function AiHead({children,style}){return <div style={Object.assign({display:'flex',alignItems:'center',gap:10,font:'700 15px '+SANS,letterSpacing:'.13em',textTransform:'uppercase',color:VC.press},style)}><span style={{color:VC.blue,fontSize:19}}>✦</span>{children}</div>;}
function Av({src,size=48,init,bg,style}){
  return <div style={Object.assign({width:size,height:size,borderRadius:'50%',overflow:'hidden',flex:'none',background:bg||VC.wash+','+VC.blue2,display:'grid',placeItems:'center',font:'700 '+(size*.36)+'px '+SANS,color:VC.ink,border:'2px solid #fff'},style)}>{src?<img src={I(src)} alt="" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>:init}</div>;
}
function Ring({v,p=1,size=64,stroke=6,color}){
  const r=(size-stroke)/2,C=2*Math.PI*r;
  return <div style={{position:'relative',width:size,height:size,flex:'none'}}>
    <svg width={size} height={size} style={{display:'block',transform:'rotate(-90deg)'}}><circle cx={size/2} cy={size/2} r={r} fill="none" stroke={VC.line} strokeWidth={stroke}></circle><circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color||VC.blue} strokeWidth={stroke} strokeLinecap="round" strokeDasharray={C} strokeDashoffset={C*(1-v/100*p)}></circle></svg>
    <div style={{position:'absolute',inset:0,display:'grid',placeItems:'center',font:'700 '+Math.round(size*.27)+'px '+SANS,color:VC.ink,letterSpacing:'-.02em'}}>{Math.round(v*p)}</div>
  </div>;
}
function Btn({children,dark,style}){return <div style={Object.assign({display:'flex',alignItems:'center',justifyContent:'center',gap:10,height:56,borderRadius:999,font:'600 19px '+SANS,background:dark?VC.ink:'#fff',color:dark?'#fff':VC.ink,border:'1px solid '+(dark?VC.ink:VC.blue2),whiteSpace:'nowrap'},style)}>{children}</div>;}
const Check=({s=18,c})=><svg viewBox="0 0 24 24" width={s} height={s} style={{display:'block',flex:'none'}}><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke={c||'currentColor'} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>;

// ---- inline website art, driven from T (deterministic stand-in for the GSAP loops) ----
// Website art, pre-rasterised from the site SVGs into layered PNGs (static + each moving layer),
// with the GSAP sway loops re-expressed as pure functions of T.
const sway=(t,amp,half)=>amp*(1-Math.cos(Math.PI*t/half))/2;
function ArtLayers({vb,base,layers,t,style}){
  return <div style={Object.assign({position:'relative',width:'100%',paddingTop:(vb[3]/vb[2]*100)+'%'},style)}>
    <img src={I(base)} alt="" style={{position:'absolute',left:0,top:0,width:'100%',height:'100%',display:'block'}}/>
    {layers.map((l,i)=><img key={i} src={I(l.src)} alt="" style={{position:'absolute',left:0,top:0,width:'100%',height:'100%',display:'block',transformOrigin:((l.o[0]-vb[0])/vb[2]*100)+'% '+((l.o[1]-vb[1])/vb[3]*100)+'%',transform:l.f(t)}}/>)}
  </div>;
}
const CLASH_VB=[0,-40,2204,508];
const CLASH_L=[{src:'assets/video/clash-cape-l.webp',o:[843,68],f:t=>'skewY('+sway(t*1.8,4.8,2.4).toFixed(3)+'deg)'},{src:'assets/video/clash-cape-r.webp',o:[1404,103],f:t=>'skewY('+sway(t*1.8,-4.2,3).toFixed(3)+'deg)'}];
function ClashArt({t}){return <ArtLayers vb={CLASH_VB} base="assets/video/clash-static.webp" layers={CLASH_L} t={t}/>;}
const ARENA_VB=[0,0,1658,271];
const ARENA_L=[{src:'assets/video/arena-cape.webp',o:[618,72],f:t=>{const k=t*2.2;return 'rotate('+sway(k,-.6,3).toFixed(3)+'deg) skewX('+sway(k,5,3).toFixed(3)+'deg) scaleX('+(1+sway(k,.022,3)).toFixed(4)+')';}}]
  .concat([[957,61,5,2.4],[1153,58,-4.4,3],[1364,117,5.6,4],[748,169,-5,3]].map((b,i)=>({src:'assets/video/arena-b'+(i+1)+'.webp',o:[b[0],b[1]],f:t=>{const k=t*2.2;return 'skewX('+sway(k,b[2],b[3]).toFixed(3)+'deg) scaleX('+(1+sway(k,.025,b[3])).toFixed(4)+')';}})));
function ArenaArt({t}){return <ArtLayers vb={ARENA_VB} base="assets/video/arena-static.webp" layers={ARENA_L} t={t}/>;}

Object.assign(window,{VC,SERIF,SANS,MOTION,lerp,money,typed,cardS,aiS,UIX,useT,rich,Scene,Cam,UI,Rise,Pop,Mark,Logo,Chrome,Headline,Dot,Chip,KIND,Kind,Prize,AiHead,Av,Ring,Btn,Check,ClashArt,ArenaArt,I,PV,PEOPLE,EXTRA_PEOPLE});
