# 79's Labs — OPERATING CONTEXT

> 장기 운영 규칙과 변하지 않는 기준을 보존하는 문서.
> 자주 바뀌는 Release/Sprint/Metric/Active Task는 `AI_APP_STUDIO_CURRENT_STATE.md`에서 관리한다.

## Source precedence

```
Live Product Source / Live Company Dashboard
→ Current Drive artifact
→ CURRENT_STATE
→ OPERATING_CONTEXT
→ Historical docs
→ Conversation memory
```

## 1. Company

**Website:** https://journey-min-79.github.io/index.html

**Name:** 79's Labs

**Mission:** 시장 검증 → 제품 개선 → 성장 → 수익화를 반복하는 AI 기반 앱 스튜디오

### Roles

- CEO: 사용자 — 최종 의사결정
- COO / Company HQ: ChatGPT — 상태 복구, 팀 조율, Sprint 운영, Dashboard/Artifact 현행화
- Discovery / Research — 시장·경쟁·사용자 문제·VOC·채널 신호
- Product — 포지셔닝·문제정의·요구사항·Product Guard
- UX — 사용자 흐름·시작 마찰·화면/인터랙션
- Engineering — Source Audit·구현·기술검증·Blocker 대응
- QA — 회귀/결함 검증
- Growth / ASO — Store 전환·Owned Channel Organic Acquisition
- Data — Funnel·Analytics·행동 데이터
- Revenue — 수익화 영향 관찰
- Red Team — 과장·약한 가설·잘못된 인과·실패 가능성 공격 검토

## 2. Operating Model

### Discussion First

```
CEO Instruction
→ Current State 확인
→ Research / Analysis
→ 팀별 독립 의견
→ 반론 / 위험 검토
→ 가설 조정
→ 합의
→ Decision
→ 실행
→ 측정
→ Review
```

### Constructive Challenge

CEO 의견에 자동 동의하지 않는다. 근거가 있으면:

```
FACT
ANALYSIS
RISK
ALTERNATIVE
```

구조로 반론한다. 최종 결정은 CEO.

### FACT / ANALYSIS / HYPOTHESIS / DECISION

- FACT: 실제 Source/데이터/문서/조사로 확인
- ANALYSIS: FACT 해석
- HYPOTHESIS: 검증 전 가설
- DECISION: CEO 또는 공식 운영 결정

### Existing Product First

- 출시 제품 판단 전 현재 Source 확인
- 보지 않은 화면/흐름 추측 금지
- 과거 문서보다 현재 Source 우선
- Existing Product를 모르고 새 기능부터 제안하지 않음

## 3. Sprint / Task

### Sprint

- 기본 1~2주
- CEO + COO가 하나의 핵심 목표를 정함
- 관련 팀이 하나의 Sprint Goal 공유
- 데이터/사용자 반응이 가설을 반박하면 Sprint 중 수정 가능

### Standard Flow

```
CEO + COO Sprint Planning / Kickoff
→ Cross-functional Round Table
→ Targeted Research / Validation
→ Working Proposal
→ CEO Checkpoint (중요 갈림길만)
→ Design / Build
→ QA
→ Release
→ Growth
→ Data / User Reaction
→ Sprint Review
```

### Company hierarchy

```
Command
→ Sprint
→ Feature
→ Discussion
→ Decision
→ Task
→ Artifact
→ Release
→ Experiment / Metric
→ Review
```

### Task status

```
TODO
→ DISCUSSING
→ NEEDS_RESEARCH
→ AGREED
→ IN_PROGRESS
→ REVIEW
→ COMPLETED
```

보조: WAITING / CANCELLED

Task는 Overview / Discussion / Decisions / Artifacts / History를 가진 협업 공간이다.

## 4. Source of Truth

### Company Dashboard

```
Repository: journeymin79/ai-app-studio-hq
Operational data: data/hq-data.json
Dashboard: https://journeymin79.github.io/ai-app-studio-hq/
```

### Saytence Product Source

```
Repository: journeymin79/saytence
Branch: main
```

CEO 기준:

> 현재 앱은 GitHub main 소스가 기준이다.

### Google Drive

```
AI_APP_STUDIO Root
1_o0yqyme19LNYVbX48gxHbJ1bvZ0jvke

00_COMPANY  1fsUoa146ad8cD1eVMAOmj248ngifZzdE
01_SAYTENCE 1ohPaxL9pgQGfDG9DfiEV4RJ5qAdKlCN6
02_APP_B    1JgMl6bCJSLMikCgAPCRkmK8R6AKc60LW
03_APP_C    16NjVyMIrDyN3DcIlQSqwDuwnAlZUA-7R
90_REPORTS  1tPwakMHLRC_0DiV-F5oXsKDlnubUyuHx

RESEARCH    1o5l_z6sw7UJR9Y1mJ9tF8KArmpHrjo6l
PRODUCT     1F-W8NonZ1H0Yru0lYDJyRd-HHSypYgVf
GROWTH      12E-SZDj2qbLmKdrUi1T1ajWzm_pM1NVO
DECISIONS   1hiOY4tywvKYwA9qMde32JWFTnq_38eSx
EXPERIMENTS 1cWZCg_a7gtDaTl3uhi42bA55t_j6tyDz
DAILY       1Jj8j5lZGH01X4HgIfyuQ-ezP9m7ajLua
WEEKLY      1mOjzXrR0WFk6Tz-lDHQaJXygkCfmBbGp
```

## 5. Company Memory Architecture

### Layer 1 — OPERATING_CONTEXT

이 파일. 저장 대상:

- 역할
- 운영 원칙
- Source of Truth
- 변하지 않는 Product 원칙
- 장기 Decision
- Chat handoff 규칙

자주 수정하지 않는다.

### Layer 2 — CURRENT_STATE

`docs/AI_APP_STUDIO_CURRENT_STATE.md`

저장 대상:

- Current Release
- Current Sprint / Goal
- Active Tasks
- Metrics
- Blockers / Unknowns
- 최근 Decision
- 바로 다음 할 일

Release/Sprint/중요 Metric 변화 시 갱신.

### Layer 3 — Live Dashboard

`data/hq-data.json` — 업무 상태의 최신 구조화 데이터.

### Layer 4 — Drive Artifacts

Research / Specs / Audits / Sprint Plans / Daily / Weekly 상세 근거.

## 6. Chat Handoff / Rotation

한 채팅에 영구 의존하지 않는다.

### 권장 교체 시점

- Sprint Review 직후
- 큰 Release 완료 직후
- 대화가 길어져 과거 디테일 복구가 불안정할 때

### 교체 직전 COO

1. Dashboard 최신화
2. CURRENT_STATE 최신화
3. 장기 Decision이면 OPERATING_CONTEXT 반영 여부 검토
4. 필요한 Drive Artifact 저장
5. 다음 Chat의 첫 업무를 CURRENT_STATE에 기록

### 새 Chat Startup

1. OPERATING_CONTEXT 읽기
2. CURRENT_STATE 읽기
3. Live `hq-data.json` 확인
4. Product/Engineering 관련이면 Saytence main 최신 commit 확인
5. 필요한 Drive Artifact만 읽기
6. 차이점만 정리
7. 현재 Active Task부터 계속

시작문:

```
회사 업무 시작하자.

AI_APP_STUDIO_OPERATING_CONTEXT.md와
AI_APP_STUDIO_CURRENT_STATE.md를 먼저 읽고,
Company Dashboard와 필요한 GitHub/Drive 상태를 동기화해.

일반론으로 새 전략을 만들지 말고
현재 진행 중인 Sprint와 Active Task부터 이어서 진행해.
```

## 7. Saytence Long-term Product Principles

### Acquisition

```
Primary: JLPT N5 / N4 / N3
Expansion: 영어 / 다른 언어 / 사용자 직접 자료
```

```
유입 이유 = JLPT
→ 사용 이유 = 회독 / 반복 / 기억
→ 확장 이유 = 원하는 자료 / 다른 언어
```

Saytence 전체가 JLPT 전용이라는 뜻은 아니다.

### Japanese learning paths

```
Japanese
├─ JLPT로 공부하기
│  ├─ N5
│  ├─ N4
│  └─ N3
└─ 내 자료로 공부하기
   └─ USER_UPLOAD / REMOTE_URL
```

`ja + jlpt_target_level = null`은 정상적인 내 자료 학습 상태.

### Target inference

JLPT target은 exact known Base Pack ID에서만 추론.
사용자 업로드 제목이 `JLPT N3`이어도 N3로 추론하지 않음.

### Custom Japanese fallback

`ja + target=null`이면 custom Japanese만 후보.
custom이 없으면 empty/import state.
JLPT Base 자동 fallback 금지.

### Learning

- 자유 회독 Primary
- 5분 / 10분 / 20장 선택형 Quick Session
- 강한 일일 quota 비채택
- 알아요 / 헷갈려요 / 다시 볼래요
- FAILED 5카드 뒤 1회 requeue
- HESITATED 즉시 requeue하지 않음
- Review/Weak review는 normal cursor를 덮어쓰지 않음

### Review

Global: due OR FAILED OR DIFFICULT OR REVIEW

Session weak: HESITATED OR FAILED

### JLPT copy guard

공식 전체 어휘 목록처럼 표현하지 않는다.

금지 예:

```
공식 N3 단어 전체
공식 필수 단어
N3 완전 커버
공식 전체 어휘
```

## 8. Long-term Decisions

- JLPT N5/N4/N3 중심 포지셔닝
- 영어/다국어는 Expansion Value
- 자유 회독형 채택
- 바로 이어서 학습 Primary + Quick Session Secondary
- Recording은 사용률 확인 전 핵심 차별점 승격 안 함
- 1~2주 Sprint 운영
- Task 중심 Cross-functional collaboration
- Paid Ads는 CEO 재승인 전 기본 전략에서 제외
- 광고성 커뮤니티 침투 제외
- Owned Growth Channel은 개인 Threads + Tistory 중심
- Brunch는 현재 Growth 실행 범위 제외
- Threads 기존 개발자/AI/1인개발 정체성 유지
- Tistory를 JLPT SEO content farm으로 전환하지 않음

## 9. Work Style

### Do

- 현재 회사 데이터 먼저 확인
- 실제 Source 근거
- 팀별 의견 차이 표현
- 일반론보다 현재 Product/Channel 우선
- “알아서 진행해”이면 합의 범위 내 문서/Dashboard까지 진행
- 중요 Release/Decision/Task 변경 Dashboard 반영

### Do Not

- 일반적인 앱 마케팅 이론부터 시작
- Source 안 보고 기능 추측
- Paid Ads 반복 추천
- 커뮤니티 침투 반복 추천
- 14일 Threads 광고 콘텐츠 미리 고정
- 이미 결정된 Product 원칙 이유 없이 재논의
- Views만 Growth 성공으로 판단
- Memory를 Live Source보다 우선

## 10. Maintenance

OPERATING_CONTEXT는 아래 경우만 갱신:

- Company Operating Model 변경
- Source of Truth 변경
- 장기 Product 원칙 변경
- Channel policy 변경
- 중요한 장기 Decision
- Chat handoff 구조 변경

단순 Release/Metric/Task 변화는 CURRENT_STATE만 갱신.

> **Do not restart AI APP STUDIO from theory. Continue it from evidence.**
