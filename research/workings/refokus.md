---
name: Refokus
url: https://refokus.com/
slug: refokus
category: uiux
industry: agency
reachable: true
---

# Refokus

**One-liner:** The most-awarded Webflow agency on earth turns a no-code CMS into a WebGL-and-GSAP showcase — proof that platform constraints are no excuse for generic motion.

## Overview
Refokus is a "brand & web agency" that blends award-winning design with conversion strategy and Webflow-based development. The homepage is a vertical narrative built to sell *feeling*: a WebGL hero, a scroll-driven manifesto with blur-to-focus typography, an auto-advancing case-study carousel (Meridian, Heimdall Power, Cula, Arqitel), and an awards section. It is the agency's own portfolio, so every interaction is a sales demo of what they can build for clients. Overall impression: confident, editorial, motion-first, and unusually restrained in color despite the heavy interactivity.

## Layout & Information Architecture
Single-column, full-bleed scroll narrative — not a grid-card dashboard. Sections stack as discrete acts:
1. Hero — animated headline + 3D "R" WebGL canvas on dark purple.
2. Manifesto — long-form positioning copy ("there's a gap between...") on dark, transitioning to a white panel.
3. Big statement type — "We don't just build brands, we shape how people feel" with the last words blurred until in focus.
4. Process — 4 numbered steps (Strategy → Story → Brand → Design/Build).
5. Case-study carousel — orange "Meridian" panel with paginated dots (1-5), service tags per project (BRANDING / WEB DESIGN / 3D ANIMATIONS etc.).
6. Awards section ("Awards are proof of creativity...").
7. Footer — large "Start a Project" CTA, social links, sitemap.
Generous whitespace on the white panels contrasts deliberately with dense, edge-to-edge dark sections. Color blocks (dark purple, white, orange) signal section boundaries instead of dividers.

## Navigation
Minimal persistent top bar: pill-shaped "MENU" (top-left) and "CONTACT" (top-right) buttons over a centered monogram logo that animates ("....." morph dots near CONTACT suggest a loading/transition state). MENU opens a full overlay panel exposing a deep IA: Home, Portfolio, About, a Services group (Branding, Web Design, Webflow Development, Creative Development), a Solutions group (Startups, Enterprise, Venture Capital, Marketing Campaigns), Contact, News, Careers, Refokus Tools, plus social. There is also a small audio/"sound" toggle (Lottie-driven) — a signature agency flourish. Wayfinding leans on the linear scroll story rather than a sticky section nav.

## Typography
**Satoshi Variable** (confirmed via computed style on body and h1) — a geometric-grotesque variable sans used for everything. Massive display scale on statement lines (h1/h2 spanning multiple lines, tight leading). The hero h1 is letter-spaced character-by-character ("M a k e y o u r b r a n d...") for an animated stagger reveal. Strong hierarchy through size jumps, not weight or color: huge display heads, mid-size body manifesto, small uppercase service tags and nav labels. No serif pairing — single-typeface discipline.

## Color & Theme
Section-driven palette rather than one global theme. Dark sections use near-black (`rgb(15,18,21)` text token) and a deep electric purple for the hero. White sections are pure `#fff` with near-black type for max contrast on statement copy. Accent: a vivid orange (case-study panel) used sparingly as a punch. No gradients-as-decoration; color is structural (each act gets its own ground). High contrast throughout — accessibility-friendly on the type-heavy panels.

## Imagery / Media
- **WebGL hero**: a single `<canvas class="c-hero-canvas">` (1887×1954 backing store) renders an animated 3D "R" monogram on the purple ground — the centerpiece.
- **Case-study thumbnails**: real product UI screenshots (Meridian dashboards) composed in an orange frame.
- **Lottie**: drives the audio/sound toggle micro-element.
- Art direction is editorial and brand-led; minimal stock photography. Media exists to demonstrate craft, not decorate.

## Motion & Interaction
- **Per-character headline reveal**: hero h1 split into individual letters (spaced in the DOM) for staggered GSAP entrance.
- **Blur-to-focus scroll typography** (signature): statement lines render with trailing words heavily Gaussian-blurred, sharpening as you scroll ("people feel about them" / "we make people feel them"). Strong, memorable, and on-brand for "shape how people feel."
- **GSAP + ScrollTrigger** confirmed active — scroll position drives section transitions and text states.
- **Auto/paginated case-study carousel** (dot buttons 1-5).
- **Sound toggle** with Lottie animation; custom cursor cues ("Click to enable sound").
- Smooth scroll feel (Webflow + GSAP); BarbaJS-style app navigation documented as part of their stack for page transitions.

## Tech / Stack (if known)
- **Webflow** as the CMS/build platform (confirmed `window.Webflow`; assets on `cdn.prod.website-files.com`).
- **GSAP + ScrollTrigger** confirmed (`window.gsap`, `ScrollTrigger` plugin true) — all scroll/text motion.
- **WebGL** hero (custom canvas; Three.js not exposed on `window` but documented as their renderer of choice — likely bundled/module-scoped).
- Custom code served from `js.refokus.com/main.js` plus Webflow-hosted chunked bundles (`refokus-24-new.schunk.*.js`) — a real build pipeline layered on top of Webflow.
- Documented elsewhere: **BarbaJS** for app-like page transitions, and their own open-source "Refokus Tools" (10k+ clones, 150M req/mo).
- **Satoshi Variable** webfont.

## Notable Techniques (steal-worthy)
- Blur-to-focus scroll reveal on statement copy — ties the literal effect to the brand promise ("make people feel").
- Per-character DOM split for staggered headline animation (each letter a span).
- Section-as-act IA: each scroll act gets its own background color instead of cards/dividers.
- Single variable typeface carrying the entire hierarchy via scale alone.
- WebGL monogram hero on a no-code platform — pushing Webflow far past defaults.
- Audio toggle as an interactive brand flourish (Lottie + custom cursor prompt).
- Minimal persistent nav (just MENU + CONTACT) with a deep full-screen overlay menu.

## What to steal for a personal portfolio
- Use a scroll-driven blur/opacity reveal on one hero statement line — high impact, cheap with GSAP ScrollTrigger + CSS `filter: blur()`.
- Adopt section-as-color-block IA: give each project/about/contact section its own ground color instead of borders.
- Commit to one strong variable font (Satoshi-class grotesque) and drive hierarchy purely with size and letter-spacing.
- Split a headline into per-character spans for a staggered entrance — small code, premium feel.
- Keep the nav to two pills (MENU + CONTACT) and put the full IA in an overlay — keeps the canvas clean for motion.
- If adding 3D, scope it to a single hero canvas (one focal WebGL object) rather than scattering effects.

## Screenshots
- shots/refokus/01-hero.png (purple WebGL "R" hero + animated headline)
- shots/refokus/02-mid.png (blur-to-focus statement: "people feel about them")
- shots/refokus/03-lower.png ("we make people feel them" + orange Meridian case-study panel)
- shots/refokus/04-full.png (full-page capture)
