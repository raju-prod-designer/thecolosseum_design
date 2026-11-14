function IntroScene(){
  const t=useT('Intro');
  const z=MOTION.draw(t,2.42,.58);
  const words=[['Let'],['your'],['skills',1,','],['battle'],['for'],['you.']];
  const art=MOTION.enter(t,.05,.9),cta=MOTION.enter(t,.85,.4),sub=MOTION.enter(t,.6,.4);
  return <Scene name="Intro" next="C1">
    <div style={{position:'absolute',inset:0,transform:'scale('+lerp(1,2.6,z)+')',transformOrigin:'1068px 460px'}}>
      <div style={{position:'absolute',left:0,right:0,top:84,display:'flex',justifyContent:'center',opacity:MOTION.enter(t,0,.4)}}><Logo size={26}/></div>
      <div style={{position:'absolute',left:0,right:0,top:176,textAlign:'center',font:'400 104px/1 '+SERIF,letterSpacing:'-.035em',color:VC.ink}}>
        {words.map((w,i)=>{const p=MOTION.enter(t,.12+i*.07,.55);return <span key={i} style={{display:'inline-block',overflow:'hidden',padding:'0 .06em .14em',margin:'0 .1em -.14em',verticalAlign:'top'}}><span style={{display:'inline-block',transform:'translateY('+((1-p)*110)+'%)'}}>{w[1]?<em style={{fontStyle:'italic',color:VC.em}}>{w[0]}</em>:w[0]}{w[2]||''}</span></span>;})}
      </div>
      <div style={{position:'absolute',left:560,width:800,top:322,textAlign:'center',font:'400 25px/1.5 '+SANS,color:VC.body,opacity:sub,transform:'translateY('+((1-sub)*14)+'px)'}}>Meet in the arena, solve real challenges for bounties, and turn your skills into hiring opportunity.</div>
      <div style={{position:'absolute',left:717,top:430,display:'flex',gap:16,opacity:cta,transform:'translateY('+((1-cta)*16)+'px)'}}>
        <Btn dark style={{width:200,height:60}}>I'm hiring</Btn>
        <Btn style={{width:270,height:60,background:MOTION.enter(t,2.28,.15)>0?VC.ink:'transparent',color:MOTION.enter(t,2.28,.15)>0?'#fff':VC.ink,transform:'scale('+(1+.05*MOTION.pop(t,2.25,.3))+')'}}>I want to compete</Btn>
      </div>
      <div style={{position:'absolute',left:0,top:596,width:1920,opacity:art,transform:'translateY('+((1-art)*90)+'px)'}}>
        <ClashArt t={t}/>
      </div>
      <Dot t={t} keys={[{t:1.5,x:1580,y:880},{t:2.25,x:1130,y:472,c:1},{t:3.1,x:1130,y:472}]}/>
    </div>
  </Scene>;
}

// ---------- C1 · registration → skills graph ----------
const C1_ROWS=[{ic:'in',bg:'#0a66c2',n:'LinkedIn',s:'Roles & experience',at:.35},{ic:'</>',bg:VC.ink,n:'GitHub',s:'Repos & contributions',at:.75},{ic:'CV',bg:VC.blue,n:'Résumé',s:'resume_marcus_vela.pdf',at:1.15}];
const C1_NODES=[['Backend · 6 yrs',0,0],['PostgreSQL',1,0],['Distributed systems',2,0],['System design',0,1],['Go',1,1],['Kafka',2,1],['Payments',0,2],['API design',2,2],['Redis',1,2]];
const C1_LINKS=[[1,4],[4,7],[2,5],[5,8],[0,3],[3,6],[1,5],[7,2],[6,8]];
function C1Scene(){
  const t=useT('C1');const cx=745,cy=530;
  const nodes=C1_NODES.map((n,k)=>{const a=(-90+k*40)*Math.PI/180;return {l:n[0],g:n[1],x:cx+250*Math.cos(a),y:cy+232*Math.sin(a),at:C1_ROWS[n[1]].at+.1+n[2]*.07};});
  const B=MOTION.enter(t,1.5,.4),ready=MOTION.draw(t,1.75,.65);
  return <Scene name="C1" next="C2"><Cam t={t} dur={3}>
    <Chrome t={t} side="FOR CANDIDATES" step={1}/>
    <Headline t={t} out={1.38} lines={['Scouting your','*battlefield*…']} sub="Connect LinkedIn, GitHub and your résumé. Context comes first, questions only for the gaps."/>
    <Headline t={t} at={1.5} lines={['Preparing your','*arena*…']} sub="Your skills graph takes shape, so the arena can find the challenges that suit you best." subAt={1.7}/>
    <UI>
      <Rise t={t} at={0} x={0} y={357} w={420} h={366} style={Object.assign({},cardS,{position:'absolute'})}>
        <div style={{position:'absolute',left:28,top:24,font:'700 14px '+SANS,letterSpacing:'.15em',color:VC.faint}}>CONNECT YOUR EVIDENCE</div>
        {C1_ROWS.map((r,i)=>{const on=t>=r.at+.04,bp=MOTION.pop(t,r.at,.3);return <div key={i} style={{position:'absolute',left:0,right:0,top:70+i*92,height:92,borderTop:'1px solid '+VC.line,display:'flex',alignItems:'center',gap:16,padding:'0 22px'}}>
          <div style={{width:48,height:48,borderRadius:12,background:r.bg,color:'#fff',display:'grid',placeItems:'center',font:'800 17px '+SANS,flex:'none'}}>{r.ic}</div>
          <div style={{minWidth:0,flex:1}}><div style={{font:'700 19px '+SANS,color:VC.ink}}>{r.n}</div><div style={{font:'400 15px '+SANS,color:VC.mute,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',width:170}}>{r.s}</div></div>
          <div style={{position:'absolute',left:270,top:24,width:130,height:44,borderRadius:999,display:'flex',alignItems:'center',justifyContent:'center',gap:6,font:'600 15px '+SANS,background:on?'rgba(42,157,110,.1)':'#fff',color:on?VC.pos:VC.ink,border:'1px solid '+(on?'rgba(42,157,110,.3)':VC.blue2),transform:'scale('+(on?lerp(.85,1,bp):1)+')'}}>{on?<React.Fragment><Check s={16}/>Connected</React.Fragment>:'Connect'}</div>
        </div>;})}
      </Rise>
      <svg width="1000" height="1080" style={{position:'absolute',left:0,top:0,overflow:'visible'}}>
        {C1_LINKS.map((l,i)=>{const a=nodes[l[0]],b=nodes[l[1]],p=MOTION.draw(t,1.55+i*.04,.35);return <line key={'x'+i} x1={a.x} y1={a.y} x2={lerp(a.x,b.x,p)} y2={lerp(a.y,b.y,p)} stroke={VC.blue2} strokeWidth="1.6" strokeDasharray="5 6" opacity={p>0?.9:0}></line>;})}
        {nodes.map((n,i)=>{const p=MOTION.draw(t,n.at-.08,.3);return <line key={i} x1={cx} y1={cy} x2={lerp(cx,n.x,p)} y2={lerp(cy,n.y,p)} stroke={['#0a66c2',VC.ink,VC.blue][n.g]} strokeOpacity=".35" strokeWidth="2"></line>;})}
        {[0,1].map(k=>{const ph=t<1.5?0:((t-1.5+k*.45)%.9)/.9;return <circle key={k} cx={cx} cy={cy} r={66+ph*90} fill="none" stroke={VC.blue} strokeWidth="2" opacity={t<1.5?0:(1-ph)*.5*B}></circle>;})}
      </svg>
      <Pop t={t} at={.12} x={cx-62} y={cy-62} w={124} h={124} style={{borderRadius:'50%',padding:6,background:VC.wash+',#fff',boxShadow:'0 20px 50px -20px rgba(54,95,139,.5)'}}><Av src="assets/av/marcus-vela.jpg" size={112}/></Pop>
      {nodes.map((n,i)=><Pop key={i} t={t} at={n.at} x={n.x-110} y={n.y-24} w={220} h={48} style={{display:'flex',justifyContent:'center'}}>
        <span style={{display:'inline-flex',alignItems:'center',gap:9,height:48,padding:'0 18px',borderRadius:999,background:'#fff',border:'1px solid '+(t>1.55?VC.blue2:VC.line),boxShadow:'0 10px 26px -16px rgba(50,52,50,.4)',font:'600 18px '+SANS,color:VC.ink,whiteSpace:'nowrap'}}><i style={{display:'block',width:9,height:9,borderRadius:'50%',background:['#0a66c2',VC.ink,VC.blue][n.g]}}></i>{n.l}</span>
      </Pop>)}
      <Pop t={t} at={1.7} x={cx-270} y={860} w={540} h={60} style={Object.assign({},aiS,{borderRadius:999,display:'flex',alignItems:'center',justifyContent:'center',gap:10,font:'600 19px '+SANS,color:VC.ink})}>
        <span style={{color:VC.blue}}>✦</span>Skills graph ready · <b style={{color:VC.deep}}>{Math.round(18*ready)}</b> challenges matched
      </Pop>
      <Dot t={t} keys={[{t:.1,x:560,y:880},{t:.35,x:335,y:473,c:1},{t:.75,x:335,y:565,c:1},{t:1.15,x:335,y:657,c:1},{t:1.65,x:620,y:940,hide:1}]}/>
    </UI>
  </Cam></Scene>;
}

// ---------- C2 · soft-skill test ----------
const C2_OPTS=['Roll back, then talk to them','Fix it myself and move on','Wake the whole team','Write the postmortem first'];
const C2_SIG=[['Communication',86],['Collaboration',91],['Ownership',94],['Problem framing',88],['Resilience',82]];
function C2Scene(){
  const t=useT('C2');
  return <Scene name="C2" next="C3"><Cam t={t} dur={2.2}>
    <Chrome t={t} side="FOR CANDIDATES" step={2}/>
    <Headline t={t} lines={['Matched to how','you *work*.']} sub="A short soft-skill test reads your working style, so the culture fits as well as the code."/>
    <UI>
      <Rise t={t} at={0} x={60} y={170} w={860} h={790} style={Object.assign({},cardS,{position:'absolute'})}></Rise>
      <Rise t={t} at={.05} x={100} y={212}><AiHead>Soft-skill check · 3 of 5</AiHead></Rise>
      <Rise t={t} at={.1} x={100} y={254} w={760} style={{font:'400 33px/1.25 '+SERIF,letterSpacing:'-.02em',color:VC.ink}}>A teammate's fix breaks your service at 2am. What do you do first?</Rise>
      {C2_OPTS.map((o,i)=>{const sel=i===0&&t>=.52;const dim=i>0&&t>=.52;return <Rise key={i} t={t} at={.2+i*.05} x={100+(i%2)*400} y={360+Math.floor(i/2)*76} w={380} h={60} style={{borderRadius:999,display:'flex',alignItems:'center',justifyContent:'center',font:'600 18px '+SANS,background:sel?VC.ink:'#fff',color:sel?'#fff':VC.ink,border:'1px solid '+(sel?VC.ink:VC.line),opacity:dim?.45:undefined}}>{o}</Rise>;})}
      <div style={{position:'absolute',left:100,top:534,height:1,width:780*MOTION.draw(t,.7,.4),background:VC.line}}></div>
      <Rise t={t} at={.75} x={100} y={556} style={{font:'700 14px '+SANS,letterSpacing:'.15em',color:VC.faint}}>YOUR WORKING STYLE</Rise>
      {C2_SIG.map((s,i)=>{const p=MOTION.draw(t,.85+i*.08,.6);return <Rise key={i} t={t} at={.8+i*.06} x={100} y={598+i*56} w={780} h={40}>
        <div style={{position:'absolute',left:0,top:6,font:'600 19px '+SANS,color:VC.ink}}>{s[0]}</div>
        <div style={{position:'absolute',left:230,top:14,width:450,height:10,borderRadius:99,background:VC.field,overflow:'hidden'}}><div style={{width:(s[1]*p)+'%',height:'100%',borderRadius:99,background:VC.blue}}></div></div>
        <div style={{position:'absolute',right:0,top:6,font:'700 19px '+SANS,color:VC.ink}}>{Math.round(s[1]*p)}</div>
      </Rise>;})}
      <Rise t={t} at={1.55} x={100} y={884} style={{display:'flex',alignItems:'center',gap:10}}>
        <span style={{font:'600 16px '+SANS,color:VC.mute,marginRight:4}}>Best-fit teams</span>
        {['Async-first','High ownership','Small teams'].map((c,i)=><Pop key={i} t={t} at={1.6+i*.07}><Chip style={{borderColor:VC.blue2,color:VC.deep}}>{c}</Chip></Pop>)}
      </Rise>
      <Dot t={t} keys={[{t:.12,x:560,y:780},{t:.48,x:290,y:390,c:1},{t:1.1,x:430,y:1010,hide:1}]}/>
    </UI>
  </Cam></Scene>;
}

// ---------- C3 · Pulse feed ----------
const C3_POSTS=[
  {av:'assets/av/marcus-vela.jpg',n:'You',tm:'18m',x:'You moved up 4 places on the global leaderboard this week. Top 10% is 120 points away.',chips:['↑ 4 places','Top 10% · 120 pts away'],cta:'Find challenges to close the gap'},
  {av:'assets/lg-1.png',n:'Nimbus Labs',tm:'4h',v:1,x:"We're redesigning onboarding for 2M users. Best 3 ideas win $2,500 each. Written proposals only, 1 page max.",chips:['$2,500 × 3 winners','1 page max','Written proposals'],cta:'Submit an idea'},
  {av:'assets/eng-2.png',n:'Lucas M.',tm:'5h',x:'Lucas M. won $7,500 on Plugin Library Challenge. Payout released from escrow in 48 hours.',big:['$7,500','Released from escrow in 48h'],cta:'See winning submission'},
  {av:'assets/eng-4.png',n:'Ryan S.',tm:'1d',x:"Ryan S.'s pull request to our open-source SDK was merged into main. He earned $1,000 and a fast-track interview.",chips:['PR merged','$1,000 earned','Fast-track interview'],cta:'Browse open issues'},
  {mark:1,n:'theColosseum Arena',tm:'3h',x:'214 gladiators entered LLM Eval Harness in the first 24 hours. 38 submissions so far.',chips:['214 entered in 24h','38 submissions'],cta:'Join before it fills'},
];
function Post({p}){
  return <div style={{background:'#fff',border:'1px solid '+VC.line,borderRadius:18,padding:'22px 26px',display:'flex',flexDirection:'column',gap:14}}>
    <div style={{display:'flex',alignItems:'center',gap:14}}>
      {p.mark?<div style={{width:46,height:46,borderRadius:'50%',background:VC.field,display:'grid',placeItems:'center'}}><Mark s={22}/></div>:<Av src={p.av} size={46} style={{border:'1px solid '+VC.line}}/>}
      <div style={{font:'700 19px '+SANS,color:VC.ink}}>{p.n}</div><div style={{font:'400 16px '+SANS,color:VC.faint}}>· {p.tm}</div>
    </div>
    <div style={{font:'400 21px/1.45 '+SANS,color:VC.ink,textWrap:'pretty'}}>{p.x}</div>
    {p.big?<div style={{background:VC.field,borderRadius:14,padding:'16px 20px',display:'flex',alignItems:'baseline',gap:14}}><span style={{font:'400 40px/1 '+SERIF,color:VC.ink}}>{p.big[0]}</span><span style={{font:'500 17px '+SANS,color:VC.mute}}>{p.big[1]}</span></div>:null}
    {p.chips?<div style={{display:'flex',flexWrap:'wrap',gap:8}}>{p.chips.map((c,i)=><Chip key={i} style={{fontSize:16,padding:'6px 14px'}}>{c}</Chip>)}</div>:null}
    <div style={{font:'600 17px '+SANS,color:VC.blue}}>{p.cta} →</div>
  </div>;
}
function C3Scene(){
  const t=useT('C3');const sc=lerp(0,640,MOTION.draw(t,.3,1.25));
  return <Scene name="C3" next="C4"><Cam t={t} dur={2.2}>
    <Chrome t={t} side="FOR CANDIDATES" step={3}/>
    <Headline t={t} lines={['Your *Pulse*.']} size={96} sub="A customised feed of opportunities and updates from across the Colosseum."/>
    <UI>
      <Rise t={t} at={0} x={130} y={140} w={720} h={870} style={Object.assign({},cardS,{position:'absolute',overflow:'hidden',background:VC.field})}>
        <div style={{position:'absolute',left:0,right:0,top:96,padding:'0 22px',display:'flex',flexDirection:'column',gap:16,transform:'translateY('+(-sc)+'px)'}}>{C3_POSTS.map((p,i)=><Post key={i} p={p}/>)}</div>
        <div style={{position:'absolute',left:0,right:0,top:0,height:84,background:'#fff',borderBottom:'1px solid '+VC.line,display:'flex',alignItems:'center',gap:20,padding:'0 26px'}}>
          <span style={{font:'500 30px '+SERIF,color:VC.ink,marginRight:'auto'}}>Pulse</span>
          <Chip on style={{fontSize:16}}>For you</Chip><Chip style={{fontSize:16}}>Following</Chip><Chip style={{fontSize:16}}>Arena</Chip>
        </div>
        <div style={{position:'absolute',left:0,right:0,bottom:0,height:120,background:'linear-gradient(rgba(244,244,243,0),'+VC.field+')'}}></div>
      </Rise>
      <Dot t={t} keys={[{t:.1,x:640,y:960},{t:.3,x:560,y:820,c:1,down:1},{t:1.55,x:560,y:400},{t:2.0,x:760,y:560,hide:1}]}/>
    </UI>
  </Cam></Scene>;
}

// ---------- C4 · challenges & jobs ----------
const C4_CARDS=[
  {k:'bounty',logo:'assets/lg-1.png',prize:'$5,000',t:'Design a fault-tolerant job queue with at-least-once delivery',s:['Go','Redis','PostgreSQL'],m:96,foot:'4–6 hrs · Bounty paid on the result'},
  {k:'hiring',logo:'assets/lg-2.png',prize:'$4,500',t:'Model failure modes for a payment retry flow',s:['TypeScript','PostgreSQL'],m:93,ribbon:'Fast-track to interview'},
  {k:'job',logo:'assets/lg-3.png',type:'Remote',t:'Senior Backend Engineer, Payments',s:['Go','PostgreSQL','Kafka'],m:89,foot:'From the Jobs tab'},
];
function C4Scene(){
  const t=useT('C4');const sw=MOTION.draw(t,1.45,.3);
  return <Scene name="C4" next="C5"><Cam t={t} dur={3}>
    <Chrome t={t} side="FOR CANDIDATES" step={4}/>
    <Headline t={t} size={72} lines={['Hunt bounties.','Crack problems.','Get *fast-tracked*.']} sub="Bounties, hiring challenges and jobs, all prefiltered to suit your profile."/>
    <UI>
      <Rise t={t} at={0} x={0} y={250} w={290} h={54} style={{background:VC.field,border:'1px solid '+VC.line,borderRadius:999}}>
        <div style={{position:'absolute',top:4,left:lerp(4,150,sw),width:lerp(142,134,sw),height:44,borderRadius:999,background:'#fff',boxShadow:'0 1px 4px rgba(0,0,0,.1)'}}></div>
        <div style={{position:'absolute',left:4,top:4,width:142,height:44,display:'grid',placeItems:'center',font:'600 18px '+SANS,color:sw<.5?VC.ink:VC.mute}}>Challenges</div>
        <div style={{position:'absolute',left:150,top:4,width:134,height:44,display:'grid',placeItems:'center',font:'600 18px '+SANS,color:sw>=.5?VC.ink:VC.mute}}>Jobs</div>
      </Rise>
      <Pop t={t} at={1.85} x={640} y={250} w={360} h={54} origin="right center" style={Object.assign({},aiS,{borderRadius:999,display:'flex',alignItems:'center',justifyContent:'center',gap:10,font:'600 18px '+SANS,color:VC.ink})}><span style={{color:VC.blue}}>✦</span>Prefiltered for your profile</Pop>
      {C4_CARDS.map((c,i)=>{const at=[.12,.28,1.55][i];const p=MOTION.pop(t,at,.45),o=MOTION.enter(t,at,.2);const hl=i===1?MOTION.enter(t,2.3,.3):0;const rp=MOTION.draw(t,1.95+i*.08,.6);
        return <div key={i} style={Object.assign({},cardS,{left:i*335,top:340,width:310,height:430,padding:'26px 26px 24px',display:'flex',flexDirection:'column',gap:18,opacity:o,transform:'translateY('+((1-p)*80-hl*14)+'px) rotate('+((1-p)*(i-1)*4)+'deg)',borderColor:hl>0?VC.blue:VC.line,boxShadow:hl>0?'0 40px 80px -36px rgba(54,95,139,.55)':cardS.boxShadow})}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:8}}>
            <Av src={c.logo} size={52} style={{border:'1px solid '+VC.line}}/>
            <div style={{display:'flex',gap:6}}>{c.prize?<Prize>{c.prize}</Prize>:<span style={{font:'600 15px '+SANS,color:VC.mute,background:VC.field,border:'1px solid '+VC.line,borderRadius:999,padding:'6px 13px'}}>{c.type}</span>}<Kind k={c.k} label={c.k==='hiring'?'Hiring':null}/></div>
          </div>
          <div style={{font:'500 25px/1.3 '+SERIF,letterSpacing:'-.01em',color:VC.ink,textWrap:'pretty'}}>{c.t}</div>
          <div style={{display:'flex',flexWrap:'wrap',gap:7}}>{c.s.map((s,j)=><span key={j} style={{font:'600 14px '+SANS,color:VC.body,background:'#eef1ee',borderRadius:7,padding:'5px 10px'}}>{s}</span>)}</div>
          <div style={{marginTop:'auto',display:'flex',alignItems:'center',gap:14}}>
            <Ring v={c.m} p={rp} size={60}/>
            <div style={{font:'600 15px/1.35 '+SANS,color:VC.mute}}>{c.ribbon?<span style={{display:'inline-block',font:'700 15px '+SANS,color:'#fff',background:VC.deep,borderRadius:8,padding:'6px 10px'}}>{c.ribbon}</span>:c.foot}</div>
          </div>
        </div>;})}
      <Dot t={t} keys={[{t:.2,x:760,y:980},{t:.85,x:170,y:600},{t:1.45,x:220,y:277,c:1},{t:2.3,x:600,y:735},{t:3.1,x:610,y:745}]}/>
    </UI>
  </Cam></Scene>;
}

// ---------- C5 · my applications (hiring challenge) ----------
const C5_ST=[['Applied','Matched 9 of 10 must-haves from your profile.'],['AI screen','Cleared every hard gate. Top 12% of 214.'],['Challenge','Scored 94. Edge-case handling set you apart.'],['AI interview','Strong on trade-offs. Probe next: load testing.'],['Human interview','Passed with the hiring panel.']];
function C5Scene(){
  const t=useT('C5');const X=i=>110+i*195,rt=i=>.35+i*.3;
  let fill=X(0);for(let i=0;i<4;i++)fill+=195*MOTION.draw(t,rt(i)+.02,.28);
  const win=t>=1.62;
  return <Scene name="C5" next="C6"><Cam t={t} dur={2.8}>
    <Chrome t={t} side="FOR CANDIDATES" step={5}/>
    <Headline t={t} lines={['Every stage,','*explained*.']} sub="My applications shows an AI insight for each hiring stage, drawn from your own data."/>
    <UI>
      <Rise t={t} at={0} x={0} y={168} style={{display:'flex',alignItems:'center',gap:18}}><span style={{font:'400 42px '+SERIF,letterSpacing:'-.02em',color:VC.ink}}>My applications</span><Chip on style={{fontSize:16}}>Hiring challenges</Chip></Rise>
      <Rise t={t} at={.05} x={0} y={250} w={1000} h={700} style={Object.assign({},cardS,{position:'absolute'})}></Rise>
      <Rise t={t} at={.1} x={36} y={282} style={{display:'flex',alignItems:'center',gap:16}}><Av src="assets/lg-2.png" size={52} style={{border:'1px solid '+VC.line}}/><div><div style={{font:'500 26px '+SERIF,color:VC.ink}}>Model failure modes for a payment retry flow</div><div style={{display:'flex',alignItems:'center',gap:10,marginTop:6}}><Kind k="hiring"/><span style={{font:'500 16px '+SANS,color:VC.mute}}>Signing bonus on hire</span></div></div></Rise>
      <div style={{position:'absolute',left:X(0),top:438,width:X(4)-X(0),height:4,borderRadius:4,background:VC.line}}></div>
      <div style={{position:'absolute',left:X(0),top:438,width:fill-X(0),height:4,borderRadius:4,background:win?VC.pos:VC.blue}}></div>
      {C5_ST.map((s,i)=>{const on=t>=rt(i),p=MOTION.pop(t,rt(i),.3),g=i===4&&win;return <React.Fragment key={i}>
        <div style={{position:'absolute',left:X(i)-24,top:416,width:48,height:48,borderRadius:'50%',display:'grid',placeItems:'center',font:'700 18px '+SANS,background:g?VC.pos:on?VC.blue:'#fff',color:on?'#fff':VC.faint,border:'2px solid '+(g?VC.pos:on?VC.blue:VC.line),transform:'scale('+(on?lerp(.7,1,p):1)+')'}}>{g||(on&&i<4&&t>=rt(i+1))?<Check s={20}/>:i+1}</div>
        <div style={{position:'absolute',left:X(i)-95,top:478,width:190,textAlign:'center',font:'600 17px '+SANS,color:on?VC.ink:VC.faint}}>{s[0]}</div>
        <Pop t={t} at={rt(i)+.06} x={X(i)-90} y={520} w={180} h={176} origin="top center" style={Object.assign({},aiS,{padding:'14px 16px',background:g?'rgba(42,157,110,.08)':aiS.background,borderColor:g?'rgba(42,157,110,.28)':aiS.border})}>
          <div style={{font:'700 12px '+SANS,letterSpacing:'.13em',color:g?VC.pos:VC.press,marginBottom:8}}>✦ AI INSIGHT</div>
          <div style={{font:'500 17px/1.38 '+SANS,color:VC.ink}}>{s[1]}</div>
        </Pop>
      </React.Fragment>;})}
      <Pop t={t} at={1.82} d={.45} x={36} y={736} w={928} h={180} style={{borderRadius:20,background:'rgba(42,157,110,.07)',border:'1px solid rgba(42,157,110,.26)',display:'flex',alignItems:'center',gap:28,padding:'0 34px'}}>
        <img src={I("assets/purse.webp")} alt="" style={{width:132,height:121,objectFit:'contain',flex:'none'}}/>
        <div><div style={{font:'700 14px '+SANS,letterSpacing:'.15em',color:VC.pos}}>HUMAN INTERVIEW · PASSED</div><div style={{font:'400 40px/1.15 '+SERIF,letterSpacing:'-.02em',color:VC.ink,marginTop:8}}>Offer extended · <em style={{fontStyle:'italic',color:VC.pos}}>$2,000</em> signing bonus</div><div style={{font:'400 18px '+SANS,color:VC.mute,marginTop:8}}>Held in escrow, paid after a successful hire.</div></div>
      </Pop>
      <Dot t={t} keys={[{t:.2,x:640,y:1010},{t:1.6,x:X(4),y:440,c:1},{t:2.5,x:820,y:1000,hide:1}]}/>
    </UI>
  </Cam></Scene>;
}

// ---------- C6 · leaderboard climb ----------
const C6_ROWS=[['Owen Gallagher',133085,'p'],['Dieter Brandt',124482,'p'],['Sophie Laurent',111113,'p'],['Nikita Babych',105498,'g'],['Eduardo Rocha',93473,'g'],['Emma Collins',93203,'g'],['Lukas Weber',92559,'g'],['Anya Volkova',88140,'g'],['Samuel Brooks',84902,'b']];
const TIER={p:'linear-gradient(135deg,#dfe3e8,#a7adba)',g:'linear-gradient(135deg,#e6c200,#b8901a)',b:'linear-gradient(135deg,#cd7f32,#a9691f)'};
const TIER_N={p:'Platinum',g:'Gold',b:'Bronze'};
const C6_TIPS=[[.15,.95,'Two wins on gold-tier briefs clear the gap to #6.','+12,137 pts'],[1.02,1.88,'Submit under 50% of the time limit to unlock the speed multiplier.','+27,450 pts'],[1.95,9,'Top of the board. Platinum briefs are now unlocked.','#1 global']];
function LbRow({rank,name,av,init,tier,pts,me}){
  return <div style={{position:'absolute',left:0,right:0,height:70,display:'flex',alignItems:'center',padding:'0 30px',gap:16}}>
    <div style={{width:54,font:'700 20px '+SANS,color:me?VC.deep:VC.ink}}>#{rank}</div>
    <Av src={av} init={init} size={44} bg={me?undefined:'#eef1ee'} style={{fontSize:15,color:VC.body}}/>
    <div style={{flex:1,minWidth:0,font:'600 20px '+SANS,color:VC.ink,whiteSpace:'nowrap'}}>{name}{me?<span style={{marginLeft:10,font:'700 13px '+SANS,color:'#fff',background:VC.blue,borderRadius:6,padding:'3px 8px'}}>YOU</span>:null}</div>
    <div style={{width:130,display:'flex',alignItems:'center',gap:8,font:'500 16px '+SANS,color:VC.mute}}><i style={{display:'block',width:14,height:14,borderRadius:'50%',background:TIER[tier]}}></i>{TIER_N[tier]}</div>
    <div style={{width:110,textAlign:'right',font:'700 19px '+SANS,color:VC.ink}}>{Math.round(pts).toLocaleString('en-US')}</div>
  </div>;
}
function C6Scene(){
  const t=useT('C6');
  const my=9-4*MOTION.draw(t,.4,.6)-5*MOTION.draw(t,1.25,.7);
  const Y=d=>212+d*70;
  return <Scene name="C6" next="Switch"><Cam t={t} dur={2.6}>
    <Chrome t={t} side="FOR CANDIDATES" step={6}/>
    <Headline t={t} lines={['Climb the','*leaderboard*.']} sub="AI insights evolve with every submission and take your ranking from #10 to #1."/>
    <UI>
      <Rise t={t} at={0} x={0} y={140} w={700} h={800} style={Object.assign({},cardS,{position:'absolute',overflow:'hidden'})}>
        <div style={{position:'absolute',left:30,right:30,top:26,display:'flex',font:'700 13px '+SANS,letterSpacing:'.14em',color:VC.faint}}><span style={{width:70}}>RANK</span><span style={{flex:1,paddingLeft:60}}>GLADIATOR</span><span style={{width:130}}>TIER</span><span style={{width:110,textAlign:'right'}}>POINTS</span></div>
        <div style={{position:'absolute',left:0,right:0,top:-140}}>
          {C6_ROWS.map((r,i)=>{const d=i+clamp(i+1-my,0,1);return <div key={i} style={{position:'absolute',left:0,right:0,top:Y(d),borderTop:'1px solid #f0efea'}}><LbRow rank={Math.round(d)+1} name={r[0]} av={PV(r[0])} init={r[0].split(' ').map(s=>s[0]).join('')} tier={r[2]} pts={r[1]}/></div>;})}
          <div style={{position:'absolute',left:10,right:10,top:Y(my),height:70,borderRadius:14,background:'#f3f6fb',border:'1.5px solid '+VC.blue,boxShadow:'0 18px 40px -18px rgba(54,95,139,.55)',transform:'scale(1.02)'}}>
            <div style={{position:'absolute',left:-10,right:-10,top:0}}><LbRow me rank={Math.round(my)+1} name="Marcus Vela" av="assets/av/marcus-vela.jpg" tier={my<.5?'p':'g'} pts={lerp(81336,134210,(9-my)/9)}/></div>
          </div>
        </div>
      </Rise>
      {C6_TIPS.map((tp,i)=>{const o=MOTION.enter(t,tp[0],.2)*(1-MOTION.enter(t,tp[1],.14));const p=MOTION.pop(t,tp[0],.35);return <div key={i} style={Object.assign({},aiS,{position:'absolute',left:730,top:Y(my)-34,width:270,padding:'16px 18px',opacity:o,transform:'scale('+lerp(.8,1,p)+')',transformOrigin:'left center',boxShadow:'0 20px 50px -26px rgba(54,95,139,.5)'})}>
        <div style={{display:'flex',justifyContent:'space-between',font:'700 12px '+SANS,letterSpacing:'.12em',color:VC.press}}><span>✦ AI INSIGHT</span><span style={{color:VC.pos,letterSpacing:0,fontSize:14}}>{tp[3]}</span></div>
        <div style={{font:'500 18px/1.38 '+SANS,color:VC.ink,marginTop:8}}>{tp[2]}</div>
      </div>;})}
    </UI>
  </Cam></Scene>;
}

Object.assign(window,{IntroScene,C1Scene,C2Scene,C3Scene,C4Scene,C5Scene,C6Scene});
