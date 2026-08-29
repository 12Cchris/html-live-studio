@echo off
cd /d "%~dp0"
title HTML Live Studio
python main.py
if errorlevel 1 (
    echo.
    echo [Error] Program terminated with an error.
    pause
)
