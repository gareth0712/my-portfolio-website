---
name: Spline
url: https://spline.design/
slug: spline
category: uiux
industry: design-tools
reachable: true
---

# Spline

**One-liner:** A 3D design tool whose homepage *is* the product demo — live, orbit-able WebGL scenes rendered in real-time inside a pitch-black canvas, proving the value prop the instant the page loads.

## Overview
Spline is a browser-based, collaborative, real-time 3D design platform (think "Figma for 3D"). The marketing site targets designers, product teams, and brand/marketing teams who want interactive 3D without writing Three.js. The overriding impression is confidence-through-demonstration: instead of describing what the tool does, the hero hands you an interactive 3D scene you can press-and-drag to orbit. Heavy enterprise social proof (Google, Microsoft, OpenAI, Shopify, Accenture) anchors credibility. The whole site is dark, cinematic, and product-forward.

## Layout & Information Architecture
Single long-scroll landing page on a centered ~1100px content column with generous black negative space. Clear top-down narrative:
1. Hero — value prop + live interactive 3D scene.
2. "A complete platform for real-time interactive design" — a horizontally-scrolling marquee of community files (Interactive Websites, Product Design, Brand & Marketing, Gamified Experiences, 3D Mockups, 3D Logos, Animated Characters) that loops by duplicating the card set.
3. Enterprise logo wall ("Empowering individuals and teams at world's leading organizations").
4. Product pillar sections (3D Design, then Hana — their 2D/vector canvas) each with 3-4 feature sub-headings (Layer-based materials, Interactivity & Motion, Variables & Data; Vector Networks, Visual Effects).
5. Pull-quote testimonials interleaved between product sections (large-type customer quotes as section breaks).
6. "Ship to Web, iOS and Android" — a tabbed code-snippet block (Webflow / Framer / Wix Studio / HTML-JS / React / Next.js / Swift / Kotlin) with copy-code.
7. "Loved by innovative teams" — three customer story cards.
8. "Getting started" resource grid (Community, Library, Academy, Docs, Download).
9. Final "Design. Collaborate. Ship." CTA + fat mega-footer (Products / Resources / Company / Contact + social).

Density is low and deliberate — each section breathes, with one idea per viewport. Whitespace (blackspace) does the heavy lifting.

## Navigation
Floating, sticky, pill-shaped nav centered horizontally (not edge-to-edge). On the black hero it renders as a near-transparent dark pill; once you scroll past the hero it gains a subtle filled/elevated background and the "Get Started" CTA flips from neutral grey to a saturated electric blue — a scroll-state contrast boost so the primary CTA stays visible against lighter sections below. Dropdown buttons (Products, Resources, Community) expand mega-style. Above the nav sits a thin top promo banner ("Meet Omma — build with natural language") linking out to omma.build. Wayfinding is simple; no in-page anchor nav, relies on linear scroll.

## Typography
Single typeface: **Spline Sans** (their own open-source Google Font), with system-ui fallback stack. Geometric-humanist sans, very round, friendly. Hierarchy is driven almost entirely by size and weight contrast, not by family pairing:
- H1 hero: very large (~64px+), tight leading, bold, pure white.
- Section H2s: large, often two-line, with a soft white→muted-grey gradient fill on the text (the "Collaborative 3D Design, ready for production" heading fades top-to-bottom).
- Body/subhead: medium grey (~60% white) for de-emphasis against the bold white headings.
- Testimonial quotes set as oversized H2-scale type — the quote *is* the visual, not a small caption.

## Color & Theme
Pure black (`rgb(0,0,0)`) base — committed dark mode, no light alternative on the landing. Text is white / graded grey. The only chromatic color comes from the 3D content itself: vivid jewel-tone blobs (magenta, cobalt blue, emerald green, amber/gold) floating in the hero, plus the gradient Spline logo mark. The single UI accent is **electric blue** reserved exclusively for the primary CTA in scrolled state. Strategy: keep the entire chrome monochrome so the colorful 3D renders and product screenshots pop with maximum contrast.

## Imagery / Media
The defining medium is **live real-time WebGL** — 3 `<canvas>` elements rendered by Spline's own runtime (not the `spline-viewer` web component; zero `spline-viewer` tags found, so it's the React/runtime SDK). The hero scene is interactive ("Press and drag to orbit"). Other media: looping marquee of real community files (each linking to the actual app file), product UI screenshots framed in a faux app chrome (window controls + Export button), and crisp monochrome customer logos. No stock photography at all — everything is either rendered 3D or product UI. Strong, consistent art direction: dark stage, spotlit objects.

## Motion & Interaction
- **Hero orbit**: drag-to-rotate live 3D, mouse-position parallax on the floating objects.
- **Sticky-nav state morph**: background fill + CTA color transition triggered by scroll position.
- **Infinite marquee**: category cards auto-scroll horizontally and loop seamlessly via a duplicated card set (the snapshot shows each card appearing twice).
- **Gradient text reveals** and soft fade-ins on section headings as they enter the viewport.
- **Tabbed code block**: click a platform (React, Next.js, Swift…) to swap the snippet + copy-to-clipboard.
- Hover states on cards/CTAs (lift / background shift). Overall motion is smooth and "physical," matching the 3D theme — restrained, never gimmicky.

## Tech / Stack (if known)
- **Next.js** (App build, `_next/static` chunks, `__next` root) bundled with **Turbopack** (turbopack chunks present).
- **Spline runtime** `@splinetool/runtime` driving the WebGL canvases (their own product dogfooded on the marketing site).
- **Spline Sans** self-hosted webfont.
- Heavy marketing/analytics layer: GTM, multiple GA4 properties, Google Ads conversion, Meta Pixel, LinkedIn Insight, Vector.co, Metricool.
- No Nuxt; classic Next SSG (`_ssgManifest` / `_buildManifest`).

## Notable Techniques (steal-worthy)
- **Product-as-hero**: the live interactive demo replaces the explainer — the strongest possible "show don't tell."
- **Monochrome chrome, colorful payload**: pure-black UI so the only color comes from the work being showcased; maximizes perceived vibrancy with near-zero palette effort.
- **Scroll-reactive CTA recolor**: primary button shifts grey→electric-blue after the hero so it never disappears against lighter sections.
- **Floating centered pill nav** that gains elevation on scroll — modern, unobtrusive, doesn't eat full-width.
- **Quote-as-section-break**: oversized customer quotes double as palette-cleansing dividers between dense feature blocks.
- **Seamless duplicated-card marquee** of *real* linked content (community files), not static logos.
- **Tabbed multi-framework code block** — speaks to every audience (no-code builders + React/Swift devs) in one component.

## What to steal for a personal portfolio
- Lead with a **single interactive hero artifact** (a live canvas, a draggable 3D object, a WebGL shader) instead of a static banner — it instantly signals technical skill.
- Go **committed dark/monochrome** for the shell and let your actual project thumbnails/work supply 100% of the color.
- Use **one self-hosted display sans** and drive all hierarchy through size + weight + grey-grading; add a subtle white→grey gradient on big headings for a premium feel.
- Add a **floating pill nav** that elevates and recolors its primary CTA on scroll.
- Build sections as **one-idea-per-viewport** with heavy blackspace — density signals nothing, restraint signals confidence.
- Reuse the **oversized-quote-as-divider** pattern to break up project sections with testimonials/blurbs.

## Screenshots
- shots/spline/01-hero.png (hero with live 3D scene + "Press and drag to orbit")
- shots/spline/02-mid.png (scrolled nav state + enterprise logo wall)
- shots/spline/03-lower.png ("Collaborative 3D Design" gradient heading + app-chrome product shot)
- shots/spline/04-full.png (full-page capture)
