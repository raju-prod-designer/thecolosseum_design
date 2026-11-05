/* Wallet "Add funds" button in the reward dropdown -> in-place top-up modal. Self-contained styles (wt- prefix). */
(function(){
var wallet=2150;
function money(n){return '$'+n.toLocaleString('en-US');}
var CSS=`
.wt-acts{display:flex;gap:8px;margin:4px 6px}
.wt-add,.wt-set{flex:1;font-family:inherit;font-size:12.5px;font-weight:700;border:0;border-radius:999px;padding:10px 16px;cursor:pointer;transition:background .15s,color .15s}
.wt-add{color:var(--ink2);background:var(--field)}
.wt-add:hover{background:#e6e6e2}
.wt-set{color:#fff;background:var(--ink2)}
.wt-set:hover{background:var(--blue)}
.ch-split-wal .v.neg{color:oklch(0.6 0.13 25)}
.ch-reward.rw-closed .ch-split{opacity:0!important;visibility:hidden!important}
.wt-mb{position:fixed;inset:0;z-index:600;display:none;align-items:center;justify-content:center;padding:28px;background:rgba(28,28,26,.3);backdrop-filter:blur(7px);-webkit-backdrop-filter:blur(7px);text-align:left}
.wt-mb.on{display:flex}
.wt-md{position:relative;width:min(470px,100%);box-sizing:border-box;background:#fff;border:1px solid var(--line);border-radius:20px;box-shadow:0 24px 60px rgba(28,28,26,.22);padding:26px 28px 28px;max-height:88vh;overflow:auto;scrollbar-width:none;animation:wtRise .22s cubic-bezier(.2,.7,.3,1)}
.wt-md::-webkit-scrollbar{display:none}
@keyframes wtRise{from{opacity:0;transform:translateY(10px) scale(.985)}to{opacity:1;transform:none}}
.wt-x{position:absolute;top:18px;right:20px;width:30px;height:30px;border:0;background:var(--field);border-radius:50%;cursor:pointer;display:grid;place-items:center}
.wt-x svg{width:14px;height:14px;stroke:var(--ink2);stroke-width:2;fill:none;stroke-linecap:round}
.wt-md h3{font-family:"P22Mackinac",serif;font-weight:500;font-size:21px;letter-spacing:-.02em;margin:0 0 5px;padding-right:36px;color:var(--ink2)}
.wt-sub{font-size:13px;color:var(--t-mute);margin:0 0 20px;line-height:1.55;text-wrap:pretty}
.wt-lbl{display:block;font-size:10.5px;letter-spacing:.09em;text-transform:uppercase;font-weight:700;color:var(--t-faint);margin:0 0 7px}
.wt-amt{position:relative;display:flex;align-items:center}
.wt-amt i{position:absolute;left:15px;font-style:normal;font-size:15px;font-weight:700;color:var(--t-mute)}
.wt-amt input{width:100%;box-sizing:border-box;font-family:inherit;font-size:15px;font-weight:600;color:var(--ink2);background:var(--field);border:1px solid var(--field);border-radius:12px;padding:12px 14px 12px 32px;outline:none;transition:border-color .15s,box-shadow .15s}
.wt-amt input:focus{border-color:var(--blue);box-shadow:0 0 0 3px rgba(103,141,198,.16);background:#fff}
.wt-sum{margin:14px 0 0;border:1px solid var(--line);border-radius:13px;padding:4px 15px}
.wt-sum div{display:flex;justify-content:space-between;align-items:center;padding:9px 0;font-size:13px;color:var(--t-mute);font-weight:600}
.wt-sum div+div{border-top:1px solid var(--line)}
.wt-sum b{color:var(--ink2);font-variant-numeric:tabular-nums}
.wt-sum .tot b{font-size:15px}
.wt-pm{display:flex;align-items:center;gap:11px;border:1px solid var(--line);border-radius:13px;padding:12px 14px}
.wt-pm-ic{width:40px;height:27px;border:1px solid var(--line);border-radius:6px;display:grid;place-items:center;flex:none;font-size:9.5px;font-weight:800;letter-spacing:.04em;color:var(--t-mute)}
.wt-pm-id{flex:1;min-width:0}
.wt-pm-id b{display:block;font-size:13px;font-weight:700;color:var(--ink2)}
.wt-pm-id span{display:block;font-size:11.5px;color:var(--t-faint);font-weight:600;margin-top:2px}
.wt-act{display:flex;align-items:center;gap:10px;margin:22px 0 0}
.wt-btn{flex:1;font-family:inherit;font-size:13.5px;font-weight:700;color:#fff;background:var(--ink2);border:0;border-radius:999px;padding:13px 20px;cursor:pointer;transition:background .15s}
.wt-btn:hover{background:var(--blue)}
.wt-line{font-family:inherit;font-size:13px;font-weight:600;color:var(--ink2);background:#fff;border:1px solid var(--line);border-radius:999px;padding:10px 18px;cursor:pointer;transition:border-color .15s,color .15s;flex:none}
.wt-line:hover{border-color:var(--ink2);color:var(--blue)}
.wt-ok{text-align:center;padding:8px 0 0}
.wt-ok-ic{width:52px;height:52px;border-radius:50%;background:rgba(47,109,74,.1);display:grid;place-items:center;margin:0 auto 16px}
.wt-ok-ic svg{width:24px;height:24px;stroke:var(--green);fill:none;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round}
`;
var st=document.createElement('style');st.textContent=CSS;document.head.appendChild(st);
var mb=document.createElement('div');mb.className='wt-mb';mb.innerHTML='<div class="wt-md"></div>';document.body.appendChild(mb);
var md=mb.firstChild;
function close(){mb.classList.remove('on');}
mb.addEventListener('click',function(e){if(e.target===mb)close();});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&mb.classList.contains('on'))close();});
function open(html){md.innerHTML='<button class="wt-x" type="button" aria-label="Close"><svg viewBox="0 0 24 24"><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg></button>'+html;mb.classList.add('on');md.querySelector('.wt-x').onclick=close;}
function fmt(n){return (n<0?'\u2212':'')+money(Math.abs(n));}
function splitSum(sp){var t=0;sp.querySelectorAll('.ch-split-in').forEach(function(el){t+=parseInt((el.textContent||'').replace(/[^0-9]/g,''),10)||0;});return t;}
function tween(v,to){var from=v.__n==null?to:v.__n;if(v.__raf)cancelAnimationFrame(v.__raf);v.__to=to;v.classList.toggle('neg',to<0);if(from===to){v.__n=to;var s=fmt(to);if(v.textContent!==s)v.textContent=s;return;}var t0=performance.now(),D=520;(function step(now){var p=Math.min(1,(now-t0)/D),e=1-Math.pow(1-p,3),n=Math.round(from+(to-from)*e);v.__n=n;v.textContent=fmt(n);if(p<1)v.__raf=requestAnimationFrame(step);else v.__raf=null;})(t0);}
function syncBal(){document.querySelectorAll('.ch-split').forEach(function(sp){var v=sp.querySelector('.ch-split-wal .v');if(!v)return;var to=wallet-splitSum(sp);if(v.__to===to&&!v.__raf&&v.textContent===fmt(to))return;if(v.__to!==to||v.textContent!==fmt(v.__n==null?to:v.__n))tween(v,to);});}
document.addEventListener('input',function(e){if(e.target.closest&&e.target.closest('.ch-split-in'))syncBal();},true);
document.addEventListener('pointerdown',function(e){var b=e.target.closest&&e.target.closest('.wt-set');if(!b)return;e.preventDefault();e.stopPropagation();var rw=b.closest('.ch-reward');if(!rw)return;if(document.activeElement&&rw.contains(document.activeElement))document.activeElement.blur();rw.classList.remove('split-open','rw-need');var a=rw.querySelector('.rw-ask');if(a)a.remove();rw.classList.add('rw-closed');rw.addEventListener('mouseleave',function f(){rw.classList.remove('rw-closed');rw.removeEventListener('mouseleave',f);});},true);
function topUp(){
  open('<h3>Add funds to wallet</h3><p class="wt-sub">Wallet funds sit outside escrow. Use them to fund challenges instantly without a card charge each time.</p>'
    +'<span class="wt-lbl">Amount</span><div class="wt-amt"><i>$</i><input id="wtAmt" type="text" value="2,000" inputmode="numeric" /></div>'
    +'<div class="wt-sum"><div><span>Current balance</span><b>'+money(wallet)+'</b></div><div class="tot"><span>New balance</span><b id="wtNew">'+money(wallet+2000)+'</b></div></div>'
    +'<span class="wt-lbl" style="margin:20px 0 7px">Funding method</span>'
    +'<div class="wt-pm"><span class="wt-pm-ic">VISA</span><span class="wt-pm-id"><b>Visa ···· 4242</b><span>NimbusLab GmbH · exp 09/28</span></span><button class="wt-line" type="button">Change</button></div>'
    +'<div class="wt-act"><button class="wt-btn" type="button" id="wtGo">Add funds</button><button class="wt-line" type="button" id="wtNo">Cancel</button></div>');
  var inp=document.getElementById('wtAmt');
  function amt(){return parseInt(inp.value.replace(/[^0-9]/g,''),10)||0;}
  inp.oninput=function(){document.getElementById('wtNew').textContent=money(wallet+amt());};
  document.getElementById('wtNo').onclick=close;
  document.getElementById('wtGo').onclick=function(){var a=amt();if(!a){inp.focus();return;}wallet+=a;syncBal();
    open('<div class="wt-ok"><div class="wt-ok-ic"><svg viewBox="0 0 24 24"><polyline points="5 12.5 10 17.5 19 7"/></svg></div><h3 style="padding:0">'+money(a)+' added</h3><p class="wt-sub" style="margin:8px 0 0">Your wallet balance is now '+money(wallet)+'.</p><div class="wt-act" style="justify-content:center"><button class="wt-btn" type="button" id="wtOk" style="flex:none;padding:13px 34px">Done</button></div></div>');
    document.getElementById('wtOk').onclick=close;};
}
document.addEventListener('pointerdown',function(e){var b=e.target.closest('.wt-add');if(!b)return;e.preventDefault();e.stopPropagation();topUp();},true);
document.addEventListener('click',function(e){if(e.target.closest('.wt-add')){e.preventDefault();e.stopPropagation();}},true);
new MutationObserver(syncBal).observe(document.body,{childList:true,subtree:true});
})();
