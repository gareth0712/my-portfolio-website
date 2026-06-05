---
name: Aristide Benoist
url: https://aristidebenoist.com/
slug: aristide-benoist
category: uiux
industry: dev-portfolio
reachable: true
---

# Aristide Benoist

**One-liner:** A creative-developer portfolio rendered almost entirely in WebGL — 30 projects collapsed into a single fixed-viewport horizontal filmstrip with zero DOM scroll, proving that the whole site can BE the demo reel.

## Overview
Aristide Benoist is a French freelance creative/front-end developer (ex-Immersive Garden, Mazarine, AC3, Impossible Bureau) with multiple Awwwards SOTD/SOTM and Honorable Mentions. This is the current (2026) iteration, designed by Jon Way Studio (JW.S) with development and motion by Benoist himself. The entire homepage is a single full-bleed WebGL canvas: no traditional page, no vertical scroll (`document.body.scrollHeight === 0`). It reads as a confident, restrained "index of work" — the portfolio is the interaction. Audience: agencies and studios hiring high-end creative devs; the site itself is the proof of skill.

## Layout & Information Architecture
- **Single fixed viewport, no scroll.** `scrollHeight: 0`, `overflow: visible` — the page never grows. Navigation through 30 projects happens inside the canvas (scroll/drag advances a horizontal filmstrip rather than the document).
- **Signature composition:** a horizontal row of thin vertical "blade" slices on the RIGHT half of the screen, each a sliver of a project image. The left half is intentionally empty negative space — extreme asymmetry. Scrolling/dragging slides the strip; the focused blade presumably expands.
- **Persistent UI frame** anchored to viewport corners: wordmark `ARISTIDE` top-left, `ABOUT` top-right, status block `INDEPENDENT DEVELOPER / AVAILABLE APR. 2023` bottom-left, social links `EMAIL / INSTAGRAM / TWITTER` bottom-right. A center-top tick-mark ruler (`||||||||`) acts as a progress/position scrubber across the 30 projects.
- **Counter system:** projects labeled `01/30`, `02/30` — explicit "you are here / of N" wayfinding, reinforcing the index metaphor.
- Sub-pages exist as real routes (`/about`, `/house-of-gucci`, `/paul-et-henriette`) with `CLOSE` returning to index — overlay/detail pattern layered over the canvas.

## Navigation
- Minimal persistent chrome: `ARISTIDE` (home), `ABOUT`, and per-project `EXPLORE` links. Project detail pages add a `CLOSE` link back to the index — a modal-over-canvas mental model rather than discrete pages.
- The center tick-ruler doubles as a horizontal scrollbar/position indicator — non-standard wayfinding that tells you where you are in the 30-item reel without a list.
- No hamburger, no mega-menu, no sticky header in the conventional sense — the frame is always present because nothing scrolls under it.

## Typography
- **Two custom/licensed faces, both self-hosted:**
  - `jws` (700) — a condensed, heavy, slightly squared display face (the Jon Way Studio house font) used for the `ARISTIDE` wordmark. Tall, narrow, high-impact.
  - `TNY` (400) — a clean grotesque used for all UI/body labels (EXPLORE, ABOUT, counters, status).
- All UI text is **uppercase, tracked-out (letter-spaced), small** — labels not paragraphs. Hierarchy comes from weight/condensation contrast (heavy condensed wordmark vs. light spaced grotesque) rather than size jumps.
- Per-letter rendering observed in the wordmark (`A R I S T I D E` split into individual characters) — set up for staggered character animation.

## Color & Theme
- **Near-black canvas:** `html` background `rgb(20,20,20)`, content over deep charcoal. Default dark, no light mode.
- Project imagery is **desaturated to near-monochrome** by default (grayscale filmstrip), so color is reserved as an accent / on-focus reveal.
- Accent palette surfaced in computed styles: a muted **gold/amber** (`rgb(204,153,51)`, `rgb(255,241,206)`), a soft **sage green** (`rgb(186,196,184)`), and a dusty **rose** (`rgb(217,146,153)`) — warm, vintage-film accents against the cold charcoal. Used sparingly, likely per-project theming on the active blade.
- High restraint: 90% of the screen is black, which makes the imagery and the single active project pop.

## Imagery / Media
- Project thumbnails are cinematic film stills / fashion / architecture shots (House of Gucci, editorial work), reflecting his film-director background.
- Presented as **vertical blades** clipped from full images — you see fragments, creating curiosity (the "EXPLORE" payoff reveals the full piece).
- Rendered through **2 WebGL canvases** (1887×849 and 2516×1132 retina buffers) — imagery is textures on GPU planes, not `<img>` tags. This enables the slicing, distortion, and velocity-driven effects.

## Motion & Interaction
- **WebGL-driven horizontal gallery:** scroll/drag velocity translates the filmstrip; blades likely warp/skew with momentum (classic creative-dev "scroll velocity → vertex distortion" technique). Static screenshots can't show this — the strip is the motion centerpiece.
- **Hover-to-expand blades:** hovering a thin slice presumably grows it / reveals the full project and accent color. Effect lives on the canvas (frame-driven), so single screenshots capture only a static frame.
- **Custom cursor / pointer:** every project element reports `cursor:pointer` with bespoke clickable generics — typical of a custom WebGL cursor follower.
- **Per-letter wordmark animation** (characters pre-split for stagger reveals).
- **Route transitions as overlays:** `EXPLORE → /project`, `CLOSE → /` suggests animated open/close of detail views layered over the persistent canvas rather than full page reloads.
- Center tick-ruler animates as a live position scrubber tied to filmstrip offset.

## Tech / Stack (if known)
- **Vanilla WebGL** (not Three.js — `window.THREE` is undefined; Benoist publicly tags his work `#vanillawebgl`). Raw WebGL shaders for the blade slicing/distortion.
- **No global GSAP** detected (`window.gsap` undefined) — animation likely a custom RAF/tween engine bundled in, or GSAP imported as a module (not on `window`).
- **Single bundled JS** (`/static/js/d.js`) — hand-rolled build, minimal dependencies, everything compiled into one file. Very lean network footprint.
- **Self-hosted custom fonts** (`jws`, `TNY`) via `@font-face`.
- Real client-side routing (`/about`, project slugs) over the canvas shell.
- Design: Jon Way Studio. Dev + motion: Aristide Benoist. (Past iterations used Three.js / R3F / GSAP per his interviews; this build leans vanilla WebGL.)

## Notable Techniques (steal-worthy)
- **The site IS the canvas.** One full-viewport WebGL surface, `scrollHeight:0` — no DOM scroll at all. Removes layout/responsive complexity and makes the whole experience feel like a custom app, not a webpage.
- **Vertical-blade filmstrip as project index.** 30 projects shown as thin clipped slivers; only fragments are visible, which manufactures curiosity and lets you fit a huge body of work in one screen.
- **Tick-mark ruler as scrubber + counter (01/30).** Replaces a scrollbar and a project list with one elegant position indicator.
- **Extreme asymmetry + negative space.** Content pinned to the right half, left half empty black — confident, gallery-like, draws the eye to the work.
- **Default grayscale, color on focus.** Desaturating everything until interaction makes the active project the only colorful thing on screen.
- **Persistent corner-anchored UI frame.** Wordmark, nav, availability status, socials live permanently in the four corners because nothing scrolls — always-visible wayfinding and contact.
- **Vanilla WebGL, single bundle.** No Three.js, one `d.js` file — extreme performance discipline as a flex.

## What to steal for a personal portfolio
- **Lead with a counter + status line.** `INDEPENDENT DEVELOPER / AVAILABLE APR. 2023` and `01/30` instantly communicate role, availability, and scope of work — zero scrolling required. Cheap to copy in plain HTML.
- **Corner-anchored persistent frame** (name / about / availability / socials) gives a "designed product" feel without a heavy nav bar. Works even without WebGL.
- **Show fragments, not full thumbnails.** Clipping project images into slivers or strips creates intrigue and density — achievable with CSS `clip-path` / overflow if you don't want WebGL.
- **Grayscale-by-default, color-on-hover** is a one-line CSS effect (`filter: grayscale(1)` → `0` on hover) that mimics the high-end feel cheaply.
- **A horizontal scroll-velocity gallery** (Lenis + a transform on a flex row, or a small WebGL plane) is the realistic mid-tier version of this for a portfolio that doesn't want to hand-write raw WebGL.
- **Restraint as a flex:** 90% black, two fonts, tiny tracked-uppercase labels. The discipline reads as senior taste.
- **Custom display font for the wordmark only.** One distinctive condensed face for your name + a neutral grotesque for everything else is the entire type system here.

## Screenshots
- shots/aristide-benoist/01-hero.png — hero: black canvas, ARISTIDE wordmark, right-side vertical blade filmstrip, corner UI, tick-ruler
- shots/aristide-benoist/02-mid.png — identical to hero (no scroll; fixed viewport confirmed)
- shots/aristide-benoist/03-lower.png — identical (fixed viewport)
- shots/aristide-benoist/04-full.png — full-page = single viewport (proves scrollHeight 0)
- shots/aristide-benoist/05-hover.png — hover state over a blade (canvas frame; expand effect is RAF-driven, static capture)
