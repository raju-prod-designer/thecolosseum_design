(function(){

var browse=document.querySelector('.browse');if(!browse)return;
var bsw=browse.querySelector('.browse-switch');
var feed=document.createElement('div');feed.className='pulse-feed';
var hr=browse.querySelector('.browse-divider');var dock=document.createElement('aside');dock.className='pdock';dock.innerHTML='<div class="pd-rail"></div><div class="pd-panel"></div>';dock.querySelector('.pd-panel').appendChild(feed);hr.parentNode.insertBefore(dock,hr.nextSibling);

var A={
  arena:{n:'Arena',s:'theColosseum',av:'<span class="pl-av arena"><svg viewBox="0 0 40 42" aria-hidden="true"><path fill="#648dc6" d="M1 1H16V8H8V34H16V41H1ZM39 1H24V8H32V34H24V41H39Z"></path></svg></span>',v:1},
  nimbus:{n:'Nimbus Labs',s:'Patron',fol:2481,av:'<span class="pl-av co"><img src="assets/lg-1.png" alt="" /></span>',v:1},
  you:{n:'Your progress',s:'Only visible to you',av:'<span class="pl-av"><img src="assets/candidate-profile.png" alt="" /></span>'},
  ananya:{n:'Ananya R.',s:'Gold tier',av:'<span class="pl-av"><img src="https://i.pravatar.cc/160?u=colosseum-eng-1" alt="" /></span>'},
  karthik:{n:'Karthik M.',s:'Platinum tier',av:'<span class="pl-av"><img src="https://i.pravatar.cc/160?u=colosseum-eng-2" alt="" /></span>'},
  rohit:{n:'Rohit S.',s:'Gold tier',av:'<span class="pl-av"><img src="https://i.pravatar.cc/160?u=colosseum-eng-3" alt="" /></span>'},
  priya:{n:'Priya K.',s:'Platinum tier',av:'<span class="pl-av"><img src="https://i.pravatar.cc/160?u=colosseum-eng-4" alt="" /></span>'}
};
var CH='ch',LB='Candidate - Leaderboard.html';
var P=[
 {day:'Today'},
 {a:'arena',t:'4m',x:"Nimbus Labs just opened Realtime Sync Engine. $15,000 prize pool, escrow funded, 6 days to deadline. 82% match to your profile.",e:{k:'open'},c:'Enter the arena',h:CH,l:184,s:22},
 {a:'you',t:'18m',x:"You moved up 4 places on the global leaderboard this week. Top 10% is 120 points away.",e:{k:'gap'},c:'Find challenges to close the gap',h:CH,l:9,s:1},
 {a:'nimbus',t:'41m',x:"Nimbus Labs shipped offline mode in v2.4. Built by our team plus 3 Colosseum contributors 🎉",e:{k:'faces3'},c:'See what they built',h:CH,l:312,s:47},
 {a:'ananya',t:'1h',x:"Ananya R. jumped from #14 to #3 on Payments Fraud Detector after her second submission.",e:{k:'rank',f:14,to:3,cap:'Payments Fraud Detector<br />2 submissions'},c:'View leaderboard',h:LB,l:96,s:8},
 {a:'arena',t:'1h',x:"Search Ranking Arena closes in 6 hours. You've started but haven't submitted.",e:{k:'clock'},c:'Finish submission',h:CH,l:27,s:3,pr:1,pl:'Closes in 6h'},
 {a:'arena',t:'2h',x:"12 gladiators with your stack (React, Node) are competing in Dashboard Rebuild. Median score: 71.",e:{k:'chips',v:['React','Node','12 competing','Median <b>71</b>']},c:'Compare yourself',h:LB,l:58,s:6},
 {a:'arena',t:'3h',x:"214 gladiators entered LLM Eval Harness in the first 24 hours. 38 submissions so far.",e:{k:'stats',v:[['214','entered in 24h'],['38','submissions'],['18%','submitted']]},c:'Join before it fills',h:CH,l:141,s:19},
 {a:'nimbus',t:'4h',x:"We're redesigning onboarding for 2M users. Best 3 ideas win $2,500 each. Written proposals only, 1 page max.",e:{k:'chips',v:['<b>$2,500</b> × 3 winners','1 page max','Written proposals']},c:'Submit an idea',h:CH,l:228,s:64},
 {a:'karthik',t:'5h',x:"Karthik M. won $7,500 on Plugin Library Challenge. Payout released from escrow in 48 hours.",e:{k:'big',v:'$7,500',l:'Released from escrow in 48h'},c:'See winning submission',h:CH,l:507,s:38},
 {a:'arena',t:'6h',x:"Someone just passed your score on API Rate Limiter. You're now #6 of 40.",e:{k:'rank',f:5,to:6,down:1,cap:'API Rate Limiter<br />40 competing'},c:'Improve submission',h:CH,l:14,s:0,pr:3,pl:'Rank dropped'},
 {a:'arena',t:'8h',x:"Prize pool for Fintech KYC Challenge is locked in escrow. Payout guaranteed to winners.",e:{k:'lock',v:'Escrow locked',s:'Verified today'},c:'View challenge',h:CH,l:73,s:11},
 {day:'Yesterday'},
 {a:'arena',t:'1d',x:"5 gladiators made the final cut for CRM Integration Sprint. Final round: live code review with the Nimbus CTO on Friday.",e:{k:'faces5'},c:'See finalists',h:LB,l:219,s:17},
 {a:'nimbus',t:'1d',x:"Here's the actual problem your next challenge solves.",e:{k:'video'},c:'Watch',h:'video',l:388,s:52},
 {a:'priya',t:'1d',x:"Priya K. completed her 10th challenge and unlocked the Centurion badge.",e:{k:'big',v:'10',l:'challenges completed · Centurion badge unlocked'},c:'View profile',h:LB,l:276,s:14},
 {a:'arena',t:'1d',x:"2 finalists from Backend API Arena just accepted offers at Nimbus Labs.",e:{k:'faces2'},c:'Similar open challenges',h:CH,l:164,s:21},
 {a:'arena',t:'1d',x:"Only 15 finalist slots left for Mobile Checkout Challenge. AI screening closes tonight.",e:{k:'seats'},c:'Apply now',h:CH,l:42,s:9,pr:2,pl:'Closes tonight'},
 {a:'rohit',t:'1d',x:"Rohit S.'s pull request to our open-source SDK was merged into main. He earned $1,000 and a fast-track interview.",e:{k:'chips',v:['PR merged','<b>$1,000</b> earned','Fast-track interview']},c:'Browse open issues',h:CH,l:201,s:26,by:'nimbus'},
 {a:'arena',t:'2d',x:"AI judging summary published for Backend Arena. See how every submission was scored.",e:{k:'lock',v:'Scoring summary published',s:'All submissions',ic:'doc'},c:'Read rubric',h:CH,l:88,s:13},
 {day:'This week'},
 {a:'nimbus',t:'3d',x:"Find a reproducible bug in our checkout flow before Sunday. $500 per valid report, capped at 20 reports.",e:{k:'chips',v:['<b>$500</b> per report','20 reports max','Ends Sunday']},c:'Start hunting',h:CH,l:133,s:29,pr:4,pl:'Ends Sunday'},
 {a:'arena',t:'3d',x:"Nimbus Labs added $5,000 to the Data Pipeline prize pool. New total: $20,000.",e:{k:'big',v:'<s>$15,000</s>$20,000',l:'Data Pipeline prize pool'},c:'View challenge',h:CH,l:97,s:15},
 {a:'nimbus',t:'4d',x:"What separated our top 5 submissions: test coverage, clear README, and handling edge cases nobody asked about.",e:{k:'list',v:['Test coverage','Clear README','Handling edge cases nobody asked about']},c:'Read full breakdown',h:CH,l:442,s:81},
 {a:'arena',t:'5d',x:"Nimbus Labs: 6 challenges run, $84,000 paid out, 9 hires made. 100% on-time payouts.",e:{k:'stats',v:[['6','challenges run'],['$84,000','paid out'],['9','hires made'],['100%','on-time payouts']]},c:'See patron profile',h:CH,l:65,s:7},
 {a:'nimbus',t:'6d',x:"Next month we're opening a challenge on vector search latency. Early followers get 24-hour head start access.",e:{k:'chips',v:['Vector search latency','Opens next month','24h head start']},c:'Follow Nimbus Labs',h:'follow',l:118,s:12}
];
(function(){var hi=P.filter(function(p){return p.pr;}).sort(function(a,b){return a.pr-b.pr;}),rest=P.filter(function(p){return !p.pr;}),out=[];rest.forEach(function(p,i){if(p.day&&(!rest[i+1]||rest[i+1].day))return;out.push(p);});P=[{day:'Needs your attention'}].concat(hi,out);})();
var ARW='<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
var HEART='<svg viewBox="0 0 24 24"><path d="M12 20.5s-7.5-4.6-9.6-9.2C.9 7.9 3 4.5 6.6 4.5c2.1 0 3.6 1.2 5.4 3.1 1.8-1.9 3.3-3.1 5.4-3.1 3.6 0 5.7 3.4 4.2 6.8-2.1 4.6-9.6 9.2-9.6 9.2z"/></svg>';
var SHARE='<svg viewBox="0 0 24 24"><path d="M12 3v12M7 8l5-5 5 5"/><path d="M5 13v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5"/></svg>';
var VER='<svg class="pl-ver" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8.5 12.2l2.3 2.3 4.7-4.8" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
var FOLLOWING={};
function plFollow(a){var on=!FOLLOWING[a];FOLLOWING[a]=on;document.querySelectorAll('.pl-fol[data-a="'+a+'"]').forEach(function(x){var n=x.querySelector('.c'),base=+x.getAttribute('data-n'),old=(base+(on?0:1)).toLocaleString('en-US');x.classList.toggle('on',on);n.classList.remove('up','dn');n.innerHTML=digits((base+(on?1:0)).toLocaleString('en-US'),old);void n.offsetWidth;n.classList.add(on?'up':'dn');});}
function plFolHtml(a,base){var on=!!FOLLOWING[a];return '<span class="l1">Follow</span><span class="l2">Following</span><span class="l3">Unfollow</span><span class="pl-n c">'+digits((base+(on?1:0)).toLocaleString('en-US'))+'</span>';}
window.plFollow=plFollow;window.plFollowFill=function(btn,a,base){btn.setAttribute('data-a',a);btn.setAttribute('data-n',base);btn.classList.toggle('on',!!FOLLOWING[a]);btn.innerHTML=plFolHtml(a,base);};
function fmt(n){return n>=1000?(n/1000).toFixed(1).replace('.0','')+'k':String(n);}
function digits(str,old){old=old||'';var pad=str.length-old.length;return str.split('').map(function(c,i){var o=old[i-pad];var ch=!!old&&o!==c;return '<span class="pl-d'+(ch?' ch':'')+'"'+(ch?' style="--dl:'+(str.length-1-i)*0+'s"':'')+'><b>'+c+'</b>'+(ch&&o!=null?'<b class="o">'+o+'</b>':'')+'</span>';}).join('');}
function faces(ids){return '<div class="st">'+ids.map(function(i){return '<img src="https://i.pravatar.cc/160?u=colosseum-eng-'+i+'" alt="" />';}).join('')+'</div>';}
function emb(e){
  switch(e.k){
  case 'open':return '<div class="pl-chips"><span class="pl-chip"><b>$15,000</b> prize pool</span><span class="pl-chip">Escrow funded</span><span class="pl-chip">6 days left</span></div><div class="pl-match">Match<span class="pl-bar"><i style="--w:82%"></i></span><b>82%</b></div>';
  case 'gap':return '<div class="pl-match" style="margin-top:0">▲ 4 places<span class="pl-bar"><i style="--w:68%"></i></span><b>120 pts</b> to top 10%</div>';
  case 'rank':return '<div class="pl-rank"><span class="r">#'+e.f+'</span><svg viewBox="0 0 24 24"'+(e.down?' style="stroke:oklch(0.6 0.15 30)"':'')+'><path d="M5 12h14M13 6l6 6-6 6"/></svg><span class="r to">#'+e.to+'</span><span class="cap">'+e.cap+'</span></div>';
  case 'clock':return '<div class="pl-clock"><span class="v" data-clock="21600">06:00:00</span><span class="l">left to submit · draft saved</span></div>';
  case 'chips':return '<div class="pl-chips">'+e.v.map(function(v){return '<span class="pl-chip">'+v+'</span>';}).join('')+'</div>';
  case 'stats':return '<div class="pl-stats">'+e.v.map(function(v){return '<div class="pl-stat"><div class="v">'+v[0]+'</div><div class="l">'+v[1]+'</div></div>';}).join('')+'</div>';
  case 'big':return '<div class="pl-big"><span class="v">'+e.v+'</span><span class="l">'+e.l+'</span></div>';
  case 'lock':return '<div class="pl-lock">'+(e.ic==='doc'?'<svg viewBox="0 0 24 24"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/></svg>':'<svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>')+e.v+'<span>'+e.s+'</span></div>';
  case 'faces3':return '<div class="pl-faces">'+faces([3,5,6])+'<span>3 Colosseum contributors</span></div>';
  case 'faces5':return '<div class="pl-faces">'+faces([1,2,3,4,5])+'<span>5 finalists · live review Friday</span></div>';
  case 'faces2':return '<div class="pl-faces">'+faces([5,6])+'<span>2 offers accepted</span></div>';
  case 'seats':var s='';for(var i=0;i<25;i++)s+='<i'+(i<10?' class="t"':'')+'></i>';return '<div class="pl-seats">'+s+'</div><p>15 of 25 slots open · screening closes tonight</p>';
  case 'video':return '<div class="pl-vid"><div class="pl-code"><span class="c">// sync/reconnect.ts</span><span><em>const</em> local = <em>await</em> store.pending()</span><span><em>const</em> remote = <em>await</em> api.changes(since)</span><span><em>for</em> (<em>const</em> op <em>of</em> merge(local, remote)) {</span><span>&nbsp;&nbsp;<em>if</em> (op.conflict) resolve(op)<span class="c">&nbsp;&nbsp;// 2.1s p95</span></span><span>}</span></div><span class="pb"><svg viewBox="0 0 24 24"><path d="M7 4.5v15l12-7.5z"/></svg></span><span class="who">Engineering lead, Nimbus Labs</span><span class="dur">0:30</span><span class="prog"></span></div>';
  case 'list':return '<div class="pl-quote">'+e.v.map(function(v,i){return '<div><em>'+(i+1)+'</em>'+v+'</div>';}).join('')+'</div>';
  }return '';
}
function card(p,idx){
  var a=A[p.a];
  var auth=p.by?A[p.by]:a;
  return '<article class="pl-card" data-i="'+idx+'">'+auth.av+'<div>'
    +'<div class="pl-meta"><span class="pl-name">'+auth.n+'</span>'+(auth.v?VER:'')+(auth.fol?'<button type="button" class="pl-fol" data-a="'+p.a+'" data-n="'+auth.fol+'">'+plFolHtml(p.a,auth.fol)+'</button>':'')+(p.pl?'<span class="pl-pri">'+p.pl+'</span>':'')+'<span class="pl-time">'+p.t+'</span></div>'
    +'<div class="pl-sub">'+auth.s+'</div>'
    +'<p class="pl-text">'+p.x+'</p>'
    +'<div class="pl-emb">'+emb(p.e)+'</div>'
    +'</div><div class="pl-acts"><span class="pl-glass"><i></i><i></i></span>'
      +'<button type="button" class="pl-act pl-like" aria-label="Like">'+HEART+'<span class="pl-burst">'+[0,60,120,180,240,300].map(function(d){return '<i style="--a:'+d+'deg"></i>';}).join('')+'</span><span class="pl-n">'+digits(fmt(p.l))+'</span></button>'
      +'<span class="pl-share-w"><button type="button" class="pl-act pl-share" aria-label="Share">'+SHARE+'<span class="pl-n">'+digits(fmt(p.s))+'</span></button>'
        +'<div class="pl-pop" role="menu">'
        +'<button type="button" class="pl-so" data-so="li"><span class="ic li"><svg viewBox="0 0 24 24"><circle cx="6" cy="6" r="2"/><rect x="4.2" y="9.5" width="3.6" height="10"/><path d="M10 9.5h3.4v1.6c.6-1 1.8-1.9 3.6-1.9 3 0 4 1.9 4 5v5.3h-3.6v-4.8c0-1.4-.4-2.4-1.8-2.4s-2.1 1.1-2.1 2.5v4.7H10z"/></svg></span>LinkedIn</button>'
        +'<button type="button" class="pl-so" data-so="x"><span class="ic x"><svg viewBox="0 0 24 24"><path d="M5 4l14 16M19 4L5 20"/></svg></span>X (Twitter)</button>'
        +'<button type="button" class="pl-so" data-so="wa"><span class="ic wa"><img src="assets/whatsapp.svg" alt="" /></span>WhatsApp</button>'
        +'<button type="button" class="pl-so" data-so="cp"><span class="ic cp"><svg viewBox="0 0 24 24"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg></span>Copy link</button>'
        +'</div></span>'
      +'<button type="button" class="pl-cta" data-h="'+p.h+'">'+'<span>'+p.c+'</span></button>'
    +'</div></article>';
}
feed.innerHTML='<div class="pl-head"><div><h2>Pulse</h2><span class="pl-live"><i></i>Updated just now</span></div><button type="button" class="pd-col" aria-label="Collapse Pulse" title="Collapse  ["><svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="3"/><path d="M9 4v16M15 10l-2 2 2 2"/></svg></button></div><div class="pl-list"></div><div class="pl-sent"></div>';
var list=feed.querySelector('.pl-list'),sent=feed.querySelector('.pl-sent');
var pos=0,busy=false,done=false;
var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}});},{rootMargin:'0px 0px -40px 0px'});
function addBatch(n){
  var html='',c=0;
  while(pos<P.length&&c<n){var p=P[pos];html+=p.day?'<div class="pl-day">'+p.day+'</div>':card(p,pos);if(!p.day)c++;pos++;}
  var tmp=document.createElement('div');tmp.innerHTML=html;
  [].slice.call(tmp.children).forEach(function(el,k){list.appendChild(el);if(el.classList.contains('pl-card')){tint(el);el.style.transitionDelay=(k*60)+'ms';io.observe(el);setTimeout(function(){el.style.transitionDelay='';},900+k*60);}});
  if(pos>=P.length){done=true;var end=document.createElement('div');end.className='pl-end';end.innerHTML='<span class="ck"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></span><h3>You\'re caught up.</h3><p>3 challenges match you today.</p><button type="button" data-h="ch">See your matches</button>';list.appendChild(end);io.observe(end);}
}
function tint(el){
  var img=el.querySelector('.pl-av img');
  if(!img){el.style.setProperty('--tint','#7d8590');return;}
  function go(){try{var c=document.createElement('canvas');c.width=c.height=16;var x=c.getContext('2d');x.drawImage(img,0,0,16,16);var d=x.getImageData(0,0,16,16).data,r=0,g=0,b=0,w=0;
    for(var i=0;i<d.length;i+=4){var mx=Math.max(d[i],d[i+1],d[i+2]),mn=Math.min(d[i],d[i+1],d[i+2]);if(d[i+3]<128||mx>245&&mn>235)continue;var wt=1+(mx-mn)/40;r+=d[i]*wt;g+=d[i+1]*wt;b+=d[i+2]*wt;w+=wt;}
    if(w)el.style.setProperty('--tint','rgb('+Math.round(r/w)+','+Math.round(g/w)+','+Math.round(b/w)+')');}catch(_){}}
  if(img.complete&&img.naturalWidth)go();else img.addEventListener('load',go);
}
addBatch(6);
var sk='<div class="pl-sk"><i class="a"></i><div class="b"><i style="width:38%;height:12px"></i><i style="width:94%;height:12px"></i><i style="width:72%;height:12px"></i></div></div>';
var lo=new IntersectionObserver(function(es){
  if(!es[0].isIntersecting||busy||done)return;
  busy=true;var s=document.createElement('div');s.className='pl-list';s.innerHTML=sk+sk;list.appendChild(s);
  setTimeout(function(){s.remove();addBatch(5);busy=false;},750);
},{root:feed,rootMargin:'0px 0px 300px 0px'});
lo.observe(sent);
function plFit(){if(window.matchMedia('(max-width:900px)').matches){dock.style.height='';return;}dock.style.height='100px';var r=dock.getBoundingClientRect(),k=r.height/100||1;dock.style.height=Math.max(240,(window.innerHeight-r.top)/k-8)+'px';}
window.addEventListener('resize',plFit);window.addEventListener('load',plFit);new MutationObserver(function(){requestAnimationFrame(plFit);}).observe(browse,{attributes:true,attributeFilter:['class']});requestAnimationFrame(plFit);
var toastEl=document.createElement('div');toastEl.className='pl-toast';document.body.appendChild(toastEl);var tt;
function toast(m){toastEl.innerHTML='<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>'+m;toastEl.classList.add('on');clearTimeout(tt);tt=setTimeout(function(){toastEl.classList.remove('on');},1800);}
function bump(btn,dir){var n=btn.querySelector('.pl-n'),p=P[+btn.closest('.pl-card').getAttribute('data-i')],key=btn.classList.contains('pl-like')?'l':'s';var old=fmt(p[key]);p[key]+=dir;n.classList.remove('up','dn');n.innerHTML=digits(fmt(p[key]),old);void n.offsetWidth;n.classList.add(dir>0?'up':'dn');
  if(dir>0){var pl=document.createElement('span');pl.className='pl-plus';pl.textContent='+1';btn.appendChild(pl);setTimeout(function(){pl.remove();},720);}}
function closePops(ex){feed.querySelectorAll('.pl-share-w.open').forEach(function(w){if(w!==ex)w.classList.remove('open');});}
feed.addEventListener('click',function(e){
  var t=e.target,b;
  if(b=t.closest('.pl-fol')){e.stopPropagation();plFollow(b.getAttribute('data-a'));return;}
  if(b=t.closest('.pl-like')){var on=!b.classList.contains('on');b.classList.toggle('on',on);b.classList.remove('pop');if(on){void b.offsetWidth;b.classList.add('pop');}bump(b,on?1:-1);return;}
  if(b=t.closest('.pl-share')){var w=b.parentNode;closePops(w);w.classList.toggle('open');return;}
  if(b=t.closest('.pl-so')){var w2=b.closest('.pl-share-w');w2.classList.remove('open');bump(w2.querySelector('.pl-share'),1);var so=b.getAttribute('data-so');
    if(so==='cp'){try{navigator.clipboard&&navigator.clipboard.writeText('https://thecolosseum.app/pulse/'+b.closest('.pl-card').getAttribute('data-i'));}catch(_){}toast('Link copied');}
    else toast('Shared to '+({li:'LinkedIn',x:'X',wa:'WhatsApp'}[so]));return;}
  if(b=t.closest('.pl-vid')){b.classList.toggle('playing');return;}
  if(b=t.closest('[data-h]')){var h=b.getAttribute('data-h');
    if(h==='ch'){var ci=b.closest('.pl-card');window.pdJump&&window.pdJump(ci?P[+ci.getAttribute('data-i')]:null,ci);}
    else if(h==='video'){var v=b.closest('.pl-card').querySelector('.pl-vid');v&&v.classList.add('playing');}
    else if(h==='follow'){b.innerHTML='Following'+'<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>';toast('Following Nimbus Labs');}
    else location.href=h;return;}
  closePops();
});
document.addEventListener('click',function(e){if(!e.target.closest('.pl-share-w'))closePops();});
window.__pd={P:P,A:A,feed:feed,dock:dock,browse:browse,ensure:function(i){while(!done&&pos<=i)addBatch(5);},toast:toast};
setInterval(function(){document.querySelectorAll('[data-clock]').forEach(function(el){var s=Math.max(0,+el.getAttribute('data-clock')-1);el.setAttribute('data-clock',s);var h=Math.floor(s/3600),m=Math.floor(s%3600/60),x=s%60;el.textContent=[h,m,x].map(function(n){return (n<10?'0':'')+n;}).join(':');});},1000);
})();
