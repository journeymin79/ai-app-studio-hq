window.HQ_DATA = {
  company:{
    name:"AI APP STUDIO",
    mission:"시장 검증 → 제품 개선 → 성장 → 수익화를 반복하는 AI 기반 앱 스튜디오",
    apps:"1 / 3", activeTeams:7, activeTasks:0, completedToday:6, experiments:0, ceoDecisions:0,
    todaySummary:"AI APP STUDIO 실제 운영 첫날. Saytence를 대상으로 JLPT 시장과 주요 경쟁 앱을 조사하고, CEO가 제공한 최신 앱 화면을 기준으로 현행 학습 구조를 분석했습니다. 전 부서가 독립 의견을 냈으며 오늘은 제품 방향을 확정하지 않고 가설과 쟁점을 남긴 상태로 마감했습니다."
  },
  apps:[
    {id:"saytence",name:"Saytence",stage:"Discovery / Product Review",status:"reviewing",goal:"JLPT 중심 포지셔닝과 현행 회독 경험의 경쟁력 검증",today:6,active:0,experiments:0,decisions:0,updated:"2026-09-23",description:"JLPT 단어·문장을 중심으로 카드 회독, 듣기, 녹음, 복습을 제공하며 개인 자료를 다른 언어에도 적용할 수 있는 언어 학습 앱"}
  ],
  teams:[
    {id:"coo",name:"COO",icon:"🤖",role:"회사 운영 조율, 우선순위와 CEO 지시 분해",ai:"ChatGPT",status:"reviewing",apps:["Saytence"],done:1,doing:0,waiting:0,summary:"새 기능 대량 추가보다 기존 엔진의 강점을 보존하고 가치 전달·학습 구조·측정을 먼저 정리해야 한다."},
    {id:"discovery",name:"Discovery",icon:"🔬",role:"시장·경쟁서비스·사용자 문제 탐색",ai:"ChatGPT Research + Gemini",status:"reviewing",apps:["Saytence"],done:2,doing:0,waiting:0,summary:"JLPT 시장은 충분히 크지만 경쟁도 강하다. N3는 좋은 진입점이나 기존 강자의 기능을 모두 따라가면 안 된다."},
    {id:"product",name:"Product",icon:"🧠",role:"제품 전략, 기능 우선순위, UX와 리뉴얼 설계",ai:"ChatGPT",status:"reviewing",apps:["Saytence"],done:2,doing:0,waiting:1,summary:"카드 플레이어는 유지 가치가 높다. 문제 후보는 기능 부족보다 가치 전달, 학습 진입, 단기 목표와 성과 체감이다."},
    {id:"engineering",name:"Engineering",icon:"💻",role:"기술 설계, 개발, 테스트와 릴리스",ai:"Codex + ChatGPT",status:"waiting",apps:["Saytence"],done:0,doing:0,waiting:1,summary:"기존 카드·음성·녹음·통계·import 기반은 재사용 가치가 높다. 제품 방향 확정 전 대규모 변경은 하지 않는다."},
    {id:"growth",name:"Growth",icon:"🚀",role:"ASO, 콘텐츠, 유입과 설치 전환 실험",ai:"ChatGPT + Gemini",status:"waiting",apps:["Saytence"],done:1,doing:0,waiting:1,summary:"JLPT 유입 메시지와 앱 첫 경험이 연결되어야 한다. 다국어를 같은 비중으로 전면 노출하면 포지셔닝이 흐려질 수 있다."},
    {id:"data",name:"Data",icon:"📊",role:"제품·성장 지표 분석과 실험 판정",ai:"ChatGPT",status:"waiting",apps:["Saytence"],done:1,doing:0,waiting:1,summary:"사용자가 적은 지금은 감으로 기능을 늘리기보다 첫 학습, 세션 완료, D1/D7, 카드 평가와 음성 기능 사용을 측정해야 한다."},
    {id:"revenue",name:"Revenue",icon:"💰",role:"AdMob 및 수익화 최적화",ai:"ChatGPT",status:"waiting",apps:["Saytence"],done:1,doing:0,waiting:1,summary:"현재는 광고 노출 극대화보다 활성 사용자와 반복 세션 확보가 우선이며 회독 리듬을 깨는 광고는 피해야 한다."}
  ],
  agents:[
    {id:"market",name:"Market Research",team:"Discovery",ai:"ChatGPT Research",mission:"시장 규모, 수요와 트렌드 조사",status:"completed",app:"Saytence",task:"2025 JLPT 시장 조사 완료",opinion:"2025 JLPT 신청자는 약 194만 명이고 전년보다 증가했다. N3는 7월과 12월 모두 신청자가 가장 많아 현재 N3 콘텐츠는 시장 진입점으로 유지 가치가 높다."},
    {id:"competitor",name:"Competitor Intelligence",team:"Discovery",ai:"ChatGPT Research",mission:"경쟁 앱 기능·포지셔닝 비교",status:"completed",app:"Saytence",task:"주요 경쟁군 분석 완료",opinion:"Migii의 시험, renshuu/Bunpo의 종합성, Kanji Study의 깊이, Anki의 범용성을 모두 따라가면 안 된다. 빠른 JLPT 회독과 약한 카드 집중 경험으로 좁히는 것을 강하게 권고한다."},
    {id:"user-research",name:"User & Review Research",team:"Discovery",ai:"ChatGPT",mission:"사용자 문제와 리뷰 근거 분석",status:"reviewing",app:"Saytence",task:"자체 사용자 근거 부족 확인",opinion:"Saytence 자체 리뷰가 충분하지 않아 사용자 요구를 확정할 수 없다. 경쟁 리뷰는 참고하고 실제 행동 데이터를 우선 확보해야 한다."},
    {id:"pm",name:"Product Manager",team:"Product",ai:"ChatGPT",mission:"리서치를 제품 전략과 우선순위로 변환",status:"reviewing",app:"Saytence",task:"제품 포지셔닝 가설 정리",opinion:"Primary는 'JLPT 단어·문장을 실제로 외워지게 만드는 회독 앱', 다국어는 개인 자료를 같은 방식으로 학습하는 확장 가치로 두는 방향이 가장 일관적이다."},
    {id:"ux",name:"UX",team:"Product",ai:"ChatGPT",mission:"핵심 사용 흐름과 학습 경험 개선",status:"reviewing",app:"Saytence",task:"현행 화면 분석 완료",opinion:"카드 플레이어는 유지 가치가 높다. 홈 개편부터 확정하지 말고 앱 실행→학습 시작→세션 종료→복습의 전체 흐름을 먼저 설계해야 한다."},
    {id:"red-team",name:"Red Team",team:"Product",ai:"ChatGPT",mission:"제품 전략과 가설을 적극 반박·검증",status:"reviewing",app:"Saytence",task:"JLPT 회독 포지셔닝 반박 검토",opinion:"메시지만 JLPT 회독으로 바꾸는 것은 부족하다. 사용자가 짧게 공부해도 무엇을 외웠고 약한 카드가 얼마나 줄었는지 체감하게 만들어야 한다. 그렇지 않으면 Anki의 단순 버전으로 보일 위험이 있다."},
    {id:"tech-lead",name:"Tech Lead",team:"Engineering",ai:"ChatGPT",mission:"구현 범위와 기술 영향 분석",status:"waiting",app:"Saytence",task:"제품 방향 확정 대기",opinion:"현재 화면 기준 기존 카드·음성·녹음·통계·import 기반은 재사용 가치가 높다. 실제 소스 분석 전 재작성 결론을 내리면 안 된다."},
    {id:"developer",name:"Developer",team:"Engineering",ai:"Codex",mission:"코드 구현과 리팩터링",status:"waiting",app:"Saytence",task:"개발 착수 안 함",opinion:"제품 방향과 변경 범위가 합의되기 전 UI 개편 코드를 시작하지 않는 것이 맞다."},
    {id:"qa",name:"QA",team:"Engineering",ai:"ChatGPT",mission:"기능 검증, 회귀 테스트, 릴리스 점검",status:"waiting",app:"Saytence",task:"회귀 기준 후보 정리",opinion:"카드 뒤집기, 세 방향 스와이프, 오디오, 녹음, 이어서 학습, 다시 볼 카드, 언어 전환, import/백업은 리뉴얼 시 반드시 보존 검증해야 한다."},
    {id:"growth-lead",name:"Growth Lead",team:"Growth",ai:"ChatGPT",mission:"유입-활성화-재방문 성장 루프 설계",status:"waiting",app:"Saytence",task:"제품 방향 확정 대기",opinion:"스토어에서 JLPT로 유입시킨다면 첫 앱 경험도 JLPT 목표와 연결되어야 한다. 유입 메시지와 실제 경험이 다르면 활성화가 약해진다."},
    {id:"aso",name:"ASO",team:"Growth",ai:"ChatGPT + Gemini",mission:"스토어 키워드와 전환 요소 최적화",status:"waiting",app:"Saytence",task:"JLPT 중심 ASO 가설",opinion:"JLPT를 중심 키워드로 검토하되 영어회화와 다국어를 같은 비중으로 전면 노출하지 않는 편이 낫다."},
    {id:"content",name:"Content Marketing",team:"Growth",ai:"ChatGPT",mission:"사용자 문제 중심 유입 콘텐츠 기획",status:"waiting",app:"Saytence",task:"콘텐츠 타깃 가설",opinion:"'외워도 계속 잊어버리는 사람', '문제풀이 전에 어휘가 안 잡히는 사람'을 기능보다 먼저 이야기하는 콘텐츠가 적합하다."}
  ],
  commands:[
    {id:"CMD-001",title:"Saytence 경쟁력 재분석 및 리뉴얼 방향 검토",app:"Saytence",time:"2026-09-23",status:"COMPLETED",progress:100,teams:["COO","Discovery","Product","Engineering","Growth","Data","Revenue"],text:"경쟁사와 시장을 조사하고 현행 앱을 실제 화면 기준으로 파악한 뒤 각 부서가 독립 의견을 제시한다. 오늘은 방향을 확정하지 않고 조사와 논의를 마감한다.",result:["JLPT 시장/경쟁군 조사","현행 화면·학습 구조 분석","전 부서/직원 의견 수렴","JLPT 회독 포지셔닝 가설","미결정 쟁점 5개 정리","Daily Report 작성"]}
  ],
  tasks:[
    {id:"RES-001",title:"JLPT 시장 조사",app:"Saytence",team:"Discovery",role:"Market Research",command:"CMD-001",status:"COMPLETED",progress:100,updated:"2026-09-23"},
    {id:"RES-002",title:"주요 경쟁 앱 분석",app:"Saytence",team:"Discovery",role:"Competitor Intelligence",command:"CMD-001",status:"COMPLETED",progress:100,updated:"2026-09-23"},
    {id:"PRD-001",title:"현행 Saytence 화면 및 학습 구조 분석",app:"Saytence",team:"Product",role:"UX",command:"CMD-001",status:"COMPLETED",progress:100,updated:"2026-09-23"},
    {id:"PRD-002",title:"제품 포지셔닝 가설 및 부서 의견 정리",app:"Saytence",team:"Product",role:"Product Manager",command:"CMD-001",status:"COMPLETED",progress:100,updated:"2026-09-23"},
    {id:"RED-001",title:"JLPT 회독 포지셔닝 반박 검토",app:"Saytence",team:"Product",role:"Red Team",command:"CMD-001",status:"COMPLETED",progress:100,updated:"2026-09-23"},
    {id:"OPS-001",title:"오늘 업무 마감 및 실제 데이터 대시보드 전환",app:"Saytence",team:"COO",role:"COO",command:"CMD-001",status:"COMPLETED",progress:100,updated:"2026-09-23"}
  ],
  activities:[
    {time:"오늘",app:"Saytence",team:"CEO",title:"운영 원칙 확정",summary:"Discussion First, Existing Product First, Constructive Challenge 원칙 적용",command:"CMD-001"},
    {time:"오늘",app:"Saytence",team:"Discovery",title:"시장 조사",summary:"JLPT 공식 통계와 주요 경쟁군을 조사",command:"CMD-001"},
    {time:"오늘",app:"Saytence",team:"Product",title:"현행 앱 분석",summary:"CEO 제공 최신 화면으로 학습·내 자료·설정·기록 구조 확인",command:"CMD-001"},
    {time:"오늘",app:"Saytence",team:"Product",title:"전 조직 의견 수렴",summary:"제품·UX·Red Team·Engineering·Growth·Data·Revenue 의견과 반대 논리 정리",command:"CMD-001"},
    {time:"오늘",app:"Saytence",team:"COO",title:"제품 가설 정리",summary:"JLPT 회독 중심 + 다국어 확장 가설을 Decision이 아닌 HYPOTHESIS로 유지",command:"CMD-001"},
    {time:"마감",app:"Saytence",team:"COO",title:"Daily Close",summary:"문서와 대시보드를 실제 오늘 데이터로 정리하고 개발 없이 업무 종료",command:"CMD-001"}
  ],
  decisions:[
    {id:"DEC-001",app:"Saytence",title:"JLPT 중심 포지셔닝 최종 채택",team:"Product",status:"REQUIRED",summary:"현재는 유력 가설. CEO와 다음 논의에서 결정"},
    {id:"DEC-002",app:"Saytence",title:"학습 탭에 오늘 학습/세션 허브를 둘지",team:"Product",status:"REQUIRED",summary:"홈 개편보다 전체 학습 Flow 분석 후 판단"},
    {id:"DEC-003",app:"Saytence",title:"다국어 메시지 노출 수준",team:"Growth",status:"REQUIRED",summary:"확장 가치는 유지하되 JLPT 메시지 희석 위험 검토"},
    {id:"DEC-004",app:"Saytence",title:"전체 진척과 오늘 목표 표현 방식",team:"Product",status:"REQUIRED",summary:"20/2999 같은 전체량과 단기 성취감을 함께 보여주는 방법 검토"},
    {id:"DEC-005",app:"Saytence",title:"녹음을 핵심 차별점으로 승격할지",team:"Product",status:"REQUIRED",summary:"실제 사용률 계측 후 판단하는 방안 검토"}
  ],
  artifacts:[
    {id:"ART-001",title:"Saytence 시장·경쟁사 조사",app:"Saytence",team:"Discovery",type:"Research",date:"2026-09-23",summary:"JLPT 시장 규모와 Migii, renshuu, Kanji Study, AnkiDroid, Bunpo 경쟁 구도",url:"https://docs.google.com/document/d/1psWBOzEwMIgnxN5w9Mg0NwLQslAg3KS-1gHwpAFpkTQ"},
    {id:"ART-002",title:"Saytence 현행 앱 분석 및 부서 의견",app:"Saytence",team:"Product",type:"Product Review",date:"2026-09-23",summary:"실제 화면 기준 강점·문제·부서별 독립 의견·미결정 쟁점",url:"https://docs.google.com/document/d/10zJVwbSH3pY9bkvrHfqLyqGllA5qxeCWhBGSPUrbJmQ"},
    {id:"ART-003",title:"Saytence 제품 토론 기록",app:"Saytence",team:"Product",type:"Discussion",date:"2026-09-23",summary:"JLPT 회독 포지셔닝과 각 역할의 초기 의견 기록",url:"https://docs.google.com/document/d/1v2v7KjyI-MtG1TX4iU_c3bzbopJhwNcXBoN8wCmkT4w"},
    {id:"ART-004",title:"Daily Report 2026-09-23",app:"Saytence",team:"COO",type:"Daily",date:"2026-09-23",summary:"오늘 수행 업무, 발견사항, 가설, 미결정 쟁점과 다음 세션 정리",url:"https://docs.google.com/document/d/1fUo1dbFV4cOXbTWDrSuUfe7oodr2_sspifk9YTYJVCc"}
  ],
  experiments:[],
  findings:[
    {type:"FACT",text:"2025 JLPT 신청자는 1,940,852명이며 2024년 대비 약 12.9% 증가했다."},
    {type:"FACT",text:"N3는 2025년 7월과 12월 모두 JLPT 신청자가 가장 많은 레벨이었다."},
    {type:"FACT",text:"현행 Saytence에는 카드 회독, 듣기, 느리게 듣기, 녹음, 다시보기, 언어 선택, JSON import, 백업, 학습 기록이 존재한다."},
    {type:"ANALYSIS",text:"현재 문제 후보는 기능 부족보다 가치 전달, 학습 진입, 단기 목표와 성과 체감에 더 가깝다."},
    {type:"HYPOTHESIS",text:"JLPT 단어·문장을 실제로 외워지게 만드는 회독 앱을 Primary로, 다국어를 확장 가치로 두는 방향을 검토한다."},
    {type:"RED TEAM",text:"포지셔닝 문구만 바꾸면 부족하다. 약한 카드 감소와 기억 성과가 실제 제품 경험에서 보여야 한다."}
  ]
};