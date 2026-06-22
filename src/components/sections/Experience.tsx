import { experience } from '../../data/site'
import SectionLabel from '../ui/SectionLabel'
import { useInView } from '../../hooks/useInView'

const EXP_COLORS = ['#00FFD1', '#BF00FF', '#FF6B00']
const EXP_GLOW   = [
  'rgba(0,255,209,0.8)',
  'rgba(191,0,255,0.8)',
  'rgba(255,107,0,0.8)',
]
const EXP_BORDER = [
  'rgba(0,255,209,0.1)',
  'rgba(191,0,255,0.1)',
  'rgba(255,107,0,0.1)',
]

export default function Experience() {
  const { ref, inView } = useInView()

  return (
    <section id="experience" ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-6 md:px-16 lg:px-24"
      style={{ background: 'rgba(2,2,7,0.98)' }}>
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <SectionLabel color="purple">Work History</SectionLabel>
          <h2 className="font-display font-bold text-light leading-tight mb-4"
            style={{ fontFamily: 'Syne', fontSize: 'clamp(2rem,4vw,3rem)' }}>
            AI shipped to production.<br />
            <span className="neon-purple">Three companies. Real impact.</span>
          </h2>
          <p className="text-base mb-16" style={{ color: '#4A4A6A', maxWidth: '560px' }}>
            Every metric below is real — pulled from prod logs, client feedback, and deployment records.
            Not estimated. Not inflated.
          </p>
        </div>

        <div className="relative pl-6" style={{ borderLeft: '1px solid rgba(0,255,209,0.12)' }}>
          {experience.map((exp, idx) => (
            <div key={exp.id}
              className={`relative mb-14 last:mb-0 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${idx * 120}ms` }}>

              {/* glowing dot */}
              <div className="absolute -left-[1.65rem] top-2 w-3 h-3 rounded-full"
                style={{ background: EXP_COLORS[idx], boxShadow: `0 0 14px ${EXP_GLOW[idx]}` }} />

              <div className="rounded-sm p-6 border transition-all hover:scale-[1.005]"
                style={{ background: 'rgba(255,255,255,0.015)', borderColor: EXP_BORDER[idx] }}>

                <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                  {exp.companyUrl ? (
                    <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer"
                      className="font-display font-bold text-xl text-light hover:underline"
                      style={{ fontFamily: 'Syne' }}>
                      {exp.company} ↗
                    </a>
                  ) : (
                    <span className="font-display font-bold text-xl text-light" style={{ fontFamily: 'Syne' }}>
                      {exp.company}
                    </span>
                  )}
                  <span className="font-mono text-xs px-3 py-1 rounded-sm border"
                    style={{
                      fontFamily: 'JetBrains Mono',
                      color: EXP_COLORS[idx],
                      borderColor: EXP_COLORS[idx] + '33',
                      background: EXP_COLORS[idx] + '08',
                    }}>
                    {exp.period}
                  </span>
                </div>

                <div className="font-mono text-xs mb-5"
                  style={{ fontFamily: 'JetBrains Mono', color: '#4A4A6A' }}>
                  {exp.role} · {exp.type} · {exp.location}
                </div>

                <ul className="space-y-3 mb-5">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: '#6A6A8A' }}>
                      <span className="flex-shrink-0 mt-0.5" style={{ color: EXP_COLORS[idx], opacity: 0.5 }}>▸</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map(t => (
                    <span key={t} className="font-mono text-xs px-2.5 py-1 rounded-sm border"
                      style={{ fontFamily: 'JetBrains Mono', borderColor: 'rgba(255,255,255,0.05)', color: '#4A4A6A', background: 'rgba(255,255,255,0.02)' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}