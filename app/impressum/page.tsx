import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum von Aura Reformer gemäß § 5 TMG.',
}

export default function Impressum() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Impressum" />

      <section className="section-py">
        <div className="container-narrow space-y-10 text-sm">

          {/* Angaben */}
          <div>
            <h2 className="font-display font-medium text-xl text-ink mb-4">
              Angaben gemäß § 5 TMG
            </h2>
            <div className="space-y-1 text-muted leading-relaxed">
              <p className="text-ink font-medium">Aura Reformer</p>
              <p>[Vor- und Nachname der Inhaberin]</p>
              <p>Gewerbepark BWB 3</p>
              <p>83052 Bruckmühl</p>
              <p>Deutschland</p>
            </div>
          </div>

          {/* Kontakt */}
          <div className="border-t border-border pt-8">
            <h2 className="font-display font-medium text-xl text-ink mb-4">Kontakt</h2>
            <div className="space-y-2 text-muted">
              <p>
                Telefon:{' '}
                <a href="tel:+4917213666666" className="text-ink hover:text-accent transition-colors">
                  0172 136 6666
                </a>
              </p>
              <p>
                E-Mail:{' '}
                <a href="mailto:Info@aurareformer.de" className="text-ink hover:text-accent transition-colors">
                  Info@aurareformer.de
                </a>
              </p>
            </div>
          </div>

          {/* Umsatzsteuer */}
          <div className="border-t border-border pt-8">
            <h2 className="font-display font-medium text-xl text-ink mb-4">
              Umsatzsteuer-Identifikationsnummer
            </h2>
            <p className="text-muted leading-relaxed">
              Gemäß § 27a Umsatzsteuergesetz:{' '}
              <span className="text-ink">[USt-IdNr. bitte ergänzen]</span>
            </p>
          </div>

          {/* Berufsbezeichnung */}
          <div className="border-t border-border pt-8">
            <h2 className="font-display font-medium text-xl text-ink mb-4">
              Berufsbezeichnung und berufsrechtliche Regelungen
            </h2>
            <div className="text-muted leading-relaxed space-y-2">
              <p>Berufsbezeichnung: Pilates-Instructorin / Fitness- und Gesundheitstrainerin</p>
              <p>Zuständige Kammer: [ggf. ergänzen]</p>
            </div>
          </div>

          {/* Haftung Inhalte */}
          <div className="border-t border-border pt-8">
            <h2 className="font-display font-medium text-xl text-ink mb-4">
              Haftung für Inhalte
            </h2>
            <p className="text-muted leading-relaxed">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </div>

          {/* Haftung Links */}
          <div className="border-t border-border pt-8">
            <h2 className="font-display font-medium text-xl text-ink mb-4">
              Haftung für Links
            </h2>
            <p className="text-muted leading-relaxed">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </div>

          {/* Urheberrecht */}
          <div className="border-t border-border pt-8">
            <h2 className="font-display font-medium text-xl text-ink mb-4">Urheberrecht</h2>
            <p className="text-muted leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Solltest du trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </div>

          {/* Streitschlichtung */}
          <div className="border-t border-border pt-8">
            <h2 className="font-display font-medium text-xl text-ink mb-4">
              Streitschlichtung
            </h2>
            <p className="text-muted leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              . Unsere E-Mail-Adresse findest du oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <p className="text-xs text-muted border-t border-border pt-6">
            Stand: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long' })}
          </p>
        </div>
      </section>
    </>
  )
}
