'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const slides = [
  { src: '/images/Eroeffnungsevent/event-cover.jpeg', alt: 'Unsere nächsten Events' },
  { src: '/images/Eroeffnungsevent/event-eroeffnungsparty.jpeg', alt: 'Eröffnungsparty – 02. Juli ab 16 Uhr' },
  { src: '/images/Eroeffnungsevent/event-opendoors.jpeg', alt: 'Open Doors – 03.–05. Juli 2026' },
  { src: '/images/Eroeffnungsevent/event-trainingsstart.jpeg', alt: 'Trainingsstart – 06. Juli 2026' },
]

const SESSION_KEY = 'aura_event_popup_seen'

export default function EventPopup() {
  const [visible, setVisible] = useState(false)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!sessionStorage.getItem(SESSION_KEY)) {
      const t = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(t)
    }
  }, [])

  function close() {
    sessionStorage.setItem(SESSION_KEY, '1')
    setVisible(false)
  }

  function prev() {
    setCurrent((c) => (c - 1 + slides.length) % slides.length)
  }

  function next() {
    setCurrent((c) => (c + 1) % slides.length)
  }

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={close}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative z-10 bg-bg rounded-3xl overflow-hidden shadow-2xl w-full max-w-sm"
        style={{ maxHeight: '90dvh' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={close}
          aria-label="Schließen"
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-bg/80 backdrop-blur-sm flex items-center justify-center text-muted hover:text-ink transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Image */}
        <div className="relative w-full" style={{ aspectRatio: '1/1' }}>
          <Image
            key={current}
            src={slides[current].src}
            alt={slides[current].alt}
            fill
            className="object-cover"
            sizes="480px"
            priority
          />

          {/* Prev / Next arrows */}
          {slides.length > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Vorheriges Bild"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-bg/70 backdrop-blur-sm flex items-center justify-center text-ink hover:bg-bg transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M8 1L3 6l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                onClick={next}
                aria-label="Nächstes Bild"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-bg/70 backdrop-blur-sm flex items-center justify-center text-ink hover:bg-bg transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M4 1l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Dots + footer */}
        <div className="px-6 py-5 flex flex-col items-center gap-4">
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Folie ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-accent w-5' : 'bg-border'
                }`}
              />
            ))}
          </div>

          <button
            onClick={close}
            className="text-xs text-muted hover:text-ink transition-colors tracking-wide"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  )
}
