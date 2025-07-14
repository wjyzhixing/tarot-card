import React from "react";
import "./App.css";
import TarotDraw from "./components/TarotDraw";
import "./styles/tarot.css";

/**
 * App主入口
 * 集成塔罗牌占卜核心功能
 */
function App() {
  return (
    <div>
      <TarotDraw />
    </div>
  );
}

export default App;
