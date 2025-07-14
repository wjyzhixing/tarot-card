/**
 * 塔罗牌全套数据（大阿尔卡那22张+小阿尔卡那56张）
 * 每张牌包含：编号、中文名、英文名、唯一symbol、正位解读、逆位解读
 * symbol全部唯一，便于Canvas区分
 */
const tarotCards = [
  // 大阿尔卡那 Major Arcana（使用独特Unicode符号）
  { number: 0, name: "愚者", en: "The Fool", symbol: "🃏", upright: "新的开始、冒险、自由、天真。", reversed: "鲁莽、缺乏计划、逃避现实。" },
  { number: 1, name: "魔术师", en: "The Magician", symbol: "✨", upright: "创造力、主动、掌控、资源整合。", reversed: "欺骗、机会错失、能力未发挥。" },
  { number: 2, name: "女祭司", en: "The High Priestess", symbol: "🌙", upright: "直觉、神秘、潜意识、智慧。", reversed: "秘密、疏离、误解、表面现象。" },
  { number: 3, name: "女皇", en: "The Empress", symbol: "👑", upright: "丰饶、母性、创造、舒适。", reversed: "依赖、创造力受阻、情感冷漠。" },
  { number: 4, name: "皇帝", en: "The Emperor", symbol: "🦁", upright: "权威、结构、稳定、领导力。", reversed: "专制、固执、控制欲、失序。" },
  { number: 5, name: "教皇", en: "The Hierophant", symbol: "⛪", upright: "传统、信仰、教育、精神导师。", reversed: "僵化、叛逆、误导、伪善。" },
  { number: 6, name: "恋人", en: "The Lovers", symbol: "💞", upright: "爱情、选择、和谐、亲密关系。", reversed: "分歧、诱惑、优柔寡断。" },
  { number: 7, name: "战车", en: "The Chariot", symbol: "🚗", upright: "胜利、意志力、掌控、前进。", reversed: "失控、失败、方向迷失。" },
  { number: 8, name: "力量", en: "Strength", symbol: "💪", upright: "勇气、耐心、内在力量、同情。", reversed: "软弱、冲动、缺乏自信。" },
  { number: 9, name: "隐士", en: "The Hermit", symbol: "🏮", upright: "内省、独处、智慧、指引。", reversed: "孤立、逃避、迷失方向。" },
  { number: 10, name: "命运之轮", en: "Wheel of Fortune", symbol: "🎡", upright: "转机、机遇、命运、周期变化。", reversed: "阻碍、厄运、停滞。" },
  { number: 11, name: "正义", en: "Justice", symbol: "⚖️", upright: "公平、法律、因果、平衡。", reversed: "不公、偏见、逃避责任。" },
  { number: 12, name: "倒吊人", en: "The Hanged Man", symbol: "🪢", upright: "暂停、牺牲、换位思考、觉悟。", reversed: "僵局、拖延、无谓牺牲。" },
  { number: 13, name: "死神", en: "Death", symbol: "💀", upright: "结束、转变、重生、释放。", reversed: "抗拒变化、停滞、害怕失去。" },
  { number: 14, name: "节制", en: "Temperance", symbol: "🏺", upright: "平衡、节制、疗愈、融合。", reversed: "失衡、极端、浪费。" },
  { number: 15, name: "恶魔", en: "The Devil", symbol: "😈", upright: "诱惑、束缚、欲望、物质。", reversed: "解脱、觉醒、挣脱束缚。" },
  { number: 16, name: "高塔", en: "The Tower", symbol: "🌩️", upright: "突变、崩溃、觉醒、冲击。", reversed: "避免灾难、内在动荡。" },
  { number: 17, name: "星星", en: "The Star", symbol: "⭐", upright: "希望、灵感、治愈、信念。", reversed: "失望、迷茫、缺乏信心。" },
  { number: 18, name: "月亮", en: "The Moon", symbol: "🌕", upright: "潜意识、幻象、直觉、梦境。", reversed: "困惑、欺骗、恐惧。" },
  { number: 19, name: "太阳", en: "The Sun", symbol: "🌞", upright: "成功、快乐、活力、成长。", reversed: "延迟、自负、短暂的快乐。" },
  { number: 20, name: "审判", en: "Judgement", symbol: "🎺", upright: "觉醒、复苏、反思、救赎。", reversed: "自我怀疑、逃避、未觉醒。" },
  { number: 21, name: "世界", en: "The World", symbol: "🌍", upright: "完成、成就、圆满、旅行。", reversed: "未完成、停滞、缺乏闭环。" },

  // 小阿尔卡那 Wands（♣）Ace~King
  { number: 22, name: "权杖一", en: "Ace of Wands", symbol: "♣A", upright: "新机会、热情、灵感、行动力。", reversed: "延迟、动力不足、机会错失。" },
  { number: 23, name: "权杖二", en: "Two of Wands", symbol: "♣2", upright: "规划、远见、探索、选择。", reversed: "犹豫、害怕冒险、计划受阻。" },
  { number: 24, name: "权杖三", en: "Three of Wands", symbol: "♣3", upright: "扩展、合作、远景、进展。", reversed: "延误、机会流失、缺乏远见。" },
  { number: 25, name: "权杖四", en: "Four of Wands", symbol: "♣4", upright: "庆祝、家庭、成就、归属感。", reversed: "不安、家庭纷争、推迟庆祝。" },
  { number: 26, name: "权杖五", en: "Five of Wands", symbol: "♣5", upright: "竞争、冲突、挑战、讨论。", reversed: "避免冲突、内耗、合作失败。" },
  { number: 27, name: "权杖六", en: "Six of Wands", symbol: "♣6", upright: "胜利、认可、成就、鼓励。", reversed: "失败、被忽视、虚荣心。" },
  { number: 28, name: "权杖七", en: "Seven of Wands", symbol: "♣7", upright: "防御、坚持、挑战、立场坚定。", reversed: "防线崩溃、妥协、压力过大。" },
  { number: 29, name: "权杖八", en: "Eight of Wands", symbol: "♣8", upright: "快速进展、消息、旅行、变化。", reversed: "延迟、混乱、信息阻塞。" },
  { number: 30, name: "权杖九", en: "Nine of Wands", symbol: "♣9", upright: "坚韧、警惕、坚持到底、经验。", reversed: "疲惫、放弃、防备过度。" },
  { number: 31, name: "权杖十", en: "Ten of Wands", symbol: "♣10", upright: "重担、压力、责任、负荷。", reversed: "卸下重担、逃避责任、压力释放。" },
  { number: 32, name: "权杖侍者", en: "Page of Wands", symbol: "♣P", upright: "探索、热情、冒险、消息。", reversed: "冲动、缺乏方向、消息延误。" },
  { number: 33, name: "权杖骑士", en: "Knight of Wands", symbol: "♣N", upright: "行动、冒险、激情、能量。", reversed: "鲁莽、冲动、缺乏耐心。" },
  { number: 34, name: "权杖皇后", en: "Queen of Wands", symbol: "♣Q", upright: "自信、魅力、独立、热情。", reversed: "嫉妒、易怒、控制欲。" },
  { number: 35, name: "权杖国王", en: "King of Wands", symbol: "♣K", upright: "领导力、远见、激励、果断。", reversed: "专断、冲动、缺乏耐心。" },

  // 圣杯（♥）Ace~King
  { number: 36, name: "圣杯一", en: "Ace of Cups", symbol: "♥A", upright: "情感新生、灵感、幸福、疗愈。", reversed: "情感受阻、冷漠、失落。" },
  { number: 37, name: "圣杯二", en: "Two of Cups", symbol: "♥2", upright: "伙伴、爱情、和谐、合作。", reversed: "分离、误解、关系紧张。" },
  { number: 38, name: "圣杯三", en: "Three of Cups", symbol: "♥3", upright: "庆祝、友谊、团聚、支持。", reversed: "孤立、流言、友情破裂。" },
  { number: 39, name: "圣杯四", en: "Four of Cups", symbol: "♥4", upright: "沉思、厌倦、反思、机会。", reversed: "觉醒、主动、重新出发。" },
  { number: 40, name: "圣杯五", en: "Five of Cups", symbol: "♥5", upright: "失落、遗憾、悲伤、专注于失去。", reversed: "释怀、希望、重新振作。" },
  { number: 41, name: "圣杯六", en: "Six of Cups", symbol: "♥6", upright: "回忆、童年、怀旧、善意。", reversed: "沉溺过去、幼稚、逃避现实。" },
  { number: 42, name: "圣杯七", en: "Seven of Cups", symbol: "♥7", upright: "幻想、选择、诱惑、机会。", reversed: "混乱、优柔寡断、现实。" },
  { number: 43, name: "圣杯八", en: "Eight of Cups", symbol: "♥8", upright: "放弃、追寻、转身、成长。", reversed: "逃避、犹豫、不愿离开。" },
  { number: 44, name: "圣杯九", en: "Nine of Cups", symbol: "♥9", upright: "满足、愿望实现、幸福、享受。", reversed: "贪婪、不满、空虚。" },
  { number: 45, name: "圣杯十", en: "Ten of Cups", symbol: "♥10", upright: "家庭幸福、和谐、圆满、喜悦。", reversed: "家庭不和、失落、幻灭。" },
  { number: 46, name: "圣杯侍者", en: "Page of Cups", symbol: "♥P", upright: "灵感、好奇、情感表达、消息。", reversed: "情绪不稳、幼稚、消息延误。" },
  { number: 47, name: "圣杯骑士", en: "Knight of Cups", symbol: "♥N", upright: "浪漫、追求、理想主义、邀请。", reversed: "不切实际、情感波动、逃避。" },
  { number: 48, name: "圣杯皇后", en: "Queen of Cups", symbol: "♥Q", upright: "关怀、直觉、同理心、温柔。", reversed: "情绪化、敏感、逃避现实。" },
  { number: 49, name: "圣杯国王", en: "King of Cups", symbol: "♥K", upright: "情感成熟、智慧、包容、平衡。", reversed: "情感压抑、冷漠、操控。" },

  // 宝剑（♠）Ace~King
  { number: 50, name: "宝剑一", en: "Ace of Swords", symbol: "♠A", upright: "新思路、真相、决断、胜利。", reversed: "混乱、误解、决策失误。" },
  { number: 51, name: "宝剑二", en: "Two of Swords", symbol: "♠2", upright: "抉择、平衡、犹豫、僵局。", reversed: "决断、混乱、信息不全。" },
  { number: 52, name: "宝剑三", en: "Three of Swords", symbol: "♠3", upright: "心碎、痛苦、分离、失望。", reversed: "疗愈、释怀、恢复。" },
  { number: 53, name: "宝剑四", en: "Four of Swords", symbol: "♠4", upright: "休息、恢复、静养、反思。", reversed: "焦虑、无法休息、压力。" },
  { number: 54, name: "宝剑五", en: "Five of Swords", symbol: "♠5", upright: "冲突、胜负、牺牲、争执。", reversed: "和解、宽恕、避免争端。" },
  { number: 55, name: "宝剑六", en: "Six of Swords", symbol: "♠6", upright: "过渡、离开、疗愈、改变。", reversed: "停滞、无法前行、困境。" },
  { number: 56, name: "宝剑七", en: "Seven of Swords", symbol: "♠7", upright: "策略、隐瞒、机智、独立。", reversed: "暴露、坦白、失策。" },
  { number: 57, name: "宝剑八", en: "Eight of Swords", symbol: "♠8", upright: "束缚、受限、无助、困境。", reversed: "解脱、重获自由、突破。" },
  { number: 58, name: "宝剑九", en: "Nine of Swords", symbol: "♠9", upright: "焦虑、噩梦、担忧、压力。", reversed: "释怀、希望、恢复。" },
  { number: 59, name: "宝剑十", en: "Ten of Swords", symbol: "♠10", upright: "结束、背叛、失败、痛苦。", reversed: "重生、恢复、希望。" },
  { number: 60, name: "宝剑侍者", en: "Page of Swords", symbol: "♠P", upright: "好奇、警觉、消息、学习。", reversed: "流言、冲动、消息误传。" },
  { number: 61, name: "宝剑骑士", en: "Knight of Swords", symbol: "♠N", upright: "果断、冲刺、行动、勇气。", reversed: "鲁莽、冲动、缺乏耐心。" },
  { number: 62, name: "宝剑皇后", en: "Queen of Swords", symbol: "♠Q", upright: "理性、独立、智慧、坦率。", reversed: "冷漠、刻薄、孤立。" },
  { number: 63, name: "宝剑国王", en: "King of Swords", symbol: "♠K", upright: "权威、理性、公正、决断。", reversed: "专断、冷酷、偏见。" },

  // 钱币（♦）Ace~King
  { number: 64, name: "钱币一", en: "Ace of Pentacles", symbol: "♦A", upright: "财富机会、物质收获、稳定。", reversed: "机会流失、财务不稳。" },
  { number: 65, name: "钱币二", en: "Two of Pentacles", symbol: "♦2", upright: "平衡、灵活、适应、管理。", reversed: "失衡、压力、管理不善。" },
  { number: 66, name: "钱币三", en: "Three of Pentacles", symbol: "♦3", upright: "合作、团队、技能、成果。", reversed: "协作失败、缺乏认可、分歧。" },
  { number: 67, name: "钱币四", en: "Four of Pentacles", symbol: "♦4", upright: "保守、储蓄、控制、稳定。", reversed: "吝啬、失控、损失。" },
  { number: 68, name: "钱币五", en: "Five of Pentacles", symbol: "♦5", upright: "贫困、困难、孤立、缺乏。", reversed: "改善、希望、援助。" },
  { number: 69, name: "钱币六", en: "Six of Pentacles", symbol: "♦6", upright: "施与受、慷慨、平衡、帮助。", reversed: "不公、依赖、吝啬。" },
  { number: 70, name: "钱币七", en: "Seven of Pentacles", symbol: "♦7", upright: "耐心、评估、等待、成长。", reversed: "焦虑、急躁、收获延迟。" },
  { number: 71, name: "钱币八", en: "Eight of Pentacles", symbol: "♦8", upright: "勤奋、专注、学习、提升。", reversed: "粗心、缺乏动力、半途而废。" },
  { number: 72, name: "钱币九", en: "Nine of Pentacles", symbol: "♦9", upright: "独立、成就、物质满足、优雅。", reversed: "依赖、失落、物质困扰。" },
  { number: 73, name: "钱币十", en: "Ten of Pentacles", symbol: "♦10", upright: "财富、家族、传承、稳定。", reversed: "家庭纷争、财务问题、失落。" },
  { number: 74, name: "钱币侍者", en: "Page of Pentacles", symbol: "♦P", upright: "学习、机会、成长、实践。", reversed: "懒惰、机会流失、缺乏目标。" },
  { number: 75, name: "钱币骑士", en: "Knight of Pentacles", symbol: "♦N", upright: "踏实、责任、耐心、努力。", reversed: "固执、拖延、缺乏动力。" },
  { number: 76, name: "钱币皇后", en: "Queen of Pentacles", symbol: "♦Q", upright: "关怀、实际、富有、家庭。", reversed: "焦虑、物质困扰、忽略家庭。" },
  { number: 77, name: "钱币国王", en: "King of Pentacles", symbol: "♦K", upright: "财富、稳定、成功、慷慨。", reversed: "贪婪、固执、物质至上。" }
];

export default tarotCards;
