function SwitchScene(){
  const t=useT('Switch');const z=MOTION.draw(t,.92,.32);const pr=t>=.8;
  return <Scene name="Switch" next="K1" bg={VC.ink}>
    <div style={{position:'absolute',inset:0,transform:'scale('+lerp(1,2.6,z)+')',transformOrigin:'960px 641px'}}>
      <div style={{position:'absolute',left:0,right:0,top:84,display:'flex',justifyContent:'center',opacity:MOTION.enter(t,0,.3)}}><Logo size={26} color={VC.paper}/></div>
      <Rise t={t} at={0} x={0} y={330} w={1920} style={{textAlign:'center',font:'700 16px '+SANS,letterSpacing:'.2em',color:VC.blue2}}>FOR COMPANIES</Rise>
      <Headline t={t} at={.04} x={0} w={1920} top={380} center size={108} color={VC.paper} emColor={VC.blue2} lines={['Skip the interview *theater*.']}/>
      <Pop t={t} at={.35} x={850} y={610} w={220} h={62}><Btn style={{height:62,background:pr?VC.blue:VC.paper,color:pr?'#fff':VC.ink,border:'0'}}>I'm hiring</Btn></Pop>
      <Dot t={t} keys={[{t:.3,x:1320,y:860},{t:.78,x:960,y:641,c:1},{t:1.4,x:960,y:641}]}/>
    </div>
  </Scene>;
}

// ---------- K1 · website → company graph ----------
const K1_CL=[
  {x:0,y:170,w:410,h:180,h1:'Product thesis',body:'Offline-first payments infrastructure for emerging markets.',ax:300,ay:350,at:1.2},
  {x:600,y:210,w:400,h:206,h1:'Core problems',chips:['Payment retries at scale','Offline sync conflicts','p99 latency on the scheduler'],ax:600,ay:330,at:1.3},
  {x:0,y:720,w:440,h:166,h1:"People we'd love to work with",chips:['High ownership','Async-first','Distributed systems depth'],ax:300,ay:720,at:1.4},
  {x:600,y:700,w:400,h:150,h1:'Hiring context',body:'Series A · 42 people · 3 likely roles',ax:600,ay:770,at:1.5},
];
function K1Scene(){
  const t=useT('K1');const cx=500,cy=530;
  const aOut=MOTION.enter(t,.95,.25),url='nimbuslab.io';
  return <Scene name="K1" next="K2"><Cam t={t} dur={2.8}>
    <Chrome t={t} side="FOR COMPANIES" step={1}/>
    <Headline t={t} out={1.0} lines={['Scouting your','*battlefield*…']} sub="Drop in your website. Colosseum AI does the reading."/>
    <Headline t={t} at={1.1} lines={['Your company,','*mapped*.']} sub="Product thesis, core problems and the people you'd love to work with, in one graph." subAt={1.3}/>
    <UI>
      <div style={{position:'absolute',inset:0,opacity:1-aOut,transform:'scale('+lerp(1,.6,aOut)+')',transformOrigin:cx+'px '+cy+'px'}}>
        <Rise t={t} at={0} x={110} y={430} w={780} h={200} style={Object.assign({},cardS,{position:'absolute'})}>
          <div style={{position:'absolute',left:34,top:30,font:'700 14px '+SANS,letterSpacing:'.15em',color:VC.faint}}>COMPANY WEBSITE</div>
          <div style={{position:'absolute',left:34,top:72,width:530,height:68,borderRadius:16,background:VC.field,border:'1px solid '+(t<.8?VC.blue:VC.line),display:'flex',alignItems:'center',padding:'0 22px',font:'500 24px '+SANS,color:VC.ink}}><span style={{color:VC.faint}}>https://</span>{typed(url,(t-.1)/.5)}<i style={{display:'block',width:2,height:28,background:VC.ink,marginLeft:2,opacity:t<.8&&Math.floor(t*4)%2===0?1:0}}></i></div>
          <Btn dark style={{position:'absolute',left:584,top:72,width:162,height:68,background:t>=.78?VC.blue:VC.ink,borderColor:t>=.78?VC.blue:VC.ink}}>Continue</Btn>
        </Rise>
      </div>
      <Rise t={t} at={.95} x={cx-200} y={cy+90} w={400} style={{textAlign:'center',font:'500 18px '+SANS,color:VC.mute,opacity:MOTION.enter(t,.95,.2)*(1-MOTION.enter(t,1.35,.2))}}>Exploring nimbuslab.io…</Rise>
      <svg width="1000" height="1080" style={{position:'absolute',left:0,top:0,overflow:'visible'}}>
        {K1_CL.map((c,i)=>{const p=MOTION.draw(t,c.at-.12,.3);return <line key={i} x1={cx} y1={cy} x2={lerp(cx,c.ax,p)} y2={lerp(cy,c.ay,p)} stroke={VC.blue2} strokeWidth="2" strokeDasharray="6 6"></line>;})}
      </svg>
      <Pop t={t} at={1.0} x={cx-70} y={cy-70} w={140} h={140} style={{borderRadius:'50%',background:'#fff',border:'1px solid '+VC.line,boxShadow:'0 24px 50px -22px rgba(54,95,139,.55)',display:'grid',placeItems:'center'}}><img src={I("assets/lg-1.png")} alt="" style={{width:104,height:104,borderRadius:'50%'}}/></Pop>
      <Rise t={t} at={1.25} x={cx-160} y={cy+84} w={320} style={{textAlign:'center'}}><div style={{font:'700 22px '+SANS,color:VC.ink}}>Nimbus Labs</div><div style={{font:'500 16px '+SANS,color:VC.press,marginTop:4}}>✦ Read from nimbuslab.io</div></Rise>
      {K1_CL.map((c,i)=><Pop key={i} t={t} at={c.at} x={c.x} y={c.y} w={c.w} h={c.h} style={Object.assign({},cardS,{position:'absolute',padding:'24px 26px'})}>
        <AiHead style={{fontSize:13,marginBottom:14}}>{c.h1}</AiHead>
        {c.body?<div style={{font:'400 26px/1.3 '+SERIF,letterSpacing:'-.01em',color:VC.ink}}>{c.body}</div>:null}
        {c.chips?<div style={{display:'flex',flexWrap:'wrap',gap:8}}>{c.chips.map((ch,j)=><Pop key={j} t={t} at={c.at+.12+j*.06}><Chip style={{borderColor:VC.blue2,color:VC.ink,fontWeight:600}}>{ch}</Chip></Pop>)}</div>:null}
      </Pop>)}
      <Dot t={t} keys={[{t:.1,x:560,y:900},{t:.78,x:775,y:536,c:1},{t:1.2,x:700,y:980,hide:1}]}/>
    </UI>
  </Cam></Scene>;
}

// ---------- K2 · suggested challenges ----------
const K2_C=[
  {from:'p99 latency on the scheduler',t:'Cut p99 latency on the scheduler',k:'bounty',prize:'$1,500',n:24,av:['eng-4','eng-6','eng-3','eng-5','eng-2']},
  {from:'Payment retries at scale',t:'Idempotent job queue under retries',k:'hiring',prize:'$1,200',n:31,av:['eng-3','eng-5','eng-2','eng-6','eng-4']},
  {from:'Offline sync conflicts',t:'Resolve offline sync conflicts without data loss',k:'bounty',prize:'$1,000',n:18,av:['eng-6','eng-2','eng-4','eng-5','eng-3']},
];
function K2Scene(){
  const t=useT('K2');const sel=MOTION.enter(t,1.6,.25);
  return <Scene name="K2" next="K3"><Cam t={t} dur={2.4}>
    <Chrome t={t} side="FOR COMPANIES" step={2}/>
    <Headline t={t} size={72} lines={['Challenges from','your *real* problems.']} sub="Suggested by Colosseum AI from your core problems, with gladiators already shortlisted to battle it out."/>
    <UI>
      <Rise t={t} at={0} x={0} y={186}><AiHead>Suggested by Colosseum AI</AiHead></Rise>
      {K2_C.map((c,i)=>{const at=.1+i*.12;const cnt=Math.round(c.n*MOTION.draw(t,at+.35,.8));return <Rise key={i} t={t} at={at} d={.45} dx={140} dy={0} x={0} y={236+i*232} w={1000} h={208} style={Object.assign({},cardS,{position:'absolute',borderColor:i===0&&sel>0?VC.blue:VC.line})}>
        <div style={{position:'absolute',left:32,top:28,font:'600 15px '+SANS,color:VC.press}}>From core problem · {c.from}</div>
        <div style={{position:'absolute',left:32,top:60,width:580,font:'500 30px/1.2 '+SERIF,letterSpacing:'-.01em',color:VC.ink}}>{c.t}</div>
        <div style={{position:'absolute',left:32,top:146,display:'flex',alignItems:'center',gap:10}}><Kind k={c.k}/><Prize>{c.prize}</Prize><span style={{font:'500 16px '+SANS,color:VC.mute}}>4–6 hrs · 5-day window</span></div>
        <div style={{position:'absolute',left:660,top:40,display:'flex'}}>{c.av.map((a,j)=><Pop key={j} t={t} at={at+.3+j*.05} style={{marginLeft:j?-16:0}}><Av src={'assets/'+a+'.png'} size={58} style={{border:'3px solid #fff',boxShadow:'0 4px 10px rgba(0,0,0,.08)'}}/></Pop>)}</div>
        <div style={{position:'absolute',left:660,top:116,display:'flex',alignItems:'baseline',gap:10}}><span style={{font:'400 44px/1 '+SERIF,color:VC.ink}}>{cnt}</span><span style={{font:'600 17px '+SANS,color:VC.mute}}>gladiators shortlisted</span></div>
      </Rise>;})}
      <Dot t={t} keys={[{t:.3,x:520,y:1010},{t:1.6,x:440,y:330,c:1},{t:2.6,x:470,y:350}]}/>
    </UI>
  </Cam></Scene>;
}

// ---------- K3 · new challenge from a JD ----------
const K3_AV=['eng-4','eng-6','eng-3','eng-5','eng-2',PV("Sean O'Neill"),'eng-6','eng-3',PV('Lena Becker'),'eng-5','eng-4',PV('Finn Murphy')];
const K3_IN=['','','','','','SO','','','LB','','','FM'];
const K3_M=[97,95,93,92,91,90,90,89,88,88,87,86];
function K3Scene(){
  const t=useT('K3');
  const fp=MOTION.draw(t,.05,.57),landed=t>=.62;
  const fx=landed?300:lerp(420,300,fp),fy=landed?310:lerp(1020,310,fp);
  const hire=t>=1.6,pub=t>=1.95,live=MOTION.draw(t,2.0,.9);
  const segX=[32,182,418],segW=[150,236,150];
  return <Scene name="K3" next="K4"><Cam t={t} dur={3}>
    <Chrome t={t} side="FOR COMPANIES" step={3}/>
    <Headline t={t} size={76} lines={['Drop a JD.','Run a *challenge*.']} sub="AI already has your context. Upload a job description and run a challenge-based hiring pipeline."/>
    <UI>
      <Rise t={t} at={0} x={0} y={170} w={600} h={710} style={Object.assign({},cardS,{position:'absolute'})}></Rise>
      <Rise t={t} at={.04} x={32} y={188} w={536} style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}><span style={{font:'500 30px '+SERIF,color:VC.ink}}>New challenge</span><AiHead style={{fontSize:12}}>Has your context</AiHead></Rise>
      <Rise t={t} at={.06} x={32} y={250} w={536} h={120} style={{border:'2px dashed '+(landed?VC.blue:VC.blue2),borderRadius:18,background:'rgba(103,141,198,.05)',display:'grid',placeItems:'center',font:'500 18px '+SANS,color:VC.mute}}>{landed?'':'Drop a JD or describe the problem'}</Rise>
      <div style={{position:'absolute',left:fx,top:fy,transform:'translate(-50%,-50%) rotate('+(landed?0:-4)+'deg) scale('+(landed?1:1.04)+')',display:'flex',alignItems:'center',gap:12,background:'#fff',border:'1px solid '+VC.line,borderRadius:14,padding:'10px 16px 10px 10px',boxShadow:landed?'0 4px 12px rgba(0,0,0,.06)':'0 20px 40px -12px rgba(0,0,0,.3)',zIndex:40,opacity:MOTION.enter(t,0,.15),whiteSpace:'nowrap'}}>
        <div style={{width:40,height:46,borderRadius:8,background:VC.ink,color:'#fff',display:'grid',placeItems:'center',font:'800 12px '+SANS}}>PDF</div>
        <div><div style={{font:'600 17px '+SANS,color:VC.ink}}>Senior_Backend_Engineer_JD.pdf</div><div style={{font:'600 14px '+SANS,color:t>=.72?VC.pos:VC.faint,display:'flex',alignItems:'center',gap:5,marginTop:2}}>{t>=.72?<React.Fragment><Check s={14}/>Parsed with company context</React.Fragment>:'184 KB'}</div></div>
      </div>
      <Rise t={t} at={.78} x={32} y={394} style={{font:'700 13px '+SANS,letterSpacing:'.15em',color:VC.faint}}>TITLE</Rise>
      <div style={{position:'absolute',left:32,top:418,width:536,font:'500 28px/1.2 '+SERIF,color:VC.ink}}>{typed('Idempotent payments API under retries',(t-.8)/.4)}</div>
      <Rise t={t} at={.95} x={32} y={470} style={{font:'700 13px '+SANS,letterSpacing:'.15em',color:VC.faint}}>OVERVIEW</Rise>
      <Rise t={t} at={1.0} x={32} y={494} w={536} style={{font:'400 18px/1.45 '+SANS,color:VC.body}}>Build a payments endpoint that stays correct when clients retry, time out or double-submit.</Rise>
      {[['Effort','4–6 hrs'],['Window','5 days'],['Reward','$2,000']].map((f,i)=><Pop key={i} t={t} at={1.1+i*.07} x={32+i*183} y={572} w={170} h={78} style={{background:VC.field,borderRadius:14,padding:'12px 16px'}}><div style={{font:'600 14px '+SANS,color:VC.mute}}>{f[0]}</div><div style={{font:'700 21px '+SANS,color:VC.ink,marginTop:4}}>{f[1]}</div></Pop>)}
      <Rise t={t} at={1.2} x={32} y={672} style={{font:'700 13px '+SANS,letterSpacing:'.15em',color:VC.faint}}>PUBLISH AS</Rise>
      <Rise t={t} at={1.25} x={32} y={698} w={536} h={52} style={{background:VC.field,borderRadius:999,border:'1px solid '+VC.line}}>
        {hire?<div style={{position:'absolute',left:segX[1]-32+3,top:3,width:segW[1]-6,height:44,borderRadius:999,background:VC.ink,transform:'scale('+lerp(.8,1,MOTION.pop(t,1.6,.3))+')'}}></div>:null}
        {['Bounty','Hiring challenge','Job'].map((s,i)=><div key={i} style={{position:'absolute',left:segX[i]-32,top:0,width:segW[i],height:50,display:'grid',placeItems:'center',font:'600 17px '+SANS,color:hire&&i===1?'#fff':VC.mute}}>{s}</div>)}
      </Rise>
      <Rise t={t} at={1.3} x={32} y={780} w={536} h={60}><Btn dark style={{height:60,background:pub?VC.pos:VC.ink,borderColor:pub?VC.pos:VC.ink,transform:'scale('+(pub?lerp(.94,1,MOTION.pop(t,1.95,.3)):1)+')'}}>{pub?<React.Fragment><Check s={18}/>Published · Hiring challenge</React.Fragment>:'Publish challenge'}</Btn></Rise>
      <Rise t={t} at={.1} x={630} y={170} w={370} h={710} style={Object.assign({},cardS,{position:'absolute'})}>
        <div style={{position:'absolute',left:28,top:30,display:'flex',alignItems:'center',gap:10,font:'700 14px '+SANS,letterSpacing:'.15em',color:pub?VC.pos:VC.faint}}><i style={{display:'block',width:10,height:10,borderRadius:'50%',background:pub?VC.pos:VC.line,boxShadow:pub?'0 0 0 '+(4+3*Math.sin(t*9))+'px rgba(42,157,110,.18)':'none'}}></i>SHORTLISTED LIVE</div>
        <div style={{position:'absolute',left:28,top:66,font:'400 108px/1 '+SERIF,letterSpacing:'-.03em',color:pub?VC.ink:VC.line}}>{Math.round(24*live)}</div>
        <div style={{position:'absolute',left:30,top:180,font:'500 18px '+SANS,color:VC.mute}}>{pub?'gladiators from the arena':'Publish to open the arena'}</div>
        {K3_AV.map((a,i)=>{const at=2.02+i*.06;return <div key={i} style={{position:'absolute',left:28+(i%4)*80,top:250+Math.floor(i/4)*120,width:72,textAlign:'center'}}>
          <div style={{width:68,height:68,borderRadius:'50%',border:'2px dashed '+VC.line,position:'absolute',left:2,top:0,opacity:1-MOTION.enter(t,at,.15)}}></div>
          <Pop t={t} at={at} d={.32}><Av src={a?(a.indexOf('assets/')===0?a:'assets/'+a+'.png'):null} init={K3_IN[i]} size={68} bg="#eef1ee" style={{margin:'0 auto',fontSize:20,color:VC.body}}/><div style={{font:'700 15px '+SANS,color:VC.pos,marginTop:6}}>{K3_M[i]}%</div></Pop>
        </div>;})}
      </Rise>
      <Dot t={t} keys={[{t:.05,x:420,y:1020,down:1},{t:.62,x:300,y:310},{t:1.05,x:470,y:620},{t:1.6,x:300,y:724,c:1},{t:1.95,x:300,y:810,c:1},{t:2.6,x:520,y:1000,hide:1}]}/>
    </UI>
  </Cam></Scene>;
}

// ---------- K4 · top matches → candidate evidence ----------
const K4_C=[['Ryan Shaw','eng-4',97],['Adam Foster','eng-3',95],['Daniel Meyer','eng-5',93]];
const K4_R=[['Idempotency & retries',[2,2,1]],['Go in production',[2,2,2]],['PostgreSQL at scale',[2,1,2]],['Load testing',[2,1,1]],['Async collaboration',[2,2,1]]];
function K4Scene(){
  const t=useT('K4');const out=MOTION.draw(t,1.4,.3),hl=MOTION.enter(t,1.1,.25);
  const CX=j=>480+j*200;
  return <Scene name="K4" next="K5"><Cam t={t} dur={3}>
    <Chrome t={t} side="FOR COMPANIES" step={4}/>
    <Headline t={t} lines={['See the','*evidence*.']} sub="Top matches side by side with your JD, then the proof: challenges won, bounties earned, GitHub and LinkedIn signals."/>
    <UI>
      <div style={{position:'absolute',inset:0,opacity:1-out,transform:'translateX('+(-90*out)+'px) scale('+lerp(1,.94,out)+')',transformOrigin:'500px 540px'}}>
        <Rise t={t} at={0} x={0} y={170} w={1000} h={720} style={Object.assign({},cardS,{position:'absolute'})}></Rise>
        <div style={{position:'absolute',left:CX(0)-95,top:190,width:190,height:680,borderRadius:18,background:'rgba(103,141,198,.08)',border:'1.5px solid '+VC.blue,opacity:hl}}></div>
        <Rise t={t} at={.05} x={34} y={206}><AiHead>Top matches</AiHead><div style={{font:'500 17px '+SANS,color:VC.mute,marginTop:10}}>vs. Senior Backend Engineer JD</div></Rise>
        {K4_C.map((c,j)=><Pop key={j} t={t} at={.1+j*.07} x={CX(j)-90} y={206} w={180} style={{textAlign:'center'}}>
          <Av src={'assets/'+c[1]+'.png'} size={72} style={{margin:'0 auto',border:'3px solid #fff',boxShadow:'0 6px 16px rgba(0,0,0,.1)'}}/>
          <div style={{font:'700 18px '+SANS,color:VC.ink,marginTop:10}}>{c[0]}</div>
          <div style={{display:'inline-block',marginTop:6,font:'700 15px '+SANS,color:VC.deep,background:'rgba(103,141,198,.14)',borderRadius:999,padding:'4px 12px'}}>{c[2]}% match</div>
        </Pop>)}
        {K4_R.map((r,i)=><React.Fragment key={i}>
          <div style={{position:'absolute',left:30,right:30,top:400+i*92,height:1,background:VC.line}}></div>
          <Rise t={t} at={.25+i*.1} x={34} y={428+i*92} style={{font:'600 20px '+SANS,color:VC.ink}}>{r[0]}</Rise>
          {r[1].map((m,j)=><Pop key={j} t={t} at={.32+i*.1+j*.04} x={CX(j)-19} y={420+i*92} w={38} h={38} style={{borderRadius:'50%',display:'grid',placeItems:'center',background:m===2?'rgba(42,157,110,.13)':'rgba(201,138,58,.15)',color:m===2?VC.pos:'#b07424',font:'800 20px '+SANS}}>{m===2?<Check s={20}/>:'~'}</Pop>)}
        </React.Fragment>)}
      </div>
      <Rise t={t} at={1.5} d={.45} dy={50} x={40} y={150} w={920} h={800} style={Object.assign({},cardS,{position:'absolute'})}>
        <Av src="assets/eng-4.png" size={128} style={{position:'absolute',left:44,top:44,border:'4px solid #fff',boxShadow:'0 10px 26px rgba(0,0,0,.12)'}}/>
        <div style={{position:'absolute',left:200,top:54,font:'400 46px/1.05 '+SERIF,letterSpacing:'-.02em',color:VC.ink}}>Ryan Shaw</div>
        <div style={{position:'absolute',left:200,top:118,font:'400 19px '+SANS,color:VC.mute}}>Backend engineer · 6 yrs · Bengaluru · Remote</div>
        <div style={{position:'absolute',left:200,top:154,display:'flex',gap:8}}><Chip style={{fontSize:15,padding:'5px 12px'}}>Gold tier</Chip><Chip style={{fontSize:15,padding:'5px 12px'}}>Centurion badge</Chip><Chip style={{fontSize:15,padding:'5px 12px'}}>Fast submit streak</Chip></div>
        <div style={{position:'absolute',right:44,top:48,textAlign:'center'}}><Ring v={97} p={MOTION.draw(t,1.7,.7)} size={104} stroke={8}/><div style={{font:'600 15px '+SANS,color:VC.mute,marginTop:6}}>match</div></div>
        <div style={{position:'absolute',left:44,right:44,top:236,height:1,background:VC.line}}></div>
        {[['7','Challenges won',v=>Math.round(7*v)],['$12,400','Bounties earned',v=>money(12400*v)],['3','Hiring finals',v=>Math.round(3*v)],['#4','Global rank',v=>'#'+Math.max(4,Math.round(40-36*v))]].map((s,i)=>{const at=1.75+i*.08;const v=MOTION.draw(t,at,.6);return <Pop key={i} t={t} at={at} x={44+i*212} y={266} w={196} h={136} style={{background:i<2?'rgba(103,141,198,.09)':VC.field,border:'1px solid '+(i<2?'rgba(103,141,198,.35)':VC.line),borderRadius:18,padding:'20px 22px'}}>
          <div style={{font:'400 44px/1 '+SERIF,letterSpacing:'-.02em',color:i<2?VC.deep:VC.ink}}>{s[2](v)}</div><div style={{font:'600 16px '+SANS,color:VC.mute,marginTop:12}}>{s[1]}</div></Pop>;})}
        <Rise t={t} at={2.05} x={44} y={438} style={{font:'700 14px '+SANS,letterSpacing:'.15em',color:VC.faint}}>EXTERNAL SIGNALS</Rise>
        {[['</>',VC.ink,'GitHub','1,284 contributions this year','3 PRs merged into the Nimbus SDK'],['in','#0a66c2','LinkedIn','6 yrs backend in payments','Led retries and reconciliation at a Series B fintech']].map((g,i)=><Pop key={i} t={t} at={2.1+i*.1} x={44+i*424} y={474} w={408} h={176} style={Object.assign({},aiS,{padding:'22px 24px'})}>
          <div style={{display:'flex',alignItems:'center',gap:12}}><div style={{width:42,height:42,borderRadius:11,background:g[1],color:'#fff',display:'grid',placeItems:'center',font:'800 15px '+SANS}}>{g[0]}</div><span style={{font:'700 19px '+SANS,color:VC.ink}}>{g[2]}</span></div>
          <div style={{font:'600 20px/1.35 '+SANS,color:VC.ink,marginTop:16}}>{g[3]}</div><div style={{font:'400 17px/1.4 '+SANS,color:VC.mute,marginTop:4}}>{g[4]}</div>
        </Pop>)}
        <Rise t={t} at={2.35} x={44} y={684} w={832} h={76} style={{borderRadius:16,background:VC.field,display:'flex',alignItems:'center',gap:14,padding:'0 24px',font:'500 18px '+SANS,color:VC.ink}}><span style={{color:VC.blue,fontSize:20}}>✦</span>Won 2 of 3 retry-safety challenges. Strongest match on idempotency in the pool.</Rise>
      </Rise>
      <Dot t={t} keys={[{t:.3,x:700,y:1000},{t:1.22,x:CX(0),y:250,c:1},{t:1.8,x:620,y:960,hide:1}]}/>
    </UI>
  </Cam></Scene>;
}

// ---------- K5 · bounty pipeline with human placement override ----------
const K5_ST=[['Applied',63,'from the arena'],['Challenge',21,'33% of applied'],['Human interview',3,'14% of challenge']];
const K5_WHY=[['Applied','Stack matched 5 of 5 must-haves.'],['Challenge','Cleared the bar by 54%. p99 down from 840ms to 190ms.'],['Interview','Clear reasoning on trade-offs and failure modes.']];
function K5Scene(){
  const t=useT('K5');const s=MOTION.draw(t,1.35,.6);const ok=t>=2.3;
  const SY=k=>648+k*86;const prize=['$900','$375','$225'];
  const row=(n,av,ai,y,slot,drag)=><div style={{position:'absolute',left:110,right:20,top:y,height:76,borderRadius:16,background:drag?'#f3f6fb':'#fff',border:'1px solid '+(drag?VC.blue:VC.line),boxShadow:drag?'0 18px 40px -18px rgba(54,95,139,.55)':'none',display:'flex',alignItems:'center',gap:16,padding:'0 22px',zIndex:drag?5:1,transform:drag?'scale('+lerp(1,1.025,Math.sin(Math.PI*s))+')':'none'}}>
    <Av src={'assets/'+av+'.png'} size={50}/><span style={{font:'600 20px '+SANS,color:VC.ink,flex:1}}>{n}</span>
    <span style={{font:'600 15px '+SANS,color:VC.press,background:'rgba(103,141,198,.12)',borderRadius:999,padding:'5px 12px'}}>✦ AI score {ai}</span>
    <span style={{width:80,textAlign:'right',font:'700 20px '+SANS,color:VC.ink}}>{prize[slot]}</span>
    <span style={{width:30,display:'grid',gridTemplateColumns:'repeat(2,5px)',gap:4,justifyContent:'end'}}>{[0,1,2,3,4,5].map(i=><i key={i} style={{display:'block',width:5,height:5,borderRadius:'50%',background:VC.faint}}></i>)}</span>
  </div>;
  return <Scene name="K5" next="K6"><Cam t={t} dur={2.8}>
    <Chrome t={t} side="FOR COMPANIES" step={5}/>
    <Headline t={t} lines={['AI explains.','*You* decide.']} sub="Every cut comes with a reason. Reorder the tentative 1st, 2nd and 3rd after your own evaluation."/>
    <UI>
      <Rise t={t} at={0} x={0} y={150} style={{display:'flex',alignItems:'center',gap:16}}><span style={{font:'400 36px '+SERIF,letterSpacing:'-.02em',color:VC.ink}}>Cut p99 latency on the scheduler</span><Kind k="bounty" label="Bounty challenge"/></Rise>
      {K5_ST.map((st,i)=>{const at=.08+i*.14,on=MOTION.enter(t,at+.1,.25);return <Rise key={i} t={t} at={at} x={i*340} y={222} w={320} h={116} style={Object.assign({},cardS,{position:'absolute',padding:'18px 22px',borderColor:on>0&&i===2?VC.blue:VC.line})}>
        <div style={{font:'600 16px '+SANS,color:VC.mute}}>{st[0]}</div>
        <div style={{display:'flex',alignItems:'baseline',gap:10,marginTop:8}}><span style={{font:'400 42px/1 '+SERIF,color:VC.ink}}>{Math.round(st[1]*MOTION.draw(t,at,.5))}</span><span style={{font:'500 15px '+SANS,color:VC.mute}}>{st[2]}</span></div>
      </Rise>;})}
      <Rise t={t} at={.35} x={0} y={362} w={1000} h={190} style={Object.assign({},aiS,{position:'absolute',padding:'22px 28px'})}>
        <AiHead>Why Ryan made the cut</AiHead>
        {K5_WHY.map((w,i)=><Rise key={i} t={t} at={.45+i*.13} style={{display:'flex',alignItems:'center',gap:14,marginTop:i?10:16}}><span style={{width:120,flex:'none',font:'700 15px '+SANS,color:VC.deep}}>{w[0]}</span><span style={{font:'500 19px '+SANS,color:VC.ink}}>{w[1]}</span></Rise>)}
      </Rise>
      <Rise t={t} at={.5} x={0} y={572} w={1000} h={360} style={Object.assign({},cardS,{position:'absolute'})}></Rise>
      <Rise t={t} at={.55} x={28} y={594} style={{display:'flex',alignItems:'center',gap:14}}><span style={{font:'500 26px '+SERIF,color:VC.ink}}>Finalists</span><span style={{font:'600 15px '+SANS,color:ok?VC.pos:'#b07424',background:ok?'rgba(42,157,110,.1)':'rgba(201,138,58,.14)',borderRadius:999,padding:'5px 12px'}}>{ok?'Confirmed by your team':'Tentative · AI ranked'}</span></Rise>
      <Rise t={t} at={.6} x={760} y={588} w={212} h={46}><div style={{height:46,borderRadius:999,display:'flex',alignItems:'center',justifyContent:'center',gap:8,font:'600 16px '+SANS,background:ok?VC.pos:VC.ink,color:'#fff'}}>{ok?<React.Fragment><Check s={16}/>Placements set</React.Fragment>:'Confirm placements'}</div></Rise>
      {['1st','2nd','3rd'].map((l,k)=><Rise key={k} t={t} at={.62+k*.05} x={28} y={SY(k)+22} style={{font:'700 20px '+SANS,color:k===0?VC.gold:VC.mute}}>{l}</Rise>)}
      <Rise t={t} at={.7} x={0} y={0} w={1000} h={1080}>
        {row('Adam Foster','eng-3',91,SY(2),2,false)}
        {row('Nikita Babych','eng-6',96,lerp(SY(0),SY(1),s),s>.5?1:0,false)}
        {row('Ryan Shaw','eng-4',94,lerp(SY(1),SY(0),s),s>.5?0:1,s>0&&s<1)}
      </Rise>
      <Dot t={t} keys={[{t:.6,x:640,y:1010},{t:1.3,x:940,y:SY(1)+38,c:1,down:1},{t:1.95,x:940,y:SY(0)+38},{t:2.3,x:866,y:598,c:1},{t:2.9,x:880,y:620}]}/>
    </UI>
  </Cam></Scene>;
}

// ---------- K6 · funds: wallet → escrow → awaiting → released ----------
const K6_N=[['Stripe wallet','Add funds any time'],['Held in escrow','Secured before work starts'],['Awaiting release','Winners confirmed'],['Released','Paid to winners']];
function K6Scene(){
  const t=useT('K6');const NX=i=>110+i*260;
  const legs=[[.3,.3],[.85,.3],[1.92,.32]];
  let tx=NX(0),hop=0,stop=0;
  legs.forEach((l,i)=>{const p=MOTION.draw(t,l[0],l[1]);tx+=260*p;if(p>0&&p<1)hop=Math.sin(Math.PI*p);if(p>=1)stop=i+1;});
  const rel=t>=1.85,done=t>=2.24;
  const wallet=lerp(3650,2150,MOTION.enter(t,.3,.3)),released=lerp(4950,6450,MOTION.draw(t,2.2,.4));
  return <Scene name="K6" next="Outro"><Cam t={t} dur={2.8}>
    <Chrome t={t} side="FOR COMPANIES" step={6}/>
    <Headline t={t} size={70} lines={['The reward is','*secured* before','the work starts.']} sub="Funds move from your Stripe wallet into escrow and release only when you confirm the winners."/>
    <UI>
      <svg width="1000" height="400" style={{position:'absolute',left:0,top:0,overflow:'visible'}}>{[0,1,2].map(i=><line key={i} x1={NX(i)+110} y1={290} x2={NX(i)+110+40*MOTION.draw(t,.05+i*.06,.3)} y2={290} stroke={VC.blue2} strokeWidth="2.5" strokeDasharray="4 5"></line>)}</svg>
      {K6_N.map((n,i)=>{const lit=Math.round(stop)===i||(i===0&&t<.3);const val=i===0?money(wallet):i===3?money(released):i===1?'Escrow':'Pending';return <Rise key={i} t={t} at={i*.06} x={NX(i)-110} y={214} w={220} h={152} style={Object.assign({},cardS,{position:'absolute',padding:'18px 20px',borderColor:lit?VC.blue:VC.line,background:lit?'#f3f6fb':'#fff'})}>
        <div style={{display:'flex',alignItems:'center',gap:8,font:'700 16px '+SANS,color:VC.ink}}>{i===0?<img src={I("assets/stripe.svg")} alt="" style={{height:20}}/>:null}{n[0]}</div>
        <div style={{font:'400 30px/1 '+SERIF,color:i===3&&done?VC.pos:VC.ink,marginTop:14,letterSpacing:'-.02em'}}>{i===0||i===3?val:<span style={{fontSize:20,fontFamily:SANS,fontWeight:600,color:VC.mute}}>{lit?'$1,500 here':'—'}</span>}</div>
        <div style={{font:'500 14px '+SANS,color:VC.mute,marginTop:12}}>{n[1]}</div>
      </Rise>;})}
      <div style={{position:'absolute',left:tx,top:178-hop*46,transform:'translate(-50%,-50%) scale('+(1+.08*hop)+')',display:'flex',alignItems:'center',gap:8,background:done?VC.pos:VC.ink,color:'#fff',borderRadius:999,padding:'10px 18px',font:'700 19px '+SANS,boxShadow:'0 14px 30px -12px rgba(0,0,0,.4)',opacity:MOTION.enter(t,.1,.2),whiteSpace:'nowrap',zIndex:30}}>{done?<Check s={18}/>:null}$1,500</div>
      <Pop t={t} at={1.0} d={.42} x={0} y={420} w={1000} h={380} style={Object.assign({},cardS,{position:'absolute',padding:'30px 34px'})}>
        <div style={{display:'flex',alignItems:'center',gap:16}}><Av src="assets/lg-1.png" size={52} style={{border:'1px solid '+VC.line}}/><div><div style={{font:'500 30px '+SERIF,color:VC.ink}}>Cut p99 latency on the scheduler</div><div style={{font:'500 16px '+SANS,color:VC.mute,marginTop:4}}>Bounty · 38 attempts, 9 cleared the bar</div></div></div>
        <div style={{display:'flex',alignItems:'center',gap:20,marginTop:30}}>
          <div style={{font:'400 62px/1 '+SERIF,letterSpacing:'-.03em',color:VC.ink}}>$1,500</div><div style={{font:'600 17px '+SANS,color:VC.mute}}>Bounty reward</div>
          <span style={{marginLeft:'auto',font:'600 16px '+SANS,borderRadius:999,padding:'8px 16px',color:done?VC.pos:VC.gold,background:done?'rgba(42,157,110,.1)':'rgba(201,162,74,.16)'}}>{done?'Released to winners':'Winners confirmed, awaiting release'}</span>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:22,marginTop:34}}>
          {[['eng-4','Ryan · 1st','$900'],['eng-6','Nikita · 2nd','$375'],['eng-3','Adam · 3rd','$225']].map((w,i)=><div key={i} style={{display:'flex',alignItems:'center',gap:10}}><Av src={'assets/'+w[0]+'.png'} size={46}/><div><div style={{font:'600 16px '+SANS,color:VC.ink}}>{w[1]}</div><div style={{font:'700 15px '+SANS,color:done?VC.pos:VC.mute}}>{w[2]}</div></div></div>)}
          <div style={{marginLeft:'auto',display:'flex',gap:10}}>{done?<div style={{height:56,borderRadius:999,background:VC.pos,color:'#fff',display:'flex',alignItems:'center',gap:8,padding:'0 26px',font:'600 18px '+SANS,transform:'scale('+lerp(.9,1,MOTION.pop(t,2.24,.3))+')'}}><Check s={18}/>$1,500 released</div>:<React.Fragment><Btn dark style={{width:176,height:56,fontSize:17,background:rel?VC.blue:VC.ink,borderColor:rel?VC.blue:VC.ink}}>Release funds</Btn><Btn style={{width:170,height:56,fontSize:17,borderColor:VC.line}}>Open a dispute</Btn></React.Fragment>}</div>
        </div>
      </Pop>
      <Rise t={t} at={1.3} x={0} y={830} w={1000} style={{font:'500 17px '+SANS,color:VC.mute,display:'flex',gap:10}}><span style={{color:VC.blue}}>✦</span>A confirmed result left unreleased for 14 days is released to the winner automatically.</Rise>
      <Dot t={t} keys={[{t:1.0,x:560,y:1000},{t:1.85,x:698,y:688,c:1},{t:2.6,x:700,y:980,hide:1}]}/>
    </UI>
  </Cam></Scene>;
}

// ---------- Outro · footer arena ----------
function OutroScene(){
  const t=useT('Outro');const art=MOTION.enter(t,0,.9),fade=MOTION.enter(t,2.95,.25),cta=MOTION.enter(t,.6,.4),lg=MOTION.enter(t,1.0,.45);
  return <Scene name="Outro">
    <div style={{position:'absolute',inset:0,transform:'scale('+(1+.03*clamp(t/3.2,0,1))+')',transformOrigin:'960px 600px'}}>
      <Pop t={t} at={.05} d={.5} x={885} y={110} w={150} h={150}><img src={I("assets/gladiator-helmet.webp")} alt="" style={{width:150,height:150,display:'block'}}/></Pop>
      <Headline t={t} at={.2} x={0} w={1920} top={292} center size={116} lines={['Enter the *arena*.']}/>
      <div style={{position:'absolute',left:717,top:452,display:'flex',gap:16,opacity:cta,transform:'translateY('+((1-cta)*16)+'px)'}}><Btn dark style={{width:200,height:60}}>I'm hiring</Btn><Btn style={{width:270,height:60,background:'transparent'}}>I want to compete</Btn></div>
      <div style={{position:'absolute',left:0,right:0,top:574,display:'flex',flexDirection:'column',alignItems:'center',gap:14,opacity:lg,transform:'translateY('+((1-lg)*14)+'px)'}}><Logo size={28}/><div style={{font:'400 23px/1.3 '+SERIF,color:VC.em,letterSpacing:'-.01em'}}>AI problem solving competitions for the next generation of talent.</div></div>
      <div style={{position:'absolute',left:0,top:766,width:1920,opacity:art,transform:'translateY('+((1-art)*70)+'px)'}}>
        <ArenaArt t={t}/>
      </div>
    </div>
    <div style={{position:'absolute',inset:0,background:VC.paper,opacity:fade}}></div>
  </Scene>;
}

Object.assign(window,{SwitchScene,K1Scene,K2Scene,K3Scene,K4Scene,K5Scene,K6Scene,OutroScene});
