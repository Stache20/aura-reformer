'use client'

/**
 * TEMPORARY — Herbst-Special / Open Door promo strip, shown at the top of the
 * fixed header on every page. Remove after 11.10.2026.
 * See images/FallEventPhotos/REVERT-NOTES.md for full revert steps.
 */

import { useEffect, useState } from 'react'
import Image from 'next/image'

const AUTO_OPEN_KEY = 'aura-fall-auto-popup-2026'

const photos = [
  {
    src: '/images/fall-event/herbst-spezial-flyer.jpeg',
    alt: 'Herbst-Special: 3x Reformer Pilates für 72 Euro, mit Wellpass 33 Euro',
    width: 941,
    height: 1672,
  },
  {
    src: '/images/fall-event/herbst-spezial-neukunden.jpeg',
    alt: 'Herbst-Special für Neukunden, buchbar bis 11.10.2026',
    width: 1080,
    height: 1350,
  },
  {
    src: '/images/fall-event/open-door.jpeg',
    alt: 'Open Door bei Aura am Freitag 09.10., 17 bis 19 Uhr',
    width: 1122,
    height: 1402,
  },
]

export default function FallSpecialBar() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (sessionStorage.getItem(AUTO_OPEN_KEY)) return
    const timer = setTimeout(() => {
      sessionStorage.setItem(AUTO_OPEN_KEY, '1')
      setLightbox(0)
    }, 900)
    return () => clearTimeout(timer)
  }, [])

  function prev() {
    setLightbox((i) => ((i ?? 0) - 1 + photos.length) % photos.length)
  }

  function next() {
    setLightbox((i) => ((i ?? 0) + 1) % photos.length)
  }

  return (
    <>
      <button
        onClick={() => setLightbox(0)}
        className="w-full bg-accent hover:bg-accent-dark transition-colors duration-300 text-white text-center px-4 py-2 text-xs sm:text-sm tracking-wide truncate"
      >
        🍂 <span className="font-medium">Herbst-Special</span>
        <span className="hidden sm:inline">
          : 3× Reformer Pilates für 72&nbsp;€ (33&nbsp;€ mit Wellpass) · Open Door Fr. 09.10.
        </span>
        {' '}— Mehr Infos →
      </button>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-ink/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Herbst-Special Infos"
          onClick={() => setLightbox(null)}
        >
          <div className="relative w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(null)}
              aria-label="Schließen"
              className="absolute -top-10 right-0 w-8 h-8 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>

            <div className="flex items-center justify-center">
              <Image
                key={photos[lightbox].src}
                src={photos[lightbox].src}
                alt={photos[lightbox].alt}
                width={photos[lightbox].width}
                height={photos[lightbox].height}
                className="max-h-[78vh] w-auto h-auto rounded-2xl object-contain"
                sizes="512px"
                priority
              />
            </div>

            <button
              onClick={prev}
              aria-label="Vorheriges Bild"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-bg/80 backdrop-blur-sm flex items-center justify-center text-ink hover:bg-bg transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M8 1L3 6l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Nächstes Bild"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-bg/80 backdrop-blur-sm flex items-center justify-center text-ink hover:bg-bg transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M4 1l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="flex justify-center gap-2 mt-4">
              {photos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox(i)}
                  aria-label={`Bild ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === lightbox ? 'bg-accent w-5' : 'bg-white/40 w-2'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
