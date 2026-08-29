import os
import sys
import webview

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

def get_resource_path(relative_path):
    """PyInstaller _MEIPASS 임시 번들 경로 및 로컬 경로를 안전하게 반환합니다."""
    if hasattr(sys, '_MEIPASS'):
        return os.path.join(sys._MEIPASS, relative_path)
    return os.path.join(os.path.dirname(os.path.abspath(__file__)), relative_path)

def main():
    api = EditorAPI()
    index_html = get_resource_path(os.path.join('gui', 'index.html'))

    window = webview.create_window(
        title='HTML Live Studio - 실시간 HTML 편집기',
        url=index_html,
        js_api=api,
        width=1380,
        height=880,
        min_size=(800, 600),
        text_select=True
    )
    api.set_window(window)

    # Edge WebView2 엔진 최적화 실행
    webview.start(debug=False)

if __name__ == '__main__':
    main()
