# 79's Labs — CURRENT STATE

> 현재 회사의 실행 상태.  
> 장기 운영 규칙은 `AI_APP_STUDIO_OPERATING_CONTEXT.md`.
>
> **Last reconciled: 2026-09-30**
>
> Live Dashboard/Product Source가 더 최신이면 Live Source를 우선하고 이 파일을 갱신한다.

## 1. Executive Snapshot

```
Company: 79's Labs
Current App: Saytence

Current Command:
CMD-002 — Saytence 자유 회독형 개선 릴리스 준비

Current Sprint:
SPR-001 — 100 Install Growth Sprint

Sprint Status:
ACTIVE

Sprint Window:
2026-09-29 ~ 2026-10-12

Current Release:
Saytence 1.0.6 (13)

Product Development:
FROZEN except critical bug / growth blocker

Analytics:
VERIFIED / 정상 수집

Install Baseline:
8

Install Target:
100

Dashboard last recorded installs:
8
```

※ 8은 Dashboard의 마지막 기록값. Play Console 최신 실제치 확인 전 “현재 실제 설치수”로 단정하지 않는다.

## 2. Current Release — 1.0.6 (13)

```
Release date: 2026-09-30
Title: JLPT 학습 진입 오류 수정
GitHub version: 1.0.6+13

Release commit:
0aa3b61e288e1f5d0f7de1963a450cb34d26f8b8
Prepare 1.0.6 release

Core hotfix:
01789e1273a6aa209e7bcb3fcc67e304b7b7a773
Fix JLPT study entry navigation
```

Fix:

- JLPT N5/N4/N3 선택 후 Home 정상 진입
- 기존 설치 누락 JLPT Base 데이터 재시드
- baseSeedVersion 7
- JLPT target ↔ 기본 Pack 연결 안정화
- 내 자료 학습 유지

### Previous 1.0.5 (12)

- JLPT N5/N4/N3 또는 내 자료 진입
- 자유 학습
- 5분 / 10분 / 20장 Session
- 알아요 / 헷갈려요 / 다시 볼래요 완료 결과
- 세션 약한 카드 재복습
- Home/Library 복습 의미 통일
- Custom Japanese JLPT Base fallback 방지
- Study Session lifecycle/기록 보강

## 3. Current Sprint — SPR-001

**100 Install Growth Sprint**

```
2026-09-29 ~ 2026-10-12
Status: ACTIVE
Baseline: 8
Target: 100 (+92)
```

Goal:

> 출시 안정화된 1.0.6 기준으로 기존 Owned Channel을 사용해 실제 신규 사용자를 확보하고 8→100을 검증한다.

함께 검증:

- 어떤 메시지가 실제 관심을 만드는가
- 어떤 콘텐츠가 Store 행동을 만드는가
- 설치가 첫 학습으로 이어지는가
- 개발자 응원 설치와 실제 JLPT user signal을 구분할 수 있는가

## 4. Current Growth Scope

### Threads

```
https://www.threads.com/@journeymin.creator
```

- 기존 개발자 / AI / 1인개발 결 유지
- JLPT 전문가 계정처럼 전환하지 않음
- Fixed 7-day / 14-day content calendar 폐기
- Adaptive:
  - 게시
  - 실제 반응
  - qualified signal 구분
  - 다음 콘텐츠 결정
- 광고성 반복 게시 금지
- 8→100 숫자를 매 글 반복하지 않음

Content pillars:

1. 8→100 공개 실험 Context
2. 실제 Product Experience
3. Product Decision + 질문
4. 실제 결과 / 배운 점

### Tistory

```
https://journeylabs.tistory.com
```

역할:

- 긴 개발/제품/성장 기록
- 실제 데이터/시행착오
- 검색에 남는 evidence
- Journey Coach 개발/AI/커리어 정체성 유지

금지:

- 일반 JLPT SEO content farm
- 억지 일본어 전문가 포지셔닝

### Google Play

- 설치 Conversion Surface
- JLPT-first Product message

### Excluded

- Paid Ads
- 광고성 커뮤니티 침투
- Brunch (이번 Sprint)

## 5. Store ASO

```
GRO-003
Status: REVIEW
```

CEO 보고 완료:

- 앱명/Store 문구 수정
- 상세 설명 JLPT-first 방향 수정

미확인:

- Screenshot 최종 변경
- Public listing 실제 반영 상태

Message hierarchy:

1. JLPT N5/N4/N3
2. 부담 없는 짧은 회독
3. 알아요 / 헷갈려요 / 다시 볼래요
4. 약한 카드 복습
5. 내 자료
6. 영어/다국어 Expansion

## 6. Active Tasks

### GRO-003 — Store ASO
Status: REVIEW

Next:
- screenshot/public listing 반영 확인
- 확인 후 COMPLETED 판단

### GRO-004 — Threads 적응형 유입 실행
Status: IN_PROGRESS
Progress: 10%

Next:
- 첫 Growth 콘텐츠 실행
- 실제 반응 확인
- 다음 콘텐츠는 반응 후 결정

### RES-004 — JLPT Threads 대화·문제 신호 발굴
Status: TODO

Next:
- 실제 암기/복습/회독 언어 수집
- Growth copy 원재료 제공

### PRD-005 — Acquisition Message Product Guard
Status: IN_PROGRESS

Next:
- Threads/Tistory/Store 문구와 실제 1.0.6 기능 일치 검토
- 과장 금지

### DAT-002 — 100 Install Daily Funnel
Status: IN_PROGRESS

Track:

```
Source / Content
→ Store action
→ Install
→ First learning
→ Session complete
```

항상 raw count 포함.

### ENG-002 — Growth Tracking Support
Status: WAITING

신규 기능 개발 없음.

처리:
- critical bug
- release stability
- 실제 growth blocker

### RED-002 — ASO / Threads Message Review
Status: IN_PROGRESS

질문:
- 개발자만 좋아하고 JLPT user는 무관한가?
- 다른 JLPT 앱에도 그대로 붙는 문구인가?
- Views를 Growth로 착각하는가?
- Install이 실제 학습으로 이어지는가?

### REV-001 — Monetization Guard
Status: IN_PROGRESS

현재 수익화 변경 없음.

## 7. Metrics

Dashboard last recorded:

```
MET-001 누적 설치
baseline: 8
target: 100
current: 8

MET-002 Threads 링크 클릭
not yet recorded

MET-003 첫 학습 시작
not yet recorded

MET-004 세션 완료
not yet recorded
```

8은 마지막 Dashboard 기록값이다. 최신 실제치 확인 후 업데이트.

## 8. Relevant Decisions

- DEC-001: JLPT N5/N4/N3 중심 포지셔닝
- DEC-003: 영어/다국어는 Expansion
- DEC-004: Recording 핵심 차별점 승격 미결정
- DEC-005: 자유 회독형
- DEC-006: 바로 이어서 학습 Primary + Quick Session Secondary
- DEC-009: 8→100 Growth Sprint
- DEC-010: Threads + Tistory + Google Play conversion. Brunch/Paid Ads/커뮤니티 침투 제외

## 9. Current Tistory Artifact

```
ART-015
Tistory 첫 유입 글·팀 검토·측정 메모
Status: NEEDS_REVISION
```

- 첫 유입 콘텐츠 그대로 게시 부적합 판정
- 게시 승인 없음
- 발행/성과 미확인
- 기능 안내 자료 재활용 가능
- Tistory는 개발/AI/1인개발 긴 기록 + 실제 데이터/시행착오 중심으로 재검토

## 10. Immediate Next Actions

### 1. 최신 숫자 동기화

- Google Play 최신 누적 설치
- First learning
- Session complete
- Threads 실행 전 baseline

Dashboard Metrics 업데이트.

### 2. Store ASO REVIEW 닫기

- Screenshots
- Public listing reflection

확인 후 GRO-003 상태 결정.

### 3. Threads 첫 Adaptive 콘텐츠 실행

- Existing developer account context 안에서 시작
- 첫 게시 후 다음 글 자동 실행 금지

### 4. Reaction Classification

```
Developer-support engagement
vs
Qualified JLPT/user signal
```

분리.

### 5. Next Content Decision

실제 반응 기반으로 Growth + Discovery + Product + Data + Red Team 판단.

### 6. Tistory

Threads에서 실제 이야기/데이터가 생긴 후 장문으로 확장.

## 11. Current Blockers / Unknowns

- 최신 실제 설치수 미동기화
- Store screenshot/public listing 최종 반영 미확인
- Threads 첫 Growth 콘텐츠 실제 실행/성과 미기록
- ART-015 NEEDS_REVISION / 발행 미확인
- Brunch는 범위 밖

## 12. Product Development Rule

```
Product Development = FROZEN
```

Engineering 재가동 조건:

- Critical bug
- Release stability issue
- 실제 Growth blocker
- CEO가 새 Product Sprint 승인

사용자 반응 하나로 즉시 기능 개발하지 않는다.

## 13. Chat Handoff

이 Sprint 종료 또는 대화 교체 시:

1. CURRENT_STATE 최신화
2. Dashboard와 수치 일치
3. Sprint Review Artifact 저장
4. 다음 Sprint Goal 기록
5. 장기 Decision만 OPERATING_CONTEXT 갱신
6. 새 Chat은 두 문서 + Live Dashboard로 시작

## 14. Knowledge / Reporting System

- Notion: 79's Labs Company OS — Strategy, Product, Sprint, Task, Decision, Research, Experiment, Metric, Report
- Google Drive: historical documents and file-based artifacts
- New Daily / Weekly / Sprint / Strategy reports default to Notion
- GitHub Dashboard / CURRENT_STATE remain live execution-state sources

## 15. Current Direction

> **Saytence 1.0.6은 출시 완료. 지금은 더 만드는 단계가 아니라, 기존 Owned Channel을 이용해 실제 첫 사용자를 찾고 설치 후 실제 학습으로 이어지는지 검증하는 단계다.**


## Notion Company HQ UX

- 79's Labs Notion Home: https://app.notion.com/p/3ec5b7c4aa3081789dc0c217020e574d
- CEO / Company HQ: https://app.notion.com/p/3ec5b7c4aa308110b821dfcccc19892d
- Departments: https://app.notion.com/p/3ec5b7c4aa308167aa3fdd7c23cd3555
- Live Company Dashboard: https://journeymin79.github.io/ai-app-studio-hq/
- Company HQ includes Current Sprint, Company Kanban, Department Status, Key Metrics, CEO Decision Queue and organization chart.
- Department pages: COO/HQ, Strategy, Discovery, Product/UX, Engineering/QA, Growth/ASO/Content, Data, Revenue, Red Team. Each department has its own filtered work view.


## 16. Acquisition Measurement Contract

Focus channels:
- Threads
- Tistory

Measurement flow:
```
Threads / Tistory
→ Google Play Store visit (UTM)
→ Install
→ first_open
→ study_session_started
→ study_session_completed
```

UTM:
- Threads: source=threads / medium=organic_social / campaign=spr001_thNNN
- Tistory: source=tistory / medium=owned_content / campaign=spr001_tiNNN

Metrics:
- MET-001 누적 설치
- MET-002 Threads → Store 방문
- MET-003 첫 학습 시작
- MET-004 세션 완료
- MET-005 Tistory → Store 방문

Daily:
- Notion Metric Log에 하루 1회 raw count 기록
- Views/Likes는 diagnostic only
- Growth 판단은 Store visit → Install → Learning → Complete 기준

Measurement artifact:
- Notion: SPR-001 Acquisition Measurement Plan — Threads + Tistory
