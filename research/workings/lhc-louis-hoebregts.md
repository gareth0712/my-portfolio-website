---
name: Lhc (Louis Hoebregts)
url: https://www.mamboleoo.be
slug: lhc-louis-hoebregts
category: portfolio
industry: awwwards
reachable: true
---

# Lhc (Louis Hoebregts)

**One-liner:** A creative-coder's portfolio that proves restraint is a flex — a stark IBM Plex Mono editorial grid, animated per-letter color typography, and a generative phyllotaxis particle field, all hand-built with vanilla JS instead of a heavy framework.

## Overview
Personal site of Louis Hoebregts (aka Mamboleoo), a Belgian/Brussels freelance front-end + generative-art developer with 12+ years experience, prolific on CodePen, Codrops and CSS-Tricks. The site is deliberately a writer/maker hub rather than a case-study showreel: it surfaces his latest articles, talks ("speaking"), and creative experiments ("labs"). Tone is playful and self-deprecating ("Louis the front-end painter 🎨", "weird addiction to shorts 🩳"). Overall impression: confident minimalism — the chrome is plain so the typography and the one signature generative graphic do all the talking. It reads as a craftsman who can afford to be understated because the work speaks.

## Layout & Information Architecture
Single-page home built on a visible bordered grid (thin 1px black rules drawn as actual cell borders, graph-paper feel). Vertical flow: (1) sticky-feeling top nav bar, (2) hero with a thin vertical "plumb line" hanging from the nav into a large centered greeting, (3) Biography block, (4) "Latest news" — a 3-up card row of articles with date / title / excerpt / "Read me" pill button, (5) a row of Instagram/lab thumbnails (Paper Motion, etc.) with "Explore" pills, (6) an oversized horizontal marquee stack repeating "articles / speaking / labs" as giant outline-able words, paired with a generative particle canvas, (7) footer with social icons, "Made with love & code", copyright and design credit (lotte bijlsma). Density is low and airy up top, escalating to bold oversized type at the bottom — a deliberate quiet-to-loud crescendo.

## Navigation
Minimal horizontal bar: brand "mamboleoo" left, three cell-boxed links right (articles / speaking / labs) — each link sits in its own bordered box, matching the graph-grid motif. No hamburger, no mega-menu. Wayfinding is reinforced redundantly: the same three destinations reappear as inline "Check all my articles / Check my incoming talks / Explore my experimentations" CTAs mid-page and again as the giant marquee words at the bottom, so every section funnels to the same three hubs.

## Typography
Single typeface across the whole site: **IBM Plex Mono** (confirmed via computed style `IBMPlexMono`). Monospace as the entire identity — gives an engineer/maker signal and a slightly retro-terminal warmth. Hierarchy is driven by size and color rather than family changes: large centered hero greeting, mid-size H2 section labels ("Latest news", "Biography"), and a dramatic display-scale marquee at the foot where the words balloon to viewport-spanning size. The signature treatment: the subline "Let me put some color in your life." renders each word in a different hue (green/teal/blue/orange/etc.), turning a mono font into a rainbow without changing the typeface.

## Color & Theme
Predominantly light: white background, near-black (`rgb(0,0,0)`) text and 1px black grid lines — almost a printed-zine / blueprint aesthetic. Accent strategy is the per-word/per-letter multicolor (matching the "painter / put color in your life" concept) and emoji as inline color punctuation. The one dark zone is the generative particle field (black panel with saturated rainbow dots), giving a striking light/dark contrast exactly where the eye lands at the bottom. No gradients, no glass — flat, high-contrast, deliberately un-trendy.

## Imagery / Media
Almost no photography. Media = (1) article/lab thumbnails (screenshots of his own experiments: CSS var icon system, WebGL→SVG render, SVG-path animation, Paper Motion paper-craft posts), and (2) a hero generative graphic: a **phyllotaxis / sunflower-spiral particle field** — hundreds of colored points arranged in two Fibonacci-spiral clusters on black, rendered live in-page (no iframe; canvas mounts on scroll, top-of-page canvas count was 0). Art direction is "show the craft, not stock photos."

## Motion & Interaction
Static screenshots can't show it, so from DOM + his known body of work: the particle field is animated/generative (his signature is motion + the unexpected; he authored Codrops/CSS-Tricks pieces on GSAP path animation and WebGL). The giant "articles/speaking/labs" words function as a horizontal marquee/scroll-reactive band. Per-word color and emoji give the hero a playful, hand-tuned feel. Cards use pill "Read me / Explore" buttons as clear hover targets. Expect subtle scroll-tied behavior and cursor/hover micro-states consistent with a CodePen-native developer, but the restraint is intentional — motion is concentrated in the one generative centerpiece rather than sprinkled everywhere.

## Tech / Stack (if known)
Hand-rolled, not a SPA framework: a single concatenated bundle `assets/dist/js/scripts.js?v6`, no meta generator, `html.js` class (progressive-enhancement JS-detection pattern, à la Modernizr). No global `window.gsap` exposed and zero canvases at top-of-page (lazy-mounted). Given his published work, the generative graphics are his own canvas/Three.js/GSAP (TweenMax) code rather than a library dependency loaded site-wide. CSS-driven layout (likely Sass — he's written about Sass icon systems). Static-site / lightweight asset-pipeline vibe (versioned `?v6` query-string cache-busting) rather than Next/Nuxt.

## Notable Techniques (steal-worthy)
- **Mono-font-only identity** (IBM Plex Mono everywhere) — distinctive maker/engineer signal with near-zero font budget.
- **Per-word multicolor on a monospace line** — turns plain text into the brand concept ("put color in your life") without illustrations.
- **Visible graph-paper grid** — using real 1px cell borders as the layout's decorative system; each nav link lives in its own box.
- **Quiet-to-loud vertical crescendo** — airy white top, oversized marquee + dark generative panel at the bottom as the payoff.
- **One generative centerpiece, lazy-mounted** — a phyllotaxis particle field that mounts on scroll (canvas count 0 at top) instead of front-loading WebGL.
- **Redundant triple-funnel IA** — the same 3 destinations as nav boxes, inline CTAs, and giant marquee words.
- **Versioned single-bundle, no framework** — `scripts.js?v6` cache-busting, `html.js` progressive enhancement; fast and dependency-light.

## What to steal for a personal portfolio
- Commit to ONE typeface with personality (a good mono) and let size + color carry the whole hierarchy — cheaper and more memorable than a 3-font system.
- Encode your tagline visually: if your concept is "color/motion/craft", make the type literally demonstrate it (per-word hues here).
- Pick a single signature interactive graphic and lazy-mount it on scroll, rather than scattering effects — concentrates the "wow" and keeps initial load light.
- Use a visible structural grid (cell borders) as free decoration; it frames content and signals deliberateness without imagery.
- Funnel everything to a tiny set of destinations (here: articles / speaking / labs) and repeat them at multiple scales so the path is unmissable.
- Skip the framework for a content-light personal site — a single versioned bundle + progressive enhancement is plenty and stays fast.

## Screenshots
- shots/lhc-louis-hoebregts/01-hero.png
- shots/lhc-louis-hoebregts/02-mid.png
- shots/lhc-louis-hoebregts/03-lower.png
- shots/lhc-louis-hoebregts/04-full.png
