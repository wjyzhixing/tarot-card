import React, { useRef, useEffect } from 'react'

/**
 * TarotCard 组件
 * 用于Canvas绘制单张塔罗牌，复古风格
 * @param {Object} props
 * @param {string} props.name 牌名
 * @param {number} props.number 牌编号
 * @param {string} props.position 正位/逆位
 * @param {string} props.symbol 牌面符号
 * @param {number} props.width 画布宽度
 * @param {number} props.height 画布高度
 */
function TarotCard({
  name = '愚者',
  number = 0,
  position = '正位',
  symbol = '★',
  width = 180,
  height = 300,
}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    // 绘制仿古纸背景
    ctx.clearRect(0, 0, width, height)
    const grad = ctx.createLinearGradient(0, 0, width, height)
    grad.addColorStop(0, '#f5ecd7')
    grad.addColorStop(1, '#d2b48c')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, width, height)

    // 复古边框
    ctx.strokeStyle = '#7c5c36'
    ctx.lineWidth = 6
    ctx.strokeRect(6, 6, width - 12, height - 12)

    // 牌编号
    ctx.font = 'bold 22px serif'
    ctx.fillStyle = '#7c5c36'
    ctx.textAlign = 'left'
    ctx.fillText(number, 18, 38)

    // 牌名
    ctx.font = 'bold 26px serif'
    ctx.textAlign = 'center'
    ctx.fillText(name, width / 2, 60)

    // 牌面符号（如星星、太阳等）
    ctx.font = '60px serif'
    ctx.textAlign = 'center'
    ctx.fillText(symbol, width / 2, height / 2 + 20)

    // 正逆位标记
    ctx.font = 'italic 18px serif'
    ctx.textAlign = 'right'
    ctx.fillText(position, width - 18, height - 24)
  }, [name, number, position, symbol, width, height])

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{
        boxShadow: '0 4px 16px #7c5c36aa',
        borderRadius: '12px',
        background: '#f5ecd7',
        margin: '8px',
        display: 'block',
      }}
    />
  )
}

export default TarotCard
