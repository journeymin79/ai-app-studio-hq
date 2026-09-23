# Dashboard Data Schema v1

모든 날짜/시간은 ISO 8601 형식을 기본으로 사용한다.

예:
`2026-09-23T15:22:00+09:00`

## company

```js
{
  id: "AI_APP_STUDIO",
  name: "AI APP STUDIO",
  mission: "...",
  timezone: "Asia/Seoul"
}
```

## apps

```js
{
  id: "saytence",
  name: "Saytence",
  stage: "PRODUCT_RENEWAL",
  status: "ACTIVE",
  goal: "...",
  storeUrl: "...",
  repositoryUrl: "...",
  updatedAt: "2026-09-23T17:05:00+09:00"
}
```

## teams

```js
{
  id: "discovery",
  name: "Discovery",
  role: "시장·경쟁서비스·사용자 문제 탐색",
  primaryAI: ["Gemini", "ChatGPT"],
  status: "WORKING"
}
```

## agents

```js
{
  id: "competitor-intelligence",
  name: "Competitor Intelligence",
  teamId: "discovery",
  ai: "Gemini",
  mission: "...",
  status: "WORKING"
}
```

## commands

```js
{
  id: "CMD-001",
  title: "Saytence 경쟁력 재분석",
  appId: "saytence",
  instruction: "Saytence의 경쟁력을 다시 분석하고 리뉴얼 방향을 제안해.",
  status: "ACTIVE",
  priority: "HIGH",
  createdAt: "2026-09-23T09:15:00+09:00",
  completedAt: null,
  progress: 65,
  taskIds: ["RES-001", "RES-002", "PRD-001"],
  decisionIds: ["DEC-001"],
  artifactIds: ["ART-001"]
}
```

## tasks

```js
{
  id: "RES-001",
  commandId: "CMD-001",
  appId: "saytence",
  teamId: "discovery",
  agentId: "competitor-intelligence",
  title: "경쟁앱 분석",
  description: "...",
  status: "IN_PROGRESS",
  priority: "HIGH",
  progress: 70,
  createdAt: "...",
  startedAt: "...",
  completedAt: null,
  updatedAt: "..."
}
```

## activities

```js
{
  id: "ACT-20260923-001",
  timestamp: "2026-09-23T10:35:00+09:00",
  appId: "saytence",
  teamId: "discovery",
  agentId: "competitor-intelligence",
  commandId: "CMD-001",
  taskId: "RES-001",
  type: "TASK_PROGRESS",
  title: "경쟁앱 분석 완료",
  summary: "14개 앱의 기능·가격·포지셔닝 비교 완료",
  artifactId: "ART-001"
}
```

Activity type 권장값:
- COMMAND_CREATED
- TASK_CREATED
- TASK_STARTED
- TASK_PROGRESS
- TASK_COMPLETED
- ARTIFACT_CREATED
- HANDOFF
- DECISION_REQUESTED
- DECISION_MADE
- EXPERIMENT_STARTED
- EXPERIMENT_COMPLETED
- CORRECTION

## artifacts

```js
{
  id: "ART-001",
  appId: "saytence",
  teamId: "discovery",
  commandId: "CMD-001",
  taskId: "RES-001",
  type: "RESEARCH",
  title: "Saytence 경쟁앱 분석",
  summary: "...",
  url: null,
  source: "GOOGLE_DRIVE",
  createdAt: "..."
}
```

Artifact source 권장값:
- GOOGLE_DRIVE
- GITHUB
- LOCAL
- EXTERNAL

Artifact type 권장값:
- RESEARCH
- PRODUCT
- UX
- PRD
- ENGINEERING
- QA
- GROWTH
- DATA
- REPORT

## decisions

```js
{
  id: "DEC-001",
  commandId: "CMD-001",
  appId: "saytence",
  requestedByTeamId: "product",
  title: "맞춤 복습 MVP 포함 여부",
  status: "REQUIRED",
  question: "...",
  evidence: ["ART-001", "ART-002"],
  analysis: "...",
  counterpoint: "...",
  decision: null,
  reason: null,
  requestedAt: "...",
  decidedAt: null
}
```

## experiments

```js
{
  id: "EXP-001",
  appId: "saytence",
  commandId: "CMD-001",
  title: "온보딩 5단계 → 2단계",
  hypothesis: "...",
  change: "...",
  primaryKpi: "Activation Rate",
  baseline: null,
  target: null,
  result: null,
  status: "PLANNED",
  startedAt: null,
  completedAt: null,
  decisionId: null
}
```

## findings

```js
{
  id: "FND-001",
  appId: "saytence",
  commandId: "CMD-001",
  type: "FACT",
  text: "...",
  evidenceArtifactIds: ["ART-001"],
  createdAt: "..."
}
```

Finding type:
- FACT
- ANALYSIS
- HYPOTHESIS
- DECISION

## dailySummaries

```js
{
  date: "2026-09-23",
  headline: "Saytence 경쟁력 검증 집중",
  summary: "...",
  completedTaskIds: [],
  activeTaskIds: [],
  artifactIds: [],
  decisionRequiredIds: [],
  keyFindingIds: [],
  nextActions: [],
  generatedAt: "2026-09-23T18:00:00+09:00"
}
```

## 참조 규칙

가능하면 이름 문자열보다 ID를 저장한다.

예:
- 좋은 방식: `appId: "saytence"`
- 피할 방식: `app: "Saytence"`

화면에서는 ID를 기준으로 apps / teams / agents를 찾아 표시명으로 변환한다.

이 규칙을 사용하면 이름 변경 시 모든 데이터를 수정할 필요가 없다.
