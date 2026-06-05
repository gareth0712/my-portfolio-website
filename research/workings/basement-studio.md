---
name: Basement Studio
url: https://basement.studio/
slug: basement-studio
category: uiux
industry: agency
reachable: true
---

# Basement Studio

**One-liner:** A creative dev studio that turns its own name into a literal, real-time 3D "basement" room rendered on an OffscreenCanvas worker thread — proving the "we make cool shit that performs" thesis in the first second, with a pure black/white Geist editorial system that lets the WebGL and motion do all the shouting.

## Overview
Portfolio/marketing site for basement.studio, a digital studio + branding powerhouse (Next.js/React/3D/motion specialists, 11 Awwwards SOTD + 19 honorable mentions). Audience: ambitious startups, scale-ups and brands (clients shown include Vercel, MrBeast, Daylight, KidSuper, ElevenLabs, Cal.com, Solana, Replicate). Overall impression: confident, dark, cinematic, engineering-forward. The site is itself the sales pitch — it demonstrates technical capability (real-time 3D, butter-smooth scroll, performance) rather than just describing it.

## Layout & Information Architecture
- Full-bleed dark canvas; generous vertical rhythm with large dramatic section breaks.
- IA is sectioned as a scrolling narrative: Hero (3D room) → "Trusted by Visionaries" client logo grid → "Featured Projects" case-study reel (Vercel Ship, Daylight, KidSuper, MrBeast) → "Capabilities" oversized manifesto statement → Contact.
- Client logos laid out as a structured bordered grid (6 columns of cells) — clean, table-like, lots of negative space inside each cell so each logo breathes.
- Project entries are text-led: each pairs a tag taxonomy (Websites & Features / Marketing Execution / IRL Experience Design) with a short punchy blurb and client name.
- Density is deliberately low: one big idea per viewport, type scaled huge.

## Navigation
- Sticky top bar persisting over all sections: Home / Services / Showcase (25) / People / Blog (28) / Lab — with a right-aligned "Contact Us".
- Wordmark "basement." (lowercase, period) sits top-left as home anchor.
- Counters in parentheses next to Showcase (25) and Blog (28) — a nice live-inventory wayfinding cue that signals depth of work without a click.
- Nav stays legible over both the dark 3D hero and the light-on-dark content via persistent white text; subtle dotted "•••••" affordance near Contact.
- An opt-in **"Turn music on"** audio toggle lives in the nav — ambient sound design as a brand signature, never autoplayed.

## Typography
- Single typeface system: **Geist** (Vercel's open-source grotesk) with a Geist fallback — used for both headings and body, so hierarchy comes from scale/weight, not family pairing.
- Hero H1 ~87px, tight leading, sentence case: "A digital studio & branding powerhouse making cool shit that performs."
- Capabilities section pushes type even larger (near-viewport-width) with multi-line bold statements ("We're here to create the extraordinary. No shortcuts, just bold, precision-engineered work...").
- Mid-grey de-emphasized section labels ("Capabilities", "Trusted by Visionaries") act as quiet eyebrow kickers above the loud headline.

## Color & Theme
- Strict monochrome: pure black background `rgb(0,0,0)`, pure white text `rgb(255,255,255)`. Locked dark theme.
- The 3D hero introduces the only "color" — warm amber/orange lamp glow and screen light inside the rendered room — making the WebGL scene the chromatic focal point against an otherwise achromatic UI.
- Client logos rendered in white/grey so brand colors don't break the monochrome discipline.
- No gradients in the chrome; depth and warmth come entirely from the lit 3D scene.

## Imagery / Media
- Signature asset is a **real-time rendered 3D basement room** (Three.js): dark cinematic interior with desk, screens/monitors, a glowing lamp, furniture and ambient occlusion — the studio's name made literal and explorable.
- Two `<canvas>` elements; the main one uses **OffscreenCanvas with transferControlToOffscreen** (renders on a worker thread off the main thread).
- No stock photography; client work is represented by logos + typographic case-study blurbs rather than screenshots above the fold.

## Motion & Interaction
- Intro/loader sequence on first paint (the hero screenshot caught mid-loader as blank white before the 3D scene composites in) — a deliberate staged reveal.
- "Scroll to Explore" prompt invites the scroll-driven narrative.
- Scroll-triggered reveals throughout (their open-source **BSMNT Scrollytelling** lib wraps GSAP ScrollTrigger).
- **Custom cursor** present (a `[class*=cursor]` element) — replaces native pointer for a bespoke feel.
- Real-time 3D scene implies interactive/parallax camera response in the hero.
- Heavy use of GSAP for DOM/SVG/canvas transitions per the studio's own published methodology.

## Tech / Stack (if known)
- **Next.js (App Router)** on **Vercel** — confirmed by `main-app-*.js` chunks and `dpl_` deployment query strings on every asset.
- **React Three Fiber + Three.js r180** for the 3D hero (eval confirmed `three.js r180`, `r3f: true`), rendered via **OffscreenCanvas** on a worker.
- **GSAP** (+ ScrollTrigger via their own BSMNT Scrollytelling) for motion — their documented house stack.
- **Geist** font family.
- TypeScript (their stated default). Historically Stitches CSS-in-JS + Locomotive Scroll; current build shows no Lenis class, so smooth-scroll may be custom/GSAP-driven.

## Notable Techniques (steal-worthy)
- **Brand-as-3D-scene**: literally model your studio's metaphor (a "basement") as the hero instead of a generic gradient — instantly memorable and on-brand.
- **OffscreenCanvas + worker rendering**: keep a heavy WebGL hero off the main thread so scroll/interaction stay 60fps — performance is the flex.
- **One-font system (Geist), hierarchy by scale**: no pairing decisions, total consistency, type does the art direction.
- **Monochrome chrome + colored media**: lock the UI to black/white so the one warm-lit 3D scene becomes the entire color story.
- **Live inventory counters in nav** ("Showcase (25)", "Blog (28)"): signal depth and freshness as a wayfinding cue.
- **Oversized manifesto section**: a near-full-width typographic statement as a standalone "capabilities" beat — high emotional impact, zero imagery cost.
- **Staged loader → composite reveal**: cover the WebGL warm-up with an intentional intro instead of a flash of unstyled content.
- **Opt-in ambient audio toggle**: a rare, memorable differentiator that adds atmosphere without the hostility of autoplay.

## What to steal for a personal portfolio
- Pick ONE signature interactive centerpiece (a 3D object, a shader, a physics toy) and make it the hero — depth over breadth. You don't need a whole 3D room; one tasteful WebGL element on an otherwise minimal page reads as "this person can build hard things."
- Adopt a single-typeface, scale-driven hierarchy (Geist is free) — removes pairing risk and looks instantly clean.
- Go monochrome for chrome and let one media element carry all the color/warmth.
- Add small "depth signals" to nav (project count, post count) so visitors sense substance before clicking.
- Use a deliberate intro/loader to hide asset warm-up rather than letting heavy media pop in jarringly.
- Use a quiet grey eyebrow label above each big headline — cheap, strong hierarchy.

## Screenshots
- shots/basement-studio/01-hero.png (3D rendered basement room hero)
- shots/basement-studio/02-mid.png ("Trusted by Visionaries" client logo grid)
- shots/basement-studio/03-lower.png (oversized "Capabilities" manifesto)
- shots/basement-studio/04-full.png (full-page capture)
