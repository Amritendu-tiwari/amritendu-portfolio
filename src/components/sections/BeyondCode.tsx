import { travelPhoto } from '../../data/images'
import SectionLabel from '../ui/SectionLabel'
import { useInView } from '../../hooks/useInView'

const hobbies = [
  { icon: '🏔️', label: 'Himalayan Treks' },
  { icon: '🏍️', label: 'Motorcycle Roads' },
  { icon: '📷', label: 'Travel Photography' },
  { icon: '🌄', label: 'Solo Adventures' },
  { icon: '🗺️', label: 'Off-the-Grid' },
]

export default function BeyondCode() {
  const { ref, inView } = useInView()

  return (
    <section id="beyond" ref={ref as React.RefObject<HTMLElement>} className="py-24 px-6" style={{backgroundColor:"rgba(10,10,15,0.85)"}}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Text first on mobile, second on desktop */}
          <div
            className={`order-2 lg:order-1 transition-all duration-700 delay-150 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <SectionLabel>Beyond Code</SectionLabel>
            <h2 className="font-serif-display text-4xl md:text-5xl text-cream leading-tight mb-8">
              I debug code.<br />
              <em className="text-amber not-italic">Mountains debug me.</em>
            </h2>

            <div className="space-y-4 mb-10 text-cream-2/80 leading-relaxed">
              <p>
                When I'm not engineering AI pipelines, I'm out on the road — motorcycle routes through the Himalayas, solo treks to remote valleys, disappearing into places where there's no Wi-Fi signal. Only mountain air.
              </p>
              <p>
                Gangotri was one of those places. Standing where the Ganges begins, surrounded by nothing but snow peaks and silence, you remember that the most elegant systems aren't made of code.
              </p>
              <p>
                Travel sharpens the same skills that make good engineers — patience, adaptability, navigating uncertainty with incomplete information. The only difference is the scenery.
              </p>
            </div>

            {/* Hobby tags */}
            <div className="flex flex-wrap gap-3">
              {hobbies.map(h => (
                <span
                  key={h.label}
                  className="font-mono-code text-xs border border-border text-muted px-4 py-2 rounded-full hover:border-amber/50 hover:text-amber transition-colors cursor-default"
                >
                  {h.icon} {h.label}
                </span>
              ))}
            </div>
          </div>

          {/* Photo — clean, no text overlay */}
          <div
            className={`order-1 lg:order-2 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="relative">
              {/* Offset frame */}
              <div className="absolute -inset-3 border border-amber/15 rounded-sm pointer-events-none" />
              <div className="absolute -inset-1 border border-border rounded-sm pointer-events-none" />
              <img
                src={travelPhoto}
                alt="Amritendu at Gangotri, Uttarakhand"
                className="relative z-10 w-full rounded-sm object-cover"
                style={{ maxHeight: '600px', objectPosition: 'top' }}
              />
            </div>

            {/* Caption below — never on top of image */}
            <div className="mt-4 px-1">
              <div className="font-serif-display text-2xl text-cream">Gangotri, Uttarakhand</div>
              <div className="font-mono-code text-xs text-muted mt-1 tracking-wider">
                TREK · LIVE · ESCAPE
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
