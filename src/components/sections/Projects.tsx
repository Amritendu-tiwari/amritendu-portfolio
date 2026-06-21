import { projects } from '../../data/site'
import {
  finaxisChatImg,
  invoiceLoginImg,
  dashboardImg,
  finaxisLoginImg,
} from '../../data/projectImages'
import SectionLabel from '../ui/SectionLabel'
import { useInView } from '../../hooks/useInView'

// Map project IDs to real screenshot previews
const PROJECT_SCREENSHOTS: Record<string, string> = {
  'finaxis-chat':    finaxisChatImg,
  'invoice-gen':     invoiceLoginImg,
  'invoice-dash':    dashboardImg,
  'finaxis-login':   finaxisLoginImg,
}

export default function Projects() {
  const { ref, inView } = useInView()

  // Split: Bhargava featured (with screenshots) vs other projects
  const bhargavaProjects = projects.filter(p => p.employer === 'Bhargava Negotium')
  const otherProjects    = projects.filter(p => p.employer !== 'Bhargava Negotium')

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-6"
      style={{ backgroundColor: 'rgba(10,10,15,0.85)' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <SectionLabel>Projects</SectionLabel>
          <h2 className="font-serif-display text-4xl md:text-5xl text-cream mb-4">Things I've built.</h2>
          <p className="text-muted text-base max-w-xl mb-16 leading-relaxed">
            Production-grade AI systems — each one solves a real problem with measurable impact.
          </p>
        </div>

        {/* ── BHARGAVA NEGOTIUM — Featured with real screenshots ── */}
        <div className={`mb-6 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono-code text-xs text-amber uppercase tracking-widest">
              Featured · Bhargava Negotium Limited
            </span>
            <span className="flex-1 h-px bg-border" />
            <span className="font-mono-code text-xs text-muted">Fintech / CA Firm · 2025</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
          {bhargavaProjects.map((p, idx) => (
            <ProjectCard key={p.id} project={p} idx={idx} inView={inView} screenshot={PROJECT_SCREENSHOTS[p.id]} />
          ))}
        </div>

        {/* ── OTHER PROJECTS ── */}
        <div className={`mt-16 mb-6 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono-code text-xs text-muted uppercase tracking-widest">
              Personal & Professional Projects
            </span>
            <span className="flex-1 h-px bg-border" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {otherProjects.map((p, idx) => (
            <ProjectCard key={p.id} project={p} idx={idx + 4} inView={inView} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <a
            href="https://github.com/amritendu-tiwari"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-code text-sm text-muted hover:text-amber transition-colors border border-border hover:border-amber px-8 py-3 rounded-sm inline-block"
          >
            View all repos on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  )
}

// ── Project card component ────────────────────────────────────────────
interface Project {
  id: string; icon: string; name: string; company: string; employer: string
  impact: string; description: string; tags: string[]
  githubUrl: string; liveUrl: string
}

function ProjectCard({
  project: p, idx, inView, screenshot
}: {
  project: Project; idx: number; inView: boolean; screenshot?: string
}) {
  const hasSS = Boolean(screenshot)

  return (
    <div
      className={`group relative rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
        screenshot
          ? 'border-2 border-amber/30 bg-ink-2 hover:border-amber shadow-amber/10 shadow-lg'
          : 'border border-border bg-ink-2 hover:border-amber/50 hover:shadow-amber/5'
      } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${idx * 60}ms` }}
    >
      {/* Screenshot preview — only for projects with real images */}
      {hasSS && (
        <div className="relative w-full overflow-hidden border-b border-border"
             style={{ height: '220px' }}>
          <img
            src={screenshot}
            alt={`${p.name} screenshot`}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors duration-300" />
          {/* Deployed badge — top left */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5 font-mono-code text-xs bg-emerald-500/90 backdrop-blur-sm text-white px-2.5 py-1 rounded-sm font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            DEPLOYED
          </div>
          {/* Built by me badge — top right */}
          <div className="absolute top-3 right-3 font-mono-code text-xs bg-ink/80 backdrop-blur-sm border border-amber/40 text-amber px-2.5 py-1 rounded-sm">
            Built & Shipped ✓
          </div>
        </div>
      )}

      {/* Card body */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <span className="text-xl">{p.icon}</span>
          <span className="font-mono-code text-xs text-muted/50">{p.company}</span>
        </div>

        <h3 className="font-serif-display text-xl text-cream mb-2 group-hover:text-amber transition-colors">
          {p.name}
        </h3>

        <div className="font-mono-code text-xs text-emerald-400 bg-emerald-400/8 border border-emerald-400/15 px-2.5 py-1 rounded-sm inline-block mb-3">
          {p.impact}
        </div>

        <p className="text-muted text-sm leading-relaxed mb-4">{p.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {p.tags.map(t => (
            <span key={t} className="font-mono-code text-xs px-2 py-0.5 bg-ink border border-border text-muted/80 rounded-sm">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-4 border-t border-border">
          {p.githubUrl ? (
            <a href={p.githubUrl} target="_blank" rel="noopener noreferrer"
               className="font-mono-code text-xs text-muted hover:text-amber transition-colors">
              GitHub ↗
            </a>
          ) : (
            <span className="font-mono-code text-xs text-muted/30">Private Repo</span>
          )}
          {p.liveUrl && (
            <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
               className="font-mono-code text-xs text-amber hover:text-amber-light transition-colors">
              Live Demo ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
