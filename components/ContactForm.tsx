'use client'

import { useState, FormEvent } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-accent/30 bg-accent/5 p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
          <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-medium text-ink mb-2">Nachricht gesendet!</h3>
        <p className="text-muted text-sm leading-relaxed">
          Vielen Dank für deine Nachricht. Wir melden uns so schnell wie möglich bei dir.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm text-muted hover:text-ink transition-colors underline"
        >
          Neue Nachricht schreiben
        </button>
      </div>
    )
  }

  const inputClass =
    'w-full px-4 py-3 border border-border rounded-xl text-sm text-ink placeholder-muted focus:outline-none focus:border-accent transition-colors bg-bg'

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs text-muted mb-2 tracking-wide">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Dein Name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs text-muted mb-2 tracking-wide">
            E-Mail *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="deine@email.de"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-xs text-muted mb-2 tracking-wide">
            Telefon (optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="0172 …"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-xs text-muted mb-2 tracking-wide">
            Betreff
          </label>
          <select
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Bitte wählen</option>
            <option value="Allgemeine Anfrage">Allgemeine Anfrage</option>
            <option value="Probetermin">Probetermin</option>
            <option value="Preise & Pakete">Preise & Pakete</option>
            <option value="Gutscheine">Gutscheine</option>
            <option value="Sonstiges">Sonstiges</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs text-muted mb-2 tracking-wide">
          Nachricht *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={handleChange}
          placeholder="Wie können wir dir helfen?"
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-500">
          Etwas ist schiefgelaufen. Bitte versuche es erneut oder schreibe uns direkt an{' '}
          <a href="mailto:info@aura-reformer.de?subject=Aura%20Reformer" className="underline">
            info@aura-reformer.de
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-ink text-white py-4 rounded-xl text-sm font-medium hover:bg-accent transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Wird gesendet…' : 'Nachricht senden'}
      </button>

      <p className="text-[11px] text-muted text-center">
        Mit dem Absenden stimmst du unserer{' '}
        <a href="/datenschutz" className="underline hover:text-ink transition-colors">
          Datenschutzerklärung
        </a>{' '}
        zu.
      </p>
    </form>
  )
}
