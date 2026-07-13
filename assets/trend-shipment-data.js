/* 行业趋势 · 年度出货量 | 来源：MIR DATABANK（Excel 导出整理） */
(function () {
  function vendorRow(name, values, opts) {
    opts = opts || {};
    return {
      name: name,
      values: values,
      highlight: !!opts.highlight,
      isTotal: !!opts.isTotal
    };
  }

  function categoryRow(category, values, opts) {
    opts = opts || {};
    return {
      category: category,
      dataType: '产品出货量',
      values: values,
      unit: opts.unit || '台',
      highlight: !!opts.highlight
    };
  }

  window.TREND_SHIPMENT_DATA = {
    robot: {
      label: '工业机器人',
      source: 'MIR DATABANK',
      tableMode: 'vendor',
      unit: '台',
      description:
        '统计口径为中国市场工业机器人整机出货量，按主要厂商汇总。含埃斯顿、发那科、库卡、汇川、ABB 及市场其他主体。',
      sourceNote: '数据来源：MIR DATABANK · 工业机器人-年度出货量',
      years: ['2021', '2022', '2023', '2024', '2025'],
      rows: [
        vendorRow('埃斯顿', [10502, 16730, 24010, 28090, 33440], { highlight: true }),
        vendorRow('发那科', [37040, 43120, 37560, 32000, 33060]),
        vendorRow('库卡', [19811, 23028, 21030, 24002, 32130]),
        vendorRow('汇川', [10285, 14560, 18480, 26020, 28180]),
        vendorRow('ABB', [22504, 22885, 17095, 17020, 20030]),
        vendorRow('其他', [156218, 161753, 164979, 167046, 187222], { isTotal: true })
      ],
      chartSeries: [
        { name: '埃斯顿', color: '#2563eb', values: [10502, 16730, 24010, 28090, 33440] },
        { name: '发那科', color: '#059669', values: [37040, 43120, 37560, 32000, 33060] },
        { name: '库卡', color: '#eab308', values: [19811, 23028, 21030, 24002, 32130] },
        { name: '汇川', color: '#f97316', values: [10285, 14560, 18480, 26020, 28180] },
        { name: 'ABB', color: '#64748b', values: [22504, 22885, 17095, 17020, 20030] }
      ]
    },
    machine: {
      label: '数控机床',
      source: 'MIR DATABANK',
      tableMode: 'category',
      unit: '台',
      description:
        '统计口径为中国市场数控机床整机出货量，按机床品类分类汇总。含加工中心、数控车床、龙门铣床等主流机型。',
      sourceNote: '特殊符号注释："—" 表示无数据。数据经 MIR DATABANK 整理导出。',
      years: ['2019', '2020', '2021', '2022', '2023', '2024', '2025'],
      rows: [
        categoryRow('数控机床', [218000, 228000, 265000, 242000, 238000, 251000, 268000], { highlight: true }),
        categoryRow('加工中心', [68000, 72000, 82000, 76000, 74500, 78200, 83500]),
        categoryRow('数控车床', [72000, 75000, 88000, 82000, 80500, 84800, 90200]),
        categoryRow('龙门铣床', [18500, 19200, 22800, 21500, 20800, 22100, 23600]),
        categoryRow('五轴联动机床', [8200, 9500, 12800, 14200, 15600, 16800, 18200]),
        categoryRow('磨床/齿轮机床', [15200, 16100, 18500, 17200, 16800, 17600, 18800]),
        categoryRow('数控金属切削机床', [198000, 206000, 241000, 209000, 205000, 218000, 232000], { highlight: true })
      ]
    }
  };
})();
