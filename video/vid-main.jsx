function Piece(){
  const {T}=useComposition();
  return <div data-screen-label={'t='+Math.floor(T)+'s'} style={{position:'absolute',inset:0,background:VC.paper,fontFamily:SANS,color:VC.ink,WebkitFontSmoothing:'antialiased'}}>
    <style>{'*{box-sizing:border-box}'}</style>
    <IntroScene/><C1Scene/><C2Scene/><C3Scene/><C4Scene/><C5Scene/><C6Scene/>
    <SwitchScene/><K1Scene/><K2Scene/><K3Scene/><K4Scene/><K5Scene/><K6Scene/><OutroScene/>
  </div>;
}
function App(){
  const [tw,setTweak]=useTweaks(window.TWEAK_DEFAULTS);
  return <React.Fragment>
    <CompositionStage width={1920} height={1080} scenes={window.OM_SCENES} playback={window.OM_PLAYBACK} bg={VC.paper}><Piece/></CompositionStage>
    <TweaksPanel><TweakSection label="Video"/><TweakToggle label="Motion editor" value={tw.motionEditor} onChange={v=>setTweak('motionEditor',v)}/></TweaksPanel>
  </React.Fragment>;
}
// Inline every image as a data URL before mounting, so exported frames never render blank images.
const IMG_LIST=['assets/av/marcus-vela.jpg','assets/purse.webp','assets/gladiator-helmet.webp','assets/stripe.svg'].concat([1,2,3,4,5,6].map(i=>'assets/eng-'+i+'.png'),[1,2,3].map(i=>'assets/lg-'+i+'.png'),['clash-static','clash-cape-l','clash-cape-r','arena-static','arena-cape','arena-b1','arena-b2','arena-b3','arena-b4'].map(n=>'assets/video/'+n+'.webp'));
window.__IMG={};
IMG_LIST.push(...EXTRA_PEOPLE.map(PV));
const toB=u=>fetch(u).then(r=>{if(!r.ok)throw 0;return r.blob();});
Promise.all(IMG_LIST.map(p=>toB(avSrc(p)).then(b=>new Promise(res=>{const fr=new FileReader();fr.onload=()=>{window.__IMG[avSrc(p)]=fr.result;res();};fr.onerror=res;fr.readAsDataURL(b);})).catch(()=>{})))
  .then(()=>ReactDOM.createRoot(document.getElementById('root')).render(<App/>));
