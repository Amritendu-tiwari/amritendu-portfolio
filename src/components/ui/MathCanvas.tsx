import { useEffect, useRef } from 'react'

const SYMBOLS = [
  'Sigma(W*X)', 'dL/dW', 'd/dx', 'sigma(z)', 'Softmax', 'ReLU',
  'GPT-4', 'LoRA', 'PEFT', 'Grad(L)', 'e^x', 'ln(x)',
  'P(y|x)', 'W^T*x+b', 'tanh(z)', 'KL(P||Q)',
  'ArgMax', 'Lambda=0.01', 'BLEU', 'F1-Score',
  'Integral', 'Mean+Std', 'y=f(x)', 'cos(theta)', 'RAG',
  'Tokens', 'Embeddings', 'Attention', 'FFN', 'LayerNorm',
  '2^10', 'O(n^2)', 'R^n', 'LLM', 'Batch',
  'Epoch', 'lr=3e-4', 'dim=768', 'Alpha*Beta',
  'Logits', 'Theta*', 'y_hat', 'Loss(y,y_hat)',
  'CrossEntropy', 'Backprop', 'GradDesc', 'Adam',
  'Dropout', 'BatchNorm', 'ResNet', 'Transformer',
  'Q*K^T/sqrt(d)', 'MultiHead', 'Encoder', 'Decoder',
]

interface Particle {
  x: number; y: number; vx: number; vy: number
  symbol: string; opacity: number; size: number
  color: string; rotation: number; rotSpeed: number
}

const COLORS = [
  'rgba(232,160,32,',
  'rgba(99,102,241,',
  'rgba(16,185,129,',
  'rgba(239,68,68,',
  'rgba(59,130,246,',
  'rgba(168,85,247,',
]

export default function MathCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!

    let W = window.innerWidth
    let H = window.innerHeight
    canvas.width = W
    canvas.height = H

    const count = Math.min(90, Math.floor((W * H) / 12000))
    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
      opacity: 0.07 + Math.random() * 0.15,
      size: 10 + Math.random() * 12,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.006,
    }))

    let ray = { x: 0, y: 0, angle: 0, length: 0, opacity: 0, active: false }
    let rayTimer = 0
    let raf: number

    function spawnRay() {
      const edge = Math.floor(Math.random() * 4)
      if (edge === 0) { ray.x = Math.random() * W; ray.y = 0 }
      else if (edge === 1) { ray.x = W; ray.y = Math.random() * H }
      else if (edge === 2) { ray.x = Math.random() * W; ray.y = H }
      else { ray.x = 0; ray.y = Math.random() * H }
      ray.angle = Math.atan2(H / 2 - ray.y, W / 2 - ray.x) + (Math.random() - 0.5) * 1.0
      ray.length = 0
      ray.opacity = 0.5
      ray.active = true
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)

      // Grid
      ctx.strokeStyle = 'rgba(232,160,32,0.025)'
      ctx.lineWidth = 1
      for (let x = 0; x < W; x += 80) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke()
      }
      for (let y = 0; y < H; y += 80) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke()
      }

      // Ray
      rayTimer++
      if (rayTimer > 200 && !ray.active) { spawnRay(); rayTimer = 0 }
      if (ray.active) {
        ray.length += 16
        ray.opacity -= 0.006
        if (ray.opacity <= 0) { ray.active = false }
        else {
          const ex = ray.x + Math.cos(ray.angle) * ray.length
          const ey = ray.y + Math.sin(ray.angle) * ray.length
          const grad = ctx.createLinearGradient(ray.x, ray.y, ex, ey)
          grad.addColorStop(0, 'rgba(232,160,32,0)')
          grad.addColorStop(0.6, `rgba(232,160,32,${ray.opacity * 0.3})`)
          grad.addColorStop(1, `rgba(232,160,32,${ray.opacity})`)
          ctx.beginPath(); ctx.moveTo(ray.x, ray.y); ctx.lineTo(ex, ey)
          ctx.strokeStyle = grad; ctx.lineWidth = 1.5; ctx.stroke()
          ctx.beginPath(); ctx.arc(ex, ey, 2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(232,160,32,${ray.opacity})`; ctx.fill()
        }
      }

      // Particles
      particles.forEach(p => {
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rotation)
        ctx.font = `${p.size}px 'JetBrains Mono', monospace`
        ctx.fillStyle = `${p.color}${p.opacity})`
        ctx.fillText(p.symbol, 0, 0)
        ctx.restore()
        p.x += p.vx; p.y += p.vy; p.rotation += p.rotSpeed
        if (p.x < -80) p.x = W + 80
        if (p.x > W + 80) p.x = -80
        if (p.y < -80) p.y = H + 80
        if (p.y > H + 80) p.y = -80
      })

      raf = requestAnimationFrame(draw)
    }

    draw()

    const onResize = () => {
      W = window.innerWidth; H = window.innerHeight
      canvas.width = W; canvas.height = H
    }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [])

  // FIXED position — covers entire page always, behind everything
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
