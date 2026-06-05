---
name: Unseen Studio
url: https://unseen.co/
slug: unseen-studio
category: uiux
industry: design-studio
reachable: true
---

# Unseen Studio

**One-liner:** An Awwwards Site-of-the-Month / Studio-of-the-Year homepage that is essentially a single, fully interactive WebGL "world" — a surreal dreamy 3D environment you navigate rather than scroll — making the portfolio itself the proof of the studio's craft.

## Overview
Unseen Studio is a Bristol-based brand, digital and motion studio (projects@unseen.co, +44 0117). The homepage is not a conventional scrolling page — it is an immersive Three.js scene rendering a surreal pastel-pink architectural dreamscape (arches, steps, a single rock/boulder, soft water reflections). The DOM is mostly a thin UI layer floating over a full-viewport `<canvas>`; `getComputedStyle(document.body).backgroundColor` returns `rgba(0,0,0,0)` (transparent), confirming the WebGL canvas is the actual backdrop. The whole thing is gated by an audio-consent entry screen ("ENTER" / "ENTER WITHOUT AUDIO"), framing the visit as entering an experience rather than loading a website. Target audience: brands wanting bold identity + high-craft digital. Overall impression: confident, restrained, gallery-grade — it sells craft by being craft.

## Layout & Information Architecture
Deliberately minimal IA. Primary routes are tiny: Index (home), Projects (`/projects/`), Contact (`/contact/`), plus a separate immersive `World` (`/world/`) and a yearly microsite (`2025.unseen.co` "Wrapped"). The homepage itself is a near-full-bleed 3D stage. UI furniture is anchored to viewport corners/edges rather than flowing in a document grid:
- Top-left: wordmark `unseenstudio`
- Top-center: a small descriptor line ("A BRAND, DIGITAL & MOTION STUDIO")
- Top-right: nav (Index / Projects / Contact)
- Center: oversized headline "Creating the unexpected"
- Bottom corners: "Our 2025 Wrapped" pill (left) and sound/world controls (center-bottom)
Whitespace is enormous; density is near-zero on the home — the 3D scene carries the visual weight. Content depth lives behind Projects/World, keeping the entry uncluttered.

## Navigation
Persistent corner-anchored nav over the canvas (not a sticky bar — items float at edges). A "Toggle Menu" hamburger (`ref=e2`) exposes a fuller menu (Index, Projects, Contact, World) plus a contact/social block (email, phone, Twitter, Instagram, LinkedIn, Dribbble, Behance) — each social link prefixed with a "⮡" glyph as a signature flourish. A dedicated "Toggle Sound" control treats audio as a first-class nav element. Wayfinding is intentionally sparse — the experience leans on exploration over explicit signposting.

## Typography
- **Body/UI:** Neue Montreal (confirmed via computed style: `"Neue Montreal", system-ui, …`) — a clean grotesque used for nav, labels and descriptors, often in small uppercase tracked-out caps.
- **Display headline:** a contrasting high-contrast serif/italic for "Creating the" set against a heavier sans/italic "unexpected" — a serif-italic + grotesque pairing that creates editorial tension. The headline mixes weights/styles within one phrase for rhythm.
- Scale is dramatic: one hero headline dominates the viewport; everything else is intentionally tiny (10–12px tracked caps), so hierarchy is binary — hero vs. micro-labels, almost nothing in between.

## Color & Theme
Tight 2-color story per Awwwards case data: dusty pink **#EDC1CB** and black **#000000**, expressed here as a warm pastel pink/peach gradient environment (sky-to-rose), soft lilac shadows, and near-white architecture. Text sits in black/dark over the light scene. No loud accents — the palette is calm, dreamy, almost skincare-brand soft, which makes the surreal 3D feel inviting rather than cold. Light theme overall; contrast on micro-labels is on the lower side (style over strict AA).

## Imagery / Media
Zero stock photography. Everything visible is real-time rendered WebGL: a surreal architectural dreamscape (arches, staircases, a lone boulder, reflective water plane) with soft global-illumination-style lighting. Per case studies, textures are delivered as KTX2 with DRACO geometry compression for fast load, and headline text is rendered into the 3D scene via troika-three-text (so type can live in 3D space, not just DOM). Optional ambient audio reinforces the "world." Art direction: surreal-meets-believable — dreamy yet grounded.

## Motion & Interaction
This is the heart of the site. From search + Codrops/Three.js-forum coverage:
- **Scroll-driven 3D camera:** scrolling pans/moves the camera through the 3D world rather than scrolling DOM (my DOM-scroll attempts barely moved the visible scene — it's a fixed-stage WebGL experience). The scroll position maps to camera/world progress.
- **GSAP** drives all timeline animation (camera moves, intro reveals, hover tweens) — "a constant across all their projects."
- **Taxi.js** page transitions for seamless route changes (no hard reloads between Index/Projects/World).
- Entry preloader/consent gate doubles as a load-mask while the WebGL world initializes.
- Microinteractions: animated social links with the "⮡" marker, a sound toggle, hover states on nav, and an oversized headline that animates in.
- The separate `/world/` is an "infinite grid" exploration (Awwwards: "World Page – Infinite Grid"), and the `2025.unseen.co` "Wrapped" is its own awarded interactive microsite.

## Tech / Stack (if known)
- **Backend/CMS:** Customized **WordPress** — scripts load from `unseen.co/wp-content/themes/unseen/public/scripts/` (`manifest.js`, `vendor.js`, `theme.js`), i.e. a custom headless-ish WP theme.
- **3D:** **Three.js** + **troika-three-text** (3D text), **KTX2** textures, **DRACO** geometry compression.
- **Animation:** **GSAP** (timelines, camera, hovers).
- **Page transitions:** **Taxi.js** (SPA-like routing).
- **Fonts:** Neue Montreal (+ a display serif).
- Plus an in-house frontend framework wrapping the WebGL layer; analytics via GTM (`G-SHZRDC7G64`) and Demandbase/Apollo B2B tracking.

## Notable Techniques (steal-worthy)
- Audio-consent **entry gate** that doubles as a WebGL preload mask — turns unavoidable load time into intentional ceremony.
- **Transparent DOM over a full-viewport canvas** — UI floats at viewport corners; the 3D scene IS the background.
- **Scroll → camera mapping** instead of scroll → DOM, so the page feels like a place, not a document.
- **3D-rendered headline type** (troika-three-text) so typography can exist inside the scene with depth/lighting.
- **Serif-italic + grotesque** headline pairing mixing styles mid-phrase for editorial tension.
- Ultra-tight **2-color palette** (#EDC1CB / #000) producing a calm, ownable mood.
- **Taxi.js** seamless transitions so the immersive world never hard-reloads.
- KTX2 + DRACO asset pipeline — heavy 3D that still loads fast.

## What to steal for a personal portfolio
- **Make the work the proof.** If you can render even one signature interactive hero (a shader, a 3D object, a clever canvas), it sells your skill more than a wall of screenshots.
- **Corner-anchored UI over a full-bleed background.** Float wordmark / nav / controls at the edges; let the centerpiece breathe. Cheap to do with `position: fixed` even without WebGL.
- **Binary type hierarchy:** one giant hero headline + tiny tracked-out caps for everything else. Instantly looks designed.
- **A 2-color palette** with one warm tint + black. Constraint reads as taste.
- **An intentional intro/load state** (even a 1.5s branded mask) instead of a flash of unstyled content.
- **GSAP for hover/intro tweens** — you don't need Three.js to get 80% of the polish; GSAP + a single signature scroll/hover effect goes a long way.
- Mix a **serif italic with a grotesque** in one headline for editorial character.

## Screenshots
- shots/unseen-studio/01-hero.png (post-entry WebGL hero: "Creating the unexpected")
- shots/unseen-studio/02-mid.png
- shots/unseen-studio/03-lower.png
- shots/unseen-studio/04-full.png
