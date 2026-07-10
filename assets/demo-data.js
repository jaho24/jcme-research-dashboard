/* 京城机电 Demo 统一数据源 | 来源：MOSS企业洞察 + 公开政策/行业报告 */
window.DEMO_DATA = {
  platformName: '京城机电产业研究与市场分析平台',
  platformSubtitle: '产业研究 · 市场分析 · 竞争洞察 · 政策监测',

  ticker: [
    { title: '《机械行业稳增长工作方案（2025—2026年）》', url: 'https://www.news.cn/finance/20251118/541b0cce18b24d56954f787edeae0525/c.html' },
    { title: '《"十四五"机器人产业发展规划》', url: 'https://gxt.fujian.gov.cn/jdhy/zxzcfg/gjzcfg/202112/t20211228_5801290.htm' },
    { title: '《中华人民共和国能源法》', url: 'https://www.spp.gov.cn/spp/fl/202411/t20241109_671654.shtml' }
  ],

  news: {
    policy: [
      { tag: '机床', cls: 'tag-jc', title: '《机械行业稳增长工作方案（2025—2026年）》', url: 'https://www.news.cn/finance/20251118/541b0cce18b24d56954f787edeae0525/c.html', external: true },
      { tag: '机床', cls: 'tag-jc', title: '《工业母机高质量标准体系建设方案》', url: 'https://www.cmes.org/zcwj/f1dbd1ae9fab43079c9100f89f4cbaca.html', external: true },
      { tag: '机器人', cls: 'tag-ny', title: '《"十四五"机器人产业发展规划》', url: 'https://gxt.fujian.gov.cn/jdhy/zxzcfg/gjzcfg/202112/t20211228_5801290.htm', external: true },
      { tag: '机器人', cls: 'tag-ny', title: '《人形机器人创新发展指导意见》', url: 'https://www.ncsti.gov.cn/zcfg/zcwj/202311/t20231103_140346.html', external: true },
      { tag: '氢能', cls: 'tag-h2', title: '《中华人民共和国能源法》', url: 'https://www.spp.gov.cn/spp/fl/202411/t20241109_671654.shtml', external: true }
    ],
    industry: [
      { tag: '机床', cls: 'tag-jc', title: '2025年工业母机行业营收突破1.6万亿，占全球三分之一', url: 'http://news.cyol.com/gb/keji/articles/2026-07/08/content_Q4WVd3hpM0.html', external: true },
      { tag: '机床', cls: 'tag-jc', title: '五轴数控机床国产化率突破77%', url: 'https://app.myzaker.com/article/6a21147b8e9f0901714922a7', external: true },
      { tag: '机器人', cls: 'tag-ny', title: '埃斯顿连续两个季度位列中国机器人市场第一', url: 'https://www.estun.com/news/484.html', external: true },
      { tag: '机器人', cls: 'tag-ny', title: '2025年上半年工业机器人出货量超16.3万台，同比增长16%', url: 'https://www.forbeschina.com/technology/70496', external: true },
      { tag: '氢能', cls: 'tag-h2', title: '《能源法》2025年1月1日正式施行，氢能纳入能源管理体系', url: 'https://www.nea.gov.cn/20250604/ec7606c39c084f5b82505b2b4bab81d6/c.html', external: true }
    ],
    enterprise: [
      { tag: '机床', cls: 'tag-jc', title: '科德数控产能规划大幅提升至500台', url: 'https://www.cls.cn/detail/1191015', external: true },
      { tag: '机器人', cls: 'tag-ny', title: '华为下场布局人形机器人产业链', url: 'https://m.cyzone.cn/article/789897', external: true },
      { tag: '机器人', cls: 'tag-ny', title: '宇树科技人形机器人亮相2025年央视春晚后台', url: 'http://www.news.cn/tech/20250420/564dfbf2634249079707051a3fa39efd/c.html', external: true },
      { tag: '机床', cls: 'tag-jc', title: '国产机床品牌市占率提升至71%', url: 'https://pdf.dfcfw.com/pdf/H3_AP202605241822838405_1.pdf', external: true },
      { tag: '氢能', cls: 'tag-h2', title: '截至2025年底氢燃料电池汽车累计销量近4万辆', url: 'https://policy.mofcom.gov.cn/claw/policyInfo.shtml?id=8867', external: true }
    ]
  },

  trends: {
    robot: {
      label: '工业机器人',
      chartTitle: '产量与国产化率趋势',
      tableTitle: '中国工业机器人市场规模数据',
      unit: '亿元 / 万套 / %',
      source: 'IFR、中商产业研究院、GGII、MIR DATABANK',
      definition: 'IFR 数据以"新装机量"和"保有量"为核心指标；中国销售额数据来自不同机构，存在口径差异（本体 vs 系统集成）。',
      description: '2024 年中国装机量创历史新高，达 29.5 万台；国产化率从 2020 年约 28% 提升至 2024 年 57%；产量从 2020 年 36.6 万套增长至 2024 年 55.6 万套。',
      years: ['2020', '2021', '2022', '2023', '2024'],
      series: [
        { name: '产量(万套)', color: '#059669', yAxis: 'left', values: [36.6, 40, 44.3, 48, 55.6] },
        { name: '国产化率(%)', color: '#dc2626', yAxis: 'right', values: [28, 35, 42, 50, 57] }
      ],
      tables: {
        annual: {
          headers: ['指标名称', '2020', '2021', '2022', '2023', '2024', '2025E', '2026E'],
          rows: [
            { name: '新装机量（万台）', values: ['—', '—', '28.0', '27.6', '29.5', '32', '35'], forecastFrom: 5 },
            { name: '产量（万套）', values: ['36.6', '—', '44.3', '—', '55.6', '60', '65'], forecastFrom: 5 },
            { name: '销售额（亿元）', values: ['476.3', '—', '609.0', '725.4', '683', '750', '820'], forecastFrom: 5 },
            { name: '全球占比', values: ['~50%', '—', '>50%', '51%', '54%', '55%', '56%'], forecastFrom: 5 },
            { name: '国产化率', values: ['~28%', '—', '—', '—', '57%', '63%', '68%'], forecastFrom: 5 }
          ]
        },
        quarterly: {
          headers: ['指标名称', '2024Q1', '2024Q2', '2024Q3', '2024Q4'],
          rows: [
            { name: '出货量（万台）', values: ['3.8', '4.2', '4.1', '4.4'], demo: true },
            { name: '销售额（亿元）', values: ['125', '138', '142', '156'], demo: true }
          ]
        },
        monthly: {
          headers: ['指标名称', '2025-01', '2025-02', '2025-03', '2025-04', '2025-05'],
          rows: [
            { name: '出货量（万台）', values: ['1.2', '1.0', '1.4', '1.3', '1.5'], demo: true },
            { name: '订单额（亿元）', values: ['38', '32', '45', '41', '48'], demo: true }
          ]
        }
      },
      global: {
        headers: ['年份', '新装机量（万台）', '保有量（万台）', '同比增长'],
        rows: [
          ['2020', '42.3', '—', '—'],
          ['2021', '51.7', '347.7', '+31%'],
          ['2022', '55.3', '390.4', '+7%'],
          ['2023', '54.1', '428.2', '-2%'],
          ['2024', '54.2', '466.4', '+0.2%']
        ]
      },
      kpis: [
        { label: '2024 装机量', value: '29.5', unit: '万台' },
        { label: '国产化率', value: '57%', unit: '2024年' },
        { label: '2024 产量', value: '55.6', unit: '万套' }
      ]
    },
    machine: {
      label: '数控机床',
      chartTitle: '产量与国产化率趋势',
      tableTitle: '中国数控机床市场规模数据',
      unit: '亿元 / 万台 / %',
      source: '中国机床工具工业协会、中商产业研究院、前瞻产业研究院、Gardner Intelligence',
      definition: 'Gardner Intelligence 采用 54 国生产/消费口径；Grand View Research 采用广义市场收入口径；中国数据分为全行业（含工具、附件）和数控机床细分口径。',
      description: '2024 年中国机床出口额全球第一，占全球出口 47.8%；贸易顺差扩大，进口下降、出口增长 7%；数控化率持续提升，但高端领域仍依赖进口。',
      years: ['2019', '2021', '2022', '2023', '2024'],
      series: [
        { name: '产量(万台)', color: '#059669', yAxis: 'left', values: [0, 27, 20.9, 22, 23] },
        { name: '国产化率(%)', color: '#dc2626', yAxis: 'right', values: [52, 58, 62, 67, 71] }
      ],
      tables: {
        annual: {
          headers: ['指标名称', '2019', '2021', '2022', '2023', '2024', '2025E', '2026E'],
          rows: [
            { name: '市场规模（亿元）', values: ['3270', '—', '—', '4090', '4325', '4680', '4950'], forecastFrom: 5 },
            { name: '国产化率', values: ['52%', '58%', '62%', '67%', '71%', '74%', '77%'], forecastFrom: 5 },
            { name: '数控切削产量（万台）', values: ['—', '27.0', '20.9', '—', '—', '24', '26'], forecastFrom: 5 },
            { name: '出口额（亿美元）', values: ['—', '—', '—', '—', '~227', '245', '260'], forecastFrom: 5 },
            { name: '同比增速', values: ['—', '—', '—', '5.75%', '5.7%', '8.2%', '5.8%'], forecastFrom: 5 }
          ]
        },
        quarterly: {
          headers: ['指标名称', '2024Q1', '2024Q2', '2024Q3', '2024Q4'],
          rows: [
            { name: '营收（亿元）', values: ['2100', '2280', '2450', '2472'], demo: true },
            { name: '出口额（亿美元）', values: ['52', '56', '58', '61'], demo: true }
          ]
        },
        monthly: {
          headers: ['指标名称', '2025-01', '2025-02', '2025-03', '2025-04', '2025-05'],
          rows: [
            { name: '产量（万台）', values: ['1.8', '1.6', '2.0', '1.9', '2.1'], demo: true },
            { name: '订单额（亿元）', values: ['320', '285', '350', '330', '365'], demo: true }
          ]
        }
      },
      global: {
        headers: ['年份', '产值（亿美元）', '消费额（亿美元）', '同比增长'],
        rows: [
          ['2023', '883', '851', '—'],
          ['2024', '834', '800', '-5.5%']
        ]
      },
      kpis: [
        { label: '2024 市场规模', value: '4325', unit: '亿元' },
        { label: '国产市占率', value: '71%', unit: '2024年' },
        { label: '出口全球占比', value: '47.8%', unit: '2024年' }
      ]
    }
  },

  chain: {
    robot: { total: '41,110', upstream: '钢材、伺服驱动器、传感器芯片', downstream: '物流仓储、汽车生产、纺织自动化' },
    machine: { total: '6,912', upstream: '钢铁、机床零部件、液压传动', downstream: '工程机械、汽车配件、消费电子' }
  },

  company: {
    name: '北京京城机电控股有限责任公司',
    shortName: '京城机电',
    creditCode: '911100006336862176',
    legalPerson: '阮忠奎',
    regCapi: '334,162.71 万人民币',
    startDate: '1997年',
    employeeNum: '93人',
    status: '存续',
    industry: '装备制造 · 发电设备 · 智能制造 · 气体储运',
    scope: '发电机组及相关设备、风电机组及相关设备、火电机组及相关设备、燃气发电机组及相关设备',
    honors: ['中国机械工业企业百强榜', '北京市纳税信用A级企业'],
    financials: [
      { year: '2020', revenue: 99.29, profit: -1.1 },
      { year: '2021', revenue: 106.76, profit: -0.27 },
      { year: '2023', revenue: 111.98, profit: -1.21 },
      { year: '2024', revenue: 115.6, profit: 0.53 },
      { year: '2025', revenue: 113.65, profit: 0.61 }
    ],
    news: [
      { time: '2025', cat: '扩产投建', summary: '青岛智能制造产业园项目推介，主题"精诚聚合·智造未来"' },
      { time: '2025', cat: '其他', summary: '亮相世界机器人大会，展示大型智能装备研发制造服务能力' },
      { time: '2025', cat: '其他', summary: '2026届校园招聘启动，12家企业提供150余个岗位' },
      { time: '2026-03', cat: '其他', summary: '上市平台京城股份披露2025年度报告及ESG报告' }
    ],
    bids: [
      { date: '2026-06-18', type: '招标', title: '基础设施软硬件采购项目公开招标公告' },
      { date: '2026-06-18', type: '招标', title: '司库信息系统软件采购项目公开招标公告' },
      { date: '2026-06-18', type: '招标', title: '网络安全产品采购项目公开招标公告' },
      { date: '2026-03-18', type: '中标', title: '京城环保中标玉树生态工程' },
      { date: '2026-03-17', type: '招标', title: 'CCMT2026第十四届中国数控机床展览会运输项目询比价' }
    ],
    insight: '北京市属国有独资大型装备制造集团，营收稳定在110-115亿元区间，2023年后扭亏为盈。处于战略扩张与转型深化期，数字化基建投入密集。'
  },

  competitors: [
    { name: '北京京城机电控股', revenue: '113.65亿', rd: '—', patents: '—', highlight: '我方', risk: '低' },
    { name: '东方电气股份有限公司', revenue: '—', rd: '—', patents: '10', highlight: '发电设备', risk: '中' },
    { name: '上海电气集团股份有限公司', revenue: '—', rd: '—', patents: '10', highlight: '电气装备', risk: '高' },
    { name: '沈阳机床股份有限公司', revenue: '—', rd: '—', patents: '1', highlight: '数控机床', risk: '中' },
    { name: '秦川机床工具集团股份公司', revenue: '—', rd: '—', patents: '10', highlight: '机床工具', risk: '高' }
  ],

  competeTicker: [
    '东方电气 2025年底增资10.9%',
    '埃斯顿连续两季度市场第一',
    '沈阳机床 2026年增资28.3%',
    '京城机电 2025年净利6100万元'
  ],

  policies: [
    { id: 1, cat: '机床', title: '《机械行业稳增长工作方案（2025—2026年）》', dept: '工业和信息化部', type: '产业规划', status: '实施中', date: '2025-11', summary: '推动产业数字化转型智能化升级，扩大工业母机等应用需求，培养单项冠军和专精特新企业。', url: 'https://www.news.cn/finance/20251118/541b0cce18b24d56954f787edeae0525/c.html' },
    { id: 2, cat: '机床', title: '《工业母机高质量标准体系建设方案》', dept: '中国机械工程学会', type: '标准建设', status: '已发布', date: '2025-06', summary: '到2026年基本建立工业母机高质量标准体系，2030年减材、等材制造标准达世界先进水平。', url: 'https://www.cmes.org/zcwj/f1dbd1ae9fab43079c9100f89f4cbaca.html' },
    { id: 3, cat: '机床', title: '《推动工业领域设备更新实施方案》', dept: '国务院', type: '设备更新', status: '实施中', date: '2024-04', summary: '重点推动工业母机行业更新服役超过10年的落后低效设备，推动制造业高端化、智能化、绿色化。', url: 'https://guangdong.chinatax.gov.cn/gdsw/zjfg/2024-04/10/content_1fd960d0990d4e1eb0328c6038874012.shtml' },
    { id: 4, cat: '机床', title: '"十五五"规划建议关键核心技术攻关', dept: '国家层面', type: '科技攻关', status: '规划中', date: '2025-11', summary: '全链条推动集成电路、工业母机、高端仪器等重点领域关键核心技术攻关取得决定性突破。', url: 'https://www.news.cn/finance/20251118/541b0cce18b24d56954f787edeae0525/c.html' },
    { id: 5, cat: '机器人', title: '《"十四五"机器人产业发展规划》', dept: '工业和信息化部', type: '产业规划', status: '实施中', date: '2021-12', summary: '到2025年成为全球机器人技术创新策源地，产业营收年均增速超过20%，制造业机器人密度翻番。', url: 'https://gxt.fujian.gov.cn/jdhy/zxzcfg/gjzcfg/202112/t20211228_5801290.htm' },
    { id: 6, cat: '机器人', title: '《人形机器人创新发展指导意见》', dept: '工业和信息化部', type: '指导意见', status: '已发布', date: '2023-11', summary: '到2025年初步建立人形机器人创新体系，整机产品达到国际先进水平。', url: 'https://www.ncsti.gov.cn/zcfg/zcwj/202311/t20231103_140346.html' },
    { id: 7, cat: '机器人', title: '《"人工智能+制造"专项行动实施意见》', dept: '工信部等八部门', type: '专项行动', status: '实施中', date: '2026-01', summary: '推动人工智能与制造业深度融合，加快工业机器人智能化升级。', url: 'https://www.nda.gov.cn/sjj/zwgk/zcfb/0112/20260107214358696030895_pc.html' },
    { id: 8, cat: '氢能', title: '《中华人民共和国能源法》', dept: '全国人大常委会', type: '法律', status: '已施行', date: '2025-01', summary: '首次在法律层面将氢能纳入能源管理体系，积极有序推进氢能开发利用。', url: 'https://www.spp.gov.cn/spp/fl/202411/t20241109_671654.shtml' },
    { id: 9, cat: '氢能', title: '《氢能产业发展中长期规划（2021—2035年）》', dept: '国家发展改革委', type: '产业规划', status: '实施中', date: '2022-03', summary: '系统谋划氢能产业高质量发展，打造多元主体、协同创新、集群发展的氢能产业生态。', url: 'https://www.nea.gov.cn/20250430/96022785b3a747248288ad1c57d3a025/83d863317f2f44edb605348e4de40993.pdf' },
    { id: 10, cat: '氢能', title: '《加快工业领域清洁低碳氢应用实施方案》', dept: '工信部等三部门', type: '实施方案', status: '实施中', date: '2024-12', summary: '加快工业副产氢和可再生能源制氢等清洁低碳氢应用。', url: 'https://www.nea.gov.cn/20250430/96022785b3a747248288ad1c57d3a025/83d863317f2f44edb605348e4de40993.pdf' }
  ],

  events: [
    { id: 1, cat: '机床', type: '市场动态', title: '2025年工业母机行业营收突破1.6万亿，占全球三分之一', date: '2026-07', area: '全国', url: 'http://news.cyol.com/gb/keji/articles/2026-07/08/content_Q4WVd3hpM0.html' },
    { id: 2, cat: '机床', type: '市场动态', title: '数控机床市场规模达1224亿元，同比增长4.7%', date: '2025-12', area: '全国', url: 'https://wap.seccw.com/index.php/Index/detail/id/47160.html' },
    { id: 3, cat: '机床', type: '产需对接', title: '2026"工业母机+"百行万企产需对接活动在上海成功举办', date: '2026-07', area: '上海', url: 'https://www.shmh.gov.cn/shmh/zwdt-jw/20260706/596268.html' },
    { id: 4, cat: '机床', type: '国产替代', title: '五轴数控机床国产化率突破77%', date: '2025-10', area: '全国', url: 'https://app.myzaker.com/article/6a21147b8e9f0901714922a7' },
    { id: 5, cat: '机器人', type: '市场排名', title: '埃斯顿连续两个季度位列中国机器人市场第一', date: '2025-06', area: '全国', url: 'https://www.estun.com/news/484.html' },
    { id: 6, cat: '机器人', type: '出货量', title: '2025年上半年工业机器人出货量超16.3万台，同比增长16%', date: '2025-06', area: '全国', url: 'https://www.forbeschina.com/technology/70496' },
    { id: 7, cat: '机器人', type: '技术突破', title: '工信部启动2026年度人形机器人与具身智能实景实训专项行动', date: '2026-06', area: '全国', url: 'http://jjckb.xinhuanet.com/20260622/460c805c4d1f49898931e02a86f63406/c.html' },
    { id: 8, cat: '机器人', type: '企业动态', title: '科德数控产能规划大幅提升至500台', date: '2025-08', area: '辽宁', url: 'https://www.cls.cn/detail/1191015' },
    { id: 9, cat: '氢能', type: '政策法规', title: '《能源法》正式施行，氢能纳入能源管理体系', date: '2025-01', area: '全国', url: 'https://www.nea.gov.cn/20250604/ec7606c39c084f5b82505b2b4bab81d6/c.html' },
    { id: 10, cat: '氢能', type: '市场数据', title: '截至2025年底氢燃料电池汽车累计销量近4万辆', date: '2025-12', area: '全国', url: 'https://policy.mofcom.gov.cn/claw/policyInfo.shtml?id=8867' }
  ],

  competitorDetails: [
    { name: '东方电气股份有限公司', code: '915101002051154851', scale: '中型企业', patents: 10, risk: '员工下降54.2%，股权出质较多', opportunity: '2025年底增资10.9%，招投标活跃' },
    { name: '上海电气集团股份有限公司', code: '91310000759565082B', scale: '上市·外资', patents: 10, risk: '员工暴跌90.6%，股权出质97条', opportunity: '集团659家关联企业，数据集成需求大' },
    { name: '沈阳机床股份有限公司', code: '91210106243406830Q', scale: '中型·上市·国有', patents: 1, risk: '高管频繁变动', opportunity: '2026年增资28.3%，产能扩张期' },
    { name: '秦川机床工具集团股份公司', code: '9161000071007221XC', scale: '大型·上市', patents: 10, risk: '税务非正常户，行政处罚', opportunity: '创新能力较强，需谨慎接触' }
  ],

  /* industrialObservation: 60条，见 industrial-observation-data.js（政策30 + 动态/事件30） */

  articles: [
    { id: 1, title: '数控机床国产替代战略研究', date: '2025/01/21', industry: '机床' },
    { id: 2, title: '工业机器人产业链竞争格局分析', date: '2025/01/18', industry: '机器人' },
    { id: 3, title: '氢能装备产业发展路径与政策机遇', date: '2025/01/15', industry: '氢能' },
    { id: 4, title: '智能制造数字化转型实践案例汇编', date: '2025/01/12', industry: '机床' },
    { id: 5, title: '高端液压元件自主可控专题报告', date: '2025/01/08', industry: '液压' },
    { id: 6, title: '增材制造在航空航天领域应用前景', date: '2025/01/05', industry: '增材制造' },
    { id: 7, title: '北京市高精尖产业政策解读与申报指南', date: '2024/12/28', industry: '机床' },
    { id: 8, title: '工业母机"十五五"发展展望', date: '2024/12/22', industry: '机床' }
  ],

  trendHotspots: {
    robot: [
      { date: '2025-06', tag: '市场', title: '埃斯顿连续两个季度位列中国机器人市场第一' },
      { date: '2025-06', tag: '出货', title: '2025H1工业机器人出货量超16.3万台，同比+16%' },
      { date: '2026-06', tag: '政策', title: '人形机器人与具身智能实景实训专项行动启动' }
    ],
    machine: [
      { date: '2026-07', tag: '市场', title: '2025年工业母机行业营收突破1.6万亿' },
      { date: '2025-10', tag: '替代', title: '五轴数控机床国产化率突破77%' },
      { date: '2025-08', tag: '产能', title: '科德数控产能规划提升至500台' }
    ]
  }
};
