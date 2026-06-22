import { site } from '../../data/site'
import SectionLabel from '../ui/SectionLabel'
import { useInView } from '../../hooks/useInView'

const OPEN_TO = [
  'AI Systems Engineering roles',
  'LLM fine-tuning & RAG projects',
  'Production AI consulting',
  'Fintech & audit AI platforms',
  'Remote · Hybrid · New Delhi',
]

export default function Contact() {
  const { ref, inView } = useInView()

  return (
    <section id="contact" ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-6 md:px-16 lg:px-24"
      style={{ background: 'rgba(2,2,7,0.98)' }}>
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <SectionLabel color="cyan">Let's Build</SectionLabel>

          <h2 className="font-display font-bold text-light leading-tight mb-6"
            style={{ fontFamily: 'Syne', fontSize: 'clamp(2.5rem,6vw,5rem)' }}>
            Got an AI problem<br />
            <span className="neon-cyan">worth engineering?</span>
          </h2>

          <p className="text-base mb-10 leading-relaxed max-w-xl" style={{ color: '#4A4A6A' }}>
            I'm not looking for just any opportunity. I want to work on AI systems that actually matter —
            where the difference between a good model and a great one is measured in real outcomes.
            If that's you, let's talk.
          </p>

          {/* Open to */}
          <div className="rounded-sm p-6 border mb-10"
            style={{ background: 'rgba(0,255,209,0.02)', borderColor: 'rgba(0,255,209,0.08)' }}>
            <div className="font-mono text-xs uppercase tracking-wider mb-4"
              style={{ fontFamily: 'JetBrains Mono', color: '#00FFD1' }}>
              Open To
            </div>
            <div className="flex flex-wrap gap-3">
              {OPEN_TO.map(o => (
                <span key={o}
                  className="font-mono text-xs px-3 py-1.5 border rounded-sm"
                  style={{ fontFamily: 'JetBrains Mono', borderColor: 'rgba(0,255,209,0.15)', color: '#6A6A8A' }}>
                  ▸ {o}
                </span>
              ))}
            </div>
          </div>

          {/* Email CTA */}
          <a href={`mailto:${site.email}`}
            className="inline-block font-mono text-sm font-bold tracking-widest uppercase px-10 py-4 rounded-sm mb-10 transition-all hover:scale-105 hover:brightness-110"
            style={{
              fontFamily: 'JetBrains Mono',
              background: 'linear-gradient(135deg,#00FFD1,#00C4A0)',
              color: '#020207',
              boxShadow: '0 0 40px rgba(0,255,209,0.18)',
            }}>
            {site.email} →
          </a>

          {/* Links */}
          <div className="flex flex-wrap gap-4 mb-10">
            {[
              { label: 'LinkedIn ↗', href: site.social.linkedin, c: '#00FFD1' },
              { label: 'GitHub ↗',   href: site.social.github,  c: '#BF00FF' },
              { label: 'Resume ↗',   href: site.resumeUrl,       c: '#FF6B00' },
            ].map(l => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                className="font-mono text-xs px-6 py-3 border rounded-sm tracking-widest uppercase transition-all hover:scale-105"
                style={{ fontFamily: 'JetBrains Mono', borderColor: l.c + '33', color: l.c, background: l.c + '08' }}>
                {l.label}
              </a>
            ))}
          </div>

          <p className="font-mono text-xs tracking-widest"
            style={{ fontFamily: 'JetBrains Mono', color: '#1A1A2E' }}>
            NEW DELHI, INDIA · OPEN TO REMOTE · AVAILABLE NOW
          </p>
        </div>
      </div>
    </section>
  )
}