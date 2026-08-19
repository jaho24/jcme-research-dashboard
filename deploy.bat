@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo ========================================
echo  京城机电看板 - GitHub Pages 部署
echo ========================================
echo.

where gh >nul 2>&1
if errorlevel 1 (
    echo [错误] 未找到 gh 命令，请先安装 GitHub CLI 并重启终端
    echo   winget install GitHub.cli
    pause
    exit /b 1
)

gh auth status >nul 2>&1
if errorlevel 1 (
    echo [提示] 尚未登录 GitHub，正在打开登录流程...
    gh auth login
)

if not exist .git (
    echo [1/5] 初始化 Git 仓库...
    git init -b main
) else (
    echo [1/5] Git 仓库已存在，跳过初始化
)

echo [2/5] 添加文件（opencode.json 已被 .gitignore 排除）...
git add .
echo.
echo --- 即将提交的文件 ---
git status --short
echo.
findstr /i "opencode.json" .gitignore >nul
if exist opencode.json (
    git diff --cached --name-only | findstr /i "opencode.json" >nul
    if not errorlevel 1 (
        echo [错误] opencode.json 将被提交！请检查 .gitignore
        pause
        exit /b 1
    )
)

echo [3/5] 提交代码...
git commit -m "Deploy: 京城机电产业研究与市场分析平台" 2>nul
if errorlevel 1 (
    echo   无新变更或已提交，继续...
)

for /f "tokens=*" %%i in ('gh api user -q .login 2^>nul') do set GH_USER=%%i
if "%GH_USER%"=="" (
    echo [错误] 无法获取 GitHub 用户名，请运行: gh auth login
    pause
    exit /b 1
)

echo [4/5] 创建/推送仓库 jcme-research-dashboard ...
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    gh repo create jcme-research-dashboard --public --source=. --remote=origin --push
) else (
    git push -u origin main
)

echo [5/5] 开启 GitHub Pages...
gh api repos/%GH_USER%/jcme-research-dashboard/pages -X POST -f build_type=legacy -f "source[branch]=main" -f "source[path]=/" 2>nul
if errorlevel 1 (
    echo   Pages 可能已开启，或在网页手动设置: Settings - Pages - main / root
)

echo.
echo ========================================
echo  部署完成！
echo ========================================
echo.
echo  仓库: https://github.com/%GH_USER%/jcme-research-dashboard
echo  访问: https://%GH_USER%.github.io/jcme-research-dashboard/
echo.
echo  首次部署约需 1-2 分钟，请稍后在浏览器打开上方链接
echo.
pause
