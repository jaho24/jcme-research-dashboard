const fs = require('fs');
const path = require('path');

const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../assets/industrial-observation-data.json'), 'utf8')
);
const demoPath = path.join(__dirname, '../assets/demo-data.js');
let demo = fs.readFileSync(demoPath, 'utf8');

const chunk =
  '  industrialObservation: ' +
  JSON.stringify(data, null, 2).split('\n').join('\n  ') +
  ',\n';

if (demo.includes('industrialObservation:')) {
  demo = demo.replace(/  industrialObservation:[\s\S]*?\n  \],\n/, chunk);
} else {
  demo = demo.replace(
    '  trendHotspots: {',
    chunk + '\n  trendHotspots: {'
  );
}

fs.writeFileSync(demoPath, demo);
console.log('Merged', data.length, 'items into demo-data.js');
