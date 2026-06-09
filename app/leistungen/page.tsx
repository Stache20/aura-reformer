import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import GiftCardSection from '@/components/GiftCardSection'

export const metadata: Metadata = {
  title: 'Leistungen & Preise',
  description:
    'Pilates Reformer & EMS Training in Bruckmühl – Preise, Karten und Wellpass-Zuzahlung bei Aura Reformer.',
}

const APPT = 'https://meinfitomat.club/studio/Zml0dHk6MTMwMzAzNDA0MA%3D%3D/appointments'
const OFFERS = 'https://meinfitomat.club/studio/Zml0dHk6MTMwMzAzNDA0MA%3D%3D/offers'
const COURSE = 'https://meinfitomat.club/studio/Zml0dHk6MTMwMzAzNDA0MA%3D%3D/course'

const pilatesRegular = [
  { label: 'Einzeleintritt', price: '29 €', note: 'pro Einheit', href: APPT },
  { label: '5er Karte', price: '140 €', note: '≈ 28 € pro Einheit', href: OFFERS },
  { label: '10er Karte', price: '270 €', note: '≈ 27 € pro Einheit', href: OFFERS },
]

const pilatesStart = [
  { label: 'Einzeleintritt', regular: '29 €', promo: '27 €' },
  { label: '5er Karte', regular: '140 €', promo: '125 €', note: '≈ 25 € pro Einheit' },
  { label: '10er Karte', regular: '270 €', promo: '240 €', note: '≈ 24 € pro Einheit' },
]

const emsTraining = [
  {
    label: '1:2 Training',
    price: '30 €',
    note: '+ 5 € Leihanzug',
    description: 'Trainiere zu zweit mit einem Coach – intensiv und effizient.',
  },
  {
    label: '1:3 Training',
    price: '22 €',
    note: '+ 5 € Leihanzug',
    description: 'Kleingruppentraining mit maximaler Wirkung in kürzester Zeit.',
  },
]

const faqs = [
  {
    q: 'Was ist Wellpass?',
    a: 'Wellpass ist ein Firmenfitness-Programm, das dir über deinen Arbeitgeber Zugang zu Fitnessstudios und Kursangeboten ermöglicht. Frag deinen Arbeitgeber, ob er Wellpass anbietet – wir sind Partner!',
  },
  {
    q: 'Was ist EMS Training?',
    a: 'EMS (Elektromuskelstimulation) ist eine Trainingsform, bei der elektrische Impulse deine Muskeln tief aktivieren – für maximale Wirkung in nur 20–30 Minuten. Ideal als Ergänzung zu Pilates.',
  },
  {
    q: 'Brauche ich Vorerfahrung?',
    a: 'Nein! Sowohl Pilates Reformer als auch EMS Training bieten wir für Einsteiger an. Unser Team führt dich behutsam ein.',
  },
  {
    q: 'Was soll ich mitbringen?',
    a: 'Bequeme Sportkleidung und Socken (Griffsocken empfohlen). Für EMS-Training stellen wir den Leihanzug bereit (Zuzahlung 5 €). Wasser und Matten sind vorhanden.',
  },
  {
    q: 'Wie löse ich meine Karte ein?',
    a: 'Karten werden direkt im Studio oder beim Buchen deines Termins erfasst. Bei Fragen meld dich gerne unter info@aura-reformer.de.',
  },
]

export default function Leistungen() {
  return (
    <>
      <PageHero
        eyebrow="Leistungen & Preise"
        title="Training, das wirklich zu dir passt."
        subtitle="Pilates Reformer, EMS Training und Wellpass – flexibel, effektiv und auf dich abgestimmt."
      />

      {/* ── Neukunden-Startangebot Banner ───────────── */}
      <section className="bg-accent text-white py-10">
        <div className="container-wide">
          <AnimateOnScroll>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-white/80 text-[11px] tracking-[0.25em] uppercase mb-2">Startangebot für Neukunden</p>
                <h2 className="font-display font-light text-3xl lg:text-4xl leading-tight">
                  Dein erster Monat — günstiger starten.
                </h2>
                <p className="text-white/75 mt-2 text-sm">
                  Pilates Reformer ab nur <strong className="text-white">27 €</strong> statt 29 € · 5er Karte ab <strong className="text-white">125 €</strong> statt 140 € · 10er Karte ab <strong className="text-white">240 €</strong> statt 270 €
                </p>
              </div>
              <a
                href="https://meinfitomat.club/studio/Zml0dHk6MTMwMzAzNDA0MA%3D%3D/offers"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 bg-white text-accent px-8 py-3.5 rounded-full text-sm font-medium hover:bg-white/90 transition-colors"
              >
                Jetzt einsteigen
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ */}
      {/* PILATES REFORMER                              */}
      {/* ══════════════════════════════════════════════ */}
      <section className="section-py">
        <div className="container-wide">
          <AnimateOnScroll className="mb-14">
            <div className="flex items-end gap-5">
              <div>
                <p className="text-accent text-[11px] tracking-[0.3em] uppercase mb-3">Angebot 01</p>
                <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-tight">
                  Pilates Reformer
                </h2>
              </div>
            </div>
            <p className="mt-5 text-muted leading-relaxed max-w-2xl">
              Der Reformer ist das Herzstück unseres Studios. Mit einem federbasierten Widerstandssystem aktivierst du tief liegende Muskelgruppen, verbesserst Haltung und Stabilität – und das in deinem Tempo.
            </p>
          </AnimateOnScroll>

          {/* Regular prices */}
          <AnimateOnScroll className="mb-4">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted mb-6">Reguläre Preise</p>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {pilatesRegular.map((item, i) => (
              <AnimateOnScroll key={item.label} delay={i * 70}>
                <div className="bg-bg rounded-2xl border border-border p-7 flex flex-col gap-3">
                  <p className="text-sm font-medium text-ink">{item.label}</p>
                  <p className="font-display font-light text-4xl text-ink">{item.price}</p>
                  <p className="text-muted text-xs">{item.note}</p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 text-xs text-accent border border-accent/40 px-4 py-2 rounded-full text-center hover:bg-accent hover:text-white transition-colors duration-300"
                  >
                    Buchen →
                  </a>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Startangebot detail */}
          <AnimateOnScroll>
            <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-10 mb-10">
              <div className="flex items-start gap-3 mb-7">
                <span className="text-accent text-lg">✦</span>
                <div>
                  <p className="text-accent text-[11px] tracking-[0.25em] uppercase mb-1">Startangebot – 1. Monat</p>
                  <h3 className="font-display font-medium text-2xl text-ink">Neukunden-Preise</h3>
                  <p className="text-muted text-sm mt-1">Für alle, die neu bei Aura Reformer starten.</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {pilatesStart.map((item, i) => (
                  <div key={item.label} className="bg-bg rounded-xl border border-border p-6 flex flex-col gap-3">
                    <p className="text-sm font-medium text-ink mb-1">{item.label}</p>
                    <div className="flex items-baseline gap-2.5 mb-1">
                      <span className="font-display font-light text-3xl text-accent">{item.promo}</span>
                      <span className="text-muted text-sm line-through">{item.regular}</span>
                    </div>
                    {item.note && <p className="text-muted text-xs">{item.note}</p>}
                    <a
                      href={i === 0 ? APPT : OFFERS}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 text-xs text-accent border border-accent/40 px-4 py-2 rounded-full text-center hover:bg-accent hover:text-white transition-colors duration-300"
                    >
                      Buchen →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Wellpass – Pilates */}
          <AnimateOnScroll>
            <div className="rounded-2xl border border-border bg-surface p-7 flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1">
                <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-muted mb-2">Wellpass</p>
                <h3 className="font-medium text-ink mb-1">Pilates Reformer über Wellpass</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Teilnahme über Wellpass möglich. Die genaue Zuzahlung pro Einheit wird individuell festgelegt. Sprich uns gerne an oder schreib uns eine E-Mail.
                </p>
              </div>
              <div className="shrink-0 bg-bg rounded-xl border border-border px-5 py-3 text-center">
                <p className="text-[10px] uppercase tracking-widest text-muted mb-0.5">Zuzahlung</p>
                <p className="font-display font-light text-3xl text-ink">XX €</p>
                <p className="text-[10px] text-muted mt-0.5">je nach Kursmodell</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ */}
      {/* EMS TRAINING                                  */}
      {/* ══════════════════════════════════════════════ */}
      <section className="section-py bg-surface">
        <div className="container-wide">
          <AnimateOnScroll className="mb-14">
            <p className="text-accent text-[11px] tracking-[0.3em] uppercase mb-3">Angebot 02</p>
            <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-tight">
              EMS Training
            </h2>
            <p className="mt-5 text-muted leading-relaxed max-w-2xl">
              Elektromuskelstimulation – maximale Wirkung in minimaler Zeit. In nur 20–30 Minuten erreichst du eine Trainingstiefe, die herkömmliche Methoden kaum erreichen. Perfekt als Ergänzung zu Pilates oder für alle, die effizient trainieren möchten.
            </p>
          </AnimateOnScroll>

          {/* EMS Kennenlernen */}
          <AnimateOnScroll className="mb-8">
            <div className="rounded-2xl border border-accent/30 bg-bg p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1">
                <p className="text-accent text-[11px] tracking-[0.25em] uppercase mb-2">Einstieg & Kennenlernen</p>
                <h3 className="font-display font-medium text-2xl text-ink mb-2">Body Check & Probetraining</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Dein erstes Mal am EMS-Gerät — in einer persönlichen Session erklären wir dir alles und du erlebst, wie EMS Training sich anfühlt. Unverbindlich und ohne Druck.
                </p>
              </div>
              <div className="shrink-0 flex flex-col items-center gap-3">
                <div className="bg-accent/5 border border-accent/20 rounded-2xl px-7 py-5 text-center">
                  <p className="text-[10px] uppercase tracking-widest text-accent mb-1">Einmalig</p>
                  <p className="font-display font-light text-4xl text-ink">20 €</p>
                  <p className="text-[10px] text-muted mt-1">Personal Session · 30 Min.</p>
                </div>
                <a
                  href={APPT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-accent border border-accent/40 px-5 py-2 rounded-full hover:bg-accent hover:text-white transition-colors duration-300 whitespace-nowrap"
                >
                  Termin buchen →
                </a>
              </div>
            </div>
          </AnimateOnScroll>

          {/* EMS prices */}
          <AnimateOnScroll className="mb-4">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted mb-6">EMS Training Preise</p>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 gap-5 mb-8">
            {emsTraining.map((item, i) => (
              <AnimateOnScroll key={item.label} delay={i * 80}>
                <div className="bg-bg rounded-2xl border border-border p-8 flex flex-col gap-3 h-full">
                  <p className="text-sm font-medium text-ink">{item.label}</p>
                  <div>
                    <p className="font-display font-light text-4xl text-ink">{item.price}</p>
                    <p className="text-muted text-xs mt-1">{item.note}</p>
                  </div>
                  <p className="text-muted text-sm leading-relaxed flex-1">{item.description}</p>
                  <a
                    href={APPT}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 text-xs text-accent border border-accent/40 px-4 py-2 rounded-full text-center hover:bg-accent hover:text-white transition-colors duration-300"
                  >
                    Buchen →
                  </a>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* EMS Body Transformation */}
          <AnimateOnScroll className="mb-8">
            <div className="rounded-2xl border border-border bg-ink text-white p-8 lg:p-10">
              <p className="text-accent text-[11px] tracking-[0.25em] uppercase mb-3">Programm</p>
              <h3 className="font-display font-light text-3xl mb-2">EMS Body Transformation</h3>
              <p className="text-white/60 text-sm mb-6">Individuelles Programm aus Kraft- und Ausdauertraining — auf dich abgestimmt.</p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 rounded-xl p-5">
                  <p className="text-accent text-xs tracking-widest uppercase mb-2">Session 1</p>
                  <p className="font-medium text-white mb-1">Krafttraining</p>
                  <p className="text-white/60 text-sm">20 Minuten intensives Muskelaufbau-Training · zu zweit mit Coach</p>
                </div>
                <div className="bg-white/5 rounded-xl p-5">
                  <p className="text-accent text-xs tracking-widest uppercase mb-2">Session 2</p>
                  <p className="font-medium text-white mb-1">Ausdauertraining</p>
                  <p className="text-white/60 text-sm">30 Minuten gezielte Ausdauer & Regeneration · Kleingruppe</p>
                </div>
              </div>
              <a
                href="mailto:info@aura-reformer.de?subject=EMS%20Body%20Transformation%20Anfrage"
                className="inline-flex items-center gap-2 bg-accent text-white px-7 py-3 rounded-full text-sm hover:bg-accent-dark transition-colors duration-300"
              >
                Preis auf Anfrage — jetzt anfragen
              </a>
            </div>
          </AnimateOnScroll>

          {/* Wellpass – EMS */}
          <AnimateOnScroll>
            <div className="rounded-2xl border border-border bg-bg p-7 flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1">
                <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-muted mb-2">Wellpass</p>
                <h3 className="font-medium text-ink mb-1">EMS Training über Wellpass</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Auch EMS Training ist über Wellpass buchbar. Optional inklusive Leihanzug. Die Zuzahlung wird individuell festgelegt — ruf uns einfach an oder schreib uns.
                </p>
              </div>
              <div className="shrink-0 bg-surface rounded-xl border border-border px-5 py-3 text-center">
                <p className="text-[10px] uppercase tracking-widest text-muted mb-0.5">Zuzahlung</p>
                <p className="font-display font-light text-3xl text-ink">XX €</p>
                <p className="text-[10px] text-muted mt-0.5">Leihanzug optional</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────── */}
      <section className="section-py bg-surface">
        <div className="container-narrow">
          <AnimateOnScroll className="mb-12">
            <p className="text-accent text-[11px] tracking-[0.3em] uppercase mb-4">Häufige Fragen</p>
            <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-tight">FAQ</h2>
          </AnimateOnScroll>
          <div className="space-y-6">
            {faqs.map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 50}>
                <div className="border-b border-border pb-6">
                  <h3 className="font-medium text-ink mb-2">{item.q}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.a}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gift cards ──────────────────────────────── */}
      <GiftCardSection />

      {/* ── Booking CTA ─────────────────────────────── */}
      <section className="section-py bg-ink text-white">
        <div className="container-narrow text-center">
          <AnimateOnScroll>
            <h2 className="font-display font-light text-4xl lg:text-5xl leading-tight mb-6">
              Bereit loszulegen?
            </h2>
            <p className="text-white/60 text-lg leading-relaxed max-w-md mx-auto mb-10">
              Buch deinen Termin jetzt online oder ruf uns an — wir freuen uns auf dich.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={COURSE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-accent text-white px-10 py-4 rounded-full text-sm tracking-wide hover:bg-accent-dark transition-colors duration-300"
              >
                Jetzt buchen
              </a>
              <a
                href="tel:+4917213666666"
                className="inline-flex items-center justify-center border border-white/30 text-white px-10 py-4 rounded-full text-sm tracking-wide hover:border-white hover:bg-white/10 transition-all duration-300"
              >
                0172 136 6666
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
