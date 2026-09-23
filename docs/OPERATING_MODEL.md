# AI APP STUDIO 운영 규칙

## 1. 목적

AI APP STUDIO의 모든 업무를 `CEO Command → Task → Activity → Artifact → Decision → Experiment → Daily Summary` 흐름으로 기록한다.

대시보드는 단순 현황판이 아니라, "왜 이 일을 시작했고, 누가 무엇을 했고, 어떤 결과가 나왔고, 무엇을 결정했는지"를 추적하는 운영 기록 시스템으로 사용한다.

---

## 2. 기본 원칙

### 2.1 CEO Command가 업무의 시작점

중요 업무는 가능한 한 하나의 CEO Command에 연결한다.

예:
- CMD-001 Saytence 경쟁력 재분석
- CMD-002 App C 유입 문제 분석

사소한 유지보수처럼 CEO Command가 불필요한 업무는 Task만 생성할 수 있다.

### 2.2 Task는 실행 가능한 단위로 분해

Task는 한 조직 또는 한 역할이 책임질 수 있는 단위로 만든다.

좋은 예:
- 경쟁앱 15개 기능 비교
- 리뷰 300건 Pain Point 분류
- 온보딩 UX 개선안 작성

나쁜 예:
- Saytence 개선하기

### 2.3 Activity는 실제 발생한 일을 기록

Activity는 계획이 아니라 실제 사건을 기록한다.

예:
- 경쟁앱 분석 시작
- 리뷰 분석 완료
- Product 팀에 결과 전달
- CEO가 방향 승인

### 2.4 Artifact는 결과물

Artifact는 조사/분석/설계/개발 결과물에 대한 링크 또는 기록이다.

가능하면 Google Drive 문서, GitHub Issue/PR, 저장소 파일 등 실제 URL을 연결한다.

### 2.5 Decision은 분석과 분리

AI의 분석이 자동으로 회사의 결정이 되면 안 된다.

- FACT: 확인된 사실
- ANALYSIS: AI 해석
- HYPOTHESIS: 검증이 필요한 가설
- DECISION: CEO와 논의 후 확정한 방향

Decision은 최종 결정이 내려졌을 때만 DECIDED 상태로 변경한다.

### 2.6 Experiment는 검증 가능한 가설만 등록

실험에는 반드시 KPI와 판정 기준을 연결한다.

예:
- 가설: 온보딩 단계를 줄이면 Activation Rate가 증가한다.
- KPI: Activation Rate
- 상태: PLANNED → RUNNING → ANALYZING → COMPLETED

---

## 3. 상태값

### Command
- DRAFT
- ACTIVE
- WAITING_DECISION
- COMPLETED
- CANCELLED

### Task
- TODO
- IN_PROGRESS
- REVIEW
- WAITING
- COMPLETED
- CANCELLED

### Decision
- REQUIRED
- DECIDED
- DEFERRED
- REJECTED

### Experiment
- IDEA
- PLANNED
- RUNNING
- ANALYZING
- COMPLETED
- CANCELLED

---

## 4. ID 규칙

- CEO Command: `CMD-001`
- Task Research: `RES-001`
- Task Product: `PRD-001`
- Task Engineering: `ENG-001`
- Task Growth: `GRO-001`
- Task Data: `DAT-001`
- Task Revenue: `REV-001`
- Decision: `DEC-001`
- Artifact: `ART-001`
- Experiment: `EXP-001`
- Activity: `ACT-YYYYMMDD-001`

번호는 삭제 후 재사용하지 않는다.

---

## 5. CEO Command 처리 흐름

1. CEO가 지시한다.
2. COO 역할이 Command를 등록한다.
3. 지시를 실행 가능한 Task로 분해한다.
4. 각 Task에 Team / Role / App / Priority를 지정한다.
5. 실제 작업이 발생할 때 Activity를 추가한다.
6. 결과물이 만들어지면 Artifact를 등록한다.
7. 판단이 필요한 항목은 Decision을 생성한다.
8. 가설 검증이 필요하면 Experiment를 생성한다.
9. 모든 핵심 Task와 Decision이 종료되면 Command를 COMPLETED 처리한다.
10. Daily Summary에 그날의 핵심 변화가 반영된다.

---

## 6. 하루 마감 규칙

사용자가 "오늘 회사 마감해"라고 하면 다음 순서로 정리한다.

1. 오늘 Activity 조회
2. 오늘 완료 Task 조회
3. 진행 중 / 대기 Task 조회
4. 오늘 생성 Artifact 조회
5. CEO Decision Required 조회
6. 앱별 핵심 변화 요약
7. FACT / ANALYSIS / HYPOTHESIS / DECISION 분리
8. 다음 액션 작성
9. Daily Summary 저장
10. 대시보드 데이터 갱신

Daily Summary는 기존 기록을 덮어쓰지 않고 날짜별로 누적한다.

---

## 7. 데이터 삭제 원칙

운영 이력은 원칙적으로 삭제하지 않는다.

잘못된 데이터는 삭제보다 상태 변경 또는 correction Activity 추가를 우선한다.

예:
- 잘못 등록한 Task → CANCELLED
- 잘못된 분석 → 새 Activity로 정정
- 철회된 의사결정 → 새 Decision 또는 supersededBy 연결

---

## 8. 대시보드 표시 원칙

대시보드는 다음 질문에 항상 답할 수 있어야 한다.

1. 오늘 회사는 무엇을 했는가?
2. 어떤 앱을 위해 일했는가?
3. 어느 조직이 무엇을 했는가?
4. CEO가 어떤 지시를 내렸는가?
5. 그 지시는 어떤 Task로 분해되었는가?
6. 현재 어디까지 진행되었는가?
7. 어떤 결과물이 만들어졌는가?
8. 무엇을 발견했는가?
9. 무엇을 결정해야 하는가?
10. 다음 액션은 무엇인가?
