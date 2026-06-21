import { skills } from '../../data/site'
import SectionLabel from '../ui/SectionLabel'
import { useInView } from '../../hooks/useInView'

const allSkills = skills.flatMap(g => g.items)

export default function Skills() {
  const { ref, inView } = useInView()

  return (
    <section id="skills" ref={ref as React.RefObject<HTMLElement>} className="py-24" style={{backgroundColor:"rgba(13,13,26,0.88)"}}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <SectionLabel>Skills</SectionLabel>
          <h2 className="font-serif-display text-4xl md:text-5xl text-cream mb-4">Tech arsenal.</h2>
          <p className="text-muted text-base max-w-xl mb-16 leading-relaxed">
            From LLM fine-tuning to production dashboards — full-stack AI/ML engineering.
          </p>
        </div>

        {/* Skill groups grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {skills.map((group, idx) => (
            <div
              key={group.category}
              className={`border border-border bg-ink rounded-sm p-5 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className="font-mono-code text-xs text-amber uppercase tracking-wider mb-4">
                {group.category}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map(item => (
                  <span
                    key={item}
                    className="font-mono-code text-xs px-2.5 py-1 bg-ink-2 border border-border text-cream/80 rounded-sm hover:border-amber/50 hover:text-amber transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee strip — full bleed */}
      <div className="overflow-hidden border-y border-border py-4">
        <div className="marquee-track flex gap-8 whitespace-nowrap w-max">
          {[...allSkills, ...allSkills].map((s, i) => (
            <span key={i} className="font-mono-code text-xs text-muted/60 uppercase tracking-widest">
              {s} <span className="text-amber/40 mx-2">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
