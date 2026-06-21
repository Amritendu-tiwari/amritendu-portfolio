import { site } from '../../data/site'
import SectionLabel from '../ui/SectionLabel'
import { useInView } from '../../hooks/useInView'

export default function Contact() {
  const { ref, inView } = useInView()

  return (
    <section id="contact" ref={ref as React.RefObject<HTMLElement>} className="py-24 px-6" style={{backgroundColor:"rgba(10,10,15,0.85)"}}>
      <div className="max-w-3xl mx-auto text-center">
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="font-serif-display text-4xl md:text-6xl text-cream mb-6 leading-tight">
            Got an interesting<br />
            <em className="text-amber not-italic">problem?</em>
          </h2>
          <p className="text-muted text-lg mb-12 leading-relaxed">
            I'm always open to conversations about AI engineering, LLM systems, and production automation — especially the kind that don't have an obvious answer yet.
          </p>

          {/* Primary CTA */}
          <a
            href={`mailto:${site.email}`}
            className="inline-block font-mono-code text-base text-ink bg-amber px-10 py-4 rounded-sm hover:bg-amber-light transition-colors font-bold mb-12"
          >
            {site.email} →
          </a>

          {/* All links — no call option */}
          <div className="grid grid-cols-3 gap-4 mb-12 max-w-md mx-auto w-full">
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border rounded-sm py-4 text-center font-mono-code text-xs text-muted hover:border-amber hover:text-amber transition-all"
            >
              LinkedIn ↗
            </a>
            <a
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border rounded-sm py-4 text-center font-mono-code text-xs text-muted hover:border-amber hover:text-amber transition-all"
            >
              GitHub ↗
            </a>
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-amber rounded-sm py-4 text-center font-mono-code text-xs text-amber hover:bg-amber hover:text-ink transition-all"
            >
              Resume ↗
            </a>
          </div>

          <p className="font-mono-code text-xs text-muted/40">
            New Delhi, India · Open to remote · Available now
          </p>
        </div>
      </div>
    </section>
  )
}
