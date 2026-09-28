# Herbst-Special / Open Door promo — revert after 11.10.2026

Added 2026-09-28. This is a TEMPORARY promotion. Once the offer ends
(11.10.2026 for the Herbst-Special, 09.10.2026 for the Open Door event),
undo the following changes to put the site back to normal:

## 1. Remove the sitewide top promo bar
- `components/Navbar.tsx`: delete the `import FallSpecialBar from '@/components/FallSpecialBar'`
  line and the `<FallSpecialBar />` usage right at the top of the `<header>`.
- Delete `components/FallSpecialBar.tsx`.

(Note: this renders a slim accent-colored strip at the very top of the fixed
header on every page — "🍂 Herbst-Special ... — Mehr Infos →" — that opens a
full-screen photo gallery (all 3 fall-event images, with prev/next + dots) when
clicked. It also auto-opens that same gallery once per browser session shortly
after page load, so visitors see it without needing to click. Both the bar and
gallery go away once the component and its usage in Navbar.tsx are removed.)

## 2. Remove the pricing promo card
- `app/leistungen/page.tsx`: delete the "Herbst-Special · nur für Neukunden" block
  (the `AnimateOnScroll` right before the `{/* Regular prices */}` comment,
  clearly marked with a `TEMPORARY` comment above it).

## 3. Clean up images (optional)
- `public/images/fall-event/` (open-door.jpeg, herbst-spezial-flyer.jpeg,
  herbst-spezial-neukunden.jpeg) — safe to delete once the popup/card above are removed.
- This `images/FallEventPhotos/` source folder and this note — safe to delete too.

## What the promo was
- Open Door: Fr. 09.10.2026, 17–19 Uhr — studio walk-in, no signup needed.
- Herbst-Special für Neukunden: 3× Reformer Pilates für 72 € (33 € mit Wellpass),
  buchbar bis 11.10.2026, nur für Neukunden.
