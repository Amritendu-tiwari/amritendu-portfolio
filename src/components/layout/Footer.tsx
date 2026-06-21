import { site } from '../../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-ink-2 px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-serif-display text-2xl text-cream mb-1">Amritendu Tiwari</div>
          <div className="font-mono-code text-xs text-muted">AI Engineer · New Delhi, India</div>
        </div>
        <div className="flex items-center gap-6">
          <a href={site.social.github} target="_blank" rel="noopener noreferrer"
             className="font-mono-code text-xs text-muted hover:text-amber transition-colors uppercase tracking-wider">
            GitHub ↗
          </a>
          <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer"
             className="font-mono-code text-xs text-muted hover:text-amber transition-colors uppercase tracking-wider">
            LinkedIn ↗
          </a>
          <a href={`mailto:${site.email}`}
             className="font-mono-code text-xs text-muted hover:text-amber transition-colors uppercase tracking-wider">
            Email ↗
          </a>
        </div>
        <div className="font-mono-code text-xs text-muted/50 text-center md:text-right">
          © 2025 Amritendu Tiwari<br />
          Built with React + Vite · Open to opportunities
        </div>
      </div>
    </footer>
  )
}
