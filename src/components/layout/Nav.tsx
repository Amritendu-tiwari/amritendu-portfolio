import { useState, useEffect } from 'react'
import { site } from '../../data/site'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Life', href: '#beyond' },
  { label: 'Chat', href: '#chat' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="font-mono-code text-sm text-amber font-medium tracking-wide">
          <span className="text-muted">~/</span>Amritendu
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono-code text-xs text-muted hover:text-cream transition-colors tracking-wider uppercase"
            >
              {l.label}
            </a>
          ))}
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-code text-xs px-4 py-2 border border-amber text-amber hover:bg-amber hover:text-ink transition-all rounded-sm tracking-wider"
          >
            Resume ↗
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-cream transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-cream transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-cream transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-ink-2 border-b border-border px-6 py-6 flex flex-col gap-4">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-mono-code text-sm text-muted hover:text-cream transition-colors uppercase tracking-wider"
            >
              {l.label}
            </a>
          ))}
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-code text-sm text-amber border border-amber px-4 py-2 text-center rounded-sm mt-2"
          >
            Resume ↗
          </a>
        </div>
      )}
    </header>
  )
}
