---
name: Figma
url: https://www.figma.com/
slug: figma
category: uiux
industry: design-tools
reachable: true
---

# Figma

**One-liner:** A design-tool marketing site that dogfoods its own product — the page is essentially a live, multiplayer Figma canvas, with real embedded prototypes, collaborative cursors, and a custom typeface, proving the product by *being* the product.

## Overview
Figma.com is the top-of-funnel marketing homepage for the collaborative interface-design platform. Audience: designers, developers, PMs, and design-system teams (now spanning a full suite — Design, Dev Mode, FigJam, Slides, Draw, Buzz, Sites, Make, Weave, AI). The dominant impression is confident product-led storytelling: instead of static screenshots, the page shows the actual product in motion — embedded interactive prototypes, live multiplayer cursors with name labels, and AI-generated mini-apps from the community. It feels like looking over someone's shoulder inside Figma.

## Layout & Information Architecture
- Wide, centered max-width container on a white canvas with generous vertical rhythm; sections breathe.
- Clear top-down narrative: (1) Hero collage/carousel "Make anything possible," (2) interactive tabbed product demo "Prompt, code, and design...," (3) systems/scale block with three sub-cards, (4) "Ship products, any way you want" accordion, (5) "Explore what people are making" community gallery grid, (6) template carousel, (7) deep mega-footer.
- Section-level color blocking: hero white, a soft mint-green band (Dev Mode), a light-gray band (Ship products) — color zones segment the IA without hard dividers.
- Community gallery is a multi-column card grid (8 real community projects, each linking to a live `*.figma.site` deployment + creator social).
- Footer is a dense, fully-categorized sitemap: PRODUCT / PLANS / USE CASES / RESOURCES / COMPANY plus social row — strong SEO + wayfinding surface.

## Navigation
- Sticky top bar, white, thin bottom border. Left: Figma logo (the colored 5-dot mark). Right: "Log in" (text), "Contact sales" (outline button), "Get started for free" (solid black button), then a hamburger ("Open navigation menu") that drives a mega-menu — so even on desktop the full nav lives behind one toggle, keeping the bar clean.
- "Skip to main content" link present (accessibility).
- Language switcher and cookie-settings controls in footer.
- Wayfinding inside sections via tab components (Prompt/Design/Draw/Build/Publish/Promote/Jam/Present) and expandable accordions rather than separate pages.

## Typography
- Custom proprietary typeface: **figmaSans** (`figmaSans, "figmaSans Fallback", "SF Pro Display", system-ui, helvetica, sans-serif`) — a clean geometric-humanist sans, very neutral/Swiss, low personality by design so the *content* carries the brand.
- Large, tight display headings: h1 at 64px; h2 section heads are big and bold (e.g. "Ship products, any way you want", "Make anything possible, all in Figma").
- Three-level hierarchy: oversized h1/h2 display → bold h3 sub-heads → quiet body and small underlined text-link CTAs ("Explore Dev Mode", "Explore more").
- Sentence case throughout; restrained, no decorative type. Hierarchy is driven by size/weight contrast, not color.

## Color & Theme
- Light theme base: white / near-black text. High contrast, very legible.
- Accent strategy is *restraint*: primary CTA is solid **black** (`rgb(0,0,0)`), not a brand color — the colorful Figma logo dots are the only saturated brand mark in the chrome.
- Color enters through *content*: soft pastel section bands (mint green, light gray), and vivid imagery inside the embedded prototypes and community cards (purple starfields, gradient discs, teal design systems).
- This is a deliberate inversion: the shell is monochrome so the product canvases pop.

## Imagery / Media
- Hero is a **layered collage / carousel** of design-work cards (FOOD WORKS poster, architecture study "collectiv", photo collages) — an art-directed pile of "things made in Figma," with carousel controls (Previous / pause / Next slide).
- Heavy use of **live embedded iframes** (10 on the page): the hero contains an interactive "Geo Garden parallax effect" prototype; the community gallery links out to 8 real deployed `*.figma.site` mini-apps (Teleportation Portal, Pixel Editor, Drum machine, etc.).
- The tabbed demo shows real product UI: an AI "Music Player" being built (Figma Make), a spinning album-disc player prototype, with **multiplayer collaborator cursors** (named labels: Maria, Robin, Amina) overlaid — simulating live co-editing.
- No background video elements (0 `<video>`); motion is iframe/prototype- and animation-driven instead.

## Motion & Interaction
- **Auto-playing hero carousel** with explicit play/pause + prev/next controls (respects user control / a11y).
- **Interactive product tabs** — clicking Prompt/Design/Draw/Build swaps the demo content in place (stateful, no page nav).
- **Accordion expand/collapse** in "Ship products" (aria-expanded toggles) — progressive disclosure.
- **Live collaborative cursors** animating across the embedded canvases (the signature Figma "multiplayer" flourish) — colored cursors with name tags drifting around, selecting elements.
- **Embedded live prototypes** the visitor can actually interact with (parallax effect, deployed community apps) rather than canned GIFs.
- Soft scroll reveal / section transitions as color bands change.

## Tech / Stack (if known)
- **Next.js App Router** — confirmed via `_next/static/chunks/main-app-*.js`, `webpack-*.js`, `polyfills`, `page-*`, `error`, `not-found` chunk naming (App Router signature). No legacy `#__NEXT_DATA__` / Pages-router blob present.
- **Hosted on Netlify** — assets served from `figma.com/_netlify/_next/...`.
- Custom self-hosted webfont **figmaSans**.
- Animation: **Motion** library (motion.dev / Framer Motion lineage) confirmed via `motion` references in the script bundles — drives spring-based tab/accordion/carousel micro-transitions. No GSAP / Three.js / Lenis detected. Also leans heavily on embedded Figma prototype iframes for the richest motion.
- CMS-driven content very likely (community gallery + templates pulled from Figma Community).

## Notable Techniques (steal-worthy)
- **Dogfooding as proof**: embed real, interactive product output (live prototypes / deployed apps) instead of screenshots — the demo *is* the proof.
- **Monochrome shell, colorful content**: black CTA + neutral custom sans so the work inside the cards carries all the color.
- **Multiplayer cursors as brand signature**: animated named cursors instantly communicate "collaborative" without a single word of copy.
- **In-place tabbed/accordion product demos**: tell a multi-step story (prompt→design→build→ship) without page loads or scroll-jacking.
- **Color-banded section zoning**: pastel full-bleed bands segment a long page into chapters without hard rules or boxes.
- **User-control-first motion**: hero carousel ships with visible pause/prev/next — motion that doesn't fight the user.
- **Mega-footer as SEO + IA engine**: exhaustive categorized link map doubles as sitemap and conversion safety-net.

## What to steal for a personal portfolio
- Show, don't tell: embed a *live, interactive* version of one project (real deployed mini-app or prototype) instead of a static thumbnail — far more convincing than a screenshot grid.
- Keep the chrome neutral (one custom/clean sans, a single high-contrast accent button) and let project imagery supply all the color.
- Use full-bleed pastel section bands to chapter a long single-page portfolio without heavy dividers.
- Add a signature microinteraction that encodes who you are in one glance (Figma's cursors = collaboration; pick yours).
- Use in-place tabs/accordions to walk through a project's stages (problem → process → result) without leaving the section.
- Always give auto-playing motion an explicit pause control — it reads as polished and accessible.

## Screenshots
- shots/figma/01-hero.png
- shots/figma/02-mid.png
- shots/figma/03-lower.png
- shots/figma/04-full.png
