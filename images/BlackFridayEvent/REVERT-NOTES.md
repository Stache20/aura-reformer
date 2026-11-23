# Black Friday Special (20.11.–30.11.2026) — revert notes

Everything for this promo is marked `TEMPORARY — Black Friday`. To remove it:

1. Delete `components/BlackFridayBar.tsx` (promo strip on every page + home-page popup).
2. In `components/Navbar.tsx`, remove the two lines marked `TEMPORARY — Black Friday`
   (the `BlackFridayBar` import and `<BlackFridayBar />`).
3. In `app/leistungen/page.tsx`, delete the block between
   `{/* TEMPORARY — Black Friday Special ... */}` and `{/* END TEMPORARY — Black Friday Special */}`.
4. Delete `public/images/black-friday/` (web copy of the flyer).
5. Optionally delete this folder `images/BlackFridayEvent/`.

Or, if the promo was added in a single commit: `git revert <commit>`.
