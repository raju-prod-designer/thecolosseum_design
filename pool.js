function skEv(c){var esc=function(s){return String(s).replace(/[&<>]/g,function(x){return{"&":"&amp;","<":"&lt;",">":"&gt;"}[x];});};var L={vs:'Very strong',s:'Strong',m:'Moderate',w:'Weak',i:'Insufficient'},N={vs:4,s:3,m:2,w:1,i:0};
var D=[['Python','Language','vs','Current'],['Machine Learning','AI/ML','vs','Current'],['AI/ML','Domain','vs','Current'],['scikit-learn','Framework','s','Current'],['Data','Domain','s','Current'],['Computer Vision','AI/ML','m','Current'],['Natural Language Processing','AI/ML','m','Current'],['OpenCV','Framework','m','Current'],['LightGBM','Framework','m','Current'],['FastAPI','Framework','m','Recent'],['Docker','DevOps','m','Recent'],['Backend','Domain','m','Recent'],['Jupyter Notebook','Other','m','Historical'],['AWS','Cloud','w','Recent'],['OpenAI API','AI/ML','w','Recent'],['Deepgram','AI/ML','w','Recent'],['Java','Language','i','Historical'],['C++','Language','i','Historical']];
function bars(k){var H=[4,7,10,13],o='<svg class="ske-bar" width="17" height="13" viewBox="0 0 17 13" aria-hidden="true">';for(var j=0;j<4;j++)o+='<rect x="'+(j*4+1)+'" y="'+(13-H[j])+'" width="3" height="'+H[j]+'" rx="1"'+(j<N[k]?' class="on"':'')+'/>';return o+'</svg>';}
return '<div class="ske-lg">'+['vs','s','m','w','i'].map(function(k){return '<span class="lv-'+k+'">'+bars(k)+L[k]+'</span>';}).join('')+'</div>'
+['Current','Recent','Historical'].map(function(r){var g=D.filter(function(d){return d[3]===r;});if(!g.length)return '';return '<div class="ske-g"><div class="ske-gh">'+r+'<span>'+g.length+'</span></div><div class="ske">'+g.map(function(d){return '<span class="ske-c lv-'+d[2]+'">'+bars(d[2])+'<b>'+esc(d[0])+'</b><em>'+esc(d[1])+' · '+L[d[2]]+'</em></span>';}).join('')+'</div></div>';}).join('');}
/* Publish -> targeted candidate pool. Injects its own styles; hooks the .ch-ai-pub button. */
(function(){
var USER_HTML='<div class="app-user"><button class="app-user-btn" type="button" aria-label="Account menu"><img src="assets/lg-1.png" alt="Company" /></button><div class="app-user-menu"><a class="app-user-opt" href="Company - Profile.html"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a7 7 0 0 1 14 0v1"/></svg><span>Profile</span></a><a class="app-user-opt" href="Company - Activity Log.html"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg><span>Activity log</span></a><div class="app-user-opt"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg><span>Settings</span></div><div class="app-user-sep"></div><div class="app-user-opt danger"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg><span>Log out</span></div></div></div>';
function wireUser(scope){var u=scope.querySelector('.app-user');if(!u)return;var b=u.querySelector('.app-user-btn');if(b)b.addEventListener('click',function(e){e.stopPropagation();u.classList.toggle('open');});document.addEventListener('click',function(ev){if(!u.contains(ev.target))u.classList.remove('open');});}
var CSS=`
.pool-top .app-user,.cprof-topbar .app-user{display:block;right:34px}
.cprof-topbar{position:relative}
.ch-detail.ch-published .ch-card>*{display:none}
.ch-detail.ch-published .ch-meta-chips,.ch-detail.ch-published .ch-ai,.ch-detail.ch-published .ch-cand{opacity:0;pointer-events:none;transition:opacity .35s ease}
.ch-detail.ch-published{max-height:300px}
.ch-detail.ch-published .ch-card{align-items:center;justify-content:center;padding:44px 32px;min-height:236px}
.pub-msg{display:none;flex-direction:column;align-items:center;gap:14px;text-align:center;animation:pubIn .5s cubic-bezier(.2,.7,.3,1) both}
.ch-detail.ch-published .pub-msg{display:flex}
@keyframes pubIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
.pub-tick{width:46px;height:46px;border-radius:50%;background:var(--ink2);display:grid;place-items:center}
.pub-tick svg{width:22px;height:22px;fill:none;stroke:#fff;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:32;stroke-dashoffset:32;animation:tick .45s .12s ease forwards}
@keyframes tick{to{stroke-dashoffset:0}}
.pub-h{font-family:"P22Mackinac",serif;font-weight:500;font-size:24px;letter-spacing:-0.02em;color:var(--ink2);margin:0}
.pub-p{font-size:14px;line-height:1.55;color:var(--t-body);margin:0;max-width:380px;text-wrap:pretty}
.pub-dots{display:inline-flex;gap:5px;margin-left:2px}
.pub-dots i{width:4px;height:4px;border-radius:50%;background:var(--t-mute);animation:pd 1.1s infinite ease-in-out}
.pub-dots i:nth-child(2){animation-delay:.15s}.pub-dots i:nth-child(3){animation-delay:.3s}
@keyframes pd{0%,80%,100%{opacity:.25}40%{opacity:1}}
.pub-scan{width:210px;height:2px;border-radius:2px;background:var(--line);overflow:hidden}
.pub-scan i{display:block;width:40%;height:100%;background:var(--ink2);animation:scan 1.15s infinite cubic-bezier(.6,0,.4,1)}
@keyframes scan{0%{transform:translateX(-110%)}100%{transform:translateX(280%)}}

.pool{position:fixed;inset:0;z-index:300;background:#fff;opacity:0;transition:opacity .55s ease;overflow:auto;font-family:inherit;zoom:0.9}
.pool.on{opacity:1}
.pool-top{position:relative;display:flex;align-items:center;justify-content:center;padding:26px 34px 4px}
.pool-logo{font-weight:800;font-size:26px;letter-spacing:-.03em;color:var(--ink2);line-height:1}
.pool-logo .the{font-weight:400}
.pool-back{position:absolute;left:34px;top:50%;transform:translateY(-50%);display:inline-flex;align-items:center;gap:7px;background:transparent;border:0;font:inherit;font-size:13.5px;font-weight:600;color:var(--t-mute,#8a8b87);cursor:pointer;padding:0}
.pool-back:hover{color:var(--blue)}
.pool-back svg{width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.pool-body{max-width:none;margin:0;padding:26px 44px 90px}
.pool-h1{font-family:"P22Mackinac",serif;font-weight:500;font-size:30px;letter-spacing:-.02em;color:var(--ink2);margin:0;text-align:center}
.pool-h1-row{position:relative;display:flex;align-items:center;justify-content:center;margin:0 0 18px}
.vtog{display:flex;gap:3px;background:var(--field);border:1px solid var(--line);border-radius:999px;padding:3px;height:32px;box-sizing:border-box;align-items:stretch;flex:none}
.cand-filters{display:contents}.cand-filters[hidden]{display:none}
.vtog-b{font:inherit;font-size:12.5px;font-weight:600;color:var(--t-body);background:transparent;border:0;border-radius:999px;padding:0 14px;display:flex;align-items:center;cursor:pointer;transition:.15s}
.vtog-b:hover{color:var(--ink2)}
.vtog-b.on{background:#fff;color:var(--ink2);box-shadow:0 1px 2px rgba(0,0,0,.06)}
.fs{border:1px solid var(--line);border-radius:16px;background:#fff;box-shadow:var(--shadow-card);padding:20px 24px;margin:0 0 20px;display:flex;flex-direction:column;gap:9px}
.fs-h{display:flex;align-items:center;gap:9px;font-size:11px;letter-spacing:.12em;text-transform:uppercase;font-weight:800;color:var(--t-faint)}
.fs-h svg{width:15px;height:15px;fill:none;stroke:var(--blue);stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.fs p{font-size:14.5px;line-height:1.6;color:var(--t-body);margin:0;text-wrap:pretty}
.fs p b{color:var(--ink2);font-weight:700}
.fs-stat{max-width:none;margin:0 auto 22px;text-align:center;font-size:14.5px;line-height:1.5;color:var(--t-body);white-space:nowrap}
.fs-stat b{color:var(--ink2);font-weight:700}
.funnel{display:grid;grid-template-columns:repeat(5,1fr);gap:12px;margin:0 0 30px}
.fn-card{border:1px solid var(--line);border-radius:14px;background:#fff;padding:18px 18px 16px;display:flex;flex-direction:column;gap:5px}
.fn-card.last{border-color:#c7d2e2;background:#f6f8fb}
.fn-n{font-family:"P22Mackinac",serif;font-weight:500;font-size:38px;line-height:1;letter-spacing:-.02em;color:var(--ink2);font-variant-numeric:tabular-nums}
.fn-card.last .fn-n{color:var(--blue)}
.fn-l{font-size:13px;font-weight:700;color:var(--ink2)}
.fn-bar{height:5px;border-radius:999px;background:var(--field);overflow:hidden;margin:8px 0 4px}
.fn-bar i{display:block;height:100%;border-radius:999px;background:var(--blue)}
.fn-card.last .fn-bar i{background:#b9c6dc}
.fn-sub{font-size:11.5px;color:var(--t-faint)}
.pipe-h{font-size:11px;letter-spacing:.12em;text-transform:uppercase;font-weight:800;color:var(--t-faint);margin:0 0 14px}
.pipe{display:flex;flex-direction:column}.pipe[hidden]{display:none}
.prow{padding:18px 4px;border-top:1px solid var(--line)}
.prow:first-child{border-top:0}
.prow-top{display:flex;align-items:center;justify-content:space-between;gap:14px;margin:0 0 14px}
.prow-id{display:flex;align-items:center;gap:11px;min-width:0;cursor:pointer;text-align:left}
.prow-id:hover .prow-nm{color:var(--blue)}
.prow-id:hover .prow-av{box-shadow:0 0 0 2px var(--blue)}
.prow-av{width:34px;height:34px;border-radius:50%;overflow:hidden;background:#e8e8e4;flex:none;transition:box-shadow .15s}
.prow-av img{width:100%;height:100%;object-fit:cover;display:block}
.prow-nm{font-size:14px;font-weight:700;color:var(--ink2);line-height:1.2;transition:color .15s}
.prow-role{font-size:12px;color:var(--t-faint)}
.prow-badge{font-size:11.5px;font-weight:700;padding:5px 11px;border-radius:999px;white-space:nowrap;flex:none}
.pb-warn{background:#f6efe4;color:#b8862f}
.pb-info{background:#eaeef6;color:#5470a8}
.pb-ok{background:#e7f1ea;color:#2f7d54}
.step{display:flex;align-items:center;min-height:0}
.step-node{display:inline-flex;align-items:center;justify-content:center;flex:none;margin:0;position:relative}
.step-tip{position:absolute;bottom:calc(100% + 9px);left:50%;transform:translateX(-50%) translateY(4px);background:var(--ink2);color:#fff;font-size:11px;font-weight:600;padding:6px 10px;border-radius:8px;white-space:nowrap;opacity:0;pointer-events:none;transition:.15s;z-index:6;box-shadow:0 6px 18px rgba(0,0,0,.18)}
.step-tip:after{content:"";position:absolute;top:100%;left:50%;transform:translateX(-50%);border:5px solid transparent;border-top-color:var(--ink2)}
.prow:hover .step-node:hover .step-tip{opacity:1;transform:translateX(-50%) translateY(0)}
.step-pill{font-size:11.5px;font-weight:600;padding:6px 13px;border-radius:999px;border:1px solid var(--line);background:#fff;color:var(--t-faint);white-space:nowrap}
.step.done .step-pill{border-color:#bcd8c6;color:#2f7d54}
.step.cur .step-pill{background:var(--blue);border-color:var(--blue);color:#fff;font-weight:700;box-shadow:0 2px 6px rgba(103,141,198,.35)}
.step-line{flex:1;height:2px;background-image:repeating-linear-gradient(90deg,var(--line) 0 5px,transparent 5px 10px);margin:0 4px;align-self:center}
.step-line.fill{background-image:none;background-color:#5a9c74}
.step-node{cursor:pointer;background:none;border:0;font:inherit;padding:0}
.step.done .step-node:hover .step-pill,.step.cur .step-node:hover .step-pill{filter:brightness(.97)}
.step-node.sel .step-pill{background:#2f7d54;border-color:#2f7d54;color:#fff;font-weight:700}
.sd-slot{display:none}
.sd-slot.on{display:block;margin-top:14px}
.sd{border:1px solid var(--line);border-radius:14px;background:var(--field);padding:18px 20px}
.sd-head{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:10px}
.sd-stage{font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;font-weight:800;color:var(--t-faint)}
.sd-verdict{font-size:12px;font-weight:700;padding:4px 11px;border-radius:999px;background:#e7f1ea;color:#2f7d54}
.sd-verdict.info{background:#eaeef6;color:#5470a8}
.sd-lead{font-size:13px;line-height:1.55;color:var(--ink2);margin:0 0 16px;max-width:72ch}
.sd-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:13px 22px;margin-bottom:16px}
.sd-metric-t{display:flex;justify-content:space-between;align-items:baseline;font-size:12.5px;color:var(--t-faint);margin-bottom:6px}
.sd-metric-t b{font-size:13px;color:var(--ink2);font-weight:700}
.sd-metric-t b.ok{color:#2f7d54}
.sd-bar{height:6px;background:#e3e3de;border-radius:999px;overflow:hidden}
.sd-bar i{display:block;height:100%;background:var(--blue);border-radius:999px}
.sd-ev{background:#fff;border:1px solid var(--line);border-radius:10px;padding:13px 15px;font-size:12.5px;line-height:1.6;color:var(--ink2);margin-bottom:14px}
.sd-ev-h{font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;font-weight:700;color:var(--t-faint);margin:0 0 8px}
.sd-ev pre{font-family:ui-monospace,Menlo,monospace;font-size:11.5px;line-height:1.5;background:#f6f6f3;border-radius:8px;padding:11px 13px;overflow-x:auto;margin:8px 0;white-space:pre}
.sd-q{color:var(--t-faint)}
.sd-soft{background:#fff;border:1px solid var(--line);border-radius:10px;padding:14px 15px;margin-bottom:14px}
.sd-soft-h{margin-bottom:14px}
.sd-soft-h p{font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;font-weight:700;color:var(--t-faint);margin:0}
.sd-soft-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:16px 26px;margin-bottom:15px}
.sc-dim{display:grid;grid-template-columns:1fr auto;gap:6px 12px;align-items:center}
.sc-dim-n{font-size:13.5px;font-weight:600;text-transform:capitalize}
.sc-dim-s{font-size:12.5px;color:var(--t-mute);font-variant-numeric:tabular-nums}
.sc-bar{grid-column:1/-1;height:5.556px;min-height:5.556px;max-height:5.556px;line-height:0;border-radius:99px;background:var(--line);overflow:hidden;box-sizing:border-box;align-self:center}
.sc-bar i{display:block;height:5.556px;border-radius:99px;background:var(--ink2)}

.sd-soft-n{font-size:12.5px;line-height:1.6;color:var(--ink2);border-top:1px solid var(--line);padding-top:11px}
.sd-soft-n b{font-weight:700}
.sd-tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}
.sd-tag{font-size:11.5px;font-weight:600;color:var(--t-body);background:var(--field);border-radius:999px;padding:4px 10px}
.sd-actions{display:flex;gap:9px;flex-wrap:wrap;align-items:center}.sd-cal{display:inline-flex;align-items:center;gap:7px;font-size:12.5px;font-weight:600;color:#2f7a58}.sd-cal svg{width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:2.4}.sd-rw{display:grid}.sd-rw>div{display:grid;grid-template-columns:minmax(0,1fr) auto 150px;gap:14px;align-items:center;padding:9px 0;border-top:1px solid var(--line)}.sd-rw>div:first-child{border-top:0;padding-top:2px}.sd-rw b{font-weight:700;color:var(--ink2)}.sd-rw em{font-style:normal;font-size:11.5px;color:var(--t-faint);text-align:right}.sd-btn[disabled]{opacity:.6;cursor:default}
.sd-btn{font:inherit;font-size:12.5px;font-weight:600;border-radius:999px;padding:7px 15px;cursor:pointer;border:1px solid var(--line);background:#fff;color:var(--ink2);transition:border-color .15s}
.sd-btn:hover{border-color:#b8b9b6}
.sd-btn.pri{background:var(--ink2);border-color:var(--ink2);color:#fff}
.sd-btn.pri:hover{background:#000;border-color:#000}
.tr{display:flex;flex-direction:column;gap:10px}
.tr-mark{display:flex;align-items:center;gap:11px;font-size:10px;letter-spacing:.11em;text-transform:uppercase;font-weight:700;color:var(--t-faint);margin:12px 0 4px}
.tr-mark:before,.tr-mark:after{content:"";flex:1;height:1px;background:var(--line)}
.tr-mark:first-child{margin-top:0}
.tr-l{display:flex;flex-direction:column;gap:4px;max-width:74%}
.tr-l.me{align-self:flex-end;align-items:flex-end}
.tr-w{font-size:10.5px;font-weight:700;letter-spacing:.03em;color:var(--t-faint);padding:0 4px}
.tr-l p{margin:0;font-size:13px;line-height:1.6;color:var(--ink2);background:var(--field);border-radius:14px;border-bottom-left-radius:5px;padding:10px 14px;text-wrap:pretty}
.tr-l.me p{background:#fff;border:1px solid var(--line);border-bottom-left-radius:14px;border-bottom-right-radius:5px}
.sch-lead{font-size:13px;line-height:1.6;color:var(--t-body);margin:0 0 18px;max-width:60ch}
.sch-l{font-size:10.5px;letter-spacing:.11em;text-transform:uppercase;font-weight:700;color:var(--t-faint);margin:0 0 9px}
.sch-opts{display:flex;flex-direction:column;gap:8px;margin-bottom:20px}
.sch-o{display:flex;align-items:center;gap:12px;border:1px solid var(--line);border-radius:12px;padding:11px 14px;cursor:pointer;background:#fff;font:inherit;text-align:left;transition:border-color .15s,background .15s}
.sch-o:hover{border-color:#b8b9b6}
.sch-o.on{border-color:var(--ink2);background:#fbfbfa}
.sch-o svg,.sch-o .sch-ic{width:24px;height:24px;flex:none;border-radius:5px;object-fit:contain}
.sch-o b{font-size:13.5px;font-weight:600;flex:1}
.sch-o i{width:16px;height:16px;border-radius:50%;border:1.5px solid var(--line);flex:none}
.sch-o.on i{border-color:var(--ink2);box-shadow:inset 0 0 0 4px var(--ink2)}
.sch-in{width:100%;box-sizing:border-box;font:inherit;font-size:13px;border:1px solid var(--line);border-radius:11px;padding:11px 14px;outline:none;color:var(--ink2);margin-bottom:9px}
.sch-in:focus{border-color:var(--blue)}
.sch-hint{font-size:11.5px;line-height:1.5;color:var(--t-faint);margin:0 0 20px}
.sch-done{display:flex;flex-direction:column;align-items:center;text-align:center;gap:10px;padding:14px 0 4px}
.sch-done svg{width:38px;height:38px;stroke:#2f7d54;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.sch-done b{font-size:15px}
.sch-done p{font-size:12.5px;line-height:1.55;color:var(--t-body);margin:0;max-width:44ch}
.sub.cfm{width:min(430px,100%);padding:26px 28px 24px;text-align:left}
.cfm h4{font-family:"P22Mackinac",serif;font-weight:500;font-size:19px;letter-spacing:-0.015em;margin:0 0 8px}
.cfm p{font-size:13px;line-height:1.6;color:var(--t-body);margin:0 0 20px}
.sd-actions .sd-rank{margin-left:auto}.bf-btn:disabled,.bf-btn:disabled:hover{background:var(--line)!important;border-color:var(--line)!important;color:var(--t-mute)!important;cursor:not-allowed;box-shadow:none!important;transform:none!important}.sd-wait{margin-left:auto;font-size:12.5px;color:var(--t-mute)}.sd-confd{display:inline-flex;align-items:center;gap:6px;font-size:12.5px;font-weight:600;color:#2f7a55}.sd-confd svg{width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round}.bf-dl{display:flex;flex-direction:column;gap:8px;width:100%;align-self:stretch;text-align:left}.bf-dl .bf-dl-h{display:flex;width:100%;justify-content:space-between;align-items:baseline;gap:12px}.bf-dl-h>span:first-child{margin-right:auto;text-align:left}.bf-dl-h,.bf-dl-left{margin-left:auto;text-align:right}.bf-dl.closed .bf-dl-bar i{background:#d98a2b}.bf-dl-f{display:flex;justify-content:space-between;align-items:baseline;gap:12px}.bf-dl-h{font-size:13px;color:var(--t-body)}.bf-dl-h b{font-weight:600;color:var(--ink2)}.bf-dl-left{font-size:12px;font-weight:700;color:#a8661b}.bf-dl-bar{height:6px;border-radius:999px;background:var(--line);overflow:hidden}.bf-dl-bar i{display:block;height:100%;border-radius:999px;background:var(--ink2)}.bf-dl-left{margin-left:auto;text-align:right}.bf-dl.closed .bf-dl-bar i{background:#d98a2b}.bf-dl-f{font-size:11.5px;color:var(--t-mute)}.bf-empty{padding:36px 20px;text-align:center;font-size:13px;color:var(--t-mute)}.cfm.cfm-ovr{width:min(500px,100%)}.cfm-ovr .jbm-f{margin-bottom:20px}.cfm-rm{display:block;width:100%;margin-top:8px;font:inherit;font-size:13px;font-weight:600;color:oklch(0.5 0.15 25);background:transparent;border:1px dashed oklch(0.82 0.06 25);border-radius:999px;padding:10px 14px;cursor:pointer;transition:.16s}.cfm-rm:hover{background:oklch(0.97 0.02 25)}.cfm-rm.on{background:oklch(0.55 0.15 25);border:1px solid oklch(0.55 0.15 25);color:#fff}.cfm-act .sd-btn.cfm-yes:not(.warn){background:var(--ink2);border-color:var(--ink2);color:#fff}.cfm-who{display:flex;align-items:center;gap:10px;margin-bottom:16px}
.cfm-who img{width:34px;height:34px;border-radius:50%;object-fit:cover;flex:none}
.cfm-who b{font-size:13.5px;display:block}
.cfm-who em{font-style:normal;font-size:11.5px;color:var(--t-faint)}
.cfm-act{display:flex;gap:9px;justify-content:flex-end}
.cfm-act .sd-btn.warn{background:oklch(0.55 0.15 25);border-color:oklch(0.55 0.15 25);color:#fff}
.cfm-act .sd-btn.warn:hover{background:oklch(0.48 0.16 25);border-color:oklch(0.48 0.16 25)}
.pipe-card{border:1px solid var(--line);border-radius:16px;background:#fff;box-shadow:var(--shadow-card);padding:20px 22px}
.pipe-ins{margin-bottom:18px;padding-bottom:18px;border-bottom:1px solid var(--line)}
.pipe-card:not(.exp) .pipe-mini{cursor:pointer}
.pipe-card-head{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:8px;cursor:pointer}
.pipe-hint{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:50%;background:var(--field);border:1px solid var(--line);flex:none}
.pipe-chev{width:15px;height:15px;stroke:var(--ink2);fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;transition:transform .2s}
.pipe-card.exp .pipe-chev{transform:rotate(180deg)}
.pipe-card .pipe-h{margin:0}
.pipe-exp{display:inline-flex;align-items:center;gap:6px;font:inherit;font-size:12.5px;font-weight:600;color:var(--ink2);background:var(--field);border:1px solid var(--line);border-radius:999px;padding:6px 13px;cursor:pointer;transition:.15s}
.pipe-exp:hover{border-color:#b8b9b6}
.pipe-exp svg{width:14px;height:14px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;transition:transform .2s}
.pipe-card.exp+.pipe-exp-wrap .pipe-exp svg{transform:rotate(180deg)}
.pipe-exp-wrap{display:flex;justify-content:center;margin-top:16px}
.pipe-mini{padding-top:6px}
.pmini-row{display:flex;align-items:flex-start}
.pmini-row .step-line{flex:1;align-self:flex-start;margin-top:12px}
.pmini-node{display:flex;flex-direction:column;align-items:center;gap:11px;flex:none;text-align:center}
.pmini-node .step-pill{white-space:nowrap}
.pmini-avs{display:flex;align-items:center;justify-content:center;min-height:30px;flex-wrap:wrap;gap:0}
.pmini-av{width:30px;height:30px;border-radius:50%;overflow:hidden;border:2px solid #fff;box-shadow:0 0 0 1px var(--line);margin-left:-8px;background:#e8e8e4}
.pmini-av:first-child{margin-left:0}
.pmini-av img{width:100%;height:100%;object-fit:cover;display:block}
.pmini-more{display:grid;place-items:center;width:32px;height:32px;border-radius:50%;margin-left:-9px;background:var(--field);border:2px solid #fff;box-shadow:0 0 0 1px var(--line);font-size:11px;font-weight:700;color:var(--t-body)}
.pmini-none{display:grid;place-items:center;min-height:32px;color:var(--line);font-size:18px}
.pmini-n{font-size:12px;font-weight:700;color:var(--t-faint);font-variant-numeric:tabular-nums}
.pmini-stat{font-family:"P22Mackinac",serif;font-weight:500;font-size:26px;letter-spacing:-.02em;color:var(--ink2);line-height:1;font-variant-numeric:tabular-nums;min-height:32px;display:flex;align-items:center}
.pmini-sub{font-size:11.5px;color:var(--t-faint)}
.pipe-bar{display:flex;align-items:center;justify-content:space-between;gap:14px;margin:30px 0 18px}
.pipe-filters{display:contents}.pipe-filters[hidden]{display:none}
.pipe-bar .pipe-h{margin:0}
.pipe-bar-r{display:flex;align-items:center;gap:10px;margin-left:auto}
.bf-flag{display:inline-flex;align-items:center;gap:7px;font-size:12px;font-weight:700;color:#8a5f18;background:rgba(201,138,58,.13);border-radius:999px;padding:5px 12px}
.bf-flag i{width:6px;height:6px;border-radius:50%;background:#c98a3a}
.bf{border:0;border-radius:16px;background:transparent;box-shadow:none;padding:22px 0}
.pipe-empty{max-width:520px;margin:34px auto 0;background:#fff;border:1px solid var(--line);border-radius:16px;box-shadow:var(--shadow-card);padding:38px 36px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:12px;animation:peIn .42s cubic-bezier(.2,.7,.3,1) both}
@keyframes peIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
.pipe-empty-ic{width:42px;height:42px;border-radius:50%;background:var(--field);border:1px solid var(--line);display:grid;place-items:center}
.pipe-empty-ic svg{width:19px;height:19px;fill:none;stroke:var(--ink2);stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.pipe-empty h3{margin:0;font-family:"P22Mackinac",serif;font-weight:500;font-size:18px;letter-spacing:-.01em;color:var(--ink2)}
.pipe-empty p{margin:0;font-size:13.5px;line-height:1.6;color:var(--t-body);text-wrap:pretty}
.pipe-empty span.pe-tag{font-size:10.5px;letter-spacing:.09em;text-transform:uppercase;font-weight:800;color:var(--t-faint)}
.jbm-back{position:fixed;inset:0;background:rgba(31,33,32,.42);backdrop-filter:blur(3px);z-index:320;display:none;align-items:center;justify-content:center;padding:24px;opacity:0;transition:opacity .22s ease}
.jbm-back.on{display:flex;opacity:1}
.jbm{width:min(460px,100%);background:#fff;border:1px solid var(--line);border-radius:18px;box-shadow:0 26px 70px rgba(31,33,32,.24);padding:28px 28px 22px;transform:translateY(10px) scale(.985);transition:transform .26s cubic-bezier(.2,.7,.3,1)}
.jbm-back.on .jbm{transform:none}
.jbm-step{font-size:10.5px;letter-spacing:.09em;text-transform:uppercase;font-weight:800;color:var(--t-faint);display:block;margin-bottom:8px}
.jbm-t{margin:0 0 6px;font-family:"P22Mackinac",serif;font-weight:500;font-size:20px;letter-spacing:-.01em;color:var(--ink2)}
.jbm-p{margin:0 0 20px;font-size:13.5px;line-height:1.6;color:var(--t-body);text-wrap:pretty}
.jbm-l{display:block;font-size:12px;font-weight:700;letter-spacing:.02em;color:var(--ink2);margin-bottom:8px}
.jbm-f{margin-bottom:18px}
.jbm-row{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:12px}
.jbm-row>.jbm-f{margin-bottom:18px}
.jbm-f .jbm-row{margin:0}
.jbm-lh{font-weight:600;color:var(--t-faint);letter-spacing:0;margin-left:4px}
.jbm-money{display:flex;align-items:center;gap:6px;background:var(--field);border:1px solid var(--field);border-radius:999px;padding:0 16px;height:46px;box-sizing:border-box;cursor:text;transition:border-color .15s,box-shadow .15s,background .15s}
.jbm-money:hover{border-color:#c9c8c3}
.jbm-money:focus-within{background:#fff;border-color:#8fa7cc;box-shadow:0 0 0 3px rgba(103,141,198,.16)}
.jbm-money i{font-style:normal;font-size:12px;font-weight:600;color:var(--t-faint);margin-right:2px}
.jbm-money b{font-size:14px;font-weight:600;color:var(--t-mute)}
.jbm-money input{flex:1;min-width:0;border:0;background:none;outline:none;font:inherit;font-size:14px;color:var(--ink2);padding:0;font-variant-numeric:tabular-nums}
.jbm-seg{display:flex;gap:8px}
.jbm-seg button{flex:1;font:inherit;font-size:13.5px;font-weight:600;color:var(--t-body);background:var(--field);border:1px solid var(--field);border-radius:999px;padding:11px 14px;cursor:pointer;transition:.16s}
.jbm-seg button:hover{border-color:#c9c8c3}
.jbm-seg button.on{background:var(--ink2);border-color:var(--ink2);color:#fff}
.jbm-dd{position:relative}
.jbm-dd>button{width:100%;box-sizing:border-box;display:flex;align-items:center;gap:9px;font:inherit;font-size:14px;color:var(--ink2);background:var(--field);border:1px solid var(--field);border-radius:999px;padding:12px 16px;cursor:pointer;text-align:left}
.jbm-dd>button:hover{border-color:#c9c8c3}
.jbm-dd.open>button{background:#fff;border-color:#8fa7cc;box-shadow:0 0 0 3px rgba(103,141,198,.16)}
.jbm-dd .jf{width:22px;height:16px;object-fit:cover;border-radius:2px;flex:none}
.jbm-dd .jv{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.jbm-dd>button svg{width:14px;height:14px;stroke:var(--t-mute);fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex:none;transition:transform .18s}
.jbm-dd.open>button svg{transform:rotate(180deg)}
.jbm-menu{position:absolute;top:calc(100% + 8px);left:0;right:0;z-index:5;background:#fff;border:1px solid var(--line);border-radius:14px;box-shadow:0 16px 40px rgba(31,33,32,.16);padding:8px;display:none}
.jbm-dd.open .jbm-menu{display:block}
.jbm-search{width:100%;box-sizing:border-box;font-family:inherit;font-size:13.5px;color:var(--ink2);background:var(--field);border:1px solid var(--field);border-radius:999px;padding:9px 14px;outline:none;margin-bottom:6px}
.jbm-search:focus{border-color:#8fa7cc;background:#fff}
.jbm-list{max-height:220px;overflow-y:auto}
.jbm-o{display:flex;align-items:center;gap:10px;padding:9px 11px;border-radius:9px;cursor:pointer;font-size:13.5px;color:var(--t-body)}
.jbm-o:hover{background:var(--field)}
.jbm-o.on,.jbm-o.on:hover{background:var(--ink2);color:#fff}
.jbm-foot{display:flex;align-items:center;justify-content:flex-end;gap:10px;margin-top:4px}
.jbm-cancel{font:inherit;font-size:13px;font-weight:600;color:var(--t-mute);background:none;border:0;cursor:pointer;padding:10px 6px}
.jbm-cancel:hover{color:var(--ink2)}
.jbm-go{font:inherit;font-size:13.5px;font-weight:600;color:#fff;background:var(--ink2);border:1px solid var(--ink2);border-radius:999px;padding:11px 22px;cursor:pointer}
.jbm-go:hover{opacity:.9}
.jbm.jbm-wide{width:min(900px,100%)}
.jbm.jbm-wide,.jbm.jbm-solo{max-height:calc(100vh - 48px);overflow-y:auto;box-sizing:border-box}
.jbm.jbm-solo{width:min(460px,100%)}
.jbm-cols{display:grid;grid-template-columns:minmax(0,1fr) 1px minmax(0,1fr);gap:28px}
.jbm-solo .jbm-cols{grid-template-columns:minmax(0,1fr)}
.jbm-div{background:var(--line)}
.jbm .jbm-pipe,.jbm .jbm-div{display:none}.jbm.jbm-wide{width:min(460px,100%)}.jbm.jbm-wide .jbm-cols{grid-template-columns:minmax(0,1fr)}
.jbm-pipe{display:flex;flex-direction:column;min-width:0}
.jbm-stages{display:flex;flex-direction:column;gap:8px;max-height:min(300px,calc(100vh - 360px));min-height:96px;overflow-y:auto;padding:2px;margin-bottom:12px}
.jbm-st{display:flex;align-items:center;gap:10px;background:var(--field);border:1px solid var(--field);border-radius:999px;padding:9px 12px 9px 10px;font-size:13.5px;font-weight:600;color:var(--ink2);cursor:grab;user-select:none;transition:border-color .15s,opacity .15s}
.jbm-st:hover{border-color:#c9c8c3}
.jbm-st.drag{opacity:.4}
.jbm-st.new{background:#fff;border-color:var(--line)}
.jbm-st .gr{display:grid;grid-template-columns:repeat(2,3px);gap:3px;flex:none}
.jbm-st .gr i{width:3px;height:3px;border-radius:50%;background:var(--t-faint)}
.jbm-st .n{flex:none;width:22px;height:22px;border-radius:50%;background:#fff;border:1px solid var(--line);display:grid;place-items:center;font-size:11px;font-weight:700;color:var(--t-mute)}
.jbm-st .tx{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.jbm-st .tg{font-size:10.5px;letter-spacing:.06em;text-transform:uppercase;font-weight:800;color:var(--t-faint)}
.jbm-st .rm{flex:none;width:24px;height:24px;border-radius:50%;border:0;background:none;cursor:pointer;display:grid;place-items:center;color:var(--t-mute);font-size:16px;line-height:1;padding:0}
.jbm-st .rm:hover{background:var(--field);color:var(--ink2)}
.jbm-add{position:relative}
.jbm-addbtn{width:100%;font:inherit;font-size:13.5px;font-weight:600;color:var(--t-body);background:#fff;border:1px dashed #c9c8c3;border-radius:999px;padding:10px 16px;cursor:pointer}
.jbm-addbtn:hover{border-style:solid;color:var(--ink2)}
.jbm-add.open .jbm-addbtn{border-style:solid;border-color:#8fa7cc;box-shadow:0 0 0 3px rgba(103,141,198,.16)}
.jbm-addmenu{position:absolute;bottom:calc(100% + 8px);left:0;right:0;z-index:5;background:#fff;border:1px solid var(--line);border-radius:14px;box-shadow:0 16px 40px rgba(31,33,32,.16);padding:8px;display:none}
.jbm-add.open .jbm-addmenu{display:block}
.jbm-addh{display:block;font-size:10.5px;letter-spacing:.09em;text-transform:uppercase;font-weight:800;color:var(--t-faint);padding:6px 11px 4px}
.jbm-cols+.jbm-foot{margin-top:22px;padding-top:18px;border-top:1px solid var(--line)}
@media (max-width:760px){.jbm-cols{grid-template-columns:minmax(0,1fr)}.jbm-div{height:1px}}
.bf-focus{display:flex;align-items:center;gap:14px;max-width:900px;margin:0 auto}
.bf-nav{width:34px;height:34px;border-radius:50%;border:1px solid var(--line);background:#fff;cursor:pointer;display:grid;place-items:center;flex:none}
.bf-nav svg{width:16px;height:16px;stroke:var(--ink2);fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.bf-nav:hover{border-color:var(--ink2)}
.bf-nav[disabled]{opacity:.3;cursor:default}
.bf-stack{flex:1;min-width:0;overflow:visible;padding:18px 0;margin:-18px 0}
.bf-slide{display:flex;align-items:center;gap:12px;transition:transform .35s cubic-bezier(.2,.7,.3,1);will-change:transform}
.bf-mini{border:1px solid var(--line);border-radius:12px;background:#fff;padding:11px 12px;text-align:center;flex:none;width:auto;min-width:132px;cursor:pointer;opacity:.72;box-sizing:border-box}
.bf-mini .bf-pill{white-space:nowrap}
.bf-mini:hover{opacity:1;border-color:#c9c8c3}
.bf-mini.far{min-width:104px;opacity:.45}
.bf-mini-n{font-family:"P22Mackinac",serif;font-weight:500;font-size:20px;line-height:1.1;display:block;margin-top:7px;color:var(--ink2);font-variant-numeric:tabular-nums}
.bf-sub{font-size:11.5px;color:var(--t-faint)}
.bf-mini .bf-sub{display:block;margin-top:3px}
.bf-big{border:1px solid var(--ink2);border-radius:16px;background:#fff;padding:20px 24px;flex:none;width:380px;box-shadow:0 12px 30px -18px rgba(50,52,50,.4)}
.bf-big-top{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:12px}
.bf-n{display:flex;align-items:baseline;gap:9px}
.bf-n b{font-family:"P22Mackinac",serif;font-weight:400;font-size:44px;line-height:1;letter-spacing:-.02em;color:var(--ink2);font-variant-numeric:tabular-nums}
.bf-note{font-size:13px;line-height:1.55;color:var(--t-body);margin:12px 0 14px;text-wrap:pretty}
.bf-note b{color:var(--ink2)}
.bf-big-f{display:flex;align-items:center;gap:12px;flex-wrap:wrap}
.bf-avs{display:flex}
.bf-avs img{width:26px;height:26px;border-radius:50%;object-fit:cover;border:2px solid #fff;margin-left:-9px;background:var(--field)}
.bf-avs img:first-child{margin-left:0}
.bf-pill{display:inline-flex;align-items:center;font-size:11.5px;font-weight:700;color:#2f7a58;background:rgba(47,122,88,.09);border-radius:999px;padding:4px 11px;white-space:nowrap}
.bf-pill.dark{background:var(--ink2);color:#fff}
.bf-pill.dim{color:var(--t-body);background:var(--field)}
.bf-track{display:flex;align-items:center;margin:22px auto 0;width:min(560px,100%)}
.bf-track .d{width:9px;height:9px;border-radius:50%;background:var(--line);flex:none}
.bf-track .d.done{background:#2f7a58;opacity:.5}
.bf-track .d.cur{background:var(--ink2);width:11px;height:11px}
.bf-track .l{flex:1;height:1px;background:var(--line)}
.bf-track .l.done{background:rgba(47,122,88,.4)}
.bf-cap{text-align:center;font-size:12.5px;color:var(--t-faint);margin:12px 0 0}
.bf-cap button{font:inherit;font-size:12.5px;font-weight:700;color:var(--ink2);background:transparent;border:0;cursor:pointer;text-decoration:underline;text-underline-offset:3px;padding:0}
.bf-exp{margin-top:22px;padding-top:24px;border-top:0}
.bf-exp-h{display:flex;align-items:baseline;justify-content:center;gap:10px;max-width:900px;margin:0 auto 16px}
.bf-exp-h b{font-family:"P22Mackinac",serif;font-weight:500;font-size:17px;letter-spacing:-.01em;color:var(--ink2)}
.bf-rail{display:flex;align-items:center;justify-content:center;gap:8px;flex-wrap:wrap;margin-bottom:20px}
.bf-rail-b{display:inline-flex;align-items:center;gap:8px;font:inherit;font-size:12.5px;font-weight:600;color:var(--t-body);background:#fff;border:1px solid var(--line);border-radius:999px;padding:7px 14px;cursor:pointer}
.bf-rail-b b{color:var(--ink2)}
.bf-rail-b.on,.bf-rail-b.on b{background:var(--ink2);border-color:var(--ink2);color:#fff}
.bf-rail-b:not(.on):hover{border-color:#c9c8c3}
.bf-wrap{max-width:900px;margin:0 auto}
.bf-stat{position:relative;background:#fff;border:1px solid var(--line);border-radius:14px;overflow:hidden;margin-bottom:18px;cursor:pointer;transition:border-color .18s ease}
.bf-stat:hover{border-color:#d8d7d2}
.bf-stat-g{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:0}
.bf-stat-g>div+div{border-left:1px solid var(--line)}
.bf-stat-g>div{background:#fff;padding:13px 16px}
.bf-stat-g>div:last-child{padding-right:52px}
.bf-stat .ins{display:none;font-size:11.5px;line-height:1.55;color:var(--t-body);margin-top:11px;padding-top:10px;border-top:1px solid var(--line);text-wrap:pretty}
.bf-stat.on .ins{display:block}
.bf-stat-x{position:absolute;top:15px;right:14px;width:26px;height:26px;border-radius:50%;border:1px solid var(--line);display:flex;align-items:center;justify-content:center;color:var(--t-faint);background:#fff;transition:transform .2s ease,border-color .18s ease}
.bf-stat-x svg{width:13px;height:13px}
.bf-stat.on .bf-stat-x{transform:rotate(180deg)}
.bf-stat:hover .bf-stat-x{border-color:#c9c8c3;color:var(--ink2)}
.bf-stat .v{font-family:"P22Mackinac",serif;font-weight:500;font-size:22px;line-height:1.1;color:var(--ink2);font-variant-numeric:tabular-nums}
.bf-stat .v em{font-style:normal;font-size:12px;color:var(--t-faint)}
.bf-stat .l{font-size:11.5px;color:var(--t-faint);margin-top:5px}
.bf-list{border:1px solid var(--line);border-radius:16px;overflow:hidden}
.bf-slot{display:none}
.bf-slot.on{display:block;padding:0 18px 16px;background:#fff}
.bf-slot .sd{border-radius:12px;background:#fff}
.bf-slot .sd-verdict{background:#e7ece5;color:#3d6b4e}
.bf-slot .sd-actions{display:flex;margin-top:2px}
.bf-slot .sd-head{display:none}
.wd{border:1px solid var(--line);border-radius:14px;background:#fff;padding:18px}
.wd-top{display:flex;align-items:center;gap:14px}
.wd-medal{width:34px;height:34px;border-radius:50%;display:grid;place-items:center;font-weight:800;font-size:14px;color:#6b5a1f;background:#f3e6bd;flex:none}
.wd-medal.m1{background:#e6e6e4;color:#54544f}
.wd-medal.m2{background:#eddfd2;color:#6d523c}
.wd-medal.m-n{background:var(--field);color:var(--t-mute)}
.wd-pl{margin:0;font-size:14px;font-weight:700;color:var(--ink2)}
.wd-sub{margin:2px 0 0;font-size:12.5px;color:var(--t-mute)}
.wd-amt{margin-left:auto;font-family:"P22Mackinac",serif;font-size:22px;color:var(--ink2)}
.wd-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1px;background:var(--line);border:1px solid var(--line);border-radius:12px;overflow:hidden;margin:16px 0 14px}
.wd-m{background:#fff;padding:12px 14px;display:flex;flex-direction:column;gap:3px}
.wd-m b{font-size:16px;font-weight:600;color:var(--ink2)}
.wd-m span{font-size:11.5px;color:var(--t-faint)}
.wd-act{display:flex;gap:10px;justify-content:flex-end;align-items:center;margin-top:22px}
.wd-rated{display:inline-flex;align-items:center;gap:6px;font-size:12.5px;font-weight:600;color:var(--ink2);margin-right:auto}.wd-rated svg{width:15px;height:15px;fill:#d8a531;stroke:#d8a531;stroke-width:1.6}.wd-act .cc-msg{margin-right:auto}.wd-paid{font-size:12.5px;font-weight:600;color:#3d6b4e}
.wd-schd{font-size:12.5px;font-weight:600;color:var(--ink2);background:var(--field);border-radius:999px;padding:9px 15px;white-space:nowrap}
.rv-stars{display:flex;gap:6px}
.rv-stars button{background:none;border:0;padding:2px;cursor:pointer;line-height:0}
.rv-stars svg{width:28px;height:28px;stroke:#c9c8c3;fill:none;stroke-width:1.6;transition:.14s}
.rv-stars button.on svg{fill:#d8a531;stroke:#d8a531}
.rv-stars button:hover svg{stroke:#d8a531}
.rv-note{font-size:12.5px;color:var(--t-mute);margin:8px 0 0;min-height:18px}
.rv-ta{width:100%;box-sizing:border-box;font-family:inherit;font-size:13.5px;line-height:1.55;color:var(--ink2);background:var(--field);border:1px solid var(--field);border-radius:14px;padding:12px 14px;min-height:96px;resize:vertical;outline:none}
.rv-ta:focus{background:#fff;border-color:#8fa7cc;box-shadow:0 0 0 3px rgba(103,141,198,.16)}
.rv-ta::placeholder{color:var(--t-faint)}
.jbm-go[disabled]{opacity:.45;cursor:not-allowed}
.sub-back{position:fixed;inset:0;z-index:460;display:flex;align-items:center;justify-content:center;padding:30px;background:rgba(28,28,26,.3);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);opacity:0;transition:opacity .2s ease}
.sub-back.on{opacity:1}
.sub{position:relative;width:min(880px,100%);max-height:88vh;overflow:auto;background:#fff;border:1px solid var(--line);border-radius:18px;box-shadow:0 24px 60px rgba(28,28,26,.22);padding:26px 30px 30px;transform:translateY(10px) scale(.985);transition:transform .22s cubic-bezier(.2,.7,.3,1);scrollbar-width:none}
.sub::-webkit-scrollbar{display:none}
.sub-back.on .sub{transform:none}
.sub-x{position:absolute;top:20px;right:24px;width:32px;height:32px;border:0;background:var(--field);border-radius:50%;cursor:pointer;display:grid;place-items:center}
.sub-x svg{width:15px;height:15px;stroke:var(--ink2);stroke-width:2;fill:none;stroke-linecap:round}
.sub-hd{display:flex;align-items:center;gap:12px;padding-right:44px;margin-bottom:4px}
.sub-hd img{width:40px;height:40px;border-radius:50%;object-fit:cover;flex:none}
.sub-hd b{font-size:15px}
.sub-hd em{display:block;font-style:normal;font-size:12px;color:var(--t-faint);margin-top:2px}
.sub-t{font-family:"P22Mackinac",serif;font-weight:500;font-size:20px;letter-spacing:-0.015em;margin:16px 0 4px}
.sub-meta{display:flex;flex-wrap:wrap;gap:6px 18px;font-size:12px;color:var(--t-faint);margin-bottom:18px}
.sub-sec{border-top:1px solid var(--line);padding-top:16px;margin-top:16px}
.sub-sec h5{font-size:10.5px;letter-spacing:.11em;text-transform:uppercase;font-weight:700;color:var(--t-faint);margin:0 0 9px}
.sub-sec p{font-size:13px;line-height:1.6;color:var(--ink2);margin:0 0 10px;max-width:74ch}
.sub-files{display:flex;flex-direction:column;gap:0;border:1px solid var(--line);border-radius:10px;overflow:hidden}
.sub-file{display:grid;grid-template-columns:1fr auto auto;gap:14px;align-items:center;padding:9px 13px;font-size:12.5px;border-top:1px solid var(--line)}
.sub-file:first-child{border-top:0}
.sub-file code{font-family:ui-monospace,Menlo,monospace;font-size:12px;color:var(--ink2)}
.sub-file span{font-size:11.5px;color:var(--t-faint);font-variant-numeric:tabular-nums}
.sub-pre{font-family:ui-monospace,Menlo,monospace;font-size:12px;line-height:1.65;background:#fbfbfa;border:1px solid var(--line);border-radius:10px;padding:13px 15px;overflow-x:auto;white-space:pre;color:#33352f;margin:0}
.sub-tests{display:flex;flex-direction:column;gap:5px;font-family:ui-monospace,Menlo,monospace;font-size:12px}
.sub-tests div{display:flex;gap:9px;align-items:baseline}
.sub-tests .ok{color:#2f7d54;font-weight:700}
.sub-tests .no{color:#b4453f;font-weight:700}
.sub-kv{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px 20px}
.sub-kv div{font-size:12.5px}
.sub-kv b{display:block;font-size:16px;font-weight:700;margin-bottom:2px}
.sub-kv em{font-style:normal;color:var(--t-faint);font-size:11.5px}
.cmp-bar{display:flex;align-items:center;justify-content:space-between;gap:14px;margin:0 0 14px}
.cmp-bar p{margin:0;font-size:12.5px;color:var(--t-faint)}
.cmp-bar p b{color:var(--ink2)}
.cmp{border:1px solid var(--line);border-radius:16px;overflow:hidden;background:#fff;display:flex}
.cmp-fix{flex:none;width:186px;position:relative;z-index:2;box-shadow:6px 0 12px -8px rgba(28,28,26,.18)}
.cmp-scroll{flex:1;min-width:0;overflow-x:auto;overflow-y:hidden}
.cmp-scroll::-webkit-scrollbar{height:8px}
.cmp-scroll::-webkit-scrollbar-thumb{background:#d8d8d3;border-radius:99px}
.cmp-cols{display:grid;grid-auto-flow:column;grid-auto-columns:212px}
.cmp-col{display:flex;flex-direction:column;border-left:1px solid var(--line)}
.cmp-hd{background:#fbfaf8;border-bottom:1px solid var(--line);padding:16px 18px;display:flex;flex-direction:column;gap:9px;align-items:flex-start;height:136px;box-sizing:border-box;justify-content:center}
.cmp-hd.lbl{justify-content:flex-end}
.cmp-rk{font-size:10px;letter-spacing:.1em;text-transform:uppercase;font-weight:700;color:var(--t-faint)}
.cmp-who{display:flex;align-items:center;gap:10px;min-width:0}
.cmp-who[data-who]{cursor:pointer}
.cmp-who[data-who]:hover .cmp-nm{color:var(--blue)}
.cmp-who img{width:38px;height:38px;border-radius:50%;object-fit:cover;flex:none;background:var(--field)}
.cmp-nm{display:block;font-size:13.5px;font-weight:700;color:var(--ink2);line-height:1.25;transition:color .15s;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:146px}
.cmp-rl{display:block;font-size:11.5px;color:var(--t-faint);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:146px}
.cmp-tot{font-family:"P22Mackinac",serif;font-weight:500;font-size:26px;letter-spacing:-.02em;color:var(--ink2);line-height:1;font-variant-numeric:tabular-nums}
.cmp-tot em{font-style:normal;font-size:13px;color:var(--t-faint)}
.cmp-sec{background:#f6f6f3;border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:8px 18px;font-size:10px;letter-spacing:.12em;text-transform:uppercase;font-weight:700;color:var(--t-faint);height:32px;box-sizing:border-box;white-space:nowrap;overflow:hidden}
.cmp-c{padding:13px 18px;border-top:1px solid var(--line);display:flex;flex-direction:column;gap:6px;justify-content:center;min-width:0;height:64px;box-sizing:border-box}
.cmp-c.l{background:#fcfcfb;font-size:12.5px;font-weight:600;color:var(--t-body)}
.cmp-c.l .cmp-note{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.cmp-c+.cmp-c{border-left:0}
.cmp-v{display:flex;align-items:baseline;gap:7px;font-size:13.5px;font-weight:700;color:var(--ink2);font-variant-numeric:tabular-nums}
.cmp-v s{text-decoration:none;font-size:11px;font-weight:600;color:var(--t-faint)}
.cmp-c.best .cmp-v{color:var(--blue)}
.cmp-b{height:3.333px;border-radius:99px;background:#e9e7e2;position:relative;line-height:0;font-size:0}
.cmp-b i{position:absolute;inset:0 auto 0 0;border-radius:99px;background:#3a3c37}
.cmp-c.best .cmp-b i{background:var(--blue)}
.cmp-t{font-size:12.5px;color:var(--ink2);font-weight:600}
.cmp-note{font-size:11.5px;line-height:1.45;color:var(--t-faint)}
.cmp-foot{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 18px;border-top:1px solid var(--line);background:#fbfaf8}
.cmp-foot span{font-size:12px;color:var(--t-faint)}
.cmp-act{padding:14px 18px;border-top:1px solid var(--line);height:68px;box-sizing:border-box;display:flex;align-items:center}
.bf-row{display:grid;grid-template-columns:26px minmax(230px,1fr) 132px minmax(0,148px) 156px;align-items:center;gap:14px;padding:13px 18px;border-top:1px solid var(--line);background:#fff}
.bf-list.nosc .bf-row{grid-template-columns:26px 1fr 1fr 156px}
.bf-badges{display:flex;flex-wrap:nowrap;gap:4px;align-items:flex-start}
.bdg{width:76px;text-align:center}
.bdg-hex{position:relative;width:40px;height:44px;margin:0 auto 5px;display:grid;place-items:center;clip-path:polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%);background:var(--field)}
.bdg-hex svg{width:17px;height:17px;stroke:var(--t-mute);fill:none;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}
.bdg.earned .bdg-hex{background:rgba(103,141,198,.14)}
.bdg.earned .bdg-hex svg{stroke:var(--blue)}
.bdg.gold .bdg-hex{background:rgba(201,162,74,.16)}
.bdg.gold .bdg-hex svg{stroke:#a7842f}
.bdg-n{font-size:9.5px;font-weight:600;color:var(--t-body);line-height:1.3;display:block;white-space:nowrap}
.bf-row:first-child{border-top:0}
.bf-row.head{background:#fbfaf8;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--t-faint);font-weight:700;padding:9px 18px}
.bf-row:hover:not(.head){background:#fcfcfb}
.bf-rk{font-size:12.5px;font-weight:700;color:var(--t-faint)}
.bf-who{display:flex;align-items:center;gap:10px;min-width:0}
.bf-who img{width:30px;height:30px;border-radius:50%;object-fit:cover;flex:none}
.bf-who{cursor:pointer}
.bf-who:hover b{color:var(--blue)}
.bf-who b{font-size:13.5px;display:block;line-height:1.3;color:var(--ink2);transition:color .15s}
.bf-who em{font-style:normal;font-size:11.5px;color:var(--t-faint);white-space:nowrap}
.bf-sc{display:flex;align-items:center;gap:9px}
.bf-sc b{font-size:12.5px;width:46px;color:var(--ink2);font-variant-numeric:tabular-nums}
.bf-sc .bar{flex:1;height:3.333px;border-radius:99px;background:#e9e7e2;position:relative;line-height:0;font-size:0}
.bf-sc .bar i{position:absolute;inset:0 auto 0 0;border-radius:99px;background:#3a3c37}
.bf-verd{font-size:12px;color:var(--t-faint);line-height:1.4}
.bf-verd.warn{color:var(--t-faint);font-weight:400}
.bf-act{justify-self:end}
.bf-btn{font:inherit;font-size:12.5px;font-weight:700;color:#fff;background:var(--ink2);border:0;border-radius:999px;padding:9px 12px;cursor:pointer;white-space:nowrap}
.bf-row .bf-btn{width:auto}
.bf-btn:hover{background:var(--blue)}
.bf-btn.line{font-weight:600;color:var(--ink2);background:#fff;border:1px solid var(--line)}
.bf-btn.line:hover{background:#fff;border-color:#b8b9b6}
.bf-more{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 18px;border-top:1px solid var(--line);background:#fbfaf8;font-size:12.5px;color:var(--t-faint)}
@media (max-width:860px){.funnel{grid-template-columns:repeat(2,1fr)}.step-pill{font-size:10px;padding:5px 8px}.bf-focus{max-width:none}.bf-stack{overflow:hidden;margin:-18px -18px;padding:18px 0;touch-action:pan-y}.bf-big{width:calc(100vw - 96px);max-width:380px;padding:18px 20px}.bf-mini,.bf-mini.far{min-width:120px;align-self:stretch;display:flex;flex-direction:column;justify-content:center}.bf-nav{display:none}.bf-stat{grid-template-columns:repeat(2,1fr)}.bf-row{grid-template-columns:1fr;gap:8px}.bf-act{justify-self:start}}
.bi{margin:0 0 8px}
.bi-h{display:flex;align-items:baseline;gap:10px;font-size:11px;letter-spacing:.12em;text-transform:uppercase;font-weight:800;color:var(--t-faint);margin:0 0 14px}
.bi-h .bi-h-ch{text-transform:none;letter-spacing:0;font-weight:600;font-size:12.5px;color:var(--t-body)}
.bi-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin:16px 0 0}
.bi-card{border:1px solid var(--line);border-radius:14px;background:#fff;padding:18px 20px;display:flex;flex-direction:column;gap:16px}
.bi-card-h{display:flex;align-items:baseline;justify-content:space-between;gap:10px}
.bi-card-t{font-size:13px;font-weight:700;color:var(--ink2)}
.bi-card-sub{font-size:11.5px;color:var(--t-faint)}
.hist{display:grid;grid-template-columns:repeat(5,1fr);gap:12px}
.hist-col{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:0}
.hist-track{width:100%;height:104px;display:flex;align-items:flex-end;justify-content:center}
.hist-bar{width:100%;max-width:46px;border-radius:6px 6px 0 0;background:var(--blue);position:relative}
.hist-bar.top{background:#5a9c74}
.hist-n{position:absolute;bottom:calc(100% + 4px);left:-4px;right:-4px;text-align:center;font-size:11px;font-weight:700;color:var(--ink2);font-variant-numeric:tabular-nums}
.hist-x{font-size:10.5px;color:var(--t-faint);white-space:nowrap}
.grate{display:flex;flex-direction:column;gap:13px}
.grate-r{display:grid;grid-template-columns:1fr auto;gap:7px 12px;align-items:baseline}
.grate-k{font-size:12.5px;color:var(--t-body)}
.grate-v{font-size:12.5px;font-weight:700;color:var(--ink2);font-variant-numeric:tabular-nums}
.grate-bar{grid-column:1/-1;height:6px;border-radius:999px;background:var(--field);overflow:hidden}
.grate-bar i{display:block;height:100%;border-radius:999px;background:#5a9c74}
.perf{display:flex;flex-direction:column;gap:6px}
.perf-r{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 0;border-top:1px solid var(--line)}
.perf-r:first-child{border-top:0}
.perf-l{font-size:12.5px;color:var(--t-body)}
.perf-v{font-family:"P22Mackinac",serif;font-weight:500;font-size:21px;color:var(--ink2);font-variant-numeric:tabular-nums;letter-spacing:-.01em;line-height:1}
.perf-v em{font-style:normal;font-size:12px;color:var(--t-faint);font-family:inherit;font-weight:600;margin-left:2px}
.skc{display:flex;flex-direction:column;gap:12px}
.skc-r{display:grid;grid-template-columns:132px 1fr auto;gap:12px;align-items:center}
.skc-k{font-size:12.5px;color:var(--t-body);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.skc-bar{height:6px;border-radius:999px;background:var(--field);overflow:hidden}
.skc-bar i{display:block;height:100%;border-radius:999px;background:var(--blue)}
.skc-n{font-size:12px;font-weight:700;color:var(--t-faint);font-variant-numeric:tabular-nums}
@media (max-width:760px){.bi-grid{grid-template-columns:1fr}}
.pool-controls{display:flex;align-items:center;justify-content:center;gap:10px;flex-wrap:wrap;margin:0 0 18px;padding-bottom:18px;border-bottom:1px solid var(--line)}
.cha-dd{position:relative}
.pool-controls{position:relative;padding-left:112px;padding-right:112px}
.pool-controls #ddChal .cha-btn{max-width:225px}
.pool-imp{position:absolute;right:0;top:0;display:inline-flex;align-items:center;gap:7px;height:32px;box-sizing:border-box;padding:6px 15px;font:inherit;font-size:13px;font-weight:600;color:var(--ink2);background:#fff;border:1px solid var(--line);border-radius:999px;cursor:pointer;transition:border-color .15s,color .15s,box-shadow .15s}
.pool-imp:hover{border-color:var(--ink2)}
.pool-imp[hidden]{display:none}
.pool-imp svg{width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.imp-back{position:fixed;inset:0;z-index:520;display:flex;align-items:center;justify-content:center;padding:28px;background:rgba(28,28,26,.28);backdrop-filter:blur(7px);-webkit-backdrop-filter:blur(7px);opacity:0;pointer-events:none;transition:opacity .25s}
.imp-back.on{opacity:1;pointer-events:auto}
.imp{position:relative;width:min(540px,100%);max-height:88vh;overflow:auto;scrollbar-width:none;background:#fff;border:1px solid var(--line);border-radius:18px;box-shadow:0 24px 60px rgba(28,28,26,.22);padding:26px 28px 24px;transform:translateY(10px);transition:transform .28s}
.imp-back.on .imp{transform:none}
.imp::-webkit-scrollbar{display:none}
.imp-x{position:absolute;top:18px;right:20px;width:30px;height:30px;border:0;background:transparent;border-radius:50%;cursor:pointer;display:grid;place-items:center}
.imp-x:hover{background:var(--field)}
.imp-x svg{width:14px;height:14px;stroke:var(--ink2);stroke-width:2;fill:none;stroke-linecap:round}
.imp-t{font-family:"P22Mackinac",serif;font-weight:500;font-size:22px;letter-spacing:-.02em;color:var(--ink2);margin:0 0 6px;padding-right:36px}
.imp-p{font-size:13.5px;line-height:1.6;color:var(--t-body);margin:0 0 18px;text-wrap:pretty}
.imp-drop{border:1px dashed #c2c3bf;border-radius:14px;background:var(--field);padding:26px 20px;text-align:center;cursor:pointer;transition:border-color .15s,background .15s}
.imp-drop:hover,.imp-drop.hot{border-color:var(--blue);background:rgba(103,141,198,.07)}
.imp-drop svg{width:22px;height:22px;fill:none;stroke:var(--t-mute);stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;margin-bottom:8px}
.imp-drop b{display:block;font-size:14px;color:var(--ink2)}
.imp-drop span{display:block;font-size:12.5px;color:var(--t-faint);margin-top:4px}
.imp-fmts{display:flex;flex-wrap:wrap;gap:7px;margin:14px 0 0}
.imp-fmts span{font-size:11.5px;font-weight:700;letter-spacing:.04em;color:var(--t-mute);background:var(--field);border:1px solid var(--line);border-radius:999px;padding:4px 10px}
.imp-files{display:grid;gap:8px;margin:14px 0 0}
.imp-file{display:flex;align-items:center;gap:10px;border:1px solid var(--line);border-radius:12px;padding:10px 13px;font-size:13px;font-weight:600;color:var(--ink2)}
.imp-file em{font-style:normal;font-weight:400;color:var(--t-faint);margin-left:auto;font-size:12px}
.imp-or{display:flex;align-items:center;gap:12px;margin:18px 0 12px;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--t-faint)}
.imp-or::before,.imp-or::after{content:"";height:1px;background:var(--line);flex:1}
.imp-srcs{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.imp-src{display:flex;align-items:center;gap:9px;border:1px solid var(--line);border-radius:12px;padding:11px 13px;font:inherit;font-size:13px;font-weight:600;color:var(--ink2);background:#fff;cursor:pointer;text-align:left;transition:border-color .15s,background .15s}
.imp-src:hover{border-color:var(--ink2);background:var(--field)}
.imp-src.url-on{grid-column:1/-1;padding:0;border:0;background:transparent;cursor:default}
.imp-url{width:100%;box-sizing:border-box;font:inherit;font-size:13px;font-weight:600;color:var(--ink2);background:#fff;border:1px solid var(--line);border-radius:12px;padding:11px 13px}
.imp-url::placeholder{font-weight:400;color:var(--t-faint)}
.imp-url:focus{outline:0;border-color:var(--ink2)}
.imp-foot{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:22px}
.imp-note{font-size:12px;color:var(--t-faint);line-height:1.5;max-width:280px}
.imp-go{font:inherit;font-size:13.5px;font-weight:700;color:#fff;background:var(--ink2);border:0;border-radius:999px;padding:11px 22px;cursor:pointer;transition:opacity .15s}
.imp-go:hover{opacity:.85}
.imp-go:disabled{opacity:.35;cursor:default}
@media (max-width:900px){.imp-srcs{grid-template-columns:1fr}}
.cha-btn{display:inline-flex;align-items:center;gap:9px;max-width:440px;height:32px;box-sizing:border-box;background:#fff;border:1px solid var(--line);border-radius:999px;padding:6px 14px;font:inherit;font-size:13px;font-weight:600;color:var(--ink2);cursor:pointer}
.cha-btn .t{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.cha-btn .cnt{font-size:11px;font-weight:700;color:#fff;background:var(--ink2);border-radius:999px;padding:1px 7px;line-height:1.55}
.cha-btn:hover{border-color:var(--ink2)}
.cha-btn>svg{width:14px;height:14px;flex:none;stroke:var(--t-mute);fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;transition:transform .18s}
.cha-dd.open .cha-btn>svg{transform:rotate(180deg)}
.cha-dd.open .cha-btn{border-color:var(--blue);box-shadow:0 0 0 3px rgba(103,141,198,.16)}
.cha-menu{position:absolute;top:calc(100% + 8px);left:50%;transform:translateX(-50%);z-index:60;width:360px;max-width:88vw;max-height:min(560px,72vh);overflow:auto;background:#fff;border:1px solid var(--line);border-radius:14px;box-shadow:0 16px 44px rgba(20,20,18,.14);padding:6px;display:none}
.cha-menu::-webkit-scrollbar{display:none}
.cha-dd.open .cha-menu{display:block}
.cha-opt{display:flex;align-items:center;gap:11px;padding:10px 12px;border-radius:9px;cursor:pointer;font-size:13.5px;line-height:1.35;color:var(--ink2)}
.cha-opt:hover{background:var(--field)}
.cha-opt.sel{font-weight:700}
.cha-opt .dot{width:7px;height:7px;border-radius:50%;background:var(--blue);flex:none;opacity:0}
.cha-opt.sel .dot{opacity:1}
.cha-txt{display:block;min-width:0}
.cha-chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:6px}
.cha-chip{display:inline-flex;align-items:center;gap:5px;font-size:10.5px;font-weight:700;letter-spacing:.03em;text-transform:uppercase;color:#8a5f18;background:rgba(201,138,58,.14);border-radius:999px;padding:3px 8px}
.cha-chip.pub{color:#2f6d4a;background:rgba(63,143,95,.14)}
.cha-chip.kind{color:var(--t-body);background:var(--field)}
.cha-sec{font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;font-weight:700;color:#b8b9b6;padding:10px 12px 5px}
.cha-sec:first-child{padding-top:4px}
.cha-div{height:1px;background:var(--line);margin:8px 12px 2px}
.md-menu{width:322px;padding:14px}
.md-head{font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;font-weight:700;color:#b8b9b6;margin:0 0 11px}
.md-chips{display:flex;flex-wrap:wrap;gap:8px}
.pchip{font:inherit;font-size:12.5px;font-weight:600;color:var(--ink2);background:#fff;border:1px solid var(--line);border-radius:999px;padding:7px 13px;cursor:pointer;display:inline-flex;align-items:center;gap:7px;transition:border-color .16s,background .16s,color .16s}
.pchip .n{font-size:11px;font-weight:700;color:var(--t-faint);font-variant-numeric:tabular-nums}
.pchip:hover{border-color:#b8b9b6}
.pchip.on{background:var(--ink2);border-color:var(--ink2);color:#fff}
.pchip.on .n{color:rgba(255,255,255,.6)}
.pchip .tick{width:0;height:13px;fill:none;stroke:currentColor;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round;opacity:0;margin:0 -3px 0 -2px;transition:width .16s,opacity .16s}
.pchip.on .tick{opacity:1;width:13px;margin:0 -1px 0 -2px}
.md-reset{margin:13px 0 0;background:transparent;border:0;font:inherit;font-size:12.5px;font-weight:600;color:var(--t-faint);cursor:pointer;text-decoration:underline;padding:0}
.md-reset:hover{color:var(--blue)}
.pool-count{text-align:center;font-size:13px;font-weight:600;color:var(--t-faint);margin:0 0 26px}
.cats{display:flex;flex-direction:column;gap:34px}
.cat-cnt{margin-left:10px;font-family:inherit;font-size:11px;font-weight:700;letter-spacing:.03em;text-transform:uppercase;color:#2f6d4a;background:rgba(63,143,95,.13);border-radius:999px;padding:4px 10px;vertical-align:middle}
.cat-top .cat-head{justify-content:center;text-align:center}
.cat-top{padding-bottom:26px;margin-bottom:8px;border-bottom:1px solid var(--line)}
.cat-top .pc{border-color:rgba(63,143,95,.3)}
.cat-top .pc-match{background:rgba(63,143,95,.13)}
.cat-top .pc-match span{color:#2f6d4a}
.tm-stack{overflow:hidden;padding:16px 0;margin:-16px 0}
.tm-slide{display:flex;align-items:center;gap:12px;transition:transform .35s cubic-bezier(.2,.7,.3,1);will-change:transform}
.tm-big{flex:none;width:422px}
.tm-big .pc{width:100%;border-color:rgba(63,143,95,.45);box-shadow:0 5px 18px -12px rgba(50,52,50,.45)}
.tm-big .pc-match{background:rgba(63,143,95,.13)}
.tm-big .pc-match span,.tm-big .pc-match b{color:#2f6d4a}
.tm-big .pc-av{width:62px;height:62px}
.tm-big .pc-bdg{gap:11px}
.tm-big .pc-bdg .pb{font-size:12.6px}
.tm-big .pc-bdg .pb-hex{width:26px;height:29px}
.tm-big .pc-bdg .pb-hex svg{width:13px;height:13px}
.tm-mini{flex:none;width:112px;display:flex;flex-direction:column;align-items:center;gap:7px;border:1px solid var(--line);border-radius:12px;background:#fff;padding:12px 10px;cursor:pointer;font:inherit;opacity:.72;transition:opacity .2s,border-color .2s}
.tm-mini:hover{opacity:1;border-color:#c9c8c3}
.tm-mini.far{width:88px;opacity:.45}
.tm-av{width:34px;height:34px;border-radius:50%;overflow:hidden;background:#e8e8e4;flex:none}
.tm-av img{width:100%;height:100%;object-fit:cover;display:block}
.tm-nm{font-size:12.5px;font-weight:600;color:var(--ink2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}
.tm-pc{font-family:"P22Mackinac",serif;font-weight:500;font-size:17px;color:#2f6d4a;font-variant-numeric:tabular-nums}
@media (max-width:860px){.tm-slide{flex-direction:column;transform:none!important}.tm-stack{overflow:visible}.tm-big,.tm-mini,.tm-mini.far{width:100%}}
.cat-head{display:flex;align-items:center;justify-content:space-between;gap:16px;margin:0 0 14px}
.cat-head h3{font-family:"P22Mackinac",serif;font-weight:500;font-size:22px;letter-spacing:-.01em;color:var(--ink2);margin:0}
.cat-nav{display:flex;gap:8px;flex:none}
.cat-arrow{width:34px;height:34px;border-radius:50%;border:1px solid var(--line);background:#fff;display:grid;place-items:center;cursor:pointer;color:var(--ink2);transition:border-color .2s}
.cat-arrow:hover{border-color:var(--ink2)}
.cat-arrow svg{width:15px;height:15px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.cat-track{display:flex;gap:16px;overflow-x:auto;scroll-behavior:smooth;padding:4px 2px 2px;scrollbar-width:none}
.cat-track::-webkit-scrollbar{display:none}
.cat-track{-webkit-mask-image:linear-gradient(90deg,#000 calc(100% - 96px),transparent);mask-image:linear-gradient(90deg,#000 calc(100% - 96px),transparent)}
.cat-track.at-end{-webkit-mask-image:none;mask-image:none}
.pc{flex:none;width:322px;box-sizing:border-box;border:1px solid var(--line);border-radius:16px;background:#fff;padding:20px 22px;display:flex;flex-direction:column;gap:16px;cursor:pointer;transition:border-color .2s ease,box-shadow .2s ease}
.pc:hover{border-color:var(--blue);box-shadow:var(--shadow-card)}
.pc-top{display:flex;align-items:flex-start;gap:14px}
.pc-av{width:52px;height:52px;border-radius:50%;background:#e8e8e4;flex:none;overflow:hidden}
.pc-av img,.cprof-ic img{width:100%;height:100%;border-radius:50%;object-fit:cover;display:block}
.pc-id{flex:1;min-width:0;padding-top:2px}
.pc-nm{font-family:"P22Mackinac",serif;font-weight:500;font-size:17.5px;letter-spacing:-.01em;color:var(--ink2);line-height:1.2}
.pc-role{font-size:13px;color:var(--t-faint);margin-top:5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.pc-match{flex:none;text-align:center;background:rgba(103,141,198,.12);border-radius:14px;padding:7px 12px 6px;min-width:50px}
.pc-match b{display:block;font-family:"P22Mackinac",serif;font-weight:500;font-size:22px;letter-spacing:-.02em;color:var(--ink2);line-height:1;font-variant-numeric:tabular-nums}
.pc-match span{display:block;font-size:8.5px;font-weight:700;letter-spacing:.13em;text-transform:uppercase;color:#8b97ab;margin-top:4px}
.pc-match b em{font-family:inherit;font-style:normal;font-size:14px;letter-spacing:0;margin-left:1px}
.pc-bdg{display:flex;flex-wrap:wrap;gap:9px}
.pc-bdg .pb{display:inline-flex;align-items:center;gap:5px;font-size:10.5px;font-weight:700;letter-spacing:.02em;color:#6f7b8e}
.pc-bdg .pb-hex{flex:none;width:22px;height:24px;display:grid;place-items:center;clip-path:polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%);background:rgba(103,141,198,.16)}
.pc-bdg .pb-hex svg{width:11px;height:11px;stroke:var(--blue);fill:none;stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round}
.pc-bdg .pb.gold .pb-hex{background:rgba(201,162,74,.2)}
.pc-bdg .pb.gold .pb-hex svg{stroke:#a7842f}
.pc-bdg .pb.gold{color:#8a6f2c}
.pc-sk{display:flex;flex-wrap:wrap;gap:6.5px}
.pc-sk span{font-size:9.6px;font-weight:600;color:#2b2b28;background:#efefec;border-radius:999px;padding:4px 9.5px}
.cand-empty{border:1px dashed var(--line);border-radius:14px;padding:40px;text-align:center;font-size:13.5px;color:var(--t-faint)}
@media (max-width:640px){.pool-top{justify-content:flex-start;padding-left:120px}.pool-back{left:20px}.pool-body{padding:22px 18px 80px}.pc{width:280px}}

/* candidate detail — full page, styled like challenge detail */
.cprof{position:fixed;inset:0;z-index:340;background:#fff;overflow-y:auto;display:none;zoom:0.9}
.cprof.on{display:block}
.cprof::-webkit-scrollbar{display:none}
.cprof-topbar{display:flex;justify-content:center;padding:26px 0 0}
.cprof-logo{font-weight:800;font-size:26px;letter-spacing:-.03em;color:var(--ink2);line-height:1}
.cprof-logo .the{font-weight:400}
.cprof-inner{max-width:680px;margin:0 auto;padding:30px 32px 130px}
.cprof-back{z-index:2}
.cprof-back:hover{color:var(--blue)}
.cprof-back svg{width:16px;height:16px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.cprof-idrow{display:flex;align-items:center;justify-content:space-between;gap:16px;margin:0 0 22px}
.cprof-co{display:flex;align-items:center;gap:13px;min-width:0}
.cprof-ic{width:92px;height:92px;border-radius:50%;background:#e8e8e4;flex:none;overflow:hidden}
.cprof-idtext{display:flex;flex-direction:column;gap:5px;min-width:0}
.cprof-sub{font-size:14.5px;color:var(--t-faint);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.cprof-idtext .cpc-links{justify-content:flex-start;gap:2px;margin:1px 0 0 -6px}
.cprof-badge{flex:none;text-align:center;background:rgba(103,141,198,.12);border-radius:14px;padding:8px 14px 7px}
.cprof-badge b{display:block;font-family:"P22Mackinac",serif;font-weight:500;font-size:24px;letter-spacing:-.02em;color:var(--ink2);line-height:1;font-variant-numeric:tabular-nums}
.cprof-badge b i{font-style:normal;font-size:14px;font-weight:500;margin-left:1px}
.cprof-badge span{display:block;font-size:8.5px;font-weight:700;letter-spacing:.13em;text-transform:uppercase;color:#8b97ab;margin-top:4px}
.cprof-name{font-family:"P22Mackinac",serif;font-weight:500;font-size:33px;letter-spacing:-.02em;line-height:1.08;color:var(--ink2);margin:0}
.cprof-card{border:1px solid var(--line);border-radius:16px;background:#fff;box-shadow:var(--shadow-card);padding:28px 32px;display:flex;flex-direction:column;gap:22px}
.cprof-toggle{cursor:pointer;font:inherit;gap:7px;transition:border-color .15s,background .15s}
.cprof-toggle svg{width:15px;height:15px;flex:none;fill:none;stroke:var(--ink2);stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.cprof-toggle:hover{border-color:#b8b9b6;background:var(--field)}
.rz{display:flex;flex-direction:column;gap:22px}
.rz-head{display:flex;flex-direction:column;gap:4px;padding-bottom:20px;border-bottom:1px solid var(--line)}
.rz-name{font-family:"P22Mackinac",serif;font-weight:500;font-size:26px;letter-spacing:-.02em;color:var(--ink2);margin:0}
.rz-role{font-size:14.5px;font-weight:600;color:var(--t-body);margin:0}
.rz-contact{font-size:12.5px;color:var(--t-faint);margin:2px 0 0}
.rz-sec{display:flex;flex-direction:column;gap:12px}
.rz-sec h4{font-size:11px;letter-spacing:.1em;text-transform:uppercase;font-weight:700;color:var(--t-faint);margin:0}
.rz-sec>p{font-size:13.5px;line-height:1.55;color:var(--t-body);margin:0;text-wrap:pretty}
.rz-job{display:flex;flex-direction:column;gap:4px}
.rz-job+.rz-job{margin-top:14px}
.rz-job-top{display:flex;align-items:baseline;justify-content:space-between;gap:14px}
.rz-title{font-size:14px;font-weight:700;color:var(--ink2)}
.rz-when{font-size:12px;color:var(--t-faint);font-variant-numeric:tabular-nums;flex:none}
.rz-org{font-size:13px;font-weight:600;color:var(--t-body)}
.rz-bul{margin:6px 0 0;padding-left:18px;display:flex;flex-direction:column;gap:5px}
.rz-bul li{font-size:13px;line-height:1.45;color:var(--t-body);text-wrap:pretty}
.cprof-contact{border:1px solid var(--line);border-radius:14px;background:#fff;box-shadow:var(--shadow-card);padding:16px 22px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:16px;flex-wrap:wrap;margin-bottom:16px}
.cpc-facts{display:flex;gap:34px;flex-wrap:wrap;justify-content:center}
.cpc-item{display:flex;flex-direction:column;gap:3px;align-items:center}
.cpc-l{font-size:10px;letter-spacing:.1em;text-transform:uppercase;font-weight:700;color:var(--t-faint)}
.ar-grid{display:flex;flex-direction:column;gap:22px}
.act{display:flex;gap:9px;align-items:flex-start}
.act-days{display:grid;grid-template-rows:repeat(7,minmax(0,1fr));gap:2px;font-size:9px;line-height:1;color:var(--t-faint);font-weight:600;grid-column:1;grid-row:2;align-self:stretch}.act{display:grid!important;grid-template-columns:auto minmax(0,1fr);column-gap:9px;align-items:stretch}.act-main{display:contents}.act-months{grid-column:2;grid-row:1;margin-right:4px}.act-grid{grid-column:2;grid-row:2;margin-right:4px;align-self:start}.act-legend{grid-column:2;grid-row:3}
.act-days span{display:flex;align-items:center}
.act-main{flex:1;min-width:0;padding-right:3px}
.act-months{display:grid;grid-auto-flow:column;grid-template-columns:repeat(12,1fr);font-size:11px;color:var(--t-mute);font-weight:600;margin:0 0 4px}
.act-grid{display:grid;grid-auto-flow:column;grid-template-columns:repeat(52,1fr);grid-template-rows:repeat(7,auto);gap:2px}
.act-grid i{width:100%;aspect-ratio:1;border-radius:50%;background:var(--field);display:block}
.act-grid i[data-l="1"]{background:rgba(103,141,198,.3)}
.act-grid i[data-l="2"]{background:rgba(103,141,198,.55)}
.act-grid i[data-l="3"]{background:var(--blue)}
.act-legend{display:flex;align-items:center;gap:7px;font-size:11.5px;color:var(--t-mute);margin:12px 0 0;justify-content:flex-end}
.act-legend i{width:10px;height:10px;border-radius:50%;display:block;background:var(--field)}
.act-grid i:hover{outline:1.5px solid var(--ink2,#32342e);outline-offset:1px}
.act-tip{position:fixed;z-index:100000;pointer-events:none;opacity:0;transition:opacity .12s;background:var(--ink2,#32342e);color:#fff;border-radius:10px;padding:9px 11px;font-size:11.5px;line-height:1.45;min-width:180px;box-shadow:0 8px 24px rgba(0,0,0,.18)}
.act-tip.on{opacity:1}
.act-tip b{display:block;font-size:11px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;opacity:.65;margin:0 0 5px}
.act-tip .r{display:flex;justify-content:space-between;gap:14px}
.act-tip .r span:last-child{font-variant-numeric:tabular-nums;font-weight:700}
.ar-bdgs{display:flex;flex-wrap:wrap;gap:18px}
.ar-bdg{width:74px;text-align:center}
.ar-bdg-hex{width:60px;height:66px;margin:0 auto 8px;display:grid;place-items:center;clip-path:polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%);background:var(--field)}
.ar-bdg-hex svg{width:24px;height:24px;stroke:var(--t-mute);fill:none;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}
.ar-bdg.earned .ar-bdg-hex{background:rgba(103,141,198,.14)}
.ar-bdg.earned .ar-bdg-hex svg{stroke:var(--blue)}
.ar-bdg.gold .ar-bdg-hex{background:rgba(201,162,74,.16)}
.ar-bdg.gold .ar-bdg-hex svg{stroke:#a7842f}
.ar-bdg-n{font-size:11px;font-weight:600;color:var(--t-body);line-height:1.35}
.ar-bdg.locked{opacity:.45}
.ar-stats{display:flex;flex-wrap:wrap;gap:10px}
.ar-stat{flex:1 1 120px;border:1px solid var(--line);border-radius:12px;padding:11px 14px;background:#fff}
.ar-stat b{display:block;font-family:"P22Mackinac",serif;font-weight:500;font-size:22px;letter-spacing:-.02em;color:var(--ink2);line-height:1.1;font-variant-numeric:tabular-nums}
.ar-stat span{display:block;font-size:11px;letter-spacing:.06em;text-transform:uppercase;font-weight:700;color:var(--t-faint);margin-top:3px}
.ar-list{display:flex;flex-direction:column;gap:8px}
.ar-row{display:flex;align-items:center;gap:14px;border:1px solid var(--line);border-radius:12px;padding:12px 15px;background:#fff;cursor:pointer;text-align:left;font:inherit;width:100%;transition:border-color .15s,transform .15s,box-shadow .15s}
.ar-row:hover{border-color:#b8b9b6;transform:translateY(-1px);box-shadow:var(--shadow-card)}
.arm-back{position:fixed;inset:0;z-index:420;display:flex;align-items:center;justify-content:center;padding:28px;background:rgba(28,28,26,.28);backdrop-filter:blur(7px);-webkit-backdrop-filter:blur(7px);opacity:0;transition:opacity .2s ease}
.arm-back.on{opacity:1}
.arm{position:relative;width:min(680px,100%);max-height:88vh;overflow:auto;background:#fff;border:1px solid var(--line);border-radius:18px;box-shadow:0 24px 60px rgba(28,28,26,.22);padding:26px 30px 30px;transform:translateY(10px) scale(.985);transition:transform .22s cubic-bezier(.2,.7,.3,1)}
.arm::-webkit-scrollbar{display:none}
.arm-back.on .arm{transform:none}
.arm-x{position:absolute;top:22px;right:26px;width:32px;height:32px;border:0;background:rgba(255,255,255,.9);border-radius:50%;cursor:pointer;display:grid;place-items:center}
.arm-x svg{width:15px;height:15px;stroke:var(--ink2);stroke-width:2;fill:none;stroke-linecap:round}
.arm-hd{display:flex;align-items:center;gap:10px;margin:0 0 14px;padding-right:40px}
.arm-co{display:flex;align-items:center;gap:10px;min-width:0}
.arm-co-ic{flex:none;width:44px;height:44px;border-radius:50%;overflow:hidden;background:#fff;border:1px solid var(--line);display:grid;place-items:center}
.arm-co-ic img{width:100%;height:100%;object-fit:cover}
.arm-cop{border:1px solid var(--line);border-radius:16px;padding:22px 22px 24px;background:#fff}
.arm-cop-head{display:flex;align-items:center;gap:14px;margin-bottom:6px}
.arm-cop-ic{width:52px;height:52px;border-radius:50%;overflow:hidden;flex:none;background:#fff;display:grid;place-items:center;border:1px solid var(--line)}
.arm-cop-ic img{width:100%;height:100%;object-fit:cover}
.arm-cop-nm{font-family:"P22Mackinac",serif;font-weight:500;font-size:23px;letter-spacing:-.01em;color:var(--ink2)}
.arm-cop-tag{font-size:13.5px;color:var(--t-mute);margin-top:2px}
.arm-cop-facts{display:flex;flex-wrap:wrap;gap:8px;margin:18px 0}
.arm-cop-fact{display:flex;flex-direction:column;gap:2px;padding:9px 14px;border:1px solid var(--line);border-radius:12px;flex:1;min-width:120px}
.arm-cop-fact .lbl{font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;font-weight:700;color:#b8b9b6}
.arm-cop-fact .val{font-size:13.5px;color:var(--ink2);font-weight:600}
.arm-cop-about{font-size:14px;line-height:1.6;color:var(--ink2);text-wrap:pretty;margin:0}
.arm-cop-links{display:flex;gap:10px;margin-top:20px;flex-wrap:wrap}
.arm-cop-link{display:inline-flex;align-items:center;gap:8px;padding:9px 15px;border:1px solid var(--line);border-radius:999px;font-size:12.5px;font-weight:600;color:var(--ink2);cursor:pointer;text-decoration:none;transition:background .15s,border-color .15s}
.arm-cop-link:hover{background:var(--field);border-color:var(--ink2)}
.arm-cop-link svg{width:15px;height:15px;flex:none}
.arm-cop-link.li svg{fill:#0a66c2}
.arm-co-nm{display:block;font-size:13.5px;font-weight:700;color:var(--ink2);line-height:1.2}
.arm-co-tag{display:block;font-size:11.5px;color:var(--t-faint);font-weight:600}
.arm-co-txt{display:flex;flex-direction:column;min-width:0}
.arm-chips{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 20px}
.arm-chip{border:1px solid var(--line);border-radius:11px;padding:8px 13px;min-width:110px}
.arm-chip span{display:block;font-size:9.5px;letter-spacing:.08em;text-transform:uppercase;font-weight:700;color:var(--t-faint)}
.arm-chip b{display:block;font-size:13.5px;color:var(--ink2);margin-top:2px;font-variant-numeric:tabular-nums}
.arm-chip.win b{color:#2f6d4a}
.arm-card{border:1px solid var(--line);border-radius:14px;padding:4px 18px 6px;margin:0 0 18px;background:#fff}
.arm-sec{padding:14px 0;border-bottom:1px solid var(--line)}
.arm-sec:last-child{border-bottom:0}
.arm-sec h4{margin:0 0 7px;font-size:10px;letter-spacing:.1em;text-transform:uppercase;font-weight:700;color:var(--t-faint)}
.arm-sec p{margin:0 0 8px;font-size:13.5px;line-height:1.55;color:var(--t-body);text-wrap:pretty}
.arm-sec p:last-child{margin:0}
.arm-sec ul{margin:0;padding-left:17px;display:flex;flex-direction:column;gap:5px}
.arm-sec li{font-size:13px;line-height:1.5;color:var(--t-body)}
.arm-stage-row{display:flex;align-items:center;gap:14px;margin-top:2px}
.arm-stage-row .ar-pips{max-width:280px}
.arm-stage-row b{font-size:13.5px;color:var(--ink2)}
.arm-colinks{display:flex;gap:14px;margin-top:10px}
.arm-colinks a{font-size:12.5px;font-weight:600;color:#4a5568;text-decoration:none;border-bottom:1px solid var(--line)}
.arm-colinks a:hover{color:var(--ink2);border-color:#b8b9b6}
.arm-t{font-family:"P22Mackinac",serif;font-weight:500;font-size:23px;letter-spacing:-.02em;line-height:1.2;color:var(--ink2);margin:0 0 4px}
.arm-sub{font-size:12.5px;color:var(--t-faint);font-weight:600;margin:0 0 18px}
.arm-p{font-size:13.5px;line-height:1.55;color:var(--t-body);margin:0 0 18px;text-wrap:pretty}
.arm-kv{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0 0 18px}
.arm-kv div{border:1px solid var(--line);border-radius:11px;padding:10px 13px}
.arm-kv span{display:block;font-size:9.5px;letter-spacing:.08em;text-transform:uppercase;font-weight:700;color:var(--t-faint)}
.arm-kv b{display:block;font-size:14px;color:var(--ink2);margin-top:3px}
.arm-sk{display:flex;flex-wrap:wrap;gap:6.5px}
.arm-sk span{font-size:9.6px;font-weight:600;color:#2b2b28;background:#efefec;border-radius:999px;padding:4px 9.5px}
.ar-main{flex:1;min-width:0;display:flex;flex-direction:column;gap:3px}
.ar-t{font-size:13.5px;font-weight:700;color:var(--ink2);line-height:1.25}
.ar-m{font-size:11.5px;color:var(--t-faint);font-weight:600}
.ar-kind{flex:none;font-size:9.5px;letter-spacing:.06em;text-transform:uppercase;font-weight:700;color:#5b6b86;background:#efefec;border-radius:999px;padding:4px 9px}
.ar-kind.bounty{color:#8a6f2c;background:rgba(201,162,74,.18)}
.ar-prize{flex:none;font-size:13px;font-weight:700;color:#2f6d4a;font-variant-numeric:tabular-nums}
.pgr{display:flex;align-items:center;justify-content:flex-end;gap:8px;margin-top:12px}
.pgr button{width:30px;height:30px;border:1px solid var(--line);background:#fff;border-radius:50%;display:grid;place-items:center;cursor:pointer;transition:border-color .15s}
.pgr button:hover:not([disabled]){border-color:var(--ink2)}
.pgr button[disabled]{opacity:.35;cursor:default}
.pgr svg{width:14px;height:14px;stroke:var(--ink2);fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.rt-top{display:flex;align-items:baseline;gap:12px;margin:0 0 14px}
.rt-avg{font-family:"P22Mackinac",serif;font-weight:500;font-size:30px;letter-spacing:-.02em;line-height:1;color:var(--ink2)}
.rt-avg span{font-size:15px;color:var(--t-mute)}
.rt-count{font-size:12.5px;color:var(--t-faint);font-weight:600}
.stars{display:inline-flex;gap:2px}
.stars svg{width:14px;height:14px;fill:var(--line)}
.stars svg.on{fill:#c9a24a}
.stars .half{position:relative;display:inline-flex}
.stars .half svg:last-child{position:absolute;inset:0;clip-path:inset(0 50% 0 0)}
.rt-list{display:flex;flex-direction:column;gap:8px}
.rt-row{border:1px solid var(--line);border-radius:12px;padding:13px 15px;background:#fff}
.rt-hd{display:flex;align-items:center;gap:10px;margin:0 0 6px}
.rt-co{font-size:13px;font-weight:700;color:var(--ink2)}
.rt-when{font-size:11.5px;color:var(--t-faint);font-weight:600;margin-left:auto}
.rt-row p{margin:0;font-size:13px;line-height:1.6;color:var(--t-body);text-wrap:pretty}
.ar-stage{flex:none;display:flex;flex-direction:column;gap:5px;align-items:flex-end;width:186px}
.ar-stage-t{font-size:11.5px;font-weight:700;color:var(--ink2)}
.ar-pips{display:flex;gap:3px;width:100%}
.ar-pips i{flex:1;height:3px;border-radius:2px;background:var(--line)}
.ar-pips i.on{background:var(--ink2)}
.cpc-v{font-size:13.5px;color:var(--ink2);font-weight:600}
.cpc-links{display:flex;gap:8px;flex-wrap:wrap;align-items:center;justify-content:center}
.cpc-link{display:inline-flex;align-items:center;gap:6px;font-size:12.5px;font-weight:600;color:var(--ink2);text-decoration:none;border:1px solid var(--line);border-radius:9px;padding:7px 13px;background:#fff;transition:border-color .15s}
.cpc-link:hover{border-color:#b8b9b6;color:var(--blue)}
.cpc-icon{width:32px;height:32px;padding:0;justify-content:center;border:0;border-radius:0;background:none;opacity:.9;transition:opacity .15s,transform .15s}
.cpc-icon:hover{opacity:1;transform:translateY(-1px);border:0}
.cpc-icon svg{width:20px;height:20px;display:block}
.cc-wrap{position:relative;width:150%;margin-left:-25%}
.cc{padding:0;gap:0;overflow:hidden}
.cc-tabs{display:flex;justify-content:center;gap:4px;padding:12px 14px;border-bottom:1px solid var(--line);flex-wrap:wrap;background:#fff}
.cc-tab{font:inherit;font-size:12.5px;font-weight:600;color:var(--t-body);background:transparent;border:1px solid transparent;border-radius:999px;padding:7px 15px;cursor:pointer;transition:.15s}
.cc-tab:hover{color:var(--ink2)}
.cc-tab.on{background:#fff;border-color:var(--line);color:var(--ink2);box-shadow:0 1px 2px rgba(0,0,0,.05)}
.cc-arrow{position:absolute;top:50%;transform:translateY(-50%);width:44px;height:44px;border-radius:50%;border:1px solid var(--line);background:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--t-mute);box-shadow:var(--shadow-card);transition:color .15s,border-color .15s;z-index:2}
.cc-arrow:hover{color:var(--ink2);border-color:#b8b9b6}
.cc-arrow svg{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.cc-prev{left:-62px}
.cc-next{right:-62px}
.cc-viewport{padding:26px 30px;min-height:380px}
.cc-panel{display:none;animation:ccIn .28s ease}
.cc-panel.on{display:block}
@keyframes ccIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
.pnl-sec{margin-bottom:22px}
.pnl-sec:last-child{margin-bottom:0}
.cc-sig>.pnl-sec{margin:0;padding:32px 0}.cc-sig>.pnl-sec:first-child{padding-top:0}.cc-sig>.pnl-sec:last-of-type{padding-bottom:0}.cc-sig>.pnl-sec+.pnl-sec{border-top:1px solid var(--line)}.cc-sig>.pnl-sec>h4{margin-bottom:16px}.pnl-sec>h4{font-size:11px;letter-spacing:.1em;text-transform:uppercase;font-weight:700;color:var(--t-faint);margin:0 0 12px}
.snap-grid,.asmt-grid,.signal-grid{display:grid;grid-template-columns:1fr 1fr;gap:28px}
.snap-col{display:flex;flex-direction:column}
.comp-row{display:flex;gap:12px}
.comp-box{flex:1;border:1px solid var(--line);border-radius:12px;background:#fff;padding:12px 14px;display:flex;flex-direction:column;gap:5px}
.comp-l{font-size:10px;letter-spacing:.1em;text-transform:uppercase;font-weight:700;color:var(--t-faint)}
.comp-v{font-size:20px;font-weight:500;color:var(--ink2);font-family:"P22Mackinac",serif;font-variant-numeric:tabular-nums}
.comp-v em{font-style:normal;font-size:12px;font-weight:600;color:var(--t-faint);font-family:inherit}
.proof{display:flex;flex-direction:column;gap:8px}
.proof-r{display:flex;align-items:center;justify-content:space-between;gap:12px;border:1px solid var(--line);border-radius:10px;padding:11px 14px;font-size:13px;font-weight:600;color:var(--ink2)}
.pf-pill{display:inline-flex;align-items:center;gap:5px;font-size:11.5px;font-weight:700;padding:3px 9px;border-radius:999px}
.pf-pill.ok{background:#e7f1ea;color:#2f7d54}
.pf-pill.no{background:#f3e9e7;color:#b25a45}
.pf-ic{width:11px;height:11px;fill:none;stroke:currentColor;stroke-width:3;stroke-linecap:round;stroke-linejoin:round}
.mini-stats{display:flex;flex-direction:column;gap:9px}
.ms{display:flex;justify-content:space-between;font-size:13px;color:var(--t-body)}
.ms b{color:var(--ink2)}
.mrc{border:1px solid var(--line);border-radius:12px;padding:16px 18px}
.mrc-co{font-size:16px;font-weight:700;color:var(--ink2)}
.mrc-role{font-size:13px;font-weight:600;color:var(--t-body);margin-top:2px}
.mrc-when{font-size:12px;color:var(--t-faint);margin-top:2px}
.mrc-bul{list-style:none;margin:13px 0 0;padding:0;display:flex;flex-direction:column;gap:8px}
.mrc-bul li{position:relative;padding-left:16px;font-size:13px;line-height:1.45;color:var(--t-body);text-wrap:pretty}
.mrc-bul li::before{content:"";position:absolute;left:2px;top:7px;width:5px;height:5px;border-radius:50%;background:var(--blue)}
.mrc-prior{margin-top:14px;padding-top:12px;border-top:1px solid var(--line);font-size:12px;color:var(--t-faint)}
.mrc-flag{display:inline-flex;align-items:center;gap:8px;margin-top:12px;font-size:12px;font-weight:600;color:oklch(0.6 0.13 25);background:oklch(0.6 0.13 25 / 0.09);border-radius:999px;padding:6px 13px 6px 7px}
.mrc-flag-ic{width:16px;height:16px;flex:none;border-radius:50%;background:oklch(0.6 0.13 25);color:#fff;display:grid;place-items:center;font-size:10px;font-weight:700;font-style:italic;font-family:Georgia,serif}
.asmt-sum{font-size:14px;line-height:1.6;color:var(--t-body);margin:0;text-wrap:pretty}
.bl{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:10px}
.bl li{position:relative;padding-left:18px;font-size:13px;line-height:1.5;color:var(--t-body);text-wrap:pretty}
.bl li::before{content:"";position:absolute;left:3px;top:7px;width:6px;height:6px;border-radius:50%}
.bl-pos li::before{background:#2f7d54}
.bl-warn li::before{background:#c98a2b}
.bl-q li::before{background:var(--blue)}
.gate-cards{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.gcard{border:1px solid var(--line);border-radius:12px;padding:13px 15px}
.gc-top{display:flex;align-items:center;gap:9px}
.gc-id{font-size:11px;font-weight:800;color:var(--t-faint);letter-spacing:.05em}
.gc-k{font-size:13.5px;font-weight:700;color:var(--ink2);flex:1}
.gc-pill{font-size:10.5px;font-weight:800;letter-spacing:.05em;padding:3px 9px;border-radius:999px}
.gc-pill.ok{background:#e7f1ea;color:#2f7d54}
.gc-pill.no{background:#f6efe4;color:#b8862f}
.gc-ev{font-size:12px;line-height:1.45;color:var(--t-faint);font-style:italic;margin:9px 0 0;text-wrap:pretty}
.crit{display:flex;flex-direction:column;gap:20px}
.cr-top{display:flex;align-items:center;gap:9px}
.cr-id{font-size:12px;font-weight:800;color:var(--blue)}
.cr-t{font-size:13.5px;font-weight:700;color:var(--ink2);flex:1}
.cr-w{font-size:10.5px;font-weight:700;color:var(--t-faint);background:var(--field);border:1px solid var(--line);border-radius:999px;padding:2px 8px}
.cr-sc{font-size:13px;font-weight:700;color:var(--ink2);font-variant-numeric:tabular-nums}
.cr-bar{height:6px;border-radius:999px;background:var(--field);overflow:hidden;margin:9px 0}
.cr-bar i{display:block;height:100%;border-radius:999px;background:#3f8a5c}
.cr-quote{font-size:12.5px;line-height:1.5;color:var(--t-body);font-style:italic;margin:0;text-wrap:pretty}
.cr-ev{font-size:12.5px;line-height:1.5;color:var(--t-faint);margin:5px 0 0;text-wrap:pretty}
@media(max-width:640px){.snap-grid,.asmt-grid,.signal-grid,.gate-cards,.ext-cards{grid-template-columns:1fr}.cc-wrap{width:100%;margin-left:0}.cc-arrow{width:38px;height:38px}.cc-prev{left:2px}.cc-next{right:2px}.cc-viewport{padding:22px 44px}}
.cprof-card .ch-sec+.ch-sec{border-top:1px solid var(--line);padding-top:22px}
.ext-cards{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:18px}
.ext-card{border:1px solid var(--line);border-radius:13px;background:#fff;padding:16px 17px}
.ext-head{display:flex;align-items:center;gap:9px;margin:0 0 13px}
.ext-head span{font-size:13px;font-weight:700;color:var(--ink2);letter-spacing:-.01em}
.ext-head svg{width:19px;height:19px;flex:none;fill:#9a9a95}
.ext-certs,.ext-repos{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:12px}
.ext-certs li{display:flex;flex-direction:column;gap:2px}
.ec-nm{font-size:12.5px;font-weight:600;color:var(--ink2);line-height:1.3;text-wrap:pretty}
.ec-meta{font-size:11.5px;color:var(--t-faint)}
.ext-repos li{display:flex;flex-direction:column;gap:3px}
.er-nm{font-size:12.5px;font-weight:700;color:var(--blue);text-decoration:none;line-height:1.3}
.er-nm:hover{text-decoration:underline}
.er-desc{font-size:11.5px;color:var(--t-body);line-height:1.35;text-wrap:pretty}
.er-meta{display:flex;align-items:center;gap:14px;font-size:11px;color:var(--t-faint);margin-top:1px}
.er-lang{display:inline-flex;align-items:center;gap:5px;font-weight:600}
.er-lang i{width:9px;height:9px;border-radius:50%;background:#8a9bb5;flex:none}
.er-star{display:inline-flex;align-items:center;gap:4px;font-variant-numeric:tabular-nums;font-weight:600;color:var(--t-body);background:var(--field);border:1px solid var(--line);border-radius:999px;padding:1px 8px}
.er-star .st{font-style:normal;color:#c9a24a}
@media (max-width:560px){.ext-cards{grid-template-columns:1fr}}
.sk{display:flex;flex-wrap:wrap;gap:8px}
.sk span{font-size:12.5px;font-weight:600;color:var(--t-body);background:#fff;border:1px solid var(--line);border-radius:999px;padding:5px 12px}
.ske-lg{display:flex;flex-wrap:wrap;gap:16px;margin:4px 0 6px;font-size:11.5px;font-weight:600;color:var(--t-mute)}.ske-lg span{display:flex;align-items:center;gap:7px}.ske-g{margin-top:16px}.ske-gh{display:flex;align-items:center;gap:8px;margin-bottom:8px;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--t-body)}.ske-gh span{font-size:11px;font-weight:600;letter-spacing:0;color:var(--t-mute)}.ske{display:flex;flex-wrap:wrap;gap:8px}.ske-c{display:inline-flex;align-items:center;gap:8px;padding:6px 12px 6px 10px;border-radius:999px;border:1px solid var(--line);background:#fff;font-size:12.5px;line-height:1.2;white-space:nowrap}.ske-c b{font-weight:600;color:var(--ink2,#1c1d1c)}.ske-c em{font-style:normal;font-size:11.5px;color:var(--t-mute)}.ske-bar{display:block;flex:none;width:17px;height:13px}.ske-bar rect{fill:#dcdedb}.lv-vs .ske-bar rect.on{fill:#365f8b}.lv-s .ske-bar rect.on{fill:#648dc6}.lv-m .ske-bar rect.on{fill:#8a8b87}.lv-w .ske-bar rect.on{fill:#b5b7b3}.ske-c.lv-vs{background:#e9eff8;border-color:#bfd0e8}.ske-c.lv-vs em{color:#365f8b}.ske-c.lv-s{background:#f4f7fb;border-color:#d3dfee}.ske-c.lv-w{background:transparent}.ske-c.lv-i{background:transparent;border-style:dashed}.ske-c.lv-i b{color:var(--t-mute)}.sk span.hit{background:var(--field);color:var(--ink2);border-color:#b8b9b6}
.soft{display:flex;flex-direction:column;gap:11px;margin-top:2px}
.gs-hero{display:grid;grid-template-columns:auto 1fr;gap:26px;align-items:center;border:1px solid var(--line);border-radius:16px;background:var(--field);padding:20px 24px;margin-bottom:6px}
.gs-score{text-align:center;padding-right:24px;border-right:1px solid var(--line)}
.gs-score b{display:block;font-family:"P22Mackinac",serif;font-weight:500;font-size:44px;line-height:1;letter-spacing:-.02em;color:var(--ink2);font-variant-numeric:tabular-nums}
.gs-score b em{font-style:normal;font-size:19px;color:var(--t-faint)}
.gs-score span{display:block;font-size:10px;letter-spacing:.1em;text-transform:uppercase;font-weight:700;color:var(--t-faint);margin-top:7px}
.gs-stackwrap{min-width:0}
.gs-stack{display:flex;height:14px;border-radius:99px;overflow:hidden;background:#e6e6e1}
.gs-stack i{display:block;height:14px;border-right:1px solid #fff;box-sizing:border-box}
.gs-stack i:last-child{border-right:0}
.gs-legend{display:flex;flex-wrap:wrap;gap:6px 16px;margin-top:11px}
.gs-legend span{display:inline-flex;align-items:center;gap:6px;font-size:11.5px;color:var(--t-mute);font-weight:600}
.gs-legend i{width:8px;height:8px;border-radius:2px;flex:none}
.gs-gates{display:grid;grid-template-columns:repeat(auto-fit,minmax(168px,1fr));gap:9px}
.gs-gate{border:1px solid var(--line);border-radius:12px;padding:12px 14px;background:#fff;display:flex;flex-direction:column;gap:5px}
.gs-gate.no{border-color:#e6d4b4;background:#fdfaf4}
.gs-gate-t{display:flex;align-items:center;gap:7px;font-size:12.5px;font-weight:700;color:var(--ink2)}
.gs-tick{flex:none;width:17px;height:17px;border-radius:50%;display:grid;place-items:center;background:rgba(47,125,84,.12)}
.gs-tick svg{width:10px;height:10px;stroke:#2f7d54;fill:none;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}
.gs-gate.no .gs-tick{background:rgba(201,138,58,.15)}
.gs-gate.no .gs-tick svg{stroke:#b8862f}
.gs-gate-e{font-size:11.5px;line-height:1.45;color:var(--t-faint)}
.gs-count{font-size:11.5px;font-weight:700;color:var(--t-faint);margin-left:8px}
.gs-crit{display:flex;flex-direction:column;gap:1px;background:var(--line);border:1px solid var(--line);border-radius:14px;overflow:hidden}
.gs-row{background:#fff;padding:14px 18px;display:grid;grid-template-columns:1fr auto;gap:4px 16px;align-items:center}
.gs-row-t{font-size:13.5px;font-weight:700;color:var(--ink2)}
.gs-row-r{display:flex;align-items:center;gap:12px}
.gs-pips{display:flex;gap:3px}
.gs-pips i{width:16px;height:5px;border-radius:99px;background:var(--line)}
.gs-pips i.on{background:var(--ink2)}
.gs-pips.full i.on{background:var(--blue)}
.gs-pts{font-size:12px;font-weight:700;color:var(--t-faint);font-variant-numeric:tabular-nums;min-width:74px;text-align:right}
.gs-q{grid-column:1/-1;font-size:12.5px;line-height:1.5;color:var(--ink2);margin:4px 0 0;padding-left:11px;border-left:2px solid var(--line);text-wrap:pretty}
.gs-e{grid-column:1/-1;font-size:11.5px;line-height:1.45;color:var(--t-faint);margin:5px 0 0}
.sc-card{background:var(--field);border:1px solid var(--line);border-radius:18px;padding:18px 20px}
.sc-top{display:flex;align-items:center;justify-content:space-between;gap:12px;list-style:none}
.sc-top::-webkit-details-marker{display:none}
.sc-lbl{font-size:13.5px;font-weight:600;color:var(--ink2)}
.sc-right{display:flex;align-items:center;gap:10px}
.sc-num{font-family:"P22Mackinac",serif;font-weight:500;font-size:26px;letter-spacing:-.02em;color:var(--ink2);line-height:1;font-variant-numeric:tabular-nums}
.sc-num span{font-size:15px}
.sc-chev{width:16px;height:16px;stroke:var(--t-mute);fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;transition:transform .18s ease;flex:none}
.sc-card[open] .sc-chev{transform:rotate(180deg)}
.sc-dims{display:grid;gap:16px;padding:16px 0 0}
.sc-dim{display:grid;grid-template-columns:1fr auto;gap:6px 12px;align-items:center}
.sc-dim-n{font-size:13.5px;font-weight:600;color:var(--ink2);text-transform:capitalize}
.sc-dim-s{font-size:12.5px;color:var(--t-mute);font-variant-numeric:tabular-nums}
.sc-bar{grid-column:1/-1;height:5.556px;min-height:5.556px;max-height:5.556px;line-height:0;border-radius:99px;background:var(--line);overflow:hidden;box-sizing:border-box;align-self:center}
.sc-bar i{display:block;height:5.556px;border-radius:99px;background:var(--ink2)}

.sc-note{grid-column:1/-1;font-size:12.5px;line-height:1.5;color:var(--t-mute);margin:-2px 0 0}
.soft-r{display:grid;grid-template-columns:130px 1fr 30px;align-items:center;gap:14px;font-size:13px;color:var(--t-body)}
.bar-t{height:5px;border-radius:3px;background:var(--field);overflow:hidden}
.bar-t i{display:block;height:100%;background:var(--ink2);border-radius:3px;transition:width .6s cubic-bezier(.3,.8,.3,1)}
.bar-v{text-align:right;font-variant-numeric:tabular-nums;color:var(--ink2);font-weight:700}
.kv{display:grid;grid-template-columns:1fr 1fr;gap:11px 30px;margin-top:2px}
.kv-r{display:flex;justify-content:space-between;gap:14px;font-size:13px;color:var(--t-body)}
.kv-r b{color:var(--ink2);font-weight:700;font-variant-numeric:tabular-nums}
.gates{display:flex;flex-direction:column;gap:9px;margin-top:2px}
.gate{display:flex;align-items:center;gap:9px;font-size:13px;color:var(--t-body)}
.gate i{width:16px;height:16px;flex:none;display:inline-flex;align-items:center;justify-content:center;color:var(--ink2)}
.gate i svg{width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:3;stroke-linecap:round;stroke-linejoin:round}
.gate.warn i{color:#d9a02b}
.gate.warn{color:var(--t-faint)}
.cprof-bar{position:fixed;left:0;right:0;bottom:0;display:flex;justify-content:center;padding:22px;background:linear-gradient(to top,#fff 52%,rgba(255,255,255,0));pointer-events:none;z-index:5}
.cprof-invite{pointer-events:auto;background:var(--ink2);color:#fff;border:0;font:inherit;font-size:15px;font-weight:700;padding:15px 36px;border-radius:999px;cursor:pointer;box-shadow:0 10px 30px rgba(20,20,18,.2)}
.cprof-invite:hover{background:var(--blue)}
@media (max-width:640px){.cprof-inner{padding:24px 18px 120px}.cprof-name{font-size:27px}.kv{grid-template-columns:1fr}}
/* requirement vs candidate fit modal */
.fitm{position:fixed;inset:0;z-index:360;display:none;align-items:center;justify-content:center;padding:34px;background:rgba(50,52,50,.34);backdrop-filter:blur(9px);-webkit-backdrop-filter:blur(9px);opacity:0;transition:opacity .22s ease}
.fitm.on{display:flex;opacity:1}
.fitm-sheet{width:min(1180px,100%);max-height:calc(100vh - 68px);background:#fff;border-radius:20px;box-shadow:0 30px 80px rgba(28,30,28,.3);display:flex;flex-direction:column;overflow:hidden;transform:translateY(10px);transition:transform .26s cubic-bezier(.2,.7,.3,1)}
.fitm.on .fitm-sheet{transform:none}
.fitm-head{display:grid;grid-template-columns:1fr 1fr;gap:0;border-bottom:1px solid var(--line);position:sticky;top:0;background:#fff;z-index:3}
.fitm-hl{padding:22px 26px 20px;border-right:1px solid var(--line);min-width:0}
.fitm-hr{padding:22px 26px 20px;display:flex;align-items:center;gap:14px;min-width:0}
.fitm-hr .fitm-av,.fitm-hr .fitm-score,.fitm-hr .fitm-full{align-self:flex-start;margin-top:2px}
.fitm-kind{display:inline-flex;align-items:center;gap:6px;font-size:9.5px;letter-spacing:.13em;text-transform:uppercase;font-weight:800;color:var(--blue);background:rgba(103,141,198,.13);border-radius:999px;padding:4px 10px;margin-bottom:9px}
.fitm-ttl{font-family:"P22Mackinac",serif;font-weight:500;font-size:20px;letter-spacing:-.02em;color:var(--ink2);margin:0 0 8px;line-height:1.2}
.fitm-meta{display:flex;flex-wrap:wrap;gap:6px 16px;font-size:11.5px;color:var(--t-faint)}
.fitm-meta b{color:var(--ink2);font-weight:700}
.fitm-av{width:44px;height:44px;border-radius:50%;overflow:hidden;background:#e8e8e4;flex:none}
.fitm-av img{width:100%;height:100%;object-fit:cover;display:block}
.fitm-who{min-width:0;flex:1}
.fitm-nm{font-family:"P22Mackinac",serif;font-weight:500;font-size:19px;letter-spacing:-.01em;color:var(--ink2);line-height:1.2;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.fitm-role{font-size:12px;color:var(--t-faint);margin-top:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.fitm-who .pc-bdg{margin-top:7px}
.fitm-score{flex:none;text-align:center;background:rgba(103,141,198,.12);border-radius:13px;padding:7px 13px 6px}
.fitm-score b{display:block;font-family:"P22Mackinac",serif;font-weight:500;font-size:22px;line-height:1;color:var(--ink2);font-variant-numeric:tabular-nums}
.fitm-score b i{font-style:normal;font-size:12px}
.fitm-score span{display:block;font-size:8.5px;font-weight:700;letter-spacing:.13em;text-transform:uppercase;color:#8b97ab;margin-top:4px}
.fitm-full{font:inherit;font-size:12.5px;font-weight:700;color:#fff;background:var(--ink2);border:0;border-radius:999px;padding:9px 17px;cursor:pointer;flex:none;white-space:nowrap;transition:background .15s}
.fitm-full:hover{background:var(--blue)}
.fitm-x{position:absolute;top:14px;right:14px;width:32px;height:32px;border-radius:50%;border:1px solid var(--line);background:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0;z-index:3}
.fitm-x:hover{background:var(--field)}
.fitm-x svg{width:14px;height:14px;fill:none;stroke:var(--ink2);stroke-width:2;stroke-linecap:round}
.fitm-sheet{position:relative}
.fitm-scroll{overflow-y:auto;min-height:0;scrollbar-width:none;-ms-overflow-style:none}
.fitm-scroll::-webkit-scrollbar{width:0;height:0;display:none}
.fitm-body{display:grid;grid-template-columns:1fr 1fr}
.fitm-ch{background:#fbfbfa;font-size:9.5px;letter-spacing:.13em;text-transform:uppercase;font-weight:800;color:var(--t-faint);padding:11px 26px;border-bottom:1px solid var(--line);z-index:2}
.fitm-ch.l{border-right:1px solid var(--line)}
.fitm-c{padding:18px 26px 20px;border-bottom:1px solid var(--line);min-width:0}
.fitm-c.l{border-right:1px solid var(--line);background:#fcfcfb}
.fitm-l{font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;font-weight:800;color:var(--t-faint);margin:0 0 9px}
.fitm-c p{font-size:13px;line-height:1.6;color:var(--t-body);margin:0;text-wrap:pretty}
.fitm-c p+p{margin-top:8px}
.fitm-c p b{color:var(--ink2);font-weight:700}
.fitm-big{font-family:"P22Mackinac",serif;font-weight:500;font-size:22px;letter-spacing:-.02em;color:var(--ink2);line-height:1.15;margin:0 0 5px}
.fitm-v{display:inline-flex;align-items:center;gap:6px;font-size:10.5px;font-weight:800;letter-spacing:.05em;text-transform:uppercase;border-radius:999px;padding:4px 10px;margin:0 0 10px}
.fitm-v.ok{background:rgba(63,143,95,.13);color:#2f6d4a}
.fitm-v.part{background:rgba(217,160,43,.16);color:#8a6210}
.fitm-v.no{background:rgba(190,90,70,.13);color:#9b4a37}
.fitm-list{display:flex;flex-direction:column;gap:10px;margin:0;padding:0;list-style:none}
.fitm-v.ghost{visibility:hidden}
.fitm-list li{display:grid!important;grid-template-columns:16px 1fr auto;align-items:center!important;column-gap:9px;font-size:13px;line-height:16px;color:var(--ink2);min-height:16px;padding:0!important;margin:0!important}
.fitm-list li::before,.fitm-list li::marker{display:none!important;content:none!important}
.fitm-list li>*{grid-row:1}
.fitm-list li span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;grid-column:2}
.fitm-list li em{font-style:normal;font-size:11.5px;line-height:16px;color:var(--t-faint);grid-column:3;text-align:right}
.fitm-dot{width:16px;height:16px;border-radius:50%;margin:0!important;padding:0!important;grid-column:1;grid-row:1;display:grid!important;place-items:center;background:var(--field)}
.fitm-dot svg{width:10px;height:10px;display:block;fill:none;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}
.fitm-dot.y{background:#e9e9e5}.fitm-dot.y svg{stroke:#8d8e87}
.fitm-dot.n{background:#f1f1ee}.fitm-dot.n svg{stroke:#b4b5ae}
.fitm-dot.req{background:transparent;width:16px}.fitm-dot.req::before{content:"";width:6px;height:6px;border-radius:50%;background:#b4b5ae;display:block}.fitm-dot.req svg{display:none}
.fitm-extra{display:flex;flex-wrap:wrap;gap:6px;margin-top:12px}
.fitm-extra span{font-size:11.5px;font-weight:600;color:var(--t-body);background:var(--field);border-radius:999px;padding:4px 10px}
.fitm-extra .lbl{background:transparent;color:var(--t-faint);font-weight:700;padding-left:0}
.fitm-kv{display:grid;grid-template-columns:auto 1fr;gap:8px 14px;font-size:13px;align-items:baseline}
.fitm-kv dt{color:var(--t-faint);font-size:11.5px;font-weight:700;letter-spacing:.02em}
.fitm-kv dd{margin:0;color:var(--ink2);font-weight:600}
.fitm-soft{display:grid;gap:11px}
.fitm-soft-r{display:grid;grid-template-columns:1fr auto;gap:4px 10px;font-size:12.5px}
.fitm-soft-r b{font-weight:600;color:var(--ink2)}
.fitm-soft-r span{color:var(--t-mute);font-variant-numeric:tabular-nums}
.fitm-soft-r i{grid-column:1/-1;height:5px;border-radius:999px;background:var(--line);overflow:hidden;display:block}
.fitm-soft-r i em{display:block;height:100%;border-radius:999px;background:var(--blue)}
@media(max-width:820px){.fitm-body,.fitm-head{grid-template-columns:1fr}.fitm-c.l,.fitm-hl,.fitm-ch.l{border-right:0}}
`;
var st=document.createElement('style');st.textContent=CSS;document.head.appendChild(st);

function rng(s){return function(){s|=0;s=s+0x6D2B79F5|0;var t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
var FIRST='Maya Ravi Ana Jonas Priya Tomas Leila Ade Noor Kenji Sofia Marek Ines Dario Hana Omar Elena Yusuf Clara Nikhil Bea Ivan Rania Felix Aisha Petra Luca Sana Milan Grete Tariq Nora'.split(' ');
var LAST='Okafor Menon Duarte Weber Sharma Lindqvist Haddad Boateng Rahman Ito Alvarez Nowak Ferreira Costa Kimura Farouk Vasilev Demir Nyberg Iyer Almeida Petrov Cherif Brandt Yusupova Novak Bianchi Qureshi Horvat Solberg Aziz Lindgren'.split(' ');
var CITY=[['Lisbon','UTC+1'],['Berlin','UTC+2'],['Bengaluru','UTC+5:30'],['Warsaw','UTC+2'],['Nairobi','UTC+3'],['Toronto','UTC-4'],['Tallinn','UTC+3'],['Amman','UTC+3'],['Tokyo','UTC+9'],['Barcelona','UTC+2'],['Manchester','UTC+1'],['Buenos Aires','UTC-3'],['Kraków','UTC+2'],['Istanbul','UTC+3'],['Stockholm','UTC+2'],['Cape Town','UTC+2']];
var TECH_SKILL=['Go','Distributed systems','PostgreSQL','Kubernetes','Node.js','Python','Rust','Observability','Redis','Event streaming','Query optimisation','Load testing','TypeScript','gRPC','Terraform','Caching'];
var TECH_ROLE=['Backend engineer','Platform engineer','Infrastructure engineer','Site reliability engineer','Data engineer','Full-stack engineer'];
var CRE_SKILL=['Brand identity','UI / UX','Copywriting','Motion','Illustration','Art direction','Figma','After Effects','Design systems','Editorial'];
var CRE_ROLE=['Product designer','Brand designer','Copywriter','Motion designer','Art director','Creative producer'];
var AVAIL=['Immediately','Within 2 weeks','1 month','2+ months'];
var SOFT_K=['Communication','Collaboration','Ownership','Problem framing','Resilience'];
var NOTES=[
 'Wrote the clearest design note in their cohort — states assumptions before proposing a fix.',
 'Assessment showed strong disagreement handling: argued a tradeoff, then changed position on evidence.',
 'Breaks ambiguous briefs into checkable steps; asked three clarifying questions before starting.',
 'Comfortable saying what they did not finish and why, which read as unusually honest under time pressure.',
 'Structured written updates; low-drama when the scenario changed halfway through the exercise.',
 'Defaults to the smallest change that proves the point, then documents what it cost.'
];

function build(seedTxt,req){
  var seed=0;for(var i=0;i<seedTxt.length;i++)seed=(seed*31+seedTxt.charCodeAt(i))|0;
  var r=rng(seed||7),out=[];
  for(var k=0;k<58;k++){
    var creative=req?(r()>0.82?req.track!=='creative':req.track==='creative'):r()<0.28;
    var pool=creative?CRE_SKILL:TECH_SKILL;
    var sk=[];
    if(req&&((creative?'creative':'technical')===req.track)){var seedN=r()<0.78?2+(r()<0.4?1:0):1;req.skills.slice().sort(function(){return r()-0.5;}).slice(0,seedN).forEach(function(s){if(sk.indexOf(s)<0)sk.push(s);});}
    while(sk.length<4){var s=pool[Math.floor(r()*pool.length)];if(sk.indexOf(s)<0)sk.push(s);}
    var c=CITY[Math.floor(r()*CITY.length)];
    var soft={};SOFT_K.forEach(function(key){soft[key]=Math.round(58+r()*40);});
    out.push({
      name:FIRST[(k*7+3)%FIRST.length]+' '+LAST[(k*11+5)%LAST.length],
      track:creative?'creative':'technical',
      role:(creative?CRE_ROLE:TECH_ROLE)[Math.floor(r()*(creative?CRE_ROLE:TECH_ROLE).length)],
      city:c[0],tz:c[1],
      years:[2,4,5,6,7,9,12][Math.floor(r()*7)],
      skills:sk,
      avail:AVAIL[r()<0.68?Math.floor(r()*2):2+Math.floor(r()*2)],
      pref:r()<0.72?'Remote':(r()<0.5?'Hybrid':'On-site'),
      soft:soft,
      done:Math.floor(r()*9),
      winRate:Math.round(18+r()*62),
      medRank:(1+r()*7).toFixed(1),
      onTime:Math.round(66+r()*34),
      note:NOTES[Math.floor(r()*NOTES.length)],
      verified:r()<0.86
    });
  }
  return out;
}

/* Nudge the generated pool so a realistic ~20 clear the inferred gates. */
function calibrate(cands,req,active,target){
  function passing(){return cands.filter(function(c){return score(c,req,active).pass;}).length;}
  for(var i=0;i<cands.length&&passing()<target;i++){
    var c=cands[i];if(c.track!==req.track)continue;
    req.skills.slice(0,2).forEach(function(s){if(c.skills.indexOf(s)<0)c.skills[c.skills.length-1]=s;});
    if(req.avail.indexOf(c.avail)<0)c.avail=req.avail[i%req.avail.length];
    if(c.years<req.minYears)c.years=req.minYears+(i%4);
    c.verified=true;
  }
  return cands;
}

/* Lift a handful of the strongest matches into the 90s, varied per challenge. */
function elevate(cands,req,title){
  var seed=0,t=String(title||'');for(var i=0;i<t.length;i++)seed=(seed*31+t.charCodeAt(i))>>>0;
  function r(){seed=(seed*1103515245+12345)>>>0;return (seed>>>16)/65536;}
  var pass=cands.filter(function(c){return score(c,req,{}).pass;});
  pass.sort(function(a,b){return score(b,req,{}).overall-score(a,req,{}).overall;});
  var nTop=3+Math.floor(r()*3);
  pass.slice(0,nTop).forEach(function(c,k){
    c.skills=req.skills.slice(0,4).concat(c.skills.filter(function(s){return req.skills.indexOf(s)<0;})).slice(0,4);
    if(c.years<6)c.years=6+Math.floor(r()*6);
    c.avail=req.avail[0];
    c.verified=true;
    var floor=k===0?93:k===1?90:87;
    var lift=floor+Math.floor(r()*(k===0?6:5));
    SOFT_K.forEach(function(key){c.soft[key]=Math.min(99,Math.max(c.soft[key],lift-2+Math.floor(r()*6)));});
    c.onTime=Math.min(100,Math.max(c.onTime,lift));
    c.winRate=Math.min(98,Math.max(c.winRate,lift-6));
    c.done=Math.max(c.done,4+Math.floor(r()*6));
  });
  return cands;
}

function requirements(ch){
  var t=((ch.title||'')+' '+(ch.overview||'')+' '+(ch.goal||'')).toLowerCase();
  var req=[];
  function add(){[].forEach.call(arguments,function(x){if(req.indexOf(x)<0)req.push(x);});}
  if(/queue|job|deliver|retry|crash|worker/.test(t))add('Go','Distributed systems','Event streaming','Redis');
  if(/latency|load|burst|throughput|rate|p99|traffic|ingest|websocket|scale|concurren/.test(t))add('Load testing','Observability','Node.js','Caching');
  if(/quer|database|sql|index|schema|postgres|shard/.test(t))add('PostgreSQL','Query optimisation','Distributed systems');
  if(/brand|design|copy|visual|motion|illustrat|editorial/.test(t))add('Brand identity','UI / UX','Copywriting','Art direction');
  if(!req.length)add('Distributed systems','Go','Observability','PostgreSQL');
  var creative=/brand|design|copy|visual|motion|illustrat|editorial/.test(t)&&!/queue|latency|quer|database|scale/.test(t);
  var days=((ch.window||'').match(/(\d+)/)||[0,5])[1]|0;
  return{skills:req.slice(0,4),track:creative?'creative':'technical',minYears:4,avail:days<=5?['Immediately','Within 2 weeks']:AVAIL.slice(0,3),pref:'Remote'};
}

function score(c,req,active){
  var hit=c.skills.filter(function(s){return req.skills.indexOf(s)>=0;});
  var skillFit=Math.min(100,38+hit.length*17+(c.years>=6?6:0));
  var soft=Math.round(SOFT_K.reduce(function(a,k){return a+c.soft[k];},0)/SOFT_K.length);
  var ai=AVAIL.indexOf(c.avail),want=req.avail.length;
  var availFit=ai<want?100-ai*8:Math.max(30,72-ai*14);
  var rel=Math.round(c.onTime*0.5+c.winRate*0.5);
  var overall=Math.round(skillFit*0.42+soft*0.26+availFit*0.14+rel*0.18);
  var gates=[
    {k:'Track match',ok:c.track===req.track,txt:c.track===req.track?'Matches the challenge track':'Different discipline'},
    {k:'Skill overlap',ok:hit.length>=2,txt:hit.length+' of '+req.skills.length+' required skills evidenced'},
    {k:'Availability',ok:req.avail.indexOf(c.avail)>=0,txt:c.avail+' vs '+req.window},
    {k:'Seniority',ok:c.years>=req.minYears,txt:c.years+' yrs experience'},
    {k:'Identity verified',ok:c.verified,txt:c.verified?'ID and work history verified':'Verification pending'}
  ];
  var pass=c.track===req.track&&hit.length>=1;
  if(active.skills)pass=pass&&hit.length>=2;
  if(active.avail)pass=pass&&req.avail.indexOf(c.avail)>=0;
  if(active.years)pass=pass&&c.years>=req.minYears;
  if(active.pref)pass=pass&&c.pref==='Remote';
  if(active.verified)pass=pass&&c.verified;
  return{hit:hit,skillFit:skillFit,soft:soft,availFit:availFit,rel:rel,overall:overall,gates:gates,pass:pass};
}

var GS_COL=['#3f5f8f','#678dc6','#8fa9d4','#b4c4e0','#d3dcec'];
function gatesScoring(s,CRIT){
  var pts=CRIT.map(function(cr){return cr.w*cr.sc/3;});
  var total=Math.round(pts.reduce(function(a,b){return a+b;},0));
  var cleared=s.gates.filter(function(g){return g.ok;}).length;
  var tickD='<svg viewBox="0 0 24 24"><polyline points="4 12.5 9.5 18 20 6.5"></polyline></svg>';
  var warnD='<svg viewBox="0 0 24 24"><line x1="12" y1="7" x2="12" y2="14"></line><line x1="12" y1="17.6" x2="12" y2="17.7"></line></svg>';
  return '<div class="pnl-sec"><h4>Weighted score</h4><div class="gs-hero">'
      +'<div class="gs-score"><b>'+total+'<em>/100</em></b><span>Rubric total</span></div>'
      +'<div class="gs-stackwrap"><div class="gs-stack">'+CRIT.map(function(cr,i){return '<i style="width:'+pts[i]+'%;background:'+GS_COL[i%5]+'" title="'+esc(cr.t)+'"></i>';}).join('')+'</div>'
        +'<div class="gs-legend">'+CRIT.map(function(cr,i){return '<span><i style="background:'+GS_COL[i%5]+'"></i>'+esc(cr.t)+' \u00b7 '+(Math.round(pts[i]*10)/10)+'</span>';}).join('')+'</div></div>'
    +'</div></div>'
    +'<div class="pnl-sec"><h4>Hard gates<span class="gs-count">'+cleared+' of '+s.gates.length+' cleared</span></h4><div class="gs-gates">'
      +s.gates.map(function(g){return '<div class="gs-gate'+(g.ok?'':' no')+'"><div class="gs-gate-t"><span class="gs-tick">'+(g.ok?tickD:warnD)+'</span>'+esc(g.k)+'</div><div class="gs-gate-e">'+esc(g.txt)+'</div></div>';}).join('')
    +'</div></div>'
    +'<div class="pnl-sec"><h4>Rubric criteria</h4><div class="gs-crit">'
      +CRIT.map(function(cr,i){return '<div class="gs-row"><span class="gs-row-t">'+esc(cr.t)+'</span>'
        +'<span class="gs-row-r"><span class="gs-pips'+(cr.sc===3?' full':'')+'">'+[0,1,2].map(function(j){return '<i class="'+(j<cr.sc?'on':'')+'"></i>';}).join('')+'</span>'
        +'<span class="gs-pts">'+(Math.round(pts[i]*10)/10)+' of '+cr.w+'</span></span>'
        +'<p class="gs-q">'+esc(cr.q)+'</p><p class="gs-e">'+esc(cr.ev)+'</p></div>';}).join('')
    +'</div></div>';
}
function bar(label,v){return '<div class="soft-r"><span>'+label+'</span><span class="bar-t"><i style="width:'+v+'%"></i></span><span class="bar-v">'+v+'</span></div>';}
var SOFT_NOTE={
 'Communication':'States assumptions before proposing a fix, so reviewers rarely have to ask what they meant.',
 'Collaboration':'Credits specific teammates and shows where they changed their approach after a review.',
 'Ownership':'Follows work past the merge \u2014 describes how they verified the fix held in production.',
 'Problem framing':'Names the constraint that actually binds before reaching for a solution.',
 'Resilience':'Handled a live incident scenario without inventing certainty they did not have.'
};
function assessCard(c){
  var vals=SOFT_K.map(function(k){return c.soft[k];});
  var overall=Math.round(vals.reduce(function(a,b){return a+b;},0)/vals.length);
  var best=vals.indexOf(Math.max.apply(null,vals));
  return '<div class="sc-card"><div class="sc-top"><span class="sc-lbl">Assessment score</span><span class="sc-right"><span class="sc-num">'+overall+'<span>%</span></span></span></div><div class="sc-dims">'
    +SOFT_K.map(function(k,i){var v=c.soft[k];
      return '<div class="sc-dim'+(i===best?' best':'')+'"><span class="sc-dim-n">'+esc(k.toLowerCase())+'</span><span class="sc-dim-s">'+v+'%</span><span class="sc-bar"><i style="width:'+v+'%"></i></span><span class="sc-note">'+esc(SOFT_NOTE[k]||'')+'</span></div>';
    }).join('')+'</div></div>';
}
function esc(s){return String(s).replace(/[&<>]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;'}[c];});}

var CAT_MAP={'Backend engineer':'Backend engineering','Platform engineer':'Platform & infrastructure','Infrastructure engineer':'Platform & infrastructure','Site reliability engineer':'Platform & infrastructure','Data engineer':'Data engineering','Full-stack engineer':'Full-stack engineering','Product designer':'Product design','Brand designer':'Brand & visual design','Copywriter':'Content & copywriting','Motion designer':'Motion & animation','Art director':'Art direction','Creative producer':'Creative production'};
function categoryOf(c){return CAT_MAP[c.role]||c.role;}

function open(initial){
  var list=(typeof window.__challengeList==='function'?window.__challengeList():null);
  if(!list||!list.length)list=[initial];
  if(!list.some(function(c){return c.closed;})){var bz=list.filter(function(c){return c.kind==='bounty';})[0]||list[0];list.push(Object.assign({},bz,{title:'Detect anomalies in a payments event stream within 200ms',kind:'bounty',published:true,closed:true}));}
  var selIdx=0;for(var i=0;i<list.length;i++){if(list[i].title===initial.title){selIdx=i;break;}}
  if(list.every(function(c){return c.title!==initial.title;})){list.unshift(initial);selIdx=0;}

  var chev='<svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>';
  var el=document.createElement('div');el.className='pool';
  el.innerHTML='<div class="pool-top"><button class="pool-back" type="button"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>Back to challenge</button><div class="pool-logo"><span class="tc-mark"><svg viewBox="0 0 40 42" aria-hidden="true"><path fill="#648dc6" d="M1 1H16V8H8V34H16V41H1ZM39 1H24V8H32V34H24V41H39Z"></path></svg></span><span class="the">the</span>Colosseum</div>'+USER_HTML+'</div>'
    +'<div class="pool-body"><div class="pool-h1-row"><h1 class="pool-h1">Targeted candidates</h1></div>'
    +'<div class="pool-controls">'
    +'<div class="cha-dd" id="ddChal"><button class="cha-btn" type="button"><span class="t"></span>'+chev+'</button><div class="cha-menu"></div></div>'
    +'<div class="vtog"><button class="vtog-b on" type="button" data-v="cands">Candidates</button><button class="vtog-b" type="button" data-v="pipe">Hiring pipeline</button></div>'
    +'<div class="cand-filters" id="candFilters">'
    +'<div class="cha-dd" id="ddReq"><button class="cha-btn" type="button"><span class="t">Requirements</span><span class="cnt" hidden></span>'+chev+'</button><div class="cha-menu md-menu"></div></div>'
    +'<div class="cha-dd" id="ddTech"><button class="cha-btn" type="button"><span class="t">Tech stack</span><span class="cnt" hidden></span>'+chev+'</button><div class="cha-menu md-menu"></div></div>'
    +'</div>'
    +'<div class="pipe-filters" id="pipeFilters" hidden></div>'
    +'<button class="pool-imp" id="poolImp" type="button" hidden><svg viewBox="0 0 24 24"><path d="M12 15V3"/><polyline points="7 8 12 3 17 8"/><path d="M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/></svg>Import</button>'
    +'</div>'
    +'<div id="viewCands"><div class="cats" id="poolGrid"></div></div>'
    +'<div id="viewPipe" hidden></div>'
    +'</div>';
  document.body.appendChild(el);wireUser(el);
  var cprof=document.createElement('div');cprof.className='cprof';document.body.appendChild(cprof);

  var grid=el.querySelector('#poolGrid');
  var ddChal=el.querySelector('#ddChal'),ddReq=el.querySelector('#ddReq'),ddTech=el.querySelector('#ddTech');
  var chalT=ddChal.querySelector('.t'),chalMenu=ddChal.querySelector('.cha-menu');
  var reqMenu=ddReq.querySelector('.cha-menu'),reqCnt=ddReq.querySelector('.cnt');
  var techMenu=ddTech.querySelector('.cha-menu'),techCnt=ddTech.querySelector('.cnt');

  var challenge,req,cands,active,techSel=[],sortBy='match',currentRows=[];

  // dropdown open/close
  [ddChal,ddReq,ddTech].forEach(function(dd){
    dd.querySelector('.cha-btn').onclick=function(e){e.stopPropagation();var was=dd.classList.contains('open');[ddChal,ddReq,ddTech].forEach(function(d){d.classList.remove('open');});if(!was)dd.classList.add('open');};
  });
  document.addEventListener('click',function(e){if(!el.contains(e.target)||!e.target.closest('.cha-dd')){[ddChal,ddReq,ddTech].forEach(function(d){d.classList.remove('open');});}});

  function short6(s){var w=String(s||'').trim().split(/\s+/);return w.length>6?w.slice(0,6).join(' ')+'\u2026':w.join(' ');}
  function selectChallenge(idx){
    selIdx=idx;challenge=list[idx];
    req=requirements(challenge);req.window=challenge.window;
    active={skills:true,avail:true,years:true,pref:false,verified:true};
    techSel=[];
    cands=elevate(calibrate(build(challenge.title||'challenge',req),req,active,20),req,challenge.title||'challenge');
    chalT.textContent=short6(challenge.title||'Challenge');
    renderChalMenu();renderReqMenu();renderTechMenu();render();
    pipeUI.stage=2;pipeUI.compare=false;pipeUI.lim=10;pipeUI.bPlace=null;pipeUI.sched=null;
    if(viewPipe&&!viewPipe.hidden)renderPipe();
  }
  function renderChalMenu(){var jobs=['Senior Backend Engineer','Platform Engineer','Full-Stack Engineer (Growth)'];var kindLbl={bounty:'Bounty',hiring:'Hiring',job:'Job'};var h='<div class="cha-sec">Challenges</div>'+list.map(function(c,i){var chips='<span class="cha-chip'+(c.published?' pub':'')+'">'+(c.published?'Published':'Draft')+'</span>'+(c.kind&&kindLbl[c.kind]?'<span class="cha-chip kind">'+kindLbl[c.kind]+'</span>':'');return '<div class="cha-opt'+(i===selIdx?' sel':'')+'" data-i="'+i+'"><span class="dot"></span><span class="cha-txt">'+esc(c.title||'Challenge')+'<span class="cha-chips">'+chips+'</span></span></div>';}).join('');h+='<div class="cha-div"></div><div class="cha-sec">Jobs</div>'+jobs.map(function(j){return '<div class="cha-opt" data-job="1"><span class="dot"></span><span>'+esc(j)+'</span></div>';}).join('');chalMenu.innerHTML=h;}
  chalMenu.onclick=function(e){var o=e.target.closest('.cha-opt');if(!o)return;ddChal.classList.remove('open');if(o.getAttribute('data-job')){chalT.textContent=short6(o.textContent.trim());chalMenu.querySelectorAll('.cha-opt').forEach(function(x){x.classList.remove('sel');});o.classList.add('sel');jobSel=o.textContent.trim();pipeUI.stage=1;pipeUI.compare=false;pipeUI.lim=10;if(viewPipe&&!viewPipe.hidden)renderPipe();return;}jobSel=null;selectChallenge(+o.getAttribute('data-i'));};

  var tick='<svg class="tick" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>';
  function counts(){var o={skills:0,avail:0,years:0,pref:0,verified:0};cands.forEach(function(c){if(c.track!==req.track)return;var s=score(c,req,{});if(s.hit.length>=2)o.skills++;if(req.avail.indexOf(c.avail)>=0)o.avail++;if(c.years>=req.minYears)o.years++;if(c.pref==='Remote')o.pref++;if(c.verified)o.verified++;});return o;}
  function renderReqMenu(){
    var n=counts();
    reqMenu.innerHTML='<p class="md-head">Auto-matched requirements</p><div class="md-chips">'
      +'<button class="pchip'+(active.skills?' on':'')+'" data-f="skills">'+tick+'2+ required skills <span class="n">'+n.skills+'</span></button>'
      +'<button class="pchip'+(active.avail?' on':'')+'" data-f="avail">'+tick+'Free in '+esc(req.window)+' <span class="n">'+n.avail+'</span></button>'
      +'<button class="pchip'+(active.years?' on':'')+'" data-f="years">'+tick+req.minYears+'+ yrs experience <span class="n">'+n.years+'</span></button>'
      +'<button class="pchip'+(active.pref?' on':'')+'" data-f="pref">'+tick+'Remote <span class="n">'+n.pref+'</span></button>'
      +'<button class="pchip'+(active.verified?' on':'')+'" data-f="verified">'+tick+'Verified <span class="n">'+n.verified+'</span></button>'
      +'</div><button class="md-reset" type="button" data-r="req">Reset requirements</button>';
    var na=['skills','avail','years','pref','verified'].filter(function(k){return active[k];}).length;
    reqCnt.textContent=na;reqCnt.hidden=na===0;
  }
  reqMenu.onclick=function(e){var c=e.target.closest('.pchip[data-f]');if(c){active[c.getAttribute('data-f')]=!active[c.getAttribute('data-f')];renderReqMenu();render();return;}if(e.target.closest('[data-r]')){active={skills:true,avail:true,years:true,pref:false,verified:true};renderReqMenu();render();}};

  function renderTechMenu(){
    var poolSk=(req.track==='creative')?CRE_SKILL:TECH_SKILL;
    techMenu.innerHTML='<p class="md-head">Filter by tech stack</p><div class="md-chips">'
      +poolSk.map(function(k){return '<button class="pchip'+(techSel.indexOf(k)>=0?' on':'')+'" data-t="'+esc(k)+'">'+tick+esc(k)+'</button>';}).join('')
      +'</div><button class="md-reset" type="button" data-r="tech">Clear tech stack</button>';
    techCnt.textContent=techSel.length;techCnt.hidden=techSel.length===0;
  }
  techMenu.onclick=function(e){var c=e.target.closest('.pchip[data-t]');if(c){var k=c.getAttribute('data-t');var ix=techSel.indexOf(k);if(ix>=0)techSel.splice(ix,1);else techSel.push(k);renderTechMenu();render();return;}if(e.target.closest('[data-r]')){techSel=[];renderTechMenu();render();}};

  function matched(){
    var rows=cands.map(function(c){return{c:c,s:score(c,req,active)};}).filter(function(x){return x.s.pass;});
    if(techSel.length)rows=rows.filter(function(x){return x.c.skills.some(function(k){return techSel.indexOf(k)>=0;});});
    rows.sort(function(a,b){return b.s.overall-a.s.overall;});
    var seen={};rows=rows.filter(function(x){var n=x.c.name;if(seen[n])return false;seen[n]=1;return true;});
    return rows;
  }

  function closeAll(){el.classList.remove('on');cprof.classList.remove('on');setTimeout(function(){el.remove();cprof.remove();},450);document.querySelectorAll('.ch-detail.ch-published').forEach(function(d){d.classList.remove('ch-published');});}
  el.querySelector('.pool-back').onclick=function(){closeAll();};

  var imp=document.createElement('div');imp.className='imp-back';
  imp.innerHTML='<div class="imp" role="dialog" aria-label="Import candidates">'
    +'<button class="imp-x" type="button" aria-label="Close"><svg viewBox="0 0 24 24"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg></button>'
    +'<h3 class="imp-t">Import your own candidates</h3>'
    +'<p class="imp-p">Bring in applicants from your careers page, ATS export or a spreadsheet. They are scored against this challenge and appear alongside the targeted pool.</p>'
    +'<div class="imp-drop" id="impDrop"><svg viewBox="0 0 24 24"><path d="M12 16V4"/><polyline points="7 9 12 4 17 9"/><path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"/></svg><b>Drop a file or browse</b><span>One row per candidate. Name and email required; links and skills optional.</span></div>'
    +'<input type="file" id="impFile" accept=".csv,.json,.xlsx,.xml" multiple hidden />'
    +'<div class="imp-fmts"><span>CSV</span><span>JSON</span><span>XLSX</span><span>HR-XML</span><span>Max 5,000 rows</span></div>'
    +'<div class="imp-files" id="impFiles"></div>'
    +'<div class="imp-or">or connect a source</div>'
    +'<div class="imp-srcs"><button class="imp-src" id="impUrlBtn" type="button">Careers page URL</button><button class="imp-src" type="button">Greenhouse</button><button class="imp-src" type="button">Lever</button><button class="imp-src" type="button">LinkedIn export</button></div>'
    +'<div class="imp-foot"><p class="imp-note">Imported candidates stay private to your team. Nothing is added to the public leaderboard.</p><button class="imp-go" type="button" disabled>Import candidates</button></div>'
    +'</div>';
  document.body.appendChild(imp);
  var impFile=imp.querySelector('#impFile'),impFiles=imp.querySelector('#impFiles'),impDrop=imp.querySelector('#impDrop'),impGo=imp.querySelector('.imp-go');
  function closeImp(){imp.classList.remove('on');}
  el.querySelector('#poolImp').onclick=function(){imp.classList.add('on');};
  imp.querySelector('.imp-x').onclick=closeImp;
  imp.addEventListener('click',function(e){if(e.target===imp)closeImp();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&imp.classList.contains('on'))closeImp();});
  var impUrlBtn=imp.querySelector('#impUrlBtn');
  impUrlBtn.onclick=function(){
    var wrap=impUrlBtn.parentNode,slot=document.createElement('div');
    slot.className='imp-src url-on';
    slot.innerHTML='<input class="imp-url" type="url" placeholder="https://yourcompany.com/careers" />';
    wrap.replaceChild(slot,impUrlBtn);
    var inp=slot.querySelector('.imp-url');inp.focus();
    inp.addEventListener('input',function(){impGo.disabled=!inp.value.trim()&&!impFiles.children.length;});
  };
  impDrop.onclick=function(){impFile.click();};
  ['dragover','dragenter'].forEach(function(t){impDrop.addEventListener(t,function(e){e.preventDefault();impDrop.classList.add('hot');});});
  ['dragleave','drop'].forEach(function(t){impDrop.addEventListener(t,function(e){e.preventDefault();impDrop.classList.remove('hot');});});
  impDrop.addEventListener('drop',function(e){listFiles(e.dataTransfer&&e.dataTransfer.files);});
  impFile.addEventListener('change',function(){listFiles(impFile.files);});
  function listFiles(fl){
    if(!fl||!fl.length)return;
    for(var i=0;i<fl.length;i++){
      var kb=Math.max(1,Math.round(fl[i].size/1024));
      var row=document.createElement('div');row.className='imp-file';
      row.innerHTML='<span></span><em>'+kb+' KB</em>';
      row.querySelector('span').textContent=fl[i].name;
      impFiles.appendChild(row);
    }
    impGo.disabled=false;
  }
  impGo.onclick=function(){impGo.textContent='Importing…';setTimeout(function(){impGo.textContent='Imported';setTimeout(closeImp,600);},900);};
  var _closeAllInner=closeAll;closeAll=function(){imp.remove();_closeAllInner();};

  var viewCands=el.querySelector('#viewCands'),viewPipe=el.querySelector('#viewPipe'),pipeBuilt=false;
  el.querySelector('.vtog').addEventListener('click',function(e){var b=e.target.closest('.vtog-b');if(!b)return;var v=b.getAttribute('data-v');el.querySelectorAll('.vtog-b').forEach(function(x){x.classList.toggle('on',x===b);});viewCands.hidden=(v!=='cands');viewPipe.hidden=(v!=='pipe');var h1=el.querySelector('.pool-h1');if(h1)h1.textContent=v==='pipe'?'Hiring pipeline':'Targeted candidates';el.querySelector('#candFilters').hidden=(v!=='cands');el.querySelector('#pipeFilters').hidden=(v!=='pipe');if(v==='pipe'){renderPipe();}el.scrollTop=0;});
  viewPipe.addEventListener('click',function(e){var card=e.target.closest('.pipe-card');if(!card)return;var av=e.target.closest('.prow-id');if(av&&card.classList.contains('exp')){var i=av.getAttribute('data-i');if(i!=null)showProfile(+i);return;}var sv=e.target.closest('.sd-view');if(sv){showProfile(+sv.getAttribute('data-i'));return;}var node=e.target.closest('.step-node');if(node&&card.classList.contains('exp')){var pi=+node.getAttribute('data-i'),psi=+node.getAttribute('data-si'),prow=node.closest('.prow'),slot=prow.querySelector('.sd-slot'),sel=node.classList.contains('sel');prow.querySelectorAll('.step-node.sel').forEach(function(n){n.classList.remove('sel');});if(sel){slot.classList.remove('on');slot.innerHTML='';return;}node.classList.add('sel');slot.innerHTML=pstageDetail(pi,psi,+(node.getAttribute('data-rk')||0),+(node.getAttribute('data-sc')||0));slot.classList.add('on');return;}if(!card.classList.contains('exp')&&e.target.closest('.pipe-mini')){var exp=card.classList.toggle('exp');card.querySelector('.pipe-mini').hidden=exp;card.querySelector('.pipe').hidden=!exp;}});
  viewPipe.addEventListener('click',function(e){var btn=e.target.closest('.pipe-exp');if(!btn)return;var card=viewPipe.querySelector('.pipe-card');var exp=card.classList.toggle('exp');card.querySelector('.pipe-mini').hidden=exp;card.querySelector('.pipe').hidden=!exp;btn.querySelector('.pipe-exp-lbl').textContent=exp?'Collapse':'Expand';});

  function stageRects(){
    var slide=viewPipe.querySelector('.bf-slide');if(!slide)return null;
    var o={},k=slide.children,i;
    for(i=0;i<k.length;i++){var id=k[i].getAttribute('data-k');if(id!=null){var r=k[i].getBoundingClientRect();o[id]={l:r.left,t:r.top,w:r.width};}}
    return o;
  }
  function flipStages(old){
    var slide=viewPipe.querySelector('.bf-slide');if(!slide||!old)return;
    if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    var list=[],k=slide.children,i;
    for(i=0;i<k.length;i++){
      var el=k[i],o=old[el.getAttribute('data-k')],r=el.getBoundingClientRect();
      el.style.transformOrigin='left center';el.style.willChange='transform,opacity';
      if(o){var sx=o.w/(r.width||1);el.style.transform='translate('+(o.l-r.left)+'px,'+(o.t-r.top)+'px) scale('+(sx<.05?.05:sx).toFixed(3)+')';old[el.getAttribute('data-k')]=null;}
      else{el.style.opacity='0';el.style.transform='scale(.9)';}
      list.push(el);
    }
    slide.offsetHeight;
    list.forEach(function(el){el.style.transition='transform .34s cubic-bezier(.2,.7,.3,1),opacity .26s ease';el.style.transform='';el.style.opacity='';});
    setTimeout(function(){list.forEach(function(el){el.style.transition='';el.style.transformOrigin='';el.style.willChange='';});},400);
  }
  function centerStage(){
    var slide=viewPipe.querySelector('.bf-slide');if(!slide)return;
    var big=slide.querySelector('.bf-big');if(!big)return;
    var stack=slide.parentNode;
    if(getComputedStyle(slide).flexDirection==='column'){slide.style.transform='';return;}
    var prev=slide.style.transform;slide.style.transition='none';slide.style.transform='none';
    var sr=stack.getBoundingClientRect(),br=big.getBoundingClientRect();
    var scale=(slide.offsetWidth?slide.getBoundingClientRect().width/slide.offsetWidth:1)||1;
    var off=((sr.left+sr.width/2)-(br.left+br.width/2))/scale;
    var kids=slide.children,rowW=0;
    if(kids.length){var fr=kids[0].getBoundingClientRect(),lr=kids[kids.length-1].getBoundingClientRect();rowW=(lr.right-fr.left)/scale;}
    var stackW=sr.width/scale;
    if(rowW&&window.innerWidth>860){var lo=Math.min(0,stackW-rowW),hi=Math.max(0,stackW-rowW);off=Math.max(lo,Math.min(hi,off));}
    slide.style.transform=prev||'none';slide.offsetHeight;slide.style.transition='';
    slide.style.transform='translateX('+Math.round(off)+'px)';
  }
  window.addEventListener('resize',centerStage);
  (function(){var x0=null,y0=0;
    viewPipe.addEventListener('touchstart',function(e){if(!e.target.closest('.bf-stack'))return;x0=e.touches[0].clientX;y0=e.touches[0].clientY;},{passive:true});
    viewPipe.addEventListener('touchend',function(e){if(x0===null)return;var dx=e.changedTouches[0].clientX-x0,dy=e.changedTouches[0].clientY-y0;x0=null;
      if(Math.abs(dx)<40||Math.abs(dx)<Math.abs(dy)*1.2)return;
      var big=viewPipe.querySelector('.bf-slide .bf-big');if(!big)return;
      var to=dx<0?big.nextElementSibling:big.previousElementSibling;
      if(to&&to.classList.contains('bf-mini')){e.preventDefault();to.click();}
    });
  })();

  var PSTAGES=['Applied','AI screen','Challenge','AI interview','Finalist'];
  function audit(type,i,ex){if(!window.tcAudit)return;try{var src=currentRows.length?currentRows:matched(),x=src[i];tcAudit.log(Object.assign({type:type,cand:x&&x.c?x.c.name:'Candidate',stage:PSTAGES[pipeUI.stage]||'',chal:(challenge&&challenge.title)||''},ex||{}));}catch(e){}}
  var jobSel=null;
  function isNB(){return !(challenge&&challenge.kind==='bounty'&&!jobSel);}
  function visStages(){if(jobSel)return [1,3,4];return (challenge&&challenge.kind==='bounty')?[1,2,4]:[1,2,3,4];}
  var IVS=[{d:'25 Sep 2026',t:'10:30'},{d:'26 Sep 2026',t:'15:00'}];
  function ivDone(rk){var d=21-(rk%12);return{d:(d<10?'0':'')+d+' Sep 2026'.replace(/^0/,''),t:['10:30','14:00','16:30'][rk%3]};}
  function hvData(rk,oi){
    var H=[{day:'15 Sep 2026',time:'14:00',len:'1 hr 10 min',w:'Panel of three \u00b7 hiring manager + two engineers',wh:'Google Meet',st:'Offer extended',cls:'ok'},
      {day:'17 Sep 2026',time:'11:00',len:'55 min',w:'Hiring manager',wh:'On site',st:'Hired \u00b7 starts 13 Oct',cls:'ok'},
      {day:'29 Sep 2026',time:'16:00',len:'about 60 min',w:'Hiring manager + staff engineer',wh:'Zoom',sched:true,st:'Interview scheduled \u00b7 29 Sep',cls:'warn'}];
    var h=Object.assign({},H[rk%3]);
    if(h.sched&&!(pipeUI.sched&&pipeUI.sched[oi])){h.sched=false;h.unsched=true;h.st='Not yet scheduled';}
    if(h.sched&&pipeUI.hvDone&&pipeUI.hvDone[rk]){h.sched=false;h.len='58 min';h.day='23 Sep 2026';h.st='Interview completed \u00b7 decision due';h.cls='';}
    return h;
  }
  function hvRewards(rk){
    if(jobSel)return [[['Offer','$182k base + equity','Awaiting reply \u00b7 until 30 Sep'],['Relocation support','$8,000','On acceptance']],[['Signing bonus','$10,000','Paid on start date']],[]][rk%3];
    return [[['Finalist reward',prizeOf(0),'Paid 18 Sep'],['Offer','$168k base + equity','Awaiting reply \u00b7 until 30 Sep']],[['Finalist reward',prizeOf(1),null],['Signing bonus','$5,000','Paid on start date']],[['Finalist reward',prizeOf(2),null]]][rk%3];
  }
  var pipeUI={stage:2,exp:true,compare:false,lim:10};
  viewPipe.addEventListener('click',function(e){
    var t=e.target;
    var nav=t.closest('.bf-nav');if(nav){var d=+nav.getAttribute('data-d');pipeUI.lim=10;var vs=visStages(),vn=Math.min(vs.length-1,Math.max(0,vs.indexOf(pipeUI.stage)+d));pipeUI.stage=vs[vn];pipeUI.compare=false;flipPipe(renderPipe);return;}
    var mini=t.closest('.bf-mini');if(mini){pipeUI.lim=10,pipeUI.stage=+mini.getAttribute('data-s');pipeUI.compare=false;flipPipe(renderPipe);return;}
    var who=t.closest('.bf-who,.cmp-who');if(who&&who.hasAttribute('data-who')){showProfile(+who.getAttribute('data-who'));return;}
    var sm=t.closest('.bf-showmore');if(sm){pipeUI.lim=(pipeUI.lim||10)+10;renderPipe();return;}
    var rail=t.closest('.bf-rail-b');if(rail){pipeUI.lim=10,pipeUI.stage=+rail.getAttribute('data-s');pipeUI.compare=false;flipPipe(renderPipe);return;}
    var rev=t.closest('.bf-rev');if(rev){var ri=rev.getAttribute('data-i'),slot=viewPipe.querySelector('.bf-slot[data-slot="'+ri+'"]');
      if(slot){var open=slot.classList.contains('on');
        viewPipe.querySelectorAll('.bf-slot.on').forEach(function(s2){s2.classList.remove('on');s2.innerHTML='';});
        viewPipe.querySelectorAll('.bf-rev').forEach(function(b2){b2.textContent=b2.getAttribute('data-s')==='4'?'View':'Review';});
        if(!open){var _s=+(rev.getAttribute('data-s')||1);slot.innerHTML=_s===4?((challenge&&challenge.kind==='bounty'&&!jobSel)?winDetail(+(rev.getAttribute('data-rk')||0),+ri):hireDetail(+(rev.getAttribute('data-rk')||0),+ri)):pstageDetail(+ri,+(rev.getAttribute('data-s')||1),+(rev.getAttribute('data-rk')||0),+(rev.getAttribute('data-sc')||0));slot.classList.add('on');rev.textContent='Hide';}}
      return;}
    var stc=t.closest('.bf-stat');if(stc){var no=!stc.classList.contains('on');stc.classList.toggle('on',no);stc.setAttribute('aria-expanded',no?'true':'false');pipeUI.statOpen=no;return;}
    var wrt=t.closest('.wd-rate');if(wrt){var roi=+wrt.getAttribute('data-i'),rsrc=currentRows.length?currentRows:matched(),rx=rsrc[roi]||{c:{name:'this candidate'}};reviewModal(rx.c.name,0,roi,function(rev){if(!rev)return;pipeUI.rated=pipeUI.rated||{};pipeUI.rated[roi]=rev.r;var wa=viewPipe.querySelector('.bf-slot[data-slot="'+roi+'"] .wd-rate');if(wa)wa.outerHTML=rateBtn(roi);});return;}
    var wdd=t.closest('.wd-dist');if(wdd){distModal(+wdd.getAttribute('data-rk'),+wdd.getAttribute('data-i'));return;}
    var wsb=t.closest('.wd-sub-b');if(wsb){showSubmission(+wsb.getAttribute('data-i'),+(wsb.getAttribute('data-sc')||0));return;}
    var srk=t.closest('.wd-act .sd-rank');if(srk){rankModal(+srk.getAttribute('data-i'),+(srk.getAttribute('data-rk')||0));return;}
    var hj=t.closest('.hv-join');if(hj){if(hj.disabled)return;hj.disabled=true;hj.textContent='Joining\u2026';var hrk=+hj.getAttribute('data-rk'),hoi=hj.getAttribute('data-i');audit('join',+hoi);
      setTimeout(function(){pipeUI.hvDone=pipeUI.hvDone||{};pipeUI.hvDone[hrk]=true;renderPipe();var b=viewPipe.querySelector('.bf-rev[data-i="'+hoi+'"]');if(b)b.click();},2000);return;}
    var ccm=t.closest('.cc-msg');if(ccm){if(window.colChat)colChat.open('c:'+ccm.getAttribute('data-name'));return;}
    var rem=t.closest('.iv-rem');if(rem){audit('reminder',+rem.getAttribute('data-i'));rem.disabled=true;rem.textContent='Reminder sent';return;}
    var sch=t.closest('.sd-sched');if(sch){scheduleModal(+sch.getAttribute('data-i'));return;}
    var vs=t.closest('.sd-sub');if(vs){showSubmission(+vs.getAttribute('data-i'),+(vs.getAttribute('data-sc')||0));return;}
    var tr=t.closest('.sd-tr');if(tr){showTranscript(+tr.getAttribute('data-i'));return;}
    var rbb=t.closest('.wd-rb');if(rbb){var ri=+rbb.getAttribute('data-i');audit('revert',ri);if(pipeUI.bConf)delete pipeUI.bConf[ri];renderPipe();return;}
    var cfb=t.closest('.sd-conf');if(cfb){var ci=+cfb.getAttribute('data-i'),cr=+cfb.getAttribute('data-rk');audit('confirm',ci);pipeUI.bConf=pipeUI.bConf||{};pipeUI.bConf[ci]=1;pipeUI.bPlace=pipeUI.bPlace||{};if(pipeUI.bPlace[ci]==null&&cr<3){Object.keys(pipeUI.bPlace).forEach(function(k){if(pipeUI.bPlace[k]===cr&&+k!==ci)delete pipeUI.bPlace[k];});pipeUI.bPlace[ci]=cr;}renderPipe();var rb=viewPipe.querySelector('.bf-rev[data-i="'+ci+'"]');if(rb)rb.click();return;}
      var ovr=t.closest('.sd-ovr');if(ovr){if(ovr.classList.contains('sd-rank'))rankModal(+ovr.getAttribute('data-i'),+(ovr.getAttribute('data-rk')||0));else confirmRemove(+ovr.getAttribute('data-i'));return;}
    var act=t.closest('.bf-act');if(act){var ai=act.getAttribute('data-i');if(ai!=null){showProfile(+ai);return;}}
    var op=t.closest('[data-bf-compare]');if(op){pipeUI.lim=10;pipeUI.stage=4;pipeUI.compare=!pipeUI.compare;renderPipe();var ex=viewPipe.querySelector('.bf-exp');if(ex){var sc0=ex.closest('.pool')||document.scrollingElement;sc0.scrollTo({top:ex.getBoundingClientRect().top-sc0.getBoundingClientRect().top+sc0.scrollTop-24,behavior:'smooth'});}return;}
    op=t.closest('[data-bf-jump]');if(op){var ex=viewPipe.querySelector('.bf-exp');if(ex){var sc=ex.closest('.pool')||document.scrollingElement;sc.scrollTo({top:ex.getBoundingClientRect().top-sc.getBoundingClientRect().top+sc.scrollTop-24,behavior:'smooth'});}return;}
  });
  function pdBar(p){return '<div class="sd-bar"><i style="width:'+p+'%"></i></div>';}
  function pdMetric(l,v,p,ok){return '<div class="sd-metric"><div class="sd-metric-t"><span>'+l+'</span><b'+(ok?' class="ok"':'')+'>'+v+'</b></div>'+pdBar(p)+'</div>';}
  function pstageDetail(i,si,rk,sc){
    var x=currentRows[i];if(!x)return '';
    var c=x.c,s=x.s,ov=s.overall,fn=esc((c.name||'').split(' ')[0]);
    var seed=0;for(var k=0;k<c.name.length;k++)seed=(seed*31+c.name.charCodeAt(k))>>>0;
    function rnd(a,b){seed=(seed*1103515245+12345)>>>0;return a+seed%(b-a+1);}
    var sk=(c.skills||[]).slice(0,4),head,lead,mets=[],ev='',vcls='',extra='';
    if(si===0){
      var must=rnd(4,6),yrs=rnd(4,11);
      head='Advanced to screening';
      lead='AI parsed '+fn+'\u2019s resume, portfolio and public profiles, then checked every claim against the role\u2019s must-haves. Each item below links to its source in the full profile \u2014 nothing here is inferred.';
      mets=[pdMetric('Relevant experience',yrs+' yrs',Math.min(100,yrs*11),true),pdMetric('Must-have skills matched',must+' of 6',Math.round(must/6*100),true),(function(){var d1=rnd(72,94);return pdMetric('Domain overlap',d1+'%',d1,false);})()];
      ev='<p class="sd-ev-h">Extracted from profile</p>'+sk.map(function(k2){return '\u2022 '+esc(k2)+' \u2014 '+rnd(2,7)+' yrs, cited in '+rnd(2,5)+' roles';}).join('<br>');
    }else if(si===1){
      var must1=rnd(4,6),yrs1=rnd(4,11);
      head='Shortlisted \u00b7 cleared all bars \u00b7 '+(sc||ov)+'%';
      lead='AI parsed '+fn+'\u2019s resume, portfolio and public profiles, then checked every hard requirement independently. A candidate must clear all bars to be shortlisted.';
      mets=[pdMetric('Relevant experience',yrs1+' yrs',Math.min(100,yrs1*11),true),pdMetric('Must-have skills matched',must1+' of 6',Math.round(must1/6*100),true)].concat(sk.map(function(k2){return pdMetric(esc(k2),'Pass',rnd(78,97),true);}));
      ev='<p class="sd-ev-h">Extracted from profile</p>'+sk.map(function(k2){return '\u2022 '+esc(k2)+' \u2014 '+rnd(2,7)+' yrs, cited in '+rnd(2,5)+' roles';}).join('<br>')+'<p class="sd-ev-h" style="margin-top:14px">AI note</p>'+fn+' cleared the stack bar with an active open-source footprint ('+rnd(3,9)+' repos in the required framework) and '+rnd(2,4)+' shipped production projects referenced in the portfolio.';
      var soft=[['Communication',rnd(78,88)],['Collaboration',rnd(76,87)],['Ownership',rnd(91,97)],['Problem framing',rnd(79,89)],['Resilience',rnd(77,88)]];
      var stags=['Direct communicator','Prefers written async','Thrives in small teams','Low ego','Bias to ship'];
      extra='<div class="sd-soft"><div class="sd-soft-h"><p>Soft-skill assessment</p></div><div class="sd-soft-grid">'+soft.map(function(sf){return '<div class="sc-dim"><span class="sc-dim-n">'+sf[0]+'</span><span class="sc-dim-s">'+sf[1]+'%</span><span class="sc-bar"><i style="width:'+sf[1]+'%"></i></span></div>';}).join('')+'</div><div class="sd-soft-n"><b>Assessment note.</b> Strongest on ownership \u2014 describes failures in the first person and names the fix before the cause. Answers stay concrete under follow-up pressure. Lowest band is resilience: prefers to re-scope rather than switch approach mid-task.</div><div class="sd-tags">'+stags.map(function(t2){return '<span class="sd-tag">'+esc(t2)+'</span>';}).join('')+'</div></div>';
    }else if(si===2){
      head='Challenge score '+(sc||subStats(i).score)+'% \u00b7 top '+(rk+3)+'%';
      lead='A role-specific take-home. AI ran the submission against a hidden test suite and reviewed the code for quality. The full repo and test log are attached below.';
      var ss=subStats(i);
      mets=[pdMetric('Correctness',ss.correctness+'%',ss.correctness,true),pdMetric('Code quality',ss.quality+'%',ss.quality,true),pdMetric('Performance',ss.perf+'%',ss.perf,false),pdMetric('Test coverage',ss.cov+'%',ss.cov,false)];
      var kit2=subKit(challenge&&challenge.title);
      ev='<p class="sd-ev-h">AI analysis of the submission</p>'+fn+' solved the brief in '+ss.hrs+'h '+ss.mins+'m against an 8h cap, and passed '+ss.passed+' of 28 hidden tests on the first run. Strongest signal is '+kit2.strength+'. The commit history shows tests written before the implementation.<br><br>Weakest area: '+kit2.weak+' \u2014 acceptable at the test volume, but it would show under real load. The limitation is documented in the README rather than hidden.<br><br><b>Compared to the cohort:</b> above median on correctness and code quality, mid-band on performance. No similarity match against prior submissions.';
      extra='';
    }else if(si===3&&isNB()&&rk<IVS.length){
      return '<div class="sd"><div class="sd-head"><span class="sd-stage">AI interview</span><span class="sd-verdict info">Not started yet</span></div><div class="sd-ev"><p class="sd-ev-h">Awaiting candidate</p>'+fn+' is yet to complete their AI interview. There is no booking: candidates can start any time once they reach this stage, and it takes about 45 min.<br>Scores, summary and transcript appear here once '+fn+' finishes.</div><div class="sd-actions"><button type="button" class="sd-btn iv-rem">Send reminder</button></div></div>';
    }else if(si===3){
      vcls='info';
      head='Interview signal '+(sc||Math.max(70,Math.min(97,Math.round(ov*0.92+4)-rk)))+'%';
      lead='A structured async interview. AI scored delivery and reasoning from the transcript \u2014 read the full recording and transcript below, not just the score.';
      var v1=rnd(75,95),v2=rnd(78,96),v3=rnd(76,94),v4=rnd(72,92);
      mets=[pdMetric('Communication',v1+'%',v1,false),pdMetric('Problem solving',v2+'%',v2,false),pdMetric('Technical depth',v3+'%',v3,false),pdMetric('Culture add',v4+'%',v4,false)];
      var iv=subStats(i);
      var ivd=ivDone(rk);
      ev=(isNB()?'<p class="sd-ev-h">Interview completed</p>Conducted on <b>'+ivd.d+' at '+ivd.t+'</b> and lasted <b>'+iv.ivMins+' min</b>.<br><br>':'')+'<p class="sd-ev-h">AI summary</p>A '+iv.ivMins+'-minute interview covering role fit, an experience deep-dive, live coding and system design. '+fn+' answered in specifics rather than generalities, and reached for concrete numbers when pushed on scale. On the live coding task the first working version came in '+iv.firstPass+' minutes, with the edge cases handled after a prompt rather than before it.<br><br>Failure questions were answered in the first person: an outage traced to an N+1 query, fixed with batching and a cache layer, then followed by alerting so it would surface earlier next time. Root cause and prevention, not just the fix.<br><br>Weaker on system design. The first design was sound but under-specified on failure modes, and the trade-off between consistency and availability only came out on direct questioning.'
        +'<p class="sd-ev-h" style="margin-top:14px">AI verdict</p>'+(rk<8?'<b>Advance.</b> Top-band communication and ownership with real production depth. Recommend a human panel focused on system design, which is the one area the interview could not fully resolve.':'<b>Hold.</b> Solid on delivery and communication, but the technical depth signal sits below the finalist band for this role. Worth revisiting for a mid-level opening.');
    }else{
      vcls='info';
      head='Rank #'+(rk+1)+' \u00b7 '+(sc||ov)+'% match';
      lead='The final rank is a weighted blend of every stage above, tuned to the priorities you set. You can adjust the weights or override the rank at any time.';
      var w1=rnd(85,98),w2=rnd(82,97),w3=rnd(78,95),w4=rnd(80,96);
      mets=[pdMetric('Screen fit',w1+'%',w1,false),pdMetric('Challenge',w2+'%',w2,false),pdMetric('Interview',w3+'%',w3,false),pdMetric('Experience match',w4+'%',w4,false)];
      ev='<p class="sd-ev-h">Why #'+(i+1)+'</p>'+fn+' ranks above the next candidate on challenge performance and depth of stack experience, and slightly below on years in a lead role. The gap to rank #'+(i+2)+' is '+rnd(2,6)+' points \u2014 close enough to be worth your own read.';
    }
    var actLabel=['View full profile','View screen report','Open submission & tests','Read full transcript','Adjust weights'][si];
    var bLive=(challenge&&challenge.kind==='bounty'&&!jobSel&&!challenge.closed);var bOvr=(challenge&&challenge.kind==='bounty'&&!jobSel)&&si===2&&rk<10;
    return '<div class="sd"><div class="sd-head"><span class="sd-stage">'+esc(PSTAGES[si])+'</span><span class="sd-verdict '+vcls+'">'+head+'</span></div><div class="sd-grid">'+mets.join('')+'</div><div class="sd-ev">'+ev+'</div>'+extra+(si===1?'':'<div class="sd-actions">'+(si===3?'<button type="button" class="sd-btn pri sd-tr" data-i="'+i+'">Read full transcript</button>':si===2?'<button type="button" class="sd-btn pri sd-sub" data-i="'+i+'" data-sc="'+(sc||0)+'">View submission</button>'+((challenge&&challenge.kind==='bounty'&&!jobSel)?'<button type="button" class="sd-btn cc-msg" data-name="'+esc(c.name)+'">Message '+esc((c.name||'').split(' ')[0])+'</button>':''):'<button type="button" class="sd-btn sd-view" data-i="'+i+'">'+actLabel+'</button>')+(bLive?'<span class="sd-wait">You can select finalists once the submission deadline has passed.</span>':'<button type="button" class="sd-btn sd-ovr'+(bOvr?' sd-rank':'')+'" data-i="'+i+'" data-rk="'+rk+'">'+(bOvr?(rk<3?'Tentative '+ORD[rk]+' Place Winner \u00b7 Override decision':'Award a place \u00b7 Override decision'):'Override decision')+'</button>'+(bOvr&&rk<3?(pipeUI.bConf&&pipeUI.bConf[i]?'<span class="sd-confd"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>Confirmed as finalist</span>':'<button type="button" class="sd-btn pri sd-conf" data-i="'+i+'" data-rk="'+rk+'">Confirm as finalist</button>'):''))+'</div>')+'</div>';
  }
  var ORD=['1st','2nd','3rd'];
  function applyPlace(arr){
    var bp=pipeUI.bPlace;if(!bp)return arr;
    var out=arr.slice();
    Object.keys(bp).map(function(k){return [+k,bp[k]];}).sort(function(a,b){return a[1]-b[1];}).forEach(function(pr){
      var idx=-1;out.forEach(function(o,n){if(o.oi===pr[0])idx=n;});
      if(idx<0||idx===pr[1])return;
      var item=out[idx];out.splice(idx,1);out.splice(Math.min(pr[1],out.length),0,item);
    });
    return out;
  }
  var PLACE=['First','Second','Third'];
  function rankModal(i,rk,noPrize){
    var x=currentRows[i];if(!x)return;var c=x.c,fn=esc((c.name||'').split(' ')[0]);
    var oi=i,sel=rk<3?rk:-1,back=document.createElement('div');back.className='sub-back';
    back.innerHTML='<div class="sub cfm cfm-ovr" role="dialog" aria-modal="true" aria-label="Override decision">'
      +'<h4>Override decision</h4>'
      +'<div class="cfm-who"><img src="https://i.pravatar.cc/80?u='+encodeURIComponent(c.name)+'" alt=""><span><b>'+esc(c.name)+'</b><em>'+esc(c.role)+' \u00b7 '+esc(c.city)+'</em></span></div>'
      +'<p>Scores put '+fn+' at '+(ORD[rk]||((rk+1)+'th'))+'. Set a new placement'+(noPrize?'':' and the reward split follows the final order')+'.</p>'
      +'<div class="jbm-f"><span class="jbm-l">Placement</span><div class="jbm-seg">'
        +ORD.map(function(o,n){return '<button type="button" class="'+(n===sel?'on':'')+'" data-r="'+n+'">'+o+(noPrize?'':' \u00b7 '+prizeOf(n))+'</button>';}).join('')
      +'</div></div>'
      +'<div class="cfm-act"><button type="button" class="sd-btn cfm-no">Cancel</button><button type="button" class="sd-btn cfm-yes">Save placement</button></div></div>';
    document.body.appendChild(back);requestAnimationFrame(function(){back.classList.add('on');});
    var go=back.querySelector('.cfm-yes');
    function close(){back.classList.remove('on');setTimeout(function(){back.remove();},200);document.removeEventListener('keydown',esckey);}
    function esckey(e){if(e.key==='Escape')close();}
    back.querySelector('.jbm-f').onclick=function(e){var b=e.target.closest('button[data-r]');if(!b)return;var r=b.getAttribute('data-r');sel=r==='x'?'x':+r;
      back.querySelectorAll('.jbm-f button[data-r]').forEach(function(z){z.classList.toggle('on',z===b);});
      go.classList.toggle('warn',sel==='x');go.textContent=sel==='x'?'Remove candidate':'Save placement';};
    back.addEventListener('click',function(e){if(e.target===back||e.target.closest('.cfm-no'))close();});
    document.addEventListener('keydown',esckey);
    go.onclick=function(){
      close();
      pipeUI.bPlace=pipeUI.bPlace||{};
      if(sel==='x'){audit('remove',oi,{ovr:1,note:'Override of AI ranking. Candidate notified.'});pipeUI.bOut=pipeUI.bOut||{};pipeUI.bOut[oi]=1;delete pipeUI.bPlace[oi];renderPipe();return;}
      if(sel<0)return;
      Object.keys(pipeUI.bPlace).forEach(function(k){if(pipeUI.bPlace[k]===sel&&+k!==oi)delete pipeUI.bPlace[k];});
      pipeUI.bPlace[oi]=sel;audit('place',oi,{to:ORD[sel]+' place',ovr:1,note:'Override of AI ranking'});
      renderPipe();
      var b=viewPipe.querySelector('.bf-rev[data-i="'+oi+'"]');if(b)b.click();
    };
  }
  function prizePool(){var m=String((challenge&&(challenge.prize||challenge.reward))||'').replace(/[^0-9]/g,'');return m?+m:5000;}
  function prizeOf(i){var pool=prizePool(),sh=[.5,.3,.2][i]||0;return '$'+Math.round(pool*sh).toLocaleString('en-US');}
  function rateBtn(oi){var r=pipeUI.rated&&pipeUI.rated[oi];return r?'<span class="wd-rated"><svg viewBox="0 0 24 24"><polygon points="12 3 14.9 9.2 21.6 10.1 16.8 14.8 18 21.5 12 18.2 6 21.5 7.2 14.8 2.4 10.1 9.1 9.2"/></svg>'+r+'.0 rating posted</span>':'<button type="button" class="bf-btn line wd-rate" data-i="'+oi+'">Rate candidate</button>';}
  function winDetail(rk,oi){
    var src=currentRows.length?currentRows:matched();
    var x=src[oi]||{c:{name:'Candidate'}};
    var nm=x.c.name.split(' ')[0];
    return '<div class="wd">'
      +'<div class="wd-top"><span class="wd-medal m'+rk+'">'+(rk+1)+'</span><div><p class="wd-pl">'+PLACE[rk]+' place</p><p class="wd-sub">'+esc(nm)+'\u2019s submission ranked #'+(rk+1)+' of '+src.length+' scored entries.</p></div><span class="wd-amt">'+prizeOf(rk)+'</span></div>'
      +'<div class="wd-act">'+rateBtn(oi)+'<button type="button" class="bf-btn line cc-msg" data-name="'+esc(x.c.name)+'">Message '+esc(nm)+'</button><button type="button" class="bf-btn line wd-rb" data-i="'+oi+'">Rollback</button><button type="button" class="bf-btn wd-dist" data-rk="'+rk+'" data-i="'+oi+'">Distribute reward</button></div>'
    +'</div>';
  }
  function hireDetail(rk,oi){
    var src=currentRows.length?currentRows:matched();
    var x=src[oi]||{c:{name:'Candidate'}};
    var nm=esc(x.c.name.split(' ')[0]),h=hvData(rk,oi),rw=hvRewards(rk);
    var rws='<p class="sd-ev-h" style="margin-top:14px">Rewards to '+nm+'</p>'+(rw.length?'<div class="sd-rw">'+rw.map(function(r){return '<div><span>'+esc(r[0])+'</span><b>'+esc(r[1])+'</b><em>'+(r[2]?esc(r[2]):'<button type="button" class="sd-btn wd-dist" data-rk="'+rk+'" data-i="'+oi+'">Release reward</button>')+'</em></div>';}).join('')+'</div>':'No rewards issued yet.');
    return '<div class="sd"><div class="sd-head"><span class="sd-stage">Human interview</span><span class="sd-verdict info">'+esc(h.st)+'</span></div><div class="sd-ev">'
      +(h.unsched?'<p class="sd-ev-h">Interview not scheduled</p>'+nm+' cleared the AI interview and is waiting for your team to book the human interview. Share your calendar link and '+nm+' picks a slot.'
        :h.sched?'<p class="sd-ev-h">Upcoming interview with '+nm+'</p><b>'+h.day+' \u00b7 '+h.time+'</b> \u00b7 '+h.len+'<br>'+esc(h.w)+' \u00b7 '+esc(h.wh)
        :'<p class="sd-ev-h">Interview completed</p>Conducted on <b>'+h.day+' at '+h.time+'</b> and lasted <b>'+h.len+'</b>.<br>'+esc(h.w)+' \u00b7 '+esc(h.wh))
      +'<br><br>Human interviews run outside theColosseum, so there is no transcript or score here.'+rws+'</div>'
      +'<div class="sd-actions"><button type="button" class="sd-btn cc-msg" data-name="'+esc(x.c.name)+'">Message '+nm+'</button>'+(h.unsched?'<button type="button" class="sd-btn pri sd-sched" data-i="'+oi+'">Schedule interview</button>':'')+(h.sched?'<button type="button" class="sd-btn pri hv-join" data-rk="'+rk+'" data-i="'+oi+'">Join interview</button><span class="sd-cal"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>Added to your Google Calendar</span>':'')+rateBtn(oi)+'</div></div>';
  }
  function distModal(rk,oi){
    var src=currentRows.length?currentRows:matched();
    var x=src[oi]||{c:{name:'this candidate'}};
    var back=document.createElement('div');back.className='jbm-back';
    back.innerHTML='<div class="jbm" role="dialog" aria-modal="true" aria-label="Distribute reward">'
      +'<h3 class="jbm-t">Distribute '+prizeOf(rk)+' to '+esc(x.c.name)+'?</h3>'
      +'<p class="jbm-p">Releases the '+PLACE[rk].toLowerCase()+'-place reward from escrow. The payout is final and appears on your next statement.</p>'
      +'<div class="jbm-foot"><button class="jbm-cancel" type="button">Cancel</button><button class="jbm-go" type="button">Confirm payout</button></div></div>';
    document.body.appendChild(back);
    requestAnimationFrame(function(){back.classList.add('on');});
    function close(){back.classList.remove('on');setTimeout(function(){back.remove();},240);}
    back.querySelector('.jbm-cancel').onclick=close;
    back.querySelector('.jbm-go').onclick=function(){
      close();
      var rb=viewPipe.querySelector('.bf-slot[data-slot="'+oi+'"] .sd-rw .wd-dist');if(rb){rb.parentNode.textContent='Released today';return;}
      var slot=viewPipe.querySelector('.bf-slot[data-slot="'+oi+'"] .wd-act');
      if(slot)slot.innerHTML='<span class="wd-paid">Reward of '+prizeOf(rk)+' released from escrow</span>';
      if(pipeUI.rated&&pipeUI.rated[oi]){if(slot)slot.innerHTML='<span class="wd-paid">Reward of '+prizeOf(rk)+' released \u00b7 '+pipeUI.rated[oi]+'.0 rating posted</span>';return;}
      setTimeout(function(){
        reviewModal(x.c.name,rk,oi,function(rev){
          if(rev){pipeUI.rated=pipeUI.rated||{};pipeUI.rated[oi]=rev.r;}
          if(rev&&slot)slot.innerHTML='<span class="wd-paid">Reward of '+prizeOf(rk)+' released \u00b7 '+rev.r+'.0 rating posted</span>';
        });
      },260);
    };
  }
  function reviewModal(name,rk,oi,onDone){
    var STAR='<svg viewBox="0 0 24 24"><polygon points="12 3 14.9 9.2 21.6 10.1 16.8 14.8 18 21.5 12 18.2 6 21.5 7.2 14.8 2.4 10.1 9.1 9.2"/></svg>';
    var LBL=['','Poor','Fair','Good','Great','Outstanding'],rating=0;
    var back=document.createElement('div');back.className='jbm-back';
    back.innerHTML='<div class="jbm" role="dialog" aria-modal="true" aria-label="Rate candidate">'
      +'<h3 class="jbm-t">Rate your experience with '+esc(name)+'</h3>'
      +'<p class="jbm-p">This appears on their public profile alongside ratings from other companies.</p>'
      +'<div class="jbm-f"><span class="jbm-l">Rating</span><div class="rv-stars">'
        +[1,2,3,4,5].map(function(n){return '<button type="button" data-n="'+n+'" aria-label="'+n+' stars">'+STAR+'</button>';}).join('')
      +'</div><p class="rv-note"></p></div>'
      +'<div class="jbm-f"><span class="jbm-l">Review</span><textarea class="rv-ta" placeholder="What stood out about their submission and how they worked?"></textarea></div>'
      +'<div class="jbm-foot"><button class="jbm-cancel" type="button">Skip</button><button class="jbm-go" type="button" disabled>Publish review</button></div></div>';
    document.body.appendChild(back);
    requestAnimationFrame(function(){back.classList.add('on');});
    var go=back.querySelector('.jbm-go'),note=back.querySelector('.rv-note');
    back.querySelector('.rv-stars').onclick=function(e){
      var b=e.target.closest('button[data-n]');if(!b)return;
      rating=+b.getAttribute('data-n');
      back.querySelectorAll('.rv-stars button').forEach(function(x){x.classList.toggle('on',+x.getAttribute('data-n')<=rating);});
      note.textContent=rating+'.0 \u00b7 '+LBL[rating];go.disabled=false;
    };
    function close(){back.classList.remove('on');setTimeout(function(){back.remove();},240);}
    back.querySelector('.jbm-cancel').onclick=function(){close();onDone(null);};
    go.onclick=function(){close();onDone({r:rating,t:back.querySelector('.rv-ta').value.trim()});};
  }
  function stageScores(list,si){
    var base=[0,97,95,94,96][si]||95,out=[],v=base;
    for(var n=0;n<list.length;n++){
      if(n){var nm=list[n].x.c.name,sd=0;for(var k=0;k<nm.length;k++)sd=(sd*31+nm.charCodeAt(k)+si*11)>>>0;v-=sd%3;}
      out.push(Math.max(55,v));
    }
    return out;
  }
  function orderRows(rows,si){
    function key(x,oi){
      var nm=x.c.name,seed=0;
      for(var k=0;k<nm.length;k++)seed=(seed*31+nm.charCodeAt(k)+si*37)>>>0;
      return x.s.overall*10-oi*0.4+(((seed%1000)/1000)-0.5)*si*13;
    }
    var o=rows.map(function(x,oi){return {x:x,oi:oi};});
    if(si>0)o.sort(function(a,b){return key(b.x,b.oi)-key(a.x,a.oi);});
    return o;
  }
  function flipPipe(fn){
    var pre={},box=viewPipe.querySelector('.bf-list');
    if(box)box.querySelectorAll('.bf-row[data-cand]').forEach(function(r){pre[r.getAttribute('data-cand')]=r.getBoundingClientRect().top;});
    fn();
    var box2=viewPipe.querySelector('.bf-list');if(!box2)return;
    box2.querySelectorAll('.bf-row[data-cand]').forEach(function(r,n){
      var k=r.getAttribute('data-cand'),t=r.getBoundingClientRect().top;
      if(pre[k]==null){r.animate([{opacity:0,transform:'translateY(10px)'},{opacity:1,transform:'none'}],{duration:320,delay:Math.min(n*22,240),easing:'cubic-bezier(.2,.7,.3,1)',fill:'backwards'});return;}
      var dy=pre[k]-t;
      if(Math.abs(dy)<1.5)return;
      r.animate([{transform:'translateY('+dy+'px)'},{transform:'none'}],{duration:520,easing:'cubic-bezier(.22,.8,.24,1)'});
    });
  }
  function renderPipe(){
    if(!jobSel&&challenge&&!challenge.published){
      viewPipe.innerHTML='<div class="pipe-empty"><span class="pe-tag">Draft</span><span class="pipe-empty-ic"><svg viewBox="0 0 24 24"><path d="M12 15V3"/><polyline points="7 8 12 3 17 8"/><path d="M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/></svg></span><h3>Publish this challenge to view the hiring pipeline</h3><p>Candidates enter the pipeline once the challenge is live. Nothing is being screened or scored yet.</p></div>';
      var pf0=el.querySelector('#pipeFilters');if(pf0){pf0.hidden=true;pf0.innerHTML='';}
      return;
    }
    PSTAGES[1]='Shortlist';PSTAGES[4]=isNB()?'Human interview':'Finalist';
    var VIS=visStages();
    if(VIS.indexOf(pipeUI.stage)<0)pipeUI.stage=VIS[Math.min(2,VIS.length-1)];
    var rows=currentRows.length?currentRows:matched();
    var top=rows.slice(0,8);
    var SCORE_BY=[null,null,null,null,null];
    [1,2,3,4].forEach(function(k){var od=orderRows(rows,k),sc=stageScores(od,k),arr=[];od.forEach(function(o,n){arr[o.oi]=sc[n];});SCORE_BY[k]=arr;});
    function sOf(oi,k){var m=SCORE_BY[k];return m&&m[oi]!=null?m[oi]:0;}
    var N=Math.max(214,top.length*26);
    var funnel=[{n:N,l:'Applicants',sub:'entered the pool'},{n:Math.round(N*0.29),l:'AI shortlist',sub:'screening bars cleared'},{n:Math.round(N*0.13),l:'Challenge stage',sub:'built & benchmarked'},{n:Math.round(N*0.065),l:'AI interviews',sub:'soft-skill + behavioral'},{n:top.length,l:'Finalists',sub:'ready to hire'}];
    var badges=[{c:'pb-warn',t:'Action due \u00b7 2 days'},{c:'pb-info',t:'AI interview scheduled'},{c:'pb-ok',t:'Finalist \u00b7 rank 3'},{c:'pb-info',t:'Applied \u00b7 AI screening'}];
    // assign each finalist-ish candidate a reached stage, spread across pipeline
    var reachPlan=[3,2,4,1,3,2,4,1];
    var maxN=funnel[0].n;
    var cards=funnel.map(function(f,i){return '<div class="fn-card'+(i===funnel.length-1?' last':'')+'"><span class="fn-n">'+f.n+'</span><span class="fn-l">'+f.l+'</span><div class="fn-bar"><i style="width:'+Math.max(6,Math.round(f.n/maxN*100))+'%"></i></div><span class="fn-sub">'+f.sub+'</span></div>';}).join('');
    var STAGE_SUB=['applicants','passed screen','in challenge','interviewed','finalists'];
    function stepStat(c,s,i,si,oi){
      if(si===1)return 'AI screen '+sOf(oi,1)+'% \u00b7 all bars cleared';
      if(si===2)return 'Challenge '+sOf(oi,2)+'% \u00b7 top '+(i+3)+'%';
      if(si===3)return 'AI interview '+sOf(oi,3)+'% \u00b7 strong signal';
      if(si===4)return 'Rank #'+(i+1)+' \u00b7 '+sOf(oi,4)+'% match';
      return '';
    }
    var pipeRows=orderRows(rows,4).slice(0,top.length).map(function(o,i){var x=o.x;
      var c=x.c,s=x.s;
      var steps=PSTAGES.map(function(st,si){
        var cls=si<4?'done':(si===4?'cur':'');
        var line=si<PSTAGES.length-1?'<div class="step-line fill"></div>':'';
        var tip=si===0?'':'<span class="step-tip">'+esc(stepStat(c,s,i,si,o.oi))+'</span>';
        return '<button type="button" class="step-node step '+cls+'" data-i="'+o.oi+'" data-rk="'+i+'" data-si="'+si+'" data-sc="'+(si?sOf(o.oi,si):0)+'">'+tip+'<span class="step-pill">'+st+'</span></button>'+line;
      }).join('');
      return '<div class="prow"><div class="prow-top"><div class="prow-id" data-i="'+o.oi+'" role="button" tabindex="0"><span class="prow-av"><img src="https://i.pravatar.cc/80?u='+encodeURIComponent(c.name)+'" alt="" loading="lazy"></span><span><span class="prow-nm">'+esc(c.name)+'</span><br><span class="prow-role">'+esc(c.role)+' \u00b7 '+esc(c.city)+'</span></span></div><span class="prow-badge pb-ok">Finalist \u00b7 rank '+(i+1)+'</span></div><div class="step">'+steps+'</div><div class="sd-slot"></div></div>';
    }).join('');
    var _bq=(challenge&&challenge.kind==='bounty'&&!jobSel);
    var stageCounts=[funnel[0].n,funnel[1].n,_bq?Math.min(10,funnel[2].n):funnel[2].n,funnel[3].n,_bq?Math.min(3,Object.keys(pipeUI.bConf||{}).length):3];
    var miniRow=PSTAGES.map(function(st,si){
      var body;
      if(si===4){
        var avs=top.map(function(x){return '<span class="pmini-av"><img src="https://i.pravatar.cc/80?u='+encodeURIComponent(x.c.name)+'" alt="" loading="lazy"></span>';}).join('');
        body='<div class="pmini-avs">'+avs+'</div><span class="pmini-sub">'+top.length+' finalists</span>';
      }else{
        body='<span class="pmini-stat">'+stageCounts[si]+'</span><span class="pmini-sub">'+STAGE_SUB[si]+'</span>';
      }
      var node='<div class="pmini-node step'+(si===4?' cur':' done')+'"><span class="step-pill">'+st+'</span>'+body+'</div>';
      var line=si<PSTAGES.length-1?'<div class="step-line fill"></div>':'';
      return node+line;
    }).join('');
    var chev='<svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>';

    /* ---- batch-level insights across the whole pool for this challenge ---- */
    var N0=funnel[0].n;
    var pool=cands.map(function(c){return score(c,req,{}).overall;});
    var poolN=pool.length||1;
    var trackTot=cands.filter(function(c){return c.track===req.track;}).length||1;
    // match-score distribution, scaled to the displayed applicant count
    var buckets=[{lo:90,hi:200,x:'90+'},{lo:80,hi:89,x:'80-89'},{lo:70,hi:79,x:'70-79'},{lo:60,hi:69,x:'60-69'},{lo:0,hi:59,x:'<60'}];
    var dist=buckets.map(function(b){var f=pool.filter(function(o){return o>=b.lo&&o<=b.hi;}).length/poolN;return{x:b.x,n:Math.round(f*N0),f:f};});
    var maxF=Math.max.apply(null,dist.map(function(d){return d.f;}))||1;
    var distCard='<div class="bi-card"><div class="bi-card-h"><span class="bi-card-t">Match-score distribution</span><span class="bi-card-sub">'+N0+' applicants</span></div><div class="hist">'
      +dist.map(function(d,i){return '<div class="hist-col"><div class="hist-track"><div class="hist-bar'+(i===0?' top':'')+'" style="height:'+Math.max(4,Math.round(d.f/maxF*100))+'%"><span class="hist-n">'+d.n+'</span></div></div><span class="hist-x">'+d.x+'</span></div>';}).join('')
      +'</div></div>';
    // screening gate pass-through (share of on-track applicants clearing each bar)
    var gn=counts();
    var gates2=[{k:'2+ required skills',v:gn.skills},{k:'Free in '+esc(req.window),v:gn.avail},{k:req.minYears+'+ yrs experience',v:gn.years},{k:'Identity verified',v:gn.verified}];
    var gateCard='<div class="bi-card"><div class="bi-card-h"><span class="bi-card-t">Screening gate pass-through</span><span class="bi-card-sub">share clearing each bar</span></div><div class="grate">'
      +gates2.map(function(g){var p=Math.round(g.v/trackTot*100);return '<div class="grate-r"><span class="grate-k">'+g.k+'</span><span class="grate-v">'+p+'%</span><div class="grate-bar"><i style="width:'+p+'%"></i></div></div>';}).join('')
      +'</div></div>';
    // stage performance — pool averages
    var avg=function(fn){return pool.reduce(function(a,o){return a+fn(o);},0)/poolN;};
    var sorted=pool.slice().sort(function(a,b){return a-b;});
    var med=sorted[Math.floor(sorted.length/2)];
    var perfCard='<div class="bi-card"><div class="bi-card-h"><span class="bi-card-t">Stage performance</span><span class="bi-card-sub">pool averages</span></div><div class="perf">'
      +'<div class="perf-r"><span class="perf-l">Median match score</span><span class="perf-v">'+med+'<em>%</em></span></div>'
      +'<div class="perf-r"><span class="perf-l">Avg AI screen</span><span class="perf-v">'+avg(function(o){return o/10;}).toFixed(1)+'<em>/10</em></span></div>'
      +'<div class="perf-r"><span class="perf-l">Avg challenge score</span><span class="perf-v">'+Math.round(avg(function(o){return o*0.9+6;}))+'<em>/100</em></span></div>'
      +'<div class="perf-r"><span class="perf-l">Avg AI interview</span><span class="perf-v">'+avg(function(o){return 7.4+(o%16)/10;}).toFixed(1)+'<em>/10</em></span></div>'
      +'</div></div>';
    // skill coverage — most common skills in the pool
    var freq={};cands.forEach(function(c){c.skills.forEach(function(k){freq[k]=(freq[k]||0)+1;});});
    var topSk=Object.keys(freq).map(function(k){return{k:k,n:freq[k]};}).sort(function(a,b){return b.n-a.n;}).slice(0,5);
    var maxSk=topSk.length?topSk[0].n:1;
    var skillCard='<div class="bi-card"><div class="bi-card-h"><span class="bi-card-t">Skill coverage</span><span class="bi-card-sub">most common in pool</span></div><div class="skc">'
      +topSk.map(function(t){return '<div class="skc-r"><span class="skc-k">'+esc(t.k)+'</span><div class="skc-bar"><i style="width:'+Math.round(t.n/maxSk*100)+'%"></i></div><span class="skc-n">'+Math.round(t.n/poolN*100)+'%</span></div>';}).join('')
      +'</div></div>';

    /* ---- Option B: focused-stage pipeline ---- */
    var arL='<svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>',arR='<svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>';
    var PEND=[0,0,6,2,0];
    var totalPend=PEND.reduce(function(a,b){return a+b;},0);
    var chalMed=Math.round(avg(function(o){return o*0.9+6;}));
    var ivMed=avg(function(o){return 7.4+(o%16)/10;}).toFixed(1);
    var bStages=PSTAGES.map(function(t,i){
      return {t:t,n:stageCounts[i],sub:STAGE_SUB[i],pend:PEND[i],
        conv:i?Math.round(stageCounts[i]/stageCounts[i-1]*100):null,
        note:[
          'Screening runs as applications land. Nothing is waiting on you at this stage.',
          (stageCounts[0]-stageCounts[1])+' applicants were cut here, each with the failed bar logged. <b>'+stageCounts[1]+' cleared every requirement.</b>',
          '<b>'+PEND[2]+' submissions are scored</b> and waiting on your call. Two sit in the top decile of everyone who has taken this challenge.',
          '<b>'+PEND[3]+' candidates need an interview slot</b> from you. The rest have transcripts and scores ready to read.',
          ((challenge&&challenge.kind==='bounty'&&!jobSel)?(challenge.closed?'<b>The submission deadline has passed.</b> Select your finalists from the Challenge stage.':'You can select finalists once the submission deadline has passed.'):'Ranked by fit to the priorities you set. Every score below is traceable to the stage that produced it.')
        ][i],
        cta:[null,'Review screen decisions','Review '+PEND[2]+' submissions','Review summary','Compare finalists'][i],
        stats:[
          [[stageCounts[0],'in this stage','Volume is holding steady, so the shortlist below is drawn from a full pool rather than a thin one.'],[med+'%','median match score','Half the pool sits above your role threshold, which is unusually strong for an open posting.'],['3.1 days','median time to apply','Most applications land within the first weekend of the posting going live.']],
          [[stageCounts[1],'in this stage','Screening has cleared the backlog, so nothing here is waiting on the model.'],[Math.round(stageCounts[1]/stageCounts[0]*100)+'%','passed from Applied','The drop-off came mostly from missing must-have experience, not from borderline scores.'],[avg(function(o){return o/10;}).toFixed(1)+'/10','median screen score','Scores cluster tightly, so the ranking below is decided by a narrow margin.'],['4 min','median screen time','Candidates answered without stalling, which usually signals genuine familiarity.']],
          [[stageCounts[2],'in this stage','Every submission here has been scored against the same rubric you approved.'],[Math.round(stageCounts[2]/stageCounts[1]*100)+'%','passed from AI screen','Pass-through is close to your historical rate, so the screen bar looks correctly set.'],[chalMed+'/100','median challenge score','The middle of the pack lost points on edge cases rather than core logic.'],['2.4 days','median time to submit','Turnaround is fast enough that the deadline is not filtering out strong candidates.']],
          [[stageCounts[3],'in this stage','All transcripts are complete, so each candidate can be compared on the same questions.'],[Math.round(stageCounts[3]/stageCounts[2]*100)+'%','passed from Challenge','Most of those cut wrote working code but could not explain their trade-offs.'],[ivMed+'/10','median interview score','Communication scored higher than depth across the group, worth probing live.'],['38 min','median interview length','Longer interviews correlated with higher scores, driven by follow-up questions.']],
          [[stageCounts[4],'in this stage','This is a decision-ready set: each one has cleared every automated stage.'],[Math.round(stageCounts[4]/stageCounts[3]*100)+'%','passed from AI interview','The gap between the top and bottom finalist is small, so weigh your own priorities.'],[med+'%','median match score','Match scores stayed high through every stage, so no one here is a late surprise.'],['11 days','median time to finalist','End-to-end time is under your two-week target, leaving room for onsite scheduling.']]
        ][i]};
    });
    VIS.forEach(function(vi,n){var pv=n?VIS[n-1]:null;bStages[vi].prev=pv;bStages[vi].conv=pv===null?null:Math.round(stageCounts[vi]/stageCounts[pv]*100);});
    if(!jobSel&&VIS.length<5){
      bStages[2].stats[1]=[Math.round(stageCounts[2]/stageCounts[1]*100)+'%','passed from Shortlist','Everyone here registered an entry and submitted work against the brief.'];
      bStages[4].stats[1]=[Math.round(stageCounts[4]/stageCounts[2]*100)+'%','passed from Challenge','Ranked on submission quality alone \u2014 this bounty runs without an interview stage.'];
    }
    if(isNB()||_bq){
      var slPct=Math.round(stageCounts[1]/stageCounts[0]*100),hvD=2+((pipeUI.hvDone&&pipeUI.hvDone[2])?1:0);
      bStages[1].sub='shortlisted \u00b7 '+slPct+'% of '+stageCounts[0]+' applied';
      bStages[1].note='<b>'+stageCounts[0]+' applied.</b> '+(stageCounts[0]-stageCounts[1])+' were cut at screening, each with the failed bar logged. <b>'+stageCounts[1]+' cleared every requirement.</b>';
      bStages[1].cta='Review shortlist';
      bStages[1].stats=[[stageCounts[0],'applied','Volume is holding steady, so the shortlist is drawn from a full pool rather than a thin one.'],[stageCounts[1],'shortlisted','The drop-off came mostly from missing must-have experience, not from borderline scores.'],[avg(function(o){return o/10;}).toFixed(1)+'/10','median screen score','Scores cluster tightly, so the ranking below is decided by a narrow margin.'],['3.1 days','median time to apply','Most applications land within the first weekend of the posting going live.']];
      if(bStages[2].stats[1])bStages[2].stats[1][1]='passed from Shortlist';
    }
    if(isNB()){
      bStages[3].flag=IVS.length+' not started';
      bStages[3].note='<b>'+IVS.length+' candidates are yet to complete their AI interview.</b> Transcripts and scores for the rest are ready to read.';
      var hvS=Object.keys(pipeUI.sched||{}).length>0;
      bStages[4].sub='in human interview';bStages[4].flag=(3-hvD)?(hvS?'1 scheduled':'1 to schedule'):'';
      bStages[4].note='Human interviews run outside theColosseum. <b>'+hvD+' of 3 completed</b>'+(3-hvD?(hvS?', 1 scheduled for 29 Sep.':', 1 still to schedule.'):'.');
      bStages[4].cta=null;
      bStages[4].stats=[[stageCounts[4],'in this stage','Every candidate here cleared the AI interview with a strong signal.'],[Math.round(stageCounts[4]/stageCounts[3]*100)+'%','passed from AI interview','Only the top of the AI interview band was sent to your team.'],[hvD+' of 3','interviews completed',(3-hvD)?(hvS?'The last one is on 29 Sep at 16:00.':'One candidate is waiting for you to book a slot.'):'All interviews are done, so a decision can be made.'],['1','hired','One candidate has accepted and starts 13 Oct.']];
    }
    if(jobSel){
      bStages[3].stats[1]=[Math.round(stageCounts[3]/stageCounts[1]*100)+'%','passed from Shortlist','Screened applicants go straight to interview \u2014 this role has no challenge stage.'];
    }
    function statCell(v,l,ins){var m=String(v).match(/^([\d.,\u2014]+)(.*)$/);var h=m?esc(m[1])+(m[2]?'<em>'+esc(m[2])+'</em>':''):esc(String(v));return '<div><div class="v">'+h+'</div><div class="l">'+esc(l)+'</div>'+(ins?'<div class="ins">'+esc(ins)+'</div>':'')+'</div>';}
    function pillCls(i){return i===4?'bf-pill dark':i===0?'bf-pill dim':'bf-pill';}
    var si=pipeUI.stage,st=bStages[si];
    if(pipeUI.lim==null)pipeUI.lim=10;
    var total=Math.min(st.n,rows.length);
    var focusHTML='<div class="bf-focus">'
      +'<div class="bf-stack"><div class="bf-slide">'
      +VIS.map(function(i){var s=bStages[i];
        if(i===si)return '<div class="bf-big" data-k="'+i+'"><div class="bf-big-top"><span class="'+pillCls(i)+'">'+esc(s.t)+'</span>'+((s.flag!=null?s.flag:s.pend)?'<span class="bf-flag"><i></i>'+(s.flag!=null?s.flag:s.pend+' to review')+'</span>':'')+'</div>'
          +'<div class="bf-n"><b>'+s.n+'</b><span class="bf-sub">'+esc(s.sub)+(s.conv!==null?' \u00b7 '+s.conv+'% of '+esc(PSTAGES[s.prev]):'')+'</span></div>'
          +'<p class="bf-note">'+s.note+'</p>'
          +'<div class="bf-big-f">'+(i===2?(challenge&&challenge.closed?'<div class="bf-dl closed"><div class="bf-dl-h"><span>Deadline \u00b7 <b>12 Sep</b></span><span class="bf-dl-left">Submission deadline passed</span></div><div class="bf-dl-bar"><i style="width:100%"></i></div></div>':'<div class="bf-dl"><div class="bf-dl-h"><span>Deadline \u00b7 <b>26 Sep</b></span><span class="bf-dl-left">4 days left for submission</span></div><div class="bf-dl-bar"><i style="width:71%"></i></div></div>'):s.cta?'<button type="button" class="bf-btn" '+(i===4?((_bq&&!Object.keys(pipeUI.bConf||{}).length)?'disabled':'data-bf-compare="1"'):'data-bf-jump="1"')+'>'+esc(s.cta)+'</button>':'')+'</div></div>';
        var far=Math.abs(VIS.indexOf(i)-VIS.indexOf(si))>1;
        return '<div class="bf-mini'+(far?' far':'')+'" data-k="'+i+'" data-s="'+i+'" role="button" tabindex="0"><span class="'+pillCls(i)+'">'+esc(s.t)+'</span><span class="bf-mini-n">'+s.n+'</span><span class="bf-sub">'+esc(s.sub)+'</span></div>';
      }).join('')
      +'</div></div>'
      +'</div>'
      +'<div class="bf-track">'+VIS.map(function(i,n){
        return (n?'<span class="l'+(i<=si?' done':'')+'"></span>':'')+'<span class="d'+(i<si?' done':i===si?' cur':'')+'"></span>';
      }).join('')+'</div>';

    function bScore(x,i,k,oi){
      if(k===0)return{v:'\u2014',p:0,t:'Screening now'};
      var q=sOf(oi==null?i:oi,k);
      if(k===1)return{v:q+'%',p:q,t:'All screening bars cleared'};
      if(k===2)return{v:q+'%',p:q,t:VIS.length<5?'Submission scored':'Sent to AI interview'};
      if(k===3)return{v:q+'%',p:q,t:i<8?'Finalist for top 8':'Transcript ready to read'};
      return{v:q+'%',p:q,t:'Rank #'+(i+1)+' \u00b7 ready to hire'};
    }
    var BDG={
      win:'<path d="M8 21h8"/><path d="M12 17v4"/><path d="M6 4h12v5a6 6 0 0 1-12 0z"/><path d="M6 5H4a2 2 0 0 0 2 4"/><path d="M18 5h2a2 2 0 0 1-2 4"/>',
      ch:'<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
      fast:'<circle cx="12" cy="13" r="8"/><polyline points="12 9 12 13 15 15"/>',
      top:'<path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.9z"/>',
      bounty:'<path d="M12 3v18"/><path d="M5 8h14"/><circle cx="12" cy="14" r="5"/>'
    };
    function applBadges(x){
      var out=[],c=x.c,s=x.s||{};
      if(c.done>=1)out.push(['gold','win','First win']);
      if(c.done>=10)out.push(['earned','ch','10 challenges']);
      else if(c.done>=4)out.push(['earned','ch',c.done+' challenges']);
      if(s.rel>=86)out.push(['earned','fast','Fast submit']);
      if(s.overall>=88||s.skillFit>=90)out.push(['earned','top','Top 5%']);
      if(c.years>=8)out.push(['earned','bounty','Bounty hunter']);
      return out.slice(0,4);
    }
    var ordered=orderRows(rows,si);
    var hvSet={};if(isNB()){var hvL=applyPlace(orderRows(rows,4)).slice(0,stageCounts[4]);hvL.forEach(function(o){hvSet[o.oi]=1;});if(window.colChat&&isNB())colChat.register(hvL.map(function(o,i){return {name:o.x.c.name,sub:o.x.c.role,tpl:i,ctx:(challenge&&challenge.title)||''};}));}
    if(isNB()&&si===3){var shown=Math.min(st.n,rows.length),adv=[],rest=[];ordered.slice(0,shown).forEach(function(o){(hvSet[o.oi]?adv:rest).push(o);});var sch=rest.splice(Math.max(0,rest.length-IVS.length),IVS.length);ordered=sch.concat(adv,rest,ordered.slice(shown));}
    var isBW=(challenge&&challenge.kind==='bounty'&&si===4);
    if(!isNB()&&window.colChat)colChat.register(applyPlace(orderRows(rows,4)).slice(0,3).map(function(o,i){return {name:o.x.c.name,sub:o.x.c.role,tpl:3+i,ctx:(challenge&&challenge.title)||'',stage:'Bounty winner'};}));
    var isBC=(challenge&&challenge.kind==='bounty'&&!jobSel)&&si===2;
    var isHF=si===4&&!isBW;
    if(si===4)pipeUI.finalN=total;
    if(isBW||isBC||isHF)ordered=applyPlace(ordered);
    if(isBW){ordered=ordered.filter(function(o){return pipeUI.bConf&&pipeUI.bConf[o.oi];}).slice(0,3);total=ordered.length;}
    if(isBC&&total>10){ordered=ordered.slice(0,10);total=10;}
    var stageRows=ordered.slice(0,isBW?3:Math.min(isBC?10:pipeUI.lim,total)).map(function(o,i){
      var x=o.x,oi=o.oi,b=bScore(x,i,si,oi),pend=i<st.pend;
      if(isNB()&&si===3){if(i<IVS.length)b={v:'\u2014',p:0,t:'Yet to complete AI interview'};else if(hvSet[oi])b.t='Advanced to Human interview';else b.t='Transcript ready to read';}
      if(isNB()&&si===4){var hd=hvData(i,oi);b={v:'\u2014',p:0,t:hd.st};pend=!!(hd.sched||hd.unsched);}
      return '<div class="bf-row" data-cand="'+oi+'"><span class="bf-rk">'+(i+1)+'</span>'
        +'<span class="bf-who" data-who="'+oi+'"><img src="https://i.pravatar.cc/80?u='+encodeURIComponent(x.c.name)+'" alt="" loading="lazy"><span><b>'+esc(x.c.name)+'</b><em>'+esc(x.c.role)+' \u00b7 '+esc(x.c.city)+' \u00b7 '+x.c.years+' yrs</em></span></span>'
        +(si===0?'':'<span class="bf-sc"><b>'+b.v+'</b><span class="bar"><i style="width:'+b.p+'%"></i></span></span>')
        +(si===0?'<span class="bf-badges">'+applBadges(x).map(function(bg){return '<span class="bdg '+bg[0]+'"><span class="bdg-hex"><svg viewBox="0 0 24 24">'+BDG[bg[1]]+'</svg></span><span class="bdg-n">'+esc(bg[2])+'</span></span>';}).join('')+'</span>':'<span class="bf-verd'+(pend&&!isBW?' warn':'')+'">'+esc(isBW?(PLACE[i]+' place \u00b7 '+prizeOf(i)):b.t)+'</span>')
        +'<button type="button" class="bf-btn'+(si===0||si===2||si===3||isBW||(si===4&&i)||!pend?' line':'')+(si===1||si===2||si===3||isBW||isHF?' bf-rev':(si===4?' sd-sched':' bf-act sd-view'))+'" data-i="'+oi+'" data-s="'+si+'" data-rk="'+i+'" data-sc="'+b.p+'">'+(si===0?'View':(si===2||si===3?'Review':(si===4?((isBW||isHF)?'View':'Schedule interview'):(pend?'Advance':'Review'))))+'</button></div>'
        +(si===1||si===2||si===3||isBW||isHF?'<div class="bf-slot" data-slot="'+oi+'"></div>':'');
    }).join('');
    if(isBW&&!ordered.length)stageRows='<div class="bf-empty">No finalists yet. Confirm finalists from the Challenge stage once the submission deadline has passed to move them here.</div>';
    function cmpTable(){
      var trio8=applyPlace(orderRows(rows,4)).slice(0,isNB()?stageCounts[4]:8),trio=trio8.map(function(o){return o.x;});
      function pct(n){return Math.max(4,Math.min(100,Math.round(n)));}
      var ROUNDS=[{k:1,l:'Screening',n:'Against your hard gates'},{k:2,l:'Challenge review',n:'Rubric-weighted'},{k:3,l:'Interview',n:'Two-interviewer average'},{k:4,l:'Finalist score',n:'Composite priority fit'}];
      var SIG=[{l:'Skill fit',g:function(x){return x.s.skillFit;}},{l:'Soft skills',g:function(x){return x.s.soft;}},{l:'Reliability',g:function(x){return x.s.rel;}}];
      var TXT=[{l:'Availability',g:function(x){return x.c.avail;}},{l:'Experience',g:function(x){return x.c.years+' yrs';}},{l:'Arena challenges',g:function(x){return x.c.done+' completed';}}];
      var rowsL='',cells=trio.map(function(){return '';});
      function addRow(label,note,vals){
        var mx=Math.max.apply(null,vals.map(function(v){return v.p;}));
        rowsL+='<div class="cmp-c l">'+esc(label)+(note?'<span class="cmp-note">'+esc(note)+'</span>':'')+'</div>';
        vals.forEach(function(v,i){cells[i]+='<div class="cmp-c'+(v.p===mx&&mx>0?' best':'')+'"><span class="cmp-v">'+v.v+'</span><span class="cmp-b"><i style="width:'+pct(v.p)+'%"></i></span></div>';});
      }
      function addText(label,vals){
        rowsL+='<div class="cmp-c l">'+esc(label)+'</div>';
        vals.forEach(function(v,i){cells[i]+='<div class="cmp-c"><span class="cmp-t">'+esc(v)+'</span></div>';});
      }
      ROUNDS.forEach(function(r){addRow(r.l,r.n,trio.map(function(x,i){var b=bScore(x,i,r.k,trio8[i].oi);return{v:b.v,p:b.p};}));});
      rowsL+='<div class="cmp-sec">Underlying signals</div>';
      cells=cells.map(function(s2){return s2+'<div class="cmp-sec">&nbsp;</div>';});
      SIG.forEach(function(sg){addRow(sg.l,'',trio.map(function(x){var v=sg.g(x);return{v:v+'%',p:v};}));});
      TXT.forEach(function(tx){addText(tx.l,trio.map(function(x){return tx.g(x);}));});
      var cols=trio.map(function(x,i){var b=bScore(x,i,4,trio8[i].oi);
        return '<div class="cmp-col"><div class="cmp-hd"><span class="cmp-rk">Rank '+(i+1)+'</span><span class="cmp-who" data-who="'+trio8[i].oi+'"><img src="https://i.pravatar.cc/80?u='+encodeURIComponent(x.c.name)+'" alt="" loading="lazy"><span><span class="cmp-nm">'+esc(x.c.name)+'</span><span class="cmp-rl">'+esc(x.c.role)+'</span></span></span><span class="cmp-tot">'+b.v.replace('%','')+'<em>% match</em></span></div>'
          +cells[i]
          +'<div class="cmp-act"><button type="button" class="bf-btn line sd-sched" data-i="'+trio8[i].oi+'">Schedule interview</button></div></div>';
      }).join('');
      return '<div class="cmp-bar"><p>Comparing all <b>'+trio.length+' finalists</b> \u2014 scroll sideways; best value in each row is highlighted.</p><button type="button" class="bf-btn line" data-bf-compare="1">Back to full list</button></div>'
        +'<div class="cmp"><div class="cmp-fix"><div class="cmp-hd lbl"><span class="cmp-rk">Round</span></div>'+rowsL+'<div class="cmp-act"></div></div>'
        +'<div class="cmp-scroll"><div class="cmp-cols">'+cols+'</div></div></div>';
    }
    var expHTML='<div class="bf-wrap"><div class="bf-stat'+(pipeUI.statOpen?' on':'')+'" role="button" tabindex="0" aria-expanded="'+(pipeUI.statOpen?'true':'false')+'"><div class="bf-stat-g">'+st.stats.map(function(p){return statCell(p[0],p[1],p[2]);}).join('')+'</div><span class="bf-stat-x" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></span></div>'
      +(pipeUI.compare&&si===4&&top.length>=2&&!(isBW&&!ordered.length)?cmpTable()
      :'<div class="bf-list'+(si===0?' nosc':'')+'"><div class="bf-row head"><span>#</span><span>Candidate</span>'+(si===0?'':'<span>'+(isNB()&&si===4?'Score':esc(st.t)+' score')+'</span>')+'<span>'+(si===0?'Badges':(isNB()&&si===4?'Status':((challenge&&challenge.kind==='bounty')?'Verdict':'AI verdict')))+'</span><span></span></div>'
      +stageRows
      +(pipeUI.lim<total?'<div class="bf-more"><span>Showing '+Math.min(pipeUI.lim,total)+' of '+total+'</span><button type="button" class="bf-btn line bf-showmore">Show next '+Math.min(10,total-pipeUI.lim)+'</button></div>':'<div class="bf-more"><span>Showing all '+total+'</span></div>')
      +'</div>')+'</div>';

    var _pre=stageRects();
    var pf=el.querySelector('#pipeFilters');
    if(pf){pf.hidden=true;pf.innerHTML='';}
    if(isBW&&!ordered.length)expHTML='';
    viewPipe.innerHTML='<div class="bf">'+focusHTML+'<div class="bf-exp">'+expHTML+'</div></div>';
    centerStage();
    flipStages(_pre);
  }


  var eliteRows=[],topFocus=-1;
  function topSlide(){
    var n=eliteRows.length;if(!n)return '';
    var span=Math.min(5,Math.floor((n-1)/2)),out=[];
    for(var o=-span;o<=span;o++){
      var i=((topFocus+o)%n+n)%n,it=eliteRows[i],c=it.x.c,s=it.x.s,d=Math.abs(o);
      if(o===0){out.push('<div class="tm-big" data-k="'+i+'">'+card(it.x,it.idx,true)+'</div>');continue;}
      out.push('<button type="button" class="tm-mini'+(d>1?' far':'')+'" data-k="'+i+'" data-t="'+o+'"><span class="tm-av"><img src="https://i.pravatar.cc/80?u='+encodeURIComponent(c.name)+'" alt="" loading="lazy"></span><span class="tm-nm">'+esc((c.name||'').split(' ')[0])+'</span><span class="tm-pc">'+s.overall+'%</span></button>');
    }
    return out.join('');
  }
  function centerTop(){
    var slide=grid.querySelector('.tm-slide');if(!slide)return;
    var big=slide.querySelector('.tm-big');if(!big)return;
    var stack=slide.parentNode;
    if(getComputedStyle(slide).flexDirection==='column'){slide.style.transform='';return;}
    var prev=slide.style.transform;slide.style.transition='none';slide.style.transform='none';
    var sr=stack.getBoundingClientRect(),br=big.getBoundingClientRect();
    var scale=(slide.offsetWidth?slide.getBoundingClientRect().width/slide.offsetWidth:1)||1;
    var off=((sr.left+sr.width/2)-(br.left+br.width/2))/scale;
    slide.style.transform=prev||'none';slide.offsetHeight;slide.style.transition='';
    slide.style.transform='translateX('+Math.round(off)+'px)';
  }
  function renderTop(){
    var slide=grid.querySelector('.tm-slide');if(!slide)return;
    var old={},kids=slide.children,i;
    for(i=0;i<kids.length;i++){var kk=kids[i].getAttribute('data-k');if(kk!=null)old[kk]={l:kids[i].offsetLeft,t:kids[i].offsetTop,w:kids[i].offsetWidth};}
    slide.innerHTML=topSlide();centerTop();
    var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(reduce)return;
    var nk=slide.children,list=[];
    for(i=0;i<nk.length;i++){
      var el=nk[i],o=old[el.getAttribute('data-k')];
      el.style.transformOrigin='left center';el.style.willChange='transform,opacity';
      if(o){var sx=o.w/(el.offsetWidth||1);el.style.transform='translate('+(o.l-el.offsetLeft)+'px,'+(o.t-el.offsetTop)+'px) scale('+(sx<.05?.05:sx).toFixed(3)+')';old[el.getAttribute('data-k')]=null;}
      else{el.style.opacity='0';el.style.transform='scale(.88)';}
      list.push(el);
    }
    slide.offsetHeight;
    list.forEach(function(el){el.style.transition='transform .35s cubic-bezier(.2,.7,.3,1),opacity .28s ease';el.style.transform='';el.style.opacity='';});
    setTimeout(function(){list.forEach(function(el){el.style.transition='';el.style.transformOrigin='';el.style.willChange='';});},420);
  }
  window.addEventListener('resize',centerTop);
  document.addEventListener('scroll',function(e){var t=e.target;if(t&&t.classList&&t.classList.contains('cat-track'))t.classList.toggle('at-end',t.scrollLeft+t.clientWidth>=t.scrollWidth-4);},true);
  grid.addEventListener('click',function(e){
    var m=e.target.closest('.tm-mini');if(!m)return;
    e.stopPropagation();var n=eliteRows.length;if(!n)return;topFocus=((topFocus+(+m.getAttribute('data-t')))%n+n)%n;renderTop();
  },true);
  var BDG=[
    {n:'First win',g:1,d:'<path d="M8 21h8"/><path d="M12 17v4"/><path d="M6 4h12v5a6 6 0 0 1-12 0z"/><path d="M6 5H4a2 2 0 0 0 2 4"/><path d="M18 5h2a2 2 0 0 1-2 4"/>'},
    {n:'10 challenges',d:'<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>'},
    {n:'Fast submit',d:'<circle cx="12" cy="13" r="8"/><polyline points="12 9 12 13 15 15"/>'},
    {n:'Top 5%',d:'<path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.9z"/>'},
    {n:'Bounty hunter',d:'<path d="M12 3v18"/><path d="M5 8h14"/><circle cx="12" cy="14" r="5"/>'}
  ];
  var LOCK_D='<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>';
  function earnedBdg(c){
    var h=0,t=String(c.name||'');for(var i=0;i<t.length;i++)h=(h*31+t.charCodeAt(i))>>>0;
    return BDG.map(function(b,i2){return i2===0?(c.done||0)>3:(i2===1?true:!!((h>>i2)&1));});
  }
  function badges(c){
    var e=earnedBdg(c),picks=BDG.filter(function(b,i2){return e[i2];}).slice(0,3);
    if(!picks.length)picks=[BDG[1]];
    return '<div class="pc-bdg">'+picks.map(function(b){return '<span class="pb'+(b.g?' gold':'')+'"><span class="pb-hex"><svg viewBox="0 0 24 24">'+b.d+'</svg></span>'+esc(b.n)+'</span>';}).join('')+'</div>';
  }
  function badgeGrid(c){
    var e=earnedBdg(c);
    return '<div class="ar-bdgs">'+BDG.map(function(b,i2){var on=e[i2];
      return '<div class="ar-bdg '+(on?(b.g?'earned gold':'earned'):'locked')+'"><div class="ar-bdg-hex"><svg viewBox="0 0 24 24">'+(on?b.d:LOCK_D)+'</svg></div><div class="ar-bdg-n">'+esc(b.n)+'</div></div>';
    }).join('')+'</div>';
  }
  function card(x,idx,withBadges){var c=x.c,s=x.s;
    return '<div class="pc" data-i="'+idx+'"><div class="pc-top"><div class="pc-av"><img src="https://i.pravatar.cc/150?u='+encodeURIComponent(c.name)+'" alt="" loading="lazy"></div><div class="pc-id"><div class="pc-nm">'+esc(c.name)+'</div><div class="pc-role">'+esc(c.role)+' \u00b7 '+esc(c.city)+'</div></div><div class="pc-match"><b>'+s.overall+'<em>%</em></b><span>match</span></div></div>'
      +(withBadges?badges(c):'')
      +'<div class="pc-sk">'+c.skills.map(function(k){return '<span>'+esc(k)+'</span>';}).join('')+'</div></div>';
  }
  function render(){
    currentRows=matched();
    if(!currentRows.length){grid.innerHTML='<div class="cand-empty">No candidates clear these filters. Loosen a requirement or clear the tech stack to widen the pool.</div>';return;}
    var groups={},order=[];
    currentRows.forEach(function(x,idx){var cat=categoryOf(x.c);if(!groups[cat]){groups[cat]=[];order.push(cat);}groups[cat].push({x:x,idx:idx});});
    order.sort(function(a,b){return groups[b].length-groups[a].length;});
    var arL='<svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>',arR='<svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>';
var ranked=currentRows.map(function(x,idx){return{x:x,idx:idx};}).sort(function(a,b){return b.x.s.overall-a.x.s.overall;}).slice(0,10);
    eliteRows=[];ranked.forEach(function(it,i){if(i%2)eliteRows.push(it);else eliteRows.unshift(it);});
    if(topFocus<0||topFocus>=eliteRows.length)topFocus=Math.floor(eliteRows.length/2);
    var topHTML=eliteRows.length?'<div class="cat cat-top"><div class="cat-head"><h3>Top matches</h3></div><div class="tm-stack"><div class="tm-slide">'+topSlide()+'</div></div></div>':'';
    grid.innerHTML=topHTML+order.map(function(cat){
      var items=groups[cat];
      return '<div class="cat"><div class="cat-head"><h3>'+esc(cat)+'</h3><div class="cat-nav"><button class="cat-arrow" type="button" data-dir="-1" aria-label="Scroll left">'+arL+'</button><button class="cat-arrow" type="button" data-dir="1" aria-label="Scroll right">'+arR+'</button></div></div><div class="cat-track">'+items.map(function(it){return card(it.x,it.idx);}).join('')+'</div></div>';
    }).join('');
    centerTop();
  }

  var _subStats={};
  function subStats(idx){
    if(_subStats[idx])return _subStats[idx];
    var x=currentRows[idx],c=x.c,s=x.s,seed=0;
    for(var k=0;k<c.name.length;k++)seed=(seed*31+c.name.charCodeAt(k)+7)>>>0;
    function r(a2,b2){seed=(seed*1103515245+12345)>>>0;return a2+seed%(b2-a2+1);}
    var o={correctness:r(88,100),quality:r(80,96),perf:r(74,94),cov:r(70,92),passed:r(22,28),hrs:r(2,6),mins:r(5,55),score:Math.round(s.overall*0.9+6),days:r(2,19),commits:r(6,18),tdd:r(3,6),ivMins:r(34,46),ivDays:r(2,14),firstPass:r(9,16)};
    _subStats[idx]=o;return o;
  }
  function subKit(title){
    var t=String(title||'').toLowerCase();
    if(/queue|delivery|worker|job/.test(t))return{
      files:[['src/queue.js','core'],['src/worker.js','core'],['src/ack.js','core'],['test/queue.test.js','tests'],['README.md','docs']],
      entry:'src/queue.js',
      code:'export async function enqueue(job, { attempts = 5 } = {}) {\n  const id = await store.put({ ...job, attempts, state: \'ready\' });\n  metrics.inc(\'enqueued\');\n  return id;\n}\n\nasync function claim(workerId) {\n  // lease, not delete \u2014 an unacked job returns to the queue\n  return store.lease(workerId, LEASE_MS);\n}',
      tests:[['Delivers every job at least once',1],['Redelivers after a lease expiry',1],['Survives a worker crash mid-job',1],['Caps retries at the configured attempts',1],['Dead-letters after final failure',1],['Keeps ordering within a partition',0]],
      strength:'lease-based claiming rather than delete-on-read, so a crashed worker returns its job to the queue',
      weak:'ordering within a partition is best-effort \u2014 two workers on the same key can interleave under retry'
    };
    if(/rank|match|score|pool/.test(t))return{
      files:[['src/ranker.js','core'],['src/scoring.js','core'],['src/cache.js','core'],['test/ranker.test.js','tests'],['README.md','docs']],
      entry:'src/ranker.js',
      code:'export function rankCandidates(pool, weights) {\n  validateWeights(weights);\n  if (!pool.length) return [];\n\n  return pool\n    .map(c =&gt; ({ c, score: fit(c, weights) }))\n    .sort((a, b) =&gt; b.score - a.score || a.c.id.localeCompare(b.c.id));\n}',
      tests:[['Ranks by weighted fit descending',1],['Handles an empty pool',1],['Stable tie-break on equal score',1],['Rejects unknown weight keys',1],['Caps at requested page size',1],['Memoises repeated fit() calls',0]],
      strength:'scoring and ordering split into separate testable units, with weights validated on the way in',
      weak:'fit() is recomputed on every comparison rather than memoised'
    };
    if(/api|endpoint|rest|graphql|service/.test(t))return{
      files:[['src/routes.js','core'],['src/handlers.js','core'],['src/validate.js','core'],['test/api.test.js','tests'],['README.md','docs']],
      entry:'src/handlers.js',
      code:'export async function handleCreate(req, res) {\n  const body = validate(schema.create, req.body);\n  const row = await db.insert(body);\n  res.status(201).json(serialise(row));\n}',
      tests:[['Rejects a malformed payload with 400',1],['Returns 201 and the created resource',1],['Is idempotent on a repeated key',1],['Paginates with a stable cursor',1],['Enforces the auth scope',1],['Returns typed errors, not a catch-all',0]],
      strength:'schema validation at the boundary, so handlers stay free of defensive checks',
      weak:'failures surface as a single catch-all rather than typed cases'
    };
    if(/data|pipeline|etl|stream|ingest/.test(t))return{
      files:[['src/pipeline.py','core'],['src/transforms.py','core'],['src/sinks.py','core'],['tests/test_pipeline.py','tests'],['README.md','docs']],
      entry:'src/pipeline.py',
      code:'def run(batch, *, on_error="dead_letter"):\n    rows = (parse(r) for r in batch)\n    rows = (enrich(r) for r in rows if r is not None)\n    return sink.write(rows, on_error=on_error)',
      tests:[['Processes a clean batch end to end',1],['Skips and records malformed rows',1],['Is idempotent on a replayed batch',1],['Backpressures when the sink is slow',1],['Emits row-level metrics',1],['Handles a schema change mid-stream',0]],
      strength:'generator-based stages, so memory stays flat regardless of batch size',
      weak:'a mid-stream schema change fails the whole batch instead of quarantining the affected rows'
    };
    return{
      files:[['src/index.js','core'],['src/core.js','core'],['src/util.js','core'],['test/core.test.js','tests'],['README.md','docs']],
      entry:'src/core.js',
      code:'export function solve(input, options = {}) {\n  const cfg = { ...defaults, ...options };\n  validate(input, cfg);\n  return pipeline.reduce((acc, step) =&gt; step(acc, cfg), input);\n}',
      tests:[['Handles the happy path',1],['Rejects invalid input',1],['Is deterministic across runs',1],['Handles the empty case',1],['Respects configured limits',1],['Recovers from a partial failure',0]],
      strength:'a small composable pipeline with each step independently tested',
      weak:'partial failures unwind the whole run rather than resuming from the last good step'
    };
  }
  var CAL={
    google:'https://www.google.com/s2/favicons?domain=calendar.google.com&sz=64',
    outlook:'https://www.google.com/s2/favicons?domain=outlook.office.com&sz=64',
    apple:'https://www.google.com/s2/favicons?domain=icloud.com&sz=64'
  };
  var CALFB='<svg viewBox="0 0 24 24" fill="none" stroke="#6c6f68" stroke-width="1.7" stroke-linecap="round"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>';
  function scheduleModal(idx){
    var x=currentRows[idx];if(!x)return;var c=x.c,fn=(c.name||'').split(' ')[0];
    var opts=[['google','Google Calendar','https://calendar.app.google/…'],['outlook','Outlook Calendar','https://outlook.office.com/bookwithme/…'],['apple','Apple Calendar','https://icloud.com/invites/…']];
    var back=document.createElement('div');back.className='sub-back';
    back.innerHTML='<div class="sub cfm" role="dialog" aria-modal="true"><button class="sub-x" type="button" aria-label="Close"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></button>'
      +'<div class="cfm-who" style="margin-bottom:14px"><img src="https://i.pravatar.cc/80?u='+encodeURIComponent(c.name)+'" alt=""><span><b>'+esc(c.name)+'</b><em>'+esc(c.role)+' \u00b7 '+esc(c.city)+'</em></span></div>'
      +'<h4>Schedule the final interview</h4>'
      +'<p class="sch-lead">Connect the calendar you book from, then send '+esc(fn)+' your scheduling link.</p>'
      +'<p class="sch-l">Calendar</p><div class="sch-opts">'
      +opts.map(function(o,n){return '<button type="button" class="sch-o'+(n===0?' on':'')+'" data-cal="'+o[0]+'" data-ph="'+esc(o[2])+'"><img class="sch-ic" src="'+CAL[o[0]]+'" alt=""><b>'+esc(o[1])+'</b><i></i></button>';}).join('')
      +'</div>'
      +'<p class="sch-l">Meeting link</p><input class="sch-in" type="text" placeholder="'+esc(opts[0][2])+'" autocomplete="off" />'
      +'<p class="sch-hint">'+esc(fn)+' will pick a slot from the availability on your calendar. You will get the confirmed invite by email.</p>'
      +'<div class="cfm-act"><button type="button" class="sd-btn cfm-no">Cancel</button><button type="button" class="sd-btn pri sch-send">Send invite</button></div></div>';
    document.body.appendChild(back);requestAnimationFrame(function(){back.classList.add('on');});
    back.querySelectorAll('img.sch-ic').forEach(function(im){im.addEventListener('error',function(){im.outerHTML=CALFB;});});
    var input=back.querySelector('.sch-in');
    function close(){back.classList.remove('on');setTimeout(function(){back.remove();},200);document.removeEventListener('keydown',esckey);}
    function esckey(e){if(e.key==='Escape')close();}
    back.addEventListener('click',function(e){
      if(e.target===back||e.target.closest('.sub-x')||e.target.closest('.cfm-no')){close();return;}
      var o=e.target.closest('.sch-o');
      if(o){back.querySelectorAll('.sch-o').forEach(function(b2){b2.classList.toggle('on',b2===o);});input.placeholder=o.getAttribute('data-ph');return;}
      if(e.target.closest('.sch-send')){
        var pick=back.querySelector('.sch-o.on b').textContent;
        back.querySelector('.sub').innerHTML='<div class="sch-done"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="8 12.5 11 15.5 16.5 9"/></svg><b>Invite sent to '+esc(fn)+'</b><p>Booked through '+esc(pick)+'. '+esc(fn)+' will choose a slot from your availability and you will both get the calendar invite.</p></div>';
        audit('schedule',idx,{stage:'Human interview',note:'Invite sent via '+pick});pipeUI.sched=pipeUI.sched||{};pipeUI.sched[idx]=1;
        setTimeout(function(){
          close();
          if(isNB()&&pipeUI.stage===4){renderPipe();var rb=viewPipe.querySelector('.bf-rev[data-i="'+idx+'"]');if(rb)rb.click();return;}
          viewPipe.querySelectorAll('.sd-sched[data-i="'+idx+'"]').forEach(function(b){b.outerHTML='<span class="wd-schd">Interview scheduled for 20th September 6:00 PM (IST)</span>';});
        },1900);
      }
    });
    document.addEventListener('keydown',esckey);
  }
  function confirmRemove(idx){
    var x=currentRows[idx];if(!x)return;var c=x.c;
    var back=document.createElement('div');back.className='sub-back';
    back.innerHTML='<div class="sub cfm" role="dialog" aria-modal="true">'
      +'<h4>Remove this candidate from the pool?</h4>'
      +'<div class="cfm-who"><img src="https://i.pravatar.cc/80?u='+encodeURIComponent(c.name)+'" alt=""><span><b>'+esc(c.name)+'</b><em>'+esc(c.role)+' \u00b7 '+esc(c.city)+'</em></span></div>'
      +'<p>This overrides the AI decision for this stage. '+esc((c.name||'').split(' ')[0])+' will be moved out of the pipeline and notified that they were not taken forward.</p>'
      +'<div class="cfm-act"><button type="button" class="sd-btn cfm-no">Keep in pool</button><button type="button" class="sd-btn warn cfm-yes">Remove candidate</button></div></div>';
    document.body.appendChild(back);back.querySelector('.cfm-yes').addEventListener('click',function(){audit('remove',idx,{ovr:1,note:'Override of AI decision. Candidate notified.'});});requestAnimationFrame(function(){back.classList.add('on');});
    function close(){back.classList.remove('on');setTimeout(function(){back.remove();},200);document.removeEventListener('keydown',esckey);}
    function esckey(e){if(e.key==='Escape')close();}
    back.addEventListener('click',function(e){if(e.target===back||e.target.closest('.cfm-no')||e.target.closest('.cfm-yes'))close();});
    document.addEventListener('keydown',esckey);
  }
  function showTranscript(idx){
    var x=currentRows[idx];if(!x)return;var c=x.c,fn=(c.name||'').split(' ')[0],seed=0;
    for(var k=0;k<c.name.length;k++)seed=(seed*31+c.name.charCodeAt(k)+3)>>>0;
    function r(a2,b2){seed=(seed*1103515245+12345)>>>0;return a2+seed%(b2-a2+1);}
    var ivs=subStats(idx),mins=ivs.ivMins;
    var T=[
      ['00:00','Intro & role fit'],
      ['ai','Thanks for making the time. I have your profile and your challenge submission, so we can skip the CV walkthrough. Tell me what you were actually responsible for in your last role.'],
      ['me','I owned the payments service end to end \u2014 the API, the reconciliation job and the on-call rota for both. Team of four, but I was the only one who had been through a full migration.'],
      ['ai','What was the hardest constraint you worked under?'],
      ['me','Regulatory. We could not drop a single transaction record, which ruled out most of the simpler migration paths. We ended up dual-writing for six weeks and reconciling nightly.'],
      ['09:20','Experience deep-dive'],
      ['ai','Walk me through a time a system you built failed in production.'],
      ['me','Our match service timed out under a traffic spike. I traced it to an N+1 query, added batching and a cache layer, then set up alerting so we would catch it earlier next time.'],
      ['ai','What did you change about how you work after that?'],
      ['me','I stopped trusting local benchmarks. Anything on a hot path now gets a load test against production-shaped data before it ships.'],
      ['16:40','Live coding'],
      ['ai','Implement a sliding-window rate limiter. Talk me through it as you go.'],
      ['me','I will use a deque per key so eviction is O(1). Evict anything outside the window, then compare the length against the limit before appending.'],
      ['ai','What happens if two workers share that key on different machines?'],
      ['me','This breaks. In-process state only holds for a single instance \u2014 you would move the window into Redis and pay a round trip per check, or accept per-instance limits and divide the quota.'],
      ['ai','Good. Add retry_after before you run the suite.'],
      ['me','Done \u2014 window minus the age of the oldest hit, floored at zero.'],
      ['31:05','System design'],
      ['ai','Sketch the ingestion path for a service taking ten thousand events a second.'],
      ['me','Queue in front, stateless consumers, partition by tenant id so ordering holds where it matters. Batch writes to the store rather than one insert per event.'],
      ['ai','Where does that fall over?'],
      ['me','Hot tenants. One large tenant can saturate its partition while the rest sit idle, so you need either sub-partitioning or a spillover path.'],
      ['ai','And if the store is unavailable for ten minutes?'],
      ['me','The queue absorbs it as long as retention holds. Past that, you are dropping events, so you would want a dead-letter sink to replay from.'],
      [String(mins-3).padStart(2,'0')+':10','Candidate questions'],
      ['me','How is the team split between platform work and product work right now?'],
      ['ai','Roughly two-thirds platform this quarter. That will be covered in the panel round with the hiring manager.']
    ];
    var back=document.createElement('div');back.className='sub-back';
    back.innerHTML='<div class="sub" role="dialog" aria-modal="true"><button class="sub-x" type="button" aria-label="Close"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></button>'
      +'<div class="sub-hd"><img src="https://i.pravatar.cc/80?u='+encodeURIComponent(c.name)+'" alt=""><span><b>'+esc(c.name)+'</b><em>'+esc(c.role)+' \u00b7 '+esc(c.city)+'</em></span></div>'
      +'<h3 class="sub-t">AI interview transcript</h3>'
      +'<div class="sub-meta"><span>'+mins+' min</span><span>Recorded '+ivs.ivDays+' days ago</span><span>Video + live editor</span><span>Auto-transcribed</span></div>'
      +'<div class="sub-sec"><div class="tr">'+T.map(function(l){
        if(l[0]!=='ai'&&l[0]!=='me')return '<div class="tr-mark">'+esc(l[0])+' \u00b7 '+esc(l[1])+'</div>';
        return '<div class="tr-l'+(l[0]==='me'?' me':'')+'"><span class="tr-w">'+(l[0]==='ai'?'Colosseum AI':esc(fn))+'</span><p>'+esc(l[1])+'</p></div>';
      }).join('')+'</div></div></div>';
    document.body.appendChild(back);requestAnimationFrame(function(){back.classList.add('on');});
    function close(){back.classList.remove('on');setTimeout(function(){back.remove();},200);document.removeEventListener('keydown',esckey);}
    function esckey(e){if(e.key==='Escape')close();}
    back.addEventListener('click',function(e){if(e.target===back||e.target.closest('.sub-x'))close();});
    document.addEventListener('keydown',esckey);
  }
  function showSubmission(idx,sc){
    var x=currentRows[idx];if(!x)return;var c=x.c,s=x.s;
    var seed=0;for(var k=0;k<c.name.length;k++)seed=(seed*31+c.name.charCodeAt(k))>>>0;
    function rnd(a2,b2){seed=(seed*1103515245+12345)>>>0;return a2+seed%(b2-a2+1);}
    var kit=subKit(challenge&&challenge.title),ss=subStats(idx);
    var hrs=ss.hrs,mins=ss.mins,passed=ss.passed,cov=ss.cov;
    var files=kit.files.map(function(f){return [f[0],rnd(30,240)+' lines',f[1]];});
    var tests=kit.tests;
    var back=document.createElement('div');back.className='sub-back';
    back.innerHTML='<div class="sub" role="dialog" aria-modal="true"><button class="sub-x" type="button" aria-label="Close"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></button>'
      +'<div class="sub-hd"><img src="https://i.pravatar.cc/80?u='+encodeURIComponent(c.name)+'" alt=""><span><b>'+esc(c.name)+'</b><em>'+esc(c.role)+' \u00b7 '+esc(c.city)+'</em></span></div>'
      +'<h3 class="sub-t">'+esc((challenge&&challenge.title)||'Take-home challenge')+'</h3>'
      +'<div class="sub-meta"><span>Submitted '+ss.days+' days ago</span><span>Time used '+hrs+'h '+mins+'m of 8h</span><span>'+passed+'/28 hidden tests passed</span><span>Coverage '+cov+'%</span></div>'
      +'<div class="sub-kv"><div><b>'+(sc||ss.score)+'%</b><em>Challenge score</em></div><div><b>'+ss.correctness+'%</b><em>Correctness</em></div><div><b>'+ss.quality+'%</b><em>Code quality</em></div><div><b>'+ss.perf+'%</b><em>Performance</em></div></div>'
      +'<div class="sub-sec"><h5>Candidate\u2019s write-up</h5><p>My approach: '+kit.strength+'. I kept each piece independently testable rather than optimising early, and wrote the test cases from the brief before starting the implementation.</p><p>Known limitation: '+kit.weak+'. Given more time that is the first thing I would fix. I left it as a documented TODO rather than half-building it.</p></div>'
      +'<div class="sub-sec"><h5>Files</h5><div class="sub-files">'+files.map(function(f){return '<div class="sub-file"><code>'+esc(f[0])+'</code><span>'+esc(f[1])+'</span><span>'+esc(f[2])+'</span></div>';}).join('')+'</div></div>'
      +'<div class="sub-sec"><h5>'+esc(kit.entry)+' \u00b7 excerpt</h5><pre class="sub-pre">'+kit.code+'</pre></div>'
      +'<div class="sub-sec"><h5>Test log</h5><div class="sub-tests">'+tests.map(function(t2){return '<div><span class="'+(t2[1]?'ok':'no')+'">'+(t2[1]?'\u2713':'\u2717')+'</span><span>'+esc(t2[0])+'</span></div>';}).join('')+'</div></div>'
      +'<div class="sub-sec"><h5>Integrity check</h5><p>No similarity match against prior submissions. Commit history spans '+ss.commits+' commits over '+hrs+' hours, with tests preceding implementation in '+ss.tdd+' of them.</p></div>'
      +'</div>';
    document.body.appendChild(back);requestAnimationFrame(function(){back.classList.add('on');});
    function close(){back.classList.remove('on');setTimeout(function(){back.remove();},200);document.removeEventListener('keydown',esckey);}
    function esckey(e){if(e.key==='Escape')close();}
    back.addEventListener('click',function(e){if(e.target===back||e.target.closest('.sub-x'))close();});
    document.addEventListener('keydown',esckey);
  }
  function showProfile(idx){
    var x=currentRows[idx];if(!x)return;var c=x.c,s=x.s;
    var email=c.name.toLowerCase().replace(/[^a-z]+/g,'.')+'@gmail.com';
    var phone='+1 (415) 555-'+String(1000+((c.years*37+c.done)%9000));
    var lastK=Math.round((88+c.years*6)/5),expK=Math.round((88+c.years*6+18)/5);
    var COS=['Voiceplug AI','Northwind Systems','Vega Data','Helio Labs','Marlin Cloud','Kestrel IO'];
    var recentCo=COS[idx%COS.length],priorA=COS[(idx+2)%COS.length],priorB=COS[(idx+4)%COS.length];
    var chk='<svg class="pf-ic" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>';
    var xic='<svg class="pf-ic" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
    var proof=[{k:'Salary slips',ok:false},{k:'Offer letter',ok:true},{k:'Bank statement',ok:false}];
    var mrcBul=['Owned end-to-end delivery across '+c.done+' shipped projects in the last year.','Cut post-release defects by adding automated validation gates.','Held Go/No-Go release sign-off for weekly production pushes.'];
    var strengths=['Near-exact domain fit \u2014 hands-on with '+(s.hit[0]||'the core stack')+' and the adjacent tooling the brief leans on.','Strong technical depth: '+(s.hit.slice(0,2).join(' + ')||'multiple relevant skills')+' with production ownership.','Senior scope \u2014 owned delivery end to end, release sign-offs, RCA/triage, and mentored engineers.'];
    var concerns=['A couple of headline metrics read rounded; worth asking for baselines at interview.','Recent role tenure is short (~1 yr) in the target specialty.','One overlapping employment window needs a quick clarification.'];
    var iqs=['Walk me through your biggest reliability win \u2014 what was the baseline and how did you measure the gain?','How did you validate correctness on real production data, and what rubric did you score against?','Describe an edge case your pipeline had to handle and how you designed for failure.'];
    var CRIT=[{id:'C1',t:'Fundamentals & rigor',w:25,sc:3,q:'Designed and owned end-to-end quality strategy covering regression, coverage and failure-mode analysis.',ev:'Owns the area end to end incl. RCA, triage and release sign-off.'},{id:'C2',t:'API & technical depth',w:25,sc:3,q:'Built API testing modules asserting response schemas, status codes and payload correctness independent of UI.',ev:'Deep API/integration testing, schema assertions, SQL, CI/CD automation.'},{id:'C3',t:'Domain proximity',w:25,sc:(s.skillFit>=75?3:2),q:'Built an automation pipeline integrated with the exact platforms named in the brief.',ev:'Multiple strong adjacencies, directly on-domain.'},{id:'C4',t:'Communication & reporting',w:15,sc:3,q:'Authored product manuals and delivered release demos, cutting onboarding time 35%.',ev:'Crisp, structured writing; documentation and cross-functional work.'},{id:'C5',t:'Initiative & automation',w:10,sc:(c.years>=6?3:2),q:'Architected a reusable automation framework combining UI and API layers end to end.',ev:'Built and owned multiple frameworks while retaining exploratory depth.'}];
    var TABS=['Arena','Snapshot','Signals','AI assessment','Gates & scoring','Resume'];
    var HSTAGE=['Applied','Screening','Challenge','Interview','Offer'];
    var CO={
      'Northwind Data':{lg:'assets/lg-1.png',tag:'Streaming data platform',ind:'Data infrastructure',loc:'Amsterdam, NL',sz:'90\u2013140',site:'northwinddata.io',li:'company/northwind-data',ab:'Northwind Data runs the ingest and stream-processing layer behind a dozen consumer apps. The platform team owns correctness end to end, from broker tuning to the query surface analysts use.'},
      'Aurora Systems':{lg:'assets/lg-2.png',tag:'Cloud reliability tooling',ind:'Developer tools',loc:'Berlin, DE',sz:'60\u201390',site:'aurorasystems.dev',li:'company/aurora-systems',ab:'Aurora Systems builds the on-call and SLO tooling that mid-size engineering orgs use instead of assembling their own stack. Small senior team, heavy bias toward measurable reliability work.'},
      'Kestrel':{lg:'assets/lg-5.png',tag:'Edge networking & delivery',ind:'Networking',loc:'Remote (EU)',sz:'25\u201340',site:'kestrel.net',li:'company/kestrel-edge',ab:'Kestrel operates a global edge network for low-latency delivery. A lean team that rewards deep systems knowledge and pragmatic, measurable improvements over rewrites.'},
      'Lumen':{lg:'assets/lg-3.png',tag:'Infrastructure automation',ind:'Cloud infrastructure',loc:'Lisbon, PT',sz:'40\u201360',site:'lumeninfra.com',li:'company/lumen-infra',ab:'Lumen gives platform teams a paved road for provisioning across three clouds. Most work lands in shared modules other engineers depend on daily.'},
      'Meridian Health':{lg:'assets/lg-4.png',tag:'Clinical data infrastructure',ind:'Health tech',loc:'Copenhagen, DK',sz:'200\u2013300',site:'meridianhealth.eu',li:'company/meridian-health',ab:'Meridian Health handles clinical records and telemetry for hospital networks across the Nordics. Regulated environment, so observability and auditability sit at the centre of the platform roadmap.'},
      'Halden Group':{lg:'assets/lg-1.png',tag:'Industrial analytics',ind:'Manufacturing',loc:'Oslo, NO',sz:'400\u2013600',site:'haldengroup.no',li:'company/halden-group',ab:'Halden Group runs analytics for heavy-industry operations across Northern Europe. The data team is rebuilding a decade-old warehouse into an incremental, tested model layer.'},
      'Arcadia':{lg:'assets/lg-3.png',tag:'Consumer subscriptions',ind:'Consumer',loc:'Lisbon, PT',sz:'40\u201360',site:'arcadia.app',li:'company/arcadia',ab:'Arcadia runs a consumer subscription product where signup and retention are the whole business. Small product team, fast iteration on the funnel.'},
      'Brightline':{lg:'assets/lg-4.png',tag:'Healthcare software',ind:'Health tech',loc:'Dublin, IE',sz:'250\u2013350',site:'brightline.health',li:'company/brightline',ab:'Brightline builds clinical workflow software for private care networks. Design and platform teams share one component library across six products.'},
      'Trellis':{lg:'assets/lg-5.png',tag:'B2B catalogue search',ind:'SaaS',loc:'Remote (EU)',sz:'60\u201380',site:'trellis.io',li:'company/trellis',ab:'Trellis powers catalogue search for industrial distributors. Relevance work is measured against judgement sets rather than opinion.'},
      'Cadence Pay':{lg:'assets/lg-1.png',tag:'Recurring payments',ind:'Fintech',loc:'Paris, FR',sz:'120\u2013180',site:'cadencepay.com',li:'company/cadence-pay',ab:'Cadence Pay handles subscription billing for European SaaS companies. Correctness in money handling is the team\u2019s first constraint.'},
      'Nimbus Retail':{lg:'assets/lg-2.png',tag:'Omnichannel retail',ind:'Retail',loc:'Madrid, ES',sz:'800\u20131,000',site:'nimbusretail.es',li:'company/nimbus-retail',ab:'Nimbus Retail operates stores and a mobile-first commerce platform across Iberia. Most engineering effort sits on the checkout path.'},
      'Foundry Labs':{lg:'assets/lg-3.png',tag:'Design and build studio',ind:'Agency',loc:'Copenhagen, DK',sz:'25\u201340',site:'foundrylabs.dk',li:'company/foundry-labs',ab:'Foundry Labs is a small studio building products for clients in regulated industries, where accessibility work is contractual rather than optional.'},
      'Volt':{lg:'assets/lg-2.png',tag:'Compute cost optimisation',ind:'Cloud infrastructure',loc:'Remote (global)',sz:'15\u201325',site:'volt.build',li:'company/volt-build',ab:'Volt sells one thing: lower cloud spend without missing latency targets. Every engineer works directly against customer traffic replays, so results are visible within days.'}
    };
    var RULES=['Work solo \u2014 no collaborators, pair-programming, or outsourced help.','Any language or framework is allowed unless the challenge states otherwise.','AI assistants may be used, but you must be able to explain every line you submit.','Submit a runnable repository with clear setup instructions and your tests.','All work must be your own and completed within the stated timeline.'];
    var WON=[
      {t:'Streaming ingest dedupe',k:'Bounty',co:'Northwind Data',m:'Mar 2026 \u00b7 1st of 84 entries',p:'$2,400',eff:'6 hours',win:'9 days',br:'Design and prove a dedupe layer for a 40k events/sec ingest pipeline without adding more than 50ms of p99 latency.',goal:'Ship a dedupe stage that survives broker replays and worker restarts, and show the latency cost you paid for it.',det:['The pipeline receives at-least-once delivery from three upstream producers, each with its own idempotency key format.','Replays after an outage can duplicate up to two hours of events, so an in-memory window alone will not hold.','Deliverable was a runnable service plus a load harness reproducing the 40k events/sec peak and a written latency breakdown.'],sk:['Kafka','Flink','Go','Redis'],dur:'9 days',out:'Winning entry \u2014 merged to production'},
      {t:'Platform reliability sprint',k:'Hiring',co:'Aurora Systems',m:'Nov 2025 \u00b7 offer extended',p:'Hired',eff:'8 hours',win:'2 weeks',br:'Cut alert noise on a 60-service estate and rewrite the on-call runbook around SLOs the team could actually defend.',goal:'Propose an SLO set per tier-one service, then prove the alert reduction against six weeks of replayed incident data.',det:['The estate had 340 active alert rules, roughly a third of which had never fired without a human muting them.','Candidates were given anonymised incident history and asked to keep detection time flat while cutting pages.','Final round was a live review of the proposed runbook with two on-call engineers.'],sk:['Kubernetes','Prometheus','Terraform'],dur:'2 weeks',out:'Offer extended after final panel'},
      {t:'Latency budget audit',k:'Bounty',co:'Kestrel',m:'Jan 2026 \u00b7 1st of 51 entries',p:'$1,800',eff:'4 hours',win:'5 days',br:'Trace a checkout flow end to end and produce a per-hop latency budget with the three highest-leverage fixes.',goal:'Account for every millisecond between edge and database, then name the fixes worth doing and the ones that are not.',det:['A sample trace set covering 200k checkout requests was provided, with two deliberately mislabelled spans.','Submissions were judged on the reasoning behind the budget allocation, not just the total.','The winning audit is now the template Kestrel uses for new service reviews.'],sk:['OpenTelemetry','Postgres','Node'],dur:'5 days',out:'Winning entry \u2014 adopted as internal standard'},
      {t:'Terraform module refactor',k:'Bounty',co:'Lumen',m:'Sep 2025 \u00b7 2nd of 63 entries',p:'$950',eff:'6 hours',win:'7 days',br:'Collapse eleven copy-pasted environment stacks into one reusable module set with drift detection in CI.',goal:'Deliver a module set that reproduces all eleven environments from variables alone, plus a CI job that fails on drift.',det:['The existing stacks had diverged over three years, with four environments carrying undocumented manual changes.','Plan output for every environment had to stay empty after migration.','Runner-up placement: the module set was accepted but the drift job needed rework for the largest environment.'],sk:['Terraform','AWS','GitHub Actions'],dur:'7 days',out:'Runner-up \u2014 partial bounty awarded'},
      {t:'Onboarding flow teardown',k:'Bounty',co:'Arcadia',m:'Aug 2025 \u00b7 1st of 72 entries',p:'$1,600',eff:'7 hours',win:'10 days',br:'Take a five-step signup with a 41% drop-off and rebuild it around the one job the user came to do.',goal:'A prototype plus the reasoning for every step kept, merged or cut.',det:['Funnel data and twelve support tickets were provided as the only research input.','Copy changes counted, but had to be justified against the tickets.'],sk:['Figma','Prototyping','Copywriting'],dur:'10 days',out:'Winning entry \u2014 clearest reasoning across 72 entries'},
      {t:'Design system audit',k:'Hiring',co:'Brightline',m:'Jun 2025 \u00b7 offer declined',p:'Finalist',eff:'8 hours',win:'2 weeks',br:'Audit a two-year-old component library and propose a migration order for the team.',goal:'A prioritised list of what to fix, merge or delete, with effort estimates.',det:['The library had 140 components and no usage telemetry.','Estimates had to assume a team of three working half-time.'],sk:['Design systems','Figma','React'],dur:'2 weeks',out:'Finalist \u2014 offer declined for location reasons'},
      {t:'Search relevance rework',k:'Bounty',co:'Trellis',m:'Apr 2025 \u00b7 2nd of 44 entries',p:'$700',eff:'6 hours',win:'9 days',br:'Improve relevance on a 2M-document catalogue search where users mostly type two words.',goal:'A measurable lift on the supplied judgement set without hand-tuning per query.',det:['A judgement set of 400 queries was provided; 80 were held back for scoring.','Any retrieval approach was allowed as long as it ran inside the latency budget.'],sk:['Elasticsearch','Python','ML'],dur:'9 days',out:'Runner-up \u2014 strong offline lift, slower at query time'},
      {t:'Billing edge cases',k:'Bounty',co:'Cadence Pay',m:'Feb 2025 \u00b7 1st of 38 entries',p:'$1,200',eff:'5 hours',win:'7 days',br:'Handle proration, mid-cycle plan changes and refunds in a subscription billing model.',goal:'A test suite that covers the twelve scenarios in the brief and any you find yourself.',det:['Three of the twelve scenarios had no correct answer in the current product and had to be flagged.','Money handling had to be exact; floating point was an automatic fail.'],sk:['TypeScript','Stripe','Postgres'],dur:'7 days',out:'Winning entry \u2014 caught the three unanswerable cases'},
      {t:'Mobile checkout sprint',k:'Hiring',co:'Nimbus Retail',m:'Dec 2024 \u00b7 offer extended',p:'Hired',eff:'7 hours',win:'12 days',br:'Rebuild a mobile checkout that loses a third of its users at the address step.',goal:'A working prototype with the address step redesigned around real input patterns.',det:['Session recordings for 200 abandoned checkouts were supplied.','The payment provider and its constraints were fixed.'],sk:['React Native','UX','Analytics'],dur:'12 days',out:'Hired off the back of this submission'},
      {t:'Accessibility sweep',k:'Bounty',co:'Foundry Labs',m:'Oct 2024 \u00b7 3rd of 57 entries',p:'$450',eff:'5 hours',win:'6 days',br:'Bring a marketing site and its booking flow to WCAG 2.2 AA.',goal:'A fixed booking flow plus a report on what could not be fixed without a rebuild.',det:['Automated tooling caught roughly half the issues; the rest needed manual testing.','Screen reader behaviour on the date picker was the hardest constraint.'],sk:['ARIA','CSS','Testing'],dur:'6 days',out:'Third of 57 \u2014 went beyond the brief on the booking flow'}
    ];
    var RATINGS=[
      ['Northwind Data',5,'Mar 2026','Shipped the dedupe layer a week early and documented it well enough that the team picked it up without a handover call.'],
      ['Aurora Systems',4,'Nov 2025','Strong on the reliability work and easy to review with. Took longer than expected to ask for help when blocked.'],
      ['Kestrel',5,'Jan 2026','Found two latency regressions we had missed entirely and explained the tradeoffs without overselling the fix.'],
      ['Lumen',4,'Sep 2025','Clean, reusable modules and clear commit history. Would work with again on infrastructure work.'],
      ['Arcadia',5,'Aug 2025','Rebuilt the onboarding flow and backed every change with a reason. Handover was genuinely painless.'],
      ['Brightline',4,'Jun 2025','Thorough audit and a sensible migration order. We wanted more opinion on what to cut.'],
      ['Trellis',5,'Apr 2025','Took an ambiguous relevance problem and came back with something measurable in under a week.'],
      ['Cadence Pay',4,'Feb 2025','Careful with edge cases and good with our support team. Comfortable working without much direction.'],
      ['Nimbus Retail',5,'Dec 2024','Best checkout work we have had from a challenge. Joined the team on the back of it.'],
      ['Foundry Labs',4,'Oct 2024','Fixed more than the brief asked for and flagged the rest rather than silently expanding scope.']
    ];
    function pstar(on){return '<svg'+(on?' class="on"':'')+' viewBox="0 0 24 24"><path d="M12 2l3 6.5 7 .9-5.1 4.8 1.3 7-6.2-3.4L5.8 21l1.3-7L2 9.4l7-.9z"/></svg>';}
    function pstars(n){var o='';for(var i=1;i<=5;i++){o+=(n>=i)?pstar(true):(n>i-1)?'<span class="half">'+pstar(false)+pstar(true)+'</span>':pstar(false);}return '<span class="stars">'+o+'</span>';}
    function rtRow(x){return '<div class="rt-row"><div class="rt-hd"><span class="rt-co">'+esc(x[0])+'</span>'+pstars(x[1])+'<span class="rt-when">'+esc(x[2])+'</span></div><p>'+esc(x[3])+'</p></div>';}
    var rtAvg=RATINGS.reduce(function(a,x){return a+x[1];},0)/RATINGS.length;
    var PURSUE=[
      {t:'Observability pipeline rebuild',k:'Hiring',co:'Meridian Health',st:3,eff:'8 hours',win:'2 weeks',br:'Replace a self-hosted logging stack with a managed pipeline, keeping ingest cost flat while adding trace correlation.',goal:'Show a migration path for 4TB/day of logs that adds trace correlation without increasing the monthly bill.',det:['Clinical audit requirements mean no log line can be dropped, and retention is fixed at seven years.','Candidates work against a synthetic estate of 90 services with realistic cardinality.','Technical interview covers the cost model and the rollback plan for a partial migration.'],sk:['OpenTelemetry','ClickHouse','Go'],dur:'Submitted 6 days ago',out:'Technical interview booked for 27 Aug'},
      {t:'Data platform migration',k:'Hiring',co:'Halden Group',st:2,eff:'6 hours',win:'10 days',br:'Move a batch warehouse onto an incremental model layer and demonstrate parity on three critical reports.',goal:'Rebuild three reports as incremental models and prove row-level parity against the legacy pipeline.',det:['The legacy pipeline is 1,100 lines of stored procedures with no test coverage.','Parity must hold across a backfill of eighteen months of production data.','Submission window closes in four days; a written tradeoff note is required alongside the code.'],sk:['dbt','Snowflake','Python'],dur:'Challenge open \u2014 4 days left',out:'Passed screening, working on submission'},
      {t:'Cost-aware autoscaler',k:'Bounty',co:'Volt',st:-1,sl:'Submission under review',eff:'5 hours',win:'6 days',br:'Build an autoscaler that trades latency headroom against spot-instance pricing and prove the savings on replayed traffic.',goal:'Beat the baseline HPA on cost across a week of replayed traffic without breaching the p99 latency target.',det:['A week of production traffic and matching spot-price history are provided as fixtures.','Any breach of the 250ms p99 target disqualifies the run, regardless of savings.','Reviewers replay each submission twice, including one day with a simulated spot reclaim event.'],sk:['Kubernetes','Go','Prometheus'],dur:'Submitted 2 days ago',out:'Under review \u2014 result expected 29 Aug'},
      {t:'Feature store latency cut',k:'Hiring',co:'Northwind Labs',st:1,eff:'6 hours',win:'2 weeks',br:'Reduce online feature lookup latency for a ranking model without changing the offline training contract.',goal:'Bring p95 feature lookup under 15ms on the provided replay while keeping offline and online values identical.',det:['The current store serves 40k lookups per second from a single Redis cluster.','Offline training snapshots must match online values exactly for every feature.','The screening call covers caching strategy and consistency tradeoffs.'],sk:['Redis','Python','Feast'],dur:'Applied 3 days ago',out:'Screening call scheduled for 26 Aug'},
      {t:'Fraud signal pipeline',k:'Hiring',co:'Arcadia Pay',st:2,eff:'7 hours',win:'12 days',br:'Build a streaming pipeline that scores card transactions for fraud within the authorisation window.',goal:'Score each transaction in under 80ms end to end and beat the rules baseline on recall at a fixed false-positive rate.',det:['A month of anonymised transactions with labelled fraud cases is provided.','Scoring must finish inside the 80ms authorisation budget under peak load.','A short design note on drift monitoring is required with the code.'],sk:['Kafka','Flink','Python'],dur:'Challenge open — 6 days left',out:'Passed screening, working on submission'},
      {t:'LLM eval harness',k:'Bounty',co:'Lumen AI',st:-1,sl:'Submission under review',eff:'4 hours',win:'5 days',br:'Create a reproducible evaluation harness that compares three model versions on a fixed task suite.',goal:'Produce stable scores across repeated runs and flag regressions between model versions automatically.',det:['The task suite covers summarisation, extraction and classification.','Score variance across five repeated runs must stay under 1%.','Reviewers rerun the harness on a hidden model version.'],sk:['Python','PyTorch','Weights & Biases'],dur:'Submitted 1 day ago',out:'Under review — result expected 30 Aug'},
      {t:'Search relevance tuning',k:'Hiring',co:'Kestrel Retail',st:3,eff:'8 hours',win:'2 weeks',br:'Improve product search relevance for a catalogue of two million items using click logs.',goal:'Lift NDCG@10 on the held-out query set without increasing query latency.',det:['Three months of anonymised click and purchase logs are provided.','Query latency must stay under 120ms at p95.','The interview covers offline metrics versus online A/B results.'],sk:['Elasticsearch','Python','LightGBM'],dur:'Submitted 5 days ago',out:'Technical interview booked for 28 Aug'},
      {t:'Edge inference packager',k:'Bounty',co:'Orbit Devices',st:-1,sl:'Shortlisted',eff:'5 hours',win:'7 days',br:'Package a vision model for on-device inference on a low-power ARM board.',goal:'Hit 20 frames per second on the target board with less than 2% accuracy loss.',det:['A reference model and a validation set of 5,000 images are provided.','The packaged model must fit in 64MB of memory.','Shortlisted entries are tested on physical hardware.'],sk:['ONNX','C++','TensorRT'],dur:'Submitted 4 days ago',out:'Shortlisted — hardware test on 31 Aug'}
    ];
    function arRow(x,won,i){
      var right=won?'<span class="ar-prize">'+esc(x.p)+'</span>'
        :'<span class="ar-stage"><span class="ar-stage-t">'+esc(x.st<0?x.sl:HSTAGE[x.st])+'</span><span class="ar-pips">'+(x.st<0?'<i class="on"></i><i></i>':HSTAGE.map(function(_,j){return '<i class="'+(j<=x.st?'on':'')+'"></i>';}).join(''))+'</span></span>';
      return '<button type="button" class="ar-row" data-ar="'+(won?'w':'p')+i+'"><span class="ar-kind'+(x.k==='Bounty'?' bounty':'')+'">'+esc(x.k)+'</span><span class="ar-main"><span class="ar-t">'+esc(x.t)+'</span><span class="ar-m">'+esc(x.co)+(won?' \u00b7 '+esc(x.m):'')+'</span></span>'+right+'</button>';
    }
    cprof.innerHTML='<div class="cprof-topbar"><button class="cprof-back pool-back" type="button"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>Back to candidates</button><div class="cprof-logo"><span class="tc-mark"><svg viewBox="0 0 40 42" aria-hidden="true"><path fill="#648dc6" d="M1 1H16V8H8V34H16V41H1ZM39 1H24V8H32V34H24V41H39Z"></path></svg></span><span class="the">the</span>Colosseum</div>'+USER_HTML+'</div><div class="cprof-inner">'
      +'<div class="cprof-idrow"><div class="cprof-co"><span class="cprof-ic"><img src="https://i.pravatar.cc/150?u='+encodeURIComponent(c.name)+'" alt=""></span><span class="cprof-idtext"><h2 class="cprof-name">'+esc(c.name)+'</h2><span class="cprof-sub">'+esc(c.role)+' \u00b7 '+esc(c.city)+'</span></span></div><div class="cprof-badge"><b>'+s.overall+'<i>%</i></b><span>match</span></div></div>'
      +'<div class="cprof-contact">'
        +'<div class="cpc-facts">'
          +'<div class="cpc-item"><span class="cpc-l">Email</span><span class="cpc-v">'+esc(email)+'</span></div>'
          +'<div class="cpc-item"><span class="cpc-l">Phone</span><span class="cpc-v">'+esc(phone)+'</span></div>'
          +'<div class="cpc-item"><span class="cpc-l">Location</span><span class="cpc-v">'+esc(c.city)+' '+esc(c.tz)+'</span></div>'
        +'</div>'
        +'<div class="cpc-links">'
          +'<a class="cpc-link cpc-icon" href="#" onclick="return false" aria-label="Website" title="Website"><svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="#4a5568" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="9.2"/><path d="M2.8 12h18.4"/><path d="M12 2.8c2.6 2.5 4 5.7 4 9.2s-1.4 6.7-4 9.2c-2.6-2.5-4-5.7-4-9.2s1.4-6.7 4-9.2z"/></svg></a>'
          +'<a class="cpc-link cpc-icon" href="#" onclick="return false" aria-label="LinkedIn" title="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="4" fill="#0A66C2"/><path fill="#fff" d="M7.06 9.5H4.5V19h2.56V9.5zM5.78 8.4a1.49 1.49 0 1 0 0-2.98 1.49 1.49 0 0 0 0 2.98zM19.5 19h-2.56v-4.64c0-1.11-.02-2.53-1.54-2.53-1.55 0-1.78 1.2-1.78 2.45V19H11.1V9.5h2.46v1.3h.03c.34-.65 1.18-1.34 2.43-1.34 2.6 0 3.48 1.71 3.48 3.94V19z"/></svg></a>'
          +'<a class="cpc-link cpc-icon" href="#" onclick="return false" aria-label="GitHub" title="GitHub"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#181717" d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.3-1.8-1.3-1.8-1.1-.7 0-.7 0-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.3-.5-1.5.2-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.5.3.9 1 .9 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z"/></svg></a>'
        +'</div>'
      +'</div>'
      +'<div class="cc-wrap">'
      +'<div class="cprof-card cc">'
        +'<div class="cc-tabs">'+TABS.map(function(t,i){return '<button class="cc-tab'+(i===0?' on':'')+'" type="button" data-p="'+i+'">'+esc(t)+'</button>';}).join('')+'</div>'
          +'<div class="cc-viewport">'
          +'<div class="cc-panel on" data-p="0"><div class="ar-grid">'
            +'<div class="pnl-sec"><h4>Arena activity</h4><div class="act"><div class="act-days"><span>M</span><span></span><span>W</span><span></span><span>F</span><span></span><span>S</span></div><div class="act-main"><div class="act-months" id="ccMonths"></div><div class="act-grid" id="ccGrid"></div><div class="act-legend"><span>Less</span><i></i><i style="background:rgba(103,141,198,.3)"></i><i style="background:rgba(103,141,198,.55)"></i><i style="background:var(--blue)"></i><span>More</span></div></div></div></div>'
            +'<div class="pnl-sec"><h4>Badges</h4>'+badgeGrid(c)+'</div>'
            +'<div class="ar-stats"><div class="ar-stat"><b>45</b><span>Challenges entered</span></div><div class="ar-stat"><b>10</b><span>Wins</span></div><div class="ar-stat"><b>$9,100</b><span>Bounties earned</span></div><div class="ar-stat"><b>Top 4%</b><span>Arena rank</span></div></div>'
            +'<div class="pnl-sec"><h4>Challenges won</h4><div class="ar-list" id="ccWon"></div><div class="pgr" id="ccWonPgr"></div></div>'
            +'<div class="pnl-sec"><h4>Currently pursuing</h4><div class="ar-list" id="ccPur"></div><div class="pgr" id="ccPurPgr"></div></div>'
            +'<div class="pnl-sec"><h4>Ratings</h4><div class="rt-top"><span class="rt-avg">'+rtAvg.toFixed(1)+'<span>/5</span></span>'+pstars(Math.round(rtAvg*2)/2)+'<span class="rt-count">'+RATINGS.length+' reviews from companies worked with</span></div><div class="ar-list rt-list" id="ccRt"></div><div class="pgr" id="ccRtPgr"></div></div>'
          +'</div></div>'
        +'<div class="cc-panel" data-p="1"><div class="snap-grid">'
            +'<div class="snap-col">'
              +'<div class="pnl-sec"><h4>Compensation</h4><div class="comp-row"><div class="comp-box"><span class="comp-l">Expected</span><span class="comp-v">$'+expK+'k<em>/yr</em></span></div><div class="comp-box"><span class="comp-l">Last</span><span class="comp-v">$'+lastK+'k<em>/yr</em></span></div></div></div>'
              +'<div class="pnl-sec"><h4>Proof documents</h4><div class="proof">'+proof.map(function(p){return '<div class="proof-r"><span>'+esc(p.k)+'</span>'+(p.ok?'<span class="pf-pill ok">'+chk+'Received</span>':'<span class="pf-pill no">'+xic+'Missing</span>')+'</div>';}).join('')+'</div></div>'
              +'<div class="pnl-sec"><h4>Availability</h4><div class="mini-stats"><div class="ms"><span>Experience</span><b>'+c.years+' yrs</b></div><div class="ms"><span>Available</span><b>'+esc(c.avail)+'</b></div><div class="ms"><span>Preference</span><b>'+esc(c.pref)+'</b></div></div></div>'
            +'</div>'
            +'<div class="snap-col"><div class="pnl-sec"><h4>Most recent company</h4><div class="mrc"><div class="mrc-co">'+esc(recentCo)+'</div><div class="mrc-role">Senior '+esc(c.role)+'</div><div class="mrc-when">Since 2024 \u00b7 ~1 yr</div><ul class="mrc-bul">'+mrcBul.map(function(b){return '<li>'+esc(b)+'</li>';}).join('')+'</ul><div class="mrc-prior">Prior: '+esc(priorA)+', '+esc(priorB)+'</div></div><div class="mrc-flag"><span class="mrc-flag-ic">i</span>Dates mismatch between LinkedIn and resume</div></div></div>'
          +'</div></div>'
          +'<div class="cc-panel" data-p="3">'
            +'<div class="pnl-sec"><h4>Summary</h4><p class="asmt-sum">'+esc(c.note)+' Strong overlap on '+(s.hit.length?esc(s.hit.join(', ')):'adjacent skills')+'; the only caveats are a recent specialty ramp and a couple of round metrics worth probing at interview.</p></div>'
            +'<div class="asmt-grid"><div><div class="pnl-sec"><h4>Strengths</h4><ul class="bl bl-pos">'+strengths.map(function(t){return '<li>'+esc(t)+'</li>';}).join('')+'</ul></div><div class="pnl-sec"><h4>Concerns</h4><ul class="bl bl-warn">'+concerns.map(function(t){return '<li>'+esc(t)+'</li>';}).join('')+'</ul></div></div>'
            +'<div class="pnl-sec"><h4>Suggested interview questions</h4><ul class="bl bl-q">'+iqs.map(function(t){return '<li>'+esc(t)+'</li>';}).join('')+'</ul></div></div>'
          +'</div>'
          +'<div class="cc-panel" data-p="4">'
            +gatesScoring(s,CRIT)
          +'</div>'
          +'<div class="cc-panel cc-sig" data-p="2">'
            +'<div class="pnl-sec"><h4>External signals</h4><div class="ext-cards">'
              +'<div class="ext-card"><div class="ext-head"><svg class="ext-li" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg><span>Certifications</span></div><ul class="ext-certs"><li><span class="ec-nm">AWS Certified Solutions Architect \u2013 Professional</span><span class="ec-meta">Amazon Web Services \u00b7 2024</span></li><li><span class="ec-nm">Certified Kubernetes Administrator (CKA)</span><span class="ec-meta">The Linux Foundation \u00b7 2023</span></li><li><span class="ec-nm">HashiCorp Certified: Terraform Associate</span><span class="ec-meta">HashiCorp \u00b7 2022</span></li></ul></div>'
              +'<div class="ext-card"><div class="ext-head"><svg class="ext-gh" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.3-1.8-1.3-1.8-1.1-.7 0-.7 0-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.3-.5-1.5.2-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.5.3.9 1 .9 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z"/></svg><span>Popular repositories</span></div><ul class="ext-repos"><li><a class="er-nm" href="#" onclick="return false">go-streamlog</a><span class="er-desc">High-throughput append-only log for event streams in Go.</span><span class="er-meta"><span class="er-lang"><i></i>Go</span><span class="er-star"><i class="st">\u2605</i>1.4k</span></span></li><li><a class="er-nm" href="#" onclick="return false">raftlite</a><span class="er-desc">Minimal Raft consensus implementation with pluggable storage.</span><span class="er-meta"><span class="er-lang"><i></i>Go</span><span class="er-star"><i class="st">\u2605</i>812</span></span></li><li><a class="er-nm" href="#" onclick="return false">k8s-slo-operator</a><span class="er-desc">Kubernetes operator for SLO-driven autoscaling.</span><span class="er-meta"><span class="er-lang"><i></i>Rust</span><span class="er-star"><i class="st">\u2605</i>356</span></span></li></ul></div>'
            +'</div></div>'
            +'<div class="pnl-sec"><h4>Skills evidenced</h4>'+(c.__hit=s.hit,skEv(c))+'</div>'
            +'<div class="pnl-sec"><h4>Soft-skill assessment</h4>'+assessCard(c)+'</div>'
            +''
          +'</div>'
          +'<div class="cc-panel" data-p="5"><div class="rz">'
            +'<div class="rz-head"><h2 class="rz-name">'+esc(c.name)+'</h2><p class="rz-role">'+esc(c.role)+'</p><p class="rz-contact">'+esc(c.city)+' '+esc(c.tz)+' \u00b7 '+esc(email)+' \u00b7 '+esc(phone)+'</p></div>'
            +'<div class="rz-sec"><h4>Professional summary</h4><p>'+esc(c.role)+' with '+c.years+'+ years building and operating large-scale distributed systems. Focused on reliability, observability and developer platforms. Comfortable owning services end to end, from design through on-call.</p></div>'
            +'<div class="rz-sec"><h4>Experience</h4><div class="rz-job"><div class="rz-job-top"><span class="rz-title">Senior '+esc(c.role)+'</span><span class="rz-when">2021 \u2014 Present</span></div><span class="rz-org">'+esc(recentCo)+'</span><ul class="rz-bul"><li>Led migration of the core event pipeline to a Go-based streaming platform, cutting p99 latency 42%.</li><li>Built SLO tooling and error budgets adopted across 30+ services.</li><li>Mentored 4 engineers; ran the platform on-call rotation.</li></ul></div><div class="rz-job"><div class="rz-job-top"><span class="rz-title">'+esc(c.role)+'</span><span class="rz-when">2018 \u2014 2021</span></div><span class="rz-org">'+esc(priorA)+'</span><ul class="rz-bul"><li>Designed a Raft-backed metadata store serving 20k QPS.</li><li>Owned CI/CD and Kubernetes rollout automation.</li></ul></div></div>'
            +'<div class="rz-sec"><h4>Skills</h4><div class="sk">'+c.skills.map(function(k){return '<span>'+esc(k)+'</span>';}).join('')+'</div></div>'
            +'<div class="rz-sec"><h4>Education</h4><div class="rz-job-top"><span class="rz-title">B.S. Computer Science</span><span class="rz-when">2014 \u2014 2018</span></div><span class="rz-org">State University</span></div>'
          +'</div></div>'
          +'</div>'
      +'</div></div>';
    cprof.querySelector('.cprof-idtext').appendChild(cprof.querySelector('.cpc-links'));
    cprof.querySelector('.cprof-contact').remove();
    cprof.querySelector('.cprof-back').onclick=function(){cprof.classList.remove('on');};
    var ccTabs=cprof.querySelectorAll('.cc-tab'),ccPanels=cprof.querySelectorAll('.cc-panel'),ccCur=0;
    function ccGo(n){ccCur=(n+ccPanels.length)%ccPanels.length;ccTabs.forEach(function(t){t.classList.toggle('on',+t.getAttribute('data-p')===ccCur);});ccPanels.forEach(function(p){p.classList.toggle('on',+p.getAttribute('data-p')===ccCur);});var vp=cprof.querySelector('.cc-viewport');if(vp)vp.scrollTop=0;}
    cprof.querySelector('.cc-tabs').addEventListener('click',function(e){var t=e.target.closest('.cc-tab');if(t)ccGo(+t.getAttribute('data-p'));});
    wireUser(cprof);
    (function(){var mEl=cprof.querySelector('#ccMonths'),gEl=cprof.querySelector('#ccGrid');if(!mEl||!gEl)return;
      mEl.innerHTML=['Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug'].map(function(m){return '<span>'+m+'</span>';}).join('');
      var end=new Date();end.setHours(0,0,0,0);var start=new Date(end.getTime()-(52*7-1)*864e5);start.setDate(start.getDate()-((start.getDay()+6)%7));
      var MON=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      var cells='',hdata=[],hi=0;
      for(var w=0;w<52;w++){for(var d=0;d<7;d++){
        var rec=w/52,r=Math.random(),lvl=0;if(d!==6&&r<0.12+rec*0.55)lvl=r<0.06+rec*0.16?3:(r<0.1+rec*0.3?2:1);
        var mins=lvl?Math.round([0,25,70,155][lvl]*(0.7+Math.random()*0.6)):0;
        var applied=lvl>1?Math.round(Math.random()*3)+(lvl===3?1:0):(lvl?(Math.random()<0.35?1:0):0);
        var interviews=lvl===3?(Math.random()<0.6?1:2):(lvl===2&&Math.random()<0.4?1:0);
        var subs=lvl===3?(Math.random()<0.7?1:2):(lvl===2&&Math.random()<0.3?1:0);
        var dt=new Date(start.getTime()+(w*7+d)*864e5);
        hdata.push({d:dt.getDate()+' '+MON[dt.getMonth()]+' '+dt.getFullYear(),m:mins,a:applied,i:interviews,s:subs});
        cells+='<i data-l="'+lvl+'" data-i="'+(hi++)+'"></i>';
      }}
      gEl.innerHTML=cells;
      var tip=document.querySelector('.act-tip');if(!tip){tip=document.createElement('div');tip.className='act-tip';document.body.appendChild(tip);}
      function dur(m){return m<60?m+'m':Math.floor(m/60)+'h '+(m%60?(m%60)+'m':'');}
      function row(k,v){return '<div class="r"><span>'+k+'</span><span>'+v+'</span></div>';}
      gEl.addEventListener('mousemove',function(e){
        var cc=e.target.closest('i[data-i]');if(!cc){tip.classList.remove('on');return;}
        var v=hdata[+cc.getAttribute('data-i')];
        tip.innerHTML='<b>'+v.d+'</b>'+(v.m?row('Time on platform',dur(v.m))+row('Applied',v.a)+row('Submissions',v.s)+row('AI interviews',v.i):'<div class="r"><span>No activity</span></div>');
        tip.classList.add('on');
        var r2=cc.getBoundingClientRect(),tw=tip.offsetWidth,th=tip.offsetHeight;
        var x=Math.min(Math.max(8,r2.left+r2.width/2-tw/2),innerWidth-tw-8);
        var y=r2.top-th-9;if(y<8)y=r2.bottom+9;
        tip.style.left=x+'px';tip.style.top=y+'px';
      });
      gEl.addEventListener('mouseleave',function(){tip.classList.remove('on');});})();
    (function(){
      function page(listId,pgrId,data,row){
        var el=document.getElementById(listId),pg=document.getElementById(pgrId);if(!el||!pg)return;
        var per=5,i=0,n=Math.ceil(data.length/per);
        function draw(){el.innerHTML=data.slice(i*per,i*per+per).map(function(d,j){return row(d,i*per+j);}).join('');
          pg.innerHTML=n<2?'':'<button type="button" aria-label="Previous"'+(i===0?' disabled':'')+'><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></button><button type="button" aria-label="Next"'+(i>=n-1?' disabled':'')+'><svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg></button>';
          var b=pg.querySelectorAll('button');if(b[0])b[0].onclick=function(){if(i>0){i--;draw();}};if(b[1])b[1].onclick=function(){if(i<n-1){i++;draw();}};}
        draw();
      }
      page('ccWon','ccWonPgr',WON,function(x,i){return arRow(x,true,i);});
      page('ccPur','ccPurPgr',PURSUE,function(x,i){return arRow(x,false,i);});
      page('ccRt','ccRtPgr',RATINGS,function(x){return rtRow(x);});
    })();
    cprof.__arData={w:WON,p:PURSUE,h:HSTAGE,co:CO,r:RULES};
    if(!cprof.__arWired){cprof.__arWired=1;cprof.addEventListener('click',function(e){var r=e.target.closest('.ar-row');if(!r)return;
      var D=cprof.__arData;if(!D)return;
      var k=r.getAttribute('data-ar'),won=k.charAt(0)==='w',x=(won?D.w:D.p)[+k.slice(1)],HSTAGE=D.h;if(!x)return;
      var co=D.co[x.co]||{tag:'',ind:'\u2014',loc:'\u2014',sz:'\u2014',site:'',li:'',lg:'assets/lg-1.png'};
      var stageTxt=x.st<0?x.sl:HSTAGE[x.st||0];
      var pips=x.st<0?'<span class="ar-pips"><i class="on"></i><i></i></span>':'<span class="ar-pips">'+HSTAGE.map(function(_,j){return '<i class="'+(j<=x.st?'on':'')+'"></i>';}).join('')+'</span>';
      var back=document.createElement('div');back.className='arm-back';
      back.innerHTML='<div class="arm" role="dialog" aria-modal="true"><button class="arm-x" type="button" aria-label="Close"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></button>'
        +'<div class="arm-hd"><span class="arm-co"><span class="arm-co-ic"><img src="'+esc(co.lg||'assets/lg-1.png')+'" alt=""></span><span class="arm-co-txt"><span class="arm-co-nm">'+esc(x.co)+'</span><span class="arm-co-tag">'+esc(co.tag)+'</span></span></span><span class="ar-kind'+(x.k==='Bounty'?' bounty':'')+'" style="margin-left:auto">'+esc(x.k)+' challenge</span></div>'
        +'<h3 class="arm-t">'+esc(x.t)+'</h3><p class="arm-sub">'+esc(won?x.m:x.dur)+'</p>'
        +'<div class="arm-chips"><div class="arm-chip"><span>Effort</span><b>'+esc(x.eff)+'</b></div><div class="arm-chip"><span>Timeline</span><b>'+esc(x.win)+'</b></div>'
          +(won?'<div class="arm-chip win"><span>Reward</span><b>'+esc(x.p)+'</b></div>':'<div class="arm-chip"><span>Stage</span><b>'+esc(stageTxt)+'</b></div>')+'</div>'
        +'<div class="arm-card">'
          +'<div class="arm-sec"><h4>Overview</h4><p>'+esc(x.br)+'</p></div>'
          +'<div class="arm-sec"><h4>Goal</h4><p>'+esc(x.goal)+'</p></div>'
          +'<div class="arm-sec"><h4>Details</h4>'+x.det.map(function(p2){return '<p>'+esc(p2)+'</p>';}).join('')+'</div>'
          +'<div class="arm-sec"><h4>Tech stack</h4><div class="arm-sk">'+x.sk.map(function(s2){return '<span>'+esc(s2)+'</span>';}).join('')+'</div></div>'
          +'<div class="arm-sec"><h4>'+(won?'Outcome':'Progress')+'</h4>'+(won?'<p>'+esc(x.out)+'</p>':'<div class="arm-stage-row"><b>'+esc(stageTxt)+'</b>'+pips+'</div><p style="margin-top:8px">'+esc(x.out)+'</p>')+'</div>'
          +'<div class="arm-sec"><h4>Rules</h4><ul>'+D.r.map(function(r2){return '<li>'+esc(r2)+'</li>';}).join('')+'</ul></div>'
        +'</div>'
        +'<div class="arm-cop">'
          +'<div class="arm-cop-head"><span class="arm-cop-ic"><img src="'+esc(co.lg||'assets/lg-1.png')+'" alt=""></span><div><div class="arm-cop-nm">'+esc(x.co)+'</div><div class="arm-cop-tag">'+esc(co.tag)+'</div></div></div>'
          +'<div class="arm-cop-facts"><div class="arm-cop-fact"><span class="lbl">Location</span><span class="val">'+esc(co.loc)+'</span></div><div class="arm-cop-fact"><span class="lbl">Team size</span><span class="val">'+esc(co.sz)+'</span></div></div>'
          +'<p class="arm-cop-about">'+esc(co.ab)+'</p>'
          +'<div class="arm-cop-links"><a class="arm-cop-link" href="#" onclick="return false"><svg viewBox="0 0 24 24" fill="none" stroke="#4a5568" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>'+esc(co.site)+'</a>'
            +'<a class="arm-cop-link li" href="#" onclick="return false" aria-label="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56z"/></svg>LinkedIn</a></div>'
        +'</div></div>';
      document.body.appendChild(back);requestAnimationFrame(function(){back.classList.add('on');});
      function close(){back.classList.remove('on');document.removeEventListener('keydown',onKey);setTimeout(function(){back.remove();},220);}
      function onKey(ev){if(ev.key==='Escape')close();}
      back.addEventListener('click',function(ev){if(ev.target===back||ev.target.closest('.arm-x'))close();});
      document.addEventListener('keydown',onKey);
    });}
    cprof.scrollTop=0;cprof.classList.add('on');
  }

  var fitEl=document.createElement('div');fitEl.className='fitm';document.body.appendChild(fitEl);
  var _closeFit=closeAll;closeAll=function(){fitEl.remove();_closeFit();};
  var tickI='<svg viewBox="0 0 24 24"><polyline points="4 12.5 9.5 18 20 6.5"/></svg>';
  var crossI='<svg viewBox="0 0 24 24"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>';
  var dotI='<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/></svg>';
  function verdict(kind,txt){return '<span class="fitm-v '+kind+'">'+esc(txt)+'</span>';}
  function fitRow(left,right){return '<div class="fitm-c l">'+left+'</div><div class="fitm-c">'+right+'</div>';}
  function showFit(idx){
    var x=currentRows[idx];if(!x)return;var c=x.c,s=x.s;
    var first=c.name.split(' ')[0];
    var g={};s.gates.forEach(function(gt){g[gt.k]=gt;});
    var extra=c.skills.filter(function(k){return req.skills.indexOf(k)<0;});
    var reqTxt=(challenge.overview||'This challenge tests real working ability on a scoped, realistic problem.');
    var goalTxt=challenge.goal||'';
    var hitN=s.hit.length,reqN=req.skills.length;
    var skillV=hitN>=reqN?'ok':(hitN>=2?'part':'no');
    var trackOK=c.track===req.track;
    var availOK=req.avail.indexOf(c.avail)>=0;
    var yrsOK=c.years>=req.minYears;
    var relScore=s.rel;
    var summary='Evidences <b>'+hitN+' of '+reqN+'</b> required skills, '+(yrsOK?'clears':'sits under')+' the seniority bar at <b>'+c.years+' yrs</b>, and is available <b>'+esc(c.avail).toLowerCase()+'</b>'+(availOK?' inside your window.':', outside your stated window.');
    fitEl.innerHTML='<div class="fitm-sheet">'
      +'<button class="fitm-x" type="button" aria-label="Close"><svg viewBox="0 0 24 24"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg></button>'
      +'<div class="fitm-scroll"><div class="fitm-head">'
        +'<div class="fitm-hl"><span class="fitm-kind">'+esc(challenge.kind==='job'?'Open role':'Hiring challenge')+'</span>'
          +'<h3 class="fitm-ttl">'+esc(challenge.title||'Challenge')+'</h3>'
          +'<div class="fitm-meta">'+(challenge.effort?'<span>Effort <b>'+esc(challenge.effort)+'</b></span>':'')+(challenge.window?'<span>Window <b>'+esc(challenge.window)+'</b></span>':'')+(challenge.budget?'<span>Reward <b>'+esc(challenge.budget)+'</b></span>':'')+'</div></div>'
        +'<div class="fitm-hr"><div class="fitm-av"><img src="https://i.pravatar.cc/150?u='+encodeURIComponent(c.name)+'" alt=""></div>'
          +'<div class="fitm-who"><div class="fitm-nm">'+esc(c.name)+'</div><div class="fitm-role">'+esc(c.role)+' \u00b7 '+esc(c.city)+' \u00b7 '+esc(c.tz)+'</div>'+badges(c)+'</div>'
          +'<div class="fitm-score"><b>'+s.overall+'<i>%</i></b><span>match</span></div>'
          +'<button class="fitm-full" type="button">View full profile</button></div>'
      +'</div>'
      +'<div class="fitm-body">'
        +fitRow('<p class="fitm-l">The brief</p><p>'+esc(reqTxt)+'</p>'+(goalTxt?'<p><b>Goal.</b> '+esc(goalTxt)+'</p>':''),
                '<p class="fitm-l">Fit summary</p>'+verdict(s.overall>=85?'ok':(s.overall>=70?'part':'no'),s.overall>=85?'Strong fit':(s.overall>=70?'Workable fit':'Stretch'))+'<p>'+summary+'</p><p>'+esc(c.note)+'</p>')
        +fitRow('<p class="fitm-l">Required skills</p><span class="fitm-v ghost">spacer</span><ul class="fitm-list">'+req.skills.map(function(k){return '<li><i class="fitm-dot req">'+dotI+'</i><span>'+esc(k)+'</span></li>';}).join('')+'</ul>',
                '<p class="fitm-l">Evidenced</p>'+verdict(skillV,hitN+' of '+reqN+' evidenced')
                +'<ul class="fitm-list">'+req.skills.map(function(k){var ok=c.skills.indexOf(k)>=0;return '<li><i class="fitm-dot '+(ok?'y':'n')+'">'+(ok?tickI:crossI)+'</i><span>'+esc(k)+'</span><em>'+(ok?'as stated':'not shown')+'</em></li>';}).join('')+'</ul>'
                +(extra.length?'<div class="fitm-extra"><span class="lbl">Also brings</span>'+extra.map(function(k){return '<span>'+esc(k)+'</span>';}).join('')+'</div>':''))
        +fitRow('<p class="fitm-l">Discipline</p><p class="fitm-big">'+esc(req.track==='creative'?'Creative track':'Technical track')+'</p><p>Graded on '+esc(req.track==='creative'?'craft, art direction and written rationale':'correctness, code quality and written rationale')+'.</p>',
                '<p class="fitm-l">Current discipline</p>'+verdict(trackOK?'ok':'no',trackOK?'Same track':'Different discipline')+'<p class="fitm-big">'+esc(c.role)+'</p><p>'+esc(g['Track match']?g['Track match'].txt:'')+'.</p>')
        +fitRow('<p class="fitm-l">Seniority bar</p><p class="fitm-big">'+req.minYears+'+ yrs</p><p>Enough scope history to make tradeoff calls without hand-holding.</p>',
                '<p class="fitm-l">Experience</p>'+verdict(yrsOK?'ok':'no',yrsOK?'Clears the bar':(req.minYears-c.years)+' yrs short')+'<p class="fitm-big">'+c.years+' yrs</p><p>'+c.done+' challenges completed on theColosseum, median rank '+esc(String(c.medRank))+'.</p>')
        +fitRow('<p class="fitm-l">Timing</p><dl class="fitm-kv"><dt>Effort</dt><dd>'+esc(challenge.effort||'\u2014')+'</dd><dt>Window</dt><dd>'+esc(challenge.window||'\u2014')+'</dd><dt>Start</dt><dd>'+esc(req.avail.join(' / '))+'</dd></dl>',
                '<p class="fitm-l">Availability</p>'+verdict(availOK?'ok':'part',availOK?'Inside your window':'Outside your window')+'<dl class="fitm-kv"><dt>Can start</dt><dd>'+esc(c.avail)+'</dd><dt>Timezone</dt><dd>'+esc(c.tz)+'</dd><dt>Preference</dt><dd>'+esc(c.pref)+'</dd><dt>On-time</dt><dd>'+c.onTime+'% of submissions</dd></dl>')
        +fitRow('<p class="fitm-l">Delivery expectations</p><p>Solo work, timeboxed, submitted as a working artefact with a short written rationale. Late or unfinished submissions are scored as-is.</p>',
                '<p class="fitm-l">Track record</p>'+verdict(relScore>=80?'ok':(relScore>=65?'part':'no'),relScore+'/100 reliability')+'<dl class="fitm-kv"><dt>Win rate</dt><dd>'+c.winRate+'%</dd><dt>Median rank</dt><dd>'+esc(String(c.medRank))+'</dd><dt>Completed</dt><dd>'+c.done+' challenges</dd></dl>')
        +fitRow('<p class="fitm-l">Soft-skill signals we assess</p><span class="fitm-v ghost">spacer</span><ul class="fitm-list">'+SOFT_K.map(function(k){return '<li><i class="fitm-dot req">'+dotI+'</i><span>'+esc(k)+'</span></li>';}).join('')+'</ul>',
                '<p class="fitm-l">Assessment scores</p>'+verdict(s.soft>=82?'ok':(s.soft>=70?'part':'no'),'Average '+s.soft+'/100')+'<div class="fitm-soft">'+SOFT_K.map(function(k){return '<div class="fitm-soft-r"><b>'+esc(k)+'</b><span>'+c.soft[k]+'</span><i><em style="width:'+c.soft[k]+'%"></em></i></div>';}).join('')+'</div>')
        +fitRow('<p class="fitm-l">Verification</p><p>Identity and work history must be verified before an invite is sent.</p>',
                '<p class="fitm-l">Status</p>'+verdict(c.verified?'ok':'no',c.verified?'Verified':'Pending')+'<p>'+esc(g['Identity verified']?g['Identity verified'].txt:'')+'.</p>')
      +'</div></div></div>';
    fitEl.classList.add('on');
    function closeFit(){fitEl.classList.remove('on');document.removeEventListener('keydown',fitKey);}
    function fitKey(e){if(e.key==='Escape')closeFit();}
    document.addEventListener('keydown',fitKey);
    fitEl.querySelector('.fitm-x').onclick=closeFit;
    fitEl.querySelector('.fitm-full').onclick=function(){closeFit();showProfile(idx);};
    fitEl.onclick=function(e){if(e.target===fitEl)closeFit();};
  }

  document.addEventListener('scroll',function(e){var t=e.target;if(t&&t.classList&&t.classList.contains('cat-track'))t.classList.toggle('at-end',t.scrollLeft+t.clientWidth>=t.scrollWidth-4);},true);
  grid.addEventListener('click',function(e){
    var arw=e.target.closest('.cat-arrow');
    if(arw){var track=arw.closest('.cat').querySelector('.cat-track');track.scrollBy({left:(+arw.getAttribute('data-dir'))*340,behavior:'smooth'});return;}
    var pc=e.target.closest('.pc');if(pc)showFit(+pc.getAttribute('data-i'));
  });

  selectChallenge(selIdx);
  requestAnimationFrame(function(){el.classList.add('on');});
}

window.__openPool=open;
var JOB_C=[['af','Afghanistan'],['ar','Argentina'],['au','Australia'],['at','Austria'],['bd','Bangladesh'],['be','Belgium'],['br','Brazil'],['bg','Bulgaria'],['ca','Canada'],['cl','Chile'],['cn','China'],['co','Colombia'],['hr','Croatia'],['cz','Czechia'],['dk','Denmark'],['eg','Egypt'],['ee','Estonia'],['fi','Finland'],['fr','France'],['de','Germany'],['gh','Ghana'],['gr','Greece'],['hk','Hong Kong'],['hu','Hungary'],['is','Iceland'],['in','India'],['id','Indonesia'],['ie','Ireland'],['il','Israel'],['it','Italy'],['jp','Japan'],['jo','Jordan'],['ke','Kenya'],['lv','Latvia'],['lt','Lithuania'],['my','Malaysia'],['mx','Mexico'],['ma','Morocco'],['nl','Netherlands'],['nz','New Zealand'],['ng','Nigeria'],['no','Norway'],['pk','Pakistan'],['pe','Peru'],['ph','Philippines'],['pl','Poland'],['pt','Portugal'],['qa','Qatar'],['ro','Romania'],['sa','Saudi Arabia'],['rs','Serbia'],['sg','Singapore'],['sk','Slovakia'],['si','Slovenia'],['za','South Africa'],['kr','South Korea'],['es','Spain'],['lk','Sri Lanka'],['se','Sweden'],['ch','Switzerland'],['tw','Taiwan'],['th','Thailand'],['tr','Turkey'],['ua','Ukraine'],['ae','United Arab Emirates'],['gb','United Kingdom'],['us','United States'],['uy','Uruguay'],['vn','Vietnam']];
function jbFlag(iso){return 'https://flagcdn.com/w40/'+iso+'.png';}
var PIPE_DEF={
  bounty:['Shortlist','Challenge','Finalist'],
  hiring:['Shortlist','Challenge','AI interview','Human interview'],
  job:['Shortlist','AI interview','Human interview']
};
function askJob(done,kind){
  kind=kind||'job';var solo=kind==='bounty';
  var back=document.createElement('div');back.className='jbm-back';
  var sel={mode:'Remote',iso:'us',country:'United States',exp:'3 years'};
  var stages=(PIPE_DEF[kind]||PIPE_DEF.job).map(function(t){return {t:t,b:t,d:true};});
  var EXP=['Intern'].concat([1,2,3,4,5,6,7,8,9,10].map(function(n){return n+(n===1?' year':' years');})).concat(['10+ years']);
  var goLbl={bounty:'Publish bounty',hiring:'Publish challenge',job:'Publish job'}[kind];
  var left=solo?'':'<div class="jbm-colL"><h3 class="jbm-t">Where is this job based?</h3>'
    +'<p class="jbm-p">This appears on the job description and filters which candidates see the posting.</p>'
    +'<div class="jbm-row"><div class="jbm-f"><span class="jbm-l">Experience</span><div class="jbm-dd jbm-exp"><button type="button"><span class="jv">3 years</span><svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></button>'
      +'<div class="jbm-menu"><div class="jbm-list">'+EXP.map(function(v){return '<div class="jbm-o'+(v===sel.exp?' on':'')+'" data-v="'+v+'">'+v+'</div>';}).join('')+'</div></div></div></div>'
    +'<div class="jbm-f"><span class="jbm-l">Country</span><div class="jbm-dd jbm-cty"><button type="button"><img class="jf" src="'+jbFlag('us')+'" alt="" /><span class="jv">United States</span><svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></button>'
      +'<div class="jbm-menu"><input class="jbm-search" placeholder="Search country" /><div class="jbm-list"></div></div></div></div></div>'
    +'<div class="jbm-f"><span class="jbm-l">Work arrangement</span><div class="jbm-seg"><button type="button" class="on" data-m="Remote">Remote</button><button type="button" data-m="On-site">On-site</button></div></div>'
    +'<div class="jbm-f"><span class="jbm-l">Compensation range <span class="jbm-lh">(per year)</span></span><div class="jbm-row"><label class="jbm-money"><i>From</i><b>$</b><input class="jbm-cmin" type="text" inputmode="numeric" placeholder="24,000" value="24,000" /></label><label class="jbm-money"><i>Up to</i><b>$</b><input class="jbm-cmax" type="text" inputmode="numeric" placeholder="48,000" value="48,000" /></label></div></div></div><div class="jbm-div"></div>';
  var right='<div class="jbm-pipe"><h3 class="jbm-t">Hiring pipeline</h3>'
    +'<p class="jbm-p">Stages are pre-set for '+({bounty:'a bounty challenge',hiring:'a hiring challenge',job:'a job'}[kind])+'. Drag to reorder, or add another round of an existing step.</p>'
    +'<div class="jbm-stages"></div>'
    +'<div class="jbm-add"><button type="button" class="jbm-addbtn">+ Add step</button><div class="jbm-addmenu"><div class="jbm-addlist"></div></div></div></div>';
  back.innerHTML='<div class="jbm '+(solo?'jbm-solo':'jbm-wide')+'" role="dialog" aria-modal="true" aria-label="Publish settings">'
    +'<div class="jbm-cols">'+left+right+'</div>'
    +'<div class="jbm-foot"><button class="jbm-cancel" type="button">Cancel</button><button class="jbm-go" type="button">'+goLbl+'</button></div></div>';
  document.body.appendChild(back);
  requestAnimationFrame(function(){back.classList.add('on');});
  if(!solo){
  var dd=back.querySelector('.jbm-cty'),ddBtn=dd.querySelector('button'),list=dd.querySelector('.jbm-list'),search=dd.querySelector('.jbm-search');
  var edd=back.querySelector('.jbm-exp'),ebtn=edd.querySelector('button'),eval_=edd.querySelector('.jv');
  ebtn.onclick=function(e){e.stopPropagation();edd.classList.toggle('open');};
  edd.querySelector('.jbm-list').onclick=function(e){
    var o=e.target.closest('.jbm-o');if(!o)return;
    sel.exp=o.getAttribute('data-v');eval_.textContent=sel.exp;
    edd.querySelectorAll('.jbm-o').forEach(function(x){x.classList.toggle('on',x===o);});
    edd.classList.remove('open');
  };
  var val=dd.querySelector('.jv'),img=dd.querySelector('.jf');
  function draw(q){
    list.innerHTML='';
    JOB_C.forEach(function(c){
      if(q&&c[1].toLowerCase().indexOf(q)<0)return;
      var o=document.createElement('div');o.className='jbm-o'+(c[1]===sel.country?' on':'');
      o.innerHTML='<img class="jf" src="'+jbFlag(c[0])+'" alt="" loading="lazy" /><span>'+esc(c[1])+'</span>';
      o.onclick=function(){sel.iso=c[0];sel.country=c[1];val.textContent=c[1];img.src=jbFlag(c[0]);dd.classList.remove('open');};
      list.appendChild(o);
    });
  }
  ddBtn.onclick=function(e){e.stopPropagation();var was=dd.classList.contains('open');dd.classList.toggle('open',!was);if(!was){draw('');search.value='';search.focus();var on=list.querySelector('.jbm-o.on');if(on)list.scrollTop=Math.max(0,on.offsetTop-80);}};
  search.oninput=function(){draw(search.value.trim().toLowerCase());};
  back.addEventListener('click',function(e){if(!dd.contains(e.target))dd.classList.remove('open');if(!edd.contains(e.target))edd.classList.remove('open');});
  back.querySelector('.jbm-seg').onclick=function(e){var b=e.target.closest('button[data-m]');if(!b)return;sel.mode=b.getAttribute('data-m');back.querySelectorAll('.jbm-seg button').forEach(function(x){x.classList.toggle('on',x===b);});};
  }
  var stEl=back.querySelector('.jbm-stages'),addWrap=back.querySelector('.jbm-add'),addList=back.querySelector('.jbm-addlist'),dragI=-1;
  function drawStages(){
    stEl.innerHTML=stages.map(function(st,i){return '<div class="jbm-st'+(st.d?'':' new')+'" draggable="true" data-i="'+i+'"><span class="gr"><i></i><i></i><i></i><i></i><i></i><i></i></span><span class="n">'+(i+1)+'</span><span class="tx">'+esc(st.t)+'</span>'+(st.d?'<span class="tg">Default</span>':'<button type="button" class="rm" aria-label="Remove step">\u00d7</button>')+'</div>';}).join('');
  }
  drawStages();
  var BASE=(PIPE_DEF[kind]||PIPE_DEF.job).filter(function(b){return b!=='Shortlist';});
  function dupStage(b){
    var last=-1;stages.forEach(function(x,k){if(x.b===b)last=k;});
    var n=stages.filter(function(x){return x.b===b;}).length+1;
    stages.splice(last+1,0,{t:b+' '+n,b:b,d:false});drawStages();
  }
  back.querySelector('.jbm-addbtn').onclick=function(e){
    e.stopPropagation();
    addList.innerHTML=BASE.map(function(b){return '<div class="jbm-o" data-b="'+esc(b)+'">'+esc(b)+'</div>';}).join('');
    addWrap.classList.toggle('open');
  };
  addList.onclick=function(e){var o=e.target.closest('.jbm-o');if(!o)return;dupStage(o.getAttribute('data-b'));addWrap.classList.remove('open');};
  back.addEventListener('click',function(e){if(!addWrap.contains(e.target))addWrap.classList.remove('open');});
  stEl.addEventListener('click',function(e){var b=e.target.closest('.rm');if(!b)return;stages.splice(+b.closest('.jbm-st').getAttribute('data-i'),1);drawStages();});
  stEl.addEventListener('dragstart',function(e){var it=e.target.closest('.jbm-st');if(!it)return;dragI=+it.getAttribute('data-i');it.classList.add('drag');e.dataTransfer.effectAllowed='move';try{e.dataTransfer.setData('text/plain',String(dragI));}catch(_){}});
  stEl.addEventListener('dragover',function(e){
    if(dragI<0)return;e.preventDefault();
    var dragEl=stEl.querySelector('.jbm-st.drag');if(!dragEl)return;
    var others=[].slice.call(stEl.querySelectorAll('.jbm-st:not(.drag)'));
    var after=null;for(var k=0;k<others.length;k++){var r=others[k].getBoundingClientRect();if(e.clientY<r.top+r.height/2){after=others[k];break;}}
    if(after)stEl.insertBefore(dragEl,after);else stEl.appendChild(dragEl);
    [].slice.call(stEl.querySelectorAll('.jbm-st')).forEach(function(x,k){x.querySelector('.n').textContent=k+1;});
  });
  stEl.addEventListener('drop',function(e){e.preventDefault();});
  stEl.addEventListener('dragend',function(){
    if(dragI<0)return;
    stages=[].slice.call(stEl.querySelectorAll('.jbm-st')).map(function(x){return stages[+x.getAttribute('data-i')];});
    dragI=-1;drawStages();
  });
  function close(){back.classList.remove('on');setTimeout(function(){back.remove();},240);}
  back.querySelector('.jbm-cancel').onclick=close;
  back.querySelectorAll('.jbm-money input').forEach(function(inp){inp.addEventListener('input',function(){var d=inp.value.replace(/[^0-9]/g,'');inp.value=d?(+d).toLocaleString('en-US'):'';});});
  back.querySelector('.jbm-go').onclick=function(){if(!solo){sel.comp={from:back.querySelector('.jbm-cmin').value,to:back.querySelector('.jbm-cmax').value};}sel.stages=stages.map(function(x){return x.t;});close();done(sel);};
}
function askReward(detail,mode){
  var rw=detail.querySelector('.ch-reward'),sp=detail.querySelector('.ch-split');if(!rw||!sp)return;
  if(!document.getElementById('rwAskCss')){var s=document.createElement('style');s.id='rwAskCss';s.textContent='.rw-ask{display:flex;gap:9px;align-items:flex-start;margin:0 0 6px;padding:10px 12px;border-radius:10px;background:rgba(201,162,74,.14);font-size:12px;line-height:1.45;font-weight:600;color:#7a5f22;text-wrap:pretty}.rw-ask svg{width:15px;height:15px;flex:none;margin-top:1px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.ch-reward.rw-need{border-color:#c9a24a!important;box-shadow:0 0 0 3px rgba(201,162,74,.2)}';document.head.appendChild(s);}
  var n=sp.querySelector('.rw-ask');if(!n){n=document.createElement('div');n.className='rw-ask';sp.insertBefore(n,sp.firstChild);}
  n.innerHTML='<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 8v5"/><path d="M12 16.5h.01"/></svg><span>Add a reward before publishing this '+(mode==='bounty'?'bounty':'hiring')+' challenge.</span>';
  rw.classList.add('split-open','rw-need');
  var inp=sp.querySelector('.ch-split-in');if(inp)setTimeout(function(){inp.focus();},30);
  function chk(){var b=parseInt(((detail.querySelector('.ch-budget')||{}).textContent||'').replace(/[^0-9]/g,''),10)||0;if(b){var a=sp.querySelector('.rw-ask');if(a)a.remove();rw.classList.remove('rw-need');detail.removeEventListener('input',chk);}}
  detail.addEventListener('input',chk);
  setTimeout(function(){document.addEventListener('pointerdown',function out(e){if(rw.contains(e.target)||e.target.closest('.wt-mb'))return;rw.classList.remove('split-open','rw-need');var a=sp.querySelector('.rw-ask');if(a)a.remove();if(document.activeElement&&rw.contains(document.activeElement))document.activeElement.blur();document.removeEventListener('pointerdown',out,true);},true);},0);
}
document.addEventListener('click',function(e){
  var btn=e.target.closest('.ch-pop-btn[data-pub]')||e.target.closest('.ch-ai-pub');if(!btn)return;
  var mode=btn.getAttribute('data-pub')||'challenge';
  var detail=btn.closest('.ch-detail');if(!detail||detail.classList.contains('ch-published'))return;
  var wrap=detail.querySelector('.ch-pub-wrap');if(wrap)wrap.classList.remove('open');
  if(mode==='bounty'||mode==='hiring'){var _bt=parseInt(((detail.querySelector('.ch-budget')||{}).textContent||'').replace(/[^0-9]/g,''),10)||0;if(!_bt){askReward(detail,mode);return;}}
  var card=detail.querySelector('.ch-card');if(!card)return;
  var chip=document.querySelector('.ch-chip.ch-center');
  var ch={
    title:(chip&&chip.textContent.trim())||'Untitled challenge',
    overview:(detail.querySelector('.ch-ov')||{}).textContent||'',
    goal:(detail.querySelector('.ch-goal')||{}).textContent||'',
    effort:(detail.querySelector('.ch-effort')||{}).textContent||'5 hours',
    window:(detail.querySelector('.ch-window')||{}).textContent||'5 days',
    budget:'$'+((detail.querySelector('.ch-budget')||{}).textContent||'1,200')
  };
  if(mode==='job'||mode==='hiring')askJob(function(loc){finishPub(loc);},mode);else finishPub(null);
  function finishPub(loc){
  var msg=card.querySelector('.pub-msg');
  if(!msg){msg=document.createElement('div');msg.className='pub-msg';card.appendChild(msg);}
  var pubCopy={bounty:['Bounty challenge published',' is live as a bounty. The reward pays out to whoever solves it.'],hiring:['Hiring challenge published',' is live. The reward pays out as a signing bonus to winning hires.'],job:['Job posted',' has been converted into a job description.']};
  var pc=pubCopy[mode]||['Challenge published',' is live. Candidates have '+esc(ch.window)+' to submit once invited.'];
  if(loc){ch.jobLoc=loc;pc=['Job posted',' is live as '+(/^[aeiou]/i.test(loc.mode)?'an ':'a ')+esc(loc.mode.toLowerCase())+' role in '+esc(loc.country)+'.'];}
  msg.innerHTML='<span class="pub-tick"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></span><h3 class="pub-h">'+pc[0]+'</h3><p class="pub-p">'+esc(ch.title)+pc[1]+'</p>';
  detail.classList.add('ch-published');
  if(window.__markPublished)window.__markPublished(mode,loc);
  setTimeout(function(){
    msg.innerHTML='<h3 class="pub-h">Exploring targeted candidates<span class="pub-dots"><i></i><i></i><i></i></span></h3><p class="pub-p">Matching your brief against skills, soft-skill assessments, and availability across the pool.</p><span class="pub-scan"><i></i></span>';
  },1500);
  setTimeout(function(){
    var fade=document.createElement('div');fade.style.cssText='position:fixed;inset:0;background:#fff;z-index:290;opacity:0;transition:opacity .4s ease';
    document.body.appendChild(fade);requestAnimationFrame(function(){fade.style.opacity='1';});
    setTimeout(function(){open(ch);setTimeout(function(){fade.remove();},700);},430);
  },3500);
  }
});
if(location.hash==='#pool'){
  var goPool=function(){
    var detail=document.querySelector('.ch-detail'),chip=document.querySelector('.ch-chip.ch-center');
    var q=function(s,d){var e=detail&&detail.querySelector(s);return e&&e.textContent?e.textContent:d;};
    open({title:(chip&&chip.textContent.trim())||'Take-home challenge',overview:q('.ch-ov',''),goal:q('.ch-goal',''),effort:q('.ch-effort','5 hours'),window:q('.ch-window','5 days'),budget:'$'+q('.ch-budget','1,200')});
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(goPool,80);});
  else setTimeout(goPool,80);
}
})();
