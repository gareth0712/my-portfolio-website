---
name: Locomotive
url: https://locomotive.ca/
slug: locomotive
category: uiux
industry: agency
reachable: true
---

# Locomotive

**One-liner:** A 7x Awwwards Agency of the Year that proves a near-monochrome, framework-free site can feel "world-class" through a custom typeface system, scroll-synced Three.js team models, and Lenis-smooth motion — restraint as flex.

## Overview
Locomotive is a Montreal digital-first design agency (founded 2008, creators of the open-source `locomotive-scroll` library). The site (`locomotive.ca/en`) is their own portfolio — for prospective clients and design-conscious recruits. Overall impression: confident minimalism. Two typefaces, black-on-white, generous whitespace, and a couple of WebGL canvases doing the heavy lifting. It deliberately reads as "we are mature now" — the case study notes they stripped down to a minimalistic stylesheet (two typefaces, four styles) to signal growth rather than show off effects for their own sake. Won Awwwards Site of the Month on multiple reinventions.

## Layout & Information Architecture
- Editorial, list-driven IA. Hero (oversized agency statement over a duotone portrait) → **Featured work** as a vertical list of huge serif project titles separated by hairline rules → Agency/Careers CTAs over a Three.js canvas → **Extras (13)** cluster (Articles / Culture / Store) → rich footer.
- Grid is loose and editorial, not a rigid card grid. Featured work is a single-column stacked list where each row is a full-width interactive hover target — density is low, each item gets breathing room.
- Whitespace is a primary material: thin 1px divider rules + large vertical gaps create rhythm. Only 2 `<section>` elements in DOM — the page is built as long scrollytelling regions, not boxy sections.
- Footer is a near-sitemap: Menu, Cookie prefs, Newsletter, Social (IG/Twitter/LinkedIn/Behance/GitHub), External sub-sites (Store, Locomotive Scroll, Annual trips, Dynasty), address, phone, email. Acts as the catch-all nav.

## Navigation
- Sticky top bar: wordmark "Locomotive®" left, a grouped center cluster ("Work, Agency, Careers, Store") that visually collapses into a single black pill/underline treatment on scroll, and "Let's talk" CTA right.
- A small animated train/track glyph sits between wordmark and nav (brand iconography from the custom typeface).
- Wayfinding is minimal — short flat nav, no mega-menu, no hamburger on desktop. Relies on the long-scroll narrative + footer sitemap rather than deep navigation.
- External properties (store, scroll lib, trips, "Dynasty" anniversary microsite) are surfaced as outbound links, framing Locomotive as an ecosystem.

## Typography
- **PP Locomotive New** (`LocomotiveNew`) — custom display face co-developed with Pangram Pangram Foundry & Tomorrow. Used for the H1 (~70px). Inspired by technical icons stamped on train cars; it embeds **icon ligatures** — the H1 raw text literally contains glyphs that render as small symbols (🔶 / 🍺 / 🔞 captured from DOM), a typographic gimmick where iconography and Latin letterforms share one font. This IS the brand.
- **HelveticaNowDisplay** — neutral grotesque for body / nav / UI labels.
- **Editorial New** (their own variable serif, separate Awwwards SOTM) — high-contrast didone-style serif used for the giant **Featured work** project titles (Theory Verse, Scout Motors, Populous). Stunning thick/thin contrast at large sizes.
- Hierarchy is driven by extreme scale jumps (70px+ display vs small UI labels) and weight contrast, not color. Small boxed tag labels ("OPS / DEV" style chips) add a technical/industrial accent in the hero.

## Color & Theme
- Effectively monochrome: pure black text (`rgb(0,0,0)`) on white. Transparent body bg. No accent color on links (links are also black) — contrast comes from scale and the duotone imagery, not hue.
- Hero photography is **duotone blue-tinted** (cool blue cast over a portrait), the one consistent chromatic signature against the otherwise neutral page.
- No gradients in the UI chrome; any color lives inside the WebGL/photo media. Light theme only. The discipline (essentially 2 colors) is the statement.

## Imagery / Media
- **Three.js 3D team models** — the signature. Real team members scanned with **Polycam**, cleaned in **Blender**, rigged with **Mixamo** animations, rendered via Three.js. 3,000+ visitors played with them ~1 min avg. An internal tool lets designers define a model's position/lighting/scroll-animation quickly.
- 2 `<canvas>` elements live in the DOM (hero + agency/careers region) — WebGL is load-bearing, not decorative filler.
- Duotone art-directed hero portrait; project thumbnails revealed on hover in the work list.
- Restrained use: WebGL "highlights content" rather than dominating, per their own June SOTM case study.

## Motion & Interaction
- **Lenis** smooth scroll confirmed active (`html.lenis`, `is-scrolling-up` state class) — the inertia-based scroll feel underpins everything. (Note: their famous `locomotive-scroll` lib has been superseded by Lenis from darkroom.engineering on this build.)
- Scroll-synced 3D: model position/lighting/animation tied to scroll progress.
- Featured-work list: hover a project name to reveal/scale its media + cursor-tracked imagery; hairline rules animate. Big-serif-list-with-hover-reveal is the centerpiece interaction.
- State-class driven (`is-loaded`, `is-ready`, `is-scrolling-up`) — a hand-rolled state machine on `<html>` toggles CSS transitions, classic agency-grade vanilla-JS motion architecture.
- Microinteractions: animated train glyph in nav, parallax, sticky triggers, folding/marquee effects (seen on their sister Editorial New site). Default cursor on this build (no custom cursor here, though present on other Locomotive properties).

## Tech / Stack (if known)
- **No front-end framework.** Confirmed by bundled `vendors.js` + `app.js` (custom hashed build) and their own article "Why don't we use front-end frameworks at Locomotive?" Hand-written vanilla JS modules + state classes.
- **Lenis** (smooth scroll), **GSAP** (animation, typical for their builds), **Three.js** (WebGL 3D).
- **Charcoal** — their in-house PHP CMS/framework powers the backend.
- 3D pipeline: Polycam (scan) → Blender (cleanup) → Mixamo (animation) → Three.js (web).
- Analytics: self-hosted **Matomo** + GA4 (gtag) + Cloudflare insights. reCAPTCHA on the contact form. Cloudflare CDN.

## Notable Techniques (steal-worthy)
- **Icon-ligature display typeface**: a custom font where typing certain strings yields brand iconography — letters and icons in one typographic system.
- **Two-typeface discipline**: a neutral grotesque (Helvetica Now) + a dramatic high-contrast variable serif (Editorial New) carries an entire portfolio with zero accent color.
- **Hover-reveal giant-serif work list**: full-width rows, hairline dividers, huge type, media revealed on hover — replaces the generic project card grid.
- **Scroll-synced Three.js with an internal authoring tool**: 3D models whose position/lighting/animation are scriptable per scroll — reusable and fast for the team.
- **State-class motion architecture on `<html>`** (`is-loaded`/`is-ready`/`is-scrolling-up`) instead of a framework — lean, performant, debuggable.
- **Restraint as positioning**: stripping effects to signal maturity, letting one duotone color + WebGL moment do all the talking.

## What to steal for a personal portfolio
- Pick **two typefaces** — one neutral workhorse, one expressive display/serif for headlines — and go essentially monochrome. Hierarchy from scale + weight, not color. Cheap to build, reads premium.
- Replace the card-grid project list with a **full-width hover-reveal list of oversized titles** + hairline rules. High impact, low component count.
- Add **Lenis** for inertia scroll (drop-in, no framework needed) — it's the single biggest "feels expensive" upgrade.
- One **WebGL/Three.js hero moment** (even a single scanned 3D object or shader) as your signature, kept restrained — not effects everywhere.
- Use a **footer-as-sitemap** so you can keep the top nav to 3-4 items and let the page scroll do the storytelling.
- A small recurring **brand glyph** (animated icon in the nav) gives identity without a logo overhaul.

## Screenshots
- shots/locomotive/01-hero.png (duotone portrait hero + display H1 + technical tag chips)
- shots/locomotive/02-mid.png (sticky nav pill + "Featured work" giant-serif hover list)
- shots/locomotive/03-lower.png (lower work list / CTA region)
- shots/locomotive/04-full.png (full-page capture)
