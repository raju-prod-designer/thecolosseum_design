/* Design-review tweaks: small button bottom-left, opens a panel of registered option groups.
   Register more groups from any page: TCTweaks.register({id,title,controls:[{key,label,options:[[value,label],...],def}],apply(state)}) */
(function(){
var KEY='tc-tweaks-v1',store={};try{store=JSON.parse(localStorage.getItem(KEY))||{};}catch(e){}
var groups=[],openG={},root=document.documentElement;
var css=`
.tw-fab{position:fixed;left:18px;bottom:18px;z-index:900;height:34px;display:flex;align-items:center;gap:7px;padding:0 13px 0 11px;border-radius:999px;border:1px solid var(--line,#e6e4df);background:#fff;color:var(--ink2,#1c1d1c);font:600 12.5px/1 inherit;font-family:inherit;cursor:pointer;box-shadow:0 6px 18px -8px rgba(31,33,32,.22)}
.tw-fab svg{width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round}
.tw-fab:hover,.tw.open .tw-fab{border-color:var(--blue,#678DC6);box-shadow:0 0 0 3px rgba(103,141,198,.16)}
.tw-panel{position:fixed;left:18px;bottom:62px;z-index:900;width:300px;max-height:calc(100vh - 90px);overflow:auto;background:#fff;border:1px solid var(--line,#e6e4df);border-radius:16px;box-shadow:0 18px 44px rgba(31,33,32,.16);display:none;font-family:inherit;color:var(--ink2,#1c1d1c)}
.tw.open .tw-panel{display:block}
.tw-head{display:flex;align-items:center;justify-content:space-between;padding:13px 16px 11px;border-bottom:1px solid var(--line,#e6e4df);font-weight:700;font-size:13.5px}
.tw-reset{border:0;background:none;font:inherit;font-size:12px;font-weight:600;color:var(--t-faint,#8a8a86);cursor:pointer}
.tw-reset:hover{color:var(--blue,#678DC6)}
.tw-grp+.tw-grp{border-top:1px solid var(--line,#e6e4df)}
.tw-gt{width:100%;display:flex;align-items:center;justify-content:space-between;gap:10px;padding:13px 16px;border:0;background:none;font:inherit;font-size:13px;font-weight:700;color:var(--ink2,#1c1d1c);cursor:pointer;text-align:left}
.tw-gt:hover{background:#fbfaf8}
.tw-gt .tw-cur{margin-left:auto;font-size:11.5px;font-weight:600;color:var(--t-faint,#8a8a86);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:130px}
.tw-gt svg{width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex:none;transition:transform .2s}
.tw-grp.open .tw-gt svg{transform:rotate(180deg)}
.tw-grp.open .tw-gt .tw-cur{display:none}
.tw-gb{display:none;flex-direction:column;gap:12px;padding:2px 16px 16px}
.tw-grp.open .tw-gb{display:flex}
.tw-ctl{display:flex;flex-direction:column;gap:7px}
.tw-lbl{font-size:12.5px;font-weight:600}
.tw-opts{display:flex;flex-wrap:wrap;gap:6px}
.tw-opt{height:28px;padding:0 11px;border-radius:999px;border:1px solid var(--line,#e6e4df);background:#fff;font:inherit;font-size:12px;font-weight:600;color:var(--ink2,#1c1d1c);cursor:pointer}
.tw-opt:hover{border-color:var(--ink2,#1c1d1c)}
.tw-opt.on{background:var(--ink2,#1c1d1c);border-color:var(--ink2,#1c1d1c);color:#fff}
@media (max-width:720px){.tw-fab{left:12px;bottom:12px}.tw-panel{left:12px;right:12px;width:auto;bottom:54px}}
`;
var st=document.createElement('style');st.id='tw-css';st.textContent=css;document.head.appendChild(st);
var w=document.createElement('div');w.className='tw';
w.innerHTML='<div class="tw-panel" role="dialog" aria-label="Tweaks"><div class="tw-head"><span>Tweaks</span><button type="button" class="tw-reset">Reset</button></div><div class="tw-body"></div></div><button type="button" class="tw-fab" aria-label="Open tweaks"><svg viewBox="0 0 24 24"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="17" x2="20" y2="17"/><circle cx="9" cy="7" r="2.2" fill="#fff"/><circle cx="15" cy="17" r="2.2" fill="#fff"/></svg>Tweaks</button>';
function save(){try{localStorage.setItem(KEY,JSON.stringify(store));}catch(e){}}
function state(g){var s=store[g.id]||{};g.controls.forEach(function(c){if(s[c.key]==null)s[c.key]=c.def;});return s;}
function render(){
  w.querySelector('.tw-body').innerHTML=groups.map(function(g){var s=state(g);
    var cur=g.controls[0].options.filter(function(o){return o[0]===s[g.controls[0].key];})[0];
    return '<div class="tw-grp'+(openG[g.id]?' open':'')+'"><button type="button" class="tw-gt" data-tg="'+g.id+'" aria-expanded="'+(!!openG[g.id])+'"><span>'+g.title+'</span><span class="tw-cur">'+(cur?cur[1]:'')+'</span><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg></button><div class="tw-gb">'+g.controls.map(function(c){
      return '<div class="tw-ctl"><div class="tw-lbl">'+c.label+'</div><div class="tw-opts">'+c.options.map(function(o){
        return '<button type="button" class="tw-opt'+(s[c.key]===o[0]?' on':'')+'" data-g="'+g.id+'" data-k="'+c.key+'" data-v="'+o[0]+'">'+o[1]+'</button>';}).join('')+'</div></div>';}).join('')+'</div></div>';}).join('');
}
function apply(g){var s=state(g);g.controls.forEach(function(c){root.setAttribute('data-tw-'+g.id+'-'+c.key,s[c.key]);});if(g.apply)g.apply(s);}
w.addEventListener('click',function(e){
  e.stopPropagation();
  if(e.target.closest('.tw-fab')){w.classList.toggle('open');return;}
  if(e.target.closest('.tw-reset')){groups.forEach(function(g){delete store[g.id];apply(g);});save();render();return;}
  var tg=e.target.closest('.tw-gt');if(tg){openG[tg.dataset.tg]=!openG[tg.dataset.tg];render();return;}
  var o=e.target.closest('.tw-opt');if(!o)return;
  var g=groups.filter(function(x){return x.id===o.dataset.g;})[0];
  store[g.id]=state(g);store[g.id][o.dataset.k]=o.dataset.v;save();apply(g);render();
});
document.addEventListener('click',function(){w.classList.remove('open');});
document.addEventListener('keydown',function(e){if(e.key==='Escape')w.classList.remove('open');});
window.TCTweaks={register:function(g){groups.push(g);apply(g);render();}};
function mount(){document.body.appendChild(w);}
if(document.body)mount();else document.addEventListener('DOMContentLoaded',mount);

/* ---- Header ---- */
var hcss=`
html[data-tw-header-style] .app-top{width:calc(100% + 64px);margin:-30px -32px 32px;padding:16px 32px;box-sizing:border-box;justify-content:flex-start;background:#fff;transition:box-shadow .2s,background .2s}
html[data-tw-header-logo="center"] .app-top{justify-content:center}
html[data-tw-header-style] .app-top{min-height:70px}
html[data-tw-header-style] .app-top .app-logo{display:flex!important;align-items:center;justify-content:flex-start;gap:.42em;flex:none;margin:0!important;font-size:21px!important;font-weight:800;letter-spacing:-0.03em;line-height:1;color:var(--ink2)}
html[data-tw-header-style] .app-top .app-logo .tc-mark{margin:0;vertical-align:0;display:flex;align-items:center}
html[data-tw-header-style] .app-top .app-logo .tc-mark svg{width:.96em;height:1.04em;transform:translateY(-.02em)}
html[data-tw-header-style] .app-top .app-logo .the{font-weight:400;margin-right:-.42em}
html[data-tw-header-size="compact"] .app-top{min-height:56px}
html[data-tw-header-style] .app-top>.app-actions,html[data-tw-header-style] .app-top>.app-user{right:32px}
html[data-tw-header-size="compact"] .app-top{padding-top:11px;padding-bottom:11px}
html[data-tw-header-sticky="on"] .app-top{position:sticky;top:0}
html[data-tw-header-style="divider"] .app-top{border-bottom:1px solid var(--line)}
html[data-tw-header-style="shadow"] .app-top{box-shadow:0 1px 0 var(--line),0 10px 24px -18px rgba(31,33,32,.28)}
html[data-tw-header-style="frosted"] .app-top{background:rgba(255,255,255,.72);-webkit-backdrop-filter:saturate(1.4) blur(14px);backdrop-filter:saturate(1.4) blur(14px);border-bottom:1px solid transparent}
html[data-tw-header-style="frosted"] .app-top.tw-scrolled{border-bottom-color:var(--line);box-shadow:0 12px 28px -20px rgba(31,33,32,.3)}
html[data-tw-header-style="accent"] .app-top{border-top:3px solid var(--blue);border-bottom:1px solid var(--line)}
html[data-tw-header-style="band"] .app-top{background:var(--field);border-bottom:1px solid var(--line)}
html[data-tw-header-style="floating"] .app-top{width:100%;margin:-14px 0 32px;padding-left:22px;padding-right:22px;border:1px solid var(--line);border-radius:18px;box-shadow:0 14px 32px -20px rgba(31,33,32,.18)}
html[data-tw-header-style="floating"] .app-top>.app-actions,html[data-tw-header-style="floating"] .app-top>.app-user{right:22px}
html[data-tw-header-style="floating"][data-tw-header-sticky="on"] .app-top{top:12px}
@media (max-width:720px){
html[data-tw-header-style] .app-top{width:calc(100% + 28px);margin:-16px -14px 18px!important;padding:10px 14px;min-height:56px}
html[data-tw-header-style] .app-top .app-logo{font-size:18px!important}
html[data-tw-header-style] .app-top>.app-actions,html[data-tw-header-style] .app-top>.app-user{right:14px}
html[data-tw-header-style="floating"] .app-top{width:100%;margin:-6px 0 18px!important;padding:8px 12px}
html[data-tw-header-style="floating"] .app-top>.app-actions,html[data-tw-header-style="floating"] .app-top>.app-user{right:12px}
}`;
var hs=document.createElement('style');hs.id='tw-header-css';hs.textContent=hcss;document.head.appendChild(hs);
function onScroll(){var t=document.querySelector('.app-top');if(t)t.classList.toggle('tw-scrolled',window.scrollY>4);}
window.addEventListener('scroll',onScroll,{passive:true});
TCTweaks.register({id:'header',title:'Header',controls:[
  {key:'style',label:'Style',def:'divider',options:[['divider','Divider'],['shadow','Soft shadow'],['frosted','Frosted glass'],['accent','Brand top bar'],['band','Tinted band'],['floating','Floating bar']]},
  {key:'logo',label:'Logo position',def:'left',options:[['left','Left'],['center','Center']]},
  {key:'size',label:'Height',def:'regular',options:[['regular','Regular'],['compact','Compact']]},
  {key:'sticky',label:'Stick on scroll',def:'on',options:[['on','On'],['off','Off']]}
]});

/* ---- Navigation ---- */
var NAV=[
 ['Candidate - Webapp copy.html','Challenges & Jobs','<polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/><line x1="13" y1="19" x2="19" y2="13"/><line x1="16" y1="16" x2="20" y2="20"/><line x1="19" y1="21" x2="21" y2="19"/><polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5"/><line x1="5" y1="14" x2="9" y2="18"/><line x1="7" y1="17" x2="4" y2="20"/><line x1="3" y1="19" x2="5" y2="21"/>'],
 ['Candidate - My applications.html','My applications','<rect x="3.5" y="7" width="17" height="13" rx="2"/><path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7"/>'],
 ['Candidate - Leaderboard.html','Leaderboard','<line x1="4" y1="20" x2="20" y2="20"/><rect x="5" y="12" width="4" height="8"/><rect x="10" y="7" width="4" height="13"/><rect x="15" y="10" width="4" height="10"/>']];
var here=decodeURIComponent(location.pathname.split('/').pop());
var ncss=`
.tw-nav{display:none;align-items:center;font-size:14px;font-weight:600}
.tw-nav a{display:flex;align-items:center;gap:7px;color:var(--t-mute,#6b6b67);white-space:nowrap;font-weight:450;transition:color .15s,background .15s}
.tw-nav a:hover{color:var(--ink2)}
.tw-nav a.on{color:var(--ink2);font-weight:650}
.tw-nav svg{width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;flex:none}
html[data-tw-nav-icons="off"] .tw-nav svg{display:none}
.tw-nav .sep{width:1px;height:14px;background:var(--line)}
html:not([data-tw-nav-place="center"]) .tw-nav .sep{display:none}
html[data-tw-nav-place="center"] .tw-nav,html[data-tw-nav-place="segmented"] .tw-nav{display:flex;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}
html[data-tw-nav-place="center"] .app-top,html[data-tw-nav-place="segmented"] .app-top{justify-content:flex-start!important}
html[data-tw-nav-place="center"] .tw-nav{gap:4px;display:grid;grid-template-columns:1fr auto 1fr auto 1fr;align-items:center;width:max-content}
html[data-tw-nav-place="center"] .tw-nav a{position:relative;padding:6px 16px;justify-content:center;align-items:center;line-height:1}
.tw-nav a svg{display:block;transform:translateY(-1.5px)}
html[data-tw-nav-place="segmented"] .tw-nav{gap:2px;padding:3px;border-radius:999px;background:var(--field);border:1px solid var(--line)}
html[data-tw-nav-place="segmented"] .tw-nav a{height:32px;padding:0 15px;border-radius:999px;font-size:13.5px}
html[data-tw-nav-place="segmented"] .tw-nav a.on{background:#fff;box-shadow:0 1px 2px rgba(31,33,32,.08),0 4px 12px -6px rgba(31,33,32,.2)}
html[data-tw-nav-place="left"] .app-top{justify-content:flex-start!important}
html[data-tw-nav-place="left"] .tw-nav{display:flex;gap:4px;margin-left:34px;padding-left:22px;border-left:1px solid var(--line)}
html[data-tw-nav-place="left"] .tw-nav a{height:34px;padding:0 12px;border-radius:10px}
html[data-tw-nav-place="left"] .tw-nav a:hover{background:var(--field)}
html[data-tw-nav-place="left"] .tw-nav a.on{background:var(--field)}
html[data-tw-nav-place="tabs"] .app-top{margin-bottom:76px}
html[data-tw-nav-place="tabs"] .tw-nav{display:flex;gap:26px;position:absolute;left:0;right:0;top:100%;height:44px;padding:0 32px;background:inherit;border-bottom:1px solid var(--line)}
html[data-tw-nav-place="tabs"][data-tw-header-style="floating"] .tw-nav{padding:0 22px;border-radius:0 0 18px 18px;border:1px solid var(--line);border-top:0;left:-1px;right:-1px;background:#fff}
html[data-tw-nav-place="tabs"][data-tw-header-style="floating"] .app-top{border-radius:18px 18px 0 0}
html[data-tw-nav-place="tabs"] .tw-nav a{height:100%;position:relative}
html[data-tw-nav-place="tabs"] .tw-nav a.on::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:2px;background:var(--ink2)}
html[data-tw-nav-place="dock"] .tw-nav{display:flex;gap:2px;position:fixed;left:50%;bottom:22px;transform:translateX(-50%);z-index:850;padding:5px;border-radius:999px;background:var(--ink2);box-shadow:0 18px 40px -14px rgba(31,33,32,.5);zoom:1.111}
html[data-tw-nav-place="dock"] .tw-nav a{height:36px;padding:0 16px;border-radius:999px;color:rgba(255,255,255,.72);font-size:13.5px}
html[data-tw-nav-place="dock"] .tw-nav a:hover{color:#fff}
html[data-tw-nav-place="dock"] .tw-nav a.on{background:#fff;color:var(--ink2)}
html[data-tw-nav-place]:not([data-tw-nav-place="page"])[data-tw-nav-dupes="hide"] .lb-bar>.back-link,html[data-tw-nav-place]:not([data-tw-nav-place="page"])[data-tw-nav-dupes="hide"] .lb-bar .bar-btn[href*="Leaderboard"],html[data-tw-nav-place]:not([data-tw-nav-place="page"])[data-tw-nav-dupes="hide"] .lb-bar .bar-btn[href*="My applications"],html[data-tw-nav-place]:not([data-tw-nav-place="page"])[data-tw-nav-dupes="hide"] .lb-bar .apps-btn{visibility:hidden}html[data-tw-nav-place]:not([data-tw-nav-place="page"])[data-tw-nav-dupes="hide"] .browse-acts>a[href*="Candidate - "]{display:none}
@media (max-width:1100px){.tw-nav svg{display:none}html[data-tw-nav-place="center"] .tw-nav{gap:12px}html[data-tw-nav-place="segmented"] .tw-nav a{padding:0 11px;font-size:13px}html[data-tw-nav-place="left"] .tw-nav{margin-left:18px;padding-left:12px}html[data-tw-nav-place="left"] .tw-nav a{padding:0 9px;font-size:13px}}
@media (max-width:720px){html[data-tw-nav-place="center"] .tw-nav,html[data-tw-nav-place="segmented"] .tw-nav,html[data-tw-nav-place="left"] .tw-nav{display:none}}
@media (max-width:720px){html[data-tw-nav-place="tabs"] .tw-nav{padding:0 14px;gap:20px;overflow-x:auto;font-size:13px}html[data-tw-nav-place="tabs"] .app-top{margin-bottom:62px!important}html[data-tw-nav-place="dock"] .tw-nav{bottom:14px;zoom:1}html[data-tw-nav-place="dock"] .tw-nav a{padding:0 12px;font-size:12.5px}}
`;
var ns=document.createElement('style');ns.id='tw-nav-css';ns.textContent=ncss;document.head.appendChild(ns);
function mountNav(){var top=document.querySelector('.app-top'),logo=top&&top.querySelector('.app-logo');if(!logo||top.querySelector('.tw-nav'))return;
  var n=document.createElement('nav');n.className='tw-nav';n.setAttribute('aria-label','Main');
  n.innerHTML=NAV.map(function(x,i){return (i?'<span class="sep"></span>':'')+'<a href="'+x[0]+'"'+(x[0]===here?' class="on" aria-current="page"':'')+'><svg viewBox="0 0 24 24" aria-hidden="true">'+x[2]+'</svg>'+x[1]+'</a>';}).join('');
  logo.insertAdjacentElement('afterend',n);}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mountNav);else mountNav();
TCTweaks.register({id:'nav',title:'Navigation',controls:[
  {key:'place',label:'Placement',def:'page',options:[['page','In page (current)'],['center','Center links'],['segmented','Center switcher'],['left','Next to logo'],['tabs','Tab row'],['dock','Bottom dock']]},
  {key:'icons',label:'Icons',def:'on',options:[['on','On'],['off','Off']]},
  {key:'dupes',label:'In-page shortcuts',def:'hide',options:[['hide','Hide'],['show','Keep']]}
]});
})();
