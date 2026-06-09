'use client'

import Link from 'next/link'
import Image from 'next/image'

const nav = [
  { href: '/', label: 'Start' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/buchen', label: 'Buchen' },
  { href: '/kontakt', label: 'Kontakt' },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white">
                <Image
                  src="/images/logo.png"
                  alt="Aura Reformer"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs italic font-display">
              &ldquo;Forme deinen Körper. Stärke deine Aura.&rdquo;
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-accent mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-accent mb-5">
              Kontakt
            </h4>
            <address className="not-italic space-y-2 text-sm text-white/60">
              <p>Gewerbepark BWB 3</p>
              <p>83052 Bruckmühl</p>
              <div className="pt-2 space-y-2">
                <p>
                  <a href="mailto:info@aura-reformer.de?subject=Aura%20Reformer" className="hover:text-white transition-colors">
                    info@aura-reformer.de
                  </a>
                </p>
                <p>
                  <a href="tel:+4917213666666" className="hover:text-white transition-colors">
                    0172 136 6666
                  </a>
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="https://www.instagram.com/aura_reformerstudio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                  </svg>
                  Instagram
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Aura Reformer. Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-white/30">
            <Link href="/impressum" className="hover:text-white/60 transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white/60 transition-colors">Datenschutz</Link>
            <button
              onClick={() => {
                localStorage.removeItem('aura-cookie-consent')
                window.location.reload()
              }}
              className="hover:text-white/60 transition-colors cursor-pointer"
            >
              Cookie-Einstellungen
            </button>
            <a
              href="https://webpretzel.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors"
            >
              Erstellt von WebPretzel
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
