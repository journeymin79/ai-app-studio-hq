window.HQ=window.HQ||{};
(H=>{
H.views=H.views||{};
const D=()=>H.s.data;
const section=(title,note,body)=>`<section class="section"><div class="section-head"><h2>${H.e(title)}</h2>${note?`<span class="section-note">${H.e(note)}</span>`:''}</div>${body}</section>`;
const teamForAgent=a=>D().teams.find(t=>t.name===a.team);

H.views.experiments=()=>{H.head('GROWTH','Experiments','실험 계획부터 실행·분석·완료 결과까지 누적');const xs=H.visible(D().experiments);H.el.root.innerHTML=`<div class="page-enter"><section class="hero"><div class="hero-grid"><div><span class="kicker">EXPERIMENT LOOP</span><h2>Plan → Run → Measure → Learn</h2><p>마케팅·제품 실험은 실행 전 가설과 측정 기준을 남기고 결과까지 같은 객체로 추적합니다.</p></div><div class="metric-grid">${H.metric('All',xs.length)}${H.metric('Running',xs.filter(x=>x.status==='RUNNING').length)}${H.metric('Planned',xs.filter(x=>x.status==='PLANNED').length)}${H.metric('Completed',xs.filter(x=>x.status==='COMPLETED').length)}</div></div></section>${xs.length?section('Experiment History','과거 실험도 유지',`<div class="grid-2">${xs.map(x=>`<article class="card"><div class="card-title"><div><div class="card-label">${H.e(x.id)} · ${H.e(x.date||'')}</div><h3>${H.e(x.title)}</h3></div>${H.badge(x.status,H.tone(x.status))}</div><p class="big-summary">${H.e(x.summary)}</p><p class="section-note">${H.e(x.app)} · ${H.e(x.team)}</p></article>`).join('')}</div>`):H.empty('실험 없음')}</div>`};

H.views.metrics=()=>{H.head('DATA','Metrics','실제 수치만 표시하고 미연결 지표는 준비 상태로 구분');const m=D().metrics||[];H.el.root.innerHTML=`<div class="page-enter"><section class="hero"><div class="hero-grid"><div><span class="kicker">MEASUREMENT FUNNEL</span><h2>Threads → Store → Install → Study → Complete → Weak Review → D1 / D7</h2><p>현재 Measurement Plan은 준비됐지만 실제 제품 Analytics/Play Console 수치가 이 Dashboard JSON에 연결된 상태는 아닙니다. 가짜 KPI를 채우지 않습니다.</p><div class="mission"><strong>데이터 원칙</strong><br>Baseline이 없는 지표는 먼저 Baseline을 수집하고, 같은 이벤트 정의로 Release 전후를 비교합니다.</div></div><div class="metric-grid">${H.metric('Actual metrics',m.length)}${H.metric('Measurement plan','READY')}${H.metric('Product analytics','NOT CONNECTED')}</div></div></section>${section('Core KPI 준비 상태','실제 수치 연결 전 정의만 확인',`<div class="grid-3"><article class="card"><h3>Activation</h3><p class="big-summary">app open → first study start</p></article><article class="card"><h3>Completion</h3><p class="big-summary">study start → session completion</p></article><article class="card"><h3>Weak Loop</h3><p class="big-summary">completion → weak review start → complete</p></article><article class="card"><h3>Learning Proxy</h3><p class="big-summary">confused/repeat → known 전환</p></article><article class="card"><h3>Retention</h3><p class="big-summary">D1 / D7</p></article><article class="card"><h3>Growth</h3><p class="big-summary">Threads → Store → install</p></article></div>`)}${m.length?section('Actual Metrics','연결된 실제 데이터',`<div class="grid-3">${m.map(x=>H.metric(x.name,x.value)).join('')}</div>`):H.empty('아직 실제 Metric 데이터가 연결되지 않았습니다.','Source Audit 및 Analytics 연결 후 실제 값만 추가합니다.') }</div>`};


H.views.organization=()=>{
  H.head('COMPANY','Organization','CEO → COO → 전문 조직의 역할·현재 참여 업무·보고서·인력 구성을 한눈에 확인');
  const teams=D().teams||[], agents=D().agents||[];
  const coo=teams.find(x=>x.name==='COO');
  const departments=teams.filter(x=>x.name!=='COO');
  const red=agents.find(x=>x.id==='red-team');
  const activeCommand=H.cmd();
  const orgCard=t=>{
    const people=agents.filter(a=>a.team===t.name);
    const tasks=D().tasks.filter(x=>x.team===t.name && H.isOpenTask(x));
    const reports=D().artifacts.filter(x=>String(x.team).includes(t.name));
    return `<article class="org-team-card clickable" data-team="${H.e(t.id)}">
      <div class="org-team-top"><div class="org-icon">${H.e(t.icon||'•')}</div><div class="grow"><span class="card-label">${H.e(t.ai||'')}</span><strong>${H.e(t.name)}</strong><p>${H.e(t.role||'')}</p></div>${H.badge(t.status||'','blue')}</div>
      <div class="mini-stats"><div class="mini-stat"><span>Roles</span><strong>${people.length}</strong></div><div class="mini-stat"><span>Open Tasks</span><strong>${tasks.length}</strong></div><div class="mini-stat"><span>Reports</span><strong>${reports.length}</strong></div></div>
      <div class="org-members">${people.slice(0,4).map(a=>`<span>${H.e(a.name)}</span>`).join('')||'<span>등록 역할 없음</span>'}</div>
    </article>`;
  };
  H.el.root.innerHTML=`<div class="page-enter">
    <section class="hero"><div class="hero-grid"><div><span class="kicker">COMPANY ORGANIZATION</span><h2>한 조직이 하나의 Sprint 목표를 향해 같이 움직입니다.</h2><p>조직도는 보고 체계만 보여주는 화면이 아니라, 각 조직이 현재 어떤 역할로 참여하고 어떤 Task·Report를 만들고 있는지 연결해서 보여줍니다.</p><div class="mission"><strong>현재 회사 운영</strong><br>${H.e(activeCommand?.id||'NO COMMAND')} · ${H.e(activeCommand?.title||'Active Command 없음')}</div></div><div class="metric-grid">${H.metric('Teams',teams.length)}${H.metric('Roles',agents.length)}${H.metric('Open Tasks',D().tasks.filter(H.isOpenTask).length)}${H.metric('Reports',D().artifacts.length)}${H.metric('Apps',D().apps.length)}${H.metric('Sprint',H.sprint()?.id||'Planning')}</div></div></section>

    <section class="org-chart">
      <div class="org-level org-level-top">
        <article class="org-node org-ceo"><span class="org-role">CEO</span><strong>Founder / Final Decision</strong><p>제품·일정·공개·비용의 최종 의사결정</p></article>
      </div>
      <div class="org-connector"></div>
      <div class="org-level">
        <article class="org-node org-coo clickable" data-team="${H.e(coo?.id||'coo')}"><span class="org-role">COO · ChatGPT</span><strong>Company Operations</strong><p>CEO와 Sprint를 계획하고, Task별 협업·쟁점·의존성·보고를 조율</p></article>
      </div>
      <div class="org-branch"></div>
      <div class="org-departments stagger">${departments.map(orgCard).join('')}
        ${red?`<article class="org-team-card special"><div class="org-team-top"><div class="org-icon">🛡️</div><div class="grow"><span class="card-label">INDEPENDENT CHALLENGE</span><strong>Red Team</strong><p>전략·제품·Growth 가정을 반박하고 리스크와 대안을 제시</p></div>${H.badge(red.status||'reviewing','violet')}</div><div class="org-members"><span>${H.e(red.name)}</span><span>${H.e(red.ai)}</span></div></article>`:''}
      </div>
    </section>

    ${section('How the company works','부서별 독립 프로젝트가 아니라 같은 Task에서 협의',`<div class="org-operating-flow">
      <div><span>01</span><strong>CEO + COO</strong><p>Sprint Goal·기간·Feature 합의</p></div>
      <div><span>02</span><strong>Round Table</strong><p>관련 팀 의견·반론·검증</p></div>
      <div><span>03</span><strong>Task Collaboration</strong><p>Task 안에서 합의와 Action 도출</p></div>
      <div><span>04</span><strong>Build / QA / Growth</strong><p>하나의 결과물로 실행</p></div>
      <div><span>05</span><strong>Review</strong><p>Metric·사용자 반응을 다음 Sprint로 환류</p></div>
    </div>`)}

    ${section('Departments','팀 카드를 누르면 구성 역할·Task·보고서·이력을 확인',`<div class="grid-3 stagger">${departments.map(orgCard).join('')}</div>`)}
  </div>`;
  H.el.root.querySelectorAll('[data-team]').forEach(x=>x.onclick=()=>H.openTeam(x.dataset.team));
  H.anim();
};

H.openTeam=id=>{const t=D().teams.find(x=>x.id===id||x.name===id);if(!t)return;const ts=D().tasks.filter(x=>x.team===t.name), reps=D().artifacts.filter(x=>String(x.team).includes(t.name)), acts=D().activities.filter(x=>String(x.team).includes(t.name)), people=D().agents.filter(x=>x.team===t.name);H.el.dc.innerHTML=`<span class="kicker">TEAM · ${H.e(t.name)}</span><h2>${H.e(t.icon||'')} ${H.e(t.name)}</h2><p class="big-summary">${H.e(t.role)}</p><div class="inline">${H.badge(t.status||'','blue')}${H.badge(t.ai||'','violet')}</div><h3>Current Position</h3><div class="card"><p class="big-summary">${H.e(t.summary)}</p></div><h3>Members / Roles</h3><div class="grid-2">${people.map(a=>`<article class="card"><div class="card-title"><h3>${H.e(a.name)}</h3>${H.badge(a.status,H.tone(a.status))}</div><p class="section-note">${H.e(a.ai)}</p><p class="big-summary">${H.e(a.opinion)}</p></article>`).join('')||H.empty('등록 역할 없음')}</div><h3>Tasks</h3><div class="list">${ts.map(H.task).join('')||H.empty('Task 없음')}</div><h3>Reports</h3><div class="grid-2">${reps.map(H.report).join('')||H.empty('Report 없음')}</div><h3>History</h3>${H.timeline(acts)}`;H.openDrawer();H.bindDrawer();H.anim()};

H.views.teams=()=>{H.head('ORGANIZATION','Teams','조직도가 아니라 각 팀이 어떤 일에 참여했고 무엇을 보고했는지 확인');const xs=D().teams;H.el.root.innerHTML=`<div class="page-enter"><section class="grid-3">${xs.map(t=>{const ts=D().tasks.filter(x=>x.team===t.name),rp=D().artifacts.filter(x=>String(x.team).includes(t.name)),ac=D().activities.filter(x=>String(x.team).includes(t.name));return `<article class="card clickable" data-team="${H.e(t.id)}"><div class="card-title"><div><div class="card-label">${H.e(t.ai)}</div><h3>${H.e(t.icon||'')} ${H.e(t.name)}</h3></div>${H.badge(t.status||'','blue')}</div><p class="big-summary">${H.e(t.summary)}</p><div class="mini-stats"><div class="mini-stat"><span>Tasks</span><strong>${ts.length}</strong></div><div class="mini-stat"><span>Reports</span><strong>${rp.length}</strong></div><div class="mini-stat"><span>History</span><strong>${ac.length}</strong></div></div></article>`}).join('')}</section></div>`;H.el.root.querySelectorAll('[data-team]').forEach(x=>x.onclick=()=>H.openTeam(x.dataset.team))};

H.views.timeline=()=>{H.head('MEMORY','Timeline','Command · Activity · Decision · Report · Sprint · Release를 날짜순으로 통합');const xs=H.timelineData();H.el.root.innerHTML=`<div class="page-enter"><section class="hero"><div class="hero-grid"><div><span class="kicker">COMPANY MEMORY</span><h2>회사의 모든 일을 시간축으로 추적합니다.</h2><p>현재 상태는 Overview에서, 왜 그렇게 되었는지는 Timeline에서 확인합니다. 과거 기록을 오늘 상태로 덮어쓰지 않습니다.</p></div><div class="metric-grid">${H.metric('Events',xs.length)}${H.metric('Activities',H.visible(D().activities).length)}${H.metric('Reports',H.visible(D().artifacts).length)}${H.metric('Decisions',H.visible(D().decisions).length)}</div></div></section>${H.timeline(xs)}</div>`};

H.views.releases=()=>{H.head('DELIVERY','Releases','실제 앱에 나간 변경만 Release 기록으로 남김');const xs=H.visible(D().releases);H.el.root.innerHTML=`<div class="page-enter"><section class="hero"><div class="hero-grid"><div><span class="kicker">RELEASE HISTORY</span><h2>설계 완료와 실제 출시를 구분합니다.</h2><p>문서나 계획이 끝났다고 Release로 기록하지 않습니다. 실제 배포된 버전과 포함 Feature, QA 결과, Store/Growth 연결을 기록합니다.</p></div><div class="metric-grid">${H.metric('Releases',xs.length)}${H.metric('Current app','Saytence')}${H.metric('Next Release','PREPARING')}</div></div></section>${xs.length?section('Release History','실제 배포 이력',`<div class="grid-2">${xs.map(x=>`<article class="card"><div class="card-title"><h3>${H.e(x.title)}</h3>${H.badge(x.status||'RELEASED','green')}</div><p class="big-summary">${H.e(x.summary)}</p><p class="section-note">${H.e(x.date||'')}</p></article>`).join('')}</div>`):H.empty('신규 운영모델 기준 Release 기록은 아직 없습니다.','Saytence는 이미 출시된 앱이지만, 이 운영판에서 추적할 다음 Release부터 버전 단위로 누적합니다.')}</div>`};

H.openApp=id=>{const a=D().apps.find(x=>x.id===id||x.name===id);if(!a)return;const ts=D().tasks.filter(x=>x.app===a.name),rp=D().artifacts.filter(x=>x.app===a.name),ac=D().activities.filter(x=>x.app===a.name);H.el.dc.innerHTML=`<span class="kicker">APP · ${H.e(a.id)}</span><h2>${H.e(a.name)}</h2><div class="inline">${H.badge(a.stage,'blue')}${H.badge(a.status,'green')}</div><p class="big-summary">${H.e(a.description)}</p><div class="card"><h3>Current Goal</h3><p class="big-summary">${H.e(a.goal)}</p></div><h3>Tasks</h3><div class="list">${ts.map(H.task).join('')||H.empty('Task 없음')}</div><h3>Reports</h3><div class="grid-2">${rp.map(H.report).join('')||H.empty('Report 없음')}</div><h3>History</h3>${H.timeline(ac)}`;H.openDrawer();H.bindDrawer();H.anim()};

H.views.apps=()=>{H.head('PORTFOLIO','Apps','앱별 현재 상태부터 과거 Task·Decision·Report·Activity까지 추적');const xs=D().apps;H.el.root.innerHTML=`<div class="page-enter"><section class="grid-3">${xs.map(a=>`<article class="card clickable" data-app="${H.e(a.id)}"><div class="card-title"><div><div class="card-label">${H.e(a.stage)}</div><h3>${H.e(a.name)}</h3></div>${H.badge(a.status,'green')}</div><p class="big-summary">${H.e(a.goal)}</p><div class="mini-stats"><div class="mini-stat"><span>Tasks</span><strong>${D().tasks.filter(x=>x.app===a.name).length}</strong></div><div class="mini-stat"><span>Reports</span><strong>${D().artifacts.filter(x=>x.app===a.name).length}</strong></div><div class="mini-stat"><span>History</span><strong>${D().activities.filter(x=>x.app===a.name).length}</strong></div></div></article>`).join('')}</section></div>`;H.el.root.querySelectorAll('[data-app]').forEach(x=>x.onclick=()=>H.openApp(x.dataset.app))};

H.views.backlog=()=>{H.head('PLANNING','Backlog','아직 Sprint에 들어가지 않은 명시적 Feature/Idea만 보관');const xs=H.visible(D().backlog);H.el.root.innerHTML=`<div class="page-enter"><section class="hero"><div class="hero-grid"><div><span class="kicker">BACKLOG</span><h2>Sprint 밖의 아이디어를 실행 중인 일과 섞지 않습니다.</h2><p>대화에서 나온 모든 아이디어를 자동 Backlog로 만들지 않고, COO가 Sprint Planning 후보로 명시한 것만 기록합니다.</p></div><div class="metric-grid">${H.metric('Items',xs.length)}${H.metric('Active Sprint',H.sprint()?.id||'NONE')}</div></div></section>${xs.length?section('Backlog Items','다음 Planning 후보',`<div class="list">${xs.map(x=>`<div class="list-row"><div class="grow"><strong>${H.e(x.title)}</strong><p>${H.e(x.summary||'')}</p></div>${H.badge(x.status||'BACKLOG')}</div>`).join('')}</div>`):H.empty('현재 구조화된 Backlog가 없습니다.','첨 Sprint Planning에서 CEO + COO가 후보 Feature를 합의하면 여기서 Sprint로 이동합니다.')}</div>`};
})(window.HQ);
