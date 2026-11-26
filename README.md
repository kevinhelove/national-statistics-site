# China in Numbers — National Statistics

An original, self-contained national statistics site for China: six decades of population, economy and
society figures from the World Bank's World Development Indicators, held in the site's own files so every
page works offline in a browser, on desktop and on a phone.

- `app/` — the site itself: plain static files, no build step. Open `app/index.html` through any static
  server (or run `node serve.ts` and visit http://localhost:8080).
- `main.ts` — the hand-in program (Node 22, standard library only): copies `app/` and `screenshots/` to the
  output directory and writes `dossier.json` with the vendored make.fun library.
- `screenshots/` — real renders of the site: the overview, the Population section, a GDP indicator page,
  and the overview at a phone's size.
- `vendor/makefun-frontend.ts` — the make.fun kit's dossier library, copied unchanged.

Data: World Bank, World Development Indicators (CC BY 4.0), retrieved 26 November 2026.
Site code and text: MIT License (see `LICENSE`).

Entry for make.fun's "Make the best national statistics site" bounty
(best-national-statistics-site-20261126-0539).
