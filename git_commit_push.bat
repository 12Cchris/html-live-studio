@echo off
chcp 949 >nul
title HTML Live Studio - GitHub Commit and Push

cd /d "%~dp0"

echo ========================================================
echo   HTML Live Studio - GitHub 자동 커밋 및 푸시
echo   저장소: https://github.com/12Cchris/html-live-studio
echo ========================================================
echo.

echo [1/3] 변경 사항 확인 중 (git status)...
git status -s
echo.

set "COMMIT_MSG=v1.1.2: 미리보기 드래그 시 HTML 요소 코드 자동 탐색 기능 개선"
set "USER_INPUT="
set /p "USER_INPUT=커밋 메시지 입력 (엔터 시 기본값 사용): "
if not "%USER_INPUT%"=="" set "COMMIT_MSG=%USER_INPUT%"

echo.
echo [2/3] 변경 사항 커밋 중...
echo 커밋 메시지: %COMMIT_MSG%
git add .
git commit -m "%COMMIT_MSG%"

echo.
echo [3/3] GitHub로 푸시 중 (git push origin main)...
git push origin main

echo.
if %errorlevel% equ 0 (
    echo ========================================================
    echo   [성공] GitHub에 성공적으로 푸시되었습니다!
    echo ========================================================
) else (
    echo ========================================================
    echo   [오류] 푸시 중 문제가 발생했습니다. 위 로그를 확인하세요.
    echo ========================================================
)

echo.
pause
