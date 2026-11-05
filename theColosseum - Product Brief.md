<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="omelette-print-source" content="v1789630465273897 theColosseum - Product Brief.md" />
<title>theColosseum — Product Brief</title>
<style>
*{-webkit-print-color-adjust:exact;print-color-adjust:exact}
*{animation-delay:-99s !important;animation-duration:.001s !important;animation-iteration-count:1 !important;animation-fill-mode:both !important;animation-play-state:running !important;transition-duration:0s !important}
doc-page:not(:defined){visibility:hidden}
doc-page{font-family:"Georgia","Iowan Old Style",serif;color:#1c1d1c;font-size:10.5pt;line-height:1.62}
.eyebrow{font-family:"Helvetica Neue",Arial,sans-serif;font-size:8pt;letter-spacing:.16em;text-transform:uppercase;font-weight:700;color:#8e8f8b;margin:0 0 10px}
h1{font-size:25pt;line-height:1.1;letter-spacing:-.015em;margin:0 0 14px;font-weight:600}
.lede{font-size:11.5pt;line-height:1.6;color:#3c3d3b;margin:0 0 6px}
.rule{height:1px;background:#dcdad4;margin:26px 0 24px;border:0}
h2{font-family:"Helvetica Neue",Arial,sans-serif;font-size:12pt;letter-spacing:-.01em;margin:26px 0 10px;font-weight:700;break-after:avoid}
h2 .n{color:#9b9c98;margin-right:9px;font-weight:600}
h3{font-family:"Helvetica Neue",Arial,sans-serif;font-size:10pt;margin:18px 0 6px;font-weight:700;break-after:avoid}
p{margin:0 0 10px}
ul{margin:0 0 12px;padding-left:18px}
li{margin:0 0 6px}
b,strong{font-weight:700}
table{width:100%;border-collapse:collapse;margin:0 0 14px;font-size:9.5pt}
th{font-family:"Helvetica Neue",Arial,sans-serif;font-size:7.5pt;letter-spacing:.1em;text-transform:uppercase;color:#8e8f8b;text-align:left;padding:0 10px 6px 0;border-bottom:1px solid #dcdad4}
td{padding:8px 10px 8px 0;border-bottom:1px solid #eceae5;vertical-align:top}
td:first-child{font-weight:700;white-space:nowrap}
.note{background:#f5f4f2;border:1px solid #e6e4df;border-radius:6px;padding:12px 14px;margin:0 0 14px;break-inside:avoid;font-size:9.5pt}
.note p:last-child{margin:0}
ol.narr{margin:0 0 12px;padding-left:20px}
ol.narr li{margin:0 0 5px}
.vocab{font-size:9.5pt;color:#3c3d3b}
.foot{font-family:"Helvetica Neue",Arial,sans-serif;font-size:7.5pt;letter-spacing:.08em;text-transform:uppercase;color:#a3a4a0;display:flex;justify-content:space-between}
a,a:hover{color:#1c1d1c;text-decoration:none}
</style>
</head>
<body>
<doc-page margin="0.85in">
<div slot="footer" class="foot"><span>theColosseum — Product Brief</span><span>Internal</span></div>

<p class="eyebrow">Product brief · for the landing page</p>
<h1>theColosseum</h1>
<p class="lede">Everything below is drawn from the built product surfaces in this project: the entry split, both signup flows, the company challenge workspace, the funds and escrow system, the company profile, the candidate web app (browse, challenge detail, jobs, company profiles), the AI interview, the leaderboard, my applications, and the screening report.</p>
<hr class="rule" />

<h2><span class="n">01</span>What theColosseum is</h2>
<p>theColosseum is a hiring platform where the unit of evaluation is <b>work, not a résumé</b>. Companies post challenges — short, scoped, real engineering problems drawn from their actual product — and candidates win roles, or cash, by solving them.</p>
<p>It runs as two connected products against one shared loop:</p>
<ul>
<li><b>The company side</b> is a workspace: draft challenges with AI, fund the reward, publish as a bounty, a hiring challenge or a job, and operate the pipeline through to offer and payout.</li>
<li><b>The candidate side</b> is a career surface: a linked evidence profile, a browsable arena of challenges and jobs, AI screening and interviews, a leaderboard, and an application tracker that explains every decision made about them.</li>
</ul>
<p>The positioning line the product already uses: <i>choose how you want to enter the arena.</i></p>

<h2><span class="n">02</span>The thesis</h2>
<p>Three beliefs the product is built on, all visible in the flows.</p>
<p><b>Résumés are a proxy; work is the signal.</b> Every hiring path in theColosseum routes through a scoped piece of work with a stated effort cap of four to eight hours and a public rubric. The screening report scores candidates on hard gates (pass/fail) and weighted criteria, and quotes the evidence for each score rather than asserting a verdict.</p>
<p><b>Unpaid evaluation is a tax on candidates.</b> Rewards are held in escrow from the moment a challenge is funded, so a candidate can see the money is secured before spending hours on a brief. Nothing releases until the company confirms a winner. Bounties pay for work whether or not it leads to a job.</p>
<p><b>Both sides should be accountable.</b> Companies carry an Employer score and public candidate ratings — brief clarity, review speed, payment behaviour, whether scope moved mid-challenge. Candidates see why they were cut, at which stage, and against which bar.</p>

<h2><span class="n">03</span>The two entry points</h2>
<h3>Company onboarding</h3>
<p>The company doesn't fill in a long form. It gives a <b>website URL</b> and linked socials, and the platform infers the rest in the background while the account is created: value proposition, stage, team size, hiring context, likely roles. Onboarding is three fixed steps with dynamic fields — every answer is proposed first and confirmed, not asked blank. Team size and location are pickers. It ends on "Preparing your arena," which converts onboarding into visible value: company-specific challenges identified, suggested framing, and a targeted candidate count.</p>
<h3>Candidate onboarding</h3>
<p>Entry splits by evidence type — technical candidates connect LinkedIn and GitHub; non-technical candidates connect portfolio and other sources. Context is extracted first, and prompts appear only for the gaps: years of experience, designation, location, strongest skills, work preference, availability, compensation expectation on a clear annual basis, and what matters most in the next role. A baseline soft-skill assessment covers five signals: <b>Communication, Collaboration, Ownership, Problem framing, Resilience.</b> Profile completeness runs 0–100% and drives visibility.</p>

<h2><span class="n">04</span>The company workspace</h2>
<p><b>Challenge drafting with an AI collaborator.</b> The first screen is not a dashboard — it's three proposed challenges, each with a title, overview, goal, details, rules, effort estimate and submission window. Every field is inline-editable. A chat rail sits at the bottom of the draft: "make this focused on backend reliability," "shorten the goal," "add something about idempotency" — the draft updates in place. Once published, the chat and Publish button are replaced by a status pill recording what it was published as, and when.</p>
<p><b>Three publish modes, one draft.</b></p>
<table>
<thead><tr><th>Mode</th><th>What it is</th><th>What the candidate gets</th></tr></thead>
<tbody>
<tr><td>Bounty challenge</td><td>Paid, open competition</td><td>Cash prize, split across 1st, 2nd and 3rd</td></tr>
<tr><td>Hiring challenge</td><td>Challenge as the front door to a role</td><td>Reward plus a hiring pipeline</td></tr>
<tr><td>Job</td><td>A conventional posting</td><td>Work arrangement and location, no reward</td></tr>
</tbody>
</table>
<p>Publishing as a hiring challenge or a job asks for <b>experience level, work arrangement</b> (remote, on-site or hybrid) <b>and country</b> — which then show as chips on the posting and drive candidate-side filters. Jobs drop the timeline and reward chips entirely; they aren't competitions.</p>
<p><b>The pipeline.</b> Stages adapt to the mode:</p>
<ul>
<li>Bounty: Applied → Challenge → Human interview</li>
<li>Hiring challenge: Applied → AI screen → Challenge → AI interview → Finalist</li>
<li>Job: Applied → AI screen → AI interview → Human interview</li>
</ul>
<p>Drafts hide the pipeline altogether behind a "Publish this challenge" prompt. Each stage carries counts, conversion percentages against the previous stage, and stage-level insight.</p>
<p><b>Finalists, placement and payout.</b> Bounty challenges surface the top three finalists, with a place override so any of the top ten can be awarded 1st, 2nd or 3rd and the rest shuffle down. Paying out is a chain: distribute reward, confirm, rate and review the candidate, mark released. Hiring finalists add rank, placement, and interview scheduling; once an invite is sent, the button becomes a pill showing the scheduled date and time.</p>
<p><b>Screening as an argument, not a verdict.</b> The screening report opens with the screener's reasoning — how the pool was weighted and why. Each candidate has hard gates (experience, API testing, hours overlap, work authorization) marked pass, fail or unknown with a note; weighted scored criteria with the quote that earned the score; named strengths; named concerns; and the specific questions to ask in interview. It flags gaming too: keyword stuffing, hidden white text, unextractable files — capped and sent to human review rather than silently scored.</p>
<p><b>Funds and escrow.</b> A dedicated Funds surface tracks three balances: <b>held in escrow</b> across live challenges, <b>awaiting release</b> for confirmed winners, and <b>released</b> lifetime. Add funds, allocate to challenges, release on confirmation. The promise to candidates is explicit: the reward is secured before they start.</p>
<p><b>Public company profile.</b> Overview, hiring fields, challenges and jobs, an <b>Employer score</b>, and <b>Ratings</b> — an average out of five with reviews from candidates who actually worked with them. Rewards distributed to date sits alongside team size as a hard number.</p>

<h2><span class="n">05</span>The candidate product</h2>
<p><b>Browse.</b> Challenges and jobs in one arena, filterable, each card showing company, kind, reward, effort and timeline. Reward multipliers scale with the candidate's tier — higher tiers unlock larger prizes on the same brief, and locked tiers are visible so the ladder is legible. Challenge detail gives overview, goal, details, rules, effort cap and window.</p>
<p><b>Company profiles, from the candidate's side.</b> Open any company: overview, social links, team size, rewards distributed, open challenges and jobs, and the same ratings block — average, stars, and reviews from candidates who worked with them. Due diligence in both directions.</p>
<p><b>AI interview.</b> A conducted interview covering hard and soft skills, scored and transcribed. Candidates get their transcript and their signal breakdown, not just an outcome.</p>
<p><b>Leaderboard.</b> Ranked standing with movement over time, tier, and the facts behind the rank. Performance in the arena is a persistent, portable asset rather than a private score.</p>
<p><b>My applications.</b> The most opinionated surface in the product. A filter for hiring challenges, bounty challenges or jobs reshapes the whole pipeline to the stages that mode actually has. Each stage shows the count, the conversion rate from the previous stage, the applications sitting in it, and an insight derived from the candidate's own data — how many were cut and against which bar, how many submissions are due, how many interviews are booked. At the final stage there is no withdraw button; there's <b>Rate this company</b> — five stars plus a written review that publishes to the company's public profile.</p>

<h2><span class="n">06</span>What makes it different</h2>
<ul>
<li><b>The brief is the job description.</b> Companies advertise the work, not a wish-list of years and keywords.</li>
<li><b>Effort is capped and stated.</b> Four to eight hours, with a submission window, and speed is rewarded rather than assumed.</li>
<li><b>The money is real and visible.</b> Escrow, split prizes, released balances, rewards distributed on the company profile.</li>
<li><b>Every rejection is explained.</b> Stage, bar, and the evidence — the screening rubric is the same one the candidate sees reasoning from.</li>
<li><b>Ratings run both ways.</b> Candidates rate companies on the things that actually go wrong in hiring: vague briefs, moving scope, slow reviews, unpaid work, silence.</li>
<li><b>Bounties decouple pay from hiring.</b> A candidate can earn without wanting the job; a company can get a problem solved without opening a role.</li>
<li><b>AI is present but accountable.</b> It drafts challenges, screens, and interviews — and shows its reasoning, its quotes, and its unknowns at every step.</li>
</ul>

<h2><span class="n">07</span>Audiences and what each one needs to hear</h2>
<p><b>Engineering and hiring leaders.</b> You'll see work before you see a call. The pipeline is one screen, the evaluation criteria are yours, and the money only moves when you confirm a winner. Challenges double as a scoping exercise for problems you were going to solve anyway.</p>
<p><b>Candidates.</b> Four to eight hours, a clear brief, a visible reward held in escrow, and a real answer either way. Your rank, your transcripts and your scores are yours. If a company wastes your time, you say so in public.</p>
<p><b>Recruiters and talent teams.</b> Screening arrives as an argument with evidence attached — ranked, filterable, with gaming already flagged. Interview questions are generated per candidate from their actual gaps.</p>

<h2><span class="n">08</span>Objections to answer on the page</h2>
<div class="note">
<p><b>"Isn't this unpaid work?"</b> No — bounties pay, escrow is funded up front, and effort is capped and stated before anyone starts.</p>
<p><b>"Four hours is a lot to ask."</b> It's less than a four-round interview loop, it's compensated, and the output is a portfolio piece that belongs to the candidate.</p>
<p><b>"Won't AI screening just be a different black box?"</b> The report shows hard gates, weights, quotes, concerns and unknowns. Anything suspicious is capped and escalated to a human.</p>
<p><b>"Does this only work for engineers?"</b> The candidate entry already splits technical and non-technical evidence, and the screening surfaces cover QA, creative and copywriting pools.</p>
</div>

<h2><span class="n">09</span>Suggested landing-page narrative</h2>
<ol class="narr">
<li><b>Hero</b> — hiring decided by work. One line on the arena, two doors: company, candidate.</li>
<li><b>The problem</b> — résumé screening rejects the wrong people slowly; candidates do unpaid work into silence.</li>
<li><b>How it works, company side</b> — URL in, challenges proposed, fund it, publish as bounty, hiring challenge or job, operate one pipeline.</li>
<li><b>How it works, candidate side</b> — connect evidence, browse the arena, solve a capped challenge, get scored with reasons, climb the leaderboard.</li>
<li><b>Escrow</b> — the reward is secured before the work starts. Three balances, one promise.</li>
<li><b>Screening you can argue with</b> — a real excerpt: gates, weights, quotes, concerns, questions.</li>
<li><b>Accountability both ways</b> — Employer score and candidate ratings, side by side.</li>
<li><b>Bounties</b> — get paid for solving the problem, job or no job.</li>
<li><b>Proof</b> — challenges run, rewards distributed, median time to outcome, share reaching the final round.</li>
<li><b>Close</b> — the two-door entry again.</li>
</ol>

<h2><span class="n">10</span>Vocabulary the product already uses</h2>
<p class="vocab">Arena · challenge · bounty challenge · hiring challenge · gladiators · effort · submission window · reward · escrow · held, awaiting release, released · hard gate · weighted criterion · finalist · placement · tier · Employer score · signal.</p>
<p>Keep "arena" and "gladiators" light — they carry the name, but the substance of the product is plain, specific and unromantic about hiring. The tone that fits the built screens is direct and evidence-first: numbers with their baselines, decisions with their reasons.</p>
</doc-page>
<script src="doc-page.js"></script>
</body>
</html>
