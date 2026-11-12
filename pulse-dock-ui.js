(function(){
var S=window.__pd;if(!S)return;
var P=S.P,A=S.A,feed=S.feed,dock=S.dock,browse=S.browse;
var T=Object.assign({rail:'peek',density:'comfortable',link:true,startOpen:true},window.PD_TWEAKS||{});

var ICON='<svg viewBox="0 0 24 24"><path d="M3 12h4l2.5-6 5 12 2.5-6h4"/></svg>';
var posts=[];P.forEach(function(p,i){if(!p.day)posts.push({p:p,i:i});});
var pris=posts.filter(function(o){return o.p.pr;});
var SHORT={'Closes in 6h':['6h','Submit'],'Closes tonight':['Tonight','Apply'],'Rank dropped':['#6','Rank'],'Ends Sunday':['Sun','Hunt']};
function av(p){return (A[p.by||p.a]||A.arena).av;}
function strip(h){var d=document.createElement('div');d.innerHTML=h;return d.textContent;}
var rail=dock.querySelector('.pd-rail');
var fab=document.createElement('button');fab.type='button';fab.className='pd-fab';fab.innerHTML=ICON+'Pulse<b>'+pris.length+'</b>';browse.appendChild(fab);
function drawRail(){
  var top='<button type="button" class="pd-open" aria-label="Expand Pulse" title="Expand  [">'+ICON+'<span class="pd-badge">'+pris.length+'</span></button><span class="pd-lbl">Pulse</span><span class="pd-sep"></span>';
  var body='';
  if(T.rail==='ticker')body='<div class="pd-tick" title="Open Pulse"><span></span></div>';
  else if(T.rail==='priority')body='<div class="pd-pris">'+pris.map(function(o){var s=SHORT[o.p.pl]||[o.p.pl,''];return '<button type="button" class="pd-pri" data-i="'+o.i+'"><span class="v">'+s[0]+'</span><span class="l">'+s[1]+'</span></button>';}).join('')+'</div><button type="button" class="pd-more">+'+(posts.length-pris.length)+'</button>';
  else body='<div class="pd-avs">'+posts.slice(0,12).map(function(o,k){return '<button type="button" class="pd-av'+(o.p.pr?' pr':'')+(k>=pris.length&&k<pris.length+3?' nw':'')+'" data-i="'+o.i+'" aria-label="'+(A[o.p.by||o.p.a]||{}).n+'">'+av(o.p)+'</button>';}).join('')+'</div><button type="button" class="pd-more">+'+Math.max(0,posts.length-12)+'</button>';
  rail.innerHTML=top+body;
  browse.setAttribute('data-rail',T.rail);
  if(T.rail==='ticker')tick(true);
}
var tk=0,tkT;
function tick(now){clearTimeout(tkT);var el=rail.querySelector('.pd-tick span');if(!el)return;
  function set(){var o=posts[tk%posts.length];el.innerHTML='<b>'+(A[o.p.by||o.p.a]||{}).n+' · '+o.p.t+'</b>&nbsp;&nbsp;'+strip(o.p.x);el.parentNode.setAttribute('data-i',o.i);el.classList.remove('out');}
  if(now)set();else{el.classList.add('out');setTimeout(function(){tk++;set();},350);}
  tkT=setTimeout(function(){tick(false);},4200);}
function isOpen(){return !browse.classList.contains('pd-closed');}
var pdLT;function setOpen(on,save){clearTimeout(pdLT);browse.classList.remove('pd-leaving','pd-entering');if(!on&&!browse.classList.contains('pd-closed')&&window.matchMedia('(min-width:901px)').matches){browse.classList.add('pd-leaving');pdLT=setTimeout(function(){browse.classList.remove('pd-leaving');browse.classList.add('pd-closed');},260);}else{var wasC=browse.classList.contains('pd-closed');browse.classList.toggle('pd-closed',!on);if(on&&wasC){browse.classList.remove('pd-entering');void browse.offsetWidth;browse.classList.add('pd-entering');pdLT=setTimeout(function(){browse.classList.remove('pd-entering');},320);}}hidePeek();if(save!==false)try{localStorage.setItem('pd-open',on?'1':'0');}catch(_){} setTimeout(function(){window.dispatchEvent(new Event('resize'));},400);}
function openTo(i){setOpen(true);S.ensure(i);requestAnimationFrame(function(){var c=feed.querySelector('.pl-card[data-i="'+i+'"]');if(!c)return;c.classList.add('in');feed.scrollTop=c.offsetTop-feed.querySelector('.pl-head').offsetHeight-12;c.classList.add('pd-flash');setTimeout(function(){c.classList.remove('pd-flash');},1600);});}
var peek=document.createElement('div');peek.className='pd-peek';document.body.appendChild(peek);var pkT,pkI=null;
function showPeek(btn){var i=+btn.getAttribute('data-i'),p=P[i],a=A[p.by||p.a];S.ensure(i);var c=feed.querySelector('.pl-card[data-i="'+i+'"]'),emb=c?c.querySelector('.pl-emb').innerHTML:'';
  pkI=i;peek.innerHTML='<div class="hd">'+a.av+'<span class="nm">'+a.n+'</span>'+(p.pl?'<span class="pl-pri">'+p.pl+'</span>':'')+'<span class="tm">'+p.t+'</span></div><p>'+p.x+'</p><div class="pl-emb">'+emb+'</div><div class="ft"><button type="button" class="op">Open in Pulse</button><button type="button" class="go">'+p.c+'</button></div>';
  var r=btn.getBoundingClientRect(),h=peek.offsetHeight||240;peek.style.left=(r.right+14)+'px';peek.style.top=Math.max(12,Math.min(window.innerHeight-h-12,r.top+r.height/2-h/2))+'px';peek.classList.add('on');}
function hidePeek(){clearTimeout(pkT);peek.classList.remove('on');pkI=null;}
rail.addEventListener('mouseover',function(e){var b=e.target.closest('.pd-av,.pd-pri');if(!b)return;clearTimeout(pkT);pkT=setTimeout(function(){showPeek(b);},b.classList.contains('pd-pri')?80:140);});
rail.addEventListener('mouseout',function(e){if(!e.target.closest('.pd-av,.pd-pri'))return;clearTimeout(pkT);pkT=setTimeout(hidePeek,220);});
peek.addEventListener('mouseenter',function(){clearTimeout(pkT);});
peek.addEventListener('mouseleave',function(){pkT=setTimeout(hidePeek,180);});
peek.addEventListener('click',function(e){if(pkI==null)return;var i=pkI;if(e.target.closest('.op')){openTo(i);return;}if(e.target.closest('.go')){hidePeek();S.ensure(i);var c=feed.querySelector('.pl-card[data-i="'+i+'"] .pl-cta');c&&c.click();}});
rail.addEventListener('click',function(e){var b;if(e.target.closest('.pd-open')||e.target.closest('.pd-more')){setOpen(true);return;}if(b=e.target.closest('[data-i]'))openTo(+b.getAttribute('data-i'));});
fab.addEventListener('click',function(){setOpen(true);});
feed.addEventListener('click',function(e){if(e.target.closest('.pd-col'))setOpen(false);});
document.addEventListener('click',function(e){if(window.matchMedia('(max-width:900px)').matches&&isOpen()&&!dock.contains(e.target)&&!fab.contains(e.target)&&!e.target.closest('.pl-toast'))setOpen(false,false);});
document.addEventListener('keydown',function(e){if(e.key!=='['||e.metaKey||e.ctrlKey||e.target.closest('input,textarea,[contenteditable]'))return;setOpen(!isOpen());});
var KW=['rate limiter','idempot','search','dashboard','fraud','checkout','pipeline','sync','vector','kyc','api','crm','plugin','onboarding','mobile','llm'];
window.pdJump=function(p,cardEl){
  var sc=browse.querySelector('.tl-scroll');
  if(!T.link||!sc||!p){window.scrollTo(0,0);if(sc)sc.scrollTop=0;return;}
  var slides=[].slice.call(sc.querySelectorAll('.tl-slide')).filter(function(s){return s.style.display!=='none'&&!s.hasAttribute('data-hide');});if(!slides.length)return;
  var x=p.x.toLowerCase(),hit=null;
  KW.some(function(k){if(x.indexOf(k)<0)return false;hit=slides.find(function(s){return s.textContent.toLowerCase().indexOf(k)>=0;});return !!hit;});
  if(!hit)hit=slides[(P.indexOf(p)*3)%slides.length];
  if(window.matchMedia('(max-width:900px)').matches)setOpen(false,false);
  sc.querySelectorAll('.pd-hit').forEach(function(c){c.classList.remove('pd-hit');});
  sc.scrollTo({top:Math.max(0,hit.offsetTop-24),behavior:'smooth'});
  var c=hit.querySelector('.tl-card');if(c){void c.offsetWidth;c.classList.add('pd-hit');clearTimeout(c._pdT);c._pdT=setTimeout(function(){c.classList.remove('pd-hit');},3200);}
};
function applyT(){dock.classList.toggle('compact',T.density==='compact');drawRail();}
var saved=null;try{saved=localStorage.getItem('pd-open');}catch(_){}
setOpen(saved==null?(T.startOpen&&!window.matchMedia('(max-width:900px)').matches):saved==='1',false);
applyT();
(function(){
var cs=document.createElement('style');cs.textContent='.pd-panel .pl-head{flex-wrap:wrap;row-gap:12px}.pl-tabs{order:3;flex-basis:auto;display:flex;gap:2px;padding:3px;height:34px;box-sizing:border-box;background:var(--field);border:1px solid var(--line);border-radius:999px;width:fit-content;max-width:100%}.pl-tabs-row{order:3;flex-basis:100%;display:flex;justify-content:center}.pl-tab{display:flex;align-items:center;gap:7px;border:0;background:none;border-radius:999px;padding:0 14px;font:inherit;font-size:12.5px;font-weight:600;color:var(--t-mute);cursor:pointer;white-space:nowrap;transition:background .15s,color .15s}.pl-tab:hover{color:var(--ink2)}.pl-tab.sel{background:#fff;color:var(--ink2);box-shadow:0 1px 3px rgba(0,0,0,.08)}.pl-tab b{min-width:17px;height:17px;padding:0 5px;box-sizing:border-box;border-radius:999px;background:oklch(0.58 0.15 35);color:#fff;font-size:10px;font-weight:800;line-height:17px;text-align:center}.pulse-feed[data-tab="att"] .pl-card:not(.pr),.pulse-feed[data-tab="att"] .pl-day,.pulse-feed[data-tab="att"] .pl-end,.pulse-feed[data-tab="all"] .pl-card.pr,.pulse-feed[data-tab="all"] .pl-day.att{display:none!important}';
document.head.appendChild(cs);
var head=feed.querySelector('.pl-head');if(!head)return;
var row=document.createElement('div');row.className='pl-tabs-row';
row.innerHTML='<div class="pl-tabs" role="tablist"><button type="button" class="pl-tab sel" data-t="att" role="tab">Needs your attention<b>'+pris.length+'</b></button><button type="button" class="pl-tab" data-t="all" role="tab">All</button></div>';
head.appendChild(row);var tabs=row.firstChild;feed.setAttribute('data-tab','att');
function mark(){feed.querySelectorAll('.pl-card:not([data-m])').forEach(function(c){c.setAttribute('data-m','1');var q=P[+c.getAttribute('data-i')];if(q&&q.pr)c.classList.add('pr');});feed.querySelectorAll('.pl-day:not(.att)').forEach(function(d){if(/needs your attention/i.test(d.textContent))d.classList.add('att');});}
mark();new MutationObserver(mark).observe(feed.querySelector('.pl-list'),{childList:true});
function setTab(t){tabs.querySelectorAll('.pl-tab').forEach(function(x){x.classList.toggle('sel',x.getAttribute('data-t')===t);});feed.setAttribute('data-tab',t);feed.scrollTop=0;if(t==='all')S.ensure(Math.min(P.length-1,pris.length+8));}
tabs.addEventListener('click',function(e){var b=e.target.closest('.pl-tab');if(b)setTab(b.getAttribute('data-t'));});
window.pdTab=setTab;
})();
/*tweaks-removed
function seg(key,opts){return '<div class="seg" data-k="'+key+'">'+opts.map(function(o){return '<button type="button" data-v="'+o[0]+'"'+(T[key]===o[0]?' class="sel"':'')+'>'+o[1]+'</button>';}).join('')+'</div>';}
function drawTw(){tw.innerHTML='<h5>Tweaks · Pulse dock</h5>'
  +'<div class="g"><span>Collapsed rail</span>'+seg('rail',[['peek','Peek'],['ticker','Ticker'],['priority','Priority']])+'</div>'
  +'<div class="g"><span>Card density</span>'+seg('density',[['comfortable','Comfortable'],['compact','Compact']])+'</div>'
  +'<label>Link posts to challenges<input type="checkbox" data-k="link"'+(T.link?' checked':'')+' /></label>'
  +'<label>Start expanded<input type="checkbox" data-k="startOpen"'+(T.startOpen?' checked':'')+' /></label>';}
drawTw();document.body.appendChild(tw);
function setT(k,v){T[k]=v;var ed={};ed[k]=v;try{window.parent.postMessage({type:'__edit_mode_set_keys',edits:ed},'*');}catch(_){}
  if(k==='startOpen'){try{localStorage.removeItem('pd-open');}catch(_){}setOpen(v,false);}
  if(k==='rail'&&isOpen())setOpen(false,false);
  applyT();drawTw();}
tw.addEventListener('click',function(e){var b=e.target.closest('.seg button');if(b)setT(b.parentNode.getAttribute('data-k'),b.getAttribute('data-v'));});
tw.addEventListener('change',function(e){var i=e.target.closest('input[data-k]');if(i)setT(i.getAttribute('data-k'),i.checked);});
window.addEventListener('message',function(e){var d=e.data||{};if(d.type==='__activate_edit_mode')tw.classList.add('on');else if(d.type==='__deactivate_edit_mode')tw.classList.remove('on');});
tweaks-removed*/
})();
