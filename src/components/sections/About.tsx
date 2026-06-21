import { techPhoto } from '../../data/images'
import { site, achievements, education } from '../../data/site'
import SectionLabel from '../ui/SectionLabel'
import { useInView } from '../../hooks/useInView'

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" ref={ref as React.RefObject<HTMLElement>} className="py-24 px-6" style={{backgroundColor:"rgba(10,10,15,0.85)"}}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Photo — clean, no overlay text */}
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              {/* Offset border frame — signature design element */}
              <div className="absolute -inset-3 border border-amber/20 rounded-sm pointer-events-none z-0" />
              <div className="absolute -inset-1 border border-border rounded-sm pointer-events-none z-0" />
              <img
                src={techPhoto}
                alt="Amritendu Tiwari — AI Engineer"
                className="relative z-10 w-full rounded-sm object-cover"
                style={{ maxHeight: '560px', objectPosition: 'top' }}
              />
            </div>

            {/* Caption below photo — never on top of it */}
            <div className="mt-4 flex items-center justify-between px-1">
              <div>
                <div className="font-serif-display text-cream text-lg">{site.name}</div>
                <div className="font-mono-code text-xs text-muted mt-0.5">{site.title} · {site.location}</div>
              </div>
              <div className="font-mono-code text-xs text-muted/50 text-right">
                {education.degree}<br />
                <span className="text-amber/70">{education.school.split(',')[0]}</span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className={`transition-all duration-700 delay-150 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <SectionLabel>About</SectionLabel>
            <h2 className="font-serif-display text-4xl md:text-5xl text-cream leading-tight mb-8">
              AI systems that<br />move the needle.
            </h2>

            <div className="space-y-4 mb-10">
              {site.bio.map((p, i) => (
                <p key={i} className="text-cream-2/80 leading-relaxed">{p}</p>
              ))}
            </div>

            {/* Achievements */}
            <div className="space-y-3 mb-10">
              {achievements.map((a, i) => (
                <div key={i} className="flex gap-3 text-sm text-muted">
                  <span className="text-amber mt-0.5 flex-shrink-0">→</span>
                  <span>{a}</span>
                </div>
              ))}
            </div>

            {/* Education card */}
            <div className="border border-border rounded-sm p-5 bg-ink-2">
              <div className="font-mono-code text-xs text-amber uppercase tracking-wider mb-2">Education</div>
              <div className="font-serif-display text-cream text-xl">{education.degree}</div>
              <div className="text-muted text-sm mt-1">{education.school}</div>
              <div className="flex items-center gap-4 mt-3 font-mono-code text-xs text-muted">
                <span>{education.period}</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-4 mt-8">
              <a href={site.social.github} target="_blank" rel="noopener noreferrer"
                 className="font-mono-code text-xs text-muted hover:text-amber transition-colors flex items-center gap-1.5 border border-border px-4 py-2 rounded-sm hover:border-amber">
                GitHub ↗
              </a>
              <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer"
                 className="font-mono-code text-xs text-muted hover:text-amber transition-colors flex items-center gap-1.5 border border-border px-4 py-2 rounded-sm hover:border-amber">
                LinkedIn ↗
              </a>
              <a href={site.resumeUrl} target="_blank" rel="noopener noreferrer"
                 className="font-mono-code text-xs text-amber border border-amber px-4 py-2 rounded-sm hover:bg-amber hover:text-ink transition-all">
                Resume ↗
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
