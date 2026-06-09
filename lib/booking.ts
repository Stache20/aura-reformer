const BASE = 'https://meinfitomat.club/studio/Zml0dHk6MTMwMzAzNDA0MA%3D%3D'

export const BOOKING = {
  home:         BASE,
  classes:      `${BASE}/course`,
  appointments: `${BASE}/appointments`,
  offers:       `${BASE}/offers`,
  vouchers:     `${BASE}/vouchers`,
} as const

export const DEFAULT_BOOKING_URL = `${BASE}/course`
