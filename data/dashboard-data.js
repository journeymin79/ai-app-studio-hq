window.HQ_DATA = {
  company:{
    name:"AI APP STUDIO",
    mission:"시장 검증 → 제품 개선 → 성장 → 수익화를 반복하는 AI 기반 앱 스튜디오",
    apps:3, activeTeams:6, activeTasks:11, completedToday:7, experiments:5, ceoDecisions:3,
    todaySummary:"오늘은 Saytence 제품 경쟁력 검증에 집중했습니다. Discovery 팀이 경쟁 앱과 사용자 리뷰를 분석했고 Product 팀은 Feature Gap과 온보딩 개선 방향을 검토했습니다."
  },
  apps:[
    {id:"saytence",name:"Saytence",stage:"Product Renewal",status:"working",goal:"핵심 기능과 온보딩 경쟁력 재검증",today:4,active:3,experiments:2,decisions:1,updated:"17:05",description:"영어 문장 학습과 반복 복습을 돕는 앱"},
    {id:"app-b",name:"App B",stage:"Discovery",status:"reviewing",goal:"시장성과 사용자 문제 검증",today:2,active:1,experiments:1,decisions:0,updated:"15:20",description:"두 번째 출시 앱"},
    {id:"app-c",name:"App C",stage:"Growth",status:"working",goal:"스토어 유입과 설치 전환 개선",today:3,active:2,experiments:2,decisions:2,updated:"16:40",description:"세 번째 출시 앱"}
  ],
  teams:[
    {id:"coo",name:"COO",icon:"🤖",role:"회사 운영 조율, 우선순위와 CEO 지시 분해",ai:"ChatGPT",status:"working",apps:["Saytence","App B","App C"],done:3,doing:2,waiting:1,summary:"CEO 지시를 부서별 Task로 분해하고 결과를 종합합니다."},
    {id:"discovery",name:"Discovery",icon:"🔬",role:"시장·경쟁서비스·사용자 문제 탐색",ai:"Gemini + ChatGPT Research",status:"working",apps:["Saytence","App B"],done:4,doing:1,waiting:2,summary:"경쟁앱 14개와 사용자 리뷰를 분석해 Product 팀에 근거를 전달했습니다."},
    {id:"product",name:"Product",icon:"🧠",role:"제품 전략, 기능 우선순위, UX와 리뉴얼 설계",ai:"ChatGPT",status:"reviewing",apps:["Saytence"],done:3,doing:2,waiting:1,summary:"Feature Gap을 정리하고 온보딩 및 맞춤 복습 기능을 검토했습니다."},
    {id:"engineering",name:"Engineering",icon:"💻",role:"기술 설계, 개발, 테스트와 릴리스",ai:"Codex + ChatGPT",status:"waiting",apps:["Saytence"],done:1,doing:1,waiting:2,summary:"리뉴얼 범위 확정 후 개발 착수를 기다리고 있습니다."},
    {id:"growth",name:"Growth",icon:"🚀",role:"ASO, 콘텐츠, 유입과 설치 전환 실험",ai:"ChatGPT + Gemini",status:"working",apps:["App C","Saytence"],done:2,doing:2,waiting:1,summary:"App C ASO 실험과 Saytence 콘텐츠 주제를 준비했습니다."},
    {id:"data",name:"Data",icon:"📊",role:"제품·성장 지표 분석과 실험 판정",ai:"ChatGPT",status:"waiting",apps:["Saytence","App B","App C"],done:1,doing:1,waiting:1,summary:"현재 사용자 수가 적어 기본 측정 체계와 KPI 정의를 우선하고 있습니다."},
    {id:"revenue",name:"Revenue",icon:"💰",role:"AdMob 및 수익화 최적화",ai:"ChatGPT",status:"waiting",apps:["Saytence","App B","App C"],done:0,doing:0,waiting:2,summary:"사용자 기반 확보 이후 본격적인 광고 수익 최적화를 진행합니다."}
  ],
  agents:[
    {id:"market",name:"Market Research",team:"Discovery",ai:"Gemini",mission:"시장, 검색 수요, 대체재와 트렌드를 조사",status:"working",app:"Saytence",task:"시장성 재검증"},
    {id:"competitor",name:"Competitor Intelligence",team:"Discovery",ai:"Gemini",mission:"경쟁 앱 기능·가격·포지셔닝 비교",status:"working",app:"Saytence",task:"경쟁앱 14개 분석"},
    {id:"user-research",name:"User & Review Research",team:"Discovery",ai:"Gemini",mission:"리뷰와 사용자 불만·요구사항 분석",status:"working",app:"Saytence",task:"리뷰 230건 분석"},
    {id:"pm",name:"Product Manager",team:"Product",ai:"ChatGPT",mission:"리서치를 제품 전략과 기능 우선순위로 변환",status:"working",app:"Saytence",task:"Product Audit"},
    {id:"ux",name:"UX",team:"Product",ai:"ChatGPT",mission:"온보딩과 핵심 사용 흐름 개선",status:"reviewing",app:"Saytence",task:"온보딩 5→2단계 검토"},
    {id:"red-team",name:"Red Team",team:"Product",ai:"Gemini + ChatGPT",mission:"제품 전략과 가설을 반박하고 검증",status:"waiting",app:"Saytence",task:"맞춤 복습 MVP 검증"},
    {id:"tech-lead",name:"Tech Lead",team:"Engineering",ai:"ChatGPT",mission:"구현 범위와 기술 변경 영향 분석",status:"waiting",app:"Saytence",task:"리뉴얼 범위 확정 대기"},
    {id:"developer",name:"Developer",team:"Engineering",ai:"Codex",mission:"실제 코드 구현과 리팩터링",status:"waiting",app:"Saytence",task:"개발 대기"},
    {id:"qa",name:"QA",team:"Engineering",ai:"ChatGPT",mission:"기능 검증, 회귀 테스트, 릴리스 점검",status:"waiting",app:"Saytence",task:"개발 완료 대기"},
    {id:"growth-lead",name:"Growth Lead",team:"Growth",ai:"ChatGPT",mission:"유입-설치-재방문 성장 루프 설계",status:"working",app:"App C",task:"유입 문제 분석"},
    {id:"aso",name:"ASO",team:"Growth",ai:"Gemini + ChatGPT",mission:"스토어 키워드와 전환 요소 최적화",status:"working",app:"App C",task:"ASO 포지셔닝 실험"},
    {id:"content",name:"Content Marketing",team:"Growth",ai:"ChatGPT",mission:"Threads 등 유입 콘텐츠 기획",status:"reviewing",app:"Saytence",task:"콘텐츠 주제 8개 작성"}
  ],
  commands:[
    {id:"CMD-023",title:"Saytence 경쟁력 재분석",app:"Saytence",time:"09:15",status:"IN PROGRESS",progress:72,teams:["COO","Discovery","Product","Red Team"],text:"Saytence 앱의 현재 경쟁력을 다시 분석하고 리뉴얼이 필요한 기능을 제안해.",result:["경쟁앱 14개 분석","리뷰 230건 분석","Pain Point 8개","Feature Gap 6개","개선 후보 5개"]},
    {id:"CMD-022",title:"App C 유입 문제 분석",app:"App C",time:"14:10",status:"IN PROGRESS",progress:66,teams:["Growth","Data"],text:"App C 다운로드가 적은 원인을 유입과 스토어 전환 관점에서 분석해.",result:["스토어 포지셔닝 재검토","ASO 실험 2개 설계"]},
    {id:"CMD-021",title:"App B 시장 조사",app:"App B",time:"10:05",status:"COMPLETED",progress:100,teams:["Discovery"],text:"App B 시장성과 직접 경쟁 서비스를 다시 조사해.",result:["경쟁 범주 정리","시장 검증 추가 필요"]},
    {id:"CMD-020",title:"Saytence 리뉴얼 검토",app:"Saytence",time:"어제",status:"COMPLETED",progress:100,teams:["Product"],text:"현재 화면과 기능 중 리뉴얼할 후보를 정리해.",result:["온보딩","복습 UX","스토어 메시지"]}  
  ],
  tasks:[
    {id:"RES-031",title:"시장 조사",app:"Saytence",team:"Discovery",role:"Market Research",command:"CMD-023",status:"COMPLETED",progress:100,updated:"10:20"},
    {id:"RES-032",title:"경쟁앱 분석",app:"Saytence",team:"Discovery",role:"Competitor Intelligence",command:"CMD-023",status:"COMPLETED",progress:100,updated:"10:35"},
    {id:"RES-033",title:"리뷰 분석",app:"Saytence",team:"Discovery",role:"User & Review Research",command:"CMD-023",status:"COMPLETED",progress:100,updated:"11:10"},
    {id:"PRD-018",title:"Feature Gap 및 제품 개선안",app:"Saytence",team:"Product",role:"Product Manager",command:"CMD-023",status:"IN PROGRESS",progress:80,updated:"15:22"},
    {id:"RED-009",title:"리뉴얼 전략 검증",app:"Saytence",team:"Product",role:"Red Team",command:"CMD-023",status:"WAITING",progress:0,updated:"15:30"},
    {id:"GRO-012",title:"ASO 포지셔닝 실험",app:"App C",team:"Growth",role:"ASO",command:"CMD-022",status:"IN PROGRESS",progress:65,updated:"16:40"},
    {id:"DAT-004",title:"유입 Funnel 정의",app:"App C",team:"Data",role:"Data Analyst",command:"CMD-022",status:"REVIEW",progress:85,updated:"16:20"}
  ],
  activities:[
    {time:"09:15",app:"Saytence",team:"CEO",title:"CEO 지시 등록",summary:"Saytence 경쟁력 재분석 및 리뉴얼 후보 제안",command:"CMD-023"},
    {time:"09:17",app:"Saytence",team:"COO",title:"업무 분해",summary:"시장·경쟁앱·리뷰·Product Audit·Red Team 검증으로 분해",command:"CMD-023"},
    {time:"09:20",app:"Saytence",team:"Discovery",title:"경쟁 조사 시작",summary:"시장과 직접 경쟁앱 조사 시작",command:"CMD-023"},
    {time:"10:35",app:"Saytence",team:"Discovery",title:"경쟁앱 분석 완료",summary:"14개 앱의 기능·포지셔닝 비교 완료",command:"CMD-023"},
    {time:"11:10",app:"Saytence",team:"Discovery",title:"리뷰 분석 완료",summary:"230개 리뷰에서 Pain Point 8개 분류",command:"CMD-023"},
    {time:"13:20",app:"Saytence",team:"Discovery",title:"Product 전달",summary:"Research 결과와 근거를 Product 팀에 전달",command:"CMD-023"},
    {time:"15:22",app:"Saytence",team:"Product",title:"Feature Gap 정리",summary:"기능 Gap 6개와 개선 후보 5개 도출",command:"CMD-023"},
    {time:"16:30",app:"Saytence",team:"CEO",title:"온보딩 개선 방향 확인",summary:"온보딩 단순화 방향을 계속 검토하기로 함",command:"CMD-023"},
    {time:"17:05",app:"Saytence",team:"Product",title:"PRD 초안 작성",summary:"온보딩 개선안을 제품 문서에 정리",command:"CMD-023"}
  ],
  decisions:[
    {id:"DEC-011",app:"Saytence",title:"맞춤 복습 MVP 포함 여부",team:"Product",status:"REQUIRED",summary:"차별화 가능성은 있으나 Retention 효과와 구현비용 검증 필요"},
    {id:"DEC-010",app:"App C",title:"ASO 포지셔닝 변경",team:"Growth",status:"REQUIRED",summary:"현재 스토어 메시지가 핵심 가치를 충분히 전달하는지 재검토"},
    {id:"DEC-009",app:"App B",title:"추가 리서치 진행",team:"Discovery",status:"DECIDED",summary:"시장 수요 근거가 부족해 추가 조사 진행"},
    {id:"DEC-008",app:"Saytence",title:"온보딩 단순화 검토",team:"Product",status:"DECIDED",summary:"5단계 흐름을 2단계 중심으로 재설계"}
  ],
  artifacts:[
    {id:"ART-031",title:"Saytence 경쟁앱 분석",app:"Saytence",team:"Discovery",type:"Research",date:"오늘",summary:"직접 경쟁앱 14개 기능·가격·포지셔닝 비교"},
    {id:"ART-032",title:"Saytence 리뷰 분석",app:"Saytence",team:"Discovery",type:"Research",date:"오늘",summary:"리뷰 230건의 불만·요구·칭찬 패턴 분류"},
    {id:"ART-033",title:"Saytence Product Audit",app:"Saytence",team:"Product",type:"Product",date:"오늘",summary:"KEEP / IMPROVE / ADD / REMOVE / EXPERIMENT 후보"},
    {id:"ART-034",title:"온보딩 개선안",app:"Saytence",team:"Product",type:"Product",date:"오늘",summary:"온보딩 단순화와 첫 가치 전달 개선"},
    {id:"ART-021",title:"App C ASO 실험안",app:"App C",team:"Growth",type:"Growth",date:"오늘",summary:"스토어 메시지와 키워드 개선 실험"}
  ],
  experiments:[
    {id:"EXP-023",app:"Saytence",title:"온보딩 5→2단계",kpi:"Activation Rate",status:"PLANNED",result:"-"},
    {id:"EXP-022",app:"Saytence",title:"맞춤 복습 MVP",kpi:"D7 Retention",status:"REVIEW",result:"-"},
    {id:"EXP-018",app:"App C",title:"스토어 설명 변경",kpi:"Store CVR",status:"RUNNING",result:"-"},
    {id:"EXP-017",app:"App C",title:"스크린샷 메시지 변경",kpi:"Store CVR",status:"RUNNING",result:"-"}
  ],
  findings:[
    {type:"FACT",text:"경쟁앱 14개를 비교 대상으로 정리했다."},
    {type:"ANALYSIS",text:"현재 문제는 기능 수 자체보다 온보딩과 복습 UX 전달력일 가능성이 있다."},
    {type:"HYPOTHESIS",text:"온보딩을 단순화하면 첫 핵심 기능 도달률이 높아질 수 있다."},
    {type:"DECISION",text:"맞춤 복습 기능은 바로 개발하지 않고 Red Team 검증 후 결정한다."}
  ]
};