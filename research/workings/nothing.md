---
name: Nothing
url: https://nothing.tech/
slug: nothing
category: uiux
industry: hardware
reachable: true
---

# Nothing

**One-liner:** A consumer-electronics storefront that turns a Shopify commerce site into a brand experience — dot-matrix typography, transparent-hardware art direction, and frosted-glass product cards that pin over full-bleed video, making "buy a phone" feel like browsing a design object.

## Overview
Nothing's UK site (`nothing.tech`) is the homepage/storefront for the London hardware brand (Phone, Ear, Headphone, Watch, CMF sub-brand). It is a headless Shopify storefront, not a marketing microsite, yet it reads like an editorial design portfolio. The whole homepage is a vertical stack of full-bleed product "scenes" (video or transparent-hardware photography) each anchored by a glassmorphic card with a campaign headline and a single DISCOVER CTA. Overall impression: confident, restrained, instantly recognizable — every detail (font, dot grid, parenthetical naming `phone ( 3 )`, monochrome palette) reinforces the brand's retro-futurist "transparent tech" identity. Audience: design-conscious consumers and tech enthusiasts.

## Layout & Information Architecture
- Single long-scroll homepage = a sequence of full-viewport product scenes (Headphone (a)/Charli XCX campaign → headphone (a) → phone (4a) pro → headphone (1) → ear (3) → phone (4a) → phone (3)). Each scene is essentially a slide.
- Content is overlaid on the media via a **glassmorphic card** consistently placed (bottom-right on hero, centered lower down). Card contents follow a fixed template: small mono label (product name) → serif headline (benefit) → fine-print subhead → black pill CTA → small product cutout image top-right.
- Background is a flat near-white (`#F5F5F5`) carrying a **regular dot-matrix grid** — the connective tissue between scenes; sections occasionally flip to pure black (phone (3)) for contrast.
- Generous whitespace, low text density. Body classes confirm a utility-first layout: `min-h-svh overflow-x-hidden scroll-smooth bg-grey-lightest antialiased`.
- IA for commerce lives behind the hamburger: SHOP ALL, PHONES, AUDIO, WATCHES, ACCESSORIES, CMF, ABOUT, SUPPORT, plus OFFERS, store/locale switchers, NEWSLETTER, and a footer with PLAYGROUND, CAREERS, COMMUNITY and social links.

## Navigation
- **Fixed** top header (`position: fixed`), frosted/translucent pill bar: hamburger (left), centered wordmark "NOTHING (R)" in the dot-matrix typeface, cart (right). Minimal by design — the full nav and commerce taxonomy hide behind the hamburger menu rather than a persistent mega-nav.
- A dismissible **offers banner** sits above the header; a **geo/store-locator modal** ("Looks like you're in: JAPAN / But you're browsing the store for: UNITED KINGDOM") interrupts on entry with GO TO / STAY ON choices — locale-routing is a first-class concern (jp.nothing.tech etc.).
- Wayfinding is scene-driven: you orient by product, not by a section menu. `scroll-smooth` is enabled.

## Typography
- **NType82** is the single typeface family across body and headings (`getComputedStyle` returns `NType82-Regular` on body and h2). NType82 is Nothing's bespoke type system — its display style is a **dot-matrix / LED-segment** look (seen in the wordmark and the glitchy "headphone ( a )" labels), with a cleaner text cut for running copy.
- Headline copy in the cards renders in a **serif** (e.g. "Five days of back-to-back tracks", "Get live delivery updates with the new Glyph Bar") — an unusual dot-matrix-label + serif-headline pairing that gives an editorial, almost print feel.
- Signature treatment: parenthetical product naming with letter-spaced parens — `phone ( 3 )`, `headphone ( a )`, `ear ( 3 )`, `NOTHING ( CHARLI XCX )`. Labels are uppercase, tracked-out, small.

## Color & Theme
- Strict **monochrome**: near-white `#F5F5F5` base, pure black text (`rgb(0,0,0)`), black pill CTAs with white label. Sections invert to **pure black** for emphasis.
- Effectively no chromatic accent color — color enters only through the product photography (transparent casings, the pink phone (4a), campaign imagery). The brand's "red dot" trademark glyph is the only spot accent.
- Contrast is high and deliberate (black-on-white, white-on-black). Glassmorphic cards use a subtle white-to-translucent gradient that lets the media bleed through the edges.

## Imagery / Media
- **Full-bleed autoplay video** hero (Charli XCX / Headphone (a) campaign, "Shot by Aidan Zamiri in London") — the site is explicitly art-directed/credited like a fashion editorial.
- **Transparent-hardware product photography**: phones/earbuds shot to show their see-through internals — the core of Nothing's visual identity.
- Small **product cutout images** float in the top-right of each card, layered over the scene behind.
- Consistent art direction: studio lighting, monochrome wardrobe, the dot grid as a unifying graphic device.

## Motion & Interaction
- **Pinned/sticky scroll storytelling**: as you scroll, full-bleed media stays fixed while the glassmorphic content card slides/pins over it, then releases to the next scene — a slideshow-of-products feel without a carousel.
- Autoplay hero video loops silently behind the UI.
- Microinteractions on the dot-matrix labels (the "headphone ( a )" text renders with a deliberate pixel/segment glitch styling per the type system).
- `scroll-smooth` for eased scrolling; hover states on the black pill CTAs and underlined text links ("STAY ON UNITED KINGDOM").
- Note: no GSAP/Lenis/Three.js/Framer/Swiper script tags were detected in the DOM — motion is achieved with the framework's own bundle (`main.[hash].js`), CSS, and likely intersection-observer/scroll-driven techniques rather than a named animation library. (Animation libs can be tree-shaken into the main bundle, so absence of a separate tag isn't proof, but no global `window.gsap` was present.)

## Tech / Stack (if known)
- **Shopify Hydrogen on Oxygen** (headless): `window.Shopify === true`; an Oxygen/Shopify-CDN asset was present (`oxygen: true`); hashed React/Remix-style bundle `main.MTc5ZjUxNDU4MQ.js`. Hydrogen is Shopify's React framework (Remix-based) for custom storefronts deployed on Oxygen.
- **Utility-first CSS** (Tailwind-style): body classes `min-h-svh`, `overflow-x-hidden`, `scroll-smooth`, `bg-grey-lightest`, `antialiased`, plus semantic tokens like `type-body`, `size-full`.
- **Custom font**: `NType82-Regular` (Nothing's proprietary type system).
- Heavy marketing/analytics layer: GTM, GA4 (`G-LBN1R4YF9V`), Meta Pixel (`fbevents.js`), Microsoft Clarity, TikTok pixel (`ttq`), Snap (`scevent.min.js`), Klaviyo (`fender_analytics` bundles), reviews widget.
- Multi-locale architecture (jp.nothing.tech, geo store-routing modal).
- Subdomains hint at a broader ecosystem: `playground.nothing.tech`, `careers.nothing.tech`, `nothing.community`.

## Notable Techniques (steal-worthy)
- **A single bespoke typeface carrying the whole brand** — display/dot-matrix + text cuts of one family, so every page feels unmistakably "Nothing" with zero accent color needed.
- **Dot-matrix grid as a global background texture** — cheap to implement (repeating CSS background), enormous brand payoff; ties disparate scenes together.
- **Glassmorphic content card over full-bleed media** as a repeatable component — same template (mono label / serif headline / subhead / pill CTA / product cutout) reused per product, giving consistency + production speed.
- **Pinned-scroll product slideshow** instead of a carousel — turns a flat catalog into a narrative scroll.
- **Mono/dot-matrix-label + serif-headline pairing** — an unexpected, editorial type combination most commerce sites never try.
- **Parenthetical, letter-spaced naming convention** (`phone ( 3 )`) as a pure-typography brand signature.
- **Light/dark section inversion** to pace a long scroll and spotlight flagship products.
- **Editorial credits** ("Shot by … in London") that frame products as culture, not SKUs.

## What to steal for a personal portfolio
- Pick **one distinctive typeface** (or a tight pairing) and let it do 90% of the branding — resist adding accent colors. A monochrome palette + one strong type voice reads as more confident than a rainbow.
- Add a **subtle global background texture** (dot grid, fine lines) via a repeating CSS background to unify otherwise plain sections — low effort, high cohesion.
- Build a **single reusable "scene card"** component (label / headline / sub / CTA) and reskin it per project, rather than bespoke layouts — faster to ship, more consistent.
- Use **pinned/sticky scroll** to walk visitors through projects one at a time instead of a grid wall; alternate light/dark sections to control pacing on a long page.
- Adopt a small **naming/punctuation tic** (Nothing's parentheses) as a cheap, memorable identity hook.
- You don't need GSAP/Three.js to feel premium — `scroll-smooth`, CSS glassmorphism, sticky positioning and an autoplay video get most of the way.

## Screenshots
- shots/nothing/01-hero.png — frosted header + full-bleed Charli XCX video + glassmorphic Headphone (a) card
- shots/nothing/02-mid.png — dot-grid background, headphone ( a ) card with serif headline + product cutout
- shots/nothing/03-lower.png — phone ( 4a ) Glyph Bar card and the light→black section inversion for phone ( 3 )
- shots/nothing/04-full.png — full-page capture
