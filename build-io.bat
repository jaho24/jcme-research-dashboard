@echo off
cd /d "%~dp0"
node scripts\build-io-js.js
if errorlevel 1 (
  echo Build failed. Make sure Node.js is installed.
  pause
  exit /b 1
)
echo industrial-observation-data.js updated.
pause
