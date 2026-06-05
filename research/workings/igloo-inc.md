---
name: Igloo Inc
url: https://www.igloo.inc/
slug: igloo-inc
category: uiux
industry: awwwards
reachable: true
---

# Igloo Inc

**One-liner:** A fully WebGL-rendered, scroll-scrubbed 3D experience where a procedurally-generated ice/igloo structure assembles and illuminates as you scroll — Awwwards SOTD (7.92), Webby winner for Best Visual Design.

## Overview
Igloo Inc is the studio/brand site for a Web3-adjacent creative house. The entire page is a real-time 3D scene: a crystalline igloo sits on a desaturated snowy/lunar landscape under heavy atmospheric fog. There is almost no conventional HTML — the homepage DOM is tiny (~3KB, 3 divs, no body text, single Vite JS bundle). Scroll does not move a document; it scrubs a 3D timeline that "grows" and lights up the structure. The impression is cinematic, cold, premium, and deliberately restrained — closer to a game intro or product film than a website.

## Layout & Information Architecture
- Single full-viewport "stage" — the 3D canvas is pinned; scrolling drives the animation rather than translating content down the page (the full-page screenshot equals the viewport, confirming a fixed WebGL stage).
- UI chrome is reduced to four corner anchors over the 3D scene: brand wordmark "IGLOO" (top-left), a tagline/date line ("© November 11 2024" / "All Rights Reserved"), and a small right-aligned nav/credits cluster (top-right).
- Extreme whitespace/negative space — the landscape and fog are the layout. Content density is near-zero by design; the structure is the focal point and everything else floats at the edges.

## Navigation
- No traditional nav bar, no hamburger, no mega menu. Wayfinding is implicit: scroll = progress through the build sequence.
- Minimal text links pinned to the top-right corner overlay. Navigation is event/state-driven inside the WebGL app, not anchor-based document navigation.
- This is "experience-first" IA — you are guided by motion and reveal, not by a menu.

## Typography
- Body computed font resolves to **Times New Roman / serif** — an unusual, editorial choice against a tech-heavy 3D scene. The serif gives the cold sci-fi visuals a literary, archival feel (the "© date / All Rights Reserved" framing reads like a manifesto plate).
- The "IGLOO" wordmark is set in a wide, geometric, all-caps sans — high contrast against the serif microcopy.
- Hierarchy is achieved by scale and position (big logo, tiny serif metadata in corners) rather than a deep type scale. Text is sparse and treated as overlay UI, not content.

## Color & Theme
- Monochrome-cold palette: computed body background is `rgb(160,165,177)` — a blue-grey fog tone. Essentially **two colors**: icy white/silver for the structure, cool grey-blue for the environment and atmosphere.
- Accent = light itself. The igloo's blocks emit a warm-white inner glow that intensifies on scroll; the lit "doorway" is the single warm focal accent against the cold field.
- Chromatic aberration is used as a color/edge treatment (per the case study) — subtle RGB fringing that adds a lens/optical realism.

## Imagery / Media
- 100% real-time 3D, no photography. The igloo is built from procedurally-generated ice crystals — the team wrote a custom algorithm mimicking ice-crystal growth: pick a base shape, then "grow" a detailed ice structure inside it (each project can be represented as a unique grown crystal).
- Heavy volumetric fog, displaced terrain (snow/regolith), and physically-believable subsurface/emissive lighting on the ice blocks.
- Assets authored in Houdini (procedural growth) and Blender; shaders hand-written for the ice and atmosphere.

## Motion & Interaction
- **Scroll-scrubbed assembly**: scrolling drives the igloo from a partial pile of blocks → a fully domed, glowing structure (clearly visible across the hero → mid → lower → full screenshots, where blocks grow and brighten).
- Real-time intro animation that flows seamlessly into the interactive scene (no hard cut between loader and experience).
- Custom shaders for ice, emissive glow, and atmospheric fog; chromatic aberration as a global post-process.
- Infinite-scroll feel and continuous transitions (per Awwwards tags: animation, infinite scroll, transitions, 3D). Interaction is GSAP-timeline-driven rather than CSS.

## Tech / Stack (if known)
- **Three.js** (WebGL renderer) + **three-mesh-bvh** (fast raycasting/collision on dense geometry).
- **Svelte** for app/UI shell, **Vite** for bundling (confirmed by single `index-[hash].js` bundle and tiny DOM).
- **GSAP** for animation/scroll timelines; vanilla JS glue; custom GLSL shaders.
- 3D pipeline: **Houdini** + **Blender**; design in Figma / Photoshop / Affinity Photo.
- Notably the **UI is implemented in WebGL**, not DOM — which is why the HTML is nearly empty (no canvas/divs/text exposed to the DOM inspector at eval time).

## Notable Techniques (steal-worthy)
- Procedural-growth algorithm to generate unique 3D objects per project/item (one system, infinite bespoke visuals).
- Scroll as a scrubber for a 3D timeline instead of document translation — pinned stage, animation tied to scroll progress.
- Rendering UI/text inside WebGL for unified post-processing (chromatic aberration applies to everything uniformly).
- Two-color cold palette + emissive light as the only accent — restraint that makes the glow read as the "CTA."
- Serif microcopy over sci-fi 3D for an editorial, archival tone — deliberate genre clash.
- Seamless loader-to-experience: the intro animation is the load, not a spinner.

## What to steal for a personal portfolio
- **One hero centerpiece, scroll-scrubbed.** You don't need a full WebGL site — pin one 3D/Canvas object and tie a GSAP timeline to scroll progress for a memorable above-the-fold moment.
- **Corner-anchored chrome over a full-bleed stage.** Logo top-left, meta top-right, nothing in the middle — lets a single visual dominate.
- **Two-color discipline + a single emissive accent.** A cold neutral field where the only "color" is light reading as the focal point/CTA.
- **Editorial serif for metadata** (dates, credits, copyright) over a modern/3D visual — instant high-end gallery feel, costs nothing.
- **Procedural variety from one system** — if you have N projects, generate N variations of one shape/visual rather than sourcing N assets.
- Performance reality check: this is heavy. For a portfolio, fake it with a lighter pinned canvas or a video-scrubbed sprite sheet rather than full Three.js + custom shaders.

## Screenshots
- shots/igloo-inc/01-hero.png — initial igloo (partial blocks, dim glow) on foggy landscape
- shots/igloo-inc/02-mid.png — mid-scroll, structure growing, blocks brighter
- shots/igloo-inc/03-lower.png — lower scroll, more assembled and more illuminated
- shots/igloo-inc/04-full.png — domed/complete igloo with glowing entrance
