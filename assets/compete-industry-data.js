/* 竞争分析 · 分行业竞对 | 来源：竞争分析 MD + 工业机器人五强/装备制造四强市场规模竞争数据.md */
window.COMPETE_BY_INDUSTRY = {
  robot: {
    label: '工业机器人',
    panelHref: 'pages/竞争分析看板_v4.5.html?industry=robot',
    sourceNote: 'MOSS企业360透视 · 工业机器人赛道4家竞对（不含本方）',
    homepage: {
      sourceNote: '各上市公司年报 · 营业收入/利润总额/销售毛利率统一口径（2025年度）',
      tableColumns: ['公司名称', '营业收入（亿元）', '利润总额（亿元）', '销售毛利率'],
      tableFields: ['name', 'revenue', 'profit', 'margin'],
      ticker: [
        '汇川技术451亿元营收居四家中资机器人标的之首',
        '埃斯顿毛利率29.45%与汇川接近',
        '新松机器人、埃夫特利润总额仍为负',
        '四家企业毛利率分化明显（5%-29%）'
      ],
      companies: [
        {
          id: 'robot-inovance',
          name: '汇川技术（300124）',
          revenue: '451.05',
          profit: '54.33',
          margin: '28.95%'
        },
        {
          id: 'robot-estun',
          name: '埃斯顿（002747）',
          revenue: '48.88',
          profit: '0.77',
          margin: '29.45%'
        },
        {
          id: 'robot-siasun',
          name: '新松机器人（300024）',
          revenue: '41.22',
          profit: '-3.96',
          margin: '12.48%'
        },
        {
          id: 'robot-efort',
          name: '埃夫特（688165）',
          revenue: '9.32',
          profit: '-6.33',
          margin: '5.22%'
        }
      ]
    },
    ticker: [
      '埃斯顿 2025年上半年登顶中国市场（份额10.5%）',
      '汇川技术 伺服系统市占率32%、SCARA机器人25%',
      '新松机器人 近3年招投标100条、44家关联企业',
      '埃夫特 招投标活跃，工业机器人+智能制造'
    ],
    companies: [
      {
        id: 'robot-estun',
        name: '埃斯顿',
        scale: '中型·集团33家关联',
        listing: '上市',
        revenue: null,
        patents: '9件发明',
        highlight: '国产机器人出货量第一'
      },
      {
        id: 'robot-inovance',
        name: '汇川技术',
        scale: '集团16家关联',
        listing: '上市',
        revenue: null,
        patents: '9件发明',
        highlight: '伺服/SCARA龙头'
      },
      {
        id: 'robot-siasun',
        name: '新松机器人',
        scale: '大型·集团44家关联',
        listing: '上市',
        revenue: null,
        patents: '8件发明',
        highlight: '国产机器人先驱'
      },
      {
        id: 'robot-efort',
        name: '埃夫特',
        scale: '中型·外资',
        listing: '上市',
        revenue: null,
        patents: '3件发明',
        highlight: '机器人+智能制造'
      }
    ]
  },
  machine: {
    label: '机床',
    panelHref: 'pages/竞争分析看板_v4.5.html?industry=machine',
    sourceNote: 'MOSS企业360透视 · 机床赛道4家竞对（不含本方）',
    homepage: {
      sourceNote: '各企业年报/业绩预告 · 2024-2025总营收与增速；市场地位引用行业协会及公开研报',
      tableColumns: ['公司名称', '总营收(亿元)', '同比增长', '市场地位'],
      tableFields: ['name', 'revenue', 'growth', 'rank'],
      ticker: [
        '上海电气1267亿元体量居四强之首',
        '东方电气786亿元增速12.8%订单1172亿',
        '秦川齿轮加工机床市占率超60%行业第一',
        '沈阳机床依托通用技术集团恢复中'
      ],
      companies: [
        {
          id: 'comp-1',
          name: '上海电气',
          revenue: '1,266.79',
          growth: '+9.03%',
          rank: '综合能源装备龙头'
        },
        {
          id: 'comp-0',
          name: '东方电气',
          revenue: '786.15',
          growth: '+12.80%',
          rank: '核电/水电/火电龙头'
        },
        {
          id: 'comp-3',
          name: '秦川机床',
          revenue: '38.6',
          growth: '+2.62%',
          rank: '齿轮机床>60% · 细分第一'
        },
        {
          id: 'comp-2',
          name: '沈阳机床',
          revenue: '~37',
          growth: '~+0.5%',
          rank: '通用数控 · 恢复中'
        }
      ]
    },
    ticker: [
      '沈阳机床 2026年注册资本增资28.3%',
      '东方电气 2025年底增资10.9%',
      '秦川机床 发明专利10件，精密齿轮机床龙头',
      '上海电气 集团659家关联企业'
    ],
    companies: [
      {
        id: 'comp-0',
        name: '东方电气',
        scale: '中型企业',
        listing: '上市',
        revenue: null,
        patents: '10件发明',
        highlight: '发电装备龙头'
      },
      {
        id: 'comp-1',
        name: '上海电气',
        scale: '小型企业·上市·外资',
        listing: '上市',
        revenue: null,
        patents: '10件发明',
        highlight: '电气装备集团'
      },
      {
        id: 'comp-2',
        name: '沈阳机床',
        scale: '中型企业·上市·国有',
        listing: '上市',
        revenue: null,
        patents: '1件发明',
        highlight: '2026增资扩产'
      },
      {
        id: 'comp-3',
        name: '秦川机床',
        scale: '大型企业·上市',
        listing: '上市',
        revenue: null,
        patents: '10件发明',
        highlight: '精密机床工具'
      }
    ]
  }
};
