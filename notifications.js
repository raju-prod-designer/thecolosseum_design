/* Shared notification bell + panel. Injects itself next to every .app-user in the page.
   Candidate vs company copy is chosen from the avatar image (lg-*.png = company). */
(function(){
var CSS=`
.app-actions{display:flex;align-items:center;gap:15px}
.app-actions .app-user{position:relative;right:auto;top:auto;transform:none;flex:none}
.app-notif{position:relative;flex:none}
.app-notif.open{z-index:210}
.app-notif-btn{position:relative;width:28px;height:28px;border-radius:50%;border:1px solid var(--line);background:#fff;padding:0;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:border-color .18s,box-shadow .18s}
.app-notif-btn svg{width:15px;height:15px;stroke:var(--ink2);fill:none;stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round}
.app-notif-btn:hover{border-color:var(--ink2)}
.app-notif.open .app-notif-btn{border-color:var(--blue);box-shadow:0 0 0 3px rgba(103,141,198,.16)}
.app-notif-dot{position:absolute;top:-5px;right:-5px;width:16px;height:16px;box-sizing:border-box;padding:0;border-radius:50%;background:var(--blue);color:#fff;font-size:9.5px;font-weight:300;line-height:1;display:flex;align-items:center;justify-content:center;text-align:center;font-variant-numeric:tabular-nums;border:1.5px solid #fff;letter-spacing:0}
.app-notif.read .app-notif-dot{display:none}
.app-notif-panel{position:absolute;top:calc(100% + 10px);right:-40px;z-index:210;width:344px;background:#fff;border:1px solid var(--line);border-radius:16px;box-shadow:0 18px 44px rgba(31,33,32,.16);display:none;overflow:hidden;text-align:left}
.app-notif.open .app-notif-panel{display:block}
.np-head{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:13px 15px 11px;border-bottom:1px solid var(--line)}
.np-title{font-size:13px;font-weight:800;letter-spacing:-0.01em;color:var(--ink2)}
.np-clear{border:0;background:none;padding:0;cursor:pointer;font:inherit;font-size:11px;font-weight:700;color:var(--blue)}
.np-list{max-height:352px;overflow-y:auto}
.np-item{display:flex;gap:11px;padding:12px 15px;cursor:pointer;border-bottom:1px solid var(--line)}
.np-item:last-child{border-bottom:0}
.np-item:hover{background:var(--field)}
.np-item.unread{background:rgba(103,141,198,.06)}
.np-item.unread:hover{background:rgba(103,141,198,.11)}
.np-ico{flex:none;width:28px;height:28px;border-radius:50%;background:var(--field);display:flex;align-items:center;justify-content:center;margin-top:1px}
.np-ico svg{width:14px;height:14px;stroke:var(--ink2);fill:none;stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round}
.np-ico.ok{background:oklch(0.62 0.12 150 / 0.14)}
.np-ico.ok svg{stroke:oklch(0.5 0.11 150)}
.np-ico.warn{background:oklch(0.72 0.13 70 / 0.18)}
.np-ico.warn svg{stroke:oklch(0.55 0.12 60)}
.np-body{min-width:0}
.np-t{font-size:12.5px;font-weight:700;line-height:1.35;margin:0 0 3px;color:var(--ink2)}
.np-d{font-size:11.5px;line-height:1.45;color:#5f6360;margin:0;text-wrap:pretty}
.np-time{font-size:10.5px;font-weight:600;color:#9a9d99;margin-top:5px}
.np-foot{padding:10px 15px;border-top:1px solid var(--line);text-align:center;font-size:11.5px;font-weight:700;color:var(--ink2);cursor:pointer}
.np-foot:hover{color:var(--blue)}
.pool-top .app-actions,.cprof-topbar .app-actions{right:34px}
`;
var BELL='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></svg>';
var I={
 trophy:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3"/><path d="M7 5H4v2a3 3 0 0 0 3 3"/></svg>',
 clock:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15.5 14"/></svg>',
 cal:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="8" y1="3" x2="8" y2="7"/><line x1="16" y1="3" x2="16" y2="7"/></svg>',
 doc:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><polyline points="14 3 14 8 19 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/></svg>',
 spark:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/></svg>',
 people:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3.4"/><path d="M2.5 20v-.8a6.5 6.5 0 0 1 13 0V20"/><path d="M16.5 5.4a3.4 3.4 0 0 1 0 6.4"/><path d="M18 20v-.8a6.3 6.3 0 0 0-1.6-4.2"/></svg>'
};
var CANDIDATE=[
 ['ok',I.trophy,'Offer stage reached &middot; Aurora Systems','Platform Reliability Lead moved to offer. The company has 5 days to confirm terms.','12 min ago',1],
 ['warn',I.clock,'Challenge closes in 36 hours','Edge cache invalidation at Kestrel &mdash; your draft submission is not yet final.','2 hours ago',1],
 ['',I.cal,'Interview booked &middot; Northwind Data','Streaming ingest dedupe &mdash; 9 Sep, 14:00 CET. Calendar invite sent to your email.','Yesterday',1],
 ['',I.doc,'AI assessment published','Your submission for Infrastructure automation at Lumen has been scored. Read the write-up.','2 days ago',0],
 ['',I.spark,'3 new challenges match your profile','Meridian Health, Volt and Halden Group opened briefs in your skill range this week.','4 days ago',0]
];
var COMPANY=[
 ['ok',I.trophy,'Challenge finished &middot; 84 entries scored','Streaming ingest dedupe closed. Top 5 submissions are ranked and ready for your review.','20 min ago',1],
 ['warn',I.clock,'2 candidates awaiting your decision','Both have been at offer stage for 4 days. Terms expire if not confirmed this week.','3 hours ago',1],
 ['',I.people,'11 new candidates entered your pool','Matched against the Platform Reliability Lead brief above your 85% threshold.','Yesterday',1],
 ['',I.cal,'Human interview scheduled','Priya Raman &mdash; 9 Sep, 14:00 CET. Panel invite sent to three of your interviewers.','2 days ago',0],
 ['',I.doc,'AI screening report ready','Round 2 write-ups for 13 candidates are published on the challenge page.','4 days ago',0]
];
function items(d){return d.map(function(i){return '<div class="np-item'+(i[5]?' unread':'')+'"><div class="np-ico '+i[0]+'">'+i[1]+'</div><div class="np-body"><p class="np-t">'+i[2]+'</p><p class="np-d">'+i[3]+'</p><div class="np-time">'+i[4]+'</div></div></div>';}).join('');}

var PAIRS=[];
function syncVis(){for(var i=0;i<PAIRS.length;i++){var p=PAIRS[i],d=getComputedStyle(p[1]).display==='none'?'none':'flex';if(p[0].style.display!==d)p[0].style.display=d;}}
function build(user){
  if(!user||user.closest('.app-actions'))return;
  var img=user.querySelector('img');
  var co=img&&/(co|lg)-\d/.test(img.getAttribute('src')||'');
  var data=co?COMPANY:CANDIDATE;
  var cs=getComputedStyle(user);
  var wrap=document.createElement('div');
  wrap.className='app-actions';
  if(cs.position==='absolute'||cs.position==='fixed'){
    wrap.style.position=cs.position;wrap.style.right=cs.right;wrap.style.top=cs.top;wrap.style.transform=cs.transform;
  }
  var n=document.createElement('div');
  n.className='app-notif';
  n.innerHTML='<button class="app-notif-btn" type="button" aria-label="Notifications">'+BELL+'<span class="app-notif-dot">3</span></button>'+
    '<div class="app-notif-panel"><div class="np-head"><span class="np-title">Notifications</span><button class="np-clear" type="button">Mark all read</button></div>'+
    '<div class="np-list">'+items(data)+'</div><div class="np-foot">View all activity</div></div>';
  user.parentNode.insertBefore(wrap,user);
  wrap.appendChild(n);wrap.appendChild(user);
  PAIRS.push([wrap,user]);syncVis();
  var host=wrap.parentNode;
  if(host&&host.nodeType===1){var hs=getComputedStyle(host);if(hs.position==='static')host.style.position='relative';if(hs.zIndex==='auto')host.style.zIndex='300';}
  var dot=n.querySelector('.app-notif-dot');
  function count(){var c=n.querySelectorAll('.np-item.unread').length;if(c){n.classList.remove('read');dot.textContent=c;}else{n.classList.add('read');}}
  n.querySelector('.app-notif-btn').addEventListener('click',function(e){e.stopPropagation();user.classList.remove('open');n.classList.toggle('open');});
  n.querySelector('.app-notif-panel').addEventListener('click',function(e){e.stopPropagation();});
  var ub=user.querySelector('.app-user-btn');
  if(ub)ub.addEventListener('click',function(){n.classList.remove('open');});
  n.querySelector('.np-clear').addEventListener('click',function(){n.querySelectorAll('.np-item.unread').forEach(function(i){i.classList.remove('unread');});count();});
  n.querySelectorAll('.np-item').forEach(function(i){i.addEventListener('click',function(){i.classList.remove('unread');count();});});
  document.addEventListener('click',function(){n.classList.remove('open');});
  count();
  syncVis();
}
function run(){
  var st=document.getElementById('np-styles');
  if(!st){st=document.createElement('style');st.id='np-styles';st.textContent=CSS;document.head.appendChild(st);}
  document.querySelectorAll('.app-user').forEach(build);
}
window.mountNotifications=run;
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
new MutationObserver(function(muts){
  for(var i=0;i<muts.length;i++){var a=muts[i].addedNodes;
    for(var j=0;j<a.length;j++){var n=a[j];if(n.nodeType!==1)continue;
      if(n.classList&&n.classList.contains('app-user')){build(n);}
      else if(n.querySelector&&n.querySelector('.app-user')){n.querySelectorAll('.app-user').forEach(build);}
    }}
  syncVis();
}).observe(document.documentElement,{childList:true,subtree:true});
new MutationObserver(syncVis).observe(document.documentElement,{attributes:true,attributeFilter:['class'],subtree:true});
})();
