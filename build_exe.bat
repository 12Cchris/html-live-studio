@echo off
chcp 949 >nul
title HTML Live Studio - EXE 빌드

cd /d "%~dp0"

echo ========================================================
echo   HTML Live Studio - PyInstaller EXE 빌드
echo ========================================================
echo.

echo [1/2] PyInstaller 빌드 시작...
pyinstaller --noconfirm HTML_Live_Studio.spec

echo.
if %errorlevel% equ 0 (
    echo ========================================================
    echo   [성공] dist\HTML Live Studio.exe 빌드가 완료되었습니다!
    echo ========================================================
) else (
    echo ========================================================
    echo   [오류] 빌드 중 에러가 발생했습니다. 위 로그를 확인하세요.
    echo ========================================================
)

echo.
pause
