---
name: Stripe
url: https://stripe.com/
slug: stripe
category: uiux
industry: fintech
reachable: true
---

# Stripe

**One-liner:** The reference implementation for fintech marketing sites — a real-time WebGL/Canvas gradient that became a design meme, paired with a ruthlessly disciplined motion system and a custom typeface, all in service of making "financial infrastructure" feel light and inevitable.

## Overview
Stripe's homepage sells developer-first payments infrastructure to everyone from solo founders (Atlas, Startups) to enterprises (Hertz, URBN, Toyota). The overall impression is calm confidence: enormous claims ("from your first transaction to your billionth", "$1.9T processed in 2025") delivered with restraint, generous whitespace, and a single signature visual gimmick (the animated gradient) that does almost all the emotional work. Nothing shouts; the polish is in micro-details. The page is heavily SSR'd (Next.js) and localizes by geo (loaded as `/en-jp`).

## Layout & Information Architecture
- Wide centered column (~1080px content max-width) on a white canvas with deep horizontal padding — density is deliberately low.
- IA is a top-of-funnel ladder: Hero claim → logo wall (social proof: OpenAI, Amazon, Nvidia, Toyota, Figma, Anthropic, Shopify, Uber) → "Flexible solutions for every business model" (accordion of 6 product propositions) → "The backbone of global commerce" stat band (135+ currencies, $1.9T volume, 99.999% uptime, 200M+ subscriptions) → segmented "Powering businesses of all sizes" (Enterprise / Startups / Platforms, each with its own tabbed customer stories + resource links) → developer infrastructure section (docs, GitHub, integration paths) → "What's happening" news carousel → Stripe Press "Book of the week" → dual CTA footer → mega-footer sitemap.
- Bento-style card grids for the solutions section: gradient-tinted product mockup cards (checkout UI, card issuing, agentic-commerce chat, analytics chart) sitting above descriptive cards.
- Mega-footer is a dense multi-column sitemap (Products / Solutions / Use cases / Developers / Resources / Company) — classic enterprise breadth, but visually quiet.

## Navigation
- Sticky top bar: wordmark left; Products / Solutions / Developers / Resources as mega-menu trigger buttons (`expanded=false` ARIA buttons), Pricing as a plain link, then Sign in + a filled "Contact sales" pill right.
- The mega-menus are the famous Stripe nav: a single morphing dropdown panel that animates width/height/position between menu items rather than swapping discrete dropdowns (Lokesh Dhakar's teardown documents this) — the container tweens so moving Products→Solutions feels like one fluid surface, not four separate menus.
- Wayfinding inside long sections handled by tabs/accordions (Enterprise/Startups/Platforms) and prev/next carousel controls with proper disabled states on the first slide.

## Typography
- Custom variable typeface **Söhne** (`sohne-var`, falling back to SF Pro Display) by Klim Type Foundry — a grotesque-sans that reads as neutral-but-warm; it's a major part of the brand and not freely available, which is itself a moat.
- H1 renders ~34px on this viewport (responsive/fluid) with tight leading; headline uses a two-tone treatment — the first sentence in near-black (#061B31) and the supporting clause in a muted grey-blue, so the hierarchy lives inside one paragraph.
- Strong, consistent scale: section H2s, card H3/H4s, with the same family throughout — no display/body pairing, the variable weights carry all the contrast.

## Color & Theme
- Predominantly light theme: white/near-white backgrounds, ink text at `#061B31` (rgb 6,27,49) — a desaturated navy, never pure black for body.
- Primary accent / CTA: **electric indigo `#533AFD`** (rgb 83,58,253) for filled buttons and links.
- The hero gradient is the brand: a diagonal flowing ribbon of orange → coral/pink → magenta → violet → blue, mesh-blended and animated.
- Deliberate dark interlude: the "backbone of global commerce" stat band flips to a deep indigo-blue (#1f1f6b-ish) with a white radial light-burst / particle visualization — a tonal palette break that re-grabs attention mid-scroll.

## Imagery / Media
- Almost no stock photography. Visual language is: (1) the animated gradient, (2) crisp UI product mockups (Checkout sheet, issued card, dashboard charts) tinted with soft gradient washes, (3) data-viz set pieces (the radial particle burst for the stats band), (4) monochrome customer logos.
- Art direction is "show the product, abstract the rest" — animations communicate how the product works so you don't have to read the copy (per Stripe's own Connect engineering blog).

## Motion & Interaction
- **Hero gradient animation** — the signature. Rendered to `<canvas class="hero-wave-animation__canvas">`. Historically Stripe shipped a tiny WebGL implementation ("minigl" + a `Gradient` class) animating a mesh of color stops every frame; this DOM exposes a canvas driven by that same technique (community recreations by Kevin Hufnagl / Jordi Enric reproduce it with custom GLSL shaders + minigl).
- **Morphing mega-nav** — animated container tween between menu panels (see Navigation).
- Motion is governed by a **design system of tokens** (standardized durations, easings, choreography) so sequences are predictable and reusable; components are kept small and isolated to bound repaint scope.
- Performance discipline: animate only `transform` + `opacity`, never layout properties (width/height/top/left); some animations use the Web Animations API (CSS-keyframe performance, JS chainability) authored in vanilla JS with no heavy library.
- Microinteraction obsession: documented case where the CEO requested randomized per-character delays on a typing animation because uniform timing felt non-human — the "functional vs. felt" gap is treated as a first-class concern.
- Scroll-triggered reveals, tabbed/accordion expand-collapse, and customer-story carousels with hover states throughout. (`prefers-reduced-motion` evaluated at runtime.)

## Tech / Stack (if known)
- **Next.js** (assets served from `b.stripecdn.com/mkt-ssr-statics/assets/_next/static/...`), server-rendered + geo-localized routing.
- **Canvas/WebGL** custom gradient engine (minigl-derived) — not a generic library.
- **Web Animations API** + bespoke vanilla-JS motion runtime governed by internal motion tokens; no GSAP/Framer Motion dependency evident.
- Custom font hosting (Söhne variable).

## Notable Techniques (steal-worthy)
- Animated mesh-gradient hero on a `<canvas>` — one hero visual that defines the entire brand, cheap to render, impossible to screenshot-steal because it moves.
- Two-tone single-paragraph headline (dark lead sentence + muted continuation) to create hierarchy without changing font size.
- Morphing single-surface mega-menu instead of four independent dropdowns.
- Mid-scroll dark tonal break (the indigo stats band with radial particle burst) to reset attention on a long page.
- Motion design tokens (durations/easings/choreography) as a system — animations are reusable and predictable, not one-offs.
- Performance rule baked into the system: only animate transform/opacity, isolate animated components to limit repaint.
- Product-mockup-as-illustration: show real UI tinted with gradient washes instead of stock photos.

## What to steal for a personal portfolio
- **One signature moving visual.** Build a single canvas/WebGL gradient (or a cheap shader mesh) for your hero and let it carry the brand — far higher ROI than ten static sections. Plenty of MIT recreations (Kevin Hufnagl, Jordi Enric "stripe-gradient") to fork.
- **Two-tone headline** for instant hierarchy with zero extra components: lead clause in ink, supporting clause in muted grey — pure CSS.
- **Pick a strong neutral grotesque + one electric accent.** Stripe = Söhne + #533AFD on near-navy ink (#061B31), no pure black. Inter/Geist are free Söhne-adjacent substitutes.
- **Animate only transform + opacity, gate on `prefers-reduced-motion`.** This single rule keeps a motion-heavy portfolio at 60fps.
- **Insert one dark tonal break** in an otherwise light page to re-grab the eye on scroll — a "stats" or "about" band works.
- **Use real product/UI screenshots as your imagery**, lightly gradient-tinted, instead of stock photos — reads as more credible and on-brand.

## Screenshots
- shots/stripe/01-hero.png (hero: two-tone headline + diagonal animated gradient + logo wall)
- shots/stripe/02-mid.png (bento solutions cards: checkout, issuing card, agentic-commerce chat, analytics, gradient-tinted mockups)
- shots/stripe/03-lower.png (dark indigo "backbone of global commerce" stat band with radial particle burst)
- shots/stripe/04-full.png (full-page capture)
