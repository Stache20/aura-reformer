import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Nimm Kontakt mit Aura Reformer auf — per E-Mail oder Telefon. Wir freuen uns von dir zu hören.',
}

export default function Kontakt() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Wir freuen uns von dir zu hören."
        subtitle="Hast du Fragen zu unseren Angeboten oder möchtest du einfach Hallo sagen? Meld dich gerne bei uns."
      />

      <section className="section-py">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* ── Contact details ─────────────────────── */}
            <AnimateOnScroll>
              <p className="text-accent text-[11px] tracking-[0.3em] uppercase mb-8">Erreichbarkeit</p>

              <div className="space-y-8 mb-10">
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-muted mb-2">Adresse</p>
                  <a
                    href="https://maps.app.goo.gl/kCMaAyq8vTjrt8xr8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="not-italic text-sm text-ink hover:text-accent transition-colors leading-relaxed"
                  >
                    <p>Gewerbepark BWB 3</p>
                    <p>83052 Bruckmühl</p>
                  </a>
                </div>

                <div>
                  <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-muted mb-2">Telefon</p>
                  <a
                    href="tel:+4917213666666"
                    className="text-sm text-ink hover:text-accent transition-colors"
                  >
                    0172 136 6666
                  </a>
                </div>

                <div>
                  <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-muted mb-2">Öffnungszeiten</p>
                  <p className="text-sm text-ink leading-relaxed">Mo – Fr: 07:00 – 20:00 Uhr</p>
                  <p className="text-sm text-ink leading-relaxed">Sa: 09:00 – 15:00 Uhr</p>
                </div>

                <div>
                  <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-muted mb-3">Folge uns</p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2.5 text-sm text-ink hover:text-accent transition-colors"
                    aria-label="Aura Reformer auf Instagram"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                    </svg>
                    @aurareformer
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl border border-border overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=Gewerbepark+BWB+3,+83052+Bruckm%C3%BChl&output=embed"
                  width="100%"
                  height="220"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Aura Reformer Standort"
                />
                <a
                  href="https://maps.app.goo.gl/kCMaAyq8vTjrt8xr8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-3 bg-surface text-xs text-accent hover:text-accent-dark transition-colors"
                >
                  In Google Maps öffnen →
                </a>
              </div>
            </AnimateOnScroll>

            {/* ── Email CTA ───────────────────────────── */}
            <AnimateOnScroll delay={100}>
              <p className="text-accent text-[11px] tracking-[0.3em] uppercase mb-8">Schreib uns</p>

              <div className="bg-surface rounded-2xl border border-border p-8 lg:p-10">
                <h2 className="font-display font-light text-3xl text-ink leading-tight mb-3">
                  Melde dich bei uns.
                </h2>
                <p className="text-muted text-sm leading-relaxed mb-8">
                  Schreib uns eine E-Mail – wir freuen uns von dir zu hören und melden uns so schnell wie möglich zurück.
                </p>

                <a
                  href="mailto:Info@aurareformer.de?subject=Anfrage%20Aura%20Reformer"
                  className="inline-flex w-full items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-full text-sm tracking-wide hover:bg-accent-dark transition-colors duration-300"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M2 7l10 7 10-7" />
                  </svg>
                  E-Mail schreiben
                </a>

                <p className="text-center text-muted text-xs mt-4">
                  Info@aurareformer.de
                </p>
              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </section>
    </>
  )
}
