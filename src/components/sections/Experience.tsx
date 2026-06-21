import { experience } from '../../data/site'
import SectionLabel from '../ui/SectionLabel'
import { useInView } from '../../hooks/useInView'

export default function Experience() {
  const { ref, inView } = useInView()

  return (
    <section id="experience" ref={ref as React.RefObject<HTMLElement>} className="py-24 px-6" style={{backgroundColor:"rgba(13,13,26,0.88)"}}>
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <SectionLabel>Experience</SectionLabel>
          <h2 className="font-serif-display text-4xl md:text-5xl text-cream mb-4">Where I've built.</h2>
          <p className="text-muted text-base max-w-xl mb-16 leading-relaxed">
            Production AI at a fintech CA firm, LLM inference at a consumer AI startup, and analytics at India's largest tractor manufacturer.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 border-l border-border space-y-16">
          {experience.map((exp, idx) => (
            <div
              key={exp.id}
              className={`relative transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[1.45rem] top-1.5 w-2.5 h-2.5 rounded-full bg-amber ring-4 ring-ink-2" />

              <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                <div>
                  {exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-serif-display text-2xl text-cream hover:text-amber transition-colors"
                    >
                      {exp.company} ↗
                    </a>
                  ) : (
                    <span className="font-serif-display text-2xl text-cream">{exp.company}</span>
                  )}
                </div>
                <span className="font-mono-code text-xs text-amber bg-amber/8 border border-amber/20 px-3 py-1 rounded-sm">
                  {exp.period}
                </span>
              </div>

              <div className="font-mono-code text-sm text-muted mb-5">
                {exp.role} · {exp.type} · {exp.location}
              </div>

              <ul className="space-y-3 mb-5">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 text-cream-2/80 text-sm leading-relaxed">
                    <span className="text-amber/60 mt-0.5 flex-shrink-0 font-mono-code">▸</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map(t => (
                  <span key={t} className="font-mono-code text-xs px-2.5 py-1 bg-ink border border-border text-muted rounded-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
