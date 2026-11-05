/* Funds / escrow: stage carousel (same vocabulary as the hiring pipeline) + fund/release flows */
(function(){
var $=function(id){return document.getElementById(id);};
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');}
function money(n){return '$'+n.toLocaleString('en-US');}
function av(n){return 'https://i.pravatar.cc/120?u=colosseum-'+n.toLowerCase().replace(/[^a-z]+/g,'-');}

var NEED=[
  {t:'Anomaly scoring harness',s:'Bounty · AI Engineer · draft, not published',a:2000,k:'Bounty reward',v:'Cannot open to candidates until funded'},
  {t:'Observability on the ingest path',s:'Hiring challenge · Infrastructure Engineer',a:900,k:'3 finalist stipends',v:'Scheduled to open in 4 days'}
];

var ESC=[
  {t:'Cut p99 latency on the scheduler',s:'Bounty · 38 attempts, 9 cleared the bar',a:1500,k:'Bounty reward',st:3,fd:'06 Feb 2026',
   v:'Winner confirmed, awaiting release',win:{n:'Nikita Babych',r:'Submission #31 · cleared the bar by 54%'}},
  {t:'Idempotent job queue under retries',s:'Hiring challenge · 63 submissions, 41 scored',a:1200,k:'3 finalist stipends',st:2,fd:'12 Mar 2026',
   v:'In judging · closes in 3 days'},
  {t:'Backfill 10× ingestion without downtime',s:'Hiring challenge · 24 submissions in',a:800,k:'2 finalist stipends',st:1,fd:'18 Mar 2026',
   v:'Collecting submissions · 9 days left'}
];

var HIST=[
  {t:'Design a multi-tenant rate limiter',d:'Hiring challenge · Apr 2026',w:'Mei Chen',wn:'Hired from this round',a:1200,s:'Released'},
  {t:'Trace a race condition in the scheduler',d:'Bounty · Feb 2026',w:'Yusuf Rahman',wn:'Bounty paid in full',a:900,s:'Released'},
  {t:'Shard a write-heavy Postgres table',d:'Bounty · Jan 2026',w:'Priya Nair',wn:'Bounty paid in full',a:1500,s:'Released'},
  {t:'Write-ahead log with crash-safe recovery',d:'Bounty · Nov 2025',w:'Dieter Brandt',wn:'Bounty paid in full',a:750,s:'Released'},
  {t:'Leader election under network partition',d:'Bounty · Sep 2025',w:'Samuel Okoye',wn:'Split with Laura Bianchi',a:600,s:'Released'},
  {t:'API that degrades under partial outage',d:'Bounty · Jul 2025',w:'',wn:'No qualifying entry',a:1000,s:'Refunded'}
];

var LED=[
  ['Release · Rate limiter round','28 Apr 2026 · to Mei Chen',-1200,'neg'],
  ['Escrow hold · Backfill 10× ingestion','18 Mar 2026 · Wallet',-840,'neg'],
  ['Escrow hold · Idempotent job queue','12 Mar 2026 · Visa ···· 4242',-1296,'neg'],
  ['Wallet top-up','02 Mar 2026 · Visa ···· 4242',3000,'pos'],
  ['Release · Scheduler race condition','20 Feb 2026 · to Yusuf Rahman',-900,'neg'],
  ['Escrow hold · Cut p99 latency','06 Feb 2026 · Visa ···· 4242',-1575,'neg'],
  ['Release · Shard a Postgres table','24 Jan 2026 · to Priya Nair',-1500,'neg'],
  ['Release · Write-ahead log','18 Nov 2025 · to Dieter Brandt',-750,'neg'],
  ['Release · Leader election','30 Sep 2025 · split, Samuel Okoye and Laura Bianchi',-600,'neg'],
  ['Wallet top-up','02 Sep 2025 · Visa ···· 4242',2500,'pos'],
  ['Escrow hold · Leader election','12 Aug 2025 · Wallet',-630,'neg'],
  ['Refund · Graceful degradation','14 Jul 2025 · no qualifying entry',1000,'pos'],
  ['Platform fee refund · Graceful degradation','14 Jul 2025 · 5% fee returned',50,'pos'],
  ['Escrow hold · Write-ahead log','26 Jun 2025 · Visa ···· 4242',-788,'neg'],
  ['Release · Rate limiter stipend','19 Jun 2025 · to Aisha Bello',-300,'neg'],
  ['Release · Rate limiter stipend','19 Jun 2025 · to Tomás Silva',-300,'neg'],
  ['Escrow hold · Graceful degradation','02 Jun 2025 · Visa ···· 4242',-1050,'neg'],
  ['Wallet top-up','28 May 2025 · Bank transfer',4000,'pos'],
  ['Escrow hold · Rate limiter round','14 May 2025 · Wallet',-1890,'neg'],
  ['Release · Event dedup bounty','30 Apr 2025 · to Hana Kobayashi',-450,'neg'],
  ['Escrow hold · Shard a Postgres table','11 Apr 2025 · Visa ···· 4242',-1575,'neg'],
  ['Escrow hold · Event dedup bounty','27 Mar 2025 · Wallet',-473,'neg'],
  ['Wallet top-up','20 Mar 2025 · Visa ···· 4242',1500,'pos'],
  ['Wallet top-up','06 Mar 2025 · Bank transfer',2000,'pos']
];
var fhPage=0,FH_PER=10;

var released=4950,refunded=1000,wallet=2150,stage=2,statOpen=false;
var chev='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>';
var lock='<svg viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="11" rx="2.5"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>';
var check='<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>';

function due(){return ESC.filter(function(x){return x.win;});}
function sum(a){return a.reduce(function(t,x){return t+x.a;},0);}

function stages(){
  var d=due(),held=ESC.filter(function(x){return !x.win;}),escTot=sum(ESC),heldTot=sum(held),needTot=sum(NEED),dueTot=sum(d);
  return [
    {t:'Needs funding',n:NEED.length,sub:NEED.length===1?'challenge to fund':'challenges to fund',pend:NEED.length,pill:'bf-pill gold',
     note:'<b>'+money(needTot)+' is unfunded</b> across '+NEED.length+' posted challenge'+(NEED.length===1?'':'s')+'. Candidates only see a reward as secured once it sits in escrow, so unfunded briefs attract far fewer entries.',
     cta:NEED.length?'Fund the next challenge':null,
     stats:[[NEED.length,'challenges waiting','Both were written and approved, they are simply waiting on money before they can open.'],
       [money(needTot),'total to fund','Funding both would take escrow to '+money(escTot+needTot)+' across five live challenges.'],
       [money(Math.round(needTot*0.05)),'platform fee at 5%','Charged at funding, refunded in full if a challenge closes with no qualifying submission.'],
       [money(wallet),'wallet balance','Wallet covers part of this without a card charge; the rest goes to Visa ···· 4242.']]},
    {t:'In escrow',n:money(heldTot),sub:held.length+' challenge'+(held.length===1?'':'s')+' held',pend:0,pill:'bf-pill',
     note:'Held by theColosseum and shown to candidates as secured. <b>Neither side can touch it</b> until judging finishes and you confirm the result.',
     cta:null,
     stats:[[held.length,'challenges funded','Each one opened only after its reward was fully in escrow.'],
       [money(heldTot),'held in escrow','Excludes '+money(dueTot)+' confirmed for a winner, now under Awaiting release.'],
       ['4.1 days','median time in judging','Fast judging keeps rewards moving, which is what candidates rate companies on.'],
       ['100%','of live challenges funded','No live brief is running on an unfunded promise right now.']]},
    {t:'Awaiting release',n:money(dueTot),sub:d.length?d.length+' confirmed winner'+(d.length===1?'':'s'):'nothing to release',pend:d.length,pill:'bf-pill gold',
     note:d.length?'<b>'+d.length+' result is confirmed</b> and the reward is sitting in escrow waiting on you. Release it, or open a dispute if the submission misses the brief.':'Nothing is waiting on you. Rewards appear here as soon as judging confirms a winner.',
     cta:d.length?'Release '+money(dueTot):null,
     stats:[[d.length,'ready to release','Judging is complete and the submission has passed review.'],
       [money(dueTot),'owed to winners','Already ring-fenced in escrow, so releasing does not touch your wallet.'],
       ['14 days','auto-release window','Left unreleased, theColosseum pays the winner automatically to protect them.'],
       ['1.2 days','your median release time','Fast payout is the single biggest driver of your employer rating.']]},
    {t:'Released',n:money(released),sub:HIST.length+' challenges settled',pend:0,pill:'bf-pill dark',
     note:'<b>'+money(released)+' paid out</b> across '+HIST.filter(function(x){return x.s==='Released';}).length+' challenges, plus '+money(refunded)+' refunded where no entry met the bar. Every payout is on the winner\u2019s arena record.',
     cta:null,
     stats:[[money(released),'released, lifetime','Paid to 6 candidates; one bounty was split between two.'],
       [money(refunded),'refunded to you','One challenge closed with no submission clearing the bar.'],
       ['1 hire','from a paid challenge','The rate limiter round converted into a full-time hire in May 2026.'],
       ['4.6/5','candidate payout rating','Candidates rate you on whether rewards arrive when promised.']]}
  ];
}

function statCell(v,l,ins){
  var m=String(v).match(/^([$\d.,\u2014]+)(.*)$/);
  var head=m?esc(m[1])+(m[2]?'<em>'+esc(m[2])+'</em>':''):esc(String(v));
  return '<div><div class="v">'+head+'</div><div class="l">'+esc(l)+'</div><div class="ins">'+esc(ins)+'</div></div>';
}

function rows(){
  var i=stage,out='',head;
  if(i===0){
    head=['#','Challenge','Reward','Status',''];
    out=NEED.map(function(x,k){
      return '<div class="bf-row"><span class="bf-rk">'+(k+1)+'</span>'
        +'<span class="bf-who"><span class="nm"><b>'+esc(x.t)+'</b><em>'+esc(x.s)+'</em></span></span>'
        +'<span class="bf-amt">'+money(x.a)+'<em>'+esc(x.k)+'</em></span>'
        +'<span class="bf-verd dim">'+esc(x.v)+'</span>'
        +'<span class="bf-act"><button class="bf-btn" type="button" data-fund="'+k+'">Fund challenge</button></span></div>';
    }).join('')||empty('Every posted challenge is funded.');
  }else if(i===1){
    head=['#','Challenge','In escrow','Stage',''];
    var n=0;
    out=ESC.map(function(x,k){
      if(x.win)return '';
      return '<div class="bf-row"><span class="bf-rk">'+(++n)+'</span>'
        +'<span class="bf-who"><span class="nm"><b>'+esc(x.t)+'</b><em>'+esc(x.s)+' · funded '+esc(x.fd)+'</em></span></span>'
        +'<span class="bf-amt">'+money(x.a)+'<em>'+esc(x.k)+'</em></span>'
        +'<span class="bf-verd'+(x.win?' ok':'')+'">'+esc(x.v)+'</span>'
        +'<span class="bf-act">'+(x.win?'<button class="bf-btn" type="button" data-rel="'+k+'">Release funds</button>':'<button class="bf-btn line" type="button" data-cancel="'+k+'">Cancel &amp; refund</button>')+'</span></div>';
    }).join('')||empty('Nothing in escrow right now.');
  }else if(i===2){
    head=['#','Winner','Reward','Confirmed result',''];
    var d=due();
    out=d.map(function(x,k){
      var idx=ESC.indexOf(x);
      return '<div class="bf-row"><span class="bf-rk">'+(k+1)+'</span>'
        +'<span class="bf-who"><img src="'+av(x.win.n)+'" alt="" /><span class="nm"><b>'+esc(x.win.n)+'</b><em>'+esc(x.t)+'</em></span></span>'
        +'<span class="bf-amt">'+money(x.a)+'<em>'+esc(x.k)+'</em></span>'
        +'<span class="bf-verd ok">'+esc(x.win.r)+'</span>'
        +'<span class="bf-act bf-act-col"><button class="bf-btn" type="button" data-rel="'+idx+'">Release funds</button><button class="bf-btn line" type="button" data-dispute="'+idx+'">Open a dispute</button></span></div>';
    }).join('')||empty('Nothing is waiting on your release.');
  }else{
    head=['#','Winner','Paid','Challenge',''];
    out=HIST.map(function(x,k){
      return '<div class="bf-row"><span class="bf-rk">'+(k+1)+'</span>'
        +'<span class="bf-who">'+(x.w?'<img src="'+av(x.w)+'" alt="" />':'')+'<span class="nm"><b>'+esc(x.w||'No winner')+'</b><em>'+esc(x.wn)+'</em></span></span>'
        +'<span class="bf-amt">'+money(x.a)+'<em>'+esc(x.s)+'</em></span>'
        +'<span class="bf-verd dim">'+esc(x.t)+'<br>'+esc(x.d)+'</span>'
        +'<span class="bf-act"><button class="bf-btn line" type="button" data-rcpt="'+k+'">Receipt</button></span></div>';
    }).join('');
  }
  return '<div class="bf-list"><div class="bf-row head">'+head.map(function(c){return '<span>'+esc(c)+'</span>';}).join('')+'</div>'+out+'</div>';
}
function empty(m){return '<div class="bf-row" style="grid-template-columns:1fr"><span class="bf-verd dim">'+esc(m)+'</span></div>';}

var swapping=false;
function goStage(n){
  if(n===stage||swapping||n<1)return;
  var dir=n>stage?1:-1,el=$('bfSlide');
  if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion:reduce)').matches){stage=n;render();return;}
  swapping=true;
  el.style.transition='opacity .15s ease,transform .15s ease';
  el.style.opacity='0';el.style.transform='translateX('+(-dir*16)+'px)';
  setTimeout(function(){
    stage=n;render();
    el.style.transition='none';el.style.transform='translateX('+(dir*16)+'px)';
    requestAnimationFrame(function(){
      el.style.transition='opacity .24s ease,transform .24s cubic-bezier(.22,.68,.32,1)';
      el.style.opacity='1';el.style.transform='none';
      swapping=false;
    });
  },150);
}
function render(){
  var S=stages(),st=S[stage];
  $('bfSlide').innerHTML=S.map(function(s,i){
    if(i===0)return '';
    if(i===stage)return '<div class="bf-big"><div class="bf-big-top"><span class="'+s.pill+'">'+esc(s.t)+'</span>'+(s.pend?'<span class="bf-flag"><i></i>'+s.pend+' waiting on you</span>':'')+'</div>'
      +'<div class="bf-n"><b>'+s.n+'</b><span class="bf-sub">'+esc(s.sub)+'</span></div>'
      +'<p class="bf-note">'+s.note+'</p>'
      +'</div>';
    return '<div class="bf-mini'+(Math.abs(i-stage)>1?' far':'')+'" data-s="'+i+'" role="button" tabindex="0"><span class="'+s.pill+'">'+esc(s.t)+'</span><span class="bf-mini-n">'+s.n+'</span><span class="bf-sub">'+esc(s.sub)+'</span></div>';
  }).join('');
  $('bfTrack').innerHTML=S.map(function(s,i){
    if(i===0)return '';
    return (i>1?'<span class="l'+(i<=stage?' done':'')+'"></span>':'')+'<span class="d'+(i<stage?' done':i===stage?' cur':'')+'" data-s="'+i+'"></span>';
  }).join('');
  $('bfStat').innerHTML='<div class="bf-stat'+(statOpen?' on':'')+'" role="button" tabindex="0" aria-expanded="'+statOpen+'"><div class="bf-stat-g">'
    +st.stats.map(function(p){return statCell(p[0],p[1],p[2]);}).join('')
    +'</div><span class="bf-stat-x" aria-hidden="true">'+chev+'</span></div>';
  $('bfList').innerHTML=rows();
  var cta=$('bigCta');
  if(cta)cta.onclick=function(){
    if(stage===0&&NEED.length)fundModal(0);
    else if(stage===2&&due().length)relModal(ESC.indexOf(due()[0]));
  };
  balances();
}

function balances(){
  var escTot=sum(ESC),dueTot=sum(due());
  $('balEsc').textContent=money(escTot);
  $('balEscN').textContent='Across '+ESC.length+' live challenge'+(ESC.length===1?'':'s');
  $('balDue').textContent=money(dueTot);
  $('balDueN').textContent=dueTot?due().length+' confirmed winner'+(due().length===1?'':'s'):'Nothing to release';
  $('balOut').textContent=money(released);
  $('balWal').textContent=money(wallet);
}

function ledger(){var el=$('fhList');if(!el)return;var n=$('fhN');if(n)n.textContent=LED.length+' transactions';
  var pages=Math.max(1,Math.ceil(LED.length/FH_PER));fhPage=Math.min(fhPage,pages-1);var from=fhPage*FH_PER,slice=LED.slice(from,from+FH_PER);
  var pager=pages>1?'<div class="fh-pg"><span>Showing '+(from+1)+'\u2013'+(from+slice.length)+' of '+LED.length+'</span><div class="fh-pgb"><button type="button" class="fh-pb" data-fhp="'+(fhPage-1)+'"'+(fhPage?'':' disabled')+' aria-label="Previous page"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></button>'+Array.from({length:pages},function(_,i){return '<button type="button" class="fh-pb'+(i===fhPage?' on':'')+'" data-fhp="'+i+'">'+(i+1)+'</button>';}).join('')+'<button type="button" class="fh-pb" data-fhp="'+(fhPage+1)+'"'+(fhPage<pages-1?'':' disabled')+' aria-label="Next page"><svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg></button></div></div>':'';
  el.innerHTML='<div class="bf-list fh-list"><div class="bf-row fh-row head"><span>Date</span><span>Transaction</span><span>Type</span><span style="text-align:right">Amount</span></div>'+slice.map(function(r){
    var p=r[0].split(' · '),typ=p[0],ttl=p.slice(1).join(' · ')||'Wallet balance',m=r[1].split(' · '),dt=m[0],via=m.slice(1).join(' · ');
    var cls=/Release/.test(typ)?'rel':/refund/i.test(typ)?'ref':/top-up/i.test(typ)?'top':'hold';
    return '<div class="bf-row fh-row"><span class="fh-dt">'+esc(dt)+'</span><span class="bf-who"><span class="nm"><b>'+esc(ttl)+'</b><em>'+esc(via)+'</em></span></span><span><span class="fh-tag '+cls+'">'+esc(typ)+'</span></span><span class="fh-amt '+r[3]+'">'+(r[2]>0?'+':'\u2212')+money(Math.abs(r[2]))+'</span></div>';}).join('')+pager+'</div>';}

/* ---- modals ---- */
var mb=$('mb'),mdBody=$('mdBody');
function close(){mb.classList.remove('on');}
mb.addEventListener('click',function(e){if(e.target===mb)close();});
document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
function open(html){
  mdBody.innerHTML='<button class="md-x" type="button" aria-label="Close"><svg viewBox="0 0 24 24"><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg></button>'+html;
  mb.classList.add('on');mdBody.querySelector('.md-x').onclick=close;
}
function okModal(title,body){
  open('<div class="ok"><div class="ok-ic">'+check+'</div><h3 style="padding:0">'+title+'</h3><p class="md-sub" style="margin:8px 0 0">'+body+'</p>'
    +'<div class="md-act" style="justify-content:center"><button class="btn-black" type="button" id="okGo">Done</button></div></div>');
  $('okGo').onclick=close;
}

function fundModal(i){
  var x=NEED[i];if(!x)return;
  function split(a){
    var fee=Math.round(a*0.05),w=Math.min(wallet,a+fee);
    return '<div class="split"><div><span>Reward into escrow</span><b>'+money(a)+'</b></div>'
      +'<div><span>theColosseum fee (5%)</span><b>'+money(fee)+'</b></div>'
      +'<div><span>Wallet balance applied</span><b>\u2212'+money(w)+'</b></div>'
      +'<div class="tot"><span>Charged to Visa ···· 4242</span><b>'+money(Math.max(0,a+fee-w))+'</b></div></div>';
  }
  open('<h3>Fund this challenge</h3><p class="md-sub">'+esc(x.t)+' · '+esc(x.s)+'</p>'
    +'<span class="fl-lbl">'+esc(x.k)+'</span>'
    +'<div class="amt-in"><i>$</i><input id="fAmt" type="text" value="'+x.a.toLocaleString('en-US')+'" inputmode="numeric" /></div>'
    +'<div id="fSplit">'+split(x.a)+'</div>'
    +'<div class="md-note">'+lock+'Funds are held by theColosseum and shown to candidates as secured. Cancel any time before submissions open and it refunds in full.</div>'
    +'<div class="md-act"><button class="btn-black" type="button" id="fGo">Move to escrow</button><button class="btn-line" type="button" id="fNo">Cancel</button></div>');
  var inp=$('fAmt');
  inp.oninput=function(){$('fSplit').innerHTML=split(parseInt(inp.value.replace(/[^0-9]/g,''),10)||0);};
  $('fNo').onclick=close;
  $('fGo').onclick=function(){
    var v=parseInt(inp.value.replace(/[^0-9]/g,''),10)||0,fee=Math.round(v*0.05);
    wallet=Math.max(0,wallet-Math.min(wallet,v+fee));
    NEED.splice(i,1);
    ESC.push({t:x.t,s:x.s,a:v,k:x.k,st:1,fd:'today',v:'Funded today · can open to candidates'});
    fhPage=0;LED.unshift(['Escrow hold · '+x.t,'Today · Visa ···· 4242',-(v+fee),'neg']);
    if(stage===1)render();else goStage(1);ledger();
    okModal(money(v)+' is in escrow',esc(x.t)+' is funded. Candidates now see the reward as secured, and nothing moves until you confirm the result.');
  };
}

function relModal(i){
  var x=ESC[i];if(!x||!x.win)return;
  open('<h3>Release '+money(x.a)+'?</h3><p class="md-sub">You are confirming '+esc(x.win.n)+' as the winner of '+esc(x.t)+'.</p>'
    +'<div class="ec-win" style="margin:0"><img src="'+av(x.win.n)+'" alt="" /><span class="w-id"><b>'+esc(x.win.n)+'</b><span>'+esc(x.win.r)+'</span></span><span class="w-amt">'+money(x.a)+'</span></div>'
    +'<div class="split"><div><span>Released from escrow</span><b>'+money(x.a)+'</b></div>'
    +'<div><span>Paid to '+esc(x.win.n.split(' ')[0])+'</span><b>'+money(x.a)+'</b></div>'
    +'<div class="tot"><span>Remaining in escrow for this challenge</span><b>$0</b></div></div>'
    +'<div class="md-note">'+lock+'Release is final. If the submission does not meet the brief, open a dispute instead and the hold stays in place.</div>'
    +'<div class="md-act"><button class="btn-black" type="button" id="rGo">Confirm and release</button></div>');
  $('rGo').onclick=function(){
    released+=x.a;
    ESC.splice(i,1);
    HIST.unshift({t:x.t,d:'Bounty · today',w:x.win.n,wn:'Bounty paid in full',a:x.a,s:'Released'});
    fhPage=0;LED.unshift(['Release · '+x.t,'Today · to '+x.win.n,-x.a,'neg']);
    if(stage===3)render();else goStage(3);ledger();
    okModal(money(x.a)+' released',esc(x.win.n)+' has been paid and the challenge is closed. The result is now on their arena record.');
  };
}

function cancelModal(i){
  var x=ESC[i];if(!x)return;
  open('<h3>Cancel and refund '+money(x.a)+'?</h3><p class="md-sub">'+esc(x.t)+' · '+esc(x.s)+'</p>'
    +'<div class="split"><div><span>Returned to wallet</span><b>'+money(x.a)+'</b></div>'
    +'<div><span>Platform fee refunded</span><b>'+money(Math.round(x.a*0.05))+'</b></div>'
    +'<div class="tot"><span>New wallet balance</span><b>'+money(wallet+x.a+Math.round(x.a*0.05))+'</b></div></div>'
    +'<div class="md-note">'+lock+'Candidates already working on this brief are notified and the challenge closes. Refunds land within two business days.</div>'
    +'<div class="md-act"><button class="btn-black" type="button" id="cGo">Cancel challenge</button><button class="btn-line" type="button" id="cNo">Keep it live</button></div>');
  $('cNo').onclick=close;
  $('cGo').onclick=function(){
    var back=x.a+Math.round(x.a*0.05);
    wallet+=back;refunded+=x.a;
    ESC.splice(i,1);
    HIST.unshift({t:x.t,d:'Cancelled · today',w:'',wn:'Cancelled before judging',a:x.a,s:'Refunded'});
    fhPage=0;LED.unshift(['Refund · '+x.t,'Today · to wallet',back,'pos']);
    render();ledger();
    okModal(money(back)+' refunded','The challenge is closed and the reward, including the platform fee, is back in your wallet.');
  };
}

function receipt(k){
  var x=HIST[k];if(!x)return;
  open('<h3>'+(x.s==='Released'?'Payout receipt':'Refund receipt')+'</h3><p class="md-sub">'+esc(x.t)+' · '+esc(x.d)+'</p>'
    +'<div class="split"><div><span>'+(x.w?'Paid to':'Outcome')+'</span><b>'+esc(x.w||x.wn)+'</b></div>'
    +'<div><span>Amount</span><b>'+money(x.a)+'</b></div>'
    +'<div><span>Platform fee</span><b>'+money(Math.round(x.a*0.05))+'</b></div>'
    +'<div class="tot"><span>Status</span><b>'+esc(x.s)+'</b></div></div>'
    +'<div class="md-act"><button class="btn-black" type="button" id="dl">Download PDF</button><button class="btn-line" type="button" id="rcNo">Close</button></div>');
  $('rcNo').onclick=close;$('dl').onclick=close;
}

function disputeModal(i){
  var x=ESC[i];if(!x||!x.win)return;
  open('<h3>Open a dispute</h3><p class="md-sub">'+esc(x.t)+' · '+esc(x.win.n)+' · '+money(x.a)+'</p>'
    +'<span class="fl-lbl">What does the submission miss?</span>'
    +'<textarea id="dTx" rows="4" placeholder="Point to the parts of the brief it does not meet" style="width:100%;box-sizing:border-box;font:inherit;font-size:14px;line-height:1.55;color:var(--ink2);background:var(--field);border:1px solid var(--line);border-radius:14px;padding:12px 14px;resize:vertical;outline:none;margin-top:7px"></textarea>'
    +'<div class="md-note">'+lock+'The reward stays in escrow while theColosseum reviews. Disputes go to review within two business days.</div>'
    +'<div class="md-act"><button class="btn-black" type="button" id="dGo">Submit dispute</button><button class="btn-line" type="button" id="dNo">Cancel</button></div>');
  $('dNo').onclick=close;
  $('dGo').onclick=function(){
    var tx=$('dTx');if(!tx.value.trim()){tx.style.borderColor='oklch(0.6 0.13 25)';tx.focus();return;}
    x.v='In dispute · under review';delete x.win;render();
    okModal('Dispute opened',esc(x.t)+' is under review. The '+money(x.a)+' stays in escrow until it is resolved.');
  };
}

function topUpModal(){
  open('<h3>Add funds to wallet</h3><p class="md-sub">Wallet funds sit outside escrow. Use them to fund challenges instantly without a card charge each time.</p>'
    +'<span class="fl-lbl">Amount</span>'
    +'<div class="amt-in"><i>$</i><input id="tAmt" type="text" value="2,000" inputmode="numeric" /></div>'
    +'<div class="split"><div><span>Current balance</span><b>'+money(wallet)+'</b></div><div class="tot"><span>New balance</span><b id="tNew">'+money(wallet+2000)+'</b></div></div>'
    +'<span class="fl-lbl" style="margin:20px 0 7px">Funding method</span>'
    +'<div class="md-pm"><span class="pm-ic">VISA</span><span class="md-pm-id"><b>Visa ···· 4242</b><span>NimbusLab GmbH · exp 09/28</span></span><button class="btn-line" type="button" id="tPm">Change</button></div>'
    +'<span class="fl-lbl" style="margin:20px 0 7px">Escrow terms</span>'
    +'<div class="md-terms"><p>Platform fee is 5% of the reward, charged when you fund. It is refunded in full if a challenge closes with no qualifying submission.</p>'
    +'<p>A confirmed result left unreleased for 14 days is released to the winner automatically.</p>'
    +'<p>Disputes pause the release and go to review within two business days.</p></div>'
    +'<div class="md-act"><button class="btn-black" type="button" id="tGo">Add funds</button><button class="btn-line" type="button" id="tNo">Cancel</button></div>');
  $('tPm').onclick=function(){};
  var inp=$('tAmt');
  inp.oninput=function(){$('tNew').textContent=money(wallet+(parseInt(inp.value.replace(/[^0-9]/g,''),10)||0));};
  $('tNo').onclick=close;
  $('tGo').onclick=function(){
    var v=parseInt(inp.value.replace(/[^0-9]/g,''),10)||0;
    wallet+=v;fhPage=0;LED.unshift(['Wallet top-up','Today · Visa ···· 4242',v,'pos']);
    render();ledger();close();
  };
}

/* ---- events ---- */
document.addEventListener('click',function(e){
  var t=e.target;if(!t.closest)return;
  var m=t.closest('[data-s]');if(m){goStage(+m.getAttribute('data-s'));return;}
  var f=t.closest('[data-fund]');if(f){fundModal(+f.getAttribute('data-fund'));return;}
  var r=t.closest('[data-rel]');if(r){relModal(+r.getAttribute('data-rel'));return;}
  var dp=t.closest('[data-dispute]');if(dp){disputeModal(+dp.getAttribute('data-dispute'));return;}
  var c=t.closest('[data-cancel]');if(c){cancelModal(+c.getAttribute('data-cancel'));return;}
  var fp=t.closest('[data-fhp]');if(fp&&!fp.disabled){fhPage=+fp.getAttribute('data-fhp');ledger();return;}
  var rc=t.closest('[data-rcpt]');if(rc){receipt(+rc.getAttribute('data-rcpt'));return;}
  var sc=t.closest('.bf-stat');if(sc){statOpen=!sc.classList.contains('on');sc.classList.toggle('on',statOpen);sc.setAttribute('aria-expanded',statOpen);return;}
});
document.addEventListener('keydown',function(e){
  if(e.key!=='Enter'&&e.key!==' ')return;
  var a=document.activeElement;if(a&&(a.classList.contains('bf-mini')||a.classList.contains('bf-stat'))){e.preventDefault();a.click();}
});
$('topUp').addEventListener('click',topUpModal);

var u=$('appUser'),ub=u.querySelector('.app-user-btn');
ub.addEventListener('click',function(e){e.stopPropagation();u.classList.toggle('open');});
document.addEventListener('click',function(e){if(!u.contains(e.target))u.classList.remove('open');});

render();ledger();
})();
