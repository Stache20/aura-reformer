import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/Hero'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import GiftCardSection from '@/components/GiftCardSection'

export const metadata: Metadata = {
  title: 'Aura Reformer – Premium Reformer Pilates in Bruckmühl',
}

const services = [
  {
    name: 'Pilates Reformer',
    description:
      'Federbassiertes Widerstandstraining für Kraft, Haltung und Beweglichkeit — einzeln oder mit Karte. Wellpass möglich.',
    from: 'Ab 27 €',
    fromNote: 'im Startmonat',
    regular: '29 € Einzeleintritt',
    tag: null,
    href: 'https://meinfitomat.club/studio/Zml0dHk6MTMwMzAzNDA0MA%3D%3D/course',
  },
  {
    name: 'EMS Training',
    description:
      'Elektromuskelstimulation für maximale Wirkung in minimaler Zeit. 1:2 oder 1:3 Training. Body Check & Probetraining ab 20 €.',
    from: 'Ab 22 €',
    fromNote: 'pro Einheit (1:3)',
    regular: '30 € im 1:2 Training',
    tag: null,
    href: 'https://meinfitomat.club/studio/Zml0dHk6MTMwMzAzNDA0MA%3D%3D/appointments',
  },
  {
    name: 'Wellpass',
    description:
      'Wir sind Wellpass-Partner. Komm mit deinem Wellpass zu uns und trainiere mit individueller Zuzahlung.',
    from: 'Zuzahlung',
    fromNote: 'individuell',
    regular: 'Pilates & EMS buchbar',
    tag: 'Partner',
    href: 'https://meinfitomat.club/studio/Zml0dHk6MTMwMzAzNDA0MA%3D%3D/appointments',
  },
]

export default function Home() {
  return (
    <>
      <Hero />

      {/* ── Brand intro ─────────────────────────────── */}
      <section className="section-py">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll>
              <p className="text-accent text-[11px] tracking-[0.3em] uppercase mb-5">Unser Ansatz</p>
              <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-tight">
                Mehr als Training.
                <br />
                <em className="italic">Eine Transformation.</em>
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <p className="text-muted leading-relaxed mb-5">
                Aura Reformer ist mehr als ein Pilates-Studio. Wir bieten dir einen Raum, in dem Körper und Geist in Einklang kommen. Durch gezieltes Reformer-Pilates stärken wir deine Mitte, verbessern deine Haltung und fördern dein ganzheitliches Wohlbefinden — nachhaltig und tiefgreifend.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                Jede Session wird individuell gestaltet — ob Einsteiger oder Fortgeschrittene, ob Rehabilitation oder Hochleistung. Bei uns steht der Mensch im Mittelpunkt.
              </p>
              <Link
                href="/ueber-uns"
                className="link-underline border-ink text-ink hover:text-accent hover:border-accent"
              >
                Unsere Geschichte <span className="text-lg leading-none">→</span>
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── Services preview ────────────────────────── */}
      <section className="section-py bg-surface">
        <div className="container-wide">
          <AnimateOnScroll className="mb-14">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <p className="text-accent text-[11px] tracking-[0.3em] uppercase mb-4">Angebote</p>
                <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-tight">
                  Unsere Leistungen
                </h2>
              </div>
              <Link
                href="/leistungen"
                className="link-underline border-muted text-muted hover:text-ink hover:border-ink shrink-0"
              >
                Alle Leistungen ansehen <span className="text-lg leading-none">→</span>
              </Link>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <AnimateOnScroll key={s.name} delay={i * 80}>
                <article className="bg-bg rounded-2xl border border-border p-8 flex flex-col h-full hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-display font-medium text-2xl text-ink">{s.name}</h3>
                    {s.tag && (
                      <span className="shrink-0 bg-accent/10 text-accent text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full">
                        {s.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-muted text-sm leading-relaxed flex-1 mb-6">{s.description}</p>
                  <div className="pt-6 border-t border-border flex items-end justify-between gap-4">
                    <div>
                      <p className="font-semibold text-ink text-lg">{s.from}</p>
                      <p className="text-muted text-xs mt-0.5">{s.fromNote} · {s.regular}</p>
                    </div>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-xs text-accent border border-accent/40 px-4 py-2 rounded-full hover:bg-accent hover:text-white transition-colors duration-300"
                    >
                      Buchen →
                    </a>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── About teaser ────────────────────────────── */}
      <section className="section-py overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimateOnScroll className="order-2 lg:order-1">
              <p className="text-accent text-[11px] tracking-[0.3em] uppercase mb-5">Über uns</p>
              <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-tight mb-6">
                Gegründet aus
                <br />
                <em className="italic">Leidenschaft</em>
              </h2>
              <p className="text-muted leading-relaxed mb-5">
                Aura Reformer entstand aus der tiefen Überzeugung, dass jeder Mensch das Recht auf bewusstes, freudvolles Bewegen hat. Unser Studio in Bruckmühl ist ein Ort der Ruhe, Stärke und Transformation.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                Unsere zertifizierten Instructorinnen begleiten dich mit Fachkompetenz und Herzlichkeit — auf jedem Level, in jeder Phase deines Lebens.
              </p>
              <Link
                href="/ueber-uns"
                className="link-underline border-ink text-ink hover:text-accent hover:border-accent"
              >
                Mehr über uns <span className="text-lg leading-none">→</span>
              </Link>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100} className="order-1 lg:order-2">
              <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: '4/5' }}>
                <Image
                  src="/images/BeidePhoto.jpeg"
                  alt="Daniela und Petra – Aura Reformer Team"
                  fill
                  className="object-cover photo-filter"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── Gift cards ──────────────────────────────── */}
      <GiftCardSection />

      {/* ── Booking CTA ─────────────────────────────── */}
      <section className="section-py bg-ink text-white">
        <div className="container-narrow text-center">
          <AnimateOnScroll>
            <p className="text-accent text-[11px] tracking-[0.3em] uppercase mb-5">Bereit loszulegen?</p>
            <h2 className="font-display font-light text-4xl lg:text-6xl leading-tight mb-6">
              Deine erste Session
              <br />
              <em className="italic">wartet auf dich.</em>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed max-w-lg mx-auto mb-10">
              Buch deinen Termin jetzt online — unkompliziert, schnell und flexibel.
            </p>
            <a
              href="https://meinfitomat.club/studio/Zml0dHk6MTMwMzAzNDA0MA%3D%3D/course"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-accent text-white px-10 py-4 rounded-full text-sm tracking-wide hover:bg-accent-dark transition-colors duration-300"
            >
              Jetzt buchen
            </a>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
