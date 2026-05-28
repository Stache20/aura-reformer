import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Pflichtfelder fehlen.' }, { status: 400 })
    }

    /*
     * TODO: Connect an email service here (e.g. Resend, Nodemailer, SendGrid).
     *
     * Example with Resend (https://resend.com):
     *
     *   import { Resend } from 'resend'
     *   const resend = new Resend(process.env.RESEND_API_KEY)
     *   await resend.emails.send({
     *     from: 'kontakt@aurareformer.de',
     *     to:   'Info@aurareformer.de',
     *     subject: `Kontaktanfrage: ${subject || 'Neue Nachricht'}`,
     *     text: `Von: ${name} <${email}>\nTelefon: ${phone || '–'}\n\n${message}`,
     *   })
     */

    console.log('Neue Kontaktanfrage:', { name, email, phone, subject, message })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Kontaktformular Fehler:', err)
    return NextResponse.json({ error: 'Interner Fehler.' }, { status: 500 })
  }
}
