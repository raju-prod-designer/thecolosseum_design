/* Mobile keyboard: pan the focused field into the visible area above the on-screen keyboard. */
(function(){if(window.__kbfix)return;window.__kbfix=1;
var vv=window.visualViewport;if(!vv)return;
var MQ=matchMedia('(max-width:820px)'),TOP=88,SKIP='.cc-comp,.cc-comp *,[data-kb-skip],[data-kb-skip] *';
var cur=null,moved=[],timers=[],spacer=null;
function editable(el){if(!el||!el.matches||el.matches(SKIP))return false;if(el.isContentEditable)return true;var t=el.tagName;if(t==='TEXTAREA'||t==='SELECT')return true;if(t!=='INPUT')return false;return !/^(checkbox|radio|file|range|button|submit|reset|color|hidden|image)$/i.test(el.type||'');}
function kbH(){return Math.max(0,Math.round(innerHeight-vv.height));}
function pad(on){if(!spacer){spacer=document.createElement('div');spacer.setAttribute('aria-hidden','true');spacer.style.cssText='height:0;pointer-events:none;flex:none;width:1px';}
  if(on){if(!spacer.isConnected)document.body.appendChild(spacer);spacer.style.height=(kbH()+Math.round(vv.height*.6))+'px';}else if(spacer.isConnected){spacer.style.height='0';spacer.remove();}}
function fixedAnc(el){for(var p=el.parentElement;p&&p!==document.body;p=p.parentElement){if(getComputedStyle(p).position==='fixed')return p;}return null;}
function sheetOf(fx,el){if(fx.offsetHeight<innerHeight*.9)return fx;for(var c=el;c&&c.parentElement!==fx;c=c.parentElement){}return c||fx;}
function reveal(){var el=cur;if(!el||!MQ.matches||document.activeElement!==el)return;
  var kb=kbH();if(kb<80)return;
  var r=el.getBoundingClientRect(),vTop=vv.offsetTop,vBot=vTop+vv.height,fx=fixedAnc(el),d=0;
  if(fx&&fx.offsetHeight<innerHeight*.35){if(r.bottom>vBot-8)d=r.bottom-(vBot-8);}
  else{var tgt=vTop+Math.min(TOP,vv.height*.2),ok=r.top>=vTop+8&&r.top<=vTop+vv.height*.4&&r.bottom<=vBot-12;if(!ok)d=r.top-tgt;}
  if(Math.abs(d)<2)return;
  for(var p=el.parentElement;p&&p!==document.body&&p!==document.documentElement;p=p.parentElement){
    var cs=getComputedStyle(p);
    if(/(auto|scroll)/.test(cs.overflowY)&&p.scrollHeight>p.clientHeight+1){var b=p.scrollTop;p.scrollTop=b+d;d-=(p.scrollTop-b);if(Math.abs(d)<2)return;}
    if(cs.position==='fixed')break;}
  if(fx){var s=sheetOf(fx,el),off=(+s.dataset.kbOff||0)+d;off=Math.max(0,off);s.dataset.kbOff=off;
    s.style.setProperty('transition','translate .25s cubic-bezier(.2,.8,.2,1)','important');s.style.setProperty('translate','0 '+(-off)+'px','important');
    if(moved.indexOf(s)<0)moved.push(s);return;}
  pad(true);window.scrollBy({top:d,behavior:'smooth'});}
function schedule(){timers.forEach(clearTimeout);timers=[60,320,640].map(function(ms){return setTimeout(reveal,ms);});}
function reset(){moved.forEach(function(s){s.style.removeProperty('translate');delete s.dataset.kbOff;setTimeout(function(){if(!s.dataset.kbOff)s.style.removeProperty('transition');},300);});moved=[];pad(false);}
document.addEventListener('focusin',function(e){if(!MQ.matches||!editable(e.target))return;cur=e.target;schedule();},true);
document.addEventListener('focusout',function(){setTimeout(function(){if(!editable(document.activeElement)){cur=null;reset();}},150);},true);
var rz=0;vv.addEventListener('resize',function(){clearTimeout(rz);rz=setTimeout(function(){if(kbH()<80){reset();return;}if(cur)reveal();},90);});
document.addEventListener('input',function(e){if(e.target===cur&&e.target.tagName==='TEXTAREA')setTimeout(reveal,30);});
})();
