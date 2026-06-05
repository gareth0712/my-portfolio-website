---
name: Framer
url: https://www.framer.com/
slug: framer
category: uiux
industry: design-tools
reachable: true
---

# Framer

**One-liner:** A pitch-black, motion-first marketing site that uses scroll-pinned live product mockups and a single oversized humanist-geometric display headline to make a no-code builder feel like a premium creative instrument — dogfooding its own engine (the site is built in Framer, animated by Motion).

## Overview
Framer.com is the marketing home for a no-code visual website builder aimed at designers, startups, and Fortune 500 brands. The site is a product-led landing page: hero promise, social proof logo wall, then a sequence of scroll-driven feature theaters (AI, Design, CMS, Collaborate) that show the actual editor UI animating. The whole impression is confident and restrained — near-monochrome, huge type, generous black negative space, and motion doing the heavy lifting rather than decoration. It is a self-demo: the polish is the sales pitch.

## Layout & Information Architecture
- Centered single-column hero on a pure-black canvas; everything else is a wide content area with a left-rail label pattern (the "AI / Design / CMS / Collaborate" sticky labels on the left, large product visuals on the right).
- IA flows: announcement bar → hero ("Build better sites, faster") → CTA pair → customer-logo wall (Dribbble, ElevenLabs, Zapier, Perplexity, Cal.com, Mixpanel, Miro, DoorDash) → "Create, collaborate, and go live" feature section → "Scale without switching tools" → Latest News / shipping log (a grid of "Live" feature cards: Shaders, CMS 3.0, Holo Shader, Auto Translate, Bento, etc.) → large footer.
- Density is deliberately low up top (one headline owns the viewport) and increases downward as product screenshots and a dense shipping-log grid appear. Strong rhythm: alternating breathing room and dense proof.
- Footer is a fat sitemap — 77 links — typical of a mature SaaS, organized by Product / Resources / Community / Company.

## Navigation
- Sticky top nav, transparent over black, persists on scroll. Center-grouped primary links (Product, Teams, Resources, Community, Support, Enterprise, Pricing); brand mark far left; "Log in" + pill "Sign up" CTA far right.
- Several nav items are mega-menu triggers (Product, Teams, Resources, Community, Support are JS-driven `onclick` generics, not plain anchors).
- A thin announcement strip above the hero ("Join us live June 16 10AM PDT for something big") doubles as event marketing and urgency.
- Wayfinding inside feature sections uses the left sticky label column as a section index — as you scroll, the active feature (AI/Design/CMS) is highlighted while its visual plays on the right.

## Typography
- Display/headings: **GT Walsheim** (custom-licensed as "GT Walsheim Framer Medium"), weight 500. H1 renders at a massive **110px**. Geometric grotesque with friendly, slightly humanist curves — gives the brand a warm-but-modern feel rather than cold Helvetica neutrality.
- Body falls back through a system sans stack (`sans-serif`), keeping body text fast and neutral so the headline carries personality.
- Hierarchy is brutal and clear: one giant white H1, a muted-grey supporting paragraph, then section H2/H3 labels (AI, Design, CMS) set small and quiet as a left index — inverting the usual "big section header" pattern so the product visuals dominate.
- Tight leading on the two-line hero ("Build better / sites, faster") for a stacked poster look.

## Color & Theme
- Pure black background (`rgb(0,0,0)`), white headline text (`rgb(255,255,255)`), mid-grey supporting copy. Dark-mode-only, no theme toggle.
- Near-zero chromatic accent in chrome — the site itself is monochrome; all the color comes *from the product screenshots* (the shader gradients, Datalands hero, Polarsteps green, Benjamin blue tag). Smart: the UI frame is neutral so the embedded demos pop.
- CTA contrast play: white pill "Start for free" vs dark-grey "Start with AI" — primary/secondary differentiated by fill weight, not hue.
- Gradients and vivid color are quarantined inside the product-shot cards (shaders, holo, chromatic aberration features), reinforcing "Framer makes colorful things; Framer-the-brand is restrained."

## Imagery / Media
- No stock photography. All media is either real product/editor screenshots or branded customer logos.
- Live, animating editor mockups embedded in scroll sections (canvas with components panel, CMS collection view, breakpoint toolbar) — the product is shown working, not described.
- Shader/WebGL-style hero cards in the shipping log (Logo Shaders, Holo Shader, Chromatic Aberration, Spectrum/CrystalLive) — these showcase GPU effects the builder now ships.
- An explicit "Watch the video" link to YouTube for the long-form demo.
- Art direction is "let the product be the hero image" — confident for a tool company.

## Motion & Interaction
- Scroll-driven pinned sections: the left feature labels stick while right-side product visuals transition through states (this is the signature interaction — a scroll "theater" per feature).
- Heavy use of scroll-triggered reveals and state variants (search/DOM shows many `onclick` interactive generics standing in for Motion-controlled elements).
- Hover microinteractions on the pill CTAs and the dense "Live" feature cards (each card is independently clickable/hoverable).
- Powered by **Motion** (formerly Framer Motion) — spring/tween physics, hardware-accelerated scroll animations (Motion v12 added GPU scroll + oklch color animation). Motion won't show in static screenshots but is the core of the experience: smooth, context-aware transitions rather than CSS keyframes.
- Announcement bar and event CTA give a sense of a living, frequently-shipping product.

## Tech / Stack (if known)
- **Built in Framer itself** (dogfooding) — the marketing site is a Framer-published site.
- **Motion / Framer Motion** for all animation (the library and the site share lineage; Motion's own site is also built in Framer).
- Fonts: GT Walsheim (Grilli Type), self-hosted/licensed as "GT Walsheim Framer Medium".
- React under the hood (Framer outputs React); built-in CMS, analytics, localization, SEO per the hero copy.
- Cookie consent: lightweight bottom-left card ("We use cookies… Okay"), non-blocking.

## Notable Techniques (steal-worthy)
- **Neutral frame, colorful content**: keep the entire site chrome monochrome (black/white/grey) so embedded product imagery and gradients become the only color — instant focus, zero palette-management headache.
- **Inverted section headers as a sticky left index**: section labels are small/quiet on the left and act as a scroll progress index, letting the visuals own the stage instead of a big centered H2.
- **Scroll theaters**: pin a label column, animate the product through states as the user scrolls — a single section delivers a multi-beat demo without clicks.
- **One poster-scale headline (110px)** in a humanist geometric sans does all the brand personality work; body stays neutral system sans for speed.
- **Dogfooding as proof**: the marketing site is built with the product it sells — the smoothness *is* the testimonial.
- **CTA hierarchy by fill, not hue**: white-pill primary vs grey secondary keeps the monochrome discipline while staying clearly ranked.
- **Shipping log as social proof**: a dense grid of dated "Live" feature cards signals velocity and momentum better than a static "features" list.

## What to steal for a personal portfolio
- Go monochrome on the shell (black/white/grey) and let *your project screenshots* supply all the color — this makes a small project set look curated and premium with almost no design effort.
- Use one oversized humanist-geometric headline (think 80–110px on desktop) as the single brand gesture; keep everything else quiet system sans.
- Build one scroll-pinned "theater" for your best project: pin a short label/caption on the left, animate the project through 2–3 states on the right. One well-executed scroll interaction reads as more skilled than ten hover tricks.
- Differentiate primary/secondary CTAs by fill weight (solid pill vs ghost) rather than color, so the palette stays disciplined.
- Add a tiny dated "what I shipped" log grid — even 4–6 cards — to signal momentum and recency.
- Keep cookie/consent and any banners lightweight and bottom-anchored so they never fight the hero.

## Screenshots
- shots/framer/01-hero.png
- shots/framer/02-mid.png
- shots/framer/03-lower.png
- shots/framer/04-full.png
