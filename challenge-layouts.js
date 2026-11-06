(function(){
var nav=window.__chNav,load=document.getElementById('load');if(!nav||!load)return;
var view=document.querySelector('.ch-view'),detail=view&&view.querySelector('.ch-detail'),chips=view&&view.querySelector('.ch-chips'),result=view&&view.parentNode;if(!view||!detail||!chips)return;
var root=document.documentElement;
var C='html[data-tw-chpage-layout="command"]';
function pre(sel,rules){return rules.map(function(r){return sel+' '+r;}).join('');}
var css='.chlc,.chlp-sstage{display:none}'
+'@media (min-width:900px){'
+pre(C,[
'.load.detailed .result{max-width:none;padding-left:384px;padding-right:0;box-sizing:border-box}',
'.load.detailed .ch-view{overflow-y:auto;scrollbar-width:none;padding:0 24px}',
'.load.detailed .ch-view::-webkit-scrollbar{display:none}',
'.ch-chips{width:100%;max-width:820px;margin:0 auto;justify-content:flex-start}',
'.chlp-sstage{display:flex;width:100%;max-width:820px;margin:0 auto 10px}',
'.ch-chip.ch-center{text-align:left;max-width:none;font-size:32px}',
'.chlc{display:flex;flex:none;overflow:visible;width:100%;max-width:820px;margin:26px auto 0}',
'.ch-detail{flex:none;width:100%;max-width:820px;margin:30px auto 0}',
'.ch-detail:not(.ch-drafting){max-height:none}',
'.ch-detail::after{display:none}',
'.ch-meta-chips{justify-content:flex-start}',
'.ch-card{flex:none;overflow:visible;max-height:none;border-radius:16px;border-bottom:1px solid var(--line);padding:32px 40px 120px}',
'.ch-cand{display:none}',
'.ch-ai{position:sticky;bottom:20px;left:auto;transform:none;margin:-92px auto 20px;width:min(560px,88%)}'
])
+'}'
+'.chlc-c:focus-visible{outline:2px solid var(--blue);outline-offset:2px}'
+'.chlp-sstage{align-items:center;gap:8px;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--t-mute);margin:0 0 10px}'
+'.chlp-sstage i{width:8px;height:8px;border-radius:50%;flex:none}'
+'.chlc{flex-direction:column;gap:30px;text-align:left}'
+'.chlc-stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));border:1px solid var(--line);border-radius:18px;background:#fff;box-shadow:var(--shadow-card)}'
+'.chlc-t{padding:18px 20px;display:flex;flex-direction:column;gap:6px;min-width:0}.chlc-t+.chlc-t{border-left:1px solid var(--line)}'
+'.chlc-t .k,.chlc-lh h5{margin:0;font-size:10.5px;letter-spacing:.13em;text-transform:uppercase;font-weight:700;color:#a9aaa6}'
+'.chlc-t b{font-family:"P22Mackinac",serif;font-weight:500;font-size:26px;letter-spacing:-.02em;color:var(--ink2);line-height:1.1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}'
+'.chlc-t .s{font-size:12.5px;color:var(--t-mute);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.chlc-t .s.up{color:#2f6d4a;font-weight:600}'
+'.chlc-bar{height:4px;border-radius:4px;background:#eeede9;overflow:hidden;margin-top:3px}.chlc-bar i{display:block;height:100%;background:#3f8f5f;border-radius:inherit}'
+'.chlc-lh{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}'
+'.chlc-all{all:unset;font-size:13px;font-weight:600;color:var(--ink2);cursor:pointer}.chlc-all:hover{color:var(--blue)}'
+'.chlc-cands{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}'
+'.chlc-c{all:unset;box-sizing:border-box;display:flex;flex-direction:column;gap:12px;padding:16px;border:1px solid var(--line);border-radius:16px;background:#fff;cursor:pointer;transition:border-color .2s,box-shadow .2s;min-width:0}'
+'.chlc-c:hover{border-color:#d6d4ce;box-shadow:0 10px 30px rgba(31,33,32,.06)}'
+'.chlc-c-top{display:flex;align-items:center;justify-content:space-between;gap:8px}'
+'.chlc-c img{width:40px;height:40px;border-radius:50%;object-fit:cover;background:#eee}'
+'.chlc-c .m{font-family:"P22Mackinac",serif;font-weight:500;font-size:19px;color:var(--ink2);font-variant-numeric:tabular-nums}'
+'.chlc-c-id{display:flex;flex-direction:column;gap:3px;min-width:0}'
+'.chlc-c-id b{font-size:14px;font-weight:600;color:var(--ink2)}'
+'.chlc-c-id em{font-style:normal;font-size:12px;color:var(--t-mute);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}'
+'.chlc-ready{border:1px solid var(--line);border-radius:18px;background:#fff;box-shadow:var(--shadow-card);padding:20px 22px;display:flex;flex-direction:column;gap:14px}'
+'.chlc-rh{display:flex;align-items:center;gap:12px}.chlc-rh b{font-size:14px;font-weight:700;color:var(--ink2)}.chlc-rh span{margin-left:auto;font-size:12.5px;color:var(--t-mute);font-weight:600}'
+'.chlc-meter{height:4px;border-radius:4px;background:#eeede9;overflow:hidden}.chlc-meter i{display:block;height:100%;background:#c8a04a;border-radius:inherit}'
+'.chlc-steps{display:flex;flex-wrap:wrap;gap:8px}'
+'.chlc-step{display:inline-flex;align-items:center;gap:7px;font-size:12.5px;font-weight:600;color:var(--t-mute);border:1px solid var(--line);border-radius:999px;padding:5px 12px 5px 8px}'
+'.chlc-step svg{width:14px;height:14px;fill:none;stroke:#c9c7c1;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}'
+'.chlc-step.y{color:var(--ink2)}.chlc-step.y svg{stroke:#3f8f5f}';
var st=document.createElement('style');st.id='chpage-layouts';st.textContent=css;document.head.appendChild(st);

var K={bounty:['Bounty','oklch(0.55 0.13 150)'],hiring:['Hiring','oklch(0.55 0.11 255)'],job:['Job','oklch(0.55 0.14 35)']};
var STG=[['draft','Draft','#c8a04a'],['live','Live','#3f8f5f'],['judging','Judging','var(--blue)'],['hired','Hired','var(--ink2)']];
var NAMES=['Marcus Chen','Priya Nair','Lena Fischer','Yusuf Demir','Hana Sato','Diego Ramos','Aisha Bello','Tomas Lindgren'];
var SEQ=['live','judging','live','hired','live','judging'];
(function(){var k=0;nav.info().forEach(function(it){if(it.published&&!it.__stage){it.__stage=SEQ[k%SEQ.length];k++;}});})();
function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');}
function av(n,s){return 'https://i.pravatar.cc/'+(s||80)+'?u='+encodeURIComponent(n);}
function title(i){var c=nav.chips()[i];return c?c.textContent.trim():'';}
function money(it){if(it.kind==='job'&&it.job&&it.job.comp){var f=function(v){var n=parseInt(String(v).replace(/[^0-9]/g,''),10);return n?'$'+Math.round(n/1000)+'k':'';};var a=f(it.job.comp.from),b=f(it.job.comp.to);return a&&b?a+'\u2013'+b:(a||b);}
  if(it.split){var t=0;it.split.forEach(function(v){t+=parseInt(String(v||'').replace(/[^0-9]/g,''),10)||0;});if(t)return '$'+t.toLocaleString('en-US');}
  var b=String(it.budget||'').replace(/[^0-9,]/g,'');return b?'$'+b:'';}
function stage(it){return !it.published?'draft':(it.__stage||'live');}
function stg(s){return STG.filter(function(x){return x[0]===s;})[0];}
function days(w){var n=parseInt(w,10)||5;return /hour/i.test(w||'')?1:Math.max(2,n);}
function stats(i){var it=nav.info()[i],w=days(it.window),el=Math.max(1,Math.min(w-1,1+(i*2)%(w-1))),n=24+(i*23)%61;
  return{w:w,el:el,left:(w-el)+'d '+((i*5)%24)+'h',pct:Math.round(el/w*100),n:n,t:2+(i*7)%9,subs:Math.round(n*.62),res:1+i%3,win:NAMES[i%NAMES.length],paid:['30 Sep','26 Sep','21 Sep'][i%3]};}
function ready(i){var it=nav.info()[i],j=it.kind==='job';
  return[['Title',!!title(i)],[j?'Role':'Overview',!!(j?(it.role||it.overview):it.overview)],['Goal',!!it.goal],[j?'Location':'Timeline',!!(j?(it.job&&it.job.country):it.window)],[j?'Compensation':'Reward',!!money(it)]];}
function stageLine(i){var it=nav.info()[i],s=stage(it),g=stg(s),x=stats(i),k=K[it.kind];
  var t=g[1]+(s==='live'&&it.kind!=='job'?' \u00b7 Day '+x.el+' of '+x.w:'')+(k?' \u00b7 '+k[0]:'');
  return '<i style="background:'+g[2]+'"></i>'+esc(t);}

var stEl=document.createElement('div');stEl.className='chlp-sstage';view.insertBefore(stEl,chips);
var cc=document.createElement('section');cc.className='chlc';view.insertBefore(cc,detail);

function tile(k,b,s,up,bar){return '<div class="chlc-t"><span class="k">'+k+'</span><b>'+esc(b)+'</b>'+(bar!=null?'<div class="chlc-bar"><i style="width:'+bar+'%"></i></div>':'')+'<span class="s'+(up?' up':'')+'">'+esc(s)+'</span></div>';}
function leaders(){return [].slice.call(detail.querySelectorAll('.ch-cand-list .cand')).map(function(c){var im=c.querySelector('img'),nm=c.querySelector('.cand-name'),mt=c.querySelector('.cand-match');return{name:nm?nm.textContent.trim():'',pic:im?im.src:'',m:mt?mt.textContent.replace(/[^0-9]/g,''):'',sk:[].slice.call(c.querySelectorAll('.cand-chip')).map(function(z){return z.textContent.trim();}).join(' \u00b7 ')};});}
function renderCC(){var i=nav.cur(),it=nav.info()[i];if(!it)return;var s=stage(it),x=stats(i),j=it.kind==='job',m=money(it),L=leaders(),top=L[0]||{name:'',m:''};
  if(s==='draft'){var r=ready(i),y=r.filter(function(z){return z[1];}).length;
    cc.innerHTML='<div class="chlc-ready"><div class="chlc-rh"><b>Ready to publish</b><span>'+y+' of '+r.length+' complete</span></div><div class="chlc-meter"><i style="width:'+Math.round(y/r.length*100)+'%"></i></div><div class="chlc-steps">'+r.map(function(z){return '<span class="chlc-step'+(z[1]?' y':'')+'"><svg viewBox="0 0 24 24">'+(z[1]?'<polyline points="5 12.5 10 17 19 7"/>':'<circle cx="12" cy="12" r="7"/>')+'</svg>'+z[0]+'</span>';}).join('')+'</div></div>';return;}
  var T;
  if(s==='live')T=j?[tile('Applicants',String(x.n),'+'+x.t+' this week',1),tile('Leading match',top.m?top.m+'%':'\u2014',top.name),tile('Open since',(it.pubDate||'Today').replace(/ 20\d\d$/,''),it.job&&it.job.mode?it.job.mode:''),tile('Compensation',m||'\u2014','per year')]
    :[tile('Entries',String(x.n),'+'+x.t+' today',1),tile('Leading match',top.m?top.m+'%':'\u2014',top.name),tile('Time left',x.left,'Day '+x.el+' of '+x.w,0,x.pct),tile('Reward pool',m||'\u2014',it.split?it.split.length+' places':'')];
  else if(s==='judging')T=[tile('Submissions',String(x.subs),'of '+x.n+' entries'),tile('Leading score',top.m?top.m+'%':'\u2014',top.name),tile('Results in',x.res+(x.res>1?' days':' day'),'Judging in progress'),tile(j?'Compensation':'Reward pool',m||'\u2014',it.split?it.split.length+' places':'')];
  else T=[tile('Hired',x.win,x.paid),tile('Submissions',String(x.subs),'of '+x.n+' entries'),tile('Time to hire',(x.w+4)+' days','from publish'),tile(j?'Compensation':'Paid out',m||'\u2014',j?'per year':'to top places')];
  cc.innerHTML='<div class="chlc-stats">'+T.join('')+'</div>'+(L.length?'<div class="chlc-lead"><div class="chlc-lh"><h5>'+(s==='hired'?'Finalists':'Leading candidates')+'</h5><button type="button" class="chlc-all">View all candidates</button></div><div class="chlc-cands">'+L.slice(0,4).map(function(c,k){return '<button type="button" class="chlc-c" data-k="'+k+'"><span class="chlc-c-top"><img src="'+esc(c.pic)+'" alt=""><span class="m">'+esc(c.m)+'%</span></span><span class="chlc-c-id"><b>'+esc(c.name)+'</b><em>'+esc(c.sk)+'</em></span></button>';}).join('')+'</div></div>':'');}
function renderStage(){var i=nav.cur();if(nav.info()[i])stEl.innerHTML=stageLine(i);}

function mode(){var m=root.getAttribute('data-tw-chpage-layout');return m==='command'&&window.innerWidth>=900?m:'focus';}
var last=null;
function update(){var m=mode();if(m==='command')renderCC();renderStage();
  if(m!==last){last=m;requestAnimationFrame(function(){window.dispatchEvent(new Event('resize'));});}}
cc.addEventListener('click',function(e){var c=e.target.closest('.chlc-c');if(c){var t=detail.querySelectorAll('.ch-cand-list .cand')[+c.getAttribute('data-k')];if(t)t.click();return;}
  if(e.target.closest('.chlc-all')){var b=detail.querySelector('.ch-cand-cta');if(b)b.click();}});
document.addEventListener('chcenter',function(){update();});
document.addEventListener('focusout',function(e){if(e.target.closest&&(e.target.closest('.ch-chips')||e.target.closest('.ch-detail')))setTimeout(update,0);});
var mp=window.__markPublished;if(mp)window.__markPublished=function(){var r=mp.apply(this,arguments);setTimeout(update,0);return r;};
window.addEventListener('resize',function(){if(mode()!==last)update();});
new MutationObserver(update).observe(root,{attributes:true,attributeFilter:['data-tw-chpage-layout']});
window.__chLayout=update;
update();
})();
