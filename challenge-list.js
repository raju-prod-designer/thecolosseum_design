(function(){
var nav=window.__chNav,load=document.getElementById('load');if(!nav||!load)return;
var css=`
.load.detailed .ch-chip.ch-left,.load.detailed .ch-chip.ch-right,.load.detailed .ch-nav{display:none!important}
.load.detailed .ch-divider{position:relative}
.cl{display:none}
.load.detailed .cl{display:flex;position:absolute;left:24px;top:96px;bottom:24px;width:360px;z-index:5;text-align:left}
.cl-panel{flex:1;min-width:0;display:flex;flex-direction:column;background:color-mix(in srgb,var(--field) 45%,#fff);border-radius:22px;overflow:hidden;animation:clIn .35s ease both}
@keyframes clIn{from{opacity:0}to{opacity:1}}
.cl-body{flex:1;min-height:0;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none;padding:0 14px 20px}
.cl-body::-webkit-scrollbar{display:none}
.cl-head{position:sticky;top:0;z-index:6;background:color-mix(in srgb,var(--field) 45%,#fff);margin:0 -14px 12px;padding:18px 16px 12px 20px;display:flex;flex-direction:column;gap:14px}
.cl-top{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin:0 -16px 0 -20px;padding:0 16px 14px 20px;border-bottom:1px solid var(--line)}
.cl-top h2{font-family:"P22Mackinac",serif;font-weight:500;font-size:24px;letter-spacing:-.015em;margin:0;color:var(--ink2);line-height:1.1}
.cl-top h2{display:flex;align-items:center;gap:10px}.cl-top h2 svg{width:20px;height:20px;stroke:var(--ink2);fill:none;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round;flex:none}
.cl-live{display:inline-flex;align-items:center;gap:7px;font-size:12px;font-weight:600;color:var(--t-mute);white-space:nowrap}
.cl-live i{width:7px;height:7px;border-radius:50%;background:oklch(0.68 0.14 150);animation:clPing 2.2s ease-out infinite}
@keyframes clPing{0%{box-shadow:0 0 0 0 oklch(0.68 0.14 150 / .45)}80%,100%{box-shadow:0 0 0 7px oklch(0.68 0.14 150 / 0)}}
.cl-f{display:flex;gap:2px;background:var(--field);border:1px solid var(--line);border-radius:999px;padding:3px}
.cl-f button{flex:1;border:0;background:none;border-radius:999px;padding:7px 4px;font:inherit;font-size:12px;font-weight:600;color:var(--t-mute);cursor:pointer}
.cl-f button:hover{color:var(--ink2)}
.cl-f button.on{background:#fff;color:var(--ink2);box-shadow:0 1px 3px rgba(0,0,0,.08)}
.cl-new{display:inline-flex;align-items:center;justify-content:center;gap:8px;width:auto;height:34px;padding:0 14px 0 8px;border:1px solid var(--line);border-radius:999px;background:transparent;font:inherit;font-size:13px;font-weight:700;color:var(--ink2);cursor:pointer;transition:border-color .18s,background .18s}
.cl-new:hover{border-color:var(--ink2);background:#fff}
.cl-new .ic{width:20px;height:20px;border-radius:50%;background:var(--ink2);display:grid;place-items:center}
.cl-new svg{width:11px;height:11px;stroke:#fff;fill:none;stroke-width:2.4;stroke-linecap:round}
.cl-st2{display:flex;align-self:center;width:fit-content;gap:2px;background:var(--field);border:1px solid var(--line);border-radius:999px;padding:3px}
.cl-st2 button{display:inline-flex;align-items:center;gap:8px;border:0;background:none;border-radius:999px;height:30px;padding:0 14px;font:inherit;font-size:13px;font-weight:600;color:var(--t-mute);cursor:pointer}
.cl-st2 button:hover{color:var(--ink2)}
.cl-st2 button.on{background:#fff;color:var(--ink2);box-shadow:0 1px 3px rgba(0,0,0,.08)}
.cl-st2 b{display:grid;place-items:center;min-width:18px;height:18px;box-sizing:border-box;padding:0 5px;border-radius:999px;font-size:11px;font-weight:700;line-height:1;color:#fff}
.cl-st2 [data-s="pub"] b{background:#3f8f5f}
.cl-st2 [data-s="draft"] b{background:#c8a04a}
.cl-fdd{display:none;position:relative;align-self:flex-start}
.cl-fdd-btn{display:inline-flex;align-items:center;gap:8px;height:34px;padding:0 12px 0 14px;border:1px solid var(--line);border-radius:999px;background:#fff;font:inherit;font-size:13px;font-weight:600;color:var(--ink2);cursor:pointer}
.cl-fdd-btn:hover,.cl-fdd.open .cl-fdd-btn{border-color:var(--ink2)}
.cl-fdd-btn svg{width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;transition:transform .2s}
.cl-fdd.open .cl-fdd-btn svg{transform:rotate(180deg)}
.cl-fdd-menu{display:none;position:absolute;top:calc(100% + 6px);left:0;z-index:30;min-width:170px;background:#fff;border:1px solid var(--line);border-radius:14px;box-shadow:0 16px 40px rgba(31,33,32,.16);padding:6px}
.cl-fdd.open .cl-fdd-menu{display:block}
.cl-fdd-menu button{display:flex;align-items:center;gap:10px;width:100%;border:0;background:none;border-radius:10px;padding:9px 11px;font:inherit;font-size:13px;font-weight:600;color:var(--ink2);cursor:pointer;text-align:left}
.cl-fdd-menu button:hover,.cl-fdd-menu button.on{background:var(--field)}
.cl-dot{width:7px;height:7px;border-radius:50%;flex:none;background:var(--ink2)}
.cl-f .cl-dot{display:none}
html[data-tw-cltype-style="chips"] .cl-f{background:none;border:0;padding:0;gap:6px;flex-wrap:wrap}
html[data-tw-cltype-style="chips"] .cl-f button{flex:none;display:inline-flex;align-items:center;gap:7px;height:32px;padding:0 14px;border:1px solid var(--line);background:#fff;font-size:12.5px;color:var(--ink2)}
html[data-tw-cltype-style="chips"] .cl-f button:hover{border-color:var(--ink2)}
html[data-tw-cltype-style="chips"] .cl-f button.on{background:var(--ink2);border-color:var(--ink2);color:#fff;box-shadow:none}
html[data-tw-cltype-style="chips"] .cl-f .cl-dot{display:block}
html[data-tw-cltype-style="chips"] .cl-f button.on .cl-dot{background:#fff!important}
html[data-tw-cltype-style="tabs"] .cl-f{background:none;border:0;border-bottom:1px solid var(--line);border-radius:0;padding:0;gap:20px;justify-content:flex-start}
html[data-tw-cltype-style="tabs"] .cl-f button{flex:none;position:relative;border-radius:0;padding:4px 0 10px;font-size:13px;box-shadow:none!important;background:none!important}
html[data-tw-cltype-style="tabs"] .cl-f button.on{color:var(--ink2);font-weight:700}
html[data-tw-cltype-style="tabs"] .cl-f button.on::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:2px;border-radius:2px;background:var(--ink2)}
.cl-list{display:flex;flex-direction:column;gap:14px}
.cl-day{display:flex;align-items:center;gap:14px;margin:10px 4px 0;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--t-faint,#9a9893)}
.cl-day:first-child{margin-top:0}
.cl-day::after{content:"";flex:1;height:1px;background:var(--line)}
.cl-card{position:relative;display:block;background:#fff;border:1px solid var(--line);border-radius:18px;padding:16px 16px 16px 14px;cursor:pointer;transition:border-color .2s,box-shadow .25s}
.cl-card:hover{border-color:#d6d4ce;box-shadow:0 10px 30px rgba(31,33,32,.06)}
.cl-card.on{border-color:var(--blue);box-shadow:0 0 0 4px oklch(0.62 0.1 255 / .14)}
.cl-av{width:36px;height:36px;border-radius:11px;border:1px solid var(--line);background:#fff;overflow:hidden;flex:none}
.cl-av img{width:100%;height:100%;object-fit:cover;display:block}
.cl-meta{display:flex;align-items:center;gap:6px;min-width:0;font-size:13.5px;line-height:1.3;margin-top:2px}
.cl-name{font-weight:700;color:var(--ink2);white-space:nowrap}
.cl-pri{flex:none;font-size:11px;font-weight:700;line-height:1;border-radius:999px;padding:4px 9px;white-space:nowrap;color:var(--t-body,#4a4a47);background:var(--field)}
.cl-tm{color:var(--t-mute);white-space:nowrap;margin-left:auto;padding-left:10px;font-size:13px}
.cl-sub{font-size:12.5px;color:var(--t-mute);margin-top:2px}
.cl-foot{display:flex;align-items:center;gap:10px;margin-top:12px}.cl-foot .cl-stag{margin-top:0}
.cl-text{margin:0;font-size:14.5px;line-height:1.5;font-weight:600;color:var(--ink2);text-wrap:pretty}
.cl-stag{display:inline-flex;align-items:center;gap:8px;margin-top:12px;padding:4px 14px;border:1px solid #c8a04a;border-radius:999px;background:#fff}
.cl-card.pub .cl-stag{border-color:#3f8f5f}
.cl-stag .l{font-size:10px;letter-spacing:.12em;text-transform:uppercase;font-weight:700;color:#b8b9b6}
.cl-stag i{width:7px;height:7px;border-radius:50%;background:#c8a04a;flex:none}
.cl-card.pub .cl-stag i{background:#3f8f5f}
.cl-stag .v{font-size:12.5px;font-weight:600;color:var(--ink2)}
.cl-chips{display:flex;flex-wrap:wrap;gap:7px;margin-top:12px}
.cl-chip{font-size:12px;font-weight:600;color:var(--t-body,#4a4a47);background:var(--field);border-radius:999px;padding:6px 12px;white-space:nowrap}
.cl-chip b{color:var(--ink2)}
.cl-acts{grid-column:1/-1;position:relative;display:flex;align-items:center;gap:8px;margin:8px -16px -12px -14px;padding:8px 10px 8px 14px;border-top:1px solid color-mix(in srgb,var(--kc) 20%,var(--line));border-radius:0 0 17px 17px}
.cl-glass{position:absolute;inset:0;border-radius:inherit;overflow:hidden;pointer-events:none;background:color-mix(in srgb,var(--kc) 7%,#fff)}
.cl-glass i{position:absolute;border-radius:50%;background:var(--kc);filter:blur(28px)}
.cl-glass i:nth-child(1){left:-30px;top:-10px;width:220px;height:90px;opacity:.22}
.cl-glass i:nth-child(2){right:40px;top:10px;width:160px;height:70px;opacity:.12}
.cl-glass::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(255,255,255,.55),rgba(255,255,255,.25));backdrop-filter:blur(14px) saturate(1.5);-webkit-backdrop-filter:blur(14px) saturate(1.5);box-shadow:inset 0 1px 0 rgba(255,255,255,.8)}
.cl-acts>*:not(.cl-glass){position:relative;z-index:1}
.cl-st{display:inline-flex;align-items:center;gap:7px;font-size:12.5px;font-weight:600;color:var(--t-mute)}
.cl-st i{width:7px;height:7px;border-radius:50%;background:#c9c7c1}
.cl-card.pub .cl-st i{background:oklch(0.68 0.14 150)}
.cl-cta{margin-left:auto;display:inline-flex;align-items:center;gap:7px;height:34px;padding:0 14px;border-radius:999px;background:rgba(255,255,255,.72);border:1px solid rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(31,33,32,.06);font-size:12.5px;font-weight:700;color:var(--ink2);white-space:nowrap;transition:background .18s,color .18s}
.cl-cta svg{width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round;transition:transform .2s}
.cl-card:hover .cl-cta{background:var(--ink2);border-color:var(--ink2);color:#fff}
.cl-card:hover .cl-cta svg{transform:translateX(3px)}
.cl-card.on .cl-cta{background:var(--ink2);border-color:var(--ink2);color:#fff}
.cl-empty{font-size:13px;color:var(--t-mute);padding:6px 4px}
.cl.cl-draft .cl-f,.cl.cl-draft .cl-fdd{display:none!important}
@media (max-width:1320px){.load.detailed .result{padding-left:384px;box-sizing:border-box}}
@media (max-width:760px){.load.detailed .cl{display:none}.load.detailed .result{padding-left:0}}
`;
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
var K={bounty:['Bounty','oklch(0.55 0.13 150)'],hiring:['Hiring','oklch(0.55 0.11 255)'],job:['Job','oklch(0.55 0.14 35)']};
var ARW='<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
var logo=(document.querySelector('.res-logo img')||{}).getAttribute?document.querySelector('.res-logo img').getAttribute('src'):'assets/lg-1.png';
function DOT(k){return K[k]?'<i class="cl-dot" style="background:'+K[k][1]+'"></i>':'';}
var el=document.createElement('aside');el.className='cl';
el.innerHTML='<div class="cl-panel"><div class="cl-body"><div class="cl-head"><div class="cl-top"><h2><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/><line x1="13" y1="19" x2="19" y2="13"/><line x1="16" y1="16" x2="20" y2="20"/><line x1="19" y1="21" x2="21" y2="19"/><polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5"/><line x1="5" y1="14" x2="9" y2="18"/><line x1="7" y1="17" x2="4" y2="20"/><line x1="3" y1="19" x2="5" y2="21"/></svg>Challenges</h2><button type="button" class="cl-new"><span class="ic"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>New challenge</button></div><div class="cl-st2" role="tablist"><button type="button" class="on" data-s="pub">Published<b>0</b></button><button type="button" data-s="draft">Drafts<b>0</b></button></div><div class="cl-f">'+[['bounty','Bounty'],['hiring','Hiring'],['job','Job']].map(function(o,i){return '<button type="button" data-f="'+o[0]+'"'+(i?'':' class="on"')+'>'+DOT(o[0])+o[1]+'</button>';}).join('')+'</div><div class="cl-fdd"><button type="button" class="cl-fdd-btn"><span class="t">Bounty</span><svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></button><div class="cl-fdd-menu">'+[['bounty','Bounty'],['hiring','Hiring'],['job','Job']].map(function(o,i){return '<button type="button" data-fd="'+o[0]+'"'+(i?'':' class="on"')+'>'+DOT(o[0])+o[1]+'</button>';}).join('')+'</div></div></div><div class="cl-list"></div></div></div>';
load.appendChild(el);
var body=el.querySelector('.cl-body'),list=el.querySelector('.cl-list'),filter='bounty',stat='pub';
function setFilter(v){if(!K[v])return;filter=v;el.querySelectorAll('.cl-f button').forEach(function(x){x.classList.toggle('on',x.getAttribute('data-f')===v);});syncDD();}
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');}
function money(it){if(it.kind==='job'&&it.job&&it.job.comp){var f=function(v){var n=parseInt(String(v).replace(/[^0-9]/g,''),10);return n?'$'+Math.round(n/1000)+'k':'';};return f(it.job.comp.from)+'\u2013'+f(it.job.comp.to);}
  if(it.split){var t=0;it.split.forEach(function(v){t+=parseInt((v||'').replace(/[^0-9]/g,''),10)||0;});if(t)return '$'+t.toLocaleString('en-US');}
  return it.budget&&it.budget!=='$'?it.budget:'';}
function cardHtml(r,c){var it=r.it,k=K[it.kind]||['New','oklch(0.55 0 0)'];var ch=[];var m=money(it);if(m)ch.push('<b>'+m+'</b>'+(it.kind==='job'?'':' pool'));if(it.window)ch.push(it.window);if(it.effort)ch.push(it.effort);if(it.job&&it.job.mode&&it.published)ch.push(it.job.mode+(it.job.country?' \u00b7 '+it.job.country:''));
  return '<article class="cl-card'+(r.i===c?' on':'')+(it.published?' pub':'')+'" data-i="'+r.i+'"><div>'
  +'<p class="cl-text">'+esc(r.t)+'</p>'
  +'<div class="cl-foot"><span class="cl-stag"><i></i><span class="v">'+(it.published?'Published'+(K[it.kind]?' \u00b7 '+K[it.kind][0]:''):'Draft')+'</span></span>'+(it.published?'<span class="cl-tm">'+(it.pubDate||'Today').replace(/ 20\d\d$/,'')+'</span>':'')+'</div>'
  +'</div></article>';}
function syncDD(){var d=el.querySelector('.cl-fdd');d.querySelectorAll('.cl-fdd-menu button').forEach(function(x){var on=x.getAttribute('data-fd')===filter;x.classList.toggle('on',on);if(on)d.querySelector('.t').textContent=x.textContent;});}
document.addEventListener('click',function(){var d=el.querySelector('.cl-fdd');d&&d.classList.remove('open');});
function setStat(v){stat=v;el.querySelectorAll('.cl-st2 button').forEach(function(x){x.classList.toggle('on',x.getAttribute('data-s')===v);});}
function render(){
  var info=nav.info(),chips=nav.chips(),c=nav.cur();
  var all=info.map(function(it,i){return{i:i,it:it,t:((chips[i]&&chips[i].textContent.trim())||'Untitled challenge')};});
  var rows=all.filter(function(r){return r.it.kind===filter||!K[r.it.kind];});
  var pub=rows.filter(function(r){return r.it.published;}),dr=all.filter(function(r){return !r.it.published;});el.classList.toggle('cl-draft',stat!=='pub');
  var bs=el.querySelectorAll('.cl-st2 b');bs[0].textContent=pub.length;bs[1].textContent=dr.length;
  var show=stat==='pub'?pub:dr;
  list.innerHTML=show.map(function(r){return cardHtml(r,c);}).join('')||'<div class="cl-empty">'+(stat==='pub'?'No published challenges of this type yet.':'No drafts yet.')+'</div>';
}
el.addEventListener('click',function(e){
  var b;
  if(b=e.target.closest('.cl-fdd-btn')){e.stopPropagation();b.parentNode.classList.toggle('open');return;}
  if(b=e.target.closest('.cl-fdd-menu button')){var t=el.querySelector('.cl-f button[data-f="'+b.getAttribute('data-fd')+'"]');el.querySelector('.cl-fdd').classList.remove('open');if(t)t.click();return;}
  if(b=e.target.closest('.cl-f button')){setFilter(b.getAttribute('data-f'));render();return;}
  if(b=e.target.closest('.cl-st2 button')){setStat(b.getAttribute('data-s'));render();return;}
  if(e.target.closest('.cl-new')){setStat('draft');var ad=document.querySelector('.ch-head .ch-add');if(ad)ad.click();return;}
  if(b=e.target.closest('.cl-card'))nav.go(+b.getAttribute('data-i'));
});
document.addEventListener('chcenter',render);
var mp=window.__markPublished;if(mp)window.__markPublished=function(){var r=mp.apply(this,arguments);setStat('pub');setFilter((nav.info()[nav.cur()]||{}).kind);render();return r;};
document.addEventListener('focusout',function(e){if(e.target.closest&&e.target.closest('.ch-chips'))setTimeout(render,0);});
setFilter((nav.info()[nav.cur()]||{}).kind);
render();
var dv=document.querySelector('.ch-view .ch-divider');
function place(){if(!dv||!load.classList.contains('detailed'))return;dv.style.left='0px';dv.style.width='';var z=parseFloat(getComputedStyle(load).zoom)||1;var lr=load.getBoundingClientRect(),r=dv.getBoundingClientRect();dv.style.left=((lr.left+24*z-r.left)/z)+'px';dv.style.width=(lr.width/z-48)+'px';el.style.top=((r.bottom-lr.top)/z+load.scrollTop+20)+'px';}
var cdet=document.querySelector('.ch-detail'),cmeta=cdet&&cdet.querySelector('.ch-meta-chips'),ccard=cdet&&cdet.querySelector('.ch-card'),ccand=cdet&&cdet.querySelector('.ch-cand');
function alignCand(){if(!ccand||!ccard)return;ccand.style.top=ccard.offsetTop+'px';}
if(cmeta&&window.ResizeObserver)new ResizeObserver(alignCand).observe(cmeta);
document.addEventListener('chcenter',function(){requestAnimationFrame(alignCand);});
window.addEventListener('resize',alignCand);
window.addEventListener('resize',place);
new MutationObserver(function(){requestAnimationFrame(place);}).observe(load,{attributes:true,attributeFilter:['class']});
load.addEventListener('animationend',place,true);
requestAnimationFrame(place);
})();
