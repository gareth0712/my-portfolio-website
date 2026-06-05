---
name: Resn
url: https://resn.co.nz/
slug: resn
category: uiux
industry: awwwards
reachable: true
---

# Resn

**One-liner:** A reference-grade WebGL studio site where the entire homepage is a single real-time 3D scene — a revolving black crystalline "drop" you click-and-hold to deform and unlock — proving the studio's craft by being the demo reel itself.

## Overview
Resn is a creative digital agency (est. 2004) with studios in Wellington, NZ and Amsterdam, NL — multiple-time Awwwards Site of the Day / Site of the Month / Site of the Year winners (e.g. "Pioneer – Corn Revolutionized", 2020 SOTY). Their own site is deliberately anti-conventional: there is no scrolling marketing page. The viewport is locked (566×566 in test = no scroll height) and almost the entire surface is a GPU-rendered canvas. The only DOM chrome is a centered wordmark, a "VIEW ALL PROJECTS" link, a "CLICK & HOLD" prompt, and Discover / Audio toggles. The impression is confident and minimal: the work *is* the interaction, not a description of it.

## Layout & Information Architecture
- **Single full-bleed stage**, not a scrolling document. No sections, no fold, no footer in the traditional sense — the page is a self-contained interactive scene.
- Sparse, centered composition: wordmark + tagline dead-center, utility links pinned to corners/top. Maximum negative space; the dark void *is* the layout.
- IA is gesture-driven rather than nav-driven: "CLICK & HOLD" and "Discover" are the entry points into deeper content / project reels rather than a menu tree.
- Density is near-zero by design — every pixel of restraint makes the 3D object the sole focal point.

## Navigation
- No sticky bar, no hamburger, no mega-menu. Wayfinding is reduced to a few text affordances: **VIEW ALL PROJECTS** (top), **Discover** and **Audio** toggles, **CLICK & HOLD** call-to-interact.
- Navigation is experiential: interacting with the crystalline form (click/grab/hold) triggers transitions into different animations and the portfolio, replacing a conventional menu with a "play with the object to explore" model.
- Audio toggle signals this is an audio-reactive / sound-designed experience, not a silent brochure.

## Typography
- Body computed font resolves to generic `sans-serif` (canvas/text rendered through the WebGL + custom text loader pipeline rather than standard web-font CSS, so the real face isn't exposed via `getComputedStyle`).
- Visible treatment: a single clean grotesque-style wordmark "Resn · Creative Studio / Est. 2004", lightweight, wide letter-spacing, all centered. Utility labels ("VIEW ALL PROJECTS", "CLICK & HOLD") are tiny, uppercase, tracked-out micro-type.
- Hierarchy is extreme and simple: one hero line, everything else demoted to whisper-sized labels. Type defers entirely to the 3D object.

## Color & Theme
- Pure dark theme: body background `rgb(0,0,0)`, primary text `rgb(255,255,255)`.
- Near-monochrome palette — black void, white type, and the crystalline object rendered in moody greys with subtle specular highlights. Resn is known for "contrasting moody black-and-white visuals with full-colour distortions" on interaction.
- No gradients in the CSS layer; all tonal range and lighting come from the WebGL material/lighting model. Accent color appears only as reactive bursts when you interact.

## Imagery / Media
- The centerpiece is a **real-time WebGL 3D form** (faceted black crystalline "drop"/blade shape) with live lighting, refraction-like specular highlights, and physics-driven deformation on click-and-hold.
- 6 `<canvas>` elements detected — one main 1258×566 render target plus small auxiliary canvases (likely UI glyphs, audio meter, cursor FX, or render passes).
- No photography on the landing stage; project imagery lives behind the Discover / VIEW ALL PROJECTS gateways. Resn's project work uses their proprietary "Jelly" Web3D pipeline (state-of-the-art 3D + fast load).

## Motion & Interaction
- **Signature interaction: click-and-hold to grab and deform** the crystalline object — pressing distorts/melts it and unlocks different animations; this is the core wayfinding gesture (confirmed by the on-canvas "CLICK & HOLD" prompt and search corroboration).
- Continuous idle motion: the object slowly revolves so the scene is never static.
- Audio-reactive layer (Audio toggle) — sound design tied to interaction.
- Transitions between states (hero → projects) are handled inside the GL scene rather than as page loads, giving seamless, app-like continuity with no white-flash navigation.
- Cursor is a custom pointer (`cursor:pointer` on the Discover/Audio hotspots) integrated with the experience.

## Tech / Stack (if known)
- **Three.js / raw WebGL + GLSL shaders** (`window.THREE` present; 6 canvases; known GLSL usage per Awwwards profile).
- **GSAP / TweenMax** for tweening (per Awwwards tech profile), **GLSL** custom shaders for the material and deformation.
- **jQuery** present (`window.jQuery` = function) — legacy DOM glue.
- **RequireJS (AMD)** module loader (`require.js`, `loader.js`, `main_desktop_extended.js`) + **Modernizr 2.5.3** + **es6-shim** + a custom `text.js` loader. Separate `index_mobile.html` for mobile — desktop and mobile are distinct builds.
- Versioned, fingerprinted asset path (`/20260423030649_1_0_8475ced/…`) indicating a cache-busted build pipeline.
- Analytics/marketing: HubSpot, LinkedIn Insight, GA4 (gtag).
- Architecturally hand-rolled (no React/Next/Vue) — a bespoke WebGL app, not a CMS template.

## Notable Techniques (steal-worthy)
- **The interface *is* the portfolio.** Skipping a marketing page entirely and making the hero a playable 3D object is the strongest possible proof-of-skill for a creative studio.
- **Gesture-as-navigation** — "CLICK & HOLD" replaces a menu; exploration is tactile, not list-based.
- **In-scene state transitions** — moving between "pages" happens inside one persistent GL context, eliminating page-load seams.
- **Radical DOM minimalism over a maximalist canvas** — almost no HTML chrome (one h1 + a few labels), all visual richness pushed to the GPU.
- **Monochrome restraint + reactive color** — black/white default, color reserved as a reward for interaction.
- **Audio-reactive opt-in** — sound as a first-class, toggleable layer rather than autoplay.

## What to steal for a personal portfolio
- **Lead with one hero interaction, not a wall of copy.** A single memorable, physics-y centerpiece (even a modest Three.js/R3F object reacting to cursor/click) outperforms a long scroll for a creative/dev portfolio.
- **Make the interaction a verb on screen.** A tiny "CLICK & HOLD" / "DRAG ME" micro-prompt teaches the gesture without a tutorial — cheap to add, high payoff.
- **Default dark + monochrome, color only on action.** Easy way to look high-end and keep focus on one element; reserve an accent burst for hover/click feedback.
- **Strip the DOM, push richness to canvas.** One centered wordmark + 2–3 micro-labels is enough chrome if the centerpiece carries the weight.
- **Persistent scene, seamless transitions.** If feasible, animate between "sections" inside one canvas/state machine instead of hard route changes — feels like an app, not a site.
- **Provide an audio toggle, never autoplay.** Adds atmosphere on demand while respecting the user.
- Reality check: this approach demands real WebGL/shader skill and a mobile fallback build (Resn ships a separate `index_mobile.html`). For a junior portfolio, a scoped React-Three-Fiber hero + conventional content below is the pragmatic 80/20 version.

## Screenshots
- shots/resn/01-hero.png (crystalline form, centered wordmark, VIEW ALL PROJECTS, CLICK & HOLD)
- shots/resn/02-mid.png (no-scroll — same locked stage)
- shots/resn/03-lower.png (no-scroll — same locked stage)
- shots/resn/04-full.png (full-page = single viewport)
- shots/resn/05-discover.png (after Discover interaction, object deformed/dimmed)
- shots/resn/06-interact.png (interaction state)
