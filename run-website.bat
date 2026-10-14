@echo off
title Siddhu Property Advisor - Local Server
cd /d "%~dp0"
echo ===================================================
echo   Starting Siddhu Property Advisor Local Server...
echo ===================================================
echo.
start http://localhost:3000
node server.js
pause
