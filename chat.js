/* 1:1 chat between companies and Human-interview-stage candidates. Button injected next to the notifications bell; modal on blurred backdrop.
   Company side: threads registered by pool.js (window.colChat.register). Candidate side: fixed threads below. */
(function(){
var CSS=`
.app-chat{position:relative;flex:none}
.app-chat-btn{position:relative;width:28px;height:28px;border-radius:50%;border:1px solid var(--line);background:#fff;padding:0;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:border-color .18s}
.app-chat-btn:hover{border-color:var(--ink2)}
.app-chat-btn svg{width:15px;height:15px;stroke:var(--ink2);fill:none;stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round}
.app-chat-dot{position:absolute;top:-5px;right:-5px;width:16px;height:16px;box-sizing:border-box;padding:0;border-radius:50%;background:var(--blue);color:#fff;font-size:9.5px;font-weight:300;line-height:1;display:flex;align-items:center;justify-content:center;text-align:center;font-variant-numeric:tabular-nums;border:1.5px solid #fff;letter-spacing:0}
.app-chat-dot[hidden]{display:none}
.cc-back{position:fixed;inset:0;z-index:2000;background:rgba(31,33,32,.28);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;padding:24px;opacity:0;transition:opacity .22s}
.cc-back.on{opacity:1}
.cc-back>.cc{width:min(920px,100%);height:min(620px,calc(100vh - 48px));background:#fff;border-radius:18px;box-shadow:0 30px 80px rgba(31,33,32,.25);display:grid;grid-template-columns:290px minmax(0,1fr);overflow:hidden;transform:translateY(8px);transition:transform .22s;text-align:left;font-family:inherit;color:var(--ink2)}
.cc-back.on .cc{transform:none}
.cc-side{border-right:1px solid var(--line);display:flex;flex-direction:column;min-height:0;background:#fbfbfa}
.cc-sh{padding:18px 18px 12px}
.cc-sh h3{margin:0;font-size:16px;font-weight:800;letter-spacing:-.01em}
.cc-sh p{margin:4px 0 0;font-size:11.5px;line-height:1.45;color:#6c6f68;text-wrap:pretty}
.cc-list{flex:1;overflow-y:auto;padding:0 8px 10px}
.cc-it{display:grid;grid-template-columns:36px minmax(0,1fr) auto;gap:10px;align-items:center;width:100%;border:0;background:none;text-align:left;font:inherit;color:inherit;padding:10px;border-radius:12px;cursor:pointer}
.cc-it:hover{background:#f1f1ee}
.cc-it.on{background:#fff;box-shadow:0 0 0 1px var(--line)}
.cc-av{width:36px;height:36px;border-radius:50%;object-fit:cover;background:#eee;border:1px solid var(--line)}
.cc-it b{display:block;font-size:12.5px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.cc-it em{display:block;font-style:normal;font-size:11.5px;color:#6c6f68;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:2px}
.cc-it.un b,.cc-it.un em{color:var(--ink2);font-weight:800}
.cc-meta{display:flex;flex-direction:column;align-items:flex-end;gap:5px;font-size:10.5px;color:#9a9d99;font-weight:600}
.cc-meta i{width:8px;height:8px;border-radius:50%;background:var(--blue)}
.cc-main{display:flex;flex-direction:column;min-height:0;min-width:0}
.cc-hd{display:flex;align-items:center;gap:12px;padding:14px 56px 14px 20px;border-bottom:1px solid var(--line)}
.cc-hd b{display:block;font-size:14px;font-weight:800}
.cc-hd em{display:block;font-style:normal;font-size:11.5px;color:#6c6f68;margin-top:2px}
.cc-tag{margin-left:auto;font-size:10.5px;font-weight:700;padding:4px 9px;border-radius:999px;background:#e7ece5;color:#3d6b4e;white-space:nowrap}
.cc-x{position:absolute;top:14px;right:14px;width:30px;height:30px;border-radius:50%;border:1px solid var(--line);background:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;z-index:2}
.cc-x svg{width:14px;height:14px;stroke:var(--ink2);stroke-width:2;fill:none}
.cc-log{flex:1;overflow-y:auto;padding:18px 20px;display:flex;flex-direction:column;gap:10px;background:#fff}
.cc-day{align-self:center;font-size:10.5px;font-weight:700;color:#9a9d99;letter-spacing:.04em;text-transform:uppercase;margin:6px 0}
.cc-m{max-width:74%;display:flex;flex-direction:column;gap:4px;align-self:flex-start}
.cc-m.me{align-self:flex-end;align-items:flex-end}
.cc-bub{padding:10px 13px;border-radius:14px 14px 14px 4px;background:#f2f2ef;font-size:13px;line-height:1.5;text-wrap:pretty}
.cc-m.me .cc-bub{background:var(--ink2);color:#fff;border-radius:14px 14px 4px 14px}
.cc-bub code{font-family:ui-monospace,Menlo,monospace;font-size:12px;background:rgba(0,0,0,.06);padding:1px 5px;border-radius:5px}
.cc-m.me .cc-bub code{background:rgba(255,255,255,.14)}
.cc-bub pre{margin:8px 0 2px;padding:10px 12px;border-radius:9px;background:#1f2120;color:#e8e6df;font-family:ui-monospace,Menlo,monospace;font-size:11.5px;line-height:1.55;white-space:pre;overflow-x:auto}
.cc-file{display:flex;align-items:center;gap:10px;padding:10px 12px;border:1px solid var(--line);border-radius:12px;background:#fff;min-width:240px;color:var(--ink2)}
.cc-file svg{width:28px;height:28px;flex:none;stroke:#b0513c;fill:none;stroke-width:1.6}
.cc-file b{display:block;font-size:12.5px;font-weight:700}
.cc-file em{display:block;font-style:normal;font-size:11px;color:#6c6f68}
.cc-file span{margin-left:auto;font-size:11px;font-weight:700;color:var(--blue)}
.cc-t{font-size:10.5px;color:#9a9d99;font-weight:600}
.cc-typing{align-self:flex-start;font-size:11.5px;color:#9a9d99;font-style:italic}
.cc-empty{margin:auto;text-align:center;font-size:12.5px;color:#6c6f68;max-width:300px;line-height:1.5}
.cc-comp{display:flex;align-items:center;gap:8px;padding:12px 16px;border-top:1px solid var(--line)}
.cc-att{width:36px;height:36px;border-radius:50%;border:1px solid var(--line);background:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;flex:none}
.cc-att svg{width:16px;height:16px;stroke:var(--ink2);fill:none;stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round}
.cc-in{flex:1;min-width:0;height:38px;border:1px solid var(--line);border-radius:999px;padding:0 16px;font:inherit;font-size:13px;color:var(--ink2);background:#fbfbfa;outline:none}
.cc-in:focus{border-color:var(--blue);background:#fff}
.cc-send{height:38px;padding:0 18px;border-radius:999px;border:0;background:var(--ink2);color:#fff;font:inherit;font-size:12.5px;font-weight:700;cursor:pointer}
.cc-send:disabled{opacity:.4;cursor:default}
@media (max-width:700px){.cc-back>.cc{grid-template-columns:1fr}.cc-side{display:none}}

.app-chat-btn{border:0!important;background:none!important;box-shadow:none!important;border-radius:8px}.app-chat-btn svg{width:21px;height:21px}.app-chat-btn:hover svg,.app-chat.open .app-chat-btn svg{stroke:var(--blue)}.app-chat-dot{top:-4px;right:-6px}
`;
var ICON='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-5A8 8 0 1 1 21 12z"/></svg>';
var PDF='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><polyline points="14 3 14 8 19 8"/></svg>';
var CLIP='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 11.5l-8.6 8.6a5 5 0 0 1-7.1-7.1l8.6-8.6a3.3 3.3 0 0 1 4.7 4.7l-8.6 8.6a1.7 1.7 0 0 1-2.4-2.4l7.9-7.9"/></svg>';
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function av(n){return 'https://i.pravatar.cc/80?u='+encodeURIComponent(n);}

/* message: [from 'co'|'ca'|'day', html, time, file?] */
function tplCo(i,fn,ctx){
  var T=[
   [['day','Mon 21 Sep'],['co','Hi '+fn+', thanks again for the panel. Before we send the written offer, could you share your current compensation? A recent payslip is enough.','10:12'],
    ['ca','Sure. Base is $152k with a 10% annual bonus. August payslip attached.','11:40'],['ca','','11:40',['Payslip_Aug_2026.pdf','PDF \u00b7 212 KB']],
    ['co','Received, thank you. We\u2019ll match that base plus the equity grant we discussed.','12:05'],['day','Today'],['ca','Great. Is the equity vesting over four years with a one-year cliff?','09:18']],
   [['day','Thu 17 Sep'],['co','Quick question on your final submission. In <code>retry.go</code> you cap backoff at 30s. Was that tuned against the load test or a default?','14:02'],
    ['ca','Tuned. Above 30s the queue grew faster than it drained in the 5k rps run. Numbers are in <code>bench/backoff.md</code>.','14:20'],
    ['co','And why a token bucket over a sliding window for the rate limiter?','14:31'],
    ['ca','The sliding window was more accurate but cost an extra Redis round-trip per request. At the p99 target the bucket was close enough:<pre>limiter := bucket.New(rate, burst)\nif !limiter.Allow(key) {\n  return ErrThrottled\n}</pre>','14:48'],
    ['co','Makes sense. The panel is happy, welcome aboard. Onboarding details follow by email.','16:10']],
   [['day','Yesterday'],['co','Hi '+fn+', looking forward to the interview on 29 Sep. We\u2019ll walk through your final-stage submission'+(ctx?' for '+esc(ctx):'')+', so please have the repo open.','17:30'],
    ['co','One thing to think about beforehand: how would your design change if write volume tripled?','17:31']],
   [['day','Tue 22 Sep'],['co','Congratulations '+fn+', your entry placed first. Before we release the bounty, could you confirm the payout account on your profile is current?','10:05'],
    ['ca','Yes, it\u2019s current. Thank you!','10:30'],['co','Great. One question on the submission: why a fixed 1s window for the metrics flush rather than adaptive?','10:42'],['ca','Adaptive flushing saved little under steady load and made the tests nondeterministic, so I kept it fixed.','11:10']],
   [['day','Yesterday'],['co','Nice work placing second. We\u2019d like to reuse your cardinality guard in production. Are you open to a short call about it?','15:20']],
   [['day','Mon 21 Sep'],['co','Thanks for your entry, '+fn+'. The reward for third place will be released this week.','09:40'],['ca','Thank you, and thanks for the detailed review.','12:02']]
  ];return T[i%T.length];
}
var CAND=[
 {id:'aurora',name:'Aurora Systems',lg:'assets/lg-2.png',sub:'Platform reliability sprint \u00b7 Offer stage',m:[['day','Mon 21 Sep'],['co','Hi Alex, thanks again for the panel. Before we send the written offer, could you share your current compensation? A recent payslip is enough.','10:12'],['ca','Sure. Base is $152k with a 10% annual bonus. August payslip attached.','11:40'],['ca','','11:40',['Payslip_Aug_2026.pdf','PDF \u00b7 212 KB']],['day','Today'],['co','Received, thank you. The written offer will match that base plus equity. Expect it by Friday.','09:05']],un:1},
 {id:'volt',name:'Volt',lg:'assets/lg-2.png',sub:'Payments ledger hardening \u00b7 Human interview',m:[['day','Yesterday'],['co','Hi Alex, ahead of the 29 Sep interview we have two questions on your ledger submission.','16:20'],['co','1. What happens if a replay arrives after its idempotency key has expired?<br>2. Why did you run reconciliation nightly rather than continuously?','16:21']],un:1},
 {id:'lumen',name:'Lumen',lg:'assets/lg-3.png',sub:'Search relevance tuning \u00b7 Hired',m:[['day','Wed 16 Sep'],['co','Welcome to Lumen! Could you send a copy of your last payslip for payroll setup?','11:00'],['ca','Attached. Let me know if you need anything else.','11:32'],['ca','','11:32',['Payslip_Aug_2026.pdf','PDF \u00b7 198 KB']],['co','All set. See you on 13 Oct.','12:10']]},
 {id:'meridian',name:'Meridian Health',lg:'assets/lg-4.png',sub:'Staff Platform Engineer \u00b7 Offer extended',m:[['day','Mon 14 Sep'],['co','Your offer letter is in your inbox. Happy to answer any questions about relocation support.','15:40'],['ca','Thanks. Does the $8,000 cover temporary housing, or only moving costs?','18:02'],['co','Both, up to the full amount, for the first 60 days.','09:14']]},
 {id:'northwind',name:'Northwind Data',lg:'assets/lg-1.png',sub:'Streaming ingest dedupe \u00b7 Bounty won \u00b7 Senior Backend Engineer \u00b7 Human interview',m:[['day','Thu 10 Sep'],['co','Congratulations on first place in Streaming ingest dedupe. The bounty went out yesterday. Could you confirm it landed?','10:02'],['ca','It did, thank you. Happy to walk the team through the dedupe window if useful.','10:40'],['co','We\u2019d like that. We\u2019ve merged your entry and will invite you to our next hiring challenge.','11:15']]},
 {id:'kestrel',name:'Kestrel',lg:'assets/lg-5.png',sub:'Site Reliability Engineer \u00b7 Hired',m:[['day','Fri 4 Sep'],['co','In your submission the alert-fatigue audit cut pages by a third. Which alerts did you drop first?','10:30'],['ca','The ones that fired without a runbook, then any that auto-resolved within 5 minutes more than 80% of the time.','11:05'],['co','That\u2019s the rule we\u2019ll adopt. Offer to follow.','11:20']]}
];
var COFB=['Priya Raman','Daniel Okafor','Mei Lindqvist'];
var state={side:null,threads:[],cur:null};
function lastOf(t){for(var i=t.m.length-1;i>=0;i--)if(t.m[i][0]!=='day')return t.m[i];return null;}
function snippet(t){var l=lastOf(t);if(!l)return 'No messages yet';var txt=l[3]?'\ud83d\udcce '+l[3][0]:l[1].replace(/<pre>[\s\S]*?<\/pre>/g,' [code] ').replace(/<[^>]+>/g,'');return ((l[0]===me()?'You: ':'')+txt).replace(/\ud83d\udcce /,'Attachment: ');}
function me(){return state.side==='co'?'co':'ca';}
function unread(){return state.threads.filter(function(t){return t.un;}).length;}
function companyThreads(list){
  var prev={};state.threads.forEach(function(t){prev[t.id]=t;});
  state.threads=list.map(function(c,i){var id='c:'+c.name;if(prev[id])return prev[id];var fn=c.name.split(' ')[0];return {id:id,name:c.name,lg:av(c.name),sub:(c.sub||'Candidate')+' \u00b7 '+(c.stage||'Human interview'),m:tplCo(c.tpl!=null?c.tpl:i,fn,c.ctx),un:[0,4].indexOf(c.tpl!=null?c.tpl:i)>=0};});
  syncDots();
}
function syncDots(){var n=unread();document.querySelectorAll('.app-chat-dot').forEach(function(d){d.textContent=n;d.hidden=!n;});}
function renderMsgs(t){
  if(!t.m.length)return '<div class="cc-empty">No messages yet. '+(state.side==='co'?'Say hello to '+esc(t.name.split(' ')[0])+'.':'You can message '+esc(t.name)+' now that you\u2019re in the Human interview stage.')+'</div>';
  return t.m.map(function(m){
    if(m[0]==='day')return '<div class="cc-day">'+esc(m[1])+'</div>';
    var body=m[3]?'<div class="cc-file">'+PDF+'<div><b>'+esc(m[3][0])+'</b><em>'+esc(m[3][1])+'</em></div><span>View</span></div>':'<div class="cc-bub">'+m[1]+'</div>';
    return '<div class="cc-m'+(m[0]===me()?' me':'')+'">'+body+'<span class="cc-t">'+esc(m[2])+'</span></div>';
  }).join('');
}
function open(key){
  var t=null;
  if(key){t=state.threads.filter(function(x){return x.id===key||x.name===key;})[0];
    if(!t&&state.side==='co'){t={id:'c:'+key,name:key,lg:av(key),sub:'Human interview',m:[]};state.threads.unshift(t);}}
  t=t||state.threads[0];
  var back=document.createElement('div');back.className='cc-back';
  back.innerHTML='<div class="cc" role="dialog" aria-modal="true" aria-label="Messages" style="position:relative"><button class="cc-x" type="button" aria-label="Close"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></button>'
    +'<aside class="cc-side"><div class="cc-sh"><h3>Messages</h3><p>'+(state.side==='co'?'Only candidates in the final stage can be messaged: Human interview, or bounty winners.':'You can message a company once you reach its final stage: Human interview, or Awards for bounties.')+'</p></div><div class="cc-list"></div></aside>'
    +'<section class="cc-main"><div class="cc-hd"></div><div class="cc-log"></div><form class="cc-comp"><button type="button" class="cc-att" aria-label="Attach file">'+CLIP+'</button><input class="cc-in" placeholder="Write a message" autocomplete="off"><button class="cc-send" type="submit" disabled>Send</button></form></section></div>';
  document.body.appendChild(back);requestAnimationFrame(function(){back.classList.add('on');});
  var list=back.querySelector('.cc-list'),hd=back.querySelector('.cc-hd'),log=back.querySelector('.cc-log'),inp=back.querySelector('.cc-in'),snd=back.querySelector('.cc-send');
  function drawList(){list.innerHTML=state.threads.map(function(x){var l=lastOf(x);return '<button type="button" class="cc-it'+(x===state.cur?' on':'')+(x.un?' un':'')+'" data-id="'+esc(x.id)+'"><img class="cc-av" src="'+esc(x.lg)+'" alt=""><span><b>'+esc(x.name)+'</b><em>'+esc(snippet(x))+'</em></span><span class="cc-meta">'+(l?esc(l[2]):'')+(x.un?'<i></i>':'')+'</span></button>';}).join('');}
  function select(x){state.cur=x;x.un=0;syncDots();drawList();
    hd.innerHTML='<img class="cc-av" src="'+esc(x.lg)+'" alt=""><div style="min-width:0"><b>'+esc(x.name)+'</b><em>'+esc(x.sub)+'</em></div>';
    log.innerHTML=renderMsgs(x);log.scrollTop=log.scrollHeight;inp.focus();}
  function now(){var d=new Date();return (d.getHours()<10?'0':'')+d.getHours()+':'+(d.getMinutes()<10?'0':'')+d.getMinutes();}
  function push(x,m){var l=x.m[x.m.length-1];if(!x.m.some(function(z){return z[0]==='day'&&z[1]==='Today';}))x.m.push(['day','Today']);x.m.push(m);if(x===state.cur){log.innerHTML=renderMsgs(x);log.scrollTop=log.scrollHeight;}drawList();}
  function reply(x){var other=state.side==='co'?'ca':'co';var ty=document.createElement('div');ty.className='cc-typing';ty.textContent=(state.side==='co'?x.name.split(' ')[0]:x.name)+' is typing\u2026';
    setTimeout(function(){if(x===state.cur){log.appendChild(ty);log.scrollTop=log.scrollHeight;}},600);
    setTimeout(function(){ty.remove();push(x,[other,state.side==='co'?'Thanks, noted. I\u2019ll get back to you shortly.':'Thanks Alex, we\u2019ll pass this to the panel and reply today.',now()]);},2200);}
  list.onclick=function(e){var b=e.target.closest('.cc-it');if(!b)return;select(state.threads.filter(function(x){return x.id===b.getAttribute('data-id');})[0]);};
  inp.oninput=function(){snd.disabled=!inp.value.trim();};
  back.querySelector('.cc-comp').onsubmit=function(e){e.preventDefault();var v=inp.value.trim();if(!v)return;inp.value='';snd.disabled=true;var x=state.cur;push(x,[me(),esc(v),now()]);reply(x);};
  back.querySelector('.cc-att').onclick=function(){var x=state.cur;push(x,[me(),'',now(),[state.side==='co'?'Final_round_questions.pdf':'Payslip_Sep_2026.pdf','PDF \u00b7 '+(180+Math.floor(Math.random()*60))+' KB']]);};
  function close(){back.classList.remove('on');setTimeout(function(){back.remove();},220);document.removeEventListener('keydown',kd);}
  function kd(e){if(e.key==='Escape')close();}
  document.addEventListener('keydown',kd);
  back.querySelector('.cc-x').onclick=close;back.onclick=function(e){if(e.target===back)close();};
  if(t)select(t);else{drawList();log.innerHTML='<div class="cc-empty">No conversations yet.</div>';}
}
function mount(wrap){
  if(wrap.querySelector('.app-chat'))return;
  var img=wrap.querySelector('.app-user img');var side=img&&/co-\d/.test(img.getAttribute('src')||'')?'co':'ca';
  if(!state.side){state.side=side;if(side==='ca')state.threads=CAND;else if(!state.threads.length)companyThreads(COFB.map(function(n,i){return {name:n,tpl:i};}));}
  var c=document.createElement('div');c.className='app-chat';
  c.innerHTML='<button class="app-chat-btn" type="button" aria-label="Messages">'+ICON+'<span class="app-chat-dot" hidden></span></button>';
  wrap.insertBefore(c,wrap.firstChild);
  c.querySelector('button').addEventListener('click',function(e){e.stopPropagation();open();});
  syncDots();
}
function scan(){document.querySelectorAll('.app-actions').forEach(mount);}
var st=document.createElement('style');st.textContent=CSS;document.head.appendChild(st);
window.colChat={open:open,register:function(list){state.side=state.side||'co';companyThreads(list);}};
scan();new MutationObserver(scan).observe(document.body,{childList:true,subtree:true});
})();
