import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Termin buchen',
  description:
    'Die Online-Buchung bei Aura Reformer ist bald verfügbar. Bis dahin erreichst du uns per E-Mail oder Telefon.',
}

export default function Buchen() {
  return (
    <>
      <PageHero
        eyebrow="Online buchen"
        title="Dein Termin bei Aura Reformer."
        subtitle="Wähle deine Session, deinen Wunschtermin und buche direkt online — in wenigen Minuten."
      />

      {/* ── Coming Soon ─────────────────────────────── */}
      <section className="section-py">
        <div className="container-narrow text-center">
          <AnimateOnScroll>
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent text-[11px] tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Demnächst verfügbar
            </div>

            <h2 className="font-display font-light text-3xl lg:text-4xl text-ink leading-tight mb-5">
              Online-Buchung kommt bald.
            </h2>
            <p className="text-muted leading-relaxed max-w-md mx-auto mb-12">
              Wir richten gerade unser Buchungssystem für dich ein. In der Zwischenzeit erreichst du uns ganz einfach per E-Mail oder Telefon — wir freuen uns auf dich!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:Info@aurareformer.de?subject=Terminanfrage%20Aura%20Reformer"
                className="inline-flex items-center justify-center bg-accent text-white px-10 py-4 rounded-full text-sm tracking-wide hover:bg-accent-dark transition-colors duration-300"
              >
                Termin per E-Mail anfragen
              </a>
              <a
                href="tel:+4917213666666"
                className="inline-flex items-center justify-center border border-border text-ink px-10 py-4 rounded-full text-sm tracking-wide hover:border-accent hover:text-accent transition-colors duration-300"
              >
                0172 136 6666
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Info block ──────────────────────────────── */}
      <section className="py-16 bg-surface">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimateOnScroll>
              <div className="bg-bg rounded-2xl border border-border p-7">
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
                  <li className="flex gap-2.5">
                    <span className="text-accent shrink-0">→</span>
                    Zahlung wird über Magicline im Rahmen der Buchung abgewickelt.
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={80}>
              <div className="bg-bg rounded-2xl border border-border p-7">
                <h3 className="font-medium text-ink mb-4">Anfahrt</h3>
                <address className="not-italic space-y-2 text-sm text-muted">
                  <p className="font-medium text-ink">Aura Reformer</p>
                  <p>Gewerbepark BWB 3</p>
                  <p>83052 Bruckmühl</p>
                  <div className="pt-2 space-y-1.5">
                    <p>
                      <a
                        href="mailto:Info@aurareformer.de?subject=Aura%20Reformer"
                        className="hover:text-accent transition-colors"
                      >
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
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── Back to home ────────────────────────────── */}
      <section className="py-12 text-center">
        <AnimateOnScroll>
          <Link
            href="/"
            className="text-sm text-muted hover:text-ink transition-colors underline underline-offset-4"
          >
            ← Zurück zur Startseite
          </Link>
        </AnimateOnScroll>
      </section>
    </>
  )
}
