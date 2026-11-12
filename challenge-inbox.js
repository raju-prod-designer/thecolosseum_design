(function(){
var nav=window.__chNav,load=document.getElementById('load');if(!nav||!load)return;
var view=document.querySelector('.ch-view'),detail=view&&view.querySelector('.ch-detail');if(!detail)return;
var root=document.documentElement,I='html[data-tw-chpage-layout="inbox"]';
function pre(r){return r.map(function(x){return I+' '+x;}).join('');}
var css='.chi,.chi-sum,.chi-sf,.chi-vt,.chi-cempty{display:none}'
+'@media (min-width:1000px){'+pre([
'.load.detailed .cl{width:440px!important}',
'.load.detailed .result{max-width:none!important;padding-left:500px!important;padding-right:0!important;box-sizing:border-box}',
'.load.detailed .ch-view{overflow-y:auto;scrollbar-width:none;padding:0 32px 0 0}',
'.load.detailed .ch-view::-webkit-scrollbar{display:none}',
'.ch-chips{width:100%;max-width:1180px;margin:0;justify-content:flex-start}',
'.ch-chip.ch-center{text-align:left;max-width:none;font-size:30px}',
'.chi{display:flex;width:100%;max-width:1180px;margin:20px 0 0}',
'.ch-detail{flex:none;width:100%;max-width:1180px;margin:28px 0 0}',
'.ch-detail:not(.ch-drafting){max-height:none}',
'.ch-detail::after{display:none}',
'.ch-meta-chips{justify-content:flex-start}',
'.ch-card{flex:none;overflow:visible;max-height:none;border-radius:16px;border-bottom:1px solid var(--line);padding:28px 36px 120px}',
'.ch-cand{display:none}',
'.ch-ai{position:sticky;bottom:20px;left:auto;transform:none;margin:-92px auto 20px;width:min(560px,88%)}',
'.cl-foot{display:none}','.chi-sum{display:flex}','.chi-sf{display:flex}','.chi-cempty{display:block}',
'.cl-card.chi-hide{display:none}','.chi-vt{display:flex}','.pool .vtog:not(.lay-tog){display:none}'
])+'}'
+'.chi{flex-direction:column;gap:14px;text-align:left}'
+'.chi-h{display:flex;align-items:center;gap:12px;margin-top:8px}.chi-h:first-child{margin-top:0}'
+'.chi-h h5{margin:0;font-size:10.5px;letter-spacing:.13em;text-transform:uppercase;font-weight:700;color:#a9aaa6}'
+'.chi-tot{font-size:12.5px;color:var(--t-mute)}.chi-tot b{color:var(--ink2);font-weight:700}'
+'.chi-all{all:unset;margin-left:auto;font-size:13px;font-weight:600;color:var(--ink2);cursor:pointer}.chi-all:hover{color:var(--blue)}'
+'.chi-fun{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));border:1px solid var(--line);border-radius:18px;background:#fff;box-shadow:var(--shadow-card);overflow:hidden}'
+'.chi-s{all:unset;box-sizing:border-box;display:flex;flex-direction:column;gap:7px;padding:16px 18px;cursor:pointer;min-width:0;transition:background .15s}'
+'.chi-s+.chi-s{border-left:1px solid var(--line)}.chi-s:hover{background:#fbfaf8}'
+'.chi-s .k{display:flex;align-items:center;gap:7px;font-size:12px;font-weight:600;color:var(--t-mute);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}'
+'.chi-s .k i,.chi-pill i,.chi-sf i{width:7px;height:7px;border-radius:50%;background:var(--c);flex:none}'
+'.chi-s b{font-family:"P22Mackinac",serif;font-weight:500;font-size:26px;letter-spacing:-.02em;color:var(--ink2);line-height:1.1;font-variant-numeric:tabular-nums}'
+'.chi-s .bar{height:4px;border-radius:4px;background:#eeede9;overflow:hidden}.chi-s .bar i{display:block;height:100%;background:var(--c);border-radius:inherit}'
+'.chi-s.off b{color:#c9c7c1}.chi-s.cur{box-shadow:inset 0 3px 0 var(--c)}.chi-s.cur .k{color:var(--ink2)}'
+'.chi-s.sel{background:color-mix(in srgb,var(--field) 70%,#fff)}.chi-s.sel .k{color:var(--ink2);text-decoration:underline;text-underline-offset:3px}'
+'.chi-s:focus-visible,.chi-row:focus-visible{outline:2px solid var(--blue);outline-offset:-2px}'
+'.chi-tbl{border:1px solid var(--line);border-radius:18px;background:#fff;overflow:hidden}'
+'.chi-thead,.chi-row{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1.3fr) 80px 150px 16px;align-items:center;gap:16px;padding:12px 18px}'
+'.chi-thead{padding:10px 18px;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;font-weight:700;color:#a9aaa6;background:#fbfaf8;border-bottom:1px solid var(--line)}'
+'.chi-row{all:unset;box-sizing:border-box;display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1.3fr) 80px 150px 16px;align-items:center;gap:16px;width:100%;padding:11px 18px;cursor:pointer;transition:background .15s}'
+'.chi-row+.chi-row{border-top:1px solid var(--line)}.chi-row:hover{background:#fbfaf8}.chi-row.hide{display:none}'
+'.chi-who{display:flex;align-items:center;gap:12px;min-width:0}.chi-who img{width:34px;height:34px;border-radius:50%;object-fit:cover;background:#eee;flex:none}'
+'.chi-who b{font-size:14px;font-weight:600;color:var(--ink2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}'
+'.chi-sk{font-size:12.5px;color:var(--t-mute);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}'
+'.chi-m{font-family:"P22Mackinac",serif;font-weight:500;font-size:17px;color:var(--ink2);font-variant-numeric:tabular-nums}'
+'.chi-pill{display:inline-flex;align-items:center;gap:7px;font-size:12.5px;font-weight:600;color:var(--ink2);white-space:nowrap}'
+'.chi-go{width:16px;height:16px;fill:none;stroke:#b3b1aa;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.chi-row:hover .chi-go{stroke:var(--ink2)}'
+'.chi-empty{padding:18px;font-size:13px;color:var(--t-mute)}'
+'.chi-sum{align-items:center;gap:10px;margin-top:12px;font-size:12.5px;color:var(--t-mute);min-width:0}'
+'.chi-sum .n{white-space:nowrap}.chi-sum .n b{color:var(--ink2);font-weight:700}.chi-sum .tm{margin-left:auto;white-space:nowrap}'
+'.chi-prog{display:flex;gap:3px;flex:none}.chi-prog i{width:12px;height:4px;border-radius:2px;background:#e4e2dc}.chi-prog i.y{background:var(--c)}'
+'.chi-sf{gap:6px;flex-wrap:wrap}.chi-sf[hidden]{display:none!important}'
+'.chi-sf button{flex:none;display:inline-flex;align-items:center;gap:7px;height:30px;padding:0 12px;border:1px solid var(--line);border-radius:999px;background:#fff;font:inherit;font-size:12.5px;font-weight:600;color:var(--ink2);cursor:pointer}'
+'.chi-sf button:hover{border-color:var(--ink2)}.chi-sf button b{font-weight:700;color:var(--t-mute);font-size:11.5px}'
+'.chi-sf button.on{background:var(--ink2);border-color:var(--ink2);color:#fff}.chi-sf button.on b{color:#fff}.chi-sf button.on i{background:#fff}'
+'.chi-vt{align-items:center;gap:12px;margin:0 0 18px;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#a9aaa6}'
+'.chi-vt .sg{display:flex;gap:2px;background:var(--field);border:1px solid var(--line);border-radius:999px;padding:3px;letter-spacing:0;text-transform:none}'
+'.chi-vt button{border:0;background:none;border-radius:999px;height:30px;padding:0 14px;font:inherit;font-size:13px;font-weight:600;color:var(--t-mute);cursor:pointer}'
+'.chi-vt button:hover{color:var(--ink2)}.chi-vt button.on{background:#fff;color:var(--ink2);box-shadow:0 1px 3px rgba(0,0,0,.08)}';
var st=document.createElement('style');st.id='chpage-inbox';st.textContent=css;document.head.appendChild(st);

var C0='oklch(0.62 0.03 255)',C1='oklch(0.66 0.12 75)',C2='oklch(0.58 0.1 255)',C3='oklch(0.56 0.12 150)',C4='#1c1d1c';
var STAGES={bounty:[['Shortlist',C0],['Challenge',C1],['Finalist',C4]],hiring:[['Shortlist',C0],['Challenge',C1],['AI interview',C2],['Human interview',C3]],job:[['Shortlist',C0],['AI interview',C2],['Human interview',C3]]};
function stg(kind){return STAGES[kind]||STAGES.hiring;}
var SEQ=[1,2,3,0,4,2,1,3];
var NAMES=['Lena Fischer','Yusuf Demir','Hana Sato','Diego Ramos','Aisha Bello','Tomas Lindgren','Noor Haddad','Ivan Petrov'];
var EXS=['APIs \u00b7 Testing','Systems design \u00b7 Go','Python \u00b7 Data pipelines','Postgres \u00b7 Caching','Observability \u00b7 SRE','TypeScript \u00b7 React'];
function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');}
function pstage(i){var info=nav.info(),it=info[i];if(!it||!it.published)return -1;if(it.__ps==null){var k=info.slice(0,i+1).filter(function(x){return x.published;}).length-1;it.__ps=SEQ[k%SEQ.length];}return it.__ps%stg(it.kind).length;}
function lbl(i,s){var it=nav.info()[i];return stg(it&&it.kind)[s][0];}
function counts(i){var s=pstage(i),n=24+(i*23)%61,f=[n,Math.round(n*.58),Math.round(n*.26),Math.max(2,Math.round(n*.1))].slice(0,stg((nav.info()[i]||{}).kind).length);return f.map(function(v,k){return k<=s?v:0;});}
function rows(i,s){
  var L=[].slice.call(detail.querySelectorAll('.ch-cand-list .cand')).map(function(c){var im=c.querySelector('img'),nm=c.querySelector('.cand-name'),mt=c.querySelector('.cand-match');return{name:nm?nm.textContent.trim():'',pic:im?im.src:'',m:mt?+mt.textContent.replace(/[^0-9]/g,''):80,sk:[].slice.call(c.querySelectorAll('.cand-chip')).map(function(z){return z.textContent.trim();}).join(' \u00b7 ')};});
  var base=L.length?L[L.length-1].m:84;
  for(var x=0;L.length<6;x++){var nm=NAMES[(i*3+x)%NAMES.length];L.push({name:nm,pic:'https://i.pravatar.cc/80?u='+encodeURIComponent(nm+'-'+i),m:Math.max(60,base-3*(x+1)),sk:EXS[(i+x)%EXS.length]});}
  return L.map(function(r,k){r.s=Math.max(0,s-Math.floor(k/2));return r;});
}
function openPool(){if(!window.__openPool)return;var cl=(window.__challengeList&&window.__challengeList())||[];window.__openPool(cl[nav.cur()]||cl[0]||{title:'Challenge',window:'5 days',effort:'5 hours',budget:'$1,200'});}

var pipe=document.createElement('section');pipe.className='chi';view.insertBefore(pipe,detail);
var sel=null;
function renderPipe(){
  var i=nav.cur(),it=nav.info()[i];if(!it){pipe.innerHTML='';return;}var s=pstage(i);
  if(s<0){pipe.innerHTML='<div class="chi-h"><h5>Hiring pipeline</h5></div><div class="chi-tbl"><div class="chi-empty">Publish this challenge to start sourcing candidates. Stages and candidates will show up here.</div></div>';return;}
  var S=stg(it.kind),c=counts(i),mx=c[0]||1,L=rows(i,s),none=sel!=null&&!L.some(function(r){return r.s===sel;});
  pipe.innerHTML='<div class="chi-h"><h5>Hiring pipeline</h5><span class="chi-tot"><b>'+c[0]+'</b> candidates \u00b7 now at '+esc(lbl(i,s))+'</span><button type="button" class="chi-all">View all candidates</button></div>'
   +'<div class="chi-fun" style="grid-template-columns:repeat('+S.length+',minmax(0,1fr))">'+S.map(function(x,k){return '<button type="button" class="chi-s'+(k===s?' cur':'')+(k>s?' off':'')+(sel===k?' sel':'')+'" data-s="'+k+'" style="--c:'+x[1]+'" aria-pressed="'+(sel===k)+'"><span class="k"><i></i>'+esc(lbl(i,k))+'</span><b>'+(k>s?'\u2014':c[k])+'</b><span class="bar"><i style="width:'+Math.round(c[k]/mx*100)+'%"></i></span></button>';}).join('')+'</div>'
   +'<div class="chi-h"><h5>Candidate pipeline</h5>'+(sel!=null?'<span class="chi-tot">Showing '+esc(lbl(i,sel))+'</span>':'')+'</div>'
   +'<div class="chi-tbl"><div class="chi-thead"><span>Candidate</span><span>Strengths</span><span>Match</span><span>Stage</span><span></span></div>'
   +L.map(function(r,k){return '<button type="button" class="chi-row'+(sel!=null&&r.s!==sel?' hide':'')+'" data-k="'+k+'"><span class="chi-who"><img src="'+esc(r.pic)+'" alt=""><b>'+esc(r.name)+'</b></span><span class="chi-sk">'+esc(r.sk)+'</span><span class="chi-m">'+r.m+'%</span><span class="chi-pill" style="--c:'+S[r.s][1]+'"><i></i>'+esc(lbl(i,r.s))+'</span><svg class="chi-go" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg></button>';}).join('')
   +(none?'<div class="chi-empty">No candidates at this stage yet.</div>':'')+'</div>';
}
pipe.addEventListener('click',function(e){var b;
  if(b=e.target.closest('.chi-s')){var k=+b.getAttribute('data-s');sel=sel===k?null:k;renderPipe();return;}
  if(e.target.closest('.chi-row')||e.target.closest('.chi-all'))openPool();
});

var clEl=document.querySelector('.cl'),clList=clEl&&clEl.querySelector('.cl-list'),clHead=clEl&&clEl.querySelector('.cl-head');
var sf=null,sfv=null,sft=null,busy=false;
function curType(){var b=clEl&&clEl.querySelector('.cl-f button.on');return b?b.getAttribute('data-f'):'hiring';}
if(clHead){sf=document.createElement('div');sf.className='chi-sf';sf.setAttribute('aria-label','Filter by hiring stage');clHead.appendChild(sf);
  sf.addEventListener('click',function(e){var b=e.target.closest('[data-sf]');if(!b)return;var k=+b.getAttribute('data-sf');sfv=sfv===k?null:k;decorate();});}
function pubTab(){return !!(clEl&&clEl.querySelector('.cl-st2 [data-s="pub"].on'));}
function renderSF(){if(!sf)return;var t=curType(),S=stg(t),cnt=S.map(function(){return 0;});nav.info().forEach(function(it,i){var s=pstage(i);if(s>=0&&it.kind===t)cnt[s]++;});
  sf.innerHTML=S.map(function(x,k){return '<button type="button" data-sf="'+k+'" style="--c:'+x[1]+'"'+(k===sfv?' class="on"':'')+' aria-pressed="'+(k===sfv)+'"><i></i>'+x[0]+'<b>'+cnt[k]+'</b></button>';}).join('');
  sf.hidden=!pubTab();}
function decorate(){if(!clList||busy)return;busy=true;var pub=pubTab(),ty=curType();if(ty!==sft){sft=ty;sfv=null;}
  clList.querySelectorAll('.cl-card').forEach(function(card){var i=+card.getAttribute('data-i'),s=pstage(i),it=nav.info()[i]||{};var old=card.querySelector('.chi-sum');if(old)old.remove();
    var d=document.createElement('div');d.className='chi-sum';
    if(s<0)d.innerHTML='<span class="chi-pill" style="--c:#c8a04a"><i></i>Draft</span><span class="n">Not published yet</span>';
    else{var c=counts(i),S=stg(it.kind);d.innerHTML='<span class="chi-pill" style="--c:'+S[s][1]+'"><i></i>'+esc(lbl(i,s))+'</span><span class="chi-prog" style="--c:'+S[s][1]+'">'+S.map(function(_,k){return '<i'+(k<=s?' class="y"':'')+'></i>';}).join('')+'</span><span class="n"><b>'+c[0]+'</b> candidates</span><span class="tm">'+esc((it.pubDate||'Today').replace(/ 20\d\d$/,''))+'</span>';}
    (card.firstElementChild||card).appendChild(d);
    card.classList.toggle('chi-hide',pub&&sfv!=null&&s>=0&&s!==sfv);});
  var em=clList.querySelector('.chi-cempty'),vis=clList.querySelectorAll('.cl-card:not(.chi-hide)').length;
  if(pub&&sfv!=null&&!vis&&clList.querySelector('.cl-card')){if(!em){em=document.createElement('div');em.className='cl-empty chi-cempty';clList.appendChild(em);}em.textContent='No challenges at the '+stg(ty)[sfv][0]+' stage.';}else if(em)em.remove();
  renderSF();busy=false;}
if(clList)new MutationObserver(function(){if(!busy)decorate();}).observe(clList,{childList:true});

function setT(id,k,v){if(window.TCTweaks&&TCTweaks.set)TCTweaks.set(id,k,v);else{root.setAttribute('data-tw-'+id+'-'+k,v);if(window.__poolRerender)window.__poolRerender();}}
function ensureSpot(){try{if(localStorage.getItem('chi-spot'))return;localStorage.setItem('chi-spot','1');}catch(_){}var v=root.getAttribute('data-tw-cpage-layout');if(v!=='spot')setT('cpage','layout','spot');}
function syncVT(){var v=root.getAttribute('data-tw-cpage-layout')||'rows';document.querySelectorAll('.chi-vt').forEach(function(t){t.innerHTML='<span>View</span><div class="sg">'+[['spot','Spotlight'],['rows','Category rows']].map(function(o){return '<button type="button" data-v="'+o[0]+'"'+(o[0]===v?' class="on"':'')+'>'+o[1]+'</button>';}).join('')+'</div>';});}
function poolTog(){if(on()){var pb=document.querySelector('.pool .vtog-b.on[data-v="pipe"]'),cb=pb&&pb.parentNode.querySelector('[data-v="cands"]');if(cb)cb.click();}var rb=document.getElementById('poolRes');if(!rb||!rb.parentNode||rb.parentNode.querySelector(':scope>.chi-vt'))return;var t=document.createElement('div');t.className='chi-vt';rb.parentNode.insertBefore(t,rb);
  t.addEventListener('click',function(e){var b=e.target.closest('[data-v]');if(!b)return;setT('cpage','layout',b.getAttribute('data-v'));syncVT();});syncVT();}
new MutationObserver(poolTog).observe(document.body,{childList:true,subtree:true});
new MutationObserver(syncVT).observe(root,{attributes:true,attributeFilter:['data-tw-cpage-layout']});

function on(){return root.getAttribute('data-tw-chpage-layout')==='inbox'&&window.innerWidth>=1000;}
var last=null,lastI=-1;
function update(){var m=on();if(nav.cur()!==lastI){lastI=nav.cur();sel=null;}if(m){renderPipe();poolTog();}decorate();
  if(m!==last){if(m&&last===false)ensureSpot();last=m;requestAnimationFrame(function(){window.dispatchEvent(new Event('resize'));});}}
document.addEventListener('chcenter',function(){requestAnimationFrame(update);});
document.addEventListener('focusout',function(e){if(e.target.closest&&(e.target.closest('.ch-chips')||e.target.closest('.ch-detail')))setTimeout(update,0);});
var mp=window.__markPublished;if(mp)window.__markPublished=function(){var r=mp.apply(this,arguments);var it=nav.info()[nav.cur()];if(it&&it.published&&it.__ps==null)it.__ps=0;setTimeout(update,0);return r;};
window.addEventListener('resize',function(){if(on()!==last)update();});
new MutationObserver(update).observe(root,{attributes:true,attributeFilter:['data-tw-chpage-layout']});
update();
})();
