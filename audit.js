/* Workspace audit trail. Append-only store for pipeline actions; read by Company - Activity Log.html.
   Actor comes from the signed-in member so it keeps working once per-member sign-in (RBAC) lands. */
(function(){
var KEY='tc-audit-v1';
var ORG={name:'NimbusLab',domain:'nimbuslab.io'};
var MEMBERS=[
  {id:'u1',name:'Sofia Marin',role:'Owner',email:'sofia@nimbuslab.io',ip:'84.163.21.47',loc:'Berlin, DE',dev:'Chrome · macOS'},
  {id:'u2',name:'Daniel Okafor',role:'Hiring manager',email:'daniel@nimbuslab.io',ip:'81.2.69.160',loc:'London, GB',dev:'Safari · macOS'},
  {id:'u3',name:'Lena Brandt',role:'Recruiter',email:'lena@nimbuslab.io',ip:'91.64.12.8',loc:'Berlin, DE',dev:'Edge · Windows'},
  {id:'u4',name:'Ravi Menon',role:'Interviewer',email:'ravi@nimbuslab.io',ip:'49.207.48.3',loc:'Bengaluru, IN',dev:'Chrome · Linux'},
  {id:'sys',name:'theColosseum AI',role:'Automated',email:'system',ip:'—',loc:'theColosseum',dev:'Scoring service'}
];
var ME='u1';
function session(){try{var s=sessionStorage.getItem('tc-sess');if(!s){s='ses_'+Math.random().toString(36).slice(2,10);sessionStorage.setItem('tc-sess',s);}return s;}catch(e){return 'ses_local';}}
function load(){try{return JSON.parse(localStorage.getItem(KEY))||[];}catch(e){return [];}}
function member(id){for(var i=0;i<MEMBERS.length;i++)if(MEMBERS[i].id===id)return MEMBERS[i];return MEMBERS[0];}
function log(e){
  var m=member(ME),all=load();
  var ev=Object.assign({id:'evt_'+Date.now().toString(36)+Math.random().toString(36).slice(2,6),ts:new Date().toISOString(),actor:m.id,role:m.role,email:m.email,ip:m.ip,loc:m.loc,dev:m.dev,session:session()},e);
  all.unshift(ev);try{localStorage.setItem(KEY,JSON.stringify(all.slice(0,1000)));}catch(x){}
  return ev;
}
window.tcAudit={log:log,load:load,member:member,members:MEMBERS,me:ME,org:ORG,session:session};
})();
