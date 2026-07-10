/* 产业链图谱结构化数据 | 来源：行业趋势-工业机器人数控产业链图谱分析.md */
window.INDUSTRY_CHAIN_DATA = {
  robot: {
    id: 'robot',
    name: '工业机器人',
    nameEn: 'industrial robot',
    code: 'mcxfhy2796',
    totalEnterprises: 41110,
    scope: '全国',
    stats: {
      upstreamNodes: 38,
      upstreamCategories: 2,
      downstreamNodes: 25,
      downstreamCategories: 1
    },
    coreEnterprises: [
      { name: '埃斯顿自动化股份有限公司', region: '江苏南京', type: '本体制造', scale: '上市', source: 'demo' },
      { name: '沈阳新松机器人自动化股份有限公司', region: '辽宁沈阳', type: '本体制造', scale: '大型', source: 'demo' },
      { name: '埃夫特智能装备股份有限公司', region: '安徽芜湖', type: '本体制造', scale: '上市', source: 'demo' },
      { name: '节卡机器人股份有限公司', region: '上海', type: '协作机器人', scale: '中型', source: 'demo' },
      { name: '配天机器人技术有限公司', region: '安徽蚌埠', type: '本体制造', scale: '中型', source: 'demo' },
      { name: '珞石（北京）科技有限公司', region: '北京', type: '协作机器人', scale: '中型', source: 'demo' }
    ],
    upstream: [
      {
        code: 'mccy235', name: '钢材', count: 56692,
        enterprises: [
          { name: '宝山钢铁股份有限公司', region: '上海', type: '钢铁冶炼', scale: '上市', source: 'demo' },
          { name: '鞍钢股份有限公司', region: '辽宁鞍山', type: '钢铁冶炼', scale: '上市', source: 'demo' },
          { name: '河钢股份有限公司', region: '河北石家庄', type: '钢铁冶炼', scale: '上市', source: 'demo' },
          { name: '江苏沙钢集团有限公司', region: '江苏张家港', type: '钢铁冶炼', scale: '大型', source: 'demo' },
          { name: '首钢股份有限公司', region: '北京', type: '钢铁冶炼', scale: '上市', source: 'demo' }
        ]
      },
      {
        code: 'FA004002', name: '电线电缆', count: 48692,
        enterprises: [
          { name: '远东智慧能源股份有限公司', region: '江苏宜兴', type: '电线电缆', scale: '上市', source: 'demo' },
          { name: '江苏亨通光电股份有限公司', region: '江苏吴江', type: '光纤电缆', scale: '上市', source: 'demo' },
          { name: '中天科技股份有限公司', region: '江苏南通', type: '通信电缆', scale: '上市', source: 'demo' },
          { name: '宝胜科技创新股份有限公司', region: '江苏扬州', type: '特种电缆', scale: '上市', source: 'demo' },
          { name: '青岛汉缆股份有限公司', region: '山东青岛', type: '高压电缆', scale: '上市', source: 'demo' }
        ]
      },
      {
        code: 'MM0180010103', name: '钢线材', count: 6660,
        enterprises: [
          { name: '江苏沙钢集团有限公司', region: '江苏张家港', type: '线材轧制', scale: '大型', source: 'demo' },
          { name: '永兴特种材料科技股份有限公司', region: '浙江湖州', type: '特种钢材', scale: '上市', source: 'demo' },
          { name: '西宁特殊钢股份有限公司', region: '青海西宁', type: '特钢线材', scale: '上市', source: 'demo' },
          { name: '江苏兴达钢帘线股份有限公司', region: '江苏泰州', type: '钢帘线', scale: '大型', source: 'demo' }
        ]
      },
      {
        code: 'mccy1087', name: '铝合金型材', count: 11123,
        enterprises: [
          { name: '中国铝业股份有限公司', region: '北京', type: '铝型材', scale: '上市', source: 'demo' },
          { name: '山东南山铝业股份有限公司', region: '山东龙口', type: '铝加工', scale: '上市', source: 'demo' },
          { name: '河南明泰铝业股份有限公司', region: '河南巩义', type: '铝板带箔', scale: '上市', source: 'demo' },
          { name: '广东豪美新材股份有限公司', region: '广东清远', type: '建筑铝型材', scale: '上市', source: 'demo' }
        ]
      },
      {
        code: 'FA0040010705', name: '电力电源', count: 14387,
        enterprises: [
          { name: '深圳市英威腾电气股份有限公司', region: '广东深圳', type: '工业电源', scale: '上市', source: 'demo' },
          { name: '深圳市汇川技术股份有限公司', region: '广东深圳', type: '伺服电源', scale: '上市', source: 'demo' },
          { name: '台达电子工业股份有限公司', region: '台湾桃园', type: '开关电源', scale: '上市', source: 'demo' },
          { name: '深圳麦格米特电气股份有限公司', region: '广东深圳', type: '工业电源', scale: '上市', source: 'demo' }
        ]
      },
      {
        code: 'mcxfhy34516', name: '传感器芯片', count: 477,
        enterprises: [
          { name: '潍坊歌尔微电子有限公司', region: '山东潍坊', type: 'MEMS传感器', scale: '大型', source: 'md' },
          { name: '汉威科技集团股份有限公司', region: '河南郑州', type: '气体传感器', scale: '上市', source: 'demo' },
          { name: '苏州固锝电子股份有限公司', region: '江苏苏州', type: '半导体传感', scale: '上市', source: 'demo' },
          { name: '北京必创科技股份有限公司', region: '北京', type: '工业传感', scale: '上市', source: 'demo' }
        ]
      },
      {
        code: 'EE00100604', name: '伺服驱动器', count: 1855,
        enterprises: [
          { name: '深圳市汇川技术股份有限公司', region: '广东深圳', type: '伺服驱动', scale: '上市', source: 'demo' },
          { name: '埃斯顿自动化股份有限公司', region: '江苏南京', type: '运动控制', scale: '上市', source: 'demo' },
          { name: '深圳市英威腾电气股份有限公司', region: '广东深圳', type: '伺服系统', scale: '上市', source: 'demo' },
          { name: '武汉华中数控股份有限公司', region: '湖北武汉', type: '数控驱动', scale: '上市', source: 'demo' }
        ]
      },
      {
        code: 'FA0070041201', name: '伺服电机', count: 3370,
        enterprises: [
          { name: '深圳市汇川技术股份有限公司', region: '广东深圳', type: '伺服电机', scale: '上市', source: 'demo' },
          { name: '上海鸣志电器股份有限公司', region: '上海', type: '步进伺服', scale: '上市', source: 'demo' },
          { name: '深圳市雷赛智能控制股份有限公司', region: '广东深圳', type: '伺服电机', scale: '上市', source: 'demo' },
          { name: '江苏雷利电机股份有限公司', region: '江苏常州', type: '微电机', scale: '上市', source: 'demo' }
        ]
      }
    ],
    downstream: [
      {
        code: 'mccy525', name: '物流仓储设备', count: 50884,
        enterprises: [
          { name: '深圳市今天国际物流技术股份有限公司', region: '广东深圳', type: '智能仓储', scale: '上市', source: 'demo' },
          { name: '东杰智能科技集团股份有限公司', region: '山西太原', type: '立体仓库', scale: '上市', source: 'demo' },
          { name: '兰剑智能科技股份有限公司', region: '山东济南', type: '物流机器人', scale: '上市', source: 'demo' },
          { name: '南京音飞储存设备股份有限公司', region: '江苏南京', type: '穿梭车', scale: '上市', source: 'demo' }
        ]
      },
      {
        code: 'mccy72', name: '设备维修服务', count: 14242,
        enterprises: [
          { name: '中联重科股份有限公司', region: '湖南长沙', type: '设备维保', scale: '上市', source: 'demo' },
          { name: '上海电气集团股份有限公司', region: '上海', type: '工业维保', scale: '上市', source: 'demo' },
          { name: '中设股份工程技术服务有限公司', region: '北京', type: '设备检修', scale: '中型', source: 'demo' },
          { name: '中国机械工业集团有限公司', region: '北京', type: '装备服务', scale: '央企', source: 'demo' }
        ]
      },
      {
        code: 'mcxfhy46347', name: '聚碳酸酯工程塑料及制品', count: 15435,
        enterprises: [
          { name: '万华化学集团股份有限公司', region: '山东烟台', type: '工程塑料', scale: '上市', source: 'demo' },
          { name: '鲁西化工集团股份有限公司', region: '山东聊城', type: '化工材料', scale: '上市', source: 'demo' },
          { name: '金发科技股份有限公司', region: '广东广州', type: '改性塑料', scale: '上市', source: 'demo' },
          { name: '上海普利特复合材料股份有限公司', region: '上海', type: '高分子材料', scale: '上市', source: 'demo' }
        ]
      },
      {
        code: 'mcxfhy2877', name: '纺织自动化设备', count: 11450,
        enterprises: [
          { name: '杰克科技股份有限公司', region: '浙江台州', type: '缝制设备', scale: '上市', source: 'demo' },
          { name: '宁波慈星股份有限公司', region: '浙江宁波', type: '针织机械', scale: '上市', source: 'demo' },
          { name: '浙江大豪科技股份有限公司', region: '浙江绍兴', type: '刺绣数控', scale: '上市', source: 'demo' },
          { name: '上工申贝（集团）股份有限公司', region: '上海', type: '缝制自动化', scale: '上市', source: 'demo' }
        ]
      },
      {
        code: 'mcxfhy415383', name: '金属焊接机', count: 6853,
        enterprises: [
          { name: '埃斯顿自动化股份有限公司', region: '江苏南京', type: '焊接机器人', scale: '上市', source: 'demo' },
          { name: '武汉锐科光纤激光技术股份有限公司', region: '湖北武汉', type: '激光焊接', scale: '上市', source: 'demo' },
          { name: '上海沪工焊接集团股份有限公司', region: '上海', type: '焊接设备', scale: '上市', source: 'demo' },
          { name: '唐山松下产业机器有限公司', region: '河北唐山', type: '弧焊设备', scale: '合资', source: 'demo' }
        ]
      }
    ],
    source: '帆软产业大数据平台',
    reportDate: '2026-07-10'
  },
  machine: {
    id: 'machine',
    name: '数控机床',
    nameEn: 'CNC machine tools',
    code: 'FA00700110',
    totalEnterprises: 6912,
    scope: '全国',
    stats: {
      upstreamNodes: 31,
      upstreamCategories: 2,
      downstreamNodes: 28,
      downstreamCategories: 2
    },
    coreEnterprises: [
      { name: '上海柏楚数控科技有限公司', region: '上海闵行', type: '数控系统', scale: '大型', source: 'md' },
      { name: '新代科技（苏州）有限公司', region: '江苏苏州', type: '数控系统', scale: '中型', source: 'md' },
      { name: '沈阳机床股份有限公司', region: '辽宁沈阳', type: '机床整机', scale: '上市', source: 'demo' },
      { name: '科德数控股份有限公司', region: '辽宁大连', type: '五轴机床', scale: '上市', source: 'demo' },
      { name: '秦川机床工具集团股份公司', region: '陕西宝鸡', type: '精密机床', scale: '上市', source: 'demo' },
      { name: '宁波海天精工股份有限公司', region: '浙江宁波', type: '数控机床', scale: '上市', source: 'demo' }
    ],
    upstream: [
      {
        code: 'MM018', name: '钢铁', count: 59861,
        enterprises: [
          { name: '宝山钢铁股份有限公司', region: '上海', type: '钢铁冶炼', scale: '上市', source: 'demo' },
          { name: '鞍钢股份有限公司', region: '辽宁鞍山', type: '钢铁冶炼', scale: '上市', source: 'demo' },
          { name: '河钢集团有限公司', region: '河北石家庄', type: '钢铁集团', scale: '央企', source: 'demo' },
          { name: '马鞍山钢铁股份有限公司', region: '安徽马鞍山', type: '钢铁冶炼', scale: '上市', source: 'demo' }
        ]
      },
      {
        code: 'mccy235', name: '钢材', count: 56692,
        enterprises: [
          { name: '宝山钢铁股份有限公司', region: '上海', type: '板材轧制', scale: '上市', source: 'demo' },
          { name: '江苏沙钢集团有限公司', region: '江苏张家港', type: '长材轧制', scale: '大型', source: 'demo' },
          { name: '湖南华菱钢铁股份有限公司', region: '湖南湘潭', type: '特种钢材', scale: '上市', source: 'demo' },
          { name: '首钢股份有限公司', region: '北京', type: '冷轧钢材', scale: '上市', source: 'demo' }
        ]
      },
      {
        code: 'FA00700112', name: '机床零部件', count: 26555,
        enterprises: [
          { name: '秦川机床工具集团股份公司', region: '陕西宝鸡', type: '功能部件', scale: '上市', source: 'demo' },
          { name: '武汉华中数控股份有限公司', region: '湖北武汉', type: '数控部件', scale: '上市', source: 'demo' },
          { name: '浙江海德曼智能装备股份有限公司', region: '浙江玉环', type: '主轴刀塔', scale: '上市', source: 'demo' },
          { name: '烟台艾迪精密机械股份有限公司', region: '山东烟台', type: '液压部件', scale: '上市', source: 'demo' }
        ]
      },
      {
        code: 'mccy489', name: '金属铸件', count: 23326,
        enterprises: [
          { name: '中信重工机械股份有限公司', region: '河南洛阳', type: '重型铸件', scale: '上市', source: 'demo' },
          { name: '山东豪迈科技股份有限公司', region: '山东高密', type: '精密铸件', scale: '上市', source: 'demo' },
          { name: '日月重工股份有限公司', region: '浙江宁波', type: '风电铸件', scale: '上市', source: 'demo' },
          { name: '大连华锐重工集团股份有限公司', region: '辽宁大连', type: '铸锻件', scale: '上市', source: 'demo' }
        ]
      },
      {
        code: 'MM0020010313', name: '铜材', count: 29261,
        enterprises: [
          { name: '江西铜业股份有限公司', region: '江西南昌', type: '铜冶炼', scale: '上市', source: 'demo' },
          { name: '云南铜业股份有限公司', region: '云南昆明', type: '铜加工', scale: '上市', source: 'demo' },
          { name: '铜陵有色金属集团股份有限公司', region: '安徽铜陵', type: '铜材轧制', scale: '上市', source: 'demo' },
          { name: '海亮股份有限公司', region: '浙江诸暨', type: '铜管棒', scale: '上市', source: 'demo' }
        ]
      },
      {
        code: 'mccy974', name: '数控系统', count: 1991,
        enterprises: [
          { name: '上海柏楚数控科技有限公司', region: '上海闵行', type: '激光数控', scale: '大型', source: 'md' },
          { name: '新代科技（苏州）有限公司', region: '江苏苏州', type: '数控系统', scale: '中型', source: 'md' },
          { name: '武汉华中数控股份有限公司', region: '湖北武汉', type: '国产数控', scale: '上市', source: 'demo' },
          { name: '广州数控设备有限公司', region: '广东广州', type: '数控系统', scale: '大型', source: 'demo' }
        ]
      },
      {
        code: 'FA0070041201', name: '伺服电机', count: 3370,
        enterprises: [
          { name: '深圳市汇川技术股份有限公司', region: '广东深圳', type: '伺服电机', scale: '上市', source: 'demo' },
          { name: '上海鸣志电器股份有限公司', region: '上海', type: '步进伺服', scale: '上市', source: 'demo' },
          { name: '深圳市雷赛智能控制股份有限公司', region: '广东深圳', type: '伺服驱动', scale: '上市', source: 'demo' },
          { name: '江苏雷利电机股份有限公司', region: '江苏常州', type: '微电机', scale: '上市', source: 'demo' }
        ]
      }
    ],
    downstream: [
      {
        code: 'mccy748', name: '其他汽车配件', count: 322046,
        enterprises: [
          { name: '博世华域转向系统有限公司', region: '上海', type: '转向系统', scale: '合资', source: 'demo' },
          { name: '采埃孚汽车零部件有限公司', region: '上海', type: '底盘部件', scale: '外资', source: 'demo' },
          { name: '宁波华翔电子股份有限公司', region: '浙江宁波', type: '内外饰件', scale: '上市', source: 'demo' },
          { name: '拓普集团股份有限公司', region: '浙江宁波', type: '底盘减震', scale: '上市', source: 'demo' }
        ]
      },
      {
        code: 'FA00702001', name: '其他工程机械', count: 80531,
        enterprises: [
          { name: '三一重工股份有限公司', region: '湖南长沙', type: '工程机械', scale: '上市', source: 'demo' },
          { name: '徐工集团工程机械股份有限公司', region: '江苏徐州', type: '工程机械', scale: '上市', source: 'demo' },
          { name: '中联重科股份有限公司', region: '湖南长沙', type: '起重机械', scale: '上市', source: 'demo' },
          { name: '广西柳工机械股份有限公司', region: '广西柳州', type: '装载机', scale: '上市', source: 'demo' }
        ]
      },
      {
        code: 'mcxfhy47526', name: '汽车及汽车零部件再制造', count: 95712,
        enterprises: [
          { name: '格林美股份有限公司', region: '湖北荆门', type: '再制造回收', scale: '上市', source: 'demo' },
          { name: '中再资源环境股份有限公司', region: '北京', type: '资源再生', scale: '央企', source: 'demo' },
          { name: '骆驼集团股份有限公司', region: '湖北襄阳', type: '电池再制造', scale: '上市', source: 'demo' },
          { name: '安徽中鼎密封件股份有限公司', region: '安徽宁国', type: '零部件再制造', scale: '上市', source: 'demo' }
        ]
      },
      {
        code: 'HA007', name: '消费电子产品', count: 54347,
        enterprises: [
          { name: '歌尔股份有限公司', region: '山东潍坊', type: '声学器件', scale: '上市', source: 'demo' },
          { name: '立讯精密工业股份有限公司', region: '广东东莞', type: '电子组装', scale: '上市', source: 'demo' },
          { name: '蓝思科技股份有限公司', region: '湖南浏阳', type: '玻璃盖板', scale: '上市', source: 'demo' },
          { name: '闻泰科技股份有限公司', region: '浙江嘉兴', type: 'ODM制造', scale: '上市', source: 'demo' }
        ]
      },
      {
        code: 'mccy497', name: '模具', count: 32270,
        enterprises: [
          { name: '昌红科技股份有限公司', region: '广东深圳', type: '精密模具', scale: '上市', source: 'demo' },
          { name: '海尔模具（青岛）有限公司', region: '山东青岛', type: '家电模具', scale: '大型', source: 'demo' },
          { name: '宁波震裕科技股份有限公司', region: '浙江宁波', type: '电机模具', scale: '上市', source: 'demo' },
          { name: '深圳市银宝山新科技股份有限公司', region: '广东深圳', type: '汽车模具', scale: '上市', source: 'demo' }
        ]
      }
    ],
    source: '帆软产业大数据平台',
    reportDate: '2026-07-10'
  }
};
