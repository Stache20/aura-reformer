'use client'

import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import { ReactNode } from 'react'

const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ?? 'test'

export default function PayPalProvider({ children }: { children: ReactNode }) {
  return (
    <PayPalScriptProvider
      options={{
        clientId,
        currency: 'EUR',
        intent: 'capture',
        locale: 'de_DE',
      }}
    >
      {children}
    </PayPalScriptProvider>
  )
}
