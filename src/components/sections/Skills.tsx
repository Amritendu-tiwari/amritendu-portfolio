import { skills } from '../../data/site'
import SectionLabel from '../ui/SectionLabel'
import { useInView } from '../../hooks/useInView'

const allSkills = skills.flatMap(g => g.items)
const COLORS = ['#00FFD1','#BF00FF','#FF6B00','#00FFD1','#BF00FF','#FF6B00']

const AI_STACK = [
  { name: 'LangChain',    level: 95, color: '#00FFD1' },
  { name: 'GPT-4 / OpenAI API', level: 92, color: '#00FFD1' },
  { name: 'RAG Pipelines', level: 90, color: '#BF00FF' },
  { name: 'LoRA / PEFT',  level: 88, color: '#BF00FF' },
  { name: 'PyTorch',      level: 82, color: '#FF6B00' },
  { name: 'HuggingFace',  level: 85, color: '#FF6B00' },
]

export default function Skills() {
  const { ref, inView } = useInView()

  return (
    <section id="skills" ref={ref as React.RefObject<HTMLElement>}
      className="py-24"
      style={{ background: 'rgba(2,2,7,0.98)' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24">
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <SectionLabel color="orange">AI Tech Stack</SectionLabel>
          <h2 className="font-display font-bold text-light leading-tight mb-4"
            style={{ fontFamily: 'Syne', fontSize: 'clamp(2rem,4vw,3rem)' }}>
            Tools I use daily.<br />
            <span className="neon-orange">In production. Not tutorials.</span>
          </h2>
          <p className="text-base mb-12" style={{ color: '#4A4A6A', maxWidth: '520px' }}>
            Every skill listed here has shipped to a real client. If I list it, I've used it under pressure.
          </p>
        </div>

        {/* AI proficiency bars */}
        <div className={`mb-14 rounded-sm p-6 border transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ background: 'rgba(0,255,209,0.02)', borderColor: 'rgba(0,255,209,0.08)' }}>
          <div className="font-mono text-xs uppercase tracking-wider mb-6"
            style={{ fontFamily: 'JetBrains Mono', color: '#00FFD1' }}>
            Core AI Proficiency
          </div>
          <div className="space-y-4">
            {AI_STACK.map((s, i) => (
              <div key={s.name}
                className={`transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="flex justify-between mb-1">
                  <span className="font-mono text-xs" style={{ fontFamily: 'JetBrains Mono', color: '#6A6A8A' }}>{s.name}</span>
                  <span className="font-mono text-xs" style={{ fontFamily: 'JetBrains Mono', color: s.color }}>{s.level}%</span>
                </div>
                <div className="h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: inView ? `${s.level}%` : '0%',
                      background: `linear-gradient(to right, ${s.color}, ${s.color}88)`,
                      boxShadow: `0 0 8px ${s.color}44`,
                      transitionDelay: `${i * 100 + 300}ms`,
                    }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full skill grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {skills.map((group, idx) => (
            <div key={group.category}
              className={`rounded-sm p-5 border transition-all duration-700 hover:scale-[1.02] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                transitionDelay: `${idx * 80}ms`,
                background: 'rgba(255,255,255,0.02)',
                borderColor: COLORS[idx] + '1A',
              }}>
              <div className="font-mono text-xs uppercase tracking-wider mb-4"
                style={{ fontFamily: 'JetBrains Mono', color: COLORS[idx] }}>
                {group.category}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map(item => (
                  <span key={item}
                    className="font-mono text-xs px-2.5 py-1 rounded-sm border transition-all hover:scale-105 cursor-default"
                    style={{ fontFamily: 'JetBrains Mono', borderColor: 'rgba(255,255,255,0.06)', color: '#6A6A8A', background: 'rgba(255,255,255,0.02)' }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden py-4 border-y" style={{ borderColor: 'rgba(0,255,209,0.06)' }}>
        <div className="marquee flex gap-8 whitespace-nowrap w-max">
          {[...allSkills, ...allSkills].map((s, i) => (
            <span key={i} className="font-mono text-xs uppercase tracking-widest"
              style={{ fontFamily: 'JetBrains Mono', color: '#1A1A2E' }}>
              {s} <span style={{ color: 'rgba(0,255,209,0.25)', margin: '0 8px' }}>·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}