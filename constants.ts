
import { Mentor, StudentCase, ProcessStep } from './types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "量身定制学业与医学路径规划",
    description: "从医学与心理学方向的系统诊断开始，把“想学医”真正变成可落地的录取路径。我们同步探究能力特征与职业倾向，反推选校选专业。"
  },
  {
    number: "02",
    title: "医学/心理学文书共创",
    description: "由对应学科背景导师直接参与多轮打磨。拒绝模板，构建“学术动机—专业理解—职业发展目标”三条核心主线。"
  },
  {
    number: "03",
    title: "全程多v1 申请管控",
    description: "拆解材料准备、网申、面试、结果追踪等每一个关键节点。明确负责人与时间要求，提升投递有效性。"
  },
  {
    number: "04",
    title: "质量与透明是底线",
    description: "拒绝“交给机构就失联”。全过程进度透明、版本可追溯、逻辑可解释，把不确定性转化为可控节奏。"
  },
  {
    number: "05",
    title: "留学后端支持",
    description: "不止拿到 offer。入学后持续跟进学业进展，提供学业辅导与实习规划，协助签证及行前准备。"
  }
];

export const MENTORS: Mentor[] = [
  {
    name: "皋老师",
    title: "英国G5高校博士生导师 | 公共卫生与医学科研专家",
    specialties: ["公共卫生、医学、大数据及临床试验科研指导", "高阶科研设计与论文提升", "本硕博毕业论文规划"]
  },
  {
    name: "Mabel 老师",
    title: "新加坡国立大学老师 | 卡迪夫大学心理学博士 | 欧洲脑影像中心首席研究员",
    specialties: ["英联邦体系本硕博整体规划", "心理学、神经科学及脑影像方向", "学术研究能力与背景系统提升"]
  },
  {
    name: "Annie 老师",
    title: "英国医学院硕士生导师 | 多年海外大学医学教学经验",
    specialties: ["本硕博论文辅导与科研方法训练", "国际期刊论文写作与投稿指导", "医学及相关方向申请规划"]
  },
  {
    name: "Cyan 老师",
    title: "伦敦大学学院认知神经科学博士 | 实验室负责人",
    specialties: ["认知神经科学、心理学及交叉学科", "博士阶段科研定位与课题设计", "学术研究能力与实验方向规划"]
  },
  {
    name: "Eddy 老师",
    title: "澳洲前50大学流行病学博士 | 全额奖学金获得者",
    specialties: ["医学与公共卫生博士全奖规划", "套磁信、研究计划与面试辅导", "研究思维系统训练"]
  },
  {
    name: "Luna 老师",
    title: "香港大学公共卫生学院流行病学博士",
    specialties: ["香港地区硕博申请整体规划", "公共卫生与流行病学发展设计", "学术研究与长期路径规划"]
  }
];

export const STUDENT_CASES: StudentCase[] = [
  {
    name: "陈同学",
    background: "A-Level: 4A* | 申请方向: 临床医学",
    offers: ["香港大学 医学院 (MBBS)", "UCL 临床医学", "KCL 临床医学"]
  },
  {
    name: "刘同学",
    background: "A-Level: 2A*+2A | 申请方向: 牙医学",
    offers: ["伯明翰大学 牙医学", "曼彻斯特大学 牙医学"]
  },
  {
    name: "周同学",
    background: "A-Level: AAA | 申请方向: 医学相关专业",
    offers: ["KCL 生物医学科学", "UCL 医学相关理学方向"]
  },
  {
    name: "李同学",
    background: "英国本科 · 人口健康 (均分 68)",
    offers: ["帝国理工 公共卫生", "香港大学 公共卫生", "哈佛大学 公共卫生", "耶鲁大学 公共卫生"]
  },
  {
    name: "张同学",
    background: "西交利物浦大学 · 经济学 (均分 86)",
    offers: ["香港中文大学 公共卫生", "耶鲁大学 公共卫生", "约翰霍普金斯 全球健康经济学"]
  },
  {
    name: "刘同学",
    background: "985/211 · 临床药学 (均分 83)",
    offers: ["新加坡国立大学 精准医学", "香港大学 医学科学"]
  },
  {
    name: "王同学",
    background: "985 本科 + 海外硕士 | 公共卫生方向",
    offers: ["英国帝国理工 全奖博士 (PhD) 公共卫生"]
  },
  {
    name: "张同学",
    background: "211 基础医学本科 + 澳洲硕士",
    offers: ["荷兰岗位制博士 全球健康方向"]
  },
  {
    name: "赵同学",
    background: "临床医学相关专业 | 科研方向: 流病",
    offers: ["辅导后发表 SCI 3 区期刊论文"]
  },
  {
    name: "林同学",
    background: "生物医学专业 | 科研方向: 转化医学",
    offers: ["辅导后发表 SCI 4 区期刊论文"]
  }
];
