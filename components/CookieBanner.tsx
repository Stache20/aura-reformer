'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Consent {
  necessary: true
  functional: boolean
}

const STORAGE_KEY = 'aura-cookie-consent'

export function getConsent(): Consent | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [functional, setFunctional] = useState(true)

  useEffect(() => {
    if (!getConsent()) setVisible(true)
  }, [])

  const save = (consent: Consent) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent))
    setVisible(false)
  }

  const acceptAll = () => save({ necessary: true, functional: true })
  const acceptNecessary = () => save({ necessary: true, functional: false })
  const saveCustom = () => save({ necessary: true, functional })

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[200] p-3 sm:p-5">
      <div className="max-w-4xl mx-auto bg-ink text-white rounded-2xl shadow-2xl overflow-hidden">
        {!showDetails ? (
          /* ── Simple view ── */
          <div className="p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-base mb-2">Wir nutzen Cookies</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Diese Website verwendet Cookies und ähnliche Technologien für technisch notwendige Funktionen sowie für Online-Buchungen (Magicline). Details findest du in unserer{' '}
                  <Link href="/datenschutz" className="text-accent hover:underline">
                    Datenschutzerklärung
                  </Link>
                  .
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5 shrink-0">
                <button
                  onClick={() => setShowDetails(true)}
                  className="border border-white/25 text-white/70 text-xs px-4 py-2.5 rounded-full hover:border-white/60 hover:text-white transition-colors"
                >
                  Einstellungen
                </button>
                <button
                  onClick={acceptNecessary}
                  className="border border-white/25 text-white text-xs px-4 py-2.5 rounded-full hover:border-white/60 transition-colors"
                >
                  Nur notwendige
                </button>
                <button
                  onClick={acceptAll}
                  className="bg-accent text-white text-xs px-5 py-2.5 rounded-full hover:bg-accent-dark transition-colors font-medium"
                >
                  Alle akzeptieren
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* ── Detailed settings view ── */
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-medium text-base">Cookie-Einstellungen</h3>
              <button
                onClick={() => setShowDetails(false)}
                className="text-white/40 hover:text-white transition-colors text-sm"
              >
                ← Zurück
              </button>
            </div>

            <div className="space-y-4 mb-7">
              {/* Necessary */}
              <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                <div className="flex-1">
                  <p className="text-sm font-medium mb-1">Notwendige Cookies</p>
                  <p className="text-white/50 text-xs leading-relaxed">
                    Technisch erforderlich für den Betrieb der Website. Speichern z.B. deine Cookie-Einstellungen selbst. Können nicht deaktiviert werden.
                  </p>
                </div>
                <div className="shrink-0 mt-0.5">
                  <div className="w-10 h-5 bg-accent rounded-full flex items-center justify-end px-0.5">
                    <div className="w-4 h-4 bg-white rounded-full" />
                  </div>
                </div>
              </div>

              {/* Functional */}
              <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                <div className="flex-1">
                  <p className="text-sm font-medium mb-1">Funktionale Cookies</p>
                  <p className="text-white/50 text-xs leading-relaxed">
                    Werden für das Online-Buchungssystem (Magicline) benötigt. Ohne diese Cookies kannst du Termine nicht direkt online buchen.
                  </p>
                  <p className="text-white/35 text-xs mt-1">Anbieter: Magicline GmbH · Zweck: Online-Terminbuchung</p>
                </div>
                <button
                  onClick={() => setFunctional(!functional)}
                  className="shrink-0 mt-0.5"
                  aria-label={functional ? 'Funktionale Cookies deaktivieren' : 'Funktionale Cookies aktivieren'}
                >
                  <div
                    className={`w-10 h-5 rounded-full flex items-center px-0.5 transition-colors duration-200 ${
                      functional ? 'bg-accent justify-end' : 'bg-white/20 justify-start'
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full" />
                  </div>
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 items-center justify-between border-t border-white/10 pt-5">
              <Link href="/datenschutz" className="text-white/40 text-xs hover:text-white/70 transition-colors">
                Datenschutzerklärung
              </Link>
              <div className="flex gap-3">
                <button
                  onClick={acceptNecessary}
                  className="border border-white/25 text-white text-xs px-5 py-2.5 rounded-full hover:border-white/60 transition-colors"
                >
                  Nur notwendige
                </button>
                <button
                  onClick={saveCustom}
                  className="bg-accent text-white text-xs px-5 py-2.5 rounded-full hover:bg-accent-dark transition-colors font-medium"
                >
                  Auswahl speichern
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
