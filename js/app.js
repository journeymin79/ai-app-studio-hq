(() => {
  const data = window.HQ_DATA;
  const root = document.getElementById('content');
  const nav = document.getElementById('sidebar-nav');
  const title = document.getElementById('view-title');
  const subtitle = document.getElementById('view-subtitle');
  const eyebrow = document.getElementById('view-eyebrow');
  const drawer = document.getElementById('drawer');
  const drawerContent = document.getElementById('drawer-content');

  document.getElementById('today-label').textContent =
    new Intl.DateTimeFormat('ko-KR', { year:'numeric', month:'2-digit', day:'2-digit', weekday:'short' }).format(new Date());

  const statusClass = s => ({
    working:'green', reviewing:'yellow', waiting:'', COMPLETED:'green', 'IN PROGRESS':'yellow',
    REVIEW:'blue', WAITING:'', REQUIRED:'red', DECIDED:'green', RUNNING:'blue', PLANNED:'', REVIEW:'yellow'
  })[s] || '';

  const pct = n => Math.max(0, Math.min(100, Number(n) || 0));

  const sections = [
    {title:'Company', items:[
      {id:'company',label:'Company Overview',icon:'🏠'},
      {id:'commands',label:'CEO Commands',icon:'⭐'}
    ]},
    {title:'Organization', items:[
      {id:'team:coo',label:'COO',icon:'🤖',status:'working'},
      {id:'team:discovery',label:'Discovery',icon:'🔬',status:'working',children:[
        {id:'agent:market',label:'Market Research'},
        {id:'agent:competitor',label:'Competitor Intelligence'},
        {id:'agent:user-research',label:'User & Review Research'}
      ]},
      {id:'team:product',label:'Product',icon:'🧠',status:'reviewing',children:[
        {id:'agent:pm',label:'Product Manager'},
        {id:'agent:ux',label:'UX'},
        {id:'agent:red-team',label:'Red Team'}
      ]},
      {id:'team:engineering',label:'Engineering',icon:'💻',status:'waiting',children:[
        {id:'agent:tech-lead',label:'Tech Lead'},
        {id:'agent:developer',label:'Developer'},
        {id:'agent:qa',label:'QA'}
      ]},
      {id:'team:growth',label:'Growth',icon:'🚀',status:'working',children:[
        {id:'agent:growth-lead',label:'Growth Lead'},
        {id:'agent:aso',label:'ASO'},
        {id:'agent:content',label:'Content Marketing'}
      ]},
      {id:'team:data',label:'Data',icon:'📊',status:'waiting'},
      {id:'team:revenue',label:'Revenue',icon:'💰',status:'waiting'}
    ]},
    {title:'Apps', items:data.apps.map(a => ({id:'app:'+a.id,label:a.name,icon:'📱',status:a.status}))},
    {title:'Work', items:[
      {id:'today',label:'Today',icon:'🕒'},
      {id:'tasks',label:'Tasks',icon:'📋'},
      {id:'experiments',label:'Experiments',icon:'🧪'},
      {id:'decisions',label:'Decisions',icon:'✅'},
      {id:'artifacts',label:'Artifacts',icon:'📄'}
    ]}
  ];

  function renderNav() {
    nav.innerHTML = sections.map(s => `
      <section>
        <div class="nav-section-title">${s.title}</div>
        <div class="nav-list">
          ${s.items.map(item => `
            <div>
              <button type="button" class="nav-item" data-view="${item.id}">
                <span class="nav-icon">${item.icon || '•'}</span>
                <span>${item.label}</span>
                ${item.status ? `<span class="nav-status ${item.status}"></span>` : ''}
              </button>
              ${item.children ? `<div class="nav-children">${item.children.map(c => `
                <button type="button" class="nav-item child" data-view="${c.id}">↳ ${c.label}</button>
              `).join('')}</div>` : ''}
            </div>
          `).join('')}
        </div>
      </section>
    `).join('');

    nav.querySelectorAll('[data-view]').forEach(btn => btn.addEventListener('click', () => openView(btn.dataset.view)));
  }

  function setHeader(kicker, heading, sub) {
    eyebrow.textContent = kicker;
    title.textContent = heading;
    subtitle.textContent = sub;
  }

  function activate(view) {
    nav.querySelectorAll('.nav-item').forEach(x => x.classList.toggle('active', x.dataset.view === view));
  }

  function metric(label, value) {
    return `<div class="metric"><span>${label}</span><strong>${value}</strong></div>`;
  }

  function badge(text, cls='') {
    return `<span class="badge ${cls}">${text}</span>`;
  }

  function companyView() {
    setHeader('COMPANY','Company Overview','AI 기반 앱 스튜디오 전체 운영 현황');
    root.innerHTML = `
      <section class="hero">
        <div class="hero-grid">
          <div>
            <span class="kicker">AI APP STUDIO</span>
            <h2>제품을 만들고, 검증하고, 성장시키는 작은 AI 조직</h2>
            <p>ChatGPT를 운영·제품 본부로, Gemini를 리서치 센터로, Codex를 엔지니어링 실행 도구로 활용합니다.</p>
            <div class="mission"><strong>Mission</strong><br>${data.company.mission}</div>
          </div>
          <div class="metric-grid">
            ${metric('Apps',data.company.apps)}
            ${metric('Active Teams',data.company.activeTeams)}
            ${metric('Active Tasks',data.company.activeTasks)}
            ${metric('Completed Today',data.company.completedToday)}
            ${metric('Experiments',data.company.experiments)}
            ${metric('CEO Decisions',data.company.ceoDecisions)}
          </div>
        </div>
      </section>

      <section class="section">
        <div class="section-head"><h2>App Portfolio</h2><span class="section-note">앱을 클릭하면 상세 현황을 볼 수 있습니다.</span></div>
        <div class="grid-3">
          ${data.apps.map(app => `
            <article class="card clickable" data-open-app="${app.id}">
              <div class="card-title"><h3>${app.name}</h3>${badge(app.stage,'blue')}</div>
              <p class="section-note">${app.goal}</p>
              <div class="mini-stats">
                <div class="mini-stat"><span>오늘</span><strong>${app.today}</strong></div>
                <div class="mini-stat"><span>진행</span><strong>${app.active}</strong></div>
                <div class="mini-stat"><span>결정</span><strong>${app.decisions}</strong></div>
              </div>
              <p class="section-note" style="margin-bottom:0">최근 업데이트 ${app.updated}</p>
            </article>
          `).join('')}
        </div>
      </section>

      <div class="split">
        <section class="card">
          <div class="card-title"><h3>Today Summary</h3>${badge('DAILY BRIEF','green')}</div>
          <p class="big-summary">${data.company.todaySummary}</p>
          <div class="timeline">
            ${data.activities.slice(-5).map(a => timelineItem(a)).join('')}
          </div>
        </section>
        <section class="card">
          <div class="card-title"><h3>CEO Inbox</h3>${badge(data.decisions.filter(d=>d.status==='REQUIRED').length+' REQUIRED','red')}</div>
          <div class="list">
            ${data.decisions.filter(d=>d.status==='REQUIRED').map(d => `
              <div class="list-row clickable" data-decision="${d.id}">
                <div class="grow"><strong>${d.title}</strong><p>${d.app} · ${d.team}</p></div>
                ${badge('DECIDE','red')}
              </div>
            `).join('')}
          </div>
        </section>
      </div>

      <section class="section">
        <div class="section-head"><h2>What we learned today</h2><span class="section-note">FACT / ANALYSIS / HYPOTHESIS / DECISION</span></div>
        <div class="fact-grid">
          ${data.findings.map(f => `<div class="fact"><span class="type">${f.type}</span><p>${f.text}</p></div>`).join('')}
        </div>
      </section>
    `;
    bindContent();
  }

  function timelineItem(a) {
    return `<div class="timeline-item">
      <div class="timeline-time">${a.time}</div>
      <div class="timeline-line"><span class="timeline-dot"></span></div>
      <div class="timeline-content"><strong>${a.team} · ${a.title}</strong><p>${a.summary}</p></div>
    </div>`;
  }

  function teamView(id) {
    const t = data.teams.find(x => x.id === id);
    if (!t) return;
    setHeader('ORGANIZATION', t.icon+' '+t.name, t.role);
    const acts = data.activities.filter(a => a.team === t.name || (t.name==='Discovery' && a.team==='Discovery') || (t.name==='Product' && a.team==='Product'));
    const tsks = data.tasks.filter(x => x.team === t.name);
    const arts = data.artifacts.filter(x => x.team === t.name);
    root.innerHTML = `
      <section class="hero">
        <div class="hero-grid">
          <div>
            <span class="kicker">TEAM PROFILE</span>
            <h2>${t.name}</h2>
            <p>${t.role}</p>
            <div class="mission"><strong>오늘 요약</strong><br>${t.summary}</div>
          </div>
          <div class="metric-grid">
            ${metric('담당 AI',t.ai)}
            ${metric('완료',t.done)}
            ${metric('진행',t.doing)}
            ${metric('대기',t.waiting)}
          </div>
        </div>
      </section>
      <div class="grid-2">
        <section class="card">
          <div class="card-title"><h3>Today Activity</h3>${badge((acts.length||0)+' EVENTS','blue')}</div>
          <div class="timeline">${acts.length ? acts.map(timelineItem).join('') : '<div class="empty">오늘 기록된 Activity가 없습니다.</div>'}</div>
        </section>
        <section class="card">
          <div class="card-title"><h3>Current Tasks</h3></div>
          <div class="list">${tsks.length ? tsks.map(taskRow).join('') : '<div class="empty">현재 등록된 Task가 없습니다.</div>'}</div>
        </section>
      </div>
      <section class="section">
        <div class="section-head"><h2>Artifacts</h2><span class="section-note">이 조직이 만든 결과물</span></div>
        <div class="grid-3">${arts.length ? arts.map(artifactCard).join('') : '<div class="empty">아직 등록된 결과물이 없습니다.</div>'}</div>
      </section>
    `;
    bindContent();
  }

  function agentView(id) {
    const a = data.agents.find(x => x.id === id);
    if (!a) return;
    setHeader('AI ROLE', a.name, a.team+' · '+a.ai);
    const relatedTasks = data.tasks.filter(t => t.role === a.name);
    root.innerHTML = `
      <section class="hero">
        <div class="hero-grid">
          <div>
            <span class="kicker">${a.team.toUpperCase()}</span>
            <h2>${a.name}</h2>
            <p>${a.mission}</p>
            <div class="mission"><strong>현재 업무</strong><br>${a.task}</div>
          </div>
          <div class="metric-grid">
            ${metric('AI',a.ai)}
            ${metric('담당 앱',a.app)}
            ${metric('상태',a.status.toUpperCase())}
          </div>
        </div>
      </section>
      <section class="card">
        <div class="card-title"><h3>Assigned Tasks</h3></div>
        <div class="list">${relatedTasks.length ? relatedTasks.map(taskRow).join('') : '<div class="empty">현재 연결된 Task가 없습니다.</div>'}</div>
      </section>
      ${id === 'red-team' ? `
      <section class="card">
        <div class="card-title"><h3>Red Team Review</h3>${badge('EXPERIMENT','yellow')}</div>
        <div class="fact-grid">
          <div class="fact"><span class="type">PRODUCT PROPOSAL</span><p>AI 맞춤 복습 기능 추가</p></div>
          <div class="fact"><span class="type">USER EVIDENCE</span><p>사용자 요구 근거는 추가 검증 필요</p></div>
          <div class="fact"><span class="type">DIFFERENTIATION</span><p>경쟁앱과 차별화 가능성이 있으나 흔한 AI 기능으로 보일 위험 존재</p></div>
          <div class="fact"><span class="type">RESULT</span><p>즉시 개발보다 MVP 실험 후보로 유지</p></div>
        </div>
      </section>` : ''}
    `;
    bindContent();
  }

  function appView(id) {
    const app = data.apps.find(x => x.id === id);
    if (!app) return;
    setHeader('APP PORTFOLIO', app.name, app.stage+' · '+app.goal);
    const tsks = data.tasks.filter(t => t.app === app.name);
    const acts = data.activities.filter(a => a.app === app.name);
    const decs = data.decisions.filter(d => d.app === app.name);
    const exps = data.experiments.filter(e => e.app === app.name);
    root.innerHTML = `
      <section class="hero">
        <div class="hero-grid">
          <div>
            <span class="kicker">${app.stage}</span>
            <h2>${app.name}</h2>
            <p>${app.description}</p>
            <div class="mission"><strong>Current Goal</strong><br>${app.goal}</div>
          </div>
          <div class="metric-grid">
            ${metric('오늘 업무',app.today)}
            ${metric('진행 Task',app.active)}
            ${metric('Experiments',app.experiments)}
            ${metric('CEO Decisions',app.decisions)}
          </div>
        </div>
      </section>
      <div class="grid-2">
        <section class="card"><div class="card-title"><h3>Current Tasks</h3></div><div class="list">${tsks.length ? tsks.map(taskRow).join('') : '<div class="empty">Task 없음</div>'}</div></section>
        <section class="card"><div class="card-title"><h3>CEO Decisions</h3></div><div class="list">${decs.length ? decs.map(decisionRow).join('') : '<div class="empty">결정사항 없음</div>'}</div></section>
      </div>
      <div class="grid-2">
        <section class="card"><div class="card-title"><h3>Activity</h3></div><div class="timeline">${acts.slice(-7).map(timelineItem).join('')}</div></section>
        <section class="card"><div class="card-title"><h3>Experiments</h3></div><div class="list">${exps.length ? exps.map(expRow).join('') : '<div class="empty">실험 없음</div>'}</div></section>
      </div>
    `;
    bindContent();
  }

  function taskRow(t) {
    return `<div class="list-row clickable" data-task="${t.id}">
      <div class="grow"><span class="command-id">${t.id} · ${t.command}</span><strong style="display:block;margin-top:4px">${t.title}</strong><p>${t.app} · ${t.role} · 업데이트 ${t.updated}</p><div class="progress"><span style="width:${pct(t.progress)}%"></span></div></div>
      ${badge(t.status,statusClass(t.status))}
    </div>`;
  }
  function decisionRow(d) {
    return `<div class="list-row clickable" data-decision="${d.id}"><div class="grow"><strong>${d.title}</strong><p>${d.team} · ${d.summary}</p></div>${badge(d.status,statusClass(d.status))}</div>`;
  }
  function expRow(e) {
    return `<div class="list-row"><div class="grow"><span class="command-id">${e.id}</span><strong style="display:block;margin-top:4px">${e.title}</strong><p>KPI · ${e.kpi}</p></div>${badge(e.status,statusClass(e.status))}</div>`;
  }
  function artifactCard(a) {
    return `<article class="card"><div class="card-title"><h3>${a.title}</h3>${badge(a.type,'blue')}</div><p class="section-note">${a.app} · ${a.team} · ${a.date}</p><p class="big-summary" style="font-size:13px">${a.summary}</p></article>`;
  }

  function commandsView() {
    setHeader('CEO','CEO Commands','내가 내린 지시가 어떻게 분해되고 실행되는지 추적');
    root.innerHTML = `
      <section class="section">
        <div class="section-head"><h2>Command History</h2><span class="section-note">지시를 클릭하면 실행 흐름이 열립니다.</span></div>
        <div class="grid-2">
          ${data.commands.map(c => `
            <article class="card clickable" data-command="${c.id}">
              <div class="card-title"><div><span class="command-id">${c.id}</span><h3 style="margin-top:5px">${c.title}</h3></div>${badge(c.status,statusClass(c.status))}</div>
              <p class="big-summary" style="font-size:13px">${c.text}</p>
              <p class="section-note">${c.app} · ${c.time} · ${c.teams.join(' → ')}</p>
              <div class="progress"><span style="width:${pct(c.progress)}%"></span></div>
            </article>
          `).join('')}
        </div>
      </section>
    `;
    bindContent();
  }

  function todayView() {
    setHeader('WORK','Today','오늘 회사 전체에서 발생한 업무와 의사결정');
    root.innerHTML = `
      <div class="grid-2">
        <section class="card"><div class="card-title"><h3>Today Timeline</h3>${badge(data.activities.length+' EVENTS','blue')}</div><div class="timeline">${data.activities.map(timelineItem).join('')}</div></section>
        <section class="card"><div class="card-title"><h3>Today Summary</h3></div><p class="big-summary">${data.company.todaySummary}</p><div class="fact-grid">${data.findings.map(f=>`<div class="fact"><span class="type">${f.type}</span><p>${f.text}</p></div>`).join('')}</div></section>
      </div>
    `;
  }

  function tasksView() {
    setHeader('WORK','Tasks','앱·조직·CEO 지시와 연결된 실행 업무');
    root.innerHTML = `<section class="card"><div class="table-wrap"><table><thead><tr><th>ID</th><th>업무</th><th>앱</th><th>조직</th><th>역할</th><th>Command</th><th>상태</th><th>진행률</th></tr></thead><tbody>
      ${data.tasks.map(t=>`<tr class="clickable" data-task="${t.id}"><td>${t.id}</td><td>${t.title}</td><td>${t.app}</td><td>${t.team}</td><td>${t.role}</td><td>${t.command}</td><td>${badge(t.status,statusClass(t.status))}</td><td>${t.progress}%</td></tr>`).join('')}
    </tbody></table></div></section>`;
    bindContent();
  }

  function simpleListView(kind) {
    const map = {
      experiments:['EXPERIMENTS','Experiments','제품과 성장 가설의 검증 현황',data.experiments,expRow],
      decisions:['DECISIONS','Decisions','CEO 판단 대기와 확정된 의사결정',data.decisions,decisionRow],
      artifacts:['ARTIFACTS','Artifacts','리서치·제품·성장 조직이 만든 결과물',data.artifacts,artifactCard]
    };
    const [kick,head,sub,items,renderer] = map[kind];
    setHeader(kick,head,sub);
    root.innerHTML = kind==='artifacts'
      ? `<section class="grid-3">${items.map(renderer).join('')}</section>`
      : `<section class="card"><div class="list">${items.map(renderer).join('')}</div></section>`;
    bindContent();
  }

  function openCommand(id) {
    const c = data.commands.find(x=>x.id===id);
    if (!c) return;
    const related = data.tasks.filter(t=>t.command===id);
    const acts = data.activities.filter(a=>a.command===id);
    drawerContent.innerHTML = `
      <span class="kicker">CEO COMMAND · ${c.id}</span>
      <h2>${c.title}</h2>
      <p class="big-summary">${c.text}</p>
      <div class="card" style="margin-top:16px"><div class="card-title"><h3>Progress</h3>${badge(c.status,statusClass(c.status))}</div><div class="progress"><span style="width:${pct(c.progress)}%"></span></div><p class="section-note">${c.progress}% · ${c.teams.join(' → ')}</p></div>
      <h3 style="margin-top:22px">Execution Flow</h3>
      <div class="tree-flow">${related.map((t,i)=>`<div class="flow-row"><div class="flow-node ${t.status==='COMPLETED'?'done':t.status==='IN PROGRESS'||t.status==='REVIEW'?'progressing':'waiting'}"><strong>${t.team} · ${t.title}</strong><span>${t.id} · ${t.status} · ${t.progress}%</span></div></div>`).join('')}</div>
      <h3 style="margin-top:22px">Current Result</h3>
      <div class="list">${c.result.map(r=>`<div class="list-row"><div class="grow"><strong>${r}</strong></div></div>`).join('')}</div>
      <h3 style="margin-top:22px">Recent Activity</h3>
      <div class="timeline">${acts.map(timelineItem).join('') || '<div class="empty">Activity 없음</div>'}</div>
    `;
    openDrawer();
  }

  function openTask(id) {
    const t=data.tasks.find(x=>x.id===id); if(!t)return;
    drawerContent.innerHTML=`<span class="kicker">TASK · ${t.id}</span><h2>${t.title}</h2><p class="big-summary">${t.app}의 ${t.team} 조직에서 ${t.role} 역할이 수행하는 업무입니다.</p><div class="card"><div class="card-title"><h3>Status</h3>${badge(t.status,statusClass(t.status))}</div><p>CEO Command: <strong>${t.command}</strong></p><p>최근 업데이트: ${t.updated}</p><div class="progress"><span style="width:${pct(t.progress)}%"></span></div></div>`;
    openDrawer();
  }

  function openDecision(id) {
    const d=data.decisions.find(x=>x.id===id); if(!d)return;
    drawerContent.innerHTML=`<span class="kicker">DECISION · ${d.id}</span><h2>${d.title}</h2><p class="big-summary">${d.summary}</p><div class="card"><div class="card-title"><h3>${d.app}</h3>${badge(d.status,statusClass(d.status))}</div><p class="section-note">요청 조직 · ${d.team}</p></div>`;
    openDrawer();
  }

  function openDrawer(){drawer.classList.add('open');drawer.setAttribute('aria-hidden','false')}
  function closeDrawer(){drawer.classList.remove('open');drawer.setAttribute('aria-hidden','true')}

  function bindContent() {
    root.querySelectorAll('[data-open-app]').forEach(x=>x.addEventListener('click',()=>openView('app:'+x.dataset.openApp)));
    root.querySelectorAll('[data-command]').forEach(x=>x.addEventListener('click',()=>openCommand(x.dataset.command)));
    root.querySelectorAll('[data-task]').forEach(x=>x.addEventListener('click',()=>openTask(x.dataset.task)));
    root.querySelectorAll('[data-decision]').forEach(x=>x.addEventListener('click',()=>openDecision(x.dataset.decision)));
  }

  function openView(view) {
    activate(view);
    if (view==='company') companyView();
    else if(view==='commands') commandsView();
    else if(view==='today') todayView();
    else if(view==='tasks') tasksView();
    else if(['experiments','decisions','artifacts'].includes(view)) simpleListView(view);
    else if(view.startsWith('team:')) teamView(view.split(':')[1]);
    else if(view.startsWith('agent:')) agentView(view.split(':')[1]);
    else if(view.startsWith('app:')) appView(view.split(':')[1]);
    window.scrollTo({top:0,behavior:'smooth'});
  }

  drawer.querySelectorAll('[data-close-drawer]').forEach(x=>x.addEventListener('click',closeDrawer));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeDrawer()});
  document.getElementById('refresh-btn').addEventListener('click',()=>openView(document.querySelector('.nav-item.active')?.dataset.view || 'company'));

  renderNav();
  openView('company');
})();