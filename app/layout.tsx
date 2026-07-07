import type { Metadata } from 'next'
import { Inter, DM_Serif_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Aura Reformer – Premium Reformer Pilates in Bruckmühl',
    template: '%s | Aura Reformer',
  },
  description:
    'Forme deinen Körper. Stärke deine Aura. Premium Reformer Pilates Studio in Bruckmühl – individuelles Training für nachhaltige Veränderung.',
  keywords: ['Reformer Pilates', 'Pilates Bruckmühl', 'Pilates Studio', 'Aura Reformer'],
  openGraph: {
    siteName: 'Aura Reformer',
    locale: 'de_DE',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${inter.variable} ${dmSerif.variable}`}>
      <body className="bg-bg text-ink font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
