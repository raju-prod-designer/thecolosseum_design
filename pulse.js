(function(){
var css=`
.browse.pulse>*:not(.browse-filters):not(.browse-divider):not(.pulse-feed){display:none!important}
.browse.pulse .browse-filters>.filter,.browse.pulse .browse-acts{display:none}
.browse:not(.pulse) .pulse-feed{display:none}
.pulse-feed{width:100%;max-width:620px;margin:6px auto 0;display:flex;flex-direction:column}
.pl-head{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;margin:0 0 18px;padding:0 4px}
.pl-head h2{font-family:"P22Mackinac",serif;font-weight:500;font-size:30px;letter-spacing:-.015em;margin:0;color:var(--ink2);line-height:1.1}
.pl-head p{margin:6px 0 0;font-size:13.5px;color:var(--t-mute)}
.pl-live{display:inline-flex;align-items:center;gap:7px;font-size:12px;font-weight:600;color:var(--t-mute);white-space:nowrap}
.pl-live i{width:7px;height:7px;border-radius:50%;background:oklch(0.68 0.14 150);box-shadow:0 0 0 0 oklch(0.68 0.14 150 / .5);animation:plPing 2.2s ease-out infinite}
@keyframes plPing{0%{box-shadow:0 0 0 0 oklch(0.68 0.14 150 / .45)}80%,100%{box-shadow:0 0 0 7px oklch(0.68 0.14 150 / 0)}}
.pl-list{display:flex;flex-direction:column;gap:26px}
.pl-day{display:flex;align-items:center;gap:14px;margin:18px 4px 4px;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--t-faint,#9a9893)}
.pl-day:first-child{margin-top:0}
.pl-day::after{content:"";flex:1;height:1px;background:var(--line)}
.pl-card{position:relative;display:grid;grid-template-columns:44px minmax(0,1fr);gap:14px;background:#fff;border:1px solid var(--line);border-radius:20px;padding:20px 22px 14px 18px;transition:border-color .2s,box-shadow .25s,transform .25s;opacity:0;transform:translateY(16px)}
.pl-card.in{opacity:1;transform:none;transition:opacity .55s ease,transform .55s cubic-bezier(.2,.8,.2,1),border-color .2s,box-shadow .25s}
.pl-card:hover{border-color:#d6d4ce;box-shadow:0 10px 30px rgba(31,33,32,.06)}
.pl-av{width:44px;height:44px;border-radius:50%;overflow:hidden;border:1px solid var(--line);background:#fff;display:grid;place-items:center;flex:none}
.pl-av img{width:100%;height:100%;object-fit:cover;display:block}
.pl-av.arena{font-family:"P22Mackinac",serif;font-size:21px;line-height:1}
.pl-av.arena svg{width:20px;height:21px;display:block}
.pl-av.co{border-radius:13px}
.pl-meta{display:flex;align-items:center;gap:6px;min-width:0;font-size:14px;line-height:1.3;margin-top:2px}
.pl-name{font-weight:700;color:var(--ink2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.pl-ver{width:15px;height:15px;flex:none;fill:var(--blue)}
.pl-time{color:var(--t-mute);white-space:nowrap;margin-left:auto;padding-left:10px;font-size:13px}.pl-fol{flex:none;display:inline-flex;align-items:center;gap:6px;height:22px;padding:0 9px;margin-left:4px;border:1px solid var(--line);border-radius:999px;background:#fff;color:var(--ink2);font:inherit;font-size:12px;font-weight:600;line-height:18px;cursor:pointer;transition:background .15s,border-color .15s,color .15s}.pl-fol:hover{background:var(--field)}.pl-fol .c{color:var(--t-mute);font-weight:500;font-variant-numeric:tabular-nums;padding-left:6px;border-left:1px solid var(--line)}.pl-fol .l1,.pl-fol .l2,.pl-fol .l3{height:18px;line-height:18px}.pl-fol .l2,.pl-fol .l3{display:none}.pl-fol.on .l1{display:none}.pl-fol.on .l2{display:inline}.pl-fol.on{background:var(--field)}.pl-fol.on:hover .l2{display:none}.pl-fol.on:hover .l3{display:inline}.pl-fol.on:hover{color:#b3412e;border-color:#efc9c0;background:#fdf3f0}
.pl-sub{font-size:12.5px;color:var(--t-mute);margin-top:2px}
.pl-text{margin:10px 0 0;font-size:16px;line-height:1.62;color:var(--ink2);text-wrap:pretty}
.pl-emb{margin-top:14px}
.pl-chips{display:flex;flex-wrap:wrap;gap:7px}
.pl-chip{font-size:12px;font-weight:600;color:var(--t-body,#4a4a47);background:var(--field);border-radius:999px;padding:6px 12px;white-space:nowrap;display:inline-flex;align-items:center;gap:6px}
.pl-chip b{color:var(--ink2)}
.pl-match{display:flex;align-items:center;gap:12px;margin-top:12px;font-size:12.5px;font-weight:600;color:var(--t-mute)}
.pl-bar{flex:1;height:6px;border-radius:999px;background:var(--field);overflow:hidden}
.pl-bar i{display:block;height:100%;width:0;border-radius:inherit;background:var(--blue);transition:width 1.1s cubic-bezier(.2,.8,.2,1) .25s}
.pl-card.in .pl-bar i{width:var(--w)}
.pl-match b{color:var(--ink2);font-variant-numeric:tabular-nums}
.pl-rank{display:flex;align-items:center;gap:14px;background:var(--field);border-radius:14px;padding:14px 18px}
.pl-rank .r{font-family:"P22Mackinac",serif;font-size:28px;line-height:1;color:var(--t-mute);font-variant-numeric:tabular-nums}
.pl-rank .r.to{color:var(--ink2)}
.pl-rank svg{width:22px;height:22px;stroke:oklch(0.62 0.13 150);fill:none;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}
.pl-rank .cap{margin-left:auto;font-size:12.5px;font-weight:600;color:var(--t-mute);text-align:right;line-height:1.4}
.pl-big{display:flex;align-items:baseline;gap:10px;background:var(--field);border-radius:14px;padding:14px 18px}
.pl-big .v{font-family:"P22Mackinac",serif;font-size:32px;line-height:1;letter-spacing:-.01em;color:var(--ink2)}
.pl-big .v s{color:var(--t-mute);font-size:20px;text-decoration-thickness:1.5px;margin-right:4px}
.pl-big .l{font-size:12.5px;font-weight:600;color:var(--t-mute)}
.pl-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:8px}
.pl-stat{background:var(--field);border-radius:14px;padding:12px 14px}
.pl-stat .v{font-family:"P22Mackinac",serif;font-size:22px;line-height:1.1;color:var(--ink2)}
.pl-stat .l{font-size:11.5px;font-weight:600;color:var(--t-mute);margin-top:3px}
.pl-faces{display:flex;align-items:center;gap:12px}
.pl-faces .st{display:flex}
.pl-faces .st img{width:34px;height:34px;border-radius:50%;border:2px solid #fff;object-fit:cover;margin-left:-9px;transition:transform .2s}
.pl-faces .st img:first-child{margin-left:0}
.pl-faces .st img:hover{transform:translateY(-3px)}
.pl-faces span{font-size:12.5px;font-weight:600;color:var(--t-mute)}
.pl-clock{display:flex;align-items:center;gap:14px;background:oklch(0.97 0.02 40);border-radius:14px;padding:12px 16px}
.pl-clock .v{font-family:"P22Mackinac",serif;font-size:26px;line-height:1;color:oklch(0.5 0.14 35);font-variant-numeric:tabular-nums;letter-spacing:.01em}
.pl-clock .l{font-size:12.5px;font-weight:600;color:oklch(0.5 0.1 35)}
.pl-seats{display:grid;grid-template-columns:repeat(25,1fr);gap:3px}
.pl-seats i{height:16px;border-radius:4px;background:var(--field)}
.pl-seats i.t{background:#cfd9ea}
.pl-seats+p{margin:8px 0 0;font-size:12.5px;font-weight:600;color:var(--t-mute)}
.pl-lock{display:flex;align-items:center;gap:12px;border:1px solid var(--line);border-radius:14px;padding:12px 16px;font-size:13px;font-weight:600;color:var(--ink2)}
.pl-lock svg{width:20px;height:20px;stroke:oklch(0.6 0.12 150);fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex:none}
.pl-lock span{color:var(--t-mute);font-weight:500;margin-left:auto}
.pl-vid{position:relative;aspect-ratio:16/9;border-radius:16px;overflow:hidden;background:#1c1d1c;cursor:pointer}
.pl-code{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:center;gap:5px;padding:0 9%;font-family:ui-monospace,"SF Mono",Menlo,monospace;font-size:13px;line-height:1.5;color:#c9d2e0;background:radial-gradient(120% 90% at 20% 10%,#2a3550 0%,#161a22 60%);opacity:.8;transition:opacity .3s,transform .6s;white-space:nowrap}
.pl-code em{font-style:normal;color:#8fb0e6}
.pl-code .c{color:#6c7686}
.pl-vid:hover .pl-code{opacity:.92;transform:scale(1.02)}
.pl-vid .pb{position:absolute;left:50%;top:50%;width:62px;height:62px;margin:-31px 0 0 -31px;border-radius:50%;background:#fff;display:grid;place-items:center;transition:transform .2s;box-shadow:0 8px 24px rgba(0,0,0,.25)}
.pl-vid:hover .pb{transform:scale(1.07)}
.pl-vid .pb svg{width:22px;height:22px;fill:var(--ink2);margin-left:3px}
.pl-vid.playing .pb{transform:scale(.8);opacity:0;transition:opacity .25s,transform .25s}
.pl-vid .dur{position:absolute;right:12px;bottom:12px;font-size:11.5px;font-weight:700;color:#fff;background:rgba(0,0,0,.5);border-radius:999px;padding:4px 9px}
.pl-vid .who{position:absolute;left:14px;bottom:12px;font-size:12.5px;font-weight:600;color:#fff}
.pl-vid .prog{position:absolute;left:0;bottom:0;height:3px;width:0;background:#fff}
.pl-vid.playing .prog{width:100%;transition:width 30s linear}
.pl-quote{border-radius:14px;background:var(--field);padding:14px 16px;display:flex;flex-direction:column;gap:8px}
.pl-quote div{display:flex;align-items:center;gap:10px;font-size:13.5px;font-weight:600;color:var(--ink2)}
.pl-quote div em{font-style:normal;width:22px;height:22px;border-radius:50%;background:#fff;display:grid;place-items:center;font-size:11px;font-weight:800;color:var(--t-mute);flex:none}
.pl-acts{grid-column:1/-1;position:relative;display:flex;align-items:center;gap:4px;margin:6px -22px -14px -18px;padding:10px 14px 10px 8px;border-top:1px solid color-mix(in srgb,var(--tint,#8a8a86) 20%,var(--line));border-radius:0 0 19px 19px}
.pl-glass{position:absolute;inset:0;border-radius:inherit;overflow:hidden;pointer-events:none;background:color-mix(in srgb,var(--tint,#8a8a86) 7%,#fff)}
.pl-glass i{position:absolute;border-radius:50%;background:var(--tint,#8a8a86);filter:blur(28px)}
.pl-glass i:nth-child(1){left:-30px;top:-10px;width:220px;height:90px;opacity:.22}
.pl-glass i:nth-child(2){right:40px;top:10px;width:160px;height:70px;opacity:.12}
.pl-glass::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(255,255,255,.55),rgba(255,255,255,.25));backdrop-filter:blur(14px) saturate(1.5);-webkit-backdrop-filter:blur(14px) saturate(1.5);box-shadow:inset 0 1px 0 rgba(255,255,255,.8)}
.pl-acts>*:not(.pl-glass){position:relative;z-index:1}
.pl-act{position:relative;display:inline-flex;align-items:center;gap:7px;height:36px;padding:0 10px;border:0;background:none;border-radius:999px;font:inherit;font-size:13px;font-weight:600;color:var(--t-mute);cursor:pointer;transition:color .18s,background .18s}
.pl-act svg{width:19px;height:19px;fill:none;stroke:currentColor;stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round;transition:transform .2s}
.pl-act:hover{background:rgba(255,255,255,.7);color:var(--ink2)}
.pl-like:hover{color:oklch(0.6 0.19 15);background:oklch(0.6 0.19 15 / .08)}
.pl-like.on{color:oklch(0.6 0.19 15)}
.pl-like.on svg{fill:currentColor}
.pl-like.pop svg{animation:plPop .45s cubic-bezier(.2,1.6,.4,1)}
@keyframes plPop{0%{transform:scale(1)}30%{transform:scale(.7)}65%{transform:scale(1.28)}100%{transform:scale(1)}}
.pl-burst{position:absolute;left:19px;top:18px;width:0;height:0;pointer-events:none}
.pl-burst i{position:absolute;left:-2.5px;top:-2.5px;width:5px;height:5px;border-radius:50%;background:oklch(0.65 0.19 15);opacity:0}
.pl-like.pop .pl-burst i{animation:plDot .6s ease-out forwards}
@keyframes plDot{0%{opacity:1;transform:rotate(var(--a)) translateY(0) scale(1)}100%{opacity:0;transform:rotate(var(--a)) translateY(-17px) scale(.3)}}
.pl-like.pop .pl-burst::before{content:"";position:absolute;left:-12px;top:-12px;width:24px;height:24px;border-radius:50%;border:2px solid oklch(0.65 0.19 15);animation:plRing .5s ease-out forwards}
@keyframes plRing{0%{transform:scale(.2);opacity:1}100%{transform:scale(1.3);opacity:0}}
.pl-n{position:relative;display:inline-flex;overflow:hidden;height:18px;line-height:18px;font-variant-numeric:tabular-nums}
.pl-d{position:relative;display:inline-block;height:18px}
.pl-d b{display:block;font-weight:inherit;height:18px}
.pl-d .o{position:absolute;left:0;top:0}
.pl-n.up .pl-d.ch b{animation:plUpIn .42s cubic-bezier(.2,.9,.3,1.2) both}
.pl-n.up .pl-d.ch .o{animation:plUpOut .42s cubic-bezier(.2,.9,.3,1) both}
.pl-n.dn .pl-d.ch b{animation:plDnIn .42s cubic-bezier(.2,.9,.3,1.2) both}
.pl-n.dn .pl-d.ch .o{animation:plDnOut .42s cubic-bezier(.2,.9,.3,1) both}
@keyframes plUpIn{from{transform:translateY(110%);opacity:0}to{transform:none;opacity:1}}
@keyframes plUpOut{from{transform:none;opacity:1}to{transform:translateY(-110%);opacity:0}}
@keyframes plDnIn{from{transform:translateY(-110%);opacity:0}to{transform:none;opacity:1}}
@keyframes plDnOut{from{transform:none;opacity:1}to{transform:translateY(110%);opacity:0}}
.pl-plus{position:absolute;right:2px;top:-2px;font-size:11px;font-weight:800;pointer-events:none;color:currentColor;animation:plPlus .7s ease-out forwards}
@keyframes plPlus{0%{opacity:0;transform:translateY(6px) scale(.8)}25%{opacity:1;transform:translateY(-6px) scale(1.05)}100%{opacity:0;transform:translateY(-20px)}}
.pl-cta{margin-left:auto;display:inline-flex;align-items:center;gap:7px;height:36px;padding:0 16px;border-radius:999px;background:rgba(255,255,255,.72);border:1px solid rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(31,33,32,.06);backdrop-filter:blur(8px);font-size:13px;font-weight:700;color:var(--ink2);cursor:pointer;transition:background .18s,border-color .18s,color .18s;white-space:nowrap}
.pl-cta svg{width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round;transition:transform .2s}
.pl-cta:hover{background:var(--ink2);border-color:var(--ink2);color:#fff}
.pl-cta:hover svg{transform:translateX(3px)}
.pl-share-w{position:relative}
.pl-pop{position:absolute;left:0;bottom:calc(100% + 8px);z-index:20;background:#fff;border:1px solid var(--line);border-radius:16px;box-shadow:0 16px 40px rgba(31,33,32,.16);padding:6px;min-width:190px;opacity:0;transform:translateY(6px) scale(.97);transform-origin:bottom left;pointer-events:none;transition:opacity .18s,transform .18s}
.pl-share-w.open .pl-pop{opacity:1;transform:none;pointer-events:auto}
.pl-card:has(.pl-share-w.open){z-index:5}
.pl-so{display:flex;align-items:center;gap:11px;width:100%;padding:9px 11px;border:0;background:none;border-radius:10px;font:inherit;font-size:13px;font-weight:600;color:var(--ink2);cursor:pointer;text-align:left}
.pl-so:hover{background:var(--field)}
.pl-so .ic{width:28px;height:28px;border-radius:8px;display:grid;place-items:center;flex:none}
.pl-so .ic svg{width:15px;height:15px}
.pl-so .li{background:#0a66c2}.pl-so .li svg{fill:#fff}
.pl-so .x{background:#111}.pl-so .x svg{fill:none;stroke:#fff;stroke-width:2.2;stroke-linecap:round}
.pl-so .wa{background:#25d366}.pl-so .wa img{width:16px;height:16px;filter:brightness(0) invert(1)}
.pl-so .cp{background:var(--field)}.pl-so .cp svg{fill:none;stroke:var(--ink2);stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.pl-sk{border:1px solid var(--line);border-radius:20px;padding:20px 22px;display:grid;grid-template-columns:44px 1fr;gap:14px}
.pl-sk i{display:block;border-radius:8px;background:linear-gradient(90deg,var(--field) 0%,#ebeae6 50%,var(--field) 100%);background-size:200% 100%;animation:plSh 1.2s linear infinite}
.pl-sk .a{width:44px;height:44px;border-radius:50%}
.pl-sk .b{display:flex;flex-direction:column;gap:10px}
@keyframes plSh{from{background-position:200% 0}to{background-position:-200% 0}}
.pl-sent{height:1px}
.pl-end{display:flex;flex-direction:column;align-items:center;text-align:center;gap:8px;padding:44px 20px 60px}
.pl-end .ck{width:52px;height:52px;border-radius:50%;background:var(--field);display:grid;place-items:center;margin-bottom:6px}
.pl-end .ck svg{width:24px;height:24px;stroke:var(--blue);fill:none;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:24;stroke-dashoffset:24;transition:stroke-dashoffset .6s ease .2s}
.pl-end.in .ck svg{stroke-dashoffset:0}
.pl-end h3{font-family:"P22Mackinac",serif;font-weight:500;font-size:24px;margin:0;color:var(--ink2)}
.pl-end p{margin:0;font-size:14.5px;color:var(--t-mute)}
.pl-end button{margin-top:12px;font:inherit;font-size:14px;font-weight:700;color:#fff;background:var(--ink2);border:0;border-radius:999px;padding:12px 26px;cursor:pointer;transition:background .18s}
.pl-end button:hover{background:var(--blue)}
.pl-toast{position:fixed;left:50%;bottom:28px;z-index:500;transform:translate(-50%,20px);opacity:0;background:var(--ink2);color:#fff;font-size:13.5px;font-weight:600;padding:11px 18px;border-radius:999px;display:flex;align-items:center;gap:9px;transition:opacity .2s,transform .25s;pointer-events:none}
.pl-toast.on{opacity:1;transform:translate(-50%,0)}
.pl-toast svg{width:16px;height:16px;stroke:#fff;fill:none;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round}
@media (prefers-reduced-motion:reduce){.pl-card{opacity:1;transform:none}}
.pl-cta span{overflow:hidden;text-overflow:ellipsis}
html:has(.browse.pulse),html:has(.browse.pulse) body{overflow:hidden;height:100%}
.browse.pulse .pulse-feed{overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none;padding:0 8px 24px;margin:6px auto 0;max-width:636px;box-sizing:border-box}
.browse.pulse .pulse-feed::-webkit-scrollbar{display:none}
.browse.pulse .pl-head{position:sticky;top:0;z-index:6;background:#fff}
.pl-pri{flex:none;font-size:11px;font-weight:700;line-height:1;color:oklch(0.5 0.14 35);background:oklch(0.62 0.14 35 / .11);border-radius:999px;padding:4px 9px;white-space:nowrap}
.pl-card,.pl-act,.pl-cta,.pl-so,.bsw-opt{-webkit-tap-highlight-color:transparent}
@media (max-width:640px){
.app:has(.browse.pulse){zoom:1;padding:16px 12px 24px}
.app:has(.browse.pulse) .app-top{margin-bottom:18px}
.app:has(.browse.pulse) .app-logo{font-size:22px}
.browse.pulse .browse-filters{justify-content:center;flex-wrap:nowrap}
.browse.pulse .browse-switch{height:38px}
.browse.pulse .bsw-opt{font-size:13.5px;padding:0 18px}
.browse.pulse .browse-divider{margin:14px 0 4px}
.pulse-feed{margin-top:4px}
.pl-head{margin:4px 2px 14px}
.pl-head h2{font-size:25px}
.pl-head p{font-size:13px;margin-top:4px}
.pl-live{font-size:11.5px}
.pl-list{gap:18px}
.pl-day{margin:10px 2px 0}
.pl-card{grid-template-columns:38px minmax(0,1fr);column-gap:11px;row-gap:0;padding:16px 16px 12px;border-radius:18px}
.pl-card>div:not(.pl-acts){display:contents}
.pl-av{width:38px;height:38px;grid-row:1/3;align-self:center}
.pl-av.co{border-radius:11px}
.pl-av.arena svg{width:17px;height:18px}
.pl-meta{grid-column:2;margin-top:0;font-size:14px;align-self:end}
.pl-sub{grid-column:2;margin-top:1px;font-size:12px;align-self:start}
.pl-text{grid-column:1/-1;margin-top:12px;font-size:15.5px;line-height:1.6}
.pl-emb{grid-column:1/-1;margin-top:12px}
.pl-acts{margin:12px -16px -12px;padding:8px 10px 8px 6px;border-radius:0 0 17px 17px;gap:0}
.pl-act{height:40px;padding:0 10px}
.pl-cta{height:36px;padding:0 13px;font-size:12.5px;min-width:0;flex-shrink:1;margin-left:auto}
.pl-cta svg{flex:none}
.pl-rank{padding:12px 14px;gap:10px}
.pl-rank .r{font-size:24px}
.pl-rank .cap{font-size:11.5px}
.pl-big{padding:12px 14px;flex-wrap:wrap;row-gap:4px}
.pl-big .v{font-size:27px}
.pl-stats{grid-template-columns:repeat(2,minmax(0,1fr))}
.pl-stats .pl-stat:only-child,.pl-stats .pl-stat:nth-child(3):last-child{grid-column:1/-1}
.pl-stat .v{font-size:20px}
.pl-clock{padding:11px 14px;gap:12px;flex-wrap:wrap;row-gap:2px}
.pl-clock .v{font-size:23px}
.pl-lock{padding:11px 14px;font-size:12.5px;flex-wrap:wrap}
.pl-code{font-size:10.5px;padding:0 7%;gap:3px}
.pl-vid .pb{width:54px;height:54px;margin:-27px 0 0 -27px}
.pl-seats{gap:2px}
.pl-seats i{height:14px;border-radius:3px}
.pl-pop{min-width:200px}
.pl-so{padding:11px}
.pl-end{padding:32px 12px calc(48px + env(safe-area-inset-bottom))}
.pl-end h3{font-size:22px}
.pl-toast{bottom:calc(20px + env(safe-area-inset-bottom))}
.pl-sk{padding:16px;grid-template-columns:38px 1fr;gap:11px}
.pl-sk .a{width:38px;height:38px}
}
`;
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
var browse=document.querySelector('.browse');if(!browse)return;
var bsw=browse.querySelector('.browse-switch');
var pb=document.createElement('button');pb.className='bsw-opt';pb.type='button';pb.setAttribute('data-mode','pulse');pb.textContent='Pulse';
bsw.insertBefore(pb,bsw.firstChild);
function setPulse(on){browse.classList.toggle('pulse',on);bsw.querySelectorAll('.bsw-opt').forEach(function(x){x.classList.toggle('sel',on?x===pb:x.getAttribute('data-mode')==='challenges'&&x.classList.contains('sel'));});pb.classList.toggle('sel',on);}
bsw.addEventListener('click',function(e){var b=e.target.closest('.bsw-opt');if(!b)return;if(b===pb){e.stopImmediatePropagation();browse.classList.add('pulse');bsw.querySelectorAll('.bsw-opt').forEach(function(x){x.classList.toggle('sel',x===pb);});window.scrollTo(0,0);feed&&(feed.scrollTop=0);}else{browse.classList.remove('pulse');pb.classList.remove('sel');}},true);
if(location.hash==='#pulse'){browse.classList.add('pulse');bsw.querySelectorAll('.bsw-opt').forEach(function(x){x.classList.toggle('sel',x===pb);});}

var feed=document.createElement('div');feed.className='pulse-feed';
var hr=browse.querySelector('.browse-divider');hr.parentNode.insertBefore(feed,hr.nextSibling);

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
feed.innerHTML='<div class="pl-head"><div><h2>Pulse</h2></div><span class="pl-live"><i></i>Updated just now</span></div><div class="pl-list"></div><div class="pl-sent"></div>';
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
  if(!es[0].isIntersecting||busy||done||!browse.classList.contains('pulse'))return;
  busy=true;var s=document.createElement('div');s.className='pl-list';s.innerHTML=sk+sk;list.appendChild(s);
  setTimeout(function(){s.remove();addBatch(5);busy=false;},750);
},{root:feed,rootMargin:'0px 0px 300px 0px'});
lo.observe(sent);
function plFit(){if(!browse.classList.contains('pulse')){feed.style.height='';return;}feed.style.height='100px';var r=feed.getBoundingClientRect(),k=r.height/100||1;feed.style.height=Math.max(240,(window.innerHeight-r.top)/k)+'px';}
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
    if(h==='ch'){var cb=bsw.querySelector('[data-mode="challenges"]');cb&&cb.click();window.scrollTo(0,0);feed&&(feed.scrollTop=0);}
    else if(h==='video'){var v=b.closest('.pl-card').querySelector('.pl-vid');v&&v.classList.add('playing');}
    else if(h==='follow'){b.innerHTML='Following'+'<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>';toast('Following Nimbus Labs');}
    else location.href=h;return;}
  closePops();
});
document.addEventListener('click',function(e){if(!e.target.closest('.pl-share-w'))closePops();});
setInterval(function(){feed.querySelectorAll('[data-clock]').forEach(function(el){var s=Math.max(0,+el.getAttribute('data-clock')-1);el.setAttribute('data-clock',s);var h=Math.floor(s/3600),m=Math.floor(s%3600/60),x=s%60;el.textContent=[h,m,x].map(function(n){return (n<10?'0':'')+n;}).join(':');});},1000);
})();
