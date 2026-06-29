import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'

const slides = [
  { src: '/images/Eroeffnungsevent/event-eroeffnungsparty.jpeg', alt: 'Eröffnungsparty – 02. Juli ab 16 Uhr' },
  { src: '/images/Eroeffnungsevent/event-opendoors.jpeg', alt: 'Open Doors – 03.–05. Juli' },
  { src: '/images/Eroeffnungsevent/event-trainingsstart.jpeg', alt: 'Trainingsstart – 06. Juli' },
]

const dates = [
  { label: 'Eröffnungsparty', date: '02. Juli', detail: 'ab 16 Uhr · Snacks · Drinks · Musik' },
  { label: 'Open Doors', date: '03.–05. Juli', detail: 'Fr 15–18 · Sa & So 11–15 Uhr' },
  { label: 'Trainingsstart', date: '06. Juli', detail: 'Ab diesem Tag starten unsere Kurse' },
]

export default function OpeningEventSection() {
  return (
    <section className="section-py bg-surface overflow-hidden">
      <div className="container-wide">
        <AnimateOnScroll className="mb-12 text-center">
          <p className="text-accent text-[11px] tracking-[0.3em] uppercase mb-4">Wir eröffnen</p>
          <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-tight">
            Unsere nächsten
            <br />
            <em className="italic">Events</em>
          </h2>
          <p className="text-muted mt-4 text-base max-w-md mx-auto">
            Feier mit uns den Start von Aura Reformer Studio — komm vorbei, lern uns kennen und erlebe den Reformer live.
          </p>
        </AnimateOnScroll>

        {/* Date cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {dates.map((d, i) => (
            <AnimateOnScroll key={d.label} delay={i * 80}>
              <div className="bg-bg rounded-2xl border border-border p-6 text-center">
                <p className="text-accent text-[10px] tracking-[0.3em] uppercase mb-2">{d.label}</p>
                <p className="font-display font-light text-3xl text-ink mb-1">{d.date}</p>
                <p className="text-muted text-sm">{d.detail}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Photo strip */}
        <AnimateOnScroll delay={120}>
          <div className="grid grid-cols-3 gap-3 rounded-2xl overflow-hidden">
            {slides.map((s) => (
              <div key={s.src} className="relative" style={{ aspectRatio: '1/1' }}>
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 33vw, 400px"
                />
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
