const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, '../assets/industrial-observation-data.json');
const jsPath = path.join(__dirname, '../assets/industrial-observation-data.js');
const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

const js =
  '/* 工业观察 ' +
  data.length +
  '条数据 | 来源：工业观察 MD 汇总 + 机床商务网 */\n' +
  '(function () {\n' +
  '  if (!window.DEMO_DATA) window.DEMO_DATA = {};\n' +
  '  window.DEMO_DATA.industrialObservation = ' +
  JSON.stringify(data) +
  ';\n})();\n';

fs.writeFileSync(jsPath, js);
console.log('Wrote', data.length, 'items to industrial-observation-data.js');
