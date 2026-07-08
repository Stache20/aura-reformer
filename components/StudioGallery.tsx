'use client'

import { useState } from 'react'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'

const slides = [
  { src: '/images/StudioSpace/studio-wide.jpeg', alt: 'Trainingsraum mit Reformer-Geräten bei Aura Reformer' },
  { src: '/images/StudioSpace/studio-equipment.jpeg', alt: 'Reformer und Pilates-Zubehör im Studio' },
  { src: '/images/StudioSpace/studio-reception.jpeg', alt: 'Empfangsbereich mit Aura Reformer Logo' },
  { src: '/images/StudioSpace/studio-accessories.jpeg', alt: 'Pilates Ringe und Bälle an der Wand' },
  { src: '/images/StudioSpace/studio-logo.jpeg', alt: 'Trainingsraum mit Aura Reformer Logo' },
]

export default function StudioGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  function prev() {
    setLightbox((i) => ((i ?? 0) - 1 + slides.length) % slides.length)
  }

  function next() {
    setLightbox((i) => ((i ?? 0) + 1) % slides.length)
  }

  return (
    <>
      <section className="section-py">
        <div className="container-wide">
          <AnimateOnScroll className="mb-14 text-center">
            <p className="text-accent text-[11px] tracking-[0.3em] uppercase mb-4">Unser Raum</p>
            <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-tight">
              Unser Studio
            </h2>
            <p className="text-muted mt-4 text-base max-w-md mx-auto">
              Modern, hell und mit Liebe zum Detail eingerichtet — dein Raum für Bewegung, Ruhe und Transformation in Bruckmühl.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <button
              onClick={() => setLightbox(0)}
              className="relative block w-full mb-3 rounded-2xl overflow-hidden focus:outline-none group"
              style={{ aspectRatio: '21/9' }}
              aria-label={`${slides[0].alt} vergrößern`}
            >
              <Image
                src={slides[0].src}
                alt={slides[0].alt}
                fill
                className="object-cover photo-filter transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 1200px"
                priority
              />
            </button>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {slides.slice(1).map((s, i) => (
              <AnimateOnScroll key={s.src} delay={160 + i * 80}>
                <button
                  onClick={() => setLightbox(i + 1)}
                  className="relative block w-full rounded-2xl overflow-hidden focus:outline-none group"
                  style={{ aspectRatio: '1/1' }}
                  aria-label={`${s.alt} vergrößern`}
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    className="object-cover photo-filter transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 50vw, 300px"
                  />
                </button>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/80 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <div className="relative w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              aria-label="Schließen"
              className="absolute -top-10 right-0 w-8 h-8 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
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
                <path d="M8 1L3 6l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Nächstes Bild"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-bg/80 backdrop-blur-sm flex items-center justify-center text-ink hover:bg-bg transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M4 1l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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
