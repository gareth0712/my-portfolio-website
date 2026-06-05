---
name: Stripe Press
url: https://press.stripe.com/
slug: stripe-press
category: uiux
industry: editorial
reachable: true
---

# Stripe Press

**One-liner:** A scroll-driven WebGL bookshelf where every title is a real 3D object that rotates to reveal spine, cover, and back as the camera glides up the stack — turning a publisher's catalog into a tactile, cinematic browsing experience.

## Overview
Stripe Press is the publishing imprint of Stripe, producing books about "ideas for progress" — technology, science, economics, engineering. The homepage is a single long-scroll page that presents the entire catalog (~20 titles plus a film and a podcast) as a vertical stack of photoreal 3D books rendered in WebGL. There is no traditional grid of cover thumbnails; instead you scroll the camera up through a floating bookshelf in a dark, warm-toned void. It is editorial branding executed as a technical showpiece — the medium signals the imprint's values (craft, depth, engineering rigor) more than any copy could. Led by Yuin Chien with Nick Jones and Philipp Antoni at Stripe.

## Layout & Information Architecture
- Single-page vertical scroll; the page IS the catalog. No multi-column grid — one book per "floor" of the stack, centered horizontally.
- Each book occupies roughly a viewport-band; scrolling advances the camera up one or more books at a time, so IA reads top-to-bottom as a chronological/curated reading list.
- Generous negative space (dark void) between and around books gives each title room to breathe — high whitespace, low density, very editorial.
- Fixed left rail of small horizontal tick marks (one per book) acts as a table-of-contents / scroll-progress indicator and wayfinding spine.
- Top-left persistent masthead ("Stripe Press / Ideas for progress"). Bottom transitions out of the bookshelf into a starfield for the "We Are As Gods" film and "Beneath the Surface" podcast, then a newsletter signup + footer (social, privacy, cookie settings, contact email).
- Each book heading is an accessible `<button>` wrapping the title + author, with a real `<a>` link inside to the book's detail page — semantic fallback beneath the canvas.

## Navigation
- No conventional nav bar. Primary navigation IS the scroll + the left tick-mark rail.
- Left rail: ~20 small horizontal lines stacked vertically, each corresponding to a book; doubles as progress indicator and likely jump-to affordance. Minimalist, unobtrusive, always visible.
- Persistent top-left logo/masthead; bottom-left a "?" help/about affordance and small social icons.
- Wayfinding is spatial/cinematic rather than menu-based — you always know where you are by how far up the stack the camera has traveled.

## Typography
- **Ivar** typeface family throughout (a refined high-contrast serif): `Ivar Headline` for titles/headings, `Ivar Text` (fallback Georgia) for body. This serif choice is deliberately literary — it reads like a book, reinforcing the editorial identity.
- Hierarchy is restrained: title (Ivar Headline) + author (smaller) per book, set small and elegant rather than huge. H1 computed at ~17.6px — typography defers to the 3D objects rather than shouting.
- Italic usage for the "Ideas for progress" tagline. Spine text on the 3D books is part of the rendered texture, so the typographic system extends onto the objects themselves.

## Color & Theme
- Dark, warm theme: body background `rgb(32, 24, 25)` — a near-black deep brown/maroon, not a cold black. Feels like a dim library or leather binding.
- Accent: warm gold/brass `rgb(223, 199, 142)` on links — restrained, premium, antiquarian.
- Book covers supply the color punch (the kintsugi-gold "Maintenance" cover, the vivid red/orange "Scientific Freedom" and "Boom" covers) against the muted void, so each title pops as you reach it.
- High contrast text-on-dark; the palette never competes with the rendered books.

## Imagery / Media
- The core "imagery" is real-time 3D: each book is a textured 3D mesh (covers, spines, page edges modeled). No flat hero image, no stock photography.
- Photoreal materials — you can read the spine, see page-edge texture, and books cast soft shadows/reflections on an implied surface.
- The film section swaps the bookshelf for a 3D starfield/space scene with an Earth visual ("We Are As Gods"). The podcast gets its own retro-styled "Beneath the Surface" emblem.
- Some titles have separate "Living Cover" experiences (generative/interactive cover art) on their detail pages.

## Motion & Interaction
- **Signature interaction:** scroll-linked camera dolly up a vertical stack of 3D books. As each book enters frame it rotates (parallax/scroll-driven) to reveal spine → front cover → sometimes back, like pulling a volume off a shelf and turning it in your hands.
- Motion is physically grounded: books float, tilt, and settle with weight; the rotation is tied to scroll position so the user "drives" the animation (scrubbing forward/back replays it).
- Smooth, inertia-feeling scroll; transition from bookshelf void into the starfield section is a continuous spatial move, not a hard cut.
- Microinteractions: hover/focus states on book buttons, the left tick rail highlighting the active book, subtle ambient motion (drifting stars in the film section).
- All motion is GPU-driven WebGL, keeping it smooth and low-overhead.

## Tech / Stack (if known)
- **Three.js / WebGL** for the 3D book rendering (2 `<canvas>` elements; WebGL context confirmed in DOM). Built by Yuin Chien + Nick Jones + Philipp Antoni (2021).
- Stripe's in-house marketing static asset pipeline (`b.stripecdn.com/mkt-statics-srv/...` bundles — a "Bootstrapper" + an `imt` bundle). Stripe is known for bespoke front-end frameworks rather than off-the-shelf.
- Custom fonts: Ivar Headline / Ivar Text.
- Scroll-driven animation hooks the camera to scroll position; semantic HTML (`button`/`a`/`heading`) layered under the canvas for accessibility and SEO.
- (Stripe's broader marketing site is also famous for the `minigl` WebGL animated mesh-gradient — same team's design sensibility, though the gradient is not the focus here.)

## Notable Techniques (steal-worthy)
- Turning a flat catalog (a list of books) into a single explorable 3D scene — content becomes the navigation.
- Scroll-as-scrubber: binding a 3D camera/animation to scroll position so the user controls a cinematic reveal at their own pace (forward AND backward).
- Real 3D objects instead of CSS card-flips — actual meshes with modeled spines/page-edges and lighting give genuine tactility.
- Semantic HTML scaffold beneath a WebGL canvas (each 3D book mirrored by a real `<button>`+`<a>`+heading) for a11y/SEO without sacrificing the visual.
- Left tick-mark rail as a minimalist combined progress-bar + table-of-contents.
- Typeface as brand argument: a literary high-contrast serif (Ivar) on a warm near-black "library" background to make a tech-company publisher feel like a real press.
- Mood-driven section transition: morphing the environment (bookshelf void → starfield) to re-theme for different content types within one continuous scroll.

## What to steal for a personal portfolio
- **Make the content the interface.** Instead of a grid of project cards, present your projects as objects in a single scrollable scene the visitor moves through — far more memorable than a CMS grid.
- **Scroll-driven reveal:** pick ONE hero interaction (e.g. a 3D object or hero element that rotates/assembles as you scroll) and bind it to scroll position so it feels like the user is driving it. One strong scroll mechanic beats ten scattered effects.
- **Warm dark theme + serif + a single metallic accent** is a cheap, high-class palette recipe (`#201819`-ish bg, gold accent, literary serif) that instantly reads "premium / considered."
- **Restrained typography:** let your visuals carry the page and keep type small and elegant — don't reach for giant display headers by default.
- **Always layer semantic, linked HTML under any canvas/WebGL** so the site is accessible, crawlable, and degrades gracefully — Stripe Press shows you don't have to choose between flashy and correct.
- **A minimalist fixed progress/index rail** is an easy, elegant wayfinding win for any long-scroll page.

## Screenshots
- shots/stripe-press/01-hero.png (top of the 3D book stack — Maintenance / The Origins of Efficiency, gold accent, left tick rail)
- shots/stripe-press/02-mid.png (mid-scroll: Where Is My Flying Car? / The Big Score / Scientific Freedom 3D books)
- shots/stripe-press/03-lower.png (transition into starfield: "We Are As Gods" film + "Beneath the Surface" podcast emblem)
- shots/stripe-press/04-full.png (full-page capture)
