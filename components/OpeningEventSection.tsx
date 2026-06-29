'use client'

import { useState } from 'react'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'

const slides = [
  { src: '/images/Eroeffnungsevent/event-eroeffnungsparty.jpeg', alt: 'Eröffnungsparty – 02. Juli ab 16 Uhr' },
  { src: '/images/Eroeffnungsevent/event-opendoors.jpeg', alt: 'Open Doors – 03.–05. Juli' },
  { src: '/images/Eroeffnungsevent/event-trainingsstart.jpeg', alt: 'Trainingsstart – 06. Juli' },
]

const dates = [
  { label: 'Eröffnungsparty', date: '02. Juli', detail: 'ab 16 Uhr · Snacks · Drinks · Musik' },
  { label: 'Open Doors', date: '03.–05. Juli', detail: 'Fr 15–18 · Sa & So 11–15 Uhr' },
  { label: 'Trainingsstart', date: '06. Juli', detail: 'Ab diesem Tag starten unsere Kurse' },
]

export default function OpeningEventSection() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  function prev() {
    setLightbox((i) => ((i ?? 0) - 1 + slides.length) % slides.length)
  }

  function next() {
    setLightbox((i) => ((i ?? 0) + 1) % slides.length)
  }

  return (
    <>
      <section className="section-py bg-surface overflow-hidden">
        <div className="container-wide">
          <AnimateOnScroll className="mb-12 text-center">
            <p className="text-accent text-[11px] tracking-[0.3em] uppercase mb-4">Wir eröffnen</p>
            <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-tight">
              Unsere nächsten
              <br />
              <em className="italic">Events</em>
            </h2>
            <p className="text-muted mt-4 text-base max-w-md mx-auto">
              Feier mit uns den Start von Aura Reformer Studio — komm vorbei, lern uns kennen und erlebe den Reformer live.
            </p>
          </AnimateOnScroll>

          {/* Date cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {dates.map((d, i) => (
              <AnimateOnScroll key={d.label} delay={i * 80}>
                <div className="bg-bg rounded-2xl border border-border p-6 text-center">
                  <p className="text-accent text-[10px] tracking-[0.3em] uppercase mb-2">{d.label}</p>
                  <p className="font-display font-light text-3xl text-ink mb-1">{d.date}</p>
                  <p className="text-muted text-sm">{d.detail}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Photo strip */}
          <AnimateOnScroll delay={120}>
            <div className="grid grid-cols-3 gap-3 rounded-2xl overflow-hidden">
              {slides.map((s, i) => (
                <button
                  key={s.src}
                  onClick={() => setLightbox(i)}
                  className="relative block focus:outline-none group"
                  style={{ aspectRatio: '1/1' }}
                  aria-label={`${s.alt} vergrößern`}
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 33vw, 400px"
                  />
                  {/* tap hint on mobile */}
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-ink/20">
                    <svg className="w-6 h-6 text-white drop-shadow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zm-3-3v6m-3-3h6" />
                    </svg>
                  </span>
                </button>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/80 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              aria-label="Schließen"
              className="absolute -top-10 right-0 w-8 h-8 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Image */}
            <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: '1/1' }}>
              <Image
                src={slides[lightbox].src}
                alt={slides[lightbox].alt}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>

            {/* Prev / Next */}
            <button
              onClick={prev}
              aria-label="Vorheriges Bild"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-bg/80 backdrop-blur-sm flex items-center justify-center text-ink hover:bg-bg transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M8 1L3 6l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Nächstes Bild"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-bg/80 backdrop-blur-sm flex items-center justify-center text-ink hover:bg-bg transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M4 1l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {slides.map((_, i) => (
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
