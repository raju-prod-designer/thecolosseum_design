(function(){try{var p=decodeURIComponent(location.pathname);if(/sign up|onboarding|entry/i.test(p))document.documentElement.classList.add('tc-onb');}catch(e){}})();
/* Shared mobile layer: generic small-screen fixes + hamburger for header actions */
(function(){
if(window.__colMobile)return;window.__colMobile=1;
var BP=640;
var css=document.createElement('style');css.id='col-mobile-css';css.textContent=`
.app-hb{display:none}
.hb-bg{display:none}
.load.quizmode .app-hb,.load.quizmode .app-actions{display:none!important}
@media (max-width:${BP}px){

html,body{overflow-x:clip;-webkit-text-size-adjust:100%}
.app,.cd,.iv,.load.revealed{zoom:1!important}
html:not(.tc-onb):not(:has(#viewOnboarding.on)),html:not(.tc-onb):not(:has(#viewOnboarding.on)) body,html:not(.tc-onb):not(:has(#viewOnboarding.on)) .app-top{background:#f7f7f5!important}
.app{padding:16px 14px 28px!important}
.app-top{margin-bottom:18px!important;min-height:40px}
.app-logo,.load-logo,.su-logo{font-size:22px!important}
.app-back{font-size:0!important;gap:0!important;width:40px;height:40px;justify-content:center;border-radius:12px;border:1px solid var(--line);background:#fff;box-sizing:border-box;padding:0!important}
.app-back svg{width:18px!important;height:18px!important;margin:0!important}
img,video{max-width:100%}
table{max-width:100%}
.pg-switch{margin-bottom:22px!important}
.pf-head{flex-wrap:wrap;gap:12px 16px!important;padding-bottom:22px!important}
.pf-av{width:64px!important;height:64px!important;border-radius:16px!important}
.pf-id{flex:1 1 calc(100% - 82px)!important}
.pf-name{font-size:26px!important}
.pf-role{font-size:13.5px!important;margin-bottom:10px!important}
.pf-edit{order:3;margin-left:80px}
.pf-badges{gap:6px!important}
.pf-chip{white-space:nowrap}
.pf-body{gap:28px!important;padding-top:22px!important}
.pf-sec+.pf-sec{margin-top:28px!important}
.pf-grid{gap:10px!important}
.rl-row{display:flex!important;flex-wrap:wrap;align-items:center;gap:8px 10px!important;padding:13px 14px!important}
.rl-t{flex-basis:100%}
.rl-s{margin-left:auto}
.actions{flex-wrap:wrap;margin-top:28px!important}
.ar-row{flex-wrap:wrap;gap:10px 12px!important;padding:12px 14px!important}
.ar-stage{width:100%!important;flex-basis:100%;flex-direction:row!important;align-items:center!important;gap:10px!important}
.ar-stage-t{flex:none;order:2}
.ar-stage .ar-pips{flex:1}
.pool{zoom:1!important}
.pool-top,.cprof-topbar{padding:14px!important;justify-content:center!important;min-height:44px}
.pool-back{left:14px!important;font-size:0!important;gap:0!important;width:40px;height:40px;justify-content:center;border:1px solid var(--line)!important;border-radius:12px!important;background:#fff!important}
.pool-back svg{margin:0!important}
.pool-logo{font-size:22px!important}
.pool-body{padding:18px 14px 80px!important}
.pool-h1{font-size:25px!important}
.pool-h1-row{margin-bottom:14px!important}
.pool-controls{padding-left:0!important;padding-right:0!important;gap:8px!important}
.pool-imp{position:static!important}
.tm-mini,.tm-mini.far{display:none!important}
.tm-big{width:100%!important}
.cc-tabs{flex-wrap:nowrap!important;overflow-x:auto;justify-content:flex-start!important;scrollbar-width:none}
.cc-tabs::-webkit-scrollbar{display:none}
.cc-tab{flex:none;white-space:nowrap}
.cprof{overflow-x:hidden!important}
.browse-filters{gap:8px!important;padding:0!important}
.browse-acts{position:static!important;transform:none!important;width:100%;justify-content:center;flex-wrap:wrap;margin-left:0!important}
.tl-nav{display:none!important}
.tl-chips{grid-template-columns:auto!important;justify-content:center}
.tl-side{display:none!important}
.tl-chip.tl-center,.tl-cat{font-size:22px!important}
.tl-title{font-size:22px!important}
.tl-card{max-width:100%!important;width:100%!important;padding:20px!important;border-radius:18px!important}
.browse-cardm{width:240px!important}
.cc-arrow{display:none!important}
.cc-viewport{padding:18px 16px!important}
.cprof-ic{width:64px!important;height:64px!important;flex:none}
.cprof-idrow{gap:12px!important;flex-wrap:wrap}
.pool .bf-mini,.pool .bf-mini.far{display:flex!important;flex-direction:column;justify-content:center;align-self:stretch;min-width:120px}
.pool .bf-big{width:calc(100vw - 96px)!important;max-width:380px;box-sizing:border-box;padding:18px!important}
.pool .bf-stat-g{grid-auto-flow:row!important;grid-template-columns:repeat(2,minmax(0,1fr))}
.pool .bf-stat-g>div+div{border-left:0!important;border-top:0!important}
.pool .bf-stat-g>div:nth-child(even){border-left:1px solid var(--line)!important}
.pool .bf-stat-g>div:nth-child(n+3){border-top:1px solid var(--line)!important}
.pool .bf-stat-g>div:last-child{padding-right:16px}
.pool .bf-row.head{display:none!important}
.pool .bf-row:not(.head){grid-template-columns:20px minmax(0,1fr) auto!important;gap:8px 10px!important;padding:14px!important}
.pool .bf-row>.bf-rk{grid-row:1;align-self:start;padding-top:8px}
.pool .bf-row>.bf-who{grid-column:2/4;min-width:0}
.pool .bf-who em{white-space:normal!important}
.pool .bf-row>.bf-sc{grid-column:2/4;margin-left:0!important}
.pool .bf-row>.bf-verd{grid-column:2}
.pool .bf-row>.bf-btn,.pool .bf-row>.bf-act{grid-column:3;justify-self:end}
.pool .bf-more{flex-wrap:wrap;padding:12px 14px}
.fitm{padding:0!important;align-items:flex-end!important}
.fitm-sheet{border-radius:20px 20px 0 0!important;max-height:92vh!important}
.fitm-head{position:static!important}
.fitm-hl{padding:18px 18px 16px!important}
.fitm-hr{flex-wrap:wrap;padding:16px 18px!important;gap:12px!important}
.fitm-who{flex:1 1 calc(100% - 150px)!important}
.fitm-full{flex-basis:100%;order:5;padding:12px 17px!important}
.app-hb{display:grid;place-items:center;width:40px;height:40px;border-radius:12px;border:1px solid var(--line);background:#fff;padding:0;cursor:pointer;-webkit-tap-highlight-color:transparent;z-index:220;flex:none;box-sizing:border-box}
.app-hb i{position:relative;display:block;width:18px;height:2px;border-radius:2px;background:var(--ink2,#1f2120);transition:background .2s}
.app-hb i::before,.app-hb i::after{content:"";position:absolute;left:0;width:18px;height:2px;border-radius:2px;background:var(--ink2,#1f2120);transition:transform .25s cubic-bezier(.2,.8,.2,1),top .25s}
.app-hb i::before{top:-6px}.app-hb i::after{top:6px}
.app-hb.on i{background:transparent}
.app-hb.on i::before{top:0;transform:rotate(45deg)}.app-hb.on i::after{top:0;transform:rotate(-45deg)}
.app-hb .d{position:absolute;top:4px;right:4px;width:12px;height:12px;font-size:0!important;line-height:0;color:transparent;overflow:hidden;box-sizing:border-box;border-radius:50%;background:var(--blue,#3a6fd8);border:2px solid #fff;transition:opacity .2s}
.app-hb.on .d{opacity:0}
.hb-bg{display:block;position:fixed;inset:0;z-index:1490;background:rgba(17,18,17,.45);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);opacity:0;pointer-events:none;transition:opacity .25s}
.hb-bg.on{opacity:1;pointer-events:auto}
html .app-top>.app-hb{top:0!important;bottom:0!important;margin:auto 0!important;transform:none!important}
html .app-hb.on{z-index:1510!important}
html .app-top>.app-actions.hb-menu,html .app-actions.hb-menu{position:fixed!important;inset:0!important;margin:auto!important;width:min(340px,calc(100vw - 40px))!important;height:max-content!important;max-height:calc(100dvh - 48px);overflow-y:auto;transform:scale(.96)!important;transform-origin:center;z-index:1500;display:flex!important;flex-direction:column!important;align-items:stretch!important;justify-content:flex-start!important;gap:2px!important;background:#fff;border:0;border-radius:24px;box-shadow:0 30px 80px rgba(17,18,17,.3);padding:12px!important;opacity:0;pointer-events:none;transition:opacity .2s,transform .3s cubic-bezier(.2,.8,.2,1);box-sizing:border-box;text-align:left}
html .app-top>.app-actions.hb-menu.hb-open,html .app-actions.hb-menu.hb-open{opacity:1;pointer-events:auto;transform:none!important}
html .hb-menu>*{align-self:stretch!important;margin:0!important;flex:none!important}
.hb-menu>.pc{order:1}.hb-menu>.app-chat{order:2}.hb-menu>.app-notif{order:3}.hb-menu>.app-user{order:4}
html .hb-menu>.app-chat,html .hb-menu>.app-notif{display:flex!important;align-items:center!important;justify-content:flex-start!important;gap:12px;min-height:52px;padding:0 10px;border-radius:14px;cursor:pointer;position:static!important;transform:none!important}
.hb-menu>.app-chat:active,.hb-menu>.app-notif:active,.hb-menu .app-user-opt:active{background:var(--field,#f4f4f2)}
.hb-menu>.app-chat::after,.hb-menu>.app-notif::after{font-size:15px;font-weight:600;color:var(--ink2,#1f2120)}
.hb-menu>.app-chat::after{content:"Messages"}
.hb-menu>.app-notif::after{content:"Notifications"}
html .hb-menu .app-chat-btn,html .hb-menu .app-notif-btn{width:36px!important;height:36px!important;flex:none}
html .hb-menu>.pc{display:block!important;padding-bottom:8px;margin-bottom:4px!important;border-bottom:1px solid var(--line)}
html .hb-menu .pc-btn{width:100%;height:52px;padding:0 14px 0 10px;gap:12px;border:0;border-radius:14px;background:var(--field,#f4f4f2);font-size:15px;box-shadow:none!important}
html .hb-menu .pc-ring{width:24px;height:24px;margin:0 6px}
html .hb-menu .pc-lbl{display:inline!important;flex:1;text-align:left;color:var(--ink2,#1f2120)}
html .hb-menu .pc-pct{font-size:14px}
html .hb-menu .pc-menu{position:static!important;width:auto!important;box-shadow:none!important;border:0!important;padding:4px 0 0!important;background:none!important}
html .hb-menu>.app-user{display:block!important;position:static!important;transform:none!important;border-top:1px solid var(--line);margin-top:4px!important;padding-top:8px}
.hb-menu>.app-user::after{content:none!important}
.hb-menu>.app-user::before{content:"Account";display:block;padding:4px 10px 6px;font-size:12px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:#8a8a85}
html .hb-menu .app-user-btn{display:none!important}
html .app-actions.hb-menu:not(.hb-open),html .app-actions.hb-menu:not(.hb-open) *{pointer-events:none!important}
html .app-actions.hb-menu:not(.hb-open){visibility:hidden;transition:opacity .2s,transform .3s cubic-bezier(.2,.8,.2,1),visibility 0s .3s}
html .app-actions.hb-menu.hb-open{visibility:visible;transition:opacity .2s,transform .3s cubic-bezier(.2,.8,.2,1),visibility 0s}
html .hb-menu .app-user-menu{display:flex!important;flex-direction:column;gap:2px;position:static!important;opacity:1!important;visibility:visible!important;transform:none!important;pointer-events:auto!important;width:auto!important;min-width:0!important;max-height:none!important;box-shadow:none!important;border:0!important;padding:0!important;margin:0!important;background:none!important}
html .hb-menu .app-user-opt{display:flex!important;align-items:center;gap:20px;min-height:50px;padding:0 10px 0 18px;border-radius:14px;font-size:15px;font-weight:600;color:var(--ink2,#1f2120);text-decoration:none;cursor:pointer}
html .hb-menu .app-user-opt svg{width:20px;height:20px;flex:none}
html .hb-menu .app-user-id{padding:6px 10px}
html .hb-menu .app-user-sep{height:1px;background:var(--line);margin:6px 0}
html .hb-menu .app-notif-panel{position:fixed!important;left:16px!important;right:16px!important;top:76px!important;width:auto!important;max-height:calc(100dvh - 100px);overflow-y:auto;z-index:1600}
html .app-top>.app-actions.hb-menu,html .app-actions.hb-menu{gap:8px!important;padding:16px!important;text-align:center}
html .hb-menu>.app-chat,html .hb-menu>.app-notif,html .hb-menu .app-user-opt{justify-content:center!important;gap:10px!important;min-height:50px!important;padding:0 16px!important;border:1px solid var(--line)!important;border-radius:14px!important;background:#fff!important;box-shadow:0 1px 2px rgba(31,33,32,.05);transition:background .15s,transform .15s}
.hb-menu>.app-chat:active,.hb-menu>.app-notif:active,.hb-menu .app-user-opt:active,.hb-menu .pc-btn:active{background:var(--field,#f4f4f2)!important;transform:scale(.98)!important}
html .hb-menu .app-chat-btn,html .hb-menu .app-notif-btn{width:28px!important;height:28px!important;background:none!important;border:0!important}
html .hb-menu>.pc{padding-bottom:16px;margin-bottom:8px!important}
html .hb-menu .pc-btn{justify-content:center;height:50px;background:#fff!important;border:1px solid var(--line)!important;box-shadow:0 1px 2px rgba(31,33,32,.05)!important;transition:background .15s,transform .15s}
html .hb-menu .pc-lbl{flex:none!important;text-align:center}
html .hb-menu .pc-ring{margin:0!important}
html .hb-menu .pc-pct{margin-left:0!important}
html .hb-menu>.app-user{margin-top:8px!important;padding-top:16px!important}
html .hb-menu>.app-user::before{content:none!important;display:none!important}
html .hb-menu .app-user-menu{gap:8px!important}
html .hb-menu .app-user-sep{margin:8px 0!important}
html .hb-menu .app-user-id{text-align:center;justify-content:center}
html .hb-menu .app-user-opt.danger{border-color:oklch(0.6 0.12 25 / .28)!important}
html .app-actions>.app-chat.hb-ph{display:none!important}
html .hb-menu>.app-user{border-top:0!important;margin-top:0!important;padding-top:0!important}
.hb-quick{display:flex;align-items:center;gap:14px;z-index:220}
.hb-quick .app-chat,.hb-quick .app-notif{display:flex;align-items:center}
html .hb-quick .app-notif-panel{position:fixed!important;left:0!important;right:0!important;bottom:0!important;top:auto!important;transform:none!important;width:auto!important;max-height:80dvh;overflow-y:auto;z-index:1600;border:0!important;border-radius:22px 22px 0 0!important;box-shadow:0 -18px 50px rgba(17,18,17,.22)!important;padding-bottom:env(safe-area-inset-bottom);animation:npUp .28s cubic-bezier(.2,.8,.2,1)}
html .hb-quick .app-notif-panel::before{content:"";display:block;width:38px;height:4px;border-radius:9px;background:#d9d9d5;margin:10px auto 2px}
html .hb-quick .app-notif.open::before{content:"";position:fixed;inset:0;z-index:1590;background:rgba(17,18,17,.32);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}
html .hb-quick .np-head{padding:12px 18px!important}html .hb-quick .np-title{font-size:17px!important}html .hb-quick .np-clear{font-size:13px!important;min-height:36px}
html .hb-quick .np-item{padding:14px 18px!important}html .hb-quick .np-t{font-size:14px!important}html .hb-quick .np-d{font-size:13px!important}html .hb-quick .np-time{font-size:12px!important}
html .hb-quick .np-foot{padding:16px!important;font-size:14px!important}
@keyframes npUp{from{transform:translateY(40px);opacity:0}to{transform:none;opacity:1}}
html .hb-menu>.app-chat,html .hb-menu>.app-notif,html .hb-menu .app-user-opt,html .hb-menu .pc-btn{border-radius:999px!important}
html .hb-menu .pc-menu{display:none;flex-direction:column;gap:8px;padding:10px 0 0!important}
html .hb-menu .pc.open .pc-menu{display:flex!important}
html .hb-menu .pc-opt{justify-content:center!important;gap:8px!important;min-height:46px;padding:0 18px!important;border:1px solid var(--line)!important;border-radius:999px!important;background:#fff!important;box-shadow:0 1px 2px rgba(31,33,32,.05);font-size:14px!important;text-align:center!important;transition:background .15s,transform .15s}
html .hb-menu .pc-opt:active{background:var(--field,#f4f4f2)!important;transform:scale(.98)}
html .hb-menu .pc-opt>*:last-child:not(:first-child){font-weight:500}
}`;
document.head.appendChild(css);
function vw(){return window.innerWidth;}
function mob(){return vw()<=BP;}
function setup(acts){
  if(acts.__hb)return;
  var rows=acts.querySelectorAll(':scope>.app-chat,:scope>.app-notif,:scope>.app-user');
  if(rows.length<2)return;
  acts.__hb=1;
  var hb=document.createElement('button');hb.type='button';hb.className='app-hb';hb.setAttribute('aria-label','Menu');hb.innerHTML='<i></i><span class="d"></span>';
  acts.parentNode.insertBefore(hb,acts);
  var bg=document.createElement('div');bg.className='hb-bg';acts.parentNode.insertBefore(bg,acts);bg.addEventListener('click',function(e){e.stopPropagation();set(false);});
  var quick=document.createElement('div');quick.className='hb-quick';acts.parentNode.insertBefore(quick,hb);if(getComputedStyle(hb).position!=='absolute'&&getComputedStyle(hb).position!=='fixed')quick.style.marginRight='14px';
  var ph=document.createElement('i');ph.className='app-chat hb-ph';ph.hidden=true;
  function dock(on){
    if(on){var ch=acts.querySelector(':scope>.app-chat:not(.hb-ph)'),nt=acts.querySelector(':scope>.app-notif');
      if(ch){acts.insertBefore(ph,ch);quick.appendChild(ch);}if(nt)quick.appendChild(nt);
      var hs=getComputedStyle(hb);if(hs.position==='absolute'||hs.position==='fixed'){quick.style.position=hs.position;quick.style.right=((parseFloat(hs.right)||0)+hb.offsetWidth+14)+'px';quick.style.top=hb.offsetTop+'px';quick.style.height=hb.offsetHeight+'px';quick.style.margin='0';}
    }else{var ch2=quick.querySelector('.app-chat'),nt2=quick.querySelector('.app-notif');
      if(ch2){if(ph.parentNode)ph.parentNode.replaceChild(ch2,ph);else acts.insertBefore(ch2,acts.firstChild);}
      if(nt2)acts.insertBefore(nt2,acts.querySelector(':scope>.app-user'));}
  }
  // mirror the actions' original placement for the hamburger
  var orig=acts.getAttribute('style'),moved=false;
  var c0=getComputedStyle(acts),p0=c0.position,abs=p0==='absolute'||p0==='fixed';
  if(abs){hb.style.position=p0;hb.style.right=c0.right;hb.style.top=c0.top;hb.style.transform=c0.transform==='none'?'':c0.transform;}
  function restore(){if(!moved)return;moved=false;if(orig===null)acts.removeAttribute('style');else acts.setAttribute('style',orig);}
  function place(){
    if(!mob()){acts.classList.remove('hb-menu','hb-open');hb.classList.remove('on');bg.classList.remove('on');restore();dock(false);return;}
    acts.classList.add('hb-menu');moved=true;dock(true);
  }
  function set(on){if(!mob()){place();return;}place();acts.classList.toggle('hb-open',on);hb.classList.toggle('on',on);bg.classList.toggle('on',on);document.documentElement.style.overflow=on?'hidden':'';if(!on)acts.querySelectorAll('.open').forEach(function(x){x.classList.remove('open');});}
  hb.addEventListener('click',function(e){e.stopPropagation();set(!acts.classList.contains('hb-open'));});
  acts.addEventListener('click',function(e){
    if(!mob())return;
    var row=e.target.closest('.app-chat,.app-notif,.app-user');if(!row||row.parentNode!==acts)return;
    if(e.target.closest('.app-notif-panel,.app-user-menu'))return;
    if(!e.target.closest('button')){e.stopPropagation();var b=row.querySelector('button');b&&b.click();}
    if(row.classList.contains('app-chat'))set(false);
  });
  document.addEventListener('click',function(e){if(!e.target.closest('.app-actions')&&!e.target.closest('.app-hb'))set(false);});
  window.addEventListener('resize',function(){set(false);});
  window.addEventListener('scroll',function(){if(acts.classList.contains('hb-open'))place();},true);
  if(mob())place();
}
function scan(){document.querySelectorAll('.app-actions').forEach(setup);}
function init(){scan();new MutationObserver(function(){scan();}).observe(document.body,{childList:true,subtree:true});}
if(document.readyState==='complete')setTimeout(init,50);else window.addEventListener('load',function(){setTimeout(init,50);});
})();
/* Native OS pickers for custom dropdowns on mobile: a transparent <select> sits over each trigger and drives the custom list */
(function(){
if(window.__colNativeSel)return;window.__colNativeSel=1;
var MQ='(max-width:640px),(pointer:coarse)',mq=matchMedia(MQ);
var PIN=['United Arab Emirates','Saudi Arabia','United States','United Kingdom','India'];
var HOST='.ccpick,.jbm-dd',LIST='.cclist,.jbm-list',OPT='.ccopt,.jbm-o',SRCH='.ccsearch,.jbm-search';
var st=document.createElement('style');st.textContent='.nsel{display:none;position:absolute;left:0;top:0;width:100%;height:100%;opacity:0;z-index:3;margin:0;border:0;padding:0;font-size:16px;-webkit-appearance:none;appearance:none;cursor:pointer}html.nsel-on .nsel{display:block}html.nsel-on .nsel-host .ccmenu,html.nsel-on .nsel-host .jbm-menu{display:none!important}@media '+MQ+'{input:not([type=checkbox]):not([type=radio]):not([type=range]),textarea{font-size:max(16px,1em)!important}}';
document.head.appendChild(st);
function sync(){document.documentElement.classList.toggle('nsel-on',mq.matches);}
sync();mq.addEventListener?mq.addEventListener('change',sync):mq.addListener(sync);
var hush=0,of=HTMLElement.prototype.focus;
HTMLElement.prototype.focus=function(){if(Date.now()-hush<500&&this.matches&&this.matches(SRCH))return;return of.apply(this,arguments);};
function iso(img){var m=img&&(img.getAttribute('src')||'').match(/\/([a-z]{2})\.(png|svg|webp|jpe?g)/i);return m?m[1].toLowerCase():'';}
function emoji(c){return c?String.fromCodePoint.apply(null,c.toUpperCase().split('').map(function(x){return 127397+x.charCodeAt(0);})):'';}
function txt(el){return el?el.textContent.trim():'';}
function items(h){
  var btn=h.querySelector(':scope>button'),s=h.querySelector(SRCH),list=h.querySelector(LIST);
  hush=Date.now();
  if(s&&s.value){s.value='';s.dispatchEvent(new Event('input'));}
  if(!h.classList.contains('open'))btn.click();
  h.classList.remove('open');
  if(document.activeElement&&document.activeElement.matches(SRCH))document.activeElement.blur();
  return list?[].slice.call(list.querySelectorAll(OPT)):[];
}
function read(o){var nm=o.querySelector('.nm')||o.querySelector('span');return{n:nm?txt(nm):txt(o),c:txt(o.querySelector('.cd')),i:iso(o.querySelector('img'))};}
function build(h,sel){
  var btn=h.querySelector(':scope>button'),its=items(h);
  var curV=txt(btn.querySelector('.dd-v,.jv')),curC=txt(btn.querySelector('[id^=cccode]')),curI=iso(btn.querySelector('img'));
  var data=its.map(read),hit=-1;
  data.forEach(function(d,k){if(hit>-1)return;if(d.c?(d.c===curC&&(!curI||d.i===curI)):(d.n===curV))hit=k;});
  if(hit<0)its.forEach(function(o,k){if(hit<0&&o.classList.contains('on'))hit=k;});
  function opt(d,k){var o=document.createElement('option');o.value=k;o.textContent=(d.i?emoji(d.i)+'  ':'')+d.n+(d.c?'  '+d.c:'');return o;}
  sel.innerHTML='';
  if(data.length>30){
    var g1=document.createElement('optgroup');g1.label='Suggested';
    var g2=document.createElement('optgroup');g2.label='All countries';
    PIN.forEach(function(p){var k=-1;data.forEach(function(d,j){if(k<0&&d.n===p)k=j;});if(k>-1)g1.appendChild(opt(data[k],'p'+k));});
    data.forEach(function(d,k){g2.appendChild(opt(d,k));});
    if(g1.children.length)sel.appendChild(g1);sel.appendChild(g2);
  }else data.forEach(function(d,k){sel.appendChild(opt(d,k));});
  sel.value=hit>-1?String(hit):'';
}
function attach(h){
  if(h.__nsel)return;var btn=h.querySelector(':scope>button');if(!btn||!h.querySelector(LIST))return;h.__nsel=1;
  h.classList.add('nsel-host');if(getComputedStyle(h).position==='static')h.style.position='relative';
  var lab=h.closest('.qz-f,.jbm-f,.field,.fld');lab=lab&&lab.querySelector('label,.flbl,.jbm-l');
  var sel=document.createElement('select');sel.className='nsel';sel.setAttribute('aria-label',lab?txt(lab).replace(/\s*\*$/,''):'Choose');
  if(btn.offsetHeight)sel.style.height=btn.offsetHeight+'px';
  var prep=function(){if(!mq.matches)return;build(h,sel);if(btn.offsetHeight)sel.style.height=btn.offsetHeight+'px';};
  sel.addEventListener('touchstart',prep,{passive:true});sel.addEventListener('mousedown',prep);sel.addEventListener('focus',function(){if(!sel.options.length)prep();});
  sel.addEventListener('click',function(e){e.stopPropagation();});
  sel.addEventListener('change',function(){var k=parseInt(String(sel.value).replace('p',''),10),its=items(h);if(its[k])its[k].click();h.classList.remove('open');sel.blur();});
  h.appendChild(sel);
}
function scan(){document.querySelectorAll(HOST).forEach(attach);document.querySelectorAll('.phone input:not([type=hidden]):not(.ccsearch):not(.jbm-search)').forEach(function(i){if(i.__tel)return;i.__tel=1;i.type='tel';i.setAttribute('inputmode','tel');i.setAttribute('autocomplete','tel-national');});}
function init(){scan();new MutationObserver(scan).observe(document.body,{childList:true,subtree:true});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
