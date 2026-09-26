window.HQ=window.HQ||{};
(H=>{
const navSpec=()=>[
 {title:'Company',items:[['company','🏠','Overview'],['current','⚡','Current Work'],['commands','⭐','CEO Commands']]},
 {title:'Execution',items:[['sprints','🏃','Sprints'],['features','🧩','Features'],['tasks','📋','Tasks'],['discussions','💬','Discussions'],['decisions','✅','Decisions']]},
 {title:'Knowledge & Growth',items:[['reports','📄','Reports'],['experiments','🧪','Experiments'],['metrics','📊','Metrics']]},
 {title:'Company Memory',items:[['teams','🏢','Teams'],['timeline','🕒','Timeline'],['releases','🚀','Releases'],['apps','📱','Apps'],['backlog','📚','Backlog']]}
];
H.renderNav=()=>{H.el.nav.innerHTML=navSpec().map(s=>`<section><div class="nav-section-title">${s.title}</div><div class="nav-list">${s.items.map(([id,ic,lb])=>`<button class="nav-item ${H.s.view===id?'active':''}" data-view="${id}"><span class="nav-icon">${ic}</span><span>${lb}</span></button>`).join('')}</div></section>`).join('');H.el.nav.querySelectorAll('[data-view]').forEach(x=>x.onclick=()=>{H.show(x.dataset.view);H.closeNav()})};
H.buildDates=()=>{const d=H.s.data;const dates=[...new Set([...(d.activities||[]).map(H.dateOf),...(d.commands||[]).map(x=>x.time),...(d.tasks||[]).map(x=>x.updated),...(d.decisions||[]).map(x=>x.date),...(d.artifacts||[]).map(x=>x.date),...(d.experiments||[]).map(x=>x.date)].filter(Boolean))].sort().reverse();H.el.date.innerHTML='<option value="ALL">전체 기간</option>'+dates.map(x=>`<option value="${x}">${x}</option>`).join('');H.el.date.value=H.s.date};
H.show=v=>{H.s.view=H.views[v]?v:'company';H.renderNav();H.views[H.s.view]();window.scrollTo({top:0,behavior:'smooth'});history.replaceState(null,'',`#${H.s.view}`)};
H.boot=async()=>{try{const r=await fetch('data/hq-data.json?v=20260926-4',{cache:'no-store'});if(!r.ok)throw new Error(`HTTP ${r.status}`);H.s.data=await r.json();H.buildDates();H.renderNav();H.el.date.onchange=()=>{H.s.date=H.el.date.value;H.show(H.s.view)};let timer;H.el.search.oninput=()=>{clearTimeout(timer);timer=setTimeout(()=>{H.s.query=H.el.search.value.trim();H.show(H.s.view)},120)};H.$('refresh-btn').onclick=()=>location.reload();H.$('menu-button').onclick=()=>{H.el.sidebar.classList.add('open');H.el.scrim.classList.add('open')};H.el.scrim.onclick=H.closeNav;H.el.drawer.querySelectorAll('[data-close-drawer]').forEach(x=>x.onclick=H.closeDrawer);document.addEventListener('keydown',e=>{if(e.key==='Escape'){H.closeDrawer();H.closeNav()}});H.show(location.hash.replace('#','')||'company')}catch(e){H.el.root.innerHTML=H.empty('운영 데이터를 불러오지 못했습니다.',String(e.message||e));H.head('SYSTEM','Dashboard Error','data/hq-data.json 로딩 실패')}};
H.boot();
})(window.HQ);
