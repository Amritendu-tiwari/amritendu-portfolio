import { techPhoto } from '../../data/images'
import { site, education } from '../../data/site'
import SectionLabel from '../ui/SectionLabel'
import { useInView } from '../../hooks/useInView'

const WHAT_I_DO = [
  { icon: '🧠', title: 'LLM Fine-Tuning',     desc: 'LoRA · PEFT · 4-bit quantization · Flash Attention 2. Squeeze maximum performance from minimum GPU.' },
  { icon: '🔍', title: 'RAG Architecture',     desc: 'LangChain · ChromaDB · OpenAI embeddings. 92k+ chunks indexed. Field teams query docs in natural language.' },
  { icon: '⚙️', title: 'AI Systems Engineering', desc: 'End-to-end pipelines from WhatsApp input to structured ledger output. RBAC. Session isolation. Zero data leaks.' },
  { icon: '🚀', title: 'Production Deployment', desc: 'Dockerized CI/CD · Vercel · Supabase. Every system I build goes live. Not a demo. Not a notebook.' },
]

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-6 md:px-16 lg:px-24"
      style={{ background: 'rgba(7,7,15,0.96)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Photo */}
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2" style={{ borderColor: '#00FFD1' }} />
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2" style={{ borderColor: '#BF00FF' }} />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2" style={{ borderColor: '#BF00FF' }} />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2" style={{ borderColor: '#00FFD1' }} />
              <img src={techPhoto} alt="Amritendu Tiwari — AI Systems Engineer"
                className="w-full rounded-sm object-cover"
                style={{ maxHeight: '500px', objectPosition: 'top', border: '1px solid rgba(0,255,209,0.08)' }} />
              <div className="absolute inset-0 rounded-sm pointer-events-none"
                style={{ background: 'linear-gradient(to bottom, transparent 55%, rgba(7,7,15,0.7) 100%)' }} />
            </div>
            <div className="mt-5 px-1">
              <div className="font-display font-bold text-light text-lg" style={{ fontFamily: 'Syne' }}>{site.name}</div>
              <div className="font-mono text-xs mt-1" style={{ fontFamily: 'JetBrains Mono', color: '#00FFD1' }}>
                AI Systems Engineer · LLM Engineer · RAG Architect
              </div>
              <div className="font-mono text-xs mt-1" style={{ fontFamily: 'JetBrains Mono', color: '#2A2A3E' }}>
                {education.school.split(',')[0]} · {site.location}
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className={`transition-all duration-700 delay-150 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <SectionLabel color="cyan">Who I Am</SectionLabel>
            <h2 className="font-display font-bold text-light leading-tight mb-6"
              style={{ fontFamily: 'Syne', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)' }}>
              I engineer AI systems.<br />
              <span className="neon-cyan">They ship. They scale. They stick.</span>
            </h2>

            <div className="space-y-4 mb-10 text-base leading-relaxed" style={{ color: '#6A6A8A' }}>
              <p>Not a researcher publishing papers. Not a junior dev prompting ChatGPT. I'm an AI Systems Engineer who takes an LLM problem from whiteboard to production — and measures success in percentages and rupees.</p>
              <p>At Bhargava Negotium, I built AI-native platforms for accounting and audit firms. At Bobble AI, I fine-tuned Gemma3-4B under GPU constraints and shipped it. At Sonalika, I turned 5GB of noisy sensor data into decisions.</p>
              <p className="neon-cyan font-semibold">Every system I build is live. Every metric I quote is real.</p>
            </div>

            {/* What I do grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {WHAT_I_DO.map((w, i) => (
                <div key={i} className="rounded-sm p-4 border"
                  style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(0,255,209,0.08)' }}>
                  <div className="text-lg mb-1">{w.icon}</div>
                  <div className="font-mono text-xs mb-1" style={{ fontFamily: 'JetBrains Mono', color: '#00FFD1' }}>{w.title}</div>
                  <div className="text-xs leading-relaxed" style={{ color: '#4A4A6A' }}>{w.desc}</div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="rounded-sm p-4 border mb-8"
              style={{ background: 'rgba(0,255,209,0.02)', borderColor: 'rgba(0,255,209,0.08)' }}>
              <div className="font-mono text-xs uppercase tracking-wider mb-1" style={{ fontFamily: 'JetBrains Mono', color: '#00FFD1' }}>Education</div>
              <div className="font-display font-bold text-light" style={{ fontFamily: 'Syne' }}>{education.degree}</div>
              <div className="text-sm mt-0.5" style={{ color: '#4A4A6A' }}>{education.school} · {education.period}</div>
            </div>

            {/* Links */}
            <div className="flex gap-3 flex-wrap">
              {[
                { label: 'GitHub ↗',   href: site.social.github,  c: '#00FFD1' },
                { label: 'LinkedIn ↗', href: site.social.linkedin, c: '#BF00FF' },
                { label: 'Resume ↗',   href: site.resumeUrl,       c: '#FF6B00', solid: true },
              ].map(l => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                  className="font-mono text-xs px-4 py-2 rounded-sm border tracking-widest uppercase transition-all hover:scale-105"
                  style={{
                    fontFamily: 'JetBrains Mono',
                    color: l.solid ? '#020207' : l.c,
                    borderColor: l.c + '44',
                    background: l.solid ? l.c : l.c + '0A',
                    fontWeight: l.solid ? 700 : 400,
                  }}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}