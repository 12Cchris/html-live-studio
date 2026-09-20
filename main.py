import os
import sys
import time
import json
import re
import threading
import urllib.request
import tempfile
import subprocess
import webbrowser
import webview

APP_VERSION = "1.1.0"
GITHUB_REPO = "12Cchris/html-live-studio"
RELEASES_API = f"https://api.github.com/repos/{GITHUB_REPO}/releases/latest"

# PyWebView 글로벌 설정 최적화
webview.settings['ALLOW_DOWNLOADS'] = True

class EditorAPI:
    def __init__(self):
        self.current_filepath = None
        self._window = None

    def set_window(self, window):
        self._window = window

    def _read_file_with_encodings(self, filepath):
        """다양한 문자 인코딩을 안전하게 감지하여 파일을 읽습니다."""
        encodings = ('utf-8-sig', 'utf-8', 'cp949', 'euc-kr', 'latin-1')
        last_err = None
        for enc in encodings:
            try:
                with open(filepath, 'r', encoding=enc) as f:
                    return f.read(), enc
            except UnicodeDecodeError as e:
                last_err = e
            except Exception as e:
                raise e
        raise last_err or Exception("지원되지 않는 파일 인코딩입니다.")

    def open_file_dialog(self):
        """파일 열기 대화상자를 열고 파일 경로와 내용을 반환합니다."""
        if not self._window:
            return {"success": False, "error": "Window not initialized"}

        file_types = ('HTML Files (*.html;*.htm)', 'Text Files (*.txt;*.css;*.js)', 'All Files (*.*)')
        result = self._window.create_file_dialog(
            webview.OPEN_DIALOG,
            allow_multiple=False,
            file_types=file_types
        )

        if result and len(result) > 0:
            filepath = result[0]
            return self.read_file_from_path(filepath)
        return {"success": False, "cancelled": True}

    def read_file_from_path(self, filepath):
        """특정 경로의 파일을 읽어 반환합니다 (드래그 앤 드롭 파일 열기 지원)."""
        try:
            if not os.path.exists(filepath):
                return {"success": False, "error": "파일을 찾을 수 없습니다."}
            
            content, enc = self._read_file_with_encodings(filepath)
            self.current_filepath = filepath
            filename = os.path.basename(filepath)
            return {
                "success": True,
                "filepath": filepath,
                "filename": filename,
                "content": content,
                "encoding": enc
            }
        except Exception as e:
            return {"success": False, "error": f"파일 읽기 오류: {str(e)}"}

    def save_file(self, content, filepath=None):
        """현재 파일에 저장하거나 새 경로에 저장합니다."""
        target_path = filepath or self.current_filepath
        if not target_path:
            return self.save_file_as_dialog(content)

        try:
            with open(target_path, 'w', encoding='utf-8', newline='') as f:
                f.write(content)
            self.current_filepath = target_path
            filename = os.path.basename(target_path)
            return {
                "success": True,
                "filepath": target_path,
                "filename": filename
            }
        except Exception as e:
            return {"success": False, "error": f"파일 저장 실패: {str(e)}"}

    def save_file_as_dialog(self, content, default_name="index.html"):
        """다른 이름으로 저장 대화상자를 엽니다."""
        if not self._window:
            return {"success": False, "error": "Window not initialized"}

        file_types = ('HTML Files (*.html)', 'All Files (*.*)')
        result = self._window.create_file_dialog(
            webview.SAVE_DIALOG,
            save_filename=default_name,
            file_types=file_types
        )

        if result:
            target_path = result if isinstance(result, str) else result[0]
            try:
                with open(target_path, 'w', encoding='utf-8', newline='') as f:
                    f.write(content)
                self.current_filepath = target_path
                filename = os.path.basename(target_path)
                return {
                    "success": True,
                    "filepath": target_path,
                    "filename": filename
                }
            except Exception as e:
                return {"success": False, "error": f"파일 저장 실패: {str(e)}"}
        return {"success": False, "cancelled": True}

    def get_current_filepath(self):
        return self.current_filepath

    def reset_filepath(self):
        self.current_filepath = None
        return {"success": True}

    def get_app_info(self):
        """현재 앱 버전 및 런타임 환경 정보를 반환합니다."""
        return {
            "version": APP_VERSION,
            "repo": GITHUB_REPO,
            "is_frozen": getattr(sys, 'frozen', False),
            "exe_path": sys.executable if getattr(sys, 'frozen', False) else None
        }

    def _is_newer_version(self, latest_str, current_str):
        """시맨틱 버전을 비교하여 새 버전 여부를 판별합니다."""
        try:
            def parse_ver(v):
                nums = re.findall(r'\d+', str(v))
                return [int(n) for n in nums] if nums else [0]
            return parse_ver(latest_str) > parse_ver(current_str)
        except Exception:
            return False

    def check_for_updates(self):
        """GitHub Releases API를 통해 최신 버전을 확인합니다."""
        try:
            req = urllib.request.Request(
                RELEASES_API,
                headers={'User-Agent': f'HTML-Live-Studio/{APP_VERSION}'}
            )
            with urllib.request.urlopen(req, timeout=6) as response:
                if response.status == 200:
                    data = json.loads(response.read().decode('utf-8'))
                    latest_tag = data.get('tag_name', '').lstrip('v')
                    release_name = data.get('name', '') or f"v{latest_tag}"
                    release_body = data.get('body', '') or "새로운 버전이 출시되었습니다."
                    html_url = data.get('html_url', f"https://github.com/{GITHUB_REPO}/releases")

                    # 실행 파일(.exe) 다운로드 링크 탐색
                    download_url = None
                    for asset in data.get('assets', []):
                        name = asset.get('name', '').lower()
                        if name.endswith('.exe'):
                            download_url = asset.get('browser_download_url')
                            break

                    if not download_url:
                        download_url = html_url

                    has_update = self._is_newer_version(latest_tag, APP_VERSION)
                    return {
                        "success": True,
                        "has_update": has_update,
                        "current_version": APP_VERSION,
                        "latest_version": latest_tag,
                        "release_title": release_name,
                        "release_notes": release_body,
                        "download_url": download_url,
                        "release_url": html_url,
                        "published_at": data.get('published_at', '')
                    }
            return {
                "success": False,
                "has_update": False,
                "current_version": APP_VERSION,
                "message": "업데이트 정보를 불러올 수 없습니다."
            }
        except urllib.error.HTTPError as e:
            if e.code == 404:
                return {
                    "success": True,
                    "has_update": False,
                    "current_version": APP_VERSION,
                    "latest_version": APP_VERSION,
                    "message": "현재 최신 버전을 사용 중입니다."
                }
            return {
                "success": False,
                "has_update": False,
                "current_version": APP_VERSION,
                "error": f"서버 응답 오류 (HTTP {e.code})"
            }
        except Exception as e:
            return {
                "success": False,
                "has_update": False,
                "current_version": APP_VERSION,
                "error": f"업데이트 확인 실패: {str(e)}"
            }

    def download_and_install_update(self, download_url):
        """새 버전의 실행 파일을 다운로드하고 자동 교체 및 재시작을 진행합니다."""
        try:
            if not download_url or not download_url.startswith('http'):
                return {"success": False, "error": "유효하지 않은 다운로드 URL입니다."}

            # 소스 코드 모드 실행 시
            if not getattr(sys, 'frozen', False):
                webbrowser.open(download_url)
                return {
                    "success": True,
                    "is_source": True,
                    "message": "소스 코드 모드에서 실행 중입니다. 브라우저에서 릴리즈 페이지를 열었습니다."
                }

            current_exe = os.path.abspath(sys.executable)
            temp_dir = tempfile.gettempdir()
            new_exe_path = os.path.join(temp_dir, f"html_live_studio_update_{int(time.time())}.exe")

            # 다운로드 실행
            req = urllib.request.Request(download_url, headers={'User-Agent': f'HTML-Live-Studio/{APP_VERSION}'})
            with urllib.request.urlopen(req, timeout=40) as resp, open(new_exe_path, 'wb') as out_f:
                chunk_size = 64 * 1024
                while True:
                    chunk = resp.read(chunk_size)
                    if not chunk:
                        break
                    out_f.write(chunk)

            # 프로세스 종료 대기 후 실행 파일 교체 및 재실행 배치 스크립트 작성
            current_pid = os.getpid()
            bat_path = os.path.join(temp_dir, f"hls_updater_{current_pid}.bat")

            bat_content = f"""@echo off
chcp 65001 >nul
setlocal
set TARGET="{current_exe}"
set NEWFILE="{new_exe_path}"
set PID={current_pid}

:wait_pid
timeout /t 1 /nobreak >nul
tasklist /fi "pid eq %PID%" 2>nul | find "%PID%" >nul
if not errorlevel 1 goto wait_pid

timeout /t 1 /nobreak >nul
copy /y %NEWFILE% %TARGET% >nul
if errorlevel 1 (
    timeout /t 2 /nobreak >nul
    copy /y %NEWFILE% %TARGET% >nul
)

del %NEWFILE% 2>nul
start "" %TARGET%
(goto) 2>nul & del "%~f0"
"""
            with open(bat_path, 'w', encoding='utf-8') as f:
                f.write(bat_content)

            # 백그라운드에서 배치 실행
            CREATE_NO_WINDOW = 0x08000000
            subprocess.Popen(
                ['cmd.exe', '/c', bat_path],
                creationflags=CREATE_NO_WINDOW,
                close_fds=True
            )

            # 현재 앱 종료
            def exit_app():
                time.sleep(0.4)
                if self._window:
                    self._window.destroy()
                os._exit(0)

            threading.Thread(target=exit_app, daemon=True).start()
            return {"success": True, "message": "업데이트를 완료했습니다. 프로그램을 재시작합니다."}
        except Exception as e:
            return {"success": False, "error": f"업데이트 적용 실패: {str(e)}"}

    def open_external_url(self, url):
        """외부 기본 브라우저에서 URL을 엽니다."""
        try:
            webbrowser.open(url)
            return {"success": True}
        except Exception as e:
            return {"success": False, "error": str(e)}

def get_resource_path(relative_path):
    """PyInstaller _MEIPASS 임시 번들 경로 및 로컬 경로를 안전하게 반환합니다."""
    if hasattr(sys, '_MEIPASS'):
        return os.path.join(sys._MEIPASS, relative_path)
    return os.path.join(os.path.dirname(os.path.abspath(__file__)), relative_path)

def get_centered_geometry():
    """작업표시줄과 해상도(DPI 스케일링)를 고려하여 완벽하게 중앙에 위치하는 창 크기와 좌표를 반환합니다."""
    try:
        if webview.screens and len(webview.screens) > 0:
            screen = webview.screens[0]
            sw, sh = screen.width, screen.height
        else:
            sw, sh = 1440, 900

        # 작은 화면이나 200% 스케일 화면에서도 작업표시줄에 잘리지 않도록 안전한 크기 계산
        win_w = min(1340, max(800, int(sw * 0.92)))
        win_h = min(820, max(580, int((sh - 60) * 0.90)))

        # 수평/수직 정중앙 위치 (작업표시줄 감안)
        win_x = max(0, (sw - win_w) // 2)
        win_y = max(0, (sh - 50 - win_h) // 2)
        return win_w, win_h, win_x, win_y
    except Exception:
        return 1280, 780, 50, 40

def main():
    api = EditorAPI()
    index_html = get_resource_path(os.path.join('gui', 'index.html'))

    win_w, win_h, win_x, win_y = get_centered_geometry()

    window = webview.create_window(
        title=f'HTML Live Studio v{APP_VERSION} - 실시간 HTML 편집기',
        url=index_html,
        js_api=api,
        width=win_w,
        height=win_h,
        x=win_x,
        y=win_y,
        min_size=(800, 560),
        text_select=True
    )
    api.set_window(window)

    # Edge WebView2 엔진 최적화 실행
    webview.start(debug=False)

if __name__ == '__main__':
    main()

