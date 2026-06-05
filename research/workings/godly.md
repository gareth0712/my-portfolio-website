---
name: Godly
url: https://godly.website/
slug: godly
category: uiux
industry: awwwards
reachable: true
---

# Godly

**One-liner:** A ruthlessly minimal, full-bleed masonry feed of 1,000+ hand-picked websites where the curated work is the entire UI — the chrome disappears and every card is a live, hover-playing preview of award-winning design.

## Overview
Godly (godly.website) is a curated web-design inspiration gallery — a hand-picked collection of 1,000+ AI, Web3, portfolio, agency and product sites, updated frequently. The audience is designers and front-end developers hunting for reference-grade layout, motion and storytelling. The defining stance: the site itself gets out of the way. There's no sidebar, no heavy filter rail above the fold, no marketing fluff — just an immediate, edge-to-edge grid of high-resolution site previews. The brand voice ("Astronomically good", lightning-bolt mark) is playful but the execution is restrained and confident. It reads as a tool built by people who study these sites for a living.

## Layout & Information Architecture
- **Masonry / multi-column card feed** as the primary (and essentially only) surface. On desktop it renders as a flex-based multi-column grid of cards; each card is a website thumbnail at varying aspect ratios, giving the masonry rhythm.
- **Infinite scroll** — the snapshot exposed 138+ cards on initial load (refs e10–e292) and the feed keeps appending. Content is the navigation.
- **Hero is inline, not a separate band**: the "Astronomically good web design inspiration" H1, lightning logo, Subscribe and "Get design" CTAs sit *inside* the grid as a centered text cell, surrounded by site cards rather than stacked above them. This is a clever IA move — the value prop is framed by live proof of quality.
- **Sponsored slots** are woven into the grid (e.g. "Web analytics in 2026", visitors.now placements) styled with a small "Sponsored" pill so they read as native cards without deception.
- **Whitespace**: generous gutters, white background, cards float with subtle radius. Density is high (many cards visible) but never cramped because each card is self-contained and the gutters are consistent.

## Navigation
- **Floating pill nav, top-left**, glassmorphic/translucent: lightning logo + "Index" + "Info", with a "Subscribe +" pill top-right. Minimal — two destinations plus subscribe.
- No sticky mega-menu, no hamburger needed at desktop. Wayfinding is the feed itself; you don't navigate *to* content, you scroll *through* it.
- Each card is a dual-link: the thumbnail/outbound link goes to the real site (with `?ref=godly` attribution), and a paired link routes to Godly's own detail page (`/website/<slug>-<id>`) — so every entry has both an outbound and an internal canonical view.
- A floating circular "F" button (bottom area, `expanded=false`) acts as a filter/menu toggle that expands on demand rather than occupying permanent real estate.

## Typography
- **Single typeface: Inter** (`Inter, sans-serif`) across the whole site — body and H1 both. No display-font pairing; the restraint is intentional so the curated thumbnails carry all the visual variety.
- H1 is deliberately *small* — `20px / weight 500` — not a giant hero headline. Godly treats its own copy as a quiet label, not a billboard, which reinforces "the work is the hero."
- Global negative letter-spacing `tracking-[-0.02em]` and `antialiased` for a tight, modern, slightly condensed feel typical of 2020s product design.
- Near-pure black text (`rgb(0,0,0)`) on pure white — maximum hierarchy clarity with minimal type sizes.

## Color & Theme
- **Monochrome shell**: pure white background (`#fff`), pure black text. The UI itself is essentially colorless by design.
- **All color comes from the content** — the site thumbnails supply the entire palette, so the page looks vivid and ever-changing while the chrome stays neutral. This is the core color strategy: be a white gallery wall, let the art be loud.
- Accent: the black lightning-bolt mark and black pill CTAs are the only strong brand color anchors. Translucent/glass pills for nav.
- No gradients in the shell; gradients appear only inside the curated card previews.

## Imagery / Media
- Thumbnails are served as **CSS `background-image`** from a Cloudflare R2 bucket at a fixed render width (`/images/480/<uuid>.jpg`), lazy-loaded as cards enter the viewport (initial DOM had 0 `<img>`/`<video>` — proof of aggressive lazy/virtualized loading).
- Cards show **live preview playback on hover** — the screenshots reveal play/pause toggles on cards, indicating short looping video/motion captures of each site so you see the actual animation, not just a static frame. This is the signature "see it move" feature that sets Godly apart from static galleries.
- Art direction = zero. Godly imposes no overlay, frame styling or filter on thumbnails; each preview is shown raw and full-bleed so the original designer's intent is preserved.

## Motion & Interaction
- **Hover-to-play previews**: the strongest interaction — hovering a card swaps the static thumbnail for a looping motion capture of the live site, with a play/pause control. Turns the grid into a wall of moving showcases.
- **Smooth/inertial scrolling** feel consistent with a Lenis-style smooth-scroll layer over an infinite-append feed (full-page screenshot couldn't expand, indicating JS-driven virtualized scroll rather than native document height).
- **Subtle card hover lift / reveal**: cards surface metadata (site name) on hover; the floating "F" filter expands on click.
- Microinteractions kept minimal and fast — no page transitions between feed states, content streams in. `cursor-default` is set globally (the team chose not to ship a custom cursor here, betting on content over gimmick).

## Tech / Stack (if known)
- **Tailwind CSS** — confirmed from utility classes on `<body>`: `flex flex-col min-h-dvh w-full overflow-x-hidden antialiased tracking-[-0.02em] cursor-default bg-white text-black relative`.
- **Inter** as the only web font.
- **NOT Next.js** — no `#__next` root and no `__NEXT_DATA__` script present. Likely Astro, SvelteKit, or a custom Vite SSR build (no Svelte hydration markers found either, so leaning Astro or vanilla/Vite SSG with a hydrated feed island).
- **Cloudflare** end-to-end: thumbnails on Cloudflare **R2** (`pub-*.r2.dev`), analytics via **Cloudflare Web Analytics** (`static.cloudflareinsights.com/beacon`).
- **visitors.now** analytics widget (`cdn.visitors.now/v.js`) — also one of its sponsors.
- Outbound links carry `?ref=godly` UTM attribution; internal detail pages at `/website/<slug>-<id>`.

## Notable Techniques (steal-worthy)
- **Content-as-chrome**: make the curated work the entire interface; keep your own UI a neutral white gallery wall so the content supplies all color and energy.
- **Hero embedded inside the grid**, not stacked above it — your value prop is literally surrounded by proof.
- **Hover-to-play motion previews** instead of static thumbnails — show the work moving.
- **Lazy `background-image` from an object store (R2) at a fixed width** — cheap, fast, no layout-shift image tags, virtualized so initial DOM is near-empty.
- **Dual-link cards** — one link out (with ref attribution), one link to your own canonical detail page — capturing SEO value while sending traffic onward.
- **Tiny, quiet self-typography** (20px H1) — confident restraint; the brand whispers so the gallery shouts.
- **Native sponsored cards** with a small honest "Sponsored" pill — monetize without breaking the grid rhythm.

## What to steal for a personal portfolio
- **Be the white wall.** A neutral monochrome shell (white bg, black Inter, tight `-0.02em` tracking) lets project thumbnails carry 100% of the color — far more striking than a themed, busy chrome.
- **Hover-to-play project previews.** Replace static project screenshots with short looping motion captures on hover; instantly communicates that your work is interactive/animated.
- **Floating glass pill nav + a single expandable filter button** ("F") keeps navigation present but near-invisible — perfect for a content-forward portfolio.
- **Embed the intro inside the work grid** rather than a tall hero — visitors see your projects within the first screen, your bio framed by them.
- **R2/object-store background-image thumbnails at a fixed width**, lazy-loaded — a cheap, fast, layout-shift-free pattern any static portfolio can copy.
- **Smooth-scroll (Lenis) over an append-on-scroll feed** for the premium inertial feel without building heavy page transitions.

## Screenshots
- shots/godly/01-hero.png
- shots/godly/02-mid.png
- shots/godly/03-lower.png
- shots/godly/04-full.png
