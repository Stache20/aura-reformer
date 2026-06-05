import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Termin buchen',
  description:
    'Jetzt online bei Aura Reformer buchen — Pilates Kurse, persönliche Termine, Pakete und Gutscheine.',
}

const options = [
  {
    label: 'Kurse',
    title: 'Pilates Kurse',
    description: 'Gruppenklassen und Kurse im Reformer Pilates buchen.',
    href: 'https://meinfitomat.club/studio/Zml0dHk6MTMwMzAzNDA0MA%3D%3D/course',
    cta: 'Kurs buchen',
  },
  {
    label: 'Termine',
    title: 'Persönliche Termine',
    description: 'Einzelsessions, EMS Training und Probetermine direkt online buchen.',
    href: 'https://meinfitomat.club/studio/Zml0dHk6MTMwMzAzNDA0MA%3D%3D/appointments',
    cta: 'Termin buchen',
  },
  {
    label: 'Pakete',
    title: 'Pakete & Karten',
    description: '5er Karte, 10er Karte und Sonderangebote — günstig als Paket buchen.',
    href: 'https://meinfitomat.club/studio/Zml0dHk6MTMwMzAzNDA0MA%3D%3D/offers',
    cta: 'Paket wählen',
  },
  {
    label: 'Gutscheine',
    title: 'Geschenkgutscheine',
    description: 'Einen Aura Reformer Gutschein kaufen oder einlösen.',
    href: 'https://meinfitomat.club/studio/Zml0dHk6MTMwMzAzNDA0MA%3D%3D/vouchers',
    cta: 'Gutschein buchen',
  },
]

export default function Buchen() {
  return (
    <>
      <PageHero
        eyebrow="Online buchen"
        title="Dein Termin bei Aura Reformer."
        subtitle="Wähle deine Session, deinen Wunschtermin und buche direkt online — in wenigen Minuten."
      />

      <section className="section-py">
        <div className="container-narrow">
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {options.map((opt, i) => (
              <AnimateOnScroll key={opt.title} delay={i * 70}>
                <div className="bg-bg rounded-2xl border border-border p-8 flex flex-col h-full">
                  <p className="text-accent text-[10px] tracking-[0.25em] uppercase mb-3">{opt.label}</p>
                  <h3 className="font-display text-2xl text-ink mb-3">{opt.title}</h3>
                  <p className="text-muted text-sm leading-relaxed flex-1 mb-6">{opt.description}</p>
                  <a
                    href={opt.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-accent text-white py-3.5 rounded-xl text-sm hover:bg-accent-dark transition-colors duration-300 font-medium"
                  >
                    {opt.cta} →
                  </a>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-surface rounded-2xl border border-border p-7">
                <h3 className="font-medium text-ink mb-4">Wichtige Hinweise</h3>
                <ul className="space-y-3 text-sm text-muted">
                  <li className="flex gap-2.5">
                    <span className="text-accent shrink-0">→</span>
                    Bitte erscheine 5 Minuten vor Beginn deiner Session.
                  </li>
                  <li className="flex gap-2.5">
                    <span className="text-accent shrink-0">→</span>
                    Griffsocken werden empfohlen (sind auch bei uns erhältlich).
                  </li>
                  <li className="flex gap-2.5">
                    <span className="text-accent shrink-0">→</span>
                    Absagen bitte mindestens 24 Stunden im Voraus per E-Mail oder Telefon.
                  </li>
                </ul>
              </div>

              <div className="bg-surface rounded-2xl border border-border p-7">
                <h3 className="font-medium text-ink mb-4">Anfahrt</h3>
                <address className="not-italic space-y-2 text-sm text-muted">
                  <p className="font-medium text-ink">Aura Reformer</p>
                  <p>Gewerbepark BWB 3</p>
                  <p>83052 Bruckmühl</p>
                  <div className="pt-2 space-y-1.5">
                    <p>
                      <a href="mailto:Info@aurareformer.de" className="hover:text-accent transition-colors">
                        Info@aurareformer.de
                      </a>
                    </p>
                    <p>
                      <a href="tel:+4917213666666" className="hover:text-accent transition-colors">
                        0172 136 6666
                      </a>
                    </p>
                  </div>
                </address>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
