import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description:
    'Datenschutzerklärung von Aura Reformer – Informationen zur Verarbeitung deiner personenbezogenen Daten gemäß DSGVO.',
}

export default function Datenschutz() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Datenschutzerklärung"
        subtitle="Wir nehmen den Schutz deiner persönlichen Daten sehr ernst. Hier erfährst du, welche Daten wir erheben und wie wir sie verwenden."
      />

      <section className="section-py">
        <div className="container-narrow space-y-10 text-sm">

          {/* 1 */}
          <div>
            <h2 className="font-display font-medium text-xl text-ink mb-4">1. Verantwortliche Stelle</h2>
            <div className="text-muted leading-relaxed space-y-1">
              <p className="text-ink font-medium">Aura Reformer</p>
              <p>[Vor- und Nachname der Inhaberin]</p>
              <p>Gewerbepark BWB 3, 83052 Bruckmühl</p>
              <p>
                E-Mail:{' '}
                <a href="mailto:Info@aurareformer.de" className="text-accent hover:underline">
                  Info@aurareformer.de
                </a>
              </p>
              <p>Telefon: 0172 136 6666</p>
            </div>
          </div>

          {/* 2 */}
          <div className="border-t border-border pt-8">
            <h2 className="font-display font-medium text-xl text-ink mb-4">2. Allgemeines zur Datenverarbeitung</h2>
            <p className="text-muted leading-relaxed">
              Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung personenbezogener Daten unserer Nutzer erfolgt regelmäßig nur nach Einwilligung des Nutzers. Eine Ausnahme gilt in solchen Fällen, in denen eine vorherige Einholung einer Einwilligung aus tatsächlichen Gründen nicht möglich ist und die Verarbeitung der Daten durch gesetzliche Vorschriften gestattet ist.
            </p>
          </div>

          {/* 3 */}
          <div className="border-t border-border pt-8">
            <h2 className="font-display font-medium text-xl text-ink mb-4">
              3. Bereitstellung der Website & Logfiles
            </h2>
            <div className="text-muted leading-relaxed space-y-3">
              <p>
                Bei jedem Aufruf unserer Website erfasst unser System automatisiert Daten und Informationen vom Computersystem des aufrufenden Rechners. Folgende Daten werden hierbei erhoben: IP-Adresse des Nutzers (anonymisiert), Datum und Uhrzeit des Zugriffs, Name und URL der abgerufenen Datei, Website, von der aus der Zugriff erfolgt (Referrer-URL), Browser und ggf. Betriebssystem sowie Name des Access-Providers des Nutzers.
              </p>
              <p>
                Die Daten werden in Logfiles gespeichert. Eine Speicherung dieser Daten zusammen mit anderen personenbezogenen Daten des Nutzers findet nicht statt. Rechtsgrundlage für die vorübergehende Speicherung ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
              </p>
            </div>
          </div>

          {/* 4 Cookies */}
          <div className="border-t border-border pt-8">
            <h2 className="font-display font-medium text-xl text-ink mb-4">4. Cookies</h2>
            <div className="text-muted leading-relaxed space-y-4">
              <p>
                Unsere Website verwendet Cookies. Bei Cookies handelt es sich um Textdateien, die im Internetbrowser bzw. vom Internetbrowser auf dem Computersystem des Nutzers gespeichert werden. Wir nutzen folgende Cookie-Kategorien:
              </p>

              <div className="bg-surface rounded-xl border border-border overflow-hidden">
                <table className="w-full text-xs">
                  <thead className="bg-border/60">
                    <tr>
                      <th className="text-left px-4 py-3 text-ink font-medium">Kategorie</th>
                      <th className="text-left px-4 py-3 text-ink font-medium">Zweck</th>
                      <th className="text-left px-4 py-3 text-ink font-medium">Anbieter</th>
                      <th className="text-left px-4 py-3 text-ink font-medium">Rechtsgrundlage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-4 py-3 text-ink font-medium">Notwendig</td>
                      <td className="px-4 py-3 text-muted">Cookie-Einstellungen speichern</td>
                      <td className="px-4 py-3 text-muted">Aura Reformer (localStorage)</td>
                      <td className="px-4 py-3 text-muted">Art. 6 Abs. 1 lit. f DSGVO</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-ink font-medium">Funktional</td>
                      <td className="px-4 py-3 text-muted">Online-Terminbuchung</td>
                      <td className="px-4 py-3 text-muted">Magicline GmbH</td>
                      <td className="px-4 py-3 text-muted">Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                Du kannst deine Cookie-Einstellungen jederzeit über den Link &bdquo;Cookie-Einstellungen&ldquo; im Footer oder beim erneuten Laden der Seite anpassen.
              </p>
            </div>
          </div>

          {/* 5 Kontaktformular */}
          <div className="border-t border-border pt-8">
            <h2 className="font-display font-medium text-xl text-ink mb-4">5. Kontaktformular & E-Mail-Kontakt</h2>
            <div className="text-muted leading-relaxed space-y-3">
              <p>
                Wenn du uns per Kontaktformular oder E-Mail kontaktierst, werden deine Angaben (Name, E-Mail-Adresse, ggf. Telefonnummer, Nachricht) zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen gespeichert.
              </p>
              <p>
                Rechtsgrundlage für die Verarbeitung dieser Daten ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) bei Anfragen zu Dienstleistungen, in allen anderen Fällen Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen). Die Daten werden nach abschließender Bearbeitung deiner Anfrage gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
              </p>
            </div>
          </div>

          {/* 6 Magicline */}
          <div className="border-t border-border pt-8">
            <h2 className="font-display font-medium text-xl text-ink mb-4">6. Magicline (Online-Buchungssystem)</h2>
            <div className="text-muted leading-relaxed space-y-3">
              <p>
                Zur Online-Terminbuchung nutzen wir den Dienst Magicline GmbH, Brienner Str. 45a–d, 80333 München, Deutschland. Wenn du auf unserer Website auf den Buchungslink klickst, wirst du auf die Buchungsseite von Magicline weitergeleitet. Dabei werden Daten (u.a. dein Name, deine E-Mail-Adresse und der gewünschte Termin) an Magicline übertragen und dort verarbeitet.
              </p>
              <p>
                Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) sowie Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Weitere Informationen findest du in der{' '}
                <a
                  href="https://www.magicline.com/datenschutz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Datenschutzerklärung von Magicline
                </a>
                .
              </p>
            </div>
          </div>

          {/* 7 Rechte */}
          <div className="border-t border-border pt-8">
            <h2 className="font-display font-medium text-xl text-ink mb-4">
              7. Deine Rechte als betroffene Person
            </h2>
            <div className="text-muted leading-relaxed">
              <p className="mb-4">Gemäß DSGVO stehen dir folgende Rechte zu:</p>
              <ul className="space-y-2.5">
                {[
                  ['Auskunftsrecht', 'Art. 15 DSGVO – Du hast das Recht, Auskunft über deine bei uns gespeicherten personenbezogenen Daten zu erhalten.'],
                  ['Berichtigungsrecht', 'Art. 16 DSGVO – Du hast das Recht, die Berichtigung unrichtiger Daten zu verlangen.'],
                  ['Löschungsrecht', 'Art. 17 DSGVO – Du hast das Recht, die Löschung deiner personenbezogenen Daten zu verlangen.'],
                  ['Einschränkung', 'Art. 18 DSGVO – Du hast das Recht auf Einschränkung der Verarbeitung deiner Daten.'],
                  ['Datenübertragbarkeit', 'Art. 20 DSGVO – Du hast das Recht, deine Daten in einem strukturierten, gängigen Format zu erhalten.'],
                  ['Widerspruchsrecht', 'Art. 21 DSGVO – Du hast das Recht, der Verarbeitung deiner Daten zu widersprechen.'],
                  ['Beschwerderecht', 'Du hast das Recht, dich bei einer Datenschutzbehörde zu beschweren (z.B. Bayerisches Landesamt für Datenschutzaufsicht).'],
                ].map(([title, desc]) => (
                  <li key={title} className="flex gap-3">
                    <span className="text-accent shrink-0 mt-0.5">→</span>
                    <span>
                      <strong className="text-ink">{title}:</strong> {desc}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-5">
                Zur Ausübung deiner Rechte wende dich bitte an:{' '}
                <a href="mailto:Info@aurareformer.de" className="text-accent hover:underline">
                  Info@aurareformer.de
                </a>
              </p>
            </div>
          </div>

          {/* 8 Widerruf */}
          <div className="border-t border-border pt-8">
            <h2 className="font-display font-medium text-xl text-ink mb-4">
              8. Widerruf deiner Einwilligung
            </h2>
            <p className="text-muted leading-relaxed">
              Viele Datenverarbeitungsvorgänge sind nur mit deiner ausdrücklichen Einwilligung möglich. Du kannst eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt. Du kannst deine Cookie-Einstellungen jederzeit über das Cookie-Banner anpassen, das beim erneuten Laden der Seite erscheint.
            </p>
          </div>

          <div className="border-t border-border pt-6">
            <p className="text-xs text-muted">
              Stand: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long' })} — Diese Datenschutzerklärung sollte vor dem offiziellen Launch durch einen auf Datenschutzrecht spezialisierten Anwalt geprüft werden.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
