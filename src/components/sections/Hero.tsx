import { useEffect, useState, useRef } from 'react'
import { site } from '../../data/site'

const BOOT_LINES = [
  { text: '> SYSTEM BOOT — AMRITENDU_OS v3.1', delay: 0,    color: '#2A2A3E' },
  { text: '> CORE: AI_SYSTEMS_ENGINEER........[LOADED]',    delay: 350,  color: '#00FFD1' },
  { text: '> MODULE: LLM_FINETUNING............[ACTIVE]',   delay: 650,  color: '#00FFD1' },
  { text: '> MODULE: RAG_ARCHITECT..............[ACTIVE]',  delay: 900,  color: '#00FFD1' },
  { text: '> MODULE: PRODUCTION_DEPLOY..........[LIVE]',    delay: 1150, color: '#BF00FF' },
  { text: '> MODULE: LANGCHAIN_STACK............[ONLINE]',  delay: 1350, color: '#BF00FF' },
  { text: '> FINAXIS_AI · INVOICE_GEN · WHATSAPP_BOT · GEMMA3_FINETUNE', delay: 1550, color: '#FF6B00' },
  { text: '> STATUS: ALL SYSTEMS OPERATIONAL — READY TO SHIP', delay: 1750, color: '#00FFD1' },
]

const ROLES = [
  'AI Systems Engineer',
  'LLM Fine-Tuner',
  'RAG Architect',
  'Full-Stack AI Builder',
  'Production AI Engineer',
]

const METRICS = [
  { val: '~65%', label: 'Data Entry Reduction', color: '#00FFD1' },
  { val: '~35%', label: 'LLM Inference Gain',   color: '#BF00FF' },
  { val: '~70%', label: 'Editing Time Cut',      color: '#FF6B00' },
  { val: '200+', label: 'Students Mentored',     color: '#00FFD1' },
]

export default function Hero() {
  const [bootLines, setBootLines] = useState<number[]>([])
  const [showMain,   setShowMain]   = useState(false)
  const [showSub,    setShowSub]    = useState(false)
  const [showBottom, setShowBottom] = useState(false)
  const [roleIdx, setRoleIdx] = useState(0)
  const [glitch,  setGlitch]  = useState(false)
  const [typed,   setTyped]   = useState('')
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const glitchRef = useRef<ReturnType<typeof setInterval>>()
  const roleRef   = useRef<ReturnType<typeof setInterval>>()

  /* ── boot sequence ── */
  useEffect(() => {
    BOOT_LINES.forEach((l, i) =>
      setTimeout(() => setBootLines(p => [...p, i]), l.delay)
    )
    setTimeout(() => setShowMain(true),   2000)
    setTimeout(() => setShowSub(true),    2400)
    setTimeout(() => setShowBottom(true), 2700)

    glitchRef.current = setInterval(() => {
      if (Math.random() > 0.82) {
        setGlitch(true)
        setTimeout(() => setGlitch(false), 100)
      }
    }, 2500)
    return () => { clearInterval(glitchRef.current); clearInterval(roleRef.current) }
  }, [])

  /* ── typewriter ── */
  useEffect(() => {
    const word = ROLES[roleIdx]
    let t: ReturnType<typeof setTimeout>
    if (!deleting && charIdx < word.length) {
      t = setTimeout(() => setCharIdx(c => c + 1), 70)
    } else if (!deleting && charIdx === word.length) {
      t = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && charIdx > 0) {
      t = setTimeout(() => setCharIdx(c => c - 1), 40)
    } else {
      setDeleting(false)
      setRoleIdx(i => (i + 1) % ROLES.length)
    }
    setTyped(word.slice(0, charIdx))
    return () => clearTimeout(t)
  }, [charIdx, deleting, roleIdx])

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-24 pb-16 overflow-hidden cyber-grid">

      {/* glow blobs */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,255,209,0.05) 0%, transparent 65%)' }} />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(191,0,255,0.06) 0%, transparent 65%)' }} />

      {/* ── terminal boot ── */}
      <div className="mb-10 space-y-1 min-h-[160px]">
        {BOOT_LINES.map((line, i) =>
          bootLines.includes(i) && (
            <div key={i} className="slide-left font-mono text-xs"
              style={{ color: line.color, fontFamily: 'JetBrains Mono', letterSpacing: '0.04em' }}>
              {line.text}
            </div>
          )
        )}
        {bootLines.length < BOOT_LINES.length && (
          <div className="font-mono text-xs" style={{ color: '#2A2A3E', fontFamily: 'JetBrains Mono' }}>
            <span className="cursor">█</span>
          </div>
        )}
      </div>

      {/* ── main identity block ── */}
      <div className={`transition-all duration-1000 ${showMain ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>

        {/* availability + location */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
            <span className="font-mono text-xs tracking-widest uppercase"
              style={{ fontFamily: 'JetBrains Mono', color: '#4A4A6A' }}>
              Available · New Delhi, India
            </span>
          </div>
          <div className="h-3 w-px bg-dim" />
          <span className="font-mono text-xs tracking-widest"
            style={{ fontFamily: 'JetBrains Mono', color: '#2A2A3E' }}>
            2025
          </span>
        </div>

        {/* name */}
        <div className="font-mono text-sm mb-3 tracking-[0.3em] uppercase"
          style={{ fontFamily: 'JetBrains Mono', color: '#2A2A3E' }}>
          AMRITENDU TIWARI
        </div>

        {/* typewriter role */}
        <div className="font-mono text-lg mb-6 h-7"
          style={{ fontFamily: 'JetBrains Mono', color: '#00FFD1' }}>
          {typed}<span className="cursor">_</span>
        </div>

        {/* giant headline */}
        <h1
          className={`leading-[0.85] tracking-tight mb-8 transition-transform duration-75 ${glitch ? 'translate-x-1 skew-x-1' : ''}`}
          style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}
        >
          <span className="block" style={{ fontSize: 'clamp(2.8rem,8vw,8rem)', color: '#E8E8FF' }}>
            Production AI.
          </span>
          <span className="block neon-cyan" style={{ fontSize: 'clamp(2.8rem,8vw,8rem)' }}>
            Not Demos.
          </span>
          <span className="block" style={{
            fontSize: 'clamp(2.8rem,8vw,8rem)',
            color: 'transparent',
            WebkitTextStroke: '1.5px rgba(191,0,255,0.6)',
          }}>
            Not Prototypes.
          </span>
        </h1>

        {/* identity pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            { label: 'AI Systems Engineer', color: '#00FFD1' },
            { label: 'LLM Fine-Tuner',      color: '#BF00FF' },
            { label: 'RAG Architect',        color: '#FF6B00' },
            { label: 'LangChain · GPT-4',   color: '#00FFD1' },
            { label: 'LoRA · PEFT',          color: '#BF00FF' },
            { label: 'Full-Stack AI',        color: '#FF6B00' },
          ].map(p => (
            <span key={p.label}
              className="font-mono text-xs px-3 py-1.5 rounded-sm border"
              style={{
                fontFamily: 'JetBrains Mono',
                color: p.color,
                borderColor: p.color + '33',
                background: p.color + '0A',
              }}>
              {p.label}
            </span>
          ))}
        </div>
      </div>

      {/* ── sub copy ── */}
      <div className={`transition-all duration-700 ${showSub ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-2xl border-l-2 pl-5 mb-10"
          style={{ borderColor: 'rgba(0,255,209,0.35)' }}>
          <p className="text-base leading-relaxed mb-2" style={{ color: '#6A6A8A' }}>
            I don't build toy models. I ship AI that accountants, auditors,
            and fintech teams depend on every single day.
          </p>
          <p className="text-base leading-relaxed" style={{ color: '#9A9AB8' }}>
            WhatsApp pipelines that parse Hinglish. RAG systems with 92k+ indexed chunks.
            LLMs fine-tuned 35% faster under GPU constraints.
            <span className="neon-cyan font-semibold"> Every system I build is live.</span>
          </p>
        </div>
      </div>

      {/* ── bottom bar ── */}
      <div className={`transition-all duration-700 ${showBottom ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        {/* gradient divider */}
        <div className="w-full h-px mb-8"
          style={{ background: 'linear-gradient(to right, rgba(0,255,209,0.4), rgba(191,0,255,0.3), transparent)' }} />

        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-8">

          {/* metrics */}
          <div className="flex flex-wrap gap-8">
            {METRICS.map(m => (
              <div key={m.label}>
                <div className="font-display text-2xl font-bold"
                  style={{ fontFamily: 'Syne', color: m.color, textShadow: `0 0 20px ${m.color}55` }}>
                  {m.val}
                </div>
                <div className="font-mono text-xs mt-0.5 uppercase tracking-wider"
                  style={{ fontFamily: 'JetBrains Mono', color: '#4A4A6A' }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a href="#chat"
              className="px-6 py-3 font-mono text-xs font-bold tracking-widest uppercase rounded-sm transition-all hover:scale-105 hover:brightness-110"
              style={{
                fontFamily: 'JetBrains Mono',
                background: 'linear-gradient(135deg,#00FFD1,#00C4A0)',
                color: '#020207',
                boxShadow: '0 0 30px rgba(0,255,209,0.25)',
              }}>
              💬 Talk to My AI
            </a>
            <a href="#experience"
              className="px-6 py-3 font-mono text-xs tracking-widest uppercase rounded-sm border transition-all hover:scale-105"
              style={{ fontFamily: 'JetBrains Mono', borderColor: 'rgba(0,255,209,0.3)', color: '#00FFD1', background: 'rgba(0,255,209,0.04)' }}>
              View Work ↓
            </a>
            <a href="#projects"
              className="px-6 py-3 font-mono text-xs tracking-widest uppercase rounded-sm border transition-all hover:scale-105"
              style={{ fontFamily: 'JetBrains Mono', borderColor: 'rgba(191,0,255,0.3)', color: '#BF00FF', background: 'rgba(191,0,255,0.04)' }}>
              Projects ↓
            </a>
            <a href={site.resumeUrl} target="_blank" rel="noopener noreferrer"
              className="px-6 py-3 font-mono text-xs tracking-widest uppercase rounded-sm border transition-all hover:scale-105"
              style={{ fontFamily: 'JetBrains Mono', borderColor: 'rgba(255,107,0,0.3)', color: '#FF6B00', background: 'rgba(255,107,0,0.04)' }}>
              Resume ↗
            </a>
            <a href={site.social.github} target="_blank" rel="noopener noreferrer"
              className="px-6 py-3 font-mono text-xs tracking-widest uppercase rounded-sm border transition-all hover:scale-105"
              style={{ fontFamily: 'JetBrains Mono', borderColor: 'rgba(255,255,255,0.08)', color: '#6A6A8A', background: 'rgba(255,255,255,0.02)' }}>
              GitHub ↗
            </a>
          </div>
        </div>

        {/* bottom strip */}
        <div className="mt-8 flex items-center justify-between">
          <div className="font-mono text-xs tracking-[0.25em] uppercase"
            style={{ fontFamily: 'JetBrains Mono', color: '#1A1A2E' }}>
            AI_SYSTEMS · LLM · RAG · FINE-TUNING · PRODUCTION · 2025
          </div>
          <div className="flex gap-4">
            <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer"
              className="font-mono text-xs tracking-widest uppercase transition-colors hover:text-cyan"
              style={{ fontFamily: 'JetBrains Mono', color: '#2A2A3E' }}>LI</a>
            <a href={site.social.github} target="_blank" rel="noopener noreferrer"
              className="font-mono text-xs tracking-widest uppercase transition-colors hover:text-cyan"
              style={{ fontFamily: 'JetBrains Mono', color: '#2A2A3E' }}>GH</a>
          </div>
        </div>
      </div>
    </section>
  )
}