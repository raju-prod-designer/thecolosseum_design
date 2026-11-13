(function(){if(!window.TCTweaks)return;
var headerOnly=!!(document.currentScript&&document.currentScript.hasAttribute('data-header-only'));
/* ---- Header ---- */
var hcss=`
html[data-tw-header-style] .app-top{border:0;border-radius:0;box-shadow:none}
html.app-shell[data-tw-header-style]:not([data-tw-header-style="floating"]) .load.detailed .load-logo{top:0;left:0;right:0;border-radius:0;border-width:0 0 1px;box-shadow:none}
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
  {key:'style',label:'Style',def:'floating',options:[['divider','Divider'],['shadow','Soft shadow'],['frosted','Frosted glass'],['accent','Brand top bar'],['band','Tinted band'],['floating','Floating bar']]},
  {key:'logo',label:'Logo position',def:'left',options:[['left','Left'],['center','Center']]},
  {key:'size',label:'Height',def:'regular',options:[['regular','Regular'],['compact','Compact']]},
  {key:'sticky',label:'Stick on scroll',def:'on',options:[['on','On'],['off','Off']]}
]});
if(headerOnly)return;
/* ---- Navigation ---- */
var NAV=[
 ['Candidate - Dashboard.html','Dashboard','<rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/>'],
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
html[data-tw-nav-place="center"] .tw-nav:has(a[href="Candidate - Dashboard.html"]){grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:auto}
html[data-tw-nav-place="center"] .tw-nav:has(a[href="Candidate - Dashboard.html"]) a{padding:6px 12px}
@media (max-width:1240px){.tw-nav:has(a[href="Candidate - Dashboard.html"]) svg{display:none}}
@media (min-width:721px) and (max-width:1100px){
html[data-tw-nav-place="center"] .tw-nav:has(a[href="Candidate - Dashboard.html"]),html[data-tw-nav-place="segmented"] .tw-nav:has(a[href="Candidate - Dashboard.html"]){top:calc(100% + 12px);transform:translateX(-50%)}
html[data-tw-nav-place="center"] .tw-nav:has(a[href="Candidate - Dashboard.html"]){background:#fff;border:1px solid var(--line);border-radius:999px;padding:3px 8px}
html[data-tw-nav-place="center"] .app-top:has(.tw-nav a[href="Candidate - Dashboard.html"]),html[data-tw-nav-place="segmented"] .app-top:has(.tw-nav a[href="Candidate - Dashboard.html"]){margin-bottom:80px}
}
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
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){mountNav();syncDash();});else mountNav();
var DASH='Candidate - Dashboard.html',APPS='Candidate - Webapp copy.html',dashOff=false,dashNodes=null;
function syncDash(){var n=document.querySelector('.tw-nav');
  if(n){var a=n.querySelector('a[href="'+DASH+'"]');
    if(dashOff&&a){var s=a.nextElementSibling;dashNodes=[a,s&&s.classList.contains('sep')?s:null];dashNodes.forEach(function(x){if(x)x.remove();});}
    else if(!dashOff&&!a&&dashNodes){if(dashNodes[1])n.insertBefore(dashNodes[1],n.firstChild);n.insertBefore(dashNodes[0],n.firstChild);}}
  document.querySelectorAll(dashOff?'a[href="'+DASH+'"]':'a[data-dash-home]').forEach(function(l){if(l.closest('.tw-nav'))return;l.setAttribute('href',dashOff?APPS:DASH);if(dashOff)l.setAttribute('data-dash-home','');else l.removeAttribute('data-dash-home');});
  if(dashOff&&here===DASH)location.replace(APPS);}
TCTweaks.register({id:'nav',title:'Navigation',controls:[
  {key:'place',label:'Placement',def:'center',options:[['page','In page (current)'],['center','Center links'],['segmented','Center switcher'],['left','Next to logo'],['tabs','Tab row'],['dock','Bottom dock']]},
  {key:'icons',label:'Icons',def:'on',options:[['on','On'],['off','Off']]},
  {key:'dupes',label:'In-page shortcuts',def:'hide',options:[['hide','Hide'],['show','Keep']]}
]});
if(document.querySelector('.tw-nav a[href="'+DASH+'"]'))TCTweaks.register({id:'dash',title:'Dashboard',controls:[{key:'show',label:'Dashboard page',def:'on',options:[['on','On'],['off','Off (Challenges is home)']]}],apply:function(s){dashOff=s.show==='off';syncDash();}});
})();
