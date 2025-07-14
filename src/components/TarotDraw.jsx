import React, { useState } from "react";
import tarotCards from "../data/tarot";
import TarotCard from "./TarotCard";
import "../styles/tarot.css";
import OpenAI from "openai";
import ReactMarkdown from "react-markdown";

/**
 * TarotDraw 组件
 * 占卜方式选择、抽牌逻辑与结果展示
 */
const drawModes = [
  { key: "single", label: "单张牌" },
  { key: "three", label: "三张牌（过去-现在-未来）" },
  // 后续可扩展更多阵法
];

function getRandomCards(cards, count) {
  // 随机抽取count张牌，且正逆位随机
  const shuffled = [...cards].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map(card => ({
    ...card,
    position: Math.random() > 0.5 ? "正位" : "逆位"
  }));
}

function TarotDraw() {
  const [mode, setMode] = useState("single");
  const [result, setResult] = useState([]);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState("");

  const handleDraw = () => {
    let count = mode === "single" ? 1 : 3;
    setResult(getRandomCards(tarotCards, count));
    setAnalysis("");
  };

  // 分析按钮点击事件
  const handleAnalyze = async () => {
    console.log(result)
    if (!result.length) return;
    setAnalyzing(true);
    setAnalysis("");
    try {
      // 组装 prompt
      const prompt = result.map((card, idx) => {
        let label = mode === "three" ? ["过去", "现在", "未来"][idx] + "：" : "";
        return `${label}${card.name}（${card.position}）：${card.position === "正位" ? card.upright : card.reversed}`;
      }).join("\n");

      // 直接在前端调用 dashscope.aliyuncs.com
      const openai = new OpenAI({
        apiKey: "sk-cda144ad25034700adefd37e20f63011", // TODO: 替换为你的百炼API Key
        baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1",
        dangerouslyAllowBrowser: true
      });

      const completion = await openai.chat.completions.create({
        model: "qwen-turbo",
        messages: [
          { role: "system", content: "你是专业的塔罗牌解读师，请结合牌意和用户问题，给出详细分析和建议。" },
          { role: "user", content: `请根据以下塔罗牌抽取结果，结合牌意进行详细分析和建议：\n${prompt}` }
        ],
      });

      // 兼容不同返回结构
      let text = "";
      if (completion.choices && completion.choices[0]?.message?.content) {
        text = completion.choices[0].message.content;
      } else if (completion.result) {
        text = completion.result;
      }
      setAnalysis(text || "未获取到分析结果");
    } catch (e) {
      console.log(e)
      setAnalysis("分析失败，请稍后重试。");
    }
    setAnalyzing(false);
  };

  return (
    <div className="tarot-main">
      <h2 className="tarot-title">塔罗牌占卜</h2>
      <div className="tarot-mode">
        <span>选择占卜方式：</span>
        {drawModes.map(m => (
          <label key={m.key}>
            <input
              type="radio"
              name="drawMode"
              value={m.key}
              checked={mode === m.key}
              onChange={() => setMode(m.key)}
            />
            {m.label}
          </label>
        ))}
      </div>
      <button className="tarot-draw-btn" onClick={handleDraw}>
        抽牌
      </button>
      <button
        className="tarot-draw-btn"
        style={{ background: "#3b7ed0", marginBottom: 24 }}
        onClick={handleAnalyze}
        disabled={analyzing || !result.length}
      >
        {analyzing ? "分析中..." : "分析"}
      </button>
      <div className="tarot-cards-row">
        {result.map((card, idx) => (
          <div key={card.number} className="tarot-card-wrap">
            <TarotCard
              name={card.name}
              number={card.number}
              position={card.position}
              symbol={card.symbol}
            />
            <div className="tarot-card-desc">
              <b>{card.name}</b>（{card.position}）<br />
              {card.position === "正位" ? card.upright : card.reversed}
            </div>
            {mode === "three" && (
              <div className="tarot-card-label">
                {["过去", "现在", "未来"][idx]}
              </div>
            )}
          </div>
        ))}
      </div>
      {analysis && (
        <div className="tarot-analysis">
          <div className="tarot-analysis-title">智能分析：</div>
          <ReactMarkdown>{analysis}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}

export default TarotDraw;
