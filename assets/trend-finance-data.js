/* 行业趋势 · 上市公司财务数据 | 示例数据 · Demo · 来源 MIR DATABANK */
(function(){
  var years = ['2020', '2021', '2022', '2023', '2024', '2025'];
  var colors = ['#1e3a5f', '#059669', '#84cc16', '#eab308', '#f97316', '#ef4444', '#64748b'];

  function rows(names, matrix, totalRow){
    return names.map(function(name, i){
      return { name: name, color: colors[i], values: matrix[i], isTotal: false };
    }).concat([{ name: '合计', color: colors[6], values: totalRow, isTotal: true }]);
  }

  function scaleRows(baseRows, ratio){
    return baseRows.map(function(r){
      return {
        name: r.name,
        color: r.color,
        isTotal: r.isTotal,
        values: r.values.map(function(v){ return Math.round(v * ratio); })
      };
    });
  }

  var robotRevenue = rows(
    [
      '轻负载多关节机器人（≤20kg）',
      '大负载多关节机器人（>20kg）',
      '四轴水平多关节机器人',
      '并联机器人',
      '协作机器人',
      '谐波减速机'
    ],
    [
      [19137, 19137, 19137, 25040, 29310, 35068],
      [19137, 19137, 19137, 25040, 29310, 35068],
      [19137, 19137, 19137, 25040, 29310, 35068],
      [3982, 3982, 3982, 5073, 5707, 6706],
      [3982, 3982, 3982, 5073, 5707, 6706],
      [19137, 19137, 19137, 25040, 29310, 35068]
    ],
    [66249, 92133, 111811, 142282, 158181, 182800]
  );

  var robotProfit = scaleRows(robotRevenue, 0.082);
  var robotCost = scaleRows(robotRevenue, 0.78);
  var robotRd = scaleRows(robotRevenue, 0.065);

  var machineRevenue = rows(
    [
      '加工中心',
      '数控车床',
      '龙门/桥式机床',
      '五轴联动机床',
      '磨床/齿轮机床',
      '主轴/刀库等核心部件'
    ],
    [
      [28450, 31280, 34520, 40120, 43860, 48200],
      [22180, 24560, 26890, 31240, 34120, 37650],
      [15620, 17240, 18980, 22150, 24380, 26890],
      [9840, 11260, 12840, 15680, 17240, 19120],
      [7230, 7980, 8760, 10240, 11280, 12450],
      [5120, 5680, 6240, 7280, 8020, 8890]
    ],
    [88440, 98000, 108230, 126710, 138900, 153200]
  );

  var machineProfit = scaleRows(machineRevenue, 0.076);
  var machineCost = scaleRows(machineRevenue, 0.81);
  var machineRd = scaleRows(machineRevenue, 0.058);

  function packAnnual(metricRows){
    return { years: years, rows: metricRows };
  }

  function quarterlyFromAnnual(annualRows){
    var qLabels = ['2024Q1', '2024Q2', '2024Q3', '2024Q4', '2025Q1', '2025Q2'];
    var qRows = annualRows.filter(function(r){ return !r.isTotal; }).slice(0, 4).map(function(r, i){
      var base = r.values[4];
      return {
        name: r.name,
        color: r.color,
        isTotal: false,
        values: [
          Math.round(base * 0.22),
          Math.round(base * 0.24),
          Math.round(base * 0.26),
          Math.round(base * 0.28),
          Math.round(r.values[5] * 0.23),
          Math.round(r.values[5] * 0.25)
        ]
      };
    });
    var totals = qLabels.map(function(_, qi){
      return qRows.reduce(function(sum, row){ return sum + row.values[qi]; }, 0);
    });
    qRows.push({ name: '合计', color: colors[6], isTotal: true, values: totals });
    return { years: qLabels, rows: qRows, demo: true };
  }

  function buildIndustry(revenue, profit, cost, rd){
    return {
      metrics: ['revenue', 'profit', 'cost', 'rd'],
      metricLabels: {
        revenue: '营业收入',
        profit: '利润',
        cost: '营业总成本',
        rd: '研发费用'
      },
      source: 'MIR DATABANK',
      unit: '百万人民币',
      description: '数据统计口径为A股上市公司（不含港股、美股及非上市主体），按工业机器人/数控机床相关产业链环节汇总。数据经 MIR DATABANK 整理，Demo 页面为示例展示。',
      annual: {
        revenue: packAnnual(revenue),
        profit: packAnnual(profit),
        cost: packAnnual(cost),
        rd: packAnnual(rd)
      },
      quarterly: {
        revenue: quarterlyFromAnnual(revenue),
        profit: quarterlyFromAnnual(profit),
        cost: quarterlyFromAnnual(cost),
        rd: quarterlyFromAnnual(rd)
      }
    };
  }

  window.TREND_FINANCE_DATA = {
    robot: buildIndustry(robotRevenue, robotProfit, robotCost, robotRd),
    machine: buildIndustry(machineRevenue, machineProfit, machineCost, machineRd)
  };
})();
