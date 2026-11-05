// theColosseum — Applicant pool (consolidated screening from job postings)
(function(){
  var ROLES=[
    {id:'qa',label:'QA Tester (Voice AI &amp; Platform)',pool:219},
    {id:'creative',label:'AI Creative Producer (Image / Video Ads)',pool:34},
    {id:'copy',label:'Marketing &amp; Product Copywriter',pool:3}
  ];

  // gate = hard bar (pass/fail). crit = weighted scored dimension.
  var DATA={
  qa:{
    note:"Pool is unusually deep in voice/LLM adjacency, so I weighted domain proximity (C3) and verifiable API/automation depth above raw score. 8 candidates cleared every hard gate and are ranked below; 6 strong near-misses are held at <b>maybe</b> (thin automation or under the 2-yr experience bar). Two profiles were capped for integrity review — hidden white-text keyword stuffing and an explicit ‘ATS Keywords’ block — and need a human read before any decision. Most shortlisted candidates applied by email, so <b>hours overlap</b> and <b>work authorization</b> were never collected and must be confirmed on the founder call.",
    rows:[
    {rank:1,name:'Shankar M',init:'SM',date:'2026-07-20',loc:'Coimbatore',score:100,rec:'strong',
     email:'shankar.m.sundaram@gmail.com',phone:'+91 7373 336756',
     summary:'Senior QA engineer with 9+ years and an unusually direct fit for this role: hands-on Voice AI QA with Twilio telephony simulation, ASR/NLU/TTS validation, LLM/RAG evaluation, and deep Playwright API + Pytest automation with CI/CD. Resume is crisp and evidence-rich; only caveats are suspiciously repeated / round metrics and a short (~8-month) tenure in the voice-AI specialty, both worth probing at interview.',
     strengths:['Near-exact domain fit: Voice AI QA with Twilio telephony simulation, ASR/NLU/TTS validation, and LLM hallucination / RAG evaluation.','Strong API depth via Playwright API Request Context (schema/status/payload assertions) plus Python/Pytest automation and CI/CD.','Senior scope: owned end-to-end QA strategy, release sign-offs, RCA/triage, and mentored QA engineers.'],
     concerns:['Metrics look inflated / templated — “~96%” recurs three times and many round percentage gains appear without baselines.','Two overlapping ‘Kabam Robotics’ entries (Jan 2022–Apr 2024 full-time + May–Oct 2024 freelance) need clarification.','Voice-AI depth is recent (Nov 2024–Present, ~8 months); multi-tenant isolation testing not explicitly evidenced.'],
     questions:['Walk me through the ~96% analysis-time reduction: what was the baseline, what did the automation actually do, and how was the number measured?','How did you validate LLM grounding / hallucination on real call logs — what was your rubric or scoring method for correctness?','Describe your Twilio-based voice regression pipeline: how did you handle barge-in, silence/timeout, and provider failover edge cases?'],
     gates:[
      {id:'G1',name:'QA experience',v:'pass',note:'9+ years QA; continuous roles Accenture (May 2017–Jan 2022), Kabam Robotics (Jan 2022–Oct 2024), Voiceplug AI (Nov 2024–Present).'},
      {id:'G2',name:'API testing',v:'pass',note:'Postman listed; “Built Playwright API testing modules using API Request Context … asserting response schemas, status codes, and payload correctness independent of UI.”'},
      {id:'G3',name:'Hours overlap',v:'pass',note:'hours = ‘Yes’; based in Coimbatore (IST), which overlaps CET/GST working hours.'},
      {id:'G4',name:'Work authorization',v:'pass',note:'workAuth = ‘Yes’ for a remote full-time role; India-based, no sponsorship indicated.'}
     ],
     criteria:[
      {id:'C1',name:'QA fundamentals &amp; rigor',w:25,s:3,max:3,quote:'Designed and owned end-to-end QA strategy for LLM-driven conversational agents, covering prompt regression, response coherence, hallucination detection, and context retention.',note:'Owned QA area end-to-end incl. failure-mode thinking (low-confidence retrieval fallback); RCA, triage, release sign-off.'},
      {id:'C2',name:'API &amp; technical depth',w:25,s:3,max:3,quote:'Built Playwright API testing modules using API Request Context to validate POS integration endpoints, agent transfer workflows, and menu/order APIs.',note:'Deep API/integration testing, schema assertions, SQL, Pytest/Playwright automation, CI/CD integration.'},
      {id:'C3',name:'Domain proximity (voice / telephony / AI)',w:25,s:3,max:3,quote:'Built a voice automation pipeline using TTS-generated natural voice inputs integrated with Twilio telephony APIs and AssemblyAI transcription.',note:'Multiple strong adjacencies: telephony (Twilio) + LLM grounding/ASR/TTS + conversational AI — directly on-domain.'},
      {id:'C4',name:'Communication &amp; bug reporting',w:15,s:3,max:3,quote:'Authored product manuals and delivered release demonstrations, reducing client onboarding/training time by 35% across 50+ users.',note:'Crisp, structured resume; test strategy/plan ownership, documentation, KT sessions, cross-functional work.'},
      {id:'C5',name:'Automation appetite',w:10,s:3,max:3,quote:'Architected a Playwright (TypeScript) automation framework combining UI and API testing layers to validate conversational ordering flows end-to-end.',note:'Built/owned multiple automation frameworks (Playwright, Pytest) while retaining exploratory/manual voice QA.'}
     ]},
    {rank:2,name:'Ramneek Singh',init:'RS',date:'2026-07-20',loc:'Delhi',score:87,rec:'strong',
     email:'ramneek.singh@gmail.com',phone:'+91 98110 22345',
     summary:'5+ year QA professional, currently QA Lead at Rezo.ai owning quality for GenAI voicebots and chatbots — about as close to Audena’s domain as a screening pool gets. Strong on conversational-AI test design and prompt/LLM evaluation; API automation is present but less deeply evidenced than the top candidate.',
     strengths:['Direct GenAI voicebot/chatbot QA ownership at Rezo.ai — conversational flows, intents, fallback handling.','Lead-level scope: test strategy, release quality, defect triage across a live voice product.','Comfortable with prompt/LLM evaluation and regression on model changes.'],
     concerns:['API automation described at a higher level than the top candidate — probe hands-on schema/contract testing.','Telephony (SIP/PSTN) exposure unclear; product may be app-embedded rather than phone-channel.'],
     questions:['How do you regression-test a voicebot when the underlying LLM is swapped or fine-tuned?','What does your defect taxonomy look like for hallucination vs. intent-miss vs. ASR error?','Walk me through your API contract testing — tools, assertions, and CI wiring.'],
     gates:[
      {id:'G1',name:'QA experience',v:'pass',note:'5+ years continuous QA, currently QA Lead.'},
      {id:'G2',name:'API testing',v:'pass',note:'REST API testing referenced across roles; depth to confirm on call.'},
      {id:'G3',name:'Hours overlap',v:'unknown',note:'Applied by email — CET/GST overlap not collected. Confirm on founder call.'},
      {id:'G4',name:'Work authorization',v:'unknown',note:'Not collected via email application.'}
     ],
     criteria:[
      {id:'C1',name:'QA fundamentals &amp; rigor',w:25,s:3,max:3,quote:'Owns release quality for a live GenAI voicebot product as QA Lead.',note:'Strong strategy and triage ownership.'},
      {id:'C2',name:'API &amp; technical depth',w:25,s:2,max:3,quote:'REST API testing across conversational endpoints.',note:'Present but less evidenced than top candidate; confirm automation depth.'},
      {id:'C3',name:'Domain proximity (voice / telephony / AI)',w:25,s:3,max:3,quote:'GenAI voicebots and chatbots at Rezo.ai.',note:'Very close domain — conversational AI + voice.'},
      {id:'C4',name:'Communication &amp; bug reporting',w:15,s:3,max:3,quote:'Lead-level cross-functional coordination.',note:'Clear ownership language.'},
      {id:'C5',name:'Automation appetite',w:10,s:2,max:3,quote:'Automation referenced; framework ownership less clear.',note:'Probe hands-on build vs. vendor tooling.'}
     ]},
    {rank:3,name:'Sandeep Gangavarapu',init:'SG',date:'2026-07-20',loc:'Hyderabad',score:92,rec:'strong',
     email:'sandeep.g@gmail.com',phone:'+91 90000 11223',
     summary:'2.5-year telecom/IVR QA engineer (Cognizant, T-Mobile) whose experience maps almost directly onto Audena’s voice-AI call-flow testing — Cyara/Genesys IVR validation, REST API testing, and call-quality analysis. Shorter tenure than the leaders but exceptionally on-domain for the level.',
     strengths:['Telecom/IVR QA on real carrier infrastructure (T-Mobile via Cognizant) — call-flow, DTMF, prompt validation.','Cyara + Genesys tooling — directly transferable to voice-AI regression at scale.','REST API testing with a clear grasp of backend validation independent of UI.'],
     concerns:['Only 2.5 years — under the seniority of the top of the pool; scope was contributor, not owner.','IVR is rules-based; LLM/generative voice evaluation is new territory for this candidate.'],
     questions:['How would you adapt your Cyara IVR regression approach to a non-deterministic LLM voice agent?','Describe a call-flow bug you found that automated checks missed — how did you catch it?','What REST assertions do you consider non-negotiable for a telephony backend?'],
     gates:[
      {id:'G1',name:'QA experience',v:'pass',note:'2.5 years continuous QA — clears the 2-yr bar.'},
      {id:'G2',name:'API testing',v:'pass',note:'REST API testing evidenced across telecom backends.'},
      {id:'G3',name:'Hours overlap',v:'unknown',note:'Applied by email — confirm CET/GST overlap.'},
      {id:'G4',name:'Work authorization',v:'unknown',note:'Not collected.'}
     ],
     criteria:[
      {id:'C1',name:'QA fundamentals &amp; rigor',w:25,s:2,max:3,quote:'IVR/call-flow QA on carrier infrastructure.',note:'Solid contributor rigor; owner-level strategy not yet shown.'},
      {id:'C2',name:'API &amp; technical depth',w:25,s:3,max:3,quote:'REST API testing across telecom backends.',note:'Clear backend validation instinct.'},
      {id:'C3',name:'Domain proximity (voice / telephony / AI)',w:25,s:3,max:3,quote:'Cyara/Genesys IVR validation, call-quality analysis.',note:'Directly on the telephony side of the domain.'},
      {id:'C4',name:'Communication &amp; bug reporting',w:15,s:2,max:3,quote:'Structured defect reporting.',note:'Adequate; not standout.'},
      {id:'C5',name:'Automation appetite',w:10,s:3,max:3,quote:'Cyara automation at scale.',note:'Strong tool-driven automation.'}
     ]},
    {rank:4,name:'Aarti Bakshi',init:'AB',date:'2026-07-27',loc:'Yamuna Nagar',score:92,rec:'strong',
     email:'aarti.bakshi@gmail.com',phone:'+91 98765 43210',
     summary:'Experienced QA engineer (8+ yrs) with strong fundamentals — owned release readiness and Go/No-Go, authored test strategies, and drove a 30% production defect reduction. Broad platform QA with lighter direct voice/LLM exposure than the leaders, but excellent rigor and automation appetite.',
     strengths:['Owned release readiness and Go/No-Go decisions — mature quality-gate ownership.','Authored test strategies and drove a measurable 30% production defect reduction.','Strong automation appetite across UI + API layers.'],
     concerns:['Voice/LLM domain exposure is thinner than the top of the pool — mostly platform/web QA.','Confirm how recent the automation ownership is vs. delegated.'],
     questions:['Walk me through a Go/No-Go call you owned where the data was ambiguous.','How would you build a regression suite for a voice agent from scratch in your first 30 days?','What drove the 30% defect reduction — process, tooling, or coverage?'],
     gates:[
      {id:'G1',name:'QA experience',v:'pass',note:'8+ years continuous QA.'},
      {id:'G2',name:'API testing',v:'pass',note:'API automation across UI + service layers.'},
      {id:'G3',name:'Hours overlap',v:'unknown',note:'Confirm on founder call.'},
      {id:'G4',name:'Work authorization',v:'unknown',note:'Not collected.'}
     ],
     criteria:[
      {id:'C1',name:'QA fundamentals &amp; rigor',w:25,s:3,max:3,quote:'Owned release readiness, Go/No-Go, and test strategy authorship.',note:'Excellent gate ownership.'},
      {id:'C2',name:'API &amp; technical depth',w:25,s:3,max:3,quote:'UI + API automation layers.',note:'Strong technical breadth.'},
      {id:'C3',name:'Domain proximity (voice / telephony / AI)',w:25,s:1,max:3,quote:'Platform/web QA; limited voice exposure.',note:'Weakest dimension — domain ramp required.'},
      {id:'C4',name:'Communication &amp; bug reporting',w:15,s:3,max:3,quote:'Authored strategies; drove defect-reduction program.',note:'Clear, outcome-oriented communicator.'},
      {id:'C5',name:'Automation appetite',w:10,s:3,max:3,quote:'Automation across layers.',note:'High appetite.'}
     ]},
    {rank:5,name:'Satish Shetty',init:'SS',date:'2026-07-18',loc:'Mumbai',score:86,rec:'yes',advance:3,
     email:'satish.shetty@gmail.com',phone:'+91 99200 55667',
     summary:'Experienced QA engineer (11+ years) with unusually strong domain fit: has designed and validated inbound/outbound Voice AI agents on Genesys/Cekura for banking, plus LLM prompt evaluation. Flagged to advance directly to challenge stage given the depth of relevant work.',
     strengths:['Designed & validated inbound/outbound Voice AI agents on Genesys/Cekura — production voice-agent QA.','11+ years QA seniority with banking-grade compliance exposure.','Hands-on LLM prompt evaluation on live conversational flows.'],
     concerns:['Long tenure at one domain — confirm adaptability to a fast-moving startup pace.','Automation stack (Genesys/Cekura) is vendor-centric; confirm code-level API automation.'],
     questions:['How do you validate an outbound Voice AI agent’s compliance in a regulated (banking) context?','Where does vendor tooling stop and your own automation begin?','What’s the hardest voice-agent bug you’ve shipped a fix for?'],
     gates:[
      {id:'G1',name:'QA experience',v:'pass',note:'11+ years continuous QA.'},
      {id:'G2',name:'API testing',v:'pass',note:'API validation on voice-agent backends.'},
      {id:'G3',name:'Hours overlap',v:'unknown',note:'Confirm CET/GST overlap.'},
      {id:'G4',name:'Work authorization',v:'unknown',note:'Not collected.'}
     ],
     criteria:[
      {id:'C1',name:'QA fundamentals &amp; rigor',w:25,s:3,max:3,quote:'Designed and validated Voice AI agents for banking.',note:'Deep, compliance-aware rigor.'},
      {id:'C2',name:'API &amp; technical depth',w:25,s:2,max:3,quote:'API validation present; vendor-centric stack.',note:'Confirm code-level automation.'},
      {id:'C3',name:'Domain proximity (voice / telephony / AI)',w:25,s:3,max:3,quote:'Inbound/outbound Voice AI agents on Genesys/Cekura + LLM prompt eval.',note:'Among the most on-domain in the pool.'},
      {id:'C4',name:'Communication &amp; bug reporting',w:15,s:2,max:3,quote:'Banking-grade documentation.',note:'Thorough; formal.'},
      {id:'C5',name:'Automation appetite',w:10,s:2,max:3,quote:'Vendor-driven automation.',note:'Probe appetite for building.'}
     ]},
    {rank:6,name:'Meghana Shetty',init:'MS',date:'2026-07-14',loc:'—',score:85,rec:'yes',
     email:'meghana.shetty@gmail.com',phone:'—',
     summary:'Eight-plus years of continuous QA with the last role squarely on an AI/LLM banking voice platform — voicebot/chatbot testing, STT/TTS pipeline validation, and prompt/LLM evaluation. Location not provided; strong on-domain profile that needs basic logistics confirmed.',
     strengths:['Last role directly on an AI/LLM banking voice platform — voicebot/chatbot QA.','STT/TTS pipeline validation experience — the exact signal chain Audena tests.','8+ years continuous QA.'],
     concerns:['Location and contact logistics incomplete — basic screening data missing.','Confirm depth of API/automation vs. manual/exploratory voice QA.'],
     questions:['How did you validate the STT/TTS pipeline end-to-end — what metrics did you track?','Describe your voicebot regression cadence against model or prompt changes.','What’s missing from your application logistics we should confirm now?'],
     gates:[
      {id:'G1',name:'QA experience',v:'pass',note:'8+ years continuous QA.'},
      {id:'G2',name:'API testing',v:'pass',note:'API validation referenced on voice platform.'},
      {id:'G3',name:'Hours overlap',v:'unknown',note:'Location not provided — must confirm.'},
      {id:'G4',name:'Work authorization',v:'unknown',note:'Not collected.'}
     ],
     criteria:[
      {id:'C1',name:'QA fundamentals &amp; rigor',w:25,s:3,max:3,quote:'8+ years continuous QA on a voice platform.',note:'Solid rigor.'},
      {id:'C2',name:'API &amp; technical depth',w:25,s:2,max:3,quote:'API validation referenced.',note:'Confirm automation depth.'},
      {id:'C3',name:'Domain proximity (voice / telephony / AI)',w:25,s:3,max:3,quote:'AI/LLM banking voice platform; STT/TTS pipeline validation.',note:'Strongly on-domain.'},
      {id:'C4',name:'Communication &amp; bug reporting',w:15,s:2,max:3,quote:'Standard reporting.',note:'Adequate.'},
      {id:'C5',name:'Automation appetite',w:10,s:2,max:3,quote:'Mix of automated and manual voice QA.',note:'Probe build appetite.'}
     ]},
    {rank:7,name:'Wasif Ahamed Kampli',init:'WK',date:'2026-07-15',loc:'Bengaluru',score:80,rec:'yes',
     email:'wasif.kampli@gmail.com',phone:'+91 97400 33221',
     summary:'A 15+ year QA lead whose most recent 6+ years were spent owning quality for a multi-tenant conversational-AI/voice platform in banking — validating IVR/PSTN/SIP flows, ASR accuracy, and tenant isolation. Very senior; confirm hands-on vs. managerial split.',
     strengths:['Owned quality for a multi-tenant conversational-AI/voice platform — including tenant-isolation testing.','IVR/PSTN/SIP flow validation — the telephony layer Audena runs on.','15+ years; lead-level scope and stakeholder management.'],
     concerns:['Very senior — confirm current hands-on depth vs. people/management focus.','Salary expectations at 15+ yrs may exceed the band; align early.'],
     questions:['How did you test tenant isolation on a shared voice platform — what failure modes did you hunt?','What’s your split today between hands-on testing and managing?','Walk me through a PSTN/SIP edge case that only surfaced in production.'],
     gates:[
      {id:'G1',name:'QA experience',v:'pass',note:'15+ years continuous QA.'},
      {id:'G2',name:'API testing',v:'pass',note:'API + protocol-level validation across SIP/PSTN.'},
      {id:'G3',name:'Hours overlap',v:'pass',note:'Bengaluru (IST) — overlaps CET/GST.'},
      {id:'G4',name:'Work authorization',v:'unknown',note:'Confirm on call.'}
     ],
     criteria:[
      {id:'C1',name:'QA fundamentals &amp; rigor',w:25,s:3,max:3,quote:'Owned quality for a multi-tenant voice platform.',note:'Rare tenant-isolation testing experience.'},
      {id:'C2',name:'API &amp; technical depth',w:25,s:2,max:3,quote:'Protocol + API validation.',note:'Confirm current hands-on level.'},
      {id:'C3',name:'Domain proximity (voice / telephony / AI)',w:25,s:3,max:3,quote:'Conversational-AI/voice platform; IVR/PSTN/SIP flows.',note:'Deep on-domain.'},
      {id:'C4',name:'Communication &amp; bug reporting',w:15,s:2,max:3,quote:'Lead-level stakeholder communication.',note:'Strong at scale.'},
      {id:'C5',name:'Automation appetite',w:10,s:2,max:3,quote:'Automation owned via team.',note:'Confirm personal hands-on.'}
     ]}
    ],
    holds:[
     {name:'narmadha-natesan',why:'AI voice agent + Langfuse eval framework, only 2.7 yrs'},
     {name:'jeevitha-s / priya-jothi',why:'7 yrs Alexa voice testing but thin API/automation'},
     {name:'sandhya-rajeshlal',why:'deep IVR call-flow + Copilot Studio, zero automation'},
     {name:'somia-sharma / milan-vadgama / sai-rohith',why:'excellent rigor/API but no voice'},
     {name:'madankumar / titan-biswas / selva-kumar',why:'highly relevant voice/LLM work but under the 2-yr bar'}
    ],
    flags:[
     {name:'deepu',why:'hidden white-text keyword stuffing in the PDF layer',status:'capped · human review'},
     {name:'rupali-amit-dalvi',why:'explicit ‘ATS Keywords’ block in resume',status:'capped · human review'},
     {name:'aravinth-g',why:'.docx yielded no extractable text — scored 0',status:'re-screen required'}
    ]
  },
  creative:{
    note:"Small, high-variance pool. I scored portfolio evidence and hands-on generative-tooling depth (Midjourney/Runway/Sora + compositing) over stated years. Two clear yeses with shippable ad reels; the rest are stylistically strong but thin on iteration speed or brand-safety discipline.",
    rows:[
    {rank:1,name:'Devika Menon',init:'DM',date:'2026-07-22',loc:'Bengaluru',score:91,rec:'strong',
     email:'devika.menon@gmail.com',phone:'+91 98450 12345',
     summary:'AI creative producer with a shipped body of paid-social video ads built on Runway + Midjourney + After Effects. Fast iterator with a clear grasp of hook/retention structure and brand-safety guardrails.',
     strengths:['Shipped paid-social ad reels end-to-end with measurable CTR/retention lift.','Fluent across Midjourney, Runway, and compositing in After Effects.','Understands ad hook structure and platform-native formats.'],
     concerns:['Confirm rights/licensing hygiene on generative assets used in paid media.'],
     questions:['Walk me through one ad from brief to final cut — where did AI help and where did it not?','How do you keep a generative pipeline brand-safe and on-guideline?','What’s your typical concept-to-first-cut turnaround?'],
     gates:[
      {id:'G1',name:'Portfolio evidence',v:'pass',note:'Multiple shipped ad reels with links.'},
      {id:'G2',name:'Generative tooling depth',v:'pass',note:'Midjourney + Runway + AE compositing.'},
      {id:'G3',name:'Hours overlap',v:'unknown',note:'Confirm on call.'}
     ],
     criteria:[
      {id:'C1',name:'Creative craft &amp; taste',w:30,s:3,max:3,quote:'Strong hook/retention structure across shipped reels.',note:'Clear commercial taste.'},
      {id:'C2',name:'Generative-tooling depth',w:30,s:3,max:3,quote:'Runway + Midjourney + AE pipeline.',note:'Hands-on and current.'},
      {id:'C3',name:'Iteration speed',w:25,s:3,max:3,quote:'Fast concept-to-cut turnaround.',note:'Startup-ready pace.'},
      {id:'C4',name:'Brand safety &amp; rights',w:15,s:2,max:3,quote:'Guardrail awareness stated.',note:'Confirm licensing hygiene.'}
     ]},
    {rank:2,name:'Karan Malhotra',init:'KM',date:'2026-07-19',loc:'Mumbai',score:84,rec:'yes',
     email:'karan.m@gmail.com',phone:'+91 90040 88776',
     summary:'Motion designer moving into AI-native production. Beautiful frames and strong compositing, but the reel is more brand-film than performance-ad; iteration speed and hook discipline unproven at ad scale.',
     strengths:['Excellent visual craft and compositing.','Comfortable with image-gen tooling and style transfer.'],
     concerns:['Reel skews brand-film, not performance ads — confirm CTR-driven work.','Iteration speed at ad volume unproven.'],
     questions:['Show me a performance ad you made, not a brand film.','How many variants can you ship for an A/B test in a day?','How do you approach a scroll-stopping first 2 seconds?'],
     gates:[
      {id:'G1',name:'Portfolio evidence',v:'pass',note:'Strong reel; ad-performance work thinner.'},
      {id:'G2',name:'Generative tooling depth',v:'pass',note:'Image-gen + compositing evidenced.'},
      {id:'G3',name:'Hours overlap',v:'unknown',note:'Confirm on call.'}
     ],
     criteria:[
      {id:'C1',name:'Creative craft &amp; taste',w:30,s:3,max:3,quote:'Beautiful frames and compositing.',note:'High craft.'},
      {id:'C2',name:'Generative-tooling depth',w:30,s:2,max:3,quote:'Image-gen + style transfer.',note:'Video-gen depth to confirm.'},
      {id:'C3',name:'Iteration speed',w:25,s:1,max:3,quote:'Brand-film cadence.',note:'Unproven at ad volume.'},
      {id:'C4',name:'Brand safety &amp; rights',w:15,s:2,max:3,quote:'Standard awareness.',note:'Adequate.'}
     ]}
    ],
    holds:[{name:'others (32)',why:'stylistically strong but thin on iteration speed or performance-ad evidence'}],
    flags:[]
  },
  copy:{
    note:"Tiny pool of 3. All write cleanly; the differentiator is product-marketing instinct and evidence of shipped, converting copy over generic portfolio pieces.",
    rows:[
    {rank:1,name:'Ira Sharma',init:'IS',date:'2026-07-25',loc:'Remote',score:88,rec:'strong',
     email:'ira.sharma@gmail.com',phone:'+91 98999 11223',
     summary:'Product-marketing copywriter with shipped landing-page and lifecycle copy tied to conversion lift. Strong at turning technical AI features into plain-language value.',
     strengths:['Shipped converting landing-page + lifecycle copy with measurable lift.','Translates technical AI features into plain, benefit-led language.'],
     concerns:['Confirm range across long-form vs. performance-ad copy.'],
     questions:['Rewrite this feature line as a benefit in one sentence — live.','Which of your pieces drove the biggest measured lift, and why?','How do you keep AI-assisted drafts sounding on-brand?'],
     gates:[
      {id:'G1',name:'Writing sample evidence',v:'pass',note:'Shipped, attributable copy with results.'},
      {id:'G2',name:'Product-marketing instinct',v:'pass',note:'Feature-to-benefit translation evidenced.'}
     ],
     criteria:[
      {id:'C1',name:'Clarity &amp; voice',w:40,s:3,max:3,quote:'Plain, benefit-led language.',note:'Strong voice control.'},
      {id:'C2',name:'Conversion evidence',w:35,s:3,max:3,quote:'Copy tied to measurable lift.',note:'Results-oriented.'},
      {id:'C3',name:'Range',w:25,s:2,max:3,quote:'Landing + lifecycle shown.',note:'Confirm performance-ad range.'}
     ]}
    ],
    holds:[{name:'2 others',why:'clean writers but portfolio is generic, not shipped/converting'}],
    flags:[]
  }
  };

  function esc(s){return String(s).replace(/&(?!amp;|lt;|gt;|#)/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
  var recLabel={strong:'STRONG YES',yes:'YES',maybe:'MAYBE',no:'NO'};

  function gateRow(g){
    var cls=g.v==='pass'?'pass':(g.v==='fail'?'fail':'unk');
    var lbl=g.v==='pass'?'PASS':(g.v==='fail'?'FAIL':'CONFIRM');
    return '<div class="gate"><div class="gate-h"><b>'+g.id+' '+g.name+'</b><span class="gv '+cls+'">'+lbl+'</span></div><div class="gate-note">'+g.note+'</div></div>';
  }
  function critRow(c){
    var pct=Math.round(c.s/c.max*100);
    var tone=pct>=90?'pos':(pct>=60?'':'warn');
    return '<div class="crit"><div class="crit-h"><b>'+c.id+' '+c.name+'</b><span class="crit-w">w'+c.w+'</span><span class="crit-s '+tone+'">'+c.s+'/'+c.max+'</span></div>'+
      '<div class="meter '+tone+'"><i style="width:'+pct+'%"></i></div>'+
      '<div class="crit-q">“'+c.quote+'”</div><div class="crit-n">'+c.note+'</div></div>';
  }
  function compOf(r){
    if(r.comp)return r.comp;
    var rk=r.rank||1;
    var exp=32-(rk-1);if(exp<15)exp=15+((rk*3)%5);
    var last=exp-(3+(rk%4));
    var noExp=(rk%6===0),noLast=(rk%5===0&&!noExp);
    return {exp:noExp?null:exp,last:noLast?null:last};
  }
  function fmtCtc(v){if(v==null)return null;var usd=Math.round(v*100000/83/1000)*1000;return '$'+usd.toLocaleString('en-US')+'/yr';}
  function compCell(r){
    var c=compOf(r);
    var exp=c.exp!=null?'<b class="scr-comp-exp">'+fmtCtc(c.exp)+'</b>':'<b class="scr-comp-exp na">Not shared</b>';
    var last=c.last!=null?'last '+fmtCtc(c.last):'last <span class="na">\u2014</span>';
    return '<span class="scr-comp">'+exp+'<span class="scr-comp-last">'+last+'</span></span>';
  }
  function docsOf(r){
    if(r.docs)return r.docs;
    var rk=r.rank||1;var pick=function(m){return (rk+m)%2===0?'received':'missing';};
    return {slips:pick(0),offer:pick(1),bank:pick(2)};
  }
  function prevOf(r){
    var m={
      1:{company:'Voiceplug AI',title:'Senior QA Engineer · Voice AI',tenure:'Nov 2024 – Present · ~8 mo',bullets:['Built automated regression suite for voice-order flows across 40+ restaurant menus','Cut post-release voice-intent defects ~35% by adding STT/TTS validation gates','Owned Go/No-Go QA sign-off for weekly production releases'],prior:'Prior: Kabam Robotics, Accenture'},
      2:{company:'Rezo.ai',title:'QA Lead · GenAI Voicebots',tenure:'Current · 2+ yrs',bullets:['Led a 4-person QA pod owning quality for a live voice product','Designed conversation-path test matrix covering 200+ intents','Introduced latency & barge-in benchmarks now used team-wide'],prior:'Owns quality for a live voice product'},
      3:{company:'Cognizant (T-Mobile)',title:'Telecom / IVR QA Engineer',tenure:'~2.5 yrs',bullets:['Validated carrier-grade IVR call flows across 12 markets','Automated DTMF & speech-path smoke tests in CI','Reduced escaped IVR defects by tightening acceptance criteria'],prior:'Carrier-grade call-flow QA'},
      4:{company:'Enterprise Platform QA',title:'Senior QA Engineer',tenure:'8+ yrs',bullets:['Owned release readiness and Go/No-Go decisions across 6 squads','Stood up end-to-end regression coverage for the core platform','Mentored 3 junior QA engineers to independent release ownership'],prior:'Owned release readiness & Go/No-Go'},
      5:{company:'Banking Voice AI (Genesys/Cekura)',title:'Voice AI QA Specialist',tenure:'11+ yrs',bullets:['Validated inbound & outbound agent flows for a retail bank','Built compliance-driven test scripts for regulated call handling','Ran UAT with business stakeholders across quarterly releases'],prior:'Inbound/outbound agent validation'},
      6:{company:'AI/LLM Banking Voice Platform',title:'Voice QA Engineer',tenure:'Last role · 8+ yrs',bullets:['Validated STT/TTS pipeline accuracy against golden transcripts','Caught intent-drift regressions before customer-facing rollout','Partnered with ML team to define acceptance thresholds'],prior:'STT/TTS pipeline validation'},
      7:{company:'Conversational-AI Voice Platform',title:'QA Lead · Banking',tenure:'6+ of 15+ yrs',bullets:['Led multi-tenant isolation testing across enterprise clients','Defined the QA strategy for a new conversational-AI product line','Coordinated release QA across 3 time zones'],prior:'Multi-tenant isolation testing'}
    };
    return r.prevco||m[r._orank!=null?r._orank:r.rank]||null;
  }
  function prevBlock(r){
    var p=prevOf(r);
    if(!p)return '<div class="scr-prev na">Not shared</div>';
    return '<div class="scr-prev">'+
      '<span class="scr-prev-co">'+esc(p.company)+'</span>'+
      '<span class="scr-prev-title">'+esc(p.title)+'</span>'+
      '<span class="scr-prev-tenure">'+esc(p.tenure)+'</span>'+
      (p.bullets&&p.bullets.length?'<ul class="scr-prev-bullets">'+p.bullets.map(function(b){return '<li>'+esc(b)+'</li>';}).join('')+'</ul>':'')+
      (p.prior?'<span class="scr-prev-prior">'+esc(p.prior)+'</span>':'')+
    '</div>';
  }
  function compBlock(r){
    var c=compOf(r);
    var exp=c.exp!=null?fmtCtc(c.exp):'<span class="na">Not shared</span>';
    var last=c.last!=null?fmtCtc(c.last):'<span class="na">Not shared</span>';
    return '<div class="scr-compbox">'+
      '<div class="scr-compitem"><span class="scr-compk">Expected CTC</span><span class="scr-compv">'+exp+'</span></div>'+
      '<div class="scr-compitem"><span class="scr-compk">Last CTC</span><span class="scr-compv">'+last+'</span></div>'+
    '</div>';
  }
  var DOC_ICON='<svg class="scr-doc-ic" viewBox="0 0 24 24"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h6"/></svg>';
  function docsBlock(r){
    var d=docsOf(r);
    var items=[['Salary slips',d.slips],['Offer letter',d.offer],['Bank statement',d.bank]];
    return '<div class="scr-docs">'+items.map(function(it){
      var ok=it[1]==='received';
      var cls=ok?'ok':'miss';var lbl=ok?'\u2713 Received':'\u2717 Missing';
      return '<div class="scr-doc"><span class="scr-doc-n">'+it[0]+'</span><span class="scr-doc-r">'+(ok?DOC_ICON:'')+'<span class="scr-doc-s '+cls+'">'+lbl+'</span></span></div>';
    }).join('')+'</div>';
  }

  function detail(r){
    var links='<div class="scr-links"><span class="scr-link">Resume</span><span class="scr-link">Cover Letter</span><span class="scr-link">Portfolio</span><span class="scr-link">LinkedIn</span></div>';
    var cField=function(lbl,val){return '<div class="scr-field"><p class="scr-lbl">'+lbl+'</p><div class="scr-contact">'+esc(val)+'</div></div>';};
    var contact='<div class="scr-contactgrid">'+cField('Email',r.email)+
      (r.phone&&r.phone!=='—'?cField('Phone',r.phone):'')+
      (r.loc&&r.loc!=='—'?cField('Location',r.loc):'')+'</div>';
    var strengths=r.strengths.map(function(s){return '<li>'+s+'</li>';}).join('');
    var concerns=r.concerns.map(function(s){return '<li>'+s+'</li>';}).join('');
    var qs=r.questions.map(function(s){return '<li>'+s+'</li>';}).join('');
    var gates=r.gates.map(gateRow).join('');
    var crits=r.criteria.map(critRow).join('');
    return '<div class="scr-detail-inner">'+
      '<div class="scr-topcard">'+
        '<div class="scr-subcard">'+contact+links+'</div>'+
        '<div class="scr-tworow">'+
          '<div class="scr-subcard">'+
            '<p class="scr-lbl">Compensation</p>'+compBlock(r)+
            '<p class="scr-lbl" style="margin-top:18px">Proof documents</p>'+docsBlock(r)+
          '</div>'+
          '<div class="scr-subcard">'+
            '<p class="scr-lbl">Most recent company</p>'+prevBlock(r)+
          '</div>'+
        '</div>'+
      '</div>'+
      '<div class="scr-summary"><b>Summary. </b>'+r.summary+'</div>'+
      '<div class="scr-cols">'+
        '<div class="scr-c">'+
          '<p class="scr-lbl">Strengths</p><ul class="scr-list pos">'+strengths+'</ul>'+
          '<p class="scr-lbl">Concerns</p><ul class="scr-list warn">'+concerns+'</ul>'+
          '<p class="scr-lbl">Suggested interview questions</p><ul class="scr-list q">'+qs+'</ul>'+
        '</div>'+
        '<div class="scr-c">'+
          '<p class="scr-lbl">Hard gates</p><div class="scr-gates">'+gates+'</div>'+
          '<p class="scr-lbl" style="margin-top:22px">Weighted criteria</p><div class="scr-crits">'+crits+'</div>'+
        '</div>'+
      '</div>'+
    '</div>';
  }
  function row(r){
    var recCls=r.rec==='strong'?'strong':(r.rec==='yes'?'yes':'maybe');
    var adv=r.advance?'<span class="scr-adv">▶ '+r.advance+'</span>':'';
    var sTone=r.score>=90?'hi':(r.score>=80?'mid':'lo');
    return '<div class="scr-item">'+
      '<button class="scr-row" aria-expanded="false">'+
        '<span class="scr-rank">'+(r.rank<10?'0':'')+r.rank+'</span>'+
        '<span class="scr-name"><b>'+esc(r.name)+'</b><span class="scr-date">'+r.date+'</span></span>'+
        '<span class="scr-loc">'+esc(r.loc)+'</span>'+
        '<span class="scr-comp-cell">'+compCell(r)+'</span>'+
        '<span class="scr-score '+sTone+'">'+r.score+'</span>'+
        '<span class="scr-rec-cell"><span class="rec '+recCls+'">'+recLabel[r.rec]+'</span>'+adv+'</span>'+
        '<span class="scr-sum">'+esc(r.summary)+'</span>'+
        '<span class="scr-chev"><svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></span>'+
      '</button>'+
      '<div class="scr-detail">'+detail(r)+'</div>'+
    '</div>';
  }

  var DUMMY_NAMES=['Aditya Rao','Meera Iyer','Karan Shah','Nisha Menon','Rahul Verma','Sana Qureshi','Vikram Das','Pooja Reddy','Arun Pillai','Divya Nair','Farhan Ali','Grace Thomas','Harish Kumar','Ishita Bose'];
  var DUMMY_LOC=['Bengaluru','Mumbai','Pune','Hyderabad','Chennai','Delhi','Kochi','Jaipur'];
  function initials(n){return n.split(' ').map(function(w){return w[0];}).join('').slice(0,2).toUpperCase();}
  function dummyRow(rank){
    var name=DUMMY_NAMES[(rank-1)%DUMMY_NAMES.length];
    var score=Math.max(56,86-rank*2-((rank*3)%4));
    var rec=score>=80?'yes':'maybe';
    return {rank:rank,name:name,init:initials(name),date:'2026-07-'+(('0'+(10+rank%18)).slice(-2)),loc:DUMMY_LOC[rank%DUMMY_LOC.length],score:score,rec:rec,
      email:name.toLowerCase().replace(/ /g,'.')+'@example.com',phone:'\u2014',
      summary:'Mid-tier match \u2014 clears every hard gate but sits below the shortlist on domain depth and verifiable automation. Worth a second look if the top tier drops out.',
      strengths:['Solid QA fundamentals with structured test planning and defect triage.','Comfortable with REST API testing basics and CI-integrated runs.'],
      concerns:['Limited direct voice / conversational-AI exposure.','Automation depth thinly evidenced in the application.'],
      questions:['Walk me through the most complex API test suite you have built.','How would you approach regression when an LLM-backed feature changes?'],
      gates:[{id:'G1',name:'QA experience',v:'pass',note:'Meets the minimum experience bar.'},{id:'G2',name:'API testing',v:'pass',note:'References REST API testing across roles.'},{id:'G3',name:'Hours overlap',v:'unk',note:'Not collected on the application \u2014 confirm on call.'},{id:'G4',name:'Work authorization',v:'unk',note:'Not collected on the application \u2014 confirm on call.'}],
      criteria:[{id:'C1',name:'QA fundamentals &amp; rigor',w:25,s:2,max:3,quote:'Structured test plans and repeatable regression cycles.',note:'Solid, not standout, process ownership.'},{id:'C2',name:'API &amp; technical depth',w:25,s:2,max:3,quote:'REST API validation with status and schema checks.',note:'Basic API testing evidenced.'},{id:'C3',name:'Domain proximity (voice / telephony / AI)',w:25,s:1,max:3,quote:'General web/app QA background.',note:'Thin voice / AI adjacency.'},{id:'C4',name:'Communication &amp; bug reporting',w:15,s:2,max:3,quote:'Clear, reproducible bug reports.',note:'Adequate reporting discipline.'},{id:'C5',name:'Automation appetite',w:10,s:2,max:3,quote:'Some Selenium / Pytest exposure.',note:'Moderate automation interest.'}]};
  }
  function padRows(rows,total){var out=rows.slice();var rank=out.length;while(out.length<total){rank++;out.push(dummyRow(rank));}return out;}

  var PAGE_SIZE=10,TOTAL=15,curPage=0;
  var FILT={loc:'',comp:'',score:'',rec:'',q:''};
  function compBand(r){var e=compOf(r).exp;if(e==null)return 'na';if(e<=15)return 'lo';if(e<=25)return 'mid';return 'hi';}
  function passFilter(r){
    if(FILT.loc&&r.loc!==FILT.loc)return false;
    if(FILT.comp&&compBand(r)!==FILT.comp)return false;
    if(FILT.score){var s=r.score;if(FILT.score==='hi'&&s<90)return false;if(FILT.score==='mid'&&(s<80||s>=90))return false;if(FILT.score==='lo'&&s>=80)return false;}
    if(FILT.rec&&r.rec!==FILT.rec)return false;
    if(FILT.q&&(r.name+' '+(r.summary||'')).toLowerCase().indexOf(FILT.q.toLowerCase())<0)return false;
    return true;
  }
  function hopts(name){
    if(name==='comp')return [['','All'],['lo','≤ $18k'],['mid','$18k–30k'],['hi','$30k+'],['na','Not shared']];
    if(name==='score')return [['','All'],['hi','90+'],['mid','80–89'],['lo','Below 80']];
    if(name==='rec')return [['','All'],['strong','Strong yes'],['yes','Yes'],['maybe','Maybe']];
    return null;
  }
  function hcell(label,name,opts){
    if(!opts&&!name)return '<span>'+label+'</span>';
    var active=!!FILT[name];
    return '<span class="scr-hf'+(active?' active':'')+'" data-fdd="'+name+'">'+
      '<button class="scr-hf-btn" type="button" aria-haspopup="listbox" aria-expanded="false">'+label+
        '<span class="scr-hf-chev"><svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></span>'+
      '</button>'+
      '<div class="scr-fdd-menu" role="listbox">'+opts.map(function(o){
        return '<button class="scr-fdd-opt'+(o[0]===FILT[name]?' on':'')+'" type="button" role="option" data-fval="'+o[0]+'" aria-selected="'+(o[0]===FILT[name])+'">'+
          '<span class="scr-fdd-opt-name">'+o[1]+'</span>'+
          '<span class="scr-pick-check"><svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg></span>'+
        '</button>';
      }).join('')+'</div>'+
    '</span>';
  }
  function head(all){
    var locs=[];all.forEach(function(r){if(r.loc&&r.loc!=='\u2014'&&r.loc!=='—'&&locs.indexOf(r.loc)<0)locs.push(r.loc);});locs.sort();
    var locOpts=[['','All']].concat(locs.map(function(l){return [l,l];}));
    return '<div class="scr-head">'+
      '<span>#</span><span>Candidate</span>'+
      hcell('Location','loc',locOpts)+
      hcell('Compensation','comp',hopts('comp'))+
      hcell('Score','score',hopts('score'))+
      hcell('Rec','rec',hopts('rec'))+
      '<span>Summary</span><span></span>'+
    '</div>';
  }
  function pager(page,pages){
    if(pages<=1)return '';
    var nums='';for(var i=0;i<pages;i++){nums+='<button class="scr-pg-n'+(i===page?' on':'')+'" data-pg="'+i+'">'+(i+1)+'</button>';}
    return '<div class="scr-pager">'+
      '<button class="scr-pg-a" data-pg="prev"'+(page===0?' disabled':'')+'>\u2039 Prev</button>'+
      '<div class="scr-pg-nums">'+nums+'</div>'+
      '<button class="scr-pg-a" data-pg="next"'+(page===pages-1?' disabled':'')+'>Next \u203a</button>'+
    '</div>';
  }

  function render(roleId){
    var d=DATA[roleId];var host=document.getElementById('scr-body');if(!host||!d)return;
    var poolObj=ROLES.filter(function(x){return x.id===roleId;})[0];
    var pool=poolObj?poolObj.pool:d.rows.length;
    var all=padRows(d.rows,TOTAL);
    all.forEach(function(r){if(r._orank==null)r._orank=r.rank;});
    all.sort(function(a,b){return b.score-a.score;});
    all.forEach(function(r,i){r.rank=i+1;});
    var shown=all.filter(passFilter);
    var pages=Math.ceil(shown.length/PAGE_SIZE)||1;
    if(curPage>pages-1)curPage=pages-1;if(curPage<0)curPage=0;
    var start=curPage*PAGE_SIZE;
    var pageRows=shown.slice(start,start+PAGE_SIZE);
    var from=shown.length?start+1:0,to=start+pageRows.length;
    host.innerHTML=
      '<div class="ai p-pad scr-ai">'+
        '<div class="ai-head"><span class="spark">✦</span>How I ranked this pool</div>'+
        '<p class="ai-line" style="margin:12px 0 0">'+d.note+'</p>'+
      '</div>'+
      '<div class="scr-layout">'+
        '<div class="panel scr-table">'+
          head(all)+
          '<div class="scr-rows">'+(pageRows.length?pageRows.map(row).join(''):'<div class="scr-empty">No candidates match these filters.</div>')+'</div>'+
          '<div class="scr-foot"><span class="ai-inline">✦</span> Showing <b>'+from+'\u2013'+to+'</b> of <b>'+shown.length+'</b>'+(shown.length!==all.length?' filtered':' shortlisted')+' \u00b7 '+pool+' screened \u00b7 every applicant gated & ranked</div>'+
          pager(curPage,pages)+
        '</div>'+
      '</div>';
    host.querySelectorAll('[data-pg]').forEach(function(b){
      b.addEventListener('click',function(){
        if(b.disabled)return;
        var v=b.dataset.pg;
        if(v==='prev')curPage--;else if(v==='next')curPage++;else curPage=parseInt(v,10);
        render(roleId);
      });
    });
    host.querySelectorAll('.scr-hf').forEach(function(dd){
      var name=dd.dataset.fdd;
      var btn=dd.querySelector('.scr-hf-btn');
      btn.addEventListener('click',function(e){e.stopPropagation();
        var open=dd.classList.contains('open');
        host.querySelectorAll('.scr-hf.open').forEach(function(o){o.classList.remove('open');o.querySelector('.scr-hf-btn').setAttribute('aria-expanded','false');});
        if(!open){dd.classList.add('open');btn.setAttribute('aria-expanded','true');}
      });
      dd.querySelectorAll('.scr-fdd-opt').forEach(function(o){
        o.addEventListener('click',function(e){e.stopPropagation();FILT[name]=o.dataset.fval;curPage=0;render(roleId);});
      });
    });
    if(!host._fddDoc){host._fddDoc=true;document.addEventListener('click',function(){document.querySelectorAll('.scr-hf.open').forEach(function(o){o.classList.remove('open');var b=o.querySelector('.scr-hf-btn');if(b)b.setAttribute('aria-expanded','false');});});}
    wire(host);
  }

  function wire(host){
    host.querySelectorAll('.scr-row').forEach(function(btn){
      btn.addEventListener('click',function(){
        var open=btn.getAttribute('aria-expanded')==='true';
        var det=btn.nextElementSibling;
        btn.setAttribute('aria-expanded',open?'false':'true');
        if(open){det.style.maxHeight=det.scrollHeight+'px';requestAnimationFrame(function(){det.style.maxHeight='0px';});}
        else{det.style.maxHeight=det.scrollHeight+'px';det.addEventListener('transitionend',function te(){det.style.maxHeight='none';det.removeEventListener('transitionend',te);});}
      });
    });
  }

  var curRole='qa';
  function chev(){return '<span class="scr-pick-chev"><svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></span>';}
  function initPicker(){
    var host=document.getElementById('scr-picker');if(!host)return;
    function draw(){
      var cur=ROLES.filter(function(x){return x.id===curRole;})[0]||ROLES[0];
      host.innerHTML=
        '<button class="scr-pick-btn" type="button" aria-haspopup="listbox" aria-expanded="false">'+
          '<span class="scr-pick-role">'+cur.label+'</span>'+
          '<span class="scr-pick-count">'+cur.pool+' screened</span>'+chev()+
        '</button>'+
        '<div class="scr-pick-menu" role="listbox">'+ROLES.map(function(rl){
          return '<button class="scr-pick-opt'+(rl.id===curRole?' on':'')+'" type="button" role="option" data-role="'+rl.id+'" aria-selected="'+(rl.id===curRole)+'">'+
            '<span class="scr-pick-opt-name">'+rl.label+'</span>'+
            '<span class="scr-pick-opt-count">'+rl.pool+'</span>'+
            '<span class="scr-pick-check"><svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg></span>'+
          '</button>';
        }).join('')+'</div>';
      var btn=host.querySelector('.scr-pick-btn');
      btn.addEventListener('click',function(e){e.stopPropagation();toggle();});
      host.querySelectorAll('.scr-pick-opt').forEach(function(o){
        o.addEventListener('click',function(){curRole=o.dataset.role;curPage=0;close();draw();render(curRole);});
      });
    }
    function toggle(){host.classList.contains('open')?close():open();}
    function open(){host.classList.add('open');host.querySelector('.scr-pick-btn').setAttribute('aria-expanded','true');document.addEventListener('click',onDoc);document.addEventListener('keydown',onKey);}
    function close(){host.classList.remove('open');var b=host.querySelector('.scr-pick-btn');if(b)b.setAttribute('aria-expanded','false');document.removeEventListener('click',onDoc);document.removeEventListener('keydown',onKey);}
    function onDoc(e){if(!host.contains(e.target))close();}
    function onKey(e){if(e.key==='Escape')close();}
    draw();
  }

  function boot(){ if(!document.getElementById('scr-body'))return; initPicker(); render(curRole); }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();
