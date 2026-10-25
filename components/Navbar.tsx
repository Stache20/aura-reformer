'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const navLinks = [
  { href: '/', label: 'Start' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/buchen', label: 'Buchen' },
  { href: '/kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || !isHome

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        solid ? 'bg-bg border-b border-border shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-white">
              <Image
                src="/images/logo.png"
                alt="Aura Reformer"
                width={48}
                height={48}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'text-sm tracking-wide transition-colors duration-300 hover:text-accent',
                  pathname === link.href
                    ? 'text-accent'
                    : solid
                    ? 'text-ink'
                    : 'text-white'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://meinfitomat.club/studio/Zml0dHk6MTMwMzAzNDA0MA%3D%3D/course"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center bg-accent text-white text-sm px-6 py-2.5 rounded-full hover:bg-accent-dark transition-colors duration-300"
            >
              Jetzt buchen
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={clsx(
                'md:hidden p-2 transition-colors',
                solid ? 'text-ink' : 'text-white'
              )}
              aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                {menuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="8" x2="21" y2="8" />
                    <line x1="3" y1="16" x2="21" y2="16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={clsx(
          'md:hidden bg-bg border-t border-border overflow-hidden transition-all duration-300',
          menuOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={clsx(
                'text-sm tracking-wide transition-colors hover:text-accent',
                pathname === link.href ? 'text-accent' : 'text-ink'
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://meinfitomat.club/studio/Zml0dHk6MTMwMzAzNDA0MA%3D%3D/course"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-accent text-white text-sm px-6 py-3 rounded-full text-center hover:bg-accent-dark transition-colors"
          >
            Jetzt buchen
          </a>
        </nav>
      </div>
    </header>
  )
}
