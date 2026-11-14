(function(){
var D=window.ADM,NOW=Date.now();
var $=function(id){return document.getElementById(id);};
var esc=function(s){return String(s==null?'':s).replace(/[&<>"]/g,function(x){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[x];});};
var fmt=function(n){return Math.round(n).toLocaleString('en-US');};
var usd=function(n){return '$'+fmt(n);};
function ago(t){var m=Math.round((Date.now()-t)/6e4);if(m<1)return 'Just now';if(m<60)return m+'m ago';var h=Math.round(m/60);if(h<24)return h+'h ago';var d=Math.round(h/24);if(d<31)return d+'d ago';return day(t);}
function day(t){return new Date(t).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'});}
function due(t){var h=Math.round((t-Date.now())/36e5);if(h<0)return ['late','Overdue '+(-h<24?-h+'h':Math.round(-h/24)+'d')];return [h<24?'soon':'','in '+(h<24?h+'h':Math.round(h/24)+'d')];}
var initials=function(n){return n.split(/\s+/).map(function(w){return w[0];}).slice(0,2).join('').toUpperCase();};
var cap=function(s){return s.charAt(0).toUpperCase()+s.slice(1);};
var ICX='<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"></path></svg>';
var ICF='<svg viewBox="0 0 24 24"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="14 3 14 9 20 9"></polyline></svg>';
var S={view:'overview',per:30,cq:'',cst:'',ctier:'',kq:'',kst:'',tst:'open',tsel:null,dst:'open',mode:'reply',dr:null,cp:0,kp:0,ap:0,aq:'',acat:'',aper:30,aopen:null,dpick:null,split:50};
var CST={active:['ok','Active'],flagged:['warn','Flagged'],suspended:['bad','Suspended'],unverified:['','Unverified'],deleted:['bad','Deletion scheduled']};
var KST={verified:['ok','Verified'],pending:['info','Pending review'],frozen:['warn','Escrow frozen'],suspended:['bad','Suspended']};
var DST={open:['warn','Open'],review:['info','In review'],resolved:['ok','Resolved']};
var st=function(m,k){var s=m[k]||['',k];return '<span class="st '+s[0]+'">'+esc(s[1])+'</span>';};
var PRI={urgent:0,high:1,normal:2,low:3};
function toast(s){var t=$('toast');t.textContent=s;t.classList.add('on');clearTimeout(toast.h);toast.h=setTimeout(function(){t.classList.remove('on');},2600);}
function seg(el,key,opts,cb){
  el.innerHTML=opts.map(function(o){return '<button type="button" data-v="'+o[0]+'"'+(S[key]===o[0]?' class="on"':'')+'>'+esc(o[1])+(o[2]!=null?' <em>'+o[2]+'</em>':'')+'</button>';}).join('');
  el.onclick=function(e){var b=e.target.closest('button');if(!b)return;S[key]=b.getAttribute('data-v');S.cp=S.kp=S.ap=0;cb();};
}
function download(name,text,type){var a=document.createElement('a');a.href=URL.createObjectURL(new Blob([text],{type:type}));a.download=name;document.body.appendChild(a);a.click();a.remove();}
function csv(cols,rows){var q=function(v){v=String(v==null?'':v);return /[",\n]/.test(v)?'"'+v.replace(/"/g,'""')+'"':v;};return [cols.join(',')].concat(rows.map(function(r){return r.map(q).join(',');})).join('\n');}

/* ---------- overview ---------- */
var KPI={
 7:[['Active candidates',8920,'+2.4%',1],['Active companies',312,'+1.1%',1],['Live challenges',214,'+6',1],['Held in escrow',482300,'+3.9%',1,1],['Released',24600,'+12%',1,1],['First response',' 1h 52m','−18m',1]],
 30:[['Active candidates',12480,'+6.2%',1],['Active companies',386,'+3.1%',1],['Live challenges',214,'+19',1],['Held in escrow',482300,'+8.4%',1,1],['Released',96750,'+11%',1,1],['First response','2h 14m','+21m',0]],
 90:[['Active candidates',19310,'+18.4%',1],['Active companies',512,'+9.6%',1],['Live challenges',214,'+44',1],['Held in escrow',482300,'+22%',1,1],['Released',271400,'+31%',1,1],['First response','2h 31m','−40m',1]]};
var FN=[['Applications',18420],['Passed AI screen',7960],['Challenge submitted',4310],['AI interview',1920],['Finalist',640],['Hired or paid',212]];
var FU=[['AI interviews conducted',1920],['Screening reports generated',2486],['Challenges drafted with AI',642],['Challenges published',238],['Escrow funded',512400,1],['Candidate ratings posted',318]];
var FUD={7:['+4%','+2%','+9%','−3%','+1%','+6%'],30:['+14%','+9%','+21%','+6%','+4%','−3%'],90:['+38%','+27%','+52%','+18%','+22%','+11%']};
var MUL={7:.24,30:1,90:2.85};
var DAYMS=864e5,TODAY=new Date(NOW);TODAY.setHours(0,0,0,0);TODAY=TODAY.getTime();var MINDAY=TODAY-89*DAYMS;
var sd=function(t){return new Date(t).toLocaleDateString('en-GB',{day:'numeric',month:'short'});};
var ICC='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5" width="17" height="15.5" rx="2.5"></rect><path d="M3.5 10h17M8 3v4M16 3v4"></path></svg>';
function renderOverview(){
  var el=$('oPer');
  el.innerHTML=[['7','7 days'],['30','30 days'],['90','90 days']].map(function(o){return '<button type="button" data-v="'+o[0]+'"'+(!S.range&&S.per===+o[0]?' class="on"':'')+'>'+o[1]+'</button>';}).join('')+'<button type="button" data-v="custom" class="cust'+(S.range?' on':'')+'">'+ICC+(S.range?sd(S.range.a)+' – '+sd(S.range.b):'Custom')+'</button>';
  el.onclick=function(e){var b=e.target.closest('button');if(!b)return;var v=b.getAttribute('data-v');if(v==='custom'){CAL.open&&CAL.t==='o'?calClose():calOpen('o');return;}S.range=null;S.per=+v;calClose();renderOverview();};
  var n=S.range?Math.round((S.range.b-S.range.a)/DAYMS)+1:S.per,endT=S.range?S.range.b:TODAY,p=n<=14?7:n<=60?30:90;
  $('kpis').innerHTML=KPI[p].map(function(k){var neg=k[2].charAt(0)==='−'||k[2].charAt(0)==='-';var cls=k[3]?(k[0]==='First response'?'up':neg?'dn':'up'):'dn';
    return '<div class="kpi"><span class="k">'+k[0]+'</span><span class="v">'+(typeof k[1]==='number'?(k[4]?usd(k[1]):fmt(k[1])):k[1].trim())+'</span><span class="d '+cls+'">'+k[2]+' <span style="color:var(--t-faint);font-weight:500">vs prior</span></span></div>';}).join('');
  var L=D.usage.cand.length,ei=L-Math.round((TODAY-endT)/DAYMS);chart($('chDau'),D.usage.cand.slice(ei-n,ei),D.usage.co.slice(ei-n,ei),endT);
  var m=S.range?n/30:MUL[p],top=FN[0][1]*m;
  $('fnLbl').textContent=S.range?sd(S.range.a)+' – '+sd(S.range.b):'Last '+n+' days';
  $('fn').innerHTML=FN.map(function(f,i){var v=f[1]*m;return '<div class="fn-r"><span>'+f[0]+'</span><span class="b"><i style="width:'+(v/top*100).toFixed(1)+'%"></i></span><b>'+fmt(v)+'</b><em>'+(i?Math.round(f[1]/FN[i-1][1]*100)+'%':'')+'</em></div>';}).join('');
  $('fu').innerHTML=FU.map(function(f,i){var d=FUD[p][i];return '<tr><td>'+f[0]+'</td><td>'+(f[2]?usd(f[1]*m):fmt(f[1]*m))+'</td><td'+(d.charAt(0)==='−'?' class="dn"':'')+'>'+d+'</td></tr>';}).join('');
  renderAttention();
}
function renderAttention(){
  var it=[];
  D.tickets.filter(function(t){return t.status==='open'&&(t.pri==='urgent'||(t.pri==='high'&&!t.asg));}).sort(function(a,b){return PRI[a.pri]-PRI[b.pri]||a.created-b.created;}).forEach(function(t){
    it.push(['#support/'+t.id,t.pri==='urgent'?'r':'a','<b>'+cap(t.pri)+' ticket</b> · '+esc(t.subj)+(t.asg?'':' · unassigned'),ago(t.created)]);});
  D.disputes.filter(function(d){return d.status!=='resolved'&&d.due-Date.now()<36*36e5;}).forEach(function(d){var u=due(d.due);
    it.push(['#disputes/'+d.id,'r','<b>'+d.id+' decision due</b> · '+esc(d.type)+', '+esc(d.co),u[1]]);});
  var fl=D.candidates.filter(function(c){return c.status==='flagged';}).length;
  if(fl)it.push(['#candidates/~flagged','a','<b>'+fl+' candidate'+(fl>1?'s':'')+' flagged</b> for human review','']);
  var pd=D.companies.filter(function(c){return c.status==='pending';}).length;
  if(pd)it.push(['#companies/~pending','','<b>'+pd+' compan'+(pd>1?'ies':'y')+'</b> awaiting verification','']);
  $('att').innerHTML=it.length?it.slice(0,7).map(function(x){return '<a href="'+x[0]+'"><i class="'+x[1]+'"></i><span>'+x[2]+'</span><em>'+x[3]+'</em></a>';}).join(''):'<div class="empty">Nothing waiting on the team.</div>';
}
function niceCeil(v){var p=Math.pow(10,Math.floor(Math.log10(v)));var s=[1,1.2,1.6,2,2.4,3,4,5,6,8,10].filter(function(k){return k*p>=v;})[0];return s*p;}
var CH=null;
function chart(el,A,B,END){
  CH=[el,A,B,END];var W=Math.max(320,Math.round(el.clientWidth||640)),H=Math.max(200,Math.round(el.clientHeight||240)),l=42,r=34,t=10,b=26,w=W-l-r,h=H-t-b,n=A.length;
  var ma=niceCeil(Math.max.apply(null,A)*1.08),mb=niceCeil(Math.max.apply(null,B)*1.08);
  var x=function(i){return l+i*w/(n-1);},ya=function(v){return t+h-v/ma*h;},yb=function(v){return t+h-v/mb*h;};
  var g='';for(var k=0;k<=4;k++){var yy=t+h-k*h/4;g+='<line x1="'+l+'" x2="'+(W-r)+'" y1="'+yy+'" y2="'+yy+'" stroke="#eceae5"></line><text x="'+(l-8)+'" y="'+(yy+3.5)+'" text-anchor="end">'+fmtK(ma*k/4)+'</text><text x="'+(W-r+8)+'" y="'+(yy+3.5)+'" style="fill:#5a5c5a">'+fmtK(mb*k/4)+'</text>';}
  var pa=A.map(function(v,i){return (i?'L':'M')+x(i).toFixed(1)+' '+ya(v).toFixed(1);}).join(''),pb=B.map(function(v,i){return (i?'L':'M')+x(i).toFixed(1)+' '+yb(v).toFixed(1);}).join('');
  var xl='',steps=n<=7?n-1:4;for(var j=0;j<=steps;j++){var i=Math.round(j*(n-1)/steps),d=new Date(END-(n-1-i)*864e5);xl+='<text x="'+x(i)+'" y="'+(H-6)+'" text-anchor="'+(j===0?'start':j===steps?'end':'middle')+'">'+d.toLocaleDateString('en-GB',{day:'numeric',month:'short'})+'</text>';}
  el.innerHTML='<svg viewBox="0 0 '+W+' '+H+'" role="img" aria-label="Daily active users">'+g+xl+'<path d="'+pa+'L'+x(n-1)+' '+(t+h)+'L'+l+' '+(t+h)+'Z" fill="rgba(103,141,198,.09)"></path><path d="'+pa+'" fill="none" stroke="#678DC6" stroke-width="2" stroke-linejoin="round"></path><path d="'+pb+'" fill="none" stroke="#1c1d1c" stroke-width="1.6" stroke-linejoin="round"></path><g id="hov" style="display:none"><line y1="'+t+'" y2="'+(t+h)+'" stroke="#1c1d1c" stroke-opacity=".25"></line><circle r="4" fill="#678DC6" stroke="#fff" stroke-width="2"></circle><circle r="4" fill="#1c1d1c" stroke="#fff" stroke-width="2"></circle></g><rect x="'+l+'" y="'+t+'" width="'+w+'" height="'+h+'" fill="transparent"></rect></svg><div class="tip"></div>';
  var svg=el.querySelector('svg'),hov=svg.querySelector('#hov'),tip=el.querySelector('.tip');
  svg.onmousemove=function(e){var rc=svg.getBoundingClientRect(),sx=(e.clientX-rc.left)/rc.width*W,i=Math.max(0,Math.min(n-1,Math.round((sx-l)/w*(n-1))));
    var X=x(i),ln=hov.children;hov.style.display='';ln[0].setAttribute('x1',X);ln[0].setAttribute('x2',X);ln[1].setAttribute('cx',X);ln[1].setAttribute('cy',ya(A[i]));ln[2].setAttribute('cx',X);ln[2].setAttribute('cy',yb(B[i]));
    var d=new Date(END-(n-1-i)*864e5);tip.style.display='block';tip.style.left=Math.max(80,Math.min(rc.width-80,X/W*rc.width))+'px';tip.style.top='-6px';
    tip.innerHTML='<span>'+d.toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'short'})+'</span><br><b>'+fmt(A[i])+'</b> candidates · <b>'+fmt(B[i])+'</b> company members';};
  svg.onmouseleave=function(){hov.style.display='none';tip.style.display='none';};
}
/* range calendar */
var CAL={open:false,a:null,b:null,hov:null,m:null,t:null,min:MINDAY};
function mStart(t){var d=new Date(t);return new Date(d.getFullYear(),d.getMonth(),1).getTime();}
function addM(t,k){var d=new Date(t);return new Date(d.getFullYear(),d.getMonth()+k,1).getTime();}
var TG={o:{cal:'cal',wrap:'oRng',min:MINDAY,note:'Usage data is kept for the last 90 days.',get:function(){return S.range||{a:TODAY-(S.per-1)*DAYMS,b:TODAY};},apply:function(r){S.range=r;renderOverview();}},
 a:{cal:'aCal',wrap:'aRng',min:TODAY-179*DAYMS,note:'Activity is searchable for the last 180 days. Older entries are in the CSV archive.',get:function(){return S.arange||{a:TODAY-((S.aper||30)-1)*DAYMS,b:TODAY};},apply:function(r){S.arange=r;S.ap=0;renderActivity();}}};
function calOpen(t){if(CAL.open)calClose();var g=TG[t],r=g.get();CAL.t=t;CAL.min=g.min;CAL.open=true;CAL.a=Math.max(r.a,g.min);CAL.b=r.b;CAL.hov=null;CAL.m=addM(mStart(CAL.b),-1);if(CAL.m<mStart(CAL.min))CAL.m=mStart(CAL.min);drawCal();var el=$(g.cal);el.style.left='';el.style.right='';el.classList.add('on');var rc=el.getBoundingClientRect();if(rc.left<8&&innerWidth>860){el.style.right='auto';el.style.left='0';}}
function calClose(){if(!CAL.t)return;CAL.open=false;$(TG[CAL.t].cal).classList.remove('on');}
var PRE=[['Last 7 days',7],['Last 14 days',14],['Last 30 days',30],['This month','tm'],['Last month','lm'],['Last 90 days',90]];
function preRange(v){if(v==='tm')return [Math.max(CAL.min,mStart(TODAY)),TODAY];if(v==='lm'){var s=addM(mStart(TODAY),-1);return [Math.max(CAL.min,s),mStart(TODAY)-DAYMS];}return [TODAY-(v-1)*DAYMS,TODAY];}
function month(ms){
  var d=new Date(ms),y=d.getFullYear(),mo=d.getMonth(),first=(new Date(y,mo,1).getDay()+6)%7,days=new Date(y,mo+1,0).getDate(),h='';
  var lo=CAL.a,hi=CAL.b||(CAL.hov&&CAL.a?CAL.hov:null);if(hi!=null&&hi<lo){var x=lo;lo=hi;hi=x;}
  for(var i=0;i<first;i++)h+='<span></span>';
  for(var k=1;k<=days;k++){var t=new Date(y,mo,k).getTime(),dis=t<CAL.min||t>TODAY,c=[];
    if(dis)c.push('dis');if(t===TODAY)c.push('today');
    if(lo!=null&&hi!=null&&t>=lo&&t<=hi){c.push('in');if(t===lo)c.push('s');if(t===hi)c.push('e');}else if(t===CAL.a)c.push('s','e');
    h+='<button type="button" data-t="'+t+'"'+(c.length?' class="'+c.join(' ')+'"':'')+(dis?' disabled':'')+'><i>'+k+'</i></button>';}
  return '<div class="cal-m"><div class="cal-t">'+d.toLocaleDateString('en-GB',{month:'long',year:'numeric'})+'</div><div class="cal-w"><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span><span>Su</span></div><div class="cal-g">'+h+'</div></div>';
}
function drawCal(){
  var n=CAL.a&&CAL.b?Math.round((CAL.b-CAL.a)/DAYMS)+1:0,canPrev=CAL.m>mStart(CAL.min),canNext=addM(CAL.m,1)<mStart(TODAY);
  var pk=PRE.map(function(p){var r=preRange(p[1]);return '<button type="button" data-p="'+p[1]+'"'+(CAL.a===r[0]&&CAL.b===r[1]?' class="on"':'')+'>'+p[0]+'</button>';}).join('');
  $(TG[CAL.t].cal).innerHTML='<div class="cal-pre">'+pk+'</div><div class="cal-main"><div class="cal-nav"><button type="button" class="cal-ar" data-n="-1"'+(canPrev?'':' disabled')+' aria-label="Previous month"><svg viewBox="0 0 24 24"><polyline points="15 6 9 12 15 18"></polyline></svg></button><button type="button" class="cal-ar" data-n="1"'+(canNext?'':' disabled')+' aria-label="Next month"><svg viewBox="0 0 24 24"><polyline points="9 6 15 12 9 18"></polyline></svg></button></div><div class="cal-ms">'+month(CAL.m)+month(addM(CAL.m,1))+'</div>'
  +'<div class="cal-f"><div class="cal-sel"><span class="'+(CAL.a?'':'ph')+'">'+(CAL.a?sd(CAL.a)+' '+new Date(CAL.a).getFullYear():'Start date')+'</span><svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"></path></svg><span class="'+(CAL.b?'':'ph')+'">'+(CAL.b?sd(CAL.b)+' '+new Date(CAL.b).getFullYear():'End date')+'</span>'+(n?'<em>'+n+' days</em>':'')+'</div><span class="sp"></span><button type="button" class="btn-line" data-c="x">Cancel</button><button type="button" class="btn-black" data-c="ok"'+(n>=2?'':' disabled')+'>Apply</button></div><div class="cal-note">'+TG[CAL.t].note+'</div></div>';
}
function calClick(e){
  e.stopPropagation();
  var p=e.target.closest('[data-p]');if(p){var v=p.getAttribute('data-p'),r=preRange(isNaN(+v)?v:+v);CAL.a=r[0];CAL.b=r[1];CAL.m=addM(mStart(CAL.b),-1);if(CAL.m<mStart(CAL.min))CAL.m=mStart(CAL.min);drawCal();return;}
  var nv=e.target.closest('[data-n]');if(nv&&!nv.disabled){CAL.m=addM(CAL.m,+nv.getAttribute('data-n'));drawCal();return;}
  var d=e.target.closest('[data-t]');if(d&&!d.disabled){var t=+d.getAttribute('data-t');if(!CAL.a||CAL.b){CAL.a=t;CAL.b=null;}else if(t<CAL.a){CAL.b=CAL.a;CAL.a=t;}else CAL.b=t;CAL.hov=null;drawCal();return;}
  var c=e.target.closest('[data-c]');if(!c||c.disabled)return;
  var ok=c.getAttribute('data-c')==='ok',tg=CAL.t;calClose();if(ok)TG[tg].apply({a:CAL.a,b:CAL.b});
}
function calHover(e){if(!CAL.a||CAL.b)return;var d=e.target.closest('[data-t]');var t=d&&!d.disabled?+d.getAttribute('data-t'):null;if(t!==CAL.hov){CAL.hov=t;drawCal();}}
['cal','aCal'].forEach(function(id){$(id).addEventListener('click',calClick);$(id).addEventListener('mouseover',calHover);});
document.addEventListener('click',function(e){if(CAL.open&&!e.target.closest('#'+TG[CAL.t].wrap))calClose();});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&CAL.open)calClose();});
if(window.ResizeObserver){var chRO=new ResizeObserver(function(){if(CH&&S.view==='overview'){var r=CH[0].getBoundingClientRect(),k=Math.round(r.width)+'x'+Math.round(r.height);if(k!==CH.k){var a=CH;chart(a[0],a[1],a[2],a[3]);CH.k=k;}}});chRO.observe($('chDau'));}
function fmtK(v){return v>=1000?(v/1000).toFixed(v%1000?1:0)+'k':Math.round(v);}

/* ---------- candidates ---------- */
function cRows(){var q=S.cq.toLowerCase();return D.candidates.filter(function(c){return (!S.cst||c.status===S.cst)&&(!S.ctier||c.tier===S.ctier)&&(!q||(c.name+' '+c.email+' '+c.id).toLowerCase().indexOf(q)>=0);});}
function cnt(arr,k,v){return arr.filter(function(x){return x[k]===v;}).length;}
function renderCandidates(){
  var C=D.candidates;
  seg($('cSt'),'cst',[['','All',C.length],['active','Active',cnt(C,'status','active')],['flagged','Flagged',cnt(C,'status','flagged')],['suspended','Suspended',cnt(C,'status','suspended')+cnt(C,'status','deleted')],['unverified','Unverified',cnt(C,'status','unverified')]],renderCandidates);
  $('cTier').querySelectorAll('button').forEach(function(b){b.classList.toggle('on',b.getAttribute('data-v')===S.ctier);});
  var rows=cRows();if(S.cst==='suspended')rows=D.candidates.filter(function(c){return c.status==='suspended'||c.status==='deleted';}).filter(function(c){return cRowsMatch(c);});
  $('cCnt').innerHTML='<b>'+rows.length+'</b> candidate'+(rows.length===1?'':'s');
  var pr=page(rows,'cp');$('cBody').innerHTML=pr.map(function(c){return '<tr data-id="'+c.id+'"'+(S.dr&&S.dr.id===c.id?' class="sel"':'')+'><td><div class="who"><img src="https://i.pravatar.cc/80?u='+encodeURIComponent(c.email)+'" alt="" /><span><b>'+esc(c.name)+'</b><em>'+esc(c.email)+'</em></span></div></td><td><span class="medal '+c.tier+'">'+c.tier+'</span></td><td class="hide-sm"><span class="bar-mini"><i><u style="width:'+c.prof+'%"></u></i>'+c.prof+'%</span></td><td class="num hide-md">'+c.apps+'</td><td class="num hide-sm">'+(c.earned?usd(c.earned):'—')+'</td><td class="hide-md">'+ago(c.last)+'</td><td>'+st(CST,c.status)+'</td></tr>';}).join('')||'<tr><td colspan="7"><div class="empty">No candidates match these filters.</div></td></tr>';
  pager($('cPg'),rows.length,'cp',renderCandidates,$('cBody'));
}
function cRowsMatch(c){var q=S.cq.toLowerCase();return (!S.ctier||c.tier===S.ctier)&&(!q||(c.name+' '+c.email+' '+c.id).toLowerCase().indexOf(q)>=0);}
$('cQ').addEventListener('input',function(e){S.cq=e.target.value.trim();S.cp=0;renderCandidates();});
$('cTier').addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;S.ctier=b.getAttribute('data-v');S.cp=0;renderCandidates();});
$('cBody').addEventListener('click',function(e){var r=e.target.closest('tr[data-id]');if(r)openDr('cand',r.getAttribute('data-id'));});
function candHTML(c){
  var fl='';
  if(c.status==='flagged')fl='<div class="flag"><b>Flagged for review</b>'+esc(c.flag)+'<div class="acts"><button class="btn-line" data-act="clear">Clear flag</button><button class="btn-line danger" data-act="suspend">Suspend account</button></div></div>';
  else if(c.status==='suspended'||c.status==='deleted')fl='<div class="flag bad"><b>'+(c.status==='deleted'?'Deletion scheduled':'Suspended')+'</b>'+esc(c.flag)+'<div class="acts"><button class="btn-line" data-act="reinstate">'+(c.status==='deleted'?'Withdraw deletion':'Reinstate')+'</button></div></div>';
  else if(c.status==='unverified')fl='<div class="flag info"><b>Email not verified</b>Signed up '+ago(c.joined)+'. Profile is hidden from companies until the email is confirmed.<div class="acts"><button class="btn-line" data-act="resend">Resend verification</button></div></div>';
  return '<div class="dr-h"><img src="https://i.pravatar.cc/120?u='+encodeURIComponent(c.email)+'" alt="" /><div class="t"><h2>'+esc(c.name)+'</h2><p>'+esc(c.email)+' · '+esc(c.loc)+'</p><div class="chips"><span class="st plain"><span class="medal '+c.tier+'">'+c.tier+' tier</span></span>'+st(CST,c.status)+'</div></div><button class="x" data-act="close" aria-label="Close">'+ICX+'</button></div>'
  +'<div class="dr-b">'+fl
  +'<div class="ms"><div><span>Applications</span><b>'+c.apps+'</b></div><div><span>Wins</span><b>'+c.wins+'</b></div><div><span>Earned</span><b>'+(c.earned?usd(c.earned):'$0')+'</b></div><div><span>Rank</span><b>'+(c.apps?'#'+fmt(c.rank):'—')+'</b></div></div>'
  +'<div class="kv"><div><span>Candidate ID</span><b class="mono">'+c.id+'</b></div><div><span>Joined</span><b>'+day(c.joined)+'</b></div><div><span>Track</span><b>'+esc(c.role)+'</b></div><div><span>Last active</span><b>'+ago(c.last)+'</b></div><div><span>Profile completeness</span><b>'+c.prof+'%</b></div><div><span>Soft-skill baseline</span><b>'+(c.status==='unverified'?'Not taken':c.soft+'%')+'</b></div></div>'
  +'<div class="grp"><span class="sec-t">Linked sources</span><div class="srcs">'+c.src.map(function(s){return '<span>'+s+'</span>';}).join('')+'</div></div>'
  +noteHTML(c)+'</div>'
  +'<div class="dr-f"><button class="btn-line" data-act="export">'+ICF+'Export data</button>'+(c.status==='active'||c.status==='flagged'?'<button class="btn-line" data-act="suspend">Suspend</button>':'')+'<span class="sp"></span>'+(c.status!=='deleted'?'<button class="btn-line danger" data-act="delete">Delete account and data</button>':'')+'</div>';
}
function noteHTML(o){return '<div class="grp"><div class="grp-h"><span class="sec-t">Internal note</span><button class="btn-line" data-act="note" style="padding:6px 13px;font-size:12px">Save note</button></div><textarea class="ta" id="drNote" placeholder="Visible to the Colosseum team only">'+esc(o.note)+'</textarea></div>';}

/* ---------- companies ---------- */
function kRows(){var q=S.kq.toLowerCase();return D.companies.filter(function(c){return (!S.kst||c.status===S.kst)&&(!q||(c.name+' '+c.domain+' '+c.id).toLowerCase().indexOf(q)>=0);});}
var logo=function(c,cls){return c.logo?'<img class="sq" src="'+c.logo+'" alt="" />':'<span class="mono">'+initials(c.name)+'</span>';};
function renderCompanies(){
  var C=D.companies;
  seg($('kSt'),'kst',[['','All',C.length],['verified','Verified',cnt(C,'status','verified')],['pending','Pending',cnt(C,'status','pending')],['frozen','Frozen',cnt(C,'status','frozen')],['suspended','Suspended',cnt(C,'status','suspended')]],renderCompanies);
  var rows=kRows(),held=rows.reduce(function(a,c){return a+c.held;},0);
  $('kCnt').innerHTML='<b>'+rows.length+'</b> compan'+(rows.length===1?'y':'ies');
  $('kSum').textContent=usd(held)+' held in escrow across these accounts';
  var pr=page(rows,'kp');$('kBody').innerHTML=pr.map(function(c){return '<tr data-id="'+c.id+'"'+(S.dr&&S.dr.id===c.id?' class="sel"':'')+'><td><div class="who">'+logo(c)+'<span><b>'+esc(c.name)+'</b><em>'+esc(c.domain)+'</em></span></div></td><td class="num hide-sm">'+c.live+'</td><td class="num">'+(c.held?usd(c.held):'—')+'</td><td class="num hide-md">'+(c.released?usd(c.released):'—')+'</td><td class="num hide-md">'+c.hires+'</td><td class="hide-sm">'+(c.reviews?'<b style="color:var(--ink2)">'+c.rating.toFixed(1)+'</b> <span style="color:var(--t-faint)">('+c.reviews+')</span>':'—')+'</td><td>'+st(KST,c.status)+'</td></tr>';}).join('')||'<tr><td colspan="7"><div class="empty">No companies match these filters.</div></td></tr>';
  pager($('kPg'),rows.length,'kp',renderCompanies,$('kBody'));
}
$('kQ').addEventListener('input',function(e){S.kq=e.target.value.trim();S.kp=0;renderCompanies();});
$('kBody').addEventListener('click',function(e){var r=e.target.closest('tr[data-id]');if(r)openDr('co',r.getAttribute('data-id'));});
function coHTML(c){
  var fl='';
  if(c.status==='pending')fl='<div class="flag info"><b>Verification</b>'+esc(c.flag)+' Challenges stay in draft until the company is verified.<div class="acts"><button class="btn-black" data-act="verify" style="padding:9px 16px;font-size:13px">Verify company</button><button class="btn-line danger" data-act="reject">Reject</button></div></div>';
  else if(c.status==='frozen')fl='<div class="flag"><b>Escrow frozen</b>'+esc(c.flag)+' No releases or withdrawals can be made.<div class="acts"><button class="btn-line" data-act="unfreeze">Unfreeze escrow</button></div></div>';
  else if(c.status==='suspended')fl='<div class="flag bad"><b>Suspended</b>'+esc(c.flag)+'<div class="acts"><button class="btn-line" data-act="reinstate">Reinstate</button></div></div>';
  var dis=D.disputes.filter(function(d){return d.co===c.name;});
  return '<div class="dr-h">'+logo(c)+'<div class="t"><h2>'+esc(c.name)+'</h2><p>'+esc(c.domain)+' · '+esc(c.hq)+'</p><div class="chips">'+st(KST,c.status)+'</div></div><button class="x" data-act="close" aria-label="Close">'+ICX+'</button></div>'
  +'<div class="dr-b">'+fl
  +'<div class="grp"><span class="sec-t">Escrow</span><div class="ms three"><div><span>Held</span><b>'+usd(c.held)+'</b></div><div><span>Awaiting release</span><b>'+usd(c.due)+'</b></div><div><span>Released</span><b>'+usd(c.released)+'</b></div></div></div>'
  +'<div class="ms"><div><span>Live</span><b>'+c.live+'</b></div><div><span>All challenges</span><b>'+c.total+'</b></div><div><span>Hires</span><b>'+c.hires+'</b></div><div><span>Rating</span><b>'+(c.reviews?c.rating.toFixed(1):'—')+'</b></div></div>'
  +'<div class="kv"><div><span>Company ID</span><b class="mono">'+c.id+'</b></div><div><span>Joined</span><b>'+day(c.joined)+'</b></div><div><span>Account owner</span><b>'+esc(c.owner)+'</b></div><div><span>Seats</span><b>'+c.seats+' members</b></div><div><span>Team size</span><b>'+c.size+'</b></div><div><span>Last active</span><b>'+ago(c.last)+'</b></div></div>'
  +(dis.length?'<div class="grp"><span class="sec-t">Disputes</span><div class="evd">'+dis.map(function(d){return '<a href="#disputes/'+d.id+'">'+esc(d.id+' · '+d.type)+'<span style="margin-left:auto">'+st(DST,d.status)+'</span></a>';}).join('')+'</div></div>':'')
  +noteHTML(c)+'</div>'
  +'<div class="dr-f"><button class="btn-line" data-act="export">'+ICF+'Export data</button>'+(c.status==='verified'?'<button class="btn-line" data-act="freeze">Freeze escrow</button>':'')+'<span class="sp"></span>'+(c.status!=='suspended'?'<button class="btn-line danger" data-act="suspend">Suspend workspace</button>':'')+'</div>';
}

/* ---------- support ---------- */
function tRows(){return D.tickets.filter(function(t){return S.tst==='all'||t.status===S.tst;}).sort(function(a,b){return (a.status==='resolved')-(b.status==='resolved')||PRI[a.pri]-PRI[b.pri]||b.created-a.created;});}
var MAC={'Ask for details':'Thanks for reaching out. Could you share a screenshot and the approximate time this happened so we can trace it?','Escalated to payments':'I\'ve passed this to our payments team with everything you\'ve sent. You\'ll hear back within one business day.','Fixed, closing':'This is fixed on our side. I\'ll close the ticket, but reply here if anything still looks wrong.'};
function renderSupport(){
  var T=D.tickets;
  seg($('tSt'),'tst',[['open','Open',cnt(T,'status','open')],['pending','Awaiting reply',cnt(T,'status','pending')],['resolved','Resolved',cnt(T,'status','resolved')],['all','All',T.length]],function(){S.tsel=null;renderSupport();});
  var rows=tRows();if(!rows.some(function(t){return t.id===S.tsel;}))S.tsel=rows[0]&&rows[0].id;
  $('tq').innerHTML=rows.map(function(t){var last=t.msgs[t.msgs.length-1];return '<button type="button" data-id="'+t.id+'"'+(t.id===S.tsel?' class="on"':'')+'><span class="r1"><span class="mono-t">'+t.id+'</span><span class="kind '+t.kind+'">'+t.kind+'</span><span class="sp"></span><span class="pri '+t.pri+'">'+t.pri+'</span></span><b>'+esc(t.subj)+'</b><span class="r3">'+esc(t.who)+' · '+esc(t.cat)+' · '+ago(last.t)+(t.asg?'':' · <span style="color:var(--amber);font-weight:600">Unassigned</span>')+'</span></button>';}).join('')||'<div class="empty">No tickets here.</div>';
  var t=T.filter(function(x){return x.id===S.tsel;})[0];
  if(!t){$('th').innerHTML='<div class="empty" style="margin:auto">Select a ticket.</div>';return;}
  var acct=findAcct(t);
  $('th').innerHTML='<div class="th-h"><h2>'+esc(t.subj)+'</h2><div class="th-meta"><span class="kind '+t.kind+'">'+t.kind+'</span><span>'+esc(t.who)+'</span>'+(acct?'<a href="'+acct+'">Open account</a>':'')+'<span>· '+esc(t.cat)+' · opened '+ago(t.created)+'</span><span class="sp"></span><select id="tPri" aria-label="Priority">'+['urgent','high','normal','low'].map(function(p){return '<option value="'+p+'"'+(t.pri===p?' selected':'')+'>'+cap(p)+'</option>';}).join('')+'</select><select id="tAsg" aria-label="Assignee"><option value="">Unassigned</option>'+D.agents.map(function(a){return '<option'+(t.asg===a?' selected':'')+'>'+a+'</option>';}).join('')+'</select></div></div>'
  +'<div class="msgs" id="msgs">'+t.msgs.map(function(m){var who=m.k==='u'?t.who:m.k==='n'?'Internal note · '+(m.by||t.asg||'Support'):(m.by||t.asg||'Support');return '<div class="msg '+m.k+'"><p>'+esc(m.text)+'</p><em>'+esc(who)+' · '+ago(m.t)+'</em></div>';}).join('')+'</div>'
  +(t.status==='resolved'?'<div class="cmp"><div class="cmp-r"><span style="font-size:13px;color:var(--t-mute)">Resolved. Reopening moves it back to Open.</span><span class="sp"></span><button class="btn-line" data-t="reopen">Reopen</button></div></div>'
  :'<div class="cmp'+(S.mode==='note'?' note':'')+'"><div class="cmp-r"><div class="seg" id="tMode"><button type="button" data-v="reply"'+(S.mode==='reply'?' class="on"':'')+'>Reply</button><button type="button" data-v="note"'+(S.mode==='note'?' class="on"':'')+'>Internal note</button></div><span class="sp"></span>'+(S.mode==='reply'?'<div class="macros">'+Object.keys(MAC).map(function(k){return '<button type="button" data-mac="'+esc(k)+'">'+esc(k)+'</button>';}).join('')+'</div>':'')+'</div><textarea class="ta" id="tTxt" placeholder="'+(S.mode==='note'?'Only the team sees this':'Reply to '+esc(t.who))+'"></textarea><div class="cmp-r"><span class="sp"></span>'+(S.mode==='reply'?'<button class="btn-line" data-t="sendres">Send and resolve</button>':'')+'<button class="btn-black" data-t="send" style="padding:10px 20px">'+(S.mode==='note'?'Add note':'Send reply')+'</button></div></div>');
  var ms=$('msgs');ms.scrollTop=ms.scrollHeight;
  $('tPri').onchange=function(){t.pri=this.value;logA('sup','Set the priority of',t.id,' to '+this.value,t.id,t.subj);renderSupport();renderBadges();toast('Priority set to '+this.value);};
  $('tAsg').onchange=function(){t.asg=this.value;logA('sup',t.asg?'Assigned':'Unassigned',t.id,t.asg?' to '+t.asg:'',t.id,t.subj);renderSupport();toast(t.asg?'Assigned to '+t.asg:'Unassigned');};
}
function findAcct(t){var L=t.kind==='candidate'?D.candidates:D.companies,o=L.filter(function(x){return x.name===t.who;})[0];return o?'#'+(t.kind==='candidate'?'candidates':'companies')+'/'+o.id:'';}
$('tq').addEventListener('click',function(e){var b=e.target.closest('button[data-id]');if(!b)return;S.tsel=b.getAttribute('data-id');history.replaceState(null,'','#support/'+S.tsel);renderSupport();});
$('th').addEventListener('click',function(e){
  var t=D.tickets.filter(function(x){return x.id===S.tsel;})[0];if(!t)return;
  var md=e.target.closest('#tMode button');if(md){S.mode=md.getAttribute('data-v');renderSupport();return;}
  var mc=e.target.closest('[data-mac]');if(mc){var ta=$('tTxt');ta.value=MAC[mc.getAttribute('data-mac')];ta.focus();return;}
  var b=e.target.closest('[data-t]');if(!b)return;var a=b.getAttribute('data-t');
  if(a==='reopen'){logA('sup','Reopened',t.id,'',t.id,t.subj);t.status='open';renderSupport();renderBadges();toast(t.id+' reopened');return;}
  var txt=$('tTxt').value.trim();if(!txt){$('tTxt').focus();return;}
  t.msgs.push({k:S.mode==='note'?'n':'a',text:txt,t:Date.now(),by:D.me});logA('sup',S.mode==='note'?'Added an internal note to':a==='sendres'?'Replied to and resolved':'Replied to',t.id,' from '+t.who,t.id,txt);if(!t.asg)t.asg=D.me;
  if(S.mode==='reply')t.status=a==='sendres'?'resolved':'pending';
  renderSupport();renderBadges();toast(S.mode==='note'?'Note added':a==='sendres'?'Reply sent, '+t.id+' resolved':'Reply sent to '+t.who);
});

/* ---------- disputes ---------- */
function dRows(){return D.disputes.filter(function(d){return S.dst==='all'||(S.dst==='open'?d.status!=='resolved':d.status==='resolved');}).sort(function(a,b){return (a.status==='resolved')-(b.status==='resolved')||a.due-b.due;});}
function renderDisputes(){
  var Ds=D.disputes,op=Ds.filter(function(d){return d.status!=='resolved';}).length;
  seg($('dSt'),'dst',[['open','Open',op],['resolved','Resolved',Ds.length-op],['all','All',Ds.length]],renderDisputes);
  var rows=dRows(),stake=rows.filter(function(d){return d.status!=='resolved';}).reduce(function(a,d){return a+d.amt;},0);
  $('dCnt').innerHTML='<b>'+rows.length+'</b> dispute'+(rows.length===1?'':'s')+(stake?' · <b>'+usd(stake)+'</b> locked in escrow':'');
  $('dBody').innerHTML=rows.map(function(d){var u=due(d.due);return '<tr data-id="'+d.id+'"'+(S.dr&&S.dr.id===d.id?' class="sel"':'')+'><td><div class="who"><span><b>'+esc(d.type)+'</b><em><span class="mono-t">'+d.id+'</span> · '+esc(d.chal)+'</em></span></div></td><td><div class="who"><span><b>'+esc(d.co)+'</b><em>vs '+esc(d.cand)+'</em></span></div></td><td class="num">'+(d.amt?usd(d.amt):'—')+'</td><td class="hide-md">'+cap(d.by)+'</td><td class="hide-sm">'+(d.status==='resolved'?'—':'<span class="sla '+u[0]+'">'+u[1]+'</span>')+'</td><td>'+st(DST,d.status)+'</td></tr>';}).join('')||'<tr><td colspan="6"><div class="empty">No disputes here.</div></td></tr>';
}
$('dBody').addEventListener('click',function(e){var r=e.target.closest('tr[data-id]');if(r)openDr('dis',r.getAttribute('data-id'));});
function dOpts(d){if(d.type==='Review removal request')return [['keep','Keep the review','Stays on the company profile'],['remove','Remove the review','Hidden from the public profile']];
  return [['release','Release to candidate',usd(d.amt)],['return','Return to company',usd(d.amt)],['split','Split the reward','split']];}
function disHTML(d){
  var u=due(d.due),cand=D.candidates.filter(function(c){return c.name===d.cand;})[0],co=D.companies.filter(function(c){return c.name===d.co;})[0];
  var dec='';
  if(d.status==='resolved')dec='<div class="res"><b>Decision</b>'+esc(d.outcome)+'</div>';
  else dec='<div class="grp"><span class="sec-t">Decision</span><div class="opts" id="dOpts">'+dOpts(d).map(function(o){return '<div class="opt'+(S.dpick===o[0]?' on':'')+'" data-o="'+o[0]+'"><i></i><b>'+o[1]+'</b><em>'+(o[2]==='split'?'<input id="dSplit" type="number" min="0" max="100" value="'+S.split+'" aria-label="Percent to candidate" />% to candidate':esc(o[2]))+'</em></div>';}).join('')+'</div><textarea class="ta" id="dNote" placeholder="Reasoning. Shared with both parties."></textarea></div>';
  return '<div class="dr-h"><div class="t"><h2>'+esc(d.type)+'</h2><p><span class="mono-t">'+d.id+'</span> · '+esc(d.chal)+'</p><div class="chips">'+st(DST,d.status)+(d.status!=='resolved'?'<span class="st '+(u[0]==='late'?'bad':u[0]==='soon'?'warn':'')+'">Due '+u[1]+'</span>':'')+'</div></div><button class="x" data-act="close" aria-label="Close">'+ICX+'</button></div>'
  +'<div class="dr-b"><div class="kv"><div><span>Company</span><b>'+(co?'<a href="#companies/'+co.id+'">'+esc(d.co)+'</a>':esc(d.co))+'</b></div><div><span>Candidate</span><b>'+(cand?'<a href="#candidates/'+cand.id+'">'+esc(d.cand)+'</a>':esc(d.cand))+'</b></div><div><span>At stake</span><b>'+(d.amt?usd(d.amt)+' in escrow':'No funds')+'</b></div><div><span>Raised by</span><b>'+cap(d.by)+', '+day(d.opened)+'</b></div></div>'
  +'<div class="grp"><span class="sec-t">Summary</span><div style="font-size:14px;line-height:1.6;color:var(--t-body);text-wrap:pretty">'+esc(d.sum)+'</div></div>'
  +'<div class="grp"><span class="sec-t">Timeline</span><div class="tl">'+d.tl.map(function(x){return '<div><em>'+day(x.t)+'</em>'+esc(x.text)+'</div>';}).join('')+'</div></div>'
  +'<div class="grp"><span class="sec-t">Evidence</span><div class="evd">'+d.ev.map(function(x){return '<a href="#" data-act="ev">'+ICF+esc(x)+'</a>';}).join('')+'</div></div>'
  +dec+'</div>'
  +(d.status==='resolved'?'':'<div class="dr-f">'+(d.status==='open'?'<button class="btn-line" data-act="review">Mark in review</button>':'')+'<button class="btn-line" data-act="info">Request information</button><span class="sp"></span><button class="btn-black" data-act="decide" id="dGo"'+(S.dpick?'':' disabled')+'>Record decision</button></div>');
}

/* ---------- drawer + modal ---------- */
function find(k,id){return (k==='cand'?D.candidates:k==='co'?D.companies:D.disputes).filter(function(x){return x.id===id;})[0];}
function openDr(k,id){var o=find(k,id);if(!o)return;if(!S.dr||S.dr.id!==id){S.dpick=null;S.split=50;}S.dr={k:k,id:id};drawDr();$('drawer').classList.add('on');$('scrim').classList.add('on');$('drawer').setAttribute('aria-hidden','false');
  var v={cand:'candidates',co:'companies',dis:'disputes'}[k];if(S.view!==v)go(v,true);history.replaceState(null,'','#'+v+'/'+id);rerender();}
function drawDr(){var o=find(S.dr.k,S.dr.id);$('drawer').innerHTML=S.dr.k==='cand'?candHTML(o):S.dr.k==='co'?coHTML(o):disHTML(o);}
function closeDr(){if(!S.dr)return;$('drawer').classList.remove('on');$('scrim').classList.remove('on');$('drawer').setAttribute('aria-hidden','true');S.dr=null;history.replaceState(null,'','#'+S.view);rerender();}
$('scrim').onclick=closeDr;
function confirmBox(o,fn){
  var m=$('modal');m.innerHTML='<h3>'+esc(o.title)+'</h3><p>'+o.body+'</p><textarea class="ta" id="mWhy" placeholder="Reason (kept in the audit trail)"></textarea><div class="acts"><button class="btn-line" data-m="x">Cancel</button><button class="btn-black'+(o.danger?' danger':'')+'" data-m="ok" disabled>'+esc(o.cta)+'</button></div>';
  m.classList.add('on');$('mscrim').classList.add('on');var ok=m.querySelector('[data-m="ok"]'),ta=$('mWhy');ta.focus();
  ta.oninput=function(){ok.disabled=!ta.value.trim();};
  m.onclick=function(e){var b=e.target.closest('[data-m]');if(!b||b.disabled)return;var why=ta.value.trim();closeM();if(b.getAttribute('data-m')==='ok')fn(why);};
}
function closeM(){$('modal').classList.remove('on');$('mscrim').classList.remove('on');}
$('mscrim').onclick=closeM;
document.addEventListener('keydown',function(e){if(e.key!=='Escape')return;if($('modal').classList.contains('on'))closeM();else closeDr();});
function after(msg){drawDr();rerender();renderBadges();if(msg)toast(msg);}
$('drawer').addEventListener('input',function(e){if(e.target.id==='dNote'||e.target.id==='dSplit'){if(e.target.id==='dSplit')S.split=Math.max(0,Math.min(100,+e.target.value||0));var g=$('dGo');if(g)g.disabled=!S.dpick;}});
$('drawer').addEventListener('click',function(e){
  var op=e.target.closest('.opt');if(op&&e.target.tagName!=='INPUT'){S.dpick=op.getAttribute('data-o');var n=$('dNote').value;drawDr();$('dNote').value=n;return;}
  var b=e.target.closest('[data-act]');if(!b)return;var a=b.getAttribute('data-act'),k=S.dr.k,o=find(k,S.dr.id);
  if(a==='close'){closeDr();return;}
  if(a==='ev'){e.preventDefault();toast('Opening '+b.textContent);return;}
  if(a==='note'){logA('acct','Saved an internal note on',o.name||o.id,'',o.id,$('drNote').value);o.note=$('drNote').value;toast('Note saved');return;}
  if(a==='resend'){logA('acct','Resent email verification to',o.name,'',o.id,o.email);toast('Verification email sent to '+o.email);return;}
  if(a==='export'){logA('sec','Exported the account data of',o.name||o.id,'',o.id,'JSON export');download(o.id+'-export.json',JSON.stringify(o,null,2),'application/json');toast('Data export downloaded');return;}
  if(k==='cand'){
    if(a==='clear'){logA('acct','Cleared the flag on',o.name,'',o.id,o.flag);o.status='active';o.flag='';after('Flag cleared');}
    if(a==='reinstate'){logA('acct',o.status==='deleted'?'Withdrew the deletion of':'Reinstated',o.name,'',o.id,'');o.status='active';o.flag='';after(o.name+' reinstated');}
    if(a==='suspend')confirmBox({title:'Suspend '+o.name+'?',body:'They will be signed out, hidden from companies and removed from active pipelines. Escrowed rewards they have already won are unaffected.',cta:'Suspend account',danger:1},function(w){logA('acct','Suspended',o.name,'',o.id,w);o.status='suspended';o.flag='Suspended by Ana Kovač. '+w;after(o.name+' suspended');});
    if(a==='delete')confirmBox({title:'Delete '+o.name+'\'s account and data?',body:'Profile, submissions, interview recordings and transcripts are erased after a 30-day hold. Payout records are kept for 7 years as required for tax reporting.',cta:'Schedule deletion',danger:1},function(w){logA('acct','Scheduled deletion of',o.name,'',o.id,w);o.status='deleted';o.flag='Erasure on '+day(Date.now()+30*864e5)+'. '+w;after('Deletion scheduled');});
  }
  if(k==='co'){
    if(a==='verify'){logA('acct','Verified',o.name,'',o.id,'');o.status='verified';o.flag='';after(o.name+' verified');}
    if(a==='reject')confirmBox({title:'Reject '+o.name+'?',body:'The workspace is closed and the owner is emailed with your reason. No funds have been deposited.',cta:'Reject company',danger:1},function(w){logA('acct','Rejected verification for',o.name,'',o.id,w);o.status='suspended';o.flag='Verification rejected. '+w;after(o.name+' rejected');});
    if(a==='unfreeze'){logA('money','Unfroze escrow for',o.name,'',o.id,'');o.status='verified';o.flag='';after('Escrow unfrozen');}
    if(a==='reinstate'){logA('acct','Reinstated',o.name,'',o.id,'');o.status='verified';o.flag='';after(o.name+' reinstated');}
    if(a==='freeze')confirmBox({title:'Freeze escrow for '+o.name+'?',body:'Their '+usd(o.held)+' stays held. Releases, allocations and withdrawals are blocked until you unfreeze it.',cta:'Freeze escrow'},function(w){logA('money','Froze escrow for',o.name,' ('+usd(o.held)+' held)',o.id,w);o.status='frozen';o.flag='Frozen by Ana Kovač. '+w;after('Escrow frozen');});
    if(a==='suspend')confirmBox({title:'Suspend '+o.name+'?',body:'Live challenges are paused and members are signed out. Candidates in their pipelines are notified. Escrow stays held.',cta:'Suspend workspace',danger:1},function(w){logA('acct','Suspended',o.name,'',o.id,w);o.status='suspended';o.flag='Suspended by Ana Kovač. '+w;after(o.name+' suspended');});
  }
  if(k==='dis'){
    if(a==='review'){logA('money','Marked',o.id,' in review',o.id,o.type);o.status='review';o.tl.push({t:Date.now(),text:'Marked in review by Ana Kovač.'});after(o.id+' in review');}
    if(a==='info'){logA('money','Requested information on',o.id,'',o.id,o.type);o.tl.push({t:Date.now(),text:'Further information requested from both parties.'});after('Request sent to both parties');}
    if(a==='decide'){
      var note=$('dNote').value.trim();if(!note){$('dNote').focus();toast('Add your reasoning first');return;}
      var p=S.dpick,amt=o.amt,txt=p==='release'?'Released '+usd(amt)+' to '+o.cand+'.':p==='return'?'Returned '+usd(amt)+' to '+o.co+'.':p==='split'?'Split: '+usd(amt*S.split/100)+' to '+o.cand+', '+usd(amt*(100-S.split)/100)+' to '+o.co+'.':p==='keep'?'Review kept on the company profile.':'Review removed from the company profile.';
      logA('money','Recorded a decision on',o.id,' ('+o.type.toLowerCase()+')',o.id,txt+' '+note);o.status='resolved';o.outcome=txt+' '+note;o.tl.push({t:Date.now(),text:'Decision recorded by Ana Kovač. '+txt});
      var co=D.companies.filter(function(c){return c.name===o.co;})[0];
      if(co&&co.status==='frozen'&&!D.disputes.some(function(x){return x.co===o.co&&x.status!=='resolved';})){co.status='verified';co.flag='';}
      after('Decision recorded. Both parties notified.');
    }
  }
});

/* ---------- pagination ---------- */
var PER=10;
function page(rows,key,per){per=per||PER;var pages=Math.max(1,Math.ceil(rows.length/per));if(S[key]>=pages)S[key]=pages-1;return rows.slice(S[key]*per,S[key]*per+per);}
function pager(el,total,key,cb,anchor,per){per=per||PER;var p=S[key],pages=Math.ceil(total/per);
  el.innerHTML=total>per?'<span>'+(p*per+1)+'\u2013'+Math.min(total,(p+1)*per)+' of '+total+'</span><span class="pg-b"><button class="btn-line" type="button" data-p="-1"'+(p===0?' disabled':'')+'>Previous</button><button class="btn-line" type="button" data-p="1"'+(p>=pages-1?' disabled':'')+'>Next</button></span>':'';
  el.onclick=function(e){var b=e.target.closest('[data-p]');if(!b||b.disabled)return;S[key]+=+b.getAttribute('data-p');cb();var sc=document.scrollingElement,top=anchor.closest('.list').getBoundingClientRect().top;if(top<0)sc.scrollTo({top:top+sc.scrollTop-120,behavior:'smooth'});};}

/* ---------- admin activity log ---------- */
var ALOG='tc-admin-log-v1',ME={email:'ana.kovac@thecolosseum.io',ip:'81.84.12.207',loc:'Lisbon, PT',dev:'Chrome 131 \u00b7 macOS 15'},SES='ses_'+((TODAY/864e5)|0).toString(36)+'k';
var AREA={acct:'Accounts',money:'Escrow & disputes',sup:'Support',sec:'Security & exports'};
function loadLog(){try{return JSON.parse(localStorage.getItem(ALOG))||[];}catch(e){return [];}}
function logA(cat,verb,tgt,tail,tid,note){var l=loadLog(),t=Date.now();l.unshift({id:'adm_'+(t/1000|0).toString(36)+Math.random().toString(36).slice(2,5),ts:new Date(t).toISOString(),cat:cat,verb:verb,tgt:tgt||'',tail:tail||'',tid:tid||'',note:note||'',ses:SES});try{localStorage.setItem(ALOG,JSON.stringify(l.slice(0,300)));}catch(e){}}
var tidOf=function(n){var o=D.candidates.concat(D.companies).filter(function(x){return x.name===n;})[0];return o?o.id:'';};
var ASEED=(function(){
  var E=[[0,9.4,'sup','Assigned','T-2045',' to Ana K.','T-2045','Challenge published with the wrong reward amount'],[0,9.2,'sup','Added an internal note to','T-2045',' from Quarry Data','T-2045','Escrow shows $3,000 funded, so the published figure is a display mismatch.'],[0,8.8,'sup','Replied to','T-2043',' from Lumen Health','T-2043','Asked the company to confirm the IBAN on file.'],
  [1,15.2,'money','Marked','D-316',' in review','D-316','Plagiarism claim'],[1,11,'sup','Replied to','T-2038',' from Lucas Moreau','T-2038','Explained SSO token expiry.'],
  [2,16.5,'money','Froze escrow for','Kestrel Security',' ($4,000 held)','','Dispute D-318 opened by candidate.'],[2,10.3,'acct','Cleared the flag on','Grace Adeyemi','','','Hidden text was a template footer, not keyword stuffing.'],
  [3,14,'sup','Replied to','T-2037',' from Tessellate','T-2037','Reissued November escrow invoice with VAT ID.'],[3,9.7,'sec','Exported','companies',' as CSV','','14 rows'],
  [4,13.1,'sup','Replied to and resolved','T-2036',' from Omar Haddad','T-2036','Explained the hours-overlap hard gate.'],[5,12.4,'acct','Verified','Tessellate','','','Business registration confirmed.'],
  [6,16,'acct','Suspended','Parallax Labs','','','Chargeback on $3,000 escrow deposit.'],[8,10.2,'money','Recorded a decision on','D-313',' (refund request)','D-313','Returned $3,000 to Quarry Data. No submissions existed at the time of cancellation.'],
  [9,11.6,'acct','Resent email verification to','Mateo Ortiz','','',''],[11,15.3,'acct','Suspended','Ines Duarte','','','Duplicate account. Activity merged into cand_10ab9.'],
  [12,9.9,'sup','Replied to and resolved','T-2035',' from Northwind Logistics','T-2035','Switched the account to authenticator app codes.'],[15,14.7,'sec','Exported','candidates',' as CSV','','24 rows'],
  [18,10.8,'money','Unfroze escrow for','Brightline Media','','','Payment review complete.'],[21,13.5,'acct','Reinstated','Felix Brandt','','','Identity confirmed by video call.'],[24,12.2,'acct','Saved an internal note on','Halcyon Pay','','','Prefers contact via talent@ address.'],
  [64,10,'sec','Changed password','','','','']];
  for(var d=0;d<40;d++){var wd=new Date(TODAY-d*864e5).getDay();if(wd!==0&&wd!==6)E.push([d,8.5+(d%3)*.2,'sec','Signed in','','','','Password and authenticator app']);}
  return E.map(function(e,i){var t=TODAY-e[0]*864e5+e[1]*36e5;return {id:'adm_'+(t/1000|0).toString(36)+i.toString(36),ts:new Date(t).toISOString(),cat:e[2],verb:e[3],tgt:e[4],tail:e[5],tid:e[6]||tidOf(e[4]),note:e[7],ses:'ses_'+(((t/864e5)|0)).toString(36)+'k'};});
})();
function allLog(){return loadLog().concat(ASEED).sort(function(a,b){return a.ts<b.ts?1:-1;});}
function aRows(){var q=S.aq.toLowerCase(),min=S.aper?Date.now()-S.aper*864e5:0,ra=S.arange;return allLog().filter(function(e){if(S.acat&&e.cat!==S.acat)return false;var tt=new Date(e.ts).getTime();if(ra){if(tt<ra.a||tt>=ra.b+864e5)return false;}else if(min&&tt<min)return false;if(q&&(e.verb+' '+e.tgt+' '+e.tail+' '+e.tid+' '+e.id+' '+e.note).toLowerCase().indexOf(q)<0)return false;return true;});}
var sentence=function(e){return esc(e.verb)+(e.tgt?' <b>'+esc(e.tgt)+'</b>':'')+esc(e.tail);};
function dayLbl(t){var x=new Date(t);x.setHours(0,0,0,0);var diff=Math.round((TODAY-x.getTime())/864e5);return diff===0?'Today':diff===1?'Yesterday':x.toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'short',year:'numeric'});}
function renderActivity(){
  seg($('aCat'),'acat',[['','All'],['acct','Accounts'],['money','Escrow & disputes'],['sup','Support'],['sec','Security & exports']],renderActivity);
  $('aPer').innerHTML=[[7,'7 days'],[30,'30 days'],[0,'All time']].map(function(o){return '<button type="button" data-d="'+o[0]+'"'+(!S.arange&&S.aper===o[0]?' class="on"':'')+'>'+o[1]+'</button>';}).join('')+'<button type="button" data-d="custom" class="cust'+(S.arange?' on':'')+'">'+ICC+(S.arange?sd(S.arange.a)+' \u2013 '+sd(S.arange.b):'Custom')+'</button>';
  var rows=aRows(),sl=page(rows,'ap',20),html='',last='';
  $('aCnt').innerHTML='<b>'+rows.length+'</b> event'+(rows.length===1?'':'s');
  sl.forEach(function(e){var t=new Date(e.ts).getTime(),dl=dayLbl(t),op=S.aopen===e.id;if(dl!==last){html+='<div class="day">'+dl+'</div>';last=dl;}
    html+='<div class="ev'+(op?' open':'')+'" data-id="'+e.id+'" role="button" tabindex="0" aria-expanded="'+op+'"><span class="ev-t">'+new Date(t).toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'})+'</span><span class="ev-a">'+sentence(e)+'</span><span class="ev-c">'+AREA[e.cat]+'</span><span class="ev-x"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg></span></div>';
    if(op){var k=[['Event ID',e.id,1],['Timestamp',e.ts.replace('T',' ').replace(/\.\d+Z$/,' UTC'),1],['Session',e.ses,1],['Account',ME.email],['IP address',ME.ip,1],['Location',ME.loc],['Device',ME.dev],['Area',AREA[e.cat]],['Target ID',e.tid||'\u2014',1]];if(e.note)k.push(['Note',e.note]);while(k.length%3)k.push(['','']);
      html+='<div class="det"><div class="kv k3">'+k.map(function(r){return '<div>'+(r[0]?'<span>'+r[0]+'</span><b'+(r[2]?' class="mono"':'')+'>'+esc(r[1])+'</b>':'')+'</div>';}).join('')+'</div></div>';}
  });
  $('aList').innerHTML=html||'<div class="empty">No activity matches these filters.</div>';
  pager($('aPg'),rows.length,'ap',renderActivity,$('aList'),20);
}
$('aQ').addEventListener('input',function(e){S.aq=e.target.value.trim();S.ap=0;renderActivity();});
$('aPer').addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;var v=b.getAttribute('data-d');if(v==='custom'){CAL.open&&CAL.t==='a'?calClose():calOpen('a');return;}calClose();S.arange=null;S.aper=+v;S.ap=0;renderActivity();});
function aToggle(r){var id=r.getAttribute('data-id');S.aopen=S.aopen===id?null:id;renderActivity();}
$('aList').addEventListener('click',function(e){var r=e.target.closest('.ev');if(r)aToggle(r);});
$('aList').addEventListener('keydown',function(e){if((e.key==='Enter'||e.key===' ')&&e.target.classList.contains('ev')){e.preventDefault();aToggle(e.target);}});
$('aExp').onclick=function(){var rows=aRows();download('colosseum-admin-activity-'+new Date().toISOString().slice(0,10)+'.csv',csv(['event_id','timestamp_utc','area','action','target','target_id','note','account','ip_address','location','device','session_id'],rows.map(function(e){return [e.id,e.ts,AREA[e.cat],(e.verb+(e.tgt?' '+e.tgt:'')+e.tail),e.tgt,e.tid,e.note,ME.email,ME.ip,ME.loc,ME.dev,e.ses];})),'text/csv');logA('sec','Exported','the activity log',' as CSV','',rows.length+' events');S.ap=0;renderActivity();toast('CSV exported');};

/* ---------- settings ---------- */
function renderSettings(){}
(function(){var f=$('pwForm'),cur=$('pwCur'),nw=$('pwNew'),cn=$('pwCon'),msg=$('pwMsg');
  function say(t,c){msg.textContent=t;msg.className='st-msg '+(c||'');}
  f.addEventListener('submit',function(e){e.preventDefault();[cur,nw,cn].forEach(function(i){i.classList.remove('bad');});
    if(!cur.value){cur.classList.add('bad');return say('Enter your current password.','err');}
    if(nw.value.length<12){nw.classList.add('bad');return say('New password must be at least 12 characters.','err');}
    if(nw.value===cur.value){nw.classList.add('bad');return say('New password must be different from the current one.','err');}
    if(nw.value!==cn.value){cn.classList.add('bad');return say('Passwords do not match.','err');}
    f.reset();say('Password updated. Other sessions have been signed out.','ok');$('pwLast').textContent='Last changed just now.';logA('sec','Changed password','','','','Other sessions signed out');});
  $('pwForgot').onclick=function(){$('pwReset').classList.add('on');logA('sec','Requested a password reset link','','','',ME.email);};
  $('pwResend').onclick=function(){toast('Reset link sent again');};
})();

/* ---------- account menu ---------- */
(function(){var u=$('appUser');u.querySelector('.app-user-btn').addEventListener('click',function(e){e.stopPropagation();u.classList.toggle('open');});
  document.addEventListener('click',function(e){if(!u.contains(e.target))u.classList.remove('open');});
  $('logout').addEventListener('click',function(){logA('sec','Signed out','','','','');});
})();

/* ---------- routing ---------- */
var R={overview:renderOverview,candidates:renderCandidates,companies:renderCompanies,support:renderSupport,disputes:renderDisputes,activity:renderActivity,settings:renderSettings};
function rerender(){R[S.view]();}
function renderBadges(){var t=cnt(D.tickets,'status','open'),d=D.disputes.filter(function(x){return x.status!=='resolved';}).length;$('nSup').textContent=t||'';$('nSup').style.display=t?'':'none';$('nDis').textContent=d||'';$('nDis').style.display=d?'':'none';if(S.view==='overview')renderAttention();}
function go(v,silent){S.view=v;document.querySelectorAll('.view').forEach(function(s){s.classList.toggle('on',s.id==='v-'+v);});document.querySelectorAll('#nav a,#appUser [data-v]').forEach(function(a){a.classList.toggle('on',a.getAttribute('data-v')===v);});$('appUser').classList.remove('open');if(!silent)rerender();}
function route(){
  var h=(location.hash||'#overview').slice(1).split('/'),v=R[h[0]]?h[0]:'overview',arg=h[1]?decodeURIComponent(h[1]):'';
  if(arg.charAt(0)==='~'){if(v==='candidates'){S.cst=arg.slice(1);}if(v==='companies'){S.kst=arg.slice(1);}history.replaceState(null,'','#'+v);arg='';}
  if(v==='support'&&arg){S.tsel=arg;var t=D.tickets.filter(function(x){return x.id===arg;})[0];if(t&&S.tst!=='all'&&t.status!==S.tst)S.tst=t.status;}
  if(S.dr&&!(arg&&arg===S.dr.id)){$('drawer').classList.remove('on');$('scrim').classList.remove('on');S.dr=null;}
  go(v);window.scrollTo(0,0);
  if(arg&&v!=='support'){var k={candidates:'cand',companies:'co',disputes:'dis'}[v];if(k)openDr(k,arg);}
}
window.addEventListener('hashchange',route);
document.querySelectorAll('[data-export]').forEach(function(b){b.onclick=function(){
  var w=b.getAttribute('data-export'),d=new Date().toISOString().slice(0,10);
  if(w==='candidates')download('colosseum-candidates-'+d+'.csv',csv(['id','name','email','location','track','tier','profile_pct','applications','wins','earned_usd','joined','last_active','status'],cRows().map(function(c){return [c.id,c.name,c.email,c.loc,c.role,c.tier,c.prof,c.apps,c.wins,c.earned,new Date(c.joined).toISOString(),new Date(c.last).toISOString(),c.status];})),'text/csv');
  else download('colosseum-companies-'+d+'.csv',csv(['id','name','domain','hq','seats','live_challenges','held_usd','awaiting_usd','released_usd','hires','rating','status'],kRows().map(function(c){return [c.id,c.name,c.domain,c.hq,c.seats,c.live,c.held,c.due,c.released,c.hires,c.reviews?c.rating:'',c.status];})),'text/csv');
  logA('sec','Exported',w,' as CSV','',(w==='candidates'?cRows():kRows()).length+' rows');toast('CSV exported');};});
renderBadges();route();
})();
