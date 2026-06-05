---
name: Apple
url: https://www.apple.com/
slug: apple
category: uiux
industry: hardware
reachable: true
---

# Apple

**One-liner:** The definitive reference for restrained, product-first marketing design — black-on-white minimalism, oversized SF Pro typography, and discipline-over-flash scroll animation that turns hardware into hero objects without ever feeling cluttered.

## Overview
apple.com is a high-traffic product portal / storefront homepage that stacks promotional "tiles" for the current product lineup (iPhone 17 Pro, iPhone 17, MacBook Air, iPad Air, Apple Watch, Apple Card, Trade In) plus an entertainment gallery. Audience is the entire consumer market, so the bar for clarity is brutal. Overall impression: calm, confident, premium. Nothing competes for attention — each tile owns a full viewport band, the product is the visual, and copy is a single bold line + two CTAs. It feels like a curated showroom rather than a web page.

## Layout & Information Architecture
- **Full-bleed stacked bands**: hero (WWDC26 / iPhone 17 Pro) is full-viewport black; below it a vertical stack of promo tiles. Some bands are full-width single tiles, others a 2-up grid (e.g. MacBook Air + iPad Air side by side, Apple Watch + Apple Card + Trade In as a tri-tile row).
- **Heading hierarchy is deliberate**: h1 "Apple" (visually hidden brand anchor), h2 for marquee products (WWDC26, iPhone 17 Pro/17, Endless entertainment), h3 for secondary tiles (MacBook Air, iPad Air, Apple Watch, Apple Card, Trade In). This is a clean, scannable semantic map.
- **Centered composition**: headline + subhead + CTAs are center-stacked top of each tile, product imagery anchored below. Generous vertical whitespace separates bands.
- **Density is intentionally low** — one idea per screen. The page is long but never dense.
- Ends with the standard massive multi-column **Apple Directory footer** (Shop and Learn, Wallet, Account, Entertainment, Apple Store, For Business, etc.) plus legal footnotes.

## Navigation
- **Sticky global header** with translucent dark/frosted-glass backdrop (the shared `globalheader.umd.js` component, reused across all Apple properties). Stays pinned through the entire scroll.
- Items: Apple logo, Store, Mac, iPad, iPhone, Watch, Vision, AirPods, TV & Home, Entertainment, Accessories, Support, plus Search and Shopping Bag icons.
- Each top item is a link **paired with an `[expanded]` menu button** — hover/click drops a full-width mega-menu panel (flyout) rather than a simple dropdown.
- Wayfinding is minimal by design: the header is the only persistent nav; the page itself is a linear scroll with no in-page jump nav.
- A dismissible **country/region selector overlay** appears at top on first load (defaulting to detected locale).

## Typography
- **San Francisco (SF Pro Text / SF Pro Display, "SF Pro Icons" for glyphs)**, fallback Helvetica Neue → Helvetica → Arial. Apple's own typeface, served by the system on Apple devices. Confirmed via computed style: `"SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif`.
- **Big, tight, bold headlines** — product names render at very large sizes with tight tracking and heavy weight ("iPhone 17", "WWDC26", "Endless entertainment."). Subheads are smaller, lighter weight ("Magichromatic.").
- Strong **size jump between headline and supporting text** creates instant hierarchy with zero ornament.
- Copy is terse: one product name, one tagline, two CTAs. Type does the heavy lifting; almost no paragraphs.

## Color & Theme
- **Pure white (rgb(255,255,255)) page background** with **near-black text** — maximum contrast, gallery aesthetic.
- **Per-tile theme inversion**: marquee tiles flip to black backgrounds (WWDC26 hero, Apple TV "Star City") for drama, then return to white. Each tile sets its own light/dark context.
- Accent color is the signature **Apple blue (~#0071E3)** used only on the primary "Learn more"/"Buy" pill CTAs — restrained, single accent. Secondary CTA is a blue-outline pill.
- Color comes almost entirely from the **product photography** itself (iPhone 17 pastel finishes, Star City poster reds), not from UI chrome.
- Subtle radial glow/gradient lighting on the black hero (chrome Apple logo lit against black).

## Imagery / Media
- **Hero is the dominant device shot** every time — photoreal product renders against seamless backgrounds with cinematic lighting.
- **Inline autoplaying/scrubbed video** in the hero (note the "Pause apple event hero animation" control — accessibility-first pausable motion). `inline-media.built.js` handles inline video.
- **Endless entertainment gallery**: a horizontal carousel/tab component (tabs "Item 1–9", play/pause control) cycling Apple TV+ and Arcade artwork — its own dedicated script `endless-entertainment-gallery.built.js`.
- Art direction is consistent: products float, perfectly lit, no busy environments. Editorial-grade photography throughout.

## Motion & Interaction
- **Pausable hero animation** — motion is treated as content, with an explicit pause affordance (respects user control / reduced-motion ethos).
- On dedicated product pages (linked from here), Apple's signature is **scroll-driven canvas frame-sequence animation**: a sequence of pre-rendered frames is drawn to a `<canvas>` via `drawImage()`, indexed to scroll position and updated through `requestAnimationFrame`, frames preloaded for smoothness. More recently Apple has shifted some of these to **scroll-scrubbed compressed video** (tie scroll position to video currentTime) instead of JS-drawn frames — cheaper and smoother.
- **Motion discipline** (per design reviews): animation paces the reader and reveals/pins content rather than showing off. Most effects are simple GPU-friendly transforms + timed easing. Content motion (text fade-in, product slide-in, section pinning) is separated from graphical motion.
- **Kinetic typography** on product pages: text that flows/stretches/syncs to scroll to convey a premium feel.
- Carousel auto-advances with manual tab + play/pause control. Mega-menu flyouts animate open on hover/focus.

## Tech / Stack (if known)
- **Apple's bespoke in-house front-end framework** ("AC" — seen in `ac-analytics`, `ac-globalfooter`, `localeswitcher`, `ac-target`). Not React/Vue/Next — a hand-built component system, server-rendered HTML progressively enhanced with per-page `*.built.js` bundles (`head.built.js`, `main.built.js`, `inline-media.built.js`, `endless-entertainment-gallery.built.js`).
- **Shared global components**: `globalheader.umd.js` (UMD module) and `ac-globalfooter` reused across all apple.com properties.
- **Animation**: custom scroll/canvas/video-scrub code (no GSAP / Lenis / Three.js in the homepage bundle — Apple rolls its own).
- **Metrics**: `ac-analytics`, `data-relay`, `ac-target` for A/B / personalization.
- Heavy use of CSS for the actual transitions; JS only tracks scroll position and triggers.

## Notable Techniques (steal-worthy)
- **One idea per viewport band** — full-bleed tiles, single headline, two CTAs. Eliminates clutter; the product is the hero.
- **Per-section theme inversion** (white page → black marquee tiles) for rhythm and drama within one page.
- **Single accent color** (Apple blue) reserved exclusively for primary CTAs — everything else monochrome.
- **Massive type + tight tracking** as the entire visual hierarchy; no decorative dividers needed.
- **Pausable motion** with explicit controls — motion as accessible content, not forced.
- **Scroll-scrubbed video / canvas frame sequences** for product reveals, with frame preloading and `requestAnimationFrame`.
- **Frosted-glass sticky header** as the only persistent nav, with full-width mega-menu flyouts.
- **Clean semantic heading map** (h2 marquee, h3 secondary) — good for a11y and scannability.

## What to steal for a personal portfolio
- Adopt the **white background + near-black text + one accent color** discipline. Reads premium, never dates.
- Structure projects as **full-viewport bands, one project per screen**: oversized bold project name, one-line tagline, "View" + "Live" CTAs. Let the project visual be the hero.
- Use a **single system/grotesk typeface at extreme size contrast** (Inter/SF-like) instead of multiple fonts.
- Reserve your accent color **only for primary actions** (live demo / repo links).
- Add **one tasteful scroll-scrubbed media reveal** on your flagship project — but make it pausable and respect `prefers-reduced-motion`.
- Keep a **sticky frosted-glass header** with section links; that's the only nav you need.
- Invert one or two sections to **dark** for rhythm so the page isn't flat.

## Screenshots
- shots/apple/01-hero.png (WWDC26 black hero + sticky nav + region overlay)
- shots/apple/02-mid.png (iPhone 17 "Magichromatic." tile, blue CTA pills)
- shots/apple/03-lower.png (Endless entertainment carousel, Apple TV+ Star City)
- shots/apple/04-full.png (full-page capture)
