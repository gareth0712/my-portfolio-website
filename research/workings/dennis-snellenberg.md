---
name: Dennis Snellenberg
url: https://dennissnellenberg.com
slug: dennis-snellenberg
category: portfolio
industry: awwwards
reachable: true
---

# Dennis Snellenberg

**One-liner:** A masterclass in restraint-meets-craft — a near-monochrome freelance portfolio whose award-winning status comes entirely from buttery motion, oversized editorial typography, and obsessive microinteraction polish rather than visual noise.

## Overview
Personal portfolio for Dennis Snellenberg, a Netherlands-based freelance designer & developer (member of the Awwwards jury; 2x Site of the Day, 2x Developer Award, 9x Honorable Mention, Independent of the Year 2023 nominee). The site exists to convert agencies/brands into clients. It's a textbook "high-end freelancer" site: confident, minimal, photo-forward, and every interaction is choreographed. Overall impression is calm authority — the design gets out of the way and lets motion + a single hero portrait do the selling.

## Layout & Information Architecture
Single-page-feeling marketing flow built on virtualized smooth scroll. Home page sections in order:
1. **Hero** — full-viewport portrait of Dennis on a warm grey backdrop, with a giant "Dennis Snellenberg —" wordmark anchored to the bottom edge, breaking the viewport on both sides (text bleeds off-screen). Top-left "Located in the Netherlands" pill with a rotating globe glyph. Right column: "Freelance Designer & Developer" + scroll-cue arrow.
2. **Intro / positioning statement** — large display copy: "Helping brands to stand out in the digital era… No nonsense, always on the cutting edge." with an "About me" link.
3. **RECENT WORK** — a vertical list of 4 featured projects (TWICE, The Damai, FABRIC™, Aanstekelijk), each a large hover-reveal row labelled with discipline ("Interaction & Development", "Design & Development"). Closes with a "More work (11)" link — note the live project count baked into the label.
4. **CTA** — oversized "Let's work together" + "Get in touch" button, plus direct mailto and tel links.
5. **Footer** — three-column meta: VERSION, LOCAL TIME (live clock), SOCIALS (Awwwards, Instagram, Twitter, LinkedIn).

Generous whitespace, low density, single-column reading rhythm. Content is left/right aligned to a wide editorial grid rather than centered. The bleeding hero wordmark is the signature IA move.

## Navigation
Minimal top bar: brand mark "© Code by Dennis" (left) + Work / About / Contact (right). A separate full overlay menu exists (snapshot shows a NAVIGATION block with Home/Work/About/Contact + SOCIALS + © line), i.e. a hamburger/expanding overlay panel that slides in. Nav links are magnetic (hover pulls the link toward the cursor). Page-to-page navigation is handled by **Barba.js**, giving seamless SPA-style transitions with no white flash between routes. Wayfinding is light by design — only 3 destinations matter.

## Typography
- **Typeface:** custom "Dennis Sans" (a clean neo-grotesque sans), single family doing all the work.
- **Scale:** extreme. The hero H1 computes to ~189px with a light-ish weight (~450). Body and meta labels drop to small uppercase tracked-out captions (NAVIGATION, SOCIALS, RECENT WORK, VERSION, LOCAL TIME at h5).
- **Hierarchy:** driven almost entirely by size jump (giant display H1 vs ~12px uppercase eyebrow labels) rather than weight or color. Section eyebrows are tiny uppercase; statements are large h4 display.
- **Treatment:** tight tracking on display, letter-spaced caps on labels. The duplicated "Dennis Snellenberg —" headings (two stacked h1s) are an animation rig for a marquee/parallax reveal.

## Color & Theme
Near-monochrome. Body background is a dark charcoal `rgb(28,29,32)` (revealed during transitions), while the hero sits on a warm light grey. Text is the same charcoal on light, white on dark. Accent backgrounds hover around `rgb(20,21,23)` (the dark pill / globe chip). No saturated brand color, no gradients, no decoration — contrast and the portrait photo carry the palette. The discipline of "no accent color" is itself the statement.

## Imagery / Media
- **Hero portrait:** a single high-quality studio photo of Dennis (teal sweater, neutral grey seamless backdrop) color-matched to the UI palette — the photo IS the art direction.
- **Work thumbnails:** project rows reveal imagery on hover (lazy-loaded via vanilla-lazyload).
- No illustration, no 3D/WebGL. Restraint is intentional — media is photographic and sparse.

## Motion & Interaction
This is where the award lives.
- **Preloader:** rotating multilingual greeting sequence ("Hello", "Bonjour", "स्वागत हे", "Ciao", "Olá", "おい", "Hallå", "Guten tag", "Hallo") cycling on first load — those nine h2s are the intro counter/loader.
- **Smooth scroll:** Locomotive Scroll virtualizes the page (transform-based), enabling parallax via `data-scroll` attributes — hero text and portrait move at different rates.
- **Magnetic elements:** nav links and buttons are magnetic (`magnet` class present) — they bend toward the cursor and snap back.
- **Page transitions:** Barba.js drives full-page transitions (the charcoal bg sweeps in to cover/reveal between routes).
- **Scroll-triggered reveals:** GSAP ScrollTrigger handles staggered text/line reveals and the work-list interactions.
- **Microinteractions:** live local-time clock in footer, scroll-cue arrow, hover thumbnail reveals on work rows, bleeding-marquee hero wordmark.
- Custom cursor was not detected in DOM (no `cursor` element class), so interactions rely on magnetic + reveal rather than a bespoke cursor.

## Tech / Stack (if known)
Hand-built static site (NOT Next.js / Nuxt — `__NEXT_DATA__` and `__NUXT__` both absent). Confirmed from loaded scripts:
- **jQuery 3.5.1** (DOM glue)
- **GSAP 3.9.1 + ScrollTrigger** (animation engine)
- **Barba.js 2.10.3** (SPA page transitions)
- **Locomotive Scroll** (self-hosted `assets/js/locomotive-scroll.min.js` — smooth/virtual scroll + parallax)
- **vanilla-lazyload 17.6.1** (image lazy loading)
- **js-cookie** (consent/state)
- **Google Analytics (gtag G-SGWQQRQ15Y)**
- Custom font **"Dennis Sans"**, app logic in `assets/js/index-new.js`.
This is a classic pre-bundler "jQuery + GSAP + Locomotive + Barba" award-site stack — the same recipe behind many 2021-2023 Awwwards SOTD sites. (Note: popular GitHub clones rebuild it in Next.js + Framer Motion + Lenis, but the real site uses the stack above.)

## Notable Techniques (steal-worthy)
- **Bleeding oversized wordmark** anchored to the viewport bottom that runs off both edges — instant scale + confidence.
- **Multilingual greeting preloader** that doubles as a loading sequence and a personality moment.
- **Photo-matched-to-UI palette** — shoot/grade the portrait to the exact background grey so the subject melts into the page.
- **Magnetic links + buttons** for tactile hover feedback without a custom cursor.
- **Barba.js page transitions** to kill white-flash navigation and feel like an app.
- **Live meta footer** (local time clock + VERSION) — tiny details that signal "developer who cares".
- **Self-counting nav label** ("More work 11") so the count never goes stale.

## What to steal for a personal portfolio
- Go monochrome and let ONE great portrait + huge type carry the whole palette — no accent color needed to win.
- Anchor a giant name wordmark to the bottom of the hero and let it bleed off-screen.
- Add a smooth-scroll layer (Lenis is the modern replacement for Locomotive) + GSAP ScrollTrigger for parallax and staggered reveals.
- Make nav links/buttons magnetic — cheap to add, disproportionately premium feel.
- Use page transitions (Barba.js, or View Transitions API / Framer Motion in a modern stack) to eliminate navigation flashes.
- Keep IA to 3 destinations (Work/About/Contact) and a single CTA repeated; don't over-navigate a portfolio.
- Sprinkle "developer cares" microcopy: live local time, version number, discipline tags per project.

## Screenshots
- shots/dennis-snellenberg/01-hero.png
- shots/dennis-snellenberg/02-mid.png
- shots/dennis-snellenberg/03-lower.png
- shots/dennis-snellenberg/04-full.png

(Note: Locomotive Scroll virtualizes scroll via transforms, so the scroll/full captures repeat the hero viewport rather than below-fold content; below-fold IA was reconstructed from the accessibility snapshot.)
