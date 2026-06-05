---
name: Active Theory
url: https://activetheory.net/
slug: active-theory
category: uiux
industry: awwwards
reachable: true
---

# Active Theory

**One-liner:** A near-100% WebGL site where the entire interface — logo, navigation, typography, and "page" — lives inside one fullscreen 3D particle cosmos rendered by the studio's own in-house Hydra engine, proving the homepage itself is the portfolio piece.

## Overview
Active Theory is an award-winning creative digital studio (offices in Los Angeles and Amsterdam) known for high-end interactive WebGL experiences, multiplayer/XR work, and multiple Awwwards Site of the Month/SOTD wins (e.g. Pottermore "Discover Your Patronus"). Their own site is a portfolio-as-tech-demo: instead of a conventional scrolling marketing page, you land inside a dark, animated 3D particle field with a glowing circular brand orb at center. There is essentially no HTML body content (no h1/h2, body text is just nav labels and a music player) — virtually everything visible is drawn on a single `<canvas>`. The impression is immediate: "we build things the rest of the web can't." It self-selects an audience of clients who want bleeding-edge experiential work.

## Layout & Information Architecture
- No traditional document flow. `document.body.scrollHeight === window.innerHeight` (566px = viewport) — the page does not natively scroll; navigation/scene transitions happen inside the WebGL world.
- The composition is a centered focal orb (the AT brand mark, a glowing ring/lens) suspended in a particle nebula, with all chrome pushed to the screen edges.
- IA is deliberately minimal and hidden: a top-right pill nav exposes only **Work** and **Contact**. Work expands into five categories rendered as a list: `games`, `multiplayer`, `XR / VR / AI`, `installations`, `websites`.
- Whitespace is "blackspace" — generous empty dark void around the focal element creates a premium, cinematic, low-density feel. Nothing competes with the centerpiece.

## Navigation
- Pattern: minimal **hidden/overlay nav**, not sticky-bar or mega-menu. A small rounded pill in the top-right holds `WORK` and `CONTACT`; top-left holds a `Toggle Audio` control plus a music player (`<<` / `>>` prev/next song, "Song--Artist" label).
- Selecting Work doesn't load a new HTML page — it transitions the WebGL scene to a category list (`-> games`, `-> multiplayer`, `-> XR / VR / AI`, `-> installations`, `-> websites`), so wayfinding is animated/diegetic rather than route-based.
- A video lightbox ("Close Video") is used to play case-study reels in-world.
- Wayfinding relies on motion and the persistent center orb as an anchor rather than breadcrumbs or persistent menus.

## Typography
- Body fallback computes to `Times New Roman` — a strong tell that the real display type is rendered **inside WebGL** (texture/SDF glyphs via their GLUI layer), not as DOM text, so the browser default leaks through for the (empty) HTML body.
- The visible UI labels (WORK, CONTACT, scroll hints) are set in a tight, all-caps, letter-spaced sans at small sizes — restrained and utilitarian, intentionally subordinate to the 3D visuals.
- Hierarchy is established by scale and luminosity in 3D space rather than by classic h1→h3 DOM hierarchy.

## Color & Theme
- Pure dark theme: `body` background is `rgb(0,0,0)`.
- Accent system is a full prismatic spectrum — particle streams flow in yellow → orange → red → blue → violet, reading as a chromatic comet/aurora against black.
- The center orb is a cool blue-white glowing lens/ring with bloom; the Contact pill has a subtle warm amber/orange edge glow.
- High contrast (bright emissive particles on black) plus bloom post-processing gives a luminous, "energy field" aesthetic. Color is used as motion/material, not flat fills.

## Imagery / Media
- No photography or static imagery in the traditional sense. The hero is a real-time **GPU particle simulation** (thousands of additive-blended points) forming flowing ribbons/streams through 3D space.
- Case studies surface as in-world **video reels** (lightbox player).
- Optional **background music** with a custom player (Web Audio API — there are zero `<audio>` elements, so audio is decoded/scheduled in JS) and next/prev track controls. Audio is off by default behind a Toggle.
- Art direction is generative/procedural and cinematic, not editorial.

## Motion & Interaction
- The defining interaction is the persistent, GPU-driven particle field that drifts and reacts continuously — the site is never static.
- WebGL 2.0 render context confirmed (`WebGL 2.0 (OpenGL ES 3.0 Chromium)`), single canvas at full devicePixelRatio resolution (~1887×849 on this display).
- Scene/section changes are diegetic camera + particle transitions inside the 3D world rather than DOM page loads — "scroll" and nav both manipulate the same continuous scene.
- **HydraBloom** post-processing global is present → emissive bloom glow on the orb and particles.
- `GLUIStageInteraction2D` / `GLUIStageInteraction3D` globals → a custom WebGL hit-testing/interaction layer (hover/click handled in GL space, not via DOM events on real elements).
- `XRDeviceManager` global → the same engine is wired for AR/VR device input.
- Cursor stays default `auto` (no custom CSS cursor) because pointer feedback is handled in the WebGL UI layer.

## Tech / Stack (if known)
- **Hydra** — Active Theory's proprietary in-house WebGL framework/engine (confirmed via globals: `Hydra`, `HydraObject`, `HydraCSS`, `HydraBloom`). Built for max graphics throughput with low CPU usage; ships with a node-based GUI so designers author 3D scenes without code.
- **GLUI** — their WebGL-rendered UI layer (`GLUIStage`, `GLUIStage3D`, `GLUIStageInteraction2D/3D`) that draws "DOM-like" UI (text, buttons) as GL geometry.
- **Three.js** under/alongside Hydra for scene rendering (per studio case-study writeups).
- WebGL 2.0 / GLSL shaders for the particle sim and post-processing (bloom).
- Web Audio API for the music player (no `<audio>` tags).
- Bundled as two app scripts (`app.<ts>.js`, `modules.<ts>.js`); analytics via Google Tag Manager (GA4 `G-J7TMDT4F8N`).
- No visible React/Vue/Lenis/GSAP globals — animation/scroll is handled by their own engine loop, not a generic library.

## Notable Techniques (steal-worthy)
- **UI-in-WebGL (GLUI):** rendering navigation and type as GL geometry so the whole interface participates in the 3D scene and post-fx (bloom applies to text too). One unified render pipeline, no DOM/canvas seam.
- **Brand mark as the loading/idle centerpiece:** a single glowing logo orb anchors every state and doubles as the focal point of the particle simulation.
- **Diegetic navigation:** menu selections transition the camera through a continuous world instead of swapping routes — no page reloads, no layout shift.
- **Blackspace minimalism:** pure-black void + one luminous focal object = perceived premium quality with almost zero content.
- **Additive particle ribbons with bloom:** spectrum-colored GPU particles on black, glow via post-processing, for an "energy field" signature look.
- **Optional ambient audio behind a toggle:** sets mood for users who opt in without violating autoplay norms.

## What to steal for a personal portfolio
- You don't need Hydra. Reproduce the *feeling* with **React Three Fiber + drei + postprocessing (UnrealBloom)**: a black scene, a GPU particle system (instanced points / shader), one glowing focal mesh, and an `EffectComposer` bloom pass.
- Make the **logo/avatar the persistent focal anchor** across all sections — it reads as intentional art direction and gives a low-content portfolio gravity.
- Use **blackspace + one accent spectrum** instead of many UI elements; let motion carry the hierarchy. Great for portfolios with few projects.
- Render **headings as part of the canvas** (drei `<Text>`) so type gets the same bloom/parallax as the scene — or, more pragmatically, overlay crisp DOM text on a WebGL background to keep accessibility/SEO (Active Theory sacrifices both — note: zero semantic headings is an a11y/SEO cost you may not want to pay).
- Add an **opt-in ambient audio toggle** (Web Audio API, off by default) for a memorable, polished touch.
- Treat your homepage itself as the strongest case study — if you can build the experience, the site *is* the proof.

## Screenshots
- shots/active-theory/01-hero.png  (centered glowing orb + yellow/orange particle stream on black)
- shots/active-theory/02-mid.png  (orb mid-transition, red/orange ribbon flowing through scene)
- shots/active-theory/03-lower.png  (orb with blue/violet/cyan particle dispersion)
- shots/active-theory/04-full.png  (full-page capture — confirms single-viewport WebGL stage, no scroll flow)
