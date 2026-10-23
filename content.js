// 研究内容与教师介绍根据公开主页整理；学生身份、研究方向由团队确认。
// 论文主题、署名与日期已核对；完整英文原文摘要见publication-abstracts.json。
window.GSFP_CONTENT = {
  faculty: [
    { name: '陈建义', role: '教授 · 博士生导师', institution: '中国石油大学（北京）', photo: './assets/members/chen-jianyi-white.png', description: '主要研究多相流分离技术与装备、流体机械及工程和过程装备智能化，面向石油化工、煤的清洁高效利用与海洋油气开采等领域开展研究。', url: 'https://faculty.cup.edu.cn/chenjianyi/' },
    { name: '宋健斐', role: '教授 · 博士生导师', institution: '中国石油大学（北京）', photo: './assets/members/song-jianfei-white.png', description: '主要研究气固／液分离理论与技术，以及基于数智化的装备性能评价，关注分离装备中的流动特性、颗粒沉积与运行诊断。', url: 'https://faculty.cup.edu.cn/songjianfei/' },
    { name: '严超宇', role: '副教授 · 硕士生导师', institution: '中国石油大学（北京）', photo: './assets/members/yan-chaoyu-white.png', description: '主要研究多相流理论与分离技术、过程装备强化技术和流态化工程，关注气固两相流动、颗粒输运及含油污水处理等问题。', url: 'https://faculty.cup.edu.cn/yanchaoyu/' }
  ],
  students: [
    { name: '杨栗昕', role: '博士研究生', focus: '气固分离；细粉粘附；状态监测与智能诊断', photo: './assets/members/yang-lixin.jpg' },
    { name: '许继文', role: '博士研究生', focus: '气固流态化；污水处理；视觉识别', photo: './assets/members/xu-jiwen.png' },
    { name: '纪沛霄', role: '博士研究生', focus: '气固分离；状态监测与智能诊断', photo: './assets/members/ji-peixiao.jpg' },
    { name: '潘静怡', role: '硕士研究生', focus: '气固分离；状态监测与智能诊断', photo: './assets/members/pan-jingyi.jpg' },
    { name: '张汉恭', role: '硕士研究生', focus: '气固分离；细粉粘附', photo: './assets/members/zhang-hangong.jpg' },
    { name: '袁钦', role: '硕士研究生', focus: '气固流态化；污水处理；视觉识别', photo: './assets/members/yuan-qin.jpg' }
  ],
  alumni: [
    { name: '胡博', role: '硕士毕业生', focus: '气固分离；细粉粘附', photo: './assets/members/hu-bo.jpg', destination: '新南威尔士大学（攻读博士）' }
  ],
  news: [
    {
      slug: 'ajwtf2026-jeju', category: '学术交流', date: '2026-09-20', dateKind: '发布日期',
      title: 'GSFP团队赴韩国济州参加AJWTF2026会议',
      summary: '团队赴第11届亚洲热物理与流体科学联合研讨会，作相关学术报告并与参会学者交流。',
      photo: './assets/news/ajwtf2026-group.webp', photoWidth: 2400, photoHeight: 1600,
      photoAlt: 'AJWTF2026会议与会人员合影，背景屏幕显示会议名称',
      photoCaption: 'AJWTF2026会议合影',
      paragraphs: [
        '2026年9月13–16日，第11届亚洲热物理与流体科学联合研讨会（Asian Joint Workshop on Thermophysics and Fluid Science，AJWTF2026）在韩国济州举行。GSFP团队赴会作相关学术报告，分享研究进展，并与参会学者开展交流。',
        'AJWTF是每两年举办一次的系列学术会议，首届会议于2006年在中国曲阜举行，旨在为亚洲地区热物理与流体科学研究人员提供展示前沿研究、讨论学术问题和开展合作的平台。本届会议由韩国可视化学会（The Korean Society of Visualization）组织。',
        '会议议题涵盖多相流、流动测量与仪器、流动控制、传热传质，以及流体工程中的人工智能与数据驱动方法等方向，设有主旨报告、专题技术交流和海报展示等环节。团队通过报告与讨论，围绕相关研究问题与同行交流，了解热物理与流体科学领域的新进展。'
      ],
      sources: [
        { title: '会议概况', url: 'https://www.ajwtf2026.org/index.php?GP=int/ov' },
        { title: '会议研究议题', url: 'https://ajwtf2026.org/index.php?GP=pro/sci' },
        { title: '会议日程', url: 'https://www.ajwtf2026.org/index.php?GP=pro/pag' }
      ]
    }
  ],
  announcements: [
    {
      slug: 'particle-deposition-removal', date: '2026-09', dateKind: '卷期月份',
      researchTitle: '旋风分离器内颗粒沉积与去除的竞争机制', journal: 'Advanced Powder Technology',
      firstAuthor: '胡博', correspondingAuthor: '陈建义',
      englishTitle: 'Relative magnitudes of particle deposition and removal rates govern deposition patterns in cyclone separators',
      authors: 'Bo Hu, Li-Xin Yang, Yao-Dong Wei, Jian-Yi Chen', citation: '37(9) (2026), 105400',
      doi: '10.1016/j.apt.2026.105400',
      dateNote: '本条按2026年9月卷期月份列示，在线发表日期暂未确认。',
      summary: '通过分步可视化实验区分气流剪切与颗粒冲蚀，揭示细粉沉积层形成和脱落的竞争机制。',
    },
    {
      slug: 'inlet-concentration-pressure-inversion', date: '2026-08-11', dateKind: '在线发表',
      researchTitle: '基于动态压力频域特征的旋风分离器入口浓度反演', journal: 'Powder Technology',
      firstAuthor: '杨栗昕', correspondingAuthor: '陈建义',
      englishTitle: 'Inversion calculation of inlet concentration in cyclone separators based on the frequency domain characteristics of dynamic pressure in the vortex finder',
      authors: 'Li-Xin Yang, Jing-Yi Pan, Han-Gong Zhang, Bo Hu, Jian-Yi Chen', citation: '485, Part 1 (2027), 123100',
      doi: '10.1016/j.powtec.2026.123100',
      dateNote: '论文于2026年8月11日在线发表，编入2027年卷期；公告按在线发表日期排序。',
      summary: '将排气管内压力信号与顶部灰环周期性脱落关联，建立入口颗粒浓度的间接监测方法。',
    },
    {
      slug: 'interstage-particles-dipleg-discharge', date: '2026-08-09', dateKind: '在线发表',
      researchTitle: '级间引入A类颗粒强化二级旋风分离器料腿排料', journal: 'Journal of Environmental Chemical Engineering',
      firstAuthor: '杨栗昕', correspondingAuthor: '陈建义',
      englishTitle: 'Enhancing second-stage dipleg discharge in series cyclones via interstage introduction of Geldart Group A particles',
      authors: 'Li-Xin Yang, Jian-Yi Chen, Han-Gong Zhang, Kang-Shuai Liu, Yao-Dong Wei', citation: '14(5) (2026), 124536',
      doi: '10.1016/j.jece.2026.124536',
      summary: '通过级间引入Geldart A类颗粒，抑制C类细粉在二级料腿内黏附，并开展台架与中试验证。',
    },
    {
      slug: 'high-inlet-velocity-flow-field', date: '2026-07-05', dateKind: '在线发表',
      researchTitle: '高入口气速下旋风分离器内部流场的稳定性', journal: 'Powder Technology',
      firstAuthor: '杨栗昕', correspondingAuthor: '陈建义',
      englishTitle: 'Numerical investigation on the internal flow field characteristics of a cyclone separator under highly elevated inlet velocities',
      authors: 'Li-Xin Yang, Jing-Yi Pan, Han-Gong Zhang, Bo Hu, Jian-Yi Chen', citation: '484 (2026), 122903',
      doi: '10.1016/j.powtec.2026.122903',
      summary: '数值研究20–50 m/s入口气速下的旋流结构、短路流及涡核摆动，评估高气速强化分离的流场基础。',
    },
    {
      slug: 'map-net-separation-efficiency', date: '2026-04-15', dateKind: '在线发表',
      researchTitle: '融合物理约束与多层注意力的旋风分离效率预测', journal: 'Particuology',
      firstAuthor: '杨栗昕', correspondingAuthor: '陈建义',
      englishTitle: 'MAP-Net: A multi-layer attention physics-informed network for accurate prediction of cyclone separation efficiency',
      authors: 'Lixin Yang, Peixiao Ji, Jianyi Chen', citation: '114 (2026), 130–140',
      doi: '10.1016/j.partic.2026.04.003',
      summary: '提出MAP-Net，将物理约束与多层特征注意力嵌入神经网络，提高旋风分离效率预测的准确性与物理一致性。',
    },
    {
      slug: 'fine-particle-swirling-deposition', date: '2026-02-24', dateKind: '在线发表',
      researchTitle: '旋风分离器旋流中细颗粒输运与沉积规律', journal: 'Advanced Powder Technology',
      firstAuthor: '胡博', correspondingAuthor: '陈建义',
      englishTitle: 'Experimental study on fine particle transport and deposition processes in the swirling flow of a cyclone separator',
      authors: 'Bo Hu, Jian-Yi Chen, Li-Xin Yang, Xiao-Jian Wu, Yao-Dong Wei', citation: '37(3) (2026), 105213',
      doi: '10.1016/j.apt.2026.105213',
      summary: '通过透明旋风分离器实验识别四种细粉沉积形态，建立临界去除气速模型与颗粒运动分区图。',
    },
    {
      slug: 'group-c-dipleg-flow-adhesion', date: '2025-11-15', dateKind: '在线发表',
      researchTitle: 'Geldart C类颗粒在旋风分离器料腿中的流动与黏附', journal: 'Chemical Engineering Journal',
      firstAuthor: '杨栗昕', correspondingAuthor: '陈建义',
      englishTitle: 'The flow and adhesion of Geldart Group C particles in the dipleg of cyclone separators',
      authors: 'Li-Xin Yang, Jian-Yi Chen, Han-Gong Zhang, Bo Hu, Kang-Shuai Liu, Jian-Jun Zhu, Yao-Dong Wei', citation: '526 (2025), 170833',
      doi: '10.1016/j.cej.2025.170833',
      summary: '结合高速摄影与黏附形貌印迹，揭示C类细粉料腿内的流动分区与黏附规律，预测易黏附区域。',
    }
  ]
};
window.GSFP_CONTENT.announcements.forEach(item => {
  item.title = `${item.journal}-${item.researchTitle}`;
  item.href = `./announcements/${item.slug}.html`;
  item.url = `https://doi.org/${item.doi}`;
});
window.GSFP_CONTENT.news.forEach(item => { item.href = `./news/${item.slug}.html`; });
