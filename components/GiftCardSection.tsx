import AnimateOnScroll from './AnimateOnScroll'

export default function GiftCardSection() {
  return (
    <section id="gutscheine" className="section-py bg-surface">
      <div className="container-wide">
        <AnimateOnScroll className="text-center mb-16">
          <p className="text-accent text-[11px] tracking-[0.3em] uppercase mb-4">Das perfekte Geschenk</p>
          <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-tight">
            Aura Geschenkgutscheine
          </h2>
          <p className="mt-5 text-muted max-w-xl mx-auto leading-relaxed">
            Schenke das Erlebnis von Premium Reformer Pilates. Unsere Gutscheine sind das ideale Geschenk für jeden Anlass.
          </p>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Buy card */}
          <AnimateOnScroll delay={50} className="bg-bg rounded-2xl border border-border p-8 lg:p-10">
            <h3 className="text-xl font-medium text-ink mb-4">Gutschein kaufen</h3>
            <p className="text-muted text-sm leading-relaxed mb-7">
              Gutscheine sind in verschiedenen Werten erhältlich — ab 50 €. Gutscheine werden über unser Buchungssystem bestellt.
            </p>
            <ul className="space-y-3 text-sm text-muted mb-8">
              {['50 €', '100 €', '150 €', '200 €'].map((val) => (
                <li key={val} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  Gutschein im Wert von {val}
                </li>
              ))}
            </ul>
            <a
              href="https://meinfitomat.club/studio/Zml0dHk6MTMwMzAzNDA0MA%3D%3D/vouchers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center bg-accent text-white py-3.5 rounded-xl text-sm hover:bg-accent-dark transition-colors duration-300 font-medium"
            >
              Gutschein jetzt buchen
            </a>
          </AnimateOnScroll>

          {/* Redeem card */}
          <AnimateOnScroll delay={120} className="bg-bg rounded-2xl border border-border p-8 lg:p-10">
            <h3 className="text-xl font-medium text-ink mb-2">Gutschein einlösen</h3>
            <p className="text-muted text-sm leading-relaxed mb-7">
              Hast du bereits einen Aura-Gutschein? Buch einfach deine Wunsch-Session über unser Buchungssystem und gib deinen Gutscheincode an.
            </p>

            <a
              href="https://meinfitomat.club/studio/Zml0dHk6MTMwMzAzNDA0MA%3D%3D/appointments"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center bg-accent text-white py-3.5 rounded-xl text-sm hover:bg-accent-dark transition-colors duration-300 font-medium mb-6"
            >
              Jetzt Session buchen
            </a>

            <div className="space-y-3">
              <a
                href="mailto:info@aura-reformer.de?subject=Gutschein%20einl%C3%B6sen"
                className="flex items-center gap-3 text-sm text-ink hover:text-accent transition-colors"
              >
                <span className="text-accent">→</span>
                info@aura-reformer.de
              </a>
              <a
                href="tel:+4917213666666"
                className="flex items-center gap-3 text-sm text-ink hover:text-accent transition-colors"
              >
                <span className="text-accent">→</span>
                0172 136 6666
              </a>
            </div>

            <div className="mt-9 pt-8 border-t border-border">
              <p className="text-sm font-medium text-ink mb-4">So einfach geht&apos;s</p>
              <ul className="space-y-3">
                {[
                  'Gutschein über das Buchungssystem bestellen',
                  'Gutschein als PDF erhalten',
                  'Wunsch-Session buchen & genießen',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted">
                    <span className="text-accent font-medium shrink-0">{i + 1}.</span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
