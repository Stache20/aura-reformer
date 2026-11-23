'use client'

/**
 * TEMPORARY — Black Friday Special (20.11.–30.11.2026).
 * - Promo strip at the top of the fixed header on every page → links to the
 *   Black Friday pricing card on /leistungen.
 * - Flyer popup that opens automatically on the home page (once per session).
 * See images/BlackFridayEvent/REVERT-NOTES.md for full revert steps.
 */

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const AUTO_OPEN_KEY = 'aura-black-friday-popup-2026'

export default function BlackFridayBar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== '/') return
    try {
      if (sessionStorage.getItem(AUTO_OPEN_KEY)) return
    } catch {}
    const timer = setTimeout(() => {
      try {
        sessionStorage.setItem(AUTO_OPEN_KEY, '1')
      } catch {}
      setOpen(true)
    }, 900)
    return () => clearTimeout(timer)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <Link
        href="/leistungen#black-friday"
        className="block w-full bg-ink hover:bg-accent-dark transition-colors duration-300 text-white text-center px-4 py-2 text-xs sm:text-sm tracking-wide truncate"
      >
        🖤 <span className="font-medium">Black Friday Special</span>
        <span className="hidden sm:inline">
          {' '}bis 30.11.: 10er Karte 240&nbsp;€ statt 270&nbsp;€ · 3er Karte 72&nbsp;€ für Neukunden
        </span>
        {' '}— Zu den Preisen →
      </Link>

      {open && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-ink/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Black Friday Special"
          onClick={() => setOpen(false)}
        >
          <div className="relative w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setOpen(false)}
              aria-label="Schließen"
              className="absolute -top-10 right-0 w-8 h-8 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>

            <div className="flex items-center justify-center">
              <Image
                src="/images/black-friday/black-friday-special.jpeg"
                alt="Black Friday Special 20.11.–30.11.2026: 3er Karte Reformer Pilates 72 € für Neukunden (mit Wellpass 33 €), 10er Karte 240 € statt 270 € (mit Wellpass 110 €)"
                width={1122}
                height={1402}
                className="max-h-[75vh] w-auto h-auto rounded-2xl object-contain"
                sizes="512px"
                priority
              />
            </div>

            <div className="flex justify-center mt-4">
              <Link
                href="/leistungen#black-friday"
                onClick={() => setOpen(false)}
                className="text-xs sm:text-sm bg-accent text-white px-6 py-2.5 rounded-full hover:bg-accent-dark transition-colors duration-300"
              >
                Zu den Preisen →
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
