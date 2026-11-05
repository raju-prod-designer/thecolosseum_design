(function(){
  var host=document.getElementById('pipe');if(!host)return;
  function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
  var user=document.querySelector('.app-user');
  if(user){document.querySelector('.app-user-btn').addEventListener('click',function(e){e.stopPropagation();user.classList.toggle('open');});
  document.addEventListener('click',function(){user.classList.remove('open');});
  var gp=document.querySelector('[data-go="profile"]');if(gp)gp.addEventListener('click',function(){location.href='Candidate - Profile.html';});}

  var STAGES=['Shortlist','Shortlist','Challenge','AI interview','Human interview'];
  var SUB=['applications','screens completed','challenges entered','interviews scored','outcomes'];
  var PEND=[0,0,3,1,1];
  var FLAGS=['','','2 Submissions due','2 Ready to start','1 Offer to review'];

  var APPS=[
    {t:'Platform reliability sprint',co:'Aurora Systems',lg:'assets/lg-2.png',k:'Hiring',st:4,applied:'12 Jun',sk:['Kubernetes','Prometheus','Terraform'],sc:[92,95,93,91,94],
     status:{txt:'Offer stage \u00b7 rank 2 of 8',cls:'ok'},joined:{day:'28 Aug 2026',len:'48 min'},hv:{day:'4 Sep 2026',time:'14:00',len:'1 hr 10 min',with:'Panel of three \u00b7 Aurora platform team',where:'Google Meet',done:true},rw:[['Finalist reward','$1,000','Paid 9 Sep'],['Offer','$168k base + equity','Open until 30 Sep']],gap:'no formal SRE title on your record',
     strength:'the SLO set you proposed per tier-one service \u2014 defensible and tied to real incident history',
     weak:'the rollback path for the alert migration, which you left implicit',
     why:'You rank above the next finalist on challenge performance and reliability depth, and slightly below on years in a lead role.',next:'The company has 5 days to confirm the offer terms. You can ask for the compensation band before you respond.'},
    {t:'Streaming ingest dedupe',co:'Northwind Data',lg:'assets/lg-1.png',k:'Bounty',st:4,applied:'2 Mar',sk:['Kafka','Flink','Go'],sc:[90,93,97,90,96],
     status:{txt:'Won \u00b7 1st of 84 entries',cls:'ok'},pay:'Bounty paid \u00b7 $2,400 \u00b7 9 Sep',gap:'stream processing depth read stronger than your batch work',
     strength:'the replay-safe dedupe window, which held through a two-hour duplicate burst',
     weak:'the latency breakdown, which measured p99 but not p999',
     why:'You placed first on correctness and paid the smallest latency cost of any entry that passed the replay test.',next:'The bounty has been paid and your entry was merged. Northwind Data can now invite you directly to hiring challenges.'},
    {t:'Observability pipeline rebuild',co:'Meridian Health',lg:'assets/lg-4.png',k:'Hiring',st:3,applied:'8 Aug',sk:['OpenTelemetry','ClickHouse','Go'],sc:[88,90,89,87,null],
     status:{txt:'AI interview ready',cls:'warn'},gap:'no regulated-environment experience on record',
     strength:'the cost model \u2014 you held ingest spend flat while adding trace correlation',
     weak:'the retention story for seven-year clinical audit data, handled but not evidenced',
     why:'',next:'Your AI interview is ready to start whenever you are. Expect it to open to open on the rollback plan for a partial migration.'},
    {t:'Payments ledger hardening',co:'Volt',lg:'assets/lg-2.png',k:'Hiring',st:4,applied:'22 Jul',sk:['Go','Postgres','Kafka'],sc:[90,92,91,89,null],
     status:{txt:'Human interview booked \u00b7 29 Sep',cls:'warn'},joined:{day:'9 Sep 2026',len:'52 min'},hv:{day:'29 Sep 2026',time:'16:00',len:'about 60 min',with:'Hiring manager + staff engineer',where:'Zoom, link sent by Volt'},hlen:'58 min',rw:[['Challenge reward','$600','Paid 18 Sep']],gap:'no card-network certification on record',
     strength:'the idempotency keys on every ledger write, which survived the duplicate-replay test',
     weak:'the reconciliation job, which ran nightly rather than continuously',
     why:'',next:'Volt runs the final round itself. Expect a walkthrough of your ledger design.'},
    {t:'Search relevance tuning',co:'Lumen',lg:'assets/lg-3.png',k:'Hiring',st:4,applied:'1 Jul',sk:['Python','Elasticsearch','SQL'],sc:[87,90,92,90,null],
     status:{txt:'Hired \u00b7 starts 13 Oct',cls:'ok'},joined:{day:'2 Sep 2026',len:'41 min'},hv:{day:'10 Sep 2026',time:'11:00',len:'55 min',with:'Head of search',where:'On site, Lumen London',done:true},rw:[['Finalist reward','$800','Paid 14 Sep'],['Signing bonus','$5,000','Paid on start date']],gap:'learning-to-rank work is evidenced once',
     strength:'the offline eval set, built from real query logs with graded labels',
     weak:'the latency cost of the re-ranker, measured at p50 only',
     why:'',next:'Your start date is confirmed. Lumen will send onboarding details directly.'},
    {t:'Incident tooling revamp',co:'Kestrel',lg:'assets/lg-5.png',k:'Hiring',st:3,applied:'14 Aug',sk:['Go','Slack API','Postgres'],sc:[85,88,90,86,null],
     status:{txt:'Awaiting panel decision',cls:''},joined:{day:'12 Sep 2026',len:'1 hr 4 min'},gap:'no on-call tooling ownership listed',
     strength:'the incident timeline builder, which reconstructed events from three sources',
     weak:'the paging escalation rules, which were hard-coded',
     why:'',next:'Kestrel reviews AI interview results weekly. A decision is expected by 26 Sep.'},
    {t:'Latency budget audit',co:'Kestrel',lg:'assets/lg-5.png',k:'Bounty',st:2,applied:'6 Jan',sk:['OpenTelemetry','Postgres','Node'],sc:[85,88,94,null,null],
     status:{txt:'Closed \u00b7 not advanced',cls:'closed'},gap:'edge networking exposure was inferred, not evidenced',
     strength:'the per-hop budget, including the two deliberately mislabelled spans you caught',
     weak:'the justification for which fixes you dropped, argued briefly',
     why:'',next:'Kestrel closed the round. Your audit is now their internal template, so a direct invite to the next round is likely.'},
    {t:'Data platform migration',co:'Halden Group',lg:'assets/lg-1.png',k:'Hiring',st:2,applied:'18 Aug',sk:['dbt','Snowflake','Python'],sc:[83,86,null,null,null],
     status:{txt:'Submission due in 4 days',cls:'warn'},gap:'warehouse migration work is older than three years',
     strength:'',weak:'',why:'',next:'Four days left on the window. A written tradeoff note is required alongside the code.'},
    {t:'Cost-aware autoscaler',co:'Volt',lg:'assets/lg-2.png',k:'Bounty',st:2,applied:'21 Aug',sk:['Kubernetes','Go','Prometheus'],sc:[87,89,null,null,null],
     status:{txt:'Submitted \u00b7 under review',cls:''},gap:'spot-pricing work is adjacent rather than direct',
     strength:'',weak:'',why:'',next:'Reviewers replay every submission twice, including a simulated spot reclaim. Result expected 29 Aug.'},
    {t:'Terraform module refactor',co:'Lumen',lg:'assets/lg-3.png',k:'Bounty',st:2,applied:'14 Sep 2025',sk:['Terraform','AWS','GitHub Actions'],sc:[81,84,86,null,null],
     status:{txt:'Runner-up \u00b7 2nd of 63',cls:'closed'},gap:'multi-cloud scope is narrower than the brief asked for',
     strength:'the module set, which reproduced all eleven environments from variables alone',
     weak:'the drift-detection job, which timed out on the largest environment',
     why:'',next:'Partial bounty awarded. Fixing the drift job and resubmitting as an open-source module would close the gap.'},
    {t:'Multi-region failover drill',co:'Kestrel',lg:'assets/lg-5.png',k:'Hiring',st:1,applied:'3 Aug',sk:['Kubernetes','Go','Networking'],sc:[76,71,null,null,null],
     status:{txt:'Closed \u00b7 missed a hard bar',cls:'closed'},gap:'5+ years in a lead role',
     strength:'',weak:'',why:'',next:'The bar you missed was tenure, not skill. Two lead-scoped wins in the arena would clear it on the next posting.'},
    {t:'Query cost profiler',co:'Northwind Data',lg:'assets/lg-1.png',k:'Hiring',st:1,applied:'20 Aug',sk:['Postgres','Go','SQL'],sc:[84,87,null,null,null],
     status:{txt:'Passed \u00b7 challenge unlocking',cls:'ok'},gap:'query-plan tuning is evidenced once, not repeatedly',
     strength:'',weak:'',why:'',next:'The challenge unlocks within 24 hours. It carries an 8-hour cap and a 10-day window.'},
    {t:'Warehouse test harness',co:'Halden Group',lg:'assets/lg-1.png',k:'Hiring',st:1,applied:'29 Jul',sk:['dbt','Python','Airflow'],sc:[74,69,null,null,null],
     status:{txt:'Closed \u00b7 missed a hard bar',cls:'closed'},gap:'Snowflake production experience',
     strength:'',weak:'',why:'',next:'One missing must-have closed this. The Halden Group data migration you are already in covers the same stack.'},
    {t:'Edge cache invalidation',co:'Volt',lg:'assets/lg-2.png',k:'Bounty',st:0,applied:'26 Aug',sk:['Go','Redis','CDN'],sc:[80,null,null,null,null],
     status:{txt:'AI screening in progress',cls:''},gap:'CDN work is described but not linked to a repo',
     strength:'',weak:'',why:'',next:'Screening usually completes within a day of applying. Nothing is waiting on you.'},
    {t:'Clinical audit log service',co:'Meridian Health',lg:'assets/lg-4.png',k:'Hiring',st:0,applied:'25 Aug',sk:['Go','Postgres','Kafka'],sc:[86,null,null,null,null],
     status:{txt:'AI screening in progress',cls:''},gap:'compliance exposure is not on your profile',
     strength:'',weak:'',why:'',next:'Adding the audit-logging project to your profile would strengthen this application before the screen runs.'},
    {t:'Staff Platform Engineer',co:'Meridian Health',lg:'assets/lg-4.png',k:'Job',st:4,applied:'18 Jul',sk:['Kubernetes','Go','OpenTelemetry'],sc:[91,94,null,90,93],
     status:{txt:'Offer extended \u00b7 $182k',cls:'ok'},iv:'Panel completed \u00b7 22 Aug',joined:{day:'11 Aug 2026',len:'46 min'},hv:{day:'22 Aug 2026',time:'15:00',len:'1 hr 20 min',with:'Panel of three \u00b7 platform leads',where:'Google Meet',done:true},rw:[['Offer','$182k base + equity','Open until 29 Sep'],['Relocation support','$8,000','On acceptance']],gap:'no regulated-environment experience on record',
     strength:'the rollout plan for the shared observability stack, staged by blast radius',
     weak:'the cost forecast for trace retention, which assumed flat traffic',
     why:'The panel rated you top on ownership and system design, and your AI interview carried the technical depth score into the final blend.',next:'The offer is open for 7 days. You can accept, decline or ask the hiring manager a question from this page.'},
    {t:'Senior Backend Engineer',co:'Northwind Data',lg:'assets/lg-1.png',k:'Job',st:4,applied:'30 Jul',sk:['Go','Kafka','Postgres'],sc:[89,91,90,88,null],
     status:{txt:'Human interview booked \u00b7 2 Oct',cls:'warn'},iv:'Panel of two \u00b7 45 min',joined:{day:'15 Sep 2026',len:'39 min'},hv:{day:'2 Oct 2026',time:'10:00',len:'about 45 min',with:'Panel of two \u00b7 platform lead + EM',where:'Zoom, link sent by Northwind Data'},hlen:'47 min',gap:'no formal on-call ownership listed',
     strength:'the delivery-guarantee design, which held through the forced-restart tests',
     weak:'the migration plan for existing in-flight jobs, sketched rather than specified',
     why:'',next:'Panel is booked for 2 Oct with the platform lead. Expect questions on scaling the job layer tenfold.'},
    {t:'Site Reliability Engineer',co:'Kestrel',lg:'assets/lg-5.png',k:'Job',st:4,applied:'5 Jul',sk:['Kubernetes','Prometheus','Go'],sc:[88,90,null,89,null],
     status:{txt:'Hired \u00b7 starts 20 Oct',cls:'ok'},iv:'Panel completed \u00b7 3 Sep',joined:{day:'25 Aug 2026',len:'51 min'},hv:{day:'3 Sep 2026',time:'13:30',len:'1 hr',with:'Head of infrastructure',where:'On site, Kestrel Berlin',done:true},rw:[['Signing bonus','$10,000','Paid on start date']],gap:'no public incident write-ups on record',
     strength:'the alert-fatigue audit, which cut pages by a third without missing an incident',
     weak:'the capacity forecast, which assumed linear growth',
     why:'',next:'Your start date is confirmed. Kestrel will send onboarding details directly.'},
    {t:'Backend Engineer, Payments',co:'Volt',lg:'assets/lg-2.png',k:'Job',st:3,applied:'28 Aug',sk:['Go','Postgres','gRPC'],sc:[87,89,null,86,null],
     status:{txt:'AI interview ready',cls:'warn'},gap:'no PCI scope listed on your profile',
     strength:'',weak:'',why:'',next:'Your AI interview is ready to start whenever you are. Expect a system design question on ledger consistency.'},
    {t:'Senior SRE',co:'Lumen',lg:'assets/lg-3.png',k:'Job',st:3,applied:'20 Aug',sk:['Terraform','AWS','Prometheus'],sc:[84,86,null,85,null],
     status:{txt:'Awaiting panel decision',cls:''},joined:{day:'14 Sep 2026',len:'57 min'},gap:'multi-cloud depth is evidenced once',
     strength:'the runbook automation, which removed four manual steps from failover',
     weak:'the cost trade-off on cross-region replicas, argued briefly',
     why:'',next:'Lumen reviews AI interview results weekly. A decision is expected by 28 Sep.'},
    {t:'Platform Engineer',co:'Aurora Systems',lg:'assets/lg-2.png',k:'Job',st:2,applied:'19 Aug',sk:['Kubernetes','Terraform','Go'],sc:[86,88,null,null,null],
     status:{txt:'Submission due in 6 days',cls:'warn'},gap:'multi-cluster work is evidenced once',
     strength:'',weak:'',why:'',next:'Six days left on the take-home. The brief asks for a rollback story alongside the deploy path.'},
    {t:'Infrastructure Engineer',co:'Lumen',lg:'assets/lg-3.png',k:'Job',st:1,applied:'11 Aug',sk:['Terraform','AWS','Kubernetes'],sc:[78,72,null,null,null],
     status:{txt:'Closed \u00b7 missed a hard bar',cls:'closed'},gap:'GCP production experience',
     strength:'',weak:'',why:'',next:'Lumen runs across three clouds and required GCP depth. Your AWS and Kubernetes depth cleared everything else.'},
    {t:'Data Engineer',co:'Halden Group',lg:'assets/lg-1.png',k:'Job',st:0,applied:'24 Aug',sk:['dbt','Snowflake','Python'],sc:[82,null,null,null,null],
     status:{txt:'AI screening in progress',cls:''},gap:'warehouse modelling is older than three years',
     strength:'',weak:'',why:'',next:'Screening completes within a day. Your open Halden Group challenge is counted as evidence here.'}
  ];

  var counts=[];
  function isB(){return ui.filter==='Bounty';}
  function sName(i,a){return i===4&&(a?a.k==='Bounty':isB())?'Awards':STAGES[i];}
  function hits(a,k){return a.st>=k&&!(a.k==='Bounty'&&(k===1||k===3));}
  function inFilter(a){return ui.filter==='all'||a.k===ui.filter;}
  function visStages(){
    var base=ui.filter==='Bounty'?[0,2,4]:ui.filter==='Job'?[0,3,4]:[0,2,3,4];
    var live=base.filter(function(i){return counts[i]>0;});
    return live.length?live:[base[0]];
  }
  function plural(n,s,p){return n+' '+(n===1?s:p);}
  function flagsFor(){
    var f=['','','','',''];
    var due=APPS.filter(function(a){return inFilter(a)&&a.st===2&&a.status.cls==='warn';}).length;
    var ivs=APPS.filter(function(a){return inFilter(a)&&ivPending(a,3);}).length;
    var off=APPS.filter(function(a){return inFilter(a)&&a.st===4&&a.status.cls==='ok';}).length;
    if(due&&counts[2])f[2]=plural(due,'Submission','Submissions')+' due';
    if(ivs&&counts[3])f[3]=ivs+' Ready to start';
    var hvs=APPS.filter(function(a){return inFilter(a)&&hvPending(a,4);}).length;
    if(!isB()&&hvs&&counts[4])f[4]=plural(hvs,'Interview','Interviews')+' booked';else if(off&&counts[4])f[4]=isB()?plural(off,'Bounty','Bounties')+' paid':plural(off,'Outcome','Outcomes')+' to review';
    return f;
  }
  function recount(){counts=STAGES.map(function(_,k){return APPS.filter(function(a){return inFilter(a)&&hits(a,k);}).length;});}
  function notesFor(c){
    var cut=Math.max(0,c[1]-c[2]);
    var pend=APPS.filter(function(a){return inFilter(a)&&a.st===2;}).length;
    var ivs=APPS.filter(function(a){return inFilter(a)&&ivPending(a,3);}).length;
    return [
    (cut?'<b>'+plural(cut,'application was','applications were')+' cut here.</b> ':'')+'Every application is screened automatically against the brief, and each cut names the exact bar you missed so you can fix it before the next one.','',
    (pend?'<b>'+plural(pend,'application needs','applications need')+' work from you.</b> ':'')+'Submission windows close inside a week, or the work sits under review.',
    (ivs?'<b>'+plural(ivs,'interview is','interviews are')+' booked.</b> ':'')+'Scores and transcripts are yours to read in full.',
    isB()?'Bounties are paid out once the company has reviewed and approved your submission. Placement is decided by your challenge score.':'Outcomes here trace back to the stages above \u2014 offers under discussion and bounty wins alike.'
    ];
  }
  var CTA=['View insights',null,'View insights','View insights','View insights'];
  var STATS=[
    [['16','applications','Every application you have sent, live or closed. Those still being screened will move the numbers here.'],['1.4 days','median time to first response','Screening decisions come back fast, so a weak profile line costs you quickly.'],['69%','passed the screen','Cuts here come from a missing must-have, not from a low score.'],['8.4/10','your median screen score','Your scores cluster tightly, which reads as a consistent profile rather than a lucky match.'],['3','bars missed','Every bar you missed is named on the application, and all of them are addressable.']],
    null,
    [['9','challenges entered','Scored, open, under review and closed submissions, counted together.'],['91/100','your median score','You sit in the top decile of everyone who has taken these briefs.'],['5.4h','median time used of an 8h cap','You finish with time to spare, which is where the speed multiplier comes from.'],['84%','median test coverage','Coverage is your weakest recurring metric across submissions.']],
    [['5','interviews scored','All transcripts are complete and readable in full.'],['87%','your median signal','Communication and ownership carry your score; technical depth trails by six points.'],['34 min','median interview length','Your longer interviews scored higher, driven by follow-up questions you invited.'],['1','held at this stage','Held rounds are waiting on deeper evidence in one specific area.']],
    [['2','outcomes reached','Where your applications landed once every automated stage was done.'],['#2','best finalist rank','Your best finish was two points off first place.'],['14 days','median time to outcome','End to end, applications resolve in about two weeks.'],['$2,400','bounty earned','Paid on the Northwind Data dedupe entry.']]
  ];

  var STATS_AWARD=[['1','awards won','Bounties paid out after the company reviewed and approved your submission.'],['$2,400','bounty earned','Paid on the Northwind Data dedupe entry.'],['#1','best placement','First of 84 entries on correctness and latency cost.'],['5 days','median time to payout','From submission approval to money in your account.']];
  var ui={stage:0,statOpen:false,lim:10,open:null,filter:'Hiring'};
  recount();

  function bar(p){return '<div class="sd-bar"><i style="width:'+p+'%"></i></div>';}
  function met(l,v,p,cls){return '<div class="sd-metric"><div class="sd-metric-t"><span>'+esc(l)+'</span><b'+(cls?' class="'+cls+'"':'')+'>'+esc(v)+'</b></div>'+bar(p)+'</div>';}
  function seeded(a){var s=0,i;for(i=0;i<a.t.length;i++)s=(s*31+a.t.charCodeAt(i))>>>0;return function(lo,hi){s=(s*1103515245+12345)>>>0;return lo+s%(hi-lo+1);};}

  function ivPending(a,si){return si===3&&a.k!=='Bounty'&&!a.joined&&/AI interview ready/.test(a.status.txt);}
  function ivDay(){return '23 Sep 2026';}function ivTime(){var d=new Date(),h=d.getHours(),m=d.getMinutes();return (h<10?'0':'')+h+':'+(m<10?'0':'')+m;}
  function hm(n){return n>=60?Math.floor(n/60)+' hr '+(n%60)+' min':n+' min';}
  function hvPending(a,si){return si===4&&a.hv&&!a.hv.done;}
  function rwHtml(a){return a.rw&&a.rw.length?'<p class="sd-ev-h" style="margin-top:14px">Rewards from '+esc(a.co)+'</p><div class="sd-rw">'+a.rw.map(function(r){return '<div><span>'+esc(r[0])+'</span><b>'+esc(r[1])+'</b><em>'+esc(r[2])+'</em></div>';}).join('')+'</div>':'';}
  function detail(ai,si){
    var a=APPS[ai],rnd=seeded(a),sc=a.sc[si],co=esc(a.co),t=esc(a.t),cls='',head='',lead='',mets=[],ev='',extra='',pri='';
    if(si===0||si===1){
      var ov=a.sc[0],cut=a.st===1&&a.status.cls==='closed',scr=a.sc[1];
      cls=cut?'warn':'info';
      head=cut?'Cut at shortlist':(scr!=null?'Profile match '+ov+'% \u00b7 all bars cleared':(a.st===0?'Profile match '+ov+'% \u00b7 screening':'Profile match '+ov+'%'));
      lead='This is what '+co+' saw when your application for '+t+' landed. The AI reads your profile against the brief, then checks every hard requirement on its own. One miss ends the application regardless of the rest.';
      mets=[met('Skill overlap',ov+'%',ov,'ok'),met('Experience match',rnd(74,94)+'%',rnd(74,94))].concat(a.sk.map(function(k){return met(k,'Pass',rnd(78,96),'ok');}));
      if(cut)mets.push(met(a.gap,'Miss',rnd(30,52),'miss'));
      ev='<p class="sd-ev-h">Preliminary screening</p>'+(cut
        ? 'You cleared the stack bars comfortably. The application closed on <b>'+esc(a.gap)+'</b> \u2014 a hard gate '+co+' set before the posting went live, so the score above it did not carry weight.<br><br>This is a filter you can clear, not a judgement on the work.'
        : a.sk.map(function(k){return '\u2022 '+esc(k)+' \u2014 '+rnd(2,7)+' yrs, cited in '+rnd(2,4)+' roles on your record';}).join('<br>')
          +'<br><br><b>Thin spot.</b> '+esc(a.gap.charAt(0).toUpperCase()+a.gap.slice(1))+'. Naming it directly in your profile is stronger than leaving it to be inferred.');
      pri=cut?'See your full screen report':'View the brief';
    }else if(si===2){
      if(sc==null){
        cls='warn';head=a.status.txt;
        lead='Your submission for '+t+' is not scored yet. Here is exactly what the rubric weights and how the rest of the field is doing, so you know where the points are.';
        mets=[met('Cohort median correctness',rnd(82,90)+'%',rnd(82,90)),met('Cohort median code quality',rnd(78,88)+'%',rnd(78,88)),met('Cohort median coverage',rnd(70,84)+'%',rnd(70,84))];
        ev='<p class="sd-ev-h">Where entrants lose points</p>Correctness carries 40% of the score and is decided by 28 hidden tests, most of them edge cases rather than core logic. Code quality carries 30%, and the commit history is read as evidence \u2014 tests written before the implementation score higher than tests added at the end.<br><br><b>Your recurring gap:</b> test coverage. It is your lowest metric across five scored submissions, and it is the cheapest place to add points here.';
        pri=a.status.cls==='warn'?'Open the challenge':'View your submission';
      }else{
        var top=rnd(3,9),corr=Math.min(99,sc+rnd(1,5)),qual=sc-rnd(0,4),perf=sc-rnd(4,11),cov=sc-rnd(6,14);
        head='Challenge score '+sc+'% \u00b7 top '+top+'%';
        lead='Your submission was run against a hidden test suite and reviewed for code quality. Nothing below is an opinion about you \u2014 each number traces to the run log, which you can open.';
        mets=[met('Correctness',corr+'%',corr,'ok'),met('Code quality',qual+'%',qual,'ok'),met('Performance',perf+'%',perf),met('Test coverage',cov+'%',cov)];
        ev='<p class="sd-ev-h">AI analysis of your submission</p>You solved the brief in '+rnd(4,6)+'h '+rnd(5,55)+'m against an 8h cap and passed '+rnd(23,28)+' of 28 hidden tests on the first run. The strongest signal was '+esc(a.strength)+'.<br><br><b>Weakest area:</b> '+esc(a.weak)+'. It was acceptable at the test volume used here, but it would show under real load.<br><br><b>Against the cohort:</b> above median on correctness and code quality, mid-band on performance. No similarity match against prior submissions.<br><br><b>Next time:</b> document the limitation in the README rather than leaving reviewers to find it \u2014 entrants who do score higher on code quality for the same code.';
        pri='Open your submission & test log';
      }
    }else if(si===3){
      cls='info';
      head='Interview signal '+sc+'%';
      var v=[rnd(84,95),rnd(80,94),rnd(74,88),rnd(78,92)];
      lead='A structured async interview covering role fit, an experience deep-dive, live coding and system design. The full transcript is yours \u2014 the scores below are only a summary of it.';
      mets=[met('Communication',v[0]+'%',v[0],'ok'),met('Problem solving',v[1]+'%',v[1]),met('Technical depth',v[2]+'%',v[2]),met('Culture add',v[3]+'%',v[3])];
      ev='<p class="sd-ev-h">What the transcript showed</p>You answered in specifics rather than generalities and reached for concrete numbers when pushed on scale. On the live coding task your first working version came in '+rnd(9,17)+' minutes, with edge cases handled after a prompt rather than before it.<br><br>The failure question was answered in the first person: an outage traced to an N+1 query, fixed with batching and a cache layer, then followed by alerting so it would surface earlier. Root cause and prevention, not just the fix \u2014 this is what carried your score.<br><br><b>Weaker on system design.</b> Your first design was sound but under-specified on failure modes, and the consistency-versus-availability trade-off only came out on direct questioning.'
        +'<p class="sd-ev-h" style="margin-top:14px">Verdict shared with '+co+'</p>'+(a.status.cls==='closed'
          ? '<b>Held.</b> Strong on delivery and communication, but the depth signal sat below the finalist band for this role.'
          : '<b>Advance.</b> Top-band communication and ownership with real production depth, with a human panel recommended on system design.');
      pri='Read your full transcript';
    }else if(a.k==='Bounty'){
      cls='info';head=a.status.txt;
      var w=[rnd(90,98),rnd(86,96)];
      lead='Bounties are awarded on your challenge result. The payout is released once '+co+' has reviewed and approved your submission.';
      mets=[met('Challenge score',a.sc[2]+'%',a.sc[2],'ok'),met('Correctness',w[0]+'%',w[0],'ok'),met('Code quality',w[1]+'%',w[1]),met('Company review','Approved',100,'ok')];
      ev='<p class="sd-ev-h">Why you placed here</p>'+esc(a.why)+(a.pay?'<br><br><b>Payout.</b> '+esc(a.pay)+', sent to your connected account.':'')+'<br><br><b>What happens next.</b> '+esc(a.next);
      pri='View the award';
    }else{
      cls='info';
      head=a.status.txt;
      var w=[rnd(88,98),rnd(85,97),rnd(80,94),rnd(82,96)];
      lead='Your final standing is a weighted blend of every stage above, against the priorities '+co+' set for this role. The weights are visible to you, not hidden.';
      mets=[met('Screen fit',w[0]+'%',w[0]),met('Challenge',w[1]+'%',w[1]),met('Interview',w[2]+'%',w[2]),met('Experience match',w[3]+'%',w[3])];
      ev='<p class="sd-ev-h">Why you landed here</p>'+esc(a.why)+'<br><br><b>What happens next.</b> '+esc(a.next);
      pri='View the outcome';
    }
    var closed=a.status.cls==='closed';
    if(si===4&&a.hv){
      var h=a.hv,cal='<span class="sd-cal"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>Added to your Google Calendar</span>';
      return '<div class="sd"><div class="sd-head"><span class="sd-stage">Human interview</span><span class="sd-verdict '+(h.done?'ok':'info')+'">'+esc(h.done?a.status.txt:'Interview scheduled')+'</span></div>'
        +'<div class="sd-ev">'+(h.done
          ?'<p class="sd-ev-h">Interview completed</p>Conducted on <b>'+esc(h.day)+' at '+esc(h.time)+'</b> and lasted <b>'+esc(h.len)+'</b>.<br>'+esc(h.with)+' \u00b7 '+esc(h.where)
          :'<p class="sd-ev-h">Your human interview</p><b>'+esc(h.day)+' \u00b7 '+esc(h.time)+'</b> \u00b7 '+esc(h.len)+'<br>'+esc(h.with)+' \u00b7 '+esc(h.where))
        +'<br><br>This interview is run by '+co+' outside theColosseum, so there is no transcript or score here.'+rwHtml(a)+'</div>'
        +'<div class="sd-actions">'+(h.done
          ?'<button type="button" class="sd-btn pri sd-brief" data-app="'+ai+'">View</button><button type="button" class="sd-btn cc-msg" data-co="'+co+'">Message '+co+'</button><button type="button" class="sd-btn sd-rate" data-app="'+ai+'">Rate this company</button>'
          :'<button type="button" class="sd-btn pri sd-join sd-go" data-h="1" data-app="'+ai+'">Join interview</button><button type="button" class="sd-btn cc-msg" data-co="'+co+'">Message '+co+'</button>'+cal+'<button type="button" class="sd-btn sd-wd" data-app="'+ai+'" style="margin-left:auto">Withdraw application</button>')+'</div></div>';
    }
    if(ivPending(a,si)){
      var steps=['Intro &amp; role fit','Experience deep-dive','Live coding','System design','Your questions'];
      var rules=['Find a quiet room with a stable connection','Keep your camera on and share your screen when asked','Use the built-in editor, no outside help or AI tools','You can pause once, for up to 5 minutes'];
      return '<div class="sd"><div class="sd-head"><span class="sd-stage">'+esc(sName(si,a))+'</span><span class="sd-verdict info">Ready when you are</span></div>'
        +'<div class="sd-ev"><p class="sd-ev-h">Your AI interview</p>No booking needed. Start any time, it takes about 45 min with video and a live editor. Insights and scores appear here once you finish.'
        +'<div class="sd-iv"><div><p class="sd-ev-h">Interview steps</p><ol>'+steps.map(function(x){return '<li>'+x+'</li>';}).join('')+'</ol></div>'
        +'<div><p class="sd-ev-h">Before you start</p><ul>'+rules.map(function(x){return '<li>'+x+'</li>';}).join('')+'</ul></div></div></div>'
        +'<div class="sd-actions"><button type="button" class="sd-btn pri sd-join sd-go" data-app="'+ai+'">Start interview</button><button type="button" class="sd-btn sd-wd" data-app="'+ai+'" style="margin-left:auto">Withdraw application</button></div></div>';
    }
    if(si===3&&a.joined)ev='<p class="sd-ev-h">Interview completed</p>Conducted on <b>'+esc(a.joined.day)+' at '+esc(a.joined.time||'10:30')+'</b> and lasted <b>'+esc(a.joined.len)+'</b>.<br><br>'+ev;
    return '<div class="sd"><div class="sd-head"><span class="sd-stage">'+esc(sName(si,a))+'</span><span class="sd-verdict '+cls+'">'+esc(head)+'</span></div>'
      +'<div class="sd-grid">'+mets.join('')+'</div><div class="sd-ev">'+ev+'</div>'+extra
      +'<div class="sd-actions"><button type="button" class="sd-btn pri sd-brief" data-app="'+ai+'">View</button>'+(si>=3&&a.k!=='Bounty'?'<button type="button" class="sd-btn sd-tsc" data-app="'+ai+'" data-s="'+si+'">View transcript</button>':'')+(si===4?(a.k==='Bounty'?'<button type="button" class="sd-btn cc-msg" data-co="'+co+'">Message '+co+'</button>':'')+'<button type="button" class="sd-btn sd-rate" data-app="'+ai+'">Rate this company</button>':'<button type="button" class="sd-btn sd-wd" data-app="'+ai+'">'+(closed?'Find similar challenges':'Withdraw application')+'</button>')+(si>=3&&a.k!=='Bounty'&&!a.joined&&/Interview booked/.test(a.iv||a.status.txt)?'<a class="sd-btn sd-join" href="Candidate%20-%20AI%20Interview%20copy.html">Join interview</a><span class="sd-cal"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>Added to your Google Calendar</span>':'')+'</div></div>';
  }

  var BRIEFS={
    'Platform reliability sprint':{eff:'8 hours',win:'2 weeks',reward:'Hiring · $150k–175k band',
      br:'Cut alert noise on a 60-service estate and rewrite the on-call runbook around SLOs the team could actually defend.',
      goal:'Propose an SLO set per tier-one service, then prove the alert reduction against six weeks of replayed incident data.',
      det:['The estate had 340 active alert rules, roughly a third of which had never fired without a human muting them.','Anonymised incident history was provided, and detection time had to stay flat while pages dropped.','Final round was a live review of the proposed runbook with two on-call engineers.']},
    'Streaming ingest dedupe':{eff:'6 hours',win:'9 days',reward:'Bounty · $2,400',
      br:'Design and prove a dedupe layer for a 40k events/sec ingest pipeline without adding more than 50ms of p99 latency.',
      goal:'Ship a dedupe stage that survives broker replays and worker restarts, and show the latency cost you paid for it.',
      det:['The pipeline receives at-least-once delivery from three upstream producers, each with its own idempotency key format.','Replays after an outage can duplicate up to two hours of events, so an in-memory window alone will not hold.','Deliverable was a runnable service plus a load harness reproducing the 40k events/sec peak.']},
    'Observability pipeline rebuild':{eff:'8 hours',win:'2 weeks',reward:'Hiring · $145k–170k band',
      br:'Replace a self-hosted logging stack with a managed pipeline, keeping ingest cost flat while adding trace correlation.',
      goal:'Show a migration path for 4TB/day of logs that adds trace correlation without increasing the monthly bill.',
      det:['Clinical audit requirements mean no log line can be dropped, and retention is fixed at seven years.','You work against a synthetic estate of 90 services with realistic cardinality.','The technical interview covers the cost model and the rollback plan for a partial migration.']},
    'Latency budget audit':{eff:'4 hours',win:'5 days',reward:'Bounty · $1,800',
      br:'Trace a checkout flow end to end and produce a per-hop latency budget with the three highest-leverage fixes.',
      goal:'Account for every millisecond between edge and database, then name the fixes worth doing and the ones that are not.',
      det:['A sample trace set covering 200k checkout requests was provided, with two deliberately mislabelled spans.','Submissions were judged on the reasoning behind the budget allocation, not just the total.','The winning audit became the template Kestrel uses for new service reviews.']},
    'Data platform migration':{eff:'6 hours',win:'10 days',reward:'Hiring · $135k–160k band',
      br:'Move a batch warehouse onto an incremental model layer and demonstrate parity on three critical reports.',
      goal:'Rebuild three reports as incremental models and prove row-level parity against the legacy pipeline.',
      det:['The legacy pipeline is 1,100 lines of stored procedures with no test coverage.','Parity must hold across a backfill of eighteen months of production data.','A written tradeoff note is required alongside the code.']},
    'Cost-aware autoscaler':{eff:'5 hours',win:'6 days',reward:'Bounty · $1,200',
      br:'Build an autoscaler that trades latency headroom against spot-instance pricing and prove the savings on replayed traffic.',
      goal:'Beat the baseline HPA on cost across a week of replayed traffic without breaching the p99 latency target.',
      det:['A week of production traffic and matching spot-price history are provided as fixtures.','Any breach of the 250ms p99 target disqualifies the run, regardless of savings.','Reviewers replay each submission twice, including one day with a simulated spot reclaim event.']},
    'Terraform module refactor':{eff:'6 hours',win:'7 days',reward:'Bounty · $950',
      br:'Collapse eleven copy-pasted environment stacks into one reusable module set with drift detection in CI.',
      goal:'Deliver a module set that reproduces all eleven environments from variables alone, plus a CI job that fails on drift.',
      det:['The existing stacks had diverged over three years, with four environments carrying undocumented manual changes.','Plan output for every environment had to stay empty after migration.','Runner-up placement: the module set was accepted but the drift job needed rework for the largest environment.']},
    'Multi-region failover drill':{eff:'6 hours',win:'8 days',reward:'Hiring · $140k–165k band',
      br:'Run a failover drill across three regions and document what breaks before the traffic finishes moving.',
      goal:'Move all traffic out of one region inside five minutes with no dropped requests, and write up what you found.',
      det:['The estate is provided as a replica, including one service with a hidden single-region dependency.','Manual steps are allowed but must be named in the runbook you submit.','The role requires five or more years in a lead role, checked at screening.']},
    'Query cost profiler':{eff:'8 hours',win:'10 days',reward:'Hiring · $150k–175k band',
      br:'Build a profiler that attributes database cost to the queries and services responsible for it.',
      goal:'Attribute 90% of database CPU to a named query and owning service, with under 5% overhead.',
      det:['You get a week of pg_stat output plus an anonymised query log with duplicated shapes.','Attribution must survive query-plan changes between deploys.','A short design note on sampling versus full capture is expected.']},
    'Warehouse test harness':{eff:'5 hours',win:'7 days',reward:'Hiring · $130k–155k band',
      br:'Bring a legacy warehouse under test: build a harness that catches breaking model changes before they ship.',
      goal:'Fail CI on any model change that alters a critical report, without slowing the pipeline by more than 10%.',
      det:['Snowflake production experience is a hard requirement, checked at screening.','The harness must run against a sampled dataset, not a full clone.','Fixtures for three critical reports are provided, one of them deliberately flaky.']},
    'Edge cache invalidation':{eff:'4 hours',win:'5 days',reward:'Bounty · $1,000',
      br:'Design an invalidation path that clears edge caches within one second of an origin write, globally.',
      goal:'Hit sub-second global invalidation without a full purge, and prove it on the provided edge replica.',
      det:['The edge replica spans nine points of presence with intentionally uneven latency.','Full purges are disqualifying; invalidation must be keyed.','Stale reads during the window are acceptable if you document the bound.']},
    'Clinical audit log service':{eff:'6 hours',win:'2 weeks',reward:'Hiring · $140k–165k band',
      br:'Build an append-only audit log for clinical record access that satisfies a seven-year retention rule.',
      goal:'Guarantee tamper-evident writes and sub-second queries over a year of audit history.',
      det:['Every read of a clinical record produces an audit entry, so write volume tracks traffic exactly.','Deletion is prohibited; corrections must be modelled as new entries.','Reviewers check the schema against the regulator checklist supplied with the brief.']},
    'Senior Backend Engineer':{eff:'8 hours',win:'10 days',reward:'Role · $150k–175k band',
      br:'Own the job-processing layer end to end: the queue, the scheduler and the delivery guarantees the rest of the platform depends on.',
      goal:'Take the ingestion and job layer from 10k to 100k jobs per minute without adding an infra team.',
      det:['You own a service end to end, including design, rollout, on-call and the post-incident review.','Roughly a quarter of the work is reducing operational load rather than adding features.','Hiring runs through the idempotent job queue challenge, then a panel with the platform lead.']},
    'Staff Platform Engineer':{eff:'—',win:'3 weeks',reward:'Role · $170k–190k band',
      br:'Lead the platform team that runs the shared deploy, observability and compute layer for 120 clinical services.',
      goal:'Cut incident detection time in half while keeping every deploy auditable for regulators.',
      det:['You set the technical direction for a team of six platform engineers.','Every change to production must leave an audit trail a regulator can read.','The first quarter is focused on consolidating three observability stacks into one.']},
    'Platform Engineer':{eff:'6 hours',win:'2 weeks',reward:'Role · $140k–165k band',
      br:'Own the deploy and observability path for a 60-service estate, and the paved road other engineers build against.',
      goal:'Make deploys boring: one path, automatic rollback, and detection before customers notice.',
      det:['The take-home asks for a deploy design plus the rollback story, not just the happy path.','On-call is shared one week in five across the platform team.','Remote within European time zones, with two on-sites a year in Berlin.']},
    'Infrastructure Engineer':{eff:'5 hours',win:'8 days',reward:'Role · $135k–160k band',
      br:'Maintain and extend the shared module set that provisions every environment across three clouds.',
      goal:'Give platform teams one paved road for provisioning, with drift caught in CI rather than in production.',
      det:['GCP production experience is a hard requirement, checked at screening.','Most work lands in shared modules other engineers depend on daily.','The round closed on the hard requirement rather than on submission quality.']},
    'Data Engineer':{eff:'6 hours',win:'10 days',reward:'Role · $130k–155k band',
      br:'Rebuild a decade-old batch warehouse into an incremental, tested model layer the analytics team can trust.',
      goal:'Deliver tested incremental models with row-level parity against the legacy pipeline.',
      det:['The legacy layer is stored procedures with no test coverage and eighteen months of history to backfill.','Snowflake and dbt are the target stack; migration order is yours to argue for.','Screening checks warehouse modelling depth before the challenge unlocks.']}
  };
  var RULES=['Work solo — no collaborators, pair-programming or outsourced help.','Any language or framework is allowed unless the brief states otherwise.','AI assistants may be used, but you must be able to explain every line you submit.','Submit a runnable repository with setup instructions and your tests.','All work must be your own and completed within the stated timeline.'];

  var CO={
    'Northwind Data':{tag:'Streaming data platform',ind:'Data infrastructure',loc:'Amsterdam, NL',sz:'90–140',site:'northwinddata.io',li:'company/northwind-data',ab:'Northwind Data runs the ingest and stream-processing layer behind a dozen consumer apps. The platform team owns correctness end to end, from broker tuning to the query surface analysts use.'},
    'Aurora Systems':{tag:'Cloud reliability tooling',ind:'Developer tools',loc:'Berlin, DE',sz:'60–90',site:'aurorasystems.dev',li:'company/aurora-systems',ab:'Aurora Systems builds the on-call and SLO tooling that mid-size engineering orgs use instead of assembling their own stack. Small senior team, heavy bias toward measurable reliability work.'},
    'Kestrel':{tag:'Edge networking & delivery',ind:'Networking',loc:'Remote (EU)',sz:'25–40',site:'kestrel.net',li:'company/kestrel-edge',ab:'Kestrel operates a global edge network for low-latency delivery. A lean team that rewards deep systems knowledge and pragmatic, measurable improvements over rewrites.'},
    'Lumen':{tag:'Infrastructure automation',ind:'Cloud infrastructure',loc:'Lisbon, PT',sz:'40–60',site:'lumeninfra.com',li:'company/lumen-infra',ab:'Lumen gives platform teams a paved road for provisioning across three clouds. Most work lands in shared modules other engineers depend on daily.'},
    'Meridian Health':{tag:'Clinical data infrastructure',ind:'Health tech',loc:'Copenhagen, DK',sz:'200–300',site:'meridianhealth.eu',li:'company/meridian-health',ab:'Meridian Health handles clinical records and telemetry for hospital networks across the Nordics. Regulated environment, so observability and auditability sit at the centre of the platform roadmap.'},
    'Halden Group':{tag:'Industrial analytics',ind:'Manufacturing',loc:'Oslo, NO',sz:'400–600',site:'haldengroup.no',li:'company/halden-group',ab:'Halden Group runs analytics for heavy-industry operations across Northern Europe. The data team is rebuilding a decade-old warehouse into an incremental, tested model layer.'},
    'Volt':{tag:'Compute cost optimisation',ind:'Cloud infrastructure',loc:'Remote (global)',sz:'15–25',site:'volt.build',li:'company/volt-build',ab:'Volt sells one thing: lower cloud spend without missing latency targets. Every engineer works directly against customer traffic replays, so results are visible within days.'}
  };
  var GLOBE='<svg viewBox="0 0 24 24" fill="none" stroke="#4a5568" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>';
  var LIICON='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56z"/></svg>';

  var PROCESS=['AI screen against the hard requirements on the role.','Take-home challenge, scored against a hidden test suite.','Structured AI interview, transcript shared with the hiring panel.','Final panel with the team — 45 minutes, no whiteboard.'];

  function openBrief(ai){
    var a=APPS[ai],b=BRIEFS[a.t];if(!b)return;
    var stageTxt=a.status.txt;
    var back=document.createElement('div');back.className='arm-back';
    back.innerHTML='<div class="arm" role="dialog" aria-modal="true"><button class="arm-x" type="button" aria-label="Close"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></button>'
      +'<div class="arm-hd"><span class="arm-co"><span class="arm-co-ic"><img src="'+a.lg+'" alt=""></span><span class="arm-co-txt"><span class="arm-co-nm">'+esc(a.co)+'</span><span class="arm-co-tag">'+esc(b.reward)+'</span></span></span><span class="arm-kind'+(a.k==='Bounty'?' bounty':(a.k==='Job'?' job':''))+'">'+esc(a.k==='Job'?'Job':a.k+' challenge')+'</span></div>'
      +'<h3 class="arm-t">'+esc(a.t)+'</h3><p class="arm-sub">Applied '+esc(a.applied)+' · '+esc(stageTxt)+'</p>'
      +(function(){var ch=function(l,v){return '<div class="arm-chip"><span>'+l+'</span><b>'+v+'</b></div>';};
        if(a.k==='Bounty')return '<div class="arm-chips">'+ch('Timeline',esc(b.win))+ch('Reward',esc(String(b.reward).replace(/^Bounty\s*·\s*/,'')))+'</div>';
        var WL=[['3 years','Remote','United States','us'],['5 years','Hybrid','Germany','de'],['4 years','Remote','United Kingdom','gb'],['6 years','On-site','Netherlands','nl'],['4 years','Hybrid','Denmark','dk']],w=WL[ai%WL.length];
        return '<div class="arm-chips">'+ch('Experience',w[0])+ch('Work',w[1])+ch('Location','<img src="https://flagcdn.com/w40/'+w[3]+'.png" alt="" style="width:16px;height:11px;border-radius:2px;object-fit:cover;vertical-align:-1px;margin-right:6px">'+w[2])+'</div>';})()
      +'<div class="arm-card">'
        +'<div class="arm-sec"><h4>Overview</h4><p>'+esc(b.br)+'</p></div>'
        +'<div class="arm-sec"><h4>Goal</h4><p>'+esc(b.goal)+'</p></div>'
        +'<div class="arm-sec"><h4>Details</h4>'+b.det.map(function(p){return '<p>'+esc(p)+'</p>';}).join('')+'</div>'
        +'<div class="arm-sec"><h4>Tech stack</h4><div class="arm-sk">'+a.sk.map(function(s){return '<span>'+esc(s)+'</span>';}).join('')+'</div></div>'
        +'<div class="arm-sec"><h4>Your progress</h4><div class="arm-stage-row"><b>'+esc(sName(a.st,a))+'</b><span class="arm-pips">'+STAGES.map(function(_,j){return (j===1||(a.k==='Bounty'&&j===3))?'':'<i class="'+(j<=a.st?'on':'')+'"></i>';}).join('')+'</span></div><p style="margin-top:8px">'+esc(a.next)+'</p></div>'
        +'<div class="arm-sec"><h4>'+(a.k==='Job'?'Hiring process':'Rules')+'</h4><ul>'+(a.k==='Job'?PROCESS:RULES).map(function(r){return '<li>'+esc(r)+'</li>';}).join('')+'</ul></div>'
      +'</div>'
      +(function(){var c=CO[a.co];if(!c)return '';
        return '<div class="arm-cop">'
          +'<div class="arm-cop-head"><span class="arm-cop-ic"><img src="'+a.lg+'" alt=""></span><div><div class="arm-cop-nm">'+esc(a.co)+'</div><div class="arm-cop-tag">'+esc(c.tag)+'</div></div></div>'
          +'<div class="arm-cop-facts"><div class="arm-cop-fact"><span class="lbl">Location</span><span class="val">'+esc(c.loc)+'</span></div><div class="arm-cop-fact"><span class="lbl">Team size</span><span class="val">'+esc(c.sz)+'</span></div></div>'
          +'<p class="arm-cop-about">'+esc(c.ab)+'</p>'
          +'<div class="arm-cop-links"><a class="arm-cop-link" href="#" onclick="return false">'+GLOBE+esc(c.site)+'</a><a class="arm-cop-link li" href="#" onclick="return false">'+LIICON+esc(c.li)+'</a></div>'
        +'</div>';})()
      +'</div>';
    document.body.appendChild(back);
    requestAnimationFrame(function(){back.classList.add('on');});
    setTimeout(function(){back.classList.add('on');},40);
    function close(){back.classList.remove('on');document.removeEventListener('keydown',onKey);setTimeout(function(){back.remove();},220);}
    function onKey(e){if(e.key==='Escape')close();}
    back.addEventListener('click',function(e){if(e.target===back||e.target.closest('.arm-x'))close();});
    document.addEventListener('keydown',onKey);
  }

  function showTranscript(ai,si){
    var a=APPS[ai];if(!a)return;
    var rnd=seeded(a),mins=si===3?rnd(34,46):rnd(48,62),days=rnd(3,14);
    var s1=esc(a.sk[0]||'the core stack'),s2=esc(a.sk[1]||a.sk[0]||'the stack');
    var T=si===3?[
      ['00:00','Intro & role fit'],
      ['ai','Thanks for making the time. I have your profile and your challenge submission for '+esc(a.t)+', so we can skip the CV walkthrough. Tell me what you were actually responsible for in your last role.'],
      ['me','I owned the platform surface end to end — the delivery, the reviews and the on-call rota for it. Team of four, but I was the only one who had been through a full migration.'],
      ['ai','What was the hardest constraint you worked under?'],
      ['me','Compliance. We could not lose a single record, which ruled out most of the simpler paths. We dual-wrote for six weeks and reconciled nightly.'],
      ['09:20','Experience deep-dive'],
      ['ai','Walk me through a time something you built failed in production.'],
      ['me','Our match service timed out under a traffic spike. I traced it to an N+1 query, added batching and a cache layer, then set up alerting so we would catch it earlier next time.'],
      ['ai','What did you change about how you work after that?'],
      ['me','I stopped trusting local benchmarks. Anything on a hot path now gets tested against production-shaped data before it ships.'],
      ['16:40','Practical task'],
      ['ai','Take the '+s1+' problem from the brief and talk me through your approach as you go.'],
      ['me','I would keep the moving parts independently testable rather than optimising early, and write the cases from the brief before the implementation.'],
      ['ai','What happens when that runs across two instances rather than one?'],
      ['me','It breaks. In-process state only holds for a single instance — you move it to shared storage and pay the round trip, or accept per-instance limits and divide the quota.'],
      ['31:05','System design'],
      ['ai','Sketch the ingestion path for a service taking ten thousand events a second.'],
      ['me','Queue in front, stateless consumers, partition by tenant so ordering holds where it matters. Batch the writes rather than one insert per event.'],
      ['ai','Where does that fall over?'],
      ['me','Hot tenants. One large tenant can saturate its partition while the rest sit idle, so you need sub-partitioning or a spillover path.'],
      [String(mins-3).padStart(2,'0')+':10','Your questions'],
      ['me','How is the team split between platform work and product work right now?'],
      ['ai','Roughly two-thirds platform this quarter. That will be covered in the panel round with the hiring manager.']
    ]:[
      ['00:00','Panel intro'],
      ['ai','Good to meet you properly. I am the hiring manager for '+esc(a.t)+', and I have the AI interview and your challenge in front of me, so this is about the parts a score cannot tell us.'],
      ['me','Happy to go wherever is most useful. The system design section was where I felt thinnest, so I am glad to pick that back up.'],
      ['06:15','System design, revisited'],
      ['ai','Take the design you gave in the AI round and tell me what you would change now.'],
      ['me','I under-specified the failure modes. I would name the consistency trade-off up front, add a dead-letter path, and be explicit that the queue only buys you as much time as its retention.'],
      ['ai','And if the team disagreed with that trade-off?'],
      ['me','Then I would want the disagreement written down with what each side is optimising for. In my experience the argument is usually about different definitions of acceptable loss.'],
      ['18:30','Working with the team'],
      ['ai','How do you handle a review where someone senior is wrong?'],
      ['me','Ask the question rather than make the claim. If it is still wrong after that, I put the counter-example in the pull request so it is about the code, not the person.'],
      ['ai','What do you need from us to do your best work here?'],
      ['me','Clear ownership and access to real data early. I am slow when I have to guess at production shape.'],
      ['32:40',esc(a.co)+' context'],
      ['ai','This role would sit across '+s1+' and '+s2+'. The first ninety days are mostly cleanup rather than new build. Is that the work you want?'],
      ['me','Yes. Cleanup is where I learn the estate, and it is easier to argue for the new build once you know what the old one actually does.'],
      [String(mins-4).padStart(2,'0')+':05','Your questions'],
      ['me','What does the on-call rota look like, and who owns it?'],
      ['ai','One week in five, shared across the platform team. We are also happy to answer anything on comp before the next step.']
    ];
    var iName=si===3?'Colosseum AI':'Hiring manager · '+a.co;
    var back=document.createElement('div');back.className='sub-back';
    back.innerHTML='<div class="sub" role="dialog" aria-modal="true"><button class="sub-x" type="button" aria-label="Close"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></button>'
      +'<div class="sub-hd"><img src="assets/candidate-profile.png" alt=""><span><b>'+esc(a.t)+'</b><em>'+esc(a.co)+' · applied '+esc(a.applied)+'</em></span></div>'
      +'<h3 class="sub-t">'+(si===3?'AI interview transcript':'Human interview transcript')+'</h3>'
      +'<div class="sub-meta"><span>'+mins+' min</span><span>Recorded '+days+' days ago</span><span>'+(si===3?'Video + live editor':'Panel of two')+'</span><span>Auto-transcribed</span></div>'
      +'<div class="sub-sec"><div class="tr">'+T.map(function(l){
        if(l[0]!=='ai'&&l[0]!=='me')return '<div class="tr-mark">'+esc(l[0])+' · '+l[1]+'</div>';
        return '<div class="tr-l'+(l[0]==='me'?' me':'')+'"><span class="tr-w">'+(l[0]==='ai'?esc(iName):'You')+'</span><p>'+l[1]+'</p></div>';
      }).join('')+'</div></div></div>';
    document.body.appendChild(back);
    requestAnimationFrame(function(){back.classList.add('on');});
    setTimeout(function(){back.classList.add('on');},40);
    function close(){back.classList.remove('on');document.removeEventListener('keydown',onKey);setTimeout(function(){back.remove();},200);}
    function onKey(e){if(e.key==='Escape')close();}
    back.addEventListener('click',function(e){if(e.target===back||e.target.closest('.sub-x'))close();});
    document.addEventListener('keydown',onKey);
  }

  function confirmWithdraw(ai){
    var a=APPS[ai];if(!a)return;
    var closed=a.status.cls==='closed';
    var back=document.createElement('div');back.className='sub-back';
    back.innerHTML='<div class="sub cfm" role="dialog" aria-modal="true">'
      +'<h4>'+(closed?'Find challenges like this one?':'Withdraw this application?')+'</h4>'
      +'<div class="cfm-who"><img src="'+a.lg+'" alt=""><span><b>'+esc(a.t)+'</b><em>'+esc(a.co)+' \u00b7 applied '+esc(a.applied)+'</em></span></div>'
      +'<p>'+(closed
        ? 'We will match you against open briefs in the same stack \u2014 '+esc(a.sk.slice(0,2).join(' and '))+' \u2014 and surface them at the top of Browse. Nothing is sent to '+esc(a.co)+'.'
        : esc(a.co)+' will be told you have withdrawn, and your scores for this application stop being shared with them. Work you have already submitted stays yours. You can reapply if the role reopens.')+'</p>'
      +'<div class="cfm-act"><button type="button" class="sd-btn cfm-no">'+(closed?'Not now':'Keep application')+'</button><button type="button" class="sd-btn'+(closed?' pri':' warn')+' cfm-yes">'+(closed?'Show matches':'Withdraw')+'</button></div></div>';
    document.body.appendChild(back);
    requestAnimationFrame(function(){back.classList.add('on');});
    setTimeout(function(){back.classList.add('on');},40);
    function close(){back.classList.remove('on');document.removeEventListener('keydown',onKey);setTimeout(function(){back.remove();},200);}
    function onKey(e){if(e.key==='Escape')close();}
    back.addEventListener('click',function(e){if(e.target===back||e.target.closest('.cfm-no')||e.target.closest('.cfm-yes'))close();});
    document.addEventListener('keydown',onKey);
  }

  function rateCompany(ai){
    var a=APPS[ai];if(!a)return;
    var STAR='<svg viewBox="0 0 24 24"><polygon points="12 3 14.9 9.2 21.6 10.1 16.8 14.8 18 21.5 12 18.2 6 21.5 7.2 14.8 2.4 10.1 9.1 9.2"/></svg>';
    var LBL=['','Poor','Fair','Good','Great','Outstanding'],rating=0;
    var back=document.createElement('div');back.className='sub-back';
    back.innerHTML='<div class="sub cfm" role="dialog" aria-modal="true">'
      +'<h4>Rate your experience with '+esc(a.co)+'</h4>'
      +'<div class="cfm-who"><img src="'+a.lg+'" alt=""><span><b>'+esc(a.t)+'</b><em>'+esc(a.co)+' \u00b7 applied '+esc(a.applied)+'</em></span></div>'
      +'<p>This appears on their public profile alongside ratings from other candidates.</p>'
      +'<div class="rv-f"><span class="rv-l">Rating</span><div class="rv-stars">'
        +[1,2,3,4,5].map(function(n){return '<button type="button" data-n="'+n+'" aria-label="'+n+' stars">'+STAR+'</button>';}).join('')
      +'</div><p class="rv-note"></p></div>'
      +'<div class="rv-f"><span class="rv-l">Review</span><textarea class="rv-ta" placeholder="How was the brief, the review and the communication?"></textarea></div>'
      +'<div class="cfm-act"><button type="button" class="sd-btn cfm-no">Skip</button><button type="button" class="sd-btn pri rv-go" disabled>Publish review</button></div></div>';
    document.body.appendChild(back);
    requestAnimationFrame(function(){back.classList.add('on');});
    var go=back.querySelector('.rv-go'),note=back.querySelector('.rv-note');
    back.querySelector('.rv-stars').onclick=function(e){
      var b=e.target.closest('button[data-n]');if(!b)return;
      rating=+b.getAttribute('data-n');
      back.querySelectorAll('.rv-stars button').forEach(function(x){x.classList.toggle('on',+x.getAttribute('data-n')<=rating);});
      note.textContent=rating+'.0 \u00b7 '+LBL[rating];go.disabled=false;
    };
    function close(){back.classList.remove('on');document.removeEventListener('keydown',onKey);setTimeout(function(){back.remove();},200);}
    function onKey(e){if(e.key==='Escape')close();}
    back.addEventListener('click',function(e){if(e.target===back||e.target.closest('.cfm-no')||e.target.closest('.rv-go'))close();});
    document.addEventListener('keydown',onKey);
  }

  function statCell(v,l,ins){
    var m=String(v).match(/^([\d.,#$\u2014]+)(.*)$/);
    var h=m?esc(m[1])+(m[2]?'<em>'+esc(m[2])+'</em>':''):esc(String(v));
    return '<div><div class="v">'+h+'</div><div class="l">'+esc(l)+'</div><div class="ins">'+esc(ins)+'</div></div>';
  }
  function pillCls(i){return i===4?'bf-pill dark':i===0?'bf-pill dim':'bf-pill';}

  function rowsFor(si){
    return APPS.map(function(a,i){return{a:a,i:i};}).filter(function(o){return inFilter(o.a)&&hits(o.a,si);})
      .sort(function(x,y){return (y.a.sc[si]||0)-(x.a.sc[si]||0);});
  }
  function verdict(a,si){
    if(hvPending(a,si))return{t:'Interview scheduled \u00b7 '+a.hv.day.replace(' 2026',''),c:'warn'};
    if(ivPending(a,si))return{t:'Ready to start',c:'warn'};
    if(si===3&&a.joined&&a.st===3)return{t:'Interview completed \u00b7 '+a.joined.day.replace(' 2026',''),c:'ok'};
    if(si===0&&a.st===1)return{t:a.status.txt,c:a.status.cls};
    if(si<a.st){var nx=si+1;if(nx===1)nx=2;if(a.k==='Bounty'&&(nx===1||nx===3))nx++;return{t:'Advanced to '+sName(nx,a),c:''};}
    return{t:a.status.txt,c:a.status.cls};
  }

  function render(){
    recount();
    var VIS=visStages();
    var FLAGS=flagsFor();
    if(VIS.indexOf(ui.stage)<0)ui.stage=VIS[Math.min(2,VIS.length-1)];
    var NOTES=notesFor(counts);
    var si=ui.stage,list=rowsFor(si),total=list.length;
    var slide=VIS.map(function(i){
      var s=sName(i),pv=VIS.indexOf(i)?VIS[VIS.indexOf(i)-1]:null;
      if(i===si)return '<div class="bf-big" data-k="'+i+'"><div class="bf-big-top"><span class="'+pillCls(i)+'">'+esc(s)+'</span>'+(FLAGS[i]?'<span class="bf-flag"><i></i>'+FLAGS[i]+'</span>':'')+'</div>'
        +'<div class="bf-n"><b>'+counts[i]+'</b><span class="bf-sub">'+(i===4&&isB()?'awards won':SUB[i])+(pv!==null&&counts[pv]?' \u00b7 '+Math.round(counts[i]/counts[pv]*100)+'% of '+sName(pv):'')+'</span></div>'
        +'<p class="bf-note">'+NOTES[i]+'</p>'
        +'<div class="bf-big-f">'+(CTA[i]?'<button type="button" class="bf-btn" data-jump="1">'+esc(CTA[i])+'</button>':'')+'</div></div>';
      var far=Math.abs(VIS.indexOf(i)-VIS.indexOf(si))>1;
      return '<div class="bf-mini'+(far?' far':'')+'" data-k="'+i+'" data-s="'+i+'" role="button" tabindex="0"><span class="'+pillCls(i)+'">'+esc(s)+'</span><span class="bf-mini-n">'+counts[i]+'</span><span class="bf-sub">'+esc(i===4&&isB()?'awards won':SUB[i])+'</span></div>';
    }).join('');
    var focus='<div class="bf-focus">'
      +'<div class="bf-stack"><div class="bf-slide">'+slide+'</div></div>'
      +'</div>'
      +'<div class="bf-track">'+VIS.map(function(i,n){return (n?'<span class="l'+(i<=si?' done':'')+'"></span>':'')+'<span class="d'+(i<si?' done':i===si?' cur':'')+'"></span>';}).join('')+'</div>';

    var body=list.slice(0,ui.lim).map(function(o,n){
      var a=o.a,v=verdict(a,si),sc=ivPending(a,si)||(si===4&&a.hv)?null:a.sc[si],open=ui.open===o.i;
      return '<div class="bf-row" data-app="'+o.i+'"><span class="bf-rk">'+(n+1)+'</span>'
        +'<span class="bf-who"><img src="'+a.lg+'" alt="" /><span><b>'+esc(a.t)+'<span class="bf-kind'+(a.k==='Bounty'?' bounty':(a.k==='Job'?' job':''))+'">'+esc(a.k)+'</span></b><em>'+esc(a.co)+' \u00b7 '+esc(a.sk.slice(0,2).join(', '))+' \u00b7 applied '+esc(a.applied)+'</em></span></span>'
        +'<span class="bf-sc"><b>'+(sc==null?'\u2014':sc+'%')+'</b><span class="bar"><i style="width:'+(sc||0)+'%"></i></span></span>'
        +'<span class="bf-verd '+v.c+'">'+esc(v.t)+(si===4&&(a.pay||a.iv)?'<span class="bf-verd-sub">'+esc(a.pay||a.iv)+'</span>':'')+'</span>'
        +'<button type="button" class="bf-btn'+(open?'':' line')+' bf-rev" data-app="'+o.i+'">'+(open?'Hide':'Insights')+'</button></div>'
        +'<div class="bf-slot'+(open?' on':'')+'" data-slot="'+o.i+'">'+(open?detail(o.i,si):'')+'</div>';
    }).join('');

    var vi=VIS.indexOf(si),pv=vi>0?VIS[vi-1]:null;
    var fset=APPS.filter(inFilter);
    var missed=fset.filter(function(a){return a.st===1&&a.status.cls==='closed';}).length;
    var held=fset.filter(function(a){return a.st===3&&a.status.cls==='closed';}).length;
    var SING={'applications':'application','applications sent':'application sent','screens completed':'screen completed','challenges entered':'challenge entered','interviews scored':'interview scored','outcomes reached':'outcome reached'};
    var SING2={'awards won':'award won'};var st=(si===4&&isB()?STATS_AWARD:STATS[si]).map(function(p,n){
      if(n===0)return [String(counts[si]),(counts[si]===1&&(SING[p[1]]||SING2[p[1]]))||p[1],p[2]];
      if(/bars? missed/.test(p[1]))return [String(missed),missed===1?'bar missed':p[1],p[2]];
      if(/cleared screening/.test(p[1])&&counts[0])return [Math.round(counts[1]/counts[0]*100)+'%',p[1],p[2]];
      if(/passed the screen/.test(p[1])&&pv!==null&&counts[pv])return [Math.round(counts[si]/counts[pv]*100)+'%',p[1],p[2]];
      if(/held at this stage/.test(p[1]))return [String(held),p[1],p[2]];
      return p;
    }).filter(function(p){
      if(/bounty earned/.test(p[1]))return fset.some(function(a){return a.k==='Bounty'&&/^Won/.test(a.status.txt);});
      if(/finalist rank/.test(p[1]))return fset.some(function(a){return /rank/.test(a.status.txt);});
      if(/bars? missed/.test(p[1]))return missed>0;
      if(/held at this stage/.test(p[1]))return held>0;
      return true;
    });
    host.innerHTML='<div class="bf">'+focus+'<div class="bf-exp"><div class="bf-wrap">'
      +'<div class="bf-stat'+(ui.statOpen?' on':'')+'" role="button" tabindex="0" aria-expanded="'+(ui.statOpen?'true':'false')+'"><div class="bf-stat-g">'+st.map(function(p){return statCell(p[0],p[1],p[2]);}).join('')+'</div><span class="bf-stat-x" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></span></div>'
      +'<div class="bf-list"><div class="bf-row head"><span>#</span><span>Challenges and jobs</span><span>'+esc(si===4&&isB()?'Final':STAGES[si])+' score</span><span>Status</span><span></span></div>'
      +body
      +(total?(ui.lim<total?'<div class="bf-more"><span>Showing '+ui.lim+' of '+total+'</span><button type="button" class="bf-btn line bf-showmore">Show next '+Math.min(10,total-ui.lim)+'</button></div>':'<div class="bf-more"><span>Showing all '+total+'</span></div>'):'<div class="bf-more"><span>Nothing has reached this stage under this filter.</span></div>')
      +'</div></div></div></div>';
    center();
  }

  function rects(){
    var slide=host.querySelector('.bf-slide');if(!slide)return null;
    var o={},k=slide.children,i;
    for(i=0;i<k.length;i++){var id=k[i].getAttribute('data-k');if(id!=null){var r=k[i].getBoundingClientRect();o[id]={l:r.left,t:r.top,w:r.width};}}
    return o;
  }
  function flip(old){
    var slide=host.querySelector('.bf-slide');if(!slide||!old)return;
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
  function center(){
    var slide=host.querySelector('.bf-slide');if(!slide)return;
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
    if(rowW){var lo=Math.min(0,stackW-rowW),hi=Math.max(0,stackW-rowW);off=Math.max(lo,Math.min(hi,off));}
    slide.style.transform=prev||'none';slide.offsetHeight;slide.style.transition='';
    slide.style.transform='translateX('+Math.round(off)+'px)';
  }
  window.addEventListener('resize',center);

  function goStage(n){
    var pre=rects();
    ui.stage=Math.min(4,Math.max(0,n));ui.lim=10;ui.open=null;
    render();flip(pre);
  }

  var fsel=document.getElementById('appFilter');
  if(fsel){
    var fbtn=fsel.querySelector('.bar-filter-btn'),flbl=fsel.querySelector('.bar-filter-lbl');
    fbtn.addEventListener('click',function(e){
      e.stopPropagation();
      var on=!fsel.classList.contains('open');
      fsel.classList.toggle('open',on);fbtn.setAttribute('aria-expanded',on?'true':'false');
    });
    document.addEventListener('click',function(){fsel.classList.remove('open');fbtn.setAttribute('aria-expanded','false');});
    function pick(opt){
      var v=opt.getAttribute('data-v');
      fsel.querySelectorAll('.bar-filter-opt').forEach(function(o){o.classList.toggle('sel',o===opt);});
      flbl.textContent=opt.querySelector('span').textContent;
      fsel.classList.remove('open');fbtn.setAttribute('aria-expanded','false');
      if(v===ui.filter)return;
      var pre=rects();
      ui.filter=v;ui.lim=10;ui.open=null;ui.statOpen=false;
      render();flip(pre);
    }
    fsel.addEventListener('click',function(e){var o=e.target.closest('.bar-filter-opt');if(o)pick(o);});
    fsel.addEventListener('keydown',function(e){
      if(e.key!=='Enter'&&e.key!==' ')return;
      var o=e.target.closest('.bar-filter-opt');if(o){e.preventDefault();pick(o);}
    });
  }

  host.addEventListener('click',function(e){
    var ccm=e.target.closest('.cc-msg');if(ccm){if(window.colChat)colChat.open(ccm.getAttribute('data-co'));return;}
    var go=e.target.closest('.sd-go');if(go){if(go.disabled)return;var gi=+go.getAttribute('data-app'),ga=APPS[gi];go.disabled=true;go.textContent=go.getAttribute('data-h')?'Joining\u2026':'Starting\u2026';
      setTimeout(function(){if(go.getAttribute('data-h')){ga.hv.done=true;ga.hv.len=ga.hlen||'1 hr';ga.status={txt:'Interview completed \u00b7 awaiting decision',cls:''};}else ga.joined={day:ivDay(ga),time:ivTime(),len:hm(seeded(ga)(38,74))};var sl=host.querySelector('.bf-slot[data-slot="'+gi+'"]');if(sl)sl.innerHTML=detail(gi,ui.stage);var row=host.querySelector('.bf-row[data-app="'+gi+'"] .bf-sc');if(row){var s=ga.sc[ui.stage];if(s!=null)row.innerHTML='<b>'+s+'%</b><span class="bar"><i style="width:'+s+'%"></i></span>';var vd=row.parentNode.querySelector('.bf-verd');if(vd){var nv=verdict(ga,ui.stage);vd.className='bf-verd '+nv.c;vd.textContent=nv.t;}}},2000);return;}
    var brief=e.target.closest('.sd-brief');if(brief){openBrief(+brief.getAttribute('data-app'));return;}
    var tsc=e.target.closest('.sd-tsc');if(tsc){showTranscript(+tsc.getAttribute('data-app'),+tsc.getAttribute('data-s'));return;}
    var wd=e.target.closest('.sd-wd');if(wd){confirmWithdraw(+wd.getAttribute('data-app'));return;}
    var rate=e.target.closest('.sd-rate');if(rate){rateCompany(+rate.getAttribute('data-app'));return;}
    var mini=e.target.closest('.bf-mini');if(mini){goStage(+mini.getAttribute('data-s'));return;}
    var stat=e.target.closest('.bf-stat');if(stat){ui.statOpen=!ui.statOpen;stat.classList.toggle('on',ui.statOpen);stat.setAttribute('aria-expanded',ui.statOpen?'true':'false');return;}
    var rev=e.target.closest('.bf-rev');if(rev){
      var i=+rev.getAttribute('data-app');
      host.querySelectorAll('.bf-slot.on').forEach(function(s){s.classList.remove('on');s.innerHTML='';});
      host.querySelectorAll('.bf-rev').forEach(function(b){b.textContent='Insights';b.classList.add('line');});
      if(ui.open===i){ui.open=null;return;}
      ui.open=i;
      var slot=host.querySelector('.bf-slot[data-slot="'+i+'"]');
      if(slot){slot.innerHTML=detail(i,ui.stage);slot.classList.add('on');rev.textContent='Hide';rev.classList.remove('line');}
      return;}
    var sm=e.target.closest('.bf-showmore');if(sm){ui.lim+=10;render();return;}
    var jump=e.target.closest('[data-jump]');if(jump){var l=host.querySelector('.bf-list');if(l)window.scrollTo({top:l.getBoundingClientRect().top+window.scrollY-24,behavior:'smooth'});}
  });
  host.addEventListener('keydown',function(e){
    if(e.key!=='Enter'&&e.key!==' ')return;
    var m=e.target.closest('.bf-mini');if(m){e.preventDefault();goStage(+m.getAttribute('data-s'));}
  });

  render();
})();
