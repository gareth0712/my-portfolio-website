---
name: Lusion
url: https://lusion.co/
slug: lusion
category: uiux
industry: motion-3d
reachable: true
---

# Lusion

**One-liner:** A London/Bristol creative studio whose own site is a real-time WebGL playground — custom renderer, physics-driven 3D, and scroll-as-camera storytelling — making it one of the most technically advanced studio portfolios on the web (multiple Awwwards SOTD + Site of the Month).

## Overview
Lusion is an award-winning 3D and interactive web studio. Their site is both a portfolio and a proof-of-capability: every section is a live demonstration of the work they sell (3D visual storytelling, immersive web, interactive experiences). The overall impression is "playful flex" — they explicitly avoid minimalist trends to give themselves creative + technical room. A numeric preloader ("100" counter on black) gates the experience while heavy assets/shaders compile, then resolves into a bright, tactile 3D hero. Audience: brands and agencies shopping for premium interactive web work, plus the dev/design community (the site doubles as recruiting/credibility bait).

## Layout & Information Architecture
Single-page narrative spine with section anchors rather than a traditional long scrolled document. Captured IA (from DOM):
1. Preloader / loading counter
2. Hero — H1 statement + interactive 3D cluster, "SCROLL TO EXPLORE" affordance
3. Manifesto — "Bold Ideas, Brought to Life" + supporting paragraph + "OUR APPROACH" CTA
4. Featured Work — 10 project links (Oryzo AI, Of The Oak, Devin AI, Porsche: Dream Machine, Synthetic Human, Meta: Spatial Fusion, Spaace, DDD 2024, Choo Choo World, Soda Experience) each tagged with discipline labels (CONCEPT / WEB / DESIGN / DEVELOPMENT / 3D / ANIMATION / AR / WEB3) → "SEE ALL PROJECTS"
5. Contact / "Let's work together" block — Bristol address (Suite 2, 9 Marsh Street), socials, two mailto routes (hello@ / business@)
6. Newsletter signup + R&D link to labs.lusion.co
Layout is generous-whitespace on the lavender shell, with the 3D canvas occupying a wide framed viewport. "+" corner markers and a horizontal rule frame the hero like a viewfinder/technical drawing. Density is low and deliberate — the spectacle does the talking.

## Navigation
Top bar: wordmark "LUSION" (home) left, a pill "LET'S TALK" CTA (wraps a mailto), and a "MENU" toggle right. Menu expands to HOME / ABOUT US / PROJECTS / CONTACT / LABS. There is also a "Back" button in the persistent control cluster (used during project/sub-page transitions). Nav is lightweight and floats over the canvas; wayfinding is minimal because the experience is linear/guided. Project tiles use animated repeating-letter labels (e.g. "O O O r r r y y y z z z o" — letters duplicated for a marquee/stagger reveal effect).

## Typography
Single typeface: **Aeonik** (Grilli Type) for both H1 and body — a clean geometric grotesk. Hierarchy is driven by size + weight + spacing, not by pairing. H1 is a large humble-bragging mission statement set in a tight measure. H4 micro-labels ("Featured Work", "Bold Ideas, Brought to Life") use heavy letter-spacing as section eyebrows. Notable treatment: animated letter-by-letter reveals and duplicated-glyph marquee effects on project titles; the preloader number uses tall lining figures with diacritic-style accents as a stylistic flourish. Sans-only keeps the type recessive so the 3D leads.

## Color & Theme
Light, airy base — a pale lavender/near-white shell (NOT dark-mode, which is unusual for the genre). The framed 3D viewport is near-black, creating a strong figure/ground contrast that makes the render pop. Signature accent: **electric/ultramarine blue** on the 3D connector pieces, set against white, grey, and black matte plastics. CTA pill is dark (near-black) for emphasis. Palette is restrained (lavender / black / white / cobalt blue) so the color story lives inside the 3D objects and their real-time lighting rather than in flat UI chrome.

## Imagery / Media
Almost no traditional photography on the home view — the hero is a **real-time WebGL scene**: a cluster of 3D pipe/connector ("plumbing joint") primitives in white/grey/black/blue that respond to cursor and scroll with physics-like motion and soft real-time shadows/GI. 3 `<canvas>` elements present. Project tiles surface video/3D case-study media on interaction. Per their own case study they use cloth simulation, fluid-dynamics shaders, and real-time global-illumination approximations. Art direction is "premium toy / product-render" — tactile matte materials, studio lighting, clean stage.

## Motion & Interaction
- Scroll acts as a **camera/timeline driver** (WebGL scroll navigation) — scrolling advances a continuous 3D narrative rather than scrolling a document; the hero is effectively pinned while the scene evolves ("each scroll feels like a continuation of a bigger story").
- Numeric **preloader counter** masks shader compile / asset load, then transitions into the live scene.
- **Physics-driven hero**: the connector cluster reacts to pointer movement with momentum/spring motion and real-time shadow updates.
- **Letter-stagger / duplicated-glyph reveals** on headings and project titles (marquee-like character animation).
- Custom cursor + hover state changes on interactive elements (`cursor:pointer` generics that aren't standard links).
- Page/route transitions are choreographed (the persistent "Back" control implies an SPA-style transition layer over the canvas).

## Tech / Stack (if known)
- **Astro** as the site framework (confirmed: `/_astro/hoisted.*.js` bundle, hydrated islands).
- **Custom WebGL renderer** — per Lusion's Awwwards case study they wrote their own renderer rather than using Three.js, for performance (custom cloth sim, fluid shaders, GI approximation). 3 canvases on the home page.
- Earlier Lusion work (the "curly tubes" hero) was Three.js-based (documented by Codrops); the current studio site moved to the in-house engine.
- GSAP commonly used for DOM/timeline animation in their ecosystem (and broadly attributed to Lusion-style sites).
- Google Tag Manager / GA4 (`G-W2XC5XK9QJ`) for analytics. Font: Aeonik (self-hosted).
- Separate R&D subdomain: labs.lusion.co.

## Notable Techniques (steal-worthy)
- Numeric preloader that doubles as a load-progress mask for heavy GPU work — buys time without feeling like a spinner.
- Scroll-as-camera: bind scroll progress to a 3D timeline so the page tells one continuous story instead of stacked sections.
- Light background + dark framed canvas for maximum render contrast (counter-trend; most 3D sites go full dark).
- Single sans (Aeonik) kept recessive so the 3D is the hero — type supports, never competes.
- Duplicated-glyph / letter-stagger title animations for cheap-but-premium motion on plain text.
- "Show, don't tell": the portfolio IS the demo reel — every interaction proves a sellable capability.
- Viewfinder framing (corner "+" marks, rules) to make the canvas feel like a curated stage / technical drawing.

## What to steal for a personal portfolio
- **Lead with one signature interactive moment**, not ten. A single well-crafted scroll-driven 3D (or even CSS/Canvas) hero beats a busy page. You don't need a custom renderer — Three.js + a Lenis smooth-scroll + GSAP ScrollTrigger gets 80% of the feel.
- **Use a progress-counter preloader** to cover first-load cost gracefully (and set expectations of "this is a crafted experience").
- **Invert the genre default**: a light/lavender shell with a dark framed media window reads fresh and makes work pop without committing to full dark mode.
- **One typeface, ruthless hierarchy** via size/weight/letter-spacing — pick a geometric grotesk (Aeonik-like; cheaper alts: General Sans, Hanken Grotesk) and let layout do the work.
- **Tag projects with discipline chips** (WEB / 3D / DESIGN / DEV) so a recruiter scans your range in one pass.
- **Make the portfolio self-demonstrating**: if you build interactive UI, the site itself should be the strongest case study.
- Practical guardrail: gate the heavy WebGL behind a capability/`prefers-reduced-motion` check and ship a static fallback — Lusion's approach taxes low-end devices.

## Screenshots
- shots/lusion/01-hero.png (preloader: "100" counter on black + loading mark)
- shots/lusion/02-mid.png (real hero: lavender shell, 3D connector cluster, nav + CTA)
- shots/lusion/03-lower.png (hero scene with stronger blue lighting state)
- shots/lusion/04-full.png (full-viewport hero — page is canvas-pinned, not natively long-scrolled)
