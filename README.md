# AI App Studio HQ

Vanilla HTML/CSS/JavaScript 기반 AI 회사 운영 대시보드입니다.

## GitHub Pages 배포

이 저장소는 별도 빌드 없이 정적 파일을 그대로 배포하도록 구성되어 있습니다.

### 권장 Pages 설정

1. Repository **Settings** 이동
2. 왼쪽 메뉴에서 **Pages** 선택
3. **Build and deployment**
4. **Source** → `Deploy from a branch`
5. **Branch** → `main`
6. Folder → `/(root)`
7. **Save**

배포 주소는 저장소 이름 기준으로 일반적으로 다음 형태입니다.

`https://journeymin79.github.io/ai-app-studio-hq/`

## Entry point

- `index.html`

## 주요 구조

```text
ai-app-studio-hq/
├─ index.html
├─ .nojekyll
├─ css/
│  └─ style.css
├─ js/
│  └─ app.js
├─ data/
│  └─ dashboard-data.js
└─ README.md
```

## 데이터 업데이트

현재 화면 데이터는 `data/dashboard-data.js`에 있습니다.

대시보드 화면과 데이터를 분리해 두었기 때문에 이후에는 주로 이 파일의 다음 데이터를 누적/수정하면 됩니다.

- company
- apps
- teams
- agents
- commands
- tasks
- activities
- decisions
- artifacts
- experiments
- findings

## 보안 주의

GitHub Pages로 배포한 사이트는 인터넷에서 접근 가능한 공개 웹 페이지입니다.
회사 전략, API 키, 비밀번호, 개인정보 등 민감한 정보는 대시보드 데이터에 넣지 마세요.
