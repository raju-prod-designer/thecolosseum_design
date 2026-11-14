(function(){
var nav=window.__chNav,load=document.getElementById('load');if(!nav||!load)return;
var view=document.querySelector('.ch-view'),detail=view&&view.querySelector('.ch-detail'),chips=view&&view.querySelector('.ch-chips'),result=view&&view.parentNode;if(!view||!detail||!chips)return;
var root=document.documentElement;
var C='html[data-tw-chpage-layout="command"]';
function pre(sel,rules){return rules.map(function(r){return sel+' '+r;}).join('');}
var css='.chlc,.chlp-sstage,.chlc-dh{display:none}'
+'@media (min-width:900px){'
+pre(C,[
'.load.detailed .result{max-width:none;padding-left:384px;padding-right:0;box-sizing:border-box}',
'.load.detailed .ch-view{overflow-y:auto;scrollbar-width:none;padding:38px 24px 0;margin-top:-38px!important}',
'.load.detailed .ch-view::-webkit-scrollbar{display:none}',
'.ch-chips{width:100%;max-width:none;margin:0;justify-content:flex-start}',
'.chlp-sstage{display:flex;width:100%;max-width:none;margin:0 0 10px}',
'.ch-chip.ch-center{text-align:left;max-width:none;font-size:32px}',
'.chlc{display:flex;flex:none;overflow:visible;width:100%;max-width:none;margin:26px 0 0;container-type:inline-size}',
'.ch-detail{flex:none;width:100%;max-width:none;margin:30px 0 0}',
'.ch-detail:not(.ch-drafting){max-height:none}',
'.ch-detail::after{display:none}',
'.ch-meta-chips{justify-content:flex-start}',
'.chlc-dh{display:block;width:100%;box-sizing:border-box;margin:0 0 16px;padding-top:28px;border-top:1px solid var(--line);text-align:left;font-size:10.5px;letter-spacing:.13em;text-transform:uppercase;font-weight:700;color:#a9aaa6}',
'.ch-card{flex:none;overflow:visible;max-height:none;border-radius:16px;border-bottom:1px solid var(--line);padding:32px 40px 120px}',
'.ch-cand{display:none}',
'.ch-ai{transition:opacity .2s}','.ch-ai.chlc-aihide{opacity:0!important;pointer-events:none!important}',
'.cl-card.pub .cl-foot{display:none}','.cl-card.pub .chi-sum{display:flex;flex-wrap:wrap;row-gap:6px}',
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
+'.chlc-bs{display:flex;flex-wrap:wrap;align-items:baseline;justify-content:space-between;gap:2px 10px;min-width:0}.chlc-bs b{flex:none}.chlc-bs .s{flex:none}'
+'.chlc-bar{height:4px;border-radius:4px;background:#eeede9;overflow:hidden;margin-top:3px}.chlc-bar i{display:block;height:100%;background:#3f8f5f;border-radius:inherit}'
+'.chlc-lh{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}'
+'.chlc-all{all:unset;font-size:13px;font-weight:600;color:var(--ink2);cursor:pointer}.chlc-all:hover{color:var(--blue)}'
+'.chlc-cands{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}'
+'.chlc-c{all:unset;box-sizing:border-box;display:flex;flex-direction:column;gap:12px;padding:16px;border:1px solid var(--line);border-radius:16px;background:#fff;cursor:pointer;transition:border-color .2s,box-shadow .2s;min-width:0}'
+'.chlc-c:nth-child(n+5){display:none}@container (min-width:860px){.chlc-cands{grid-template-columns:repeat(5,minmax(0,1fr))}.chlc-c:nth-child(5){display:flex}}'
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
+'.chlc-step.y{color:var(--ink2)}.chlc-step.y svg{stroke:#3f8f5f}'
+'.chlh{display:flex;flex-direction:column;gap:22px}'
+'.chlh{container-type:inline-size}.chlh-row{display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap}'
+'.chlh-s{all:unset;box-sizing:border-box;flex:1 1 130px;min-width:130px;max-width:200px;display:flex;flex-direction:column;align-items:center;gap:6px;padding:14px 12px;border:1px solid var(--line);border-radius:14px;background:#fff;cursor:pointer;text-align:center;transition:border-color .2s,box-shadow .2s}'
+'.chlh-s:hover{border-color:#d6d4ce;box-shadow:0 10px 30px rgba(31,33,32,.06)}.chlh-s:focus-visible{outline:2px solid var(--blue);outline-offset:2px}'
+'.chlh-pill{display:inline-flex;align-items:center;font-size:11.5px;font-weight:700;padding:3px 10px;border-radius:999px;background:#e9f1ec;color:#2f6d4a;white-space:nowrap}'
+'.chlh-pill.end{background:#4a4b49;color:#fff}'
+'.chlh-s b{font-family:"P22Mackinac",serif;font-weight:500;font-size:24px;color:var(--ink2);line-height:1.1}'
+'.chlh-s em{font-style:normal;font-size:12px;color:var(--t-mute);line-height:1.35;max-width:100%;text-wrap:balance}'
+'.chlh-f{flex:1.6 1 260px;max-width:340px;box-sizing:border-box;display:flex;flex-direction:column;gap:12px;padding:20px 22px;border:1px solid var(--blue);border-radius:16px;background:#fff;box-shadow:0 18px 44px rgba(31,33,32,.1)}'
+'.chlh-ft{display:flex;align-items:center;justify-content:space-between;gap:8px}'
+'.chlh-rev{display:inline-flex;align-items:center;gap:7px;font-size:12px;font-weight:700;padding:4px 11px;border-radius:999px;background:#f8ecdc;color:#8a5a14;white-space:nowrap}.chlh-rev i{width:6px;height:6px;border-radius:50%;background:#c8872a}'
+'.chlh-n{display:flex;align-items:baseline;gap:10px;min-width:0}.chlh-n b{font-family:"P22Mackinac",serif;font-weight:500;font-size:44px;letter-spacing:-.02em;color:var(--ink2);line-height:1}.chlh-n span{font-size:12.5px;color:var(--t-mute)}'
+'.chlh-f p{margin:0;font-size:14px;line-height:1.5;color:#4a4b49;text-wrap:pretty}.chlh-f p b{color:var(--ink2)}'
+'.chlh-dl{display:flex;justify-content:space-between;gap:10px;font-size:13px;color:#4a4b49}.chlh-dl b{color:var(--ink2)}.chlh-dl span:last-child{font-weight:700;color:#8a5a14}'
+'.chlh-pb{height:5px;border-radius:5px;background:#eeede9;overflow:hidden}.chlh-pb i{display:block;height:100%;background:var(--ink2);border-radius:inherit}'
+'.chlh-tl{display:flex;align-items:center;width:62%;margin:0 auto}.chlh-tl i{flex:none;width:8px;height:8px;border-radius:50%;background:#dcdad4}.chlh-tl i.d{background:#8fb8a0}.chlh-tl i.on{width:11px;height:11px;background:var(--ink2)}'
+'.chlh-tl u{flex:1;height:1px;background:#e4e2dc}.chlh-tl u.d{background:#8fb8a0}'
+'.chlh .chlc-t b small{font-family:inherit;font-size:13px;color:var(--t-mute);font-weight:500}'
+'.chlh-tb{border:1px solid var(--line);border-radius:16px;background:#fff;overflow:hidden}'
+'.chlh-r{display:grid;grid-template-columns:28px minmax(0,1.6fr) minmax(0,.7fr) minmax(0,.8fr) 130px;align-items:center;gap:14px;padding:12px 18px}.chlh-r+.chlh-r{border-top:1px solid var(--line)}'
+'.chlh-r.h{padding:10px 18px;background:#faf9f6;font-size:10.5px;letter-spacing:.13em;text-transform:uppercase;font-weight:700;color:#a9aaa6}'
+'.chlh-r>span:first-child{font-size:13px;color:var(--t-mute);font-weight:600}'
+'.chlh-p{display:flex;align-items:center;gap:12px;min-width:0}.chlh-p img{width:32px;height:32px;border-radius:50%;object-fit:cover;background:#eee;flex:none}'
+'.chlh-p div{display:flex;flex-direction:column;gap:2px;min-width:0}.chlh-p b{font-size:14px;font-weight:600;color:var(--ink2)}.chlh-p em{font-style:normal;font-size:12px;color:var(--t-mute);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}'
+'.chlh-sc{display:flex;align-items:center;gap:12px}.chlh-sc b{font-size:13.5px;font-weight:700;color:var(--ink2);font-variant-numeric:tabular-nums}.chlh-sc span{flex:1;height:3px;border-radius:3px;background:#eeede9;overflow:hidden}.chlh-sc span i{display:block;height:100%;background:var(--ink2)}'
+'.chlh-v{font-size:13px;color:var(--t-mute)}'
+'.chlh-btn{all:unset;box-sizing:border-box;text-align:center;font-size:13px;font-weight:600;color:var(--ink2);border:1px solid #d6d4ce;border-radius:999px;padding:8px 0;cursor:pointer;width:100%}.chlh-btn:hover{border-color:var(--ink2)}'
+'.chlh .chlc-t .s{white-space:normal;line-height:1.3}'
+'@container (max-width:640px){.chlh-f{order:-1;flex:1 1 100%;max-width:none}.chlh-s{max-width:none}.chlh-tl{display:none}.chlh .chlc-stats{grid-template-columns:repeat(2,minmax(0,1fr))}.chlh .chlc-t:nth-child(3){border-left:0}.chlh .chlc-t:nth-child(n+3){border-top:1px solid var(--line)}.chlh-r{grid-template-columns:22px minmax(0,1fr) 92px;gap:10px}.chlh-r>.chlh-sc,.chlh-r>.chlh-v,.chlh-r.h>span:nth-child(n+3){display:none}.chlh-p em{white-space:normal}}'
+'.pool.pool-embed{right:0;bottom:0;z-index:210}.load>.pool.pool-embed{z-index:10}'
+'.pool-embed .pool-logo,.pool-embed .pool-top .tw-nav,.pool-embed .pool-top .app-user,.pool-embed .pool-top .app-hb,.pool-embed .pool-top .app-actions,.pool-embed .pool-h1-row,.pool-embed .pool-controls,.pool-embed #poolTop,.pool-embed #viewPipe{display:none!important}'
+'html.app-shell .pool.pool-embed .pool-top,html .pool.pool-embed .pool-top{position:static!important;justify-content:flex-start;margin:0!important;padding:6px 28px 0!important;min-height:0!important;height:auto;background:none!important;border:0!important;border-radius:0!important;box-shadow:none!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important}'
+'html .pool.pool-embed .pool-back{display:inline-flex!important;position:static;transform:none;padding:0!important;margin:0!important;border:0!important;background:none!important;box-shadow:none!important;border-radius:0!important;width:auto!important;min-width:0!important;height:auto!important;justify-content:flex-start}'
+'.pool-embed .pool-body{padding:16px 28px 60px;container-type:inline-size}'
+'.pool-embed .all-sec{max-width:none}'
+'.pool-embed .lxs{grid-template-columns:minmax(240px,300px) minmax(0,1fr);gap:18px}'
+'.pool-embed .lxs-roster{position:sticky;max-height:calc(var(--emb-h,100vh) - 150px)}@media (min-width:961px){.pool-embed .lxs-panel{display:flex}}.pool-embed .lxs-panel .fitm-scroll{max-height:calc(var(--emb-h,100vh) - 150px)}'
+'@container (max-width:720px){.pool-embed .lxs{grid-template-columns:minmax(0,1fr)}.pool-embed .lxs-roster{position:static;max-height:none}.pool-embed .lxs-panel{display:none}}'
+'.cprof .cprof-topbar .cprof-logo,.cprof .cprof-topbar .app-user,.cprof .cprof-topbar .app-actions,.cprof .cprof-topbar .app-hb{display:none!important}'
+'.cprof .cprof-topbar{justify-content:flex-start;padding:30px 34px 0}'
+'html .cprof .cprof-back{display:inline-flex!important;position:static;transform:none;padding:0;margin:0}'
+'#load>.cprof,.pool>.cprof{zoom:1!important;z-index:15!important;top:0!important}'
+'.cprof .cprof-badge{display:none!important}'
+'.cprof .cprof-idrow{justify-content:center}.cprof .cprof-co{flex-direction:column;align-items:center;text-align:center;gap:14px}.cprof .cprof-idtext{align-items:center}.cprof .cprof-idtext .cpc-links{justify-content:center;margin:1px 0 0}'
+'.chlc-top{display:contents}.chlh[hidden]{display:none}.chlh-host{min-width:0;overflow-x:clip}.chlh-ghost{display:none!important}'
+'@container (max-width:940px){.chlh-host .bf-big{width:320px;padding:18px 20px}.chlh-host .bf-mini{min-width:116px;padding:10px}.chlh-host .bf-mini.far{min-width:96px}}'
+'@container (min-width:521px) and (max-width:800px){.chlh-host .bf-list:not(.nosc) .bf-row{grid-template-columns:26px minmax(0,1fr) 112px 84px}.chlh-host .bf-list.nosc .bf-row{grid-template-columns:26px minmax(0,1fr) minmax(0,1fr) 84px}.chlh-host .bf-list:not(.nosc) .bf-row>:nth-child(4){display:none}}'
+'@container (max-width:700px){.chlh-host .bf-focus{max-width:none}.chlh-host .bf-big{width:clamp(220px,calc(100cqw - 280px),320px);padding:16px 18px}.chlh-host .bf-mini,.chlh-host .bf-mini.far{min-width:104px;max-width:128px;padding:10px 8px;align-self:stretch;display:flex;flex-direction:column;justify-content:center}.chlh-host .bf-stat{grid-template-columns:repeat(2,1fr)}.chlh-host .bf-thcard{position:static;margin-top:10px}.chlh-host .bf-stack:has(.has-th){padding-bottom:18px}}'
+'@container (max-width:520px){.chlh-host .bf-list:not(.nosc) .bf-row,.chlh-host .bf-list.nosc .bf-row{grid-template-columns:minmax(0,1fr);gap:8px}.chlh-host .bf-act{justify-self:start}}'
+'.chlh-empty{padding:28px;text-align:center;font-size:13.5px;color:var(--t-mute)}';
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
var dh=document.createElement('h5');dh.className='chlc-dh';dh.textContent='Challenge details';detail.insertBefore(dh,detail.firstChild);
var cc=document.createElement('section');cc.className='chlc';view.insertBefore(cc,detail);
var ccTop=document.createElement('div');ccTop.className='chlc-top';cc.appendChild(ccTop);
var ph=document.createElement('div');ph.className='chlh';ph.hidden=true;ph.innerHTML='<div class="chlc-lh" style="margin-bottom:-6px"><h5>Hiring pipeline</h5></div><div class="chlh-host"></div>';cc.appendChild(ph);var phHost=ph.lastChild;

function tile(k,b,s,up,bar){if(bar!=null)return '<div class="chlc-t"><span class="k">'+k+'</span><div class="chlc-bs"><b>'+esc(b)+'</b><span class="s">'+esc(s)+'</span></div><div class="chlc-bar"><i style="width:'+bar+'%"></i></div></div>';return '<div class="chlc-t"><span class="k">'+k+'</span><b>'+esc(b)+'</b>'+(bar!=null?'<div class="chlc-bar"><i style="width:'+bar+'%"></i></div>':'')+'<span class="s'+(up?' up':'')+'">'+esc(s)+'</span></div>';}
function leaders(){return [].slice.call(detail.querySelectorAll('.ch-cand-list .cand')).map(function(c){var im=c.querySelector('img'),nm=c.querySelector('.cand-name'),mt=c.querySelector('.cand-match');return{name:nm?nm.textContent.trim():'',pic:im?im.src:'',m:mt?mt.textContent.replace(/[^0-9]/g,''):'',sk:[].slice.call(c.querySelectorAll('.cand-chip')).map(function(z){return z.textContent.trim();}).join(' \u00b7 ')};});}
function renderCC(){var i=nav.cur(),it=nav.info()[i];if(!it)return;var s=stage(it),x=stats(i),j=it.kind==='job',m=money(it),L=leaders(),top=L[0]||{name:'',m:''};if(L.length===4){var lm=parseInt(L[3].m,10)||80;L.push({name:'Yusuf',pic:av('Yusuf Qureshi'),m:String(Math.max(50,lm-3)),sk:'Platform \u00b7 Queues'});}
  if(s==='draft'){var r=ready(i),y=r.filter(function(z){return z[1];}).length;
    ph.hidden=true;ccTop.innerHTML='<div class="chlc-ready"><div class="chlc-rh"><b>Ready to publish</b><span>'+y+' of '+r.length+' complete</span></div><div class="chlc-meter"><i style="width:'+Math.round(y/r.length*100)+'%"></i></div><div class="chlc-steps">'+r.map(function(z){return '<span class="chlc-step'+(z[1]?' y':'')+'"><svg viewBox="0 0 24 24">'+(z[1]?'<polyline points="5 12.5 10 17 19 7"/>':'<circle cx="12" cy="12" r="7"/>')+'</svg>'+z[0]+'</span>';}).join('')+'</div></div>';return;}
  var T;
  if(s==='live')T=j?[tile('Applicants',String(x.n),'+'+x.t+' this week',1),tile('Leading match',top.m?top.m+'%':'\u2014',top.name),tile('Open since',(it.pubDate||'Today').replace(/ 20\d\d$/,''),it.job&&it.job.mode?it.job.mode:''),tile('Compensation',m||'\u2014','per year')]
    :[tile('Entries',String(x.n),'+'+x.t+' today',1),tile('Leading match',top.m?top.m+'%':'\u2014',top.name),tile('Time left',x.left,'Day '+x.el+' of '+x.w,0,x.pct),tile('Reward pool',m||'\u2014',it.split?it.split.length+' places':'')];
  else if(s==='judging')T=[tile('Submissions',String(x.subs),'of '+x.n+' entries'),tile('Leading score',top.m?top.m+'%':'\u2014',top.name),tile('Results in',x.res+(x.res>1?' days':' day'),'Judging in progress'),tile(j?'Compensation':'Reward pool',m||'\u2014',it.split?it.split.length+' places':'')];
  else T=[tile('Hired',x.win,x.paid),tile('Submissions',String(x.subs),'of '+x.n+' entries'),tile('Time to hire',(x.w+4)+' days','from publish'),tile(j?'Compensation':'Paid out',m||'\u2014',j?'per year':'to top places')];
  ccTop.innerHTML='<div class="chlc-stats">'+T.join('')+'</div>'+(L.length?'<div class="chlc-lead"><div class="chlc-lh"><h5>'+(s==='hired'?'Finalists':'Top matches')+'</h5><button type="button" class="chlc-all">View all candidates</button></div><div class="chlc-cands">'+L.slice(0,5).map(function(c,k){return '<button type="button" class="chlc-c" data-k="'+k+'"><span class="chlc-c-top"><img src="'+esc(c.pic)+'" alt=""><span class="m">'+esc(c.m)+'%</span></span><span class="chlc-c-id"><b>'+esc(c.name)+'</b><em>'+esc(c.sk)+'</em></span></button>';}).join('')+'</div></div>':'');ph.hidden=false;ensurePipe(i,it);}
var gh=null;
function dropGhost(){if(!gh)return;gh.nodes.forEach(function(n){n.remove();});gh.vp.remove();gh=null;}
function ensurePipe(i,it){var t=title(i),key=t+'|'+it.kind+'|'+(it.published?1:0);if(gh&&gh.key===key&&gh.vp.isConnected)return;dropGhost();
  if(typeof window.__openPool!=='function')return;
  var cl=(typeof window.__challengeList==='function'&&window.__challengeList())||[],item=cl.filter(function(c){return c.title===t;})[0]||Object.assign({},it,{title:t});
  var before=[].slice.call(document.body.children);
  window.__openPool(item);
  var nodes=[].slice.call(document.body.children).filter(function(n){return before.indexOf(n)<0;}),p=nodes.filter(function(n){return n.classList.contains('pool');})[0],vp=p&&p.querySelector('#viewPipe');
  if(!vp){nodes.forEach(function(n){n.remove();});return;}
  p.className='chlh-ghost';phHost.appendChild(vp);gh={key:key,nodes:nodes,vp:vp};
  var b=p.querySelector('.vtog-b[data-v="pipe"]');if(b)b.click();
  if(it.kind==='job'){var j=p.querySelector('.cha-opt[data-job]');if(j)j.click();}}
function renderStage(){var i=nav.cur();if(nav.info()[i])stEl.innerHTML=stageLine(i);}

function mode(){var m=root.getAttribute('data-tw-chpage-layout');return m==='command'&&window.innerWidth>=900?m:'focus';}
function aiGate(){var ai=detail.querySelector('.ch-ai');if(!ai)return;var hide=false;if(mode()==='command'&&(nav.info()[nav.cur()]||{}).published){var card=detail.querySelector('.ch-card');if(card){var kids=[].slice.call(card.querySelectorAll('*')),g=kids.filter(function(n){return n.children.length===0&&/^goal$/i.test((n.textContent||'').trim());})[0];var y=g?g.getBoundingClientRect().top:card.getBoundingClientRect().top+160;hide=y>ai.getBoundingClientRect().top;}}ai.classList.toggle('chlc-aihide',hide);}
view.addEventListener('scroll',aiGate,{passive:true});
var last=null;
function update(){var m=mode();if(m==='command')renderCC();renderStage();requestAnimationFrame(aiGate);setTimeout(aiGate,400);
  if(m!==last){last=m;requestAnimationFrame(function(){window.dispatchEvent(new Event('resize'));});}}
var emb=null;
function placeEmb(){if(!emb||!emb.isConnected){emb=null;return;}var z=parseFloat(getComputedStyle(emb).zoom)||1,cl=document.querySelector('.cl'),vr=view.getBoundingClientRect(),cr=cl&&cl.getBoundingClientRect(),left=cr&&cr.width?cr.right+8:vr.left;emb.style.left=(left/z)+'px';var lz=parseFloat(getComputedStyle(load).zoom)||1,et=vr.top+(parseFloat(getComputedStyle(view).paddingTop)||0)*lz;emb.style.top=(et/z)+'px';emb.style.setProperty('--emb-h',((window.innerHeight-et)/z)+'px');}
function closeEmb(){if(emb&&emb.isConnected){var b=emb.querySelector('.pool-back');if(b)b.click();}emb=null;}
function pickRow(name,k){var n=0;(function go(){var rows=emb&&emb.isConnected?[].slice.call(emb.querySelectorAll('.lxs-row')):[];if(!rows.length){if(n++<40)setTimeout(go,50);return;}var q=String(name||'').trim().toLowerCase(),f=q.split(' ')[0];var nm=function(r){var e=r.querySelector('.lxs-nm');return(e?e.textContent:'').trim().toLowerCase();};var t=rows.filter(function(r){return q&&nm(r)===q;})[0]||rows.filter(function(r){return f&&nm(r).split(' ')[0]===f;})[0];if(!t)return;var pn=emb.querySelector('.lxs-panel'),wide=pn&&getComputedStyle(pn).display!=='none';if(wide&&!t.classList.contains('on'))t.click();rows.forEach(function(r){r.classList.toggle('on',r===t);});var ro=t.closest('.lxs-roster');if(ro&&ro.scrollHeight>ro.clientHeight+1){var top=t.offsetTop;if(top<ro.scrollTop||top+t.offsetHeight>ro.scrollTop+ro.clientHeight)ro.scrollTop=Math.max(0,top-8);}else{var z=parseFloat(getComputedStyle(emb).zoom)||1;emb.scrollTop+=(t.getBoundingClientRect().top-emb.getBoundingClientRect().top)/z-90;}})();}
function openEmb(pick){if(typeof window.__openPool!=='function')return;var t=title(nav.cur()),cl=(typeof window.__challengeList==='function'&&window.__challengeList())||[],it=cl.filter(function(c){return c.title===t;})[0]||cl[0];if(!it)return;if(mode()!=='command'){window.__openPool(it);return;}
  if(root.getAttribute('data-tw-cpage-layout')!=='spot'){if(window.TCTweaks&&TCTweaks.set)TCTweaks.set('cpage','layout','spot');else root.setAttribute('data-tw-cpage-layout','spot');}
  window.__openPool(it);var n=0;(function find(){var p=document.querySelector('.pool');if(p){emb=p;p.classList.add('pool-embed');if(load&&p.parentNode!==load)load.appendChild(p);var pb=p.querySelector('.pool-back');if(pb&&pb.lastChild&&pb.lastChild.nodeType===3)pb.lastChild.nodeValue='Back';var bg=getComputedStyle(load).backgroundColor;if(bg&&bg!=='rgba(0, 0, 0, 0)'&&bg!=='transparent')p.style.background=bg;placeEmb();if(window.__poolRerender)window.__poolRerender();if(pick)setTimeout(function(){pickRow(pick.name,pick.k);},60);}else if(n++<40)setTimeout(find,25);})();}
window.addEventListener('resize',placeEmb);
cc.addEventListener('click',function(e){var c=e.target.closest('.chlc-c');if(c){var nb=c.querySelector('.chlc-c-id b');openEmb({name:nb?nb.textContent:'',k:+c.getAttribute('data-k')});return;}
  if(e.target.closest('.chlc-all'))openEmb();});
document.addEventListener('chcenter',function(){closeEmb();update();});
document.addEventListener('focusout',function(e){if(e.target.closest&&(e.target.closest('.ch-chips')||e.target.closest('.ch-detail')))setTimeout(update,0);});
var mp=window.__markPublished;if(mp)window.__markPublished=function(){var r=mp.apply(this,arguments);setTimeout(update,0);return r;};
window.addEventListener('resize',function(){if(mode()!==last)update();});
new MutationObserver(function(){if(mode()!=='command')closeEmb();update();}).observe(root,{attributes:true,attributeFilter:['data-tw-chpage-layout']});
function placeProf(){var p=document.querySelector('.cprof.on'),e2=document.querySelector('.pool.pool-embed');if(!p){if(e2)e2.style.visibility='';return;}var host=document.querySelector('.pool:not(.pool-embed)')||load,h=host===load?load.querySelector('.load-logo'):host.querySelector('.pool-top');if(!h)return;if(p.parentNode!==host)host.appendChild(p);if(e2)e2.style.visibility=host===load?'hidden':'';var r=h.getBoundingClientRect(),hz=parseFloat(getComputedStyle(host).zoom)||1;p.style.top='0px';p.style.paddingTop=(r.bottom/hz)+'px';}
document.addEventListener('click',function(e){var t=e.target;if(t.closest&&t.closest('.tw-nav a[data-nav="ca"]')){var p=document.querySelector('.cprof.on');if(p)p.classList.remove('on');}setTimeout(placeProf,0);setTimeout(placeProf,120);},true);
window.addEventListener('resize',placeProf);
window.__chLayout=update;
update();
})();
