/* Design-review tweaks: small button bottom-left, opens a panel of registered option groups.
   Register more groups from any page: TCTweaks.register({id,title,controls:[{key,label,options:[[value,label],...],def}],apply(state)}) */
(function(){
var KEY='tc-tweaks-v1',store={};try{store=JSON.parse(localStorage.getItem(KEY))||{};}catch(e){}
var groups=[],openG={},root=document.documentElement;
var css=`
.tw-fab{position:fixed;left:18px;bottom:18px;z-index:900;height:34px;display:flex;align-items:center;gap:7px;padding:0 13px 0 11px;border-radius:999px;border:1px solid var(--line,#e6e4df);background:#fff;color:var(--ink2,#1c1d1c);font:600 12.5px/1 inherit;font-family:inherit;cursor:pointer;box-shadow:0 6px 18px -8px rgba(31,33,32,.22)}
.tw-fab svg{width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round}
.tw-fab:hover,.tw.open .tw-fab{border-color:var(--blue,#678DC6);box-shadow:0 0 0 3px rgba(103,141,198,.16)}
.tw-panel{position:fixed;left:18px;bottom:62px;z-index:900;width:300px;max-height:calc(100vh - 90px);overflow:auto;background:#fff;border:1px solid var(--line,#e6e4df);border-radius:16px;box-shadow:0 18px 44px rgba(31,33,32,.16);display:none;font-family:inherit;color:var(--ink2,#1c1d1c)}
.tw.open .tw-panel{display:block}
.tw-head{display:flex;align-items:center;justify-content:space-between;padding:13px 16px 11px;border-bottom:1px solid var(--line,#e6e4df);font-weight:700;font-size:13.5px}
.tw-reset{border:0;background:none;font:inherit;font-size:12px;font-weight:600;color:var(--t-faint,#8a8a86);cursor:pointer}
.tw-reset:hover{color:var(--blue,#678DC6)}
.tw-grp+.tw-grp{border-top:1px solid var(--line,#e6e4df)}
.tw-gt{width:100%;display:flex;align-items:center;justify-content:space-between;gap:10px;padding:13px 16px;border:0;background:none;font:inherit;font-size:13px;font-weight:700;color:var(--ink2,#1c1d1c);cursor:pointer;text-align:left}
.tw-gt:hover{background:#fbfaf8}
.tw-gt .tw-cur{margin-left:auto;font-size:11.5px;font-weight:600;color:var(--t-faint,#8a8a86);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:130px}
.tw-gt svg{width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex:none;transition:transform .2s}
.tw-grp.open .tw-gt svg{transform:rotate(180deg)}
.tw-grp.open .tw-gt .tw-cur{display:none}
.tw-gb{display:none;flex-direction:column;gap:12px;padding:2px 16px 16px}
.tw-grp.open .tw-gb{display:flex}
.tw-ctl{display:flex;flex-direction:column;gap:7px}
.tw-lbl{font-size:12.5px;font-weight:600}
.tw-opts{display:flex;flex-wrap:wrap;gap:6px}
.tw-opt{height:28px;padding:0 11px;border-radius:999px;border:1px solid var(--line,#e6e4df);background:#fff;font:inherit;font-size:12px;font-weight:600;color:var(--ink2,#1c1d1c);cursor:pointer}
.tw-opt:hover{border-color:var(--ink2,#1c1d1c)}
.tw-opt.on{background:var(--ink2,#1c1d1c);border-color:var(--ink2,#1c1d1c);color:#fff}
@media (max-width:720px){.tw-fab{left:12px;bottom:12px}.tw-panel{left:12px;right:12px;width:auto;bottom:54px}}
`;
var st=document.createElement('style');st.id='tw-css';st.textContent=css;document.head.appendChild(st);
var w=document.createElement('div');w.className='tw';
w.innerHTML='<div class="tw-panel" role="dialog" aria-label="Tweaks"><div class="tw-head"><span>Tweaks</span><button type="button" class="tw-reset">Reset</button></div><div class="tw-body"></div></div><button type="button" class="tw-fab" aria-label="Open tweaks"><svg viewBox="0 0 24 24"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="17" x2="20" y2="17"/><circle cx="9" cy="7" r="2.2" fill="#fff"/><circle cx="15" cy="17" r="2.2" fill="#fff"/></svg>Tweaks</button>';
function save(){try{localStorage.setItem(KEY,JSON.stringify(store));}catch(e){}}
function state(g){var s=store[g.id]||{};g.controls.forEach(function(c){if(s[c.key]==null)s[c.key]=c.def;});return s;}
function render(){
  w.querySelector('.tw-body').innerHTML=groups.map(function(g){var s=state(g);
    var cur=g.controls[0].options.filter(function(o){return o[0]===s[g.controls[0].key];})[0];
    return '<div class="tw-grp'+(openG[g.id]?' open':'')+'"><button type="button" class="tw-gt" data-tg="'+g.id+'" aria-expanded="'+(!!openG[g.id])+'"><span>'+g.title+'</span><span class="tw-cur">'+(cur?cur[1]:'')+'</span><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg></button><div class="tw-gb">'+g.controls.map(function(c){
      return '<div class="tw-ctl"><div class="tw-lbl">'+c.label+'</div><div class="tw-opts">'+c.options.map(function(o){
        return '<button type="button" class="tw-opt'+(s[c.key]===o[0]?' on':'')+'" data-g="'+g.id+'" data-k="'+c.key+'" data-v="'+o[0]+'">'+o[1]+'</button>';}).join('')+'</div></div>';}).join('')+'</div></div>';}).join('');
}
function apply(g){var s=state(g);g.controls.forEach(function(c){root.setAttribute('data-tw-'+g.id+'-'+c.key,s[c.key]);});if(g.apply)g.apply(s);}
w.addEventListener('click',function(e){
  e.stopPropagation();
  if(e.target.closest('.tw-fab')){w.classList.toggle('open');return;}
  if(e.target.closest('.tw-reset')){groups.forEach(function(g){delete store[g.id];apply(g);});save();render();return;}
  var tg=e.target.closest('.tw-gt');if(tg){openG[tg.dataset.tg]=!openG[tg.dataset.tg];render();return;}
  var o=e.target.closest('.tw-opt');if(!o)return;
  var g=groups.filter(function(x){return x.id===o.dataset.g;})[0];
  store[g.id]=state(g);store[g.id][o.dataset.k]=o.dataset.v;save();apply(g);render();
});
document.addEventListener('click',function(){w.classList.remove('open');});
document.addEventListener('keydown',function(e){if(e.key==='Escape')w.classList.remove('open');});
function mount(){if(document.body&&!w.parentNode)document.body.appendChild(w);}
window.TCTweaks={register:function(g){groups.push(g);apply(g);render();if(document.body)mount();else document.addEventListener('DOMContentLoaded',mount);}};

})();
