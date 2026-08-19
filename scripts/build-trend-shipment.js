/**
 * 从 Excel 生成 assets/trend-shipment-data.js
 * 用法：将 MIR 导出 Excel 放到 data/年度出货量.xlsx 后运行
 *   node scripts/build-trend-shipment.js
 */
const fs = require('fs');
const path = require('path');

const xlsxPath = path.join(__dirname, '..', 'data', '年度出货量.xlsx');
const outPath = path.join(__dirname, '..', 'assets', 'trend-shipment-data.js');

if (!fs.existsSync(xlsxPath)) {
  console.error('未找到 Excel 文件：', xlsxPath);
  console.error('请将 MIR DATABANK 导出文件放到 data/年度出货量.xlsx');
  process.exit(1);
}

let XLSX;
try {
  XLSX = require('xlsx');
} catch (e) {
  console.error('请先安装 xlsx：npm install xlsx');
  process.exit(1);
}

const wb = XLSX.readFile(xlsxPath);
const sheetNames = wb.SheetNames;

function parseSheet(sheetName) {
  const rows = XLSX.utils.sheet_to_json(wb.Sheets[sheetName], { header: 1, defval: '—' });
  if (!rows.length) return null;

  const header = rows[0].map(String);
  const yearStart = header.findIndex(function (h) { return /^\d{4}/.test(h); });
  if (yearStart < 0) return null;

  const years = header.slice(yearStart).filter(function (h) { return /^\d{4}/.test(String(h)); });
  const dataRows = rows.slice(1).filter(function (r) { return r && r[0]; });

  return {
    years: years,
    rows: dataRows.map(function (r, idx) {
      const category = String(r[0] || '').trim();
      const dataType = String(r[1] || '产品出货量').trim();
      const values = years.map(function (_, i) {
        const v = r[yearStart + i];
        if (v === '—' || v === '' || v == null) return '—';
        const n = Number(String(v).replace(/,/g, ''));
        return isNaN(n) ? '—' : n;
      });
      const unit = String(r[header.length - 1] || '台').trim();
      return {
        category: category,
        dataType: dataType,
        values: values,
        unit: unit || '台',
        highlight: idx === 0 || /工业机器|数控机床|金属切削/.test(category)
      };
    })
  };
}

const robotSheet = sheetNames.find(function (n) { return /机器人|robot/i.test(n); }) || sheetNames[0];
const machineSheet = sheetNames.find(function (n) { return /机床|数控|machine/i.test(n); }) || sheetNames[1];

const robot = parseSheet(robotSheet);
const machine = machineSheet ? parseSheet(machineSheet) : null;

if (!robot) {
  console.error('无法解析 Excel，请确认首行包含年份列（2019、2020…）');
  process.exit(1);
}

const payload = {
  robot: Object.assign({
    label: '工业机器人',
    source: 'MIR DATABANK',
    description: '统计口径为中国市场工业机器人整机出货量，按产品机型分类汇总。',
    sourceNote: '特殊符号注释："—" 表示无数据。数据经 MIR DATABANK 整理导出。'
  }, robot),
  machine: machine ? Object.assign({
    label: '数控机床',
    source: 'MIR DATABANK',
    description: '统计口径为中国市场数控机床整机出货量，按机床品类分类汇总。',
    sourceNote: '特殊符号注释："—" 表示无数据。数据经 MIR DATABANK 整理导出。'
  }, machine) : undefined
};

if (!payload.machine) delete payload.machine;

const js =
  '/* 行业趋势 · 年度出货量 | 来源：MIR DATABANK（Excel 自动生成） */\n' +
  '(function () {\n' +
  '  window.TREND_SHIPMENT_DATA = ' +
  JSON.stringify(payload, null, 2) +
  ';\n})();\n';

fs.writeFileSync(outPath, js, 'utf8');
console.log('已生成', outPath);
console.log('  机器人 sheet:', robotSheet, '→', robot.rows.length, '行');
if (machine) console.log('  机床 sheet:', machineSheet, '→', machine.rows.length, '行');
