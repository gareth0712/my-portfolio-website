---
name: Minh Pham
url: https://www.minhpham.design/
slug: minh-pham
category: uiux
industry: dev-portfolio
reachable: true
---

# Minh Pham

**One-liner:** An Awwwards SOTD / FWA-winning designer portfolio that fuses Blender-baked 3D, GSAP motion-path typography, and a confident, self-deprecating voice into a cinematic single-page experience that feels like an interactive showreel rather than a CV.

## Overview
Single-page portfolio for Minh Pham, a multidisciplinary product/motion/3D designer ("Making good shit since 2009"). The site opens on a deliberate intro gate (centered bat/dog logomark + a single `START` button) before unlocking the experience and audio. After START it becomes a vertically-scrolled, scroll-driven narrative: hero statement → discipline tags (3D / VISUAL / MOTION / PRODUCT / TUTORIAL) → client work list over a rotating 3D globe → testimonials over a 3D particle field → a Dieter Rams "Good design is honest" manifesto over a B&W VR portrait → a CONNECT footer. The tone is the differentiator: every link is rewritten with wit (Dribbble = "Fake works", Behance = "The Jurassic Park", YouTube = "Random tutorials", LinkedIn = "Serious me", Instagram = "Not Tiktok"). Overall impression: premium, cinematic, art-directed, and personality-forward.

## Layout & Information Architecture
- True one-pager with anchor sections (`#about`, `#work`, `#contact`); no traditional multi-page routing.
- Intro gate first: nothing scrolls until `START` is pressed — a hard interaction threshold that doubles as an audio-unlock and a "loading complete" cue.
- Editorial, asymmetric layout. Massive left-aligned display type (FORD / UFC / LINCOLN / ROYAL CARIBBEAN / SLEEPIQ / NFL stacked vertically) on the left, with a 3D globe filling the right two-thirds.
- An orange horizontal "reveal bar" sweeps across the active client row exposing a one-line case note ("I was just one person on a massive team that created an entire Royal Caribbean eco-system.") — pairs a bold headline with a humble micro-caption.
- Generous negative space and near-black canvas; density is low per viewport but high in motion. Content is paced one "beat" per scroll section.
- Persistent chrome: fixed left vertical social/icon rail, fixed top-right text nav, fixed bottom-right vertical "SOUND ON/OFF" label.

## Navigation
- Sticky top-right text nav: ABOUT / WORK / CONTACT, with the active item brightened (warm cream) vs muted siblings. Each label is duplicated in the DOM ("ABOUT ABOUT", "WORK WORK") — a classic hover text-swap/marquee fill technique.
- Fixed left icon rail (globe/Dribbble, Instagram, YouTube/play, LinkedIn) gives persistent social wayfinding without cluttering the content column.
- Logomark top-left returns home.
- Vertical "SOUND ON/OFF" control bottom-right — explicit audio agency, set up at the START gate.
- Wayfinding is minimal by design; it relies on scroll momentum and section beats rather than a scrollbar progress indicator.

## Typography
- Primary face: **ITC Avant Garde Gothic** (computed `"Avant Garde", sans-serif`) — geometric, tightly-set, retro-modern; carries the whole brand.
- Extreme scale contrast: house-sized display headings (client names, "GOOD DESIGN IS HONEST") against tiny letter-spaced eyebrow labels ("WHAT THEY SAID", "CONNECT").
- Hero uses heavily letter-spaced caps ("M A K I N G  G O O D  S H I T  S I N C E  2 0 0 9") for a kinetic, spaced-out cadence.
- Testimonials use a large bold pull-quote with a two-tone treatment (active line in cream, upcoming line ghosted grey) to telegraph a typewriter/reveal animation.
- Hierarchy is driven almost entirely by size + weight + spacing, not by color or many type families — disciplined single-typeface system.

## Color & Theme
- Dark theme. Body background `#0D0D0D` (near-black); body text `#B7AB98` (warm tan/greige) — not pure white, which gives a softer, filmic, expensive feel.
- Single high-energy accent: **orange/coral** (`~#E85A2A`) used surgically — the reveal bar, the floating cursor dot, link-arrow markers, the active scroll indicator. Restraint makes the accent read as a brand signal, not decoration.
- No gradients in the UI chrome; the "color" comes from 3D/video media (blue particle field, monochrome globe, B&W portrait).
- High contrast where it matters (display type), intentionally low contrast for secondary metadata.

## Imagery / Media
- **3D globe** (canvas/WebGL) rotating behind the client list — monochrome, low-key, lets type stay the hero.
- **3D particle/bokeh field** (blue depth-of-field spheres) behind the testimonials.
- **Background video player** present (custom controls: play/pause, progress slider, expand/close) for case content.
- **Monochrome VR-headset portrait** anchoring the Dieter Rams manifesto section — art-directed, cinematic grading.
- 3D assets per Codrops were modeled in **Blender** with lighting/shadows baked into textures (depth without runtime cost). Consistent muted, desaturated art direction throughout.

## Motion & Interaction
- Intro gate (`START`) sequences the load and audio unlock — a curtain-raise moment.
- **Smooth scroll via Lenis** (detected on `window.Lenis`) drives momentum scrolling and synchronizes scroll-position to animations.
- Scroll-driven choreography: client rows reveal sequentially with an orange wipe bar; type assembles/translates as sections enter.
- GSAP + MotionPathPlugin (per Codrops teardown) animates individual letters along curved paths, assembling characters into paragraphs at center — bespoke kinetic typography.
- Custom **floating cursor dot** (orange) that tracks the pointer and likely scales/morphs over interactive targets.
- Hover text-swap on nav items (duplicated label DOM) and orange arrow markers that animate on the CONNECT links.
- **Sound design**: ambient/SFX audio with an explicit on/off toggle — rare and memorable.
- Rotating 3D globe + drifting particle field give continuous ambient motion even when idle.

## Tech / Stack (if known)
- Custom hand-rolled build: `vendor.bundle.js` + `app.bundle.js` via **Webpack** (no React/Vue framework signature; not Next/Nuxt).
- **Three.js / WebGL** for 3D (canvas confirmed in DOM; THREE namespace bundled, not global).
- **GSAP** (+ MotionPathPlugin) for timeline/letter motion (scoped inside bundle, not on window).
- **Lenis** for smooth scrolling (confirmed via `window.Lenis`).
- **Blender** for 3D asset authoring (baked textures).
- A small `caching.js` asset-cache helper; **Cloudflare** (insights beacon) hosting/CDN; Google Analytics (gtag).
- Awards: Awwwards Site of the Day + Honorable Mention, FWA. Built ~2023.

## Notable Techniques (steal-worthy)
- **Intro START gate** that unlocks scroll + audio in one gesture — sets expectations, hides load, creates a "press play" moment.
- **Orange reveal/wipe bar** that ties a giant client name to a humble one-line case caption (big claim + small honesty).
- **Single accent color used surgically** (one coral) against near-black + warm-tan text — instant brand recognition with near-zero color budget.
- **Duplicated-label hover swap** on nav for a clean fill/marquee transition with no JS state.
- **Personality-rewritten link labels** (Dribbble→"Fake works", Behance→"The Jurassic Park") — turns a boilerplate social row into voice.
- **Letter-by-letter motion-path typography** (GSAP MotionPathPlugin) assembling words from scattered glyphs.
- **Baked-lighting Blender assets** for cinematic 3D at low runtime weight.
- **Explicit SOUND ON/OFF** control — adds immersion while respecting user agency.

## What to steal for a personal portfolio
- Lead with **voice**: rename generic links/sections with wit; it instantly differentiates a dev portfolio from a template.
- Adopt the **near-black + warm off-white + one accent** palette (`#0D0D0D` / `#B7AB98` / coral). Avoid pure `#000`/`#FFF` for a more premium feel.
- Use a **single strong display typeface** at extreme scale contrast (huge headers, tiny letter-spaced eyebrows) instead of multiple fonts.
- Pair every **bold claim with a humble micro-caption** ("one person on a massive team…") — confidence without arrogance, very effective for credibility.
- Add **Lenis smooth scroll + a small custom cursor dot** for cheap perceived polish before investing in heavy WebGL.
- If adding 3D, **bake lighting in Blender** to keep it lightweight — one ambient rotating object beats a busy scene.
- Consider a lightweight **intro gate** only if you also have audio/heavy assets to mask; otherwise it can be a friction cost. Make it skippable on repeat visits.

## Screenshots
- shots/minh-pham/01-hero.png (post-START hero: stacked client names over 3D globe + orange reveal bar)
- shots/minh-pham/02-mid.png ("WHAT THEY SAID" testimonials over blue 3D particle field)
- shots/minh-pham/03-lower.png (Dieter Rams "Good design is honest" + CONNECT footer)
- shots/minh-pham/04-full.png (full-page capture)
- shots/minh-pham/05-contact.png (CONNECT footer with orange-arrow links, email/phone)
- (Note: the pre-click intro START gate was also captured during initial load before clicking START.)
