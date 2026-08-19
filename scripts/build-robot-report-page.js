const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '..', '行业趋势-工业机器人行业研究HTML', '行业研究.html');
const outPath = path.join(__dirname, '..', 'pages', '工业机器人行业战略洞察报告.html');
const imgPrefix = '../行业趋势-工业机器人行业研究HTML/';

const src = fs.readFileSync(srcPath, 'utf8');
const start = src.indexOf('<div class="container">');
const end = src.lastIndexOf('</div>\n</body>');
if (start < 0 || end < 0) throw new Error('container not found');

let body = src.slice(start + '<div class="container">'.length, end).trim();
body = body.replace(/src="chart/g, 'src="' + imgPrefix + 'chart');

const page = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>工业机器人行业战略洞察报告 - 京城机电产业研究与市场分析平台</title>
<link rel="stylesheet" href="../assets/subpage-layout.css">
<link rel="stylesheet" href="../assets/subpage-nav.css">
<link rel="stylesheet" href="../assets/robot-industry-report.css">
</head>
<body>
<header class="platform-nav-outer">
  <div class="platform-nav-inner">
    <div id="platform-nav-mount" data-active="trend"></div>
  </div>
</header>
<div class="subpage-with-nav">
  <div class="robot-report-wrap">
    <div class="report-back-bar">
      <a href="行业趋势.html?industry=robot&amp;view=overview">← 返回行业趋势 · 工业机器人</a>
    </div>
    <div class="container">
${body}
    </div>
  </div>
</div>
<script src="../assets/subpage-nav.js"></script>
</body>
</html>
`;

fs.writeFileSync(outPath, page, 'utf8');
console.log('Wrote', outPath, page.length, 'bytes');
