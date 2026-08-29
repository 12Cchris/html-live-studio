# 🚀 HTML Live Studio (실시간 HTML 편집기)

<div align="center">
  <img src="gui/app_icon.png" width="120" height="120" alt="HTML Live Studio Logo" />
  <p><strong>브라우저 엔진(Edge WebView2)과 Monaco Editor를 탑재한 초경량 데스크톱 실시간 HTML/CSS/JS 편집기</strong></p>
</div>

---

## 🌟 주요 기능

- ⚡ **실시간 라이브 미리보기 (Live Preview)**: 코드를 입력하는 즉시 오른쪽 화면에 렌더링 (디바운스 최적화)
- 💻 **Monaco Editor 탑재**: VS Code와 동일한 강력한 인텔리센스, 자동완성, Emmet, 코드 접기/펼치기
- 🛡️ **무한 루프 방지 가드 (Infinite Loop Protection)**: 잘못된 반복문 코드로 인한 프로그램 멈춤(Freezing) 방지
- 📱 **반응형 뷰포트 시뮬레이션**: 데스크톱(100%), 태블릿(768px), 모바일(375px) 크기 원클릭 전환
- 📂 **네이티브 파일 입출력 & 드래그 앤 드롭**: 새 파일, 열기, 저장, 다른 이름으로 저장, 파일 끌어다 놓기 지원
- 🐞 **내장 개발자 콘솔**: 미리보기 페이지의 `console.log`, `console.error` 실시간 모니터링
- 🎨 **프리셋 템플릿 내장**: HTML5 기본, 글래스모피즘 카드, 인터랙티브 캔버스 파티클, Todo 앱, 3D 큐브
- 💾 **자동 복구 (Auto-Save)**: 프로그램 재실행 시 작업 중이던 코드가 안전하게 복원

---

## 📥 다운로드 및 실행

### 방법 1. 무설치 단일 실행 파일 (`.exe`) - 추천
[**GitHub Releases**](https://github.com/12Cchris/html-live-studio/releases) 탭에서 `HTML Live Studio.exe`를 다운로드하여 더블 클릭하면 파이썬 설치 없이 바로 실행됩니다.

### 방법 2. 소스 코드로 직접 실행 (Python)
```bash
# 1. 저장소 클론
git clone https://github.com/12Cchris/html-live-studio.git
cd html-live-studio

# 2. 필수 패키지 설치
pip install -r requirements.txt

# 3. 프로그램 실행
python main.py
```

---

## ⌨️ 단축키 안내

| 단축키 | 기능 |
| :--- | :--- |
| **`Ctrl + S`** | 파일 저장 |
| **`Ctrl + Shift + S`** | 다른 이름으로 저장 |
| **`Ctrl + O`** | 파일 열기 |
| **`Ctrl + N`** | 새 파일 생성 |
| **`Ctrl + Enter`** | 미리보기 강제 새로고침 |
| **`Alt + Shift + F`** | 코드 자동 정렬 |
| **`Ctrl + +` / `Ctrl + -`** | 에디터 글자 크기 확대 / 축소 |

---

## 📄 라이선스
GNU General Public License v3.0 — 자세한 내용은 [LICENSE](./LICENSE) 파일을 참고하세요.
