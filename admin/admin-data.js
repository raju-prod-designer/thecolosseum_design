(function(){
var sd=7;function r(n){sd=(sd*1103515245+12345)>>>0;return (sd>>>8)%n;}
var NOW=Date.now(),MIN=6e4,DAY=864e5;
var CN=['Priya Nair','Marcus Hale','Diego Ramos','Wei Zhang','Amara Okafor','Jonas Weber','Sara Lindqvist','Tomás Silva','Hana Kobayashi','Omar Haddad','Elena Petrova','Kwame Mensah','Ines Duarte','Lucas Moreau','Aisha Rahman','Noah Fischer','Marcus Vela','Leila Haddadi','Ravi Menon','Chiara Bassi','Felix Brandt','Yuki Tanaka','Grace Adeyemi','Mateo Ortiz'];
var LOC=['Berlin, DE','Lisbon, PT','London, UK','Lagos, NG','Bengaluru, IN','Toronto, CA','São Paulo, BR','Warsaw, PL','Nairobi, KE','Austin, US','Tokyo, JP','Dubai, AE'];
var ROLE=['Backend','Frontend','Full-stack','Platform','Data','Mobile','QA','Product design'];
var SRC=[['LinkedIn','GitHub'],['LinkedIn','GitHub','Portfolio'],['GitHub'],['LinkedIn','Portfolio'],['LinkedIn','GitHub','Stack Overflow']];
var TIER=['bronze','bronze','bronze','bronze','gold','gold','platinum'];
var slug=function(n){return n.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z]+/g,'.');};
var candidates=CN.map(function(n,i){
  var wins=r(4),tier=TIER[r(7)];
  return {id:'cand_'+(48211+i*373).toString(36),name:n,email:slug(n)+'@'+['gmail.com','proton.me','outlook.com','hey.com'][r(4)],loc:LOC[r(LOC.length)],role:ROLE[r(ROLE.length)],tier:tier,
    prof:45+r(56),apps:1+r(14),wins:wins,earned:wins*[250,400,600,900][r(4)],rank:tier==='platinum'?1+r(128):tier==='gold'?129+r(1200):1330+r(6400),soft:58+r(38),
    src:SRC[r(SRC.length)],joined:NOW-(20+r(380))*DAY,last:NOW-(4+r(60*24*9))*MIN,status:'active',flag:'',note:''};
});
function set(i,o){for(var k in o)candidates[i][k]=o[k];}
set(3,{status:'flagged',flag:'Hidden white text detected in CV upload. Screening score capped at 40% and sent to human review.',last:NOW-26*MIN});
set(8,{status:'flagged',flag:'Submission for "Detect duplicate payments at ingestion" shares 87% of its code with another candidate\'s repository.',last:NOW-3*60*MIN});
set(12,{status:'suspended',flag:'Duplicate account. Activity merged into cand_10ab9.',last:NOW-11*DAY});
set(17,{status:'unverified',prof:22,apps:0,wins:0,earned:0,last:NOW-2*DAY,joined:NOW-2*DAY});
set(21,{status:'unverified',prof:35,apps:0,wins:0,earned:0,last:NOW-5*60*MIN,joined:NOW-1*DAY});
set(16,{tier:'bronze',rank:13,wins:2,earned:1100,prof:92});

var CO=[['NimbusLab','nimbuslab.io','assets/lg-1.png'],['Halcyon Pay','halcyonpay.com','assets/lg-2.png'],['Ferrum Robotics','ferrum.ai','assets/lg-3.png'],['Lumen Health','lumenhealth.co','assets/lg-4.png'],['Northwind Logistics','northwind.dev','assets/lg-5.png'],['Quarry Data','quarrydata.com','assets/co-1.png'],['Tessellate','tessellate.app','assets/co-2.png'],['Brightline Media','brightline.media','assets/co-3.png'],['Orbital Freight','orbitalfreight.com','assets/co-4.png'],['Kestrel Security','kestrel.sh','assets/co-5.png'],['Moss & Pine','mossandpine.studio',''],['Vantage Grid','vantagegrid.energy',''],['Parallax Labs','parallaxlabs.dev',''],['Cobalt Health','cobalthealth.io','']];
var HQ=['Berlin, DE','London, UK','Amsterdam, NL','New York, US','Dubai, AE','Toronto, CA','Lisbon, PT','Singapore, SG'];
var companies=CO.map(function(c,i){
  var live=r(6),held=live*[500,800,1500,2000][r(4)];
  return {id:'org_'+(9120+i*211).toString(36),name:c[0],domain:c[1],logo:c[2],hq:HQ[r(HQ.length)],size:['11–50','51–200','201–500','1–10'][r(4)],seats:2+r(9),owner:['hiring','talent','ops','founders'][r(4)]+'@'+c[1],
    live:live,total:live+2+r(14),hires:r(9),held:held,due:r(3)?0:[600,1500][r(2)],released:(2+r(30))*250,rating:(36+r(14))/10,reviews:3+r(60),
    joined:NOW-(15+r(400))*DAY,last:NOW-(10+r(60*24*6))*MIN,status:'verified',flag:'',note:''};
});
function cset(i,o){for(var k in o)companies[i][k]=o[k];}
cset(0,{live:4,held:6200,due:1500,released:4950,rating:4.6,reviews:38,seats:6,status:'verified'});
cset(2,{status:'pending',flag:'Website domain registered 9 days ago. Business registration document uploaded, awaiting review.',live:0,held:0,due:0,released:0,hires:0,reviews:0,rating:0,joined:NOW-2*DAY});
cset(11,{status:'pending',flag:'Signed up with a personal email address. Domain ownership not yet confirmed.',live:0,held:0,due:0,released:0,hires:0,reviews:0,rating:0,joined:NOW-1*DAY});
cset(9,{status:'frozen',flag:'Escrow frozen while dispute D-318 is open.',due:1500});
cset(12,{status:'suspended',flag:'Chargeback on $3,000 escrow deposit. Account suspended pending payment review.',live:0});

var tickets=[
 {id:'T-2046',subj:'AI interview disconnected halfway through',kind:'candidate',who:'Amara Okafor',cat:'AI interview',pri:'urgent',status:'open',age:38,asg:'',msgs:[
  ['u','My AI interview for the Halcyon Pay hiring challenge cut out after about 20 minutes. When I rejoined it said the session had ended. The window closes tomorrow and I don\'t want to lose my place.',38]]},
 {id:'T-2045',subj:'Challenge published with the wrong reward amount',kind:'company',who:'Quarry Data',cat:'Challenge',pri:'urgent',status:'open',age:52,asg:'Ana K.',msgs:[
  ['u','We published "Stream dedup at 1M events/s" as a bounty with $300 instead of $3,000. 14 people have already applied. Can you correct the reward without restarting the challenge?',52],
  ['n','Escrow shows $3,000 funded, so the published figure is a display mismatch. Checking with payments before we touch the live posting.',31]]},
 {id:'T-2044',subj:'Reward not received after 2nd place',kind:'candidate',who:'Wei Zhang',cat:'Payments',pri:'high',status:'open',age:140,asg:'',msgs:[
  ['u','I was placed 2nd on Kestrel Security\'s bounty on the 2nd. The page still says "Awaiting release" and nobody from the company has replied.',140]]},
 {id:'T-2043',subj:'Withdrawal to bank account failed',kind:'company',who:'Lumen Health',cat:'Payments',pri:'high',status:'open',age:205,asg:'Ana K.',msgs:[
  ['u','We tried to withdraw $2,400 of unallocated wallet balance and got "Payout failed". Our IBAN hasn\'t changed.',205],
  ['a','Thanks for flagging. The bank returned the transfer with code AC04 (account closed). Can you confirm the IBAN on file ends in 4471?',160],
  ['u','That\'s our old account. We moved banks in October. I\'ve updated it in Settings now.',95]]},
 {id:'T-2042',subj:'Please delete my account and all my data',kind:'candidate',who:'Jonas Weber',cat:'Privacy',pri:'high',status:'open',age:310,asg:'',msgs:[
  ['u','I\'d like my account, submissions and interview recordings deleted under GDPR. I have no active applications.',310]]},
 {id:'T-2041',subj:'Can\'t add a second admin to our workspace',kind:'company',who:'Halcyon Pay',cat:'Account',pri:'normal',status:'open',age:420,asg:'Ravi P.',msgs:[
  ['u','The invite goes out but when our CTO accepts, he lands in the candidate sign-up.',420],
  ['a','He already had a candidate account on the same email, which takes precedence. I can move that email to your workspace if he confirms he doesn\'t need the candidate profile.',380]]},
 {id:'T-2040',subj:'Leaderboard rank dropped with no new results',kind:'candidate',who:'Hana Kobayashi',cat:'Leaderboard',pri:'normal',status:'pending',age:1500,asg:'Ravi P.',msgs:[
  ['u','I went from #212 to #340 overnight but haven\'t submitted anything new.',1500],
  ['a','Nightly recalculation applied the new difficulty weights for gold briefs, which shifted about 9% of ranks. Your points are unchanged. Let me know if you\'d like the breakdown.',1380]]},
 {id:'T-2039',subj:'Website import pulled the wrong company description',kind:'company',who:'Ferrum Robotics',cat:'Onboarding',pri:'low',status:'open',age:1720,asg:'',msgs:[
  ['u','The profile says we make industrial welding arms. We make warehouse picking robots. Where do I edit this?',1720]]},
 {id:'T-2038',subj:'GitHub connection keeps expiring',kind:'candidate',who:'Lucas Moreau',cat:'Account',pri:'low',status:'pending',age:2900,asg:'Ana K.',msgs:[
  ['u','Every few days my GitHub shows as disconnected.',2900],
  ['a','Your org enforces SSO, which revokes third-party tokens after 72 hours. Re-authorising with "Grant" on the org row will keep it connected.',2700]]},
 {id:'T-2037',subj:'Invoice needs our VAT number',kind:'company',who:'Tessellate',cat:'Billing',pri:'low',status:'pending',age:4100,asg:'Ravi P.',msgs:[
  ['u','Can you reissue the November escrow invoice with VAT ID PT 514 220 187?',4100],
  ['a','Reissued and sent to finance@tessellate.app.',3900]]},
 {id:'T-2036',subj:'Rejected at AI screen, want the reason',kind:'candidate',who:'Omar Haddad',cat:'Screening',pri:'normal',status:'resolved',age:5200,asg:'Ana K.',msgs:[
  ['u','I was cut at AI screen for the Staff Platform Engineer role. What was missing?',5200],
  ['a','The hard gate on hours overlap (min. 4h with CET) was marked fail based on your listed availability. The full reasoning is now visible under My applications.',5000]]},
 {id:'T-2035',subj:'Two-factor code not arriving',kind:'company',who:'Northwind Logistics',cat:'Account',pri:'normal',status:'resolved',age:7400,asg:'Ravi P.',msgs:[
  ['u','SMS codes aren\'t arriving for our account owner.',7400],
  ['a','Carrier filtering on +971 numbers. Switched the account to authenticator app codes.',7100]]}
];
tickets.forEach(function(t){t.msgs=t.msgs.map(function(m){return {k:m[0],text:m[1],t:NOW-m[2]*MIN};});t.created=NOW-t.age*MIN;});

var disputes=[
 {id:'D-318',type:'Payout withheld',chal:'Zero-trust policy engine for edge proxies',co:'Kestrel Security',cand:'Priya Nair',amt:1500,by:'candidate',opened:NOW-3*DAY,due:NOW+6*3600e3,status:'open',
  sum:'The submission window closed 9 days ago and Priya was ranked 1st by the screening report. Kestrel Security has not confirmed a winner or responded to two reminders. The full $1,500 reward is still held in escrow.',
  tl:[[12,'Submission window closed. 31 submissions.'],[10,'Screening report ranked Priya Nair 1st (score 94).'],[7,'Automatic reminder sent to Kestrel Security.'],[4,'Second reminder sent. No response.'],[3,'Dispute opened by candidate.'],[2,'Escrow frozen on Kestrel Security account.']],
  ev:['Screening report — final ranking.pdf','Submission repository (commit a91f3c2)','Reminder emails (2)']},
 {id:'D-317',type:'Scope changed mid-challenge',chal:'Route optimisation for same-day freight',co:'Orbital Freight',cand:'Diego Ramos',amt:800,by:'candidate',opened:NOW-2*DAY,due:NOW+30*3600e3,status:'open',
  sum:'Diego says the brief added a multi-depot requirement on day 3 of a 5-day window, which made his submitted approach non-compliant. Orbital Freight says the requirement was implied by the original dataset.',
  tl:[[6,'Challenge published. Effort cap 6h.'],[3,'Brief edited: "Solution must support multiple depots."'],[2,'Diego Ramos submitted, single-depot solution.'],[2,'Dispute opened by candidate.']],
  ev:['Brief version history (v1 → v2)','Original dataset schema','Candidate statement']},
 {id:'D-316',type:'Plagiarism claim',chal:'Detect duplicate payments at ingestion',co:'Halcyon Pay',cand:'Elena Petrova',amt:2000,by:'company',opened:NOW-4*DAY,due:NOW+20*3600e3,status:'review',
  sum:'Halcyon Pay asks to withhold the 1st-place reward, citing similarity with a public repository. Elena says the shared code is a common open-source hashing utility she credited in her README.',
  tl:[[9,'Elena Petrova placed 1st.'],[5,'Company flagged submission for similarity.'],[4,'Dispute opened by company.'],[1,'Similarity analysis attached: 31% overlap, all in vendored utility.']],
  ev:['Similarity report.pdf','README with attribution','Public repository link']},
 {id:'D-315',type:'Placement contested',chal:'Build a real-time presence service for chat',co:'NimbusLab',cand:'Marcus Hale',amt:600,by:'candidate',opened:NOW-5*DAY,due:NOW+52*3600e3,status:'open',
  sum:'NimbusLab overrode the AI ranking and moved Marcus from 1st to 2nd. Marcus asks for the reasoning behind the override. The difference between 1st and 2nd is $600.',
  tl:[[8,'AI ranking: Marcus Hale 1st, Wei Zhang 2nd.'],[6,'Override of AI ranking by Leah Brooks (Hiring manager).'],[5,'Dispute opened by candidate.']],
  ev:['Activity log export','Screening report — both candidates']},
 {id:'D-314',type:'Review removal request',chal:'Campaign analytics pipeline',co:'Brightline Media',cand:'Kwame Mensah',amt:0,by:'company',opened:NOW-6*DAY,due:NOW+70*3600e3,status:'open',
  sum:'Brightline Media asks to remove a 1-star review that says the reward was paid 5 weeks late. Payment records show release 34 days after the winner was confirmed.',
  tl:[[40,'Winner confirmed.'],[6,'Reward released.'],[6,'Kwame Mensah posted 1-star review.'],[6,'Removal requested by company.']],
  ev:['Review text','Escrow release record']},
 {id:'D-313',type:'Refund request',chal:'Stream dedup at 1M events/s',co:'Quarry Data',cand:'14 applicants',amt:3000,by:'company',opened:NOW-9*DAY,due:NOW-1*DAY,status:'resolved',
  sum:'Quarry Data asked to cancel the bounty and recover escrow after 14 applications. No submissions had been made.',
  tl:[[10,'Challenge published.'],[9,'Refund requested.'],[8,'Decision recorded: returned to company, applicants notified.']],
  ev:['Application list'],outcome:'Returned to company. No submissions existed at the time of cancellation.'}
];
disputes.forEach(function(d){d.tl=d.tl.map(function(x){return {t:NOW-x[0]*DAY,text:x[1]};});});

function series(days,base,amp,trend,seed){sd=seed;var o=[];for(var i=0;i<days;i++){var d=new Date(NOW-(days-1-i)*DAY),wk=d.getDay(),we=(wk===0||wk===6)?.72:1;o.push(Math.round((base+trend*i)*we*(1+((r(100)-50)/50)*amp)));}return o;}
var usage={cand:series(90,3100,.06,14,3),co:series(90,410,.08,1.4,5),signC:series(90,140,.25,.8,9),signK:series(90,6,.5,.03,13)};

window.ADM={candidates:candidates,companies:companies,tickets:tickets,disputes:disputes,usage:usage,
  agents:['Ana K.','Ravi P.','Sofia M.'],me:'Ana K.'};
})();
