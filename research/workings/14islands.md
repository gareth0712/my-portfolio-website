---
name: 14islands
url: https://14islands.com/
slug: 14islands
category: uiux
industry: agency
reachable: true
---

# 14islands

**One-liner:** A Stockholm/Reykjavík creative-tech studio whose own site is a master-class in restrained, editorial WebGL — they author the very tooling (r3f-scroll-rig, Lenis-driven) the rest of the industry copies, then deploy it with a near-monochrome, type-led calm that makes the motion feel premium rather than gimmicky.

## Overview
Portfolio/agency site for a high-end design-and-technology studio (clients: Cartier, Google, United Nations, Spotify, PolyAI, Neko Health). Multiple Awwwards SOTD wins. The aesthetic is deliberately quiet — white background, black text, oversized type — so curated case-study imagery and WebGL scroll-sync do the talking. It reads confident and editorial, not flashy; the sophistication is in the engineering and the discipline, not loud color.

## Layout & Information Architecture
- Asymmetric editorial grid. Hero splits the viewport: giant left-aligned display headline ("Design & Technology") vs. a small right-column intro paragraph ("WE DESIGN AND BUILD PREMIUM DIGITAL PRODUCTS..."). This deliberate imbalance is a signature.
- A second statement block ("Lovable Products — from vision to launch") uses a duotone two-weight treatment: half the words light grey, half near-black, as emphasis within one phrase.
- Work section is the spine: a featured 2-column case-study grid (large thumbnails, each titled `Project — Industry`, e.g. "Galxe — Web3", "Pluto — AR, VR, XR Tech"), then a denser overflow list (h3-level rows) of secondary projects — clear primary/secondary tiering done purely with heading level + thumbnail size.
- Generous whitespace; sections breathe. Density rises intentionally as you scroll into the long-tail project list.
- Footer: email CTA as a heading (`hello@14islands.com`), spaced-out social links (Instagram / X / LinkedIn / Dribbble), privacy.

## Navigation
- Sticky top bar, ultra-minimal: wordmark "14islands" left; WORK / SERVICES / CULTURE / JOURNAL / AI / CONTACT right, CONTACT pushed to the far edge.
- Nav labels rendered with wide letter-spacing (snapshot shows "W O R K", "S E R V I C E S") — a tracking treatment that signals editorial/luxury.
- No hamburger on desktop; flat, all-visible IA (6 links). Wayfinding is trivially simple — the site trusts its small surface area.

## Typography
- **BentonSans** (custom-licensed grotesque sans, confirmed via computed style) for everything — single-typeface system, no pairing. Tight, neutral, Helvetica-adjacent but warmer.
- Massive display scale: hero headline spans nearly full viewport width per word, lines deliberately allowed to bleed/clip at the right edge ("Technolog…") for a cropped-poster effect.
- Hierarchy built almost entirely from **size + weight + color**, not multiple families: huge display H1, small all-caps tracked labels (CREATIVE AGENCY), body in calm grey.
- Per-letter spacing artifacts in the DOM snapshot ("L o v a b l e", "Design Technology y &") reveal headlines are split into individual letter/word spans — scaffolding for staggered character-reveal animations.

## Color & Theme
- Light theme. Body bg `rgb(255,255,255)`, text `rgb(7,7,7)` — essentially pure black-on-white. Very high contrast, accessible by default.
- Near-zero chrome color. The only "accent" is a warm orange used sparingly (cookie-banner copy). Brand restraint is the point.
- All color richness is delegated to case-study thumbnails (cobalt blues, oranges, gradients) — the UI frame stays neutral so the work pops. Classic gallery-wall strategy: white walls, colorful art.

## Imagery / Media
- High-production case-study thumbnails: product photography, branded 3D renders, gradient/abstract pieces — each art-directed to its client (Galxe deep-blue device shot, Pluto clean white product-on-grey).
- A single global `<canvas>` (one WebGL context for the whole page, confirmed: 1 canvas) renders meshes that track DOM elements — images are progressively enhanced into WebGL planes for transitions/hover/scroll-sync rather than each being its own canvas.
- Progressive enhancement is core: site renders without JS, gets fancier hover states without WebGL, and full cinematic treatment with WebGL.

## Motion & Interaction
- **Lenis smooth scroll** (confirmed: `lenis` + `js-smooth-scrollbar-disabled` classes on `<html>`) — buttery inertia scrolling on the main thread.
- **r3f-scroll-rig** (their own open-source lib, confirmed by `js-has-global-canvas` class): one WebGL canvas syncs Three.js meshes 1:1 with DOM element scale/position on scroll, enabling image distortion, parallax, and seamless WebGL transitions without per-image canvases.
- Headlines split into per-character/word spans for staggered reveal-on-scroll (inferred from spaced-letter markup).
- Hover states on work thumbnails (WebGL-enhanced when supported); a "dark cinema mode" showreel as a progressive-enhancement reward.
- Motion philosophy: CSS-first wherever possible for performance; WebGL only where it earns its weight.

## Tech / Stack (if known)
- **Next.js (Pages Router)** — confirmed: `_next/static`, `#__NEXT_DATA__`, `_buildManifest`/`_ssgManifest` (SSG), `pages/index`, `pages/journal`, `pages/culture` chunks.
- **react-three-fiber + Three.js** via their own **@14islands/r3f-scroll-rig**.
- **Lenis** (darkroom.engineering) for smooth scroll.
- Historically **Framer Motion + Lottie** for 2D motion; **GTM + GA4** analytics (`G-W6GGR8M7C6`, `GTM-N9NFLT6F`).
- **BentonSans** self-hosted font.

## Notable Techniques (steal-worthy)
- **One global WebGL canvas tracking the DOM** (r3f-scroll-rig) instead of many canvases — huge perf win; keeps semantic HTML/CSS layout and enhances it.
- **Progressive enhancement as a design system**: no-JS → CSS hover → WebGL cinema, three graceful tiers.
- **Single-typeface hierarchy**: a whole system from one font via extreme size jumps + weight + grey/black duotone, no pairing.
- **Asymmetric hero**: giant headline vs. tiny intro paragraph in opposing columns — instantly editorial.
- **Cropped/bleeding display type**: letting a headline word run off the right edge for a poster/print feel.
- **Neutral frame, colorful content**: pure B/W UI chrome so case-study imagery carries all the color.
- **Two-weight phrase emphasis**: grey + black words inside one line to direct the eye.

## What to steal for a personal portfolio
- Go **monochrome on the chrome** (white/black) and let project thumbnails supply the color — looks expensive, ages well, accessible by default.
- Build your whole type system from **one good grotesque** at wildly different sizes instead of pairing fonts.
- Use an **asymmetric hero**: oversized statement headline + a small intro blurb in the opposite column.
- Tier your work into **featured (big 2-col) + overflow (small list)** using only heading level + thumbnail size — no extra UI.
- Add **Lenis smooth scroll** for instant premium feel; lightweight, framework-agnostic — the cheapest "high-end" upgrade.
- If you want WebGL, reach for **r3f-scroll-rig** so you keep normal HTML/CSS layout, enhance it, and ship a no-JS/no-WebGL fallback.
- **Wide letter-spacing on nav labels** is a one-line CSS change that immediately reads as luxury/editorial.

## Screenshots
- shots/14islands/01-hero.png
- shots/14islands/02-mid.png
- shots/14islands/03-lower.png
- shots/14islands/04-full.png
