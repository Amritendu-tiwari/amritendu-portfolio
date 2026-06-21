import { useTypewriter } from '../../hooks/useTypewriter'
import { site } from '../../data/site'

export default function Hero() {
  const typed = useTypewriter(site.taglines, 75, 1800)

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 relative overflow-hidden">

      {/* Radial vignette — darkens edges so hero text pops over canvas */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 75% 70% at 50% 50%, transparent 0%, rgba(10,10,15,0.82) 100%)',
        }}
      />

      {/* All content */}
      <div className="relative z-10 flex flex-col items-center text-center">

        {/* Status badge */}
        <div className="flex items-center gap-2 mb-8 font-mono-code text-xs text-emerald-400 bg-emerald-400/8 border border-emerald-400/20 px-4 py-2 rounded-full backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
          Available for new opportunities · {site.location}
        </div>

        {/* Typewriter */}
        <div className="font-mono-code text-sm text-muted tracking-[0.2em] uppercase mb-4 h-5">
          {typed}<span className="cursor-blink text-amber">|</span>
        </div>

        {/* Name in CAPS */}
        <div className="font-mono-code text-xs tracking-[0.5em] text-amber/80 uppercase mb-4">
          AMRITENDU TIWARI
        </div>

        {/* Main headline */}
        <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl text-cream text-center leading-[1.05] mb-8 max-w-4xl">
          Build AI that<br />
          <em className="text-amber not-italic">actually works.</em>
        </h1>

        {/* Sub quotes */}
        <div className="max-w-xl text-center space-y-3 mb-12">
          <p className="text-lg text-cream/80 font-light">A well-tuned pipeline feels different.</p>
          <p className="text-base text-muted leading-relaxed">
            Built for production — shaped by real financial data, real Hinglish text, real GPU constraints.
            From WhatsApp to ledger entries in milliseconds.
          </p>
          <p className="text-lg text-cream/80 font-light">You can feel the difference.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 pt-10 border-t border-border/50 w-full max-w-2xl">
          {site.stats.map(s => (
            <div key={s.label} className="text-center">
              <div className="font-serif-display text-3xl text-amber">{s.value}</div>
              <div className="font-mono-code text-xs text-muted uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 justify-center">
          <a href="#chat"
            className="px-6 py-3 bg-amber text-ink font-mono-code text-sm font-bold rounded-sm hover:bg-amber-light transition-colors">
            💬 Ask My AI
          </a>
          <a href="#experience"
            className="px-6 py-3 border border-border text-cream font-mono-code text-sm rounded-sm hover:border-cream/50 transition-colors backdrop-blur-sm">
            View Work ↓
          </a>
          <a href={site.social.github} target="_blank" rel="noopener noreferrer"
            className="px-6 py-3 border border-border text-muted font-mono-code text-sm rounded-sm hover:border-amber hover:text-amber transition-colors backdrop-blur-sm">
            GitHub ↗
          </a>
          <a href={site.resumeUrl} target="_blank" rel="noopener noreferrer"
            className="px-6 py-3 border border-amber/60 text-amber font-mono-code text-sm rounded-sm hover:bg-amber hover:text-ink transition-colors backdrop-blur-sm">
            Resume ↗
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-25">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-amber to-transparent animate-pulse" />
      </div>
    </section>
  )
}
