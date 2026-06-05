---
name: Anand Sharma (aprilzero)
url: https://aprilzero.com
slug: anand-sharma-aprilzero
category: portfolio
industry: awwwards
reachable: true
---

# Anand Sharma (aprilzero)

**One-liner:** A legendary "quantified-self" personal site that turned one person's life data (steps, heart rate, GPS, sleep, weight) into a cinematic, animated 3D dashboard — a benchmark for treating *motion and feel* as first-class design material, not decoration.

## Overview
aprilzero.com was Anand Sharma's personal data portrait: a public, beautifully animated visualization of his own life metrics that he iterated through many numbered versions (v1–v5+) starting in 2014. It became the design seed for **Gyroscope** (gyrosco.pe), the product/company it spawned. The site is famous in the design community for its "buttery smooth" transitions and for treating animation as a core craft.

IMPORTANT CAVEAT ON CURRENT STATE: As loaded live in this teardown (June 2026), aprilzero.com no longer serves the iconic dashboard. It now resolves to a **single full-viewport black page with only the white wordmark "A P R I L Z E R O"** — no scroll (page height == viewport, 566px), zero images, zero SVGs, zero `<canvas>`, zero links, two `<div>`s total. The live site is effectively a placeholder/holding page; the celebrated experience now lives on at gyrosco.pe and in Sharma's "Making of April Zero" write-ups. The analysis below therefore separates the **live stub** (verified via DOM) from the **historical landmark design** (verified via Sharma's own design articles + search).

## Layout & Information Architecture
- **Live (now):** Zero IA. One centered `<h1>` on black. No sections, no nav, no footer. A deliberate minimal holding page.
- **Historically:** A single-canvas "hero is the whole product" model. The screen was dominated by a large central radial/orbital composition — concentric rings and a rotating globe of GPS locations — surrounded by satellite stat readouts (steps, heart rate, sleep, weight, active time). No traditional scrolling-section IA; it was a live dashboard you *watched* assemble itself rather than scroll through. Generous black negative space framed the glowing data object as the single focal point.

## Navigation
- **Live:** None. No links exist in the DOM.
- **Historically:** Minimal chrome — the data object *was* the navigation. Time-period and metric switching happened in place with animated transitions rather than page loads; there was no conventional sticky/hamburger/mega-nav. Wayfinding came from spatial memory of where each metric lived in the orbital layout.

## Typography
- **Typeface:** System sans stack — verified `font-family: "San Francisco", "Helvetica Neue", Helvetica, sans-serif`. Apple's San Francisco / Helvetica Neue gives a clean, neutral, almost OS-native voice that lets the data and color do the talking.
- **Wordmark treatment:** The "A P R I L Z E R O" lockup uses wide manual letter-spacing (spaces between every glyph) to read as a calm, spaced-out monogram. Live h1: 36px, weight 700, white (#fff) on black.
- **Hierarchy (historical):** Big numeric readouts as the headline tier, tiny uppercase labels beneath — a dashboard hierarchy where the *number* is the hero and the label is a whisper.

## Color & Theme
- **Theme:** Pure dark mode — body background is `rgb(0,0,0)`, text pure white. This is the signature: a black void that makes luminous data glow.
- **Palette (historical):** Vivid, saturated accent hues mapped to metrics — neon greens, blues, oranges, pinks/magentas — rendered as glowing rings and points against black. Sharma has written that during development he used "brightly colored circles" to build and debug the spinning elements, so color doubled as both aesthetic and engineering instrumentation.
- **Contrast:** Maximum (white/neon on black). High drama, low chrome.

## Imagery / Media
- **Live:** None.
- **Historically:** No photography. Everything was generated dataviz — orbital rings, a 3D globe of plotted GPS locations, and animated charts. Sharma describes manipulating the whole set of locations slightly in 3D space "for a more interesting perspective," i.e. faux-3D parallax/perspective applied to 2D-plotted points to give depth without a full 3D engine.

## Motion & Interaction
This is the entire point of the site historically, and why it's studied:
- **Choreographed intro animation:** v5 added an entrance sequence where elements animate *in* while also being animated — Sharma notes the hard part was "running transitions on elements that were also animating" (compound/nested animation timing). The page *assembles itself* on load.
- **Continuous ambient motion:** rings and the location-globe rotate continuously; the dashboard is never static — it breathes.
- **"Feel over look":** Sharma's stated design principle was that *how the page felt and moved was as important as how it looked* — the transitions being "buttery smooth" was the explicit goal, achieved through careful easing and frame-rate discipline.
- **In-place state transitions:** switching metrics/time-ranges morphed the visualization rather than reloading.
- **Live now:** No animation (`animationName: none` on h1) — the motion legacy is gone from the live URL.

## Tech / Stack (if known)
- **Current live site:** **Next.js (Pages Router)** — verified via `/_next/static/chunks/` (framework, main, `pages/_app`, `pages/index`) and a `_buildManifest`/`_ssgManifest` build (build id `Me4x-KkNudbsh4SixFkMS`). Statically exported, system-font stack, no third-party animation libs loaded on the stub.
- **Historical dashboard:** Predates this Next build. Per Sharma's write-ups it was hand-built browser animation (CSS/JS-driven SVG/DOM transforms with faux-3D positioning) rather than an off-the-shelf WebGL globe — the "3D" was achieved by perspective-transforming plotted points, not a Three.js scene. No `<canvas>` is present today.
- **Lineage:** The design directly became **Gyroscope** (gyrosco.pe), a real product/company.

## Notable Techniques (steal-worthy)
- **Dark void + luminous data:** pure black canvas so saturated neon dataviz reads as glowing — instant premium feel with almost no UI chrome.
- **Animation as a craft discipline, not a flourish:** treat easing/timing/frame-rate as a design deliverable; "feel" gets its own iteration budget.
- **Self-assembling entrance:** a choreographed intro where the whole composition animates into existence sets a cinematic tone before the user does anything.
- **Faux-3D from 2D points:** perspective-shift a flat set of plotted points to fake depth cheaply instead of standing up a full 3D engine.
- **Debug-color-as-feature:** building with brightly colored debug circles that double as the final aesthetic.
- **Number-as-headline hierarchy:** giant metric, whispered label.
- **Spaced-letter wordmark:** wide manual tracking turns a plain system-font name into a calm signature lockup.

## What to steal for a personal portfolio
- Pick **one hero object** and make it the whole first screen — resist the urge to add sections above the fold. Let it assemble itself with a choreographed intro.
- Commit to **pure black + one or two saturated accents**; let content glow rather than adding decorative UI.
- Budget real time for **motion feel** (easing curves, 60fps, transition continuity) — it's the single biggest differentiator and what people remember as "smooth."
- Use a **clean system/Helvetica stack** so color + motion + data carry the personality; spend type effort only on a distinctive spaced wordmark.
- If you want depth, **fake 3D with perspective transforms** before reaching for Three.js — cheaper, lighter, often enough.
- Ship it as a **statically-exported Next.js** site (as the live URL now does) for instant loads and trivial hosting.
- Caveat learned here: the live URL is now a stub — if you reference aprilzero as inspiration, pull the real artifacts from gyrosco.pe and Sharma's "Making of April Zero" Part 1 & 2 articles, not the current domain.

## Screenshots
- shots/anand-sharma-aprilzero/01-hero.png  (live: white wordmark on black, the only state)
- shots/anand-sharma-aprilzero/04-full.png   (full-page capture — identical single black screen, confirms no scroll/content)
- (02-mid.png / 03-lower.png not saved — page has no scrollable content; height == viewport, so mid/lower scroll captures would be duplicates of the hero)
