/* Settings → Team: owner/admins invite, remove and set permissions for workspace members. */
(function(){
var host=document.getElementById('team');if(!host)return;
var KEY='tc-team-v2';
var PERMS=[
 ['ch','Challenges & jobs','Create, edit and publish'],
 ['pipe','Pipeline','Advance or hide candidates'],
 ['dec','Hiring decisions','Confirm hires and verdicts'],
 ['int','Interviews','Schedule and join interviews'],
 ['funds','Funds','Deposit and release escrow'],
 ['log','Activity log','View and export the audit trail'],
 ['team','Team','Invite, remove and edit members']
];
var REQ={int:['dec','pipe','ch'],dec:['pipe','ch'],pipe:['ch']};
function applyDeps(list,k,on){list=list.filter(function(x){return x!==k;});if(on){list.push(k);(REQ[k]||[]).forEach(function(d){if(list.indexOf(d)<0)list.push(d);});}else{Object.keys(REQ).forEach(function(d){if(REQ[d].indexOf(k)>=0)list=list.filter(function(x){return x!==d;});});}return list.sort(function(a,b){return ALL.indexOf(a)-ALL.indexOf(b);});}
var ALL=PERMS.map(function(p){return p[0];});
var ROLES=[['Admin',ALL],['Hiring manager',['ch','pipe','dec','int','log']],['Recruiter',['ch','pipe']],['Interviewer',['ch','pipe','dec','int']]];
var OWNER={id:'u1',name:'Sofia Marin',email:'sofia@nimbuslab.io',owner:1};
var SEED=[];
var team;try{team=JSON.parse(localStorage.getItem(KEY));}catch(e){}
if(!Array.isArray(team))team=SEED;
function save(){try{localStorage.setItem(KEY,JSON.stringify(team));}catch(e){}}
var ui={open:null,confirm:null,inv:false,invPerms:ROLES[2][1].slice()};
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function roleOf(p){for(var i=0;i<ROLES.length;i++){var r=ROLES[i][1];if(r.length===p.length&&r.every(function(k){return p.indexOf(k)>=0;}))return ROLES[i][0];}return 'Custom';}
function find(id){for(var i=0;i<team.length;i++)if(team[i].id===id)return team[i];}
function av(m){return m.invited?'<span class="tm-av ini">'+esc(m.email.charAt(0).toUpperCase())+'</span>':'<img class="tm-av" src="https://i.pravatar.cc/80?u='+encodeURIComponent(m.email)+'" alt="" />';}
var CHEV='<svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>';
var X='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18"></path><path d="M8 6V4h8v2"></path><path d="M6 6l1 14h10l1-14"></path></svg>';
function roleDD(cur,lbl){return '<div class="tm-dd"><button type="button" class="tm-dd-btn" data-act="dd" aria-haspopup="listbox" aria-label="'+esc(lbl)+'"><span>'+esc(cur)+'</span>'+CHEV+'</button><div class="tm-dd-menu" role="listbox">'+ROLES.map(function(x){return '<button type="button" class="tm-dd-opt'+(x[0]===cur?' sel':'')+'" data-act="pick" data-v="'+x[0]+'" role="option"><i></i><span>'+x[0]+'</span><em>'+x[1].length+'/'+ALL.length+'</em></button>';}).join('')+(cur==='Custom'?'<div class="tm-dd-note">Custom permissions. Pick a role to reset.</div>':'')+'</div></div>';}
function invPermsHTML(){return PERMS.map(function(p){return '<label class="tm-pm"><span><b>'+p[1]+'</b><em>'+p[2]+'</em></span><input type="checkbox" data-ip="'+p[0]+'"'+(ui.invPerms.indexOf(p[0])>=0?' checked':'')+' /><i></i></label>';}).join('');}
function syncInv(){var f=host.querySelector('.tm-inv');if(!f)return;var dd=f.querySelector('.tm-dd');dd.outerHTML=roleDD(roleOf(ui.invPerms),'Role');f.querySelector('.tm-inv-n').textContent=ui.invPerms.length+'/'+ALL.length;f.querySelectorAll('[data-ip]').forEach(function(c){c.checked=ui.invPerms.indexOf(c.getAttribute('data-ip'))>=0;});}
function roleSel(m){return roleDD(roleOf(m.perms),'Role for '+m.name);}
function row(m){
 var op=ui.open===m.id,cf=ui.confirm===m.id,n=m.owner?ALL.length:m.perms.length;
 var h='<div class="tm-row'+(op?' open':'')+'" data-id="'+m.id+'">'
  +'<div class="tm-m">'+av(m)+'<div><b>'+esc(m.name)+(m.owner?'<span class="tm-tag">Owner</span>':'')+(m.invited?'<span class="tm-tag inv">Invited</span>':'')+'</b><em>'+esc(m.email)+(m.invited?' · <button type="button" class="tm-lnk" data-act="resend">'+(m.resent?'Sent':'Resend')+'</button>':'')+'</em></div></div>'
  +(m.owner?'<span class="tm-fixed">Super admin</span>':roleSel(m))
  +'<button type="button" class="tm-pb" data-act="perms" aria-expanded="'+op+'"><span>'+n+'/'+ALL.length+'</span>Permissions'+CHEV+'</button>'
  +(m.owner?'<span></span>':'<button type="button" class="tm-rm" data-act="rm" aria-label="Remove '+esc(m.name)+'">'+X+'</button>');
 if(op)h+='<div class="tm-perms">'+PERMS.map(function(p){var on=m.owner||m.perms.indexOf(p[0])>=0;return '<label class="tm-pm'+(m.owner?' lock':'')+'"><span><b>'+p[1]+'</b><em>'+p[2]+'</em></span><input type="checkbox" data-p="'+p[0]+'"'+(on?' checked':'')+(m.owner?' disabled':'')+' /><i></i></label>';}).join('')+(m.owner?'<p class="tm-note">The owner always has every permission. Transfer ownership by contacting support.</p>':'')+'</div>';
 if(cf)h+='<div class="tm-conf"><span>Remove <b>'+esc(m.name)+'</b>? '+(m.invited?'The invite link stops working.':'They lose access right away. Their past actions stay in the activity log.')+'</span><div><button type="button" class="st-btn ghost" data-act="cancel">Cancel</button><button type="button" class="st-btn danger" data-act="yes">Remove</button></div></div>';
 return h+'</div>';
}
function render(){
 var act=team.filter(function(m){return !m.invited;}).length+1,inv=team.length+1-act;
 host.innerHTML='<div class="tm-hd"><div><h2 class="st-h">Team</h2><p class="st-p">People at NimbusLab who can use theColosseum. Only the owner and members with the Team permission can change this list.</p></div>'
  +(ui.inv?'':'<button type="button" class="st-btn" data-act="inv"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"></path></svg>Invite member</button>')+'</div>'
  +(ui.inv?'<form class="tm-inv" novalidate><div class="st-fld"><label class="st-lbl" for="tmEm">Work email</label><input class="st-in" id="tmEm" type="email" placeholder="name@nimbuslab.io" autocomplete="off" /></div><div class="st-fld"><span class="st-lbl">Role</span>'+roleDD(roleOf(ui.invPerms),'Role')+'</div><div class="tm-inv-ph"><span class="st-lbl">Permissions</span><span class="tm-inv-n">'+ui.invPerms.length+'/'+ALL.length+'</span></div><div class="tm-perms">'+invPermsHTML()+'</div><p class="st-msg" id="tmMsg"></p><div class="st-acts"><button class="st-btn" type="submit">Send invite</button><button class="st-btn ghost" type="button" data-act="invx">Cancel</button></div></form>':'')
  +'<div class="tm-cnt"><b>'+act+'</b> active'+(inv?' · <b>'+inv+'</b> pending':'')+'</div>'
  +'<div class="tm-list">'+row(OWNER)+team.map(row).join('')+'</div>';
 if(ui.inv){var i=host.querySelector('#tmEm');i&&i.focus();}
}
host.addEventListener('click',function(e){
 var b=e.target.closest('[data-act]');if(!b)return;var a=b.getAttribute('data-act'),r=b.closest('.tm-row'),id=r&&r.getAttribute('data-id'),m=id&&(id==='u1'?OWNER:find(id));
 if(a==='dd'){var d=b.parentNode,was=d.classList.contains('open');closeDD();if(!was){d.classList.add('open');if(r)r.classList.add('dd-on');}return;}
 if(a==='pick'){var v=b.getAttribute('data-v');closeDD();if(!r){ROLES.forEach(function(x){if(x[0]===v)ui.invPerms=x[1].slice();});syncInv();return;}ROLES.forEach(function(x){if(x[0]===v)m.perms=x[1].slice();});save();render();return;}
 if(a==='inv'){ui.inv=true;ui.confirm=null;ui.invPerms=ROLES[2][1].slice();}
 else if(a==='invx'){ui.inv=false;}
 else if(a==='perms'){ui.open=ui.open===id?null:id;ui.confirm=null;}
 else if(a==='rm'){ui.confirm=ui.confirm===id?null:id;ui.open=null;}
 else if(a==='cancel'){ui.confirm=null;}
 else if(a==='yes'){team=team.filter(function(x){return x.id!==id;});ui.confirm=null;save();}
 else if(a==='resend'){m.resent=1;save();}
 render();
});
host.addEventListener('change',function(e){
 if(e.target.hasAttribute('data-ip')){var q=e.target.getAttribute('data-ip');ui.invPerms=applyDeps(ui.invPerms,q,e.target.checked);syncInv();return;}
 var r=e.target.closest('.tm-row');if(!r)return;var m=find(r.getAttribute('data-id'));if(!m)return;
 if(e.target.hasAttribute('data-p')){m.perms=applyDeps(m.perms,e.target.getAttribute('data-p'),e.target.checked);}
 save();render();
});
host.addEventListener('submit',function(e){
 e.preventDefault();var em=host.querySelector('#tmEm'),v=em.value.trim().toLowerCase(),msg=host.querySelector('#tmMsg');
 function bad(t){em.classList.add('bad');msg.textContent=t;msg.className='st-msg err';}
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))return bad('Enter a valid email address.');
 if(v===OWNER.email||team.some(function(x){return x.email===v;}))return bad('This person is already on the team.');
 if(!ui.invPerms.length){msg.textContent='Give at least one permission.';msg.className='st-msg err';return;}var p=ui.invPerms.slice();
 var nm=v.split('@')[0].replace(/[._-]+/g,' ').replace(/\b\w/g,function(c){return c.toUpperCase();});
 team.push({id:'i'+Date.now().toString(36),name:nm,email:v,perms:p,invited:1});ui.inv=false;save();render();
});
host.addEventListener('input',function(e){if(e.target.id==='tmEm'){e.target.classList.remove('bad');var m=host.querySelector('#tmMsg');if(m){m.textContent='';m.className='st-msg';}}});
function closeDD(){host.querySelectorAll('.tm-dd.open').forEach(function(d){d.classList.remove('open');});host.querySelectorAll('.tm-row.dd-on').forEach(function(r){r.classList.remove('dd-on');});}
document.addEventListener('click',function(e){if(!e.target.closest('.tm-dd'))closeDD();});
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeDD();});
render();
})();
